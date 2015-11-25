jadeTemplate = {};
jadeTemplate['aristotle'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"aristotle\"><div class=\"chrome\"></div><div class=\"movie\"><div class=\"wrapper\"></div></div><div class=\"slide-ux\"></div><div style=\"opacity:0\" class=\"svg-filters\"><svg class=\"defs\"><defs><filter id=\"glow\"><fegaussianblur in=\"SourceGraphic\" stddeviation=\"1.5\"></fegaussianblur><feComponentTransfer><feFuncA type=\"linear\" slope=\"0.8\"> </feFuncA></feComponentTransfer><femerge><femergenode></femergenode><femergenode in=\"SourceGraphic\"></femergenode></femerge></filter><filter id=\"highlight\"><feColorMatrix type=\"matrix\" values=\"0 0 0 0   0                                               1 0 0 0   0                                               1 0 0 0   0                                               0 0 0 0.8 0\"></feColorMatrix><feComponentTransfer><feFuncA type=\"linear\" slope=\"1\"> </feFuncA></feComponentTransfer><fegaussianblur stddeviation=\"4\" result=\"coloredBlur\"></fegaussianblur><femerge><femergenode in=\"SourceGraphic\"></femergenode><feMergeNode in=\"coloredBlur\"></feMergeNode></femerge></filter><filter id=\"black-glow\"><feColorMatrix type=\"matrix\" values=\"0 0 0 0 0                                              0.3 0 0 0 0                                              0.3 0 0 0 0                                              0 0 0 0.8 0\"></feColorMatrix><feGaussianBlur stdDeviation=\"2.5\" result=\"coloredBlurs\"></feGaussianBlur><feMerge><feMergeNode in=\"coloredBlurs\"></feMergeNode><feMergeNode in=\"SourceGraphic\"></feMergeNode></feMerge></filter></defs></svg></div></div>");;return buf.join("");
};

jadeTemplate['chrome-ui/progress'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"progress\"></div>");;return buf.join("");
};

jadeTemplate['chrome-ui/top'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (badge, name, rank, episode) {
buf.push("<div class=\"top\"><div class=\"main\"><div class=\"status-badge\"><img" + (jade.attr("data-src", "" + (badge) + "", true, false)) + " class=\"shadow-icon\"/></div><div class=\"divider\"></div><div class=\"identity\"><h1 class=\"name\">" + (jade.escape((jade_interp = name) == null ? '' : jade_interp)) + "</h1><h2 class=\"rank\">" + (jade.escape((jade_interp = rank) == null ? '' : jade_interp)) + "</h2></div><div class=\"divider\"></div><div" + (jade.cls(['episodes',"" + (episode) + ""], [null,true])) + "><div" + (jade.cls(['badge',"" + (episode == '1' ? 'active' : '') + ""], [null,true])) + "><img data-src=\"ep1-badge\" class=\"shadow-icon\"/></div><div" + (jade.cls(['badge',"" + (episode == '2' ? 'active' : '') + ""], [null,true])) + "><img data-src=\"ep2-badge\" class=\"shadow-icon\"/></div><div" + (jade.cls(['badge',"" + (episode == '3' ? 'active' : '') + ""], [null,true])) + "><img data-src=\"ep3-badge\" class=\"shadow-icon\"/></div><div" + (jade.cls(['badge',"" + (episode == '4' ? 'active' : '') + ""], [null,true])) + "><img data-src=\"ep4-badge\" class=\"shadow-icon\"/></div></div></div><div class=\"learn-mode\"><h2>[ Warcore ]</h2><h1>Learn Mode</h1></div></div>");}.call(this,"badge" in locals_for_with?locals_for_with.badge:typeof badge!=="undefined"?badge:undefined,"name" in locals_for_with?locals_for_with.name:typeof name!=="undefined"?name:undefined,"rank" in locals_for_with?locals_for_with.rank:typeof rank!=="undefined"?rank:undefined,"episode" in locals_for_with?locals_for_with.episode:typeof episode!=="undefined"?episode:undefined));;return buf.join("");
};

jadeTemplate['movie/layer'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (depth) {
buf.push("<div" + (jade.attr("id", "layer-" + (depth) + "", true, false)) + " class=\"layer\"></div>");}.call(this,"depth" in locals_for_with?locals_for_with.depth:typeof depth!=="undefined"?depth:undefined));;return buf.join("");
};

jadeTemplate['movie/onion-layer'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"onion-layer\"></div>");;return buf.join("");
};

jadeTemplate['slide-ux/components/dialogue'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

;return buf.join("");
};

jadeTemplate['slide-ux/components/selection-dialogue'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (intro, items, btnIcon, btnTxt, title, subTitle) {
buf.push("<div class=\"selection-dialogue\"><div class=\"preview\"><p class=\"intro\">" + (jade.escape(null == (jade_interp = intro) ? "" : jade_interp)) + "</p><div class=\"item-info\"><div class=\"mini-icon\">");
// iterate items
;(function(){
  var $$obj = items;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

buf.push("<div" + (jade.attr("id", "icon-" + (item.id) + "", true, false)) + " class=\"icon\"><img" + (jade.attr("data-src", "" + (item.icon) + "", true, false)) + " class=\"shadow-icon\"/></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

buf.push("<div" + (jade.attr("id", "icon-" + (item.id) + "", true, false)) + " class=\"icon\"><img" + (jade.attr("data-src", "" + (item.icon) + "", true, false)) + " class=\"shadow-icon\"/></div>");
    }

  }
}).call(this);

buf.push("</div><div class=\"blurb\"></div><div class=\"callout\"><div class=\"header\"><div class=\"line\"></div><h1>Buffs</h1><div class=\"line\"></div></div><p class=\"details\"></p></div><div class=\"action fist\"><div id=\"action-btn\" class=\"btn\"><img" + (jade.attr("data-src", "" + (btnIcon) + "", true, false)) + " class=\"shadow-icon\"/><div class=\"txt\">" + (jade.escape(null == (jade_interp = btnTxt) ? "" : jade_interp)) + "</div></div></div></div></div><div class=\"dialogue\"><h1>" + (jade.escape(null == (jade_interp = title) ? "" : jade_interp)) + "</h1><p>" + (jade.escape(null == (jade_interp = subTitle) ? "" : jade_interp)) + "</p><div class=\"buttons\">");
// iterate items
;(function(){
  var $$obj = items;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var btn = $$obj[$index];

buf.push("<div" + (jade.attr("id", "" + (btn.id) + "", true, false)) + " class=\"button\">" + (jade.escape(null == (jade_interp = btn.txt) ? "" : jade_interp)) + "</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var btn = $$obj[$index];

buf.push("<div" + (jade.attr("id", "" + (btn.id) + "", true, false)) + " class=\"button\">" + (jade.escape(null == (jade_interp = btn.txt) ? "" : jade_interp)) + "</div>");
    }

  }
}).call(this);

buf.push("</div></div></div>");}.call(this,"intro" in locals_for_with?locals_for_with.intro:typeof intro!=="undefined"?intro:undefined,"items" in locals_for_with?locals_for_with.items:typeof items!=="undefined"?items:undefined,"btnIcon" in locals_for_with?locals_for_with.btnIcon:typeof btnIcon!=="undefined"?btnIcon:undefined,"btnTxt" in locals_for_with?locals_for_with.btnTxt:typeof btnTxt!=="undefined"?btnTxt:undefined,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined,"subTitle" in locals_for_with?locals_for_with.subTitle:typeof subTitle!=="undefined"?subTitle:undefined));;return buf.join("");
};

jadeTemplate['slide-ux/ctanlee/ctanlee'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"ctanlee\"><div class=\"face\"><img data-src=\"ctanlee\" class=\"shadow-icon\"/></div><div class=\"speech-box\"> <div class=\"text\"> <span class=\"content\"> </span><span class=\"next\"></span></div></div></div>");;return buf.join("");
};

