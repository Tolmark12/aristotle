jadeTemplate = {};
jadeTemplate['aristotle'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"aristotle\"><div class=\"chrome\"></div><div class=\"movie\"><div class=\"wrapper\"></div><div class=\"dynamics\"></div></div><div class=\"slide-ux\"></div><div style=\"opacity:0\" class=\"svg-filters\"><svg class=\"defs\"><defs><filter id=\"glow\"><fegaussianblur in=\"SourceGraphic\" stddeviation=\"1.5\"></fegaussianblur><feComponentTransfer><feFuncA type=\"linear\" slope=\"0.8\"> </feFuncA></feComponentTransfer><femerge><femergenode></femergenode><femergenode in=\"SourceGraphic\"></femergenode></femerge></filter><filter id=\"highlightBlue\"><feColorMatrix type=\"matrix\" values=\"0   0 0 0 0                                               0.8 0 0 0 0                                               0.6 0 0 0 0                                               0   0 0 1 0\"></feColorMatrix><feComponentTransfer><feFuncA type=\"linear\" slope=\"1\"> </feFuncA></feComponentTransfer><fegaussianblur stddeviation=\"0.3\" result=\"coloredBlur\"></fegaussianblur><femerge><femergenode in=\"SourceGraphic\"></femergenode><feMergeNode in=\"coloredBlur\"></feMergeNode></femerge></filter><filter id=\"highlightYellow\"><feColorMatrix type=\"matrix\" values=\"0.95 0 0 0 0                                               0.8  0 0 0 0                                               0    0 0 0 0                                               0    0 0 1 0\"></feColorMatrix><feComponentTransfer><feFuncA type=\"linear\" slope=\"1\"> </feFuncA></feComponentTransfer><fegaussianblur stddeviation=\"0.3\" result=\"coloredBlur\"></fegaussianblur><femerge><femergenode in=\"SourceGraphic\"></femergenode><feMergeNode in=\"coloredBlur\"></feMergeNode></femerge></filter><filter id=\"highlightOrange\"><feColorMatrix type=\"matrix\" values=\"1   0 0 0 0                                               0.3 0 0 0 0                                               0   0 0 0 0                                               0   0 0 1 0\"></feColorMatrix><feComponentTransfer><feFuncA type=\"linear\" slope=\"1\"> </feFuncA></feComponentTransfer><fegaussianblur stddeviation=\"0.3\" result=\"coloredBlur\"></fegaussianblur><femerge><femergenode in=\"SourceGraphic\"></femergenode><feMergeNode in=\"coloredBlur\"></feMergeNode></femerge></filter><filter id=\"blueBlur\"><feColorMatrix type=\"matrix\" values=\"0.08 0 0 0 0                                               0.17 0 0 0 0                                               0.37 0 0 0 0                                               0    0 0 1 0\"></feColorMatrix><feComponentTransfer><feFuncA type=\"linear\" slope=\"1\"> </feFuncA></feComponentTransfer><fegaussianblur stddeviation=\"0\" result=\"coloredBlur\"></fegaussianblur><femerge><femergenode in=\"SourceGraphic\"></femergenode><feMergeNode in=\"coloredBlur\"></feMergeNode></femerge></filter><filter id=\"black-glow\"><feColorMatrix type=\"matrix\" values=\"0 0 0 0 0                                              0.3 0 0 0 0                                              0.3 0 0 0 0                                              0 0 0 0.8 0\"></feColorMatrix><feGaussianBlur stdDeviation=\"2.5\" result=\"coloredBlurs\"></feGaussianBlur><feMerge><feMergeNode in=\"coloredBlurs\"></feMergeNode><feMergeNode in=\"SourceGraphic\"></feMergeNode></feMerge></filter><filter id=\"dropshadow\" height=\"130%\"><fegaussianblur in=\"SourceAlpha\" stddeviation=\"3\"></fegaussianblur><feoffset dx=\"2\" dy=\"2\" result=\"offsetblur\"></feoffset><femerge><femergenode></femergenode><femergenode in=\"SourceGraphic\"></femergenode></femerge></filter></defs></svg></div></div>");;return buf.join("");
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

jadeTemplate['misc/generic-ui'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"generic-ui\"><div class=\"continue-strip\"><div class=\"continue-btn\"><img data-src=\"btn-continue\" class=\"shadow-icon\"/></div></div></div>");;return buf.join("");
};

jadeTemplate['misc/logger'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"logger\"><div class=\"error\"></div><div class=\"message\"></div></div>");;return buf.join("");
};

jadeTemplate['movie/label'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (id, text) {
buf.push("<div" + (jade.attr("id", "" + (id) + "", true, false)) + " class=\"label-wrapper\"><div class=\"label floating\">" + (jade.escape(null == (jade_interp = text) ? "" : jade_interp)) + "</div></div>");}.call(this,"id" in locals_for_with?locals_for_with.id:typeof id!=="undefined"?id:undefined,"text" in locals_for_with?locals_for_with.text:typeof text!=="undefined"?text:undefined));;return buf.join("");
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

jadeTemplate['slide-ux/components/defender-card'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (name, quote, personal1, personal2, duties, evidences) {
buf.push("<div class=\"defender-wrap\"><div class=\"defender-card\"><div class=\"name\">" + (jade.escape(null == (jade_interp = name) ? "" : jade_interp)) + "</div><div class=\"quote\">" + (jade.escape(null == (jade_interp = quote) ? "" : jade_interp)) + "</div><div class=\"personal1\">" + (jade.escape((jade_interp = personal1) == null ? '' : jade_interp)) + ":</div><div class=\"personal2\">" + (jade.escape(null == (jade_interp = personal2) ? "" : jade_interp)) + "</div><div class=\"info\"><div class=\"duties\">");
// iterate duties
;(function(){
  var $$obj = duties;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var duty = $$obj[$index];

buf.push("<div class=\"duty\">" + (jade.escape(null == (jade_interp = duty) ? "" : jade_interp)) + "</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var duty = $$obj[$index];

buf.push("<div class=\"duty\">" + (jade.escape(null == (jade_interp = duty) ? "" : jade_interp)) + "</div>");
    }

  }
}).call(this);

buf.push("</div><div class=\"evidences\">");
// iterate evidences
;(function(){
  var $$obj = evidences;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var evidence = $$obj[$index];

buf.push("<div class=\"evidence\">" + (jade.escape(null == (jade_interp = evidence) ? "" : jade_interp)) + "</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var evidence = $$obj[$index];

buf.push("<div class=\"evidence\">" + (jade.escape(null == (jade_interp = evidence) ? "" : jade_interp)) + "</div>");
    }

  }
}).call(this);

buf.push("</div></div><div class=\"got-it-btn\"><img data-src=\"btn-got-it\" class=\"shadow-icon\"/></div></div></div>");}.call(this,"name" in locals_for_with?locals_for_with.name:typeof name!=="undefined"?name:undefined,"quote" in locals_for_with?locals_for_with.quote:typeof quote!=="undefined"?quote:undefined,"personal1" in locals_for_with?locals_for_with.personal1:typeof personal1!=="undefined"?personal1:undefined,"personal2" in locals_for_with?locals_for_with.personal2:typeof personal2!=="undefined"?personal2:undefined,"duties" in locals_for_with?locals_for_with.duties:typeof duties!=="undefined"?duties:undefined,"evidences" in locals_for_with?locals_for_with.evidences:typeof evidences!=="undefined"?evidences:undefined));;return buf.join("");
};

jadeTemplate['slide-ux/components/defender-cards'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"defender-cards\"></div>");;return buf.join("");
};

jadeTemplate['slide-ux/components/ghost-item'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (id, width, height, left, top) {
buf.push("<div" + (jade.attr("id", "" + (id) + "", true, false)) + (jade.attr("style", "width:" + (width) + "px; height:" + (height) + "px; left:" + (left) + "px; top:" + (top) + "px;", true, false)) + " class=\"ghost-item\"></div>");}.call(this,"id" in locals_for_with?locals_for_with.id:typeof id!=="undefined"?id:undefined,"width" in locals_for_with?locals_for_with.width:typeof width!=="undefined"?width:undefined,"height" in locals_for_with?locals_for_with.height:typeof height!=="undefined"?height:undefined,"left" in locals_for_with?locals_for_with.left:typeof left!=="undefined"?left:undefined,"top" in locals_for_with?locals_for_with.top:typeof top!=="undefined"?top:undefined));;return buf.join("");
};

jadeTemplate['slide-ux/components/ghost-ux'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"ghost-ux\"></div>");;return buf.join("");
};

jadeTemplate['slide-ux/ctanlee/ctanlee'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"ctanlee\"><div class=\"face\"><img data-src=\"ctanlee\" class=\"shadow-icon\"/></div><div class=\"speech-box\"> <div class=\"text\"> <span class=\"content\"> </span><span class=\"next\"></span></div></div></div>");;return buf.join("");
};

jadeTemplate['slide-ux/components/cards/equipment'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (name, description, network, type) {
buf.push("<div class=\"card-wrap\"><div class=\"card\"><div class=\"name\">" + (jade.escape(null == (jade_interp = name) ? "" : jade_interp)) + "</div><div class=\"description\">" + (jade.escape(null == (jade_interp = description) ? "" : jade_interp)) + "</div><div class=\"info\"><div class=\"network\">" + (jade.escape(null == (jade_interp = network) ? "" : jade_interp)) + "</div><div class=\"type\">" + (jade.escape(null == (jade_interp = type) ? "" : jade_interp)) + "</div></div><div class=\"got-it-btn\"><img data-src=\"btn-got-it\" class=\"shadow-icon\"/></div></div></div>");}.call(this,"name" in locals_for_with?locals_for_with.name:typeof name!=="undefined"?name:undefined,"description" in locals_for_with?locals_for_with.description:typeof description!=="undefined"?description:undefined,"network" in locals_for_with?locals_for_with.network:typeof network!=="undefined"?network:undefined,"type" in locals_for_with?locals_for_with.type:typeof type!=="undefined"?type:undefined));;return buf.join("");
};

jadeTemplate['slide-ux/components/dialogue/dialogue-buttons'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (title, subTitle, items) {
buf.push("<div class=\"right-section\"><h1>" + (jade.escape(null == (jade_interp = title) ? "" : jade_interp)) + "</h1><p>" + (jade.escape(null == (jade_interp = subTitle) ? "" : jade_interp)) + "</p><div class=\"buttons\">");
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

buf.push("</div></div>");}.call(this,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined,"subTitle" in locals_for_with?locals_for_with.subTitle:typeof subTitle!=="undefined"?subTitle:undefined,"items" in locals_for_with?locals_for_with.items:typeof items!=="undefined"?items:undefined));;return buf.join("");
};

jadeTemplate['slide-ux/components/dialogue/dialogue-details'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (intro, items, btnIcon, btnTxt) {
buf.push("<div class=\"left-section\"><p class=\"intro\">" + (jade.escape(null == (jade_interp = intro) ? "" : jade_interp)) + "</p><div class=\"item-info\"><div class=\"mini-icon\">");
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

buf.push("</div><div class=\"blurb\"></div><div class=\"callout\"><div class=\"header\"><div class=\"line\"></div><h1>Buffs</h1><div class=\"line\"></div></div><p class=\"details\"></p></div><div class=\"action fist\"><div id=\"action-btn\" class=\"btn\"><img" + (jade.attr("data-src", "" + (btnIcon) + "", true, false)) + " class=\"shadow-icon\"/><div class=\"txt\">" + (jade.escape(null == (jade_interp = btnTxt) ? "" : jade_interp)) + "</div></div></div></div></div>");}.call(this,"intro" in locals_for_with?locals_for_with.intro:typeof intro!=="undefined"?intro:undefined,"items" in locals_for_with?locals_for_with.items:typeof items!=="undefined"?items:undefined,"btnIcon" in locals_for_with?locals_for_with.btnIcon:typeof btnIcon!=="undefined"?btnIcon:undefined,"btnTxt" in locals_for_with?locals_for_with.btnTxt:typeof btnTxt!=="undefined"?btnTxt:undefined));;return buf.join("");
};

jadeTemplate['slide-ux/components/dialogue/dialogue'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (title, body, btn) {
buf.push("<div class=\"dialogue-wrap\"><div class=\"dialogue\"><h1>" + (jade.escape(null == (jade_interp = title) ? "" : jade_interp)) + "</h1><div class=\"line\"></div><p>" + (null == (jade_interp = body) ? "" : jade_interp) + "</p><div class=\"btn lightning\"><div class=\"txt\">" + (jade.escape(null == (jade_interp = btn.text) ? "" : jade_interp)) + "</div><img data-src=\"btn-lightning\" class=\"shadow-icon\"/></div></div></div>");}.call(this,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined,"body" in locals_for_with?locals_for_with.body:typeof body!=="undefined"?body:undefined,"btn" in locals_for_with?locals_for_with.btn:typeof btn!=="undefined"?btn:undefined));;return buf.join("");
};

jadeTemplate['slide-ux/components/dialogue/selection-dialogue'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"selection-dialogue\"></div>");;return buf.join("");
};

jadeTemplate['slide-ux/components/quiz/question'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (index, question, answers) {
buf.push("<div class=\"question\"><div class=\"question-index\">Question " + (jade.escape((jade_interp = index+1) == null ? '' : jade_interp)) + ":</div><div class=\"line\"></div><div class=\"question-text\">" + (jade.escape(null == (jade_interp = question) ? "" : jade_interp)) + "</div><div class=\"answers\">");
// iterate answers
;(function(){
  var $$obj = answers;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var answer = $$obj[$index];

buf.push("<div class=\"answer-wrapper\"><div class=\"flip-container\"><div class=\"flipper\"><div class=\"card answer front\"><div class=\"txt\">" + (jade.escape(null == (jade_interp = answer.a) ? "" : jade_interp)) + "</div><img data-src=\"quiz-answer-bg\" class=\"shadow-icon\"/></div><div" + (jade.cls(['card','response','back',answer.c ? "right" : "wrong"], [null,null,null,true])) + "><div class=\"txt\">");
if ( answer.c)
{
buf.push("<div class=\"status\">You Got It!</div>");
}
else
{
buf.push("<div class=\"status\">Incorrect</div>");
}
buf.push((jade.escape(null == (jade_interp = answer.r) ? "" : jade_interp)) + "</div><img data-src=\"quiz-answer-bg\" class=\"shadow-icon\"/></div></div></div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var answer = $$obj[$index];

buf.push("<div class=\"answer-wrapper\"><div class=\"flip-container\"><div class=\"flipper\"><div class=\"card answer front\"><div class=\"txt\">" + (jade.escape(null == (jade_interp = answer.a) ? "" : jade_interp)) + "</div><img data-src=\"quiz-answer-bg\" class=\"shadow-icon\"/></div><div" + (jade.cls(['card','response','back',answer.c ? "right" : "wrong"], [null,null,null,true])) + "><div class=\"txt\">");
if ( answer.c)
{
buf.push("<div class=\"status\">You Got It!</div>");
}
else
{
buf.push("<div class=\"status\">Incorrect</div>");
}
buf.push((jade.escape(null == (jade_interp = answer.r) ? "" : jade_interp)) + "</div><img data-src=\"quiz-answer-bg\" class=\"shadow-icon\"/></div></div></div></div>");
    }

  }
}).call(this);

buf.push("</div></div>");}.call(this,"index" in locals_for_with?locals_for_with.index:typeof index!=="undefined"?index:undefined,"question" in locals_for_with?locals_for_with.question:typeof question!=="undefined"?question:undefined,"answers" in locals_for_with?locals_for_with.answers:typeof answers!=="undefined"?answers:undefined));;return buf.join("");
};

jadeTemplate['slide-ux/components/quiz/quiz'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"quiz\"><div class=\"header\"><img data-src=\"quiz-header\" class=\"shadow-icon\"/></div><div class=\"questions\"><div class=\"next-btn hidden\"><img data-src=\"next-question\" class=\"shadow-icon\"/></div></div></div>");;return buf.join("");
};

