$(function() {
    function randomArr(min, max, count) {
        var dis = max - min,
            arr = [];
        for (var i = 0; i < count; i ++) {
            arr.push(Math.floor((Math.random() * min) + dis));
        }
        return arr
    };
    var option1 = {
        title: {
            text: ''
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['数据一部','数据二部','数据三部']
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,
            data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#99D3D8',
                    width:'1'
                }
            },
            axisLabel: {
                textStyle: { color: '#4ED4B8' }
            }
        },
        yAxis: {
            axisTick:{
                show: false
            },
            axisLine: {
                lineStyle: {
                    type: 'solid',
                    color: '#99D3D8',
                    width:'1'
                }
            },
            axisLabel: {
                textStyle: { color: '#4ED4B8' }
            }
        },
        series: [
            {
                name:'数据一部',
                type:'line',
                stack: '数据一部工作量',
                data: randomArr(150, 300, 12)
            },
            {
                name:'数据二部',
                type:'line',
                stack: '数据二部工作量',
                data: randomArr(200, 350, 12)
            },
            {
                name:'数据三部',
                type:'line',
                stack: '数据三部工作量',
                data: randomArr(250, 400, 12)
            }
        ]
    },
    option2 = {
        title : {
            text: '数据统计',
            textStyle: {
                color: "#4ED4B8",
                align: "center"
            }
        },
        tooltip : { trigger: 'item' },
        legend: {
            x : 'center',
            y : 'bottom',
            data:['数据一部','数据二部','数据三部', '编委会']
        },
        toolbox: {
            show : true,
        },
        series : [
            {
                name:'数据统计',
                type:'pie',
                radius : [20, 110],
                roseType : 'radius',
                label: {
                    normal: { show: false },
                    emphasis: { show: true }
                },
                lableLine: {
                    normal: { show: false },
                    emphasis: { show: true }
                },
                data:[
                    {value:15, name:'数据一部'},
                    {value:14, name:'数据二部'},
                    {value:18, name:'数据三部'},
                    {value:16, name:'编委会'},
                ]
            }
        ]
    };

    var myEchart1 = echarts.init($('.echart-example1').get(0));
        myEchart2 = echarts.init($('.echart-example2').get(0));
    myEchart1.setOption(option1);
    myEchart2.setOption(option2);
})