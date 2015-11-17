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

buf.push("<div class=\"ctanlee\"><svg class=\"defs\"><defs><filter id=\"dropshadow\" height=\"200%\"><fegaussianblur in=\"SourceGraphic\" stddeviation=\"1.5\"></fegaussianblur><feComponentTransfer><feFuncA type=\"linear\" slope=\"0.5\"> </feFuncA></feComponentTransfer><femerge><femergenode></femergenode><femergenode in=\"SourceGraphic\"></femergenode></femerge></filter></defs></svg><div class=\"face\"><img data-src=\"ctanlee\" class=\"shadow-icon\"/></div><div class=\"speech-box\"> <div class=\"text\"> <span class=\"content\"> </span><span class=\"next\"></span></div></div></div>");;return buf.join("");
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
    var key, ref, results, slide;
    ref = trainingData.slides;
    results = [];
    for (key in ref) {
      slide = ref[key];
      slide = new Slide(movie, ux, slide, this.slideComplete);
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
    return this.animation = new SVGAnimation(this.$layer, aristotle.episodeRoot + "/animations/" + layerData.content, layerData);
  };

  Layer.prototype.addImage = function(layerData) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9ndWxwLWNvZmZlZWlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiYXJpc3RvdGxlLmNvZmZlZSIsImNocm9tZS9jaHJvbWUtdWkuY29mZmVlIiwiZXBpc29kZS9hdWRpby10cmFjay5jb2ZmZWUiLCJlcGlzb2RlL2VwaXNvZGUuY29mZmVlIiwiZXBpc29kZS9zbGlkZS5jb2ZmZWUiLCJlcGlzb2RlL3NsaWRlcy5jb2ZmZWUiLCJtaXNjL2Rldi10b29scy5jb2ZmZWUiLCJtaXNjL2VwaXNvZGUtbG9hZGVyLmNvZmZlZSIsIm1vdmllL0xheWVyLmNvZmZlZSIsIm1vdmllL21vdmllLmNvZmZlZSIsIm1vdmllL3N2Zy1hbmltYXRpb24uY29mZmVlIiwic2xpZGUtdXgvY29tcG9uZW50cy9jb21wb25lbnQuY29mZmVlIiwic2xpZGUtdXgvY29tcG9uZW50cy9zZWxlY3Rpb24tZGlhbG9ndWUuY29mZmVlIiwic2xpZGUtdXgvY3RhbmxlZS9DdGFubGVlLmNvZmZlZSIsInNsaWRlLXV4L3NsaWRlLXV4LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBBcmlzdG90bGUsIENocm9tZVVJLCBEZXZUb29scywgRXBpc29kZSwgRXBpc29kZUxvYWRlciwgTW92aWUsIFNsaWRlVVgsXG4gIGJpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9O1xuXG5FcGlzb2RlID0gcmVxdWlyZShcImVwaXNvZGUvZXBpc29kZVwiKTtcblxuQ2hyb21lVUkgPSByZXF1aXJlKFwiY2hyb21lL2Nocm9tZS11aVwiKTtcblxuRGV2VG9vbHMgPSByZXF1aXJlKCdtaXNjL2Rldi10b29scycpO1xuXG5Nb3ZpZSA9IHJlcXVpcmUoJ21vdmllL21vdmllJyk7XG5cbkVwaXNvZGVMb2FkZXIgPSByZXF1aXJlKCdtaXNjL2VwaXNvZGUtbG9hZGVyJyk7XG5cblNsaWRlVVggPSByZXF1aXJlKCdzbGlkZS11eC9zbGlkZS11eCcpO1xuXG5BcmlzdG90bGUgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIEFyaXN0b3RsZSgkZWwsIGVwaXNvZGVSb290KSB7XG4gICAgdmFyIGRldlRvb2xzLCBlcGlzb2RlTG9hZGVyO1xuICAgIHRoaXMuZXBpc29kZVJvb3QgPSBlcGlzb2RlUm9vdDtcbiAgICB0aGlzLm9uSnNvbkxvYWRlZCA9IGJpbmQodGhpcy5vbkpzb25Mb2FkZWQsIHRoaXMpO1xuICAgIHdpbmRvdy5hcmlzdG90bGUgPSB0aGlzO1xuICAgIHRoaXMuYnVpbGQoJGVsKTtcbiAgICBlcGlzb2RlTG9hZGVyID0gbmV3IEVwaXNvZGVMb2FkZXIodGhpcy5vbkpzb25Mb2FkZWQpO1xuICAgIGRldlRvb2xzID0gbmV3IERldlRvb2xzKCk7XG4gIH1cblxuICBBcmlzdG90bGUucHJvdG90eXBlLm9uSnNvbkxvYWRlZCA9IGZ1bmN0aW9uKGVwaXNvZGVEYXRhKSB7XG4gICAgdmFyIGVwaXNvZGU7XG4gICAgcmV0dXJuIGVwaXNvZGUgPSBuZXcgRXBpc29kZShlcGlzb2RlRGF0YSwgdGhpcy5tb3ZpZSwgdGhpcy5zbGlkZVVYKTtcbiAgfTtcblxuICBBcmlzdG90bGUucHJvdG90eXBlLmJ1aWxkID0gZnVuY3Rpb24oJGVsKSB7XG4gICAgdmFyICRiYXNlLCBzaGFkb3dJY29ucztcbiAgICAkYmFzZSA9ICQoamFkZVRlbXBsYXRlWydhcmlzdG90bGUnXSh7fSkpO1xuICAgICRlbC5hcHBlbmQoJGJhc2UpO1xuICAgIHNoYWRvd0ljb25zID0gbmV3IHB4aWNvbnMuU2hhZG93SWNvbnMoKTtcbiAgICBzaGFkb3dJY29uc0luc3RhbmNlLnN2Z1JlcGxhY2VXaXRoU3RyaW5nKHB4U3ZnSWNvblN0cmluZywgJGJhc2UpO1xuICAgIHRoaXMuY2hyb21lVUkgPSBuZXcgQ2hyb21lVUkoJChcIi5jaHJvbWVcIiwgJGJhc2UpKTtcbiAgICB0aGlzLnNsaWRlVVggPSBuZXcgU2xpZGVVWCgkKFwiLnNsaWRlLXV4XCIsICRiYXNlKSk7XG4gICAgcmV0dXJuIHRoaXMubW92aWUgPSBuZXcgTW92aWUoJChcIi5tb3ZpZVwiLCAkYmFzZSkpO1xuICB9O1xuXG4gIHJldHVybiBBcmlzdG90bGU7XG5cbn0pKCk7XG5cbndpbmRvdy5BcmlzdG90bGUgPSBBcmlzdG90bGU7XG4iLCJ2YXIgQ2hyb21lVUk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2hyb21lVUkgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIENocm9tZVVJKCRlbCkge1xuICAgIHRoaXMuYnVpbGQoJGVsKTtcbiAgfVxuXG4gIENocm9tZVVJLnByb3RvdHlwZS5idWlsZCA9IGZ1bmN0aW9uKCRlbCkge1xuICAgIHZhciAkcHJvZ3Jlc3MsICR0b3AsIGRhdGE7XG4gICAgZGF0YSA9IHtcbiAgICAgIG5hbWU6IFwiSm9obiBcXFwiRGVhZGV5ZVxcXCIgTmltYnVzXCIsXG4gICAgICBlcGlzb2RlOiBcIjFcIlxuICAgIH07XG4gICAgdGhpcy5nZXRSYW5rKGRhdGEsIFwiY3liZXItY2FkZXRcIik7XG4gICAgJHRvcCA9ICQoamFkZVRlbXBsYXRlWydjaHJvbWUtdWkvdG9wJ10oZGF0YSkpO1xuICAgICRlbC5hcHBlbmQoJHRvcCk7XG4gICAgJHByb2dyZXNzID0gJChqYWRlVGVtcGxhdGVbJ2Nocm9tZS11aS9wcm9ncmVzcyddKHt9KSk7XG4gICAgJGVsLmFwcGVuZCgkcHJvZ3Jlc3MpO1xuICAgIHJldHVybiBzaGFkb3dJY29uc0luc3RhbmNlLnN2Z1JlcGxhY2VXaXRoU3RyaW5nKHB4U3ZnSWNvblN0cmluZywgJGVsKTtcbiAgfTtcblxuICBDaHJvbWVVSS5wcm90b3R5cGUuZ2V0UmFuayA9IGZ1bmN0aW9uKGRhdGEsIGVwaXNvZGUpIHtcbiAgICBzd2l0Y2ggKGVwaXNvZGUpIHtcbiAgICAgIGNhc2UgJ3JlY3J1aXQnOlxuICAgICAgICBkYXRhLnJhbmsgPSBcInJlY3J1aXRcIjtcbiAgICAgICAgcmV0dXJuIGRhdGEuYmFkZ2UgPSBcInJhbmstYmFkZ2UtcmVjcnVpdFwiO1xuICAgICAgY2FzZSAnY2FkZXQnOlxuICAgICAgICBkYXRhLnJhbmsgPSBcImNhZGV0XCI7XG4gICAgICAgIHJldHVybiBkYXRhLmJhZGdlID0gXCJyYW5rLWJhZGdlLWNhZGV0XCI7XG4gICAgICBjYXNlICdjYWRldC1maXJzdC1jbGFzcyc6XG4gICAgICAgIGRhdGEucmFuayA9IFwiQ2FkZXQgRmlyc3QgQ2xhc3NcIjtcbiAgICAgICAgcmV0dXJuIGRhdGEuYmFkZ2UgPSBcInJhbmstYmFkZ2UtY2FkZXQtZmlyc3QtY2xhc3NcIjtcbiAgICAgIGNhc2UgJ3RlY2huaWNhbC1jYWRldCc6XG4gICAgICAgIGRhdGEucmFuayA9IFwiVGVjaG5pY2FsIENhZGV0XCI7XG4gICAgICAgIHJldHVybiBkYXRhLmJhZGdlID0gXCJyYW5rLWJhZGdlLXRlY2huaWNhbC1jYWRldFwiO1xuICAgICAgY2FzZSAnY3liZXItY2FkZXQnOlxuICAgICAgICBkYXRhLnJhbmsgPSBcIkN5YmVyIENhZGV0XCI7XG4gICAgICAgIHJldHVybiBkYXRhLmJhZGdlID0gXCJyYW5rLWJhZGdlLWN5YmVyLWNhZGV0XCI7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBDaHJvbWVVSTtcblxufSkoKTtcbiIsInZhciBBdWRpb1RyYWNrO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF1ZGlvVHJhY2sgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIEF1ZGlvVHJhY2soc3JjKSB7XG4gICAgdGhpcy5zcmMgPSBzcmM7XG4gICAgdGhpcy5pbml0U291bmRTZXR0aW5ncygpO1xuICB9XG5cbiAgQXVkaW9UcmFjay5wcm90b3R5cGUucGxheSA9IGZ1bmN0aW9uKG9uQ29tcGxldGUpIHtcbiAgICB0aGlzLnNvdW5kID0gY3JlYXRlanMuU291bmQucGxheSh0aGlzLnNyYywgQXVkaW9UcmFjay5wcGMpO1xuICAgIHJldHVybiB0aGlzLnNvdW5kLmFkZEV2ZW50TGlzdGVuZXIoXCJjb21wbGV0ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBvbkNvbXBsZXRlKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgQXVkaW9UcmFjay5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnNvdW5kLnN0b3AoKTtcbiAgfTtcblxuICBBdWRpb1RyYWNrLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zb3VuZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY29tcGxldGVcIik7XG4gICAgcmV0dXJuIHRoaXMuc291bmQuZGVzdHJveSgpO1xuICB9O1xuXG4gIEF1ZGlvVHJhY2sucHJvdG90eXBlLmluaXRTb3VuZFNldHRpbmdzID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKEF1ZGlvVHJhY2sucHBjICE9IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIEF1ZGlvVHJhY2sucHBjID0gbmV3IGNyZWF0ZWpzLlBsYXlQcm9wc0NvbmZpZygpLnNldCh7XG4gICAgICBpbnRlcnJ1cHQ6IGNyZWF0ZWpzLlNvdW5kLklOVEVSUlVQVF9BTlksXG4gICAgICB2b2x1bWU6IDEsXG4gICAgICBwYW46IDFcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gQXVkaW9UcmFjaztcblxufSkoKTtcbiIsInZhciBFcGlzb2RlLCBTbGlkZXMsXG4gIGJpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9O1xuXG5TbGlkZXMgPSByZXF1aXJlKCdlcGlzb2RlL3NsaWRlcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVwaXNvZGUgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIEVwaXNvZGUodHJhaW5pbmdEYXRhLCBtb3ZpZSwgdXgpIHtcbiAgICB0aGlzLm9uU2xpZGVzQ29tcGxldGUgPSBiaW5kKHRoaXMub25TbGlkZXNDb21wbGV0ZSwgdGhpcyk7XG4gICAgdGhpcy5zbGlkZXMgPSBuZXcgU2xpZGVzKHRyYWluaW5nRGF0YSwgbW92aWUsIHV4LCB0aGlzLm9uU2xpZGVzQ29tcGxldGUpO1xuICAgIHRoaXMuc2xpZGVzLnN0YXJ0KCk7XG4gIH1cblxuICBFcGlzb2RlLnByb3RvdHlwZS5vblNsaWRlc0NvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKFwic2xpZGVzIGFyZSBjb21wbGV0ZVwiKTtcbiAgfTtcblxuICByZXR1cm4gRXBpc29kZTtcblxufSkoKTtcbiIsInZhciBBdWRpb1RyYWNrLCBTVkdBbmltYXRpb24sIFNsaWRlLFxuICBiaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfTtcblxuQXVkaW9UcmFjayA9IHJlcXVpcmUoXCJlcGlzb2RlL2F1ZGlvLXRyYWNrXCIpO1xuXG5TVkdBbmltYXRpb24gPSByZXF1aXJlKFwibW92aWUvc3ZnLWFuaW1hdGlvblwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTbGlkZSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gU2xpZGUobW92aWUsIHNsaWRlVVgsIHNsaWRlRGF0YSwgb25TbGlkZUNvbXBsZXRlKSB7XG4gICAgdGhpcy5tb3ZpZSA9IG1vdmllO1xuICAgIHRoaXMuc2xpZGVVWCA9IHNsaWRlVVg7XG4gICAgdGhpcy5zbGlkZURhdGEgPSBzbGlkZURhdGE7XG4gICAgdGhpcy5vblNsaWRlQ29tcGxldGUgPSBvblNsaWRlQ29tcGxldGU7XG4gICAgdGhpcy5wbGF5ID0gYmluZCh0aGlzLnBsYXksIHRoaXMpO1xuICB9XG5cbiAgU2xpZGUucHJvdG90eXBlLnBsYXkgPSBmdW5jdGlvbihvbkNvbXBsZXRlKSB7XG4gICAgdGhpcy5tb3ZpZS5wb3B1bGF0ZSh0aGlzLnNsaWRlRGF0YS5tb3ZpZSk7XG4gICAgdGhpcy5zbGlkZVVYLnBvcHVsYXRlKHRoaXMuc2xpZGVEYXRhLnV4KTtcbiAgICB0aGlzLnNldER1cmF0aW9uKCk7XG4gICAgcmV0dXJuIHRoaXMucnVuQ3RhbmxlZSh0aGlzLnNsaWRlRGF0YS5jdGFubGVlKTtcbiAgfTtcblxuICBTbGlkZS5wcm90b3R5cGUuc2V0RHVyYXRpb24gPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5zbGlkZURhdGEuZHVyYXRpb24gPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzd2l0Y2ggKHRoaXMuc2xpZGVEYXRhLmR1cmF0aW9uLmtpbmQpIHtcbiAgICAgIGNhc2UgXCJ0aW1lXCI6XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KHRoaXMub25TbGlkZUNvbXBsZXRlLCB0aGlzLnNsaWRlRGF0YS5kdXJhdGlvbi5zZWNvbmRzICogMTAwMCk7XG4gICAgICBjYXNlIFwidXNlclwiOlxuICAgICAgICByZXR1cm4gY29uc29sZS5sb2coXCJ3YWl0aW5nIG9uIHRoZSB1c2VyXCIpO1xuICAgICAgY2FzZSBcInV4XCI6XG4gICAgICAgIHJldHVybiBQdWJTdWIuc3Vic2NyaWJlKCd1eC5jb21wbGV0ZScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5vblNsaWRlQ29tcGxldGUoKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KSh0aGlzKSk7XG4gICAgICBjYXNlIFwiY3RhbmxlZVwiOlxuICAgICAgICByZXR1cm4gUHViU3ViLnN1YnNjcmliZSgnY3RhbmxlZS5jb21wbGV0ZScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5vblNsaWRlQ29tcGxldGUoKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KSh0aGlzKSk7XG4gICAgICBjYXNlIFwicHVic3ViXCI6XG4gICAgICAgIHJldHVybiBQdWJTdWIuc3Vic2NyaWJlKHRoaXMuc2xpZGVEYXRhLmR1cmF0aW9uLmV2ZW50LCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMub25TbGlkZUNvbXBsZXRlKCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSkodGhpcykpO1xuICAgIH1cbiAgfTtcblxuICBTbGlkZS5wcm90b3R5cGUucnVuQ3RhbmxlZSA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBpZiAoZGF0YSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gYXJpc3RvdGxlLmN0YW5sZWUuYWN0aXZhdGUoZGF0YSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBTbGlkZTtcblxufSkoKTtcbiIsInZhciBTbGlkZSwgU2xpZGVzLFxuICBiaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfTtcblxuU2xpZGUgPSByZXF1aXJlKCdlcGlzb2RlL3NsaWRlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2xpZGVzID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBTbGlkZXModHJhaW5pbmdEYXRhLCBtb3ZpZSwgdXgsIG9uQ29tcGxldGUpIHtcbiAgICB0aGlzLm9uQ29tcGxldGUgPSBvbkNvbXBsZXRlO1xuICAgIHRoaXMubmV4dFNsaWRlID0gYmluZCh0aGlzLm5leHRTbGlkZSwgdGhpcyk7XG4gICAgdGhpcy5zbGlkZUNvbXBsZXRlID0gYmluZCh0aGlzLnNsaWRlQ29tcGxldGUsIHRoaXMpO1xuICAgIHRoaXMuc2xpZGVzID0gW107XG4gICAgdGhpcy5jdXJyZW50U2xpZGVJbmRleCA9IC0xO1xuICAgIHRoaXMuY3JlYXRlU2xpZGVzKHRyYWluaW5nRGF0YSwgbW92aWUsIHV4KTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCdzbGlkZXMubmV4dC1zbGlkZScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMubmV4dFNsaWRlKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgfVxuXG4gIFNsaWRlcy5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5uZXh0U2xpZGUoKTtcbiAgfTtcblxuICBTbGlkZXMucHJvdG90eXBlLmNyZWF0ZVNsaWRlcyA9IGZ1bmN0aW9uKHRyYWluaW5nRGF0YSwgbW92aWUsIHV4KSB7XG4gICAgdmFyIGtleSwgcmVmLCByZXN1bHRzLCBzbGlkZTtcbiAgICByZWYgPSB0cmFpbmluZ0RhdGEuc2xpZGVzO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGtleSBpbiByZWYpIHtcbiAgICAgIHNsaWRlID0gcmVmW2tleV07XG4gICAgICBzbGlkZSA9IG5ldyBTbGlkZShtb3ZpZSwgdXgsIHNsaWRlLCB0aGlzLnNsaWRlQ29tcGxldGUpO1xuICAgICAgcmVzdWx0cy5wdXNoKHRoaXMuc2xpZGVzLnB1c2goc2xpZGUpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgU2xpZGVzLnByb3RvdHlwZS5zbGlkZUNvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubmV4dFNsaWRlKCk7XG4gIH07XG5cbiAgU2xpZGVzLnByb3RvdHlwZS5uZXh0U2xpZGUgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50U2xpZGVJbmRleCA9PT0gdGhpcy5zbGlkZXMubGVuZ3RoIC0gMSkge1xuICAgICAgdGhpcy50cmFpbmluZ0NvbXBsZXRlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuY3VycmVudFNsaWRlID0gdGhpcy5zbGlkZXNbKyt0aGlzLmN1cnJlbnRTbGlkZUluZGV4XTtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50U2xpZGUucGxheSh0aGlzLnNsaWRlQ29tcGxldGUpO1xuICB9O1xuXG4gIFNsaWRlcy5wcm90b3R5cGUudHJhaW5pbmdDb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm9uQ29tcGxldGUoKTtcbiAgfTtcblxuICByZXR1cm4gU2xpZGVzO1xuXG59KSgpO1xuIiwidmFyIERldlRvb2xzLFxuICBiaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBEZXZUb29scyA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gRGV2VG9vbHMoKSB7XG4gICAgdGhpcy51cGRhdGUgPSBiaW5kKHRoaXMudXBkYXRlLCB0aGlzKTtcbiAgICB0aGlzLnN0YXRzID0gbmV3IFN0YXRzKCk7XG4gICAgdGhpcy5zdGF0cy5zZXRNb2RlKDApO1xuICAgIHRoaXMuc3RhdHMuZG9tRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgdGhpcy5zdGF0cy5kb21FbGVtZW50LnN0eWxlLmxlZnQgPSAnMHB4JztcbiAgICB0aGlzLnN0YXRzLmRvbUVsZW1lbnQuc3R5bGUudG9wID0gJzBweCc7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnN0YXRzLmRvbUVsZW1lbnQpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZSk7XG4gIH1cblxuICBEZXZUb29scy5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zdGF0cy5lbmQoKTtcbiAgICB0aGlzLnN0YXRzLmJlZ2luKCk7XG4gICAgcmV0dXJuIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZSk7XG4gIH07XG5cbiAgcmV0dXJuIERldlRvb2xzO1xuXG59KSgpO1xuIiwidmFyIEVwaXNvZGVMb2FkZXI7XG5cbm1vZHVsZS5leHBvcnRzID0gRXBpc29kZUxvYWRlciA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gRXBpc29kZUxvYWRlcihjYWxsYmFjaykge1xuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB0aGlzLmxvYWRFcGlzb2RlKCk7XG4gIH1cblxuICBFcGlzb2RlTG9hZGVyLnByb3RvdHlwZS5sb2FkRXBpc29kZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmxvYWRKc29uKGFyaXN0b3RsZS5lcGlzb2RlUm9vdCArIFwiL21hcC5qc29uXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnByZWxvYWRBc3NldHMoSlNPTi5wYXJzZShqc29uKSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgfTtcblxuICBFcGlzb2RlTG9hZGVyLnByb3RvdHlwZS5sb2FkSnNvbiA9IGZ1bmN0aW9uKHBhdGgsIG9uQ29tcGxldGUpIHtcbiAgICB2YXIgeG9iajtcbiAgICB4b2JqID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgeG9iai5vdmVycmlkZU1pbWVUeXBlKCdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgeG9iai5vcGVuKCdHRVQnLCBwYXRoLCB0cnVlKTtcbiAgICB4b2JqLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoeG9iai5yZWFkeVN0YXRlID09PSA0ICYmIHhvYmouc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICByZXR1cm4gb25Db21wbGV0ZSh4b2JqLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSkodGhpcyk7XG4gICAgcmV0dXJuIHhvYmouc2VuZChudWxsKTtcbiAgfTtcblxuICBFcGlzb2RlTG9hZGVyLnByb3RvdHlwZS5wcmVsb2FkQXNzZXRzID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciBhc3NldHMsIHByZWxvYWRRdWV1ZSwgcmVnZXg7XG4gICAgYXNzZXRzID0gW107XG4gICAgcmVnZXggPSAvLitcXC4obXAzfGpzb258c3ZnKS87XG4gICAgdGhpcy5sb29rRm9yRmlsZXMoZGF0YSwgYXNzZXRzLCByZWdleCk7XG4gICAgY3JlYXRlanMuU291bmQuYWx0ZXJuYXRlRXh0ZW5zaW9ucyA9IFtcIm1wM1wiXTtcbiAgICBwcmVsb2FkUXVldWUgPSBuZXcgY3JlYXRlanMuTG9hZFF1ZXVlKCk7XG4gICAgcHJlbG9hZFF1ZXVlLmluc3RhbGxQbHVnaW4oY3JlYXRlanMuU291bmQpO1xuICAgIHByZWxvYWRRdWV1ZS5vbihcInByb2dyZXNzXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgcmV0dXJuIGUubG9hZGVkO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgcHJlbG9hZFF1ZXVlLm9uKFwiY29tcGxldGVcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5jYWxsYmFjayhkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHJldHVybiBwcmVsb2FkUXVldWUubG9hZE1hbmlmZXN0KGFzc2V0cyk7XG4gIH07XG5cbiAgRXBpc29kZUxvYWRlci5wcm90b3R5cGUubG9va0ZvckZpbGVzID0gZnVuY3Rpb24oaXRlbSwgc3RvcmFnZSwgcmVnZXgpIHtcbiAgICB2YXIgY2hpbGQsIGksIGtleSwgbGVuLCByZXN1bHRzLCByZXN1bHRzMSwgdHlwZTtcbiAgICB0eXBlID0gdHlwZW9mIGl0ZW07XG4gICAgaWYgKHR5cGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGlmICgvLm1wMy8udGVzdChpdGVtKSkge1xuICAgICAgICByZXR1cm4gc3RvcmFnZS5wdXNoKHtcbiAgICAgICAgICBzcmM6IGFyaXN0b3RsZS5lcGlzb2RlUm9vdCArIFwiL3NvdW5kcy9cIiArIGl0ZW0sXG4gICAgICAgICAgaWQ6IGl0ZW1cbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKC8uanNvbi8udGVzdChpdGVtKSkge1xuICAgICAgICByZXR1cm4gc3RvcmFnZS5wdXNoKHtcbiAgICAgICAgICBzcmM6IGFyaXN0b3RsZS5lcGlzb2RlUm9vdCArIFwiL2FuaW1hdGlvbnMvXCIgKyBpdGVtLFxuICAgICAgICAgIGlkOiBpdGVtXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICgvLnN2Zy8udGVzdChpdGVtKSkge1xuICAgICAgICByZXR1cm4gc3RvcmFnZS5wdXNoKHtcbiAgICAgICAgICBzcmM6IGFyaXN0b3RsZS5lcGlzb2RlUm9vdCArIFwiL2Fzc2V0cy9cIiArIGl0ZW0sXG4gICAgICAgICAgaWQ6IGl0ZW1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtKSkge1xuICAgICAgICByZXN1bHRzID0gW107XG4gICAgICAgIGZvciAoaSA9IDAsIGxlbiA9IGl0ZW0ubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICBjaGlsZCA9IGl0ZW1baV07XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMubG9va0ZvckZpbGVzKGNoaWxkLCBzdG9yYWdlLCByZWdleCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0czEgPSBbXTtcbiAgICAgICAgZm9yIChrZXkgaW4gaXRlbSkge1xuICAgICAgICAgIGNoaWxkID0gaXRlbVtrZXldO1xuICAgICAgICAgIHJlc3VsdHMxLnB1c2godGhpcy5sb29rRm9yRmlsZXMoY2hpbGQsIHN0b3JhZ2UsIHJlZ2V4KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHMxO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gRXBpc29kZUxvYWRlcjtcblxufSkoKTtcbiIsInZhciBMYXllciwgU1ZHQW5pbWF0aW9uO1xuXG5TVkdBbmltYXRpb24gPSByZXF1aXJlKCdtb3ZpZS9zdmctYW5pbWF0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTGF5ZXIgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIExheWVyKCRlbCwgZGVwdGgpIHtcbiAgICB0aGlzLiRsYXllciA9ICQoamFkZVRlbXBsYXRlWydtb3ZpZS9sYXllciddKHtcbiAgICAgIGRlcHRoOiBkZXB0aFxuICAgIH0pKTtcbiAgICAkZWwuYXBwZW5kKHRoaXMuJGxheWVyKTtcbiAgfVxuXG4gIExheWVyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihsYXllckRhdGEpIHtcbiAgICBpZiAobGF5ZXJEYXRhLmNvbnRlbnQgIT0gbnVsbCkge1xuICAgICAgdGhpcy51cGRhdGVDb250ZW50KGxheWVyRGF0YSk7XG4gICAgfVxuICAgIGlmIChsYXllckRhdGEuZnggIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMudXBkYXRlRWZmZWN0cyhsYXllckRhdGEuZngpO1xuICAgIH1cbiAgfTtcblxuICBMYXllci5wcm90b3R5cGUudXBkYXRlQ29udGVudCA9IGZ1bmN0aW9uKGxheWVyRGF0YSkge1xuICAgIHZhciBmaWxlRXh0O1xuICAgIHRoaXMuZW1wdHkoKTtcbiAgICBmaWxlRXh0ID0gbGF5ZXJEYXRhLmNvbnRlbnQuc3BsaXQoXCIuXCIpWzFdO1xuICAgIHN3aXRjaCAoZmlsZUV4dCkge1xuICAgICAgY2FzZSBcImpzb25cIjpcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkQW5pbWF0aW9uKGxheWVyRGF0YSk7XG4gICAgICBjYXNlIFwic3ZnXCI6XG4gICAgICAgIHJldHVybiB0aGlzLmFkZEltYWdlKGxheWVyRGF0YSk7XG4gICAgfVxuICB9O1xuXG4gIExheWVyLnByb3RvdHlwZS51cGRhdGVFZmZlY3RzID0gZnVuY3Rpb24oZngpIHtcbiAgICB2YXIgZWZmZWN0LCBpLCBsZW4sIHJlZiwgcmVzdWx0cztcbiAgICBpZiAoZnguY2xlYXIpIHtcbiAgICAgIHRoaXMuJGxheWVyLmF0dHIoe1xuICAgICAgICBcImNsYXNzXCI6ICdsYXllcidcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZnguZWZmZWN0cyAhPSBudWxsKSB7XG4gICAgICByZWYgPSBmeC5lZmZlY3RzO1xuICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGVmZmVjdCA9IHJlZltpXTtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMuJGxheWVyLmFkZENsYXNzKGVmZmVjdCkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxuICB9O1xuXG4gIExheWVyLnByb3RvdHlwZS5hZGRBbmltYXRpb24gPSBmdW5jdGlvbihsYXllckRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5hbmltYXRpb24gPSBuZXcgU1ZHQW5pbWF0aW9uKHRoaXMuJGxheWVyLCBhcmlzdG90bGUuZXBpc29kZVJvb3QgKyBcIi9hbmltYXRpb25zL1wiICsgbGF5ZXJEYXRhLmNvbnRlbnQsIGxheWVyRGF0YSk7XG4gIH07XG5cbiAgTGF5ZXIucHJvdG90eXBlLmFkZEltYWdlID0gZnVuY3Rpb24obGF5ZXJEYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMuJGxheWVyLmxvYWQoYXJpc3RvdGxlLmVwaXNvZGVSb290ICsgXCIvYXNzZXRzL1wiICsgbGF5ZXJEYXRhLmNvbnRlbnQpO1xuICB9O1xuXG4gIExheWVyLnByb3RvdHlwZS5lbXB0eSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRsYXllci5lbXB0eSgpO1xuICB9O1xuXG4gIHJldHVybiBMYXllcjtcblxufSkoKTtcbiIsInZhciBMYXllciwgTW92aWU7XG5cbkxheWVyID0gcmVxdWlyZSgnbW92aWUvTGF5ZXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSBNb3ZpZSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gTW92aWUoJGVsKSB7XG4gICAgdGhpcy4kZWwgPSAkZWw7XG4gICAgdGhpcy4kd3JhcHBlciA9ICQoJy53cmFwcGVyJywgdGhpcy4kZWwpO1xuICAgIHRoaXMubGF5ZXJzID0gW107XG4gICAgUHViU3ViLnN1YnNjcmliZSgnbW92aWUubG9hZC1sYXllcicsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmFkZExheWVyKGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgUHViU3ViLnN1YnNjcmliZSgnbW92aWUuem9vbScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJobW1tbVwiKTtcbiAgICAgICAgcmV0dXJuIF90aGlzLnpvb20oZGF0YS5zY2FsZSwgZGF0YS54LCBkYXRhLnkpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH1cblxuICBNb3ZpZS5wcm90b3R5cGUucG9wdWxhdGUgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyIGRlcHRoSWQsIGxheWVyRGF0YSwgcmVmO1xuICAgIGlmIChkYXRhID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmVmID0gZGF0YS5sYXllcnM7XG4gICAgZm9yIChkZXB0aElkIGluIHJlZikge1xuICAgICAgbGF5ZXJEYXRhID0gcmVmW2RlcHRoSWRdO1xuICAgICAgdGhpcy5hZGRMYXllcihsYXllckRhdGEpO1xuICAgIH1cbiAgICBpZiAoZGF0YS56b29tICE9IG51bGwpIHtcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEuem9vbSk7XG4gICAgICByZXR1cm4gdGhpcy56b29tKGRhdGEuem9vbS5zY2FsZSwgZGF0YS56b29tLngsIGRhdGEuem9vbS55KTtcbiAgICB9XG4gIH07XG5cbiAgTW92aWUucHJvdG90eXBlLnpvb20gPSBmdW5jdGlvbihzY2FsZSwgeCwgeSkge1xuICAgIGlmIChzY2FsZSA9PSBudWxsKSB7XG4gICAgICBzY2FsZSA9IDE7XG4gICAgfVxuICAgIGlmICh4ID09IG51bGwpIHtcbiAgICAgIHggPSAwO1xuICAgIH1cbiAgICBpZiAoeSA9PSBudWxsKSB7XG4gICAgICB5ID0gMDtcbiAgICB9XG4gICAgdGhpcy4kZWwuY3NzKHtcbiAgICAgIFwidHJhbnNmb3JtLW9yaWdpblwiOiB4ICsgXCJweCBcIiArIHkgKyBcInB4XCJcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy4kZWwuY3NzKHtcbiAgICAgIHRyYW5zZm9ybTogXCJzY2FsZShcIiArIHNjYWxlICsgXCIpXCJcbiAgICB9KTtcbiAgfTtcblxuICBNb3ZpZS5wcm90b3R5cGUuYWRkTGF5ZXIgPSBmdW5jdGlvbihsYXllckRhdGEpIHtcbiAgICB2YXIgZGVwdGgsIGksIGosIGxheWVyLCByZWYsIHJlZjE7XG4gICAgZGVwdGggPSBsYXllckRhdGEuZGVwdGg7XG4gICAgaWYgKGRlcHRoID4gdGhpcy5sYXllcnMubGVuZ3RoKSB7XG4gICAgICBmb3IgKGkgPSBqID0gcmVmID0gdGhpcy5sYXllcnMubGVuZ3RoLCByZWYxID0gZGVwdGg7IHJlZiA8PSByZWYxID8gaiA8PSByZWYxIDogaiA+PSByZWYxOyBpID0gcmVmIDw9IHJlZjEgPyArK2ogOiAtLWopIHtcbiAgICAgICAgdGhpcy5sYXllcnNbaV0gPSBuZXcgTGF5ZXIodGhpcy4kd3JhcHBlciwgZGVwdGgpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXllciA9IHRoaXMuZ2V0T3JDcmVhdGVMYXllcihkZXB0aCk7XG4gICAgcmV0dXJuIGxheWVyLnVwZGF0ZShsYXllckRhdGEpO1xuICB9O1xuXG4gIE1vdmllLnByb3RvdHlwZS5nZXRPckNyZWF0ZUxheWVyID0gZnVuY3Rpb24oZGVwdGgpIHtcbiAgICB2YXIgbGF5ZXI7XG4gICAgaWYgKHRoaXMubGF5ZXJzW2RlcHRoXSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5sYXllcnNbZGVwdGhdO1xuICAgIH1cbiAgICBsYXllciA9IG5ldyBMYXllcih0aGlzLiR3cmFwcGVyLCBkZXB0aCk7XG4gICAgdGhpcy5sYXllcnNbZGVwdGhdID0gbGF5ZXI7XG4gICAgcmV0dXJuIGxheWVyO1xuICB9O1xuXG4gIHJldHVybiBNb3ZpZTtcblxufSkoKTtcbiIsInZhciBTVkdBbmltYXRpb24sXG4gIGJpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNWR0FuaW1hdGlvbiA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gU1ZHQW5pbWF0aW9uKGVsLCBqc29uLCBkYXRhKSB7XG4gICAgdGhpcy5wbGF5ID0gYmluZCh0aGlzLnBsYXksIHRoaXMpO1xuICAgIHRoaXMuYW5pbWF0aW9uID0gYm9keW1vdmluLmxvYWRBbmltYXRpb24oe1xuICAgICAgd3JhcHBlcjogZWxbMF0sXG4gICAgICBhbmltVHlwZTogJ3N2ZycsXG4gICAgICBsb29wOiBkYXRhLmxvb3AsXG4gICAgICBwcmVyZW5kZXI6IHRydWUsXG4gICAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgICBwYXRoOiBqc29uXG4gICAgfSk7XG4gICAgaWYgKGRhdGEuZGVsYXkgIT0gbnVsbCkge1xuICAgICAgc2V0VGltZW91dCh0aGlzLnBsYXksIGRhdGEuZGVsYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBsYXkoKTtcbiAgICB9XG4gICAgdGhpcy5hZGRFdmVudHMoZGF0YSk7XG4gIH1cblxuICBTVkdBbmltYXRpb24ucHJvdG90eXBlLmFkZEV2ZW50cyA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2YXIgZXZlbnQsIGksIGxlbiwgcmVmLCByZXN1bHRzO1xuICAgIGlmIChkYXRhLmV2ZW50cyAhPSBudWxsKSB7XG4gICAgICByZWYgPSBkYXRhLmV2ZW50cztcbiAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBldmVudCA9IHJlZltpXTtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMuYW5pbWF0aW9uLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBQdWJTdWIucHVibGlzaChcImxheWVyLlwiICsgZGF0YS5kZXB0aCArIFwiLlwiICsgZXZlbnQpO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pKHRoaXMpKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG4gIH07XG5cbiAgU1ZHQW5pbWF0aW9uLnByb3RvdHlwZS5wbGF5ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYW5pbWF0aW9uLnBsYXkoKTtcbiAgfTtcblxuICBTVkdBbmltYXRpb24ucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5hbmltYXRpb24uc3RvcCgpO1xuICB9O1xuXG4gIFNWR0FuaW1hdGlvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuYW5pbWF0aW9uLmRlc3Ryb3koKTtcbiAgICBpZiAodGhpcy5pbnRlcnZhbCAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcbiAgICB9XG4gIH07XG5cbiAgU1ZHQW5pbWF0aW9uLnByb3RvdHlwZS50cmFjZUZyYW1lcyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhfdGhpcy5hbmltYXRpb24uY3VycmVudEZyYW1lLCBfdGhpcy5hbmltYXRpb24udG90YWxGcmFtZXMpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSwgNTAwKTtcbiAgfTtcblxuICByZXR1cm4gU1ZHQW5pbWF0aW9uO1xuXG59KSgpO1xuIiwidmFyIENvbXBvbmVudDtcblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIENvbXBvbmVudCgkZWwsICRub2RlKSB7XG4gICAgdGhpcy4kbm9kZSA9ICRub2RlO1xuICAgICRlbC5hcHBlbmQodGhpcy4kbm9kZSk7XG4gICAgc2hhZG93SWNvbnNJbnN0YW5jZS5zdmdSZXBsYWNlV2l0aFN0cmluZyhweFN2Z0ljb25TdHJpbmcsIHRoaXMuJG5vZGUpO1xuICB9XG5cbiAgQ29tcG9uZW50LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJG5vZGUucmVtb3ZlKCk7XG4gIH07XG5cbiAgcmV0dXJuIENvbXBvbmVudDtcblxufSkoKTtcbiIsInZhciBDb21wb25lbnQsIFNlbGVjdGlvbkRpYWxvZ3VlLFxuICBleHRlbmQgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKGhhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH0sXG4gIGhhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuQ29tcG9uZW50ID0gcmVxdWlyZSgnc2xpZGUtdXgvY29tcG9uZW50cy9jb21wb25lbnQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTZWxlY3Rpb25EaWFsb2d1ZSA9IChmdW5jdGlvbihzdXBlckNsYXNzKSB7XG4gIGV4dGVuZChTZWxlY3Rpb25EaWFsb2d1ZSwgc3VwZXJDbGFzcyk7XG5cbiAgZnVuY3Rpb24gU2VsZWN0aW9uRGlhbG9ndWUoJGVsLCBkYXRhKSB7XG4gICAgdmFyIGphZGVEYXRhO1xuICAgIGphZGVEYXRhID0gdGhpcy5nZW5lcmF0ZUNvbmZpZ0RhdGEoZGF0YSk7XG4gICAgdGhpcy4kbm9kZSA9ICQoamFkZVRlbXBsYXRlWydzbGlkZS11eC9jb21wb25lbnRzL3NlbGVjdGlvbi1kaWFsb2d1ZSddKGphZGVEYXRhKSk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVycyh0aGlzLiRub2RlLCBkYXRhKTtcbiAgICBTZWxlY3Rpb25EaWFsb2d1ZS5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCAkZWwsIHRoaXMuJG5vZGUpO1xuICB9XG5cbiAgU2VsZWN0aW9uRGlhbG9ndWUucHJvdG90eXBlLmdlbmVyYXRlQ29uZmlnRGF0YSA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2YXIgaSwgaXRlbSwgaiwgamFkZURhdGEsIGxlbiwgcmVmO1xuICAgIHRoaXMuaXRlbXMgPSB7fTtcbiAgICBqYWRlRGF0YSA9IHt9O1xuICAgIGphZGVEYXRhLnRpdGxlID0gZGF0YS50aXRsZTtcbiAgICBqYWRlRGF0YS5zdWJUaXRsZSA9IGRhdGEuc3ViVGl0bGU7XG4gICAgamFkZURhdGEuYnRuVHh0ID0gZGF0YS5zdWJtaXRCdG4udHh0O1xuICAgIGphZGVEYXRhLmJ0bkljb24gPSBkYXRhLnN1Ym1pdEJ0bi5pY29uO1xuICAgIGphZGVEYXRhLmludHJvID0gZGF0YS5pbnRybztcbiAgICBqYWRlRGF0YS5pdGVtcyA9IFtdO1xuICAgIHJlZiA9IGRhdGEuaXRlbXM7XG4gICAgZm9yIChpID0gaiA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGogPCBsZW47IGkgPSArK2opIHtcbiAgICAgIGl0ZW0gPSByZWZbaV07XG4gICAgICBpdGVtLmlkID0gXCJpdGVtXCIgKyBpO1xuICAgICAgamFkZURhdGEuaXRlbXMucHVzaCh7XG4gICAgICAgIHR4dDogaXRlbS5idG5UeHQsXG4gICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICBpY29uOiBpdGVtLmljb25cbiAgICAgIH0pO1xuICAgICAgdGhpcy5pdGVtc1tpdGVtLmlkXSA9IGl0ZW07XG4gICAgfVxuICAgIHJldHVybiBqYWRlRGF0YTtcbiAgfTtcblxuICBTZWxlY3Rpb25EaWFsb2d1ZS5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbigkZWwsIGRhdGEpIHtcbiAgICB2YXIgJGJ1dHRvbnM7XG4gICAgJGJ1dHRvbnMgPSAkKFwiLmJ1dHRvblwiLCAkZWwpO1xuICAgICRidXR0b25zLm9uKFwiY2xpY2tcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgICB2YXIgJHRhcmc7XG4gICAgICAgICR0YXJnID0gJChlLnRhcmdldCk7XG4gICAgICAgIHJldHVybiBfdGhpcy5hY3RpdmF0ZUl0ZW0oJHRhcmcsIF90aGlzLml0ZW1zWyR0YXJnLmF0dHIoJ2lkJyldKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHJldHVybiAkKFwiI2FjdGlvbi1idG5cIiwgJGVsKS5vbihcImNsaWNrXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdmFyIGFjdGlvbiwgaiwgbGVuLCByZWY7XG4gICAgICAgIHJlZiA9IGRhdGEuY2xpY2s7XG4gICAgICAgIGZvciAoaiA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGogPCBsZW47IGorKykge1xuICAgICAgICAgIGFjdGlvbiA9IHJlZltqXTtcbiAgICAgICAgICBQdWJTdWIucHVibGlzaChhY3Rpb24uY21kLCBhY3Rpb24uZGF0YSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzLmRlc3Ryb3koKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9O1xuXG4gIFNlbGVjdGlvbkRpYWxvZ3VlLnByb3RvdHlwZS5hY3RpdmF0ZUl0ZW0gPSBmdW5jdGlvbigkYnV0dG9uLCBpdGVtKSB7XG4gICAgJChcIi5pbnRyb1wiLCB0aGlzLiRub2RlKS5jc3Moe1xuICAgICAgZGlzcGxheTogXCJub25lXCJcbiAgICB9KTtcbiAgICAkKFwiLml0ZW0taW5mb1wiLCB0aGlzLiRub2RlKS5jc3Moe1xuICAgICAgZGlzcGxheTogXCJibG9ja1wiXG4gICAgfSk7XG4gICAgJChcIi5idXR0b25cIiwgdGhpcy4kbm9kZSkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgJGJ1dHRvbi5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAkKFwiLmljb25cIiwgdGhpcy4kbm9kZSkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgJChcIiNpY29uLVwiICsgaXRlbS5pZCwgdGhpcy4kbm9kZSkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgJChcIi5ibHVyYlwiLCB0aGlzLiRub2RlKS5odG1sKGl0ZW0uYmx1cmIpO1xuICAgICQoXCIuZGV0YWlsc1wiLCB0aGlzLiRub2RlKS5odG1sKGl0ZW0uZGV0YWlscyk7XG4gICAgcmV0dXJuIFB1YlN1Yi5wdWJsaXNoKGl0ZW0uY2xpY2suY21kLCBpdGVtLmNsaWNrLmRhdGEpO1xuICB9O1xuXG4gIHJldHVybiBTZWxlY3Rpb25EaWFsb2d1ZTtcblxufSkoQ29tcG9uZW50KTtcbiIsInZhciBBdWRpb1RyYWNrLCBDdGFubGVlO1xuXG5BdWRpb1RyYWNrID0gcmVxdWlyZSgnZXBpc29kZS9hdWRpby10cmFjaycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEN0YW5sZWUgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIEN0YW5sZWUoJHBhcmVudCkge1xuICAgIGFyaXN0b3RsZS5jdGFubGVlID0gdGhpcztcbiAgICB0aGlzLiRlbCA9ICQoamFkZVRlbXBsYXRlWydzbGlkZS11eC9jdGFubGVlL2N0YW5sZWUnXSh7fSkpO1xuICAgIHNoYWRvd0ljb25zSW5zdGFuY2Uuc3ZnUmVwbGFjZVdpdGhTdHJpbmcocHhTdmdJY29uU3RyaW5nLCB0aGlzLiRlbCk7XG4gICAgdGhpcy4kc3BlZWNoQm94ID0gJChcIi5zcGVlY2gtYm94XCIsIHRoaXMuJGVsKTtcbiAgICB0aGlzLiR0ZXh0ID0gJChcIi50ZXh0IHNwYW4uY29udGVudFwiLCB0aGlzLiRzcGVlY2hCb3gpO1xuICAgICQoXCIudGV4dCBzcGFuLm5leHRcIiwgdGhpcy4kc3BlZWNoQm94KS5vbihcImNsaWNrXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMucGxheU5leHRBY3Rpb24oKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ2N0YW5sZWUuYWN0aXZhdGUnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihhLCBhY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnBsYXlBY3Rpb24oYWN0aW9uKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgICRwYXJlbnQuYXBwZW5kKHRoaXMuJGVsKTtcbiAgICB0aGlzLnJldHVyblRvU3RhdGlvbigpO1xuICB9XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUuYWN0aXZhdGUgPSBmdW5jdGlvbihkYXRhMSkge1xuICAgIHRoaXMuZGF0YSA9IGRhdGExO1xuICAgIGlmICh0aGlzLmRhdGEudGltZWxpbmUgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmN1cnJlbnRBY3Rpb25JbmRleCA9IC0xO1xuICAgIHRoaXMudGltZWxpbmUgPSB0aGlzLmRhdGEudGltZWxpbmU7XG4gICAgcmV0dXJuIHRoaXMucGxheU5leHRBY3Rpb24oKTtcbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5zYXkgPSBmdW5jdGlvbih0ZXh0LCBhdWRpbywgbmV4dCkge1xuICAgIHZhciB0cmFjaztcbiAgICBpZiAodGV4dCAhPSBudWxsKSB7XG4gICAgICB0aGlzLnNob3dUZXh0KCk7XG4gICAgICB0aGlzLiR0ZXh0Lmh0bWwodGV4dCk7XG4gICAgfVxuICAgIGlmIChhdWRpbyAhPSBudWxsKSB7XG4gICAgICB0cmFjayA9IG5ldyBBdWRpb1RyYWNrKGF1ZGlvKTtcbiAgICAgIHJldHVybiB0cmFjay5wbGF5KChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKG5leHQgPT09ICdhdWRpbycpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5wbGF5TmV4dEFjdGlvbigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0pKHRoaXMpKTtcbiAgICB9XG4gIH07XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUuc2V0RW1vdGlvbiA9IGZ1bmN0aW9uKGVtb3Rpb24pIHt9O1xuXG4gIEN0YW5sZWUucHJvdG90eXBlLmdvdG8gPSBmdW5jdGlvbih4LCB5LCBkdXJhdGlvbiwgZGVsYXkpIHtcbiAgICBpZiAoeCA9PSBudWxsKSB7XG4gICAgICB4ID0gOTYwO1xuICAgIH1cbiAgICBpZiAoeSA9PSBudWxsKSB7XG4gICAgICB5ID0gMDtcbiAgICB9XG4gICAgaWYgKGR1cmF0aW9uID09IG51bGwpIHtcbiAgICAgIGR1cmF0aW9uID0gNjAwO1xuICAgIH1cbiAgICBpZiAoZGVsYXkgPT0gbnVsbCkge1xuICAgICAgZGVsYXkgPSAwO1xuICAgIH1cbiAgICB0aGlzLiRlbC52ZWxvY2l0eShcInN0b3BcIiwgdHJ1ZSk7XG4gICAgcmV0dXJuIHRoaXMuJGVsLnZlbG9jaXR5KHtcbiAgICAgIHRvcDogeSxcbiAgICAgIGxlZnQ6IHhcbiAgICB9LCB7XG4gICAgICBkZWxheTogZGVsYXksXG4gICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICBlYXNpbmc6IFwiZWFzZUluT3V0UXVpbnRcIlxuICAgIH0pO1xuICB9O1xuXG4gIEN0YW5sZWUucHJvdG90eXBlLnBsYXlOZXh0QWN0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudEFjdGlvbkluZGV4ID09PSB0aGlzLnRpbWVsaW5lLmxlbmd0aCAtIDEpIHtcbiAgICAgIHRoaXMuY29tcGxldGUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucGxheUFjdGlvbih0aGlzLnRpbWVsaW5lWysrdGhpcy5jdXJyZW50QWN0aW9uSW5kZXhdLmFjdGlvbik7XG4gIH07XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUucGxheUFjdGlvbiA9IGZ1bmN0aW9uKGFjdGlvbklkKSB7XG4gICAgdmFyIGFjdGlvbjtcbiAgICB0aGlzLmN1cnJlbnRBY3Rpb25JbmRleCA9IHRoaXMuZ2V0SW5kZXhPZkFjdGlvbihhY3Rpb25JZCk7XG4gICAgYWN0aW9uID0gdGhpcy5vdmVybGF5RGVmYXVsdHMoYWN0aW9uSWQpO1xuICAgIGlmIChhY3Rpb24uZW1vICE9IG51bGwpIHtcbiAgICAgIHRoaXMuc2V0RW1vdGlvbihhY3Rpb24uZW1vKTtcbiAgICB9XG4gICAgaWYgKGFjdGlvbi5wb3MgIT0gbnVsbCkge1xuICAgICAgdGhpcy5nb3RvKGFjdGlvbi5wb3NbMF0sIGFjdGlvbi5wb3NbMV0sIGFjdGlvbi5wb3NbMl0sIGFjdGlvbi5wb3NbM10pO1xuICAgIH1cbiAgICBpZiAoYWN0aW9uLmFjdGlvbiAhPSBudWxsKSB7XG4gICAgICBQdWJTdWIucHVibGlzaChhY3Rpb24uYWN0aW9uLmNtZCwgYWN0aW9uLmFjdGlvbi5kYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc2F5KGFjdGlvbi50ZXh0LCBhY3Rpb24uYXVkaW8sIGFjdGlvbi5uZXh0KTtcbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucmV0dXJuVG9TdGF0aW9uKCk7XG4gICAgcmV0dXJuIFB1YlN1Yi5wdWJsaXNoKCdjdGFubGVlLmNvbXBsZXRlJyk7XG4gIH07XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUucmV0dXJuVG9TdGF0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5oaWRlVGV4dCgpO1xuICAgIHJldHVybiB0aGlzLmdvdG8oKTtcbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5oaWRlVGV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRzcGVlY2hCb3guY3NzKHtcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICBcInBvaW50ZXItZXZlbnRzXCI6IFwibm9uZVwiXG4gICAgfSk7XG4gIH07XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUuc2hvd1RleHQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kc3BlZWNoQm94LmNzcyh7XG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgXCJwb2ludGVyLWV2ZW50c1wiOiBcImFsbFwiXG4gICAgfSk7XG4gIH07XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUuZ2V0SW5kZXhPZkFjdGlvbiA9IGZ1bmN0aW9uKGFjdGlvbikge1xuICAgIHZhciBkYXRhLCBpLCBqLCBsZW4sIHJlZjtcbiAgICBpZiAodGhpcy50aW1lbGluZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgcmVmID0gdGhpcy50aW1lbGluZTtcbiAgICBmb3IgKGkgPSBqID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaiA8IGxlbjsgaSA9ICsraikge1xuICAgICAgZGF0YSA9IHJlZltpXTtcbiAgICAgIGlmIChkYXRhLmFjdGlvbiA9PT0gYWN0aW9uKSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5vdmVybGF5RGVmYXVsdHMgPSBmdW5jdGlvbihhY3Rpb25JZCkge1xuICAgIHZhciBhY3Rpb25zLCBrZXksIHJlZiwgdmFsO1xuICAgIGlmICh0aGlzLmRhdGEuZGVmYXVsdHMgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0YS5hY3Rpb25zW2FjdGlvbklkXTtcbiAgICB9XG4gICAgYWN0aW9ucyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhLmRlZmF1bHRzKSk7XG4gICAgcmVmID0gdGhpcy5kYXRhLmFjdGlvbnNbYWN0aW9uSWRdO1xuICAgIGZvciAoa2V5IGluIHJlZikge1xuICAgICAgdmFsID0gcmVmW2tleV07XG4gICAgICBhY3Rpb25zW2tleV0gPSB2YWw7XG4gICAgfVxuICAgIHJldHVybiBhY3Rpb25zO1xuICB9O1xuXG4gIHJldHVybiBDdGFubGVlO1xuXG59KSgpO1xuIiwidmFyIEN0YW5sZWUsIFNlbGVjdGlvbkRpYWxvZ3VlLCBTbGlkZVVYO1xuXG5DdGFubGVlID0gcmVxdWlyZSgnc2xpZGUtdXgvY3RhbmxlZS9DdGFubGVlJyk7XG5cblNlbGVjdGlvbkRpYWxvZ3VlID0gcmVxdWlyZSgnc2xpZGUtdXgvY29tcG9uZW50cy9zZWxlY3Rpb24tZGlhbG9ndWUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTbGlkZVVYID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBTbGlkZVVYKCRlbCkge1xuICAgIHRoaXMuJGVsID0gJGVsO1xuICAgIHRoaXMuY3RhbmxlZSA9IG5ldyBDdGFubGVlKHRoaXMuJGVsKTtcbiAgfVxuXG4gIFNsaWRlVVgucHJvdG90eXBlLnBvcHVsYXRlID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciBjb21wb25lbnQsIGksIGxlbiwgcmVmLCByZXN1bHRzO1xuICAgIGlmICgoZGF0YSAhPSBudWxsID8gZGF0YS5jb21wb25lbnRzIDogdm9pZCAwKSA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJlZiA9IGRhdGEuY29tcG9uZW50cztcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjb21wb25lbnQgPSByZWZbaV07XG4gICAgICByZXN1bHRzLnB1c2godGhpcy5hZGRDb21wb25lbnQoY29tcG9uZW50KSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIFNsaWRlVVgucHJvdG90eXBlLmFkZENvbXBvbmVudCA9IGZ1bmN0aW9uKGNvbXBvbmVudERhdGEpIHtcbiAgICB2YXIgY29tcG9uZW50O1xuICAgIHN3aXRjaCAoY29tcG9uZW50RGF0YS5raW5kKSB7XG4gICAgICBjYXNlIFwic2VsZWN0aW9uLWRpYWxvZ3VlXCI6XG4gICAgICAgIHJldHVybiBjb21wb25lbnQgPSBuZXcgU2VsZWN0aW9uRGlhbG9ndWUodGhpcy4kZWwsIGNvbXBvbmVudERhdGEuY29uZmlnKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFNsaWRlVVg7XG5cbn0pKCk7XG4iXX0=

var aristotle;

aristotle = new Aristotle($(".holder"), "/episodes/episode1");
