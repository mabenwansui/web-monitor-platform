import echarts from 'echarts'

export default function pageRenderCharts(dom) {
  let myChart = echarts.init(dom);

  let option = {
    color: ['#3398DB'],
    tooltip: {
      trigger: 'axis',
      axisPointer: { // 坐标轴指示器，坐标轴触发有效
        type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
      }
    },
    grid: {
      left: '3%',
      right: '4%',
      containLabel: true,
      show: true
    },
    xAxis: [
      {
        type: 'category',
        data: ['白屏时间', 'dom', 'event', '首屏时间'],
        axisTick: {
          alignWithLabel: true
        },
        //axisLine: { lineStyle: { color: '#ccc' } }
      }
    ],
    yAxis: [
      {
        type: 'value',
        splitNumber: 2,
        splitLine: {
          lineStyle: {
            color: '#eee'
          }
        },
        //axisLine: { lineStyle: { color: '#ccc' } }
      }
    ],
    series: [
      {
        name: '耗时(ms)',
        type: 'bar',
        barWidth: '30%',
        data: [100, 150, 200, 334],
        itemStyle: {
          color: '#4F5364'
        }
      }
    ]
  };

  myChart.setOption(option);
}