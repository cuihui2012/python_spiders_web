<template>
  <div class="scheduler">
    <el-button type="primary" :loading="flag" @click="restart_scheduler">重启调度</el-button>
    <el-tag id="tag" :type="type" v-cloak>状态：{{state}}</el-tag>
    <em class="mark">备注：重启调度，并依次加入列表中任务状态为 '已开启 ' 的任务</em>
    <el-divider content-position="left"></el-divider>
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="job_id" label="任务ID" width="120"></el-table-column>
      <el-table-column prop="job_name" label="任务名称" width="120"></el-table-column>
      <el-table-column prop="year" label="年频" width="60"></el-table-column>
      <el-table-column prop="month" label="月频" width="60"></el-table-column>
      <el-table-column prop="day" label="日频" width="60"></el-table-column>
      <el-table-column prop="hour" label="时频" width="60"></el-table-column>
      <el-table-column prop="minute" label="分频" width="60"></el-table-column>
      <el-table-column prop="second" label="秒频" width="60"></el-table-column>
      <el-table-column prop="is_flag" label="任务状态" :formatter="getFlag" width="120"></el-table-column>
      <el-table-column prop="create_time" label="创建时间" width="180"></el-table-column>
      <el-table-column prop="option" label="操作">
        <template slot-scope="scope">
          <el-button @click="editData(scope.row)" type="text" size="medium">
            <i class="el-icon-edit"></i>编辑
          </el-button>
          <i class="switch_label">任务开关：</i>
          <el-switch
            title="任务开关"
            on-text="是"
            off-text="否"
            on-color="#5B7BFA"
            off-color="#dadde5"
            v-model="scope.row.switch"
            @change="changeSwitch(scope.$index,scope.row)"
          ></el-switch>

          <div :style="scope.row.email_disabled" class="switch_btn">
            <i class="switch_label" v-cloak>{{scope.row.email_notice_desc}}：</i>
            <el-switch
              title="邮件通知开关"
              on-text="是"
              off-text="否"
              on-color="#5B7BFA"
              off-color="#dadde5"
              v-model="scope.row.email_value"
              @change="update_email_notice(scope.$index,scope.row)"
            ></el-switch>
          </div>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="任务编辑" :visible.sync="dialogFormVisible" width="40%">
      <el-form :model="form" :rules="rules" ref="formRules">
        <el-form-item label="任务ID" :label-width="formLabelWidth" prop="job_id">
          <el-input v-model="form.job_id" autocomplete="off" disabled></el-input>
        </el-form-item>
        <el-form-item label="任务名称" :label-width="formLabelWidth" prop="job_name">
          <el-input v-model="form.job_name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="年频" :label-width="formLabelWidth" prop="year">
          <el-input v-model="form.year" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="月频" :label-width="formLabelWidth" prop="month">
          <el-input v-model="form.month" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="日频" :label-width="formLabelWidth" prop="day">
          <el-input v-model="form.day" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="时频" :label-width="formLabelWidth" prop="hour">
          <el-input v-model="form.hour" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="分频" :label-width="formLabelWidth" prop="minute">
          <el-input v-model="form.minute" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="秒频" :label-width="formLabelWidth" prop="second">
          <el-input v-model="form.second" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="validateForm('formRules')">提 交</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export const isFlag = { "0": "未开启", "1": "已开启" };
