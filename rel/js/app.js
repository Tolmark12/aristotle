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
;var locals_for_with = (locals || {});(function (milestones) {
buf.push("<div class=\"progress-map bottom-item\">");
// iterate milestones
;(function(){
  var $$obj = milestones;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var milestone = $$obj[$index];

buf.push("<div" + (jade.attr("id", "" + (milestone.id) + "", true, false)) + (jade.attr("data-title", "" + ( milestone.title ) + "", true, false)) + " class=\"milestone\"><img" + (jade.attr("data-src", "" + ( milestone.icon ) + "", true, false)) + " class=\"shadow-icon\"/></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var milestone = $$obj[$index];

buf.push("<div" + (jade.attr("id", "" + (milestone.id) + "", true, false)) + (jade.attr("data-title", "" + ( milestone.title ) + "", true, false)) + " class=\"milestone\"><img" + (jade.attr("data-src", "" + ( milestone.icon ) + "", true, false)) + " class=\"shadow-icon\"/></div>");
    }

  }
}).call(this);

buf.push("</div>");}.call(this,"milestones" in locals_for_with?locals_for_with.milestones:typeof milestones!=="undefined"?milestones:undefined));;return buf.join("");
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
buf.push("<div class=\"top\"><div class=\"main\"><div class=\"name-and-rank\"><div class=\"status-badge\"><img" + (jade.attr("data-src", "" + (badge) + "", true, false)) + " class=\"shadow-icon\"/></div><div class=\"divider\"></div><div class=\"identity\"><h1 class=\"name\">" + (jade.escape((jade_interp = name) == null ? '' : jade_interp)) + "</h1><h2 class=\"rank\">" + (jade.escape((jade_interp = rank) == null ? '' : jade_interp)) + "</h2></div><div class=\"divider second\"></div></div><div" + (jade.cls(['episodes',"" + (episode) + ""], [null,true])) + "><div data-episode=\"1\"" + (jade.cls(['badge',"" + (episode >= 1 ? 'active' : '') + ""], [null,true])) + "><img data-src=\"ep1-badge\" class=\"shadow-icon\"/></div><div data-episode=\"2\"" + (jade.cls(['badge',"" + (episode >= 2 ? 'active' : '') + ""], [null,true])) + "><img data-src=\"ep2-badge\" class=\"shadow-icon\"/></div><div data-episode=\"3\"" + (jade.cls(['badge',"" + (episode >= 3 ? 'active' : '') + ""], [null,true])) + "><img data-src=\"ep3-badge\" class=\"shadow-icon\"/></div><div data-episode=\"4\"" + (jade.cls(['badge',"" + (episode >= 4 ? 'active' : '') + ""], [null,true])) + "><img data-src=\"ep4-badge\" class=\"shadow-icon\"/></div><div data-episode=\"5\"" + (jade.cls(['badge',"" + (episode >= 5 ? 'active' : '') + ""], [null,true])) + "><img data-src=\"ep5-badge\" class=\"shadow-icon\"/></div></div></div><div class=\"learn-mode\"><h2>[ Warcore ]</h2><h1>Learn Mode</h1></div></div>");}.call(this,"badge" in locals_for_with?locals_for_with.badge:typeof badge!=="undefined"?badge:undefined,"name" in locals_for_with?locals_for_with.name:typeof name!=="undefined"?name:undefined,"rank" in locals_for_with?locals_for_with.rank:typeof rank!=="undefined"?rank:undefined,"episode" in locals_for_with?locals_for_with.episode:typeof episode!=="undefined"?episode:undefined));;return buf.join("");
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

buf.push("<div class=\"generic-ui\"><div class=\"continue-strip\"><div class=\"continue-btn\"><img data-src=\"btn-continue\" class=\"shadow-icon\"/></div></div></div>");;return buf.join("");
};

jadeTemplate['misc/logger'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"logger\"><div class=\"error\"></div><div class=\"message\"></div></div>");;return buf.join("");
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
buf.push("<video autoplay=\"true\" controls=\"true\"><source" + (jade.attr("src", "" + (src) + "", true, false)) + " type=\"video/mp4\"/></video>");}.call(this,"src" in locals_for_with?locals_for_with.src:typeof src!=="undefined"?src:undefined));;return buf.join("");
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

buf.push("<div class=\"call-sign-select\"><div class=\"badge-box\"><div class=\"badge\"><img data-src=\"rank-badge-recruit\" class=\"shadow-icon\"/></div><div class=\"txt\"><h1>John Nimbus</h1><h2>Recruit</h2></div></div><p>Every Defender worth their salt has a call sign they are known by. Let’s choose yours.<br/><br/> Keep it clean, recruit.</p><div class=\"input\"><input id=\"callsign-txt\" type=\"text\" placeholder=\"Type a Call Sign\"/><div id=\"generate-callsign\" class=\"button\">Generate One For Me  </div></div></div>");;return buf.join("");
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
;var locals_for_with = (locals || {});(function (title, content) {
buf.push("<div class=\"duty-content\"><div class=\"title\">" + (jade.escape(null == (jade_interp = title) ? "" : jade_interp)) + "</div><div class=\"user-content\">" + (null == (jade_interp = content) ? "" : jade_interp) + "</div><div id=\"acknowledge\" class=\"icon-btn\"> <div class=\"txt\">I Acknowledge</div><img data-src=\"btn-acknowledge\" class=\"shadow-icon\"/></div></div>");}.call(this,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined,"content" in locals_for_with?locals_for_with.content:typeof content!=="undefined"?content:undefined));;return buf.join("");
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

buf.push("<div class=\"sound-test\"><div class=\"volume\"> <img data-src=\"speaker\" class=\"shadow-icon flip\"/><div class=\"txt\">Please Enable Your Audio Device</div><img data-src=\"speaker\" class=\"shadow-icon\"/></div><div class=\"silence\"><img data-src=\"no-phone\" class=\"shadow-icon\"/><div class=\"txt\">Please Silence Your Cell Phone</div><img data-src=\"no-phone\" class=\"shadow-icon\"/></div></div>");;return buf.join("");
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

buf.push("</div><div class=\"blurb\"></div><div class=\"callout\"><div class=\"header\"><div class=\"line\"></div><h1>Buffs</h1><div class=\"line\"></div></div><p class=\"details\"></p></div><div class=\"action fist\"><div id=\"action-btn\" class=\"btn\"><img" + (jade.attr("data-src", "" + (btnIcon) + "", true, false)) + " class=\"shadow-icon\"/><div class=\"txt\">" + (jade.escape(null == (jade_interp = btnTxt) ? "" : jade_interp)) + "</div></div></div></div></div>");}.call(this,"items" in locals_for_with?locals_for_with.items:typeof items!=="undefined"?items:undefined,"btnIcon" in locals_for_with?locals_for_with.btnIcon:typeof btnIcon!=="undefined"?btnIcon:undefined,"btnTxt" in locals_for_with?locals_for_with.btnTxt:typeof btnTxt!=="undefined"?btnTxt:undefined));;return buf.join("");
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

buf.push("<div class=\"answer\"><div class=\"name\">" + (jade.escape(null == (jade_interp = answer.name) ? "" : jade_interp)) + "</div><div class=\"score\">" + (jade.escape(null == (jade_interp = answer.score) ? "" : jade_interp)) + "</div><div class=\"perfect\">");
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

buf.push("<div class=\"answer\"><div class=\"name\">" + (jade.escape(null == (jade_interp = answer.name) ? "" : jade_interp)) + "</div><div class=\"score\">" + (jade.escape(null == (jade_interp = answer.score) ? "" : jade_interp)) + "</div><div class=\"perfect\">");
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

buf.push("<div class=\"answer\"><div class=\"name\">" + (jade.escape(null == (jade_interp = answer.name) ? "" : jade_interp)) + "</div><div class=\"score\">" + (jade.escape(null == (jade_interp = answer.score) ? "" : jade_interp)) + "</div><div class=\"pefect\">");
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

buf.push("<div class=\"answer\"><div class=\"name\">" + (jade.escape(null == (jade_interp = answer.name) ? "" : jade_interp)) + "</div><div class=\"score\">" + (jade.escape(null == (jade_interp = answer.score) ? "" : jade_interp)) + "</div><div class=\"pefect\">");
if ( answer.isPerfect)
{
buf.push("<img data-src=\"perfect-answer\" class=\"shadow-icon\"/>");
}
buf.push("</div></div>");
    }

  }
}).call(this);

buf.push("</div></div><div class=\"decisions\"><div class=\"decision-bank\">");
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

buf.push("</div></div><div class=\"buttons\"><div id=\"continue\" class=\"quiz-btn\"><img data-src=\"quiz-btn\" class=\"shadow-icon\"/><div class=\"txt\">Continue</div></div></div></div></div>");}.call(this,"episodeNumber" in locals_for_with?locals_for_with.episodeNumber:typeof episodeNumber!=="undefined"?episodeNumber:undefined,"scorePercentage" in locals_for_with?locals_for_with.scorePercentage:typeof scorePercentage!=="undefined"?scorePercentage:undefined,"score" in locals_for_with?locals_for_with.score:typeof score!=="undefined"?score:undefined,"answers1" in locals_for_with?locals_for_with.answers1:typeof answers1!=="undefined"?answers1:undefined,"answers2" in locals_for_with?locals_for_with.answers2:typeof answers2!=="undefined"?answers2:undefined,"decisions" in locals_for_with?locals_for_with.decisions:typeof decisions!=="undefined"?decisions:undefined));;return buf.join("");
};

jadeTemplate['slide-ux/components/quiz/quiz'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"quiz\"><div class=\"header\"><img data-src=\"quiz-header\" class=\"shadow-icon\"/></div><div class=\"questions\"><div class=\"next-btn hidden\"><img data-src=\"next-question\" class=\"shadow-icon\"/></div></div></div>");;return buf.join("");
};

jadeTemplate['slide-ux/components/cards/defender'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (name, quote, personal1, personal2, duties, evidences) {
buf.push("<div class=\"defender-wrap\"><div class=\"defender-card\"><div class=\"name\">" + (jade.escape(null == (jade_interp = name) ? "" : jade_interp)) + "</div><div class=\"quote\">" + (jade.escape(null == (jade_interp = quote) ? "" : jade_interp)) + "</div><h3 class=\"personal1\">" + (jade.escape((jade_interp = personal1) == null ? '' : jade_interp)) + ":</h3><div class=\"personal2\">" + (jade.escape(null == (jade_interp = personal2) ? "" : jade_interp)) + "</div><div class=\"info\"><h3>Duties And Evidence</h3><div class=\"defender-duties\">");
// iterate duties
;(function(){
  var $$obj = duties;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var duty = $$obj[$index];

buf.push("<div class=\"evidence\">" + (jade.escape(null == (jade_interp = duty) ? "" : jade_interp)) + "</div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var duty = $$obj[$index];

buf.push("<div class=\"evidence\">" + (jade.escape(null == (jade_interp = duty) ? "" : jade_interp)) + "</div>");
    }

  }
}).call(this);

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

jadeTemplate['slide-ux/components/cards/equipment'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (name, type, description, aristotle, image) {
buf.push("<div class=\"card-wrap\"><div class=\"card\"><div class=\"name\">" + (jade.escape(null == (jade_interp = name) ? "" : jade_interp)) + "</div><div class=\"type\">" + (jade.escape(null == (jade_interp = type) ? "" : jade_interp)) + "</div><div class=\"description\">" + (null == (jade_interp = description) ? "" : jade_interp) + "</div><div class=\"info\"><img" + (jade.attr("src", "" + (aristotle.getAssetPath(image)) + "", true, false)) + "/></div><div class=\"got-it-btn\"><img data-src=\"btn-got-it\" class=\"shadow-icon\"/></div></div></div>");}.call(this,"name" in locals_for_with?locals_for_with.name:typeof name!=="undefined"?name:undefined,"type" in locals_for_with?locals_for_with.type:typeof type!=="undefined"?type:undefined,"description" in locals_for_with?locals_for_with.description:typeof description!=="undefined"?description:undefined,"aristotle" in locals_for_with?locals_for_with.aristotle:typeof aristotle!=="undefined"?aristotle:undefined,"image" in locals_for_with?locals_for_with.image:typeof image!=="undefined"?image:undefined));;return buf.join("");
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

buf.push("<div" + (jade.attr("id", "" + (btn.id) + "", true, false)) + " class=\"btn\"><div class=\"txt\">" + (jade.escape(null == (jade_interp = btn.txt) ? "" : jade_interp)) + "</div><img scalable=\"true\" data-src=\"btn-generic\" class=\"shadow-icon\"/></div>");
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var btn = $$obj[$index];

buf.push("<div" + (jade.attr("id", "" + (btn.id) + "", true, false)) + " class=\"btn\"><div class=\"txt\">" + (jade.escape(null == (jade_interp = btn.txt) ? "" : jade_interp)) + "</div><img scalable=\"true\" data-src=\"btn-generic\" class=\"shadow-icon\"/></div>");
    }

  }
}).call(this);

buf.push("</div></div></div>");}.call(this,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined,"btns" in locals_for_with?locals_for_with.btns:typeof btns!=="undefined"?btns:undefined));;return buf.join("");
};

var pxSymbolString = pxSymbolString || ''; pxSymbolString+='<symbol  id="New_Symbol" viewBox="-10.3 -10.3 20.6 20.6">	<polygon class="st24" points="9.8,-9.8 -9.8,-9.8 -9.8,9.8 9.8,9.8 	"/></symbol>';
var pxSvgIconString = pxSvgIconString || ''; pxSvgIconString+='<g id="first" class="aristotle-svg-svg ">			<use xlink:href="#New_Symbol"  width="20.6" height="20.6" x="-10.3" y="-10.3" transform="matrix(0.7046 0 0 -0.7046 11.2573 11.2573)" style="overflow:visible;"/></g><g id="ep5-badge" class="aristotle-svg-svg ">	<path  class="white  st13" d="M26.599,12.5H9.8v6.9h0.098v6.462l7.933,2.203l0.535-1.933l-6.468-1.797v-5.339h9.001		v0.257c-0.101,0.495-0.286,1.021-0.632,1.395c-0.347,0.364-0.828,0.55-1.468,0.55h-2.6h-0.6v2h0.6h2.6h3.8v3.801h2v-3.801h2V12.5		L26.599,12.5z M17.199,14.5v2.503H15.5V14.5H17.199z M11.8,17.003V14.5h1.7v2.503H11.8z M19.199,17.003V14.5h1.7v2.503H19.199z		 M24.599,21.199h-1.7v-1.704c0.141-0.795,0.106-1.438,0.097-1.563l-0.066-0.929h-0.031V14.5h1.7V21.199z"/><g  class="yellow " >		<g>			<path class="st12" d="M18.199,6.4l12,6.299V26.4l-12,6.299l-12-6.299V12.699L18.199,6.4 M18.199,4L4,11.399v16.396l14.199,7.396				l14.2-7.396V11.4L18.199,4L18.199,4z"/></g>	</g></g><g id="ep4-badge" class="aristotle-svg-svg ">	<g  class="white " >		<rect x="23.383" y="25.405" class="st13" width="8.213" height="2.123"/><rect x="5.415" y="25.405" class="st13" width="7.354" height="2.123"/></g>	<g  class="yellow " >		<path id="XMLID_403_" class="st12" d="M18.152,6.396l12.029,6.296v13.75l-12.029,6.297L6.123,26.442v-13.75L18.152,6.396			 M18.152,4L4,11.408v16.315l14.152,7.408l14.152-7.408V11.408L18.152,4L18.152,4z"/><path class="st12" d="M18.144,14.56c-1.564,0-2.836-1.271-2.836-2.836c0-1.562,1.272-2.835,2.836-2.835			c1.563,0,2.835,1.272,2.835,2.835C20.98,13.288,19.708,14.56,18.144,14.56z M18.144,10.688c-0.571,0-1.036,0.47-1.036,1.036			c0,0.571,0.465,1.036,1.036,1.036c0.571,0,1.036-0.465,1.036-1.036C19.18,11.153,18.715,10.688,18.144,10.688z"/><path class="st12" d="M22.812,23.475l1.638-0.746l-2.858-6.271l0.25-1.139h-7.395l0.248,1.128l-2.863,6.277l1.638,0.746			l1.869-4.101l0.56,2.548l-0.651,7.104v0.688h1.8l-0.004-0.604l0.584-6.347h1.033l0.58,6.265v0.688h1.8l-0.004-0.771l-0.646-7.021			l0.558-2.536L22.812,23.475z M17.531,20.964l-0.846-3.846h2.918l-0.845,3.846H17.531z"/></g></g><g id="ep3-badge" class="aristotle-svg-svg ">	<polygon  class="white  st13" points="18.2,8.17 7.825,13.626 8.756,15.396 18.2,10.43 25.974,14.517 16.851,19.275 		17.776,21.048 26.901,16.289 26.901,18 26.901,18.696 16.849,23.98 17.78,25.751 26.901,20.956 26.901,21.898 26.901,23.296 		16.849,28.58 17.78,30.351 26.901,25.556 26.901,29.699 28.901,29.699 28.901,24.504 28.901,21.898 28.901,19.904 28.901,18 		28.901,13.796 	"/><g  class="yellow " >		<g id="XMLID_68_" class="aristotle-svg-svg ">			<path class="st12" d="M25.901,18.3c-0.1,0.396-0.4,0.7-0.8,0.7c-0.4,0-0.6-0.304-0.5-0.7c0.1-0.396,0.4-0.7,0.8-0.7				S25.901,17.9,25.901,18.3z"/></g>		<g id="XMLID_67_" class="aristotle-svg-svg ">			<path class="st12" d="M25.901,22.9c-0.1,0.396-0.4,0.691-0.8,0.691c-0.4,0-0.6-0.3-0.5-0.691c0.1-0.397,0.4-0.701,0.8-0.701				S25.901,22.5,25.901,22.9z"/></g>		<g id="XMLID_66_" class="aristotle-svg-svg ">			<path class="st12" d="M25.901,27.6c-0.1,0.4-0.4,0.7-0.8,0.7c-0.4,0-0.6-0.3-0.5-0.7c0.1-0.396,0.4-0.691,0.8-0.691				S25.901,27.199,25.901,27.6z"/></g>		<path class="st12" d="M32.4,11.399L18.2,4L4,11.397v16.396l14.2,7.396l0.048-0.025l0.052,0.027v-0.06l14.1-7.344V11.399			L32.4,11.399z M16.1,31.597l-9.9-5.19v-11.5l9.9,5.191V31.597z M30.2,26.4l-11.9,6.246V18.8L6.395,12.597L18.2,6.4l12,6.299V26.4z			"/></g></g><g id="ep2-badge" class="aristotle-svg-svg ">	<g  class="white" >		<polygon class="st13" points="16.195,19.863 17.205,18.137 10.982,14.492 15.964,11.886 15.037,10.114 8,13.795 8,21.9 10,21.9 			10,16.235 		"/><polygon class="st13" points="19.2,28.048 19.2,21.1 17.2,21.1 17.2,28.06 12.058,25.411 11.142,27.189 18.203,30.826 			25.163,27.186 24.237,25.414 		"/><polygon class="st13" points="21.163,10.114 20.237,11.886 25.271,14.52 19.094,18.137 20.105,19.863 26.2,16.293 26.2,21.9 			28.2,21.9 28.2,13.795 		"/></g>	<g  class="yellow " >		<g>			<path class="st12" d="M18.2,6.4l12,6.299V26.4l-12,6.299L6.2,26.4V12.699L18.2,6.4 M18.2,4L4,11.397v16.396l14.2,7.396				l14.2-7.396V11.397L18.2,4L18.2,4z"/></g>	</g></g><g id="ep1-badge" class="aristotle-svg-svg ">	<g  class="white " >		<polygon class="st13" points="11.798,14.884 10.402,16.315 12.642,18.5 5.501,18.5 5.501,20.5 12.727,20.5 10.384,22.901 			11.816,24.298 16.515,19.482 		"/><polygon class="st13" points="22.907,13.207 21.493,11.793 19.2,14.086 19.2,6.1 17.2,6.1 17.2,14.086 14.907,11.793 			13.493,13.207 18.2,17.914 		"/><polygon class="st13" points="13.502,25.884 14.898,27.315 17.2,25.071 17.2,33 19.2,33 19.2,25.071 21.502,27.315 22.898,25.884 			18.2,21.303 		"/><polygon class="st13" points="31.7,18.5 23.702,18.5 25.989,16.324 24.61,14.875 19.768,19.482 24.593,24.307 26.007,22.893 			23.614,20.5 31.7,20.5 		"/></g>	<g  class="yellow" >		<g>			<path class="st12" d="M18.2,6.4l12,6.299V26.4l-12,6.299L6.2,26.4V12.699L18.2,6.4 M18.2,4L4,11.397v16.396l14.2,7.396				l14.2-7.396V11.397L18.2,4L18.2,4z"/></g>	</g></g><g id="rank-badge-master-cadet" class="aristotle-svg-svg ">	<polygon class="st13" points="30.5,4 31.3,5.7 33,6 31.8,7.2 32.099,9 30.5,8.2 29,9 29.3,7.2 28.099,6 29.8,5.7 	"/><polygon class="st13" points="6.5,4 7.201,5.7 8.9,6 7.701,7.2 8,9 6.5,8.2 5,9 5.3,7.2 4,6 5.8,5.7 	"/><polygon class="st12" points="15.5,33.3 13.201,32.101 13,32.2 13,32 7.9,29.3 7.9,17 16.099,12.7 16.599,10.1 5.8,15.7 		5.8,30.601 15,35.399 	"/><rect x="4" y="4" class="st14" width="29" height="39.104"/><polygon class="st12" points="20.5,10.1 20.9,12.7 29.099,17 29.099,29.3 22.099,33 21.3,35.899 31.201,30.601 31.201,15.7 	"/><g>		<polygon class="st13" points="19.201,33.3 16.4,35.3 18.5,26 15,28.8 17.099,16.101 20.599,16.101 19.201,21.7 22,19.601 			19.599,29.601 22.201,27.601 17.701,43.101 		"/><rect x="13.5" y="15.399" class="st13" width="9.896" height="1.396"/><polygon class="st13" points="18.5,6.899 17.099,15.399 19.9,15.399 		"/><g id="XMLID_45_" class="aristotle-svg-svg ">			<g id="XMLID_157_" class="aristotle-svg-svg ">				<g id="XMLID_185_" class="aristotle-svg-svg ">					<g id="XMLID_229_" class="aristotle-svg-svg ">						<polygon class="st13" points="18.5,5.5 17.099,6.3 17.099,8.2 18.5,9 19.9,8.2 19.9,6.3 						"/></g>				</g>			</g>		</g>	</g></g><g id="rank-badge-cyber-cadet" class="aristotle-svg-svg ">	<polygon class="st12" points="20.75,11.1 21.051,13.3 27.75,13.3 27.75,29 21.051,33.601 20.75,36.5 29.852,30.101 29.852,11.1 			"/><polygon class="st12" points="16.051,33.7 9.45,29.3 9.45,13.3 16.051,13.3 16.45,11.1 7.25,11.1 7.351,30.399 16.45,36.5 	"/><line class="st22" x1="7.939" y1="19.672" x2="13.262" y2="19.672"/><line class="st22" x1="7.939" y1="25.802" x2="14.449" y2="25.802"/><line class="st22" x1="23.841" y1="19.672" x2="29.163" y2="19.672"/><line class="st22" x1="22.653" y1="25.802" x2="29.163" y2="25.802"/><g>		<g>			<g>				<rect x="4" y="4" class="st14" width="29" height="39.104"/><polygon class="st13" points="18.551,16.101 15.75,18.899 18.551,43 21.352,18.899 				"/></g>		</g>		<rect x="13.551" y="15.399" class="st13" width="9.897" height="1.396"/><polygon class="st13" points="18.551,6.899 17.15,15.399 19.95,15.399 		"/><g id="XMLID_166_" class="aristotle-svg-svg ">			<g id="XMLID_168_" class="aristotle-svg-svg ">				<g id="XMLID_169_" class="aristotle-svg-svg ">					<g id="XMLID_170_" class="aristotle-svg-svg ">						<polygon class="st13" points="18.551,5.5 17.15,6.3 17.15,8.2 18.551,9 19.95,8.2 19.95,6.3 						"/></g>				</g>			</g>		</g>	</g>	<polygon class="st13" points="30.551,4 31.352,5.7 33.051,6 31.852,7.2 32.15,9 30.551,8.2 29.051,9 29.352,7.2 28.051,6 		29.852,5.7 	"/><polygon class="st13" points="6.551,4 7.25,5.7 8.95,6 7.75,7.2 8.051,9 6.551,8.2 5.051,9 5.351,7.2 4.051,6 5.75,5.7 	"/></g><g id="rank-badge-technical-cadet" class="aristotle-svg-svg ">	<rect x="4" y="4" class="st14" width="29" height="39.104"/><g>		<path class="st12" d="M27.7,13.3V29l-9.2,6.396L9.4,29.2l-0.101-16h18.4 M29.8,11.1H7.2l0.1,19.299L18.601,38l11.3-7.896v-19			L29.8,11.1L29.8,11.1z"/></g>	<line class="st22" x1="7.8" y1="19.672" x2="29.2" y2="19.672"/><polygon class="st13" points="30.5,4 31.3,5.7 33,6 31.8,7.2 32.101,9 30.5,8.2 29,9 29.3,7.2 28,6 29.8,5.7 	"/><polygon class="st13" points="6.401,4 7.2,5.7 8.901,6 7.7,7.2 8,9 6.401,8.2 5,9 5.2,7.2 4,6 5.7,5.7 	"/><line class="st22" x1="7.8" y1="25.802" x2="29.2" y2="25.802"/></g><g id="rank-badge-cadet-first-class" class="aristotle-svg-svg ">	<rect x="4" y="4" class="st14" width="29" height="39.104"/><g>		<path class="st12" d="M27.7,13.3V29l-9.2,6.396L9.4,29.2l-0.101-16h18.4 M29.8,11.1H7.2l0.1,19.299L18.602,38l11.3-7.896v-19			L29.8,11.1L29.8,11.1z"/></g>	<line class="st22" x1="7.8" y1="21" x2="29.2" y2="21"/><polygon class="st13" points="30.5,4 31.3,5.7 33,6 31.8,7.2 32.102,9 30.5,8.2 29,9 29.3,7.2 28,6 29.8,5.7 	"/><polygon class="st13" points="6.401,4 7.2,5.7 8.901,6 7.7,7.2 8,9 6.401,8.2 5,9 5.2,7.2 4,6 5.7,5.7 	"/></g><g id="rank-badge-cadet" class="aristotle-svg-svg ">	<rect x="4" y="4" class="st14" width="29" height="39.104"/><g>		<path class="st12" d="M27.649,13.3V29l-9.199,6.399l-9.101-6.196l-0.1-16h18.399 M29.849,11.1h-22.7L7.25,30.399l11.3,7.604			l11.3-7.896L29.849,11.1L29.849,11.1z"/></g>	<line class="st22" x1="7.849" y1="21" x2="29.25" y2="21"/></g><g id="rank-badge-recruit" class="aristotle-svg-svg ">	<g>		<path class="st12" d="M27.75,13.3V29l-9.2,6.396L9.45,29.2l-0.101-16h18.4 M29.849,11.1h-22.7L7.25,30.399l11.3,7.604l11.3-7.896			L29.849,11.1L29.849,11.1z"/></g>	<rect x="4" y="4" class="st14" width="29" height="39.104"/></g><g id="list-progress-base" class="aristotle-svg-svg ">	<g id="hex-outer_1_" class="aristotle-svg-svg ">		<g id="XMLID_1080_" class="aristotle-svg-svg ">			<path class="st8" d="M18.2,7.201l11.3,5.896v12.899l-11.3,5.896L6.9,25.996V13.101L18.2,7.201 M18.2,4L4,11.396v16.4l14.2,7.396				l14.2-7.396v-16.4L18.2,4L18.2,4z"/></g>	</g>	<g id="hex-inner_1_" class="aristotle-svg-svg ">		<g id="XMLID_2384_" class="aristotle-svg-svg ">			<polygon class="st12" points="18.2,29.9 9.099,25 9.099,14.101 18.2,9.201 27.2,14.101 27.2,24.9 			"/></g>	</g></g><g id="list-progress-complete" class="aristotle-svg-svg ">	<g id="hex-inner" class="aristotle-svg-svg ">		<g>			<polygon class="st23" points="21.8,13.801 25.701,16.201 21.201,16.201 20.5,16.201 27.201,21.9 27.201,14.101 18.101,9.201 				16.101,10.201 			"/></g>		<g>			<polygon class="st23" points="15.5,23.5 11.9,21.101 16.101,21.101 17.8,21 9.101,14.301 9.101,25 18.101,29.9 22.201,27.701 							"/></g>	</g>	<g id="hex-outer" class="aristotle-svg-svg ">		<polygon class="st4" points="24,28.801 18.101,32 6.8,26 6.8,13.101 10.4,11.201 8.4,9.101 4,11.4 4,27.701 18.101,35.101 			26.8,30.601 		"/><polygon class="st4" points="18.101,4 11.5,7.4 14.4,9.201 18.101,7.201 29.5,13.101 29.5,26 27.701,26.9 29.9,29 32.3,27.701 			32.3,11.4 		"/></g>	<g id="lightning_1_" class="aristotle-svg-svg ">		<g id="lightning" class="aristotle-svg-svg ">			<polygon class="st12" points="7.701,6.5 21.201,14.9 17.101,14.9 28.3,24.5 23.4,24.5 30.5,31.5 16.201,22.301 21.601,22.301 				9.601,13.101 14,12.9 			"/></g>	</g></g><g id="ctanlee" class="aristotle-svg-svg ">	<circle class="st13" cx="21" cy="21" r="6.398"/><path class="st5" d="M25.5,37.4c7.2-2,12.5-8.5,12.5-16.396"/><path class="st5" d="M4,21c0,7.801,5.3,14.396,12.5,16.396"/><path class="st5" d="M32.801,8.8c-3.1-2.896-7.2-4.8-11.8-4.8c-4.7,0-8.9,1.896-12,4.896"/></g><g id="action-btn-fist" class="aristotle-svg-svg ">	<polygon class="st13" points="35.7,86.896 4,70.295 4,33.795 35.7,17.196 67.401,33.795 67.401,70.295 	"/><polygon class="st8" points="35.7,84.497 6.2,68.997 6.2,34.997 35.7,19.596 65.2,34.997 65.2,68.997 	"/><path class="st18" d="M42.3,12.696c0,0,7.4,2,10.104,3.4c-3.397,6.5-11.5,2.397-11.5,2.397s-2.3,2.799-3,3.603		c11.103,5.196,26.2,0.696,26.2,0.696l-0.897,5.896l-5.603,13.5l-9.7,5L30.205,82.499L9.504,71.691l25.799-32.396l-2.698-19.104		L42.3,12.696z"/><path class="st21" d="M42.3,12.696c0,0,7.4,2,10.104,3.4c-3.397,6.5-11.5,2.397-11.5,2.397s-2.3,2.799-3,3.603		c11.103,5.196,26.2,0.696,26.2,0.696l-0.897,5.896l-5.603,13.5l-9.7,5L30.205,82.499L9.504,71.691l25.799-32.396l-2.698-19.104		L42.3,12.696z"/><path class="st18" d="M48,5.497l-2.103-1.104c-1.8-0.896-3.897-0.2-4.8,1.5l-7,13.396l8.5,4.396l7-13.396		C50.5,8.497,49.8,6.396,48,5.497"/><path class="st21" d="M48,5.497l-2.103-1.104c-1.8-0.896-3.897-0.2-4.8,1.5l-7,13.396l8.5,4.396l7-13.396		C50.5,8.497,49.8,6.396,48,5.497z"/><path class="st18" d="M54.5,6.896l2.604,1.7c1.3,0.8,1.695,2.5,0.8,3.8l-7.3,11.2c-3-0.9-4.397-2.103-6.305-4.304l6.305-11.396		C51.5,6.596,53.2,6.096,54.5,6.896"/><path class="st21" d="M54.5,6.896l2.604,1.7c1.3,0.8,1.695,2.5,0.8,3.8l-7.3,11.2c-3-0.9-4.397-2.103-6.305-4.304l6.305-11.396		C51.5,6.596,53.2,6.096,54.5,6.896z"/><path class="st18" d="M62.5,14.997l-1.896-1.309c-1.305-0.896-3-0.5-3.805,0.7l-6.104,9.2c1.3,2,3.104,3.6,6,4l6.396-8.9		C64,17.497,63.7,15.795,62.5,14.997"/><path class="st21" d="M62.5,14.997l-1.896-1.309c-1.305-0.896-3-0.5-3.805,0.7l-6.104,9.2c1.3,2,3.104,3.6,6,4l6.396-8.9		C64,17.497,63.7,15.795,62.5,14.997z"/><path class="st18" d="M67.102,24.196l-5.302,6.9c-2.307-0.7-3.898-1.9-5.104-3.4l5.3-7.3c0.897-1.3,2.8-1.5,4-0.5l0.7,0.604		C67.8,21.396,68.001,22.997,67.102,24.196"/><path class="st21" d="M67.102,24.196l-5.302,6.9c-2.307-0.7-3.898-1.9-5.104-3.4l5.3-7.3c0.897-1.3,2.8-1.5,4-0.5l0.7,0.604		C67.8,21.396,68.001,22.997,67.102,24.196z"/><path class="st18" d="M58,34.096c0.897-0.603,3.8-3,3.8-3c-2.1-0.4-3.8-1.603-5.1-3.4l-2.803,2.7c-1.104,1-0.897,2.7,0.303,3.5		l0.6,0.396C55.8,34.896,57.2,34.696,58,34.096"/><path class="st26" d="M58,34.096c0.897-0.603,3.8-3,3.8-3c-2.1-0.4-3.8-1.603-5.1-3.4l-2.803,2.7c-1.104,1-0.897,2.7,0.303,3.5		l0.6,0.396C55.8,34.896,57.2,34.696,58,34.096z"/><path class="st18" d="M50.2,30.997L49,30.099c-0.8-0.603-1-1.7-0.5-2.603l2.2-3.897c1.397,2.5,3.397,3.8,6,4l-3.4,3.196		C52.5,31.696,51.2,31.696,50.2,30.997"/><path class="st26" d="M50.2,30.997L49,30.099c-0.8-0.603-1-1.7-0.5-2.603l2.2-3.897c1.397,2.5,3.397,3.8,6,4l-3.4,3.196		C52.5,31.696,51.2,31.696,50.2,30.997z"/><path class="st18" d="M41.602,24.795l6,4.304l3.103-5.5c-3-0.7-4.5-1.804-6.303-4.304L41.602,24.795z"/><path class="st21" d="M41.602,24.795l6,4.304l3.103-5.5c-3-0.7-4.5-1.804-6.303-4.304L41.602,24.795z"/><path class="st18" d="M10,71.497l20.897-33.397l-2.197-19l10.8-10.2c0,0,10.104,5.3,12.8,6.7c-3.396,6.5-10.101,2.3-10.101,2.3		s-1.302,2.896-1.899,3.7c9,4.696,10.809,9,3.5,16.397"/><path class="st25" d="M10,71.497l20.897-33.397l-2.197-19l10.8-10.2c0,0,10.104,5.3,12.8,6.7c-3.396,6.5-10.101,2.3-10.101,2.3		s-1.302,2.896-1.899,3.7c9,4.696,10.809,9,3.5,16.397"/><path class="st13" d="M26,73.696c0.897-8.3,2.8-16.5,5.604-24.6c0.195,1.8,0.396,3.6,0.695,5.3		c1.896-5.8,4.396-11.396,7.305-16.896C39.3,39.603,39.207,41.603,39,43.603c2.3-3.5,4.7-6.804,7.397-10		c1.303-1.603,1.7-1.2,0.603,0.5c-3.8,6.104-6.896,12.5-9.3,19c-0.103-1.804-0.2-3.603-0.2-5.396c-2.2,5.193-4,10.5-5.3,15.896		c-0.4-1.896-0.803-3.804-1.2-5.804C28.901,62.997,27.2,68.295,26,73.696"/></g><g id="btn-lightning" class="aristotle-svg-svg ">	<path class="st12" d="M4,51.002l59,12l60-12l-3-2.459L63.005,59.941L7,48.55L4,51.002z M7,18.452L62.979,7.066L120,19.42l3-2.42		L63,4l0,0L4,16L7,18.452z"/><path class="st12" d="M32.495,50.604c9.357-3.825,19.271-6.614,29.521-8.252c-1.817,1.227-3.6,2.491-5.325,3.787		c7.282-1.253,14.733-1.91,22.276-1.934c-2.351,0.923-4.646,1.907-6.894,2.948c7.479,0.609,14.922,1.855,22.224,3.731		c-11.213-1.329-22.346-1.171-33.122,0.346c1.834-1.153,3.716-2.266,5.646-3.336c-6.85,0.652-13.562,1.838-20.104,3.528		c1.771-1.565,3.604-3.093,5.498-4.582C45.563,47.595,38.97,48.853,32.495,50.604z"/></g><g id="quiz-header" class="aristotle-svg-svg ">	<line class="st2" x1="4" y1="34" x2="240.561" y2="34"/><line class="st2" x1="320.562" y1="34" x2="557.123" y2="34"/><polygon class="st9" points="294.399,52.221 282.561,58.366 260.061,46.686 260.061,21.313 267.372,17.518 263.725,13.777 		255.061,18.275 255.061,49.724 282.561,64 299.275,55.325 	"/><polygon class="st9" points="282.561,4 269.865,10.591 274.805,13.66 282.561,9.633 305.061,21.313 305.061,46.686 301.417,48.578 		305.197,52.25 310.061,49.724 310.061,18.275 	"/><polygon class="st8" points="262.561,9 288.389,25.037 280.473,25.033 301.991,43.422 292.661,43.556 306.372,56.878 		278.834,39.354 289.183,39.166 266.184,21.461 274.454,21.204 	"/></g><g id="quiz-answer-bg" class="aristotle-svg-svg ">	<polygon  class="bg st17" points="5.5,308.111 5.5,29.889 103.999,5.545 202.094,29.888 202.498,308.112 104,332.455 	"/><path  class="outline st20" d="M103.999,7.091l96.597,23.97l0.401,275.881L104,330.913L7,306.938V31.062L103.999,7.091		 M104,4L4,28.722v280.564L104,334l100-24.714l-0.408-280.564L104,4L104,4z"/><path  class="lightning  st20" d="M68.194,285.052c10.85-4.438,22.324-7.663,34.212-9.562		c-2.113,1.421-4.171,2.885-6.169,4.389c8.438-1.446,17.07-2.215,25.812-2.234c-2.725,1.062-5.387,2.21-7.985,3.417		c8.673,0.705,17.286,2.146,25.747,4.314c-12.992-1.538-25.893-1.354-38.377,0.4c2.126-1.335,4.306-2.624,6.541-3.864		c-7.928,0.755-15.719,2.129-23.3,4.087c2.05-1.812,4.175-3.584,6.371-5.308C83.334,281.566,75.696,283.021,68.194,285.052z"/><path  class="lightning st20" d="M68.194,54.061c10.85-4.438,22.324-7.659,34.212-9.562		c-2.113,1.43-4.171,2.893-6.169,4.396c8.438-1.452,17.07-2.214,25.812-2.238c-2.725,1.067-5.387,2.211-7.985,3.417		c8.673,0.703,17.286,2.146,25.747,4.319c-12.992-1.538-25.893-1.354-38.377,0.396c2.126-1.335,4.306-2.624,6.541-3.863		c-7.928,0.763-15.719,2.137-23.3,4.094c2.05-1.812,4.175-3.584,6.371-5.312C83.334,50.576,75.696,52.031,68.194,54.061z"/><line  class="line st19" x1="32.5" y1="95.5" x2="175.5" y2="95.5"/><line  class="line  st19" x1="32.5" y1="232.5" x2="175.5" y2="232.5"/></g><g id="next-question" class="aristotle-svg-svg ">	<polygon class="st11" points="148.999,41.446 4,41.446 4,4 148.999,4 156.007,23.473 	"/></g><g id="btn-got-it" class="aristotle-svg-svg ">	<path class="st8" d="M4,37.484c10.938-4.513,22.521-7.805,34.517-9.737c-2.134,1.447-4.207,2.938-6.226,4.469		c8.514-1.479,17.224-2.255,26.039-2.282c-2.75,1.089-5.438,2.251-8.062,3.479c8.749,0.719,17.438,2.188,25.979,4.402		c-13.104-1.566-26.117-1.381-38.721,0.408c2.146-1.36,4.351-2.673,6.604-3.937c-7.997,0.77-15.856,2.169-23.507,4.163		c2.062-1.847,4.212-3.65,6.43-5.406C19.274,33.935,11.568,35.418,4,37.484z"/><path class="st12" d="M26.764,10.141c-0.32,2.88-0.62,4.041-1.32,5.201c-0.96,1.621-2.26,2.441-3.841,2.441		c-2.42,0-3.94-2.021-3.94-5.221c0-2.081,0.521-4.321,1.348-5.781C20.03,4.961,21.53,4,23.283,4c1.9,0,3.16,1.14,3.501,3.181		l-2.653,1c-0.021-0.68-0.062-0.86-0.16-1.161c-0.146-0.44-0.5-0.68-0.979-0.68c-0.641,0-1.157,0.44-1.581,1.32		c-0.6,1.28-0.979,3.241-0.979,5.062c0,1.78,0.521,2.68,1.54,2.68c1.021,0,1.643-0.92,1.922-2.9h-1.646l0.278-2.36L26.764,10.141		L26.764,10.141z"/><path class="st12" d="M29.642,14.022c0-1.201,0.318-2.541,0.84-3.541c0.681-1.32,1.801-2.041,3.146-2.041		c1.802,0,2.812,1.22,2.812,3.421c0,3.581-1.561,5.881-3.961,5.881C30.621,17.742,29.642,16.442,29.642,14.022z M33.923,12.061		c0-0.92-0.198-1.38-0.578-1.38c-0.66,0-1.224,1.58-1.224,3.4c0,0.9,0.224,1.42,0.613,1.42		C33.402,15.502,33.923,13.941,33.923,12.061z"/><path class="st12" d="M40.241,10.681h-0.84l0.261-2.061h0.848l0.302-2.46h2.461L42.97,8.62h1.001l-0.238,2.061h-1l-0.857,6.881		h-2.464L40.241,10.681z"/><path class="st12" d="M52.501,8.62h2.461l-1.104,8.942h-2.461L52.501,8.62z M52.541,6.16c0-0.96,0.84-1.78,1.772-1.78		c0.767,0,1.36,0.6,1.36,1.38c0,0.96-0.82,1.801-1.78,1.801C53.121,7.56,52.541,6.96,52.541,6.16z"/><path class="st12" d="M58.541,10.681h-0.848l0.268-2.061h0.843l0.3-2.46h2.461l-0.301,2.46h1.001l-0.24,2.061h-1l-0.854,6.881		h-2.468L58.541,10.681z"/><path class="st12" d="M66.441,14.421c0.82,0,1.46,0.64,1.46,1.46c0,1.02-0.88,1.9-1.896,1.9c-0.842,0-1.46-0.64-1.46-1.48		C64.541,15.302,65.421,14.421,66.441,14.421z M66.401,4.219h2.562l-1.146,9.342h-2.58L66.401,4.219z"/></g><g id="btn-continue" class="aristotle-svg-svg ">	<path class="st13" d="M53.56,7.064l47.439,10.121v22.418l-47.415,9.339L6.999,39.611V16.391L53.56,7.064 M53.578,4L4,13.936v28.139		l49.578,9.938L104,42.074V14.764L53.578,4L53.578,4z"/><path class="st13" d="M22.882,27.127c-1.135,0.379-1.513,0.463-2.171,0.463c-1.373,0-2.787-0.615-3.74-1.625		c-0.799-0.854-1.232-1.979-1.232-3.229c0-2.759,2.188-4.938,4.944-4.938c0.729,0,1.317,0.127,2.199,0.478v2.899		c-0.574-0.688-1.261-1.022-2.103-1.022c-1.457,0-2.508,1.077-2.508,2.577c0,0.798,0.268,1.429,0.826,1.891		c0.477,0.396,1.062,0.616,1.682,0.616c0.798,0,1.473-0.308,2.103-0.979V27.127L22.882,27.127z"/><path class="st13" d="M26.84,18.893c0.883-0.744,2.115-1.178,3.418-1.178c1.556,0,2.83,0.521,3.824,1.562		c0.867,0.911,1.346,2.115,1.346,3.418c0,1.479-0.646,2.857-1.752,3.796c-0.938,0.785-2.087,1.185-3.459,1.185		c-2.941,0-5.127-2.156-5.127-5.07C25.09,21.217,25.735,19.83,26.84,18.893z M30.258,25.321c1.457,0,2.634-1.177,2.634-2.634		c0-1.442-1.177-2.618-2.634-2.618c-1.442,0-2.633,1.176-2.633,2.591C27.625,24.145,28.787,25.321,30.258,25.321z"/><path class="st13" d="M38.04,17.995h2.423l4.469,5.723v-5.723h2.424v9.351h-2.424l-4.469-5.723v5.723H38.04V17.995z"/><path class="st13" d="M51.383,20.055h-1.977v-2.062h6.415v2.062h-2.017v7.283H51.38L51.383,20.055L51.383,20.055z"/><path class="st13" d="M57.892,17.995h2.424v9.351h-2.424V17.995z"/><path class="st13" d="M63.45,17.995h2.426l4.468,5.723v-5.723h2.424v9.351h-2.424l-4.468-5.723v5.723H63.45V17.995z"/><path class="st13" d="M83.838,23.389c0,1.373-0.238,2.114-0.911,2.871c-0.771,0.867-1.862,1.312-3.222,1.312		c-1.431,0-2.689-0.53-3.333-1.396c-0.49-0.658-0.675-1.414-0.675-2.787v-5.396h2.426v5.062c0,1.062,0.025,1.271,0.266,1.666		c0.267,0.445,0.771,0.715,1.357,0.715c0.616,0,1.163-0.295,1.415-0.756c0.21-0.365,0.253-0.646,0.253-1.625v-5.062h2.424V23.389		L83.838,23.389z"/><path class="st13" d="M86.774,17.995h5.311v2.062h-2.887v1.555h2.731v2.062h-2.731v1.604h2.887v2.062h-5.311V17.995z"/><path class="st13" d="M23.785,39.592c9.118-3.729,18.764-6.439,28.75-8.035c-1.774,1.193-3.505,2.426-5.185,3.688		c7.09-1.222,14.346-1.854,21.689-1.883c-2.289,0.897-4.526,1.856-6.71,2.87c7.286,0.594,14.524,1.807,21.636,3.633		c-10.918-1.293-21.757-1.141-32.248,0.337c1.785-1.122,3.617-2.205,5.496-3.248c-6.662,0.643-13.21,1.79-19.58,3.438		c1.723-1.522,3.508-3.013,5.354-4.459C36.509,36.663,30.089,37.887,23.785,39.592z"/></g><g id="perfect-answer" class="aristotle-svg-svg ">	<g id="XMLID_2433_" class="aristotle-svg-svg ">		<polygon class="st17" points="18.725,36.129 4,28.485 4,11.644 18.725,4 33.451,11.644 33.451,28.485 		"/></g>	<polygon class="st13" points="18.725,7.843 21.697,15.764 29.715,16.239 23.533,21.707 25.516,29.821 18.725,25.381 11.934,29.821 		13.916,21.707 7.735,16.239 15.754,15.764 	"/></g><g id="quiz-btn" class="aristotle-svg-svg ">	<g  class="bg " >		<polygon class="st17" points="4,50 63,62 123,50 123,17 63,4 4,16 		"/></g>	<path class="st12" d="M27.545,46.795c10.854-4.434,22.326-7.664,34.213-9.562c-2.112,1.422-4.17,2.885-6.169,4.387		c8.438-1.451,17.07-2.213,25.812-2.238c-2.729,1.068-5.395,2.209-7.983,3.416c8.672,0.705,17.284,2.148,25.746,4.322		c-12.992-1.539-25.894-1.355-38.375,0.4c2.125-1.336,4.305-2.625,6.541-3.865c-7.933,0.756-15.721,2.129-23.302,4.088		c2.052-1.812,4.174-3.584,6.369-5.309C42.687,43.309,35.047,44.766,27.545,46.795z"/></g><g id="btn-generic" class="aristotle-svg-svg ">	<path class="st12" d="M4,51.002l59,12l60-12V17L63,4l0,0L4,16V51.002z M7,18.451L62.979,7.065L120,19.419v29.123L63.005,59.94		L7,48.549V18.451z"/><path class="st12" d="M32.495,50.604c9.365-3.825,19.271-6.614,29.529-8.252c-1.824,1.227-3.6,2.491-5.326,3.787		c7.283-1.253,14.734-1.91,22.277-1.934c-2.351,0.923-4.648,1.907-6.893,2.948c7.483,0.609,14.921,1.855,22.223,3.731		c-11.213-1.329-22.346-1.171-33.122,0.346c1.834-1.153,3.716-2.266,5.646-3.336c-6.844,0.652-13.564,1.838-20.106,3.528		c1.769-1.565,3.602-3.093,5.498-4.582C45.563,47.594,38.97,48.852,32.495,50.604z"/></g><g id="speaker" class="aristotle-svg-svg ">	<path class="st0" d="M32.61,58.493c10.218-2.746,17.732-11.951,17.732-22.892c0-10.941-7.515-20.146-17.732-22.891"/><path class="st0" d="M40.538,67.202c14.2-4.416,24.44-16.891,24.44-31.601c0-14.71-10.24-27.185-24.44-31.601"/><path class="st0" d="M28.11,47.821c5.122-2.226,8.655-6.85,8.655-12.219c0-5.371-3.533-9.996-8.655-12.221"/><polygon class="st12" points="12.774,44.639 12.774,26.563 20.401,21.772 20.401,49.43 	"/><rect x="4" y="26.563" class="st12" width="11.273" height="18.075"/></g><g id="no-phone" class="aristotle-svg-svg ">	<path class="st12" d="M71.691,85.5H35.309V21.501h36.382V85.5z M71.886,18.501H35.115c-1.55,0-2.807,1.256-2.807,2.806v64.388		c0,1.549,1.257,2.806,2.807,2.806h36.771c1.55,0,2.806-1.257,2.806-2.806V21.307C74.691,19.757,73.435,18.501,71.886,18.501"/><path class="st12" d="M64.94,71.566H42.059V27.935h22.882L64.94,71.566L64.94,71.566z M66.587,24.935H40.414		c-0.748,0-1.354,0.605-1.354,1.354v46.922c0,0.748,0.606,1.355,1.354,1.355h26.173c0.748,0,1.354-0.607,1.354-1.355V26.288		C67.94,25.54,67.335,24.935,66.587,24.935"/><circle class="st1" cx="53.5" cy="53.5" r="49.5"/><line class="st1" x1="87.5" y1="19.5" x2="19.5" y2="87.5"/><line class="st0" x1="48.5" y1="79.719" x2="58.5" y2="79.719"/></g><g id="duty" class="aristotle-svg-svg ">	<path class="st20" d="M24,8.515l16,8.375v18.228l-16,8.375L8,35.117V16.89L24,8.515 M24,4L4,14.469v23.062L24,48l20-10.469V14.469		L24,4L24,4z"/></g><g id="duty-active" class="aristotle-svg-svg ">	<path class="st8" d="M24,8.515l16,8.375v18.221l-16,8.375L8,35.111V16.89L24,8.515 M24,4L4,14.469v23.062L24,48l20-10.469V14.469		L24,4L24,4z"/><polygon class="st12" points="24,40.5 11.275,33.602 11.275,18.399 24,11.5 36.726,18.399 36.726,33.602 	"/></g><g id="duty-complete" class="aristotle-svg-svg ">	<polygon class="st23" points="29.197,17.963 34.619,21.318 28.237,21.314 27.411,21.314 36.728,29.252 36.728,18.399 24,11.5 		21.205,13.016 	"/><polygon class="st23" points="20.313,31.411 15.219,28.18 21.256,28.07 23.596,28.027 11.272,18.57 11.272,33.601 24,40.5 		29.737,37.39 	"/><polygon class="st4" points="32.608,39.363 24,43.869 7.637,35.304 7.637,16.696 12.953,13.914 10.302,11.17 4,14.469 4,37.531 		24,48 36.154,41.639 	"/><polygon class="st4" points="24,4 14.766,8.834 18.359,11.084 24,8.131 40.363,16.696 40.363,35.304 37.713,36.691 40.461,39.384 		44,37.531 44,14.469 	"/><polygon class="st12" points="9.454,7.667 28.238,19.428 22.482,19.424 38.131,32.91 31.345,33.008 41.316,42.777 21.289,29.927 		28.816,29.789 12.09,16.806 18.103,16.616 	"/></g><g id="btn-acknowledge" class="aristotle-svg-svg ">	<polygon  class="bg  st20" points="5.503,55.053 5.503,18.948 95.223,5.518 186.503,20.073 186.503,55.05 		95.231,68.484 	"/><path  class="outline  st17" d="M95.215,7.036l89.788,14.317v32.401l-89.77,13.213L7.003,53.76V20.239L95.215,7.036		 M95.229,4L4,17.655v38.69L95.229,70L188,56.345V18.793L95.229,4L95.229,4z"/><path  class="lightning  st12" d="M60.195,50.794c10.851-4.432,22.326-7.663,34.213-9.562		c-2.113,1.422-4.17,2.886-6.169,4.388c8.437-1.452,17.07-2.213,25.811-2.24c-2.725,1.069-5.388,2.21-7.979,3.416		c8.673,0.706,17.286,2.149,25.746,4.323c-12.991-1.539-25.896-1.356-38.375,0.4c2.125-1.336,4.305-2.625,6.54-3.865		c-7.935,0.756-15.726,2.13-23.307,4.088c2.057-1.813,4.182-3.584,6.371-5.309C75.337,47.309,67.698,48.765,60.195,50.794z"/></g><g id="chapter-bracket" class="aristotle-svg-svg ">	<polyline class="st6" points="4,104.992 27,104.992 27,4 4,4 	"/></g><g id="tesselation" class="aristotle-svg-svg ">	<rect x="4.006" y="4" class="st14" width="1024" height="768"/><path class="st15" d="M158.241,148.183c-22.989,13.425-45.722,28.383-68.148,45.806C67.654,159.675,45.53,121.094,23.745,77.003		C67.308,105.954,112.267,129.343,158.241,148.183z"/><path class="st15" d="M4.004,63.43c6.553,4.655,13.134,9.178,19.741,13.573c-6.612,4.599-13.188,9.448-19.739,14.581"/><path class="st15" d="M4.008,248.9c6.546,1.995,13.126,3.933,19.731,5.816c-6.606,7.11-13.188,14.545-19.735,22.339"/><path class="st15" d="M23.745,432.43c-6.612,9.621-13.188,19.639-19.739,30.092"/><path class="st15" d="M4,619.842c6.549-3.326,13.131-6.562,19.745-9.699c-6.605,12.133-13.188,24.736-19.739,37.85"/><path class="st15" d="M298.849,191.806c-23.813,13.436-47.477,27.41-70.924,42.702c-23.449-25.637-46.692-54.072-69.688-86.325		C204.216,167.013,251.222,181.297,298.849,191.806z"/><path class="st15" d="M443.202,212.397c-24.229,15.043-48.416,29.713-72.491,44.723c-24.067-19.889-48.046-41.379-71.856-65.313		C346.478,202.301,394.733,209.028,443.202,212.397z"/><path class="st15" d="M588.812,212.397c-24.232,18.401-48.517,35.48-72.806,51.963c-24.286-16.484-48.573-33.561-72.811-51.963		C491.67,215.751,540.345,215.751,588.812,212.397z"/><path class="st15" d="M733.164,191.806c-23.812,23.934-47.787,45.423-71.857,65.313c-24.077-15.01-48.255-29.682-72.489-44.723		C637.282,209.028,685.535,202.302,733.164,191.806z"/><path class="st15" d="M873.772,148.183c-22.988,32.255-46.24,60.689-69.687,86.325c-23.45-15.293-47.107-29.267-70.929-42.701		C780.793,181.297,827.795,167.012,873.772,148.183z"/><path class="st15" d="M1008.269,77.002c-21.777,44.094-43.914,82.672-66.343,116.986c-22.438-17.423-45.166-32.379-68.153-45.806		C919.754,129.344,964.707,105.955,1008.269,77.002z"/><path class="st15" d="M1028.002,91.578c-6.545-5.131-13.123-9.979-19.729-14.575c6.612-4.395,13.188-8.917,19.739-13.572"/><path class="st15" d="M4,156.163c28.115,14.279,56.849,26.818,86.088,37.826c-22.434,17.427-44.562,37.314-66.345,60.728		c-6.612-10.876-13.188-22.187-19.739-33.969"/><path class="st15" d="M227.925,234.508c-23.451,15.295-46.695,31.907-69.688,50.71c-22.984-26.876-45.721-56.921-68.15-91.229		C134.95,210.874,181.023,224.164,227.925,234.508z"/><path class="st15" d="M370.711,257.12c-24.073,15.011-48.046,30.357-71.856,46.791c-23.813-20.936-47.479-43.771-70.924-69.402		C274.827,244.844,322.562,252.239,370.711,257.12z"/><path class="st15" d="M516.006,264.36c-24.286,16.484-48.573,32.371-72.812,48.372c-24.229-17.444-48.417-35.726-72.489-55.612		C418.863,261.99,467.437,264.356,516.006,264.36z"/><path class="st15" d="M661.301,257.12c-24.076,19.886-48.264,38.169-72.491,55.612c-24.23-16.002-48.521-31.888-72.803-48.372		C564.579,264.356,613.151,261.993,661.301,257.12z"/><path class="st15" d="M804.088,234.508c-23.451,25.634-47.109,48.468-70.932,69.402c-23.812-16.434-47.785-31.779-71.854-46.791		C709.454,252.239,757.187,244.845,804.088,234.508z"/><path class="st15" d="M941.927,193.99c-22.431,34.306-45.168,64.354-68.156,91.229c-22.988-18.801-46.233-35.415-69.685-50.711		C850.991,224.165,897.062,210.875,941.927,193.99z"/><path class="st15" d="M1028.01,220.745c-6.549,11.784-13.13,23.095-19.743,33.972c-21.783-23.413-43.908-43.303-66.34-60.728		c29.241-11.008,57.97-23.546,86.085-37.825"/><path class="st15" d="M158.241,285.219c-22.989,18.803-45.722,39.801-68.148,63.978c-22.438-27.561-44.562-58.66-66.348-94.48		C67.308,267.124,112.267,277.146,158.241,285.219z"/><path class="st15" d="M298.849,303.91c-23.813,16.435-47.477,33.956-70.924,53.385c-23.449-21.499-46.692-45.204-69.688-72.075		C204.216,293.287,251.222,299.408,298.849,303.91z"/><path class="st15" d="M443.202,312.731c-24.229,16.004-48.416,32.12-72.491,49.08c-24.067-17.938-48.046-36.97-71.856-57.901		C346.478,308.408,394.733,311.288,443.202,312.731z"/><path class="st15" d="M588.812,312.731c-24.232,17.441-48.517,34.045-72.806,50.526c-24.286-16.483-48.573-33.085-72.811-50.526		C491.67,314.167,540.345,314.167,588.812,312.731z"/><path class="st15" d="M733.164,303.91c-23.812,20.931-47.787,39.96-71.857,57.901c-24.077-16.962-48.255-33.078-72.489-49.08		C637.282,311.288,685.535,308.406,733.164,303.91z"/><path class="st15" d="M873.772,285.219c-22.988,26.875-46.24,50.583-69.687,72.081c-23.45-19.437-47.107-36.949-70.929-53.384		C780.793,299.409,827.795,293.285,873.772,285.219z"/><path class="st15" d="M1008.269,254.716c-21.777,35.819-43.914,66.92-66.343,94.48c-22.438-24.177-45.166-45.171-68.153-63.978		C919.754,277.146,964.707,267.121,1008.269,254.716z"/><path class="st15" d="M1028.01,277.053c-6.547-7.793-13.128-15.227-19.741-22.336c6.613-1.883,13.194-3.821,19.741-5.816"/><path class="st15" d="M4.008,341.635c28.107,2.854,56.838,5.356,86.078,7.562c-22.438,24.188-44.562,51.549-66.349,83.233		c-6.606-8.363-13.188-17.088-19.731-26.211"/><path class="st15" d="M227.925,357.294c-23.451,19.435-46.695,40.77-69.688,64.959c-22.984-21.492-45.721-45.509-68.15-73.062		C134.95,352.574,181.023,355.227,227.925,357.294z"/><path class="st15" d="M370.711,361.811c-24.073,16.964-48.046,34.769-71.856,54.203c-23.813-17.938-47.479-37.229-70.924-58.719		C274.827,359.362,322.562,360.838,370.711,361.811z"/><path class="st15" d="M516.006,363.257c-24.286,16.479-48.573,32.846-72.812,49.809c-24.229-16.48-48.417-33.322-72.489-51.255		C418.863,362.785,467.437,363.257,516.006,363.257z"/><path class="st15" d="M661.301,361.811c-24.076,17.935-48.264,34.771-72.491,51.255c-24.23-16.963-48.521-33.326-72.803-49.809		C564.579,363.257,613.151,362.785,661.301,361.811z"/><path class="st15" d="M804.088,357.295c-23.451,21.488-47.109,40.779-70.932,58.718c-23.812-19.438-47.785-37.238-71.854-54.203		C709.454,360.835,757.187,359.36,804.088,357.295z"/><path class="st15" d="M941.927,349.198c-22.431,27.552-45.168,51.562-68.156,73.062c-22.988-24.188-46.233-45.525-69.685-64.958		C850.991,355.227,897.062,352.573,941.927,349.198z"/><path class="st15" d="M1028.01,406.215c-6.549,9.123-13.13,17.85-19.743,26.215c-21.783-31.688-43.908-59.05-66.34-83.232		c29.239-2.2,57.967-4.707,86.081-7.562"/><path class="st15" d="M158.241,422.254c-22.989,24.188-45.722,51.217-68.148,82.146c-22.438-20.805-44.562-44.426-66.348-71.975		C67.308,428.295,112.267,424.947,158.241,422.254z"/><path class="st15" d="M298.849,416.014c-23.813,19.438-47.477,40.5-70.924,64.062c-23.449-17.357-46.692-36.338-69.688-57.822		C204.216,419.561,251.222,417.518,298.849,416.014z"/><path class="st15" d="M443.202,413.066c-24.229,16.963-48.416,34.525-72.491,53.438c-24.067-15.984-48.046-32.562-71.856-50.488		C346.478,414.514,394.733,413.547,443.202,413.066z"/><path class="st15" d="M588.812,413.066c-24.232,16.48-48.517,32.607-72.806,49.088c-24.286-16.479-48.573-32.604-72.811-49.088		C491.67,412.586,540.345,412.586,588.812,413.066z"/><path class="st15" d="M733.164,416.014c-23.812,17.93-47.787,34.504-71.857,50.482c-24.077-18.906-48.255-36.473-72.489-53.436		C637.282,413.547,685.535,414.51,733.164,416.014z"/><path class="st15" d="M873.772,422.254c-22.988,21.486-46.24,40.465-69.687,57.822c-23.45-23.562-47.107-44.635-70.929-64.062		C780.793,417.518,827.795,419.561,873.772,422.254z"/><path class="st15" d="M1008.269,432.43c-21.777,27.547-43.914,51.172-66.343,71.975c-22.438-30.934-45.166-57.961-68.153-82.145		C919.754,424.951,964.707,428.295,1008.269,432.43z"/><path class="st15" d="M1028.01,462.523c-6.547-10.453-13.128-20.473-19.741-30.094c6.61,0.629,13.188,1.271,19.733,1.938"/><path class="st15" d="M4.004,527.105c28.115-8.566,56.847-16.092,86.084-22.699c-22.434,30.938-44.562,65.783-66.345,105.738		c-6.612-5.855-13.188-11.996-19.739-18.457"/><path class="st15" d="M227.925,480.082c-23.451,23.57-46.695,49.646-69.688,79.209c-22.984-16.107-45.721-34.088-68.15-54.885		C134.95,494.271,181.023,486.291,227.925,480.082z"/><path class="st15" d="M370.711,466.504c-24.073,18.908-48.046,39.178-71.856,61.607c-23.813-14.934-47.479-30.678-70.924-48.035		C274.827,473.873,322.562,469.436,370.711,466.504z"/><path class="st15" d="M516.006,462.154c-24.286,16.484-48.573,33.324-72.812,51.246c-24.229-15.52-48.417-30.912-72.489-46.895		C418.863,463.58,467.437,462.158,516.006,462.154z"/><path class="st15" d="M661.301,466.504c-24.076,15.979-48.264,31.377-72.491,46.895c-24.23-17.924-48.521-34.764-72.803-51.246		C564.579,462.16,613.151,463.578,661.301,466.504z"/><path class="st15" d="M804.088,480.082c-23.451,17.357-47.109,33.104-70.932,48.035c-23.812-22.436-47.785-42.701-71.854-61.607		C709.454,469.436,757.187,473.875,804.088,480.082z"/><path class="st15" d="M941.927,504.406c-22.431,20.797-45.168,38.771-68.156,54.883c-22.988-29.561-46.233-55.637-69.685-79.207		C850.991,486.287,897.062,494.273,941.927,504.406z"/><path class="st15" d="M1028.01,591.688c-6.549,6.461-13.13,12.604-19.743,18.455c-21.783-39.957-43.908-74.799-66.34-105.736		c29.241,6.605,57.97,14.131,86.086,22.699"/><path class="st15" d="M158.241,559.289c-22.989,29.57-45.722,62.641-68.148,100.324c-22.438-14.045-44.562-30.188-66.348-49.471		C67.308,589.463,112.267,572.752,158.241,559.289z"/><path class="st15" d="M4.004,712.49c76.556-54.496,157.853-90.742,241.562-114.812c100.146-28.488,203.746-39.562,306.866-36.105		c103.119,3.768,205.761,22.049,304.046,59.453c59.021,22.65,116.478,52.195,171.527,91.258"/><path class="st15" d="M298.849,528.117c-23.813,22.439-47.477,47.047-70.924,74.75c-23.449-13.227-46.692-27.469-69.688-43.578		C204.216,545.838,251.222,535.627,298.849,528.117z"/><path class="st15" d="M443.202,513.4c-24.229,17.926-48.416,36.932-72.491,57.795c-24.067-14.035-48.046-28.146-71.856-43.078		C346.478,520.617,394.733,515.809,443.202,513.4z"/><path class="st15" d="M588.812,513.4c-24.232,15.521-48.517,31.17-72.806,47.65c-24.286-16.48-48.573-32.129-72.811-47.65		C491.67,511.002,540.345,511.002,588.812,513.4z"/><path class="st15" d="M733.164,528.117c-23.812,14.936-47.787,29.045-71.857,43.078c-24.077-20.863-48.255-39.869-72.489-57.795		C637.282,515.809,685.535,520.617,733.164,528.117z"/><path class="st15" d="M873.772,559.289c-22.988,16.107-46.24,30.355-69.687,43.578c-23.45-27.705-47.107-52.311-70.929-74.75		C780.793,535.627,827.795,545.836,873.772,559.289z"/><path class="st15" d="M1008.269,610.143c-21.777,19.271-43.914,35.424-66.343,49.471c-22.438-37.688-45.166-70.752-68.153-100.324		C919.754,572.752,964.707,589.463,1008.269,610.143z"/><path class="st15" d="M1028.006,647.984c-6.552-13.111-13.125-25.711-19.737-37.842c6.612,3.141,13.194,6.371,19.741,9.697"/></g><g id="lightning-fist" class="aristotle-svg-svg ">	<line class="st10" x1="239.281" y1="86.228" x2="4" y2="86.228"/><line class="st3" x1="239.281" y1="109.561" x2="115" y2="109.561"/><line class="st10" x1="335" y1="86.228" x2="570.281" y2="86.228"/><line class="st3" x1="335" y1="109.561" x2="459.281" y2="109.561"/><polygon class="st12" points="321.09,70.65 323.229,69.733 313.185,64.475 312.241,66.019 	"/><polygon class="st12" points="326.575,90.768 328.381,90.983 328.381,80.46 326.575,81.442 	"/><polygon class="st12" points="328.381,103.205 326.575,103.161 326.575,113.203 328.381,114.552 	"/><polygon class="st12" points="301.181,60.229 302.274,58.765 293.562,54.204 293.515,56.215 	"/><polygon class="st12" points="247.534,102.85 245.728,102.636 245.728,113.667 247.534,112.685 	"/><polygon class="st12" points="253.866,70.208 262.24,65.824 261.526,64.161 252.069,69.11 	"/><polygon class="st12" points="273.229,60.071 281.272,55.861 281.53,53.688 272.366,58.485 	"/><polygon class="st12" points="245.728,79.176 245.728,90.428 247.534,90.473 247.534,80.525 	"/><path class="st13" d="M282.671,59.385l6.115-4.312l-1.952,16.062l2.232,0.22c0.813,0.06,1.592,0.361,2.245,0.847l0.608-24.8		l-4.562,3.783l1.773-26.329l-4.562,3.791L286.168,4l-6.076,32.804l5.834-4.852L282.671,59.385z"/><path class="st13" d="M309.438,61.49l-10.419,13.86c1.076,0.188,2.026,0.754,2.701,1.627c0.357,0.476,0.604,1.011,0.752,1.573		l13.521-22.141l-5.845,0.995l14.705-21.913L319,36.494l13.705-20.545l-21.664,25.364l7.479-1.277l-16.536,22.122L309.438,61.49z"/><path class="st13" d="M317.325,74.23l6.789,3.141l-13.776,5.868c0,0.247-0.013,0.493-0.057,0.744l-0.826,4.731l22.873-12.461		l-5.558-2.062l23.688-11.625l-5.562-2.056l22.143-10.938l-31.444,11.133l7.113,2.639L317.325,74.23z"/><path class="st13" d="M253.662,41.254l10.891,25.389l3.146-6.791l5.677,13.328c0.123-0.015,0.241-0.038,0.366-0.038h3.044		c0.588,0,1.142,0.109,1.67,0.289l-11.874-21.794l-2.062,5.56l-11.625-23.688l-2.059,5.562l-10.938-22.143l11.135,31.439		L253.662,41.254z"/><polygon class="st13" points="347.157,89.771 352.003,95.606 324.575,92.347 328.885,98.463 309.017,96.047 309.46,100.933 		336.558,101.603 332.772,97.039 359.102,98.816 355.312,94.254 379.957,95.853 	"/><polygon class="st13" points="231.644,72.914 230.365,65.438 252.487,81.975 251.812,74.523 267.177,86.071 268.27,82.896 		268.27,81.12 246.737,67.968 247.733,73.813 225.82,59.107 226.823,64.955 206.278,51.249 	"/><polygon class="st13" points="343.508,121.59 344.786,129.066 322.663,112.531 323.338,119.982 310.138,110.061 307.534,113.784 		328.412,126.537 327.418,120.692 349.33,135.397 348.329,129.55 368.873,143.256 	"/><polygon class="st13" points="249.302,117.135 267.666,109.312 264.911,105.272 241.087,118.251 246.646,120.313 222.956,131.936 		228.52,133.993 206.378,144.932 237.823,133.797 230.709,131.166 256.092,120.276 	"/><polygon class="st13" points="222.281,98.031 249.708,101.291 245.398,95.174 263.297,97.35 264.894,92.708 237.727,92.035 		241.51,96.6 215.181,94.821 218.972,99.384 194.328,97.786 227.126,103.867 	"/><path class="st12" d="M319.094,122.96l-16.286,8.525l-0.062-9.26l8.196-11.729l-1.575-17.363l1.588-9.096		c0.405-2.33-1.08-4.569-3.387-5.104l-1.196-0.279c-1.115-0.261-2.293-0.054-3.277,0.531c-0.069-0.83-0.366-1.627-0.892-2.309		c-0.729-0.952-1.789-1.562-2.979-1.716l-2.932-0.361c-1.04-0.142-2.062,0.118-2.938,0.68c-0.021-1.021-0.362-1.991-1.03-2.779		c-0.779-0.924-1.872-1.479-3.056-1.562l-4.116-0.403c-1.227-0.089-2.409,0.315-3.321,1.146c-0.748,0.68-1.213,1.562-1.382,2.535		c-0.992-0.896-2.294-1.463-3.735-1.463h-3.106c-3.082,0-5.589,2.512-5.589,5.594v4.389l-6.387,18.546l14.099,20.671l-1.854,10.683		l-19.13-10.013l-2.139,0.917l34.449,18.032l33.836-17.71L319.094,122.96z M302.779,82.629c0.104-0.729,0.499-1.361,1.108-1.78		c0.607-0.418,1.342-0.562,2.062-0.396l1.195,0.28c1.354,0.312,2.225,1.628,1.98,2.994l-1.831,10.486		c-2.135,0.35-4.141,0.146-6.102-0.612L302.779,82.629z M306.549,96.292c-0.605,1.435-1.445,3.375-1.803,4.122		c-0.416,0.893-1.549,1.748-2.723,1.605l-0.874-0.093c-0.619-0.065-1.167-0.403-1.501-0.936c-0.336-0.521-0.411-1.16-0.212-1.749		l1.299-3.812C302.745,96.254,304.672,96.542,306.549,96.292z M293.136,78.97c0.069-0.707,0.412-1.347,0.975-1.785		c0.555-0.444,1.254-0.646,1.959-0.561l2.925,0.37c0.698,0.086,1.321,0.444,1.748,1.003c0.43,0.562,0.612,1.259,0.515,1.952		l-1.894,13.521c-2.563,0.751-4.996,0.494-7.562-0.807L293.136,78.97z M291.704,94.762c2.309,1.146,4.659,1.438,7.012,0.872		l-1.021,3.018c-0.002,0.003-0.001,0.006-0.005,0.011l-0.327,0.965c-0.354,1.037-1.385,1.664-2.479,1.481l-1.894-0.312		c-0.817-0.141-1.417-0.86-1.396-1.688L291.704,94.762z M282.213,75.118c0.021-0.724,0.32-1.389,0.856-1.874		c0.534-0.479,1.224-0.716,1.938-0.674l4.104,0.402c0.707,0.053,1.348,0.379,1.807,0.92c0.455,0.539,0.671,1.226,0.604,1.93		l-1.56,16.6c-2.694,0.479-4.6,0.23-6.938-0.573c1.008-0.399,2.016-0.977,2.896-1.79c1.812-1.682,2.729-4.021,2.729-6.975v-0.923		h-6.354v-3.616c0-0.416-0.054-0.813-0.14-1.208L282.213,75.118z M289.915,100.189c-1.77-1.735-4.336-3.008-7.995-3.572		l-0.071-3.133l-0.024-0.128c1.94,0.719,3.674,1.146,5.618,1.146c0.758,0,1.57-0.089,2.434-0.22l-0.122,4.773		C289.738,99.45,289.802,99.829,289.915,100.189z M269.857,78.545c0-2.062,1.678-3.739,3.743-3.739h3.105		c1.729,0,3.165,1.179,3.603,2.767l-0.108,4.595h-10.343V78.545z M275.59,133.729l2.079-12.003l-13.993-20.523l5.915-17.19h17.186		c-0.162,1.973-0.864,3.546-2.089,4.687c-2.688,2.501-7.095,2.216-7.141,2.209l-1.062-0.078l0.079,1.067		c0.111,1.541,0.226,4.288,0.021,5.09l-0.288,1.146h1.187c11.646,0,14.247,5.471,14.562,13.681c0.021,0.496,0.432,0.888,0.92,0.888		c0.019,0,0.023,0,0.037-0.002c0.508-0.02,0.904-0.448,0.889-0.958c-0.133-3.38-0.645-6.785-2.36-9.54		c0.353,0.203,0.746,0.354,1.166,0.418l1.896,0.314c0.229,0.037,0.452,0.056,0.675,0.056c1.056,0,2.038-0.408,2.78-1.104		c0.021,0.038,0.032,0.075,0.061,0.109c0.639,1.001,1.682,1.646,2.857,1.771l0.875,0.093c0.146,0.019,0.293,0.023,0.438,0.023		c1.896,0,3.501-1.305,4.146-2.686c0.313-0.675,0.994-2.241,1.573-3.586l1.054,12.386l-8.146,11.651l0.069,10.798l-7.089,3.709		v-8.248c0-0.511-0.409-0.924-0.924-0.924c-0.51,0-0.921,0.413-0.921,0.924v9.213l-4.979,2.609L275.59,133.729z M278.462,92.756		c0.479-0.021,1.094-0.066,1.778-0.176l-0.031,3.826c-0.552-0.047-1.101-0.096-1.696-0.107		C278.573,95.184,278.515,93.725,278.462,92.756z"/></g><g id="chapter-progress-chapter" class="aristotle-svg-svg ">	<path  class="teal  st20" d="M12,7.402l5,2.681v5.842l-5,2.676l-5-2.676v-5.842L12,7.402 M12,4L4,8.277v9.438l8,4.282		l8-4.282V8.277L12,4L12,4z"/></g><g id="chapter-progress-slide" class="aristotle-svg-svg ">	<rect x="4" y="4" class="st20" width="9" height="9"/></g><g id="chapter-progress-quiz" class="aristotle-svg-svg ">	<polygon  class="teal  st20" points="23.668,28.111 17.75,31.184 6.5,25.344 6.5,12.656 10.155,10.76 8.332,8.889 		4,11.138 4,26.862 17.75,34 26.106,29.662 	"/><polygon  class="teal  st20" points="17.75,4 11.401,7.296 13.872,8.83 17.75,6.816 29,12.656 29,25.344 27.178,26.289 		29.067,28.125 31.5,26.862 31.5,11.138 	"/><g>		<polygon class="st8" points="7.75,6.5 20.664,14.519 16.706,14.517 27.465,23.711 22.8,23.778 29.655,30.439 15.886,21.678 			21.061,21.583 9.561,12.731 13.695,12.603 		"/></g></g><g id="chapter-progress-duties" class="aristotle-svg-svg ">	<circle  class="teal st20" cx="8.5" cy="8.5" r="4.5"/></g><g id="closed-caption-btn" class="aristotle-svg-svg ">	<path class="st7" d="M23.145,7c1.692,0,3.068,1.376,3.068,3.068v7.863c0,1.692-1.376,3.068-3.068,3.068H10.063		C8.376,20.999,7,19.623,7,17.931v-7.863C7,8.376,8.376,7,10.063,7H23.145 M23.145,4H10.063C6.712,4,4,6.717,4,10.068v7.863		c0,3.352,2.716,6.068,6.063,6.068h13.081c3.354,0,6.068-2.717,6.068-6.068v-7.863C29.213,6.716,26.496,4,23.145,4L23.145,4z"/><path class="st7" d="M15.146,17.843c-0.567,0.234-0.896,0.312-1.391,0.312c-1.053,0-2.002-0.469-2.652-1.313		c-0.606-0.793-0.909-1.819-0.909-3.146c0-1.456,0.363-2.549,1.135-3.381c0.697-0.754,1.625-1.144,2.701-1.144		c0.455,0,0.739,0.052,1.155,0.208v2.482c-0.39-0.39-0.663-0.52-1.079-0.52c-0.944,0-1.521,0.871-1.521,2.314		c0,1.403,0.546,2.235,1.481,2.235c0.438,0,0.755-0.143,1.223-0.559L15.146,17.843z"/><path class="st7" d="M22.18,17.843c-0.571,0.234-0.896,0.312-1.391,0.312c-1.057,0-2.002-0.469-2.652-1.313		c-0.61-0.793-0.91-1.819-0.91-3.146c0-1.456,0.364-2.549,1.132-3.381c0.701-0.754,1.625-1.144,2.704-1.144		c0.455,0,0.74,0.052,1.156,0.208v2.482c-0.39-0.39-0.663-0.52-1.079-0.52c-0.947,0-1.521,0.871-1.521,2.314		c0,1.403,0.546,2.235,1.479,2.235c0.441,0,0.754-0.143,1.226-0.559L22.18,17.843z"/></g><g id="playhead" class="aristotle-svg-svg ">	<path class="st12" d="M12,4L4,8.282v9.438L12,22l8-4.279V8.282L12,4L12,4z"/><polygon class="st20" points="7.039,15.914 7.039,10.085 12,7.43 16.961,10.085 16.961,15.914 12,18.57 	"/></g><g id="pause-btn" class="aristotle-svg-svg ">	<g>		<path class="st20" d="M18,7.367l11,5.605v12.052L18,30.63L7,25.024V12.973L18,7.367 M18,4L4,11.138v15.728l14,7.138l14-7.138			V11.138L18,4L18,4z"/></g>	<g  class="pause" >		<g>			<rect x="13.5" y="13" class="st12" width="3" height="12"/></g>		<g>			<rect x="19.5" y="13" class="st12" width="3" height="12"/></g>	</g>	<g  class="play" >		<polygon class="st12" points="14.67,24.993 14.67,12.749 22.97,18.871 		"/></g>	<g  class="replay" >		<path class="st16" d="M17.819,13.11c3.182,0,5.761,2.58,5.761,5.761s-2.579,5.761-5.761,5.761c-3.182,0-5.761-2.58-5.761-5.761"/><polygon class="st12" points="19.306,16.845 14.55,12.932 19.306,9.804 		"/></g></g>';
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var APIproxy, Aristotle, ChromeUI, Commander, DevTools, Dictionary, Episode, EpisodeLoader, GlobalVars, LMSProxy, Logger, Movie, Parser, PausableDelays, SlideUX, SoundFX, SvgCartographer, isInternetExp,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

APIproxy = require("misc/api-proxy");

ChromeUI = require("chrome/chrome-ui");

Commander = require('misc/commander');

DevTools = require('misc/dev-tools');

Dictionary = require('misc/dictionary');

Episode = require("episode/episode");

EpisodeLoader = require('misc/episode-loader');

GlobalVars = require('misc/global-vars');

isInternetExp = require('misc/browser-detect');

LMSProxy = require('misc/lms-proxy');

Logger = require('misc/logger');

Movie = require('movie/movie');

Parser = require('misc/parser');

PausableDelays = require('misc/pausable-delays');

SlideUX = require('slide-ux/slide-ux');

SoundFX = require('misc/sfx');

SvgCartographer = require('misc/svg-cartographer');

Aristotle = (function() {
  function Aristotle($el, episodesDir, localDir, devEpisodeNum, isDevMode, isLocal, sudo) {
    var apiProxy, cartographer, commander, dictionary, globals, lmsProxy, parser, pausableDelays, shadowIcons, soundFx;
    this.$el = $el;
    this.episodesDir = episodesDir;
    this.localDir = localDir;
    this.devEpisodeNum = devEpisodeNum;
    this.isDevMode = isDevMode;
    this.isLocal = isLocal;
    if (sudo == null) {
      sudo = false;
    }
    this.onJsonLoaded = bind(this.onJsonLoaded, this);
    this.begin = bind(this.begin, this);
    bodymovin.setQuality('low');
    window.aristotle = this;
    aristotle.sudo = sudo;
    aristotle.isIE = isInternetExp();
    globals = new GlobalVars();
    commander = new Commander();
    dictionary = new Dictionary();
    lmsProxy = new LMSProxy(this.isLocal);
    apiProxy = new APIproxy();
    parser = new Parser();
    soundFx = new SoundFX();
    pausableDelays = new PausableDelays();
    cartographer = new SvgCartographer();
    shadowIcons = new pxicons.ShadowIcons();
    this.setDevMode(this.isDevMode);
    lmsProxy.begin(this.begin);
  }

  Aristotle.prototype.begin = function() {
    this.setInitialEpisodeNum();
    PubSub.publish('sessionkey.add');
    PubSub.subscribe('episode.load', (function(_this) {
      return function(m, data) {
        _this.episodeNum = data;
        return _this.init();
      };
    })(this));
    return PubSub.publish('episode.load', this.episodeNum);
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

  Aristotle.prototype.getEpisodeRoot = function(episodeNum) {
    if (episodeNum == null) {
      episodeNum = this.episodeNum;
    }
    return this.episodesDir + "/episode" + episode + "/";
  };

  Aristotle.prototype.setInitialEpisodeNum = function() {
    if (aristotle.lmsProxy.store != null) {
      if (aristotle.lmsProxy.store.location != null) {
        if (aristotle.lmsProxy.store.location.episodeNum) {
          this.episodeNum = aristotle.lmsProxy.store.location.episodeNum;
        }
      }
    }
    if (this.isDevMode && (this.devEpisodeNum != null)) {
      this.episodeNum = this.devEpisodeNum;
    }
    if (this.episodeNum == null) {
      return this.episodeNum = "0";
    }
  };

  return Aristotle;

})();

window.Aristotle = Aristotle;

},{"chrome/chrome-ui":3,"episode/episode":10,"misc/api-proxy":14,"misc/browser-detect":16,"misc/commander":17,"misc/dev-tools":18,"misc/dictionary":19,"misc/episode-loader":20,"misc/global-vars":21,"misc/lms-proxy":22,"misc/logger":23,"misc/parser":24,"misc/pausable-delays":25,"misc/sfx":27,"misc/svg-cartographer":28,"movie/movie":32,"slide-ux/slide-ux":54}],2:[function(require,module,exports){
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
        title: chapter.title,
        id: this.titleToId(chapter.title)
      });
      ref1 = chapter.slides;
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        slide = ref1[j];
        item = this.getItem(slide);
        if (slide.title != null) {
          if (item == null) {
            item = {
              kind: "slide"
            };
          }
          item.title = slide.title;
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

  ProgressMap.prototype.getItem = function(slide) {
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
          title: "quiz"
        };
      } else if (component.kind === "duties") {
        return {
          kind: "duties",
          title: "Duty Review"
        };
      }
    }
    return null;
  };

  ProgressMap.prototype.onMileStoneClick = function($el) {
    return PubSub.publish('episode.goto', $el.attr("data-title"));
  };

  ProgressMap.prototype.onMileStoneOver = function($el) {
    if (!$el.hasClass("viewed")) {
      return;
    }
    return PubSub.publish('label.attach', {
      el: $el,
      content: {
        title: $el.attr("data-title")
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
    var token2, token3, token4, token5, token6;
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
    this.tokens = [token2, token3, token4, token5, token6];
    this.build();
  }

  Top.prototype.build = function() {
    var callsign, data, episodeNum, name, ref;
    name = aristotle.lmsProxy.user.split(",");
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
    name = aristotle.lmsProxy.user.split(",");
    return $(".name", this.$top).html(name[1] + " \"" + callSign + "\" " + name[0]);
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
        return data.badge = "rank-badge-cyber-cadet";
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
    this.animation.goToAndStop(0);
    return this.animation.play();
  };

  VCRControls.prototype.activate = function(svgAnimation, completeCb) {
    this.completeCb = completeCb;
    this.reset();
    this.animation = svgAnimation.animation;
    this.animation.addEventListener('enterFrame', (function(_this) {
      return function() {
        var perc;
        perc = _this.animation.currentFrame / _this.animation.totalFrames;
        return _this.$playhead.css({
          width: (Math.round(perc * 100)) + "%"
        });
      };
    })(this));
    return this.animation.addEventListener('complete', (function(_this) {
      return function() {
        _this.isComplete = true;
        _this.$attic.removeClass('hidden');
        return _this.$pauseAndPlayBtn.addClass('complete');
      };
    })(this));
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
  function AudioTrack(src) {
    this.src = src;
    this.src = parse(this.src);
    AudioTrack.initSoundSettings();
    this.sound = createjs.Sound.createInstance(this.src);
  }

  AudioTrack.prototype.play = function(config, onComplete) {
    if (config == null) {
      config = {};
    }
    this.parseConfig(config);
    this.sound.play(config);
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
    this.isDead = true;
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

  AudioTrack.prototype.parseConfig = function(config) {
    if (config.loop != null) {
      if (config.loop === true && typeof config.loop !== "number") {
        config.loop = -1;
      }
    }
    return config.pan = 1;
  };

  return AudioTrack;

})();

},{}],8:[function(require,module,exports){
var ChapterHeading, Preloader,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Preloader = require('misc/asset-preloader');

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
    return preloader = new Preloader(data, this.complete, this.update);
  };

  ChapterHeading.prototype.update = function(perc) {
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

},{"misc/asset-preloader":15}],9:[function(require,module,exports){
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

  Chapter.prototype.start = function(firstSlideTitle) {
    var chapterHeading;
    this.firstSlideTitle = firstSlideTitle;
    PubSub.publish('meta.chapter.start', this.chapterData);
    aristotle.devTools.go(this.chapterData.dev, this.chapterData.slides);
    return chapterHeading = new ChapterHeading(this.chapterData, this.startSlides);
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
    this.playChapter = bind(this.playChapter, this);
    this.chapterComplete = bind(this.chapterComplete, this);
    this.nextChapter = bind(this.nextChapter, this);
    this.begin = bind(this.begin, this);
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
    this.token1 = PubSub.subscribe('episode.goto', (function(_this) {
      return function(m, data) {
        return _this.gotoLocationByTitle(data);
      };
    })(this));
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
    if (aristotle.devTools.skipSlate) {
      this.playChapter();
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
    if (aristotle.lmsProxy.store != null) {
      if (aristotle.lmsProxy.store.location != null) {
        if (aristotle.lmsProxy.store.location.episodeNum === this.episodeNum) {
          if (aristotle.lmsProxy.store.location.slide != null) {
            aristotle.lmsProxy.rehydrate();
            return;
          }
        }
      }
    }
    return setTimeout(this.playChapter, 3000);
  };

  Episode.prototype.gotoLocationByTitle = function(title) {
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
        if (slide.title === title) {
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
    this.playChapter(slide.title);
    return PubSub.publish('movie.rehydrate-layers', layersAr);
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
    PubSub.publish('state.save');
    this.chapters.getCurrentItem().destroy();
    return this.nextChapter();
  };

  Episode.prototype.playChapter = function(firstSlide) {
    if (firstSlide == null) {
      firstSlide = null;
    }
    this.chapters.getCurrentItem().start(firstSlide);
    return PubSub.publish('chapter.started', this.chapters.getCurrentItem().chapterData.title);
  };

  Episode.prototype.episodeComplete = function() {
    var newEpisodeNum;
    if (this.isLastEpisode) {
      return aristotle.lmsProxy.completeCourse();
    } else {
      newEpisodeNum = String(Number(aristotle.episodeNum) + 1);
      aristotle.lmsProxy.completeEpisode(newEpisodeNum);
      return PubSub.publish('episode.load', newEpisodeNum);
    }
  };

  Episode.prototype.destroy = function() {
    var chapter, i, len, ref, results;
    PubSub.unsubscribe(this.token1);
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

},{"episode/chapter":9,"misc/Sequence":13,"misc/asset-preloader":15}],11:[function(require,module,exports){
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

},{"episode/audio-track":7,"movie/svg-animation":33}],12:[function(require,module,exports){
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

},{"episode/slide":11,"misc/sequence":26}],13:[function(require,module,exports){
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
        return _this.addQuesitonActivity(data);
      };
    })(this));
    PubSub.subscribe('meta.quiz.question.finish', (function(_this) {
      return function(m, data) {
        return _this.finishQuizQuestion(data);
      };
    })(this));
  }

  APIproxy.prototype.startChapter = function(data) {
    appInsights.trackPageView(data.title);
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

  APIproxy.prototype.addQuesitonActivity = function(data) {
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
        ModuleId: aristotle.globals.get("trainingVersion"),
        ModuleAudience: "fake-module-audience",
        SessionId: aristotle.globals.get("sessionKey"),
        StudentId: aristotle.lmsProxy.userId,
        StudentName: aristotle.lmsProxy.user,
        StudentCallsign: aristotle.globals.get("callSign")
      },
      Chapters: [chapterData]
    };
    console.log(data);
    return this.postData(JSON.stringify(data));
  };

  APIproxy.prototype.postData = function(jsonData) {
    var xhr;
    xhr = new XMLHttpRequest();
    xhr.open("POST", "https://cipdefenderapi.azurewebsites.net:443/api/Learning", true);
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
    xhr.send(jsonData);
    return xhr.onloadend = (function(_this) {
      return function(a) {
        console.log("done");
        return console.log(a);
      };
    })(this);
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

},{}],15:[function(require,module,exports){
var AssetPreploader;

module.exports = AssetPreploader = (function() {
  function AssetPreploader(data, callback, progressCallback) {
    this.callback = callback;
    this.progressCallback = progressCallback;
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
    if (this.progressCallback != null) {
      preloadQueue.on("progress", (function(_this) {
        return function(e) {
          if (e.loaded > 1) {
            e.loaded = 1;
          }
          return _this.progressCallback(e.loaded);
        };
      })(this));
    }
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
      if (/.mp3|.m4a|.json|.svg|.jpg|.jpeg|.png/.test(item)) {
        return storage.push({
          src: "" + (aristotle.getAssetPath(item)),
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

},{}],16:[function(require,module,exports){
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

},{}],17:[function(require,module,exports){
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

},{}],18:[function(require,module,exports){
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

},{"episode/audio-track":7}],19:[function(require,module,exports){
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
  }

  Dictionary.prototype.get = function(term) {
    if (this.terms[term] != null) {
      return this.terms[term];
    }
    return aristotle["throw"]("Tried to use an unknown term: `" + term + "`");
  };

  return Dictionary;

})();

},{}],20:[function(require,module,exports){
var EpisodeLoader;

module.exports = EpisodeLoader = (function() {
  function EpisodeLoader(callback) {
    this.callback = callback;
    this.loadConfigData();
  }

  EpisodeLoader.prototype.loadConfigData = function() {
    return this.loadJson("local/config.json", (function(_this) {
      return function(json) {
        var key, ref, val;
        ref = JSON.parse(json);
        for (key in ref) {
          val = ref[key];
          aristotle.globals.set(key, val, false);
        }
        return _this.loadEpisode();
      };
    })(this));
  };

  EpisodeLoader.prototype.loadEpisode = function() {
    return this.loadJson(aristotle.getAssetPath("map.json"), (function(_this) {
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

},{}],21:[function(require,module,exports){
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

},{}],22:[function(require,module,exports){
var LMSProxy;

module.exports = LMSProxy = (function() {
  function LMSProxy(isLocal) {
    if (isLocal) {
      this.initScormStubs();
    }
    aristotle.lmsProxy = this;
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
  }

  LMSProxy.prototype.begin = function(cb) {
    var stateData;
    if (elbScorm.initCourse()) {
      this.loadState();
      this.user = elbScorm.GetUserName();
      this.userId = elbScorm.GetUserID();
      stateData = elbScorm.GetResumeData();
      this.createFormattedName();
      if (stateData != null) {
        aristotle.globals.vars = stateData.globalVars;
      }
      return cb();
    } else {
      return console.log("couldn't start the course");
    }
  };

  LMSProxy.prototype.loadState = function() {
    return this.store = elbScorm.GetResumeData();
  };

  LMSProxy.prototype.rehydrate = function() {
    if (this.store == null) {
      return;
    }
    return aristotle.episode.gotoLocationByTitle(this.store.location.slide);
  };

  LMSProxy.prototype.saveState = function(currentSlide) {
    this.store = {};
    this.store.globalVars = aristotle.globals.vars;
    this.store.layerState = aristotle.movie.dehydrateLayerState();
    if (aristotle.episode != null) {
      this.store.location = {
        episodeNum: aristotle.episode.episodeNum,
        slide: currentSlide
      };
      return elbScorm.SetResumeData(this.store);
    }
  };

  LMSProxy.prototype.completeEpisode = function(newEpisodeNum) {
    this.store = this.store != null ? this.store : {};
    this.store.location = {
      episodeNum: newEpisodeNum
    };
    return elbScorm.SetResumeData(this.store);
  };

  LMSProxy.prototype.createFormattedName = function() {
    var x;
    x = this.user.split(',');
    return this.name = x[1] + " " + x[0];
  };

  LMSProxy.prototype.completeCourse = function() {
    return elbScorm.SetComplete();
  };

  LMSProxy.prototype.initScormStubs = function() {
    window.elbScorm = {};
    elbScorm.initCourse = function() {
      return true;
    };
    elbScorm.GetUserName = function() {
      return "Ricks, Justin";
    };
    elbScorm.GetUserID = function() {
      return "abcdefg1234567";
    };
    elbScorm.GetCompanName = function() {
      return "Arizona Public Works";
    };
    elbScorm.SetResumeData = function(data) {
      return localStorage.setItem("currentState", JSON.stringify(data));
    };
    elbScorm.GetResumeData = function() {
      return JSON.parse(localStorage.getItem("currentState"));
    };
    return elbScorm.SetComplete = function() {
      return console.log("course is complete");
    };
  };

  return LMSProxy;

})();

},{}],23:[function(require,module,exports){
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

},{}],24:[function(require,module,exports){
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
    if (asset === "map.json") {
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

},{}],25:[function(require,module,exports){
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

},{}],26:[function(require,module,exports){
arguments[4][13][0].apply(exports,arguments)
},{"dup":13}],27:[function(require,module,exports){
var AudioTrack, SoundFX;

AudioTrack = require('episode/audio-track');

module.exports = SoundFX = (function() {
  function SoundFX() {
    this.count = 0;
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
    var id, track;
    track = new AudioTrack(data.content);
    track.play({
      volume: data.volume,
      loop: data.loop,
      offset: data.offset
    }, function() {
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
      return track.sfxId = id;
    }
  };

  return SoundFX;

})();

},{"episode/audio-track":7}],28:[function(require,module,exports){
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

},{}],29:[function(require,module,exports){
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
        results.push($el.on(event, function() {
          return aristotle.commander["do"](action);
        }));
      } else if (typeof action === "function") {
        results.push($el.on(event, function() {
          return action(id);
        }));
      } else {
        results.push(void 0);
      }
    }
    return results;
  };

  DynamicAssets.prototype.destroyGhost = function(ghostId) {
    return $("#" + ghostId + "-ghost").remove();
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

},{}],30:[function(require,module,exports){
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
      case 'bca':
        filterId = "highlightBCA";
        break;
      case 'pca':
        filterId = "highlightPCA";
        break;
      case 'bcsi':
        filterId = "highlightBCSI";
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
      filter: "auto"
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

},{}],31:[function(require,module,exports){
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
    var cachedOrNot, msg, symbol;
    cachedOrNot = this.isCached ? "cached" : "not cached";
    symbol = this.isCached ? "√" : "-";
    msg = symbol + " Layer " + this.depth + " : " + this.pristineLayerData.content + " is " + cachedOrNot;
    return console.log(msg);
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

  Layer.prototype.cache = function() {
    var $img, $svg, error, error1, img, svg;
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
    $img = $($.parseHTML("<img />"));
    img = $img[0];
    window.traceLayer = this;
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
      return console.log(error);
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

  Layer.prototype.addSvg = function($holder, layerData) {
    var me;
    me = this;
    return $holder.load(aristotle.getAssetPath(layerData.content), function() {
      if (layerData.cache) {
        return me.cache();
      }
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

  Layer.prototype.destroy = function() {
    return this.$layer.remove();
  };

  return Layer;

})();

},{"movie/svg-animation":33}],32:[function(require,module,exports){
var DynamicAssets, Highlighter, Layer, Movie;

DynamicAssets = require('movie/dynamic-assets');

Layer = require('movie/layer');

Highlighter = require('movie/highlighter');

module.exports = Movie = (function() {
  function Movie($el) {
    var token1, token10, token11, token12, token13, token2, token3, token4, token5, token6, token7, token8, token9;
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
    token13 = PubSub.subscribe('movie.rehydrate-layers', (function(_this) {
      return function(m, data) {
        return _this.rehydrateLayerState(data);
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

},{"movie/dynamic-assets":29,"movie/highlighter":30,"movie/layer":31}],33:[function(require,module,exports){
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
    if (data.nativeEvents != null) {
      this.addNativeEvents(data.nativeEvents);
    }
    if (data.vcr) {
      PubSub.publish('vcr-control.show', this);
    }
    this.animation.addEventListener('data_ready', (function(_this) {
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

  SVGAnimation.prototype.addNativeEvents = function(events) {
    var cb, event, results;
    results = [];
    for (event in events) {
      cb = events[event];
      results.push(this.animation.addEventListener(event, cb));
    }
    return results;
  };

  SVGAnimation.prototype.addOnComplete = function(onComplete) {
    return this.animation.addEventListener("complete", (function(_this) {
      return function() {
        return onComplete();
      };
    })(this));
  };

  SVGAnimation.prototype.play = function() {
    return this.animation.play();
  };

  SVGAnimation.prototype.stop = function() {
    return this.animation.stop();
  };

  SVGAnimation.prototype.destroy = function() {
    var error, error1;
    if (this.animation != null) {
      try {
        this.animation.destroy();
      } catch (error1) {
        error = error1;
        console.log(this.animation.renderer);
        console.log(this.animation.renderer.layers);
      }
      if (this.interval != null) {
        return clearInterval(this.interval);
      }
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

},{}],34:[function(require,module,exports){
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
    this.$txt = $('#callsign-txt', this.$node);
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
  }

  CallSignSelect.prototype.generateCallSign = function() {
    var nicks;
    nicks = ["Ace", "Aftershock", "Baldy", "Bam-Bam", "Bear", "Beetle", "Bigfoot", "Bizo", "Bonzo", "Boom-Boom", "Bowser", "Buck", "Bugs", "Bull", "Calico", "Deadeye", "Dutch", "Ghost", "Grits", "Hammer", "Hardcore 54", "Hawk", "Hawkeye", "Hollywood", "Huey", "Krazy", "Lucky", "Mad Dog", "Pineapple", "Pops", "Radar", "Rebel", "Red", "Shorty", "Sparky", "Spooky", "Tack", "B.A.", "Tex", "Tiger", "Tiny", "Wizard"];
    this.callSign = nicks[Math.floor(Math.random() * nicks.length)];
    PubSub.publish('meta.activity', {
      activity: "Generate Call Sign"
    });
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

},{"slide-ux/components/component":35}],35:[function(require,module,exports){
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
    var $a;
    if (data.hasLabels == null) {
      return;
    }
    if (!data.hasLabels) {
      return;
    }
    $a = $("a[data-label]", this.$node);
    $a.addClass("label-trigger");
    $a.on("mouseover", (function(_this) {
      return function(e) {
        return _this.addLabel(e);
      };
    })(this));
    return $a.on("mouseout", (function(_this) {
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
    return this.$node.remove();
  };

  return Component;

})();

},{}],36:[function(require,module,exports){
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

},{"slide-ux/components/component":35}],37:[function(require,module,exports){
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

},{"slide-ux/components/component":35}],38:[function(require,module,exports){
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

},{"slide-ux/components/component":35}],39:[function(require,module,exports){
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
    this.getData(data.definition);
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

  Duties.prototype.setUserHtml = function(data) {
    var $userContent;
    this.$content.empty();
    $userContent = $(jadeTemplate['slide-ux/components/duty-details'](data));
    this.$content.append($userContent);
    shadowIconsInstance.svgReplaceWithString(pxSvgIconString, this.$node);
    return $("#acknowledge", $userContent).on("click", (function(_this) {
      return function() {
        return _this.dutyAcknowledged();
      };
    })(this));
  };

  Duties.prototype.dutyAcknowledged = function() {
    var duty, i, len, ref;
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
    return this.setUserHtml(this.duties.currentItem());
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

},{"misc/sequence":26,"slide-ux/components/component":35}],40:[function(require,module,exports){
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

},{"slide-ux/components/component":35}],41:[function(require,module,exports){
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

},{"slide-ux/components/component":35}],42:[function(require,module,exports){
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
    PubSub.publish('continue.show');
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
      PubSub.publish('ghostux.remove', ghostId);
    }
    return ExploreCards.__super__.destroy.call(this);
  };

  return ExploreCards;

})(Component);

},{"misc/sequence":26,"slide-ux/components/component":35}],43:[function(require,module,exports){
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

},{"slide-ux/components/component":35}],44:[function(require,module,exports){
var Component, PersonalInfoIntro,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Component = require('slide-ux/components/component');

module.exports = PersonalInfoIntro = (function(superClass) {
  extend(PersonalInfoIntro, superClass);

  function PersonalInfoIntro($el, data) {
    PersonalInfoIntro.__super__.constructor.call(this, data);
    data.organization = "Arizona Public Service";
    data.name = aristotle.lmsProxy.name;
    this.$node = $(jadeTemplate['slide-ux/components/personal-info-intro'](data));
    this.superInit($el, this.$node, data);
  }

  return PersonalInfoIntro;

})(Component);

},{"slide-ux/components/component":35}],45:[function(require,module,exports){
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
    this.wrongGuesses = 0;
    this.countWrongAnswers();
  }

  Question.prototype.build = function() {
    this.$node = $(jadeTemplate['slide-ux/components/quiz/question'](this.data));
    this.$parent.prepend(this.$node);
    shadowIconsInstance.svgReplaceWithString(pxSvgIconString, this.$node);
    return $(".answer-wrapper", this.$node).on("click", this.onAnswerClick);
  };

  Question.prototype.onAnswerClick = function(e) {
    var $el, $response;
    if (this.guessedRight) {
      return;
    }
    $el = $(e.currentTarget);
    $el.addClass("flipped");
    $response = $(".response", e.currentTarget);
    this.guessedRight = $response.hasClass('right');
    PubSub.publish('meta.quiz.question.answer', {
      id: this.data.index + 1,
      answer: $(".front .txt", $(e.currentTarget)).text()
    });
    if (!this.guessedRight) {
      this.wrongGuesses++;
    } else {
      PubSub.publish('meta.quiz.question.finish', {
        id: this.data.index + 1,
        score: this.pointsEarned()
      });
    }
    this.answerCallback(this.guessedRight);
    return this.clickResults($el, this.guessedRight);
  };

  Question.prototype.clickResults = function($el, guessedRight) {
    var $node, points, result;
    if (guessedRight) {
      result = 'right';
      points = this.pointsEarned();
    } else {
      result = 'wrong';
      points = (this.questionValue / 2) / this.totalWrongAnswers;
    }
    $node = $(jadeTemplate['slide-ux/components/quiz/points-float']({
      points: points,
      result: result
    }));
    $el.append($node);
    return $node.velocity({
      opacity: 1,
      top: -35
    }, {
      duration: 1000,
      easing: "easeinoutquint"
    });
  };

  Question.prototype.countWrongAnswers = function() {
    var answer, i, len, ref, results;
    this.totalWrongAnswers = 0;
    ref = this.data.answers;
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      answer = ref[i];
      if (!answer.c) {
        results.push(this.totalWrongAnswers++);
      } else {
        results.push(void 0);
      }
    }
    return results;
  };

  Question.prototype.isPerfect = function() {
    return this.wrongGuesses === 0;
  };

  Question.prototype.getName = function() {
    if (this.name != null) {
      return this.name;
    } else {
      return "Quesiton " + (this.data.index + 1);
    }
  };

  Question.prototype.getScore = function() {
    return (this.pointsEarned()) + "/" + this.questionValue;
  };

  Question.prototype.pointsEarned = function() {
    var wrongGuessValue;
    wrongGuessValue = (this.questionValue / 2) / this.totalWrongAnswers;
    return this.questionValue - (wrongGuessValue * this.wrongGuesses);
  };

  Question.prototype.destroy = function() {
    return this.$node.remove();
  };

  return Question;

})();

},{}],46:[function(require,module,exports){
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
    this.build(this.data);
    this.superInit(this.$el, this.$node, this.data);
  }

  Quiz.prototype.build = function(data) {
    this.$node = $(jadeTemplate['slide-ux/components/quiz/quiz'](data));
    this.createQuiz($(".questions", this.$node), data);
    this.$nextBtn = $(".next-btn", this.$node);
    this.$nextBtn.on("click", this.onNextClick);
    return this.hideNext();
  };

  Quiz.prototype.createQuiz = function($el, data) {
    var i, j, len1, questionData, questionValue, questions, ref;
    PubSub.publish('meta.quiz.start');
    questions = [];
    questionValue = 120;
    ref = data.questions;
    for (i = j = 0, len1 = ref.length; j < len1; i = ++j) {
      questionData = ref[i];
      questionData.index = i;
      questions.push(new Question($el, questionData, questionValue, this.onQuestionAnswered));
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
    obj.episodeNumber = 2;
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
    ref1 = this.splitArrayInHalf(answers), obj.answers1 = ref1[0], obj.answers2 = ref1[1];
    obj.score = totalPointsEarned + " / " + totalPointsPossible;
    obj.scorePercentage = (totalPointsEarned / totalPointsPossible) * 100;
    obj.decisions = [
      {
        popularPercentage: 49,
        choice: "Cool building",
        category: "Physical Access Control System"
      }, {
        popularPercentage: 53,
        choice: "Dog House",
        category: "Pet Lodging"
      }, {
        popularPercentage: 23,
        choice: "Hospital",
        category: "Public Service Building"
      }
    ];
    return obj;
  };

  Quiz.prototype.splitArrayInHalf = function(ar) {
    var len;
    len = Math.ceil(ar.length / 2);
    return [ar.slice(0, len), ar.slice(len)];
  };

  return Quiz;

})(Component);

},{"misc/sequence":26,"slide-ux/components/component":35,"slide-ux/components/quiz/question":45}],47:[function(require,module,exports){
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
    return aristotle.commander["do"](item.click);
  };

  return SelectionDialogue;

})(Component);

},{"slide-ux/components/component":35}],48:[function(require,module,exports){
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

},{"slide-ux/components/component":35}],49:[function(require,module,exports){
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
    this.soundListen = PubSub.subscribe('playsound', (function(_this) {
      return function(m, data) {
        return PubSub.publish('meta.activity', {
          activity: "Play Test Sound"
        });
      };
    })(this));
  }

  SoundTest.prototype.destroy = function() {
    PubSub.unsubscribe(this.soundListen);
    return SoundTest.__super__.destroy.call(this);
  };

  return SoundTest;

})(Component);

},{"slide-ux/components/component":35}],50:[function(require,module,exports){
var ClosedCaption;

module.exports = ClosedCaption = (function() {
  function ClosedCaption($parent, playNextAction) {
    this.playNextAction = playNextAction;
    this.ccIsOn = true;
    this.$el = $(jadeTemplate['slide-ux/text-dialogue/closed-caption']({}));
    $parent.append(this.$el);
    shadowIconsInstance.svgReplaceWithString(pxSvgIconString, this.$el);
    this.ccDisplay = $(".closed-caption", this.$el);
    this.ccDisplay.css({
      display: 'none'
    });
    this.$speechBox = $(".text", this.$el);
    this.hideText();
    this.$icon = $(".closed-caption-icon");
    this.$icon.on('click', (function(_this) {
      return function(e) {
        return _this.toggleClosedCaptioning();
      };
    })(this));
  }

  ClosedCaption.prototype.toggleClosedCaptioning = function() {
    if (this.ccIsOn) {
      this.ccIsOn = false;
      this.ccDisplay.addClass('hidden');
      return this.$icon.addClass('off');
    } else {
      this.ccIsOn = true;
      this.ccDisplay.removeClass('hidden');
      return this.$icon.removeClass('off');
    }
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
    return this.ccDisplay.fadeIn();
  };

  ClosedCaption.prototype.hideText = function() {
    return this.ccDisplay.fadeOut();
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

},{}],51:[function(require,module,exports){
var Animation, Ctanlee;

Animation = require('movie/svg-animation');

module.exports = Ctanlee = (function() {
  function Ctanlee($parent, playNextAction) {
    var token1, token2, token3, token4;
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
    this.tokens = [token1, token2, token3, token4];
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
    this.$currentAnimation.stop(true);
    return this.$currentAnimation.velocity({
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
        _this.$currentAnimation.stop(true);
        _this.$currentAnimation.css({
          transform: "scale(" + scale + ")"
        });
        _this.$currentAnimation.velocity({
          scale: scale
        }, {
          duration: 0
        });
        _this.$currentAnimation.velocity({
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
    if ((data.emo != null) || (this.$currentAnimation == null)) {
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
    this.$oldAnimation = this.$currentAnimation;
    this.$currentAnimation = $('<div class="animation"/>');
    this.$faceHolder.append(this.$currentAnimation);
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
    return this.animation = new Animation(this.$currentAnimation, path, data);
  };

  Ctanlee.prototype.destroyOldFace = function() {
    if (this.oldAnimation != null) {
      this.oldAnimation.destroy();
      this.$oldAnimation.remove();
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

},{"movie/svg-animation":33}],52:[function(require,module,exports){
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
    return this.$continueStrip.removeClass("hidden");
  };

  GenericUi.prototype.hideContinueStrip = function() {
    return this.$continueStrip.addClass("hidden");
  };

  GenericUi.prototype.destroy = function() {};

  return GenericUi;

})();

},{}],53:[function(require,module,exports){
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

},{}],54:[function(require,module,exports){
var CallSignSelect, DefenderCards, Dialogue, DialoguePage, Duties, EpisodeIntro, EpisodeOutro, ExploreCards, GenericUiElements, GhostUX, Labler, PersonalInfoIntro, Quiz, SelectionDialogue, SimpleSelection, SlideUX, SoundTest, TextDialogue;

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

Labler = require('slide-ux/labler');

PersonalInfoIntro = require('slide-ux/components/personal-info-intro');

Quiz = require('slide-ux/components/quiz/quiz');

SelectionDialogue = require('slide-ux/components/selection-dialogue');

SimpleSelection = require('slide-ux/components/simple-selection');

SoundTest = require('slide-ux/components/sound-test');

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
    var component, i, len, ref, results;
    ref = this.components;
    results = [];
    for (i = 0, len = ref.length; i < len; i++) {
      component = ref[i];
      results.push(component.destroy());
    }
    return results;
  };

  SlideUX.prototype.destroy = function() {
    this.removeCurrentComponents();
    this.labler.destroy();
    this.dialogue.destroy();
    return this.genericUi.destroy();
  };

  return SlideUX;

})();

},{"slide-ux/components/call-sign-select":34,"slide-ux/components/defender-cards":36,"slide-ux/components/dialogue":38,"slide-ux/components/dialogue-page":37,"slide-ux/components/duties":39,"slide-ux/components/episode-intro":40,"slide-ux/components/episode-outro":41,"slide-ux/components/explore-cards":42,"slide-ux/components/ghost-ux":43,"slide-ux/components/personal-info-intro":44,"slide-ux/components/quiz/quiz":46,"slide-ux/components/selection-dialogue":47,"slide-ux/components/simple-selection":48,"slide-ux/components/sound-test":49,"slide-ux/generic-ui":52,"slide-ux/labler":53,"slide-ux/text-dialogue":55}],55:[function(require,module,exports){
var AudioTrack, ClosedCaption, Ctanlee, Sequence, TextDialogue;

AudioTrack = require('episode/audio-track');

Sequence = require('misc/sequence');

Ctanlee = require('slide-ux/dialogue-actors/ctanlee');

ClosedCaption = require('slide-ux/dialogue-actors/closed-caption');

module.exports = TextDialogue = (function() {
  function TextDialogue($parent) {
    var token1, token2, token3, token4, token5, token6, token7;
    aristotle.dialogue = this;
    this.cc = new ClosedCaption($parent, this.playNextAction);
    this.ctanlee = new Ctanlee($parent, this.playNextAction);
    $('html').on("keydown", (function(_this) {
      return function(e) {
        if (e.which === 39) {
          return _this.playNextAction();
        }
      };
    })(this));
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
    this.tokens = [token1, token2, token3, token4, token5, token6, token7];
  }

  TextDialogue.prototype.activate = function(data1) {
    this.data = data1;
    if (this.data.timeline == null) {
      return;
    }
    this.timeline = this.data.timeline;
    this.sequence = new Sequence(this.timeline);
    return this.playAction(this.sequence.getCurrentItem().action);
  };

  TextDialogue.prototype.say = function(text, audio, next, txtPos) {
    if (text != null) {
      this.actor.say(text, txtPos);
      this.actor.startTalking();
    } else {
      this.actor.hideText();
    }
    if (audio != null) {
      if (this.track != null) {
        this.track.stop();
      }
      this.track = new AudioTrack(audio);
      this.track.play({}, (function(_this) {
        return function() {
          _this.track.destroy();
          _this.track = null;
          _this.actor.stopTalking();
          if (next === 'audio') {
            return _this.playNextAction();
          }
        };
      })(this));
    }
    if (next === 'click') {
      this.actor.showNext();
    } else {
      this.actor.hideNext();
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

  TextDialogue.prototype.complete = function() {
    PubSub.publish('dialogue.complete');
    return this.actor.complete();
  };

  TextDialogue.prototype.playNextAction = function() {
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

},{"episode/audio-track":7,"misc/sequence":26,"slide-ux/dialogue-actors/closed-caption":50,"slide-ux/dialogue-actors/ctanlee":51}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9ndWxwLWNvZmZlZWlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiYXJpc3RvdGxlLmNvZmZlZSIsImNocm9tZS9ib3R0b20tdWktZWxlbWVudHMuY29mZmVlIiwiY2hyb21lL2Nocm9tZS11aS5jb2ZmZWUiLCJjaHJvbWUvcHJvZ3Jlc3MtbWFwLmNvZmZlZSIsImNocm9tZS90b3AuY29mZmVlIiwiY2hyb21lL3Zjci1jb250cm9scy5jb2ZmZWUiLCJlcGlzb2RlL2F1ZGlvLXRyYWNrLmNvZmZlZSIsImVwaXNvZGUvY2hhcHRlci1oZWFkaW5nLmNvZmZlZSIsImVwaXNvZGUvY2hhcHRlci5jb2ZmZWUiLCJlcGlzb2RlL2VwaXNvZGUuY29mZmVlIiwiZXBpc29kZS9zbGlkZS5jb2ZmZWUiLCJlcGlzb2RlL3NsaWRlcy5jb2ZmZWUiLCJtaXNjL1NlcXVlbmNlLmNvZmZlZSIsIm1pc2MvYXBpLXByb3h5LmNvZmZlZSIsIm1pc2MvYXNzZXQtcHJlbG9hZGVyLmNvZmZlZSIsIm1pc2MvYnJvd3Nlci1kZXRlY3QuY29mZmVlIiwibWlzYy9jb21tYW5kZXIuY29mZmVlIiwibWlzYy9kZXYtdG9vbHMuY29mZmVlIiwibWlzYy9kaWN0aW9uYXJ5LmNvZmZlZSIsIm1pc2MvZXBpc29kZS1sb2FkZXIuY29mZmVlIiwibWlzYy9nbG9iYWwtdmFycy5jb2ZmZWUiLCJtaXNjL2xtcy1wcm94eS5jb2ZmZWUiLCJtaXNjL2xvZ2dlci5jb2ZmZWUiLCJtaXNjL3BhcnNlci5jb2ZmZWUiLCJtaXNjL3BhdXNhYmxlLWRlbGF5cy5jb2ZmZWUiLCJtaXNjL3NmeC5jb2ZmZWUiLCJtaXNjL3N2Zy1jYXJ0b2dyYXBoZXIuY29mZmVlIiwibW92aWUvZHluYW1pYy1hc3NldHMuY29mZmVlIiwibW92aWUvaGlnaGxpZ2h0ZXIuY29mZmVlIiwibW92aWUvbGF5ZXIuY29mZmVlIiwibW92aWUvbW92aWUuY29mZmVlIiwibW92aWUvc3ZnLWFuaW1hdGlvbi5jb2ZmZWUiLCJzbGlkZS11eC9jb21wb25lbnRzL2NhbGwtc2lnbi1zZWxlY3QuY29mZmVlIiwic2xpZGUtdXgvY29tcG9uZW50cy9jb21wb25lbnQuY29mZmVlIiwic2xpZGUtdXgvY29tcG9uZW50cy9kZWZlbmRlci1jYXJkcy5jb2ZmZWUiLCJzbGlkZS11eC9jb21wb25lbnRzL2RpYWxvZ3VlLXBhZ2UuY29mZmVlIiwic2xpZGUtdXgvY29tcG9uZW50cy9kaWFsb2d1ZS5jb2ZmZWUiLCJzbGlkZS11eC9jb21wb25lbnRzL2R1dGllcy5jb2ZmZWUiLCJzbGlkZS11eC9jb21wb25lbnRzL2VwaXNvZGUtaW50cm8uY29mZmVlIiwic2xpZGUtdXgvY29tcG9uZW50cy9lcGlzb2RlLW91dHJvLmNvZmZlZSIsInNsaWRlLXV4L2NvbXBvbmVudHMvZXhwbG9yZS1jYXJkcy5jb2ZmZWUiLCJzbGlkZS11eC9jb21wb25lbnRzL2dob3N0LXV4LmNvZmZlZSIsInNsaWRlLXV4L2NvbXBvbmVudHMvcGVyc29uYWwtaW5mby1pbnRyby5jb2ZmZWUiLCJzbGlkZS11eC9jb21wb25lbnRzL3F1aXovcXVlc3Rpb24uY29mZmVlIiwic2xpZGUtdXgvY29tcG9uZW50cy9xdWl6L3F1aXouY29mZmVlIiwic2xpZGUtdXgvY29tcG9uZW50cy9zZWxlY3Rpb24tZGlhbG9ndWUuY29mZmVlIiwic2xpZGUtdXgvY29tcG9uZW50cy9zaW1wbGUtc2VsZWN0aW9uLmNvZmZlZSIsInNsaWRlLXV4L2NvbXBvbmVudHMvc291bmQtdGVzdC5jb2ZmZWUiLCJzbGlkZS11eC9kaWFsb2d1ZS1hY3RvcnMvY2xvc2VkLWNhcHRpb24uY29mZmVlIiwic2xpZGUtdXgvZGlhbG9ndWUtYWN0b3JzL2N0YW5sZWUuY29mZmVlIiwic2xpZGUtdXgvZ2VuZXJpYy11aS5jb2ZmZWUiLCJzbGlkZS11eC9sYWJsZXIuY29mZmVlIiwic2xpZGUtdXgvc2xpZGUtdXguY29mZmVlIiwic2xpZGUtdXgvdGV4dC1kaWFsb2d1ZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbE1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNsR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4VkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgQVBJcHJveHksIEFyaXN0b3RsZSwgQ2hyb21lVUksIENvbW1hbmRlciwgRGV2VG9vbHMsIERpY3Rpb25hcnksIEVwaXNvZGUsIEVwaXNvZGVMb2FkZXIsIEdsb2JhbFZhcnMsIExNU1Byb3h5LCBMb2dnZXIsIE1vdmllLCBQYXJzZXIsIFBhdXNhYmxlRGVsYXlzLCBTbGlkZVVYLCBTb3VuZEZYLCBTdmdDYXJ0b2dyYXBoZXIsIGlzSW50ZXJuZXRFeHAsXG4gIGJpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9O1xuXG5BUElwcm94eSA9IHJlcXVpcmUoXCJtaXNjL2FwaS1wcm94eVwiKTtcblxuQ2hyb21lVUkgPSByZXF1aXJlKFwiY2hyb21lL2Nocm9tZS11aVwiKTtcblxuQ29tbWFuZGVyID0gcmVxdWlyZSgnbWlzYy9jb21tYW5kZXInKTtcblxuRGV2VG9vbHMgPSByZXF1aXJlKCdtaXNjL2Rldi10b29scycpO1xuXG5EaWN0aW9uYXJ5ID0gcmVxdWlyZSgnbWlzYy9kaWN0aW9uYXJ5Jyk7XG5cbkVwaXNvZGUgPSByZXF1aXJlKFwiZXBpc29kZS9lcGlzb2RlXCIpO1xuXG5FcGlzb2RlTG9hZGVyID0gcmVxdWlyZSgnbWlzYy9lcGlzb2RlLWxvYWRlcicpO1xuXG5HbG9iYWxWYXJzID0gcmVxdWlyZSgnbWlzYy9nbG9iYWwtdmFycycpO1xuXG5pc0ludGVybmV0RXhwID0gcmVxdWlyZSgnbWlzYy9icm93c2VyLWRldGVjdCcpO1xuXG5MTVNQcm94eSA9IHJlcXVpcmUoJ21pc2MvbG1zLXByb3h5Jyk7XG5cbkxvZ2dlciA9IHJlcXVpcmUoJ21pc2MvbG9nZ2VyJyk7XG5cbk1vdmllID0gcmVxdWlyZSgnbW92aWUvbW92aWUnKTtcblxuUGFyc2VyID0gcmVxdWlyZSgnbWlzYy9wYXJzZXInKTtcblxuUGF1c2FibGVEZWxheXMgPSByZXF1aXJlKCdtaXNjL3BhdXNhYmxlLWRlbGF5cycpO1xuXG5TbGlkZVVYID0gcmVxdWlyZSgnc2xpZGUtdXgvc2xpZGUtdXgnKTtcblxuU291bmRGWCA9IHJlcXVpcmUoJ21pc2Mvc2Z4Jyk7XG5cblN2Z0NhcnRvZ3JhcGhlciA9IHJlcXVpcmUoJ21pc2Mvc3ZnLWNhcnRvZ3JhcGhlcicpO1xuXG5BcmlzdG90bGUgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIEFyaXN0b3RsZSgkZWwsIGVwaXNvZGVzRGlyLCBsb2NhbERpciwgZGV2RXBpc29kZU51bSwgaXNEZXZNb2RlLCBpc0xvY2FsLCBzdWRvKSB7XG4gICAgdmFyIGFwaVByb3h5LCBjYXJ0b2dyYXBoZXIsIGNvbW1hbmRlciwgZGljdGlvbmFyeSwgZ2xvYmFscywgbG1zUHJveHksIHBhcnNlciwgcGF1c2FibGVEZWxheXMsIHNoYWRvd0ljb25zLCBzb3VuZEZ4O1xuICAgIHRoaXMuJGVsID0gJGVsO1xuICAgIHRoaXMuZXBpc29kZXNEaXIgPSBlcGlzb2Rlc0RpcjtcbiAgICB0aGlzLmxvY2FsRGlyID0gbG9jYWxEaXI7XG4gICAgdGhpcy5kZXZFcGlzb2RlTnVtID0gZGV2RXBpc29kZU51bTtcbiAgICB0aGlzLmlzRGV2TW9kZSA9IGlzRGV2TW9kZTtcbiAgICB0aGlzLmlzTG9jYWwgPSBpc0xvY2FsO1xuICAgIGlmIChzdWRvID09IG51bGwpIHtcbiAgICAgIHN1ZG8gPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5vbkpzb25Mb2FkZWQgPSBiaW5kKHRoaXMub25Kc29uTG9hZGVkLCB0aGlzKTtcbiAgICB0aGlzLmJlZ2luID0gYmluZCh0aGlzLmJlZ2luLCB0aGlzKTtcbiAgICBib2R5bW92aW4uc2V0UXVhbGl0eSgnbG93Jyk7XG4gICAgd2luZG93LmFyaXN0b3RsZSA9IHRoaXM7XG4gICAgYXJpc3RvdGxlLnN1ZG8gPSBzdWRvO1xuICAgIGFyaXN0b3RsZS5pc0lFID0gaXNJbnRlcm5ldEV4cCgpO1xuICAgIGdsb2JhbHMgPSBuZXcgR2xvYmFsVmFycygpO1xuICAgIGNvbW1hbmRlciA9IG5ldyBDb21tYW5kZXIoKTtcbiAgICBkaWN0aW9uYXJ5ID0gbmV3IERpY3Rpb25hcnkoKTtcbiAgICBsbXNQcm94eSA9IG5ldyBMTVNQcm94eSh0aGlzLmlzTG9jYWwpO1xuICAgIGFwaVByb3h5ID0gbmV3IEFQSXByb3h5KCk7XG4gICAgcGFyc2VyID0gbmV3IFBhcnNlcigpO1xuICAgIHNvdW5kRnggPSBuZXcgU291bmRGWCgpO1xuICAgIHBhdXNhYmxlRGVsYXlzID0gbmV3IFBhdXNhYmxlRGVsYXlzKCk7XG4gICAgY2FydG9ncmFwaGVyID0gbmV3IFN2Z0NhcnRvZ3JhcGhlcigpO1xuICAgIHNoYWRvd0ljb25zID0gbmV3IHB4aWNvbnMuU2hhZG93SWNvbnMoKTtcbiAgICB0aGlzLnNldERldk1vZGUodGhpcy5pc0Rldk1vZGUpO1xuICAgIGxtc1Byb3h5LmJlZ2luKHRoaXMuYmVnaW4pO1xuICB9XG5cbiAgQXJpc3RvdGxlLnByb3RvdHlwZS5iZWdpbiA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc2V0SW5pdGlhbEVwaXNvZGVOdW0oKTtcbiAgICBQdWJTdWIucHVibGlzaCgnc2Vzc2lvbmtleS5hZGQnKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCdlcGlzb2RlLmxvYWQnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIF90aGlzLmVwaXNvZGVOdW0gPSBkYXRhO1xuICAgICAgICByZXR1cm4gX3RoaXMuaW5pdCgpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgcmV0dXJuIFB1YlN1Yi5wdWJsaXNoKCdlcGlzb2RlLmxvYWQnLCB0aGlzLmVwaXNvZGVOdW0pO1xuICB9O1xuXG4gIEFyaXN0b3RsZS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBlcGlzb2RlTG9hZGVyO1xuICAgIGlmICh0aGlzLmNocm9tZVVJICE9IG51bGwpIHtcbiAgICAgIHRoaXMuZGVsZXRlT2xkQXNzZXRzKCk7XG4gICAgfVxuICAgIHRoaXMuYnVpbGQoKTtcbiAgICByZXR1cm4gZXBpc29kZUxvYWRlciA9IG5ldyBFcGlzb2RlTG9hZGVyKHRoaXMub25Kc29uTG9hZGVkKTtcbiAgfTtcblxuICBBcmlzdG90bGUucHJvdG90eXBlLm9uSnNvbkxvYWRlZCA9IGZ1bmN0aW9uKGVwaXNvZGVEYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMuZXBpc29kZSA9IG5ldyBFcGlzb2RlKGVwaXNvZGVEYXRhLCB0aGlzLm1vdmllLCB0aGlzLnNsaWRlVVgsIHRoaXMuY2hyb21lVUkpO1xuICB9O1xuXG4gIEFyaXN0b3RsZS5wcm90b3R5cGUuYnVpbGQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgJGJhc2U7XG4gICAgJGJhc2UgPSAkKGphZGVUZW1wbGF0ZVsnYXJpc3RvdGxlJ10oe30pKTtcbiAgICB0aGlzLiRlbC5hcHBlbmQoJGJhc2UpO1xuICAgIHNoYWRvd0ljb25zSW5zdGFuY2Uuc3ZnUmVwbGFjZVdpdGhTdHJpbmcocHhTdmdJY29uU3RyaW5nLCAkYmFzZSk7XG4gICAgdGhpcy5jaHJvbWVVSSA9IG5ldyBDaHJvbWVVSSgkKFwiLmNocm9tZVwiLCAkYmFzZSkpO1xuICAgIHRoaXMuc2xpZGVVWCA9IG5ldyBTbGlkZVVYKCQoXCIuc2xpZGUtdXhcIiwgJGJhc2UpKTtcbiAgICByZXR1cm4gdGhpcy5tb3ZpZSA9IG5ldyBNb3ZpZSgkKFwiLm1vdmllXCIsICRiYXNlKSk7XG4gIH07XG5cbiAgQXJpc3RvdGxlLnByb3RvdHlwZS5kZWxldGVPbGRBc3NldHMgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmVwaXNvZGUuZGVzdHJveSgpO1xuICAgIHRoaXMuY2hyb21lVUkuZGVzdHJveSgpO1xuICAgIHRoaXMuc2xpZGVVWC5kZXN0cm95KCk7XG4gICAgdGhpcy5tb3ZpZS5kZXN0cm95KCk7XG4gICAgdGhpcy4kZWwuZW1wdHkoKTtcbiAgICByZXR1cm4gdGhpcy5lcGlzb2RlID0gdGhpcy5jaHJvbWVVSSA9IHRoaXMuc2xpZGVVWCA9IHRoaXMubW92aWUgPSBudWxsO1xuICB9O1xuXG4gIEFyaXN0b3RsZS5wcm90b3R5cGUuc2V0RGV2TW9kZSA9IGZ1bmN0aW9uKGRldk1vZGUpIHtcbiAgICB2YXIgbG9nZ2VyO1xuICAgIGxvZ2dlciA9IG5ldyBMb2dnZXIoJCgnYm9keScpLCBkZXZNb2RlKTtcbiAgICByZXR1cm4gYXJpc3RvdGxlLmRldlRvb2xzID0gbmV3IERldlRvb2xzKGRldk1vZGUpO1xuICB9O1xuXG4gIEFyaXN0b3RsZS5wcm90b3R5cGUuZ2V0RXBpc29kZVJvb3QgPSBmdW5jdGlvbihlcGlzb2RlTnVtKSB7XG4gICAgaWYgKGVwaXNvZGVOdW0gPT0gbnVsbCkge1xuICAgICAgZXBpc29kZU51bSA9IHRoaXMuZXBpc29kZU51bTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZXBpc29kZXNEaXIgKyBcIi9lcGlzb2RlXCIgKyBlcGlzb2RlICsgXCIvXCI7XG4gIH07XG5cbiAgQXJpc3RvdGxlLnByb3RvdHlwZS5zZXRJbml0aWFsRXBpc29kZU51bSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmIChhcmlzdG90bGUubG1zUHJveHkuc3RvcmUgIT0gbnVsbCkge1xuICAgICAgaWYgKGFyaXN0b3RsZS5sbXNQcm94eS5zdG9yZS5sb2NhdGlvbiAhPSBudWxsKSB7XG4gICAgICAgIGlmIChhcmlzdG90bGUubG1zUHJveHkuc3RvcmUubG9jYXRpb24uZXBpc29kZU51bSkge1xuICAgICAgICAgIHRoaXMuZXBpc29kZU51bSA9IGFyaXN0b3RsZS5sbXNQcm94eS5zdG9yZS5sb2NhdGlvbi5lcGlzb2RlTnVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLmlzRGV2TW9kZSAmJiAodGhpcy5kZXZFcGlzb2RlTnVtICE9IG51bGwpKSB7XG4gICAgICB0aGlzLmVwaXNvZGVOdW0gPSB0aGlzLmRldkVwaXNvZGVOdW07XG4gICAgfVxuICAgIGlmICh0aGlzLmVwaXNvZGVOdW0gPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMuZXBpc29kZU51bSA9IFwiMFwiO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gQXJpc3RvdGxlO1xuXG59KSgpO1xuXG53aW5kb3cuQXJpc3RvdGxlID0gQXJpc3RvdGxlO1xuIiwidmFyIEJvdHRvbVVpRWxlbWVudHMsIFByb2dyZXNzTWFwLCBWQ1JDb250cm9scztcblxuUHJvZ3Jlc3NNYXAgPSByZXF1aXJlKCdjaHJvbWUvcHJvZ3Jlc3MtbWFwJyk7XG5cblZDUkNvbnRyb2xzID0gcmVxdWlyZSgnY2hyb21lL3Zjci1jb250cm9scycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJvdHRvbVVpRWxlbWVudHMgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIEJvdHRvbVVpRWxlbWVudHMoJGVsKSB7XG4gICAgdGhpcy4kZWwgPSAkZWw7XG4gICAgdGhpcy4kbm9kZSA9ICQoamFkZVRlbXBsYXRlWydjaHJvbWUtdWkvcHJvZ3Jlc3MnXSh7fSkpO1xuICAgIHRoaXMuJGVsLmFwcGVuZCh0aGlzLiRub2RlKTtcbiAgICB0aGlzLnByb2dlc3NNYXAgPSBuZXcgUHJvZ3Jlc3NNYXAodGhpcy4kbm9kZSk7XG4gICAgdGhpcy52Y3JDb250cm9scyA9IG5ldyBWQ1JDb250cm9scyh0aGlzLiRub2RlKTtcbiAgICB0aGlzLnNob3coJ3Byb2dyZXNzLW1hcCcpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ3Zjci1jb250cm9sLnNob3cnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIF90aGlzLnNob3dBbmltYXRpb25Db250cm9scyhkYXRhKTtcbiAgICAgICAgcmV0dXJuIF90aGlzLnNob3coJ3ZjcicpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH1cblxuICBCb3R0b21VaUVsZW1lbnRzLnByb3RvdHlwZS5zaG93QW5pbWF0aW9uQ29udHJvbHMgPSBmdW5jdGlvbihzdmdBbmltYXRpb24pIHtcbiAgICByZXR1cm4gdGhpcy52Y3JDb250cm9scy5hY3RpdmF0ZShzdmdBbmltYXRpb24sIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBfdGhpcy5zaG93KCdwcm9ncmVzcy1tYXAnKTtcbiAgICAgICAgcmV0dXJuIFB1YlN1Yi5wdWJsaXNoKCdzbGlkZXMubmV4dC1zbGlkZScpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH07XG5cbiAgQm90dG9tVWlFbGVtZW50cy5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uKGNsc3MpIHtcbiAgICB0aGlzLiRub2RlLmNoaWxkcmVuKCkuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgIHJldHVybiAkKFwiLlwiICsgY2xzcywgdGhpcy4kbm9kZSkucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICB9O1xuXG4gIEJvdHRvbVVpRWxlbWVudHMucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5wcm9ncmVzc01hcCAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9ncmVzc01hcC5kZXN0cm95KCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBCb3R0b21VaUVsZW1lbnRzO1xuXG59KSgpO1xuIiwidmFyIEJvdHRvbVVpRWxlbWVudHMsIENocm9tZVVJLCBUb3A7XG5cbkJvdHRvbVVpRWxlbWVudHMgPSByZXF1aXJlKCdjaHJvbWUvYm90dG9tLXVpLWVsZW1lbnRzJyk7XG5cblRvcCA9IHJlcXVpcmUoJ2Nocm9tZS90b3AnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBDaHJvbWVVSSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gQ2hyb21lVUkoJGVsKSB7XG4gICAgdmFyIHRva2VuMSwgdG9rZW4yO1xuICAgIHRoaXMuJGVsID0gJGVsO1xuICAgIHRva2VuMSA9IFB1YlN1Yi5zdWJzY3JpYmUoXCJjaHJvbWUuaGlkZVwiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5oaWRlKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0b2tlbjIgPSBQdWJTdWIuc3Vic2NyaWJlKFwiY2hyb21lLnNob3dcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuc2hvdygpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgdGhpcy50b2tlbnMgPSBbdG9rZW4xLCB0b2tlbjJdO1xuICB9XG5cbiAgQ2hyb21lVUkucHJvdG90eXBlLmJ1aWxkID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5ib3R0b21VaUVsZW1lbnRzID0gbmV3IEJvdHRvbVVpRWxlbWVudHModGhpcy4kZWwpO1xuICAgIHRoaXMudG9wID0gbmV3IFRvcCh0aGlzLiRlbCk7XG4gICAgcmV0dXJuIHNoYWRvd0ljb25zSW5zdGFuY2Uuc3ZnUmVwbGFjZVdpdGhTdHJpbmcocHhTdmdJY29uU3RyaW5nLCB0aGlzLiRlbCk7XG4gIH07XG5cbiAgQ2hyb21lVUkucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kZWwuYWRkQ2xhc3MoXCJoaWRkZW5cIik7XG4gIH07XG5cbiAgQ2hyb21lVUkucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kZWwucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7XG4gIH07XG5cbiAgQ2hyb21lVUkucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaSwgbGVuLCByZWYsIHJlc3VsdHMsIHRva2VuO1xuICAgIHRoaXMuYm90dG9tVWlFbGVtZW50cy5kZXN0cm95KCk7XG4gICAgdGhpcy50b3AuZGVzdHJveSgpO1xuICAgIHJlZiA9IHRoaXMudG9rZW5zO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHRva2VuID0gcmVmW2ldO1xuICAgICAgcmVzdWx0cy5wdXNoKFB1YlN1Yi51bnN1YnNjcmliZSh0b2tlbikpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICByZXR1cm4gQ2hyb21lVUk7XG5cbn0pKCk7XG4iLCJ2YXIgUHJvZ3Jlc3NNYXA7XG5cbm1vZHVsZS5leHBvcnRzID0gUHJvZ3Jlc3NNYXAgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIFByb2dyZXNzTWFwKCRlbDEpIHtcbiAgICB2YXIgdG9rZW4xLCB0b2tlbjIsIHRva2VuMywgdG9rZW40LCB0b2tlbjU7XG4gICAgdGhpcy4kZWwgPSAkZWwxO1xuICAgIHRva2VuMSA9IFB1YlN1Yi5zdWJzY3JpYmUoJ2VwaXNvZGUubG9hZGVkJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuYnVpbGRNYXAoZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0b2tlbjIgPSBQdWJTdWIuc3Vic2NyaWJlKCdjaGFwdGVyLnN0YXJ0ZWQnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5saWdodEljb24oZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0b2tlbjMgPSBQdWJTdWIuc3Vic2NyaWJlKCdzbGlkZS5hY3RpdmF0ZWQnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5saWdodEljb24oZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0b2tlbjQgPSBQdWJTdWIuc3Vic2NyaWJlKCdxdWl6LmFjdGl2YXRlZCcsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmxpZ2h0SWNvbihkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRva2VuNSA9IFB1YlN1Yi5zdWJzY3JpYmUoJ2R1dGllcy5hY3RpdmF0ZWQnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5saWdodEljb24oZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0aGlzLnRva2VucyA9IFt0b2tlbjEsIHRva2VuMiwgdG9rZW4zLCB0b2tlbjQsIHRva2VuNV07XG4gIH1cblxuICBQcm9ncmVzc01hcC5wcm90b3R5cGUubGlnaHRJY29uID0gZnVuY3Rpb24odGl0bGUpIHtcbiAgICB2YXIgJGVsO1xuICAgICRlbCA9ICQoXCIjXCIgKyAodGhpcy50aXRsZVRvSWQodGl0bGUpKSwgdGhpcy4kbm9kZSk7XG4gICAgJGVsLmFkZENsYXNzKFwidmlld2VkXCIpO1xuICAgICRlbC5wcmV2QWxsKCkuYWRkQ2xhc3MoXCJ2aWV3ZWRcIik7XG4gICAgcmV0dXJuICRlbC5uZXh0QWxsKCkucmVtb3ZlQ2xhc3MoXCJ2aWV3ZWRcIik7XG4gIH07XG5cbiAgUHJvZ3Jlc3NNYXAucHJvdG90eXBlLmJ1aWxkTWFwID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciAkbWlsZXN0b25lLCBtYXBEYXRhO1xuICAgIG1hcERhdGEgPSB0aGlzLnBhcnNlRXBpc29kZURhdGEoZGF0YSk7XG4gICAgdGhpcy5hZGRJY29uRGF0YShtYXBEYXRhKTtcbiAgICB0aGlzLiRub2RlID0gJChqYWRlVGVtcGxhdGVbJ2Nocm9tZS11aS9wcm9ncmVzcy1tYXAnXSh7XG4gICAgICBtaWxlc3RvbmVzOiBtYXBEYXRhXG4gICAgfSkpO1xuICAgIHRoaXMuJGVsLmFwcGVuZCh0aGlzLiRub2RlKTtcbiAgICBzaGFkb3dJY29uc0luc3RhbmNlLnN2Z1JlcGxhY2VXaXRoU3RyaW5nKHB4U3ZnSWNvblN0cmluZywgdGhpcy4kbm9kZSk7XG4gICAgJG1pbGVzdG9uZSA9ICQoXCIubWlsZXN0b25lXCIsIHRoaXMuJG5vZGUpO1xuICAgIGlmIChhcmlzdG90bGUuc3Vkbykge1xuICAgICAgJG1pbGVzdG9uZS5vbihcImNsaWNrXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5vbk1pbGVTdG9uZUNsaWNrKCQoZS5jdXJyZW50VGFyZ2V0KSk7XG4gICAgICAgIH07XG4gICAgICB9KSh0aGlzKSk7XG4gICAgfVxuICAgICRtaWxlc3RvbmUub24oXCJtb3VzZW92ZXJcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgICByZXR1cm4gX3RoaXMub25NaWxlU3RvbmVPdmVyKCQoZS5jdXJyZW50VGFyZ2V0KSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICByZXR1cm4gJG1pbGVzdG9uZS5vbihcIm1vdXNlb3V0XCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLm9uTWlsZVN0b25lT3V0KCQoZS5jdXJyZW50VGFyZ2V0KSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgfTtcblxuICBQcm9ncmVzc01hcC5wcm90b3R5cGUucGFyc2VFcGlzb2RlRGF0YSA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2YXIgY2hhcHRlciwgaSwgaXRlbSwgaXRlbXMsIGosIGxlbiwgbGVuMSwgcmVmLCByZWYxLCBzbGlkZTtcbiAgICBpdGVtcyA9IFtdO1xuICAgIHJlZiA9IGRhdGEuY2hhcHRlcnM7XG4gICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjaGFwdGVyID0gcmVmW2ldO1xuICAgICAgaXRlbXMucHVzaCh7XG4gICAgICAgIGtpbmQ6IFwiY2hhcHRlclwiLFxuICAgICAgICB0aXRsZTogY2hhcHRlci50aXRsZSxcbiAgICAgICAgaWQ6IHRoaXMudGl0bGVUb0lkKGNoYXB0ZXIudGl0bGUpXG4gICAgICB9KTtcbiAgICAgIHJlZjEgPSBjaGFwdGVyLnNsaWRlcztcbiAgICAgIGZvciAoaiA9IDAsIGxlbjEgPSByZWYxLmxlbmd0aDsgaiA8IGxlbjE7IGorKykge1xuICAgICAgICBzbGlkZSA9IHJlZjFbal07XG4gICAgICAgIGl0ZW0gPSB0aGlzLmdldEl0ZW0oc2xpZGUpO1xuICAgICAgICBpZiAoc2xpZGUudGl0bGUgIT0gbnVsbCkge1xuICAgICAgICAgIGlmIChpdGVtID09IG51bGwpIHtcbiAgICAgICAgICAgIGl0ZW0gPSB7XG4gICAgICAgICAgICAgIGtpbmQ6IFwic2xpZGVcIlxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaXRlbS50aXRsZSA9IHNsaWRlLnRpdGxlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpdGVtICE9IG51bGwpIHtcbiAgICAgICAgICBpdGVtLmlkID0gdGhpcy50aXRsZVRvSWQoaXRlbS50aXRsZSk7XG4gICAgICAgICAgaXRlbXMucHVzaChpdGVtKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gaXRlbXM7XG4gIH07XG5cbiAgUHJvZ3Jlc3NNYXAucHJvdG90eXBlLmFkZEljb25EYXRhID0gZnVuY3Rpb24obWFwSXRlbXMpIHtcbiAgICB2YXIgaSwgaXRlbSwgbGVuLCByZXN1bHRzO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGkgPSAwLCBsZW4gPSBtYXBJdGVtcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgaXRlbSA9IG1hcEl0ZW1zW2ldO1xuICAgICAgc3dpdGNoIChpdGVtLmtpbmQpIHtcbiAgICAgICAgY2FzZSBcImNoYXB0ZXJcIjpcbiAgICAgICAgICByZXN1bHRzLnB1c2goaXRlbS5pY29uID0gXCJjaGFwdGVyLXByb2dyZXNzLWNoYXB0ZXJcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJzbGlkZVwiOlxuICAgICAgICAgIHJlc3VsdHMucHVzaChpdGVtLmljb24gPSBcImNoYXB0ZXItcHJvZ3Jlc3Mtc2xpZGVcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJxdWl6XCI6XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKGl0ZW0uaWNvbiA9IFwiY2hhcHRlci1wcm9ncmVzcy1xdWl6XCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiZHV0aWVzXCI6XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKGl0ZW0uaWNvbiA9IFwiY2hhcHRlci1wcm9ncmVzcy1kdXRpZXNcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKHZvaWQgMCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIFByb2dyZXNzTWFwLnByb3RvdHlwZS50aXRsZVRvSWQgPSBmdW5jdGlvbih0aXRsZSkge1xuICAgIHRpdGxlID0gdGl0bGUucmVwbGFjZSgvXFxzL2csICdfJyk7XG4gICAgdGl0bGUgPSB0aXRsZS5yZXBsYWNlKC8oW1xcIVxcP1xcJ10pL2csICcnKTtcbiAgICByZXR1cm4gdGl0bGUudG9Mb3dlckNhc2UoKTtcbiAgfTtcblxuICBQcm9ncmVzc01hcC5wcm90b3R5cGUuZ2V0SXRlbSA9IGZ1bmN0aW9uKHNsaWRlKSB7XG4gICAgdmFyIGNvbXBvbmVudCwgaSwgbGVuLCByZWY7XG4gICAgaWYgKHNsaWRlLnV4ID09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAoc2xpZGUudXguY29tcG9uZW50cyA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmVmID0gc2xpZGUudXguY29tcG9uZW50cztcbiAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNvbXBvbmVudCA9IHJlZltpXTtcbiAgICAgIGlmIChjb21wb25lbnQua2luZCA9PT0gXCJxdWl6XCIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBraW5kOiBcInF1aXpcIixcbiAgICAgICAgICB0aXRsZTogXCJxdWl6XCJcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSBpZiAoY29tcG9uZW50LmtpbmQgPT09IFwiZHV0aWVzXCIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBraW5kOiBcImR1dGllc1wiLFxuICAgICAgICAgIHRpdGxlOiBcIkR1dHkgUmV2aWV3XCJcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgUHJvZ3Jlc3NNYXAucHJvdG90eXBlLm9uTWlsZVN0b25lQ2xpY2sgPSBmdW5jdGlvbigkZWwpIHtcbiAgICByZXR1cm4gUHViU3ViLnB1Ymxpc2goJ2VwaXNvZGUuZ290bycsICRlbC5hdHRyKFwiZGF0YS10aXRsZVwiKSk7XG4gIH07XG5cbiAgUHJvZ3Jlc3NNYXAucHJvdG90eXBlLm9uTWlsZVN0b25lT3ZlciA9IGZ1bmN0aW9uKCRlbCkge1xuICAgIGlmICghJGVsLmhhc0NsYXNzKFwidmlld2VkXCIpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiBQdWJTdWIucHVibGlzaCgnbGFiZWwuYXR0YWNoJywge1xuICAgICAgZWw6ICRlbCxcbiAgICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgdGl0bGU6ICRlbC5hdHRyKFwiZGF0YS10aXRsZVwiKVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIFByb2dyZXNzTWFwLnByb3RvdHlwZS5vbk1pbGVTdG9uZU91dCA9IGZ1bmN0aW9uKCRlbCkge1xuICAgIHJldHVybiBQdWJTdWIucHVibGlzaCgnbGFiZWwuZGVzdHJveScsICRlbCk7XG4gIH07XG5cbiAgUHJvZ3Jlc3NNYXAucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaSwgbGVuLCByZWYsIHJlc3VsdHMsIHRva2VuO1xuICAgIHJlZiA9IHRoaXMudG9rZW5zO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHRva2VuID0gcmVmW2ldO1xuICAgICAgcmVzdWx0cy5wdXNoKFB1YlN1Yi51bnN1YnNjcmliZSh0b2tlbikpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICByZXR1cm4gUHJvZ3Jlc3NNYXA7XG5cbn0pKCk7XG4iLCJ2YXIgVG9wO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRvcCA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gVG9wKCRlbDEpIHtcbiAgICB2YXIgdG9rZW4yLCB0b2tlbjMsIHRva2VuNCwgdG9rZW41LCB0b2tlbjY7XG4gICAgdGhpcy4kZWwgPSAkZWwxO1xuICAgIHRva2VuMiA9IFB1YlN1Yi5zdWJzY3JpYmUoXCJjYWxsc2lnbi5zZWxlY3RlZFwiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy51cGRhdGVDYWxsc2lnbihkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRva2VuMyA9IFB1YlN1Yi5zdWJzY3JpYmUoXCJjaHJvbWUuc2hvd25hbWVcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuc2hvd05hbWUoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRva2VuNCA9IFB1YlN1Yi5zdWJzY3JpYmUoXCJjaHJvbWUuc2hvd2VwaXNvZGVzXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnNob3dJY29ucygpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgdG9rZW41ID0gUHViU3ViLnN1YnNjcmliZShcImNocm9tZS5oaWRlbmFtZVwiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5oaWRlTmFtZSgpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgdG9rZW42ID0gUHViU3ViLnN1YnNjcmliZShcImNocm9tZS5oaWRlZXBpc29kZXNcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuaGlkZUljb25zKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0aGlzLnRva2VucyA9IFt0b2tlbjIsIHRva2VuMywgdG9rZW40LCB0b2tlbjUsIHRva2VuNl07XG4gICAgdGhpcy5idWlsZCgpO1xuICB9XG5cbiAgVG9wLnByb3RvdHlwZS5idWlsZCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjYWxsc2lnbiwgZGF0YSwgZXBpc29kZU51bSwgbmFtZSwgcmVmO1xuICAgIG5hbWUgPSBhcmlzdG90bGUubG1zUHJveHkudXNlci5zcGxpdChcIixcIik7XG4gICAgcmVmID0gdGhpcy5nZXRWYXJzKCksIGNhbGxzaWduID0gcmVmWzBdLCBlcGlzb2RlTnVtID0gcmVmWzFdO1xuICAgIGRhdGEgPSB7XG4gICAgICBuYW1lOiBuYW1lWzFdICsgXCIgXFxcIlwiICsgY2FsbHNpZ24gKyBcIlxcXCIgXCIgKyBuYW1lWzBdLFxuICAgICAgZXBpc29kZTogZXBpc29kZU51bVxuICAgIH07XG4gICAgdGhpcy5nZXRSYW5rKGRhdGEsIGVwaXNvZGVOdW0pO1xuICAgIHRoaXMuJHRvcCA9ICQoamFkZVRlbXBsYXRlWydjaHJvbWUtdWkvdG9wJ10oZGF0YSkpO1xuICAgIHRoaXMuJGVsLmFwcGVuZCh0aGlzLiR0b3ApO1xuICAgIHRoaXMuJG5hbWUgPSAkKFwiLm5hbWUtYW5kLXJhbmtcIiwgdGhpcy4kdG9wKTtcbiAgICB0aGlzLiRpY29ucyA9ICQoXCIuZXBpc29kZXNcIiwgdGhpcy4kdG9wKTtcbiAgICB0aGlzLiRtb2RlID0gJChcIi5sZWFybi1tb2RlXCIsIHRoaXMuJHRvcCk7XG4gICAgdGhpcy5oaWRlTW9kZSgpO1xuICAgICQoXCIuYmFkZ2VcIiwgdGhpcy4kdG9wKS5vbihcIm1vdXNlb3ZlclwiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5iYWRnZU1vdXNlb3ZlcihlKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHJldHVybiAkKFwiLmJhZGdlXCIsIHRoaXMuJHRvcCkub24oXCJtb3VzZW91dFwiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5iYWRnZU1vdXNlb3V0KGUpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH07XG5cbiAgVG9wLnByb3RvdHlwZS51cGRhdGVDYWxsc2lnbiA9IGZ1bmN0aW9uKGNhbGxTaWduKSB7XG4gICAgdmFyIG5hbWU7XG4gICAgbmFtZSA9IGFyaXN0b3RsZS5sbXNQcm94eS51c2VyLnNwbGl0KFwiLFwiKTtcbiAgICByZXR1cm4gJChcIi5uYW1lXCIsIHRoaXMuJHRvcCkuaHRtbChuYW1lWzFdICsgXCIgXFxcIlwiICsgY2FsbFNpZ24gKyBcIlxcXCIgXCIgKyBuYW1lWzBdKTtcbiAgfTtcblxuICBUb3AucHJvdG90eXBlLnNob3dOYW1lID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJG5hbWUuY3NzKHtcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgb3BhY2l0eTogMFxuICAgIH0pLnZlbG9jaXR5KHtcbiAgICAgIG9wYWNpdHk6IDFcbiAgICB9LCB7XG4gICAgICBkdXJhdGlvbjogNTAwXG4gICAgfSk7XG4gIH07XG5cbiAgVG9wLnByb3RvdHlwZS5oaWRlTmFtZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRuYW1lLmNzcyh7XG4gICAgICBkaXNwbGF5OiBcIm5vbmVcIlxuICAgIH0pO1xuICB9O1xuXG4gIFRvcC5wcm90b3R5cGUuc2hvd0ljb25zID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJGljb25zLmNzcyh7XG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgIG9wYWNpdHk6IDBcbiAgICB9KS52ZWxvY2l0eSh7XG4gICAgICBvcGFjaXR5OiAxXG4gICAgfSwge1xuICAgICAgZHVyYXRpb246IDUwMFxuICAgIH0pO1xuICB9O1xuXG4gIFRvcC5wcm90b3R5cGUuaGlkZUljb25zID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJGljb25zLmNzcyh7XG4gICAgICBkaXNwbGF5OiBcIm5vbmVcIlxuICAgIH0pO1xuICB9O1xuXG4gIFRvcC5wcm90b3R5cGUuaGlkZU1vZGUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kbW9kZS5hZGRDbGFzcyhcImhpZGRlblwiKTtcbiAgfTtcblxuICBUb3AucHJvdG90eXBlLnNob3dNb2RlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJG1vZGUucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7XG4gIH07XG5cbiAgVG9wLnByb3RvdHlwZS5iYWRnZU1vdXNlb3ZlciA9IGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgJGVsLCBjb25maWdEYXRhLCBlcGlzb2RlTnVtO1xuICAgICRlbCA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICBlcGlzb2RlTnVtID0gJGVsLmF0dHIoJ2RhdGEtZXBpc29kZScpO1xuICAgIGNvbmZpZ0RhdGEgPSB7XG4gICAgICB0aXRsZTogXCJFcGlzb2RlIFwiICsgZXBpc29kZU51bSxcbiAgICAgIHRleHQ6IHRoaXMuZ2V0RXBpc29kZVRhZ2xpbmUoZXBpc29kZU51bSksXG4gICAgICBjc3NDbGFzczogXCJhcnJvdy10b3AgaW5saW5lXCJcbiAgICB9O1xuICAgIHJldHVybiBQdWJTdWIucHVibGlzaCgnbGFiZWwuYXR0YWNoJywge1xuICAgICAgZWw6ICRlbCxcbiAgICAgIGNvbnRlbnQ6IGNvbmZpZ0RhdGFcbiAgICB9KTtcbiAgfTtcblxuICBUb3AucHJvdG90eXBlLmJhZGdlTW91c2VvdXQgPSBmdW5jdGlvbihlKSB7XG4gICAgcmV0dXJuIFB1YlN1Yi5wdWJsaXNoKCdsYWJlbC5kZXN0cm95JywgJChlLmN1cnJlbnRUYXJnZXQpKTtcbiAgfTtcblxuICBUb3AucHJvdG90eXBlLmdldFJhbmsgPSBmdW5jdGlvbihkYXRhLCBlcGlzb2RlTnVtKSB7XG4gICAgZGF0YS5lcGlzb2RlID0gZXBpc29kZU51bTtcbiAgICBzd2l0Y2ggKGVwaXNvZGVOdW0pIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgZGF0YS5yYW5rID0gXCJSZWNydWl0XCI7XG4gICAgICAgIHJldHVybiBkYXRhLmJhZGdlID0gXCJyYW5rLWJhZGdlLXJlY3J1aXRcIjtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgZGF0YS5yYW5rID0gXCJjYWRldFwiO1xuICAgICAgICByZXR1cm4gZGF0YS5iYWRnZSA9IFwicmFuay1iYWRnZS1jYWRldFwiO1xuICAgICAgY2FzZSAyOlxuICAgICAgICBkYXRhLnJhbmsgPSBcIkNhZGV0IEZpcnN0IENsYXNzXCI7XG4gICAgICAgIHJldHVybiBkYXRhLmJhZGdlID0gXCJyYW5rLWJhZGdlLWNhZGV0LWZpcnN0LWNsYXNzXCI7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIGRhdGEucmFuayA9IFwiVGVjaG5pY2FsIENhZGV0XCI7XG4gICAgICAgIHJldHVybiBkYXRhLmJhZGdlID0gXCJyYW5rLWJhZGdlLXRlY2huaWNhbC1jYWRldFwiO1xuICAgICAgY2FzZSA0OlxuICAgICAgICBkYXRhLnJhbmsgPSBcIkN5YmVyIENhZGV0XCI7XG4gICAgICAgIHJldHVybiBkYXRhLmJhZGdlID0gXCJyYW5rLWJhZGdlLWN5YmVyLWNhZGV0XCI7XG4gICAgICBjYXNlIDU6XG4gICAgICAgIGRhdGEucmFuayA9IFwiTWFzdGVyIENhZGV0XCI7XG4gICAgICAgIHJldHVybiBkYXRhLmJhZGdlID0gXCJyYW5rLWJhZGdlLWN5YmVyLWNhZGV0XCI7XG4gICAgfVxuICB9O1xuXG4gIFRvcC5wcm90b3R5cGUuZ2V0RXBpc29kZVRhZ2xpbmUgPSBmdW5jdGlvbihlcGlzb2RlTnVtKSB7XG4gICAgc3dpdGNoIChlcGlzb2RlTnVtKSB7XG4gICAgICBjYXNlIFwiMVwiOlxuICAgICAgICByZXR1cm4gXCJPcmdhbml6aW5nIE91ciBGb3JjZXNcIjtcbiAgICAgIGNhc2UgXCIyXCI6XG4gICAgICAgIHJldHVybiBcIlBlcmltZXRlciBEZWZlbnNlc1wiO1xuICAgICAgY2FzZSBcIjNcIjpcbiAgICAgICAgcmV0dXJuIFwiQXNzZXQgRGVmZW5zZXNcIjtcbiAgICAgIGNhc2UgXCI0XCI6XG4gICAgICAgIHJldHVybiBcIk1hbm5pbmcgdGhlIERlZmVuc2VzXCI7XG4gICAgICBjYXNlIFwiNVwiOlxuICAgICAgICByZXR1cm4gXCJGaWdodGluZyB0aGUgV2FyXCI7XG4gICAgfVxuICB9O1xuXG4gIFRvcC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpLCBsZW4sIHJlZiwgcmVzdWx0cywgdG9rZW47XG4gICAgcmVmID0gdGhpcy50b2tlbnM7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgdG9rZW4gPSByZWZbaV07XG4gICAgICByZXN1bHRzLnB1c2goUHViU3ViLnVuc3Vic2NyaWJlKHRva2VuKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIFRvcC5wcm90b3R5cGUuZ2V0VmFycyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjYWxsc2lnbiwgZXBpc29kZSwgZXJyb3IsIGVycm9yMTtcbiAgICB0cnkge1xuICAgICAgY2FsbHNpZ24gPSBhcmlzdG90bGUuZ2xvYmFscy5nZXQoJ2NhbGxTaWduJywgZmFsc2UpO1xuICAgIH0gY2F0Y2ggKGVycm9yMSkge1xuICAgICAgZXJyb3IgPSBlcnJvcjE7XG4gICAgICBjYWxsc2lnbiA9IFwiRGVhZGV5ZVwiO1xuICAgIH1cbiAgICBlcGlzb2RlID0gTnVtYmVyKGFyaXN0b3RsZS5lcGlzb2RlTnVtKTtcbiAgICByZXR1cm4gW2NhbGxzaWduLCBlcGlzb2RlXTtcbiAgfTtcblxuICByZXR1cm4gVG9wO1xuXG59KSgpO1xuIiwidmFyIFZDUkNvbnRyb2xzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFZDUkNvbnRyb2xzID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBWQ1JDb250cm9scygkZWwpIHtcbiAgICB2YXIgJG5vZGU7XG4gICAgJG5vZGUgPSAkKGphZGVUZW1wbGF0ZVsnY2hyb21lLXVpL3ZjciddKHt9KSk7XG4gICAgJGVsLmFwcGVuZCgkbm9kZSk7XG4gICAgdGhpcy4kcGxheWhlYWQgPSAkKCcucGxheWhlYWQnLCAkbm9kZSk7XG4gICAgdGhpcy4kYXR0aWMgPSAkKCcuYXR0aWMnLCAkbm9kZSk7XG4gICAgdGhpcy4kcGF1c2VBbmRQbGF5QnRuID0gJCgnLnBhdXNlLWFuZC1wbGF5JywgJG5vZGUpO1xuICAgIHRoaXMuJHBhdXNlQW5kUGxheUJ0bi5vbignY2xpY2snLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmNvbnRyb2xCdG5DbGljaygpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgJChcIiNhbmktcmVwbGF5XCIsICRub2RlKS5vbignY2xpY2snLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnJlcGxheUNsaWNrKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICAkKFwiI2FuaS1jb250aW51ZVwiLCAkbm9kZSkub24oJ2NsaWNrJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5jb250aW51ZUNsaWNrKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCd2Y3IucGxheScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnBsYXkoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ3Zjci5wYXVzZScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnBhdXNlKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCd2Y3IucmVwbGF5JywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMucmVwbGF5KCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgfVxuXG4gIFZDUkNvbnRyb2xzLnByb3RvdHlwZS5wbGF5ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy4kcGF1c2VBbmRQbGF5QnRuLnJlbW92ZUNsYXNzKCdwYXVzZWQnKTtcbiAgICByZXR1cm4gdGhpcy5hbmltYXRpb24ucGxheSgpO1xuICB9O1xuXG4gIFZDUkNvbnRyb2xzLnByb3RvdHlwZS5wYXVzZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuJHBhdXNlQW5kUGxheUJ0bi5hZGRDbGFzcygncGF1c2VkJyk7XG4gICAgcmV0dXJuIHRoaXMuYW5pbWF0aW9uLnBhdXNlKCk7XG4gIH07XG5cbiAgVkNSQ29udHJvbHMucHJvdG90eXBlLnJlcGxheSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuJGF0dGljLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICB0aGlzLiRwYXVzZUFuZFBsYXlCdG4ucmVtb3ZlQ2xhc3MoJ2NvbXBsZXRlJyk7XG4gICAgdGhpcy5hbmltYXRpb24uZ29Ub0FuZFN0b3AoMCk7XG4gICAgcmV0dXJuIHRoaXMuYW5pbWF0aW9uLnBsYXkoKTtcbiAgfTtcblxuICBWQ1JDb250cm9scy5wcm90b3R5cGUuYWN0aXZhdGUgPSBmdW5jdGlvbihzdmdBbmltYXRpb24sIGNvbXBsZXRlQ2IpIHtcbiAgICB0aGlzLmNvbXBsZXRlQ2IgPSBjb21wbGV0ZUNiO1xuICAgIHRoaXMucmVzZXQoKTtcbiAgICB0aGlzLmFuaW1hdGlvbiA9IHN2Z0FuaW1hdGlvbi5hbmltYXRpb247XG4gICAgdGhpcy5hbmltYXRpb24uYWRkRXZlbnRMaXN0ZW5lcignZW50ZXJGcmFtZScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcGVyYztcbiAgICAgICAgcGVyYyA9IF90aGlzLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUgLyBfdGhpcy5hbmltYXRpb24udG90YWxGcmFtZXM7XG4gICAgICAgIHJldHVybiBfdGhpcy4kcGxheWhlYWQuY3NzKHtcbiAgICAgICAgICB3aWR0aDogKE1hdGgucm91bmQocGVyYyAqIDEwMCkpICsgXCIlXCJcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICByZXR1cm4gdGhpcy5hbmltYXRpb24uYWRkRXZlbnRMaXN0ZW5lcignY29tcGxldGUnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgX3RoaXMuaXNDb21wbGV0ZSA9IHRydWU7XG4gICAgICAgIF90aGlzLiRhdHRpYy5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgICAgIHJldHVybiBfdGhpcy4kcGF1c2VBbmRQbGF5QnRuLmFkZENsYXNzKCdjb21wbGV0ZScpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH07XG5cbiAgVkNSQ29udHJvbHMucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5pc1BhdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgIHRoaXMuJGF0dGljLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICB0aGlzLiRwYXVzZUFuZFBsYXlCdG4ucmVtb3ZlQ2xhc3MoJ3BhdXNlZCcpO1xuICAgIHJldHVybiB0aGlzLiRwYXVzZUFuZFBsYXlCdG4ucmVtb3ZlQ2xhc3MoJ2NvbXBsZXRlJyk7XG4gIH07XG5cbiAgVkNSQ29udHJvbHMucHJvdG90eXBlLmNvbnRyb2xCdG5DbGljayA9IGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAodGhpcy5pc0NvbXBsZXRlKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXBsYXlDbGljaygpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5pc1BhdXNlZCkge1xuICAgICAgdGhpcy5pc1BhdXNlZCA9IGZhbHNlO1xuICAgICAgcmV0dXJuIFB1YlN1Yi5wdWJsaXNoKCd2Y3IucGxheScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzUGF1c2VkID0gdHJ1ZTtcbiAgICAgIHJldHVybiBQdWJTdWIucHVibGlzaCgndmNyLnBhdXNlJyk7XG4gICAgfVxuICB9O1xuXG4gIFZDUkNvbnRyb2xzLnByb3RvdHlwZS5yZXBsYXlDbGljayA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgIHJldHVybiBQdWJTdWIucHVibGlzaCgndmNyLnJlcGxheScpO1xuICB9O1xuXG4gIFZDUkNvbnRyb2xzLnByb3RvdHlwZS5jb250aW51ZUNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tcGxldGVDYigpO1xuICB9O1xuXG4gIHJldHVybiBWQ1JDb250cm9scztcblxufSkoKTtcbiIsInZhciBBdWRpb1RyYWNrO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF1ZGlvVHJhY2sgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIEF1ZGlvVHJhY2soc3JjKSB7XG4gICAgdGhpcy5zcmMgPSBzcmM7XG4gICAgdGhpcy5zcmMgPSBwYXJzZSh0aGlzLnNyYyk7XG4gICAgQXVkaW9UcmFjay5pbml0U291bmRTZXR0aW5ncygpO1xuICAgIHRoaXMuc291bmQgPSBjcmVhdGVqcy5Tb3VuZC5jcmVhdGVJbnN0YW5jZSh0aGlzLnNyYyk7XG4gIH1cblxuICBBdWRpb1RyYWNrLnByb3RvdHlwZS5wbGF5ID0gZnVuY3Rpb24oY29uZmlnLCBvbkNvbXBsZXRlKSB7XG4gICAgaWYgKGNvbmZpZyA9PSBudWxsKSB7XG4gICAgICBjb25maWcgPSB7fTtcbiAgICB9XG4gICAgdGhpcy5wYXJzZUNvbmZpZyhjb25maWcpO1xuICAgIHRoaXMuc291bmQucGxheShjb25maWcpO1xuICAgIHJldHVybiB0aGlzLmFkZE9uQ29tcGxldGUob25Db21wbGV0ZSk7XG4gIH07XG5cbiAgQXVkaW9UcmFjay5wcm90b3R5cGUuYWRkT25Db21wbGV0ZSA9IGZ1bmN0aW9uKG9uQ29tcGxldGUpIHtcbiAgICBpZiAob25Db21wbGV0ZSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5zb3VuZC5hZGRFdmVudExpc3RlbmVyKFwiY29tcGxldGVcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBvbkNvbXBsZXRlKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgQXVkaW9UcmFjay5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnNvdW5kLnN0b3AoKTtcbiAgfTtcblxuICBBdWRpb1RyYWNrLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5pc0RlYWQgPSB0cnVlO1xuICAgIHRoaXMuc291bmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNvbXBsZXRlXCIpO1xuICAgIHJldHVybiB0aGlzLnNvdW5kLmRlc3Ryb3koKTtcbiAgfTtcblxuICBBdWRpb1RyYWNrLmluaXRTb3VuZFNldHRpbmdzID0gZnVuY3Rpb24odm9sdW1lKSB7XG4gICAgaWYgKHZvbHVtZSA9PSBudWxsKSB7XG4gICAgICB2b2x1bWUgPSAxO1xuICAgIH1cbiAgICBpZiAoQXVkaW9UcmFjay5wcGMgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gQXVkaW9UcmFjay5wcGMgPSBuZXcgY3JlYXRlanMuUGxheVByb3BzQ29uZmlnKCkuc2V0KHtcbiAgICAgIGludGVycnVwdDogY3JlYXRlanMuU291bmQuSU5URVJSVVBUX0FOWSxcbiAgICAgIHZvbHVtZTogdm9sdW1lLFxuICAgICAgcGFuOiAxXG4gICAgfSk7XG4gIH07XG5cbiAgQXVkaW9UcmFjay5wcm90b3R5cGUucGFyc2VDb25maWcgPSBmdW5jdGlvbihjb25maWcpIHtcbiAgICBpZiAoY29uZmlnLmxvb3AgIT0gbnVsbCkge1xuICAgICAgaWYgKGNvbmZpZy5sb29wID09PSB0cnVlICYmIHR5cGVvZiBjb25maWcubG9vcCAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICBjb25maWcubG9vcCA9IC0xO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY29uZmlnLnBhbiA9IDE7XG4gIH07XG5cbiAgcmV0dXJuIEF1ZGlvVHJhY2s7XG5cbn0pKCk7XG4iLCJ2YXIgQ2hhcHRlckhlYWRpbmcsIFByZWxvYWRlcixcbiAgYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH07XG5cblByZWxvYWRlciA9IHJlcXVpcmUoJ21pc2MvYXNzZXQtcHJlbG9hZGVyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2hhcHRlckhlYWRpbmcgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIENoYXB0ZXJIZWFkaW5nKGRhdGEsIGxvYWRDb21wbGV0ZSkge1xuICAgIHRoaXMubG9hZENvbXBsZXRlID0gbG9hZENvbXBsZXRlO1xuICAgIHRoaXMuY29tcGxldGUgPSBiaW5kKHRoaXMuY29tcGxldGUsIHRoaXMpO1xuICAgIHRoaXMudXBkYXRlID0gYmluZCh0aGlzLnVwZGF0ZSwgdGhpcyk7XG4gICAgdGhpcy4kZWwgPSAkKCdib2R5Jyk7XG4gICAgdGhpcy4kbm9kZSA9ICQoamFkZVRlbXBsYXRlWydtaXNjL2NoYXB0ZXItaGVhZGluZyddKHtcbiAgICAgIHRpdGxlOiBkYXRhLnRpdGxlLFxuICAgICAgc3VidGl0bGU6IGRhdGEuc3VidGl0bGVcbiAgICB9KSk7XG4gICAgdGhpcy4kZWwuYXBwZW5kKHRoaXMuJG5vZGUpO1xuICAgIHRoaXMuJGZnID0gJChcIi5mZ1wiLCB0aGlzLiRub2RlKTtcbiAgICBzaGFkb3dJY29uc0luc3RhbmNlLnN2Z1JlcGxhY2VXaXRoU3RyaW5nKHB4U3ZnSWNvblN0cmluZywgdGhpcy4kbm9kZSk7XG4gICAgdGhpcy5wcmVsb2FkKGRhdGEpO1xuICB9XG5cbiAgQ2hhcHRlckhlYWRpbmcucHJvdG90eXBlLnByZWxvYWQgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyIHByZWxvYWRlcjtcbiAgICByZXR1cm4gcHJlbG9hZGVyID0gbmV3IFByZWxvYWRlcihkYXRhLCB0aGlzLmNvbXBsZXRlLCB0aGlzLnVwZGF0ZSk7XG4gIH07XG5cbiAgQ2hhcHRlckhlYWRpbmcucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKHBlcmMpIHtcbiAgICByZXR1cm4gdGhpcy4kZmcuY3NzKHtcbiAgICAgIHdpZHRoOiAoTWF0aC5yb3VuZChwZXJjICogMTAwKSkgKyBcIiVcIlxuICAgIH0pO1xuICB9O1xuXG4gIENoYXB0ZXJIZWFkaW5nLnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuJG5vZGUuYWRkQ2xhc3MoJ2NvbXBsZXRlJyk7XG4gICAgdGhpcy5kZXN0cm95KCk7XG4gICAgcmV0dXJuIHRoaXMubG9hZENvbXBsZXRlKCk7XG4gIH07XG5cbiAgQ2hhcHRlckhlYWRpbmcucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kbm9kZS52ZWxvY2l0eSh7XG4gICAgICBvcGFjaXR5OiAwXG4gICAgfSwge1xuICAgICAgZGVsYXk6IDMwMCxcbiAgICAgIGR1cmF0aW9uOiA0MDAsXG4gICAgICBjb21wbGV0ZTogKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMuJG5vZGUucmVtb3ZlKCk7XG4gICAgICAgIH07XG4gICAgICB9KSh0aGlzKVxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBDaGFwdGVySGVhZGluZztcblxufSkoKTtcbiIsInZhciBDaGFwdGVyLCBDaGFwdGVySGVhZGluZywgU2xpZGVzLFxuICBiaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfTtcblxuU2xpZGVzID0gcmVxdWlyZSgnZXBpc29kZS9zbGlkZXMnKTtcblxuQ2hhcHRlckhlYWRpbmcgPSByZXF1aXJlKCdlcGlzb2RlL2NoYXB0ZXItaGVhZGluZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENoYXB0ZXIgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIENoYXB0ZXIoY2hhcHRlckRhdGEsIG1vdmllLCB1eCwgb25DaGFwdGVyQ29tcGV0ZSkge1xuICAgIHRoaXMuY2hhcHRlckRhdGEgPSBjaGFwdGVyRGF0YTtcbiAgICB0aGlzLm1vdmllID0gbW92aWU7XG4gICAgdGhpcy51eCA9IHV4O1xuICAgIHRoaXMub25DaGFwdGVyQ29tcGV0ZSA9IG9uQ2hhcHRlckNvbXBldGU7XG4gICAgdGhpcy5vblNsaWRlc0NvbXBsZXRlID0gYmluZCh0aGlzLm9uU2xpZGVzQ29tcGxldGUsIHRoaXMpO1xuICAgIHRoaXMuc3RhcnRTbGlkZXMgPSBiaW5kKHRoaXMuc3RhcnRTbGlkZXMsIHRoaXMpO1xuICAgIHRoaXMudGl0bGUgPSB0aGlzLmNoYXB0ZXJEYXRhLnRpdGxlO1xuICB9XG5cbiAgQ2hhcHRlci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbihmaXJzdFNsaWRlVGl0bGUpIHtcbiAgICB2YXIgY2hhcHRlckhlYWRpbmc7XG4gICAgdGhpcy5maXJzdFNsaWRlVGl0bGUgPSBmaXJzdFNsaWRlVGl0bGU7XG4gICAgUHViU3ViLnB1Ymxpc2goJ21ldGEuY2hhcHRlci5zdGFydCcsIHRoaXMuY2hhcHRlckRhdGEpO1xuICAgIGFyaXN0b3RsZS5kZXZUb29scy5nbyh0aGlzLmNoYXB0ZXJEYXRhLmRldiwgdGhpcy5jaGFwdGVyRGF0YS5zbGlkZXMpO1xuICAgIHJldHVybiBjaGFwdGVySGVhZGluZyA9IG5ldyBDaGFwdGVySGVhZGluZyh0aGlzLmNoYXB0ZXJEYXRhLCB0aGlzLnN0YXJ0U2xpZGVzKTtcbiAgfTtcblxuICBDaGFwdGVyLnByb3RvdHlwZS5zdGFydFNsaWRlcyA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc2xpZGVzID0gbmV3IFNsaWRlcyh0aGlzLmNoYXB0ZXJEYXRhLCB0aGlzLm1vdmllLCB0aGlzLnV4LCB0aGlzLm9uU2xpZGVzQ29tcGxldGUpO1xuICAgIGlmICh0aGlzLmZpcnN0U2xpZGVUaXRsZSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5zbGlkZXMuZ290b1NsaWRlQnlUaXRsZSh0aGlzLmZpcnN0U2xpZGVUaXRsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnNsaWRlcy5zdGFydCgpO1xuICAgIH1cbiAgfTtcblxuICBDaGFwdGVyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuc2xpZGVzICE9IG51bGwpIHtcbiAgICAgIHRoaXMuc2xpZGVzLmRlc3Ryb3koKTtcbiAgICAgIHJldHVybiB0aGlzLnNsaWRlcyA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIENoYXB0ZXIucHJvdG90eXBlLm9uU2xpZGVzQ29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgICBQdWJTdWIucHVibGlzaCgnbWV0YS5jaGFwdGVyLmZpbmlzaCcsIHRoaXMuY2hhcHRlckRhdGEpO1xuICAgIHJldHVybiB0aGlzLm9uQ2hhcHRlckNvbXBldGUoKTtcbiAgfTtcblxuICByZXR1cm4gQ2hhcHRlcjtcblxufSkoKTtcbiIsInZhciBBc3NldFByZWxvYWRlciwgQ2hhcHRlciwgRXBpc29kZSwgU2VxdWVuY2UsXG4gIGJpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9O1xuXG5DaGFwdGVyID0gcmVxdWlyZSgnZXBpc29kZS9jaGFwdGVyJyk7XG5cblNlcXVlbmNlID0gcmVxdWlyZSgnbWlzYy9TZXF1ZW5jZScpO1xuXG5Bc3NldFByZWxvYWRlciA9IHJlcXVpcmUoJ21pc2MvYXNzZXQtcHJlbG9hZGVyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRXBpc29kZSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gRXBpc29kZSh0cmFpbmluZ0RhdGExLCBtb3ZpZSwgdXgsIGNocm9tZSkge1xuICAgIHRoaXMudHJhaW5pbmdEYXRhID0gdHJhaW5pbmdEYXRhMTtcbiAgICB0aGlzLm1vdmllID0gbW92aWU7XG4gICAgdGhpcy51eCA9IHV4O1xuICAgIHRoaXMuY2hyb21lID0gY2hyb21lO1xuICAgIHRoaXMucGxheUNoYXB0ZXIgPSBiaW5kKHRoaXMucGxheUNoYXB0ZXIsIHRoaXMpO1xuICAgIHRoaXMuY2hhcHRlckNvbXBsZXRlID0gYmluZCh0aGlzLmNoYXB0ZXJDb21wbGV0ZSwgdGhpcyk7XG4gICAgdGhpcy5uZXh0Q2hhcHRlciA9IGJpbmQodGhpcy5uZXh0Q2hhcHRlciwgdGhpcyk7XG4gICAgdGhpcy5iZWdpbiA9IGJpbmQodGhpcy5iZWdpbiwgdGhpcyk7XG4gICAgYXJpc3RvdGxlLmVwaXNvZGUgPSB0aGlzO1xuICAgIHRoaXMuZXBpc29kZU51bSA9IHRoaXMudHJhaW5pbmdEYXRhLmVwaXNvZGU7XG4gICAgdGhpcy5pc0xhc3RFcGlzb2RlID0gdGhpcy50cmFpbmluZ0RhdGEuaXNMYXN0RXBpc29kZTtcbiAgICBhcmlzdG90bGUuZXBpc29kZURhdGEgPSB0aGlzLnRyYWluaW5nRGF0YTtcbiAgICBhcmlzdG90bGUubGFiZWxzID0gdGhpcy50cmFpbmluZ0RhdGEubGFiZWxzO1xuICAgIHRoaXMubmV4dFJhbmtJZCA9IHRoaXMudHJhaW5pbmdEYXRhLm5leHRSYW5rSWQ7XG4gICAgdGhpcy5jaHJvbWUuYnVpbGQoKTtcbiAgICBuZXcgQXNzZXRQcmVsb2FkZXIodGhpcy50cmFpbmluZ0RhdGEuYWN0aW9uLCB0aGlzLmJlZ2luKTtcbiAgfVxuXG4gIEVwaXNvZGUucHJvdG90eXBlLmJlZ2luID0gZnVuY3Rpb24oKSB7XG4gICAgYXJpc3RvdGxlLmRldlRvb2xzLmdvKHRoaXMudHJhaW5pbmdEYXRhLmRldiwgdGhpcy50cmFpbmluZ0RhdGEuY2hhcHRlcnMpO1xuICAgIHRoaXMudG9rZW4xID0gUHViU3ViLnN1YnNjcmliZSgnZXBpc29kZS5nb3RvJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuZ290b0xvY2F0aW9uQnlUaXRsZShkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5wdWJsaXNoKFwiZXBpc29kZS5sb2FkZWRcIiwgdGhpcy50cmFpbmluZ0RhdGEpO1xuICAgIHRoaXMuY3JlYXRlQ2hhcHRlcnModGhpcy50cmFpbmluZ0RhdGEpO1xuICAgIGlmICh0aGlzLnRyYWluaW5nRGF0YS5za2lwU2xhdGUpIHtcbiAgICAgIHRoaXMucGxheUNoYXB0ZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93SW50cm8odGhpcy50cmFpbmluZ0RhdGEpO1xuICAgIH1cbiAgICBpZiAodGhpcy50cmFpbmluZ0RhdGEuYWN0aW9uICE9IG51bGwpIHtcbiAgICAgIHJldHVybiBhcmlzdG90bGUuY29tbWFuZGVyW1wiZG9cIl0odGhpcy50cmFpbmluZ0RhdGEuYWN0aW9uKTtcbiAgICB9XG4gIH07XG5cbiAgRXBpc29kZS5wcm90b3R5cGUuc2hvd0ludHJvID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIGlmIChhcmlzdG90bGUuZGV2VG9vbHMuc2tpcFNsYXRlKSB7XG4gICAgICB0aGlzLnBsYXlDaGFwdGVyKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudXgucG9wdWxhdGUoe1xuICAgICAgY29tcG9uZW50czogW1xuICAgICAgICB7XG4gICAgICAgICAga2luZDogXCJlcGlzb2RlLWludHJvXCIsXG4gICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICB0aXRsZTogZGF0YS50aXRsZSxcbiAgICAgICAgICAgIHN1YnRpdGxlOiBkYXRhLnN1YnRpdGxlLFxuICAgICAgICAgICAgZXBpc29kZTogZGF0YS5lcGlzb2RlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSk7XG4gICAgaWYgKGFyaXN0b3RsZS5sbXNQcm94eS5zdG9yZSAhPSBudWxsKSB7XG4gICAgICBpZiAoYXJpc3RvdGxlLmxtc1Byb3h5LnN0b3JlLmxvY2F0aW9uICE9IG51bGwpIHtcbiAgICAgICAgaWYgKGFyaXN0b3RsZS5sbXNQcm94eS5zdG9yZS5sb2NhdGlvbi5lcGlzb2RlTnVtID09PSB0aGlzLmVwaXNvZGVOdW0pIHtcbiAgICAgICAgICBpZiAoYXJpc3RvdGxlLmxtc1Byb3h5LnN0b3JlLmxvY2F0aW9uLnNsaWRlICE9IG51bGwpIHtcbiAgICAgICAgICAgIGFyaXN0b3RsZS5sbXNQcm94eS5yZWh5ZHJhdGUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNldFRpbWVvdXQodGhpcy5wbGF5Q2hhcHRlciwgMzAwMCk7XG4gIH07XG5cbiAgRXBpc29kZS5wcm90b3R5cGUuZ290b0xvY2F0aW9uQnlUaXRsZSA9IGZ1bmN0aW9uKHRpdGxlKSB7XG4gICAgdmFyIGJyZWFrTG9vcDEsIGNoYXB0ZXIsIGNoYXB0ZXJUaXRsZSwgaSwgaiwgaywga2V5LCBsYXllciwgbGF5ZXJzLCBsYXllcnNBciwgbGVuLCBsZW4xLCBsZW4yLCByZWYsIHJlZjEsIHJlZjIsIHJlZjMsIHNsaWRlLCBzbGlkZVRpdGxlO1xuICAgIFB1YlN1Yi5wdWJsaXNoKCdtb3ZpZS5sYXllcnMuY2xlYXItYWxsJyk7XG4gICAgbGF5ZXJzID0ge307XG4gICAgcmVmID0gYXJpc3RvdGxlLmVwaXNvZGVEYXRhLmNoYXB0ZXJzO1xuICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgY2hhcHRlciA9IHJlZltpXTtcbiAgICAgIGNoYXB0ZXJUaXRsZSA9IGNoYXB0ZXIudGl0bGU7XG4gICAgICBpZiAoY2hhcHRlci50aXRsZSA9PT0gdGl0bGUpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICByZWYxID0gY2hhcHRlci5zbGlkZXM7XG4gICAgICBmb3IgKGogPSAwLCBsZW4xID0gcmVmMS5sZW5ndGg7IGogPCBsZW4xOyBqKyspIHtcbiAgICAgICAgc2xpZGUgPSByZWYxW2pdO1xuICAgICAgICBpZiAoc2xpZGUudGl0bGUgPT09IHRpdGxlKSB7XG4gICAgICAgICAgc2xpZGVUaXRsZSA9IHNsaWRlLnRpdGxlO1xuICAgICAgICAgIGJyZWFrTG9vcDEgPSB0cnVlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoKHJlZjIgPSBzbGlkZS5tb3ZpZSkgIT0gbnVsbCA/IHJlZjIubGF5ZXJzIDogdm9pZCAwKSAhPSBudWxsKSB7XG4gICAgICAgICAgcmVmMyA9IHNsaWRlLm1vdmllLmxheWVycztcbiAgICAgICAgICBmb3IgKGsgPSAwLCBsZW4yID0gcmVmMy5sZW5ndGg7IGsgPCBsZW4yOyBrKyspIHtcbiAgICAgICAgICAgIGxheWVyID0gcmVmM1trXTtcbiAgICAgICAgICAgIGxheWVyc1tsYXllci5kZXB0aF0gPSBsYXllcjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChicmVha0xvb3AxKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXllcnNBciA9IFtdO1xuICAgIGZvciAoa2V5IGluIGxheWVycykge1xuICAgICAgbGF5ZXIgPSBsYXllcnNba2V5XTtcbiAgICAgIGxheWVyc0FyLnB1c2gobGF5ZXIpO1xuICAgIH1cbiAgICB0aGlzLmNoYXB0ZXJzLmFjdGl2YXRlSXRlbUJ5UGFyYW0oJ3RpdGxlJywgY2hhcHRlclRpdGxlKTtcbiAgICB0aGlzLnBsYXlDaGFwdGVyKHNsaWRlLnRpdGxlKTtcbiAgICByZXR1cm4gUHViU3ViLnB1Ymxpc2goJ21vdmllLnJlaHlkcmF0ZS1sYXllcnMnLCBsYXllcnNBcik7XG4gIH07XG5cbiAgRXBpc29kZS5wcm90b3R5cGUuY3JlYXRlQ2hhcHRlcnMgPSBmdW5jdGlvbih0cmFpbmluZ0RhdGEpIHtcbiAgICB2YXIgY2hhcHRlckRhdGEsIGNoYXB0ZXJzLCBpLCBsZW4sIHJlZjtcbiAgICBjaGFwdGVycyA9IFtdO1xuICAgIHJlZiA9IHRyYWluaW5nRGF0YS5jaGFwdGVycztcbiAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNoYXB0ZXJEYXRhID0gcmVmW2ldO1xuICAgICAgY2hhcHRlcnMucHVzaChuZXcgQ2hhcHRlcihjaGFwdGVyRGF0YSwgdGhpcy5tb3ZpZSwgdGhpcy51eCwgdGhpcy5jaGFwdGVyQ29tcGxldGUpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY2hhcHRlcnMgPSBuZXcgU2VxdWVuY2UoY2hhcHRlcnMpO1xuICB9O1xuXG4gIEVwaXNvZGUucHJvdG90eXBlLm5leHRDaGFwdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuY2hhcHRlcnMuaXNBdExhc3RJdGVtKCkpIHtcbiAgICAgIHJldHVybiB0aGlzLmVwaXNvZGVDb21wbGV0ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNoYXB0ZXJzLm5leHQoKTtcbiAgICAgIHJldHVybiB0aGlzLnBsYXlDaGFwdGVyKCk7XG4gICAgfVxuICB9O1xuXG4gIEVwaXNvZGUucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucGxheUNoYXB0ZXIoKTtcbiAgfTtcblxuICBFcGlzb2RlLnByb3RvdHlwZS5jaGFwdGVyQ29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgICBQdWJTdWIucHVibGlzaCgnc3RhdGUuc2F2ZScpO1xuICAgIHRoaXMuY2hhcHRlcnMuZ2V0Q3VycmVudEl0ZW0oKS5kZXN0cm95KCk7XG4gICAgcmV0dXJuIHRoaXMubmV4dENoYXB0ZXIoKTtcbiAgfTtcblxuICBFcGlzb2RlLnByb3RvdHlwZS5wbGF5Q2hhcHRlciA9IGZ1bmN0aW9uKGZpcnN0U2xpZGUpIHtcbiAgICBpZiAoZmlyc3RTbGlkZSA9PSBudWxsKSB7XG4gICAgICBmaXJzdFNsaWRlID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5jaGFwdGVycy5nZXRDdXJyZW50SXRlbSgpLnN0YXJ0KGZpcnN0U2xpZGUpO1xuICAgIHJldHVybiBQdWJTdWIucHVibGlzaCgnY2hhcHRlci5zdGFydGVkJywgdGhpcy5jaGFwdGVycy5nZXRDdXJyZW50SXRlbSgpLmNoYXB0ZXJEYXRhLnRpdGxlKTtcbiAgfTtcblxuICBFcGlzb2RlLnByb3RvdHlwZS5lcGlzb2RlQ29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbmV3RXBpc29kZU51bTtcbiAgICBpZiAodGhpcy5pc0xhc3RFcGlzb2RlKSB7XG4gICAgICByZXR1cm4gYXJpc3RvdGxlLmxtc1Byb3h5LmNvbXBsZXRlQ291cnNlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld0VwaXNvZGVOdW0gPSBTdHJpbmcoTnVtYmVyKGFyaXN0b3RsZS5lcGlzb2RlTnVtKSArIDEpO1xuICAgICAgYXJpc3RvdGxlLmxtc1Byb3h5LmNvbXBsZXRlRXBpc29kZShuZXdFcGlzb2RlTnVtKTtcbiAgICAgIHJldHVybiBQdWJTdWIucHVibGlzaCgnZXBpc29kZS5sb2FkJywgbmV3RXBpc29kZU51bSk7XG4gICAgfVxuICB9O1xuXG4gIEVwaXNvZGUucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgY2hhcHRlciwgaSwgbGVuLCByZWYsIHJlc3VsdHM7XG4gICAgUHViU3ViLnVuc3Vic2NyaWJlKHRoaXMudG9rZW4xKTtcbiAgICByZWYgPSB0aGlzLmNoYXB0ZXJzLml0ZW1zO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNoYXB0ZXIgPSByZWZbaV07XG4gICAgICByZXN1bHRzLnB1c2goY2hhcHRlci5kZXN0cm95KCkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICByZXR1cm4gRXBpc29kZTtcblxufSkoKTtcbiIsInZhciBBdWRpb1RyYWNrLCBTVkdBbmltYXRpb24sIFNsaWRlLFxuICBiaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfTtcblxuQXVkaW9UcmFjayA9IHJlcXVpcmUoXCJlcGlzb2RlL2F1ZGlvLXRyYWNrXCIpO1xuXG5TVkdBbmltYXRpb24gPSByZXF1aXJlKFwibW92aWUvc3ZnLWFuaW1hdGlvblwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTbGlkZSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gU2xpZGUobW92aWUsIHNsaWRlVVgsIHNsaWRlRGF0YSwgb25TbGlkZUNvbXBsZXRlKSB7XG4gICAgdGhpcy5tb3ZpZSA9IG1vdmllO1xuICAgIHRoaXMuc2xpZGVVWCA9IHNsaWRlVVg7XG4gICAgdGhpcy5zbGlkZURhdGEgPSBzbGlkZURhdGE7XG4gICAgdGhpcy5vblNsaWRlQ29tcGxldGUgPSBvblNsaWRlQ29tcGxldGU7XG4gICAgdGhpcy5wbGF5ID0gYmluZCh0aGlzLnBsYXksIHRoaXMpO1xuICAgIHRoaXMudGl0bGUgPSB0aGlzLnNsaWRlRGF0YS50aXRsZTtcbiAgfVxuXG4gIFNsaWRlLnByb3RvdHlwZS5wbGF5ID0gZnVuY3Rpb24ob25Db21wbGV0ZSkge1xuICAgIGlmICh0aGlzLnNsaWRlRGF0YS50aXRsZSAhPSBudWxsKSB7XG4gICAgICBQdWJTdWIucHVibGlzaCgnc2xpZGUuYWN0aXZhdGVkJywgdGhpcy5zbGlkZURhdGEudGl0bGUpO1xuICAgIH1cbiAgICB0aGlzLm1vdmllLnBvcHVsYXRlKHRoaXMuc2xpZGVEYXRhLm1vdmllKTtcbiAgICB0aGlzLnNsaWRlVVgucG9wdWxhdGUodGhpcy5zbGlkZURhdGEudXgpO1xuICAgIHRoaXMuc2V0RHVyYXRpb24oKTtcbiAgICB0aGlzLnJ1bkN0YW5sZWUodGhpcy5zbGlkZURhdGEuY3RhbmxlZSk7XG4gICAgdGhpcy5ydW5EaWFsb2d1ZSh0aGlzLnNsaWRlRGF0YS5kaWFsb2d1ZSk7XG4gICAgdGhpcy5ydW5BY3Rpb25zKHRoaXMuc2xpZGVEYXRhLmFjdGlvbik7XG4gICAgcmV0dXJuIHRoaXMucnVuU291bmRGeCh0aGlzLnNsaWRlRGF0YS5zZngpO1xuICB9O1xuXG4gIFNsaWRlLnByb3RvdHlwZS5ydW5Tb3VuZEZ4ID0gZnVuY3Rpb24oc2Z4KSB7XG4gICAgaWYgKHNmeCA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiBQdWJTdWIucHVibGlzaCgnc2Z4LmFkZCcsIHNmeCk7XG4gIH07XG5cbiAgU2xpZGUucHJvdG90eXBlLnJ1bkFjdGlvbnMgPSBmdW5jdGlvbihhY3Rpb24pIHtcbiAgICBpZiAoYWN0aW9uID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIGFyaXN0b3RsZS5jb21tYW5kZXJbXCJkb1wiXShhY3Rpb24pO1xuICB9O1xuXG4gIFNsaWRlLnByb3RvdHlwZS5zZXREdXJhdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjdGFubGVlU3Vic2NyaXB0aW9uLCBsaXN0ZW5TdWJzY3JpcHRpb24sIHV4U3Vic2NyaXB0aW9uO1xuICAgIGlmICh0aGlzLnNsaWRlRGF0YS5kdXJhdGlvbiA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHN3aXRjaCAodGhpcy5zbGlkZURhdGEuZHVyYXRpb24ua2luZCkge1xuICAgICAgY2FzZSBcInRpbWVcIjpcbiAgICAgICAgcmV0dXJuIGFyaXN0b3RsZS50aW1lb3V0KHRoaXMub25TbGlkZUNvbXBsZXRlLCB0aGlzLnNsaWRlRGF0YS5kdXJhdGlvbi5zZWNvbmRzICogMTAwMCk7XG4gICAgICBjYXNlIFwidXNlclwiOlxuICAgICAgICByZXR1cm4gY29uc29sZS5sb2coXCJ3YWl0aW5nIG9uIHRoZSB1c2VyXCIpO1xuICAgICAgY2FzZSBcInV4XCI6XG4gICAgICAgIHJldHVybiB1eFN1YnNjcmlwdGlvbiA9IFB1YlN1Yi5zdWJzY3JpYmUoJ3V4LmNvbXBsZXRlJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgUHViU3ViLnVuc3Vic2NyaWJlKHV4U3Vic2NyaXB0aW9uKTtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5vblNsaWRlQ29tcGxldGUoKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KSh0aGlzKSk7XG4gICAgICBjYXNlIFwiZGlhbG9ndWVcIjpcbiAgICAgIGNhc2UgXCJjdGFubGVlXCI6XG4gICAgICAgIHJldHVybiBjdGFubGVlU3Vic2NyaXB0aW9uID0gUHViU3ViLnN1YnNjcmliZSgnZGlhbG9ndWUuY29tcGxldGUnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBQdWJTdWIudW5zdWJzY3JpYmUoY3RhbmxlZVN1YnNjcmlwdGlvbik7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMub25TbGlkZUNvbXBsZXRlKCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSkodGhpcykpO1xuICAgICAgY2FzZSBcImxpc3RlblwiOlxuICAgICAgICByZXR1cm4gbGlzdGVuU3Vic2NyaXB0aW9uID0gUHViU3ViLnN1YnNjcmliZSh0aGlzLnNsaWRlRGF0YS5kdXJhdGlvbi5ldmVudCwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgUHViU3ViLnVuc3Vic2NyaWJlKGxpc3RlblN1YnNjcmlwdGlvbik7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMub25TbGlkZUNvbXBsZXRlKCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSkodGhpcykpO1xuICAgIH1cbiAgfTtcblxuICBTbGlkZS5wcm90b3R5cGUucnVuQ3RhbmxlZSA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBpZiAoZGF0YSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gYXJpc3RvdGxlLmN0YW5sZWUuYWN0aXZhdGUoZGF0YSk7XG4gICAgfVxuICB9O1xuXG4gIFNsaWRlLnByb3RvdHlwZS5ydW5EaWFsb2d1ZSA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBpZiAoZGF0YSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gYXJpc3RvdGxlLmRpYWxvZ3VlLmFjdGl2YXRlKGRhdGEpO1xuICAgIH1cbiAgfTtcblxuICBTbGlkZS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBQdWJTdWIudW5zdWJzY3JpYmUodGhpcy50b2tlbjEpO1xuICB9O1xuXG4gIHJldHVybiBTbGlkZTtcblxufSkoKTtcbiIsInZhciBTZXF1ZW5jZSwgU2xpZGUsIFNsaWRlcyxcbiAgYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH07XG5cblNsaWRlID0gcmVxdWlyZSgnZXBpc29kZS9zbGlkZScpO1xuXG5TZXF1ZW5jZSA9IHJlcXVpcmUoJ21pc2Mvc2VxdWVuY2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTbGlkZXMgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIFNsaWRlcyh0cmFpbmluZ0RhdGEsIG1vdmllLCB1eCwgb25TaG93Q29tcGxldGUpIHtcbiAgICB2YXIgdG9rZW4xLCB0b2tlbjIsIHRva2VuMywgdG9rZW40LCB0b2tlbjc7XG4gICAgdGhpcy5vblNob3dDb21wbGV0ZSA9IG9uU2hvd0NvbXBsZXRlO1xuICAgIHRoaXMuc2xpZGVDb21wbGV0ZSA9IGJpbmQodGhpcy5zbGlkZUNvbXBsZXRlLCB0aGlzKTtcbiAgICB0aGlzLm5leHRTbGlkZSA9IGJpbmQodGhpcy5uZXh0U2xpZGUsIHRoaXMpO1xuICAgIGFyaXN0b3RsZS5zbGlkZXMgPSB0aGlzO1xuICAgIHRoaXMuY3JlYXRlU2xpZGVzKHRyYWluaW5nRGF0YSwgbW92aWUsIHV4KTtcbiAgICB0b2tlbjEgPSBQdWJTdWIuc3Vic2NyaWJlKCdzbGlkZXMubmV4dCcsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMubmV4dFNsaWRlKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0b2tlbjIgPSBQdWJTdWIuc3Vic2NyaWJlKCdzbGlkZXMubmV4dC1zbGlkZScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMubmV4dFNsaWRlKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0b2tlbjMgPSBQdWJTdWIuc3Vic2NyaWJlKCdzbGlkZXMucmVwbGF5JywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5yZXBsYXkoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRva2VuNCA9IFB1YlN1Yi5zdWJzY3JpYmUoJ3NsaWRlcy5wcmV2LXNsaWRlJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5wcmV2U2xpZGUoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRva2VuNyA9IFB1YlN1Yi5zdWJzY3JpYmUoJ21vdmllLnJlcG9ydCcsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gY29uc29sZS5sb2coX3RoaXMuZ2V0SW5kZXhBbmRUb3RhbCgpKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uVG9rZW5zID0gW3Rva2VuMSwgdG9rZW4yLCB0b2tlbjMsIHRva2VuNCwgdG9rZW43XTtcbiAgfVxuXG4gIFNsaWRlcy5wcm90b3R5cGUuY3JlYXRlU2xpZGVzID0gZnVuY3Rpb24odHJhaW5pbmdEYXRhLCBtb3ZpZSwgdXgpIHtcbiAgICB2YXIgY291bnQsIGksIGxlbiwgcmVmLCBzbGlkZURhdGEsIHNsaWRlcztcbiAgICBzbGlkZXMgPSBbXTtcbiAgICBjb3VudCA9IDA7XG4gICAgcmVmID0gdHJhaW5pbmdEYXRhLnNsaWRlcztcbiAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHNsaWRlRGF0YSA9IHJlZltpXTtcbiAgICAgIHNsaWRlRGF0YS5pbmRleCA9IGNvdW50Kys7XG4gICAgICBzbGlkZXMucHVzaChuZXcgU2xpZGUobW92aWUsIHV4LCBzbGlkZURhdGEsIHRoaXMuc2xpZGVDb21wbGV0ZSkpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zbGlkZXMgPSBuZXcgU2VxdWVuY2Uoc2xpZGVzKTtcbiAgfTtcblxuICBTbGlkZXMucHJvdG90eXBlLm5leHRTbGlkZSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLnNsaWRlcy5pc0F0TGFzdEl0ZW0oKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2xpZGVTaG93Q29tcGxldGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zbGlkZXMubmV4dCgpO1xuICAgICAgcmV0dXJuIHRoaXMucGxheVNsaWRlKCk7XG4gICAgfVxuICB9O1xuXG4gIFNsaWRlcy5wcm90b3R5cGUucmVwbGF5ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucGxheVNsaWRlKCk7XG4gIH07XG5cbiAgU2xpZGVzLnByb3RvdHlwZS5wcmV2U2xpZGUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnNsaWRlcy5wcmV2KCk7XG4gICAgcmV0dXJuIHRoaXMucGxheVNsaWRlKCk7XG4gIH07XG5cbiAgU2xpZGVzLnByb3RvdHlwZS5nb3RvU2xpZGUgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSBOdW1iZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLmdvdG9TbGlkZUJ5SW5kZXgoZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmdvdG9TbGlkZUJ5SWQoZGF0YSk7XG4gICAgfVxuICB9O1xuXG4gIFNsaWRlcy5wcm90b3R5cGUuZ290b1NsaWRlQnlJbmRleCA9IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgdGhpcy5zbGlkZXMuY2hhbmdlSXRlbUJ5SW5kZXgoaW5kZXgpO1xuICAgIHJldHVybiB0aGlzLnBsYXlTbGlkZSgpO1xuICB9O1xuXG4gIFNsaWRlcy5wcm90b3R5cGUuZ290b1NsaWRlQnlUaXRsZSA9IGZ1bmN0aW9uKHRpdGxlKSB7XG4gICAgdGhpcy5zbGlkZXMuYWN0aXZhdGVJdGVtQnlQYXJhbShcInRpdGxlXCIsIHRpdGxlKTtcbiAgICByZXR1cm4gdGhpcy5wbGF5U2xpZGUoKTtcbiAgfTtcblxuICBTbGlkZXMucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaSwgaiwgbGVuLCBsZW4xLCByZWYsIHJlZjEsIHJlc3VsdHMsIHNsaWRlLCB0b2tlbjtcbiAgICByZWYgPSB0aGlzLnNsaWRlcy5pdGVtcztcbiAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHNsaWRlID0gcmVmW2ldO1xuICAgICAgc2xpZGUuZGVzdHJveSgpO1xuICAgIH1cbiAgICB0aGlzLnNsaWRlcyA9IG51bGw7XG4gICAgcmVmMSA9IHRoaXMuc3Vic2NyaXB0aW9uVG9rZW5zO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGogPSAwLCBsZW4xID0gcmVmMS5sZW5ndGg7IGogPCBsZW4xOyBqKyspIHtcbiAgICAgIHRva2VuID0gcmVmMVtqXTtcbiAgICAgIHJlc3VsdHMucHVzaChQdWJTdWIudW5zdWJzY3JpYmUodG9rZW4pKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgU2xpZGVzLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBsYXlTbGlkZSgpO1xuICB9O1xuXG4gIFNsaWRlcy5wcm90b3R5cGUuc2xpZGVDb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm5leHRTbGlkZSgpO1xuICB9O1xuXG4gIFNsaWRlcy5wcm90b3R5cGUucGxheVNsaWRlID0gZnVuY3Rpb24oKSB7XG4gICAgUHViU3ViLnB1Ymxpc2goJ3NsaWRlcy5jaGFuZ2luZycpO1xuICAgIHJldHVybiB0aGlzLnNsaWRlcy5nZXRDdXJyZW50SXRlbSgpLnBsYXkodGhpcy5zbGlkZUNvbXBsZXRlKTtcbiAgfTtcblxuICBTbGlkZXMucHJvdG90eXBlLnNsaWRlU2hvd0NvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMub25TaG93Q29tcGxldGUoKTtcbiAgfTtcblxuICBTbGlkZXMucHJvdG90eXBlLmdldEN1cnJlbnRJbmRleCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnNsaWRlcy5nZXRDdXJyZW50SXRlbSgpLnNsaWRlRGF0YS5pbmRleDtcbiAgfTtcblxuICBTbGlkZXMucHJvdG90eXBlLmdldEluZGV4QW5kVG90YWwgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJzbGlkZSBcIiArICh0aGlzLnNsaWRlcy5nZXRDdXJyZW50SXRlbSgpLnNsaWRlRGF0YS5pbmRleCkgKyBcIiBvZiBcIiArIHRoaXMuc2xpZGVzLnRvdGFsSXRlbXM7XG4gIH07XG5cbiAgcmV0dXJuIFNsaWRlcztcblxufSkoKTtcbiIsInZhciBTZXF1ZW5jZTtcblxubW9kdWxlLmV4cG9ydHMgPSBTZXF1ZW5jZSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gU2VxdWVuY2UoaXRlbXMpIHtcbiAgICB0aGlzLml0ZW1zID0gaXRlbXM7XG4gICAgdGhpcy5yZXNldCgpO1xuICAgIHRoaXMudG90YWxJdGVtcyA9IHRoaXMuaXRlbXMubGVuZ3RoO1xuICB9XG5cbiAgU2VxdWVuY2UucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbihsb29wT25PdmVyU2hvb3QpIHtcbiAgICBpZiAobG9vcE9uT3ZlclNob290ID09IG51bGwpIHtcbiAgICAgIGxvb3BPbk92ZXJTaG9vdCA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5pbmNyYW1lbnRJdGVtSW5kZXgoMSwgbG9vcE9uT3ZlclNob290KTtcbiAgfTtcblxuICBTZXF1ZW5jZS5wcm90b3R5cGUucHJldiA9IGZ1bmN0aW9uKGxvb3BPbk92ZXJTaG9vdCkge1xuICAgIGlmIChsb29wT25PdmVyU2hvb3QgPT0gbnVsbCkge1xuICAgICAgbG9vcE9uT3ZlclNob290ID0gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmluY3JhbWVudEl0ZW1JbmRleCgtMSwgbG9vcE9uT3ZlclNob290KTtcbiAgfTtcblxuICBTZXF1ZW5jZS5wcm90b3R5cGUuaXNBdExhc3RJdGVtID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudEl0ZW1JbmRleCA9PT0gdGhpcy50b3RhbEl0ZW1zIC0gMSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgU2VxdWVuY2UucHJvdG90eXBlLmdldEN1cnJlbnRJdGVtID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXNbdGhpcy5jdXJyZW50SXRlbUluZGV4XTtcbiAgfTtcblxuICBTZXF1ZW5jZS5wcm90b3R5cGUuY3VycmVudEl0ZW0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDdXJyZW50SXRlbSgpO1xuICB9O1xuXG4gIFNlcXVlbmNlLnByb3RvdHlwZS5pbmNyYW1lbnRJdGVtSW5kZXggPSBmdW5jdGlvbihpbmNyYW1lbnQsIGxvb3BPbk92ZXJTaG9vdCkge1xuICAgIHZhciBuZXdJbmRleDtcbiAgICBpZiAobG9vcE9uT3ZlclNob290ID09IG51bGwpIHtcbiAgICAgIGxvb3BPbk92ZXJTaG9vdCA9IGZhbHNlO1xuICAgIH1cbiAgICBuZXdJbmRleCA9IHRoaXMuY3VycmVudEl0ZW1JbmRleCArIGluY3JhbWVudDtcbiAgICBpZiAobmV3SW5kZXggPiB0aGlzLnRvdGFsSXRlbXMgLSAxKSB7XG4gICAgICBuZXdJbmRleCA9IGxvb3BPbk92ZXJTaG9vdCA/IDAgOiB0aGlzLnRvdGFsSXRlbXMgLSAxO1xuICAgIH0gZWxzZSBpZiAobmV3SW5kZXggPCAwKSB7XG4gICAgICBuZXdJbmRleCA9IGxvb3BPbk92ZXJTaG9vdCA/IHRoaXMudG90YWxJdGVtcyAtIDEgOiAwO1xuICAgIH1cbiAgICBpZiAodGhpcy5jdXJyZW50SXRlbUluZGV4ICE9PSBuZXdJbmRleCkge1xuICAgICAgdGhpcy5jdXJyZW50SXRlbUluZGV4ID0gbmV3SW5kZXg7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICBTZXF1ZW5jZS5wcm90b3R5cGUuY2hhbmdlSXRlbUJ5SW5kZXggPSBmdW5jdGlvbihuZXdJbmRleCkge1xuICAgIHZhciBpbmNyYW1lbnREaWZmZXJlbmNlLCBwbHVzT3JNaW51cztcbiAgICBwbHVzT3JNaW51cyA9IG5ld0luZGV4ID4gdGhpcy5jdXJyZW50SXRlbUluZGV4ID8gMSA6IC0xO1xuICAgIGluY3JhbWVudERpZmZlcmVuY2UgPSBNYXRoLmFicyh0aGlzLmN1cnJlbnRJdGVtSW5kZXggLSBuZXdJbmRleCkgKiBwbHVzT3JNaW51cztcbiAgICByZXR1cm4gdGhpcy5pbmNyYW1lbnRJdGVtSW5kZXgoaW5jcmFtZW50RGlmZmVyZW5jZSk7XG4gIH07XG5cbiAgU2VxdWVuY2UucHJvdG90eXBlLmFjdGl2YXRlSXRlbUJ5UGFyYW0gPSBmdW5jdGlvbihwYXJhbSwgdmFsKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudEl0ZW1JbmRleCA9IHRoaXMuZ2V0SW5kZXhCeVBhcmFtKHBhcmFtLCB2YWwpO1xuICB9O1xuXG4gIFNlcXVlbmNlLnByb3RvdHlwZS5nZXRJbmRleEJ5UGFyYW0gPSBmdW5jdGlvbihwYXJhbSwgdmFsKSB7XG4gICAgdmFyIGksIGl0ZW0sIGosIGxlbiwgcmVmO1xuICAgIHJlZiA9IHRoaXMuaXRlbXM7XG4gICAgZm9yIChpID0gaiA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGogPCBsZW47IGkgPSArK2opIHtcbiAgICAgIGl0ZW0gPSByZWZbaV07XG4gICAgICBpZiAoaXRlbVtwYXJhbV0gPT09IHZhbCkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgU2VxdWVuY2UucHJvdG90eXBlLmdldEl0ZW1CeVBhcmFtID0gZnVuY3Rpb24ocGFyYW0sIHZhbCkge1xuICAgIHJldHVybiB0aGlzLml0ZW1zW3RoaXMuZ2V0SW5kZXhCeVBhcmFtKHBhcmFtLCB2YWwpXTtcbiAgfTtcblxuICBTZXF1ZW5jZS5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50SXRlbUluZGV4ID0gMDtcbiAgfTtcblxuICByZXR1cm4gU2VxdWVuY2U7XG5cbn0pKCk7XG4iLCJ2YXIgQVBJcHJveHk7XG5cbm1vZHVsZS5leHBvcnRzID0gQVBJcHJveHkgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIEFQSXByb3h5KCkge1xuICAgIHdpbmRvdy5hcGlQcm94eSA9IHRoaXM7XG4gICAgUHViU3ViLnN1YnNjcmliZSgnbWV0YS5jaGFwdGVyLnN0YXJ0JywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuc3RhcnRDaGFwdGVyKGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgUHViU3ViLnN1YnNjcmliZSgnbWV0YS5jaGFwdGVyLmZpbmlzaCcsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmZpbmlzaENoYXB0ZXIoZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCdtZXRhLmNob2ljZS5zdGFydCcsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnN0YXJ0Q2hvaWNlKGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgUHViU3ViLnN1YnNjcmliZSgnbWV0YS5jaG9pY2UuZmluaXNoJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuZmluaXNoQ2hvaWNlKGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgUHViU3ViLnN1YnNjcmliZSgnbWV0YS5kdXRpZXMuc3RhcnQnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5zdGFydER1dGllcyhkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ21ldGEuZHV0aWVzLmZpbmlzaCcsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmZpbmlzaER1dGllcyhkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ21ldGEuYWN0aXZpdHknLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5hZGRBY3Rpdml0eShkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ21ldGEucXVpei5zdGFydCcsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnN0YXJ0UXVpeihkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ21ldGEucXVpei5maW5pc2gnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5maW5pc2hRdWl6KGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgUHViU3ViLnN1YnNjcmliZSgnbWV0YS5xdWl6LnF1ZXN0aW9uLnN0YXJ0JywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuc3RhcnRRdWl6UXVlc3Rpb24oZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCdtZXRhLnF1aXoucXVlc3Rpb24uYW5zd2VyJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuYWRkUXVlc2l0b25BY3Rpdml0eShkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ21ldGEucXVpei5xdWVzdGlvbi5maW5pc2gnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5maW5pc2hRdWl6UXVlc3Rpb24oZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgfVxuXG4gIEFQSXByb3h5LnByb3RvdHlwZS5zdGFydENoYXB0ZXIgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgYXBwSW5zaWdodHMudHJhY2tQYWdlVmlldyhkYXRhLnRpdGxlKTtcbiAgICByZXR1cm4gdGhpcy5jaGFwdGVyID0ge1xuICAgICAgRXBpc29kZVRpdGxlOiBcIkVwaXNvZGUgXCIgKyBhcmlzdG90bGUuZXBpc29kZU51bSxcbiAgICAgIExlYXJuaW5nU3RhcnRUaW1lVXRjOiB0aGlzLm5vdygpLFxuICAgICAgcGlja3M6IHt9LFxuICAgICAgQ2hvaWNlczogW10sXG4gICAgICBDaGFwdGVyTmFtZTogZGF0YS50aXRsZSxcbiAgICAgIEFjdGl2aXRpZXM6IFtdXG4gICAgfTtcbiAgfTtcblxuICBBUElwcm94eS5wcm90b3R5cGUuZmluaXNoQ2hhcHRlciA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnN1Ym1pdERhdGEoKTtcbiAgfTtcblxuICBBUElwcm94eS5wcm90b3R5cGUuc3RhcnRDaG9pY2UgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhcHRlci5waWNrc1tkYXRhLmlkXSA9IHtcbiAgICAgIFN0YXJ0VGltZVV0YzogdGhpcy5ub3coKSxcbiAgICAgIEFjdGl2aXRpZXM6IFtdXG4gICAgfTtcbiAgfTtcblxuICBBUElwcm94eS5wcm90b3R5cGUuZmluaXNoQ2hvaWNlID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIHRoaXMuY2hhcHRlci5waWNrc1tkYXRhLmlkXS5FbmRUaW1lVXRjID0gdGhpcy5ub3coKTtcbiAgICB0aGlzLmNoYXB0ZXIucGlja3NbZGF0YS5pZF0uU2VsZWN0aW9uID0gZGF0YS5jaG9pY2U7XG4gICAgdGhpcy5jaGFwdGVyLnBpY2tzW2RhdGEuaWRdLkNob2ljZU5hbWUgPSBkYXRhLmlkO1xuICAgIHJldHVybiB0aGlzLmNoYXB0ZXIuQ2hvaWNlcy5wdXNoKHRoaXMuY2hhcHRlci5waWNrc1tkYXRhLmlkXSk7XG4gIH07XG5cbiAgQVBJcHJveHkucHJvdG90eXBlLmFkZEFjdGl2aXR5ID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciBhY3Rpdml0eTtcbiAgICBhY3Rpdml0eSA9IHtcbiAgICAgIEFjdGl2aXR5TmFtZTogZGF0YS5hY3Rpdml0eSxcbiAgICAgIEV2ZW50VGltZVV0YzogdGhpcy5ub3coKVxuICAgIH07XG4gICAgaWYgKGRhdGEuaWQgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMuY2hhcHRlci5waWNrc1tkYXRhLmlkXS5BY3Rpdml0aWVzLnB1c2goYWN0aXZpdHkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5jaGFwdGVyLkFjdGl2aXRpZXMucHVzaChhY3Rpdml0eSk7XG4gICAgfVxuICB9O1xuXG4gIEFQSXByb3h5LnByb3RvdHlwZS5zdGFydER1dGllcyA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuY2hhcHRlci5MZWFybmluZ0VuZFRpbWVVdGMgPSB0aGlzLm5vdygpO1xuICAgIHJldHVybiB0aGlzLmNoYXB0ZXIuRHV0eVJldmlld1N0YXJ0VGltZVV0YyA9IHRoaXMubm93KCk7XG4gIH07XG5cbiAgQVBJcHJveHkucHJvdG90eXBlLmZpbmlzaER1dGllcyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmNoYXB0ZXIuRHV0eVJldmlld0VuZFRpbWVVdGMgPSB0aGlzLm5vdygpO1xuICB9O1xuXG4gIEFQSXByb3h5LnByb3RvdHlwZS5zdGFydFF1aXogPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5jaGFwdGVyLnF1aXogPSB7XG4gICAgICBzdGFydDogdGhpcy5ub3coKSxcbiAgICAgIHF1ZXN0aW9uczoge30sXG4gICAgICBTY29yZXM6IFtdXG4gICAgfTtcbiAgfTtcblxuICBBUElwcm94eS5wcm90b3R5cGUuZmluaXNoUXVpeiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmNoYXB0ZXIucXVpei5maW5pc2ggPSB0aGlzLm5vdygpO1xuICB9O1xuXG4gIEFQSXByb3h5LnByb3RvdHlwZS5zdGFydFF1aXpRdWVzdGlvbiA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5jaGFwdGVyLnF1aXoucXVlc3Rpb25zW2RhdGEuaWRdID0ge1xuICAgICAgU3RhcnRUaW1lVXRjOiB0aGlzLm5vdygpLFxuICAgICAgUXVlc3Rpb25OdW1iZXI6IGRhdGEuaWQsXG4gICAgICBBY3Rpdml0aWVzOiBbXVxuICAgIH07XG4gIH07XG5cbiAgQVBJcHJveHkucHJvdG90eXBlLmFkZFF1ZXNpdG9uQWN0aXZpdHkgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMuY2hhcHRlci5xdWl6LnF1ZXN0aW9uc1tkYXRhLmlkXS5BY3Rpdml0aWVzLnB1c2goe1xuICAgICAgQWN0aXZpdHlOYW1lOiBkYXRhLmFuc3dlcixcbiAgICAgIEV2ZW50VGltZVV0YzogdGhpcy5ub3coKVxuICAgIH0pO1xuICB9O1xuXG4gIEFQSXByb3h5LnByb3RvdHlwZS5maW5pc2hRdWl6UXVlc3Rpb24gPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdGhpcy5jaGFwdGVyLnF1aXoucXVlc3Rpb25zW2RhdGEuaWRdLkVuZFRpbWVVdGMgPSB0aGlzLm5vdygpO1xuICAgIHRoaXMuY2hhcHRlci5xdWl6LnF1ZXN0aW9uc1tkYXRhLmlkXS5GaW5hbFNjb3JlID0gZGF0YS5zY29yZTtcbiAgICByZXR1cm4gdGhpcy5jaGFwdGVyLnF1aXouU2NvcmVzLnB1c2godGhpcy5jaGFwdGVyLnF1aXoucXVlc3Rpb25zW2RhdGEuaWRdKTtcbiAgfTtcblxuICBBUElwcm94eS5wcm90b3R5cGUuc3VibWl0RGF0YSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjaGFwdGVyRGF0YSwgZGF0YTtcbiAgICBjaGFwdGVyRGF0YSA9IHtcbiAgICAgIEVwaXNvZGVOYW1lOiB0aGlzLmNoYXB0ZXIuRXBpc29kZVRpdGxlLFxuICAgICAgQ2hhcHRlck5hbWU6IHRoaXMuY2hhcHRlci5DaGFwdGVyTmFtZSxcbiAgICAgIExlYXJuaW5nU3RhcnRUaW1lVXRjOiB0aGlzLmNoYXB0ZXIuTGVhcm5pbmdTdGFydFRpbWVVdGMsXG4gICAgICBMZWFybmluZ0VuZFRpbWVVdGM6IHRoaXMuY2hhcHRlci5MZWFybmluZ0VuZFRpbWVVdGMsXG4gICAgICBEdXR5UmV2aWV3U3RhcnRUaW1lVXRjOiB0aGlzLmNoYXB0ZXIuRHV0eVJldmlld1N0YXJ0VGltZVV0YyxcbiAgICAgIER1dHlSZXZpZXdFbmRUaW1lVXRjOiB0aGlzLmNoYXB0ZXIuRHV0eVJldmlld0VuZFRpbWVVdGNcbiAgICB9O1xuICAgIGlmICh0aGlzLmNoYXB0ZXIuQWN0aXZpdGllcy5sZW5ndGggPiAwKSB7XG4gICAgICBjaGFwdGVyRGF0YS5BY3Rpdml0aWVzID0gdGhpcy5jaGFwdGVyLkFjdGl2aXRpZXM7XG4gICAgfVxuICAgIGlmICh0aGlzLmNoYXB0ZXIuQ2hvaWNlcy5sZW5ndGggPiAwKSB7XG4gICAgICBjaGFwdGVyRGF0YS5DaG9pY2VzID0gdGhpcy5jaGFwdGVyLkNob2ljZXM7XG4gICAgfVxuICAgIGlmICh0aGlzLmNoYXB0ZXIucXVpeiAhPSBudWxsKSB7XG4gICAgICBjaGFwdGVyRGF0YS5TY29yZXMgPSB0aGlzLmNoYXB0ZXIucXVpei5TY29yZXM7XG4gICAgICBjaGFwdGVyRGF0YS5UZXN0aW5nU3RhcnRUaW1lVXRjID0gdGhpcy5jaGFwdGVyLnF1aXouc3RhcnQ7XG4gICAgICBjaGFwdGVyRGF0YS5UZXN0aW5nRW5kVGltZVV0YyA9IHRoaXMuY2hhcHRlci5xdWl6LmZpbmlzaDtcbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIExlYXJuaW5nQ29udGV4dDoge1xuICAgICAgICBNb2R1bGVJZDogYXJpc3RvdGxlLmdsb2JhbHMuZ2V0KFwidHJhaW5pbmdWZXJzaW9uXCIpLFxuICAgICAgICBNb2R1bGVBdWRpZW5jZTogXCJmYWtlLW1vZHVsZS1hdWRpZW5jZVwiLFxuICAgICAgICBTZXNzaW9uSWQ6IGFyaXN0b3RsZS5nbG9iYWxzLmdldChcInNlc3Npb25LZXlcIiksXG4gICAgICAgIFN0dWRlbnRJZDogYXJpc3RvdGxlLmxtc1Byb3h5LnVzZXJJZCxcbiAgICAgICAgU3R1ZGVudE5hbWU6IGFyaXN0b3RsZS5sbXNQcm94eS51c2VyLFxuICAgICAgICBTdHVkZW50Q2FsbHNpZ246IGFyaXN0b3RsZS5nbG9iYWxzLmdldChcImNhbGxTaWduXCIpXG4gICAgICB9LFxuICAgICAgQ2hhcHRlcnM6IFtjaGFwdGVyRGF0YV1cbiAgICB9O1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIHJldHVybiB0aGlzLnBvc3REYXRhKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgfTtcblxuICBBUElwcm94eS5wcm90b3R5cGUucG9zdERhdGEgPSBmdW5jdGlvbihqc29uRGF0YSkge1xuICAgIHZhciB4aHI7XG4gICAgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgeGhyLm9wZW4oXCJQT1NUXCIsIFwiaHR0cHM6Ly9jaXBkZWZlbmRlcmFwaS5henVyZXdlYnNpdGVzLm5ldDo0NDMvYXBpL0xlYXJuaW5nXCIsIHRydWUpO1xuICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbjsgY2hhcnNldD1VVEYtOCcpO1xuICAgIHhoci5zZW5kKGpzb25EYXRhKTtcbiAgICByZXR1cm4geGhyLm9ubG9hZGVuZCA9IChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJkb25lXCIpO1xuICAgICAgICByZXR1cm4gY29uc29sZS5sb2coYSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpO1xuICB9O1xuXG4gIEFQSXByb3h5LnByb3RvdHlwZS5ub3cgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoKS50b0lTT1N0cmluZygpO1xuICB9O1xuXG4gIEFQSXByb3h5LnByb3RvdHlwZS5tZXRhRGF0YSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMubWV0YSA9IGFyaXN0b3RsZS5nbG9iYWxzLmdldE1ldGFEYXRhKCk7XG4gICAgaWYgKHR5cGVvZiBtZXRhID09PSBcInVuZGVmaW5lZFwiIHx8IG1ldGEgPT09IG51bGwpIHtcbiAgICAgIHRoaXMubWV0YSA9IHtcbiAgICAgICAgY2hhcHRlcnM6IFtdXG4gICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5tZXRhO1xuICB9O1xuXG4gIHJldHVybiBBUElwcm94eTtcblxufSkoKTtcblxuXG4vKlxue1wiTGVhcm5pbmdDb250ZXh0XCI6e1wiTW9kdWxlSWRcIjpcIk1ldGFNeXRoaWMuQ2lwRGVmZW5kZXIudjFcIixcIk1vZHVsZUF1ZGllbmNlXCI6XCJmYWtlLW1vZHVsZS1hdWRpZW5jZVwiLFwiU2Vzc2lvbklkXCI6XCJmYWtlLXNlc3Npb24taWRcIixcIlN0dWRlbnRJZFwiOlwiYWJjZGVmZzEyMzQ1NjdcIixcIlN0dWRlbnROYW1lXCI6XCJSaWNrcywgSnVzdGluXCJ9LFwiQ2hhcHRlcnNcIjpbe1wiRXBpc29kZVRpdGxlXCI6XCJFcGlzb2RlIDFcIixcIkNoYXB0ZXJOYW1lXCI6XCJDaGFwdGVyIDFcIixcIkxlYXJuaW5nU3RhcnRUaW1lVXRjXCI6MTQ1MjU1Nzc5MzQ2NixcIkxlYXJuaW5nRW5kVGltZVV0Y1wiOjE0NTI1NTc4MDgwMzEsXCJEdXR5UmV2aWV3U3RhcnRUaW1lVXRjXCI6MTQ1MjU1NzgwODAzMSxcIkR1dHlSZXZpZXdFbmRUaW1lVXRjXCI6MTQ1MjU1NzgxMTUxOSxcIkFjdGl2aXRpZXNcIjpbe1wiQWN0aXZpdHlOYW1lXCI6XCJDbGljayA6IEFzc2V0IEV4cGxvcmF0aW9uIC0gRmlsaW5nIENhYmluZXRzXCIsXCJFdmVudFRpbWVVdGNcIjoxNDUyNTU3ODAzMzA5fSx7XCJBY3Rpdml0eU5hbWVcIjpcIkNsaWNrIDogQXNzZXQgRXhwbG9yYXRpb24gLSBNYXBib2FyZFwiLFwiRXZlbnRUaW1lVXRjXCI6MTQ1MjU1NzgwNDA4Nn0se1wiQWN0aXZpdHlOYW1lXCI6XCJDbGljayA6IEFzc2V0IEV4cGxvcmF0aW9uIC0gT3BlcmF0b3IgTW9uaXRvcnNcIixcIkV2ZW50VGltZVV0Y1wiOjE0NTI1NTc4MDUwMjB9XX1dfVxuICBMZWFybmluZ1JlY29yZCB7XG4gICAgTGVhcm5pbmdDb250ZXh0IHtcbiAgICAgIE1vZHVsZUlkICAgICAgIDogXCJcIlxuICAgICAgTW9kdWxlQXVkaWVuY2UgOiBcIlwiXG4gICAgICBTZXNzaW9uSWQgICAgICA6IFwiXCJcbiAgICAgIFN0dWRlbnRJZCAgICAgIDogXCJcIlxuICAgICAgU3R1ZGVudE5hbWUgICAgOiBcIlwiXG4gICAgfVxuICAgIENoYXB0ZXJzIDogWyBDSEFQVEVSIF1cbiAgfVxuXG4gIENoYXB0ZXIge1xuICAgIEVwaXNvZGVUaXRsZSAgICAgICAgICAgOiBcIlwiXG4gICAgQ2hhcHRlck5hbWUgICAgICAgICAgICA6IFwiXCJcbiAgICBMZWFybmluZ1N0YXJ0VGltZVV0YyAgIDogREFURSAgLSBTdGFydCBvZiB0aGUgY2hhcHRlciAtPiBkdXRpZXMgc3RhcnRcbiAgICBMZWFybmluZ0VuZFRpbWVVdGMgICAgIDogREFURVxuICAgIER1dHlSZXZpZXdTdGFydFRpbWVVdGMgOiBEQVRFXG4gICAgRHV0eVJldmlld0VuZFRpbWVVdGMgICA6IERBVEVcbiAgICBUZXN0aW5nU3RhcnRUaW1lVXRjICAgIDogREFURVxuICAgIFRlc3RpbmdFbmRUaW1lVXRjICAgICAgOiBEQVRFXG4gICAgQWN0aXZpdGllcyAgICAgICAgICAgICA6IFtBQ1RJVklUWV1cbiAgICBDaG9pY2VzICAgICAgICAgICAgICAgIDogW0NIT0lDRV1cbiAgICBTY29yZXMgICAgICAgICAgICAgICAgIDogW1NDT1JFXVxuICB9XG5cbiAgQWN0aXZpdHkge1xuICAgIEFjdGl2aXR5TmFtZSA6IFwiXCJcbiAgICBFdmVudFRpbWVVdGMgOiBEQVRFXG4gIH1cbiAgQ2hvaWNlIHtcbiAgICBDaG9pY2VOYW1lICAgOiBcIlwiXG4gICAgU2VsZWN0aW9uICAgIDogXCJcIlxuICAgIFN0YXJ0VGltZVV0YyA6IERBVEVcbiAgICBFbmRUaW1lVXRjICAgOiBEQVRFXG4gICAgQWN0aXZpdGllcyAgIDogW0FDVElWSVRZXVxuICB9XG4gIFNjb3JlIHtcbiAgICBRdWVzdGlvbk51bWJlciA6IDFcbiAgICBGaW5hbFNjb3JlICAgICA6IDFcbiAgICBTdGFydFRpbWVVdGMgICA6IERBVEVcbiAgICBFbmRUaW1lVXRjICAgICA6IERBVEVcbiAgICBBY3Rpdml0aWVzICAgICA6IFtBQ1RJVklUWV1cbiAgfVxuICovXG4iLCJ2YXIgQXNzZXRQcmVwbG9hZGVyO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFzc2V0UHJlcGxvYWRlciA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gQXNzZXRQcmVwbG9hZGVyKGRhdGEsIGNhbGxiYWNrLCBwcm9ncmVzc0NhbGxiYWNrKSB7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIHRoaXMucHJvZ3Jlc3NDYWxsYmFjayA9IHByb2dyZXNzQ2FsbGJhY2s7XG4gICAgdGhpcy5wcmVsb2FkQXNzZXRzKGRhdGEpO1xuICB9XG5cbiAgQXNzZXRQcmVwbG9hZGVyLnByb3RvdHlwZS5wcmVsb2FkQXNzZXRzID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciBhc3NldHMsIHByZWxvYWRRdWV1ZSwgcmVnZXg7XG4gICAgYXNzZXRzID0gW107XG4gICAgcmVnZXggPSAvLitcXC4oc3ZnKS87XG4gICAgdGhpcy5sb29rRm9yRmlsZXMoZGF0YSwgYXNzZXRzLCByZWdleCk7XG4gICAgaWYgKGFzc2V0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuY2FsbGJhY2soKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY3JlYXRlanMuU291bmQuYWx0ZXJuYXRlRXh0ZW5zaW9ucyA9IFtcIm1wM1wiLCBcIm00YVwiXTtcbiAgICBwcmVsb2FkUXVldWUgPSBuZXcgY3JlYXRlanMuTG9hZFF1ZXVlKCk7XG4gICAgcHJlbG9hZFF1ZXVlLmluc3RhbGxQbHVnaW4oY3JlYXRlanMuU291bmQpO1xuICAgIGlmICh0aGlzLnByb2dyZXNzQ2FsbGJhY2sgIT0gbnVsbCkge1xuICAgICAgcHJlbG9hZFF1ZXVlLm9uKFwicHJvZ3Jlc3NcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgaWYgKGUubG9hZGVkID4gMSkge1xuICAgICAgICAgICAgZS5sb2FkZWQgPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gX3RoaXMucHJvZ3Jlc3NDYWxsYmFjayhlLmxvYWRlZCk7XG4gICAgICAgIH07XG4gICAgICB9KSh0aGlzKSk7XG4gICAgfVxuICAgIHByZWxvYWRRdWV1ZS5vbihcImNvbXBsZXRlXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMuY2FsbGJhY2soZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICByZXR1cm4gcHJlbG9hZFF1ZXVlLmxvYWRNYW5pZmVzdChhc3NldHMpO1xuICB9O1xuXG4gIEFzc2V0UHJlcGxvYWRlci5wcm90b3R5cGUubG9va0ZvckZpbGVzID0gZnVuY3Rpb24oaXRlbSwgc3RvcmFnZSwgcmVnZXgpIHtcbiAgICB2YXIgY2hpbGQsIGksIGtleSwgbGVuLCByZXN1bHRzLCByZXN1bHRzMSwgdHlwZTtcbiAgICB0eXBlID0gdHlwZW9mIGl0ZW07XG4gICAgaWYgKHR5cGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGlmICgvLm1wM3wubTRhfC5qc29ufC5zdmd8LmpwZ3wuanBlZ3wucG5nLy50ZXN0KGl0ZW0pKSB7XG4gICAgICAgIHJldHVybiBzdG9yYWdlLnB1c2goe1xuICAgICAgICAgIHNyYzogXCJcIiArIChhcmlzdG90bGUuZ2V0QXNzZXRQYXRoKGl0ZW0pKSxcbiAgICAgICAgICBpZDogaXRlbVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW0pKSB7XG4gICAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yIChpID0gMCwgbGVuID0gaXRlbS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgIGNoaWxkID0gaXRlbVtpXTtcbiAgICAgICAgICByZXN1bHRzLnB1c2godGhpcy5sb29rRm9yRmlsZXMoY2hpbGQsIHN0b3JhZ2UsIHJlZ2V4KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRzMSA9IFtdO1xuICAgICAgICBmb3IgKGtleSBpbiBpdGVtKSB7XG4gICAgICAgICAgY2hpbGQgPSBpdGVtW2tleV07XG4gICAgICAgICAgcmVzdWx0czEucHVzaCh0aGlzLmxvb2tGb3JGaWxlcyhjaGlsZCwgc3RvcmFnZSwgcmVnZXgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0czE7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBBc3NldFByZXBsb2FkZXI7XG5cbn0pKCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgZWRnZSwgbXNpZSwgcnYsIHRyaWRlbnQsIHVhLCB2O1xuICB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xuICBtc2llID0gdWEuaW5kZXhPZignTVNJRSAnKTtcbiAgaWYgKG1zaWUgPiAwKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gICAgdiA9IHBhcnNlSW50KHVhLnN1YnN0cmluZyhtc2llICsgNSwgdWEuaW5kZXhPZignLicsIG1zaWUpKSwgMTApO1xuICB9XG4gIHRyaWRlbnQgPSB1YS5pbmRleE9mKCdUcmlkZW50LycpO1xuICBpZiAodHJpZGVudCA+IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgICBydiA9IHVhLmluZGV4T2YoJ3J2OicpO1xuICAgIHYgPSBwYXJzZUludCh1YS5zdWJzdHJpbmcocnYgKyAzLCB1YS5pbmRleE9mKCcuJywgcnYpKSwgMTApO1xuICB9XG4gIGVkZ2UgPSB1YS5pbmRleE9mKCdFZGdlLycpO1xuICBpZiAoZWRnZSA+IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgICB2ID0gcGFyc2VJbnQodWEuc3Vic3RyaW5nKGVkZ2UgKyA1LCB1YS5pbmRleE9mKCcuJywgZWRnZSkpLCAxMCk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcbiIsInZhciBDb21tYW5kZXI7XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tbWFuZGVyID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBDb21tYW5kZXIoKSB7XG4gICAgd2luZG93LmFyaXN0b3RsZS5jb21tYW5kZXIgPSB0aGlzO1xuICB9XG5cbiAgQ29tbWFuZGVyLnByb3RvdHlwZVtcImRvXCJdID0gZnVuY3Rpb24oYWN0aW9uLCBwdWJsaXNoU3luY2hyb25vdXNseSkge1xuICAgIHZhciBpLCBpdGVtLCBsZW4sIHJlc3VsdHM7XG4gICAgaWYgKHB1Ymxpc2hTeW5jaHJvbm91c2x5ID09IG51bGwpIHtcbiAgICAgIHB1Ymxpc2hTeW5jaHJvbm91c2x5ID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KGFjdGlvbikpIHtcbiAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgIGZvciAoaSA9IDAsIGxlbiA9IGFjdGlvbi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpdGVtID0gYWN0aW9uW2ldO1xuICAgICAgICByZXN1bHRzLnB1c2godGhpcy5wdWJsaXNoKGl0ZW0sIHB1Ymxpc2hTeW5jaHJvbm91c2x5KSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMucHVibGlzaChhY3Rpb24sIHB1Ymxpc2hTeW5jaHJvbm91c2x5KTtcbiAgICB9XG4gIH07XG5cbiAgQ29tbWFuZGVyLnByb3RvdHlwZS5wdWJsaXNoID0gZnVuY3Rpb24oYWN0aW9uLCBwdWJsaXNoU3luY2hyb25vdXNseSkge1xuICAgIGlmIChwdWJsaXNoU3luY2hyb25vdXNseSA9PSBudWxsKSB7XG4gICAgICBwdWJsaXNoU3luY2hyb25vdXNseSA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoKGFjdGlvbiAhPSBudWxsID8gYWN0aW9uLmRlbGF5IDogdm9pZCAwKSAhPSBudWxsKSB7XG4gICAgICB0aGlzLnB1Ymxpc2hEZWxheWVkQWN0aW9uKGFjdGlvbik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChwdWJsaXNoU3luY2hyb25vdXNseSkge1xuICAgICAgcmV0dXJuIFB1YlN1Yi5wdWJsaXNoU3luYyhhY3Rpb24uY21kLCBhY3Rpb24uZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBQdWJTdWIucHVibGlzaChhY3Rpb24uY21kLCBhY3Rpb24uZGF0YSk7XG4gICAgfVxuICB9O1xuXG4gIENvbW1hbmRlci5wcm90b3R5cGUucHVibGlzaERlbGF5ZWRBY3Rpb24gPSBmdW5jdGlvbihhY3Rpb24pIHtcbiAgICByZXR1cm4gYXJpc3RvdGxlLnRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gUHViU3ViLnB1Ymxpc2goYWN0aW9uLmNtZCwgYWN0aW9uLmRhdGEpO1xuICAgIH0sIGFjdGlvbi5kZWxheSk7XG4gIH07XG5cbiAgcmV0dXJuIENvbW1hbmRlcjtcblxufSkoKTtcbiIsInZhciBBdWRpb1RyYWNrLCBEZXZUb29scyxcbiAgYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH07XG5cbkF1ZGlvVHJhY2sgPSByZXF1aXJlKCdlcGlzb2RlL2F1ZGlvLXRyYWNrJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGV2VG9vbHMgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIERldlRvb2xzKGlzRGV2TW9kZSkge1xuICAgIHRoaXMuaXNEZXZNb2RlID0gaXNEZXZNb2RlO1xuICAgIHRoaXMudXBkYXRlID0gYmluZCh0aGlzLnVwZGF0ZSwgdGhpcyk7XG4gICAgaWYgKCF0aGlzLmlzRGV2TW9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmluaXRQZXJmb3JtYW5jZVN0YXRzKCk7XG4gIH1cblxuICBEZXZUb29scy5wcm90b3R5cGUuZ28gPSBmdW5jdGlvbihkZXZDb25maWcsIGl0ZW1zKSB7XG4gICAgaWYgKCF0aGlzLmlzRGV2TW9kZSB8fCAoZGV2Q29uZmlnID09IG51bGwpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChkZXZDb25maWcuc2tpcFNsYXRlICE9IG51bGwpIHtcbiAgICAgIHRoaXMuc2tpcFNsYXRlID0gZGV2Q29uZmlnLnNraXBTbGF0ZTtcbiAgICB9XG4gICAgdGhpcy5za2lwKGRldkNvbmZpZywgaXRlbXMpO1xuICAgIHRoaXMucHJldmVudEFuaW1hdGlvbkFzTmVlZGVkKGRldkNvbmZpZywgaXRlbXMpO1xuICAgIHRoaXMuYWRkSW5kZXhlc1RvSXRlbXMoZGV2Q29uZmlnLCBpdGVtcyk7XG4gICAgaWYgKGRldkNvbmZpZy52b2x1bWUgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIEF1ZGlvVHJhY2suaW5pdFNvdW5kU2V0dGluZ3MoZGV2Q29uZmlnLnZvbHVtZSk7XG4gICAgfVxuICB9O1xuXG4gIERldlRvb2xzLnByb3RvdHlwZS5za2lwID0gZnVuY3Rpb24oZGV2Q29uZmlnLCBpdGVtcykge1xuICAgIHZhciBqLCBsZW4sIHJlZiwgcmVzdWx0cywgc2xpZGVJbmRleCwgc3RhcnRJbmRleDtcbiAgICBpZiAoIXRoaXMuaXNEZXZNb2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChkZXZDb25maWcuc3RhcnRJbmRleCAhPSBudWxsKSB7XG4gICAgICBpZiAoZGV2Q29uZmlnLnN0YXJ0SW5kZXggPCAwKSB7XG4gICAgICAgIGRldkNvbmZpZy5zdGFydEluZGV4ID0gaXRlbXMubGVuZ3RoICsgZGV2Q29uZmlnLnN0YXJ0SW5kZXg7XG4gICAgICB9XG4gICAgICBzdGFydEluZGV4ID0gZGV2Q29uZmlnLnN0YXJ0SW5kZXg7XG4gICAgICBpdGVtcy5zcGxpY2UoMCwgZGV2Q29uZmlnLnN0YXJ0SW5kZXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGFydEluZGV4ID0gMDtcbiAgICB9XG4gICAgaWYgKGRldkNvbmZpZy5za2lwICE9IG51bGwpIHtcbiAgICAgIHJlZiA9IGRldkNvbmZpZy5za2lwLnNvcnQoKS5yZXZlcnNlKCk7XG4gICAgICByZXN1bHRzID0gW107XG4gICAgICBmb3IgKGogPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgICAgc2xpZGVJbmRleCA9IHJlZltqXTtcbiAgICAgICAgaWYgKHNsaWRlSW5kZXggPiBzdGFydEluZGV4KSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKGl0ZW1zLnNwbGljZShzbGlkZUluZGV4IC0gc3RhcnRJbmRleCwgMSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdHMucHVzaCh2b2lkIDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG4gIH07XG5cbiAgRGV2VG9vbHMucHJvdG90eXBlLnByZXZlbnRBbmltYXRpb25Bc05lZWRlZCA9IGZ1bmN0aW9uKGRldkNvbmZpZywgaXRlbXMpIHtcbiAgICB2YXIgaSwgaiwgbGVuLCByZWYsIHJlc3VsdHMsIHNsaWRlO1xuICAgIGlmIChkZXZDb25maWcuZG9udEFuaW1hdGUgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZWYgPSBkZXZDb25maWcuZG9udEFuaW1hdGU7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoaSA9IGogPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBqIDwgbGVuOyBpID0gKytqKSB7XG4gICAgICBzbGlkZSA9IHJlZltpXTtcbiAgICAgIHJlc3VsdHMucHVzaCh0aGlzLmFkZFNraXBUb0VuZHMoaXRlbXNbaV0pKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgRGV2VG9vbHMucHJvdG90eXBlLmFkZFNraXBUb0VuZHMgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgaXRlbSwga2V5LCByZXN1bHRzO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGtleSBpbiBvYmopIHtcbiAgICAgIGl0ZW0gPSBvYmpba2V5XTtcbiAgICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICB0aGlzLmFkZFNraXBUb0VuZHMoaXRlbSwgb2JqKTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBpZiAoaXRlbS5tYXRjaCgvLmpzb24vZykpIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2gob2JqLmp1bXBUb0VuZCA9IHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdHMucHVzaCh2b2lkIDApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRzLnB1c2godm9pZCAwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgRGV2VG9vbHMucHJvdG90eXBlLmFkZEluZGV4ZXNUb0l0ZW1zID0gZnVuY3Rpb24oZGV2Q29uZmlnLCBpdGVtcykge1xuICAgIHZhciBjb3VudCwgaXRlbSwgaiwgbGVuLCBudW1TbGlkZXNSZW1vdmVkLCByZXN1bHRzO1xuICAgIG51bVNsaWRlc1JlbW92ZWQgPSBkZXZDb25maWcuc3RhcnRJbmRleCAhPSBudWxsID8gZGV2Q29uZmlnLnN0YXJ0SW5kZXggOiAwO1xuICAgIGNvdW50ID0gMDtcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChqID0gMCwgbGVuID0gaXRlbXMubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgIGl0ZW0gPSBpdGVtc1tqXTtcbiAgICAgIHJlc3VsdHMucHVzaChpdGVtLmluZGV4ID0gbnVtU2xpZGVzUmVtb3ZlZCArIGNvdW50KyspO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBEZXZUb29scy5wcm90b3R5cGUuaW5pdFBlcmZvcm1hbmNlU3RhdHMgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnN0YXRzID0gbmV3IFN0YXRzKCk7XG4gICAgdGhpcy5zdGF0cy5zZXRNb2RlKDApO1xuICAgIHRoaXMuc3RhdHMuZG9tRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgdGhpcy5zdGF0cy5kb21FbGVtZW50LnN0eWxlLmxlZnQgPSAnMHB4JztcbiAgICB0aGlzLnN0YXRzLmRvbUVsZW1lbnQuc3R5bGUudG9wID0gJzBweCc7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnN0YXRzLmRvbUVsZW1lbnQpO1xuICAgIHJldHVybiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGUpO1xuICB9O1xuXG4gIERldlRvb2xzLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnN0YXRzLmVuZCgpO1xuICAgIHRoaXMuc3RhdHMuYmVnaW4oKTtcbiAgICByZXR1cm4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlKTtcbiAgfTtcblxuICByZXR1cm4gRGV2VG9vbHM7XG5cbn0pKCk7XG4iLCJ2YXIgRGljdGlvbmFyeTtcblxubW9kdWxlLmV4cG9ydHMgPSBEaWN0aW9uYXJ5ID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBEaWN0aW9uYXJ5KCkge1xuICAgIGFyaXN0b3RsZS5kaWN0aW9uYXJ5ID0gdGhpcztcbiAgICB0aGlzLnRlcm1zID0ge1xuICAgICAgXCJjYWRldFwiOiAnQ2FkZXQnLFxuICAgICAgXCJjYWRldC1maXJzdC1jbGFzc1wiOiAnQ2FkZXQgRmlyc3QgQ2xhc3MnLFxuICAgICAgXCJ0ZWNobmljYWwtY2FkZXRcIjogXCJUZWNobmljYWwgQ2FkZXRcIixcbiAgICAgIFwiY3liZXItY2FkZXRcIjogXCJDeWJlciBDYWRldFwiLFxuICAgICAgYmFja2dyb3VuZF9wcm9iZTogJ1RoZSBCYWNrZ3JvdW5kIFByb2JlJyxcbiAgICAgIHJpc2tfZGV0ZWN0b3I6ICdUaGUgUmlzayBEZXRlY3RvcicsXG4gICAgICB2b2lnaHRfa2FtcGZmOiAnVm9pZ2h0LUthbXBmZiBBc3Nlc3NvcicsXG4gICAgICBkb3VibGVfZGV1Y2U6ICdEb3VibGUgRGV1Y2UgUHVsdmVyaXplcicsXG4gICAgICBtcl9mdXNpb246ICdNci4gRnVzaW9uJyxcbiAgICAgIGRlbWF0ZXJpYWxpemVyOiAnVGhlIERlLU1hdGVyaWFsaXplcicsXG4gICAgICBidXJuaW5hdG9yOiAnVGhlIEJ1cm5pbmF0b3InLFxuICAgICAgZ3JlYXRfd2FsbDogJ1RoZSBHcmVhdCBXYWxsJyxcbiAgICAgIGdhdGVkOiAnR2F0ZWQgQ29tbXVuaXR5JyxcbiAgICAgIFwiZ2VuZXJhdGlvbi1wbGFudFwiOiAnR2VuZXJhdGlvbiBQbGFudCcsXG4gICAgICBzdWJzdGF0aW9uOiAnU3Vic3RhdGlvbicsXG4gICAgICBcImNvbnRyb2wtY2VudGVyXCI6ICdDb250cm9sIENlbnRlcicsXG4gICAgICBicml0X2JlYWNvbjogJ0JyaXQgQmVhY29uLCBTY2hvbGFyLiBHZW50bGVtYW4uIEJvdCBIdW50ZXIuJyxcbiAgICAgIHNwZWVkZXI6ICdTcGVlZGVyIFdpdGggVG93IENhYmxlcycsXG4gICAgICBvcmJpdGFsX3N0cmlrZTogJ09yYml0YWwgS2luZXRpYyBTdHJpa2UnLFxuICAgICAgXCJjYXJkLXNjYW5uZXJcIjogJ0NhcmQgR3VhcmQgWFQnLFxuICAgICAgXCJoYWwtc2Nhbm5lclwiOiAnSEFMIDkwMDAgRXllIFNjYW5uZXInLFxuICAgICAgXCJrcmFrZW4tc2Nhbm5lclwiOiAnV2F0ZXJ5IEdyYXZlIEtyYWtlbiBTZW5zb3InLFxuICAgICAgXCJkdWN0LXRhcGVcIjogJ1BvcnQgRHVjdCBUYXBlJyxcbiAgICAgIFwia3JhZ2xlXCI6ICdUaGUgS3JhZ2xlJyxcbiAgICAgIFwidW1waXJlXCI6ICdQb3J0IFVtcGlyZScsXG4gICAgICBsb2dfYm9vazogJ0d1ZXN0IExvZyBCb29rJyxcbiAgICAgIGVzY29ydF9sZWFzaDogJ1wiUFNQIEJ1ZGR5XCIsIEVzY29ydCBMZWFzaCcsXG4gICAgICB0cmFjdG9yX2JlYW06ICdWaXNpdG9yIFRyYWN0b3IgQmVhbSdcbiAgICB9O1xuICB9XG5cbiAgRGljdGlvbmFyeS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24odGVybSkge1xuICAgIGlmICh0aGlzLnRlcm1zW3Rlcm1dICE9IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLnRlcm1zW3Rlcm1dO1xuICAgIH1cbiAgICByZXR1cm4gYXJpc3RvdGxlW1widGhyb3dcIl0oXCJUcmllZCB0byB1c2UgYW4gdW5rbm93biB0ZXJtOiBgXCIgKyB0ZXJtICsgXCJgXCIpO1xuICB9O1xuXG4gIHJldHVybiBEaWN0aW9uYXJ5O1xuXG59KSgpO1xuIiwidmFyIEVwaXNvZGVMb2FkZXI7XG5cbm1vZHVsZS5leHBvcnRzID0gRXBpc29kZUxvYWRlciA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gRXBpc29kZUxvYWRlcihjYWxsYmFjaykge1xuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB0aGlzLmxvYWRDb25maWdEYXRhKCk7XG4gIH1cblxuICBFcGlzb2RlTG9hZGVyLnByb3RvdHlwZS5sb2FkQ29uZmlnRGF0YSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmxvYWRKc29uKFwibG9jYWwvY29uZmlnLmpzb25cIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oanNvbikge1xuICAgICAgICB2YXIga2V5LCByZWYsIHZhbDtcbiAgICAgICAgcmVmID0gSlNPTi5wYXJzZShqc29uKTtcbiAgICAgICAgZm9yIChrZXkgaW4gcmVmKSB7XG4gICAgICAgICAgdmFsID0gcmVmW2tleV07XG4gICAgICAgICAgYXJpc3RvdGxlLmdsb2JhbHMuc2V0KGtleSwgdmFsLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzLmxvYWRFcGlzb2RlKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgfTtcblxuICBFcGlzb2RlTG9hZGVyLnByb3RvdHlwZS5sb2FkRXBpc29kZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmxvYWRKc29uKGFyaXN0b3RsZS5nZXRBc3NldFBhdGgoXCJtYXAuanNvblwiKSwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oanNvbikge1xuICAgICAgICByZXR1cm4gX3RoaXMuY2FsbGJhY2soSlNPTi5wYXJzZShqc29uKSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgfTtcblxuICBFcGlzb2RlTG9hZGVyLnByb3RvdHlwZS5sb2FkSnNvbiA9IGZ1bmN0aW9uKHBhdGgsIG9uQ29tcGxldGUpIHtcbiAgICB2YXIgeG9iajtcbiAgICB4b2JqID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgeG9iai5vdmVycmlkZU1pbWVUeXBlKCdhcHBsaWNhdGlvbi9qc29uJyk7XG4gICAgeG9iai5vcGVuKCdHRVQnLCBwYXRoLCB0cnVlKTtcbiAgICB4b2JqLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoeG9iai5yZWFkeVN0YXRlID09PSA0ICYmIHhvYmouc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICByZXR1cm4gb25Db21wbGV0ZSh4b2JqLnJlc3BvbnNlVGV4dCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSkodGhpcyk7XG4gICAgcmV0dXJuIHhvYmouc2VuZChudWxsKTtcbiAgfTtcblxuICByZXR1cm4gRXBpc29kZUxvYWRlcjtcblxufSkoKTtcbiIsInZhciBHbG9iYWxWYXJzO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEdsb2JhbFZhcnMgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIEdsb2JhbFZhcnMoKSB7XG4gICAgdGhpcy52YXJzID0ge307XG4gICAgYXJpc3RvdGxlLmdsb2JhbHMgPSB0aGlzO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ3NldHZhcnMnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihhLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5zZXRNYW55KGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgUHViU3ViLnN1YnNjcmliZSgnc2Vzc2lvbmtleS5hZGQnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihhLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5nZW5lcmF0ZVNlc3Npb25LZXkoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9XG5cbiAgR2xvYmFsVmFycy5wcm90b3R5cGUuc2V0TWFueSA9IGZ1bmN0aW9uKHZhcnMpIHtcbiAgICB2YXIga2V5LCB2YWw7XG4gICAgZm9yIChrZXkgaW4gdmFycykge1xuICAgICAgdmFsID0gdmFyc1trZXldO1xuICAgICAgdGhpcy52YXJzW2tleV0gPSB2YWw7XG4gICAgfVxuICAgIHJldHVybiBQdWJTdWIucHVibGlzaCgnc3RhdGUuc2F2ZScpO1xuICB9O1xuXG4gIEdsb2JhbFZhcnMucHJvdG90eXBlLmdldE1ldGFEYXRhID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMudmFycy5tZXRhO1xuICB9O1xuXG4gIEdsb2JhbFZhcnMucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uKGtleSwgdmFsLCBzYXZlU3RhdGUpIHtcbiAgICBpZiAoc2F2ZVN0YXRlID09IG51bGwpIHtcbiAgICAgIHNhdmVTdGF0ZSA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMudmFyc1trZXldID0gdmFsO1xuICAgIGlmIChzYXZlU3RhdGUpIHtcbiAgICAgIHJldHVybiBQdWJTdWIucHVibGlzaCgnc3RhdGUuc2F2ZScpO1xuICAgIH1cbiAgfTtcblxuICBHbG9iYWxWYXJzLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihzdHIsIHRocm93RXJyb3JzKSB7XG4gICAgaWYgKHRocm93RXJyb3JzID09IG51bGwpIHtcbiAgICAgIHRocm93RXJyb3JzID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMudmFyc1tzdHJdICE9IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhcnNbc3RyXTtcbiAgICB9XG4gICAgaWYgKHRocm93RXJyb3JzKSB7XG4gICAgICBhcmlzdG90bGVbXCJ0aHJvd1wiXShcIlRyaWVkIHRvIGFjY2VzcyBnbG9iYWwgdmFyaWFibGUgYFwiICsgc3RyICsgXCJgLCBidXQgaXQgZG9lc24ndCBleGlzdHNcIiwgdHJ1ZSk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIEdsb2JhbFZhcnMucHJvdG90eXBlLmdlbmVyYXRlU2Vzc2lvbktleSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmdldCgnc2Vzc2lvbktleScsIGZhbHNlKSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXQoXCJzZXNzaW9uS2V5XCIsIHRoaXMucmFuZG9tTGV0dGVyKCkgKyB0aGlzLnJhbmRvbUxldHRlcigpICsgdGhpcy5yYW5kb21MZXR0ZXIoKSArIHRoaXMucmFuZG9tTGV0dGVyKCkgKyAobmV3IERhdGUoKS5nZXRUaW1lKCkgKyBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAyMzQ1NTQzMikpKTtcbiAgICB9XG4gIH07XG5cbiAgR2xvYmFsVmFycy5wcm90b3R5cGUucmFuZG9tTGV0dGVyID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxldHRlcnM7XG4gICAgbGV0dGVycyA9IFsnYScsICdiJywgJ2MnLCAnZCcsICdlJywgJ2YnLCAnZycsICdoJywgJ2knLCAnaiddO1xuICAgIHJldHVybiBsZXR0ZXJzW01hdGguZmxvb3IobGV0dGVycy5sZW5ndGggKiBNYXRoLnJhbmRvbSgpKV07XG4gIH07XG5cbiAgcmV0dXJuIEdsb2JhbFZhcnM7XG5cbn0pKCk7XG4iLCJ2YXIgTE1TUHJveHk7XG5cbm1vZHVsZS5leHBvcnRzID0gTE1TUHJveHkgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIExNU1Byb3h5KGlzTG9jYWwpIHtcbiAgICBpZiAoaXNMb2NhbCkge1xuICAgICAgdGhpcy5pbml0U2Nvcm1TdHVicygpO1xuICAgIH1cbiAgICBhcmlzdG90bGUubG1zUHJveHkgPSB0aGlzO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ3N0YXRlLnNhdmUnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5zYXZlU3RhdGUoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ3N0YXRlLmxvYWQnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5sb2FkU3RhdGUoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ3N0YXRlLnJlaHlkcmF0ZScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnJlaHlkcmF0ZSgpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgUHViU3ViLnN1YnNjcmliZSgnc2xpZGUuYWN0aXZhdGVkJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuc2F2ZVN0YXRlKGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH1cblxuICBMTVNQcm94eS5wcm90b3R5cGUuYmVnaW4gPSBmdW5jdGlvbihjYikge1xuICAgIHZhciBzdGF0ZURhdGE7XG4gICAgaWYgKGVsYlNjb3JtLmluaXRDb3Vyc2UoKSkge1xuICAgICAgdGhpcy5sb2FkU3RhdGUoKTtcbiAgICAgIHRoaXMudXNlciA9IGVsYlNjb3JtLkdldFVzZXJOYW1lKCk7XG4gICAgICB0aGlzLnVzZXJJZCA9IGVsYlNjb3JtLkdldFVzZXJJRCgpO1xuICAgICAgc3RhdGVEYXRhID0gZWxiU2Nvcm0uR2V0UmVzdW1lRGF0YSgpO1xuICAgICAgdGhpcy5jcmVhdGVGb3JtYXR0ZWROYW1lKCk7XG4gICAgICBpZiAoc3RhdGVEYXRhICE9IG51bGwpIHtcbiAgICAgICAgYXJpc3RvdGxlLmdsb2JhbHMudmFycyA9IHN0YXRlRGF0YS5nbG9iYWxWYXJzO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNiKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcImNvdWxkbid0IHN0YXJ0IHRoZSBjb3Vyc2VcIik7XG4gICAgfVxuICB9O1xuXG4gIExNU1Byb3h5LnByb3RvdHlwZS5sb2FkU3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zdG9yZSA9IGVsYlNjb3JtLkdldFJlc3VtZURhdGEoKTtcbiAgfTtcblxuICBMTVNQcm94eS5wcm90b3R5cGUucmVoeWRyYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuc3RvcmUgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gYXJpc3RvdGxlLmVwaXNvZGUuZ290b0xvY2F0aW9uQnlUaXRsZSh0aGlzLnN0b3JlLmxvY2F0aW9uLnNsaWRlKTtcbiAgfTtcblxuICBMTVNQcm94eS5wcm90b3R5cGUuc2F2ZVN0YXRlID0gZnVuY3Rpb24oY3VycmVudFNsaWRlKSB7XG4gICAgdGhpcy5zdG9yZSA9IHt9O1xuICAgIHRoaXMuc3RvcmUuZ2xvYmFsVmFycyA9IGFyaXN0b3RsZS5nbG9iYWxzLnZhcnM7XG4gICAgdGhpcy5zdG9yZS5sYXllclN0YXRlID0gYXJpc3RvdGxlLm1vdmllLmRlaHlkcmF0ZUxheWVyU3RhdGUoKTtcbiAgICBpZiAoYXJpc3RvdGxlLmVwaXNvZGUgIT0gbnVsbCkge1xuICAgICAgdGhpcy5zdG9yZS5sb2NhdGlvbiA9IHtcbiAgICAgICAgZXBpc29kZU51bTogYXJpc3RvdGxlLmVwaXNvZGUuZXBpc29kZU51bSxcbiAgICAgICAgc2xpZGU6IGN1cnJlbnRTbGlkZVxuICAgICAgfTtcbiAgICAgIHJldHVybiBlbGJTY29ybS5TZXRSZXN1bWVEYXRhKHRoaXMuc3RvcmUpO1xuICAgIH1cbiAgfTtcblxuICBMTVNQcm94eS5wcm90b3R5cGUuY29tcGxldGVFcGlzb2RlID0gZnVuY3Rpb24obmV3RXBpc29kZU51bSkge1xuICAgIHRoaXMuc3RvcmUgPSB0aGlzLnN0b3JlICE9IG51bGwgPyB0aGlzLnN0b3JlIDoge307XG4gICAgdGhpcy5zdG9yZS5sb2NhdGlvbiA9IHtcbiAgICAgIGVwaXNvZGVOdW06IG5ld0VwaXNvZGVOdW1cbiAgICB9O1xuICAgIHJldHVybiBlbGJTY29ybS5TZXRSZXN1bWVEYXRhKHRoaXMuc3RvcmUpO1xuICB9O1xuXG4gIExNU1Byb3h5LnByb3RvdHlwZS5jcmVhdGVGb3JtYXR0ZWROYW1lID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHg7XG4gICAgeCA9IHRoaXMudXNlci5zcGxpdCgnLCcpO1xuICAgIHJldHVybiB0aGlzLm5hbWUgPSB4WzFdICsgXCIgXCIgKyB4WzBdO1xuICB9O1xuXG4gIExNU1Byb3h5LnByb3RvdHlwZS5jb21wbGV0ZUNvdXJzZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBlbGJTY29ybS5TZXRDb21wbGV0ZSgpO1xuICB9O1xuXG4gIExNU1Byb3h5LnByb3RvdHlwZS5pbml0U2Nvcm1TdHVicyA9IGZ1bmN0aW9uKCkge1xuICAgIHdpbmRvdy5lbGJTY29ybSA9IHt9O1xuICAgIGVsYlNjb3JtLmluaXRDb3Vyc2UgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgZWxiU2Nvcm0uR2V0VXNlck5hbWUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBcIlJpY2tzLCBKdXN0aW5cIjtcbiAgICB9O1xuICAgIGVsYlNjb3JtLkdldFVzZXJJRCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIFwiYWJjZGVmZzEyMzQ1NjdcIjtcbiAgICB9O1xuICAgIGVsYlNjb3JtLkdldENvbXBhbk5hbWUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBcIkFyaXpvbmEgUHVibGljIFdvcmtzXCI7XG4gICAgfTtcbiAgICBlbGJTY29ybS5TZXRSZXN1bWVEYXRhID0gZnVuY3Rpb24oZGF0YSkge1xuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY3VycmVudFN0YXRlXCIsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICB9O1xuICAgIGVsYlNjb3JtLkdldFJlc3VtZURhdGEgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudFN0YXRlXCIpKTtcbiAgICB9O1xuICAgIHJldHVybiBlbGJTY29ybS5TZXRDb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFwiY291cnNlIGlzIGNvbXBsZXRlXCIpO1xuICAgIH07XG4gIH07XG5cbiAgcmV0dXJuIExNU1Byb3h5O1xuXG59KSgpO1xuIiwidmFyIExvZ2dlcixcbiAgYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH07XG5cbm1vZHVsZS5leHBvcnRzID0gTG9nZ2VyID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBMb2dnZXIoJGVsLCBpc0Rldk1vZGUpIHtcbiAgICB0aGlzW1widGhyb3dcIl0gPSBiaW5kKHRoaXNbXCJ0aHJvd1wiXSwgdGhpcyk7XG4gICAgdGhpcy5sb2cgPSBiaW5kKHRoaXMubG9nLCB0aGlzKTtcbiAgICB2YXIgJG5vZGU7XG4gICAgJG5vZGUgPSAkKGphZGVUZW1wbGF0ZVsnbWlzYy9sb2dnZXInXSh7fSkpO1xuICAgICRlbC5hcHBlbmQoJG5vZGUpO1xuICAgIHRoaXMuJGxvZ05vdGlmeWVyID0gJCgnLm1lc3NhZ2UnLCAkbm9kZSk7XG4gICAgdGhpcy4kZXJyb3JOb3RpZnllciA9ICQoJy5lcnJvcicsICRub2RlKTtcbiAgICB0aGlzLiRsb2dOb3RpZnllci5vbignY2xpY2snLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmhpZGVMb2dOb3RpZmllcigpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgdGhpcy4kZXJyb3JOb3RpZnllci5vbignY2xpY2snLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmhpZGVFcnJvck5vdGlmaWVyKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBhcmlzdG90bGUubG9nID0gdGhpcy5sb2c7XG4gICAgYXJpc3RvdGxlW1widGhyb3dcIl0gPSB0aGlzW1widGhyb3dcIl07XG4gICAgdGhpcy5oaWRlTG9nTm90aWZpZXIoKTtcbiAgICB0aGlzLmhpZGVFcnJvck5vdGlmaWVyKCk7XG4gICAgaWYgKCFpc0Rldk1vZGUpIHtcbiAgICAgICRub2RlLmNzcyh7XG4gICAgICAgIGRpc3BsYXk6IFwibm9uZVwiXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBMb2dnZXIucHJvdG90eXBlLmxvZyA9IGZ1bmN0aW9uKG1zZykge1xuICAgIHRoaXMuc2hvd0xvZ05vdGlmaWVyKCk7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKFwiJWNcIiArIG1zZywgXCJjb2xvcjojMGIxNTI0OyBiYWNrZ3JvdW5kOiNiMGQ5ZTZcIik7XG4gIH07XG5cbiAgTG9nZ2VyLnByb3RvdHlwZVtcInRocm93XCJdID0gZnVuY3Rpb24obXNnLCBzaG93VHJhY2UpIHtcbiAgICBpZiAoc2hvd1RyYWNlID09IG51bGwpIHtcbiAgICAgIHNob3dUcmFjZSA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLnNob3dFcnJvck5vdGlmaWVyKCk7XG4gICAgaWYgKHNob3dUcmFjZSkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJcIiArIG1zZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcIiVjXCIgKyBtc2csIFwiY29sb3I6IzNkMDAwMDsgYmFja2dyb3VuZDojZTZiMGMwXCIpO1xuICAgIH1cbiAgfTtcblxuICBMb2dnZXIucHJvdG90eXBlLmhpZGVMb2dOb3RpZmllciA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRsb2dOb3RpZnllci5jc3Moe1xuICAgICAgZGlzcGxheTogXCJub25lXCJcbiAgICB9KTtcbiAgfTtcblxuICBMb2dnZXIucHJvdG90eXBlLmhpZGVFcnJvck5vdGlmaWVyID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJGVycm9yTm90aWZ5ZXIuY3NzKHtcbiAgICAgIGRpc3BsYXk6IFwibm9uZVwiXG4gICAgfSk7XG4gIH07XG5cbiAgTG9nZ2VyLnByb3RvdHlwZS5zaG93TG9nTm90aWZpZXIgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kbG9nTm90aWZ5ZXIuY3NzKHtcbiAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIlxuICAgIH0pO1xuICB9O1xuXG4gIExvZ2dlci5wcm90b3R5cGUuc2hvd0Vycm9yTm90aWZpZXIgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kZXJyb3JOb3RpZnllci5jc3Moe1xuICAgICAgZGlzcGxheTogXCJibG9ja1wiXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIExvZ2dlcjtcblxufSkoKTtcbiIsInZhciBQYXJzZXIsXG4gIGJpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcnNlciA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gUGFyc2VyKCkge1xuICAgIHRoaXMuZ2V0QXNzZXRQYXRoID0gYmluZCh0aGlzLmdldEFzc2V0UGF0aCwgdGhpcyk7XG4gICAgdGhpcy5wYXJzZU9iamVjdCA9IGJpbmQodGhpcy5wYXJzZU9iamVjdCwgdGhpcyk7XG4gICAgdGhpcy5pc1ZhcmlhYmxlID0gYmluZCh0aGlzLmlzVmFyaWFibGUsIHRoaXMpO1xuICAgIHRoaXMucGFyc2VTdHJpbmcgPSBiaW5kKHRoaXMucGFyc2VTdHJpbmcsIHRoaXMpO1xuICAgIHRoaXMucGFyc2VBbnkgPSBiaW5kKHRoaXMucGFyc2VBbnksIHRoaXMpO1xuICAgIHdpbmRvdy5wYXJzZSA9IHRoaXMucGFyc2VBbnk7XG4gICAgd2luZG93LnBPYmogPSB0aGlzLnBhcnNlT2JqZWN0O1xuICAgIGFyaXN0b3RsZS5nZXRBc3NldFBhdGggPSB0aGlzLmdldEFzc2V0UGF0aDtcbiAgfVxuXG4gIFBhcnNlci5wcm90b3R5cGUucGFyc2VBbnkgPSBmdW5jdGlvbihpdGVtKSB7XG4gICAgaWYgKHR5cGVvZiBpdGVtID09PSBcInN0cmluZ1wiKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYXJzZVN0cmluZyhpdGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMucGFyc2VPYmplY3QoaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIFBhcnNlci5wcm90b3R5cGUucGFyc2VTdHJpbmcgPSBmdW5jdGlvbihzdHIpIHtcbiAgICBpZiAodGhpcy5pc1ZhcmlhYmxlKHN0cikpIHtcbiAgICAgIHJldHVybiBhcmlzdG90bGUuZ2xvYmFscy5nZXQoc3RyLnN1YnN0cigxKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICB9O1xuXG4gIFBhcnNlci5wcm90b3R5cGUuaXNWYXJpYWJsZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBzdHIuY2hhckF0KDApID09PSBcIiRcIjtcbiAgfTtcblxuICBQYXJzZXIucHJvdG90eXBlLnBhcnNlT2JqZWN0ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIGl0ZW0sIGtleSwgcmVzdWx0cztcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChrZXkgaW4gb2JqKSB7XG4gICAgICBpdGVtID0gb2JqW2tleV07XG4gICAgICBpZiAodHlwZW9mIGl0ZW0gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgb2JqW2tleV0gPSB0aGlzLnBhcnNlU3RyaW5nKGl0ZW0pO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBpdGVtID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLnBhcnNlT2JqZWN0KGl0ZW0pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdHMucHVzaCh2b2lkIDApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBQYXJzZXIucHJvdG90eXBlLmdldEFzc2V0UGF0aCA9IGZ1bmN0aW9uKGFzc2V0KSB7XG4gICAgdmFyIGNvbnRlbnREaXIsIHBhdGhJZDtcbiAgICBpZiAoYXNzZXQgPT09IFwibWFwLmpzb25cIikge1xuICAgICAgY29udGVudERpciA9IFwiXCI7XG4gICAgfSBlbHNlIGlmICgvLm1wM3wubTRhLy50ZXN0KGFzc2V0KSkge1xuICAgICAgY29udGVudERpciA9IFwic291bmRzL1wiO1xuICAgIH0gZWxzZSBpZiAoLy5qc29uLy50ZXN0KGFzc2V0KSkge1xuICAgICAgY29udGVudERpciA9IFwiYW5pbWF0aW9ucy9cIjtcbiAgICB9IGVsc2UgaWYgKC8uc3ZnfC5qcGd8LmpwZWd8LnBuZ3wubXA0Ly50ZXN0KGFzc2V0KSkge1xuICAgICAgY29udGVudERpciA9IFwiYXNzZXRzL1wiO1xuICAgIH1cbiAgICBpZiAoYXNzZXQuY2hhckF0KDApID09PSBcIn5cIikge1xuICAgICAgcGF0aElkID0gYXNzZXQuc3Vic3RyKDEsIDEpO1xuICAgICAgYXNzZXQgPSBhc3NldC5zdWJzdHIoMyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBhdGhJZCA9IGFyaXN0b3RsZS5lcGlzb2RlTnVtO1xuICAgIH1cbiAgICBpZiAocGF0aElkID09PSBcImdcIikge1xuICAgICAgcmV0dXJuIGFyaXN0b3RsZS5lcGlzb2Rlc0RpciArIFwiL2dsb2JhbC9cIiArIGNvbnRlbnREaXIgKyBhc3NldDtcbiAgICB9IGVsc2UgaWYgKHBhdGhJZCA9PT0gXCJsXCIpIHtcbiAgICAgIHJldHVybiBhcmlzdG90bGUubG9jYWxEaXIgKyBcIi9cIiArIGFzc2V0O1xuICAgIH0gZWxzZSBpZiAoTnVtYmVyKHBhdGhJZCkgIT09IE5hTikge1xuICAgICAgcmV0dXJuIGFyaXN0b3RsZS5lcGlzb2Rlc0RpciArIFwiL2VwaXNvZGVcIiArIHBhdGhJZCArIFwiL1wiICsgY29udGVudERpciArIGFzc2V0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gYXJpc3RvdGxlW1widGhyb3dcIl0oXCJjb3VsZG4ndCB1bmRlcnN0YW5kIHRoZSBwYXRoOiBcIiArIGFzc2V0LCB0cnVlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFBhcnNlcjtcblxufSkoKTtcbiIsInZhciBQYXVzYWJsZURlbGF5cywgVGltZXIsXG4gIGJpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBhdXNhYmxlRGVsYXlzID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBQYXVzYWJsZURlbGF5cygpIHtcbiAgICB0aGlzLmNyZWF0ZVRpbWVvdXQgPSBiaW5kKHRoaXMuY3JlYXRlVGltZW91dCwgdGhpcyk7XG4gICAgdGhpcy5jb3VudCA9IDA7XG4gICAgdGhpcy50aW1lcnMgPSB7fTtcbiAgICBhcmlzdG90bGUudGltZW91dCA9IHRoaXMuY3JlYXRlVGltZW91dDtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCd0aW1lci5kZXN0cm95JywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gZGVsZXRlIF90aGlzLnRpbWVyc1tkYXRhXTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ3RpbWVycy5wYXVzZScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnBhdXNlVGltZXJzKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCd0aW1lcnMucmVzdW1lJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMucmVzdW1lVGltZXJzKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgfVxuXG4gIFBhdXNhYmxlRGVsYXlzLnByb3RvdHlwZS5wYXVzZVRpbWVycyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBrZXksIHJlZiwgcmVzdWx0cywgdGltZXI7XG4gICAgcmVmID0gdGhpcy50aW1lcnM7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoa2V5IGluIHJlZikge1xuICAgICAgdGltZXIgPSByZWZba2V5XTtcbiAgICAgIHJlc3VsdHMucHVzaCh0aW1lci5wYXVzZSgpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgUGF1c2FibGVEZWxheXMucHJvdG90eXBlLnJlc3VtZVRpbWVycyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBrZXksIHJlZiwgcmVzdWx0cywgdGltZXI7XG4gICAgcmVmID0gdGhpcy50aW1lcnM7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoa2V5IGluIHJlZikge1xuICAgICAgdGltZXIgPSByZWZba2V5XTtcbiAgICAgIHJlc3VsdHMucHVzaCh0aW1lci5zdGFydCgpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgUGF1c2FibGVEZWxheXMucHJvdG90eXBlLmNyZWF0ZVRpbWVvdXQgPSBmdW5jdGlvbihjYiwgZGVsYXkpIHtcbiAgICB2YXIgaWQ7XG4gICAgaWQgPSBcInRpbWVcIiArICh0aGlzLmNvdW50KyspO1xuICAgIHRoaXMudGltZXJzW2lkXSA9IG5ldyBUaW1lcihjYiwgZGVsYXksIGlkKTtcbiAgICByZXR1cm4gdGhpcy50aW1lcnNbaWRdLnN0YXJ0KCk7XG4gIH07XG5cbiAgcmV0dXJuIFBhdXNhYmxlRGVsYXlzO1xuXG59KSgpO1xuXG5UaW1lciA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gVGltZXIoY2IxLCBkZWxheSwgaWQxKSB7XG4gICAgdGhpcy5jYiA9IGNiMTtcbiAgICB0aGlzLmlkID0gaWQxO1xuICAgIHRoaXMucmVtYWluaW5nID0gZGVsYXk7XG4gIH1cblxuICBUaW1lci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xuICAgIHRoaXMuc3RhcnRlZCA9IG5ldyBEYXRlO1xuICAgIHJldHVybiB0aGlzLnJlZiA9IHNldFRpbWVvdXQoKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIF90aGlzLmNiKCk7XG4gICAgICAgIHJldHVybiBQdWJTdWIucHVibGlzaCgndGltZXIuZGVzdHJveScsIF90aGlzLmlkKTtcbiAgICAgIH07XG4gICAgfSkodGhpcyksIHRoaXMucmVtYWluaW5nKTtcbiAgfTtcblxuICBUaW1lci5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5yZWYpO1xuICAgIHJldHVybiB0aGlzLnJlbWFpbmluZyAtPSBuZXcgRGF0ZSAtIHRoaXMuc3RhcnRlZDtcbiAgfTtcblxuICBUaW1lci5wcm90b3R5cGUuZ2V0VGltZUxlZnQgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5ydW5uaW5nKSB7XG4gICAgICB0aGlzLnBhdXNlKCk7XG4gICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnJlbWFpbmluZztcbiAgfTtcblxuICBUaW1lci5wcm90b3R5cGUuZ2V0U3RhdGVSdW5uaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucnVubmluZztcbiAgfTtcblxuICByZXR1cm4gVGltZXI7XG5cbn0pKCk7XG4iLCJ2YXIgQXVkaW9UcmFjaywgU291bmRGWDtcblxuQXVkaW9UcmFjayA9IHJlcXVpcmUoJ2VwaXNvZGUvYXVkaW8tdHJhY2snKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTb3VuZEZYID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBTb3VuZEZYKCkge1xuICAgIHRoaXMuY291bnQgPSAwO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ3Zjci5wbGF5JywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMudmNyUGxheSgpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgUHViU3ViLnN1YnNjcmliZSgndmNyLnBhdXNlJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMudmNyUGF1c2UoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ3Zjci5yZXBsYXknLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy52Y3JSZXBsYXkoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ3NsaWRlcy5jaGFuZ2luZycsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmZsdXNoU2Z4U3RvcmUoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ3NmeC5hZGQnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5wYXJzZVNGWChkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ3BsYXlzb3VuZCcsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnBsYXlTb3VuZChkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9XG5cbiAgU291bmRGWC5wcm90b3R5cGUudmNyUGF1c2UgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIga2V5LCByZWYsIHJlc3VsdHMsIHNmeDtcbiAgICByZWYgPSB0aGlzLnNmeDtcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChrZXkgaW4gcmVmKSB7XG4gICAgICBzZnggPSByZWZba2V5XTtcbiAgICAgIHJlc3VsdHMucHVzaChzZngudHJhY2suc291bmQucGF1c2VkID0gdHJ1ZSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIFNvdW5kRlgucHJvdG90eXBlLnZjclBsYXkgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIga2V5LCByZWYsIHJlc3VsdHMsIHNmeDtcbiAgICByZWYgPSB0aGlzLnNmeDtcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChrZXkgaW4gcmVmKSB7XG4gICAgICBzZnggPSByZWZba2V5XTtcbiAgICAgIHJlc3VsdHMucHVzaChzZngudHJhY2suc291bmQucGF1c2VkID0gZmFsc2UpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBTb3VuZEZYLnByb3RvdHlwZS52Y3JSZXBsYXkgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXIsIGtleSwgcmVmLCBzZng7XG4gICAgYXIgPSBbXTtcbiAgICByZWYgPSB0aGlzLnNmeDtcbiAgICBmb3IgKGtleSBpbiByZWYpIHtcbiAgICAgIHNmeCA9IHJlZltrZXldO1xuICAgICAgYXIucHVzaChzZnguZGF0YSk7XG4gICAgfVxuICAgIHRoaXMuZmx1c2hTZnhTdG9yZSgpO1xuICAgIHJldHVybiB0aGlzLnBhcnNlU0ZYKGFyKTtcbiAgfTtcblxuICBTb3VuZEZYLnByb3RvdHlwZS5mbHVzaFNmeFN0b3JlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGtleSwgcmVmLCBzZng7XG4gICAgcmVmID0gdGhpcy5zZng7XG4gICAgZm9yIChrZXkgaW4gcmVmKSB7XG4gICAgICBzZnggPSByZWZba2V5XTtcbiAgICAgIGlmICghc2Z4LnRyYWNrLmlzRGVhZCkge1xuICAgICAgICBzZngudHJhY2suZGVzdHJveSgpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zZnggPSB7fTtcbiAgfTtcblxuICBTb3VuZEZYLnByb3RvdHlwZS5wYXJzZVNGWCA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2YXIgZngsIGksIGxlbiwgcmVzdWx0cztcbiAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgZm9yIChpID0gMCwgbGVuID0gZGF0YS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBmeCA9IGRhdGFbaV07XG4gICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLmFkZFNvdW5kRWZmZWN0KGZ4KSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuYWRkU291bmRFZmZlY3QoZGF0YSk7XG4gICAgfVxuICB9O1xuXG4gIFNvdW5kRlgucHJvdG90eXBlLmFkZFNvdW5kRWZmZWN0ID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIGlmIChkYXRhLmRlbGF5ICE9IG51bGwpIHtcbiAgICAgIHJldHVybiBhcmlzdG90bGUudGltZW91dCgoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5wbGF5U291bmQoZGF0YSwgdHJ1ZSk7XG4gICAgICAgIH07XG4gICAgICB9KSh0aGlzKSwgZGF0YS5kZWxheSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnBsYXlTb3VuZChkYXRhKTtcbiAgICB9XG4gIH07XG5cbiAgU291bmRGWC5wcm90b3R5cGUucGxheVNvdW5kID0gZnVuY3Rpb24oZGF0YSwgc2F2ZVRvU2Z4U3RvcmUpIHtcbiAgICB2YXIgaWQsIHRyYWNrO1xuICAgIHRyYWNrID0gbmV3IEF1ZGlvVHJhY2soZGF0YS5jb250ZW50KTtcbiAgICB0cmFjay5wbGF5KHtcbiAgICAgIHZvbHVtZTogZGF0YS52b2x1bWUsXG4gICAgICBsb29wOiBkYXRhLmxvb3AsXG4gICAgICBvZmZzZXQ6IGRhdGEub2Zmc2V0XG4gICAgfSwgZnVuY3Rpb24oKSB7XG4gICAgICB0cmFjay5kZXN0cm95KCk7XG4gICAgICBpZiAoZGF0YS5jb21wbGV0ZSAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybiBhcmlzdG90bGUuY29tbWFuZGVyW1wiZG9cIl0oZGF0YS5jb21wbGV0ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKHNhdmVUb1NmeFN0b3JlKSB7XG4gICAgICBpZCA9IFwic1wiICsgKHRoaXMuY291bnQrKyk7XG4gICAgICB0aGlzLnNmeFtpZF0gPSB7XG4gICAgICAgIHRyYWNrOiB0cmFjayxcbiAgICAgICAgZGF0YTogZGF0YVxuICAgICAgfTtcbiAgICAgIHJldHVybiB0cmFjay5zZnhJZCA9IGlkO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gU291bmRGWDtcblxufSkoKTtcbiIsInZhciBTdmdDYXJ0b2dyYXBoZXIsXG4gIGJpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFN2Z0NhcnRvZ3JhcGhlciA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gU3ZnQ2FydG9ncmFwaGVyKCkge1xuICAgIHRoaXMuZ2V0R2xvYmFsUG9zID0gYmluZCh0aGlzLmdldEdsb2JhbFBvcywgdGhpcyk7XG4gICAgdGhpcy5nZXRMb2NhbFBvcyA9IGJpbmQodGhpcy5nZXRMb2NhbFBvcywgdGhpcyk7XG4gICAgUHViU3ViLnN1YnNjcmliZSgnc2NhbGUudXBkYXRlJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuc2NhbGUgPSBkYXRhO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgUHViU3ViLnN1YnNjcmliZSgndHJhbnNmb3JtLnVwZGF0ZScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnRyYW5zZm9ybU9yaWdpbiA9IGRhdGE7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBhcmlzdG90bGUuY2FydG9ncmFwaGVyID0gdGhpcztcbiAgICBhcmlzdG90bGUuZ2V0TG9jYWxQb3MgPSB0aGlzLmdldExvY2FsUG9zO1xuICAgIGFyaXN0b3RsZS5nZXRHbG9iYWxQb3MgPSB0aGlzLmdldEdsb2JhbFBvcztcbiAgfVxuXG4gIFN2Z0NhcnRvZ3JhcGhlci5wcm90b3R5cGUuZ2V0TG9jYWxQb3MgPSBmdW5jdGlvbihpdGVtSWQpIHtcbiAgICB2YXIgYkJveDtcbiAgICBiQm94ID0gJChcIiNcIiArIGl0ZW1JZClbMF0uZ2V0QkJveCgpO1xuICAgIHJldHVybiB7XG4gICAgICB4OiBiQm94LngsXG4gICAgICB5OiBiQm94LnksXG4gICAgICB3OiBiQm94LndpZHRoLFxuICAgICAgaDogYkJveC5oZWlnaHRcbiAgICB9O1xuICB9O1xuXG4gIFN2Z0NhcnRvZ3JhcGhlci5wcm90b3R5cGUuZ2V0R2xvYmFsUG9zID0gZnVuY3Rpb24oaXRlbUlkKSB7XG4gICAgdmFyIGJCb3gsIHgsIHh0cmFYLCB4dHJhWSwgeTtcbiAgICBiQm94ID0gJChcIiNcIiArIGl0ZW1JZClbMF0uZ2V0QkJveCgpO1xuICAgIHh0cmFYID0gdGhpcy50cmFuc2Zvcm1PcmlnaW4ueCAqICh0aGlzLnNjYWxlIC0gMSkgLSB0aGlzLnRyYW5zZm9ybU9yaWdpbi54O1xuICAgIHggPSAoYkJveC54ICogdGhpcy5zY2FsZSkgLSAodGhpcy50cmFuc2Zvcm1PcmlnaW4ueCArIHh0cmFYKTtcbiAgICB4dHJhWSA9IHRoaXMudHJhbnNmb3JtT3JpZ2luLnkgKiAodGhpcy5zY2FsZSAtIDEpIC0gdGhpcy50cmFuc2Zvcm1PcmlnaW4ueTtcbiAgICB5ID0gKGJCb3gueSAqIHRoaXMuc2NhbGUpIC0gKHRoaXMudHJhbnNmb3JtT3JpZ2luLnkgKyB4dHJhWSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IHgsXG4gICAgICB5OiB5LFxuICAgICAgdzogYkJveC53aWR0aCxcbiAgICAgIGg6IGJCb3guaGVpZ2h0XG4gICAgfTtcbiAgfTtcblxuICByZXR1cm4gU3ZnQ2FydG9ncmFwaGVyO1xuXG59KSgpO1xuIiwidmFyIER5bmFtaWNBc3NldHM7XG5cbm1vZHVsZS5leHBvcnRzID0gRHluYW1pY0Fzc2V0cyA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gRHluYW1pY0Fzc2V0cygkZWwxKSB7XG4gICAgdGhpcy4kZWwgPSAkZWwxO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoXCJnaG9zdHV4LmFkZFwiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5jcmVhdGVHaG9zdChkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoXCJnaG9zdHV4LnJlbW92ZVwiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5kZXN0cm95R2hvc3QoZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCdsYWJlbC5hZGQnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5hZGRMYWJlbChkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ2xhYmVsLnJlbW92ZScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnJlbW92ZUxhYmVsKGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgUHViU3ViLnN1YnNjcmliZSgnbGFiZWwuY2xlYXInLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5yZW1vdmVMYWJlbChkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ2xhYmVsLmhpZGUnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5oaWRlTGFiZWwoZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCdsYWJlbC5zaG93JywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuc2hvd0xhYmVsKGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH1cblxuICBEeW5hbWljQXNzZXRzLnByb3RvdHlwZS5jcmVhdGVHaG9zdCA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2YXIgJGdob3N0SXRlbSwgYm94O1xuICAgIGJveCA9IGFyaXN0b3RsZS5nZXRMb2NhbFBvcyhkYXRhLmlkKTtcbiAgICBpZiAoYm94LncgPiA1MDAgfHwgYm94LmggPiA0MDApIHtcbiAgICAgIGFyaXN0b3RsZS5sb2coXCJXZSd2ZSBjcmVhdGVkIGEgaGl0IGFyZWEgZm9yIGBcIiArIGRhdGEuaWQgKyBcImAgdGhhdCBpcyBcIiArIGJveC53ICsgXCJweCBieSBcIiArIGJveC5oICsgXCJweCwgSSdtIGd1ZXNzaW5nIHRoYXQncyBub3QgcmlnaHQuLlwiKTtcbiAgICB9XG4gICAgJGdob3N0SXRlbSA9ICQoamFkZVRlbXBsYXRlWydzbGlkZS11eC9jb21wb25lbnRzL2dob3N0LWl0ZW0nXSh7XG4gICAgICBpZDogZGF0YS5pZCArIFwiLWdob3N0XCIsXG4gICAgICB3aWR0aDogYm94LncsXG4gICAgICBoZWlnaHQ6IGJveC5oLFxuICAgICAgbGVmdDogYm94LngsXG4gICAgICB0b3A6IGJveC55XG4gICAgfSkpO1xuICAgIHRoaXMuJGVsLmFwcGVuZCgkZ2hvc3RJdGVtKTtcbiAgICByZXR1cm4gdGhpcy5hZGRFdmVudHMoJGdob3N0SXRlbSwgZGF0YS5ldmVudHMsIGRhdGEuaWQpO1xuICB9O1xuXG4gIER5bmFtaWNBc3NldHMucHJvdG90eXBlLmFkZEV2ZW50cyA9IGZ1bmN0aW9uKCRlbCwgZXZlbnRzLCBpZCkge1xuICAgIHZhciBhY3Rpb24sIGV2ZW50LCByZXN1bHRzO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGV2ZW50IGluIGV2ZW50cykge1xuICAgICAgYWN0aW9uID0gZXZlbnRzW2V2ZW50XTtcbiAgICAgIGlmIChhY3Rpb24uY21kICE9IG51bGwpIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKCRlbC5vbihldmVudCwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGFyaXN0b3RsZS5jb21tYW5kZXJbXCJkb1wiXShhY3Rpb24pO1xuICAgICAgICB9KSk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBhY3Rpb24gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXN1bHRzLnB1c2goJGVsLm9uKGV2ZW50LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gYWN0aW9uKGlkKTtcbiAgICAgICAgfSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHZvaWQgMCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIER5bmFtaWNBc3NldHMucHJvdG90eXBlLmRlc3Ryb3lHaG9zdCA9IGZ1bmN0aW9uKGdob3N0SWQpIHtcbiAgICByZXR1cm4gJChcIiNcIiArIGdob3N0SWQgKyBcIi1naG9zdFwiKS5yZW1vdmUoKTtcbiAgfTtcblxuICBEeW5hbWljQXNzZXRzLnByb3RvdHlwZS5hZGRMYWJlbCA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2YXIgJGxhYmVsLCBwb3M7XG4gICAgcG9zID0gYXJpc3RvdGxlLm1vdmllLmdldExvY2FsUG9zKGRhdGEuaWQpO1xuICAgICRsYWJlbCA9ICQoamFkZVRlbXBsYXRlWydzbGlkZS11eC9sYWJlbCddKHtcbiAgICAgIHRpdGxlOiBkYXRhLnRleHQsXG4gICAgICBpZDogZGF0YS5pZCArIFwiLWxhYmVsXCJcbiAgICB9KSk7XG4gICAgdGhpcy4kZWwuYXBwZW5kKCRsYWJlbCk7XG4gICAgdGhpcy5wb3NpdGlvbkxhYmVsKGRhdGEsICRsYWJlbCwgcG9zKTtcbiAgICAkbGFiZWwuY3NzKHtcbiAgICAgIHRvcDogcG9zLnksXG4gICAgICBsZWZ0OiBwb3MueFxuICAgIH0pO1xuICAgIHRoaXMuYWRkRXZlbnRzKCRsYWJlbCwgZGF0YS5ldmVudHMsIGRhdGEuaWQpO1xuICAgIGlmIChkYXRhLmV2ZW50cyAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gJGxhYmVsLmFkZENsYXNzKFwiY2xpY2thYmxlXCIpO1xuICAgIH1cbiAgfTtcblxuICBEeW5hbWljQXNzZXRzLnByb3RvdHlwZS5yZW1vdmVMYWJlbCA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2YXIgaSwgbGFiZWxJZCwgbGVuLCByZWYsIHJlc3VsdHM7XG4gICAgaWYgKGRhdGEuaWQgPT09IFwiYWxsXCIpIHtcbiAgICAgIHJldHVybiAkKFwiLmxhYmVsLXdyYXBwZXJcIiwgdGhpcy4kZWwpLnJlbW92ZSgpO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShkYXRhLmlkKSkge1xuICAgICAgcmVmID0gZGF0YS5pZDtcbiAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBsYWJlbElkID0gcmVmW2ldO1xuICAgICAgICByZXN1bHRzLnB1c2goJChcIiNcIiArIGxhYmVsSWQgKyBcIi1sYWJlbFwiLCB0aGlzLiRlbCkucmVtb3ZlKCkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAkKFwiI1wiICsgZGF0YS5pZCArIFwiLWxhYmVsXCIsIHRoaXMuJGVsKS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgRHluYW1pY0Fzc2V0cy5wcm90b3R5cGUuaGlkZUxhYmVsID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciBpLCBsYWJlbElkLCBsZW4sIHJlZiwgcmVzdWx0cztcbiAgICBpZiAoZGF0YS5pZCA9PT0gXCJhbGxcIikge1xuICAgICAgcmV0dXJuICQoXCIubGFiZWwtd3JhcHBlclwiLCB0aGlzLiRlbCkudmVsb2NpdHkoe1xuICAgICAgICBvcGFjaXR5OiAwXG4gICAgICB9LCB7XG4gICAgICAgIGR1cmF0aW9uOiA0MDBcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShkYXRhLmlkKSkge1xuICAgICAgcmVmID0gZGF0YS5pZDtcbiAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBsYWJlbElkID0gcmVmW2ldO1xuICAgICAgICByZXN1bHRzLnB1c2goJChcIiNcIiArIGxhYmVsSWQgKyBcIi1sYWJlbFwiLCB0aGlzLiRlbCkudmVsb2NpdHkoe1xuICAgICAgICAgIG9wYWNpdHk6IDBcbiAgICAgICAgfSwge1xuICAgICAgICAgIGR1cmF0aW9uOiA0MDBcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAkKFwiI1wiICsgZGF0YS5pZCArIFwiLWxhYmVsXCIsIHRoaXMuJGVsKS52ZWxvY2l0eSh7XG4gICAgICAgIG9wYWNpdHk6IDBcbiAgICAgIH0sIHtcbiAgICAgICAgZHVyYXRpb246IDQwMFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIER5bmFtaWNBc3NldHMucHJvdG90eXBlLnNob3dMYWJlbCA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2YXIgaSwgbGFiZWxJZCwgbGVuLCByZWYsIHJlc3VsdHM7XG4gICAgaWYgKGRhdGEuaWQgPT09IFwiYWxsXCIpIHtcbiAgICAgIHJldHVybiAkKFwiLmxhYmVsLXdyYXBwZXJcIiwgdGhpcy4kZWwpLnZlbG9jaXR5KHtcbiAgICAgICAgb3BhY2l0eTogMVxuICAgICAgfSwge1xuICAgICAgICBkdXJhdGlvbjogNDAwXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZGF0YS5pZCkpIHtcbiAgICAgIHJlZiA9IGRhdGEuaWQ7XG4gICAgICByZXN1bHRzID0gW107XG4gICAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgbGFiZWxJZCA9IHJlZltpXTtcbiAgICAgICAgcmVzdWx0cy5wdXNoKCQoXCIjXCIgKyBsYWJlbElkICsgXCItbGFiZWxcIiwgdGhpcy4kZWwpLnZlbG9jaXR5KHtcbiAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBkdXJhdGlvbjogNDAwXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJChcIiNcIiArIGRhdGEuaWQgKyBcIi1sYWJlbFwiLCB0aGlzLiRlbCkudmVsb2NpdHkoe1xuICAgICAgICBvcGFjaXR5OiAxXG4gICAgICB9LCB7XG4gICAgICAgIGR1cmF0aW9uOiA0MDBcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBEeW5hbWljQXNzZXRzLnByb3RvdHlwZS5jbGVhckxhYmVsID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciBpLCBsYWJlbElkLCBsZW4sIHJlZiwgcmVzdWx0cztcbiAgICBpZiAoZGF0YS5pZCA9PT0gXCJhbGxcIikge1xuICAgICAgcmV0dXJuICQoXCIubGFiZWwtd3JhcHBlclwiLCB0aGlzLiRlbCkudmVsb2NpdHkoe1xuICAgICAgICBvcGFjaXR5OiAxXG4gICAgICB9LCB7XG4gICAgICAgIGR1cmF0aW9uOiA0MDBcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShkYXRhLmlkKSkge1xuICAgICAgcmVmID0gZGF0YS5pZDtcbiAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBsYWJlbElkID0gcmVmW2ldO1xuICAgICAgICByZXN1bHRzLnB1c2goJChcIiNcIiArIGxhYmVsSWQgKyBcIi1sYWJlbFwiLCB0aGlzLiRlbCkudmVsb2NpdHkoe1xuICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgfSwge1xuICAgICAgICAgIGR1cmF0aW9uOiA0MDBcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAkKFwiI1wiICsgZGF0YS5pZCArIFwiLWxhYmVsXCIsIHRoaXMuJGVsKS52ZWxvY2l0eSh7XG4gICAgICAgIG9wYWNpdHk6IDFcbiAgICAgIH0sIHtcbiAgICAgICAgZHVyYXRpb246IDQwMFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIER5bmFtaWNBc3NldHMucHJvdG90eXBlLnBvc2l0aW9uTGFiZWwgPSBmdW5jdGlvbihkYXRhLCAkbGFiZWwsIHBvcykge1xuICAgIHZhciAkaW5uZXJMYWJlbCwgYXJyb3dMb2MsIGZhY2U7XG4gICAgZmFjZSA9IGRhdGEuZmFjZSAhPSBudWxsID8gZGF0YS5mYWNlIDogXCJ0b3BcIjtcbiAgICBhcnJvd0xvYyA9IGRhdGEuYXJyb3cgIT0gbnVsbCA/IGRhdGEuYXJyb3cgOiBcImxlZnRcIjtcbiAgICAkaW5uZXJMYWJlbCA9ICQoXCIubGFiZWxcIiwgJGxhYmVsKTtcbiAgICBzd2l0Y2ggKGZhY2UpIHtcbiAgICAgIGNhc2UgXCJ0b3BcIjpcbiAgICAgICAgcG9zLnggKz0gcG9zLncgLyAyO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICAgIHBvcy55ICs9IHBvcy5oIC8gMjtcbiAgICAgICAgJGlubmVyTGFiZWwuYWRkQ2xhc3MoXCJhcnJvdy1wb2ludC1yaWdodFwiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgICAgcG9zLnkgKz0gcG9zLmggLyAyO1xuICAgICAgICBwb3MueCArPSBwb3MudztcbiAgICAgICAgJGlubmVyTGFiZWwuYWRkQ2xhc3MoXCJhcnJvdy1wb2ludC1sZWZ0XCIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJib3R0b21cIjpcbiAgICAgICAgcG9zLnggKz0gcG9zLncgLyAyO1xuICAgICAgICBwb3MueSArPSBwb3MuaDtcbiAgICAgICAgJGlubmVyTGFiZWwuYWRkQ2xhc3MoXCJhcnJvdy10b3BcIik7XG4gICAgfVxuICAgIHN3aXRjaCAoYXJyb3dMb2MpIHtcbiAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICByZXR1cm4gJGlubmVyTGFiZWwuYWRkQ2xhc3MoXCJhcnJvdy1yaWdodFwiKTtcbiAgICAgIGNhc2UgXCJtaWRkbGVcIjpcbiAgICAgICAgJGlubmVyTGFiZWwuYWRkQ2xhc3MoXCJhcnJvdy1taWRkbGVcIik7XG4gICAgICAgIHdpbmRvdy50aGluZyA9ICRpbm5lckxhYmVsO1xuICAgICAgICByZXR1cm4gJGlubmVyTGFiZWwuY3NzKHtcbiAgICAgICAgICBsZWZ0OiAtJGlubmVyTGFiZWwud2lkdGgoKSAvIDJcbiAgICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBEeW5hbWljQXNzZXRzO1xuXG59KSgpO1xuIiwidmFyIEhpZ2hsaWdodGVyO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhpZ2hsaWdodGVyID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBIaWdobGlnaHRlcigkZWwsIGR5bmFtaWNBc3NldHMpIHtcbiAgICB0aGlzLiRlbCA9ICRlbDtcbiAgICB0aGlzLmR5bmFtaWNBc3NldHMgPSBkeW5hbWljQXNzZXRzO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ2hpZ2hsaWdodCcsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgdmFyIGksIGl0ZW0sIGxlbiwgcmVmLCByZXN1bHRzO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhLmlkKSkge1xuICAgICAgICAgIHJlZiA9IGRhdGEuaWQ7XG4gICAgICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaXRlbSA9IHJlZltpXTtcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaChfdGhpcy5oaWdobGlnaHRFbGVtZW50KGl0ZW0sIGRhdGEubGV2ZWwsIGRhdGEubGFiZWwpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLmhpZ2hsaWdodEVsZW1lbnQoZGF0YS5pZCwgZGF0YS5sZXZlbCwgZGF0YS5sYWJlbCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ3VuaGlnaGxpZ2h0JywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICB2YXIgaSwgaXRlbSwgbGVuLCByZXN1bHRzO1xuICAgICAgICBpZiAobSA9PT0gXCJ1bmhpZ2hsaWdodC5hbGxcIikge1xuICAgICAgICAgIHJldHVybiBfdGhpcy51bmhpZ2hsaWdodEFsbCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgICAgICByZXN1bHRzID0gW107XG4gICAgICAgICAgICBmb3IgKGkgPSAwLCBsZW4gPSBkYXRhLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgIGl0ZW0gPSBkYXRhW2ldO1xuICAgICAgICAgICAgICByZXN1bHRzLnB1c2goX3RoaXMudW5IaWdobGlnaHRFbGVtZW50KGl0ZW0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMudW5IaWdobGlnaHRFbGVtZW50KGRhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH1cblxuICBIaWdobGlnaHRlci5wcm90b3R5cGUuaGlnaGxpZ2h0RWxlbWVudCA9IGZ1bmN0aW9uKGVsZW1lbnRJZCwgY29sb3IsIGxhYmVsKSB7XG4gICAgdmFyICRpdGVtLCBmaWx0ZXJJZDtcbiAgICAkaXRlbSA9ICQoXCIjXCIgKyBlbGVtZW50SWQsIHRoaXMuJGVsKTtcbiAgICAkaXRlbS5hdHRyKFwiY2xhc3NcIiwgXCJmaWx0ZXItaGlnaGxpZ2h0ZWRcIik7XG4gICAgaWYgKCRpdGVtLmxlbmd0aCA9PT0gMCkge1xuICAgICAgYXJpc3RvdGxlW1widGhyb3dcIl0oXCJ0cmllZCB0byBoaWdobGlnaHQgYW4gZWxlbWVudCB3aXRoIHRoZSBpZCBgXCIgKyBlbGVtZW50SWQgKyBcImAsIGJ1dCBmb3VuZCBubyBlbGVtZW50cyB3aXRoIHRoYXQgaWQuXCIsIHRydWUpO1xuICAgIH1cbiAgICBzd2l0Y2ggKGNvbG9yKSB7XG4gICAgICBjYXNlICdiY2EnOlxuICAgICAgICBmaWx0ZXJJZCA9IFwiaGlnaGxpZ2h0QkNBXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncGNhJzpcbiAgICAgICAgZmlsdGVySWQgPSBcImhpZ2hsaWdodFBDQVwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2Jjc2knOlxuICAgICAgICBmaWx0ZXJJZCA9IFwiaGlnaGxpZ2h0QkNTSVwiO1xuICAgIH1cbiAgICByZXR1cm4gJGl0ZW0uY3NzKHtcbiAgICAgIGZpbHRlcjogXCJ1cmwoI1wiICsgZmlsdGVySWQgKyBcIilcIlxuICAgIH0pO1xuICB9O1xuXG4gIEhpZ2hsaWdodGVyLnByb3RvdHlwZS51bkhpZ2hsaWdodEVsZW1lbnQgPSBmdW5jdGlvbihlbGVtZW50SWQpIHtcbiAgICB2YXIgJGl0ZW07XG4gICAgJGl0ZW0gPSAkKFwiI1wiICsgZWxlbWVudElkLCB0aGlzLiRlbCk7XG4gICAgJGl0ZW0uYXR0cihcImNsYXNzXCIsIFwiXCIpO1xuICAgIGlmICgkaXRlbS5sZW5ndGggPT09IDApIHtcbiAgICAgIGFyaXN0b3RsZVtcInRocm93XCJdKFwidHJpZWQgdG8gdW5oaWdobGlnaHQgYW4gZWxlbWVudCB3aXRoIHRoZSBpZCBgXCIgKyBlbGVtZW50SWQgKyBcImAsIGJ1dCBmb3VuZCBubyBlbGVtZW50cyB3aXRoIHRoYXQgaWQuXCIsIHRydWUpO1xuICAgIH1cbiAgICByZXR1cm4gJGl0ZW0uY3NzKHtcbiAgICAgIGZpbHRlcjogXCJhdXRvXCJcbiAgICB9KTtcbiAgfTtcblxuICBIaWdobGlnaHRlci5wcm90b3R5cGUudW5oaWdobGlnaHRBbGwgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgJGl0ZW1zO1xuICAgICRpdGVtcyA9ICQoXCIuZmlsdGVyLWhpZ2hsaWdodGVkXCIpO1xuICAgICRpdGVtcy5hdHRyKFwiY2xhc3NcIiwgXCJcIik7XG4gICAgcmV0dXJuICRpdGVtcy5jc3Moe1xuICAgICAgZmlsdGVyOiBcImluaXRpYWxcIlxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBIaWdobGlnaHRlcjtcblxufSkoKTtcbiIsInZhciBMYXllciwgU1ZHQW5pbWF0aW9uLFxuICBiaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfTtcblxuU1ZHQW5pbWF0aW9uID0gcmVxdWlyZSgnbW92aWUvc3ZnLWFuaW1hdGlvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IExheWVyID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBMYXllcigkZWwsIGRlcHRoKSB7XG4gICAgdGhpcy5kZXB0aCA9IGRlcHRoO1xuICAgIHRoaXMuY3JlYXRlQ29udGVudCA9IGJpbmQodGhpcy5jcmVhdGVDb250ZW50LCB0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZSA9IGJpbmQodGhpcy51cGRhdGUsIHRoaXMpO1xuICAgIHRoaXMuaXNDYWNoZWQgPSBmYWxzZTtcbiAgICB0aGlzLiRsYXllciA9ICQoamFkZVRlbXBsYXRlWydtb3ZpZS9sYXllciddKHtcbiAgICAgIGRlcHRoOiB0aGlzLmRlcHRoXG4gICAgfSkpO1xuICAgICRlbC5hcHBlbmQodGhpcy4kbGF5ZXIpO1xuICB9XG5cbiAgTGF5ZXIucHJvdG90eXBlLnJlcG9ydCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjYWNoZWRPck5vdCwgbXNnLCBzeW1ib2w7XG4gICAgY2FjaGVkT3JOb3QgPSB0aGlzLmlzQ2FjaGVkID8gXCJjYWNoZWRcIiA6IFwibm90IGNhY2hlZFwiO1xuICAgIHN5bWJvbCA9IHRoaXMuaXNDYWNoZWQgPyBcIuKImlwiIDogXCItXCI7XG4gICAgbXNnID0gc3ltYm9sICsgXCIgTGF5ZXIgXCIgKyB0aGlzLmRlcHRoICsgXCIgOiBcIiArIHRoaXMucHJpc3RpbmVMYXllckRhdGEuY29udGVudCArIFwiIGlzIFwiICsgY2FjaGVkT3JOb3Q7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKG1zZyk7XG4gIH07XG5cbiAgTGF5ZXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKHByaXN0aW5lTGF5ZXJEYXRhKSB7XG4gICAgdGhpcy5wcmlzdGluZUxheWVyRGF0YSA9IHByaXN0aW5lTGF5ZXJEYXRhO1xuICAgIHRoaXMubGF5ZXJEYXRhID0galF1ZXJ5LmV4dGVuZCh0cnVlLCB7fSwgdGhpcy5wcmlzdGluZUxheWVyRGF0YSk7XG4gICAgaWYgKHRoaXMubGF5ZXJEYXRhLndhaXQgIT0gbnVsbCkge1xuICAgICAgYXJpc3RvdGxlLnRpbWVvdXQodGhpcy5jcmVhdGVDb250ZW50LCB0aGlzLmxheWVyRGF0YS53YWl0KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlQ29udGVudCgpO1xuICB9O1xuXG4gIExheWVyLnByb3RvdHlwZS5jcmVhdGVDb250ZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCh0aGlzLmxheWVyRGF0YS5jb250ZW50ICE9IG51bGwpIHx8ICh0aGlzLmxheWVyRGF0YS5iYWNrZ3JvdW5kICE9IG51bGwpKSB7XG4gICAgICB0aGlzLnVwZGF0ZUNvbnRlbnQodGhpcy5sYXllckRhdGEpO1xuICAgIH1cbiAgICBpZiAodGhpcy5sYXllckRhdGEuZnggIT0gbnVsbCkge1xuICAgICAgdGhpcy51cGRhdGVFZmZlY3RzKHRoaXMubGF5ZXJEYXRhLmZ4KTtcbiAgICB9XG4gICAgaWYgKHRoaXMubGF5ZXJEYXRhLmFjdGlvbiAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gYXJpc3RvdGxlLmNvbW1hbmRlcltcImRvXCJdKHRoaXMubGF5ZXJEYXRhLmFjdGlvbik7XG4gICAgfVxuICB9O1xuXG4gIExheWVyLnByb3RvdHlwZS51cGRhdGVDb250ZW50ID0gZnVuY3Rpb24obGF5ZXJEYXRhKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudE9uaW9uTGF5ZXIgIT0gbnVsbCkge1xuICAgICAgdGhpcy5mYWRlQW5kUmVtb3ZlT2xkTGF5ZXIoKTtcbiAgICB9XG4gICAgdGhpcy5hZGRUaGVDb3JyZWN0Q29udGVudChsYXllckRhdGEpO1xuICAgIHJldHVybiB0aGlzLnVwZGF0ZUJhY2tncm91bmQobGF5ZXJEYXRhKTtcbiAgfTtcblxuICBMYXllci5wcm90b3R5cGUuYWRkVGhlQ29ycmVjdENvbnRlbnQgPSBmdW5jdGlvbihsYXllckRhdGEpIHtcbiAgICB2YXIga2luZDtcbiAgICB0aGlzLmlzQW5pbWF0aW9uID0gZmFsc2U7XG4gICAgdGhpcy5pc0NhY2hlZCA9IGZhbHNlO1xuICAgIHBhcnNlKGxheWVyRGF0YSk7XG4gICAgaWYgKGxheWVyRGF0YS5pZUNhY2hlICYmICFhcmlzdG90bGUuZG9udENhY2hlICYmIGFyaXN0b3RsZS5pc0lFKSB7XG4gICAgICBsYXllckRhdGEubG9vcCA9IGZhbHNlO1xuICAgICAgbGF5ZXJEYXRhLmNhY2hlID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5jdXJyZW50T25pb25MYXllciA9IHRoaXMuYWRkT25pb25MYXllcigpO1xuICAgIGlmIChsYXllckRhdGEuY29udGVudCA9PSBudWxsKSB7XG4gICAgICBraW5kID0gXCJub25lXCI7XG4gICAgfSBlbHNlIGlmIChsYXllckRhdGEuY29udGVudCA9PT0gXCJjbGVhclwiKSB7XG4gICAgICBraW5kID0gXCJjbGVhclwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBraW5kID0gbGF5ZXJEYXRhLmNvbnRlbnQuc3BsaXQoXCIuXCIpWzFdO1xuICAgIH1cbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgIGNhc2UgXCJqc29uXCI6XG4gICAgICAgIHJldHVybiB0aGlzLmFkZEFuaW1hdGlvbih0aGlzLmN1cnJlbnRPbmlvbkxheWVyLCBsYXllckRhdGEpO1xuICAgICAgY2FzZSBcInN2Z1wiOlxuICAgICAgICByZXR1cm4gdGhpcy5hZGRTdmcodGhpcy5jdXJyZW50T25pb25MYXllciwgbGF5ZXJEYXRhKTtcbiAgICAgIGNhc2UgXCJnaWZcIjpcbiAgICAgIGNhc2UgXCJqcGdcIjpcbiAgICAgIGNhc2UgXCJqcGVnXCI6XG4gICAgICBjYXNlIFwicG5nXCI6XG4gICAgICAgIHJldHVybiB0aGlzLmFkZEltYWdlKHRoaXMuY3VycmVudE9uaW9uTGF5ZXIsIGxheWVyRGF0YS5jb250ZW50LCBsYXllckRhdGEucmVwZWF0LCBsYXllckRhdGEucG9zaXRpb24pO1xuICAgICAgY2FzZSBcImNsZWFyXCI6XG4gICAgICAgIHJldHVybiB0aGlzLmVtcHR5KCk7XG4gICAgICBjYXNlIFwibXA0XCI6XG4gICAgICAgIHJldHVybiB0aGlzLmFkZFZpZGVvKHRoaXMuY3VycmVudE9uaW9uTGF5ZXIsIGxheWVyRGF0YS5jb250ZW50KTtcbiAgICAgIGNhc2UgXCJub25lXCI6XG4gICAgICAgIHJldHVybiBcImRvIG5vdGhpbmdcIjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBhcmlzdG90bGVbXCJ0aHJvd1wiXShcInRyaWVkIHRvIGFkZCB1bnJlY29nbml6ZWQgbGF5ZXIgdHlwZSAnXCIgKyBraW5kICsgXCInXCIsIHRydWUpO1xuICAgIH1cbiAgfTtcblxuICBMYXllci5wcm90b3R5cGUuY2FjaGUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgJGltZywgJHN2ZywgZXJyb3IsIGVycm9yMSwgaW1nLCBzdmc7XG4gICAgaWYgKHRoaXMuaXNDYWNoZWQgfHwgIXRoaXMuaXNBbmltYXRpb24gfHwgYXJpc3RvdGxlLmRvbnRDYWNoZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmlzQ2FjaGVkID0gdHJ1ZTtcbiAgICAkc3ZnID0gJChcInN2Z1wiLCB0aGlzLiRsYXllcik7XG4gICAgJHN2Zy5hdHRyKHtcbiAgICAgIHN0eWxlOiBcIlwiLFxuICAgICAgeG1sbnM6IFwiXCJcbiAgICB9KTtcbiAgICAkc3ZnLnJlbW92ZUF0dHIoXCJ4bWxuc1wiKTtcbiAgICBzdmcgPSAkc3ZnWzBdO1xuICAgICRpbWcgPSAkKCQucGFyc2VIVE1MKFwiPGltZyAvPlwiKSk7XG4gICAgaW1nID0gJGltZ1swXTtcbiAgICB3aW5kb3cudHJhY2VMYXllciA9IHRoaXM7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBzdmcudG9EYXRhVVJMKCdpbWFnZS9wbmcnLCB7XG4gICAgICAgIHJlbmRlcmVyOiAnY2FudmcnLFxuICAgICAgICBjYWxsYmFjazogKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGRhdGEpO1xuICAgICAgICAgICAgX3RoaXMuZmFkZUFuZFJlbW92ZU9sZExheWVyKCk7XG4gICAgICAgICAgICBfdGhpcy5jdXJyZW50T25pb25MYXllciA9IF90aGlzLmFkZE9uaW9uTGF5ZXIoKTtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5jdXJyZW50T25pb25MYXllci5hcHBlbmQoaW1nKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KSh0aGlzKVxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IxKSB7XG4gICAgICBlcnJvciA9IGVycm9yMTtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIExheWVyLnByb3RvdHlwZS51bmNhY2hlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGtleSwgcmVmLCB0ZW1wT2JqLCB2YWw7XG4gICAgaWYgKCF0aGlzLmlzQ2FjaGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaXNDYWNoZWQgPSBmYWxzZTtcbiAgICB0aGlzLmZhZGVBbmRSZW1vdmVPbGRMYXllcigpO1xuICAgIHRoaXMuY3VycmVudE9uaW9uTGF5ZXIgPSB0aGlzLmFkZE9uaW9uTGF5ZXIoKTtcbiAgICB0ZW1wT2JqID0ge307XG4gICAgcmVmID0gdGhpcy5sYXllckRhdGE7XG4gICAgZm9yIChrZXkgaW4gcmVmKSB7XG4gICAgICB2YWwgPSByZWZba2V5XTtcbiAgICAgIHRlbXBPYmpba2V5XSA9IHZhbDtcbiAgICB9XG4gICAgdGVtcE9iai5pZUNhY2hlID0gZmFsc2U7XG4gICAgdGVtcE9iai5jYWNoZSA9IGZhbHNlO1xuICAgIHRlbXBPYmouanVtcFRvRW5kID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcy5hZGRUaGVDb3JyZWN0Q29udGVudCh0ZW1wT2JqKTtcbiAgfTtcblxuICBMYXllci5wcm90b3R5cGUudXBkYXRlRWZmZWN0cyA9IGZ1bmN0aW9uKGZ4KSB7XG4gICAgdmFyIGVmZmVjdCwgaSwgbGVuLCByZWYsIHJlc3VsdHM7XG4gICAgaWYgKGZ4LmNsZWFyKSB7XG4gICAgICB0aGlzLiRsYXllci5hdHRyKHtcbiAgICAgICAgXCJjbGFzc1wiOiAnbGF5ZXInXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGZ4LmVmZmVjdHMgIT0gbnVsbCkge1xuICAgICAgcmVmID0gZnguZWZmZWN0cztcbiAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBlZmZlY3QgPSByZWZbaV07XG4gICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLiRsYXllci5hZGRDbGFzcyhlZmZlY3QpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH1cbiAgfTtcblxuICBMYXllci5wcm90b3R5cGUudXBkYXRlQmFja2dyb3VuZCA9IGZ1bmN0aW9uKGxheWVyRGF0YSkge1xuICAgIGlmIChsYXllckRhdGEuYmFja2dyb3VuZCA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmN1cnJlbnRPbmlvbkxheWVyLmNzcyh7XG4gICAgICBiYWNrZ3JvdW5kOiBsYXllckRhdGEuYmFja2dyb3VuZFxuICAgIH0pO1xuICB9O1xuXG4gIExheWVyLnByb3RvdHlwZS5hZGRBbmltYXRpb24gPSBmdW5jdGlvbigkaG9sZGVyLCBsYXllckRhdGEpIHtcbiAgICB0aGlzLmlzQW5pbWF0aW9uID0gdHJ1ZTtcbiAgICB0aGlzLmFuaW1hdGlvbiA9IG5ldyBTVkdBbmltYXRpb24oJGhvbGRlciwgYXJpc3RvdGxlLmdldEFzc2V0UGF0aChsYXllckRhdGEuY29udGVudCksIGxheWVyRGF0YSk7XG4gICAgaWYgKGxheWVyRGF0YS5jYWNoZSkge1xuICAgICAgcmV0dXJuIHRoaXMuYW5pbWF0aW9uLmFkZE9uQ29tcGxldGUoKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5jYWNoZSgpO1xuICAgICAgICAgIH0sIDEwKTtcbiAgICAgICAgfTtcbiAgICAgIH0pKHRoaXMpKTtcbiAgICB9XG4gIH07XG5cbiAgTGF5ZXIucHJvdG90eXBlLmFkZFN2ZyA9IGZ1bmN0aW9uKCRob2xkZXIsIGxheWVyRGF0YSkge1xuICAgIHZhciBtZTtcbiAgICBtZSA9IHRoaXM7XG4gICAgcmV0dXJuICRob2xkZXIubG9hZChhcmlzdG90bGUuZ2V0QXNzZXRQYXRoKGxheWVyRGF0YS5jb250ZW50KSwgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAobGF5ZXJEYXRhLmNhY2hlKSB7XG4gICAgICAgIHJldHVybiBtZS5jYWNoZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIExheWVyLnByb3RvdHlwZS5hZGRJbWFnZSA9IGZ1bmN0aW9uKCRob2xkZXIsIGZpbGUsIHJlcGVhdCwgcG9zaXRpb24pIHtcbiAgICBpZiAocmVwZWF0ID09IG51bGwpIHtcbiAgICAgIHJlcGVhdCA9IFwibm8tcmVwZWF0XCI7XG4gICAgfVxuICAgIGlmIChwb3NpdGlvbiA9PSBudWxsKSB7XG4gICAgICBwb3NpdGlvbiA9IFwibGVmdFwiO1xuICAgIH1cbiAgICByZXR1cm4gJGhvbGRlci5jc3Moe1xuICAgICAgYmFja2dyb3VuZDogXCJ1cmwoXCIgKyAoYXJpc3RvdGxlLmdldEFzc2V0UGF0aChmaWxlKSkgKyBcIikgXCIgKyByZXBlYXQgKyBcIiBcIiArIHBvc2l0aW9uXG4gICAgfSk7XG4gIH07XG5cbiAgTGF5ZXIucHJvdG90eXBlLmFkZFZpZGVvID0gZnVuY3Rpb24oJGhvbGRlciwgZmlsZSkge1xuICAgIHZhciAkdmlkO1xuICAgICR2aWQgPSAkKGphZGVUZW1wbGF0ZVsnbW92aWUvdmlkZW8nXSh7XG4gICAgICBzcmM6IGFyaXN0b3RsZS5nZXRBc3NldFBhdGgoZmlsZSlcbiAgICB9KSk7XG4gICAgcmV0dXJuICRob2xkZXIuYXBwZW5kKCR2aWQpO1xuICB9O1xuXG4gIExheWVyLnByb3RvdHlwZS5hZGRPbmlvbkxheWVyID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyICRvbmlvbkxheWVyO1xuICAgICRvbmlvbkxheWVyID0gJChqYWRlVGVtcGxhdGVbJ21vdmllL29uaW9uLWxheWVyJ10oe30pKTtcbiAgICB0aGlzLiRsYXllci5wcmVwZW5kKCRvbmlvbkxheWVyKTtcbiAgICByZXR1cm4gJG9uaW9uTGF5ZXI7XG4gIH07XG5cbiAgTGF5ZXIucHJvdG90eXBlLmZhZGVBbmRSZW1vdmVPbGRMYXllciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBvbGRPbmlvbkxheWVyO1xuICAgIG9sZE9uaW9uTGF5ZXIgPSB0aGlzLmN1cnJlbnRPbmlvbkxheWVyO1xuICAgIHJldHVybiBhcmlzdG90bGUudGltZW91dCgoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgb2xkT25pb25MYXllci52ZWxvY2l0eSgnc3RvcCcsIHRydWUpO1xuICAgICAgICByZXR1cm4gb2xkT25pb25MYXllci52ZWxvY2l0eSh7XG4gICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICB9LCB7XG4gICAgICAgICAgZHVyYXRpb246IDIwMCxcbiAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gb2xkT25pb25MYXllci5yZW1vdmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSwgMjAwKTtcbiAgfTtcblxuICBMYXllci5wcm90b3R5cGUuZW1wdHkgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kbGF5ZXIuZW1wdHkoKTtcbiAgfTtcblxuICBMYXllci5wcm90b3R5cGUuYWRkRmlsdGVyID0gZnVuY3Rpb24oZmlsdGVySWQpIHtcbiAgICByZXR1cm4gJChcInN2Z1wiLCB0aGlzLmN1cnJlbnRPbmlvbkxheWVyKS5jc3Moe1xuICAgICAgZmlsdGVyOiBcInVybCgjXCIgKyBmaWx0ZXJJZCArIFwiKVwiXG4gICAgfSk7XG4gIH07XG5cbiAgTGF5ZXIucHJvdG90eXBlLnJlbW92ZUZpbHRlcnMgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gJChcInN2Z1wiLCB0aGlzLmN1cnJlbnRPbmlvbkxheWVyKS5jc3Moe1xuICAgICAgZmlsdGVyOiBcIm5vbmVcIlxuICAgIH0pO1xuICB9O1xuXG4gIExheWVyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJGxheWVyLnJlbW92ZSgpO1xuICB9O1xuXG4gIHJldHVybiBMYXllcjtcblxufSkoKTtcbiIsInZhciBEeW5hbWljQXNzZXRzLCBIaWdobGlnaHRlciwgTGF5ZXIsIE1vdmllO1xuXG5EeW5hbWljQXNzZXRzID0gcmVxdWlyZSgnbW92aWUvZHluYW1pYy1hc3NldHMnKTtcblxuTGF5ZXIgPSByZXF1aXJlKCdtb3ZpZS9sYXllcicpO1xuXG5IaWdobGlnaHRlciA9IHJlcXVpcmUoJ21vdmllL2hpZ2hsaWdodGVyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTW92aWUgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIE1vdmllKCRlbCkge1xuICAgIHZhciB0b2tlbjEsIHRva2VuMTAsIHRva2VuMTEsIHRva2VuMTIsIHRva2VuMTMsIHRva2VuMiwgdG9rZW4zLCB0b2tlbjQsIHRva2VuNSwgdG9rZW42LCB0b2tlbjcsIHRva2VuOCwgdG9rZW45O1xuICAgIHRoaXMuJGVsID0gJGVsO1xuICAgIGFyaXN0b3RsZS5tb3ZpZSA9IHRoaXM7XG4gICAgdGhpcy4kd3JhcHBlciA9ICQoJy53cmFwcGVyJywgdGhpcy4kZWwpO1xuICAgIHRoaXMubGF5ZXJzID0gW107XG4gICAgdGhpcy5keW5hbWljQXNzZXRzID0gbmV3IER5bmFtaWNBc3NldHMoJCgnLmR5bmFtaWNzJywgdGhpcy4kZWwpKTtcbiAgICB0aGlzLmhpZ2hsaWdodGVyID0gbmV3IEhpZ2hsaWdodGVyKHRoaXMuJHdyYXBwZXIsIHRoaXMuZHluYW1pY0Fzc2V0cyk7XG4gICAgdGhpcy5zY2FsZSA9IDE7XG4gICAgdGhpcy50cmFuc2Zvcm1PcmlnaW4gPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH07XG4gICAgdGhpcy5wdWJsaXNoU2NhbGVBbmRUcmFuc2Zvcm0oKTtcbiAgICB0b2tlbjEgPSBQdWJTdWIuc3Vic2NyaWJlKCdtb3ZpZS5sb2FkLWxheWVyJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuYWRkTGF5ZXIoZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0b2tlbjIgPSBQdWJTdWIuc3Vic2NyaWJlKCdtb3ZpZS56b29tJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuem9vbShkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRva2VuMyA9IFB1YlN1Yi5zdWJzY3JpYmUoJ21vdmllLmxheWVycy5jbGVhcicsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmNsZWFyTGF5ZXIoZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0b2tlbjQgPSBQdWJTdWIuc3Vic2NyaWJlKCdtb3ZpZS5sYXllcnMuY2xlYXItYWxsJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuY2xlYXJBbGxMYXllcnMoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRva2VuNSA9IFB1YlN1Yi5zdWJzY3JpYmUoJ21vdmllLmxheWVycy5ibHVyLmJlbG93JywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuYmx1ckFsbExheWVyc0JlbG93KGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgdG9rZW42ID0gUHViU3ViLnN1YnNjcmliZSgnbW92aWUubGF5ZXJzLnVuYmx1ci5hbGwnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy51bmJsdXJBbGxMQXllcnMoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRva2VuNyA9IFB1YlN1Yi5zdWJzY3JpYmUoJ21vdmllLmxheWVycy5jYWNoZScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmNhY2hlTGF5ZXIoZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0b2tlbjggPSBQdWJTdWIuc3Vic2NyaWJlKCdtb3ZpZS5sYXllcnMudW5jYWNoZScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnVuY2FjaGVMYXllcihkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRva2VuOSA9IFB1YlN1Yi5zdWJzY3JpYmUoJ21vdmllLmxheWVycy51bmNhY2hlLWFsbCcsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnVuQ2FjaGVBbGxMYXllcnMoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRva2VuMTAgPSBQdWJTdWIuc3Vic2NyaWJlKCdtb3ZpZS5sYXllcnMuY2FjaGUtYWxsJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuY2FjaGVBbGxMYXllcnMoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRva2VuMTEgPSBQdWJTdWIuc3Vic2NyaWJlKCdtb3ZpZS5sYXllcnMuY2FjaGUtYWxsLWJ1dCcsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmNhY2hlQWxsQnV0KGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgdG9rZW4xMiA9IFB1YlN1Yi5zdWJzY3JpYmUoJ21vdmllLnJlcG9ydCcsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnJlcG9ydCgpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgdG9rZW4xMyA9IFB1YlN1Yi5zdWJzY3JpYmUoJ21vdmllLnJlaHlkcmF0ZS1sYXllcnMnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5yZWh5ZHJhdGVMYXllclN0YXRlKGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgdGhpcy50b2tlbnMgPSBbdG9rZW4xLCB0b2tlbjIsIHRva2VuMywgdG9rZW40LCB0b2tlbjUsIHRva2VuNiwgdG9rZW43LCB0b2tlbjgsIHRva2VuOSwgdG9rZW4xMCwgdG9rZW4xMSwgdG9rZW4xMiwgdG9rZW4xM107XG4gIH1cblxuICBNb3ZpZS5wcm90b3R5cGUucmVwb3J0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGosIGxheWVyLCBsZW4sIHJlZiwgcmVzdWx0cztcbiAgICByZWYgPSB0aGlzLmxheWVycztcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChqID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICBsYXllciA9IHJlZltqXTtcbiAgICAgIHJlc3VsdHMucHVzaChsYXllci5yZXBvcnQoKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIE1vdmllLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBqLCBsYXllciwgbGVuLCByZWY7XG4gICAgdGhpcy56b29tKHtcbiAgICAgIHNjYWxlOiAxXG4gICAgfSk7XG4gICAgcmVmID0gdGhpcy5sYXllcnM7XG4gICAgZm9yIChqID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICBsYXllciA9IHJlZltqXTtcbiAgICAgIGxheWVyLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMubGF5ZXJzID0gW107XG4gIH07XG5cbiAgTW92aWUucHJvdG90eXBlLnBvcHVsYXRlID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciBkZXB0aElkLCBsYXllckRhdGEsIHJlZjtcbiAgICBpZiAoZGF0YSA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJlZiA9IGRhdGEubGF5ZXJzO1xuICAgIGZvciAoZGVwdGhJZCBpbiByZWYpIHtcbiAgICAgIGxheWVyRGF0YSA9IHJlZltkZXB0aElkXTtcbiAgICAgIHRoaXMuYWRkTGF5ZXIobGF5ZXJEYXRhKTtcbiAgICB9XG4gICAgaWYgKGRhdGEuem9vbSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy56b29tKGRhdGEuem9vbSk7XG4gICAgfVxuICB9O1xuXG4gIE1vdmllLnByb3RvdHlwZS56b29tID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciAkaXRlbSwgcG9zO1xuICAgIGlmIChkYXRhLmlkICE9IG51bGwpIHtcbiAgICAgICRpdGVtID0gJChcIiNcIiArIGRhdGEuaWQpO1xuICAgICAgaWYgKCRpdGVtLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBhcmlzdG90bGVbXCJ0aHJvd1wiXShcIlRyaWVkIHRvIHpvb20gdG8gYW4gaXRlbSB3aXRoIHRoZSBpZCBgXCIgKyBkYXRhLmlkICsgXCJgLCBidXQgbm8gaXRlbXMgd2l0aCB0aGF0IGlkIHdlcmUgZm91bmQuXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBwb3MgPSB0aGlzLmdldExvY2FsUG9zKGRhdGEuaWQpO1xuICAgICAgcmV0dXJuIHRoaXMuem9vbVRvKGRhdGEuc2NhbGUsIHBvcy54LCBwb3MueSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnpvb21UbyhkYXRhLnNjYWxlLCBkYXRhLngsIGRhdGEueSk7XG4gICAgfVxuICB9O1xuXG4gIE1vdmllLnByb3RvdHlwZS56b29tVG8gPSBmdW5jdGlvbihzY2FsZSwgeCwgeSkge1xuICAgIHRoaXMuc2NhbGUgPSBzY2FsZSAhPSBudWxsID8gc2NhbGUgOiAxO1xuICAgIGlmICh4ID09IG51bGwpIHtcbiAgICAgIHggPSAwO1xuICAgIH1cbiAgICBpZiAoeSA9PSBudWxsKSB7XG4gICAgICB5ID0gMDtcbiAgICB9XG4gICAgdGhpcy50cmFuc2Zvcm1PcmlnaW4gPSB7XG4gICAgICB4OiB4LFxuICAgICAgeTogeVxuICAgIH07XG4gICAgdGhpcy4kZWwuY3NzKHtcbiAgICAgIFwidHJhbnNmb3JtLW9yaWdpblwiOiAoTWF0aC5yb3VuZCh4KSkgKyBcInB4IFwiICsgKE1hdGgucm91bmQoeSkpICsgXCJweFwiXG4gICAgfSk7XG4gICAgdGhpcy4kZWwuY3NzKHtcbiAgICAgIHRyYW5zZm9ybTogXCJzY2FsZShcIiArIHRoaXMuc2NhbGUgKyBcIilcIlxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLnB1Ymxpc2hTY2FsZUFuZFRyYW5zZm9ybSgpO1xuICB9O1xuXG4gIE1vdmllLnByb3RvdHlwZS5jbGVhckxheWVyID0gZnVuY3Rpb24oZGVwdGgpIHtcbiAgICBpZiAodGhpcy5sYXllcnNbZGVwdGhdICE9IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLmxheWVyc1tkZXB0aF0uZW1wdHkoKTtcbiAgICB9XG4gIH07XG5cbiAgTW92aWUucHJvdG90eXBlLmNsZWFyQWxsTGF5ZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGosIGxheWVyLCBsZW4sIHJlZiwgcmVzdWx0cztcbiAgICByZWYgPSB0aGlzLmxheWVycztcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChqID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICBsYXllciA9IHJlZltqXTtcbiAgICAgIHJlc3VsdHMucHVzaChsYXllci5lbXB0eSgpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgTW92aWUucHJvdG90eXBlLmFkZExheWVyID0gZnVuY3Rpb24obGF5ZXJEYXRhKSB7XG4gICAgdmFyIGRlcHRoLCBpLCBqLCBsYXllciwgcmVmLCByZWYxO1xuICAgIGlmIChsYXllckRhdGEgPT0gbnVsbCkge1xuICAgICAgYXJpc3RvdGxlW1widGhyb3dcIl0oXCJUcmllZCB0byBjcmVhdGUgYSBsYXllciwgYnV0IGRpZG4ndCBzcGVjaWZ5IGFueSBsYXllciBkYXRhXCIsIHRydWUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAobGF5ZXJEYXRhLmRlcHRoID09IG51bGwpIHtcbiAgICAgIGFyaXN0b3RsZVtcInRocm93XCJdKFwiVHJpZWQgdG8gY3JlYXRlIGEgbGF5ZXIgd2l0aCBubyBkZXB0aCBzcGVjaWZpZWRcIiwgdHJ1ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGRlcHRoID0gbGF5ZXJEYXRhLmRlcHRoO1xuICAgIGlmIChkZXB0aCA+IHRoaXMubGF5ZXJzLmxlbmd0aCkge1xuICAgICAgZm9yIChpID0gaiA9IHJlZiA9IHRoaXMubGF5ZXJzLmxlbmd0aCwgcmVmMSA9IGRlcHRoOyByZWYgPD0gcmVmMSA/IGogPD0gcmVmMSA6IGogPj0gcmVmMTsgaSA9IHJlZiA8PSByZWYxID8gKytqIDogLS1qKSB7XG4gICAgICAgIHRoaXMubGF5ZXJzW2ldID0gbmV3IExheWVyKHRoaXMuJHdyYXBwZXIsIGkpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXllciA9IHRoaXMuZ2V0T3JDcmVhdGVMYXllcihkZXB0aCk7XG4gICAgcmV0dXJuIGxheWVyLnVwZGF0ZShsYXllckRhdGEpO1xuICB9O1xuXG4gIE1vdmllLnByb3RvdHlwZS5nZXRPckNyZWF0ZUxheWVyID0gZnVuY3Rpb24oZGVwdGgpIHtcbiAgICB2YXIgbGF5ZXI7XG4gICAgaWYgKHRoaXMubGF5ZXJzW2RlcHRoXSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5sYXllcnNbZGVwdGhdO1xuICAgIH1cbiAgICBsYXllciA9IG5ldyBMYXllcih0aGlzLiR3cmFwcGVyLCBkZXB0aCk7XG4gICAgdGhpcy5sYXllcnNbZGVwdGhdID0gbGF5ZXI7XG4gICAgcmV0dXJuIGxheWVyO1xuICB9O1xuXG4gIE1vdmllLnByb3RvdHlwZS5jYWNoZUFsbEJ1dCA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2YXIgZXhjZXB0aW9uLCBleGNlcHRpb25zLCBqLCBrLCBsYXllciwgbGVuLCBsZW4xLCByZWYsIHJlc3VsdHM7XG4gICAgZXhjZXB0aW9ucyA9IHt9O1xuICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICBmb3IgKGogPSAwLCBsZW4gPSBkYXRhLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgIGV4Y2VwdGlvbiA9IGRhdGFbal07XG4gICAgICAgIGV4Y2VwdGlvbnNbZXhjZXB0aW9uXSA9IFwiXCI7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4Y2VwdGlvbnNbZGF0YV0gPSBcIlwiO1xuICAgIH1cbiAgICByZWYgPSB0aGlzLmxheWVycztcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChrID0gMCwgbGVuMSA9IHJlZi5sZW5ndGg7IGsgPCBsZW4xOyBrKyspIHtcbiAgICAgIGxheWVyID0gcmVmW2tdO1xuICAgICAgaWYgKGV4Y2VwdGlvbnNbbGF5ZXIuZGVwdGhdICE9PSBcIlwiKSB7XG4gICAgICAgIHJlc3VsdHMucHVzaChsYXllci5jYWNoZSgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdHMucHVzaCh2b2lkIDApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBNb3ZpZS5wcm90b3R5cGUuY2FjaGVBbGxMYXllcnMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaiwgbGF5ZXIsIGxlbiwgcmVmLCByZXN1bHRzO1xuICAgIHJlZiA9IHRoaXMubGF5ZXJzO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGogPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgIGxheWVyID0gcmVmW2pdO1xuICAgICAgcmVzdWx0cy5wdXNoKGxheWVyLmNhY2hlKCkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBNb3ZpZS5wcm90b3R5cGUudW5DYWNoZUFsbExheWVycyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBqLCBsYXllciwgbGVuLCByZWYsIHJlc3VsdHM7XG4gICAgcmVmID0gdGhpcy5sYXllcnM7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoaiA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGogPCBsZW47IGorKykge1xuICAgICAgbGF5ZXIgPSByZWZbal07XG4gICAgICByZXN1bHRzLnB1c2gobGF5ZXIudW5jYWNoZSgpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgTW92aWUucHJvdG90eXBlLmNhY2hlTGF5ZXIgPSBmdW5jdGlvbihkZXB0aCkge1xuICAgIHJldHVybiB0aGlzLmxheWVyc1tkZXB0aF0uY2FjaGUoKTtcbiAgfTtcblxuICBNb3ZpZS5wcm90b3R5cGUudW5jYWNoZUxheWVyID0gZnVuY3Rpb24oZGVwdGgpIHtcbiAgICByZXR1cm4gdGhpcy5sYXllcnNbZGVwdGhdLnVuY2FjaGUoKTtcbiAgfTtcblxuICBNb3ZpZS5wcm90b3R5cGUuYmx1ckFsbExheWVyc0JlbG93ID0gZnVuY3Rpb24obGF5ZXJEZXB0aCkge1xuICAgIHZhciBpLCBqLCByZWYsIHJlc3VsdHM7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoaSA9IGogPSAwLCByZWYgPSBsYXllckRlcHRoIC0gMTsgMCA8PSByZWYgPyBqIDw9IHJlZiA6IGogPj0gcmVmOyBpID0gMCA8PSByZWYgPyArK2ogOiAtLWopIHtcbiAgICAgIHJlc3VsdHMucHVzaCh0aGlzLmxheWVyc1tpXS5hZGRGaWx0ZXIoXCJibHVlQmx1clwiKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIE1vdmllLnByb3RvdHlwZS51bmJsdXJBbGxMQXllcnMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaiwgbGF5ZXIsIGxlbiwgcmVmLCByZXN1bHRzO1xuICAgIHJlZiA9IHRoaXMubGF5ZXJzO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGogPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgIGxheWVyID0gcmVmW2pdO1xuICAgICAgcmVzdWx0cy5wdXNoKGxheWVyLnJlbW92ZUZpbHRlcnMoKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIE1vdmllLnByb3RvdHlwZS5nZXRHbG9iYWxQb3MgPSBmdW5jdGlvbihpdGVtSWQpIHtcbiAgICByZXR1cm4gYXJpc3RvdGxlLmdldEdsb2JhbFBvcyhpdGVtSWQpO1xuICB9O1xuXG4gIE1vdmllLnByb3RvdHlwZS5nZXRMb2NhbFBvcyA9IGZ1bmN0aW9uKGl0ZW1JZCkge1xuICAgIHJldHVybiBhcmlzdG90bGUuZ2V0TG9jYWxQb3MoaXRlbUlkKTtcbiAgfTtcblxuICBNb3ZpZS5wcm90b3R5cGUuZGVoeWRyYXRlTGF5ZXJTdGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBqLCBsYXllciwgbGF5ZXJzLCBsZW4sIHJlZjtcbiAgICBsYXllcnMgPSBbXTtcbiAgICByZWYgPSB0aGlzLmxheWVycztcbiAgICBmb3IgKGogPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgIGxheWVyID0gcmVmW2pdO1xuICAgICAgbGF5ZXJzLnB1c2gobGF5ZXIucHJpc3RpbmVMYXllckRhdGEpO1xuICAgIH1cbiAgICByZXR1cm4gbGF5ZXJzO1xuICB9O1xuXG4gIE1vdmllLnByb3RvdHlwZS5yZWh5ZHJhdGVMYXllclN0YXRlID0gZnVuY3Rpb24obGF5ZXJzKSB7XG4gICAgdmFyIGosIGxheWVyRGF0YSwgbGVuLCByZXN1bHRzO1xuICAgIHRoaXMucmVzZXQoKTtcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChqID0gMCwgbGVuID0gbGF5ZXJzLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICBsYXllckRhdGEgPSBsYXllcnNbal07XG4gICAgICBpZiAobGF5ZXJEYXRhICE9IG51bGwpIHtcbiAgICAgICAgaWYgKCFsYXllckRhdGEubG9vcCkge1xuICAgICAgICAgIGxheWVyRGF0YS5qdW1wVG9FbmQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLmFkZExheWVyKGxheWVyRGF0YSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHZvaWQgMCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIE1vdmllLnByb3RvdHlwZS5wdWJsaXNoU2NhbGVBbmRUcmFuc2Zvcm0gPSBmdW5jdGlvbigpIHtcbiAgICBQdWJTdWIucHVibGlzaCgnc2NhbGUudXBkYXRlJywgdGhpcy5zY2FsZSk7XG4gICAgcmV0dXJuIFB1YlN1Yi5wdWJsaXNoKCd0cmFuc2Zvcm0udXBkYXRlJywgdGhpcy50cmFuc2Zvcm1PcmlnaW4pO1xuICB9O1xuXG4gIE1vdmllLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGosIGxlbiwgcmVmLCByZXN1bHRzLCB0b2tlbjtcbiAgICB0aGlzLnJlc2V0KCk7XG4gICAgcmVmID0gdGhpcy50b2tlbnM7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoaiA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGogPCBsZW47IGorKykge1xuICAgICAgdG9rZW4gPSByZWZbal07XG4gICAgICByZXN1bHRzLnB1c2goUHViU3ViLnVuc3Vic2NyaWJlKHRva2VuKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIHJldHVybiBNb3ZpZTtcblxufSkoKTtcbiIsInZhciBTVkdBbmltYXRpb24sXG4gIGJpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNWR0FuaW1hdGlvbiA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gU1ZHQW5pbWF0aW9uKGVsLCBqc29uLCBkYXRhKSB7XG4gICAgdGhpcy5wbGF5ID0gYmluZCh0aGlzLnBsYXksIHRoaXMpO1xuICAgIGlmIChkYXRhLmxvb3AgPT0gbnVsbCkge1xuICAgICAgZGF0YS5sb29wID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuYW5pbWF0aW9uID0gYm9keW1vdmluLmxvYWRBbmltYXRpb24oe1xuICAgICAgd3JhcHBlcjogZWxbMF0sXG4gICAgICBhbmltVHlwZTogJ3N2ZycsXG4gICAgICBsb29wOiBkYXRhLmxvb3AsXG4gICAgICBwcmVyZW5kZXI6IHRydWUsXG4gICAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgICBwYXRoOiBqc29uXG4gICAgfSk7XG4gICAgaWYgKGRhdGEubmF0aXZlRXZlbnRzICE9IG51bGwpIHtcbiAgICAgIHRoaXMuYWRkTmF0aXZlRXZlbnRzKGRhdGEubmF0aXZlRXZlbnRzKTtcbiAgICB9XG4gICAgaWYgKGRhdGEudmNyKSB7XG4gICAgICBQdWJTdWIucHVibGlzaCgndmNyLWNvbnRyb2wuc2hvdycsIHRoaXMpO1xuICAgIH1cbiAgICB0aGlzLmFuaW1hdGlvbi5hZGRFdmVudExpc3RlbmVyKCdkYXRhX3JlYWR5JywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChkYXRhLmp1bXBUb0VuZCAhPSBudWxsKSB7XG4gICAgICAgICAgX3RoaXMuYW5pbWF0aW9uLnNldEN1cnJlbnRSYXdGcmFtZVZhbHVlKF90aGlzLmFuaW1hdGlvbi50b3RhbEZyYW1lcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGRhdGEuZGVsYXkgIT0gbnVsbCkge1xuICAgICAgICAgICAgYXJpc3RvdGxlLnRpbWVvdXQoX3RoaXMucGxheSwgZGF0YS5kZWxheSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzLnBsYXkoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzLmFkZEV2ZW50cyhkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9XG5cbiAgU1ZHQW5pbWF0aW9uLnByb3RvdHlwZS5hZGRFdmVudHMgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyIGV2ZW50LCBpLCBsZW4sIHJlZiwgcmVzdWx0cztcbiAgICBpZiAoZGF0YS5ldmVudHMgIT0gbnVsbCkge1xuICAgICAgcmVmID0gZGF0YS5ldmVudHM7XG4gICAgICByZXN1bHRzID0gW107XG4gICAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgZXZlbnQgPSByZWZbaV07XG4gICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLmFuaW1hdGlvbi5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBfdGhpcy5hbmltYXRpb24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCk7XG4gICAgICAgICAgICByZXR1cm4gUHViU3ViLnB1Ymxpc2goXCJsYXllci5cIiArIGRhdGEuZGVwdGggKyBcIi5cIiArIGV2ZW50KTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KSh0aGlzKSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxuICB9O1xuXG4gIFNWR0FuaW1hdGlvbi5wcm90b3R5cGUuYWRkTmF0aXZlRXZlbnRzID0gZnVuY3Rpb24oZXZlbnRzKSB7XG4gICAgdmFyIGNiLCBldmVudCwgcmVzdWx0cztcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChldmVudCBpbiBldmVudHMpIHtcbiAgICAgIGNiID0gZXZlbnRzW2V2ZW50XTtcbiAgICAgIHJlc3VsdHMucHVzaCh0aGlzLmFuaW1hdGlvbi5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYikpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBTVkdBbmltYXRpb24ucHJvdG90eXBlLmFkZE9uQ29tcGxldGUgPSBmdW5jdGlvbihvbkNvbXBsZXRlKSB7XG4gICAgcmV0dXJuIHRoaXMuYW5pbWF0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjb21wbGV0ZVwiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG9uQ29tcGxldGUoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9O1xuXG4gIFNWR0FuaW1hdGlvbi5wcm90b3R5cGUucGxheSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmFuaW1hdGlvbi5wbGF5KCk7XG4gIH07XG5cbiAgU1ZHQW5pbWF0aW9uLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYW5pbWF0aW9uLnN0b3AoKTtcbiAgfTtcblxuICBTVkdBbmltYXRpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZXJyb3IsIGVycm9yMTtcbiAgICBpZiAodGhpcy5hbmltYXRpb24gIT0gbnVsbCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5hbmltYXRpb24uZGVzdHJveSgpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IxKSB7XG4gICAgICAgIGVycm9yID0gZXJyb3IxO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmFuaW1hdGlvbi5yZW5kZXJlcik7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYW5pbWF0aW9uLnJlbmRlcmVyLmxheWVycyk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5pbnRlcnZhbCAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybiBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBTVkdBbmltYXRpb24ucHJvdG90eXBlLnRyYWNlRnJhbWVzID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKF90aGlzLmFuaW1hdGlvbi5jdXJyZW50UmF3RnJhbWUsIF90aGlzLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUsIF90aGlzLmFuaW1hdGlvbi50b3RhbEZyYW1lcyk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpLCA1MDApO1xuICB9O1xuXG4gIHJldHVybiBTVkdBbmltYXRpb247XG5cbn0pKCk7XG4iLCJ2YXIgQ2FsbFNpZ25TZWxlY3QsIENvbXBvbmVudCxcbiAgZXh0ZW5kID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChoYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9LFxuICBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbkNvbXBvbmVudCA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvY29tcG9uZW50Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FsbFNpZ25TZWxlY3QgPSAoZnVuY3Rpb24oc3VwZXJDbGFzcykge1xuICBleHRlbmQoQ2FsbFNpZ25TZWxlY3QsIHN1cGVyQ2xhc3MpO1xuXG4gIGZ1bmN0aW9uIENhbGxTaWduU2VsZWN0KCRlbCwgZGF0YSkge1xuICAgIENhbGxTaWduU2VsZWN0Ll9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIGRhdGEpO1xuICAgIHRoaXMuJG5vZGUgPSAkKGphZGVUZW1wbGF0ZVsnc2xpZGUtdXgvY29tcG9uZW50cy9jYWxsLXNpZ24tc2VsZWN0J10oZGF0YSkpO1xuICAgIHRoaXMuc3VwZXJJbml0KCRlbCwgdGhpcy4kbm9kZSwgZGF0YSk7XG4gICAgdGhpcy4kdHh0ID0gJCgnI2NhbGxzaWduLXR4dCcsIHRoaXMuJG5vZGUpO1xuICAgICQoJyNnZW5lcmF0ZS1jYWxsc2lnbicsIHRoaXMuJG5vZGUpLm9uKCdjbGljaycsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMuZ2VuZXJhdGVDYWxsU2lnbigpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgUHViU3ViLnN1YnNjcmliZSgnc2F2ZS5jYWxsc2lnbicsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnNhdmVDYWxsU2lnbigpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH1cblxuICBDYWxsU2lnblNlbGVjdC5wcm90b3R5cGUuZ2VuZXJhdGVDYWxsU2lnbiA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBuaWNrcztcbiAgICBuaWNrcyA9IFtcIkFjZVwiLCBcIkFmdGVyc2hvY2tcIiwgXCJCYWxkeVwiLCBcIkJhbS1CYW1cIiwgXCJCZWFyXCIsIFwiQmVldGxlXCIsIFwiQmlnZm9vdFwiLCBcIkJpem9cIiwgXCJCb256b1wiLCBcIkJvb20tQm9vbVwiLCBcIkJvd3NlclwiLCBcIkJ1Y2tcIiwgXCJCdWdzXCIsIFwiQnVsbFwiLCBcIkNhbGljb1wiLCBcIkRlYWRleWVcIiwgXCJEdXRjaFwiLCBcIkdob3N0XCIsIFwiR3JpdHNcIiwgXCJIYW1tZXJcIiwgXCJIYXJkY29yZSA1NFwiLCBcIkhhd2tcIiwgXCJIYXdrZXllXCIsIFwiSG9sbHl3b29kXCIsIFwiSHVleVwiLCBcIktyYXp5XCIsIFwiTHVja3lcIiwgXCJNYWQgRG9nXCIsIFwiUGluZWFwcGxlXCIsIFwiUG9wc1wiLCBcIlJhZGFyXCIsIFwiUmViZWxcIiwgXCJSZWRcIiwgXCJTaG9ydHlcIiwgXCJTcGFya3lcIiwgXCJTcG9va3lcIiwgXCJUYWNrXCIsIFwiQi5BLlwiLCBcIlRleFwiLCBcIlRpZ2VyXCIsIFwiVGlueVwiLCBcIldpemFyZFwiXTtcbiAgICB0aGlzLmNhbGxTaWduID0gbmlja3NbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbmlja3MubGVuZ3RoKV07XG4gICAgUHViU3ViLnB1Ymxpc2goJ21ldGEuYWN0aXZpdHknLCB7XG4gICAgICBhY3Rpdml0eTogXCJHZW5lcmF0ZSBDYWxsIFNpZ25cIlxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLiR0eHQudmFsKHRoaXMuY2FsbFNpZ24pO1xuICB9O1xuXG4gIENhbGxTaWduU2VsZWN0LnByb3RvdHlwZS5zYXZlQ2FsbFNpZ24gPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgY2FsbFNpZ247XG4gICAgY2FsbFNpZ24gPSB0aGlzLiR0eHQudmFsKCk7XG4gICAgaWYgKChjYWxsU2lnbiAhPSBudWxsID8gY2FsbFNpZ24ubGVuZ3RoIDogdm9pZCAwKSA+IDEpIHtcbiAgICAgIGFyaXN0b3RsZS5nbG9iYWxzLnNldCgnY2FsbFNpZ24nLCBjYWxsU2lnbik7XG4gICAgICBQdWJTdWIucHVibGlzaCgnc3RhdGUuc2F2ZScpO1xuICAgICAgUHViU3ViLnB1Ymxpc2goJ2NhbGxzaWduLnNlbGVjdGVkJywgY2FsbFNpZ24pO1xuICAgICAgcmV0dXJuIFB1YlN1Yi5wdWJsaXNoKCdzbGlkZXMubmV4dCcpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gQ2FsbFNpZ25TZWxlY3Q7XG5cbn0pKENvbXBvbmVudCk7XG4iLCJ2YXIgQ29tcG9uZW50O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudCA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gQ29tcG9uZW50KGRhdGEpIHtcbiAgICB0aGlzLnJlcGxhY2VWYXJzKGRhdGEpO1xuICB9XG5cbiAgQ29tcG9uZW50LnByb3RvdHlwZS5zdXBlckluaXQgPSBmdW5jdGlvbigkZWwsICRub2RlLCBkYXRhKSB7XG4gICAgdGhpcy4kbm9kZSA9ICRub2RlO1xuICAgICRlbC5hcHBlbmQodGhpcy4kbm9kZSk7XG4gICAgc2hhZG93SWNvbnNJbnN0YW5jZS5zdmdSZXBsYWNlV2l0aFN0cmluZyhweFN2Z0ljb25TdHJpbmcsIHRoaXMuJG5vZGUpO1xuICAgIHJldHVybiB0aGlzLmxpc3RlbkZvckxhYmVsSG92ZXJzKGRhdGEpO1xuICB9O1xuXG4gIENvbXBvbmVudC5wcm90b3R5cGUucmVwbGFjZVZhcnMgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyIGksIGtleSwgbGVuLCByZWYsIHJlc3VsdHM7XG4gICAgaWYgKGRhdGEucmVwbGFjZVZhcnMgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZWYgPSBkYXRhLnJlcGxhY2VWYXJzO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGtleSA9IHJlZltpXTtcbiAgICAgIHJlc3VsdHMucHVzaChkYXRhW2tleV0gPSBkYXRhW2tleV0ucmVwbGFjZSgvXFwkeyhcXHcrKX0vZywgZnVuY3Rpb24obWF0Y2gsIGNhcHR1cmUxKSB7XG4gICAgICAgIHJldHVybiBhcmlzdG90bGUuZ2xvYmFscy5nZXQoY2FwdHVyZTEpO1xuICAgICAgfSkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBDb21wb25lbnQucHJvdG90eXBlLmxpc3RlbkZvckxhYmVsSG92ZXJzID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciAkYTtcbiAgICBpZiAoZGF0YS5oYXNMYWJlbHMgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWRhdGEuaGFzTGFiZWxzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgICRhID0gJChcImFbZGF0YS1sYWJlbF1cIiwgdGhpcy4kbm9kZSk7XG4gICAgJGEuYWRkQ2xhc3MoXCJsYWJlbC10cmlnZ2VyXCIpO1xuICAgICRhLm9uKFwibW91c2VvdmVyXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmFkZExhYmVsKGUpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgcmV0dXJuICRhLm9uKFwibW91c2VvdXRcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgICByZXR1cm4gX3RoaXMucmVtb3ZlTGFiZWwoZSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgfTtcblxuICBDb21wb25lbnQucHJvdG90eXBlLmFkZExhYmVsID0gZnVuY3Rpb24oZSkge1xuICAgIHZhciAkZWwsIGNvbmZpZ0RhdGEsIHRpbWVvdXRJZDtcbiAgICAkZWwgPSAkKGUuY3VycmVudFRhcmdldCk7XG4gICAgdGltZW91dElkID0gXCJ0aW1lb3V0XCIgKyAoJGVsLmF0dHIoJ2RhdGEtbGFiZWwnKSk7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXNbdGltZW91dElkXSk7XG4gICAgY29uZmlnRGF0YSA9IGFyaXN0b3RsZS5sYWJlbHNbJGVsLmF0dHIoJ2RhdGEtbGFiZWwnKV07XG4gICAgY29uZmlnRGF0YS5jc3NDbGFzcyA9IFwiYXJyb3ctcmlnaHQgYm94XCI7XG4gICAgcmV0dXJuIFB1YlN1Yi5wdWJsaXNoKCdsYWJlbC5hdHRhY2gnLCB7XG4gICAgICBlbDogJGVsLFxuICAgICAgY29udGVudDogY29uZmlnRGF0YVxuICAgIH0pO1xuICB9O1xuXG4gIENvbXBvbmVudC5wcm90b3R5cGUucmVtb3ZlTGFiZWwgPSBmdW5jdGlvbihlKSB7XG4gICAgdmFyICRlbCwgdGltZW91dElkO1xuICAgICRlbCA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICB0aW1lb3V0SWQgPSBcInRpbWVvdXRcIiArICgkZWwuYXR0cignZGF0YS1sYWJlbCcpKTtcbiAgICByZXR1cm4gdGhpc1t0aW1lb3V0SWRdID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICRlbCA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICAgIHJldHVybiBQdWJTdWIucHVibGlzaCgnbGFiZWwuZGVzdHJveScsICRlbCk7XG4gICAgfSwgMTAwKTtcbiAgfTtcblxuICBDb21wb25lbnQucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kbm9kZS5yZW1vdmUoKTtcbiAgfTtcblxuICByZXR1cm4gQ29tcG9uZW50O1xuXG59KSgpO1xuIiwidmFyIENvbXBvbmVudCwgRGVmZW5kZXJDYXJkcyxcbiAgYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH0sXG4gIGV4dGVuZCA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoaGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfSxcbiAgaGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5Db21wb25lbnQgPSByZXF1aXJlKCdzbGlkZS11eC9jb21wb25lbnRzL2NvbXBvbmVudCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERlZmVuZGVyQ2FyZHMgPSAoZnVuY3Rpb24oc3VwZXJDbGFzcykge1xuICBleHRlbmQoRGVmZW5kZXJDYXJkcywgc3VwZXJDbGFzcyk7XG5cbiAgZnVuY3Rpb24gRGVmZW5kZXJDYXJkcygkZWwsIGRhdGExKSB7XG4gICAgdGhpcy5kYXRhID0gZGF0YTE7XG4gICAgdGhpcy5zaG93Q2FyZCA9IGJpbmQodGhpcy5zaG93Q2FyZCwgdGhpcyk7XG4gICAgRGVmZW5kZXJDYXJkcy5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCBkYXRhKTtcbiAgICB0aGlzLnRvdGFsQ2FyZHNWaWV3ZWQgPSAwO1xuICAgIHRoaXMuJG5vZGUgPSAkKGphZGVUZW1wbGF0ZVsnc2xpZGUtdXgvY29tcG9uZW50cy9kZWZlbmRlci1jYXJkcyddKHt9KSk7XG4gICAgdGhpcy5zdXBlckluaXQoJGVsLCB0aGlzLiRub2RlLCBkYXRhKTtcbiAgICB0aGlzLmNyZWF0ZURlZmVuZGVycyh0aGlzLmRhdGEuZGVmZW5kZXJzKTtcbiAgfVxuXG4gIERlZmVuZGVyQ2FyZHMucHJvdG90eXBlLmNyZWF0ZURlZmVuZGVycyA9IGZ1bmN0aW9uKGRlZmVuZGVycykge1xuICAgIHZhciBkYXRhLCBkZWZlbmRlckRhdGEsIGRlZmVuZGVySWQsIHJlc3VsdHM7XG4gICAgdGhpcy5naG9zdHMgPSBbXTtcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChkZWZlbmRlcklkIGluIGRlZmVuZGVycykge1xuICAgICAgZGVmZW5kZXJEYXRhID0gZGVmZW5kZXJzW2RlZmVuZGVySWRdO1xuICAgICAgZGF0YSA9IHtcbiAgICAgICAgaWQ6IGRlZmVuZGVySWQsXG4gICAgICAgIGV2ZW50czoge1xuICAgICAgICAgIGNsaWNrOiAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihpZCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuc2hvd0NhcmQoaWQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KSh0aGlzKVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgdGhpcy5naG9zdHMucHVzaChkZWZlbmRlcklkKTtcbiAgICAgIHJlc3VsdHMucHVzaChQdWJTdWIucHVibGlzaCgnZ2hvc3R1eC5hZGQnLCBkYXRhKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIERlZmVuZGVyQ2FyZHMucHJvdG90eXBlLnNob3dDYXJkID0gZnVuY3Rpb24oZGVmZW5kZXJJZCkge1xuICAgIHZhciBkYXRhO1xuICAgIHRoaXMudG90YWxDYXJkc1ZpZXdlZCsrO1xuICAgIGlmICh0aGlzLiRjYXJkICE9IG51bGwpIHtcbiAgICAgIHRoaXMucmVtb3ZlQ3VycmVudENhcmQoKTtcbiAgICB9XG4gICAgZGF0YSA9IHRoaXMuZGF0YS5kZWZlbmRlcnNbZGVmZW5kZXJJZF07XG4gICAgdGhpcy4kY2FyZCA9ICQoamFkZVRlbXBsYXRlWydzbGlkZS11eC9jb21wb25lbnRzL2RlZmVuZGVyLWNhcmQnXShkYXRhKSk7XG4gICAgc2hhZG93SWNvbnNJbnN0YW5jZS5zdmdSZXBsYWNlV2l0aFN0cmluZyhweFN2Z0ljb25TdHJpbmcsIHRoaXMuJGNhcmQpO1xuICAgICQoXCIuZ290LWl0LWJ0blwiLCB0aGlzLiRjYXJkKS5vbihcImNsaWNrXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnJlbW92ZUN1cnJlbnRDYXJkKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBpZiAodGhpcy50b3RhbENhcmRzVmlld2VkID09PSAyKSB7XG4gICAgICBQdWJTdWIucHVibGlzaCgnY29udGludWUuc2hvdycpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy4kbm9kZS5hcHBlbmQodGhpcy4kY2FyZCk7XG4gIH07XG5cbiAgRGVmZW5kZXJDYXJkcy5wcm90b3R5cGUucmVtb3ZlQ3VycmVudENhcmQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kY2FyZC5yZW1vdmUoKTtcbiAgfTtcblxuICBEZWZlbmRlckNhcmRzLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGdob3N0SWQsIGksIGxlbiwgcmVmO1xuICAgIHJlZiA9IHRoaXMuZ2hvc3RzO1xuICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgZ2hvc3RJZCA9IHJlZltpXTtcbiAgICAgIFB1YlN1Yi5wdWJsaXNoKCdnaG9zdHV4LnJlbW92ZScsIGdob3N0SWQpO1xuICAgIH1cbiAgICByZXR1cm4gRGVmZW5kZXJDYXJkcy5fX3N1cGVyX18uZGVzdHJveS5jYWxsKHRoaXMpO1xuICB9O1xuXG4gIHJldHVybiBEZWZlbmRlckNhcmRzO1xuXG59KShDb21wb25lbnQpO1xuIiwidmFyIENvbXBvbmVudCwgRGlhbG9ndWVQYWdlLFxuICBleHRlbmQgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKGhhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH0sXG4gIGhhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuQ29tcG9uZW50ID0gcmVxdWlyZSgnc2xpZGUtdXgvY29tcG9uZW50cy9jb21wb25lbnQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBEaWFsb2d1ZVBhZ2UgPSAoZnVuY3Rpb24oc3VwZXJDbGFzcykge1xuICBleHRlbmQoRGlhbG9ndWVQYWdlLCBzdXBlckNsYXNzKTtcblxuICBmdW5jdGlvbiBEaWFsb2d1ZVBhZ2UoJGVsLCBkYXRhKSB7XG4gICAgRGlhbG9ndWVQYWdlLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIGRhdGEpO1xuICAgIHRoaXMuY29uZmlnRGF0YShkYXRhKTtcbiAgICB0aGlzLiRub2RlID0gJChqYWRlVGVtcGxhdGVbJ3NsaWRlLXV4L2NvbXBvbmVudHMvZGlhbG9ndWUvZGlhbG9ndWUtcGFnZXMvYmFzZSddKGRhdGEpKTtcbiAgICB0aGlzLnN1cGVySW5pdCgkZWwsIHRoaXMuJG5vZGUsIGRhdGEpO1xuICAgIGlmIChkYXRhLnRoZW1lICE9IG51bGwpIHtcbiAgICAgIHRoaXMuJG5vZGUuYWRkQ2xhc3MoZGF0YS50aGVtZSk7XG4gICAgfVxuICAgIHRoaXMuY29uZmlnQnV0dG9ucyh0aGlzLiRub2RlLCBkYXRhKTtcbiAgICAkKFwic3ZnXCIsIHRoaXMuJG5vZGUpLmVhY2goZnVuY3Rpb24oaSwgZWwpIHtcbiAgICAgIHJldHVybiBlbC5zZXRBdHRyaWJ1dGUoXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIsIFwibm9uZVwiKTtcbiAgICB9KTtcbiAgICAkKFwiLmJ0blwiKS5vbignY2xpY2snLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICAgIHZhciBidG4sIGlkLCBqLCBsZW4sIHJlZjtcbiAgICAgICAgaWQgPSBlLmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKFwiaWRcIik7XG4gICAgICAgIHJlZiA9IGRhdGEuYnRucztcbiAgICAgICAgZm9yIChqID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgICAgYnRuID0gcmVmW2pdO1xuICAgICAgICAgIGlmIChidG4uaWQgPT09IGlkKSB7XG4gICAgICAgICAgICBhcmlzdG90bGUuY29tbWFuZGVyW1wiZG9cIl0oYnRuLmNsaWNrKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9XG5cbiAgRGlhbG9ndWVQYWdlLnByb3RvdHlwZS5jb25maWdEYXRhID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciBidG4sIGNvdW50LCBqLCBsZW4sIHJlZiwgcmVzdWx0cztcbiAgICBjb3VudCA9IDA7XG4gICAgcmVmID0gZGF0YS5idG5zO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGogPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgIGJ0biA9IHJlZltqXTtcbiAgICAgIHJlc3VsdHMucHVzaChidG4uaWQgPSBcImJ0blwiICsgKGNvdW50KyspKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgRGlhbG9ndWVQYWdlLnByb3RvdHlwZS5jb25maWdCdXR0b25zID0gZnVuY3Rpb24oZWwsIGRhdGEpIHtcbiAgICBpZiAoZGF0YS5idG5Db25maWcgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZGF0YS5idG5Db25maWcud2lkdGggIT0gbnVsbCkge1xuICAgICAgJChcIi5idG5cIiwgZWwpLmNzcyh7XG4gICAgICAgIHdpZHRoOiBkYXRhLmJ0bkNvbmZpZy53aWR0aCArIFwicHhcIlxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChkYXRhLmJ0bkNvbmZpZy5oZWlnaHQgIT0gbnVsbCkge1xuICAgICAgJChcIi5idG5cIiwgZWwpLmNzcyh7XG4gICAgICAgIGhlaWdodDogZGF0YS5idG5Db25maWcuaGVpZ2h0ICsgXCJweFwiXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGRhdGEuYnRuQ29uZmlnLmJvdHRvbSAhPSBudWxsKSB7XG4gICAgICAkKFwiLmJ0bi13cmFwcGVyXCIsIGVsKS5jc3Moe1xuICAgICAgICBcIm1hcmdpbi1ib3R0b21cIjogZGF0YS5idG5Db25maWcuYm90dG9tICsgXCJweFwiXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGRhdGEuYnRuQ29uZmlnLmxpbmVzKSB7XG4gICAgICByZXR1cm4gJChcIi5idG4td3JhcHBlclwiKS5hZGRDbGFzcygnbGluZXMnKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIERpYWxvZ3VlUGFnZTtcblxufSkoQ29tcG9uZW50KTtcbiIsInZhciBDb21wb25lbnQsIERpYWxvZ3VlLFxuICBleHRlbmQgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKGhhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH0sXG4gIGhhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuQ29tcG9uZW50ID0gcmVxdWlyZSgnc2xpZGUtdXgvY29tcG9uZW50cy9jb21wb25lbnQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBEaWFsb2d1ZSA9IChmdW5jdGlvbihzdXBlckNsYXNzKSB7XG4gIGV4dGVuZChEaWFsb2d1ZSwgc3VwZXJDbGFzcyk7XG5cbiAgZnVuY3Rpb24gRGlhbG9ndWUoJGVsLCBkYXRhKSB7XG4gICAgRGlhbG9ndWUuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgZGF0YSk7XG4gICAgdGhpcy4kbm9kZSA9ICQoamFkZVRlbXBsYXRlWydzbGlkZS11eC9jb21wb25lbnRzL2RpYWxvZ3VlL2RpYWxvZ3VlJ10oZGF0YSkpO1xuICAgIHRoaXMuc3VwZXJJbml0KCRlbCwgdGhpcy4kbm9kZSwgZGF0YSk7XG4gICAgJCgnLmJ0bicsIHRoaXMuJG5vZGUpLm9uKFwiY2xpY2tcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBhcmlzdG90bGUuY29tbWFuZGVyW1wiZG9cIl0oZGF0YS5idG4uYWN0aW9uKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9XG5cbiAgcmV0dXJuIERpYWxvZ3VlO1xuXG59KShDb21wb25lbnQpO1xuIiwidmFyIENvbXBvbmVudCwgRHV0aWVzLCBTZXF1ZW5jZSxcbiAgZXh0ZW5kID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChoYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9LFxuICBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbkNvbXBvbmVudCA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvY29tcG9uZW50Jyk7XG5cblNlcXVlbmNlID0gcmVxdWlyZSgnbWlzYy9zZXF1ZW5jZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IER1dGllcyA9IChmdW5jdGlvbihzdXBlckNsYXNzKSB7XG4gIGV4dGVuZChEdXRpZXMsIHN1cGVyQ2xhc3MpO1xuXG4gIGZ1bmN0aW9uIER1dGllcygkZWwsIGRhdGEpIHtcbiAgICBEdXRpZXMuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgZGF0YSk7XG4gICAgdGhpcy5udW1BY2tub3dsZWRnZWREdXRpZXMgPSAwO1xuICAgIHRoaXMuYWNrbm93bGVkZ2VkRHV0aWVzID0ge307XG4gICAgdGhpcy5nZXREYXRhKGRhdGEuZGVmaW5pdGlvbik7XG4gICAgdGhpcy4kbm9kZSA9ICQoXCI8ZGl2IGNsYXNzPSdkdXRpZXMnLz5cIik7XG4gICAgUHViU3ViLnB1Ymxpc2goJ21ldGEuZHV0aWVzLnN0YXJ0Jyk7XG4gICAgdGhpcy5zdXBlckluaXQoJGVsLCB0aGlzLiRub2RlLCBkYXRhKTtcbiAgfVxuXG4gIER1dGllcy5wcm90b3R5cGUuYnVpbGQgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyICRodG1sO1xuICAgIHRoaXMuY3JlYXRlRHV0eUlkcyhkYXRhLmR1dGllcyk7XG4gICAgdGhpcy5kdXRpZXMgPSBuZXcgU2VxdWVuY2UoZGF0YS5kdXRpZXMpO1xuICAgICRodG1sID0gJChqYWRlVGVtcGxhdGVbJ3NsaWRlLXV4L2NvbXBvbmVudHMvZHV0aWVzJ10oZGF0YSkpO1xuICAgIHRoaXMuJG5vZGUuYXBwZW5kKCRodG1sKTtcbiAgICB0aGlzLiRjb250ZW50ID0gJChcIi5jb250ZW50XCIsIHRoaXMuJG5vZGUpO1xuICAgIHNoYWRvd0ljb25zSW5zdGFuY2Uuc3ZnUmVwbGFjZVdpdGhTdHJpbmcocHhTdmdJY29uU3RyaW5nLCB0aGlzLiRub2RlKTtcbiAgICB0aGlzLiRkdXR5QnV0dG9ucyA9ICQoXCIuZHV0eS1idG5cIiwgdGhpcy4kbm9kZSk7XG4gICAgdGhpcy4kZHV0eUJ1dHRvbnMub24oXCJjbGlja1wiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5hY3RpdmF0ZUR1dHkoZS5jdXJyZW50VGFyZ2V0LCBlLmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdpZCcpKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHJldHVybiAkKHRoaXMuJGR1dHlCdXR0b25zWzBdKS50cmlnZ2VyKFwiY2xpY2tcIik7XG4gIH07XG5cbiAgRHV0aWVzLnByb3RvdHlwZS5zZXRVc2VySHRtbCA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2YXIgJHVzZXJDb250ZW50O1xuICAgIHRoaXMuJGNvbnRlbnQuZW1wdHkoKTtcbiAgICAkdXNlckNvbnRlbnQgPSAkKGphZGVUZW1wbGF0ZVsnc2xpZGUtdXgvY29tcG9uZW50cy9kdXR5LWRldGFpbHMnXShkYXRhKSk7XG4gICAgdGhpcy4kY29udGVudC5hcHBlbmQoJHVzZXJDb250ZW50KTtcbiAgICBzaGFkb3dJY29uc0luc3RhbmNlLnN2Z1JlcGxhY2VXaXRoU3RyaW5nKHB4U3ZnSWNvblN0cmluZywgdGhpcy4kbm9kZSk7XG4gICAgcmV0dXJuICQoXCIjYWNrbm93bGVkZ2VcIiwgJHVzZXJDb250ZW50KS5vbihcImNsaWNrXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMuZHV0eUFja25vd2xlZGdlZCgpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH07XG5cbiAgRHV0aWVzLnByb3RvdHlwZS5kdXR5QWNrbm93bGVkZ2VkID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGR1dHksIGksIGxlbiwgcmVmO1xuICAgIGlmICh0aGlzLmFja25vd2xlZGdlZER1dGllc1t0aGlzLmR1dGllcy5jdXJyZW50SXRlbSgpLmlkXSA9PSBudWxsKSB7XG4gICAgICB0aGlzLm51bUFja25vd2xlZGdlZER1dGllcysrO1xuICAgICAgdGhpcy5hY2tub3dsZWRnZWREdXRpZXNbdGhpcy5kdXRpZXMuY3VycmVudEl0ZW0oKS5pZF0gPSBcIlwiO1xuICAgICAgdGhpcy4kY3VycmVudEFjdGl2ZUJ1dHRvbi5hZGRDbGFzcyhcImNvbXBsZXRlXCIpO1xuICAgIH1cbiAgICBpZiAodGhpcy5udW1BY2tub3dsZWRnZWREdXRpZXMgPT09IHRoaXMuZHV0aWVzLnRvdGFsSXRlbXMpIHtcbiAgICAgIFB1YlN1Yi5wdWJsaXNoKCdtZXRhLmR1dGllcy5maW5pc2gnKTtcbiAgICAgIHJldHVybiBQdWJTdWIucHVibGlzaCgnY29udGludWUuc2hvdycpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZWYgPSB0aGlzLmR1dGllcy5pdGVtcztcbiAgICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBkdXR5ID0gcmVmW2ldO1xuICAgICAgICBpZiAodGhpcy5hY2tub3dsZWRnZWREdXRpZXNbZHV0eS5pZF0gPT0gbnVsbCkge1xuICAgICAgICAgICQoXCIjXCIgKyBkdXR5LmlkLCB0aGlzLiRub2RlKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBEdXRpZXMucHJvdG90eXBlLmNyZWF0ZUR1dHlJZHMgPSBmdW5jdGlvbihkdXRpZXMpIHtcbiAgICB2YXIgY291bnQsIGR1dHksIGksIGxlbiwgcmVzdWx0cztcbiAgICBjb3VudCA9IDA7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoaSA9IDAsIGxlbiA9IGR1dGllcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgZHV0eSA9IGR1dGllc1tpXTtcbiAgICAgIHJlc3VsdHMucHVzaChkdXR5LmlkID0gXCJkdXR5XCIgKyAoY291bnQrKykpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBEdXRpZXMucHJvdG90eXBlLmFjdGl2YXRlRHV0eSA9IGZ1bmN0aW9uKGVsLCBpZCkge1xuICAgIHRoaXMuZHV0aWVzLmFjdGl2YXRlSXRlbUJ5UGFyYW0oJ2lkJywgaWQpO1xuICAgIHRoaXMuJGN1cnJlbnRBY3RpdmVCdXR0b24gPSAkKGVsKTtcbiAgICB0aGlzLiRkdXR5QnV0dG9ucy5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICB0aGlzLiRjdXJyZW50QWN0aXZlQnV0dG9uLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgIHJldHVybiB0aGlzLnNldFVzZXJIdG1sKHRoaXMuZHV0aWVzLmN1cnJlbnRJdGVtKCkpO1xuICB9O1xuXG4gIER1dGllcy5wcm90b3R5cGUuZ2V0RGF0YSA9IGZ1bmN0aW9uKGpzb25GaWxlKSB7XG4gICAgcmV0dXJuIHRoaXMubG9hZEpzb24oYXJpc3RvdGxlLmdldEFzc2V0UGF0aChqc29uRmlsZSksIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGpzb24pIHtcbiAgICAgICAgdmFyIG9iajtcbiAgICAgICAgb2JqID0gSlNPTi5wYXJzZShqc29uLnJlcGxhY2UoLyhcXHJcXG58XFxufFxccikvZ20sIFwiXCIpKTtcbiAgICAgICAgcmV0dXJuIF90aGlzLmJ1aWxkKG9iaik7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgfTtcblxuICBEdXRpZXMucHJvdG90eXBlLmxvYWRKc29uID0gZnVuY3Rpb24ocGF0aCwgb25Db21wbGV0ZSkge1xuICAgIHZhciB4b2JqO1xuICAgIHhvYmogPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB4b2JqLm92ZXJyaWRlTWltZVR5cGUoJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICB4b2JqLm9wZW4oJ0dFVCcsIHBhdGgsIHRydWUpO1xuICAgIHhvYmoub25yZWFkeXN0YXRlY2hhbmdlID0gKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh4b2JqLnJlYWR5U3RhdGUgPT09IDQgJiYgeG9iai5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIHJldHVybiBvbkNvbXBsZXRlKHhvYmoucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSh0aGlzKTtcbiAgICByZXR1cm4geG9iai5zZW5kKG51bGwpO1xuICB9O1xuXG4gIHJldHVybiBEdXRpZXM7XG5cbn0pKENvbXBvbmVudCk7XG4iLCJ2YXIgQ29tcG9uZW50LCBFcGlzb2RlSW50cm8sXG4gIGV4dGVuZCA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoaGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfSxcbiAgaGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5Db21wb25lbnQgPSByZXF1aXJlKCdzbGlkZS11eC9jb21wb25lbnRzL2NvbXBvbmVudCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVwaXNvZGVJbnRybyA9IChmdW5jdGlvbihzdXBlckNsYXNzKSB7XG4gIGV4dGVuZChFcGlzb2RlSW50cm8sIHN1cGVyQ2xhc3MpO1xuXG4gIGZ1bmN0aW9uIEVwaXNvZGVJbnRybygkZWwsIGRhdGEpIHtcbiAgICBFcGlzb2RlSW50cm8uX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgZGF0YSk7XG4gICAgdGhpcy4kbm9kZSA9ICQoamFkZVRlbXBsYXRlWydzbGlkZS11eC9jb21wb25lbnRzL2VwaXNvZGUtaW50cm8nXShkYXRhKSk7XG4gICAgdGhpcy5zdXBlckluaXQoJGVsLCB0aGlzLiRub2RlLCBkYXRhKTtcbiAgfVxuXG4gIHJldHVybiBFcGlzb2RlSW50cm87XG5cbn0pKENvbXBvbmVudCk7XG4iLCJ2YXIgQ29tcG9uZW50LCBFcGlzb2RlT3V0cm8sXG4gIGV4dGVuZCA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoaGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfSxcbiAgaGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5Db21wb25lbnQgPSByZXF1aXJlKCdzbGlkZS11eC9jb21wb25lbnRzL2NvbXBvbmVudCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVwaXNvZGVPdXRybyA9IChmdW5jdGlvbihzdXBlckNsYXNzKSB7XG4gIGV4dGVuZChFcGlzb2RlT3V0cm8sIHN1cGVyQ2xhc3MpO1xuXG4gIGZ1bmN0aW9uIEVwaXNvZGVPdXRybygkZWwsIGRhdGEpIHtcbiAgICBFcGlzb2RlT3V0cm8uX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgZGF0YSk7XG4gICAgdGhpcy4kbm9kZSA9ICQoamFkZVRlbXBsYXRlWydzbGlkZS11eC9jb21wb25lbnRzL2VwaXNvZGUtb3V0cm8nXShkYXRhKSk7XG4gICAgdGhpcy5zdXBlckluaXQoJGVsLCB0aGlzLiRub2RlLCBkYXRhKTtcbiAgfVxuXG4gIHJldHVybiBFcGlzb2RlT3V0cm87XG5cbn0pKENvbXBvbmVudCk7XG4iLCJ2YXIgQ29tcG9uZW50LCBFeHBsb3JlQ2FyZHMsIFNlcXVlbmNlLFxuICBiaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfSxcbiAgZXh0ZW5kID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChoYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9LFxuICBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbkNvbXBvbmVudCA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvY29tcG9uZW50Jyk7XG5cblNlcXVlbmNlID0gcmVxdWlyZSgnbWlzYy9zZXF1ZW5jZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEV4cGxvcmVDYXJkcyA9IChmdW5jdGlvbihzdXBlckNsYXNzKSB7XG4gIGV4dGVuZChFeHBsb3JlQ2FyZHMsIHN1cGVyQ2xhc3MpO1xuXG4gIGZ1bmN0aW9uIEV4cGxvcmVDYXJkcygkZWwsIGRhdGExKSB7XG4gICAgdGhpcy5kYXRhID0gZGF0YTE7XG4gICAgdGhpcy5zaG93Q2FyZCA9IGJpbmQodGhpcy5zaG93Q2FyZCwgdGhpcyk7XG4gICAgRXhwbG9yZUNhcmRzLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIHRoaXMuZGF0YSk7XG4gICAgdGhpcy5tZXRhQ2F0ZWdvcnkgPSB0aGlzLmRhdGEubWV0YS50aXRsZTtcbiAgICB0aGlzLnRvdGFsQ2FyZHNWaWV3ZWQgPSAwO1xuICAgIHRoaXMucmVxdWlyZWRDYXJkVmlld3MgPSB0aGlzLmRhdGFbXCJyZXF1aXJlZC12aWV3c1wiXTtcbiAgICB0aGlzLiRub2RlID0gJCgkLnBhcnNlSFRNTChcIjxkaXY+PC9kaXY+XCIpKTtcbiAgICB0aGlzLmNhcmRzID0gbmV3IFNlcXVlbmNlKHRoaXMuZGF0YS5jYXJkcyk7XG4gICAgUHViU3ViLnB1Ymxpc2goJ2NvbnRpbnVlLnNob3cnKTtcbiAgICB0aGlzLmNyZWF0ZUNhcmRHaG9zdHModGhpcy5kYXRhLmNhcmRzKTtcbiAgICB0aGlzLnN1cGVySW5pdCgkZWwsIHRoaXMuJG5vZGUsIHRoaXMuZGF0YSk7XG4gIH1cblxuICBFeHBsb3JlQ2FyZHMucHJvdG90eXBlLmNyZWF0ZUNhcmRHaG9zdHMgPSBmdW5jdGlvbihjYXJkcykge1xuICAgIHZhciBjYXJkRGF0YSwgZGF0YSwgaSwgbGVuLCByZXN1bHRzO1xuICAgIHRoaXMuZ2hvc3RzID0gW107XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoaSA9IDAsIGxlbiA9IGNhcmRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjYXJkRGF0YSA9IGNhcmRzW2ldO1xuICAgICAgaWYgKGNhcmREYXRhLmxhYmVsICE9IG51bGwpIHtcbiAgICAgICAgY2FyZERhdGEubGFiZWwuaWQgPSBjYXJkRGF0YS5oaXQ7XG4gICAgICAgIGNhcmREYXRhLmxhYmVsLmV2ZW50cyA9IHtcbiAgICAgICAgICBjbGljazogKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLnNob3dDYXJkKGlkKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSkodGhpcylcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5hZGRMYWJlbChjYXJkRGF0YS5sYWJlbCk7XG4gICAgICB9XG4gICAgICBkYXRhID0ge1xuICAgICAgICBpZDogY2FyZERhdGEuaGl0LFxuICAgICAgICBldmVudHM6IHtcbiAgICAgICAgICBjbGljazogKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oaWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLnNob3dDYXJkKGlkKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSkodGhpcylcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHRoaXMuZ2hvc3RzLnB1c2goY2FyZERhdGEuaGl0KTtcbiAgICAgIHJlc3VsdHMucHVzaChQdWJTdWIucHVibGlzaCgnZ2hvc3R1eC5hZGQnLCBkYXRhKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIEV4cGxvcmVDYXJkcy5wcm90b3R5cGUuYWRkTGFiZWwgPSBmdW5jdGlvbihsYWJlbERhdGEpIHtcbiAgICByZXR1cm4gUHViU3ViLnB1Ymxpc2goJ2xhYmVsLmFkZCcsIGxhYmVsRGF0YSk7XG4gIH07XG5cbiAgRXhwbG9yZUNhcmRzLnByb3RvdHlwZS5zaG93Q2FyZCA9IGZ1bmN0aW9uKGNhcmRJZCkge1xuICAgIHZhciBkYXRhO1xuICAgIHRoaXMudG90YWxDYXJkc1ZpZXdlZCsrO1xuICAgIGlmICh0aGlzLiRjdXJyZW50Q2FyZCAhPSBudWxsKSB7XG4gICAgICB0aGlzLnJlbW92ZUN1cnJlbnRDYXJkKCk7XG4gICAgfVxuICAgIGRhdGEgPSB0aGlzLmNhcmRzLmdldEl0ZW1CeVBhcmFtKCdoaXQnLCBjYXJkSWQpO1xuICAgIHRoaXMuJGN1cnJlbnRDYXJkID0gJChqYWRlVGVtcGxhdGVbXCJzbGlkZS11eC9jb21wb25lbnRzL2NhcmRzL1wiICsgdGhpcy5kYXRhLnRlbXBsYXRlXShkYXRhKSk7XG4gICAgc2hhZG93SWNvbnNJbnN0YW5jZS5zdmdSZXBsYWNlV2l0aFN0cmluZyhweFN2Z0ljb25TdHJpbmcsIHRoaXMuJGN1cnJlbnRDYXJkKTtcbiAgICAkKFwiLmdvdC1pdC1idG5cIiwgdGhpcy4kY3VycmVudENhcmQpLm9uKFwiY2xpY2tcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgICByZXR1cm4gX3RoaXMucmVtb3ZlQ3VycmVudENhcmQoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5wdWJsaXNoKCdtZXRhLmFjdGl2aXR5Jywge1xuICAgICAgYWN0aXZpdHk6IFwiQ2xpY2sgOiBcIiArIHRoaXMubWV0YUNhdGVnb3J5ICsgXCIgLSBcIiArIGRhdGEubmFtZVxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLiRub2RlLmFwcGVuZCh0aGlzLiRjdXJyZW50Q2FyZCk7XG4gIH07XG5cbiAgRXhwbG9yZUNhcmRzLnByb3RvdHlwZS5yZW1vdmVDdXJyZW50Q2FyZCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRjdXJyZW50Q2FyZC5yZW1vdmUoKTtcbiAgfTtcblxuICBFeHBsb3JlQ2FyZHMucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZ2hvc3RJZCwgaSwgbGVuLCByZWY7XG4gICAgcmVmID0gdGhpcy5naG9zdHM7XG4gICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBnaG9zdElkID0gcmVmW2ldO1xuICAgICAgUHViU3ViLnB1Ymxpc2goJ2dob3N0dXgucmVtb3ZlJywgZ2hvc3RJZCk7XG4gICAgfVxuICAgIHJldHVybiBFeHBsb3JlQ2FyZHMuX19zdXBlcl9fLmRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgfTtcblxuICByZXR1cm4gRXhwbG9yZUNhcmRzO1xuXG59KShDb21wb25lbnQpO1xuIiwidmFyIENvbXBvbmVudCwgR2hvc3RVWCxcbiAgZXh0ZW5kID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChoYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9LFxuICBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbkNvbXBvbmVudCA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvY29tcG9uZW50Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gR2hvc3RVWCA9IChmdW5jdGlvbihzdXBlckNsYXNzKSB7XG4gIGV4dGVuZChHaG9zdFVYLCBzdXBlckNsYXNzKTtcblxuICBmdW5jdGlvbiBHaG9zdFVYKCRlbCwgZGF0YSkge1xuICAgIEdob3N0VVguX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgZGF0YSk7XG4gICAgdGhpcy4kbm9kZSA9ICQoamFkZVRlbXBsYXRlWydzbGlkZS11eC9jb21wb25lbnRzL2dob3N0LXV4J10oe30pKTtcbiAgICB0aGlzLnN1cGVySW5pdCgkZWwsIHRoaXMuJG5vZGUsIGRhdGEpO1xuICAgIHRoaXMuY3JlYXRlVGFyZ2V0cyhkYXRhLnRhcmdldHMpO1xuICB9XG5cbiAgR2hvc3RVWC5wcm90b3R5cGUuY3JlYXRlVGFyZ2V0cyA9IGZ1bmN0aW9uKHRhcmdldHMpIHtcbiAgICB2YXIgJGdob3N0SXRlbSwgJHRhcmdldCwgaSwgbGVuLCBwb3MsIHJlc3VsdHMsIHRhbCwgdGFyZ2V0LCB3aWQ7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoaSA9IDAsIGxlbiA9IHRhcmdldHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHRhcmdldCA9IHRhcmdldHNbaV07XG4gICAgICAkdGFyZ2V0ID0gJChcIiNcIiArIHRhcmdldC5pZCk7XG4gICAgICBwb3MgPSAkdGFyZ2V0LnBvc2l0aW9uKCk7XG4gICAgICB3aWQgPSAkdGFyZ2V0WzBdLmdldEJCb3goKS53aWR0aDtcbiAgICAgIHRhbCA9ICR0YXJnZXRbMF0uZ2V0QkJveCgpLmhlaWdodDtcbiAgICAgICRnaG9zdEl0ZW0gPSAkKGphZGVUZW1wbGF0ZVsnc2xpZGUtdXgvY29tcG9uZW50cy9naG9zdC1pdGVtJ10oe1xuICAgICAgICB3aWR0aDogd2lkLFxuICAgICAgICBoZWlnaHQ6IHRhbCxcbiAgICAgICAgbGVmdDogcG9zLmxlZnQsXG4gICAgICAgIHRvcDogcG9zLnRvcFxuICAgICAgfSkpO1xuICAgICAgdGhpcy4kbm9kZS5hcHBlbmQoJGdob3N0SXRlbSk7XG4gICAgICB0aGlzLnNldEV2ZW50SGFuZGxlcigkZ2hvc3RJdGVtLCAnY2xpY2snLCB0YXJnZXQuY2xpY2spO1xuICAgICAgdGhpcy5zZXRFdmVudEhhbmRsZXIoJGdob3N0SXRlbSwgJ21vdXNlb3ZlcicsIHRhcmdldC5vdmVyLCAwLjQpO1xuICAgICAgcmVzdWx0cy5wdXNoKHRoaXMuc2V0RXZlbnRIYW5kbGVyKCRnaG9zdEl0ZW0sICdtb3VzZW91dCcsIHRhcmdldC5vdXQpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgR2hvc3RVWC5wcm90b3R5cGUuc2V0RXZlbnRIYW5kbGVyID0gZnVuY3Rpb24oJGl0ZW0sIGV2ZW50LCBhY3Rpb24sIG9wYWNpdHkpIHtcbiAgICBpZiAob3BhY2l0eSA9PSBudWxsKSB7XG4gICAgICBvcGFjaXR5ID0gMDtcbiAgICB9XG4gICAgcmV0dXJuICRpdGVtLm9uKGV2ZW50LCBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBhcmlzdG90bGUuY29tbWFuZGVyW1wiZG9cIl0oYWN0aW9uKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gR2hvc3RVWDtcblxufSkoQ29tcG9uZW50KTtcbiIsInZhciBDb21wb25lbnQsIFBlcnNvbmFsSW5mb0ludHJvLFxuICBleHRlbmQgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKGhhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH0sXG4gIGhhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuQ29tcG9uZW50ID0gcmVxdWlyZSgnc2xpZGUtdXgvY29tcG9uZW50cy9jb21wb25lbnQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBQZXJzb25hbEluZm9JbnRybyA9IChmdW5jdGlvbihzdXBlckNsYXNzKSB7XG4gIGV4dGVuZChQZXJzb25hbEluZm9JbnRybywgc3VwZXJDbGFzcyk7XG5cbiAgZnVuY3Rpb24gUGVyc29uYWxJbmZvSW50cm8oJGVsLCBkYXRhKSB7XG4gICAgUGVyc29uYWxJbmZvSW50cm8uX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgZGF0YSk7XG4gICAgZGF0YS5vcmdhbml6YXRpb24gPSBcIkFyaXpvbmEgUHVibGljIFNlcnZpY2VcIjtcbiAgICBkYXRhLm5hbWUgPSBhcmlzdG90bGUubG1zUHJveHkubmFtZTtcbiAgICB0aGlzLiRub2RlID0gJChqYWRlVGVtcGxhdGVbJ3NsaWRlLXV4L2NvbXBvbmVudHMvcGVyc29uYWwtaW5mby1pbnRybyddKGRhdGEpKTtcbiAgICB0aGlzLnN1cGVySW5pdCgkZWwsIHRoaXMuJG5vZGUsIGRhdGEpO1xuICB9XG5cbiAgcmV0dXJuIFBlcnNvbmFsSW5mb0ludHJvO1xuXG59KShDb21wb25lbnQpO1xuIiwidmFyIFF1ZXN0aW9uLFxuICBiaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBRdWVzdGlvbiA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gUXVlc3Rpb24oJHBhcmVudCwgZGF0YSwgcXVlc3Rpb25WYWx1ZSwgYW5zd2VyQ2FsbGJhY2spIHtcbiAgICB0aGlzLiRwYXJlbnQgPSAkcGFyZW50O1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgdGhpcy5xdWVzdGlvblZhbHVlID0gcXVlc3Rpb25WYWx1ZSAhPSBudWxsID8gcXVlc3Rpb25WYWx1ZSA6IDEyMDtcbiAgICB0aGlzLmFuc3dlckNhbGxiYWNrID0gYW5zd2VyQ2FsbGJhY2s7XG4gICAgdGhpcy5vbkFuc3dlckNsaWNrID0gYmluZCh0aGlzLm9uQW5zd2VyQ2xpY2ssIHRoaXMpO1xuICAgIFB1YlN1Yi5wdWJsaXNoKCdtZXRhLnF1aXoucXVlc3Rpb24uc3RhcnQnLCB7XG4gICAgICBpZDogdGhpcy5kYXRhLmluZGV4ICsgMVxuICAgIH0pO1xuICAgIHRoaXMud3JvbmdHdWVzc2VzID0gMDtcbiAgICB0aGlzLmNvdW50V3JvbmdBbnN3ZXJzKCk7XG4gIH1cblxuICBRdWVzdGlvbi5wcm90b3R5cGUuYnVpbGQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLiRub2RlID0gJChqYWRlVGVtcGxhdGVbJ3NsaWRlLXV4L2NvbXBvbmVudHMvcXVpei9xdWVzdGlvbiddKHRoaXMuZGF0YSkpO1xuICAgIHRoaXMuJHBhcmVudC5wcmVwZW5kKHRoaXMuJG5vZGUpO1xuICAgIHNoYWRvd0ljb25zSW5zdGFuY2Uuc3ZnUmVwbGFjZVdpdGhTdHJpbmcocHhTdmdJY29uU3RyaW5nLCB0aGlzLiRub2RlKTtcbiAgICByZXR1cm4gJChcIi5hbnN3ZXItd3JhcHBlclwiLCB0aGlzLiRub2RlKS5vbihcImNsaWNrXCIsIHRoaXMub25BbnN3ZXJDbGljayk7XG4gIH07XG5cbiAgUXVlc3Rpb24ucHJvdG90eXBlLm9uQW5zd2VyQ2xpY2sgPSBmdW5jdGlvbihlKSB7XG4gICAgdmFyICRlbCwgJHJlc3BvbnNlO1xuICAgIGlmICh0aGlzLmd1ZXNzZWRSaWdodCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAkZWwgPSAkKGUuY3VycmVudFRhcmdldCk7XG4gICAgJGVsLmFkZENsYXNzKFwiZmxpcHBlZFwiKTtcbiAgICAkcmVzcG9uc2UgPSAkKFwiLnJlc3BvbnNlXCIsIGUuY3VycmVudFRhcmdldCk7XG4gICAgdGhpcy5ndWVzc2VkUmlnaHQgPSAkcmVzcG9uc2UuaGFzQ2xhc3MoJ3JpZ2h0Jyk7XG4gICAgUHViU3ViLnB1Ymxpc2goJ21ldGEucXVpei5xdWVzdGlvbi5hbnN3ZXInLCB7XG4gICAgICBpZDogdGhpcy5kYXRhLmluZGV4ICsgMSxcbiAgICAgIGFuc3dlcjogJChcIi5mcm9udCAudHh0XCIsICQoZS5jdXJyZW50VGFyZ2V0KSkudGV4dCgpXG4gICAgfSk7XG4gICAgaWYgKCF0aGlzLmd1ZXNzZWRSaWdodCkge1xuICAgICAgdGhpcy53cm9uZ0d1ZXNzZXMrKztcbiAgICB9IGVsc2Uge1xuICAgICAgUHViU3ViLnB1Ymxpc2goJ21ldGEucXVpei5xdWVzdGlvbi5maW5pc2gnLCB7XG4gICAgICAgIGlkOiB0aGlzLmRhdGEuaW5kZXggKyAxLFxuICAgICAgICBzY29yZTogdGhpcy5wb2ludHNFYXJuZWQoKVxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuYW5zd2VyQ2FsbGJhY2sodGhpcy5ndWVzc2VkUmlnaHQpO1xuICAgIHJldHVybiB0aGlzLmNsaWNrUmVzdWx0cygkZWwsIHRoaXMuZ3Vlc3NlZFJpZ2h0KTtcbiAgfTtcblxuICBRdWVzdGlvbi5wcm90b3R5cGUuY2xpY2tSZXN1bHRzID0gZnVuY3Rpb24oJGVsLCBndWVzc2VkUmlnaHQpIHtcbiAgICB2YXIgJG5vZGUsIHBvaW50cywgcmVzdWx0O1xuICAgIGlmIChndWVzc2VkUmlnaHQpIHtcbiAgICAgIHJlc3VsdCA9ICdyaWdodCc7XG4gICAgICBwb2ludHMgPSB0aGlzLnBvaW50c0Vhcm5lZCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXN1bHQgPSAnd3JvbmcnO1xuICAgICAgcG9pbnRzID0gKHRoaXMucXVlc3Rpb25WYWx1ZSAvIDIpIC8gdGhpcy50b3RhbFdyb25nQW5zd2VycztcbiAgICB9XG4gICAgJG5vZGUgPSAkKGphZGVUZW1wbGF0ZVsnc2xpZGUtdXgvY29tcG9uZW50cy9xdWl6L3BvaW50cy1mbG9hdCddKHtcbiAgICAgIHBvaW50czogcG9pbnRzLFxuICAgICAgcmVzdWx0OiByZXN1bHRcbiAgICB9KSk7XG4gICAgJGVsLmFwcGVuZCgkbm9kZSk7XG4gICAgcmV0dXJuICRub2RlLnZlbG9jaXR5KHtcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICB0b3A6IC0zNVxuICAgIH0sIHtcbiAgICAgIGR1cmF0aW9uOiAxMDAwLFxuICAgICAgZWFzaW5nOiBcImVhc2Vpbm91dHF1aW50XCJcbiAgICB9KTtcbiAgfTtcblxuICBRdWVzdGlvbi5wcm90b3R5cGUuY291bnRXcm9uZ0Fuc3dlcnMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYW5zd2VyLCBpLCBsZW4sIHJlZiwgcmVzdWx0cztcbiAgICB0aGlzLnRvdGFsV3JvbmdBbnN3ZXJzID0gMDtcbiAgICByZWYgPSB0aGlzLmRhdGEuYW5zd2VycztcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBhbnN3ZXIgPSByZWZbaV07XG4gICAgICBpZiAoIWFuc3dlci5jKSB7XG4gICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLnRvdGFsV3JvbmdBbnN3ZXJzKyspO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHZvaWQgMCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIFF1ZXN0aW9uLnByb3RvdHlwZS5pc1BlcmZlY3QgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy53cm9uZ0d1ZXNzZXMgPT09IDA7XG4gIH07XG5cbiAgUXVlc3Rpb24ucHJvdG90eXBlLmdldE5hbWUgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5uYW1lICE9IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBcIlF1ZXNpdG9uIFwiICsgKHRoaXMuZGF0YS5pbmRleCArIDEpO1xuICAgIH1cbiAgfTtcblxuICBRdWVzdGlvbi5wcm90b3R5cGUuZ2V0U2NvcmUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKHRoaXMucG9pbnRzRWFybmVkKCkpICsgXCIvXCIgKyB0aGlzLnF1ZXN0aW9uVmFsdWU7XG4gIH07XG5cbiAgUXVlc3Rpb24ucHJvdG90eXBlLnBvaW50c0Vhcm5lZCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB3cm9uZ0d1ZXNzVmFsdWU7XG4gICAgd3JvbmdHdWVzc1ZhbHVlID0gKHRoaXMucXVlc3Rpb25WYWx1ZSAvIDIpIC8gdGhpcy50b3RhbFdyb25nQW5zd2VycztcbiAgICByZXR1cm4gdGhpcy5xdWVzdGlvblZhbHVlIC0gKHdyb25nR3Vlc3NWYWx1ZSAqIHRoaXMud3JvbmdHdWVzc2VzKTtcbiAgfTtcblxuICBRdWVzdGlvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRub2RlLnJlbW92ZSgpO1xuICB9O1xuXG4gIHJldHVybiBRdWVzdGlvbjtcblxufSkoKTtcbiIsInZhciBDb21wb25lbnQsIFF1ZXN0aW9uLCBRdWl6LCBTZXF1ZW5jZSxcbiAgYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH0sXG4gIGV4dGVuZCA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoaGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfSxcbiAgaGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5Db21wb25lbnQgPSByZXF1aXJlKCdzbGlkZS11eC9jb21wb25lbnRzL2NvbXBvbmVudCcpO1xuXG5RdWVzdGlvbiA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvcXVpei9xdWVzdGlvbicpO1xuXG5TZXF1ZW5jZSA9IHJlcXVpcmUoJ21pc2Mvc2VxdWVuY2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBRdWl6ID0gKGZ1bmN0aW9uKHN1cGVyQ2xhc3MpIHtcbiAgZXh0ZW5kKFF1aXosIHN1cGVyQ2xhc3MpO1xuXG4gIGZ1bmN0aW9uIFF1aXooJGVsMSwgZGF0YTEpIHtcbiAgICB0aGlzLiRlbCA9ICRlbDE7XG4gICAgdGhpcy5kYXRhID0gZGF0YTE7XG4gICAgdGhpcy5vbk5leHRDbGljayA9IGJpbmQodGhpcy5vbk5leHRDbGljaywgdGhpcyk7XG4gICAgdGhpcy5vblF1ZXN0aW9uQW5zd2VyZWQgPSBiaW5kKHRoaXMub25RdWVzdGlvbkFuc3dlcmVkLCB0aGlzKTtcbiAgICBRdWl6Ll9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIHRoaXMuZGF0YSk7XG4gICAgUHViU3ViLnB1Ymxpc2goXCJjaHJvbWUuaGlkZVwiKTtcbiAgICBQdWJTdWIucHVibGlzaChcImN0YW5sZWUuaGlkZVwiKTtcbiAgICB0aGlzLmJ1aWxkKHRoaXMuZGF0YSk7XG4gICAgdGhpcy5zdXBlckluaXQodGhpcy4kZWwsIHRoaXMuJG5vZGUsIHRoaXMuZGF0YSk7XG4gIH1cblxuICBRdWl6LnByb3RvdHlwZS5idWlsZCA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB0aGlzLiRub2RlID0gJChqYWRlVGVtcGxhdGVbJ3NsaWRlLXV4L2NvbXBvbmVudHMvcXVpei9xdWl6J10oZGF0YSkpO1xuICAgIHRoaXMuY3JlYXRlUXVpeigkKFwiLnF1ZXN0aW9uc1wiLCB0aGlzLiRub2RlKSwgZGF0YSk7XG4gICAgdGhpcy4kbmV4dEJ0biA9ICQoXCIubmV4dC1idG5cIiwgdGhpcy4kbm9kZSk7XG4gICAgdGhpcy4kbmV4dEJ0bi5vbihcImNsaWNrXCIsIHRoaXMub25OZXh0Q2xpY2spO1xuICAgIHJldHVybiB0aGlzLmhpZGVOZXh0KCk7XG4gIH07XG5cbiAgUXVpei5wcm90b3R5cGUuY3JlYXRlUXVpeiA9IGZ1bmN0aW9uKCRlbCwgZGF0YSkge1xuICAgIHZhciBpLCBqLCBsZW4xLCBxdWVzdGlvbkRhdGEsIHF1ZXN0aW9uVmFsdWUsIHF1ZXN0aW9ucywgcmVmO1xuICAgIFB1YlN1Yi5wdWJsaXNoKCdtZXRhLnF1aXouc3RhcnQnKTtcbiAgICBxdWVzdGlvbnMgPSBbXTtcbiAgICBxdWVzdGlvblZhbHVlID0gMTIwO1xuICAgIHJlZiA9IGRhdGEucXVlc3Rpb25zO1xuICAgIGZvciAoaSA9IGogPSAwLCBsZW4xID0gcmVmLmxlbmd0aDsgaiA8IGxlbjE7IGkgPSArK2opIHtcbiAgICAgIHF1ZXN0aW9uRGF0YSA9IHJlZltpXTtcbiAgICAgIHF1ZXN0aW9uRGF0YS5pbmRleCA9IGk7XG4gICAgICBxdWVzdGlvbnMucHVzaChuZXcgUXVlc3Rpb24oJGVsLCBxdWVzdGlvbkRhdGEsIHF1ZXN0aW9uVmFsdWUsIHRoaXMub25RdWVzdGlvbkFuc3dlcmVkKSk7XG4gICAgfVxuICAgIHRoaXMucXVlc3Rpb25zID0gbmV3IFNlcXVlbmNlKHF1ZXN0aW9ucyk7XG4gICAgcmV0dXJuIHRoaXMuc2hvd0N1cnJlbnRRdWVzdGlvbigpO1xuICB9O1xuXG4gIFF1aXoucHJvdG90eXBlLnNob3dDdXJyZW50UXVlc3Rpb24gPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmN1cnJlbnRRdWVzdGlvbiA9IHRoaXMucXVlc3Rpb25zLmN1cnJlbnRJdGVtKCk7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudFF1ZXN0aW9uLmJ1aWxkKCk7XG4gIH07XG5cbiAgUXVpei5wcm90b3R5cGUub25RdWVzdGlvbkFuc3dlcmVkID0gZnVuY3Rpb24oZ290SXRSaWdodCkge1xuICAgIGlmIChnb3RJdFJpZ2h0KSB7XG4gICAgICByZXR1cm4gdGhpcy5zaG93TmV4dCgpO1xuICAgIH1cbiAgfTtcblxuICBRdWl6LnByb3RvdHlwZS5vbk5leHRDbGljayA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaGlkZU5leHQoKTtcbiAgICB0aGlzLmN1cnJlbnRRdWVzdGlvbi5kZXN0cm95KCk7XG4gICAgaWYgKHRoaXMucXVlc3Rpb25zLmlzQXRMYXN0SXRlbSgpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zaG93UmVzdWx0cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnF1ZXN0aW9ucy5uZXh0KCk7XG4gICAgICByZXR1cm4gdGhpcy5zaG93Q3VycmVudFF1ZXN0aW9uKCk7XG4gICAgfVxuICB9O1xuXG4gIFF1aXoucHJvdG90eXBlLnNob3dOZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJG5leHRCdG4ucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7XG4gIH07XG5cbiAgUXVpei5wcm90b3R5cGUuaGlkZU5leHQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kbmV4dEJ0bi5hZGRDbGFzcyhcImhpZGRlblwiKTtcbiAgfTtcblxuICBRdWl6LnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuJG5vZGUucmVtb3ZlKCk7XG4gICAgdGhpcy5idWlsZCh0aGlzLmRhdGEpO1xuICAgIHRoaXMuJGVsLmFwcGVuZCh0aGlzLiRub2RlKTtcbiAgICByZXR1cm4gc2hhZG93SWNvbnNJbnN0YW5jZS5zdmdSZXBsYWNlV2l0aFN0cmluZyhweFN2Z0ljb25TdHJpbmcsIHRoaXMuJG5vZGUpO1xuICB9O1xuXG4gIFF1aXoucHJvdG90eXBlLnNob3dSZXN1bHRzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGRhdGE7XG4gICAgUHViU3ViLnB1Ymxpc2goJ21ldGEucXVpei5maW5pc2gnKTtcbiAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ2JvZHktcXVpei1yZXN1bHRzJyk7XG4gICAgdGhpcy4kbm9kZS5yZW1vdmUoKTtcbiAgICBkYXRhID0gdGhpcy5nZXRSZXN1bHRzKCk7XG4gICAgdGhpcy4kbm9kZSA9ICQoamFkZVRlbXBsYXRlWydzbGlkZS11eC9jb21wb25lbnRzL3F1aXovcXVpei1yZXN1bHRzJ10odGhpcy5nZXRSZXN1bHRzKCkpKTtcbiAgICBzaGFkb3dJY29uc0luc3RhbmNlLnN2Z1JlcGxhY2VXaXRoU3RyaW5nKHB4U3ZnSWNvblN0cmluZywgdGhpcy4kbm9kZSk7XG4gICAgJChcIiNjb250aW51ZVwiLCB0aGlzLiRub2RlKS5vbihcImNsaWNrXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2JvZHktcXVpei1yZXN1bHRzJyk7XG4gICAgICAgIHJldHVybiBQdWJTdWIucHVibGlzaCgnc2xpZGVzLm5leHQtc2xpZGUnKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHJldHVybiB0aGlzLiRlbC5hcHBlbmQodGhpcy4kbm9kZSk7XG4gIH07XG5cbiAgUXVpei5wcm90b3R5cGUuZ2V0UmVzdWx0cyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhbnN3ZXJzLCBqLCBsZW4xLCBvYmosIHF1ZXN0aW9uLCByZWYsIHJlZjEsIHRvdGFsUG9pbnRzRWFybmVkLCB0b3RhbFBvaW50c1Bvc3NpYmxlO1xuICAgIG9iaiA9IHt9O1xuICAgIG9iai5lcGlzb2RlTnVtYmVyID0gMjtcbiAgICB0b3RhbFBvaW50c1Bvc3NpYmxlID0gMDtcbiAgICB0b3RhbFBvaW50c0Vhcm5lZCA9IDA7XG4gICAgYW5zd2VycyA9IFtdO1xuICAgIHJlZiA9IHRoaXMucXVlc3Rpb25zLml0ZW1zO1xuICAgIGZvciAoaiA9IDAsIGxlbjEgPSByZWYubGVuZ3RoOyBqIDwgbGVuMTsgaisrKSB7XG4gICAgICBxdWVzdGlvbiA9IHJlZltqXTtcbiAgICAgIHRvdGFsUG9pbnRzUG9zc2libGUgKz0gcXVlc3Rpb24ucXVlc3Rpb25WYWx1ZTtcbiAgICAgIHRvdGFsUG9pbnRzRWFybmVkICs9IHF1ZXN0aW9uLnBvaW50c0Vhcm5lZCgpO1xuICAgICAgYW5zd2Vycy5wdXNoKHtcbiAgICAgICAgbmFtZTogcXVlc3Rpb24uZ2V0TmFtZSgpLFxuICAgICAgICBzY29yZTogcXVlc3Rpb24uZ2V0U2NvcmUoKSxcbiAgICAgICAgaXNQZXJmZWN0OiBxdWVzdGlvbi5pc1BlcmZlY3QoKVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJlZjEgPSB0aGlzLnNwbGl0QXJyYXlJbkhhbGYoYW5zd2VycyksIG9iai5hbnN3ZXJzMSA9IHJlZjFbMF0sIG9iai5hbnN3ZXJzMiA9IHJlZjFbMV07XG4gICAgb2JqLnNjb3JlID0gdG90YWxQb2ludHNFYXJuZWQgKyBcIiAvIFwiICsgdG90YWxQb2ludHNQb3NzaWJsZTtcbiAgICBvYmouc2NvcmVQZXJjZW50YWdlID0gKHRvdGFsUG9pbnRzRWFybmVkIC8gdG90YWxQb2ludHNQb3NzaWJsZSkgKiAxMDA7XG4gICAgb2JqLmRlY2lzaW9ucyA9IFtcbiAgICAgIHtcbiAgICAgICAgcG9wdWxhclBlcmNlbnRhZ2U6IDQ5LFxuICAgICAgICBjaG9pY2U6IFwiQ29vbCBidWlsZGluZ1wiLFxuICAgICAgICBjYXRlZ29yeTogXCJQaHlzaWNhbCBBY2Nlc3MgQ29udHJvbCBTeXN0ZW1cIlxuICAgICAgfSwge1xuICAgICAgICBwb3B1bGFyUGVyY2VudGFnZTogNTMsXG4gICAgICAgIGNob2ljZTogXCJEb2cgSG91c2VcIixcbiAgICAgICAgY2F0ZWdvcnk6IFwiUGV0IExvZGdpbmdcIlxuICAgICAgfSwge1xuICAgICAgICBwb3B1bGFyUGVyY2VudGFnZTogMjMsXG4gICAgICAgIGNob2ljZTogXCJIb3NwaXRhbFwiLFxuICAgICAgICBjYXRlZ29yeTogXCJQdWJsaWMgU2VydmljZSBCdWlsZGluZ1wiXG4gICAgICB9XG4gICAgXTtcbiAgICByZXR1cm4gb2JqO1xuICB9O1xuXG4gIFF1aXoucHJvdG90eXBlLnNwbGl0QXJyYXlJbkhhbGYgPSBmdW5jdGlvbihhcikge1xuICAgIHZhciBsZW47XG4gICAgbGVuID0gTWF0aC5jZWlsKGFyLmxlbmd0aCAvIDIpO1xuICAgIHJldHVybiBbYXIuc2xpY2UoMCwgbGVuKSwgYXIuc2xpY2UobGVuKV07XG4gIH07XG5cbiAgcmV0dXJuIFF1aXo7XG5cbn0pKENvbXBvbmVudCk7XG4iLCJ2YXIgQ29tcG9uZW50LCBTZWxlY3Rpb25EaWFsb2d1ZSxcbiAgZXh0ZW5kID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChoYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9LFxuICBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbkNvbXBvbmVudCA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvY29tcG9uZW50Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2VsZWN0aW9uRGlhbG9ndWUgPSAoZnVuY3Rpb24oc3VwZXJDbGFzcykge1xuICBleHRlbmQoU2VsZWN0aW9uRGlhbG9ndWUsIHN1cGVyQ2xhc3MpO1xuXG4gIGZ1bmN0aW9uIFNlbGVjdGlvbkRpYWxvZ3VlKCRlbCwgZGF0YSkge1xuICAgIHZhciAkcmlnaHQsIGphZGVEYXRhO1xuICAgIFNlbGVjdGlvbkRpYWxvZ3VlLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIGRhdGEpO1xuICAgIGlmIChkYXRhLm1ldGEgPT0gbnVsbCkge1xuICAgICAgYXJpc3RvdGxlW1widGhyb3dcIl0oXCJTZWxlY3Rpb24gZGlhbG9ndWUgZG9lc24ndCBoYXZlIGFueSBtZXRhIGRhdGEhXCIpO1xuICAgIH1cbiAgICB0aGlzLiRub2RlID0gJChqYWRlVGVtcGxhdGVbJ3NsaWRlLXV4L2NvbXBvbmVudHMvZGlhbG9ndWUvc2VsZWN0aW9uLWRpYWxvZ3VlJ10oKSk7XG4gICAgamFkZURhdGEgPSB0aGlzLmdlbmVyYXRlQ29uZmlnRGF0YShkYXRhKTtcbiAgICB0aGlzLiRsZWZ0ID0gJChqYWRlVGVtcGxhdGVbJ3NsaWRlLXV4L2NvbXBvbmVudHMvZGlhbG9ndWUvZGlhbG9ndWUtZGV0YWlscyddKGphZGVEYXRhKSk7XG4gICAgJHJpZ2h0ID0gJChqYWRlVGVtcGxhdGVbJ3NsaWRlLXV4L2NvbXBvbmVudHMvZGlhbG9ndWUvZGlhbG9ndWUtYnV0dG9ucyddKGphZGVEYXRhKSk7XG4gICAgdGhpcy4kbGVmdC5hZGRDbGFzcyhcImhpZGRlblwiKTtcbiAgICB0aGlzLiRub2RlLmFwcGVuZCh0aGlzLiRsZWZ0KTtcbiAgICB0aGlzLiRub2RlLmFwcGVuZCgkcmlnaHQpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnModGhpcy4kbm9kZSwgZGF0YSk7XG4gICAgdGhpcy5tZXRhVGl0bGUgPSBkYXRhLm1ldGEudGl0bGU7XG4gICAgaWYgKHRoaXMubWV0YVRpdGxlID09PSAnZmFrZScpIHtcbiAgICAgIHRoaXMuJG5vZGUuY3NzKHtcbiAgICAgICAgXCJwb2ludGVyLWV2ZW50c1wiOiBcIm5vbmVcIlxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIFB1YlN1Yi5wdWJsaXNoKCdtZXRhLmNob2ljZS5zdGFydCcsIHtcbiAgICAgICAgaWQ6IGRhdGEubWV0YS50aXRsZVxuICAgICAgfSk7XG4gICAgfVxuICAgIHRoaXMuc3VwZXJJbml0KCRlbCwgdGhpcy4kbm9kZSwgZGF0YSk7XG4gIH1cblxuICBTZWxlY3Rpb25EaWFsb2d1ZS5wcm90b3R5cGUuZ2VuZXJhdGVDb25maWdEYXRhID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciBpLCBpdGVtLCBqLCBqYWRlRGF0YSwgbGVuLCByZWY7XG4gICAgdGhpcy5pdGVtcyA9IHt9O1xuICAgIGphZGVEYXRhID0ge307XG4gICAgamFkZURhdGEudGl0bGUgPSBkYXRhLnRpdGxlO1xuICAgIGphZGVEYXRhLnN1YlRpdGxlID0gZGF0YS5zdWJUaXRsZTtcbiAgICBqYWRlRGF0YS5idG5UeHQgPSBkYXRhLnN1Ym1pdEJ0bi50eHQ7XG4gICAgamFkZURhdGEuYnRuSWNvbiA9IGRhdGEuc3VibWl0QnRuLmljb247XG4gICAgamFkZURhdGEuaW50cm8gPSBkYXRhLmludHJvO1xuICAgIGphZGVEYXRhLml0ZW1zID0gW107XG4gICAgcmVmID0gZGF0YS5pdGVtcztcbiAgICBmb3IgKGkgPSBqID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaiA8IGxlbjsgaSA9ICsraikge1xuICAgICAgaXRlbSA9IHJlZltpXTtcbiAgICAgIGl0ZW0uaWQgPSBcIml0ZW1cIiArIGk7XG4gICAgICBqYWRlRGF0YS5pdGVtcy5wdXNoKHtcbiAgICAgICAgdHh0OiBpdGVtLmJ0blR4dCxcbiAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgIGljb246IGl0ZW0uaWNvblxuICAgICAgfSk7XG4gICAgICB0aGlzLml0ZW1zW2l0ZW0uaWRdID0gaXRlbTtcbiAgICB9XG4gICAgcmV0dXJuIGphZGVEYXRhO1xuICB9O1xuXG4gIFNlbGVjdGlvbkRpYWxvZ3VlLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVycyA9IGZ1bmN0aW9uKCRlbCwgZGF0YSkge1xuICAgIHZhciAkYnV0dG9ucztcbiAgICAkYnV0dG9ucyA9ICQoXCIuYnV0dG9uXCIsICRlbCk7XG4gICAgJGJ1dHRvbnMub24oXCJjbGlja1wiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICAgIHZhciAkdGFyZztcbiAgICAgICAgJHRhcmcgPSAkKGUuY3VycmVudFRhcmdldCk7XG4gICAgICAgIHJldHVybiBfdGhpcy5hY3RpdmF0ZUl0ZW0oJHRhcmcsIF90aGlzLml0ZW1zWyR0YXJnLmF0dHIoJ2lkJyldKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHJldHVybiAkKFwiI2FjdGlvbi1idG5cIiwgJGVsKS5vbihcImNsaWNrXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgYXJpc3RvdGxlLmNvbW1hbmRlcltcImRvXCJdKGRhdGEuY2xpY2spO1xuICAgICAgICBQdWJTdWIucHVibGlzaCgnbWV0YS5jaG9pY2UuZmluaXNoJywge1xuICAgICAgICAgIGlkOiBkYXRhLm1ldGEudGl0bGUsXG4gICAgICAgICAgY2hvaWNlOiBhcmlzdG90bGUuZGljdGlvbmFyeS5nZXQoYXJpc3RvdGxlLmdsb2JhbHMuZ2V0KGRhdGEubWV0YS5jaG9pY2UpKVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIF90aGlzLmRlc3Ryb3koKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9O1xuXG4gIFNlbGVjdGlvbkRpYWxvZ3VlLnByb3RvdHlwZS5hY3RpdmF0ZUl0ZW0gPSBmdW5jdGlvbigkYnV0dG9uLCBpdGVtKSB7XG4gICAgaWYgKHRoaXMuYWN0aXZlSXRlbSA9PT0gaXRlbS5idG5UeHQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5hY3RpdmVJdGVtID0gaXRlbS5idG5UeHQ7XG4gICAgUHViU3ViLnB1Ymxpc2goJ21ldGEuYWN0aXZpdHknLCB7XG4gICAgICBhY3Rpdml0eTogXCJDbGljayBcIiArIGl0ZW0uYnRuVHh0LFxuICAgICAgaWQ6IHRoaXMubWV0YVRpdGxlXG4gICAgfSk7XG4gICAgdGhpcy4kbGVmdC5yZW1vdmVDbGFzcyhcImhpZGRlblwiKTtcbiAgICAkKFwiLml0ZW0taW5mb1wiLCB0aGlzLiRub2RlKS5jc3Moe1xuICAgICAgZGlzcGxheTogXCJibG9ja1wiXG4gICAgfSk7XG4gICAgJChcIi5idXR0b25cIiwgdGhpcy4kbm9kZSkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgJGJ1dHRvbi5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAkKFwiLmljb25cIiwgdGhpcy4kbm9kZSkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgJChcIiNpY29uLVwiICsgaXRlbS5pZCwgdGhpcy4kbm9kZSkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgJChcIi5ibHVyYlwiLCB0aGlzLiRub2RlKS5odG1sKGl0ZW0uYmx1cmIpO1xuICAgICQoXCIuZGV0YWlsc1wiLCB0aGlzLiRub2RlKS5odG1sKGl0ZW0uZGV0YWlscyk7XG4gICAgcmV0dXJuIGFyaXN0b3RsZS5jb21tYW5kZXJbXCJkb1wiXShpdGVtLmNsaWNrKTtcbiAgfTtcblxuICByZXR1cm4gU2VsZWN0aW9uRGlhbG9ndWU7XG5cbn0pKENvbXBvbmVudCk7XG4iLCJ2YXIgQ29tcG9uZW50LCBTaW1wbGVTZWxlY3Rpb24sXG4gIGV4dGVuZCA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoaGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfSxcbiAgaGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5Db21wb25lbnQgPSByZXF1aXJlKCdzbGlkZS11eC9jb21wb25lbnRzL2NvbXBvbmVudCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNpbXBsZVNlbGVjdGlvbiA9IChmdW5jdGlvbihzdXBlckNsYXNzKSB7XG4gIGV4dGVuZChTaW1wbGVTZWxlY3Rpb24sIHN1cGVyQ2xhc3MpO1xuXG4gIGZ1bmN0aW9uIFNpbXBsZVNlbGVjdGlvbigkZWwsIGRhdGEpIHtcbiAgICB2YXIgJHJpZ2h0LCBqYWRlRGF0YTtcbiAgICBTaW1wbGVTZWxlY3Rpb24uX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgZGF0YSk7XG4gICAgamFkZURhdGEgPSB0aGlzLmdlbmVyYXRlQ29uZmlnRGF0YShkYXRhKTtcbiAgICB0aGlzLiRub2RlID0gJChqYWRlVGVtcGxhdGVbJ3NsaWRlLXV4L2NvbXBvbmVudHMvZGlhbG9ndWUvc2VsZWN0aW9uLWRpYWxvZ3VlJ10oKSk7XG4gICAgJHJpZ2h0ID0gJChqYWRlVGVtcGxhdGVbJ3NsaWRlLXV4L2NvbXBvbmVudHMvZGlhbG9ndWUvZGlhbG9ndWUtYnV0dG9ucyddKGphZGVEYXRhKSk7XG4gICAgdGhpcy4kbm9kZS5hcHBlbmQoJHJpZ2h0KTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKHRoaXMuJG5vZGUsIGRhdGEpO1xuICAgIHRoaXMuc3VwZXJJbml0KCRlbCwgdGhpcy4kbm9kZSwgZGF0YSk7XG4gIH1cblxuICBTaW1wbGVTZWxlY3Rpb24ucHJvdG90eXBlLmdlbmVyYXRlQ29uZmlnRGF0YSA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2YXIgaSwgaXRlbSwgaiwgamFkZURhdGEsIGxlbiwgcmVmO1xuICAgIHRoaXMuaXRlbXMgPSB7fTtcbiAgICBqYWRlRGF0YSA9IHt9O1xuICAgIGphZGVEYXRhLml0ZW1zID0gW107XG4gICAgamFkZURhdGEudGl0bGUgPSBkYXRhLnRpdGxlO1xuICAgIGphZGVEYXRhLnN1YlRpdGxlID0gZGF0YS5zdWJUaXRsZTtcbiAgICByZWYgPSBkYXRhLml0ZW1zO1xuICAgIGZvciAoaSA9IGogPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBqIDwgbGVuOyBpID0gKytqKSB7XG4gICAgICBpdGVtID0gcmVmW2ldO1xuICAgICAgaXRlbS5pZCA9IFwiaXRlbVwiICsgaTtcbiAgICAgIGphZGVEYXRhLml0ZW1zLnB1c2goe1xuICAgICAgICB0eHQ6IGl0ZW0uYnRuVHh0LFxuICAgICAgICBpZDogaXRlbS5pZFxuICAgICAgfSk7XG4gICAgICB0aGlzLml0ZW1zW2l0ZW0uaWRdID0gaXRlbTtcbiAgICB9XG4gICAgcmV0dXJuIGphZGVEYXRhO1xuICB9O1xuXG4gIFNpbXBsZVNlbGVjdGlvbi5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbigkZWwsIGRhdGEpIHtcbiAgICB2YXIgJGJ1dHRvbnM7XG4gICAgJGJ1dHRvbnMgPSAkKFwiLmJ1dHRvblwiLCAkZWwpO1xuICAgIHJldHVybiAkYnV0dG9ucy5vbihcImNsaWNrXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdmFyICR0YXJnO1xuICAgICAgICAkdGFyZyA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgZGF0YSA9IF90aGlzLml0ZW1zWyR0YXJnLmF0dHIoJ2lkJyldO1xuICAgICAgICByZXR1cm4gYXJpc3RvdGxlLmNvbW1hbmRlcltcImRvXCJdKGRhdGEuY2xpY2spO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH07XG5cbiAgcmV0dXJuIFNpbXBsZVNlbGVjdGlvbjtcblxufSkoQ29tcG9uZW50KTtcbiIsInZhciBDb21wb25lbnQsIFNvdW5kVGVzdCxcbiAgZXh0ZW5kID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChoYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9LFxuICBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbkNvbXBvbmVudCA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvY29tcG9uZW50Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gU291bmRUZXN0ID0gKGZ1bmN0aW9uKHN1cGVyQ2xhc3MpIHtcbiAgZXh0ZW5kKFNvdW5kVGVzdCwgc3VwZXJDbGFzcyk7XG5cbiAgZnVuY3Rpb24gU291bmRUZXN0KCRlbCwgZGF0YSkge1xuICAgIFNvdW5kVGVzdC5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCBkYXRhKTtcbiAgICB0aGlzLiRub2RlID0gJChqYWRlVGVtcGxhdGVbJ3NsaWRlLXV4L2NvbXBvbmVudHMvc291bmQtdGVzdCddKGRhdGEpKTtcbiAgICB0aGlzLnN1cGVySW5pdCgkZWwsIHRoaXMuJG5vZGUsIGRhdGEpO1xuICAgIHRoaXMuc291bmRMaXN0ZW4gPSBQdWJTdWIuc3Vic2NyaWJlKCdwbGF5c291bmQnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBQdWJTdWIucHVibGlzaCgnbWV0YS5hY3Rpdml0eScsIHtcbiAgICAgICAgICBhY3Rpdml0eTogXCJQbGF5IFRlc3QgU291bmRcIlxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9XG5cbiAgU291bmRUZXN0LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgUHViU3ViLnVuc3Vic2NyaWJlKHRoaXMuc291bmRMaXN0ZW4pO1xuICAgIHJldHVybiBTb3VuZFRlc3QuX19zdXBlcl9fLmRlc3Ryb3kuY2FsbCh0aGlzKTtcbiAgfTtcblxuICByZXR1cm4gU291bmRUZXN0O1xuXG59KShDb21wb25lbnQpO1xuIiwidmFyIENsb3NlZENhcHRpb247XG5cbm1vZHVsZS5leHBvcnRzID0gQ2xvc2VkQ2FwdGlvbiA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gQ2xvc2VkQ2FwdGlvbigkcGFyZW50LCBwbGF5TmV4dEFjdGlvbikge1xuICAgIHRoaXMucGxheU5leHRBY3Rpb24gPSBwbGF5TmV4dEFjdGlvbjtcbiAgICB0aGlzLmNjSXNPbiA9IHRydWU7XG4gICAgdGhpcy4kZWwgPSAkKGphZGVUZW1wbGF0ZVsnc2xpZGUtdXgvdGV4dC1kaWFsb2d1ZS9jbG9zZWQtY2FwdGlvbiddKHt9KSk7XG4gICAgJHBhcmVudC5hcHBlbmQodGhpcy4kZWwpO1xuICAgIHNoYWRvd0ljb25zSW5zdGFuY2Uuc3ZnUmVwbGFjZVdpdGhTdHJpbmcocHhTdmdJY29uU3RyaW5nLCB0aGlzLiRlbCk7XG4gICAgdGhpcy5jY0Rpc3BsYXkgPSAkKFwiLmNsb3NlZC1jYXB0aW9uXCIsIHRoaXMuJGVsKTtcbiAgICB0aGlzLmNjRGlzcGxheS5jc3Moe1xuICAgICAgZGlzcGxheTogJ25vbmUnXG4gICAgfSk7XG4gICAgdGhpcy4kc3BlZWNoQm94ID0gJChcIi50ZXh0XCIsIHRoaXMuJGVsKTtcbiAgICB0aGlzLmhpZGVUZXh0KCk7XG4gICAgdGhpcy4kaWNvbiA9ICQoXCIuY2xvc2VkLWNhcHRpb24taWNvblwiKTtcbiAgICB0aGlzLiRpY29uLm9uKCdjbGljaycsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnRvZ2dsZUNsb3NlZENhcHRpb25pbmcoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9XG5cbiAgQ2xvc2VkQ2FwdGlvbi5wcm90b3R5cGUudG9nZ2xlQ2xvc2VkQ2FwdGlvbmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmNjSXNPbikge1xuICAgICAgdGhpcy5jY0lzT24gPSBmYWxzZTtcbiAgICAgIHRoaXMuY2NEaXNwbGF5LmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICAgIHJldHVybiB0aGlzLiRpY29uLmFkZENsYXNzKCdvZmYnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jY0lzT24gPSB0cnVlO1xuICAgICAgdGhpcy5jY0Rpc3BsYXkucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgICAgcmV0dXJuIHRoaXMuJGljb24ucmVtb3ZlQ2xhc3MoJ29mZicpO1xuICAgIH1cbiAgfTtcblxuICBDbG9zZWRDYXB0aW9uLnByb3RvdHlwZS5zYXkgPSBmdW5jdGlvbih0ZXh0LCB0eHRQb3MpIHtcbiAgICB0aGlzLnNob3dUZXh0KCk7XG4gICAgcmV0dXJuIHRoaXMuJHNwZWVjaEJveC5odG1sKFwiPGRpdiBjbGFzcz0nXCIgKyB0aGlzLmNoYXJhY3RlciArIFwiJz48c3Bhbj5cIiArIHRoaXMuY2hhcmFjdGVyICsgXCI8L3NwYW4+XCIgKyB0ZXh0ICsgXCI8L2Rpdj5cIik7XG4gIH07XG5cbiAgQ2xvc2VkQ2FwdGlvbi5wcm90b3R5cGUuc3BlY2lhbCA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBpZiAoZGF0YS5hY3RvciAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5jaGFyYWN0ZXIgPSBkYXRhLmFjdG9yO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5jaGFyYWN0ZXIgPSAnY3RhbmxlZSc7XG4gICAgfVxuICB9O1xuXG4gIENsb3NlZENhcHRpb24ucHJvdG90eXBlLnNob3dUZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY2NEaXNwbGF5LmZhZGVJbigpO1xuICB9O1xuXG4gIENsb3NlZENhcHRpb24ucHJvdG90eXBlLmhpZGVUZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY2NEaXNwbGF5LmZhZGVPdXQoKTtcbiAgfTtcblxuICBDbG9zZWRDYXB0aW9uLnByb3RvdHlwZS5zaG93TmV4dCA9IGZ1bmN0aW9uKCkge307XG5cbiAgQ2xvc2VkQ2FwdGlvbi5wcm90b3R5cGUuaGlkZU5leHQgPSBmdW5jdGlvbigpIHt9O1xuXG4gIENsb3NlZENhcHRpb24ucHJvdG90eXBlLnN0YXJ0VGFsa2luZyA9IGZ1bmN0aW9uKCkge307XG5cbiAgQ2xvc2VkQ2FwdGlvbi5wcm90b3R5cGUuc3RvcFRhbGtpbmcgPSBmdW5jdGlvbigpIHt9O1xuXG4gIENsb3NlZENhcHRpb24ucHJvdG90eXBlLmNvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2xlZXAoKTtcbiAgfTtcblxuICBDbG9zZWRDYXB0aW9uLnByb3RvdHlwZS5zbGVlcCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmhpZGVUZXh0KCk7XG4gIH07XG5cbiAgQ2xvc2VkQ2FwdGlvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge307XG5cbiAgcmV0dXJuIENsb3NlZENhcHRpb247XG5cbn0pKCk7XG4iLCJ2YXIgQW5pbWF0aW9uLCBDdGFubGVlO1xuXG5BbmltYXRpb24gPSByZXF1aXJlKCdtb3ZpZS9zdmctYW5pbWF0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ3RhbmxlZSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gQ3RhbmxlZSgkcGFyZW50LCBwbGF5TmV4dEFjdGlvbikge1xuICAgIHZhciB0b2tlbjEsIHRva2VuMiwgdG9rZW4zLCB0b2tlbjQ7XG4gICAgdGhpcy5wbGF5TmV4dEFjdGlvbiA9IHBsYXlOZXh0QWN0aW9uO1xuICAgIHRoaXMuJGVsID0gJChqYWRlVGVtcGxhdGVbJ3NsaWRlLXV4L3RleHQtZGlhbG9ndWUvY3RhbmxlZSddKHt9KSk7XG4gICAgc2hhZG93SWNvbnNJbnN0YW5jZS5zdmdSZXBsYWNlV2l0aFN0cmluZyhweFN2Z0ljb25TdHJpbmcsIHRoaXMuJGVsKTtcbiAgICB0aGlzLiRzcGVlY2hCb3ggPSAkKFwiLnNwZWVjaC1ib3hcIiwgdGhpcy4kZWwpO1xuICAgIHRoaXMuJHRleHQgPSAkKFwiLnRleHRcIiwgdGhpcy4kc3BlZWNoQm94KTtcbiAgICB0aGlzLiR0ZXh0Q29udGVudCA9ICQoXCJzcGFuLmNvbnRlbnRcIiwgdGhpcy4kdGV4dCk7XG4gICAgdGhpcy4kbmV4dEJ0biA9ICQoXCJzcGFuLm5leHRcIiwgdGhpcy4kdGV4dCk7XG4gICAgdGhpcy4kZmFjZUhvbGRlciA9ICQoXCIuZmFjZVwiLCB0aGlzLiRlbCk7XG4gICAgdGhpcy4kbmV4dEJ0bi5vbihcImNsaWNrXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnBsYXlOZXh0QWN0aW9uKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0b2tlbjEgPSBQdWJTdWIuc3Vic2NyaWJlKCdjdGFubGVlLmhpZGUnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihhLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy4kZWwuYWRkQ2xhc3MoXCJoaWRkZW5cIik7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0b2tlbjIgPSBQdWJTdWIuc3Vic2NyaWJlKCdjdGFubGVlLnNob3cnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihhLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy4kZWwucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0b2tlbjMgPSBQdWJTdWIuc3Vic2NyaWJlKCdjdGFubGVlLmNsZWFyJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oYSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuaGlkZVRleHQoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRva2VuNCA9IFB1YlN1Yi5zdWJzY3JpYmUoJ2N0YW5sZWUuZ29ob21lJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oYSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMucmV0dXJuVG9TdGF0aW9uKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0aGlzLnRva2VucyA9IFt0b2tlbjEsIHRva2VuMiwgdG9rZW4zLCB0b2tlbjRdO1xuICAgICRwYXJlbnQuYXBwZW5kKHRoaXMuJGVsKTtcbiAgICB0aGlzLnJldHVyblRvU3RhdGlvbigpO1xuICB9XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUuc2F5ID0gZnVuY3Rpb24odGV4dCwgdHh0UG9zLCBwb3MpIHtcbiAgICB0aGlzLnNob3dUZXh0KCk7XG4gICAgdGhpcy4kdGV4dENvbnRlbnQuaHRtbCh0ZXh0KTtcbiAgICByZXR1cm4gdGhpcy5zZXRUZXh0UG9zaXRpb24odHh0UG9zKTtcbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5zdGFydFRhbGtpbmcgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmlzVGFsa2luZyA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXMuYm91bmNlKCk7XG4gIH07XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUuc3RvcFRhbGtpbmcgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmlzVGFsa2luZyA9IGZhbHNlO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpO1xuICAgIHRoaXMuJGN1cnJlbnRBbmltYXRpb24uc3RvcCh0cnVlKTtcbiAgICByZXR1cm4gdGhpcy4kY3VycmVudEFuaW1hdGlvbi52ZWxvY2l0eSh7XG4gICAgICBzY2FsZTogMVxuICAgIH0sIHtcbiAgICAgIGR1cmF0aW9uOiAzMDAsXG4gICAgICBlYXNpbmc6ICdlYXNlaW5vdXRxdWludCdcbiAgICB9KTtcbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5ib3VuY2UgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZHVyYXRpb24sIHRpbW91dER1cjtcbiAgICBkdXJhdGlvbiA9IDUwMCArIE1hdGgucmFuZG9tKCkgKiAzMDA7XG4gICAgdGltb3V0RHVyID0gZHVyYXRpb24gKiAoTWF0aC5yYW5kb20oKSAvIDEuMyk7XG4gICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjgpIHtcbiAgICAgIHRpbW91dER1ciArPSA2MDA7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc2NhbGU7XG4gICAgICAgIHNjYWxlID0gMC44ICsgKE1hdGgucmFuZG9tKCkgLyAzKTtcbiAgICAgICAgX3RoaXMuJGN1cnJlbnRBbmltYXRpb24uc3RvcCh0cnVlKTtcbiAgICAgICAgX3RoaXMuJGN1cnJlbnRBbmltYXRpb24uY3NzKHtcbiAgICAgICAgICB0cmFuc2Zvcm06IFwic2NhbGUoXCIgKyBzY2FsZSArIFwiKVwiXG4gICAgICAgIH0pO1xuICAgICAgICBfdGhpcy4kY3VycmVudEFuaW1hdGlvbi52ZWxvY2l0eSh7XG4gICAgICAgICAgc2NhbGU6IHNjYWxlXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBkdXJhdGlvbjogMFxuICAgICAgICB9KTtcbiAgICAgICAgX3RoaXMuJGN1cnJlbnRBbmltYXRpb24udmVsb2NpdHkoe1xuICAgICAgICAgIHNjYWxlOiAxXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBkZWxheTogMTAsXG4gICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICAgIGVhc2luZzogWzUwMCwgMTVdXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoX3RoaXMuaXNUYWxraW5nKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLmJvdW5jZSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pKHRoaXMpLCB0aW1vdXREdXIpO1xuICB9O1xuXG4gIEN0YW5sZWUucHJvdG90eXBlLnNwZWNpYWwgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgaWYgKGRhdGEucG9zICE9IG51bGwpIHtcbiAgICAgIHRoaXMuZ290byhkYXRhKTtcbiAgICB9XG4gICAgaWYgKChkYXRhLmVtbyAhPSBudWxsKSB8fCAodGhpcy4kY3VycmVudEFuaW1hdGlvbiA9PSBudWxsKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0RW1vdGlvbihkYXRhLmVtbyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnNldEVtb3Rpb24oXCJpZGxlXCIpO1xuICAgIH1cbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5zaG93VGV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRzcGVlY2hCb3gucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7XG4gIH07XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUuaGlkZVRleHQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kc3BlZWNoQm94LmFkZENsYXNzKFwiaGlkZGVuXCIpO1xuICB9O1xuXG4gIEN0YW5sZWUucHJvdG90eXBlLnNob3dOZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJG5leHRCdG4ucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7XG4gIH07XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUuaGlkZU5leHQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kbmV4dEJ0bi5hZGRDbGFzcyhcImhpZGRlblwiKTtcbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnJldHVyblRvU3RhdGlvbigpO1xuICB9O1xuXG4gIEN0YW5sZWUucHJvdG90eXBlLnNsZWVwID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucmV0dXJuVG9TdGF0aW9uKCk7XG4gIH07XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUuc2V0RW1vdGlvbiA9IGZ1bmN0aW9uKGVtb3Rpb24pIHtcbiAgICB2YXIgZGF0YSwgcGF0aCwgcmVzZXREdXJhdGlvbjtcbiAgICByZXNldER1cmF0aW9uID0gMTAwO1xuICAgIHRoaXMucmVzZXRSb3RhdGlvbihyZXNldER1cmF0aW9uKTtcbiAgICB0aGlzLiRvbGRBbmltYXRpb24gPSB0aGlzLiRjdXJyZW50QW5pbWF0aW9uO1xuICAgIHRoaXMuJGN1cnJlbnRBbmltYXRpb24gPSAkKCc8ZGl2IGNsYXNzPVwiYW5pbWF0aW9uXCIvPicpO1xuICAgIHRoaXMuJGZhY2VIb2xkZXIuYXBwZW5kKHRoaXMuJGN1cnJlbnRBbmltYXRpb24pO1xuICAgIHN3aXRjaCAoZW1vdGlvbikge1xuICAgICAgY2FzZSBcImFuZ3J5XCI6XG4gICAgICAgIHBhdGggPSAnY3RhbmxlZS1hbmdyeS5qc29uJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiaGFwcHlcIjpcbiAgICAgICAgcGF0aCA9ICdjdGFubGVlLWhhcHB5Lmpzb24nO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJpZGxlXCI6XG4gICAgICAgIHBhdGggPSAnY3RhbmxlZS1pZGxlLmpzb24nO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJkb3duXCI6XG4gICAgICAgIHBhdGggPSAnY3RhbmxlZS1sb29rLWRvd24uanNvbic7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImxlZnRcIjpcbiAgICAgICAgcGF0aCA9ICdjdGFubGVlLWxvb2stbGVmdC5qc29uJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgICAgcGF0aCA9ICdjdGFubGVlLWxvb2stcmlnaHQuanNvbic7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInN1cnByaXNlXCI6XG4gICAgICAgIHBhdGggPSAnY3RhbmxlZS1zdXJwcmlzZS5qc29uJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwidW5oYXBweVwiOlxuICAgICAgICBwYXRoID0gJ2N0YW5sZWUtdW5oYXBweS5qc29uJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBwYXRoID0gJ2N0YW5sZWUtaWRsZS5qc29uJztcbiAgICB9XG4gICAgcGF0aCA9IGFyaXN0b3RsZS5nZXRBc3NldFBhdGgoXCJ+Zy9jdGFubGVlL1wiICsgcGF0aCk7XG4gICAgdGhpcy5vbGRBbmltYXRpb24gPSB0aGlzLmFuaW1hdGlvbjtcbiAgICBkYXRhID0ge1xuICAgICAgZGVsYXk6IHJlc2V0RHVyYXRpb24sXG4gICAgICBuYXRpdmVFdmVudHM6IHtcbiAgICAgICAgZGF0YV9yZWFkeTogKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmRlc3Ryb3lPbGRGYWNlKCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSkodGhpcyksXG4gICAgICAgIGNvbXBsZXRlOiAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuaWRsZSgpO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pKHRoaXMpXG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gdGhpcy5hbmltYXRpb24gPSBuZXcgQW5pbWF0aW9uKHRoaXMuJGN1cnJlbnRBbmltYXRpb24sIHBhdGgsIGRhdGEpO1xuICB9O1xuXG4gIEN0YW5sZWUucHJvdG90eXBlLmRlc3Ryb3lPbGRGYWNlID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMub2xkQW5pbWF0aW9uICE9IG51bGwpIHtcbiAgICAgIHRoaXMub2xkQW5pbWF0aW9uLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuJG9sZEFuaW1hdGlvbi5yZW1vdmUoKTtcbiAgICAgIHJldHVybiB0aGlzLm9sZEFuaW1hdGlvbiA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIEN0YW5sZWUucHJvdG90eXBlLnJlc2V0Um90YXRpb24gPSBmdW5jdGlvbih0aW1lKSB7XG4gICAgaWYgKHRpbWUgPT0gbnVsbCkge1xuICAgICAgdGltZSA9IDEwMDtcbiAgICB9XG4gICAgdGhpcy4kZmFjZUhvbGRlci52ZWxvY2l0eShcInN0b3BcIiwgdHJ1ZSk7XG4gICAgcmV0dXJuIHRoaXMuJGZhY2VIb2xkZXIudmVsb2NpdHkoe1xuICAgICAgcm90YXRlWjogMFxuICAgIH0sIHtcbiAgICAgIGR1cmF0aW9uOiB0aW1lXG4gICAgfSk7XG4gIH07XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUuaWRsZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRmYWNlSG9sZGVyLnZlbG9jaXR5KHtcbiAgICAgIHJvdGF0ZVo6IDM2MFxuICAgIH0sIHtcbiAgICAgIGR1cmF0aW9uOiAxMDAwMCxcbiAgICAgIGxvb3A6IHRydWUsXG4gICAgICBlYXNpbmc6ICdsaW5lYXInXG4gICAgfSk7XG4gIH07XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUuZ290b1BvcyA9IGZ1bmN0aW9uKHgsIHksIGR1cmF0aW9uLCBkZWxheSkge1xuICAgIGlmICh4ID09IG51bGwpIHtcbiAgICAgIHggPSA5ODg7XG4gICAgfVxuICAgIGlmICh5ID09IG51bGwpIHtcbiAgICAgIHkgPSAzNDtcbiAgICB9XG4gICAgaWYgKGR1cmF0aW9uID09IG51bGwpIHtcbiAgICAgIGR1cmF0aW9uID0gNjAwO1xuICAgIH1cbiAgICBpZiAoZGVsYXkgPT0gbnVsbCkge1xuICAgICAgZGVsYXkgPSAwO1xuICAgIH1cbiAgICB0aGlzLiRlbC52ZWxvY2l0eShcInN0b3BcIiwgdHJ1ZSk7XG4gICAgcmV0dXJuIHRoaXMuJGVsLnZlbG9jaXR5KHtcbiAgICAgIHRvcDogeSxcbiAgICAgIGxlZnQ6IHhcbiAgICB9LCB7XG4gICAgICBkZWxheTogZGVsYXksXG4gICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICBlYXNpbmc6IFwiZWFzZUluT3V0UXVpbnRcIlxuICAgIH0pO1xuICB9O1xuXG4gIEN0YW5sZWUucHJvdG90eXBlLmdvdG9JdGVtID0gZnVuY3Rpb24oaWQpIHtcbiAgICB2YXIgcG9zO1xuICAgIHBvcyA9IGFyaXN0b3RsZS5tb3ZpZS5nZXRHbG9iYWxQb3MoaWQpO1xuICAgIGlmIChwb3MgPT09IG51bGwpIHtcbiAgICAgIGFyaXN0b3RsZVtcInRocm93XCJdKFwiY3RhbmxlZSB3YW50cyB0byBob3ZlciBieSBgXCIgKyBpZCArIFwiYCwgYnV0IGlzIHVuYWJsZSB0byBmaW5kIGFuIGl0ZW0gd2l0aCB0aGUgaWQgXCIgKyBpZCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHBvcy54ICs9IDA7XG4gICAgcG9zLnkgKz0gMDtcbiAgICByZXR1cm4gdGhpcy5nb3RvUG9zKHBvcy54LCBwb3MueSk7XG4gIH07XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUuZ290byA9IGZ1bmN0aW9uKGFjdGlvbikge1xuICAgIHZhciBtZTtcbiAgICBpZiAodHlwZW9mIGFjdGlvbi5wb3MgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGlmIChhY3Rpb24uZGVsYXlNb3ZlICE9IG51bGwpIHtcbiAgICAgICAgbWUgPSB0aGlzO1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gbWUuZ290b0l0ZW0oYWN0aW9uLnBvcywgYWN0aW9uLmRlbGF5TW92ZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ290b0l0ZW0oYWN0aW9uLnBvcyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmdvdG9Qb3MoYWN0aW9uLnBvc1swXSwgYWN0aW9uLnBvc1sxXSwgYWN0aW9uLnBvc1syXSwgYWN0aW9uLnBvc1szXSk7XG4gICAgfVxuICB9O1xuXG4gIEN0YW5sZWUucHJvdG90eXBlLnJldHVyblRvU3RhdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaGlkZVRleHQoKTtcbiAgICB0aGlzLmdvdG9Qb3MoKTtcbiAgICByZXR1cm4gdGhpcy5zZXRGaWx0ZXIoJ2dsb3cnKTtcbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5zZXRGaWx0ZXIgPSBmdW5jdGlvbihraW5kKSB7XG4gICAgcmV0dXJuICQoJyNjdGFubGVlJykuY3NzKHtcbiAgICAgIGZpbHRlcjogXCJ1cmwoJyNcIiArIGtpbmQgKyBcIicpXCJcbiAgICB9KTtcbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5zZXRUZXh0UG9zaXRpb24gPSBmdW5jdGlvbihwb3MpIHtcbiAgICB2YXIgaSwgaXRlbSwgbGVuLCByZXN1bHRzO1xuICAgIHRoaXMuJHRleHQucmVtb3ZlQ2xhc3MoXCJ0b3AgbGVmdFwiKTtcbiAgICBpZiAocG9zID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocG9zKSkge1xuICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgZm9yIChpID0gMCwgbGVuID0gcG9zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGl0ZW0gPSBwb3NbaV07XG4gICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLiR0ZXh0LmFkZENsYXNzKGl0ZW0pKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy4kdGV4dC5hZGRDbGFzcyhwb3MpO1xuICAgIH1cbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGksIGxlbiwgcmVmLCByZXN1bHRzLCB0b2tlbjtcbiAgICB0aGlzLiRlbC52ZWxvY2l0eShcInN0b3BcIiwgdHJ1ZSk7XG4gICAgdGhpcy4kZmFjZUhvbGRlci52ZWxvY2l0eShcInN0b3BcIiwgdHJ1ZSk7XG4gICAgdGhpcy4kZWwuZW1wdHkoKTtcbiAgICByZWYgPSB0aGlzLnRva2VucztcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICB0b2tlbiA9IHJlZltpXTtcbiAgICAgIHJlc3VsdHMucHVzaChQdWJTdWIudW5zdWJzY3JpYmUodG9rZW4pKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgcmV0dXJuIEN0YW5sZWU7XG5cbn0pKCk7XG4iLCJ2YXIgR2VuZXJpY1VpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEdlbmVyaWNVaSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gR2VuZXJpY1VpKCRlbCkge1xuICAgIHZhciAkbm9kZTtcbiAgICAkbm9kZSA9ICQoamFkZVRlbXBsYXRlWydtaXNjL2dlbmVyaWMtdWknXSh7fSkpO1xuICAgIHNoYWRvd0ljb25zSW5zdGFuY2Uuc3ZnUmVwbGFjZVdpdGhTdHJpbmcocHhTdmdJY29uU3RyaW5nLCAkbm9kZSk7XG4gICAgdGhpcy4kY29udGludWVTdHJpcCA9ICQoXCIuY29udGludWUtc3RyaXBcIiwgJG5vZGUpO1xuICAgICQoXCIuY29udGludWUtYnRuXCIsICRub2RlKS5vbihcImNsaWNrXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBQdWJTdWIucHVibGlzaChcInNsaWRlcy5uZXh0LXNsaWRlXCIpO1xuICAgICAgICByZXR1cm4gX3RoaXMuaGlkZUNvbnRpbnVlU3RyaXAoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRoaXMuaGlkZUNvbnRpbnVlU3RyaXAoKTtcbiAgICAkZWwuYXBwZW5kKCRub2RlKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCdjb250aW51ZS5zaG93JywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5zaG93Q29udGludWVTdHJpcCgpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH1cblxuICBHZW5lcmljVWkucHJvdG90eXBlLnNob3dDb250aW51ZVN0cmlwID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJGNvbnRpbnVlU3RyaXAucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7XG4gIH07XG5cbiAgR2VuZXJpY1VpLnByb3RvdHlwZS5oaWRlQ29udGludWVTdHJpcCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRjb250aW51ZVN0cmlwLmFkZENsYXNzKFwiaGlkZGVuXCIpO1xuICB9O1xuXG4gIEdlbmVyaWNVaS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge307XG5cbiAgcmV0dXJuIEdlbmVyaWNVaTtcblxufSkoKTtcbiIsInZhciBMYWJsZXI7XG5cbm1vZHVsZS5leHBvcnRzID0gTGFibGVyID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBMYWJsZXIoKSB7XG4gICAgdGhpcy5jb3VudCA9IDA7XG4gICAgdGhpcy50b2tlbjEgPSBQdWJTdWIuc3Vic2NyaWJlKCdsYWJlbC5hdHRhY2gnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5hdHRhY2hMYWJlbChkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRoaXMudG9rZW4yID0gUHViU3ViLnN1YnNjcmliZSgnbGFiZWwuZGVzdHJveScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmRlc3Ryb3lMYWJlbChkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9XG5cbiAgTGFibGVyLnByb3RvdHlwZS5hdHRhY2hMYWJlbCA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2YXIgJGxhYmVsO1xuICAgIGlmICgkKFwiLmxhYmVsLXdyYXBwZXJcIiwgZGF0YS5lbCkubGVuZ3RoICE9PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChkYXRhLmNvbnRlbnQuaWQgPT0gbnVsbCkge1xuICAgICAgZGF0YS5jb250ZW50LmlkID0gXCJfbGFiZWxcIiArICh0aGlzLmNvdW50KyspO1xuICAgIH1cbiAgICAkbGFiZWwgPSAkKGphZGVUZW1wbGF0ZVsnc2xpZGUtdXgvbGFiZWwnXShkYXRhLmNvbnRlbnQpKTtcbiAgICAkbGFiZWwuYWRkQ2xhc3MoXCJhdHRhY2hlZFwiKTtcbiAgICByZXR1cm4gZGF0YS5lbC5hcHBlbmQoJGxhYmVsKTtcbiAgfTtcblxuICBMYWJsZXIucHJvdG90eXBlLmRlc3Ryb3lMYWJlbCA9IGZ1bmN0aW9uKCRlbCkge1xuICAgIHJldHVybiAkKFwiLmxhYmVsLXdyYXBwZXJcIiwgJGVsKS52ZWxvY2l0eSh7XG4gICAgICBvcGFjaXR5OiAwXG4gICAgfSwge1xuICAgICAgZHVyYXRpb246IDE1MCxcbiAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuICQodGhpcykucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgTGFibGVyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgUHViU3ViLnVuc3Vic2NyaWJlKHRoaXMudG9rZW4xKTtcbiAgICByZXR1cm4gUHViU3ViLnVuc3Vic2NyaWJlKHRoaXMudG9rZW4yKTtcbiAgfTtcblxuICByZXR1cm4gTGFibGVyO1xuXG59KSgpO1xuIiwidmFyIENhbGxTaWduU2VsZWN0LCBEZWZlbmRlckNhcmRzLCBEaWFsb2d1ZSwgRGlhbG9ndWVQYWdlLCBEdXRpZXMsIEVwaXNvZGVJbnRybywgRXBpc29kZU91dHJvLCBFeHBsb3JlQ2FyZHMsIEdlbmVyaWNVaUVsZW1lbnRzLCBHaG9zdFVYLCBMYWJsZXIsIFBlcnNvbmFsSW5mb0ludHJvLCBRdWl6LCBTZWxlY3Rpb25EaWFsb2d1ZSwgU2ltcGxlU2VsZWN0aW9uLCBTbGlkZVVYLCBTb3VuZFRlc3QsIFRleHREaWFsb2d1ZTtcblxuQ2FsbFNpZ25TZWxlY3QgPSByZXF1aXJlKCdzbGlkZS11eC9jb21wb25lbnRzL2NhbGwtc2lnbi1zZWxlY3QnKTtcblxuVGV4dERpYWxvZ3VlID0gcmVxdWlyZSgnc2xpZGUtdXgvdGV4dC1kaWFsb2d1ZScpO1xuXG5EZWZlbmRlckNhcmRzID0gcmVxdWlyZSgnc2xpZGUtdXgvY29tcG9uZW50cy9kZWZlbmRlci1jYXJkcycpO1xuXG5EaWFsb2d1ZSA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvZGlhbG9ndWUnKTtcblxuRGlhbG9ndWVQYWdlID0gcmVxdWlyZSgnc2xpZGUtdXgvY29tcG9uZW50cy9kaWFsb2d1ZS1wYWdlJyk7XG5cbkR1dGllcyA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvZHV0aWVzJyk7XG5cbkVwaXNvZGVJbnRybyA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvZXBpc29kZS1pbnRybycpO1xuXG5FcGlzb2RlT3V0cm8gPSByZXF1aXJlKCdzbGlkZS11eC9jb21wb25lbnRzL2VwaXNvZGUtb3V0cm8nKTtcblxuRXhwbG9yZUNhcmRzID0gcmVxdWlyZSgnc2xpZGUtdXgvY29tcG9uZW50cy9leHBsb3JlLWNhcmRzJyk7XG5cbkdob3N0VVggPSByZXF1aXJlKCdzbGlkZS11eC9jb21wb25lbnRzL2dob3N0LXV4Jyk7XG5cbkxhYmxlciA9IHJlcXVpcmUoJ3NsaWRlLXV4L2xhYmxlcicpO1xuXG5QZXJzb25hbEluZm9JbnRybyA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvcGVyc29uYWwtaW5mby1pbnRybycpO1xuXG5RdWl6ID0gcmVxdWlyZSgnc2xpZGUtdXgvY29tcG9uZW50cy9xdWl6L3F1aXonKTtcblxuU2VsZWN0aW9uRGlhbG9ndWUgPSByZXF1aXJlKCdzbGlkZS11eC9jb21wb25lbnRzL3NlbGVjdGlvbi1kaWFsb2d1ZScpO1xuXG5TaW1wbGVTZWxlY3Rpb24gPSByZXF1aXJlKCdzbGlkZS11eC9jb21wb25lbnRzL3NpbXBsZS1zZWxlY3Rpb24nKTtcblxuU291bmRUZXN0ID0gcmVxdWlyZSgnc2xpZGUtdXgvY29tcG9uZW50cy9zb3VuZC10ZXN0Jyk7XG5cbkdlbmVyaWNVaUVsZW1lbnRzID0gcmVxdWlyZSgnc2xpZGUtdXgvZ2VuZXJpYy11aScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNsaWRlVVggPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIFNsaWRlVVgoJGVsKSB7XG4gICAgdGhpcy4kZWwgPSAkZWw7XG4gICAgdGhpcy5jb21wb25lbnRzID0gW107XG4gICAgdGhpcy5sYWJsZXIgPSBuZXcgTGFibGVyKCk7XG4gICAgdGhpcy5kaWFsb2d1ZSA9IG5ldyBUZXh0RGlhbG9ndWUodGhpcy4kZWwsIHRoaXMuY3RhbmxlZSk7XG4gICAgdGhpcy5nZW5lcmljVWkgPSBuZXcgR2VuZXJpY1VpRWxlbWVudHModGhpcy4kZWwpO1xuICB9XG5cbiAgU2xpZGVVWC5wcm90b3R5cGUucG9wdWxhdGUgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyIGNvbXBvbmVudCwgaSwgbGVuLCByZWYsIHJlc3VsdHM7XG4gICAgdGhpcy5yZW1vdmVDdXJyZW50Q29tcG9uZW50cygpO1xuICAgIHRoaXMuY29tcG9uZW50cyA9IFtdO1xuICAgIGlmICgoZGF0YSAhPSBudWxsID8gZGF0YS5jb21wb25lbnRzIDogdm9pZCAwKSA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJlZiA9IGRhdGEuY29tcG9uZW50cztcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjb21wb25lbnQgPSByZWZbaV07XG4gICAgICByZXN1bHRzLnB1c2godGhpcy5jb21wb25lbnRzLnB1c2godGhpcy5hZGRDb21wb25lbnQoY29tcG9uZW50KSkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBTbGlkZVVYLnByb3RvdHlwZS5hZGRDb21wb25lbnQgPSBmdW5jdGlvbihjb21wb25lbnREYXRhKSB7XG4gICAgdmFyIGNvbXBvbmVudDtcbiAgICBzd2l0Y2ggKGNvbXBvbmVudERhdGEua2luZCkge1xuICAgICAgY2FzZSBcImNhbGwtc2lnbi1zZWxlY3RcIjpcbiAgICAgICAgY29tcG9uZW50ID0gbmV3IENhbGxTaWduU2VsZWN0KHRoaXMuJGVsLCBjb21wb25lbnREYXRhLmNvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImRlZmVuZGVyLWNhcmRzXCI6XG4gICAgICAgIGNvbXBvbmVudCA9IG5ldyBEZWZlbmRlckNhcmRzKHRoaXMuJGVsLCBjb21wb25lbnREYXRhLmNvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImRpYWxvZ3VlXCI6XG4gICAgICAgIGNvbXBvbmVudCA9IG5ldyBEaWFsb2d1ZSh0aGlzLiRlbCwgY29tcG9uZW50RGF0YS5jb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJkdXRpZXNcIjpcbiAgICAgICAgY29tcG9uZW50ID0gbmV3IER1dGllcyh0aGlzLiRlbCwgY29tcG9uZW50RGF0YS5jb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJkaWFsb2d1ZS1wYWdlXCI6XG4gICAgICAgIGNvbXBvbmVudCA9IG5ldyBEaWFsb2d1ZVBhZ2UodGhpcy4kZWwsIGNvbXBvbmVudERhdGEuY29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiZXBpc29kZS1pbnRyb1wiOlxuICAgICAgICBjb21wb25lbnQgPSBuZXcgRXBpc29kZUludHJvKHRoaXMuJGVsLCBjb21wb25lbnREYXRhLmNvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImVwaXNvZGUtb3V0cm9cIjpcbiAgICAgICAgY29tcG9uZW50ID0gbmV3IEVwaXNvZGVPdXRybyh0aGlzLiRlbCwgY29tcG9uZW50RGF0YS5jb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJleHBsb3JlLWNhcmRzXCI6XG4gICAgICAgIGNvbXBvbmVudCA9IG5ldyBFeHBsb3JlQ2FyZHModGhpcy4kZWwsIGNvbXBvbmVudERhdGEuY29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiZ2hvc3QtdXhcIjpcbiAgICAgICAgY29tcG9uZW50ID0gbmV3IEdob3N0VVgodGhpcy4kZWwsIGNvbXBvbmVudERhdGEuY29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwicGVyc29uYWwtaW5mby1pbnRyb1wiOlxuICAgICAgICBjb21wb25lbnQgPSBuZXcgUGVyc29uYWxJbmZvSW50cm8odGhpcy4kZWwsIGNvbXBvbmVudERhdGEuY29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwic2VsZWN0aW9uLWRpYWxvZ3VlXCI6XG4gICAgICAgIGNvbXBvbmVudCA9IG5ldyBTZWxlY3Rpb25EaWFsb2d1ZSh0aGlzLiRlbCwgY29tcG9uZW50RGF0YS5jb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJzaW1wbGUtc2VsZWN0aW9uXCI6XG4gICAgICAgIGNvbXBvbmVudCA9IG5ldyBTaW1wbGVTZWxlY3Rpb24odGhpcy4kZWwsIGNvbXBvbmVudERhdGEuY29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwic291bmQtdGVzdFwiOlxuICAgICAgICBjb21wb25lbnQgPSBuZXcgU291bmRUZXN0KHRoaXMuJGVsLCBjb21wb25lbnREYXRhLmNvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInF1aXpcIjpcbiAgICAgICAgY29tcG9uZW50ID0gbmV3IFF1aXoodGhpcy4kZWwsIGNvbXBvbmVudERhdGEuY29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBhcmlzdG90bGVbXCJ0aHJvd1wiXShcInRyaWVkIHRvIGNyZWF0ZSBhbiB1bnJlY29nbml6ZWQgY29tcG9uZW50IHR5cGU6IGBcIiArIGNvbXBvbmVudERhdGEua2luZCArIFwiYFwiKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjb21wb25lbnQ7XG4gIH07XG5cbiAgU2xpZGVVWC5wcm90b3R5cGUucmVtb3ZlQ3VycmVudENvbXBvbmVudHMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgY29tcG9uZW50LCBpLCBsZW4sIHJlZiwgcmVzdWx0cztcbiAgICByZWYgPSB0aGlzLmNvbXBvbmVudHM7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgY29tcG9uZW50ID0gcmVmW2ldO1xuICAgICAgcmVzdWx0cy5wdXNoKGNvbXBvbmVudC5kZXN0cm95KCkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBTbGlkZVVYLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5yZW1vdmVDdXJyZW50Q29tcG9uZW50cygpO1xuICAgIHRoaXMubGFibGVyLmRlc3Ryb3koKTtcbiAgICB0aGlzLmRpYWxvZ3VlLmRlc3Ryb3koKTtcbiAgICByZXR1cm4gdGhpcy5nZW5lcmljVWkuZGVzdHJveSgpO1xuICB9O1xuXG4gIHJldHVybiBTbGlkZVVYO1xuXG59KSgpO1xuIiwidmFyIEF1ZGlvVHJhY2ssIENsb3NlZENhcHRpb24sIEN0YW5sZWUsIFNlcXVlbmNlLCBUZXh0RGlhbG9ndWU7XG5cbkF1ZGlvVHJhY2sgPSByZXF1aXJlKCdlcGlzb2RlL2F1ZGlvLXRyYWNrJyk7XG5cblNlcXVlbmNlID0gcmVxdWlyZSgnbWlzYy9zZXF1ZW5jZScpO1xuXG5DdGFubGVlID0gcmVxdWlyZSgnc2xpZGUtdXgvZGlhbG9ndWUtYWN0b3JzL2N0YW5sZWUnKTtcblxuQ2xvc2VkQ2FwdGlvbiA9IHJlcXVpcmUoJ3NsaWRlLXV4L2RpYWxvZ3VlLWFjdG9ycy9jbG9zZWQtY2FwdGlvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRleHREaWFsb2d1ZSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gVGV4dERpYWxvZ3VlKCRwYXJlbnQpIHtcbiAgICB2YXIgdG9rZW4xLCB0b2tlbjIsIHRva2VuMywgdG9rZW40LCB0b2tlbjUsIHRva2VuNiwgdG9rZW43O1xuICAgIGFyaXN0b3RsZS5kaWFsb2d1ZSA9IHRoaXM7XG4gICAgdGhpcy5jYyA9IG5ldyBDbG9zZWRDYXB0aW9uKCRwYXJlbnQsIHRoaXMucGxheU5leHRBY3Rpb24pO1xuICAgIHRoaXMuY3RhbmxlZSA9IG5ldyBDdGFubGVlKCRwYXJlbnQsIHRoaXMucGxheU5leHRBY3Rpb24pO1xuICAgICQoJ2h0bWwnKS5vbihcImtleWRvd25cIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAoZS53aGljaCA9PT0gMzkpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMucGxheU5leHRBY3Rpb24oKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgdG9rZW4xID0gUHViU3ViLnN1YnNjcmliZSgnY3RhbmxlZS5hY3RpdmF0ZScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGEsIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnBsYXlBY3Rpb24oZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0b2tlbjIgPSBQdWJTdWIuc3Vic2NyaWJlKCdjdGFubGVlLmFkZC1ldmVudC1saXN0ZW5lcicsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGEsIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmFkZEV2ZW50TGlzdGVuZXIoZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0b2tlbjMgPSBQdWJTdWIuc3Vic2NyaWJlKCdkaWFsb2d1ZS5hY3RpdmF0ZScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGEsIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnBsYXlBY3Rpb24oZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0b2tlbjQgPSBQdWJTdWIuc3Vic2NyaWJlKCdkaWFsb2d1ZS5hZGQtZXZlbnQtbGlzdGVuZXInLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihhLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5hZGRFdmVudExpc3RlbmVyKGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgdG9rZW41ID0gUHViU3ViLnN1YnNjcmliZSgndmNyLnBhdXNlJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oYSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMucGF1c2VUaW1lbGluZSgpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgdG9rZW42ID0gUHViU3ViLnN1YnNjcmliZSgndmNyLnBsYXknLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihhLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5wbGF5VGltZWxpbmUoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRva2VuNyA9IFB1YlN1Yi5zdWJzY3JpYmUoJ3Zjci5yZXBsYXknLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihhLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5yZXBsYXlUaW1lbGluZSgpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgdGhpcy50b2tlbnMgPSBbdG9rZW4xLCB0b2tlbjIsIHRva2VuMywgdG9rZW40LCB0b2tlbjUsIHRva2VuNiwgdG9rZW43XTtcbiAgfVxuXG4gIFRleHREaWFsb2d1ZS5wcm90b3R5cGUuYWN0aXZhdGUgPSBmdW5jdGlvbihkYXRhMSkge1xuICAgIHRoaXMuZGF0YSA9IGRhdGExO1xuICAgIGlmICh0aGlzLmRhdGEudGltZWxpbmUgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnRpbWVsaW5lID0gdGhpcy5kYXRhLnRpbWVsaW5lO1xuICAgIHRoaXMuc2VxdWVuY2UgPSBuZXcgU2VxdWVuY2UodGhpcy50aW1lbGluZSk7XG4gICAgcmV0dXJuIHRoaXMucGxheUFjdGlvbih0aGlzLnNlcXVlbmNlLmdldEN1cnJlbnRJdGVtKCkuYWN0aW9uKTtcbiAgfTtcblxuICBUZXh0RGlhbG9ndWUucHJvdG90eXBlLnNheSA9IGZ1bmN0aW9uKHRleHQsIGF1ZGlvLCBuZXh0LCB0eHRQb3MpIHtcbiAgICBpZiAodGV4dCAhPSBudWxsKSB7XG4gICAgICB0aGlzLmFjdG9yLnNheSh0ZXh0LCB0eHRQb3MpO1xuICAgICAgdGhpcy5hY3Rvci5zdGFydFRhbGtpbmcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hY3Rvci5oaWRlVGV4dCgpO1xuICAgIH1cbiAgICBpZiAoYXVkaW8gIT0gbnVsbCkge1xuICAgICAgaWYgKHRoaXMudHJhY2sgIT0gbnVsbCkge1xuICAgICAgICB0aGlzLnRyYWNrLnN0b3AoKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudHJhY2sgPSBuZXcgQXVkaW9UcmFjayhhdWRpbyk7XG4gICAgICB0aGlzLnRyYWNrLnBsYXkoe30sIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgX3RoaXMudHJhY2suZGVzdHJveSgpO1xuICAgICAgICAgIF90aGlzLnRyYWNrID0gbnVsbDtcbiAgICAgICAgICBfdGhpcy5hY3Rvci5zdG9wVGFsa2luZygpO1xuICAgICAgICAgIGlmIChuZXh0ID09PSAnYXVkaW8nKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMucGxheU5leHRBY3Rpb24oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9KSh0aGlzKSk7XG4gICAgfVxuICAgIGlmIChuZXh0ID09PSAnY2xpY2snKSB7XG4gICAgICB0aGlzLmFjdG9yLnNob3dOZXh0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWN0b3IuaGlkZU5leHQoKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBuZXh0ID09PSBcIm51bWJlclwiKSB7XG4gICAgICByZXR1cm4gYXJpc3RvdGxlLnRpbWVvdXQoKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMucGxheU5leHRBY3Rpb24oKTtcbiAgICAgICAgfTtcbiAgICAgIH0pKHRoaXMpLCBuZXh0KTtcbiAgICB9XG4gIH07XG5cbiAgVGV4dERpYWxvZ3VlLnByb3RvdHlwZS5wYXVzZVRpbWVsaW5lID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlZiwgcmVmMTtcbiAgICBpZiAoKHJlZiA9IHRoaXMudHJhY2spICE9IG51bGwpIHtcbiAgICAgIHJlZi5zb3VuZC5wYXVzZWQgPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoKHJlZjEgPSB0aGlzLmFjdG9yKSAhPSBudWxsKSB7XG4gICAgICByZWYxLnN0b3BUYWxraW5nKCk7XG4gICAgfVxuICAgIHJldHVybiBQdWJTdWIucHVibGlzaChcInRpbWVycy5wYXVzZVwiKTtcbiAgfTtcblxuICBUZXh0RGlhbG9ndWUucHJvdG90eXBlLnBsYXlUaW1lbGluZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciByZWYsIHJlZjE7XG4gICAgaWYgKChyZWYgPSB0aGlzLnRyYWNrKSAhPSBudWxsKSB7XG4gICAgICByZWYuc291bmQucGF1c2VkID0gZmFsc2U7XG4gICAgfVxuICAgIGlmICgocmVmMSA9IHRoaXMuYWN0b3IpICE9IG51bGwpIHtcbiAgICAgIHJlZjEuc3RhcnRUYWxraW5nKCk7XG4gICAgfVxuICAgIHJldHVybiBQdWJTdWIucHVibGlzaChcInRpbWVycy5yZXN1bWVcIik7XG4gIH07XG5cbiAgVGV4dERpYWxvZ3VlLnByb3RvdHlwZS5yZXBsYXlUaW1lbGluZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciByZWY7XG4gICAgaWYgKChyZWYgPSB0aGlzLnRyYWNrKSAhPSBudWxsKSB7XG4gICAgICByZWYuc3RvcCgpO1xuICAgIH1cbiAgICB0aGlzLnNlcXVlbmNlLnJlc2V0KCk7XG4gICAgcmV0dXJuIHRoaXMucGxheUFjdGlvbih0aGlzLnNlcXVlbmNlLmdldEN1cnJlbnRJdGVtKCkuYWN0aW9uKTtcbiAgfTtcblxuICBUZXh0RGlhbG9ndWUucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXIgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgaWYgKGRhdGEuZXZlbnQgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgIHJldHVybiB0aGlzLnRyYWNrLmFkZE9uQ29tcGxldGUoKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gYXJpc3RvdGxlLmNvbW1hbmRlcltcImRvXCJdKGRhdGEuYWN0aW9uKTtcbiAgICAgICAgfTtcbiAgICAgIH0pKHRoaXMpKTtcbiAgICB9XG4gIH07XG5cbiAgVGV4dERpYWxvZ3VlLnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIFB1YlN1Yi5wdWJsaXNoKCdkaWFsb2d1ZS5jb21wbGV0ZScpO1xuICAgIHJldHVybiB0aGlzLmFjdG9yLmNvbXBsZXRlKCk7XG4gIH07XG5cbiAgVGV4dERpYWxvZ3VlLnByb3RvdHlwZS5wbGF5TmV4dEFjdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLnRyYWNrICE9IG51bGwpIHtcbiAgICAgIHRoaXMudHJhY2suc3RvcCgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5zZXF1ZW5jZS5pc0F0TGFzdEl0ZW0oKSkge1xuICAgICAgcmV0dXJuIHRoaXMuY29tcGxldGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXF1ZW5jZS5uZXh0KCk7XG4gICAgICByZXR1cm4gdGhpcy5wbGF5QWN0aW9uKHRoaXMuc2VxdWVuY2UuZ2V0Q3VycmVudEl0ZW0oKS5hY3Rpb24pO1xuICAgIH1cbiAgfTtcblxuICBUZXh0RGlhbG9ndWUucHJvdG90eXBlLnBsYXlBY3Rpb24gPSBmdW5jdGlvbihhY3Rpb25JZCkge1xuICAgIHZhciBhY3Rpb24sIG9sZEFjdG9yO1xuICAgIGlmICh0aGlzLmRhdGEuYWN0aW9uc1thY3Rpb25JZF0gPT0gbnVsbCkge1xuICAgICAgYXJpc3RvdGxlW1widGhyb3dcIl0oXCJEaWFsb2d1ZSB3YXMgYXNrZWQgdG8gcGxheSB0aGUgYWN0aW9uIG5hbWVkIGBcIiArIGFjdGlvbklkICsgXCJgLCBidXQgbm8gYWN0aW9uIHdpdGggdGhhdCBpZCBleGlzdHMuXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBhY3Rpb24gPSB0aGlzLm92ZXJsYXlEZWZhdWx0cyhhY3Rpb25JZCk7XG4gICAgb2xkQWN0b3IgPSB0aGlzLmFjdG9yO1xuICAgIHRoaXMuc2V0QWN0b3IoYWN0aW9uLmFjdG9yKTtcbiAgICBpZiAob2xkQWN0b3IgIT09IHZvaWQgMCkge1xuICAgICAgaWYgKG9sZEFjdG9yICE9PSB0aGlzLmFjdG9yKSB7XG4gICAgICAgIG9sZEFjdG9yLnNsZWVwKCk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChhY3Rpb24uYWN0aW9uICE9IG51bGwpIHtcbiAgICAgIGFyaXN0b3RsZS5jb21tYW5kZXJbXCJkb1wiXShhY3Rpb24uYWN0aW9uLCB0cnVlKTtcbiAgICB9XG4gICAgdGhpcy5hY3Rvci5zcGVjaWFsKGFjdGlvbik7XG4gICAgcmV0dXJuIHRoaXMuc2F5KGFjdGlvbi50ZXh0LCBhY3Rpb24uYXVkaW8sIGFjdGlvbi5uZXh0LCBhY3Rpb24udHh0UG9zKTtcbiAgfTtcblxuICBUZXh0RGlhbG9ndWUucHJvdG90eXBlLmdldEluZGV4T2ZBY3Rpb24gPSBmdW5jdGlvbihhY3Rpb24pIHtcbiAgICB2YXIgZGF0YSwgaSwgaiwgbGVuLCByZWY7XG4gICAgaWYgKHRoaXMudGltZWxpbmUgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIHJlZiA9IHRoaXMudGltZWxpbmU7XG4gICAgZm9yIChpID0gaiA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGogPCBsZW47IGkgPSArK2opIHtcbiAgICAgIGRhdGEgPSByZWZbaV07XG4gICAgICBpZiAoZGF0YS5hY3Rpb24gPT09IGFjdGlvbikge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgVGV4dERpYWxvZ3VlLnByb3RvdHlwZS5vdmVybGF5RGVmYXVsdHMgPSBmdW5jdGlvbihhY3Rpb25JZCkge1xuICAgIHZhciBhY3Rpb25zLCBrZXksIHJlZiwgdmFsO1xuICAgIGlmICh0aGlzLmRhdGEuZGVmYXVsdHMgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMuZGF0YS5hY3Rpb25zW2FjdGlvbklkXTtcbiAgICB9XG4gICAgYWN0aW9ucyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5kYXRhLmRlZmF1bHRzKSk7XG4gICAgcmVmID0gdGhpcy5kYXRhLmFjdGlvbnNbYWN0aW9uSWRdO1xuICAgIGZvciAoa2V5IGluIHJlZikge1xuICAgICAgdmFsID0gcmVmW2tleV07XG4gICAgICBhY3Rpb25zW2tleV0gPSB2YWw7XG4gICAgfVxuICAgIHJldHVybiBhY3Rpb25zO1xuICB9O1xuXG4gIFRleHREaWFsb2d1ZS5wcm90b3R5cGUuc2V0QWN0b3IgPSBmdW5jdGlvbihhY3Rvcikge1xuICAgIGlmIChhY3RvciA9PSBudWxsKSB7XG4gICAgICB0aGlzLmFjdG9yID0gdGhpcy5jdGFubGVlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzd2l0Y2ggKGFjdG9yKSB7XG4gICAgICBjYXNlICd3YXJjb3JlJzpcbiAgICAgIGNhc2UgJ3Nla3RpbXVzJzpcbiAgICAgIGNhc2UgJ2ZpcmV3YWxsJzpcbiAgICAgIGNhc2UgJ3BhY2tldCc6XG4gICAgICAgIHJldHVybiB0aGlzLmFjdG9yID0gdGhpcy5jYztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0aGlzLmFjdG9yID0gdGhpcy5jdGFubGVlO1xuICAgIH1cbiAgfTtcblxuICBUZXh0RGlhbG9ndWUucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaiwgbGVuLCByZWYsIHJlc3VsdHMsIHRva2VuO1xuICAgIHRoaXMuZGF0YSA9IG51bGw7XG4gICAgdGhpcy50aW1lbGluZSA9IG51bGw7XG4gICAgdGhpcy5zZXF1ZW5jZSA9IG51bGw7XG4gICAgdGhpcy5jdGFubGVlLmRlc3Ryb3koKTtcbiAgICB0aGlzLmNjLmRlc3Ryb3koKTtcbiAgICBpZiAodGhpcy50cmFjayAhPSBudWxsKSB7XG4gICAgICB0aGlzLnRyYWNrLnN0b3AoKTtcbiAgICB9XG4gICAgcmVmID0gdGhpcy50b2tlbnM7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoaiA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGogPCBsZW47IGorKykge1xuICAgICAgdG9rZW4gPSByZWZbal07XG4gICAgICByZXN1bHRzLnB1c2goUHViU3ViLnVuc3Vic2NyaWJlKHRva2VuKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIHJldHVybiBUZXh0RGlhbG9ndWU7XG5cbn0pKCk7XG4iXX0=

var aristotle, cache, episode, getQueryVariable, isDevMode, isLocal, sudo;

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

episode = getQueryVariable('episode');

cache = getQueryVariable('cache');

isDevMode = getQueryVariable('dev');

isLocal = getQueryVariable('local') === "true";

sudo = getQueryVariable('sudo') === "true";

aristotle = new Aristotle($(".holder"), "episodes", "local", episode, isDevMode, isLocal, sudo);

if (cache === "false") {
  aristotle.dontCache = true;
}