var pxSymbolString = pxSymbolString || ''; pxSymbolString+='<symbol  id="New_Symbol" viewBox="-10.3 -10.3 20.6 20.6">	<polygon class="st22" points="9.8,-9.8 -9.8,-9.8 -9.8,9.8 9.8,9.8 	"/></symbol>';
var pxSvgIconString = pxSvgIconString || ''; pxSvgIconString+='<g id="first" class="aristotle-svg-svg ">			<use xlink:href="#New_Symbol"  width="20.6" height="20.6" x="-10.3" y="-10.3" transform="matrix(0.7046 0 0 -0.7046 11.2573 11.2573)" style="overflow:visible;"/></g><g id="ep4-badge" class="aristotle-svg-svg ">	<g  class="white " >		<path id="XMLID_93_" class="st23" d="M15.5,22.3h3.2c3.5,0,3.2-4.2,3.2-4.2H10.8v7.1l7.2,2"/><polyline id="XMLID_92_" class="st23" points="16.2,22.3 25.6,22.3 25.6,13.6 10.7,13.6 10.7,19.4 		"/><line id="XMLID_91_" class="st23" x1="21.8" y1="22.3" x2="21.8" y2="13.6"/><line id="XMLID_90_" class="st23" x1="23.6" y1="27" x2="23.6" y2="22.4"/><line id="XMLID_89_" class="st23" x1="18.2" y1="17.7" x2="18.2" y2="13.6"/><line id="XMLID_88_" class="st23" x1="14.5" y1="17.7" x2="14.5" y2="13.6"/></g>	<g id="XMLID_94_" class="aristotle-svg-svg ">		<path class="st9" d="M18.2,6.4l12,6.3v13.7l-12,6.3l-12-6.3V12.7L18.2,6.4 M18.2,4L4,11.4v16.4l14.2,7.4l14.2-7.4V11.4L18.2,4			L18.2,4z"/></g></g><g id="ep3-badge" class="aristotle-svg-svg ">	<g  class="white " >		<polyline id="XMLID_74_" class="st4" points="8.4,14.5 18.2,9.4 27.9,14.5 27.9,19.4 18.2,24.5 		"/><polyline id="XMLID_73_" class="st4" points="27.9,19.1 27.9,23.9 18.2,29 		"/><line id="XMLID_72_" class="st23" x1="27.9" y1="24.3" x2="27.9" y2="28.8"/><line id="XMLID_71_" class="st4" x1="27.3" y1="14.9" x2="18.2" y2="19.7"/></g>	<g>		<g id="XMLID_69_" class="aristotle-svg-svg ">			<g>				<path class="st9" d="M6.1,15l9.9,5.2v11.5l-9.9-5.2V15 M4,11.4v16.4l14.2,7.4l0,0V18.9L4,11.4L4,11.4L4,11.4z"/></g>		</g>		<path id="XMLID_68_" class="st9" d="M25.8,18.4c-0.1,0.4-0.4,0.7-0.8,0.7s-0.6-0.3-0.5-0.7c0.1-0.4,0.4-0.7,0.8-0.7			C25.7,17.7,25.9,17.9,25.8,18.4z"/><path id="XMLID_67_" class="st9" d="M25.8,22.9c-0.1,0.4-0.4,0.7-0.8,0.7s-0.6-0.3-0.5-0.7c0.1-0.4,0.4-0.7,0.8-0.7			S25.9,22.5,25.8,22.9z"/><path id="XMLID_66_" class="st9" d="M25.8,27.6c-0.1,0.4-0.4,0.7-0.8,0.7s-0.6-0.3-0.5-0.7c0.1-0.4,0.4-0.7,0.8-0.7			C25.7,26.9,25.9,27.2,25.8,27.6z"/><g id="XMLID_59_" class="aristotle-svg-svg ">			<path class="st9" d="M18.2,6.4l12,6.3v13.7l-12,6.3l-12-6.3V12.7L18.2,6.4 M18.2,4L4,11.4v16.4l14.2,7.4l14.2-7.4V11.4L18.2,4				L18.2,4z"/></g>	</g></g><g id="ep2-badge" class="aristotle-svg-svg ">	<g  class="white " >		<line id="XMLID_333_" class="st23" x1="26.6" y1="14.9" x2="19.6" y2="19"/><line id="XMLID_332_" class="st23" x1="18.2" y1="29.3" x2="18.2" y2="21.1"/><line id="XMLID_330_" class="st23" x1="16.7" y1="19" x2="9.7" y2="14.9"/><polyline id="XMLID_329_" class="st23" points="24.7,26.3 18.2,29.7 11.6,26.3 		"/><polyline id="XMLID_328_" class="st23" points="20.7,11 27.2,14.4 27.2,21.9 		"/><polyline id="XMLID_327_" class="st23" points="9,21.9 9,14.4 15.5,11 		"/></g>	<g id="XMLID_335_" class="aristotle-svg-svg ">		<path class="st9" d="M18.2,6.4l12,6.3v13.7l-12,6.3l-12-6.3V12.7L18.2,6.4 M18.2,4L4,11.4v16.4l14.2,7.4l14.2-7.4V11.4L18.2,4			L18.2,4z"/></g></g><g id="ep1-badge" class="aristotle-svg-svg ">	<g  class="white" >		<polyline id="XMLID_108_" class="st23" points="11.1,15.6 15,19.6 11.1,23.6 		"/><polyline id="XMLID_107_" class="st23" points="25.2,23.6 21.2,19.6 25.2,15.6 		"/><polyline id="XMLID_105_" class="st23" points="22.1,12.5 18.2,16.5 14.1,12.5 		"/><polyline id="XMLID_104_" class="st23" points="14.1,26.7 18.2,22.7 22.1,26.7 		"/><line id="XMLID_102_" class="st23" x1="18.2" y1="15.3" x2="18.2" y2="6.1"/><line id="XMLID_101_" class="st23" x1="18.2" y1="33" x2="18.2" y2="23.8"/><line id="XMLID_100_" class="st23" x1="22.4" y1="19.6" x2="31.6" y2="19.6"/><line id="XMLID_98_" class="st23" x1="5.4" y1="19.6" x2="14.6" y2="19.6"/></g>	<g id="XMLID_60_" class="aristotle-svg-svg ">		<path class="st9" d="M18.2,6.4l12,6.3v13.7l-12,6.3l-12-6.3V12.7L18.2,6.4 M18.2,4L4,11.4v16.4l14.2,7.4l14.2-7.4V11.4L18.2,4			L18.2,4z"/></g></g><g id="rank-badge-cyber-cadet" class="aristotle-svg-svg ">	<polygon class="st10" points="30.5,4 31.3,5.6 33,5.9 31.8,7.2 32.1,9 30.5,8.1 29.1,9 29.3,7.2 28.1,5.9 29.8,5.6 	"/><polygon class="st10" points="6.5,4 7.3,5.6 9,5.9 7.8,7.2 8,9 6.5,8.1 5,9 5.3,7.2 4,5.9 5.8,5.6 	"/><polygon class="st9" points="15.5,33.2 13.2,32 13,32.2 13.1,32 7.9,29.3 7.9,17 16.1,12.6 16.6,10 5.8,15.7 5.8,30.6 15,35.4 	"/><polygon class="st9" points="20.5,10 20.9,12.6 29.1,17 29.1,29.3 22.1,33 21.3,35.9 31.3,30.6 31.3,15.7 	"/><g>		<polygon class="st10" points="19.2,33.2 16.4,35.3 18.5,25.9 15,28.8 17.1,16 20.6,16 19.2,21.7 22.1,19.6 19.6,29.6 22.2,27.6 			17.7,43.1 		"/><rect x="13.6" y="15.3" class="st10" width="9.9" height="1.4"/><polygon class="st10" points="18.5,6.8 17.1,15.3 19.9,15.3 		"/><g id="XMLID_45_" class="aristotle-svg-svg ">			<g id="XMLID_157_" class="aristotle-svg-svg ">				<g id="XMLID_185_" class="aristotle-svg-svg ">					<g id="XMLID_229_" class="aristotle-svg-svg ">						<polygon class="st10" points="18.5,5.4 17.1,6.3 17.1,8.1 18.5,9 19.9,8.1 19.9,6.3 						"/></g>				</g>			</g>		</g>	</g></g><g id="rank-badge-technical-cadet" class="aristotle-svg-svg ">	<polygon class="st9" points="20.7,11.1 21.1,13.2 27.7,13.2 27.7,28.9 21.1,33.6 20.7,36.4 29.8,30.1 29.8,11.1 	"/><polygon class="st9" points="16,33.7 9.5,29.2 9.4,13.2 16,13.2 16.4,11.1 7.2,11.1 7.3,30.3 16.4,36.5 	"/><g>		<g>			<g>				<polygon class="st10" points="18.5,16 15.7,18.9 18.5,42.9 21.3,18.9 				"/></g>		</g>		<rect x="13.6" y="15.3" class="st10" width="9.9" height="1.4"/><polygon class="st10" points="18.5,6.8 17.1,15.3 19.9,15.3 		"/><g id="XMLID_166_" class="aristotle-svg-svg ">			<g id="XMLID_168_" class="aristotle-svg-svg ">				<g id="XMLID_169_" class="aristotle-svg-svg ">					<g id="XMLID_170_" class="aristotle-svg-svg ">						<polygon class="st10" points="18.5,5.4 17.1,6.3 17.1,8.1 18.5,9 19.9,8.1 19.9,6.3 						"/></g>				</g>			</g>		</g>	</g>	<polygon class="st10" points="30.6,4 31.3,5.6 33,5.9 31.8,7.2 32.1,9 30.6,8.1 29.1,9 29.3,7.2 28.1,5.9 29.8,5.6 	"/><polygon class="st10" points="6.5,4 7.3,5.6 9,5.9 7.8,7.2 8,9 6.5,8.1 5,9 5.3,7.2 4,5.9 5.8,5.6 	"/></g><g id="rank-badge-cadet-first-class" class="aristotle-svg-svg ">	<g>		<path class="st9" d="M27.7,13.2v15.7l-9.2,6.4l-9.1-6.2l-0.1-16H27.7 M29.8,11.1H7.2l0.1,19.3L18.5,38l11.3-7.9V11.1L29.8,11.1z"			/></g>	<line class="st19" x1="7.8" y1="21" x2="29.3" y2="21"/><polygon class="st10" points="30.5,4 31.3,5.6 33,5.9 31.8,7.2 32.1,9 30.5,8.1 29.1,9 29.3,7.2 28.1,5.9 29.8,5.6 	"/><polygon class="st10" points="6.5,4 7.3,5.6 9,5.9 7.8,7.2 8,9 6.5,8.1 5,9 5.3,7.2 4,5.9 5.8,5.6 	"/></g><g id="rank-badge-cadet" class="aristotle-svg-svg ">	<g>		<path class="st9" d="M24.5,6.1v15.7l-9.2,6.4l-9.1-6.2l-0.1-16H24.5 M26.7,4H4l0.1,19.3l11.3,7.6L26.7,23V4L26.7,4z"/></g>	<line class="st19" x1="4.6" y1="13.9" x2="26.1" y2="13.9"/></g><g id="rank-badge-recruit" class="aristotle-svg-svg ">	<g>		<path class="st9" d="M24.5,6.1v15.7l-9.2,6.4l-9.1-6.2l-0.1-16H24.5 M26.7,4H4l0.1,19.3l11.3,7.6L26.7,23V4L26.7,4z"/></g></g><g id="chapter-progress-chapter" class="aristotle-svg-svg ">	<g id="XMLID_150_" class="aristotle-svg-svg ">		<path class="st16" d="M9.7,6.4l3.5,1.9v4.1l-3.5,1.9l-3.5-1.9V8.3L9.7,6.4 M9.7,4L4,7v6.7l5.7,3l5.7-3V7L9.7,4L9.7,4z"/></g></g><g id="chapter-progress-slide" class="aristotle-svg-svg ">	<rect x="4" y="4" class="st16" width="6.4" height="6.4"/></g><g id="chapter-progress-test" class="aristotle-svg-svg ">	<polygon class="st6" points="17.9,21.1 13.8,23.3 5.8,19.2 5.8,10.2 8.4,8.8 7,7.5 4,9.1 4,20.2 13.8,25.2 19.6,22.2 	"/><polygon class="st6" points="13.8,4 9.2,6.3 11,7.5 13.8,6.1 21.7,10.2 21.7,19.2 20.4,19.8 21.8,21.1 23.5,20.2 23.5,9.1 	"/><g>		<polygon class="st5" points="6.7,5.8 15.8,11.5 13,11.4 20.6,17.9 17.3,18 22.2,22.8 12.4,16.5 16.1,16.5 8,10.2 10.9,10.1 		"/></g></g><g id="chapter-progress-duties" class="aristotle-svg-svg ">	<circle class="st16" cx="7.2" cy="7.2" r="3.2"/></g><g id="list-progress-base" class="aristotle-svg-svg ">	<g id="hex-outer_1_" class="aristotle-svg-svg ">		<g id="XMLID_1080_" class="aristotle-svg-svg ">			<path class="st5" d="M18.2,7.2l11.3,5.9V26L18.2,32L6.8,26V13.1L18.2,7.2 M18.2,4L4,11.4v16.4l14.2,7.4l14.2-7.4V11.4L18.2,4				L18.2,4z"/></g>	</g>	<g id="hex-inner_1_" class="aristotle-svg-svg ">		<g id="XMLID_2384_" class="aristotle-svg-svg ">			<polygon class="st9" points="18.2,29.9 9.1,25 9.1,14.1 18.2,9.2 27.2,14.1 27.2,24.9 			"/></g>	</g></g><g id="list-progress-complete" class="aristotle-svg-svg ">	<g id="hex-inner" class="aristotle-svg-svg ">		<g>			<polygon class="st20" points="21.8,13.8 25.7,16.2 21.2,16.2 20.6,16.2 27.2,21.9 27.2,14.1 18.2,9.2 16.2,10.2 			"/></g>		<g>			<polygon class="st20" points="15.5,23.5 11.9,21.1 16.2,21.1 17.9,21 9.1,14.3 9.1,25 18.2,29.9 22.2,27.7 			"/></g>	</g>	<g id="hex-outer" class="aristotle-svg-svg ">		<polygon class="st1" points="24,28.9 18.2,32 6.8,26 6.8,13.1 10.4,11.2 8.4,9.1 4,11.4 4,27.7 18.2,35.2 26.8,30.6 		"/><polygon class="st1" points="18.2,4 11.6,7.4 14.4,9.2 18.2,7.2 29.5,13.1 29.5,26 27.7,26.9 29.9,29 32.3,27.7 32.3,11.4 		"/></g>	<g id="lightning_1_" class="aristotle-svg-svg ">		<g id="lightning" class="aristotle-svg-svg ">			<polygon class="st9" points="7.8,6.5 21.2,14.9 17.1,14.9 28.3,24.5 23.4,24.5 30.5,31.5 16.2,22.3 21.6,22.3 9.7,13.1 14,12.9 							"/></g>	</g></g><g id="ctanlee" class="aristotle-svg-svg ">	<circle class="st10" cx="21" cy="21" r="6.4"/><path class="st2" d="M25.5,37.4C32.7,35.4,38,28.8,38,21"/><path class="st2" d="M4,21c0,7.8,5.3,14.4,12.5,16.4"/><path class="st2" d="M32.8,8.8C29.7,5.8,25.6,4,21,4c-4.7,0-8.9,1.9-12,4.9"/></g><g id="action-btn-fist" class="aristotle-svg-svg ">	<polygon class="st10" points="35.7,87 4,70.4 4,33.8 35.7,17.2 67.4,33.8 67.4,70.4 	"/><polygon class="st5" points="35.7,84.5 6.2,69.1 6.2,35.1 35.7,19.7 65.2,35.1 65.2,69.1 	"/><path class="st15" d="M42.3,12.8c0,0,7.4,2,10.1,3.4c-3.4,6.5-11.5,2.4-11.5,2.4s-2.3,2.8-3,3.6c11.1,5.2,26.2,0.7,26.2,0.7		l-0.9,5.9l-5.6,13.5l-9.7,5L30.2,82.5L9.5,71.7l25.8-32.4l-2.7-19.1L42.3,12.8z"/><path class="st17" d="M42.3,12.8c0,0,7.4,2,10.1,3.4c-3.4,6.5-11.5,2.4-11.5,2.4s-2.3,2.8-3,3.6c11.1,5.2,26.2,0.7,26.2,0.7		l-0.9,5.9l-5.6,13.5l-9.7,5L30.2,82.5L9.5,71.7l25.8-32.4l-2.7-19.1L42.3,12.8z"/><path class="st15" d="M48,5.5l-2.1-1.1c-1.8-0.9-3.9-0.2-4.8,1.5l-7,13.4l8.5,4.4l7-13.4C50.4,8.6,49.8,6.4,48,5.5"/><path class="st17" d="M48,5.5l-2.1-1.1c-1.8-0.9-3.9-0.2-4.8,1.5l-7,13.4l8.5,4.4l7-13.4C50.4,8.6,49.8,6.4,48,5.5z"/><path class="st15" d="M54.5,7l2.6,1.7c1.3,0.8,1.7,2.5,0.8,3.8l-7.3,11.2c-3-0.9-4.4-2.1-6.3-4.3L50.7,8C51.4,6.6,53.2,6.2,54.5,7"		/><path class="st17" d="M54.5,7l2.6,1.7c1.3,0.8,1.7,2.5,0.8,3.8l-7.3,11.2c-3-0.9-4.4-2.1-6.3-4.3L50.7,8C51.4,6.6,53.2,6.2,54.5,7z		"/><path class="st15" d="M62.5,15l-1.9-1.3c-1.3-0.9-3-0.5-3.8,0.7l-6.1,9.2c1.3,2,3.1,3.6,6,4l6.4-8.9C64,17.6,63.7,15.9,62.5,15"/><path class="st17" d="M62.5,15l-1.9-1.3c-1.3-0.9-3-0.5-3.8,0.7l-6.1,9.2c1.3,2,3.1,3.6,6,4l6.4-8.9C64,17.6,63.7,15.9,62.5,15z"/><path class="st15" d="M67.1,24.2l-5.3,6.9c-2.3-0.7-3.9-1.9-5.1-3.4l5.3-7.3c0.9-1.3,2.8-1.5,4-0.5l0.7,0.6		C67.8,21.5,68,23.1,67.1,24.2"/><path class="st17" d="M67.1,24.2l-5.3,6.9c-2.3-0.7-3.9-1.9-5.1-3.4l5.3-7.3c0.9-1.3,2.8-1.5,4-0.5l0.7,0.6		C67.8,21.5,68,23.1,67.1,24.2z"/><path class="st15" d="M58,34.1c0.9-0.6,3.8-3,3.8-3c-2.1-0.4-3.8-1.6-5.1-3.4l-2.8,2.7c-1.1,1-0.9,2.7,0.3,3.5l0.6,0.4		C55.8,35,57.2,34.8,58,34.1"/><path class="st25" d="M58,34.1c0.9-0.6,3.8-3,3.8-3c-2.1-0.4-3.8-1.6-5.1-3.4l-2.8,2.7c-1.1,1-0.9,2.7,0.3,3.5l0.6,0.4		C55.8,35,57.2,34.8,58,34.1z"/><path class="st15" d="M50.2,31.1L49,30.2c-0.8-0.6-1-1.7-0.5-2.6l2.2-3.9c1.4,2.5,3.4,3.8,6,4l-3.4,3.2		C52.5,31.7,51.2,31.8,50.2,31.1"/><path class="st25" d="M50.2,31.1L49,30.2c-0.8-0.6-1-1.7-0.5-2.6l2.2-3.9c1.4,2.5,3.4,3.8,6,4l-3.4,3.2		C52.5,31.7,51.2,31.8,50.2,31.1z"/><path class="st15" d="M41.6,24.9l6,4.3l3.1-5.5c-3-0.7-4.5-1.8-6.3-4.3L41.6,24.9z"/><path class="st17" d="M41.6,24.9l6,4.3l3.1-5.5c-3-0.7-4.5-1.8-6.3-4.3L41.6,24.9z"/><path class="st15" d="M10,71.6l20.9-33.4l-2.2-19L39.4,9c0,0,10.1,5.3,12.8,6.7C48.8,22.2,42.1,18,42.1,18s-1.3,2.9-1.9,3.7		c9,4.7,10.8,9,3.5,16.4"/><path class="st24" d="M10,71.6l20.9-33.4l-2.2-19L39.4,9c0,0,10.1,5.3,12.8,6.7C48.8,22.2,42.1,18,42.1,18s-1.3,2.9-1.9,3.7		c9,4.7,10.8,9,3.5,16.4"/><path class="st10" d="M25.9,73.7c0.9-8.3,2.8-16.5,5.6-24.6c0.2,1.8,0.4,3.6,0.7,5.3c1.9-5.8,4.4-11.4,7.3-16.9		c-0.3,2.1-0.4,4.1-0.6,6.1c2.3-3.5,4.7-6.8,7.4-10c1.3-1.6,1.7-1.2,0.6,0.5c-3.8,6.1-6.9,12.5-9.3,19c-0.1-1.8-0.2-3.6-0.2-5.4		c-2.2,5.2-4,10.5-5.3,15.9c-0.4-1.9-0.8-3.8-1.2-5.8C28.9,63.1,27.2,68.4,25.9,73.7"/></g><g id="mini-preview-test" class="aristotle-svg-svg ">	<rect x="7" y="7" class="st10" width="47.1" height="99.6"/><path class="st14" d="M47.8,13.3v87.1H13.3V13.3H47.8 M54.1,7H7v99.6h47.1V7L54.1,7z"/><rect x="11.4" y="82.3" class="st16" width="38.2" height="17.5"/><path class="st14" d="M47.8,84.8v12.4H13.3V84.8H47.8 M50.9,81.7H10.1v18.7h40.8V81.7L50.9,81.7z"/><ellipse class="st0" cx="30.5" cy="64.6" rx="7.8" ry="7.8"/><path class="st14" d="M30.5,56.8c4.3,0,7.8,3.5,7.8,7.8c0,4.3-3.5,7.8-7.8,7.8s-7.8-3.5-7.8-7.8C22.7,60.3,26.2,56.8,30.5,56.8		 M30.5,50.6c-7.8,0-14.1,6.3-14.1,14c0,7.7,6.3,14,14.1,14s14.1-6.3,14.1-14C44.6,56.9,38.3,50.6,30.5,50.6L30.5,50.6z"/><path class="st8" d="M25.9,66.2c-0.9,0-1.6-0.7-1.6-1.6c0-3.4,2.8-6.1,6.2-6.1c0.9,0,1.6,0.7,1.6,1.6c0,0.9-0.7,1.6-1.6,1.6		c-1.7,0-3.1,1.4-3.1,3C27.5,65.5,26.8,66.2,25.9,66.2z"/><g>		<path class="st5" d="M54.1,7v99.6H7V7H54.1 M57.1,4h-3H7H4v3v99.6v3h3h47.1h3v-3V7V4L57.1,4z"/></g></g><g id="mini-generation" class="aristotle-svg-svg ">	<rect x="4" y="4" class="st11" width="179" height="132.8"/><rect x="41.6" y="53" class="st16" width="87.7" height="11.5"/><path class="st5" d="M127.9,63H43.1v-8.5h84.7V63z M130.9,51.5h-3H43.1h-3v3V63v3h3h84.7h3v-3v-8.5V51.5z"/><rect x="36" y="59.8" class="st16" width="99" height="66.5"/><path class="st5" d="M133.5,124.8h-96V61.3h96V124.8z M136.5,58.3h-3h-96h-3v3v63.5v3h3h96h3v-3V61.3V58.3z"/><polygon class="st5" points="27.1,127.7 48.9,127.7 46.5,5.9 29.4,5.9 	"/><rect x="44.1" y="55.5" class="st16" width="82.7" height="6.5"/><path class="st14" d="M125.9,61H45.1v-4.5h80.7V61z M127.9,54.5H43.1V63h84.7V54.5z"/><rect x="38.5" y="62.3" class="st16" width="94" height="61.5"/><path class="st14" d="M131.5,122.8h-92V63.3h92V122.8z M133.5,61.3h-96v63.5h96V61.3z"/><rect x="128.6" y="64.1" class="st10" width="7.1" height="1.4"/><rect x="128.6" y="64.1" class="st14" width="7.1" height="1.4"/><rect x="124.6" y="94.1" class="st10" width="7.1" height="1.3"/><rect x="124.6" y="94.1" class="st13" width="7.1" height="1.3"/><path class="st10" d="M36.1,64.8h5.7H36.1z"/><rect x="35.4" y="64.1" class="st14" width="7.1" height="1.4"/><rect x="39.4" y="94.1" class="st10" width="7.1" height="1.3"/><rect x="39.4" y="94.1" class="st13" width="7.1" height="1.3"/><rect x="37.6" y="62.8" class="st10" width="95.8" height="1.2"/><rect x="36.1" y="61.3" class="st14" width="98.8" height="4.2"/><rect x="83.3" y="71.2" class="st9" width="5.5" height="10.5"/><path class="st14" d="M87.9,80.6h-3.5v-8.5h3.5V80.6z M89.9,70.2h-2h-3.5h-2v2v8.5v2h2h3.5h2v-2v-8.5V70.2z"/><rect x="64.4" y="71.2" class="st9" width="5.5" height="10.5"/><path class="st14" d="M69,80.6h-3.5v-8.5H69V80.6z M71,70.2h-2h-3.5h-2v2v8.5v2h2H69h2v-2v-8.5V70.2z"/><rect x="73.9" y="71.2" class="st9" width="5.5" height="10.5"/><path class="st14" d="M78.4,80.6h-3.5v-8.5h3.5V80.6z M80.4,70.2h-2h-3.5h-2v2v8.5v2h2h3.5h2v-2v-8.5V70.2z"/><rect x="111.7" y="71.2" class="st9" width="5.5" height="10.5"/><path class="st14" d="M116.2,80.6h-3.5v-8.5h3.5V80.6z M118.2,70.2h-2h-3.5h-2v2v8.5v2h2h3.5h2v-2v-8.5V70.2z"/><rect x="121.1" y="71.2" class="st9" width="5.5" height="10.5"/><path class="st14" d="M125.6,80.6h-3.5v-8.5h3.5V80.6z M127.6,70.2h-2h-3.5h-2v2v8.5v2h2h3.5h2v-2v-8.5V70.2z"/><rect x="92.8" y="71.2" class="st9" width="5.5" height="10.5"/><path class="st14" d="M97.3,80.6h-3.5v-8.5h3.5V80.6z M99.3,70.2h-2h-3.5h-2v2v8.5v2h2h3.5h2v-2v-8.5V70.2z"/><rect x="102.2" y="71.2" class="st9" width="5.5" height="10.5"/><path class="st14" d="M106.7,80.6h-3.5v-8.5h3.5V80.6z M108.7,70.2h-2h-3.5h-2v2v8.5v2h2h3.5h2v-2v-8.5V70.2z"/><rect x="45.6" y="71.2" class="st9" width="5.5" height="10.5"/><path class="st14" d="M50.1,80.6h-3.5v-8.5h3.5V80.6z M52.1,70.2h-2h-3.5h-2v2v8.5v2h2h3.5h2v-2v-8.5V70.2z"/><rect x="55" y="71.2" class="st9" width="5.5" height="10.5"/><path class="st14" d="M59.5,80.6H56v-8.5h3.5V80.6z M61.5,70.2h-2H56h-2v2v8.5v2h2h3.5h2v-2v-8.5V70.2z"/><rect x="111.7" y="107.9" class="st9" width="5.5" height="10.5"/><path class="st14" d="M116.2,117.4h-3.5v-8.5h3.5V117.4z M118.2,106.9h-2h-3.5h-2v2v8.5v2h2h3.5h2v-2v-8.5V106.9z"/><rect x="121.1" y="107.9" class="st9" width="5.5" height="10.5"/><path class="st14" d="M125.6,117.4h-3.5v-8.5h3.5V117.4z M127.6,106.9h-2h-3.5h-2v2v8.5v2h2h3.5h2v-2v-8.5V106.9z"/><rect x="45.6" y="107.9" class="st9" width="5.5" height="10.5"/><path class="st14" d="M50.1,117.4h-3.5v-8.5h3.5V117.4z M52.1,106.9h-2h-3.5h-2v2v8.5v2h2h3.5h2v-2v-8.5V106.9z"/><rect x="55" y="107.9" class="st9" width="5.5" height="10.5"/><path class="st14" d="M59.5,117.4H56v-8.5h3.5V117.4z M61.5,106.9h-2H56h-2v2v8.5v2h2h3.5h2v-2v-8.5V106.9z"/><rect x="25.6" y="11.1" class="st5" width="24.7" height="4"/><path class="st5" d="M49.3,14H26.7v-1.9h22.6V14z M51.4,10h-2.1H26.7h-2.1v2.1V14v2.1h2.1h22.6h2.1V14v-1.9V10z"/><g>		<defs>			<path id="SVGID_1_" d="M138.6,97.2v19.1h15.1c0.1-2.2,1.9-3.9,4.1-3.9c2.2,0,4,1.7,4.1,3.9h14.8V97.2H138.6z"/></defs>		<clipPath id="SVGID_2_">			<use xlink:href="#SVGID_1_"  style="overflow:visible;"/></clipPath>		<path class="st12" d="M174.8,124.8h-34.2V99.2h34.2V124.8z M176.8,97.2h-38.2v29.6h38.2V97.2z"/><circle class="st21" cx="157.8" cy="116.5" r="17.6"/><polyline class="st7" points="157.8,116.5 147.2,112.1 148.7,107.4 157.8,116.5 		"/><polyline class="st7" points="157.8,116.5 146.3,116.5 145.9,111.6 157.8,116.5 		"/><polyline class="st7" points="157.8,116.5 168.5,112.1 170.7,116.5 157.8,116.5 		"/><polyline class="st7" points="157.8,116.5 166,108.4 169.7,111.6 157.8,116.5 		"/><polyline class="st7" points="157.8,116.5 162.2,105.9 166.9,107.4 157.8,116.5 		"/><polyline class="st7" points="157.8,116.5 157.8,105 162.8,104.6 157.8,116.5 		"/><polyline class="st7" points="157.8,116.5 153.4,105.9 157.8,103.6 157.8,116.5 		"/><polyline class="st7" points="157.8,116.5 149.7,108.4 152.9,104.6 157.8,116.5 		"/></g>	<path class="st5" d="M177.2,125.8h-38.9V118h38.9V125.8z M179.2,116h-42.9v11.8h42.9V116z"/><path class="st18" d="M153.7,123.7h8.3v-7.2c0-2.3-1.9-4.1-4.2-4.1c-2.3,0-4.1,1.9-4.1,4.1V123.7z"/><path class="st5" d="M162,125.4h-8.7v-1.3h8.7V125.4z M164,122.1h-12.7v5.3H164V122.1z"/><line class="st18" x1="161.9" y1="120.1" x2="153.5" y2="120.1"/></g><g id="mini-substation" class="aristotle-svg-svg ">	<rect x="4" y="4" class="st11" width="179" height="132.8"/><rect x="43.9" y="54.4" class="st16" width="102.6" height="71.9"/><path class="st5" d="M145,124.8H45.4V55.9H145V124.8z M148,52.9h-3H45.4h-3v3v68.9v3h3H145h3v-3V55.9V52.9z"/><rect x="40.1" y="53.4" class="st16" width="110.2" height="8.6"/><path class="st5" d="M148.8,60.5H41.6v-5.6h107.2V60.5z M151.8,51.9h-3H41.6h-3v3v5.6v3h3h107.2h3v-3v-5.6V51.9z"/><polyline class="st3" points="26.9,84.6 55.7,127.1 57.6,127.1 50.5,84.6 26.9,84.6 19.8,127.1 21.8,127.1 50.5,84.6 	"/><polygon class="st3" points="26.9,84.6 50.5,84.6 48.2,69.3 29.2,69.3 	"/><line class="st3" x1="26.9" y1="84.6" x2="48.2" y2="69.3"/><line class="st3" x1="29.2" y1="69.3" x2="50.5" y2="84.6"/><polygon class="st3" points="30.7,55.4 46.7,55.4 48.2,69.3 29.2,69.3 	"/><line class="st3" x1="48.2" y1="69.3" x2="30.7" y2="55.4"/><line class="st3" x1="46.7" y1="55.4" x2="29.2" y2="69.3"/><polygon class="st3" points="30.7,55.4 46.7,55.4 45.7,42.7 31.7,42.7 	"/><line class="st3" x1="30.7" y1="55.4" x2="45.7" y2="42.7"/><line class="st3" x1="31.7" y1="42.7" x2="46.7" y2="55.4"/><polygon class="st3" points="7.5,42.7 69.9,42.7 45.7,30.5 32.2,30.5 	"/><polygon class="st3" points="32.2,30.5 45.7,30.5 45.7,42.7 31.7,42.7 	"/><polyline class="st3" points="45.7,30.5 31.7,42.7 45.7,42.7 32.2,30.5 	"/><polyline class="st3" points="51,33.1 45.7,42.7 31.7,42.7 26.9,33.1 	"/><line class="st3" x1="26.9" y1="42.6" x2="19.3" y2="36.9"/><line class="st3" x1="51" y1="42.6" x2="58.1" y2="36.9"/><line class="st3" x1="58.1" y1="36.9" x2="58.1" y2="42.7"/><line class="st3" x1="26.9" y1="33.1" x2="26.9" y2="42.6"/><line class="st3" x1="51" y1="42.6" x2="51" y2="33.1"/><polygon class="st3" points="32.2,30.5 45.7,30.5 44.2,22.4 33.2,22.4 	"/><polyline class="st3" points="33.2,22.4 45.7,30.5 32.2,30.5 44.2,22.4 	"/><polygon class="st3" points="34.7,12.5 42.7,12.5 44.2,22.4 33.2,22.4 	"/><polygon class="st3" points="34.7,12.6 42.7,12.6 58.7,22.4 18.8,22.4 	"/><polyline class="st3" points="42.7,12.6 33.2,22.4 44.2,22.4 34.7,12.6 	"/><polyline class="st3" points="48.5,16.7 44.2,22.4 33.2,22.4 28.9,16.7 	"/><line class="st3" x1="28.9" y1="16.7" x2="28.9" y2="22.2"/><line class="st3" x1="48.5" y1="22.2" x2="48.5" y2="16.7"/><line class="st3" x1="59.8" y1="26.4" x2="59.8" y2="22.9"/><line class="st3" x1="71.4" y1="46.7" x2="71.4" y2="43.2"/><line class="st3" x1="17.6" y1="26.4" x2="17.6" y2="22.9"/><line class="st3" x1="6" y1="46.7" x2="6" y2="43.2"/><rect x="46.4" y="56.9" class="st16" width="97.6" height="66.9"/><path class="st14" d="M143,122.8H47.4V57.9H143V122.8z M145,55.9H45.4v68.9H145V55.9z"/><rect x="42.6" y="55.9" class="st16" width="105.2" height="3.6"/><path class="st14" d="M146.8,58.5H43.6v-1.6h103.2V58.5z M148.8,54.9H41.6v5.6h107.2V54.9z"/><rect x="40.8" y="58.9" class="st14" width="108.8" height="1.5"/><line class="st13" x1="143.3" y1="116.7" x2="47.1" y2="116.7"/><rect x="75.2" y="66.7" class="st9" width="5.8" height="11.2"/><path class="st14" d="M80,76.9h-3.8v-9.2H80V76.9z M82,65.7h-2h-3.8h-2v2v9.2v2h2H80h2v-2v-9.2V65.7z"/><rect x="85.3" y="66.7" class="st9" width="5.8" height="11.2"/><path class="st14" d="M90.1,76.9h-3.8v-9.2h3.8V76.9z M92.1,65.7h-2h-3.8h-2v2v9.2v2h2h3.8h2v-2v-9.2V65.7z"/><rect x="55" y="66.7" class="st9" width="5.8" height="11.2"/><path class="st14" d="M59.8,76.9H56v-9.2h3.8V76.9z M61.8,65.7h-2H56h-2v2v9.2v2h2h3.8h2v-2v-9.2V65.7z"/><rect x="65.1" y="66.7" class="st9" width="5.8" height="11.2"/><path class="st14" d="M69.9,76.9h-3.8v-9.2h3.8V76.9z M71.9,65.7h-2h-3.8h-2v2v9.2v2h2h3.8h2v-2v-9.2V65.7z"/><rect x="75.2" y="81.3" class="st9" width="5.8" height="11.2"/><path class="st14" d="M80,91.5h-3.8v-9.2H80V91.5z M82,80.3h-2h-3.8h-2v2v9.2v2h2H80h2v-2v-9.2V80.3z"/><rect x="55" y="81.3" class="st9" width="5.8" height="11.2"/><path class="st14" d="M59.8,91.5H56v-9.2h3.8V91.5z M61.8,80.3h-2H56h-2v2v9.2v2h2h3.8h2v-2v-9.2V80.3z"/><rect x="65.1" y="81.3" class="st9" width="5.8" height="11.2"/><path class="st14" d="M69.9,91.5h-3.8v-9.2h3.8V91.5z M71.9,80.3h-2h-3.8h-2v2v9.2v2h2h3.8h2v-2v-9.2V80.3z"/><rect x="161.4" y="107.1" class="st5" width="7" height="8.2"/><rect x="157.9" y="115.7" class="st5" width="14.8" height="1.6"/><path class="st5" d="M171.7,118.2v8.6h0l-10.9-8.6H171.7z M172.7,117.2h-14.8l13.5,10.6h1.4V117.2z"/><path class="st5" d="M169.8,118.2l-10.9,8.6h0v-8.6H169.8z M172.7,117.2h-14.8v10.6h1.4L172.7,117.2z"/><path class="st5" d="M174.7,111.2c0,1.4-1.3,2.5-2,2.5s-1.2-1.1-1.2-2.5c0-1.4,0.5-2.5,1.2-2.5S174.7,109.8,174.7,111.2"/><path class="st5" d="M156.1,111.2c0,1.4,1.3,2.5,2,2.5s1.2-1.1,1.2-2.5c0-1.4-0.5-2.5-1.2-2.5S156.1,109.8,156.1,111.2"/><rect x="157.9" y="106.5" class="st5" width="5.1" height="9.4"/><rect x="157.9" y="100.1" transform="matrix(0.9848 -0.1737 0.1737 0.9848 -15.0911 29.2252)" class="st5" width="3.1" height="1.4"/><polygon class="st5" points="155.6,74.6 154,74.9 157.2,100.5 161.4,99.8 	"/><rect x="158.5" y="105.6" transform="matrix(0.9848 -0.1735 0.1735 0.9848 -16.0415 29.4416)" class="st5" width="3.9" height="1.7"/><path class="st5" d="M161.5,105.5L159,106c-1.2,0.2-2.4-0.6-2.6-1.8l0-0.2c-0.2-1.2,0.6-2.4,1.8-2.6l2.5-0.4		c1.2-0.2,2.4,0.6,2.6,1.8l0,0.2C163.6,104.1,162.8,105.3,161.5,105.5"/><rect x="153.4" y="74.2" transform="matrix(0.9848 -0.1735 0.1735 0.9848 -10.5913 27.9925)" class="st5" width="2.7" height="0.8"/><rect x="152.7" y="74.1" transform="matrix(-0.9848 0.1735 -0.1735 -0.9848 316.7702 122.0484)" class="st5" width="0.8" height="1.6"/><rect x="169.8" y="100.1" transform="matrix(0.9848 0.1737 -0.1737 0.9848 20.1198 -28.2322)" class="st5" width="3.1" height="1.4"/><polygon class="st5" points="176.7,74.9 175.2,74.6 169.3,99.8 173.6,100.5 	"/><rect x="168.4" y="105.6" transform="matrix(0.9848 0.1735 -0.1735 0.9848 21.0562 -27.9357)" class="st5" width="3.9" height="1.7"/><path class="st5" d="M171.8,106l-2.5-0.4c-1.2-0.2-2-1.4-1.8-2.6l0-0.2c0.2-1.2,1.4-2,2.6-1.8l2.5,0.4c1.2,0.2,2,1.4,1.8,2.6l0,0.2		C174.1,105.4,173,106.2,171.8,106"/><rect x="174.6" y="74.2" transform="matrix(-0.9848 -0.1735 0.1735 -0.9848 336.3421 178.5356)" class="st5" width="2.7" height="0.8"/><rect x="177.3" y="74.1" transform="matrix(0.9848 0.1737 -0.1737 0.9848 15.7077 -29.7321)" class="st5" width="0.8" height="1.6"/><rect x="167.7" y="106.5" class="st5" width="5.1" height="9.4"/><path class="st3" d="M152.8,74.1c0.5-3.1-1.5-4.1-6.3-3.1"/><path class="st3" d="M177.8,74.1c-0.1-10.8-23-5.9-31.6-3.7"/></g><g id="mini-control-center" class="aristotle-svg-svg ">	<rect x="4" y="4" class="st11" width="179" height="132.8"/><rect x="30.8" y="56.1" class="st16" width="100" height="70.2"/><path class="st5" d="M129.4,124.8h-97V57.6h97V124.8z M132.4,54.6h-3h-97h-3v3v67.2v3h3h97h3v-3V57.6V54.6z"/><rect x="27.1" y="55.1" class="st16" width="107.5" height="8.5"/><path class="st5" d="M133.1,62.1H28.6v-5.5h104.5V62.1z M136.1,53.6h-3H28.6h-3v3v5.5v3h3h104.5h3v-3v-5.5V53.6z"/><rect x="117.3" y="46.1" transform="matrix(0.6033 0.7975 -0.7975 0.6033 84.8549 -76.9147)" class="st5" width="4.9" height="1.4"/><rect x="117.3" y="46.1" transform="matrix(0.6033 0.7975 -0.7975 0.6033 84.8549 -76.9147)" class="st3" width="4.9" height="1.4"/><rect x="113.4" y="50.8" transform="matrix(-0.9541 0.2994 -0.2994 -0.9541 244.0988 66.3034)" class="st5" width="7.1" height="2"/><rect x="113.4" y="50.8" transform="matrix(-0.9541 0.2994 -0.2994 -0.9541 244.0988 66.3034)" class="st3" width="7.1" height="2"/><path class="st5" d="M120.3,44.6c-0.4,1.3-1.8,2.1-3.1,1.7c-1.3-0.4-2.1-1.8-1.7-3.1c0.4-1.3,1.8-2.1,3.1-1.7		C119.9,41.8,120.7,43.2,120.3,44.6"/><circle class="st3" cx="117.9" cy="43.8" r="2.5"/><path class="st5" d="M123.4,48.5c1,1,1,2.6,0,3.6c-1,1-2.6,1-3.6,0c-1-1-1-2.6,0-3.6C120.8,47.5,122.4,47.5,123.4,48.5"/><circle class="st3" cx="121.6" cy="50.3" r="2.5"/><path class="st5" d="M115.1,53.4c0,1.9-1.6,3.5-3.5,3.5c-1.9,0-3.5-1.6-3.5-3.5s1.6-3.5,3.5-3.5C113.5,49.9,115.1,51.4,115.1,53.4"		/><circle class="st3" cx="111.6" cy="53.4" r="3.5"/><rect x="33.3" y="58.6" class="st16" width="95" height="65.2"/><path class="st14" d="M127.4,122.8h-93V59.6h93V122.8z M129.4,57.6h-97v67.2h97V57.6z"/><rect x="29.6" y="57.6" class="st16" width="102.5" height="3.5"/><path class="st14" d="M131.1,60.1H30.6v-1.5h100.5V60.1z M133.1,56.6H28.6v5.5h104.5V56.6z"/><line class="st16" x1="128.2" y1="117.7" x2="33.5" y2="117.7"/><line class="st13" x1="128.2" y1="117.7" x2="33.5" y2="117.7"/><path class="st5" d="M108.7,20.7c-2.5,2.5,1.3,13.2,10.3,22.1c8.9,8.9,19.7,12.7,22.1,10.3"/><path class="st3" d="M108.7,20.7c-2.5,2.5,1.3,13.2,10.3,22.1c8.9,8.9,19.7,12.7,22.1,10.3"/><ellipse transform="matrix(0.7071 0.7071 -0.7071 0.7071 62.7111 -77.5198)" class="st3" cx="124.9" cy="36.9" rx="22.9" ry="1.8"/><polyline class="st3" points="118.4,33 133.8,28 128.9,43.5 	"/><polyline class="st3" points="108.7,20.7 133.8,28 141.1,53.1 	"/><rect x="132.6" y="26.9" transform="matrix(0.707 0.7072 -0.7072 0.707 58.9584 -86.6175)" class="st5" width="2.8" height="2"/><rect x="132.6" y="26.9" transform="matrix(0.707 0.7072 -0.7072 0.707 58.9584 -86.6175)" class="st3" width="2.8" height="2"/><rect x="80.1" y="68.2" class="st9" width="5.7" height="11"/><path class="st14" d="M84.8,78.1h-3.7v-9h3.7V78.1z M86.8,67.2h-2h-3.7h-2v2v9v2h2h3.7h2v-2v-9V67.2z"/><rect x="60.4" y="68.2" class="st9" width="5.7" height="11"/><path class="st14" d="M65.1,78.1h-3.7v-9h3.7V78.1z M67.1,67.2h-2h-3.7h-2v2v9v2h2h3.7h2v-2v-9V67.2z"/><rect x="70.2" y="68.2" class="st9" width="5.7" height="11"/><path class="st14" d="M75,78.1h-3.7v-9H75V78.1z M77,67.2h-2h-3.7h-2v2v9v2h2H75h2v-2v-9V67.2z"/><rect x="40.7" y="68.2" class="st9" width="5.7" height="11"/><path class="st14" d="M45.5,78.1h-3.7v-9h3.7V78.1z M47.5,67.2h-2h-3.7h-2v2v9v2h2h3.7h2v-2v-9V67.2z"/><rect x="50.6" y="68.2" class="st9" width="5.7" height="11"/><path class="st14" d="M55.3,78.1h-3.7v-9h3.7V78.1z M57.3,67.2h-2h-3.7h-2v2v9v2h2h3.7h2v-2v-9V67.2z"/><rect x="80.1" y="82.3" class="st9" width="5.7" height="11"/><path class="st14" d="M84.8,92.3h-3.7v-9h3.7V92.3z M86.8,81.3h-2h-3.7h-2v2v9v2h2h3.7h2v-2v-9V81.3z"/><rect x="60.4" y="82.3" class="st9" width="5.7" height="11"/><path class="st14" d="M65.1,92.3h-3.7v-9h3.7V92.3z M67.1,81.3h-2h-3.7h-2v2v9v2h2h3.7h2v-2v-9V81.3z"/><rect x="70.2" y="82.3" class="st9" width="5.7" height="11"/><path class="st14" d="M75,92.3h-3.7v-9H75V92.3z M77,81.3h-2h-3.7h-2v2v9v2h2H75h2v-2v-9V81.3z"/><rect x="40.7" y="82.3" class="st9" width="5.7" height="11"/><path class="st14" d="M45.5,92.3h-3.7v-9h3.7V92.3z M47.5,81.3h-2h-3.7h-2v2v9v2h2h3.7h2v-2v-9V81.3z"/><rect x="50.6" y="82.3" class="st9" width="5.7" height="11"/><path class="st14" d="M55.3,92.3h-3.7v-9h3.7V92.3z M57.3,81.3h-2h-3.7h-2v2v9v2h2h3.7h2v-2v-9V81.3z"/><path class="st5" d="M144,114.3l-0.7,0.3c-2.5,1.2-5.6,0.1-6.8-2.5c-1.2-2.5-0.1-5.6,2.5-6.8l0.7-0.3L144,114.3z"/><rect x="142.1" y="104.9" transform="matrix(0.9074 -0.4202 0.4202 0.9074 -31.9816 71.0318)" class="st5" width="6.2" height="6.4"/><polygon class="st5" points="149.1,110.8 169.8,105.4 163.4,91.4 145.9,103.9 	"/><rect x="176.5" y="89.6" transform="matrix(0.9073 -0.4205 0.4205 0.9073 -22.1629 84.0009)" class="st5" width="5.9" height="5.3"/><polygon class="st5" points="183.2,93.5 184.6,92.3 182.7,88.4 181,88.6 	"/><rect x="166.4" y="87.5" transform="matrix(0.9073 -0.4204 0.4204 0.9073 -25.3054 79.972)" class="st5" width="4.8" height="19.8"/><rect x="175.9" y="90.3" transform="matrix(0.9075 -0.42 0.42 0.9075 -22.8997 82.9258)" class="st5" width="1.9" height="6.4"/><polygon class="st5" points="175.3,103.4 177.1,98.2 173.4,90.2 168.3,88.2 	"/><rect x="156.9" y="111.6" transform="matrix(0.5462 0.8377 -0.8377 0.5462 166.7308 -82.9185)" class="st5" width="6" height="1.7"/><rect x="152.2" y="117.1" transform="matrix(-0.9541 0.2994 -0.2994 -0.9541 341.4912 184.3063)" class="st5" width="8.8" height="2.5"/><path class="st5" d="M160.8,109.7c-0.6,1.6-2.4,2.4-4,1.8c-1.6-0.6-2.4-2.4-1.8-4c0.6-1.6,2.4-2.4,4-1.8		C160.6,106.3,161.4,108.1,160.8,109.7"/><path class="st5" d="M164.6,114.2c1.2,1.2,1.2,3.2,0,4.4c-1.2,1.2-3.2,1.2-4.4,0c-1.2-1.2-1.2-3.2,0-4.4		C161.4,113,163.3,113,164.6,114.2"/><path class="st5" d="M154.3,120.2c0,2.4-1.9,4.3-4.3,4.3s-4.3-1.9-4.3-4.3s1.9-4.3,4.3-4.3S154.3,117.8,154.3,120.2"/><rect x="131.5" y="121.8" class="st5" width="39" height="6"/></g>';
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Aristotle, ChromeUI, DevTools, Episode, EpisodeLoader, Movie, SlideUX,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Episode = require("episode/episode");

