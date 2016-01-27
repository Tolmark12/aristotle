jadeTemplate = {};
jadeTemplate['aristotle'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"aristotle\"><div class=\"chrome\"></div><div class=\"movie\"><div class=\"wrapper\"></div><div class=\"dynamics\"></div></div><div class=\"slide-ux\"></div><div style=\"opacity:0\" class=\"svg-filters\"><svg class=\"defs\"><defs><filter id=\"glow\"><fegaussianblur in=\"SourceGraphic\" stddeviation=\"1.5\"></fegaussianblur><feComponentTransfer><feFuncA type=\"linear\" slope=\"0.8\"> </feFuncA></feComponentTransfer><femerge><femergenode></femergenode><femergenode in=\"SourceGraphic\"></femergenode></femerge></filter><filter id=\"highlightBCA\"><feColorMatrix type=\"matrix\" values=\"0.15 0 0 0 0                                               0.76 0 0 0 0                                               0.86 0 0 0 0                                               0    0 0 1 0\"></feColorMatrix><feComponentTransfer><feFuncA type=\"linear\" slope=\"1\"> </feFuncA></feComponentTransfer><fegaussianblur stddeviation=\"0.3\" result=\"coloredBlur\"></fegaussianblur><femerge><femergenode in=\"SourceGraphic\"></femergenode><feMergeNode in=\"coloredBlur\"></feMergeNode></femerge></filter><filter id=\"highlightBCSI\"><feColorMatrix type=\"matrix\" values=\"0.11 0 0 0 0                                               1    0 0 0 0                                               0.58 0 0 0 0                                               0    0 0 1 0\"></feColorMatrix><feComponentTransfer><feFuncA type=\"linear\" slope=\"1\"> </feFuncA></feComponentTransfer><fegaussianblur stddeviation=\"0.3\" result=\"coloredBlur\"></fegaussianblur><femerge><femergenode in=\"SourceGraphic\"></femergenode><feMergeNode in=\"coloredBlur\"></feMergeNode></femerge></filter><filter id=\"highlightPCA\"><feColorMatrix type=\"matrix\" values=\"0.99 0 0 0 0                                               0.01 0 0 0 0                                               0.99 0 0 0 0                                               0    0 0 1 0\"></feColorMatrix><feComponentTransfer><feFuncA type=\"linear\" slope=\"1\"> </feFuncA></feComponentTransfer><fegaussianblur stddeviation=\"0.3\" result=\"coloredBlur\"></fegaussianblur><femerge><femergenode in=\"SourceGraphic\"></femergenode><feMergeNode in=\"coloredBlur\"></feMergeNode></femerge></filter><filter id=\"blueBlur\"><feColorMatrix type=\"matrix\" values=\"0.08 0 0 0 0                                               0.17 0 0 0 0                                               0.37 0 0 0 0                                               0    0 0 1 0\"></feColorMatrix><feComponentTransfer><feFuncA type=\"linear\" slope=\"1\"> </feFuncA></feComponentTransfer><fegaussianblur stddeviation=\"0\" result=\"coloredBlur\"></fegaussianblur><femerge><femergenode in=\"SourceGraphic\"></femergenode><feMergeNode in=\"coloredBlur\"></feMergeNode></femerge></filter><filter id=\"black-glow\"><feColorMatrix type=\"matrix\" values=\"0 0 0 0 0                                              0.3 0 0 0 0                                              0.3 0 0 0 0                                              0 0 0 0.8 0\"></feColorMatrix><feGaussianBlur stdDeviation=\"2.5\" result=\"coloredBlurs\"></feGaussianBlur><feMerge><feMergeNode in=\"coloredBlurs\"></feMergeNode><feMergeNode in=\"SourceGraphic\"></feMergeNode></feMerge></filter><filter id=\"dropshadow\" height=\"130%\"><fegaussianblur in=\"SourceAlpha\" stddeviation=\"3\"></fegaussianblur><feoffset dx=\"2\" dy=\"2\" result=\"offsetblur\"></feoffset><femerge><femergenode></femergenode><femergenode in=\"SourceGraphic\"></femergenode></femerge></filter></defs></svg></div></div>");;return buf.join("");
};

jadeTemplate['chrome-ui/progress-map'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (milestones, undefined) {
buf.push("<div class=\"progress-map bottom-item\">");
// iterate milestones
;(function(){
  var $$obj = milestones;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var milestone = $$obj[$index];

buf.push("<div" + (jade.attr("id", "" + (milestone.id) + "", true, false)) + (jade.attr("data-title", "" + ( milestone.title ) + "", true, false)) + (jade.attr("data-chapter", "" + ( milestone.chapter ) + "", true, false)) + (jade.attr("data-txt", "" + ( milestone.txt ) + "", true, false)) + (jade.cls(['milestone',milestone.icon === "chapter-progress-chapter" ? "chapter" : undefined], [null,true])) + "><img" + (jade.attr("data-src", "" + ( milestone.icon ) + "", true, false)) + " class=\"shadow-icon\"/></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var milestone = $$obj[$index];

buf.push("<div" + (jade.attr("id", "" + (milestone.id) + "", true, false)) + (jade.attr("data-title", "" + ( milestone.title ) + "", true, false)) + (jade.attr("data-chapter", "" + ( milestone.chapter ) + "", true, false)) + (jade.attr("data-txt", "" + ( milestone.txt ) + "", true, false)) + (jade.cls(['milestone',milestone.icon === "chapter-progress-chapter" ? "chapter" : undefined], [null,true])) + "><img" + (jade.attr("data-src", "" + ( milestone.icon ) + "", true, false)) + " class=\"shadow-icon\"/></div>");
    }

  }
}).call(this);

buf.push("</div>");}.call(this,"milestones" in locals_for_with?locals_for_with.milestones:typeof milestones!=="undefined"?milestones:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
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
buf.push("<div class=\"top\"><div class=\"main\"><div class=\"name-and-rank\"><div class=\"status-badge\"><img" + (jade.attr("data-src", "" + (badge) + "", true, false)) + " class=\"shadow-icon\"/></div><div class=\"divider\"></div><div class=\"identity\"><h1 class=\"name\">" + (jade.escape((jade_interp = name) == null ? '' : jade_interp)) + "</h1><h2 class=\"rank\">" + (jade.escape((jade_interp = rank) == null ? '' : jade_interp)) + "</h2></div><div class=\"divider second\"></div></div><div" + (jade.cls(['episodes',"" + (episode) + ""], [null,true])) + "><div data-episode=\"1\"" + (jade.cls(['badge',"" + (episode >= 1 ? 'active' : '') + ""], [null,true])) + "><img data-src=\"ep1-badge\" class=\"shadow-icon\"/></div><div data-episode=\"2\"" + (jade.cls(['badge',"" + (episode >= 2 ? 'active' : '') + ""], [null,true])) + "><img data-src=\"ep2-badge\" class=\"shadow-icon\"/></div><div data-episode=\"3\"" + (jade.cls(['badge',"" + (episode >= 3 ? 'active' : '') + ""], [null,true])) + "><img data-src=\"ep3-badge\" class=\"shadow-icon\"/></div><div data-episode=\"4\"" + (jade.cls(['badge',"" + (episode >= 4 ? 'active' : '') + ""], [null,true])) + "><img data-src=\"ep4-badge\" class=\"shadow-icon\"/></div><div data-episode=\"5\"" + (jade.cls(['badge',"" + (episode >= 5 ? 'active' : '') + ""], [null,true])) + "><img data-src=\"ep5-badge\" class=\"shadow-icon\"/></div></div></div><div class=\"learn-mode\"><h1>Learn Mode</h1><h2>[ Warcore ]</h2></div></div>");}.call(this,"badge" in locals_for_with?locals_for_with.badge:typeof badge!=="undefined"?badge:undefined,"name" in locals_for_with?locals_for_with.name:typeof name!=="undefined"?name:undefined,"rank" in locals_for_with?locals_for_with.rank:typeof rank!=="undefined"?rank:undefined,"episode" in locals_for_with?locals_for_with.episode:typeof episode!=="undefined"?episode:undefined));;return buf.join("");
};

jadeTemplate['chrome-ui/vcr'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"vcr bottom-item\"><div class=\"attic hidden\"><div id=\"ani-replay\" class=\"icon-btn\"> <div class=\"txt\">Replay</div><img data-src=\"btn-generic\" class=\"shadow-icon\"/></div><div id=\"ani-continue\" class=\"icon-btn\"> <div class=\"txt\">Continue</div><img data-src=\"btn-generic\" class=\"shadow-icon\"/></div></div><div class=\"track\"><div class=\"playhead\"><div class=\"svg\"><img data-src=\"playhead\" class=\"shadow-icon\"/></div></div></div><div class=\"pause-and-play\"><img data-src=\"pause-btn\" class=\"shadow-icon\"/></div></div>");;return buf.join("");
};

jadeTemplate['misc/chapter-heading'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (title, subtitle) {
buf.push("<div class=\"chapter-heading-bg\"><div class=\"chapter-heading\"><div class=\"title\"><div class=\"bracket flip\"><img data-src=\"chapter-bracket\" class=\"shadow-icon\"/></div><div class=\"words\"><div class=\"title\">" + (jade.escape((jade_interp = title) == null ? '' : jade_interp)) + "</div><div class=\"sub-title\">" + (jade.escape((jade_interp = subtitle) == null ? '' : jade_interp)) + "</div></div><div class=\"bracket\"><img data-src=\"chapter-bracket\" class=\"shadow-icon\"/></div></div><div class=\"bar\"><div class=\"bg\"></div><div class=\"fg\"></div></div></div></div>");}.call(this,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined,"subtitle" in locals_for_with?locals_for_with.subtitle:typeof subtitle!=="undefined"?subtitle:undefined));;return buf.join("");
};

jadeTemplate['misc/generic-ui'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"generic-ui\"><div class=\"continue-strip\"><div class=\"continue-btn white\"><img data-src=\"btn-continue\" class=\"shadow-icon\"/></div><div class=\"continue-btn explorer\"><img data-src=\"finished-exploring\" class=\"shadow-icon\"/></div></div></div>");;return buf.join("");
};

jadeTemplate['misc/logger'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"logs\"><div class=\"logger\"><div class=\"error\"></div></div><div class=\"message\"></div></div>");;return buf.join("");
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

jadeTemplate['movie/video'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (src) {
buf.push("<video autoplay=\"true\"><source" + (jade.attr("src", "" + (src) + "", true, false)) + " type=\"video/mp4\"/></video>");}.call(this,"src" in locals_for_with?locals_for_with.src:typeof src!=="undefined"?src:undefined));;return buf.join("");
};

jadeTemplate['slide-ux/label'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (id, cssClass, title, text) {
buf.push("<div" + (jade.attr("id", "" + (id) + "", true, false)) + " class=\"label-wrapper\"><div" + (jade.cls(['label','floating',"" + (cssClass) + ""], [null,null,true])) + "><div class=\"title\">" + (jade.escape(null == (jade_interp = title) ? "" : jade_interp)) + "</div>");
if ( locals.text)
{
buf.push("<div class=\"text\">" + (null == (jade_interp = text) ? "" : jade_interp) + "</div>");
}
buf.push("</div></div>");}.call(this,"id" in locals_for_with?locals_for_with.id:typeof id!=="undefined"?id:undefined,"cssClass" in locals_for_with?locals_for_with.cssClass:typeof cssClass!=="undefined"?cssClass:undefined,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined,"text" in locals_for_with?locals_for_with.text:typeof text!=="undefined"?text:undefined));;return buf.join("");
};

jadeTemplate['slide-ux/components/call-sign-select'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"call-sign-select\"><p>Every Defender worth their salt has a call sign they are known by. Let's choose yours.<br/>Keep it clean, soldier.</p><div class=\"input\"><input id=\"callsign-txt\" type=\"text\" placeholder=\"Type a Call Sign\" maxlength=\"15\"/><div id=\"generate-callsign\" class=\"button\">Generate One For Me  </div></div><div class=\"badge-box\"><div class=\"badge\"><img data-src=\"rank-badge-recruit\" class=\"shadow-icon\"/></div><div class=\"txt\"><h1 id=\"name\"></h1><h2>Recruit</h2></div></div></div>");;return buf.join("");
};

jadeTemplate['slide-ux/components/duties'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (duties) {
buf.push("<div class=\"list\"><h1>Duties</h1><div class=\"btns\">");
// iterate duties
;(function(){
  var $$obj = duties;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var duty = $$obj[$index];

buf.push("<div" + (jade.attr("id", "" + (duty.id) + "", true, false)) + " class=\"btn duty-btn\"><div class=\"icon active\"><img data-src=\"duty-active\" class=\"shadow-icon\"/></div><div class=\"icon complete\"><img data-src=\"duty-complete\" class=\"shadow-icon\"/></div><div class=\"icon duty\"><img data-src=\"duty\" class=\"shadow-icon\"/></div><h1>" + (jade.escape(null == (jade_interp = duty.title) ? "" : jade_interp)) + "</h1></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var duty = $$obj[$index];

buf.push("<div" + (jade.attr("id", "" + (duty.id) + "", true, false)) + " class=\"btn duty-btn\"><div class=\"icon active\"><img data-src=\"duty-active\" class=\"shadow-icon\"/></div><div class=\"icon complete\"><img data-src=\"duty-complete\" class=\"shadow-icon\"/></div><div class=\"icon duty\"><img data-src=\"duty\" class=\"shadow-icon\"/></div><h1>" + (jade.escape(null == (jade_interp = duty.title) ? "" : jade_interp)) + "</h1></div>");
    }

  }
}).call(this);

buf.push("</div></div><div class=\"content\"></div>");}.call(this,"duties" in locals_for_with?locals_for_with.duties:typeof duties!=="undefined"?duties:undefined));;return buf.join("");
};

jadeTemplate['slide-ux/components/duty-details'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (title, html) {
buf.push("<div class=\"duty-content\"><div class=\"title\">" + (jade.escape(null == (jade_interp = title) ? "" : jade_interp)) + "</div><div class=\"user-content\">" + (null == (jade_interp = html) ? "" : jade_interp) + "</div><div id=\"acknowledge\" class=\"icon-btn\"> <div class=\"txt\">I Acknowledge</div><img data-src=\"btn-acknowledge\" class=\"shadow-icon\"/></div></div>");}.call(this,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined,"html" in locals_for_with?locals_for_with.html:typeof html!=="undefined"?html:undefined));;return buf.join("");
};

jadeTemplate['slide-ux/components/episode-intro'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (episode, title, subtitle) {
buf.push("<div class=\"episode-bookend episode-intro\"><div class=\"bg\"><img data-src=\"tesselation\" class=\"shadow-icon\"/></div><div class=\"content\"><div class=\"fist\"><img data-src=\"lightning-fist\" class=\"shadow-icon\"/></div><div class=\"badges\"><div class=\"badge active\"><img data-src=\"ep1-badge\" scalable=\"true\" class=\"shadow-icon\"/></div><div" + (jade.cls(['badge',episode > 1 ? "active" : ""], [null,true])) + "><img data-src=\"ep2-badge\" scalable=\"true\" class=\"shadow-icon\"/></div><div" + (jade.cls(['badge',episode > 2 ? "active" : ""], [null,true])) + "><img data-src=\"ep3-badge\" scalable=\"true\" class=\"shadow-icon\"/></div><div" + (jade.cls(['badge',episode > 3 ? "active" : ""], [null,true])) + "><img data-src=\"ep4-badge\" scalable=\"true\" class=\"shadow-icon\"/></div><div" + (jade.cls(['badge',episode > 4 ? "active" : ""], [null,true])) + "><img data-src=\"ep5-badge\" scalable=\"true\" class=\"shadow-icon\"/></div></div><div class=\"txt\"><div class=\"title\">" + (jade.escape(null == (jade_interp = title) ? "" : jade_interp)) + "</div><div class=\"subtitle\">" + (jade.escape(null == (jade_interp = subtitle) ? "" : jade_interp)) + "</div></div></div></div>");}.call(this,"episode" in locals_for_with?locals_for_with.episode:typeof episode!=="undefined"?episode:undefined,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined,"subtitle" in locals_for_with?locals_for_with.subtitle:typeof subtitle!=="undefined"?subtitle:undefined));;return buf.join("");
};

jadeTemplate['slide-ux/components/episode-outro'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (rankId, rank) {
buf.push("<div class=\"episode-bookend episode-outro\"><div class=\"bg\"><img data-src=\"tesselation\" class=\"shadow-icon\"/></div><div class=\"content\"><div class=\"title\">Level Up</div><div class=\"rank\"><img" + (jade.attr("data-src", "rank-badge-" + (rankId) + "", true, false)) + " scalable=\"true\" class=\"shadow-icon\"/></div><div class=\"txt\">" + (jade.escape(null == (jade_interp = rank) ? "" : jade_interp)) + "</div><div class=\"fist\"><img data-src=\"lightning-fist\" class=\"shadow-icon\"/></div></div></div>");}.call(this,"rankId" in locals_for_with?locals_for_with.rankId:typeof rankId!=="undefined"?rankId:undefined,"rank" in locals_for_with?locals_for_with.rank:typeof rank!=="undefined"?rank:undefined));;return buf.join("");
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

jadeTemplate['slide-ux/components/gut-check'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"gut-check\"><div class=\"txt\">How are you feeling?</div></div>");;return buf.join("");
};

jadeTemplate['slide-ux/components/personal-info-intro'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (name, organization) {
buf.push("<div class=\"personal-info-intro\"><h2>Employee Name</h2><h1>" + (jade.escape(null == (jade_interp = name) ? "" : jade_interp)) + "</h1><h2>Organization</h2><h1>" + (jade.escape(null == (jade_interp = organization) ? "" : jade_interp)) + "</h1><h2>Defender Rank</h2><h1>Recruit</h1><img data-src=\"rank-badge-recruit\" class=\"shadow-icon\"/><h2>Clearance Level</h2><h1>Critical Infrastructure Protection (CIP) Version Five</h1></div>");}.call(this,"name" in locals_for_with?locals_for_with.name:typeof name!=="undefined"?name:undefined,"organization" in locals_for_with?locals_for_with.organization:typeof organization!=="undefined"?organization:undefined));;return buf.join("");
};

jadeTemplate['slide-ux/components/sound-test'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"sound-test\"><div class=\"volume\"><img data-src=\"speaker\" class=\"shadow-icon flip\"/><div class=\"txt\">Turn on your headphones or speakers now.<br/>It'll be worth it. Trust me.</div><img data-src=\"speaker\" class=\"shadow-icon\"/></div><div id=\"sound-test\" class=\"btn\">Play Test Sound</div><div class=\"silence\"><img data-src=\"closed-caption-big\" class=\"shadow-icon\"/><div class=\"txt\">Show or hide movie captions at any time<br/>using the cc button in the corner.</div><img data-src=\"closed-caption-big\" class=\"shadow-icon\"/></div></div>");;return buf.join("");
};

jadeTemplate['slide-ux/components/training-complete'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"training-complete\"><div class=\"txt\">You Passed This Course<br/>And May Close This Window</div></div>");;return buf.join("");
};

jadeTemplate['slide-ux/text-dialogue/closed-caption'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"cc\"><div class=\"closed-caption\"><div class=\"text\"></div></div><div class=\"closed-caption-icon\"><img data-src=\"closed-caption-btn\" class=\"shadow-icon\"/></div></div>");;return buf.join("");
};

jadeTemplate['slide-ux/text-dialogue/ctanlee'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"ctanlee\"><div class=\"face\"></div><div class=\"speech-box\"> <div class=\"text\"> <span class=\"content\"> </span><span class=\"next\"></span></div></div></div>");;return buf.join("");
};

jadeTemplate['slide-ux/components/cards/defender'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (name, quote, personal1, personal2, duties) {
buf.push("<div class=\"defender-wrap\"><div class=\"defender-card\"><div class=\"name\">" + (jade.escape(null == (jade_interp = name) ? "" : jade_interp)) + "</div><div class=\"quote\">" + (jade.escape(null == (jade_interp = quote) ? "" : jade_interp)) + "</div><h3 class=\"personal1\">" + (jade.escape((jade_interp = personal1) == null ? '' : jade_interp)) + ":</h3><div class=\"personal2\">" + (jade.escape(null == (jade_interp = personal2) ? "" : jade_interp)) + "</div><div class=\"info\"><h3>Duties And Evidence</h3><div class=\"defender-duties\">");
// iterate duties
;(function(){
  var $$obj = duties;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var duty = $$obj[$index];

buf.push("<div class=\"evidence\">" + (null == (jade_interp = duty) ? "" : jade_interp) + "</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var duty = $$obj[$index];

buf.push("<div class=\"evidence\">" + (null == (jade_interp = duty) ? "" : jade_interp) + "</div>");
    }

  }
}).call(this);

buf.push("</div></div><div class=\"got-it-btn\"><img data-src=\"btn-got-it\" class=\"shadow-icon\"/></div></div></div>");}.call(this,"name" in locals_for_with?locals_for_with.name:typeof name!=="undefined"?name:undefined,"quote" in locals_for_with?locals_for_with.quote:typeof quote!=="undefined"?quote:undefined,"personal1" in locals_for_with?locals_for_with.personal1:typeof personal1!=="undefined"?personal1:undefined,"personal2" in locals_for_with?locals_for_with.personal2:typeof personal2!=="undefined"?personal2:undefined,"duties" in locals_for_with?locals_for_with.duties:typeof duties!=="undefined"?duties:undefined));;return buf.join("");
};

jadeTemplate['slide-ux/components/cards/equipment'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (name, type, description, aristotle, image) {
buf.push("<div class=\"card-wrap\"><div class=\"card\"><div class=\"name\">" + (jade.escape(null == (jade_interp = name) ? "" : jade_interp)) + "</div><div class=\"type\">" + (jade.escape(null == (jade_interp = type) ? "" : jade_interp)) + "</div><div class=\"description\">" + (null == (jade_interp = description) ? "" : jade_interp) + "</div><div class=\"info\"><img" + (jade.attr("src", "" + (aristotle.getAssetPath(image)) + "", true, false)) + "/></div><div class=\"got-it-btn\"><img data-src=\"btn-got-it\" class=\"shadow-icon\"/></div></div></div>");}.call(this,"name" in locals_for_with?locals_for_with.name:typeof name!=="undefined"?name:undefined,"type" in locals_for_with?locals_for_with.type:typeof type!=="undefined"?type:undefined,"description" in locals_for_with?locals_for_with.description:typeof description!=="undefined"?description:undefined,"aristotle" in locals_for_with?locals_for_with.aristotle:typeof aristotle!=="undefined"?aristotle:undefined,"image" in locals_for_with?locals_for_with.image:typeof image!=="undefined"?image:undefined));;return buf.join("");
};

jadeTemplate['slide-ux/components/dialogue/dialogue-buttons'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (title, subTitle, items) {
buf.push("<div class=\"right-section\"><h1>" + (jade.escape(null == (jade_interp = title) ? "" : jade_interp)) + "</h1><div class=\"subtitle\">" + (null == (jade_interp = subTitle) ? "" : jade_interp) + "</div><div class=\"buttons\">");
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
;var locals_for_with = (locals || {});(function (items, btnIcon, btnTxt) {
buf.push("<div class=\"left-section\"><div class=\"item-info\"><div class=\"mini-icon\">");
// iterate items
;(function(){
  var $$obj = items;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var item = $$obj[$index];

buf.push("<div" + (jade.attr("id", "icon-" + (item.id) + "", true, false)) + (jade.cls(['icon',"" + (item.icon) + ""], [null,true])) + "></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var item = $$obj[$index];

buf.push("<div" + (jade.attr("id", "icon-" + (item.id) + "", true, false)) + (jade.cls(['icon',"" + (item.icon) + ""], [null,true])) + "></div>");
    }

  }
}).call(this);

buf.push("</div><div class=\"blurb\"></div><div class=\"callout\"><div class=\"header\"></div><p class=\"details\"></p><div class=\"quote\"></div></div><div class=\"action fist\"><div id=\"action-btn\" class=\"btn\"><img" + (jade.attr("data-src", "" + (btnIcon) + "", true, false)) + " class=\"shadow-icon\"/><div class=\"txt\">" + (jade.escape(null == (jade_interp = btnTxt) ? "" : jade_interp)) + "</div></div></div></div></div>");}.call(this,"items" in locals_for_with?locals_for_with.items:typeof items!=="undefined"?items:undefined,"btnIcon" in locals_for_with?locals_for_with.btnIcon:typeof btnIcon!=="undefined"?btnIcon:undefined,"btnTxt" in locals_for_with?locals_for_with.btnTxt:typeof btnTxt!=="undefined"?btnTxt:undefined));;return buf.join("");
};

jadeTemplate['slide-ux/components/dialogue/dialogue'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (title, body, btn) {
buf.push("<div class=\"dialogue-wrap\"><div class=\"dialogue\"><h1>" + (jade.escape(null == (jade_interp = title) ? "" : jade_interp)) + "</h1><div class=\"line\"></div><p>" + (null == (jade_interp = body) ? "" : jade_interp) + "</p><div class=\"btn bracket-btn\"><div class=\"txt\">" + (jade.escape(null == (jade_interp = btn.text) ? "" : jade_interp)) + "</div><img data-src=\"btn-lightning\" class=\"shadow-icon\"/></div></div></div>");}.call(this,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined,"body" in locals_for_with?locals_for_with.body:typeof body!=="undefined"?body:undefined,"btn" in locals_for_with?locals_for_with.btn:typeof btn!=="undefined"?btn:undefined));;return buf.join("");
};

jadeTemplate['slide-ux/components/dialogue/selection-dialogue'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"selection-dialogue\"></div>");;return buf.join("");
};

jadeTemplate['slide-ux/components/quiz/points-float'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (result, points) {
buf.push("<div" + (jade.cls(['points',"" + (result) + ""], [null,true])) + ">" + (jade.escape(null == (jade_interp = points) ? "" : jade_interp)) + "</div>");}.call(this,"result" in locals_for_with?locals_for_with.result:typeof result!=="undefined"?result:undefined,"points" in locals_for_with?locals_for_with.points:typeof points!=="undefined"?points:undefined));;return buf.join("");
};

jadeTemplate['slide-ux/components/quiz/question'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (index, question, answers) {
buf.push("<div class=\"question\"><div id=\"question-total\" class=\"question-total\"></div><div class=\"question-index\">Question " + (jade.escape((jade_interp = index+1) == null ? '' : jade_interp)) + ":</div><div class=\"line\"></div><div class=\"question-text\">" + (jade.escape(null == (jade_interp = question) ? "" : jade_interp)) + "</div><div class=\"answers\">");
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

jadeTemplate['slide-ux/components/quiz/quiz-results'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (episodeNumber, scorePercentage, score, answers1, answers2, decisions) {
buf.push("<div class=\"quiz-results\"> <div class=\"quiz-header\">Episode " + (jade.escape((jade_interp = episodeNumber) == null ? '' : jade_interp)) + " Stats</div><div class=\"content\"><div class=\"total\"><div class=\"value-bar\"><div class=\"bg\"></div><div" + (jade.attr("style", "width:" + (scorePercentage) + "%", true, false)) + " class=\"fg\"></div></div><div class=\"score\">" + (jade.escape(null == (jade_interp = score) ? "" : jade_interp)) + "</div></div><div class=\"answers\"><div class=\"bank left\">");
// iterate answers1
;(function(){
  var $$obj = answers1;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var answer = $$obj[$index];

buf.push("<div" + (jade.cls(['answer',"" + (answer.isPerfect ? 'ace' : '') + ""], [null,true])) + "><div class=\"name\">" + (jade.escape(null == (jade_interp = answer.name) ? "" : jade_interp)) + "</div><div class=\"score\">" + (jade.escape(null == (jade_interp = answer.score) ? "" : jade_interp)) + "</div><div class=\"perfect\">");
if ( answer.isPerfect)
{
buf.push("<img data-src=\"perfect-answer\" class=\"shadow-icon\"/>");
}
buf.push("</div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var answer = $$obj[$index];

buf.push("<div" + (jade.cls(['answer',"" + (answer.isPerfect ? 'ace' : '') + ""], [null,true])) + "><div class=\"name\">" + (jade.escape(null == (jade_interp = answer.name) ? "" : jade_interp)) + "</div><div class=\"score\">" + (jade.escape(null == (jade_interp = answer.score) ? "" : jade_interp)) + "</div><div class=\"perfect\">");
if ( answer.isPerfect)
{
buf.push("<img data-src=\"perfect-answer\" class=\"shadow-icon\"/>");
}
buf.push("</div></div>");
    }

  }
}).call(this);

buf.push("</div><div class=\"bank\">");
// iterate answers2
;(function(){
  var $$obj = answers2;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var answer = $$obj[$index];

buf.push("<div" + (jade.cls(['answer',"" + (answer.isPerfect ? 'ace' : '') + ""], [null,true])) + "><div class=\"name\">" + (jade.escape(null == (jade_interp = answer.name) ? "" : jade_interp)) + "</div><div class=\"score\">" + (jade.escape(null == (jade_interp = answer.score) ? "" : jade_interp)) + "</div><div class=\"pefect\">");
if ( answer.isPerfect)
{
buf.push("<img data-src=\"perfect-answer\" class=\"shadow-icon\"/>");
}
buf.push("</div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var answer = $$obj[$index];

buf.push("<div" + (jade.cls(['answer',"" + (answer.isPerfect ? 'ace' : '') + ""], [null,true])) + "><div class=\"name\">" + (jade.escape(null == (jade_interp = answer.name) ? "" : jade_interp)) + "</div><div class=\"score\">" + (jade.escape(null == (jade_interp = answer.score) ? "" : jade_interp)) + "</div><div class=\"pefect\">");
if ( answer.isPerfect)
{
buf.push("<img data-src=\"perfect-answer\" class=\"shadow-icon\"/>");
}
buf.push("</div></div>");
    }

  }
}).call(this);

buf.push("</div></div><div class=\"decisions\"><div class=\"decision-bank\">");
if ( decisions != false)
{
// iterate decisions
;(function(){
  var $$obj = decisions;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var decision = $$obj[$index];

buf.push("<div class=\"decision\"><div class=\"txt\">You and <span class=\"perc\">" + (jade.escape((jade_interp = decision.popularPercentage) == null ? '' : jade_interp)) + "</span> of Defenders chose the <span>" + (jade.escape((jade_interp = decision.choice) == null ? '' : jade_interp)) + "</span> " + (jade.escape((jade_interp = decision.category) == null ? '' : jade_interp)) + "</div><div class=\"value-bar\"><div class=\"bg\"></div><div" + (jade.attr("style", "width:" + (decision.popularPercentage) + "%", true, false)) + " class=\"fg\"></div></div></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var decision = $$obj[$index];

buf.push("<div class=\"decision\"><div class=\"txt\">You and <span class=\"perc\">" + (jade.escape((jade_interp = decision.popularPercentage) == null ? '' : jade_interp)) + "</span> of Defenders chose the <span>" + (jade.escape((jade_interp = decision.choice) == null ? '' : jade_interp)) + "</span> " + (jade.escape((jade_interp = decision.category) == null ? '' : jade_interp)) + "</div><div class=\"value-bar\"><div class=\"bg\"></div><div" + (jade.attr("style", "width:" + (decision.popularPercentage) + "%", true, false)) + " class=\"fg\"></div></div></div>");
    }

  }
}).call(this);

}
buf.push("</div></div><div class=\"buttons\"><div id=\"continue\" class=\"quiz-btn\"><img data-src=\"quiz-btn\" class=\"shadow-icon\"/><div class=\"txt\">Continue</div></div></div></div></div>");}.call(this,"episodeNumber" in locals_for_with?locals_for_with.episodeNumber:typeof episodeNumber!=="undefined"?episodeNumber:undefined,"scorePercentage" in locals_for_with?locals_for_with.scorePercentage:typeof scorePercentage!=="undefined"?scorePercentage:undefined,"score" in locals_for_with?locals_for_with.score:typeof score!=="undefined"?score:undefined,"answers1" in locals_for_with?locals_for_with.answers1:typeof answers1!=="undefined"?answers1:undefined,"answers2" in locals_for_with?locals_for_with.answers2:typeof answers2!=="undefined"?answers2:undefined,"decisions" in locals_for_with?locals_for_with.decisions:typeof decisions!=="undefined"?decisions:undefined));;return buf.join("");
};

jadeTemplate['slide-ux/components/quiz/quiz'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"quiz\"><div class=\"header\"><img data-src=\"quiz-header\" class=\"shadow-icon\"/></div><div class=\"questions\"><div class=\"next-btn hidden\"><img data-src=\"next-question\" class=\"shadow-icon\"/></div></div></div>");;return buf.join("");
};

jadeTemplate['slide-ux/components/dialogue/dialogue-pages/base'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (title, btns) {
buf.push("<div class=\"dialogue-page\"><div class=\"title\">" + (jade.escape(null == (jade_interp = title) ? "" : jade_interp)) + "</div><div class=\"content\"></div><div class=\"btn-wrapper\"><div class=\"btns\">");
// iterate btns
;(function(){
  var $$obj = btns;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var btn = $$obj[$index];

buf.push("<div" + (jade.attr("id", "" + (btn.id) + "", true, false)) + " class=\"btn bracket-btn\"><div class=\"txt\">" + (null == (jade_interp = btn.txt) ? "" : jade_interp) + "</div><img data-src=\"btn-lightning\" class=\"shadow-icon\"/></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var btn = $$obj[$index];

buf.push("<div" + (jade.attr("id", "" + (btn.id) + "", true, false)) + " class=\"btn bracket-btn\"><div class=\"txt\">" + (null == (jade_interp = btn.txt) ? "" : jade_interp) + "</div><img data-src=\"btn-lightning\" class=\"shadow-icon\"/></div>");
    }

  }
}).call(this);

buf.push("</div></div></div>");}.call(this,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined,"btns" in locals_for_with?locals_for_with.btns:typeof btns!=="undefined"?btns:undefined));;return buf.join("");
};

var pxSymbolString = pxSymbolString || ''; pxSymbolString+='<symbol  id="New_Symbol" viewBox="-10.3 -10.3 20.6 20.6">	<polygon class="st25" points="9.8,-9.8 -9.8,-9.8 -9.8,9.8 9.8,9.8 	"/></symbol>';
var pxSvgIconString = pxSvgIconString || ''; pxSvgIconString+='<g id="first" class="aristotle-svg-svg ">			<use xlink:href="#New_Symbol"  width="20.6" height="20.6" x="-10.3" y="-10.3" transform="matrix(0.7046 0 0 -0.7046 11.2573 11.2573)" style="overflow:visible;"/></g><g id="ep5-badge" class="aristotle-svg-svg ">	<path  class="white  st14" d="M26.599,12.5H9.8v6.9h0.098v6.462l7.933,2.203l0.535-1.935l-6.468-1.797v-5.339h9.001		v0.257c-0.101,0.495-0.286,1.021-0.632,1.396c-0.347,0.362-0.828,0.55-1.468,0.55h-2.6h-0.6v2h0.6h2.6h3.8v3.801h2v-3.801h2V12.5		L26.599,12.5z M17.199,14.5v2.503H15.5V14.5H17.199z M11.8,17.003V14.5h1.7v2.503H11.8z M19.199,17.003V14.5h1.7v2.503H19.199z		 M24.599,21.199h-1.7v-1.704c0.141-0.795,0.106-1.438,0.097-1.563l-0.066-0.929h-0.031V14.5h1.7V21.199z"/><g  class="yellow " >		<g>			<path class="st13" d="M18.199,6.4l12,6.299V26.4l-12,6.299l-12-6.299V12.699L18.199,6.4 M18.199,4L4,11.399v16.396l14.199,7.396				l14.2-7.396V11.4L18.199,4L18.199,4z"/></g>	</g></g><g id="ep4-badge" class="aristotle-svg-svg ">	<g  class="white " >		<rect x="23.383" y="25.405" class="st14" width="8.213" height="2.123"/><rect x="5.415" y="25.405" class="st14" width="7.354" height="2.123"/></g>	<g  class="yellow " >		<path id="XMLID_403_" class="st13" d="M18.152,6.396l12.029,6.296v13.75l-12.029,6.297L6.123,26.442v-13.75L18.152,6.396			 M18.152,4L4,11.408v16.313l14.152,7.408l14.152-7.408V11.408L18.152,4L18.152,4z"/><path class="st13" d="M18.144,14.56c-1.564,0-2.836-1.271-2.836-2.836c0-1.562,1.272-2.835,2.836-2.835			c1.563,0,2.835,1.272,2.835,2.835C20.98,13.288,19.708,14.56,18.144,14.56z M18.144,10.688c-0.571,0-1.036,0.472-1.036,1.036			c0,0.571,0.465,1.036,1.036,1.036c0.571,0,1.036-0.465,1.036-1.036C19.18,11.153,18.715,10.688,18.144,10.688z"/><path class="st13" d="M22.812,23.475l1.638-0.746l-2.858-6.271l0.25-1.139h-7.395l0.248,1.128l-2.863,6.275l1.638,0.746			l1.869-4.101l0.56,2.548l-0.651,7.104v0.688h1.8l-0.004-0.604l0.584-6.348h1.033l0.58,6.266v0.688h1.8l-0.004-0.771l-0.646-7.021			l0.558-2.536L22.812,23.475z M17.531,20.964l-0.846-3.846h2.918l-0.845,3.846H17.531z"/></g></g><g id="ep3-badge" class="aristotle-svg-svg ">	<polygon  class="white  st14" points="18.2,8.17 7.825,13.626 8.756,15.396 18.2,10.43 25.974,14.517 16.851,19.275 		17.776,21.048 26.901,16.289 26.901,18 26.901,18.696 16.849,23.98 17.78,25.751 26.901,20.956 26.901,21.898 26.901,23.296 		16.849,28.58 17.78,30.351 26.901,25.556 26.901,29.699 28.901,29.699 28.901,24.504 28.901,21.898 28.901,19.904 28.901,18 		28.901,13.796 	"/><g  class="yellow " >		<g id="XMLID_68_" class="aristotle-svg-svg ">			<path class="st13" d="M25.901,18.3c-0.1,0.396-0.4,0.7-0.8,0.7c-0.4,0-0.6-0.304-0.5-0.7c0.1-0.396,0.4-0.7,0.8-0.7				S25.901,17.9,25.901,18.3z"/></g>		<g id="XMLID_67_" class="aristotle-svg-svg ">			<path class="st13" d="M25.901,22.9c-0.1,0.396-0.4,0.689-0.8,0.689c-0.4,0-0.6-0.3-0.5-0.689c0.1-0.397,0.4-0.701,0.8-0.701				S25.901,22.5,25.901,22.9z"/></g>		<g id="XMLID_66_" class="aristotle-svg-svg ">			<path class="st13" d="M25.901,27.6c-0.1,0.4-0.4,0.7-0.8,0.7c-0.4,0-0.6-0.3-0.5-0.7c0.1-0.396,0.4-0.689,0.8-0.689				S25.901,27.199,25.901,27.6z"/></g>		<path class="st13" d="M32.4,11.399L18.2,4L4,11.397v16.396l14.2,7.396l0.048-0.025l0.052,0.027V35.13l14.1-7.344V11.399			L32.4,11.399z M16.1,31.597l-9.9-5.188v-11.5l9.9,5.189V31.597z M30.2,26.4l-11.9,6.246V18.8L6.395,12.597L18.2,6.4l12,6.299V26.4			z"/></g></g><g id="ep2-badge" class="aristotle-svg-svg ">	<g  class="white" >		<polygon class="st14" points="16.195,19.863 17.205,18.137 10.982,14.492 15.964,11.886 15.037,10.114 8,13.795 8,21.9 10,21.9 			10,16.235 		"/><polygon class="st14" points="19.2,28.048 19.2,21.1 17.2,21.1 17.2,28.06 12.058,25.411 11.142,27.189 18.203,30.826 			25.163,27.186 24.237,25.414 		"/><polygon class="st14" points="21.163,10.114 20.237,11.886 25.271,14.52 19.094,18.137 20.105,19.863 26.2,16.293 26.2,21.9 			28.2,21.9 28.2,13.795 		"/></g>	<g  class="yellow " >		<g>			<path class="st13" d="M18.2,6.4l12,6.299V26.4l-12,6.299L6.2,26.4V12.699L18.2,6.4 M18.2,4L4,11.397v16.396l14.2,7.396				l14.2-7.396V11.397L18.2,4L18.2,4z"/></g>	</g></g><g id="ep1-badge" class="aristotle-svg-svg ">	<g  class="white " >		<polygon class="st14" points="11.798,14.884 10.402,16.315 12.642,18.5 5.501,18.5 5.501,20.5 12.727,20.5 10.384,22.901 			11.816,24.298 16.515,19.482 		"/><polygon class="st14" points="22.907,13.207 21.493,11.793 19.2,14.086 19.2,6.1 17.2,6.1 17.2,14.086 14.907,11.793 			13.493,13.207 18.2,17.914 		"/><polygon class="st14" points="13.502,25.884 14.898,27.315 17.2,25.071 17.2,33 19.2,33 19.2,25.071 21.502,27.315 22.898,25.884 			18.2,21.303 		"/><polygon class="st14" points="31.7,18.5 23.702,18.5 25.989,16.324 24.61,14.875 19.768,19.482 24.593,24.307 26.007,22.893 			23.614,20.5 31.7,20.5 		"/></g>	<g  class="yellow" >		<g>			<path class="st13" d="M18.2,6.4l12,6.299V26.4l-12,6.299L6.2,26.4V12.699L18.2,6.4 M18.2,4L4,11.397v16.396l14.2,7.396				l14.2-7.396V11.397L18.2,4L18.2,4z"/></g>	</g></g><g id="rank-badge-master-cadet" class="aristotle-svg-svg ">	<polygon class="st14" points="30.5,4 31.3,5.7 33,6 31.8,7.2 32.099,9 30.5,8.2 29,9 29.3,7.2 28.099,6 29.8,5.7 	"/><polygon class="st14" points="6.5,4 7.201,5.7 8.9,6 7.701,7.2 8,9 6.5,8.2 5,9 5.3,7.2 4,6 5.8,5.7 	"/><polygon class="st13" points="15.5,33.3 13.201,32.101 13,32.2 13,32 7.9,29.3 7.9,17 16.099,12.7 16.599,10.1 5.8,15.7 		5.8,30.601 15,35.399 	"/><rect x="4" y="4" class="st15" width="29" height="39.104"/><polygon class="st13" points="20.5,10.1 20.9,12.7 29.099,17 29.099,29.3 22.099,33 21.3,35.899 31.201,30.601 31.201,15.7 	"/><g>		<polygon class="st14" points="19.201,33.3 16.4,35.3 18.5,26 15,28.8 17.099,16.101 20.599,16.101 19.201,21.7 22,19.601 			19.599,29.601 22.201,27.601 17.701,43.101 		"/><rect x="13.5" y="15.399" class="st14" width="9.896" height="1.396"/><polygon class="st14" points="18.5,6.899 17.099,15.399 19.9,15.399 		"/><g id="XMLID_45_" class="aristotle-svg-svg ">			<g id="XMLID_157_" class="aristotle-svg-svg ">				<g id="XMLID_185_" class="aristotle-svg-svg ">					<g id="XMLID_229_" class="aristotle-svg-svg ">						<polygon class="st14" points="18.5,5.5 17.099,6.3 17.099,8.2 18.5,9 19.9,8.2 19.9,6.3 						"/></g>				</g>			</g>		</g>	</g></g><g id="rank-badge-cyber-cadet" class="aristotle-svg-svg ">	<polygon class="st13" points="20.75,11.1 21.051,13.3 27.75,13.3 27.75,29 21.051,33.601 20.75,36.5 29.852,30.101 29.852,11.1 			"/><polygon class="st13" points="16.051,33.7 9.45,29.3 9.45,13.3 16.051,13.3 16.45,11.1 7.25,11.1 7.351,30.399 16.45,36.5 	"/><line class="st23" x1="7.939" y1="19.672" x2="13.262" y2="19.672"/><line class="st23" x1="7.939" y1="25.802" x2="14.449" y2="25.802"/><line class="st23" x1="23.841" y1="19.672" x2="29.163" y2="19.672"/><line class="st23" x1="22.653" y1="25.802" x2="29.163" y2="25.802"/><g>		<g>			<g>				<rect x="4" y="4" class="st15" width="29" height="39.104"/><polygon class="st14" points="18.551,16.101 15.75,18.899 18.551,43 21.352,18.899 				"/></g>		</g>		<rect x="13.551" y="15.399" class="st14" width="9.897" height="1.396"/><polygon class="st14" points="18.551,6.899 17.15,15.399 19.95,15.399 		"/><g id="XMLID_166_" class="aristotle-svg-svg ">			<g id="XMLID_168_" class="aristotle-svg-svg ">				<g id="XMLID_169_" class="aristotle-svg-svg ">					<g id="XMLID_170_" class="aristotle-svg-svg ">						<polygon class="st14" points="18.551,5.5 17.15,6.3 17.15,8.2 18.551,9 19.95,8.2 19.95,6.3 						"/></g>				</g>			</g>		</g>	</g>	<polygon class="st14" points="30.551,4 31.352,5.7 33.051,6 31.852,7.2 32.15,9 30.551,8.2 29.051,9 29.352,7.2 28.051,6 		29.852,5.7 	"/><polygon class="st14" points="6.551,4 7.25,5.7 8.95,6 7.75,7.2 8.051,9 6.551,8.2 5.051,9 5.351,7.2 4.051,6 5.75,5.7 	"/></g><g id="rank-badge-technical-cadet" class="aristotle-svg-svg ">	<rect x="4" y="4" class="st15" width="29" height="39.104"/><g>		<path class="st13" d="M27.7,13.3V29l-9.2,6.396L9.4,29.2l-0.101-16h18.4 M29.8,11.1H7.2l0.1,19.299L18.601,38l11.3-7.896v-19			L29.8,11.1L29.8,11.1z"/></g>	<line class="st23" x1="7.8" y1="19.672" x2="29.2" y2="19.672"/><polygon class="st14" points="30.5,4 31.3,5.7 33,6 31.8,7.2 32.101,9 30.5,8.2 29,9 29.3,7.2 28,6 29.8,5.7 	"/><polygon class="st14" points="6.401,4 7.2,5.7 8.901,6 7.7,7.2 8,9 6.401,8.2 5,9 5.2,7.2 4,6 5.7,5.7 	"/><line class="st23" x1="7.8" y1="25.802" x2="29.2" y2="25.802"/></g><g id="rank-badge-cadet-first-class" class="aristotle-svg-svg ">	<rect x="4" y="4" class="st15" width="29" height="39.104"/><g>		<path class="st13" d="M27.7,13.3V29l-9.2,6.396L9.4,29.2l-0.101-16h18.4 M29.8,11.1H7.2l0.1,19.299L18.602,38l11.3-7.896v-19			L29.8,11.1L29.8,11.1z"/></g>	<line class="st23" x1="7.8" y1="21" x2="29.2" y2="21"/><polygon class="st14" points="30.5,4 31.3,5.7 33,6 31.8,7.2 32.102,9 30.5,8.2 29,9 29.3,7.2 28,6 29.8,5.7 	"/><polygon class="st14" points="6.401,4 7.2,5.7 8.901,6 7.7,7.2 8,9 6.401,8.2 5,9 5.2,7.2 4,6 5.7,5.7 	"/></g><g id="rank-badge-cadet" class="aristotle-svg-svg ">	<rect x="4" y="4" class="st15" width="29" height="39.104"/><g>		<path class="st13" d="M27.649,13.3V29l-9.199,6.399l-9.101-6.196l-0.1-16h18.399 M29.849,11.1h-22.7L7.25,30.399l11.3,7.604			l11.3-7.896L29.849,11.1L29.849,11.1z"/></g>	<line class="st23" x1="7.849" y1="21" x2="29.25" y2="21"/></g><g id="rank-badge-recruit" class="aristotle-svg-svg ">	<g>		<path class="st13" d="M27.75,13.3V29l-9.2,6.396L9.45,29.2l-0.101-16h18.4 M29.849,11.1h-22.7L7.25,30.399l11.3,7.604l11.3-7.896			L29.849,11.1L29.849,11.1z"/></g>	<rect x="4" y="4" class="st15" width="29" height="39.104"/></g><g id="list-progress-base" class="aristotle-svg-svg ">	<g id="hex-outer_1_" class="aristotle-svg-svg ">		<g id="XMLID_1080_" class="aristotle-svg-svg ">			<path class="st9" d="M18.2,7.201l11.3,5.896v12.899l-11.3,5.896L6.9,25.996V13.101L18.2,7.201 M18.2,4L4,11.396v16.4l14.2,7.396				l14.2-7.396v-16.4L18.2,4L18.2,4z"/></g>	</g>	<g id="hex-inner_1_" class="aristotle-svg-svg ">		<g id="XMLID_2384_" class="aristotle-svg-svg ">			<polygon class="st13" points="18.2,29.9 9.099,25 9.099,14.101 18.2,9.201 27.2,14.101 27.2,24.9 			"/></g>	</g></g><g id="list-progress-complete" class="aristotle-svg-svg ">	<g id="hex-inner" class="aristotle-svg-svg ">		<g>			<polygon class="st24" points="21.8,13.801 25.701,16.201 21.201,16.201 20.5,16.201 27.201,21.9 27.201,14.101 18.101,9.201 				16.101,10.201 			"/></g>		<g>			<polygon class="st24" points="15.5,23.5 11.9,21.101 16.101,21.101 17.8,21 9.101,14.301 9.101,25 18.101,29.9 22.201,27.701 							"/></g>	</g>	<g id="hex-outer" class="aristotle-svg-svg ">		<polygon class="st4" points="24,28.801 18.101,32 6.8,26 6.8,13.101 10.4,11.201 8.4,9.101 4,11.4 4,27.701 18.101,35.101 			26.8,30.601 		"/><polygon class="st4" points="18.101,4 11.5,7.4 14.4,9.201 18.101,7.201 29.5,13.101 29.5,26 27.701,26.9 29.9,29 32.3,27.701 			32.3,11.4 		"/></g>	<g id="lightning_1_" class="aristotle-svg-svg ">		<g id="lightning" class="aristotle-svg-svg ">			<polygon class="st13" points="7.701,6.5 21.201,14.9 17.101,14.9 28.3,24.5 23.4,24.5 30.5,31.5 16.201,22.301 21.601,22.301 				9.601,13.101 14,12.9 			"/></g>	</g></g><g id="ctanlee" class="aristotle-svg-svg ">	<circle class="st14" cx="21" cy="21" r="6.398"/><path class="st5" d="M25.5,37.4c7.2-2,12.5-8.5,12.5-16.396"/><path class="st5" d="M4,21c0,7.801,5.3,14.396,12.5,16.396"/><path class="st5" d="M32.801,8.8c-3.1-2.896-7.2-4.8-11.8-4.8c-4.7,0-8.9,1.896-12,4.896"/></g><g id="action-btn-fist" class="aristotle-svg-svg ">	<polygon class="st14" points="35.7,86.896 4,70.295 4,33.795 35.7,17.196 67.401,33.795 67.401,70.295 	"/><polygon class="st9" points="35.7,84.497 6.2,68.997 6.2,34.997 35.7,19.596 65.2,34.997 65.2,68.997 	"/><path class="st19" d="M42.3,12.696c0,0,7.4,2,10.104,3.4c-3.397,6.5-11.5,2.397-11.5,2.397s-2.3,2.799-3,3.603		c11.103,5.196,26.2,0.696,26.2,0.696l-0.897,5.896l-5.603,13.5l-9.7,5L30.205,82.5L9.504,71.691l25.799-32.396l-2.698-19.104		L42.3,12.696z"/><path class="st22" d="M42.3,12.696c0,0,7.4,2,10.104,3.4c-3.397,6.5-11.5,2.397-11.5,2.397s-2.3,2.799-3,3.603		c11.103,5.196,26.2,0.696,26.2,0.696l-0.897,5.896l-5.603,13.5l-9.7,5L30.205,82.5L9.504,71.691l25.799-32.396l-2.698-19.104		L42.3,12.696z"/><path class="st19" d="M48,5.497l-2.103-1.104c-1.8-0.896-3.897-0.2-4.8,1.5l-7,13.396l8.5,4.396l7-13.396		C50.5,8.497,49.8,6.396,48,5.497"/><path class="st22" d="M48,5.497l-2.103-1.104c-1.8-0.896-3.897-0.2-4.8,1.5l-7,13.396l8.5,4.396l7-13.396		C50.5,8.497,49.8,6.396,48,5.497z"/><path class="st19" d="M54.5,6.896l2.604,1.7c1.3,0.8,1.695,2.5,0.8,3.8l-7.3,11.2c-3-0.9-4.397-2.103-6.305-4.304l6.305-11.396		C51.5,6.596,53.2,6.096,54.5,6.896"/><path class="st22" d="M54.5,6.896l2.604,1.7c1.3,0.8,1.695,2.5,0.8,3.8l-7.3,11.2c-3-0.9-4.397-2.103-6.305-4.304l6.305-11.396		C51.5,6.596,53.2,6.096,54.5,6.896z"/><path class="st19" d="M62.5,14.997l-1.896-1.311c-1.305-0.896-3-0.5-3.805,0.7l-6.104,9.2c1.3,2,3.104,3.6,6,4l6.396-8.9		C64,17.497,63.7,15.795,62.5,14.997"/><path class="st22" d="M62.5,14.997l-1.896-1.311c-1.305-0.896-3-0.5-3.805,0.7l-6.104,9.2c1.3,2,3.104,3.6,6,4l6.396-8.9		C64,17.497,63.7,15.795,62.5,14.997z"/><path class="st19" d="M67.102,24.196l-5.302,6.9c-2.309-0.7-3.898-1.9-5.104-3.4l5.3-7.3c0.897-1.3,2.8-1.5,4-0.5l0.7,0.604		C67.8,21.396,68.001,22.997,67.102,24.196"/><path class="st22" d="M67.102,24.196l-5.302,6.9c-2.309-0.7-3.898-1.9-5.104-3.4l5.3-7.3c0.897-1.3,2.8-1.5,4-0.5l0.7,0.604		C67.8,21.396,68.001,22.997,67.102,24.196z"/><path class="st19" d="M58,34.096c0.897-0.603,3.8-3,3.8-3c-2.1-0.4-3.8-1.603-5.1-3.4l-2.803,2.7c-1.104,1-0.897,2.7,0.303,3.5		l0.6,0.396C55.8,34.896,57.2,34.696,58,34.096"/><path class="st27" d="M58,34.096c0.897-0.603,3.8-3,3.8-3c-2.1-0.4-3.8-1.603-5.1-3.4l-2.803,2.7c-1.104,1-0.897,2.7,0.303,3.5		l0.6,0.396C55.8,34.896,57.2,34.696,58,34.096z"/><path class="st19" d="M50.2,30.997L49,30.099c-0.8-0.603-1-1.7-0.5-2.603l2.2-3.897c1.397,2.5,3.397,3.8,6,4l-3.4,3.196		C52.5,31.696,51.2,31.696,50.2,30.997"/><path class="st27" d="M50.2,30.997L49,30.099c-0.8-0.603-1-1.7-0.5-2.603l2.2-3.897c1.397,2.5,3.397,3.8,6,4l-3.4,3.196		C52.5,31.696,51.2,31.696,50.2,30.997z"/><path class="st19" d="M41.602,24.795l6,4.304l3.103-5.5c-3-0.7-4.5-1.804-6.303-4.304L41.602,24.795z"/><path class="st22" d="M41.602,24.795l6,4.304l3.103-5.5c-3-0.7-4.5-1.804-6.303-4.304L41.602,24.795z"/><path class="st19" d="M10,71.497l20.897-33.397l-2.197-19l10.8-10.2c0,0,10.104,5.3,12.8,6.7c-3.396,6.5-10.101,2.3-10.101,2.3		s-1.302,2.896-1.899,3.7c9,4.696,10.811,9,3.5,16.397"/><path class="st26" d="M10,71.497l20.897-33.397l-2.197-19l10.8-10.2c0,0,10.104,5.3,12.8,6.7c-3.396,6.5-10.101,2.3-10.101,2.3		s-1.302,2.896-1.899,3.7c9,4.696,10.811,9,3.5,16.397"/><path class="st14" d="M26,73.696c0.897-8.3,2.8-16.5,5.604-24.6c0.195,1.8,0.396,3.6,0.695,5.3		c1.896-5.8,4.396-11.396,7.305-16.896C39.3,39.603,39.207,41.603,39,43.603c2.3-3.5,4.7-6.804,7.397-10		c1.303-1.603,1.7-1.2,0.603,0.5c-3.8,6.104-6.896,12.5-9.3,19c-0.103-1.804-0.2-3.603-0.2-5.396c-2.2,5.191-4,10.5-5.3,15.896		c-0.4-1.896-0.803-3.804-1.2-5.804C28.901,62.997,27.2,68.295,26,73.696"/></g><g id="btn-lightning" class="aristotle-svg-svg ">	<path class="st13" d="M4,13.561C14.851,9.13,26.325,5.898,38.213,4c-2.114,1.421-4.171,2.885-6.17,4.388		c8.437-1.453,17.07-2.214,25.811-2.241c-2.724,1.07-5.387,2.21-7.985,3.417c8.674,0.706,17.286,2.148,25.746,4.322		c-12.991-1.538-25.89-1.355-38.375,0.399c2.125-1.335,4.305-2.623,6.54-3.863c-7.928,0.756-15.719,2.13-23.3,4.087		c2.05-1.812,4.174-3.584,6.371-5.309C19.141,10.075,11.502,11.531,4,13.561"/></g><g id="quiz-header" class="aristotle-svg-svg ">	<line class="st2" x1="4" y1="34" x2="240.561" y2="34"/><line class="st2" x1="320.562" y1="34" x2="557.124" y2="34"/><polygon class="st10" points="294.399,52.221 282.561,58.366 260.061,46.686 260.061,21.313 267.372,17.518 263.725,13.777 		255.061,18.275 255.061,49.724 282.561,64 299.275,55.325 	"/><polygon class="st10" points="282.561,4 269.865,10.591 274.805,13.66 282.561,9.633 305.061,21.313 305.061,46.686 		301.417,48.578 305.197,52.25 310.061,49.724 310.061,18.275 	"/><polygon class="st9" points="262.561,9 288.389,25.037 280.473,25.033 301.991,43.422 292.661,43.556 306.372,56.878 		278.834,39.354 289.183,39.166 266.184,21.461 274.454,21.204 	"/></g><g id="quiz-answer-bg" class="aristotle-svg-svg ">	<polygon  class="bg st18" points="5.5,308.111 5.5,29.889 103.999,5.545 202.094,29.888 202.498,308.112 104,332.455 	"/><path  class="outline st21" d="M103.999,7.091l96.597,23.97l0.401,275.881L104,330.913L7,306.938V31.062L103.999,7.091		 M104,4L4,28.724v280.562L104,334l100-24.714l-0.408-280.562L104,4L104,4z"/><path  class="lightning  st21" d="M68.194,285.052c10.85-4.438,22.324-7.663,34.212-9.562		c-2.113,1.421-4.171,2.885-6.169,4.389c8.438-1.444,17.07-2.215,25.812-2.232c-2.725,1.062-5.387,2.21-7.985,3.417		c8.673,0.705,17.286,2.146,25.747,4.312c-12.992-1.538-25.893-1.354-38.377,0.4c2.126-1.335,4.306-2.624,6.541-3.864		c-7.928,0.755-15.719,2.129-23.3,4.087c2.05-1.812,4.175-3.584,6.371-5.308C83.334,281.566,75.696,283.021,68.194,285.052z"/><path  class="lightning st21" d="M68.194,54.061c10.85-4.438,22.324-7.659,34.212-9.562		c-2.113,1.432-4.171,2.895-6.169,4.396c8.438-1.452,17.07-2.214,25.812-2.238c-2.725,1.067-5.387,2.211-7.985,3.417		c8.673,0.703,17.286,2.146,25.747,4.319c-12.992-1.538-25.893-1.354-38.377,0.396c2.126-1.335,4.306-2.624,6.541-3.861		c-7.928,0.763-15.719,2.137-23.3,4.094c2.05-1.812,4.175-3.584,6.371-5.312C83.334,50.576,75.696,52.031,68.194,54.061z"/><line  class="line st20" x1="32.5" y1="95.5" x2="175.5" y2="95.5"/><line  class="line  st20" x1="32.5" y1="232.5" x2="175.5" y2="232.5"/></g><g id="next-question" class="aristotle-svg-svg ">	<polygon class="st12" points="148.999,41.446 4,41.446 4,4 148.999,4 156.007,23.473 	"/></g><g id="btn-got-it" class="aristotle-svg-svg ">	<path class="st9" d="M4,37.484c10.938-4.513,22.521-7.805,34.517-9.737c-2.134,1.447-4.207,2.938-6.226,4.469		c8.514-1.479,17.224-2.255,26.039-2.282c-2.75,1.089-5.438,2.251-8.062,3.479c8.749,0.719,17.438,2.188,25.979,4.402		c-13.104-1.566-26.115-1.381-38.721,0.408c2.146-1.36,4.353-2.673,6.604-3.937c-7.997,0.77-15.856,2.169-23.507,4.163		c2.062-1.847,4.212-3.65,6.43-5.406C19.274,33.935,11.568,35.418,4,37.484z"/><path class="st13" d="M26.764,10.141c-0.32,2.88-0.62,4.041-1.32,5.201c-0.96,1.621-2.26,2.441-3.841,2.441		c-2.42,0-3.94-2.021-3.94-5.221c0-2.081,0.521-4.321,1.35-5.781C20.032,4.961,21.532,4,23.283,4c1.9,0,3.16,1.14,3.501,3.181		l-2.651,1c-0.021-0.68-0.062-0.86-0.16-1.161c-0.146-0.44-0.5-0.68-0.979-0.68c-0.641,0-1.155,0.44-1.579,1.32		c-0.602,1.28-0.979,3.241-0.979,5.062c0,1.78,0.521,2.68,1.54,2.68c1.021,0,1.643-0.92,1.922-2.9h-1.646l0.276-2.36L26.764,10.141		L26.764,10.141z"/><path class="st13" d="M29.642,14.022c0-1.201,0.318-2.541,0.84-3.541c0.681-1.32,1.801-2.041,3.146-2.041		c1.802,0,2.812,1.22,2.812,3.421c0,3.581-1.561,5.881-3.961,5.881C30.621,17.742,29.642,16.442,29.642,14.022z M33.923,12.061		c0-0.92-0.198-1.38-0.578-1.38c-0.66,0-1.224,1.58-1.224,3.4c0,0.9,0.224,1.42,0.611,1.42		C33.402,15.502,33.923,13.941,33.923,12.061z"/><path class="st13" d="M40.241,10.681h-0.84l0.261-2.061h0.85l0.302-2.46h2.461l-0.303,2.46h1.001l-0.238,2.061h-1l-0.855,6.881		h-2.465L40.241,10.681z"/><path class="st13" d="M52.501,8.62h2.461l-1.104,8.942h-2.461L52.501,8.62z M52.541,6.16c0-0.96,0.84-1.78,1.771-1.78		c0.769,0,1.36,0.6,1.36,1.38c0,0.96-0.82,1.801-1.78,1.801C53.121,7.56,52.541,6.96,52.541,6.16z"/><path class="st13" d="M58.541,10.681h-0.85l0.27-2.061h0.843l0.3-2.46h2.461l-0.301,2.46h1.001l-0.24,2.061h-1l-0.854,6.881h-2.468		L58.541,10.681z"/><path class="st13" d="M66.441,14.421c0.82,0,1.46,0.64,1.46,1.46c0,1.02-0.88,1.9-1.896,1.9c-0.842,0-1.46-0.64-1.46-1.48		C64.541,15.302,65.421,14.421,66.441,14.421z M66.401,4.219h2.562l-1.146,9.342h-2.58L66.401,4.219z"/></g><g id="btn-continue" class="aristotle-svg-svg ">	<path class="st14" d="M53.56,7.064l47.439,10.121v22.418l-47.415,9.339L6.999,39.611V16.391L53.56,7.064 M53.578,4L4,13.936v28.139		l49.578,9.938L104,42.074V14.764L53.578,4L53.578,4z"/><path class="st14" d="M22.882,27.127c-1.135,0.379-1.513,0.463-2.171,0.463c-1.373,0-2.787-0.615-3.74-1.625		c-0.799-0.854-1.232-1.979-1.232-3.229c0-2.759,2.188-4.938,4.944-4.938c0.729,0,1.317,0.127,2.199,0.478v2.899		c-0.574-0.688-1.261-1.022-2.103-1.022c-1.457,0-2.508,1.077-2.508,2.577c0,0.798,0.268,1.429,0.826,1.891		c0.477,0.396,1.062,0.616,1.682,0.616c0.798,0,1.473-0.308,2.103-0.979V27.127L22.882,27.127z"/><path class="st14" d="M26.84,18.893c0.883-0.744,2.115-1.178,3.418-1.178c1.556,0,2.83,0.521,3.824,1.562		c0.867,0.911,1.346,2.115,1.346,3.418c0,1.479-0.646,2.857-1.752,3.796c-0.938,0.785-2.087,1.187-3.459,1.187		c-2.941,0-5.127-2.156-5.127-5.07C25.09,21.217,25.735,19.83,26.84,18.893z M30.258,25.321c1.457,0,2.634-1.177,2.634-2.634		c0-1.442-1.177-2.618-2.634-2.618c-1.442,0-2.633,1.176-2.633,2.591C27.625,24.145,28.787,25.321,30.258,25.321z"/><path class="st14" d="M38.04,17.995h2.423l4.469,5.725v-5.725h2.424v9.353h-2.424l-4.469-5.725v5.725H38.04V17.995z"/><path class="st14" d="M51.383,20.055h-1.977v-2.062h6.415v2.062h-2.017v7.283H51.38L51.383,20.055L51.383,20.055z"/><path class="st14" d="M57.892,17.995h2.424v9.353h-2.424V17.995z"/><path class="st14" d="M63.45,17.995h2.426l4.468,5.725v-5.725h2.424v9.353h-2.424l-4.468-5.725v5.725H63.45V17.995z"/><path class="st14" d="M83.838,23.389c0,1.373-0.238,2.114-0.911,2.871c-0.771,0.867-1.862,1.312-3.222,1.312		c-1.431,0-2.689-0.53-3.333-1.396c-0.49-0.658-0.675-1.414-0.675-2.787v-5.396h2.426v5.062c0,1.062,0.025,1.271,0.266,1.666		c0.267,0.445,0.771,0.715,1.357,0.715c0.616,0,1.163-0.295,1.415-0.756c0.21-0.365,0.253-0.646,0.253-1.625v-5.062h2.424V23.389		L83.838,23.389z"/><path class="st14" d="M86.774,17.995h5.311v2.062h-2.887v1.555h2.731v2.062h-2.731v1.604h2.887v2.062h-5.311V17.995z"/><path class="st14" d="M23.785,39.592c9.118-3.729,18.764-6.439,28.75-8.035c-1.774,1.193-3.505,2.426-5.185,3.688		c7.09-1.222,14.346-1.854,21.689-1.883c-2.289,0.897-4.526,1.856-6.71,2.87c7.286,0.594,14.524,1.807,21.636,3.633		c-10.918-1.293-21.757-1.141-32.248,0.337c1.785-1.122,3.617-2.205,5.496-3.248c-6.662,0.645-13.21,1.79-19.58,3.438		c1.723-1.522,3.508-3.013,5.354-4.459C36.509,36.663,30.089,37.887,23.785,39.592z"/></g><g id="perfect-answer" class="aristotle-svg-svg ">	<g id="XMLID_2433_" class="aristotle-svg-svg ">		<polygon class="st18" points="18.725,36.129 4,28.485 4,11.644 18.725,4 33.451,11.644 33.451,28.485 		"/></g>	<polygon class="st14" points="18.725,7.843 21.697,15.764 29.715,16.239 23.533,21.707 25.516,29.821 18.725,25.381 11.934,29.821 		13.916,21.707 7.735,16.239 15.754,15.764 	"/></g><g id="quiz-btn" class="aristotle-svg-svg ">	<g  class="bg " >		<polygon class="st18" points="4,50 63,62 123,50 123,17 63,4 4,16 		"/></g>	<path class="st13" d="M27.545,46.795c10.854-4.434,22.326-7.664,34.213-9.562c-2.112,1.422-4.17,2.885-6.169,4.387		c8.438-1.451,17.07-2.213,25.812-2.238c-2.729,1.068-5.396,2.209-7.983,3.416c8.672,0.705,17.284,2.148,25.746,4.322		c-12.992-1.539-25.894-1.355-38.375,0.4c2.125-1.336,4.305-2.625,6.541-3.865c-7.933,0.756-15.721,2.129-23.302,4.088		c2.052-1.812,4.174-3.584,6.369-5.309C42.687,43.309,35.047,44.766,27.545,46.795z"/></g><g id="btn-generic" class="aristotle-svg-svg ">	<path class="st13" d="M4,51.002l59,12l60-12V17L63,4l0,0L4,16V51.002z M7,18.451L62.979,7.065L120,19.419v29.123L63.005,59.94		L7,48.549V18.451z"/><path class="st13" d="M32.495,50.604c9.365-3.825,19.271-6.614,29.529-8.252c-1.824,1.227-3.6,2.491-5.326,3.787		c7.283-1.253,14.734-1.91,22.277-1.934c-2.351,0.923-4.648,1.907-6.893,2.948c7.483,0.609,14.921,1.855,22.223,3.731		c-11.213-1.329-22.346-1.171-33.122,0.346c1.834-1.153,3.716-2.266,5.646-3.336c-6.844,0.652-13.564,1.838-20.106,3.528		c1.769-1.565,3.602-3.093,5.498-4.582C45.563,47.594,38.97,48.852,32.495,50.604z"/></g><g id="speaker" class="aristotle-svg-svg ">	<path class="st0" d="M32.61,58.493c10.218-2.746,17.732-11.951,17.732-22.892c0-10.941-7.515-20.146-17.732-22.891"/><path class="st0" d="M40.538,67.202c14.2-4.416,24.44-16.891,24.44-31.601c0-14.71-10.24-27.185-24.44-31.601"/><path class="st0" d="M28.11,47.821c5.122-2.226,8.655-6.85,8.655-12.219c0-5.371-3.533-9.996-8.655-12.221"/><polygon class="st13" points="12.774,44.639 12.774,26.563 20.401,21.772 20.401,49.43 	"/><rect x="4" y="26.563" class="st13" width="11.273" height="18.075"/></g><g id="no-phone" class="aristotle-svg-svg ">	<path class="st13" d="M71.691,85.5H35.309V21.501h36.382V85.5z M71.886,18.501H35.115c-1.55,0-2.807,1.256-2.807,2.806v64.388		c0,1.549,1.257,2.806,2.807,2.806h36.771c1.55,0,2.806-1.257,2.806-2.806V21.307C74.691,19.757,73.435,18.501,71.886,18.501"/><path class="st13" d="M64.94,71.566H42.059V27.935h22.882L64.94,71.566L64.94,71.566z M66.587,24.935H40.414		c-0.748,0-1.354,0.605-1.354,1.354v46.922c0,0.748,0.606,1.355,1.354,1.355h26.173c0.748,0,1.354-0.607,1.354-1.355V26.288		C67.94,25.54,67.335,24.935,66.587,24.935"/><circle class="st1" cx="53.5" cy="53.5" r="49.5"/><line class="st1" x1="87.5" y1="19.5" x2="19.5" y2="87.5"/><line class="st0" x1="48.5" y1="79.719" x2="58.5" y2="79.719"/></g><g id="duty" class="aristotle-svg-svg ">	<path class="st21" d="M24,8.515l16,8.375v18.229l-16,8.375L8,35.119V16.89L24,8.515 M24,4L4,14.469v23.062L24,48l20-10.469V14.469		L24,4L24,4z"/></g><g id="duty-active" class="aristotle-svg-svg ">	<path class="st9" d="M24,8.515l16,8.375v18.221l-16,8.375L8,35.111V16.89L24,8.515 M24,4L4,14.469v23.062L24,48l20-10.469V14.469		L24,4L24,4z"/><polygon class="st13" points="24,40.5 11.275,33.602 11.275,18.399 24,11.5 36.726,18.399 36.726,33.602 	"/></g><g id="duty-complete" class="aristotle-svg-svg ">	<polygon class="st24" points="29.197,17.963 34.619,21.318 28.237,21.314 27.411,21.314 36.728,29.252 36.728,18.399 24,11.5 		21.205,13.016 	"/><polygon class="st24" points="20.313,31.411 15.219,28.18 21.256,28.07 23.596,28.027 11.272,18.57 11.272,33.601 24,40.5 		29.737,37.39 	"/><polygon class="st4" points="32.608,39.363 24,43.869 7.637,35.304 7.637,16.696 12.953,13.914 10.302,11.17 4,14.469 4,37.531 		24,48 36.154,41.639 	"/><polygon class="st4" points="24,4 14.766,8.834 18.359,11.084 24,8.131 40.363,16.696 40.363,35.304 37.713,36.691 40.461,39.384 		44,37.531 44,14.469 	"/><polygon class="st13" points="9.454,7.667 28.238,19.428 22.482,19.424 38.131,32.91 31.345,33.008 41.316,42.777 21.289,29.927 		28.816,29.789 12.09,16.806 18.103,16.616 	"/></g><g id="btn-acknowledge" class="aristotle-svg-svg ">	<polygon  class="bg  st21" points="5.503,55.053 5.503,18.948 95.223,5.518 186.503,20.073 186.503,55.05 		95.231,68.484 	"/><path  class="outline  st18" d="M95.215,7.036l89.788,14.317v32.401l-89.77,13.213L7.003,53.76V20.239L95.215,7.036		 M95.229,4L4,17.655v38.69L95.229,70L188,56.345V18.793L95.229,4L95.229,4z"/><path  class="lightning  st13" d="M60.195,50.794c10.851-4.432,22.326-7.663,34.213-9.562		c-2.113,1.422-4.17,2.886-6.169,4.388c8.437-1.452,17.07-2.213,25.811-2.24c-2.725,1.069-5.388,2.21-7.979,3.416		c8.673,0.706,17.286,2.149,25.746,4.323c-12.991-1.539-25.896-1.356-38.375,0.4c2.125-1.336,4.305-2.625,6.54-3.865		c-7.937,0.756-15.728,2.13-23.309,4.088c2.059-1.813,4.184-3.584,6.371-5.309C75.337,47.309,67.698,48.765,60.195,50.794z"/></g><g id="chapter-bracket" class="aristotle-svg-svg ">	<polyline class="st7" points="4,104.992 27,104.992 27,4 4,4 	"/></g><g id="tesselation" class="aristotle-svg-svg ">	<rect x="4.006" y="4" class="st15" width="1024" height="768"/><path class="st16" d="M158.241,148.183c-22.989,13.425-45.722,28.383-68.146,45.806c-22.438-34.314-44.562-72.895-66.35-116.986		C67.308,105.954,112.267,129.343,158.241,148.183z"/><path class="st16" d="M4.004,63.43c6.555,4.655,13.136,9.178,19.741,13.573c-6.612,4.599-13.188,9.448-19.739,14.581"/><path class="st16" d="M4.008,248.9c6.546,1.995,13.126,3.933,19.729,5.816c-6.604,7.11-13.188,14.545-19.733,22.339"/><path class="st16" d="M23.745,432.43c-6.612,9.621-13.188,19.639-19.739,30.092"/><path class="st16" d="M4,619.842c6.549-3.326,13.131-6.562,19.745-9.699c-6.604,12.133-13.188,24.736-19.739,37.85"/><path class="st16" d="M298.849,191.806c-23.813,13.436-47.479,27.41-70.924,42.702c-23.449-25.637-46.692-54.072-69.688-86.325		C204.216,167.013,251.222,181.297,298.849,191.806z"/><path class="st16" d="M443.202,212.397c-24.229,15.043-48.416,29.713-72.491,44.723c-24.065-19.889-48.046-41.379-71.854-65.313		C346.478,202.301,394.733,209.028,443.202,212.397z"/><path class="st16" d="M588.812,212.397c-24.232,18.401-48.517,35.48-72.806,51.963c-24.286-16.484-48.573-33.561-72.812-51.963		C491.67,215.751,540.345,215.751,588.812,212.397z"/><path class="st16" d="M733.164,191.806c-23.812,23.934-47.787,45.423-71.855,65.313c-24.077-15.01-48.255-29.682-72.489-44.723		C637.282,209.028,685.535,202.302,733.164,191.806z"/><path class="st16" d="M873.772,148.183c-22.988,32.255-46.24,60.689-69.687,86.325c-23.45-15.293-47.107-29.267-70.931-42.701		C780.793,181.297,827.795,167.012,873.772,148.183z"/><path class="st16" d="M1008.269,77.002c-21.777,44.094-43.914,82.672-66.343,116.986c-22.438-17.423-45.166-32.379-68.153-45.806		C919.754,129.344,964.707,105.955,1008.269,77.002z"/><path class="st16" d="M1028.002,91.578c-6.545-5.131-13.123-9.979-19.729-14.575c6.612-4.395,13.188-8.917,19.739-13.572"/><path class="st16" d="M4,156.163c28.115,14.279,56.851,26.818,86.088,37.826c-22.434,17.427-44.562,37.314-66.345,60.728		c-6.612-10.876-13.188-22.187-19.739-33.969"/><path class="st16" d="M227.925,234.508c-23.451,15.295-46.695,31.907-69.688,50.71c-22.984-26.876-45.721-56.921-68.15-91.229		C134.95,210.874,181.023,224.164,227.925,234.508z"/><path class="st16" d="M370.711,257.12c-24.071,15.011-48.046,30.357-71.854,46.791c-23.812-20.936-47.479-43.771-70.924-69.402		C274.827,244.844,322.562,252.239,370.711,257.12z"/><path class="st16" d="M516.006,264.36c-24.286,16.484-48.573,32.371-72.812,48.372c-24.229-17.444-48.417-35.726-72.489-55.612		C418.863,261.99,467.437,264.356,516.006,264.36z"/><path class="st16" d="M661.301,257.12c-24.076,19.886-48.266,38.169-72.491,55.612c-24.23-16.002-48.521-31.888-72.803-48.372		C564.579,264.356,613.151,261.993,661.301,257.12z"/><path class="st16" d="M804.088,234.508c-23.451,25.634-47.109,48.468-70.934,69.402c-23.812-16.434-47.785-31.779-71.854-46.791		C709.454,252.239,757.187,244.845,804.088,234.508z"/><path class="st16" d="M941.927,193.99c-22.431,34.306-45.168,64.354-68.156,91.229c-22.988-18.801-46.233-35.415-69.685-50.711		C850.991,224.165,897.062,210.875,941.927,193.99z"/><path class="st16" d="M1028.01,220.745c-6.549,11.784-13.13,23.095-19.743,33.972c-21.783-23.413-43.908-43.303-66.34-60.728		c29.241-11.008,57.97-23.546,86.085-37.825"/><path class="st16" d="M158.241,285.219c-22.989,18.803-45.722,39.801-68.146,63.978c-22.438-27.561-44.562-58.66-66.35-94.48		C67.308,267.124,112.267,277.146,158.241,285.219z"/><path class="st16" d="M298.849,303.91c-23.813,16.435-47.479,33.956-70.924,53.385c-23.449-21.499-46.692-45.204-69.688-72.075		C204.216,293.287,251.222,299.408,298.849,303.91z"/><path class="st16" d="M443.202,312.731c-24.229,16.004-48.416,32.12-72.491,49.08c-24.065-17.938-48.046-36.97-71.854-57.901		C346.478,308.408,394.733,311.288,443.202,312.731z"/><path class="st16" d="M588.812,312.731c-24.232,17.441-48.517,34.045-72.806,50.526c-24.286-16.483-48.573-33.085-72.812-50.526		C491.67,314.167,540.345,314.167,588.812,312.731z"/><path class="st16" d="M733.164,303.91c-23.812,20.931-47.787,39.958-71.855,57.901c-24.077-16.962-48.255-33.078-72.489-49.08		C637.282,311.288,685.535,308.406,733.164,303.91z"/><path class="st16" d="M873.772,285.219c-22.988,26.875-46.24,50.583-69.687,72.083c-23.45-19.438-47.107-36.949-70.931-53.384		C780.793,299.409,827.795,293.285,873.772,285.219z"/><path class="st16" d="M1008.269,254.716c-21.777,35.819-43.914,66.92-66.343,94.48c-22.438-24.177-45.166-45.171-68.153-63.978		C919.754,277.146,964.707,267.121,1008.269,254.716z"/><path class="st16" d="M1028.01,277.053c-6.547-7.793-13.128-15.227-19.741-22.336c6.613-1.883,13.194-3.821,19.741-5.816"/><path class="st16" d="M4.008,341.635c28.105,2.854,56.838,5.354,86.078,7.562c-22.438,24.188-44.562,51.549-66.351,83.233		c-6.604-8.363-13.188-17.088-19.729-26.211"/><path class="st16" d="M227.925,357.294c-23.451,19.435-46.695,40.77-69.688,64.959c-22.984-21.492-45.721-45.511-68.15-73.062		C134.95,352.574,181.023,355.227,227.925,357.294z"/><path class="st16" d="M370.711,361.811c-24.071,16.964-48.046,34.769-71.854,54.203c-23.812-17.938-47.479-37.229-70.924-58.719		C274.827,359.362,322.562,360.838,370.711,361.811z"/><path class="st16" d="M516.006,363.257c-24.286,16.479-48.573,32.846-72.812,49.809c-24.229-16.48-48.417-33.322-72.489-51.255		C418.863,362.785,467.437,363.257,516.006,363.257z"/><path class="st16" d="M661.301,361.811c-24.076,17.935-48.266,34.771-72.491,51.255c-24.23-16.963-48.521-33.326-72.803-49.809		C564.579,363.257,613.151,362.785,661.301,361.811z"/><path class="st16" d="M804.088,357.295c-23.451,21.486-47.109,40.777-70.934,58.718c-23.812-19.438-47.785-37.238-71.854-54.203		C709.454,360.835,757.187,359.36,804.088,357.295z"/><path class="st16" d="M941.927,349.198c-22.431,27.552-45.168,51.562-68.156,73.062c-22.988-24.188-46.233-45.525-69.685-64.958		C850.991,355.227,897.062,352.573,941.927,349.198z"/><path class="st16" d="M1028.01,406.215c-6.549,9.123-13.13,17.85-19.743,26.215c-21.783-31.688-43.908-59.05-66.34-83.232		c29.239-2.2,57.967-4.707,86.081-7.562"/><path class="st16" d="M158.241,422.254c-22.989,24.188-45.722,51.217-68.146,82.146c-22.438-20.805-44.562-44.426-66.35-71.975		C67.308,428.295,112.267,424.947,158.241,422.254z"/><path class="st16" d="M298.849,416.014c-23.813,19.438-47.479,40.5-70.924,64.061c-23.449-17.354-46.692-36.336-69.688-57.818		C204.216,419.561,251.222,417.518,298.849,416.014z"/><path class="st16" d="M443.202,413.066c-24.229,16.963-48.416,34.525-72.491,53.438c-24.065-15.984-48.046-32.562-71.854-50.488		C346.478,414.514,394.733,413.547,443.202,413.066z"/><path class="st16" d="M588.812,413.066c-24.232,16.48-48.517,32.607-72.806,49.088c-24.286-16.479-48.573-32.604-72.812-49.088		C491.67,412.586,540.345,412.586,588.812,413.066z"/><path class="st16" d="M733.164,416.014c-23.812,17.93-47.787,34.504-71.855,50.48c-24.077-18.904-48.255-36.473-72.489-53.436		C637.282,413.547,685.535,414.51,733.164,416.014z"/><path class="st16" d="M873.772,422.254c-22.988,21.484-46.24,40.465-69.687,57.82c-23.45-23.562-47.107-44.635-70.931-64.062		C780.793,417.518,827.795,419.561,873.772,422.254z"/><path class="st16" d="M1008.269,432.43c-21.777,27.547-43.914,51.172-66.343,71.975c-22.438-30.934-45.166-57.961-68.153-82.145		C919.754,424.951,964.707,428.295,1008.269,432.43z"/><path class="st16" d="M1028.01,462.523c-6.547-10.453-13.128-20.473-19.741-30.094c6.61,0.629,13.188,1.271,19.733,1.938"/><path class="st16" d="M4.004,527.105c28.115-8.566,56.849-16.092,86.084-22.699c-22.434,30.938-44.562,65.783-66.345,105.738		c-6.612-5.855-13.188-11.996-19.739-18.457"/><path class="st16" d="M227.925,480.082c-23.451,23.57-46.695,49.646-69.688,79.209c-22.984-16.105-45.721-34.088-68.15-54.885		C134.95,494.271,181.023,486.291,227.925,480.082z"/><path class="st16" d="M370.711,466.504c-24.071,18.906-48.046,39.178-71.854,61.605c-23.812-14.934-47.479-30.678-70.924-48.035		C274.827,473.873,322.562,469.436,370.711,466.504z"/><path class="st16" d="M516.006,462.154c-24.286,16.484-48.573,33.324-72.812,51.246c-24.229-15.52-48.417-30.912-72.489-46.895		C418.863,463.58,467.437,462.158,516.006,462.154z"/><path class="st16" d="M661.301,466.504c-24.076,15.979-48.266,31.377-72.491,46.895c-24.23-17.924-48.521-34.764-72.803-51.246		C564.579,462.16,613.151,463.578,661.301,466.504z"/><path class="st16" d="M804.088,480.082c-23.451,17.357-47.109,33.104-70.934,48.035c-23.812-22.436-47.785-42.701-71.854-61.605		C709.454,469.436,757.187,473.875,804.088,480.082z"/><path class="st16" d="M941.927,504.406c-22.431,20.797-45.168,38.771-68.156,54.883c-22.988-29.561-46.233-55.637-69.685-79.207		C850.991,486.287,897.062,494.273,941.927,504.406z"/><path class="st16" d="M1028.01,591.688c-6.549,6.461-13.13,12.604-19.743,18.455c-21.783-39.957-43.908-74.799-66.34-105.736		c29.241,6.605,57.97,14.131,86.086,22.699"/><path class="st16" d="M158.241,559.289c-22.989,29.57-45.722,62.643-68.146,100.324c-22.438-14.045-44.562-30.188-66.35-49.471		C67.308,589.463,112.267,572.752,158.241,559.289z"/><path class="st16" d="M4.004,712.49c76.558-54.496,157.854-90.742,241.562-114.812c100.146-28.488,203.746-39.562,306.866-36.105		c103.119,3.77,205.761,22.049,304.046,59.453c59.021,22.65,116.478,52.195,171.527,91.258"/><path class="st16" d="M298.849,528.117c-23.813,22.439-47.479,47.047-70.924,74.75c-23.449-13.227-46.692-27.469-69.688-43.578		C204.216,545.838,251.222,535.627,298.849,528.117z"/><path class="st16" d="M443.202,513.4c-24.229,17.926-48.416,36.932-72.491,57.795c-24.065-14.035-48.046-28.146-71.854-43.078		C346.478,520.617,394.733,515.809,443.202,513.4z"/><path class="st16" d="M588.812,513.4c-24.232,15.521-48.517,31.17-72.806,47.65c-24.286-16.48-48.573-32.129-72.812-47.65		C491.67,511.002,540.345,511.002,588.812,513.4z"/><path class="st16" d="M733.164,528.117c-23.812,14.938-47.787,29.045-71.855,43.078c-24.077-20.863-48.255-39.869-72.489-57.795		C637.282,515.809,685.535,520.617,733.164,528.117z"/><path class="st16" d="M873.772,559.289c-22.988,16.107-46.24,30.355-69.687,43.578c-23.45-27.705-47.107-52.311-70.931-74.75		C780.793,535.627,827.795,545.836,873.772,559.289z"/><path class="st16" d="M1008.269,610.143c-21.777,19.271-43.914,35.424-66.343,49.471c-22.438-37.688-45.166-70.752-68.153-100.324		C919.754,572.752,964.707,589.463,1008.269,610.143z"/><path class="st16" d="M1028.006,647.984c-6.554-13.111-13.125-25.711-19.737-37.842c6.612,3.141,13.194,6.371,19.741,9.697"/></g><g id="lightning-fist" class="aristotle-svg-svg ">	<line class="st11" x1="239.281" y1="86.228" x2="4" y2="86.228"/><line class="st3" x1="239.281" y1="109.561" x2="115" y2="109.561"/><line class="st11" x1="335" y1="86.228" x2="570.281" y2="86.228"/><line class="st3" x1="335" y1="109.561" x2="459.281" y2="109.561"/><polygon class="st13" points="321.09,70.65 323.229,69.733 313.185,64.475 312.241,66.019 	"/><polygon class="st13" points="326.575,90.768 328.381,90.983 328.381,80.46 326.575,81.442 	"/><polygon class="st13" points="328.381,103.205 326.575,103.161 326.575,113.203 328.381,114.552 	"/><polygon class="st13" points="301.181,60.229 302.274,58.765 293.562,54.204 293.515,56.215 	"/><polygon class="st13" points="247.534,102.85 245.728,102.636 245.728,113.667 247.534,112.685 	"/><polygon class="st13" points="253.866,70.208 262.24,65.824 261.526,64.161 252.069,69.11 	"/><polygon class="st13" points="273.229,60.071 281.272,55.861 281.53,53.688 272.366,58.485 	"/><polygon class="st13" points="245.728,79.176 245.728,90.428 247.534,90.473 247.534,80.525 	"/><path class="st14" d="M282.671,59.385l6.115-4.312l-1.952,16.062l2.232,0.22c0.812,0.06,1.592,0.361,2.245,0.847l0.606-24.8		l-4.562,3.783l1.771-26.329l-4.562,3.791L286.164,4l-6.076,32.806l5.834-4.854L282.671,59.385z"/><path class="st14" d="M309.438,61.49l-10.419,13.86c1.076,0.188,2.024,0.754,2.701,1.627c0.355,0.476,0.604,1.011,0.752,1.573		l13.521-22.143l-5.845,0.995l14.705-21.913l-5.854,1.002l13.705-20.545l-21.664,25.364l7.479-1.277l-16.536,22.122L309.438,61.49z"		/><path class="st14" d="M317.325,74.23l6.789,3.141l-13.776,5.868c0,0.247-0.013,0.493-0.057,0.744l-0.826,4.731l22.873-12.461		l-5.558-2.062l23.688-11.625l-5.562-2.056l22.143-10.938l-31.444,11.133l7.113,2.641L317.325,74.23z"/><path class="st14" d="M253.662,41.254l10.891,25.391l3.146-6.791l5.677,13.328c0.123-0.017,0.241-0.038,0.366-0.038h3.044		c0.588,0,1.142,0.107,1.67,0.289l-11.874-21.794l-2.062,5.56l-11.625-23.688l-2.061,5.562L239.897,16.93l11.135,31.438		L253.662,41.254z"/><polygon class="st14" points="347.157,89.771 352.003,95.606 324.575,92.347 328.885,98.463 309.017,96.047 309.46,100.933 		336.558,101.603 332.772,97.039 359.102,98.816 355.312,94.254 379.957,95.853 	"/><polygon class="st14" points="231.644,72.914 230.365,65.438 252.487,81.975 251.812,74.523 267.177,86.071 268.27,82.896 		268.27,81.12 246.737,67.968 247.733,73.813 225.82,59.107 226.823,64.955 206.278,51.249 	"/><polygon class="st14" points="343.508,121.59 344.786,129.066 322.663,112.531 323.338,119.982 310.138,110.061 307.534,113.784 		328.412,126.537 327.418,120.692 349.33,135.397 348.329,129.55 368.873,143.256 	"/><polygon class="st14" points="249.302,117.135 267.666,109.312 264.911,105.272 241.087,118.251 246.646,120.313 222.956,131.936 		228.52,133.993 206.378,144.932 237.823,133.797 230.709,131.166 256.092,120.276 	"/><polygon class="st14" points="222.281,98.031 249.708,101.291 245.398,95.174 263.297,97.35 264.894,92.708 237.727,92.035 		241.51,96.6 215.181,94.821 218.972,99.384 194.328,97.786 227.126,103.867 	"/><path class="st13" d="M319.094,122.96l-16.286,8.525l-0.062-9.26l8.196-11.729l-1.575-17.361l1.588-9.098		c0.405-2.33-1.08-4.567-3.387-5.104l-1.196-0.279c-1.115-0.261-2.293-0.054-3.277,0.531c-0.067-0.83-0.364-1.627-0.892-2.311		c-0.729-0.95-1.789-1.562-2.979-1.716l-2.934-0.359c-1.04-0.144-2.062,0.116-2.938,0.68c-0.021-1.021-0.362-1.991-1.03-2.779		c-0.779-0.924-1.872-1.479-3.056-1.562l-4.116-0.403c-1.229-0.089-2.409,0.315-3.321,1.146c-0.748,0.681-1.213,1.562-1.382,2.534		c-0.992-0.896-2.294-1.463-3.735-1.463h-3.104c-3.082,0-5.589,2.513-5.589,5.594v4.391l-6.388,18.546l14.1,20.671l-1.854,10.684		l-19.13-10.014l-2.139,0.917l34.449,18.032l33.836-17.71L319.094,122.96z M302.779,82.629c0.104-0.729,0.499-1.359,1.108-1.778		c0.605-0.418,1.342-0.562,2.062-0.396l1.195,0.28c1.354,0.312,2.225,1.628,1.979,2.994l-1.831,10.486		c-2.135,0.35-4.141,0.146-6.102-0.612L302.779,82.629z M306.549,96.292c-0.604,1.437-1.443,3.375-1.803,4.122		c-0.416,0.895-1.549,1.748-2.723,1.605l-0.874-0.093c-0.619-0.065-1.167-0.403-1.501-0.938c-0.336-0.521-0.411-1.16-0.212-1.749		l1.299-3.812C302.745,96.254,304.672,96.542,306.549,96.292z M293.136,78.97c0.069-0.707,0.412-1.349,0.977-1.785		c0.555-0.444,1.254-0.646,1.959-0.562l2.925,0.37c0.698,0.086,1.321,0.444,1.748,1.003c0.43,0.562,0.612,1.261,0.515,1.952		l-1.894,13.521c-2.563,0.751-4.996,0.494-7.562-0.809L293.136,78.97z M291.704,94.762c2.309,1.146,4.659,1.438,7.012,0.872		l-1.021,3.018c-0.002,0.003-0.001,0.006-0.005,0.011l-0.327,0.965c-0.354,1.037-1.385,1.664-2.479,1.481l-1.894-0.312		c-0.817-0.143-1.417-0.86-1.396-1.688L291.704,94.762z M282.213,75.118c0.021-0.724,0.32-1.389,0.856-1.874		c0.534-0.479,1.224-0.716,1.938-0.674l4.104,0.402c0.707,0.053,1.348,0.379,1.807,0.92c0.455,0.539,0.671,1.226,0.604,1.93		l-1.562,16.6c-2.692,0.479-4.6,0.23-6.938-0.571c1.008-0.399,2.016-0.979,2.896-1.79c1.812-1.684,2.729-4.021,2.729-6.977v-0.923		h-6.354v-3.616c0-0.416-0.054-0.812-0.14-1.208L282.213,75.118z M289.915,100.189c-1.77-1.735-4.336-3.008-7.995-3.572		l-0.071-3.133l-0.022-0.128c1.938,0.719,3.674,1.146,5.618,1.146c0.758,0,1.568-0.089,2.434-0.22l-0.122,4.773		C289.738,99.45,289.802,99.829,289.915,100.189z M269.857,78.545c0-2.062,1.678-3.737,3.743-3.737h3.104		c1.729,0,3.165,1.179,3.604,2.767L280.2,82.17h-10.343V78.545z M275.59,133.729l2.079-12.003l-13.993-20.523l5.915-17.188h17.188		c-0.162,1.973-0.864,3.546-2.089,4.687c-2.688,2.501-7.097,2.216-7.143,2.209l-1.062-0.078l0.079,1.067		c0.109,1.541,0.226,4.288,0.021,5.09l-0.288,1.146h1.188c11.646,0,14.247,5.471,14.562,13.681c0.021,0.496,0.434,0.888,0.921,0.888		c0.02,0,0.022,0,0.036-0.002c0.51-0.02,0.904-0.446,0.891-0.958c-0.134-3.38-0.646-6.785-2.36-9.54		c0.354,0.203,0.746,0.354,1.166,0.418l1.896,0.314c0.229,0.037,0.451,0.056,0.675,0.056c1.056,0,2.038-0.406,2.78-1.104		c0.021,0.038,0.03,0.075,0.061,0.107c0.639,1.001,1.682,1.646,2.857,1.771l0.875,0.093c0.146,0.021,0.293,0.023,0.438,0.023		c1.896,0,3.501-1.307,4.146-2.688c0.312-0.675,0.994-2.24,1.572-3.586l1.055,12.387l-8.146,11.65l0.069,10.798l-7.089,3.709v-8.248		c0-0.511-0.409-0.924-0.924-0.924c-0.512,0-0.922,0.413-0.922,0.924v9.213l-4.979,2.609L275.59,133.729z M278.462,92.756		c0.479-0.021,1.094-0.066,1.778-0.178l-0.031,3.826c-0.552-0.047-1.101-0.096-1.696-0.105		C278.573,95.184,278.515,93.725,278.462,92.756z"/></g><g id="chapter-progress-chapter" class="aristotle-svg-svg ">	<path  class="teal  st21" d="M12,7.402l5,2.683v5.842l-5,2.676l-5-2.676v-5.842L12,7.402 M12,4L4,8.275v9.438l8,4.282		l8-4.282V8.275L12,4L12,4z"/></g><g id="chapter-progress-slide" class="aristotle-svg-svg ">	<rect x="4" y="4" class="st21" width="9" height="9"/></g><g id="chapter-progress-quiz" class="aristotle-svg-svg ">	<polygon  class="teal  st21" points="23.668,28.111 17.75,31.184 6.5,25.344 6.5,12.656 10.155,10.76 8.332,8.889 		4,11.138 4,26.862 17.75,34 26.106,29.662 	"/><polygon  class="teal  st21" points="17.75,4 11.401,7.296 13.872,8.83 17.75,6.816 29,12.656 29,25.344 27.178,26.289 		29.067,28.125 31.5,26.862 31.5,11.138 	"/><g>		<polygon class="st9" points="7.75,6.5 20.664,14.519 16.706,14.517 27.465,23.711 22.8,23.778 29.655,30.439 15.886,21.678 			21.061,21.583 9.561,12.731 13.695,12.603 		"/></g></g><g id="chapter-progress-duties" class="aristotle-svg-svg ">	<circle  class="teal st21" cx="8.5" cy="8.5" r="4.5"/></g><g id="closed-caption-btn" class="aristotle-svg-svg ">	<path class="st8" d="M23.143,7c1.692,0,3.068,1.376,3.068,3.068v7.863c0,1.692-1.376,3.068-3.068,3.068H10.062		C8.374,20.999,7,19.623,7,17.931v-7.863C7,8.376,8.376,7,10.062,7H23.143 M23.143,4H10.062C6.71,4,4,6.717,4,10.068v7.863		c0,3.352,2.716,6.068,6.062,6.068h13.081c3.354,0,6.068-2.717,6.068-6.068v-7.863C29.211,6.716,26.494,4,23.143,4L23.143,4z"/><path class="st8" d="M15.145,17.843c-0.565,0.234-0.896,0.312-1.391,0.312c-1.053,0-2.002-0.469-2.652-1.313		c-0.604-0.793-0.909-1.819-0.909-3.146c0-1.456,0.363-2.549,1.137-3.381c0.695-0.754,1.625-1.144,2.699-1.144		c0.455,0,0.739,0.052,1.155,0.208v2.482c-0.39-0.39-0.663-0.52-1.079-0.52c-0.942,0-1.521,0.871-1.521,2.314		c0,1.403,0.546,2.235,1.481,2.235c0.438,0,0.755-0.143,1.223-0.559L15.145,17.843z"/><path class="st8" d="M22.178,17.843c-0.571,0.234-0.896,0.312-1.391,0.312c-1.059,0-2.002-0.469-2.652-1.313		c-0.61-0.793-0.91-1.819-0.91-3.146c0-1.456,0.364-2.549,1.132-3.381c0.701-0.754,1.625-1.144,2.704-1.144		c0.455,0,0.74,0.052,1.156,0.208v2.482c-0.39-0.39-0.663-0.52-1.079-0.52c-0.947,0-1.521,0.871-1.521,2.314		c0,1.403,0.546,2.235,1.479,2.235c0.441,0,0.754-0.143,1.228-0.559L22.178,17.843z"/></g><g id="playhead" class="aristotle-svg-svg ">	<path class="st13" d="M12,4L4,8.282v9.438l8,4.277l8-4.277V8.282L12,4L12,4z"/><polygon class="st21" points="7.039,15.914 7.039,10.085 12,7.43 16.961,10.085 16.961,15.914 12,18.57 	"/></g><g id="pause-btn" class="aristotle-svg-svg ">	<g>		<path class="st21" d="M18,7.367l11,5.604v12.054l-11,5.604L7,25.024V12.971L18,7.367 M18,4L4,11.138v15.729l14,7.138l14-7.138			V11.138L18,4L18,4z"/></g>	<g  class="pause" >		<g>			<rect x="13.5" y="13" class="st13" width="3" height="12"/></g>		<g>			<rect x="19.5" y="13" class="st13" width="3" height="12"/></g>	</g>	<g  class="play" >		<polygon class="st13" points="14.67,24.993 14.67,12.749 22.97,18.871 		"/></g>	<g  class="replay" >		<path class="st17" d="M17.819,13.11c3.182,0,5.761,2.58,5.761,5.761s-2.579,5.761-5.761,5.761c-3.182,0-5.761-2.58-5.761-5.761"/><polygon class="st13" points="19.306,16.845 14.55,12.932 19.306,9.804 		"/></g></g><g id="finished-exploring" class="aristotle-svg-svg ">	<rect x="4" y="4" class="st6" width="276.083" height="20.854"/><path class="st14" d="M13.053,9.835h1.821l-1.149,9.343h-1.821L13.053,9.835z"/><path class="st14" d="M18.275,9.191h1.835l-2.297,3.782h-1.219L18.275,9.191z"/><path class="st14" d="M21.495,12.916h1.723l-0.112,1.009c0.52-0.784,1.037-1.135,1.653-1.135c0.574,0,0.882,0.351,0.952,1.079		c0.448-0.687,1.021-1.079,1.597-1.079c0.603,0,0.952,0.421,0.952,1.163c0,0.14-0.028,0.476-0.056,0.742l-0.562,4.482H25.92		l0.434-3.544c0.028-0.267,0.057-0.532,0.057-0.658c0-0.267-0.126-0.435-0.336-0.435c-0.168,0-0.322,0.099-0.42,0.28		c-0.07,0.126-0.099,0.238-0.169,0.812l-0.434,3.544h-1.723l0.447-3.656c0.028-0.21,0.042-0.42,0.042-0.504		c0-0.294-0.111-0.448-0.321-0.448c-0.196,0-0.394,0.14-0.478,0.351c-0.042,0.084-0.069,0.321-0.111,0.602l-0.462,3.656h-1.724		L21.495,12.916z"/><path class="st14" d="M34.627,9.835h3.67l-0.21,1.723h-1.85l-0.252,1.989h1.667l-0.21,1.778h-1.667l-0.477,3.853h-1.821		L34.627,9.835z"/><path class="st14" d="M39.862,12.916h1.724l-0.771,6.262h-1.723L39.862,12.916z M39.891,11.194c0-0.672,0.588-1.247,1.247-1.247		c0.532,0,0.953,0.421,0.953,0.967c0,0.673-0.574,1.261-1.247,1.261C40.297,12.174,39.891,11.754,39.891,11.194z"/><path class="st14" d="M43.684,12.916h1.724l-0.112,0.98c0.477-0.77,0.967-1.106,1.61-1.106c0.631,0,0.952,0.393,0.952,1.163		c0,0.154-0.027,0.476-0.098,1.036l-0.518,4.188h-1.724l0.436-3.572c0.027-0.28,0.056-0.518,0.056-0.644		c0-0.267-0.126-0.406-0.336-0.406c-0.196,0-0.35,0.126-0.448,0.336c-0.07,0.14-0.07,0.196-0.14,0.714l-0.448,3.572h-1.723		L43.684,12.916z"/><path class="st14" d="M50.096,12.916h1.723l-0.771,6.262h-1.723L50.096,12.916z M50.124,11.194c0-0.672,0.588-1.247,1.247-1.247		c0.531,0,0.952,0.421,0.952,0.967c0,0.673-0.573,1.261-1.246,1.261C50.53,12.174,50.124,11.754,50.124,11.194z"/><path class="st14" d="M53.861,17.343c0.309,0.294,0.519,0.393,0.799,0.393c0.35,0,0.615-0.253,0.615-0.589		c0-0.21-0.111-0.322-0.489-0.546c-0.953-0.547-1.22-0.925-1.22-1.695c0-1.219,0.968-2.115,2.298-2.115		c0.63,0,1.063,0.154,1.582,0.547l-0.854,1.274c-0.308-0.336-0.477-0.435-0.756-0.435c-0.294,0-0.504,0.225-0.504,0.519		c0,0.21,0.111,0.309,0.588,0.574c0.756,0.42,1.063,0.868,1.063,1.527c0,1.414-0.979,2.507-2.269,2.507		c-0.645,0-1.205-0.224-1.765-0.714L53.861,17.343z"/><path class="st14" d="M59.7,9.191h1.723l-0.575,4.706c0.478-0.77,0.967-1.106,1.611-1.106c0.63,0,0.952,0.393,0.952,1.163		c0,0.154-0.028,0.476-0.099,1.036l-0.518,4.188h-1.724l0.436-3.572c0.028-0.28,0.056-0.518,0.056-0.644		c0-0.267-0.126-0.406-0.336-0.406c-0.195,0-0.35,0.126-0.448,0.336c-0.069,0.14-0.069,0.196-0.14,0.714l-0.448,3.572h-1.723		L59.7,9.191z"/><path class="st14" d="M69.25,17.245c-0.183,0.574-0.28,0.798-0.462,1.106c-0.364,0.602-1.008,0.952-1.766,0.952		c-1.232,0-2.003-0.91-2.003-2.367c0-2.367,1.177-4.146,2.761-4.146c1.12,0,1.793,0.841,1.793,2.241		c0,0.477-0.042,0.854-0.168,1.485h-2.731c-0.028,0.322-0.042,0.49-0.042,0.658c0,0.561,0.168,0.826,0.533,0.826		c0.35,0,0.546-0.238,0.616-0.756L69.25,17.245L69.25,17.245z M68.073,15.438c0.027-0.196,0.041-0.322,0.041-0.476		c0-0.547-0.182-0.841-0.504-0.841c-0.42,0-0.714,0.504-0.784,1.316L68.073,15.438L68.073,15.438z"/><path class="st14" d="M73.715,18.463c-0.378,0.575-0.771,0.841-1.233,0.841c-0.854,0-1.345-0.841-1.345-2.325		c0-1.135,0.28-2.409,0.672-3.138c0.378-0.687,0.869-1.051,1.457-1.051c0.49,0,0.827,0.294,1.037,0.896l0.546-4.496h1.737		l-1.233,9.987H73.63L73.715,18.463z M74.177,15.325c0-0.644-0.14-0.952-0.42-0.966c-0.462-0.028-0.869,1.093-0.869,2.381		c0,0.631,0.168,0.995,0.448,0.995C73.799,17.736,74.177,16.656,74.177,15.325z"/><path class="st14" d="M82.323,9.835h1.821l-1.148,9.343h-1.821L82.323,9.835z"/><path class="st14" d="M86.005,12.916h1.723l-0.111,0.98c0.477-0.77,0.967-1.106,1.61-1.106c0.63,0,0.953,0.393,0.953,1.163		c0,0.154-0.028,0.476-0.098,1.036l-0.519,4.188h-1.723l0.435-3.572c0.028-0.28,0.057-0.518,0.057-0.644		c0-0.267-0.126-0.406-0.336-0.406c-0.196,0-0.351,0.126-0.448,0.336c-0.07,0.14-0.07,0.196-0.14,0.714l-0.448,3.572h-1.724		L86.005,12.916z"/><path class="st14" d="M92.361,17.343c0.309,0.294,0.519,0.393,0.799,0.393c0.35,0,0.615-0.253,0.615-0.589		c0-0.21-0.111-0.322-0.489-0.546c-0.953-0.547-1.22-0.925-1.22-1.695c0-1.219,0.968-2.115,2.298-2.115		c0.63,0,1.063,0.154,1.582,0.547l-0.854,1.274c-0.308-0.336-0.477-0.435-0.756-0.435c-0.294,0-0.504,0.225-0.504,0.519		c0,0.21,0.111,0.309,0.588,0.574c0.756,0.42,1.063,0.868,1.063,1.527c0,1.414-0.979,2.507-2.269,2.507		c-0.645,0-1.205-0.224-1.765-0.714L92.361,17.343z"/><path class="st14" d="M98.368,22.26h-1.724l1.148-9.344h1.723l-0.084,0.771c0.351-0.603,0.756-0.896,1.261-0.896		c0.868,0,1.316,0.771,1.316,2.241c0,2.409-0.938,4.272-2.143,4.272c-0.477,0-0.784-0.252-1.022-0.841L98.368,22.26z		 M100.245,15.354c0-0.63-0.168-0.994-0.448-0.994c-0.448,0-0.827,1.078-0.827,2.396c0,0.644,0.14,0.98,0.42,0.98		C99.852,17.736,100.245,16.643,100.245,15.354z"/><path class="st14" d="M107.833,17.245c-0.183,0.574-0.28,0.798-0.462,1.106c-0.364,0.602-1.009,0.952-1.766,0.952		c-1.232,0-2.003-0.91-2.003-2.367c0-2.367,1.178-4.146,2.76-4.146c1.121,0,1.794,0.841,1.794,2.241		c0,0.477-0.042,0.854-0.169,1.485h-2.73c-0.028,0.322-0.042,0.49-0.042,0.658c0,0.561,0.168,0.826,0.532,0.826		c0.35,0,0.546-0.238,0.615-0.756L107.833,17.245L107.833,17.245z M106.657,15.438c0.027-0.196,0.041-0.322,0.041-0.476		c0-0.547-0.182-0.841-0.504-0.841c-0.42,0-0.714,0.504-0.784,1.316L106.657,15.438L106.657,15.438z"/><path class="st14" d="M112.647,19.08c-0.434,0.168-0.658,0.224-1.021,0.224c-1.177,0-1.892-0.952-1.892-2.535		c0-0.967,0.267-1.976,0.715-2.703c0.546-0.883,1.19-1.275,2.101-1.275c0.336,0,0.504,0.042,0.854,0.183l-0.195,1.526		c-0.154-0.154-0.252-0.196-0.462-0.196c-0.714,0-1.233,0.911-1.233,2.144c0,0.826,0.252,1.219,0.785,1.219		c0.196,0,0.322-0.042,0.546-0.183L112.647,19.08z"/><path class="st14" d="M115.307,14.36h-0.588l0.182-1.443h0.589l0.21-1.723h1.723l-0.21,1.723h0.701l-0.168,1.443h-0.7l-0.604,4.818		h-1.723L115.307,14.36z"/><path class="st14" d="M119.465,12.916h1.723l-0.771,6.262h-1.724L119.465,12.916z M119.493,11.194c0-0.672,0.588-1.247,1.246-1.247		c0.532,0,0.953,0.421,0.953,0.967c0,0.673-0.574,1.261-1.247,1.261C119.898,12.174,119.493,11.754,119.493,11.194z"/><path class="st14" d="M123.286,12.916h1.723l-0.112,0.98c0.478-0.77,0.968-1.106,1.611-1.106c0.63,0,0.953,0.393,0.953,1.163		c0,0.154-0.028,0.476-0.099,1.036l-0.518,4.188h-1.723l0.435-3.572c0.028-0.28,0.056-0.518,0.056-0.644		c0-0.267-0.125-0.406-0.336-0.406c-0.195,0-0.35,0.126-0.447,0.336c-0.07,0.14-0.07,0.196-0.141,0.714l-0.447,3.572h-1.724		L123.286,12.916z"/><path class="st14" d="M130.245,20.004v0.154c0,0.462,0.182,0.7,0.531,0.7c0.49,0,0.729-0.392,0.854-1.513l0.112-0.952		c-0.519,0.729-0.784,0.91-1.262,0.91c-0.854,0-1.387-0.91-1.387-2.339c0-1.022,0.268-2.283,0.659-3.068		c0.364-0.728,0.868-1.106,1.442-1.106c0.532,0,0.841,0.252,1.135,0.883l0.084-0.757h1.736l-0.841,6.808		c-0.112,0.883-0.237,1.233-0.602,1.667c-0.49,0.589-1.22,0.896-2.073,0.896c-1.232,0-1.919-0.688-1.919-1.919		c0-0.112,0-0.224,0.014-0.364H130.245L130.245,20.004z M132.149,15.354c0-0.672-0.126-0.98-0.42-0.994		c-0.462-0.028-0.869,1.093-0.869,2.354c0,0.63,0.168,0.994,0.448,0.994C131.771,17.707,132.149,16.643,132.149,15.354z"/><path class="st14" d="M141.767,18.463c-0.378,0.575-0.771,0.841-1.232,0.841c-0.854,0-1.346-0.841-1.346-2.325		c0-1.135,0.28-2.409,0.672-3.138c0.379-0.687,0.869-1.051,1.457-1.051c0.49,0,0.827,0.294,1.037,0.896l0.099-0.771h1.724		l-0.771,6.262h-1.723L141.767,18.463z M142.229,15.325c0-0.644-0.14-0.952-0.42-0.966c-0.462-0.028-0.869,1.093-0.869,2.381		c0,0.631,0.168,0.995,0.448,0.995C141.851,17.736,142.229,16.656,142.229,15.325z"/><path class="st14" d="M146.261,12.916h1.723l-0.111,0.98c0.477-0.77,0.967-1.106,1.61-1.106c0.63,0,0.952,0.393,0.952,1.163		c0,0.154-0.027,0.476-0.098,1.036l-0.52,4.188h-1.723l0.434-3.572c0.028-0.28,0.058-0.518,0.058-0.644		c0-0.267-0.126-0.406-0.337-0.406c-0.195,0-0.35,0.126-0.447,0.336c-0.07,0.14-0.07,0.196-0.141,0.714l-0.448,3.572h-1.724		L146.261,12.916z"/><path class="st14" d="M154.675,18.463c-0.378,0.575-0.77,0.841-1.232,0.841c-0.854,0-1.345-0.841-1.345-2.325		c0-1.135,0.28-2.409,0.673-3.138c0.378-0.687,0.868-1.051,1.456-1.051c0.491,0,0.827,0.294,1.037,0.896l0.546-4.496h1.737		l-1.232,9.987h-1.724L154.675,18.463z M155.138,15.325c0-0.644-0.141-0.952-0.42-0.966c-0.463-0.028-0.869,1.093-0.869,2.381		c0,0.631,0.168,0.995,0.448,0.995C154.76,17.736,155.138,16.656,155.138,15.325z"/><path class="st14" d="M163.298,9.835h1.976c0.938,0,1.526,0.126,1.946,0.434c0.52,0.393,0.827,1.079,0.827,1.892		c0,1.204-0.547,2.143-1.625,2.76l1.078,4.258h-1.919l-1.078-4.314l-0.532,4.314h-1.821L163.298,9.835z M164.909,13.869		c0.825,0,1.357-0.603,1.357-1.555c0-0.477-0.14-0.785-0.435-0.925c-0.153-0.084-0.252-0.099-0.896-0.099l-0.308,2.55		C164.755,13.855,164.853,13.869,164.909,13.869z"/><path class="st14" d="M173.659,17.245c-0.183,0.574-0.28,0.798-0.463,1.106c-0.363,0.602-1.009,0.952-1.766,0.952		c-1.232,0-2.003-0.91-2.003-2.367c0-2.367,1.177-4.146,2.76-4.146c1.12,0,1.793,0.841,1.793,2.241c0,0.477-0.042,0.854-0.168,1.485		h-2.73c-0.028,0.322-0.042,0.49-0.042,0.658c0,0.561,0.168,0.826,0.531,0.826c0.351,0,0.547-0.238,0.616-0.756L173.659,17.245		L173.659,17.245z M172.482,15.438c0.028-0.196,0.042-0.322,0.042-0.476c0-0.547-0.182-0.841-0.504-0.841		c-0.42,0-0.715,0.504-0.784,1.316L172.482,15.438L172.482,15.438z"/><path class="st14" d="M178.124,18.463c-0.378,0.575-0.771,0.841-1.232,0.841c-0.854,0-1.345-0.841-1.345-2.325		c0-1.135,0.28-2.409,0.673-3.138c0.378-0.687,0.868-1.051,1.456-1.051c0.491,0,0.827,0.294,1.037,0.896l0.098-0.771h1.724		l-0.771,6.262h-1.724L178.124,18.463z M178.587,15.325c0-0.644-0.141-0.952-0.42-0.966c-0.463-0.028-0.869,1.093-0.869,2.381		c0,0.631,0.168,0.995,0.448,0.995C178.209,17.736,178.587,16.656,178.587,15.325z"/><path class="st14" d="M184.592,18.463c-0.378,0.575-0.771,0.841-1.232,0.841c-0.854,0-1.345-0.841-1.345-2.325		c0-1.135,0.28-2.409,0.673-3.138c0.378-0.687,0.868-1.051,1.456-1.051c0.49,0,0.827,0.294,1.037,0.896l0.546-4.496h1.737		l-1.232,9.987h-1.724L184.592,18.463z M185.055,15.325c0-0.644-0.141-0.952-0.421-0.966c-0.462-0.028-0.868,1.093-0.868,2.381		c0,0.631,0.168,0.995,0.448,0.995C184.677,17.736,185.055,16.656,185.055,15.325z"/><path class="st14" d="M188.539,12.916h1.724l0.321,2.283c0.099,0.715,0.112,1.149,0.112,1.289l1.246-3.572h1.736l-3.796,9.344		h-1.681l1.387-3.208L188.539,12.916z"/><path class="st14" d="M198.717,14.36h-0.588l0.182-1.443h0.589l0.21-1.723h1.724l-0.21,1.723h0.7l-0.168,1.443h-0.7l-0.604,4.818		h-1.723L198.717,14.36z"/><path class="st14" d="M202.272,16.698c0-0.84,0.225-1.778,0.588-2.479c0.478-0.924,1.262-1.429,2.199-1.429		c1.262,0,1.977,0.854,1.977,2.396c0,2.508-1.094,4.118-2.773,4.118C202.959,19.304,202.272,18.394,202.272,16.698z M205.27,15.325		c0-0.644-0.14-0.966-0.405-0.966c-0.463,0-0.854,1.106-0.854,2.381c0,0.631,0.153,0.995,0.434,0.995		C204.907,17.736,205.27,16.643,205.27,15.325z"/><path class="st14" d="M213.851,9.835h2.382l0.238,5.519l1.4-5.519h2.45l-0.182,9.343h-1.863l0.364-6.724		c-0.153,0.771-0.28,1.261-0.546,2.157l-1.359,4.566h-1.399L215,14.933c-0.028-0.322-0.07-1.345-0.07-1.583		c0-0.252,0-0.309,0.028-0.896l-1.107,6.724h-1.961L213.851,9.835z"/><path class="st14" d="M222.237,16.698c0-0.84,0.224-1.778,0.588-2.479c0.477-0.924,1.261-1.429,2.198-1.429		c1.261,0,1.977,0.854,1.977,2.396c0,2.508-1.093,4.118-2.773,4.118C222.923,19.304,222.237,18.394,222.237,16.698z M225.233,15.325		c0-0.644-0.14-0.966-0.405-0.966c-0.462,0-0.854,1.106-0.854,2.381c0,0.631,0.153,0.995,0.434,0.995		C224.87,17.736,225.233,16.643,225.233,15.325z"/><path class="st14" d="M228.536,12.916h1.709l0.336,2.773c0.027,0.211,0.027,0.364,0.057,0.771c0.084-0.252,0.112-0.35,0.196-0.574		l0.084-0.196l0.979-2.773h1.778l-2.549,6.262h-1.583L228.536,12.916z"/><path class="st14" d="M238.632,17.245c-0.182,0.574-0.28,0.798-0.462,1.106c-0.364,0.602-1.009,0.952-1.767,0.952		c-1.231,0-2.003-0.91-2.003-2.367c0-2.367,1.178-4.146,2.761-4.146c1.119,0,1.793,0.841,1.793,2.241		c0,0.477-0.042,0.854-0.168,1.485h-2.731c-0.028,0.322-0.042,0.49-0.042,0.658c0,0.561,0.168,0.826,0.532,0.826		c0.35,0,0.546-0.238,0.616-0.756L238.632,17.245L238.632,17.245z M237.455,15.438c0.027-0.196,0.042-0.322,0.042-0.476		c0-0.547-0.183-0.841-0.504-0.841c-0.42,0-0.716,0.504-0.784,1.316L237.455,15.438L237.455,15.438z"/><path class="st14" d="M244.412,15.802c0-1.555,0.363-3.222,0.924-4.202c0.687-1.177,1.835-1.919,2.998-1.919		c0.896,0,1.778,0.519,2.213,1.316c0.351,0.616,0.49,1.233,0.49,2.186c0,1.61-0.351,3.235-0.925,4.23		c-0.687,1.19-1.835,1.919-3.012,1.919c-0.883,0-1.779-0.532-2.199-1.317C244.552,17.385,244.412,16.755,244.412,15.802z		 M248.46,16.656c0.393-0.784,0.645-2.186,0.645-3.487c0-1.093-0.393-1.793-0.994-1.793c-0.405,0-0.841,0.363-1.106,0.896		c-0.393,0.784-0.645,2.171-0.645,3.459c0,1.121,0.393,1.821,0.994,1.821C247.76,17.553,248.194,17.189,248.46,16.656z"/><path class="st14" d="M253.26,12.916h1.723l-0.111,0.98c0.477-0.77,0.967-1.106,1.61-1.106c0.631,0,0.952,0.393,0.952,1.163		c0,0.154-0.028,0.476-0.098,1.036l-0.519,4.188h-1.724l0.435-3.572c0.027-0.28,0.057-0.518,0.057-0.644		c0-0.267-0.126-0.406-0.336-0.406c-0.196,0-0.352,0.126-0.449,0.336c-0.068,0.14-0.068,0.196-0.14,0.714l-0.448,3.572h-1.723		L253.26,12.916z"/><polygon class="st9" points="264.95,19.883 264.95,8.685 271.95,14.283 	"/></g><g id="closed-caption-big" class="aristotle-svg-svg ">	<path class="st13" d="M64.149,7c1.692,0,3.068,1.376,3.068,3.067v40.381c0,1.692-1.376,3.068-3.068,3.068H10.067		C8.377,53.517,7,52.141,7,50.448V10.067C7,8.376,8.377,7,10.067,7H64.149 M64.149,4H10.067C6.717,4,4,6.717,4,10.067v40.381		c0,3.353,2.717,6.068,6.067,6.068h54.082c3.352,0,6.068-2.716,6.068-6.068V10.067C70.218,6.717,67.501,4,64.149,4"/><path class="st13" d="M33.281,40.354c-1.502,0.614-2.355,0.818-3.652,0.818c-2.765,0-5.257-1.229-6.964-3.447		c-1.604-2.082-2.389-4.778-2.389-8.26c0-3.823,0.955-6.69,2.97-8.875c1.843-1.98,4.267-3.004,7.1-3.004		c1.194,0,1.945,0.137,3.038,0.546v6.52c-1.024-1.023-1.741-1.365-2.834-1.365c-2.491,0-3.993,2.287-3.993,6.076		c0,3.687,1.434,5.871,3.892,5.871c1.16,0,1.979-0.376,3.208-1.468L33.281,40.354z"/><path class="st13" d="M51.749,40.354c-1.502,0.614-2.355,0.818-3.652,0.818c-2.765,0-5.257-1.229-6.964-3.447		c-1.604-2.082-2.389-4.778-2.389-8.26c0-3.823,0.955-6.69,2.97-8.875c1.843-1.98,4.267-3.004,7.1-3.004		c1.194,0,1.945,0.137,3.038,0.546v6.52c-1.024-1.023-1.741-1.365-2.834-1.365c-2.491,0-3.993,2.287-3.993,6.076		c0,3.687,1.434,5.871,3.892,5.871c1.16,0,1.979-0.376,3.208-1.468L51.749,40.354z"/></g>';
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var APIproxy, AnimationQuality, Aristotle, ChromeUI, Commander, DevTools, Dictionary, Episode, EpisodeLoader, GlobalVars, JsonLoader, LocalStorageProxy, LogStache, Logger, Movie, Parser, PausableDelays, SlideUX, SoundFX, SvgCartographer, isInternetExp, smallScreenZoom,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

AnimationQuality = require('misc/animation-quality');

APIproxy = require("misc/api-proxy");

ChromeUI = require("chrome/chrome-ui");

Commander = require('misc/commander');

DevTools = require('misc/dev-tools');

Dictionary = require('misc/dictionary');

Episode = require("episode/episode");

EpisodeLoader = require('misc/episode-loader');

GlobalVars = require('misc/global-vars');

isInternetExp = require('misc/browser-detect');

JsonLoader = require('misc/json-loader');

LocalStorageProxy = require('misc/local-storage-proxy');

Logger = require('misc/logger');

LogStache = require('misc/logstache');

Movie = require('movie/movie');

Parser = require('misc/parser');

PausableDelays = require('misc/pausable-delays');

SlideUX = require('slide-ux/slide-ux');

SoundFX = require('misc/sfx');

smallScreenZoom = require('misc/small-screen-zoomer');

SvgCartographer = require('misc/svg-cartographer');

Aristotle = (function() {
  function Aristotle($el) {
    this.$el = $el;
    this.onJsonLoaded = bind(this.onJsonLoaded, this);
    this.begin = bind(this.begin, this);
    this.letsGo = bind(this.letsGo, this);
    window.aristotle = this;
    this.localStorageProxy = new LocalStorageProxy(this.letsGo);
    PubSub.subscribe('episode.goto', (function(_this) {
      return function(m, data) {
        return _this.gotoLocationByTitle(data.slide, data.chapter);
      };
    })(this));
  }

  Aristotle.prototype.letsGo = function() {
    var animationQuality, apiProxy, cartographer, commander, dictionary, globals, jsonLoaer, logStache, parser, pausableDelays, shadowIcons, soundFx;
    aristotle.isIE = isInternetExp();
    animationQuality = new AnimationQuality();
    jsonLoaer = new JsonLoader();
    globals = new GlobalVars();
    commander = new Commander();
    dictionary = new Dictionary();
    logStache = new LogStache();
    apiProxy = new APIproxy();
    parser = new Parser();
    soundFx = new SoundFX();
    pausableDelays = new PausableDelays();
    cartographer = new SvgCartographer();
    shadowIcons = new pxicons.ShadowIcons();
    PubSub.publish('animations.go.low');
    this.setDevMode(this.isDevMode);
    this.localStorageProxy.begin(this.begin);
    return smallScreenZoom();
  };

  Aristotle.prototype.begin = function() {
    this.setInitialEpisodeNum();
    PubSub.publish('sessionkey.add');
    PubSub.subscribe('episode.load', (function(_this) {
      return function(m, data) {
        _this.episodeNum = data;
        return _this.init();
      };
    })(this));
    PubSub.publish('episode.load', this.episodeNum);
    return log("*************** EPISODE " + this.episodeNum);
  };

  Aristotle.prototype.init = function() {
    var episodeLoader;
    if (this.chromeUI != null) {
      this.deleteOldAssets();
    }
    this.build();
    return episodeLoader = new EpisodeLoader(this.onJsonLoaded);
  };

  Aristotle.prototype.onJsonLoaded = function(episodeData) {
    return this.episode = new Episode(episodeData, this.movie, this.slideUX, this.chromeUI);
  };

  Aristotle.prototype.build = function() {
    var $base;
    $base = $(jadeTemplate['aristotle']({}));
    this.$el.append($base);
    shadowIconsInstance.svgReplaceWithString(pxSvgIconString, $base);
    this.chromeUI = new ChromeUI($(".chrome", $base));
    this.slideUX = new SlideUX($(".slide-ux", $base));
    return this.movie = new Movie($(".movie", $base));
  };

  Aristotle.prototype.deleteOldAssets = function() {
    this.episode.destroy();
    this.chromeUI.destroy();
    this.slideUX.destroy();
    this.movie.destroy();
    this.$el.empty();
    return this.episode = this.chromeUI = this.slideUX = this.movie = null;
  };

  Aristotle.prototype.setDevMode = function(devMode) {
    var logger;
    logger = new Logger($('body'), devMode);
    return aristotle.devTools = new DevTools(devMode);
  };

  Aristotle.prototype.setInitialEpisodeNum = function() {
    if (aristotle.localStorageProxy.store != null) {
      if (aristotle.localStorageProxy.store.location != null) {
        if (aristotle.localStorageProxy.store.location.episodeNum) {
          this.episodeNum = aristotle.localStorageProxy.store.location.episodeNum;
        }
      }
    }
    if (this.isDevMode && this.devEpisodeNum !== false) {
      this.episodeNum = this.devEpisodeNum;
    }
    if (!this.episodeNum) {
      return this.episodeNum = "0";
    }
  };

  Aristotle.prototype.gotoLocationByTitle = function(title, chapter) {
    aristotle.localStorageProxy.saveState(title, chapter);
    return this.init();
  };

  return Aristotle;

})();

window.Aristotle = Aristotle;

},{"chrome/chrome-ui":3,"episode/episode":10,"misc/animation-quality":14,"misc/api-proxy":15,"misc/browser-detect":17,"misc/commander":18,"misc/dev-tools":19,"misc/dictionary":20,"misc/episode-loader":21,"misc/global-vars":22,"misc/json-loader":23,"misc/local-storage-proxy":24,"misc/logger":25,"misc/logstache":26,"misc/parser":27,"misc/pausable-delays":28,"misc/sfx":30,"misc/small-screen-zoomer":31,"misc/svg-cartographer":32,"movie/movie":36,"slide-ux/slide-ux":60}],2:[function(require,module,exports){
var BottomUiElements, ProgressMap, VCRControls;

ProgressMap = require('chrome/progress-map');

VCRControls = require('chrome/vcr-controls');

module.exports = BottomUiElements = (function() {
  function BottomUiElements($el) {
    this.$el = $el;
    this.$node = $(jadeTemplate['chrome-ui/progress']({}));
    this.$el.append(this.$node);
    this.progessMap = new ProgressMap(this.$node);
    this.vcrControls = new VCRControls(this.$node);
    this.show('progress-map');
    PubSub.subscribe('vcr-control.show', (function(_this) {
      return function(m, data) {
        _this.showAnimationControls(data);
        return _this.show('vcr');
      };
    })(this));
  }

  BottomUiElements.prototype.showAnimationControls = function(svgAnimation) {
    return this.vcrControls.activate(svgAnimation, (function(_this) {
      return function() {
        _this.show('progress-map');
        return PubSub.publish('slides.next-slide');
      };
    })(this));
  };

  BottomUiElements.prototype.show = function(clss) {
    this.$node.children().addClass('hidden');
    return $("." + clss, this.$node).removeClass('hidden');
  };

  BottomUiElements.prototype.destroy = function() {
    if (this.progressMap != null) {
      return this.progressMap.destroy();
    }
  };

  return BottomUiElements;

})();

},{"chrome/progress-map":4,"chrome/vcr-controls":6}],3:[function(require,module,exports){
var BottomUiElements, ChromeUI, Top;

BottomUiElements = require('chrome/bottom-ui-elements');

Top = require('chrome/top');

module.exports = ChromeUI = (function() {
  function ChromeUI($el) {
    var token1, token2;
    this.$el = $el;
    token1 = PubSub.subscribe("chrome.hide", (function(_this) {
      return function(m, data) {
        return _this.hide();
      };
    })(this));
    token2 = PubSub.subscribe("chrome.show", (function(_this) {
      return function(m, data) {
        return _this.show();
      };
    })(this));
    this.tokens = [token1, token2];
  }

  ChromeUI.prototype.build = function() {
    this.bottomUiElements = new BottomUiElements(this.$el);
    this.top = new Top(this.$el);
    return shadowIconsInstance.svgReplaceWithString(pxSvgIconString, this.$el);
  };

  ChromeUI.prototype.hide = function() {
    return this.$el.addClass("hidden");
  };

  ChromeUI.prototype.show = function() {
    return this.$el.removeClass("hidden");
  };

  ChromeUI.prototype.destroy = function() {
    var i, len, ref, results, token;
    this.bottomUiElements.destroy();
    this.top.destroy();
    ref = this.tokens;
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      token = ref[i];
      results.push(PubSub.unsubscribe(token));
    }
    return results;
  };

  return ChromeUI;

})();

},{"chrome/bottom-ui-elements":2,"chrome/top":5}],4:[function(require,module,exports){
var ProgressMap;

module.exports = ProgressMap = (function() {
  function ProgressMap($el1) {
    var token1, token2, token3, token4, token5;
    this.$el = $el1;
    token1 = PubSub.subscribe('episode.loaded', (function(_this) {
      return function(m, data) {
        return _this.buildMap(data);
      };
    })(this));
    token2 = PubSub.subscribe('chapter.started', (function(_this) {
      return function(m, data) {
        return _this.lightIcon(data);
      };
    })(this));
    token3 = PubSub.subscribe('slide.activated', (function(_this) {
      return function(m, data) {
        return _this.lightIcon(data);
      };
    })(this));
    token4 = PubSub.subscribe('quiz.activated', (function(_this) {
      return function(m, data) {
        return _this.lightIcon(data);
      };
    })(this));
    token5 = PubSub.subscribe('duties.activated', (function(_this) {
      return function(m, data) {
        return _this.lightIcon(data);
      };
    })(this));
    this.tokens = [token1, token2, token3, token4, token5];
  }

  ProgressMap.prototype.lightIcon = function(title) {
    var $el;
    $el = $("#" + (this.titleToId(title)), this.$node);
    $el.addClass("viewed");
    $el.prevAll().addClass("viewed");
    return $el.nextAll().removeClass("viewed");
  };

  ProgressMap.prototype.buildMap = function(data) {
    var $milestone, mapData;
    mapData = this.parseEpisodeData(data);
    this.addIconData(mapData);
    this.$node = $(jadeTemplate['chrome-ui/progress-map']({
      milestones: mapData
    }));
    this.$el.append(this.$node);
    shadowIconsInstance.svgReplaceWithString(pxSvgIconString, this.$node);
    $milestone = $(".milestone", this.$node);
    if (aristotle.sudo) {
      $milestone.on("click", (function(_this) {
        return function(e) {
          return _this.onMileStoneClick($(e.currentTarget));
        };
      })(this));
    } else {
      $(".chapter", this.$node).on("click", (function(_this) {
        return function(e) {
          return _this.onChapterClick($(e.currentTarget));
        };
      })(this));
    }
    $milestone.on("mouseover", (function(_this) {
      return function(e) {
        return _this.onMileStoneOver($(e.currentTarget));
      };
    })(this));
    return $milestone.on("mouseout", (function(_this) {
      return function(e) {
        return _this.onMileStoneOut($(e.currentTarget));
      };
    })(this));
  };

  ProgressMap.prototype.parseEpisodeData = function(data) {
    var chapter, i, item, items, j, len, len1, ref, ref1, slide;
    items = [];
    ref = data.chapters;
    for (i = 0, len = ref.length; i < len; i++) {
      chapter = ref[i];
      items.push({
        kind: "chapter",
        chapter: chapter.title,
        title: "" + chapter.title,
        txt: chapter.title + " - " + chapter.subtitle,
        id: this.titleToId(chapter.title)
      });
      ref1 = chapter.slides;
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        slide = ref1[j];
        item = this.getItem(slide, chapter.title);
        if (slide.title != null) {
          if (item == null) {
            item = {
              kind: "slide"
            };
          }
          item.title = slide.title;
          item.txt = slide.title;
          item.chapter = chapter.title;
        }
        if (item != null) {
          item.id = this.titleToId(item.title);
          items.push(item);
        }
      }
    }
    return items;
  };

  ProgressMap.prototype.addIconData = function(mapItems) {
    var i, item, len, results;
    results = [];
    for (i = 0, len = mapItems.length; i < len; i++) {
      item = mapItems[i];
      switch (item.kind) {
        case "chapter":
          results.push(item.icon = "chapter-progress-chapter");
          break;
        case "slide":
          results.push(item.icon = "chapter-progress-slide");
          break;
        case "quiz":
          results.push(item.icon = "chapter-progress-quiz");
          break;
        case "duties":
          results.push(item.icon = "chapter-progress-duties");
          break;
        default:
          results.push(void 0);
      }
    }
    return results;
  };

  ProgressMap.prototype.titleToId = function(title) {
    title = title.replace(/\s/g, '_');
    title = title.replace(/([\!\?\'])/g, '');
    return title.toLowerCase();
  };

  ProgressMap.prototype.getItem = function(slide, chapter) {
    var component, i, len, ref;
    if (slide.ux == null) {
      return null;
    }
    if (slide.ux.components == null) {
      return null;
    }
    ref = slide.ux.components;
    for (i = 0, len = ref.length; i < len; i++) {
      component = ref[i];
      if (component.kind === "quiz") {
        return {
          kind: "quiz",
          title: "quiz",
          txt: "Quiz",
          chapter: chapter
        };
      } else if (component.kind === "duties") {
        return {
          kind: "duties",
          title: "Duty Review",
          txt: "Duty Review",
          chapter: chapter
        };
      }
    }
    return null;
  };

  ProgressMap.prototype.onChapterClick = function($el) {
    if (!$el.hasClass("viewed")) {
      return;
    }
    return PubSub.publish('episode.goto', {
      slide: $el.attr("data-title"),
      chapter: $el.attr("data-chapter")
    });
  };

  ProgressMap.prototype.onMileStoneClick = function($el) {
    return PubSub.publish('episode.goto', {
      slide: $el.attr("data-title"),
      chapter: $el.attr("data-chapter")
    });
  };

  ProgressMap.prototype.onMileStoneOver = function($el) {
    if (!$el.hasClass("viewed")) {
      return;
    }
    return PubSub.publish('label.attach', {
      el: $el,
      content: {
        title: $el.attr("data-txt")
      }
    });
  };

  ProgressMap.prototype.onMileStoneOut = function($el) {
    return PubSub.publish('label.destroy', $el);
  };

  ProgressMap.prototype.destroy = function() {
    var i, len, ref, results, token;
    ref = this.tokens;
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      token = ref[i];
      results.push(PubSub.unsubscribe(token));
    }
    return results;
  };

  return ProgressMap;

})();

},{}],5:[function(require,module,exports){
var Top;

module.exports = Top = (function() {
  function Top($el1) {
    var token2, token3, token4, token5, token6, token7;
    this.$el = $el1;
    token2 = PubSub.subscribe("callsign.selected", (function(_this) {
      return function(m, data) {
        return _this.updateCallsign(data);
      };
    })(this));
    token3 = PubSub.subscribe("chrome.showname", (function(_this) {
      return function(m, data) {
        return _this.showName();
      };
    })(this));
    token4 = PubSub.subscribe("chrome.showepisodes", (function(_this) {
      return function(m, data) {
        return _this.showIcons();
      };
    })(this));
    token5 = PubSub.subscribe("chrome.hidename", (function(_this) {
      return function(m, data) {
        return _this.hideName();
      };
    })(this));
    token6 = PubSub.subscribe("chrome.hideepisodes", (function(_this) {
      return function(m, data) {
        return _this.hideIcons();
      };
    })(this));
    token7 = PubSub.subscribe("meta.chapter.start", (function(_this) {
      return function(m, data) {
        return _this.setTitle(aristotle.episode.trainingData.subtitle, data.subtitle);
      };
    })(this));
    this.tokens = [token2, token3, token4, token5, token6, token7];
    this.build();
  }

  Top.prototype.build = function() {
    var callsign, data, episodeNum, name, ref;
    name = aristotle.localStorageProxy.user.split(",");
    ref = this.getVars(), callsign = ref[0], episodeNum = ref[1];
    data = {
      name: name[1] + " \"" + callsign + "\" " + name[0],
      episode: episodeNum
    };
    this.getRank(data, episodeNum);
    this.$top = $(jadeTemplate['chrome-ui/top'](data));
    this.$el.append(this.$top);
    this.$name = $(".name-and-rank", this.$top);
    this.$icons = $(".episodes", this.$top);
    this.$mode = $(".learn-mode", this.$top);
    this.hideMode();
    $(".badge", this.$top).on("mouseover", (function(_this) {
      return function(e) {
        return _this.badgeMouseover(e);
      };
    })(this));
    return $(".badge", this.$top).on("mouseout", (function(_this) {
      return function(e) {
        return _this.badgeMouseout(e);
      };
    })(this));
  };

  Top.prototype.updateCallsign = function(callSign) {
    var name;
    name = aristotle.localStorageProxy.user.split(",");
    return $(".name", this.$top).html(name[1] + " \"" + callSign + "\" " + name[0]);
  };

  Top.prototype.setTitle = function(episodeTitle, chapterTitle) {
    $("h1", this.$mode).text(episodeTitle);
    $("h2", this.$mode).text(chapterTitle);
    return this.showMode();
  };

  Top.prototype.showName = function() {
    return this.$name.css({
      display: "flex",
      opacity: 0
    }).velocity({
      opacity: 1
    }, {
      duration: 500
    });
  };

  Top.prototype.hideName = function() {
    return this.$name.css({
      display: "none"
    });
  };

  Top.prototype.showIcons = function() {
    return this.$icons.css({
      display: "flex",
      opacity: 0
    }).velocity({
      opacity: 1
    }, {
      duration: 500
    });
  };

  Top.prototype.hideIcons = function() {
    return this.$icons.css({
      display: "none"
    });
  };

  Top.prototype.hideMode = function() {
    return this.$mode.addClass("hidden");
  };

  Top.prototype.showMode = function() {
    return this.$mode.removeClass("hidden");
  };

  Top.prototype.badgeMouseover = function(e) {
    var $el, configData, episodeNum;
    $el = $(e.currentTarget);
    episodeNum = $el.attr('data-episode');
    configData = {
      title: "Episode " + episodeNum,
      text: this.getEpisodeTagline(episodeNum),
      cssClass: "arrow-top inline"
    };
    return PubSub.publish('label.attach', {
      el: $el,
      content: configData
    });
  };

  Top.prototype.badgeMouseout = function(e) {
    return PubSub.publish('label.destroy', $(e.currentTarget));
  };

  Top.prototype.getRank = function(data, episodeNum) {
    data.episode = episodeNum;
    switch (episodeNum) {
      case 0:
        data.rank = "Recruit";
        return data.badge = "rank-badge-recruit";
      case 1:
        data.rank = "cadet";
        return data.badge = "rank-badge-cadet";
      case 2:
        data.rank = "Cadet First Class";
        return data.badge = "rank-badge-cadet-first-class";
      case 3:
        data.rank = "Technical Cadet";
        return data.badge = "rank-badge-technical-cadet";
      case 4:
        data.rank = "Cyber Cadet";
        return data.badge = "rank-badge-cyber-cadet";
      case 5:
        data.rank = "Master Cadet";
        return data.badge = "rank-badge-master-cadet";
    }
  };

  Top.prototype.getEpisodeTagline = function(episodeNum) {
    switch (episodeNum) {
      case "1":
        return "Organizing Our Forces";
      case "2":
        return "Perimeter Defenses";
      case "3":
        return "Asset Defenses";
      case "4":
        return "Manning the Defenses";
      case "5":
        return "Fighting the War";
    }
  };

  Top.prototype.destroy = function() {
    var i, len, ref, results, token;
    ref = this.tokens;
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      token = ref[i];
      results.push(PubSub.unsubscribe(token));
    }
    return results;
  };

  Top.prototype.getVars = function() {
    var callsign, episode, error, error1;
    try {
      callsign = aristotle.globals.get('callSign', false);
    } catch (error1) {
      error = error1;
      callsign = "Deadeye";
    }
    episode = Number(aristotle.episodeNum);
    return [callsign, episode];
  };

  return Top;

})();

},{}],6:[function(require,module,exports){
var VCRControls;

module.exports = VCRControls = (function() {
  function VCRControls($el) {
    var $node;
    $node = $(jadeTemplate['chrome-ui/vcr']({}));
    $el.append($node);
    this.$playhead = $('.playhead', $node);
    this.$attic = $('.attic', $node);
    this.$pauseAndPlayBtn = $('.pause-and-play', $node);
    this.$pauseAndPlayBtn.on('click', (function(_this) {
      return function() {
        return _this.controlBtnClick();
      };
    })(this));
    $("#ani-replay", $node).on('click', (function(_this) {
      return function() {
        return _this.replayClick();
      };
    })(this));
    $("#ani-continue", $node).on('click', (function(_this) {
      return function() {
        return _this.continueClick();
      };
    })(this));
    PubSub.subscribe('vcr.play', (function(_this) {
      return function(m, data) {
        return _this.play();
      };
    })(this));
    PubSub.subscribe('vcr.pause', (function(_this) {
      return function(m, data) {
        return _this.pause();
      };
    })(this));
    PubSub.subscribe('vcr.replay', (function(_this) {
      return function(m, data) {
        return _this.replay();
      };
    })(this));
  }

  VCRControls.prototype.play = function() {
    this.$pauseAndPlayBtn.removeClass('paused');
    return this.animation.play();
  };

  VCRControls.prototype.pause = function() {
    this.$pauseAndPlayBtn.addClass('paused');
    return this.animation.pause();
  };

  VCRControls.prototype.replay = function() {
    this.$attic.addClass('hidden');
    this.$pauseAndPlayBtn.removeClass('complete');
    this.animation.animation.goToAndStop(0);
    return this.animation.animation.play();
  };

  VCRControls.prototype.activate = function(svgAnimation, completeCb) {
    var complete, enterFrame;
    this.completeCb = completeCb;
    this.reset();
    this.animation = svgAnimation;
    enterFrame = this.animation.animation.addEventListener('enterFrame', (function(_this) {
      return function() {
        var perc;
        perc = _this.animation.animation.currentFrame / _this.animation.animation.totalFrames;
        return _this.$playhead.css({
          width: (Math.round(perc * 100)) + "%"
        });
      };
    })(this));
    complete = this.animation.animation.addEventListener('complete', (function(_this) {
      return function() {
        _this.isComplete = true;
        _this.$attic.removeClass('hidden');
        return _this.$pauseAndPlayBtn.addClass('complete');
      };
    })(this));
    this.animation.trackEventHandler(enterFrame, 'enterFrame');
    return this.animation.trackEventHandler(complete, 'complete');
  };

  VCRControls.prototype.reset = function() {
    this.isPaused = false;
    this.isComplete = false;
    this.$attic.addClass('hidden');
    this.$pauseAndPlayBtn.removeClass('paused');
    return this.$pauseAndPlayBtn.removeClass('complete');
  };

  VCRControls.prototype.controlBtnClick = function(e) {
    if (this.isComplete) {
      return this.replayClick();
    } else if (this.isPaused) {
      this.isPaused = false;
      return PubSub.publish('vcr.play');
    } else {
      this.isPaused = true;
      return PubSub.publish('vcr.pause');
    }
  };

  VCRControls.prototype.replayClick = function() {
    this.isComplete = false;
    return PubSub.publish('vcr.replay');
  };

  VCRControls.prototype.continueClick = function() {
    return this.completeCb();
  };

  return VCRControls;

})();

},{}],7:[function(require,module,exports){
var AudioTrack;

module.exports = AudioTrack = (function() {
  AudioTrack.count = 0;

  function AudioTrack(src) {
    var error, error1;
    this.src = src;
    this.id = AudioTrack.count++;
    this.eventHandlers = [];
    try {
      this.src = parse(this.src);
      AudioTrack.initSoundSettings();
      this.sound = createjs.Sound.createInstance(this.src);
    } catch (error1) {
      error = error1;
      appInsights.trackException("Audio Track - Issue parsing the `@src` variable, was set to `" + this.src + "`");
      return false;
    }
  }

  AudioTrack.prototype.play = function(config, onComplete) {
    if (config == null) {
      config = {};
    }
    this.onComplete = onComplete;
    this.parseConfig(config);
    if (this.onComplete != null) {
      this.addOnComplete();
    }
    return this.sound.play(config);
  };

  AudioTrack.prototype.addOnComplete = function() {
    var handle;
    handle = this.sound.addEventListener("complete", (function(_this) {
      return function() {
        return _this.onComplete();
      };
    })(this));
    return this.trackEventHandler('complete', handle);
  };

  AudioTrack.prototype.stop = function() {
    return this.sound.stop();
  };

  AudioTrack.prototype.destroy = function() {
    this.destroyEvents();
    this.isDead = true;
    this.sound.removeAllEventListeners();
    this.sound.stop();
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

  AudioTrack.prototype.parseConfig = function(config) {
    if (config.loop != null) {
      if (config.loop === true && typeof config.loop !== "number") {
        config.loop = -1;
      }
    }
    return config.pan = 1;
  };

  AudioTrack.prototype.fade = function(fadeDurationMs, direction, doDestroy) {
    var fadeInterval, incrament, seconds, sound, tickCounter, tickDuration, ticks, ticksPerSecond;
    if (direction == null) {
      direction = 1;
    }
    if (doDestroy == null) {
      doDestroy = false;
    }
    seconds = fadeDurationMs / 1000;
    ticksPerSecond = 20;
    ticks = seconds * ticksPerSecond;
    tickDuration = fadeDurationMs / ticks;
    if (direction === 1) {
      incrament = (1 - this.sound.volume) / ticks;
    } else {
      incrament = this.sound.volume / ticks * -1;
    }
    sound = this.sound;
    tickCounter = 0;
    return fadeInterval = setInterval((function(_this) {
      return function() {
        sound.volume += incrament;
        if (++tickCounter === ticks) {
          clearInterval(fadeInterval);
          if (doDestroy) {
            return _this.destroy();
          }
        }
      };
    })(this), tickDuration);
  };

  AudioTrack.prototype.fadeOut = function(fadeDurationMs, doDestroy) {
    if (doDestroy == null) {
      doDestroy = false;
    }
    if (this.isDead) {
      return;
    }
    return this.fade(fadeDurationMs, -1, doDestroy);
  };

  AudioTrack.prototype.fadeIn = function(fadeDurationMs, doDestroy) {
    if (doDestroy == null) {
      doDestroy = false;
    }
    if (this.isDead) {
      return;
    }
    return this.fade(fadeDurationMs, 1, doDestroy);
  };

  AudioTrack.prototype.trackEventHandler = function(event, handler) {
    return this.eventHandlers.push({
      event: event,
      handler: handler
    });
  };

  AudioTrack.prototype.destroyEvents = function() {
    var evnt, i, len, ref, results;
    ref = this.eventHandlers;
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      evnt = ref[i];
      results.push(this.sound.removeEventListener(evnt.event, evnt.handler));
    }
    return results;
  };

  return AudioTrack;

})();

},{}],8:[function(require,module,exports){
var AssetPreloader, ChapterHeading,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

AssetPreloader = require('misc/asset-preloader');

module.exports = ChapterHeading = (function() {
  function ChapterHeading(data, loadComplete) {
    this.loadComplete = loadComplete;
    this.complete = bind(this.complete, this);
    this.update = bind(this.update, this);
    this.$el = $('body');
    this.$node = $(jadeTemplate['misc/chapter-heading']({
      title: data.title,
      subtitle: data.subtitle
    }));
    this.$el.append(this.$node);
    this.$fg = $(".fg", this.$node);
    shadowIconsInstance.svgReplaceWithString(pxSvgIconString, this.$node);
    this.preload(data);
  }

  ChapterHeading.prototype.preload = function(data) {
    var preloader;
    return preloader = new AssetPreloader(data, this.complete, this.update);
  };

  ChapterHeading.prototype.update = function(perc) {
    if (perc > 1) {
      perc = 1;
    }
    return this.$fg.css({
      width: (Math.round(perc * 100)) + "%"
    });
  };

  ChapterHeading.prototype.complete = function() {
    this.$node.addClass('complete');
    this.destroy();
    return this.loadComplete();
  };

  ChapterHeading.prototype.destroy = function() {
    return this.$node.velocity({
      opacity: 0
    }, {
      delay: 300,
      duration: 400,
      complete: (function(_this) {
        return function() {
          return _this.$node.remove();
        };
      })(this)
    });
  };

  return ChapterHeading;

})();

},{"misc/asset-preloader":16}],9:[function(require,module,exports){
var Chapter, ChapterHeading, Slides,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Slides = require('episode/slides');

ChapterHeading = require('episode/chapter-heading');

module.exports = Chapter = (function() {
  function Chapter(chapterData, movie, ux, onChapterCompete) {
    this.chapterData = chapterData;
    this.movie = movie;
    this.ux = ux;
    this.onChapterCompete = onChapterCompete;
    this.onSlidesComplete = bind(this.onSlidesComplete, this);
    this.startSlides = bind(this.startSlides, this);
    this.title = this.chapterData.title;
  }

  Chapter.prototype.preload = function(cb) {
    var chapterHeading;
    aristotle.devTools.go(this.chapterData.dev, this.chapterData.slides);
    return chapterHeading = new ChapterHeading(this.chapterData, cb);
  };

  Chapter.prototype.start = function(firstSlideTitle) {
    this.firstSlideTitle = firstSlideTitle;
    log("--------------- " + this.chapterData.title);
    PubSub.publish('meta.chapter.start', this.chapterData);
    return this.startSlides();
  };

  Chapter.prototype.startSlides = function() {
    this.slides = new Slides(this.chapterData, this.movie, this.ux, this.onSlidesComplete);
    if (this.firstSlideTitle != null) {
      return this.slides.gotoSlideByTitle(this.firstSlideTitle);
    } else {
      return this.slides.start();
    }
  };

  Chapter.prototype.destroy = function() {
    if (this.slides != null) {
      this.slides.destroy();
      return this.slides = null;
    }
  };

  Chapter.prototype.onSlidesComplete = function() {
    PubSub.publish('meta.chapter.finish', this.chapterData);
    return this.onChapterCompete();
  };

  return Chapter;

})();

},{"episode/chapter-heading":8,"episode/slides":12}],10:[function(require,module,exports){
var AssetPreloader, Chapter, Episode, Sequence,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Chapter = require('episode/chapter');

Sequence = require('misc/Sequence');

AssetPreloader = require('misc/asset-preloader');

module.exports = Episode = (function() {
  function Episode(trainingData1, movie, ux, chrome) {
    this.trainingData = trainingData1;
    this.movie = movie;
    this.ux = ux;
    this.chrome = chrome;
    this.chapterGo = bind(this.chapterGo, this);
    this.playChapter = bind(this.playChapter, this);
    this.nextChapter = bind(this.nextChapter, this);
    this.chapterComplete = bind(this.chapterComplete, this);
    this.begin = bind(this.begin, this);
    if (aristotle.globals.get("episode" + aristotle.episodeNum + "_choices", false) == null) {
      aristotle.globals.set("episode" + aristotle.episodeNum + "_choices", []);
    }
    aristotle.episode = this;
    this.episodeNum = this.trainingData.episode;
    this.isLastEpisode = this.trainingData.isLastEpisode;
    aristotle.episodeData = this.trainingData;
    aristotle.labels = this.trainingData.labels;
    this.nextRankId = this.trainingData.nextRankId;
    this.chrome.build();
    new AssetPreloader(this.trainingData.action, this.begin);
  }

  Episode.prototype.begin = function() {
    aristotle.devTools.go(this.trainingData.dev, this.trainingData.chapters);
    PubSub.publish("episode.loaded", this.trainingData);
    this.createChapters(this.trainingData);
    if (this.trainingData.skipSlate) {
      this.playChapter();
    } else {
      this.showIntro(this.trainingData);
    }
    if (this.trainingData.action != null) {
      return aristotle.commander["do"](this.trainingData.action);
    }
  };

  Episode.prototype.showIntro = function(data) {
    var me;
    me = this;
    if (aristotle.devTools.skipSlate) {
      this.checkPrevLocationAndBegin(data);
      return;
    }
    this.ux.populate({
      components: [
        {
          kind: "episode-intro",
          config: {
            title: data.title,
            subtitle: data.subtitle,
            episode: data.episode
          }
        }
      ]
    });
    return setTimeout(function() {
      me.ux.removeCurrentComponents();
      return me.checkPrevLocationAndBegin(data);
    }, 2000);
  };

  Episode.prototype.checkPrevLocationAndBegin = function(data) {
    if (aristotle.localStorageProxy.store != null) {
      if (aristotle.localStorageProxy.store.location != null) {
        if (aristotle.localStorageProxy.store.location.episodeNum === this.episodeNum) {
          if (aristotle.localStorageProxy.store.location.slide != null) {
            aristotle.localStorageProxy.rehydrate();
            return;
          }
        }
      }
    }
    return this.playChapter();
  };

  Episode.prototype.gotoLocationByTitle = function(title, chapTitle) {
    var breakLoop1, chapter, chapterTitle, i, j, k, key, layer, layers, layersAr, len, len1, len2, ref, ref1, ref2, ref3, slide, slideTitle;
    PubSub.publish('movie.layers.clear-all');
    layers = {};
    ref = aristotle.episodeData.chapters;
    for (i = 0, len = ref.length; i < len; i++) {
      chapter = ref[i];
      chapterTitle = chapter.title;
      if (chapter.title === title) {
        break;
      }
      ref1 = chapter.slides;
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        slide = ref1[j];
        if (slide.title === title && chapterTitle === chapTitle) {
          slideTitle = slide.title;
          breakLoop1 = true;
          break;
        }
        if (((ref2 = slide.movie) != null ? ref2.layers : void 0) != null) {
          ref3 = slide.movie.layers;
          for (k = 0, len2 = ref3.length; k < len2; k++) {
            layer = ref3[k];
            layers[layer.depth] = layer;
          }
        }
      }
      if (breakLoop1) {
        break;
      }
    }
    layersAr = [];
    for (key in layers) {
      layer = layers[key];
      layersAr.push(layer);
    }
    this.chapters.activateItemByParam('title', chapterTitle);
    if (slideTitle != null) {
      this.playChapter(slide.title);
    } else {
      this.playChapter();
    }
    if (layersAr.length > 0) {
      return PubSub.publish('movie.set-dried-layers', layersAr);
    }
  };

  Episode.prototype.createChapters = function(trainingData) {
    var chapterData, chapters, i, len, ref;
    chapters = [];
    ref = trainingData.chapters;
    for (i = 0, len = ref.length; i < len; i++) {
      chapterData = ref[i];
      chapters.push(new Chapter(chapterData, this.movie, this.ux, this.chapterComplete));
    }
    return this.chapters = new Sequence(chapters);
  };

  Episode.prototype.start = function() {
    return this.playChapter();
  };

  Episode.prototype.chapterComplete = function() {
    return this.refreshChapter();
  };

  Episode.prototype.refreshChapter = function() {
    if (this.chapters.isAtLastItem()) {
      return this.episodeComplete();
    } else {
      this.chapters.next();
      return PubSub.publish("refresh.on.chapter", this.chapters.getCurrentItem().title);
    }
  };

  Episode.prototype.nextChapter = function() {
    if (this.chapters.isAtLastItem()) {
      return this.episodeComplete();
    } else {
      this.chapters.next();
      return this.playChapter();
    }
  };

  Episode.prototype.playChapter = function(firstSlide) {
    this.firstSlide = firstSlide != null ? firstSlide : null;
    return this.chapters.getCurrentItem().preload(this.chapterGo);
  };

  Episode.prototype.chapterGo = function() {
    PubSub.publish('movie.rehydrate-layers');
    PubSub.publish('chapter.started', this.chapters.getCurrentItem().chapterData.title);
    return this.chapters.getCurrentItem().start(this.firstSlide);
  };

  Episode.prototype.episodeComplete = function() {
    var newEpisodeNum;
    if (this.isLastEpisode) {
      return aristotle.localStorageProxy.completeCourse();
    } else {
      newEpisodeNum = String(Number(aristotle.episodeNum) + 1);
      return aristotle.localStorageProxy.refreshOnEpisode(newEpisodeNum);
    }
  };

  Episode.prototype.destroy = function() {
    var chapter, i, len, ref, results;
    ref = this.chapters.items;
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      chapter = ref[i];
      results.push(chapter.destroy());
    }
    return results;
  };

  return Episode;

})();

},{"episode/chapter":9,"misc/Sequence":13,"misc/asset-preloader":16}],11:[function(require,module,exports){
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
    this.title = this.slideData.title;
  }

  Slide.prototype.play = function(onComplete) {
    PubSub.publish('logger.print', {
      str: "SLIDE " + this.slideData.index,
      clearPrevious: false
    });
    if (this.slideData.title != null) {
      PubSub.publish('slide.activated', this.slideData.title);
    }
    this.movie.populate(this.slideData.movie);
    this.slideUX.populate(this.slideData.ux);
    this.setDuration();
    this.runCtanlee(this.slideData.ctanlee);
    this.runDialogue(this.slideData.dialogue);
    this.runActions(this.slideData.action);
    return this.runSoundFx(this.slideData.sfx);
  };

  Slide.prototype.runSoundFx = function(sfx) {
    if (sfx == null) {
      return;
    }
    return PubSub.publish('sfx.add', sfx);
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
        return aristotle.timeout(this.onSlideComplete, this.slideData.duration.seconds * 1000);
      case "user":
        return console.log("waiting on the user");
      case "ux":
        return uxSubscription = PubSub.subscribe('ux.complete', (function(_this) {
          return function() {
            PubSub.unsubscribe(uxSubscription);
            return _this.onSlideComplete();
          };
        })(this));
      case "dialogue":
      case "ctanlee":
        return ctanleeSubscription = PubSub.subscribe('dialogue.complete', (function(_this) {
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

  Slide.prototype.runDialogue = function(data) {
    if (data != null) {
      return aristotle.dialogue.activate(data);
    }
  };

  Slide.prototype.destroy = function() {
    return PubSub.unsubscribe(this.token1);
  };

  return Slide;

})();

},{"episode/audio-track":7,"movie/svg-animation":37}],12:[function(require,module,exports){
var Sequence, Slide, Slides,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Slide = require('episode/slide');

Sequence = require('misc/sequence');

module.exports = Slides = (function() {
  function Slides(trainingData, movie, ux, onShowComplete) {
    var token1, token2, token3, token4, token7;
    this.onShowComplete = onShowComplete;
    this.slideComplete = bind(this.slideComplete, this);
    this.nextSlide = bind(this.nextSlide, this);
    aristotle.slides = this;
    this.createSlides(trainingData, movie, ux);
    token1 = PubSub.subscribe('slides.next', (function(_this) {
      return function() {
        return _this.nextSlide();
      };
    })(this));
    token2 = PubSub.subscribe('slides.next-slide', (function(_this) {
      return function() {
        return _this.nextSlide();
      };
    })(this));
    token3 = PubSub.subscribe('slides.replay', (function(_this) {
      return function() {
        return _this.replay();
      };
    })(this));
    token4 = PubSub.subscribe('slides.prev-slide', (function(_this) {
      return function() {
        return _this.prevSlide();
      };
    })(this));
    token7 = PubSub.subscribe('movie.report', (function(_this) {
      return function() {
        return console.log(_this.getIndexAndTotal());
      };
    })(this));
    this.subscriptionTokens = [token1, token2, token3, token4, token7];
  }

  Slides.prototype.createSlides = function(trainingData, movie, ux) {
    var count, i, len, ref, slideData, slides;
    slides = [];
    count = 0;
    ref = trainingData.slides;
    for (i = 0, len = ref.length; i < len; i++) {
      slideData = ref[i];
      slideData.index = count++;
      slides.push(new Slide(movie, ux, slideData, this.slideComplete));
    }
    return this.slides = new Sequence(slides);
  };

  Slides.prototype.nextSlide = function() {
    PubSub.publishSync('dialogue.shh');
    if (this.slides.isAtLastItem()) {
      return this.slideShowComplete();
    } else {
      this.slides.next();
      return this.playSlide();
    }
  };

  Slides.prototype.replay = function() {
    return this.playSlide();
  };

  Slides.prototype.prevSlide = function() {
    this.slides.prev();
    return this.playSlide();
  };

  Slides.prototype.gotoSlide = function(data) {
    if (typeof data === Number) {
      return this.gotoSlideByIndex(data);
    } else {
      return this.gotoSlideById(data);
    }
  };

  Slides.prototype.gotoSlideByIndex = function(index) {
    this.slides.changeItemByIndex(index);
    return this.playSlide();
  };

  Slides.prototype.gotoSlideByTitle = function(title) {
    this.slides.activateItemByParam("title", title);
    return this.playSlide();
  };

  Slides.prototype.destroy = function() {
    var i, j, len, len1, ref, ref1, results, slide, token;
    ref = this.slides.items;
    for (i = 0, len = ref.length; i < len; i++) {
      slide = ref[i];
      slide.destroy();
    }
    this.slides = null;
    ref1 = this.subscriptionTokens;
    results = [];
    for (j = 0, len1 = ref1.length; j < len1; j++) {
      token = ref1[j];
      results.push(PubSub.unsubscribe(token));
    }
    return results;
  };

  Slides.prototype.start = function() {
    return this.playSlide();
  };

  Slides.prototype.slideComplete = function() {
    return this.nextSlide();
  };

  Slides.prototype.playSlide = function() {
    PubSub.publish('slides.changing');
    return this.slides.getCurrentItem().play(this.slideComplete);
  };

  Slides.prototype.slideShowComplete = function() {
    return this.onShowComplete();
  };

  Slides.prototype.getCurrentIndex = function() {
    return this.slides.getCurrentItem().slideData.index;
  };

  Slides.prototype.getIndexAndTotal = function() {
    return "slide " + (this.slides.getCurrentItem().slideData.index) + " of " + this.slides.totalItems;
  };

  return Slides;

})();

},{"episode/slide":11,"misc/sequence":29}],13:[function(require,module,exports){
var Sequence;

module.exports = Sequence = (function() {
  function Sequence(items) {
    this.items = items;
    this.reset();
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
    plusOrMinus = newIndex > this.currentItemIndex ? 1 : -1;
    incramentDifference = Math.abs(this.currentItemIndex - newIndex) * plusOrMinus;
    return this.incramentItemIndex(incramentDifference);
  };

  Sequence.prototype.activateItemByParam = function(param, val) {
    return this.currentItemIndex = this.getIndexByParam(param, val);
  };

  Sequence.prototype.getIndexByParam = function(param, val) {
    var i, item, j, len, ref;
    ref = this.items;
    for (i = j = 0, len = ref.length; j < len; i = ++j) {
      item = ref[i];
      if (item[param] === val) {
        return i;
      }
    }
    return null;
  };

  Sequence.prototype.getItemByParam = function(param, val) {
    return this.items[this.getIndexByParam(param, val)];
  };

  Sequence.prototype.reset = function() {
    return this.currentItemIndex = 0;
  };

  return Sequence;

})();

},{}],14:[function(require,module,exports){
var AnimationQuality;

module.exports = AnimationQuality = (function() {
  function AnimationQuality() {
    PubSub.subscribe('animations.go.low', (function(_this) {
      return function(m, data) {
        return _this.changeAnimationQuality('low');
      };
    })(this));
    PubSub.subscribe('animations.go.med', (function(_this) {
      return function(m, data) {
        return _this.changeAnimationQuality('med');
      };
    })(this));
    PubSub.subscribe('animations.go.high', (function(_this) {
      return function(m, data) {
        return _this.changeAnimationQuality('high');
      };
    })(this));
  }

  AnimationQuality.prototype.changeAnimationQuality = function(quality) {
    return bodymovin.setQuality(quality);
  };

  return AnimationQuality;

})();

},{}],15:[function(require,module,exports){
var APIproxy;

module.exports = APIproxy = (function() {
  function APIproxy() {
    window.apiProxy = this;
    PubSub.subscribe('meta.chapter.start', (function(_this) {
      return function(m, data) {
        return _this.startChapter(data);
      };
    })(this));
    PubSub.subscribe('meta.chapter.finish', (function(_this) {
      return function(m, data) {
        return _this.finishChapter(data);
      };
    })(this));
    PubSub.subscribe('meta.choice.start', (function(_this) {
      return function(m, data) {
        return _this.startChoice(data);
      };
    })(this));
    PubSub.subscribe('meta.choice.finish', (function(_this) {
      return function(m, data) {
        return _this.finishChoice(data);
      };
    })(this));
    PubSub.subscribe('meta.duties.start', (function(_this) {
      return function(m, data) {
        return _this.startDuties(data);
      };
    })(this));
    PubSub.subscribe('meta.duties.finish', (function(_this) {
      return function(m, data) {
        return _this.finishDuties(data);
      };
    })(this));
    PubSub.subscribe('meta.activity', (function(_this) {
      return function(m, data) {
        return _this.addActivity(data);
      };
    })(this));
    PubSub.subscribe('meta.quiz.start', (function(_this) {
      return function(m, data) {
        return _this.startQuiz(data);
      };
    })(this));
    PubSub.subscribe('meta.quiz.finish', (function(_this) {
      return function(m, data) {
        return _this.finishQuiz(data);
      };
    })(this));
    PubSub.subscribe('meta.quiz.question.start', (function(_this) {
      return function(m, data) {
        return _this.startQuizQuestion(data);
      };
    })(this));
    PubSub.subscribe('meta.quiz.question.answer', (function(_this) {
      return function(m, data) {
        return _this.addQuizActivity(data);
      };
    })(this));
    PubSub.subscribe('meta.quiz.question.finish', (function(_this) {
      return function(m, data) {
        return _this.finishQuizQuestion(data);
      };
    })(this));
  }

  APIproxy.prototype.startChapter = function(data) {
    appInsights.trackPageView("Episode" + aristotle.episodeNum + " : " + data.title);
    return this.chapter = {
      EpisodeTitle: "Episode " + aristotle.episodeNum,
      LearningStartTimeUtc: this.now(),
      picks: {},
      Choices: [],
      ChapterName: data.title,
      Activities: []
    };
  };

  APIproxy.prototype.finishChapter = function() {
    return this.submitData();
  };

  APIproxy.prototype.startChoice = function(data) {
    return this.chapter.picks[data.id] = {
      StartTimeUtc: this.now(),
      Activities: []
    };
  };

  APIproxy.prototype.finishChoice = function(data) {
    this.addPick(data);
    this.chapter.picks[data.id].EndTimeUtc = this.now();
    this.chapter.picks[data.id].Selection = data.choice;
    this.chapter.picks[data.id].ChoiceName = data.id;
    return this.chapter.Choices.push(this.chapter.picks[data.id]);
  };

  APIproxy.prototype.addActivity = function(data) {
    var activity;
    activity = {
      ActivityName: data.activity,
      EventTimeUtc: this.now()
    };
    if (data.id != null) {
      return this.chapter.picks[data.id].Activities.push(activity);
    } else {
      return this.chapter.Activities.push(activity);
    }
  };

  APIproxy.prototype.startDuties = function() {
    this.chapter.LearningEndTimeUtc = this.now();
    return this.chapter.DutyReviewStartTimeUtc = this.now();
  };

  APIproxy.prototype.finishDuties = function() {
    return this.chapter.DutyReviewEndTimeUtc = this.now();
  };

  APIproxy.prototype.startQuiz = function() {
    return this.chapter.quiz = {
      start: this.now(),
      questions: {},
      Scores: []
    };
  };

  APIproxy.prototype.finishQuiz = function() {
    return this.chapter.quiz.finish = this.now();
  };

  APIproxy.prototype.startQuizQuestion = function(data) {
    return this.chapter.quiz.questions[data.id] = {
      StartTimeUtc: this.now(),
      QuestionNumber: data.id,
      Activities: []
    };
  };

  APIproxy.prototype.addQuizActivity = function(data) {
    return this.chapter.quiz.questions[data.id].Activities.push({
      ActivityName: data.answer,
      EventTimeUtc: this.now()
    });
  };

  APIproxy.prototype.finishQuizQuestion = function(data) {
    this.chapter.quiz.questions[data.id].EndTimeUtc = this.now();
    this.chapter.quiz.questions[data.id].FinalScore = data.score;
    return this.chapter.quiz.Scores.push(this.chapter.quiz.questions[data.id]);
  };

  APIproxy.prototype.submitData = function() {
    var chapterData, data;
    chapterData = {
      EpisodeName: this.chapter.EpisodeTitle,
      ChapterName: this.chapter.ChapterName,
      LearningStartTimeUtc: this.chapter.LearningStartTimeUtc,
      LearningEndTimeUtc: this.chapter.LearningEndTimeUtc,
      DutyReviewStartTimeUtc: this.chapter.DutyReviewStartTimeUtc,
      DutyReviewEndTimeUtc: this.chapter.DutyReviewEndTimeUtc
    };
    if (this.chapter.Activities.length > 0) {
      chapterData.Activities = this.chapter.Activities;
    }
    if (this.chapter.Choices.length > 0) {
      chapterData.Choices = this.chapter.Choices;
    }
    if (this.chapter.quiz != null) {
      chapterData.Scores = this.chapter.quiz.Scores;
      chapterData.TestingStartTimeUtc = this.chapter.quiz.start;
      chapterData.TestingEndTimeUtc = this.chapter.quiz.finish;
    }
    data = {
      LearningContext: {
        ModuleId: aristotle.globals.get("moduleId"),
        ModuleAudience: aristotle.globals.get("moduleAudience"),
        SessionId: aristotle.globals.get("sessionKey"),
        StudentId: aristotle.localStorageProxy.userId,
        StudentName: aristotle.localStorageProxy.user,
        StudentCallsign: aristotle.globals.get("callSign")
      },
      Chapters: [chapterData]
    };
    return this.postData(JSON.stringify(data));
  };

  APIproxy.prototype.addPick = function(data) {
    var i, j, len, pick, picks;
    picks = aristotle.globals.get("episode" + aristotle.episodeNum + "_choices");
    for (i = j = 0, len = picks.length; j < len; i = ++j) {
      pick = picks[i];
      if (pick.id === data.id) {
        picks.splice(i, 1);
      }
    }
    return picks.push(data);
  };

  APIproxy.prototype.postData = function(jsonData) {
    var xhr;
    xhr = new XMLHttpRequest();
    xhr.open("POST", "https://cipdefenderapi.azurewebsites.net:443/api/Learning", true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    xhr.setRequestHeader('Authorization', "Basic " + (btoa(aristotle.globals.get('apikey') + ':')));
    xhr.addEventListener("load", (function(_this) {
      return function(e) {
        if (e.currentTarget.status > 299) {
          console.log("API responded with " + e.currentTarget.status + " when trying to get the choice %'s for the quiz section'");
          return console.log(e);
        } else {
          return console.log(e);
        }
      };
    })(this));
    xhr.addEventListener("error", (function(_this) {
      return function(e) {
        console.log("API Post failed");
        return console.log(e);
      };
    })(this));
    return xhr.send(jsonData);
  };

  APIproxy.prototype.now = function() {
    return new Date().toISOString();
  };

  APIproxy.prototype.metaData = function() {
    this.meta = aristotle.globals.getMetaData();
    if (typeof meta === "undefined" || meta === null) {
      this.meta = {
        chapters: []
      };
    }
    return this.meta;
  };

  APIproxy.prototype.getChoicePercentages = function(choices, cb) {
    var obj, xhr;
    xhr = new XMLHttpRequest();
    xhr.open("POST", "https://cipdefenderapi.azurewebsites.net/api/metrics/choices", true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    xhr.setRequestHeader('Authorization', "Basic " + (btoa(aristotle.globals.get('apikey') + ':')));
    xhr.addEventListener("load", (function(_this) {
      return function(e) {
        console.log(e);
        if (e.currentTarget.status > 299) {
          console.log("API responded with " + e.currentTarget.status + " when trying to get the choice %'s for the quiz section'");
          return cb({});
        } else {
          return cb(JSON.parse(e.currentTarget.response));
        }
      };
    })(this));
    xhr.addEventListener("error", (function(_this) {
      return function(e) {
        return console.log("Error when requesting choice %'s for quiz results");
      };
    })(this));
    obj = {
      MetricsContext: {
        ModuleId: aristotle.globals.get("moduleId")
      },
      ChoiceNames: choices
    };
    return xhr.send(JSON.stringify(obj));
  };

  APIproxy.prototype.test = function() {
    var obj, xhr;
    console.log(aristotle.globals.get("moduleId"));
    xhr = new XMLHttpRequest();
    xhr.open("POST", "https://cipdefenderapi.azurewebsites.net/api/metrics/choices", true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    xhr.setRequestHeader('Authorization', "Basic " + (btoa(aristotle.globals.get('apikey') + ':')));
    xhr.addEventListener("load", (function(_this) {
      return function(e) {
        if (e.currentTarget.status > 299) {
          console.log("API responded with " + e.currentTarget.status + " when trying to get the choice %'s for the quiz section'");
          return console.log(JSON.parse(e.currentTarget.response));
        } else {
          return console.log(e);
        }
      };
    })(this));
    xhr.addEventListener("error", (function(_this) {
      return function(e) {
        console.log("API Post failed");
        return console.log(e);
      };
    })(this));
    obj = {
      MetricsContext: {
        ModuleId: aristotle.globals.get("moduleId")
      },
      ChoiceNames: ["Access Control System", "The Burninator", "Card Guard XT"]
    };
    console.log(JSON.stringify(obj));
    return xhr.send(JSON.stringify(obj));
  };

  return APIproxy;

})();


/*
{"LearningContext":{"ModuleId":"MetaMythic.CipDefender.v1","ModuleAudience":"fake-module-audience","SessionId":"fake-session-id","StudentId":"abcdefg1234567","StudentName":"Ricks, Justin"},"Chapters":[{"EpisodeTitle":"Episode 1","ChapterName":"Chapter 1","LearningStartTimeUtc":1452557793466,"LearningEndTimeUtc":1452557808031,"DutyReviewStartTimeUtc":1452557808031,"DutyReviewEndTimeUtc":1452557811519,"Activities":[{"ActivityName":"Click : Asset Exploration - Filing Cabinets","EventTimeUtc":1452557803309},{"ActivityName":"Click : Asset Exploration - Mapboard","EventTimeUtc":1452557804086},{"ActivityName":"Click : Asset Exploration - Operator Monitors","EventTimeUtc":1452557805020}]}]}
  LearningRecord {
    LearningContext {
      ModuleId       : ""
      ModuleAudience : ""
      SessionId      : ""
      StudentId      : ""
      StudentName    : ""
    }
    Chapters : [ CHAPTER ]
  }

  Chapter {
    EpisodeTitle           : ""
    ChapterName            : ""
    LearningStartTimeUtc   : DATE  - Start of the chapter -> duties start
    LearningEndTimeUtc     : DATE
    DutyReviewStartTimeUtc : DATE
    DutyReviewEndTimeUtc   : DATE
    TestingStartTimeUtc    : DATE
    TestingEndTimeUtc      : DATE
    Activities             : [ACTIVITY]
    Choices                : [CHOICE]
    Scores                 : [SCORE]
  }

  Activity {
    ActivityName : ""
    EventTimeUtc : DATE
  }
  Choice {
    ChoiceName   : ""
    Selection    : ""
    StartTimeUtc : DATE
    EndTimeUtc   : DATE
    Activities   : [ACTIVITY]
  }
  Score {
    QuestionNumber : 1
    FinalScore     : 1
    StartTimeUtc   : DATE
    EndTimeUtc     : DATE
    Activities     : [ACTIVITY]
  }
 */

},{}],16:[function(require,module,exports){
var AssetPreloader;

module.exports = AssetPreloader = (function() {
  AssetPreloader.count = 0;

  function AssetPreloader(data, callback, progressCallback) {
    this.callback = callback;
    this.progressCallback = progressCallback;
    this.id = AssetPreloader.count++;
    if (data == null) {
      this.callback();
      return;
    }
    this.preloadAssets(data);
  }

  AssetPreloader.prototype.preloadAssets = function(data) {
    var assets, regex;
    assets = [];
    regex = /.+\.(svg)/;
    this.lookForFiles(data, assets, regex);
    if (assets.length === 0) {
      this.callback();
      return;
    }
    createjs.Sound.alternateExtensions = ["mp3", "m4a"];
    this.preloadQueue = new createjs.LoadQueue();
    this.preloadQueue.installPlugin(createjs.Sound);
    window.jax = this.preloadQueue;
    if (this.progressCallback != null) {
      this.progressHandler = this.preloadQueue.on("progress", (function(_this) {
        return function(e) {
          return _this.progressCallback(e.loaded);
        };
      })(this));
    }
    this.completeHandler = this.preloadQueue.on("complete", (function(_this) {
      return function() {
        if (_this.isComplete) {
          return;
        }
        _this.isComplete = true;
        _this.callback(data);
        _this.preloadQueue.removeEventListener(_this.progressHandler);
        return _this.preloadQueue.removeEventListener(_this.completeHandler);
      };
    })(this));
    assets = this.removeDuplicates(assets);
    assets = this.orderFilesForLoad(assets);
    return this.preloadQueue.loadManifest(assets);
  };

  AssetPreloader.prototype.lookForFiles = function(item, storage, regex) {
    var child, i, key, len, results, results1, type;
    type = typeof item;
    if (type === "string") {
      if (/.mp3|.m4a|.json/.test(item)) {
        return storage.push({
          src: aristotle.getAssetPath(item),
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

  AssetPreloader.prototype.orderFilesForLoad = function(ar) {
    var i, item, json, len, mp3s, other;
    mp3s = [];
    json = [];
    other = [];
    for (i = 0, len = ar.length; i < len; i++) {
      item = ar[i];
      if (/.mp3|.m4a/.test(item.id)) {
        mp3s.push(item);
      } else if (/.json/.test(item.id)) {
        json.push(item);
      } else {
        other.push(item);
      }
    }
    return mp3s.concat(other, json);
  };

  AssetPreloader.prototype.removeDuplicates = function(ar) {
    var i, item, items, len, newArray;
    items = {};
    newArray = [];
    for (i = 0, len = ar.length; i < len; i++) {
      item = ar[i];
      if (items[item.id] == null) {
        items[item.id] = "";
        newArray.push(item);
      }
    }
    return newArray;
  };

  return AssetPreloader;

})();

},{}],17:[function(require,module,exports){
module.exports = function() {
  var edge, msie, rv, trident, ua, v;
  ua = window.navigator.userAgent;
  msie = ua.indexOf('MSIE ');
  if (msie > 0) {
    return true;
    v = parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
  }
  trident = ua.indexOf('Trident/');
  if (trident > 0) {
    return true;
    rv = ua.indexOf('rv:');
    v = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
  }
  edge = ua.indexOf('Edge/');
  if (edge > 0) {
    return true;
    v = parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
  }
  return false;
};

},{}],18:[function(require,module,exports){
var Commander;

module.exports = Commander = (function() {
  function Commander() {
    window.aristotle.commander = this;
  }

  Commander.prototype["do"] = function(action, publishSynchronously) {
    var i, item, len, results;
    if (publishSynchronously == null) {
      publishSynchronously = false;
    }
    if (Array.isArray(action)) {
      results = [];
      for (i = 0, len = action.length; i < len; i++) {
        item = action[i];
        results.push(this.publish(item, publishSynchronously));
      }
      return results;
    } else {
      return this.publish(action, publishSynchronously);
    }
  };

  Commander.prototype.publish = function(action, publishSynchronously) {
    if (publishSynchronously == null) {
      publishSynchronously = false;
    }
    if ((action != null ? action.delay : void 0) != null) {
      this.publishDelayedAction(action);
      return;
    }
    if (publishSynchronously) {
      return PubSub.publishSync(action.cmd, action.data);
    } else {
      return PubSub.publish(action.cmd, action.data);
    }
  };

  Commander.prototype.publishDelayedAction = function(action) {
    return aristotle.timeout(function() {
      return PubSub.publish(action.cmd, action.data);
    }, action.delay);
  };

  return Commander;

})();

},{}],19:[function(require,module,exports){
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
    if (devConfig.skipSlate != null) {
      this.skipSlate = devConfig.skipSlate;
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
      if (devConfig.startIndex < 0) {
        devConfig.startIndex = items.length + devConfig.startIndex;
      }
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

},{"episode/audio-track":7}],20:[function(require,module,exports){
var Dictionary;

module.exports = Dictionary = (function() {
  function Dictionary() {
    aristotle.dictionary = this;
    this.terms = {
      "cadet": 'Cadet',
      "cadet-first-class": 'Cadet First Class',
      "technical-cadet": "Technical Cadet",
      "cyber-cadet": "Cyber Cadet",
      background_probe: 'The Background Probe',
      risk_detector: 'The Risk Detector',
      voight_kampff: 'Voight-Kampff Assessor',
      double_deuce: 'Double Deuce Pulverizer',
      mr_fusion: 'Mr. Fusion',
      dematerializer: 'The De-Materializer',
      burninator: 'The Burninator',
      great_wall: 'The Great Wall',
      gated: 'Gated Community',
      "generation-plant": 'Generation Plant',
      substation: 'Substation',
      "control-center": 'Control Center',
      brit_beacon: 'Brit Beacon, Scholar. Gentleman. Bot Hunter.',
      speeder: 'Speeder With Tow Cables',
      orbital_strike: 'Orbital Kinetic Strike',
      "card-scanner": 'Card Guard XT',
      "hal-scanner": 'HAL 9000 Eye Scanner',
      "kraken-scanner": 'Watery Grave Kraken Sensor',
      "duct-tape": 'Port Duct Tape',
      "kragle": 'The Kragle',
      "umpire": 'Port Umpire',
      log_book: 'Guest Log Book',
      escort_leash: '"PSP Buddy", Escort Leash',
      tractor_beam: 'Visitor Tractor Beam'
    };
    this.categories = {
      "Generation Plant": "Facility Type",
      "Substation": "Facility Type",
      "Control Center": "Facility Type",
      'The Background Probe': 'Access Control System',
      'The Risk Detector': 'Access Control System',
      'Voight-Kampff Assessor': 'Access Control System',
      'Double Deuce Pulverizer': 'Asset Change Tool',
      'Mr. Fusion': 'Asset Change Tool',
      'The De-Materializer': 'Asset Change Tool',
      'The Burninator': 'Electronic Access Control System',
      'The Great Wall': 'Electronic Access Control System',
      'Gated Community': 'Electronic Access Control System',
      'Brit Beacon, Scholar. Gentleman. Bot Hunter.': 'NERC Defense',
      'Speeder With Tow Cables': 'NERC Defense',
      'Orbital Kinetic Strike': 'NERC Defense',
      'Card Guard XT': 'Physical Access Control System',
      'HAL 9000 Eye Scanner': 'Physical Access Control System',
      'Watery Grave Kraken Sensor': 'Physical Access Control System',
      'Port Duct Tape': 'Physical Port Security',
      'The Kragle': 'Physical Port Security',
      'Port Umpire': 'Physical Port Security',
      'Guest Log Book': 'Visitor Escort Procedure',
      '"PSP Buddy", Escort Leash': 'Visitor Escort Procedure',
      'Visitor Tractor Beam': 'Visitor Escort Procedure'
    };
  }

  Dictionary.prototype.getCategory = function(term) {
    if (this.categories[term] != null) {
      return this.categories[term];
    }
    return aristotle["throw"]("Tried to use an unknown category: `" + term + "`");
  };

  Dictionary.prototype.get = function(term) {
    if (this.terms[term] != null) {
      return this.terms[term];
    }
    return aristotle["throw"]("Tried to use an unknown term: `" + term + "`");
  };

  return Dictionary;

})();

},{}],21:[function(require,module,exports){
var EpisodeLoader;

module.exports = EpisodeLoader = (function() {
  function EpisodeLoader(callback) {
    this.callback = callback;
    this.loadConfigData();
  }

  EpisodeLoader.prototype.loadConfigData = function() {
    return aristotle.getJson("local/" + aristotle.configFile, (function(_this) {
      return function(data) {
        var key, val;
        for (key in data) {
          val = data[key];
          aristotle.globals.set(key, val, false);
        }
        _this.setMicrosoftTrackingData();
        return _this.loadEpisode();
      };
    })(this));
  };

  EpisodeLoader.prototype.loadEpisode = function() {
    var mapName;
    mapName = aristotle.globals.get("episodeMapFiles")[aristotle.episodeNum];
    return aristotle.getJson(aristotle.getAssetPath(mapName), (function(_this) {
      return function(data) {
        if (aristotle.globals.get("filters")[aristotle.episodeNum] != null) {
          _this.filter(data, aristotle.globals.get("filters")[aristotle.episodeNum]);
        }
        return _this.callback(data);
      };
    })(this));
  };

  EpisodeLoader.prototype.setMicrosoftTrackingData = function() {
    var apikey, learnerId;
    if (!EpisodeLoader.hasSetMsftData) {
      EpisodeLoader.hasSetMsftData = true;
      learnerId = aristotle.globals.get('userId');
      apikey = aristotle.globals.get('apikey');
      return appInsights.setAuthenticatedUserContext(learnerId.replace(/[,;=| ]+/g, "_"), apikey.replace(/[,;=| ]+/g, "_"));
    }
  };

  EpisodeLoader.prototype.filter = function(episodeData, filters) {
    var chapter, j, len, ref, results;
    this.filterItems(episodeData.chapters, filters);
    ref = episodeData.chapters;
    results = [];
    for (j = 0, len = ref.length; j < len; j++) {
      chapter = ref[j];
      results.push(this.filterItems(chapter.slides, filters));
    }
    return results;
  };

  EpisodeLoader.prototype.filterItems = function(items, filters) {
    var i, j, ref, results;
    results = [];
    for (i = j = ref = items.length - 1; ref <= 0 ? j <= 0 : j >= 0; i = ref <= 0 ? ++j : --j) {
      if (items[i].fid != null) {
        if (filters[items[i].fid] != null) {
          results.push(items.splice(i, 1));
        } else {
          results.push(void 0);
        }
      } else {
        results.push(void 0);
      }
    }
    return results;
  };

  return EpisodeLoader;

})();

},{}],22:[function(require,module,exports){
var GlobalVars;

module.exports = GlobalVars = (function() {
  function GlobalVars() {
    this.vars = {};
    aristotle.globals = this;
    PubSub.subscribe('setvars', (function(_this) {
      return function(a, data) {
        return _this.setMany(data);
      };
    })(this));
    PubSub.subscribe('sessionkey.add', (function(_this) {
      return function(a, data) {
        return _this.generateSessionKey();
      };
    })(this));
  }

  GlobalVars.prototype.setMany = function(vars) {
    var key, val;
    for (key in vars) {
      val = vars[key];
      this.vars[key] = val;
    }
    return PubSub.publish('state.save');
  };

  GlobalVars.prototype.getMetaData = function() {
    return this.vars.meta;
  };

  GlobalVars.prototype.set = function(key, val, saveState) {
    if (saveState == null) {
      saveState = true;
    }
    this.vars[key] = val;
    if (saveState) {
      return PubSub.publish('state.save');
    }
  };

  GlobalVars.prototype.get = function(str, throwErrors) {
    if (throwErrors == null) {
      throwErrors = true;
    }
    if (this.vars[str] != null) {
      return this.vars[str];
    }
    if (throwErrors) {
      aristotle["throw"]("Tried to access global variable `" + str + "`, but it doesn't exists", true);
    }
    return null;
  };

  GlobalVars.prototype.generateSessionKey = function() {
    if (this.get('sessionKey', false) == null) {
      return this.set("sessionKey", this.randomLetter() + this.randomLetter() + this.randomLetter() + this.randomLetter() + (new Date().getTime() + Math.round(Math.random() * 23455432)));
    }
  };

  GlobalVars.prototype.randomLetter = function() {
    var letters;
    letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    return letters[Math.floor(letters.length * Math.random())];
  };

  return GlobalVars;

})();

},{}],23:[function(require,module,exports){
var JsonLoader,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

module.exports = JsonLoader = (function() {
  function JsonLoader(callback) {
    this.callback = callback;
    this.load = bind(this.load, this);
    aristotle.getJson = this.load;
  }

  JsonLoader.prototype.load = function(jsonPath, cb) {
    return this.loadJson(jsonPath, (function(_this) {
      return function(json) {
        return cb(JSON.parse(json));
      };
    })(this));
  };

  JsonLoader.prototype.loadJson = function(path, onComplete) {
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

  return JsonLoader;

})();

},{}],24:[function(require,module,exports){
var LocalStorageProxy;

module.exports = LocalStorageProxy = (function() {
  function LocalStorageProxy(cb) {
    window.zap = function(obj) {
      return JSON.parse(JSON.stringify(obj));
    };
    aristotle.localStorageProxy = this;
    PubSub.subscribe('state.save', (function(_this) {
      return function(m, data) {
        return _this.saveState();
      };
    })(this));
    PubSub.subscribe('state.load', (function(_this) {
      return function(m, data) {
        return _this.loadState();
      };
    })(this));
    PubSub.subscribe('state.rehydrate', (function(_this) {
      return function(m, data) {
        return _this.rehydrate();
      };
    })(this));
    PubSub.subscribe('slide.activated', (function(_this) {
      return function(m, data) {
        return _this.saveState(data);
      };
    })(this));
    PubSub.subscribe('chapter.started', (function(_this) {
      return function(m, data) {
        return _this.chapterTitle = data;
      };
    })(this));
    PubSub.subscribe('refresh.on.chapter', (function(_this) {
      return function(m, data) {
        return _this.refreshOnChapter(data);
      };
    })(this));
    this.loadState();
    this.setAristotleVars();
    cb();
  }

  LocalStorageProxy.prototype.rehydrate = function() {
    if (this.store == null) {
      return;
    }
    return aristotle.episode.gotoLocationByTitle(this.store.location.slide, this.store.location.chapter);
  };

  LocalStorageProxy.prototype.begin = function(cb) {
    this.user = this.store.user;
    this.userId = this.store.userId;
    this.createFormattedName();
    if (this.store.globalVars != null) {
      aristotle.globals.vars = this.store.globalVars;
    } else {
      aristotle.globals.vars = {};
    }
    aristotle.globals.vars.user = this.user;
    aristotle.globals.vars.userId = this.userId;
    return cb();
  };

  LocalStorageProxy.prototype.saveState = function(currentSlide, chapter) {
    var ch;
    this.store.globalVars = aristotle.globals.vars;
    if (aristotle.episode != null) {
      ch = chapter != null ? chapter : this.chapterTitle;
      this.store.location = {
        episodeNum: aristotle.episode.episodeNum,
        slide: currentSlide,
        chapter: ch
      };
      return this.saveToLocalStorage(this.store);
    }
  };

  LocalStorageProxy.prototype.refreshOnChapter = function(chapterTitle) {
    this.saveState(chapterTitle, chapterTitle);
    return this.triggerRefresh();
  };

  LocalStorageProxy.prototype.refreshOnEpisode = function(newEpisodeNum) {
    this.store.globalVars = aristotle.globals.vars;
    this.store.location = {
      episodeNum: newEpisodeNum
    };
    this.saveToLocalStorage(this.store);
    return this.triggerRefresh();
  };

  LocalStorageProxy.prototype.completeEpisode = function(newEpisodeNum) {
    this.store = this.store != null ? this.store : {};
    return this.store.location = {
      episodeNum: newEpisodeNum
    };
  };

  LocalStorageProxy.prototype.createFormattedName = function() {
    var x;
    x = this.user.split(',');
    return this.name = x[1] + " " + x[0];
  };

  LocalStorageProxy.prototype.setAristotleVars = function() {
    aristotle.configFile = this.store.initParams.configFile;
    aristotle.devEpisodeNum = this.store.initParams.episode;
    aristotle.episodesDir = this.store.initParams.episodeRoot;
    aristotle.isDevMode = this.store.initParams.isDevMode;
    aristotle.isLocal = this.store.initParams.isLocal;
    aristotle.localDir = this.store.initParams.localRoot;
    return aristotle.sudo = this.store.initParams.sudo;
  };

  LocalStorageProxy.prototype.loadState = function() {
    return this.store = JSON.parse(localStorage.getItem("glob"));
  };

  LocalStorageProxy.prototype.completeCourse = function() {
    return localStorage.setItem("course.complete", "true");
  };

  LocalStorageProxy.prototype.saveToLocalStorage = function(data) {
    return localStorage.setItem("glob", JSON.stringify(data));
  };

  LocalStorageProxy.prototype.triggerRefresh = function() {
    return localStorage.setItem("refresh.window", Date.now());
  };

  return LocalStorageProxy;

})();

},{}],25:[function(require,module,exports){
var Logger,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

module.exports = Logger = (function() {
  function Logger($el, isDevMode) {
    var $node;
    this.isDevMode = isDevMode;
    this["throw"] = bind(this["throw"], this);
    this.log = bind(this.log, this);
    this.messages = "";
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
    if (!this.isDevMode) {
      $node.css({
        display: "none"
      });
    }
  }

  Logger.prototype.print = function(str, clearPrevious) {
    this.messages += str + "</br>";
    this.showLogNotifier();
    if (clearPrevious) {
      return this.$logNotifyer.html(str);
    } else {
      return this.$logNotifyer.html(this.messages);
    }
  };

  Logger.prototype.log = function(msg) {
    this.showLogNotifier();
    console.log("%c" + msg, "color:#0b1524; background:#b0d9e6");
    if (!this.isDevMode) {
      return appInsights.trackException(new Error("General Log : " + msg));
    }
  };

  Logger.prototype["throw"] = function(msg, showTrace) {
    if (showTrace == null) {
      showTrace = false;
    }
    this.showErrorNotifier();
    if (showTrace) {
      console.error("" + msg);
    } else {
      console.log("%c" + msg, "color:#3d0000; background:#e6b0c0");
    }
    if (!this.isDevMode) {
      if (typeof msg === "object") {
        return appInsights.trackException(msg, "Exception Log");
      } else {
        return appInsights.trackException(new Error("Exception Log : " + msg));
      }
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

},{}],26:[function(require,module,exports){
var LogStache,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  slice = [].slice;

module.exports = LogStache = (function() {
  function LogStache() {
    this.log = bind(this.log, this);
    window.log = function() {};
    return;
    this.logs = this.getLogStache();
    window.log = this.log;
    window.logstache = this;
  }

  LogStache.prototype.log = function() {
    var args;
    args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    if (args.length === 1) {
      this.logs[++this.logs.total] = args[0];
    } else {
      this.logs[++this.logs.total] = args;
    }
    return this.save();
  };

  LogStache.prototype.clear = function() {
    return localStorage.removeItem("logstache");
  };

  LogStache.prototype.toConsole = function() {
    return console.log(this.logs);
  };

  LogStache.prototype.save = function() {
    return localStorage.setItem("logstache", JSON.stringify(this.logs));
  };

  LogStache.prototype.download = function() {
    var blob, downloadLink, fileName;
    blob = new Blob([localStorage.getItem("logstache")], {
      type: 'text/plain'
    });
    fileName = 'logs.json';
    if (aristotle.isIE) {
      return window.navigator.msSaveBlob(blob, fileName);
    } else {
      downloadLink = document.createElement("a");
      downloadLink.download = fileName;
      downloadLink.innerHTML = "Download File";
      downloadLink.href = window.URL.createObjectURL(blob);
      return downloadLink.click();
    }
  };

  LogStache.prototype.downloadOLD = function() {
    var encodedUri, str;
    str = "data:text/csv;charset=utf-8,";
    str += localStorage.getItem("logstache");
    encodedUri = encodeURI(str);
    return window.open(encodedUri);
  };

  LogStache.prototype.getLogStache = function() {
    var storedStache;
    storedStache = JSON.parse(localStorage.getItem("logstache"));
    if (storedStache == null) {
      storedStache = {
        total: -1
      };
    }
    return storedStache;
  };

  return LogStache;

})();

},{}],27:[function(require,module,exports){
var Parser,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

module.exports = Parser = (function() {
  function Parser() {
    this.getAssetPath = bind(this.getAssetPath, this);
    this.parseObject = bind(this.parseObject, this);
    this.isVariable = bind(this.isVariable, this);
    this.parseString = bind(this.parseString, this);
    this.parseAny = bind(this.parseAny, this);
    window.parse = this.parseAny;
    window.pObj = this.parseObject;
    aristotle.getAssetPath = this.getAssetPath;
  }

  Parser.prototype.parseAny = function(item) {
    if (typeof item === "string") {
      return this.parseString(item);
    } else {
      return this.parseObject(item);
    }
  };

  Parser.prototype.parseString = function(str) {
    if (this.isVariable(str)) {
      return aristotle.globals.get(str.substr(1));
    } else {
      return str;
    }
  };

  Parser.prototype.isVariable = function(str) {
    return str.charAt(0) === "$";
  };

  Parser.prototype.parseObject = function(obj) {
    var item, key, results;
    results = [];
    for (key in obj) {
      item = obj[key];
      if (typeof item === "string") {
        obj[key] = this.parseString(item);
      }
      if (typeof item === "object") {
        results.push(this.parseObject(item));
      } else {
        results.push(void 0);
      }
    }
    return results;
  };

  Parser.prototype.getAssetPath = function(asset) {
    var contentDir, pathId;
    if (/map(.+)?\.json/.test(asset)) {
      contentDir = "";
    } else if (/.mp3|.m4a/.test(asset)) {
      contentDir = "sounds/";
    } else if (/.json/.test(asset)) {
      contentDir = "animations/";
    } else if (/.svg|.jpg|.jpeg|.png|.mp4/.test(asset)) {
      contentDir = "assets/";
    }
    if (asset.charAt(0) === "~") {
      pathId = asset.substr(1, 1);
      asset = asset.substr(3);
    } else {
      pathId = aristotle.episodeNum;
    }
    if (pathId === "g") {
      return aristotle.episodesDir + "/global/" + contentDir + asset;
    } else if (pathId === "l") {
      return aristotle.localDir + "/" + asset;
    } else if (Number(pathId) !== NaN) {
      return aristotle.episodesDir + "/episode" + pathId + "/" + contentDir + asset;
    } else {
      return aristotle["throw"]("couldn't understand the path: " + asset, true);
    }
  };

  return Parser;

})();

},{}],28:[function(require,module,exports){
var PausableDelays, Timer,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

module.exports = PausableDelays = (function() {
  function PausableDelays() {
    this.createTimeout = bind(this.createTimeout, this);
    this.count = 0;
    this.timers = {};
    aristotle.timeout = this.createTimeout;
    PubSub.subscribe('timer.destroy', (function(_this) {
      return function(m, data) {
        return delete _this.timers[data];
      };
    })(this));
    PubSub.subscribe('timers.pause', (function(_this) {
      return function(m, data) {
        return _this.pauseTimers();
      };
    })(this));
    PubSub.subscribe('timers.resume', (function(_this) {
      return function(m, data) {
        return _this.resumeTimers();
      };
    })(this));
  }

  PausableDelays.prototype.pauseTimers = function() {
    var key, ref, results, timer;
    ref = this.timers;
    results = [];
    for (key in ref) {
      timer = ref[key];
      results.push(timer.pause());
    }
    return results;
  };

  PausableDelays.prototype.resumeTimers = function() {
    var key, ref, results, timer;
    ref = this.timers;
    results = [];
    for (key in ref) {
      timer = ref[key];
      results.push(timer.start());
    }
    return results;
  };

  PausableDelays.prototype.createTimeout = function(cb, delay) {
    var id;
    id = "time" + (this.count++);
    this.timers[id] = new Timer(cb, delay, id);
    return this.timers[id].start();
  };

  return PausableDelays;

})();

Timer = (function() {
  function Timer(cb1, delay, id1) {
    this.cb = cb1;
    this.id = id1;
    this.remaining = delay;
  }

  Timer.prototype.start = function() {
    this.running = true;
    this.started = new Date;
    return this.ref = setTimeout((function(_this) {
      return function() {
        _this.cb();
        return PubSub.publish('timer.destroy', _this.id);
      };
    })(this), this.remaining);
  };

  Timer.prototype.pause = function() {
    this.running = false;
    clearTimeout(this.ref);
    return this.remaining -= new Date - this.started;
  };

  Timer.prototype.getTimeLeft = function() {
    if (this.running) {
      this.pause();
      this.start();
    }
    return this.remaining;
  };

  Timer.prototype.getStateRunning = function() {
    return this.running;
  };

  return Timer;

})();

},{}],29:[function(require,module,exports){
arguments[4][13][0].apply(exports,arguments)
},{"dup":13}],30:[function(require,module,exports){
var AudioTrack, SoundFX,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

AudioTrack = require('episode/audio-track');

module.exports = SoundFX = (function() {
  function SoundFX() {
    this.fadeInSound = bind(this.fadeInSound, this);
    this.fadeOutSound = bind(this.fadeOutSound, this);
    this.count = 0;
    this.slots = {};
    PubSub.subscribe('vcr.play', (function(_this) {
      return function(m, data) {
        return _this.vcrPlay();
      };
    })(this));
    PubSub.subscribe('vcr.pause', (function(_this) {
      return function(m, data) {
        return _this.vcrPause();
      };
    })(this));
    PubSub.subscribe('vcr.replay', (function(_this) {
      return function(m, data) {
        return _this.vcrReplay();
      };
    })(this));
    PubSub.subscribe('slides.changing', (function(_this) {
      return function(m, data) {
        return _this.flushSfxStore();
      };
    })(this));
    PubSub.subscribe('sfx.add', (function(_this) {
      return function(m, data) {
        return _this.parseSFX(data);
      };
    })(this));
    PubSub.subscribe('playsound', (function(_this) {
      return function(m, data) {
        return _this.playSound(data);
      };
    })(this));
    PubSub.subscribe('sound.fadeout', (function(_this) {
      return function(m, data) {
        return _this.checkForDelay(_this.fadeOutSound, data);
      };
    })(this));
    PubSub.subscribe('sound.fadein', (function(_this) {
      return function(m, data) {
        return _this.checkForDelay(_this.fadeInSound, data);
      };
    })(this));
  }

  SoundFX.prototype.vcrPause = function() {
    var key, ref, results, sfx;
    ref = this.sfx;
    results = [];
    for (key in ref) {
      sfx = ref[key];
      results.push(sfx.track.sound.paused = true);
    }
    return results;
  };

  SoundFX.prototype.vcrPlay = function() {
    var key, ref, results, sfx;
    ref = this.sfx;
    results = [];
    for (key in ref) {
      sfx = ref[key];
      results.push(sfx.track.sound.paused = false);
    }
    return results;
  };

  SoundFX.prototype.vcrReplay = function() {
    var ar, key, ref, sfx;
    ar = [];
    ref = this.sfx;
    for (key in ref) {
      sfx = ref[key];
      ar.push(sfx.data);
    }
    this.flushSfxStore();
    return this.parseSFX(ar);
  };

  SoundFX.prototype.flushSfxStore = function() {
    var key, ref, sfx;
    ref = this.sfx;
    for (key in ref) {
      sfx = ref[key];
      if (!sfx.track.isDead) {
        sfx.track.destroy();
      }
    }
    return this.sfx = {};
  };

  SoundFX.prototype.parseSFX = function(data) {
    var fx, i, len, results;
    if (Array.isArray(data)) {
      results = [];
      for (i = 0, len = data.length; i < len; i++) {
        fx = data[i];
        results.push(this.addSoundEffect(fx));
      }
      return results;
    } else {
      return this.addSoundEffect(data);
    }
  };

  SoundFX.prototype.addSoundEffect = function(data) {
    if (data.delay != null) {
      return aristotle.timeout((function(_this) {
        return function() {
          return _this.playSound(data, true);
        };
      })(this), data.delay);
    } else {
      return this.playSound(data);
    }
  };

  SoundFX.prototype.playSound = function(data, saveToSfxStore) {
    var id, me, track;
    me = this;
    track = new AudioTrack(data.content);
    if (!track) {
      return;
    }
    track.play({
      volume: data.volume,
      loop: data.loop,
      offset: data.offset
    }, function() {
      if (data.slot != null) {
        delete me.slots[data.slot];
      }
      track.destroy();
      if (data.complete != null) {
        return aristotle.commander["do"](data.complete);
      }
    });
    if (saveToSfxStore) {
      id = "s" + (this.count++);
      this.sfx[id] = {
        track: track,
        data: data
      };
      track.sfxId = id;
    }
    if (data.slot != null) {
      return this.clearSlotIfNeeded(data, track);
    }
  };

  SoundFX.prototype.fadeOutSound = function(data) {
    if (data.slot != null) {
      if (this.slots[data.slot] != null) {
        return this.slots[data.slot].fadeOut(data.duration, data.destroy);
      }
    }
  };

  SoundFX.prototype.fadeInSound = function(data) {
    if (data.slot != null) {
      if (this.slots[data.slot] != null) {
        return this.slots[data.slot].fadeIn(data.duration, data.destroy);
      }
    }
  };

  SoundFX.prototype.checkForDelay = function(cb, data) {
    if (data.delay != null) {
      return setTimeout(function() {
        return cb(data);
      }, data.delay);
    } else {
      return cb(data);
    }
  };

  SoundFX.prototype.clearSlotIfNeeded = function(data, track) {
    if (this.slots[data.slot] != null) {
      this.slots[data.slot].destroy();
    }
    return this.slots[data.slot] = track;
  };

  return SoundFX;

})();

},{"episode/audio-track":7}],31:[function(require,module,exports){
module.exports = function() {
  if (screen.height <= 600) {
    return document.body.style.zoom = "60%";
  } else if (screen.height <= 720) {
    return document.body.style.zoom = "75%";
  } else if (screen.height <= 768) {
    return document.body.style.zoom = "80%";
  } else if (screen.height <= 800) {
    return document.body.style.zoom = "85%";
  }
};

},{}],32:[function(require,module,exports){
var SvgCartographer,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

module.exports = SvgCartographer = (function() {
  function SvgCartographer() {
    this.getGlobalPos = bind(this.getGlobalPos, this);
    this.getLocalPos = bind(this.getLocalPos, this);
    PubSub.subscribe('scale.update', (function(_this) {
      return function(m, data) {
        return _this.scale = data;
      };
    })(this));
    PubSub.subscribe('transform.update', (function(_this) {
      return function(m, data) {
        return _this.transformOrigin = data;
      };
    })(this));
    aristotle.cartographer = this;
    aristotle.getLocalPos = this.getLocalPos;
    aristotle.getGlobalPos = this.getGlobalPos;
  }

  SvgCartographer.prototype.getLocalPos = function(itemId) {
    var bBox;
    bBox = $("#" + itemId)[0].getBBox();
    return {
      x: bBox.x,
      y: bBox.y,
      w: bBox.width,
      h: bBox.height
    };
  };

  SvgCartographer.prototype.getGlobalPos = function(itemId) {
    var bBox, x, xtraX, xtraY, y;
    bBox = $("#" + itemId)[0].getBBox();
    xtraX = this.transformOrigin.x * (this.scale - 1) - this.transformOrigin.x;
    x = (bBox.x * this.scale) - (this.transformOrigin.x + xtraX);
    xtraY = this.transformOrigin.y * (this.scale - 1) - this.transformOrigin.y;
    y = (bBox.y * this.scale) - (this.transformOrigin.y + xtraY);
    return {
      x: x,
      y: y,
      w: bBox.width,
      h: bBox.height
    };
  };

  return SvgCartographer;

})();

},{}],33:[function(require,module,exports){
var DynamicAssets;

module.exports = DynamicAssets = (function() {
  function DynamicAssets($el1) {
    this.$el = $el1;
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
    var $ghostItem, box;
    box = aristotle.getLocalPos(data.id);
    if (box.w > 500 || box.h > 400) {
      aristotle.log("We've created a hit area for `" + data.id + "` that is " + box.w + "px by " + box.h + "px, I'm guessing that's not right..");
    }
    $ghostItem = $(jadeTemplate['slide-ux/components/ghost-item']({
      id: data.id + "-ghost",
      width: box.w,
      height: box.h,
      left: box.x,
      top: box.y
    }));
    this.$el.append($ghostItem);
    return this.addEvents($ghostItem, data.events, data.id);
  };

  DynamicAssets.prototype.addEvents = function($el, events, id) {
    var action, event, results;
    results = [];
    for (event in events) {
      action = events[event];
      if (action.cmd != null) {
        results.push($el.on(event + "." + id, function() {
          return aristotle.commander["do"](action);
        }));
      } else if (typeof action === "function") {
        results.push($el.on(event + "." + id, function() {
          return action(id);
        }));
      } else {
        results.push(void 0);
      }
    }
    return results;
  };

  DynamicAssets.prototype.destroyGhost = function(data) {
    var $el, action, event, ref;
    $el = $("#" + data.id + "-ghost");
    ref = data.events;
    for (event in ref) {
      action = ref[event];
      $el.off(event + "." + data.id);
    }
    return $el.remove();
  };

  DynamicAssets.prototype.addLabel = function(data) {
    var $label, pos;
    pos = aristotle.movie.getLocalPos(data.id);
    $label = $(jadeTemplate['slide-ux/label']({
      title: data.text,
      id: data.id + "-label"
    }));
    this.$el.append($label);
    this.positionLabel(data, $label, pos);
    $label.css({
      top: pos.y,
      left: pos.x
    });
    this.addEvents($label, data.events, data.id);
    if (data.events != null) {
      return $label.addClass("clickable");
    }
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
        window.thing = $innerLabel;
        return $innerLabel.css({
          left: -$innerLabel.width() / 2
        });
    }
  };

  return DynamicAssets;

})();

},{}],34:[function(require,module,exports){
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
    switch (color) {
      case 'bca':
        filterId = "highlightBCA";
        break;
      case 'pca':
        filterId = "highlightPCA";
        break;
      case 'bcsi':
        filterId = "highlightBCSI";
    }
    $item.css({
      filter: "url(#" + filterId + ")"
    });
    return $item = null;
  };

  Highlighter.prototype.unHighlightElement = function(elementId) {
    var $item;
    $item = $("#" + elementId, this.$el);
    $item.attr("class", "");
    if ($item.length === 0) {
      aristotle["throw"]("tried to unhighlight an element with the id `" + elementId + "`, but found no elements with that id.", true);
    }
    $item.css({
      filter: "auto"
    });
    return $item = null;
  };

  Highlighter.prototype.unhighlightAll = function() {
    var $items;
    $items = $(".filter-highlighted");
    $items.attr("class", "");
    $items.css({
      filter: "initial"
    });
    return $items = null;
  };

  return Highlighter;

})();

},{}],35:[function(require,module,exports){
var Layer, SVGAnimation,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

SVGAnimation = require('movie/svg-animation');

module.exports = Layer = (function() {
  function Layer($el, depth) {
    this.depth = depth;
    this.createContent = bind(this.createContent, this);
    this.update = bind(this.update, this);
    this.isCached = false;
    this.$layer = $(jadeTemplate['movie/layer']({
      depth: this.depth
    }));
    $el.append(this.$layer);
  }

  Layer.prototype.report = function() {
    var cachedOrNot, symbol;
    cachedOrNot = this.isCached ? "cached" : "not cached";
    symbol = this.isCached ? "√" : "-";
    return console.log(symbol + " Layer " + this.depth + " : " + this.pristineLayerData.content + " is " + cachedOrNot);
  };

  Layer.prototype.update = function(pristineLayerData) {
    this.pristineLayerData = pristineLayerData;
    this.layerData = jQuery.extend(true, {}, this.pristineLayerData);
    if (this.layerData.wait != null) {
      aristotle.timeout(this.createContent, this.layerData.wait);
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
    this.isAnimation = false;
    this.isCached = false;
    parse(layerData);
    if (layerData.ieCache && !aristotle.dontCache && aristotle.isIE) {
      layerData.loop = false;
      layerData.cache = true;
    }
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
        if (this.animation != null) {
          this.doomedAnimation = this.animation;
        }
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
      case "mp4":
        return this.addVideo(this.currentOnionLayer, layerData.content);
      case "none":
        return "do nothing";
      default:
        return aristotle["throw"]("tried to add unrecognized layer type '" + kind + "'", true);
    }
  };

  Layer.prototype.addAnimation = function($holder, layerData) {
    this.isAnimation = true;
    this.animation = new SVGAnimation($holder, aristotle.getAssetPath(layerData.content), layerData);
    if (layerData.cache) {
      return this.animation.addOnComplete((function(_this) {
        return function() {
          return setTimeout(function() {
            return _this.cache();
          }, 10);
        };
      })(this));
    }
  };

  Layer.prototype.cache = function() {
    var $svg, error, error1, img, svg;
    if (this.isCached || !this.isAnimation || aristotle.dontCache) {
      return;
    }
    this.isCached = true;
    $svg = $("svg", this.$layer);
    $svg.attr({
      style: "",
      xmlns: ""
    });
    $svg.removeAttr("xmlns");
    svg = $svg[0];
    img = $($.parseHTML("<img />"))[0];
    window.traceLayer = this;
    this.doomedAnimation = this.animation;
    try {
      return svg.toDataURL('image/png', {
        renderer: 'canvg',
        callback: (function(_this) {
          return function(data) {
            img.setAttribute('src', data);
            _this.fadeAndRemoveOldLayer();
            _this.currentOnionLayer = _this.addOnionLayer();
            return _this.currentOnionLayer.append(img);
          };
        })(this)
      });
    } catch (error1) {
      error = error1;
      return aristotle["throw"](error);
    }
  };

  Layer.prototype.uncache = function() {
    var key, ref, tempObj, val;
    if (!this.isCached) {
      return;
    }
    this.isCached = false;
    this.fadeAndRemoveOldLayer();
    this.currentOnionLayer = this.addOnionLayer();
    tempObj = {};
    ref = this.layerData;
    for (key in ref) {
      val = ref[key];
      tempObj[key] = val;
    }
    tempObj.ieCache = false;
    tempObj.cache = false;
    tempObj.jumpToEnd = true;
    return this.addTheCorrectContent(tempObj);
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
    return aristotle.timeout((function(_this) {
      return function() {
        oldOnionLayer.velocity('stop', true);
        return oldOnionLayer.velocity({
          opacity: 0
        }, {
          duration: 200,
          complete: function() {
            if (_this.doomedAnimation != null) {
              _this.destroyDoomedAnimation();
            }
            oldOnionLayer.remove();
            return oldOnionLayer = null;
          }
        });
      };
    })(this), 200);
  };

  Layer.prototype.destroyDoomedAnimation = function() {
    if (this.doomedAnimation == null) {
      return;
    }
    this.doomedAnimation.destroy();
    return this.doomedAnimation = null;
  };

  Layer.prototype.destroyAnimation = function() {
    if (this.animation == null) {
      return;
    }
    this.animation.destroy();
    return this.animation = null;
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

  Layer.prototype.destroy = function() {
    this.empty();
    return this.$layer.remove();
  };

  Layer.prototype.empty = function() {
    this.$layer.empty();
    this.destroyDoomedAnimation();
    this.destroyAnimation();
    return this.currentOnionLayer = null;
  };

  Layer.prototype.addSvg = function($holder, layerData) {
    var me;
    me = this;
    return $holder.load(aristotle.getAssetPath(layerData.content), function() {
      if (layerData.cache) {
        me.cache();
      }
      return me = null;
    });
  };

  Layer.prototype.addImage = function($holder, file, repeat, position) {
    if (repeat == null) {
      repeat = "no-repeat";
    }
    if (position == null) {
      position = "left";
    }
    return $holder.css({
      background: "url(" + (aristotle.getAssetPath(file)) + ") " + repeat + " " + position
    });
  };

  Layer.prototype.addVideo = function($holder, file) {
    var $vid;
    $vid = $(jadeTemplate['movie/video']({
      src: aristotle.getAssetPath(file)
    }));
    return $holder.append($vid);
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

  return Layer;

})();

},{"movie/svg-animation":37}],36:[function(require,module,exports){
var DynamicAssets, Highlighter, Layer, Movie;

DynamicAssets = require('movie/dynamic-assets');

Layer = require('movie/layer');

Highlighter = require('movie/highlighter');

module.exports = Movie = (function() {
  function Movie($el) {
    var token1, token10, token11, token12, token13, token14, token2, token3, token4, token5, token6, token7, token8, token9;
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
    this.publishScaleAndTransform();
    token1 = PubSub.subscribe('movie.load-layer', (function(_this) {
      return function(m, data) {
        return _this.addLayer(data);
      };
    })(this));
    token2 = PubSub.subscribe('movie.zoom', (function(_this) {
      return function(m, data) {
        return _this.zoom(data);
      };
    })(this));
    token3 = PubSub.subscribe('movie.layers.clear', (function(_this) {
      return function(m, data) {
        return _this.clearLayer(data);
      };
    })(this));
    token4 = PubSub.subscribe('movie.layers.clear-all', (function(_this) {
      return function(m, data) {
        return _this.clearAllLayers();
      };
    })(this));
    token5 = PubSub.subscribe('movie.layers.blur.below', (function(_this) {
      return function(m, data) {
        return _this.blurAllLayersBelow(data);
      };
    })(this));
    token6 = PubSub.subscribe('movie.layers.unblur.all', (function(_this) {
      return function(m, data) {
        return _this.unblurAllLAyers();
      };
    })(this));
    token7 = PubSub.subscribe('movie.layers.cache', (function(_this) {
      return function(m, data) {
        return _this.cacheLayer(data);
      };
    })(this));
    token8 = PubSub.subscribe('movie.layers.uncache', (function(_this) {
      return function(m, data) {
        return _this.uncacheLayer(data);
      };
    })(this));
    token9 = PubSub.subscribe('movie.layers.uncache-all', (function(_this) {
      return function(m, data) {
        return _this.unCacheAllLayers();
      };
    })(this));
    token10 = PubSub.subscribe('movie.layers.cache-all', (function(_this) {
      return function(m, data) {
        return _this.cacheAllLayers();
      };
    })(this));
    token11 = PubSub.subscribe('movie.layers.cache-all-but', (function(_this) {
      return function(m, data) {
        return _this.cacheAllBut(data);
      };
    })(this));
    token12 = PubSub.subscribe('movie.report', (function(_this) {
      return function(m, data) {
        return _this.report();
      };
    })(this));
    token13 = PubSub.subscribe('movie.set-dried-layers', (function(_this) {
      return function(m, data) {
        return _this.driedLayers = data;
      };
    })(this));
    token14 = PubSub.subscribe('movie.rehydrate-layers', (function(_this) {
      return function(m, data) {
        if (_this.driedLayers != null) {
          _this.rehydrateLayerState(_this.driedLayers);
          return _this.driedLayers = null;
        }
      };
    })(this));
    this.tokens = [token1, token2, token3, token4, token5, token6, token7, token8, token9, token10, token11, token12, token13];
  }

  Movie.prototype.report = function() {
    var j, layer, len, ref, results;
    ref = this.layers;
    results = [];
    for (j = 0, len = ref.length; j < len; j++) {
      layer = ref[j];
      results.push(layer.report());
    }
    return results;
  };

  Movie.prototype.reset = function() {
    var j, layer, len, ref;
    this.zoom({
      scale: 1
    });
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
      "transform-origin": (Math.round(x)) + "px " + (Math.round(y)) + "px"
    });
    this.$el.css({
      transform: "scale(" + this.scale + ")"
    });
    return this.publishScaleAndTransform();
  };

  Movie.prototype.clearLayer = function(depth) {
    if (this.layers[depth] != null) {
      return this.layers[depth].empty();
    }
  };

  Movie.prototype.clearAllLayers = function() {
    var j, layer, len, ref, results;
    ref = this.layers;
    results = [];
    for (j = 0, len = ref.length; j < len; j++) {
      layer = ref[j];
      results.push(layer.empty());
    }
    return results;
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

  Movie.prototype.cacheAllBut = function(data) {
    var exception, exceptions, j, k, layer, len, len1, ref, results;
    exceptions = {};
    if (Array.isArray(data)) {
      for (j = 0, len = data.length; j < len; j++) {
        exception = data[j];
        exceptions[exception] = "";
      }
    } else {
      exceptions[data] = "";
    }
    ref = this.layers;
    results = [];
    for (k = 0, len1 = ref.length; k < len1; k++) {
      layer = ref[k];
      if (exceptions[layer.depth] !== "") {
        results.push(layer.cache());
      } else {
        results.push(void 0);
      }
    }
    return results;
  };

  Movie.prototype.cacheAllLayers = function() {
    var j, layer, len, ref, results;
    ref = this.layers;
    results = [];
    for (j = 0, len = ref.length; j < len; j++) {
      layer = ref[j];
      results.push(layer.cache());
    }
    return results;
  };

  Movie.prototype.unCacheAllLayers = function() {
    var j, layer, len, ref, results;
    ref = this.layers;
    results = [];
    for (j = 0, len = ref.length; j < len; j++) {
      layer = ref[j];
      results.push(layer.uncache());
    }
    return results;
  };

  Movie.prototype.cacheLayer = function(depth) {
    return this.layers[depth].cache();
  };

  Movie.prototype.uncacheLayer = function(depth) {
    return this.layers[depth].uncache();
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
    return aristotle.getGlobalPos(itemId);
  };

  Movie.prototype.getLocalPos = function(itemId) {
    return aristotle.getLocalPos(itemId);
  };

  Movie.prototype.dehydrateLayerState = function() {
    var j, layer, layers, len, ref;
    layers = [];
    ref = this.layers;
    for (j = 0, len = ref.length; j < len; j++) {
      layer = ref[j];
      layers.push(layer.pristineLayerData);
    }
    return layers;
  };

  Movie.prototype.rehydrateLayerState = function(layers) {
    var j, layerData, len, results;
    this.reset();
    results = [];
    for (j = 0, len = layers.length; j < len; j++) {
      layerData = layers[j];
      if (layerData != null) {
        if (!layerData.loop) {
          layerData.jumpToEnd = true;
        }
        results.push(this.addLayer(layerData));
      } else {
        results.push(void 0);
      }
    }
    return results;
  };

  Movie.prototype.publishScaleAndTransform = function() {
    PubSub.publish('scale.update', this.scale);
    return PubSub.publish('transform.update', this.transformOrigin);
  };

  Movie.prototype.destroy = function() {
    var j, len, ref, results, token;
    this.reset();
    ref = this.tokens;
    results = [];
    for (j = 0, len = ref.length; j < len; j++) {
      token = ref[j];
      results.push(PubSub.unsubscribe(token));
    }
    return results;
  };

  return Movie;

})();

},{"movie/dynamic-assets":33,"movie/highlighter":34,"movie/layer":35}],37:[function(require,module,exports){
var SVGAnimation,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

module.exports = SVGAnimation = (function() {
  function SVGAnimation(el, json, data) {
    this.play = bind(this.play, this);
    var handle;
    this.eventHandlers = [];
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
    if (data.nativeEvents != null) {
      this.addNativeEvents(data.nativeEvents);
    }
    if (data.vcr) {
      PubSub.publish('vcr-control.show', this);
    }
    handle = this.animation.addEventListener('data_ready', (function(_this) {
      return function() {
        if (data.jumpToEnd != null) {
          _this.animation.setCurrentRawFrameValue(_this.animation.totalFrames);
        } else {
          if (data.delay != null) {
            aristotle.timeout(_this.play, data.delay);
          } else {
            _this.play();
          }
        }
        return _this.addEvents(data);
      };
    })(this));
    this.trackEventHandler('data_ready', handle);
  }

  SVGAnimation.prototype.addEvents = function(data) {
    var event, handle, i, len, ref, results;
    if (data.events != null) {
      ref = data.events;
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        event = ref[i];
        handle = this.animation.addEventListener(event, (function(_this) {
          return function() {
            return PubSub.publish("layer." + data.depth + "." + event);
          };
        })(this));
        results.push(this.trackEventHandler(event, handle));
      }
      return results;
    }
  };

  SVGAnimation.prototype.addNativeEvents = function(events) {
    var cb, event, handle, results;
    results = [];
    for (event in events) {
      cb = events[event];
      handle = this.animation.addEventListener(event, cb);
      results.push(this.trackEventHandler(event, handle));
    }
    return results;
  };

  SVGAnimation.prototype.addOnComplete = function(onComplete) {
    var handle;
    handle = this.animation.addEventListener("complete", (function(_this) {
      return function() {
        return onComplete();
      };
    })(this));
    return this.trackEventHandler("complete", handle);
  };

  SVGAnimation.prototype.play = function() {
    return this.animation.play();
  };

  SVGAnimation.prototype.stop = function() {
    return this.animation.stop();
  };

  SVGAnimation.prototype.destroy = function() {};

  SVGAnimation.prototype.trackEventHandler = function(event, handler) {
    return this.eventHandlers.push({
      event: event,
      handler: handler
    });
  };

  SVGAnimation.prototype.destroyEvents = function() {
    var evnt, i, len, ref, results;
    ref = this.eventHandlers;
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      evnt = ref[i];
      results.push(this.animation.removeEventListener(evnt.event, evnt.handler));
    }
    return results;
  };

  return SVGAnimation;

})();

},{}],38:[function(require,module,exports){
var CallSignSelect, Component,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Component = require('slide-ux/components/component');

module.exports = CallSignSelect = (function(superClass) {
  extend(CallSignSelect, superClass);

  function CallSignSelect($el, data) {
    CallSignSelect.__super__.constructor.call(this, data);
    this.$node = $(jadeTemplate['slide-ux/components/call-sign-select'](data));
    this.superInit($el, this.$node, data);
    this.$node.addClass('hidden');
    this.$txt = $('#callsign-txt', this.$node);
    this.$name = $("#name", this.$node);
    this.updateName();
    $('#generate-callsign', this.$node).on('click', (function(_this) {
      return function() {
        return _this.generateCallSign();
      };
    })(this));
    PubSub.subscribe('save.callsign', (function(_this) {
      return function(m, data) {
        return _this.saveCallSign();
      };
    })(this));
    this.$txt.on("keyup", (function(_this) {
      return function(e) {
        return _this.updateName($(e.currentTarget).val());
      };
    })(this));
    aristotle.getJson("local/callsigns.json", (function(_this) {
      return function(data) {
        _this.callsigns = data.callsigns;
        return _this.$node.removeClass('hidden');
      };
    })(this));
  }

  CallSignSelect.prototype.updateName = function(callsign) {
    var firstName, lastName, ref;
    ref = aristotle.globals.get("user").split(","), lastName = ref[0], firstName = ref[1];
    if (callsign != null) {
      callsign = " \"" + callsign + "\" ";
    } else {
      callsign = " ";
    }
    return this.$name.html("" + firstName + callsign + lastName);
  };

  CallSignSelect.prototype.generateCallSign = function() {
    this.callSign = this.callsigns[Math.floor(Math.random() * this.callsigns.length)];
    PubSub.publish('meta.activity', {
      activity: "Generate Call Sign"
    });
    this.updateName(this.callSign);
    return this.$txt.val(this.callSign);
  };

  CallSignSelect.prototype.saveCallSign = function() {
    var callSign;
    callSign = this.$txt.val();
    if ((callSign != null ? callSign.length : void 0) > 1) {
      aristotle.globals.set('callSign', callSign);
      PubSub.publish('state.save');
      PubSub.publish('callsign.selected', callSign);
      return PubSub.publish('slides.next');
    }
  };

  return CallSignSelect;

})(Component);

},{"slide-ux/components/component":39}],39:[function(require,module,exports){
var Component;

module.exports = Component = (function() {
  function Component(data) {
    this.replaceVars(data);
  }

  Component.prototype.superInit = function($el, $node, data) {
    this.$node = $node;
    $el.append(this.$node);
    shadowIconsInstance.svgReplaceWithString(pxSvgIconString, this.$node);
    return this.listenForLabelHovers(data);
  };

  Component.prototype.replaceVars = function(data) {
    var i, key, len, ref, results;
    if (data.replaceVars == null) {
      return;
    }
    ref = data.replaceVars;
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      key = ref[i];
      results.push(data[key] = data[key].replace(/\${(\w+)}/g, function(match, capture1) {
        return aristotle.globals.get(capture1);
      }));
    }
    return results;
  };

  Component.prototype.listenForLabelHovers = function(data) {
    var $a, out, over;
    if (data.hasLabels == null) {
      return;
    }
    if (!data.hasLabels) {
      return;
    }
    $a = $("a[data-label]", this.$node);
    $a.addClass("label-trigger");
    over = $a.on("mouseover", (function(_this) {
      return function(e) {
        return _this.addLabel(e);
      };
    })(this));
    return out = $a.on("mouseout", (function(_this) {
      return function(e) {
        return _this.removeLabel(e);
      };
    })(this));
  };

  Component.prototype.addLabel = function(e) {
    var $el, configData, timeoutId;
    $el = $(e.currentTarget);
    timeoutId = "timeout" + ($el.attr('data-label'));
    clearTimeout(this[timeoutId]);
    configData = aristotle.labels[$el.attr('data-label')];
    configData.cssClass = "arrow-right box";
    return PubSub.publish('label.attach', {
      el: $el,
      content: configData
    });
  };

  Component.prototype.removeLabel = function(e) {
    var $el, timeoutId;
    $el = $(e.currentTarget);
    timeoutId = "timeout" + ($el.attr('data-label'));
    return this[timeoutId] = setTimeout(function() {
      $el = $(e.currentTarget);
      return PubSub.publish('label.destroy', $el);
    }, 100);
  };

  Component.prototype.destroy = function() {
    if (this.$node != null) {
      this.$node.remove();
    }
    return this.$node = null;
  };

  Component.prototype.trackEventHandler = function(item, event, handler) {
    return this.eventHandlers.push({
      item: item,
      event: event,
      handler: handler
    });
  };

  Component.prototype.destroyEvents = function() {
    var evnt, i, len, ref, results;
    ref = this.eventHandlers;
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      evnt = ref[i];
      results.push(evnt.item.removeEventListener(evnt.event, evnt.handler));
    }
    return results;
  };

  return Component;

})();

},{}],40:[function(require,module,exports){
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
    DefenderCards.__super__.constructor.call(this, data);
    this.totalCardsViewed = 0;
    this.$node = $(jadeTemplate['slide-ux/components/defender-cards']({}));
    this.superInit($el, this.$node, data);
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

},{"slide-ux/components/component":39}],41:[function(require,module,exports){
var Component, DialoguePage,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Component = require('slide-ux/components/component');

module.exports = DialoguePage = (function(superClass) {
  extend(DialoguePage, superClass);

  function DialoguePage($el, data) {
    DialoguePage.__super__.constructor.call(this, data);
    this.configData(data);
    this.$node = $(jadeTemplate['slide-ux/components/dialogue/dialogue-pages/base'](data));
    this.superInit($el, this.$node, data);
    if (data.theme != null) {
      this.$node.addClass(data.theme);
    }
    this.configButtons(this.$node, data);
    $("svg", this.$node).each(function(i, el) {
      return el.setAttribute("preserveAspectRatio", "none");
    });
    $(".btn").on('click', (function(_this) {
      return function(e) {
        var btn, id, j, len, ref;
        id = e.currentTarget.getAttribute("id");
        ref = data.btns;
        for (j = 0, len = ref.length; j < len; j++) {
          btn = ref[j];
          if (btn.id === id) {
            aristotle.commander["do"](btn.click);
            return;
          }
        }
      };
    })(this));
  }

  DialoguePage.prototype.configData = function(data) {
    var btn, count, j, len, ref, results;
    count = 0;
    ref = data.btns;
    results = [];
    for (j = 0, len = ref.length; j < len; j++) {
      btn = ref[j];
      results.push(btn.id = "btn" + (count++));
    }
    return results;
  };

  DialoguePage.prototype.configButtons = function(el, data) {
    if (data.btnConfig == null) {
      return;
    }
    if (data.btnConfig.width != null) {
      $(".btn", el).css({
        width: data.btnConfig.width + "px"
      });
    }
    if (data.btnConfig.height != null) {
      $(".btn", el).css({
        height: data.btnConfig.height + "px"
      });
    }
    if (data.btnConfig.bottom != null) {
      $(".btn-wrapper", el).css({
        "margin-bottom": data.btnConfig.bottom + "px"
      });
    }
    if (data.btnConfig.lines) {
      return $(".btn-wrapper").addClass('lines');
    }
  };

  return DialoguePage;

})(Component);

},{"slide-ux/components/component":39}],42:[function(require,module,exports){
var Component, Dialogue,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Component = require('slide-ux/components/component');

module.exports = Dialogue = (function(superClass) {
  extend(Dialogue, superClass);

  function Dialogue($el, data) {
    Dialogue.__super__.constructor.call(this, data);
    this.$node = $(jadeTemplate['slide-ux/components/dialogue/dialogue'](data));
    this.superInit($el, this.$node, data);
    $('.btn', this.$node).on("click", (function(_this) {
      return function() {
        return aristotle.commander["do"](data.btn.action);
      };
    })(this));
  }

  return Dialogue;

})(Component);

},{"slide-ux/components/component":39}],43:[function(require,module,exports){
var Component, Duties, Sequence,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Component = require('slide-ux/components/component');

Sequence = require('misc/sequence');

module.exports = Duties = (function(superClass) {
  extend(Duties, superClass);

  function Duties($el, data) {
    Duties.__super__.constructor.call(this, data);
    this.numAcknowledgedDuties = 0;
    this.acknowledgedDuties = {};
    this.getData("~l/" + (aristotle.globals.get('dutiesDir')) + "/" + data.definition + ".json");
    this.$node = $("<div class='duties'/>");
    PubSub.publish('meta.duties.start');
    this.superInit($el, this.$node, data);
  }

  Duties.prototype.build = function(data) {
    var $html;
    this.createDutyIds(data.duties);
    this.duties = new Sequence(data.duties);
    $html = $(jadeTemplate['slide-ux/components/duties'](data));
    this.$node.append($html);
    this.$content = $(".content", this.$node);
    shadowIconsInstance.svgReplaceWithString(pxSvgIconString, this.$node);
    this.$dutyButtons = $(".duty-btn", this.$node);
    this.$dutyButtons.on("click", (function(_this) {
      return function(e) {
        return _this.activateDuty(e.currentTarget, e.currentTarget.getAttribute('id'));
      };
    })(this));
    return $(this.$dutyButtons[0]).trigger("click");
  };

  Duties.prototype.setUserHtml = function(data, html) {
    var $userContent;
    data.html = html;
    this.$content.empty();
    $userContent = $(jadeTemplate['slide-ux/components/duty-details'](data));
    this.$content.append($userContent);
    shadowIconsInstance.svgReplaceWithString(pxSvgIconString, this.$node);
    return $("#acknowledge", $userContent).on("click", (function(_this) {
      return function(e) {
        return _this.dutyAcknowledged($(e.currentTarget));
      };
    })(this));
  };

  Duties.prototype.getUserHtml = function(data) {
    var me, path, xobj;
    me = this;
    path = aristotle.getAssetPath("~l/" + (aristotle.globals.get('dutiesDir')) + "/" + data.content);
    xobj = new XMLHttpRequest();
    xobj.onreadystatechange = function() {
      if (xobj.readyState === 4 && xobj.status === 200) {
        return me.setUserHtml(data, xobj.responseText);
      } else if (xobj.status === 404) {
        if (me.thrown404) {
          return;
        }
        me.thrown404 = true;
        aristotle["throw"]("Couldn't find the duties file " + data.content + ", check the json file for typos.");
        return PubSub.publish('slides.next-slide');
      }
    };
    xobj.open('GET', path, true);
    return xobj.send(null);
  };

  Duties.prototype.dutyAcknowledged = function($btn) {
    var duty, i, len, ref;
    $btn.addClass('clicked');
    if (this.acknowledgedDuties[this.duties.currentItem().id] == null) {
      this.numAcknowledgedDuties++;
      this.acknowledgedDuties[this.duties.currentItem().id] = "";
      this.$currentActiveButton.addClass("complete");
    }
    if (this.numAcknowledgedDuties === this.duties.totalItems) {
      PubSub.publish('meta.duties.finish');
      return PubSub.publish('continue.show');
    } else {
      ref = this.duties.items;
      for (i = 0, len = ref.length; i < len; i++) {
        duty = ref[i];
        if (this.acknowledgedDuties[duty.id] == null) {
          $("#" + duty.id, this.$node).trigger('click');
          return;
        }
      }
    }
  };

  Duties.prototype.createDutyIds = function(duties) {
    var count, duty, i, len, results;
    count = 0;
    results = [];
    for (i = 0, len = duties.length; i < len; i++) {
      duty = duties[i];
      results.push(duty.id = "duty" + (count++));
    }
    return results;
  };

  Duties.prototype.activateDuty = function(el, id) {
    this.duties.activateItemByParam('id', id);
    this.$currentActiveButton = $(el);
    this.$dutyButtons.removeClass("active");
    this.$currentActiveButton.addClass("active");
    return this.getUserHtml(this.duties.currentItem());
  };

  Duties.prototype.getData = function(jsonFile) {
    return this.loadJson(aristotle.getAssetPath(jsonFile), (function(_this) {
      return function(json) {
        var obj;
        obj = JSON.parse(json.replace(/(\r\n|\n|\r)/gm, ""));
        return _this.build(obj);
      };
    })(this));
  };

  Duties.prototype.loadJson = function(path, onComplete) {
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

  return Duties;

})(Component);

},{"misc/sequence":29,"slide-ux/components/component":39}],44:[function(require,module,exports){
var Component, EpisodeIntro,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Component = require('slide-ux/components/component');

module.exports = EpisodeIntro = (function(superClass) {
  extend(EpisodeIntro, superClass);

  function EpisodeIntro($el, data) {
    EpisodeIntro.__super__.constructor.call(this, data);
    this.$node = $(jadeTemplate['slide-ux/components/episode-intro'](data));
    this.superInit($el, this.$node, data);
  }

  return EpisodeIntro;

})(Component);

},{"slide-ux/components/component":39}],45:[function(require,module,exports){
var Component, EpisodeOutro,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Component = require('slide-ux/components/component');

module.exports = EpisodeOutro = (function(superClass) {
  extend(EpisodeOutro, superClass);

  function EpisodeOutro($el, data) {
    EpisodeOutro.__super__.constructor.call(this, data);
    this.$node = $(jadeTemplate['slide-ux/components/episode-outro'](data));
    this.superInit($el, this.$node, data);
  }

  return EpisodeOutro;

})(Component);

},{"slide-ux/components/component":39}],46:[function(require,module,exports){
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
    ExploreCards.__super__.constructor.call(this, this.data);
    this.metaCategory = this.data.meta.title;
    this.totalCardsViewed = 0;
    this.requiredCardViews = this.data["required-views"];
    this.$node = $($.parseHTML("<div></div>"));
    this.cards = new Sequence(this.data.cards);
    this.createCardGhosts(this.data.cards);
    this.superInit($el, this.$node, this.data);
  }

  ExploreCards.prototype.createCardGhosts = function(cards) {
    var cardData, data, i, len, results;
    this.ghosts = [];
    results = [];
    for (i = 0, len = cards.length; i < len; i++) {
      cardData = cards[i];
      if (cardData.label != null) {
        cardData.label.id = cardData.hit;
        cardData.label.events = {
          click: (function(_this) {
            return function(id) {
              return _this.showCard(id);
            };
          })(this)
        };
        this.addLabel(cardData.label);
      }
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

  ExploreCards.prototype.addLabel = function(labelData) {
    return PubSub.publish('label.add', labelData);
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
    PubSub.publish('meta.activity', {
      activity: "Click : " + this.metaCategory + " - " + data.name
    });
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
      PubSub.publish('ghostux.remove', {
        id: ghostId,
        events: {
          click: ""
        }
      });
    }
    return ExploreCards.__super__.destroy.call(this);
  };

  return ExploreCards;

})(Component);

},{"misc/sequence":29,"slide-ux/components/component":39}],47:[function(require,module,exports){
var Component, GhostUX,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Component = require('slide-ux/components/component');

module.exports = GhostUX = (function(superClass) {
  extend(GhostUX, superClass);

  function GhostUX($el, data) {
    GhostUX.__super__.constructor.call(this, data);
    this.$node = $(jadeTemplate['slide-ux/components/ghost-ux']({}));
    this.superInit($el, this.$node, data);
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

},{"slide-ux/components/component":39}],48:[function(require,module,exports){
var Component, GutCheck,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Component = require('slide-ux/components/component');

module.exports = GutCheck = (function(superClass) {
  extend(GutCheck, superClass);

  function GutCheck($el, data) {
    GutCheck.__super__.constructor.call(this, data);
    this.$node = $(jadeTemplate['slide-ux/components/gut-check'](data));
    this.superInit($el, this.$node, data);
  }

  return GutCheck;

})(Component);

},{"slide-ux/components/component":39}],49:[function(require,module,exports){
var Component, PersonalInfoIntro,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Component = require('slide-ux/components/component');

module.exports = PersonalInfoIntro = (function(superClass) {
  extend(PersonalInfoIntro, superClass);

  function PersonalInfoIntro($el, data) {
    PersonalInfoIntro.__super__.constructor.call(this, data);
    data.organization = "Arizona Public Service";
    data.name = aristotle.localStorageProxy.name;
    this.$node = $(jadeTemplate['slide-ux/components/personal-info-intro'](data));
    this.superInit($el, this.$node, data);
  }

  return PersonalInfoIntro;

})(Component);

},{"slide-ux/components/component":39}],50:[function(require,module,exports){
var Question,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

module.exports = Question = (function() {
  function Question($parent, data, questionValue, answerCallback) {
    this.$parent = $parent;
    this.data = data;
    this.questionValue = questionValue != null ? questionValue : 120;
    this.answerCallback = answerCallback;
    this.onAnswerClick = bind(this.onAnswerClick, this);
    PubSub.publish('meta.quiz.question.start', {
      id: this.data.index + 1
    });
    this.rightGuesses = 0;
    this.wrongGuesses = 0;
    this.runningTotal = 0;
    this.setAnswerValues();
  }

  Question.prototype.build = function() {
    this.$node = $(jadeTemplate['slide-ux/components/quiz/question'](this.data));
    this.$parent.prepend(this.$node);
    this.$questionTotal = $("#question-total", this.$node);
    shadowIconsInstance.svgReplaceWithString(pxSvgIconString, this.$node);
    return $(".answer-wrapper", this.$node).on("click", this.onAnswerClick);
  };

  Question.prototype.onAnswerClick = function(e) {
    var $el, $response, guessedRight;
    if (this.complete) {
      return;
    }
    $el = $(e.currentTarget);
    $el.addClass("flipped");
    $response = $(".response", e.currentTarget);
    guessedRight = $response.hasClass('right');
    PubSub.publish('meta.quiz.question.answer', {
      id: this.data.index + 1,
      answer: $(".front .txt", $(e.currentTarget)).text()
    });
    if (guessedRight) {
      this.rightGuesses++;
    } else {
      this.wrongGuesses++;
    }
    if (this.data.gimee) {
      this.answeredGimee($el);
    } else {
      this.answeredNormal(guessedRight, $el);
    }
    return this.answerCallback(this.complete);
  };

  Question.prototype.answeredGimee = function($answer) {
    this.runningTotal = this.questionValue;
    this.showAnswerPoints(this.questionValue, "right", $answer);
    return this.setQuestionComplete();
  };

  Question.prototype.answeredNormal = function(guessedRight, $answer) {
    if (guessedRight) {
      this.runningTotal += this.rightAnswerValue;
      this.showAnswerPoints(this.rightAnswerValue, "right", $answer);
    } else {
      this.runningTotal -= this.wrongAnswerValue;
      this.showAnswerPoints(this.wrongAnswerValue, "wrong", $answer);
    }
    if (this.rightPossible === this.rightGuesses) {
      return this.setQuestionComplete();
    }
  };

  Question.prototype.setAnswerValues = function() {
    this.countPossibleRightsAndWrongs();
    this.rightAnswerValue = Math.round(this.questionValue / this.rightPossible);
    if (this.wrongPossible === 0) {
      return this.wrongAnswerValue = 0;
    } else {
      return this.wrongAnswerValue = Math.round((this.questionValue / 2) / this.wrongPossible);
    }
  };

  Question.prototype.countPossibleRightsAndWrongs = function() {
    var answer, i, len, ref, results;
    this.wrongPossible = 0;
    this.rightPossible = 0;
    ref = this.data.answers;
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      answer = ref[i];
      if (answer.c) {
        results.push(this.rightPossible++);
      } else {
        results.push(this.wrongPossible++);
      }
    }
    return results;
  };

  Question.prototype.setQuestionComplete = function() {
    this.complete = true;
    this.$node.addClass("complete");
    return PubSub.publish('meta.quiz.question.finish', {
      id: this.data.index + 1,
      score: this.pointsEarned()
    });
  };

  Question.prototype.getName = function() {
    if (this.name != null) {
      return this.name;
    } else {
      return "Question " + (this.data.index + 1);
    }
  };

  Question.prototype.getScore = function() {
    return (this.pointsEarned()) + "/" + this.questionValue;
  };

  Question.prototype.pointsEarned = function() {
    return this.questionValue - (this.wrongAnswerValue * this.wrongGuesses);
  };

  Question.prototype.isPerfect = function() {
    return this.wrongGuesses === 0;
  };

  Question.prototype.showAnswerPoints = function(points, result, $answer) {
    var $node;
    $node = $(jadeTemplate['slide-ux/components/quiz/points-float']({
      points: points,
      result: result
    }));
    $answer.append($node);
    $node.velocity({
      opacity: 1,
      top: -35
    }, {
      duration: 1000,
      easing: "easeinoutquint"
    });
    return this.$questionTotal.html(this.runningTotal);
  };

  Question.prototype.destroy = function() {
    return this.$node.remove();
  };

  return Question;

})();

},{}],51:[function(require,module,exports){
var Component, Question, Quiz, Sequence,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Component = require('slide-ux/components/component');

Question = require('slide-ux/components/quiz/question');

Sequence = require('misc/sequence');

module.exports = Quiz = (function(superClass) {
  extend(Quiz, superClass);

  function Quiz($el1, data1) {
    this.$el = $el1;
    this.data = data1;
    this.onNextClick = bind(this.onNextClick, this);
    this.onQuestionAnswered = bind(this.onQuestionAnswered, this);
    Quiz.__super__.constructor.call(this, this.data);
    PubSub.publish("chrome.hide");
    PubSub.publish("ctanlee.hide");
    this.loadJson("~l/" + (aristotle.globals.get('quizDir')) + "/" + this.data.source + ".json");
  }

  Quiz.prototype.loadJson = function(path) {
    return aristotle.getJson(aristotle.getAssetPath(path), (function(_this) {
      return function(data) {
        return _this.build(data.config);
      };
    })(this));
  };

  Quiz.prototype.build = function(data) {
    this.setChoicePercentages();
    this.$node = $(jadeTemplate['slide-ux/components/quiz/quiz'](data));
    this.createQuiz($(".questions", this.$node), data);
    this.$nextBtn = $(".next-btn", this.$node);
    this.$nextBtn.on("click", this.onNextClick);
    this.hideNext();
    return this.superInit(this.$el, this.$node, this.data);
  };

  Quiz.prototype.setChoicePercentages = function() {
    var choice, choices, j, len1, ref;
    choices = [];
    ref = aristotle.globals.get("episode" + aristotle.episodeNum + "_choices");
    for (j = 0, len1 = ref.length; j < len1; j++) {
      choice = ref[j];
      choices.push(choice.id);
    }
    return apiProxy.getChoicePercentages(choices, (function(_this) {
      return function(results) {
        var category, error, error1, k, len2, results1, selection, userChoice;
        if (!results) {
          return _this.decisionPercentages = false;
        } else {
          try {
            _this.decisionPercentages = [];
            results1 = [];
            for (k = 0, len2 = results.length; k < len2; k++) {
              category = results[k];
              results1.push((function() {
                var l, len3, ref1, results2;
                ref1 = category.Breakdowns;
                results2 = [];
                for (l = 0, len3 = ref1.length; l < len3; l++) {
                  selection = ref1[l];
                  results2.push((function() {
                    var len4, m, ref2, results3;
                    ref2 = aristotle.globals.get("episode" + aristotle.episodeNum + "_choices");
                    results3 = [];
                    for (m = 0, len4 = ref2.length; m < len4; m++) {
                      userChoice = ref2[m];
                      if (userChoice.choice === selection.Selection) {
                        results3.push(this.decisionPercentages.push({
                          popularPercentage: Math.round(selection.PercentOfTotal * 100),
                          choice: selection.Selection,
                          category: category.ChoiceName
                        }));
                      } else {
                        results3.push(void 0);
                      }
                    }
                    return results3;
                  }).call(this));
                }
                return results2;
              }).call(_this));
            }
            return results1;
          } catch (error1) {
            error = error1;
            return _this.decisionPercentages = false;
          }
        }
      };
    })(this));
  };

  Quiz.prototype.createQuiz = function($el, data) {
    var i, j, len1, questionData, questionValue, questions, ref, value;
    PubSub.publish('meta.quiz.start');
    questions = [];
    questionValue = data["question-value"];
    ref = data.questions;
    for (i = j = 0, len1 = ref.length; j < len1; i = ++j) {
      questionData = ref[i];
      questionData.index = i;
      value = questionData.value != null ? questionData.value : questionValue;
      questions.push(new Question($el, questionData, value, this.onQuestionAnswered));
    }
    this.questions = new Sequence(questions);
    return this.showCurrentQuestion();
  };

  Quiz.prototype.showCurrentQuestion = function() {
    this.currentQuestion = this.questions.currentItem();
    return this.currentQuestion.build();
  };

  Quiz.prototype.onQuestionAnswered = function(completed) {
    if (completed) {
      return this.showNext();
    }
  };

  Quiz.prototype.onNextClick = function() {
    this.hideNext();
    this.currentQuestion.destroy();
    if (this.questions.isAtLastItem()) {
      return this.showResults();
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

  Quiz.prototype.reset = function() {
    this.$node.remove();
    this.build(this.data);
    this.$el.append(this.$node);
    return shadowIconsInstance.svgReplaceWithString(pxSvgIconString, this.$node);
  };

  Quiz.prototype.showResults = function() {
    var data;
    PubSub.publish('meta.quiz.finish');
    $('body').addClass('body-quiz-results');
    this.$node.remove();
    data = this.getResults();
    this.$node = $(jadeTemplate['slide-ux/components/quiz/quiz-results'](this.getResults()));
    shadowIconsInstance.svgReplaceWithString(pxSvgIconString, this.$node);
    $("#continue", this.$node).on("click", (function(_this) {
      return function() {
        $('body').removeClass('body-quiz-results');
        return PubSub.publish('slides.next-slide');
      };
    })(this));
    return this.$el.append(this.$node);
  };

  Quiz.prototype.getResults = function() {
    var answers, j, len1, obj, question, ref, ref1, totalPointsEarned, totalPointsPossible;
    obj = {};
    obj.episodeNumber = aristotle.episodeNum;
    totalPointsPossible = 0;
    totalPointsEarned = 0;
    answers = [];
    ref = this.questions.items;
    for (j = 0, len1 = ref.length; j < len1; j++) {
      question = ref[j];
      totalPointsPossible += question.questionValue;
      totalPointsEarned += question.pointsEarned();
      answers.push({
        name: question.getName(),
        score: question.getScore(),
        isPerfect: question.isPerfect()
      });
    }
    if (this.decisionPercentages == null) {
      this.decisionPercentages = [];
    }
    ref1 = this.splitArrayInHalf(answers), obj.answers1 = ref1[0], obj.answers2 = ref1[1];
    obj.score = totalPointsEarned + " / " + totalPointsPossible;
    obj.scorePercentage = (totalPointsEarned / totalPointsPossible) * 100;
    obj.decisions = this.decisionPercentages;
    return obj;
  };

  Quiz.prototype.splitArrayInHalf = function(ar) {
    var len;
    len = Math.ceil(ar.length / 2);
    return [ar.slice(0, len), ar.slice(len)];
  };

  return Quiz;

})(Component);

},{"misc/sequence":29,"slide-ux/components/component":39,"slide-ux/components/quiz/question":50}],52:[function(require,module,exports){
var Component, SelectionDialogue,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Component = require('slide-ux/components/component');

module.exports = SelectionDialogue = (function(superClass) {
  extend(SelectionDialogue, superClass);

  function SelectionDialogue($el, data) {
    var $right, jadeData;
    SelectionDialogue.__super__.constructor.call(this, data);
    if (data.meta == null) {
      aristotle["throw"]("Selection dialogue doesn't have any meta data!");
    }
    this.$node = $(jadeTemplate['slide-ux/components/dialogue/selection-dialogue']());
    jadeData = this.generateConfigData(data);
    this.$left = $(jadeTemplate['slide-ux/components/dialogue/dialogue-details'](jadeData));
    $right = $(jadeTemplate['slide-ux/components/dialogue/dialogue-buttons'](jadeData));
    this.$left.addClass("hidden");
    this.$node.append(this.$left);
    this.$node.append($right);
    this.addEventListeners(this.$node, data);
    this.metaTitle = data.meta.title;
    if (this.metaTitle === 'fake') {
      this.$node.css({
        "pointer-events": "none"
      });
    } else {
      PubSub.publish('meta.choice.start', {
        id: data.meta.title
      });
    }
    this.superInit($el, this.$node, data);
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
        $targ = $(e.currentTarget);
        return _this.activateItem($targ, _this.items[$targ.attr('id')]);
      };
    })(this));
    return $("#action-btn", $el).on("click", (function(_this) {
      return function(e) {
        aristotle.commander["do"](data.click);
        PubSub.publish('meta.choice.finish', {
          id: data.meta.title,
          choice: aristotle.dictionary.get(aristotle.globals.get(data.meta.choice))
        });
        return _this.destroy();
      };
    })(this));
  };

  SelectionDialogue.prototype.activateItem = function($button, item) {
    if (this.activeItem === item.btnTxt) {
      return;
    }
    this.activeItem = item.btnTxt;
    PubSub.publish('meta.activity', {
      activity: "Click " + item.btnTxt,
      id: this.metaTitle
    });
    this.$left.removeClass("hidden");
    $(".item-info", this.$node).css({
      display: "block"
    });
    $(".button", this.$node).removeClass("active");
    $button.addClass("active");
    $(".icon", this.$node).removeClass("active");
    $("#icon-" + item.id, this.$node).addClass("active");
    $(".blurb", this.$node).html(item.blurb);
    $(".details", this.$node).html(item.details);
    $(".quote", this.$node).html(item.quote);
    return aristotle.commander["do"](item.click);
  };

  return SelectionDialogue;

})(Component);

},{"slide-ux/components/component":39}],53:[function(require,module,exports){
var Component, SimpleSelection,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Component = require('slide-ux/components/component');

module.exports = SimpleSelection = (function(superClass) {
  extend(SimpleSelection, superClass);

  function SimpleSelection($el, data) {
    var $right, jadeData;
    SimpleSelection.__super__.constructor.call(this, data);
    jadeData = this.generateConfigData(data);
    this.$node = $(jadeTemplate['slide-ux/components/dialogue/selection-dialogue']());
    $right = $(jadeTemplate['slide-ux/components/dialogue/dialogue-buttons'](jadeData));
    this.$node.append($right);
    this.addEventListeners(this.$node, data);
    this.superInit($el, this.$node, data);
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
        $targ = $(e.currentTarget);
        data = _this.items[$targ.attr('id')];
        return aristotle.commander["do"](data.click);
      };
    })(this));
  };

  return SimpleSelection;

})(Component);

},{"slide-ux/components/component":39}],54:[function(require,module,exports){
var Component, SoundTest,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Component = require('slide-ux/components/component');

module.exports = SoundTest = (function(superClass) {
  extend(SoundTest, superClass);

  function SoundTest($el, data) {
    SoundTest.__super__.constructor.call(this, data);
    this.$node = $(jadeTemplate['slide-ux/components/sound-test'](data));
    this.superInit($el, this.$node, data);
    $("#sound-test", this.$node).on("click", function(e) {
      PubSub.publish('playsound', {
        content: data.sound
      });
      return PubSub.publish('meta.activity', {
        activity: "Play Test Sound"
      });
    });
  }

  SoundTest.prototype.destroy = function() {
    PubSub.unsubscribe(this.soundListen);
    return SoundTest.__super__.destroy.call(this);
  };

  return SoundTest;

})(Component);

},{"slide-ux/components/component":39}],55:[function(require,module,exports){
var Component, TrainingComplete,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Component = require('slide-ux/components/component');

module.exports = TrainingComplete = (function(superClass) {
  extend(TrainingComplete, superClass);

  function TrainingComplete($el, data) {
    TrainingComplete.__super__.constructor.call(this, data);
    this.$node = $(jadeTemplate['slide-ux/components/training-complete']({}));
    $el.append(this.$node);
    this.superInit($el, this.$node, data);
  }

  return TrainingComplete;

})(Component);

},{"slide-ux/components/component":39}],56:[function(require,module,exports){
var ClosedCaption;

module.exports = ClosedCaption = (function() {
  function ClosedCaption($parent, playNextAction) {
    var ccWasOn, token7, token8;
    this.playNextAction = playNextAction;
    this.$el = $(jadeTemplate['slide-ux/text-dialogue/closed-caption']({}));
    $parent.append(this.$el);
    shadowIconsInstance.svgReplaceWithString(pxSvgIconString, this.$el);
    token7 = PubSub.subscribe('cc.on', (function(_this) {
      return function(a, data) {
        return _this.enableCc();
      };
    })(this));
    token8 = PubSub.subscribe('cc.off', (function(_this) {
      return function(a, data) {
        return _this.disableCc();
      };
    })(this));
    this.ccDisplay = $(".closed-caption", this.$el);
    this.$speechBox = $(".text", this.$el);
    this.hideText();
    this.$icon = $(".closed-caption-icon");
    this.$icon.on('click', (function(_this) {
      return function(e) {
        return _this.toggleClosedCaptioning();
      };
    })(this));
    ccWasOn = aristotle.globals.get('ccIsOn', false);
    if (ccWasOn != null) {
      if (!ccWasOn) {
        this.turnCcOff();
      } else {
        this.turnCcOn();
      }
    } else {
      this.turnCcOn();
    }
  }

  ClosedCaption.prototype.toggleClosedCaptioning = function() {
    if (this.ccIsOn) {
      this.turnCcOff();
    } else {
      this.turnCcOn();
    }
    return aristotle.globals.set("ccIsOn", this.ccIsOn);
  };

  ClosedCaption.prototype.turnCcOff = function() {
    this.ccIsOn = false;
    this.$icon.addClass('off');
    return PubSub.publish('cc.off');
  };

  ClosedCaption.prototype.turnCcOn = function() {
    this.ccIsOn = true;
    this.$icon.removeClass('off');
    return PubSub.publish('cc.on');
  };

  ClosedCaption.prototype.say = function(text, txtPos) {
    this.showText();
    return this.$speechBox.html("<div class='" + this.character + "'><span>" + this.character + "</span>" + text + "</div>");
  };

  ClosedCaption.prototype.special = function(data) {
    if (data.actor != null) {
      return this.character = data.actor;
    } else {
      return this.character = 'ctanlee';
    }
  };

  ClosedCaption.prototype.showText = function() {
    return this.ccDisplay.removeClass("hidden");
  };

  ClosedCaption.prototype.hideText = function() {
    return this.ccDisplay.addClass("hidden");
  };

  ClosedCaption.prototype.enableCc = function() {
    return this.ccDisplay.removeClass("disabled");
  };

  ClosedCaption.prototype.disableCc = function() {
    return this.ccDisplay.addClass("disabled");
  };

  ClosedCaption.prototype.showNext = function() {};

  ClosedCaption.prototype.hideNext = function() {};

  ClosedCaption.prototype.startTalking = function() {};

  ClosedCaption.prototype.stopTalking = function() {};

  ClosedCaption.prototype.complete = function() {
    return this.sleep();
  };

  ClosedCaption.prototype.sleep = function() {
    return this.hideText();
  };

  ClosedCaption.prototype.destroy = function() {};

  return ClosedCaption;

})();

},{}],57:[function(require,module,exports){
var Animation, Ctanlee;

Animation = require('movie/svg-animation');

module.exports = Ctanlee = (function() {
  function Ctanlee($parent, playNextAction) {
    var token1, token2, token3, token4, token5, token6, token7, token8;
    this.playNextAction = playNextAction;
    this.$el = $(jadeTemplate['slide-ux/text-dialogue/ctanlee']({}));
    shadowIconsInstance.svgReplaceWithString(pxSvgIconString, this.$el);
    this.$speechBox = $(".speech-box", this.$el);
    this.$text = $(".text", this.$speechBox);
    this.$textContent = $("span.content", this.$text);
    this.$nextBtn = $("span.next", this.$text);
    this.$faceHolder = $(".face", this.$el);
    this.$nextBtn.on("click", (function(_this) {
      return function(e) {
        return _this.playNextAction();
      };
    })(this));
    token1 = PubSub.subscribe('ctanlee.hide', (function(_this) {
      return function(a, data) {
        return _this.$el.addClass("hidden");
      };
    })(this));
    token2 = PubSub.subscribe('ctanlee.show', (function(_this) {
      return function(a, data) {
        return _this.$el.removeClass("hidden");
      };
    })(this));
    token3 = PubSub.subscribe('ctanlee.clear', (function(_this) {
      return function(a, data) {
        return _this.hideText();
      };
    })(this));
    token4 = PubSub.subscribe('ctanlee.gohome', (function(_this) {
      return function(a, data) {
        return _this.returnToStation();
      };
    })(this));
    token5 = PubSub.subscribe('ctanlee.goto', (function(_this) {
      return function(a, data) {
        return _this.goto(data);
      };
    })(this));
    token6 = PubSub.subscribe('ctanlee.stop', (function(_this) {
      return function(a, data) {
        return _this.$faceHolder.velocity("stop", true);
      };
    })(this));
    token7 = PubSub.subscribe('cc.on', (function(_this) {
      return function(a, data) {
        return _this.enableCc();
      };
    })(this));
    token8 = PubSub.subscribe('cc.off', (function(_this) {
      return function(a, data) {
        return _this.disableCc();
      };
    })(this));
    this.tokens = [token1, token2, token3, token4, token5, token6, token7, token8];
    $parent.append(this.$el);
    this.returnToStation();
  }

  Ctanlee.prototype.say = function(text, txtPos, pos) {
    this.showText();
    this.$textContent.html(text);
    return this.setTextPosition(txtPos);
  };

  Ctanlee.prototype.startTalking = function() {
    this.isTalking = true;
    return this.bounce();
  };

  Ctanlee.prototype.stopTalking = function() {
    this.isTalking = false;
    clearTimeout(this.timeout);
    this.$currentAnimDiv.stop(true);
    return this.$currentAnimDiv.velocity({
      scale: 1
    }, {
      duration: 300,
      easing: 'easeinoutquint'
    });
  };

  Ctanlee.prototype.bounce = function() {
    var duration, timoutDur;
    duration = 500 + Math.random() * 300;
    timoutDur = duration * (Math.random() / 1.3);
    if (Math.random() > 0.8) {
      timoutDur += 600;
    }
    return this.timeout = setTimeout((function(_this) {
      return function() {
        var scale;
        scale = 0.8 + (Math.random() / 3);
        _this.$currentAnimDiv.stop(true);
        _this.$currentAnimDiv.css({
          transform: "scale(" + scale + ")"
        });
        _this.$currentAnimDiv.velocity({
          scale: scale
        }, {
          duration: 0
        });
        _this.$currentAnimDiv.velocity({
          scale: 1
        }, {
          delay: 10,
          duration: duration,
          easing: [500, 15]
        });
        if (_this.isTalking) {
          return _this.bounce();
        }
      };
    })(this), timoutDur);
  };

  Ctanlee.prototype.special = function(data) {
    if (data.pos != null) {
      this.goto(data);
    }
    if ((data.emo != null) || (this.$currentAnimDiv == null)) {
      return this.setEmotion(data.emo);
    } else {
      return this.setEmotion("idle");
    }
  };

  Ctanlee.prototype.showText = function() {
    return this.$speechBox.removeClass("hidden");
  };

  Ctanlee.prototype.hideText = function() {
    return this.$speechBox.addClass("hidden");
  };

  Ctanlee.prototype.showNext = function() {
    return this.$nextBtn.removeClass("hidden");
  };

  Ctanlee.prototype.hideNext = function() {
    return this.$nextBtn.addClass("hidden");
  };

  Ctanlee.prototype.enableCc = function() {
    return this.$speechBox.removeClass("disabled");
  };

  Ctanlee.prototype.disableCc = function() {
    return this.$speechBox.addClass("disabled");
  };

  Ctanlee.prototype.complete = function() {
    return this.returnToStation();
  };

  Ctanlee.prototype.sleep = function() {
    return this.returnToStation();
  };

  Ctanlee.prototype.setEmotion = function(emotion) {
    var data, path, resetDuration;
    resetDuration = 100;
    this.resetRotation(resetDuration);
    this.$oldAnimDiv = this.$currentAnimDiv;
    this.$currentAnimDiv = $('<div class="animation"/>');
    this.$faceHolder.append(this.$currentAnimDiv);
    switch (emotion) {
      case "angry":
        path = 'ctanlee-angry.json';
        break;
      case "happy":
        path = 'ctanlee-happy.json';
        break;
      case "idle":
        path = 'ctanlee-idle.json';
        break;
      case "down":
        path = 'ctanlee-look-down.json';
        break;
      case "left":
        path = 'ctanlee-look-left.json';
        break;
      case "right":
        path = 'ctanlee-look-right.json';
        break;
      case "surprise":
        path = 'ctanlee-surprise.json';
        break;
      case "unhappy":
        path = 'ctanlee-unhappy.json';
        break;
      default:
        path = 'ctanlee-idle.json';
    }
    path = aristotle.getAssetPath("~g/ctanlee/" + path);
    this.oldAnimation = this.animation;
    data = {
      delay: resetDuration,
      nativeEvents: {
        data_ready: (function(_this) {
          return function() {
            return _this.destroyOldFace();
          };
        })(this),
        complete: (function(_this) {
          return function() {
            return _this.idle();
          };
        })(this)
      }
    };
    return this.animation = new Animation(this.$currentAnimDiv, path, data);
  };

  Ctanlee.prototype.destroyOldFace = function() {
    if (this.oldAnimation != null) {
      this.oldAnimation.destroy();
      this.$oldAnimDiv.remove();
      this.$oldAnimDiv = null;
      return this.oldAnimation = null;
    }
  };

  Ctanlee.prototype.resetRotation = function(time) {
    if (time == null) {
      time = 100;
    }
    this.$faceHolder.velocity("stop", true);
    return this.$faceHolder.velocity({
      rotateZ: 0
    }, {
      duration: time
    });
  };

  Ctanlee.prototype.idle = function() {
    return this.$faceHolder.velocity({
      rotateZ: 360
    }, {
      duration: 10000,
      loop: true,
      easing: 'linear'
    });
  };

  Ctanlee.prototype.gotoPos = function(x, y, duration, delay) {
    if (x == null) {
      x = 988;
    }
    if (y == null) {
      y = 34;
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

  Ctanlee.prototype.returnToStation = function() {
    this.hideText();
    this.gotoPos();
    return this.setFilter('glow');
  };

  Ctanlee.prototype.setFilter = function(kind) {
    return $('#ctanlee').css({
      filter: "url('#" + kind + "')"
    });
  };

  Ctanlee.prototype.setTextPosition = function(pos) {
    var i, item, len, results;
    this.$text.removeClass("top left");
    if (pos == null) {
      return;
    }
    if (Array.isArray(pos)) {
      results = [];
      for (i = 0, len = pos.length; i < len; i++) {
        item = pos[i];
        results.push(this.$text.addClass(item));
      }
      return results;
    } else {
      return this.$text.addClass(pos);
    }
  };

  Ctanlee.prototype.destroy = function() {
    var i, len, ref, results, token;
    this.$el.velocity("stop", true);
    this.$faceHolder.velocity("stop", true);
    this.$el.empty();
    ref = this.tokens;
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      token = ref[i];
      results.push(PubSub.unsubscribe(token));
    }
    return results;
  };

  return Ctanlee;

})();

},{"movie/svg-animation":37}],58:[function(require,module,exports){
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
      return function(m, data) {
        if (data != null) {
          return _this.showContinueStrip(data.css);
        } else {
          return _this.showContinueStrip();
        }
      };
    })(this));
  }

  GenericUi.prototype.showContinueStrip = function(cssClasses) {
    this.$continueStrip.removeClass("hidden");
    if (cssClasses != null) {
      this.addedClasses = cssClasses;
      return this.$continueStrip.addClass(this.addedClasses);
    } else {
      return this.addedClasses = null;
    }
  };

  GenericUi.prototype.hideContinueStrip = function() {
    this.$continueStrip.addClass("hidden");
    if (this.addedClasses != null) {
      return this.$continueStrip.removeClass(this.addedClasses);
    }
  };

  GenericUi.prototype.destroy = function() {};

  return GenericUi;

})();

},{}],59:[function(require,module,exports){
var Labler;

module.exports = Labler = (function() {
  function Labler() {
    this.count = 0;
    this.token1 = PubSub.subscribe('label.attach', (function(_this) {
      return function(m, data) {
        return _this.attachLabel(data);
      };
    })(this));
    this.token2 = PubSub.subscribe('label.destroy', (function(_this) {
      return function(m, data) {
        return _this.destroyLabel(data);
      };
    })(this));
  }

  Labler.prototype.attachLabel = function(data) {
    var $label;
    if ($(".label-wrapper", data.el).length !== 0) {
      return;
    }
    if (data.content.id == null) {
      data.content.id = "_label" + (this.count++);
    }
    $label = $(jadeTemplate['slide-ux/label'](data.content));
    $label.addClass("attached");
    return data.el.append($label);
  };

  Labler.prototype.destroyLabel = function($el) {
    return $(".label-wrapper", $el).velocity({
      opacity: 0
    }, {
      duration: 150,
      complete: function() {
        return $(this).remove();
      }
    });
  };

  Labler.prototype.destroy = function() {
    PubSub.unsubscribe(this.token1);
    return PubSub.unsubscribe(this.token2);
  };

  return Labler;

})();

},{}],60:[function(require,module,exports){
var CallSignSelect, DefenderCards, Dialogue, DialoguePage, Duties, EpisodeIntro, EpisodeOutro, ExploreCards, GenericUiElements, GhostUX, GutCheck, Labler, PersonalInfoIntro, Quiz, SelectionDialogue, SimpleSelection, SlideUX, SoundTest, TextDialogue, TrainingComplete;

CallSignSelect = require('slide-ux/components/call-sign-select');

TextDialogue = require('slide-ux/text-dialogue');

DefenderCards = require('slide-ux/components/defender-cards');

Dialogue = require('slide-ux/components/dialogue');

DialoguePage = require('slide-ux/components/dialogue-page');

Duties = require('slide-ux/components/duties');

EpisodeIntro = require('slide-ux/components/episode-intro');

EpisodeOutro = require('slide-ux/components/episode-outro');

ExploreCards = require('slide-ux/components/explore-cards');

GhostUX = require('slide-ux/components/ghost-ux');

GutCheck = require('slide-ux/components/gut-check');

Labler = require('slide-ux/labler');

PersonalInfoIntro = require('slide-ux/components/personal-info-intro');

Quiz = require('slide-ux/components/quiz/quiz');

SelectionDialogue = require('slide-ux/components/selection-dialogue');

SimpleSelection = require('slide-ux/components/simple-selection');

SoundTest = require('slide-ux/components/sound-test');

TrainingComplete = require('slide-ux/components/training-complete');

GenericUiElements = require('slide-ux/generic-ui');

module.exports = SlideUX = (function() {
  function SlideUX($el) {
    this.$el = $el;
    this.components = [];
    this.labler = new Labler();
    this.dialogue = new TextDialogue(this.$el, this.ctanlee);
    this.genericUi = new GenericUiElements(this.$el);
  }

  SlideUX.prototype.populate = function(data) {
    var component, i, len, ref, results;
    this.removeCurrentComponents();
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
      case "call-sign-select":
        component = new CallSignSelect(this.$el, componentData.config);
        break;
      case "defender-cards":
        component = new DefenderCards(this.$el, componentData.config);
        break;
      case "dialogue":
        component = new Dialogue(this.$el, componentData.config);
        break;
      case "duties":
        component = new Duties(this.$el, componentData.config);
        break;
      case "dialogue-page":
        component = new DialoguePage(this.$el, componentData.config);
        break;
      case "episode-intro":
        component = new EpisodeIntro(this.$el, componentData.config);
        break;
      case "episode-outro":
        component = new EpisodeOutro(this.$el, componentData.config);
        break;
      case "explore-cards":
        component = new ExploreCards(this.$el, componentData.config);
        break;
      case "ghost-ux":
        component = new GhostUX(this.$el, componentData.config);
        break;
      case "gut-check":
        component = new GutCheck(this.$el, componentData.config);
        break;
      case "personal-info-intro":
        component = new PersonalInfoIntro(this.$el, componentData.config);
        break;
      case "selection-dialogue":
        component = new SelectionDialogue(this.$el, componentData.config);
        break;
      case "simple-selection":
        component = new SimpleSelection(this.$el, componentData.config);
        break;
      case "sound-test":
        component = new SoundTest(this.$el, componentData.config);
        break;
      case "training-complete":
        component = new TrainingComplete(this.$el, componentData.config);
        break;
      case "quiz":
        component = new Quiz(this.$el, componentData.config);
        break;
      default:
        aristotle["throw"]("tried to create an unrecognized component type: `" + componentData.kind + "`");
        return null;
    }
    return component;
  };

  SlideUX.prototype.removeCurrentComponents = function() {
    var component, i, len, ref;
    ref = this.components;
    for (i = 0, len = ref.length; i < len; i++) {
      component = ref[i];
      component.destroy();
    }
    return this.components = [];
  };

  SlideUX.prototype.destroy = function() {
    this.removeCurrentComponents();
    this.labler.destroy();
    this.dialogue.destroy();
    return this.genericUi.destroy();
  };

  return SlideUX;

})();

},{"slide-ux/components/call-sign-select":38,"slide-ux/components/defender-cards":40,"slide-ux/components/dialogue":42,"slide-ux/components/dialogue-page":41,"slide-ux/components/duties":43,"slide-ux/components/episode-intro":44,"slide-ux/components/episode-outro":45,"slide-ux/components/explore-cards":46,"slide-ux/components/ghost-ux":47,"slide-ux/components/gut-check":48,"slide-ux/components/personal-info-intro":49,"slide-ux/components/quiz/quiz":51,"slide-ux/components/selection-dialogue":52,"slide-ux/components/simple-selection":53,"slide-ux/components/sound-test":54,"slide-ux/components/training-complete":55,"slide-ux/generic-ui":58,"slide-ux/labler":59,"slide-ux/text-dialogue":61}],61:[function(require,module,exports){
var AudioTrack, ClosedCaption, Ctanlee, Sequence, TextDialogue;

AudioTrack = require('episode/audio-track');

Sequence = require('misc/sequence');

Ctanlee = require('slide-ux/dialogue-actors/ctanlee');

ClosedCaption = require('slide-ux/dialogue-actors/closed-caption');

module.exports = TextDialogue = (function() {
  function TextDialogue($parent) {
    var token1, token2, token3, token4, token5, token6, token7, token8;
    aristotle.dialogue = this;
    this.cc = new ClosedCaption($parent, this.playNextAction);
    this.ctanlee = new Ctanlee($parent, this.playNextAction);
    if (!aristotle.globals.get("ccIsOn", false)) {
      this.cc.disableCc();
      this.ctanlee.disableCc();
    }
    if (aristotle.isDevMode) {
      $('html').on("keydown", (function(_this) {
        return function(e) {
          if (e.which === 39) {
            return _this.playNextAction();
          }
        };
      })(this));
    }
    token1 = PubSub.subscribe('ctanlee.activate', (function(_this) {
      return function(a, data) {
        return _this.playAction(data);
      };
    })(this));
    token2 = PubSub.subscribe('ctanlee.add-event-listener', (function(_this) {
      return function(a, data) {
        return _this.addEventListener(data);
      };
    })(this));
    token3 = PubSub.subscribe('dialogue.activate', (function(_this) {
      return function(a, data) {
        return _this.playAction(data);
      };
    })(this));
    token4 = PubSub.subscribe('dialogue.add-event-listener', (function(_this) {
      return function(a, data) {
        return _this.addEventListener(data);
      };
    })(this));
    token5 = PubSub.subscribe('vcr.pause', (function(_this) {
      return function(a, data) {
        return _this.pauseTimeline();
      };
    })(this));
    token6 = PubSub.subscribe('vcr.play', (function(_this) {
      return function(a, data) {
        return _this.playTimeline();
      };
    })(this));
    token7 = PubSub.subscribe('vcr.replay', (function(_this) {
      return function(a, data) {
        return _this.replayTimeline();
      };
    })(this));
    token8 = PubSub.subscribe('dialogue.shh', (function(_this) {
      return function(a, data) {
        return _this.killTalking();
      };
    })(this));
    this.tokens = [token1, token2, token3, token4, token5, token6, token7, token8];
  }

  TextDialogue.prototype.activate = function(data1) {
    var item, j, len, ref;
    this.data = data1;
    if (this.data.timeline == null) {
      return;
    }
    this.timeline = [];
    ref = this.data.timeline;
    for (j = 0, len = ref.length; j < len; j++) {
      item = ref[j];
      this.timeline.push(item);
    }
    log("Activating new Dialogue Timeline with " + this.timeline.length + " items");
    this.sequence = new Sequence(this.timeline);
    return this.playAction(this.sequence.getCurrentItem().action);
  };

  TextDialogue.prototype.say = function(text, audio, next, txtPos) {
    log("Speaking: ");
    if (text != null) {
      this.actor.say(text, txtPos);
      this.actor.startTalking();
    } else {
      this.actor.hideText();
    }
    if (audio != null) {
      log("  -> audio detected");
      if (this.track != null) {
        log("  -> destroyed previous track : " + this.track.id + " (unusual)");
        this.track.stop();
        this.track.destroy();
      }
      this.track = new AudioTrack(audio);
      log("  -> track" + this.track.id + " : has been initialized : " + this.track.src);
      if (this.track !== false) {
        log("  -> track" + this.track.id + " : is playing");
        this.track.play({}, (function(_this) {
          return function() {
            if (_this.track == null) {
              log("  -> on track complete, track didn't exist and the next action was fired (unusual)");
              _this.playNextAction();
              return;
            }
            log("  -> track" + _this.track.id + " : is complete, destroying");
            _this.track.destroy();
            _this.track = null;
            _this.actor.stopTalking();
            _this.actor.hideText();
            if (next === 'audio') {
              log("  -> the `next` of the track we just destroyed was `audio`, playing next action");
              return _this.playNextAction();
            } else if (typeof next === "object") {
              log("  -> the next of the track we just destroyed was a command, running now.");
              return aristotle.commander["do"](next);
            }
          };
        })(this));
      } else {
        log(" ! Track was false for some reason ");
        if (next === 'audio') {
          log(" ! Playing next");
          this.playNextAction();
        } else if (typeof next === "object") {
          log(" ! Running Command");
          aristotle.commander["do"](next);
        }
      }
    }
    if (next === 'click') {
      this.actor.showNext();
    } else {
      this.actor.hideNext();
    }
    if (next === 'audio' && (audio == null)) {
      this.playNextAction();
    }
    if (typeof next === "number") {
      return aristotle.timeout((function(_this) {
        return function() {
          return _this.playNextAction();
        };
      })(this), next);
    }
  };

  TextDialogue.prototype.pauseTimeline = function() {
    var ref, ref1;
    if ((ref = this.track) != null) {
      ref.sound.paused = true;
    }
    if ((ref1 = this.actor) != null) {
      ref1.stopTalking();
    }
    return PubSub.publish("timers.pause");
  };

  TextDialogue.prototype.playTimeline = function() {
    var ref, ref1;
    if ((ref = this.track) != null) {
      ref.sound.paused = false;
    }
    if ((ref1 = this.actor) != null) {
      ref1.startTalking();
    }
    return PubSub.publish("timers.resume");
  };

  TextDialogue.prototype.replayTimeline = function() {
    var ref;
    if ((ref = this.track) != null) {
      ref.stop();
    }
    this.sequence.reset();
    return this.playAction(this.sequence.getCurrentItem().action);
  };

  TextDialogue.prototype.addEventListener = function(data) {
    if (data.event === 'complete') {
      return this.track.addOnComplete((function(_this) {
        return function() {
          return aristotle.commander["do"](data.action);
        };
      })(this));
    }
  };

  TextDialogue.prototype.killTalking = function() {
    var ref, ref1, ref2;
    if ((ref = this.track) != null) {
      ref.stop();
    }
    if ((ref1 = this.actor) != null) {
      ref1.stopTalking();
    }
    return (ref2 = this.actor) != null ? ref2.complete() : void 0;
  };

  TextDialogue.prototype.complete = function() {
    PubSub.publish('dialogue.complete');
    return this.actor.complete();
  };

  TextDialogue.prototype.playNextAction = function() {
    if (this.sequence == null) {
      return;
    }
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

  TextDialogue.prototype.playAction = function(actionId) {
    var action, oldActor;
    if (this.data.actions[actionId] == null) {
      aristotle["throw"]("Dialogue was asked to play the action named `" + actionId + "`, but no action with that id exists.");
      return;
    }
    action = this.overlayDefaults(actionId);
    oldActor = this.actor;
    this.setActor(action.actor);
    if (oldActor !== void 0) {
      if (oldActor !== this.actor) {
        oldActor.sleep();
      }
    }
    if (action.action != null) {
      aristotle.commander["do"](action.action, true);
    }
    this.actor.special(action);
    return this.say(action.text, action.audio, action.next, action.txtPos);
  };

  TextDialogue.prototype.getIndexOfAction = function(action) {
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

  TextDialogue.prototype.overlayDefaults = function(actionId) {
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

  TextDialogue.prototype.setActor = function(actor) {
    if (actor == null) {
      this.actor = this.ctanlee;
      return;
    }
    switch (actor) {
      case 'warcore':
      case 'sektimus':
      case 'firewall':
      case 'packet':
        return this.actor = this.cc;
      default:
        return this.actor = this.ctanlee;
    }
  };

  TextDialogue.prototype.destroy = function() {
    var j, len, ref, results, token;
    this.data = null;
    this.timeline = null;
    this.sequence = null;
    this.ctanlee.destroy();
    this.cc.destroy();
    if (this.track != null) {
      this.track.stop();
    }
    ref = this.tokens;
    results = [];
    for (j = 0, len = ref.length; j < len; j++) {
      token = ref[j];
      results.push(PubSub.unsubscribe(token));
    }
    return results;
  };

  return TextDialogue;

})();

},{"episode/audio-track":7,"misc/sequence":29,"slide-ux/dialogue-actors/closed-caption":56,"slide-ux/dialogue-actors/ctanlee":57}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9ndWxwLWNvZmZlZWlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiYXJpc3RvdGxlLmNvZmZlZSIsImNocm9tZS9ib3R0b20tdWktZWxlbWVudHMuY29mZmVlIiwiY2hyb21lL2Nocm9tZS11aS5jb2ZmZWUiLCJjaHJvbWUvcHJvZ3Jlc3MtbWFwLmNvZmZlZSIsImNocm9tZS90b3AuY29mZmVlIiwiY2hyb21lL3Zjci1jb250cm9scy5jb2ZmZWUiLCJlcGlzb2RlL2F1ZGlvLXRyYWNrLmNvZmZlZSIsImVwaXNvZGUvY2hhcHRlci1oZWFkaW5nLmNvZmZlZSIsImVwaXNvZGUvY2hhcHRlci5jb2ZmZWUiLCJlcGlzb2RlL2VwaXNvZGUuY29mZmVlIiwiZXBpc29kZS9zbGlkZS5jb2ZmZWUiLCJlcGlzb2RlL3NsaWRlcy5jb2ZmZWUiLCJtaXNjL1NlcXVlbmNlLmNvZmZlZSIsIm1pc2MvYW5pbWF0aW9uLXF1YWxpdHkuY29mZmVlIiwibWlzYy9hcGktcHJveHkuY29mZmVlIiwibWlzYy9hc3NldC1wcmVsb2FkZXIuY29mZmVlIiwibWlzYy9icm93c2VyLWRldGVjdC5jb2ZmZWUiLCJtaXNjL2NvbW1hbmRlci5jb2ZmZWUiLCJtaXNjL2Rldi10b29scy5jb2ZmZWUiLCJtaXNjL2RpY3Rpb25hcnkuY29mZmVlIiwibWlzYy9lcGlzb2RlLWxvYWRlci5jb2ZmZWUiLCJtaXNjL2dsb2JhbC12YXJzLmNvZmZlZSIsIm1pc2MvanNvbi1sb2FkZXIuY29mZmVlIiwibWlzYy9sb2NhbC1zdG9yYWdlLXByb3h5LmNvZmZlZSIsIm1pc2MvbG9nZ2VyLmNvZmZlZSIsIm1pc2MvbG9nc3RhY2hlLmNvZmZlZSIsIm1pc2MvcGFyc2VyLmNvZmZlZSIsIm1pc2MvcGF1c2FibGUtZGVsYXlzLmNvZmZlZSIsIm1pc2Mvc2Z4LmNvZmZlZSIsIm1pc2Mvc21hbGwtc2NyZWVuLXpvb21lci5jb2ZmZWUiLCJtaXNjL3N2Zy1jYXJ0b2dyYXBoZXIuY29mZmVlIiwibW92aWUvZHluYW1pYy1hc3NldHMuY29mZmVlIiwibW92aWUvaGlnaGxpZ2h0ZXIuY29mZmVlIiwibW92aWUvbGF5ZXIuY29mZmVlIiwibW92aWUvbW92aWUuY29mZmVlIiwibW92aWUvc3ZnLWFuaW1hdGlvbi5jb2ZmZWUiLCJzbGlkZS11eC9jb21wb25lbnRzL2NhbGwtc2lnbi1zZWxlY3QuY29mZmVlIiwic2xpZGUtdXgvY29tcG9uZW50cy9jb21wb25lbnQuY29mZmVlIiwic2xpZGUtdXgvY29tcG9uZW50cy9kZWZlbmRlci1jYXJkcy5jb2ZmZWUiLCJzbGlkZS11eC9jb21wb25lbnRzL2RpYWxvZ3VlLXBhZ2UuY29mZmVlIiwic2xpZGUtdXgvY29tcG9uZW50cy9kaWFsb2d1ZS5jb2ZmZWUiLCJzbGlkZS11eC9jb21wb25lbnRzL2R1dGllcy5jb2ZmZWUiLCJzbGlkZS11eC9jb21wb25lbnRzL2VwaXNvZGUtaW50cm8uY29mZmVlIiwic2xpZGUtdXgvY29tcG9uZW50cy9lcGlzb2RlLW91dHJvLmNvZmZlZSIsInNsaWRlLXV4L2NvbXBvbmVudHMvZXhwbG9yZS1jYXJkcy5jb2ZmZWUiLCJzbGlkZS11eC9jb21wb25lbnRzL2dob3N0LXV4LmNvZmZlZSIsInNsaWRlLXV4L2NvbXBvbmVudHMvZ3V0LWNoZWNrLmNvZmZlZSIsInNsaWRlLXV4L2NvbXBvbmVudHMvcGVyc29uYWwtaW5mby1pbnRyby5jb2ZmZWUiLCJzbGlkZS11eC9jb21wb25lbnRzL3F1aXovcXVlc3Rpb24uY29mZmVlIiwic2xpZGUtdXgvY29tcG9uZW50cy9xdWl6L3F1aXouY29mZmVlIiwic2xpZGUtdXgvY29tcG9uZW50cy9zZWxlY3Rpb24tZGlhbG9ndWUuY29mZmVlIiwic2xpZGUtdXgvY29tcG9uZW50cy9zaW1wbGUtc2VsZWN0aW9uLmNvZmZlZSIsInNsaWRlLXV4L2NvbXBvbmVudHMvc291bmQtdGVzdC5jb2ZmZWUiLCJzbGlkZS11eC9jb21wb25lbnRzL3RyYWluaW5nLWNvbXBsZXRlLmNvZmZlZSIsInNsaWRlLXV4L2RpYWxvZ3VlLWFjdG9ycy9jbG9zZWQtY2FwdGlvbi5jb2ZmZWUiLCJzbGlkZS11eC9kaWFsb2d1ZS1hY3RvcnMvY3RhbmxlZS5jb2ZmZWUiLCJzbGlkZS11eC9nZW5lcmljLXVpLmNvZmZlZSIsInNsaWRlLXV4L2xhYmxlci5jb2ZmZWUiLCJzbGlkZS11eC9zbGlkZS11eC5jb2ZmZWUiLCJzbGlkZS11eC90ZXh0LWRpYWxvZ3VlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5SkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN01BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNsR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDclNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaFdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9NQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBBUElwcm94eSwgQW5pbWF0aW9uUXVhbGl0eSwgQXJpc3RvdGxlLCBDaHJvbWVVSSwgQ29tbWFuZGVyLCBEZXZUb29scywgRGljdGlvbmFyeSwgRXBpc29kZSwgRXBpc29kZUxvYWRlciwgR2xvYmFsVmFycywgSnNvbkxvYWRlciwgTG9jYWxTdG9yYWdlUHJveHksIExvZ1N0YWNoZSwgTG9nZ2VyLCBNb3ZpZSwgUGFyc2VyLCBQYXVzYWJsZURlbGF5cywgU2xpZGVVWCwgU291bmRGWCwgU3ZnQ2FydG9ncmFwaGVyLCBpc0ludGVybmV0RXhwLCBzbWFsbFNjcmVlblpvb20sXG4gIGJpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9O1xuXG5BbmltYXRpb25RdWFsaXR5ID0gcmVxdWlyZSgnbWlzYy9hbmltYXRpb24tcXVhbGl0eScpO1xuXG5BUElwcm94eSA9IHJlcXVpcmUoXCJtaXNjL2FwaS1wcm94eVwiKTtcblxuQ2hyb21lVUkgPSByZXF1aXJlKFwiY2hyb21lL2Nocm9tZS11aVwiKTtcblxuQ29tbWFuZGVyID0gcmVxdWlyZSgnbWlzYy9jb21tYW5kZXInKTtcblxuRGV2VG9vbHMgPSByZXF1aXJlKCdtaXNjL2Rldi10b29scycpO1xuXG5EaWN0aW9uYXJ5ID0gcmVxdWlyZSgnbWlzYy9kaWN0aW9uYXJ5Jyk7XG5cbkVwaXNvZGUgPSByZXF1aXJlKFwiZXBpc29kZS9lcGlzb2RlXCIpO1xuXG5FcGlzb2RlTG9hZGVyID0gcmVxdWlyZSgnbWlzYy9lcGlzb2RlLWxvYWRlcicpO1xuXG5HbG9iYWxWYXJzID0gcmVxdWlyZSgnbWlzYy9nbG9iYWwtdmFycycpO1xuXG5pc0ludGVybmV0RXhwID0gcmVxdWlyZSgnbWlzYy9icm93c2VyLWRldGVjdCcpO1xuXG5Kc29uTG9hZGVyID0gcmVxdWlyZSgnbWlzYy9qc29uLWxvYWRlcicpO1xuXG5Mb2NhbFN0b3JhZ2VQcm94eSA9IHJlcXVpcmUoJ21pc2MvbG9jYWwtc3RvcmFnZS1wcm94eScpO1xuXG5Mb2dnZXIgPSByZXF1aXJlKCdtaXNjL2xvZ2dlcicpO1xuXG5Mb2dTdGFjaGUgPSByZXF1aXJlKCdtaXNjL2xvZ3N0YWNoZScpO1xuXG5Nb3ZpZSA9IHJlcXVpcmUoJ21vdmllL21vdmllJyk7XG5cblBhcnNlciA9IHJlcXVpcmUoJ21pc2MvcGFyc2VyJyk7XG5cblBhdXNhYmxlRGVsYXlzID0gcmVxdWlyZSgnbWlzYy9wYXVzYWJsZS1kZWxheXMnKTtcblxuU2xpZGVVWCA9IHJlcXVpcmUoJ3NsaWRlLXV4L3NsaWRlLXV4Jyk7XG5cblNvdW5kRlggPSByZXF1aXJlKCdtaXNjL3NmeCcpO1xuXG5zbWFsbFNjcmVlblpvb20gPSByZXF1aXJlKCdtaXNjL3NtYWxsLXNjcmVlbi16b29tZXInKTtcblxuU3ZnQ2FydG9ncmFwaGVyID0gcmVxdWlyZSgnbWlzYy9zdmctY2FydG9ncmFwaGVyJyk7XG5cbkFyaXN0b3RsZSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gQXJpc3RvdGxlKCRlbCkge1xuICAgIHRoaXMuJGVsID0gJGVsO1xuICAgIHRoaXMub25Kc29uTG9hZGVkID0gYmluZCh0aGlzLm9uSnNvbkxvYWRlZCwgdGhpcyk7XG4gICAgdGhpcy5iZWdpbiA9IGJpbmQodGhpcy5iZWdpbiwgdGhpcyk7XG4gICAgdGhpcy5sZXRzR28gPSBiaW5kKHRoaXMubGV0c0dvLCB0aGlzKTtcbiAgICB3aW5kb3cuYXJpc3RvdGxlID0gdGhpcztcbiAgICB0aGlzLmxvY2FsU3RvcmFnZVByb3h5ID0gbmV3IExvY2FsU3RvcmFnZVByb3h5KHRoaXMubGV0c0dvKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCdlcGlzb2RlLmdvdG8nLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5nb3RvTG9jYXRpb25CeVRpdGxlKGRhdGEuc2xpZGUsIGRhdGEuY2hhcHRlcik7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgfVxuXG4gIEFyaXN0b3RsZS5wcm90b3R5cGUubGV0c0dvID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFuaW1hdGlvblF1YWxpdHksIGFwaVByb3h5LCBjYXJ0b2dyYXBoZXIsIGNvbW1hbmRlciwgZGljdGlvbmFyeSwgZ2xvYmFscywganNvbkxvYWVyLCBsb2dTdGFjaGUsIHBhcnNlciwgcGF1c2FibGVEZWxheXMsIHNoYWRvd0ljb25zLCBzb3VuZEZ4O1xuICAgIGFyaXN0b3RsZS5pc0lFID0gaXNJbnRlcm5ldEV4cCgpO1xuICAgIGFuaW1hdGlvblF1YWxpdHkgPSBuZXcgQW5pbWF0aW9uUXVhbGl0eSgpO1xuICAgIGpzb25Mb2FlciA9IG5ldyBKc29uTG9hZGVyKCk7XG4gICAgZ2xvYmFscyA9IG5ldyBHbG9iYWxWYXJzKCk7XG4gICAgY29tbWFuZGVyID0gbmV3IENvbW1hbmRlcigpO1xuICAgIGRpY3Rpb25hcnkgPSBuZXcgRGljdGlvbmFyeSgpO1xuICAgIGxvZ1N0YWNoZSA9IG5ldyBMb2dTdGFjaGUoKTtcbiAgICBhcGlQcm94eSA9IG5ldyBBUElwcm94eSgpO1xuICAgIHBhcnNlciA9IG5ldyBQYXJzZXIoKTtcbiAgICBzb3VuZEZ4ID0gbmV3IFNvdW5kRlgoKTtcbiAgICBwYXVzYWJsZURlbGF5cyA9IG5ldyBQYXVzYWJsZURlbGF5cygpO1xuICAgIGNhcnRvZ3JhcGhlciA9IG5ldyBTdmdDYXJ0b2dyYXBoZXIoKTtcbiAgICBzaGFkb3dJY29ucyA9IG5ldyBweGljb25zLlNoYWRvd0ljb25zKCk7XG4gICAgUHViU3ViLnB1Ymxpc2goJ2FuaW1hdGlvbnMuZ28ubG93Jyk7XG4gICAgdGhpcy5zZXREZXZNb2RlKHRoaXMuaXNEZXZNb2RlKTtcbiAgICB0aGlzLmxvY2FsU3RvcmFnZVByb3h5LmJlZ2luKHRoaXMuYmVnaW4pO1xuICAgIHJldHVybiBzbWFsbFNjcmVlblpvb20oKTtcbiAgfTtcblxuICBBcmlzdG90bGUucHJvdG90eXBlLmJlZ2luID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zZXRJbml0aWFsRXBpc29kZU51bSgpO1xuICAgIFB1YlN1Yi5wdWJsaXNoKCdzZXNzaW9ua2V5LmFkZCcpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ2VwaXNvZGUubG9hZCcsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgX3RoaXMuZXBpc29kZU51bSA9IGRhdGE7XG4gICAgICAgIHJldHVybiBfdGhpcy5pbml0KCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIucHVibGlzaCgnZXBpc29kZS5sb2FkJywgdGhpcy5lcGlzb2RlTnVtKTtcbiAgICByZXR1cm4gbG9nKFwiKioqKioqKioqKioqKioqIEVQSVNPREUgXCIgKyB0aGlzLmVwaXNvZGVOdW0pO1xuICB9O1xuXG4gIEFyaXN0b3RsZS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBlcGlzb2RlTG9hZGVyO1xuICAgIGlmICh0aGlzLmNocm9tZVVJICE9IG51bGwpIHtcbiAgICAgIHRoaXMuZGVsZXRlT2xkQXNzZXRzKCk7XG4gICAgfVxuICAgIHRoaXMuYnVpbGQoKTtcbiAgICByZXR1cm4gZXBpc29kZUxvYWRlciA9IG5ldyBFcGlzb2RlTG9hZGVyKHRoaXMub25Kc29uTG9hZGVkKTtcbiAgfTtcblxuICBBcmlzdG90bGUucHJvdG90eXBlLm9uSnNvbkxvYWRlZCA9IGZ1bmN0aW9uKGVwaXNvZGVEYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMuZXBpc29kZSA9IG5ldyBFcGlzb2RlKGVwaXNvZGVEYXRhLCB0aGlzLm1vdmllLCB0aGlzLnNsaWRlVVgsIHRoaXMuY2hyb21lVUkpO1xuICB9O1xuXG4gIEFyaXN0b3RsZS5wcm90b3R5cGUuYnVpbGQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgJGJhc2U7XG4gICAgJGJhc2UgPSAkKGphZGVUZW1wbGF0ZVsnYXJpc3RvdGxlJ10oe30pKTtcbiAgICB0aGlzLiRlbC5hcHBlbmQoJGJhc2UpO1xuICAgIHNoYWRvd0ljb25zSW5zdGFuY2Uuc3ZnUmVwbGFjZVdpdGhTdHJpbmcocHhTdmdJY29uU3RyaW5nLCAkYmFzZSk7XG4gICAgdGhpcy5jaHJvbWVVSSA9IG5ldyBDaHJvbWVVSSgkKFwiLmNocm9tZVwiLCAkYmFzZSkpO1xuICAgIHRoaXMuc2xpZGVVWCA9IG5ldyBTbGlkZVVYKCQoXCIuc2xpZGUtdXhcIiwgJGJhc2UpKTtcbiAgICByZXR1cm4gdGhpcy5tb3ZpZSA9IG5ldyBNb3ZpZSgkKFwiLm1vdmllXCIsICRiYXNlKSk7XG4gIH07XG5cbiAgQXJpc3RvdGxlLnByb3RvdHlwZS5kZWxldGVPbGRBc3NldHMgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmVwaXNvZGUuZGVzdHJveSgpO1xuICAgIHRoaXMuY2hyb21lVUkuZGVzdHJveSgpO1xuICAgIHRoaXMuc2xpZGVVWC5kZXN0cm95KCk7XG4gICAgdGhpcy5tb3ZpZS5kZXN0cm95KCk7XG4gICAgdGhpcy4kZWwuZW1wdHkoKTtcbiAgICByZXR1cm4gdGhpcy5lcGlzb2RlID0gdGhpcy5jaHJvbWVVSSA9IHRoaXMuc2xpZGVVWCA9IHRoaXMubW92aWUgPSBudWxsO1xuICB9O1xuXG4gIEFyaXN0b3RsZS5wcm90b3R5cGUuc2V0RGV2TW9kZSA9IGZ1bmN0aW9uKGRldk1vZGUpIHtcbiAgICB2YXIgbG9nZ2VyO1xuICAgIGxvZ2dlciA9IG5ldyBMb2dnZXIoJCgnYm9keScpLCBkZXZNb2RlKTtcbiAgICByZXR1cm4gYXJpc3RvdGxlLmRldlRvb2xzID0gbmV3IERldlRvb2xzKGRldk1vZGUpO1xuICB9O1xuXG4gIEFyaXN0b3RsZS5wcm90b3R5cGUuc2V0SW5pdGlhbEVwaXNvZGVOdW0gPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoYXJpc3RvdGxlLmxvY2FsU3RvcmFnZVByb3h5LnN0b3JlICE9IG51bGwpIHtcbiAgICAgIGlmIChhcmlzdG90bGUubG9jYWxTdG9yYWdlUHJveHkuc3RvcmUubG9jYXRpb24gIT0gbnVsbCkge1xuICAgICAgICBpZiAoYXJpc3RvdGxlLmxvY2FsU3RvcmFnZVByb3h5LnN0b3JlLmxvY2F0aW9uLmVwaXNvZGVOdW0pIHtcbiAgICAgICAgICB0aGlzLmVwaXNvZGVOdW0gPSBhcmlzdG90bGUubG9jYWxTdG9yYWdlUHJveHkuc3RvcmUubG9jYXRpb24uZXBpc29kZU51bTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5pc0Rldk1vZGUgJiYgdGhpcy5kZXZFcGlzb2RlTnVtICE9PSBmYWxzZSkge1xuICAgICAgdGhpcy5lcGlzb2RlTnVtID0gdGhpcy5kZXZFcGlzb2RlTnVtO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuZXBpc29kZU51bSkge1xuICAgICAgcmV0dXJuIHRoaXMuZXBpc29kZU51bSA9IFwiMFwiO1xuICAgIH1cbiAgfTtcblxuICBBcmlzdG90bGUucHJvdG90eXBlLmdvdG9Mb2NhdGlvbkJ5VGl0bGUgPSBmdW5jdGlvbih0aXRsZSwgY2hhcHRlcikge1xuICAgIGFyaXN0b3RsZS5sb2NhbFN0b3JhZ2VQcm94eS5zYXZlU3RhdGUodGl0bGUsIGNoYXB0ZXIpO1xuICAgIHJldHVybiB0aGlzLmluaXQoKTtcbiAgfTtcblxuICByZXR1cm4gQXJpc3RvdGxlO1xuXG59KSgpO1xuXG53aW5kb3cuQXJpc3RvdGxlID0gQXJpc3RvdGxlO1xuIiwidmFyIEJvdHRvbVVpRWxlbWVudHMsIFByb2dyZXNzTWFwLCBWQ1JDb250cm9scztcblxuUHJvZ3Jlc3NNYXAgPSByZXF1aXJlKCdjaHJvbWUvcHJvZ3Jlc3MtbWFwJyk7XG5cblZDUkNvbnRyb2xzID0gcmVxdWlyZSgnY2hyb21lL3Zjci1jb250cm9scycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJvdHRvbVVpRWxlbWVudHMgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIEJvdHRvbVVpRWxlbWVudHMoJGVsKSB7XG4gICAgdGhpcy4kZWwgPSAkZWw7XG4gICAgdGhpcy4kbm9kZSA9ICQoamFkZVRlbXBsYXRlWydjaHJvbWUtdWkvcHJvZ3Jlc3MnXSh7fSkpO1xuICAgIHRoaXMuJGVsLmFwcGVuZCh0aGlzLiRub2RlKTtcbiAgICB0aGlzLnByb2dlc3NNYXAgPSBuZXcgUHJvZ3Jlc3NNYXAodGhpcy4kbm9kZSk7XG4gICAgdGhpcy52Y3JDb250cm9scyA9IG5ldyBWQ1JDb250cm9scyh0aGlzLiRub2RlKTtcbiAgICB0aGlzLnNob3coJ3Byb2dyZXNzLW1hcCcpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ3Zjci1jb250cm9sLnNob3cnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIF90aGlzLnNob3dBbmltYXRpb25Db250cm9scyhkYXRhKTtcbiAgICAgICAgcmV0dXJuIF90aGlzLnNob3coJ3ZjcicpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH1cblxuICBCb3R0b21VaUVsZW1lbnRzLnByb3RvdHlwZS5zaG93QW5pbWF0aW9uQ29udHJvbHMgPSBmdW5jdGlvbihzdmdBbmltYXRpb24pIHtcbiAgICByZXR1cm4gdGhpcy52Y3JDb250cm9scy5hY3RpdmF0ZShzdmdBbmltYXRpb24sIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBfdGhpcy5zaG93KCdwcm9ncmVzcy1tYXAnKTtcbiAgICAgICAgcmV0dXJuIFB1YlN1Yi5wdWJsaXNoKCdzbGlkZXMubmV4dC1zbGlkZScpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH07XG5cbiAgQm90dG9tVWlFbGVtZW50cy5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uKGNsc3MpIHtcbiAgICB0aGlzLiRub2RlLmNoaWxkcmVuKCkuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgIHJldHVybiAkKFwiLlwiICsgY2xzcywgdGhpcy4kbm9kZSkucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICB9O1xuXG4gIEJvdHRvbVVpRWxlbWVudHMucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5wcm9ncmVzc01hcCAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9ncmVzc01hcC5kZXN0cm95KCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBCb3R0b21VaUVsZW1lbnRzO1xuXG59KSgpO1xuIiwidmFyIEJvdHRvbVVpRWxlbWVudHMsIENocm9tZVVJLCBUb3A7XG5cbkJvdHRvbVVpRWxlbWVudHMgPSByZXF1aXJlKCdjaHJvbWUvYm90dG9tLXVpLWVsZW1lbnRzJyk7XG5cblRvcCA9IHJlcXVpcmUoJ2Nocm9tZS90b3AnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBDaHJvbWVVSSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gQ2hyb21lVUkoJGVsKSB7XG4gICAgdmFyIHRva2VuMSwgdG9rZW4yO1xuICAgIHRoaXMuJGVsID0gJGVsO1xuICAgIHRva2VuMSA9IFB1YlN1Yi5zdWJzY3JpYmUoXCJjaHJvbWUuaGlkZVwiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5oaWRlKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0b2tlbjIgPSBQdWJTdWIuc3Vic2NyaWJlKFwiY2hyb21lLnNob3dcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuc2hvdygpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgdGhpcy50b2tlbnMgPSBbdG9rZW4xLCB0b2tlbjJdO1xuICB9XG5cbiAgQ2hyb21lVUkucHJvdG90eXBlLmJ1aWxkID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5ib3R0b21VaUVsZW1lbnRzID0gbmV3IEJvdHRvbVVpRWxlbWVudHModGhpcy4kZWwpO1xuICAgIHRoaXMudG9wID0gbmV3IFRvcCh0aGlzLiRlbCk7XG4gICAgcmV0dXJuIHNoYWRvd0ljb25zSW5zdGFuY2Uuc3ZnUmVwbGFjZVdpdGhTdHJpbmcocHhTdmdJY29uU3RyaW5nLCB0aGlzLiRlbCk7XG4gIH07XG5cbiAgQ2hyb21lVUkucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kZWwuYWRkQ2xhc3MoXCJoaWRkZW5cIik7XG4gIH07XG5cbiAgQ2hyb21lVUkucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kZWwucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7XG4gIH07XG5cbiAgQ2hyb21lVUkucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaSwgbGVuLCByZWYsIHJlc3VsdHMsIHRva2VuO1xuICAgIHRoaXMuYm90dG9tVWlFbGVtZW50cy5kZXN0cm95KCk7XG4gICAgdGhpcy50b3AuZGVzdHJveSgpO1xuICAgIHJlZiA9IHRoaXMudG9rZW5zO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHRva2VuID0gcmVmW2ldO1xuICAgICAgcmVzdWx0cy5wdXNoKFB1YlN1Yi51bnN1YnNjcmliZSh0b2tlbikpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICByZXR1cm4gQ2hyb21lVUk7XG5cbn0pKCk7XG4iLCJ2YXIgUHJvZ3Jlc3NNYXA7XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvZ3Jlc3NNYXAgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIFByb2dyZXNzTWFwKCRlbDEpIHtcbiAgICB2YXIgdG9rZW4xLCB0b2tlbjIsIHRva2VuMywgdG9rZW40LCB0b2tlbjU7XG4gICAgdGhpcy4kZWwgPSAkZWwxO1xuICAgIHRva2VuMSA9IFB1YlN1Yi5zdWJzY3JpYmUoJ2VwaXNvZGUubG9hZGVkJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuYnVpbGRNYXAoZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0b2tlbjIgPSBQdWJTdWIuc3Vic2NyaWJlKCdjaGFwdGVyLnN0YXJ0ZWQnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5saWdodEljb24oZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0b2tlbjMgPSBQdWJTdWIuc3Vic2NyaWJlKCdzbGlkZS5hY3RpdmF0ZWQnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5saWdodEljb24oZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0b2tlbjQgPSBQdWJTdWIuc3Vic2NyaWJlKCdxdWl6LmFjdGl2YXRlZCcsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmxpZ2h0SWNvbihkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRva2VuNSA9IFB1YlN1Yi5zdWJzY3JpYmUoJ2R1dGllcy5hY3RpdmF0ZWQnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5saWdodEljb24oZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0aGlzLnRva2VucyA9IFt0b2tlbjEsIHRva2VuMiwgdG9rZW4zLCB0b2tlbjQsIHRva2VuNV07XG4gIH1cblxuICBQcm9ncmVzc01hcC5wcm90b3R5cGUubGlnaHRJY29uID0gZnVuY3Rpb24odGl0bGUpIHtcbiAgICB2YXIgJGVsO1xuICAgICRlbCA9ICQoXCIjXCIgKyAodGhpcy50aXRsZVRvSWQodGl0bGUpKSwgdGhpcy4kbm9kZSk7XG4gICAgJGVsLmFkZENsYXNzKFwidmlld2VkXCIpO1xuICAgICRlbC5wcmV2QWxsKCkuYWRkQ2xhc3MoXCJ2aWV3ZWRcIik7XG4gICAgcmV0dXJuICRlbC5uZXh0QWxsKCkucmVtb3ZlQ2xhc3MoXCJ2aWV3ZWRcIik7XG4gIH07XG5cbiAgUHJvZ3Jlc3NNYXAucHJvdG90eXBlLmJ1aWxkTWFwID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciAkbWlsZXN0b25lLCBtYXBEYXRhO1xuICAgIG1hcERhdGEgPSB0aGlzLnBhcnNlRXBpc29kZURhdGEoZGF0YSk7XG4gICAgdGhpcy5hZGRJY29uRGF0YShtYXBEYXRhKTtcbiAgICB0aGlzLiRub2RlID0gJChqYWRlVGVtcGxhdGVbJ2Nocm9tZS11aS9wcm9ncmVzcy1tYXAnXSh7XG4gICAgICBtaWxlc3RvbmVzOiBtYXBEYXRhXG4gICAgfSkpO1xuICAgIHRoaXMuJGVsLmFwcGVuZCh0aGlzLiRub2RlKTtcbiAgICBzaGFkb3dJY29uc0luc3RhbmNlLnN2Z1JlcGxhY2VXaXRoU3RyaW5nKHB4U3ZnSWNvblN0cmluZywgdGhpcy4kbm9kZSk7XG4gICAgJG1pbGVzdG9uZSA9ICQoXCIubWlsZXN0b25lXCIsIHRoaXMuJG5vZGUpO1xuICAgIGlmIChhcmlzdG90bGUuc3Vkbykge1xuICAgICAgJG1pbGVzdG9uZS5vbihcImNsaWNrXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5vbk1pbGVTdG9uZUNsaWNrKCQoZS5jdXJyZW50VGFyZ2V0KSk7XG4gICAgICAgIH07XG4gICAgICB9KSh0aGlzKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoXCIuY2hhcHRlclwiLCB0aGlzLiRub2RlKS5vbihcImNsaWNrXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5vbkNoYXB0ZXJDbGljaygkKGUuY3VycmVudFRhcmdldCkpO1xuICAgICAgICB9O1xuICAgICAgfSkodGhpcykpO1xuICAgIH1cbiAgICAkbWlsZXN0b25lLm9uKFwibW91c2VvdmVyXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLm9uTWlsZVN0b25lT3ZlcigkKGUuY3VycmVudFRhcmdldCkpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgcmV0dXJuICRtaWxlc3RvbmUub24oXCJtb3VzZW91dFwiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5vbk1pbGVTdG9uZU91dCgkKGUuY3VycmVudFRhcmdldCkpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH07XG5cbiAgUHJvZ3Jlc3NNYXAucHJvdG90eXBlLnBhcnNlRXBpc29kZURhdGEgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyIGNoYXB0ZXIsIGksIGl0ZW0sIGl0ZW1zLCBqLCBsZW4sIGxlbjEsIHJlZiwgcmVmMSwgc2xpZGU7XG4gICAgaXRlbXMgPSBbXTtcbiAgICByZWYgPSBkYXRhLmNoYXB0ZXJzO1xuICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgY2hhcHRlciA9IHJlZltpXTtcbiAgICAgIGl0ZW1zLnB1c2goe1xuICAgICAgICBraW5kOiBcImNoYXB0ZXJcIixcbiAgICAgICAgY2hhcHRlcjogY2hhcHRlci50aXRsZSxcbiAgICAgICAgdGl0bGU6IFwiXCIgKyBjaGFwdGVyLnRpdGxlLFxuICAgICAgICB0eHQ6IGNoYXB0ZXIudGl0bGUgKyBcIiAtIFwiICsgY2hhcHRlci5zdWJ0aXRsZSxcbiAgICAgICAgaWQ6IHRoaXMudGl0bGVUb0lkKGNoYXB0ZXIudGl0bGUpXG4gICAgICB9KTtcbiAgICAgIHJlZjEgPSBjaGFwdGVyLnNsaWRlcztcbiAgICAgIGZvciAoaiA9IDAsIGxlbjEgPSByZWYxLmxlbmd0aDsgaiA8IGxlbjE7IGorKykge1xuICAgICAgICBzbGlkZSA9IHJlZjFbal07XG4gICAgICAgIGl0ZW0gPSB0aGlzLmdldEl0ZW0oc2xpZGUsIGNoYXB0ZXIudGl0bGUpO1xuICAgICAgICBpZiAoc2xpZGUudGl0bGUgIT0gbnVsbCkge1xuICAgICAgICAgIGlmIChpdGVtID09IG51bGwpIHtcbiAgICAgICAgICAgIGl0ZW0gPSB7XG4gICAgICAgICAgICAgIGtpbmQ6IFwic2xpZGVcIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaXRlbS50aXRsZSA9IHNsaWRlLnRpdGxlO1xuICAgICAgICAgIGl0ZW0udHh0ID0gc2xpZGUudGl0bGU7XG4gICAgICAgICAgaXRlbS5jaGFwdGVyID0gY2hhcHRlci50aXRsZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXRlbSAhPSBudWxsKSB7XG4gICAgICAgICAgaXRlbS5pZCA9IHRoaXMudGl0bGVUb0lkKGl0ZW0udGl0bGUpO1xuICAgICAgICAgIGl0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGl0ZW1zO1xuICB9O1xuXG4gIFByb2dyZXNzTWFwLnByb3RvdHlwZS5hZGRJY29uRGF0YSA9IGZ1bmN0aW9uKG1hcEl0ZW1zKSB7XG4gICAgdmFyIGksIGl0ZW0sIGxlbiwgcmVzdWx0cztcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChpID0gMCwgbGVuID0gbWFwSXRlbXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGl0ZW0gPSBtYXBJdGVtc1tpXTtcbiAgICAgIHN3aXRjaCAoaXRlbS5raW5kKSB7XG4gICAgICAgIGNhc2UgXCJjaGFwdGVyXCI6XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKGl0ZW0uaWNvbiA9IFwiY2hhcHRlci1wcm9ncmVzcy1jaGFwdGVyXCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwic2xpZGVcIjpcbiAgICAgICAgICByZXN1bHRzLnB1c2goaXRlbS5pY29uID0gXCJjaGFwdGVyLXByb2dyZXNzLXNsaWRlXCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwicXVpelwiOlxuICAgICAgICAgIHJlc3VsdHMucHVzaChpdGVtLmljb24gPSBcImNoYXB0ZXItcHJvZ3Jlc3MtcXVpelwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImR1dGllc1wiOlxuICAgICAgICAgIHJlc3VsdHMucHVzaChpdGVtLmljb24gPSBcImNoYXB0ZXItcHJvZ3Jlc3MtZHV0aWVzXCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlc3VsdHMucHVzaCh2b2lkIDApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBQcm9ncmVzc01hcC5wcm90b3R5cGUudGl0bGVUb0lkID0gZnVuY3Rpb24odGl0bGUpIHtcbiAgICB0aXRsZSA9IHRpdGxlLnJlcGxhY2UoL1xccy9nLCAnXycpO1xuICAgIHRpdGxlID0gdGl0bGUucmVwbGFjZSgvKFtcXCFcXD9cXCddKS9nLCAnJyk7XG4gICAgcmV0dXJuIHRpdGxlLnRvTG93ZXJDYXNlKCk7XG4gIH07XG5cbiAgUHJvZ3Jlc3NNYXAucHJvdG90eXBlLmdldEl0ZW0gPSBmdW5jdGlvbihzbGlkZSwgY2hhcHRlcikge1xuICAgIHZhciBjb21wb25lbnQsIGksIGxlbiwgcmVmO1xuICAgIGlmIChzbGlkZS51eCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKHNsaWRlLnV4LmNvbXBvbmVudHMgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJlZiA9IHNsaWRlLnV4LmNvbXBvbmVudHM7XG4gICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjb21wb25lbnQgPSByZWZbaV07XG4gICAgICBpZiAoY29tcG9uZW50LmtpbmQgPT09IFwicXVpelwiKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAga2luZDogXCJxdWl6XCIsXG4gICAgICAgICAgdGl0bGU6IFwicXVpelwiLFxuICAgICAgICAgIHR4dDogXCJRdWl6XCIsXG4gICAgICAgICAgY2hhcHRlcjogY2hhcHRlclxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIGlmIChjb21wb25lbnQua2luZCA9PT0gXCJkdXRpZXNcIikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGtpbmQ6IFwiZHV0aWVzXCIsXG4gICAgICAgICAgdGl0bGU6IFwiRHV0eSBSZXZpZXdcIixcbiAgICAgICAgICB0eHQ6IFwiRHV0eSBSZXZpZXdcIixcbiAgICAgICAgICBjaGFwdGVyOiBjaGFwdGVyXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIFByb2dyZXNzTWFwLnByb3RvdHlwZS5vbkNoYXB0ZXJDbGljayA9IGZ1bmN0aW9uKCRlbCkge1xuICAgIGlmICghJGVsLmhhc0NsYXNzKFwidmlld2VkXCIpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiBQdWJTdWIucHVibGlzaCgnZXBpc29kZS5nb3RvJywge1xuICAgICAgc2xpZGU6ICRlbC5hdHRyKFwiZGF0YS10aXRsZVwiKSxcbiAgICAgIGNoYXB0ZXI6ICRlbC5hdHRyKFwiZGF0YS1jaGFwdGVyXCIpXG4gICAgfSk7XG4gIH07XG5cbiAgUHJvZ3Jlc3NNYXAucHJvdG90eXBlLm9uTWlsZVN0b25lQ2xpY2sgPSBmdW5jdGlvbigkZWwpIHtcbiAgICByZXR1cm4gUHViU3ViLnB1Ymxpc2goJ2VwaXNvZGUuZ290bycsIHtcbiAgICAgIHNsaWRlOiAkZWwuYXR0cihcImRhdGEtdGl0bGVcIiksXG4gICAgICBjaGFwdGVyOiAkZWwuYXR0cihcImRhdGEtY2hhcHRlclwiKVxuICAgIH0pO1xuICB9O1xuXG4gIFByb2dyZXNzTWFwLnByb3RvdHlwZS5vbk1pbGVTdG9uZU92ZXIgPSBmdW5jdGlvbigkZWwpIHtcbiAgICBpZiAoISRlbC5oYXNDbGFzcyhcInZpZXdlZFwiKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gUHViU3ViLnB1Ymxpc2goJ2xhYmVsLmF0dGFjaCcsIHtcbiAgICAgIGVsOiAkZWwsXG4gICAgICBjb250ZW50OiB7XG4gICAgICAgIHRpdGxlOiAkZWwuYXR0cihcImRhdGEtdHh0XCIpXG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgUHJvZ3Jlc3NNYXAucHJvdG90eXBlLm9uTWlsZVN0b25lT3V0ID0gZnVuY3Rpb24oJGVsKSB7XG4gICAgcmV0dXJuIFB1YlN1Yi5wdWJsaXNoKCdsYWJlbC5kZXN0cm95JywgJGVsKTtcbiAgfTtcblxuICBQcm9ncmVzc01hcC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpLCBsZW4sIHJlZiwgcmVzdWx0cywgdG9rZW47XG4gICAgcmVmID0gdGhpcy50b2tlbnM7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgdG9rZW4gPSByZWZbaV07XG4gICAgICByZXN1bHRzLnB1c2goUHViU3ViLnVuc3Vic2NyaWJlKHRva2VuKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIHJldHVybiBQcm9ncmVzc01hcDtcblxufSkoKTtcbiIsInZhciBUb3A7XG5cbm1vZHVsZS5leHBvcnRzID0gVG9wID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBUb3AoJGVsMSkge1xuICAgIHZhciB0b2tlbjIsIHRva2VuMywgdG9rZW40LCB0b2tlbjUsIHRva2VuNiwgdG9rZW43O1xuICAgIHRoaXMuJGVsID0gJGVsMTtcbiAgICB0b2tlbjIgPSBQdWJTdWIuc3Vic2NyaWJlKFwiY2FsbHNpZ24uc2VsZWN0ZWRcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMudXBkYXRlQ2FsbHNpZ24oZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0b2tlbjMgPSBQdWJTdWIuc3Vic2NyaWJlKFwiY2hyb21lLnNob3duYW1lXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnNob3dOYW1lKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0b2tlbjQgPSBQdWJTdWIuc3Vic2NyaWJlKFwiY2hyb21lLnNob3dlcGlzb2Rlc1wiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5zaG93SWNvbnMoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRva2VuNSA9IFB1YlN1Yi5zdWJzY3JpYmUoXCJjaHJvbWUuaGlkZW5hbWVcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuaGlkZU5hbWUoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRva2VuNiA9IFB1YlN1Yi5zdWJzY3JpYmUoXCJjaHJvbWUuaGlkZWVwaXNvZGVzXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmhpZGVJY29ucygpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgdG9rZW43ID0gUHViU3ViLnN1YnNjcmliZShcIm1ldGEuY2hhcHRlci5zdGFydFwiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5zZXRUaXRsZShhcmlzdG90bGUuZXBpc29kZS50cmFpbmluZ0RhdGEuc3VidGl0bGUsIGRhdGEuc3VidGl0bGUpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgdGhpcy50b2tlbnMgPSBbdG9rZW4yLCB0b2tlbjMsIHRva2VuNCwgdG9rZW41LCB0b2tlbjYsIHRva2VuN107XG4gICAgdGhpcy5idWlsZCgpO1xuICB9XG5cbiAgVG9wLnByb3RvdHlwZS5idWlsZCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjYWxsc2lnbiwgZGF0YSwgZXBpc29kZU51bSwgbmFtZSwgcmVmO1xuICAgIG5hbWUgPSBhcmlzdG90bGUubG9jYWxTdG9yYWdlUHJveHkudXNlci5zcGxpdChcIixcIik7XG4gICAgcmVmID0gdGhpcy5nZXRWYXJzKCksIGNhbGxzaWduID0gcmVmWzBdLCBlcGlzb2RlTnVtID0gcmVmWzFdO1xuICAgIGRhdGEgPSB7XG4gICAgICBuYW1lOiBuYW1lWzFdICsgXCIgXFxcIlwiICsgY2FsbHNpZ24gKyBcIlxcXCIgXCIgKyBuYW1lWzBdLFxuICAgICAgZXBpc29kZTogZXBpc29kZU51bVxuICAgIH07XG4gICAgdGhpcy5nZXRSYW5rKGRhdGEsIGVwaXNvZGVOdW0pO1xuICAgIHRoaXMuJHRvcCA9ICQoamFkZVRlbXBsYXRlWydjaHJvbWUtdWkvdG9wJ10oZGF0YSkpO1xuICAgIHRoaXMuJGVsLmFwcGVuZCh0aGlzLiR0b3ApO1xuICAgIHRoaXMuJG5hbWUgPSAkKFwiLm5hbWUtYW5kLXJhbmtcIiwgdGhpcy4kdG9wKTtcbiAgICB0aGlzLiRpY29ucyA9ICQoXCIuZXBpc29kZXNcIiwgdGhpcy4kdG9wKTtcbiAgICB0aGlzLiRtb2RlID0gJChcIi5sZWFybi1tb2RlXCIsIHRoaXMuJHRvcCk7XG4gICAgdGhpcy5oaWRlTW9kZSgpO1xuICAgICQoXCIuYmFkZ2VcIiwgdGhpcy4kdG9wKS5vbihcIm1vdXNlb3ZlclwiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5iYWRnZU1vdXNlb3ZlcihlKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHJldHVybiAkKFwiLmJhZGdlXCIsIHRoaXMuJHRvcCkub24oXCJtb3VzZW91dFwiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5iYWRnZU1vdXNlb3V0KGUpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH07XG5cbiAgVG9wLnByb3RvdHlwZS51cGRhdGVDYWxsc2lnbiA9IGZ1bmN0aW9uKGNhbGxTaWduKSB7XG4gICAgdmFyIG5hbWU7XG4gICAgbmFtZSA9IGFyaXN0b3RsZS5sb2NhbFN0b3JhZ2VQcm94eS51c2VyLnNwbGl0KFwiLFwiKTtcbiAgICByZXR1cm4gJChcIi5uYW1lXCIsIHRoaXMuJHRvcCkuaHRtbChuYW1lWzFdICsgXCIgXFxcIlwiICsgY2FsbFNpZ24gKyBcIlxcXCIgXCIgKyBuYW1lWzBdKTtcbiAgfTtcblxuICBUb3AucHJvdG90eXBlLnNldFRpdGxlID0gZnVuY3Rpb24oZXBpc29kZVRpdGxlLCBjaGFwdGVyVGl0bGUpIHtcbiAgICAkKFwiaDFcIiwgdGhpcy4kbW9kZSkudGV4dChlcGlzb2RlVGl0bGUpO1xuICAgICQoXCJoMlwiLCB0aGlzLiRtb2RlKS50ZXh0KGNoYXB0ZXJUaXRsZSk7XG4gICAgcmV0dXJuIHRoaXMuc2hvd01vZGUoKTtcbiAgfTtcblxuICBUb3AucHJvdG90eXBlLnNob3dOYW1lID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJG5hbWUuY3NzKHtcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgb3BhY2l0eTogMFxuICAgIH0pLnZlbG9jaXR5KHtcbiAgICAgIG9wYWNpdHk6IDFcbiAgICB9LCB7XG4gICAgICBkdXJhdGlvbjogNTAwXG4gICAgfSk7XG4gIH07XG5cbiAgVG9wLnByb3RvdHlwZS5oaWRlTmFtZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRuYW1lLmNzcyh7XG4gICAgICBkaXNwbGF5OiBcIm5vbmVcIlxuICAgIH0pO1xuICB9O1xuXG4gIFRvcC5wcm90b3R5cGUuc2hvd0ljb25zID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJGljb25zLmNzcyh7XG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgIG9wYWNpdHk6IDBcbiAgICB9KS52ZWxvY2l0eSh7XG4gICAgICBvcGFjaXR5OiAxXG4gICAgfSwge1xuICAgICAgZHVyYXRpb246IDUwMFxuICAgIH0pO1xuICB9O1xuXG4gIFRvcC5wcm90b3R5cGUuaGlkZUljb25zID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJGljb25zLmNzcyh7XG4gICAgICBkaXNwbGF5OiBcIm5vbmVcIlxuICAgIH0pO1xuICB9O1xuXG4gIFRvcC5wcm90b3R5cGUuaGlkZU1vZGUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kbW9kZS5hZGRDbGFzcyhcImhpZGRlblwiKTtcbiAgfTtcblxuICBUb3AucHJvdG90eXBlLnNob3dNb2RlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJG1vZGUucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7XG4gIH07XG5cbiAgVG9wLnByb3RvdHlwZS5iYWRnZU1vdXNlb3ZlciA9IGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgJGVsLCBjb25maWdEYXRhLCBlcGlzb2RlTnVtO1xuICAgICRlbCA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICBlcGlzb2RlTnVtID0gJGVsLmF0dHIoJ2RhdGEtZXBpc29kZScpO1xuICAgIGNvbmZpZ0RhdGEgPSB7XG4gICAgICB0aXRsZTogXCJFcGlzb2RlIFwiICsgZXBpc29kZU51bSxcbiAgICAgIHRleHQ6IHRoaXMuZ2V0RXBpc29kZVRhZ2xpbmUoZXBpc29kZU51bSksXG4gICAgICBjc3NDbGFzczogXCJhcnJvdy10b3AgaW5saW5lXCJcbiAgICB9O1xuICAgIHJldHVybiBQdWJTdWIucHVibGlzaCgnbGFiZWwuYXR0YWNoJywge1xuICAgICAgZWw6ICRlbCxcbiAgICAgIGNvbnRlbnQ6IGNvbmZpZ0RhdGFcbiAgICB9KTtcbiAgfTtcblxuICBUb3AucHJvdG90eXBlLmJhZGdlTW91c2VvdXQgPSBmdW5jdGlvbihlKSB7XG4gICAgcmV0dXJuIFB1YlN1Yi5wdWJsaXNoKCdsYWJlbC5kZXN0cm95JywgJChlLmN1cnJlbnRUYXJnZXQpKTtcbiAgfTtcblxuICBUb3AucHJvdG90eXBlLmdldFJhbmsgPSBmdW5jdGlvbihkYXRhLCBlcGlzb2RlTnVtKSB7XG4gICAgZGF0YS5lcGlzb2RlID0gZXBpc29kZU51bTtcbiAgICBzd2l0Y2ggKGVwaXNvZGVOdW0pIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgZGF0YS5yYW5rID0gXCJSZWNydWl0XCI7XG4gICAgICAgIHJldHVybiBkYXRhLmJhZGdlID0gXCJyYW5rLWJhZGdlLXJlY3J1aXRcIjtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgZGF0YS5yYW5rID0gXCJjYWRldFwiO1xuICAgICAgICByZXR1cm4gZGF0YS5iYWRnZSA9IFwicmFuay1iYWRnZS1jYWRldFwiO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBkYXRhLnJhbmsgPSBcIkNhZGV0IEZpcnN0IENsYXNzXCI7XG4gICAgICAgIHJldHVybiBkYXRhLmJhZGdlID0gXCJyYW5rLWJhZGdlLWNhZGV0LWZpcnN0LWNsYXNzXCI7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIGRhdGEucmFuayA9IFwiVGVjaG5pY2FsIENhZGV0XCI7XG4gICAgICAgIHJldHVybiBkYXRhLmJhZGdlID0gXCJyYW5rLWJhZGdlLXRlY2huaWNhbC1jYWRldFwiO1xuICAgICAgY2FzZSA0OlxuICAgICAgICBkYXRhLnJhbmsgPSBcIkN5YmVyIENhZGV0XCI7XG4gICAgICAgIHJldHVybiBkYXRhLmJhZGdlID0gXCJyYW5rLWJhZGdlLWN5YmVyLWNhZGV0XCI7XG4gICAgICBjYXNlIDU6XG4gICAgICAgIGRhdGEucmFuayA9IFwiTWFzdGVyIENhZGV0XCI7XG4gICAgICAgIHJldHVybiBkYXRhLmJhZGdlID0gXCJyYW5rLWJhZGdlLW1hc3Rlci1jYWRldFwiO1xuICAgIH1cbiAgfTtcblxuICBUb3AucHJvdG90eXBlLmdldEVwaXNvZGVUYWdsaW5lID0gZnVuY3Rpb24oZXBpc29kZU51bSkge1xuICAgIHN3aXRjaCAoZXBpc29kZU51bSkge1xuICAgICAgY2FzZSBcIjFcIjpcbiAgICAgICAgcmV0dXJuIFwiT3JnYW5pemluZyBPdXIgRm9yY2VzXCI7XG4gICAgICBjYXNlIFwiMlwiOlxuICAgICAgICByZXR1cm4gXCJQZXJpbWV0ZXIgRGVmZW5zZXNcIjtcbiAgICAgIGNhc2UgXCIzXCI6XG4gICAgICAgIHJldHVybiBcIkFzc2V0IERlZmVuc2VzXCI7XG4gICAgICBjYXNlIFwiNFwiOlxuICAgICAgICByZXR1cm4gXCJNYW5uaW5nIHRoZSBEZWZlbnNlc1wiO1xuICAgICAgY2FzZSBcIjVcIjpcbiAgICAgICAgcmV0dXJuIFwiRmlnaHRpbmcgdGhlIFdhclwiO1xuICAgIH1cbiAgfTtcblxuICBUb3AucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaSwgbGVuLCByZWYsIHJlc3VsdHMsIHRva2VuO1xuICAgIHJlZiA9IHRoaXMudG9rZW5zO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHRva2VuID0gcmVmW2ldO1xuICAgICAgcmVzdWx0cy5wdXNoKFB1YlN1Yi51bnN1YnNjcmliZSh0b2tlbikpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBUb3AucHJvdG90eXBlLmdldFZhcnMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgY2FsbHNpZ24sIGVwaXNvZGUsIGVycm9yLCBlcnJvcjE7XG4gICAgdHJ5IHtcbiAgICAgIGNhbGxzaWduID0gYXJpc3RvdGxlLmdsb2JhbHMuZ2V0KCdjYWxsU2lnbicsIGZhbHNlKTtcbiAgICB9IGNhdGNoIChlcnJvcjEpIHtcbiAgICAgIGVycm9yID0gZXJyb3IxO1xuICAgICAgY2FsbHNpZ24gPSBcIkRlYWRleWVcIjtcbiAgICB9XG4gICAgZXBpc29kZSA9IE51bWJlcihhcmlzdG90bGUuZXBpc29kZU51bSk7XG4gICAgcmV0dXJuIFtjYWxsc2lnbiwgZXBpc29kZV07XG4gIH07XG5cbiAgcmV0dXJuIFRvcDtcblxufSkoKTtcbiIsInZhciBWQ1JDb250cm9scztcblxubW9kdWxlLmV4cG9ydHMgPSBWQ1JDb250cm9scyA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gVkNSQ29udHJvbHMoJGVsKSB7XG4gICAgdmFyICRub2RlO1xuICAgICRub2RlID0gJChqYWRlVGVtcGxhdGVbJ2Nocm9tZS11aS92Y3InXSh7fSkpO1xuICAgICRlbC5hcHBlbmQoJG5vZGUpO1xuICAgIHRoaXMuJHBsYXloZWFkID0gJCgnLnBsYXloZWFkJywgJG5vZGUpO1xuICAgIHRoaXMuJGF0dGljID0gJCgnLmF0dGljJywgJG5vZGUpO1xuICAgIHRoaXMuJHBhdXNlQW5kUGxheUJ0biA9ICQoJy5wYXVzZS1hbmQtcGxheScsICRub2RlKTtcbiAgICB0aGlzLiRwYXVzZUFuZFBsYXlCdG4ub24oJ2NsaWNrJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5jb250cm9sQnRuQ2xpY2soKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgICQoXCIjYW5pLXJlcGxheVwiLCAkbm9kZSkub24oJ2NsaWNrJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5yZXBsYXlDbGljaygpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgJChcIiNhbmktY29udGludWVcIiwgJG5vZGUpLm9uKCdjbGljaycsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMuY29udGludWVDbGljaygpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgUHViU3ViLnN1YnNjcmliZSgndmNyLnBsYXknLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5wbGF5KCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCd2Y3IucGF1c2UnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5wYXVzZSgpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgUHViU3ViLnN1YnNjcmliZSgndmNyLnJlcGxheScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnJlcGxheSgpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH1cblxuICBWQ1JDb250cm9scy5wcm90b3R5cGUucGxheSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuJHBhdXNlQW5kUGxheUJ0bi5yZW1vdmVDbGFzcygncGF1c2VkJyk7XG4gICAgcmV0dXJuIHRoaXMuYW5pbWF0aW9uLnBsYXkoKTtcbiAgfTtcblxuICBWQ1JDb250cm9scy5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLiRwYXVzZUFuZFBsYXlCdG4uYWRkQ2xhc3MoJ3BhdXNlZCcpO1xuICAgIHJldHVybiB0aGlzLmFuaW1hdGlvbi5wYXVzZSgpO1xuICB9O1xuXG4gIFZDUkNvbnRyb2xzLnByb3RvdHlwZS5yZXBsYXkgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLiRhdHRpYy5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgdGhpcy4kcGF1c2VBbmRQbGF5QnRuLnJlbW92ZUNsYXNzKCdjb21wbGV0ZScpO1xuICAgIHRoaXMuYW5pbWF0aW9uLmFuaW1hdGlvbi5nb1RvQW5kU3RvcCgwKTtcbiAgICByZXR1cm4gdGhpcy5hbmltYXRpb24uYW5pbWF0aW9uLnBsYXkoKTtcbiAgfTtcblxuICBWQ1JDb250cm9scy5wcm90b3R5cGUuYWN0aXZhdGUgPSBmdW5jdGlvbihzdmdBbmltYXRpb24sIGNvbXBsZXRlQ2IpIHtcbiAgICB2YXIgY29tcGxldGUsIGVudGVyRnJhbWU7XG4gICAgdGhpcy5jb21wbGV0ZUNiID0gY29tcGxldGVDYjtcbiAgICB0aGlzLnJlc2V0KCk7XG4gICAgdGhpcy5hbmltYXRpb24gPSBzdmdBbmltYXRpb247XG4gICAgZW50ZXJGcmFtZSA9IHRoaXMuYW5pbWF0aW9uLmFuaW1hdGlvbi5hZGRFdmVudExpc3RlbmVyKCdlbnRlckZyYW1lJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBwZXJjO1xuICAgICAgICBwZXJjID0gX3RoaXMuYW5pbWF0aW9uLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUgLyBfdGhpcy5hbmltYXRpb24uYW5pbWF0aW9uLnRvdGFsRnJhbWVzO1xuICAgICAgICByZXR1cm4gX3RoaXMuJHBsYXloZWFkLmNzcyh7XG4gICAgICAgICAgd2lkdGg6IChNYXRoLnJvdW5kKHBlcmMgKiAxMDApKSArIFwiJVwiXG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgY29tcGxldGUgPSB0aGlzLmFuaW1hdGlvbi5hbmltYXRpb24uYWRkRXZlbnRMaXN0ZW5lcignY29tcGxldGUnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgX3RoaXMuaXNDb21wbGV0ZSA9IHRydWU7XG4gICAgICAgIF90aGlzLiRhdHRpYy5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgICAgIHJldHVybiBfdGhpcy4kcGF1c2VBbmRQbGF5QnRuLmFkZENsYXNzKCdjb21wbGV0ZScpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgdGhpcy5hbmltYXRpb24udHJhY2tFdmVudEhhbmRsZXIoZW50ZXJGcmFtZSwgJ2VudGVyRnJhbWUnKTtcbiAgICByZXR1cm4gdGhpcy5hbmltYXRpb24udHJhY2tFdmVudEhhbmRsZXIoY29tcGxldGUsICdjb21wbGV0ZScpO1xuICB9O1xuXG4gIFZDUkNvbnRyb2xzLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaXNQYXVzZWQgPSBmYWxzZTtcbiAgICB0aGlzLmlzQ29tcGxldGUgPSBmYWxzZTtcbiAgICB0aGlzLiRhdHRpYy5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgdGhpcy4kcGF1c2VBbmRQbGF5QnRuLnJlbW92ZUNsYXNzKCdwYXVzZWQnKTtcbiAgICByZXR1cm4gdGhpcy4kcGF1c2VBbmRQbGF5QnRuLnJlbW92ZUNsYXNzKCdjb21wbGV0ZScpO1xuICB9O1xuXG4gIFZDUkNvbnRyb2xzLnByb3RvdHlwZS5jb250cm9sQnRuQ2xpY2sgPSBmdW5jdGlvbihlKSB7XG4gICAgaWYgKHRoaXMuaXNDb21wbGV0ZSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVwbGF5Q2xpY2soKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNQYXVzZWQpIHtcbiAgICAgIHRoaXMuaXNQYXVzZWQgPSBmYWxzZTtcbiAgICAgIHJldHVybiBQdWJTdWIucHVibGlzaCgndmNyLnBsYXknKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc1BhdXNlZCA9IHRydWU7XG4gICAgICByZXR1cm4gUHViU3ViLnB1Ymxpc2goJ3Zjci5wYXVzZScpO1xuICAgIH1cbiAgfTtcblxuICBWQ1JDb250cm9scy5wcm90b3R5cGUucmVwbGF5Q2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmlzQ29tcGxldGUgPSBmYWxzZTtcbiAgICByZXR1cm4gUHViU3ViLnB1Ymxpc2goJ3Zjci5yZXBsYXknKTtcbiAgfTtcblxuICBWQ1JDb250cm9scy5wcm90b3R5cGUuY29udGludWVDbGljayA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmNvbXBsZXRlQ2IoKTtcbiAgfTtcblxuICByZXR1cm4gVkNSQ29udHJvbHM7XG5cbn0pKCk7XG4iLCJ2YXIgQXVkaW9UcmFjaztcblxubW9kdWxlLmV4cG9ydHMgPSBBdWRpb1RyYWNrID0gKGZ1bmN0aW9uKCkge1xuICBBdWRpb1RyYWNrLmNvdW50ID0gMDtcblxuICBmdW5jdGlvbiBBdWRpb1RyYWNrKHNyYykge1xuICAgIHZhciBlcnJvciwgZXJyb3IxO1xuICAgIHRoaXMuc3JjID0gc3JjO1xuICAgIHRoaXMuaWQgPSBBdWRpb1RyYWNrLmNvdW50Kys7XG4gICAgdGhpcy5ldmVudEhhbmRsZXJzID0gW107XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuc3JjID0gcGFyc2UodGhpcy5zcmMpO1xuICAgICAgQXVkaW9UcmFjay5pbml0U291bmRTZXR0aW5ncygpO1xuICAgICAgdGhpcy5zb3VuZCA9IGNyZWF0ZWpzLlNvdW5kLmNyZWF0ZUluc3RhbmNlKHRoaXMuc3JjKTtcbiAgICB9IGNhdGNoIChlcnJvcjEpIHtcbiAgICAgIGVycm9yID0gZXJyb3IxO1xuICAgICAgYXBwSW5zaWdodHMudHJhY2tFeGNlcHRpb24oXCJBdWRpbyBUcmFjayAtIElzc3VlIHBhcnNpbmcgdGhlIGBAc3JjYCB2YXJpYWJsZSwgd2FzIHNldCB0byBgXCIgKyB0aGlzLnNyYyArIFwiYFwiKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBBdWRpb1RyYWNrLnByb3RvdHlwZS5wbGF5ID0gZnVuY3Rpb24oY29uZmlnLCBvbkNvbXBsZXRlKSB7XG4gICAgaWYgKGNvbmZpZyA9PSBudWxsKSB7XG4gICAgICBjb25maWcgPSB7fTtcbiAgICB9XG4gICAgdGhpcy5vbkNvbXBsZXRlID0gb25Db21wbGV0ZTtcbiAgICB0aGlzLnBhcnNlQ29uZmlnKGNvbmZpZyk7XG4gICAgaWYgKHRoaXMub25Db21wbGV0ZSAhPSBudWxsKSB7XG4gICAgICB0aGlzLmFkZE9uQ29tcGxldGUoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc291bmQucGxheShjb25maWcpO1xuICB9O1xuXG4gIEF1ZGlvVHJhY2sucHJvdG90eXBlLmFkZE9uQ29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaGFuZGxlO1xuICAgIGhhbmRsZSA9IHRoaXMuc291bmQuYWRkRXZlbnRMaXN0ZW5lcihcImNvbXBsZXRlXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMub25Db21wbGV0ZSgpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgcmV0dXJuIHRoaXMudHJhY2tFdmVudEhhbmRsZXIoJ2NvbXBsZXRlJywgaGFuZGxlKTtcbiAgfTtcblxuICBBdWRpb1RyYWNrLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc291bmQuc3RvcCgpO1xuICB9O1xuXG4gIEF1ZGlvVHJhY2sucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmRlc3Ryb3lFdmVudHMoKTtcbiAgICB0aGlzLmlzRGVhZCA9IHRydWU7XG4gICAgdGhpcy5zb3VuZC5yZW1vdmVBbGxFdmVudExpc3RlbmVycygpO1xuICAgIHRoaXMuc291bmQuc3RvcCgpO1xuICAgIHJldHVybiB0aGlzLnNvdW5kLmRlc3Ryb3koKTtcbiAgfTtcblxuICBBdWRpb1RyYWNrLmluaXRTb3VuZFNldHRpbmdzID0gZnVuY3Rpb24odm9sdW1lKSB7XG4gICAgaWYgKHZvbHVtZSA9PSBudWxsKSB7XG4gICAgICB2b2x1bWUgPSAxO1xuICAgIH1cbiAgICBpZiAoQXVkaW9UcmFjay5wcGMgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gQXVkaW9UcmFjay5wcGMgPSBuZXcgY3JlYXRlanMuUGxheVByb3BzQ29uZmlnKCkuc2V0KHtcbiAgICAgIGludGVycnVwdDogY3JlYXRlanMuU291bmQuSU5URVJSVVBUX0FOWSxcbiAgICAgIHZvbHVtZTogdm9sdW1lLFxuICAgICAgcGFuOiAxXG4gICAgfSk7XG4gIH07XG5cbiAgQXVkaW9UcmFjay5wcm90b3R5cGUucGFyc2VDb25maWcgPSBmdW5jdGlvbihjb25maWcpIHtcbiAgICBpZiAoY29uZmlnLmxvb3AgIT0gbnVsbCkge1xuICAgICAgaWYgKGNvbmZpZy5sb29wID09PSB0cnVlICYmIHR5cGVvZiBjb25maWcubG9vcCAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICBjb25maWcubG9vcCA9IC0xO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY29uZmlnLnBhbiA9IDE7XG4gIH07XG5cbiAgQXVkaW9UcmFjay5wcm90b3R5cGUuZmFkZSA9IGZ1bmN0aW9uKGZhZGVEdXJhdGlvbk1zLCBkaXJlY3Rpb24sIGRvRGVzdHJveSkge1xuICAgIHZhciBmYWRlSW50ZXJ2YWwsIGluY3JhbWVudCwgc2Vjb25kcywgc291bmQsIHRpY2tDb3VudGVyLCB0aWNrRHVyYXRpb24sIHRpY2tzLCB0aWNrc1BlclNlY29uZDtcbiAgICBpZiAoZGlyZWN0aW9uID09IG51bGwpIHtcbiAgICAgIGRpcmVjdGlvbiA9IDE7XG4gICAgfVxuICAgIGlmIChkb0Rlc3Ryb3kgPT0gbnVsbCkge1xuICAgICAgZG9EZXN0cm95ID0gZmFsc2U7XG4gICAgfVxuICAgIHNlY29uZHMgPSBmYWRlRHVyYXRpb25NcyAvIDEwMDA7XG4gICAgdGlja3NQZXJTZWNvbmQgPSAyMDtcbiAgICB0aWNrcyA9IHNlY29uZHMgKiB0aWNrc1BlclNlY29uZDtcbiAgICB0aWNrRHVyYXRpb24gPSBmYWRlRHVyYXRpb25NcyAvIHRpY2tzO1xuICAgIGlmIChkaXJlY3Rpb24gPT09IDEpIHtcbiAgICAgIGluY3JhbWVudCA9ICgxIC0gdGhpcy5zb3VuZC52b2x1bWUpIC8gdGlja3M7XG4gICAgfSBlbHNlIHtcbiAgICAgIGluY3JhbWVudCA9IHRoaXMuc291bmQudm9sdW1lIC8gdGlja3MgKiAtMTtcbiAgICB9XG4gICAgc291bmQgPSB0aGlzLnNvdW5kO1xuICAgIHRpY2tDb3VudGVyID0gMDtcbiAgICByZXR1cm4gZmFkZUludGVydmFsID0gc2V0SW50ZXJ2YWwoKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHNvdW5kLnZvbHVtZSArPSBpbmNyYW1lbnQ7XG4gICAgICAgIGlmICgrK3RpY2tDb3VudGVyID09PSB0aWNrcykge1xuICAgICAgICAgIGNsZWFySW50ZXJ2YWwoZmFkZUludGVydmFsKTtcbiAgICAgICAgICBpZiAoZG9EZXN0cm95KSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuZGVzdHJveSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSh0aGlzKSwgdGlja0R1cmF0aW9uKTtcbiAgfTtcblxuICBBdWRpb1RyYWNrLnByb3RvdHlwZS5mYWRlT3V0ID0gZnVuY3Rpb24oZmFkZUR1cmF0aW9uTXMsIGRvRGVzdHJveSkge1xuICAgIGlmIChkb0Rlc3Ryb3kgPT0gbnVsbCkge1xuICAgICAgZG9EZXN0cm95ID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICh0aGlzLmlzRGVhZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5mYWRlKGZhZGVEdXJhdGlvbk1zLCAtMSwgZG9EZXN0cm95KTtcbiAgfTtcblxuICBBdWRpb1RyYWNrLnByb3RvdHlwZS5mYWRlSW4gPSBmdW5jdGlvbihmYWRlRHVyYXRpb25NcywgZG9EZXN0cm95KSB7XG4gICAgaWYgKGRvRGVzdHJveSA9PSBudWxsKSB7XG4gICAgICBkb0Rlc3Ryb3kgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNEZWFkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmZhZGUoZmFkZUR1cmF0aW9uTXMsIDEsIGRvRGVzdHJveSk7XG4gIH07XG5cbiAgQXVkaW9UcmFjay5wcm90b3R5cGUudHJhY2tFdmVudEhhbmRsZXIgPSBmdW5jdGlvbihldmVudCwgaGFuZGxlcikge1xuICAgIHJldHVybiB0aGlzLmV2ZW50SGFuZGxlcnMucHVzaCh7XG4gICAgICBldmVudDogZXZlbnQsXG4gICAgICBoYW5kbGVyOiBoYW5kbGVyXG4gICAgfSk7XG4gIH07XG5cbiAgQXVkaW9UcmFjay5wcm90b3R5cGUuZGVzdHJveUV2ZW50cyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBldm50LCBpLCBsZW4sIHJlZiwgcmVzdWx0cztcbiAgICByZWYgPSB0aGlzLmV2ZW50SGFuZGxlcnM7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgZXZudCA9IHJlZltpXTtcbiAgICAgIHJlc3VsdHMucHVzaCh0aGlzLnNvdW5kLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZudC5ldmVudCwgZXZudC5oYW5kbGVyKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIHJldHVybiBBdWRpb1RyYWNrO1xuXG59KSgpO1xuIiwidmFyIEFzc2V0UHJlbG9hZGVyLCBDaGFwdGVySGVhZGluZyxcbiAgYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH07XG5cbkFzc2V0UHJlbG9hZGVyID0gcmVxdWlyZSgnbWlzYy9hc3NldC1wcmVsb2FkZXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSBDaGFwdGVySGVhZGluZyA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gQ2hhcHRlckhlYWRpbmcoZGF0YSwgbG9hZENvbXBsZXRlKSB7XG4gICAgdGhpcy5sb2FkQ29tcGxldGUgPSBsb2FkQ29tcGxldGU7XG4gICAgdGhpcy5jb21wbGV0ZSA9IGJpbmQodGhpcy5jb21wbGV0ZSwgdGhpcyk7XG4gICAgdGhpcy51cGRhdGUgPSBiaW5kKHRoaXMudXBkYXRlLCB0aGlzKTtcbiAgICB0aGlzLiRlbCA9ICQoJ2JvZHknKTtcbiAgICB0aGlzLiRub2RlID0gJChqYWRlVGVtcGxhdGVbJ21pc2MvY2hhcHRlci1oZWFkaW5nJ10oe1xuICAgICAgdGl0bGU6IGRhdGEudGl0bGUsXG4gICAgICBzdWJ0aXRsZTogZGF0YS5zdWJ0aXRsZVxuICAgIH0pKTtcbiAgICB0aGlzLiRlbC5hcHBlbmQodGhpcy4kbm9kZSk7XG4gICAgdGhpcy4kZmcgPSAkKFwiLmZnXCIsIHRoaXMuJG5vZGUpO1xuICAgIHNoYWRvd0ljb25zSW5zdGFuY2Uuc3ZnUmVwbGFjZVdpdGhTdHJpbmcocHhTdmdJY29uU3RyaW5nLCB0aGlzLiRub2RlKTtcbiAgICB0aGlzLnByZWxvYWQoZGF0YSk7XG4gIH1cblxuICBDaGFwdGVySGVhZGluZy5wcm90b3R5cGUucHJlbG9hZCA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2YXIgcHJlbG9hZGVyO1xuICAgIHJldHVybiBwcmVsb2FkZXIgPSBuZXcgQXNzZXRQcmVsb2FkZXIoZGF0YSwgdGhpcy5jb21wbGV0ZSwgdGhpcy51cGRhdGUpO1xuICB9O1xuXG4gIENoYXB0ZXJIZWFkaW5nLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihwZXJjKSB7XG4gICAgaWYgKHBlcmMgPiAxKSB7XG4gICAgICBwZXJjID0gMTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuJGZnLmNzcyh7XG4gICAgICB3aWR0aDogKE1hdGgucm91bmQocGVyYyAqIDEwMCkpICsgXCIlXCJcbiAgICB9KTtcbiAgfTtcblxuICBDaGFwdGVySGVhZGluZy5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLiRub2RlLmFkZENsYXNzKCdjb21wbGV0ZScpO1xuICAgIHRoaXMuZGVzdHJveSgpO1xuICAgIHJldHVybiB0aGlzLmxvYWRDb21wbGV0ZSgpO1xuICB9O1xuXG4gIENoYXB0ZXJIZWFkaW5nLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJG5vZGUudmVsb2NpdHkoe1xuICAgICAgb3BhY2l0eTogMFxuICAgIH0sIHtcbiAgICAgIGRlbGF5OiAzMDAsXG4gICAgICBkdXJhdGlvbjogNDAwLFxuICAgICAgY29tcGxldGU6IChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLiRub2RlLnJlbW92ZSgpO1xuICAgICAgICB9O1xuICAgICAgfSkodGhpcylcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gQ2hhcHRlckhlYWRpbmc7XG5cbn0pKCk7XG4iLCJ2YXIgQ2hhcHRlciwgQ2hhcHRlckhlYWRpbmcsIFNsaWRlcyxcbiAgYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH07XG5cblNsaWRlcyA9IHJlcXVpcmUoJ2VwaXNvZGUvc2xpZGVzJyk7XG5cbkNoYXB0ZXJIZWFkaW5nID0gcmVxdWlyZSgnZXBpc29kZS9jaGFwdGVyLWhlYWRpbmcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBDaGFwdGVyID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBDaGFwdGVyKGNoYXB0ZXJEYXRhLCBtb3ZpZSwgdXgsIG9uQ2hhcHRlckNvbXBldGUpIHtcbiAgICB0aGlzLmNoYXB0ZXJEYXRhID0gY2hhcHRlckRhdGE7XG4gICAgdGhpcy5tb3ZpZSA9IG1vdmllO1xuICAgIHRoaXMudXggPSB1eDtcbiAgICB0aGlzLm9uQ2hhcHRlckNvbXBldGUgPSBvbkNoYXB0ZXJDb21wZXRlO1xuICAgIHRoaXMub25TbGlkZXNDb21wbGV0ZSA9IGJpbmQodGhpcy5vblNsaWRlc0NvbXBsZXRlLCB0aGlzKTtcbiAgICB0aGlzLnN0YXJ0U2xpZGVzID0gYmluZCh0aGlzLnN0YXJ0U2xpZGVzLCB0aGlzKTtcbiAgICB0aGlzLnRpdGxlID0gdGhpcy5jaGFwdGVyRGF0YS50aXRsZTtcbiAgfVxuXG4gIENoYXB0ZXIucHJvdG90eXBlLnByZWxvYWQgPSBmdW5jdGlvbihjYikge1xuICAgIHZhciBjaGFwdGVySGVhZGluZztcbiAgICBhcmlzdG90bGUuZGV2VG9vbHMuZ28odGhpcy5jaGFwdGVyRGF0YS5kZXYsIHRoaXMuY2hhcHRlckRhdGEuc2xpZGVzKTtcbiAgICByZXR1cm4gY2hhcHRlckhlYWRpbmcgPSBuZXcgQ2hhcHRlckhlYWRpbmcodGhpcy5jaGFwdGVyRGF0YSwgY2IpO1xuICB9O1xuXG4gIENoYXB0ZXIucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24oZmlyc3RTbGlkZVRpdGxlKSB7XG4gICAgdGhpcy5maXJzdFNsaWRlVGl0bGUgPSBmaXJzdFNsaWRlVGl0bGU7XG4gICAgbG9nKFwiLS0tLS0tLS0tLS0tLS0tIFwiICsgdGhpcy5jaGFwdGVyRGF0YS50aXRsZSk7XG4gICAgUHViU3ViLnB1Ymxpc2goJ21ldGEuY2hhcHRlci5zdGFydCcsIHRoaXMuY2hhcHRlckRhdGEpO1xuICAgIHJldHVybiB0aGlzLnN0YXJ0U2xpZGVzKCk7XG4gIH07XG5cbiAgQ2hhcHRlci5wcm90b3R5cGUuc3RhcnRTbGlkZXMgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnNsaWRlcyA9IG5ldyBTbGlkZXModGhpcy5jaGFwdGVyRGF0YSwgdGhpcy5tb3ZpZSwgdGhpcy51eCwgdGhpcy5vblNsaWRlc0NvbXBsZXRlKTtcbiAgICBpZiAodGhpcy5maXJzdFNsaWRlVGl0bGUgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2xpZGVzLmdvdG9TbGlkZUJ5VGl0bGUodGhpcy5maXJzdFNsaWRlVGl0bGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5zbGlkZXMuc3RhcnQoKTtcbiAgICB9XG4gIH07XG5cbiAgQ2hhcHRlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLnNsaWRlcyAhPSBudWxsKSB7XG4gICAgICB0aGlzLnNsaWRlcy5kZXN0cm95KCk7XG4gICAgICByZXR1cm4gdGhpcy5zbGlkZXMgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICBDaGFwdGVyLnByb3RvdHlwZS5vblNsaWRlc0NvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG4gICAgUHViU3ViLnB1Ymxpc2goJ21ldGEuY2hhcHRlci5maW5pc2gnLCB0aGlzLmNoYXB0ZXJEYXRhKTtcbiAgICByZXR1cm4gdGhpcy5vbkNoYXB0ZXJDb21wZXRlKCk7XG4gIH07XG5cbiAgcmV0dXJuIENoYXB0ZXI7XG5cbn0pKCk7XG4iLCJ2YXIgQXNzZXRQcmVsb2FkZXIsIENoYXB0ZXIsIEVwaXNvZGUsIFNlcXVlbmNlLFxuICBiaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfTtcblxuQ2hhcHRlciA9IHJlcXVpcmUoJ2VwaXNvZGUvY2hhcHRlcicpO1xuXG5TZXF1ZW5jZSA9IHJlcXVpcmUoJ21pc2MvU2VxdWVuY2UnKTtcblxuQXNzZXRQcmVsb2FkZXIgPSByZXF1aXJlKCdtaXNjL2Fzc2V0LXByZWxvYWRlcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVwaXNvZGUgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIEVwaXNvZGUodHJhaW5pbmdEYXRhMSwgbW92aWUsIHV4LCBjaHJvbWUpIHtcbiAgICB0aGlzLnRyYWluaW5nRGF0YSA9IHRyYWluaW5nRGF0YTE7XG4gICAgdGhpcy5tb3ZpZSA9IG1vdmllO1xuICAgIHRoaXMudXggPSB1eDtcbiAgICB0aGlzLmNocm9tZSA9IGNocm9tZTtcbiAgICB0aGlzLmNoYXB0ZXJHbyA9IGJpbmQodGhpcy5jaGFwdGVyR28sIHRoaXMpO1xuICAgIHRoaXMucGxheUNoYXB0ZXIgPSBiaW5kKHRoaXMucGxheUNoYXB0ZXIsIHRoaXMpO1xuICAgIHRoaXMubmV4dENoYXB0ZXIgPSBiaW5kKHRoaXMubmV4dENoYXB0ZXIsIHRoaXMpO1xuICAgIHRoaXMuY2hhcHRlckNvbXBsZXRlID0gYmluZCh0aGlzLmNoYXB0ZXJDb21wbGV0ZSwgdGhpcyk7XG4gICAgdGhpcy5iZWdpbiA9IGJpbmQodGhpcy5iZWdpbiwgdGhpcyk7XG4gICAgaWYgKGFyaXN0b3RsZS5nbG9iYWxzLmdldChcImVwaXNvZGVcIiArIGFyaXN0b3RsZS5lcGlzb2RlTnVtICsgXCJfY2hvaWNlc1wiLCBmYWxzZSkgPT0gbnVsbCkge1xuICAgICAgYXJpc3RvdGxlLmdsb2JhbHMuc2V0KFwiZXBpc29kZVwiICsgYXJpc3RvdGxlLmVwaXNvZGVOdW0gKyBcIl9jaG9pY2VzXCIsIFtdKTtcbiAgICB9XG4gICAgYXJpc3RvdGxlLmVwaXNvZGUgPSB0aGlzO1xuICAgIHRoaXMuZXBpc29kZU51bSA9IHRoaXMudHJhaW5pbmdEYXRhLmVwaXNvZGU7XG4gICAgdGhpcy5pc0xhc3RFcGlzb2RlID0gdGhpcy50cmFpbmluZ0RhdGEuaXNMYXN0RXBpc29kZTtcbiAgICBhcmlzdG90bGUuZXBpc29kZURhdGEgPSB0aGlzLnRyYWluaW5nRGF0YTtcbiAgICBhcmlzdG90bGUubGFiZWxzID0gdGhpcy50cmFpbmluZ0RhdGEubGFiZWxzO1xuICAgIHRoaXMubmV4dFJhbmtJZCA9IHRoaXMudHJhaW5pbmdEYXRhLm5leHRSYW5rSWQ7XG4gICAgdGhpcy5jaHJvbWUuYnVpbGQoKTtcbiAgICBuZXcgQXNzZXRQcmVsb2FkZXIodGhpcy50cmFpbmluZ0RhdGEuYWN0aW9uLCB0aGlzLmJlZ2luKTtcbiAgfVxuXG4gIEVwaXNvZGUucHJvdG90eXBlLmJlZ2luID0gZnVuY3Rpb24oKSB7XG4gICAgYXJpc3RvdGxlLmRldlRvb2xzLmdvKHRoaXMudHJhaW5pbmdEYXRhLmRldiwgdGhpcy50cmFpbmluZ0RhdGEuY2hhcHRlcnMpO1xuICAgIFB1YlN1Yi5wdWJsaXNoKFwiZXBpc29kZS5sb2FkZWRcIiwgdGhpcy50cmFpbmluZ0RhdGEpO1xuICAgIHRoaXMuY3JlYXRlQ2hhcHRlcnModGhpcy50cmFpbmluZ0RhdGEpO1xuICAgIGlmICh0aGlzLnRyYWluaW5nRGF0YS5za2lwU2xhdGUpIHtcbiAgICAgIHRoaXMucGxheUNoYXB0ZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93SW50cm8odGhpcy50cmFpbmluZ0RhdGEpO1xuICAgIH1cbiAgICBpZiAodGhpcy50cmFpbmluZ0RhdGEuYWN0aW9uICE9IG51bGwpIHtcbiAgICAgIHJldHVybiBhcmlzdG90bGUuY29tbWFuZGVyW1wiZG9cIl0odGhpcy50cmFpbmluZ0RhdGEuYWN0aW9uKTtcbiAgICB9XG4gIH07XG5cbiAgRXBpc29kZS5wcm90b3R5cGUuc2hvd0ludHJvID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciBtZTtcbiAgICBtZSA9IHRoaXM7XG4gICAgaWYgKGFyaXN0b3RsZS5kZXZUb29scy5za2lwU2xhdGUpIHtcbiAgICAgIHRoaXMuY2hlY2tQcmV2TG9jYXRpb25BbmRCZWdpbihkYXRhKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy51eC5wb3B1bGF0ZSh7XG4gICAgICBjb21wb25lbnRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBraW5kOiBcImVwaXNvZGUtaW50cm9cIixcbiAgICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgIHRpdGxlOiBkYXRhLnRpdGxlLFxuICAgICAgICAgICAgc3VidGl0bGU6IGRhdGEuc3VidGl0bGUsXG4gICAgICAgICAgICBlcGlzb2RlOiBkYXRhLmVwaXNvZGVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9KTtcbiAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIG1lLnV4LnJlbW92ZUN1cnJlbnRDb21wb25lbnRzKCk7XG4gICAgICByZXR1cm4gbWUuY2hlY2tQcmV2TG9jYXRpb25BbmRCZWdpbihkYXRhKTtcbiAgICB9LCAyMDAwKTtcbiAgfTtcblxuICBFcGlzb2RlLnByb3RvdHlwZS5jaGVja1ByZXZMb2NhdGlvbkFuZEJlZ2luID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIGlmIChhcmlzdG90bGUubG9jYWxTdG9yYWdlUHJveHkuc3RvcmUgIT0gbnVsbCkge1xuICAgICAgaWYgKGFyaXN0b3RsZS5sb2NhbFN0b3JhZ2VQcm94eS5zdG9yZS5sb2NhdGlvbiAhPSBudWxsKSB7XG4gICAgICAgIGlmIChhcmlzdG90bGUubG9jYWxTdG9yYWdlUHJveHkuc3RvcmUubG9jYXRpb24uZXBpc29kZU51bSA9PT0gdGhpcy5lcGlzb2RlTnVtKSB7XG4gICAgICAgICAgaWYgKGFyaXN0b3RsZS5sb2NhbFN0b3JhZ2VQcm94eS5zdG9yZS5sb2NhdGlvbi5zbGlkZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBhcmlzdG90bGUubG9jYWxTdG9yYWdlUHJveHkucmVoeWRyYXRlKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnBsYXlDaGFwdGVyKCk7XG4gIH07XG5cbiAgRXBpc29kZS5wcm90b3R5cGUuZ290b0xvY2F0aW9uQnlUaXRsZSA9IGZ1bmN0aW9uKHRpdGxlLCBjaGFwVGl0bGUpIHtcbiAgICB2YXIgYnJlYWtMb29wMSwgY2hhcHRlciwgY2hhcHRlclRpdGxlLCBpLCBqLCBrLCBrZXksIGxheWVyLCBsYXllcnMsIGxheWVyc0FyLCBsZW4sIGxlbjEsIGxlbjIsIHJlZiwgcmVmMSwgcmVmMiwgcmVmMywgc2xpZGUsIHNsaWRlVGl0bGU7XG4gICAgUHViU3ViLnB1Ymxpc2goJ21vdmllLmxheWVycy5jbGVhci1hbGwnKTtcbiAgICBsYXllcnMgPSB7fTtcbiAgICByZWYgPSBhcmlzdG90bGUuZXBpc29kZURhdGEuY2hhcHRlcnM7XG4gICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjaGFwdGVyID0gcmVmW2ldO1xuICAgICAgY2hhcHRlclRpdGxlID0gY2hhcHRlci50aXRsZTtcbiAgICAgIGlmIChjaGFwdGVyLnRpdGxlID09PSB0aXRsZSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHJlZjEgPSBjaGFwdGVyLnNsaWRlcztcbiAgICAgIGZvciAoaiA9IDAsIGxlbjEgPSByZWYxLmxlbmd0aDsgaiA8IGxlbjE7IGorKykge1xuICAgICAgICBzbGlkZSA9IHJlZjFbal07XG4gICAgICAgIGlmIChzbGlkZS50aXRsZSA9PT0gdGl0bGUgJiYgY2hhcHRlclRpdGxlID09PSBjaGFwVGl0bGUpIHtcbiAgICAgICAgICBzbGlkZVRpdGxlID0gc2xpZGUudGl0bGU7XG4gICAgICAgICAgYnJlYWtMb29wMSA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCgocmVmMiA9IHNsaWRlLm1vdmllKSAhPSBudWxsID8gcmVmMi5sYXllcnMgOiB2b2lkIDApICE9IG51bGwpIHtcbiAgICAgICAgICByZWYzID0gc2xpZGUubW92aWUubGF5ZXJzO1xuICAgICAgICAgIGZvciAoayA9IDAsIGxlbjIgPSByZWYzLmxlbmd0aDsgayA8IGxlbjI7IGsrKykge1xuICAgICAgICAgICAgbGF5ZXIgPSByZWYzW2tdO1xuICAgICAgICAgICAgbGF5ZXJzW2xheWVyLmRlcHRoXSA9IGxheWVyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGJyZWFrTG9vcDEpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIGxheWVyc0FyID0gW107XG4gICAgZm9yIChrZXkgaW4gbGF5ZXJzKSB7XG4gICAgICBsYXllciA9IGxheWVyc1trZXldO1xuICAgICAgbGF5ZXJzQXIucHVzaChsYXllcik7XG4gICAgfVxuICAgIHRoaXMuY2hhcHRlcnMuYWN0aXZhdGVJdGVtQnlQYXJhbSgndGl0bGUnLCBjaGFwdGVyVGl0bGUpO1xuICAgIGlmIChzbGlkZVRpdGxlICE9IG51bGwpIHtcbiAgICAgIHRoaXMucGxheUNoYXB0ZXIoc2xpZGUudGl0bGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnBsYXlDaGFwdGVyKCk7XG4gICAgfVxuICAgIGlmIChsYXllcnNBci5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gUHViU3ViLnB1Ymxpc2goJ21vdmllLnNldC1kcmllZC1sYXllcnMnLCBsYXllcnNBcik7XG4gICAgfVxuICB9O1xuXG4gIEVwaXNvZGUucHJvdG90eXBlLmNyZWF0ZUNoYXB0ZXJzID0gZnVuY3Rpb24odHJhaW5pbmdEYXRhKSB7XG4gICAgdmFyIGNoYXB0ZXJEYXRhLCBjaGFwdGVycywgaSwgbGVuLCByZWY7XG4gICAgY2hhcHRlcnMgPSBbXTtcbiAgICByZWYgPSB0cmFpbmluZ0RhdGEuY2hhcHRlcnM7XG4gICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjaGFwdGVyRGF0YSA9IHJlZltpXTtcbiAgICAgIGNoYXB0ZXJzLnB1c2gobmV3IENoYXB0ZXIoY2hhcHRlckRhdGEsIHRoaXMubW92aWUsIHRoaXMudXgsIHRoaXMuY2hhcHRlckNvbXBsZXRlKSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmNoYXB0ZXJzID0gbmV3IFNlcXVlbmNlKGNoYXB0ZXJzKTtcbiAgfTtcblxuICBFcGlzb2RlLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBsYXlDaGFwdGVyKCk7XG4gIH07XG5cbiAgRXBpc29kZS5wcm90b3R5cGUuY2hhcHRlckNvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucmVmcmVzaENoYXB0ZXIoKTtcbiAgfTtcblxuICBFcGlzb2RlLnByb3RvdHlwZS5yZWZyZXNoQ2hhcHRlciA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmNoYXB0ZXJzLmlzQXRMYXN0SXRlbSgpKSB7XG4gICAgICByZXR1cm4gdGhpcy5lcGlzb2RlQ29tcGxldGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jaGFwdGVycy5uZXh0KCk7XG4gICAgICByZXR1cm4gUHViU3ViLnB1Ymxpc2goXCJyZWZyZXNoLm9uLmNoYXB0ZXJcIiwgdGhpcy5jaGFwdGVycy5nZXRDdXJyZW50SXRlbSgpLnRpdGxlKTtcbiAgICB9XG4gIH07XG5cbiAgRXBpc29kZS5wcm90b3R5cGUubmV4dENoYXB0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5jaGFwdGVycy5pc0F0TGFzdEl0ZW0oKSkge1xuICAgICAgcmV0dXJuIHRoaXMuZXBpc29kZUNvbXBsZXRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2hhcHRlcnMubmV4dCgpO1xuICAgICAgcmV0dXJuIHRoaXMucGxheUNoYXB0ZXIoKTtcbiAgICB9XG4gIH07XG5cbiAgRXBpc29kZS5wcm90b3R5cGUucGxheUNoYXB0ZXIgPSBmdW5jdGlvbihmaXJzdFNsaWRlKSB7XG4gICAgdGhpcy5maXJzdFNsaWRlID0gZmlyc3RTbGlkZSAhPSBudWxsID8gZmlyc3RTbGlkZSA6IG51bGw7XG4gICAgcmV0dXJuIHRoaXMuY2hhcHRlcnMuZ2V0Q3VycmVudEl0ZW0oKS5wcmVsb2FkKHRoaXMuY2hhcHRlckdvKTtcbiAgfTtcblxuICBFcGlzb2RlLnByb3RvdHlwZS5jaGFwdGVyR28gPSBmdW5jdGlvbigpIHtcbiAgICBQdWJTdWIucHVibGlzaCgnbW92aWUucmVoeWRyYXRlLWxheWVycycpO1xuICAgIFB1YlN1Yi5wdWJsaXNoKCdjaGFwdGVyLnN0YXJ0ZWQnLCB0aGlzLmNoYXB0ZXJzLmdldEN1cnJlbnRJdGVtKCkuY2hhcHRlckRhdGEudGl0bGUpO1xuICAgIHJldHVybiB0aGlzLmNoYXB0ZXJzLmdldEN1cnJlbnRJdGVtKCkuc3RhcnQodGhpcy5maXJzdFNsaWRlKTtcbiAgfTtcblxuICBFcGlzb2RlLnByb3RvdHlwZS5lcGlzb2RlQ29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbmV3RXBpc29kZU51bTtcbiAgICBpZiAodGhpcy5pc0xhc3RFcGlzb2RlKSB7XG4gICAgICByZXR1cm4gYXJpc3RvdGxlLmxvY2FsU3RvcmFnZVByb3h5LmNvbXBsZXRlQ291cnNlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld0VwaXNvZGVOdW0gPSBTdHJpbmcoTnVtYmVyKGFyaXN0b3RsZS5lcGlzb2RlTnVtKSArIDEpO1xuICAgICAgcmV0dXJuIGFyaXN0b3RsZS5sb2NhbFN0b3JhZ2VQcm94eS5yZWZyZXNoT25FcGlzb2RlKG5ld0VwaXNvZGVOdW0pO1xuICAgIH1cbiAgfTtcblxuICBFcGlzb2RlLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNoYXB0ZXIsIGksIGxlbiwgcmVmLCByZXN1bHRzO1xuICAgIHJlZiA9IHRoaXMuY2hhcHRlcnMuaXRlbXM7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgY2hhcHRlciA9IHJlZltpXTtcbiAgICAgIHJlc3VsdHMucHVzaChjaGFwdGVyLmRlc3Ryb3koKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIHJldHVybiBFcGlzb2RlO1xuXG59KSgpO1xuIiwidmFyIEF1ZGlvVHJhY2ssIFNWR0FuaW1hdGlvbiwgU2xpZGUsXG4gIGJpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9O1xuXG5BdWRpb1RyYWNrID0gcmVxdWlyZShcImVwaXNvZGUvYXVkaW8tdHJhY2tcIik7XG5cblNWR0FuaW1hdGlvbiA9IHJlcXVpcmUoXCJtb3ZpZS9zdmctYW5pbWF0aW9uXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNsaWRlID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBTbGlkZShtb3ZpZSwgc2xpZGVVWCwgc2xpZGVEYXRhLCBvblNsaWRlQ29tcGxldGUpIHtcbiAgICB0aGlzLm1vdmllID0gbW92aWU7XG4gICAgdGhpcy5zbGlkZVVYID0gc2xpZGVVWDtcbiAgICB0aGlzLnNsaWRlRGF0YSA9IHNsaWRlRGF0YTtcbiAgICB0aGlzLm9uU2xpZGVDb21wbGV0ZSA9IG9uU2xpZGVDb21wbGV0ZTtcbiAgICB0aGlzLnBsYXkgPSBiaW5kKHRoaXMucGxheSwgdGhpcyk7XG4gICAgdGhpcy50aXRsZSA9IHRoaXMuc2xpZGVEYXRhLnRpdGxlO1xuICB9XG5cbiAgU2xpZGUucHJvdG90eXBlLnBsYXkgPSBmdW5jdGlvbihvbkNvbXBsZXRlKSB7XG4gICAgUHViU3ViLnB1Ymxpc2goJ2xvZ2dlci5wcmludCcsIHtcbiAgICAgIHN0cjogXCJTTElERSBcIiArIHRoaXMuc2xpZGVEYXRhLmluZGV4LFxuICAgICAgY2xlYXJQcmV2aW91czogZmFsc2VcbiAgICB9KTtcbiAgICBpZiAodGhpcy5zbGlkZURhdGEudGl0bGUgIT0gbnVsbCkge1xuICAgICAgUHViU3ViLnB1Ymxpc2goJ3NsaWRlLmFjdGl2YXRlZCcsIHRoaXMuc2xpZGVEYXRhLnRpdGxlKTtcbiAgICB9XG4gICAgdGhpcy5tb3ZpZS5wb3B1bGF0ZSh0aGlzLnNsaWRlRGF0YS5tb3ZpZSk7XG4gICAgdGhpcy5zbGlkZVVYLnBvcHVsYXRlKHRoaXMuc2xpZGVEYXRhLnV4KTtcbiAgICB0aGlzLnNldER1cmF0aW9uKCk7XG4gICAgdGhpcy5ydW5DdGFubGVlKHRoaXMuc2xpZGVEYXRhLmN0YW5sZWUpO1xuICAgIHRoaXMucnVuRGlhbG9ndWUodGhpcy5zbGlkZURhdGEuZGlhbG9ndWUpO1xuICAgIHRoaXMucnVuQWN0aW9ucyh0aGlzLnNsaWRlRGF0YS5hY3Rpb24pO1xuICAgIHJldHVybiB0aGlzLnJ1blNvdW5kRngodGhpcy5zbGlkZURhdGEuc2Z4KTtcbiAgfTtcblxuICBTbGlkZS5wcm90b3R5cGUucnVuU291bmRGeCA9IGZ1bmN0aW9uKHNmeCkge1xuICAgIGlmIChzZnggPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gUHViU3ViLnB1Ymxpc2goJ3NmeC5hZGQnLCBzZngpO1xuICB9O1xuXG4gIFNsaWRlLnByb3RvdHlwZS5ydW5BY3Rpb25zID0gZnVuY3Rpb24oYWN0aW9uKSB7XG4gICAgaWYgKGFjdGlvbiA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiBhcmlzdG90bGUuY29tbWFuZGVyW1wiZG9cIl0oYWN0aW9uKTtcbiAgfTtcblxuICBTbGlkZS5wcm90b3R5cGUuc2V0RHVyYXRpb24gPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgY3RhbmxlZVN1YnNjcmlwdGlvbiwgbGlzdGVuU3Vic2NyaXB0aW9uLCB1eFN1YnNjcmlwdGlvbjtcbiAgICBpZiAodGhpcy5zbGlkZURhdGEuZHVyYXRpb24gPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzd2l0Y2ggKHRoaXMuc2xpZGVEYXRhLmR1cmF0aW9uLmtpbmQpIHtcbiAgICAgIGNhc2UgXCJ0aW1lXCI6XG4gICAgICAgIHJldHVybiBhcmlzdG90bGUudGltZW91dCh0aGlzLm9uU2xpZGVDb21wbGV0ZSwgdGhpcy5zbGlkZURhdGEuZHVyYXRpb24uc2Vjb25kcyAqIDEwMDApO1xuICAgICAgY2FzZSBcInVzZXJcIjpcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFwid2FpdGluZyBvbiB0aGUgdXNlclwiKTtcbiAgICAgIGNhc2UgXCJ1eFwiOlxuICAgICAgICByZXR1cm4gdXhTdWJzY3JpcHRpb24gPSBQdWJTdWIuc3Vic2NyaWJlKCd1eC5jb21wbGV0ZScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIFB1YlN1Yi51bnN1YnNjcmliZSh1eFN1YnNjcmlwdGlvbik7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMub25TbGlkZUNvbXBsZXRlKCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSkodGhpcykpO1xuICAgICAgY2FzZSBcImRpYWxvZ3VlXCI6XG4gICAgICBjYXNlIFwiY3RhbmxlZVwiOlxuICAgICAgICByZXR1cm4gY3RhbmxlZVN1YnNjcmlwdGlvbiA9IFB1YlN1Yi5zdWJzY3JpYmUoJ2RpYWxvZ3VlLmNvbXBsZXRlJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgUHViU3ViLnVuc3Vic2NyaWJlKGN0YW5sZWVTdWJzY3JpcHRpb24pO1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLm9uU2xpZGVDb21wbGV0ZSgpO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pKHRoaXMpKTtcbiAgICAgIGNhc2UgXCJsaXN0ZW5cIjpcbiAgICAgICAgcmV0dXJuIGxpc3RlblN1YnNjcmlwdGlvbiA9IFB1YlN1Yi5zdWJzY3JpYmUodGhpcy5zbGlkZURhdGEuZHVyYXRpb24uZXZlbnQsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIFB1YlN1Yi51bnN1YnNjcmliZShsaXN0ZW5TdWJzY3JpcHRpb24pO1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLm9uU2xpZGVDb21wbGV0ZSgpO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pKHRoaXMpKTtcbiAgICB9XG4gIH07XG5cbiAgU2xpZGUucHJvdG90eXBlLnJ1bkN0YW5sZWUgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgaWYgKGRhdGEgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGFyaXN0b3RsZS5jdGFubGVlLmFjdGl2YXRlKGRhdGEpO1xuICAgIH1cbiAgfTtcblxuICBTbGlkZS5wcm90b3R5cGUucnVuRGlhbG9ndWUgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgaWYgKGRhdGEgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGFyaXN0b3RsZS5kaWFsb2d1ZS5hY3RpdmF0ZShkYXRhKTtcbiAgICB9XG4gIH07XG5cbiAgU2xpZGUucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gUHViU3ViLnVuc3Vic2NyaWJlKHRoaXMudG9rZW4xKTtcbiAgfTtcblxuICByZXR1cm4gU2xpZGU7XG5cbn0pKCk7XG4iLCJ2YXIgU2VxdWVuY2UsIFNsaWRlLCBTbGlkZXMsXG4gIGJpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9O1xuXG5TbGlkZSA9IHJlcXVpcmUoJ2VwaXNvZGUvc2xpZGUnKTtcblxuU2VxdWVuY2UgPSByZXF1aXJlKCdtaXNjL3NlcXVlbmNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2xpZGVzID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBTbGlkZXModHJhaW5pbmdEYXRhLCBtb3ZpZSwgdXgsIG9uU2hvd0NvbXBsZXRlKSB7XG4gICAgdmFyIHRva2VuMSwgdG9rZW4yLCB0b2tlbjMsIHRva2VuNCwgdG9rZW43O1xuICAgIHRoaXMub25TaG93Q29tcGxldGUgPSBvblNob3dDb21wbGV0ZTtcbiAgICB0aGlzLnNsaWRlQ29tcGxldGUgPSBiaW5kKHRoaXMuc2xpZGVDb21wbGV0ZSwgdGhpcyk7XG4gICAgdGhpcy5uZXh0U2xpZGUgPSBiaW5kKHRoaXMubmV4dFNsaWRlLCB0aGlzKTtcbiAgICBhcmlzdG90bGUuc2xpZGVzID0gdGhpcztcbiAgICB0aGlzLmNyZWF0ZVNsaWRlcyh0cmFpbmluZ0RhdGEsIG1vdmllLCB1eCk7XG4gICAgdG9rZW4xID0gUHViU3ViLnN1YnNjcmliZSgnc2xpZGVzLm5leHQnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLm5leHRTbGlkZSgpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgdG9rZW4yID0gUHViU3ViLnN1YnNjcmliZSgnc2xpZGVzLm5leHQtc2xpZGUnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLm5leHRTbGlkZSgpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgdG9rZW4zID0gUHViU3ViLnN1YnNjcmliZSgnc2xpZGVzLnJlcGxheScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMucmVwbGF5KCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0b2tlbjQgPSBQdWJTdWIuc3Vic2NyaWJlKCdzbGlkZXMucHJldi1zbGlkZScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMucHJldlNsaWRlKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0b2tlbjcgPSBQdWJTdWIuc3Vic2NyaWJlKCdtb3ZpZS5yZXBvcnQnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKF90aGlzLmdldEluZGV4QW5kVG90YWwoKSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvblRva2VucyA9IFt0b2tlbjEsIHRva2VuMiwgdG9rZW4zLCB0b2tlbjQsIHRva2VuN107XG4gIH1cblxuICBTbGlkZXMucHJvdG90eXBlLmNyZWF0ZVNsaWRlcyA9IGZ1bmN0aW9uKHRyYWluaW5nRGF0YSwgbW92aWUsIHV4KSB7XG4gICAgdmFyIGNvdW50LCBpLCBsZW4sIHJlZiwgc2xpZGVEYXRhLCBzbGlkZXM7XG4gICAgc2xpZGVzID0gW107XG4gICAgY291bnQgPSAwO1xuICAgIHJlZiA9IHRyYWluaW5nRGF0YS5zbGlkZXM7XG4gICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBzbGlkZURhdGEgPSByZWZbaV07XG4gICAgICBzbGlkZURhdGEuaW5kZXggPSBjb3VudCsrO1xuICAgICAgc2xpZGVzLnB1c2gobmV3IFNsaWRlKG1vdmllLCB1eCwgc2xpZGVEYXRhLCB0aGlzLnNsaWRlQ29tcGxldGUpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc2xpZGVzID0gbmV3IFNlcXVlbmNlKHNsaWRlcyk7XG4gIH07XG5cbiAgU2xpZGVzLnByb3RvdHlwZS5uZXh0U2xpZGUgPSBmdW5jdGlvbigpIHtcbiAgICBQdWJTdWIucHVibGlzaFN5bmMoJ2RpYWxvZ3VlLnNoaCcpO1xuICAgIGlmICh0aGlzLnNsaWRlcy5pc0F0TGFzdEl0ZW0oKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2xpZGVTaG93Q29tcGxldGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zbGlkZXMubmV4dCgpO1xuICAgICAgcmV0dXJuIHRoaXMucGxheVNsaWRlKCk7XG4gICAgfVxuICB9O1xuXG4gIFNsaWRlcy5wcm90b3R5cGUucmVwbGF5ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucGxheVNsaWRlKCk7XG4gIH07XG5cbiAgU2xpZGVzLnByb3RvdHlwZS5wcmV2U2xpZGUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnNsaWRlcy5wcmV2KCk7XG4gICAgcmV0dXJuIHRoaXMucGxheVNsaWRlKCk7XG4gIH07XG5cbiAgU2xpZGVzLnByb3RvdHlwZS5nb3RvU2xpZGUgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSBOdW1iZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLmdvdG9TbGlkZUJ5SW5kZXgoZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmdvdG9TbGlkZUJ5SWQoZGF0YSk7XG4gICAgfVxuICB9O1xuXG4gIFNsaWRlcy5wcm90b3R5cGUuZ290b1NsaWRlQnlJbmRleCA9IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgdGhpcy5zbGlkZXMuY2hhbmdlSXRlbUJ5SW5kZXgoaW5kZXgpO1xuICAgIHJldHVybiB0aGlzLnBsYXlTbGlkZSgpO1xuICB9O1xuXG4gIFNsaWRlcy5wcm90b3R5cGUuZ290b1NsaWRlQnlUaXRsZSA9IGZ1bmN0aW9uKHRpdGxlKSB7XG4gICAgdGhpcy5zbGlkZXMuYWN0aXZhdGVJdGVtQnlQYXJhbShcInRpdGxlXCIsIHRpdGxlKTtcbiAgICByZXR1cm4gdGhpcy5wbGF5U2xpZGUoKTtcbiAgfTtcblxuICBTbGlkZXMucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaSwgaiwgbGVuLCBsZW4xLCByZWYsIHJlZjEsIHJlc3VsdHMsIHNsaWRlLCB0b2tlbjtcbiAgICByZWYgPSB0aGlzLnNsaWRlcy5pdGVtcztcbiAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHNsaWRlID0gcmVmW2ldO1xuICAgICAgc2xpZGUuZGVzdHJveSgpO1xuICAgIH1cbiAgICB0aGlzLnNsaWRlcyA9IG51bGw7XG4gICAgcmVmMSA9IHRoaXMuc3Vic2NyaXB0aW9uVG9rZW5zO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGogPSAwLCBsZW4xID0gcmVmMS5sZW5ndGg7IGogPCBsZW4xOyBqKyspIHtcbiAgICAgIHRva2VuID0gcmVmMVtqXTtcbiAgICAgIHJlc3VsdHMucHVzaChQdWJTdWIudW5zdWJzY3JpYmUodG9rZW4pKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgU2xpZGVzLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBsYXlTbGlkZSgpO1xuICB9O1xuXG4gIFNsaWRlcy5wcm90b3R5cGUuc2xpZGVDb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm5leHRTbGlkZSgpO1xuICB9O1xuXG4gIFNsaWRlcy5wcm90b3R5cGUucGxheVNsaWRlID0gZnVuY3Rpb24oKSB7XG4gICAgUHViU3ViLnB1Ymxpc2goJ3NsaWRlcy5jaGFuZ2luZycpO1xuICAgIHJldHVybiB0aGlzLnNsaWRlcy5nZXRDdXJyZW50SXRlbSgpLnBsYXkodGhpcy5zbGlkZUNvbXBsZXRlKTtcbiAgfTtcblxuICBTbGlkZXMucHJvdG90eXBlLnNsaWRlU2hvd0NvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMub25TaG93Q29tcGxldGUoKTtcbiAgfTtcblxuICBTbGlkZXMucHJvdG90eXBlLmdldEN1cnJlbnRJbmRleCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnNsaWRlcy5nZXRDdXJyZW50SXRlbSgpLnNsaWRlRGF0YS5pbmRleDtcbiAgfTtcblxuICBTbGlkZXMucHJvdG90eXBlLmdldEluZGV4QW5kVG90YWwgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJzbGlkZSBcIiArICh0aGlzLnNsaWRlcy5nZXRDdXJyZW50SXRlbSgpLnNsaWRlRGF0YS5pbmRleCkgKyBcIiBvZiBcIiArIHRoaXMuc2xpZGVzLnRvdGFsSXRlbXM7XG4gIH07XG5cbiAgcmV0dXJuIFNsaWRlcztcblxufSkoKTtcbiIsInZhciBTZXF1ZW5jZTtcblxubW9kdWxlLmV4cG9ydHMgPSBTZXF1ZW5jZSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gU2VxdWVuY2UoaXRlbXMpIHtcbiAgICB0aGlzLml0ZW1zID0gaXRlbXM7XG4gICAgdGhpcy5yZXNldCgpO1xuICAgIHRoaXMudG90YWxJdGVtcyA9IHRoaXMuaXRlbXMubGVuZ3RoO1xuICB9XG5cbiAgU2VxdWVuY2UucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbihsb29wT25PdmVyU2hvb3QpIHtcbiAgICBpZiAobG9vcE9uT3ZlclNob290ID09IG51bGwpIHtcbiAgICAgIGxvb3BPbk92ZXJTaG9vdCA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5pbmNyYW1lbnRJdGVtSW5kZXgoMSwgbG9vcE9uT3ZlclNob290KTtcbiAgfTtcblxuICBTZXF1ZW5jZS5wcm90b3R5cGUucHJldiA9IGZ1bmN0aW9uKGxvb3BPbk92ZXJTaG9vdCkge1xuICAgIGlmIChsb29wT25PdmVyU2hvb3QgPT0gbnVsbCkge1xuICAgICAgbG9vcE9uT3ZlclNob290ID0gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmluY3JhbWVudEl0ZW1JbmRleCgtMSwgbG9vcE9uT3ZlclNob290KTtcbiAgfTtcblxuICBTZXF1ZW5jZS5wcm90b3R5cGUuaXNBdExhc3RJdGVtID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudEl0ZW1JbmRleCA9PT0gdGhpcy50b3RhbEl0ZW1zIC0gMSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgU2VxdWVuY2UucHJvdG90eXBlLmdldEN1cnJlbnRJdGVtID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXNbdGhpcy5jdXJyZW50SXRlbUluZGV4XTtcbiAgfTtcblxuICBTZXF1ZW5jZS5wcm90b3R5cGUuY3VycmVudEl0ZW0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDdXJyZW50SXRlbSgpO1xuICB9O1xuXG4gIFNlcXVlbmNlLnByb3RvdHlwZS5pbmNyYW1lbnRJdGVtSW5kZXggPSBmdW5jdGlvbihpbmNyYW1lbnQsIGxvb3BPbk92ZXJTaG9vdCkge1xuICAgIHZhciBuZXdJbmRleDtcbiAgICBpZiAobG9vcE9uT3ZlclNob290ID09IG51bGwpIHtcbiAgICAgIGxvb3BPbk92ZXJTaG9vdCA9IGZhbHNlO1xuICAgIH1cbiAgICBuZXdJbmRleCA9IHRoaXMuY3VycmVudEl0ZW1JbmRleCArIGluY3JhbWVudDtcbiAgICBpZiAobmV3SW5kZXggPiB0aGlzLnRvdGFsSXRlbXMgLSAxKSB7XG4gICAgICBuZXdJbmRleCA9IGxvb3BPbk92ZXJTaG9vdCA/IDAgOiB0aGlzLnRvdGFsSXRlbXMgLSAxO1xuICAgIH0gZWxzZSBpZiAobmV3SW5kZXggPCAwKSB7XG4gICAgICBuZXdJbmRleCA9IGxvb3BPbk92ZXJTaG9vdCA/IHRoaXMudG90YWxJdGVtcyAtIDEgOiAwO1xuICAgIH1cbiAgICBpZiAodGhpcy5jdXJyZW50SXRlbUluZGV4ICE9PSBuZXdJbmRleCkge1xuICAgICAgdGhpcy5jdXJyZW50SXRlbUluZGV4ID0gbmV3SW5kZXg7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICBTZXF1ZW5jZS5wcm90b3R5cGUuY2hhbmdlSXRlbUJ5SW5kZXggPSBmdW5jdGlvbihuZXdJbmRleCkge1xuICAgIHZhciBpbmNyYW1lbnREaWZmZXJlbmNlLCBwbHVzT3JNaW51cztcbiAgICBwbHVzT3JNaW51cyA9IG5ld0luZGV4ID4gdGhpcy5jdXJyZW50SXRlbUluZGV4ID8gMSA6IC0xO1xuICAgIGluY3JhbWVudERpZmZlcmVuY2UgPSBNYXRoLmFicyh0aGlzLmN1cnJlbnRJdGVtSW5kZXggLSBuZXdJbmRleCkgKiBwbHVzT3JNaW51cztcbiAgICByZXR1cm4gdGhpcy5pbmNyYW1lbnRJdGVtSW5kZXgoaW5jcmFtZW50RGlmZmVyZW5jZSk7XG4gIH07XG5cbiAgU2VxdWVuY2UucHJvdG90eXBlLmFjdGl2YXRlSXRlbUJ5UGFyYW0gPSBmdW5jdGlvbihwYXJhbSwgdmFsKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudEl0ZW1JbmRleCA9IHRoaXMuZ2V0SW5kZXhCeVBhcmFtKHBhcmFtLCB2YWwpO1xuICB9O1xuXG4gIFNlcXVlbmNlLnByb3RvdHlwZS5nZXRJbmRleEJ5UGFyYW0gPSBmdW5jdGlvbihwYXJhbSwgdmFsKSB7XG4gICAgdmFyIGksIGl0ZW0sIGosIGxlbiwgcmVmO1xuICAgIHJlZiA9IHRoaXMuaXRlbXM7XG4gICAgZm9yIChpID0gaiA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGogPCBsZW47IGkgPSArK2opIHtcbiAgICAgIGl0ZW0gPSByZWZbaV07XG4gICAgICBpZiAoaXRlbVtwYXJhbV0gPT09IHZhbCkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgU2VxdWVuY2UucHJvdG90eXBlLmdldEl0ZW1CeVBhcmFtID0gZnVuY3Rpb24ocGFyYW0sIHZhbCkge1xuICAgIHJldHVybiB0aGlzLml0ZW1zW3RoaXMuZ2V0SW5kZXhCeVBhcmFtKHBhcmFtLCB2YWwpXTtcbiAgfTtcblxuICBTZXF1ZW5jZS5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50SXRlbUluZGV4ID0gMDtcbiAgfTtcblxuICByZXR1cm4gU2VxdWVuY2U7XG5cbn0pKCk7XG4iLCJ2YXIgQW5pbWF0aW9uUXVhbGl0eTtcblxubW9kdWxlLmV4cG9ydHMgPSBBbmltYXRpb25RdWFsaXR5ID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBBbmltYXRpb25RdWFsaXR5KCkge1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ2FuaW1hdGlvbnMuZ28ubG93JywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuY2hhbmdlQW5pbWF0aW9uUXVhbGl0eSgnbG93Jyk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCdhbmltYXRpb25zLmdvLm1lZCcsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmNoYW5nZUFuaW1hdGlvblF1YWxpdHkoJ21lZCcpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgUHViU3ViLnN1YnNjcmliZSgnYW5pbWF0aW9ucy5nby5oaWdoJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuY2hhbmdlQW5pbWF0aW9uUXVhbGl0eSgnaGlnaCcpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH1cblxuICBBbmltYXRpb25RdWFsaXR5LnByb3RvdHlwZS5jaGFuZ2VBbmltYXRpb25RdWFsaXR5ID0gZnVuY3Rpb24ocXVhbGl0eSkge1xuICAgIHJldHVybiBib2R5bW92aW4uc2V0UXVhbGl0eShxdWFsaXR5KTtcbiAgfTtcblxuICByZXR1cm4gQW5pbWF0aW9uUXVhbGl0eTtcblxufSkoKTtcbiIsInZhciBBUElwcm94eTtcblxubW9kdWxlLmV4cG9ydHMgPSBBUElwcm94eSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gQVBJcHJveHkoKSB7XG4gICAgd2luZG93LmFwaVByb3h5ID0gdGhpcztcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCdtZXRhLmNoYXB0ZXIuc3RhcnQnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5zdGFydENoYXB0ZXIoZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCdtZXRhLmNoYXB0ZXIuZmluaXNoJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuZmluaXNoQ2hhcHRlcihkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ21ldGEuY2hvaWNlLnN0YXJ0JywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuc3RhcnRDaG9pY2UoZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCdtZXRhLmNob2ljZS5maW5pc2gnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5maW5pc2hDaG9pY2UoZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCdtZXRhLmR1dGllcy5zdGFydCcsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnN0YXJ0RHV0aWVzKGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgUHViU3ViLnN1YnNjcmliZSgnbWV0YS5kdXRpZXMuZmluaXNoJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuZmluaXNoRHV0aWVzKGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgUHViU3ViLnN1YnNjcmliZSgnbWV0YS5hY3Rpdml0eScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmFkZEFjdGl2aXR5KGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgUHViU3ViLnN1YnNjcmliZSgnbWV0YS5xdWl6LnN0YXJ0JywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuc3RhcnRRdWl6KGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgUHViU3ViLnN1YnNjcmliZSgnbWV0YS5xdWl6LmZpbmlzaCcsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmZpbmlzaFF1aXooZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCdtZXRhLnF1aXoucXVlc3Rpb24uc3RhcnQnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5zdGFydFF1aXpRdWVzdGlvbihkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ21ldGEucXVpei5xdWVzdGlvbi5hbnN3ZXInLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5hZGRRdWl6QWN0aXZpdHkoZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCdtZXRhLnF1aXoucXVlc3Rpb24uZmluaXNoJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuZmluaXNoUXVpelF1ZXN0aW9uKGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH1cblxuICBBUElwcm94eS5wcm90b3R5cGUuc3RhcnRDaGFwdGVyID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIGFwcEluc2lnaHRzLnRyYWNrUGFnZVZpZXcoXCJFcGlzb2RlXCIgKyBhcmlzdG90bGUuZXBpc29kZU51bSArIFwiIDogXCIgKyBkYXRhLnRpdGxlKTtcbiAgICByZXR1cm4gdGhpcy5jaGFwdGVyID0ge1xuICAgICAgRXBpc29kZVRpdGxlOiBcIkVwaXNvZGUgXCIgKyBhcmlzdG90bGUuZXBpc29kZU51bSxcbiAgICAgIExlYXJuaW5nU3RhcnRUaW1lVXRjOiB0aGlzLm5vdygpLFxuICAgICAgcGlja3M6IHt9LFxuICAgICAgQ2hvaWNlczogW10sXG4gICAgICBDaGFwdGVyTmFtZTogZGF0YS50aXRsZSxcbiAgICAgIEFjdGl2aXRpZXM6IFtdXG4gICAgfTtcbiAgfTtcblxuICBBUElwcm94eS5wcm90b3R5cGUuZmluaXNoQ2hhcHRlciA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnN1Ym1pdERhdGEoKTtcbiAgfTtcblxuICBBUElwcm94eS5wcm90b3R5cGUuc3RhcnRDaG9pY2UgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhcHRlci5waWNrc1tkYXRhLmlkXSA9IHtcbiAgICAgIFN0YXJ0VGltZVV0YzogdGhpcy5ub3coKSxcbiAgICAgIEFjdGl2aXRpZXM6IFtdXG4gICAgfTtcbiAgfTtcblxuICBBUElwcm94eS5wcm90b3R5cGUuZmluaXNoQ2hvaWNlID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIHRoaXMuYWRkUGljayhkYXRhKTtcbiAgICB0aGlzLmNoYXB0ZXIucGlja3NbZGF0YS5pZF0uRW5kVGltZVV0YyA9IHRoaXMubm93KCk7XG4gICAgdGhpcy5jaGFwdGVyLnBpY2tzW2RhdGEuaWRdLlNlbGVjdGlvbiA9IGRhdGEuY2hvaWNlO1xuICAgIHRoaXMuY2hhcHRlci5waWNrc1tkYXRhLmlkXS5DaG9pY2VOYW1lID0gZGF0YS5pZDtcbiAgICByZXR1cm4gdGhpcy5jaGFwdGVyLkNob2ljZXMucHVzaCh0aGlzLmNoYXB0ZXIucGlja3NbZGF0YS5pZF0pO1xuICB9O1xuXG4gIEFQSXByb3h5LnByb3RvdHlwZS5hZGRBY3Rpdml0eSA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2YXIgYWN0aXZpdHk7XG4gICAgYWN0aXZpdHkgPSB7XG4gICAgICBBY3Rpdml0eU5hbWU6IGRhdGEuYWN0aXZpdHksXG4gICAgICBFdmVudFRpbWVVdGM6IHRoaXMubm93KClcbiAgICB9O1xuICAgIGlmIChkYXRhLmlkICE9IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLmNoYXB0ZXIucGlja3NbZGF0YS5pZF0uQWN0aXZpdGllcy5wdXNoKGFjdGl2aXR5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuY2hhcHRlci5BY3Rpdml0aWVzLnB1c2goYWN0aXZpdHkpO1xuICAgIH1cbiAgfTtcblxuICBBUElwcm94eS5wcm90b3R5cGUuc3RhcnREdXRpZXMgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmNoYXB0ZXIuTGVhcm5pbmdFbmRUaW1lVXRjID0gdGhpcy5ub3coKTtcbiAgICByZXR1cm4gdGhpcy5jaGFwdGVyLkR1dHlSZXZpZXdTdGFydFRpbWVVdGMgPSB0aGlzLm5vdygpO1xuICB9O1xuXG4gIEFQSXByb3h5LnByb3RvdHlwZS5maW5pc2hEdXRpZXMgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5jaGFwdGVyLkR1dHlSZXZpZXdFbmRUaW1lVXRjID0gdGhpcy5ub3coKTtcbiAgfTtcblxuICBBUElwcm94eS5wcm90b3R5cGUuc3RhcnRRdWl6ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhcHRlci5xdWl6ID0ge1xuICAgICAgc3RhcnQ6IHRoaXMubm93KCksXG4gICAgICBxdWVzdGlvbnM6IHt9LFxuICAgICAgU2NvcmVzOiBbXVxuICAgIH07XG4gIH07XG5cbiAgQVBJcHJveHkucHJvdG90eXBlLmZpbmlzaFF1aXogPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5jaGFwdGVyLnF1aXouZmluaXNoID0gdGhpcy5ub3coKTtcbiAgfTtcblxuICBBUElwcm94eS5wcm90b3R5cGUuc3RhcnRRdWl6UXVlc3Rpb24gPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhcHRlci5xdWl6LnF1ZXN0aW9uc1tkYXRhLmlkXSA9IHtcbiAgICAgIFN0YXJ0VGltZVV0YzogdGhpcy5ub3coKSxcbiAgICAgIFF1ZXN0aW9uTnVtYmVyOiBkYXRhLmlkLFxuICAgICAgQWN0aXZpdGllczogW11cbiAgICB9O1xuICB9O1xuXG4gIEFQSXByb3h5LnByb3RvdHlwZS5hZGRRdWl6QWN0aXZpdHkgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhcHRlci5xdWl6LnF1ZXN0aW9uc1tkYXRhLmlkXS5BY3Rpdml0aWVzLnB1c2goe1xuICAgICAgQWN0aXZpdHlOYW1lOiBkYXRhLmFuc3dlcixcbiAgICAgIEV2ZW50VGltZVV0YzogdGhpcy5ub3coKVxuICAgIH0pO1xuICB9O1xuXG4gIEFQSXByb3h5LnByb3RvdHlwZS5maW5pc2hRdWl6UXVlc3Rpb24gPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdGhpcy5jaGFwdGVyLnF1aXoucXVlc3Rpb25zW2RhdGEuaWRdLkVuZFRpbWVVdGMgPSB0aGlzLm5vdygpO1xuICAgIHRoaXMuY2hhcHRlci5xdWl6LnF1ZXN0aW9uc1tkYXRhLmlkXS5GaW5hbFNjb3JlID0gZGF0YS5zY29yZTtcbiAgICByZXR1cm4gdGhpcy5jaGFwdGVyLnF1aXouU2NvcmVzLnB1c2godGhpcy5jaGFwdGVyLnF1aXoucXVlc3Rpb25zW2RhdGEuaWRdKTtcbiAgfTtcblxuICBBUElwcm94eS5wcm90b3R5cGUuc3VibWl0RGF0YSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjaGFwdGVyRGF0YSwgZGF0YTtcbiAgICBjaGFwdGVyRGF0YSA9IHtcbiAgICAgIEVwaXNvZGVOYW1lOiB0aGlzLmNoYXB0ZXIuRXBpc29kZVRpdGxlLFxuICAgICAgQ2hhcHRlck5hbWU6IHRoaXMuY2hhcHRlci5DaGFwdGVyTmFtZSxcbiAgICAgIExlYXJuaW5nU3RhcnRUaW1lVXRjOiB0aGlzLmNoYXB0ZXIuTGVhcm5pbmdTdGFydFRpbWVVdGMsXG4gICAgICBMZWFybmluZ0VuZFRpbWVVdGM6IHRoaXMuY2hhcHRlci5MZWFybmluZ0VuZFRpbWVVdGMsXG4gICAgICBEdXR5UmV2aWV3U3RhcnRUaW1lVXRjOiB0aGlzLmNoYXB0ZXIuRHV0eVJldmlld1N0YXJ0VGltZVV0YyxcbiAgICAgIER1dHlSZXZpZXdFbmRUaW1lVXRjOiB0aGlzLmNoYXB0ZXIuRHV0eVJldmlld0VuZFRpbWVVdGNcbiAgICB9O1xuICAgIGlmICh0aGlzLmNoYXB0ZXIuQWN0aXZpdGllcy5sZW5ndGggPiAwKSB7XG4gICAgICBjaGFwdGVyRGF0YS5BY3Rpdml0aWVzID0gdGhpcy5jaGFwdGVyLkFjdGl2aXRpZXM7XG4gICAgfVxuICAgIGlmICh0aGlzLmNoYXB0ZXIuQ2hvaWNlcy5sZW5ndGggPiAwKSB7XG4gICAgICBjaGFwdGVyRGF0YS5DaG9pY2VzID0gdGhpcy5jaGFwdGVyLkNob2ljZXM7XG4gICAgfVxuICAgIGlmICh0aGlzLmNoYXB0ZXIucXVpeiAhPSBudWxsKSB7XG4gICAgICBjaGFwdGVyRGF0YS5TY29yZXMgPSB0aGlzLmNoYXB0ZXIucXVpei5TY29yZXM7XG4gICAgICBjaGFwdGVyRGF0YS5UZXN0aW5nU3RhcnRUaW1lVXRjID0gdGhpcy5jaGFwdGVyLnF1aXouc3RhcnQ7XG4gICAgICBjaGFwdGVyRGF0YS5UZXN0aW5nRW5kVGltZVV0YyA9IHRoaXMuY2hhcHRlci5xdWl6LmZpbmlzaDtcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIExlYXJuaW5nQ29udGV4dDoge1xuICAgICAgICBNb2R1bGVJZDogYXJpc3RvdGxlLmdsb2JhbHMuZ2V0KFwibW9kdWxlSWRcIiksXG4gICAgICAgIE1vZHVsZUF1ZGllbmNlOiBhcmlzdG90bGUuZ2xvYmFscy5nZXQoXCJtb2R1bGVBdWRpZW5jZVwiKSxcbiAgICAgICAgU2Vzc2lvbklkOiBhcmlzdG90bGUuZ2xvYmFscy5nZXQoXCJzZXNzaW9uS2V5XCIpLFxuICAgICAgICBTdHVkZW50SWQ6IGFyaXN0b3RsZS5sb2NhbFN0b3JhZ2VQcm94eS51c2VySWQsXG4gICAgICAgIFN0dWRlbnROYW1lOiBhcmlzdG90bGUubG9jYWxTdG9yYWdlUHJveHkudXNlcixcbiAgICAgICAgU3R1ZGVudENhbGxzaWduOiBhcmlzdG90bGUuZ2xvYmFscy5nZXQoXCJjYWxsU2lnblwiKVxuICAgICAgfSxcbiAgICAgIENoYXB0ZXJzOiBbY2hhcHRlckRhdGFdXG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5wb3N0RGF0YShKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gIH07XG5cbiAgQVBJcHJveHkucHJvdG90eXBlLmFkZFBpY2sgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyIGksIGosIGxlbiwgcGljaywgcGlja3M7XG4gICAgcGlja3MgPSBhcmlzdG90bGUuZ2xvYmFscy5nZXQoXCJlcGlzb2RlXCIgKyBhcmlzdG90bGUuZXBpc29kZU51bSArIFwiX2Nob2ljZXNcIik7XG4gICAgZm9yIChpID0gaiA9IDAsIGxlbiA9IHBpY2tzLmxlbmd0aDsgaiA8IGxlbjsgaSA9ICsraikge1xuICAgICAgcGljayA9IHBpY2tzW2ldO1xuICAgICAgaWYgKHBpY2suaWQgPT09IGRhdGEuaWQpIHtcbiAgICAgICAgcGlja3Muc3BsaWNlKGksIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGlja3MucHVzaChkYXRhKTtcbiAgfTtcblxuICBBUElwcm94eS5wcm90b3R5cGUucG9zdERhdGEgPSBmdW5jdGlvbihqc29uRGF0YSkge1xuICAgIHZhciB4aHI7XG4gICAgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgeGhyLm9wZW4oXCJQT1NUXCIsIFwiaHR0cHM6Ly9jaXBkZWZlbmRlcmFwaS5henVyZXdlYnNpdGVzLm5ldDo0NDMvYXBpL0xlYXJuaW5nXCIsIHRydWUpO1xuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcpO1xuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdBdXRob3JpemF0aW9uJywgXCJCYXNpYyBcIiArIChidG9hKGFyaXN0b3RsZS5nbG9iYWxzLmdldCgnYXBpa2V5JykgKyAnOicpKSk7XG4gICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKGUuY3VycmVudFRhcmdldC5zdGF0dXMgPiAyOTkpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkFQSSByZXNwb25kZWQgd2l0aCBcIiArIGUuY3VycmVudFRhcmdldC5zdGF0dXMgKyBcIiB3aGVuIHRyeWluZyB0byBnZXQgdGhlIGNob2ljZSAlJ3MgZm9yIHRoZSBxdWl6IHNlY3Rpb24nXCIpO1xuICAgICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2coZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHhoci5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkFQSSBQb3N0IGZhaWxlZFwiKTtcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKGUpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgcmV0dXJuIHhoci5zZW5kKGpzb25EYXRhKTtcbiAgfTtcblxuICBBUElwcm94eS5wcm90b3R5cGUubm93ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKTtcbiAgfTtcblxuICBBUElwcm94eS5wcm90b3R5cGUubWV0YURhdGEgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLm1ldGEgPSBhcmlzdG90bGUuZ2xvYmFscy5nZXRNZXRhRGF0YSgpO1xuICAgIGlmICh0eXBlb2YgbWV0YSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBtZXRhID09PSBudWxsKSB7XG4gICAgICB0aGlzLm1ldGEgPSB7XG4gICAgICAgIGNoYXB0ZXJzOiBbXVxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubWV0YTtcbiAgfTtcblxuICBBUElwcm94eS5wcm90b3R5cGUuZ2V0Q2hvaWNlUGVyY2VudGFnZXMgPSBmdW5jdGlvbihjaG9pY2VzLCBjYikge1xuICAgIHZhciBvYmosIHhocjtcbiAgICB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB4aHIub3BlbihcIlBPU1RcIiwgXCJodHRwczovL2NpcGRlZmVuZGVyYXBpLmF6dXJld2Vic2l0ZXMubmV0L2FwaS9tZXRyaWNzL2Nob2ljZXNcIiwgdHJ1ZSk7XG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uOyBjaGFyc2V0PVVURi04Jyk7XG4gICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoJ0F1dGhvcml6YXRpb24nLCBcIkJhc2ljIFwiICsgKGJ0b2EoYXJpc3RvdGxlLmdsb2JhbHMuZ2V0KCdhcGlrZXknKSArICc6JykpKTtcbiAgICB4aHIuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgaWYgKGUuY3VycmVudFRhcmdldC5zdGF0dXMgPiAyOTkpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkFQSSByZXNwb25kZWQgd2l0aCBcIiArIGUuY3VycmVudFRhcmdldC5zdGF0dXMgKyBcIiB3aGVuIHRyeWluZyB0byBnZXQgdGhlIGNob2ljZSAlJ3MgZm9yIHRoZSBxdWl6IHNlY3Rpb24nXCIpO1xuICAgICAgICAgIHJldHVybiBjYih7fSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGNiKEpTT04ucGFyc2UoZS5jdXJyZW50VGFyZ2V0LnJlc3BvbnNlKSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHhoci5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgICByZXR1cm4gY29uc29sZS5sb2coXCJFcnJvciB3aGVuIHJlcXVlc3RpbmcgY2hvaWNlICUncyBmb3IgcXVpeiByZXN1bHRzXCIpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgb2JqID0ge1xuICAgICAgTWV0cmljc0NvbnRleHQ6IHtcbiAgICAgICAgTW9kdWxlSWQ6IGFyaXN0b3RsZS5nbG9iYWxzLmdldChcIm1vZHVsZUlkXCIpXG4gICAgICB9LFxuICAgICAgQ2hvaWNlTmFtZXM6IGNob2ljZXNcbiAgICB9O1xuICAgIHJldHVybiB4aHIuc2VuZChKU09OLnN0cmluZ2lmeShvYmopKTtcbiAgfTtcblxuICBBUElwcm94eS5wcm90b3R5cGUudGVzdCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBvYmosIHhocjtcbiAgICBjb25zb2xlLmxvZyhhcmlzdG90bGUuZ2xvYmFscy5nZXQoXCJtb2R1bGVJZFwiKSk7XG4gICAgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgeGhyLm9wZW4oXCJQT1NUXCIsIFwiaHR0cHM6Ly9jaXBkZWZlbmRlcmFwaS5henVyZXdlYnNpdGVzLm5ldC9hcGkvbWV0cmljcy9jaG9pY2VzXCIsIHRydWUpO1xuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcpO1xuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdBdXRob3JpemF0aW9uJywgXCJCYXNpYyBcIiArIChidG9hKGFyaXN0b3RsZS5nbG9iYWxzLmdldCgnYXBpa2V5JykgKyAnOicpKSk7XG4gICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKGUuY3VycmVudFRhcmdldC5zdGF0dXMgPiAyOTkpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkFQSSByZXNwb25kZWQgd2l0aCBcIiArIGUuY3VycmVudFRhcmdldC5zdGF0dXMgKyBcIiB3aGVuIHRyeWluZyB0byBnZXQgdGhlIGNob2ljZSAlJ3MgZm9yIHRoZSBxdWl6IHNlY3Rpb24nXCIpO1xuICAgICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGUuY3VycmVudFRhcmdldC5yZXNwb25zZSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgeGhyLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiQVBJIFBvc3QgZmFpbGVkXCIpO1xuICAgICAgICByZXR1cm4gY29uc29sZS5sb2coZSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBvYmogPSB7XG4gICAgICBNZXRyaWNzQ29udGV4dDoge1xuICAgICAgICBNb2R1bGVJZDogYXJpc3RvdGxlLmdsb2JhbHMuZ2V0KFwibW9kdWxlSWRcIilcbiAgICAgIH0sXG4gICAgICBDaG9pY2VOYW1lczogW1wiQWNjZXNzIENvbnRyb2wgU3lzdGVtXCIsIFwiVGhlIEJ1cm5pbmF0b3JcIiwgXCJDYXJkIEd1YXJkIFhUXCJdXG4gICAgfTtcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShvYmopKTtcbiAgICByZXR1cm4geGhyLnNlbmQoSlNPTi5zdHJpbmdpZnkob2JqKSk7XG4gIH07XG5cbiAgcmV0dXJuIEFQSXByb3h5O1xuXG59KSgpO1xuXG5cbi8qXG57XCJMZWFybmluZ0NvbnRleHRcIjp7XCJNb2R1bGVJZFwiOlwiTWV0YU15dGhpYy5DaXBEZWZlbmRlci52MVwiLFwiTW9kdWxlQXVkaWVuY2VcIjpcImZha2UtbW9kdWxlLWF1ZGllbmNlXCIsXCJTZXNzaW9uSWRcIjpcImZha2Utc2Vzc2lvbi1pZFwiLFwiU3R1ZGVudElkXCI6XCJhYmNkZWZnMTIzNDU2N1wiLFwiU3R1ZGVudE5hbWVcIjpcIlJpY2tzLCBKdXN0aW5cIn0sXCJDaGFwdGVyc1wiOlt7XCJFcGlzb2RlVGl0bGVcIjpcIkVwaXNvZGUgMVwiLFwiQ2hhcHRlck5hbWVcIjpcIkNoYXB0ZXIgMVwiLFwiTGVhcm5pbmdTdGFydFRpbWVVdGNcIjoxNDUyNTU3NzkzNDY2LFwiTGVhcm5pbmdFbmRUaW1lVXRjXCI6MTQ1MjU1NzgwODAzMSxcIkR1dHlSZXZpZXdTdGFydFRpbWVVdGNcIjoxNDUyNTU3ODA4MDMxLFwiRHV0eVJldmlld0VuZFRpbWVVdGNcIjoxNDUyNTU3ODExNTE5LFwiQWN0aXZpdGllc1wiOlt7XCJBY3Rpdml0eU5hbWVcIjpcIkNsaWNrIDogQXNzZXQgRXhwbG9yYXRpb24gLSBGaWxpbmcgQ2FiaW5ldHNcIixcIkV2ZW50VGltZVV0Y1wiOjE0NTI1NTc4MDMzMDl9LHtcIkFjdGl2aXR5TmFtZVwiOlwiQ2xpY2sgOiBBc3NldCBFeHBsb3JhdGlvbiAtIE1hcGJvYXJkXCIsXCJFdmVudFRpbWVVdGNcIjoxNDUyNTU3ODA0MDg2fSx7XCJBY3Rpdml0eU5hbWVcIjpcIkNsaWNrIDogQXNzZXQgRXhwbG9yYXRpb24gLSBPcGVyYXRvciBNb25pdG9yc1wiLFwiRXZlbnRUaW1lVXRjXCI6MTQ1MjU1NzgwNTAyMH1dfV19XG4gIExlYXJuaW5nUmVjb3JkIHtcbiAgICBMZWFybmluZ0NvbnRleHQge1xuICAgICAgTW9kdWxlSWQgICAgICAgOiBcIlwiXG4gICAgICBNb2R1bGVBdWRpZW5jZSA6IFwiXCJcbiAgICAgIFNlc3Npb25JZCAgICAgIDogXCJcIlxuICAgICAgU3R1ZGVudElkICAgICAgOiBcIlwiXG4gICAgICBTdHVkZW50TmFtZSAgICA6IFwiXCJcbiAgICB9XG4gICAgQ2hhcHRlcnMgOiBbIENIQVBURVIgXVxuICB9XG5cbiAgQ2hhcHRlciB7XG4gICAgRXBpc29kZVRpdGxlICAgICAgICAgICA6IFwiXCJcbiAgICBDaGFwdGVyTmFtZSAgICAgICAgICAgIDogXCJcIlxuICAgIExlYXJuaW5nU3RhcnRUaW1lVXRjICAgOiBEQVRFICAtIFN0YXJ0IG9mIHRoZSBjaGFwdGVyIC0+IGR1dGllcyBzdGFydFxuICAgIExlYXJuaW5nRW5kVGltZVV0YyAgICAgOiBEQVRFXG4gICAgRHV0eVJldmlld1N0YXJ0VGltZVV0YyA6IERBVEVcbiAgICBEdXR5UmV2aWV3RW5kVGltZVV0YyAgIDogREFURVxuICAgIFRlc3RpbmdTdGFydFRpbWVVdGMgICAgOiBEQVRFXG4gICAgVGVzdGluZ0VuZFRpbWVVdGMgICAgICA6IERBVEVcbiAgICBBY3Rpdml0aWVzICAgICAgICAgICAgIDogW0FDVElWSVRZXVxuICAgIENob2ljZXMgICAgICAgICAgICAgICAgOiBbQ0hPSUNFXVxuICAgIFNjb3JlcyAgICAgICAgICAgICAgICAgOiBbU0NPUkVdXG4gIH1cblxuICBBY3Rpdml0eSB7XG4gICAgQWN0aXZpdHlOYW1lIDogXCJcIlxuICAgIEV2ZW50VGltZVV0YyA6IERBVEVcbiAgfVxuICBDaG9pY2Uge1xuICAgIENob2ljZU5hbWUgICA6IFwiXCJcbiAgICBTZWxlY3Rpb24gICAgOiBcIlwiXG4gICAgU3RhcnRUaW1lVXRjIDogREFURVxuICAgIEVuZFRpbWVVdGMgICA6IERBVEVcbiAgICBBY3Rpdml0aWVzICAgOiBbQUNUSVZJVFldXG4gIH1cbiAgU2NvcmUge1xuICAgIFF1ZXN0aW9uTnVtYmVyIDogMVxuICAgIEZpbmFsU2NvcmUgICAgIDogMVxuICAgIFN0YXJ0VGltZVV0YyAgIDogREFURVxuICAgIEVuZFRpbWVVdGMgICAgIDogREFURVxuICAgIEFjdGl2aXRpZXMgICAgIDogW0FDVElWSVRZXVxuICB9XG4gKi9cbiIsInZhciBBc3NldFByZWxvYWRlcjtcblxubW9kdWxlLmV4cG9ydHMgPSBBc3NldFByZWxvYWRlciA9IChmdW5jdGlvbigpIHtcbiAgQXNzZXRQcmVsb2FkZXIuY291bnQgPSAwO1xuXG4gIGZ1bmN0aW9uIEFzc2V0UHJlbG9hZGVyKGRhdGEsIGNhbGxiYWNrLCBwcm9ncmVzc0NhbGxiYWNrKSB7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIHRoaXMucHJvZ3Jlc3NDYWxsYmFjayA9IHByb2dyZXNzQ2FsbGJhY2s7XG4gICAgdGhpcy5pZCA9IEFzc2V0UHJlbG9hZGVyLmNvdW50Kys7XG4gICAgaWYgKGRhdGEgPT0gbnVsbCkge1xuICAgICAgdGhpcy5jYWxsYmFjaygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnByZWxvYWRBc3NldHMoZGF0YSk7XG4gIH1cblxuICBBc3NldFByZWxvYWRlci5wcm90b3R5cGUucHJlbG9hZEFzc2V0cyA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2YXIgYXNzZXRzLCByZWdleDtcbiAgICBhc3NldHMgPSBbXTtcbiAgICByZWdleCA9IC8uK1xcLihzdmcpLztcbiAgICB0aGlzLmxvb2tGb3JGaWxlcyhkYXRhLCBhc3NldHMsIHJlZ2V4KTtcbiAgICBpZiAoYXNzZXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5jYWxsYmFjaygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjcmVhdGVqcy5Tb3VuZC5hbHRlcm5hdGVFeHRlbnNpb25zID0gW1wibXAzXCIsIFwibTRhXCJdO1xuICAgIHRoaXMucHJlbG9hZFF1ZXVlID0gbmV3IGNyZWF0ZWpzLkxvYWRRdWV1ZSgpO1xuICAgIHRoaXMucHJlbG9hZFF1ZXVlLmluc3RhbGxQbHVnaW4oY3JlYXRlanMuU291bmQpO1xuICAgIHdpbmRvdy5qYXggPSB0aGlzLnByZWxvYWRRdWV1ZTtcbiAgICBpZiAodGhpcy5wcm9ncmVzc0NhbGxiYWNrICE9IG51bGwpIHtcbiAgICAgIHRoaXMucHJvZ3Jlc3NIYW5kbGVyID0gdGhpcy5wcmVsb2FkUXVldWUub24oXCJwcm9ncmVzc1wiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMucHJvZ3Jlc3NDYWxsYmFjayhlLmxvYWRlZCk7XG4gICAgICAgIH07XG4gICAgICB9KSh0aGlzKSk7XG4gICAgfVxuICAgIHRoaXMuY29tcGxldGVIYW5kbGVyID0gdGhpcy5wcmVsb2FkUXVldWUub24oXCJjb21wbGV0ZVwiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKF90aGlzLmlzQ29tcGxldGUpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgX3RoaXMuaXNDb21wbGV0ZSA9IHRydWU7XG4gICAgICAgIF90aGlzLmNhbGxiYWNrKGRhdGEpO1xuICAgICAgICBfdGhpcy5wcmVsb2FkUXVldWUucmVtb3ZlRXZlbnRMaXN0ZW5lcihfdGhpcy5wcm9ncmVzc0hhbmRsZXIpO1xuICAgICAgICByZXR1cm4gX3RoaXMucHJlbG9hZFF1ZXVlLnJlbW92ZUV2ZW50TGlzdGVuZXIoX3RoaXMuY29tcGxldGVIYW5kbGVyKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIGFzc2V0cyA9IHRoaXMucmVtb3ZlRHVwbGljYXRlcyhhc3NldHMpO1xuICAgIGFzc2V0cyA9IHRoaXMub3JkZXJGaWxlc0ZvckxvYWQoYXNzZXRzKTtcbiAgICByZXR1cm4gdGhpcy5wcmVsb2FkUXVldWUubG9hZE1hbmlmZXN0KGFzc2V0cyk7XG4gIH07XG5cbiAgQXNzZXRQcmVsb2FkZXIucHJvdG90eXBlLmxvb2tGb3JGaWxlcyA9IGZ1bmN0aW9uKGl0ZW0sIHN0b3JhZ2UsIHJlZ2V4KSB7XG4gICAgdmFyIGNoaWxkLCBpLCBrZXksIGxlbiwgcmVzdWx0cywgcmVzdWx0czEsIHR5cGU7XG4gICAgdHlwZSA9IHR5cGVvZiBpdGVtO1xuICAgIGlmICh0eXBlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBpZiAoLy5tcDN8Lm00YXwuanNvbi8udGVzdChpdGVtKSkge1xuICAgICAgICByZXR1cm4gc3RvcmFnZS5wdXNoKHtcbiAgICAgICAgICBzcmM6IGFyaXN0b3RsZS5nZXRBc3NldFBhdGgoaXRlbSksXG4gICAgICAgICAgaWQ6IGl0ZW1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtKSkge1xuICAgICAgICByZXN1bHRzID0gW107XG4gICAgICAgIGZvciAoaSA9IDAsIGxlbiA9IGl0ZW0ubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICBjaGlsZCA9IGl0ZW1baV07XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMubG9va0ZvckZpbGVzKGNoaWxkLCBzdG9yYWdlLCByZWdleCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0czEgPSBbXTtcbiAgICAgICAgZm9yIChrZXkgaW4gaXRlbSkge1xuICAgICAgICAgIGNoaWxkID0gaXRlbVtrZXldO1xuICAgICAgICAgIHJlc3VsdHMxLnB1c2godGhpcy5sb29rRm9yRmlsZXMoY2hpbGQsIHN0b3JhZ2UsIHJlZ2V4KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHMxO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBBc3NldFByZWxvYWRlci5wcm90b3R5cGUub3JkZXJGaWxlc0ZvckxvYWQgPSBmdW5jdGlvbihhcikge1xuICAgIHZhciBpLCBpdGVtLCBqc29uLCBsZW4sIG1wM3MsIG90aGVyO1xuICAgIG1wM3MgPSBbXTtcbiAgICBqc29uID0gW107XG4gICAgb3RoZXIgPSBbXTtcbiAgICBmb3IgKGkgPSAwLCBsZW4gPSBhci5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgaXRlbSA9IGFyW2ldO1xuICAgICAgaWYgKC8ubXAzfC5tNGEvLnRlc3QoaXRlbS5pZCkpIHtcbiAgICAgICAgbXAzcy5wdXNoKGl0ZW0pO1xuICAgICAgfSBlbHNlIGlmICgvLmpzb24vLnRlc3QoaXRlbS5pZCkpIHtcbiAgICAgICAganNvbi5wdXNoKGl0ZW0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3RoZXIucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG1wM3MuY29uY2F0KG90aGVyLCBqc29uKTtcbiAgfTtcblxuICBBc3NldFByZWxvYWRlci5wcm90b3R5cGUucmVtb3ZlRHVwbGljYXRlcyA9IGZ1bmN0aW9uKGFyKSB7XG4gICAgdmFyIGksIGl0ZW0sIGl0ZW1zLCBsZW4sIG5ld0FycmF5O1xuICAgIGl0ZW1zID0ge307XG4gICAgbmV3QXJyYXkgPSBbXTtcbiAgICBmb3IgKGkgPSAwLCBsZW4gPSBhci5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgaXRlbSA9IGFyW2ldO1xuICAgICAgaWYgKGl0ZW1zW2l0ZW0uaWRdID09IG51bGwpIHtcbiAgICAgICAgaXRlbXNbaXRlbS5pZF0gPSBcIlwiO1xuICAgICAgICBuZXdBcnJheS5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3QXJyYXk7XG4gIH07XG5cbiAgcmV0dXJuIEFzc2V0UHJlbG9hZGVyO1xuXG59KSgpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGVkZ2UsIG1zaWUsIHJ2LCB0cmlkZW50LCB1YSwgdjtcbiAgdWEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgbXNpZSA9IHVhLmluZGV4T2YoJ01TSUUgJyk7XG4gIGlmIChtc2llID4gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICAgIHYgPSBwYXJzZUludCh1YS5zdWJzdHJpbmcobXNpZSArIDUsIHVhLmluZGV4T2YoJy4nLCBtc2llKSksIDEwKTtcbiAgfVxuICB0cmlkZW50ID0gdWEuaW5kZXhPZignVHJpZGVudC8nKTtcbiAgaWYgKHRyaWRlbnQgPiAwKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gICAgcnYgPSB1YS5pbmRleE9mKCdydjonKTtcbiAgICB2ID0gcGFyc2VJbnQodWEuc3Vic3RyaW5nKHJ2ICsgMywgdWEuaW5kZXhPZignLicsIHJ2KSksIDEwKTtcbiAgfVxuICBlZGdlID0gdWEuaW5kZXhPZignRWRnZS8nKTtcbiAgaWYgKGVkZ2UgPiAwKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gICAgdiA9IHBhcnNlSW50KHVhLnN1YnN0cmluZyhlZGdlICsgNSwgdWEuaW5kZXhPZignLicsIGVkZ2UpKSwgMTApO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG4iLCJ2YXIgQ29tbWFuZGVyO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1hbmRlciA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gQ29tbWFuZGVyKCkge1xuICAgIHdpbmRvdy5hcmlzdG90bGUuY29tbWFuZGVyID0gdGhpcztcbiAgfVxuXG4gIENvbW1hbmRlci5wcm90b3R5cGVbXCJkb1wiXSA9IGZ1bmN0aW9uKGFjdGlvbiwgcHVibGlzaFN5bmNocm9ub3VzbHkpIHtcbiAgICB2YXIgaSwgaXRlbSwgbGVuLCByZXN1bHRzO1xuICAgIGlmIChwdWJsaXNoU3luY2hyb25vdXNseSA9PSBudWxsKSB7XG4gICAgICBwdWJsaXNoU3luY2hyb25vdXNseSA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheShhY3Rpb24pKSB7XG4gICAgICByZXN1bHRzID0gW107XG4gICAgICBmb3IgKGkgPSAwLCBsZW4gPSBhY3Rpb24ubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaXRlbSA9IGFjdGlvbltpXTtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMucHVibGlzaChpdGVtLCBwdWJsaXNoU3luY2hyb25vdXNseSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnB1Ymxpc2goYWN0aW9uLCBwdWJsaXNoU3luY2hyb25vdXNseSk7XG4gICAgfVxuICB9O1xuXG4gIENvbW1hbmRlci5wcm90b3R5cGUucHVibGlzaCA9IGZ1bmN0aW9uKGFjdGlvbiwgcHVibGlzaFN5bmNocm9ub3VzbHkpIHtcbiAgICBpZiAocHVibGlzaFN5bmNocm9ub3VzbHkgPT0gbnVsbCkge1xuICAgICAgcHVibGlzaFN5bmNocm9ub3VzbHkgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKChhY3Rpb24gIT0gbnVsbCA/IGFjdGlvbi5kZWxheSA6IHZvaWQgMCkgIT0gbnVsbCkge1xuICAgICAgdGhpcy5wdWJsaXNoRGVsYXllZEFjdGlvbihhY3Rpb24pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocHVibGlzaFN5bmNocm9ub3VzbHkpIHtcbiAgICAgIHJldHVybiBQdWJTdWIucHVibGlzaFN5bmMoYWN0aW9uLmNtZCwgYWN0aW9uLmRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gUHViU3ViLnB1Ymxpc2goYWN0aW9uLmNtZCwgYWN0aW9uLmRhdGEpO1xuICAgIH1cbiAgfTtcblxuICBDb21tYW5kZXIucHJvdG90eXBlLnB1Ymxpc2hEZWxheWVkQWN0aW9uID0gZnVuY3Rpb24oYWN0aW9uKSB7XG4gICAgcmV0dXJuIGFyaXN0b3RsZS50aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIFB1YlN1Yi5wdWJsaXNoKGFjdGlvbi5jbWQsIGFjdGlvbi5kYXRhKTtcbiAgICB9LCBhY3Rpb24uZGVsYXkpO1xuICB9O1xuXG4gIHJldHVybiBDb21tYW5kZXI7XG5cbn0pKCk7XG4iLCJ2YXIgQXVkaW9UcmFjaywgRGV2VG9vbHMsXG4gIGJpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9O1xuXG5BdWRpb1RyYWNrID0gcmVxdWlyZSgnZXBpc29kZS9hdWRpby10cmFjaycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERldlRvb2xzID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBEZXZUb29scyhpc0Rldk1vZGUpIHtcbiAgICB0aGlzLmlzRGV2TW9kZSA9IGlzRGV2TW9kZTtcbiAgICB0aGlzLnVwZGF0ZSA9IGJpbmQodGhpcy51cGRhdGUsIHRoaXMpO1xuICAgIGlmICghdGhpcy5pc0Rldk1vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5pbml0UGVyZm9ybWFuY2VTdGF0cygpO1xuICB9XG5cbiAgRGV2VG9vbHMucHJvdG90eXBlLmdvID0gZnVuY3Rpb24oZGV2Q29uZmlnLCBpdGVtcykge1xuICAgIGlmICghdGhpcy5pc0Rldk1vZGUgfHwgKGRldkNvbmZpZyA9PSBudWxsKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZGV2Q29uZmlnLnNraXBTbGF0ZSAhPSBudWxsKSB7XG4gICAgICB0aGlzLnNraXBTbGF0ZSA9IGRldkNvbmZpZy5za2lwU2xhdGU7XG4gICAgfVxuICAgIHRoaXMuc2tpcChkZXZDb25maWcsIGl0ZW1zKTtcbiAgICB0aGlzLnByZXZlbnRBbmltYXRpb25Bc05lZWRlZChkZXZDb25maWcsIGl0ZW1zKTtcbiAgICB0aGlzLmFkZEluZGV4ZXNUb0l0ZW1zKGRldkNvbmZpZywgaXRlbXMpO1xuICAgIGlmIChkZXZDb25maWcudm9sdW1lICE9IG51bGwpIHtcbiAgICAgIHJldHVybiBBdWRpb1RyYWNrLmluaXRTb3VuZFNldHRpbmdzKGRldkNvbmZpZy52b2x1bWUpO1xuICAgIH1cbiAgfTtcblxuICBEZXZUb29scy5wcm90b3R5cGUuc2tpcCA9IGZ1bmN0aW9uKGRldkNvbmZpZywgaXRlbXMpIHtcbiAgICB2YXIgaiwgbGVuLCByZWYsIHJlc3VsdHMsIHNsaWRlSW5kZXgsIHN0YXJ0SW5kZXg7XG4gICAgaWYgKCF0aGlzLmlzRGV2TW9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZGV2Q29uZmlnLnN0YXJ0SW5kZXggIT0gbnVsbCkge1xuICAgICAgaWYgKGRldkNvbmZpZy5zdGFydEluZGV4IDwgMCkge1xuICAgICAgICBkZXZDb25maWcuc3RhcnRJbmRleCA9IGl0ZW1zLmxlbmd0aCArIGRldkNvbmZpZy5zdGFydEluZGV4O1xuICAgICAgfVxuICAgICAgc3RhcnRJbmRleCA9IGRldkNvbmZpZy5zdGFydEluZGV4O1xuICAgICAgaXRlbXMuc3BsaWNlKDAsIGRldkNvbmZpZy5zdGFydEluZGV4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhcnRJbmRleCA9IDA7XG4gICAgfVxuICAgIGlmIChkZXZDb25maWcuc2tpcCAhPSBudWxsKSB7XG4gICAgICByZWYgPSBkZXZDb25maWcuc2tpcC5zb3J0KCkucmV2ZXJzZSgpO1xuICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgZm9yIChqID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgIHNsaWRlSW5kZXggPSByZWZbal07XG4gICAgICAgIGlmIChzbGlkZUluZGV4ID4gc3RhcnRJbmRleCkge1xuICAgICAgICAgIHJlc3VsdHMucHVzaChpdGVtcy5zcGxpY2Uoc2xpZGVJbmRleCAtIHN0YXJ0SW5kZXgsIDEpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2godm9pZCAwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxuICB9O1xuXG4gIERldlRvb2xzLnByb3RvdHlwZS5wcmV2ZW50QW5pbWF0aW9uQXNOZWVkZWQgPSBmdW5jdGlvbihkZXZDb25maWcsIGl0ZW1zKSB7XG4gICAgdmFyIGksIGosIGxlbiwgcmVmLCByZXN1bHRzLCBzbGlkZTtcbiAgICBpZiAoZGV2Q29uZmlnLmRvbnRBbmltYXRlID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmVmID0gZGV2Q29uZmlnLmRvbnRBbmltYXRlO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGkgPSBqID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaiA8IGxlbjsgaSA9ICsraikge1xuICAgICAgc2xpZGUgPSByZWZbaV07XG4gICAgICByZXN1bHRzLnB1c2godGhpcy5hZGRTa2lwVG9FbmRzKGl0ZW1zW2ldKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIERldlRvb2xzLnByb3RvdHlwZS5hZGRTa2lwVG9FbmRzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIGl0ZW0sIGtleSwgcmVzdWx0cztcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChrZXkgaW4gb2JqKSB7XG4gICAgICBpdGVtID0gb2JqW2tleV07XG4gICAgICBpZiAodHlwZW9mIGl0ZW0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgdGhpcy5hZGRTa2lwVG9FbmRzKGl0ZW0sIG9iaik7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGl0ZW0gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgaWYgKGl0ZW0ubWF0Y2goLy5qc29uL2cpKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKG9iai5qdW1wVG9FbmQgPSB0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2godm9pZCAwKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHZvaWQgMCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIERldlRvb2xzLnByb3RvdHlwZS5hZGRJbmRleGVzVG9JdGVtcyA9IGZ1bmN0aW9uKGRldkNvbmZpZywgaXRlbXMpIHtcbiAgICB2YXIgY291bnQsIGl0ZW0sIGosIGxlbiwgbnVtU2xpZGVzUmVtb3ZlZCwgcmVzdWx0cztcbiAgICBudW1TbGlkZXNSZW1vdmVkID0gZGV2Q29uZmlnLnN0YXJ0SW5kZXggIT0gbnVsbCA/IGRldkNvbmZpZy5zdGFydEluZGV4IDogMDtcbiAgICBjb3VudCA9IDA7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoaiA9IDAsIGxlbiA9IGl0ZW1zLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICBpdGVtID0gaXRlbXNbal07XG4gICAgICByZXN1bHRzLnB1c2goaXRlbS5pbmRleCA9IG51bVNsaWRlc1JlbW92ZWQgKyBjb3VudCsrKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgRGV2VG9vbHMucHJvdG90eXBlLmluaXRQZXJmb3JtYW5jZVN0YXRzID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zdGF0cyA9IG5ldyBTdGF0cygpO1xuICAgIHRoaXMuc3RhdHMuc2V0TW9kZSgwKTtcbiAgICB0aGlzLnN0YXRzLmRvbUVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIHRoaXMuc3RhdHMuZG9tRWxlbWVudC5zdHlsZS5sZWZ0ID0gJzBweCc7XG4gICAgdGhpcy5zdGF0cy5kb21FbGVtZW50LnN0eWxlLnRvcCA9ICcwcHgnO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5zdGF0cy5kb21FbGVtZW50KTtcbiAgICByZXR1cm4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlKTtcbiAgfTtcblxuICBEZXZUb29scy5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zdGF0cy5lbmQoKTtcbiAgICB0aGlzLnN0YXRzLmJlZ2luKCk7XG4gICAgcmV0dXJuIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZSk7XG4gIH07XG5cbiAgcmV0dXJuIERldlRvb2xzO1xuXG59KSgpO1xuIiwidmFyIERpY3Rpb25hcnk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGljdGlvbmFyeSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gRGljdGlvbmFyeSgpIHtcbiAgICBhcmlzdG90bGUuZGljdGlvbmFyeSA9IHRoaXM7XG4gICAgdGhpcy50ZXJtcyA9IHtcbiAgICAgIFwiY2FkZXRcIjogJ0NhZGV0JyxcbiAgICAgIFwiY2FkZXQtZmlyc3QtY2xhc3NcIjogJ0NhZGV0IEZpcnN0IENsYXNzJyxcbiAgICAgIFwidGVjaG5pY2FsLWNhZGV0XCI6IFwiVGVjaG5pY2FsIENhZGV0XCIsXG4gICAgICBcImN5YmVyLWNhZGV0XCI6IFwiQ3liZXIgQ2FkZXRcIixcbiAgICAgIGJhY2tncm91bmRfcHJvYmU6ICdUaGUgQmFja2dyb3VuZCBQcm9iZScsXG4gICAgICByaXNrX2RldGVjdG9yOiAnVGhlIFJpc2sgRGV0ZWN0b3InLFxuICAgICAgdm9pZ2h0X2thbXBmZjogJ1ZvaWdodC1LYW1wZmYgQXNzZXNzb3InLFxuICAgICAgZG91YmxlX2RldWNlOiAnRG91YmxlIERldWNlIFB1bHZlcml6ZXInLFxuICAgICAgbXJfZnVzaW9uOiAnTXIuIEZ1c2lvbicsXG4gICAgICBkZW1hdGVyaWFsaXplcjogJ1RoZSBEZS1NYXRlcmlhbGl6ZXInLFxuICAgICAgYnVybmluYXRvcjogJ1RoZSBCdXJuaW5hdG9yJyxcbiAgICAgIGdyZWF0X3dhbGw6ICdUaGUgR3JlYXQgV2FsbCcsXG4gICAgICBnYXRlZDogJ0dhdGVkIENvbW11bml0eScsXG4gICAgICBcImdlbmVyYXRpb24tcGxhbnRcIjogJ0dlbmVyYXRpb24gUGxhbnQnLFxuICAgICAgc3Vic3RhdGlvbjogJ1N1YnN0YXRpb24nLFxuICAgICAgXCJjb250cm9sLWNlbnRlclwiOiAnQ29udHJvbCBDZW50ZXInLFxuICAgICAgYnJpdF9iZWFjb246ICdCcml0IEJlYWNvbiwgU2Nob2xhci4gR2VudGxlbWFuLiBCb3QgSHVudGVyLicsXG4gICAgICBzcGVlZGVyOiAnU3BlZWRlciBXaXRoIFRvdyBDYWJsZXMnLFxuICAgICAgb3JiaXRhbF9zdHJpa2U6ICdPcmJpdGFsIEtpbmV0aWMgU3RyaWtlJyxcbiAgICAgIFwiY2FyZC1zY2FubmVyXCI6ICdDYXJkIEd1YXJkIFhUJyxcbiAgICAgIFwiaGFsLXNjYW5uZXJcIjogJ0hBTCA5MDAwIEV5ZSBTY2FubmVyJyxcbiAgICAgIFwia3Jha2VuLXNjYW5uZXJcIjogJ1dhdGVyeSBHcmF2ZSBLcmFrZW4gU2Vuc29yJyxcbiAgICAgIFwiZHVjdC10YXBlXCI6ICdQb3J0IER1Y3QgVGFwZScsXG4gICAgICBcImtyYWdsZVwiOiAnVGhlIEtyYWdsZScsXG4gICAgICBcInVtcGlyZVwiOiAnUG9ydCBVbXBpcmUnLFxuICAgICAgbG9nX2Jvb2s6ICdHdWVzdCBMb2cgQm9vaycsXG4gICAgICBlc2NvcnRfbGVhc2g6ICdcIlBTUCBCdWRkeVwiLCBFc2NvcnQgTGVhc2gnLFxuICAgICAgdHJhY3Rvcl9iZWFtOiAnVmlzaXRvciBUcmFjdG9yIEJlYW0nXG4gICAgfTtcbiAgICB0aGlzLmNhdGVnb3JpZXMgPSB7XG4gICAgICBcIkdlbmVyYXRpb24gUGxhbnRcIjogXCJGYWNpbGl0eSBUeXBlXCIsXG4gICAgICBcIlN1YnN0YXRpb25cIjogXCJGYWNpbGl0eSBUeXBlXCIsXG4gICAgICBcIkNvbnRyb2wgQ2VudGVyXCI6IFwiRmFjaWxpdHkgVHlwZVwiLFxuICAgICAgJ1RoZSBCYWNrZ3JvdW5kIFByb2JlJzogJ0FjY2VzcyBDb250cm9sIFN5c3RlbScsXG4gICAgICAnVGhlIFJpc2sgRGV0ZWN0b3InOiAnQWNjZXNzIENvbnRyb2wgU3lzdGVtJyxcbiAgICAgICdWb2lnaHQtS2FtcGZmIEFzc2Vzc29yJzogJ0FjY2VzcyBDb250cm9sIFN5c3RlbScsXG4gICAgICAnRG91YmxlIERldWNlIFB1bHZlcml6ZXInOiAnQXNzZXQgQ2hhbmdlIFRvb2wnLFxuICAgICAgJ01yLiBGdXNpb24nOiAnQXNzZXQgQ2hhbmdlIFRvb2wnLFxuICAgICAgJ1RoZSBEZS1NYXRlcmlhbGl6ZXInOiAnQXNzZXQgQ2hhbmdlIFRvb2wnLFxuICAgICAgJ1RoZSBCdXJuaW5hdG9yJzogJ0VsZWN0cm9uaWMgQWNjZXNzIENvbnRyb2wgU3lzdGVtJyxcbiAgICAgICdUaGUgR3JlYXQgV2FsbCc6ICdFbGVjdHJvbmljIEFjY2VzcyBDb250cm9sIFN5c3RlbScsXG4gICAgICAnR2F0ZWQgQ29tbXVuaXR5JzogJ0VsZWN0cm9uaWMgQWNjZXNzIENvbnRyb2wgU3lzdGVtJyxcbiAgICAgICdCcml0IEJlYWNvbiwgU2Nob2xhci4gR2VudGxlbWFuLiBCb3QgSHVudGVyLic6ICdORVJDIERlZmVuc2UnLFxuICAgICAgJ1NwZWVkZXIgV2l0aCBUb3cgQ2FibGVzJzogJ05FUkMgRGVmZW5zZScsXG4gICAgICAnT3JiaXRhbCBLaW5ldGljIFN0cmlrZSc6ICdORVJDIERlZmVuc2UnLFxuICAgICAgJ0NhcmQgR3VhcmQgWFQnOiAnUGh5c2ljYWwgQWNjZXNzIENvbnRyb2wgU3lzdGVtJyxcbiAgICAgICdIQUwgOTAwMCBFeWUgU2Nhbm5lcic6ICdQaHlzaWNhbCBBY2Nlc3MgQ29udHJvbCBTeXN0ZW0nLFxuICAgICAgJ1dhdGVyeSBHcmF2ZSBLcmFrZW4gU2Vuc29yJzogJ1BoeXNpY2FsIEFjY2VzcyBDb250cm9sIFN5c3RlbScsXG4gICAgICAnUG9ydCBEdWN0IFRhcGUnOiAnUGh5c2ljYWwgUG9ydCBTZWN1cml0eScsXG4gICAgICAnVGhlIEtyYWdsZSc6ICdQaHlzaWNhbCBQb3J0IFNlY3VyaXR5JyxcbiAgICAgICdQb3J0IFVtcGlyZSc6ICdQaHlzaWNhbCBQb3J0IFNlY3VyaXR5JyxcbiAgICAgICdHdWVzdCBMb2cgQm9vayc6ICdWaXNpdG9yIEVzY29ydCBQcm9jZWR1cmUnLFxuICAgICAgJ1wiUFNQIEJ1ZGR5XCIsIEVzY29ydCBMZWFzaCc6ICdWaXNpdG9yIEVzY29ydCBQcm9jZWR1cmUnLFxuICAgICAgJ1Zpc2l0b3IgVHJhY3RvciBCZWFtJzogJ1Zpc2l0b3IgRXNjb3J0IFByb2NlZHVyZSdcbiAgICB9O1xuICB9XG5cbiAgRGljdGlvbmFyeS5wcm90b3R5cGUuZ2V0Q2F0ZWdvcnkgPSBmdW5jdGlvbih0ZXJtKSB7XG4gICAgaWYgKHRoaXMuY2F0ZWdvcmllc1t0ZXJtXSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5jYXRlZ29yaWVzW3Rlcm1dO1xuICAgIH1cbiAgICByZXR1cm4gYXJpc3RvdGxlW1widGhyb3dcIl0oXCJUcmllZCB0byB1c2UgYW4gdW5rbm93biBjYXRlZ29yeTogYFwiICsgdGVybSArIFwiYFwiKTtcbiAgfTtcblxuICBEaWN0aW9uYXJ5LnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbih0ZXJtKSB7XG4gICAgaWYgKHRoaXMudGVybXNbdGVybV0gIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMudGVybXNbdGVybV07XG4gICAgfVxuICAgIHJldHVybiBhcmlzdG90bGVbXCJ0aHJvd1wiXShcIlRyaWVkIHRvIHVzZSBhbiB1bmtub3duIHRlcm06IGBcIiArIHRlcm0gKyBcImBcIik7XG4gIH07XG5cbiAgcmV0dXJuIERpY3Rpb25hcnk7XG5cbn0pKCk7XG4iLCJ2YXIgRXBpc29kZUxvYWRlcjtcblxubW9kdWxlLmV4cG9ydHMgPSBFcGlzb2RlTG9hZGVyID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBFcGlzb2RlTG9hZGVyKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIHRoaXMubG9hZENvbmZpZ0RhdGEoKTtcbiAgfVxuXG4gIEVwaXNvZGVMb2FkZXIucHJvdG90eXBlLmxvYWRDb25maWdEYXRhID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGFyaXN0b3RsZS5nZXRKc29uKFwibG9jYWwvXCIgKyBhcmlzdG90bGUuY29uZmlnRmlsZSwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICB2YXIga2V5LCB2YWw7XG4gICAgICAgIGZvciAoa2V5IGluIGRhdGEpIHtcbiAgICAgICAgICB2YWwgPSBkYXRhW2tleV07XG4gICAgICAgICAgYXJpc3RvdGxlLmdsb2JhbHMuc2V0KGtleSwgdmFsLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgX3RoaXMuc2V0TWljcm9zb2Z0VHJhY2tpbmdEYXRhKCk7XG4gICAgICAgIHJldHVybiBfdGhpcy5sb2FkRXBpc29kZSgpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH07XG5cbiAgRXBpc29kZUxvYWRlci5wcm90b3R5cGUubG9hZEVwaXNvZGUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbWFwTmFtZTtcbiAgICBtYXBOYW1lID0gYXJpc3RvdGxlLmdsb2JhbHMuZ2V0KFwiZXBpc29kZU1hcEZpbGVzXCIpW2FyaXN0b3RsZS5lcGlzb2RlTnVtXTtcbiAgICByZXR1cm4gYXJpc3RvdGxlLmdldEpzb24oYXJpc3RvdGxlLmdldEFzc2V0UGF0aChtYXBOYW1lKSwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBpZiAoYXJpc3RvdGxlLmdsb2JhbHMuZ2V0KFwiZmlsdGVyc1wiKVthcmlzdG90bGUuZXBpc29kZU51bV0gIT0gbnVsbCkge1xuICAgICAgICAgIF90aGlzLmZpbHRlcihkYXRhLCBhcmlzdG90bGUuZ2xvYmFscy5nZXQoXCJmaWx0ZXJzXCIpW2FyaXN0b3RsZS5lcGlzb2RlTnVtXSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzLmNhbGxiYWNrKGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH07XG5cbiAgRXBpc29kZUxvYWRlci5wcm90b3R5cGUuc2V0TWljcm9zb2Z0VHJhY2tpbmdEYXRhID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFwaWtleSwgbGVhcm5lcklkO1xuICAgIGlmICghRXBpc29kZUxvYWRlci5oYXNTZXRNc2Z0RGF0YSkge1xuICAgICAgRXBpc29kZUxvYWRlci5oYXNTZXRNc2Z0RGF0YSA9IHRydWU7XG4gICAgICBsZWFybmVySWQgPSBhcmlzdG90bGUuZ2xvYmFscy5nZXQoJ3VzZXJJZCcpO1xuICAgICAgYXBpa2V5ID0gYXJpc3RvdGxlLmdsb2JhbHMuZ2V0KCdhcGlrZXknKTtcbiAgICAgIHJldHVybiBhcHBJbnNpZ2h0cy5zZXRBdXRoZW50aWNhdGVkVXNlckNvbnRleHQobGVhcm5lcklkLnJlcGxhY2UoL1ssOz18IF0rL2csIFwiX1wiKSwgYXBpa2V5LnJlcGxhY2UoL1ssOz18IF0rL2csIFwiX1wiKSk7XG4gICAgfVxuICB9O1xuXG4gIEVwaXNvZGVMb2FkZXIucHJvdG90eXBlLmZpbHRlciA9IGZ1bmN0aW9uKGVwaXNvZGVEYXRhLCBmaWx0ZXJzKSB7XG4gICAgdmFyIGNoYXB0ZXIsIGosIGxlbiwgcmVmLCByZXN1bHRzO1xuICAgIHRoaXMuZmlsdGVySXRlbXMoZXBpc29kZURhdGEuY2hhcHRlcnMsIGZpbHRlcnMpO1xuICAgIHJlZiA9IGVwaXNvZGVEYXRhLmNoYXB0ZXJzO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGogPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgIGNoYXB0ZXIgPSByZWZbal07XG4gICAgICByZXN1bHRzLnB1c2godGhpcy5maWx0ZXJJdGVtcyhjaGFwdGVyLnNsaWRlcywgZmlsdGVycykpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBFcGlzb2RlTG9hZGVyLnByb3RvdHlwZS5maWx0ZXJJdGVtcyA9IGZ1bmN0aW9uKGl0ZW1zLCBmaWx0ZXJzKSB7XG4gICAgdmFyIGksIGosIHJlZiwgcmVzdWx0cztcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChpID0gaiA9IHJlZiA9IGl0ZW1zLmxlbmd0aCAtIDE7IHJlZiA8PSAwID8gaiA8PSAwIDogaiA+PSAwOyBpID0gcmVmIDw9IDAgPyArK2ogOiAtLWopIHtcbiAgICAgIGlmIChpdGVtc1tpXS5maWQgIT0gbnVsbCkge1xuICAgICAgICBpZiAoZmlsdGVyc1tpdGVtc1tpXS5maWRdICE9IG51bGwpIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2goaXRlbXMuc3BsaWNlKGksIDEpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2godm9pZCAwKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHZvaWQgMCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIHJldHVybiBFcGlzb2RlTG9hZGVyO1xuXG59KSgpO1xuIiwidmFyIEdsb2JhbFZhcnM7XG5cbm1vZHVsZS5leHBvcnRzID0gR2xvYmFsVmFycyA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gR2xvYmFsVmFycygpIHtcbiAgICB0aGlzLnZhcnMgPSB7fTtcbiAgICBhcmlzdG90bGUuZ2xvYmFscyA9IHRoaXM7XG4gICAgUHViU3ViLnN1YnNjcmliZSgnc2V0dmFycycsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGEsIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnNldE1hbnkoZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCdzZXNzaW9ua2V5LmFkZCcsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGEsIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmdlbmVyYXRlU2Vzc2lvbktleSgpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH1cblxuICBHbG9iYWxWYXJzLnByb3RvdHlwZS5zZXRNYW55ID0gZnVuY3Rpb24odmFycykge1xuICAgIHZhciBrZXksIHZhbDtcbiAgICBmb3IgKGtleSBpbiB2YXJzKSB7XG4gICAgICB2YWwgPSB2YXJzW2tleV07XG4gICAgICB0aGlzLnZhcnNba2V5XSA9IHZhbDtcbiAgICB9XG4gICAgcmV0dXJuIFB1YlN1Yi5wdWJsaXNoKCdzdGF0ZS5zYXZlJyk7XG4gIH07XG5cbiAgR2xvYmFsVmFycy5wcm90b3R5cGUuZ2V0TWV0YURhdGEgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy52YXJzLm1ldGE7XG4gIH07XG5cbiAgR2xvYmFsVmFycy5wcm90b3R5cGUuc2V0ID0gZnVuY3Rpb24oa2V5LCB2YWwsIHNhdmVTdGF0ZSkge1xuICAgIGlmIChzYXZlU3RhdGUgPT0gbnVsbCkge1xuICAgICAgc2F2ZVN0YXRlID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy52YXJzW2tleV0gPSB2YWw7XG4gICAgaWYgKHNhdmVTdGF0ZSkge1xuICAgICAgcmV0dXJuIFB1YlN1Yi5wdWJsaXNoKCdzdGF0ZS5zYXZlJyk7XG4gICAgfVxuICB9O1xuXG4gIEdsb2JhbFZhcnMucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKHN0ciwgdGhyb3dFcnJvcnMpIHtcbiAgICBpZiAodGhyb3dFcnJvcnMgPT0gbnVsbCkge1xuICAgICAgdGhyb3dFcnJvcnMgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAodGhpcy52YXJzW3N0cl0gIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMudmFyc1tzdHJdO1xuICAgIH1cbiAgICBpZiAodGhyb3dFcnJvcnMpIHtcbiAgICAgIGFyaXN0b3RsZVtcInRocm93XCJdKFwiVHJpZWQgdG8gYWNjZXNzIGdsb2JhbCB2YXJpYWJsZSBgXCIgKyBzdHIgKyBcImAsIGJ1dCBpdCBkb2Vzbid0IGV4aXN0c1wiLCB0cnVlKTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgR2xvYmFsVmFycy5wcm90b3R5cGUuZ2VuZXJhdGVTZXNzaW9uS2V5ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuZ2V0KCdzZXNzaW9uS2V5JywgZmFsc2UpID09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldChcInNlc3Npb25LZXlcIiwgdGhpcy5yYW5kb21MZXR0ZXIoKSArIHRoaXMucmFuZG9tTGV0dGVyKCkgKyB0aGlzLnJhbmRvbUxldHRlcigpICsgdGhpcy5yYW5kb21MZXR0ZXIoKSArIChuZXcgRGF0ZSgpLmdldFRpbWUoKSArIE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDIzNDU1NDMyKSkpO1xuICAgIH1cbiAgfTtcblxuICBHbG9iYWxWYXJzLnByb3RvdHlwZS5yYW5kb21MZXR0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbGV0dGVycztcbiAgICBsZXR0ZXJzID0gWydhJywgJ2InLCAnYycsICdkJywgJ2UnLCAnZicsICdnJywgJ2gnLCAnaScsICdqJ107XG4gICAgcmV0dXJuIGxldHRlcnNbTWF0aC5mbG9vcihsZXR0ZXJzLmxlbmd0aCAqIE1hdGgucmFuZG9tKCkpXTtcbiAgfTtcblxuICByZXR1cm4gR2xvYmFsVmFycztcblxufSkoKTtcbiIsInZhciBKc29uTG9hZGVyLFxuICBiaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBKc29uTG9hZGVyID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBKc29uTG9hZGVyKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIHRoaXMubG9hZCA9IGJpbmQodGhpcy5sb2FkLCB0aGlzKTtcbiAgICBhcmlzdG90bGUuZ2V0SnNvbiA9IHRoaXMubG9hZDtcbiAgfVxuXG4gIEpzb25Mb2FkZXIucHJvdG90eXBlLmxvYWQgPSBmdW5jdGlvbihqc29uUGF0aCwgY2IpIHtcbiAgICByZXR1cm4gdGhpcy5sb2FkSnNvbihqc29uUGF0aCwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oanNvbikge1xuICAgICAgICByZXR1cm4gY2IoSlNPTi5wYXJzZShqc29uKSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgfTtcblxuICBKc29uTG9hZGVyLnByb3RvdHlwZS5sb2FkSnNvbiA9IGZ1bmN0aW9uKHBhdGgsIG9uQ29tcGxldGUpIHtcbiAgICB2YXIgeG9iajtcbiAgICB4b2JqID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgeG9iai5vdmVycmlkZU1pbWVUeXBlKCdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgeG9iai5vcGVuKCdHRVQnLCBwYXRoLCB0cnVlKTtcbiAgICB4b2JqLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoeG9iai5yZWFkeVN0YXRlID09PSA0ICYmIHhvYmouc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICByZXR1cm4gb25Db21wbGV0ZSh4b2JqLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSkodGhpcyk7XG4gICAgcmV0dXJuIHhvYmouc2VuZChudWxsKTtcbiAgfTtcblxuICByZXR1cm4gSnNvbkxvYWRlcjtcblxufSkoKTtcbiIsInZhciBMb2NhbFN0b3JhZ2VQcm94eTtcblxubW9kdWxlLmV4cG9ydHMgPSBMb2NhbFN0b3JhZ2VQcm94eSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gTG9jYWxTdG9yYWdlUHJveHkoY2IpIHtcbiAgICB3aW5kb3cuemFwID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShvYmopKTtcbiAgICB9O1xuICAgIGFyaXN0b3RsZS5sb2NhbFN0b3JhZ2VQcm94eSA9IHRoaXM7XG4gICAgUHViU3ViLnN1YnNjcmliZSgnc3RhdGUuc2F2ZScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnNhdmVTdGF0ZSgpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgUHViU3ViLnN1YnNjcmliZSgnc3RhdGUubG9hZCcsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmxvYWRTdGF0ZSgpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgUHViU3ViLnN1YnNjcmliZSgnc3RhdGUucmVoeWRyYXRlJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMucmVoeWRyYXRlKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCdzbGlkZS5hY3RpdmF0ZWQnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5zYXZlU3RhdGUoZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCdjaGFwdGVyLnN0YXJ0ZWQnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5jaGFwdGVyVGl0bGUgPSBkYXRhO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgUHViU3ViLnN1YnNjcmliZSgncmVmcmVzaC5vbi5jaGFwdGVyJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMucmVmcmVzaE9uQ2hhcHRlcihkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRoaXMubG9hZFN0YXRlKCk7XG4gICAgdGhpcy5zZXRBcmlzdG90bGVWYXJzKCk7XG4gICAgY2IoKTtcbiAgfVxuXG4gIExvY2FsU3RvcmFnZVByb3h5LnByb3RvdHlwZS5yZWh5ZHJhdGUgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5zdG9yZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiBhcmlzdG90bGUuZXBpc29kZS5nb3RvTG9jYXRpb25CeVRpdGxlKHRoaXMuc3RvcmUubG9jYXRpb24uc2xpZGUsIHRoaXMuc3RvcmUubG9jYXRpb24uY2hhcHRlcik7XG4gIH07XG5cbiAgTG9jYWxTdG9yYWdlUHJveHkucHJvdG90eXBlLmJlZ2luID0gZnVuY3Rpb24oY2IpIHtcbiAgICB0aGlzLnVzZXIgPSB0aGlzLnN0b3JlLnVzZXI7XG4gICAgdGhpcy51c2VySWQgPSB0aGlzLnN0b3JlLnVzZXJJZDtcbiAgICB0aGlzLmNyZWF0ZUZvcm1hdHRlZE5hbWUoKTtcbiAgICBpZiAodGhpcy5zdG9yZS5nbG9iYWxWYXJzICE9IG51bGwpIHtcbiAgICAgIGFyaXN0b3RsZS5nbG9iYWxzLnZhcnMgPSB0aGlzLnN0b3JlLmdsb2JhbFZhcnM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFyaXN0b3RsZS5nbG9iYWxzLnZhcnMgPSB7fTtcbiAgICB9XG4gICAgYXJpc3RvdGxlLmdsb2JhbHMudmFycy51c2VyID0gdGhpcy51c2VyO1xuICAgIGFyaXN0b3RsZS5nbG9iYWxzLnZhcnMudXNlcklkID0gdGhpcy51c2VySWQ7XG4gICAgcmV0dXJuIGNiKCk7XG4gIH07XG5cbiAgTG9jYWxTdG9yYWdlUHJveHkucHJvdG90eXBlLnNhdmVTdGF0ZSA9IGZ1bmN0aW9uKGN1cnJlbnRTbGlkZSwgY2hhcHRlcikge1xuICAgIHZhciBjaDtcbiAgICB0aGlzLnN0b3JlLmdsb2JhbFZhcnMgPSBhcmlzdG90bGUuZ2xvYmFscy52YXJzO1xuICAgIGlmIChhcmlzdG90bGUuZXBpc29kZSAhPSBudWxsKSB7XG4gICAgICBjaCA9IGNoYXB0ZXIgIT0gbnVsbCA/IGNoYXB0ZXIgOiB0aGlzLmNoYXB0ZXJUaXRsZTtcbiAgICAgIHRoaXMuc3RvcmUubG9jYXRpb24gPSB7XG4gICAgICAgIGVwaXNvZGVOdW06IGFyaXN0b3RsZS5lcGlzb2RlLmVwaXNvZGVOdW0sXG4gICAgICAgIHNsaWRlOiBjdXJyZW50U2xpZGUsXG4gICAgICAgIGNoYXB0ZXI6IGNoXG4gICAgICB9O1xuICAgICAgcmV0dXJuIHRoaXMuc2F2ZVRvTG9jYWxTdG9yYWdlKHRoaXMuc3RvcmUpO1xuICAgIH1cbiAgfTtcblxuICBMb2NhbFN0b3JhZ2VQcm94eS5wcm90b3R5cGUucmVmcmVzaE9uQ2hhcHRlciA9IGZ1bmN0aW9uKGNoYXB0ZXJUaXRsZSkge1xuICAgIHRoaXMuc2F2ZVN0YXRlKGNoYXB0ZXJUaXRsZSwgY2hhcHRlclRpdGxlKTtcbiAgICByZXR1cm4gdGhpcy50cmlnZ2VyUmVmcmVzaCgpO1xuICB9O1xuXG4gIExvY2FsU3RvcmFnZVByb3h5LnByb3RvdHlwZS5yZWZyZXNoT25FcGlzb2RlID0gZnVuY3Rpb24obmV3RXBpc29kZU51bSkge1xuICAgIHRoaXMuc3RvcmUuZ2xvYmFsVmFycyA9IGFyaXN0b3RsZS5nbG9iYWxzLnZhcnM7XG4gICAgdGhpcy5zdG9yZS5sb2NhdGlvbiA9IHtcbiAgICAgIGVwaXNvZGVOdW06IG5ld0VwaXNvZGVOdW1cbiAgICB9O1xuICAgIHRoaXMuc2F2ZVRvTG9jYWxTdG9yYWdlKHRoaXMuc3RvcmUpO1xuICAgIHJldHVybiB0aGlzLnRyaWdnZXJSZWZyZXNoKCk7XG4gIH07XG5cbiAgTG9jYWxTdG9yYWdlUHJveHkucHJvdG90eXBlLmNvbXBsZXRlRXBpc29kZSA9IGZ1bmN0aW9uKG5ld0VwaXNvZGVOdW0pIHtcbiAgICB0aGlzLnN0b3JlID0gdGhpcy5zdG9yZSAhPSBudWxsID8gdGhpcy5zdG9yZSA6IHt9O1xuICAgIHJldHVybiB0aGlzLnN0b3JlLmxvY2F0aW9uID0ge1xuICAgICAgZXBpc29kZU51bTogbmV3RXBpc29kZU51bVxuICAgIH07XG4gIH07XG5cbiAgTG9jYWxTdG9yYWdlUHJveHkucHJvdG90eXBlLmNyZWF0ZUZvcm1hdHRlZE5hbWUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgeDtcbiAgICB4ID0gdGhpcy51c2VyLnNwbGl0KCcsJyk7XG4gICAgcmV0dXJuIHRoaXMubmFtZSA9IHhbMV0gKyBcIiBcIiArIHhbMF07XG4gIH07XG5cbiAgTG9jYWxTdG9yYWdlUHJveHkucHJvdG90eXBlLnNldEFyaXN0b3RsZVZhcnMgPSBmdW5jdGlvbigpIHtcbiAgICBhcmlzdG90bGUuY29uZmlnRmlsZSA9IHRoaXMuc3RvcmUuaW5pdFBhcmFtcy5jb25maWdGaWxlO1xuICAgIGFyaXN0b3RsZS5kZXZFcGlzb2RlTnVtID0gdGhpcy5zdG9yZS5pbml0UGFyYW1zLmVwaXNvZGU7XG4gICAgYXJpc3RvdGxlLmVwaXNvZGVzRGlyID0gdGhpcy5zdG9yZS5pbml0UGFyYW1zLmVwaXNvZGVSb290O1xuICAgIGFyaXN0b3RsZS5pc0Rldk1vZGUgPSB0aGlzLnN0b3JlLmluaXRQYXJhbXMuaXNEZXZNb2RlO1xuICAgIGFyaXN0b3RsZS5pc0xvY2FsID0gdGhpcy5zdG9yZS5pbml0UGFyYW1zLmlzTG9jYWw7XG4gICAgYXJpc3RvdGxlLmxvY2FsRGlyID0gdGhpcy5zdG9yZS5pbml0UGFyYW1zLmxvY2FsUm9vdDtcbiAgICByZXR1cm4gYXJpc3RvdGxlLnN1ZG8gPSB0aGlzLnN0b3JlLmluaXRQYXJhbXMuc3VkbztcbiAgfTtcblxuICBMb2NhbFN0b3JhZ2VQcm94eS5wcm90b3R5cGUubG9hZFN0YXRlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZ2xvYlwiKSk7XG4gIH07XG5cbiAgTG9jYWxTdG9yYWdlUHJveHkucHJvdG90eXBlLmNvbXBsZXRlQ291cnNlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY291cnNlLmNvbXBsZXRlXCIsIFwidHJ1ZVwiKTtcbiAgfTtcblxuICBMb2NhbFN0b3JhZ2VQcm94eS5wcm90b3R5cGUuc2F2ZVRvTG9jYWxTdG9yYWdlID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImdsb2JcIiwgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICB9O1xuXG4gIExvY2FsU3RvcmFnZVByb3h5LnByb3RvdHlwZS50cmlnZ2VyUmVmcmVzaCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInJlZnJlc2gud2luZG93XCIsIERhdGUubm93KCkpO1xuICB9O1xuXG4gIHJldHVybiBMb2NhbFN0b3JhZ2VQcm94eTtcblxufSkoKTtcbiIsInZhciBMb2dnZXIsXG4gIGJpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExvZ2dlciA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gTG9nZ2VyKCRlbCwgaXNEZXZNb2RlKSB7XG4gICAgdmFyICRub2RlO1xuICAgIHRoaXMuaXNEZXZNb2RlID0gaXNEZXZNb2RlO1xuICAgIHRoaXNbXCJ0aHJvd1wiXSA9IGJpbmQodGhpc1tcInRocm93XCJdLCB0aGlzKTtcbiAgICB0aGlzLmxvZyA9IGJpbmQodGhpcy5sb2csIHRoaXMpO1xuICAgIHRoaXMubWVzc2FnZXMgPSBcIlwiO1xuICAgICRub2RlID0gJChqYWRlVGVtcGxhdGVbJ21pc2MvbG9nZ2VyJ10oe30pKTtcbiAgICAkZWwuYXBwZW5kKCRub2RlKTtcbiAgICB0aGlzLiRsb2dOb3RpZnllciA9ICQoJy5tZXNzYWdlJywgJG5vZGUpO1xuICAgIHRoaXMuJGVycm9yTm90aWZ5ZXIgPSAkKCcuZXJyb3InLCAkbm9kZSk7XG4gICAgdGhpcy4kbG9nTm90aWZ5ZXIub24oJ2NsaWNrJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5oaWRlTG9nTm90aWZpZXIoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRoaXMuJGVycm9yTm90aWZ5ZXIub24oJ2NsaWNrJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5oaWRlRXJyb3JOb3RpZmllcigpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgYXJpc3RvdGxlLmxvZyA9IHRoaXMubG9nO1xuICAgIGFyaXN0b3RsZVtcInRocm93XCJdID0gdGhpc1tcInRocm93XCJdO1xuICAgIHRoaXMuaGlkZUxvZ05vdGlmaWVyKCk7XG4gICAgdGhpcy5oaWRlRXJyb3JOb3RpZmllcigpO1xuICAgIGlmICghdGhpcy5pc0Rldk1vZGUpIHtcbiAgICAgICRub2RlLmNzcyh7XG4gICAgICAgIGRpc3BsYXk6IFwibm9uZVwiXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBMb2dnZXIucHJvdG90eXBlLnByaW50ID0gZnVuY3Rpb24oc3RyLCBjbGVhclByZXZpb3VzKSB7XG4gICAgdGhpcy5tZXNzYWdlcyArPSBzdHIgKyBcIjwvYnI+XCI7XG4gICAgdGhpcy5zaG93TG9nTm90aWZpZXIoKTtcbiAgICBpZiAoY2xlYXJQcmV2aW91cykge1xuICAgICAgcmV0dXJuIHRoaXMuJGxvZ05vdGlmeWVyLmh0bWwoc3RyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuJGxvZ05vdGlmeWVyLmh0bWwodGhpcy5tZXNzYWdlcyk7XG4gICAgfVxuICB9O1xuXG4gIExvZ2dlci5wcm90b3R5cGUubG9nID0gZnVuY3Rpb24obXNnKSB7XG4gICAgdGhpcy5zaG93TG9nTm90aWZpZXIoKTtcbiAgICBjb25zb2xlLmxvZyhcIiVjXCIgKyBtc2csIFwiY29sb3I6IzBiMTUyNDsgYmFja2dyb3VuZDojYjBkOWU2XCIpO1xuICAgIGlmICghdGhpcy5pc0Rldk1vZGUpIHtcbiAgICAgIHJldHVybiBhcHBJbnNpZ2h0cy50cmFja0V4Y2VwdGlvbihuZXcgRXJyb3IoXCJHZW5lcmFsIExvZyA6IFwiICsgbXNnKSk7XG4gICAgfVxuICB9O1xuXG4gIExvZ2dlci5wcm90b3R5cGVbXCJ0aHJvd1wiXSA9IGZ1bmN0aW9uKG1zZywgc2hvd1RyYWNlKSB7XG4gICAgaWYgKHNob3dUcmFjZSA9PSBudWxsKSB7XG4gICAgICBzaG93VHJhY2UgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5zaG93RXJyb3JOb3RpZmllcigpO1xuICAgIGlmIChzaG93VHJhY2UpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXCJcIiArIG1zZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiJWNcIiArIG1zZywgXCJjb2xvcjojM2QwMDAwOyBiYWNrZ3JvdW5kOiNlNmIwYzBcIik7XG4gICAgfVxuICAgIGlmICghdGhpcy5pc0Rldk1vZGUpIHtcbiAgICAgIGlmICh0eXBlb2YgbXNnID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIHJldHVybiBhcHBJbnNpZ2h0cy50cmFja0V4Y2VwdGlvbihtc2csIFwiRXhjZXB0aW9uIExvZ1wiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBhcHBJbnNpZ2h0cy50cmFja0V4Y2VwdGlvbihuZXcgRXJyb3IoXCJFeGNlcHRpb24gTG9nIDogXCIgKyBtc2cpKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgTG9nZ2VyLnByb3RvdHlwZS5oaWRlTG9nTm90aWZpZXIgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kbG9nTm90aWZ5ZXIuY3NzKHtcbiAgICAgIGRpc3BsYXk6IFwibm9uZVwiXG4gICAgfSk7XG4gIH07XG5cbiAgTG9nZ2VyLnByb3RvdHlwZS5oaWRlRXJyb3JOb3RpZmllciA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRlcnJvck5vdGlmeWVyLmNzcyh7XG4gICAgICBkaXNwbGF5OiBcIm5vbmVcIlxuICAgIH0pO1xuICB9O1xuXG4gIExvZ2dlci5wcm90b3R5cGUuc2hvd0xvZ05vdGlmaWVyID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJGxvZ05vdGlmeWVyLmNzcyh7XG4gICAgICBkaXNwbGF5OiBcImJsb2NrXCJcbiAgICB9KTtcbiAgfTtcblxuICBMb2dnZXIucHJvdG90eXBlLnNob3dFcnJvck5vdGlmaWVyID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJGVycm9yTm90aWZ5ZXIuY3NzKHtcbiAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIlxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBMb2dnZXI7XG5cbn0pKCk7XG4iLCJ2YXIgTG9nU3RhY2hlLFxuICBiaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfSxcbiAgc2xpY2UgPSBbXS5zbGljZTtcblxubW9kdWxlLmV4cG9ydHMgPSBMb2dTdGFjaGUgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIExvZ1N0YWNoZSgpIHtcbiAgICB0aGlzLmxvZyA9IGJpbmQodGhpcy5sb2csIHRoaXMpO1xuICAgIHdpbmRvdy5sb2cgPSBmdW5jdGlvbigpIHt9O1xuICAgIHJldHVybjtcbiAgICB0aGlzLmxvZ3MgPSB0aGlzLmdldExvZ1N0YWNoZSgpO1xuICAgIHdpbmRvdy5sb2cgPSB0aGlzLmxvZztcbiAgICB3aW5kb3cubG9nc3RhY2hlID0gdGhpcztcbiAgfVxuXG4gIExvZ1N0YWNoZS5wcm90b3R5cGUubG9nID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3M7XG4gICAgYXJncyA9IDEgPD0gYXJndW1lbnRzLmxlbmd0aCA/IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSA6IFtdO1xuICAgIGlmIChhcmdzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdGhpcy5sb2dzWysrdGhpcy5sb2dzLnRvdGFsXSA9IGFyZ3NbMF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubG9nc1srK3RoaXMubG9ncy50b3RhbF0gPSBhcmdzO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zYXZlKCk7XG4gIH07XG5cbiAgTG9nU3RhY2hlLnByb3RvdHlwZS5jbGVhciA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcImxvZ3N0YWNoZVwiKTtcbiAgfTtcblxuICBMb2dTdGFjaGUucHJvdG90eXBlLnRvQ29uc29sZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBjb25zb2xlLmxvZyh0aGlzLmxvZ3MpO1xuICB9O1xuXG4gIExvZ1N0YWNoZS5wcm90b3R5cGUuc2F2ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImxvZ3N0YWNoZVwiLCBKU09OLnN0cmluZ2lmeSh0aGlzLmxvZ3MpKTtcbiAgfTtcblxuICBMb2dTdGFjaGUucHJvdG90eXBlLmRvd25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGJsb2IsIGRvd25sb2FkTGluaywgZmlsZU5hbWU7XG4gICAgYmxvYiA9IG5ldyBCbG9iKFtsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvZ3N0YWNoZVwiKV0sIHtcbiAgICAgIHR5cGU6ICd0ZXh0L3BsYWluJ1xuICAgIH0pO1xuICAgIGZpbGVOYW1lID0gJ2xvZ3MuanNvbic7XG4gICAgaWYgKGFyaXN0b3RsZS5pc0lFKSB7XG4gICAgICByZXR1cm4gd2luZG93Lm5hdmlnYXRvci5tc1NhdmVCbG9iKGJsb2IsIGZpbGVOYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG93bmxvYWRMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICBkb3dubG9hZExpbmsuZG93bmxvYWQgPSBmaWxlTmFtZTtcbiAgICAgIGRvd25sb2FkTGluay5pbm5lckhUTUwgPSBcIkRvd25sb2FkIEZpbGVcIjtcbiAgICAgIGRvd25sb2FkTGluay5ocmVmID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICByZXR1cm4gZG93bmxvYWRMaW5rLmNsaWNrKCk7XG4gICAgfVxuICB9O1xuXG4gIExvZ1N0YWNoZS5wcm90b3R5cGUuZG93bmxvYWRPTEQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZW5jb2RlZFVyaSwgc3RyO1xuICAgIHN0ciA9IFwiZGF0YTp0ZXh0L2NzdjtjaGFyc2V0PXV0Zi04LFwiO1xuICAgIHN0ciArPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvZ3N0YWNoZVwiKTtcbiAgICBlbmNvZGVkVXJpID0gZW5jb2RlVVJJKHN0cik7XG4gICAgcmV0dXJuIHdpbmRvdy5vcGVuKGVuY29kZWRVcmkpO1xuICB9O1xuXG4gIExvZ1N0YWNoZS5wcm90b3R5cGUuZ2V0TG9nU3RhY2hlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0b3JlZFN0YWNoZTtcbiAgICBzdG9yZWRTdGFjaGUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibG9nc3RhY2hlXCIpKTtcbiAgICBpZiAoc3RvcmVkU3RhY2hlID09IG51bGwpIHtcbiAgICAgIHN0b3JlZFN0YWNoZSA9IHtcbiAgICAgICAgdG90YWw6IC0xXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gc3RvcmVkU3RhY2hlO1xuICB9O1xuXG4gIHJldHVybiBMb2dTdGFjaGU7XG5cbn0pKCk7XG4iLCJ2YXIgUGFyc2VyLFxuICBiaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBQYXJzZXIgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIFBhcnNlcigpIHtcbiAgICB0aGlzLmdldEFzc2V0UGF0aCA9IGJpbmQodGhpcy5nZXRBc3NldFBhdGgsIHRoaXMpO1xuICAgIHRoaXMucGFyc2VPYmplY3QgPSBiaW5kKHRoaXMucGFyc2VPYmplY3QsIHRoaXMpO1xuICAgIHRoaXMuaXNWYXJpYWJsZSA9IGJpbmQodGhpcy5pc1ZhcmlhYmxlLCB0aGlzKTtcbiAgICB0aGlzLnBhcnNlU3RyaW5nID0gYmluZCh0aGlzLnBhcnNlU3RyaW5nLCB0aGlzKTtcbiAgICB0aGlzLnBhcnNlQW55ID0gYmluZCh0aGlzLnBhcnNlQW55LCB0aGlzKTtcbiAgICB3aW5kb3cucGFyc2UgPSB0aGlzLnBhcnNlQW55O1xuICAgIHdpbmRvdy5wT2JqID0gdGhpcy5wYXJzZU9iamVjdDtcbiAgICBhcmlzdG90bGUuZ2V0QXNzZXRQYXRoID0gdGhpcy5nZXRBc3NldFBhdGg7XG4gIH1cblxuICBQYXJzZXIucHJvdG90eXBlLnBhcnNlQW55ID0gZnVuY3Rpb24oaXRlbSkge1xuICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgcmV0dXJuIHRoaXMucGFyc2VTdHJpbmcoaXRlbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnBhcnNlT2JqZWN0KGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICBQYXJzZXIucHJvdG90eXBlLnBhcnNlU3RyaW5nID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgaWYgKHRoaXMuaXNWYXJpYWJsZShzdHIpKSB7XG4gICAgICByZXR1cm4gYXJpc3RvdGxlLmdsb2JhbHMuZ2V0KHN0ci5zdWJzdHIoMSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgfTtcblxuICBQYXJzZXIucHJvdG90eXBlLmlzVmFyaWFibGUgPSBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gc3RyLmNoYXJBdCgwKSA9PT0gXCIkXCI7XG4gIH07XG5cbiAgUGFyc2VyLnByb3RvdHlwZS5wYXJzZU9iamVjdCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciBpdGVtLCBrZXksIHJlc3VsdHM7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoa2V5IGluIG9iaikge1xuICAgICAgaXRlbSA9IG9ialtrZXldO1xuICAgICAgaWYgKHR5cGVvZiBpdGVtID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIG9ialtrZXldID0gdGhpcy5wYXJzZVN0cmluZyhpdGVtKTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICByZXN1bHRzLnB1c2godGhpcy5wYXJzZU9iamVjdChpdGVtKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRzLnB1c2godm9pZCAwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgUGFyc2VyLnByb3RvdHlwZS5nZXRBc3NldFBhdGggPSBmdW5jdGlvbihhc3NldCkge1xuICAgIHZhciBjb250ZW50RGlyLCBwYXRoSWQ7XG4gICAgaWYgKC9tYXAoLispP1xcLmpzb24vLnRlc3QoYXNzZXQpKSB7XG4gICAgICBjb250ZW50RGlyID0gXCJcIjtcbiAgICB9IGVsc2UgaWYgKC8ubXAzfC5tNGEvLnRlc3QoYXNzZXQpKSB7XG4gICAgICBjb250ZW50RGlyID0gXCJzb3VuZHMvXCI7XG4gICAgfSBlbHNlIGlmICgvLmpzb24vLnRlc3QoYXNzZXQpKSB7XG4gICAgICBjb250ZW50RGlyID0gXCJhbmltYXRpb25zL1wiO1xuICAgIH0gZWxzZSBpZiAoLy5zdmd8LmpwZ3wuanBlZ3wucG5nfC5tcDQvLnRlc3QoYXNzZXQpKSB7XG4gICAgICBjb250ZW50RGlyID0gXCJhc3NldHMvXCI7XG4gICAgfVxuICAgIGlmIChhc3NldC5jaGFyQXQoMCkgPT09IFwiflwiKSB7XG4gICAgICBwYXRoSWQgPSBhc3NldC5zdWJzdHIoMSwgMSk7XG4gICAgICBhc3NldCA9IGFzc2V0LnN1YnN0cigzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcGF0aElkID0gYXJpc3RvdGxlLmVwaXNvZGVOdW07XG4gICAgfVxuICAgIGlmIChwYXRoSWQgPT09IFwiZ1wiKSB7XG4gICAgICByZXR1cm4gYXJpc3RvdGxlLmVwaXNvZGVzRGlyICsgXCIvZ2xvYmFsL1wiICsgY29udGVudERpciArIGFzc2V0O1xuICAgIH0gZWxzZSBpZiAocGF0aElkID09PSBcImxcIikge1xuICAgICAgcmV0dXJuIGFyaXN0b3RsZS5sb2NhbERpciArIFwiL1wiICsgYXNzZXQ7XG4gICAgfSBlbHNlIGlmIChOdW1iZXIocGF0aElkKSAhPT0gTmFOKSB7XG4gICAgICByZXR1cm4gYXJpc3RvdGxlLmVwaXNvZGVzRGlyICsgXCIvZXBpc29kZVwiICsgcGF0aElkICsgXCIvXCIgKyBjb250ZW50RGlyICsgYXNzZXQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBhcmlzdG90bGVbXCJ0aHJvd1wiXShcImNvdWxkbid0IHVuZGVyc3RhbmQgdGhlIHBhdGg6IFwiICsgYXNzZXQsIHRydWUpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gUGFyc2VyO1xuXG59KSgpO1xuIiwidmFyIFBhdXNhYmxlRGVsYXlzLCBUaW1lcixcbiAgYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH07XG5cbm1vZHVsZS5leHBvcnRzID0gUGF1c2FibGVEZWxheXMgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIFBhdXNhYmxlRGVsYXlzKCkge1xuICAgIHRoaXMuY3JlYXRlVGltZW91dCA9IGJpbmQodGhpcy5jcmVhdGVUaW1lb3V0LCB0aGlzKTtcbiAgICB0aGlzLmNvdW50ID0gMDtcbiAgICB0aGlzLnRpbWVycyA9IHt9O1xuICAgIGFyaXN0b3RsZS50aW1lb3V0ID0gdGhpcy5jcmVhdGVUaW1lb3V0O1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ3RpbWVyLmRlc3Ryb3knLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBkZWxldGUgX3RoaXMudGltZXJzW2RhdGFdO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgUHViU3ViLnN1YnNjcmliZSgndGltZXJzLnBhdXNlJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMucGF1c2VUaW1lcnMoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ3RpbWVycy5yZXN1bWUnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5yZXN1bWVUaW1lcnMoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9XG5cbiAgUGF1c2FibGVEZWxheXMucHJvdG90eXBlLnBhdXNlVGltZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGtleSwgcmVmLCByZXN1bHRzLCB0aW1lcjtcbiAgICByZWYgPSB0aGlzLnRpbWVycztcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChrZXkgaW4gcmVmKSB7XG4gICAgICB0aW1lciA9IHJlZltrZXldO1xuICAgICAgcmVzdWx0cy5wdXNoKHRpbWVyLnBhdXNlKCkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBQYXVzYWJsZURlbGF5cy5wcm90b3R5cGUucmVzdW1lVGltZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGtleSwgcmVmLCByZXN1bHRzLCB0aW1lcjtcbiAgICByZWYgPSB0aGlzLnRpbWVycztcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChrZXkgaW4gcmVmKSB7XG4gICAgICB0aW1lciA9IHJlZltrZXldO1xuICAgICAgcmVzdWx0cy5wdXNoKHRpbWVyLnN0YXJ0KCkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBQYXVzYWJsZURlbGF5cy5wcm90b3R5cGUuY3JlYXRlVGltZW91dCA9IGZ1bmN0aW9uKGNiLCBkZWxheSkge1xuICAgIHZhciBpZDtcbiAgICBpZCA9IFwidGltZVwiICsgKHRoaXMuY291bnQrKyk7XG4gICAgdGhpcy50aW1lcnNbaWRdID0gbmV3IFRpbWVyKGNiLCBkZWxheSwgaWQpO1xuICAgIHJldHVybiB0aGlzLnRpbWVyc1tpZF0uc3RhcnQoKTtcbiAgfTtcblxuICByZXR1cm4gUGF1c2FibGVEZWxheXM7XG5cbn0pKCk7XG5cblRpbWVyID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBUaW1lcihjYjEsIGRlbGF5LCBpZDEpIHtcbiAgICB0aGlzLmNiID0gY2IxO1xuICAgIHRoaXMuaWQgPSBpZDE7XG4gICAgdGhpcy5yZW1haW5pbmcgPSBkZWxheTtcbiAgfVxuXG4gIFRpbWVyLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucnVubmluZyA9IHRydWU7XG4gICAgdGhpcy5zdGFydGVkID0gbmV3IERhdGU7XG4gICAgcmV0dXJuIHRoaXMucmVmID0gc2V0VGltZW91dCgoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgX3RoaXMuY2IoKTtcbiAgICAgICAgcmV0dXJuIFB1YlN1Yi5wdWJsaXNoKCd0aW1lci5kZXN0cm95JywgX3RoaXMuaWQpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSwgdGhpcy5yZW1haW5pbmcpO1xuICB9O1xuXG4gIFRpbWVyLnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnJlZik7XG4gICAgcmV0dXJuIHRoaXMucmVtYWluaW5nIC09IG5ldyBEYXRlIC0gdGhpcy5zdGFydGVkO1xuICB9O1xuXG4gIFRpbWVyLnByb3RvdHlwZS5nZXRUaW1lTGVmdCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLnJ1bm5pbmcpIHtcbiAgICAgIHRoaXMucGF1c2UoKTtcbiAgICAgIHRoaXMuc3RhcnQoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucmVtYWluaW5nO1xuICB9O1xuXG4gIFRpbWVyLnByb3RvdHlwZS5nZXRTdGF0ZVJ1bm5pbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5ydW5uaW5nO1xuICB9O1xuXG4gIHJldHVybiBUaW1lcjtcblxufSkoKTtcbiIsInZhciBBdWRpb1RyYWNrLCBTb3VuZEZYLFxuICBiaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfTtcblxuQXVkaW9UcmFjayA9IHJlcXVpcmUoJ2VwaXNvZGUvYXVkaW8tdHJhY2snKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTb3VuZEZYID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBTb3VuZEZYKCkge1xuICAgIHRoaXMuZmFkZUluU291bmQgPSBiaW5kKHRoaXMuZmFkZUluU291bmQsIHRoaXMpO1xuICAgIHRoaXMuZmFkZU91dFNvdW5kID0gYmluZCh0aGlzLmZhZGVPdXRTb3VuZCwgdGhpcyk7XG4gICAgdGhpcy5jb3VudCA9IDA7XG4gICAgdGhpcy5zbG90cyA9IHt9O1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ3Zjci5wbGF5JywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMudmNyUGxheSgpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgUHViU3ViLnN1YnNjcmliZSgndmNyLnBhdXNlJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMudmNyUGF1c2UoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ3Zjci5yZXBsYXknLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy52Y3JSZXBsYXkoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ3NsaWRlcy5jaGFuZ2luZycsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmZsdXNoU2Z4U3RvcmUoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ3NmeC5hZGQnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5wYXJzZVNGWChkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ3BsYXlzb3VuZCcsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnBsYXlTb3VuZChkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ3NvdW5kLmZhZGVvdXQnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5jaGVja0ZvckRlbGF5KF90aGlzLmZhZGVPdXRTb3VuZCwgZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCdzb3VuZC5mYWRlaW4nLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5jaGVja0ZvckRlbGF5KF90aGlzLmZhZGVJblNvdW5kLCBkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9XG5cbiAgU291bmRGWC5wcm90b3R5cGUudmNyUGF1c2UgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIga2V5LCByZWYsIHJlc3VsdHMsIHNmeDtcbiAgICByZWYgPSB0aGlzLnNmeDtcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChrZXkgaW4gcmVmKSB7XG4gICAgICBzZnggPSByZWZba2V5XTtcbiAgICAgIHJlc3VsdHMucHVzaChzZngudHJhY2suc291bmQucGF1c2VkID0gdHJ1ZSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIFNvdW5kRlgucHJvdG90eXBlLnZjclBsYXkgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIga2V5LCByZWYsIHJlc3VsdHMsIHNmeDtcbiAgICByZWYgPSB0aGlzLnNmeDtcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChrZXkgaW4gcmVmKSB7XG4gICAgICBzZnggPSByZWZba2V5XTtcbiAgICAgIHJlc3VsdHMucHVzaChzZngudHJhY2suc291bmQucGF1c2VkID0gZmFsc2UpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBTb3VuZEZYLnByb3RvdHlwZS52Y3JSZXBsYXkgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXIsIGtleSwgcmVmLCBzZng7XG4gICAgYXIgPSBbXTtcbiAgICByZWYgPSB0aGlzLnNmeDtcbiAgICBmb3IgKGtleSBpbiByZWYpIHtcbiAgICAgIHNmeCA9IHJlZltrZXldO1xuICAgICAgYXIucHVzaChzZnguZGF0YSk7XG4gICAgfVxuICAgIHRoaXMuZmx1c2hTZnhTdG9yZSgpO1xuICAgIHJldHVybiB0aGlzLnBhcnNlU0ZYKGFyKTtcbiAgfTtcblxuICBTb3VuZEZYLnByb3RvdHlwZS5mbHVzaFNmeFN0b3JlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGtleSwgcmVmLCBzZng7XG4gICAgcmVmID0gdGhpcy5zZng7XG4gICAgZm9yIChrZXkgaW4gcmVmKSB7XG4gICAgICBzZnggPSByZWZba2V5XTtcbiAgICAgIGlmICghc2Z4LnRyYWNrLmlzRGVhZCkge1xuICAgICAgICBzZngudHJhY2suZGVzdHJveSgpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zZnggPSB7fTtcbiAgfTtcblxuICBTb3VuZEZYLnByb3RvdHlwZS5wYXJzZVNGWCA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2YXIgZngsIGksIGxlbiwgcmVzdWx0cztcbiAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgZm9yIChpID0gMCwgbGVuID0gZGF0YS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBmeCA9IGRhdGFbaV07XG4gICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLmFkZFNvdW5kRWZmZWN0KGZ4KSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkU291bmRFZmZlY3QoZGF0YSk7XG4gICAgfVxuICB9O1xuXG4gIFNvdW5kRlgucHJvdG90eXBlLmFkZFNvdW5kRWZmZWN0ID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIGlmIChkYXRhLmRlbGF5ICE9IG51bGwpIHtcbiAgICAgIHJldHVybiBhcmlzdG90bGUudGltZW91dCgoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5wbGF5U291bmQoZGF0YSwgdHJ1ZSk7XG4gICAgICAgIH07XG4gICAgICB9KSh0aGlzKSwgZGF0YS5kZWxheSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnBsYXlTb3VuZChkYXRhKTtcbiAgICB9XG4gIH07XG5cbiAgU291bmRGWC5wcm90b3R5cGUucGxheVNvdW5kID0gZnVuY3Rpb24oZGF0YSwgc2F2ZVRvU2Z4U3RvcmUpIHtcbiAgICB2YXIgaWQsIG1lLCB0cmFjaztcbiAgICBtZSA9IHRoaXM7XG4gICAgdHJhY2sgPSBuZXcgQXVkaW9UcmFjayhkYXRhLmNvbnRlbnQpO1xuICAgIGlmICghdHJhY2spIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdHJhY2sucGxheSh7XG4gICAgICB2b2x1bWU6IGRhdGEudm9sdW1lLFxuICAgICAgbG9vcDogZGF0YS5sb29wLFxuICAgICAgb2Zmc2V0OiBkYXRhLm9mZnNldFxuICAgIH0sIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKGRhdGEuc2xvdCAhPSBudWxsKSB7XG4gICAgICAgIGRlbGV0ZSBtZS5zbG90c1tkYXRhLnNsb3RdO1xuICAgICAgfVxuICAgICAgdHJhY2suZGVzdHJveSgpO1xuICAgICAgaWYgKGRhdGEuY29tcGxldGUgIT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gYXJpc3RvdGxlLmNvbW1hbmRlcltcImRvXCJdKGRhdGEuY29tcGxldGUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChzYXZlVG9TZnhTdG9yZSkge1xuICAgICAgaWQgPSBcInNcIiArICh0aGlzLmNvdW50KyspO1xuICAgICAgdGhpcy5zZnhbaWRdID0ge1xuICAgICAgICB0cmFjazogdHJhY2ssXG4gICAgICAgIGRhdGE6IGRhdGFcbiAgICAgIH07XG4gICAgICB0cmFjay5zZnhJZCA9IGlkO1xuICAgIH1cbiAgICBpZiAoZGF0YS5zbG90ICE9IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLmNsZWFyU2xvdElmTmVlZGVkKGRhdGEsIHRyYWNrKTtcbiAgICB9XG4gIH07XG5cbiAgU291bmRGWC5wcm90b3R5cGUuZmFkZU91dFNvdW5kID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIGlmIChkYXRhLnNsb3QgIT0gbnVsbCkge1xuICAgICAgaWYgKHRoaXMuc2xvdHNbZGF0YS5zbG90XSAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNsb3RzW2RhdGEuc2xvdF0uZmFkZU91dChkYXRhLmR1cmF0aW9uLCBkYXRhLmRlc3Ryb3kpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBTb3VuZEZYLnByb3RvdHlwZS5mYWRlSW5Tb3VuZCA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBpZiAoZGF0YS5zbG90ICE9IG51bGwpIHtcbiAgICAgIGlmICh0aGlzLnNsb3RzW2RhdGEuc2xvdF0gIT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zbG90c1tkYXRhLnNsb3RdLmZhZGVJbihkYXRhLmR1cmF0aW9uLCBkYXRhLmRlc3Ryb3kpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBTb3VuZEZYLnByb3RvdHlwZS5jaGVja0ZvckRlbGF5ID0gZnVuY3Rpb24oY2IsIGRhdGEpIHtcbiAgICBpZiAoZGF0YS5kZWxheSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGNiKGRhdGEpO1xuICAgICAgfSwgZGF0YS5kZWxheSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjYihkYXRhKTtcbiAgICB9XG4gIH07XG5cbiAgU291bmRGWC5wcm90b3R5cGUuY2xlYXJTbG90SWZOZWVkZWQgPSBmdW5jdGlvbihkYXRhLCB0cmFjaykge1xuICAgIGlmICh0aGlzLnNsb3RzW2RhdGEuc2xvdF0gIT0gbnVsbCkge1xuICAgICAgdGhpcy5zbG90c1tkYXRhLnNsb3RdLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc2xvdHNbZGF0YS5zbG90XSA9IHRyYWNrO1xuICB9O1xuXG4gIHJldHVybiBTb3VuZEZYO1xuXG59KSgpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHNjcmVlbi5oZWlnaHQgPD0gNjAwKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmJvZHkuc3R5bGUuem9vbSA9IFwiNjAlXCI7XG4gIH0gZWxzZSBpZiAoc2NyZWVuLmhlaWdodCA8PSA3MjApIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuYm9keS5zdHlsZS56b29tID0gXCI3NSVcIjtcbiAgfSBlbHNlIGlmIChzY3JlZW4uaGVpZ2h0IDw9IDc2OCkge1xuICAgIHJldHVybiBkb2N1bWVudC5ib2R5LnN0eWxlLnpvb20gPSBcIjgwJVwiO1xuICB9IGVsc2UgaWYgKHNjcmVlbi5oZWlnaHQgPD0gODAwKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmJvZHkuc3R5bGUuem9vbSA9IFwiODUlXCI7XG4gIH1cbn07XG4iLCJ2YXIgU3ZnQ2FydG9ncmFwaGVyLFxuICBiaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBTdmdDYXJ0b2dyYXBoZXIgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIFN2Z0NhcnRvZ3JhcGhlcigpIHtcbiAgICB0aGlzLmdldEdsb2JhbFBvcyA9IGJpbmQodGhpcy5nZXRHbG9iYWxQb3MsIHRoaXMpO1xuICAgIHRoaXMuZ2V0TG9jYWxQb3MgPSBiaW5kKHRoaXMuZ2V0TG9jYWxQb3MsIHRoaXMpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ3NjYWxlLnVwZGF0ZScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnNjYWxlID0gZGF0YTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ3RyYW5zZm9ybS51cGRhdGUnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy50cmFuc2Zvcm1PcmlnaW4gPSBkYXRhO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgYXJpc3RvdGxlLmNhcnRvZ3JhcGhlciA9IHRoaXM7XG4gICAgYXJpc3RvdGxlLmdldExvY2FsUG9zID0gdGhpcy5nZXRMb2NhbFBvcztcbiAgICBhcmlzdG90bGUuZ2V0R2xvYmFsUG9zID0gdGhpcy5nZXRHbG9iYWxQb3M7XG4gIH1cblxuICBTdmdDYXJ0b2dyYXBoZXIucHJvdG90eXBlLmdldExvY2FsUG9zID0gZnVuY3Rpb24oaXRlbUlkKSB7XG4gICAgdmFyIGJCb3g7XG4gICAgYkJveCA9ICQoXCIjXCIgKyBpdGVtSWQpWzBdLmdldEJCb3goKTtcbiAgICByZXR1cm4ge1xuICAgICAgeDogYkJveC54LFxuICAgICAgeTogYkJveC55LFxuICAgICAgdzogYkJveC53aWR0aCxcbiAgICAgIGg6IGJCb3guaGVpZ2h0XG4gICAgfTtcbiAgfTtcblxuICBTdmdDYXJ0b2dyYXBoZXIucHJvdG90eXBlLmdldEdsb2JhbFBvcyA9IGZ1bmN0aW9uKGl0ZW1JZCkge1xuICAgIHZhciBiQm94LCB4LCB4dHJhWCwgeHRyYVksIHk7XG4gICAgYkJveCA9ICQoXCIjXCIgKyBpdGVtSWQpWzBdLmdldEJCb3goKTtcbiAgICB4dHJhWCA9IHRoaXMudHJhbnNmb3JtT3JpZ2luLnggKiAodGhpcy5zY2FsZSAtIDEpIC0gdGhpcy50cmFuc2Zvcm1PcmlnaW4ueDtcbiAgICB4ID0gKGJCb3gueCAqIHRoaXMuc2NhbGUpIC0gKHRoaXMudHJhbnNmb3JtT3JpZ2luLnggKyB4dHJhWCk7XG4gICAgeHRyYVkgPSB0aGlzLnRyYW5zZm9ybU9yaWdpbi55ICogKHRoaXMuc2NhbGUgLSAxKSAtIHRoaXMudHJhbnNmb3JtT3JpZ2luLnk7XG4gICAgeSA9IChiQm94LnkgKiB0aGlzLnNjYWxlKSAtICh0aGlzLnRyYW5zZm9ybU9yaWdpbi55ICsgeHRyYVkpO1xuICAgIHJldHVybiB7XG4gICAgICB4OiB4LFxuICAgICAgeTogeSxcbiAgICAgIHc6IGJCb3gud2lkdGgsXG4gICAgICBoOiBiQm94LmhlaWdodFxuICAgIH07XG4gIH07XG5cbiAgcmV0dXJuIFN2Z0NhcnRvZ3JhcGhlcjtcblxufSkoKTtcbiIsInZhciBEeW5hbWljQXNzZXRzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IER5bmFtaWNBc3NldHMgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIER5bmFtaWNBc3NldHMoJGVsMSkge1xuICAgIHRoaXMuJGVsID0gJGVsMTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKFwiZ2hvc3R1eC5hZGRcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuY3JlYXRlR2hvc3QoZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKFwiZ2hvc3R1eC5yZW1vdmVcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuZGVzdHJveUdob3N0KGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgUHViU3ViLnN1YnNjcmliZSgnbGFiZWwuYWRkJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuYWRkTGFiZWwoZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCdsYWJlbC5yZW1vdmUnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5yZW1vdmVMYWJlbChkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ2xhYmVsLmNsZWFyJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMucmVtb3ZlTGFiZWwoZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCdsYWJlbC5oaWRlJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuaGlkZUxhYmVsKGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgUHViU3ViLnN1YnNjcmliZSgnbGFiZWwuc2hvdycsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnNob3dMYWJlbChkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9XG5cbiAgRHluYW1pY0Fzc2V0cy5wcm90b3R5cGUuY3JlYXRlR2hvc3QgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyICRnaG9zdEl0ZW0sIGJveDtcbiAgICBib3ggPSBhcmlzdG90bGUuZ2V0TG9jYWxQb3MoZGF0YS5pZCk7XG4gICAgaWYgKGJveC53ID4gNTAwIHx8IGJveC5oID4gNDAwKSB7XG4gICAgICBhcmlzdG90bGUubG9nKFwiV2UndmUgY3JlYXRlZCBhIGhpdCBhcmVhIGZvciBgXCIgKyBkYXRhLmlkICsgXCJgIHRoYXQgaXMgXCIgKyBib3gudyArIFwicHggYnkgXCIgKyBib3guaCArIFwicHgsIEknbSBndWVzc2luZyB0aGF0J3Mgbm90IHJpZ2h0Li5cIik7XG4gICAgfVxuICAgICRnaG9zdEl0ZW0gPSAkKGphZGVUZW1wbGF0ZVsnc2xpZGUtdXgvY29tcG9uZW50cy9naG9zdC1pdGVtJ10oe1xuICAgICAgaWQ6IGRhdGEuaWQgKyBcIi1naG9zdFwiLFxuICAgICAgd2lkdGg6IGJveC53LFxuICAgICAgaGVpZ2h0OiBib3guaCxcbiAgICAgIGxlZnQ6IGJveC54LFxuICAgICAgdG9wOiBib3gueVxuICAgIH0pKTtcbiAgICB0aGlzLiRlbC5hcHBlbmQoJGdob3N0SXRlbSk7XG4gICAgcmV0dXJuIHRoaXMuYWRkRXZlbnRzKCRnaG9zdEl0ZW0sIGRhdGEuZXZlbnRzLCBkYXRhLmlkKTtcbiAgfTtcblxuICBEeW5hbWljQXNzZXRzLnByb3RvdHlwZS5hZGRFdmVudHMgPSBmdW5jdGlvbigkZWwsIGV2ZW50cywgaWQpIHtcbiAgICB2YXIgYWN0aW9uLCBldmVudCwgcmVzdWx0cztcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChldmVudCBpbiBldmVudHMpIHtcbiAgICAgIGFjdGlvbiA9IGV2ZW50c1tldmVudF07XG4gICAgICBpZiAoYWN0aW9uLmNtZCAhPSBudWxsKSB7XG4gICAgICAgIHJlc3VsdHMucHVzaCgkZWwub24oZXZlbnQgKyBcIi5cIiArIGlkLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gYXJpc3RvdGxlLmNvbW1hbmRlcltcImRvXCJdKGFjdGlvbik7XG4gICAgICAgIH0pKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGFjdGlvbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJlc3VsdHMucHVzaCgkZWwub24oZXZlbnQgKyBcIi5cIiArIGlkLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gYWN0aW9uKGlkKTtcbiAgICAgICAgfSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHZvaWQgMCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIER5bmFtaWNBc3NldHMucHJvdG90eXBlLmRlc3Ryb3lHaG9zdCA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2YXIgJGVsLCBhY3Rpb24sIGV2ZW50LCByZWY7XG4gICAgJGVsID0gJChcIiNcIiArIGRhdGEuaWQgKyBcIi1naG9zdFwiKTtcbiAgICByZWYgPSBkYXRhLmV2ZW50cztcbiAgICBmb3IgKGV2ZW50IGluIHJlZikge1xuICAgICAgYWN0aW9uID0gcmVmW2V2ZW50XTtcbiAgICAgICRlbC5vZmYoZXZlbnQgKyBcIi5cIiArIGRhdGEuaWQpO1xuICAgIH1cbiAgICByZXR1cm4gJGVsLnJlbW92ZSgpO1xuICB9O1xuXG4gIER5bmFtaWNBc3NldHMucHJvdG90eXBlLmFkZExhYmVsID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciAkbGFiZWwsIHBvcztcbiAgICBwb3MgPSBhcmlzdG90bGUubW92aWUuZ2V0TG9jYWxQb3MoZGF0YS5pZCk7XG4gICAgJGxhYmVsID0gJChqYWRlVGVtcGxhdGVbJ3NsaWRlLXV4L2xhYmVsJ10oe1xuICAgICAgdGl0bGU6IGRhdGEudGV4dCxcbiAgICAgIGlkOiBkYXRhLmlkICsgXCItbGFiZWxcIlxuICAgIH0pKTtcbiAgICB0aGlzLiRlbC5hcHBlbmQoJGxhYmVsKTtcbiAgICB0aGlzLnBvc2l0aW9uTGFiZWwoZGF0YSwgJGxhYmVsLCBwb3MpO1xuICAgICRsYWJlbC5jc3Moe1xuICAgICAgdG9wOiBwb3MueSxcbiAgICAgIGxlZnQ6IHBvcy54XG4gICAgfSk7XG4gICAgdGhpcy5hZGRFdmVudHMoJGxhYmVsLCBkYXRhLmV2ZW50cywgZGF0YS5pZCk7XG4gICAgaWYgKGRhdGEuZXZlbnRzICE9IG51bGwpIHtcbiAgICAgIHJldHVybiAkbGFiZWwuYWRkQ2xhc3MoXCJjbGlja2FibGVcIik7XG4gICAgfVxuICB9O1xuXG4gIER5bmFtaWNBc3NldHMucHJvdG90eXBlLnJlbW92ZUxhYmVsID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciBpLCBsYWJlbElkLCBsZW4sIHJlZiwgcmVzdWx0cztcbiAgICBpZiAoZGF0YS5pZCA9PT0gXCJhbGxcIikge1xuICAgICAgcmV0dXJuICQoXCIubGFiZWwtd3JhcHBlclwiLCB0aGlzLiRlbCkucmVtb3ZlKCk7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGRhdGEuaWQpKSB7XG4gICAgICByZWYgPSBkYXRhLmlkO1xuICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGxhYmVsSWQgPSByZWZbaV07XG4gICAgICAgIHJlc3VsdHMucHVzaCgkKFwiI1wiICsgbGFiZWxJZCArIFwiLWxhYmVsXCIsIHRoaXMuJGVsKS5yZW1vdmUoKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICQoXCIjXCIgKyBkYXRhLmlkICsgXCItbGFiZWxcIiwgdGhpcy4kZWwpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICBEeW5hbWljQXNzZXRzLnByb3RvdHlwZS5oaWRlTGFiZWwgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyIGksIGxhYmVsSWQsIGxlbiwgcmVmLCByZXN1bHRzO1xuICAgIGlmIChkYXRhLmlkID09PSBcImFsbFwiKSB7XG4gICAgICByZXR1cm4gJChcIi5sYWJlbC13cmFwcGVyXCIsIHRoaXMuJGVsKS52ZWxvY2l0eSh7XG4gICAgICAgIG9wYWNpdHk6IDBcbiAgICAgIH0sIHtcbiAgICAgICAgZHVyYXRpb246IDQwMFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGRhdGEuaWQpKSB7XG4gICAgICByZWYgPSBkYXRhLmlkO1xuICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGxhYmVsSWQgPSByZWZbaV07XG4gICAgICAgIHJlc3VsdHMucHVzaCgkKFwiI1wiICsgbGFiZWxJZCArIFwiLWxhYmVsXCIsIHRoaXMuJGVsKS52ZWxvY2l0eSh7XG4gICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICB9LCB7XG4gICAgICAgICAgZHVyYXRpb246IDQwMFxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICQoXCIjXCIgKyBkYXRhLmlkICsgXCItbGFiZWxcIiwgdGhpcy4kZWwpLnZlbG9jaXR5KHtcbiAgICAgICAgb3BhY2l0eTogMFxuICAgICAgfSwge1xuICAgICAgICBkdXJhdGlvbjogNDAwXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgRHluYW1pY0Fzc2V0cy5wcm90b3R5cGUuc2hvd0xhYmVsID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciBpLCBsYWJlbElkLCBsZW4sIHJlZiwgcmVzdWx0cztcbiAgICBpZiAoZGF0YS5pZCA9PT0gXCJhbGxcIikge1xuICAgICAgcmV0dXJuICQoXCIubGFiZWwtd3JhcHBlclwiLCB0aGlzLiRlbCkudmVsb2NpdHkoe1xuICAgICAgICBvcGFjaXR5OiAxXG4gICAgICB9LCB7XG4gICAgICAgIGR1cmF0aW9uOiA0MDBcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShkYXRhLmlkKSkge1xuICAgICAgcmVmID0gZGF0YS5pZDtcbiAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBsYWJlbElkID0gcmVmW2ldO1xuICAgICAgICByZXN1bHRzLnB1c2goJChcIiNcIiArIGxhYmVsSWQgKyBcIi1sYWJlbFwiLCB0aGlzLiRlbCkudmVsb2NpdHkoe1xuICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgfSwge1xuICAgICAgICAgIGR1cmF0aW9uOiA0MDBcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAkKFwiI1wiICsgZGF0YS5pZCArIFwiLWxhYmVsXCIsIHRoaXMuJGVsKS52ZWxvY2l0eSh7XG4gICAgICAgIG9wYWNpdHk6IDFcbiAgICAgIH0sIHtcbiAgICAgICAgZHVyYXRpb246IDQwMFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIER5bmFtaWNBc3NldHMucHJvdG90eXBlLmNsZWFyTGFiZWwgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyIGksIGxhYmVsSWQsIGxlbiwgcmVmLCByZXN1bHRzO1xuICAgIGlmIChkYXRhLmlkID09PSBcImFsbFwiKSB7XG4gICAgICByZXR1cm4gJChcIi5sYWJlbC13cmFwcGVyXCIsIHRoaXMuJGVsKS52ZWxvY2l0eSh7XG4gICAgICAgIG9wYWNpdHk6IDFcbiAgICAgIH0sIHtcbiAgICAgICAgZHVyYXRpb246IDQwMFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGRhdGEuaWQpKSB7XG4gICAgICByZWYgPSBkYXRhLmlkO1xuICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGxhYmVsSWQgPSByZWZbaV07XG4gICAgICAgIHJlc3VsdHMucHVzaCgkKFwiI1wiICsgbGFiZWxJZCArIFwiLWxhYmVsXCIsIHRoaXMuJGVsKS52ZWxvY2l0eSh7XG4gICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICB9LCB7XG4gICAgICAgICAgZHVyYXRpb246IDQwMFxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICQoXCIjXCIgKyBkYXRhLmlkICsgXCItbGFiZWxcIiwgdGhpcy4kZWwpLnZlbG9jaXR5KHtcbiAgICAgICAgb3BhY2l0eTogMVxuICAgICAgfSwge1xuICAgICAgICBkdXJhdGlvbjogNDAwXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgRHluYW1pY0Fzc2V0cy5wcm90b3R5cGUucG9zaXRpb25MYWJlbCA9IGZ1bmN0aW9uKGRhdGEsICRsYWJlbCwgcG9zKSB7XG4gICAgdmFyICRpbm5lckxhYmVsLCBhcnJvd0xvYywgZmFjZTtcbiAgICBmYWNlID0gZGF0YS5mYWNlICE9IG51bGwgPyBkYXRhLmZhY2UgOiBcInRvcFwiO1xuICAgIGFycm93TG9jID0gZGF0YS5hcnJvdyAhPSBudWxsID8gZGF0YS5hcnJvdyA6IFwibGVmdFwiO1xuICAgICRpbm5lckxhYmVsID0gJChcIi5sYWJlbFwiLCAkbGFiZWwpO1xuICAgIHN3aXRjaCAoZmFjZSkge1xuICAgICAgY2FzZSBcInRvcFwiOlxuICAgICAgICBwb3MueCArPSBwb3MudyAvIDI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImxlZnRcIjpcbiAgICAgICAgcG9zLnkgKz0gcG9zLmggLyAyO1xuICAgICAgICAkaW5uZXJMYWJlbC5hZGRDbGFzcyhcImFycm93LXBvaW50LXJpZ2h0XCIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICBwb3MueSArPSBwb3MuaCAvIDI7XG4gICAgICAgIHBvcy54ICs9IHBvcy53O1xuICAgICAgICAkaW5uZXJMYWJlbC5hZGRDbGFzcyhcImFycm93LXBvaW50LWxlZnRcIik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImJvdHRvbVwiOlxuICAgICAgICBwb3MueCArPSBwb3MudyAvIDI7XG4gICAgICAgIHBvcy55ICs9IHBvcy5oO1xuICAgICAgICAkaW5uZXJMYWJlbC5hZGRDbGFzcyhcImFycm93LXRvcFwiKTtcbiAgICB9XG4gICAgc3dpdGNoIChhcnJvd0xvYykge1xuICAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICAgIHJldHVybiAkaW5uZXJMYWJlbC5hZGRDbGFzcyhcImFycm93LXJpZ2h0XCIpO1xuICAgICAgY2FzZSBcIm1pZGRsZVwiOlxuICAgICAgICAkaW5uZXJMYWJlbC5hZGRDbGFzcyhcImFycm93LW1pZGRsZVwiKTtcbiAgICAgICAgd2luZG93LnRoaW5nID0gJGlubmVyTGFiZWw7XG4gICAgICAgIHJldHVybiAkaW5uZXJMYWJlbC5jc3Moe1xuICAgICAgICAgIGxlZnQ6IC0kaW5uZXJMYWJlbC53aWR0aCgpIC8gMlxuICAgICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIER5bmFtaWNBc3NldHM7XG5cbn0pKCk7XG4iLCJ2YXIgSGlnaGxpZ2h0ZXI7XG5cbm1vZHVsZS5leHBvcnRzID0gSGlnaGxpZ2h0ZXIgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIEhpZ2hsaWdodGVyKCRlbCwgZHluYW1pY0Fzc2V0cykge1xuICAgIHRoaXMuJGVsID0gJGVsO1xuICAgIHRoaXMuZHluYW1pY0Fzc2V0cyA9IGR5bmFtaWNBc3NldHM7XG4gICAgUHViU3ViLnN1YnNjcmliZSgnaGlnaGxpZ2h0JywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICB2YXIgaSwgaXRlbSwgbGVuLCByZWYsIHJlc3VsdHM7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEuaWQpKSB7XG4gICAgICAgICAgcmVmID0gZGF0YS5pZDtcbiAgICAgICAgICByZXN1bHRzID0gW107XG4gICAgICAgICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpdGVtID0gcmVmW2ldO1xuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKF90aGlzLmhpZ2hsaWdodEVsZW1lbnQoaXRlbSwgZGF0YS5sZXZlbCwgZGF0YS5sYWJlbCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMuaGlnaGxpZ2h0RWxlbWVudChkYXRhLmlkLCBkYXRhLmxldmVsLCBkYXRhLmxhYmVsKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgUHViU3ViLnN1YnNjcmliZSgndW5oaWdobGlnaHQnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHZhciBpLCBpdGVtLCBsZW4sIHJlc3VsdHM7XG4gICAgICAgIGlmIChtID09PSBcInVuaGlnaGxpZ2h0LmFsbFwiKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLnVuaGlnaGxpZ2h0QWxsKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgICAgIGZvciAoaSA9IDAsIGxlbiA9IGRhdGEubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgaXRlbSA9IGRhdGFbaV07XG4gICAgICAgICAgICAgIHJlc3VsdHMucHVzaChfdGhpcy51bkhpZ2hsaWdodEVsZW1lbnQoaXRlbSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy51bkhpZ2hsaWdodEVsZW1lbnQoZGF0YSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgfVxuXG4gIEhpZ2hsaWdodGVyLnByb3RvdHlwZS5oaWdobGlnaHRFbGVtZW50ID0gZnVuY3Rpb24oZWxlbWVudElkLCBjb2xvciwgbGFiZWwpIHtcbiAgICB2YXIgJGl0ZW0sIGZpbHRlcklkO1xuICAgICRpdGVtID0gJChcIiNcIiArIGVsZW1lbnRJZCwgdGhpcy4kZWwpO1xuICAgICRpdGVtLmF0dHIoXCJjbGFzc1wiLCBcImZpbHRlci1oaWdobGlnaHRlZFwiKTtcbiAgICBzd2l0Y2ggKGNvbG9yKSB7XG4gICAgICBjYXNlICdiY2EnOlxuICAgICAgICBmaWx0ZXJJZCA9IFwiaGlnaGxpZ2h0QkNBXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncGNhJzpcbiAgICAgICAgZmlsdGVySWQgPSBcImhpZ2hsaWdodFBDQVwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Jjc2knOlxuICAgICAgICBmaWx0ZXJJZCA9IFwiaGlnaGxpZ2h0QkNTSVwiO1xuICAgIH1cbiAgICAkaXRlbS5jc3Moe1xuICAgICAgZmlsdGVyOiBcInVybCgjXCIgKyBmaWx0ZXJJZCArIFwiKVwiXG4gICAgfSk7XG4gICAgcmV0dXJuICRpdGVtID0gbnVsbDtcbiAgfTtcblxuICBIaWdobGlnaHRlci5wcm90b3R5cGUudW5IaWdobGlnaHRFbGVtZW50ID0gZnVuY3Rpb24oZWxlbWVudElkKSB7XG4gICAgdmFyICRpdGVtO1xuICAgICRpdGVtID0gJChcIiNcIiArIGVsZW1lbnRJZCwgdGhpcy4kZWwpO1xuICAgICRpdGVtLmF0dHIoXCJjbGFzc1wiLCBcIlwiKTtcbiAgICBpZiAoJGl0ZW0ubGVuZ3RoID09PSAwKSB7XG4gICAgICBhcmlzdG90bGVbXCJ0aHJvd1wiXShcInRyaWVkIHRvIHVuaGlnaGxpZ2h0IGFuIGVsZW1lbnQgd2l0aCB0aGUgaWQgYFwiICsgZWxlbWVudElkICsgXCJgLCBidXQgZm91bmQgbm8gZWxlbWVudHMgd2l0aCB0aGF0IGlkLlwiLCB0cnVlKTtcbiAgICB9XG4gICAgJGl0ZW0uY3NzKHtcbiAgICAgIGZpbHRlcjogXCJhdXRvXCJcbiAgICB9KTtcbiAgICByZXR1cm4gJGl0ZW0gPSBudWxsO1xuICB9O1xuXG4gIEhpZ2hsaWdodGVyLnByb3RvdHlwZS51bmhpZ2hsaWdodEFsbCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciAkaXRlbXM7XG4gICAgJGl0ZW1zID0gJChcIi5maWx0ZXItaGlnaGxpZ2h0ZWRcIik7XG4gICAgJGl0ZW1zLmF0dHIoXCJjbGFzc1wiLCBcIlwiKTtcbiAgICAkaXRlbXMuY3NzKHtcbiAgICAgIGZpbHRlcjogXCJpbml0aWFsXCJcbiAgICB9KTtcbiAgICByZXR1cm4gJGl0ZW1zID0gbnVsbDtcbiAgfTtcblxuICByZXR1cm4gSGlnaGxpZ2h0ZXI7XG5cbn0pKCk7XG4iLCJ2YXIgTGF5ZXIsIFNWR0FuaW1hdGlvbixcbiAgYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH07XG5cblNWR0FuaW1hdGlvbiA9IHJlcXVpcmUoJ21vdmllL3N2Zy1hbmltYXRpb24nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBMYXllciA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gTGF5ZXIoJGVsLCBkZXB0aCkge1xuICAgIHRoaXMuZGVwdGggPSBkZXB0aDtcbiAgICB0aGlzLmNyZWF0ZUNvbnRlbnQgPSBiaW5kKHRoaXMuY3JlYXRlQ29udGVudCwgdGhpcyk7XG4gICAgdGhpcy51cGRhdGUgPSBiaW5kKHRoaXMudXBkYXRlLCB0aGlzKTtcbiAgICB0aGlzLmlzQ2FjaGVkID0gZmFsc2U7XG4gICAgdGhpcy4kbGF5ZXIgPSAkKGphZGVUZW1wbGF0ZVsnbW92aWUvbGF5ZXInXSh7XG4gICAgICBkZXB0aDogdGhpcy5kZXB0aFxuICAgIH0pKTtcbiAgICAkZWwuYXBwZW5kKHRoaXMuJGxheWVyKTtcbiAgfVxuXG4gIExheWVyLnByb3RvdHlwZS5yZXBvcnQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgY2FjaGVkT3JOb3QsIHN5bWJvbDtcbiAgICBjYWNoZWRPck5vdCA9IHRoaXMuaXNDYWNoZWQgPyBcImNhY2hlZFwiIDogXCJub3QgY2FjaGVkXCI7XG4gICAgc3ltYm9sID0gdGhpcy5pc0NhY2hlZCA/IFwi4oiaXCIgOiBcIi1cIjtcbiAgICByZXR1cm4gY29uc29sZS5sb2coc3ltYm9sICsgXCIgTGF5ZXIgXCIgKyB0aGlzLmRlcHRoICsgXCIgOiBcIiArIHRoaXMucHJpc3RpbmVMYXllckRhdGEuY29udGVudCArIFwiIGlzIFwiICsgY2FjaGVkT3JOb3QpO1xuICB9O1xuXG4gIExheWVyLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihwcmlzdGluZUxheWVyRGF0YSkge1xuICAgIHRoaXMucHJpc3RpbmVMYXllckRhdGEgPSBwcmlzdGluZUxheWVyRGF0YTtcbiAgICB0aGlzLmxheWVyRGF0YSA9IGpRdWVyeS5leHRlbmQodHJ1ZSwge30sIHRoaXMucHJpc3RpbmVMYXllckRhdGEpO1xuICAgIGlmICh0aGlzLmxheWVyRGF0YS53YWl0ICE9IG51bGwpIHtcbiAgICAgIGFyaXN0b3RsZS50aW1lb3V0KHRoaXMuY3JlYXRlQ29udGVudCwgdGhpcy5sYXllckRhdGEud2FpdCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmNyZWF0ZUNvbnRlbnQoKTtcbiAgfTtcblxuICBMYXllci5wcm90b3R5cGUuY3JlYXRlQ29udGVudCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICgodGhpcy5sYXllckRhdGEuY29udGVudCAhPSBudWxsKSB8fCAodGhpcy5sYXllckRhdGEuYmFja2dyb3VuZCAhPSBudWxsKSkge1xuICAgICAgdGhpcy51cGRhdGVDb250ZW50KHRoaXMubGF5ZXJEYXRhKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubGF5ZXJEYXRhLmZ4ICE9IG51bGwpIHtcbiAgICAgIHRoaXMudXBkYXRlRWZmZWN0cyh0aGlzLmxheWVyRGF0YS5meCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmxheWVyRGF0YS5hY3Rpb24gIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGFyaXN0b3RsZS5jb21tYW5kZXJbXCJkb1wiXSh0aGlzLmxheWVyRGF0YS5hY3Rpb24pO1xuICAgIH1cbiAgfTtcblxuICBMYXllci5wcm90b3R5cGUudXBkYXRlQ29udGVudCA9IGZ1bmN0aW9uKGxheWVyRGF0YSkge1xuICAgIGlmICh0aGlzLmN1cnJlbnRPbmlvbkxheWVyICE9IG51bGwpIHtcbiAgICAgIHRoaXMuZmFkZUFuZFJlbW92ZU9sZExheWVyKCk7XG4gICAgfVxuICAgIHRoaXMuYWRkVGhlQ29ycmVjdENvbnRlbnQobGF5ZXJEYXRhKTtcbiAgICByZXR1cm4gdGhpcy51cGRhdGVCYWNrZ3JvdW5kKGxheWVyRGF0YSk7XG4gIH07XG5cbiAgTGF5ZXIucHJvdG90eXBlLmFkZFRoZUNvcnJlY3RDb250ZW50ID0gZnVuY3Rpb24obGF5ZXJEYXRhKSB7XG4gICAgdmFyIGtpbmQ7XG4gICAgdGhpcy5pc0FuaW1hdGlvbiA9IGZhbHNlO1xuICAgIHRoaXMuaXNDYWNoZWQgPSBmYWxzZTtcbiAgICBwYXJzZShsYXllckRhdGEpO1xuICAgIGlmIChsYXllckRhdGEuaWVDYWNoZSAmJiAhYXJpc3RvdGxlLmRvbnRDYWNoZSAmJiBhcmlzdG90bGUuaXNJRSkge1xuICAgICAgbGF5ZXJEYXRhLmxvb3AgPSBmYWxzZTtcbiAgICAgIGxheWVyRGF0YS5jYWNoZSA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMuY3VycmVudE9uaW9uTGF5ZXIgPSB0aGlzLmFkZE9uaW9uTGF5ZXIoKTtcbiAgICBpZiAobGF5ZXJEYXRhLmNvbnRlbnQgPT0gbnVsbCkge1xuICAgICAga2luZCA9IFwibm9uZVwiO1xuICAgIH0gZWxzZSBpZiAobGF5ZXJEYXRhLmNvbnRlbnQgPT09IFwiY2xlYXJcIikge1xuICAgICAga2luZCA9IFwiY2xlYXJcIjtcbiAgICB9IGVsc2Uge1xuICAgICAga2luZCA9IGxheWVyRGF0YS5jb250ZW50LnNwbGl0KFwiLlwiKVsxXTtcbiAgICB9XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIFwianNvblwiOlxuICAgICAgICBpZiAodGhpcy5hbmltYXRpb24gIT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuZG9vbWVkQW5pbWF0aW9uID0gdGhpcy5hbmltYXRpb247XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkQW5pbWF0aW9uKHRoaXMuY3VycmVudE9uaW9uTGF5ZXIsIGxheWVyRGF0YSk7XG4gICAgICBjYXNlIFwic3ZnXCI6XG4gICAgICAgIHJldHVybiB0aGlzLmFkZFN2Zyh0aGlzLmN1cnJlbnRPbmlvbkxheWVyLCBsYXllckRhdGEpO1xuICAgICAgY2FzZSBcImdpZlwiOlxuICAgICAgY2FzZSBcImpwZ1wiOlxuICAgICAgY2FzZSBcImpwZWdcIjpcbiAgICAgIGNhc2UgXCJwbmdcIjpcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkSW1hZ2UodGhpcy5jdXJyZW50T25pb25MYXllciwgbGF5ZXJEYXRhLmNvbnRlbnQsIGxheWVyRGF0YS5yZXBlYXQsIGxheWVyRGF0YS5wb3NpdGlvbik7XG4gICAgICBjYXNlIFwiY2xlYXJcIjpcbiAgICAgICAgcmV0dXJuIHRoaXMuZW1wdHkoKTtcbiAgICAgIGNhc2UgXCJtcDRcIjpcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkVmlkZW8odGhpcy5jdXJyZW50T25pb25MYXllciwgbGF5ZXJEYXRhLmNvbnRlbnQpO1xuICAgICAgY2FzZSBcIm5vbmVcIjpcbiAgICAgICAgcmV0dXJuIFwiZG8gbm90aGluZ1wiO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGFyaXN0b3RsZVtcInRocm93XCJdKFwidHJpZWQgdG8gYWRkIHVucmVjb2duaXplZCBsYXllciB0eXBlICdcIiArIGtpbmQgKyBcIidcIiwgdHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIExheWVyLnByb3RvdHlwZS5hZGRBbmltYXRpb24gPSBmdW5jdGlvbigkaG9sZGVyLCBsYXllckRhdGEpIHtcbiAgICB0aGlzLmlzQW5pbWF0aW9uID0gdHJ1ZTtcbiAgICB0aGlzLmFuaW1hdGlvbiA9IG5ldyBTVkdBbmltYXRpb24oJGhvbGRlciwgYXJpc3RvdGxlLmdldEFzc2V0UGF0aChsYXllckRhdGEuY29udGVudCksIGxheWVyRGF0YSk7XG4gICAgaWYgKGxheWVyRGF0YS5jYWNoZSkge1xuICAgICAgcmV0dXJuIHRoaXMuYW5pbWF0aW9uLmFkZE9uQ29tcGxldGUoKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5jYWNoZSgpO1xuICAgICAgICAgIH0sIDEwKTtcbiAgICAgICAgfTtcbiAgICAgIH0pKHRoaXMpKTtcbiAgICB9XG4gIH07XG5cbiAgTGF5ZXIucHJvdG90eXBlLmNhY2hlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyICRzdmcsIGVycm9yLCBlcnJvcjEsIGltZywgc3ZnO1xuICAgIGlmICh0aGlzLmlzQ2FjaGVkIHx8ICF0aGlzLmlzQW5pbWF0aW9uIHx8IGFyaXN0b3RsZS5kb250Q2FjaGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5pc0NhY2hlZCA9IHRydWU7XG4gICAgJHN2ZyA9ICQoXCJzdmdcIiwgdGhpcy4kbGF5ZXIpO1xuICAgICRzdmcuYXR0cih7XG4gICAgICBzdHlsZTogXCJcIixcbiAgICAgIHhtbG5zOiBcIlwiXG4gICAgfSk7XG4gICAgJHN2Zy5yZW1vdmVBdHRyKFwieG1sbnNcIik7XG4gICAgc3ZnID0gJHN2Z1swXTtcbiAgICBpbWcgPSAkKCQucGFyc2VIVE1MKFwiPGltZyAvPlwiKSlbMF07XG4gICAgd2luZG93LnRyYWNlTGF5ZXIgPSB0aGlzO1xuICAgIHRoaXMuZG9vbWVkQW5pbWF0aW9uID0gdGhpcy5hbmltYXRpb247XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBzdmcudG9EYXRhVVJMKCdpbWFnZS9wbmcnLCB7XG4gICAgICAgIHJlbmRlcmVyOiAnY2FudmcnLFxuICAgICAgICBjYWxsYmFjazogKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGRhdGEpO1xuICAgICAgICAgICAgX3RoaXMuZmFkZUFuZFJlbW92ZU9sZExheWVyKCk7XG4gICAgICAgICAgICBfdGhpcy5jdXJyZW50T25pb25MYXllciA9IF90aGlzLmFkZE9uaW9uTGF5ZXIoKTtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5jdXJyZW50T25pb25MYXllci5hcHBlbmQoaW1nKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KSh0aGlzKVxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IxKSB7XG4gICAgICBlcnJvciA9IGVycm9yMTtcbiAgICAgIHJldHVybiBhcmlzdG90bGVbXCJ0aHJvd1wiXShlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIExheWVyLnByb3RvdHlwZS51bmNhY2hlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGtleSwgcmVmLCB0ZW1wT2JqLCB2YWw7XG4gICAgaWYgKCF0aGlzLmlzQ2FjaGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaXNDYWNoZWQgPSBmYWxzZTtcbiAgICB0aGlzLmZhZGVBbmRSZW1vdmVPbGRMYXllcigpO1xuICAgIHRoaXMuY3VycmVudE9uaW9uTGF5ZXIgPSB0aGlzLmFkZE9uaW9uTGF5ZXIoKTtcbiAgICB0ZW1wT2JqID0ge307XG4gICAgcmVmID0gdGhpcy5sYXllckRhdGE7XG4gICAgZm9yIChrZXkgaW4gcmVmKSB7XG4gICAgICB2YWwgPSByZWZba2V5XTtcbiAgICAgIHRlbXBPYmpba2V5XSA9IHZhbDtcbiAgICB9XG4gICAgdGVtcE9iai5pZUNhY2hlID0gZmFsc2U7XG4gICAgdGVtcE9iai5jYWNoZSA9IGZhbHNlO1xuICAgIHRlbXBPYmouanVtcFRvRW5kID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcy5hZGRUaGVDb3JyZWN0Q29udGVudCh0ZW1wT2JqKTtcbiAgfTtcblxuICBMYXllci5wcm90b3R5cGUuYWRkT25pb25MYXllciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciAkb25pb25MYXllcjtcbiAgICAkb25pb25MYXllciA9ICQoamFkZVRlbXBsYXRlWydtb3ZpZS9vbmlvbi1sYXllciddKHt9KSk7XG4gICAgdGhpcy4kbGF5ZXIucHJlcGVuZCgkb25pb25MYXllcik7XG4gICAgcmV0dXJuICRvbmlvbkxheWVyO1xuICB9O1xuXG4gIExheWVyLnByb3RvdHlwZS5mYWRlQW5kUmVtb3ZlT2xkTGF5ZXIgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgb2xkT25pb25MYXllcjtcbiAgICBvbGRPbmlvbkxheWVyID0gdGhpcy5jdXJyZW50T25pb25MYXllcjtcbiAgICByZXR1cm4gYXJpc3RvdGxlLnRpbWVvdXQoKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIG9sZE9uaW9uTGF5ZXIudmVsb2NpdHkoJ3N0b3AnLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuIG9sZE9uaW9uTGF5ZXIudmVsb2NpdHkoe1xuICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgfSwge1xuICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXG4gICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKF90aGlzLmRvb21lZEFuaW1hdGlvbiAhPSBudWxsKSB7XG4gICAgICAgICAgICAgIF90aGlzLmRlc3Ryb3lEb29tZWRBbmltYXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9sZE9uaW9uTGF5ZXIucmVtb3ZlKCk7XG4gICAgICAgICAgICByZXR1cm4gb2xkT25pb25MYXllciA9IG51bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfSkodGhpcyksIDIwMCk7XG4gIH07XG5cbiAgTGF5ZXIucHJvdG90eXBlLmRlc3Ryb3lEb29tZWRBbmltYXRpb24gPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5kb29tZWRBbmltYXRpb24gPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmRvb21lZEFuaW1hdGlvbi5kZXN0cm95KCk7XG4gICAgcmV0dXJuIHRoaXMuZG9vbWVkQW5pbWF0aW9uID0gbnVsbDtcbiAgfTtcblxuICBMYXllci5wcm90b3R5cGUuZGVzdHJveUFuaW1hdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmFuaW1hdGlvbiA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuYW5pbWF0aW9uLmRlc3Ryb3koKTtcbiAgICByZXR1cm4gdGhpcy5hbmltYXRpb24gPSBudWxsO1xuICB9O1xuXG4gIExheWVyLnByb3RvdHlwZS5hZGRGaWx0ZXIgPSBmdW5jdGlvbihmaWx0ZXJJZCkge1xuICAgIHJldHVybiAkKFwic3ZnXCIsIHRoaXMuY3VycmVudE9uaW9uTGF5ZXIpLmNzcyh7XG4gICAgICBmaWx0ZXI6IFwidXJsKCNcIiArIGZpbHRlcklkICsgXCIpXCJcbiAgICB9KTtcbiAgfTtcblxuICBMYXllci5wcm90b3R5cGUucmVtb3ZlRmlsdGVycyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAkKFwic3ZnXCIsIHRoaXMuY3VycmVudE9uaW9uTGF5ZXIpLmNzcyh7XG4gICAgICBmaWx0ZXI6IFwibm9uZVwiXG4gICAgfSk7XG4gIH07XG5cbiAgTGF5ZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmVtcHR5KCk7XG4gICAgcmV0dXJuIHRoaXMuJGxheWVyLnJlbW92ZSgpO1xuICB9O1xuXG4gIExheWVyLnByb3RvdHlwZS5lbXB0eSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuJGxheWVyLmVtcHR5KCk7XG4gICAgdGhpcy5kZXN0cm95RG9vbWVkQW5pbWF0aW9uKCk7XG4gICAgdGhpcy5kZXN0cm95QW5pbWF0aW9uKCk7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudE9uaW9uTGF5ZXIgPSBudWxsO1xuICB9O1xuXG4gIExheWVyLnByb3RvdHlwZS5hZGRTdmcgPSBmdW5jdGlvbigkaG9sZGVyLCBsYXllckRhdGEpIHtcbiAgICB2YXIgbWU7XG4gICAgbWUgPSB0aGlzO1xuICAgIHJldHVybiAkaG9sZGVyLmxvYWQoYXJpc3RvdGxlLmdldEFzc2V0UGF0aChsYXllckRhdGEuY29udGVudCksIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKGxheWVyRGF0YS5jYWNoZSkge1xuICAgICAgICBtZS5jYWNoZSgpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG1lID0gbnVsbDtcbiAgICB9KTtcbiAgfTtcblxuICBMYXllci5wcm90b3R5cGUuYWRkSW1hZ2UgPSBmdW5jdGlvbigkaG9sZGVyLCBmaWxlLCByZXBlYXQsIHBvc2l0aW9uKSB7XG4gICAgaWYgKHJlcGVhdCA9PSBudWxsKSB7XG4gICAgICByZXBlYXQgPSBcIm5vLXJlcGVhdFwiO1xuICAgIH1cbiAgICBpZiAocG9zaXRpb24gPT0gbnVsbCkge1xuICAgICAgcG9zaXRpb24gPSBcImxlZnRcIjtcbiAgICB9XG4gICAgcmV0dXJuICRob2xkZXIuY3NzKHtcbiAgICAgIGJhY2tncm91bmQ6IFwidXJsKFwiICsgKGFyaXN0b3RsZS5nZXRBc3NldFBhdGgoZmlsZSkpICsgXCIpIFwiICsgcmVwZWF0ICsgXCIgXCIgKyBwb3NpdGlvblxuICAgIH0pO1xuICB9O1xuXG4gIExheWVyLnByb3RvdHlwZS5hZGRWaWRlbyA9IGZ1bmN0aW9uKCRob2xkZXIsIGZpbGUpIHtcbiAgICB2YXIgJHZpZDtcbiAgICAkdmlkID0gJChqYWRlVGVtcGxhdGVbJ21vdmllL3ZpZGVvJ10oe1xuICAgICAgc3JjOiBhcmlzdG90bGUuZ2V0QXNzZXRQYXRoKGZpbGUpXG4gICAgfSkpO1xuICAgIHJldHVybiAkaG9sZGVyLmFwcGVuZCgkdmlkKTtcbiAgfTtcblxuICBMYXllci5wcm90b3R5cGUudXBkYXRlRWZmZWN0cyA9IGZ1bmN0aW9uKGZ4KSB7XG4gICAgdmFyIGVmZmVjdCwgaSwgbGVuLCByZWYsIHJlc3VsdHM7XG4gICAgaWYgKGZ4LmNsZWFyKSB7XG4gICAgICB0aGlzLiRsYXllci5hdHRyKHtcbiAgICAgICAgXCJjbGFzc1wiOiAnbGF5ZXInXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGZ4LmVmZmVjdHMgIT0gbnVsbCkge1xuICAgICAgcmVmID0gZnguZWZmZWN0cztcbiAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBlZmZlY3QgPSByZWZbaV07XG4gICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLiRsYXllci5hZGRDbGFzcyhlZmZlY3QpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH1cbiAgfTtcblxuICBMYXllci5wcm90b3R5cGUudXBkYXRlQmFja2dyb3VuZCA9IGZ1bmN0aW9uKGxheWVyRGF0YSkge1xuICAgIGlmIChsYXllckRhdGEuYmFja2dyb3VuZCA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmN1cnJlbnRPbmlvbkxheWVyLmNzcyh7XG4gICAgICBiYWNrZ3JvdW5kOiBsYXllckRhdGEuYmFja2dyb3VuZFxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBMYXllcjtcblxufSkoKTtcbiIsInZhciBEeW5hbWljQXNzZXRzLCBIaWdobGlnaHRlciwgTGF5ZXIsIE1vdmllO1xuXG5EeW5hbWljQXNzZXRzID0gcmVxdWlyZSgnbW92aWUvZHluYW1pYy1hc3NldHMnKTtcblxuTGF5ZXIgPSByZXF1aXJlKCdtb3ZpZS9sYXllcicpO1xuXG5IaWdobGlnaHRlciA9IHJlcXVpcmUoJ21vdmllL2hpZ2hsaWdodGVyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTW92aWUgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIE1vdmllKCRlbCkge1xuICAgIHZhciB0b2tlbjEsIHRva2VuMTAsIHRva2VuMTEsIHRva2VuMTIsIHRva2VuMTMsIHRva2VuMTQsIHRva2VuMiwgdG9rZW4zLCB0b2tlbjQsIHRva2VuNSwgdG9rZW42LCB0b2tlbjcsIHRva2VuOCwgdG9rZW45O1xuICAgIHRoaXMuJGVsID0gJGVsO1xuICAgIGFyaXN0b3RsZS5tb3ZpZSA9IHRoaXM7XG4gICAgdGhpcy4kd3JhcHBlciA9ICQoJy53cmFwcGVyJywgdGhpcy4kZWwpO1xuICAgIHRoaXMubGF5ZXJzID0gW107XG4gICAgdGhpcy5keW5hbWljQXNzZXRzID0gbmV3IER5bmFtaWNBc3NldHMoJCgnLmR5bmFtaWNzJywgdGhpcy4kZWwpKTtcbiAgICB0aGlzLmhpZ2hsaWdodGVyID0gbmV3IEhpZ2hsaWdodGVyKHRoaXMuJHdyYXBwZXIsIHRoaXMuZHluYW1pY0Fzc2V0cyk7XG4gICAgdGhpcy5zY2FsZSA9IDE7XG4gICAgdGhpcy50cmFuc2Zvcm1PcmlnaW4gPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH07XG4gICAgdGhpcy5wdWJsaXNoU2NhbGVBbmRUcmFuc2Zvcm0oKTtcbiAgICB0b2tlbjEgPSBQdWJTdWIuc3Vic2NyaWJlKCdtb3ZpZS5sb2FkLWxheWVyJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuYWRkTGF5ZXIoZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0b2tlbjIgPSBQdWJTdWIuc3Vic2NyaWJlKCdtb3ZpZS56b29tJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuem9vbShkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRva2VuMyA9IFB1YlN1Yi5zdWJzY3JpYmUoJ21vdmllLmxheWVycy5jbGVhcicsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmNsZWFyTGF5ZXIoZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0b2tlbjQgPSBQdWJTdWIuc3Vic2NyaWJlKCdtb3ZpZS5sYXllcnMuY2xlYXItYWxsJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuY2xlYXJBbGxMYXllcnMoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRva2VuNSA9IFB1YlN1Yi5zdWJzY3JpYmUoJ21vdmllLmxheWVycy5ibHVyLmJlbG93JywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuYmx1ckFsbExheWVyc0JlbG93KGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgdG9rZW42ID0gUHViU3ViLnN1YnNjcmliZSgnbW92aWUubGF5ZXJzLnVuYmx1ci5hbGwnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy51bmJsdXJBbGxMQXllcnMoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRva2VuNyA9IFB1YlN1Yi5zdWJzY3JpYmUoJ21vdmllLmxheWVycy5jYWNoZScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmNhY2hlTGF5ZXIoZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0b2tlbjggPSBQdWJTdWIuc3Vic2NyaWJlKCdtb3ZpZS5sYXllcnMudW5jYWNoZScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnVuY2FjaGVMYXllcihkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRva2VuOSA9IFB1YlN1Yi5zdWJzY3JpYmUoJ21vdmllLmxheWVycy51bmNhY2hlLWFsbCcsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnVuQ2FjaGVBbGxMYXllcnMoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRva2VuMTAgPSBQdWJTdWIuc3Vic2NyaWJlKCdtb3ZpZS5sYXllcnMuY2FjaGUtYWxsJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuY2FjaGVBbGxMYXllcnMoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRva2VuMTEgPSBQdWJTdWIuc3Vic2NyaWJlKCdtb3ZpZS5sYXllcnMuY2FjaGUtYWxsLWJ1dCcsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmNhY2hlQWxsQnV0KGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgdG9rZW4xMiA9IFB1YlN1Yi5zdWJzY3JpYmUoJ21vdmllLnJlcG9ydCcsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnJlcG9ydCgpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgdG9rZW4xMyA9IFB1YlN1Yi5zdWJzY3JpYmUoJ21vdmllLnNldC1kcmllZC1sYXllcnMnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5kcmllZExheWVycyA9IGRhdGE7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0b2tlbjE0ID0gUHViU3ViLnN1YnNjcmliZSgnbW92aWUucmVoeWRyYXRlLWxheWVycycsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgaWYgKF90aGlzLmRyaWVkTGF5ZXJzICE9IG51bGwpIHtcbiAgICAgICAgICBfdGhpcy5yZWh5ZHJhdGVMYXllclN0YXRlKF90aGlzLmRyaWVkTGF5ZXJzKTtcbiAgICAgICAgICByZXR1cm4gX3RoaXMuZHJpZWRMYXllcnMgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0aGlzLnRva2VucyA9IFt0b2tlbjEsIHRva2VuMiwgdG9rZW4zLCB0b2tlbjQsIHRva2VuNSwgdG9rZW42LCB0b2tlbjcsIHRva2VuOCwgdG9rZW45LCB0b2tlbjEwLCB0b2tlbjExLCB0b2tlbjEyLCB0b2tlbjEzXTtcbiAgfVxuXG4gIE1vdmllLnByb3RvdHlwZS5yZXBvcnQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaiwgbGF5ZXIsIGxlbiwgcmVmLCByZXN1bHRzO1xuICAgIHJlZiA9IHRoaXMubGF5ZXJzO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGogPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgIGxheWVyID0gcmVmW2pdO1xuICAgICAgcmVzdWx0cy5wdXNoKGxheWVyLnJlcG9ydCgpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgTW92aWUucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGosIGxheWVyLCBsZW4sIHJlZjtcbiAgICB0aGlzLnpvb20oe1xuICAgICAgc2NhbGU6IDFcbiAgICB9KTtcbiAgICByZWYgPSB0aGlzLmxheWVycztcbiAgICBmb3IgKGogPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgIGxheWVyID0gcmVmW2pdO1xuICAgICAgbGF5ZXIuZGVzdHJveSgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5sYXllcnMgPSBbXTtcbiAgfTtcblxuICBNb3ZpZS5wcm90b3R5cGUucG9wdWxhdGUgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyIGRlcHRoSWQsIGxheWVyRGF0YSwgcmVmO1xuICAgIGlmIChkYXRhID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmVmID0gZGF0YS5sYXllcnM7XG4gICAgZm9yIChkZXB0aElkIGluIHJlZikge1xuICAgICAgbGF5ZXJEYXRhID0gcmVmW2RlcHRoSWRdO1xuICAgICAgdGhpcy5hZGRMYXllcihsYXllckRhdGEpO1xuICAgIH1cbiAgICBpZiAoZGF0YS56b29tICE9IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLnpvb20oZGF0YS56b29tKTtcbiAgICB9XG4gIH07XG5cbiAgTW92aWUucHJvdG90eXBlLnpvb20gPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyICRpdGVtLCBwb3M7XG4gICAgaWYgKGRhdGEuaWQgIT0gbnVsbCkge1xuICAgICAgJGl0ZW0gPSAkKFwiI1wiICsgZGF0YS5pZCk7XG4gICAgICBpZiAoJGl0ZW0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGFyaXN0b3RsZVtcInRocm93XCJdKFwiVHJpZWQgdG8gem9vbSB0byBhbiBpdGVtIHdpdGggdGhlIGlkIGBcIiArIGRhdGEuaWQgKyBcImAsIGJ1dCBubyBpdGVtcyB3aXRoIHRoYXQgaWQgd2VyZSBmb3VuZC5cIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHBvcyA9IHRoaXMuZ2V0TG9jYWxQb3MoZGF0YS5pZCk7XG4gICAgICByZXR1cm4gdGhpcy56b29tVG8oZGF0YS5zY2FsZSwgcG9zLngsIHBvcy55KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuem9vbVRvKGRhdGEuc2NhbGUsIGRhdGEueCwgZGF0YS55KTtcbiAgICB9XG4gIH07XG5cbiAgTW92aWUucHJvdG90eXBlLnpvb21UbyA9IGZ1bmN0aW9uKHNjYWxlLCB4LCB5KSB7XG4gICAgdGhpcy5zY2FsZSA9IHNjYWxlICE9IG51bGwgPyBzY2FsZSA6IDE7XG4gICAgaWYgKHggPT0gbnVsbCkge1xuICAgICAgeCA9IDA7XG4gICAgfVxuICAgIGlmICh5ID09IG51bGwpIHtcbiAgICAgIHkgPSAwO1xuICAgIH1cbiAgICB0aGlzLnRyYW5zZm9ybU9yaWdpbiA9IHtcbiAgICAgIHg6IHgsXG4gICAgICB5OiB5XG4gICAgfTtcbiAgICB0aGlzLiRlbC5jc3Moe1xuICAgICAgXCJ0cmFuc2Zvcm0tb3JpZ2luXCI6IChNYXRoLnJvdW5kKHgpKSArIFwicHggXCIgKyAoTWF0aC5yb3VuZCh5KSkgKyBcInB4XCJcbiAgICB9KTtcbiAgICB0aGlzLiRlbC5jc3Moe1xuICAgICAgdHJhbnNmb3JtOiBcInNjYWxlKFwiICsgdGhpcy5zY2FsZSArIFwiKVwiXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMucHVibGlzaFNjYWxlQW5kVHJhbnNmb3JtKCk7XG4gIH07XG5cbiAgTW92aWUucHJvdG90eXBlLmNsZWFyTGF5ZXIgPSBmdW5jdGlvbihkZXB0aCkge1xuICAgIGlmICh0aGlzLmxheWVyc1tkZXB0aF0gIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMubGF5ZXJzW2RlcHRoXS5lbXB0eSgpO1xuICAgIH1cbiAgfTtcblxuICBNb3ZpZS5wcm90b3R5cGUuY2xlYXJBbGxMYXllcnMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaiwgbGF5ZXIsIGxlbiwgcmVmLCByZXN1bHRzO1xuICAgIHJlZiA9IHRoaXMubGF5ZXJzO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGogPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgIGxheWVyID0gcmVmW2pdO1xuICAgICAgcmVzdWx0cy5wdXNoKGxheWVyLmVtcHR5KCkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBNb3ZpZS5wcm90b3R5cGUuYWRkTGF5ZXIgPSBmdW5jdGlvbihsYXllckRhdGEpIHtcbiAgICB2YXIgZGVwdGgsIGksIGosIGxheWVyLCByZWYsIHJlZjE7XG4gICAgaWYgKGxheWVyRGF0YSA9PSBudWxsKSB7XG4gICAgICBhcmlzdG90bGVbXCJ0aHJvd1wiXShcIlRyaWVkIHRvIGNyZWF0ZSBhIGxheWVyLCBidXQgZGlkbid0IHNwZWNpZnkgYW55IGxheWVyIGRhdGFcIiwgdHJ1ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChsYXllckRhdGEuZGVwdGggPT0gbnVsbCkge1xuICAgICAgYXJpc3RvdGxlW1widGhyb3dcIl0oXCJUcmllZCB0byBjcmVhdGUgYSBsYXllciB3aXRoIG5vIGRlcHRoIHNwZWNpZmllZFwiLCB0cnVlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZGVwdGggPSBsYXllckRhdGEuZGVwdGg7XG4gICAgaWYgKGRlcHRoID4gdGhpcy5sYXllcnMubGVuZ3RoKSB7XG4gICAgICBmb3IgKGkgPSBqID0gcmVmID0gdGhpcy5sYXllcnMubGVuZ3RoLCByZWYxID0gZGVwdGg7IHJlZiA8PSByZWYxID8gaiA8PSByZWYxIDogaiA+PSByZWYxOyBpID0gcmVmIDw9IHJlZjEgPyArK2ogOiAtLWopIHtcbiAgICAgICAgdGhpcy5sYXllcnNbaV0gPSBuZXcgTGF5ZXIodGhpcy4kd3JhcHBlciwgaSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxheWVyID0gdGhpcy5nZXRPckNyZWF0ZUxheWVyKGRlcHRoKTtcbiAgICByZXR1cm4gbGF5ZXIudXBkYXRlKGxheWVyRGF0YSk7XG4gIH07XG5cbiAgTW92aWUucHJvdG90eXBlLmdldE9yQ3JlYXRlTGF5ZXIgPSBmdW5jdGlvbihkZXB0aCkge1xuICAgIHZhciBsYXllcjtcbiAgICBpZiAodGhpcy5sYXllcnNbZGVwdGhdICE9IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLmxheWVyc1tkZXB0aF07XG4gICAgfVxuICAgIGxheWVyID0gbmV3IExheWVyKHRoaXMuJHdyYXBwZXIsIGRlcHRoKTtcbiAgICB0aGlzLmxheWVyc1tkZXB0aF0gPSBsYXllcjtcbiAgICByZXR1cm4gbGF5ZXI7XG4gIH07XG5cbiAgTW92aWUucHJvdG90eXBlLmNhY2hlQWxsQnV0ID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciBleGNlcHRpb24sIGV4Y2VwdGlvbnMsIGosIGssIGxheWVyLCBsZW4sIGxlbjEsIHJlZiwgcmVzdWx0cztcbiAgICBleGNlcHRpb25zID0ge307XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgIGZvciAoaiA9IDAsIGxlbiA9IGRhdGEubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgICAgZXhjZXB0aW9uID0gZGF0YVtqXTtcbiAgICAgICAgZXhjZXB0aW9uc1tleGNlcHRpb25dID0gXCJcIjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZXhjZXB0aW9uc1tkYXRhXSA9IFwiXCI7XG4gICAgfVxuICAgIHJlZiA9IHRoaXMubGF5ZXJzO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGsgPSAwLCBsZW4xID0gcmVmLmxlbmd0aDsgayA8IGxlbjE7IGsrKykge1xuICAgICAgbGF5ZXIgPSByZWZba107XG4gICAgICBpZiAoZXhjZXB0aW9uc1tsYXllci5kZXB0aF0gIT09IFwiXCIpIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKGxheWVyLmNhY2hlKCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHZvaWQgMCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIE1vdmllLnByb3RvdHlwZS5jYWNoZUFsbExheWVycyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBqLCBsYXllciwgbGVuLCByZWYsIHJlc3VsdHM7XG4gICAgcmVmID0gdGhpcy5sYXllcnM7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoaiA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGogPCBsZW47IGorKykge1xuICAgICAgbGF5ZXIgPSByZWZbal07XG4gICAgICByZXN1bHRzLnB1c2gobGF5ZXIuY2FjaGUoKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIE1vdmllLnByb3RvdHlwZS51bkNhY2hlQWxsTGF5ZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGosIGxheWVyLCBsZW4sIHJlZiwgcmVzdWx0cztcbiAgICByZWYgPSB0aGlzLmxheWVycztcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChqID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICBsYXllciA9IHJlZltqXTtcbiAgICAgIHJlc3VsdHMucHVzaChsYXllci51bmNhY2hlKCkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBNb3ZpZS5wcm90b3R5cGUuY2FjaGVMYXllciA9IGZ1bmN0aW9uKGRlcHRoKSB7XG4gICAgcmV0dXJuIHRoaXMubGF5ZXJzW2RlcHRoXS5jYWNoZSgpO1xuICB9O1xuXG4gIE1vdmllLnByb3RvdHlwZS51bmNhY2hlTGF5ZXIgPSBmdW5jdGlvbihkZXB0aCkge1xuICAgIHJldHVybiB0aGlzLmxheWVyc1tkZXB0aF0udW5jYWNoZSgpO1xuICB9O1xuXG4gIE1vdmllLnByb3RvdHlwZS5ibHVyQWxsTGF5ZXJzQmVsb3cgPSBmdW5jdGlvbihsYXllckRlcHRoKSB7XG4gICAgdmFyIGksIGosIHJlZiwgcmVzdWx0cztcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChpID0gaiA9IDAsIHJlZiA9IGxheWVyRGVwdGggLSAxOyAwIDw9IHJlZiA/IGogPD0gcmVmIDogaiA+PSByZWY7IGkgPSAwIDw9IHJlZiA/ICsraiA6IC0taikge1xuICAgICAgcmVzdWx0cy5wdXNoKHRoaXMubGF5ZXJzW2ldLmFkZEZpbHRlcihcImJsdWVCbHVyXCIpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgTW92aWUucHJvdG90eXBlLnVuYmx1ckFsbExBeWVycyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBqLCBsYXllciwgbGVuLCByZWYsIHJlc3VsdHM7XG4gICAgcmVmID0gdGhpcy5sYXllcnM7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoaiA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGogPCBsZW47IGorKykge1xuICAgICAgbGF5ZXIgPSByZWZbal07XG4gICAgICByZXN1bHRzLnB1c2gobGF5ZXIucmVtb3ZlRmlsdGVycygpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgTW92aWUucHJvdG90eXBlLmdldEdsb2JhbFBvcyA9IGZ1bmN0aW9uKGl0ZW1JZCkge1xuICAgIHJldHVybiBhcmlzdG90bGUuZ2V0R2xvYmFsUG9zKGl0ZW1JZCk7XG4gIH07XG5cbiAgTW92aWUucHJvdG90eXBlLmdldExvY2FsUG9zID0gZnVuY3Rpb24oaXRlbUlkKSB7XG4gICAgcmV0dXJuIGFyaXN0b3RsZS5nZXRMb2NhbFBvcyhpdGVtSWQpO1xuICB9O1xuXG4gIE1vdmllLnByb3RvdHlwZS5kZWh5ZHJhdGVMYXllclN0YXRlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGosIGxheWVyLCBsYXllcnMsIGxlbiwgcmVmO1xuICAgIGxheWVycyA9IFtdO1xuICAgIHJlZiA9IHRoaXMubGF5ZXJzO1xuICAgIGZvciAoaiA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGogPCBsZW47IGorKykge1xuICAgICAgbGF5ZXIgPSByZWZbal07XG4gICAgICBsYXllcnMucHVzaChsYXllci5wcmlzdGluZUxheWVyRGF0YSk7XG4gICAgfVxuICAgIHJldHVybiBsYXllcnM7XG4gIH07XG5cbiAgTW92aWUucHJvdG90eXBlLnJlaHlkcmF0ZUxheWVyU3RhdGUgPSBmdW5jdGlvbihsYXllcnMpIHtcbiAgICB2YXIgaiwgbGF5ZXJEYXRhLCBsZW4sIHJlc3VsdHM7XG4gICAgdGhpcy5yZXNldCgpO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGogPSAwLCBsZW4gPSBsYXllcnMubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgIGxheWVyRGF0YSA9IGxheWVyc1tqXTtcbiAgICAgIGlmIChsYXllckRhdGEgIT0gbnVsbCkge1xuICAgICAgICBpZiAoIWxheWVyRGF0YS5sb29wKSB7XG4gICAgICAgICAgbGF5ZXJEYXRhLmp1bXBUb0VuZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMuYWRkTGF5ZXIobGF5ZXJEYXRhKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRzLnB1c2godm9pZCAwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgTW92aWUucHJvdG90eXBlLnB1Ymxpc2hTY2FsZUFuZFRyYW5zZm9ybSA9IGZ1bmN0aW9uKCkge1xuICAgIFB1YlN1Yi5wdWJsaXNoKCdzY2FsZS51cGRhdGUnLCB0aGlzLnNjYWxlKTtcbiAgICByZXR1cm4gUHViU3ViLnB1Ymxpc2goJ3RyYW5zZm9ybS51cGRhdGUnLCB0aGlzLnRyYW5zZm9ybU9yaWdpbik7XG4gIH07XG5cbiAgTW92aWUucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaiwgbGVuLCByZWYsIHJlc3VsdHMsIHRva2VuO1xuICAgIHRoaXMucmVzZXQoKTtcbiAgICByZWYgPSB0aGlzLnRva2VucztcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChqID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICB0b2tlbiA9IHJlZltqXTtcbiAgICAgIHJlc3VsdHMucHVzaChQdWJTdWIudW5zdWJzY3JpYmUodG9rZW4pKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgcmV0dXJuIE1vdmllO1xuXG59KSgpO1xuIiwidmFyIFNWR0FuaW1hdGlvbixcbiAgYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH07XG5cbm1vZHVsZS5leHBvcnRzID0gU1ZHQW5pbWF0aW9uID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBTVkdBbmltYXRpb24oZWwsIGpzb24sIGRhdGEpIHtcbiAgICB0aGlzLnBsYXkgPSBiaW5kKHRoaXMucGxheSwgdGhpcyk7XG4gICAgdmFyIGhhbmRsZTtcbiAgICB0aGlzLmV2ZW50SGFuZGxlcnMgPSBbXTtcbiAgICBpZiAoZGF0YS5sb29wID09IG51bGwpIHtcbiAgICAgIGRhdGEubG9vcCA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLmFuaW1hdGlvbiA9IGJvZHltb3Zpbi5sb2FkQW5pbWF0aW9uKHtcbiAgICAgIHdyYXBwZXI6IGVsWzBdLFxuICAgICAgYW5pbVR5cGU6ICdzdmcnLFxuICAgICAgbG9vcDogZGF0YS5sb29wLFxuICAgICAgcHJlcmVuZGVyOiB0cnVlLFxuICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgcGF0aDoganNvblxuICAgIH0pO1xuICAgIGlmIChkYXRhLm5hdGl2ZUV2ZW50cyAhPSBudWxsKSB7XG4gICAgICB0aGlzLmFkZE5hdGl2ZUV2ZW50cyhkYXRhLm5hdGl2ZUV2ZW50cyk7XG4gICAgfVxuICAgIGlmIChkYXRhLnZjcikge1xuICAgICAgUHViU3ViLnB1Ymxpc2goJ3Zjci1jb250cm9sLnNob3cnLCB0aGlzKTtcbiAgICB9XG4gICAgaGFuZGxlID0gdGhpcy5hbmltYXRpb24uYWRkRXZlbnRMaXN0ZW5lcignZGF0YV9yZWFkeScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoZGF0YS5qdW1wVG9FbmQgIT0gbnVsbCkge1xuICAgICAgICAgIF90aGlzLmFuaW1hdGlvbi5zZXRDdXJyZW50UmF3RnJhbWVWYWx1ZShfdGhpcy5hbmltYXRpb24udG90YWxGcmFtZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChkYXRhLmRlbGF5ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGFyaXN0b3RsZS50aW1lb3V0KF90aGlzLnBsYXksIGRhdGEuZGVsYXkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfdGhpcy5wbGF5KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcy5hZGRFdmVudHMoZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0aGlzLnRyYWNrRXZlbnRIYW5kbGVyKCdkYXRhX3JlYWR5JywgaGFuZGxlKTtcbiAgfVxuXG4gIFNWR0FuaW1hdGlvbi5wcm90b3R5cGUuYWRkRXZlbnRzID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciBldmVudCwgaGFuZGxlLCBpLCBsZW4sIHJlZiwgcmVzdWx0cztcbiAgICBpZiAoZGF0YS5ldmVudHMgIT0gbnVsbCkge1xuICAgICAgcmVmID0gZGF0YS5ldmVudHM7XG4gICAgICByZXN1bHRzID0gW107XG4gICAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgZXZlbnQgPSByZWZbaV07XG4gICAgICAgIGhhbmRsZSA9IHRoaXMuYW5pbWF0aW9uLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBQdWJTdWIucHVibGlzaChcImxheWVyLlwiICsgZGF0YS5kZXB0aCArIFwiLlwiICsgZXZlbnQpO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pKHRoaXMpKTtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMudHJhY2tFdmVudEhhbmRsZXIoZXZlbnQsIGhhbmRsZSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxuICB9O1xuXG4gIFNWR0FuaW1hdGlvbi5wcm90b3R5cGUuYWRkTmF0aXZlRXZlbnRzID0gZnVuY3Rpb24oZXZlbnRzKSB7XG4gICAgdmFyIGNiLCBldmVudCwgaGFuZGxlLCByZXN1bHRzO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGV2ZW50IGluIGV2ZW50cykge1xuICAgICAgY2IgPSBldmVudHNbZXZlbnRdO1xuICAgICAgaGFuZGxlID0gdGhpcy5hbmltYXRpb24uYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2IpO1xuICAgICAgcmVzdWx0cy5wdXNoKHRoaXMudHJhY2tFdmVudEhhbmRsZXIoZXZlbnQsIGhhbmRsZSkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBTVkdBbmltYXRpb24ucHJvdG90eXBlLmFkZE9uQ29tcGxldGUgPSBmdW5jdGlvbihvbkNvbXBsZXRlKSB7XG4gICAgdmFyIGhhbmRsZTtcbiAgICBoYW5kbGUgPSB0aGlzLmFuaW1hdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY29tcGxldGVcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBvbkNvbXBsZXRlKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICByZXR1cm4gdGhpcy50cmFja0V2ZW50SGFuZGxlcihcImNvbXBsZXRlXCIsIGhhbmRsZSk7XG4gIH07XG5cbiAgU1ZHQW5pbWF0aW9uLnByb3RvdHlwZS5wbGF5ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYW5pbWF0aW9uLnBsYXkoKTtcbiAgfTtcblxuICBTVkdBbmltYXRpb24ucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5hbmltYXRpb24uc3RvcCgpO1xuICB9O1xuXG4gIFNWR0FuaW1hdGlvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge307XG5cbiAgU1ZHQW5pbWF0aW9uLnByb3RvdHlwZS50cmFja0V2ZW50SGFuZGxlciA9IGZ1bmN0aW9uKGV2ZW50LCBoYW5kbGVyKSB7XG4gICAgcmV0dXJuIHRoaXMuZXZlbnRIYW5kbGVycy5wdXNoKHtcbiAgICAgIGV2ZW50OiBldmVudCxcbiAgICAgIGhhbmRsZXI6IGhhbmRsZXJcbiAgICB9KTtcbiAgfTtcblxuICBTVkdBbmltYXRpb24ucHJvdG90eXBlLmRlc3Ryb3lFdmVudHMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZXZudCwgaSwgbGVuLCByZWYsIHJlc3VsdHM7XG4gICAgcmVmID0gdGhpcy5ldmVudEhhbmRsZXJzO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGV2bnQgPSByZWZbaV07XG4gICAgICByZXN1bHRzLnB1c2godGhpcy5hbmltYXRpb24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldm50LmV2ZW50LCBldm50LmhhbmRsZXIpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgcmV0dXJuIFNWR0FuaW1hdGlvbjtcblxufSkoKTtcbiIsInZhciBDYWxsU2lnblNlbGVjdCwgQ29tcG9uZW50LFxuICBleHRlbmQgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKGhhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH0sXG4gIGhhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuQ29tcG9uZW50ID0gcmVxdWlyZSgnc2xpZGUtdXgvY29tcG9uZW50cy9jb21wb25lbnQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBDYWxsU2lnblNlbGVjdCA9IChmdW5jdGlvbihzdXBlckNsYXNzKSB7XG4gIGV4dGVuZChDYWxsU2lnblNlbGVjdCwgc3VwZXJDbGFzcyk7XG5cbiAgZnVuY3Rpb24gQ2FsbFNpZ25TZWxlY3QoJGVsLCBkYXRhKSB7XG4gICAgQ2FsbFNpZ25TZWxlY3QuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgZGF0YSk7XG4gICAgdGhpcy4kbm9kZSA9ICQoamFkZVRlbXBsYXRlWydzbGlkZS11eC9jb21wb25lbnRzL2NhbGwtc2lnbi1zZWxlY3QnXShkYXRhKSk7XG4gICAgdGhpcy5zdXBlckluaXQoJGVsLCB0aGlzLiRub2RlLCBkYXRhKTtcbiAgICB0aGlzLiRub2RlLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICB0aGlzLiR0eHQgPSAkKCcjY2FsbHNpZ24tdHh0JywgdGhpcy4kbm9kZSk7XG4gICAgdGhpcy4kbmFtZSA9ICQoXCIjbmFtZVwiLCB0aGlzLiRub2RlKTtcbiAgICB0aGlzLnVwZGF0ZU5hbWUoKTtcbiAgICAkKCcjZ2VuZXJhdGUtY2FsbHNpZ24nLCB0aGlzLiRub2RlKS5vbignY2xpY2snLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmdlbmVyYXRlQ2FsbFNpZ24oKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ3NhdmUuY2FsbHNpZ24nLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5zYXZlQ2FsbFNpZ24oKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRoaXMuJHR4dC5vbihcImtleXVwXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnVwZGF0ZU5hbWUoJChlLmN1cnJlbnRUYXJnZXQpLnZhbCgpKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIGFyaXN0b3RsZS5nZXRKc29uKFwibG9jYWwvY2FsbHNpZ25zLmpzb25cIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICBfdGhpcy5jYWxsc2lnbnMgPSBkYXRhLmNhbGxzaWducztcbiAgICAgICAgcmV0dXJuIF90aGlzLiRub2RlLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9XG5cbiAgQ2FsbFNpZ25TZWxlY3QucHJvdG90eXBlLnVwZGF0ZU5hbWUgPSBmdW5jdGlvbihjYWxsc2lnbikge1xuICAgIHZhciBmaXJzdE5hbWUsIGxhc3ROYW1lLCByZWY7XG4gICAgcmVmID0gYXJpc3RvdGxlLmdsb2JhbHMuZ2V0KFwidXNlclwiKS5zcGxpdChcIixcIiksIGxhc3ROYW1lID0gcmVmWzBdLCBmaXJzdE5hbWUgPSByZWZbMV07XG4gICAgaWYgKGNhbGxzaWduICE9IG51bGwpIHtcbiAgICAgIGNhbGxzaWduID0gXCIgXFxcIlwiICsgY2FsbHNpZ24gKyBcIlxcXCIgXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhbGxzaWduID0gXCIgXCI7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLiRuYW1lLmh0bWwoXCJcIiArIGZpcnN0TmFtZSArIGNhbGxzaWduICsgbGFzdE5hbWUpO1xuICB9O1xuXG4gIENhbGxTaWduU2VsZWN0LnByb3RvdHlwZS5nZW5lcmF0ZUNhbGxTaWduID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5jYWxsU2lnbiA9IHRoaXMuY2FsbHNpZ25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuY2FsbHNpZ25zLmxlbmd0aCldO1xuICAgIFB1YlN1Yi5wdWJsaXNoKCdtZXRhLmFjdGl2aXR5Jywge1xuICAgICAgYWN0aXZpdHk6IFwiR2VuZXJhdGUgQ2FsbCBTaWduXCJcbiAgICB9KTtcbiAgICB0aGlzLnVwZGF0ZU5hbWUodGhpcy5jYWxsU2lnbik7XG4gICAgcmV0dXJuIHRoaXMuJHR4dC52YWwodGhpcy5jYWxsU2lnbik7XG4gIH07XG5cbiAgQ2FsbFNpZ25TZWxlY3QucHJvdG90eXBlLnNhdmVDYWxsU2lnbiA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjYWxsU2lnbjtcbiAgICBjYWxsU2lnbiA9IHRoaXMuJHR4dC52YWwoKTtcbiAgICBpZiAoKGNhbGxTaWduICE9IG51bGwgPyBjYWxsU2lnbi5sZW5ndGggOiB2b2lkIDApID4gMSkge1xuICAgICAgYXJpc3RvdGxlLmdsb2JhbHMuc2V0KCdjYWxsU2lnbicsIGNhbGxTaWduKTtcbiAgICAgIFB1YlN1Yi5wdWJsaXNoKCdzdGF0ZS5zYXZlJyk7XG4gICAgICBQdWJTdWIucHVibGlzaCgnY2FsbHNpZ24uc2VsZWN0ZWQnLCBjYWxsU2lnbik7XG4gICAgICByZXR1cm4gUHViU3ViLnB1Ymxpc2goJ3NsaWRlcy5uZXh0Jyk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBDYWxsU2lnblNlbGVjdDtcblxufSkoQ29tcG9uZW50KTtcbiIsInZhciBDb21wb25lbnQ7XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50ID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBDb21wb25lbnQoZGF0YSkge1xuICAgIHRoaXMucmVwbGFjZVZhcnMoZGF0YSk7XG4gIH1cblxuICBDb21wb25lbnQucHJvdG90eXBlLnN1cGVySW5pdCA9IGZ1bmN0aW9uKCRlbCwgJG5vZGUsIGRhdGEpIHtcbiAgICB0aGlzLiRub2RlID0gJG5vZGU7XG4gICAgJGVsLmFwcGVuZCh0aGlzLiRub2RlKTtcbiAgICBzaGFkb3dJY29uc0luc3RhbmNlLnN2Z1JlcGxhY2VXaXRoU3RyaW5nKHB4U3ZnSWNvblN0cmluZywgdGhpcy4kbm9kZSk7XG4gICAgcmV0dXJuIHRoaXMubGlzdGVuRm9yTGFiZWxIb3ZlcnMoZGF0YSk7XG4gIH07XG5cbiAgQ29tcG9uZW50LnByb3RvdHlwZS5yZXBsYWNlVmFycyA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2YXIgaSwga2V5LCBsZW4sIHJlZiwgcmVzdWx0cztcbiAgICBpZiAoZGF0YS5yZXBsYWNlVmFycyA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJlZiA9IGRhdGEucmVwbGFjZVZhcnM7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAga2V5ID0gcmVmW2ldO1xuICAgICAgcmVzdWx0cy5wdXNoKGRhdGFba2V5XSA9IGRhdGFba2V5XS5yZXBsYWNlKC9cXCR7KFxcdyspfS9nLCBmdW5jdGlvbihtYXRjaCwgY2FwdHVyZTEpIHtcbiAgICAgICAgcmV0dXJuIGFyaXN0b3RsZS5nbG9iYWxzLmdldChjYXB0dXJlMSk7XG4gICAgICB9KSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIENvbXBvbmVudC5wcm90b3R5cGUubGlzdGVuRm9yTGFiZWxIb3ZlcnMgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyICRhLCBvdXQsIG92ZXI7XG4gICAgaWYgKGRhdGEuaGFzTGFiZWxzID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFkYXRhLmhhc0xhYmVscykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAkYSA9ICQoXCJhW2RhdGEtbGFiZWxdXCIsIHRoaXMuJG5vZGUpO1xuICAgICRhLmFkZENsYXNzKFwibGFiZWwtdHJpZ2dlclwiKTtcbiAgICBvdmVyID0gJGEub24oXCJtb3VzZW92ZXJcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuYWRkTGFiZWwoZSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICByZXR1cm4gb3V0ID0gJGEub24oXCJtb3VzZW91dFwiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5yZW1vdmVMYWJlbChlKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9O1xuXG4gIENvbXBvbmVudC5wcm90b3R5cGUuYWRkTGFiZWwgPSBmdW5jdGlvbihlKSB7XG4gICAgdmFyICRlbCwgY29uZmlnRGF0YSwgdGltZW91dElkO1xuICAgICRlbCA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICB0aW1lb3V0SWQgPSBcInRpbWVvdXRcIiArICgkZWwuYXR0cignZGF0YS1sYWJlbCcpKTtcbiAgICBjbGVhclRpbWVvdXQodGhpc1t0aW1lb3V0SWRdKTtcbiAgICBjb25maWdEYXRhID0gYXJpc3RvdGxlLmxhYmVsc1skZWwuYXR0cignZGF0YS1sYWJlbCcpXTtcbiAgICBjb25maWdEYXRhLmNzc0NsYXNzID0gXCJhcnJvdy1yaWdodCBib3hcIjtcbiAgICByZXR1cm4gUHViU3ViLnB1Ymxpc2goJ2xhYmVsLmF0dGFjaCcsIHtcbiAgICAgIGVsOiAkZWwsXG4gICAgICBjb250ZW50OiBjb25maWdEYXRhXG4gICAgfSk7XG4gIH07XG5cbiAgQ29tcG9uZW50LnByb3RvdHlwZS5yZW1vdmVMYWJlbCA9IGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgJGVsLCB0aW1lb3V0SWQ7XG4gICAgJGVsID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuICAgIHRpbWVvdXRJZCA9IFwidGltZW91dFwiICsgKCRlbC5hdHRyKCdkYXRhLWxhYmVsJykpO1xuICAgIHJldHVybiB0aGlzW3RpbWVvdXRJZF0gPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgJGVsID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuICAgICAgcmV0dXJuIFB1YlN1Yi5wdWJsaXNoKCdsYWJlbC5kZXN0cm95JywgJGVsKTtcbiAgICB9LCAxMDApO1xuICB9O1xuXG4gIENvbXBvbmVudC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLiRub2RlICE9IG51bGwpIHtcbiAgICAgIHRoaXMuJG5vZGUucmVtb3ZlKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLiRub2RlID0gbnVsbDtcbiAgfTtcblxuICBDb21wb25lbnQucHJvdG90eXBlLnRyYWNrRXZlbnRIYW5kbGVyID0gZnVuY3Rpb24oaXRlbSwgZXZlbnQsIGhhbmRsZXIpIHtcbiAgICByZXR1cm4gdGhpcy5ldmVudEhhbmRsZXJzLnB1c2goe1xuICAgICAgaXRlbTogaXRlbSxcbiAgICAgIGV2ZW50OiBldmVudCxcbiAgICAgIGhhbmRsZXI6IGhhbmRsZXJcbiAgICB9KTtcbiAgfTtcblxuICBDb21wb25lbnQucHJvdG90eXBlLmRlc3Ryb3lFdmVudHMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZXZudCwgaSwgbGVuLCByZWYsIHJlc3VsdHM7XG4gICAgcmVmID0gdGhpcy5ldmVudEhhbmRsZXJzO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGV2bnQgPSByZWZbaV07XG4gICAgICByZXN1bHRzLnB1c2goZXZudC5pdGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZudC5ldmVudCwgZXZudC5oYW5kbGVyKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIHJldHVybiBDb21wb25lbnQ7XG5cbn0pKCk7XG4iLCJ2YXIgQ29tcG9uZW50LCBEZWZlbmRlckNhcmRzLFxuICBiaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfSxcbiAgZXh0ZW5kID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChoYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9LFxuICBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbkNvbXBvbmVudCA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvY29tcG9uZW50Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGVmZW5kZXJDYXJkcyA9IChmdW5jdGlvbihzdXBlckNsYXNzKSB7XG4gIGV4dGVuZChEZWZlbmRlckNhcmRzLCBzdXBlckNsYXNzKTtcblxuICBmdW5jdGlvbiBEZWZlbmRlckNhcmRzKCRlbCwgZGF0YTEpIHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhMTtcbiAgICB0aGlzLnNob3dDYXJkID0gYmluZCh0aGlzLnNob3dDYXJkLCB0aGlzKTtcbiAgICBEZWZlbmRlckNhcmRzLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIGRhdGEpO1xuICAgIHRoaXMudG90YWxDYXJkc1ZpZXdlZCA9IDA7XG4gICAgdGhpcy4kbm9kZSA9ICQoamFkZVRlbXBsYXRlWydzbGlkZS11eC9jb21wb25lbnRzL2RlZmVuZGVyLWNhcmRzJ10oe30pKTtcbiAgICB0aGlzLnN1cGVySW5pdCgkZWwsIHRoaXMuJG5vZGUsIGRhdGEpO1xuICAgIHRoaXMuY3JlYXRlRGVmZW5kZXJzKHRoaXMuZGF0YS5kZWZlbmRlcnMpO1xuICB9XG5cbiAgRGVmZW5kZXJDYXJkcy5wcm90b3R5cGUuY3JlYXRlRGVmZW5kZXJzID0gZnVuY3Rpb24oZGVmZW5kZXJzKSB7XG4gICAgdmFyIGRhdGEsIGRlZmVuZGVyRGF0YSwgZGVmZW5kZXJJZCwgcmVzdWx0cztcbiAgICB0aGlzLmdob3N0cyA9IFtdO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGRlZmVuZGVySWQgaW4gZGVmZW5kZXJzKSB7XG4gICAgICBkZWZlbmRlckRhdGEgPSBkZWZlbmRlcnNbZGVmZW5kZXJJZF07XG4gICAgICBkYXRhID0ge1xuICAgICAgICBpZDogZGVmZW5kZXJJZCxcbiAgICAgICAgZXZlbnRzOiB7XG4gICAgICAgICAgY2xpY2s6IChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGlkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdGhpcy5zaG93Q2FyZChpZCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pKHRoaXMpXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB0aGlzLmdob3N0cy5wdXNoKGRlZmVuZGVySWQpO1xuICAgICAgcmVzdWx0cy5wdXNoKFB1YlN1Yi5wdWJsaXNoKCdnaG9zdHV4LmFkZCcsIGRhdGEpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgRGVmZW5kZXJDYXJkcy5wcm90b3R5cGUuc2hvd0NhcmQgPSBmdW5jdGlvbihkZWZlbmRlcklkKSB7XG4gICAgdmFyIGRhdGE7XG4gICAgdGhpcy50b3RhbENhcmRzVmlld2VkKys7XG4gICAgaWYgKHRoaXMuJGNhcmQgIT0gbnVsbCkge1xuICAgICAgdGhpcy5yZW1vdmVDdXJyZW50Q2FyZCgpO1xuICAgIH1cbiAgICBkYXRhID0gdGhpcy5kYXRhLmRlZmVuZGVyc1tkZWZlbmRlcklkXTtcbiAgICB0aGlzLiRjYXJkID0gJChqYWRlVGVtcGxhdGVbJ3NsaWRlLXV4L2NvbXBvbmVudHMvZGVmZW5kZXItY2FyZCddKGRhdGEpKTtcbiAgICBzaGFkb3dJY29uc0luc3RhbmNlLnN2Z1JlcGxhY2VXaXRoU3RyaW5nKHB4U3ZnSWNvblN0cmluZywgdGhpcy4kY2FyZCk7XG4gICAgJChcIi5nb3QtaXQtYnRuXCIsIHRoaXMuJGNhcmQpLm9uKFwiY2xpY2tcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgICByZXR1cm4gX3RoaXMucmVtb3ZlQ3VycmVudENhcmQoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIGlmICh0aGlzLnRvdGFsQ2FyZHNWaWV3ZWQgPT09IDIpIHtcbiAgICAgIFB1YlN1Yi5wdWJsaXNoKCdjb250aW51ZS5zaG93Jyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLiRub2RlLmFwcGVuZCh0aGlzLiRjYXJkKTtcbiAgfTtcblxuICBEZWZlbmRlckNhcmRzLnByb3RvdHlwZS5yZW1vdmVDdXJyZW50Q2FyZCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRjYXJkLnJlbW92ZSgpO1xuICB9O1xuXG4gIERlZmVuZGVyQ2FyZHMucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZ2hvc3RJZCwgaSwgbGVuLCByZWY7XG4gICAgcmVmID0gdGhpcy5naG9zdHM7XG4gICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBnaG9zdElkID0gcmVmW2ldO1xuICAgICAgUHViU3ViLnB1Ymxpc2goJ2dob3N0dXgucmVtb3ZlJywgZ2hvc3RJZCk7XG4gICAgfVxuICAgIHJldHVybiBEZWZlbmRlckNhcmRzLl9fc3VwZXJfXy5kZXN0cm95LmNhbGwodGhpcyk7XG4gIH07XG5cbiAgcmV0dXJuIERlZmVuZGVyQ2FyZHM7XG5cbn0pKENvbXBvbmVudCk7XG4iLCJ2YXIgQ29tcG9uZW50LCBEaWFsb2d1ZVBhZ2UsXG4gIGV4dGVuZCA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoaGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfSxcbiAgaGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5Db21wb25lbnQgPSByZXF1aXJlKCdzbGlkZS11eC9jb21wb25lbnRzL2NvbXBvbmVudCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERpYWxvZ3VlUGFnZSA9IChmdW5jdGlvbihzdXBlckNsYXNzKSB7XG4gIGV4dGVuZChEaWFsb2d1ZVBhZ2UsIHN1cGVyQ2xhc3MpO1xuXG4gIGZ1bmN0aW9uIERpYWxvZ3VlUGFnZSgkZWwsIGRhdGEpIHtcbiAgICBEaWFsb2d1ZVBhZ2UuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgZGF0YSk7XG4gICAgdGhpcy5jb25maWdEYXRhKGRhdGEpO1xuICAgIHRoaXMuJG5vZGUgPSAkKGphZGVUZW1wbGF0ZVsnc2xpZGUtdXgvY29tcG9uZW50cy9kaWFsb2d1ZS9kaWFsb2d1ZS1wYWdlcy9iYXNlJ10oZGF0YSkpO1xuICAgIHRoaXMuc3VwZXJJbml0KCRlbCwgdGhpcy4kbm9kZSwgZGF0YSk7XG4gICAgaWYgKGRhdGEudGhlbWUgIT0gbnVsbCkge1xuICAgICAgdGhpcy4kbm9kZS5hZGRDbGFzcyhkYXRhLnRoZW1lKTtcbiAgICB9XG4gICAgdGhpcy5jb25maWdCdXR0b25zKHRoaXMuJG5vZGUsIGRhdGEpO1xuICAgICQoXCJzdmdcIiwgdGhpcy4kbm9kZSkuZWFjaChmdW5jdGlvbihpLCBlbCkge1xuICAgICAgcmV0dXJuIGVsLnNldEF0dHJpYnV0ZShcInByZXNlcnZlQXNwZWN0UmF0aW9cIiwgXCJub25lXCIpO1xuICAgIH0pO1xuICAgICQoXCIuYnRuXCIpLm9uKCdjbGljaycsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdmFyIGJ0biwgaWQsIGosIGxlbiwgcmVmO1xuICAgICAgICBpZCA9IGUuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcbiAgICAgICAgcmVmID0gZGF0YS5idG5zO1xuICAgICAgICBmb3IgKGogPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgICAgICBidG4gPSByZWZbal07XG4gICAgICAgICAgaWYgKGJ0bi5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgIGFyaXN0b3RsZS5jb21tYW5kZXJbXCJkb1wiXShidG4uY2xpY2spO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH1cblxuICBEaWFsb2d1ZVBhZ2UucHJvdG90eXBlLmNvbmZpZ0RhdGEgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyIGJ0biwgY291bnQsIGosIGxlbiwgcmVmLCByZXN1bHRzO1xuICAgIGNvdW50ID0gMDtcbiAgICByZWYgPSBkYXRhLmJ0bnM7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoaiA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGogPCBsZW47IGorKykge1xuICAgICAgYnRuID0gcmVmW2pdO1xuICAgICAgcmVzdWx0cy5wdXNoKGJ0bi5pZCA9IFwiYnRuXCIgKyAoY291bnQrKykpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBEaWFsb2d1ZVBhZ2UucHJvdG90eXBlLmNvbmZpZ0J1dHRvbnMgPSBmdW5jdGlvbihlbCwgZGF0YSkge1xuICAgIGlmIChkYXRhLmJ0bkNvbmZpZyA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChkYXRhLmJ0bkNvbmZpZy53aWR0aCAhPSBudWxsKSB7XG4gICAgICAkKFwiLmJ0blwiLCBlbCkuY3NzKHtcbiAgICAgICAgd2lkdGg6IGRhdGEuYnRuQ29uZmlnLndpZHRoICsgXCJweFwiXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGRhdGEuYnRuQ29uZmlnLmhlaWdodCAhPSBudWxsKSB7XG4gICAgICAkKFwiLmJ0blwiLCBlbCkuY3NzKHtcbiAgICAgICAgaGVpZ2h0OiBkYXRhLmJ0bkNvbmZpZy5oZWlnaHQgKyBcInB4XCJcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZGF0YS5idG5Db25maWcuYm90dG9tICE9IG51bGwpIHtcbiAgICAgICQoXCIuYnRuLXdyYXBwZXJcIiwgZWwpLmNzcyh7XG4gICAgICAgIFwibWFyZ2luLWJvdHRvbVwiOiBkYXRhLmJ0bkNvbmZpZy5ib3R0b20gKyBcInB4XCJcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZGF0YS5idG5Db25maWcubGluZXMpIHtcbiAgICAgIHJldHVybiAkKFwiLmJ0bi13cmFwcGVyXCIpLmFkZENsYXNzKCdsaW5lcycpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gRGlhbG9ndWVQYWdlO1xuXG59KShDb21wb25lbnQpO1xuIiwidmFyIENvbXBvbmVudCwgRGlhbG9ndWUsXG4gIGV4dGVuZCA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoaGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfSxcbiAgaGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5Db21wb25lbnQgPSByZXF1aXJlKCdzbGlkZS11eC9jb21wb25lbnRzL2NvbXBvbmVudCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERpYWxvZ3VlID0gKGZ1bmN0aW9uKHN1cGVyQ2xhc3MpIHtcbiAgZXh0ZW5kKERpYWxvZ3VlLCBzdXBlckNsYXNzKTtcblxuICBmdW5jdGlvbiBEaWFsb2d1ZSgkZWwsIGRhdGEpIHtcbiAgICBEaWFsb2d1ZS5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCBkYXRhKTtcbiAgICB0aGlzLiRub2RlID0gJChqYWRlVGVtcGxhdGVbJ3NsaWRlLXV4L2NvbXBvbmVudHMvZGlhbG9ndWUvZGlhbG9ndWUnXShkYXRhKSk7XG4gICAgdGhpcy5zdXBlckluaXQoJGVsLCB0aGlzLiRub2RlLCBkYXRhKTtcbiAgICAkKCcuYnRuJywgdGhpcy4kbm9kZSkub24oXCJjbGlja1wiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGFyaXN0b3RsZS5jb21tYW5kZXJbXCJkb1wiXShkYXRhLmJ0bi5hY3Rpb24pO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH1cblxuICByZXR1cm4gRGlhbG9ndWU7XG5cbn0pKENvbXBvbmVudCk7XG4iLCJ2YXIgQ29tcG9uZW50LCBEdXRpZXMsIFNlcXVlbmNlLFxuICBleHRlbmQgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKGhhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH0sXG4gIGhhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuQ29tcG9uZW50ID0gcmVxdWlyZSgnc2xpZGUtdXgvY29tcG9uZW50cy9jb21wb25lbnQnKTtcblxuU2VxdWVuY2UgPSByZXF1aXJlKCdtaXNjL3NlcXVlbmNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRHV0aWVzID0gKGZ1bmN0aW9uKHN1cGVyQ2xhc3MpIHtcbiAgZXh0ZW5kKER1dGllcywgc3VwZXJDbGFzcyk7XG5cbiAgZnVuY3Rpb24gRHV0aWVzKCRlbCwgZGF0YSkge1xuICAgIER1dGllcy5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCBkYXRhKTtcbiAgICB0aGlzLm51bUFja25vd2xlZGdlZER1dGllcyA9IDA7XG4gICAgdGhpcy5hY2tub3dsZWRnZWREdXRpZXMgPSB7fTtcbiAgICB0aGlzLmdldERhdGEoXCJ+bC9cIiArIChhcmlzdG90bGUuZ2xvYmFscy5nZXQoJ2R1dGllc0RpcicpKSArIFwiL1wiICsgZGF0YS5kZWZpbml0aW9uICsgXCIuanNvblwiKTtcbiAgICB0aGlzLiRub2RlID0gJChcIjxkaXYgY2xhc3M9J2R1dGllcycvPlwiKTtcbiAgICBQdWJTdWIucHVibGlzaCgnbWV0YS5kdXRpZXMuc3RhcnQnKTtcbiAgICB0aGlzLnN1cGVySW5pdCgkZWwsIHRoaXMuJG5vZGUsIGRhdGEpO1xuICB9XG5cbiAgRHV0aWVzLnByb3RvdHlwZS5idWlsZCA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2YXIgJGh0bWw7XG4gICAgdGhpcy5jcmVhdGVEdXR5SWRzKGRhdGEuZHV0aWVzKTtcbiAgICB0aGlzLmR1dGllcyA9IG5ldyBTZXF1ZW5jZShkYXRhLmR1dGllcyk7XG4gICAgJGh0bWwgPSAkKGphZGVUZW1wbGF0ZVsnc2xpZGUtdXgvY29tcG9uZW50cy9kdXRpZXMnXShkYXRhKSk7XG4gICAgdGhpcy4kbm9kZS5hcHBlbmQoJGh0bWwpO1xuICAgIHRoaXMuJGNvbnRlbnQgPSAkKFwiLmNvbnRlbnRcIiwgdGhpcy4kbm9kZSk7XG4gICAgc2hhZG93SWNvbnNJbnN0YW5jZS5zdmdSZXBsYWNlV2l0aFN0cmluZyhweFN2Z0ljb25TdHJpbmcsIHRoaXMuJG5vZGUpO1xuICAgIHRoaXMuJGR1dHlCdXR0b25zID0gJChcIi5kdXR5LWJ0blwiLCB0aGlzLiRub2RlKTtcbiAgICB0aGlzLiRkdXR5QnV0dG9ucy5vbihcImNsaWNrXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmFjdGl2YXRlRHV0eShlLmN1cnJlbnRUYXJnZXQsIGUuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2lkJykpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgcmV0dXJuICQodGhpcy4kZHV0eUJ1dHRvbnNbMF0pLnRyaWdnZXIoXCJjbGlja1wiKTtcbiAgfTtcblxuICBEdXRpZXMucHJvdG90eXBlLnNldFVzZXJIdG1sID0gZnVuY3Rpb24oZGF0YSwgaHRtbCkge1xuICAgIHZhciAkdXNlckNvbnRlbnQ7XG4gICAgZGF0YS5odG1sID0gaHRtbDtcbiAgICB0aGlzLiRjb250ZW50LmVtcHR5KCk7XG4gICAgJHVzZXJDb250ZW50ID0gJChqYWRlVGVtcGxhdGVbJ3NsaWRlLXV4L2NvbXBvbmVudHMvZHV0eS1kZXRhaWxzJ10oZGF0YSkpO1xuICAgIHRoaXMuJGNvbnRlbnQuYXBwZW5kKCR1c2VyQ29udGVudCk7XG4gICAgc2hhZG93SWNvbnNJbnN0YW5jZS5zdmdSZXBsYWNlV2l0aFN0cmluZyhweFN2Z0ljb25TdHJpbmcsIHRoaXMuJG5vZGUpO1xuICAgIHJldHVybiAkKFwiI2Fja25vd2xlZGdlXCIsICR1c2VyQ29udGVudCkub24oXCJjbGlja1wiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5kdXR5QWNrbm93bGVkZ2VkKCQoZS5jdXJyZW50VGFyZ2V0KSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgfTtcblxuICBEdXRpZXMucHJvdG90eXBlLmdldFVzZXJIdG1sID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciBtZSwgcGF0aCwgeG9iajtcbiAgICBtZSA9IHRoaXM7XG4gICAgcGF0aCA9IGFyaXN0b3RsZS5nZXRBc3NldFBhdGgoXCJ+bC9cIiArIChhcmlzdG90bGUuZ2xvYmFscy5nZXQoJ2R1dGllc0RpcicpKSArIFwiL1wiICsgZGF0YS5jb250ZW50KTtcbiAgICB4b2JqID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgeG9iai5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgIGlmICh4b2JqLnJlYWR5U3RhdGUgPT09IDQgJiYgeG9iai5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICByZXR1cm4gbWUuc2V0VXNlckh0bWwoZGF0YSwgeG9iai5yZXNwb25zZVRleHQpO1xuICAgICAgfSBlbHNlIGlmICh4b2JqLnN0YXR1cyA9PT0gNDA0KSB7XG4gICAgICAgIGlmIChtZS50aHJvd240MDQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbWUudGhyb3duNDA0ID0gdHJ1ZTtcbiAgICAgICAgYXJpc3RvdGxlW1widGhyb3dcIl0oXCJDb3VsZG4ndCBmaW5kIHRoZSBkdXRpZXMgZmlsZSBcIiArIGRhdGEuY29udGVudCArIFwiLCBjaGVjayB0aGUganNvbiBmaWxlIGZvciB0eXBvcy5cIik7XG4gICAgICAgIHJldHVybiBQdWJTdWIucHVibGlzaCgnc2xpZGVzLm5leHQtc2xpZGUnKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHhvYmoub3BlbignR0VUJywgcGF0aCwgdHJ1ZSk7XG4gICAgcmV0dXJuIHhvYmouc2VuZChudWxsKTtcbiAgfTtcblxuICBEdXRpZXMucHJvdG90eXBlLmR1dHlBY2tub3dsZWRnZWQgPSBmdW5jdGlvbigkYnRuKSB7XG4gICAgdmFyIGR1dHksIGksIGxlbiwgcmVmO1xuICAgICRidG4uYWRkQ2xhc3MoJ2NsaWNrZWQnKTtcbiAgICBpZiAodGhpcy5hY2tub3dsZWRnZWREdXRpZXNbdGhpcy5kdXRpZXMuY3VycmVudEl0ZW0oKS5pZF0gPT0gbnVsbCkge1xuICAgICAgdGhpcy5udW1BY2tub3dsZWRnZWREdXRpZXMrKztcbiAgICAgIHRoaXMuYWNrbm93bGVkZ2VkRHV0aWVzW3RoaXMuZHV0aWVzLmN1cnJlbnRJdGVtKCkuaWRdID0gXCJcIjtcbiAgICAgIHRoaXMuJGN1cnJlbnRBY3RpdmVCdXR0b24uYWRkQ2xhc3MoXCJjb21wbGV0ZVwiKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubnVtQWNrbm93bGVkZ2VkRHV0aWVzID09PSB0aGlzLmR1dGllcy50b3RhbEl0ZW1zKSB7XG4gICAgICBQdWJTdWIucHVibGlzaCgnbWV0YS5kdXRpZXMuZmluaXNoJyk7XG4gICAgICByZXR1cm4gUHViU3ViLnB1Ymxpc2goJ2NvbnRpbnVlLnNob3cnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVmID0gdGhpcy5kdXRpZXMuaXRlbXM7XG4gICAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgZHV0eSA9IHJlZltpXTtcbiAgICAgICAgaWYgKHRoaXMuYWNrbm93bGVkZ2VkRHV0aWVzW2R1dHkuaWRdID09IG51bGwpIHtcbiAgICAgICAgICAkKFwiI1wiICsgZHV0eS5pZCwgdGhpcy4kbm9kZSkudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgRHV0aWVzLnByb3RvdHlwZS5jcmVhdGVEdXR5SWRzID0gZnVuY3Rpb24oZHV0aWVzKSB7XG4gICAgdmFyIGNvdW50LCBkdXR5LCBpLCBsZW4sIHJlc3VsdHM7XG4gICAgY291bnQgPSAwO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGkgPSAwLCBsZW4gPSBkdXRpZXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGR1dHkgPSBkdXRpZXNbaV07XG4gICAgICByZXN1bHRzLnB1c2goZHV0eS5pZCA9IFwiZHV0eVwiICsgKGNvdW50KyspKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgRHV0aWVzLnByb3RvdHlwZS5hY3RpdmF0ZUR1dHkgPSBmdW5jdGlvbihlbCwgaWQpIHtcbiAgICB0aGlzLmR1dGllcy5hY3RpdmF0ZUl0ZW1CeVBhcmFtKCdpZCcsIGlkKTtcbiAgICB0aGlzLiRjdXJyZW50QWN0aXZlQnV0dG9uID0gJChlbCk7XG4gICAgdGhpcy4kZHV0eUJ1dHRvbnMucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgdGhpcy4kY3VycmVudEFjdGl2ZUJ1dHRvbi5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICByZXR1cm4gdGhpcy5nZXRVc2VySHRtbCh0aGlzLmR1dGllcy5jdXJyZW50SXRlbSgpKTtcbiAgfTtcblxuICBEdXRpZXMucHJvdG90eXBlLmdldERhdGEgPSBmdW5jdGlvbihqc29uRmlsZSkge1xuICAgIHJldHVybiB0aGlzLmxvYWRKc29uKGFyaXN0b3RsZS5nZXRBc3NldFBhdGgoanNvbkZpbGUpLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihqc29uKSB7XG4gICAgICAgIHZhciBvYmo7XG4gICAgICAgIG9iaiA9IEpTT04ucGFyc2UoanNvbi5yZXBsYWNlKC8oXFxyXFxufFxcbnxcXHIpL2dtLCBcIlwiKSk7XG4gICAgICAgIHJldHVybiBfdGhpcy5idWlsZChvYmopO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH07XG5cbiAgRHV0aWVzLnByb3RvdHlwZS5sb2FkSnNvbiA9IGZ1bmN0aW9uKHBhdGgsIG9uQ29tcGxldGUpIHtcbiAgICB2YXIgeG9iajtcbiAgICB4b2JqID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgeG9iai5vdmVycmlkZU1pbWVUeXBlKCdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgeG9iai5vcGVuKCdHRVQnLCBwYXRoLCB0cnVlKTtcbiAgICB4b2JqLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoeG9iai5yZWFkeVN0YXRlID09PSA0ICYmIHhvYmouc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICByZXR1cm4gb25Db21wbGV0ZSh4b2JqLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSkodGhpcyk7XG4gICAgcmV0dXJuIHhvYmouc2VuZChudWxsKTtcbiAgfTtcblxuICByZXR1cm4gRHV0aWVzO1xuXG59KShDb21wb25lbnQpO1xuIiwidmFyIENvbXBvbmVudCwgRXBpc29kZUludHJvLFxuICBleHRlbmQgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKGhhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH0sXG4gIGhhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuQ29tcG9uZW50ID0gcmVxdWlyZSgnc2xpZGUtdXgvY29tcG9uZW50cy9jb21wb25lbnQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBFcGlzb2RlSW50cm8gPSAoZnVuY3Rpb24oc3VwZXJDbGFzcykge1xuICBleHRlbmQoRXBpc29kZUludHJvLCBzdXBlckNsYXNzKTtcblxuICBmdW5jdGlvbiBFcGlzb2RlSW50cm8oJGVsLCBkYXRhKSB7XG4gICAgRXBpc29kZUludHJvLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIGRhdGEpO1xuICAgIHRoaXMuJG5vZGUgPSAkKGphZGVUZW1wbGF0ZVsnc2xpZGUtdXgvY29tcG9uZW50cy9lcGlzb2RlLWludHJvJ10oZGF0YSkpO1xuICAgIHRoaXMuc3VwZXJJbml0KCRlbCwgdGhpcy4kbm9kZSwgZGF0YSk7XG4gIH1cblxuICByZXR1cm4gRXBpc29kZUludHJvO1xuXG59KShDb21wb25lbnQpO1xuIiwidmFyIENvbXBvbmVudCwgRXBpc29kZU91dHJvLFxuICBleHRlbmQgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKGhhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH0sXG4gIGhhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuQ29tcG9uZW50ID0gcmVxdWlyZSgnc2xpZGUtdXgvY29tcG9uZW50cy9jb21wb25lbnQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBFcGlzb2RlT3V0cm8gPSAoZnVuY3Rpb24oc3VwZXJDbGFzcykge1xuICBleHRlbmQoRXBpc29kZU91dHJvLCBzdXBlckNsYXNzKTtcblxuICBmdW5jdGlvbiBFcGlzb2RlT3V0cm8oJGVsLCBkYXRhKSB7XG4gICAgRXBpc29kZU91dHJvLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIGRhdGEpO1xuICAgIHRoaXMuJG5vZGUgPSAkKGphZGVUZW1wbGF0ZVsnc2xpZGUtdXgvY29tcG9uZW50cy9lcGlzb2RlLW91dHJvJ10oZGF0YSkpO1xuICAgIHRoaXMuc3VwZXJJbml0KCRlbCwgdGhpcy4kbm9kZSwgZGF0YSk7XG4gIH1cblxuICByZXR1cm4gRXBpc29kZU91dHJvO1xuXG59KShDb21wb25lbnQpO1xuIiwidmFyIENvbXBvbmVudCwgRXhwbG9yZUNhcmRzLCBTZXF1ZW5jZSxcbiAgYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH0sXG4gIGV4dGVuZCA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoaGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfSxcbiAgaGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5Db21wb25lbnQgPSByZXF1aXJlKCdzbGlkZS11eC9jb21wb25lbnRzL2NvbXBvbmVudCcpO1xuXG5TZXF1ZW5jZSA9IHJlcXVpcmUoJ21pc2Mvc2VxdWVuY2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBFeHBsb3JlQ2FyZHMgPSAoZnVuY3Rpb24oc3VwZXJDbGFzcykge1xuICBleHRlbmQoRXhwbG9yZUNhcmRzLCBzdXBlckNsYXNzKTtcblxuICBmdW5jdGlvbiBFeHBsb3JlQ2FyZHMoJGVsLCBkYXRhMSkge1xuICAgIHRoaXMuZGF0YSA9IGRhdGExO1xuICAgIHRoaXMuc2hvd0NhcmQgPSBiaW5kKHRoaXMuc2hvd0NhcmQsIHRoaXMpO1xuICAgIEV4cGxvcmVDYXJkcy5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCB0aGlzLmRhdGEpO1xuICAgIHRoaXMubWV0YUNhdGVnb3J5ID0gdGhpcy5kYXRhLm1ldGEudGl0bGU7XG4gICAgdGhpcy50b3RhbENhcmRzVmlld2VkID0gMDtcbiAgICB0aGlzLnJlcXVpcmVkQ2FyZFZpZXdzID0gdGhpcy5kYXRhW1wicmVxdWlyZWQtdmlld3NcIl07XG4gICAgdGhpcy4kbm9kZSA9ICQoJC5wYXJzZUhUTUwoXCI8ZGl2PjwvZGl2PlwiKSk7XG4gICAgdGhpcy5jYXJkcyA9IG5ldyBTZXF1ZW5jZSh0aGlzLmRhdGEuY2FyZHMpO1xuICAgIHRoaXMuY3JlYXRlQ2FyZEdob3N0cyh0aGlzLmRhdGEuY2FyZHMpO1xuICAgIHRoaXMuc3VwZXJJbml0KCRlbCwgdGhpcy4kbm9kZSwgdGhpcy5kYXRhKTtcbiAgfVxuXG4gIEV4cGxvcmVDYXJkcy5wcm90b3R5cGUuY3JlYXRlQ2FyZEdob3N0cyA9IGZ1bmN0aW9uKGNhcmRzKSB7XG4gICAgdmFyIGNhcmREYXRhLCBkYXRhLCBpLCBsZW4sIHJlc3VsdHM7XG4gICAgdGhpcy5naG9zdHMgPSBbXTtcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChpID0gMCwgbGVuID0gY2FyZHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNhcmREYXRhID0gY2FyZHNbaV07XG4gICAgICBpZiAoY2FyZERhdGEubGFiZWwgIT0gbnVsbCkge1xuICAgICAgICBjYXJkRGF0YS5sYWJlbC5pZCA9IGNhcmREYXRhLmhpdDtcbiAgICAgICAgY2FyZERhdGEubGFiZWwuZXZlbnRzID0ge1xuICAgICAgICAgIGNsaWNrOiAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihpZCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuc2hvd0NhcmQoaWQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KSh0aGlzKVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmFkZExhYmVsKGNhcmREYXRhLmxhYmVsKTtcbiAgICAgIH1cbiAgICAgIGRhdGEgPSB7XG4gICAgICAgIGlkOiBjYXJkRGF0YS5oaXQsXG4gICAgICAgIGV2ZW50czoge1xuICAgICAgICAgIGNsaWNrOiAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihpZCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuc2hvd0NhcmQoaWQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KSh0aGlzKVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgdGhpcy5naG9zdHMucHVzaChjYXJkRGF0YS5oaXQpO1xuICAgICAgcmVzdWx0cy5wdXNoKFB1YlN1Yi5wdWJsaXNoKCdnaG9zdHV4LmFkZCcsIGRhdGEpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgRXhwbG9yZUNhcmRzLnByb3RvdHlwZS5hZGRMYWJlbCA9IGZ1bmN0aW9uKGxhYmVsRGF0YSkge1xuICAgIHJldHVybiBQdWJTdWIucHVibGlzaCgnbGFiZWwuYWRkJywgbGFiZWxEYXRhKTtcbiAgfTtcblxuICBFeHBsb3JlQ2FyZHMucHJvdG90eXBlLnNob3dDYXJkID0gZnVuY3Rpb24oY2FyZElkKSB7XG4gICAgdmFyIGRhdGE7XG4gICAgdGhpcy50b3RhbENhcmRzVmlld2VkKys7XG4gICAgaWYgKHRoaXMuJGN1cnJlbnRDYXJkICE9IG51bGwpIHtcbiAgICAgIHRoaXMucmVtb3ZlQ3VycmVudENhcmQoKTtcbiAgICB9XG4gICAgZGF0YSA9IHRoaXMuY2FyZHMuZ2V0SXRlbUJ5UGFyYW0oJ2hpdCcsIGNhcmRJZCk7XG4gICAgdGhpcy4kY3VycmVudENhcmQgPSAkKGphZGVUZW1wbGF0ZVtcInNsaWRlLXV4L2NvbXBvbmVudHMvY2FyZHMvXCIgKyB0aGlzLmRhdGEudGVtcGxhdGVdKGRhdGEpKTtcbiAgICBzaGFkb3dJY29uc0luc3RhbmNlLnN2Z1JlcGxhY2VXaXRoU3RyaW5nKHB4U3ZnSWNvblN0cmluZywgdGhpcy4kY3VycmVudENhcmQpO1xuICAgICQoXCIuZ290LWl0LWJ0blwiLCB0aGlzLiRjdXJyZW50Q2FyZCkub24oXCJjbGlja1wiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5yZW1vdmVDdXJyZW50Q2FyZCgpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgUHViU3ViLnB1Ymxpc2goJ21ldGEuYWN0aXZpdHknLCB7XG4gICAgICBhY3Rpdml0eTogXCJDbGljayA6IFwiICsgdGhpcy5tZXRhQ2F0ZWdvcnkgKyBcIiAtIFwiICsgZGF0YS5uYW1lXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuJG5vZGUuYXBwZW5kKHRoaXMuJGN1cnJlbnRDYXJkKTtcbiAgfTtcblxuICBFeHBsb3JlQ2FyZHMucHJvdG90eXBlLnJlbW92ZUN1cnJlbnRDYXJkID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJGN1cnJlbnRDYXJkLnJlbW92ZSgpO1xuICB9O1xuXG4gIEV4cGxvcmVDYXJkcy5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBnaG9zdElkLCBpLCBsZW4sIHJlZjtcbiAgICByZWYgPSB0aGlzLmdob3N0cztcbiAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGdob3N0SWQgPSByZWZbaV07XG4gICAgICBQdWJTdWIucHVibGlzaCgnZ2hvc3R1eC5yZW1vdmUnLCB7XG4gICAgICAgIGlkOiBnaG9zdElkLFxuICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICBjbGljazogXCJcIlxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIEV4cGxvcmVDYXJkcy5fX3N1cGVyX18uZGVzdHJveS5jYWxsKHRoaXMpO1xuICB9O1xuXG4gIHJldHVybiBFeHBsb3JlQ2FyZHM7XG5cbn0pKENvbXBvbmVudCk7XG4iLCJ2YXIgQ29tcG9uZW50LCBHaG9zdFVYLFxuICBleHRlbmQgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKGhhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH0sXG4gIGhhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuQ29tcG9uZW50ID0gcmVxdWlyZSgnc2xpZGUtdXgvY29tcG9uZW50cy9jb21wb25lbnQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBHaG9zdFVYID0gKGZ1bmN0aW9uKHN1cGVyQ2xhc3MpIHtcbiAgZXh0ZW5kKEdob3N0VVgsIHN1cGVyQ2xhc3MpO1xuXG4gIGZ1bmN0aW9uIEdob3N0VVgoJGVsLCBkYXRhKSB7XG4gICAgR2hvc3RVWC5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCBkYXRhKTtcbiAgICB0aGlzLiRub2RlID0gJChqYWRlVGVtcGxhdGVbJ3NsaWRlLXV4L2NvbXBvbmVudHMvZ2hvc3QtdXgnXSh7fSkpO1xuICAgIHRoaXMuc3VwZXJJbml0KCRlbCwgdGhpcy4kbm9kZSwgZGF0YSk7XG4gICAgdGhpcy5jcmVhdGVUYXJnZXRzKGRhdGEudGFyZ2V0cyk7XG4gIH1cblxuICBHaG9zdFVYLnByb3RvdHlwZS5jcmVhdGVUYXJnZXRzID0gZnVuY3Rpb24odGFyZ2V0cykge1xuICAgIHZhciAkZ2hvc3RJdGVtLCAkdGFyZ2V0LCBpLCBsZW4sIHBvcywgcmVzdWx0cywgdGFsLCB0YXJnZXQsIHdpZDtcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChpID0gMCwgbGVuID0gdGFyZ2V0cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgdGFyZ2V0ID0gdGFyZ2V0c1tpXTtcbiAgICAgICR0YXJnZXQgPSAkKFwiI1wiICsgdGFyZ2V0LmlkKTtcbiAgICAgIHBvcyA9ICR0YXJnZXQucG9zaXRpb24oKTtcbiAgICAgIHdpZCA9ICR0YXJnZXRbMF0uZ2V0QkJveCgpLndpZHRoO1xuICAgICAgdGFsID0gJHRhcmdldFswXS5nZXRCQm94KCkuaGVpZ2h0O1xuICAgICAgJGdob3N0SXRlbSA9ICQoamFkZVRlbXBsYXRlWydzbGlkZS11eC9jb21wb25lbnRzL2dob3N0LWl0ZW0nXSh7XG4gICAgICAgIHdpZHRoOiB3aWQsXG4gICAgICAgIGhlaWdodDogdGFsLFxuICAgICAgICBsZWZ0OiBwb3MubGVmdCxcbiAgICAgICAgdG9wOiBwb3MudG9wXG4gICAgICB9KSk7XG4gICAgICB0aGlzLiRub2RlLmFwcGVuZCgkZ2hvc3RJdGVtKTtcbiAgICAgIHRoaXMuc2V0RXZlbnRIYW5kbGVyKCRnaG9zdEl0ZW0sICdjbGljaycsIHRhcmdldC5jbGljayk7XG4gICAgICB0aGlzLnNldEV2ZW50SGFuZGxlcigkZ2hvc3RJdGVtLCAnbW91c2VvdmVyJywgdGFyZ2V0Lm92ZXIsIDAuNCk7XG4gICAgICByZXN1bHRzLnB1c2godGhpcy5zZXRFdmVudEhhbmRsZXIoJGdob3N0SXRlbSwgJ21vdXNlb3V0JywgdGFyZ2V0Lm91dCkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBHaG9zdFVYLnByb3RvdHlwZS5zZXRFdmVudEhhbmRsZXIgPSBmdW5jdGlvbigkaXRlbSwgZXZlbnQsIGFjdGlvbiwgb3BhY2l0eSkge1xuICAgIGlmIChvcGFjaXR5ID09IG51bGwpIHtcbiAgICAgIG9wYWNpdHkgPSAwO1xuICAgIH1cbiAgICByZXR1cm4gJGl0ZW0ub24oZXZlbnQsIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGFyaXN0b3RsZS5jb21tYW5kZXJbXCJkb1wiXShhY3Rpb24pO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBHaG9zdFVYO1xuXG59KShDb21wb25lbnQpO1xuIiwidmFyIENvbXBvbmVudCwgR3V0Q2hlY2ssXG4gIGV4dGVuZCA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoaGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfSxcbiAgaGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5Db21wb25lbnQgPSByZXF1aXJlKCdzbGlkZS11eC9jb21wb25lbnRzL2NvbXBvbmVudCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEd1dENoZWNrID0gKGZ1bmN0aW9uKHN1cGVyQ2xhc3MpIHtcbiAgZXh0ZW5kKEd1dENoZWNrLCBzdXBlckNsYXNzKTtcblxuICBmdW5jdGlvbiBHdXRDaGVjaygkZWwsIGRhdGEpIHtcbiAgICBHdXRDaGVjay5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCBkYXRhKTtcbiAgICB0aGlzLiRub2RlID0gJChqYWRlVGVtcGxhdGVbJ3NsaWRlLXV4L2NvbXBvbmVudHMvZ3V0LWNoZWNrJ10oZGF0YSkpO1xuICAgIHRoaXMuc3VwZXJJbml0KCRlbCwgdGhpcy4kbm9kZSwgZGF0YSk7XG4gIH1cblxuICByZXR1cm4gR3V0Q2hlY2s7XG5cbn0pKENvbXBvbmVudCk7XG4iLCJ2YXIgQ29tcG9uZW50LCBQZXJzb25hbEluZm9JbnRybyxcbiAgZXh0ZW5kID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChoYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9LFxuICBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbkNvbXBvbmVudCA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvY29tcG9uZW50Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUGVyc29uYWxJbmZvSW50cm8gPSAoZnVuY3Rpb24oc3VwZXJDbGFzcykge1xuICBleHRlbmQoUGVyc29uYWxJbmZvSW50cm8sIHN1cGVyQ2xhc3MpO1xuXG4gIGZ1bmN0aW9uIFBlcnNvbmFsSW5mb0ludHJvKCRlbCwgZGF0YSkge1xuICAgIFBlcnNvbmFsSW5mb0ludHJvLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIGRhdGEpO1xuICAgIGRhdGEub3JnYW5pemF0aW9uID0gXCJBcml6b25hIFB1YmxpYyBTZXJ2aWNlXCI7XG4gICAgZGF0YS5uYW1lID0gYXJpc3RvdGxlLmxvY2FsU3RvcmFnZVByb3h5Lm5hbWU7XG4gICAgdGhpcy4kbm9kZSA9ICQoamFkZVRlbXBsYXRlWydzbGlkZS11eC9jb21wb25lbnRzL3BlcnNvbmFsLWluZm8taW50cm8nXShkYXRhKSk7XG4gICAgdGhpcy5zdXBlckluaXQoJGVsLCB0aGlzLiRub2RlLCBkYXRhKTtcbiAgfVxuXG4gIHJldHVybiBQZXJzb25hbEluZm9JbnRybztcblxufSkoQ29tcG9uZW50KTtcbiIsInZhciBRdWVzdGlvbixcbiAgYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH07XG5cbm1vZHVsZS5leHBvcnRzID0gUXVlc3Rpb24gPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIFF1ZXN0aW9uKCRwYXJlbnQsIGRhdGEsIHF1ZXN0aW9uVmFsdWUsIGFuc3dlckNhbGxiYWNrKSB7XG4gICAgdGhpcy4kcGFyZW50ID0gJHBhcmVudDtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIHRoaXMucXVlc3Rpb25WYWx1ZSA9IHF1ZXN0aW9uVmFsdWUgIT0gbnVsbCA/IHF1ZXN0aW9uVmFsdWUgOiAxMjA7XG4gICAgdGhpcy5hbnN3ZXJDYWxsYmFjayA9IGFuc3dlckNhbGxiYWNrO1xuICAgIHRoaXMub25BbnN3ZXJDbGljayA9IGJpbmQodGhpcy5vbkFuc3dlckNsaWNrLCB0aGlzKTtcbiAgICBQdWJTdWIucHVibGlzaCgnbWV0YS5xdWl6LnF1ZXN0aW9uLnN0YXJ0Jywge1xuICAgICAgaWQ6IHRoaXMuZGF0YS5pbmRleCArIDFcbiAgICB9KTtcbiAgICB0aGlzLnJpZ2h0R3Vlc3NlcyA9IDA7XG4gICAgdGhpcy53cm9uZ0d1ZXNzZXMgPSAwO1xuICAgIHRoaXMucnVubmluZ1RvdGFsID0gMDtcbiAgICB0aGlzLnNldEFuc3dlclZhbHVlcygpO1xuICB9XG5cbiAgUXVlc3Rpb24ucHJvdG90eXBlLmJ1aWxkID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy4kbm9kZSA9ICQoamFkZVRlbXBsYXRlWydzbGlkZS11eC9jb21wb25lbnRzL3F1aXovcXVlc3Rpb24nXSh0aGlzLmRhdGEpKTtcbiAgICB0aGlzLiRwYXJlbnQucHJlcGVuZCh0aGlzLiRub2RlKTtcbiAgICB0aGlzLiRxdWVzdGlvblRvdGFsID0gJChcIiNxdWVzdGlvbi10b3RhbFwiLCB0aGlzLiRub2RlKTtcbiAgICBzaGFkb3dJY29uc0luc3RhbmNlLnN2Z1JlcGxhY2VXaXRoU3RyaW5nKHB4U3ZnSWNvblN0cmluZywgdGhpcy4kbm9kZSk7XG4gICAgcmV0dXJuICQoXCIuYW5zd2VyLXdyYXBwZXJcIiwgdGhpcy4kbm9kZSkub24oXCJjbGlja1wiLCB0aGlzLm9uQW5zd2VyQ2xpY2spO1xuICB9O1xuXG4gIFF1ZXN0aW9uLnByb3RvdHlwZS5vbkFuc3dlckNsaWNrID0gZnVuY3Rpb24oZSkge1xuICAgIHZhciAkZWwsICRyZXNwb25zZSwgZ3Vlc3NlZFJpZ2h0O1xuICAgIGlmICh0aGlzLmNvbXBsZXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgICRlbCA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICAkZWwuYWRkQ2xhc3MoXCJmbGlwcGVkXCIpO1xuICAgICRyZXNwb25zZSA9ICQoXCIucmVzcG9uc2VcIiwgZS5jdXJyZW50VGFyZ2V0KTtcbiAgICBndWVzc2VkUmlnaHQgPSAkcmVzcG9uc2UuaGFzQ2xhc3MoJ3JpZ2h0Jyk7XG4gICAgUHViU3ViLnB1Ymxpc2goJ21ldGEucXVpei5xdWVzdGlvbi5hbnN3ZXInLCB7XG4gICAgICBpZDogdGhpcy5kYXRhLmluZGV4ICsgMSxcbiAgICAgIGFuc3dlcjogJChcIi5mcm9udCAudHh0XCIsICQoZS5jdXJyZW50VGFyZ2V0KSkudGV4dCgpXG4gICAgfSk7XG4gICAgaWYgKGd1ZXNzZWRSaWdodCkge1xuICAgICAgdGhpcy5yaWdodEd1ZXNzZXMrKztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy53cm9uZ0d1ZXNzZXMrKztcbiAgICB9XG4gICAgaWYgKHRoaXMuZGF0YS5naW1lZSkge1xuICAgICAgdGhpcy5hbnN3ZXJlZEdpbWVlKCRlbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYW5zd2VyZWROb3JtYWwoZ3Vlc3NlZFJpZ2h0LCAkZWwpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5hbnN3ZXJDYWxsYmFjayh0aGlzLmNvbXBsZXRlKTtcbiAgfTtcblxuICBRdWVzdGlvbi5wcm90b3R5cGUuYW5zd2VyZWRHaW1lZSA9IGZ1bmN0aW9uKCRhbnN3ZXIpIHtcbiAgICB0aGlzLnJ1bm5pbmdUb3RhbCA9IHRoaXMucXVlc3Rpb25WYWx1ZTtcbiAgICB0aGlzLnNob3dBbnN3ZXJQb2ludHModGhpcy5xdWVzdGlvblZhbHVlLCBcInJpZ2h0XCIsICRhbnN3ZXIpO1xuICAgIHJldHVybiB0aGlzLnNldFF1ZXN0aW9uQ29tcGxldGUoKTtcbiAgfTtcblxuICBRdWVzdGlvbi5wcm90b3R5cGUuYW5zd2VyZWROb3JtYWwgPSBmdW5jdGlvbihndWVzc2VkUmlnaHQsICRhbnN3ZXIpIHtcbiAgICBpZiAoZ3Vlc3NlZFJpZ2h0KSB7XG4gICAgICB0aGlzLnJ1bm5pbmdUb3RhbCArPSB0aGlzLnJpZ2h0QW5zd2VyVmFsdWU7XG4gICAgICB0aGlzLnNob3dBbnN3ZXJQb2ludHModGhpcy5yaWdodEFuc3dlclZhbHVlLCBcInJpZ2h0XCIsICRhbnN3ZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJ1bm5pbmdUb3RhbCAtPSB0aGlzLndyb25nQW5zd2VyVmFsdWU7XG4gICAgICB0aGlzLnNob3dBbnN3ZXJQb2ludHModGhpcy53cm9uZ0Fuc3dlclZhbHVlLCBcIndyb25nXCIsICRhbnN3ZXIpO1xuICAgIH1cbiAgICBpZiAodGhpcy5yaWdodFBvc3NpYmxlID09PSB0aGlzLnJpZ2h0R3Vlc3Nlcykge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0UXVlc3Rpb25Db21wbGV0ZSgpO1xuICAgIH1cbiAgfTtcblxuICBRdWVzdGlvbi5wcm90b3R5cGUuc2V0QW5zd2VyVmFsdWVzID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5jb3VudFBvc3NpYmxlUmlnaHRzQW5kV3JvbmdzKCk7XG4gICAgdGhpcy5yaWdodEFuc3dlclZhbHVlID0gTWF0aC5yb3VuZCh0aGlzLnF1ZXN0aW9uVmFsdWUgLyB0aGlzLnJpZ2h0UG9zc2libGUpO1xuICAgIGlmICh0aGlzLndyb25nUG9zc2libGUgPT09IDApIHtcbiAgICAgIHJldHVybiB0aGlzLndyb25nQW5zd2VyVmFsdWUgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy53cm9uZ0Fuc3dlclZhbHVlID0gTWF0aC5yb3VuZCgodGhpcy5xdWVzdGlvblZhbHVlIC8gMikgLyB0aGlzLndyb25nUG9zc2libGUpO1xuICAgIH1cbiAgfTtcblxuICBRdWVzdGlvbi5wcm90b3R5cGUuY291bnRQb3NzaWJsZVJpZ2h0c0FuZFdyb25ncyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhbnN3ZXIsIGksIGxlbiwgcmVmLCByZXN1bHRzO1xuICAgIHRoaXMud3JvbmdQb3NzaWJsZSA9IDA7XG4gICAgdGhpcy5yaWdodFBvc3NpYmxlID0gMDtcbiAgICByZWYgPSB0aGlzLmRhdGEuYW5zd2VycztcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBhbnN3ZXIgPSByZWZbaV07XG4gICAgICBpZiAoYW5zd2VyLmMpIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMucmlnaHRQb3NzaWJsZSsrKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLndyb25nUG9zc2libGUrKyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIFF1ZXN0aW9uLnByb3RvdHlwZS5zZXRRdWVzdGlvbkNvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5jb21wbGV0ZSA9IHRydWU7XG4gICAgdGhpcy4kbm9kZS5hZGRDbGFzcyhcImNvbXBsZXRlXCIpO1xuICAgIHJldHVybiBQdWJTdWIucHVibGlzaCgnbWV0YS5xdWl6LnF1ZXN0aW9uLmZpbmlzaCcsIHtcbiAgICAgIGlkOiB0aGlzLmRhdGEuaW5kZXggKyAxLFxuICAgICAgc2NvcmU6IHRoaXMucG9pbnRzRWFybmVkKClcbiAgICB9KTtcbiAgfTtcblxuICBRdWVzdGlvbi5wcm90b3R5cGUuZ2V0TmFtZSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLm5hbWUgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMubmFtZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFwiUXVlc3Rpb24gXCIgKyAodGhpcy5kYXRhLmluZGV4ICsgMSk7XG4gICAgfVxuICB9O1xuXG4gIFF1ZXN0aW9uLnByb3RvdHlwZS5nZXRTY29yZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAodGhpcy5wb2ludHNFYXJuZWQoKSkgKyBcIi9cIiArIHRoaXMucXVlc3Rpb25WYWx1ZTtcbiAgfTtcblxuICBRdWVzdGlvbi5wcm90b3R5cGUucG9pbnRzRWFybmVkID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucXVlc3Rpb25WYWx1ZSAtICh0aGlzLndyb25nQW5zd2VyVmFsdWUgKiB0aGlzLndyb25nR3Vlc3Nlcyk7XG4gIH07XG5cbiAgUXVlc3Rpb24ucHJvdG90eXBlLmlzUGVyZmVjdCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLndyb25nR3Vlc3NlcyA9PT0gMDtcbiAgfTtcblxuICBRdWVzdGlvbi5wcm90b3R5cGUuc2hvd0Fuc3dlclBvaW50cyA9IGZ1bmN0aW9uKHBvaW50cywgcmVzdWx0LCAkYW5zd2VyKSB7XG4gICAgdmFyICRub2RlO1xuICAgICRub2RlID0gJChqYWRlVGVtcGxhdGVbJ3NsaWRlLXV4L2NvbXBvbmVudHMvcXVpei9wb2ludHMtZmxvYXQnXSh7XG4gICAgICBwb2ludHM6IHBvaW50cyxcbiAgICAgIHJlc3VsdDogcmVzdWx0XG4gICAgfSkpO1xuICAgICRhbnN3ZXIuYXBwZW5kKCRub2RlKTtcbiAgICAkbm9kZS52ZWxvY2l0eSh7XG4gICAgICBvcGFjaXR5OiAxLFxuICAgICAgdG9wOiAtMzVcbiAgICB9LCB7XG4gICAgICBkdXJhdGlvbjogMTAwMCxcbiAgICAgIGVhc2luZzogXCJlYXNlaW5vdXRxdWludFwiXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuJHF1ZXN0aW9uVG90YWwuaHRtbCh0aGlzLnJ1bm5pbmdUb3RhbCk7XG4gIH07XG5cbiAgUXVlc3Rpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kbm9kZS5yZW1vdmUoKTtcbiAgfTtcblxuICByZXR1cm4gUXVlc3Rpb247XG5cbn0pKCk7XG4iLCJ2YXIgQ29tcG9uZW50LCBRdWVzdGlvbiwgUXVpeiwgU2VxdWVuY2UsXG4gIGJpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9LFxuICBleHRlbmQgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKGhhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH0sXG4gIGhhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuQ29tcG9uZW50ID0gcmVxdWlyZSgnc2xpZGUtdXgvY29tcG9uZW50cy9jb21wb25lbnQnKTtcblxuUXVlc3Rpb24gPSByZXF1aXJlKCdzbGlkZS11eC9jb21wb25lbnRzL3F1aXovcXVlc3Rpb24nKTtcblxuU2VxdWVuY2UgPSByZXF1aXJlKCdtaXNjL3NlcXVlbmNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUXVpeiA9IChmdW5jdGlvbihzdXBlckNsYXNzKSB7XG4gIGV4dGVuZChRdWl6LCBzdXBlckNsYXNzKTtcblxuICBmdW5jdGlvbiBRdWl6KCRlbDEsIGRhdGExKSB7XG4gICAgdGhpcy4kZWwgPSAkZWwxO1xuICAgIHRoaXMuZGF0YSA9IGRhdGExO1xuICAgIHRoaXMub25OZXh0Q2xpY2sgPSBiaW5kKHRoaXMub25OZXh0Q2xpY2ssIHRoaXMpO1xuICAgIHRoaXMub25RdWVzdGlvbkFuc3dlcmVkID0gYmluZCh0aGlzLm9uUXVlc3Rpb25BbnN3ZXJlZCwgdGhpcyk7XG4gICAgUXVpei5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCB0aGlzLmRhdGEpO1xuICAgIFB1YlN1Yi5wdWJsaXNoKFwiY2hyb21lLmhpZGVcIik7XG4gICAgUHViU3ViLnB1Ymxpc2goXCJjdGFubGVlLmhpZGVcIik7XG4gICAgdGhpcy5sb2FkSnNvbihcIn5sL1wiICsgKGFyaXN0b3RsZS5nbG9iYWxzLmdldCgncXVpekRpcicpKSArIFwiL1wiICsgdGhpcy5kYXRhLnNvdXJjZSArIFwiLmpzb25cIik7XG4gIH1cblxuICBRdWl6LnByb3RvdHlwZS5sb2FkSnNvbiA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgICByZXR1cm4gYXJpc3RvdGxlLmdldEpzb24oYXJpc3RvdGxlLmdldEFzc2V0UGF0aChwYXRoKSwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuYnVpbGQoZGF0YS5jb25maWcpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH07XG5cbiAgUXVpei5wcm90b3R5cGUuYnVpbGQgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdGhpcy5zZXRDaG9pY2VQZXJjZW50YWdlcygpO1xuICAgIHRoaXMuJG5vZGUgPSAkKGphZGVUZW1wbGF0ZVsnc2xpZGUtdXgvY29tcG9uZW50cy9xdWl6L3F1aXonXShkYXRhKSk7XG4gICAgdGhpcy5jcmVhdGVRdWl6KCQoXCIucXVlc3Rpb25zXCIsIHRoaXMuJG5vZGUpLCBkYXRhKTtcbiAgICB0aGlzLiRuZXh0QnRuID0gJChcIi5uZXh0LWJ0blwiLCB0aGlzLiRub2RlKTtcbiAgICB0aGlzLiRuZXh0QnRuLm9uKFwiY2xpY2tcIiwgdGhpcy5vbk5leHRDbGljayk7XG4gICAgdGhpcy5oaWRlTmV4dCgpO1xuICAgIHJldHVybiB0aGlzLnN1cGVySW5pdCh0aGlzLiRlbCwgdGhpcy4kbm9kZSwgdGhpcy5kYXRhKTtcbiAgfTtcblxuICBRdWl6LnByb3RvdHlwZS5zZXRDaG9pY2VQZXJjZW50YWdlcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjaG9pY2UsIGNob2ljZXMsIGosIGxlbjEsIHJlZjtcbiAgICBjaG9pY2VzID0gW107XG4gICAgcmVmID0gYXJpc3RvdGxlLmdsb2JhbHMuZ2V0KFwiZXBpc29kZVwiICsgYXJpc3RvdGxlLmVwaXNvZGVOdW0gKyBcIl9jaG9pY2VzXCIpO1xuICAgIGZvciAoaiA9IDAsIGxlbjEgPSByZWYubGVuZ3RoOyBqIDwgbGVuMTsgaisrKSB7XG4gICAgICBjaG9pY2UgPSByZWZbal07XG4gICAgICBjaG9pY2VzLnB1c2goY2hvaWNlLmlkKTtcbiAgICB9XG4gICAgcmV0dXJuIGFwaVByb3h5LmdldENob2ljZVBlcmNlbnRhZ2VzKGNob2ljZXMsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHJlc3VsdHMpIHtcbiAgICAgICAgdmFyIGNhdGVnb3J5LCBlcnJvciwgZXJyb3IxLCBrLCBsZW4yLCByZXN1bHRzMSwgc2VsZWN0aW9uLCB1c2VyQ2hvaWNlO1xuICAgICAgICBpZiAoIXJlc3VsdHMpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMuZGVjaXNpb25QZXJjZW50YWdlcyA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBfdGhpcy5kZWNpc2lvblBlcmNlbnRhZ2VzID0gW107XG4gICAgICAgICAgICByZXN1bHRzMSA9IFtdO1xuICAgICAgICAgICAgZm9yIChrID0gMCwgbGVuMiA9IHJlc3VsdHMubGVuZ3RoOyBrIDwgbGVuMjsgaysrKSB7XG4gICAgICAgICAgICAgIGNhdGVnb3J5ID0gcmVzdWx0c1trXTtcbiAgICAgICAgICAgICAgcmVzdWx0czEucHVzaCgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIGwsIGxlbjMsIHJlZjEsIHJlc3VsdHMyO1xuICAgICAgICAgICAgICAgIHJlZjEgPSBjYXRlZ29yeS5CcmVha2Rvd25zO1xuICAgICAgICAgICAgICAgIHJlc3VsdHMyID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChsID0gMCwgbGVuMyA9IHJlZjEubGVuZ3RoOyBsIDwgbGVuMzsgbCsrKSB7XG4gICAgICAgICAgICAgICAgICBzZWxlY3Rpb24gPSByZWYxW2xdO1xuICAgICAgICAgICAgICAgICAgcmVzdWx0czIucHVzaCgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsZW40LCBtLCByZWYyLCByZXN1bHRzMztcbiAgICAgICAgICAgICAgICAgICAgcmVmMiA9IGFyaXN0b3RsZS5nbG9iYWxzLmdldChcImVwaXNvZGVcIiArIGFyaXN0b3RsZS5lcGlzb2RlTnVtICsgXCJfY2hvaWNlc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0czMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChtID0gMCwgbGVuNCA9IHJlZjIubGVuZ3RoOyBtIDwgbGVuNDsgbSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdXNlckNob2ljZSA9IHJlZjJbbV07XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHVzZXJDaG9pY2UuY2hvaWNlID09PSBzZWxlY3Rpb24uU2VsZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzMy5wdXNoKHRoaXMuZGVjaXNpb25QZXJjZW50YWdlcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcG9wdWxhclBlcmNlbnRhZ2U6IE1hdGgucm91bmQoc2VsZWN0aW9uLlBlcmNlbnRPZlRvdGFsICogMTAwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2hvaWNlOiBzZWxlY3Rpb24uU2VsZWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRlZ29yeTogY2F0ZWdvcnkuQ2hvaWNlTmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRzMy5wdXNoKHZvaWQgMCk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHRzMztcbiAgICAgICAgICAgICAgICAgIH0pLmNhbGwodGhpcykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0czI7XG4gICAgICAgICAgICAgIH0pLmNhbGwoX3RoaXMpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHRzMTtcbiAgICAgICAgICB9IGNhdGNoIChlcnJvcjEpIHtcbiAgICAgICAgICAgIGVycm9yID0gZXJyb3IxO1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmRlY2lzaW9uUGVyY2VudGFnZXMgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9O1xuXG4gIFF1aXoucHJvdG90eXBlLmNyZWF0ZVF1aXogPSBmdW5jdGlvbigkZWwsIGRhdGEpIHtcbiAgICB2YXIgaSwgaiwgbGVuMSwgcXVlc3Rpb25EYXRhLCBxdWVzdGlvblZhbHVlLCBxdWVzdGlvbnMsIHJlZiwgdmFsdWU7XG4gICAgUHViU3ViLnB1Ymxpc2goJ21ldGEucXVpei5zdGFydCcpO1xuICAgIHF1ZXN0aW9ucyA9IFtdO1xuICAgIHF1ZXN0aW9uVmFsdWUgPSBkYXRhW1wicXVlc3Rpb24tdmFsdWVcIl07XG4gICAgcmVmID0gZGF0YS5xdWVzdGlvbnM7XG4gICAgZm9yIChpID0gaiA9IDAsIGxlbjEgPSByZWYubGVuZ3RoOyBqIDwgbGVuMTsgaSA9ICsraikge1xuICAgICAgcXVlc3Rpb25EYXRhID0gcmVmW2ldO1xuICAgICAgcXVlc3Rpb25EYXRhLmluZGV4ID0gaTtcbiAgICAgIHZhbHVlID0gcXVlc3Rpb25EYXRhLnZhbHVlICE9IG51bGwgPyBxdWVzdGlvbkRhdGEudmFsdWUgOiBxdWVzdGlvblZhbHVlO1xuICAgICAgcXVlc3Rpb25zLnB1c2gobmV3IFF1ZXN0aW9uKCRlbCwgcXVlc3Rpb25EYXRhLCB2YWx1ZSwgdGhpcy5vblF1ZXN0aW9uQW5zd2VyZWQpKTtcbiAgICB9XG4gICAgdGhpcy5xdWVzdGlvbnMgPSBuZXcgU2VxdWVuY2UocXVlc3Rpb25zKTtcbiAgICByZXR1cm4gdGhpcy5zaG93Q3VycmVudFF1ZXN0aW9uKCk7XG4gIH07XG5cbiAgUXVpei5wcm90b3R5cGUuc2hvd0N1cnJlbnRRdWVzdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuY3VycmVudFF1ZXN0aW9uID0gdGhpcy5xdWVzdGlvbnMuY3VycmVudEl0ZW0oKTtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50UXVlc3Rpb24uYnVpbGQoKTtcbiAgfTtcblxuICBRdWl6LnByb3RvdHlwZS5vblF1ZXN0aW9uQW5zd2VyZWQgPSBmdW5jdGlvbihjb21wbGV0ZWQpIHtcbiAgICBpZiAoY29tcGxldGVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5zaG93TmV4dCgpO1xuICAgIH1cbiAgfTtcblxuICBRdWl6LnByb3RvdHlwZS5vbk5leHRDbGljayA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaGlkZU5leHQoKTtcbiAgICB0aGlzLmN1cnJlbnRRdWVzdGlvbi5kZXN0cm95KCk7XG4gICAgaWYgKHRoaXMucXVlc3Rpb25zLmlzQXRMYXN0SXRlbSgpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zaG93UmVzdWx0cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnF1ZXN0aW9ucy5uZXh0KCk7XG4gICAgICByZXR1cm4gdGhpcy5zaG93Q3VycmVudFF1ZXN0aW9uKCk7XG4gICAgfVxuICB9O1xuXG4gIFF1aXoucHJvdG90eXBlLnNob3dOZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJG5leHRCdG4ucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7XG4gIH07XG5cbiAgUXVpei5wcm90b3R5cGUuaGlkZU5leHQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kbmV4dEJ0bi5hZGRDbGFzcyhcImhpZGRlblwiKTtcbiAgfTtcblxuICBRdWl6LnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuJG5vZGUucmVtb3ZlKCk7XG4gICAgdGhpcy5idWlsZCh0aGlzLmRhdGEpO1xuICAgIHRoaXMuJGVsLmFwcGVuZCh0aGlzLiRub2RlKTtcbiAgICByZXR1cm4gc2hhZG93SWNvbnNJbnN0YW5jZS5zdmdSZXBsYWNlV2l0aFN0cmluZyhweFN2Z0ljb25TdHJpbmcsIHRoaXMuJG5vZGUpO1xuICB9O1xuXG4gIFF1aXoucHJvdG90eXBlLnNob3dSZXN1bHRzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGRhdGE7XG4gICAgUHViU3ViLnB1Ymxpc2goJ21ldGEucXVpei5maW5pc2gnKTtcbiAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2JvZHktcXVpei1yZXN1bHRzJyk7XG4gICAgdGhpcy4kbm9kZS5yZW1vdmUoKTtcbiAgICBkYXRhID0gdGhpcy5nZXRSZXN1bHRzKCk7XG4gICAgdGhpcy4kbm9kZSA9ICQoamFkZVRlbXBsYXRlWydzbGlkZS11eC9jb21wb25lbnRzL3F1aXovcXVpei1yZXN1bHRzJ10odGhpcy5nZXRSZXN1bHRzKCkpKTtcbiAgICBzaGFkb3dJY29uc0luc3RhbmNlLnN2Z1JlcGxhY2VXaXRoU3RyaW5nKHB4U3ZnSWNvblN0cmluZywgdGhpcy4kbm9kZSk7XG4gICAgJChcIiNjb250aW51ZVwiLCB0aGlzLiRub2RlKS5vbihcImNsaWNrXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2JvZHktcXVpei1yZXN1bHRzJyk7XG4gICAgICAgIHJldHVybiBQdWJTdWIucHVibGlzaCgnc2xpZGVzLm5leHQtc2xpZGUnKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHJldHVybiB0aGlzLiRlbC5hcHBlbmQodGhpcy4kbm9kZSk7XG4gIH07XG5cbiAgUXVpei5wcm90b3R5cGUuZ2V0UmVzdWx0cyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhbnN3ZXJzLCBqLCBsZW4xLCBvYmosIHF1ZXN0aW9uLCByZWYsIHJlZjEsIHRvdGFsUG9pbnRzRWFybmVkLCB0b3RhbFBvaW50c1Bvc3NpYmxlO1xuICAgIG9iaiA9IHt9O1xuICAgIG9iai5lcGlzb2RlTnVtYmVyID0gYXJpc3RvdGxlLmVwaXNvZGVOdW07XG4gICAgdG90YWxQb2ludHNQb3NzaWJsZSA9IDA7XG4gICAgdG90YWxQb2ludHNFYXJuZWQgPSAwO1xuICAgIGFuc3dlcnMgPSBbXTtcbiAgICByZWYgPSB0aGlzLnF1ZXN0aW9ucy5pdGVtcztcbiAgICBmb3IgKGogPSAwLCBsZW4xID0gcmVmLmxlbmd0aDsgaiA8IGxlbjE7IGorKykge1xuICAgICAgcXVlc3Rpb24gPSByZWZbal07XG4gICAgICB0b3RhbFBvaW50c1Bvc3NpYmxlICs9IHF1ZXN0aW9uLnF1ZXN0aW9uVmFsdWU7XG4gICAgICB0b3RhbFBvaW50c0Vhcm5lZCArPSBxdWVzdGlvbi5wb2ludHNFYXJuZWQoKTtcbiAgICAgIGFuc3dlcnMucHVzaCh7XG4gICAgICAgIG5hbWU6IHF1ZXN0aW9uLmdldE5hbWUoKSxcbiAgICAgICAgc2NvcmU6IHF1ZXN0aW9uLmdldFNjb3JlKCksXG4gICAgICAgIGlzUGVyZmVjdDogcXVlc3Rpb24uaXNQZXJmZWN0KClcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5kZWNpc2lvblBlcmNlbnRhZ2VzID09IG51bGwpIHtcbiAgICAgIHRoaXMuZGVjaXNpb25QZXJjZW50YWdlcyA9IFtdO1xuICAgIH1cbiAgICByZWYxID0gdGhpcy5zcGxpdEFycmF5SW5IYWxmKGFuc3dlcnMpLCBvYmouYW5zd2VyczEgPSByZWYxWzBdLCBvYmouYW5zd2VyczIgPSByZWYxWzFdO1xuICAgIG9iai5zY29yZSA9IHRvdGFsUG9pbnRzRWFybmVkICsgXCIgLyBcIiArIHRvdGFsUG9pbnRzUG9zc2libGU7XG4gICAgb2JqLnNjb3JlUGVyY2VudGFnZSA9ICh0b3RhbFBvaW50c0Vhcm5lZCAvIHRvdGFsUG9pbnRzUG9zc2libGUpICogMTAwO1xuICAgIG9iai5kZWNpc2lvbnMgPSB0aGlzLmRlY2lzaW9uUGVyY2VudGFnZXM7XG4gICAgcmV0dXJuIG9iajtcbiAgfTtcblxuICBRdWl6LnByb3RvdHlwZS5zcGxpdEFycmF5SW5IYWxmID0gZnVuY3Rpb24oYXIpIHtcbiAgICB2YXIgbGVuO1xuICAgIGxlbiA9IE1hdGguY2VpbChhci5sZW5ndGggLyAyKTtcbiAgICByZXR1cm4gW2FyLnNsaWNlKDAsIGxlbiksIGFyLnNsaWNlKGxlbildO1xuICB9O1xuXG4gIHJldHVybiBRdWl6O1xuXG59KShDb21wb25lbnQpO1xuIiwidmFyIENvbXBvbmVudCwgU2VsZWN0aW9uRGlhbG9ndWUsXG4gIGV4dGVuZCA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoaGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfSxcbiAgaGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5Db21wb25lbnQgPSByZXF1aXJlKCdzbGlkZS11eC9jb21wb25lbnRzL2NvbXBvbmVudCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNlbGVjdGlvbkRpYWxvZ3VlID0gKGZ1bmN0aW9uKHN1cGVyQ2xhc3MpIHtcbiAgZXh0ZW5kKFNlbGVjdGlvbkRpYWxvZ3VlLCBzdXBlckNsYXNzKTtcblxuICBmdW5jdGlvbiBTZWxlY3Rpb25EaWFsb2d1ZSgkZWwsIGRhdGEpIHtcbiAgICB2YXIgJHJpZ2h0LCBqYWRlRGF0YTtcbiAgICBTZWxlY3Rpb25EaWFsb2d1ZS5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCBkYXRhKTtcbiAgICBpZiAoZGF0YS5tZXRhID09IG51bGwpIHtcbiAgICAgIGFyaXN0b3RsZVtcInRocm93XCJdKFwiU2VsZWN0aW9uIGRpYWxvZ3VlIGRvZXNuJ3QgaGF2ZSBhbnkgbWV0YSBkYXRhIVwiKTtcbiAgICB9XG4gICAgdGhpcy4kbm9kZSA9ICQoamFkZVRlbXBsYXRlWydzbGlkZS11eC9jb21wb25lbnRzL2RpYWxvZ3VlL3NlbGVjdGlvbi1kaWFsb2d1ZSddKCkpO1xuICAgIGphZGVEYXRhID0gdGhpcy5nZW5lcmF0ZUNvbmZpZ0RhdGEoZGF0YSk7XG4gICAgdGhpcy4kbGVmdCA9ICQoamFkZVRlbXBsYXRlWydzbGlkZS11eC9jb21wb25lbnRzL2RpYWxvZ3VlL2RpYWxvZ3VlLWRldGFpbHMnXShqYWRlRGF0YSkpO1xuICAgICRyaWdodCA9ICQoamFkZVRlbXBsYXRlWydzbGlkZS11eC9jb21wb25lbnRzL2RpYWxvZ3VlL2RpYWxvZ3VlLWJ1dHRvbnMnXShqYWRlRGF0YSkpO1xuICAgIHRoaXMuJGxlZnQuYWRkQ2xhc3MoXCJoaWRkZW5cIik7XG4gICAgdGhpcy4kbm9kZS5hcHBlbmQodGhpcy4kbGVmdCk7XG4gICAgdGhpcy4kbm9kZS5hcHBlbmQoJHJpZ2h0KTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKHRoaXMuJG5vZGUsIGRhdGEpO1xuICAgIHRoaXMubWV0YVRpdGxlID0gZGF0YS5tZXRhLnRpdGxlO1xuICAgIGlmICh0aGlzLm1ldGFUaXRsZSA9PT0gJ2Zha2UnKSB7XG4gICAgICB0aGlzLiRub2RlLmNzcyh7XG4gICAgICAgIFwicG9pbnRlci1ldmVudHNcIjogXCJub25lXCJcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBQdWJTdWIucHVibGlzaCgnbWV0YS5jaG9pY2Uuc3RhcnQnLCB7XG4gICAgICAgIGlkOiBkYXRhLm1ldGEudGl0bGVcbiAgICAgIH0pO1xuICAgIH1cbiAgICB0aGlzLnN1cGVySW5pdCgkZWwsIHRoaXMuJG5vZGUsIGRhdGEpO1xuICB9XG5cbiAgU2VsZWN0aW9uRGlhbG9ndWUucHJvdG90eXBlLmdlbmVyYXRlQ29uZmlnRGF0YSA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2YXIgaSwgaXRlbSwgaiwgamFkZURhdGEsIGxlbiwgcmVmO1xuICAgIHRoaXMuaXRlbXMgPSB7fTtcbiAgICBqYWRlRGF0YSA9IHt9O1xuICAgIGphZGVEYXRhLnRpdGxlID0gZGF0YS50aXRsZTtcbiAgICBqYWRlRGF0YS5zdWJUaXRsZSA9IGRhdGEuc3ViVGl0bGU7XG4gICAgamFkZURhdGEuYnRuVHh0ID0gZGF0YS5zdWJtaXRCdG4udHh0O1xuICAgIGphZGVEYXRhLmJ0bkljb24gPSBkYXRhLnN1Ym1pdEJ0bi5pY29uO1xuICAgIGphZGVEYXRhLmludHJvID0gZGF0YS5pbnRybztcbiAgICBqYWRlRGF0YS5pdGVtcyA9IFtdO1xuICAgIHJlZiA9IGRhdGEuaXRlbXM7XG4gICAgZm9yIChpID0gaiA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGogPCBsZW47IGkgPSArK2opIHtcbiAgICAgIGl0ZW0gPSByZWZbaV07XG4gICAgICBpdGVtLmlkID0gXCJpdGVtXCIgKyBpO1xuICAgICAgamFkZURhdGEuaXRlbXMucHVzaCh7XG4gICAgICAgIHR4dDogaXRlbS5idG5UeHQsXG4gICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICBpY29uOiBpdGVtLmljb25cbiAgICAgIH0pO1xuICAgICAgdGhpcy5pdGVtc1tpdGVtLmlkXSA9IGl0ZW07XG4gICAgfVxuICAgIHJldHVybiBqYWRlRGF0YTtcbiAgfTtcblxuICBTZWxlY3Rpb25EaWFsb2d1ZS5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbigkZWwsIGRhdGEpIHtcbiAgICB2YXIgJGJ1dHRvbnM7XG4gICAgJGJ1dHRvbnMgPSAkKFwiLmJ1dHRvblwiLCAkZWwpO1xuICAgICRidXR0b25zLm9uKFwiY2xpY2tcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgICB2YXIgJHRhcmc7XG4gICAgICAgICR0YXJnID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICByZXR1cm4gX3RoaXMuYWN0aXZhdGVJdGVtKCR0YXJnLCBfdGhpcy5pdGVtc1skdGFyZy5hdHRyKCdpZCcpXSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICByZXR1cm4gJChcIiNhY3Rpb24tYnRuXCIsICRlbCkub24oXCJjbGlja1wiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICAgIGFyaXN0b3RsZS5jb21tYW5kZXJbXCJkb1wiXShkYXRhLmNsaWNrKTtcbiAgICAgICAgUHViU3ViLnB1Ymxpc2goJ21ldGEuY2hvaWNlLmZpbmlzaCcsIHtcbiAgICAgICAgICBpZDogZGF0YS5tZXRhLnRpdGxlLFxuICAgICAgICAgIGNob2ljZTogYXJpc3RvdGxlLmRpY3Rpb25hcnkuZ2V0KGFyaXN0b3RsZS5nbG9iYWxzLmdldChkYXRhLm1ldGEuY2hvaWNlKSlcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBfdGhpcy5kZXN0cm95KCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgfTtcblxuICBTZWxlY3Rpb25EaWFsb2d1ZS5wcm90b3R5cGUuYWN0aXZhdGVJdGVtID0gZnVuY3Rpb24oJGJ1dHRvbiwgaXRlbSkge1xuICAgIGlmICh0aGlzLmFjdGl2ZUl0ZW0gPT09IGl0ZW0uYnRuVHh0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuYWN0aXZlSXRlbSA9IGl0ZW0uYnRuVHh0O1xuICAgIFB1YlN1Yi5wdWJsaXNoKCdtZXRhLmFjdGl2aXR5Jywge1xuICAgICAgYWN0aXZpdHk6IFwiQ2xpY2sgXCIgKyBpdGVtLmJ0blR4dCxcbiAgICAgIGlkOiB0aGlzLm1ldGFUaXRsZVxuICAgIH0pO1xuICAgIHRoaXMuJGxlZnQucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7XG4gICAgJChcIi5pdGVtLWluZm9cIiwgdGhpcy4kbm9kZSkuY3NzKHtcbiAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIlxuICAgIH0pO1xuICAgICQoXCIuYnV0dG9uXCIsIHRoaXMuJG5vZGUpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICRidXR0b24uYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgJChcIi5pY29uXCIsIHRoaXMuJG5vZGUpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICQoXCIjaWNvbi1cIiArIGl0ZW0uaWQsIHRoaXMuJG5vZGUpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgICQoXCIuYmx1cmJcIiwgdGhpcy4kbm9kZSkuaHRtbChpdGVtLmJsdXJiKTtcbiAgICAkKFwiLmRldGFpbHNcIiwgdGhpcy4kbm9kZSkuaHRtbChpdGVtLmRldGFpbHMpO1xuICAgICQoXCIucXVvdGVcIiwgdGhpcy4kbm9kZSkuaHRtbChpdGVtLnF1b3RlKTtcbiAgICByZXR1cm4gYXJpc3RvdGxlLmNvbW1hbmRlcltcImRvXCJdKGl0ZW0uY2xpY2spO1xuICB9O1xuXG4gIHJldHVybiBTZWxlY3Rpb25EaWFsb2d1ZTtcblxufSkoQ29tcG9uZW50KTtcbiIsInZhciBDb21wb25lbnQsIFNpbXBsZVNlbGVjdGlvbixcbiAgZXh0ZW5kID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChoYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9LFxuICBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbkNvbXBvbmVudCA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvY29tcG9uZW50Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2ltcGxlU2VsZWN0aW9uID0gKGZ1bmN0aW9uKHN1cGVyQ2xhc3MpIHtcbiAgZXh0ZW5kKFNpbXBsZVNlbGVjdGlvbiwgc3VwZXJDbGFzcyk7XG5cbiAgZnVuY3Rpb24gU2ltcGxlU2VsZWN0aW9uKCRlbCwgZGF0YSkge1xuICAgIHZhciAkcmlnaHQsIGphZGVEYXRhO1xuICAgIFNpbXBsZVNlbGVjdGlvbi5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCBkYXRhKTtcbiAgICBqYWRlRGF0YSA9IHRoaXMuZ2VuZXJhdGVDb25maWdEYXRhKGRhdGEpO1xuICAgIHRoaXMuJG5vZGUgPSAkKGphZGVUZW1wbGF0ZVsnc2xpZGUtdXgvY29tcG9uZW50cy9kaWFsb2d1ZS9zZWxlY3Rpb24tZGlhbG9ndWUnXSgpKTtcbiAgICAkcmlnaHQgPSAkKGphZGVUZW1wbGF0ZVsnc2xpZGUtdXgvY29tcG9uZW50cy9kaWFsb2d1ZS9kaWFsb2d1ZS1idXR0b25zJ10oamFkZURhdGEpKTtcbiAgICB0aGlzLiRub2RlLmFwcGVuZCgkcmlnaHQpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnModGhpcy4kbm9kZSwgZGF0YSk7XG4gICAgdGhpcy5zdXBlckluaXQoJGVsLCB0aGlzLiRub2RlLCBkYXRhKTtcbiAgfVxuXG4gIFNpbXBsZVNlbGVjdGlvbi5wcm90b3R5cGUuZ2VuZXJhdGVDb25maWdEYXRhID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciBpLCBpdGVtLCBqLCBqYWRlRGF0YSwgbGVuLCByZWY7XG4gICAgdGhpcy5pdGVtcyA9IHt9O1xuICAgIGphZGVEYXRhID0ge307XG4gICAgamFkZURhdGEuaXRlbXMgPSBbXTtcbiAgICBqYWRlRGF0YS50aXRsZSA9IGRhdGEudGl0bGU7XG4gICAgamFkZURhdGEuc3ViVGl0bGUgPSBkYXRhLnN1YlRpdGxlO1xuICAgIHJlZiA9IGRhdGEuaXRlbXM7XG4gICAgZm9yIChpID0gaiA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGogPCBsZW47IGkgPSArK2opIHtcbiAgICAgIGl0ZW0gPSByZWZbaV07XG4gICAgICBpdGVtLmlkID0gXCJpdGVtXCIgKyBpO1xuICAgICAgamFkZURhdGEuaXRlbXMucHVzaCh7XG4gICAgICAgIHR4dDogaXRlbS5idG5UeHQsXG4gICAgICAgIGlkOiBpdGVtLmlkXG4gICAgICB9KTtcbiAgICAgIHRoaXMuaXRlbXNbaXRlbS5pZF0gPSBpdGVtO1xuICAgIH1cbiAgICByZXR1cm4gamFkZURhdGE7XG4gIH07XG5cbiAgU2ltcGxlU2VsZWN0aW9uLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVycyA9IGZ1bmN0aW9uKCRlbCwgZGF0YSkge1xuICAgIHZhciAkYnV0dG9ucztcbiAgICAkYnV0dG9ucyA9ICQoXCIuYnV0dG9uXCIsICRlbCk7XG4gICAgcmV0dXJuICRidXR0b25zLm9uKFwiY2xpY2tcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgICB2YXIgJHRhcmc7XG4gICAgICAgICR0YXJnID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICBkYXRhID0gX3RoaXMuaXRlbXNbJHRhcmcuYXR0cignaWQnKV07XG4gICAgICAgIHJldHVybiBhcmlzdG90bGUuY29tbWFuZGVyW1wiZG9cIl0oZGF0YS5jbGljayk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgfTtcblxuICByZXR1cm4gU2ltcGxlU2VsZWN0aW9uO1xuXG59KShDb21wb25lbnQpO1xuIiwidmFyIENvbXBvbmVudCwgU291bmRUZXN0LFxuICBleHRlbmQgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKGhhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH0sXG4gIGhhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuQ29tcG9uZW50ID0gcmVxdWlyZSgnc2xpZGUtdXgvY29tcG9uZW50cy9jb21wb25lbnQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTb3VuZFRlc3QgPSAoZnVuY3Rpb24oc3VwZXJDbGFzcykge1xuICBleHRlbmQoU291bmRUZXN0LCBzdXBlckNsYXNzKTtcblxuICBmdW5jdGlvbiBTb3VuZFRlc3QoJGVsLCBkYXRhKSB7XG4gICAgU291bmRUZXN0Ll9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIGRhdGEpO1xuICAgIHRoaXMuJG5vZGUgPSAkKGphZGVUZW1wbGF0ZVsnc2xpZGUtdXgvY29tcG9uZW50cy9zb3VuZC10ZXN0J10oZGF0YSkpO1xuICAgIHRoaXMuc3VwZXJJbml0KCRlbCwgdGhpcy4kbm9kZSwgZGF0YSk7XG4gICAgJChcIiNzb3VuZC10ZXN0XCIsIHRoaXMuJG5vZGUpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oZSkge1xuICAgICAgUHViU3ViLnB1Ymxpc2goJ3BsYXlzb3VuZCcsIHtcbiAgICAgICAgY29udGVudDogZGF0YS5zb3VuZFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gUHViU3ViLnB1Ymxpc2goJ21ldGEuYWN0aXZpdHknLCB7XG4gICAgICAgIGFjdGl2aXR5OiBcIlBsYXkgVGVzdCBTb3VuZFwiXG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIFNvdW5kVGVzdC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIFB1YlN1Yi51bnN1YnNjcmliZSh0aGlzLnNvdW5kTGlzdGVuKTtcbiAgICByZXR1cm4gU291bmRUZXN0Ll9fc3VwZXJfXy5kZXN0cm95LmNhbGwodGhpcyk7XG4gIH07XG5cbiAgcmV0dXJuIFNvdW5kVGVzdDtcblxufSkoQ29tcG9uZW50KTtcbiIsInZhciBDb21wb25lbnQsIFRyYWluaW5nQ29tcGxldGUsXG4gIGV4dGVuZCA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoaGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfSxcbiAgaGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5Db21wb25lbnQgPSByZXF1aXJlKCdzbGlkZS11eC9jb21wb25lbnRzL2NvbXBvbmVudCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRyYWluaW5nQ29tcGxldGUgPSAoZnVuY3Rpb24oc3VwZXJDbGFzcykge1xuICBleHRlbmQoVHJhaW5pbmdDb21wbGV0ZSwgc3VwZXJDbGFzcyk7XG5cbiAgZnVuY3Rpb24gVHJhaW5pbmdDb21wbGV0ZSgkZWwsIGRhdGEpIHtcbiAgICBUcmFpbmluZ0NvbXBsZXRlLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIGRhdGEpO1xuICAgIHRoaXMuJG5vZGUgPSAkKGphZGVUZW1wbGF0ZVsnc2xpZGUtdXgvY29tcG9uZW50cy90cmFpbmluZy1jb21wbGV0ZSddKHt9KSk7XG4gICAgJGVsLmFwcGVuZCh0aGlzLiRub2RlKTtcbiAgICB0aGlzLnN1cGVySW5pdCgkZWwsIHRoaXMuJG5vZGUsIGRhdGEpO1xuICB9XG5cbiAgcmV0dXJuIFRyYWluaW5nQ29tcGxldGU7XG5cbn0pKENvbXBvbmVudCk7XG4iLCJ2YXIgQ2xvc2VkQ2FwdGlvbjtcblxubW9kdWxlLmV4cG9ydHMgPSBDbG9zZWRDYXB0aW9uID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBDbG9zZWRDYXB0aW9uKCRwYXJlbnQsIHBsYXlOZXh0QWN0aW9uKSB7XG4gICAgdmFyIGNjV2FzT24sIHRva2VuNywgdG9rZW44O1xuICAgIHRoaXMucGxheU5leHRBY3Rpb24gPSBwbGF5TmV4dEFjdGlvbjtcbiAgICB0aGlzLiRlbCA9ICQoamFkZVRlbXBsYXRlWydzbGlkZS11eC90ZXh0LWRpYWxvZ3VlL2Nsb3NlZC1jYXB0aW9uJ10oe30pKTtcbiAgICAkcGFyZW50LmFwcGVuZCh0aGlzLiRlbCk7XG4gICAgc2hhZG93SWNvbnNJbnN0YW5jZS5zdmdSZXBsYWNlV2l0aFN0cmluZyhweFN2Z0ljb25TdHJpbmcsIHRoaXMuJGVsKTtcbiAgICB0b2tlbjcgPSBQdWJTdWIuc3Vic2NyaWJlKCdjYy5vbicsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGEsIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmVuYWJsZUNjKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0b2tlbjggPSBQdWJTdWIuc3Vic2NyaWJlKCdjYy5vZmYnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihhLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5kaXNhYmxlQ2MoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRoaXMuY2NEaXNwbGF5ID0gJChcIi5jbG9zZWQtY2FwdGlvblwiLCB0aGlzLiRlbCk7XG4gICAgdGhpcy4kc3BlZWNoQm94ID0gJChcIi50ZXh0XCIsIHRoaXMuJGVsKTtcbiAgICB0aGlzLmhpZGVUZXh0KCk7XG4gICAgdGhpcy4kaWNvbiA9ICQoXCIuY2xvc2VkLWNhcHRpb24taWNvblwiKTtcbiAgICB0aGlzLiRpY29uLm9uKCdjbGljaycsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnRvZ2dsZUNsb3NlZENhcHRpb25pbmcoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIGNjV2FzT24gPSBhcmlzdG90bGUuZ2xvYmFscy5nZXQoJ2NjSXNPbicsIGZhbHNlKTtcbiAgICBpZiAoY2NXYXNPbiAhPSBudWxsKSB7XG4gICAgICBpZiAoIWNjV2FzT24pIHtcbiAgICAgICAgdGhpcy50dXJuQ2NPZmYoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudHVybkNjT24oKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50dXJuQ2NPbigpO1xuICAgIH1cbiAgfVxuXG4gIENsb3NlZENhcHRpb24ucHJvdG90eXBlLnRvZ2dsZUNsb3NlZENhcHRpb25pbmcgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5jY0lzT24pIHtcbiAgICAgIHRoaXMudHVybkNjT2ZmKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudHVybkNjT24oKTtcbiAgICB9XG4gICAgcmV0dXJuIGFyaXN0b3RsZS5nbG9iYWxzLnNldChcImNjSXNPblwiLCB0aGlzLmNjSXNPbik7XG4gIH07XG5cbiAgQ2xvc2VkQ2FwdGlvbi5wcm90b3R5cGUudHVybkNjT2ZmID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5jY0lzT24gPSBmYWxzZTtcbiAgICB0aGlzLiRpY29uLmFkZENsYXNzKCdvZmYnKTtcbiAgICByZXR1cm4gUHViU3ViLnB1Ymxpc2goJ2NjLm9mZicpO1xuICB9O1xuXG4gIENsb3NlZENhcHRpb24ucHJvdG90eXBlLnR1cm5DY09uID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5jY0lzT24gPSB0cnVlO1xuICAgIHRoaXMuJGljb24ucmVtb3ZlQ2xhc3MoJ29mZicpO1xuICAgIHJldHVybiBQdWJTdWIucHVibGlzaCgnY2Mub24nKTtcbiAgfTtcblxuICBDbG9zZWRDYXB0aW9uLnByb3RvdHlwZS5zYXkgPSBmdW5jdGlvbih0ZXh0LCB0eHRQb3MpIHtcbiAgICB0aGlzLnNob3dUZXh0KCk7XG4gICAgcmV0dXJuIHRoaXMuJHNwZWVjaEJveC5odG1sKFwiPGRpdiBjbGFzcz0nXCIgKyB0aGlzLmNoYXJhY3RlciArIFwiJz48c3Bhbj5cIiArIHRoaXMuY2hhcmFjdGVyICsgXCI8L3NwYW4+XCIgKyB0ZXh0ICsgXCI8L2Rpdj5cIik7XG4gIH07XG5cbiAgQ2xvc2VkQ2FwdGlvbi5wcm90b3R5cGUuc3BlY2lhbCA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBpZiAoZGF0YS5hY3RvciAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5jaGFyYWN0ZXIgPSBkYXRhLmFjdG9yO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5jaGFyYWN0ZXIgPSAnY3RhbmxlZSc7XG4gICAgfVxuICB9O1xuXG4gIENsb3NlZENhcHRpb24ucHJvdG90eXBlLnNob3dUZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY2NEaXNwbGF5LnJlbW92ZUNsYXNzKFwiaGlkZGVuXCIpO1xuICB9O1xuXG4gIENsb3NlZENhcHRpb24ucHJvdG90eXBlLmhpZGVUZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY2NEaXNwbGF5LmFkZENsYXNzKFwiaGlkZGVuXCIpO1xuICB9O1xuXG4gIENsb3NlZENhcHRpb24ucHJvdG90eXBlLmVuYWJsZUNjID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY2NEaXNwbGF5LnJlbW92ZUNsYXNzKFwiZGlzYWJsZWRcIik7XG4gIH07XG5cbiAgQ2xvc2VkQ2FwdGlvbi5wcm90b3R5cGUuZGlzYWJsZUNjID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY2NEaXNwbGF5LmFkZENsYXNzKFwiZGlzYWJsZWRcIik7XG4gIH07XG5cbiAgQ2xvc2VkQ2FwdGlvbi5wcm90b3R5cGUuc2hvd05leHQgPSBmdW5jdGlvbigpIHt9O1xuXG4gIENsb3NlZENhcHRpb24ucHJvdG90eXBlLmhpZGVOZXh0ID0gZnVuY3Rpb24oKSB7fTtcblxuICBDbG9zZWRDYXB0aW9uLnByb3RvdHlwZS5zdGFydFRhbGtpbmcgPSBmdW5jdGlvbigpIHt9O1xuXG4gIENsb3NlZENhcHRpb24ucHJvdG90eXBlLnN0b3BUYWxraW5nID0gZnVuY3Rpb24oKSB7fTtcblxuICBDbG9zZWRDYXB0aW9uLnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnNsZWVwKCk7XG4gIH07XG5cbiAgQ2xvc2VkQ2FwdGlvbi5wcm90b3R5cGUuc2xlZXAgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5oaWRlVGV4dCgpO1xuICB9O1xuXG4gIENsb3NlZENhcHRpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHt9O1xuXG4gIHJldHVybiBDbG9zZWRDYXB0aW9uO1xuXG59KSgpO1xuIiwidmFyIEFuaW1hdGlvbiwgQ3RhbmxlZTtcblxuQW5pbWF0aW9uID0gcmVxdWlyZSgnbW92aWUvc3ZnLWFuaW1hdGlvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEN0YW5sZWUgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIEN0YW5sZWUoJHBhcmVudCwgcGxheU5leHRBY3Rpb24pIHtcbiAgICB2YXIgdG9rZW4xLCB0b2tlbjIsIHRva2VuMywgdG9rZW40LCB0b2tlbjUsIHRva2VuNiwgdG9rZW43LCB0b2tlbjg7XG4gICAgdGhpcy5wbGF5TmV4dEFjdGlvbiA9IHBsYXlOZXh0QWN0aW9uO1xuICAgIHRoaXMuJGVsID0gJChqYWRlVGVtcGxhdGVbJ3NsaWRlLXV4L3RleHQtZGlhbG9ndWUvY3RhbmxlZSddKHt9KSk7XG4gICAgc2hhZG93SWNvbnNJbnN0YW5jZS5zdmdSZXBsYWNlV2l0aFN0cmluZyhweFN2Z0ljb25TdHJpbmcsIHRoaXMuJGVsKTtcbiAgICB0aGlzLiRzcGVlY2hCb3ggPSAkKFwiLnNwZWVjaC1ib3hcIiwgdGhpcy4kZWwpO1xuICAgIHRoaXMuJHRleHQgPSAkKFwiLnRleHRcIiwgdGhpcy4kc3BlZWNoQm94KTtcbiAgICB0aGlzLiR0ZXh0Q29udGVudCA9ICQoXCJzcGFuLmNvbnRlbnRcIiwgdGhpcy4kdGV4dCk7XG4gICAgdGhpcy4kbmV4dEJ0biA9ICQoXCJzcGFuLm5leHRcIiwgdGhpcy4kdGV4dCk7XG4gICAgdGhpcy4kZmFjZUhvbGRlciA9ICQoXCIuZmFjZVwiLCB0aGlzLiRlbCk7XG4gICAgdGhpcy4kbmV4dEJ0bi5vbihcImNsaWNrXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnBsYXlOZXh0QWN0aW9uKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0b2tlbjEgPSBQdWJTdWIuc3Vic2NyaWJlKCdjdGFubGVlLmhpZGUnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihhLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy4kZWwuYWRkQ2xhc3MoXCJoaWRkZW5cIik7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0b2tlbjIgPSBQdWJTdWIuc3Vic2NyaWJlKCdjdGFubGVlLnNob3cnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihhLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy4kZWwucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0b2tlbjMgPSBQdWJTdWIuc3Vic2NyaWJlKCdjdGFubGVlLmNsZWFyJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oYSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuaGlkZVRleHQoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRva2VuNCA9IFB1YlN1Yi5zdWJzY3JpYmUoJ2N0YW5sZWUuZ29ob21lJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oYSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMucmV0dXJuVG9TdGF0aW9uKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0b2tlbjUgPSBQdWJTdWIuc3Vic2NyaWJlKCdjdGFubGVlLmdvdG8nLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihhLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5nb3RvKGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgdG9rZW42ID0gUHViU3ViLnN1YnNjcmliZSgnY3RhbmxlZS5zdG9wJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oYSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuJGZhY2VIb2xkZXIudmVsb2NpdHkoXCJzdG9wXCIsIHRydWUpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgdG9rZW43ID0gUHViU3ViLnN1YnNjcmliZSgnY2Mub24nLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihhLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5lbmFibGVDYygpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgdG9rZW44ID0gUHViU3ViLnN1YnNjcmliZSgnY2Mub2ZmJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oYSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuZGlzYWJsZUNjKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0aGlzLnRva2VucyA9IFt0b2tlbjEsIHRva2VuMiwgdG9rZW4zLCB0b2tlbjQsIHRva2VuNSwgdG9rZW42LCB0b2tlbjcsIHRva2VuOF07XG4gICAgJHBhcmVudC5hcHBlbmQodGhpcy4kZWwpO1xuICAgIHRoaXMucmV0dXJuVG9TdGF0aW9uKCk7XG4gIH1cblxuICBDdGFubGVlLnByb3RvdHlwZS5zYXkgPSBmdW5jdGlvbih0ZXh0LCB0eHRQb3MsIHBvcykge1xuICAgIHRoaXMuc2hvd1RleHQoKTtcbiAgICB0aGlzLiR0ZXh0Q29udGVudC5odG1sKHRleHQpO1xuICAgIHJldHVybiB0aGlzLnNldFRleHRQb3NpdGlvbih0eHRQb3MpO1xuICB9O1xuXG4gIEN0YW5sZWUucHJvdG90eXBlLnN0YXJ0VGFsa2luZyA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaXNUYWxraW5nID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcy5ib3VuY2UoKTtcbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5zdG9wVGFsa2luZyA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaXNUYWxraW5nID0gZmFsc2U7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgdGhpcy4kY3VycmVudEFuaW1EaXYuc3RvcCh0cnVlKTtcbiAgICByZXR1cm4gdGhpcy4kY3VycmVudEFuaW1EaXYudmVsb2NpdHkoe1xuICAgICAgc2NhbGU6IDFcbiAgICB9LCB7XG4gICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgZWFzaW5nOiAnZWFzZWlub3V0cXVpbnQnXG4gICAgfSk7XG4gIH07XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUuYm91bmNlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGR1cmF0aW9uLCB0aW1vdXREdXI7XG4gICAgZHVyYXRpb24gPSA1MDAgKyBNYXRoLnJhbmRvbSgpICogMzAwO1xuICAgIHRpbW91dER1ciA9IGR1cmF0aW9uICogKE1hdGgucmFuZG9tKCkgLyAxLjMpO1xuICAgIGlmIChNYXRoLnJhbmRvbSgpID4gMC44KSB7XG4gICAgICB0aW1vdXREdXIgKz0gNjAwO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHNjYWxlO1xuICAgICAgICBzY2FsZSA9IDAuOCArIChNYXRoLnJhbmRvbSgpIC8gMyk7XG4gICAgICAgIF90aGlzLiRjdXJyZW50QW5pbURpdi5zdG9wKHRydWUpO1xuICAgICAgICBfdGhpcy4kY3VycmVudEFuaW1EaXYuY3NzKHtcbiAgICAgICAgICB0cmFuc2Zvcm06IFwic2NhbGUoXCIgKyBzY2FsZSArIFwiKVwiXG4gICAgICAgIH0pO1xuICAgICAgICBfdGhpcy4kY3VycmVudEFuaW1EaXYudmVsb2NpdHkoe1xuICAgICAgICAgIHNjYWxlOiBzY2FsZVxuICAgICAgICB9LCB7XG4gICAgICAgICAgZHVyYXRpb246IDBcbiAgICAgICAgfSk7XG4gICAgICAgIF90aGlzLiRjdXJyZW50QW5pbURpdi52ZWxvY2l0eSh7XG4gICAgICAgICAgc2NhbGU6IDFcbiAgICAgICAgfSwge1xuICAgICAgICAgIGRlbGF5OiAxMCxcbiAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgICAgZWFzaW5nOiBbNTAwLCAxNV1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChfdGhpcy5pc1RhbGtpbmcpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMuYm91bmNlKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSkodGhpcyksIHRpbW91dER1cik7XG4gIH07XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUuc3BlY2lhbCA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBpZiAoZGF0YS5wb3MgIT0gbnVsbCkge1xuICAgICAgdGhpcy5nb3RvKGRhdGEpO1xuICAgIH1cbiAgICBpZiAoKGRhdGEuZW1vICE9IG51bGwpIHx8ICh0aGlzLiRjdXJyZW50QW5pbURpdiA9PSBudWxsKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0RW1vdGlvbihkYXRhLmVtbyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnNldEVtb3Rpb24oXCJpZGxlXCIpO1xuICAgIH1cbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5zaG93VGV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRzcGVlY2hCb3gucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7XG4gIH07XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUuaGlkZVRleHQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kc3BlZWNoQm94LmFkZENsYXNzKFwiaGlkZGVuXCIpO1xuICB9O1xuXG4gIEN0YW5sZWUucHJvdG90eXBlLnNob3dOZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJG5leHRCdG4ucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7XG4gIH07XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUuaGlkZU5leHQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kbmV4dEJ0bi5hZGRDbGFzcyhcImhpZGRlblwiKTtcbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5lbmFibGVDYyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRzcGVlY2hCb3gucmVtb3ZlQ2xhc3MoXCJkaXNhYmxlZFwiKTtcbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5kaXNhYmxlQ2MgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kc3BlZWNoQm94LmFkZENsYXNzKFwiZGlzYWJsZWRcIik7XG4gIH07XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yZXR1cm5Ub1N0YXRpb24oKTtcbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5zbGVlcCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnJldHVyblRvU3RhdGlvbigpO1xuICB9O1xuXG4gIEN0YW5sZWUucHJvdG90eXBlLnNldEVtb3Rpb24gPSBmdW5jdGlvbihlbW90aW9uKSB7XG4gICAgdmFyIGRhdGEsIHBhdGgsIHJlc2V0RHVyYXRpb247XG4gICAgcmVzZXREdXJhdGlvbiA9IDEwMDtcbiAgICB0aGlzLnJlc2V0Um90YXRpb24ocmVzZXREdXJhdGlvbik7XG4gICAgdGhpcy4kb2xkQW5pbURpdiA9IHRoaXMuJGN1cnJlbnRBbmltRGl2O1xuICAgIHRoaXMuJGN1cnJlbnRBbmltRGl2ID0gJCgnPGRpdiBjbGFzcz1cImFuaW1hdGlvblwiLz4nKTtcbiAgICB0aGlzLiRmYWNlSG9sZGVyLmFwcGVuZCh0aGlzLiRjdXJyZW50QW5pbURpdik7XG4gICAgc3dpdGNoIChlbW90aW9uKSB7XG4gICAgICBjYXNlIFwiYW5ncnlcIjpcbiAgICAgICAgcGF0aCA9ICdjdGFubGVlLWFuZ3J5Lmpzb24nO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJoYXBweVwiOlxuICAgICAgICBwYXRoID0gJ2N0YW5sZWUtaGFwcHkuanNvbic7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImlkbGVcIjpcbiAgICAgICAgcGF0aCA9ICdjdGFubGVlLWlkbGUuanNvbic7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImRvd25cIjpcbiAgICAgICAgcGF0aCA9ICdjdGFubGVlLWxvb2stZG93bi5qc29uJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwibGVmdFwiOlxuICAgICAgICBwYXRoID0gJ2N0YW5sZWUtbG9vay1sZWZ0Lmpzb24nO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICBwYXRoID0gJ2N0YW5sZWUtbG9vay1yaWdodC5qc29uJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwic3VycHJpc2VcIjpcbiAgICAgICAgcGF0aCA9ICdjdGFubGVlLXN1cnByaXNlLmpzb24nO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJ1bmhhcHB5XCI6XG4gICAgICAgIHBhdGggPSAnY3RhbmxlZS11bmhhcHB5Lmpzb24nO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHBhdGggPSAnY3RhbmxlZS1pZGxlLmpzb24nO1xuICAgIH1cbiAgICBwYXRoID0gYXJpc3RvdGxlLmdldEFzc2V0UGF0aChcIn5nL2N0YW5sZWUvXCIgKyBwYXRoKTtcbiAgICB0aGlzLm9sZEFuaW1hdGlvbiA9IHRoaXMuYW5pbWF0aW9uO1xuICAgIGRhdGEgPSB7XG4gICAgICBkZWxheTogcmVzZXREdXJhdGlvbixcbiAgICAgIG5hdGl2ZUV2ZW50czoge1xuICAgICAgICBkYXRhX3JlYWR5OiAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuZGVzdHJveU9sZEZhY2UoKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KSh0aGlzKSxcbiAgICAgICAgY29tcGxldGU6IChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5pZGxlKCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSkodGhpcylcbiAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiB0aGlzLmFuaW1hdGlvbiA9IG5ldyBBbmltYXRpb24odGhpcy4kY3VycmVudEFuaW1EaXYsIHBhdGgsIGRhdGEpO1xuICB9O1xuXG4gIEN0YW5sZWUucHJvdG90eXBlLmRlc3Ryb3lPbGRGYWNlID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMub2xkQW5pbWF0aW9uICE9IG51bGwpIHtcbiAgICAgIHRoaXMub2xkQW5pbWF0aW9uLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuJG9sZEFuaW1EaXYucmVtb3ZlKCk7XG4gICAgICB0aGlzLiRvbGRBbmltRGl2ID0gbnVsbDtcbiAgICAgIHJldHVybiB0aGlzLm9sZEFuaW1hdGlvbiA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIEN0YW5sZWUucHJvdG90eXBlLnJlc2V0Um90YXRpb24gPSBmdW5jdGlvbih0aW1lKSB7XG4gICAgaWYgKHRpbWUgPT0gbnVsbCkge1xuICAgICAgdGltZSA9IDEwMDtcbiAgICB9XG4gICAgdGhpcy4kZmFjZUhvbGRlci52ZWxvY2l0eShcInN0b3BcIiwgdHJ1ZSk7XG4gICAgcmV0dXJuIHRoaXMuJGZhY2VIb2xkZXIudmVsb2NpdHkoe1xuICAgICAgcm90YXRlWjogMFxuICAgIH0sIHtcbiAgICAgIGR1cmF0aW9uOiB0aW1lXG4gICAgfSk7XG4gIH07XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUuaWRsZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRmYWNlSG9sZGVyLnZlbG9jaXR5KHtcbiAgICAgIHJvdGF0ZVo6IDM2MFxuICAgIH0sIHtcbiAgICAgIGR1cmF0aW9uOiAxMDAwMCxcbiAgICAgIGxvb3A6IHRydWUsXG4gICAgICBlYXNpbmc6ICdsaW5lYXInXG4gICAgfSk7XG4gIH07XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUuZ290b1BvcyA9IGZ1bmN0aW9uKHgsIHksIGR1cmF0aW9uLCBkZWxheSkge1xuICAgIGlmICh4ID09IG51bGwpIHtcbiAgICAgIHggPSA5ODg7XG4gICAgfVxuICAgIGlmICh5ID09IG51bGwpIHtcbiAgICAgIHkgPSAzNDtcbiAgICB9XG4gICAgaWYgKGR1cmF0aW9uID09IG51bGwpIHtcbiAgICAgIGR1cmF0aW9uID0gNjAwO1xuICAgIH1cbiAgICBpZiAoZGVsYXkgPT0gbnVsbCkge1xuICAgICAgZGVsYXkgPSAwO1xuICAgIH1cbiAgICB0aGlzLiRlbC52ZWxvY2l0eShcInN0b3BcIiwgdHJ1ZSk7XG4gICAgcmV0dXJuIHRoaXMuJGVsLnZlbG9jaXR5KHtcbiAgICAgIHRvcDogeSxcbiAgICAgIGxlZnQ6IHhcbiAgICB9LCB7XG4gICAgICBkZWxheTogZGVsYXksXG4gICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICBlYXNpbmc6IFwiZWFzZUluT3V0UXVpbnRcIlxuICAgIH0pO1xuICB9O1xuXG4gIEN0YW5sZWUucHJvdG90eXBlLmdvdG9JdGVtID0gZnVuY3Rpb24oaWQpIHtcbiAgICB2YXIgcG9zO1xuICAgIHBvcyA9IGFyaXN0b3RsZS5tb3ZpZS5nZXRHbG9iYWxQb3MoaWQpO1xuICAgIGlmIChwb3MgPT09IG51bGwpIHtcbiAgICAgIGFyaXN0b3RsZVtcInRocm93XCJdKFwiY3RhbmxlZSB3YW50cyB0byBob3ZlciBieSBgXCIgKyBpZCArIFwiYCwgYnV0IGlzIHVuYWJsZSB0byBmaW5kIGFuIGl0ZW0gd2l0aCB0aGUgaWQgXCIgKyBpZCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHBvcy54ICs9IDA7XG4gICAgcG9zLnkgKz0gMDtcbiAgICByZXR1cm4gdGhpcy5nb3RvUG9zKHBvcy54LCBwb3MueSk7XG4gIH07XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUuZ290byA9IGZ1bmN0aW9uKGFjdGlvbikge1xuICAgIHZhciBtZTtcbiAgICBpZiAodHlwZW9mIGFjdGlvbi5wb3MgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGlmIChhY3Rpb24uZGVsYXlNb3ZlICE9IG51bGwpIHtcbiAgICAgICAgbWUgPSB0aGlzO1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gbWUuZ290b0l0ZW0oYWN0aW9uLnBvcywgYWN0aW9uLmRlbGF5TW92ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ290b0l0ZW0oYWN0aW9uLnBvcyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmdvdG9Qb3MoYWN0aW9uLnBvc1swXSwgYWN0aW9uLnBvc1sxXSwgYWN0aW9uLnBvc1syXSwgYWN0aW9uLnBvc1szXSk7XG4gICAgfVxuICB9O1xuXG4gIEN0YW5sZWUucHJvdG90eXBlLnJldHVyblRvU3RhdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaGlkZVRleHQoKTtcbiAgICB0aGlzLmdvdG9Qb3MoKTtcbiAgICByZXR1cm4gdGhpcy5zZXRGaWx0ZXIoJ2dsb3cnKTtcbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5zZXRGaWx0ZXIgPSBmdW5jdGlvbihraW5kKSB7XG4gICAgcmV0dXJuICQoJyNjdGFubGVlJykuY3NzKHtcbiAgICAgIGZpbHRlcjogXCJ1cmwoJyNcIiArIGtpbmQgKyBcIicpXCJcbiAgICB9KTtcbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5zZXRUZXh0UG9zaXRpb24gPSBmdW5jdGlvbihwb3MpIHtcbiAgICB2YXIgaSwgaXRlbSwgbGVuLCByZXN1bHRzO1xuICAgIHRoaXMuJHRleHQucmVtb3ZlQ2xhc3MoXCJ0b3AgbGVmdFwiKTtcbiAgICBpZiAocG9zID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocG9zKSkge1xuICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgZm9yIChpID0gMCwgbGVuID0gcG9zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGl0ZW0gPSBwb3NbaV07XG4gICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLiR0ZXh0LmFkZENsYXNzKGl0ZW0pKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy4kdGV4dC5hZGRDbGFzcyhwb3MpO1xuICAgIH1cbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGksIGxlbiwgcmVmLCByZXN1bHRzLCB0b2tlbjtcbiAgICB0aGlzLiRlbC52ZWxvY2l0eShcInN0b3BcIiwgdHJ1ZSk7XG4gICAgdGhpcy4kZmFjZUhvbGRlci52ZWxvY2l0eShcInN0b3BcIiwgdHJ1ZSk7XG4gICAgdGhpcy4kZWwuZW1wdHkoKTtcbiAgICByZWYgPSB0aGlzLnRva2VucztcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICB0b2tlbiA9IHJlZltpXTtcbiAgICAgIHJlc3VsdHMucHVzaChQdWJTdWIudW5zdWJzY3JpYmUodG9rZW4pKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgcmV0dXJuIEN0YW5sZWU7XG5cbn0pKCk7XG4iLCJ2YXIgR2VuZXJpY1VpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEdlbmVyaWNVaSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gR2VuZXJpY1VpKCRlbCkge1xuICAgIHZhciAkbm9kZTtcbiAgICAkbm9kZSA9ICQoamFkZVRlbXBsYXRlWydtaXNjL2dlbmVyaWMtdWknXSh7fSkpO1xuICAgIHNoYWRvd0ljb25zSW5zdGFuY2Uuc3ZnUmVwbGFjZVdpdGhTdHJpbmcocHhTdmdJY29uU3RyaW5nLCAkbm9kZSk7XG4gICAgdGhpcy4kY29udGludWVTdHJpcCA9ICQoXCIuY29udGludWUtc3RyaXBcIiwgJG5vZGUpO1xuICAgICQoXCIuY29udGludWUtYnRuXCIsICRub2RlKS5vbihcImNsaWNrXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBQdWJTdWIucHVibGlzaChcInNsaWRlcy5uZXh0LXNsaWRlXCIpO1xuICAgICAgICByZXR1cm4gX3RoaXMuaGlkZUNvbnRpbnVlU3RyaXAoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRoaXMuaGlkZUNvbnRpbnVlU3RyaXAoKTtcbiAgICAkZWwuYXBwZW5kKCRub2RlKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCdjb250aW51ZS5zaG93JywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICBpZiAoZGF0YSAhPSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLnNob3dDb250aW51ZVN0cmlwKGRhdGEuY3NzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMuc2hvd0NvbnRpbnVlU3RyaXAoKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH1cblxuICBHZW5lcmljVWkucHJvdG90eXBlLnNob3dDb250aW51ZVN0cmlwID0gZnVuY3Rpb24oY3NzQ2xhc3Nlcykge1xuICAgIHRoaXMuJGNvbnRpbnVlU3RyaXAucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7XG4gICAgaWYgKGNzc0NsYXNzZXMgIT0gbnVsbCkge1xuICAgICAgdGhpcy5hZGRlZENsYXNzZXMgPSBjc3NDbGFzc2VzO1xuICAgICAgcmV0dXJuIHRoaXMuJGNvbnRpbnVlU3RyaXAuYWRkQ2xhc3ModGhpcy5hZGRlZENsYXNzZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5hZGRlZENsYXNzZXMgPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICBHZW5lcmljVWkucHJvdG90eXBlLmhpZGVDb250aW51ZVN0cmlwID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy4kY29udGludWVTdHJpcC5hZGRDbGFzcyhcImhpZGRlblwiKTtcbiAgICBpZiAodGhpcy5hZGRlZENsYXNzZXMgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMuJGNvbnRpbnVlU3RyaXAucmVtb3ZlQ2xhc3ModGhpcy5hZGRlZENsYXNzZXMpO1xuICAgIH1cbiAgfTtcblxuICBHZW5lcmljVWkucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHt9O1xuXG4gIHJldHVybiBHZW5lcmljVWk7XG5cbn0pKCk7XG4iLCJ2YXIgTGFibGVyO1xuXG5tb2R1bGUuZXhwb3J0cyA9IExhYmxlciA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gTGFibGVyKCkge1xuICAgIHRoaXMuY291bnQgPSAwO1xuICAgIHRoaXMudG9rZW4xID0gUHViU3ViLnN1YnNjcmliZSgnbGFiZWwuYXR0YWNoJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuYXR0YWNoTGFiZWwoZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0aGlzLnRva2VuMiA9IFB1YlN1Yi5zdWJzY3JpYmUoJ2xhYmVsLmRlc3Ryb3knLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5kZXN0cm95TGFiZWwoZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgfVxuXG4gIExhYmxlci5wcm90b3R5cGUuYXR0YWNoTGFiZWwgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyICRsYWJlbDtcbiAgICBpZiAoJChcIi5sYWJlbC13cmFwcGVyXCIsIGRhdGEuZWwpLmxlbmd0aCAhPT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZGF0YS5jb250ZW50LmlkID09IG51bGwpIHtcbiAgICAgIGRhdGEuY29udGVudC5pZCA9IFwiX2xhYmVsXCIgKyAodGhpcy5jb3VudCsrKTtcbiAgICB9XG4gICAgJGxhYmVsID0gJChqYWRlVGVtcGxhdGVbJ3NsaWRlLXV4L2xhYmVsJ10oZGF0YS5jb250ZW50KSk7XG4gICAgJGxhYmVsLmFkZENsYXNzKFwiYXR0YWNoZWRcIik7XG4gICAgcmV0dXJuIGRhdGEuZWwuYXBwZW5kKCRsYWJlbCk7XG4gIH07XG5cbiAgTGFibGVyLnByb3RvdHlwZS5kZXN0cm95TGFiZWwgPSBmdW5jdGlvbigkZWwpIHtcbiAgICByZXR1cm4gJChcIi5sYWJlbC13cmFwcGVyXCIsICRlbCkudmVsb2NpdHkoe1xuICAgICAgb3BhY2l0eTogMFxuICAgIH0sIHtcbiAgICAgIGR1cmF0aW9uOiAxNTAsXG4gICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAkKHRoaXMpLnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIExhYmxlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIFB1YlN1Yi51bnN1YnNjcmliZSh0aGlzLnRva2VuMSk7XG4gICAgcmV0dXJuIFB1YlN1Yi51bnN1YnNjcmliZSh0aGlzLnRva2VuMik7XG4gIH07XG5cbiAgcmV0dXJuIExhYmxlcjtcblxufSkoKTtcbiIsInZhciBDYWxsU2lnblNlbGVjdCwgRGVmZW5kZXJDYXJkcywgRGlhbG9ndWUsIERpYWxvZ3VlUGFnZSwgRHV0aWVzLCBFcGlzb2RlSW50cm8sIEVwaXNvZGVPdXRybywgRXhwbG9yZUNhcmRzLCBHZW5lcmljVWlFbGVtZW50cywgR2hvc3RVWCwgR3V0Q2hlY2ssIExhYmxlciwgUGVyc29uYWxJbmZvSW50cm8sIFF1aXosIFNlbGVjdGlvbkRpYWxvZ3VlLCBTaW1wbGVTZWxlY3Rpb24sIFNsaWRlVVgsIFNvdW5kVGVzdCwgVGV4dERpYWxvZ3VlLCBUcmFpbmluZ0NvbXBsZXRlO1xuXG5DYWxsU2lnblNlbGVjdCA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvY2FsbC1zaWduLXNlbGVjdCcpO1xuXG5UZXh0RGlhbG9ndWUgPSByZXF1aXJlKCdzbGlkZS11eC90ZXh0LWRpYWxvZ3VlJyk7XG5cbkRlZmVuZGVyQ2FyZHMgPSByZXF1aXJlKCdzbGlkZS11eC9jb21wb25lbnRzL2RlZmVuZGVyLWNhcmRzJyk7XG5cbkRpYWxvZ3VlID0gcmVxdWlyZSgnc2xpZGUtdXgvY29tcG9uZW50cy9kaWFsb2d1ZScpO1xuXG5EaWFsb2d1ZVBhZ2UgPSByZXF1aXJlKCdzbGlkZS11eC9jb21wb25lbnRzL2RpYWxvZ3VlLXBhZ2UnKTtcblxuRHV0aWVzID0gcmVxdWlyZSgnc2xpZGUtdXgvY29tcG9uZW50cy9kdXRpZXMnKTtcblxuRXBpc29kZUludHJvID0gcmVxdWlyZSgnc2xpZGUtdXgvY29tcG9uZW50cy9lcGlzb2RlLWludHJvJyk7XG5cbkVwaXNvZGVPdXRybyA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvZXBpc29kZS1vdXRybycpO1xuXG5FeHBsb3JlQ2FyZHMgPSByZXF1aXJlKCdzbGlkZS11eC9jb21wb25lbnRzL2V4cGxvcmUtY2FyZHMnKTtcblxuR2hvc3RVWCA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvZ2hvc3QtdXgnKTtcblxuR3V0Q2hlY2sgPSByZXF1aXJlKCdzbGlkZS11eC9jb21wb25lbnRzL2d1dC1jaGVjaycpO1xuXG5MYWJsZXIgPSByZXF1aXJlKCdzbGlkZS11eC9sYWJsZXInKTtcblxuUGVyc29uYWxJbmZvSW50cm8gPSByZXF1aXJlKCdzbGlkZS11eC9jb21wb25lbnRzL3BlcnNvbmFsLWluZm8taW50cm8nKTtcblxuUXVpeiA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvcXVpei9xdWl6Jyk7XG5cblNlbGVjdGlvbkRpYWxvZ3VlID0gcmVxdWlyZSgnc2xpZGUtdXgvY29tcG9uZW50cy9zZWxlY3Rpb24tZGlhbG9ndWUnKTtcblxuU2ltcGxlU2VsZWN0aW9uID0gcmVxdWlyZSgnc2xpZGUtdXgvY29tcG9uZW50cy9zaW1wbGUtc2VsZWN0aW9uJyk7XG5cblNvdW5kVGVzdCA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvc291bmQtdGVzdCcpO1xuXG5UcmFpbmluZ0NvbXBsZXRlID0gcmVxdWlyZSgnc2xpZGUtdXgvY29tcG9uZW50cy90cmFpbmluZy1jb21wbGV0ZScpO1xuXG5HZW5lcmljVWlFbGVtZW50cyA9IHJlcXVpcmUoJ3NsaWRlLXV4L2dlbmVyaWMtdWknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTbGlkZVVYID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBTbGlkZVVYKCRlbCkge1xuICAgIHRoaXMuJGVsID0gJGVsO1xuICAgIHRoaXMuY29tcG9uZW50cyA9IFtdO1xuICAgIHRoaXMubGFibGVyID0gbmV3IExhYmxlcigpO1xuICAgIHRoaXMuZGlhbG9ndWUgPSBuZXcgVGV4dERpYWxvZ3VlKHRoaXMuJGVsLCB0aGlzLmN0YW5sZWUpO1xuICAgIHRoaXMuZ2VuZXJpY1VpID0gbmV3IEdlbmVyaWNVaUVsZW1lbnRzKHRoaXMuJGVsKTtcbiAgfVxuXG4gIFNsaWRlVVgucHJvdG90eXBlLnBvcHVsYXRlID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciBjb21wb25lbnQsIGksIGxlbiwgcmVmLCByZXN1bHRzO1xuICAgIHRoaXMucmVtb3ZlQ3VycmVudENvbXBvbmVudHMoKTtcbiAgICBpZiAoKGRhdGEgIT0gbnVsbCA/IGRhdGEuY29tcG9uZW50cyA6IHZvaWQgMCkgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZWYgPSBkYXRhLmNvbXBvbmVudHM7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgY29tcG9uZW50ID0gcmVmW2ldO1xuICAgICAgcmVzdWx0cy5wdXNoKHRoaXMuY29tcG9uZW50cy5wdXNoKHRoaXMuYWRkQ29tcG9uZW50KGNvbXBvbmVudCkpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgU2xpZGVVWC5wcm90b3R5cGUuYWRkQ29tcG9uZW50ID0gZnVuY3Rpb24oY29tcG9uZW50RGF0YSkge1xuICAgIHZhciBjb21wb25lbnQ7XG4gICAgc3dpdGNoIChjb21wb25lbnREYXRhLmtpbmQpIHtcbiAgICAgIGNhc2UgXCJjYWxsLXNpZ24tc2VsZWN0XCI6XG4gICAgICAgIGNvbXBvbmVudCA9IG5ldyBDYWxsU2lnblNlbGVjdCh0aGlzLiRlbCwgY29tcG9uZW50RGF0YS5jb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJkZWZlbmRlci1jYXJkc1wiOlxuICAgICAgICBjb21wb25lbnQgPSBuZXcgRGVmZW5kZXJDYXJkcyh0aGlzLiRlbCwgY29tcG9uZW50RGF0YS5jb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJkaWFsb2d1ZVwiOlxuICAgICAgICBjb21wb25lbnQgPSBuZXcgRGlhbG9ndWUodGhpcy4kZWwsIGNvbXBvbmVudERhdGEuY29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiZHV0aWVzXCI6XG4gICAgICAgIGNvbXBvbmVudCA9IG5ldyBEdXRpZXModGhpcy4kZWwsIGNvbXBvbmVudERhdGEuY29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiZGlhbG9ndWUtcGFnZVwiOlxuICAgICAgICBjb21wb25lbnQgPSBuZXcgRGlhbG9ndWVQYWdlKHRoaXMuJGVsLCBjb21wb25lbnREYXRhLmNvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImVwaXNvZGUtaW50cm9cIjpcbiAgICAgICAgY29tcG9uZW50ID0gbmV3IEVwaXNvZGVJbnRybyh0aGlzLiRlbCwgY29tcG9uZW50RGF0YS5jb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJlcGlzb2RlLW91dHJvXCI6XG4gICAgICAgIGNvbXBvbmVudCA9IG5ldyBFcGlzb2RlT3V0cm8odGhpcy4kZWwsIGNvbXBvbmVudERhdGEuY29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiZXhwbG9yZS1jYXJkc1wiOlxuICAgICAgICBjb21wb25lbnQgPSBuZXcgRXhwbG9yZUNhcmRzKHRoaXMuJGVsLCBjb21wb25lbnREYXRhLmNvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImdob3N0LXV4XCI6XG4gICAgICAgIGNvbXBvbmVudCA9IG5ldyBHaG9zdFVYKHRoaXMuJGVsLCBjb21wb25lbnREYXRhLmNvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImd1dC1jaGVja1wiOlxuICAgICAgICBjb21wb25lbnQgPSBuZXcgR3V0Q2hlY2sodGhpcy4kZWwsIGNvbXBvbmVudERhdGEuY29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwicGVyc29uYWwtaW5mby1pbnRyb1wiOlxuICAgICAgICBjb21wb25lbnQgPSBuZXcgUGVyc29uYWxJbmZvSW50cm8odGhpcy4kZWwsIGNvbXBvbmVudERhdGEuY29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwic2VsZWN0aW9uLWRpYWxvZ3VlXCI6XG4gICAgICAgIGNvbXBvbmVudCA9IG5ldyBTZWxlY3Rpb25EaWFsb2d1ZSh0aGlzLiRlbCwgY29tcG9uZW50RGF0YS5jb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJzaW1wbGUtc2VsZWN0aW9uXCI6XG4gICAgICAgIGNvbXBvbmVudCA9IG5ldyBTaW1wbGVTZWxlY3Rpb24odGhpcy4kZWwsIGNvbXBvbmVudERhdGEuY29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwic291bmQtdGVzdFwiOlxuICAgICAgICBjb21wb25lbnQgPSBuZXcgU291bmRUZXN0KHRoaXMuJGVsLCBjb21wb25lbnREYXRhLmNvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInRyYWluaW5nLWNvbXBsZXRlXCI6XG4gICAgICAgIGNvbXBvbmVudCA9IG5ldyBUcmFpbmluZ0NvbXBsZXRlKHRoaXMuJGVsLCBjb21wb25lbnREYXRhLmNvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInF1aXpcIjpcbiAgICAgICAgY29tcG9uZW50ID0gbmV3IFF1aXoodGhpcy4kZWwsIGNvbXBvbmVudERhdGEuY29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBhcmlzdG90bGVbXCJ0aHJvd1wiXShcInRyaWVkIHRvIGNyZWF0ZSBhbiB1bnJlY29nbml6ZWQgY29tcG9uZW50IHR5cGU6IGBcIiArIGNvbXBvbmVudERhdGEua2luZCArIFwiYFwiKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjb21wb25lbnQ7XG4gIH07XG5cbiAgU2xpZGVVWC5wcm90b3R5cGUucmVtb3ZlQ3VycmVudENvbXBvbmVudHMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgY29tcG9uZW50LCBpLCBsZW4sIHJlZjtcbiAgICByZWYgPSB0aGlzLmNvbXBvbmVudHM7XG4gICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjb21wb25lbnQgPSByZWZbaV07XG4gICAgICBjb21wb25lbnQuZGVzdHJveSgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jb21wb25lbnRzID0gW107XG4gIH07XG5cbiAgU2xpZGVVWC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucmVtb3ZlQ3VycmVudENvbXBvbmVudHMoKTtcbiAgICB0aGlzLmxhYmxlci5kZXN0cm95KCk7XG4gICAgdGhpcy5kaWFsb2d1ZS5kZXN0cm95KCk7XG4gICAgcmV0dXJuIHRoaXMuZ2VuZXJpY1VpLmRlc3Ryb3koKTtcbiAgfTtcblxuICByZXR1cm4gU2xpZGVVWDtcblxufSkoKTtcbiIsInZhciBBdWRpb1RyYWNrLCBDbG9zZWRDYXB0aW9uLCBDdGFubGVlLCBTZXF1ZW5jZSwgVGV4dERpYWxvZ3VlO1xuXG5BdWRpb1RyYWNrID0gcmVxdWlyZSgnZXBpc29kZS9hdWRpby10cmFjaycpO1xuXG5TZXF1ZW5jZSA9IHJlcXVpcmUoJ21pc2Mvc2VxdWVuY2UnKTtcblxuQ3RhbmxlZSA9IHJlcXVpcmUoJ3NsaWRlLXV4L2RpYWxvZ3VlLWFjdG9ycy9jdGFubGVlJyk7XG5cbkNsb3NlZENhcHRpb24gPSByZXF1aXJlKCdzbGlkZS11eC9kaWFsb2d1ZS1hY3RvcnMvY2xvc2VkLWNhcHRpb24nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0RGlhbG9ndWUgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIFRleHREaWFsb2d1ZSgkcGFyZW50KSB7XG4gICAgdmFyIHRva2VuMSwgdG9rZW4yLCB0b2tlbjMsIHRva2VuNCwgdG9rZW41LCB0b2tlbjYsIHRva2VuNywgdG9rZW44O1xuICAgIGFyaXN0b3RsZS5kaWFsb2d1ZSA9IHRoaXM7XG4gICAgdGhpcy5jYyA9IG5ldyBDbG9zZWRDYXB0aW9uKCRwYXJlbnQsIHRoaXMucGxheU5leHRBY3Rpb24pO1xuICAgIHRoaXMuY3RhbmxlZSA9IG5ldyBDdGFubGVlKCRwYXJlbnQsIHRoaXMucGxheU5leHRBY3Rpb24pO1xuICAgIGlmICghYXJpc3RvdGxlLmdsb2JhbHMuZ2V0KFwiY2NJc09uXCIsIGZhbHNlKSkge1xuICAgICAgdGhpcy5jYy5kaXNhYmxlQ2MoKTtcbiAgICAgIHRoaXMuY3RhbmxlZS5kaXNhYmxlQ2MoKTtcbiAgICB9XG4gICAgaWYgKGFyaXN0b3RsZS5pc0Rldk1vZGUpIHtcbiAgICAgICQoJ2h0bWwnKS5vbihcImtleWRvd25cIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgaWYgKGUud2hpY2ggPT09IDM5KSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMucGxheU5leHRBY3Rpb24oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9KSh0aGlzKSk7XG4gICAgfVxuICAgIHRva2VuMSA9IFB1YlN1Yi5zdWJzY3JpYmUoJ2N0YW5sZWUuYWN0aXZhdGUnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihhLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5wbGF5QWN0aW9uKGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgdG9rZW4yID0gUHViU3ViLnN1YnNjcmliZSgnY3RhbmxlZS5hZGQtZXZlbnQtbGlzdGVuZXInLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihhLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5hZGRFdmVudExpc3RlbmVyKGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgdG9rZW4zID0gUHViU3ViLnN1YnNjcmliZSgnZGlhbG9ndWUuYWN0aXZhdGUnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihhLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5wbGF5QWN0aW9uKGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgdG9rZW40ID0gUHViU3ViLnN1YnNjcmliZSgnZGlhbG9ndWUuYWRkLWV2ZW50LWxpc3RlbmVyJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oYSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuYWRkRXZlbnRMaXN0ZW5lcihkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRva2VuNSA9IFB1YlN1Yi5zdWJzY3JpYmUoJ3Zjci5wYXVzZScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGEsIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnBhdXNlVGltZWxpbmUoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRva2VuNiA9IFB1YlN1Yi5zdWJzY3JpYmUoJ3Zjci5wbGF5JywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oYSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMucGxheVRpbWVsaW5lKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0b2tlbjcgPSBQdWJTdWIuc3Vic2NyaWJlKCd2Y3IucmVwbGF5JywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oYSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMucmVwbGF5VGltZWxpbmUoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRva2VuOCA9IFB1YlN1Yi5zdWJzY3JpYmUoJ2RpYWxvZ3VlLnNoaCcsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGEsIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmtpbGxUYWxraW5nKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0aGlzLnRva2VucyA9IFt0b2tlbjEsIHRva2VuMiwgdG9rZW4zLCB0b2tlbjQsIHRva2VuNSwgdG9rZW42LCB0b2tlbjcsIHRva2VuOF07XG4gIH1cblxuICBUZXh0RGlhbG9ndWUucHJvdG90eXBlLmFjdGl2YXRlID0gZnVuY3Rpb24oZGF0YTEpIHtcbiAgICB2YXIgaXRlbSwgaiwgbGVuLCByZWY7XG4gICAgdGhpcy5kYXRhID0gZGF0YTE7XG4gICAgaWYgKHRoaXMuZGF0YS50aW1lbGluZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudGltZWxpbmUgPSBbXTtcbiAgICByZWYgPSB0aGlzLmRhdGEudGltZWxpbmU7XG4gICAgZm9yIChqID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICBpdGVtID0gcmVmW2pdO1xuICAgICAgdGhpcy50aW1lbGluZS5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgICBsb2coXCJBY3RpdmF0aW5nIG5ldyBEaWFsb2d1ZSBUaW1lbGluZSB3aXRoIFwiICsgdGhpcy50aW1lbGluZS5sZW5ndGggKyBcIiBpdGVtc1wiKTtcbiAgICB0aGlzLnNlcXVlbmNlID0gbmV3IFNlcXVlbmNlKHRoaXMudGltZWxpbmUpO1xuICAgIHJldHVybiB0aGlzLnBsYXlBY3Rpb24odGhpcy5zZXF1ZW5jZS5nZXRDdXJyZW50SXRlbSgpLmFjdGlvbik7XG4gIH07XG5cbiAgVGV4dERpYWxvZ3VlLnByb3RvdHlwZS5zYXkgPSBmdW5jdGlvbih0ZXh0LCBhdWRpbywgbmV4dCwgdHh0UG9zKSB7XG4gICAgbG9nKFwiU3BlYWtpbmc6IFwiKTtcbiAgICBpZiAodGV4dCAhPSBudWxsKSB7XG4gICAgICB0aGlzLmFjdG9yLnNheSh0ZXh0LCB0eHRQb3MpO1xuICAgICAgdGhpcy5hY3Rvci5zdGFydFRhbGtpbmcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hY3Rvci5oaWRlVGV4dCgpO1xuICAgIH1cbiAgICBpZiAoYXVkaW8gIT0gbnVsbCkge1xuICAgICAgbG9nKFwiICAtPiBhdWRpbyBkZXRlY3RlZFwiKTtcbiAgICAgIGlmICh0aGlzLnRyYWNrICE9IG51bGwpIHtcbiAgICAgICAgbG9nKFwiICAtPiBkZXN0cm95ZWQgcHJldmlvdXMgdHJhY2sgOiBcIiArIHRoaXMudHJhY2suaWQgKyBcIiAodW51c3VhbClcIik7XG4gICAgICAgIHRoaXMudHJhY2suc3RvcCgpO1xuICAgICAgICB0aGlzLnRyYWNrLmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudHJhY2sgPSBuZXcgQXVkaW9UcmFjayhhdWRpbyk7XG4gICAgICBsb2coXCIgIC0+IHRyYWNrXCIgKyB0aGlzLnRyYWNrLmlkICsgXCIgOiBoYXMgYmVlbiBpbml0aWFsaXplZCA6IFwiICsgdGhpcy50cmFjay5zcmMpO1xuICAgICAgaWYgKHRoaXMudHJhY2sgIT09IGZhbHNlKSB7XG4gICAgICAgIGxvZyhcIiAgLT4gdHJhY2tcIiArIHRoaXMudHJhY2suaWQgKyBcIiA6IGlzIHBsYXlpbmdcIik7XG4gICAgICAgIHRoaXMudHJhY2sucGxheSh7fSwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKF90aGlzLnRyYWNrID09IG51bGwpIHtcbiAgICAgICAgICAgICAgbG9nKFwiICAtPiBvbiB0cmFjayBjb21wbGV0ZSwgdHJhY2sgZGlkbid0IGV4aXN0IGFuZCB0aGUgbmV4dCBhY3Rpb24gd2FzIGZpcmVkICh1bnVzdWFsKVwiKTtcbiAgICAgICAgICAgICAgX3RoaXMucGxheU5leHRBY3Rpb24oKTtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbG9nKFwiICAtPiB0cmFja1wiICsgX3RoaXMudHJhY2suaWQgKyBcIiA6IGlzIGNvbXBsZXRlLCBkZXN0cm95aW5nXCIpO1xuICAgICAgICAgICAgX3RoaXMudHJhY2suZGVzdHJveSgpO1xuICAgICAgICAgICAgX3RoaXMudHJhY2sgPSBudWxsO1xuICAgICAgICAgICAgX3RoaXMuYWN0b3Iuc3RvcFRhbGtpbmcoKTtcbiAgICAgICAgICAgIF90aGlzLmFjdG9yLmhpZGVUZXh0KCk7XG4gICAgICAgICAgICBpZiAobmV4dCA9PT0gJ2F1ZGlvJykge1xuICAgICAgICAgICAgICBsb2coXCIgIC0+IHRoZSBgbmV4dGAgb2YgdGhlIHRyYWNrIHdlIGp1c3QgZGVzdHJveWVkIHdhcyBgYXVkaW9gLCBwbGF5aW5nIG5leHQgYWN0aW9uXCIpO1xuICAgICAgICAgICAgICByZXR1cm4gX3RoaXMucGxheU5leHRBY3Rpb24oKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG5leHQgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgICAgbG9nKFwiICAtPiB0aGUgbmV4dCBvZiB0aGUgdHJhY2sgd2UganVzdCBkZXN0cm95ZWQgd2FzIGEgY29tbWFuZCwgcnVubmluZyBub3cuXCIpO1xuICAgICAgICAgICAgICByZXR1cm4gYXJpc3RvdGxlLmNvbW1hbmRlcltcImRvXCJdKG5leHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH0pKHRoaXMpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvZyhcIiAhIFRyYWNrIHdhcyBmYWxzZSBmb3Igc29tZSByZWFzb24gXCIpO1xuICAgICAgICBpZiAobmV4dCA9PT0gJ2F1ZGlvJykge1xuICAgICAgICAgIGxvZyhcIiAhIFBsYXlpbmcgbmV4dFwiKTtcbiAgICAgICAgICB0aGlzLnBsYXlOZXh0QWN0aW9uKCk7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG5leHQgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICBsb2coXCIgISBSdW5uaW5nIENvbW1hbmRcIik7XG4gICAgICAgICAgYXJpc3RvdGxlLmNvbW1hbmRlcltcImRvXCJdKG5leHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChuZXh0ID09PSAnY2xpY2snKSB7XG4gICAgICB0aGlzLmFjdG9yLnNob3dOZXh0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWN0b3IuaGlkZU5leHQoKTtcbiAgICB9XG4gICAgaWYgKG5leHQgPT09ICdhdWRpbycgJiYgKGF1ZGlvID09IG51bGwpKSB7XG4gICAgICB0aGlzLnBsYXlOZXh0QWN0aW9uKCk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgbmV4dCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgcmV0dXJuIGFyaXN0b3RsZS50aW1lb3V0KChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLnBsYXlOZXh0QWN0aW9uKCk7XG4gICAgICAgIH07XG4gICAgICB9KSh0aGlzKSwgbmV4dCk7XG4gICAgfVxuICB9O1xuXG4gIFRleHREaWFsb2d1ZS5wcm90b3R5cGUucGF1c2VUaW1lbGluZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciByZWYsIHJlZjE7XG4gICAgaWYgKChyZWYgPSB0aGlzLnRyYWNrKSAhPSBudWxsKSB7XG4gICAgICByZWYuc291bmQucGF1c2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKChyZWYxID0gdGhpcy5hY3RvcikgIT0gbnVsbCkge1xuICAgICAgcmVmMS5zdG9wVGFsa2luZygpO1xuICAgIH1cbiAgICByZXR1cm4gUHViU3ViLnB1Ymxpc2goXCJ0aW1lcnMucGF1c2VcIik7XG4gIH07XG5cbiAgVGV4dERpYWxvZ3VlLnByb3RvdHlwZS5wbGF5VGltZWxpbmUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVmLCByZWYxO1xuICAgIGlmICgocmVmID0gdGhpcy50cmFjaykgIT0gbnVsbCkge1xuICAgICAgcmVmLnNvdW5kLnBhdXNlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoKHJlZjEgPSB0aGlzLmFjdG9yKSAhPSBudWxsKSB7XG4gICAgICByZWYxLnN0YXJ0VGFsa2luZygpO1xuICAgIH1cbiAgICByZXR1cm4gUHViU3ViLnB1Ymxpc2goXCJ0aW1lcnMucmVzdW1lXCIpO1xuICB9O1xuXG4gIFRleHREaWFsb2d1ZS5wcm90b3R5cGUucmVwbGF5VGltZWxpbmUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVmO1xuICAgIGlmICgocmVmID0gdGhpcy50cmFjaykgIT0gbnVsbCkge1xuICAgICAgcmVmLnN0b3AoKTtcbiAgICB9XG4gICAgdGhpcy5zZXF1ZW5jZS5yZXNldCgpO1xuICAgIHJldHVybiB0aGlzLnBsYXlBY3Rpb24odGhpcy5zZXF1ZW5jZS5nZXRDdXJyZW50SXRlbSgpLmFjdGlvbik7XG4gIH07XG5cbiAgVGV4dERpYWxvZ3VlLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIGlmIChkYXRhLmV2ZW50ID09PSAnY29tcGxldGUnKSB7XG4gICAgICByZXR1cm4gdGhpcy50cmFjay5hZGRPbkNvbXBsZXRlKChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGFyaXN0b3RsZS5jb21tYW5kZXJbXCJkb1wiXShkYXRhLmFjdGlvbik7XG4gICAgICAgIH07XG4gICAgICB9KSh0aGlzKSk7XG4gICAgfVxuICB9O1xuXG4gIFRleHREaWFsb2d1ZS5wcm90b3R5cGUua2lsbFRhbGtpbmcgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVmLCByZWYxLCByZWYyO1xuICAgIGlmICgocmVmID0gdGhpcy50cmFjaykgIT0gbnVsbCkge1xuICAgICAgcmVmLnN0b3AoKTtcbiAgICB9XG4gICAgaWYgKChyZWYxID0gdGhpcy5hY3RvcikgIT0gbnVsbCkge1xuICAgICAgcmVmMS5zdG9wVGFsa2luZygpO1xuICAgIH1cbiAgICByZXR1cm4gKHJlZjIgPSB0aGlzLmFjdG9yKSAhPSBudWxsID8gcmVmMi5jb21wbGV0ZSgpIDogdm9pZCAwO1xuICB9O1xuXG4gIFRleHREaWFsb2d1ZS5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgICBQdWJTdWIucHVibGlzaCgnZGlhbG9ndWUuY29tcGxldGUnKTtcbiAgICByZXR1cm4gdGhpcy5hY3Rvci5jb21wbGV0ZSgpO1xuICB9O1xuXG4gIFRleHREaWFsb2d1ZS5wcm90b3R5cGUucGxheU5leHRBY3Rpb24gPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5zZXF1ZW5jZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLnRyYWNrICE9IG51bGwpIHtcbiAgICAgIHRoaXMudHJhY2suc3RvcCgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zZXF1ZW5jZS5pc0F0TGFzdEl0ZW0oKSkge1xuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXF1ZW5jZS5uZXh0KCk7XG4gICAgICByZXR1cm4gdGhpcy5wbGF5QWN0aW9uKHRoaXMuc2VxdWVuY2UuZ2V0Q3VycmVudEl0ZW0oKS5hY3Rpb24pO1xuICAgIH1cbiAgfTtcblxuICBUZXh0RGlhbG9ndWUucHJvdG90eXBlLnBsYXlBY3Rpb24gPSBmdW5jdGlvbihhY3Rpb25JZCkge1xuICAgIHZhciBhY3Rpb24sIG9sZEFjdG9yO1xuICAgIGlmICh0aGlzLmRhdGEuYWN0aW9uc1thY3Rpb25JZF0gPT0gbnVsbCkge1xuICAgICAgYXJpc3RvdGxlW1widGhyb3dcIl0oXCJEaWFsb2d1ZSB3YXMgYXNrZWQgdG8gcGxheSB0aGUgYWN0aW9uIG5hbWVkIGBcIiArIGFjdGlvbklkICsgXCJgLCBidXQgbm8gYWN0aW9uIHdpdGggdGhhdCBpZCBleGlzdHMuXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhY3Rpb24gPSB0aGlzLm92ZXJsYXlEZWZhdWx0cyhhY3Rpb25JZCk7XG4gICAgb2xkQWN0b3IgPSB0aGlzLmFjdG9yO1xuICAgIHRoaXMuc2V0QWN0b3IoYWN0aW9uLmFjdG9yKTtcbiAgICBpZiAob2xkQWN0b3IgIT09IHZvaWQgMCkge1xuICAgICAgaWYgKG9sZEFjdG9yICE9PSB0aGlzLmFjdG9yKSB7XG4gICAgICAgIG9sZEFjdG9yLnNsZWVwKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChhY3Rpb24uYWN0aW9uICE9IG51bGwpIHtcbiAgICAgIGFyaXN0b3RsZS5jb21tYW5kZXJbXCJkb1wiXShhY3Rpb24uYWN0aW9uLCB0cnVlKTtcbiAgICB9XG4gICAgdGhpcy5hY3Rvci5zcGVjaWFsKGFjdGlvbik7XG4gICAgcmV0dXJuIHRoaXMuc2F5KGFjdGlvbi50ZXh0LCBhY3Rpb24uYXVkaW8sIGFjdGlvbi5uZXh0LCBhY3Rpb24udHh0UG9zKTtcbiAgfTtcblxuICBUZXh0RGlhbG9ndWUucHJvdG90eXBlLmdldEluZGV4T2ZBY3Rpb24gPSBmdW5jdGlvbihhY3Rpb24pIHtcbiAgICB2YXIgZGF0YSwgaSwgaiwgbGVuLCByZWY7XG4gICAgaWYgKHRoaXMudGltZWxpbmUgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIHJlZiA9IHRoaXMudGltZWxpbmU7XG4gICAgZm9yIChpID0gaiA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGogPCBsZW47IGkgPSArK2opIHtcbiAgICAgIGRhdGEgPSByZWZbaV07XG4gICAgICBpZiAoZGF0YS5hY3Rpb24gPT09IGFjdGlvbikge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgVGV4dERpYWxvZ3VlLnByb3RvdHlwZS5vdmVybGF5RGVmYXVsdHMgPSBmdW5jdGlvbihhY3Rpb25JZCkge1xuICAgIHZhciBhY3Rpb25zLCBrZXksIHJlZiwgdmFsO1xuICAgIGlmICh0aGlzLmRhdGEuZGVmYXVsdHMgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0YS5hY3Rpb25zW2FjdGlvbklkXTtcbiAgICB9XG4gICAgYWN0aW9ucyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhLmRlZmF1bHRzKSk7XG4gICAgcmVmID0gdGhpcy5kYXRhLmFjdGlvbnNbYWN0aW9uSWRdO1xuICAgIGZvciAoa2V5IGluIHJlZikge1xuICAgICAgdmFsID0gcmVmW2tleV07XG4gICAgICBhY3Rpb25zW2tleV0gPSB2YWw7XG4gICAgfVxuICAgIHJldHVybiBhY3Rpb25zO1xuICB9O1xuXG4gIFRleHREaWFsb2d1ZS5wcm90b3R5cGUuc2V0QWN0b3IgPSBmdW5jdGlvbihhY3Rvcikge1xuICAgIGlmIChhY3RvciA9PSBudWxsKSB7XG4gICAgICB0aGlzLmFjdG9yID0gdGhpcy5jdGFubGVlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzd2l0Y2ggKGFjdG9yKSB7XG4gICAgICBjYXNlICd3YXJjb3JlJzpcbiAgICAgIGNhc2UgJ3Nla3RpbXVzJzpcbiAgICAgIGNhc2UgJ2ZpcmV3YWxsJzpcbiAgICAgIGNhc2UgJ3BhY2tldCc6XG4gICAgICAgIHJldHVybiB0aGlzLmFjdG9yID0gdGhpcy5jYztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0aGlzLmFjdG9yID0gdGhpcy5jdGFubGVlO1xuICAgIH1cbiAgfTtcblxuICBUZXh0RGlhbG9ndWUucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaiwgbGVuLCByZWYsIHJlc3VsdHMsIHRva2VuO1xuICAgIHRoaXMuZGF0YSA9IG51bGw7XG4gICAgdGhpcy50aW1lbGluZSA9IG51bGw7XG4gICAgdGhpcy5zZXF1ZW5jZSA9IG51bGw7XG4gICAgdGhpcy5jdGFubGVlLmRlc3Ryb3koKTtcbiAgICB0aGlzLmNjLmRlc3Ryb3koKTtcbiAgICBpZiAodGhpcy50cmFjayAhPSBudWxsKSB7XG4gICAgICB0aGlzLnRyYWNrLnN0b3AoKTtcbiAgICB9XG4gICAgcmVmID0gdGhpcy50b2tlbnM7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoaiA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGogPCBsZW47IGorKykge1xuICAgICAgdG9rZW4gPSByZWZbal07XG4gICAgICByZXN1bHRzLnB1c2goUHViU3ViLnVuc3Vic2NyaWJlKHRva2VuKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIHJldHVybiBUZXh0RGlhbG9ndWU7XG5cbn0pKCk7XG4iXX0=
