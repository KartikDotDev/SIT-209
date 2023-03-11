$('#navbar').load('navbar.html');

/**
 * @author Kartik Arora
 */


/**
 * @description Appends the Line Chart on the line Chart div container
 */
Highcharts.chart('lineChart', {

    title: {
        text: 'U.S Solar Employment Growth by Job Category, 2010-2020',
        align: 'left'
    },

    subtitle: {
        text: 'Source: <a href="https://irecusa.org/programs/solar-jobs-census/" target="_blank">IREC</a>',
        align: 'left'
    },

    yAxis: {
        title: {
            text: 'Number of Employees'
        }
    },

    xAxis: {
        accessibility: {
            rangeDescription: 'Range: 2010 to 2020'
        }
    },

    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            label: {
                connectorAllowed: false
            },
            pointStart: 2010
        }
    },

    series: [{
        name: 'Installation & Developers',
        data: [43934, 48656, 65165, 81827, 112143, 142383,
            171533, 165174, 155157, 161454, 154610]
    }, {
        name: 'Manufacturing',
        data: [24916, 37941, 29742, 29851, 32490, 30282,
            38121, 36885, 33726, 34243, 31050]
    }, {
        name: 'Sales & Distribution',
        data: [11744, 30000, 16005, 19771, 20185, 24377,
            32147, 30912, 29243, 29213, 25663]
    }, {
        name: 'Operations & Maintenance',
        data: [null, null, null, null, null, null, null,
            null, 11164, 11218, 10077]
    }, {
        name: 'Other',
        data: [21908, 5548, 8105, 11248, 8989, 11816, 18274,
            17300, 13053, 11906, 10073]
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    layout: 'horizontal',
                    align: 'center',
                    verticalAlign: 'bottom'
                }
            }
        }]
    }

});


/**
 * @description Spline Curve appended in Spline div
 * 
 */

Highcharts.chart('Spline', {
    chart: {
      type: 'spline',
      inverted: true
    },
    title: {
      text: 'Atmosphere Temperature by Altitude',
      align: 'left'
    },
    subtitle: {
      text: 'According to the Standard Atmosphere Model',
      align: 'left'
    },
    xAxis: {
      reversed: false,
      title: {
        enabled: true,
        text: 'Altitude'
      },
      labels: {
        format: '{value} km'
      },
      accessibility: {
        rangeDescription: 'Range: 0 to 80 km.'
      },
      maxPadding: 0.05,
      showLastLabel: true
    },
    yAxis: {
      title: {
        text: 'Temperature'
      },
      labels: {
        format: '{value}°'
      },
      accessibility: {
        rangeDescription: 'Range: -90°C to 20°C.'
      },
      lineWidth: 2
    },
    legend: {
      enabled: false
    },
    tooltip: {
      headerFormat: '<b>{series.name}</b><br/>',
      pointFormat: '{point.x} km: {point.y}°C'
    },
    plotOptions: {
      spline: {
        marker: {
          enable: false
        }
      }
    },
    series: [{
      name: 'Temperature',
      data: [[0, 15], [10, -50], [20, -56.5], [30, -46.5], [40, -22.1],
        [50, -2.5], [60, -27.7], [70, -55.7], [80, -76.5]]
    }]
  });