ChromeUI = require("chrome/chrome-ui");

DevTools = require('misc/dev-tools');

Movie = require('movie/movie');

EpisodeLoader = require('misc/episode-loader');

SlideUX = require('slide-ux/slide-ux');

Aristotle = (function() {
  function Aristotle($el, episodeRoot) {
    var episodeLoader;
    this.episodeRoot = episodeRoot;
    this.onJsonLoaded = bind(this.onJsonLoaded, this);
    window.aristotle = this;
    this.setDevMode(true);
    this.build($el);
    episodeLoader = new EpisodeLoader(this.onJsonLoaded);
  }

  Aristotle.prototype.onJsonLoaded = function(episodeData) {
    var episode;
    return episode = new Episode(episodeData, this.movie, this.slideUX);
  };

  Aristotle.prototype.build = function($el) {
    var $base, shadowIcons;
    $base = $(jadeTemplate['aristotle']({}));
    $el.append($base);
    shadowIcons = new pxicons.ShadowIcons();
    shadowIconsInstance.svgReplaceWithString(pxSvgIconString, $base);
    this.chromeUI = new ChromeUI($(".chrome", $base));
    this.slideUX = new SlideUX($(".slide-ux", $base));
    return this.movie = new Movie($(".movie", $base));
  };

  Aristotle.prototype.setDevMode = function(devMode) {
    return aristotle.devTools = new DevTools(devMode);
  };

  return Aristotle;

})();

