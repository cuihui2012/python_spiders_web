<template>
  <div>
    <!-- 搜索框开始 -->
    <el-input placeholder="请输入要游玩的城市" v-model="input" clearable class="_input"></el-input>
    <el-button type="primary" icon="el-icon-search" id="search" @click="drawLine">搜索</el-button>
    <em class="mark">数据来源：<a href="https://www.mafengwo.cn/" target="blank">马蜂窝</a>（取前二十页数据，展示前十条热门评论数据，免登录直接爬取）</em>
    <el-divider content-position="left"></el-divider>
    <!-- 搜索框结束 -->
    <!-- 为ECharts准备一个具备大小（宽高）的Dom -->
    <div id="main" style="height: 500px"></div>
  </div>
</template>
<style lang="less" scoped>
._input {
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

<script>
export default {
  name: "HotSpots",
  data() {
    return {
      input: "西安",
      results: null
    };
  },
  mounted: function() {
    // 钩子函数初始化
    // 基于准备好的dom，初始化echarts实例
    let myChart = this.$echarts.init(this.$("#main")[0]);
    // 绘制图表
    // 基本的通用设置
    myChart.setOption({
      // 配置鼠标悬停提示信息
      tooltip: {
        // 遇到横坐标的点, 会进行悬停
        trigger: "axis"
      },
      legend: {
        //图例组件。图例组件展现了不同系列的标记(symbol)，颜色和名字。可以通过点击图例控制哪些系列不显示。
        show: true,
        data: ["点评数", "游记数"] //图例的数据数组。
      },
      // 配置工具栏
      toolbox: {
        // 配置工具栏, 显示, 可以柱状图, 折线图, 数据图, 之间进行切换
        show: true,
        // 工具
        feature: {
          // 数据视图
          dataView: {
            show: true, // 显示数据视图
            readOnly: true // 数据只读, 不能编辑
          },
          //动态切换类型, bar: 柱状图, line: 折线图
          magicType: { show: true, type: ["bar", "line"] }
        }
      },
      // x轴配置
      xAxis: [
        {
          name: "景点", //x轴名称
          type: "category", //坐标轴类型，横轴默认为类目型'category'
          axisLabel: {
            interval: 0, // 横坐标上文字每间隔几个显示内容, 0表示每一个都显示
            rotate: 20, // 设置横坐标文字倾斜度
            formatter: function(name) {
              // 格式化横坐标的文字, 有些景点非常长, 显示不下
              // 这里设置最大长度为18, 还不够就截断后加 ...
              return name.length > 18 ? name.slice(0, 8) + "..." : name;
            }
          },
          data: [] //数据
        }
      ],
      // y坐标轴
      yAxis: [
        {
          type: "value", // 值类型, 默认
          axisLabel: {
            formatter: "{value}"
          }
        }
      ],
      series: [
        //系列列表。每个系列通过 type 决定自己的图表类型
        {
          name: "点评数",
          type: "bar",
          data: [],
          markLine: {
            //标记线
            data: [{ type: "average", name: "平均值" }]
          },
          markPoint: {
            //标记点
            data: [
              { type: "max", name: "最大值" },
              { type: "min", name: "最小值" }
            ]
          }
        },
        {
          name: "游记数",
          type: "bar",
          data: [],
          markLine: {
            data: [{ type: "average", name: "平均值" }]
          },
          markPoint: {
            //标记点
            data: [
              { type: "max", name: "最大值" },
              { type: "min", name: "最小值" }
            ]
          }
        }
      ]
    });

    // 默认绘图-西安
    this.drawLine();
  },
  methods: {
    async drawLine() {
      let myChart = this.$echarts.init(this.$("#main")[0]);
      // 获取搜索框中城市
      let city = this.input;
      console.log(city);
      if (!city) {
        alert("城市必填!");
        return;
      }
      // 表设置标题
      myChart.setOption({
        title: {
          text: city
        }
      });
      //数据加载完之前先显示一段简单的loading动画
      myChart.showLoading();
      // 
      // let _this = this;
      // 发送请求
      await this.$axios
        .get("/echarts/" + city)
        .then(response => (this.results = response.data))
        .catch(function(error) {
          // 请求失败处理
          alert("图表请求数据失败!");
          myChart.hideLoading();
        });
      //请求成功时执行该函数内容，result即为服务器返回的json对象
      var names = []; //名称数组（实际用来盛放X轴坐标值）
      var comments_nums = []; //点评数量数组（实际用来盛放Y坐标值）
      var travel_notes_nums = []; //游记数量数组（实际用来盛放Y坐标值）
      if (this.results) {
        for (var i = 0; i < this.results.length; i++) {
          names.push(this.results[i]["name"]); //挨个取出名称并填入名称数组
          comments_nums.push(this.results[i]["comments_num"]); //挨个取出数量并填入点评数数组
          travel_notes_nums.push(this.results[i]["travel_notes_num"]); //挨个取出数量并填入游记数数组
        }

        myChart.hideLoading(); //隐藏加载动画
        myChart.setOption({
          //加载数据图表
          xAxis: {
            // 设置X轴上的数据
            data: names
          },
          series: [
            {
              // 设置评论数, 数据
              data: comments_nums
            },
            {
              // 设置游记数, 数据
              data: travel_notes_nums
            }
          ],
          // 配置工具栏
          toolbox: {
            feature: {
              // 配置数据视图
              dataView: {
                optionToContent: opt => {
                  return this.getTable(this.results);
                }
              }
            }
          }
        });
      }

    },
    getTable(results) {
      // 生成表头
      var table =
        '<table class="bordered" width="100%"><thead><tr>' +
        "<th>序号</th>" +
        "<th>景点</th>" +
        "<th>点评数</th>" +
        "<th>游记数</th>" +
        "<th>所在区域</th>" +
        "</tr></thead><tbody>";

      // 生成数据
      for (var i = 0; i < results.length; i++) {
        let tr =
          '<tr><td align="center">' +
          (i + 1) +
          "</td>" +
          '<td align="center"><a href="' +
          results[i]["url"] +
          '" target="view_window">' +
          results[i]["name"] +
          "</a></td>" +
          '<td align="center">' +
          results[i]["comments_num"] +
          "</td>" +
          '<td align="center">' +
          results[i]["travel_notes_num"] +
          "</td>" +
          '<td align="center">' +
          results[i]["address"] +
          "</td></tr>";
        // 把tr拼接到table上
        table += tr;
      }
      table += "</tbody></table>";
      return table;
    }
  }
};
</script>

