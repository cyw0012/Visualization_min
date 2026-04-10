// 第一部分
let init1 = () => {
  // 图表1
  let myEchart1 = echarts.init(document.querySelector('.one_item2'))
  let option1 = {
    xAxis: {
      type: 'category',
      name: '',
      axisLabel: {
        color: '#ced6e0',
        fontSize: 10,
      },
      data: ['01/01', '01/02', '01/03', '01/04', '01/05', '01/06'],
    },
    yAxis: {
      type: 'value',
      name: '日发电量 (万)',
      min: 0,
      max: 2500,
      nameTextStyle: {
        color: '#fff',
      },
      axisLabel: {
        color: '#ced6e0',
        fontSize: 10,
      },
      splitNumber: 5,
      splitLine: {
        lineStyle: {
          color: '#0c4787',
        },
      },
    },
    grid: {
      x: 60,
      y: 45,
      x2: 40,
      y2: 40,
      borderWidth: 1,
    },
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      textStyle: {
        color: '#34495e',
      },
      axisPointer: {
        type: 'shadow',
      },
    },
    series: [
      {
        type: 'line',
        data: [
          getRandom(1000, 2400),
          getRandom(1000, 2400),
          getRandom(1000, 2400),
          getRandom(1000, 2400),
          getRandom(1000, 2400),
          getRandom(1000, 2400),
        ],
        smooth: true,
        lineStyle: {
          color: '#5effff',
        },
        itemStyle: {
          color: '#5effff',
        },
        areaStyle: {
          color: 'rgba(94, 255, 255, 0.5)',
        },
      },
    ],
  }
  // 定时器设置
  let cnt = 6
  setInterval(() => {
    cnt++
    if (cnt === 32) cnt = 1
    let str = cnt < 10 ? '0' + cnt : cnt
    option1.xAxis.data.shift()
    option1.xAxis.data.push('01/' + str)
    option1.series[0].data.shift()
    option1.series[0].data.push(getRandom(1000, 2400))
    myEchart1.setOption(option1)
  }, 2000)
  myEchart1.setOption(option1)

  // 图表2
  let myEchart2 = echarts.init(document.querySelector('.one_item3'))
  let option2 = {
    xAxis: {
      type: 'category',
      name: '',
      axisLabel: {
        color: '#ced6e0',
        fontSize: 10,
      },
      splitNumber: 12,
      data: [
        '1月',
        '2月',
        '3月',
        '4月',
        '5月',
        '6月',
        '7月',
        '8月',
        '9月',
        '10月',
        '11月',
        '12月',
      ],
    },
    yAxis: {
      type: 'value',
      name: '月度电量 (万)',
      min: 0,
      max: 2500,
      nameTextStyle: {
        color: '#fff',
      },
      axisLabel: {
        color: '#ced6e0',
        fontSize: 10,
      },
      splitLine: {
        lineStyle: {
          color: '#0c4787',
        },
      },
    },
    grid: {
      x: 60,
      y: 45,
      x2: 40,
      y2: 40,
      borderWidth: 1,
    },
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      textStyle: {
        color: '#34495e',
      },
      axisPointer: {
        type: 'shadow',
      },
    },
    series: [
      {
        type: 'bar',
        data: [
          getRandom(1000, 2400),
          getRandom(1000, 2400),
          getRandom(1000, 2400),
          getRandom(1000, 2400),
          getRandom(1000, 2400),
          getRandom(1000, 2400),
          getRandom(1000, 2400),
          getRandom(1000, 2400),
          getRandom(1000, 2400),
          getRandom(1000, 2400),
          getRandom(1000, 2400),
          getRandom(1000, 2400),
        ],
        lineStyle: {
          color: '#5effff',
        },
        itemStyle: {
          color: '#2d75e3',
        },
        areaStyle: {
          color: 'rgba(94, 255, 255, 0.5)',
        },
        barCategoryGap: '40%',
      },
    ],
  }
  myEchart2.setOption(option2)
}

