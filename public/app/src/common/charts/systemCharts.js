import echarts from 'echarts'

export default function systemCharts(dom) {
  let myChart = echarts.init(dom);
  let option = {
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series: [
      {
        name: '操作系统',
        type: 'pie',
        radius: '70%',
        center: ['50%', '50%'],
        data: [
          {
            value: 3335,
            name: 'windows'
          },
          {
            value: 610,
            name: 'macos'
          },
          {
            value: 150,
            name: 'ios'
          },
          {
            value: 84,
            name: 'android'
          }
        ],
        label: {
          fontSize: 16
        },
        itemStyle: {
          color(param){
            switch(param.name){
              case 'windows':
                return '#4F5364'
              case 'macos':
                return '#C49AE8'
              case 'ios':
                return '#9B9B9B'
              case 'android':
                return '#B1EA94'
            }
          },
          emphasis: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
  myChart.setOption(option);
}