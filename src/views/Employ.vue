<template>
  <div class="employ">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="招聘职位">
        <el-input v-model="formInline.zpzw" placeholder="请输入招聘职位"></el-input>
      </el-form-item>
      <el-form-item label="招聘企业">
        <el-input v-model="formInline.zpqy" placeholder="请输入招聘企业"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
      <em class="mark">
        数据来源：
        <a href="https://www.zhipin.com/c101160100/?query=java&page=1" target="blank">BOSS直聘</a>（兰州-java所有数据）
      </em>
    </el-form>
    <!-- 华丽分割线 -->
    <el-divider content-position="left" class="top_line"></el-divider>
    <!-- 表格 -->
    <el-table :data="tableData" stripe style="width: 100%" @sort-change="changeTableSort">
      <el-table-column prop="zpzw" label="招聘职位" width="180" :show-overflow-tooltip="true">
        <template slot-scope="tableData">
          <a :href="tableData.row.zw_url" target="_blank" class="data_a">{{tableData.row.zpzw}}</a>
        </template>
      </el-table-column>
      <el-table-column prop="zpqy" label="招聘企业" width="150">
        <template slot-scope="tableData">
          <a :href="tableData.row.qy_url" target="_blank" class="data_a">{{tableData.row.zpqy}}</a>
        </template>
      </el-table-column>
      <el-table-column prop="zpdd" label="招聘地点" width="100"></el-table-column>
      <el-table-column prop="zpnx" label="招聘年限" width="100"></el-table-column>
      <el-table-column prop="zpxl" label="招聘学历" width="100"></el-table-column>
      <el-table-column prop="qyxz" label="企业性质" width="150"></el-table-column>
      <el-table-column prop="qygm" label="企业规模" width="150"></el-table-column>
      <el-table-column prop="zpxz" label="招聘薪资" width="120"></el-table-column>
      <el-table-column prop="create_time" sortable="'custom'" label="发布时间" width="180"></el-table-column>
    </el-table>
    <div class="page_plug">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        zpzw: "",
        zpqy: "",
      },
      submit_formInline: {
        zpzw: "",
        zpqy: "",
      },
      tableData: [],
      currentPage: 1,
      pageSize: 10,
      total: 0,
      order: " create_time desc ",
    };
  },
  created: function () {
    // 实例创建完之后调用
  },
  mounted: function () {
    // 挂载之后调用
    // 准备数据
    this.get_employ_lists();
  },
  methods: {
    async onSubmit() {
      // 点击分页会使用到该参数
      this.submit_formInline["zpzw"] = this.formInline["zpzw"];
      this.submit_formInline["zpqy"] = this.formInline["zpqy"];
      // 重置初始值
      this.pageSize = 10;
      this.currentPage = 1;
      this.get_employ_lists();
    },
    async get_employ_lists() {
      var results = [];
      // 发送请求
      var _this = this;
      await this.$axios
        .get(
          "/get_employ_lists?zpzw=" +
            this.submit_formInline["zpzw"] +
            "&zpqy=" +
            this.submit_formInline["zpqy"] +
            "&size=" +
            this.pageSize +
            "&page=" +
            this.currentPage +
            "&order=" +
            this.order
        )
        .then((response) => (results = response.data))
        .catch(function (error) {
          // 请求失败处理
          _this.$alert("请求列表数据失败", "提示", {
            confirmButtonText: "确定",
          });
        });
      this.tableData = results["data"];
      this.total = results["total"];
    },
    handleSizeChange(val) {
      // 改变每页多少条
      this.pageSize = val;
      this.get_employ_lists();
    },
    handleCurrentChange(val) {
      // 改变当前页
      this.currentPage = val;
      this.get_employ_lists();
    },
    changeTableSort(column) {
      if (column.order == "descending") {
        this.order = " " + column.prop + " desc ";
      }
      if (column.order == "ascending") {
        this.order = " " + column.prop + " asc ";
      }
      this.get_employ_lists();
    },
  },
};
</script>
<style lang="less" scoped>
.mark {
  margin-top: 11px;
  display: inline-block;
  color: red;
}
.top_line {
  margin-top: 3px;
}
.page_plug {
  float: right;
  margin-top: 12px;
}
.data_a:link {
  text-decoration: none;
}
.data_a:visited {
  text-decoration: none;
}
</style>
