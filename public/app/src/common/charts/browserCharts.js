import echarts from 'echarts'

export default function browserCharts(dom) {
  let myChart = echarts.init(dom);

  let option = {
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series: [
      {
        name: '浏览器',
        type: 'pie',
        radius: '70%',
        center: ['50%', '50%'],
        data: [
          {
            value: 3335,
            name: 'webkit',
            color: '#ff0000'
          },
          {
            value: 310,
            name: 'ie'
          },
          {
            value: 150,
            name: 'firefox'
          },
          {
            value: 84,
            name: '其它'
          }
        ],
        label: {
          fontSize: 16
        },
        itemStyle: {
          color(param){
            switch(param.name){
              case 'webkit':
                return '#4F5364'
              case 'ie':
                return '#B1EA94'
              case 'firefox':
                return '#F86C52'
              case '其它':
                return '#6AE0E0'
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