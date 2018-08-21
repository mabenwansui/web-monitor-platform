import echarts from 'echarts'

export default function jsMonitorCharts(dom) {
  let myChart = echarts.init(dom);
  let data = [
    ["09:00", 20, 2.2],
    ["10:00", 32, 5.1],
    ["11:00", 40, 8.3],
    ["12:00", 50, 1.2],
    ["13:00", 86, 2.3],
    ["14:00", 53, 3.2],
    ["15:00", 45, 1.5],
    ["16:00", 16, 2.2],
    ["17:00", 44, 3.1],
    ["18:00", 34, 1.5],
    ["19:00", 24, 4.1],
    ["20:00", 14, 3.8],
    ["21:00", 24, 1.5],
  ];
  let xData = data.map(item => item[0]);
  let lineData = data.map(item => item[1]);
  let barData = data.map(item => item[2]);
  let option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
        crossStyle: {
          color: '#999'
        }
      }
    },
    legend: {
      data: ['响应时间', '浏览量']
    },
    xAxis: [
      {
        type: 'category',
        data: xData,
        axisPointer: {
          type: 'shadow'
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '响应时间',
        axisLabel: {
          formatter: '{value}s'
        },
        splitNumber: 2,
        splitLine: {
          lineStyle: {
            color: '#eee'
          }
        }
      },
      {
        type: 'value',
        name: '浏览量',
        axisLabel: {
          formatter: '{value}k'
        },
        splitNumber: 2,
        splitLine: {
          lineStyle: {
            color: '#eee'
          }
        }
      }
    ],
    series: [
      {
        name: '响应时间',
        type: 'line',
        yAxisIndex: 1,
        data: lineData,
        lineStyle: {
          normal: {
            width: 2,
            color: '#F86C52'
          }
        },
        symbolSize: 6,
        itemStyle: {
          color: '#F86C52'
        }
      },
      {
        name: '浏览量',
        type: 'bar',
        data: barData,
        barWidth: '60%',
        itemStyle: {
          color: '#4F5364'
        }
      }
    ]
  };
  myChart.setOption(option);
}