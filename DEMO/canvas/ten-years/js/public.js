var xxEvents = ('ontouchstart' in window) ? { start: 'touchstart', move: 'touchmove', end: 'touchend'} : { start: 'mousedown', move: 'mousemove', end: 'mouseup' };
var _xx = _xx || {};
_xx.bgMp3 = function () {
    //背景音乐
    var btn = $('#js_musicBtn'),
    	oMedia = $('#media')[0];
    btn.on(xxEvents.start, function (e) {
        if (oMedia.paused) {
            oMedia.play();
        } else {
            oMedia.pause();
        }
        e.preventDefault();
    });
    oMedia.load();
    oMedia.play();
    if (oMedia.paused) {
        $('.wrapper').one(xxEvents.start, function (e) {
            oMedia.play();
            e.preventDefault();
        });
    };
    $(oMedia).on('play', function () {
        btn.addClass('musicPlay');
    });
    $(oMedia).on('pause', function () {
        btn.removeClass('musicPlay');
    });
}
;(function ($) {
    var defaults = {
        classIn: 'moveIn',
        classOut: 'moveOut',
        onClass:'page-on',
        complete: function () { }
        // CALLBACKS
    };
    $.fn.moveIn = function (options) {
        var options = $.extend({},defaults, options);
        this.addClass(options.classIn).show();
        this.one('webkitAnimationEnd', function () {
            $(this).removeClass(options.classIn).addClass(options.onClass);
            options.complete();
        });
        return this;
    }
    $.fn.moveOut = function (options) {
        var options = $.extend({},defaults, options);
        this.addClass(options.classOut).show();
        this.one('webkitAnimationEnd', function () {
            $(this).removeClass(options.classOut+' '+options.onClass).hide();
            options.complete();
        });
        return this;
    }
})(jQuery);
_xx.hint=function(text){
    //提示层
    var box=$('#js_hint');
    box.html(text).moveIn();
    if(box[0].timer) {
        clearTimeout(box[0].timer);
    }
    box[0].timer=setTimeout(function(){
        box.moveOut();
    },2000);
}
;(function(){
    //页面跳转控制
    var pNow=null,pLast=null,pMark=null,z=2;
    var moveEnd=null;
    _xx.pageTo=function(toPage,complete){
        moveEnd=complete;
        pLast=pNow;
        pNow=toPage;
        if(pNow==pLast) return;
        z++;
        $(pNow).css('zIndex',z).show();
    }
    $('.pageBox').on('webkitAnimationEnd',function(){
        if(pNow==pMark) return;
        pMark=pNow;
        if(moveEnd) moveEnd();
        $(pNow).addClass('page-on');
        $(pLast).hide().removeClass('page-on');
    });
})();
var _g={
    scale:[
        //s:缩放比例 ox oy:偏移 move:缩放类型(默认zoomOut) zoomIn放大 duration:持续时间 delay:延迟时间
        //spirit id:类型 num:帧数 load:是否加载
        //spirit 计算缩放比例，然后用位置调试代码调整位置
        {src:"img/s1.jpg",s:0.544,ox:294,oy:415.5,spirit:{id:"m1",s:1,x:179.5,y:295,num:6,load:true}},
        {src:"img/s2.jpg",s:0.685,ox:320,oy:520,spirit:{id:"m1",s:0.544,x:223.5,y:366,num:6}},
        {src:"img/s3.jpg",s:0.491,ox:224,oy:471.5,spirit:{id:"m1",s:0.373,x:176.5,y:395.5,num:6}},
        {src:"img/s4.jpg",s:0.748,ox:260.5,oy:521},
        {src:"img/s5.jpg",s:0.401,ox:273,oy:500},
        {src:"img/s6.jpg",s:0.414,ox:320.5,oy:491.5},
        {src:"img/s7.jpg",s:0.402,ox:501.5,oy:456.5},
        {src:"img/s8.jpg",s:0.543,ox:393,oy:288},
        {src:"img/s9.jpg",s:0.522,ox:375,oy:496.5},
        {src:"img/s10.jpg",s:0.52,ox:319.5,oy:519.5},
        {src:"img/s11.jpg",s:0.419,ox:241,oy:737.5},
        {src:"img/s12.jpg",s:0.455,ox:452,oy:678},
        {src:"img/s13.jpg",s:0.555,ox:364.5,oy:673.5,spirit:{id:"m2",s:1,x:221.5,y:662,num:6,load:true}},
        {src:"img/s14.jpg",s:0.413,ox:319,oy:535.5,spirit:{id:"m2",s:0.555,x:278.5,y:594,num:6}},
        {src:"img/s15.jpg",s:0.45,ox:322,oy:509.5},
        {src:"img/s16.jpg",s:0.46,ox:336,oy:432},
        {src:"img/s17.jpg",s:0.449,ox:377.5,oy:356.5},
        {src:"img/s18.jpg",s:0.613,ox:332,oy:461.5},
        {src:"img/s19.jpg",s:0.503,ox:326,oy:453},
        {src:"img/s20.jpg",s:0.48,ox:315.5,oy:438.5},
        {src:"img/s21.jpg",s:0.659,ox:325,oy:477.5},
        {src:"img/s22.jpg",s:0.452,ox:313.5,oy:446.5},
        {src:"img/s23.jpg",s:0.481,ox:319,oy:370},
        {src:"img/s24.jpg",s:0.619,ox:335,oy:325},
        {src:"img/s25.jpg",s:0.38,ox:301.5,oy:487.5,spirit:{id:"m4",s:1,x:198,y:317.5}},
        {src:"img/s26.jpg",s:0.503,ox:325,oy:439,spirit:{id:"m5",s:1,x:199,y:188}},
        {src:"img/s27.jpg",s:0.70,ox:317,oy:468,spirit:{id:"m5",s:0.503,x:232.5,y:235.5}},
        {src:"img/s28.jpg",s:0.412,ox:321.5,oy:415.5,spirit:{id:"m5",s:0.352,x:285.5,y:298}},
        {src:"img/s29.jpg",s:0.525,ox:349,oy:489.5},
        {src:"img/s30.jpg",s:0.664,ox:244.5,oy:356},
        {src:"img/s31.jpg",move:"zoomIn",spirit:{id:"m3",s:0.066,x:529,y:316.5,num:6,load:true}},
        {src:"img/s32.jpg",s:0.494,ox:474,oy:397,move:"zoomIn",spirit:{id:"m3",s:0.137,x:431,y:355.5,num:6}},
        {src:"img/s33.jpg",s:0.508,ox:469.5,oy:431.5,move:"zoomIn",spirit:{id:"m3",s:0.274,x:243,y:370,num:6}},
        {src:"img/s34.jpg",s:0.514,ox:322.5,oy:468,move:"zoomIn",spirit:{id:"m3",s:0.531,x:165.5,y:330,num:6}},
        {src:"img/s35.jpg",s:0.531,ox:280,oy:494,move:"zoomIn"}
    ]
};
var _resource;//总资源
_g.load=function(complete){
    //@complete:加载完成执行
    var ldNum = $('#ldNum');
    var manifest=[
        {id:"bg",src:"img/bg.jpg"},
        {id:"touch",src:"img/touch.png"},
        {id:"touch_e",src:"img/touch_e.png"},
        {id:"restart",src:"img/restart.png"},
        {id:"btn_sail",src:"img/btn_sail.png"},
        {id:"btn_e1",src:"img/btn_e1.png"},
        {id:"share_e1",src:"img/share_e1.png"},
        {id:"share_e2",src:"img/share_e2.png"},
        {id:"share_e3",src:"img/share_e3.png"},
        {id:"spirit_m4",src:"img/spirit/m4.png"},
        {id:"spirit_m5_1",src:"img/spirit/m5_1.png"},
        {id:"spirit_m5_2",src:"img/spirit/m5_2.png"},
    ];
    //加载scale图片
    for(var i=0;i<_g.scale.length;i++){
        manifest.push(_g.scale[i].src);
        var spirit=_g.scale[i].spirit;
        if(spirit){
            if(spirit.load){
                for(var k=0;k<spirit.num;k++){
                    manifest.push("img/spirit/"+spirit.id+"/i"+k+".jpg");
                };
            }
        };
    };
    //加载DOM文件
    var DOMImg = $('img[_src]');
    for (var i = 0; i < DOMImg.length; i++) {
        manifest.push(DOMImg.eq(i).attr('_src'));           
    }
    _resource = new createjs.LoadQueue(false);
    _resource.on("complete", handleComplete, this);
    _resource.on("progress", handleProgress, this);
    _resource.loadManifest(manifest);
    _resource.setMaxConnections(10);
    _resource.load();
    function handleComplete(){
        var DOMImg = $('img[_src]');
        for (var i = 0; i < DOMImg.length; i++) {
            DOMImg[i].src=DOMImg.eq(i).attr('_src');
        }
        _xx.mp3=_xx.bgMp3();
        complete();
        setTimeout(function(){
            $('#page_loading').moveOut({classOut:'fadeOut'});
        },400);
    }
    function handleProgress(e){
        var progress=Math.round(e.progress* 100);
        ldNum.html(progress);
    }
}
_xx.delayImg = function () {
    var aImg = $('img[_src0]');
    var _length = aImg.length;
    for (var i = 0; i < _length; i++) {
        aImg[i].src = aImg.eq(i).attr('_src0');
    }
}
_g.game=function(){
    var canvas=$('#xCanvas')[0];
    //计算画布尺寸
    var W=640,H=1040,SH;
    (function(){
        var lw=$(window).width(),
            lh=$(window).height();
        if(lw>W) lw=W;
        if(lh>H) SH=H;
        SH=W/lw*lh;
        if(SH>H) SH=H;
    })();
    canvas.width=W;
    canvas.height=H;
    var stage=new createjs.Stage(canvas);
    createjs.Touch.enable(stage);
    //###创建元素###
    var $touch=$('#canvasTouch');
    //结束页面
    function createBtn(img){
        var box=new createjs.Container();
        var oimg=new createjs.Bitmap(img);
        box.set({regX:img.width/2,regY:img.height/2,scaleX:0.5,scaleY:0.5,alpha:0});
        var hitArea=new createjs.Shape();
        hitArea.graphics.f('#000').dr(0,0,img.width,img.height);
        box.hitArea=hitArea;
        function addE(delay){
            var o=new createjs.Bitmap(_resource.getResult('btn_e1'));
            o.set({regX:o.image.width/2,regY:o.image.height/2,x:o.image.width/2,y:o.image.height/2});
            setTimeout(function(){
                createjs.Tween.get(o,{loop:true})
                    .to({alpha:0,scaleX:1.2,scaleY:1.5}, 1000);
            },delay);
            return o;
        }
        var o1=addE(0),
            o2=addE(500);

        box.addChild(o1,o2,oimg);
        createjs.Tween.get(box)
                .to({alpha:1,scaleX:1,scaleY:1}, 1500,createjs.Ease.elasticOut);
        return box;
    }
    function pageEnd(){
        var pbox=new createjs.Container(),
            o=new createjs.Bitmap(_resource.getResult(_g.scale[0].src));
        o.alpha=0;
        var bg=new createjs.Shape();
        bg.graphics.f('#fff').dr(0,0,W,H);
        bg.alpha=0;
        createjs.Tween.get(bg)
                .to({alpha:0}, 2500,createjs.Ease.quadIn);
        createjs.Tween.get(o)
                .to({alpha:1}, 3000,createjs.Ease.quadIn)
                .call(function(){
                    addBtn();
                });
        pbox.addChild(bg,o);
        function addBtn(){
            var btn_restart=createBtn(_resource.getResult('restart')),
                btn_sail=createBtn(_resource.getResult('btn_sail'));
            btn_restart.set({x:180,y:SH-100});
            btn_sail.set({x:480,y:SH-100});
            pbox.addChild(btn_restart,btn_sail);

            //重温十年
            btn_restart.on('click',function(){
                init();
                dataSDK.btnClick('btn_restart','重温十年');
            });
            //支教再启航
            btn_sail.on('click',function(){
                _xx.pageTo('#sail');
                dataSDK.btnClick('btn_sail','支教再启航');
            });
        }
        stage.addChild(pbox);
    }
    //分享页面
    $('#btn_share').on(xxEvents.start,function(e){
        pageShare();
        _xx.pageTo('#stage');
        dataSDK.btnClick('btn_share','爱共享');
        e.preventDefault();
    });
    function pageShare(complete){
        var bg=new createjs.Bitmap(_resource.getResult('bg')),
            pbox=new createjs.Container();
        pbox.snapToPixel=false;
        pbox.addChild(bg);
        var o1=new createjs.Bitmap(_resource.getResult('share_e1')),
            o2=new createjs.Bitmap(_resource.getResult('share_e2'));
        o1.set({x:109,y:224});
        o2.set({regX:0,regY:o2.image.height,x:310,y:348,rotation:5});
        
        function addO3(delay){
            var o3=new createjs.Bitmap(_resource.getResult('share_e3'));
            o3.set({regX:o3.image.width/2,regY:o3.image.height/2,x:490,y:245});
            setTimeout(function(){
                createjs.Tween.get(o3,{loop:true})
                    .to({x:640,y:0,alpha:0,rotation:20}, 1600);
                pbox.addChild(o3);
            },delay);
        }
        createjs.Tween.get(o2,{loop:true})
                .to({rotation:-5}, 1000)
                .to({rotation:5}, 1000)
        pbox.addChild(o2,o1);
        addO3(0);
        addO3(800);
        stage.addChild(pbox);
        //关闭分享弹层
        pbox.on('click',function(){
            stage.mouseChildren=false;
            _xx.pageTo('#sail',function(){
                stage.removeChild(pbox);
                stage.mouseChildren=true;
            });
        });
    }
    //画中画页面
    var scaleBox,touchHint;
    function createTh(){
        var box=new createjs.Container();
        var oimg=new createjs.Bitmap(_resource.getResult('touch'));
        box.set({regX:oimg.image.width/2,regY:oimg.image.height/2,scaleX:0.5,scaleY:0.5,alpha:0,x:W/2,y:SH-100});
        function addE(delay){
            var o=new createjs.Bitmap(_resource.getResult('touch_e'));
            o.set({regX:o.image.width/2,regY:o.image.height/2,x:o.image.width/2,y:o.image.height/2});
            setTimeout(function(){
                createjs.Tween.get(o,{loop:true})
                    .to({alpha:0,scaleX:1.4,scaleY:1.4}, 1000);
            },delay);
            return o;
        }
        var o1=addE(0),
            o2=addE(500);
        createjs.Tween.get(box)
                .to({alpha:1,scaleX:1,scaleY:1}, 800,createjs.Ease.backOut);
        box.addChild(o1,o2,oimg);
        stage.addChild(box);
        return box;
    }
    //场景索引,动画1,动画2,是否暂停,速度
    var index,tween1,tween2,isPaused,Speed=3000;
    var spirit={};//储存spirit对象
    var createSpirit={
        m1:function(count){
            var imgs=[];
            for(var i=0;i<count;i++){
                imgs.push(_resource.getResult('img/spirit/m1/i'+i+'.jpg'));
            };
            var data = {
                images: imgs,
                frames: {width:507, height:184,count:count},
                animations: {
                    run:[0,5,"stop"],
                    stop:0
                },
                framerate: 14
            };
            var spriteSheet = new createjs.SpriteSheet(data);
            var o = new createjs.Sprite(spriteSheet,"stop");
            var first=true;
            var num=0;
            o.xplay=function(){
                if(num==2) return;
                num++;
                if(first){
                    setTimeout(function(){
                        o.gotoAndPlay('run');
                    },600);
                    first=false;
                }else{
                    o.gotoAndPlay('run');
                }
            }
            spirit.m1=o;
        },
        m2:function(count){
            var imgs=[];
            for(var i=0;i<count;i++){
                imgs.push(_resource.getResult('img/spirit/m2/i'+i+'.jpg'));
            };
            var data = {
                images: imgs,
                frames: {width:109, height:120,count:count},
                animations: {
                    run:[0,5],
                    stop:0
                },
                framerate: 14
            };
            var spriteSheet = new createjs.SpriteSheet(data);
            var o = new createjs.Sprite(spriteSheet,"stop");
            var n=0;
            o.on('animationend',function(){
                n++;
                if(n==4){
                    n=0;
                    o.gotoAndStop('stop');
                };
            });
            var first=true;
            o.xplay=function(){
            	if(first){
            		o.gotoAndPlay('run');
            		first=false;
            	}
            }
            spirit.m2=o;
        },
        m3:function(count){
            var imgs=[];
            for(var i=0;i<count;i++){
                imgs.push(_resource.getResult('img/spirit/m3/i'+i+'.jpg'));
            };
            var data = {
                images: imgs,
                frames: {width:520, height:306,count:count},
                animations: {
                    run:[0,5,"stop"],
                    stop:0
                },
                framerate: 14
            };
            var spriteSheet = new createjs.SpriteSheet(data);
            var o = new createjs.Sprite(spriteSheet,"run");
            var num=0;
            o.xplay=function(){
                if(num==2) return;
                num++;
                o.gotoAndPlay('run');
            }
            spirit.m3=o;
        },
        m4:function(){
            var o=new createjs.Bitmap(_resource.getResult('spirit_m4'));
            createjs.Tween.get(o,{loop:true})
                    .to({alpha:0}, 300)
                    .to({alpha:1}, 300);
            o.xplay=function(){}
            spirit.m4=o;
        },
        m5:function(){
            var box=new createjs.Container();
            var o1=new createjs.Bitmap(_resource.getResult('spirit_m5_1')),
                o2=new createjs.Bitmap(_resource.getResult('spirit_m5_2'));
            var mask=new createjs.Shape();
            mask.graphics.dr(0,0,o1.image.width,o1.image.height);
            mask.scaleX=0;
            o2.mask=mask;
            box.addChild(o1,o2);
            var first=true;
            box.xplay=function(){
                if(first){
                    createjs.Tween.get(mask)
                        .to({scaleX:1}, Speed*1.25);
                    first=false;
                }
            }
            spirit.m5=box;
        }
    }
    var effect={
        zoomIn:function(data1,data2){
            var b=1/data2.s,
                delay=data1.delay||0;
                t=data1.duration||(1-data2.s)*Speed;
            var o1=new createjs.Bitmap(_resource.getResult(data1.src)),
                o2=new createjs.Bitmap(_resource.getResult(data2.src));
            o2.set({alpha:0,regX:W/2,regY:H/2,x:data2.ox,y:data2.oy,scaleX:data2.s,scaleY:data2.s});

            scaleBox.set({scaleX:1,scaleY:1,x:data2.ox,y:data2.oy,regX:data2.ox,regY:data2.oy});
            scaleBox.addChild(o1,o2);
            tween1=createjs.Tween.get(o2,{paused:isPaused})
                    .wait(t-1000+delay)
                    .to({alpha:1}, 1000);
            tween2=createjs.Tween.get(scaleBox,{paused:isPaused})
                    .wait(delay)
                    .to({scaleX:b,scaleY:b,x:W/2,y:H/2,regX:data2.ox,regY:data2.oy}, t)
                    .call(move);
        },
        zoomOut:function(data1,data2){
            var b=1/data1.s,
                delay=data1.delay||0;
                t=data1.duration||(1-data1.s)*Speed;
            var o1=new createjs.Bitmap(_resource.getResult(data1.src)),
                o2=new createjs.Bitmap(_resource.getResult(data2.src));
            o1.set({regX:W/2,regY:H/2,x:data1.ox,y:data1.oy,scaleX:data1.s,scaleY:data1.s});
            scaleBox.set({scaleX:b,scaleY:b,x:W/2,y:H/2,regX:data1.ox,regY:data1.oy});
            scaleBox.addChild(o2,o1);
            tween1=createjs.Tween.get(o1,{paused:isPaused})
                    .wait(delay)
                    .to({alpha:0}, 1000);
            tween2=createjs.Tween.get(scaleBox,{paused:isPaused})
                    .wait(delay)
                    .to({scaleX:1,scaleY:1,x:data1.ox,y:data1.oy}, t)
                    .call(move);
        }
    }
    function move(){
        index++;
        if(index==_g.scale.length-1){
            //画中画结束
            sm_tween1=null;sm_tween2=null;
            $touch.hide();
            
            createjs.Tween.get(touchHint,{override:true})
                	.to({alpha:0}, 500)
                	.call(function(){
                		stage.removeChild(touchHint);
                	});

            pageEnd();
            return;
        }else{
            scaleBox.removeAllChildren();
        };     
        var data1=_g.scale[index],
            data2=_g.scale[index+1],
            et=data1.move||"zoomOut";
        effect[et](data1,data2);
        
        //添加帧元素帧动画
        var em=data1.spirit;
        if(em){
            //添加spirit动画
            if(!spirit[em.id]){
                createSpirit[em.id](em.num);
            }
            var s;
            if(et=="zoomIn") s=em.s;
            else s=data1.s*em.s;
            spirit[em.id].set({scaleX:s,scaleY:s,x:em.x,y:em.y});
            scaleBox.addChild(spirit[em.id]);
            spirit[em.id].xplay();
        }
    }
    function paused(){
        if(tween2){
            isPaused=true;
            tween1.setPaused(isPaused);
            tween2.setPaused(isPaused);
            createjs.Tween.get(touchHint,{override:true})
                	.to({alpha:1,scaleX:1,scaleY:1}, 400,createjs.Ease.quadOut);
        }
    }
    function play(){
        if(tween2){
            isPaused=false;
            tween1.setPaused(isPaused);
            tween2.setPaused(isPaused);
            createjs.Tween.get(touchHint,{override:true})
                	.to({alpha:0.5,scaleX:0.8,scaleY:0.8}, 400,createjs.Ease.quadOut);
        }

    }
    function init(){
        spirit={};
        createjs.Tween.removeAllTweens();
        stage.removeAllChildren();
        scaleBox=new createjs.Container();
        stage.addChild(scaleBox);
        $touch.show();
        touchHint=createTh();
        index=-1;
        tween1=tween2=null;
        isPaused=true;
        move();
    }
    //播放暂停控制
    $('#canvasTouch').on(xxEvents.start,function(e){
    	play();
        //dataSDK.btnClick('canvasTouch','画中画播放');
    	e.preventDefault();
    });
    $('#canvasTouch').on(xxEvents.end,function(){
        paused();
        //dataSDK.btnClick('canvasTouch','画中画暂停');
    });
    function addTick(){
        //createjs.Ticker.setFPS(20);
        createjs.Ticker.timingMode = createjs.Ticker.RAF;
        createjs.Ticker.addEventListener("tick",tick);
    }
    function removeTick(){
        createjs.Ticker.removeEventListener("tick",tick);
    }
    function tick(e){
        stage.update(e);
    }
    addTick();
    init();
}
_xx.main=function(){
    _g.game();
    _xx.pageTo('#stage');
    _xx.delayImg();//延迟加载图片
}
