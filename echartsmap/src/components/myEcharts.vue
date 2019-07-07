<template>
  <div class="myEcharts">
      <div id="chart" class="chart"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'MyEcharts',
  data () {
    return {
      charts:''
    }
  },
  mounted() {
    this.$nextTick(()=>{this.drawLine()})
  },
  methods:{
    drawLine(){
          var totalCost = [200000000, 200000000, 200000000,200000000,200000000,200000000, 200000000, 200000000,200000000,200000000]; //背景色比例
          var visits = [9336765, 10336765, 12336765,15944411,16336765,17336765,32336765,47336765,153367656,172336765]; //数值
          var grade = ['缪超', '薛嘉运', '刘庆智','董洋','孔德娜','刘敏','梦蕾','猪刚鬣','孙悟空','唐三藏'];
         
          var data = {
              grade: grade,
              totalCost: totalCost,
              visits: visits,
          };
          this.charts = echarts.init(document.getElementById('chart'));
          this.charts.setOption({
            backgroundColor: '#ffffff',
            grid: {
              top:30,
                left: 50,
                right: 50,
                bottom: 150,
                containLabel:true

            },
            tooltip: {
                show: true,
                axisPointer: {
                    link: {xAxisIndex: 'all'},
                    label: {
                        backgroundColor: '#777'
                    }
                },
                formatter: "{b} <br/>金额: {c}",
                textStyle:{
                  color:"#fff",
                  align:'left'
                }
            },
            xAxis: {
                show:false
            },
            yAxis: [{
                type: 'category',
                
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false,
                },
                axisLabel: {
                    margin:90,
                    textStyle: {
                        align:'right',
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: '#171B1F'
                    },
                },
                data: data.grade
            }, {
                type: 'category',

                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        
                        fontSize: 14,
                        color: '#54AFEE',
                    },
                },
            }, ],
            series: [{
                    type: 'pictorialBar',
                    name: 'pictorial element',
                    symbolSize: ['100%', '70%'],
                    symbolPosition: 'center',
                    z: 10,
                    data: [{
                        // Built-in type, can be 'circle', 'rect', 'roundRect', 'square', 'diamond', 'triangle', 'pin', 'arrow'.
                        symbol: 'diamond',
                    }, {
                        // Image link.
                        symbol: 'image://./../assets/logo.png',
                    }, ]
                },{
                    type: 'bar',
                    yAxisIndex: 1,
                    itemStyle: {
                        normal: {
                            show: true,
                            color: '#F0F0F0',
                            barBorderRadius: 50,
                        }
                    },
                    barWidth: '30%',

                    data: data.totalCost
                },
                {

                    type: 'bar',
                    itemStyle: {
                        normal: {
                            show: false,
                            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                                offset: 0,
                                color: '#6390F0'

                            }, {
                                offset: 1,
                                color: '#25EBE9'

                            }]),
                            barBorderRadius: 50,
                        }
                    },
                    barWidth: '30%',

                    data: data.visits
                }

            ]
          })
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chart{
  width: 1200px;
  height: 500px;
  margin: auto;
  border: 1px solid #ccc;
}
</style>
