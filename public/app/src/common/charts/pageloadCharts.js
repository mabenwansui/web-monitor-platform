import echarts from 'echarts'

export default function pageloadCharts(dom) {
  let myChart = echarts.init(dom);
  let data = [
    ['DNS', 10],
    ['TCP', 30],
    ['Request', 50],
    ['Response', 200],
    ['Dom', 500],
    ['Load', 1200]
  ].reverse();

  let option = {
    grid: {
      top: '5px',
      left: '10px',
      right: '30px',
      bottom: '0',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      splitLine: {
        lineStyle: {
          color: '#eee'
        }
      }
      //boundaryGap: [0, 0.01]
    },
    yAxis: {
      type: 'category',
      data: data.map(v => v[0])
    },
    series: [
      {
        name: '辅助',
        type: 'bar',
        stack: '总量',
        itemStyle: {
          normal: {
            barBorderColor: 'rgba(0,0,0,0)',
            color: 'rgba(0,0,0,0)'
          },
          emphasis: {
            barBorderColor: 'rgba(0,0,0,0)',
            color: 'rgba(0,0,0,0)'
          }
        },
        data: [790, 290, 90, 40, 10]
      },
      {
        name: '页面加载',
        type: 'bar',
        stack: '总量',
        data: data.map(v => v[1]),
        barWidth: '14px',
        label: {
          normal: {
            show: true,
            position: 'right',
            color: '#2D2F3C',
            formatter: '{c}ms'
          }
        },
        itemStyle: {
          color: '#4F5364',
        }
      }
    ]
  };

  myChart.setOption(option);
}