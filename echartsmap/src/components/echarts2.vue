<template>
  <div class="myEcharts">
    <div id="chart" class="chart"></div>
  </div>
</template>
<script>
import axios from "axios";
import echarts from "echarts";
export default {
  data() {
    return {
      charts: "",
      data: {}
    };
  },
  mounted() {
    this.getdata();
  },
  methods: {
    getdata() {
      axios
        .get("static/echartsdata.json")
        .then(res => {
          this.data = res.data.testdata2;
          this.drawLine();
        })
        .catch(err => {
          console.log(err);
        });
    },
    drawLine() {
      var ylines = [];
      for (var i = 0; i < this.data.series.length; i++) {
        var linedata = {
          name: this.data.name[i],
          type: "line",
          stack: "总量",
          symbol: "circle", //节点形状
          symbolSize: "10", //节点大小
          showSymbol: true, //是否显示节点，false时只有鼠标放上去才显示
          smooth: true, //曲线，false为折线
          //   step: "false", //阶梯线,start,middle,end
          label: {
            //节点的数据信息
            show: true,
            position: "top" //位置
          },
          itemStyle: {
            //拐点样式
            // 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: this.data.color[i] // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#fff" // 100% 处的颜色
                }
              ],
              global: false // 缺省为 false
            }
          },
          lineStyle: {
            //线条样式
            // 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变
            // color: {
            //     type: 'radial',
            //     x: 0.5,
            //     y: 0.5,
            //     r: 0.5,
            //     colorStops: [{
            //         offset: 0, color: 'red' // 0% 处的颜色
            //     }, {
            //         offset: 1, color: 'blue' // 100% 处的颜色
            //     }],
            //     global: false // 缺省为 false
            // },
            color: this.data.color[i],
            width: "5",
            type: "solid",
            shadowBlur: 10,
            shadowColor: this.data.color[i],
            shadowOffsetX: 10,
            shadowOffsetY: 10,
            opacity: 0.8
          },
          areaStyle: {
            // 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置
            color: {
              type: "linear",
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                {
                  offset: 0,
                  color: this.data.color[i] // 0% 处的颜色
                },
                {
                  offset: 1,
                  color: "#fff" // 100% 处的颜色
                }
              ],
              global: false // 缺省为 false
            },
            origin: "auto",
            shadowBlur: 10,
            shadowColor: this.data.color[i],
            shadowOffsetX: 0,
            shadowOffsetY: 0,
            opacity: 0.3
          },
          data: this.data.series[i]
        };
        ylines.push(linedata);
      }
      this.charts = echarts.init(document.getElementById("chart"));
      this.charts.setOption({
        title: {
          text: "折线图堆叠"
        },
        tooltip: {
          trigger: "axis"
        },
        legend: {
          data: this.data.name
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: this.data.xAxis
        },
        yAxis: {
          type: "value"
        },
        series: ylines
      });
    }
  }
};
</script>
<style scoped>
.chart {
  width: 1200px;
  height: 500px;
  margin: auto;
  border: 1px solid #ccc;
}
</style>

