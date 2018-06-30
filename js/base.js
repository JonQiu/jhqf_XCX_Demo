// var SERVE1 = 'https://jhqf.o-banks.com/';
var SERVE1 = 'https://uatjhqf.o-banks.com/';

(function (doc, win) {
    var docEl = doc.documentElement, resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) {
                return
            }
            if (clientWidth >= 750) {
                docEl.style.fontSize = "100px"
            } else {
                docEl.style.fontSize = 100 * (clientWidth / 750) + "px"
            }
        };
    if (!doc.addEventListener) {
        return
    }
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener("DOMContentLoaded", recalc, false)
})(document, window);
var Debugger = function () {
};
Debugger.log = function (message) {
    try {
        if (0) {
            console.log(message)
        }
    } catch (exception) {
        return "Error:the function  log is not exist."
    }
};

function layerShow(msg) {
    if (document.getElementById("layerNotice")) {
        Debugger.log("显示");
        $("#layerText").text(msg);
        $("#layerNotice").show();
        setTimeout(function () {
            $("#layerNotice").hide()
        }, 3000)
    } else {
        Debugger.log("创建");
        $("body").append('<div id="layerNotice"><span id="layerText">' + msg + "</span></div>");
        setTimeout(function () {
            $("#layerNotice").hide()
        }, 3000)
    }
}

function getUrlParam(name) {
    name = name + "";
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return decodeURI(r[2])
    }
    return ""
}

function getWeek(obj) {
    if (obj == null || obj == "" || obj == undefined) {
        return
    }
    obj = obj.substring(0, 19);
    obj = obj.replace(/-/g, "/");
    var timestamp = new Date(obj);
    var str = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
    Debugger.log(timestamp);
    return str[timestamp.getDay()]
}

function showActivity() {
    if (document.getElementById("activity")) {
        Debugger.log("显示");
        $("#activity").show()
    } else {
        Debugger.log("创建");
        $("body").append('<div id="activity"> <div id="activity_bg"> <img src="../images/activity.gif"> <p style="margin-top: 0.2rem; font-size: 0.24rem">玩命加载中.....</p> </div> </div>')
    }
}

function hideActivity() {
    $("#activity").hide()
}
function noData() {
    document.body.innerHTML = '<section class="page-tips-box">\n' +
        '    <img src="../images/bg-no-data.png" class="no-data-img">\n' +
        '    <div class="page-tips">暂时没有数据~</div>\n' +
        '</section >';
    document.body.onclick = function () {
        window.location.reload();
    }
}

//alert弹框 显示
function alertShow(msg,suretext,surefuc,quitfuc) {
    if (document.getElementById("alertDiy")) {
        Debugger.log("显示");
        $("#alertDiy").show()
    } else {
        Debugger.log("创建");
        $("body").append('<section id="alertDiy"> <div id="alertBg"> <h1 id="alert_title">温馨提示！</h1> <h3 class="msg">'+msg+'</h3> <div class="alertBt-bg"> <p class="alert-sureBt alertBt">'+suretext+'</p><p class="alert-quitBt alertBt">取消</p> </div> </div> </section>')
    }
    $('.alert-sureBt').click(function () {
        $("#alertDiy").hide();
        if(surefuc){
            surefuc('hello');
        }
    });
    $('.alert-quitBt').click(function () {
        $("#alertDiy").hide();
        if(quitfuc){
            quitfuc();
        }
    });
}

