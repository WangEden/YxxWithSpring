function echart1() {
  var chartDom = document.getElementById("chart1");
  var myChart = echarts.init(chartDom);
  var option;

  // Schema:
  // date,AQIindex,PM2.5,PM10,CO,NO2,SO2
  const dataBJ = [
    [55, 9, 56, 0.46, 18, 6, 1],
    [25, 11, 21, 0.65, 34, 9, 2],
    [56, 7, 63, 0.3, 14, 5, 3],
    [33, 7, 29, 0.33, 16, 6, 4],
    [42, 24, 44, 0.76, 40, 16, 5],
    [82, 58, 90, 1.77, 68, 33, 6],
    [74, 49, 77, 1.46, 48, 27, 7],
    [78, 55, 80, 1.29, 59, 29, 8],
    [267, 216, 280, 4.8, 108, 64, 9],
    [185, 127, 216, 2.52, 61, 27, 10],
    [39, 19, 38, 0.57, 31, 15, 11],
    [41, 11, 40, 0.43, 21, 7, 12],
    [64, 38, 74, 1.04, 46, 22, 13],
    [108, 79, 120, 1.7, 75, 41, 14],
    [108, 63, 116, 1.48, 44, 26, 15],
    [33, 6, 29, 0.34, 13, 5, 16],
    [94, 66, 110, 1.54, 62, 31, 17],
    [186, 142, 192, 3.88, 93, 79, 18],
    [57, 31, 54, 0.96, 32, 14, 19],
    [22, 8, 17, 0.48, 23, 10, 20],
    [39, 15, 36, 0.61, 29, 13, 21],
    [94, 69, 114, 2.08, 73, 39, 22],
    [99, 73, 110, 2.43, 76, 48, 23],
    [31, 12, 30, 0.5, 32, 16, 24],
    [42, 27, 43, 1, 53, 22, 25],
    [154, 117, 157, 3.05, 92, 58, 26],
    [234, 185, 230, 4.09, 123, 69, 27],
    [160, 120, 186, 2.77, 91, 50, 28],
    [134, 96, 165, 2.76, 83, 41, 29],
    [52, 24, 60, 1.03, 50, 21, 30],
    [46, 5, 49, 0.28, 10, 6, 31],
  ];
  const dataGZ = [
    [26, 37, 27, 1.163, 27, 13, 1],
    [85, 62, 71, 1.195, 60, 8, 2],
    [78, 38, 74, 1.363, 37, 7, 3],
    [21, 21, 36, 0.634, 40, 9, 4],
    [41, 42, 46, 0.915, 81, 13, 5],
    [56, 52, 69, 1.067, 92, 16, 6],
    [64, 30, 28, 0.924, 51, 2, 7],
    [55, 48, 74, 1.236, 75, 26, 8],
    [76, 85, 113, 1.237, 114, 27, 9],
    [91, 81, 104, 1.041, 56, 40, 10],
    [84, 39, 60, 0.964, 25, 11, 11],
    [64, 51, 101, 0.862, 58, 23, 12],
    [70, 69, 120, 1.198, 65, 36, 13],
    [77, 105, 178, 2.549, 64, 16, 14],
    [109, 68, 87, 0.996, 74, 29, 15],
    [73, 68, 97, 0.905, 51, 34, 16],
    [54, 27, 47, 0.592, 53, 12, 17],
    [51, 61, 97, 0.811, 65, 19, 18],
    [91, 71, 121, 1.374, 43, 18, 19],
    [73, 102, 182, 2.787, 44, 19, 20],
    [73, 50, 76, 0.717, 31, 20, 21],
    [84, 94, 140, 2.238, 68, 18, 22],
    [93, 77, 104, 1.165, 53, 7, 23],
    [99, 130, 227, 3.97, 55, 15, 24],
    [146, 84, 139, 1.094, 40, 17, 25],
    [113, 108, 137, 1.481, 48, 15, 26],
    [81, 48, 62, 1.619, 26, 3, 27],
    [56, 48, 68, 1.336, 37, 9, 28],
    [82, 92, 174, 3.29, 0, 13, 29],
    [106, 116, 188, 3.628, 101, 16, 30],
    [118, 50, 0, 1.383, 76, 11, 31],
  ];
  const dataSH = [
    [91, 45, 125, 0.82, 34, 23, 1],
    [65, 27, 78, 0.86, 45, 29, 2],
    [83, 60, 84, 1.09, 73, 27, 3],
    [109, 81, 121, 1.28, 68, 51, 4],
    [106, 77, 114, 1.07, 55, 51, 5],
    [109, 81, 121, 1.28, 68, 51, 6],
    [106, 77, 114, 1.07, 55, 51, 7],
    [89, 65, 78, 0.86, 51, 26, 8],
    [53, 33, 47, 0.64, 50, 17, 9],
    [80, 55, 80, 1.01, 75, 24, 10],
    [117, 81, 124, 1.03, 45, 24, 11],
    [99, 71, 142, 1.1, 62, 42, 12],
    [95, 69, 130, 1.28, 74, 50, 13],
    [116, 87, 131, 1.47, 84, 40, 14],
    [108, 80, 121, 1.3, 85, 37, 15],
    [134, 83, 167, 1.16, 57, 43, 16],
    [79, 43, 107, 1.05, 59, 37, 17],
    [71, 46, 89, 0.86, 64, 25, 18],
    [97, 71, 113, 1.17, 88, 31, 19],
    [84, 57, 91, 0.85, 55, 31, 20],
    [87, 63, 101, 0.9, 56, 41, 21],
    [104, 77, 119, 1.09, 73, 48, 22],
    [87, 62, 100, 1, 72, 28, 23],
    [168, 128, 172, 1.49, 97, 56, 24],
    [65, 45, 51, 0.74, 39, 17, 25],
    [39, 24, 38, 0.61, 47, 17, 26],
    [39, 24, 39, 0.59, 50, 19, 27],
    [93, 68, 96, 1.05, 79, 29, 28],
    [188, 143, 197, 1.66, 99, 51, 29],
    [174, 131, 174, 1.55, 108, 50, 30],
    [187, 143, 201, 1.39, 89, 53, 31],
  ];
  const lineStyle = {
    width: 1,
    opacity: 0.5,
  };
  option = {
    backgroundColor: "",
    title: {
      text: "Y-R",
      left: "center",
      textStyle: {
        color: "#eee",
      },
      fontSize: "0.5em",
    },
    legend: {
      bottom: 5,
      data: ["", "", ""],
      itemGap: 15,
      textStyle: {
        color: "#fff",
        fontSize: 10,
      },
      selectedMode: "single",
    },
    radar: {
      indicator: [
        { name: "AQ", max: 300 },
        { name: "PM", max: 250 },
        { name: "PB", max: 300 },
        { name: "CO", max: 5 },
        { name: "NO", max: 200 },
        { name: "SO", max: 100 },
      ],
      shape: "circle",
      splitNumber: 5,
      axisName: {
        color: "rgb(238, 197, 102)",
      },
      splitLine: {
        lineStyle: {
          color: [
            "rgba(238, 197, 102, 0.1)",
            "rgba(238, 197, 102, 0.2)",
            "rgba(238, 197, 102, 0.4)",
            "rgba(238, 197, 102, 0.6)",
            "rgba(238, 197, 102, 0.8)",
            "rgba(238, 197, 102, 1)",
          ].reverse(),
        },
      },
      splitArea: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          color: "rgba(238, 197, 102, 0.5)",
        },
      },
    },
    series: [
      {
        name: "Beijing",
        type: "radar",
        lineStyle: lineStyle,
        data: dataBJ,
        symbol: "none",
        itemStyle: {
          color: "#F9713C",
        },
        areaStyle: {
          opacity: 0.1,
        },
      },
      {
        name: "Shanghai",
        type: "radar",
        lineStyle: lineStyle,
        data: dataSH,
        symbol: "none",
        itemStyle: {
          color: "#B3E4A1",
        },
        areaStyle: {
          opacity: 0.05,
        },
      },
      {
        name: "Guangzhou",
        type: "radar",
        lineStyle: lineStyle,
        data: dataGZ,
        symbol: "none",
        itemStyle: {
          color: "rgb(238, 197, 102)",
        },
        areaStyle: {
          opacity: 0.05,
        },
      },
    ],
  };

  option && myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
}
function echart2() {
  let myChart = echarts.init(document.getElementById("chart2"));

  let option = {
    tooltip: {
      //鼠标指上时的标线
      trigger: "axis",
      axisPointer: {
        lineStyle: {
          color: "#fff",
        },
      },
    },
    legend: {
      icon: "rect",
      itemWidth: 14,
      itemHeight: 5,
      itemGap: 13,
      data: ["气压", "温度", "湿度"],
      right: "1em",
      top: "0px",
      textStyle: {
        fontSize: 12,
        color: "#fff",
      },
    },
    grid: {
      x: 35,
      y: 25,
      x2: 8,
      y2: 25,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        axisLine: {
          lineStyle: {
            color: "#57617B",
          },
        },
        axisLabel: {
          textStyle: {
            color: "#fff",
          },
        },
        data: [
          "1月",
          "2月",
          "3月",
          "4月",
          "5月",
          "6月",
          "7月",
          "8月",
          "9月",
          "10月",
          "11月",
          "12月",
        ],
      },
    ],
    yAxis: [
      {
        type: "value",
        axisTick: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: "#57617B",
          },
        },
        axisLabel: {
          margin: 10,
          textStyle: {
            fontSize: "0.8em",
          },
          textStyle: {
            color: "#fff",
          },
        },
        splitLine: {
          lineStyle: {
            color: "#57617B",
          },
        },
      },
    ],
    series: [
      {
        name: "气压",
        type: "line",
        smooth: true,
        lineStyle: {
          normal: {
            width: 2,
          },
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(137, 189, 27, 0.3)",
                },
                {
                  offset: 0.8,
                  color: "rgba(137, 189, 27, 0)",
                },
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)",
            shadowBlur: 10,
          },
        },
        itemStyle: {
          normal: {
            color: "rgb(137,189,27)",
          },
        },
        data: [20, 35, 34, 45, 52, 41, 49, 64, 24, 52.4, 24, 33],
      },
      {
        name: "温度",
        type: "line",
        smooth: true,
        lineStyle: {
          normal: {
            width: 2,
          },
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(0, 136, 212, 0.3)",
                },
                {
                  offset: 0.8,
                  color: "rgba(0, 136, 212, 0)",
                },
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)",
            shadowBlur: 10,
          },
        },
        itemStyle: {
          normal: {
            color: "rgb(0,136,212)",
          },
        },
        data: [
          97.3, 99.2, 99.3, 100.0, 99.6, 90.6, 80.0, 91.5, 69.8, 67.5, 90.4,
          84.9,
        ],
      },
      {
        name: "湿度",
        type: "line",
        smooth: true,
        lineStyle: {
          normal: {
            width: 2,
          },
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(219, 50, 51, 0.3)",
                },
                {
                  offset: 0.8,
                  color: "rgba(219, 50, 51, 0)",
                },
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)",
            shadowBlur: 10,
          },
        },
        itemStyle: {
          normal: {
            color: "rgb(219,50,51)",
          },
        },
        data: [
          84.2, 81.0, 67.5, 62.1, 43.7, 68.5, 51.9, 71.8, 76.7, 67.6, 62.9, 0,
        ],
      },
    ],
  };

  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
}
function echart3() {
  var myChart = echarts.init(document.getElementById("chart8"));
  var data = [
    {value: 1200,name: 'CPU'},
    {value: 203,name: 'COE'},
    { value: 146, name: "GPU" },
  ];
  option = {
    backgroundColor: "rgba(0,0,0,0)",
    // tooltip: {
    //   trigger: "item",
    //   formatter: "{b}:<br/>{c}({d}%)"
    // },
    grid: {
      top: "100%",
      left: "50%",
      right: "50%",
      containLabel: true,
    },
    color: ["#20b9cf66", "#2089cf66", "#205bcf66"],
    legend: {
      x: "center",
      y: "center",
      orient: "vertical",
      itemGap: 2,
      itemWidth: 6,
      itemHeight: 6,
      icon: "",
      data: ["CPU", "GPU", "COE"],
      textStyle: {
        color: [],
        fontStyle: "normal",
        fontSize: 6,
      },
    },
    series: [
      {
        name: "123",
        type: "pie",
        clockwise: false,
        minAngle: 20,
        center: ["50%", "50%"],
        radius: [25, 40],
        itemStyle: {
          normal: {
            borderColor: "transparent",
            borderWidth: 1,
          },
        },
        label: {
          normal: {
            show: true,
            position: "inside",
            formatter: "{d}%",
            textStyle: {
              color: "#fff",
              fontSize: 10,
            },
          },
          emphasis: {
            show: true,
            textStyle: {
              fontWeight: "bold",
            },
          },
        },
        data: data,
      },
      {
        name: "",
        type: "pie",
        clockwise: false,
        silent: true,
        minAngle: 20,
        // center: ['35%', '50%'],
        radius: [0, 20],
        itemStyle: {
          normal: {
            borderColor: "#1e2239",
            borderWidth: 1,
            opacity: 0.21,
          },
        },
        label: {
          normal: {
            show: true,
          },
        },
        data: data,
      },
    ],
  };

  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
}
function echart4() {
  // 需要展示的数据
  let resData = [
    { name: "", value: 80 },
    { name: "", value: 40 },
    { name: "", value: 60 },
  ];
  let name = resData.map((item) => item.name); // 获取名称
  let value = resData.map((item) => item.value); // 获取数值
  let sum = value.reduce((pre, cur) => (pre += cur), 0); // 总和
  let color = [
    // 颜色
    ["#6fc1fb", "#1971e7"],
    ["#983fff", "#2c23ff"],
    ["#fff582", "#59f9d2"],
  ];
  let series = [];
  let yAxis = [];
  for (let i = 0; i < resData.length; i++) {
    series.push({
      type: "pie",
      clockWise: true, //顺时加载
      hoverAnimation: false, // 鼠标移入变大
      radius: [60 - i * 12 + "%", 53 - i * 12 + "%"], // 圆环
      center: ["50%", "50%"],
      itemStyle: {
        normal: {
          label: {
            show: false,
          },
          labelLine: {
            show: false,
          },
          borderWidth: 18,
        },
      },
      data: [
        {
          name: resData[i].name,
          value: resData[i].value,
          itemStyle: {
            normal: {
              // 渐变色
              color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                {
                  offset: 0,
                  color: color[i][0],
                },
                {
                  offset: 1,
                  color: color[i][1],
                },
              ]),
            },
          },
        },
        {
          // 阴影段
          name: "",
          value: sum - resData[i].value,
          itemStyle: {
            normal: {
              color: "transparent",
            },
          },
          tooltip: {
            // 不显示提示框
            show: false,
          },
          hoverAnimation: false, // 鼠标移入变大
        },
      ],
    });
    series.push({
      name: "",
      type: "pie",
      clockWise: true, //顺时加载
      z: 1, // 层级，默认为 2，z小的会被z大的覆盖住
      hoverAnimation: true, // 鼠标移入变大
      radius: [60 - i * 12 + "%", 53 - i * 12 + "%"], // 圆环
      center: ["50%", "50%"], // 位置
      label: {
        show: false,
      },
      itemStyle: {
        normal: {
          label: {
            show: false,
          },
          labelLine: {
            show: false,
          },
          borderWidth: 18,
        },
      },
      data: [
        {
          // 阴影的75%
          value: 7.5,
          itemStyle: {
            normal: {
              color: "rgba(1,179,238,0.1)",
            },
          },
          tooltip: {
            show: false,
          },
        },
        {
          // 阴影的最后25%，透明
          value: 2.5,
          itemStyle: {
            normal: {
              color: "rgba(0,0,0,0)",
              borderWidth: 0,
            },
          },
          tooltip: {
            show: false,
          },
        },
      ],
    });
    yAxis.push(resData[i].name);
  }
  let myChart = echarts.init(document.getElementById("chart4"));
  let option = {
    legend: {
      show: true,
      x: "center",
      top: "0%",
      itemGap: 3,
      itemWidth: 8,
      itemHeight: 8,
      textStyle: {
        fontSize: 7,
        color: "#fff",
      },
      data: name,
    },
    grid: {
      top: "13%",
      left: "55%",
      width: "35%",
      height: "30%",
      containlabel: false,
    },
    xAxis: [
      {
        // x轴隐藏
        show: false,
      },
    ],
    yAxis: [
      {
        // y轴配置
        type: "category",
        asisLine: {
          show: true,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: true,
          interval: 0,
          textStyle: {
            color: "#fff",
            fontSize: 8,
          },
        },
        data: yAxis,
      },
    ],
    series: series,
  };
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
}
function echart5() {
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(document.getElementById("chart5"));

  option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        lineStyle: {
          color: "#dddc6b",
        },
      },
    },
    grid: {
      left: "10",
      top: "10",
      right: "10",
      bottom: "10",
      containLabel: true,
    },

    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: "0.6em",
          },
        },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.2)",
          },
        },

        data: [
          "01",
          "02",
          "03",
          "04",
          "05",
          "06",
          "07",
          "08",
          "09",
          "11",
          "12",
          "13",
          "14",
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
        ],
      },
      {
        axisPointer: { show: false },
        axisLine: { show: false },
        position: "bottom",
        offset: 20,
      },
    ],

    yAxis: [
      {
        type: "value",
        axisTick: { show: false },
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)",
          },
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12,
          },
        },

        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)",
          },
        },
      },
    ],
    series: [
      {
        name: "1",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            color: "#0184d5",
            width: 2,
          },
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(255, 255, 255, 0.4)",
                },
                {
                  offset: 0.8,
                  color: "rgba(255, 255, 255, 0.1)",
                },
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)",
          },
        },
        itemStyle: {
          normal: {
            color: "#0184d5",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12,
          },
        },
        data: [
          3, 4, 3, 4, 3, 4, 3, 6, 2, 4, 2, 4, 3, 4, 3, 4, 3, 4, 3, 6, 2, 4, 2,
          4,
        ],
      },
      {
        name: "2",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            color: "#00d887",
            width: 2,
          },
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(0, 216, 135, 0.4)",
                },
                {
                  offset: 0.8,
                  color: "rgba(0, 216, 135, 0.1)",
                },
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)",
          },
        },
        itemStyle: {
          normal: {
            color: "#4132c6",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12,
          },
        },
        data: [
          5, 3, 5, 6, 1, 5, 3, 5, 6, 4, 6, 4, 8, 3, 5, 6, 1, 5, 3, 7, 2, 5, 1,
          4,
        ],
      },
    ],
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
  window.addEventListener("resize", function () {
    myChart.resize();
  });
}