export default {
  data() {
    return {
      flag: false,
      tableData: [],
      state: "",
      type: "",
      dialogFormVisible: false,
      form: {
        job_id: "",
        job_name: "",
        year: "",
        month: "",
        day: "",
        hour: "",
        minute: "",
        second: ""
      },
      rules: {
        job_id: [{ required: true, message: "请输入任务ID", trigger: "blur" }],
        job_name: [
          { required: true, message: "请输入任务名称", trigger: "blur" }
        ],
        year: [{ required: true, message: "请输入年频", trigger: "blur" }],
        month: [{ required: true, message: "请输入月频", trigger: "blur" }],
        day: [
          {
            required: true,
            message: "请输入日频",
            trigger: "blur"
          }
        ],
        hour: [{ required: true, message: "请输入时频", trigger: "blur" }],
        minute: [{ required: true, message: "请输入分频", trigger: "blur" }],
        second: [{ required: true, message: "请输入秒频", trigger: "blur" }]
      },
      formLabelWidth: "100px"
    };
  },
  watch: {
    // newVal,oldVal(固定参数) 新值,旧值
    dialogFormVisible: function(newVal, oldVal) {
      this.$refs["formRules"].resetFields();
    }
  },
  created: function() {
    // 实例创建完之后调用
  },
  mounted: function() {
    // 挂载之后调用
    // 准备数据
    this.get_scheduler_status();
    this.get_job_lists();
  },
  methods: {
    getFlag(row, column, cellValue) {
      return isFlag[cellValue];
    },
    async get_scheduler_status() {
      var results = "";
      // 发送请求
      await this.$axios
        .get("/get_scheduler_status")
        .then(response => (results = response.data))
        .catch(function(error) {
          // 请求失败处理
          this.flag = false;
          this.$alert("获取状态失败", "提示", {
            confirmButtonText: "确定"
          });
        });
      if (results == "1") {
        this.state = "已启动";
        this.type = "success";
      } else {
        this.state = "未启动";
        this.type = "info";
      }
    },
    async restart_scheduler() {
      this.flag = true;
      var results = "";
      // 发送请求
      await this.$axios
        .get("/restart_scheduler")
        .then(response => (results = response.data))
        .catch(function(error) {
          // 请求失败处理
          this.flag = false;
          this.state = "未启动";
          this.type = "info";
          this.$alert("重启调度失败", "提示", {
            confirmButtonText: "确定"
          });
        });
      if (results == "1") {
        this.flag = false;
        this.state = "已启动";
        this.type = "success";
        this.$alert("重启调度成功", "提示", {
          confirmButtonText: "确定"
        });
      } else {
        this.flag = false;
        this.state = "未启动";
        this.type = "info";
        this.$alert("重启调度失败", "提示", {
          confirmButtonText: "确定"
        });
      }
    },
    async get_job_lists() {
      var results = [];
      // 发送请求
      await this.$axios
        .get("/get_job_lists")
        .then(response => (results = response.data))
        .catch(function(error) {
          // 请求失败处理
          this.$alert("请求任务列表数据失败", "提示", {
            confirmButtonText: "确定"
          });
        });
      if (results.length > 0) {
        results.forEach(result => {
          if (result["is_flag"] == "0") {
            result["switch"] = false;
          } else {
            result["switch"] = true;
          }
          if (result["email_notice"] == "0") {
            // 邮件通知禁用
            result["email_value"] = false;
            result["email_disabled"] = "display: none;";
          } else if (result["email_notice"] == "1") {
            // 邮件通知启用
            result["email_value"] = true;
            result["email_disabled"] = "display: block;";
          } else {
            // 邮件通知关闭
            result["email_value"] = false;
            result["email_disabled"] = "display: block;";
          }
        });
        this.tableData = results;
      }
    },
    async changeSwitch(index, row) {
      var results = "";
      var msg = row.switch ? "开启" : "关闭";
      // 发送请求
      var _this = this;
      await this.$axios
        .get("/reverse_job/" + row.job_id)
        .then(response => (results = response.data))
        .catch(function(error) {
          // 请求失败处理
          row.switch = !row.switch;
          _this.$alert("请求失败", "提示", {
            confirmButtonText: "确定"
          });
        });
      if (results == "1") {
        // 成功后修改状态
        row.is_flag = row.is_flag == "0" ? "1" : "0";
        console.log(row.is_flag);
        this.$alert("任务" + msg + "成功", "提示", {
          confirmButtonText: "确定"
        });
      } else if (results == "0") {
        this.$alert(msg + "失败", "提示", {
          confirmButtonText: "确定"
        });
        row.switch = !row.switch;
      }
    },
    editData(row) {
      this.dialogFormVisible = true;
      this.form = JSON.parse(JSON.stringify(row));
    },
    validateForm(formRules) {
      this.$refs[formRules].validate(valid => {
        if (valid) {
          console.log(this.form);
          this.submitForm();
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    async submitForm() {
      var results = "";
      await this.$axios
        .post("/update_job_detail", this.form)
        .then(response => (results = response.data))
        .catch(function(error) {
          // 请求失败处理
          this.$alert("请求失败", "提示", {
            confirmButtonText: "确定"
          });
        });
      if (results == "1") {
        this.$alert("修改成功，任务重启后生效", "提示", {
          confirmButtonText: "确定"
        });
        this.get_job_lists();
      } else {
        this.$alert("修改失败", "提示", {
          confirmButtonText: "确定"
        });
      }
      this.dialogFormVisible = false;
    },
    async update_email_notice(index, row) {
      var results = "";
      await this.$axios
        .get("/update_email_notice/" + row.job_id)
        .then(response => (results = response.data))
        .catch(function(error) {
          // 请求失败处理
          this.$alert("请求失败", "提示", {
            confirmButtonText: "确定"
          });
        });
      var msg = row.email_value ? "开启" : "关闭";
      if (results == "1") {
        this.$alert("邮件通知" + msg + "成功", "提示", {
          confirmButtonText: "确定"
        });
        this.get_job_lists();
      } else {
        this.$alert("邮件通知" + msg + "失败", "提示", {
          confirmButtonText: "确定"
        });
      }
      this.dialogFormVisible = false;
    }
  }
};
</script>
<style lang="less" >
.mark {
  margin-left: 15px;
  color: red;
}
#tag {
  margin-left: 15px;
  font-size: 16px;
}
.switch_label {
  margin-left: 15px;
}
.switch_btn {
  margin-right: -2px;
}
</style>