// 第二部分
let init2 = () => {
  let myEchart = echarts.init(document.querySelector('.two_item2'))
  let option = {
    grid: {
      x: 60,
      y: 45,
      x2: 80,
      y2: 40,
      borderWidth: 1,
    },
    xAxis: {
      type: 'value',
      min: 0,
      max: 2500,
      splitLine: {
        show: false,
      },
      axisLabel: {
        color: '#ced6e0',
        fontSize: 10,
      },
    },
    yAxis: [
      {
        type: 'category',
        name: '',
        inverse: true,
        data: ['01/01', '01/02', '01/03', '01/04', '01/05', '01/06'],
        axisLabel: {
          color: '#ced6e0',
          fontSize: 10,
        },
        // 去除坐标轴和刻度
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
      },
      {
        type: 'category',
        name: '日发电量  (万)',
        inverse: true,
        nameLocation: 'start',
        nameTextStyle: {
          color: '#fff',
        },
        axisLabel: {
          color: '#ced6e0',
          fontSize: 10,
        },
        // 去除坐标轴和刻度
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        data: [1200, 1400, 1000, 1300, 1600, 1400],
      },
    ],
    series: [
      {
        type: 'bar',
        name: '日发电量',
        data: [1200, 1400, 1000, 1300, 1600, 1400],
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(30, 144, 255, 0.4)',
          borderRadius: [0, 10, 10, 0],
          borderWidth: 1,
          borderColor: '#fff',
        },
        itemStyle: {
          // 线性渐变，前四个参数分别是 x0, y0, x2, y2, 范围从 0 - 1，相当于在图形包围盒中的百分比，如果 globalCoord 为 `true`，则该四个值是绝对的像素位置
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: '#2155a6', // 0% 处的颜色
              },
              {
                offset: 1,
                color: '#4bd4ae', // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
          borderRadius: [0, 10, 10, 0],
        },
        barCategoryGap: '60%',
      },
    ],
  }

  // 定时器设置
  let arr = [{}, {}, {}, {}, {}, {}]
  // 数据绑定并渲染图表
  let func = () => {
    for (let i = 0; i < 6; i++) {
      option.yAxis[1].data[i] = arr[i].value
      option.series[0].data[i] = arr[i].value
      option.yAxis[0].data[i] = arr[i].time
    }
    myEchart.setOption(option)
  }
  // 初始化数据
  for (let i = 0; i < 6; i++) {
    arr[i].time = '01/0' + (i + 1)
    arr[i].value = getRandom(750, 2100)
  }
  func()
  // 异步操作
  let sortHandle = (j) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (arr[j].value > arr[j + 1].value) {
          let temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j + 1] = temp
          func()
        }
        resolve()
      }, 800)
    })
  }
  //排序完高亮显示2s
  let sortComplete = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        option.yAxis[0].axisLabel.color = '#ced6e0'
        option.yAxis[0].axisLabel.fontSize = 10
        option.yAxis[1].axisLabel.color = '#ced6e0'
        option.yAxis[1].axisLabel.fontSize = 10
        resolve()
      }, 3000)
    })
  }
  // 进行排序
  let cnt = 6
  let sortHd = async () => {
    for (let i = 1; i < 6; i++) {
      for (let j = 0; j < 6 - i; j++) {
        await sortHandle(j)
      }
    }
    // 排序完高亮显示2s
    option.yAxis[0].axisLabel.color = '#6c5ce7'
    option.yAxis[0].axisLabel.fontSize = 13
    option.yAxis[1].axisLabel.color = '#6c5ce7'
    option.yAxis[1].axisLabel.fontSize = 13
    myEchart.setOption(option)
    await sortComplete()
    // 递归依次排序
    for (let i = 1; i <= 6; i++) {
      let day = cnt + i
      if (day > 31) day = day - 31
      let str = day < 10 ? '0' + day : day
      arr[i - 1].time = '01/' + str
      arr[i - 1].value = getRandom(750, 2100)
    }
    cnt += 6
    cnt = cnt > 31 ? cnt - 31 : cnt
    sortHd()
  }
  sortHd()
}

