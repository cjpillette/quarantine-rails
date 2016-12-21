jQuery(document).ready(function () {
    jQuery("#flight-content").hide();
	jQuery("#flight-title").click(function () {
		jQuery("#flight-content").slideToggle();
	});
});

$(function () {
    // Create the chart
    Highcharts.chart('container1', {
        chart: {
            type: 'column'
        },
        title: {
            text: 'Volume of BRM interception'
        },
        subtitle: {
            text: 'at the border'
        },
        xAxis: {
            type: 'category'
        },
        yAxis: {
            title: {
                text: ''
            }

        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                borderWidth: 0,
                dataLabels: {
                    enabled: true,
                    format: '{point.y}'
                }
            }
        },

        tooltip: {
            headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
            pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> of total<br/>'
        },

        series: [{
            name: 'Border activities',
            colorByPoint: true,
            data: [{
                name: 'SPoT',
                y: 56,
                drilldown: 'SPoT'
            }, {
                name: 'Airport',
                y: 24,
                drilldown: 'Airport'
            }, {
                name: 'Mail Centre',
                y: 10,
                drilldown: 'Mailcentre'
            }, {
                name: 'Seaport',
                y: 4,
                drilldown: 'Seaport'
            }, {
                name: 'AQP',
                y: 1,
                drilldown: 'AQP'
            }]
        }],
        drilldown: {
            series: [{
                name: 'SPoT',
                id: 'SPoT',
                data: [
                    [
                        'Dirty cars',
                        25
                    ],
                    [
                        "cars with V&G",
                        17
                    ],
                    [
                        'dogs',
                        8
                    ],
                    [
                        'wildlife',
                        5
                    ],
                    [
                        'goldfish',
                        1
                     ]                
                ]
            }, {
                name: 'Airport',
                id: 'Airport',
                data: [
                    [
                        'LST',
                        5
                    ],
                    [
                        'HBA',
                        3
                    ],
                    [
                        'DPO',
                        2
                    ],
                    [
                        'BWT',
                        1
                    ],
                    [
                        'FLS',
                        1
                    ]
                ]
            }, {
                name: 'Mail Centre',
                id: 'Mailcentre',
                data: [
                    [
                        'Kings Meadow',
                        10
                    ],
                    [
                        'Mornington',
                        8
                    ]
                ]
            }, {
                name: 'Seaport',
                id: 'Seaport',
                data: [
                    [
                        'Cruise Vessels',
                        3
                    ],
                    [
                        'Cargo Vessels',
                        2
                    ],
                    [
                        'Yacht',
                        1
                    ],
                    [
                        'AAD',
                        1
                    ]
                ]
            }, {
                name: 'AQP',
                id: 'AQP',
                data: [
                    [
                        'StarTrack',
                        3
                    ],
                    [
                        'Toll IPEC',
                        2
                    ],
                    [
                        'Tasfreight',
                        1
                    ]
                ]
            }]
        }
    });
});

$(function () {

    Highcharts.chart('container2', {
        chart: {
            type: 'pyramid',
            marginRight: 100
        },
        title: {
            text: 'PQA Non-compliance',
            x: -50
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b> ({point.y:,.0f})',
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
                    softConnector: true
                }
            }
        },
        legend: {
            enabled: false
        },
        series: [{
            name: 'cases',
            data: [
                ['Verbal warning',      30],
                ['Written warning',            1],
                ['Investigation', 1],
                ['IN',          1],
                ['Legal proceeding',             0]
            ]
        }]
    });
});

$(function () {

    Highcharts.chart('container3', {
        chart: {
            type: 'pyramid',
            marginRight: 100
        },
        title: {
            text: 'AHA Non-compliance',
            x: -50
        },
        plotOptions: {
            series: {
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b> ({point.y:,.0f})',
                    color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black',
                    softConnector: true
                }
            }
        },
        legend: {
            enabled: false
        },
        series: [{
            name: 'cases',
            data: [
                ['Warning Letter',         20],
                ['Investigation',           8],
                ['Interview',               3],
                ['IN',                      2],
                ['Court',                   1]
            ]
        }]
    });
});


$(function () {

    // Radialize the colors
    Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, function (color) {
        return {
            radialGradient: {
                cx: 0.5,
                cy: 0.3,
                r: 0.7
            },
            stops: [
                [0, color],
                [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
            ]
        };
    });

    // Build the chart
    Highcharts.chart('container4', {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Airport Inspection Regime'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    },
                    connectorColor: 'silver'
                }
            }
        },
        series: [{
            name: 'Inspection Regime',
            data: [
                { name: 'DDT+BO', y: 45 },
                {
                    name: 'Dog present',
                    y: 45,
                    sliced: true,
                    selected: true
                },
                { name: 'DDT alone', y: 30 },
                { name: 'BO alone', y: 17 }, 
                { name: 'Flight missed', y: 8 }
            ]
        }]
    });
});

