import echarts from 'echarts'

export default function jsMonitorCharts(dom) {
  let myChart = echarts.init(dom);
  let data = [
    ["00:00", 2, 10],
    ["01:00", 2, 2],
    ["02:00", 3, 5],
    ["03:00", 2, 1],
    ["04:00", 5, 3],
    ["05:00", 2, 2],
    ["06:00", 3, 7],
    ["07:00", 4, 0],
    ["08:00", 2, 0],
    ["09:00", 3, 8],
    ["10:00", 3, 3],
    ["11:00", 4, 1],
    ["12:00", 5, 2],
    ["13:00", 8, 0],
    ["14:00", 5, 0],
    ["15:00", 4, 4],
    ["16:00", 1, 0],
    ["17:00", 4, 0],
    ["18:00", 3, 0],
    ["19:00", 2, 0],
    ["20:00", 1, 0],
    ["21:00", 2, 1],
    ["22:00", 2, 3],
    ["23:00", 2, 0.5],
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
      data: ['响应时间', '失败率']
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
        name: '失败率',
        axisLabel: {
          formatter: '{value}%'
        },
        max: 100,
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
        yAxisIndex: 0,
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
        name: '失败率',
        type: 'bar',
        yAxisIndex: 1,
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