// 第四部分
let init4 = () => {
  let myEchart = echarts.init(document.querySelector('.num4'))
  let option = {
    geo: {
      name: '中国地图',
      map: 'china',
      roam: true,
      itemStyle: {
        areaColor: '#457b9d',
      },
      emphasis: {
        itemStyle: {
          areaColor: '#74b9ff',
        },
      },
    },
    series: [
      // 光伏7项
      {
        type: 'effectScatter',
        name: '光伏7项',
        coordinateSystem: 'geo',
        // colorBy: 'data',
        symbolSize: 8,
        rippleEffect: {
          number: 3,
          scale: 4,
          color: '#47dbe5',
        },
        itemStyle: {
          color: '#47dbe5',
        },
        data: [
          {
            name: '安徽',
            value: [117.2461, 32.0361],
          },
        ],
      },
      // 燃气6市
      {
        type: 'effectScatter',
        name: '燃气6市',
        coordinateSystem: 'geo',
        // colorBy: 'data',
        symbolSize: 8,
        rippleEffect: {
          number: 3,
          scale: 4,
          color: '#f53506',
        },
        itemStyle: {
          color: '#f53506',
        },
        data: [
          {
            name: '内蒙古',
            value: [117.5977, 44.3408],
          },
        ],
      },
      // 热力5项
      {
        type: 'effectScatter',
        name: '热力5项',
        coordinateSystem: 'geo',
        // colorBy: 'data',
        symbolSize: 8,
        rippleEffect: {
          number: 3,
          scale: 4,
          color: '#2899f1',
        },
        itemStyle: {
          color: '#2899f1',
        },
        data: [],
      },
      // 微网3项
      {
        type: 'effectScatter',
        name: '微网3项',
        coordinateSystem: 'geo',
        // colorBy: 'data',
        symbolSize: 8,
        rippleEffect: {
          number: 3,
          scale: 4,
          color: '#fec03d',
        },
        itemStyle: {
          color: '#fec03d',
        },
        data: [
          {
            name: '青海',
            value: [96.2402, 35.4199],
          },
        ],
      },
      // 节能5项
      {
        type: 'effectScatter',
        name: '节能5项',
        coordinateSystem: 'geo',
        // colorBy: 'data',
        symbolSize: 8,
        rippleEffect: {
          number: 3,
          scale: 4,
          color: '#2ad771',
        },
        itemStyle: {
          color: '#2ad771',
        },
        data: [
          {
            name: '湖南',
            value: [111.5332, 27.3779],
          },
        ],
      },
      // 飞线图
      {
        type: 'lines',
        name: '飞线图',
        colorBy: 'data',
        data: [
          {
            coords: [
              [117.5977, 44.3408],
              [99, 48],
            ],
          },
        ],
        // effect: {
        //   show: true,
        //   symbolSize: 10,
        //   symbol: 'arrow',
        // },
        lineStyle: {
          type: 'dotted',
          color: 'yellow',
          width: 2,
          curveness: 0.4,
          opacity: 1,
        },
      },
      // 气泡图
      {
        type: 'scatter',
        name: '气泡图',
        coordinateSystem: 'geo',
        colorBy: 'data',
        symbol: 'image://./image/气泡.png',
        symbolSize: (value, obj) => {
          return [obj.name.length * 15 + value[2].length * 10, 30]
        },
        symbolOffset: [15, -15],
        data: [
          {
            name: '内蒙古',
            value: [99, 48, '300.02230MW'],
            label: {
              color: '#f53506',
            },
          },
          {
            name: '湖南',
            value: [111.5332, 27.3779, '300.00MW'],
            label: {
              color: '#2ad771',
            },
          },
          {
            name: '安徽',
            value: [117.2461, 32.0361, '1234T'],
            label: {
              color: '#47dbe5',
            },
          },
          {
            name: '青海',
            value: [96.2402, 35.4199, '4343.233MW'],
            label: {
              color: '#fec03d',
            },
          },
        ],
        label: {
          show: true,
          color: 'yellow',
          formatter: '{b}: {@[2]}',
        },
        emphasis: {
          show: true,
        },
      },
    ],
    // 图例
    legend: {
      zlevel: 999,
      icon: 'roundRect',
      bottom: 20,
      itemWidth: 30,
      itemHeight: 20,
      textStyle: {
        fontWeight: 'bold',
        fontSize: 14,
      },
      data: [
        {
          name: '光伏7项',
          icon: 'image://./image/光伏信息.png',
          textStyle: {
            color: '#47dbe5',
          },
        },
        {
          name: '燃气6市',
          icon: 'image://./image/燃气.png',
          textStyle: {
            color: '#f53506',
          },
        },
        {
          name: '热力5项',
          icon: 'image://./image/热力图.png',
          textStyle: {
            color: '#2899f1',
          },
        },
        {
          name: '微网3项',
          icon: 'image://./image/微网.png',
          textStyle: {
            color: '#fec03d',
          },
        },
        {
          name: '节能5项',
          icon: 'image://../image/节能.png',
          textStyle: {
            color: '#2ad771',
          },
        },
      ],
    },
  }
  // 定时设置
  let func = () => {
    let numArr = [
      getRandom(3, 5),
      getRandom(1, 3),
      getRandom(3, 5),
      getRandom(3, 5),
      getRandom(3, 5),
    ]
    // option.legend.data[0].name = '光伏' + 1 + numArr[0] + '项'
    // option.legend.data[1].name = '燃气' + 1 + numArr[1] + '市'
    // option.legend.data[2].name = '热力' + numArr[2] + '项'
    // option.legend.data[3].name = '微网' + 1 + numArr[3] + '项'
    // option.legend.data[4].name = '节能' + 1 + numArr[4] + '项'
    for (let i = 0; i < 5; i++) {
      let newArr = []
      for (let j = 0; j < numArr[i]; j++) {
        newArr.push(city_data[getRandom(0, 33)])
      }
      option.series[i].data = [...option.series[i].data, ...newArr]
    }
    myEchart.setOption(option)
  }
  func()
  // setInterval(func(), 3000)
}