var pxSymbolString = pxSymbolString || ''; pxSymbolString+='<symbol  id="New_Symbol" viewBox="-10.3 -10.3 20.6 20.6">	<polygon class="st30" points="9.8,-9.8 -9.8,-9.8 -9.8,9.8 9.8,9.8 	"/></symbol>';
var pxSvgIconString = pxSvgIconString || ''; pxSvgIconString+='<g id="first" class="aristotle-svg-svg ">			<use xlink:href="#New_Symbol"  width="20.6" height="20.6" x="-10.3" y="-10.3" transform="matrix(0.7046 0 0 -0.7046 11.2573 11.2573)" style="overflow:visible;"/></g><g id="ep4-badge" class="aristotle-svg-svg ">	<g  class="white " >		<path id="XMLID_93_" class="st31" d="M15.599,22.199h3.2c3.5,0,3.2-4.198,3.2-4.198H10.898v7.1l7.2,2"/><polyline id="XMLID_92_" class="st31" points="16.199,22.199 25.599,22.199 25.599,13.5 10.8,13.5 10.8,19.4 		"/><line id="XMLID_91_" class="st31" x1="21.899" y1="22.199" x2="21.899" y2="13.5"/><line id="XMLID_90_" class="st31" x1="23.599" y1="27" x2="23.599" y2="22.4"/><line id="XMLID_89_" class="st31" x1="18.199" y1="17.6" x2="18.199" y2="13.5"/><line id="XMLID_88_" class="st31" x1="14.5" y1="17.6" x2="14.5" y2="13.5"/></g>	<g id="XMLID_94_" class="aristotle-svg-svg ">		<path class="st13" d="M18.199,6.4l12,6.299V26.4l-12,6.299l-12-6.299V12.699L18.199,6.4 M18.199,4L4,11.399v16.4l14.199,7.398			l14.2-7.398V11.4L18.199,4L18.199,4z"/></g></g><g id="ep3-badge" class="aristotle-svg-svg ">	<g  class="white " >		<polyline id="XMLID_74_" class="st7" points="8.5,14.4 18.2,9.3 27.901,14.4 27.901,19.3 18.2,24.4 		"/><polyline id="XMLID_73_" class="st7" points="27.901,19 27.901,23.9 18.2,29 		"/><line id="XMLID_72_" class="st31" x1="27.901" y1="24.3" x2="27.901" y2="28.699"/><line id="XMLID_71_" class="st7" x1="27.401" y1="14.9" x2="18.2" y2="19.699"/></g>	<g>		<g id="XMLID_69_" class="aristotle-svg-svg ">			<g>				<path class="st13" d="M6.2,14.9l9.9,5.199v11.5L6.2,26.4V14.9 M4.1,11.4V27.8l14.2,7.398l0,0V18.8L4.1,11.4L4.1,11.4L4.1,11.4z"					/></g>		</g>		<path id="XMLID_68_" class="st13" d="M25.901,18.3c-0.1,0.398-0.4,0.7-0.8,0.7c-0.4,0-0.6-0.302-0.5-0.7			c0.1-0.399,0.4-0.7,0.8-0.7S25.901,17.9,25.901,18.3z"/><path id="XMLID_67_" class="st13" d="M25.901,22.9c-0.1,0.399-0.4,0.699-0.8,0.699c-0.4,0-0.6-0.3-0.5-0.699			c0.1-0.399,0.4-0.701,0.8-0.701S25.901,22.5,25.901,22.9z"/><path id="XMLID_66_" class="st13" d="M25.901,27.6c-0.1,0.4-0.4,0.7-0.8,0.7c-0.4,0-0.6-0.3-0.5-0.7c0.1-0.4,0.4-0.699,0.8-0.699			S25.901,27.199,25.901,27.6z"/><g id="XMLID_59_" class="aristotle-svg-svg ">			<path class="st13" d="M18.2,6.4l12,6.299V26.4l-12,6.299L6.2,26.4V12.699L18.2,6.4 M18.2,4L4,11.399v16.4l14.2,7.398L32.4,27.8				V11.4L18.2,4L18.2,4z"/></g>	</g></g><g id="ep2-badge" class="aristotle-svg-svg ">	<g  class="white " >		<line id="XMLID_333_" class="st31" x1="26.6" y1="14.9" x2="19.6" y2="19"/><line id="XMLID_332_" class="st31" x1="18.2" y1="29.199" x2="18.2" y2="21.1"/><line id="XMLID_330_" class="st31" x1="16.7" y1="19" x2="9.7" y2="14.9"/><polyline id="XMLID_329_" class="st31" points="24.7,26.3 18.2,29.699 11.6,26.3 		"/><polyline id="XMLID_328_" class="st31" points="20.7,11 27.2,14.4 27.2,21.9 		"/><polyline id="XMLID_327_" class="st31" points="9,21.9 9,14.4 15.5,11 		"/></g>	<g id="XMLID_335_" class="aristotle-svg-svg ">		<path class="st13" d="M18.2,6.4l12,6.299V26.4l-12,6.299L6.2,26.4V12.699L18.2,6.4 M18.2,4L4,11.399v16.4l14.2,7.398L32.4,27.8			V11.4L18.2,4L18.2,4z"/></g></g><g id="ep1-badge" class="aristotle-svg-svg ">	<g  class="white" >		<polyline id="XMLID_108_" class="st31" points="11.1,15.6 15.1,19.5 11.1,23.6 		"/><polyline id="XMLID_107_" class="st31" points="25.3,23.6 21.2,19.5 25.3,15.6 		"/><polyline id="XMLID_105_" class="st31" points="22.2,12.5 18.2,16.5 14.2,12.5 		"/><polyline id="XMLID_104_" class="st31" points="14.2,26.6 18.2,22.699 22.2,26.6 		"/><line id="XMLID_102_" class="st31" x1="18.2" y1="15.3" x2="18.2" y2="6.1"/><line id="XMLID_101_" class="st31" x1="18.2" y1="33" x2="18.2" y2="23.8"/><line id="XMLID_100_" class="st31" x1="22.401" y1="19.5" x2="31.7" y2="19.5"/><line id="XMLID_98_" class="st31" x1="5.501" y1="19.5" x2="14.7" y2="19.5"/></g>	<g id="XMLID_60_" class="aristotle-svg-svg ">		<path class="st13" d="M18.2,6.4l12,6.299V26.4l-12,6.299L6.2,26.4V12.699L18.2,6.4 M18.2,4L4,11.399v16.4l14.2,7.398L32.4,27.8			V11.4L18.2,4L18.2,4z"/></g></g><g id="rank-badge-cyber-cadet" class="aristotle-svg-svg ">	<polygon class="st14" points="30.5,4 31.3,5.7 33,6 31.8,7.2 32.1,9 30.5,8.2 29,9 29.3,7.2 28.1,6 29.8,5.7 	"/><polygon class="st14" points="6.5,4 7.2,5.7 8.9,6 7.7,7.2 8,9 6.5,8.2 5,9 5.3,7.2 4,6 5.8,5.7 	"/><polygon class="st13" points="15.5,33.3 13.2,32.101 13,32.2 13,32 7.9,29.3 7.9,17 16.1,12.7 16.6,10.101 5.8,15.7 5.8,30.601 		15,35.399 	"/><polygon class="st13" points="20.5,10.101 20.9,12.7 29.1,17 29.1,29.3 22.1,33 21.3,35.899 31.2,30.601 31.2,15.7 	"/><g>		<polygon class="st14" points="19.2,33.3 16.4,35.3 18.5,26 15,28.8 17.1,16.101 20.6,16.101 19.2,21.7 22,19.601 19.6,29.601 			22.2,27.601 17.7,43.101 		"/><rect x="13.5" y="15.399" class="st14" width="9.899" height="1.4"/><polygon class="st14" points="18.5,6.899 17.1,15.399 19.9,15.399 		"/><g id="XMLID_45_" class="aristotle-svg-svg ">			<g id="XMLID_157_" class="aristotle-svg-svg ">				<g id="XMLID_185_" class="aristotle-svg-svg ">					<g id="XMLID_229_" class="aristotle-svg-svg ">						<polygon class="st14" points="18.5,5.5 17.1,6.3 17.1,8.2 18.5,9 19.9,8.2 19.9,6.3 						"/></g>				</g>			</g>		</g>	</g></g><g id="rank-badge-technical-cadet" class="aristotle-svg-svg ">	<polygon class="st13" points="20.699,11.101 21,13.3 27.699,13.3 27.699,29 21,33.601 20.699,36.5 29.8,30.101 29.8,11.101 	"/><polygon class="st13" points="16,33.7 9.399,29.3 9.399,13.3 16,13.3 16.399,11.101 7.199,11.101 7.3,30.399 16.399,36.5 	"/><g>		<g>			<g>				<polygon class="st14" points="18.5,16.101 15.699,18.899 18.5,43 21.3,18.899 				"/></g>		</g>		<rect x="13.5" y="15.399" class="st14" width="9.899" height="1.4"/><polygon class="st14" points="18.5,6.899 17.1,15.399 19.899,15.399 		"/><g id="XMLID_166_" class="aristotle-svg-svg ">			<g id="XMLID_168_" class="aristotle-svg-svg ">				<g id="XMLID_169_" class="aristotle-svg-svg ">					<g id="XMLID_170_" class="aristotle-svg-svg ">						<polygon class="st14" points="18.5,5.5 17.1,6.3 17.1,8.2 18.5,9 19.899,8.2 19.899,6.3 						"/></g>				</g>			</g>		</g>	</g>	<polygon class="st14" points="30.5,4 31.3,5.7 33,6 31.8,7.2 32.1,9 30.5,8.2 29,9 29.3,7.2 28,6 29.8,5.7 	"/><polygon class="st14" points="6.5,4 7.199,5.7 8.899,6 7.699,7.2 8,9 6.5,8.2 5,9 5.3,7.2 4,6 5.699,5.7 	"/></g><g id="rank-badge-cadet-first-class" class="aristotle-svg-svg ">	<g>		<path class="st13" d="M27.7,13.3V29l-9.2,6.398L9.4,29.2l-0.101-16h18.4 M29.8,11.101H7.2l0.1,19.299L18.601,38l11.3-7.899v-19			H29.8L29.8,11.101z"/></g>	<line class="st27" x1="7.8" y1="21" x2="29.2" y2="21"/><polygon class="st14" points="30.5,4 31.3,5.7 33,6 31.8,7.2 32.101,9 30.5,8.2 29,9 29.3,7.2 28,6 29.8,5.7 	"/><polygon class="st14" points="6.401,4 7.2,5.7 8.901,6 7.7,7.2 8,9 6.401,8.2 5,9 5.2,7.2 4,6 5.7,5.7 	"/></g><g id="rank-badge-cadet" class="aristotle-svg-svg ">	<g>		<path class="st13" d="M24.5,6.199v15.7l-9.199,6.399L6.2,22.101l-0.1-16h18.399 M26.7,4H4l0.101,19.299l11.3,7.602l11.3-7.899			L26.7,4L26.7,4z"/></g>	<line class="st27" x1="4.7" y1="13.899" x2="26.101" y2="13.899"/></g><g id="rank-badge-recruit" class="aristotle-svg-svg ">	<g>		<path class="st13" d="M24.601,6.199v15.7l-9.2,6.398l-9.1-6.198L6.2,6.1h18.4 M26.7,4H4l0.101,19.299l11.3,7.602l11.3-7.899			L26.7,4L26.7,4z"/></g></g><g id="chapter-progress-chapter" class="aristotle-svg-svg ">	<g id="XMLID_150_" class="aristotle-svg-svg ">		<path class="st22" d="M9.7,6.399l3.5,1.9v4.1l-3.5,1.9l-3.5-1.9V8.3L9.7,6.399 M9.7,4L4,7v6.7l5.7,3l5.7-3V7L9.7,4L9.7,4z"/></g></g><g id="chapter-progress-slide" class="aristotle-svg-svg ">	<rect x="4" y="4" class="st22" width="6.4" height="6.399"/></g><g id="chapter-progress-test" class="aristotle-svg-svg ">	<polygon class="st10" points="17.9,21.1 13.799,23.3 5.799,19.199 5.799,10.199 8.4,8.8 7,7.5 4,9.1 4,20.199 13.799,25.199 		19.599,22.199 	"/><polygon class="st10" points="13.799,4 9.199,6.3 11,7.5 13.799,6.1 21.699,10.199 21.699,19.199 20.4,19.8 21.799,21.1 		23.5,20.199 23.5,9.1 	"/><g>		<polygon class="st9" points="6.699,5.8 15.799,11.5 13,11.4 20.599,18 17.299,18 22.199,22.8 12.4,16.5 16.099,16.5 8,10.199 			10.9,10.1 		"/></g></g><g id="chapter-progress-duties" class="aristotle-svg-svg ">	<circle class="st22" cx="7.2" cy="7.2" r="3.2"/></g><g id="list-progress-base" class="aristotle-svg-svg ">	<g id="hex-outer_1_" class="aristotle-svg-svg ">		<g id="XMLID_1080_" class="aristotle-svg-svg ">			<path class="st9" d="M18.2,7.201l11.3,5.899V26l-11.3,5.9L6.9,26V13.101L18.2,7.201 M18.2,4L4,11.4v16.4L18.2,35.2l14.2-7.399				V11.4L18.2,4L18.2,4z"/></g>	</g>	<g id="hex-inner_1_" class="aristotle-svg-svg ">		<g id="XMLID_2384_" class="aristotle-svg-svg ">			<polygon class="st13" points="18.2,29.9 9.099,25 9.099,14.101 18.2,9.201 27.2,14.101 27.2,24.9 			"/></g>	</g></g><g id="list-progress-complete" class="aristotle-svg-svg ">	<g id="hex-inner" class="aristotle-svg-svg ">		<g>			<polygon class="st29" points="21.8,13.801 25.701,16.201 21.201,16.201 20.5,16.201 27.201,21.9 27.201,14.101 18.101,9.201 				16.101,10.201 			"/></g>		<g>			<polygon class="st29" points="15.5,23.5 11.9,21.101 16.101,21.101 17.8,21 9.101,14.301 9.101,25 18.101,29.9 22.201,27.701 							"/></g>	</g>	<g id="hex-outer" class="aristotle-svg-svg ">		<polygon class="st4" points="24,28.801 18.101,32 6.8,26 6.8,13.101 10.4,11.201 8.4,9.101 4,11.4 4,27.701 18.101,35.101 			26.8,30.601 		"/><polygon class="st4" points="18.101,4 11.5,7.4 14.4,9.201 18.101,7.201 29.5,13.101 29.5,26 27.701,26.9 29.9,29 32.3,27.701 			32.3,11.4 		"/></g>	<g id="lightning_1_" class="aristotle-svg-svg ">		<g id="lightning" class="aristotle-svg-svg ">			<polygon class="st13" points="7.701,6.5 21.201,14.9 17.101,14.9 28.3,24.5 23.4,24.5 30.5,31.5 16.201,22.301 21.601,22.301 				9.601,13.101 14,12.9 			"/></g>	</g></g><g id="ctanlee" class="aristotle-svg-svg ">	<circle class="st14" cx="21" cy="21" r="6.399"/><path class="st5" d="M25.5,37.399c7.2-2,12.5-8.5,12.5-16.398"/><path class="st5" d="M4,21c0,7.8,5.3,14.398,12.5,16.398"/><path class="st5" d="M32.8,8.8C29.7,5.899,25.6,4,21,4c-4.7,0-8.9,1.898-12,4.898"/></g><g id="action-btn-fist" class="aristotle-svg-svg ">	<polygon class="st14" points="35.7,86.894 4,70.293 4,33.793 35.7,17.194 67.4,33.793 67.4,70.293 	"/><polygon class="st9" points="35.7,84.495 6.2,68.995 6.2,34.995 35.7,19.594 65.2,34.995 65.2,68.995 	"/><path class="st20" d="M42.3,12.694c0,0,7.4,2,10.101,3.4c-3.399,6.5-11.5,2.399-11.5,2.399s-2.3,2.799-3,3.601		c11.101,5.198,26.2,0.698,26.2,0.698l-0.899,5.9l-5.601,13.5l-9.7,5L30.201,82.494L9.5,71.694l25.8-32.4l-2.699-19.1L42.3,12.694z"		/><path class="st23" d="M42.3,12.694c0,0,7.4,2,10.101,3.4c-3.399,6.5-11.5,2.399-11.5,2.399s-2.3,2.799-3,3.601		c11.101,5.198,26.2,0.698,26.2,0.698l-0.899,5.9l-5.601,13.5l-9.7,5L30.201,82.494L9.5,71.694l25.8-32.4l-2.699-19.1L42.3,12.694z"		/><path class="st20" d="M48,5.495l-2.101-1.101c-1.8-0.899-3.899-0.2-4.8,1.5l-7,13.398l8.5,4.4l7-13.4		C50.5,8.495,49.8,6.394,48,5.495"/><path class="st23" d="M48,5.495l-2.101-1.101c-1.8-0.899-3.899-0.2-4.8,1.5l-7,13.398l8.5,4.4l7-13.4		C50.5,8.495,49.8,6.394,48,5.495z"/><path class="st20" d="M54.5,6.894l2.601,1.7c1.3,0.8,1.699,2.5,0.8,3.8l-7.3,11.2c-3-0.9-4.399-2.101-6.301-4.302l6.301-11.398		C51.5,6.594,53.2,6.094,54.5,6.894"/><path class="st23" d="M54.5,6.894l2.601,1.7c1.3,0.8,1.699,2.5,0.8,3.8l-7.3,11.2c-3-0.9-4.399-2.101-6.301-4.302l6.301-11.398		C51.5,6.594,53.2,6.094,54.5,6.894z"/><path class="st20" d="M62.5,14.995l-1.899-1.301c-1.301-0.9-3-0.5-3.801,0.7l-6.1,9.2c1.3,2,3.1,3.6,6,4l6.399-8.9		C64,17.495,63.7,15.793,62.5,14.995"/><path class="st23" d="M62.5,14.995l-1.899-1.301c-1.301-0.9-3-0.5-3.801,0.7l-6.1,9.2c1.3,2,3.1,3.6,6,4l6.399-8.9		C64,17.495,63.7,15.793,62.5,14.995z"/><path class="st20" d="M67.101,24.194l-5.301,6.9c-2.3-0.7-3.899-1.9-5.1-3.4l5.3-7.3c0.899-1.3,2.8-1.5,4-0.5l0.7,0.601		C67.8,21.394,68,22.995,67.101,24.194"/><path class="st23" d="M67.101,24.194l-5.301,6.9c-2.3-0.7-3.899-1.9-5.1-3.4l5.3-7.3c0.899-1.3,2.8-1.5,4-0.5l0.7,0.601		C67.8,21.394,68,22.995,67.101,24.194z"/><path class="st20" d="M58,34.094c0.899-0.601,3.8-3,3.8-3c-2.1-0.4-3.8-1.601-5.1-3.4l-2.801,2.7c-1.101,1-0.899,2.7,0.301,3.5		l0.6,0.398C55.8,34.894,57.2,34.694,58,34.094"/><path class="st35" d="M58,34.094c0.899-0.601,3.8-3,3.8-3c-2.1-0.4-3.8-1.601-5.1-3.4l-2.801,2.7c-1.101,1-0.899,2.7,0.301,3.5		l0.6,0.398C55.8,34.894,57.2,34.694,58,34.094z"/><path class="st20" d="M50.2,30.995L49,30.095c-0.8-0.601-1-1.7-0.5-2.601l2.2-3.899c1.399,2.5,3.399,3.8,6,4l-3.4,3.198		C52.5,31.694,51.2,31.694,50.2,30.995"/><path class="st35" d="M50.2,30.995L49,30.095c-0.8-0.601-1-1.7-0.5-2.601l2.2-3.899c1.399,2.5,3.399,3.8,6,4l-3.4,3.198		C52.5,31.694,51.2,31.694,50.2,30.995z"/><path class="st20" d="M41.601,24.793l6,4.302l3.101-5.5c-3-0.7-4.5-1.802-6.301-4.302L41.601,24.793z"/><path class="st23" d="M41.601,24.793l6,4.302l3.101-5.5c-3-0.7-4.5-1.802-6.301-4.302L41.601,24.793z"/><path class="st20" d="M10,71.495l20.899-33.399l-2.199-19l10.8-10.2c0,0,10.101,5.3,12.8,6.7c-3.399,6.5-10.101,2.3-10.101,2.3		s-1.3,2.898-1.899,3.7c9,4.698,10.801,9,3.5,16.399"/><path class="st34" d="M10,71.495l20.899-33.399l-2.199-19l10.8-10.2c0,0,10.101,5.3,12.8,6.7c-3.399,6.5-10.101,2.3-10.101,2.3		s-1.3,2.898-1.899,3.7c9,4.698,10.801,9,3.5,16.399"/><path class="st14" d="M26,73.694c0.899-8.3,2.8-16.5,5.601-24.6c0.199,1.8,0.399,3.6,0.699,5.3c1.9-5.8,4.4-11.399,7.301-16.899		C39.3,39.595,39.201,41.595,39,43.595c2.3-3.5,4.7-6.802,7.399-10c1.301-1.601,1.7-1.2,0.601,0.5c-3.8,6.1-6.899,12.5-9.3,19		c-0.101-1.802-0.2-3.601-0.2-5.4c-2.2,5.2-4,10.5-5.3,15.9c-0.4-1.9-0.801-3.802-1.2-5.802C28.9,62.995,27.2,68.293,26,73.694"/></g><g id="mini-preview-test" class="aristotle-svg-svg ">	<rect x="7.101" y="7" class="st14" width="47.1" height="99.602"/><path class="st19" d="M47.9,13.301v87.1H13.3v-87.1H47.9 M54.101,7H7v99.601h47.101V7L54.101,7z"/><rect x="11.501" y="82.301" class="st22" width="38.199" height="17.5"/><path class="st19" d="M47.9,84.9v12.4H13.4V84.9H47.9 M51.001,81.801H10.2V100.5h40.801V81.801L51.001,81.801z"/><ellipse class="st0" cx="30.601" cy="64.601" rx="7.8" ry="7.8"/><path class="st19" d="M30.601,56.9c4.3,0,7.8,3.5,7.8,7.801c0,4.299-3.5,7.799-7.8,7.799C26.3,72.5,22.8,69,22.8,64.701		C22.801,60.301,26.301,56.9,30.601,56.9 M30.601,50.601c-7.801,0-14.101,6.3-14.101,14s6.3,14,14.101,14c7.8,0,14.1-6.3,14.1-14		S38.4,50.601,30.601,50.601L30.601,50.601z"/><path class="st11" d="M26.001,66.201c-0.899,0-1.601-0.701-1.601-1.601c0-3.399,2.8-6.102,6.2-6.102c0.899,0,1.6,0.701,1.6,1.602		c0,0.899-0.699,1.601-1.6,1.601c-1.7,0-3.101,1.399-3.101,3C27.501,65.5,26.801,66.201,26.001,66.201z"/><g>		<path class="st9" d="M54.101,7v99.601H7V7H54.101 M57.101,4h-3H7H4v3v99.601v3h3h47.101h3v-3V7V4L57.101,4z"/></g></g><g id="mini-generation" class="aristotle-svg-svg ">	<rect x="4" y="4" class="st16" width="179" height="132.8"/><rect x="41.601" y="53.1" class="st22" width="87.7" height="11.5"/><path class="st9" d="M127.9,63H43.2V54.6h84.7V63z M130.9,51.6h-3H43.2h-3v3v8.5v3h3h84.7h3v-3v-8.5V51.6z"/><rect x="36" y="59.8" class="st22" width="99" height="66.5"/><path class="st9" d="M133.5,124.8h-96V61.3h96V124.8z M136.5,58.3h-3h-96h-3v3v63.5v3h3h96h3v-3V61.3V58.3z"/><polygon class="st9" points="27.101,127.8 48.9,127.8 46.5,5.9 29.4,5.9 	"/><rect x="44.101" y="55.6" class="st22" width="82.7" height="6.5"/><path class="st19" d="M125.9,61H45.2V56.6h80.7V61z M127.9,54.6H43.2v8.5h84.7V54.6z"/><rect x="38.5" y="62.3" class="st22" width="94" height="61.5"/><path class="st19" d="M131.5,122.8h-92V63.3h92V122.8z M133.5,61.3h-96v63.5h96V61.3z"/><rect x="128.601" y="64.1" class="st14" width="7.101" height="1.398"/><rect x="128.601" y="64.1" class="st19" width="7.101" height="1.398"/><rect x="124.601" y="94.1" class="st14" width="7.101" height="1.3"/><rect x="124.601" y="94.1" class="st18" width="7.101" height="1.3"/><path class="st14" d="M36.101,64.8h5.7H36.101z"/><rect x="35.4" y="64.1" class="st19" width="7.1" height="1.398"/><rect x="39.4" y="94.1" class="st14" width="7.1" height="1.3"/><rect x="39.4" y="94.1" class="st18" width="7.1" height="1.3"/><rect x="37.601" y="62.8" class="st14" width="95.801" height="1.198"/><rect x="36.101" y="61.3" class="st19" width="98.801" height="4.198"/><rect x="83.301" y="71.201" class="st13" width="5.5" height="10.5"/><path class="st19" d="M87.9,80.701h-3.5v-8.5h3.5V80.701z M89.9,70.201h-2h-3.5h-2v2v8.5v2h2h3.5h2v-2v-8.5V70.201z"/><rect x="64.4" y="71.201" class="st13" width="5.5" height="10.5"/><path class="st19" d="M69,80.701h-3.5v-8.5H69V80.701z M71,70.201h-2h-3.5h-2v2v8.5v2h2H69h2v-2v-8.5V70.201z"/><rect x="73.9" y="71.201" class="st13" width="5.5" height="10.5"/><path class="st19" d="M78.4,80.701h-3.5v-8.5h3.5V80.701z M80.4,70.201h-2h-3.5h-2v2v8.5v2h2h3.5h2v-2v-8.5V70.201z"/><rect x="111.7" y="71.201" class="st13" width="5.5" height="10.5"/><path class="st19" d="M116.2,80.701h-3.5v-8.5h3.5V80.701z M118.2,70.201h-2h-3.5h-2v2v8.5v2h2h3.5h2v-2v-8.5V70.201z"/><rect x="121.101" y="71.201" class="st13" width="5.5" height="10.5"/><path class="st19" d="M125.601,80.701h-3.5v-8.5h3.5V80.701z M127.601,70.201h-2h-3.5h-2v2v8.5v2h2h3.5h2v-2v-8.5V70.201z"/><rect x="92.801" y="71.201" class="st13" width="5.5" height="10.5"/><path class="st19" d="M97.301,80.701h-3.5v-8.5h3.5V80.701z M99.301,70.201h-2h-3.5h-2v2v8.5v2h2h3.5h2v-2v-8.5V70.201z"/><rect x="102.2" y="71.201" class="st13" width="5.5" height="10.5"/><path class="st19" d="M106.801,80.701h-3.5v-8.5h3.5V80.701z M108.801,70.201h-2h-3.5h-2v2v8.5v2h2h3.5h2v-2v-8.5V70.201z"/><rect x="45.601" y="71.201" class="st13" width="5.5" height="10.5"/><path class="st19" d="M50.101,80.701h-3.5v-8.5h3.5V80.701z M52.101,70.201h-2h-3.5h-2v2v8.5v2h2h3.5h2v-2v-8.5V70.201z"/><rect x="55" y="71.201" class="st13" width="5.5" height="10.5"/><path class="st19" d="M59.5,80.701H56v-8.5h3.5V80.701z M61.5,70.201h-2H56h-2v2v8.5v2h2h3.5h2v-2v-8.5V70.201z"/><rect x="111.7" y="107.9" class="st13" width="5.5" height="10.5"/><path class="st19" d="M116.2,117.4h-3.5v-8.5h3.5V117.4z M118.2,106.9h-2h-3.5h-2v2v8.5v2h2h3.5h2v-2v-8.5V106.9z"/><rect x="121.101" y="107.9" class="st13" width="5.5" height="10.5"/><path class="st19" d="M125.601,117.4h-3.5v-8.5h3.5V117.4z M127.601,106.9h-2h-3.5h-2v2v8.5v2h2h3.5h2v-2v-8.5V106.9z"/><rect x="45.601" y="107.9" class="st13" width="5.5" height="10.5"/><path class="st19" d="M50.101,117.4h-3.5v-8.5h3.5V117.4z M52.101,106.9h-2h-3.5h-2v2v8.5v2h2h3.5h2v-2v-8.5V106.9z"/><rect x="55" y="107.9" class="st13" width="5.5" height="10.5"/><path class="st19" d="M59.5,117.4H56v-8.5h3.5V117.4z M61.5,106.9h-2H56h-2v2v8.5v2h2h3.5h2v-2v-8.5V106.9z"/><rect x="25.601" y="11.1" class="st9" width="24.7" height="4"/><path class="st9" d="M49.301,14H26.7V12.1h22.601V14z M51.4,10H49.3H26.699h-2.101v2.1v1.898V16.1h2.101h22.602h2.101V14V12.1		L51.4,10L51.4,10z"/><g>		<g>			<g>				<defs>					<path id="SVGID_1_" d="M138.601,97.201v19.101h15.101c0.101-2.2,1.899-3.9,4.101-3.9c2.199,0,4,1.7,4.101,3.9h14.8V97.201						H138.601z"/></defs>				<clipPath id="SVGID_2_">					<use xlink:href="#SVGID_1_"  style="overflow:visible;"/></clipPath>				<path class="st17" d="M174.801,124.8h-34.2V99.2h34.2V124.8z M176.801,97.201h-38.2v29.601h38.2V97.201z"/></g>		</g>		<g>			<g>				<defs>					<path id="SVGID_3_" d="M138.601,97.201v19.101h15.101c0.101-2.2,1.899-3.9,4.101-3.9c2.199,0,4,1.7,4.101,3.9h14.8V97.201						H138.601z"/></defs>				<clipPath id="SVGID_4_">					<use xlink:href="#SVGID_3_"  style="overflow:visible;"/></clipPath>				<circle class="st24" cx="157.801" cy="116.5" r="17.6"/></g>		</g>		<g>			<g>				<defs>					<path id="SVGID_5_" d="M138.601,97.201v19.101h15.101c0.101-2.2,1.899-3.9,4.101-3.9c2.199,0,4,1.7,4.101,3.9h14.8V97.201						H138.601z"/></defs>				<clipPath id="SVGID_6_">					<use xlink:href="#SVGID_5_"  style="overflow:visible;"/></clipPath>				<polyline class="st1" points="157.801,116.5 147.2,112.1 148.7,107.4 157.801,116.5 				"/></g>		</g>		<g>			<g>				<defs>					<path id="SVGID_7_" d="M138.601,97.201v19.101h15.101c0.101-2.2,1.899-3.9,4.101-3.9c2.199,0,4,1.7,4.101,3.9h14.8V97.201						H138.601z"/></defs>				<clipPath id="SVGID_8_">					<use xlink:href="#SVGID_7_"  style="overflow:visible;"/></clipPath>				<polyline class="st28" points="157.801,116.5 146.301,116.5 145.9,111.6 157.801,116.5 				"/></g>		</g>		<g>			<g>				<defs>					<path id="SVGID_9_" d="M138.601,97.201v19.101h15.101c0.101-2.2,1.899-3.9,4.101-3.9c2.199,0,4,1.7,4.101,3.9h14.8V97.201						H138.601z"/></defs>				<clipPath id="SVGID_10_">					<use xlink:href="#SVGID_9_"  style="overflow:visible;"/></clipPath>				<polyline class="st26" points="157.801,116.5 168.5,112.1 170.7,116.5 157.801,116.5 				"/></g>		</g>		<g>			<g>				<defs>					<path id="SVGID_11_" d="M138.601,97.201v19.101h15.101c0.101-2.2,1.899-3.9,4.101-3.9c2.199,0,4,1.7,4.101,3.9h14.8V97.201						H138.601z"/></defs>				<clipPath id="SVGID_12_">					<use xlink:href="#SVGID_11_"  style="overflow:visible;"/></clipPath>				<polyline class="st15" points="157.801,116.5 166,108.4 169.7,111.6 157.801,116.5 				"/></g>		</g>		<g>			<g>				<defs>					<path id="SVGID_13_" d="M138.601,97.201v19.101h15.101c0.101-2.2,1.899-3.9,4.101-3.9c2.199,0,4,1.7,4.101,3.9h14.8V97.201						H138.601z"/></defs>				<clipPath id="SVGID_14_">					<use xlink:href="#SVGID_13_"  style="overflow:visible;"/></clipPath>				<polyline class="st8" points="157.801,116.5 162.301,105.9 167,107.4 157.801,116.5 				"/></g>		</g>		<g>			<g>				<defs>					<path id="SVGID_15_" d="M138.601,97.201v19.101h15.101c0.101-2.2,1.899-3.9,4.101-3.9c2.199,0,4,1.7,4.101,3.9h14.8V97.201						H138.601z"/></defs>				<clipPath id="SVGID_16_">					<use xlink:href="#SVGID_15_"  style="overflow:visible;"/></clipPath>				<polyline class="st2" points="157.801,116.5 157.801,105 162.801,104.701 157.801,116.5 				"/></g>		</g>		<g>			<g>				<defs>					<path id="SVGID_17_" d="M138.601,97.201v19.101h15.101c0.101-2.2,1.899-3.9,4.101-3.9c2.199,0,4,1.7,4.101,3.9h14.8V97.201						H138.601z"/></defs>				<clipPath id="SVGID_18_">					<use xlink:href="#SVGID_17_"  style="overflow:visible;"/></clipPath>				<polyline class="st33" points="157.801,116.5 153.4,105.9 157.801,103.701 157.801,116.5 				"/></g>		</g>		<g>			<g>				<defs>					<path id="SVGID_19_" d="M138.601,97.201v19.101h15.101c0.101-2.2,1.899-3.9,4.101-3.9c2.199,0,4,1.7,4.101,3.9h14.8V97.201						H138.601z"/></defs>				<clipPath id="SVGID_20_">					<use xlink:href="#SVGID_19_"  style="overflow:visible;"/></clipPath>				<polyline class="st32" points="157.801,116.5 149.7,108.4 152.9,104.701 157.801,116.5 				"/></g>		</g>	</g>	<path class="st9" d="M177.2,125.8h-38.899V118H177.2V125.8z M179.2,116h-42.899V127.8H179.2V116z"/><path class="st25" d="M153.7,123.701h8.3V116.5c0-2.299-1.899-4.1-4.199-4.1c-2.301,0-4.101,1.9-4.101,4.1V123.701z"/><path class="st9" d="M162,125.4h-8.699v-1.3H162V125.4L162,125.4z M164,122.1h-12.699v5.3H164V122.1L164,122.1z"/><line class="st25" x1="161.9" y1="120.1" x2="153.5" y2="120.1"/></g><g id="mini-substation" class="aristotle-svg-svg ">	<rect x="4" y="4" class="st16" width="179" height="132.8"/><rect x="43.899" y="54.399" class="st22" width="102.601" height="71.9"/><path class="st9" d="M145,124.8H45.399v-68.9H145V124.8z M148,52.899h-3H45.399h-3v3v68.9v3h3H145h3v-3v-68.9V52.899z"/><rect x="40.1" y="53.399" class="st22" width="110.2" height="8.602"/><path class="st9" d="M148.8,60.5H41.6v-5.601h107.2V60.5z M151.8,51.899h-3H41.6h-3v3v5.602v3h3h107.2h3v-3v-5.602V51.899z"/><polyline class="st6" points="26.899,84.601 55.7,127.101 57.6,127.101 50.5,84.601 26.899,84.601 19.8,127.101 21.8,127.101 		50.5,84.601 	"/><polygon class="st6" points="26.899,84.601 50.5,84.601 48.2,69.3 29.2,69.3 	"/><line class="st6" x1="26.899" y1="84.601" x2="48.2" y2="69.3"/><line class="st6" x1="29.2" y1="69.3" x2="50.5" y2="84.601"/><polygon class="st6" points="30.7,55.5 46.7,55.5 48.2,69.3 29.2,69.3 	"/><line class="st6" x1="48.2" y1="69.3" x2="30.7" y2="55.5"/><line class="st6" x1="46.7" y1="55.5" x2="29.2" y2="69.3"/><polygon class="st6" points="30.7,55.5 46.7,55.5 45.7,42.8 31.7,42.8 	"/><line class="st6" x1="30.7" y1="55.5" x2="45.7" y2="42.8"/><line class="st6" x1="31.7" y1="42.8" x2="46.7" y2="55.5"/><polygon class="st6" points="7.5,42.8 69.899,42.8 45.7,30.5 32.2,30.5 	"/><polygon class="st6" points="32.2,30.5 45.7,30.5 45.7,42.8 31.7,42.8 	"/><polyline class="st6" points="45.7,30.5 31.7,42.8 45.7,42.8 32.2,30.5 	"/><polyline class="st6" points="51,33.101 45.7,42.8 31.7,42.8 26.899,33.101 	"/><line class="st6" x1="26.899" y1="42.601" x2="19.3" y2="37"/><line class="st6" x1="51" y1="42.601" x2="58.1" y2="37"/><line class="st6" x1="58.1" y1="37" x2="58.1" y2="42.8"/><line class="st6" x1="26.899" y1="33.101" x2="26.899" y2="42.601"/><line class="st6" x1="51" y1="42.601" x2="51" y2="33.101"/><polygon class="st6" points="32.2,30.5 45.7,30.5 44.2,22.399 33.2,22.399 	"/><polyline class="st6" points="33.2,22.399 45.7,30.5 32.2,30.5 44.2,22.399 	"/><polygon class="st6" points="34.7,12.5 42.7,12.5 44.2,22.399 33.2,22.399 	"/><polygon class="st6" points="34.7,12.601 42.7,12.601 58.7,22.399 18.8,22.399 	"/><polyline class="st6" points="42.7,12.601 33.2,22.399 44.2,22.399 34.7,12.601 	"/><polyline class="st6" points="48.5,16.8 44.2,22.399 33.2,22.399 28.899,16.8 	"/><line class="st6" x1="28.899" y1="16.8" x2="28.899" y2="22.2"/><line class="st6" x1="48.5" y1="22.2" x2="48.5" y2="16.8"/><line class="st6" x1="59.8" y1="26.399" x2="59.8" y2="22.899"/><line class="st6" x1="71.399" y1="46.7" x2="71.399" y2="43.2"/><line class="st6" x1="17.6" y1="26.399" x2="17.6" y2="22.899"/><rect x="46.399" y="56.899" class="st22" width="97.601" height="66.9"/><path class="st19" d="M143,122.8H47.399v-64.9H143V122.8z M145,55.899H45.399v68.9H145V55.899z"/><rect x="42.6" y="55.899" class="st22" width="105.2" height="3.602"/><path class="st19" d="M146.8,58.5H43.6v-1.601h103.2V58.5z M148.8,54.899H41.6v5.602h107.2V54.899z"/><rect x="40.8" y="59" class="st19" width="108.8" height="1.5"/><line class="st18" x1="143.3" y1="116.8" x2="47.1" y2="116.8"/><rect x="75.2" y="66.7" class="st13" width="5.8" height="11.198"/><path class="st19" d="M80,76.899h-3.8V67.7H80V76.899z M82,65.7h-2h-3.8h-2v2v9.198v2h2H80h2v-2V67.7V65.7z"/><rect x="85.3" y="66.7" class="st13" width="5.8" height="11.198"/><path class="st19" d="M90.1,76.899h-3.8V67.7h3.8V76.899z M92.1,65.7h-2h-3.8h-2v2v9.198v2h2h3.8h2v-2V67.7V65.7z"/><rect x="55" y="66.7" class="st13" width="5.801" height="11.198"/><path class="st19" d="M59.8,76.899h-3.801V67.7H59.8V76.899z M61.8,65.7h-2h-3.801h-2v2v9.198v2h2H59.8h2v-2V67.7V65.7z"/><rect x="65.1" y="66.7" class="st13" width="5.8" height="11.198"/><path class="st19" d="M69.899,76.899h-3.8V67.7h3.8V76.899z M71.899,65.7h-2h-3.8h-2v2v9.198v2h2h3.8h2v-2V67.7V65.7z"/><rect x="75.2" y="81.3" class="st13" width="5.8" height="11.2"/><path class="st19" d="M80,91.5h-3.8v-9.2H80V91.5z M82,80.3h-2h-3.8h-2v2v9.2v2h2H80h2v-2v-9.2V80.3z"/><rect x="55" y="81.3" class="st13" width="5.801" height="11.2"/><path class="st19" d="M59.8,91.5h-3.801v-9.2H59.8V91.5z M61.8,80.3h-2h-3.801h-2v2v9.2v2h2H59.8h2v-2v-9.2V80.3z"/><rect x="65.1" y="81.3" class="st13" width="5.8" height="11.2"/><path class="st19" d="M69.899,91.5h-3.8v-9.2h3.8V91.5z M71.899,80.3h-2h-3.8h-2v2v9.2v2h2h3.8h2v-2v-9.2V80.3z"/><rect x="161.399" y="107.101" class="st9" width="7" height="8.199"/><rect x="157.899" y="115.7" class="st9" width="14.801" height="1.6"/><path class="st9" d="M171.7,118.2v8.6l0,0l-10.899-8.6H171.7z M172.7,117.2h-14.801l13.5,10.6h1.4v-10.6H172.7z"/><path class="st9" d="M169.8,118.2l-10.9,8.6l0,0v-8.6H169.8z M172.7,117.2h-14.801v10.6h1.4L172.7,117.2z"/><path class="st9" d="M174.7,111.2c0,1.399-1.301,2.5-2,2.5c-0.7,0-1.2-1.101-1.2-2.5c0-1.4,0.5-2.5,1.2-2.5		C173.399,108.7,174.7,109.8,174.7,111.2"/><path class="st9" d="M156.1,111.2c0,1.399,1.3,2.5,2,2.5s1.2-1.101,1.2-2.5c0-1.4-0.5-2.5-1.2-2.5S156.1,109.8,156.1,111.2"/><rect x="157.899" y="106.5" class="st9" width="5.101" height="9.398"/><rect x="157.877" y="100.193" transform="matrix(0.9848 -0.1739 0.1739 0.9848 -15.1158 29.2605)" class="st9" width="3.1" height="1.4"/><polygon class="st9" points="155.6,74.601 154,74.899 157.2,100.601 161.399,99.8 	"/><rect x="158.423" y="105.56" transform="matrix(0.9849 -0.1733 0.1733 0.9849 -16.0132 29.4)" class="st9" width="3.9" height="1.701"/><path class="st9" d="M161.5,105.5l-2.5,0.398c-1.199,0.201-2.399-0.6-2.601-1.799v-0.2C156.2,102.7,157,101.5,158.2,101.3l2.5-0.4		c1.199-0.198,2.399,0.602,2.601,1.802v0.198C163.6,104.2,162.8,105.3,161.5,105.5"/><rect x="153.381" y="74.192" transform="matrix(0.9849 -0.1732 0.1732 0.9849 -10.5801 27.9247)" class="st9" width="2.701" height="0.799"/><rect x="152.663" y="74.117" transform="matrix(-0.9849 0.1733 -0.1733 -0.9849 316.793 122.1749)" class="st9" width="0.8" height="1.6"/><rect x="169.783" y="100.157" transform="matrix(0.9848 0.1736 -0.1736 0.9848 20.1086 -28.2101)" class="st9" width="3.1" height="1.4"/><polygon class="st9" points="176.7,74.899 175.2,74.601 169.3,99.8 173.6,100.601 	"/><rect x="168.381" y="105.662" transform="matrix(0.9848 0.1735 -0.1735 0.9848 21.067 -27.9413)" class="st9" width="3.9" height="1.7"/><path class="st9" d="M171.8,106l-2.5-0.399c-1.2-0.201-2-1.399-1.801-2.601v-0.2c0.2-1.199,1.399-2,2.601-1.8l2.5,0.398		c1.2,0.201,2,1.4,1.8,2.602v0.2C174.1,105.399,173,106.2,171.8,106"/><rect x="174.666" y="74.221" transform="matrix(-0.9848 -0.1737 0.1737 -0.9848 336.3979 178.6755)" class="st9" width="2.699" height="0.799"/><rect x="177.28" y="74.067" transform="matrix(0.9849 0.1733 -0.1733 0.9849 15.6627 -29.6588)" class="st9" width="0.8" height="1.6"/><rect x="167.7" y="106.5" class="st9" width="5.101" height="9.398"/><path class="st6" d="M152.8,74.101C153.3,71,151.3,70,146.6,71"/><path class="st6" d="M177.8,74.101c-0.101-10.801-23-5.899-31.601-3.701"/></g><g id="mini-control-center" class="aristotle-svg-svg ">	<rect x="4" y="4" class="st16" width="179" height="132.8"/><rect x="30.9" y="56.199" class="st22" width="100" height="70.201"/><path class="st9" d="M129.4,124.8h-97V57.6h97V124.8z M132.4,54.699h-3h-97h-3v3V124.9v3h3h97h3v-3V57.699V54.699z"/><rect x="27.101" y="55.199" class="st22" width="107.5" height="8.5"/><path class="st9" d="M133.101,62.1h-104.5v-5.5h104.5V62.1z M136.101,53.699h-3h-104.5h-3v3v5.5v3h3h104.5h3v-3v-5.5V53.699z"/><rect x="117.361" y="46.151" transform="matrix(0.6031 0.7976 -0.7976 0.6031 84.9215 -76.9725)" class="st9" width="4.9" height="1.401"/><rect x="117.361" y="46.151" transform="matrix(0.6031 0.7976 -0.7976 0.6031 84.9215 -76.9725)" class="st6" width="4.9" height="1.401"/><rect x="113.564" y="50.905" transform="matrix(-0.9542 0.2993 -0.2993 -0.9542 244.3952 66.3788)" class="st9" width="7.1" height="2"/><rect x="113.564" y="50.905" transform="matrix(-0.9542 0.2993 -0.2993 -0.9542 244.3952 66.3788)" class="st6" width="7.1" height="2"/><path class="st9" d="M120.301,44.6c-0.399,1.301-1.801,2.1-3.101,1.7c-1.3-0.4-2.101-1.8-1.7-3.102		c0.4-1.299,1.801-2.1,3.101-1.698C120,41.9,120.7,43.3,120.301,44.6"/><circle class="st6" cx="117.9" cy="43.9" r="2.5"/><path class="st9" d="M123.4,48.6c1,1,1,2.6,0,3.6s-2.601,1-3.601,0s-1-2.6,0-3.6C120.9,47.6,122.5,47.6,123.4,48.6"/><circle class="st6" cx="121.7" cy="50.3" r="2.5"/><path class="st9" d="M115.101,53.4c0,1.899-1.601,3.5-3.5,3.5s-3.5-1.601-3.5-3.5s1.601-3.5,3.5-3.5S115.101,51.5,115.101,53.4"/><circle class="st6" cx="111.601" cy="53.4" r="3.5"/><rect x="33.4" y="58.699" class="st22" width="95" height="65.201"/><path class="st19" d="M127.4,122.8h-93V59.6h93V122.8z M129.4,57.699h-97V124.9h97V57.699z"/><rect x="29.601" y="57.699" class="st22" width="102.5" height="3.5"/><path class="st19" d="M131.101,60.1h-100.5v-1.5h100.5V60.1z M133.101,56.699h-104.5v5.5h104.5V56.699z"/><line class="st16" x1="128.2" y1="117.699" x2="33.5" y2="117.699"/><line class="st18" x1="128.2" y1="117.699" x2="33.5" y2="117.699"/><path class="st9" d="M108.801,20.8c-2.5,2.5,1.3,13.2,10.3,22.101C128,51.8,138.801,55.6,141.201,53.199"/><path class="st6" d="M108.801,20.8c-2.5,2.5,1.3,13.2,10.3,22.101C128,51.8,138.801,55.6,141.201,53.199"/><ellipse transform="matrix(-0.707 -0.7072 0.7072 -0.707 187.1833 151.454)" class="st6" cx="124.965" cy="36.953" rx="22.9" ry="1.8"/><polyline class="st6" points="118.4,33 133.9,28.1 128.9,43.5 	"/><polyline class="st6" points="108.801,20.8 133.9,28.1 141.2,53.199 	"/><rect x="132.658" y="26.941" transform="matrix(0.7071 0.7071 -0.7071 0.7071 59.0217 -86.6102)" class="st9" width="2.801" height="2"/><rect x="132.658" y="26.941" transform="matrix(0.7071 0.7071 -0.7071 0.7071 59.0217 -86.6102)" class="st6" width="2.801" height="2"/><rect x="80.101" y="68.199" class="st13" width="5.7" height="11"/><path class="st19" d="M84.9,78.199h-3.7v-9h3.7V78.199z M86.9,67.199h-2h-3.7h-2v2v9v2h2h3.7h2v-2v-9V67.199z"/><rect x="60.4" y="68.199" class="st13" width="5.699" height="11"/><path class="st19" d="M65.2,78.199h-3.7v-9h3.7V78.199z M67.2,67.199h-2h-3.7h-2v2v9v2h2h3.7h2v-2v-9V67.199z"/><rect x="70.301" y="68.199" class="st13" width="5.699" height="11"/><path class="st19" d="M75,78.199h-3.699v-9H75V78.199L75,78.199z M77,67.199h-2h-3.699h-2v2v9v2h2H75h2v-2v-9V67.199L77,67.199z"/><rect x="40.801" y="68.199" class="st13" width="5.699" height="11"/><path class="st19" d="M45.5,78.199h-3.699v-9H45.5V78.199L45.5,78.199z M47.5,67.199h-2h-3.699h-2v2v9v2h2H45.5h2v-2v-9V67.199		L47.5,67.199z"/><rect x="50.601" y="68.199" class="st13" width="5.7" height="11"/><path class="st19" d="M55.301,78.199h-3.7v-9h3.7V78.199z M57.301,67.199h-2h-3.7h-2v2v9v2h2h3.7h2v-2v-9V67.199z"/><rect x="80.101" y="82.4" class="st13" width="5.7" height="11"/><path class="st19" d="M84.9,92.3h-3.7v-9h3.7V92.3z M86.9,81.4h-2h-3.7h-2v2v9v2h2h3.7h2v-2v-9V81.4z"/><rect x="60.4" y="82.4" class="st13" width="5.699" height="11"/><path class="st19" d="M65.2,92.3h-3.7v-9h3.7V92.3z M67.2,81.4h-2h-3.7h-2v2v9v2h2h3.7h2v-2v-9V81.4z"/><rect x="70.301" y="82.4" class="st13" width="5.699" height="11"/><path class="st19" d="M75,92.3h-3.699v-9H75V92.3L75,92.3z M77,81.4h-2h-3.699h-2v2v9v2h2H75h2v-2v-9V81.4L77,81.4z"/><rect x="40.801" y="82.4" class="st13" width="5.699" height="11"/><path class="st19" d="M45.5,92.3h-3.699v-9H45.5V92.3L45.5,92.3z M47.5,81.4h-2h-3.699h-2v2v9v2h2H45.5h2v-2v-9V81.4L47.5,81.4z"/><rect x="50.601" y="82.4" class="st13" width="5.7" height="11"/><path class="st19" d="M55.301,92.3h-3.7v-9h3.7V92.3z M57.301,81.4h-2h-3.7h-2v2v9v2h2h3.7h2v-2v-9V81.4z"/><path class="st9" d="M144,114.3l-0.699,0.3c-2.5,1.2-5.601,0.1-6.801-2.5c-1.199-2.5-0.1-5.6,2.5-6.8l0.7-0.3L144,114.3z"/><rect x="142.228" y="104.949" transform="matrix(0.9075 -0.4201 0.4201 0.9075 -31.9874 71.0598)" class="st9" width="6.2" height="6.398"/><polygon class="st9" points="149.2,110.8 169.9,105.5 163.4,91.5 146,103.9 	"/><rect x="176.524" y="89.636" transform="matrix(0.9072 -0.4207 0.4207 0.9072 -22.1697 84.0608)" class="st9" width="5.899" height="5.302"/><polygon class="st9" points="183.2,93.5 184.601,92.3 182.801,88.4 181,88.6 	"/><rect x="166.339" y="87.492" transform="matrix(0.9074 -0.4203 0.4203 0.9074 -25.3066 79.9456)" class="st9" width="4.8" height="19.799"/><rect x="175.861" y="90.368" transform="matrix(0.9075 -0.4201 0.4201 0.9075 -22.9488 82.9284)" class="st9" width="1.899" height="6.401"/><polygon class="st9" points="175.301,103.4 177.101,98.199 173.4,90.3 168.301,88.3 	"/><rect x="156.87" y="111.606" transform="matrix(0.5463 0.8376 -0.8376 0.5463 166.7345 -82.8841)" class="st9" width="6" height="1.7"/><rect x="152.228" y="117.071" transform="matrix(-0.9541 0.2994 -0.2994 -0.9541 341.4985 184.3145)" class="st9" width="8.799" height="2.5"/><path class="st9" d="M160.801,109.699c-0.601,1.602-2.399,2.4-4,1.802c-1.601-0.601-2.399-2.4-1.801-4c0.601-1.601,2.4-2.4,4-1.802		C160.601,106.3,161.4,108.1,160.801,109.699"/><path class="st9" d="M164.601,114.3c1.2,1.2,1.2,3.2,0,4.398c-1.199,1.201-3.199,1.201-4.399,0c-1.2-1.198-1.2-3.198,0-4.398		C161.4,113,163.4,113,164.601,114.3"/><path class="st9" d="M154.301,120.199c0,2.4-1.899,4.302-4.301,4.302c-2.399,0-4.3-1.9-4.3-4.302c0-2.398,1.899-4.299,4.3-4.299		S154.301,117.9,154.301,120.199"/><rect x="131.601" y="121.8" class="st9" width="39" height="6"/></g><g id="btn-lightning" class="aristotle-svg-svg ">	<path class="st13" d="M4,51.002l59,12l60-12l-3-2.459L63.005,59.941L7,48.55L4,51.002z M7,18.452L62.979,7.066L120,19.42l3-2.42		L63,4l0,0L4,16L7,18.452z"/><path class="st13" d="M32.495,50.604c9.365-3.825,19.271-6.614,29.529-8.252c-1.824,1.227-3.6,2.491-5.326,3.787		c7.283-1.253,14.734-1.91,22.277-1.934c-2.351,0.923-4.648,1.907-6.893,2.948c7.485,0.609,14.921,1.855,22.223,3.731		c-11.213-1.329-22.346-1.171-33.122,0.346c1.834-1.153,3.716-2.266,5.646-3.336c-6.844,0.652-13.566,1.838-20.108,3.528		c1.769-1.565,3.602-3.093,5.498-4.582C45.563,47.595,38.97,48.852,32.495,50.604z"/></g><g id="quiz-header" class="aristotle-svg-svg ">	<line class="st3" x1="4" y1="34" x2="281" y2="34"/><line class="st3" x1="361" y1="34" x2="638" y2="34"/><polygon class="st10" points="334.837,52.221 323,58.366 300.5,46.686 300.5,21.313 307.811,17.518 304.164,13.777 295.5,18.275 		295.5,49.724 323,64 339.713,55.325 	"/><polygon class="st10" points="323,4 310.303,10.591 315.244,13.66 323,9.633 345.5,21.313 345.5,46.686 341.856,48.578 		345.635,52.25 350.5,49.724 350.5,18.275 	"/><polygon class="st9" points="303,9 328.828,25.037 320.912,25.033 342.43,43.422 333.1,43.556 346.811,56.878 319.273,39.354 		329.622,39.166 306.623,21.461 314.893,21.204 	"/></g><g id="quiz-answer-bg" class="aristotle-svg-svg ">	<polygon  class="bg st19" points="5.5,308.111 5.5,29.889 103.999,5.545 202.094,29.888 202.498,308.112 104,332.455 	"/><path  class="outline st22" d="M103.999,7.091l96.597,23.97l0.401,275.879L104,330.911L7,306.938V31.062L103.999,7.091		 M104,4L4,28.714v280.572L104,334l100-24.714l-0.408-280.572L104,4L104,4z"/><path  class="lightning  st22" d="M68.194,285.052c10.85-4.432,22.324-7.663,34.212-9.561		c-2.113,1.421-4.171,2.885-6.169,4.388c8.438-1.453,17.07-2.214,25.812-2.241c-2.725,1.069-5.387,2.21-7.985,3.417		c8.673,0.705,17.286,2.148,25.747,4.322c-12.992-1.538-25.893-1.354-38.377,0.4c2.126-1.335,4.306-2.624,6.541-3.864		c-7.928,0.755-15.719,2.129-23.3,4.087c2.05-1.812,4.175-3.584,6.371-5.308C83.334,281.566,75.696,283.021,68.194,285.052z"/><path  class="lightning st22" d="M68.194,54.061c10.85-4.431,22.324-7.661,34.212-9.561		c-2.113,1.422-4.171,2.885-6.169,4.388c8.438-1.452,17.07-2.214,25.812-2.24c-2.725,1.069-5.387,2.211-7.985,3.417		c8.673,0.705,17.286,2.148,25.747,4.321c-12.992-1.538-25.893-1.354-38.377,0.4c2.126-1.335,4.306-2.624,6.541-3.864		c-7.928,0.756-15.719,2.13-23.3,4.087c2.05-1.812,4.175-3.584,6.371-5.308C83.334,50.576,75.696,52.031,68.194,54.061z"/><line  class="line st21" x1="32.5" y1="95.5" x2="175.5" y2="95.5"/><line  class="line  st21" x1="32.5" y1="232.5" x2="175.5" y2="232.5"/></g><g id="next-question" class="aristotle-svg-svg ">	<polygon class="st12" points="149,41.445 4,41.445 4,4 149,4 156.006,23.472 	"/></g><g id="btn-got-it" class="aristotle-svg-svg ">	<path class="st9" d="M4,38.984c10.946-4.513,22.523-7.805,34.515-9.737c-2.132,1.447-4.207,2.938-6.224,4.469		c8.512-1.479,17.222-2.255,26.039-2.282c-2.749,1.089-5.435,2.251-8.056,3.479c8.749,0.719,17.438,2.188,25.974,4.402		c-13.107-1.566-26.119-1.381-38.715,0.408c2.144-1.36,4.343-2.673,6.599-3.937c-7.998,0.77-15.858,2.169-23.506,4.163		c2.068-1.847,4.211-3.65,6.427-5.406C19.274,35.435,11.568,36.918,4,38.984z"/><path class="st13" d="M26.764,11.641c-0.32,2.88-0.62,4.041-1.32,5.201c-0.96,1.621-2.26,2.441-3.841,2.441		c-2.42,0-3.94-2.021-3.94-5.221c0-2.081,0.52-4.321,1.34-5.781c1.021-1.82,2.521-2.781,4.281-2.781c1.9,0,3.16,1.14,3.501,3.181		l-2.661,1c-0.02-0.68-0.06-0.86-0.16-1.161c-0.14-0.44-0.5-0.68-0.979-0.68c-0.641,0-1.16,0.44-1.581,1.32		c-0.6,1.28-0.979,3.241-0.979,5.062c0,1.78,0.52,2.68,1.54,2.68s1.641-0.92,1.92-2.9h-1.64l0.28-2.36H26.764z"/><path class="st13" d="M29.642,15.521c0-1.201,0.32-2.541,0.84-3.541c0.681-1.32,1.801-2.041,3.142-2.041		c1.8,0,2.82,1.22,2.82,3.421c0,3.581-1.561,5.881-3.961,5.881C30.622,19.242,29.642,17.942,29.642,15.521z M33.923,13.561		c0-0.92-0.2-1.38-0.58-1.38c-0.66,0-1.221,1.58-1.221,3.4c0,0.9,0.221,1.42,0.62,1.42C33.402,17.001,33.923,15.441,33.923,13.561z"		/><path class="st13" d="M40.241,12.181h-0.84l0.26-2.061h0.841l0.3-2.46h2.461l-0.301,2.46h1.001l-0.24,2.061h-1l-0.86,6.881h-2.461		L40.241,12.181z"/><path class="st13" d="M52.501,10.12h2.461l-1.101,8.942H51.4L52.501,10.12z M52.541,7.66c0-0.96,0.84-1.78,1.78-1.78		c0.76,0,1.36,0.6,1.36,1.38c0,0.96-0.82,1.801-1.78,1.801C53.121,9.06,52.541,8.46,52.541,7.66z"/><path class="st13" d="M58.541,12.181h-0.84l0.26-2.061h0.841l0.3-2.46h2.461l-0.301,2.46h1.001l-0.24,2.061h-1l-0.86,6.881h-2.461		L58.541,12.181z"/><path class="st13" d="M66.441,15.921c0.82,0,1.46,0.64,1.46,1.46c0,1.02-0.88,1.9-1.9,1.9c-0.84,0-1.46-0.64-1.46-1.48		C64.541,16.802,65.421,15.921,66.441,15.921z M66.401,5.719h2.561l-1.141,9.342h-2.58L66.401,5.719z"/></g><g id="btn-continue" class="aristotle-svg-svg ">	<path class="st14" d="M53.561,7.063L101,17.186v22.417l-47.415,9.339L7,39.61V16.39L53.561,7.063 M53.58,4L4,13.931v28.139		L53.58,52L104,42.069V14.759L53.58,4L53.58,4z"/><path class="st14" d="M22.883,27.128c-1.135,0.378-1.513,0.462-2.171,0.462c-1.373,0-2.787-0.616-3.74-1.625		c-0.799-0.854-1.232-1.975-1.232-3.222c0-2.759,2.186-4.944,4.944-4.944c0.729,0,1.317,0.126,2.199,0.477v2.899		c-0.574-0.687-1.261-1.022-2.101-1.022c-1.457,0-2.508,1.078-2.508,2.577c0,0.798,0.266,1.429,0.826,1.891		c0.477,0.393,1.064,0.616,1.682,0.616c0.798,0,1.471-0.308,2.101-0.98V27.128z"/><path class="st14" d="M26.841,18.892c0.883-0.743,2.115-1.177,3.418-1.177c1.556,0,2.83,0.519,3.824,1.568		c0.869,0.911,1.346,2.115,1.346,3.418c0,1.471-0.645,2.857-1.752,3.796c-0.938,0.785-2.087,1.177-3.459,1.177		c-2.941,0-5.127-2.157-5.127-5.07C25.091,21.217,25.735,19.83,26.841,18.892z M30.259,25.32c1.457,0,2.634-1.176,2.634-2.633		c0-1.443-1.177-2.619-2.634-2.619c-1.442,0-2.633,1.176-2.633,2.591C27.626,24.145,28.788,25.32,30.259,25.32z"/><path class="st14" d="M38.041,17.995h2.423l4.469,5.715v-5.715h2.424v9.343h-2.424l-4.469-5.715v5.715h-2.423V17.995z"/><path class="st14" d="M51.384,20.054h-1.975v-2.059h6.415v2.059h-2.017v7.284h-2.424V20.054z"/><path class="st14" d="M57.893,17.995h2.424v9.343h-2.424V17.995z"/><path class="st14" d="M63.451,17.995h2.424l4.468,5.715v-5.715h2.424v9.343h-2.424l-4.468-5.715v5.715h-2.424V17.995z"/><path class="st14" d="M83.839,23.388c0,1.373-0.238,2.115-0.911,2.872c-0.77,0.868-1.862,1.316-3.222,1.316		c-1.429,0-2.689-0.532-3.333-1.401c-0.49-0.658-0.673-1.414-0.673-2.787v-5.393h2.424v5.057c0,1.064,0.027,1.274,0.266,1.667		c0.267,0.448,0.771,0.714,1.358,0.714c0.617,0,1.163-0.294,1.415-0.756c0.21-0.364,0.252-0.645,0.252-1.625v-5.057h2.424V23.388z"		/><path class="st14" d="M86.774,17.995h5.309v2.059h-2.885v1.555h2.731v2.06h-2.731v1.61h2.885v2.06h-5.309V17.995z"/><path class="st14" d="M23.786,39.592c9.118-3.725,18.762-6.44,28.75-8.035c-1.776,1.194-3.505,2.425-5.185,3.688		c7.09-1.221,14.346-1.86,21.689-1.883c-2.289,0.898-4.526,1.856-6.71,2.871c7.288,0.593,14.526,1.806,21.636,3.632		c-10.918-1.293-21.757-1.14-32.248,0.337c1.785-1.122,3.617-2.205,5.496-3.248c-6.662,0.635-13.21,1.79-19.58,3.435		c1.723-1.523,3.508-3.012,5.354-4.46C36.51,36.663,30.09,37.886,23.786,39.592z"/></g>';
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Aristotle, ChromeUI, Commander, DevTools, Episode, EpisodeLoader, GlobalVars, Logger, Movie, SlideUX,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Episode = require("episode/episode");

