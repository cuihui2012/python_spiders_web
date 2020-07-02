<template>
  <div>
    <!-- 选择框开始 -->
    <el-select v-model="value" placeholder="请选择" class="_select">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>
    <el-button type="primary" icon="el-icon-search" id="search" @click="drawLine">搜索</el-button>
    <em class="mark">
      数据来源：
      <a href="https://xa.xinfang.anjuke.com/lou/chengnan/a1_w1/" target="blank">安居客</a>（监控西安-城南-住宅-在售小区，免登录直接爬取）
    </em>
    <el-divider content-position="left"></el-divider>
    <!-- 搜索框结束 -->
    <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
    <div id="main" style="height: 500px"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: [],
      value: ""
    };
  },
  created: function() {
    // 实例创建完之后调用
  },
  mounted: function() {
    // 挂载之后调用
    // 准备数据
    this.get_datas_lists();
  },
  methods: {
    async get_datas_lists() {
      var results = [];
      // 发送请求
      await this.$axios
        .get("/get_datas_lists")
        .then(response => (results = response.data))
        .catch(function(error) {
          // 请求失败处理
          alert("请求列表数据失败!");
        });
      results.forEach(result => {
        this.options.push({
          value: result,
          label: result
        });
      });
      // 设置默认值,默认绘图
      this.value = this.options[0]["value"];
      this.drawLine();
    },
    async drawLine() {
      let myChart = this.$echarts.init(this.$("#main")[0]);
      // 获取搜索框中城市
      let xiaoqu = this.value;
      if (!xiaoqu) {
        alert("请选择一个小区!");
        return;
      }
      //数据加载完之前先显示一段简单的loading动画
      myChart.showLoading();
      // 发送请求
      var results = [];
      await this.$axios
        .get("/get_datas_details/" + xiaoqu)
        .then(response => (results = response.data))
        .catch(function(error) {
          // 请求失败处理
          alert("图表请求数据失败!");
          myChart.hideLoading();
        });
      var times = [];
      var prices = [];
      if (results.length > 0) {
        for (var i = 0; i < results.length; i++) {
          times.push(results[i]["create_time"]);
          prices.push(results[i]["price"]);
        }

        myChart.hideLoading(); //隐藏加载动画
        // 绘图
        myChart.setOption({
          // 配置标题
          title: {
            text:
              results[0].name +
              "（" +
              results[0].address +
              "-" +
              results[0].address_desc +
              "-" +
              results[0].type +
              "-" +
              results[0].area +
              "）",
            left: "center",
            textStyle: {
              color: "rgba(119, 101, 101, 1)",
              fontSize: 20,
              fontStyle: "normal"
            }
          },
          // 配置鼠标悬停提示信息
          tooltip: {
            // 遇到横坐标的点, 会进行悬停
            trigger: "axis",
            axisPointer: {
              type: "cross",
              label: {
                backgroundColor: "#6a7985"
              }
            }
          },
          // 配置X轴
          xAxis: {
            name: "时间线",
            type: "category",
            data: times,
            axisLabel: {
              interval: 0,
              rotate: 40
            }
          },
          // 配置y轴
          yAxis: {
            name: "单价/元",
            type: "value"
          },
          series: [
            {
              data: prices,
              type: "line"
            }
          ],
          grid: {
            left: "10%",
            bottom: "18%"
          }
        });
      }
    }
  }
};
</script>
<style lang="less" scoped>
._select {
  width: 300px;
}
#search {
  margin-left: 5px;
}
.mark {
  margin-left: 15px;
  color: red;
}
</style>