// 第五部分
let init5 = () => {
  // 图1
  let myEchart1 = echarts.init(document.querySelector('.fiveChart1'))
  let option1 = {
    grid: {
      y: '50%',
    },
    xAxis: {
      show: false,
      type: 'category',
      data: [0, 50, 100],
    },
    yAxis: {
      show: false,
      type: 'value',
      data: [0, 50, 100],
    },
    series: [
      {
        name: '涟漪散点',
        type: 'effectScatter',
        symbolSize: 60,
        data: [[1, 0]],
        emphasis: {
          itemStyle: {
            color: '#4b7bec',
          },
        },
        itemStyle: {
          color: '#0b7a96',
        },
        rippleEffect: {
          color: '#0b7a96',
          scale: 1.7,
          number: 1,
          period: 1,
        },
        markPoint: {
          symbol: 'image://./image/报警.png',
          symbolSize: 30,
          itemStyle: {
            color: 'red',
          },
          data: [
            {
              x: '50%',
              y: '50%',
            },
          ],
        },
      },
    ],
  }
  myEchart1.setOption(option1)

  // 图2
  let myEchart2 = echarts.init(document.querySelector('.fiveChart2'))
  let option2 = {
    grid: {
      y: '50%',
    },
    xAxis: {
      show: false,
      type: 'category',
      data: [0, 50, 100],
    },
    yAxis: {
      show: false,
      type: 'value',
      data: [0, 50, 100],
    },
    series: [
      {
        name: '涟漪散点',
        type: 'effectScatter',
        symbolSize: 60,
        data: [[1, 0]],
        emphasis: {
          itemStyle: {
            color: '#4b7bec',
          },
        },
        itemStyle: {
          color: '#0b7a96',
        },
        rippleEffect: {
          color: '#0b7a96',
          scale: 1.7,
          number: 1,
          period: 1,
        },
        markPoint: {
          symbol: 'image://./image/铃声.png',
          symbolSize: 30,
          itemStyle: {
            color: 'red',
          },
          data: [
            {
              x: '50%',
              y: '50%',
            },
          ],
        },
      },
    ],
  }
  myEchart2.setOption(option2)

  // 图3
  let myEchart3 = echarts.init(document.querySelector('.fiveChart3'))
  let option3 = {
    grid: {
      y: '50%',
    },
    xAxis: {
      show: false,
      type: 'category',
      data: [0, 50, 100],
    },
    yAxis: {
      show: false,
      type: 'value',
      data: [0, 50, 100],
    },
    series: [
      {
        name: '涟漪散点',
        type: 'effectScatter',
        symbolSize: 60,
        data: [[1, 0]],
        emphasis: {
          itemStyle: {
            color: '#4b7bec',
          },
        },
        itemStyle: {
          color: '#0b7a96',
        },
        rippleEffect: {
          color: '#0b7a96',
          scale: 1.7,
          number: 1,
          period: 1,
        },
        markPoint: {
          symbol: 'image://./image/时钟.png',
          symbolSize: 30,
          itemStyle: {
            color: 'red',
          },
          data: [
            {
              x: '50%',
              y: '50%',
            },
          ],
        },
      },
    ],
  }
  myEchart3.setOption(option3)
}

