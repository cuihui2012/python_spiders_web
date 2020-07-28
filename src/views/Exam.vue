<template>
  <div class="exam">
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="考试通知">
        <el-input v-model="formInline.name" placeholder="请输入关键字"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="get_exam_lists">查询</el-button>
      </el-form-item>
      <em class="mark">
        数据来源：
        <a href="http://www.rst.gansu.gov.cn/def/def/index_1_1459.html" target="blank">甘肃人社厅</a>（专业技术资格考试）
      </em>
    </el-form>
    <!-- 华丽分割线 -->
    <el-divider content-position="left" class="top_line"></el-divider>
    <el-timeline>
      <el-timeline-item
        v-for="(timelineData, index) in timelineDatas"
        :key="index"
        :timestamp="timelineData.notice_time"
        placement="top"
      >
        <el-card>
          <p>
            <a :href="timelineData.notice_url" target="blank">{{timelineData.notice_name}}</a>
          </p>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>
<script>
export default {
  data() {
    return {
      timelineDatas: [],
      formInline: {
        name: "",
      },
    };
  },
  created: function () {
    // 实例创建完之后调用
  },
  mounted: function () {
    // 挂载之后调用
    // 准备数据
    this.get_exam_lists();
  },
  methods: {
    async get_exam_lists() {
      var results = [];
      // 发送请求
      await this.$axios
        .get("/get_exam_lists?name=" + this.formInline["name"])
        .then((response) => (results = response.data))
        .catch(function (error) {
          // 请求失败处理
          this.$alert("请求考试信息数据失败", "提示", {
            confirmButtonText: "确定",
          });
        });
      this.timelineDatas = results;
    },
  },
};
</script>
<style lang="less">
.mark {
  margin-top: 11px;
  display: inline-block;
  color: red;
}
.top_line {
  margin-top: 3px !important;
}
</style>