/**
 * @description Nuclear stockpiles chart appeneded to Area div
 * 
 * Data retrieved from https://fas.org/issues/nuclear-weapons/status-world-nuclear-forces/
*/
Highcharts.chart('Area', {
    chart: {
      type: 'area'
    },
    accessibility: {
      description: 'Image description: An area chart compares the nuclear stockpiles of the USA and the USSR/Russia between 1945 and 2017. The number of nuclear weapons is plotted on the Y-axis and the years on the X-axis. The chart is interactive, and the year-on-year stockpile levels can be traced for each country. The US has a stockpile of 6 nuclear weapons at the dawn of the nuclear age in 1945. This number has gradually increased to 369 by 1950 when the USSR enters the arms race with 6 weapons. At this point, the US starts to rapidly build its stockpile culminating in 32,040 warheads by 1966 compared to the USSR’s 7,089. From this peak in 1966, the US stockpile gradually decreases as the USSR’s stockpile expands. By 1978 the USSR has closed the nuclear gap at 25,393. The USSR stockpile continues to grow until it reaches a peak of 45,000 in 1986 compared to the US arsenal of 24,401. From 1986, the nuclear stockpiles of both countries start to fall. By 2000, the numbers have fallen to 10,577 and 21,000 for the US and Russia, respectively. The decreases continue until 2017 at which point the US holds 4,018 weapons compared to Russia’s 4,500.'
    },
    title: {
      text: 'US and USSR nuclear stockpiles'
    },
    subtitle: {
      text: 'Source: <a href="https://fas.org/issues/nuclear-weapons/status-world-nuclear-forces/" ' +
        'target="_blank">FAS</a>'
    },
    xAxis: {
      allowDecimals: false,
      labels: {
        formatter: function () {
          return this.value; // clean, unformatted number for year
        }
      },
      accessibility: {
        rangeDescription: 'Range: 1940 to 2017.'
      }
    },
    yAxis: {
      title: {
        text: 'Nuclear weapon states'
      },
      labels: {
        formatter: function () {
          return this.value / 1000 + 'k';
        }
      }
    },
    tooltip: {
      pointFormat: '{series.name} had stockpiled <b>{point.y:,.0f}</b><br/>warheads in {point.x}'
    },
    plotOptions: {
      area: {
        pointStart: 1940,
        marker: {
          enabled: false,
          symbol: 'circle',
          radius: 2,
          states: {
            hover: {
              enabled: true
            }
          }
        }
      }
    },
    series: [{
      name: 'USA',
      data: [
        null, null, null, null, null, 2, 9, 13, 50, 170, 299, 438, 841,
        1169, 1703, 2422, 3692, 5543, 7345, 12298, 18638, 22229, 25540,
        28133, 29463, 31139, 31175, 31255, 29561, 27552, 26008, 25830,
        26516, 27835, 28537, 27519, 25914, 25542, 24418, 24138, 24104,
        23208, 22886, 23305, 23459, 23368, 23317, 23575, 23205, 22217,
        21392, 19008, 13708, 11511, 10979, 10904, 11011, 10903, 10732,
        10685, 10577, 10526, 10457, 10027, 8570, 8360, 7853, 5709, 5273,
        5113, 5066, 4897, 4881, 4804, 4717, 4571, 4018, 3822, 3785, 3805,
        3750, 3708, 3708
      ]
    }, {
      name: 'USSR/Russia',
      data: [null, null, null, null, null, null, null, null, null,
        1, 5, 25, 50, 120, 150, 200, 426, 660, 863, 1048, 1627, 2492,
        3346, 4259, 5242, 6144, 7091, 8400, 9490, 10671, 11736, 13279,
        14600, 15878, 17286, 19235, 22165, 24281, 26169, 28258, 30665,
        32146, 33486, 35130, 36825, 38582, 40159, 38107, 36538, 35078,
        32980, 29154, 26734, 24403, 21339, 18179, 15942, 15442, 14368,
        13188, 12188, 11152, 10114, 9076, 8038, 7000, 6643, 6286, 5929,
        5527, 5215, 4858, 4750, 4650, 4600, 4500, 4490, 4300, 4350, 4330,
        4310, 4495, 4477
      ]
    }]
  });



  /**
   * @description Donut Browser market share 
   * 
   */
  var colors = Highcharts.getOptions().colors,
  categories = [
    'Chrome',
    'Safari',
    'Edge',
    'Firefox',
    'Other'
  ],
  data = [
    {
      y: 61.04,
      color: colors[2],
      drilldown: {
        name: 'Chrome',
        categories: [
          'Chrome v97.0',
          'Chrome v96.0',
          'Chrome v95.0',
          'Chrome v94.0',
          'Chrome v93.0',
          'Chrome v92.0',
          'Chrome v91.0',
          'Chrome v90.0',
          'Chrome v89.0',
          'Chrome v88.0',
          'Chrome v87.0',
          'Chrome v86.0',
          'Chrome v85.0',
          'Chrome v84.0',
          'Chrome v83.0',
          'Chrome v81.0',
          'Chrome v89.0',
          'Chrome v79.0',
          'Chrome v78.0',
          'Chrome v76.0',
          'Chrome v75.0',
          'Chrome v72.0',
          'Chrome v70.0',
          'Chrome v69.0',
          'Chrome v56.0',
          'Chrome v49.0'
        ],
        data: [
          36.89,
          18.16,
          0.54,
          0.7,
          0.8,
          0.41,
          0.31,
          0.13,
          0.14,
          0.1,
          0.35,
          0.17,
          0.18,
          0.17,
          0.21,
          0.1,
          0.16,
          0.43,
          0.11,
          0.16,
          0.15,
          0.14,
          0.11,
          0.13,
          0.12
        ]
      }
    },
    {
      y: 9.47,
      color: colors[3],
      drilldown: {
        name: 'Safari',
        categories: [
          'Safari v15.3',
          'Safari v15.2',
          'Safari v15.1',
          'Safari v15.0',
          'Safari v14.1',
          'Safari v14.0',
          'Safari v13.1',
          'Safari v13.0',
          'Safari v12.1'
        ],
        data: [
          0.1,
          2.01,
          2.29,
          0.49,
          2.48,
          0.64,
          1.17,
          0.13,
          0.16
        ]
      }
    },
    {
      y: 9.32,
      color: colors[5],
      drilldown: {
        name: 'Edge',
        categories: [
          'Edge v97',
          'Edge v96',
          'Edge v95'
        ],
        data: [
          6.62,
          2.55,
          0.15
        ]
      }
    },
    {
      y: 8.15,
      color: colors[1],
      drilldown: {
        name: 'Firefox',
        categories: [
          'Firefox v96.0',
          'Firefox v95.0',
          'Firefox v94.0',
          'Firefox v91.0',
          'Firefox v78.0',
          'Firefox v52.0'
        ],
        data: [
          4.17,
          3.33,
          0.11,
          0.23,
          0.16,
          0.15
        ]
      }
    },
    {
      y: 11.02,
      color: colors[6],
      drilldown: {
        name: 'Other',
        categories: [
          'Other'
        ],
        data: [
          11.02
        ]
      }
    }
  ],
  browserData = [],
  versionsData = [],
  i,
  j,
  dataLen = data.length,
  drillDataLen,
  brightness;


