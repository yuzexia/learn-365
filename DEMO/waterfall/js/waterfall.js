(function(doc, win) {
    // px与rem之间转换
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;

            if (!clientWidth) return;
            docEl.style.fontSize = 100 * (clientWidth / 1920) + 'px';
            //                  alert(docEl.style.fontSize);

        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

$(function(){
    var Obj = $("#waterfall"),
        Ul = Obj.children('ul'),
        Li = Ul.children('li');
    $(window).load(function(event) {
        waterfall();
    });
    $(window).resize(function(event) {
        waterfall();
    });
    function waterfall(){
        var WinW = $(window).width();
        var Blank = 20,                     // 每个图片之间的间隔留白
            LiW = 200+Blank,                // 一个图片距离上一个图片的宽度距离
            LiCol = parseInt(WinW/LiW),     // 计算在当前窗口下，有几列
            UlW = LiCol*LiW-Blank;          // 根据有几列，设定总的宽度（减掉最后一个留白）
        Ul.width(UlW);
        console.log(Ul.width(UlW));

        var AllLi = [];                     // 建立一个空数组变量
        Li.each(function(index, e){
            console.log(AllLi)
            var T = $(this);
            if (index<LiCol) {                      // 第一行的处理
                AllLi[index] = T.outerHeight();     // 给数组添加内容，为当前元素的高度值
                T.css({
                    top: 0,
                    left: LiW*index+'px'
                });
            } else{
                var MinH = Math.min.apply(null,AllLi);      // 找到数组中，最小的那个值（也就是留白最大的）
                var MinI = $.inArray(MinH,AllLi);			// 通过 $.inArray 查找数值在数组中的索引
                var ThisH = T.outerHeight()+Blank;          // 自身的高度加上留白

                AllLi[MinI] = parseInt(MinH+ThisH);         // 将被占位的数组重新赋值

                T.css({
                    top: MinH+Blank+'px',
                    left: LiW*MinI+'px'
                });
            };
        });
    }
})