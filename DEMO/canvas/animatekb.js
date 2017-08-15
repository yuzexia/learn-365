(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes

lib.webFontTxtInst = {};
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"animatekb_atlas_", frames: [[919,1447,216,107],[919,952,488,298],[1311,1252,162,103],[1092,1360,298,60],[919,1252,171,193],[1409,952,122,130],[1137,1422,118,150],[1092,1252,217,106],[0,0,1920,950],[1409,1084,34,34],[0,2288,1232,466],[0,952,917,1334]]}
];



lib.updateListCache = function (cacheList) {
	for(var i = 0; i < cacheList.length; i++) {
		if(cacheList[i].cacheCanvas)
			cacheList[i].updateCache();
	}
};

lib.addElementsToCache = function (textInst, cacheList) {
	var cur = textInst;
	while(cur != exportRoot) {
		if(cacheList.indexOf(cur) != -1)
			break;
		cur = cur.parent;
	}
	if(cur != exportRoot) {
		var cur2 = textInst;
		var index = cacheList.indexOf(cur);
		while(cur2 != cur) {
			cacheList.splice(index, 0, cur2);
			cur2 = cur2.parent;
			index++;
		}
	}
	else {
		cur = textInst;
		while(cur != exportRoot) {
			cacheList.push(cur);
			cur = cur.parent;
		}
	}
};

lib.gfontAvailable = function(family, totalGoogleCount) {
	lib.properties.webfonts[family] = true;
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];
	for(var f = 0; f < txtInst.length; ++f)
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);

	loadedGoogleCount++;
	if(loadedGoogleCount == totalGoogleCount) {
		lib.updateListCache(gFontsUpdateCacheList);
	}
};

lib.tfontAvailable = function(family, totalTypekitCount) {
	lib.properties.webfonts[family] = true;
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];
	for(var f = 0; f < txtInst.length; ++f)
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);

	loadedTypekitCount++;
	if(loadedTypekitCount == totalTypekitCount) {
		lib.updateListCache(tFontsUpdateCacheList);
	}
};
// symbols:



