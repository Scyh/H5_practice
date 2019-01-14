$(function() {
    function randomArr(min, max, count) {
        var dis = max - min,
        arr = [];
        for (var i = 0; i < count; i++) {
            arr.push(Math.floor((Math.random() * min) + dis))
        }

        return arr
    }

    var option1 = {
        title: {
            text: ""
        },
        tooltip: {
            trigger: "axis"
        },
        legend: {
            data: ["数据一部", "数据二部", "数据三部"]
        },
        xAxis: {
            type: "category",
            boundaryGap: false,
            data: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            axisLine: {
                lineStyle: {
                    type: "solid",
                    color: "#99D3D8",
                    width: "1"
                }
            },
            axisLabel: {
                textStyle: {
                    color: "#4ED4B8"
                }
            }
        },
        yAxis: {
            axisTick: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    type: "solid",
                    color: "#99D3D8",
                    width: "1"
                }
            },
            axisLabel: {
                textStyle: {
                    color: "#4ED4B8"
                }
            }
        },
        series: [{
            name: "数据一部",
            type: "line",
            stack: "数据一部工作量",
            data: randomArr(150, 300, 12)
        },
        {
            name: "数据二部",
            type: "line",
            stack: "数据二部工作量",
            data: randomArr(200, 350, 12)
        },
        {
            name: "数据三部",
            type: "line",
            stack: "数据三部工作量",
            data: randomArr(250, 400, 12)
        }]
    },
    option2 = {
        title: {
            text: "数据统计",
            textStyle: {
                color: "#4ED4B8",
                align: "center"
            }
        },
        tooltip: {
            trigger: "item"
        },
        legend: {
            x: "center",
            y: "bottom",
            data: ["数据一部", "数据二部", "数据三部", "编委会"]
        },
        toolbox: {
            show: true,
        },
        series: [{
            name: "数据统计",
            type: "pie",
            radius: [20, 110],
            roseType: "radius",
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            lableLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data: [{
                value: 15,
                name: "数据一部"
            },
            {
                value: 14,
                name: "数据二部"
            },
            {
                value: 18,
                name: "数据三部"
            },
            {
                value: 16,
                name: "编委会"
            },
            ]
        }]
    };

    var myEchart1 = echarts.init($(".echart-example1").get(0));
    myEchart2 = echarts.init($(".echart-example2").get(0));
    myEchart1.setOption(option1);
    myEchart2.setOption(option2);
    $(document).on("resize",
    function() {
        myEchart1.resize();
        myEchart2.resize()
    })
});

var config = {
    "0": ["fadeInRightBig", "fadeInRightBig", "fadeInRightBig", "zoomIn", "fadeInRightBig"],
    "1": ["fadeInRightBig", "fadeInRightBig", "fadeInRightBig", "zoomIn", "zoomIn", "zoomIn"],
    "2": ["fadeInRightBig", "fadeInRightBig", "fadeInRightBig", "zoomIn", "zoomIn", "zoomIn", "flipInY", "flipInY"],
    "3": ["fadeInRightBig", "fadeInRightBig", "fadeInRightBig", "zoomIn", "zoomIn", "zoomIn", "lightSpeedIn", "lightSpeedIn", "lightSpeedIn", "lightSpeedIn", "lightSpeedIn", "lightSpeedIn", "lightSpeedIn", "lightSpeedIn", "lightSpeedIn"],
    "4": ["zoomInDown", "fadeInDown"],
    "5": ["fadeInRightBig", "fadeInRightBig", "fadeInRightBig", "jackInTheBox", "jackInTheBox", "jackInTheBox", "flipInX", "flipInX", "flipInX", "flipInX", "flipInX", "flipInX", "flipInX", "flipInX", "flipInX"],
    "6": ["fadeInRightBig", "fadeInRightBig", "fadeInRightBig", "jackInTheBox", "jackInTheBox", "jackInTheBox", "fadeInUp"],
    "7": ["fadeInRightBig", "fadeInRightBig", "fadeInRightBig", "jackInTheBox", "jackInTheBox", "jackInTheBox", "fadeInUp"],
};

function initLoading(loadingWrap) {
    var str = "";
    for (var i = 0; i < 7; i++) {
        str += '<li class="flip-item animated" style="-webkit-animation-duration: 0.6s;' + "animation-delay:" + (i * 0.1) + "s" + ";-webkit-animation-delay: " + (i * 0.1) + 's"></li>'
    }
    $(loadingWrap).each(function(index, el) {
        $(el).append(str)
    });
    $(loadingWrap).eq(0).find(".flip-item").addClass("flipInY")
}

function toggleAnimation($page, classArr) {
    if (!$page || !classArr) {
        return
    }

    var $doms = $page.find(".animate-item");
    $page.toggleClass("fadeInRightBig");
    $(".flip-item").removeClass("flipInY");
    $page.prev().find(".flip-item").addClass("flipInY");
    if (classArr.length == 1) {
        $doms.toggleClass(classArr[0]);
        return
    }
    $doms.each(function(index, el) {
        $(el).toggleClass(classArr[index + 1] || classArr[0])
    })
}
$(function() {
    var audio = document.getElementById("sceneaudio"),
    swiperMax = $(".swiper-slide").length - 1;
    $("#loading").removeClass().addClass("fadeOut animated").one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend",
    function() {
        $(this).removeClass().css("display", "none");
        $("#main").show();
        var oldIndex = 0,
        mySwiper = $(".swiper-container").swiper({
            loop: false,
            mode: "vertical",
            onSlideChangeStart: function(swiper) {
                var index = swiper.activeIndex;
                index === swiperMax ? $("#arrow").hide() : $("#arrow").show();
                toggleAnimation($("#page" + oldIndex), config[oldIndex]);
                toggleAnimation($("#page" + index), config[index]);
                oldIndex = index
            },
        });

        toggleAnimation($("#page0"), config[0]);
        initLoading(".section-loading")
    });
    $("#audio_btn").on("click",
    function(ev) {
        if (audio.paused) {
            audio.play();
            $(this).addClass("animated")
        }

        else {
            audio.pause();
            $(this).removeClass("animated")
        }
    })
});