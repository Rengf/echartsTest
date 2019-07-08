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
          var grade = ['缪    超', '薛嘉运', '刘庆智','董    洋','孔德娜','刘    敏','梦    蕾','猪刚鬣','孙悟空','唐三藏'];
          var data = {
              grade: grade,
              totalCost: totalCost,
              visits: visits,
          };
          this.charts = echarts.init(document.getElementById('chart'));
          this.charts.setOption({
        backgroundColor:"rgba(255,255,255,255)",
        tooltip: {
                show: true,
                axisPointer: {
                    link: {xAxisIndex: 'all'},
                    type: 'cross',
                    label: {
                        backgroundColor: '#777'
                    }
                },
                formatter: "{b} <br/>金额: {c}",
                textStyle:{
                  color:"#fff",
                  align:'left'
                },
                
            },
        grid: {
            top: '2%',
            bottom: '1%',
            left:'20%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'value',
                axisLabel: {
                    show: false,
                    interval: 1,
                    textStyle: {
                        color: '#13fc3f',
                        fontSize: 12
                    }
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitLine: {
                    show: false
                }

            }
        ],
        yAxis:{
                type: 'category',
                data: data.grade,
                axisLabel: {
                    padding: [3, 4, 5, 6],
                    color:"rgba(1,55,255,1)",
                    formatter: function (value,index) {
                            return '{' + index + '| }{value|'+grade[index]+'}';
                    },
                    rich: {
                        value: {
                            align: 'right',
                            padding:[0,30,0,-75],
                            fontSize:14
                        },
                        0: {
                            height: 20,
                            backgroundColor: {
                                image: './static/10.png'
                            },
                        },
                        1: {
                            height: 20,
                            align: 'right',
                            backgroundColor: {
                                image:  './static/9.png'
                            },
                        },
                        2: {
                            height: 20,
                            align: 'right',
                            backgroundColor: {
                                image: './static/8.png'
                            }
                        },
                        3: {
                            height: 20,
                            align: 'right',
                            backgroundColor: {
                                image: './static/7.png'
                            }
                        },
                        4: {
                            height: 20,
                            align: 'center',
                            backgroundColor: {
                                image: './static/6.png'
                            }
                        },
                        5: {
                            height: 20,
                            align: 'center',
                            backgroundColor: {
                                image: './static/5.png'
                            }
                        },
                        6: {
                            height: 20,
                            align: 'center',
                            backgroundColor: {
                                image: './static/4.png'
                            }
                        },
                        7: {
                            height: 20,
                            align: 'center',
                            backgroundColor: {
                                image: './static/3.png'
                            }
                        },
                        8: {
                            height: 20,
                            align: 'center',
                            backgroundColor: {
                                image: './static/2.png'
                            }
                        },
                        9: {
                            height: 20,
                            align: 'center',
                            backgroundColor: {
                                image: './static/1.png'
                            }
                        }
                    }
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                  show: false
                },
            },
        series: [
            {
            type: 'bar',
            barWidth: '20%',
            barCategoryGap: '60%',
            itemStyle: {
                normal: {
                  barWidth: 12,
                    barBorderRadius:[10, 10, 10, 10],
                    color: new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
                                {offset: 0, color: '#048009'},
                                {offset: 1, color: '#00EEF1'}
                            ]
                    ),
                }
            },
            data:data.visits,
            z:2
        },{
            type: 'bar',
            barGap: '-100%',
            itemStyle: {
                normal: {
                    barBorderRadius:[10, 10, 10, 10],
                    color: '#aec314'
                }
            },
            data:data.totalCost,
            z:1
        }]
    })
    }
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