echart1();
echart2();
echart3();
echart4();
echart5();
// function cir1() {
//     let myChart = echarts.init(document.getElementById('cir1'));
//     let option = {
//     title: {
//       text: `${value}万辆`,
//       text: `车辆总数`,
//       subtext: "",
//       left: "center",
//       top: "center", //top待调整
//       textStyle: {
//         color: "#fff",
//         fontSize: 8,
//         fontFamily: "PingFangSC-Regular",
//       },
//       subtextStyle: {
//         color: "#ff",
//         fontSize: 14,
//         fontFamily: "PingFangSC-Regular",
//         top: "center",
//       },
//       itemGap: -1, //主副标题间距
//     },

//     series: [
//       {
//         name: "pie1",
//         type: "pie",
//         clockWise: true,
//         radius: ['10%', '10%'],
//         itemStyle: {
//           normal: {
//             label: {
//               show: false,
//             },
//             labelLine: {
//               show: false,
//             },
//           },
//         },
//         hoverAnimation: false,
//         data: [
//           {
//             value: value,
//             name: "completed",
//             itemStyle: {
//               normal: {
//                 borderWidth: 8,
//                 borderColor: {
//                   colorStops: [
//                     {
//                       offset: 0,
//                       color: "#1d54f7" || "#00cefc", // 0% 处的颜色
//                     },
//                     {
//                       offset: 1,
//                       color: "#68eaf9" || "#367bec", // 100% 处的颜色
//                     },
//                   ],
//                 },
//                 color: {
//                   // 完成的圆环的颜色
//                   colorStops: [
//                     {
//                       offset: 0,
//                       color: "#1d54f7" || "#00cefc", // 0% 处的颜色
//                     },
//                     {
//                       offset: 1,
//                       color: "#68eaf9" || "#367bec", // 100% 处的颜色
//                     },
//                   ],
//                 },
//                 label: {
//                   show: false,
//                 },
//                 labelLine: {
//                   show: false,
//                 },
//               },
//             },
//           },
//           {
//             name: "gap",
//             value: 100 - value,
//             itemStyle: {
//               normal: {
//                 label: {
//                   show: false,
//                 },
//                 labelLine: {
//                   show: false,
//                 },
//                 color: "rgba(0, 0, 0, 0)",
//                 borderColor: "rgba(0, 0, 0, 0)",
//                 borderWidth: 0,
//               },
//             },
//           },
//         ],
//       },
//     ],
//   };

//   myChart.setOption(option);
//   window.addEventListener("resize", function () {
//     myChart.resize();
//   });
// }

// cir1();