// 第六部分
let init6 = () => {
  // 图1
  let myEchart1 = echarts.init(document.querySelector('.six_chart1'))
  let option1 = {
    title: {
      text: '12345 户',
      textStyle: {
        color: '#00ffff',
        fontSize: 16,
      },
      // textAlign: 'left',
      left: '30%',
    },
    series: [
      {
        type: 'pie',
        name: '燃气用户数量',
        // width: 110,
        // bottom: -20,
        // left: 'center',
        radius: [0, 35],
        center: ['50%', '50%'],
        data: [
          {
            name: '民用',
            value: 6300,
            itemStyle: {
              color: '#3498db',
            },
          },
          {
            name: '商用',
            value: 2015,
            itemStyle: {
              color: '#1dd1a1',
            },
          },
          {
            name: '公用',
            value: 4030,
            itemStyle: {
              color: '#ffeaa7',
            },
          },
        ],
        label: {
          normal: {
            show: true,
            color: '#fff',
            fontSize: 10,
          },
        },
        labelLine: {
          length: 10,
          length2: 8,
        },
      },
    ],
  }
  // 定时器设置
  let sum = 12345
  let numArray = [6300, 2015, 4030]
  setInterval(() => {
    let index = getRandom(0, 2)
    let num = getRandom(0, 5)
    sum += num
    numArray[index] += num
    option1.series[0].data[index].value = numArray[index]
    option1.title.text = sum + ' 户'
    myEchart1.setOption(option1)
  }, 1700)
  myEchart1.setOption(option1)

  // 图2
  let myEchart2 = echarts.init(document.querySelector('.six_chart2'))
  let option2 = {
    xAxis: {
      type: 'category',
      data: [2017, 2018, 2019, 2022, 2021],
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      axisLabel: {
        color: '#ced6e0',
        fontSize: 10,
      },
    },
    yAxis: {
      type: 'value',
      min: 0,
      max: 50,
      axisLine: {
        show: false,
        lineStyle: {
          color: '#5effff',
          width: 3,
        },
      },
      axisLabel: {
        color: '#ced6e0',
        fontSize: 10,
      },
      splitLine: {
        lineStyle: {
          color: '#0c4787',
        },
      },
    },
    grid: {
      x: 40,
      y: 40,
      x2: 20,
      y2: 30,
      borderWidth: 1,
    },
    series: [
      {
        type: 'line',
        name: '年度售气量',
        // data: [20, 30, 40, 30, 50],
        data: [
          {
            value: 20,
            itemStyle: {
              color: '#5effff',
            },
          },
          {
            value: 30,
            itemStyle: {
              color: '#5effff',
            },
          },
          {
            value: 40,
            itemStyle: {
              color: '#5effff',
            },
          },
          {
            value: 30,
            itemStyle: {
              color: '#5effff',
            },
          },
          {
            value: 50,
            itemStyle: {
              color: '#5effff',
            },
          },
        ],
        smooth: true,
        lineStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: '#5effff', // 0% 处的颜色
              },
              {
                offset: 1,
                color: '#156fab', // 100% 处的颜色
              },
            ],
            global: false, // 缺省为 false
          },
          join: 'miter',
          miter: 40,
        },
      },
      {
        type: 'scatter',
        symbol: 'pin',
        symbolSize: 40,
        // data: [20, 30, 40, 30, 50],
        data: [
          {
            value: 20,
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: '#5effff', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#156fab', // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
            label: {
              color: '#000',
            },
          },
          {
            value: 30,
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: '#5effff', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#156fab', // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
            label: {
              color: '#000',
            },
          },
          {
            name: '3',
            value: 40,
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: '#5effff', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#156fab', // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
            label: {
              color: '#000',
            },
          },
          {
            value: 30,
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: '#5effff', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#156fab', // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
            label: {
              color: '#000',
            },
          },
          {
            value: 50,
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  {
                    offset: 0,
                    color: '#5effff', // 0% 处的颜色
                  },
                  {
                    offset: 1,
                    color: '#156fab', // 100% 处的颜色
                  },
                ],
                global: false, // 缺省为 false
              },
            },
            label: {
              color: '#000',
            },
          },
        ],
        label: {
          show: true,
          formatter: '{c}',
          color: '#000',
        },
      },
    ],
  }
  // 生成随机数据
  for (let i = 0; i < 5; i++) {
    let num = getRandom(15, 50)
    option2.series[0].data[i].value = num
    option2.series[1].data[i].value = num
  }
  // 定时器设置
  let itemStyle1 = {
    color1: '#5effff',
    color2: '#156fab',
  }
  let itemStyle2 = {
    color1: '#9c88ff',
    color2: '#483d99',
  }
  let cnt = -1
  setInterval(() => {
    cnt++
    cnt = cnt > 4 ? 0 : cnt
    let pre = cnt === 0 ? 4 : cnt - 1
    // 节点颜色改变
    option2.series[0].data[pre].itemStyle.color = itemStyle1.color1
    option2.series[0].data[cnt].itemStyle.color = itemStyle2.color1
    // 气泡颜色改变
    option2.series[1].data[pre].itemStyle.color.colorStops[0].color =
      itemStyle1.color1
    option2.series[1].data[pre].itemStyle.color.colorStops[1].color =
      itemStyle1.color2
    option2.series[1].data[cnt].itemStyle.color.colorStops[0].color =
      itemStyle2.color1
    option2.series[1].data[cnt].itemStyle.color.colorStops[1].color =
      itemStyle2.color2
    // 气泡文字颜色改变
    option2.series[1].data[pre].label.color = '#000'
    option2.series[1].data[cnt].label.color = '#fff'
    myEchart2.setOption(option2)
  }, 2400)
  myEchart2.setOption(option2)
}

