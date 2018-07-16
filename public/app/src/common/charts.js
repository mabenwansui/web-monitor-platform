import echarts from 'echarts'

export default function charts(dom){
  let myChart = echarts.init(dom);
  let data = [
    ["00:00",16,14],
    ["02:00",14,15],
    ["04:00",16,15],
    ["06:00",16,18],
    ["08:00",20,22],
    ["10:00",32,40],
    ["12:00",40,59],
    ["14:00",50,55],
    ["16:00",86,96],
    ["18:00",53,58],
    ["20:00",45,35],
    ["22:00",16,15],
    ["24:00",14,15],
  ];
  let dateList = data.map(item => item[0]);
  let valueList = data.map(item => item[1]*1000);
  let valueList2 = data.map(item => item[2]*1000);
  let option = {
    //title: [{
    //  left: 'center',
    //  text: 'H端js错误日志'
    //}],
    legend: {
      data: ['今天', '7天前']
    },
    tooltip: {
      trigger: 'axis'
    },
    xAxis: [{
      data: dateList
    }],
    yAxis: [{
      splitLine: {
        show: false
      }
    }],
    series: [{
      name: '今天',
      type: 'line',
      areaStyle: {
        normal: {
          color: '#4caf50',
          opacity: .1
        }
      },
      showSymbol: true,
      data: valueList,
      lineStyle: {
        normal: {
          width: 2,
          color: '#313D46'
        }
      },
    }, {
      name: '7天前',
      type: 'line',
      areaStyle: {
        normal: {
          color: '#ff5722',
          opacity: .1
        }
      },
      showSymbol: true,
      data: valueList2,
      lineStyle: {
        normal: {
          width: 2,
          color: '#ff5722'
        }
      },
    }]
  };
  myChart.setOption(option);
}