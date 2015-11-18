jadeTemplate = {};
jadeTemplate['aristotle'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"aristotle\"><div class=\"chrome\"></div><div class=\"movie\"><div class=\"wrapper\"></div></div><div class=\"slide-ux\"></div></div>");;return buf.join("");
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

var pxSymbolString = pxSymbolString || ''; pxSymbolString+='<symbol  id="New_Symbol" viewBox="-10.3 -10.3 20.6 20.6">	<polygon class="st15" points="9.8,-9.8 -9.8,-9.8 -9.8,9.8 9.8,9.8 	"/></symbol>';
var pxSvgIconString = pxSvgIconString || ''; pxSvgIconString+='<g id="first" class="aristotle-svg-svg ">			<use xlink:href="#New_Symbol"  width="20.6" height="20.6" x="-10.3" y="-10.3" transform="matrix(0.7046 0 0 -0.7046 11.2573 11.2573)" style="overflow:visible;"/></g><g id="ep4-badge" class="aristotle-svg-svg ">	<g  class="white " >		<path id="XMLID_93_" class="st16" d="M15.541,22.266h3.187c3.539,0,3.186-4.248,3.186-4.248H10.799v7.08l7.221,1.982"/><polyline id="XMLID_92_" class="st16" points="16.178,22.266 25.594,22.266 25.594,13.558 10.726,13.558 10.726,19.434 		"/><line id="XMLID_91_" class="st16" x1="21.842" y1="22.266" x2="21.842" y2="13.558"/><line id="XMLID_90_" class="st16" x1="23.611" y1="27.01" x2="23.611" y2="22.408"/><line id="XMLID_89_" class="st16" x1="18.16" y1="17.664" x2="18.16" y2="13.558"/><line id="XMLID_88_" class="st16" x1="14.479" y1="17.664" x2="14.479" y2="13.558"/></g>	<g id="XMLID_94_" class="aristotle-svg-svg ">		<path class="st7" d="M18.16,6.407l12.035,6.301v13.735L18.16,32.744L6.123,26.443V12.708L18.16,6.407 M18.16,4L4,11.434v16.355			l14.16,7.434l14.16-7.434V11.434L18.16,4L18.16,4z"/></g></g><g id="ep3-badge" class="aristotle-svg-svg ">	<g  class="white " >		<polyline id="XMLID_74_" class="st3" points="8.389,14.478 18.16,9.38 27.859,14.478 27.859,19.363 18.16,24.461 		"/><polyline id="XMLID_73_" class="st3" points="27.859,19.08 27.859,23.895 18.16,28.992 		"/><line id="XMLID_72_" class="st16" x1="27.859" y1="24.319" x2="27.859" y2="28.78"/><line id="XMLID_71_" class="st3" x1="27.293" y1="14.903" x2="18.16" y2="19.717"/></g>	<g>		<g id="XMLID_69_" class="aristotle-svg-svg ">			<g>				<path class="st7" d="M6.124,14.974l9.912,5.168v11.541l-9.912-5.168V14.974 M4,11.434v16.355l14.16,7.434l0,0V18.868L4,11.434					L4,11.434L4,11.434z"/></g>		</g>		<path id="XMLID_68_" class="st7" d="M25.806,18.372c-0.071,0.425-0.425,0.708-0.779,0.708s-0.566-0.283-0.496-0.708			c0.07-0.425,0.425-0.708,0.779-0.708C25.735,17.664,25.877,17.947,25.806,18.372z"/><path id="XMLID_67_" class="st7" d="M25.806,22.903c-0.071,0.425-0.425,0.708-0.779,0.708s-0.566-0.283-0.496-0.708			c0.07-0.425,0.425-0.708,0.779-0.708S25.877,22.549,25.806,22.903z"/><path id="XMLID_66_" class="st7" d="M25.806,27.647c-0.071,0.425-0.425,0.708-0.779,0.708s-0.566-0.283-0.496-0.708			c0.07-0.425,0.425-0.708,0.779-0.708C25.735,26.939,25.877,27.222,25.806,27.647z"/><g id="XMLID_59_" class="aristotle-svg-svg ">			<path class="st7" d="M18.16,6.407l12.035,6.301v13.735L18.16,32.744L6.124,26.443V12.708L18.16,6.407 M18.16,4L4,11.434v16.355				l14.16,7.434l14.16-7.434V11.434L18.16,4L18.16,4z"/></g>	</g></g><g id="ep2-badge" class="aristotle-svg-svg ">	<g  class="white " >		<line id="XMLID_333_" class="st16" x1="26.586" y1="14.903" x2="19.576" y2="19.009"/><line id="XMLID_332_" class="st16" x1="18.16" y1="29.275" x2="18.16" y2="21.133"/><line id="XMLID_330_" class="st16" x1="16.744" y1="19.009" x2="9.664" y2="14.903"/><polyline id="XMLID_329_" class="st16" points="24.674,26.302 18.16,29.7 11.576,26.302 		"/><polyline id="XMLID_328_" class="st16" points="20.709,11.009 27.223,14.407 27.223,21.912 		"/><polyline id="XMLID_327_" class="st16" points="9.027,21.912 9.027,14.407 15.541,11.009 		"/></g>	<g id="XMLID_335_" class="aristotle-svg-svg ">		<path class="st7" d="M18.16,6.407l12.036,6.301v13.735L18.16,32.744L6.124,26.443V12.708L18.16,6.407 M18.16,4L4,11.434v16.355			l14.16,7.434l14.16-7.434V11.434L18.16,4L18.16,4z"/></g></g><g id="ep1-badge" class="aristotle-svg-svg ">	<g  class="white" >		<polyline id="XMLID_108_" class="st16" points="11.08,15.611 15.045,19.576 11.08,23.611 		"/><polyline id="XMLID_107_" class="st16" points="25.24,23.611 21.204,19.576 25.24,15.611 		"/><polyline id="XMLID_105_" class="st16" points="22.125,12.496 18.16,16.531 14.124,12.496 		"/><polyline id="XMLID_104_" class="st16" points="14.124,26.656 18.16,22.691 22.125,26.656 		"/><line id="XMLID_102_" class="st16" x1="18.16" y1="15.328" x2="18.16" y2="6.124"/><line id="XMLID_101_" class="st16" x1="18.16" y1="33.028" x2="18.16" y2="23.824"/><line id="XMLID_100_" class="st16" x1="22.408" y1="19.576" x2="31.612" y2="19.576"/><line id="XMLID_98_" class="st16" x1="5.416" y1="19.576" x2="14.62" y2="19.576"/></g>	<g id="XMLID_60_" class="aristotle-svg-svg ">		<path class="st7" d="M18.16,6.407l12.036,6.301v13.735L18.16,32.744L6.124,26.443V12.708L18.16,6.407 M18.16,4L4,11.434v16.355			l14.16,7.434l14.16-7.434V11.434L18.16,4L18.16,4z"/></g></g><g id="rank-badge-cyber-cadet" class="aristotle-svg-svg ">	<polygon class="st8" points="30.55,4 31.328,5.629 33.027,5.912 31.824,7.186 32.107,8.956 30.55,8.107 29.062,8.956 29.346,7.186 		28.072,5.912 29.842,5.629 	"/><polygon class="st8" points="6.478,4 7.256,5.629 8.955,5.912 7.752,7.186 8.035,8.956 6.478,8.107 4.99,8.956 5.273,7.186 		4,5.912 5.77,5.629 	"/><polygon class="st7" points="15.469,33.241 13.203,32.037 12.992,32.179 13.062,31.967 7.894,29.276 7.894,16.957 16.106,12.638 		16.602,10.018 5.77,15.682 5.77,30.551 14.974,35.365 	"/><polygon class="st7" points="20.496,10.018 20.921,12.638 29.134,16.957 29.134,29.276 22.125,32.958 21.275,35.861 31.258,30.551 		31.258,15.682 	"/><g>		<polygon class="st8" points="19.222,33.241 16.39,35.294 18.514,25.949 14.974,28.781 17.098,16.036 20.638,16.036 19.222,21.7 			22.054,19.576 19.576,29.559 22.195,27.577 17.664,43.082 		"/><rect x="13.558" y="15.328" class="st8" width="9.912" height="1.416"/><polygon class="st8" points="18.514,6.832 17.098,15.328 19.93,15.328 		"/><g id="XMLID_45_" class="aristotle-svg-svg ">			<g id="XMLID_157_" class="aristotle-svg-svg ">				<g id="XMLID_185_" class="aristotle-svg-svg ">					<g id="XMLID_229_" class="aristotle-svg-svg ">						<polygon class="st8" points="18.514,5.416 17.098,6.266 17.098,8.107 18.514,8.956 19.93,8.107 19.93,6.266 						"/></g>				</g>			</g>		</g>	</g></g><g id="rank-badge-technical-cadet" class="aristotle-svg-svg ">	<polygon class="st7" points="20.709,11.08 21.063,13.204 27.719,13.204 27.719,28.922 21.063,33.595 20.709,36.427 29.843,30.055 		29.843,11.08 	"/><polygon class="st7" points="16.037,33.666 9.452,29.205 9.381,13.204 16.037,13.204 16.391,11.08 7.186,11.08 7.328,30.338 		16.391,36.498 	"/><g>		<g>			<g>				<polygon class="st8" points="18.515,16.036 15.683,18.868 18.515,42.941 21.347,18.868 				"/></g>		</g>		<rect x="13.559" y="15.328" class="st8" width="9.912" height="1.416"/><polygon class="st8" points="18.515,6.832 17.099,15.328 19.931,15.328 		"/><g id="XMLID_166_" class="aristotle-svg-svg ">			<g id="XMLID_168_" class="aristotle-svg-svg ">				<g id="XMLID_169_" class="aristotle-svg-svg ">					<g id="XMLID_170_" class="aristotle-svg-svg ">						<polygon class="st8" points="18.515,5.416 17.099,6.266 17.099,8.107 18.515,8.956 19.931,8.107 19.931,6.266 						"/></g>				</g>			</g>		</g>	</g>	<polygon class="st8" points="30.551,4 31.33,5.629 33.029,5.912 31.825,7.186 32.108,8.956 30.551,8.107 29.064,8.956 		29.348,7.186 28.072,5.912 29.843,5.629 	"/><polygon class="st8" points="6.479,4 7.257,5.629 8.957,5.912 7.753,7.186 8.036,8.956 6.479,8.107 4.992,8.956 5.275,7.186 		4,5.912 5.77,5.629 	"/></g><g id="rank-badge-cadet-first-class" class="aristotle-svg-svg ">	<g>		<path class="st7" d="M27.718,13.204v15.718l-9.204,6.443l-9.134-6.16L9.31,13.204H27.718 M29.842,11.08H7.186l0.07,19.258			l11.258,7.646l11.328-7.93V11.08L29.842,11.08z"/></g>	<line class="st13" x1="7.823" y1="20.992" x2="29.275" y2="20.992"/><polygon class="st8" points="30.55,4 31.328,5.629 33.027,5.912 31.824,7.186 32.107,8.956 30.55,8.107 29.063,8.956 29.346,7.186 		28.072,5.912 29.842,5.629 	"/><polygon class="st8" points="6.478,4 7.256,5.629 8.955,5.912 7.752,7.186 8.035,8.956 6.478,8.107 4.991,8.956 5.273,7.186 		4,5.912 5.77,5.629 	"/></g><g id="rank-badge-cadet" class="aristotle-svg-svg ">	<g>		<path class="st7" d="M24.531,6.124v15.718l-9.203,6.443l-9.135-6.16L6.123,6.124H24.531 M26.656,4H4l0.07,19.258l11.258,7.646			l11.328-7.93V4L26.656,4z"/></g>	<line class="st13" x1="4.637" y1="13.912" x2="26.09" y2="13.912"/></g><g id="rank-badge-recruit" class="aristotle-svg-svg ">	<g>		<path class="st7" d="M24.531,6.124v15.718l-9.203,6.443l-9.134-6.16L6.123,6.124H24.531 M26.656,4H4l0.07,19.258l11.258,7.646			l11.328-7.93V4L26.656,4z"/></g></g><g id="chapter-progress-chapter" class="aristotle-svg-svg ">	<g id="XMLID_150_" class="aristotle-svg-svg ">		<path class="st11" d="M9.664,6.407l3.54,1.912v4.106l-3.54,1.912l-3.54-1.912V8.319L9.664,6.407 M9.664,4L4,7.044v6.655			l5.664,3.044l5.664-3.044V7.044L9.664,4L9.664,4z"/></g></g><g id="chapter-progress-slide" class="aristotle-svg-svg ">	<rect x="4" y="4" class="st11" width="6.372" height="6.372"/></g><g id="chapter-progress-test" class="aristotle-svg-svg ">	<polygon class="st5" points="17.948,21.063 13.771,23.258 5.77,19.151 5.77,10.16 8.39,8.814 7.045,7.469 4,9.098 4,20.213 		13.771,25.24 19.647,22.196 	"/><polygon class="st5" points="13.771,4 9.24,6.336 11.01,7.469 13.771,6.053 21.701,10.16 21.701,19.151 20.426,19.789 		21.771,21.134 23.471,20.213 23.471,9.098 	"/><g>		<polygon class="st4" points="6.691,5.77 15.824,11.505 12.992,11.434 20.639,17.948 17.311,18.019 22.196,22.762 12.426,16.532 			16.107,16.461 7.965,10.23 10.868,10.089 		"/></g></g><g id="chapter-progress-duties" class="aristotle-svg-svg ">	<circle class="st11" cx="7.186" cy="7.186" r="3.186"/></g><g id="list-progress-base" class="aristotle-svg-svg ">	<g id="hex-outer_1_" class="aristotle-svg-svg ">		<g id="XMLID_1080_" class="aristotle-svg-svg ">			<path class="st4" d="M18.16,7.186l11.328,5.947v12.886L18.16,31.966L6.832,26.019V13.133L18.16,7.186 M18.16,4L4,11.434v16.355				l14.16,7.434l14.16-7.434V11.434L18.16,4L18.16,4z"/></g>	</g>	<g id="hex-inner_1_" class="aristotle-svg-svg ">		<g id="XMLID_2384_" class="aristotle-svg-svg ">			<polygon class="st7" points="18.16,29.913 9.098,25.028 9.098,14.124 18.16,9.168 27.223,14.124 27.223,24.886 			"/></g>	</g></g><g id="list-progress-complete" class="aristotle-svg-svg ">	<g id="hex-inner" class="aristotle-svg-svg ">		<g>			<polygon class="st14" points="21.842,13.77 25.736,16.178 21.204,16.178 20.567,16.178 27.222,21.913 27.222,14.124 18.16,9.168 				16.177,10.23 			"/></g>		<g>			<polygon class="st14" points="15.54,23.47 11.929,21.134 16.177,21.063 17.877,20.992 9.097,14.266 9.097,25.028 18.16,29.913 				22.196,27.718 			"/></g>	</g>	<g id="hex-outer" class="aristotle-svg-svg ">		<polygon class="st1" points="24.036,28.851 18.16,31.966 6.832,26.019 6.832,13.133 10.443,11.222 8.389,9.098 4,11.363 4,27.718 			18.16,35.152 26.798,30.621 		"/><polygon class="st1" points="18.16,4 11.575,7.398 14.407,9.168 18.16,7.186 29.488,13.133 29.488,26.019 27.718,26.939 			29.913,28.993 32.32,27.718 32.32,11.363 		"/></g>	<g id="lightning_1_" class="aristotle-svg-svg ">		<g id="lightning" class="aristotle-svg-svg ">			<polygon class="st7" points="7.752,6.549 21.204,14.903 17.098,14.903 28.284,24.461 23.399,24.532 30.55,31.471 16.248,22.337 				21.629,22.267 9.664,13.062 13.983,12.921 			"/></g>	</g></g><g id="ctanlee" class="aristotle-svg-svg ">	<circle class="st8" cx="21" cy="21" r="6.371"/><path class="st2" d="M25.451,37.391C32.678,35.432,38,28.846,38,21"/><path class="st2" d="M4,21c0,7.846,5.322,14.432,12.549,16.391"/><path class="st2" d="M32.785,8.765C29.729,5.82,25.58,4,21,4c-4.678,0-8.913,1.891-11.986,4.949"/></g><g id="action-btn-fist" class="aristotle-svg-svg ">	<polygon class="st8" points="35.7,86.968 4,70.375 4,33.82 35.7,17.226 67.4,33.82 67.4,70.375 	"/><polygon class="st4" points="35.7,84.542 6.205,69.103 6.205,35.091 35.7,19.652 65.194,35.091 65.194,69.103 	"/><path class="st10" d="M42.282,12.801c0,0,7.4,1.994,10.053,3.388c-3.4,6.472-11.455,2.374-11.455,2.374s-2.311,2.849-2.968,3.586		c11.129,5.194,26.245,0.659,26.245,0.659l-0.922,5.878l-5.588,13.459l-9.732,5.027L30.202,82.528L9.454,71.733l25.778-32.377		l-2.749-19.113L42.282,12.801z"/><path class="st12" d="M42.282,12.801c0,0,7.4,1.994,10.053,3.388c-3.4,6.472-11.455,2.374-11.455,2.374s-2.311,2.849-2.968,3.586		c11.129,5.194,26.245,0.659,26.245,0.659l-0.922,5.878l-5.588,13.459l-9.732,5.027L30.202,82.528L9.454,71.733l25.778-32.377		l-2.749-19.113L42.282,12.801z"/><path class="st10" d="M48.016,5.524L45.9,4.412c-1.753-0.92-3.92-0.246-4.841,1.506l-7.039,13.394l8.461,4.446l7.039-13.393		C50.442,8.612,49.768,6.445,48.016,5.524"/><path class="st12" d="M48.016,5.524L45.9,4.412c-1.753-0.92-3.92-0.246-4.841,1.506l-7.039,13.394l8.461,4.446l7.039-13.393		C50.442,8.612,49.768,6.445,48.016,5.524z"/><path class="st10" d="M54.503,7.003l2.641,1.734c1.291,0.805,1.67,2.512,0.84,3.787L50.706,23.7c-3.01-0.854-4.441-2.1-6.33-4.349		l6.317-11.363C51.448,6.631,53.185,6.182,54.503,7.003"/><path class="st12" d="M54.503,7.003l2.641,1.734c1.291,0.805,1.67,2.512,0.84,3.787L50.706,23.7c-3.01-0.854-4.441-2.1-6.33-4.349		l6.317-11.363C51.448,6.631,53.185,6.182,54.503,7.003z"/><path class="st10" d="M62.452,15.025l-1.859-1.295c-1.254-0.875-2.982-0.542-3.822,0.736L50.706,23.7		c1.326,2.025,3.129,3.569,6.02,4.014l6.379-8.876C63.988,17.607,63.694,15.891,62.452,15.025"/><path class="st12" d="M62.452,15.025l-1.859-1.295c-1.254-0.875-2.982-0.542-3.822,0.736L50.706,23.7		c1.326,2.025,3.129,3.569,6.02,4.014l6.379-8.876C63.988,17.607,63.694,15.891,62.452,15.025z"/><path class="st10" d="M67.103,24.238l-5.291,6.866c-2.295-0.652-3.893-1.86-5.086-3.391l5.312-7.341		c0.932-1.289,2.768-1.504,3.973-0.465l0.715,0.615C67.817,21.465,67.983,23.096,67.103,24.238"/><path class="st12" d="M67.103,24.238l-5.291,6.866c-2.295-0.652-3.893-1.86-5.086-3.391l5.312-7.341		c0.932-1.289,2.768-1.504,3.973-0.465l0.715,0.615C67.817,21.465,67.983,23.096,67.103,24.238z"/><path class="st10" d="M58.021,34.149c0.854-0.646,3.791-3.045,3.791-3.045c-2.127-0.376-3.768-1.599-5.086-3.391l-2.812,2.664		c-1.058,1.003-0.911,2.728,0.3,3.538l0.561,0.375C55.772,34.957,57.169,34.793,58.021,34.149"/><path class="st18" d="M58.021,34.149c0.854-0.646,3.791-3.045,3.791-3.045c-2.127-0.376-3.768-1.599-5.086-3.391l-2.812,2.664		c-1.058,1.003-0.911,2.728,0.3,3.538l0.561,0.375C55.772,34.957,57.169,34.793,58.021,34.149z"/><path class="st10" d="M50.214,31.096l-1.178-0.891c-0.792-0.599-1.021-1.69-0.536-2.558l2.206-3.948		c1.383,2.462,3.387,3.804,6.02,4.014l-3.385,3.209C52.481,31.737,51.158,31.81,50.214,31.096"/><path class="st18" d="M50.214,31.096l-1.178-0.891c-0.792-0.599-1.021-1.69-0.536-2.558l2.206-3.948		c1.383,2.462,3.387,3.804,6.02,4.014l-3.385,3.209C52.481,31.737,51.158,31.81,50.214,31.096z"/><path class="st10" d="M41.62,24.903l6.035,4.258l3.051-5.461c-3.033-0.664-4.512-1.829-6.33-4.349L41.62,24.903z"/><path class="st12" d="M41.62,24.903l6.035,4.258l3.051-5.461c-3.033-0.664-4.512-1.829-6.33-4.349L41.62,24.903z"/><path class="st10" d="M9.961,71.565l20.872-33.37l-2.188-19.021l10.792-10.17c0,0,10.129,5.323,12.781,6.717		c-3.402,6.472-10.094,2.278-10.094,2.278s-1.264,2.923-1.924,3.66c8.988,4.724,10.791,8.961,3.453,16.425"/><path class="st17" d="M9.961,71.565l20.872-33.37l-2.188-19.021l10.792-10.17c0,0,10.129,5.323,12.781,6.717		c-3.402,6.472-10.094,2.278-10.094,2.278s-1.264,2.923-1.924,3.66c8.988,4.724,10.791,8.961,3.453,16.425"/><path class="st8" d="M25.932,73.745c0.897-8.276,2.755-16.539,5.586-24.609c0.175,1.803,0.394,3.582,0.657,5.338		c1.943-5.763,4.385-11.414,7.322-16.885c-0.253,2.063-0.441,4.113-0.564,6.145c2.266-3.483,4.732-6.836,7.387-10.044		c1.293-1.563,1.715-1.218,0.645,0.502c-3.794,6.097-6.912,12.479-9.348,19.029c-0.115-1.779-0.184-3.577-0.203-5.394		c-2.208,5.21-3.982,10.542-5.32,15.94c-0.439-1.894-0.829-3.818-1.164-5.774C28.87,63.106,27.198,68.372,25.932,73.745"/></g><g id="mini-preview-test" class="aristotle-svg-svg ">	<rect x="4" y="4" class="st8" width="47.07" height="99.63"/><path class="st9" d="M44.818,10.251v87.127H10.252V10.251H44.818 M51.07,4H4.001v99.63H51.07V4L51.07,4z"/><rect x="8.412" y="79.306" class="st11" width="38.246" height="17.515"/><path class="st9" d="M44.807,81.848v12.43H10.264v-12.43H44.807 M47.932,78.723H7.139v18.681h40.793V78.723L47.932,78.723z"/><ellipse class="st0" cx="27.536" cy="61.599" rx="7.845" ry="7.784"/><path class="st9" d="M27.535,53.815c4.332,0,7.845,3.485,7.845,7.784s-3.513,7.784-7.845,7.784s-7.845-3.485-7.845-7.784		S23.203,53.815,27.535,53.815 M27.535,47.563c-7.772,0-14.096,6.296-14.096,14.035s6.323,14.035,14.096,14.035		s14.096-6.296,14.096-14.035S35.308,47.563,27.535,47.563L27.535,47.563z"/><path class="st6" d="M22.918,63.162c-0.863,0-1.562-0.7-1.562-1.563c0-3.388,2.771-6.144,6.18-6.144c0.863,0,1.562,0.7,1.562,1.563		s-0.699,1.562-1.562,1.562c-1.684,0-3.054,1.354-3.054,3.019C24.481,62.461,23.781,63.162,22.918,63.162z"/><g>		<path class="st4" d="M51.07,4v99.63H4V4H51.07 M54.07,1h-3H4H1v3v99.63v3h3h47.07h3v-3V4V1L54.07,1z"/></g></g>';
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
    var devTools, episodeLoader;
    this.episodeRoot = episodeRoot;
    this.onJsonLoaded = bind(this.onJsonLoaded, this);
    window.aristotle = this;
    this.build($el);
    episodeLoader = new EpisodeLoader(this.onJsonLoaded);
    devTools = new DevTools();
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

  return Aristotle;

})();

