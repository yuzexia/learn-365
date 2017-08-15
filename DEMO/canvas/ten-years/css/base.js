//###base###
function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg))
        return unescape(arr[2]);
    else
        return null;
}
function getQueryStringByName(name) {
    var result = location.search.match(new RegExp("[\?\&]" + name + "=([^\&]+)", "i"));
    if (result == null || result.length < 1) {
        return "";
    }
    return result[1];
}
var fullUrl = document.URL;
var $link = fullUrl.substring(0, fullUrl.lastIndexOf("/") + 1);
var shareSucceed=shareSucceed||function(){};

var cnl = '?ok=1';
if (getQueryStringByName('cnl')) {
    cnl = "?cnl=" + getQueryStringByName('cnl');
}
if (getQueryStringByName('from')) {
    cnl += "&from=" + getQueryStringByName('from');
}
if (getQueryStringByName('lc')) {
    cnl += "&lc=" + getQueryStringByName('lc');
}
if (getQueryStringByName('sui')) {
    cnl += "&sui=" + getQueryStringByName('sui');
}
//微信分享
window.wxShareData = {
    title: '一双眼眸 望穿十年', // 分享标题
    desc: '十年时光，让我陪在你身旁',
    link:  dataSDK.dealUrl(window.location.href), // 分享链接
    imgUrl: $link + 'img/share.jpg', // 分享图标
    type: '', // 分享类型,music、video或link，不填默认为link
    dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
    success: function () {//分享成功
    	
    },
    cancel: function () {
        // 用户取消分享后执行的回调函数
    }
}

window.wxShareData.success = function () {//分享成功
	dataSDK.share('friend');
};

window.wxShareData2 = $.extend({}, window.wxShareData);
window.wxShareData2.success = function () {//分享成功
    dataSDK.share('timeline');
};
wxMain();
var extUser={};
function wxMain() {
    $.ajax({
        url: 'api/jssdk.php',//Common/Default.aspx
        type: 'POST',
        data: { "url": window.location.href },
        datatype: 'json',
        success: function (msg) {
            wxShare(msg);
            try {
            	if(msg.openid)
            	{
	                //微信授权用户信息监测
	                extUser = {
	                    "openid": msg.openid,
	                    "nickname": '',
	                    "sex": '',
	                    "province": '',
	                    "city": '',
	                    "country": '',
	                    "headimgurl": '',
	                    "privilege": [],
	                    "unionid": ""
	                };
	                dataSDK.pushUserInfo(extUser);
            	}
            } catch (e) { }
        }
    });
}
function wxShare(msg) {
    wx.config({
        debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
        appId: msg.appid, // 必填，公众号的唯一标识
        timestamp: msg.timestamp, // 必填，生成签名的时间戳
        nonceStr: msg.noncestr, // 必填，生成签名的随机串
        signature: msg.signature, // 必填，签名，见附录1
        jsApiList: [
          'onMenuShareAppMessage', 'onMenuShareTimeline','hideMenuItems', 'chooseImage', 'uploadImage'
        ] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
    });
    wx.ready(function () {
        wx.hideMenuItems({
            menuList: [
                   'menuItem:share:qq', //分享到QQ
                   'menuItem:share:weiboApp',//分享到微博
                   'menuItem:share:QZone'//分享到 QQ 空间
            ]
        });
        //分享给朋友
        wx.onMenuShareAppMessage(wxShareData);
        //分享到朋友圈
        wx.onMenuShareTimeline(wxShareData2);
    });
    wx.error(function (res) {
        // config信息验证失败会执行error函数，如签名过期导致验证失败，具体错误信息可以打开config的debug模式查看，也可以在返回的res参数中查看，对于SPA可以在这里更新签名。
    });
}
