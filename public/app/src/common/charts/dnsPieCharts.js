import echarts from 'echarts'

export default function dnsPieCharts(dom) {
  let myChart = echarts.init(dom);
  let option = {
    tooltip: {
      trigger: 'item',
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    series: [
      {
        name: '可用性',
        type: 'pie',
        radius: '65%',
        center: ['50%', '50%'],
        data: [
          {
            value: 3335,
            name: '成功'
          },
          {
            value: 210,
            name: '失败'
          }
         ],
        label: {
          fontSize: 16
        },
        itemStyle: {
          color(param){
            switch(param.name){
              case '成功':
                return '#F86C52'
              case '失败':
                return '#4F5364'
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