(lib.android = function() {
	this.spriteSheet = ss["animatekb_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.bottom = function() {
	this.spriteSheet = ss["animatekb_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.brand = function() {
	this.spriteSheet = ss["animatekb_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.cloud = function() {
	this.spriteSheet = ss["animatekb_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.dewclaw = function() {
	this.spriteSheet = ss["animatekb_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.el = function() {
	this.spriteSheet = ss["animatekb_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.farmer = function() {
	this.spriteSheet = ss["animatekb_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.iphone = function() {
	this.spriteSheet = ss["animatekb_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.pcbg = function() {
	this.spriteSheet = ss["animatekb_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.tleftb = function() {
	this.spriteSheet = ss["animatekb_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.title = function() {
	this.spriteSheet = ss["animatekb_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.xiena = function() {
	this.spriteSheet = ss["animatekb_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.trumpet = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_0 = new cjs.Graphics().p("AgQJcQgLgKgPgVQgQgXgIgJQgRgSgjgSIg5gfQgogZgzg+QhPhdg/hZQgug/gSgwQgXg8AGg+QAFgvAUgnQAXgrAlgXIAagPQAQgJAIgIQAOgMALgXQAGgNALgbQAYg5AtgsQAtgtA5gYQgIgtACgeQACgpAWgaQASgWAdgIQAdgIAbAIIATAHQAKAEAIAAQAIABANgDIAUgFQAcgEAiARIA5AiIBJApQAsAYAYAYQASATAQAcQAKARAQAjQAsBdANAoQAOArALA3QAGAgAJBDQARB4gBBCQgECChGAwQgqAcg5gIQg1gIgpgjQgdAkgEAuQgDAZAEAiIAIA7QAIBLggAmQgeAjg9AFIgOAAQg3AAgggeg");
	var mask_graphics_26 = new cjs.Graphics().p("AisKgQgLgKgPgVQgQgXgIgJQgRgSgjgSIg5gfQgogZgzg+QhPhdg/hZQgug/gSgwQgXg8AGg/QAFguAUgnQAXgrAlgXIAagPQAQgJAIgIQAOgMALgXQAGgNALgbQAYg5AtgsQAtgtA5gYQgIgtACgeQACgpAWgaQASgWAdgIQAdgIAbAIIATAHQALAEAIAAQAIABANgDIAUgFQAcgEAiARIA4AiIBJApQAsAYAYAYQASATAQAcQAKARAQAjQAsBdANAoQAOArALA3QAGAgAJBCQARB5gBBCQgECChGAwQgqAcg5gIQg1gIgpgjQgdAkgEAuQgDAZAEAiIAIA7QAIBLggAmQgdAjg9AFIgOAAQg3AAghgegAHqgBQg+gBgcgZQgVgSgKgkIgNhAQgGgdgMgrQgSg5gDghQgCgagGgKQgGgKgNgIIgZgMQgpgUgSgfQgRgdgBg4QAAg0AKgiQAOgtAigZQAPgKAUgHQAMgEAagHQAYgGAOgCQAVgCARAFQAXAGAUAWQAPAPARAcQAcAuAGAeQAFAVgEAUQgEAWgOAPQASAQAwAMQAvANASARQAhAfgFBPQgCAigGAVQgIAegSARQgNALgBAHQAAAHAGALQASAigBAkQgBAogYAYQggAghCAAIgIAAg");
	var mask_graphics_39 = new cjs.Graphics().p("AisKgQgLgKgPgVQgQgXgIgJQgRgSgjgSIg5gfQgogZgzg+QhPhdg/hZQgug/gSgwQgXg8AGg/QAFguAUgnQAXgrAlgXIAagPQAQgJAIgIQAOgMALgXQAGgNALgbQAYg5AtgsQAtgtA5gYQgIgtACgeQACgpAWgaQASgWAdgIQAdgIAbAIIATAHQALAEAIAAQAIABANgDIAUgFQAcgEAiARIA4AiIBJApQAsAYAYAYQASATAQAcQAKARAQAjQAsBdANAoQAOArALA3QAGAgAJBCQARB5gBBCQgECChGAwQgqAcg5gIQg1gIgpgjQgdAkgEAuQgDAZAEAiIAIA7QAIBLggAmQgdAjg9AFIgOAAQg3AAghgegAHqgBQg+gBgcgZQgVgSgKgkIgNhAQgGgdgMgrQgSg5gDghQgCgagGgKQgGgKgNgIIgZgMQgpgUgSgfQgRgdgBg4QAAg0AKgiQAOgtAigZQAPgKAUgHQAMgEAagHQAYgGAOgCQAVgCARAFQAXAGAUAWQAPAPARAcQAcAuAGAeQAFAVgEAUQgEAWgOAPQASAQAwAMQAvANASARQAhAfgFBPQgCAigGAVQgIAegSARQgNALgBAHQAAAHAGALQASAigBAkQgBAogYAYQggAghCAAIgIAAg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:mask_graphics_0,x:-14.8,y:6.1}).wait(26).to({graphics:mask_graphics_26,x:0.8,y:-0.7}).wait(13).to({graphics:mask_graphics_39,x:0.8,y:-0.7}).wait(12));

	// 图层 2
	this.instance = new lib.el();
	this.instance.parent = this;
	this.instance.setTransform(-61,-65);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(51));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-61,-57.3,95.3,122.4);


(lib.补间63 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.title();
	this.instance.parent = this;
	this.instance.setTransform(-616,-233);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-616,-233,1232,466);


(lib.补间62 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.title();
	this.instance.parent = this;
	this.instance.setTransform(-616,-233);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-616,-233,1232,466);


(lib.补间61 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.title();
	this.instance.parent = this;
	this.instance.setTransform(-616,-233);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-616,-233,1232,466);


(lib.补间60 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.title();
	this.instance.parent = this;
	this.instance.setTransform(-616,-233);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-616,-233,1232,466);


(lib.补间55 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.android();
	this.instance.parent = this;
	this.instance.setTransform(-108,-53.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108,-53.5,216,107);


(lib.补间54 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.android();
	this.instance.parent = this;
	this.instance.setTransform(-108,-53.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108,-53.5,216,107);


(lib.补间53 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.iphone();
	this.instance.parent = this;
	this.instance.setTransform(-108.5,-53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.5,-53,217,106);


(lib.补间52 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.iphone();
	this.instance.parent = this;
	this.instance.setTransform(-108.5,-53);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-108.5,-53,217,106);


(lib.补间51 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.bottom();
	this.instance.parent = this;
	this.instance.setTransform(-243.2,-148.5,0.997,0.997);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-243.2,-148.5,486.5,297.1);


(lib.补间50 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.bottom();
	this.instance.parent = this;
	this.instance.setTransform(-211.8,-129.3,0.868,0.868);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-211.8,-129.3,423.7,258.7);


(lib.补间45 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.dewclaw();
	this.instance.parent = this;
	this.instance.setTransform(-85.5,-96.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.5,-96.5,171,193);


(lib.补间44 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.dewclaw();
	this.instance.parent = this;
	this.instance.setTransform(-85.5,-96.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-85.5,-96.5,171,193);


(lib.补间43 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.xiena();
	this.instance.parent = this;
	this.instance.setTransform(-405.9,-590.5,0.885,0.885);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-405.9,-590.5,811.9,1181.2);


(lib.补间31 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.tleftb();
	this.instance.parent = this;
	this.instance.setTransform(-17,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-17,34,34);


(lib.补间24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.cloud();
	this.instance.parent = this;
	this.instance.setTransform(-97,-20);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-97,-20,298,60);


(lib.补间23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.farmer();
	this.instance.parent = this;
	this.instance.setTransform(-59,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59,-75,118,150);


(lib.补间22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.farmer();
	this.instance.parent = this;
	this.instance.setTransform(-59,-75);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-59,-75,118,150);


(lib.补间12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.brand();
	this.instance.parent = this;
	this.instance.setTransform(-73.5,-46.7,0.907,0.907);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-46.7,147,93.5);


(lib.补间11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.brand();
	this.instance.parent = this;
	this.instance.setTransform(-73.5,-46.7,0.907,0.907);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-73.5,-46.7,147,93.5);


(lib.star = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层 1
	this.instance = new lib.补间31("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(17,17);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:45},19).to({rotation:135},21).to({rotation:225},20).to({rotation:315},25).to({rotation:360},35).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,34,34);


// stage content:
(lib.animatekb = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_37 = function() {
		this.stop()
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(37).call(this.frame_37).wait(64));

	// trumpet
	this.instance = new lib.trumpet();
	this.instance.parent = this;
	this.instance.setTransform(614,266.4,0.81,0.81,0,0,0,-1.1,2.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(29).to({_off:false},0).wait(1).to({regX:0,regY:0,x:614.9,y:264.4},0).wait(71));

	// star3
	this.instance_1 = new lib.star();
	this.instance_1.parent = this;
	this.instance_1.setTransform(1690.9,633.6,1,1,0,0,0,17,17);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(29).to({_off:false},0).wait(72));

	// star2
	this.instance_2 = new lib.star();
	this.instance_2.parent = this;
	this.instance_2.setTransform(1687.6,444.1,0.999,0.999,-29.9,0,0,17,16.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(29).to({_off:false},0).wait(1).to({regY:17,scaleX:1,scaleY:1,rotation:-30,x:1687.7,y:444.2},0).wait(71));

	// star1
	this.instance_3 = new lib.star();
	this.instance_3.parent = this;
	this.instance_3.setTransform(526.1,575.9,0.998,0.998,44.9,0,0,16.3,16.8);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(29).to({_off:false},0).wait(1).to({regX:17,regY:17,scaleX:1,scaleY:1,rotation:45,x:526.4,y:576.4},0).wait(71));

	// star
	this.instance_4 = new lib.star();
	this.instance_4.parent = this;
	this.instance_4.setTransform(422.2,749,1,1,0,0,0,17,17);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(29).to({_off:false},0).wait(72));

	// ios
	this.instance_5 = new lib.补间52("synched",0);
	this.instance_5.parent = this;
	this.instance_5.setTransform(-494.8,930.8);
	this.instance_5._off = true;

	this.instance_6 = new lib.补间53("synched",0);
	this.instance_6.parent = this;
	this.instance_6.setTransform(974.8,703);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5}]},6).to({state:[{t:this.instance_6}]},13).wait(82));
	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(6).to({_off:false},0).to({_off:true,x:974.8,y:703},13).wait(82));

	// android
	this.instance_7 = new lib.补间54("synched",0);
	this.instance_7.parent = this;
	this.instance_7.setTransform(-495.3,1026.5);
	this.instance_7._off = true;

	this.instance_8 = new lib.补间55("synched",0);
	this.instance_8.parent = this;
	this.instance_8.setTransform(974.3,798.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_7}]},6).to({state:[{t:this.instance_8}]},13).wait(82));
	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(6).to({_off:false},0).to({_off:true,x:974.3,y:798.7},13).wait(82));

	// zhua
	this.instance_9 = new lib.补间44("synched",0);
	this.instance_9.parent = this;
	this.instance_9.setTransform(703.4,1109.9);
	this.instance_9._off = true;

	this.instance_10 = new lib.补间45("synched",0);
	this.instance_10.parent = this;
	this.instance_10.setTransform(697.1,1051.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_9}]},30).to({state:[{t:this.instance_10}]},7).wait(64));
	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(30).to({_off:false},0).to({_off:true,x:697.1,y:1051.2},7).wait(64));

	// bottom
	this.instance_11 = new lib.补间50("synched",0);
	this.instance_11.parent = this;
	this.instance_11.setTransform(1370.3,1214.4,0.804,0.804);
	this.instance_11._off = true;

	this.instance_12 = new lib.补间51("synched",0);
	this.instance_12.parent = this;
	this.instance_12.setTransform(1373.9,886.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_11}]},30).to({state:[{t:this.instance_12}]},7).wait(64));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(30).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1,x:1373.9,y:886.4},7).wait(64));

	// cloud
	this.instance_13 = new lib.补间24("synched",0);
	this.instance_13.parent = this;
	this.instance_13.setTransform(1297.5,307.3,0.223,0.223);
	this.instance_13._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(10).to({_off:false},0).to({scaleX:1,scaleY:1,x:1352.7,y:292.1},5).wait(86));

	// farmer
	this.instance_14 = new lib.补间22("synched",0);
	this.instance_14.parent = this;
	this.instance_14.setTransform(655.5,249.5);
	this.instance_14._off = true;

	this.instance_15 = new lib.补间23("synched",0);
	this.instance_15.parent = this;
	this.instance_15.setTransform(1564,235.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_14}]},5).to({state:[{t:this.instance_15}]},7).wait(89));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(5).to({_off:false},0).to({_off:true,x:1564,y:235.6},7).wait(89));

	// new-title
	this.instance_16 = new lib.补间60("synched",0);
	this.instance_16.parent = this;
	this.instance_16.setTransform(-979,619);
	this.instance_16._off = true;

	this.instance_17 = new lib.补间61("synched",0);
	this.instance_17.parent = this;
	this.instance_17.setTransform(1107,542);
	this.instance_17._off = true;

	this.instance_18 = new lib.补间62("synched",0);
	this.instance_18.parent = this;
	this.instance_18.setTransform(972,547);
	this.instance_18._off = true;

	this.instance_19 = new lib.补间63("synched",0);
	this.instance_19.parent = this;
	this.instance_19.setTransform(1069,547);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_16}]},4).to({state:[{t:this.instance_17}]},15).to({state:[{t:this.instance_18}]},5).to({state:[{t:this.instance_19}]},5).wait(72));
	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(4).to({_off:false},0).to({_off:true,x:1107,y:542},15).wait(82));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(4).to({_off:false},15).to({_off:true,x:972,y:547},5).wait(77));
	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(19).to({_off:false},5).to({_off:true,x:1069},5).wait(72));

	// brand
	this.instance_20 = new lib.补间11("synched",0);
	this.instance_20.parent = this;
	this.instance_20.setTransform(207.7,-299.1,0.586,0.586);
	this.instance_20._off = true;

	this.instance_21 = new lib.补间12("synched",0);
	this.instance_21.parent = this;
	this.instance_21.setTransform(204.3,344.4);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(8).to({_off:false},0).to({_off:true,scaleX:1,scaleY:1,x:204.3,y:344.4},8).wait(85));
	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(8).to({_off:false},8).to({x:212.1,y:301.8},5).to({x:206.3,y:334.3},5).wait(75));

	// xiena
	this.instance_22 = new lib.补间43("synched",0);
	this.instance_22.parent = this;
	this.instance_22.setTransform(-690.8,590.6,0.342,0.342);
	this.instance_22._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(2).to({_off:false},0).to({scaleX:1.17,scaleY:1.17,x:520,y:693.2},7).wait(92));

	// bg
	this.instance_23 = new lib.pcbg();
	this.instance_23.parent = this;
	this.instance_23.setTransform(0,0,1,1.137);

	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(101));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(960,540,1920,1080);
// library properties:
lib.properties = {
	width: 1920,
	height: 1080,
	fps: 40,
	color: "#F1EA8D",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"assets/data/animatekb_atlas_.png", id:"animatekb_atlas_"}
	],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;
