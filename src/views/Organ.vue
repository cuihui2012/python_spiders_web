<template>
  <div class="organ">
    <div class="organ-hd">
      <div class="input-div">
        <input
          type="text"
          :placeholder="$t('org.searchOrgName')"
          placeholder-style="color: #dadada;"
        >
        <i class="el-icon-search search-icon"></i>
      </div>
      <download-excel class="export-excel-wrapper" :data="tableData" name="机构导出表格.xls">
        <!-- 上面可以自定义自己的样式，还可以引用其他组件button -->
        <el-button type="primary" size="small">
          <i class="el-icon-upload"></i>
          {{$t('org.exportOrg')}}
        </el-button>
      </download-excel>
    </div>
    <div class="organ-table">
      <el-table :data="tableData" border="" style="width: 100%">
        <el-table-column prop="name" label="机构名称"></el-table-column>
        <el-table-column prop="grade" label="机构等级"></el-table-column>
        <el-table-column prop="chief" label="上级机构"></el-table-column>
        <el-table-column prop="phone" label="联系电话"></el-table-column>
        <el-table-column prop="email" label="邮箱"></el-table-column>
        <el-table-column prop="url" label="网址"></el-table-column>
        <el-table-column prop="address" label="地址"></el-table-column>
        <el-table-column prop="start" label="创建时间"></el-table-column>
        <el-table-column prop="update" label="更新时间"></el-table-column>
        <el-table-column prop="note" label="备注"></el-table-column>
        <el-table-column fixed="right" label="操作" width="240">
          <template slot-scope="scope">
            <el-button type="text" size="small">分配权限</el-button>
            <el-button @click="toAdd" type="text" size="small">
              <i class="el-icon-plus"></i>添加
            </el-button>
            <el-button @click="handleClick(scope.$index,scope.row)" type="text" size="small">
              <i class="el-icon-edit"></i>修改
            </el-button>
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              type="text"
              size="small"
            >
              <i class="el-icon-delete"></i>删除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 添加 -->
    <div class="lay" v-show="addFlag || upFlag">
      <div class="add-lay">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="80px"
          class="demo-ruleForm"
        >
          <el-form-item label="机构名称" prop="name">
            <el-input v-model="ruleForm.name" @blur="getOrg(ruleForm.name)"></el-input>
          </el-form-item>
          <el-form-item label="机构等级">
            <p style="color: #606266;">{{ruleForm.gread}}</p>
          </el-form-item>
          <el-form-item label="上级机构">
            <p style="color: #606266;">{{ruleForm.chief}}</p>
          </el-form-item>
          <el-form-item label="联系电话" prop="phone">
            <el-input v-model="ruleForm.phone"></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="ruleForm.email"></el-input>
          </el-form-item>
          <el-form-item label="网址">
            <el-input v-model="ruleForm.url"></el-input>
          </el-form-item>
          <el-form-item label="地址">
            <el-input v-model="ruleForm.address"></el-input>
          </el-form-item>
          <el-form-item label="备注">
            <el-input type="textarea" v-model="ruleForm.note"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button
              type="primary"
              @click="addFlag?addForm('ruleForm'):upForm('ruleForm')"
            >确定</el-button>
            <el-button @click="cancel">取消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          name: "总行",
          grade: "一级",
          chief: "-",
          phone: "123225225",
          email: "122@qq.com",
          http: "http://123.com",
          address: "杭州",
          start: "2018-05-19",
          update: "2020-05-19",
          note: ""
        },
        {
          name: "总行",
          grade: "一级",
          chief: "-",
          phone: "123225225",
          email: "122@qq.com",
          http: "http://123.com",
          address: "杭州",
          start: "2018-05-19",
          update: "2020-05-19",
          note: ""
        },
        {
          name: "总行",
          grade: "一级",
          chief: "-",
          phone: "123225225",
          email: "122@qq.com",
          http: "http://123.com",
          address: "杭州",
          start: "2018-05-19",
          update: "2020-05-19",
          note: ""
        },
        {
          name: "总行",
          grade: "一级",
          chief: "-",
          phone: "123225225",
          email: "122@qq.com",
          url: "http://123.com",
          address: "杭州",
          start: "2018-05-19",
          update: "2020-05-19",
          note: ""
        }
      ],
      ruleForm: {
        name: "",
        gread: "",
        chief: "",
        phone: "",
        email: "",
        address: "",
        url: "",
        note: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入机构名称", trigger: "blur" },
          { min: 1, max: 5, message: "长度在 1 到 5 个字符", trigger: "blur" }
        ],
        phone: [{ required: true, message: "请输入联系电话", trigger: "blur" }],
        email: [{ required: true, message: "请输入邮箱", trigger: "blur" }]
      },
      addFlag: false,
      upFlag: false,
      delFlag: false,
      showFlag: false,
      tabIndex: ""
    };
  },
  methods: {
    getOrg(name) {
      if (name == "总行") {
        this.ruleForm.gread = "一级";
        this.ruleForm.chief = "-";
      } else {
        this.ruleForm.gread = "四级";
        this.ruleForm.chief = "总行";
      }
    },
    // 添加
    toAdd() {
      this.tabIndex = "";
      this.addFlag = true;
    },
    // 修改
    handleClick(index, row) {
      this.ruleForm = row;
      this.tabIndex = index;
      this.upFlag = true;
    },
    // 删除
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    addForm(ruleForm) {
      var tableData = this.tableData;
      tableData.push(this.$refs.ruleForm.model);
      this.ruleForm = {
        name: "",
        gread: "",
        chief: "",
        phone: "",
        email: "",
        address: "",
        url: "",
        note: ""
      };
      this.addFlag = false;
    },
    upForm(ruleForm) {
      var i = this.tabIndex;
      this.tableData[i] = this.$refs.ruleForm.model;
      this.ruleForm = {
        name: "",
        gread: "",
        chief: "",
        phone: "",
        email: "",
        address: "",
        url: "",
        note: ""
      };
      this.upFlag = false;
    },
    cancel() {
      this.addFlag = false;
      this.upFlag = false;
    }
  }
};
</script>
<style lang="less" scoped>
.organ {
  .organ-hd {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    .input-div {
      position: relative;
      input {
        line-height: 22px;
        padding-left: 10px;
        border-radius: 4px;
        border: 0;
        border: 1px solid #eee;
        font-size: 12px;
        outline: none;
      }
      .search-icon {
        position: absolute;
        top: 50%;
        right: 8px;
        transform: translateY(-50%);
        font-size: 12px;
        color: #dadada;
      }
    }
    p {
      padding: 0 10px;
      height: 24px;
      line-height: 24px;
      background: #4958a9;
      border-radius: 4px;
      font-size: 13px;
      color: #fff;
      i {
        margin-right: 4px;
      }
    }
  }
  .organ-table {
    .oper {
      display: flex;
      justify-content: space-around;
    }
  }
  .lay {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: 66;
  }
  .add-lay {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 30%;
    padding: 20px;
    background: #fff;
    border-radius: 6px;
  }
}
</style>