window.Aristotle = Aristotle;

},{"chrome/chrome-ui":2,"episode/episode":5,"misc/dev-tools":10,"misc/episode-loader":11,"movie/movie":15,"slide-ux/slide-ux":20}],2:[function(require,module,exports){
var ChromeUI;

module.exports = ChromeUI = (function() {
  function ChromeUI($el) {
    this.build($el);
  }

  ChromeUI.prototype.build = function($el) {
    var $progress, $top, data;
    data = {
      name: "John \"Deadeye\" Nimbus",
      episode: "1"
    };
    this.getRank(data, "cyber-cadet");
    $top = $(jadeTemplate['chrome-ui/top'](data));
    $el.append($top);
    $progress = $(jadeTemplate['chrome-ui/progress']({}));
    $el.append($progress);
    return shadowIconsInstance.svgReplaceWithString(pxSvgIconString, $el);
  };

  ChromeUI.prototype.getRank = function(data, episode) {
    switch (episode) {
      case 'recruit':
        data.rank = "recruit";
        return data.badge = "rank-badge-recruit";
      case 'cadet':
        data.rank = "cadet";
        return data.badge = "rank-badge-cadet";
      case 'cadet-first-class':
        data.rank = "Cadet First Class";
        return data.badge = "rank-badge-cadet-first-class";
      case 'technical-cadet':
        data.rank = "Technical Cadet";
        return data.badge = "rank-badge-technical-cadet";
      case 'cyber-cadet':
        data.rank = "Cyber Cadet";
        return data.badge = "rank-badge-cyber-cadet";
    }
  };

  return ChromeUI;

})();

},{}],3:[function(require,module,exports){
var AudioTrack;

module.exports = AudioTrack = (function() {
  function AudioTrack(src) {
    this.src = src;
    AudioTrack.initSoundSettings();
  }

  AudioTrack.prototype.play = function(onComplete) {
    this.sound = createjs.Sound.play(this.src, AudioTrack.ppc);
    return this.sound.addEventListener("complete", function() {
      return onComplete();
    });
  };

  AudioTrack.prototype.stop = function() {
    return this.sound.stop();
  };

  AudioTrack.prototype.destroy = function() {
    this.sound.removeEventListener("complete");
    return this.sound.destroy();
  };

  AudioTrack.initSoundSettings = function(volume) {
    if (volume == null) {
      volume = 1;
    }
    if (AudioTrack.ppc != null) {
      return;
    }
    return AudioTrack.ppc = new createjs.PlayPropsConfig().set({
      interrupt: createjs.Sound.INTERRUPT_ANY,
      volume: volume,
      pan: 1
    });
  };

  return AudioTrack;

})();

},{}],4:[function(require,module,exports){
var Chapter, Preloader, Slides,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Slides = require('episode/slides');

Preloader = require('misc/asset-preloader');

module.exports = Chapter = (function() {
  function Chapter(chapterData, movie, ux, onChapterCompete) {
    this.chapterData = chapterData;
    this.movie = movie;
    this.ux = ux;
    this.onChapterCompete = onChapterCompete;
    this.onSlidesComplete = bind(this.onSlidesComplete, this);
    this.startSlides = bind(this.startSlides, this);
  }

  Chapter.prototype.start = function() {
    var preloader;
    aristotle.devTools.go(this.chapterData.dev, this.chapterData.slides);
    return preloader = new Preloader(this.chapterData, this.startSlides);
  };

  Chapter.prototype.startSlides = function() {
    this.slides = new Slides(this.chapterData, this.movie, this.ux, this.onSlidesComplete);
    return this.slides.start();
  };

  Chapter.prototype.onSlidesComplete = function() {
    return this.onChapterCompete();
  };

  return Chapter;

})();

},{"episode/slides":7,"misc/asset-preloader":9}],5:[function(require,module,exports){
var Chapter, Episode, Sequence,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Chapter = require('episode/chapter');

Sequence = require('misc/Sequence');

module.exports = Episode = (function() {
  function Episode(trainingData, movie, ux) {
    this.movie = movie;
    this.chapterComplete = bind(this.chapterComplete, this);
    this.nextChapter = bind(this.nextChapter, this);
    aristotle.devTools.go(trainingData.dev, trainingData.chapters);
    this.createChapters(trainingData, ux);
  }

  Episode.prototype.createChapters = function(trainingData, ux) {
    var chapterData, chapters, i, len, ref;
    chapters = [];
    ref = trainingData.chapters;
    for (i = 0, len = ref.length; i < len; i++) {
      chapterData = ref[i];
      chapters.push(new Chapter(chapterData, this.movie, ux, this.chapterComplete));
    }
    this.chapters = new Sequence(chapters);
    return this.playChapter();
  };

  Episode.prototype.nextChapter = function() {
    if (this.chapters.isAtLastItem()) {
      return this.episodeComplete();
    } else {
      this.chapters.next();
      return this.playChapter();
    }
  };

  Episode.prototype.start = function() {
    return this.playChapter();
  };

  Episode.prototype.chapterComplete = function() {
    return this.nextChapter();
  };

  Episode.prototype.playChapter = function() {
    this.movie.reset();
    return this.chapters.getCurrentItem().start(this.chapterComplete);
  };

  Episode.prototype.episodeComplete = function() {
    return console.log("episode complete");
  };

  return Episode;

})();

},{"episode/chapter":4,"misc/Sequence":8}],6:[function(require,module,exports){
var AudioTrack, SVGAnimation, Slide,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

AudioTrack = require("episode/audio-track");

SVGAnimation = require("movie/svg-animation");

module.exports = Slide = (function() {
  function Slide(movie, slideUX, slideData, onSlideComplete) {
    this.movie = movie;
    this.slideUX = slideUX;
    this.slideData = slideData;
    this.onSlideComplete = onSlideComplete;
    this.play = bind(this.play, this);
  }

  Slide.prototype.play = function(onComplete) {
    this.movie.populate(this.slideData.movie);
    this.slideUX.populate(this.slideData.ux);
    this.setDuration();
    this.runCtanlee(this.slideData.ctanlee);
    return this.runActions(this.slideData.action);
  };

  Slide.prototype.runActions = function(action) {
    if (action == null) {
      return;
    }
    return PubSub.publish(action.cmd, action.data);
  };

  Slide.prototype.setDuration = function() {
    if (this.slideData.duration == null) {
      return;
    }
    switch (this.slideData.duration.kind) {
      case "time":
        return setTimeout(this.onSlideComplete, this.slideData.duration.seconds * 1000);
      case "user":
        return console.log("waiting on the user");
      case "ux":
        return PubSub.subscribe('ux.complete', (function(_this) {
          return function() {
            return _this.onSlideComplete();
          };
        })(this));
      case "ctanlee":
        return PubSub.subscribe('ctanlee.complete', (function(_this) {
          return function() {
            return _this.onSlideComplete();
          };
        })(this));
      case "listen":
        return PubSub.subscribe(this.slideData.duration.event, (function(_this) {
          return function() {
            PubSub.unsubscribe(_this.slideData.duration.event);
            return _this.onSlideComplete();
          };
        })(this));
    }
  };

  Slide.prototype.runCtanlee = function(data) {
    if (data != null) {
      return aristotle.ctanlee.activate(data);
    }
  };

  return Slide;

})();

},{"episode/audio-track":3,"movie/svg-animation":16}],7:[function(require,module,exports){
var Sequence, Slide, Slides,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Slide = require('episode/slide');

Sequence = require('misc/sequence');

module.exports = Slides = (function() {
  function Slides(trainingData, movie, ux, onShowComplete) {
    this.onShowComplete = onShowComplete;
    this.slideComplete = bind(this.slideComplete, this);
    this.nextSlide = bind(this.nextSlide, this);
    this.currentSlideIndex = -1;
    this.createSlides(trainingData, movie, ux);
    PubSub.subscribe('slides.next-slide', (function(_this) {
      return function() {
        return _this.nextSlide();
      };
    })(this));
  }

  Slides.prototype.createSlides = function(trainingData, movie, ux) {
    var i, len, ref, slideData, slides;
    slides = [];
    ref = trainingData.slides;
    for (i = 0, len = ref.length; i < len; i++) {
      slideData = ref[i];
      slides.push(new Slide(movie, ux, slideData, this.slideComplete));
    }
    return this.slides = new Sequence(slides);
  };

  Slides.prototype.nextSlide = function() {
    if (this.slides.isAtLastItem()) {
      return this.slideShowComplete();
    } else {
      this.slides.next();
      return this.playSlide();
    }
  };

  Slides.prototype.start = function() {
    return this.playSlide();
  };

  Slides.prototype.slideComplete = function() {
    return this.nextSlide();
  };

  Slides.prototype.playSlide = function() {
    return this.slides.getCurrentItem().play(this.slideComplete);
  };

  Slides.prototype.slideShowComplete = function() {
    return this.onShowComplete();
  };

  return Slides;

})();

},{"episode/slide":6,"misc/sequence":12}],8:[function(require,module,exports){
var Sequence;

module.exports = Sequence = (function() {
  function Sequence(items) {
    this.items = items;
    this.currentItemIndex = 0;
    this.totalItems = this.items.length;
  }

  Sequence.prototype.next = function(loopOnOverShoot) {
    if (loopOnOverShoot == null) {
      loopOnOverShoot = false;
    }
    return this.incramentItemIndex(1, loopOnOverShoot);
  };

  Sequence.prototype.prev = function(loopOnOverShoot) {
    if (loopOnOverShoot == null) {
      loopOnOverShoot = false;
    }
    return this.incramentItemIndex(-1, loopOnOverShoot);
  };

  Sequence.prototype.isAtLastItem = function() {
    if (this.currentItemIndex === this.totalItems - 1) {
      return true;
    } else {
      return false;
    }
  };

  Sequence.prototype.getCurrentItem = function() {
    return this.items[this.currentItemIndex];
  };

  Sequence.prototype.incramentItemIndex = function(incrament, loopOnOvershoot) {
    var newIndex;
    if (loopOnOvershoot == null) {
      loopOnOvershoot = false;
    }
    newIndex = this.currentItemIndex + incrament;
    if (newIndex > this.totalItems - 1) {
      newIndex = loopOnOverShoot ? 0 : this.totalItems - 1;
    } else if (newIndex < 0) {
      newIndex = loopOnOverShoot ? this.totalItems - 1 : 0;
    }
    if (this.currentItemIndex !== newIndex) {
      this.currentItemIndex = newIndex;
      return true;
    } else {
      return false;
    }
  };

  Sequence.prototype.changeItemByIndex = function(newIndex) {
    var incramentDifference, plusOrMinus;
    plusOrMinus = this.newIndex > this.currentItemIndex ? 1 : -1;
    incramentDifference = Math.abs(this.currentItemIndex - this.newIndex) * plusOrMinus;
    return this.incramentItemIndex(incramentDifference);
  };

  return Sequence;

})();

},{}],9:[function(require,module,exports){
var AssetPreploader;

module.exports = AssetPreploader = (function() {
  function AssetPreploader(data, callback) {
    this.callback = callback;
    this.preloadAssets(data);
  }

  AssetPreploader.prototype.preloadAssets = function(data) {
    var assets, preloadQueue, regex;
    assets = [];
    regex = /.+\.(svg)/;
    this.lookForFiles(data, assets, regex);
    createjs.Sound.alternateExtensions = ["mp3", "m4a"];
    preloadQueue = new createjs.LoadQueue();
    preloadQueue.installPlugin(createjs.Sound);
    preloadQueue.on("progress", (function(_this) {
      return function(e) {};
    })(this));
    preloadQueue.on("complete", (function(_this) {
      return function() {
        return _this.callback(data);
      };
    })(this));
    return preloadQueue.loadManifest(assets);
  };

  AssetPreploader.prototype.lookForFiles = function(item, storage, regex) {
    var child, i, key, len, results, results1, type;
    type = typeof item;
    if (type === "string") {
      if (/.mp3|.m4a/.test(item)) {
        return storage.push({
          src: aristotle.episodeRoot + "/sounds/" + item,
          id: item
        });
      } else if (/.json/.test(item)) {
        return storage.push({
          src: aristotle.episodeRoot + "/animations/" + item,
          id: item
        });
      } else if (/.svg|.jpg|.jpeg|.png/.test(item)) {
        return storage.push({
          src: aristotle.episodeRoot + "/assets/" + item,
          id: item
        });
      }
    } else if (type === "object") {
      if (Array.isArray(item)) {
        results = [];
        for (i = 0, len = item.length; i < len; i++) {
          child = item[i];
          results.push(this.lookForFiles(child, storage, regex));
        }
        return results;
      } else {
        results1 = [];
        for (key in item) {
          child = item[key];
          results1.push(this.lookForFiles(child, storage, regex));
        }
        return results1;
      }
    }
  };

  return AssetPreploader;

})();

},{}],10:[function(require,module,exports){
var AudioTrack, DevTools,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

AudioTrack = require('episode/audio-track');

module.exports = DevTools = (function() {
  function DevTools(isDevMode) {
    this.isDevMode = isDevMode;
    this.update = bind(this.update, this);
    if (!this.isDevMode) {
      return;
    }
    this.initPerformanceStats();
  }

  DevTools.prototype.go = function(devConfig, items) {
    if (!this.isDevMode || (devConfig == null)) {
      return;
    }
    this.skip(devConfig, items);
    this.preventAnimationAsNeeded(devConfig, items);
    if (devConfig.volume != null) {
      return AudioTrack.initSoundSettings(devConfig.volume);
    }
  };

  DevTools.prototype.skip = function(devConfig, items) {
    var j, len, ref, results, slideIndex, startIndex;
    if (!this.isDevMode) {
      return;
    }
    if (devConfig.startIndex != null) {
      startIndex = devConfig.startIndex;
      items.splice(0, devConfig.startIndex);
    } else {
      startIndex = 0;
    }
    if (devConfig.skip != null) {
      ref = devConfig.skip.sort().reverse();
      results = [];
      for (j = 0, len = ref.length; j < len; j++) {
        slideIndex = ref[j];
        if (slideIndex > startIndex) {
          results.push(items.splice(slideIndex - startIndex, 1));
        } else {
          results.push(void 0);
        }
      }
      return results;
    }
  };

  DevTools.prototype.initPerformanceStats = function() {
    this.stats = new Stats();
    this.stats.setMode(0);
    this.stats.domElement.style.position = 'absolute';
    this.stats.domElement.style.left = '0px';
    this.stats.domElement.style.top = '0px';
    document.body.appendChild(this.stats.domElement);
    return requestAnimationFrame(this.update);
  };

  DevTools.prototype.preventAnimationAsNeeded = function(devConfig, items) {
    var i, j, len, ref, results, slide;
    if (devConfig.dontAnimate == null) {
      return;
    }
    ref = devConfig.dontAnimate;
    results = [];
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      slide = ref[i];
      results.push(this.addSkipToEnds(items[i]));
    }
    return results;
  };

  DevTools.prototype.addSkipToEnds = function(obj) {
    var item, key, results;
    results = [];
    for (key in obj) {
      item = obj[key];
      if (typeof item === "object") {
        this.addSkipToEnds(item, obj);
      }
      if (typeof item === "string") {
        if (item.match(/.json/g)) {
          results.push(obj.jumpToEnd = true);
        } else {
          results.push(void 0);
        }
      } else {
        results.push(void 0);
      }
    }
    return results;
  };

  DevTools.prototype.update = function() {
    this.stats.end();
    this.stats.begin();
    return requestAnimationFrame(this.update);
  };

  return DevTools;

})();

},{"episode/audio-track":3}],11:[function(require,module,exports){
var EpisodeLoader;

module.exports = EpisodeLoader = (function() {
  function EpisodeLoader(callback) {
    this.callback = callback;
    this.loadEpisode();
  }

  EpisodeLoader.prototype.loadEpisode = function() {
    return this.loadJson(aristotle.episodeRoot + "/map.json", (function(_this) {
      return function(json) {
        return _this.callback(JSON.parse(json));
      };
    })(this));
  };

  EpisodeLoader.prototype.loadJson = function(path, onComplete) {
    var xobj;
    xobj = new XMLHttpRequest();
    xobj.overrideMimeType('application/json');
    xobj.open('GET', path, true);
    xobj.onreadystatechange = (function(_this) {
      return function() {
        if (xobj.readyState === 4 && xobj.status === 200) {
          return onComplete(xobj.responseText);
        }
      };
    })(this);
    return xobj.send(null);
  };

  return EpisodeLoader;

})();

},{}],12:[function(require,module,exports){
arguments[4][8][0].apply(exports,arguments)
},{"dup":8}],13:[function(require,module,exports){
var Highlighter;

module.exports = Highlighter = (function() {
  function Highlighter($el) {
    this.$el = $el;
    PubSub.subscribe('highlight', (function(_this) {
      return function(m, data) {
        return _this.highlightElement(data.id, data.color);
      };
    })(this));
    PubSub.subscribe('unhighlight', (function(_this) {
      return function(m, data) {
        return _this.unHighlightElement(data);
      };
    })(this));
  }

  Highlighter.prototype.highlightElement = function(elementId, color) {
    return $("#" + elementId, this.$el).css({
      filter: "url(#highlight)"
    });
  };

  Highlighter.prototype.unHighlightElement = function(elementId) {
    return $("#" + elementId, this.$el).css({
      filter: "initial"
    });
  };

  return Highlighter;

})();

},{}],14:[function(require,module,exports){
var Layer, SVGAnimation,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

SVGAnimation = require('movie/svg-animation');

module.exports = Layer = (function() {
  function Layer($el, depth) {
    this.createContent = bind(this.createContent, this);
    this.update = bind(this.update, this);
    this.$layer = $(jadeTemplate['movie/layer']({
      depth: depth
    }));
    $el.append(this.$layer);
  }

  Layer.prototype.update = function(layerData1) {
    this.layerData = layerData1;
    if (this.layerData.wait != null) {
      setTimeout(this.createContent, this.layerData.wait);
      return;
    }
    return this.createContent();
  };

  Layer.prototype.createContent = function() {
    if (this.layerData.content != null) {
      this.updateContent(this.layerData);
    }
    if (this.layerData.fx != null) {
      return this.updateEffects(this.layerData.fx);
    }
  };

  Layer.prototype.updateContent = function(layerData) {
    var kind, oldOnionLayer;
    if (this.currentOnionLayer != null) {
      oldOnionLayer = this.currentOnionLayer;
      setTimeout((function(_this) {
        return function() {
          return oldOnionLayer.velocity({
            opacity: 0
          }, {
            duration: 200,
            complete: function() {
              oldOnionLayer.remove();
              return console.log("complete..");
            }
          });
        };
      })(this), 200);
    }
    this.currentOnionLayer = this.addOnionLayer();
    if (layerData.content === "clear") {
      kind = "clear";
    } else {
      kind = layerData.content.split(".")[1];
    }
    switch (kind) {
      case "json":
        return this.addAnimation(this.currentOnionLayer, layerData);
      case "svg":
        return this.addSvg(this.currentOnionLayer, layerData);
      case "gif":
      case "jpg":
      case "jpeg":
      case "png":
        return this.addImage(this.currentOnionLayer, layerData.content, layerData.repeat, layerData.position);
      case "clear":
        return this.empty();
    }
  };

  Layer.prototype.updateEffects = function(fx) {
    var effect, i, len, ref, results;
    if (fx.clear) {
      this.$layer.attr({
        "class": 'layer'
      });
    }
    if (fx.effects != null) {
      ref = fx.effects;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        effect = ref[i];
        results.push(this.$layer.addClass(effect));
      }
      return results;
    }
  };

  Layer.prototype.addAnimation = function($holder, layerData) {
    return this.animation = new SVGAnimation($holder, aristotle.episodeRoot + "/animations/" + layerData.content, layerData);
  };

  Layer.prototype.addSvg = function($holder, layerData) {
    return $holder.load(aristotle.episodeRoot + "/assets/" + layerData.content);
  };

  Layer.prototype.addImage = function($holder, file, repeat, position) {
    if (repeat == null) {
      repeat = "no-repeat";
    }
    if (position == null) {
      position = "left";
    }
    return $holder.css({
      background: "url(" + aristotle.episodeRoot + "/assets/" + file + ") " + repeat + " " + position
    });
  };

  Layer.prototype.destroy = function() {
    return this.$layer.remove();
  };

  Layer.prototype.addOnionLayer = function() {
    var $onionLayer;
    $onionLayer = $(jadeTemplate['movie/onion-layer']({}));
    this.$layer.prepend($onionLayer);
    return $onionLayer;
  };

  Layer.prototype.empty = function() {
    return this.$layer.empty();
  };

  return Layer;

})();

},{"movie/svg-animation":16}],15:[function(require,module,exports){
var Highlighter, Layer, Movie;

Layer = require('movie/Layer');

Highlighter = require('movie/Highlighter');

module.exports = Movie = (function() {
  function Movie($el) {
    this.$el = $el;
    this.$wrapper = $('.wrapper', this.$el);
    this.layers = [];
    this.highlighter = new Highlighter(this.$wrapper);
    PubSub.subscribe('movie.load-layer', (function(_this) {
      return function(m, data) {
        return _this.addLayer(data);
      };
    })(this));
    PubSub.subscribe('movie.zoom', (function(_this) {
      return function(m, data) {
        return _this.zoom(data);
      };
    })(this));
  }

  Movie.prototype.reset = function() {
    var j, layer, len, ref;
    ref = this.layers;
    for (j = 0, len = ref.length; j < len; j++) {
      layer = ref[j];
      layer.destroy();
    }
    return this.layers = [];
  };

  Movie.prototype.populate = function(data) {
    var depthId, layerData, ref;
    if (data == null) {
      return;
    }
    ref = data.layers;
    for (depthId in ref) {
      layerData = ref[depthId];
      this.addLayer(layerData);
    }
    if (data.zoom != null) {
      return this.zoom(data.zoom);
    }
  };

  Movie.prototype.zoom = function(data) {
    var pos;
    if (data.id != null) {
      pos = $("#" + data.id).offset();
      return this.zoomTo(data.scale, pos.left, pos.top);
    } else {
      return this.zoomTo(data.scale, data.x, data.y);
    }
  };

  Movie.prototype.zoomTo = function(scale, x, y) {
    if (scale == null) {
      scale = 1;
    }
    if (x == null) {
      x = 0;
    }
    if (y == null) {
      y = 0;
    }
    this.$el.css({
      "transform-origin": x + "px " + y + "px"
    });
    return this.$el.css({
      transform: "scale(" + scale + ")"
    });
  };

  Movie.prototype.addLayer = function(layerData) {
    var depth, i, j, layer, ref, ref1;
    depth = layerData.depth;
    if (depth > this.layers.length) {
      for (i = j = ref = this.layers.length, ref1 = depth; ref <= ref1 ? j <= ref1 : j >= ref1; i = ref <= ref1 ? ++j : --j) {
        this.layers[i] = new Layer(this.$wrapper, i);
      }
    }
    layer = this.getOrCreateLayer(depth);
    return layer.update(layerData);
  };

  Movie.prototype.getOrCreateLayer = function(depth) {
    var layer;
    if (this.layers[depth] != null) {
      return this.layers[depth];
    }
    layer = new Layer(this.$wrapper, depth);
    this.layers[depth] = layer;
    return layer;
  };

  return Movie;

})();

},{"movie/Highlighter":13,"movie/Layer":14}],16:[function(require,module,exports){
var SVGAnimation,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

module.exports = SVGAnimation = (function() {
  function SVGAnimation(el, json, data) {
    this.play = bind(this.play, this);
    var interval;
    if (data.loop == null) {
      data.loop = false;
    }
    this.animation = bodymovin.loadAnimation({
      wrapper: el[0],
      animType: 'svg',
      loop: data.loop,
      prerender: true,
      autoplay: false,
      path: json
    });
    if (data.jumpToEnd != null) {
      interval = setInterval((function(_this) {
        return function() {
          if (_this.animation.totalFrames !== 0) {
            clearInterval(interval);
            return _this.animation.setCurrentRawFrameValue(_this.animation.totalFrames);
          }
        };
      })(this), 100);
    } else {
      if (data.delay != null) {
        setTimeout(this.play, data.delay);
      } else {
        this.play();
      }
    }
    this.addEvents(data);
  }

  SVGAnimation.prototype.addEvents = function(data) {
    var event, i, len, ref, results;
    if (data.events != null) {
      ref = data.events;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        event = ref[i];
        results.push(this.animation.addEventListener(event, (function(_this) {
          return function() {
            _this.animation.removeEventListener(event);
            return PubSub.publish("layer." + data.depth + "." + event);
          };
        })(this)));
      }
      return results;
    }
  };

  SVGAnimation.prototype.play = function() {
    return this.animation.play();
  };

  SVGAnimation.prototype.stop = function() {
    return this.animation.stop();
  };

  SVGAnimation.prototype.destroy = function() {
    this.animation.destroy();
    if (this.interval != null) {
      return clearInterval(this.interval);
    }
  };

  SVGAnimation.prototype.traceFrames = function() {
    return this.interval = setInterval((function(_this) {
      return function() {
        return console.log(_this.animation.currentRawFrame, _this.animation.currentFrame, _this.animation.totalFrames);
      };
    })(this), 500);
  };

  return SVGAnimation;

})();

},{}],17:[function(require,module,exports){
var Component;

module.exports = Component = (function() {
  function Component($el, $node) {
    this.$node = $node;
    $el.append(this.$node);
    shadowIconsInstance.svgReplaceWithString(pxSvgIconString, this.$node);
  }

  Component.prototype.destroy = function() {
    return this.$node.remove();
  };

  return Component;

})();

},{}],18:[function(require,module,exports){
var Component, SelectionDialogue,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Component = require('slide-ux/components/component');

module.exports = SelectionDialogue = (function(superClass) {
  extend(SelectionDialogue, superClass);

  function SelectionDialogue($el, data) {
    var jadeData;
    jadeData = this.generateConfigData(data);
    this.$node = $(jadeTemplate['slide-ux/components/selection-dialogue'](jadeData));
    this.addEventListeners(this.$node, data);
    SelectionDialogue.__super__.constructor.call(this, $el, this.$node);
  }

  SelectionDialogue.prototype.generateConfigData = function(data) {
    var i, item, j, jadeData, len, ref;
    this.items = {};
    jadeData = {};
    jadeData.title = data.title;
    jadeData.subTitle = data.subTitle;
    jadeData.btnTxt = data.submitBtn.txt;
    jadeData.btnIcon = data.submitBtn.icon;
    jadeData.intro = data.intro;
    jadeData.items = [];
    ref = data.items;
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      item = ref[i];
      item.id = "item" + i;
      jadeData.items.push({
        txt: item.btnTxt,
        id: item.id,
        icon: item.icon
      });
      this.items[item.id] = item;
    }
    return jadeData;
  };

  SelectionDialogue.prototype.addEventListeners = function($el, data) {
    var $buttons;
    $buttons = $(".button", $el);
    $buttons.on("click", (function(_this) {
      return function(e) {
        var $targ;
        $targ = $(e.target);
        return _this.activateItem($targ, _this.items[$targ.attr('id')]);
      };
    })(this));
    return $("#action-btn", $el).on("click", (function(_this) {
      return function(e) {
        var action, j, len, ref;
        ref = data.click;
        for (j = 0, len = ref.length; j < len; j++) {
          action = ref[j];
          PubSub.publish(action.cmd, action.data);
        }
        return _this.destroy();
      };
    })(this));
  };

  SelectionDialogue.prototype.activateItem = function($button, item) {
    $(".intro", this.$node).css({
      display: "none"
    });
    $(".item-info", this.$node).css({
      display: "block"
    });
    $(".button", this.$node).removeClass("active");
    $button.addClass("active");
    $(".icon", this.$node).removeClass("active");
    $("#icon-" + item.id, this.$node).addClass("active");
    $(".blurb", this.$node).html(item.blurb);
    $(".details", this.$node).html(item.details);
    return PubSub.publish(item.click.cmd, item.click.data);
  };

  return SelectionDialogue;

})(Component);

},{"slide-ux/components/component":17}],19:[function(require,module,exports){
var AudioTrack, Ctanlee, Sequence;

AudioTrack = require('episode/audio-track');

Sequence = require('misc/sequence');

module.exports = Ctanlee = (function() {
  function Ctanlee($parent) {
    aristotle.ctanlee = this;
    this.$el = $(jadeTemplate['slide-ux/ctanlee/ctanlee']({}));
    shadowIconsInstance.svgReplaceWithString(pxSvgIconString, this.$el);
    this.$speechBox = $(".speech-box", this.$el);
    this.$text = $(".text span.content", this.$speechBox);
    this.$nextBtn = $(".text span.next", this.$speechBox);
    this.$nextBtn.on("click", (function(_this) {
      return function() {
        return _this.playNextAction();
      };
    })(this));
    PubSub.subscribe('ctanlee.activate', (function(_this) {
      return function(a, action) {
        return _this.playAction(action);
      };
    })(this));
    PubSub.subscribe('ctanlee.clear', (function(_this) {
      return function(a, action) {
        return _this.hideText();
      };
    })(this));
    PubSub.subscribe('ctanlee.gohome', (function(_this) {
      return function(a, action) {
        return _this.returnToStation();
      };
    })(this));
    $parent.append(this.$el);
    this.returnToStation();
  }

  Ctanlee.prototype.activate = function(data1) {
    this.data = data1;
    if (this.data.timeline == null) {
      return;
    }
    this.timeline = this.data.timeline;
    this.sequence = new Sequence(this.timeline);
    return this.playAction(this.sequence.getCurrentItem().action);
  };

  Ctanlee.prototype.say = function(text, audio, next) {
    if (text != null) {
      this.showText();
      this.$text.html(text);
    }
    if (audio != null) {
      if (this.track != null) {
        this.track.stop();
      }
      this.track = new AudioTrack(audio);
      this.track.play((function(_this) {
        return function() {
          if (next === 'audio') {
            return _this.playNextAction();
          }
        };
      })(this));
    }
    if (next === 'click') {
      return this.showNext();
    } else {
      return this.hideNext();
    }
  };

  Ctanlee.prototype.setEmotion = function(emotion) {};

  Ctanlee.prototype.gotoPos = function(x, y, duration, delay) {
    if (x == null) {
      x = 970;
    }
    if (y == null) {
      y = 10;
    }
    if (duration == null) {
      duration = 600;
    }
    if (delay == null) {
      delay = 0;
    }
    this.$el.velocity("stop", true);
    return this.$el.velocity({
      top: y,
      left: x
    }, {
      delay: delay,
      duration: duration,
      easing: "easeInOutQuint"
    });
  };

  Ctanlee.prototype.gotoItem = function(id) {
    var pos;
    pos = $("#" + id).offset();
    return this.gotoPos(pos.left - 100, pos.top - 80);
  };

  Ctanlee.prototype.goto = function(data) {
    if (typeof data === "string") {
      return this.gotoItem(data);
    } else {
      return this.gotoPos(data[0], data[1], data[2], data[3]);
    }
  };

  Ctanlee.prototype.playNextAction = function() {
    if (this.track != null) {
      this.track.stop();
    }
    if (this.sequence.isAtLastItem()) {
      return this.complete();
    } else {
      this.sequence.next();
      return this.playAction(this.sequence.getCurrentItem().action);
    }
  };

  Ctanlee.prototype.playAction = function(actionId) {
    var action, item, j, len, ref;
    this.setFilter('black-glow');
    action = this.overlayDefaults(actionId);
    if (action.emo != null) {
      this.setEmotion(action.emo);
    }
    if (action.pos != null) {
      this.goto(action.pos);
    }
    if (action.action != null) {
      if (Array.isArray(action.action)) {
        ref = action.action;
        for (j = 0, len = ref.length; j < len; j++) {
          item = ref[j];
          PubSub.publish(item.cmd, item.data);
        }
      } else {
        PubSub.publish(action.action.cmd, action.action.data);
      }
    }
    return this.say(action.text, action.audio, action.next);
  };

  Ctanlee.prototype.complete = function() {
    this.returnToStation();
    return PubSub.publish('ctanlee.complete');
  };

  Ctanlee.prototype.returnToStation = function() {
    this.hideText();
    this.gotoPos();
    return this.setFilter('glow');
  };

  Ctanlee.prototype.showText = function() {
    return this.$speechBox.css({
      opacity: 1,
      "pointer-events": "all"
    });
  };

  Ctanlee.prototype.hideText = function() {
    return this.$speechBox.css({
      opacity: 0,
      "pointer-events": "none"
    });
  };

  Ctanlee.prototype.showNext = function() {
    return this.$nextBtn.css({
      opacity: 1,
      'pointer-events': 'all'
    });
  };

  Ctanlee.prototype.hideNext = function() {
    return this.$nextBtn.css({
      opacity: 0,
      'pointer-events': 'none'
    });
  };

  Ctanlee.prototype.setFilter = function(kind) {
    return $('#ctanlee').css({
      filter: "url('#" + kind + "')"
    });
  };

  Ctanlee.prototype.getIndexOfAction = function(action) {
    var data, i, j, len, ref;
    if (this.timeline == null) {
      return 0;
    }
    ref = this.timeline;
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      data = ref[i];
      if (data.action === action) {
        return i;
      }
    }
  };

  Ctanlee.prototype.overlayDefaults = function(actionId) {
    var actions, key, ref, val;
    if (this.data.defaults == null) {
      return this.data.actions[actionId];
    }
    actions = JSON.parse(JSON.stringify(this.data.defaults));
    ref = this.data.actions[actionId];
    for (key in ref) {
      val = ref[key];
      actions[key] = val;
    }
    return actions;
  };

  return Ctanlee;

})();

},{"episode/audio-track":3,"misc/sequence":12}],20:[function(require,module,exports){
var Ctanlee, SelectionDialogue, SlideUX;

Ctanlee = require('slide-ux/ctanlee/Ctanlee');

SelectionDialogue = require('slide-ux/components/selection-dialogue');

module.exports = SlideUX = (function() {
  function SlideUX($el) {
    this.$el = $el;
    this.ctanlee = new Ctanlee(this.$el);
  }

  SlideUX.prototype.populate = function(data) {
    var component, i, len, ref, results;
    if ((data != null ? data.components : void 0) == null) {
      return;
    }
    ref = data.components;
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      component = ref[i];
      results.push(this.addComponent(component));
    }
    return results;
  };

  SlideUX.prototype.addComponent = function(componentData) {
    var component;
    switch (componentData.kind) {
      case "selection-dialogue":
        return component = new SelectionDialogue(this.$el, componentData.config);
      case "dialogue":
        return component = new Dialogue(this.$el, componentData.config);
    }
  };

  return SlideUX;

})();

},{"slide-ux/components/selection-dialogue":18,"slide-ux/ctanlee/Ctanlee":19}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9ndWxwLWNvZmZlZWlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiYXJpc3RvdGxlLmNvZmZlZSIsImNocm9tZS9jaHJvbWUtdWkuY29mZmVlIiwiZXBpc29kZS9hdWRpby10cmFjay5jb2ZmZWUiLCJlcGlzb2RlL2NoYXB0ZXIuY29mZmVlIiwiZXBpc29kZS9lcGlzb2RlLmNvZmZlZSIsImVwaXNvZGUvc2xpZGUuY29mZmVlIiwiZXBpc29kZS9zbGlkZXMuY29mZmVlIiwibWlzYy9TZXF1ZW5jZS5jb2ZmZWUiLCJtaXNjL2Fzc2V0LXByZWxvYWRlci5jb2ZmZWUiLCJtaXNjL2Rldi10b29scy5jb2ZmZWUiLCJtaXNjL2VwaXNvZGUtbG9hZGVyLmNvZmZlZSIsIm1vdmllL0hpZ2hsaWdodGVyLmNvZmZlZSIsIm1vdmllL0xheWVyLmNvZmZlZSIsIm1vdmllL21vdmllLmNvZmZlZSIsIm1vdmllL3N2Zy1hbmltYXRpb24uY29mZmVlIiwic2xpZGUtdXgvY29tcG9uZW50cy9jb21wb25lbnQuY29mZmVlIiwic2xpZGUtdXgvY29tcG9uZW50cy9zZWxlY3Rpb24tZGlhbG9ndWUuY29mZmVlIiwic2xpZGUtdXgvY3RhbmxlZS9DdGFubGVlLmNvZmZlZSIsInNsaWRlLXV4L3NsaWRlLXV4LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIEFyaXN0b3RsZSwgQ2hyb21lVUksIERldlRvb2xzLCBFcGlzb2RlLCBFcGlzb2RlTG9hZGVyLCBNb3ZpZSwgU2xpZGVVWCxcbiAgYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH07XG5cbkVwaXNvZGUgPSByZXF1aXJlKFwiZXBpc29kZS9lcGlzb2RlXCIpO1xuXG5DaHJvbWVVSSA9IHJlcXVpcmUoXCJjaHJvbWUvY2hyb21lLXVpXCIpO1xuXG5EZXZUb29scyA9IHJlcXVpcmUoJ21pc2MvZGV2LXRvb2xzJyk7XG5cbk1vdmllID0gcmVxdWlyZSgnbW92aWUvbW92aWUnKTtcblxuRXBpc29kZUxvYWRlciA9IHJlcXVpcmUoJ21pc2MvZXBpc29kZS1sb2FkZXInKTtcblxuU2xpZGVVWCA9IHJlcXVpcmUoJ3NsaWRlLXV4L3NsaWRlLXV4Jyk7XG5cbkFyaXN0b3RsZSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gQXJpc3RvdGxlKCRlbCwgZXBpc29kZVJvb3QpIHtcbiAgICB2YXIgZXBpc29kZUxvYWRlcjtcbiAgICB0aGlzLmVwaXNvZGVSb290ID0gZXBpc29kZVJvb3Q7XG4gICAgdGhpcy5vbkpzb25Mb2FkZWQgPSBiaW5kKHRoaXMub25Kc29uTG9hZGVkLCB0aGlzKTtcbiAgICB3aW5kb3cuYXJpc3RvdGxlID0gdGhpcztcbiAgICB0aGlzLnNldERldk1vZGUodHJ1ZSk7XG4gICAgdGhpcy5idWlsZCgkZWwpO1xuICAgIGVwaXNvZGVMb2FkZXIgPSBuZXcgRXBpc29kZUxvYWRlcih0aGlzLm9uSnNvbkxvYWRlZCk7XG4gIH1cblxuICBBcmlzdG90bGUucHJvdG90eXBlLm9uSnNvbkxvYWRlZCA9IGZ1bmN0aW9uKGVwaXNvZGVEYXRhKSB7XG4gICAgdmFyIGVwaXNvZGU7XG4gICAgcmV0dXJuIGVwaXNvZGUgPSBuZXcgRXBpc29kZShlcGlzb2RlRGF0YSwgdGhpcy5tb3ZpZSwgdGhpcy5zbGlkZVVYKTtcbiAgfTtcblxuICBBcmlzdG90bGUucHJvdG90eXBlLmJ1aWxkID0gZnVuY3Rpb24oJGVsKSB7XG4gICAgdmFyICRiYXNlLCBzaGFkb3dJY29ucztcbiAgICAkYmFzZSA9ICQoamFkZVRlbXBsYXRlWydhcmlzdG90bGUnXSh7fSkpO1xuICAgICRlbC5hcHBlbmQoJGJhc2UpO1xuICAgIHNoYWRvd0ljb25zID0gbmV3IHB4aWNvbnMuU2hhZG93SWNvbnMoKTtcbiAgICBzaGFkb3dJY29uc0luc3RhbmNlLnN2Z1JlcGxhY2VXaXRoU3RyaW5nKHB4U3ZnSWNvblN0cmluZywgJGJhc2UpO1xuICAgIHRoaXMuY2hyb21lVUkgPSBuZXcgQ2hyb21lVUkoJChcIi5jaHJvbWVcIiwgJGJhc2UpKTtcbiAgICB0aGlzLnNsaWRlVVggPSBuZXcgU2xpZGVVWCgkKFwiLnNsaWRlLXV4XCIsICRiYXNlKSk7XG4gICAgcmV0dXJuIHRoaXMubW92aWUgPSBuZXcgTW92aWUoJChcIi5tb3ZpZVwiLCAkYmFzZSkpO1xuICB9O1xuXG4gIEFyaXN0b3RsZS5wcm90b3R5cGUuc2V0RGV2TW9kZSA9IGZ1bmN0aW9uKGRldk1vZGUpIHtcbiAgICByZXR1cm4gYXJpc3RvdGxlLmRldlRvb2xzID0gbmV3IERldlRvb2xzKGRldk1vZGUpO1xuICB9O1xuXG4gIHJldHVybiBBcmlzdG90bGU7XG5cbn0pKCk7XG5cbndpbmRvdy5BcmlzdG90bGUgPSBBcmlzdG90bGU7XG4iLCJ2YXIgQ2hyb21lVUk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2hyb21lVUkgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIENocm9tZVVJKCRlbCkge1xuICAgIHRoaXMuYnVpbGQoJGVsKTtcbiAgfVxuXG4gIENocm9tZVVJLnByb3RvdHlwZS5idWlsZCA9IGZ1bmN0aW9uKCRlbCkge1xuICAgIHZhciAkcHJvZ3Jlc3MsICR0b3AsIGRhdGE7XG4gICAgZGF0YSA9IHtcbiAgICAgIG5hbWU6IFwiSm9obiBcXFwiRGVhZGV5ZVxcXCIgTmltYnVzXCIsXG4gICAgICBlcGlzb2RlOiBcIjFcIlxuICAgIH07XG4gICAgdGhpcy5nZXRSYW5rKGRhdGEsIFwiY3liZXItY2FkZXRcIik7XG4gICAgJHRvcCA9ICQoamFkZVRlbXBsYXRlWydjaHJvbWUtdWkvdG9wJ10oZGF0YSkpO1xuICAgICRlbC5hcHBlbmQoJHRvcCk7XG4gICAgJHByb2dyZXNzID0gJChqYWRlVGVtcGxhdGVbJ2Nocm9tZS11aS9wcm9ncmVzcyddKHt9KSk7XG4gICAgJGVsLmFwcGVuZCgkcHJvZ3Jlc3MpO1xuICAgIHJldHVybiBzaGFkb3dJY29uc0luc3RhbmNlLnN2Z1JlcGxhY2VXaXRoU3RyaW5nKHB4U3ZnSWNvblN0cmluZywgJGVsKTtcbiAgfTtcblxuICBDaHJvbWVVSS5wcm90b3R5cGUuZ2V0UmFuayA9IGZ1bmN0aW9uKGRhdGEsIGVwaXNvZGUpIHtcbiAgICBzd2l0Y2ggKGVwaXNvZGUpIHtcbiAgICAgIGNhc2UgJ3JlY3J1aXQnOlxuICAgICAgICBkYXRhLnJhbmsgPSBcInJlY3J1aXRcIjtcbiAgICAgICAgcmV0dXJuIGRhdGEuYmFkZ2UgPSBcInJhbmstYmFkZ2UtcmVjcnVpdFwiO1xuICAgICAgY2FzZSAnY2FkZXQnOlxuICAgICAgICBkYXRhLnJhbmsgPSBcImNhZGV0XCI7XG4gICAgICAgIHJldHVybiBkYXRhLmJhZGdlID0gXCJyYW5rLWJhZGdlLWNhZGV0XCI7XG4gICAgICBjYXNlICdjYWRldC1maXJzdC1jbGFzcyc6XG4gICAgICAgIGRhdGEucmFuayA9IFwiQ2FkZXQgRmlyc3QgQ2xhc3NcIjtcbiAgICAgICAgcmV0dXJuIGRhdGEuYmFkZ2UgPSBcInJhbmstYmFkZ2UtY2FkZXQtZmlyc3QtY2xhc3NcIjtcbiAgICAgIGNhc2UgJ3RlY2huaWNhbC1jYWRldCc6XG4gICAgICAgIGRhdGEucmFuayA9IFwiVGVjaG5pY2FsIENhZGV0XCI7XG4gICAgICAgIHJldHVybiBkYXRhLmJhZGdlID0gXCJyYW5rLWJhZGdlLXRlY2huaWNhbC1jYWRldFwiO1xuICAgICAgY2FzZSAnY3liZXItY2FkZXQnOlxuICAgICAgICBkYXRhLnJhbmsgPSBcIkN5YmVyIENhZGV0XCI7XG4gICAgICAgIHJldHVybiBkYXRhLmJhZGdlID0gXCJyYW5rLWJhZGdlLWN5YmVyLWNhZGV0XCI7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBDaHJvbWVVSTtcblxufSkoKTtcbiIsInZhciBBdWRpb1RyYWNrO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF1ZGlvVHJhY2sgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIEF1ZGlvVHJhY2soc3JjKSB7XG4gICAgdGhpcy5zcmMgPSBzcmM7XG4gICAgQXVkaW9UcmFjay5pbml0U291bmRTZXR0aW5ncygpO1xuICB9XG5cbiAgQXVkaW9UcmFjay5wcm90b3R5cGUucGxheSA9IGZ1bmN0aW9uKG9uQ29tcGxldGUpIHtcbiAgICB0aGlzLnNvdW5kID0gY3JlYXRlanMuU291bmQucGxheSh0aGlzLnNyYywgQXVkaW9UcmFjay5wcGMpO1xuICAgIHJldHVybiB0aGlzLnNvdW5kLmFkZEV2ZW50TGlzdGVuZXIoXCJjb21wbGV0ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBvbkNvbXBsZXRlKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgQXVkaW9UcmFjay5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnNvdW5kLnN0b3AoKTtcbiAgfTtcblxuICBBdWRpb1RyYWNrLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zb3VuZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY29tcGxldGVcIik7XG4gICAgcmV0dXJuIHRoaXMuc291bmQuZGVzdHJveSgpO1xuICB9O1xuXG4gIEF1ZGlvVHJhY2suaW5pdFNvdW5kU2V0dGluZ3MgPSBmdW5jdGlvbih2b2x1bWUpIHtcbiAgICBpZiAodm9sdW1lID09IG51bGwpIHtcbiAgICAgIHZvbHVtZSA9IDE7XG4gICAgfVxuICAgIGlmIChBdWRpb1RyYWNrLnBwYyAhPSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiBBdWRpb1RyYWNrLnBwYyA9IG5ldyBjcmVhdGVqcy5QbGF5UHJvcHNDb25maWcoKS5zZXQoe1xuICAgICAgaW50ZXJydXB0OiBjcmVhdGVqcy5Tb3VuZC5JTlRFUlJVUFRfQU5ZLFxuICAgICAgdm9sdW1lOiB2b2x1bWUsXG4gICAgICBwYW46IDFcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gQXVkaW9UcmFjaztcblxufSkoKTtcbiIsInZhciBDaGFwdGVyLCBQcmVsb2FkZXIsIFNsaWRlcyxcbiAgYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH07XG5cblNsaWRlcyA9IHJlcXVpcmUoJ2VwaXNvZGUvc2xpZGVzJyk7XG5cblByZWxvYWRlciA9IHJlcXVpcmUoJ21pc2MvYXNzZXQtcHJlbG9hZGVyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2hhcHRlciA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gQ2hhcHRlcihjaGFwdGVyRGF0YSwgbW92aWUsIHV4LCBvbkNoYXB0ZXJDb21wZXRlKSB7XG4gICAgdGhpcy5jaGFwdGVyRGF0YSA9IGNoYXB0ZXJEYXRhO1xuICAgIHRoaXMubW92aWUgPSBtb3ZpZTtcbiAgICB0aGlzLnV4ID0gdXg7XG4gICAgdGhpcy5vbkNoYXB0ZXJDb21wZXRlID0gb25DaGFwdGVyQ29tcGV0ZTtcbiAgICB0aGlzLm9uU2xpZGVzQ29tcGxldGUgPSBiaW5kKHRoaXMub25TbGlkZXNDb21wbGV0ZSwgdGhpcyk7XG4gICAgdGhpcy5zdGFydFNsaWRlcyA9IGJpbmQodGhpcy5zdGFydFNsaWRlcywgdGhpcyk7XG4gIH1cblxuICBDaGFwdGVyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBwcmVsb2FkZXI7XG4gICAgYXJpc3RvdGxlLmRldlRvb2xzLmdvKHRoaXMuY2hhcHRlckRhdGEuZGV2LCB0aGlzLmNoYXB0ZXJEYXRhLnNsaWRlcyk7XG4gICAgcmV0dXJuIHByZWxvYWRlciA9IG5ldyBQcmVsb2FkZXIodGhpcy5jaGFwdGVyRGF0YSwgdGhpcy5zdGFydFNsaWRlcyk7XG4gIH07XG5cbiAgQ2hhcHRlci5wcm90b3R5cGUuc3RhcnRTbGlkZXMgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnNsaWRlcyA9IG5ldyBTbGlkZXModGhpcy5jaGFwdGVyRGF0YSwgdGhpcy5tb3ZpZSwgdGhpcy51eCwgdGhpcy5vblNsaWRlc0NvbXBsZXRlKTtcbiAgICByZXR1cm4gdGhpcy5zbGlkZXMuc3RhcnQoKTtcbiAgfTtcblxuICBDaGFwdGVyLnByb3RvdHlwZS5vblNsaWRlc0NvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMub25DaGFwdGVyQ29tcGV0ZSgpO1xuICB9O1xuXG4gIHJldHVybiBDaGFwdGVyO1xuXG59KSgpO1xuIiwidmFyIENoYXB0ZXIsIEVwaXNvZGUsIFNlcXVlbmNlLFxuICBiaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfTtcblxuQ2hhcHRlciA9IHJlcXVpcmUoJ2VwaXNvZGUvY2hhcHRlcicpO1xuXG5TZXF1ZW5jZSA9IHJlcXVpcmUoJ21pc2MvU2VxdWVuY2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBFcGlzb2RlID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBFcGlzb2RlKHRyYWluaW5nRGF0YSwgbW92aWUsIHV4KSB7XG4gICAgdGhpcy5tb3ZpZSA9IG1vdmllO1xuICAgIHRoaXMuY2hhcHRlckNvbXBsZXRlID0gYmluZCh0aGlzLmNoYXB0ZXJDb21wbGV0ZSwgdGhpcyk7XG4gICAgdGhpcy5uZXh0Q2hhcHRlciA9IGJpbmQodGhpcy5uZXh0Q2hhcHRlciwgdGhpcyk7XG4gICAgYXJpc3RvdGxlLmRldlRvb2xzLmdvKHRyYWluaW5nRGF0YS5kZXYsIHRyYWluaW5nRGF0YS5jaGFwdGVycyk7XG4gICAgdGhpcy5jcmVhdGVDaGFwdGVycyh0cmFpbmluZ0RhdGEsIHV4KTtcbiAgfVxuXG4gIEVwaXNvZGUucHJvdG90eXBlLmNyZWF0ZUNoYXB0ZXJzID0gZnVuY3Rpb24odHJhaW5pbmdEYXRhLCB1eCkge1xuICAgIHZhciBjaGFwdGVyRGF0YSwgY2hhcHRlcnMsIGksIGxlbiwgcmVmO1xuICAgIGNoYXB0ZXJzID0gW107XG4gICAgcmVmID0gdHJhaW5pbmdEYXRhLmNoYXB0ZXJzO1xuICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgY2hhcHRlckRhdGEgPSByZWZbaV07XG4gICAgICBjaGFwdGVycy5wdXNoKG5ldyBDaGFwdGVyKGNoYXB0ZXJEYXRhLCB0aGlzLm1vdmllLCB1eCwgdGhpcy5jaGFwdGVyQ29tcGxldGUpKTtcbiAgICB9XG4gICAgdGhpcy5jaGFwdGVycyA9IG5ldyBTZXF1ZW5jZShjaGFwdGVycyk7XG4gICAgcmV0dXJuIHRoaXMucGxheUNoYXB0ZXIoKTtcbiAgfTtcblxuICBFcGlzb2RlLnByb3RvdHlwZS5uZXh0Q2hhcHRlciA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmNoYXB0ZXJzLmlzQXRMYXN0SXRlbSgpKSB7XG4gICAgICByZXR1cm4gdGhpcy5lcGlzb2RlQ29tcGxldGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jaGFwdGVycy5uZXh0KCk7XG4gICAgICByZXR1cm4gdGhpcy5wbGF5Q2hhcHRlcigpO1xuICAgIH1cbiAgfTtcblxuICBFcGlzb2RlLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBsYXlDaGFwdGVyKCk7XG4gIH07XG5cbiAgRXBpc29kZS5wcm90b3R5cGUuY2hhcHRlckNvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubmV4dENoYXB0ZXIoKTtcbiAgfTtcblxuICBFcGlzb2RlLnByb3RvdHlwZS5wbGF5Q2hhcHRlciA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMubW92aWUucmVzZXQoKTtcbiAgICByZXR1cm4gdGhpcy5jaGFwdGVycy5nZXRDdXJyZW50SXRlbSgpLnN0YXJ0KHRoaXMuY2hhcHRlckNvbXBsZXRlKTtcbiAgfTtcblxuICBFcGlzb2RlLnByb3RvdHlwZS5lcGlzb2RlQ29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gY29uc29sZS5sb2coXCJlcGlzb2RlIGNvbXBsZXRlXCIpO1xuICB9O1xuXG4gIHJldHVybiBFcGlzb2RlO1xuXG59KSgpO1xuIiwidmFyIEF1ZGlvVHJhY2ssIFNWR0FuaW1hdGlvbiwgU2xpZGUsXG4gIGJpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9O1xuXG5BdWRpb1RyYWNrID0gcmVxdWlyZShcImVwaXNvZGUvYXVkaW8tdHJhY2tcIik7XG5cblNWR0FuaW1hdGlvbiA9IHJlcXVpcmUoXCJtb3ZpZS9zdmctYW5pbWF0aW9uXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNsaWRlID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBTbGlkZShtb3ZpZSwgc2xpZGVVWCwgc2xpZGVEYXRhLCBvblNsaWRlQ29tcGxldGUpIHtcbiAgICB0aGlzLm1vdmllID0gbW92aWU7XG4gICAgdGhpcy5zbGlkZVVYID0gc2xpZGVVWDtcbiAgICB0aGlzLnNsaWRlRGF0YSA9IHNsaWRlRGF0YTtcbiAgICB0aGlzLm9uU2xpZGVDb21wbGV0ZSA9IG9uU2xpZGVDb21wbGV0ZTtcbiAgICB0aGlzLnBsYXkgPSBiaW5kKHRoaXMucGxheSwgdGhpcyk7XG4gIH1cblxuICBTbGlkZS5wcm90b3R5cGUucGxheSA9IGZ1bmN0aW9uKG9uQ29tcGxldGUpIHtcbiAgICB0aGlzLm1vdmllLnBvcHVsYXRlKHRoaXMuc2xpZGVEYXRhLm1vdmllKTtcbiAgICB0aGlzLnNsaWRlVVgucG9wdWxhdGUodGhpcy5zbGlkZURhdGEudXgpO1xuICAgIHRoaXMuc2V0RHVyYXRpb24oKTtcbiAgICB0aGlzLnJ1bkN0YW5sZWUodGhpcy5zbGlkZURhdGEuY3RhbmxlZSk7XG4gICAgcmV0dXJuIHRoaXMucnVuQWN0aW9ucyh0aGlzLnNsaWRlRGF0YS5hY3Rpb24pO1xuICB9O1xuXG4gIFNsaWRlLnByb3RvdHlwZS5ydW5BY3Rpb25zID0gZnVuY3Rpb24oYWN0aW9uKSB7XG4gICAgaWYgKGFjdGlvbiA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiBQdWJTdWIucHVibGlzaChhY3Rpb24uY21kLCBhY3Rpb24uZGF0YSk7XG4gIH07XG5cbiAgU2xpZGUucHJvdG90eXBlLnNldER1cmF0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuc2xpZGVEYXRhLmR1cmF0aW9uID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc3dpdGNoICh0aGlzLnNsaWRlRGF0YS5kdXJhdGlvbi5raW5kKSB7XG4gICAgICBjYXNlIFwidGltZVwiOlxuICAgICAgICByZXR1cm4gc2V0VGltZW91dCh0aGlzLm9uU2xpZGVDb21wbGV0ZSwgdGhpcy5zbGlkZURhdGEuZHVyYXRpb24uc2Vjb25kcyAqIDEwMDApO1xuICAgICAgY2FzZSBcInVzZXJcIjpcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFwid2FpdGluZyBvbiB0aGUgdXNlclwiKTtcbiAgICAgIGNhc2UgXCJ1eFwiOlxuICAgICAgICByZXR1cm4gUHViU3ViLnN1YnNjcmliZSgndXguY29tcGxldGUnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMub25TbGlkZUNvbXBsZXRlKCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSkodGhpcykpO1xuICAgICAgY2FzZSBcImN0YW5sZWVcIjpcbiAgICAgICAgcmV0dXJuIFB1YlN1Yi5zdWJzY3JpYmUoJ2N0YW5sZWUuY29tcGxldGUnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMub25TbGlkZUNvbXBsZXRlKCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSkodGhpcykpO1xuICAgICAgY2FzZSBcImxpc3RlblwiOlxuICAgICAgICByZXR1cm4gUHViU3ViLnN1YnNjcmliZSh0aGlzLnNsaWRlRGF0YS5kdXJhdGlvbi5ldmVudCwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgUHViU3ViLnVuc3Vic2NyaWJlKF90aGlzLnNsaWRlRGF0YS5kdXJhdGlvbi5ldmVudCk7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMub25TbGlkZUNvbXBsZXRlKCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSkodGhpcykpO1xuICAgIH1cbiAgfTtcblxuICBTbGlkZS5wcm90b3R5cGUucnVuQ3RhbmxlZSA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBpZiAoZGF0YSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gYXJpc3RvdGxlLmN0YW5sZWUuYWN0aXZhdGUoZGF0YSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBTbGlkZTtcblxufSkoKTtcbiIsInZhciBTZXF1ZW5jZSwgU2xpZGUsIFNsaWRlcyxcbiAgYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH07XG5cblNsaWRlID0gcmVxdWlyZSgnZXBpc29kZS9zbGlkZScpO1xuXG5TZXF1ZW5jZSA9IHJlcXVpcmUoJ21pc2Mvc2VxdWVuY2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTbGlkZXMgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIFNsaWRlcyh0cmFpbmluZ0RhdGEsIG1vdmllLCB1eCwgb25TaG93Q29tcGxldGUpIHtcbiAgICB0aGlzLm9uU2hvd0NvbXBsZXRlID0gb25TaG93Q29tcGxldGU7XG4gICAgdGhpcy5zbGlkZUNvbXBsZXRlID0gYmluZCh0aGlzLnNsaWRlQ29tcGxldGUsIHRoaXMpO1xuICAgIHRoaXMubmV4dFNsaWRlID0gYmluZCh0aGlzLm5leHRTbGlkZSwgdGhpcyk7XG4gICAgdGhpcy5jdXJyZW50U2xpZGVJbmRleCA9IC0xO1xuICAgIHRoaXMuY3JlYXRlU2xpZGVzKHRyYWluaW5nRGF0YSwgbW92aWUsIHV4KTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCdzbGlkZXMubmV4dC1zbGlkZScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMubmV4dFNsaWRlKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgfVxuXG4gIFNsaWRlcy5wcm90b3R5cGUuY3JlYXRlU2xpZGVzID0gZnVuY3Rpb24odHJhaW5pbmdEYXRhLCBtb3ZpZSwgdXgpIHtcbiAgICB2YXIgaSwgbGVuLCByZWYsIHNsaWRlRGF0YSwgc2xpZGVzO1xuICAgIHNsaWRlcyA9IFtdO1xuICAgIHJlZiA9IHRyYWluaW5nRGF0YS5zbGlkZXM7XG4gICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBzbGlkZURhdGEgPSByZWZbaV07XG4gICAgICBzbGlkZXMucHVzaChuZXcgU2xpZGUobW92aWUsIHV4LCBzbGlkZURhdGEsIHRoaXMuc2xpZGVDb21wbGV0ZSkpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zbGlkZXMgPSBuZXcgU2VxdWVuY2Uoc2xpZGVzKTtcbiAgfTtcblxuICBTbGlkZXMucHJvdG90eXBlLm5leHRTbGlkZSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLnNsaWRlcy5pc0F0TGFzdEl0ZW0oKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2xpZGVTaG93Q29tcGxldGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zbGlkZXMubmV4dCgpO1xuICAgICAgcmV0dXJuIHRoaXMucGxheVNsaWRlKCk7XG4gICAgfVxuICB9O1xuXG4gIFNsaWRlcy5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wbGF5U2xpZGUoKTtcbiAgfTtcblxuICBTbGlkZXMucHJvdG90eXBlLnNsaWRlQ29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5uZXh0U2xpZGUoKTtcbiAgfTtcblxuICBTbGlkZXMucHJvdG90eXBlLnBsYXlTbGlkZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnNsaWRlcy5nZXRDdXJyZW50SXRlbSgpLnBsYXkodGhpcy5zbGlkZUNvbXBsZXRlKTtcbiAgfTtcblxuICBTbGlkZXMucHJvdG90eXBlLnNsaWRlU2hvd0NvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMub25TaG93Q29tcGxldGUoKTtcbiAgfTtcblxuICByZXR1cm4gU2xpZGVzO1xuXG59KSgpO1xuIiwidmFyIFNlcXVlbmNlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNlcXVlbmNlID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBTZXF1ZW5jZShpdGVtcykge1xuICAgIHRoaXMuaXRlbXMgPSBpdGVtcztcbiAgICB0aGlzLmN1cnJlbnRJdGVtSW5kZXggPSAwO1xuICAgIHRoaXMudG90YWxJdGVtcyA9IHRoaXMuaXRlbXMubGVuZ3RoO1xuICB9XG5cbiAgU2VxdWVuY2UucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbihsb29wT25PdmVyU2hvb3QpIHtcbiAgICBpZiAobG9vcE9uT3ZlclNob290ID09IG51bGwpIHtcbiAgICAgIGxvb3BPbk92ZXJTaG9vdCA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5pbmNyYW1lbnRJdGVtSW5kZXgoMSwgbG9vcE9uT3ZlclNob290KTtcbiAgfTtcblxuICBTZXF1ZW5jZS5wcm90b3R5cGUucHJldiA9IGZ1bmN0aW9uKGxvb3BPbk92ZXJTaG9vdCkge1xuICAgIGlmIChsb29wT25PdmVyU2hvb3QgPT0gbnVsbCkge1xuICAgICAgbG9vcE9uT3ZlclNob290ID0gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmluY3JhbWVudEl0ZW1JbmRleCgtMSwgbG9vcE9uT3ZlclNob290KTtcbiAgfTtcblxuICBTZXF1ZW5jZS5wcm90b3R5cGUuaXNBdExhc3RJdGVtID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudEl0ZW1JbmRleCA9PT0gdGhpcy50b3RhbEl0ZW1zIC0gMSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgU2VxdWVuY2UucHJvdG90eXBlLmdldEN1cnJlbnRJdGVtID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXNbdGhpcy5jdXJyZW50SXRlbUluZGV4XTtcbiAgfTtcblxuICBTZXF1ZW5jZS5wcm90b3R5cGUuaW5jcmFtZW50SXRlbUluZGV4ID0gZnVuY3Rpb24oaW5jcmFtZW50LCBsb29wT25PdmVyc2hvb3QpIHtcbiAgICB2YXIgbmV3SW5kZXg7XG4gICAgaWYgKGxvb3BPbk92ZXJzaG9vdCA9PSBudWxsKSB7XG4gICAgICBsb29wT25PdmVyc2hvb3QgPSBmYWxzZTtcbiAgICB9XG4gICAgbmV3SW5kZXggPSB0aGlzLmN1cnJlbnRJdGVtSW5kZXggKyBpbmNyYW1lbnQ7XG4gICAgaWYgKG5ld0luZGV4ID4gdGhpcy50b3RhbEl0ZW1zIC0gMSkge1xuICAgICAgbmV3SW5kZXggPSBsb29wT25PdmVyU2hvb3QgPyAwIDogdGhpcy50b3RhbEl0ZW1zIC0gMTtcbiAgICB9IGVsc2UgaWYgKG5ld0luZGV4IDwgMCkge1xuICAgICAgbmV3SW5kZXggPSBsb29wT25PdmVyU2hvb3QgPyB0aGlzLnRvdGFsSXRlbXMgLSAxIDogMDtcbiAgICB9XG4gICAgaWYgKHRoaXMuY3VycmVudEl0ZW1JbmRleCAhPT0gbmV3SW5kZXgpIHtcbiAgICAgIHRoaXMuY3VycmVudEl0ZW1JbmRleCA9IG5ld0luZGV4O1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgU2VxdWVuY2UucHJvdG90eXBlLmNoYW5nZUl0ZW1CeUluZGV4ID0gZnVuY3Rpb24obmV3SW5kZXgpIHtcbiAgICB2YXIgaW5jcmFtZW50RGlmZmVyZW5jZSwgcGx1c09yTWludXM7XG4gICAgcGx1c09yTWludXMgPSB0aGlzLm5ld0luZGV4ID4gdGhpcy5jdXJyZW50SXRlbUluZGV4ID8gMSA6IC0xO1xuICAgIGluY3JhbWVudERpZmZlcmVuY2UgPSBNYXRoLmFicyh0aGlzLmN1cnJlbnRJdGVtSW5kZXggLSB0aGlzLm5ld0luZGV4KSAqIHBsdXNPck1pbnVzO1xuICAgIHJldHVybiB0aGlzLmluY3JhbWVudEl0ZW1JbmRleChpbmNyYW1lbnREaWZmZXJlbmNlKTtcbiAgfTtcblxuICByZXR1cm4gU2VxdWVuY2U7XG5cbn0pKCk7XG4iLCJ2YXIgQXNzZXRQcmVwbG9hZGVyO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFzc2V0UHJlcGxvYWRlciA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gQXNzZXRQcmVwbG9hZGVyKGRhdGEsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIHRoaXMucHJlbG9hZEFzc2V0cyhkYXRhKTtcbiAgfVxuXG4gIEFzc2V0UHJlcGxvYWRlci5wcm90b3R5cGUucHJlbG9hZEFzc2V0cyA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2YXIgYXNzZXRzLCBwcmVsb2FkUXVldWUsIHJlZ2V4O1xuICAgIGFzc2V0cyA9IFtdO1xuICAgIHJlZ2V4ID0gLy4rXFwuKHN2ZykvO1xuICAgIHRoaXMubG9va0ZvckZpbGVzKGRhdGEsIGFzc2V0cywgcmVnZXgpO1xuICAgIGNyZWF0ZWpzLlNvdW5kLmFsdGVybmF0ZUV4dGVuc2lvbnMgPSBbXCJtcDNcIiwgXCJtNGFcIl07XG4gICAgcHJlbG9hZFF1ZXVlID0gbmV3IGNyZWF0ZWpzLkxvYWRRdWV1ZSgpO1xuICAgIHByZWxvYWRRdWV1ZS5pbnN0YWxsUGx1Z2luKGNyZWF0ZWpzLlNvdW5kKTtcbiAgICBwcmVsb2FkUXVldWUub24oXCJwcm9ncmVzc1wiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihlKSB7fTtcbiAgICB9KSh0aGlzKSk7XG4gICAgcHJlbG9hZFF1ZXVlLm9uKFwiY29tcGxldGVcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5jYWxsYmFjayhkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHJldHVybiBwcmVsb2FkUXVldWUubG9hZE1hbmlmZXN0KGFzc2V0cyk7XG4gIH07XG5cbiAgQXNzZXRQcmVwbG9hZGVyLnByb3RvdHlwZS5sb29rRm9yRmlsZXMgPSBmdW5jdGlvbihpdGVtLCBzdG9yYWdlLCByZWdleCkge1xuICAgIHZhciBjaGlsZCwgaSwga2V5LCBsZW4sIHJlc3VsdHMsIHJlc3VsdHMxLCB0eXBlO1xuICAgIHR5cGUgPSB0eXBlb2YgaXRlbTtcbiAgICBpZiAodHlwZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgaWYgKC8ubXAzfC5tNGEvLnRlc3QoaXRlbSkpIHtcbiAgICAgICAgcmV0dXJuIHN0b3JhZ2UucHVzaCh7XG4gICAgICAgICAgc3JjOiBhcmlzdG90bGUuZXBpc29kZVJvb3QgKyBcIi9zb3VuZHMvXCIgKyBpdGVtLFxuICAgICAgICAgIGlkOiBpdGVtXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICgvLmpzb24vLnRlc3QoaXRlbSkpIHtcbiAgICAgICAgcmV0dXJuIHN0b3JhZ2UucHVzaCh7XG4gICAgICAgICAgc3JjOiBhcmlzdG90bGUuZXBpc29kZVJvb3QgKyBcIi9hbmltYXRpb25zL1wiICsgaXRlbSxcbiAgICAgICAgICBpZDogaXRlbVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoLy5zdmd8LmpwZ3wuanBlZ3wucG5nLy50ZXN0KGl0ZW0pKSB7XG4gICAgICAgIHJldHVybiBzdG9yYWdlLnB1c2goe1xuICAgICAgICAgIHNyYzogYXJpc3RvdGxlLmVwaXNvZGVSb290ICsgXCIvYXNzZXRzL1wiICsgaXRlbSxcbiAgICAgICAgICBpZDogaXRlbVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW0pKSB7XG4gICAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yIChpID0gMCwgbGVuID0gaXRlbS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgIGNoaWxkID0gaXRlbVtpXTtcbiAgICAgICAgICByZXN1bHRzLnB1c2godGhpcy5sb29rRm9yRmlsZXMoY2hpbGQsIHN0b3JhZ2UsIHJlZ2V4KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRzMSA9IFtdO1xuICAgICAgICBmb3IgKGtleSBpbiBpdGVtKSB7XG4gICAgICAgICAgY2hpbGQgPSBpdGVtW2tleV07XG4gICAgICAgICAgcmVzdWx0czEucHVzaCh0aGlzLmxvb2tGb3JGaWxlcyhjaGlsZCwgc3RvcmFnZSwgcmVnZXgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0czE7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBBc3NldFByZXBsb2FkZXI7XG5cbn0pKCk7XG4iLCJ2YXIgQXVkaW9UcmFjaywgRGV2VG9vbHMsXG4gIGJpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9O1xuXG5BdWRpb1RyYWNrID0gcmVxdWlyZSgnZXBpc29kZS9hdWRpby10cmFjaycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERldlRvb2xzID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBEZXZUb29scyhpc0Rldk1vZGUpIHtcbiAgICB0aGlzLmlzRGV2TW9kZSA9IGlzRGV2TW9kZTtcbiAgICB0aGlzLnVwZGF0ZSA9IGJpbmQodGhpcy51cGRhdGUsIHRoaXMpO1xuICAgIGlmICghdGhpcy5pc0Rldk1vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5pbml0UGVyZm9ybWFuY2VTdGF0cygpO1xuICB9XG5cbiAgRGV2VG9vbHMucHJvdG90eXBlLmdvID0gZnVuY3Rpb24oZGV2Q29uZmlnLCBpdGVtcykge1xuICAgIGlmICghdGhpcy5pc0Rldk1vZGUgfHwgKGRldkNvbmZpZyA9PSBudWxsKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNraXAoZGV2Q29uZmlnLCBpdGVtcyk7XG4gICAgdGhpcy5wcmV2ZW50QW5pbWF0aW9uQXNOZWVkZWQoZGV2Q29uZmlnLCBpdGVtcyk7XG4gICAgaWYgKGRldkNvbmZpZy52b2x1bWUgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIEF1ZGlvVHJhY2suaW5pdFNvdW5kU2V0dGluZ3MoZGV2Q29uZmlnLnZvbHVtZSk7XG4gICAgfVxuICB9O1xuXG4gIERldlRvb2xzLnByb3RvdHlwZS5za2lwID0gZnVuY3Rpb24oZGV2Q29uZmlnLCBpdGVtcykge1xuICAgIHZhciBqLCBsZW4sIHJlZiwgcmVzdWx0cywgc2xpZGVJbmRleCwgc3RhcnRJbmRleDtcbiAgICBpZiAoIXRoaXMuaXNEZXZNb2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChkZXZDb25maWcuc3RhcnRJbmRleCAhPSBudWxsKSB7XG4gICAgICBzdGFydEluZGV4ID0gZGV2Q29uZmlnLnN0YXJ0SW5kZXg7XG4gICAgICBpdGVtcy5zcGxpY2UoMCwgZGV2Q29uZmlnLnN0YXJ0SW5kZXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGFydEluZGV4ID0gMDtcbiAgICB9XG4gICAgaWYgKGRldkNvbmZpZy5za2lwICE9IG51bGwpIHtcbiAgICAgIHJlZiA9IGRldkNvbmZpZy5za2lwLnNvcnQoKS5yZXZlcnNlKCk7XG4gICAgICByZXN1bHRzID0gW107XG4gICAgICBmb3IgKGogPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgICAgc2xpZGVJbmRleCA9IHJlZltqXTtcbiAgICAgICAgaWYgKHNsaWRlSW5kZXggPiBzdGFydEluZGV4KSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKGl0ZW1zLnNwbGljZShzbGlkZUluZGV4IC0gc3RhcnRJbmRleCwgMSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdHMucHVzaCh2b2lkIDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG4gIH07XG5cbiAgRGV2VG9vbHMucHJvdG90eXBlLmluaXRQZXJmb3JtYW5jZVN0YXRzID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zdGF0cyA9IG5ldyBTdGF0cygpO1xuICAgIHRoaXMuc3RhdHMuc2V0TW9kZSgwKTtcbiAgICB0aGlzLnN0YXRzLmRvbUVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIHRoaXMuc3RhdHMuZG9tRWxlbWVudC5zdHlsZS5sZWZ0ID0gJzBweCc7XG4gICAgdGhpcy5zdGF0cy5kb21FbGVtZW50LnN0eWxlLnRvcCA9ICcwcHgnO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5zdGF0cy5kb21FbGVtZW50KTtcbiAgICByZXR1cm4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlKTtcbiAgfTtcblxuICBEZXZUb29scy5wcm90b3R5cGUucHJldmVudEFuaW1hdGlvbkFzTmVlZGVkID0gZnVuY3Rpb24oZGV2Q29uZmlnLCBpdGVtcykge1xuICAgIHZhciBpLCBqLCBsZW4sIHJlZiwgcmVzdWx0cywgc2xpZGU7XG4gICAgaWYgKGRldkNvbmZpZy5kb250QW5pbWF0ZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJlZiA9IGRldkNvbmZpZy5kb250QW5pbWF0ZTtcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChpID0gaiA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGogPCBsZW47IGkgPSArK2opIHtcbiAgICAgIHNsaWRlID0gcmVmW2ldO1xuICAgICAgcmVzdWx0cy5wdXNoKHRoaXMuYWRkU2tpcFRvRW5kcyhpdGVtc1tpXSkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBEZXZUb29scy5wcm90b3R5cGUuYWRkU2tpcFRvRW5kcyA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciBpdGVtLCBrZXksIHJlc3VsdHM7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoa2V5IGluIG9iaikge1xuICAgICAgaXRlbSA9IG9ialtrZXldO1xuICAgICAgaWYgKHR5cGVvZiBpdGVtID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIHRoaXMuYWRkU2tpcFRvRW5kcyhpdGVtLCBvYmopO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBpdGVtID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGlmIChpdGVtLm1hdGNoKC8uanNvbi9nKSkge1xuICAgICAgICAgIHJlc3VsdHMucHVzaChvYmouanVtcFRvRW5kID0gdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKHZvaWQgMCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdHMucHVzaCh2b2lkIDApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBEZXZUb29scy5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zdGF0cy5lbmQoKTtcbiAgICB0aGlzLnN0YXRzLmJlZ2luKCk7XG4gICAgcmV0dXJuIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZSk7XG4gIH07XG5cbiAgcmV0dXJuIERldlRvb2xzO1xuXG59KSgpO1xuIiwidmFyIEVwaXNvZGVMb2FkZXI7XG5cbm1vZHVsZS5leHBvcnRzID0gRXBpc29kZUxvYWRlciA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gRXBpc29kZUxvYWRlcihjYWxsYmFjaykge1xuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB0aGlzLmxvYWRFcGlzb2RlKCk7XG4gIH1cblxuICBFcGlzb2RlTG9hZGVyLnByb3RvdHlwZS5sb2FkRXBpc29kZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmxvYWRKc29uKGFyaXN0b3RsZS5lcGlzb2RlUm9vdCArIFwiL21hcC5qc29uXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmNhbGxiYWNrKEpTT04ucGFyc2UoanNvbikpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH07XG5cbiAgRXBpc29kZUxvYWRlci5wcm90b3R5cGUubG9hZEpzb24gPSBmdW5jdGlvbihwYXRoLCBvbkNvbXBsZXRlKSB7XG4gICAgdmFyIHhvYmo7XG4gICAgeG9iaiA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHhvYmoub3ZlcnJpZGVNaW1lVHlwZSgnYXBwbGljYXRpb24vanNvbicpO1xuICAgIHhvYmoub3BlbignR0VUJywgcGF0aCwgdHJ1ZSk7XG4gICAgeG9iai5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHhvYmoucmVhZHlTdGF0ZSA9PT0gNCAmJiB4b2JqLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgcmV0dXJuIG9uQ29tcGxldGUoeG9iai5yZXNwb25zZVRleHQpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pKHRoaXMpO1xuICAgIHJldHVybiB4b2JqLnNlbmQobnVsbCk7XG4gIH07XG5cbiAgcmV0dXJuIEVwaXNvZGVMb2FkZXI7XG5cbn0pKCk7XG4iLCJ2YXIgSGlnaGxpZ2h0ZXI7XG5cbm1vZHVsZS5leHBvcnRzID0gSGlnaGxpZ2h0ZXIgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIEhpZ2hsaWdodGVyKCRlbCkge1xuICAgIHRoaXMuJGVsID0gJGVsO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ2hpZ2hsaWdodCcsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmhpZ2hsaWdodEVsZW1lbnQoZGF0YS5pZCwgZGF0YS5jb2xvcik7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCd1bmhpZ2hsaWdodCcsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnVuSGlnaGxpZ2h0RWxlbWVudChkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9XG5cbiAgSGlnaGxpZ2h0ZXIucHJvdG90eXBlLmhpZ2hsaWdodEVsZW1lbnQgPSBmdW5jdGlvbihlbGVtZW50SWQsIGNvbG9yKSB7XG4gICAgcmV0dXJuICQoXCIjXCIgKyBlbGVtZW50SWQsIHRoaXMuJGVsKS5jc3Moe1xuICAgICAgZmlsdGVyOiBcInVybCgjaGlnaGxpZ2h0KVwiXG4gICAgfSk7XG4gIH07XG5cbiAgSGlnaGxpZ2h0ZXIucHJvdG90eXBlLnVuSGlnaGxpZ2h0RWxlbWVudCA9IGZ1bmN0aW9uKGVsZW1lbnRJZCkge1xuICAgIHJldHVybiAkKFwiI1wiICsgZWxlbWVudElkLCB0aGlzLiRlbCkuY3NzKHtcbiAgICAgIGZpbHRlcjogXCJpbml0aWFsXCJcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gSGlnaGxpZ2h0ZXI7XG5cbn0pKCk7XG4iLCJ2YXIgTGF5ZXIsIFNWR0FuaW1hdGlvbixcbiAgYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH07XG5cblNWR0FuaW1hdGlvbiA9IHJlcXVpcmUoJ21vdmllL3N2Zy1hbmltYXRpb24nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBMYXllciA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gTGF5ZXIoJGVsLCBkZXB0aCkge1xuICAgIHRoaXMuY3JlYXRlQ29udGVudCA9IGJpbmQodGhpcy5jcmVhdGVDb250ZW50LCB0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZSA9IGJpbmQodGhpcy51cGRhdGUsIHRoaXMpO1xuICAgIHRoaXMuJGxheWVyID0gJChqYWRlVGVtcGxhdGVbJ21vdmllL2xheWVyJ10oe1xuICAgICAgZGVwdGg6IGRlcHRoXG4gICAgfSkpO1xuICAgICRlbC5hcHBlbmQodGhpcy4kbGF5ZXIpO1xuICB9XG5cbiAgTGF5ZXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKGxheWVyRGF0YTEpIHtcbiAgICB0aGlzLmxheWVyRGF0YSA9IGxheWVyRGF0YTE7XG4gICAgaWYgKHRoaXMubGF5ZXJEYXRhLndhaXQgIT0gbnVsbCkge1xuICAgICAgc2V0VGltZW91dCh0aGlzLmNyZWF0ZUNvbnRlbnQsIHRoaXMubGF5ZXJEYXRhLndhaXQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jcmVhdGVDb250ZW50KCk7XG4gIH07XG5cbiAgTGF5ZXIucHJvdG90eXBlLmNyZWF0ZUNvbnRlbnQgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5sYXllckRhdGEuY29udGVudCAhPSBudWxsKSB7XG4gICAgICB0aGlzLnVwZGF0ZUNvbnRlbnQodGhpcy5sYXllckRhdGEpO1xuICAgIH1cbiAgICBpZiAodGhpcy5sYXllckRhdGEuZnggIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMudXBkYXRlRWZmZWN0cyh0aGlzLmxheWVyRGF0YS5meCk7XG4gICAgfVxuICB9O1xuXG4gIExheWVyLnByb3RvdHlwZS51cGRhdGVDb250ZW50ID0gZnVuY3Rpb24obGF5ZXJEYXRhKSB7XG4gICAgdmFyIGtpbmQsIG9sZE9uaW9uTGF5ZXI7XG4gICAgaWYgKHRoaXMuY3VycmVudE9uaW9uTGF5ZXIgIT0gbnVsbCkge1xuICAgICAgb2xkT25pb25MYXllciA9IHRoaXMuY3VycmVudE9uaW9uTGF5ZXI7XG4gICAgICBzZXRUaW1lb3V0KChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIG9sZE9uaW9uTGF5ZXIudmVsb2NpdHkoe1xuICAgICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXG4gICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIG9sZE9uaW9uTGF5ZXIucmVtb3ZlKCk7XG4gICAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcImNvbXBsZXRlLi5cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICB9KSh0aGlzKSwgMjAwKTtcbiAgICB9XG4gICAgdGhpcy5jdXJyZW50T25pb25MYXllciA9IHRoaXMuYWRkT25pb25MYXllcigpO1xuICAgIGlmIChsYXllckRhdGEuY29udGVudCA9PT0gXCJjbGVhclwiKSB7XG4gICAgICBraW5kID0gXCJjbGVhclwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBraW5kID0gbGF5ZXJEYXRhLmNvbnRlbnQuc3BsaXQoXCIuXCIpWzFdO1xuICAgIH1cbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgIGNhc2UgXCJqc29uXCI6XG4gICAgICAgIHJldHVybiB0aGlzLmFkZEFuaW1hdGlvbih0aGlzLmN1cnJlbnRPbmlvbkxheWVyLCBsYXllckRhdGEpO1xuICAgICAgY2FzZSBcInN2Z1wiOlxuICAgICAgICByZXR1cm4gdGhpcy5hZGRTdmcodGhpcy5jdXJyZW50T25pb25MYXllciwgbGF5ZXJEYXRhKTtcbiAgICAgIGNhc2UgXCJnaWZcIjpcbiAgICAgIGNhc2UgXCJqcGdcIjpcbiAgICAgIGNhc2UgXCJqcGVnXCI6XG4gICAgICBjYXNlIFwicG5nXCI6XG4gICAgICAgIHJldHVybiB0aGlzLmFkZEltYWdlKHRoaXMuY3VycmVudE9uaW9uTGF5ZXIsIGxheWVyRGF0YS5jb250ZW50LCBsYXllckRhdGEucmVwZWF0LCBsYXllckRhdGEucG9zaXRpb24pO1xuICAgICAgY2FzZSBcImNsZWFyXCI6XG4gICAgICAgIHJldHVybiB0aGlzLmVtcHR5KCk7XG4gICAgfVxuICB9O1xuXG4gIExheWVyLnByb3RvdHlwZS51cGRhdGVFZmZlY3RzID0gZnVuY3Rpb24oZngpIHtcbiAgICB2YXIgZWZmZWN0LCBpLCBsZW4sIHJlZiwgcmVzdWx0cztcbiAgICBpZiAoZnguY2xlYXIpIHtcbiAgICAgIHRoaXMuJGxheWVyLmF0dHIoe1xuICAgICAgICBcImNsYXNzXCI6ICdsYXllcidcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZnguZWZmZWN0cyAhPSBudWxsKSB7XG4gICAgICByZWYgPSBmeC5lZmZlY3RzO1xuICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGVmZmVjdCA9IHJlZltpXTtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMuJGxheWVyLmFkZENsYXNzKGVmZmVjdCkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxuICB9O1xuXG4gIExheWVyLnByb3RvdHlwZS5hZGRBbmltYXRpb24gPSBmdW5jdGlvbigkaG9sZGVyLCBsYXllckRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5hbmltYXRpb24gPSBuZXcgU1ZHQW5pbWF0aW9uKCRob2xkZXIsIGFyaXN0b3RsZS5lcGlzb2RlUm9vdCArIFwiL2FuaW1hdGlvbnMvXCIgKyBsYXllckRhdGEuY29udGVudCwgbGF5ZXJEYXRhKTtcbiAgfTtcblxuICBMYXllci5wcm90b3R5cGUuYWRkU3ZnID0gZnVuY3Rpb24oJGhvbGRlciwgbGF5ZXJEYXRhKSB7XG4gICAgcmV0dXJuICRob2xkZXIubG9hZChhcmlzdG90bGUuZXBpc29kZVJvb3QgKyBcIi9hc3NldHMvXCIgKyBsYXllckRhdGEuY29udGVudCk7XG4gIH07XG5cbiAgTGF5ZXIucHJvdG90eXBlLmFkZEltYWdlID0gZnVuY3Rpb24oJGhvbGRlciwgZmlsZSwgcmVwZWF0LCBwb3NpdGlvbikge1xuICAgIGlmIChyZXBlYXQgPT0gbnVsbCkge1xuICAgICAgcmVwZWF0ID0gXCJuby1yZXBlYXRcIjtcbiAgICB9XG4gICAgaWYgKHBvc2l0aW9uID09IG51bGwpIHtcbiAgICAgIHBvc2l0aW9uID0gXCJsZWZ0XCI7XG4gICAgfVxuICAgIHJldHVybiAkaG9sZGVyLmNzcyh7XG4gICAgICBiYWNrZ3JvdW5kOiBcInVybChcIiArIGFyaXN0b3RsZS5lcGlzb2RlUm9vdCArIFwiL2Fzc2V0cy9cIiArIGZpbGUgKyBcIikgXCIgKyByZXBlYXQgKyBcIiBcIiArIHBvc2l0aW9uXG4gICAgfSk7XG4gIH07XG5cbiAgTGF5ZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kbGF5ZXIucmVtb3ZlKCk7XG4gIH07XG5cbiAgTGF5ZXIucHJvdG90eXBlLmFkZE9uaW9uTGF5ZXIgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgJG9uaW9uTGF5ZXI7XG4gICAgJG9uaW9uTGF5ZXIgPSAkKGphZGVUZW1wbGF0ZVsnbW92aWUvb25pb24tbGF5ZXInXSh7fSkpO1xuICAgIHRoaXMuJGxheWVyLnByZXBlbmQoJG9uaW9uTGF5ZXIpO1xuICAgIHJldHVybiAkb25pb25MYXllcjtcbiAgfTtcblxuICBMYXllci5wcm90b3R5cGUuZW1wdHkgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kbGF5ZXIuZW1wdHkoKTtcbiAgfTtcblxuICByZXR1cm4gTGF5ZXI7XG5cbn0pKCk7XG4iLCJ2YXIgSGlnaGxpZ2h0ZXIsIExheWVyLCBNb3ZpZTtcblxuTGF5ZXIgPSByZXF1aXJlKCdtb3ZpZS9MYXllcicpO1xuXG5IaWdobGlnaHRlciA9IHJlcXVpcmUoJ21vdmllL0hpZ2hsaWdodGVyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTW92aWUgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIE1vdmllKCRlbCkge1xuICAgIHRoaXMuJGVsID0gJGVsO1xuICAgIHRoaXMuJHdyYXBwZXIgPSAkKCcud3JhcHBlcicsIHRoaXMuJGVsKTtcbiAgICB0aGlzLmxheWVycyA9IFtdO1xuICAgIHRoaXMuaGlnaGxpZ2h0ZXIgPSBuZXcgSGlnaGxpZ2h0ZXIodGhpcy4kd3JhcHBlcik7XG4gICAgUHViU3ViLnN1YnNjcmliZSgnbW92aWUubG9hZC1sYXllcicsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmFkZExheWVyKGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgUHViU3ViLnN1YnNjcmliZSgnbW92aWUuem9vbScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnpvb20oZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgfVxuXG4gIE1vdmllLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBqLCBsYXllciwgbGVuLCByZWY7XG4gICAgcmVmID0gdGhpcy5sYXllcnM7XG4gICAgZm9yIChqID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICBsYXllciA9IHJlZltqXTtcbiAgICAgIGxheWVyLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubGF5ZXJzID0gW107XG4gIH07XG5cbiAgTW92aWUucHJvdG90eXBlLnBvcHVsYXRlID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciBkZXB0aElkLCBsYXllckRhdGEsIHJlZjtcbiAgICBpZiAoZGF0YSA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJlZiA9IGRhdGEubGF5ZXJzO1xuICAgIGZvciAoZGVwdGhJZCBpbiByZWYpIHtcbiAgICAgIGxheWVyRGF0YSA9IHJlZltkZXB0aElkXTtcbiAgICAgIHRoaXMuYWRkTGF5ZXIobGF5ZXJEYXRhKTtcbiAgICB9XG4gICAgaWYgKGRhdGEuem9vbSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy56b29tKGRhdGEuem9vbSk7XG4gICAgfVxuICB9O1xuXG4gIE1vdmllLnByb3RvdHlwZS56b29tID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciBwb3M7XG4gICAgaWYgKGRhdGEuaWQgIT0gbnVsbCkge1xuICAgICAgcG9zID0gJChcIiNcIiArIGRhdGEuaWQpLm9mZnNldCgpO1xuICAgICAgcmV0dXJuIHRoaXMuem9vbVRvKGRhdGEuc2NhbGUsIHBvcy5sZWZ0LCBwb3MudG9wKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuem9vbVRvKGRhdGEuc2NhbGUsIGRhdGEueCwgZGF0YS55KTtcbiAgICB9XG4gIH07XG5cbiAgTW92aWUucHJvdG90eXBlLnpvb21UbyA9IGZ1bmN0aW9uKHNjYWxlLCB4LCB5KSB7XG4gICAgaWYgKHNjYWxlID09IG51bGwpIHtcbiAgICAgIHNjYWxlID0gMTtcbiAgICB9XG4gICAgaWYgKHggPT0gbnVsbCkge1xuICAgICAgeCA9IDA7XG4gICAgfVxuICAgIGlmICh5ID09IG51bGwpIHtcbiAgICAgIHkgPSAwO1xuICAgIH1cbiAgICB0aGlzLiRlbC5jc3Moe1xuICAgICAgXCJ0cmFuc2Zvcm0tb3JpZ2luXCI6IHggKyBcInB4IFwiICsgeSArIFwicHhcIlxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLiRlbC5jc3Moe1xuICAgICAgdHJhbnNmb3JtOiBcInNjYWxlKFwiICsgc2NhbGUgKyBcIilcIlxuICAgIH0pO1xuICB9O1xuXG4gIE1vdmllLnByb3RvdHlwZS5hZGRMYXllciA9IGZ1bmN0aW9uKGxheWVyRGF0YSkge1xuICAgIHZhciBkZXB0aCwgaSwgaiwgbGF5ZXIsIHJlZiwgcmVmMTtcbiAgICBkZXB0aCA9IGxheWVyRGF0YS5kZXB0aDtcbiAgICBpZiAoZGVwdGggPiB0aGlzLmxheWVycy5sZW5ndGgpIHtcbiAgICAgIGZvciAoaSA9IGogPSByZWYgPSB0aGlzLmxheWVycy5sZW5ndGgsIHJlZjEgPSBkZXB0aDsgcmVmIDw9IHJlZjEgPyBqIDw9IHJlZjEgOiBqID49IHJlZjE7IGkgPSByZWYgPD0gcmVmMSA/ICsraiA6IC0taikge1xuICAgICAgICB0aGlzLmxheWVyc1tpXSA9IG5ldyBMYXllcih0aGlzLiR3cmFwcGVyLCBpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGF5ZXIgPSB0aGlzLmdldE9yQ3JlYXRlTGF5ZXIoZGVwdGgpO1xuICAgIHJldHVybiBsYXllci51cGRhdGUobGF5ZXJEYXRhKTtcbiAgfTtcblxuICBNb3ZpZS5wcm90b3R5cGUuZ2V0T3JDcmVhdGVMYXllciA9IGZ1bmN0aW9uKGRlcHRoKSB7XG4gICAgdmFyIGxheWVyO1xuICAgIGlmICh0aGlzLmxheWVyc1tkZXB0aF0gIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMubGF5ZXJzW2RlcHRoXTtcbiAgICB9XG4gICAgbGF5ZXIgPSBuZXcgTGF5ZXIodGhpcy4kd3JhcHBlciwgZGVwdGgpO1xuICAgIHRoaXMubGF5ZXJzW2RlcHRoXSA9IGxheWVyO1xuICAgIHJldHVybiBsYXllcjtcbiAgfTtcblxuICByZXR1cm4gTW92aWU7XG5cbn0pKCk7XG4iLCJ2YXIgU1ZHQW5pbWF0aW9uLFxuICBiaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBTVkdBbmltYXRpb24gPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIFNWR0FuaW1hdGlvbihlbCwganNvbiwgZGF0YSkge1xuICAgIHRoaXMucGxheSA9IGJpbmQodGhpcy5wbGF5LCB0aGlzKTtcbiAgICB2YXIgaW50ZXJ2YWw7XG4gICAgaWYgKGRhdGEubG9vcCA9PSBudWxsKSB7XG4gICAgICBkYXRhLmxvb3AgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5hbmltYXRpb24gPSBib2R5bW92aW4ubG9hZEFuaW1hdGlvbih7XG4gICAgICB3cmFwcGVyOiBlbFswXSxcbiAgICAgIGFuaW1UeXBlOiAnc3ZnJyxcbiAgICAgIGxvb3A6IGRhdGEubG9vcCxcbiAgICAgIHByZXJlbmRlcjogdHJ1ZSxcbiAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgIHBhdGg6IGpzb25cbiAgICB9KTtcbiAgICBpZiAoZGF0YS5qdW1wVG9FbmQgIT0gbnVsbCkge1xuICAgICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmIChfdGhpcy5hbmltYXRpb24udG90YWxGcmFtZXMgIT09IDApIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmFuaW1hdGlvbi5zZXRDdXJyZW50UmF3RnJhbWVWYWx1ZShfdGhpcy5hbmltYXRpb24udG90YWxGcmFtZXMpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0pKHRoaXMpLCAxMDApO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoZGF0YS5kZWxheSAhPSBudWxsKSB7XG4gICAgICAgIHNldFRpbWVvdXQodGhpcy5wbGF5LCBkYXRhLmRlbGF5KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGxheSgpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmFkZEV2ZW50cyhkYXRhKTtcbiAgfVxuXG4gIFNWR0FuaW1hdGlvbi5wcm90b3R5cGUuYWRkRXZlbnRzID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciBldmVudCwgaSwgbGVuLCByZWYsIHJlc3VsdHM7XG4gICAgaWYgKGRhdGEuZXZlbnRzICE9IG51bGwpIHtcbiAgICAgIHJlZiA9IGRhdGEuZXZlbnRzO1xuICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGV2ZW50ID0gcmVmW2ldO1xuICAgICAgICByZXN1bHRzLnB1c2godGhpcy5hbmltYXRpb24uYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgX3RoaXMuYW5pbWF0aW9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQpO1xuICAgICAgICAgICAgcmV0dXJuIFB1YlN1Yi5wdWJsaXNoKFwibGF5ZXIuXCIgKyBkYXRhLmRlcHRoICsgXCIuXCIgKyBldmVudCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSkodGhpcykpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH1cbiAgfTtcblxuICBTVkdBbmltYXRpb24ucHJvdG90eXBlLnBsYXkgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5hbmltYXRpb24ucGxheSgpO1xuICB9O1xuXG4gIFNWR0FuaW1hdGlvbi5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmFuaW1hdGlvbi5zdG9wKCk7XG4gIH07XG5cbiAgU1ZHQW5pbWF0aW9uLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5hbmltYXRpb24uZGVzdHJveSgpO1xuICAgIGlmICh0aGlzLmludGVydmFsICE9IG51bGwpIHtcbiAgICAgIHJldHVybiBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xuICAgIH1cbiAgfTtcblxuICBTVkdBbmltYXRpb24ucHJvdG90eXBlLnRyYWNlRnJhbWVzID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKF90aGlzLmFuaW1hdGlvbi5jdXJyZW50UmF3RnJhbWUsIF90aGlzLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUsIF90aGlzLmFuaW1hdGlvbi50b3RhbEZyYW1lcyk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpLCA1MDApO1xuICB9O1xuXG4gIHJldHVybiBTVkdBbmltYXRpb247XG5cbn0pKCk7XG4iLCJ2YXIgQ29tcG9uZW50O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudCA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gQ29tcG9uZW50KCRlbCwgJG5vZGUpIHtcbiAgICB0aGlzLiRub2RlID0gJG5vZGU7XG4gICAgJGVsLmFwcGVuZCh0aGlzLiRub2RlKTtcbiAgICBzaGFkb3dJY29uc0luc3RhbmNlLnN2Z1JlcGxhY2VXaXRoU3RyaW5nKHB4U3ZnSWNvblN0cmluZywgdGhpcy4kbm9kZSk7XG4gIH1cblxuICBDb21wb25lbnQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kbm9kZS5yZW1vdmUoKTtcbiAgfTtcblxuICByZXR1cm4gQ29tcG9uZW50O1xuXG59KSgpO1xuIiwidmFyIENvbXBvbmVudCwgU2VsZWN0aW9uRGlhbG9ndWUsXG4gIGV4dGVuZCA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoaGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfSxcbiAgaGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5Db21wb25lbnQgPSByZXF1aXJlKCdzbGlkZS11eC9jb21wb25lbnRzL2NvbXBvbmVudCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNlbGVjdGlvbkRpYWxvZ3VlID0gKGZ1bmN0aW9uKHN1cGVyQ2xhc3MpIHtcbiAgZXh0ZW5kKFNlbGVjdGlvbkRpYWxvZ3VlLCBzdXBlckNsYXNzKTtcblxuICBmdW5jdGlvbiBTZWxlY3Rpb25EaWFsb2d1ZSgkZWwsIGRhdGEpIHtcbiAgICB2YXIgamFkZURhdGE7XG4gICAgamFkZURhdGEgPSB0aGlzLmdlbmVyYXRlQ29uZmlnRGF0YShkYXRhKTtcbiAgICB0aGlzLiRub2RlID0gJChqYWRlVGVtcGxhdGVbJ3NsaWRlLXV4L2NvbXBvbmVudHMvc2VsZWN0aW9uLWRpYWxvZ3VlJ10oamFkZURhdGEpKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKHRoaXMuJG5vZGUsIGRhdGEpO1xuICAgIFNlbGVjdGlvbkRpYWxvZ3VlLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsICRlbCwgdGhpcy4kbm9kZSk7XG4gIH1cblxuICBTZWxlY3Rpb25EaWFsb2d1ZS5wcm90b3R5cGUuZ2VuZXJhdGVDb25maWdEYXRhID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciBpLCBpdGVtLCBqLCBqYWRlRGF0YSwgbGVuLCByZWY7XG4gICAgdGhpcy5pdGVtcyA9IHt9O1xuICAgIGphZGVEYXRhID0ge307XG4gICAgamFkZURhdGEudGl0bGUgPSBkYXRhLnRpdGxlO1xuICAgIGphZGVEYXRhLnN1YlRpdGxlID0gZGF0YS5zdWJUaXRsZTtcbiAgICBqYWRlRGF0YS5idG5UeHQgPSBkYXRhLnN1Ym1pdEJ0bi50eHQ7XG4gICAgamFkZURhdGEuYnRuSWNvbiA9IGRhdGEuc3VibWl0QnRuLmljb247XG4gICAgamFkZURhdGEuaW50cm8gPSBkYXRhLmludHJvO1xuICAgIGphZGVEYXRhLml0ZW1zID0gW107XG4gICAgcmVmID0gZGF0YS5pdGVtcztcbiAgICBmb3IgKGkgPSBqID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaiA8IGxlbjsgaSA9ICsraikge1xuICAgICAgaXRlbSA9IHJlZltpXTtcbiAgICAgIGl0ZW0uaWQgPSBcIml0ZW1cIiArIGk7XG4gICAgICBqYWRlRGF0YS5pdGVtcy5wdXNoKHtcbiAgICAgICAgdHh0OiBpdGVtLmJ0blR4dCxcbiAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgIGljb246IGl0ZW0uaWNvblxuICAgICAgfSk7XG4gICAgICB0aGlzLml0ZW1zW2l0ZW0uaWRdID0gaXRlbTtcbiAgICB9XG4gICAgcmV0dXJuIGphZGVEYXRhO1xuICB9O1xuXG4gIFNlbGVjdGlvbkRpYWxvZ3VlLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVycyA9IGZ1bmN0aW9uKCRlbCwgZGF0YSkge1xuICAgIHZhciAkYnV0dG9ucztcbiAgICAkYnV0dG9ucyA9ICQoXCIuYnV0dG9uXCIsICRlbCk7XG4gICAgJGJ1dHRvbnMub24oXCJjbGlja1wiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICAgIHZhciAkdGFyZztcbiAgICAgICAgJHRhcmcgPSAkKGUudGFyZ2V0KTtcbiAgICAgICAgcmV0dXJuIF90aGlzLmFjdGl2YXRlSXRlbSgkdGFyZywgX3RoaXMuaXRlbXNbJHRhcmcuYXR0cignaWQnKV0pO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgcmV0dXJuICQoXCIjYWN0aW9uLWJ0blwiLCAkZWwpLm9uKFwiY2xpY2tcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgICB2YXIgYWN0aW9uLCBqLCBsZW4sIHJlZjtcbiAgICAgICAgcmVmID0gZGF0YS5jbGljaztcbiAgICAgICAgZm9yIChqID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgICAgYWN0aW9uID0gcmVmW2pdO1xuICAgICAgICAgIFB1YlN1Yi5wdWJsaXNoKGFjdGlvbi5jbWQsIGFjdGlvbi5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXMuZGVzdHJveSgpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH07XG5cbiAgU2VsZWN0aW9uRGlhbG9ndWUucHJvdG90eXBlLmFjdGl2YXRlSXRlbSA9IGZ1bmN0aW9uKCRidXR0b24sIGl0ZW0pIHtcbiAgICAkKFwiLmludHJvXCIsIHRoaXMuJG5vZGUpLmNzcyh7XG4gICAgICBkaXNwbGF5OiBcIm5vbmVcIlxuICAgIH0pO1xuICAgICQoXCIuaXRlbS1pbmZvXCIsIHRoaXMuJG5vZGUpLmNzcyh7XG4gICAgICBkaXNwbGF5OiBcImJsb2NrXCJcbiAgICB9KTtcbiAgICAkKFwiLmJ1dHRvblwiLCB0aGlzLiRub2RlKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAkYnV0dG9uLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgICQoXCIuaWNvblwiLCB0aGlzLiRub2RlKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAkKFwiI2ljb24tXCIgKyBpdGVtLmlkLCB0aGlzLiRub2RlKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAkKFwiLmJsdXJiXCIsIHRoaXMuJG5vZGUpLmh0bWwoaXRlbS5ibHVyYik7XG4gICAgJChcIi5kZXRhaWxzXCIsIHRoaXMuJG5vZGUpLmh0bWwoaXRlbS5kZXRhaWxzKTtcbiAgICByZXR1cm4gUHViU3ViLnB1Ymxpc2goaXRlbS5jbGljay5jbWQsIGl0ZW0uY2xpY2suZGF0YSk7XG4gIH07XG5cbiAgcmV0dXJuIFNlbGVjdGlvbkRpYWxvZ3VlO1xuXG59KShDb21wb25lbnQpO1xuIiwidmFyIEF1ZGlvVHJhY2ssIEN0YW5sZWUsIFNlcXVlbmNlO1xuXG5BdWRpb1RyYWNrID0gcmVxdWlyZSgnZXBpc29kZS9hdWRpby10cmFjaycpO1xuXG5TZXF1ZW5jZSA9IHJlcXVpcmUoJ21pc2Mvc2VxdWVuY2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBDdGFubGVlID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBDdGFubGVlKCRwYXJlbnQpIHtcbiAgICBhcmlzdG90bGUuY3RhbmxlZSA9IHRoaXM7XG4gICAgdGhpcy4kZWwgPSAkKGphZGVUZW1wbGF0ZVsnc2xpZGUtdXgvY3RhbmxlZS9jdGFubGVlJ10oe30pKTtcbiAgICBzaGFkb3dJY29uc0luc3RhbmNlLnN2Z1JlcGxhY2VXaXRoU3RyaW5nKHB4U3ZnSWNvblN0cmluZywgdGhpcy4kZWwpO1xuICAgIHRoaXMuJHNwZWVjaEJveCA9ICQoXCIuc3BlZWNoLWJveFwiLCB0aGlzLiRlbCk7XG4gICAgdGhpcy4kdGV4dCA9ICQoXCIudGV4dCBzcGFuLmNvbnRlbnRcIiwgdGhpcy4kc3BlZWNoQm94KTtcbiAgICB0aGlzLiRuZXh0QnRuID0gJChcIi50ZXh0IHNwYW4ubmV4dFwiLCB0aGlzLiRzcGVlY2hCb3gpO1xuICAgIHRoaXMuJG5leHRCdG4ub24oXCJjbGlja1wiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnBsYXlOZXh0QWN0aW9uKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCdjdGFubGVlLmFjdGl2YXRlJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oYSwgYWN0aW9uKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5wbGF5QWN0aW9uKGFjdGlvbik7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCdjdGFubGVlLmNsZWFyJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oYSwgYWN0aW9uKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5oaWRlVGV4dCgpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgUHViU3ViLnN1YnNjcmliZSgnY3RhbmxlZS5nb2hvbWUnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihhLCBhY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnJldHVyblRvU3RhdGlvbigpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgJHBhcmVudC5hcHBlbmQodGhpcy4kZWwpO1xuICAgIHRoaXMucmV0dXJuVG9TdGF0aW9uKCk7XG4gIH1cblxuICBDdGFubGVlLnByb3RvdHlwZS5hY3RpdmF0ZSA9IGZ1bmN0aW9uKGRhdGExKSB7XG4gICAgdGhpcy5kYXRhID0gZGF0YTE7XG4gICAgaWYgKHRoaXMuZGF0YS50aW1lbGluZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudGltZWxpbmUgPSB0aGlzLmRhdGEudGltZWxpbmU7XG4gICAgdGhpcy5zZXF1ZW5jZSA9IG5ldyBTZXF1ZW5jZSh0aGlzLnRpbWVsaW5lKTtcbiAgICByZXR1cm4gdGhpcy5wbGF5QWN0aW9uKHRoaXMuc2VxdWVuY2UuZ2V0Q3VycmVudEl0ZW0oKS5hY3Rpb24pO1xuICB9O1xuXG4gIEN0YW5sZWUucHJvdG90eXBlLnNheSA9IGZ1bmN0aW9uKHRleHQsIGF1ZGlvLCBuZXh0KSB7XG4gICAgaWYgKHRleHQgIT0gbnVsbCkge1xuICAgICAgdGhpcy5zaG93VGV4dCgpO1xuICAgICAgdGhpcy4kdGV4dC5odG1sKHRleHQpO1xuICAgIH1cbiAgICBpZiAoYXVkaW8gIT0gbnVsbCkge1xuICAgICAgaWYgKHRoaXMudHJhY2sgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLnRyYWNrLnN0b3AoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudHJhY2sgPSBuZXcgQXVkaW9UcmFjayhhdWRpbyk7XG4gICAgICB0aGlzLnRyYWNrLnBsYXkoKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAobmV4dCA9PT0gJ2F1ZGlvJykge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLnBsYXlOZXh0QWN0aW9uKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfSkodGhpcykpO1xuICAgIH1cbiAgICBpZiAobmV4dCA9PT0gJ2NsaWNrJykge1xuICAgICAgcmV0dXJuIHRoaXMuc2hvd05leHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuaGlkZU5leHQoKTtcbiAgICB9XG4gIH07XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUuc2V0RW1vdGlvbiA9IGZ1bmN0aW9uKGVtb3Rpb24pIHt9O1xuXG4gIEN0YW5sZWUucHJvdG90eXBlLmdvdG9Qb3MgPSBmdW5jdGlvbih4LCB5LCBkdXJhdGlvbiwgZGVsYXkpIHtcbiAgICBpZiAoeCA9PSBudWxsKSB7XG4gICAgICB4ID0gOTcwO1xuICAgIH1cbiAgICBpZiAoeSA9PSBudWxsKSB7XG4gICAgICB5ID0gMTA7XG4gICAgfVxuICAgIGlmIChkdXJhdGlvbiA9PSBudWxsKSB7XG4gICAgICBkdXJhdGlvbiA9IDYwMDtcbiAgICB9XG4gICAgaWYgKGRlbGF5ID09IG51bGwpIHtcbiAgICAgIGRlbGF5ID0gMDtcbiAgICB9XG4gICAgdGhpcy4kZWwudmVsb2NpdHkoXCJzdG9wXCIsIHRydWUpO1xuICAgIHJldHVybiB0aGlzLiRlbC52ZWxvY2l0eSh7XG4gICAgICB0b3A6IHksXG4gICAgICBsZWZ0OiB4XG4gICAgfSwge1xuICAgICAgZGVsYXk6IGRlbGF5LFxuICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgZWFzaW5nOiBcImVhc2VJbk91dFF1aW50XCJcbiAgICB9KTtcbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5nb3RvSXRlbSA9IGZ1bmN0aW9uKGlkKSB7XG4gICAgdmFyIHBvcztcbiAgICBwb3MgPSAkKFwiI1wiICsgaWQpLm9mZnNldCgpO1xuICAgIHJldHVybiB0aGlzLmdvdG9Qb3MocG9zLmxlZnQgLSAxMDAsIHBvcy50b3AgLSA4MCk7XG4gIH07XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUuZ290byA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBpZiAodHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHJldHVybiB0aGlzLmdvdG9JdGVtKGRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5nb3RvUG9zKGRhdGFbMF0sIGRhdGFbMV0sIGRhdGFbMl0sIGRhdGFbM10pO1xuICAgIH1cbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5wbGF5TmV4dEFjdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLnRyYWNrICE9IG51bGwpIHtcbiAgICAgIHRoaXMudHJhY2suc3RvcCgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zZXF1ZW5jZS5pc0F0TGFzdEl0ZW0oKSkge1xuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXF1ZW5jZS5uZXh0KCk7XG4gICAgICByZXR1cm4gdGhpcy5wbGF5QWN0aW9uKHRoaXMuc2VxdWVuY2UuZ2V0Q3VycmVudEl0ZW0oKS5hY3Rpb24pO1xuICAgIH1cbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5wbGF5QWN0aW9uID0gZnVuY3Rpb24oYWN0aW9uSWQpIHtcbiAgICB2YXIgYWN0aW9uLCBpdGVtLCBqLCBsZW4sIHJlZjtcbiAgICB0aGlzLnNldEZpbHRlcignYmxhY2stZ2xvdycpO1xuICAgIGFjdGlvbiA9IHRoaXMub3ZlcmxheURlZmF1bHRzKGFjdGlvbklkKTtcbiAgICBpZiAoYWN0aW9uLmVtbyAhPSBudWxsKSB7XG4gICAgICB0aGlzLnNldEVtb3Rpb24oYWN0aW9uLmVtbyk7XG4gICAgfVxuICAgIGlmIChhY3Rpb24ucG9zICE9IG51bGwpIHtcbiAgICAgIHRoaXMuZ290byhhY3Rpb24ucG9zKTtcbiAgICB9XG4gICAgaWYgKGFjdGlvbi5hY3Rpb24gIT0gbnVsbCkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYWN0aW9uLmFjdGlvbikpIHtcbiAgICAgICAgcmVmID0gYWN0aW9uLmFjdGlvbjtcbiAgICAgICAgZm9yIChqID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgICAgaXRlbSA9IHJlZltqXTtcbiAgICAgICAgICBQdWJTdWIucHVibGlzaChpdGVtLmNtZCwgaXRlbS5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgUHViU3ViLnB1Ymxpc2goYWN0aW9uLmFjdGlvbi5jbWQsIGFjdGlvbi5hY3Rpb24uZGF0YSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnNheShhY3Rpb24udGV4dCwgYWN0aW9uLmF1ZGlvLCBhY3Rpb24ubmV4dCk7XG4gIH07XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnJldHVyblRvU3RhdGlvbigpO1xuICAgIHJldHVybiBQdWJTdWIucHVibGlzaCgnY3RhbmxlZS5jb21wbGV0ZScpO1xuICB9O1xuXG4gIEN0YW5sZWUucHJvdG90eXBlLnJldHVyblRvU3RhdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaGlkZVRleHQoKTtcbiAgICB0aGlzLmdvdG9Qb3MoKTtcbiAgICByZXR1cm4gdGhpcy5zZXRGaWx0ZXIoJ2dsb3cnKTtcbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5zaG93VGV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRzcGVlY2hCb3guY3NzKHtcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBcInBvaW50ZXItZXZlbnRzXCI6IFwiYWxsXCJcbiAgICB9KTtcbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5oaWRlVGV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRzcGVlY2hCb3guY3NzKHtcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICBcInBvaW50ZXItZXZlbnRzXCI6IFwibm9uZVwiXG4gICAgfSk7XG4gIH07XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUuc2hvd05leHQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kbmV4dEJ0bi5jc3Moe1xuICAgICAgb3BhY2l0eTogMSxcbiAgICAgICdwb2ludGVyLWV2ZW50cyc6ICdhbGwnXG4gICAgfSk7XG4gIH07XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUuaGlkZU5leHQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kbmV4dEJ0bi5jc3Moe1xuICAgICAgb3BhY2l0eTogMCxcbiAgICAgICdwb2ludGVyLWV2ZW50cyc6ICdub25lJ1xuICAgIH0pO1xuICB9O1xuXG4gIEN0YW5sZWUucHJvdG90eXBlLnNldEZpbHRlciA9IGZ1bmN0aW9uKGtpbmQpIHtcbiAgICByZXR1cm4gJCgnI2N0YW5sZWUnKS5jc3Moe1xuICAgICAgZmlsdGVyOiBcInVybCgnI1wiICsga2luZCArIFwiJylcIlxuICAgIH0pO1xuICB9O1xuXG4gIEN0YW5sZWUucHJvdG90eXBlLmdldEluZGV4T2ZBY3Rpb24gPSBmdW5jdGlvbihhY3Rpb24pIHtcbiAgICB2YXIgZGF0YSwgaSwgaiwgbGVuLCByZWY7XG4gICAgaWYgKHRoaXMudGltZWxpbmUgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIHJlZiA9IHRoaXMudGltZWxpbmU7XG4gICAgZm9yIChpID0gaiA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGogPCBsZW47IGkgPSArK2opIHtcbiAgICAgIGRhdGEgPSByZWZbaV07XG4gICAgICBpZiAoZGF0YS5hY3Rpb24gPT09IGFjdGlvbikge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUub3ZlcmxheURlZmF1bHRzID0gZnVuY3Rpb24oYWN0aW9uSWQpIHtcbiAgICB2YXIgYWN0aW9ucywga2V5LCByZWYsIHZhbDtcbiAgICBpZiAodGhpcy5kYXRhLmRlZmF1bHRzID09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLmRhdGEuYWN0aW9uc1thY3Rpb25JZF07XG4gICAgfVxuICAgIGFjdGlvbnMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YS5kZWZhdWx0cykpO1xuICAgIHJlZiA9IHRoaXMuZGF0YS5hY3Rpb25zW2FjdGlvbklkXTtcbiAgICBmb3IgKGtleSBpbiByZWYpIHtcbiAgICAgIHZhbCA9IHJlZltrZXldO1xuICAgICAgYWN0aW9uc1trZXldID0gdmFsO1xuICAgIH1cbiAgICByZXR1cm4gYWN0aW9ucztcbiAgfTtcblxuICByZXR1cm4gQ3RhbmxlZTtcblxufSkoKTtcbiIsInZhciBDdGFubGVlLCBTZWxlY3Rpb25EaWFsb2d1ZSwgU2xpZGVVWDtcblxuQ3RhbmxlZSA9IHJlcXVpcmUoJ3NsaWRlLXV4L2N0YW5sZWUvQ3RhbmxlZScpO1xuXG5TZWxlY3Rpb25EaWFsb2d1ZSA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvc2VsZWN0aW9uLWRpYWxvZ3VlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2xpZGVVWCA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gU2xpZGVVWCgkZWwpIHtcbiAgICB0aGlzLiRlbCA9ICRlbDtcbiAgICB0aGlzLmN0YW5sZWUgPSBuZXcgQ3RhbmxlZSh0aGlzLiRlbCk7XG4gIH1cblxuICBTbGlkZVVYLnByb3RvdHlwZS5wb3B1bGF0ZSA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2YXIgY29tcG9uZW50LCBpLCBsZW4sIHJlZiwgcmVzdWx0cztcbiAgICBpZiAoKGRhdGEgIT0gbnVsbCA/IGRhdGEuY29tcG9uZW50cyA6IHZvaWQgMCkgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZWYgPSBkYXRhLmNvbXBvbmVudHM7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgY29tcG9uZW50ID0gcmVmW2ldO1xuICAgICAgcmVzdWx0cy5wdXNoKHRoaXMuYWRkQ29tcG9uZW50KGNvbXBvbmVudCkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBTbGlkZVVYLnByb3RvdHlwZS5hZGRDb21wb25lbnQgPSBmdW5jdGlvbihjb21wb25lbnREYXRhKSB7XG4gICAgdmFyIGNvbXBvbmVudDtcbiAgICBzd2l0Y2ggKGNvbXBvbmVudERhdGEua2luZCkge1xuICAgICAgY2FzZSBcInNlbGVjdGlvbi1kaWFsb2d1ZVwiOlxuICAgICAgICByZXR1cm4gY29tcG9uZW50ID0gbmV3IFNlbGVjdGlvbkRpYWxvZ3VlKHRoaXMuJGVsLCBjb21wb25lbnREYXRhLmNvbmZpZyk7XG4gICAgICBjYXNlIFwiZGlhbG9ndWVcIjpcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudCA9IG5ldyBEaWFsb2d1ZSh0aGlzLiRlbCwgY29tcG9uZW50RGF0YS5jb25maWcpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gU2xpZGVVWDtcblxufSkoKTtcbiJdfQ==

var aristotle;

aristotle = new Aristotle($(".holder"), "/episodes/episode1");