// 第七部分
let init7 = () => {
  let myEchart = echarts.init(document.querySelector('.seven_item2'))
  let option = {
    xAxis: {
      type: 'category',
      name: '',
      axisLabel: {
        color: '#ced6e0',
        fontSize: 10,
      },
      data: ['01/01', '01/02', '01/03', '01/04', '01/05', '01/06'],
    },
    yAxis: {
      type: 'value',
      name: '发电量/产电量',
      min: 0,
      max: 250,
      nameTextStyle: {
        color: '#fff',
      },
      axisLabel: {
        color: '#ced6e0',
        fontSize: 10,
      },
      splitNumber: 5,
      splitLine: {
        lineStyle: {
          color: '#0c4787',
        },
      },
    },
    grid: {
      x: 60,
      y: 45,
      x2: 40,
      y2: 40,
      borderWidth: 1,
    },
    legend: {
      data: ['日发电量 万(kwm)', '日产气量 (t)'],
      textStyle: {
        color: '#bdc3c7',
        fontSize: 11,
      },
      itemWidth: 20,
      itemHeight: 13,
      top: '5%',
    },
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      textStyle: {
        color: '#34495e',
      },
      axisPointer: {
        type: 'shadow',
      },
    },
    series: [
      {
        type: 'line',
        name: '日发电量 万(kwm)',
        data: [
          getRandom(80, 210),
          getRandom(80, 210),
          getRandom(80, 210),
          getRandom(80, 210),
          getRandom(80, 210),
          getRandom(80, 210),
        ],
        smooth: true,
        lineStyle: {
          color: '#5effff',
        },
        itemStyle: {
          color: '#5effff',
        },
        areaStyle: {
          color: 'rgba(94, 255, 255, 0.2)',
        },
        zlevel: 5,
      },
      {
        type: 'line',
        name: '日产气量 (t)',
        data: [
          getRandom(80, 210),
          getRandom(80, 210),
          getRandom(80, 210),
          getRandom(80, 210),
          getRandom(80, 210),
          getRandom(80, 210),
        ],
        smooth: true,
        lineStyle: {
          color: '#5470c6',
        },
        itemStyle: {
          color: '#5470c6',
        },
        areaStyle: {
          color: 'rgba(51, 83, 181, 0.4)',
        },
        zlevel: 4,
      },
    ],
  }
  // 定时器设置
  let cnt = 6
  setInterval(() => {
    cnt++
    if (cnt === 32) cnt = 1
    let str = cnt < 10 ? '0' + cnt : cnt
    option.xAxis.data.shift()
    option.xAxis.data.push('01/' + str)
    option.series[0].data.shift()
    option.series[0].data.push(getRandom(80, 210))
    option.series[1].data.shift()
    option.series[1].data.push(getRandom(80, 210))
    myEchart.setOption(option)
  }, 2500)
  myEchart.setOption(option)
}
init1()
init2()
init4()
init5()
init6()
init7()
