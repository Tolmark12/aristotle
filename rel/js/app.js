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
    var episodeLoader;
    this.episodeRoot = episodeRoot;
    this.onJsonLoaded = bind(this.onJsonLoaded, this);
    window.aristotle = this;
    this.build($el);
    episodeLoader = new EpisodeLoader(this.onJsonLoaded);
    this.devTools = new DevTools();
  }

  Aristotle.prototype.onJsonLoaded = function(episodeData) {
    var episode;
    this.devTools.setDefaults(episodeData);
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

},{"chrome/chrome-ui":2,"episode/episode":4,"misc/dev-tools":7,"misc/episode-loader":8,"movie/movie":11,"slide-ux/slide-ux":16}],2:[function(require,module,exports){
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
      case "pubsub":
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

},{"episode/audio-track":3,"movie/svg-animation":12}],6:[function(require,module,exports){
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
    var i, len, ref, results, slideData;
    ref = trainingData.slides;
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      slideData = ref[i];
      results.push(this.slides.push(new Slide(movie, ux, slideData, this.slideComplete)));
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
var AudioTrack, DevTools,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

AudioTrack = require('episode/audio-track');

module.exports = DevTools = (function() {
  function DevTools() {
    this.update = bind(this.update, this);
    this.initPerformanceStats();
  }

  DevTools.prototype.setDefaults = function(episodeData) {
    this.skipSlides(episodeData);
    if (episodeData.dev.volume != null) {
      return AudioTrack.initSoundSettings(episodeData.dev.volume);
    }
  };

  DevTools.prototype.skipSlides = function(episodeData) {
    var i, len, ref, results, slideIndex, startIndex;
    if (episodeData.dev.startSlideIndex != null) {
      startIndex = episodeData.dev.startSlideIndex;
      episodeData.slides.splice(0, episodeData.dev.startSlideIndex);
    } else {
      startIndex = 0;
    }
    if (episodeData.dev.skipSlides != null) {
      ref = episodeData.dev.skipSlides.sort().reverse();
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        slideIndex = ref[i];
        if (slideIndex > startIndex) {
          results.push(episodeData.slides.splice(slideIndex - startIndex, 1));
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

  DevTools.prototype.update = function() {
    this.stats.end();
    this.stats.begin();
    return requestAnimationFrame(this.update);
  };

  return DevTools;

})();

},{"episode/audio-track":3}],8:[function(require,module,exports){
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
    regex = /.+\.(svg)/;
    this.lookForFiles(data, assets, regex);
    createjs.Sound.alternateExtensions = ["mp3"];
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

},{}],10:[function(require,module,exports){
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

},{"movie/svg-animation":12}],11:[function(require,module,exports){
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

},{"movie/Highlighter":9,"movie/Layer":10}],12:[function(require,module,exports){
var SVGAnimation,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

module.exports = SVGAnimation = (function() {
  function SVGAnimation(el, json, data) {
    this.play = bind(this.play, this);
    window.fixSVGS = function() {
      return $("svg").css({
        width: "initial",
        height: "initial"
      });
    };
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
        return console.log(_this.animation.currentFrame, _this.animation.totalFrames);
      };
    })(this), 500);
  };

  return SVGAnimation;

})();

},{}],13:[function(require,module,exports){
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

},{}],14:[function(require,module,exports){
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

},{"slide-ux/components/component":13}],15:[function(require,module,exports){
var AudioTrack, Ctanlee;

AudioTrack = require('episode/audio-track');

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
        _this.hideText();
        return console.log("clear it!");
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
      track.play((function(_this) {
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

  Ctanlee.prototype.goto = function(x, y, duration, delay) {
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

  Ctanlee.prototype.playNextAction = function() {
    if (this.currentActionIndex === this.timeline.length - 1) {
      this.complete();
      return;
    }
    return this.playAction(this.timeline[++this.currentActionIndex].action);
  };

  Ctanlee.prototype.playAction = function(actionId) {
    var action, item, j, len, ref;
    this.setFilter('black-glow');
    this.currentActionIndex = this.getIndexOfAction(actionId);
    action = this.overlayDefaults(actionId);
    if (action.emo != null) {
      this.setEmotion(action.emo);
    }
    if (action.pos != null) {
      this.goto(action.pos[0], action.pos[1], action.pos[2], action.pos[3]);
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
    this.goto();
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
    console.log("url(#" + kind + ")");
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

},{"episode/audio-track":3}],16:[function(require,module,exports){
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

},{"slide-ux/components/selection-dialogue":14,"slide-ux/ctanlee/Ctanlee":15}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9ndWxwLWNvZmZlZWlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiYXJpc3RvdGxlLmNvZmZlZSIsImNocm9tZS9jaHJvbWUtdWkuY29mZmVlIiwiZXBpc29kZS9hdWRpby10cmFjay5jb2ZmZWUiLCJlcGlzb2RlL2VwaXNvZGUuY29mZmVlIiwiZXBpc29kZS9zbGlkZS5jb2ZmZWUiLCJlcGlzb2RlL3NsaWRlcy5jb2ZmZWUiLCJtaXNjL2Rldi10b29scy5jb2ZmZWUiLCJtaXNjL2VwaXNvZGUtbG9hZGVyLmNvZmZlZSIsIm1vdmllL0hpZ2hsaWdodGVyLmNvZmZlZSIsIm1vdmllL0xheWVyLmNvZmZlZSIsIm1vdmllL21vdmllLmNvZmZlZSIsIm1vdmllL3N2Zy1hbmltYXRpb24uY29mZmVlIiwic2xpZGUtdXgvY29tcG9uZW50cy9jb21wb25lbnQuY29mZmVlIiwic2xpZGUtdXgvY29tcG9uZW50cy9zZWxlY3Rpb24tZGlhbG9ndWUuY29mZmVlIiwic2xpZGUtdXgvY3RhbmxlZS9DdGFubGVlLmNvZmZlZSIsInNsaWRlLXV4L3NsaWRlLXV4LmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIEFyaXN0b3RsZSwgQ2hyb21lVUksIERldlRvb2xzLCBFcGlzb2RlLCBFcGlzb2RlTG9hZGVyLCBNb3ZpZSwgU2xpZGVVWCxcbiAgYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH07XG5cbkVwaXNvZGUgPSByZXF1aXJlKFwiZXBpc29kZS9lcGlzb2RlXCIpO1xuXG5DaHJvbWVVSSA9IHJlcXVpcmUoXCJjaHJvbWUvY2hyb21lLXVpXCIpO1xuXG5EZXZUb29scyA9IHJlcXVpcmUoJ21pc2MvZGV2LXRvb2xzJyk7XG5cbk1vdmllID0gcmVxdWlyZSgnbW92aWUvbW92aWUnKTtcblxuRXBpc29kZUxvYWRlciA9IHJlcXVpcmUoJ21pc2MvZXBpc29kZS1sb2FkZXInKTtcblxuU2xpZGVVWCA9IHJlcXVpcmUoJ3NsaWRlLXV4L3NsaWRlLXV4Jyk7XG5cbkFyaXN0b3RsZSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gQXJpc3RvdGxlKCRlbCwgZXBpc29kZVJvb3QpIHtcbiAgICB2YXIgZXBpc29kZUxvYWRlcjtcbiAgICB0aGlzLmVwaXNvZGVSb290ID0gZXBpc29kZVJvb3Q7XG4gICAgdGhpcy5vbkpzb25Mb2FkZWQgPSBiaW5kKHRoaXMub25Kc29uTG9hZGVkLCB0aGlzKTtcbiAgICB3aW5kb3cuYXJpc3RvdGxlID0gdGhpcztcbiAgICB0aGlzLmJ1aWxkKCRlbCk7XG4gICAgZXBpc29kZUxvYWRlciA9IG5ldyBFcGlzb2RlTG9hZGVyKHRoaXMub25Kc29uTG9hZGVkKTtcbiAgICB0aGlzLmRldlRvb2xzID0gbmV3IERldlRvb2xzKCk7XG4gIH1cblxuICBBcmlzdG90bGUucHJvdG90eXBlLm9uSnNvbkxvYWRlZCA9IGZ1bmN0aW9uKGVwaXNvZGVEYXRhKSB7XG4gICAgdmFyIGVwaXNvZGU7XG4gICAgdGhpcy5kZXZUb29scy5zZXREZWZhdWx0cyhlcGlzb2RlRGF0YSk7XG4gICAgcmV0dXJuIGVwaXNvZGUgPSBuZXcgRXBpc29kZShlcGlzb2RlRGF0YSwgdGhpcy5tb3ZpZSwgdGhpcy5zbGlkZVVYKTtcbiAgfTtcblxuICBBcmlzdG90bGUucHJvdG90eXBlLmJ1aWxkID0gZnVuY3Rpb24oJGVsKSB7XG4gICAgdmFyICRiYXNlLCBzaGFkb3dJY29ucztcbiAgICAkYmFzZSA9ICQoamFkZVRlbXBsYXRlWydhcmlzdG90bGUnXSh7fSkpO1xuICAgICRlbC5hcHBlbmQoJGJhc2UpO1xuICAgIHNoYWRvd0ljb25zID0gbmV3IHB4aWNvbnMuU2hhZG93SWNvbnMoKTtcbiAgICBzaGFkb3dJY29uc0luc3RhbmNlLnN2Z1JlcGxhY2VXaXRoU3RyaW5nKHB4U3ZnSWNvblN0cmluZywgJGJhc2UpO1xuICAgIHRoaXMuY2hyb21lVUkgPSBuZXcgQ2hyb21lVUkoJChcIi5jaHJvbWVcIiwgJGJhc2UpKTtcbiAgICB0aGlzLnNsaWRlVVggPSBuZXcgU2xpZGVVWCgkKFwiLnNsaWRlLXV4XCIsICRiYXNlKSk7XG4gICAgcmV0dXJuIHRoaXMubW92aWUgPSBuZXcgTW92aWUoJChcIi5tb3ZpZVwiLCAkYmFzZSkpO1xuICB9O1xuXG4gIHJldHVybiBBcmlzdG90bGU7XG5cbn0pKCk7XG5cbndpbmRvdy5BcmlzdG90bGUgPSBBcmlzdG90bGU7XG4iLCJ2YXIgQ2hyb21lVUk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2hyb21lVUkgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIENocm9tZVVJKCRlbCkge1xuICAgIHRoaXMuYnVpbGQoJGVsKTtcbiAgfVxuXG4gIENocm9tZVVJLnByb3RvdHlwZS5idWlsZCA9IGZ1bmN0aW9uKCRlbCkge1xuICAgIHZhciAkcHJvZ3Jlc3MsICR0b3AsIGRhdGE7XG4gICAgZGF0YSA9IHtcbiAgICAgIG5hbWU6IFwiSm9obiBcXFwiRGVhZGV5ZVxcXCIgTmltYnVzXCIsXG4gICAgICBlcGlzb2RlOiBcIjFcIlxuICAgIH07XG4gICAgdGhpcy5nZXRSYW5rKGRhdGEsIFwiY3liZXItY2FkZXRcIik7XG4gICAgJHRvcCA9ICQoamFkZVRlbXBsYXRlWydjaHJvbWUtdWkvdG9wJ10oZGF0YSkpO1xuICAgICRlbC5hcHBlbmQoJHRvcCk7XG4gICAgJHByb2dyZXNzID0gJChqYWRlVGVtcGxhdGVbJ2Nocm9tZS11aS9wcm9ncmVzcyddKHt9KSk7XG4gICAgJGVsLmFwcGVuZCgkcHJvZ3Jlc3MpO1xuICAgIHJldHVybiBzaGFkb3dJY29uc0luc3RhbmNlLnN2Z1JlcGxhY2VXaXRoU3RyaW5nKHB4U3ZnSWNvblN0cmluZywgJGVsKTtcbiAgfTtcblxuICBDaHJvbWVVSS5wcm90b3R5cGUuZ2V0UmFuayA9IGZ1bmN0aW9uKGRhdGEsIGVwaXNvZGUpIHtcbiAgICBzd2l0Y2ggKGVwaXNvZGUpIHtcbiAgICAgIGNhc2UgJ3JlY3J1aXQnOlxuICAgICAgICBkYXRhLnJhbmsgPSBcInJlY3J1aXRcIjtcbiAgICAgICAgcmV0dXJuIGRhdGEuYmFkZ2UgPSBcInJhbmstYmFkZ2UtcmVjcnVpdFwiO1xuICAgICAgY2FzZSAnY2FkZXQnOlxuICAgICAgICBkYXRhLnJhbmsgPSBcImNhZGV0XCI7XG4gICAgICAgIHJldHVybiBkYXRhLmJhZGdlID0gXCJyYW5rLWJhZGdlLWNhZGV0XCI7XG4gICAgICBjYXNlICdjYWRldC1maXJzdC1jbGFzcyc6XG4gICAgICAgIGRhdGEucmFuayA9IFwiQ2FkZXQgRmlyc3QgQ2xhc3NcIjtcbiAgICAgICAgcmV0dXJuIGRhdGEuYmFkZ2UgPSBcInJhbmstYmFkZ2UtY2FkZXQtZmlyc3QtY2xhc3NcIjtcbiAgICAgIGNhc2UgJ3RlY2huaWNhbC1jYWRldCc6XG4gICAgICAgIGRhdGEucmFuayA9IFwiVGVjaG5pY2FsIENhZGV0XCI7XG4gICAgICAgIHJldHVybiBkYXRhLmJhZGdlID0gXCJyYW5rLWJhZGdlLXRlY2huaWNhbC1jYWRldFwiO1xuICAgICAgY2FzZSAnY3liZXItY2FkZXQnOlxuICAgICAgICBkYXRhLnJhbmsgPSBcIkN5YmVyIENhZGV0XCI7XG4gICAgICAgIHJldHVybiBkYXRhLmJhZGdlID0gXCJyYW5rLWJhZGdlLWN5YmVyLWNhZGV0XCI7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBDaHJvbWVVSTtcblxufSkoKTtcbiIsInZhciBBdWRpb1RyYWNrO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF1ZGlvVHJhY2sgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIEF1ZGlvVHJhY2soc3JjKSB7XG4gICAgdGhpcy5zcmMgPSBzcmM7XG4gICAgQXVkaW9UcmFjay5pbml0U291bmRTZXR0aW5ncygpO1xuICB9XG5cbiAgQXVkaW9UcmFjay5wcm90b3R5cGUucGxheSA9IGZ1bmN0aW9uKG9uQ29tcGxldGUpIHtcbiAgICB0aGlzLnNvdW5kID0gY3JlYXRlanMuU291bmQucGxheSh0aGlzLnNyYywgQXVkaW9UcmFjay5wcGMpO1xuICAgIHJldHVybiB0aGlzLnNvdW5kLmFkZEV2ZW50TGlzdGVuZXIoXCJjb21wbGV0ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBvbkNvbXBsZXRlKCk7XG4gICAgfSk7XG4gIH07XG5cbiAgQXVkaW9UcmFjay5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnNvdW5kLnN0b3AoKTtcbiAgfTtcblxuICBBdWRpb1RyYWNrLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zb3VuZC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY29tcGxldGVcIik7XG4gICAgcmV0dXJuIHRoaXMuc291bmQuZGVzdHJveSgpO1xuICB9O1xuXG4gIEF1ZGlvVHJhY2suaW5pdFNvdW5kU2V0dGluZ3MgPSBmdW5jdGlvbih2b2x1bWUpIHtcbiAgICBpZiAodm9sdW1lID09IG51bGwpIHtcbiAgICAgIHZvbHVtZSA9IDE7XG4gICAgfVxuICAgIGlmIChBdWRpb1RyYWNrLnBwYyAhPSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiBBdWRpb1RyYWNrLnBwYyA9IG5ldyBjcmVhdGVqcy5QbGF5UHJvcHNDb25maWcoKS5zZXQoe1xuICAgICAgaW50ZXJydXB0OiBjcmVhdGVqcy5Tb3VuZC5JTlRFUlJVUFRfQU5ZLFxuICAgICAgdm9sdW1lOiB2b2x1bWUsXG4gICAgICBwYW46IDFcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gQXVkaW9UcmFjaztcblxufSkoKTtcbiIsInZhciBFcGlzb2RlLCBTbGlkZXMsXG4gIGJpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9O1xuXG5TbGlkZXMgPSByZXF1aXJlKCdlcGlzb2RlL3NsaWRlcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVwaXNvZGUgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIEVwaXNvZGUodHJhaW5pbmdEYXRhLCBtb3ZpZSwgdXgpIHtcbiAgICB0aGlzLm9uU2xpZGVzQ29tcGxldGUgPSBiaW5kKHRoaXMub25TbGlkZXNDb21wbGV0ZSwgdGhpcyk7XG4gICAgdGhpcy5zbGlkZXMgPSBuZXcgU2xpZGVzKHRyYWluaW5nRGF0YSwgbW92aWUsIHV4LCB0aGlzLm9uU2xpZGVzQ29tcGxldGUpO1xuICAgIHRoaXMuc2xpZGVzLnN0YXJ0KCk7XG4gIH1cblxuICBFcGlzb2RlLnByb3RvdHlwZS5vblNsaWRlc0NvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKFwic2xpZGVzIGFyZSBjb21wbGV0ZVwiKTtcbiAgfTtcblxuICByZXR1cm4gRXBpc29kZTtcblxufSkoKTtcbiIsInZhciBBdWRpb1RyYWNrLCBTVkdBbmltYXRpb24sIFNsaWRlLFxuICBiaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfTtcblxuQXVkaW9UcmFjayA9IHJlcXVpcmUoXCJlcGlzb2RlL2F1ZGlvLXRyYWNrXCIpO1xuXG5TVkdBbmltYXRpb24gPSByZXF1aXJlKFwibW92aWUvc3ZnLWFuaW1hdGlvblwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTbGlkZSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gU2xpZGUobW92aWUsIHNsaWRlVVgsIHNsaWRlRGF0YSwgb25TbGlkZUNvbXBsZXRlKSB7XG4gICAgdGhpcy5tb3ZpZSA9IG1vdmllO1xuICAgIHRoaXMuc2xpZGVVWCA9IHNsaWRlVVg7XG4gICAgdGhpcy5zbGlkZURhdGEgPSBzbGlkZURhdGE7XG4gICAgdGhpcy5vblNsaWRlQ29tcGxldGUgPSBvblNsaWRlQ29tcGxldGU7XG4gICAgdGhpcy5wbGF5ID0gYmluZCh0aGlzLnBsYXksIHRoaXMpO1xuICB9XG5cbiAgU2xpZGUucHJvdG90eXBlLnBsYXkgPSBmdW5jdGlvbihvbkNvbXBsZXRlKSB7XG4gICAgdGhpcy5tb3ZpZS5wb3B1bGF0ZSh0aGlzLnNsaWRlRGF0YS5tb3ZpZSk7XG4gICAgdGhpcy5zbGlkZVVYLnBvcHVsYXRlKHRoaXMuc2xpZGVEYXRhLnV4KTtcbiAgICB0aGlzLnNldER1cmF0aW9uKCk7XG4gICAgdGhpcy5ydW5DdGFubGVlKHRoaXMuc2xpZGVEYXRhLmN0YW5sZWUpO1xuICAgIHJldHVybiB0aGlzLnJ1bkFjdGlvbnModGhpcy5zbGlkZURhdGEuYWN0aW9uKTtcbiAgfTtcblxuICBTbGlkZS5wcm90b3R5cGUucnVuQWN0aW9ucyA9IGZ1bmN0aW9uKGFjdGlvbikge1xuICAgIGlmIChhY3Rpb24gPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gUHViU3ViLnB1Ymxpc2goYWN0aW9uLmNtZCwgYWN0aW9uLmRhdGEpO1xuICB9O1xuXG4gIFNsaWRlLnByb3RvdHlwZS5zZXREdXJhdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLnNsaWRlRGF0YS5kdXJhdGlvbiA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHN3aXRjaCAodGhpcy5zbGlkZURhdGEuZHVyYXRpb24ua2luZCkge1xuICAgICAgY2FzZSBcInRpbWVcIjpcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQodGhpcy5vblNsaWRlQ29tcGxldGUsIHRoaXMuc2xpZGVEYXRhLmR1cmF0aW9uLnNlY29uZHMgKiAxMDAwKTtcbiAgICAgIGNhc2UgXCJ1c2VyXCI6XG4gICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcIndhaXRpbmcgb24gdGhlIHVzZXJcIik7XG4gICAgICBjYXNlIFwidXhcIjpcbiAgICAgICAgcmV0dXJuIFB1YlN1Yi5zdWJzY3JpYmUoJ3V4LmNvbXBsZXRlJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLm9uU2xpZGVDb21wbGV0ZSgpO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pKHRoaXMpKTtcbiAgICAgIGNhc2UgXCJjdGFubGVlXCI6XG4gICAgICAgIHJldHVybiBQdWJTdWIuc3Vic2NyaWJlKCdjdGFubGVlLmNvbXBsZXRlJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLm9uU2xpZGVDb21wbGV0ZSgpO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pKHRoaXMpKTtcbiAgICAgIGNhc2UgXCJwdWJzdWJcIjpcbiAgICAgICAgcmV0dXJuIFB1YlN1Yi5zdWJzY3JpYmUodGhpcy5zbGlkZURhdGEuZHVyYXRpb24uZXZlbnQsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIFB1YlN1Yi51bnN1YnNjcmliZShfdGhpcy5zbGlkZURhdGEuZHVyYXRpb24uZXZlbnQpO1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLm9uU2xpZGVDb21wbGV0ZSgpO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pKHRoaXMpKTtcbiAgICB9XG4gIH07XG5cbiAgU2xpZGUucHJvdG90eXBlLnJ1bkN0YW5sZWUgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgaWYgKGRhdGEgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGFyaXN0b3RsZS5jdGFubGVlLmFjdGl2YXRlKGRhdGEpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gU2xpZGU7XG5cbn0pKCk7XG4iLCJ2YXIgU2xpZGUsIFNsaWRlcyxcbiAgYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH07XG5cblNsaWRlID0gcmVxdWlyZSgnZXBpc29kZS9zbGlkZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNsaWRlcyA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gU2xpZGVzKHRyYWluaW5nRGF0YSwgbW92aWUsIHV4LCBvbkNvbXBsZXRlKSB7XG4gICAgdGhpcy5vbkNvbXBsZXRlID0gb25Db21wbGV0ZTtcbiAgICB0aGlzLm5leHRTbGlkZSA9IGJpbmQodGhpcy5uZXh0U2xpZGUsIHRoaXMpO1xuICAgIHRoaXMuc2xpZGVDb21wbGV0ZSA9IGJpbmQodGhpcy5zbGlkZUNvbXBsZXRlLCB0aGlzKTtcbiAgICB0aGlzLnNsaWRlcyA9IFtdO1xuICAgIHRoaXMuY3VycmVudFNsaWRlSW5kZXggPSAtMTtcbiAgICB0aGlzLmNyZWF0ZVNsaWRlcyh0cmFpbmluZ0RhdGEsIG1vdmllLCB1eCk7XG4gICAgUHViU3ViLnN1YnNjcmliZSgnc2xpZGVzLm5leHQtc2xpZGUnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLm5leHRTbGlkZSgpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH1cblxuICBTbGlkZXMucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubmV4dFNsaWRlKCk7XG4gIH07XG5cbiAgU2xpZGVzLnByb3RvdHlwZS5jcmVhdGVTbGlkZXMgPSBmdW5jdGlvbih0cmFpbmluZ0RhdGEsIG1vdmllLCB1eCkge1xuICAgIHZhciBpLCBsZW4sIHJlZiwgcmVzdWx0cywgc2xpZGVEYXRhO1xuICAgIHJlZiA9IHRyYWluaW5nRGF0YS5zbGlkZXM7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgc2xpZGVEYXRhID0gcmVmW2ldO1xuICAgICAgcmVzdWx0cy5wdXNoKHRoaXMuc2xpZGVzLnB1c2gobmV3IFNsaWRlKG1vdmllLCB1eCwgc2xpZGVEYXRhLCB0aGlzLnNsaWRlQ29tcGxldGUpKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIFNsaWRlcy5wcm90b3R5cGUuc2xpZGVDb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm5leHRTbGlkZSgpO1xuICB9O1xuXG4gIFNsaWRlcy5wcm90b3R5cGUubmV4dFNsaWRlID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudFNsaWRlSW5kZXggPT09IHRoaXMuc2xpZGVzLmxlbmd0aCAtIDEpIHtcbiAgICAgIHRoaXMudHJhaW5pbmdDb21wbGV0ZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmN1cnJlbnRTbGlkZSA9IHRoaXMuc2xpZGVzWysrdGhpcy5jdXJyZW50U2xpZGVJbmRleF07XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFNsaWRlLnBsYXkodGhpcy5zbGlkZUNvbXBsZXRlKTtcbiAgfTtcblxuICBTbGlkZXMucHJvdG90eXBlLnRyYWluaW5nQ29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5vbkNvbXBsZXRlKCk7XG4gIH07XG5cbiAgcmV0dXJuIFNsaWRlcztcblxufSkoKTtcbiIsInZhciBBdWRpb1RyYWNrLCBEZXZUb29scyxcbiAgYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH07XG5cbkF1ZGlvVHJhY2sgPSByZXF1aXJlKCdlcGlzb2RlL2F1ZGlvLXRyYWNrJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGV2VG9vbHMgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIERldlRvb2xzKCkge1xuICAgIHRoaXMudXBkYXRlID0gYmluZCh0aGlzLnVwZGF0ZSwgdGhpcyk7XG4gICAgdGhpcy5pbml0UGVyZm9ybWFuY2VTdGF0cygpO1xuICB9XG5cbiAgRGV2VG9vbHMucHJvdG90eXBlLnNldERlZmF1bHRzID0gZnVuY3Rpb24oZXBpc29kZURhdGEpIHtcbiAgICB0aGlzLnNraXBTbGlkZXMoZXBpc29kZURhdGEpO1xuICAgIGlmIChlcGlzb2RlRGF0YS5kZXYudm9sdW1lICE9IG51bGwpIHtcbiAgICAgIHJldHVybiBBdWRpb1RyYWNrLmluaXRTb3VuZFNldHRpbmdzKGVwaXNvZGVEYXRhLmRldi52b2x1bWUpO1xuICAgIH1cbiAgfTtcblxuICBEZXZUb29scy5wcm90b3R5cGUuc2tpcFNsaWRlcyA9IGZ1bmN0aW9uKGVwaXNvZGVEYXRhKSB7XG4gICAgdmFyIGksIGxlbiwgcmVmLCByZXN1bHRzLCBzbGlkZUluZGV4LCBzdGFydEluZGV4O1xuICAgIGlmIChlcGlzb2RlRGF0YS5kZXYuc3RhcnRTbGlkZUluZGV4ICE9IG51bGwpIHtcbiAgICAgIHN0YXJ0SW5kZXggPSBlcGlzb2RlRGF0YS5kZXYuc3RhcnRTbGlkZUluZGV4O1xuICAgICAgZXBpc29kZURhdGEuc2xpZGVzLnNwbGljZSgwLCBlcGlzb2RlRGF0YS5kZXYuc3RhcnRTbGlkZUluZGV4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhcnRJbmRleCA9IDA7XG4gICAgfVxuICAgIGlmIChlcGlzb2RlRGF0YS5kZXYuc2tpcFNsaWRlcyAhPSBudWxsKSB7XG4gICAgICByZWYgPSBlcGlzb2RlRGF0YS5kZXYuc2tpcFNsaWRlcy5zb3J0KCkucmV2ZXJzZSgpO1xuICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHNsaWRlSW5kZXggPSByZWZbaV07XG4gICAgICAgIGlmIChzbGlkZUluZGV4ID4gc3RhcnRJbmRleCkge1xuICAgICAgICAgIHJlc3VsdHMucHVzaChlcGlzb2RlRGF0YS5zbGlkZXMuc3BsaWNlKHNsaWRlSW5kZXggLSBzdGFydEluZGV4LCAxKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKHZvaWQgMCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH1cbiAgfTtcblxuICBEZXZUb29scy5wcm90b3R5cGUuaW5pdFBlcmZvcm1hbmNlU3RhdHMgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnN0YXRzID0gbmV3IFN0YXRzKCk7XG4gICAgdGhpcy5zdGF0cy5zZXRNb2RlKDApO1xuICAgIHRoaXMuc3RhdHMuZG9tRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgdGhpcy5zdGF0cy5kb21FbGVtZW50LnN0eWxlLmxlZnQgPSAnMHB4JztcbiAgICB0aGlzLnN0YXRzLmRvbUVsZW1lbnQuc3R5bGUudG9wID0gJzBweCc7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnN0YXRzLmRvbUVsZW1lbnQpO1xuICAgIHJldHVybiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGUpO1xuICB9O1xuXG4gIERldlRvb2xzLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnN0YXRzLmVuZCgpO1xuICAgIHRoaXMuc3RhdHMuYmVnaW4oKTtcbiAgICByZXR1cm4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlKTtcbiAgfTtcblxuICByZXR1cm4gRGV2VG9vbHM7XG5cbn0pKCk7XG4iLCJ2YXIgRXBpc29kZUxvYWRlcjtcblxubW9kdWxlLmV4cG9ydHMgPSBFcGlzb2RlTG9hZGVyID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBFcGlzb2RlTG9hZGVyKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIHRoaXMubG9hZEVwaXNvZGUoKTtcbiAgfVxuXG4gIEVwaXNvZGVMb2FkZXIucHJvdG90eXBlLmxvYWRFcGlzb2RlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubG9hZEpzb24oYXJpc3RvdGxlLmVwaXNvZGVSb290ICsgXCIvbWFwLmpzb25cIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oanNvbikge1xuICAgICAgICByZXR1cm4gX3RoaXMucHJlbG9hZEFzc2V0cyhKU09OLnBhcnNlKGpzb24pKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9O1xuXG4gIEVwaXNvZGVMb2FkZXIucHJvdG90eXBlLmxvYWRKc29uID0gZnVuY3Rpb24ocGF0aCwgb25Db21wbGV0ZSkge1xuICAgIHZhciB4b2JqO1xuICAgIHhvYmogPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB4b2JqLm92ZXJyaWRlTWltZVR5cGUoJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICB4b2JqLm9wZW4oJ0dFVCcsIHBhdGgsIHRydWUpO1xuICAgIHhvYmoub25yZWFkeXN0YXRlY2hhbmdlID0gKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh4b2JqLnJlYWR5U3RhdGUgPT09IDQgJiYgeG9iai5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIHJldHVybiBvbkNvbXBsZXRlKHhvYmoucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSh0aGlzKTtcbiAgICByZXR1cm4geG9iai5zZW5kKG51bGwpO1xuICB9O1xuXG4gIEVwaXNvZGVMb2FkZXIucHJvdG90eXBlLnByZWxvYWRBc3NldHMgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyIGFzc2V0cywgcHJlbG9hZFF1ZXVlLCByZWdleDtcbiAgICBhc3NldHMgPSBbXTtcbiAgICByZWdleCA9IC8uK1xcLihzdmcpLztcbiAgICB0aGlzLmxvb2tGb3JGaWxlcyhkYXRhLCBhc3NldHMsIHJlZ2V4KTtcbiAgICBjcmVhdGVqcy5Tb3VuZC5hbHRlcm5hdGVFeHRlbnNpb25zID0gW1wibXAzXCJdO1xuICAgIHByZWxvYWRRdWV1ZSA9IG5ldyBjcmVhdGVqcy5Mb2FkUXVldWUoKTtcbiAgICBwcmVsb2FkUXVldWUuaW5zdGFsbFBsdWdpbihjcmVhdGVqcy5Tb3VuZCk7XG4gICAgcHJlbG9hZFF1ZXVlLm9uKFwicHJvZ3Jlc3NcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZSkge307XG4gICAgfSkodGhpcykpO1xuICAgIHByZWxvYWRRdWV1ZS5vbihcImNvbXBsZXRlXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMuY2FsbGJhY2soZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICByZXR1cm4gcHJlbG9hZFF1ZXVlLmxvYWRNYW5pZmVzdChhc3NldHMpO1xuICB9O1xuXG4gIEVwaXNvZGVMb2FkZXIucHJvdG90eXBlLmxvb2tGb3JGaWxlcyA9IGZ1bmN0aW9uKGl0ZW0sIHN0b3JhZ2UsIHJlZ2V4KSB7XG4gICAgdmFyIGNoaWxkLCBpLCBrZXksIGxlbiwgcmVzdWx0cywgcmVzdWx0czEsIHR5cGU7XG4gICAgdHlwZSA9IHR5cGVvZiBpdGVtO1xuICAgIGlmICh0eXBlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBpZiAoLy5tcDMvLnRlc3QoaXRlbSkpIHtcbiAgICAgICAgcmV0dXJuIHN0b3JhZ2UucHVzaCh7XG4gICAgICAgICAgc3JjOiBhcmlzdG90bGUuZXBpc29kZVJvb3QgKyBcIi9zb3VuZHMvXCIgKyBpdGVtLFxuICAgICAgICAgIGlkOiBpdGVtXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICgvLmpzb24vLnRlc3QoaXRlbSkpIHtcbiAgICAgICAgcmV0dXJuIHN0b3JhZ2UucHVzaCh7XG4gICAgICAgICAgc3JjOiBhcmlzdG90bGUuZXBpc29kZVJvb3QgKyBcIi9hbmltYXRpb25zL1wiICsgaXRlbSxcbiAgICAgICAgICBpZDogaXRlbVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoLy5zdmcvLnRlc3QoaXRlbSkpIHtcbiAgICAgICAgcmV0dXJuIHN0b3JhZ2UucHVzaCh7XG4gICAgICAgICAgc3JjOiBhcmlzdG90bGUuZXBpc29kZVJvb3QgKyBcIi9hc3NldHMvXCIgKyBpdGVtLFxuICAgICAgICAgIGlkOiBpdGVtXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbSkpIHtcbiAgICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgICBmb3IgKGkgPSAwLCBsZW4gPSBpdGVtLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgY2hpbGQgPSBpdGVtW2ldO1xuICAgICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLmxvb2tGb3JGaWxlcyhjaGlsZCwgc3RvcmFnZSwgcmVnZXgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdHMxID0gW107XG4gICAgICAgIGZvciAoa2V5IGluIGl0ZW0pIHtcbiAgICAgICAgICBjaGlsZCA9IGl0ZW1ba2V5XTtcbiAgICAgICAgICByZXN1bHRzMS5wdXNoKHRoaXMubG9va0ZvckZpbGVzKGNoaWxkLCBzdG9yYWdlLCByZWdleCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzMTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIEVwaXNvZGVMb2FkZXI7XG5cbn0pKCk7XG4iLCJ2YXIgSGlnaGxpZ2h0ZXI7XG5cbm1vZHVsZS5leHBvcnRzID0gSGlnaGxpZ2h0ZXIgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIEhpZ2hsaWdodGVyKCRlbCkge1xuICAgIHRoaXMuJGVsID0gJGVsO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ2hpZ2hsaWdodCcsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmhpZ2hsaWdodEVsZW1lbnQoZGF0YS5pZCwgZGF0YS5jb2xvcik7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCd1bmhpZ2hsaWdodCcsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnVuSGlnaGxpZ2h0RWxlbWVudChkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9XG5cbiAgSGlnaGxpZ2h0ZXIucHJvdG90eXBlLmhpZ2hsaWdodEVsZW1lbnQgPSBmdW5jdGlvbihlbGVtZW50SWQsIGNvbG9yKSB7XG4gICAgcmV0dXJuICQoXCIjXCIgKyBlbGVtZW50SWQsIHRoaXMuJGVsKS5jc3Moe1xuICAgICAgZmlsdGVyOiBcInVybCgjaGlnaGxpZ2h0KVwiXG4gICAgfSk7XG4gIH07XG5cbiAgSGlnaGxpZ2h0ZXIucHJvdG90eXBlLnVuSGlnaGxpZ2h0RWxlbWVudCA9IGZ1bmN0aW9uKGVsZW1lbnRJZCkge1xuICAgIHJldHVybiAkKFwiI1wiICsgZWxlbWVudElkLCB0aGlzLiRlbCkuY3NzKHtcbiAgICAgIGZpbHRlcjogXCJpbml0aWFsXCJcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gSGlnaGxpZ2h0ZXI7XG5cbn0pKCk7XG4iLCJ2YXIgTGF5ZXIsIFNWR0FuaW1hdGlvbjtcblxuU1ZHQW5pbWF0aW9uID0gcmVxdWlyZSgnbW92aWUvc3ZnLWFuaW1hdGlvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IExheWVyID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBMYXllcigkZWwsIGRlcHRoKSB7XG4gICAgdGhpcy4kbGF5ZXIgPSAkKGphZGVUZW1wbGF0ZVsnbW92aWUvbGF5ZXInXSh7XG4gICAgICBkZXB0aDogZGVwdGhcbiAgICB9KSk7XG4gICAgJGVsLmFwcGVuZCh0aGlzLiRsYXllcik7XG4gIH1cblxuICBMYXllci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24obGF5ZXJEYXRhKSB7XG4gICAgaWYgKGxheWVyRGF0YS5jb250ZW50ICE9IG51bGwpIHtcbiAgICAgIHRoaXMudXBkYXRlQ29udGVudChsYXllckRhdGEpO1xuICAgIH1cbiAgICBpZiAobGF5ZXJEYXRhLmZ4ICE9IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLnVwZGF0ZUVmZmVjdHMobGF5ZXJEYXRhLmZ4KTtcbiAgICB9XG4gIH07XG5cbiAgTGF5ZXIucHJvdG90eXBlLnVwZGF0ZUNvbnRlbnQgPSBmdW5jdGlvbihsYXllckRhdGEpIHtcbiAgICB2YXIgZmlsZUV4dDtcbiAgICB0aGlzLmVtcHR5KCk7XG4gICAgZmlsZUV4dCA9IGxheWVyRGF0YS5jb250ZW50LnNwbGl0KFwiLlwiKVsxXTtcbiAgICBzd2l0Y2ggKGZpbGVFeHQpIHtcbiAgICAgIGNhc2UgXCJqc29uXCI6XG4gICAgICAgIHJldHVybiB0aGlzLmFkZEFuaW1hdGlvbihsYXllckRhdGEpO1xuICAgICAgY2FzZSBcInN2Z1wiOlxuICAgICAgICByZXR1cm4gdGhpcy5hZGRJbWFnZShsYXllckRhdGEpO1xuICAgIH1cbiAgfTtcblxuICBMYXllci5wcm90b3R5cGUudXBkYXRlRWZmZWN0cyA9IGZ1bmN0aW9uKGZ4KSB7XG4gICAgdmFyIGVmZmVjdCwgaSwgbGVuLCByZWYsIHJlc3VsdHM7XG4gICAgaWYgKGZ4LmNsZWFyKSB7XG4gICAgICB0aGlzLiRsYXllci5hdHRyKHtcbiAgICAgICAgXCJjbGFzc1wiOiAnbGF5ZXInXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGZ4LmVmZmVjdHMgIT0gbnVsbCkge1xuICAgICAgcmVmID0gZnguZWZmZWN0cztcbiAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBlZmZlY3QgPSByZWZbaV07XG4gICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLiRsYXllci5hZGRDbGFzcyhlZmZlY3QpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH1cbiAgfTtcblxuICBMYXllci5wcm90b3R5cGUuYWRkQW5pbWF0aW9uID0gZnVuY3Rpb24obGF5ZXJEYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMuYW5pbWF0aW9uID0gbmV3IFNWR0FuaW1hdGlvbih0aGlzLiRsYXllciwgYXJpc3RvdGxlLmVwaXNvZGVSb290ICsgXCIvYW5pbWF0aW9ucy9cIiArIGxheWVyRGF0YS5jb250ZW50LCBsYXllckRhdGEpO1xuICB9O1xuXG4gIExheWVyLnByb3RvdHlwZS5hZGRJbWFnZSA9IGZ1bmN0aW9uKGxheWVyRGF0YSkge1xuICAgIHJldHVybiB0aGlzLiRsYXllci5sb2FkKGFyaXN0b3RsZS5lcGlzb2RlUm9vdCArIFwiL2Fzc2V0cy9cIiArIGxheWVyRGF0YS5jb250ZW50KTtcbiAgfTtcblxuICBMYXllci5wcm90b3R5cGUuZW1wdHkgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kbGF5ZXIuZW1wdHkoKTtcbiAgfTtcblxuICByZXR1cm4gTGF5ZXI7XG5cbn0pKCk7XG4iLCJ2YXIgSGlnaGxpZ2h0ZXIsIExheWVyLCBNb3ZpZTtcblxuTGF5ZXIgPSByZXF1aXJlKCdtb3ZpZS9MYXllcicpO1xuXG5IaWdobGlnaHRlciA9IHJlcXVpcmUoJ21vdmllL0hpZ2hsaWdodGVyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTW92aWUgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIE1vdmllKCRlbCkge1xuICAgIHRoaXMuJGVsID0gJGVsO1xuICAgIHRoaXMuJHdyYXBwZXIgPSAkKCcud3JhcHBlcicsIHRoaXMuJGVsKTtcbiAgICB0aGlzLmxheWVycyA9IFtdO1xuICAgIHRoaXMuaGlnaGxpZ2h0ZXIgPSBuZXcgSGlnaGxpZ2h0ZXIodGhpcy4kd3JhcHBlcik7XG4gICAgUHViU3ViLnN1YnNjcmliZSgnbW92aWUubG9hZC1sYXllcicsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmFkZExheWVyKGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgUHViU3ViLnN1YnNjcmliZSgnbW92aWUuem9vbScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnpvb20oZGF0YS5zY2FsZSwgZGF0YS54LCBkYXRhLnkpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH1cblxuICBNb3ZpZS5wcm90b3R5cGUucG9wdWxhdGUgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyIGRlcHRoSWQsIGxheWVyRGF0YSwgcmVmO1xuICAgIGlmIChkYXRhID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmVmID0gZGF0YS5sYXllcnM7XG4gICAgZm9yIChkZXB0aElkIGluIHJlZikge1xuICAgICAgbGF5ZXJEYXRhID0gcmVmW2RlcHRoSWRdO1xuICAgICAgdGhpcy5hZGRMYXllcihsYXllckRhdGEpO1xuICAgIH1cbiAgICBpZiAoZGF0YS56b29tICE9IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLnpvb20oZGF0YS56b29tLnNjYWxlLCBkYXRhLnpvb20ueCwgZGF0YS56b29tLnkpO1xuICAgIH1cbiAgfTtcblxuICBNb3ZpZS5wcm90b3R5cGUuem9vbSA9IGZ1bmN0aW9uKHNjYWxlLCB4LCB5KSB7XG4gICAgaWYgKHNjYWxlID09IG51bGwpIHtcbiAgICAgIHNjYWxlID0gMTtcbiAgICB9XG4gICAgaWYgKHggPT0gbnVsbCkge1xuICAgICAgeCA9IDA7XG4gICAgfVxuICAgIGlmICh5ID09IG51bGwpIHtcbiAgICAgIHkgPSAwO1xuICAgIH1cbiAgICB0aGlzLiRlbC5jc3Moe1xuICAgICAgXCJ0cmFuc2Zvcm0tb3JpZ2luXCI6IHggKyBcInB4IFwiICsgeSArIFwicHhcIlxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLiRlbC5jc3Moe1xuICAgICAgdHJhbnNmb3JtOiBcInNjYWxlKFwiICsgc2NhbGUgKyBcIilcIlxuICAgIH0pO1xuICB9O1xuXG4gIE1vdmllLnByb3RvdHlwZS5hZGRMYXllciA9IGZ1bmN0aW9uKGxheWVyRGF0YSkge1xuICAgIHZhciBkZXB0aCwgaSwgaiwgbGF5ZXIsIHJlZiwgcmVmMTtcbiAgICBkZXB0aCA9IGxheWVyRGF0YS5kZXB0aDtcbiAgICBpZiAoZGVwdGggPiB0aGlzLmxheWVycy5sZW5ndGgpIHtcbiAgICAgIGZvciAoaSA9IGogPSByZWYgPSB0aGlzLmxheWVycy5sZW5ndGgsIHJlZjEgPSBkZXB0aDsgcmVmIDw9IHJlZjEgPyBqIDw9IHJlZjEgOiBqID49IHJlZjE7IGkgPSByZWYgPD0gcmVmMSA/ICsraiA6IC0taikge1xuICAgICAgICB0aGlzLmxheWVyc1tpXSA9IG5ldyBMYXllcih0aGlzLiR3cmFwcGVyLCBkZXB0aCk7XG4gICAgICB9XG4gICAgfVxuICAgIGxheWVyID0gdGhpcy5nZXRPckNyZWF0ZUxheWVyKGRlcHRoKTtcbiAgICByZXR1cm4gbGF5ZXIudXBkYXRlKGxheWVyRGF0YSk7XG4gIH07XG5cbiAgTW92aWUucHJvdG90eXBlLmdldE9yQ3JlYXRlTGF5ZXIgPSBmdW5jdGlvbihkZXB0aCkge1xuICAgIHZhciBsYXllcjtcbiAgICBpZiAodGhpcy5sYXllcnNbZGVwdGhdICE9IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLmxheWVyc1tkZXB0aF07XG4gICAgfVxuICAgIGxheWVyID0gbmV3IExheWVyKHRoaXMuJHdyYXBwZXIsIGRlcHRoKTtcbiAgICB0aGlzLmxheWVyc1tkZXB0aF0gPSBsYXllcjtcbiAgICByZXR1cm4gbGF5ZXI7XG4gIH07XG5cbiAgcmV0dXJuIE1vdmllO1xuXG59KSgpO1xuIiwidmFyIFNWR0FuaW1hdGlvbixcbiAgYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH07XG5cbm1vZHVsZS5leHBvcnRzID0gU1ZHQW5pbWF0aW9uID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBTVkdBbmltYXRpb24oZWwsIGpzb24sIGRhdGEpIHtcbiAgICB0aGlzLnBsYXkgPSBiaW5kKHRoaXMucGxheSwgdGhpcyk7XG4gICAgd2luZG93LmZpeFNWR1MgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiAkKFwic3ZnXCIpLmNzcyh7XG4gICAgICAgIHdpZHRoOiBcImluaXRpYWxcIixcbiAgICAgICAgaGVpZ2h0OiBcImluaXRpYWxcIlxuICAgICAgfSk7XG4gICAgfTtcbiAgICB0aGlzLmFuaW1hdGlvbiA9IGJvZHltb3Zpbi5sb2FkQW5pbWF0aW9uKHtcbiAgICAgIHdyYXBwZXI6IGVsWzBdLFxuICAgICAgYW5pbVR5cGU6ICdzdmcnLFxuICAgICAgbG9vcDogZGF0YS5sb29wLFxuICAgICAgcHJlcmVuZGVyOiB0cnVlLFxuICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgcGF0aDoganNvblxuICAgIH0pO1xuICAgIGlmIChkYXRhLmRlbGF5ICE9IG51bGwpIHtcbiAgICAgIHNldFRpbWVvdXQodGhpcy5wbGF5LCBkYXRhLmRlbGF5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5wbGF5KCk7XG4gICAgfVxuICAgIHRoaXMuYWRkRXZlbnRzKGRhdGEpO1xuICB9XG5cbiAgU1ZHQW5pbWF0aW9uLnByb3RvdHlwZS5hZGRFdmVudHMgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyIGV2ZW50LCBpLCBsZW4sIHJlZiwgcmVzdWx0cztcbiAgICBpZiAoZGF0YS5ldmVudHMgIT0gbnVsbCkge1xuICAgICAgcmVmID0gZGF0YS5ldmVudHM7XG4gICAgICByZXN1bHRzID0gW107XG4gICAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgZXZlbnQgPSByZWZbaV07XG4gICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLmFuaW1hdGlvbi5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBfdGhpcy5hbmltYXRpb24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCk7XG4gICAgICAgICAgICByZXR1cm4gUHViU3ViLnB1Ymxpc2goXCJsYXllci5cIiArIGRhdGEuZGVwdGggKyBcIi5cIiArIGV2ZW50KTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KSh0aGlzKSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxuICB9O1xuXG4gIFNWR0FuaW1hdGlvbi5wcm90b3R5cGUucGxheSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmFuaW1hdGlvbi5wbGF5KCk7XG4gIH07XG5cbiAgU1ZHQW5pbWF0aW9uLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYW5pbWF0aW9uLnN0b3AoKTtcbiAgfTtcblxuICBTVkdBbmltYXRpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmFuaW1hdGlvbi5kZXN0cm95KCk7XG4gICAgaWYgKHRoaXMuaW50ZXJ2YWwgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XG4gICAgfVxuICB9O1xuXG4gIFNWR0FuaW1hdGlvbi5wcm90b3R5cGUudHJhY2VGcmFtZXMgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gY29uc29sZS5sb2coX3RoaXMuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZSwgX3RoaXMuYW5pbWF0aW9uLnRvdGFsRnJhbWVzKTtcbiAgICAgIH07XG4gICAgfSkodGhpcyksIDUwMCk7XG4gIH07XG5cbiAgcmV0dXJuIFNWR0FuaW1hdGlvbjtcblxufSkoKTtcbiIsInZhciBDb21wb25lbnQ7XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50ID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBDb21wb25lbnQoJGVsLCAkbm9kZSkge1xuICAgIHRoaXMuJG5vZGUgPSAkbm9kZTtcbiAgICAkZWwuYXBwZW5kKHRoaXMuJG5vZGUpO1xuICAgIHNoYWRvd0ljb25zSW5zdGFuY2Uuc3ZnUmVwbGFjZVdpdGhTdHJpbmcocHhTdmdJY29uU3RyaW5nLCB0aGlzLiRub2RlKTtcbiAgfVxuXG4gIENvbXBvbmVudC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRub2RlLnJlbW92ZSgpO1xuICB9O1xuXG4gIHJldHVybiBDb21wb25lbnQ7XG5cbn0pKCk7XG4iLCJ2YXIgQ29tcG9uZW50LCBTZWxlY3Rpb25EaWFsb2d1ZSxcbiAgZXh0ZW5kID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChoYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9LFxuICBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbkNvbXBvbmVudCA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvY29tcG9uZW50Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2VsZWN0aW9uRGlhbG9ndWUgPSAoZnVuY3Rpb24oc3VwZXJDbGFzcykge1xuICBleHRlbmQoU2VsZWN0aW9uRGlhbG9ndWUsIHN1cGVyQ2xhc3MpO1xuXG4gIGZ1bmN0aW9uIFNlbGVjdGlvbkRpYWxvZ3VlKCRlbCwgZGF0YSkge1xuICAgIHZhciBqYWRlRGF0YTtcbiAgICBqYWRlRGF0YSA9IHRoaXMuZ2VuZXJhdGVDb25maWdEYXRhKGRhdGEpO1xuICAgIHRoaXMuJG5vZGUgPSAkKGphZGVUZW1wbGF0ZVsnc2xpZGUtdXgvY29tcG9uZW50cy9zZWxlY3Rpb24tZGlhbG9ndWUnXShqYWRlRGF0YSkpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnModGhpcy4kbm9kZSwgZGF0YSk7XG4gICAgU2VsZWN0aW9uRGlhbG9ndWUuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgJGVsLCB0aGlzLiRub2RlKTtcbiAgfVxuXG4gIFNlbGVjdGlvbkRpYWxvZ3VlLnByb3RvdHlwZS5nZW5lcmF0ZUNvbmZpZ0RhdGEgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyIGksIGl0ZW0sIGosIGphZGVEYXRhLCBsZW4sIHJlZjtcbiAgICB0aGlzLml0ZW1zID0ge307XG4gICAgamFkZURhdGEgPSB7fTtcbiAgICBqYWRlRGF0YS50aXRsZSA9IGRhdGEudGl0bGU7XG4gICAgamFkZURhdGEuc3ViVGl0bGUgPSBkYXRhLnN1YlRpdGxlO1xuICAgIGphZGVEYXRhLmJ0blR4dCA9IGRhdGEuc3VibWl0QnRuLnR4dDtcbiAgICBqYWRlRGF0YS5idG5JY29uID0gZGF0YS5zdWJtaXRCdG4uaWNvbjtcbiAgICBqYWRlRGF0YS5pbnRybyA9IGRhdGEuaW50cm87XG4gICAgamFkZURhdGEuaXRlbXMgPSBbXTtcbiAgICByZWYgPSBkYXRhLml0ZW1zO1xuICAgIGZvciAoaSA9IGogPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBqIDwgbGVuOyBpID0gKytqKSB7XG4gICAgICBpdGVtID0gcmVmW2ldO1xuICAgICAgaXRlbS5pZCA9IFwiaXRlbVwiICsgaTtcbiAgICAgIGphZGVEYXRhLml0ZW1zLnB1c2goe1xuICAgICAgICB0eHQ6IGl0ZW0uYnRuVHh0LFxuICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgaWNvbjogaXRlbS5pY29uXG4gICAgICB9KTtcbiAgICAgIHRoaXMuaXRlbXNbaXRlbS5pZF0gPSBpdGVtO1xuICAgIH1cbiAgICByZXR1cm4gamFkZURhdGE7XG4gIH07XG5cbiAgU2VsZWN0aW9uRGlhbG9ndWUucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24oJGVsLCBkYXRhKSB7XG4gICAgdmFyICRidXR0b25zO1xuICAgICRidXR0b25zID0gJChcIi5idXR0b25cIiwgJGVsKTtcbiAgICAkYnV0dG9ucy5vbihcImNsaWNrXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdmFyICR0YXJnO1xuICAgICAgICAkdGFyZyA9ICQoZS50YXJnZXQpO1xuICAgICAgICByZXR1cm4gX3RoaXMuYWN0aXZhdGVJdGVtKCR0YXJnLCBfdGhpcy5pdGVtc1skdGFyZy5hdHRyKCdpZCcpXSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICByZXR1cm4gJChcIiNhY3Rpb24tYnRuXCIsICRlbCkub24oXCJjbGlja1wiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICAgIHZhciBhY3Rpb24sIGosIGxlbiwgcmVmO1xuICAgICAgICByZWYgPSBkYXRhLmNsaWNrO1xuICAgICAgICBmb3IgKGogPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgICAgICBhY3Rpb24gPSByZWZbal07XG4gICAgICAgICAgUHViU3ViLnB1Ymxpc2goYWN0aW9uLmNtZCwgYWN0aW9uLmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcy5kZXN0cm95KCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgfTtcblxuICBTZWxlY3Rpb25EaWFsb2d1ZS5wcm90b3R5cGUuYWN0aXZhdGVJdGVtID0gZnVuY3Rpb24oJGJ1dHRvbiwgaXRlbSkge1xuICAgICQoXCIuaW50cm9cIiwgdGhpcy4kbm9kZSkuY3NzKHtcbiAgICAgIGRpc3BsYXk6IFwibm9uZVwiXG4gICAgfSk7XG4gICAgJChcIi5pdGVtLWluZm9cIiwgdGhpcy4kbm9kZSkuY3NzKHtcbiAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIlxuICAgIH0pO1xuICAgICQoXCIuYnV0dG9uXCIsIHRoaXMuJG5vZGUpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICRidXR0b24uYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgJChcIi5pY29uXCIsIHRoaXMuJG5vZGUpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICQoXCIjaWNvbi1cIiArIGl0ZW0uaWQsIHRoaXMuJG5vZGUpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgICQoXCIuYmx1cmJcIiwgdGhpcy4kbm9kZSkuaHRtbChpdGVtLmJsdXJiKTtcbiAgICAkKFwiLmRldGFpbHNcIiwgdGhpcy4kbm9kZSkuaHRtbChpdGVtLmRldGFpbHMpO1xuICAgIHJldHVybiBQdWJTdWIucHVibGlzaChpdGVtLmNsaWNrLmNtZCwgaXRlbS5jbGljay5kYXRhKTtcbiAgfTtcblxuICByZXR1cm4gU2VsZWN0aW9uRGlhbG9ndWU7XG5cbn0pKENvbXBvbmVudCk7XG4iLCJ2YXIgQXVkaW9UcmFjaywgQ3RhbmxlZTtcblxuQXVkaW9UcmFjayA9IHJlcXVpcmUoJ2VwaXNvZGUvYXVkaW8tdHJhY2snKTtcblxubW9kdWxlLmV4cG9ydHMgPSBDdGFubGVlID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBDdGFubGVlKCRwYXJlbnQpIHtcbiAgICBhcmlzdG90bGUuY3RhbmxlZSA9IHRoaXM7XG4gICAgdGhpcy4kZWwgPSAkKGphZGVUZW1wbGF0ZVsnc2xpZGUtdXgvY3RhbmxlZS9jdGFubGVlJ10oe30pKTtcbiAgICBzaGFkb3dJY29uc0luc3RhbmNlLnN2Z1JlcGxhY2VXaXRoU3RyaW5nKHB4U3ZnSWNvblN0cmluZywgdGhpcy4kZWwpO1xuICAgIHRoaXMuJHNwZWVjaEJveCA9ICQoXCIuc3BlZWNoLWJveFwiLCB0aGlzLiRlbCk7XG4gICAgdGhpcy4kdGV4dCA9ICQoXCIudGV4dCBzcGFuLmNvbnRlbnRcIiwgdGhpcy4kc3BlZWNoQm94KTtcbiAgICB0aGlzLiRuZXh0QnRuID0gJChcIi50ZXh0IHNwYW4ubmV4dFwiLCB0aGlzLiRzcGVlY2hCb3gpO1xuICAgIHRoaXMuJG5leHRCdG4ub24oXCJjbGlja1wiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnBsYXlOZXh0QWN0aW9uKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCdjdGFubGVlLmFjdGl2YXRlJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oYSwgYWN0aW9uKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5wbGF5QWN0aW9uKGFjdGlvbik7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCdjdGFubGVlLmNsZWFyJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oYSwgYWN0aW9uKSB7XG4gICAgICAgIF90aGlzLmhpZGVUZXh0KCk7XG4gICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcImNsZWFyIGl0IVwiKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ2N0YW5sZWUuZ29ob21lJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oYSwgYWN0aW9uKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5yZXR1cm5Ub1N0YXRpb24oKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgICRwYXJlbnQuYXBwZW5kKHRoaXMuJGVsKTtcbiAgICB0aGlzLnJldHVyblRvU3RhdGlvbigpO1xuICB9XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUuYWN0aXZhdGUgPSBmdW5jdGlvbihkYXRhMSkge1xuICAgIHRoaXMuZGF0YSA9IGRhdGExO1xuICAgIGlmICh0aGlzLmRhdGEudGltZWxpbmUgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmN1cnJlbnRBY3Rpb25JbmRleCA9IC0xO1xuICAgIHRoaXMudGltZWxpbmUgPSB0aGlzLmRhdGEudGltZWxpbmU7XG4gICAgcmV0dXJuIHRoaXMucGxheU5leHRBY3Rpb24oKTtcbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5zYXkgPSBmdW5jdGlvbih0ZXh0LCBhdWRpbywgbmV4dCkge1xuICAgIHZhciB0cmFjaztcbiAgICBpZiAodGV4dCAhPSBudWxsKSB7XG4gICAgICB0aGlzLnNob3dUZXh0KCk7XG4gICAgICB0aGlzLiR0ZXh0Lmh0bWwodGV4dCk7XG4gICAgfVxuICAgIGlmIChhdWRpbyAhPSBudWxsKSB7XG4gICAgICB0cmFjayA9IG5ldyBBdWRpb1RyYWNrKGF1ZGlvKTtcbiAgICAgIHRyYWNrLnBsYXkoKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBpZiAobmV4dCA9PT0gJ2F1ZGlvJykge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLnBsYXlOZXh0QWN0aW9uKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfSkodGhpcykpO1xuICAgIH1cbiAgICBpZiAobmV4dCA9PT0gJ2NsaWNrJykge1xuICAgICAgcmV0dXJuIHRoaXMuc2hvd05leHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuaGlkZU5leHQoKTtcbiAgICB9XG4gIH07XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUuc2V0RW1vdGlvbiA9IGZ1bmN0aW9uKGVtb3Rpb24pIHt9O1xuXG4gIEN0YW5sZWUucHJvdG90eXBlLmdvdG8gPSBmdW5jdGlvbih4LCB5LCBkdXJhdGlvbiwgZGVsYXkpIHtcbiAgICBpZiAoeCA9PSBudWxsKSB7XG4gICAgICB4ID0gOTcwO1xuICAgIH1cbiAgICBpZiAoeSA9PSBudWxsKSB7XG4gICAgICB5ID0gMTA7XG4gICAgfVxuICAgIGlmIChkdXJhdGlvbiA9PSBudWxsKSB7XG4gICAgICBkdXJhdGlvbiA9IDYwMDtcbiAgICB9XG4gICAgaWYgKGRlbGF5ID09IG51bGwpIHtcbiAgICAgIGRlbGF5ID0gMDtcbiAgICB9XG4gICAgdGhpcy4kZWwudmVsb2NpdHkoXCJzdG9wXCIsIHRydWUpO1xuICAgIHJldHVybiB0aGlzLiRlbC52ZWxvY2l0eSh7XG4gICAgICB0b3A6IHksXG4gICAgICBsZWZ0OiB4XG4gICAgfSwge1xuICAgICAgZGVsYXk6IGRlbGF5LFxuICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgZWFzaW5nOiBcImVhc2VJbk91dFF1aW50XCJcbiAgICB9KTtcbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5wbGF5TmV4dEFjdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnRBY3Rpb25JbmRleCA9PT0gdGhpcy50aW1lbGluZS5sZW5ndGggLSAxKSB7XG4gICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnBsYXlBY3Rpb24odGhpcy50aW1lbGluZVsrK3RoaXMuY3VycmVudEFjdGlvbkluZGV4XS5hY3Rpb24pO1xuICB9O1xuXG4gIEN0YW5sZWUucHJvdG90eXBlLnBsYXlBY3Rpb24gPSBmdW5jdGlvbihhY3Rpb25JZCkge1xuICAgIHZhciBhY3Rpb24sIGl0ZW0sIGosIGxlbiwgcmVmO1xuICAgIHRoaXMuc2V0RmlsdGVyKCdibGFjay1nbG93Jyk7XG4gICAgdGhpcy5jdXJyZW50QWN0aW9uSW5kZXggPSB0aGlzLmdldEluZGV4T2ZBY3Rpb24oYWN0aW9uSWQpO1xuICAgIGFjdGlvbiA9IHRoaXMub3ZlcmxheURlZmF1bHRzKGFjdGlvbklkKTtcbiAgICBpZiAoYWN0aW9uLmVtbyAhPSBudWxsKSB7XG4gICAgICB0aGlzLnNldEVtb3Rpb24oYWN0aW9uLmVtbyk7XG4gICAgfVxuICAgIGlmIChhY3Rpb24ucG9zICE9IG51bGwpIHtcbiAgICAgIHRoaXMuZ290byhhY3Rpb24ucG9zWzBdLCBhY3Rpb24ucG9zWzFdLCBhY3Rpb24ucG9zWzJdLCBhY3Rpb24ucG9zWzNdKTtcbiAgICB9XG4gICAgaWYgKGFjdGlvbi5hY3Rpb24gIT0gbnVsbCkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYWN0aW9uLmFjdGlvbikpIHtcbiAgICAgICAgcmVmID0gYWN0aW9uLmFjdGlvbjtcbiAgICAgICAgZm9yIChqID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgICAgaXRlbSA9IHJlZltqXTtcbiAgICAgICAgICBQdWJTdWIucHVibGlzaChpdGVtLmNtZCwgaXRlbS5kYXRhKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgUHViU3ViLnB1Ymxpc2goYWN0aW9uLmFjdGlvbi5jbWQsIGFjdGlvbi5hY3Rpb24uZGF0YSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnNheShhY3Rpb24udGV4dCwgYWN0aW9uLmF1ZGlvLCBhY3Rpb24ubmV4dCk7XG4gIH07XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnJldHVyblRvU3RhdGlvbigpO1xuICAgIHJldHVybiBQdWJTdWIucHVibGlzaCgnY3RhbmxlZS5jb21wbGV0ZScpO1xuICB9O1xuXG4gIEN0YW5sZWUucHJvdG90eXBlLnJldHVyblRvU3RhdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaGlkZVRleHQoKTtcbiAgICB0aGlzLmdvdG8oKTtcbiAgICByZXR1cm4gdGhpcy5zZXRGaWx0ZXIoJ2dsb3cnKTtcbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5zaG93VGV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRzcGVlY2hCb3guY3NzKHtcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBcInBvaW50ZXItZXZlbnRzXCI6IFwiYWxsXCJcbiAgICB9KTtcbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5oaWRlVGV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRzcGVlY2hCb3guY3NzKHtcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICBcInBvaW50ZXItZXZlbnRzXCI6IFwibm9uZVwiXG4gICAgfSk7XG4gIH07XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUuc2hvd05leHQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kbmV4dEJ0bi5jc3Moe1xuICAgICAgb3BhY2l0eTogMSxcbiAgICAgICdwb2ludGVyLWV2ZW50cyc6ICdhbGwnXG4gICAgfSk7XG4gIH07XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUuaGlkZU5leHQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kbmV4dEJ0bi5jc3Moe1xuICAgICAgb3BhY2l0eTogMCxcbiAgICAgICdwb2ludGVyLWV2ZW50cyc6ICdub25lJ1xuICAgIH0pO1xuICB9O1xuXG4gIEN0YW5sZWUucHJvdG90eXBlLnNldEZpbHRlciA9IGZ1bmN0aW9uKGtpbmQpIHtcbiAgICBjb25zb2xlLmxvZyhcInVybCgjXCIgKyBraW5kICsgXCIpXCIpO1xuICAgIHJldHVybiAkKCcjY3RhbmxlZScpLmNzcyh7XG4gICAgICBmaWx0ZXI6IFwidXJsKCcjXCIgKyBraW5kICsgXCInKVwiXG4gICAgfSk7XG4gIH07XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUuZ2V0SW5kZXhPZkFjdGlvbiA9IGZ1bmN0aW9uKGFjdGlvbikge1xuICAgIHZhciBkYXRhLCBpLCBqLCBsZW4sIHJlZjtcbiAgICBpZiAodGhpcy50aW1lbGluZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgcmVmID0gdGhpcy50aW1lbGluZTtcbiAgICBmb3IgKGkgPSBqID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaiA8IGxlbjsgaSA9ICsraikge1xuICAgICAgZGF0YSA9IHJlZltpXTtcbiAgICAgIGlmIChkYXRhLmFjdGlvbiA9PT0gYWN0aW9uKSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5vdmVybGF5RGVmYXVsdHMgPSBmdW5jdGlvbihhY3Rpb25JZCkge1xuICAgIHZhciBhY3Rpb25zLCBrZXksIHJlZiwgdmFsO1xuICAgIGlmICh0aGlzLmRhdGEuZGVmYXVsdHMgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0YS5hY3Rpb25zW2FjdGlvbklkXTtcbiAgICB9XG4gICAgYWN0aW9ucyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhLmRlZmF1bHRzKSk7XG4gICAgcmVmID0gdGhpcy5kYXRhLmFjdGlvbnNbYWN0aW9uSWRdO1xuICAgIGZvciAoa2V5IGluIHJlZikge1xuICAgICAgdmFsID0gcmVmW2tleV07XG4gICAgICBhY3Rpb25zW2tleV0gPSB2YWw7XG4gICAgfVxuICAgIHJldHVybiBhY3Rpb25zO1xuICB9O1xuXG4gIHJldHVybiBDdGFubGVlO1xuXG59KSgpO1xuIiwidmFyIEN0YW5sZWUsIFNlbGVjdGlvbkRpYWxvZ3VlLCBTbGlkZVVYO1xuXG5DdGFubGVlID0gcmVxdWlyZSgnc2xpZGUtdXgvY3RhbmxlZS9DdGFubGVlJyk7XG5cblNlbGVjdGlvbkRpYWxvZ3VlID0gcmVxdWlyZSgnc2xpZGUtdXgvY29tcG9uZW50cy9zZWxlY3Rpb24tZGlhbG9ndWUnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTbGlkZVVYID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBTbGlkZVVYKCRlbCkge1xuICAgIHRoaXMuJGVsID0gJGVsO1xuICAgIHRoaXMuY3RhbmxlZSA9IG5ldyBDdGFubGVlKHRoaXMuJGVsKTtcbiAgfVxuXG4gIFNsaWRlVVgucHJvdG90eXBlLnBvcHVsYXRlID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciBjb21wb25lbnQsIGksIGxlbiwgcmVmLCByZXN1bHRzO1xuICAgIGlmICgoZGF0YSAhPSBudWxsID8gZGF0YS5jb21wb25lbnRzIDogdm9pZCAwKSA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJlZiA9IGRhdGEuY29tcG9uZW50cztcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjb21wb25lbnQgPSByZWZbaV07XG4gICAgICByZXN1bHRzLnB1c2godGhpcy5hZGRDb21wb25lbnQoY29tcG9uZW50KSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIFNsaWRlVVgucHJvdG90eXBlLmFkZENvbXBvbmVudCA9IGZ1bmN0aW9uKGNvbXBvbmVudERhdGEpIHtcbiAgICB2YXIgY29tcG9uZW50O1xuICAgIHN3aXRjaCAoY29tcG9uZW50RGF0YS5raW5kKSB7XG4gICAgICBjYXNlIFwic2VsZWN0aW9uLWRpYWxvZ3VlXCI6XG4gICAgICAgIHJldHVybiBjb21wb25lbnQgPSBuZXcgU2VsZWN0aW9uRGlhbG9ndWUodGhpcy4kZWwsIGNvbXBvbmVudERhdGEuY29uZmlnKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFNsaWRlVVg7XG5cbn0pKCk7XG4iXX0=

var aristotle;

aristotle = new Aristotle($(".holder"), "/episodes/episode1");