ChromeUI = require("chrome/chrome-ui");

DevTools = require('misc/dev-tools');

Movie = require('movie/movie');

EpisodeLoader = require('misc/episode-loader');

SlideUX = require('slide-ux/slide-ux');

Commander = require('misc/commander');

GlobalVars = require('misc/global-vars');

Logger = require('misc/logger');

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
    var $base, commander, globals, shadowIcons;
    $base = $(jadeTemplate['aristotle']({}));
    $el.append($base);
    shadowIcons = new pxicons.ShadowIcons();
    shadowIconsInstance.svgReplaceWithString(pxSvgIconString, $base);
    commander = new Commander();
    globals = new GlobalVars();
    this.chromeUI = new ChromeUI($(".chrome", $base));
    this.slideUX = new SlideUX($(".slide-ux", $base));
    return this.movie = new Movie($(".movie", $base));
  };

  Aristotle.prototype.setDevMode = function(devMode) {
    var logger;
    logger = new Logger($('body'), devMode);
    return aristotle.devTools = new DevTools(devMode);
  };

  return Aristotle;

})();

window.Aristotle = Aristotle;

},{"chrome/chrome-ui":2,"episode/episode":5,"misc/commander":10,"misc/dev-tools":11,"misc/episode-loader":12,"misc/global-vars":13,"misc/logger":14,"movie/movie":19,"slide-ux/slide-ux":32}],2:[function(require,module,exports){
var ChromeUI;

module.exports = ChromeUI = (function() {
  function ChromeUI($el) {
    this.$el = $el;
    this.build(this.$el);
    PubSub.subscribe("chrome.hide", (function(_this) {
      return function(m, data) {
        return _this.hide();
      };
    })(this));
    PubSub.subscribe("chrome.show", (function(_this) {
      return function(m, data) {
        return _this.show();
      };
    })(this));
  }

  ChromeUI.prototype.build = function($el) {
    var $progress, $top, data;
    this.$el = $el;
    data = {
      name: "John \"Deadeye\" Nimbus",
      episode: "1"
    };
    this.getRank(data, "cyber-cadet");
    $top = $(jadeTemplate['chrome-ui/top'](data));
    this.$el.append($top);
    $progress = $(jadeTemplate['chrome-ui/progress']({}));
    this.$el.append($progress);
    return shadowIconsInstance.svgReplaceWithString(pxSvgIconString, this.$el);
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

  ChromeUI.prototype.hide = function() {
    return this.$el.css({
      opacity: 0
    });
  };

  ChromeUI.prototype.show = function() {
    return this.$el.css({
      opacity: 1
    });
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
    return this.addOnComplete(onComplete);
  };

  AudioTrack.prototype.addOnComplete = function(onComplete) {
    if (onComplete != null) {
      return this.sound.addEventListener("complete", function() {
        return onComplete();
      });
    }
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
    return aristotle.commander["do"](action);
  };

  Slide.prototype.setDuration = function() {
    var ctanleeSubscription, listenSubscription, uxSubscription;
    if (this.slideData.duration == null) {
      return;
    }
    switch (this.slideData.duration.kind) {
      case "time":
        return setTimeout(this.onSlideComplete, this.slideData.duration.seconds * 1000);
      case "user":
        return console.log("waiting on the user");
      case "ux":
        return uxSubscription = PubSub.subscribe('ux.complete', (function(_this) {
          return function() {
            PubSub.unsubscribe(uxSubscription);
            return _this.onSlideComplete();
          };
        })(this));
      case "ctanlee":
        return ctanleeSubscription = PubSub.subscribe('ctanlee.complete', (function(_this) {
          return function() {
            PubSub.unsubscribe(ctanleeSubscription);
            return _this.onSlideComplete();
          };
        })(this));
      case "listen":
        return listenSubscription = PubSub.subscribe(this.slideData.duration.event, (function(_this) {
          return function() {
            PubSub.unsubscribe(listenSubscription);
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

},{"episode/audio-track":3,"movie/svg-animation":20}],7:[function(require,module,exports){
var Sequence, Slide, Slides,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Slide = require('episode/slide');

Sequence = require('misc/sequence');

module.exports = Slides = (function() {
  function Slides(trainingData, movie, ux, onShowComplete) {
    this.onShowComplete = onShowComplete;
    this.slideComplete = bind(this.slideComplete, this);
    this.nextSlide = bind(this.nextSlide, this);
    aristotle.slides = this;
    this.createSlides(trainingData, movie, ux);
    PubSub.subscribe('slides.next-slide', (function(_this) {
      return function() {
        console.log("run next slide....");
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

  Slides.prototype.getCurrentIndex = function() {
    return this.slides.getCurrentItem().slideData.index;
  };

  Slides.prototype.getIndexAndTotal = function() {
    return (this.slides.getCurrentItem().slideData.index) + "/" + this.slides.totalItems;
  };

  return Slides;

})();

},{"episode/slide":6,"misc/sequence":15}],8:[function(require,module,exports){
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

  Sequence.prototype.currentItem = function() {
    return this.getCurrentItem();
  };

  Sequence.prototype.incramentItemIndex = function(incrament, loopOnOverShoot) {
    var newIndex;
    if (loopOnOverShoot == null) {
      loopOnOverShoot = false;
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

  Sequence.prototype.getItemByParam = function(param, val) {
    var i, item, len, ref;
    ref = this.items;
    for (i = 0, len = ref.length; i < len; i++) {
      item = ref[i];
      if (item[param] === val) {
        return item;
      }
    }
    return null;
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
    if (assets.length === 0) {
      this.callback();
      return;
    }
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
var Commander;

module.exports = Commander = (function() {
  function Commander() {
    window.aristotle.commander = this;
  }

  Commander.prototype["do"] = function(action) {
    var i, item, len, results;
    if (Array.isArray(action)) {
      results = [];
      for (i = 0, len = action.length; i < len; i++) {
        item = action[i];
        results.push(this.publish(item));
      }
      return results;
    } else {
      return this.publish(action);
    }
  };

  Commander.prototype.publish = function(action) {
    var globalVarName, i, key, keyValPair, len, ref;
    if (action.INJECT_GLOBAL_VARS != null) {
      ref = action.INJECT_GLOBAL_VARS;
      for (i = 0, len = ref.length; i < len; i++) {
        keyValPair = ref[i];
        for (key in keyValPair) {
          globalVarName = keyValPair[key];
          if (aristotle.globals[globalVarName] != null) {
            action.data[key] = aristotle.globals[globalVarName];
          } else {
            aristotle["throw"]("Tried to access the global var `" + globalVarName + "` but it doesn't exist", true);
          }
        }
      }
    }
    return PubSub.publish(action.cmd, action.data);
  };

  return Commander;

})();

},{}],11:[function(require,module,exports){
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
    this.addIndexesToItems(devConfig, items);
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

  DevTools.prototype.addIndexesToItems = function(devConfig, items) {
    var count, item, j, len, numSlidesRemoved, results;
    numSlidesRemoved = devConfig.startIndex != null ? devConfig.startIndex : 0;
    count = 0;
    results = [];
    for (j = 0, len = items.length; j < len; j++) {
      item = items[j];
      results.push(item.index = numSlidesRemoved + count++);
    }
    return results;
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

},{"episode/audio-track":3}],12:[function(require,module,exports){
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

},{}],13:[function(require,module,exports){
var GlobalVars;

module.exports = GlobalVars = (function() {
  function GlobalVars() {
    aristotle.globals = this;
    PubSub.subscribe('setvars', (function(_this) {
      return function(a, data) {
        var key, results, val;
        results = [];
        for (key in data) {
          val = data[key];
          results.push(_this[key] = val);
        }
        return results;
      };
    })(this));
  }

  return GlobalVars;

})();

},{}],14:[function(require,module,exports){
var Logger,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

module.exports = Logger = (function() {
  function Logger($el, isDevMode) {
    this["throw"] = bind(this["throw"], this);
    this.log = bind(this.log, this);
    var $node;
    $node = $(jadeTemplate['misc/logger']({}));
    $el.append($node);
    this.$logNotifyer = $('.message', $node);
    this.$errorNotifyer = $('.error', $node);
    this.$logNotifyer.on('click', (function(_this) {
      return function() {
        return _this.hideLogNotifier();
      };
    })(this));
    this.$errorNotifyer.on('click', (function(_this) {
      return function() {
        return _this.hideErrorNotifier();
      };
    })(this));
    aristotle.log = this.log;
    aristotle["throw"] = this["throw"];
    this.hideLogNotifier();
    this.hideErrorNotifier();
    if (!isDevMode) {
      $node.css({
        display: "none"
      });
    }
  }

  Logger.prototype.log = function(msg) {
    this.showLogNotifier();
    return console.log("%c" + msg, "color:#0b1524; background:#b0d9e6");
  };

  Logger.prototype["throw"] = function(msg, showTrace) {
    if (showTrace == null) {
      showTrace = false;
    }
    this.showErrorNotifier();
    if (showTrace) {
      return console.error("" + msg);
    } else {
      return console.log("%c" + msg, "color:#3d0000; background:#e6b0c0");
    }
  };

  Logger.prototype.hideLogNotifier = function() {
    return this.$logNotifyer.css({
      display: "none"
    });
  };

  Logger.prototype.hideErrorNotifier = function() {
    return this.$errorNotifyer.css({
      display: "none"
    });
  };

  Logger.prototype.showLogNotifier = function() {
    return this.$logNotifyer.css({
      display: "block"
    });
  };

  Logger.prototype.showErrorNotifier = function() {
    return this.$errorNotifyer.css({
      display: "block"
    });
  };

  return Logger;

})();

},{}],15:[function(require,module,exports){
arguments[4][8][0].apply(exports,arguments)
},{"dup":8}],16:[function(require,module,exports){
var DynamicAssets;

module.exports = DynamicAssets = (function() {
  function DynamicAssets($el) {
    this.$el = $el;
    PubSub.subscribe("ghostux.add", (function(_this) {
      return function(m, data) {
        return _this.createGhost(data);
      };
    })(this));
    PubSub.subscribe("ghostux.remove", (function(_this) {
      return function(m, data) {
        return _this.destroyGhost(data);
      };
    })(this));
    PubSub.subscribe('label.add', (function(_this) {
      return function(m, data) {
        return _this.addLabel(data);
      };
    })(this));
    PubSub.subscribe('label.remove', (function(_this) {
      return function(m, data) {
        return _this.removeLabel(data);
      };
    })(this));
    PubSub.subscribe('label.clear', (function(_this) {
      return function(m, data) {
        return _this.removeLabel(data);
      };
    })(this));
    PubSub.subscribe('label.hide', (function(_this) {
      return function(m, data) {
        return _this.hideLabel(data);
      };
    })(this));
    PubSub.subscribe('label.show', (function(_this) {
      return function(m, data) {
        return _this.showLabel(data);
      };
    })(this));
  }

  DynamicAssets.prototype.createGhost = function(data) {
    var $ghostItem, $target, action, event, pos, ref, results, tal, wid;
    $target = $("#" + data.id);
    pos = $target.position();
    wid = $target[0].getBBox().width;
    tal = $target[0].getBBox().height;
    if (wid > 500 || tal > 400) {
      aristotle.log("We've created a hit area for `" + data.id + "` that is " + wid + "px by " + tal + "px, I'm guessing that's not right..");
    }
    $ghostItem = $(jadeTemplate['slide-ux/components/ghost-item']({
      id: data.id + "-ghost",
      width: wid,
      height: tal,
      left: pos.left,
      top: pos.top
    }));
    this.$el.append($ghostItem);
    ref = data.events;
    results = [];
    for (event in ref) {
      action = ref[event];
      if (action.cmd != null) {
        results.push($ghostItem.on(event, function() {
          return aristotle.commander["do"](action);
        }));
      } else if (typeof action === "function") {
        results.push($ghostItem.on(event, function() {
          return action(data.id);
        }));
      } else {
        results.push(void 0);
      }
    }
    return results;
  };

  DynamicAssets.prototype.destroyGhost = function(ghostId) {
    return $(ghostId + "-ghost").remove();
  };

  DynamicAssets.prototype.addLabel = function(data) {
    var $label, pos;
    pos = aristotle.movie.getLocalPos(data.id);
    $label = $(jadeTemplate['movie/label']({
      text: data.text,
      id: data.id + "-label"
    }));
    this.$el.append($label);
    this.positionLabel(data, $label, pos);
    return $label.css({
      top: pos.y,
      left: pos.x
    });
  };

  DynamicAssets.prototype.removeLabel = function(data) {
    var i, labelId, len, ref, results;
    if (data.id === "all") {
      return $(".label-wrapper", this.$el).remove();
    } else if (Array.isArray(data.id)) {
      ref = data.id;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        labelId = ref[i];
        results.push($("#" + labelId + "-label", this.$el).remove());
      }
      return results;
    } else {
      return $("#" + data.id + "-label", this.$el).remove();
    }
  };

  DynamicAssets.prototype.hideLabel = function(data) {
    var i, labelId, len, ref, results;
    if (data.id === "all") {
      return $(".label-wrapper", this.$el).velocity({
        opacity: 0
      }, {
        duration: 400
      });
    } else if (Array.isArray(data.id)) {
      ref = data.id;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        labelId = ref[i];
        results.push($("#" + labelId + "-label", this.$el).velocity({
          opacity: 0
        }, {
          duration: 400
        }));
      }
      return results;
    } else {
      return $("#" + data.id + "-label", this.$el).velocity({
        opacity: 0
      }, {
        duration: 400
      });
    }
  };

  DynamicAssets.prototype.showLabel = function(data) {
    var i, labelId, len, ref, results;
    if (data.id === "all") {
      return $(".label-wrapper", this.$el).velocity({
        opacity: 1
      }, {
        duration: 400
      });
    } else if (Array.isArray(data.id)) {
      ref = data.id;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        labelId = ref[i];
        results.push($("#" + labelId + "-label", this.$el).velocity({
          opacity: 1
        }, {
          duration: 400
        }));
      }
      return results;
    } else {
      return $("#" + data.id + "-label", this.$el).velocity({
        opacity: 1
      }, {
        duration: 400
      });
    }
  };

  DynamicAssets.prototype.clearLabel = function(data) {
    var i, labelId, len, ref, results;
    if (data.id === "all") {
      return $(".label-wrapper", this.$el).velocity({
        opacity: 1
      }, {
        duration: 400
      });
    } else if (Array.isArray(data.id)) {
      ref = data.id;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        labelId = ref[i];
        results.push($("#" + labelId + "-label", this.$el).velocity({
          opacity: 1
        }, {
          duration: 400
        }));
      }
      return results;
    } else {
      return $("#" + data.id + "-label", this.$el).velocity({
        opacity: 1
      }, {
        duration: 400
      });
    }
  };

  DynamicAssets.prototype.positionLabel = function(data, $label, pos) {
    var $innerLabel, arrowLoc, face;
    face = data.face != null ? data.face : "top";
    arrowLoc = data.arrow != null ? data.arrow : "left";
    $innerLabel = $(".label", $label);
    switch (face) {
      case "top":
        pos.x += pos.w / 2;
        break;
      case "left":
        pos.y += pos.h / 2;
        $innerLabel.addClass("arrow-point-right");
        break;
      case "right":
        pos.y += pos.h / 2;
        pos.x += pos.w;
        $innerLabel.addClass("arrow-point-left");
        break;
      case "bottom":
        pos.x += pos.w / 2;
        pos.y += pos.h;
        $innerLabel.addClass("arrow-top");
    }
    switch (arrowLoc) {
      case "right":
        return $innerLabel.addClass("arrow-right");
      case "middle":
        $innerLabel.addClass("arrow-middle");
        console.log("width");
        console.log($innerLabel.width());
        window.thing = $innerLabel;
        return $innerLabel.css({
          left: -$innerLabel.width() / 2
        });
    }
  };

  return DynamicAssets;

})();

},{}],17:[function(require,module,exports){
var Highlighter;

module.exports = Highlighter = (function() {
  function Highlighter($el, dynamicAssets) {
    this.$el = $el;
    this.dynamicAssets = dynamicAssets;
    PubSub.subscribe('highlight', (function(_this) {
      return function(m, data) {
        var i, item, len, ref, results;
        if (Array.isArray(data.id)) {
          ref = data.id;
          results = [];
          for (i = 0, len = ref.length; i < len; i++) {
            item = ref[i];
            results.push(_this.highlightElement(item, data.level, data.label));
          }
          return results;
        } else {
          return _this.highlightElement(data.id, data.level, data.label);
        }
      };
    })(this));
    PubSub.subscribe('unhighlight', (function(_this) {
      return function(m, data) {
        var i, item, len, results;
        if (m === "unhighlight.all") {
          return _this.unhighlightAll();
        } else {
          if (Array.isArray(data)) {
            results = [];
            for (i = 0, len = data.length; i < len; i++) {
              item = data[i];
              results.push(_this.unHighlightElement(item));
            }
            return results;
          } else {
            return _this.unHighlightElement(data);
          }
        }
      };
    })(this));
  }

  Highlighter.prototype.highlightElement = function(elementId, color, label) {
    var $item, filterId;
    $item = $("#" + elementId, this.$el);
    $item.attr("class", "filter-highlighted");
    if ($item.length === 0) {
      aristotle["throw"]("tried to highlight an element with the id `" + elementId + "`, but found no elements with that id.", true);
    }
    switch (color) {
      case 'blue':
        filterId = "highlightBlue";
        break;
      case 'orange':
        filterId = "highlightOrange";
        break;
      case 'yellow':
        filterId = "highlightYellow";
    }
    return $item.css({
      filter: "url(#" + filterId + ")"
    });
  };

  Highlighter.prototype.unHighlightElement = function(elementId) {
    var $item;
    $item = $("#" + elementId, this.$el);
    $item.attr("class", "");
    if ($item.length === 0) {
      aristotle["throw"]("tried to unhighlight an element with the id `" + elementId + "`, but found no elements with that id.", true);
    }
    return $item.css({
      filter: "initial"
    });
  };

  Highlighter.prototype.unhighlightAll = function() {
    var $items;
    $items = $(".filter-highlighted");
    $items.attr("class", "");
    return $items.css({
      filter: "initial"
    });
  };

  return Highlighter;

})();

},{}],18:[function(require,module,exports){
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
    if ((this.layerData.content != null) || (this.layerData.background != null)) {
      this.updateContent(this.layerData);
    }
    if (this.layerData.fx != null) {
      this.updateEffects(this.layerData.fx);
    }
    if (this.layerData.action != null) {
      return aristotle.commander["do"](this.layerData.action);
    }
  };

  Layer.prototype.updateContent = function(layerData) {
    if (this.currentOnionLayer != null) {
      this.fadeAndRemoveOldLayer();
    }
    this.addTheCorrectContent(layerData);
    return this.updateBackground(layerData);
  };

  Layer.prototype.addTheCorrectContent = function(layerData) {
    var kind;
    this.currentOnionLayer = this.addOnionLayer();
    if (layerData.content == null) {
      kind = "none";
    } else if (layerData.content === "clear") {
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
      default:
        return aristotle["throw"]("tried to add unrecognized layer type '" + kind + "'", true);
    }
  };

  Layer.prototype.cache = function() {
    return html2canvas(this.$layer).then((function(_this) {
      return function(canvas) {
        _this.fadeAndRemoveOldLayer();
        _this.currentOnionLayer = _this.addOnionLayer();
        return _this.currentOnionLayer.append(Canvas2Image.convertToPNG(canvas, 1024, 768));
      };
    })(this));
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

  Layer.prototype.updateBackground = function(layerData) {
    if (layerData.background == null) {
      return;
    }
    return this.currentOnionLayer.css({
      background: layerData.background
    });
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

  Layer.prototype.fadeAndRemoveOldLayer = function() {
    var oldOnionLayer;
    oldOnionLayer = this.currentOnionLayer;
    return setTimeout((function(_this) {
      return function() {
        oldOnionLayer.velocity('stop', true);
        return oldOnionLayer.velocity({
          opacity: 0
        }, {
          duration: 200,
          complete: function() {
            return oldOnionLayer.remove();
          }
        });
      };
    })(this), 200);
  };

  Layer.prototype.empty = function() {
    return this.$layer.empty();
  };

  Layer.prototype.addFilter = function(filterId) {
    return $("svg", this.currentOnionLayer).css({
      filter: "url(#" + filterId + ")"
    });
  };

  Layer.prototype.removeFilters = function() {
    return $("svg", this.currentOnionLayer).css({
      filter: "none"
    });
  };

  return Layer;

})();

},{"movie/svg-animation":20}],19:[function(require,module,exports){
var DynamicAssets, Highlighter, Layer, Movie;

DynamicAssets = require('movie/dynamic-assets');

Layer = require('movie/layer');

Highlighter = require('movie/highlighter');

module.exports = Movie = (function() {
  function Movie($el) {
    this.$el = $el;
    aristotle.movie = this;
    this.$wrapper = $('.wrapper', this.$el);
    this.layers = [];
    this.dynamicAssets = new DynamicAssets($('.dynamics', this.$el));
    this.highlighter = new Highlighter(this.$wrapper, this.dynamicAssets);
    this.scale = 1;
    this.transformOrigin = {
      x: 0,
      y: 0
    };
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
    PubSub.subscribe('movie.layers.blur.below', (function(_this) {
      return function(m, data) {
        return _this.blurAllLayersBelow(data);
      };
    })(this));
    PubSub.subscribe('movie.layers.unblur.all', (function(_this) {
      return function(m, data) {
        return _this.unblurAllLAyers();
      };
    })(this));
    PubSub.subscribe('movie.layers.cache', (function(_this) {
      return function(m, data) {
        return _this.cacheLayer(data);
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
    var $item, pos;
    if (data.id != null) {
      $item = $("#" + data.id);
      if ($item.length === 0) {
        aristotle["throw"]("Tried to zoom to an item with the id `" + data.id + "`, but no items with that id were found.");
        return;
      }
      pos = this.getLocalPos(data.id);
      return this.zoomTo(data.scale, pos.x, pos.y);
    } else {
      return this.zoomTo(data.scale, data.x, data.y);
    }
  };

  Movie.prototype.zoomTo = function(scale, x, y) {
    this.scale = scale != null ? scale : 1;
    if (x == null) {
      x = 0;
    }
    if (y == null) {
      y = 0;
    }
    this.transformOrigin = {
      x: x,
      y: y
    };
    this.$el.css({
      "transform-origin": x + "px " + y + "px"
    });
    return this.$el.css({
      transform: "scale(" + this.scale + ")"
    });
  };

  Movie.prototype.addLayer = function(layerData) {
    var depth, i, j, layer, ref, ref1;
    if (layerData == null) {
      aristotle["throw"]("Tried to create a layer, but didn't specify any layer data", true);
      return;
    }
    if (layerData.depth == null) {
      aristotle["throw"]("Tried to create a layer with no depth specified", true);
      return;
    }
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

  Movie.prototype.cacheLayer = function(depth) {
    return this.layers[depth].cache();
  };

  Movie.prototype.blurAllLayersBelow = function(layerDepth) {
    var i, j, ref, results;
    results = [];
    for (i = j = 0, ref = layerDepth - 1; 0 <= ref ? j <= ref : j >= ref; i = 0 <= ref ? ++j : --j) {
      results.push(this.layers[i].addFilter("blueBlur"));
    }
    return results;
  };

  Movie.prototype.unblurAllLAyers = function() {
    var j, layer, len, ref, results;
    ref = this.layers;
    results = [];
    for (j = 0, len = ref.length; j < len; j++) {
      layer = ref[j];
      results.push(layer.removeFilters());
    }
    return results;
  };

  Movie.prototype.getGlobalPos = function(itemId) {
    var $item, obj;
    $item = $("#" + itemId);
    return obj = {
      x: ($item.position().left / this.scale - this.transformOrigin.x) * this.scale + this.transformOrigin.x,
      y: ($item.position().top / this.scale - this.transformOrigin.y) * this.scale + this.transformOrigin.y,
      w: $item[0].getBBox().width,
      h: $item[0].getBBox().height
    };
  };

  Movie.prototype.getLocalPos = function(itemId) {
    var $item, obj;
    $item = $("#" + itemId);
    obj = {
      x: $item.position().left / this.scale,
      y: $item.position().top / this.scale,
      w: $item[0].getBBox().width,
      h: $item[0].getBBox().height
    };
    return obj;
  };

  return Movie;

})();

},{"movie/dynamic-assets":16,"movie/highlighter":17,"movie/layer":18}],20:[function(require,module,exports){
var SVGAnimation,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

module.exports = SVGAnimation = (function() {
  function SVGAnimation(el, json, data) {
    this.play = bind(this.play, this);
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
    this.animation.addEventListener('data_ready', (function(_this) {
      return function() {
        if (data.jumpToEnd != null) {
          _this.animation.setCurrentRawFrameValue(_this.animation.totalFrames);
        } else {
          if (data.delay != null) {
            setTimeout(_this.play, data.delay);
          } else {
            _this.play();
          }
        }
        return _this.addEvents(data);
      };
    })(this));
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

},{}],21:[function(require,module,exports){
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

},{}],22:[function(require,module,exports){
var Component, DefenderCards,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Component = require('slide-ux/components/component');

module.exports = DefenderCards = (function(superClass) {
  extend(DefenderCards, superClass);

  function DefenderCards($el, data1) {
    this.data = data1;
    this.showCard = bind(this.showCard, this);
    this.totalCardsViewed = 0;
    this.$node = $(jadeTemplate['slide-ux/components/defender-cards']({}));
    DefenderCards.__super__.constructor.call(this, $el, this.$node);
    this.createDefenders(this.data.defenders);
  }

  DefenderCards.prototype.createDefenders = function(defenders) {
    var data, defenderData, defenderId, results;
    this.ghosts = [];
    results = [];
    for (defenderId in defenders) {
      defenderData = defenders[defenderId];
      data = {
        id: defenderId,
        events: {
          click: (function(_this) {
            return function(id) {
              return _this.showCard(id);
            };
          })(this)
        }
      };
      this.ghosts.push(defenderId);
      results.push(PubSub.publish('ghostux.add', data));
    }
    return results;
  };

  DefenderCards.prototype.showCard = function(defenderId) {
    var data;
    this.totalCardsViewed++;
    if (this.$card != null) {
      this.removeCurrentCard();
    }
    data = this.data.defenders[defenderId];
    this.$card = $(jadeTemplate['slide-ux/components/defender-card'](data));
    shadowIconsInstance.svgReplaceWithString(pxSvgIconString, this.$card);
    $(".got-it-btn", this.$card).on("click", (function(_this) {
      return function(e) {
        return _this.removeCurrentCard();
      };
    })(this));
    if (this.totalCardsViewed === 2) {
      PubSub.publish('continue.show');
    }
    return this.$node.append(this.$card);
  };

  DefenderCards.prototype.removeCurrentCard = function() {
    return this.$card.remove();
  };

  DefenderCards.prototype.destroy = function() {
    var ghostId, i, len, ref;
    ref = this.ghosts;
    for (i = 0, len = ref.length; i < len; i++) {
      ghostId = ref[i];
      PubSub.publish('ghostux.remove', ghostId);
    }
    return DefenderCards.__super__.destroy.call(this);
  };

  return DefenderCards;

})(Component);

},{"slide-ux/components/component":21}],23:[function(require,module,exports){
var Component, Dialogue,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Component = require('slide-ux/components/component');

module.exports = Dialogue = (function(superClass) {
  extend(Dialogue, superClass);

  function Dialogue($el, data) {
    this.$node = $(jadeTemplate['slide-ux/components/dialogue/dialogue'](data));
    Dialogue.__super__.constructor.call(this, $el, this.$node);
    $('.btn', this.$node).on("click", (function(_this) {
      return function() {
        return aristotle.commander["do"](data.btn.action);
      };
    })(this));
  }

  return Dialogue;

})(Component);

},{"slide-ux/components/component":21}],24:[function(require,module,exports){
var Component, ExploreCards, Sequence,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Component = require('slide-ux/components/component');

Sequence = require('misc/sequence');

module.exports = ExploreCards = (function(superClass) {
  extend(ExploreCards, superClass);

  function ExploreCards($el, data1) {
    this.data = data1;
    this.showCard = bind(this.showCard, this);
    this.totalCardsViewed = 0;
    this.requiredCardViews = this.data["required-views"];
    this.$node = $($.parseHTML("<div></div>"));
    this.cards = new Sequence(this.data.cards);
    this.createCardGhosts(this.data.cards);
    ExploreCards.__super__.constructor.call(this, $el, this.$node);
    console.log($el);
  }

  ExploreCards.prototype.createCardGhosts = function(cards) {
    var cardData, data, i, len, results;
    this.ghosts = [];
    results = [];
    for (i = 0, len = cards.length; i < len; i++) {
      cardData = cards[i];
      data = {
        id: cardData.hit,
        events: {
          click: (function(_this) {
            return function(id) {
              return _this.showCard(id);
            };
          })(this)
        }
      };
      this.ghosts.push(cardData.hit);
      results.push(PubSub.publish('ghostux.add', data));
    }
    return results;
  };

  ExploreCards.prototype.showCard = function(cardId) {
    var data;
    this.totalCardsViewed++;
    if (this.$currentCard != null) {
      this.removeCurrentCard();
    }
    data = this.cards.getItemByParam('hit', cardId);
    this.$currentCard = $(jadeTemplate["slide-ux/components/cards/" + this.data.template](data));
    shadowIconsInstance.svgReplaceWithString(pxSvgIconString, this.$currentCard);
    $(".got-it-btn", this.$currentCard).on("click", (function(_this) {
      return function(e) {
        return _this.removeCurrentCard();
      };
    })(this));
    if (this.totalCardsViewed >= this.requiredCardViews) {
      PubSub.publish('continue.show');
    }
    return this.$node.append(this.$currentCard);
  };

  ExploreCards.prototype.removeCurrentCard = function() {
    return this.$currentCard.remove();
  };

  ExploreCards.prototype.destroy = function() {
    var ghostId, i, len, ref;
    ref = this.ghosts;
    for (i = 0, len = ref.length; i < len; i++) {
      ghostId = ref[i];
      PubSub.publish('ghostux.remove', ghostId);
    }
    return ExploreCards.__super__.destroy.call(this);
  };

  return ExploreCards;

})(Component);

},{"misc/sequence":15,"slide-ux/components/component":21}],25:[function(require,module,exports){
var Component, GhostUX,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Component = require('slide-ux/components/component');

module.exports = GhostUX = (function(superClass) {
  extend(GhostUX, superClass);

  function GhostUX($el, data) {
    this.$node = $(jadeTemplate['slide-ux/components/ghost-ux']({}));
    GhostUX.__super__.constructor.call(this, $el, this.$node);
    this.createTargets(data.targets);
  }

  GhostUX.prototype.createTargets = function(targets) {
    var $ghostItem, $target, i, len, pos, results, tal, target, wid;
    results = [];
    for (i = 0, len = targets.length; i < len; i++) {
      target = targets[i];
      $target = $("#" + target.id);
      pos = $target.position();
      wid = $target[0].getBBox().width;
      tal = $target[0].getBBox().height;
      $ghostItem = $(jadeTemplate['slide-ux/components/ghost-item']({
        width: wid,
        height: tal,
        left: pos.left,
        top: pos.top
      }));
      this.$node.append($ghostItem);
      this.setEventHandler($ghostItem, 'click', target.click);
      this.setEventHandler($ghostItem, 'mouseover', target.over, 0.4);
      results.push(this.setEventHandler($ghostItem, 'mouseout', target.out));
    }
    return results;
  };

  GhostUX.prototype.setEventHandler = function($item, event, action, opacity) {
    if (opacity == null) {
      opacity = 0;
    }
    return $item.on(event, function() {
      return aristotle.commander["do"](action);
    });
  };

  return GhostUX;

})(Component);

},{"slide-ux/components/component":21}],26:[function(require,module,exports){
var Question,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

module.exports = Question = (function() {
  function Question($parent, data, answerCallback) {
    this.$parent = $parent;
    this.data = data;
    this.answerCallback = answerCallback;
    this.onAnswerClick = bind(this.onAnswerClick, this);
  }

  Question.prototype.build = function() {
    this.$node = $(jadeTemplate['slide-ux/components/quiz/question'](this.data));
    this.$parent.prepend(this.$node);
    shadowIconsInstance.svgReplaceWithString(pxSvgIconString, this.$node);
    return $(".answer-wrapper", this.$node).on("click", this.onAnswerClick);
  };

  Question.prototype.onAnswerClick = function(e) {
    var isCorrect;
    $(e.currentTarget).addClass("flipped");
    isCorrect = $(".response", e.currentTarget).hasClass('right');
    return this.answerCallback(isCorrect);
  };

  Question.prototype.destroy = function() {
    return this.$node.remove();
  };

  return Question;

})();

},{}],27:[function(require,module,exports){
var Component, Question, Quiz, Sequence,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Component = require('slide-ux/components/component');

Question = require('slide-ux/components/quiz/question');

Sequence = require('misc/sequence');

module.exports = Quiz = (function(superClass) {
  extend(Quiz, superClass);

  function Quiz($el, data) {
    this.onNextClick = bind(this.onNextClick, this);
    this.onQuestionAnswered = bind(this.onQuestionAnswered, this);
    PubSub.publish("chrome.hide");
    PubSub.publish("ctanlee.hide");
    this.$node = $(jadeTemplate['slide-ux/components/quiz/quiz'](data));
    Quiz.__super__.constructor.call(this, $el, this.$node);
    this.createQuiz($(".questions", this.$node), data);
    this.$nextBtn = $(".next-btn", this.$node);
    this.$nextBtn.on("click", this.onNextClick);
    this.hideNext();
  }

  Quiz.prototype.createQuiz = function($el, data) {
    var i, j, len, questionData, questions, ref;
    questions = [];
    ref = data.questions;
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      questionData = ref[i];
      questionData.index = i;
      questions.push(new Question($el, questionData, this.onQuestionAnswered));
    }
    this.questions = new Sequence(questions);
    return this.showCurrentQuestion();
  };

  Quiz.prototype.showCurrentQuestion = function() {
    this.currentQuestion = this.questions.currentItem();
    return this.currentQuestion.build();
  };

  Quiz.prototype.onQuestionAnswered = function(gotItRight) {
    if (gotItRight) {
      return this.showNext();
    }
  };

  Quiz.prototype.onNextClick = function() {
    this.hideNext();
    this.currentQuestion.destroy();
    if (this.questions.isAtLastItem()) {
      return PubSub.publish('slides.next-slide');
    } else {
      this.questions.next();
      return this.showCurrentQuestion();
    }
  };

  Quiz.prototype.showNext = function() {
    return this.$nextBtn.removeClass("hidden");
  };

  Quiz.prototype.hideNext = function() {
    return this.$nextBtn.addClass("hidden");
  };

  return Quiz;

})(Component);

},{"misc/sequence":15,"slide-ux/components/component":21,"slide-ux/components/quiz/question":26}],28:[function(require,module,exports){
var Component, SelectionDialogue,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Component = require('slide-ux/components/component');

module.exports = SelectionDialogue = (function(superClass) {
  extend(SelectionDialogue, superClass);

  function SelectionDialogue($el, data) {
    var $left, $right, jadeData;
    jadeData = this.generateConfigData(data);
    this.$node = $(jadeTemplate['slide-ux/components/dialogue/selection-dialogue']());
    $left = $(jadeTemplate['slide-ux/components/dialogue/dialogue-details'](jadeData));
    $right = $(jadeTemplate['slide-ux/components/dialogue/dialogue-buttons'](jadeData));
    this.$node.append($left);
    this.$node.append($right);
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
        aristotle.commander["do"](data.click);
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
    return aristotle.commander["do"](item.click);
  };

  return SelectionDialogue;

})(Component);

},{"slide-ux/components/component":21}],29:[function(require,module,exports){
var Component, SimpleSelection,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Component = require('slide-ux/components/component');

module.exports = SimpleSelection = (function(superClass) {
  extend(SimpleSelection, superClass);

  function SimpleSelection($el, data) {
    var $right, jadeData;
    jadeData = this.generateConfigData(data);
    this.$node = $(jadeTemplate['slide-ux/components/dialogue/selection-dialogue']());
    $right = $(jadeTemplate['slide-ux/components/dialogue/dialogue-buttons'](jadeData));
    this.$node.append($right);
    this.addEventListeners(this.$node, data);
    SimpleSelection.__super__.constructor.call(this, $el, this.$node);
  }

  SimpleSelection.prototype.generateConfigData = function(data) {
    var i, item, j, jadeData, len, ref;
    this.items = {};
    jadeData = {};
    jadeData.items = [];
    jadeData.title = data.title;
    jadeData.subTitle = data.subTitle;
    ref = data.items;
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      item = ref[i];
      item.id = "item" + i;
      jadeData.items.push({
        txt: item.btnTxt,
        id: item.id
      });
      this.items[item.id] = item;
    }
    return jadeData;
  };

  SimpleSelection.prototype.addEventListeners = function($el, data) {
    var $buttons;
    $buttons = $(".button", $el);
    return $buttons.on("click", (function(_this) {
      return function(e) {
        var $targ;
        $targ = $(e.target);
        data = _this.items[$targ.attr('id')];
        aristotle.commander["do"](data.click);
        return console.log(data.click);
      };
    })(this));
  };

  return SimpleSelection;

})(Component);

},{"slide-ux/components/component":21}],30:[function(require,module,exports){
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
      return function(e) {
        return _this.playNextAction();
      };
    })(this));
    $('html').on("keydown", (function(_this) {
      return function(e) {
        if (e.which === 39) {
          return _this.playNextAction();
        }
      };
    })(this));
    PubSub.subscribe('ctanlee.activate', (function(_this) {
      return function(a, data) {
        return _this.playAction(data);
      };
    })(this));
    PubSub.subscribe('ctanlee.clear', (function(_this) {
      return function(a, data) {
        return _this.hideText();
      };
    })(this));
    PubSub.subscribe('ctanlee.gohome', (function(_this) {
      return function(a, data) {
        return _this.returnToStation();
      };
    })(this));
    PubSub.subscribe('ctanlee.hide', (function(_this) {
      return function(a, data) {
        return _this.$el.css({
          display: "none"
        });
      };
    })(this));
    PubSub.subscribe('ctanlee.show', (function(_this) {
      return function(a, data) {
        return _this.$el.css({
          display: "initial"
        });
      };
    })(this));
    PubSub.subscribe('ctanlee.add-event-listener', (function(_this) {
      return function(a, data) {
        return _this.addEventListener(data);
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
    pos = aristotle.movie.getGlobalPos(id);
    if (pos === null) {
      aristotle["throw"]("ctanlee wants to hover by `" + id + "`, but is unable to find an item with the id " + id);
      return;
    }
    pos.x += 0;
    pos.y += 0;
    return this.gotoPos(pos.x, pos.y);
  };

  Ctanlee.prototype.goto = function(action) {
    var me;
    if (typeof action.pos === "string") {
      if (action.delayMove != null) {
        me = this;
        return setTimeout(function() {
          return me.gotoItem(action.pos, action.delayMove);
        });
      } else {
        return this.gotoItem(action.pos);
      }
    } else {
      return this.gotoPos(action.pos[0], action.pos[1], action.pos[2], action.pos[3]);
    }
  };

  Ctanlee.prototype.addEventListener = function(data) {
    if (data.event === 'complete') {
      return this.track.addOnComplete((function(_this) {
        return function() {
          return aristotle.commander["do"](data.action);
        };
      })(this));
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
    var action;
    if (this.data.actions[actionId] == null) {
      aristotle["throw"]("ctanlee was asked to play the action named `" + actionId + "`, but no action with that id exists.");
      return;
    }
    this.setFilter('black-glow');
    action = this.overlayDefaults(actionId);
    if (action.action != null) {
      aristotle.commander["do"](action.action);
    }
    if (action.emo != null) {
      this.setEmotion(action.emo);
    }
    if (action.pos != null) {
      this.goto(action);
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

},{"episode/audio-track":3,"misc/sequence":15}],31:[function(require,module,exports){
var GenericUi;

module.exports = GenericUi = (function() {
  function GenericUi($el) {
    var $node;
    $node = $(jadeTemplate['misc/generic-ui']({}));
    shadowIconsInstance.svgReplaceWithString(pxSvgIconString, $node);
    this.$continueStrip = $(".continue-strip", $node);
    $(".continue-btn", $node).on("click", (function(_this) {
      return function() {
        PubSub.publish("slides.next-slide");
        return _this.hideContinueStrip();
      };
    })(this));
    this.hideContinueStrip();
    $el.append($node);
    PubSub.subscribe('continue.show', (function(_this) {
      return function() {
        return _this.showContinueStrip();
      };
    })(this));
  }

  GenericUi.prototype.showContinueStrip = function() {
    return this.$continueStrip.css({
      display: "initial"
    });
  };

  GenericUi.prototype.hideContinueStrip = function() {
    return this.$continueStrip.css({
      display: "none"
    });
  };

  return GenericUi;

})();

},{}],32:[function(require,module,exports){
var Ctanlee, DefenderCards, Dialogue, ExploreCards, GenericUiElements, GhostUX, Quiz, SelectionDialogue, SimpleSelection, SlideUX;

Ctanlee = require('slide-ux/ctanlee/Ctanlee');

DefenderCards = require('slide-ux/components/defender-cards');

Dialogue = require('slide-ux/components/dialogue');

ExploreCards = require('slide-ux/components/explore-cards');

GhostUX = require('slide-ux/components/ghost-ux');

Quiz = require('slide-ux/components/quiz/quiz');

SelectionDialogue = require('slide-ux/components/selection-dialogue');

SimpleSelection = require('slide-ux/components/simple-selection');

GenericUiElements = require('slide-ux/generic-ui');

module.exports = SlideUX = (function() {
  function SlideUX($el) {
    this.$el = $el;
    this.components = [];
    this.ctanlee = new Ctanlee(this.$el);
    this.genericUi = new GenericUiElements(this.$el);
  }

  SlideUX.prototype.populate = function(data) {
    var component, i, len, ref, results;
    this.removeCurrentComponents();
    this.components = [];
    if ((data != null ? data.components : void 0) == null) {
      return;
    }
    ref = data.components;
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      component = ref[i];
      results.push(this.components.push(this.addComponent(component)));
    }
    return results;
  };

  SlideUX.prototype.addComponent = function(componentData) {
    var component;
    switch (componentData.kind) {
      case "selection-dialogue":
        component = new SelectionDialogue(this.$el, componentData.config);
        break;
      case "simple-selection":
        component = new SimpleSelection(this.$el, componentData.config);
        break;
      case "dialogue":
        component = new Dialogue(this.$el, componentData.config);
        break;
      case "ghost-ux":
        component = new GhostUX(this.$el, componentData.config);
        break;
      case "quiz":
        component = new Quiz(this.$el, componentData.config);
        break;
      case "defender-cards":
        component = new DefenderCards(this.$el, componentData.config);
        break;
      case "explore-cards":
        component = new ExploreCards(this.$el, componentData.config);
        break;
      default:
        aristotle["throw"]("tried to create an unrecognized component type: `" + componentData.kind + "`");
        return null;
    }
    return component;
  };

  SlideUX.prototype.removeCurrentComponents = function() {
    var component, i, len, ref, results;
    ref = this.components;
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      component = ref[i];
      results.push(component.destroy());
    }
    return results;
  };

  return SlideUX;

})();

},{"slide-ux/components/defender-cards":22,"slide-ux/components/dialogue":23,"slide-ux/components/explore-cards":24,"slide-ux/components/ghost-ux":25,"slide-ux/components/quiz/quiz":27,"slide-ux/components/selection-dialogue":28,"slide-ux/components/simple-selection":29,"slide-ux/ctanlee/Ctanlee":30,"slide-ux/generic-ui":31}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9ndWxwLWNvZmZlZWlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiYXJpc3RvdGxlLmNvZmZlZSIsImNocm9tZS9jaHJvbWUtdWkuY29mZmVlIiwiZXBpc29kZS9hdWRpby10cmFjay5jb2ZmZWUiLCJlcGlzb2RlL2NoYXB0ZXIuY29mZmVlIiwiZXBpc29kZS9lcGlzb2RlLmNvZmZlZSIsImVwaXNvZGUvc2xpZGUuY29mZmVlIiwiZXBpc29kZS9zbGlkZXMuY29mZmVlIiwibWlzYy9TZXF1ZW5jZS5jb2ZmZWUiLCJtaXNjL2Fzc2V0LXByZWxvYWRlci5jb2ZmZWUiLCJtaXNjL2NvbW1hbmRlci5jb2ZmZWUiLCJtaXNjL2Rldi10b29scy5jb2ZmZWUiLCJtaXNjL2VwaXNvZGUtbG9hZGVyLmNvZmZlZSIsIm1pc2MvZ2xvYmFsLXZhcnMuY29mZmVlIiwibWlzYy9sb2dnZXIuY29mZmVlIiwibW92aWUvZHluYW1pYy1hc3NldHMuY29mZmVlIiwibW92aWUvaGlnaGxpZ2h0ZXIuY29mZmVlIiwibW92aWUvbGF5ZXIuY29mZmVlIiwibW92aWUvbW92aWUuY29mZmVlIiwibW92aWUvc3ZnLWFuaW1hdGlvbi5jb2ZmZWUiLCJzbGlkZS11eC9jb21wb25lbnRzL2NvbXBvbmVudC5jb2ZmZWUiLCJzbGlkZS11eC9jb21wb25lbnRzL2RlZmVuZGVyLWNhcmRzLmNvZmZlZSIsInNsaWRlLXV4L2NvbXBvbmVudHMvZGlhbG9ndWUuY29mZmVlIiwic2xpZGUtdXgvY29tcG9uZW50cy9leHBsb3JlLWNhcmRzLmNvZmZlZSIsInNsaWRlLXV4L2NvbXBvbmVudHMvZ2hvc3QtdXguY29mZmVlIiwic2xpZGUtdXgvY29tcG9uZW50cy9xdWl6L3F1ZXN0aW9uLmNvZmZlZSIsInNsaWRlLXV4L2NvbXBvbmVudHMvcXVpei9xdWl6LmNvZmZlZSIsInNsaWRlLXV4L2NvbXBvbmVudHMvc2VsZWN0aW9uLWRpYWxvZ3VlLmNvZmZlZSIsInNsaWRlLXV4L2NvbXBvbmVudHMvc2ltcGxlLXNlbGVjdGlvbi5jb2ZmZWUiLCJzbGlkZS11eC9jdGFubGVlL0N0YW5sZWUuY29mZmVlIiwic2xpZGUtdXgvZ2VuZXJpYy11aS5jb2ZmZWUiLCJzbGlkZS11eC9zbGlkZS11eC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUM3RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9RQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgQXJpc3RvdGxlLCBDaHJvbWVVSSwgQ29tbWFuZGVyLCBEZXZUb29scywgRXBpc29kZSwgRXBpc29kZUxvYWRlciwgR2xvYmFsVmFycywgTG9nZ2VyLCBNb3ZpZSwgU2xpZGVVWCxcbiAgYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH07XG5cbkVwaXNvZGUgPSByZXF1aXJlKFwiZXBpc29kZS9lcGlzb2RlXCIpO1xuXG5DaHJvbWVVSSA9IHJlcXVpcmUoXCJjaHJvbWUvY2hyb21lLXVpXCIpO1xuXG5EZXZUb29scyA9IHJlcXVpcmUoJ21pc2MvZGV2LXRvb2xzJyk7XG5cbk1vdmllID0gcmVxdWlyZSgnbW92aWUvbW92aWUnKTtcblxuRXBpc29kZUxvYWRlciA9IHJlcXVpcmUoJ21pc2MvZXBpc29kZS1sb2FkZXInKTtcblxuU2xpZGVVWCA9IHJlcXVpcmUoJ3NsaWRlLXV4L3NsaWRlLXV4Jyk7XG5cbkNvbW1hbmRlciA9IHJlcXVpcmUoJ21pc2MvY29tbWFuZGVyJyk7XG5cbkdsb2JhbFZhcnMgPSByZXF1aXJlKCdtaXNjL2dsb2JhbC12YXJzJyk7XG5cbkxvZ2dlciA9IHJlcXVpcmUoJ21pc2MvbG9nZ2VyJyk7XG5cbkFyaXN0b3RsZSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gQXJpc3RvdGxlKCRlbCwgZXBpc29kZVJvb3QpIHtcbiAgICB2YXIgZXBpc29kZUxvYWRlcjtcbiAgICB0aGlzLmVwaXNvZGVSb290ID0gZXBpc29kZVJvb3Q7XG4gICAgdGhpcy5vbkpzb25Mb2FkZWQgPSBiaW5kKHRoaXMub25Kc29uTG9hZGVkLCB0aGlzKTtcbiAgICB3aW5kb3cuYXJpc3RvdGxlID0gdGhpcztcbiAgICB0aGlzLnNldERldk1vZGUodHJ1ZSk7XG4gICAgdGhpcy5idWlsZCgkZWwpO1xuICAgIGVwaXNvZGVMb2FkZXIgPSBuZXcgRXBpc29kZUxvYWRlcih0aGlzLm9uSnNvbkxvYWRlZCk7XG4gIH1cblxuICBBcmlzdG90bGUucHJvdG90eXBlLm9uSnNvbkxvYWRlZCA9IGZ1bmN0aW9uKGVwaXNvZGVEYXRhKSB7XG4gICAgdmFyIGVwaXNvZGU7XG4gICAgcmV0dXJuIGVwaXNvZGUgPSBuZXcgRXBpc29kZShlcGlzb2RlRGF0YSwgdGhpcy5tb3ZpZSwgdGhpcy5zbGlkZVVYKTtcbiAgfTtcblxuICBBcmlzdG90bGUucHJvdG90eXBlLmJ1aWxkID0gZnVuY3Rpb24oJGVsKSB7XG4gICAgdmFyICRiYXNlLCBjb21tYW5kZXIsIGdsb2JhbHMsIHNoYWRvd0ljb25zO1xuICAgICRiYXNlID0gJChqYWRlVGVtcGxhdGVbJ2FyaXN0b3RsZSddKHt9KSk7XG4gICAgJGVsLmFwcGVuZCgkYmFzZSk7XG4gICAgc2hhZG93SWNvbnMgPSBuZXcgcHhpY29ucy5TaGFkb3dJY29ucygpO1xuICAgIHNoYWRvd0ljb25zSW5zdGFuY2Uuc3ZnUmVwbGFjZVdpdGhTdHJpbmcocHhTdmdJY29uU3RyaW5nLCAkYmFzZSk7XG4gICAgY29tbWFuZGVyID0gbmV3IENvbW1hbmRlcigpO1xuICAgIGdsb2JhbHMgPSBuZXcgR2xvYmFsVmFycygpO1xuICAgIHRoaXMuY2hyb21lVUkgPSBuZXcgQ2hyb21lVUkoJChcIi5jaHJvbWVcIiwgJGJhc2UpKTtcbiAgICB0aGlzLnNsaWRlVVggPSBuZXcgU2xpZGVVWCgkKFwiLnNsaWRlLXV4XCIsICRiYXNlKSk7XG4gICAgcmV0dXJuIHRoaXMubW92aWUgPSBuZXcgTW92aWUoJChcIi5tb3ZpZVwiLCAkYmFzZSkpO1xuICB9O1xuXG4gIEFyaXN0b3RsZS5wcm90b3R5cGUuc2V0RGV2TW9kZSA9IGZ1bmN0aW9uKGRldk1vZGUpIHtcbiAgICB2YXIgbG9nZ2VyO1xuICAgIGxvZ2dlciA9IG5ldyBMb2dnZXIoJCgnYm9keScpLCBkZXZNb2RlKTtcbiAgICByZXR1cm4gYXJpc3RvdGxlLmRldlRvb2xzID0gbmV3IERldlRvb2xzKGRldk1vZGUpO1xuICB9O1xuXG4gIHJldHVybiBBcmlzdG90bGU7XG5cbn0pKCk7XG5cbndpbmRvdy5BcmlzdG90bGUgPSBBcmlzdG90bGU7XG4iLCJ2YXIgQ2hyb21lVUk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2hyb21lVUkgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIENocm9tZVVJKCRlbCkge1xuICAgIHRoaXMuJGVsID0gJGVsO1xuICAgIHRoaXMuYnVpbGQodGhpcy4kZWwpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoXCJjaHJvbWUuaGlkZVwiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5oaWRlKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKFwiY2hyb21lLnNob3dcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuc2hvdygpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH1cblxuICBDaHJvbWVVSS5wcm90b3R5cGUuYnVpbGQgPSBmdW5jdGlvbigkZWwpIHtcbiAgICB2YXIgJHByb2dyZXNzLCAkdG9wLCBkYXRhO1xuICAgIHRoaXMuJGVsID0gJGVsO1xuICAgIGRhdGEgPSB7XG4gICAgICBuYW1lOiBcIkpvaG4gXFxcIkRlYWRleWVcXFwiIE5pbWJ1c1wiLFxuICAgICAgZXBpc29kZTogXCIxXCJcbiAgICB9O1xuICAgIHRoaXMuZ2V0UmFuayhkYXRhLCBcImN5YmVyLWNhZGV0XCIpO1xuICAgICR0b3AgPSAkKGphZGVUZW1wbGF0ZVsnY2hyb21lLXVpL3RvcCddKGRhdGEpKTtcbiAgICB0aGlzLiRlbC5hcHBlbmQoJHRvcCk7XG4gICAgJHByb2dyZXNzID0gJChqYWRlVGVtcGxhdGVbJ2Nocm9tZS11aS9wcm9ncmVzcyddKHt9KSk7XG4gICAgdGhpcy4kZWwuYXBwZW5kKCRwcm9ncmVzcyk7XG4gICAgcmV0dXJuIHNoYWRvd0ljb25zSW5zdGFuY2Uuc3ZnUmVwbGFjZVdpdGhTdHJpbmcocHhTdmdJY29uU3RyaW5nLCB0aGlzLiRlbCk7XG4gIH07XG5cbiAgQ2hyb21lVUkucHJvdG90eXBlLmdldFJhbmsgPSBmdW5jdGlvbihkYXRhLCBlcGlzb2RlKSB7XG4gICAgc3dpdGNoIChlcGlzb2RlKSB7XG4gICAgICBjYXNlICdyZWNydWl0JzpcbiAgICAgICAgZGF0YS5yYW5rID0gXCJyZWNydWl0XCI7XG4gICAgICAgIHJldHVybiBkYXRhLmJhZGdlID0gXCJyYW5rLWJhZGdlLXJlY3J1aXRcIjtcbiAgICAgIGNhc2UgJ2NhZGV0JzpcbiAgICAgICAgZGF0YS5yYW5rID0gXCJjYWRldFwiO1xuICAgICAgICByZXR1cm4gZGF0YS5iYWRnZSA9IFwicmFuay1iYWRnZS1jYWRldFwiO1xuICAgICAgY2FzZSAnY2FkZXQtZmlyc3QtY2xhc3MnOlxuICAgICAgICBkYXRhLnJhbmsgPSBcIkNhZGV0IEZpcnN0IENsYXNzXCI7XG4gICAgICAgIHJldHVybiBkYXRhLmJhZGdlID0gXCJyYW5rLWJhZGdlLWNhZGV0LWZpcnN0LWNsYXNzXCI7XG4gICAgICBjYXNlICd0ZWNobmljYWwtY2FkZXQnOlxuICAgICAgICBkYXRhLnJhbmsgPSBcIlRlY2huaWNhbCBDYWRldFwiO1xuICAgICAgICByZXR1cm4gZGF0YS5iYWRnZSA9IFwicmFuay1iYWRnZS10ZWNobmljYWwtY2FkZXRcIjtcbiAgICAgIGNhc2UgJ2N5YmVyLWNhZGV0JzpcbiAgICAgICAgZGF0YS5yYW5rID0gXCJDeWJlciBDYWRldFwiO1xuICAgICAgICByZXR1cm4gZGF0YS5iYWRnZSA9IFwicmFuay1iYWRnZS1jeWJlci1jYWRldFwiO1xuICAgIH1cbiAgfTtcblxuICBDaHJvbWVVSS5wcm90b3R5cGUuaGlkZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRlbC5jc3Moe1xuICAgICAgb3BhY2l0eTogMFxuICAgIH0pO1xuICB9O1xuXG4gIENocm9tZVVJLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJGVsLmNzcyh7XG4gICAgICBvcGFjaXR5OiAxXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIENocm9tZVVJO1xuXG59KSgpO1xuIiwidmFyIEF1ZGlvVHJhY2s7XG5cbm1vZHVsZS5leHBvcnRzID0gQXVkaW9UcmFjayA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gQXVkaW9UcmFjayhzcmMpIHtcbiAgICB0aGlzLnNyYyA9IHNyYztcbiAgICBBdWRpb1RyYWNrLmluaXRTb3VuZFNldHRpbmdzKCk7XG4gIH1cblxuICBBdWRpb1RyYWNrLnByb3RvdHlwZS5wbGF5ID0gZnVuY3Rpb24ob25Db21wbGV0ZSkge1xuICAgIHRoaXMuc291bmQgPSBjcmVhdGVqcy5Tb3VuZC5wbGF5KHRoaXMuc3JjLCBBdWRpb1RyYWNrLnBwYyk7XG4gICAgcmV0dXJuIHRoaXMuYWRkT25Db21wbGV0ZShvbkNvbXBsZXRlKTtcbiAgfTtcblxuICBBdWRpb1RyYWNrLnByb3RvdHlwZS5hZGRPbkNvbXBsZXRlID0gZnVuY3Rpb24ob25Db21wbGV0ZSkge1xuICAgIGlmIChvbkNvbXBsZXRlICE9IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLnNvdW5kLmFkZEV2ZW50TGlzdGVuZXIoXCJjb21wbGV0ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG9uQ29tcGxldGUoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBBdWRpb1RyYWNrLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc291bmQuc3RvcCgpO1xuICB9O1xuXG4gIEF1ZGlvVHJhY2sucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnNvdW5kLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjb21wbGV0ZVwiKTtcbiAgICByZXR1cm4gdGhpcy5zb3VuZC5kZXN0cm95KCk7XG4gIH07XG5cbiAgQXVkaW9UcmFjay5pbml0U291bmRTZXR0aW5ncyA9IGZ1bmN0aW9uKHZvbHVtZSkge1xuICAgIGlmICh2b2x1bWUgPT0gbnVsbCkge1xuICAgICAgdm9sdW1lID0gMTtcbiAgICB9XG4gICAgaWYgKEF1ZGlvVHJhY2sucHBjICE9IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIEF1ZGlvVHJhY2sucHBjID0gbmV3IGNyZWF0ZWpzLlBsYXlQcm9wc0NvbmZpZygpLnNldCh7XG4gICAgICBpbnRlcnJ1cHQ6IGNyZWF0ZWpzLlNvdW5kLklOVEVSUlVQVF9BTlksXG4gICAgICB2b2x1bWU6IHZvbHVtZSxcbiAgICAgIHBhbjogMVxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBBdWRpb1RyYWNrO1xuXG59KSgpO1xuIiwidmFyIENoYXB0ZXIsIFByZWxvYWRlciwgU2xpZGVzLFxuICBiaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfTtcblxuU2xpZGVzID0gcmVxdWlyZSgnZXBpc29kZS9zbGlkZXMnKTtcblxuUHJlbG9hZGVyID0gcmVxdWlyZSgnbWlzYy9hc3NldC1wcmVsb2FkZXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSBDaGFwdGVyID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBDaGFwdGVyKGNoYXB0ZXJEYXRhLCBtb3ZpZSwgdXgsIG9uQ2hhcHRlckNvbXBldGUpIHtcbiAgICB0aGlzLmNoYXB0ZXJEYXRhID0gY2hhcHRlckRhdGE7XG4gICAgdGhpcy5tb3ZpZSA9IG1vdmllO1xuICAgIHRoaXMudXggPSB1eDtcbiAgICB0aGlzLm9uQ2hhcHRlckNvbXBldGUgPSBvbkNoYXB0ZXJDb21wZXRlO1xuICAgIHRoaXMub25TbGlkZXNDb21wbGV0ZSA9IGJpbmQodGhpcy5vblNsaWRlc0NvbXBsZXRlLCB0aGlzKTtcbiAgICB0aGlzLnN0YXJ0U2xpZGVzID0gYmluZCh0aGlzLnN0YXJ0U2xpZGVzLCB0aGlzKTtcbiAgfVxuXG4gIENoYXB0ZXIucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHByZWxvYWRlcjtcbiAgICBhcmlzdG90bGUuZGV2VG9vbHMuZ28odGhpcy5jaGFwdGVyRGF0YS5kZXYsIHRoaXMuY2hhcHRlckRhdGEuc2xpZGVzKTtcbiAgICByZXR1cm4gcHJlbG9hZGVyID0gbmV3IFByZWxvYWRlcih0aGlzLmNoYXB0ZXJEYXRhLCB0aGlzLnN0YXJ0U2xpZGVzKTtcbiAgfTtcblxuICBDaGFwdGVyLnByb3RvdHlwZS5zdGFydFNsaWRlcyA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc2xpZGVzID0gbmV3IFNsaWRlcyh0aGlzLmNoYXB0ZXJEYXRhLCB0aGlzLm1vdmllLCB0aGlzLnV4LCB0aGlzLm9uU2xpZGVzQ29tcGxldGUpO1xuICAgIHJldHVybiB0aGlzLnNsaWRlcy5zdGFydCgpO1xuICB9O1xuXG4gIENoYXB0ZXIucHJvdG90eXBlLm9uU2xpZGVzQ29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5vbkNoYXB0ZXJDb21wZXRlKCk7XG4gIH07XG5cbiAgcmV0dXJuIENoYXB0ZXI7XG5cbn0pKCk7XG4iLCJ2YXIgQ2hhcHRlciwgRXBpc29kZSwgU2VxdWVuY2UsXG4gIGJpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9O1xuXG5DaGFwdGVyID0gcmVxdWlyZSgnZXBpc29kZS9jaGFwdGVyJyk7XG5cblNlcXVlbmNlID0gcmVxdWlyZSgnbWlzYy9TZXF1ZW5jZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVwaXNvZGUgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIEVwaXNvZGUodHJhaW5pbmdEYXRhLCBtb3ZpZSwgdXgpIHtcbiAgICB0aGlzLm1vdmllID0gbW92aWU7XG4gICAgdGhpcy5jaGFwdGVyQ29tcGxldGUgPSBiaW5kKHRoaXMuY2hhcHRlckNvbXBsZXRlLCB0aGlzKTtcbiAgICB0aGlzLm5leHRDaGFwdGVyID0gYmluZCh0aGlzLm5leHRDaGFwdGVyLCB0aGlzKTtcbiAgICBhcmlzdG90bGUuZGV2VG9vbHMuZ28odHJhaW5pbmdEYXRhLmRldiwgdHJhaW5pbmdEYXRhLmNoYXB0ZXJzKTtcbiAgICB0aGlzLmNyZWF0ZUNoYXB0ZXJzKHRyYWluaW5nRGF0YSwgdXgpO1xuICB9XG5cbiAgRXBpc29kZS5wcm90b3R5cGUuY3JlYXRlQ2hhcHRlcnMgPSBmdW5jdGlvbih0cmFpbmluZ0RhdGEsIHV4KSB7XG4gICAgdmFyIGNoYXB0ZXJEYXRhLCBjaGFwdGVycywgaSwgbGVuLCByZWY7XG4gICAgY2hhcHRlcnMgPSBbXTtcbiAgICByZWYgPSB0cmFpbmluZ0RhdGEuY2hhcHRlcnM7XG4gICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjaGFwdGVyRGF0YSA9IHJlZltpXTtcbiAgICAgIGNoYXB0ZXJzLnB1c2gobmV3IENoYXB0ZXIoY2hhcHRlckRhdGEsIHRoaXMubW92aWUsIHV4LCB0aGlzLmNoYXB0ZXJDb21wbGV0ZSkpO1xuICAgIH1cbiAgICB0aGlzLmNoYXB0ZXJzID0gbmV3IFNlcXVlbmNlKGNoYXB0ZXJzKTtcbiAgICByZXR1cm4gdGhpcy5wbGF5Q2hhcHRlcigpO1xuICB9O1xuXG4gIEVwaXNvZGUucHJvdG90eXBlLm5leHRDaGFwdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuY2hhcHRlcnMuaXNBdExhc3RJdGVtKCkpIHtcbiAgICAgIHJldHVybiB0aGlzLmVwaXNvZGVDb21wbGV0ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNoYXB0ZXJzLm5leHQoKTtcbiAgICAgIHJldHVybiB0aGlzLnBsYXlDaGFwdGVyKCk7XG4gICAgfVxuICB9O1xuXG4gIEVwaXNvZGUucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucGxheUNoYXB0ZXIoKTtcbiAgfTtcblxuICBFcGlzb2RlLnByb3RvdHlwZS5jaGFwdGVyQ29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5uZXh0Q2hhcHRlcigpO1xuICB9O1xuXG4gIEVwaXNvZGUucHJvdG90eXBlLnBsYXlDaGFwdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5tb3ZpZS5yZXNldCgpO1xuICAgIHJldHVybiB0aGlzLmNoYXB0ZXJzLmdldEN1cnJlbnRJdGVtKCkuc3RhcnQodGhpcy5jaGFwdGVyQ29tcGxldGUpO1xuICB9O1xuXG4gIEVwaXNvZGUucHJvdG90eXBlLmVwaXNvZGVDb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBjb25zb2xlLmxvZyhcImVwaXNvZGUgY29tcGxldGVcIik7XG4gIH07XG5cbiAgcmV0dXJuIEVwaXNvZGU7XG5cbn0pKCk7XG4iLCJ2YXIgQXVkaW9UcmFjaywgU1ZHQW5pbWF0aW9uLCBTbGlkZSxcbiAgYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH07XG5cbkF1ZGlvVHJhY2sgPSByZXF1aXJlKFwiZXBpc29kZS9hdWRpby10cmFja1wiKTtcblxuU1ZHQW5pbWF0aW9uID0gcmVxdWlyZShcIm1vdmllL3N2Zy1hbmltYXRpb25cIik7XG5cbm1vZHVsZS5leHBvcnRzID0gU2xpZGUgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIFNsaWRlKG1vdmllLCBzbGlkZVVYLCBzbGlkZURhdGEsIG9uU2xpZGVDb21wbGV0ZSkge1xuICAgIHRoaXMubW92aWUgPSBtb3ZpZTtcbiAgICB0aGlzLnNsaWRlVVggPSBzbGlkZVVYO1xuICAgIHRoaXMuc2xpZGVEYXRhID0gc2xpZGVEYXRhO1xuICAgIHRoaXMub25TbGlkZUNvbXBsZXRlID0gb25TbGlkZUNvbXBsZXRlO1xuICAgIHRoaXMucGxheSA9IGJpbmQodGhpcy5wbGF5LCB0aGlzKTtcbiAgfVxuXG4gIFNsaWRlLnByb3RvdHlwZS5wbGF5ID0gZnVuY3Rpb24ob25Db21wbGV0ZSkge1xuICAgIHRoaXMubW92aWUucG9wdWxhdGUodGhpcy5zbGlkZURhdGEubW92aWUpO1xuICAgIHRoaXMuc2xpZGVVWC5wb3B1bGF0ZSh0aGlzLnNsaWRlRGF0YS51eCk7XG4gICAgdGhpcy5zZXREdXJhdGlvbigpO1xuICAgIHRoaXMucnVuQ3RhbmxlZSh0aGlzLnNsaWRlRGF0YS5jdGFubGVlKTtcbiAgICByZXR1cm4gdGhpcy5ydW5BY3Rpb25zKHRoaXMuc2xpZGVEYXRhLmFjdGlvbik7XG4gIH07XG5cbiAgU2xpZGUucHJvdG90eXBlLnJ1bkFjdGlvbnMgPSBmdW5jdGlvbihhY3Rpb24pIHtcbiAgICBpZiAoYWN0aW9uID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIGFyaXN0b3RsZS5jb21tYW5kZXJbXCJkb1wiXShhY3Rpb24pO1xuICB9O1xuXG4gIFNsaWRlLnByb3RvdHlwZS5zZXREdXJhdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjdGFubGVlU3Vic2NyaXB0aW9uLCBsaXN0ZW5TdWJzY3JpcHRpb24sIHV4U3Vic2NyaXB0aW9uO1xuICAgIGlmICh0aGlzLnNsaWRlRGF0YS5kdXJhdGlvbiA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHN3aXRjaCAodGhpcy5zbGlkZURhdGEuZHVyYXRpb24ua2luZCkge1xuICAgICAgY2FzZSBcInRpbWVcIjpcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQodGhpcy5vblNsaWRlQ29tcGxldGUsIHRoaXMuc2xpZGVEYXRhLmR1cmF0aW9uLnNlY29uZHMgKiAxMDAwKTtcbiAgICAgIGNhc2UgXCJ1c2VyXCI6XG4gICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcIndhaXRpbmcgb24gdGhlIHVzZXJcIik7XG4gICAgICBjYXNlIFwidXhcIjpcbiAgICAgICAgcmV0dXJuIHV4U3Vic2NyaXB0aW9uID0gUHViU3ViLnN1YnNjcmliZSgndXguY29tcGxldGUnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBQdWJTdWIudW5zdWJzY3JpYmUodXhTdWJzY3JpcHRpb24pO1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLm9uU2xpZGVDb21wbGV0ZSgpO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pKHRoaXMpKTtcbiAgICAgIGNhc2UgXCJjdGFubGVlXCI6XG4gICAgICAgIHJldHVybiBjdGFubGVlU3Vic2NyaXB0aW9uID0gUHViU3ViLnN1YnNjcmliZSgnY3RhbmxlZS5jb21wbGV0ZScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIFB1YlN1Yi51bnN1YnNjcmliZShjdGFubGVlU3Vic2NyaXB0aW9uKTtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5vblNsaWRlQ29tcGxldGUoKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KSh0aGlzKSk7XG4gICAgICBjYXNlIFwibGlzdGVuXCI6XG4gICAgICAgIHJldHVybiBsaXN0ZW5TdWJzY3JpcHRpb24gPSBQdWJTdWIuc3Vic2NyaWJlKHRoaXMuc2xpZGVEYXRhLmR1cmF0aW9uLmV2ZW50LCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBQdWJTdWIudW5zdWJzY3JpYmUobGlzdGVuU3Vic2NyaXB0aW9uKTtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5vblNsaWRlQ29tcGxldGUoKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KSh0aGlzKSk7XG4gICAgfVxuICB9O1xuXG4gIFNsaWRlLnByb3RvdHlwZS5ydW5DdGFubGVlID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIGlmIChkYXRhICE9IG51bGwpIHtcbiAgICAgIHJldHVybiBhcmlzdG90bGUuY3RhbmxlZS5hY3RpdmF0ZShkYXRhKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFNsaWRlO1xuXG59KSgpO1xuIiwidmFyIFNlcXVlbmNlLCBTbGlkZSwgU2xpZGVzLFxuICBiaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfTtcblxuU2xpZGUgPSByZXF1aXJlKCdlcGlzb2RlL3NsaWRlJyk7XG5cblNlcXVlbmNlID0gcmVxdWlyZSgnbWlzYy9zZXF1ZW5jZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNsaWRlcyA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gU2xpZGVzKHRyYWluaW5nRGF0YSwgbW92aWUsIHV4LCBvblNob3dDb21wbGV0ZSkge1xuICAgIHRoaXMub25TaG93Q29tcGxldGUgPSBvblNob3dDb21wbGV0ZTtcbiAgICB0aGlzLnNsaWRlQ29tcGxldGUgPSBiaW5kKHRoaXMuc2xpZGVDb21wbGV0ZSwgdGhpcyk7XG4gICAgdGhpcy5uZXh0U2xpZGUgPSBiaW5kKHRoaXMubmV4dFNsaWRlLCB0aGlzKTtcbiAgICBhcmlzdG90bGUuc2xpZGVzID0gdGhpcztcbiAgICB0aGlzLmNyZWF0ZVNsaWRlcyh0cmFpbmluZ0RhdGEsIG1vdmllLCB1eCk7XG4gICAgUHViU3ViLnN1YnNjcmliZSgnc2xpZGVzLm5leHQtc2xpZGUnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJydW4gbmV4dCBzbGlkZS4uLi5cIik7XG4gICAgICAgIHJldHVybiBfdGhpcy5uZXh0U2xpZGUoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9XG5cbiAgU2xpZGVzLnByb3RvdHlwZS5jcmVhdGVTbGlkZXMgPSBmdW5jdGlvbih0cmFpbmluZ0RhdGEsIG1vdmllLCB1eCkge1xuICAgIHZhciBpLCBsZW4sIHJlZiwgc2xpZGVEYXRhLCBzbGlkZXM7XG4gICAgc2xpZGVzID0gW107XG4gICAgcmVmID0gdHJhaW5pbmdEYXRhLnNsaWRlcztcbiAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHNsaWRlRGF0YSA9IHJlZltpXTtcbiAgICAgIHNsaWRlcy5wdXNoKG5ldyBTbGlkZShtb3ZpZSwgdXgsIHNsaWRlRGF0YSwgdGhpcy5zbGlkZUNvbXBsZXRlKSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnNsaWRlcyA9IG5ldyBTZXF1ZW5jZShzbGlkZXMpO1xuICB9O1xuXG4gIFNsaWRlcy5wcm90b3R5cGUubmV4dFNsaWRlID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuc2xpZGVzLmlzQXRMYXN0SXRlbSgpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zbGlkZVNob3dDb21wbGV0ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNsaWRlcy5uZXh0KCk7XG4gICAgICByZXR1cm4gdGhpcy5wbGF5U2xpZGUoKTtcbiAgICB9XG4gIH07XG5cbiAgU2xpZGVzLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBsYXlTbGlkZSgpO1xuICB9O1xuXG4gIFNsaWRlcy5wcm90b3R5cGUuc2xpZGVDb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm5leHRTbGlkZSgpO1xuICB9O1xuXG4gIFNsaWRlcy5wcm90b3R5cGUucGxheVNsaWRlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2xpZGVzLmdldEN1cnJlbnRJdGVtKCkucGxheSh0aGlzLnNsaWRlQ29tcGxldGUpO1xuICB9O1xuXG4gIFNsaWRlcy5wcm90b3R5cGUuc2xpZGVTaG93Q29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5vblNob3dDb21wbGV0ZSgpO1xuICB9O1xuXG4gIFNsaWRlcy5wcm90b3R5cGUuZ2V0Q3VycmVudEluZGV4ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2xpZGVzLmdldEN1cnJlbnRJdGVtKCkuc2xpZGVEYXRhLmluZGV4O1xuICB9O1xuXG4gIFNsaWRlcy5wcm90b3R5cGUuZ2V0SW5kZXhBbmRUb3RhbCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAodGhpcy5zbGlkZXMuZ2V0Q3VycmVudEl0ZW0oKS5zbGlkZURhdGEuaW5kZXgpICsgXCIvXCIgKyB0aGlzLnNsaWRlcy50b3RhbEl0ZW1zO1xuICB9O1xuXG4gIHJldHVybiBTbGlkZXM7XG5cbn0pKCk7XG4iLCJ2YXIgU2VxdWVuY2U7XG5cbm1vZHVsZS5leHBvcnRzID0gU2VxdWVuY2UgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIFNlcXVlbmNlKGl0ZW1zKSB7XG4gICAgdGhpcy5pdGVtcyA9IGl0ZW1zO1xuICAgIHRoaXMuY3VycmVudEl0ZW1JbmRleCA9IDA7XG4gICAgdGhpcy50b3RhbEl0ZW1zID0gdGhpcy5pdGVtcy5sZW5ndGg7XG4gIH1cblxuICBTZXF1ZW5jZS5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uKGxvb3BPbk92ZXJTaG9vdCkge1xuICAgIGlmIChsb29wT25PdmVyU2hvb3QgPT0gbnVsbCkge1xuICAgICAgbG9vcE9uT3ZlclNob290ID0gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmluY3JhbWVudEl0ZW1JbmRleCgxLCBsb29wT25PdmVyU2hvb3QpO1xuICB9O1xuXG4gIFNlcXVlbmNlLnByb3RvdHlwZS5wcmV2ID0gZnVuY3Rpb24obG9vcE9uT3ZlclNob290KSB7XG4gICAgaWYgKGxvb3BPbk92ZXJTaG9vdCA9PSBudWxsKSB7XG4gICAgICBsb29wT25PdmVyU2hvb3QgPSBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaW5jcmFtZW50SXRlbUluZGV4KC0xLCBsb29wT25PdmVyU2hvb3QpO1xuICB9O1xuXG4gIFNlcXVlbmNlLnByb3RvdHlwZS5pc0F0TGFzdEl0ZW0gPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50SXRlbUluZGV4ID09PSB0aGlzLnRvdGFsSXRlbXMgLSAxKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICBTZXF1ZW5jZS5wcm90b3R5cGUuZ2V0Q3VycmVudEl0ZW0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtc1t0aGlzLmN1cnJlbnRJdGVtSW5kZXhdO1xuICB9O1xuXG4gIFNlcXVlbmNlLnByb3RvdHlwZS5jdXJyZW50SXRlbSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldEN1cnJlbnRJdGVtKCk7XG4gIH07XG5cbiAgU2VxdWVuY2UucHJvdG90eXBlLmluY3JhbWVudEl0ZW1JbmRleCA9IGZ1bmN0aW9uKGluY3JhbWVudCwgbG9vcE9uT3ZlclNob290KSB7XG4gICAgdmFyIG5ld0luZGV4O1xuICAgIGlmIChsb29wT25PdmVyU2hvb3QgPT0gbnVsbCkge1xuICAgICAgbG9vcE9uT3ZlclNob290ID0gZmFsc2U7XG4gICAgfVxuICAgIG5ld0luZGV4ID0gdGhpcy5jdXJyZW50SXRlbUluZGV4ICsgaW5jcmFtZW50O1xuICAgIGlmIChuZXdJbmRleCA+IHRoaXMudG90YWxJdGVtcyAtIDEpIHtcbiAgICAgIG5ld0luZGV4ID0gbG9vcE9uT3ZlclNob290ID8gMCA6IHRoaXMudG90YWxJdGVtcyAtIDE7XG4gICAgfSBlbHNlIGlmIChuZXdJbmRleCA8IDApIHtcbiAgICAgIG5ld0luZGV4ID0gbG9vcE9uT3ZlclNob290ID8gdGhpcy50b3RhbEl0ZW1zIC0gMSA6IDA7XG4gICAgfVxuICAgIGlmICh0aGlzLmN1cnJlbnRJdGVtSW5kZXggIT09IG5ld0luZGV4KSB7XG4gICAgICB0aGlzLmN1cnJlbnRJdGVtSW5kZXggPSBuZXdJbmRleDtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIFNlcXVlbmNlLnByb3RvdHlwZS5jaGFuZ2VJdGVtQnlJbmRleCA9IGZ1bmN0aW9uKG5ld0luZGV4KSB7XG4gICAgdmFyIGluY3JhbWVudERpZmZlcmVuY2UsIHBsdXNPck1pbnVzO1xuICAgIHBsdXNPck1pbnVzID0gdGhpcy5uZXdJbmRleCA+IHRoaXMuY3VycmVudEl0ZW1JbmRleCA/IDEgOiAtMTtcbiAgICBpbmNyYW1lbnREaWZmZXJlbmNlID0gTWF0aC5hYnModGhpcy5jdXJyZW50SXRlbUluZGV4IC0gdGhpcy5uZXdJbmRleCkgKiBwbHVzT3JNaW51cztcbiAgICByZXR1cm4gdGhpcy5pbmNyYW1lbnRJdGVtSW5kZXgoaW5jcmFtZW50RGlmZmVyZW5jZSk7XG4gIH07XG5cbiAgU2VxdWVuY2UucHJvdG90eXBlLmdldEl0ZW1CeVBhcmFtID0gZnVuY3Rpb24ocGFyYW0sIHZhbCkge1xuICAgIHZhciBpLCBpdGVtLCBsZW4sIHJlZjtcbiAgICByZWYgPSB0aGlzLml0ZW1zO1xuICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgaXRlbSA9IHJlZltpXTtcbiAgICAgIGlmIChpdGVtW3BhcmFtXSA9PT0gdmFsKSB7XG4gICAgICAgIHJldHVybiBpdGVtO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICByZXR1cm4gU2VxdWVuY2U7XG5cbn0pKCk7XG4iLCJ2YXIgQXNzZXRQcmVwbG9hZGVyO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFzc2V0UHJlcGxvYWRlciA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gQXNzZXRQcmVwbG9hZGVyKGRhdGEsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIHRoaXMucHJlbG9hZEFzc2V0cyhkYXRhKTtcbiAgfVxuXG4gIEFzc2V0UHJlcGxvYWRlci5wcm90b3R5cGUucHJlbG9hZEFzc2V0cyA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2YXIgYXNzZXRzLCBwcmVsb2FkUXVldWUsIHJlZ2V4O1xuICAgIGFzc2V0cyA9IFtdO1xuICAgIHJlZ2V4ID0gLy4rXFwuKHN2ZykvO1xuICAgIHRoaXMubG9va0ZvckZpbGVzKGRhdGEsIGFzc2V0cywgcmVnZXgpO1xuICAgIGlmIChhc3NldHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmNhbGxiYWNrKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNyZWF0ZWpzLlNvdW5kLmFsdGVybmF0ZUV4dGVuc2lvbnMgPSBbXCJtcDNcIiwgXCJtNGFcIl07XG4gICAgcHJlbG9hZFF1ZXVlID0gbmV3IGNyZWF0ZWpzLkxvYWRRdWV1ZSgpO1xuICAgIHByZWxvYWRRdWV1ZS5pbnN0YWxsUGx1Z2luKGNyZWF0ZWpzLlNvdW5kKTtcbiAgICBwcmVsb2FkUXVldWUub24oXCJwcm9ncmVzc1wiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihlKSB7fTtcbiAgICB9KSh0aGlzKSk7XG4gICAgcHJlbG9hZFF1ZXVlLm9uKFwiY29tcGxldGVcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5jYWxsYmFjayhkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHJldHVybiBwcmVsb2FkUXVldWUubG9hZE1hbmlmZXN0KGFzc2V0cyk7XG4gIH07XG5cbiAgQXNzZXRQcmVwbG9hZGVyLnByb3RvdHlwZS5sb29rRm9yRmlsZXMgPSBmdW5jdGlvbihpdGVtLCBzdG9yYWdlLCByZWdleCkge1xuICAgIHZhciBjaGlsZCwgaSwga2V5LCBsZW4sIHJlc3VsdHMsIHJlc3VsdHMxLCB0eXBlO1xuICAgIHR5cGUgPSB0eXBlb2YgaXRlbTtcbiAgICBpZiAodHlwZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgaWYgKC8ubXAzfC5tNGEvLnRlc3QoaXRlbSkpIHtcbiAgICAgICAgcmV0dXJuIHN0b3JhZ2UucHVzaCh7XG4gICAgICAgICAgc3JjOiBhcmlzdG90bGUuZXBpc29kZVJvb3QgKyBcIi9zb3VuZHMvXCIgKyBpdGVtLFxuICAgICAgICAgIGlkOiBpdGVtXG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICgvLmpzb24vLnRlc3QoaXRlbSkpIHtcbiAgICAgICAgcmV0dXJuIHN0b3JhZ2UucHVzaCh7XG4gICAgICAgICAgc3JjOiBhcmlzdG90bGUuZXBpc29kZVJvb3QgKyBcIi9hbmltYXRpb25zL1wiICsgaXRlbSxcbiAgICAgICAgICBpZDogaXRlbVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSBpZiAoLy5zdmd8LmpwZ3wuanBlZ3wucG5nLy50ZXN0KGl0ZW0pKSB7XG4gICAgICAgIHJldHVybiBzdG9yYWdlLnB1c2goe1xuICAgICAgICAgIHNyYzogYXJpc3RvdGxlLmVwaXNvZGVSb290ICsgXCIvYXNzZXRzL1wiICsgaXRlbSxcbiAgICAgICAgICBpZDogaXRlbVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW0pKSB7XG4gICAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yIChpID0gMCwgbGVuID0gaXRlbS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgIGNoaWxkID0gaXRlbVtpXTtcbiAgICAgICAgICByZXN1bHRzLnB1c2godGhpcy5sb29rRm9yRmlsZXMoY2hpbGQsIHN0b3JhZ2UsIHJlZ2V4KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRzMSA9IFtdO1xuICAgICAgICBmb3IgKGtleSBpbiBpdGVtKSB7XG4gICAgICAgICAgY2hpbGQgPSBpdGVtW2tleV07XG4gICAgICAgICAgcmVzdWx0czEucHVzaCh0aGlzLmxvb2tGb3JGaWxlcyhjaGlsZCwgc3RvcmFnZSwgcmVnZXgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0czE7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBBc3NldFByZXBsb2FkZXI7XG5cbn0pKCk7XG4iLCJ2YXIgQ29tbWFuZGVyO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1hbmRlciA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gQ29tbWFuZGVyKCkge1xuICAgIHdpbmRvdy5hcmlzdG90bGUuY29tbWFuZGVyID0gdGhpcztcbiAgfVxuXG4gIENvbW1hbmRlci5wcm90b3R5cGVbXCJkb1wiXSA9IGZ1bmN0aW9uKGFjdGlvbikge1xuICAgIHZhciBpLCBpdGVtLCBsZW4sIHJlc3VsdHM7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYWN0aW9uKSkge1xuICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgZm9yIChpID0gMCwgbGVuID0gYWN0aW9uLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGl0ZW0gPSBhY3Rpb25baV07XG4gICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLnB1Ymxpc2goaXRlbSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnB1Ymxpc2goYWN0aW9uKTtcbiAgICB9XG4gIH07XG5cbiAgQ29tbWFuZGVyLnByb3RvdHlwZS5wdWJsaXNoID0gZnVuY3Rpb24oYWN0aW9uKSB7XG4gICAgdmFyIGdsb2JhbFZhck5hbWUsIGksIGtleSwga2V5VmFsUGFpciwgbGVuLCByZWY7XG4gICAgaWYgKGFjdGlvbi5JTkpFQ1RfR0xPQkFMX1ZBUlMgIT0gbnVsbCkge1xuICAgICAgcmVmID0gYWN0aW9uLklOSkVDVF9HTE9CQUxfVkFSUztcbiAgICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBrZXlWYWxQYWlyID0gcmVmW2ldO1xuICAgICAgICBmb3IgKGtleSBpbiBrZXlWYWxQYWlyKSB7XG4gICAgICAgICAgZ2xvYmFsVmFyTmFtZSA9IGtleVZhbFBhaXJba2V5XTtcbiAgICAgICAgICBpZiAoYXJpc3RvdGxlLmdsb2JhbHNbZ2xvYmFsVmFyTmFtZV0gIT0gbnVsbCkge1xuICAgICAgICAgICAgYWN0aW9uLmRhdGFba2V5XSA9IGFyaXN0b3RsZS5nbG9iYWxzW2dsb2JhbFZhck5hbWVdO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhcmlzdG90bGVbXCJ0aHJvd1wiXShcIlRyaWVkIHRvIGFjY2VzcyB0aGUgZ2xvYmFsIHZhciBgXCIgKyBnbG9iYWxWYXJOYW1lICsgXCJgIGJ1dCBpdCBkb2Vzbid0IGV4aXN0XCIsIHRydWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gUHViU3ViLnB1Ymxpc2goYWN0aW9uLmNtZCwgYWN0aW9uLmRhdGEpO1xuICB9O1xuXG4gIHJldHVybiBDb21tYW5kZXI7XG5cbn0pKCk7XG4iLCJ2YXIgQXVkaW9UcmFjaywgRGV2VG9vbHMsXG4gIGJpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9O1xuXG5BdWRpb1RyYWNrID0gcmVxdWlyZSgnZXBpc29kZS9hdWRpby10cmFjaycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERldlRvb2xzID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBEZXZUb29scyhpc0Rldk1vZGUpIHtcbiAgICB0aGlzLmlzRGV2TW9kZSA9IGlzRGV2TW9kZTtcbiAgICB0aGlzLnVwZGF0ZSA9IGJpbmQodGhpcy51cGRhdGUsIHRoaXMpO1xuICAgIGlmICghdGhpcy5pc0Rldk1vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5pbml0UGVyZm9ybWFuY2VTdGF0cygpO1xuICB9XG5cbiAgRGV2VG9vbHMucHJvdG90eXBlLmdvID0gZnVuY3Rpb24oZGV2Q29uZmlnLCBpdGVtcykge1xuICAgIGlmICghdGhpcy5pc0Rldk1vZGUgfHwgKGRldkNvbmZpZyA9PSBudWxsKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNraXAoZGV2Q29uZmlnLCBpdGVtcyk7XG4gICAgdGhpcy5wcmV2ZW50QW5pbWF0aW9uQXNOZWVkZWQoZGV2Q29uZmlnLCBpdGVtcyk7XG4gICAgdGhpcy5hZGRJbmRleGVzVG9JdGVtcyhkZXZDb25maWcsIGl0ZW1zKTtcbiAgICBpZiAoZGV2Q29uZmlnLnZvbHVtZSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gQXVkaW9UcmFjay5pbml0U291bmRTZXR0aW5ncyhkZXZDb25maWcudm9sdW1lKTtcbiAgICB9XG4gIH07XG5cbiAgRGV2VG9vbHMucHJvdG90eXBlLnNraXAgPSBmdW5jdGlvbihkZXZDb25maWcsIGl0ZW1zKSB7XG4gICAgdmFyIGosIGxlbiwgcmVmLCByZXN1bHRzLCBzbGlkZUluZGV4LCBzdGFydEluZGV4O1xuICAgIGlmICghdGhpcy5pc0Rldk1vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGRldkNvbmZpZy5zdGFydEluZGV4ICE9IG51bGwpIHtcbiAgICAgIHN0YXJ0SW5kZXggPSBkZXZDb25maWcuc3RhcnRJbmRleDtcbiAgICAgIGl0ZW1zLnNwbGljZSgwLCBkZXZDb25maWcuc3RhcnRJbmRleCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0YXJ0SW5kZXggPSAwO1xuICAgIH1cbiAgICBpZiAoZGV2Q29uZmlnLnNraXAgIT0gbnVsbCkge1xuICAgICAgcmVmID0gZGV2Q29uZmlnLnNraXAuc29ydCgpLnJldmVyc2UoKTtcbiAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgIGZvciAoaiA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGogPCBsZW47IGorKykge1xuICAgICAgICBzbGlkZUluZGV4ID0gcmVmW2pdO1xuICAgICAgICBpZiAoc2xpZGVJbmRleCA+IHN0YXJ0SW5kZXgpIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2goaXRlbXMuc3BsaWNlKHNsaWRlSW5kZXggLSBzdGFydEluZGV4LCAxKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKHZvaWQgMCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH1cbiAgfTtcblxuICBEZXZUb29scy5wcm90b3R5cGUucHJldmVudEFuaW1hdGlvbkFzTmVlZGVkID0gZnVuY3Rpb24oZGV2Q29uZmlnLCBpdGVtcykge1xuICAgIHZhciBpLCBqLCBsZW4sIHJlZiwgcmVzdWx0cywgc2xpZGU7XG4gICAgaWYgKGRldkNvbmZpZy5kb250QW5pbWF0ZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJlZiA9IGRldkNvbmZpZy5kb250QW5pbWF0ZTtcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChpID0gaiA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGogPCBsZW47IGkgPSArK2opIHtcbiAgICAgIHNsaWRlID0gcmVmW2ldO1xuICAgICAgcmVzdWx0cy5wdXNoKHRoaXMuYWRkU2tpcFRvRW5kcyhpdGVtc1tpXSkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBEZXZUb29scy5wcm90b3R5cGUuYWRkU2tpcFRvRW5kcyA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciBpdGVtLCBrZXksIHJlc3VsdHM7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoa2V5IGluIG9iaikge1xuICAgICAgaXRlbSA9IG9ialtrZXldO1xuICAgICAgaWYgKHR5cGVvZiBpdGVtID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIHRoaXMuYWRkU2tpcFRvRW5kcyhpdGVtLCBvYmopO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBpdGVtID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGlmIChpdGVtLm1hdGNoKC8uanNvbi9nKSkge1xuICAgICAgICAgIHJlc3VsdHMucHVzaChvYmouanVtcFRvRW5kID0gdHJ1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKHZvaWQgMCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdHMucHVzaCh2b2lkIDApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBEZXZUb29scy5wcm90b3R5cGUuYWRkSW5kZXhlc1RvSXRlbXMgPSBmdW5jdGlvbihkZXZDb25maWcsIGl0ZW1zKSB7XG4gICAgdmFyIGNvdW50LCBpdGVtLCBqLCBsZW4sIG51bVNsaWRlc1JlbW92ZWQsIHJlc3VsdHM7XG4gICAgbnVtU2xpZGVzUmVtb3ZlZCA9IGRldkNvbmZpZy5zdGFydEluZGV4ICE9IG51bGwgPyBkZXZDb25maWcuc3RhcnRJbmRleCA6IDA7XG4gICAgY291bnQgPSAwO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGogPSAwLCBsZW4gPSBpdGVtcy5sZW5ndGg7IGogPCBsZW47IGorKykge1xuICAgICAgaXRlbSA9IGl0ZW1zW2pdO1xuICAgICAgcmVzdWx0cy5wdXNoKGl0ZW0uaW5kZXggPSBudW1TbGlkZXNSZW1vdmVkICsgY291bnQrKyk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIERldlRvb2xzLnByb3RvdHlwZS5pbml0UGVyZm9ybWFuY2VTdGF0cyA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc3RhdHMgPSBuZXcgU3RhdHMoKTtcbiAgICB0aGlzLnN0YXRzLnNldE1vZGUoMCk7XG4gICAgdGhpcy5zdGF0cy5kb21FbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICB0aGlzLnN0YXRzLmRvbUVsZW1lbnQuc3R5bGUubGVmdCA9ICcwcHgnO1xuICAgIHRoaXMuc3RhdHMuZG9tRWxlbWVudC5zdHlsZS50b3AgPSAnMHB4JztcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMuc3RhdHMuZG9tRWxlbWVudCk7XG4gICAgcmV0dXJuIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZSk7XG4gIH07XG5cbiAgRGV2VG9vbHMucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc3RhdHMuZW5kKCk7XG4gICAgdGhpcy5zdGF0cy5iZWdpbigpO1xuICAgIHJldHVybiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGUpO1xuICB9O1xuXG4gIHJldHVybiBEZXZUb29scztcblxufSkoKTtcbiIsInZhciBFcGlzb2RlTG9hZGVyO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVwaXNvZGVMb2FkZXIgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIEVwaXNvZGVMb2FkZXIoY2FsbGJhY2spIHtcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgdGhpcy5sb2FkRXBpc29kZSgpO1xuICB9XG5cbiAgRXBpc29kZUxvYWRlci5wcm90b3R5cGUubG9hZEVwaXNvZGUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5sb2FkSnNvbihhcmlzdG90bGUuZXBpc29kZVJvb3QgKyBcIi9tYXAuanNvblwiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihqc29uKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5jYWxsYmFjayhKU09OLnBhcnNlKGpzb24pKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9O1xuXG4gIEVwaXNvZGVMb2FkZXIucHJvdG90eXBlLmxvYWRKc29uID0gZnVuY3Rpb24ocGF0aCwgb25Db21wbGV0ZSkge1xuICAgIHZhciB4b2JqO1xuICAgIHhvYmogPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB4b2JqLm92ZXJyaWRlTWltZVR5cGUoJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICB4b2JqLm9wZW4oJ0dFVCcsIHBhdGgsIHRydWUpO1xuICAgIHhvYmoub25yZWFkeXN0YXRlY2hhbmdlID0gKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh4b2JqLnJlYWR5U3RhdGUgPT09IDQgJiYgeG9iai5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIHJldHVybiBvbkNvbXBsZXRlKHhvYmoucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSh0aGlzKTtcbiAgICByZXR1cm4geG9iai5zZW5kKG51bGwpO1xuICB9O1xuXG4gIHJldHVybiBFcGlzb2RlTG9hZGVyO1xuXG59KSgpO1xuIiwidmFyIEdsb2JhbFZhcnM7XG5cbm1vZHVsZS5leHBvcnRzID0gR2xvYmFsVmFycyA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gR2xvYmFsVmFycygpIHtcbiAgICBhcmlzdG90bGUuZ2xvYmFscyA9IHRoaXM7XG4gICAgUHViU3ViLnN1YnNjcmliZSgnc2V0dmFycycsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGEsIGRhdGEpIHtcbiAgICAgICAgdmFyIGtleSwgcmVzdWx0cywgdmFsO1xuICAgICAgICByZXN1bHRzID0gW107XG4gICAgICAgIGZvciAoa2V5IGluIGRhdGEpIHtcbiAgICAgICAgICB2YWwgPSBkYXRhW2tleV07XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKF90aGlzW2tleV0gPSB2YWwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH1cblxuICByZXR1cm4gR2xvYmFsVmFycztcblxufSkoKTtcbiIsInZhciBMb2dnZXIsXG4gIGJpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExvZ2dlciA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gTG9nZ2VyKCRlbCwgaXNEZXZNb2RlKSB7XG4gICAgdGhpc1tcInRocm93XCJdID0gYmluZCh0aGlzW1widGhyb3dcIl0sIHRoaXMpO1xuICAgIHRoaXMubG9nID0gYmluZCh0aGlzLmxvZywgdGhpcyk7XG4gICAgdmFyICRub2RlO1xuICAgICRub2RlID0gJChqYWRlVGVtcGxhdGVbJ21pc2MvbG9nZ2VyJ10oe30pKTtcbiAgICAkZWwuYXBwZW5kKCRub2RlKTtcbiAgICB0aGlzLiRsb2dOb3RpZnllciA9ICQoJy5tZXNzYWdlJywgJG5vZGUpO1xuICAgIHRoaXMuJGVycm9yTm90aWZ5ZXIgPSAkKCcuZXJyb3InLCAkbm9kZSk7XG4gICAgdGhpcy4kbG9nTm90aWZ5ZXIub24oJ2NsaWNrJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5oaWRlTG9nTm90aWZpZXIoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRoaXMuJGVycm9yTm90aWZ5ZXIub24oJ2NsaWNrJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5oaWRlRXJyb3JOb3RpZmllcigpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgYXJpc3RvdGxlLmxvZyA9IHRoaXMubG9nO1xuICAgIGFyaXN0b3RsZVtcInRocm93XCJdID0gdGhpc1tcInRocm93XCJdO1xuICAgIHRoaXMuaGlkZUxvZ05vdGlmaWVyKCk7XG4gICAgdGhpcy5oaWRlRXJyb3JOb3RpZmllcigpO1xuICAgIGlmICghaXNEZXZNb2RlKSB7XG4gICAgICAkbm9kZS5jc3Moe1xuICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIlxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgTG9nZ2VyLnByb3RvdHlwZS5sb2cgPSBmdW5jdGlvbihtc2cpIHtcbiAgICB0aGlzLnNob3dMb2dOb3RpZmllcigpO1xuICAgIHJldHVybiBjb25zb2xlLmxvZyhcIiVjXCIgKyBtc2csIFwiY29sb3I6IzBiMTUyNDsgYmFja2dyb3VuZDojYjBkOWU2XCIpO1xuICB9O1xuXG4gIExvZ2dlci5wcm90b3R5cGVbXCJ0aHJvd1wiXSA9IGZ1bmN0aW9uKG1zZywgc2hvd1RyYWNlKSB7XG4gICAgaWYgKHNob3dUcmFjZSA9PSBudWxsKSB7XG4gICAgICBzaG93VHJhY2UgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5zaG93RXJyb3JOb3RpZmllcigpO1xuICAgIGlmIChzaG93VHJhY2UpIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKFwiXCIgKyBtc2cpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coXCIlY1wiICsgbXNnLCBcImNvbG9yOiMzZDAwMDA7IGJhY2tncm91bmQ6I2U2YjBjMFwiKTtcbiAgICB9XG4gIH07XG5cbiAgTG9nZ2VyLnByb3RvdHlwZS5oaWRlTG9nTm90aWZpZXIgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kbG9nTm90aWZ5ZXIuY3NzKHtcbiAgICAgIGRpc3BsYXk6IFwibm9uZVwiXG4gICAgfSk7XG4gIH07XG5cbiAgTG9nZ2VyLnByb3RvdHlwZS5oaWRlRXJyb3JOb3RpZmllciA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRlcnJvck5vdGlmeWVyLmNzcyh7XG4gICAgICBkaXNwbGF5OiBcIm5vbmVcIlxuICAgIH0pO1xuICB9O1xuXG4gIExvZ2dlci5wcm90b3R5cGUuc2hvd0xvZ05vdGlmaWVyID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJGxvZ05vdGlmeWVyLmNzcyh7XG4gICAgICBkaXNwbGF5OiBcImJsb2NrXCJcbiAgICB9KTtcbiAgfTtcblxuICBMb2dnZXIucHJvdG90eXBlLnNob3dFcnJvck5vdGlmaWVyID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJGVycm9yTm90aWZ5ZXIuY3NzKHtcbiAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIlxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBMb2dnZXI7XG5cbn0pKCk7XG4iLCJ2YXIgRHluYW1pY0Fzc2V0cztcblxubW9kdWxlLmV4cG9ydHMgPSBEeW5hbWljQXNzZXRzID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBEeW5hbWljQXNzZXRzKCRlbCkge1xuICAgIHRoaXMuJGVsID0gJGVsO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoXCJnaG9zdHV4LmFkZFwiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5jcmVhdGVHaG9zdChkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoXCJnaG9zdHV4LnJlbW92ZVwiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5kZXN0cm95R2hvc3QoZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCdsYWJlbC5hZGQnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5hZGRMYWJlbChkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ2xhYmVsLnJlbW92ZScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnJlbW92ZUxhYmVsKGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgUHViU3ViLnN1YnNjcmliZSgnbGFiZWwuY2xlYXInLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5yZW1vdmVMYWJlbChkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ2xhYmVsLmhpZGUnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5oaWRlTGFiZWwoZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCdsYWJlbC5zaG93JywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuc2hvd0xhYmVsKGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH1cblxuICBEeW5hbWljQXNzZXRzLnByb3RvdHlwZS5jcmVhdGVHaG9zdCA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2YXIgJGdob3N0SXRlbSwgJHRhcmdldCwgYWN0aW9uLCBldmVudCwgcG9zLCByZWYsIHJlc3VsdHMsIHRhbCwgd2lkO1xuICAgICR0YXJnZXQgPSAkKFwiI1wiICsgZGF0YS5pZCk7XG4gICAgcG9zID0gJHRhcmdldC5wb3NpdGlvbigpO1xuICAgIHdpZCA9ICR0YXJnZXRbMF0uZ2V0QkJveCgpLndpZHRoO1xuICAgIHRhbCA9ICR0YXJnZXRbMF0uZ2V0QkJveCgpLmhlaWdodDtcbiAgICBpZiAod2lkID4gNTAwIHx8IHRhbCA+IDQwMCkge1xuICAgICAgYXJpc3RvdGxlLmxvZyhcIldlJ3ZlIGNyZWF0ZWQgYSBoaXQgYXJlYSBmb3IgYFwiICsgZGF0YS5pZCArIFwiYCB0aGF0IGlzIFwiICsgd2lkICsgXCJweCBieSBcIiArIHRhbCArIFwicHgsIEknbSBndWVzc2luZyB0aGF0J3Mgbm90IHJpZ2h0Li5cIik7XG4gICAgfVxuICAgICRnaG9zdEl0ZW0gPSAkKGphZGVUZW1wbGF0ZVsnc2xpZGUtdXgvY29tcG9uZW50cy9naG9zdC1pdGVtJ10oe1xuICAgICAgaWQ6IGRhdGEuaWQgKyBcIi1naG9zdFwiLFxuICAgICAgd2lkdGg6IHdpZCxcbiAgICAgIGhlaWdodDogdGFsLFxuICAgICAgbGVmdDogcG9zLmxlZnQsXG4gICAgICB0b3A6IHBvcy50b3BcbiAgICB9KSk7XG4gICAgdGhpcy4kZWwuYXBwZW5kKCRnaG9zdEl0ZW0pO1xuICAgIHJlZiA9IGRhdGEuZXZlbnRzO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGV2ZW50IGluIHJlZikge1xuICAgICAgYWN0aW9uID0gcmVmW2V2ZW50XTtcbiAgICAgIGlmIChhY3Rpb24uY21kICE9IG51bGwpIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKCRnaG9zdEl0ZW0ub24oZXZlbnQsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBhcmlzdG90bGUuY29tbWFuZGVyW1wiZG9cIl0oYWN0aW9uKTtcbiAgICAgICAgfSkpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYWN0aW9uID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKCRnaG9zdEl0ZW0ub24oZXZlbnQsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBhY3Rpb24oZGF0YS5pZCk7XG4gICAgICAgIH0pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdHMucHVzaCh2b2lkIDApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBEeW5hbWljQXNzZXRzLnByb3RvdHlwZS5kZXN0cm95R2hvc3QgPSBmdW5jdGlvbihnaG9zdElkKSB7XG4gICAgcmV0dXJuICQoZ2hvc3RJZCArIFwiLWdob3N0XCIpLnJlbW92ZSgpO1xuICB9O1xuXG4gIER5bmFtaWNBc3NldHMucHJvdG90eXBlLmFkZExhYmVsID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciAkbGFiZWwsIHBvcztcbiAgICBwb3MgPSBhcmlzdG90bGUubW92aWUuZ2V0TG9jYWxQb3MoZGF0YS5pZCk7XG4gICAgJGxhYmVsID0gJChqYWRlVGVtcGxhdGVbJ21vdmllL2xhYmVsJ10oe1xuICAgICAgdGV4dDogZGF0YS50ZXh0LFxuICAgICAgaWQ6IGRhdGEuaWQgKyBcIi1sYWJlbFwiXG4gICAgfSkpO1xuICAgIHRoaXMuJGVsLmFwcGVuZCgkbGFiZWwpO1xuICAgIHRoaXMucG9zaXRpb25MYWJlbChkYXRhLCAkbGFiZWwsIHBvcyk7XG4gICAgcmV0dXJuICRsYWJlbC5jc3Moe1xuICAgICAgdG9wOiBwb3MueSxcbiAgICAgIGxlZnQ6IHBvcy54XG4gICAgfSk7XG4gIH07XG5cbiAgRHluYW1pY0Fzc2V0cy5wcm90b3R5cGUucmVtb3ZlTGFiZWwgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyIGksIGxhYmVsSWQsIGxlbiwgcmVmLCByZXN1bHRzO1xuICAgIGlmIChkYXRhLmlkID09PSBcImFsbFwiKSB7XG4gICAgICByZXR1cm4gJChcIi5sYWJlbC13cmFwcGVyXCIsIHRoaXMuJGVsKS5yZW1vdmUoKTtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZGF0YS5pZCkpIHtcbiAgICAgIHJlZiA9IGRhdGEuaWQ7XG4gICAgICByZXN1bHRzID0gW107XG4gICAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgbGFiZWxJZCA9IHJlZltpXTtcbiAgICAgICAgcmVzdWx0cy5wdXNoKCQoXCIjXCIgKyBsYWJlbElkICsgXCItbGFiZWxcIiwgdGhpcy4kZWwpLnJlbW92ZSgpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJChcIiNcIiArIGRhdGEuaWQgKyBcIi1sYWJlbFwiLCB0aGlzLiRlbCkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIER5bmFtaWNBc3NldHMucHJvdG90eXBlLmhpZGVMYWJlbCA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2YXIgaSwgbGFiZWxJZCwgbGVuLCByZWYsIHJlc3VsdHM7XG4gICAgaWYgKGRhdGEuaWQgPT09IFwiYWxsXCIpIHtcbiAgICAgIHJldHVybiAkKFwiLmxhYmVsLXdyYXBwZXJcIiwgdGhpcy4kZWwpLnZlbG9jaXR5KHtcbiAgICAgICAgb3BhY2l0eTogMFxuICAgICAgfSwge1xuICAgICAgICBkdXJhdGlvbjogNDAwXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZGF0YS5pZCkpIHtcbiAgICAgIHJlZiA9IGRhdGEuaWQ7XG4gICAgICByZXN1bHRzID0gW107XG4gICAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgbGFiZWxJZCA9IHJlZltpXTtcbiAgICAgICAgcmVzdWx0cy5wdXNoKCQoXCIjXCIgKyBsYWJlbElkICsgXCItbGFiZWxcIiwgdGhpcy4kZWwpLnZlbG9jaXR5KHtcbiAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBkdXJhdGlvbjogNDAwXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJChcIiNcIiArIGRhdGEuaWQgKyBcIi1sYWJlbFwiLCB0aGlzLiRlbCkudmVsb2NpdHkoe1xuICAgICAgICBvcGFjaXR5OiAwXG4gICAgICB9LCB7XG4gICAgICAgIGR1cmF0aW9uOiA0MDBcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBEeW5hbWljQXNzZXRzLnByb3RvdHlwZS5zaG93TGFiZWwgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyIGksIGxhYmVsSWQsIGxlbiwgcmVmLCByZXN1bHRzO1xuICAgIGlmIChkYXRhLmlkID09PSBcImFsbFwiKSB7XG4gICAgICByZXR1cm4gJChcIi5sYWJlbC13cmFwcGVyXCIsIHRoaXMuJGVsKS52ZWxvY2l0eSh7XG4gICAgICAgIG9wYWNpdHk6IDFcbiAgICAgIH0sIHtcbiAgICAgICAgZHVyYXRpb246IDQwMFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGRhdGEuaWQpKSB7XG4gICAgICByZWYgPSBkYXRhLmlkO1xuICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGxhYmVsSWQgPSByZWZbaV07XG4gICAgICAgIHJlc3VsdHMucHVzaCgkKFwiI1wiICsgbGFiZWxJZCArIFwiLWxhYmVsXCIsIHRoaXMuJGVsKS52ZWxvY2l0eSh7XG4gICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICB9LCB7XG4gICAgICAgICAgZHVyYXRpb246IDQwMFxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICQoXCIjXCIgKyBkYXRhLmlkICsgXCItbGFiZWxcIiwgdGhpcy4kZWwpLnZlbG9jaXR5KHtcbiAgICAgICAgb3BhY2l0eTogMVxuICAgICAgfSwge1xuICAgICAgICBkdXJhdGlvbjogNDAwXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgRHluYW1pY0Fzc2V0cy5wcm90b3R5cGUuY2xlYXJMYWJlbCA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2YXIgaSwgbGFiZWxJZCwgbGVuLCByZWYsIHJlc3VsdHM7XG4gICAgaWYgKGRhdGEuaWQgPT09IFwiYWxsXCIpIHtcbiAgICAgIHJldHVybiAkKFwiLmxhYmVsLXdyYXBwZXJcIiwgdGhpcy4kZWwpLnZlbG9jaXR5KHtcbiAgICAgICAgb3BhY2l0eTogMVxuICAgICAgfSwge1xuICAgICAgICBkdXJhdGlvbjogNDAwXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZGF0YS5pZCkpIHtcbiAgICAgIHJlZiA9IGRhdGEuaWQ7XG4gICAgICByZXN1bHRzID0gW107XG4gICAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgbGFiZWxJZCA9IHJlZltpXTtcbiAgICAgICAgcmVzdWx0cy5wdXNoKCQoXCIjXCIgKyBsYWJlbElkICsgXCItbGFiZWxcIiwgdGhpcy4kZWwpLnZlbG9jaXR5KHtcbiAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBkdXJhdGlvbjogNDAwXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJChcIiNcIiArIGRhdGEuaWQgKyBcIi1sYWJlbFwiLCB0aGlzLiRlbCkudmVsb2NpdHkoe1xuICAgICAgICBvcGFjaXR5OiAxXG4gICAgICB9LCB7XG4gICAgICAgIGR1cmF0aW9uOiA0MDBcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBEeW5hbWljQXNzZXRzLnByb3RvdHlwZS5wb3NpdGlvbkxhYmVsID0gZnVuY3Rpb24oZGF0YSwgJGxhYmVsLCBwb3MpIHtcbiAgICB2YXIgJGlubmVyTGFiZWwsIGFycm93TG9jLCBmYWNlO1xuICAgIGZhY2UgPSBkYXRhLmZhY2UgIT0gbnVsbCA/IGRhdGEuZmFjZSA6IFwidG9wXCI7XG4gICAgYXJyb3dMb2MgPSBkYXRhLmFycm93ICE9IG51bGwgPyBkYXRhLmFycm93IDogXCJsZWZ0XCI7XG4gICAgJGlubmVyTGFiZWwgPSAkKFwiLmxhYmVsXCIsICRsYWJlbCk7XG4gICAgc3dpdGNoIChmYWNlKSB7XG4gICAgICBjYXNlIFwidG9wXCI6XG4gICAgICAgIHBvcy54ICs9IHBvcy53IC8gMjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwibGVmdFwiOlxuICAgICAgICBwb3MueSArPSBwb3MuaCAvIDI7XG4gICAgICAgICRpbm5lckxhYmVsLmFkZENsYXNzKFwiYXJyb3ctcG9pbnQtcmlnaHRcIik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICAgIHBvcy55ICs9IHBvcy5oIC8gMjtcbiAgICAgICAgcG9zLnggKz0gcG9zLnc7XG4gICAgICAgICRpbm5lckxhYmVsLmFkZENsYXNzKFwiYXJyb3ctcG9pbnQtbGVmdFwiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiYm90dG9tXCI6XG4gICAgICAgIHBvcy54ICs9IHBvcy53IC8gMjtcbiAgICAgICAgcG9zLnkgKz0gcG9zLmg7XG4gICAgICAgICRpbm5lckxhYmVsLmFkZENsYXNzKFwiYXJyb3ctdG9wXCIpO1xuICAgIH1cbiAgICBzd2l0Y2ggKGFycm93TG9jKSB7XG4gICAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgICAgcmV0dXJuICRpbm5lckxhYmVsLmFkZENsYXNzKFwiYXJyb3ctcmlnaHRcIik7XG4gICAgICBjYXNlIFwibWlkZGxlXCI6XG4gICAgICAgICRpbm5lckxhYmVsLmFkZENsYXNzKFwiYXJyb3ctbWlkZGxlXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIndpZHRoXCIpO1xuICAgICAgICBjb25zb2xlLmxvZygkaW5uZXJMYWJlbC53aWR0aCgpKTtcbiAgICAgICAgd2luZG93LnRoaW5nID0gJGlubmVyTGFiZWw7XG4gICAgICAgIHJldHVybiAkaW5uZXJMYWJlbC5jc3Moe1xuICAgICAgICAgIGxlZnQ6IC0kaW5uZXJMYWJlbC53aWR0aCgpIC8gMlxuICAgICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIER5bmFtaWNBc3NldHM7XG5cbn0pKCk7XG4iLCJ2YXIgSGlnaGxpZ2h0ZXI7XG5cbm1vZHVsZS5leHBvcnRzID0gSGlnaGxpZ2h0ZXIgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIEhpZ2hsaWdodGVyKCRlbCwgZHluYW1pY0Fzc2V0cykge1xuICAgIHRoaXMuJGVsID0gJGVsO1xuICAgIHRoaXMuZHluYW1pY0Fzc2V0cyA9IGR5bmFtaWNBc3NldHM7XG4gICAgUHViU3ViLnN1YnNjcmliZSgnaGlnaGxpZ2h0JywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICB2YXIgaSwgaXRlbSwgbGVuLCByZWYsIHJlc3VsdHM7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEuaWQpKSB7XG4gICAgICAgICAgcmVmID0gZGF0YS5pZDtcbiAgICAgICAgICByZXN1bHRzID0gW107XG4gICAgICAgICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpdGVtID0gcmVmW2ldO1xuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKF90aGlzLmhpZ2hsaWdodEVsZW1lbnQoaXRlbSwgZGF0YS5sZXZlbCwgZGF0YS5sYWJlbCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMuaGlnaGxpZ2h0RWxlbWVudChkYXRhLmlkLCBkYXRhLmxldmVsLCBkYXRhLmxhYmVsKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgUHViU3ViLnN1YnNjcmliZSgndW5oaWdobGlnaHQnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHZhciBpLCBpdGVtLCBsZW4sIHJlc3VsdHM7XG4gICAgICAgIGlmIChtID09PSBcInVuaGlnaGxpZ2h0LmFsbFwiKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLnVuaGlnaGxpZ2h0QWxsKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgICAgIGZvciAoaSA9IDAsIGxlbiA9IGRhdGEubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgaXRlbSA9IGRhdGFbaV07XG4gICAgICAgICAgICAgIHJlc3VsdHMucHVzaChfdGhpcy51bkhpZ2hsaWdodEVsZW1lbnQoaXRlbSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy51bkhpZ2hsaWdodEVsZW1lbnQoZGF0YSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgfVxuXG4gIEhpZ2hsaWdodGVyLnByb3RvdHlwZS5oaWdobGlnaHRFbGVtZW50ID0gZnVuY3Rpb24oZWxlbWVudElkLCBjb2xvciwgbGFiZWwpIHtcbiAgICB2YXIgJGl0ZW0sIGZpbHRlcklkO1xuICAgICRpdGVtID0gJChcIiNcIiArIGVsZW1lbnRJZCwgdGhpcy4kZWwpO1xuICAgICRpdGVtLmF0dHIoXCJjbGFzc1wiLCBcImZpbHRlci1oaWdobGlnaHRlZFwiKTtcbiAgICBpZiAoJGl0ZW0ubGVuZ3RoID09PSAwKSB7XG4gICAgICBhcmlzdG90bGVbXCJ0aHJvd1wiXShcInRyaWVkIHRvIGhpZ2hsaWdodCBhbiBlbGVtZW50IHdpdGggdGhlIGlkIGBcIiArIGVsZW1lbnRJZCArIFwiYCwgYnV0IGZvdW5kIG5vIGVsZW1lbnRzIHdpdGggdGhhdCBpZC5cIiwgdHJ1ZSk7XG4gICAgfVxuICAgIHN3aXRjaCAoY29sb3IpIHtcbiAgICAgIGNhc2UgJ2JsdWUnOlxuICAgICAgICBmaWx0ZXJJZCA9IFwiaGlnaGxpZ2h0Qmx1ZVwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ29yYW5nZSc6XG4gICAgICAgIGZpbHRlcklkID0gXCJoaWdobGlnaHRPcmFuZ2VcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd5ZWxsb3cnOlxuICAgICAgICBmaWx0ZXJJZCA9IFwiaGlnaGxpZ2h0WWVsbG93XCI7XG4gICAgfVxuICAgIHJldHVybiAkaXRlbS5jc3Moe1xuICAgICAgZmlsdGVyOiBcInVybCgjXCIgKyBmaWx0ZXJJZCArIFwiKVwiXG4gICAgfSk7XG4gIH07XG5cbiAgSGlnaGxpZ2h0ZXIucHJvdG90eXBlLnVuSGlnaGxpZ2h0RWxlbWVudCA9IGZ1bmN0aW9uKGVsZW1lbnRJZCkge1xuICAgIHZhciAkaXRlbTtcbiAgICAkaXRlbSA9ICQoXCIjXCIgKyBlbGVtZW50SWQsIHRoaXMuJGVsKTtcbiAgICAkaXRlbS5hdHRyKFwiY2xhc3NcIiwgXCJcIik7XG4gICAgaWYgKCRpdGVtLmxlbmd0aCA9PT0gMCkge1xuICAgICAgYXJpc3RvdGxlW1widGhyb3dcIl0oXCJ0cmllZCB0byB1bmhpZ2hsaWdodCBhbiBlbGVtZW50IHdpdGggdGhlIGlkIGBcIiArIGVsZW1lbnRJZCArIFwiYCwgYnV0IGZvdW5kIG5vIGVsZW1lbnRzIHdpdGggdGhhdCBpZC5cIiwgdHJ1ZSk7XG4gICAgfVxuICAgIHJldHVybiAkaXRlbS5jc3Moe1xuICAgICAgZmlsdGVyOiBcImluaXRpYWxcIlxuICAgIH0pO1xuICB9O1xuXG4gIEhpZ2hsaWdodGVyLnByb3RvdHlwZS51bmhpZ2hsaWdodEFsbCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciAkaXRlbXM7XG4gICAgJGl0ZW1zID0gJChcIi5maWx0ZXItaGlnaGxpZ2h0ZWRcIik7XG4gICAgJGl0ZW1zLmF0dHIoXCJjbGFzc1wiLCBcIlwiKTtcbiAgICByZXR1cm4gJGl0ZW1zLmNzcyh7XG4gICAgICBmaWx0ZXI6IFwiaW5pdGlhbFwiXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIEhpZ2hsaWdodGVyO1xuXG59KSgpO1xuIiwidmFyIExheWVyLCBTVkdBbmltYXRpb24sXG4gIGJpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9O1xuXG5TVkdBbmltYXRpb24gPSByZXF1aXJlKCdtb3ZpZS9zdmctYW5pbWF0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTGF5ZXIgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIExheWVyKCRlbCwgZGVwdGgpIHtcbiAgICB0aGlzLmNyZWF0ZUNvbnRlbnQgPSBiaW5kKHRoaXMuY3JlYXRlQ29udGVudCwgdGhpcyk7XG4gICAgdGhpcy51cGRhdGUgPSBiaW5kKHRoaXMudXBkYXRlLCB0aGlzKTtcbiAgICB0aGlzLiRsYXllciA9ICQoamFkZVRlbXBsYXRlWydtb3ZpZS9sYXllciddKHtcbiAgICAgIGRlcHRoOiBkZXB0aFxuICAgIH0pKTtcbiAgICAkZWwuYXBwZW5kKHRoaXMuJGxheWVyKTtcbiAgfVxuXG4gIExheWVyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihsYXllckRhdGExKSB7XG4gICAgdGhpcy5sYXllckRhdGEgPSBsYXllckRhdGExO1xuICAgIGlmICh0aGlzLmxheWVyRGF0YS53YWl0ICE9IG51bGwpIHtcbiAgICAgIHNldFRpbWVvdXQodGhpcy5jcmVhdGVDb250ZW50LCB0aGlzLmxheWVyRGF0YS53YWl0KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlQ29udGVudCgpO1xuICB9O1xuXG4gIExheWVyLnByb3RvdHlwZS5jcmVhdGVDb250ZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCh0aGlzLmxheWVyRGF0YS5jb250ZW50ICE9IG51bGwpIHx8ICh0aGlzLmxheWVyRGF0YS5iYWNrZ3JvdW5kICE9IG51bGwpKSB7XG4gICAgICB0aGlzLnVwZGF0ZUNvbnRlbnQodGhpcy5sYXllckRhdGEpO1xuICAgIH1cbiAgICBpZiAodGhpcy5sYXllckRhdGEuZnggIT0gbnVsbCkge1xuICAgICAgdGhpcy51cGRhdGVFZmZlY3RzKHRoaXMubGF5ZXJEYXRhLmZ4KTtcbiAgICB9XG4gICAgaWYgKHRoaXMubGF5ZXJEYXRhLmFjdGlvbiAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gYXJpc3RvdGxlLmNvbW1hbmRlcltcImRvXCJdKHRoaXMubGF5ZXJEYXRhLmFjdGlvbik7XG4gICAgfVxuICB9O1xuXG4gIExheWVyLnByb3RvdHlwZS51cGRhdGVDb250ZW50ID0gZnVuY3Rpb24obGF5ZXJEYXRhKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudE9uaW9uTGF5ZXIgIT0gbnVsbCkge1xuICAgICAgdGhpcy5mYWRlQW5kUmVtb3ZlT2xkTGF5ZXIoKTtcbiAgICB9XG4gICAgdGhpcy5hZGRUaGVDb3JyZWN0Q29udGVudChsYXllckRhdGEpO1xuICAgIHJldHVybiB0aGlzLnVwZGF0ZUJhY2tncm91bmQobGF5ZXJEYXRhKTtcbiAgfTtcblxuICBMYXllci5wcm90b3R5cGUuYWRkVGhlQ29ycmVjdENvbnRlbnQgPSBmdW5jdGlvbihsYXllckRhdGEpIHtcbiAgICB2YXIga2luZDtcbiAgICB0aGlzLmN1cnJlbnRPbmlvbkxheWVyID0gdGhpcy5hZGRPbmlvbkxheWVyKCk7XG4gICAgaWYgKGxheWVyRGF0YS5jb250ZW50ID09IG51bGwpIHtcbiAgICAgIGtpbmQgPSBcIm5vbmVcIjtcbiAgICB9IGVsc2UgaWYgKGxheWVyRGF0YS5jb250ZW50ID09PSBcImNsZWFyXCIpIHtcbiAgICAgIGtpbmQgPSBcImNsZWFyXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGtpbmQgPSBsYXllckRhdGEuY29udGVudC5zcGxpdChcIi5cIilbMV07XG4gICAgfVxuICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgY2FzZSBcImpzb25cIjpcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkQW5pbWF0aW9uKHRoaXMuY3VycmVudE9uaW9uTGF5ZXIsIGxheWVyRGF0YSk7XG4gICAgICBjYXNlIFwic3ZnXCI6XG4gICAgICAgIHJldHVybiB0aGlzLmFkZFN2Zyh0aGlzLmN1cnJlbnRPbmlvbkxheWVyLCBsYXllckRhdGEpO1xuICAgICAgY2FzZSBcImdpZlwiOlxuICAgICAgY2FzZSBcImpwZ1wiOlxuICAgICAgY2FzZSBcImpwZWdcIjpcbiAgICAgIGNhc2UgXCJwbmdcIjpcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkSW1hZ2UodGhpcy5jdXJyZW50T25pb25MYXllciwgbGF5ZXJEYXRhLmNvbnRlbnQsIGxheWVyRGF0YS5yZXBlYXQsIGxheWVyRGF0YS5wb3NpdGlvbik7XG4gICAgICBjYXNlIFwiY2xlYXJcIjpcbiAgICAgICAgcmV0dXJuIHRoaXMuZW1wdHkoKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBhcmlzdG90bGVbXCJ0aHJvd1wiXShcInRyaWVkIHRvIGFkZCB1bnJlY29nbml6ZWQgbGF5ZXIgdHlwZSAnXCIgKyBraW5kICsgXCInXCIsIHRydWUpO1xuICAgIH1cbiAgfTtcblxuICBMYXllci5wcm90b3R5cGUuY2FjaGUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gaHRtbDJjYW52YXModGhpcy4kbGF5ZXIpLnRoZW4oKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oY2FudmFzKSB7XG4gICAgICAgIF90aGlzLmZhZGVBbmRSZW1vdmVPbGRMYXllcigpO1xuICAgICAgICBfdGhpcy5jdXJyZW50T25pb25MYXllciA9IF90aGlzLmFkZE9uaW9uTGF5ZXIoKTtcbiAgICAgICAgcmV0dXJuIF90aGlzLmN1cnJlbnRPbmlvbkxheWVyLmFwcGVuZChDYW52YXMySW1hZ2UuY29udmVydFRvUE5HKGNhbnZhcywgMTAyNCwgNzY4KSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgfTtcblxuICBMYXllci5wcm90b3R5cGUudXBkYXRlRWZmZWN0cyA9IGZ1bmN0aW9uKGZ4KSB7XG4gICAgdmFyIGVmZmVjdCwgaSwgbGVuLCByZWYsIHJlc3VsdHM7XG4gICAgaWYgKGZ4LmNsZWFyKSB7XG4gICAgICB0aGlzLiRsYXllci5hdHRyKHtcbiAgICAgICAgXCJjbGFzc1wiOiAnbGF5ZXInXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGZ4LmVmZmVjdHMgIT0gbnVsbCkge1xuICAgICAgcmVmID0gZnguZWZmZWN0cztcbiAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBlZmZlY3QgPSByZWZbaV07XG4gICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLiRsYXllci5hZGRDbGFzcyhlZmZlY3QpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH1cbiAgfTtcblxuICBMYXllci5wcm90b3R5cGUudXBkYXRlQmFja2dyb3VuZCA9IGZ1bmN0aW9uKGxheWVyRGF0YSkge1xuICAgIGlmIChsYXllckRhdGEuYmFja2dyb3VuZCA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmN1cnJlbnRPbmlvbkxheWVyLmNzcyh7XG4gICAgICBiYWNrZ3JvdW5kOiBsYXllckRhdGEuYmFja2dyb3VuZFxuICAgIH0pO1xuICB9O1xuXG4gIExheWVyLnByb3RvdHlwZS5hZGRBbmltYXRpb24gPSBmdW5jdGlvbigkaG9sZGVyLCBsYXllckRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5hbmltYXRpb24gPSBuZXcgU1ZHQW5pbWF0aW9uKCRob2xkZXIsIGFyaXN0b3RsZS5lcGlzb2RlUm9vdCArIFwiL2FuaW1hdGlvbnMvXCIgKyBsYXllckRhdGEuY29udGVudCwgbGF5ZXJEYXRhKTtcbiAgfTtcblxuICBMYXllci5wcm90b3R5cGUuYWRkU3ZnID0gZnVuY3Rpb24oJGhvbGRlciwgbGF5ZXJEYXRhKSB7XG4gICAgcmV0dXJuICRob2xkZXIubG9hZChhcmlzdG90bGUuZXBpc29kZVJvb3QgKyBcIi9hc3NldHMvXCIgKyBsYXllckRhdGEuY29udGVudCk7XG4gIH07XG5cbiAgTGF5ZXIucHJvdG90eXBlLmFkZEltYWdlID0gZnVuY3Rpb24oJGhvbGRlciwgZmlsZSwgcmVwZWF0LCBwb3NpdGlvbikge1xuICAgIGlmIChyZXBlYXQgPT0gbnVsbCkge1xuICAgICAgcmVwZWF0ID0gXCJuby1yZXBlYXRcIjtcbiAgICB9XG4gICAgaWYgKHBvc2l0aW9uID09IG51bGwpIHtcbiAgICAgIHBvc2l0aW9uID0gXCJsZWZ0XCI7XG4gICAgfVxuICAgIHJldHVybiAkaG9sZGVyLmNzcyh7XG4gICAgICBiYWNrZ3JvdW5kOiBcInVybChcIiArIGFyaXN0b3RsZS5lcGlzb2RlUm9vdCArIFwiL2Fzc2V0cy9cIiArIGZpbGUgKyBcIikgXCIgKyByZXBlYXQgKyBcIiBcIiArIHBvc2l0aW9uXG4gICAgfSk7XG4gIH07XG5cbiAgTGF5ZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kbGF5ZXIucmVtb3ZlKCk7XG4gIH07XG5cbiAgTGF5ZXIucHJvdG90eXBlLmFkZE9uaW9uTGF5ZXIgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgJG9uaW9uTGF5ZXI7XG4gICAgJG9uaW9uTGF5ZXIgPSAkKGphZGVUZW1wbGF0ZVsnbW92aWUvb25pb24tbGF5ZXInXSh7fSkpO1xuICAgIHRoaXMuJGxheWVyLnByZXBlbmQoJG9uaW9uTGF5ZXIpO1xuICAgIHJldHVybiAkb25pb25MYXllcjtcbiAgfTtcblxuICBMYXllci5wcm90b3R5cGUuZmFkZUFuZFJlbW92ZU9sZExheWVyID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG9sZE9uaW9uTGF5ZXI7XG4gICAgb2xkT25pb25MYXllciA9IHRoaXMuY3VycmVudE9uaW9uTGF5ZXI7XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIG9sZE9uaW9uTGF5ZXIudmVsb2NpdHkoJ3N0b3AnLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIG9sZE9uaW9uTGF5ZXIudmVsb2NpdHkoe1xuICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgfSwge1xuICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXG4gICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIG9sZE9uaW9uTGF5ZXIucmVtb3ZlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfSkodGhpcyksIDIwMCk7XG4gIH07XG5cbiAgTGF5ZXIucHJvdG90eXBlLmVtcHR5ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJGxheWVyLmVtcHR5KCk7XG4gIH07XG5cbiAgTGF5ZXIucHJvdG90eXBlLmFkZEZpbHRlciA9IGZ1bmN0aW9uKGZpbHRlcklkKSB7XG4gICAgcmV0dXJuICQoXCJzdmdcIiwgdGhpcy5jdXJyZW50T25pb25MYXllcikuY3NzKHtcbiAgICAgIGZpbHRlcjogXCJ1cmwoI1wiICsgZmlsdGVySWQgKyBcIilcIlxuICAgIH0pO1xuICB9O1xuXG4gIExheWVyLnByb3RvdHlwZS5yZW1vdmVGaWx0ZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICQoXCJzdmdcIiwgdGhpcy5jdXJyZW50T25pb25MYXllcikuY3NzKHtcbiAgICAgIGZpbHRlcjogXCJub25lXCJcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gTGF5ZXI7XG5cbn0pKCk7XG4iLCJ2YXIgRHluYW1pY0Fzc2V0cywgSGlnaGxpZ2h0ZXIsIExheWVyLCBNb3ZpZTtcblxuRHluYW1pY0Fzc2V0cyA9IHJlcXVpcmUoJ21vdmllL2R5bmFtaWMtYXNzZXRzJyk7XG5cbkxheWVyID0gcmVxdWlyZSgnbW92aWUvbGF5ZXInKTtcblxuSGlnaGxpZ2h0ZXIgPSByZXF1aXJlKCdtb3ZpZS9oaWdobGlnaHRlcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1vdmllID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBNb3ZpZSgkZWwpIHtcbiAgICB0aGlzLiRlbCA9ICRlbDtcbiAgICBhcmlzdG90bGUubW92aWUgPSB0aGlzO1xuICAgIHRoaXMuJHdyYXBwZXIgPSAkKCcud3JhcHBlcicsIHRoaXMuJGVsKTtcbiAgICB0aGlzLmxheWVycyA9IFtdO1xuICAgIHRoaXMuZHluYW1pY0Fzc2V0cyA9IG5ldyBEeW5hbWljQXNzZXRzKCQoJy5keW5hbWljcycsIHRoaXMuJGVsKSk7XG4gICAgdGhpcy5oaWdobGlnaHRlciA9IG5ldyBIaWdobGlnaHRlcih0aGlzLiR3cmFwcGVyLCB0aGlzLmR5bmFtaWNBc3NldHMpO1xuICAgIHRoaXMuc2NhbGUgPSAxO1xuICAgIHRoaXMudHJhbnNmb3JtT3JpZ2luID0ge1xuICAgICAgeDogMCxcbiAgICAgIHk6IDBcbiAgICB9O1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ21vdmllLmxvYWQtbGF5ZXInLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5hZGRMYXllcihkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ21vdmllLnpvb20nLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy56b29tKGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgUHViU3ViLnN1YnNjcmliZSgnbW92aWUubGF5ZXJzLmJsdXIuYmVsb3cnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5ibHVyQWxsTGF5ZXJzQmVsb3coZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCdtb3ZpZS5sYXllcnMudW5ibHVyLmFsbCcsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnVuYmx1ckFsbExBeWVycygpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgUHViU3ViLnN1YnNjcmliZSgnbW92aWUubGF5ZXJzLmNhY2hlJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuY2FjaGVMYXllcihkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9XG5cbiAgTW92aWUucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGosIGxheWVyLCBsZW4sIHJlZjtcbiAgICByZWYgPSB0aGlzLmxheWVycztcbiAgICBmb3IgKGogPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgIGxheWVyID0gcmVmW2pdO1xuICAgICAgbGF5ZXIuZGVzdHJveSgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5sYXllcnMgPSBbXTtcbiAgfTtcblxuICBNb3ZpZS5wcm90b3R5cGUucG9wdWxhdGUgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyIGRlcHRoSWQsIGxheWVyRGF0YSwgcmVmO1xuICAgIGlmIChkYXRhID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmVmID0gZGF0YS5sYXllcnM7XG4gICAgZm9yIChkZXB0aElkIGluIHJlZikge1xuICAgICAgbGF5ZXJEYXRhID0gcmVmW2RlcHRoSWRdO1xuICAgICAgdGhpcy5hZGRMYXllcihsYXllckRhdGEpO1xuICAgIH1cbiAgICBpZiAoZGF0YS56b29tICE9IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLnpvb20oZGF0YS56b29tKTtcbiAgICB9XG4gIH07XG5cbiAgTW92aWUucHJvdG90eXBlLnpvb20gPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyICRpdGVtLCBwb3M7XG4gICAgaWYgKGRhdGEuaWQgIT0gbnVsbCkge1xuICAgICAgJGl0ZW0gPSAkKFwiI1wiICsgZGF0YS5pZCk7XG4gICAgICBpZiAoJGl0ZW0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGFyaXN0b3RsZVtcInRocm93XCJdKFwiVHJpZWQgdG8gem9vbSB0byBhbiBpdGVtIHdpdGggdGhlIGlkIGBcIiArIGRhdGEuaWQgKyBcImAsIGJ1dCBubyBpdGVtcyB3aXRoIHRoYXQgaWQgd2VyZSBmb3VuZC5cIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHBvcyA9IHRoaXMuZ2V0TG9jYWxQb3MoZGF0YS5pZCk7XG4gICAgICByZXR1cm4gdGhpcy56b29tVG8oZGF0YS5zY2FsZSwgcG9zLngsIHBvcy55KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuem9vbVRvKGRhdGEuc2NhbGUsIGRhdGEueCwgZGF0YS55KTtcbiAgICB9XG4gIH07XG5cbiAgTW92aWUucHJvdG90eXBlLnpvb21UbyA9IGZ1bmN0aW9uKHNjYWxlLCB4LCB5KSB7XG4gICAgdGhpcy5zY2FsZSA9IHNjYWxlICE9IG51bGwgPyBzY2FsZSA6IDE7XG4gICAgaWYgKHggPT0gbnVsbCkge1xuICAgICAgeCA9IDA7XG4gICAgfVxuICAgIGlmICh5ID09IG51bGwpIHtcbiAgICAgIHkgPSAwO1xuICAgIH1cbiAgICB0aGlzLnRyYW5zZm9ybU9yaWdpbiA9IHtcbiAgICAgIHg6IHgsXG4gICAgICB5OiB5XG4gICAgfTtcbiAgICB0aGlzLiRlbC5jc3Moe1xuICAgICAgXCJ0cmFuc2Zvcm0tb3JpZ2luXCI6IHggKyBcInB4IFwiICsgeSArIFwicHhcIlxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLiRlbC5jc3Moe1xuICAgICAgdHJhbnNmb3JtOiBcInNjYWxlKFwiICsgdGhpcy5zY2FsZSArIFwiKVwiXG4gICAgfSk7XG4gIH07XG5cbiAgTW92aWUucHJvdG90eXBlLmFkZExheWVyID0gZnVuY3Rpb24obGF5ZXJEYXRhKSB7XG4gICAgdmFyIGRlcHRoLCBpLCBqLCBsYXllciwgcmVmLCByZWYxO1xuICAgIGlmIChsYXllckRhdGEgPT0gbnVsbCkge1xuICAgICAgYXJpc3RvdGxlW1widGhyb3dcIl0oXCJUcmllZCB0byBjcmVhdGUgYSBsYXllciwgYnV0IGRpZG4ndCBzcGVjaWZ5IGFueSBsYXllciBkYXRhXCIsIHRydWUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAobGF5ZXJEYXRhLmRlcHRoID09IG51bGwpIHtcbiAgICAgIGFyaXN0b3RsZVtcInRocm93XCJdKFwiVHJpZWQgdG8gY3JlYXRlIGEgbGF5ZXIgd2l0aCBubyBkZXB0aCBzcGVjaWZpZWRcIiwgdHJ1ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGRlcHRoID0gbGF5ZXJEYXRhLmRlcHRoO1xuICAgIGlmIChkZXB0aCA+IHRoaXMubGF5ZXJzLmxlbmd0aCkge1xuICAgICAgZm9yIChpID0gaiA9IHJlZiA9IHRoaXMubGF5ZXJzLmxlbmd0aCwgcmVmMSA9IGRlcHRoOyByZWYgPD0gcmVmMSA/IGogPD0gcmVmMSA6IGogPj0gcmVmMTsgaSA9IHJlZiA8PSByZWYxID8gKytqIDogLS1qKSB7XG4gICAgICAgIHRoaXMubGF5ZXJzW2ldID0gbmV3IExheWVyKHRoaXMuJHdyYXBwZXIsIGkpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXllciA9IHRoaXMuZ2V0T3JDcmVhdGVMYXllcihkZXB0aCk7XG4gICAgcmV0dXJuIGxheWVyLnVwZGF0ZShsYXllckRhdGEpO1xuICB9O1xuXG4gIE1vdmllLnByb3RvdHlwZS5nZXRPckNyZWF0ZUxheWVyID0gZnVuY3Rpb24oZGVwdGgpIHtcbiAgICB2YXIgbGF5ZXI7XG4gICAgaWYgKHRoaXMubGF5ZXJzW2RlcHRoXSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5sYXllcnNbZGVwdGhdO1xuICAgIH1cbiAgICBsYXllciA9IG5ldyBMYXllcih0aGlzLiR3cmFwcGVyLCBkZXB0aCk7XG4gICAgdGhpcy5sYXllcnNbZGVwdGhdID0gbGF5ZXI7XG4gICAgcmV0dXJuIGxheWVyO1xuICB9O1xuXG4gIE1vdmllLnByb3RvdHlwZS5jYWNoZUxheWVyID0gZnVuY3Rpb24oZGVwdGgpIHtcbiAgICByZXR1cm4gdGhpcy5sYXllcnNbZGVwdGhdLmNhY2hlKCk7XG4gIH07XG5cbiAgTW92aWUucHJvdG90eXBlLmJsdXJBbGxMYXllcnNCZWxvdyA9IGZ1bmN0aW9uKGxheWVyRGVwdGgpIHtcbiAgICB2YXIgaSwgaiwgcmVmLCByZXN1bHRzO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGkgPSBqID0gMCwgcmVmID0gbGF5ZXJEZXB0aCAtIDE7IDAgPD0gcmVmID8gaiA8PSByZWYgOiBqID49IHJlZjsgaSA9IDAgPD0gcmVmID8gKytqIDogLS1qKSB7XG4gICAgICByZXN1bHRzLnB1c2godGhpcy5sYXllcnNbaV0uYWRkRmlsdGVyKFwiYmx1ZUJsdXJcIikpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBNb3ZpZS5wcm90b3R5cGUudW5ibHVyQWxsTEF5ZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGosIGxheWVyLCBsZW4sIHJlZiwgcmVzdWx0cztcbiAgICByZWYgPSB0aGlzLmxheWVycztcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChqID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICBsYXllciA9IHJlZltqXTtcbiAgICAgIHJlc3VsdHMucHVzaChsYXllci5yZW1vdmVGaWx0ZXJzKCkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBNb3ZpZS5wcm90b3R5cGUuZ2V0R2xvYmFsUG9zID0gZnVuY3Rpb24oaXRlbUlkKSB7XG4gICAgdmFyICRpdGVtLCBvYmo7XG4gICAgJGl0ZW0gPSAkKFwiI1wiICsgaXRlbUlkKTtcbiAgICByZXR1cm4gb2JqID0ge1xuICAgICAgeDogKCRpdGVtLnBvc2l0aW9uKCkubGVmdCAvIHRoaXMuc2NhbGUgLSB0aGlzLnRyYW5zZm9ybU9yaWdpbi54KSAqIHRoaXMuc2NhbGUgKyB0aGlzLnRyYW5zZm9ybU9yaWdpbi54LFxuICAgICAgeTogKCRpdGVtLnBvc2l0aW9uKCkudG9wIC8gdGhpcy5zY2FsZSAtIHRoaXMudHJhbnNmb3JtT3JpZ2luLnkpICogdGhpcy5zY2FsZSArIHRoaXMudHJhbnNmb3JtT3JpZ2luLnksXG4gICAgICB3OiAkaXRlbVswXS5nZXRCQm94KCkud2lkdGgsXG4gICAgICBoOiAkaXRlbVswXS5nZXRCQm94KCkuaGVpZ2h0XG4gICAgfTtcbiAgfTtcblxuICBNb3ZpZS5wcm90b3R5cGUuZ2V0TG9jYWxQb3MgPSBmdW5jdGlvbihpdGVtSWQpIHtcbiAgICB2YXIgJGl0ZW0sIG9iajtcbiAgICAkaXRlbSA9ICQoXCIjXCIgKyBpdGVtSWQpO1xuICAgIG9iaiA9IHtcbiAgICAgIHg6ICRpdGVtLnBvc2l0aW9uKCkubGVmdCAvIHRoaXMuc2NhbGUsXG4gICAgICB5OiAkaXRlbS5wb3NpdGlvbigpLnRvcCAvIHRoaXMuc2NhbGUsXG4gICAgICB3OiAkaXRlbVswXS5nZXRCQm94KCkud2lkdGgsXG4gICAgICBoOiAkaXRlbVswXS5nZXRCQm94KCkuaGVpZ2h0XG4gICAgfTtcbiAgICByZXR1cm4gb2JqO1xuICB9O1xuXG4gIHJldHVybiBNb3ZpZTtcblxufSkoKTtcbiIsInZhciBTVkdBbmltYXRpb24sXG4gIGJpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNWR0FuaW1hdGlvbiA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gU1ZHQW5pbWF0aW9uKGVsLCBqc29uLCBkYXRhKSB7XG4gICAgdGhpcy5wbGF5ID0gYmluZCh0aGlzLnBsYXksIHRoaXMpO1xuICAgIGlmIChkYXRhLmxvb3AgPT0gbnVsbCkge1xuICAgICAgZGF0YS5sb29wID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuYW5pbWF0aW9uID0gYm9keW1vdmluLmxvYWRBbmltYXRpb24oe1xuICAgICAgd3JhcHBlcjogZWxbMF0sXG4gICAgICBhbmltVHlwZTogJ3N2ZycsXG4gICAgICBsb29wOiBkYXRhLmxvb3AsXG4gICAgICBwcmVyZW5kZXI6IHRydWUsXG4gICAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgICBwYXRoOiBqc29uXG4gICAgfSk7XG4gICAgdGhpcy5hbmltYXRpb24uYWRkRXZlbnRMaXN0ZW5lcignZGF0YV9yZWFkeScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoZGF0YS5qdW1wVG9FbmQgIT0gbnVsbCkge1xuICAgICAgICAgIF90aGlzLmFuaW1hdGlvbi5zZXRDdXJyZW50UmF3RnJhbWVWYWx1ZShfdGhpcy5hbmltYXRpb24udG90YWxGcmFtZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChkYXRhLmRlbGF5ICE9IG51bGwpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoX3RoaXMucGxheSwgZGF0YS5kZWxheSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzLnBsYXkoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzLmFkZEV2ZW50cyhkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9XG5cbiAgU1ZHQW5pbWF0aW9uLnByb3RvdHlwZS5hZGRFdmVudHMgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyIGV2ZW50LCBpLCBsZW4sIHJlZiwgcmVzdWx0cztcbiAgICBpZiAoZGF0YS5ldmVudHMgIT0gbnVsbCkge1xuICAgICAgcmVmID0gZGF0YS5ldmVudHM7XG4gICAgICByZXN1bHRzID0gW107XG4gICAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgZXZlbnQgPSByZWZbaV07XG4gICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLmFuaW1hdGlvbi5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBfdGhpcy5hbmltYXRpb24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCk7XG4gICAgICAgICAgICByZXR1cm4gUHViU3ViLnB1Ymxpc2goXCJsYXllci5cIiArIGRhdGEuZGVwdGggKyBcIi5cIiArIGV2ZW50KTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KSh0aGlzKSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxuICB9O1xuXG4gIFNWR0FuaW1hdGlvbi5wcm90b3R5cGUucGxheSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmFuaW1hdGlvbi5wbGF5KCk7XG4gIH07XG5cbiAgU1ZHQW5pbWF0aW9uLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYW5pbWF0aW9uLnN0b3AoKTtcbiAgfTtcblxuICBTVkdBbmltYXRpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmFuaW1hdGlvbi5kZXN0cm95KCk7XG4gICAgaWYgKHRoaXMuaW50ZXJ2YWwgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbCk7XG4gICAgfVxuICB9O1xuXG4gIFNWR0FuaW1hdGlvbi5wcm90b3R5cGUudHJhY2VGcmFtZXMgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbnRlcnZhbCA9IHNldEludGVydmFsKChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gY29uc29sZS5sb2coX3RoaXMuYW5pbWF0aW9uLmN1cnJlbnRSYXdGcmFtZSwgX3RoaXMuYW5pbWF0aW9uLmN1cnJlbnRGcmFtZSwgX3RoaXMuYW5pbWF0aW9uLnRvdGFsRnJhbWVzKTtcbiAgICAgIH07XG4gICAgfSkodGhpcyksIDUwMCk7XG4gIH07XG5cbiAgcmV0dXJuIFNWR0FuaW1hdGlvbjtcblxufSkoKTtcbiIsInZhciBDb21wb25lbnQ7XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50ID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBDb21wb25lbnQoJGVsLCAkbm9kZSkge1xuICAgIHRoaXMuJG5vZGUgPSAkbm9kZTtcbiAgICAkZWwuYXBwZW5kKHRoaXMuJG5vZGUpO1xuICAgIHNoYWRvd0ljb25zSW5zdGFuY2Uuc3ZnUmVwbGFjZVdpdGhTdHJpbmcocHhTdmdJY29uU3RyaW5nLCB0aGlzLiRub2RlKTtcbiAgfVxuXG4gIENvbXBvbmVudC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRub2RlLnJlbW92ZSgpO1xuICB9O1xuXG4gIHJldHVybiBDb21wb25lbnQ7XG5cbn0pKCk7XG4iLCJ2YXIgQ29tcG9uZW50LCBEZWZlbmRlckNhcmRzLFxuICBiaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfSxcbiAgZXh0ZW5kID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChoYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9LFxuICBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbkNvbXBvbmVudCA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvY29tcG9uZW50Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGVmZW5kZXJDYXJkcyA9IChmdW5jdGlvbihzdXBlckNsYXNzKSB7XG4gIGV4dGVuZChEZWZlbmRlckNhcmRzLCBzdXBlckNsYXNzKTtcblxuICBmdW5jdGlvbiBEZWZlbmRlckNhcmRzKCRlbCwgZGF0YTEpIHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhMTtcbiAgICB0aGlzLnNob3dDYXJkID0gYmluZCh0aGlzLnNob3dDYXJkLCB0aGlzKTtcbiAgICB0aGlzLnRvdGFsQ2FyZHNWaWV3ZWQgPSAwO1xuICAgIHRoaXMuJG5vZGUgPSAkKGphZGVUZW1wbGF0ZVsnc2xpZGUtdXgvY29tcG9uZW50cy9kZWZlbmRlci1jYXJkcyddKHt9KSk7XG4gICAgRGVmZW5kZXJDYXJkcy5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCAkZWwsIHRoaXMuJG5vZGUpO1xuICAgIHRoaXMuY3JlYXRlRGVmZW5kZXJzKHRoaXMuZGF0YS5kZWZlbmRlcnMpO1xuICB9XG5cbiAgRGVmZW5kZXJDYXJkcy5wcm90b3R5cGUuY3JlYXRlRGVmZW5kZXJzID0gZnVuY3Rpb24oZGVmZW5kZXJzKSB7XG4gICAgdmFyIGRhdGEsIGRlZmVuZGVyRGF0YSwgZGVmZW5kZXJJZCwgcmVzdWx0cztcbiAgICB0aGlzLmdob3N0cyA9IFtdO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGRlZmVuZGVySWQgaW4gZGVmZW5kZXJzKSB7XG4gICAgICBkZWZlbmRlckRhdGEgPSBkZWZlbmRlcnNbZGVmZW5kZXJJZF07XG4gICAgICBkYXRhID0ge1xuICAgICAgICBpZDogZGVmZW5kZXJJZCxcbiAgICAgICAgZXZlbnRzOiB7XG4gICAgICAgICAgY2xpY2s6IChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGlkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdGhpcy5zaG93Q2FyZChpZCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pKHRoaXMpXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB0aGlzLmdob3N0cy5wdXNoKGRlZmVuZGVySWQpO1xuICAgICAgcmVzdWx0cy5wdXNoKFB1YlN1Yi5wdWJsaXNoKCdnaG9zdHV4LmFkZCcsIGRhdGEpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgRGVmZW5kZXJDYXJkcy5wcm90b3R5cGUuc2hvd0NhcmQgPSBmdW5jdGlvbihkZWZlbmRlcklkKSB7XG4gICAgdmFyIGRhdGE7XG4gICAgdGhpcy50b3RhbENhcmRzVmlld2VkKys7XG4gICAgaWYgKHRoaXMuJGNhcmQgIT0gbnVsbCkge1xuICAgICAgdGhpcy5yZW1vdmVDdXJyZW50Q2FyZCgpO1xuICAgIH1cbiAgICBkYXRhID0gdGhpcy5kYXRhLmRlZmVuZGVyc1tkZWZlbmRlcklkXTtcbiAgICB0aGlzLiRjYXJkID0gJChqYWRlVGVtcGxhdGVbJ3NsaWRlLXV4L2NvbXBvbmVudHMvZGVmZW5kZXItY2FyZCddKGRhdGEpKTtcbiAgICBzaGFkb3dJY29uc0luc3RhbmNlLnN2Z1JlcGxhY2VXaXRoU3RyaW5nKHB4U3ZnSWNvblN0cmluZywgdGhpcy4kY2FyZCk7XG4gICAgJChcIi5nb3QtaXQtYnRuXCIsIHRoaXMuJGNhcmQpLm9uKFwiY2xpY2tcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgICByZXR1cm4gX3RoaXMucmVtb3ZlQ3VycmVudENhcmQoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIGlmICh0aGlzLnRvdGFsQ2FyZHNWaWV3ZWQgPT09IDIpIHtcbiAgICAgIFB1YlN1Yi5wdWJsaXNoKCdjb250aW51ZS5zaG93Jyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLiRub2RlLmFwcGVuZCh0aGlzLiRjYXJkKTtcbiAgfTtcblxuICBEZWZlbmRlckNhcmRzLnByb3RvdHlwZS5yZW1vdmVDdXJyZW50Q2FyZCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRjYXJkLnJlbW92ZSgpO1xuICB9O1xuXG4gIERlZmVuZGVyQ2FyZHMucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZ2hvc3RJZCwgaSwgbGVuLCByZWY7XG4gICAgcmVmID0gdGhpcy5naG9zdHM7XG4gICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBnaG9zdElkID0gcmVmW2ldO1xuICAgICAgUHViU3ViLnB1Ymxpc2goJ2dob3N0dXgucmVtb3ZlJywgZ2hvc3RJZCk7XG4gICAgfVxuICAgIHJldHVybiBEZWZlbmRlckNhcmRzLl9fc3VwZXJfXy5kZXN0cm95LmNhbGwodGhpcyk7XG4gIH07XG5cbiAgcmV0dXJuIERlZmVuZGVyQ2FyZHM7XG5cbn0pKENvbXBvbmVudCk7XG4iLCJ2YXIgQ29tcG9uZW50LCBEaWFsb2d1ZSxcbiAgZXh0ZW5kID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChoYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9LFxuICBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbkNvbXBvbmVudCA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvY29tcG9uZW50Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGlhbG9ndWUgPSAoZnVuY3Rpb24oc3VwZXJDbGFzcykge1xuICBleHRlbmQoRGlhbG9ndWUsIHN1cGVyQ2xhc3MpO1xuXG4gIGZ1bmN0aW9uIERpYWxvZ3VlKCRlbCwgZGF0YSkge1xuICAgIHRoaXMuJG5vZGUgPSAkKGphZGVUZW1wbGF0ZVsnc2xpZGUtdXgvY29tcG9uZW50cy9kaWFsb2d1ZS9kaWFsb2d1ZSddKGRhdGEpKTtcbiAgICBEaWFsb2d1ZS5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCAkZWwsIHRoaXMuJG5vZGUpO1xuICAgICQoJy5idG4nLCB0aGlzLiRub2RlKS5vbihcImNsaWNrXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gYXJpc3RvdGxlLmNvbW1hbmRlcltcImRvXCJdKGRhdGEuYnRuLmFjdGlvbik7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgfVxuXG4gIHJldHVybiBEaWFsb2d1ZTtcblxufSkoQ29tcG9uZW50KTtcbiIsInZhciBDb21wb25lbnQsIEV4cGxvcmVDYXJkcywgU2VxdWVuY2UsXG4gIGJpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9LFxuICBleHRlbmQgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKGhhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH0sXG4gIGhhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuQ29tcG9uZW50ID0gcmVxdWlyZSgnc2xpZGUtdXgvY29tcG9uZW50cy9jb21wb25lbnQnKTtcblxuU2VxdWVuY2UgPSByZXF1aXJlKCdtaXNjL3NlcXVlbmNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRXhwbG9yZUNhcmRzID0gKGZ1bmN0aW9uKHN1cGVyQ2xhc3MpIHtcbiAgZXh0ZW5kKEV4cGxvcmVDYXJkcywgc3VwZXJDbGFzcyk7XG5cbiAgZnVuY3Rpb24gRXhwbG9yZUNhcmRzKCRlbCwgZGF0YTEpIHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhMTtcbiAgICB0aGlzLnNob3dDYXJkID0gYmluZCh0aGlzLnNob3dDYXJkLCB0aGlzKTtcbiAgICB0aGlzLnRvdGFsQ2FyZHNWaWV3ZWQgPSAwO1xuICAgIHRoaXMucmVxdWlyZWRDYXJkVmlld3MgPSB0aGlzLmRhdGFbXCJyZXF1aXJlZC12aWV3c1wiXTtcbiAgICB0aGlzLiRub2RlID0gJCgkLnBhcnNlSFRNTChcIjxkaXY+PC9kaXY+XCIpKTtcbiAgICB0aGlzLmNhcmRzID0gbmV3IFNlcXVlbmNlKHRoaXMuZGF0YS5jYXJkcyk7XG4gICAgdGhpcy5jcmVhdGVDYXJkR2hvc3RzKHRoaXMuZGF0YS5jYXJkcyk7XG4gICAgRXhwbG9yZUNhcmRzLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsICRlbCwgdGhpcy4kbm9kZSk7XG4gICAgY29uc29sZS5sb2coJGVsKTtcbiAgfVxuXG4gIEV4cGxvcmVDYXJkcy5wcm90b3R5cGUuY3JlYXRlQ2FyZEdob3N0cyA9IGZ1bmN0aW9uKGNhcmRzKSB7XG4gICAgdmFyIGNhcmREYXRhLCBkYXRhLCBpLCBsZW4sIHJlc3VsdHM7XG4gICAgdGhpcy5naG9zdHMgPSBbXTtcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChpID0gMCwgbGVuID0gY2FyZHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNhcmREYXRhID0gY2FyZHNbaV07XG4gICAgICBkYXRhID0ge1xuICAgICAgICBpZDogY2FyZERhdGEuaGl0LFxuICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICBjbGljazogKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLnNob3dDYXJkKGlkKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSkodGhpcylcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHRoaXMuZ2hvc3RzLnB1c2goY2FyZERhdGEuaGl0KTtcbiAgICAgIHJlc3VsdHMucHVzaChQdWJTdWIucHVibGlzaCgnZ2hvc3R1eC5hZGQnLCBkYXRhKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIEV4cGxvcmVDYXJkcy5wcm90b3R5cGUuc2hvd0NhcmQgPSBmdW5jdGlvbihjYXJkSWQpIHtcbiAgICB2YXIgZGF0YTtcbiAgICB0aGlzLnRvdGFsQ2FyZHNWaWV3ZWQrKztcbiAgICBpZiAodGhpcy4kY3VycmVudENhcmQgIT0gbnVsbCkge1xuICAgICAgdGhpcy5yZW1vdmVDdXJyZW50Q2FyZCgpO1xuICAgIH1cbiAgICBkYXRhID0gdGhpcy5jYXJkcy5nZXRJdGVtQnlQYXJhbSgnaGl0JywgY2FyZElkKTtcbiAgICB0aGlzLiRjdXJyZW50Q2FyZCA9ICQoamFkZVRlbXBsYXRlW1wic2xpZGUtdXgvY29tcG9uZW50cy9jYXJkcy9cIiArIHRoaXMuZGF0YS50ZW1wbGF0ZV0oZGF0YSkpO1xuICAgIHNoYWRvd0ljb25zSW5zdGFuY2Uuc3ZnUmVwbGFjZVdpdGhTdHJpbmcocHhTdmdJY29uU3RyaW5nLCB0aGlzLiRjdXJyZW50Q2FyZCk7XG4gICAgJChcIi5nb3QtaXQtYnRuXCIsIHRoaXMuJGN1cnJlbnRDYXJkKS5vbihcImNsaWNrXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnJlbW92ZUN1cnJlbnRDYXJkKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBpZiAodGhpcy50b3RhbENhcmRzVmlld2VkID49IHRoaXMucmVxdWlyZWRDYXJkVmlld3MpIHtcbiAgICAgIFB1YlN1Yi5wdWJsaXNoKCdjb250aW51ZS5zaG93Jyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLiRub2RlLmFwcGVuZCh0aGlzLiRjdXJyZW50Q2FyZCk7XG4gIH07XG5cbiAgRXhwbG9yZUNhcmRzLnByb3RvdHlwZS5yZW1vdmVDdXJyZW50Q2FyZCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRjdXJyZW50Q2FyZC5yZW1vdmUoKTtcbiAgfTtcblxuICBFeHBsb3JlQ2FyZHMucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZ2hvc3RJZCwgaSwgbGVuLCByZWY7XG4gICAgcmVmID0gdGhpcy5naG9zdHM7XG4gICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBnaG9zdElkID0gcmVmW2ldO1xuICAgICAgUHViU3ViLnB1Ymxpc2goJ2dob3N0dXgucmVtb3ZlJywgZ2hvc3RJZCk7XG4gICAgfVxuICAgIHJldHVybiBFeHBsb3JlQ2FyZHMuX19zdXBlcl9fLmRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgfTtcblxuICByZXR1cm4gRXhwbG9yZUNhcmRzO1xuXG59KShDb21wb25lbnQpO1xuIiwidmFyIENvbXBvbmVudCwgR2hvc3RVWCxcbiAgZXh0ZW5kID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChoYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9LFxuICBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbkNvbXBvbmVudCA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvY29tcG9uZW50Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gR2hvc3RVWCA9IChmdW5jdGlvbihzdXBlckNsYXNzKSB7XG4gIGV4dGVuZChHaG9zdFVYLCBzdXBlckNsYXNzKTtcblxuICBmdW5jdGlvbiBHaG9zdFVYKCRlbCwgZGF0YSkge1xuICAgIHRoaXMuJG5vZGUgPSAkKGphZGVUZW1wbGF0ZVsnc2xpZGUtdXgvY29tcG9uZW50cy9naG9zdC11eCddKHt9KSk7XG4gICAgR2hvc3RVWC5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCAkZWwsIHRoaXMuJG5vZGUpO1xuICAgIHRoaXMuY3JlYXRlVGFyZ2V0cyhkYXRhLnRhcmdldHMpO1xuICB9XG5cbiAgR2hvc3RVWC5wcm90b3R5cGUuY3JlYXRlVGFyZ2V0cyA9IGZ1bmN0aW9uKHRhcmdldHMpIHtcbiAgICB2YXIgJGdob3N0SXRlbSwgJHRhcmdldCwgaSwgbGVuLCBwb3MsIHJlc3VsdHMsIHRhbCwgdGFyZ2V0LCB3aWQ7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoaSA9IDAsIGxlbiA9IHRhcmdldHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHRhcmdldCA9IHRhcmdldHNbaV07XG4gICAgICAkdGFyZ2V0ID0gJChcIiNcIiArIHRhcmdldC5pZCk7XG4gICAgICBwb3MgPSAkdGFyZ2V0LnBvc2l0aW9uKCk7XG4gICAgICB3aWQgPSAkdGFyZ2V0WzBdLmdldEJCb3goKS53aWR0aDtcbiAgICAgIHRhbCA9ICR0YXJnZXRbMF0uZ2V0QkJveCgpLmhlaWdodDtcbiAgICAgICRnaG9zdEl0ZW0gPSAkKGphZGVUZW1wbGF0ZVsnc2xpZGUtdXgvY29tcG9uZW50cy9naG9zdC1pdGVtJ10oe1xuICAgICAgICB3aWR0aDogd2lkLFxuICAgICAgICBoZWlnaHQ6IHRhbCxcbiAgICAgICAgbGVmdDogcG9zLmxlZnQsXG4gICAgICAgIHRvcDogcG9zLnRvcFxuICAgICAgfSkpO1xuICAgICAgdGhpcy4kbm9kZS5hcHBlbmQoJGdob3N0SXRlbSk7XG4gICAgICB0aGlzLnNldEV2ZW50SGFuZGxlcigkZ2hvc3RJdGVtLCAnY2xpY2snLCB0YXJnZXQuY2xpY2spO1xuICAgICAgdGhpcy5zZXRFdmVudEhhbmRsZXIoJGdob3N0SXRlbSwgJ21vdXNlb3ZlcicsIHRhcmdldC5vdmVyLCAwLjQpO1xuICAgICAgcmVzdWx0cy5wdXNoKHRoaXMuc2V0RXZlbnRIYW5kbGVyKCRnaG9zdEl0ZW0sICdtb3VzZW91dCcsIHRhcmdldC5vdXQpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgR2hvc3RVWC5wcm90b3R5cGUuc2V0RXZlbnRIYW5kbGVyID0gZnVuY3Rpb24oJGl0ZW0sIGV2ZW50LCBhY3Rpb24sIG9wYWNpdHkpIHtcbiAgICBpZiAob3BhY2l0eSA9PSBudWxsKSB7XG4gICAgICBvcGFjaXR5ID0gMDtcbiAgICB9XG4gICAgcmV0dXJuICRpdGVtLm9uKGV2ZW50LCBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBhcmlzdG90bGUuY29tbWFuZGVyW1wiZG9cIl0oYWN0aW9uKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gR2hvc3RVWDtcblxufSkoQ29tcG9uZW50KTtcbiIsInZhciBRdWVzdGlvbixcbiAgYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH07XG5cbm1vZHVsZS5leHBvcnRzID0gUXVlc3Rpb24gPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIFF1ZXN0aW9uKCRwYXJlbnQsIGRhdGEsIGFuc3dlckNhbGxiYWNrKSB7XG4gICAgdGhpcy4kcGFyZW50ID0gJHBhcmVudDtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIHRoaXMuYW5zd2VyQ2FsbGJhY2sgPSBhbnN3ZXJDYWxsYmFjaztcbiAgICB0aGlzLm9uQW5zd2VyQ2xpY2sgPSBiaW5kKHRoaXMub25BbnN3ZXJDbGljaywgdGhpcyk7XG4gIH1cblxuICBRdWVzdGlvbi5wcm90b3R5cGUuYnVpbGQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLiRub2RlID0gJChqYWRlVGVtcGxhdGVbJ3NsaWRlLXV4L2NvbXBvbmVudHMvcXVpei9xdWVzdGlvbiddKHRoaXMuZGF0YSkpO1xuICAgIHRoaXMuJHBhcmVudC5wcmVwZW5kKHRoaXMuJG5vZGUpO1xuICAgIHNoYWRvd0ljb25zSW5zdGFuY2Uuc3ZnUmVwbGFjZVdpdGhTdHJpbmcocHhTdmdJY29uU3RyaW5nLCB0aGlzLiRub2RlKTtcbiAgICByZXR1cm4gJChcIi5hbnN3ZXItd3JhcHBlclwiLCB0aGlzLiRub2RlKS5vbihcImNsaWNrXCIsIHRoaXMub25BbnN3ZXJDbGljayk7XG4gIH07XG5cbiAgUXVlc3Rpb24ucHJvdG90eXBlLm9uQW5zd2VyQ2xpY2sgPSBmdW5jdGlvbihlKSB7XG4gICAgdmFyIGlzQ29ycmVjdDtcbiAgICAkKGUuY3VycmVudFRhcmdldCkuYWRkQ2xhc3MoXCJmbGlwcGVkXCIpO1xuICAgIGlzQ29ycmVjdCA9ICQoXCIucmVzcG9uc2VcIiwgZS5jdXJyZW50VGFyZ2V0KS5oYXNDbGFzcygncmlnaHQnKTtcbiAgICByZXR1cm4gdGhpcy5hbnN3ZXJDYWxsYmFjayhpc0NvcnJlY3QpO1xuICB9O1xuXG4gIFF1ZXN0aW9uLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJG5vZGUucmVtb3ZlKCk7XG4gIH07XG5cbiAgcmV0dXJuIFF1ZXN0aW9uO1xuXG59KSgpO1xuIiwidmFyIENvbXBvbmVudCwgUXVlc3Rpb24sIFF1aXosIFNlcXVlbmNlLFxuICBiaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfSxcbiAgZXh0ZW5kID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChoYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9LFxuICBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbkNvbXBvbmVudCA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvY29tcG9uZW50Jyk7XG5cblF1ZXN0aW9uID0gcmVxdWlyZSgnc2xpZGUtdXgvY29tcG9uZW50cy9xdWl6L3F1ZXN0aW9uJyk7XG5cblNlcXVlbmNlID0gcmVxdWlyZSgnbWlzYy9zZXF1ZW5jZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFF1aXogPSAoZnVuY3Rpb24oc3VwZXJDbGFzcykge1xuICBleHRlbmQoUXVpeiwgc3VwZXJDbGFzcyk7XG5cbiAgZnVuY3Rpb24gUXVpeigkZWwsIGRhdGEpIHtcbiAgICB0aGlzLm9uTmV4dENsaWNrID0gYmluZCh0aGlzLm9uTmV4dENsaWNrLCB0aGlzKTtcbiAgICB0aGlzLm9uUXVlc3Rpb25BbnN3ZXJlZCA9IGJpbmQodGhpcy5vblF1ZXN0aW9uQW5zd2VyZWQsIHRoaXMpO1xuICAgIFB1YlN1Yi5wdWJsaXNoKFwiY2hyb21lLmhpZGVcIik7XG4gICAgUHViU3ViLnB1Ymxpc2goXCJjdGFubGVlLmhpZGVcIik7XG4gICAgdGhpcy4kbm9kZSA9ICQoamFkZVRlbXBsYXRlWydzbGlkZS11eC9jb21wb25lbnRzL3F1aXovcXVpeiddKGRhdGEpKTtcbiAgICBRdWl6Ll9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsICRlbCwgdGhpcy4kbm9kZSk7XG4gICAgdGhpcy5jcmVhdGVRdWl6KCQoXCIucXVlc3Rpb25zXCIsIHRoaXMuJG5vZGUpLCBkYXRhKTtcbiAgICB0aGlzLiRuZXh0QnRuID0gJChcIi5uZXh0LWJ0blwiLCB0aGlzLiRub2RlKTtcbiAgICB0aGlzLiRuZXh0QnRuLm9uKFwiY2xpY2tcIiwgdGhpcy5vbk5leHRDbGljayk7XG4gICAgdGhpcy5oaWRlTmV4dCgpO1xuICB9XG5cbiAgUXVpei5wcm90b3R5cGUuY3JlYXRlUXVpeiA9IGZ1bmN0aW9uKCRlbCwgZGF0YSkge1xuICAgIHZhciBpLCBqLCBsZW4sIHF1ZXN0aW9uRGF0YSwgcXVlc3Rpb25zLCByZWY7XG4gICAgcXVlc3Rpb25zID0gW107XG4gICAgcmVmID0gZGF0YS5xdWVzdGlvbnM7XG4gICAgZm9yIChpID0gaiA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGogPCBsZW47IGkgPSArK2opIHtcbiAgICAgIHF1ZXN0aW9uRGF0YSA9IHJlZltpXTtcbiAgICAgIHF1ZXN0aW9uRGF0YS5pbmRleCA9IGk7XG4gICAgICBxdWVzdGlvbnMucHVzaChuZXcgUXVlc3Rpb24oJGVsLCBxdWVzdGlvbkRhdGEsIHRoaXMub25RdWVzdGlvbkFuc3dlcmVkKSk7XG4gICAgfVxuICAgIHRoaXMucXVlc3Rpb25zID0gbmV3IFNlcXVlbmNlKHF1ZXN0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXMuc2hvd0N1cnJlbnRRdWVzdGlvbigpO1xuICB9O1xuXG4gIFF1aXoucHJvdG90eXBlLnNob3dDdXJyZW50UXVlc3Rpb24gPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmN1cnJlbnRRdWVzdGlvbiA9IHRoaXMucXVlc3Rpb25zLmN1cnJlbnRJdGVtKCk7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFF1ZXN0aW9uLmJ1aWxkKCk7XG4gIH07XG5cbiAgUXVpei5wcm90b3R5cGUub25RdWVzdGlvbkFuc3dlcmVkID0gZnVuY3Rpb24oZ290SXRSaWdodCkge1xuICAgIGlmIChnb3RJdFJpZ2h0KSB7XG4gICAgICByZXR1cm4gdGhpcy5zaG93TmV4dCgpO1xuICAgIH1cbiAgfTtcblxuICBRdWl6LnByb3RvdHlwZS5vbk5leHRDbGljayA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaGlkZU5leHQoKTtcbiAgICB0aGlzLmN1cnJlbnRRdWVzdGlvbi5kZXN0cm95KCk7XG4gICAgaWYgKHRoaXMucXVlc3Rpb25zLmlzQXRMYXN0SXRlbSgpKSB7XG4gICAgICByZXR1cm4gUHViU3ViLnB1Ymxpc2goJ3NsaWRlcy5uZXh0LXNsaWRlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucXVlc3Rpb25zLm5leHQoKTtcbiAgICAgIHJldHVybiB0aGlzLnNob3dDdXJyZW50UXVlc3Rpb24oKTtcbiAgICB9XG4gIH07XG5cbiAgUXVpei5wcm90b3R5cGUuc2hvd05leHQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kbmV4dEJ0bi5yZW1vdmVDbGFzcyhcImhpZGRlblwiKTtcbiAgfTtcblxuICBRdWl6LnByb3RvdHlwZS5oaWRlTmV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRuZXh0QnRuLmFkZENsYXNzKFwiaGlkZGVuXCIpO1xuICB9O1xuXG4gIHJldHVybiBRdWl6O1xuXG59KShDb21wb25lbnQpO1xuIiwidmFyIENvbXBvbmVudCwgU2VsZWN0aW9uRGlhbG9ndWUsXG4gIGV4dGVuZCA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoaGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfSxcbiAgaGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5Db21wb25lbnQgPSByZXF1aXJlKCdzbGlkZS11eC9jb21wb25lbnRzL2NvbXBvbmVudCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNlbGVjdGlvbkRpYWxvZ3VlID0gKGZ1bmN0aW9uKHN1cGVyQ2xhc3MpIHtcbiAgZXh0ZW5kKFNlbGVjdGlvbkRpYWxvZ3VlLCBzdXBlckNsYXNzKTtcblxuICBmdW5jdGlvbiBTZWxlY3Rpb25EaWFsb2d1ZSgkZWwsIGRhdGEpIHtcbiAgICB2YXIgJGxlZnQsICRyaWdodCwgamFkZURhdGE7XG4gICAgamFkZURhdGEgPSB0aGlzLmdlbmVyYXRlQ29uZmlnRGF0YShkYXRhKTtcbiAgICB0aGlzLiRub2RlID0gJChqYWRlVGVtcGxhdGVbJ3NsaWRlLXV4L2NvbXBvbmVudHMvZGlhbG9ndWUvc2VsZWN0aW9uLWRpYWxvZ3VlJ10oKSk7XG4gICAgJGxlZnQgPSAkKGphZGVUZW1wbGF0ZVsnc2xpZGUtdXgvY29tcG9uZW50cy9kaWFsb2d1ZS9kaWFsb2d1ZS1kZXRhaWxzJ10oamFkZURhdGEpKTtcbiAgICAkcmlnaHQgPSAkKGphZGVUZW1wbGF0ZVsnc2xpZGUtdXgvY29tcG9uZW50cy9kaWFsb2d1ZS9kaWFsb2d1ZS1idXR0b25zJ10oamFkZURhdGEpKTtcbiAgICB0aGlzLiRub2RlLmFwcGVuZCgkbGVmdCk7XG4gICAgdGhpcy4kbm9kZS5hcHBlbmQoJHJpZ2h0KTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKHRoaXMuJG5vZGUsIGRhdGEpO1xuICAgIFNlbGVjdGlvbkRpYWxvZ3VlLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsICRlbCwgdGhpcy4kbm9kZSk7XG4gIH1cblxuICBTZWxlY3Rpb25EaWFsb2d1ZS5wcm90b3R5cGUuZ2VuZXJhdGVDb25maWdEYXRhID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciBpLCBpdGVtLCBqLCBqYWRlRGF0YSwgbGVuLCByZWY7XG4gICAgdGhpcy5pdGVtcyA9IHt9O1xuICAgIGphZGVEYXRhID0ge307XG4gICAgamFkZURhdGEudGl0bGUgPSBkYXRhLnRpdGxlO1xuICAgIGphZGVEYXRhLnN1YlRpdGxlID0gZGF0YS5zdWJUaXRsZTtcbiAgICBqYWRlRGF0YS5idG5UeHQgPSBkYXRhLnN1Ym1pdEJ0bi50eHQ7XG4gICAgamFkZURhdGEuYnRuSWNvbiA9IGRhdGEuc3VibWl0QnRuLmljb247XG4gICAgamFkZURhdGEuaW50cm8gPSBkYXRhLmludHJvO1xuICAgIGphZGVEYXRhLml0ZW1zID0gW107XG4gICAgcmVmID0gZGF0YS5pdGVtcztcbiAgICBmb3IgKGkgPSBqID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaiA8IGxlbjsgaSA9ICsraikge1xuICAgICAgaXRlbSA9IHJlZltpXTtcbiAgICAgIGl0ZW0uaWQgPSBcIml0ZW1cIiArIGk7XG4gICAgICBqYWRlRGF0YS5pdGVtcy5wdXNoKHtcbiAgICAgICAgdHh0OiBpdGVtLmJ0blR4dCxcbiAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgIGljb246IGl0ZW0uaWNvblxuICAgICAgfSk7XG4gICAgICB0aGlzLml0ZW1zW2l0ZW0uaWRdID0gaXRlbTtcbiAgICB9XG4gICAgcmV0dXJuIGphZGVEYXRhO1xuICB9O1xuXG4gIFNlbGVjdGlvbkRpYWxvZ3VlLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVycyA9IGZ1bmN0aW9uKCRlbCwgZGF0YSkge1xuICAgIHZhciAkYnV0dG9ucztcbiAgICAkYnV0dG9ucyA9ICQoXCIuYnV0dG9uXCIsICRlbCk7XG4gICAgJGJ1dHRvbnMub24oXCJjbGlja1wiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICAgIHZhciAkdGFyZztcbiAgICAgICAgJHRhcmcgPSAkKGUudGFyZ2V0KTtcbiAgICAgICAgcmV0dXJuIF90aGlzLmFjdGl2YXRlSXRlbSgkdGFyZywgX3RoaXMuaXRlbXNbJHRhcmcuYXR0cignaWQnKV0pO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgcmV0dXJuICQoXCIjYWN0aW9uLWJ0blwiLCAkZWwpLm9uKFwiY2xpY2tcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgICBhcmlzdG90bGUuY29tbWFuZGVyW1wiZG9cIl0oZGF0YS5jbGljayk7XG4gICAgICAgIHJldHVybiBfdGhpcy5kZXN0cm95KCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgfTtcblxuICBTZWxlY3Rpb25EaWFsb2d1ZS5wcm90b3R5cGUuYWN0aXZhdGVJdGVtID0gZnVuY3Rpb24oJGJ1dHRvbiwgaXRlbSkge1xuICAgICQoXCIuaW50cm9cIiwgdGhpcy4kbm9kZSkuY3NzKHtcbiAgICAgIGRpc3BsYXk6IFwibm9uZVwiXG4gICAgfSk7XG4gICAgJChcIi5pdGVtLWluZm9cIiwgdGhpcy4kbm9kZSkuY3NzKHtcbiAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIlxuICAgIH0pO1xuICAgICQoXCIuYnV0dG9uXCIsIHRoaXMuJG5vZGUpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICRidXR0b24uYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgJChcIi5pY29uXCIsIHRoaXMuJG5vZGUpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICQoXCIjaWNvbi1cIiArIGl0ZW0uaWQsIHRoaXMuJG5vZGUpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgICQoXCIuYmx1cmJcIiwgdGhpcy4kbm9kZSkuaHRtbChpdGVtLmJsdXJiKTtcbiAgICAkKFwiLmRldGFpbHNcIiwgdGhpcy4kbm9kZSkuaHRtbChpdGVtLmRldGFpbHMpO1xuICAgIHJldHVybiBhcmlzdG90bGUuY29tbWFuZGVyW1wiZG9cIl0oaXRlbS5jbGljayk7XG4gIH07XG5cbiAgcmV0dXJuIFNlbGVjdGlvbkRpYWxvZ3VlO1xuXG59KShDb21wb25lbnQpO1xuIiwidmFyIENvbXBvbmVudCwgU2ltcGxlU2VsZWN0aW9uLFxuICBleHRlbmQgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKGhhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH0sXG4gIGhhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuQ29tcG9uZW50ID0gcmVxdWlyZSgnc2xpZGUtdXgvY29tcG9uZW50cy9jb21wb25lbnQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaW1wbGVTZWxlY3Rpb24gPSAoZnVuY3Rpb24oc3VwZXJDbGFzcykge1xuICBleHRlbmQoU2ltcGxlU2VsZWN0aW9uLCBzdXBlckNsYXNzKTtcblxuICBmdW5jdGlvbiBTaW1wbGVTZWxlY3Rpb24oJGVsLCBkYXRhKSB7XG4gICAgdmFyICRyaWdodCwgamFkZURhdGE7XG4gICAgamFkZURhdGEgPSB0aGlzLmdlbmVyYXRlQ29uZmlnRGF0YShkYXRhKTtcbiAgICB0aGlzLiRub2RlID0gJChqYWRlVGVtcGxhdGVbJ3NsaWRlLXV4L2NvbXBvbmVudHMvZGlhbG9ndWUvc2VsZWN0aW9uLWRpYWxvZ3VlJ10oKSk7XG4gICAgJHJpZ2h0ID0gJChqYWRlVGVtcGxhdGVbJ3NsaWRlLXV4L2NvbXBvbmVudHMvZGlhbG9ndWUvZGlhbG9ndWUtYnV0dG9ucyddKGphZGVEYXRhKSk7XG4gICAgdGhpcy4kbm9kZS5hcHBlbmQoJHJpZ2h0KTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKHRoaXMuJG5vZGUsIGRhdGEpO1xuICAgIFNpbXBsZVNlbGVjdGlvbi5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCAkZWwsIHRoaXMuJG5vZGUpO1xuICB9XG5cbiAgU2ltcGxlU2VsZWN0aW9uLnByb3RvdHlwZS5nZW5lcmF0ZUNvbmZpZ0RhdGEgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyIGksIGl0ZW0sIGosIGphZGVEYXRhLCBsZW4sIHJlZjtcbiAgICB0aGlzLml0ZW1zID0ge307XG4gICAgamFkZURhdGEgPSB7fTtcbiAgICBqYWRlRGF0YS5pdGVtcyA9IFtdO1xuICAgIGphZGVEYXRhLnRpdGxlID0gZGF0YS50aXRsZTtcbiAgICBqYWRlRGF0YS5zdWJUaXRsZSA9IGRhdGEuc3ViVGl0bGU7XG4gICAgcmVmID0gZGF0YS5pdGVtcztcbiAgICBmb3IgKGkgPSBqID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaiA8IGxlbjsgaSA9ICsraikge1xuICAgICAgaXRlbSA9IHJlZltpXTtcbiAgICAgIGl0ZW0uaWQgPSBcIml0ZW1cIiArIGk7XG4gICAgICBqYWRlRGF0YS5pdGVtcy5wdXNoKHtcbiAgICAgICAgdHh0OiBpdGVtLmJ0blR4dCxcbiAgICAgICAgaWQ6IGl0ZW0uaWRcbiAgICAgIH0pO1xuICAgICAgdGhpcy5pdGVtc1tpdGVtLmlkXSA9IGl0ZW07XG4gICAgfVxuICAgIHJldHVybiBqYWRlRGF0YTtcbiAgfTtcblxuICBTaW1wbGVTZWxlY3Rpb24ucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24oJGVsLCBkYXRhKSB7XG4gICAgdmFyICRidXR0b25zO1xuICAgICRidXR0b25zID0gJChcIi5idXR0b25cIiwgJGVsKTtcbiAgICByZXR1cm4gJGJ1dHRvbnMub24oXCJjbGlja1wiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICAgIHZhciAkdGFyZztcbiAgICAgICAgJHRhcmcgPSAkKGUudGFyZ2V0KTtcbiAgICAgICAgZGF0YSA9IF90aGlzLml0ZW1zWyR0YXJnLmF0dHIoJ2lkJyldO1xuICAgICAgICBhcmlzdG90bGUuY29tbWFuZGVyW1wiZG9cIl0oZGF0YS5jbGljayk7XG4gICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhkYXRhLmNsaWNrKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9O1xuXG4gIHJldHVybiBTaW1wbGVTZWxlY3Rpb247XG5cbn0pKENvbXBvbmVudCk7XG4iLCJ2YXIgQXVkaW9UcmFjaywgQ3RhbmxlZSwgU2VxdWVuY2U7XG5cbkF1ZGlvVHJhY2sgPSByZXF1aXJlKCdlcGlzb2RlL2F1ZGlvLXRyYWNrJyk7XG5cblNlcXVlbmNlID0gcmVxdWlyZSgnbWlzYy9zZXF1ZW5jZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEN0YW5sZWUgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIEN0YW5sZWUoJHBhcmVudCkge1xuICAgIGFyaXN0b3RsZS5jdGFubGVlID0gdGhpcztcbiAgICB0aGlzLiRlbCA9ICQoamFkZVRlbXBsYXRlWydzbGlkZS11eC9jdGFubGVlL2N0YW5sZWUnXSh7fSkpO1xuICAgIHNoYWRvd0ljb25zSW5zdGFuY2Uuc3ZnUmVwbGFjZVdpdGhTdHJpbmcocHhTdmdJY29uU3RyaW5nLCB0aGlzLiRlbCk7XG4gICAgdGhpcy4kc3BlZWNoQm94ID0gJChcIi5zcGVlY2gtYm94XCIsIHRoaXMuJGVsKTtcbiAgICB0aGlzLiR0ZXh0ID0gJChcIi50ZXh0IHNwYW4uY29udGVudFwiLCB0aGlzLiRzcGVlY2hCb3gpO1xuICAgIHRoaXMuJG5leHRCdG4gPSAkKFwiLnRleHQgc3Bhbi5uZXh0XCIsIHRoaXMuJHNwZWVjaEJveCk7XG4gICAgdGhpcy4kbmV4dEJ0bi5vbihcImNsaWNrXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnBsYXlOZXh0QWN0aW9uKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICAkKCdodG1sJykub24oXCJrZXlkb3duXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKGUud2hpY2ggPT09IDM5KSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLnBsYXlOZXh0QWN0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ2N0YW5sZWUuYWN0aXZhdGUnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihhLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5wbGF5QWN0aW9uKGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgUHViU3ViLnN1YnNjcmliZSgnY3RhbmxlZS5jbGVhcicsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGEsIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmhpZGVUZXh0KCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCdjdGFubGVlLmdvaG9tZScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGEsIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnJldHVyblRvU3RhdGlvbigpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgUHViU3ViLnN1YnNjcmliZSgnY3RhbmxlZS5oaWRlJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oYSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuJGVsLmNzcyh7XG4gICAgICAgICAgZGlzcGxheTogXCJub25lXCJcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCdjdGFubGVlLnNob3cnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihhLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy4kZWwuY3NzKHtcbiAgICAgICAgICBkaXNwbGF5OiBcImluaXRpYWxcIlxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ2N0YW5sZWUuYWRkLWV2ZW50LWxpc3RlbmVyJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oYSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuYWRkRXZlbnRMaXN0ZW5lcihkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgICRwYXJlbnQuYXBwZW5kKHRoaXMuJGVsKTtcbiAgICB0aGlzLnJldHVyblRvU3RhdGlvbigpO1xuICB9XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUuYWN0aXZhdGUgPSBmdW5jdGlvbihkYXRhMSkge1xuICAgIHRoaXMuZGF0YSA9IGRhdGExO1xuICAgIGlmICh0aGlzLmRhdGEudGltZWxpbmUgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnRpbWVsaW5lID0gdGhpcy5kYXRhLnRpbWVsaW5lO1xuICAgIHRoaXMuc2VxdWVuY2UgPSBuZXcgU2VxdWVuY2UodGhpcy50aW1lbGluZSk7XG4gICAgcmV0dXJuIHRoaXMucGxheUFjdGlvbih0aGlzLnNlcXVlbmNlLmdldEN1cnJlbnRJdGVtKCkuYWN0aW9uKTtcbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5zYXkgPSBmdW5jdGlvbih0ZXh0LCBhdWRpbywgbmV4dCkge1xuICAgIGlmICh0ZXh0ICE9IG51bGwpIHtcbiAgICAgIHRoaXMuc2hvd1RleHQoKTtcbiAgICAgIHRoaXMuJHRleHQuaHRtbCh0ZXh0KTtcbiAgICB9XG4gICAgaWYgKGF1ZGlvICE9IG51bGwpIHtcbiAgICAgIGlmICh0aGlzLnRyYWNrICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy50cmFjay5zdG9wKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnRyYWNrID0gbmV3IEF1ZGlvVHJhY2soYXVkaW8pO1xuICAgICAgdGhpcy50cmFjay5wbGF5KChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKG5leHQgPT09ICdhdWRpbycpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5wbGF5TmV4dEFjdGlvbigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0pKHRoaXMpKTtcbiAgICB9XG4gICAgaWYgKG5leHQgPT09ICdjbGljaycpIHtcbiAgICAgIHJldHVybiB0aGlzLnNob3dOZXh0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmhpZGVOZXh0KCk7XG4gICAgfVxuICB9O1xuXG4gIEN0YW5sZWUucHJvdG90eXBlLnNldEVtb3Rpb24gPSBmdW5jdGlvbihlbW90aW9uKSB7fTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5nb3RvUG9zID0gZnVuY3Rpb24oeCwgeSwgZHVyYXRpb24sIGRlbGF5KSB7XG4gICAgaWYgKHggPT0gbnVsbCkge1xuICAgICAgeCA9IDk3MDtcbiAgICB9XG4gICAgaWYgKHkgPT0gbnVsbCkge1xuICAgICAgeSA9IDEwO1xuICAgIH1cbiAgICBpZiAoZHVyYXRpb24gPT0gbnVsbCkge1xuICAgICAgZHVyYXRpb24gPSA2MDA7XG4gICAgfVxuICAgIGlmIChkZWxheSA9PSBudWxsKSB7XG4gICAgICBkZWxheSA9IDA7XG4gICAgfVxuICAgIHRoaXMuJGVsLnZlbG9jaXR5KFwic3RvcFwiLCB0cnVlKTtcbiAgICByZXR1cm4gdGhpcy4kZWwudmVsb2NpdHkoe1xuICAgICAgdG9wOiB5LFxuICAgICAgbGVmdDogeFxuICAgIH0sIHtcbiAgICAgIGRlbGF5OiBkZWxheSxcbiAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgIGVhc2luZzogXCJlYXNlSW5PdXRRdWludFwiXG4gICAgfSk7XG4gIH07XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUuZ290b0l0ZW0gPSBmdW5jdGlvbihpZCkge1xuICAgIHZhciBwb3M7XG4gICAgcG9zID0gYXJpc3RvdGxlLm1vdmllLmdldEdsb2JhbFBvcyhpZCk7XG4gICAgaWYgKHBvcyA9PT0gbnVsbCkge1xuICAgICAgYXJpc3RvdGxlW1widGhyb3dcIl0oXCJjdGFubGVlIHdhbnRzIHRvIGhvdmVyIGJ5IGBcIiArIGlkICsgXCJgLCBidXQgaXMgdW5hYmxlIHRvIGZpbmQgYW4gaXRlbSB3aXRoIHRoZSBpZCBcIiArIGlkKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcG9zLnggKz0gMDtcbiAgICBwb3MueSArPSAwO1xuICAgIHJldHVybiB0aGlzLmdvdG9Qb3MocG9zLngsIHBvcy55KTtcbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5nb3RvID0gZnVuY3Rpb24oYWN0aW9uKSB7XG4gICAgdmFyIG1lO1xuICAgIGlmICh0eXBlb2YgYWN0aW9uLnBvcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgaWYgKGFjdGlvbi5kZWxheU1vdmUgIT0gbnVsbCkge1xuICAgICAgICBtZSA9IHRoaXM7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBtZS5nb3RvSXRlbShhY3Rpb24ucG9zLCBhY3Rpb24uZGVsYXlNb3ZlKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5nb3RvSXRlbShhY3Rpb24ucG9zKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuZ290b1BvcyhhY3Rpb24ucG9zWzBdLCBhY3Rpb24ucG9zWzFdLCBhY3Rpb24ucG9zWzJdLCBhY3Rpb24ucG9zWzNdKTtcbiAgICB9XG4gIH07XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBpZiAoZGF0YS5ldmVudCA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgcmV0dXJuIHRoaXMudHJhY2suYWRkT25Db21wbGV0ZSgoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBhcmlzdG90bGUuY29tbWFuZGVyW1wiZG9cIl0oZGF0YS5hY3Rpb24pO1xuICAgICAgICB9O1xuICAgICAgfSkodGhpcykpO1xuICAgIH1cbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5wbGF5TmV4dEFjdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLnRyYWNrICE9IG51bGwpIHtcbiAgICAgIHRoaXMudHJhY2suc3RvcCgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zZXF1ZW5jZS5pc0F0TGFzdEl0ZW0oKSkge1xuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXF1ZW5jZS5uZXh0KCk7XG4gICAgICByZXR1cm4gdGhpcy5wbGF5QWN0aW9uKHRoaXMuc2VxdWVuY2UuZ2V0Q3VycmVudEl0ZW0oKS5hY3Rpb24pO1xuICAgIH1cbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5wbGF5QWN0aW9uID0gZnVuY3Rpb24oYWN0aW9uSWQpIHtcbiAgICB2YXIgYWN0aW9uO1xuICAgIGlmICh0aGlzLmRhdGEuYWN0aW9uc1thY3Rpb25JZF0gPT0gbnVsbCkge1xuICAgICAgYXJpc3RvdGxlW1widGhyb3dcIl0oXCJjdGFubGVlIHdhcyBhc2tlZCB0byBwbGF5IHRoZSBhY3Rpb24gbmFtZWQgYFwiICsgYWN0aW9uSWQgKyBcImAsIGJ1dCBubyBhY3Rpb24gd2l0aCB0aGF0IGlkIGV4aXN0cy5cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0RmlsdGVyKCdibGFjay1nbG93Jyk7XG4gICAgYWN0aW9uID0gdGhpcy5vdmVybGF5RGVmYXVsdHMoYWN0aW9uSWQpO1xuICAgIGlmIChhY3Rpb24uYWN0aW9uICE9IG51bGwpIHtcbiAgICAgIGFyaXN0b3RsZS5jb21tYW5kZXJbXCJkb1wiXShhY3Rpb24uYWN0aW9uKTtcbiAgICB9XG4gICAgaWYgKGFjdGlvbi5lbW8gIT0gbnVsbCkge1xuICAgICAgdGhpcy5zZXRFbW90aW9uKGFjdGlvbi5lbW8pO1xuICAgIH1cbiAgICBpZiAoYWN0aW9uLnBvcyAhPSBudWxsKSB7XG4gICAgICB0aGlzLmdvdG8oYWN0aW9uKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc2F5KGFjdGlvbi50ZXh0LCBhY3Rpb24uYXVkaW8sIGFjdGlvbi5uZXh0KTtcbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucmV0dXJuVG9TdGF0aW9uKCk7XG4gICAgcmV0dXJuIFB1YlN1Yi5wdWJsaXNoKCdjdGFubGVlLmNvbXBsZXRlJyk7XG4gIH07XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUucmV0dXJuVG9TdGF0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5oaWRlVGV4dCgpO1xuICAgIHRoaXMuZ290b1BvcygpO1xuICAgIHJldHVybiB0aGlzLnNldEZpbHRlcignZ2xvdycpO1xuICB9O1xuXG4gIEN0YW5sZWUucHJvdG90eXBlLnNob3dUZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJHNwZWVjaEJveC5jc3Moe1xuICAgICAgb3BhY2l0eTogMSxcbiAgICAgIFwicG9pbnRlci1ldmVudHNcIjogXCJhbGxcIlxuICAgIH0pO1xuICB9O1xuXG4gIEN0YW5sZWUucHJvdG90eXBlLmhpZGVUZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJHNwZWVjaEJveC5jc3Moe1xuICAgICAgb3BhY2l0eTogMCxcbiAgICAgIFwicG9pbnRlci1ldmVudHNcIjogXCJub25lXCJcbiAgICB9KTtcbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5zaG93TmV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRuZXh0QnRuLmNzcyh7XG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgJ3BvaW50ZXItZXZlbnRzJzogJ2FsbCdcbiAgICB9KTtcbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5oaWRlTmV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRuZXh0QnRuLmNzcyh7XG4gICAgICBvcGFjaXR5OiAwLFxuICAgICAgJ3BvaW50ZXItZXZlbnRzJzogJ25vbmUnXG4gICAgfSk7XG4gIH07XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUuc2V0RmlsdGVyID0gZnVuY3Rpb24oa2luZCkge1xuICAgIHJldHVybiAkKCcjY3RhbmxlZScpLmNzcyh7XG4gICAgICBmaWx0ZXI6IFwidXJsKCcjXCIgKyBraW5kICsgXCInKVwiXG4gICAgfSk7XG4gIH07XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUuZ2V0SW5kZXhPZkFjdGlvbiA9IGZ1bmN0aW9uKGFjdGlvbikge1xuICAgIHZhciBkYXRhLCBpLCBqLCBsZW4sIHJlZjtcbiAgICBpZiAodGhpcy50aW1lbGluZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgcmVmID0gdGhpcy50aW1lbGluZTtcbiAgICBmb3IgKGkgPSBqID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaiA8IGxlbjsgaSA9ICsraikge1xuICAgICAgZGF0YSA9IHJlZltpXTtcbiAgICAgIGlmIChkYXRhLmFjdGlvbiA9PT0gYWN0aW9uKSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5vdmVybGF5RGVmYXVsdHMgPSBmdW5jdGlvbihhY3Rpb25JZCkge1xuICAgIHZhciBhY3Rpb25zLCBrZXksIHJlZiwgdmFsO1xuICAgIGlmICh0aGlzLmRhdGEuZGVmYXVsdHMgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0YS5hY3Rpb25zW2FjdGlvbklkXTtcbiAgICB9XG4gICAgYWN0aW9ucyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhLmRlZmF1bHRzKSk7XG4gICAgcmVmID0gdGhpcy5kYXRhLmFjdGlvbnNbYWN0aW9uSWRdO1xuICAgIGZvciAoa2V5IGluIHJlZikge1xuICAgICAgdmFsID0gcmVmW2tleV07XG4gICAgICBhY3Rpb25zW2tleV0gPSB2YWw7XG4gICAgfVxuICAgIHJldHVybiBhY3Rpb25zO1xuICB9O1xuXG4gIHJldHVybiBDdGFubGVlO1xuXG59KSgpO1xuIiwidmFyIEdlbmVyaWNVaTtcblxubW9kdWxlLmV4cG9ydHMgPSBHZW5lcmljVWkgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIEdlbmVyaWNVaSgkZWwpIHtcbiAgICB2YXIgJG5vZGU7XG4gICAgJG5vZGUgPSAkKGphZGVUZW1wbGF0ZVsnbWlzYy9nZW5lcmljLXVpJ10oe30pKTtcbiAgICBzaGFkb3dJY29uc0luc3RhbmNlLnN2Z1JlcGxhY2VXaXRoU3RyaW5nKHB4U3ZnSWNvblN0cmluZywgJG5vZGUpO1xuICAgIHRoaXMuJGNvbnRpbnVlU3RyaXAgPSAkKFwiLmNvbnRpbnVlLXN0cmlwXCIsICRub2RlKTtcbiAgICAkKFwiLmNvbnRpbnVlLWJ0blwiLCAkbm9kZSkub24oXCJjbGlja1wiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgUHViU3ViLnB1Ymxpc2goXCJzbGlkZXMubmV4dC1zbGlkZVwiKTtcbiAgICAgICAgcmV0dXJuIF90aGlzLmhpZGVDb250aW51ZVN0cmlwKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0aGlzLmhpZGVDb250aW51ZVN0cmlwKCk7XG4gICAgJGVsLmFwcGVuZCgkbm9kZSk7XG4gICAgUHViU3ViLnN1YnNjcmliZSgnY29udGludWUuc2hvdycsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMuc2hvd0NvbnRpbnVlU3RyaXAoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9XG5cbiAgR2VuZXJpY1VpLnByb3RvdHlwZS5zaG93Q29udGludWVTdHJpcCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRjb250aW51ZVN0cmlwLmNzcyh7XG4gICAgICBkaXNwbGF5OiBcImluaXRpYWxcIlxuICAgIH0pO1xuICB9O1xuXG4gIEdlbmVyaWNVaS5wcm90b3R5cGUuaGlkZUNvbnRpbnVlU3RyaXAgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kY29udGludWVTdHJpcC5jc3Moe1xuICAgICAgZGlzcGxheTogXCJub25lXCJcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gR2VuZXJpY1VpO1xuXG59KSgpO1xuIiwidmFyIEN0YW5sZWUsIERlZmVuZGVyQ2FyZHMsIERpYWxvZ3VlLCBFeHBsb3JlQ2FyZHMsIEdlbmVyaWNVaUVsZW1lbnRzLCBHaG9zdFVYLCBRdWl6LCBTZWxlY3Rpb25EaWFsb2d1ZSwgU2ltcGxlU2VsZWN0aW9uLCBTbGlkZVVYO1xuXG5DdGFubGVlID0gcmVxdWlyZSgnc2xpZGUtdXgvY3RhbmxlZS9DdGFubGVlJyk7XG5cbkRlZmVuZGVyQ2FyZHMgPSByZXF1aXJlKCdzbGlkZS11eC9jb21wb25lbnRzL2RlZmVuZGVyLWNhcmRzJyk7XG5cbkRpYWxvZ3VlID0gcmVxdWlyZSgnc2xpZGUtdXgvY29tcG9uZW50cy9kaWFsb2d1ZScpO1xuXG5FeHBsb3JlQ2FyZHMgPSByZXF1aXJlKCdzbGlkZS11eC9jb21wb25lbnRzL2V4cGxvcmUtY2FyZHMnKTtcblxuR2hvc3RVWCA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvZ2hvc3QtdXgnKTtcblxuUXVpeiA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvcXVpei9xdWl6Jyk7XG5cblNlbGVjdGlvbkRpYWxvZ3VlID0gcmVxdWlyZSgnc2xpZGUtdXgvY29tcG9uZW50cy9zZWxlY3Rpb24tZGlhbG9ndWUnKTtcblxuU2ltcGxlU2VsZWN0aW9uID0gcmVxdWlyZSgnc2xpZGUtdXgvY29tcG9uZW50cy9zaW1wbGUtc2VsZWN0aW9uJyk7XG5cbkdlbmVyaWNVaUVsZW1lbnRzID0gcmVxdWlyZSgnc2xpZGUtdXgvZ2VuZXJpYy11aScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNsaWRlVVggPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIFNsaWRlVVgoJGVsKSB7XG4gICAgdGhpcy4kZWwgPSAkZWw7XG4gICAgdGhpcy5jb21wb25lbnRzID0gW107XG4gICAgdGhpcy5jdGFubGVlID0gbmV3IEN0YW5sZWUodGhpcy4kZWwpO1xuICAgIHRoaXMuZ2VuZXJpY1VpID0gbmV3IEdlbmVyaWNVaUVsZW1lbnRzKHRoaXMuJGVsKTtcbiAgfVxuXG4gIFNsaWRlVVgucHJvdG90eXBlLnBvcHVsYXRlID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciBjb21wb25lbnQsIGksIGxlbiwgcmVmLCByZXN1bHRzO1xuICAgIHRoaXMucmVtb3ZlQ3VycmVudENvbXBvbmVudHMoKTtcbiAgICB0aGlzLmNvbXBvbmVudHMgPSBbXTtcbiAgICBpZiAoKGRhdGEgIT0gbnVsbCA/IGRhdGEuY29tcG9uZW50cyA6IHZvaWQgMCkgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZWYgPSBkYXRhLmNvbXBvbmVudHM7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgY29tcG9uZW50ID0gcmVmW2ldO1xuICAgICAgcmVzdWx0cy5wdXNoKHRoaXMuY29tcG9uZW50cy5wdXNoKHRoaXMuYWRkQ29tcG9uZW50KGNvbXBvbmVudCkpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgU2xpZGVVWC5wcm90b3R5cGUuYWRkQ29tcG9uZW50ID0gZnVuY3Rpb24oY29tcG9uZW50RGF0YSkge1xuICAgIHZhciBjb21wb25lbnQ7XG4gICAgc3dpdGNoIChjb21wb25lbnREYXRhLmtpbmQpIHtcbiAgICAgIGNhc2UgXCJzZWxlY3Rpb24tZGlhbG9ndWVcIjpcbiAgICAgICAgY29tcG9uZW50ID0gbmV3IFNlbGVjdGlvbkRpYWxvZ3VlKHRoaXMuJGVsLCBjb21wb25lbnREYXRhLmNvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInNpbXBsZS1zZWxlY3Rpb25cIjpcbiAgICAgICAgY29tcG9uZW50ID0gbmV3IFNpbXBsZVNlbGVjdGlvbih0aGlzLiRlbCwgY29tcG9uZW50RGF0YS5jb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJkaWFsb2d1ZVwiOlxuICAgICAgICBjb21wb25lbnQgPSBuZXcgRGlhbG9ndWUodGhpcy4kZWwsIGNvbXBvbmVudERhdGEuY29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiZ2hvc3QtdXhcIjpcbiAgICAgICAgY29tcG9uZW50ID0gbmV3IEdob3N0VVgodGhpcy4kZWwsIGNvbXBvbmVudERhdGEuY29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwicXVpelwiOlxuICAgICAgICBjb21wb25lbnQgPSBuZXcgUXVpeih0aGlzLiRlbCwgY29tcG9uZW50RGF0YS5jb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJkZWZlbmRlci1jYXJkc1wiOlxuICAgICAgICBjb21wb25lbnQgPSBuZXcgRGVmZW5kZXJDYXJkcyh0aGlzLiRlbCwgY29tcG9uZW50RGF0YS5jb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJleHBsb3JlLWNhcmRzXCI6XG4gICAgICAgIGNvbXBvbmVudCA9IG5ldyBFeHBsb3JlQ2FyZHModGhpcy4kZWwsIGNvbXBvbmVudERhdGEuY29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBhcmlzdG90bGVbXCJ0aHJvd1wiXShcInRyaWVkIHRvIGNyZWF0ZSBhbiB1bnJlY29nbml6ZWQgY29tcG9uZW50IHR5cGU6IGBcIiArIGNvbXBvbmVudERhdGEua2luZCArIFwiYFwiKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjb21wb25lbnQ7XG4gIH07XG5cbiAgU2xpZGVVWC5wcm90b3R5cGUucmVtb3ZlQ3VycmVudENvbXBvbmVudHMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgY29tcG9uZW50LCBpLCBsZW4sIHJlZiwgcmVzdWx0cztcbiAgICByZWYgPSB0aGlzLmNvbXBvbmVudHM7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgY29tcG9uZW50ID0gcmVmW2ldO1xuICAgICAgcmVzdWx0cy5wdXNoKGNvbXBvbmVudC5kZXN0cm95KCkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICByZXR1cm4gU2xpZGVVWDtcblxufSkoKTtcbiJdfQ==

var aristotle, episode, getQueryVariable, userSpecifiedEpisode;

getQueryVariable = function(variable) {
  var item, pair, query, vars, _i, _len;
  query = window.location.search.substring(1);
  vars = query.split("&");
  for (_i = 0, _len = vars.length; _i < _len; _i++) {
    item = vars[_i];
    pair = item.split("=");
    if (pair[0] === variable) {
      return pair[1];
    }
  }
  return false;
};

userSpecifiedEpisode = getQueryVariable('episode');

episode = !userSpecifiedEpisode ? "/episodes/episode2" : "/episodes/" + userSpecifiedEpisode;

aristotle = new Aristotle($(".holder"), episode);