window.Aristotle = Aristotle;

},{"chrome/chrome-ui":2,"episode/episode":4,"misc/dev-tools":7,"misc/episode-loader":8,"movie/movie":10,"slide-ux/slide-ux":15}],2:[function(require,module,exports){
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
    this.initSoundSettings();
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

  AudioTrack.prototype.initSoundSettings = function() {
    if (AudioTrack.ppc != null) {
      return;
    }
    return AudioTrack.ppc = new createjs.PlayPropsConfig().set({
      interrupt: createjs.Sound.INTERRUPT_ANY,
      volume: 1,
      pan: 1
    });
  };

  return AudioTrack;

})();

},{}],4:[function(require,module,exports){
var Episode, Slides,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Slides = require('episode/slides');

module.exports = Episode = (function() {
  function Episode(trainingData, movie, ux) {
    this.onSlidesComplete = bind(this.onSlidesComplete, this);
    this.slides = new Slides(trainingData, movie, ux, this.onSlidesComplete);
    this.slides.start();
  }

  Episode.prototype.onSlidesComplete = function() {
    return console.log("slides are complete");
  };

  return Episode;

})();

},{"episode/slides":6}],5:[function(require,module,exports){
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
    return this.runCtanlee(this.slideData.ctanlee);
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
      case "pubsub":
        return PubSub.subscribe(this.slideData.duration.event, (function(_this) {
          return function() {
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

},{"episode/audio-track":3,"movie/svg-animation":11}],6:[function(require,module,exports){
var Slide, Slides,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Slide = require('episode/slide');

module.exports = Slides = (function() {
  function Slides(trainingData, movie, ux, onComplete) {
    this.onComplete = onComplete;
    this.nextSlide = bind(this.nextSlide, this);
    this.slideComplete = bind(this.slideComplete, this);
    this.slides = [];
    this.currentSlideIndex = -1;
    this.createSlides(trainingData, movie, ux);
    PubSub.subscribe('slides.next-slide', (function(_this) {
      return function() {
        return _this.nextSlide();
      };
    })(this));
  }

  Slides.prototype.start = function() {
    return this.nextSlide();
  };

  Slides.prototype.createSlides = function(trainingData, movie, ux) {
    var i, j, ref, ref1, results, slide, startIndex;
    startIndex = trainingData.dev.startSlideIndex != null ? trainingData.dev.startSlideIndex : 0;
    results = [];
    for (i = j = ref = startIndex, ref1 = trainingData.slides.length; ref <= ref1 ? j <= ref1 : j >= ref1; i = ref <= ref1 ? ++j : --j) {
      slide;
      slide = new Slide(movie, ux, trainingData.slides[i], this.slideComplete);
      results.push(this.slides.push(slide));
    }
    return results;
  };

  Slides.prototype.slideComplete = function() {
    return this.nextSlide();
  };

  Slides.prototype.nextSlide = function() {
    if (this.currentSlideIndex === this.slides.length - 1) {
      this.trainingComplete();
      return;
    }
    this.currentSlide = this.slides[++this.currentSlideIndex];
    return this.currentSlide.play(this.slideComplete);
  };

  Slides.prototype.trainingComplete = function() {
    return this.onComplete();
  };

  return Slides;

})();

},{"episode/slide":5}],7:[function(require,module,exports){
var DevTools,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

module.exports = DevTools = (function() {
  function DevTools() {
    this.update = bind(this.update, this);
    this.stats = new Stats();
    this.stats.setMode(0);
    this.stats.domElement.style.position = 'absolute';
    this.stats.domElement.style.left = '0px';
    this.stats.domElement.style.top = '0px';
    document.body.appendChild(this.stats.domElement);
    requestAnimationFrame(this.update);
  }

  DevTools.prototype.update = function() {
    this.stats.end();
    this.stats.begin();
    return requestAnimationFrame(this.update);
  };

  return DevTools;

})();

},{}],8:[function(require,module,exports){
var EpisodeLoader;

module.exports = EpisodeLoader = (function() {
  function EpisodeLoader(callback) {
    this.callback = callback;
    this.loadEpisode();
  }

  EpisodeLoader.prototype.loadEpisode = function() {
    return this.loadJson(aristotle.episodeRoot + "/map.json", (function(_this) {
      return function(json) {
        return _this.preloadAssets(JSON.parse(json));
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

  EpisodeLoader.prototype.preloadAssets = function(data) {
    var assets, preloadQueue, regex;
    assets = [];
    regex = /.+\.(mp3|json|svg)/;
    this.lookForFiles(data, assets, regex);
    createjs.Sound.alternateExtensions = ["mp3"];
    preloadQueue = new createjs.LoadQueue();
    preloadQueue.installPlugin(createjs.Sound);
    preloadQueue.on("progress", (function(_this) {
      return function(e) {
        console.log(e.loaded);
        return e.loaded;
      };
    })(this));
    preloadQueue.on("complete", (function(_this) {
      return function() {
        return _this.callback(data);
      };
    })(this));
    return preloadQueue.loadManifest(assets);
  };

  EpisodeLoader.prototype.lookForFiles = function(item, storage, regex) {
    var child, i, key, len, results, results1, type;
    type = typeof item;
    if (type === "string") {
      if (/.mp3/.test(item)) {
        return storage.push({
          src: aristotle.episodeRoot + "/sounds/" + item,
          id: item
        });
      } else if (/.json/.test(item)) {
        return storage.push({
          src: aristotle.episodeRoot + "/animations/" + item,
          id: item
        });
      } else if (/.svg/.test(item)) {
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

  return EpisodeLoader;

})();

},{}],9:[function(require,module,exports){
var Layer, SVGAnimation;

SVGAnimation = require('movie/svg-animation');

module.exports = Layer = (function() {
  function Layer($el, depth) {
    this.$layer = $(jadeTemplate['movie/layer']({
      depth: depth
    }));
    $el.append(this.$layer);
  }

  Layer.prototype.update = function(layerData) {
    if (layerData.content != null) {
      this.updateContent(layerData);
    }
    if (layerData.fx != null) {
      return this.updateEffects(layerData.fx);
    }
  };

  Layer.prototype.updateContent = function(layerData) {
    var fileExt;
    this.empty();
    fileExt = layerData.content.split(".")[1];
    switch (fileExt) {
      case "json":
        return this.addAnimation(layerData);
      case "svg":
        return this.addImage(layerData);
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

  Layer.prototype.addAnimation = function(layerData) {
    console.log("add animation");
    return this.animation = new SVGAnimation(this.$layer, aristotle.episodeRoot + "/animations/" + layerData.content, layerData);
  };

  Layer.prototype.addImage = function(layerData) {
    console.log('add image');
    return this.$layer.load(aristotle.episodeRoot + "/assets/" + layerData.content);
  };

  Layer.prototype.empty = function() {
    return this.$layer.empty();
  };

  return Layer;

})();

},{"movie/svg-animation":11}],10:[function(require,module,exports){
var Layer, Movie;

Layer = require('movie/Layer');

module.exports = Movie = (function() {
  function Movie($el) {
    this.$el = $el;
    this.$wrapper = $('.wrapper', this.$el);
    this.layers = [];
    PubSub.subscribe('movie.load-layer', (function(_this) {
      return function(m, data) {
        return _this.addLayer(data);
      };
    })(this));
    PubSub.subscribe('movie.zoom', (function(_this) {
      return function(m, data) {
        console.log("hmmmm");
        return _this.zoom(data.scale, data.x, data.y);
      };
    })(this));
  }

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
      console.log(data.zoom);
      return this.zoom(data.zoom.scale, data.zoom.x, data.zoom.y);
    }
  };

  Movie.prototype.zoom = function(scale, x, y) {
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
        this.layers[i] = new Layer(this.$wrapper, depth);
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

},{"movie/Layer":9}],11:[function(require,module,exports){
var SVGAnimation,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

module.exports = SVGAnimation = (function() {
  function SVGAnimation(el, json, data) {
    this.play = bind(this.play, this);
    this.animation = bodymovin.loadAnimation({
      wrapper: el[0],
      animType: 'svg',
      loop: data.loop,
      prerender: true,
      autoplay: false,
      path: json
    });
    if (data.delay != null) {
      setTimeout(this.play, data.delay);
    } else {
      this.play();
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
        return console.log(_this.animation.currentFrame, _this.animation.totalFrames);
      };
    })(this), 500);
  };

  return SVGAnimation;

})();

},{}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
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

},{"slide-ux/components/component":12}],14:[function(require,module,exports){
var AudioTrack, Ctanlee;

AudioTrack = require('episode/audio-track');

module.exports = Ctanlee = (function() {
  function Ctanlee($parent) {
    aristotle.ctanlee = this;
    this.$el = $(jadeTemplate['slide-ux/ctanlee/ctanlee']({}));
    shadowIconsInstance.svgReplaceWithString(pxSvgIconString, this.$el);
    this.$speechBox = $(".speech-box", this.$el);
    this.$text = $(".text span.content", this.$speechBox);
    $(".text span.next", this.$speechBox).on("click", (function(_this) {
      return function() {
        return _this.playNextAction();
      };
    })(this));
    PubSub.subscribe('ctanlee.activate', (function(_this) {
      return function(a, action) {
        return _this.playAction(action);
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
    this.currentActionIndex = -1;
    this.timeline = this.data.timeline;
    return this.playNextAction();
  };

  Ctanlee.prototype.say = function(text, audio, next) {
    var track;
    if (text != null) {
      this.showText();
      this.$text.html(text);
    }
    if (audio != null) {
      track = new AudioTrack(audio);
      return track.play((function(_this) {
        return function() {
          if (next === 'audio') {
            return _this.playNextAction();
          }
        };
      })(this));
    }
  };

  Ctanlee.prototype.setEmotion = function(emotion) {};

  Ctanlee.prototype.goto = function(x, y, duration, delay) {
    if (x == null) {
      x = 960;
    }
    if (y == null) {
      y = 0;
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

  Ctanlee.prototype.playNextAction = function() {
    if (this.currentActionIndex === this.timeline.length - 1) {
      this.complete();
      return;
    }
    return this.playAction(this.timeline[++this.currentActionIndex].action);
  };

  Ctanlee.prototype.playAction = function(actionId) {
    var action;
    this.currentActionIndex = this.getIndexOfAction(actionId);
    action = this.overlayDefaults(actionId);
    if (action.emo != null) {
      this.setEmotion(action.emo);
    }
    if (action.pos != null) {
      this.goto(action.pos[0], action.pos[1], action.pos[2], action.pos[3]);
    }
    if (action.action != null) {
      PubSub.publish(action.action.cmd, action.action.data);
    }
    return this.say(action.text, action.audio, action.next);
  };

  Ctanlee.prototype.complete = function() {
    this.returnToStation();
    return PubSub.publish('ctanlee.complete');
  };

  Ctanlee.prototype.returnToStation = function() {
    this.hideText();
    return this.goto();
  };

  Ctanlee.prototype.hideText = function() {
    return this.$speechBox.css({
      opacity: 0,
      "pointer-events": "none"
    });
  };

  Ctanlee.prototype.showText = function() {
    return this.$speechBox.css({
      opacity: 1,
      "pointer-events": "all"
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

},{"episode/audio-track":3}],15:[function(require,module,exports){
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
    }
  };

  return SlideUX;

})();

},{"slide-ux/components/selection-dialogue":13,"slide-ux/ctanlee/Ctanlee":14}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9ndWxwLWNvZmZlZWlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiYXJpc3RvdGxlLmNvZmZlZSIsImNocm9tZS9jaHJvbWUtdWkuY29mZmVlIiwiZXBpc29kZS9hdWRpby10cmFjay5jb2ZmZWUiLCJlcGlzb2RlL2VwaXNvZGUuY29mZmVlIiwiZXBpc29kZS9zbGlkZS5jb2ZmZWUiLCJlcGlzb2RlL3NsaWRlcy5jb2ZmZWUiLCJtaXNjL2Rldi10b29scy5jb2ZmZWUiLCJtaXNjL2VwaXNvZGUtbG9hZGVyLmNvZmZlZSIsIm1vdmllL0xheWVyLmNvZmZlZSIsIm1vdmllL21vdmllLmNvZmZlZSIsIm1vdmllL3N2Zy1hbmltYXRpb24uY29mZmVlIiwic2xpZGUtdXgvY29tcG9uZW50cy9jb21wb25lbnQuY29mZmVlIiwic2xpZGUtdXgvY29tcG9uZW50cy9zZWxlY3Rpb24tZGlhbG9ndWUuY29mZmVlIiwic2xpZGUtdXgvY3RhbmxlZS9DdGFubGVlLmNvZmZlZSIsInNsaWRlLXV4L3NsaWRlLXV4LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBBcmlzdG90bGUsIENocm9tZVVJLCBEZXZUb29scywgRXBpc29kZSwgRXBpc29kZUxvYWRlciwgTW92aWUsIFNsaWRlVVgsXG4gIGJpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9O1xuXG5FcGlzb2RlID0gcmVxdWlyZShcImVwaXNvZGUvZXBpc29kZVwiKTtcblxuQ2hyb21lVUkgPSByZXF1aXJlKFwiY2hyb21lL2Nocm9tZS11aVwiKTtcblxuRGV2VG9vbHMgPSByZXF1aXJlKCdtaXNjL2Rldi10b29scycpO1xuXG5Nb3ZpZSA9IHJlcXVpcmUoJ21vdmllL21vdmllJyk7XG5cbkVwaXNvZGVMb2FkZXIgPSByZXF1aXJlKCdtaXNjL2VwaXNvZGUtbG9hZGVyJyk7XG5cblNsaWRlVVggPSByZXF1aXJlKCdzbGlkZS11eC9zbGlkZS11eCcpO1xuXG5BcmlzdG90bGUgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIEFyaXN0b3RsZSgkZWwsIGVwaXNvZGVSb290KSB7XG4gICAgdmFyIGRldlRvb2xzLCBlcGlzb2RlTG9hZGVyO1xuICAgIHRoaXMuZXBpc29kZVJvb3QgPSBlcGlzb2RlUm9vdDtcbiAgICB0aGlzLm9uSnNvbkxvYWRlZCA9IGJpbmQodGhpcy5vbkpzb25Mb2FkZWQsIHRoaXMpO1xuICAgIHdpbmRvdy5hcmlzdG90bGUgPSB0aGlzO1xuICAgIHRoaXMuYnVpbGQoJGVsKTtcbiAgICBlcGlzb2RlTG9hZGVyID0gbmV3IEVwaXNvZGVMb2FkZXIodGhpcy5vbkpzb25Mb2FkZWQpO1xuICAgIGRldlRvb2xzID0gbmV3IERldlRvb2xzKCk7XG4gIH1cblxuICBBcmlzdG90bGUucHJvdG90eXBlLm9uSnNvbkxvYWRlZCA9IGZ1bmN0aW9uKGVwaXNvZGVEYXRhKSB7XG4gICAgdmFyIGVwaXNvZGU7XG4gICAgcmV0dXJuIGVwaXNvZGUgPSBuZXcgRXBpc29kZShlcGlzb2RlRGF0YSwgdGhpcy5tb3ZpZSwgdGhpcy5zbGlkZVVYKTtcbiAgfTtcblxuICBBcmlzdG90bGUucHJvdG90eXBlLmJ1aWxkID0gZnVuY3Rpb24oJGVsKSB7XG4gICAgdmFyICRiYXNlLCBzaGFkb3dJY29ucztcbiAgICAkYmFzZSA9ICQoamFkZVRlbXBsYXRlWydhcmlzdG90bGUnXSh7fSkpO1xuICAgICRlbC5hcHBlbmQoJGJhc2UpO1xuICAgIHNoYWRvd0ljb25zID0gbmV3IHB4aWNvbnMuU2hhZG93SWNvbnMoKTtcbiAgICBzaGFkb3dJY29uc0luc3RhbmNlLnN2Z1JlcGxhY2VXaXRoU3RyaW5nKHB4U3ZnSWNvblN0cmluZywgJGJhc2UpO1xuICAgIHRoaXMuY2hyb21lVUkgPSBuZXcgQ2hyb21lVUkoJChcIi5jaHJvbWVcIiwgJGJhc2UpKTtcbiAgICB0aGlzLnNsaWRlVVggPSBuZXcgU2xpZGVVWCgkKFwiLnNsaWRlLXV4XCIsICRiYXNlKSk7XG4gICAgcmV0dXJuIHRoaXMubW92aWUgPSBuZXcgTW92aWUoJChcIi5tb3ZpZVwiLCAkYmFzZSkpO1xuICB9O1xuXG4gIHJldHVybiBBcmlzdG90bGU7XG5cbn0pKCk7XG5cbndpbmRvdy5BcmlzdG90bGUgPSBBcmlzdG90bGU7XG4iLCJ2YXIgQ2hyb21lVUk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2hyb21lVUkgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIENocm9tZVVJKCRlbCkge1xuICAgIHRoaXMuYnVpbGQoJGVsKTtcbiAgfVxuXG4gIENocm9tZVVJLnByb3RvdHlwZS5idWlsZCA9IGZ1bmN0aW9uKCRlbCkge1xuICAgIHZhciAkcHJvZ3Jlc3MsICR0b3AsIGRhdGE7XG4gICAgZGF0YSA9IHtcbiAgICAgIG5hbWU6IFwiSm9obiBcXFwiRGVhZGV5ZVxcXCIgTmltYnVzXCIsXG4gICAgICBlcGlzb2RlOiBcIjFcIlxuICAgIH07XG4gICAgdGhpcy5nZXRSYW5rKGRhdGEsIFwiY3liZXItY2FkZXRcIik7XG4gICAgJHRvcCA9ICQoamFkZVRlbXBsYXRlWydjaHJvbWUtdWkvdG9wJ10oZGF0YSkpO1xuICAgICRlbC5hcHBlbmQoJHRvcCk7XG4gICAgJHByb2dyZXNzID0gJChqYWRlVGVtcGxhdGVbJ2Nocm9tZS11aS9wcm9ncmVzcyddKHt9KSk7XG4gICAgJGVsLmFwcGVuZCgkcHJvZ3Jlc3MpO1xuICAgIHJldHVybiBzaGFkb3dJY29uc0luc3RhbmNlLnN2Z1JlcGxhY2VXaXRoU3RyaW5nKHB4U3ZnSWNvblN0cmluZywgJGVsKTtcbiAgfTtcblxuICBDaHJvbWVVSS5wcm90b3R5cGUuZ2V0UmFuayA9IGZ1bmN0aW9uKGRhdGEsIGVwaXNvZGUpIHtcbiAgICBzd2l0Y2ggKGVwaXNvZGUpIHtcbiAgICAgIGNhc2UgJ3JlY3J1aXQnOlxuICAgICAgICBkYXRhLnJhbmsgPSBcInJlY3J1aXRcIjtcbiAgICAgICAgcmV0dXJuIGRhdGEuYmFkZ2UgPSBcInJhbmstYmFkZ2UtcmVjcnVpdFwiO1xuICAgICAgY2FzZSAnY2FkZXQnOlxuICAgICAgICBkYXRhLnJhbmsgPSBcImNhZGV0XCI7XG4gICAgICAgIHJldHVybiBkYXRhLmJhZGdlID0gXCJyYW5rLWJhZGdlLWNhZGV0XCI7XG4gICAgICBjYXNlICdjYWRldC1maXJzdC1jbGFzcyc6XG4gICAgICAgIGRhdGEucmFuayA9IFwiQ2FkZXQgRmlyc3QgQ2xhc3NcIjtcbiAgICAgICAgcmV0dXJuIGRhdGEuYmFkZ2UgPSBcInJhbmstYmFkZ2UtY2FkZXQtZmlyc3QtY2xhc3NcIjtcbiAgICAgIGNhc2UgJ3RlY2huaWNhbC1jYWRldCc6XG4gICAgICAgIGRhdGEucmFuayA9IFwiVGVjaG5pY2FsIENhZGV0XCI7XG4gICAgICAgIHJldHVybiBkYXRhLmJhZGdlID0gXCJyYW5rLWJhZGdlLXRlY2huaWNhbC1jYWRldFwiO1xuICAgICAgY2FzZSAnY3liZXItY2FkZXQnOlxuICAgICAgICBkYXRhLnJhbmsgPSBcIkN5YmVyIENhZGV0XCI7XG4gICAgICAgIHJldHVybiBkYXRhLmJhZGdlID0gXCJyYW5rLWJhZGdlLWN5YmVyLWNhZGV0XCI7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBDaHJvbWVVSTtcblxufSkoKTtcbiIsInZhciBBdWRpb1RyYWNrO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF1ZGlvVHJhY2sgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIEF1ZGlvVHJhY2soc3JjKSB7XG4gICAgdGhpcy5zcmMgPSBzcmM7XG4gICAgdGhpcy5pbml0U291bmRTZXR0aW5ncygpO1xuICB9XG5cbiAgQXVkaW9UcmFjay5wcm90b3R5cGUucGxheSA9IGZ1bmN0aW9uKG9uQ29tcGxldGUpIHtcbiAgICB0aGlzLnNvdW5kID0gY3JlYXRlanMuU291bmQucGxheSh0aGlzLnNyYywgQXVkaW9UcmFjay5wcGMpO1xuICAgIHJldHVybiB0aGlzLnNvdW5kLmFkZEV2ZW50TGlzdGVuZXIoXCJjb21wbGV0ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBvbkNvbXBsZXRlKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgQXVkaW9UcmFjay5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnNvdW5kLnN0b3AoKTtcbiAgfTtcblxuICBBdWRpb1RyYWNrLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zb3VuZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY29tcGxldGVcIik7XG4gICAgcmV0dXJuIHRoaXMuc291bmQuZGVzdHJveSgpO1xuICB9O1xuXG4gIEF1ZGlvVHJhY2sucHJvdG90eXBlLmluaXRTb3VuZFNldHRpbmdzID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKEF1ZGlvVHJhY2sucHBjICE9IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIEF1ZGlvVHJhY2sucHBjID0gbmV3IGNyZWF0ZWpzLlBsYXlQcm9wc0NvbmZpZygpLnNldCh7XG4gICAgICBpbnRlcnJ1cHQ6IGNyZWF0ZWpzLlNvdW5kLklOVEVSUlVQVF9BTlksXG4gICAgICB2b2x1bWU6IDEsXG4gICAgICBwYW46IDFcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gQXVkaW9UcmFjaztcblxufSkoKTtcbiIsInZhciBFcGlzb2RlLCBTbGlkZXMsXG4gIGJpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9O1xuXG5TbGlkZXMgPSByZXF1aXJlKCdlcGlzb2RlL3NsaWRlcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVwaXNvZGUgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIEVwaXNvZGUodHJhaW5pbmdEYXRhLCBtb3ZpZSwgdXgpIHtcbiAgICB0aGlzLm9uU2xpZGVzQ29tcGxldGUgPSBiaW5kKHRoaXMub25TbGlkZXNDb21wbGV0ZSwgdGhpcyk7XG4gICAgdGhpcy5zbGlkZXMgPSBuZXcgU2xpZGVzKHRyYWluaW5nRGF0YSwgbW92aWUsIHV4LCB0aGlzLm9uU2xpZGVzQ29tcGxldGUpO1xuICAgIHRoaXMuc2xpZGVzLnN0YXJ0KCk7XG4gIH1cblxuICBFcGlzb2RlLnByb3RvdHlwZS5vblNsaWRlc0NvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKFwic2xpZGVzIGFyZSBjb21wbGV0ZVwiKTtcbiAgfTtcblxuICByZXR1cm4gRXBpc29kZTtcblxufSkoKTtcbiIsInZhciBBdWRpb1RyYWNrLCBTVkdBbmltYXRpb24sIFNsaWRlLFxuICBiaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfTtcblxuQXVkaW9UcmFjayA9IHJlcXVpcmUoXCJlcGlzb2RlL2F1ZGlvLXRyYWNrXCIpO1xuXG5TVkdBbmltYXRpb24gPSByZXF1aXJlKFwibW92aWUvc3ZnLWFuaW1hdGlvblwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTbGlkZSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gU2xpZGUobW92aWUsIHNsaWRlVVgsIHNsaWRlRGF0YSwgb25TbGlkZUNvbXBsZXRlKSB7XG4gICAgdGhpcy5tb3ZpZSA9IG1vdmllO1xuICAgIHRoaXMuc2xpZGVVWCA9IHNsaWRlVVg7XG4gICAgdGhpcy5zbGlkZURhdGEgPSBzbGlkZURhdGE7XG4gICAgdGhpcy5vblNsaWRlQ29tcGxldGUgPSBvblNsaWRlQ29tcGxldGU7XG4gICAgdGhpcy5wbGF5ID0gYmluZCh0aGlzLnBsYXksIHRoaXMpO1xuICB9XG5cbiAgU2xpZGUucHJvdG90eXBlLnBsYXkgPSBmdW5jdGlvbihvbkNvbXBsZXRlKSB7XG4gICAgdGhpcy5tb3ZpZS5wb3B1bGF0ZSh0aGlzLnNsaWRlRGF0YS5tb3ZpZSk7XG4gICAgdGhpcy5zbGlkZVVYLnBvcHVsYXRlKHRoaXMuc2xpZGVEYXRhLnV4KTtcbiAgICB0aGlzLnNldER1cmF0aW9uKCk7XG4gICAgcmV0dXJuIHRoaXMucnVuQ3RhbmxlZSh0aGlzLnNsaWRlRGF0YS5jdGFubGVlKTtcbiAgfTtcblxuICBTbGlkZS5wcm90b3R5cGUuc2V0RHVyYXRpb24gPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5zbGlkZURhdGEuZHVyYXRpb24gPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzd2l0Y2ggKHRoaXMuc2xpZGVEYXRhLmR1cmF0aW9uLmtpbmQpIHtcbiAgICAgIGNhc2UgXCJ0aW1lXCI6XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KHRoaXMub25TbGlkZUNvbXBsZXRlLCB0aGlzLnNsaWRlRGF0YS5kdXJhdGlvbi5zZWNvbmRzICogMTAwMCk7XG4gICAgICBjYXNlIFwidXNlclwiOlxuICAgICAgICByZXR1cm4gY29uc29sZS5sb2coXCJ3YWl0aW5nIG9uIHRoZSB1c2VyXCIpO1xuICAgICAgY2FzZSBcInV4XCI6XG4gICAgICAgIHJldHVybiBQdWJTdWIuc3Vic2NyaWJlKCd1eC5jb21wbGV0ZScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5vblNsaWRlQ29tcGxldGUoKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KSh0aGlzKSk7XG4gICAgICBjYXNlIFwiY3RhbmxlZVwiOlxuICAgICAgICByZXR1cm4gUHViU3ViLnN1YnNjcmliZSgnY3RhbmxlZS5jb21wbGV0ZScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5vblNsaWRlQ29tcGxldGUoKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KSh0aGlzKSk7XG4gICAgICBjYXNlIFwicHVic3ViXCI6XG4gICAgICAgIHJldHVybiBQdWJTdWIuc3Vic2NyaWJlKHRoaXMuc2xpZGVEYXRhLmR1cmF0aW9uLmV2ZW50LCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMub25TbGlkZUNvbXBsZXRlKCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSkodGhpcykpO1xuICAgIH1cbiAgfTtcblxuICBTbGlkZS5wcm90b3R5cGUucnVuQ3RhbmxlZSA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBpZiAoZGF0YSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gYXJpc3RvdGxlLmN0YW5sZWUuYWN0aXZhdGUoZGF0YSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBTbGlkZTtcblxufSkoKTtcbiIsInZhciBTbGlkZSwgU2xpZGVzLFxuICBiaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfTtcblxuU2xpZGUgPSByZXF1aXJlKCdlcGlzb2RlL3NsaWRlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2xpZGVzID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBTbGlkZXModHJhaW5pbmdEYXRhLCBtb3ZpZSwgdXgsIG9uQ29tcGxldGUpIHtcbiAgICB0aGlzLm9uQ29tcGxldGUgPSBvbkNvbXBsZXRlO1xuICAgIHRoaXMubmV4dFNsaWRlID0gYmluZCh0aGlzLm5leHRTbGlkZSwgdGhpcyk7XG4gICAgdGhpcy5zbGlkZUNvbXBsZXRlID0gYmluZCh0aGlzLnNsaWRlQ29tcGxldGUsIHRoaXMpO1xuICAgIHRoaXMuc2xpZGVzID0gW107XG4gICAgdGhpcy5jdXJyZW50U2xpZGVJbmRleCA9IC0xO1xuICAgIHRoaXMuY3JlYXRlU2xpZGVzKHRyYWluaW5nRGF0YSwgbW92aWUsIHV4KTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCdzbGlkZXMubmV4dC1zbGlkZScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMubmV4dFNsaWRlKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgfVxuXG4gIFNsaWRlcy5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5uZXh0U2xpZGUoKTtcbiAgfTtcblxuICBTbGlkZXMucHJvdG90eXBlLmNyZWF0ZVNsaWRlcyA9IGZ1bmN0aW9uKHRyYWluaW5nRGF0YSwgbW92aWUsIHV4KSB7XG4gICAgdmFyIGksIGosIHJlZiwgcmVmMSwgcmVzdWx0cywgc2xpZGUsIHN0YXJ0SW5kZXg7XG4gICAgc3RhcnRJbmRleCA9IHRyYWluaW5nRGF0YS5kZXYuc3RhcnRTbGlkZUluZGV4ICE9IG51bGwgPyB0cmFpbmluZ0RhdGEuZGV2LnN0YXJ0U2xpZGVJbmRleCA6IDA7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoaSA9IGogPSByZWYgPSBzdGFydEluZGV4LCByZWYxID0gdHJhaW5pbmdEYXRhLnNsaWRlcy5sZW5ndGg7IHJlZiA8PSByZWYxID8gaiA8PSByZWYxIDogaiA+PSByZWYxOyBpID0gcmVmIDw9IHJlZjEgPyArK2ogOiAtLWopIHtcbiAgICAgIHNsaWRlO1xuICAgICAgc2xpZGUgPSBuZXcgU2xpZGUobW92aWUsIHV4LCB0cmFpbmluZ0RhdGEuc2xpZGVzW2ldLCB0aGlzLnNsaWRlQ29tcGxldGUpO1xuICAgICAgcmVzdWx0cy5wdXNoKHRoaXMuc2xpZGVzLnB1c2goc2xpZGUpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgU2xpZGVzLnByb3RvdHlwZS5zbGlkZUNvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubmV4dFNsaWRlKCk7XG4gIH07XG5cbiAgU2xpZGVzLnByb3RvdHlwZS5uZXh0U2xpZGUgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50U2xpZGVJbmRleCA9PT0gdGhpcy5zbGlkZXMubGVuZ3RoIC0gMSkge1xuICAgICAgdGhpcy50cmFpbmluZ0NvbXBsZXRlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY3VycmVudFNsaWRlID0gdGhpcy5zbGlkZXNbKyt0aGlzLmN1cnJlbnRTbGlkZUluZGV4XTtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50U2xpZGUucGxheSh0aGlzLnNsaWRlQ29tcGxldGUpO1xuICB9O1xuXG4gIFNsaWRlcy5wcm90b3R5cGUudHJhaW5pbmdDb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm9uQ29tcGxldGUoKTtcbiAgfTtcblxuICByZXR1cm4gU2xpZGVzO1xuXG59KSgpO1xuIiwidmFyIERldlRvb2xzLFxuICBiaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBEZXZUb29scyA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gRGV2VG9vbHMoKSB7XG4gICAgdGhpcy51cGRhdGUgPSBiaW5kKHRoaXMudXBkYXRlLCB0aGlzKTtcbiAgICB0aGlzLnN0YXRzID0gbmV3IFN0YXRzKCk7XG4gICAgdGhpcy5zdGF0cy5zZXRNb2RlKDApO1xuICAgIHRoaXMuc3RhdHMuZG9tRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgdGhpcy5zdGF0cy5kb21FbGVtZW50LnN0eWxlLmxlZnQgPSAnMHB4JztcbiAgICB0aGlzLnN0YXRzLmRvbUVsZW1lbnQuc3R5bGUudG9wID0gJzBweCc7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnN0YXRzLmRvbUVsZW1lbnQpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZSk7XG4gIH1cblxuICBEZXZUb29scy5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zdGF0cy5lbmQoKTtcbiAgICB0aGlzLnN0YXRzLmJlZ2luKCk7XG4gICAgcmV0dXJuIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZSk7XG4gIH07XG5cbiAgcmV0dXJuIERldlRvb2xzO1xuXG59KSgpO1xuIiwidmFyIEVwaXNvZGVMb2FkZXI7XG5cbm1vZHVsZS5leHBvcnRzID0gRXBpc29kZUxvYWRlciA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gRXBpc29kZUxvYWRlcihjYWxsYmFjaykge1xuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB0aGlzLmxvYWRFcGlzb2RlKCk7XG4gIH1cblxuICBFcGlzb2RlTG9hZGVyLnByb3RvdHlwZS5sb2FkRXBpc29kZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmxvYWRKc29uKGFyaXN0b3RsZS5lcGlzb2RlUm9vdCArIFwiL21hcC5qc29uXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnByZWxvYWRBc3NldHMoSlNPTi5wYXJzZShqc29uKSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgfTtcblxuICBFcGlzb2RlTG9hZGVyLnByb3RvdHlwZS5sb2FkSnNvbiA9IGZ1bmN0aW9uKHBhdGgsIG9uQ29tcGxldGUpIHtcbiAgICB2YXIgeG9iajtcbiAgICB4b2JqID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgeG9iai5vdmVycmlkZU1pbWVUeXBlKCdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgeG9iai5vcGVuKCdHRVQnLCBwYXRoLCB0cnVlKTtcbiAgICB4b2JqLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoeG9iai5yZWFkeVN0YXRlID09PSA0ICYmIHhvYmouc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICByZXR1cm4gb25Db21wbGV0ZSh4b2JqLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSkodGhpcyk7XG4gICAgcmV0dXJuIHhvYmouc2VuZChudWxsKTtcbiAgfTtcblxuICBFcGlzb2RlTG9hZGVyLnByb3RvdHlwZS5wcmVsb2FkQXNzZXRzID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciBhc3NldHMsIHByZWxvYWRRdWV1ZSwgcmVnZXg7XG4gICAgYXNzZXRzID0gW107XG4gICAgcmVnZXggPSAvLitcXC4obXAzfGpzb258c3ZnKS87XG4gICAgdGhpcy5sb29rRm9yRmlsZXMoZGF0YSwgYXNzZXRzLCByZWdleCk7XG4gICAgY3JlYXRlanMuU291bmQuYWx0ZXJuYXRlRXh0ZW5zaW9ucyA9IFtcIm1wM1wiXTtcbiAgICBwcmVsb2FkUXVldWUgPSBuZXcgY3JlYXRlanMuTG9hZFF1ZXVlKCk7XG4gICAgcHJlbG9hZFF1ZXVlLmluc3RhbGxQbHVnaW4oY3JlYXRlanMuU291bmQpO1xuICAgIHByZWxvYWRRdWV1ZS5vbihcInByb2dyZXNzXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZS5sb2FkZWQpO1xuICAgICAgICByZXR1cm4gZS5sb2FkZWQ7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBwcmVsb2FkUXVldWUub24oXCJjb21wbGV0ZVwiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmNhbGxiYWNrKGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgcmV0dXJuIHByZWxvYWRRdWV1ZS5sb2FkTWFuaWZlc3QoYXNzZXRzKTtcbiAgfTtcblxuICBFcGlzb2RlTG9hZGVyLnByb3RvdHlwZS5sb29rRm9yRmlsZXMgPSBmdW5jdGlvbihpdGVtLCBzdG9yYWdlLCByZWdleCkge1xuICAgIHZhciBjaGlsZCwgaSwga2V5LCBsZW4sIHJlc3VsdHMsIHJlc3VsdHMxLCB0eXBlO1xuICAgIHR5cGUgPSB0eXBlb2YgaXRlbTtcbiAgICBpZiAodHlwZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgaWYgKC8ubXAzLy50ZXN0KGl0ZW0pKSB7XG4gICAgICAgIHJldHVybiBzdG9yYWdlLnB1c2goe1xuICAgICAgICAgIHNyYzogYXJpc3RvdGxlLmVwaXNvZGVSb290ICsgXCIvc291bmRzL1wiICsgaXRlbSxcbiAgICAgICAgICBpZDogaXRlbVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoLy5qc29uLy50ZXN0KGl0ZW0pKSB7XG4gICAgICAgIHJldHVybiBzdG9yYWdlLnB1c2goe1xuICAgICAgICAgIHNyYzogYXJpc3RvdGxlLmVwaXNvZGVSb290ICsgXCIvYW5pbWF0aW9ucy9cIiArIGl0ZW0sXG4gICAgICAgICAgaWQ6IGl0ZW1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKC8uc3ZnLy50ZXN0KGl0ZW0pKSB7XG4gICAgICAgIHJldHVybiBzdG9yYWdlLnB1c2goe1xuICAgICAgICAgIHNyYzogYXJpc3RvdGxlLmVwaXNvZGVSb290ICsgXCIvYXNzZXRzL1wiICsgaXRlbSxcbiAgICAgICAgICBpZDogaXRlbVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW0pKSB7XG4gICAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yIChpID0gMCwgbGVuID0gaXRlbS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgIGNoaWxkID0gaXRlbVtpXTtcbiAgICAgICAgICByZXN1bHRzLnB1c2godGhpcy5sb29rRm9yRmlsZXMoY2hpbGQsIHN0b3JhZ2UsIHJlZ2V4KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRzMSA9IFtdO1xuICAgICAgICBmb3IgKGtleSBpbiBpdGVtKSB7XG4gICAgICAgICAgY2hpbGQgPSBpdGVtW2tleV07XG4gICAgICAgICAgcmVzdWx0czEucHVzaCh0aGlzLmxvb2tGb3JGaWxlcyhjaGlsZCwgc3RvcmFnZSwgcmVnZXgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0czE7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBFcGlzb2RlTG9hZGVyO1xuXG59KSgpO1xuIiwidmFyIExheWVyLCBTVkdBbmltYXRpb247XG5cblNWR0FuaW1hdGlvbiA9IHJlcXVpcmUoJ21vdmllL3N2Zy1hbmltYXRpb24nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBMYXllciA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gTGF5ZXIoJGVsLCBkZXB0aCkge1xuICAgIHRoaXMuJGxheWVyID0gJChqYWRlVGVtcGxhdGVbJ21vdmllL2xheWVyJ10oe1xuICAgICAgZGVwdGg6IGRlcHRoXG4gICAgfSkpO1xuICAgICRlbC5hcHBlbmQodGhpcy4kbGF5ZXIpO1xuICB9XG5cbiAgTGF5ZXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKGxheWVyRGF0YSkge1xuICAgIGlmIChsYXllckRhdGEuY29udGVudCAhPSBudWxsKSB7XG4gICAgICB0aGlzLnVwZGF0ZUNvbnRlbnQobGF5ZXJEYXRhKTtcbiAgICB9XG4gICAgaWYgKGxheWVyRGF0YS5meCAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy51cGRhdGVFZmZlY3RzKGxheWVyRGF0YS5meCk7XG4gICAgfVxuICB9O1xuXG4gIExheWVyLnByb3RvdHlwZS51cGRhdGVDb250ZW50ID0gZnVuY3Rpb24obGF5ZXJEYXRhKSB7XG4gICAgdmFyIGZpbGVFeHQ7XG4gICAgdGhpcy5lbXB0eSgpO1xuICAgIGZpbGVFeHQgPSBsYXllckRhdGEuY29udGVudC5zcGxpdChcIi5cIilbMV07XG4gICAgc3dpdGNoIChmaWxlRXh0KSB7XG4gICAgICBjYXNlIFwianNvblwiOlxuICAgICAgICByZXR1cm4gdGhpcy5hZGRBbmltYXRpb24obGF5ZXJEYXRhKTtcbiAgICAgIGNhc2UgXCJzdmdcIjpcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkSW1hZ2UobGF5ZXJEYXRhKTtcbiAgICB9XG4gIH07XG5cbiAgTGF5ZXIucHJvdG90eXBlLnVwZGF0ZUVmZmVjdHMgPSBmdW5jdGlvbihmeCkge1xuICAgIHZhciBlZmZlY3QsIGksIGxlbiwgcmVmLCByZXN1bHRzO1xuICAgIGlmIChmeC5jbGVhcikge1xuICAgICAgdGhpcy4kbGF5ZXIuYXR0cih7XG4gICAgICAgIFwiY2xhc3NcIjogJ2xheWVyJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChmeC5lZmZlY3RzICE9IG51bGwpIHtcbiAgICAgIHJlZiA9IGZ4LmVmZmVjdHM7XG4gICAgICByZXN1bHRzID0gW107XG4gICAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgZWZmZWN0ID0gcmVmW2ldO1xuICAgICAgICByZXN1bHRzLnB1c2godGhpcy4kbGF5ZXIuYWRkQ2xhc3MoZWZmZWN0KSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG4gIH07XG5cbiAgTGF5ZXIucHJvdG90eXBlLmFkZEFuaW1hdGlvbiA9IGZ1bmN0aW9uKGxheWVyRGF0YSkge1xuICAgIGNvbnNvbGUubG9nKFwiYWRkIGFuaW1hdGlvblwiKTtcbiAgICByZXR1cm4gdGhpcy5hbmltYXRpb24gPSBuZXcgU1ZHQW5pbWF0aW9uKHRoaXMuJGxheWVyLCBhcmlzdG90bGUuZXBpc29kZVJvb3QgKyBcIi9hbmltYXRpb25zL1wiICsgbGF5ZXJEYXRhLmNvbnRlbnQsIGxheWVyRGF0YSk7XG4gIH07XG5cbiAgTGF5ZXIucHJvdG90eXBlLmFkZEltYWdlID0gZnVuY3Rpb24obGF5ZXJEYXRhKSB7XG4gICAgY29uc29sZS5sb2coJ2FkZCBpbWFnZScpO1xuICAgIHJldHVybiB0aGlzLiRsYXllci5sb2FkKGFyaXN0b3RsZS5lcGlzb2RlUm9vdCArIFwiL2Fzc2V0cy9cIiArIGxheWVyRGF0YS5jb250ZW50KTtcbiAgfTtcblxuICBMYXllci5wcm90b3R5cGUuZW1wdHkgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kbGF5ZXIuZW1wdHkoKTtcbiAgfTtcblxuICByZXR1cm4gTGF5ZXI7XG5cbn0pKCk7XG4iLCJ2YXIgTGF5ZXIsIE1vdmllO1xuXG5MYXllciA9IHJlcXVpcmUoJ21vdmllL0xheWVyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTW92aWUgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIE1vdmllKCRlbCkge1xuICAgIHRoaXMuJGVsID0gJGVsO1xuICAgIHRoaXMuJHdyYXBwZXIgPSAkKCcud3JhcHBlcicsIHRoaXMuJGVsKTtcbiAgICB0aGlzLmxheWVycyA9IFtdO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ21vdmllLmxvYWQtbGF5ZXInLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5hZGRMYXllcihkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ21vdmllLnpvb20nLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiaG1tbW1cIik7XG4gICAgICAgIHJldHVybiBfdGhpcy56b29tKGRhdGEuc2NhbGUsIGRhdGEueCwgZGF0YS55KTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9XG5cbiAgTW92aWUucHJvdG90eXBlLnBvcHVsYXRlID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciBkZXB0aElkLCBsYXllckRhdGEsIHJlZjtcbiAgICBpZiAoZGF0YSA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJlZiA9IGRhdGEubGF5ZXJzO1xuICAgIGZvciAoZGVwdGhJZCBpbiByZWYpIHtcbiAgICAgIGxheWVyRGF0YSA9IHJlZltkZXB0aElkXTtcbiAgICAgIHRoaXMuYWRkTGF5ZXIobGF5ZXJEYXRhKTtcbiAgICB9XG4gICAgaWYgKGRhdGEuem9vbSAhPSBudWxsKSB7XG4gICAgICBjb25zb2xlLmxvZyhkYXRhLnpvb20pO1xuICAgICAgcmV0dXJuIHRoaXMuem9vbShkYXRhLnpvb20uc2NhbGUsIGRhdGEuem9vbS54LCBkYXRhLnpvb20ueSk7XG4gICAgfVxuICB9O1xuXG4gIE1vdmllLnByb3RvdHlwZS56b29tID0gZnVuY3Rpb24oc2NhbGUsIHgsIHkpIHtcbiAgICBpZiAoc2NhbGUgPT0gbnVsbCkge1xuICAgICAgc2NhbGUgPSAxO1xuICAgIH1cbiAgICBpZiAoeCA9PSBudWxsKSB7XG4gICAgICB4ID0gMDtcbiAgICB9XG4gICAgaWYgKHkgPT0gbnVsbCkge1xuICAgICAgeSA9IDA7XG4gICAgfVxuICAgIHRoaXMuJGVsLmNzcyh7XG4gICAgICBcInRyYW5zZm9ybS1vcmlnaW5cIjogeCArIFwicHggXCIgKyB5ICsgXCJweFwiXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuJGVsLmNzcyh7XG4gICAgICB0cmFuc2Zvcm06IFwic2NhbGUoXCIgKyBzY2FsZSArIFwiKVwiXG4gICAgfSk7XG4gIH07XG5cbiAgTW92aWUucHJvdG90eXBlLmFkZExheWVyID0gZnVuY3Rpb24obGF5ZXJEYXRhKSB7XG4gICAgdmFyIGRlcHRoLCBpLCBqLCBsYXllciwgcmVmLCByZWYxO1xuICAgIGRlcHRoID0gbGF5ZXJEYXRhLmRlcHRoO1xuICAgIGlmIChkZXB0aCA+IHRoaXMubGF5ZXJzLmxlbmd0aCkge1xuICAgICAgZm9yIChpID0gaiA9IHJlZiA9IHRoaXMubGF5ZXJzLmxlbmd0aCwgcmVmMSA9IGRlcHRoOyByZWYgPD0gcmVmMSA/IGogPD0gcmVmMSA6IGogPj0gcmVmMTsgaSA9IHJlZiA8PSByZWYxID8gKytqIDogLS1qKSB7XG4gICAgICAgIHRoaXMubGF5ZXJzW2ldID0gbmV3IExheWVyKHRoaXMuJHdyYXBwZXIsIGRlcHRoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGF5ZXIgPSB0aGlzLmdldE9yQ3JlYXRlTGF5ZXIoZGVwdGgpO1xuICAgIHJldHVybiBsYXllci51cGRhdGUobGF5ZXJEYXRhKTtcbiAgfTtcblxuICBNb3ZpZS5wcm90b3R5cGUuZ2V0T3JDcmVhdGVMYXllciA9IGZ1bmN0aW9uKGRlcHRoKSB7XG4gICAgdmFyIGxheWVyO1xuICAgIGlmICh0aGlzLmxheWVyc1tkZXB0aF0gIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMubGF5ZXJzW2RlcHRoXTtcbiAgICB9XG4gICAgbGF5ZXIgPSBuZXcgTGF5ZXIodGhpcy4kd3JhcHBlciwgZGVwdGgpO1xuICAgIHRoaXMubGF5ZXJzW2RlcHRoXSA9IGxheWVyO1xuICAgIHJldHVybiBsYXllcjtcbiAgfTtcblxuICByZXR1cm4gTW92aWU7XG5cbn0pKCk7XG4iLCJ2YXIgU1ZHQW5pbWF0aW9uLFxuICBiaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBTVkdBbmltYXRpb24gPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIFNWR0FuaW1hdGlvbihlbCwganNvbiwgZGF0YSkge1xuICAgIHRoaXMucGxheSA9IGJpbmQodGhpcy5wbGF5LCB0aGlzKTtcbiAgICB0aGlzLmFuaW1hdGlvbiA9IGJvZHltb3Zpbi5sb2FkQW5pbWF0aW9uKHtcbiAgICAgIHdyYXBwZXI6IGVsWzBdLFxuICAgICAgYW5pbVR5cGU6ICdzdmcnLFxuICAgICAgbG9vcDogZGF0YS5sb29wLFxuICAgICAgcHJlcmVuZGVyOiB0cnVlLFxuICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgcGF0aDoganNvblxuICAgIH0pO1xuICAgIGlmIChkYXRhLmRlbGF5ICE9IG51bGwpIHtcbiAgICAgIHNldFRpbWVvdXQodGhpcy5wbGF5LCBkYXRhLmRlbGF5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wbGF5KCk7XG4gICAgfVxuICAgIHRoaXMuYWRkRXZlbnRzKGRhdGEpO1xuICB9XG5cbiAgU1ZHQW5pbWF0aW9uLnByb3RvdHlwZS5hZGRFdmVudHMgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyIGV2ZW50LCBpLCBsZW4sIHJlZiwgcmVzdWx0cztcbiAgICBpZiAoZGF0YS5ldmVudHMgIT0gbnVsbCkge1xuICAgICAgcmVmID0gZGF0YS5ldmVudHM7XG4gICAgICByZXN1bHRzID0gW107XG4gICAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgZXZlbnQgPSByZWZbaV07XG4gICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLmFuaW1hdGlvbi5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gUHViU3ViLnB1Ymxpc2goXCJsYXllci5cIiArIGRhdGEuZGVwdGggKyBcIi5cIiArIGV2ZW50KTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KSh0aGlzKSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxuICB9O1xuXG4gIFNWR0FuaW1hdGlvbi5wcm90b3R5cGUucGxheSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmFuaW1hdGlvbi5wbGF5KCk7XG4gIH07XG5cbiAgU1ZHQW5pbWF0aW9uLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYW5pbWF0aW9uLnN0b3AoKTtcbiAgfTtcblxuICBTVkdBbmltYXRpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmFuaW1hdGlvbi5kZXN0cm95KCk7XG4gICAgaWYgKHRoaXMuaW50ZXJ2YWwgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XG4gICAgfVxuICB9O1xuXG4gIFNWR0FuaW1hdGlvbi5wcm90b3R5cGUudHJhY2VGcmFtZXMgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gY29uc29sZS5sb2coX3RoaXMuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZSwgX3RoaXMuYW5pbWF0aW9uLnRvdGFsRnJhbWVzKTtcbiAgICAgIH07XG4gICAgfSkodGhpcyksIDUwMCk7XG4gIH07XG5cbiAgcmV0dXJuIFNWR0FuaW1hdGlvbjtcblxufSkoKTtcbiIsInZhciBDb21wb25lbnQ7XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50ID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBDb21wb25lbnQoJGVsLCAkbm9kZSkge1xuICAgIHRoaXMuJG5vZGUgPSAkbm9kZTtcbiAgICAkZWwuYXBwZW5kKHRoaXMuJG5vZGUpO1xuICAgIHNoYWRvd0ljb25zSW5zdGFuY2Uuc3ZnUmVwbGFjZVdpdGhTdHJpbmcocHhTdmdJY29uU3RyaW5nLCB0aGlzLiRub2RlKTtcbiAgfVxuXG4gIENvbXBvbmVudC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRub2RlLnJlbW92ZSgpO1xuICB9O1xuXG4gIHJldHVybiBDb21wb25lbnQ7XG5cbn0pKCk7XG4iLCJ2YXIgQ29tcG9uZW50LCBTZWxlY3Rpb25EaWFsb2d1ZSxcbiAgZXh0ZW5kID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChoYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9LFxuICBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbkNvbXBvbmVudCA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvY29tcG9uZW50Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2VsZWN0aW9uRGlhbG9ndWUgPSAoZnVuY3Rpb24oc3VwZXJDbGFzcykge1xuICBleHRlbmQoU2VsZWN0aW9uRGlhbG9ndWUsIHN1cGVyQ2xhc3MpO1xuXG4gIGZ1bmN0aW9uIFNlbGVjdGlvbkRpYWxvZ3VlKCRlbCwgZGF0YSkge1xuICAgIHZhciBqYWRlRGF0YTtcbiAgICBqYWRlRGF0YSA9IHRoaXMuZ2VuZXJhdGVDb25maWdEYXRhKGRhdGEpO1xuICAgIHRoaXMuJG5vZGUgPSAkKGphZGVUZW1wbGF0ZVsnc2xpZGUtdXgvY29tcG9uZW50cy9zZWxlY3Rpb24tZGlhbG9ndWUnXShqYWRlRGF0YSkpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnModGhpcy4kbm9kZSwgZGF0YSk7XG4gICAgU2VsZWN0aW9uRGlhbG9ndWUuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgJGVsLCB0aGlzLiRub2RlKTtcbiAgfVxuXG4gIFNlbGVjdGlvbkRpYWxvZ3VlLnByb3RvdHlwZS5nZW5lcmF0ZUNvbmZpZ0RhdGEgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyIGksIGl0ZW0sIGosIGphZGVEYXRhLCBsZW4sIHJlZjtcbiAgICB0aGlzLml0ZW1zID0ge307XG4gICAgamFkZURhdGEgPSB7fTtcbiAgICBqYWRlRGF0YS50aXRsZSA9IGRhdGEudGl0bGU7XG4gICAgamFkZURhdGEuc3ViVGl0bGUgPSBkYXRhLnN1YlRpdGxlO1xuICAgIGphZGVEYXRhLmJ0blR4dCA9IGRhdGEuc3VibWl0QnRuLnR4dDtcbiAgICBqYWRlRGF0YS5idG5JY29uID0gZGF0YS5zdWJtaXRCdG4uaWNvbjtcbiAgICBqYWRlRGF0YS5pbnRybyA9IGRhdGEuaW50cm87XG4gICAgamFkZURhdGEuaXRlbXMgPSBbXTtcbiAgICByZWYgPSBkYXRhLml0ZW1zO1xuICAgIGZvciAoaSA9IGogPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBqIDwgbGVuOyBpID0gKytqKSB7XG4gICAgICBpdGVtID0gcmVmW2ldO1xuICAgICAgaXRlbS5pZCA9IFwiaXRlbVwiICsgaTtcbiAgICAgIGphZGVEYXRhLml0ZW1zLnB1c2goe1xuICAgICAgICB0eHQ6IGl0ZW0uYnRuVHh0LFxuICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgaWNvbjogaXRlbS5pY29uXG4gICAgICB9KTtcbiAgICAgIHRoaXMuaXRlbXNbaXRlbS5pZF0gPSBpdGVtO1xuICAgIH1cbiAgICByZXR1cm4gamFkZURhdGE7XG4gIH07XG5cbiAgU2VsZWN0aW9uRGlhbG9ndWUucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24oJGVsLCBkYXRhKSB7XG4gICAgdmFyICRidXR0b25zO1xuICAgICRidXR0b25zID0gJChcIi5idXR0b25cIiwgJGVsKTtcbiAgICAkYnV0dG9ucy5vbihcImNsaWNrXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdmFyICR0YXJnO1xuICAgICAgICAkdGFyZyA9ICQoZS50YXJnZXQpO1xuICAgICAgICByZXR1cm4gX3RoaXMuYWN0aXZhdGVJdGVtKCR0YXJnLCBfdGhpcy5pdGVtc1skdGFyZy5hdHRyKCdpZCcpXSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICByZXR1cm4gJChcIiNhY3Rpb24tYnRuXCIsICRlbCkub24oXCJjbGlja1wiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICAgIHZhciBhY3Rpb24sIGosIGxlbiwgcmVmO1xuICAgICAgICByZWYgPSBkYXRhLmNsaWNrO1xuICAgICAgICBmb3IgKGogPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgICAgICBhY3Rpb24gPSByZWZbal07XG4gICAgICAgICAgUHViU3ViLnB1Ymxpc2goYWN0aW9uLmNtZCwgYWN0aW9uLmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcy5kZXN0cm95KCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgfTtcblxuICBTZWxlY3Rpb25EaWFsb2d1ZS5wcm90b3R5cGUuYWN0aXZhdGVJdGVtID0gZnVuY3Rpb24oJGJ1dHRvbiwgaXRlbSkge1xuICAgICQoXCIuaW50cm9cIiwgdGhpcy4kbm9kZSkuY3NzKHtcbiAgICAgIGRpc3BsYXk6IFwibm9uZVwiXG4gICAgfSk7XG4gICAgJChcIi5pdGVtLWluZm9cIiwgdGhpcy4kbm9kZSkuY3NzKHtcbiAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIlxuICAgIH0pO1xuICAgICQoXCIuYnV0dG9uXCIsIHRoaXMuJG5vZGUpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICRidXR0b24uYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgJChcIi5pY29uXCIsIHRoaXMuJG5vZGUpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICQoXCIjaWNvbi1cIiArIGl0ZW0uaWQsIHRoaXMuJG5vZGUpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgICQoXCIuYmx1cmJcIiwgdGhpcy4kbm9kZSkuaHRtbChpdGVtLmJsdXJiKTtcbiAgICAkKFwiLmRldGFpbHNcIiwgdGhpcy4kbm9kZSkuaHRtbChpdGVtLmRldGFpbHMpO1xuICAgIHJldHVybiBQdWJTdWIucHVibGlzaChpdGVtLmNsaWNrLmNtZCwgaXRlbS5jbGljay5kYXRhKTtcbiAgfTtcblxuICByZXR1cm4gU2VsZWN0aW9uRGlhbG9ndWU7XG5cbn0pKENvbXBvbmVudCk7XG4iLCJ2YXIgQXVkaW9UcmFjaywgQ3RhbmxlZTtcblxuQXVkaW9UcmFjayA9IHJlcXVpcmUoJ2VwaXNvZGUvYXVkaW8tdHJhY2snKTtcblxubW9kdWxlLmV4cG9ydHMgPSBDdGFubGVlID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBDdGFubGVlKCRwYXJlbnQpIHtcbiAgICBhcmlzdG90bGUuY3RhbmxlZSA9IHRoaXM7XG4gICAgdGhpcy4kZWwgPSAkKGphZGVUZW1wbGF0ZVsnc2xpZGUtdXgvY3RhbmxlZS9jdGFubGVlJ10oe30pKTtcbiAgICBzaGFkb3dJY29uc0luc3RhbmNlLnN2Z1JlcGxhY2VXaXRoU3RyaW5nKHB4U3ZnSWNvblN0cmluZywgdGhpcy4kZWwpO1xuICAgIHRoaXMuJHNwZWVjaEJveCA9ICQoXCIuc3BlZWNoLWJveFwiLCB0aGlzLiRlbCk7XG4gICAgdGhpcy4kdGV4dCA9ICQoXCIudGV4dCBzcGFuLmNvbnRlbnRcIiwgdGhpcy4kc3BlZWNoQm94KTtcbiAgICAkKFwiLnRleHQgc3Bhbi5uZXh0XCIsIHRoaXMuJHNwZWVjaEJveCkub24oXCJjbGlja1wiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnBsYXlOZXh0QWN0aW9uKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCdjdGFubGVlLmFjdGl2YXRlJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oYSwgYWN0aW9uKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5wbGF5QWN0aW9uKGFjdGlvbik7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICAkcGFyZW50LmFwcGVuZCh0aGlzLiRlbCk7XG4gICAgdGhpcy5yZXR1cm5Ub1N0YXRpb24oKTtcbiAgfVxuXG4gIEN0YW5sZWUucHJvdG90eXBlLmFjdGl2YXRlID0gZnVuY3Rpb24oZGF0YTEpIHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhMTtcbiAgICBpZiAodGhpcy5kYXRhLnRpbWVsaW5lID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5jdXJyZW50QWN0aW9uSW5kZXggPSAtMTtcbiAgICB0aGlzLnRpbWVsaW5lID0gdGhpcy5kYXRhLnRpbWVsaW5lO1xuICAgIHJldHVybiB0aGlzLnBsYXlOZXh0QWN0aW9uKCk7XG4gIH07XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUuc2F5ID0gZnVuY3Rpb24odGV4dCwgYXVkaW8sIG5leHQpIHtcbiAgICB2YXIgdHJhY2s7XG4gICAgaWYgKHRleHQgIT0gbnVsbCkge1xuICAgICAgdGhpcy5zaG93VGV4dCgpO1xuICAgICAgdGhpcy4kdGV4dC5odG1sKHRleHQpO1xuICAgIH1cbiAgICBpZiAoYXVkaW8gIT0gbnVsbCkge1xuICAgICAgdHJhY2sgPSBuZXcgQXVkaW9UcmFjayhhdWRpbyk7XG4gICAgICByZXR1cm4gdHJhY2sucGxheSgoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmIChuZXh0ID09PSAnYXVkaW8nKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMucGxheU5leHRBY3Rpb24oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9KSh0aGlzKSk7XG4gICAgfVxuICB9O1xuXG4gIEN0YW5sZWUucHJvdG90eXBlLnNldEVtb3Rpb24gPSBmdW5jdGlvbihlbW90aW9uKSB7fTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5nb3RvID0gZnVuY3Rpb24oeCwgeSwgZHVyYXRpb24sIGRlbGF5KSB7XG4gICAgaWYgKHggPT0gbnVsbCkge1xuICAgICAgeCA9IDk2MDtcbiAgICB9XG4gICAgaWYgKHkgPT0gbnVsbCkge1xuICAgICAgeSA9IDA7XG4gICAgfVxuICAgIGlmIChkdXJhdGlvbiA9PSBudWxsKSB7XG4gICAgICBkdXJhdGlvbiA9IDYwMDtcbiAgICB9XG4gICAgaWYgKGRlbGF5ID09IG51bGwpIHtcbiAgICAgIGRlbGF5ID0gMDtcbiAgICB9XG4gICAgdGhpcy4kZWwudmVsb2NpdHkoXCJzdG9wXCIsIHRydWUpO1xuICAgIHJldHVybiB0aGlzLiRlbC52ZWxvY2l0eSh7XG4gICAgICB0b3A6IHksXG4gICAgICBsZWZ0OiB4XG4gICAgfSwge1xuICAgICAgZGVsYXk6IGRlbGF5LFxuICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgZWFzaW5nOiBcImVhc2VJbk91dFF1aW50XCJcbiAgICB9KTtcbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5wbGF5TmV4dEFjdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnRBY3Rpb25JbmRleCA9PT0gdGhpcy50aW1lbGluZS5sZW5ndGggLSAxKSB7XG4gICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnBsYXlBY3Rpb24odGhpcy50aW1lbGluZVsrK3RoaXMuY3VycmVudEFjdGlvbkluZGV4XS5hY3Rpb24pO1xuICB9O1xuXG4gIEN0YW5sZWUucHJvdG90eXBlLnBsYXlBY3Rpb24gPSBmdW5jdGlvbihhY3Rpb25JZCkge1xuICAgIHZhciBhY3Rpb247XG4gICAgdGhpcy5jdXJyZW50QWN0aW9uSW5kZXggPSB0aGlzLmdldEluZGV4T2ZBY3Rpb24oYWN0aW9uSWQpO1xuICAgIGFjdGlvbiA9IHRoaXMub3ZlcmxheURlZmF1bHRzKGFjdGlvbklkKTtcbiAgICBpZiAoYWN0aW9uLmVtbyAhPSBudWxsKSB7XG4gICAgICB0aGlzLnNldEVtb3Rpb24oYWN0aW9uLmVtbyk7XG4gICAgfVxuICAgIGlmIChhY3Rpb24ucG9zICE9IG51bGwpIHtcbiAgICAgIHRoaXMuZ290byhhY3Rpb24ucG9zWzBdLCBhY3Rpb24ucG9zWzFdLCBhY3Rpb24ucG9zWzJdLCBhY3Rpb24ucG9zWzNdKTtcbiAgICB9XG4gICAgaWYgKGFjdGlvbi5hY3Rpb24gIT0gbnVsbCkge1xuICAgICAgUHViU3ViLnB1Ymxpc2goYWN0aW9uLmFjdGlvbi5jbWQsIGFjdGlvbi5hY3Rpb24uZGF0YSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnNheShhY3Rpb24udGV4dCwgYWN0aW9uLmF1ZGlvLCBhY3Rpb24ubmV4dCk7XG4gIH07XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnJldHVyblRvU3RhdGlvbigpO1xuICAgIHJldHVybiBQdWJTdWIucHVibGlzaCgnY3RhbmxlZS5jb21wbGV0ZScpO1xuICB9O1xuXG4gIEN0YW5sZWUucHJvdG90eXBlLnJldHVyblRvU3RhdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaGlkZVRleHQoKTtcbiAgICByZXR1cm4gdGhpcy5nb3RvKCk7XG4gIH07XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUuaGlkZVRleHQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kc3BlZWNoQm94LmNzcyh7XG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgXCJwb2ludGVyLWV2ZW50c1wiOiBcIm5vbmVcIlxuICAgIH0pO1xuICB9O1xuXG4gIEN0YW5sZWUucHJvdG90eXBlLnNob3dUZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJHNwZWVjaEJveC5jc3Moe1xuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIFwicG9pbnRlci1ldmVudHNcIjogXCJhbGxcIlxuICAgIH0pO1xuICB9O1xuXG4gIEN0YW5sZWUucHJvdG90eXBlLmdldEluZGV4T2ZBY3Rpb24gPSBmdW5jdGlvbihhY3Rpb24pIHtcbiAgICB2YXIgZGF0YSwgaSwgaiwgbGVuLCByZWY7XG4gICAgaWYgKHRoaXMudGltZWxpbmUgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIHJlZiA9IHRoaXMudGltZWxpbmU7XG4gICAgZm9yIChpID0gaiA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGogPCBsZW47IGkgPSArK2opIHtcbiAgICAgIGRhdGEgPSByZWZbaV07XG4gICAgICBpZiAoZGF0YS5hY3Rpb24gPT09IGFjdGlvbikge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUub3ZlcmxheURlZmF1bHRzID0gZnVuY3Rpb24oYWN0aW9uSWQpIHtcbiAgICB2YXIgYWN0aW9ucywga2V5LCByZWYsIHZhbDtcbiAgICBpZiAodGhpcy5kYXRhLmRlZmF1bHRzID09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLmRhdGEuYWN0aW9uc1thY3Rpb25JZF07XG4gICAgfVxuICAgIGFjdGlvbnMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YS5kZWZhdWx0cykpO1xuICAgIHJlZiA9IHRoaXMuZGF0YS5hY3Rpb25zW2FjdGlvbklkXTtcbiAgICBmb3IgKGtleSBpbiByZWYpIHtcbiAgICAgIHZhbCA9IHJlZltrZXldO1xuICAgICAgYWN0aW9uc1trZXldID0gdmFsO1xuICAgIH1cbiAgICByZXR1cm4gYWN0aW9ucztcbiAgfTtcblxuICByZXR1cm4gQ3RhbmxlZTtcblxufSkoKTtcbiIsInZhciBDdGFubGVlLCBTZWxlY3Rpb25EaWFsb2d1ZSwgU2xpZGVVWDtcblxuQ3RhbmxlZSA9IHJlcXVpcmUoJ3NsaWRlLXV4L2N0YW5sZWUvQ3RhbmxlZScpO1xuXG5TZWxlY3Rpb25EaWFsb2d1ZSA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvc2VsZWN0aW9uLWRpYWxvZ3VlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2xpZGVVWCA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gU2xpZGVVWCgkZWwpIHtcbiAgICB0aGlzLiRlbCA9ICRlbDtcbiAgICB0aGlzLmN0YW5sZWUgPSBuZXcgQ3RhbmxlZSh0aGlzLiRlbCk7XG4gIH1cblxuICBTbGlkZVVYLnByb3RvdHlwZS5wb3B1bGF0ZSA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2YXIgY29tcG9uZW50LCBpLCBsZW4sIHJlZiwgcmVzdWx0cztcbiAgICBpZiAoKGRhdGEgIT0gbnVsbCA/IGRhdGEuY29tcG9uZW50cyA6IHZvaWQgMCkgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZWYgPSBkYXRhLmNvbXBvbmVudHM7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgY29tcG9uZW50ID0gcmVmW2ldO1xuICAgICAgcmVzdWx0cy5wdXNoKHRoaXMuYWRkQ29tcG9uZW50KGNvbXBvbmVudCkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBTbGlkZVVYLnByb3RvdHlwZS5hZGRDb21wb25lbnQgPSBmdW5jdGlvbihjb21wb25lbnREYXRhKSB7XG4gICAgdmFyIGNvbXBvbmVudDtcbiAgICBzd2l0Y2ggKGNvbXBvbmVudERhdGEua2luZCkge1xuICAgICAgY2FzZSBcInNlbGVjdGlvbi1kaWFsb2d1ZVwiOlxuICAgICAgICByZXR1cm4gY29tcG9uZW50ID0gbmV3IFNlbGVjdGlvbkRpYWxvZ3VlKHRoaXMuJGVsLCBjb21wb25lbnREYXRhLmNvbmZpZyk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBTbGlkZVVYO1xuXG59KSgpO1xuIl19

var aristotle;

aristotle = new Aristotle($(".holder"), "/episodes/episode1");