// Build the data arrays
for (i = 0; i < dataLen; i += 1) {

  // add browser data
  browserData.push({
    name: categories[i],
    y: data[i].y,
    color: data[i].color
  });

  // add version data
  drillDataLen = data[i].drilldown.data.length;
  for (j = 0; j < drillDataLen; j += 1) {
    brightness = 0.2 - (j / drillDataLen) / 5;
    versionsData.push({
      name: data[i].drilldown.categories[j],
      y: data[i].drilldown.data[j],
      color: Highcharts.color(data[i].color).brighten(brightness).get()
    });
  }
}

// Create the chart
Highcharts.chart('donut', {
  chart: {
    type: 'pie'
  },
  title: {
    text: 'Browser market share, January, 2022',
    align: 'left'
  },
  subtitle: {
    text: 'Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>',
    align: 'left'
  },
  plotOptions: {
    pie: {
      shadow: false,
      center: ['50%', '50%']
    }
  },
  tooltip: {
    valueSuffix: '%'
  },
  series: [{
    name: 'Browsers',
    data: browserData,
    size: '60%',
    dataLabels: {
      formatter: function () {
        return this.y > 5 ? this.point.name : null;
      },
      color: '#ffffff',
      distance: -30
    }
  }, {
    name: 'Versions',
    data: versionsData,
    size: '80%',
    innerSize: '60%',
    dataLabels: {
      formatter: function () {
        // display only if larger than 1
        return this.y > 1 ? '<b>' + this.point.name + ':</b> ' +
          this.y + '%' : null;
      }
    },
    id: 'versions'
  }],
  responsive: {
    rules: [{
      condition: {
        maxWidth: 400
      },
      chartOptions: {
        series: [{
        }, {
          id: 'versions',
          dataLabels: {
            enabled: false
          }
        }]
      }
    }]
  }
});