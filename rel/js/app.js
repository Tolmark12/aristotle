jadeTemplate = {};
jadeTemplate['aristotle'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"aristotle\"><div class=\"chrome\"></div><div class=\"movie\"><div class=\"wrapper\"></div><div class=\"dynamics\"></div></div><div class=\"slide-ux\"></div><div style=\"opacity:0\" class=\"svg-filters\"><svg class=\"defs\"><defs><filter id=\"glow\"><fegaussianblur in=\"SourceGraphic\" stddeviation=\"1.5\"></fegaussianblur><feComponentTransfer><feFuncA type=\"linear\" slope=\"0.8\"> </feFuncA></feComponentTransfer><femerge><femergenode></femergenode><femergenode in=\"SourceGraphic\"></femergenode></femerge></filter><filter id=\"highlightBlue\"><feColorMatrix type=\"matrix\" values=\"0   0 0 0 0                                               0.8 0 0 0 0                                               0.6 0 0 0 0                                               0   0 0 1 0\"></feColorMatrix><feComponentTransfer><feFuncA type=\"linear\" slope=\"1\"> </feFuncA></feComponentTransfer><fegaussianblur stddeviation=\"0.3\" result=\"coloredBlur\"></fegaussianblur><femerge><femergenode in=\"SourceGraphic\"></femergenode><feMergeNode in=\"coloredBlur\"></feMergeNode></femerge></filter><filter id=\"highlightYellow\"><feColorMatrix type=\"matrix\" values=\"0.95 0 0 0 0                                               0.8  0 0 0 0                                               0    0 0 0 0                                               0    0 0 1 0\"></feColorMatrix><feComponentTransfer><feFuncA type=\"linear\" slope=\"1\"> </feFuncA></feComponentTransfer><fegaussianblur stddeviation=\"0.3\" result=\"coloredBlur\"></fegaussianblur><femerge><femergenode in=\"SourceGraphic\"></femergenode><feMergeNode in=\"coloredBlur\"></feMergeNode></femerge></filter><filter id=\"highlightOrange\"><feColorMatrix type=\"matrix\" values=\"1   0 0 0 0                                               0.3 0 0 0 0                                               0   0 0 0 0                                               0   0 0 1 0\"></feColorMatrix><feComponentTransfer><feFuncA type=\"linear\" slope=\"1\"> </feFuncA></feComponentTransfer><fegaussianblur stddeviation=\"0.3\" result=\"coloredBlur\"></fegaussianblur><femerge><femergenode in=\"SourceGraphic\"></femergenode><feMergeNode in=\"coloredBlur\"></feMergeNode></femerge></filter><filter id=\"blueBlur\"><feColorMatrix type=\"matrix\" values=\"0.08 0 0 0 0                                               0.17 0 0 0 0                                               0.37 0 0 0 0                                               0    0 0 1 0\"></feColorMatrix><feComponentTransfer><feFuncA type=\"linear\" slope=\"1\"> </feFuncA></feComponentTransfer><fegaussianblur stddeviation=\"0\" result=\"coloredBlur\"></fegaussianblur><femerge><femergenode in=\"SourceGraphic\"></femergenode><feMergeNode in=\"coloredBlur\"></feMergeNode></femerge></filter><filter id=\"black-glow\"><feColorMatrix type=\"matrix\" values=\"0 0 0 0 0                                              0.3 0 0 0 0                                              0.3 0 0 0 0                                              0 0 0 0.8 0\"></feColorMatrix><feGaussianBlur stdDeviation=\"2.5\" result=\"coloredBlurs\"></feGaussianBlur><feMerge><feMergeNode in=\"coloredBlurs\"></feMergeNode><feMergeNode in=\"SourceGraphic\"></feMergeNode></feMerge></filter><filter id=\"dropshadow\" height=\"130%\"><fegaussianblur in=\"SourceAlpha\" stddeviation=\"3\"></fegaussianblur><feoffset dx=\"2\" dy=\"2\" result=\"offsetblur\"></feoffset><femerge><femergenode></femergenode><femergenode in=\"SourceGraphic\"></femergenode></femerge></filter></defs></svg></div></div>");;return buf.join("");
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
buf.push("<div class=\"top\"><div class=\"main\"><div class=\"name-and-rank\"><div class=\"status-badge\"><img" + (jade.attr("data-src", "" + (badge) + "", true, false)) + " class=\"shadow-icon\"/></div><div class=\"divider\"></div><div class=\"identity\"><h1 class=\"name\">" + (jade.escape((jade_interp = name) == null ? '' : jade_interp)) + "</h1><h2 class=\"rank\">" + (jade.escape((jade_interp = rank) == null ? '' : jade_interp)) + "</h2></div><div class=\"divider\"></div></div><div" + (jade.cls(['episodes',"" + (episode) + ""], [null,true])) + "><div data-episode=\"1\"" + (jade.cls(['badge',"" + (episode >= 1 ? 'active' : '') + ""], [null,true])) + "><img data-src=\"ep1-badge\" class=\"shadow-icon\"/></div><div data-episode=\"2\"" + (jade.cls(['badge',"" + (episode >= 2 ? 'active' : '') + ""], [null,true])) + "><img data-src=\"ep2-badge\" class=\"shadow-icon\"/></div><div data-episode=\"3\"" + (jade.cls(['badge',"" + (episode >= 3 ? 'active' : '') + ""], [null,true])) + "><img data-src=\"ep3-badge\" class=\"shadow-icon\"/></div><div data-episode=\"4\"" + (jade.cls(['badge',"" + (episode >= 4 ? 'active' : '') + ""], [null,true])) + "><img data-src=\"ep4-badge\" class=\"shadow-icon\"/></div><div data-episode=\"5\"" + (jade.cls(['badge',"" + (episode >= 5 ? 'active' : '') + ""], [null,true])) + "><img data-src=\"ep5-badge\" class=\"shadow-icon\"/></div></div></div><div class=\"learn-mode\"><h2>[ Warcore ]</h2><h1>Learn Mode</h1></div></div>");}.call(this,"badge" in locals_for_with?locals_for_with.badge:typeof badge!=="undefined"?badge:undefined,"name" in locals_for_with?locals_for_with.name:typeof name!=="undefined"?name:undefined,"rank" in locals_for_with?locals_for_with.rank:typeof rank!=="undefined"?rank:undefined,"episode" in locals_for_with?locals_for_with.episode:typeof episode!=="undefined"?episode:undefined));;return buf.join("");
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

jadeTemplate['slide-ux/components/cards/defender'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (name, quote, personal1, personal2, duties, evidences) {
buf.push("<div class=\"defender-wrap\"><div class=\"defender-card\"><div class=\"name\">" + (jade.escape(null == (jade_interp = name) ? "" : jade_interp)) + "</div><div class=\"quote\">" + (jade.escape(null == (jade_interp = quote) ? "" : jade_interp)) + "</div><div class=\"personal1\">" + (jade.escape((jade_interp = personal1) == null ? '' : jade_interp)) + ":</div><div class=\"personal2\">" + (jade.escape(null == (jade_interp = personal2) ? "" : jade_interp)) + "</div><div class=\"info\"><div class=\"defender-duties\">");
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

var pxSymbolString = pxSymbolString || ''; pxSymbolString+='<symbol  id="New_Symbol" viewBox="-10.3 -10.3 20.6 20.6">	<polygon fill="#FFFFFF" stroke="#231F20" stroke-miterlimit="10" points="9.8,-9.8 -9.8,-9.8 -9.8,9.8 9.8,9.8 	"/></symbol>';
var pxSvgIconString = pxSvgIconString || ''; pxSvgIconString+='<g id="first" class="aristotle-svg-svg ">			<use xlink:href="#New_Symbol"  width="20.6" height="20.6" x="-10.3" y="-10.3" transform="matrix(0.7046 0 0 -0.7046 11.2573 11.2573)" overflow="visible"/></g><g id="ep5-badge" class="aristotle-svg-svg ">	<path  class="white "  fill="#FFFFFF" d="M26.599,12.5H9.8v6.9h0.098v6.462l7.933,2.203l0.535-1.932l-6.468-1.797v-5.339h9.001		v0.257c-0.101,0.495-0.286,1.021-0.632,1.394c-0.347,0.365-0.828,0.55-1.468,0.55h-2.6h-0.6v2h0.6h2.6h3.8v3.801h2v-3.801h2V12.5		L26.599,12.5z M17.199,14.5v2.503H15.5V14.5H17.199z M11.8,17.003V14.5h1.7v2.503H11.8z M19.199,17.003V14.5h1.7v2.503H19.199z		 M24.599,21.199h-1.7v-1.704c0.141-0.795,0.106-1.438,0.097-1.563l-0.066-0.929h-0.031V14.5h1.7V21.199z"/><g  class="yellow " >		<g>			<path fill="#FFB81A" d="M18.199,6.4l12,6.299V26.4l-12,6.299l-12-6.299V12.699L18.199,6.4 M18.199,4L4,11.399v16.396				l14.199,7.396l14.2-7.396V11.4L18.199,4L18.199,4z"/></g>	</g></g><g id="ep4-badge" class="aristotle-svg-svg ">	<g  class="white " >		<rect x="23.383" y="25.405" fill="#FFFFFF" width="8.213" height="2.123"/><rect x="5.415" y="25.405" fill="#FFFFFF" width="7.354" height="2.123"/></g>	<g  class="yellow " >		<path id="XMLID_403_" fill="#FFB81A" d="M18.152,6.396l12.029,6.296v13.75l-12.029,6.297L6.123,26.442v-13.75L18.152,6.396			 M18.152,4L4,11.408v16.316l14.152,7.408l14.152-7.408V11.408L18.152,4L18.152,4z"/><path fill="#FFB81A" d="M18.144,14.56c-1.564,0-2.836-1.271-2.836-2.836c0-1.562,1.272-2.835,2.836-2.835			c1.563,0,2.835,1.272,2.835,2.835C20.98,13.288,19.708,14.56,18.144,14.56z M18.144,10.688c-0.571,0-1.036,0.469-1.036,1.036			c0,0.571,0.465,1.036,1.036,1.036c0.571,0,1.036-0.465,1.036-1.036C19.18,11.153,18.715,10.688,18.144,10.688z"/><path fill="#FFB81A" d="M22.812,23.475l1.638-0.746l-2.858-6.271l0.25-1.139h-7.395l0.248,1.128l-2.863,6.278l1.638,0.746			l1.869-4.101l0.56,2.548l-0.651,7.104v0.688h1.8l-0.004-0.604l0.584-6.347h1.033l0.58,6.264v0.688h1.8l-0.004-0.771l-0.646-7.021			l0.558-2.536L22.812,23.475z M17.531,20.964l-0.846-3.846h2.918l-0.845,3.846H17.531z"/></g></g><g id="ep3-badge" class="aristotle-svg-svg ">	<polygon  class="white "  fill="#FFFFFF" points="18.2,8.17 7.825,13.626 8.756,15.396 18.2,10.43 25.974,14.517 16.851,19.275 		17.776,21.048 26.901,16.289 26.901,18 26.901,18.696 16.849,23.98 17.78,25.751 26.901,20.956 26.901,21.898 26.901,23.296 		16.849,28.58 17.78,30.351 26.901,25.556 26.901,29.699 28.901,29.699 28.901,24.504 28.901,21.898 28.901,19.904 28.901,18 		28.901,13.796 	"/><g  class="yellow " >		<g id="XMLID_68_" class="aristotle-svg-svg ">			<path fill="#FFB81A" d="M25.901,18.3c-0.1,0.396-0.4,0.7-0.8,0.7c-0.4,0-0.6-0.304-0.5-0.7c0.1-0.396,0.4-0.7,0.8-0.7				S25.901,17.9,25.901,18.3z"/></g>		<g id="XMLID_67_" class="aristotle-svg-svg ">			<path fill="#FFB81A" d="M25.901,22.9c-0.1,0.396-0.4,0.692-0.8,0.692c-0.4,0-0.6-0.3-0.5-0.692c0.1-0.397,0.4-0.701,0.8-0.701				S25.901,22.5,25.901,22.9z"/></g>		<g id="XMLID_66_" class="aristotle-svg-svg ">			<path fill="#FFB81A" d="M25.901,27.6c-0.1,0.4-0.4,0.7-0.8,0.7c-0.4,0-0.6-0.3-0.5-0.7c0.1-0.396,0.4-0.692,0.8-0.692				S25.901,27.199,25.901,27.6z"/></g>		<path fill="#FFB81A" d="M32.4,11.399L18.2,4L4,11.397v16.396l14.2,7.396l0.048-0.025l0.052,0.027v-0.059l14.1-7.344V11.399			L32.4,11.399z M16.1,31.597l-9.9-5.191v-11.5l9.9,5.192V31.597z M30.2,26.4l-11.9,6.246V18.8L6.395,12.597L18.2,6.4l12,6.299V26.4			z"/></g></g><g id="ep2-badge" class="aristotle-svg-svg ">	<g  class="white" >		<polygon fill="#FFFFFF" points="16.195,19.863 17.205,18.137 10.982,14.492 15.964,11.886 15.037,10.114 8,13.795 8,21.9 10,21.9 			10,16.235 		"/><polygon fill="#FFFFFF" points="19.2,28.048 19.2,21.1 17.2,21.1 17.2,28.06 12.058,25.411 11.142,27.189 18.203,30.826 			25.163,27.186 24.237,25.414 		"/><polygon fill="#FFFFFF" points="21.163,10.114 20.237,11.886 25.271,14.52 19.094,18.137 20.105,19.863 26.2,16.293 26.2,21.9 			28.2,21.9 28.2,13.795 		"/></g>	<g  class="yellow " >		<g>			<path fill="#FFB81A" d="M18.2,6.4l12,6.299V26.4l-12,6.299L6.2,26.4V12.699L18.2,6.4 M18.2,4L4,11.397v16.396l14.2,7.396				l14.2-7.396V11.397L18.2,4L18.2,4z"/></g>	</g></g><g id="ep1-badge" class="aristotle-svg-svg ">	<g  class="white " >		<polygon fill="#FFFFFF" points="11.798,14.884 10.402,16.315 12.642,18.5 5.501,18.5 5.501,20.5 12.727,20.5 10.384,22.901 			11.816,24.298 16.515,19.482 		"/><polygon fill="#FFFFFF" points="22.907,13.207 21.493,11.793 19.2,14.086 19.2,6.1 17.2,6.1 17.2,14.086 14.907,11.793 			13.493,13.207 18.2,17.914 		"/><polygon fill="#FFFFFF" points="13.502,25.884 14.898,27.315 17.2,25.071 17.2,33 19.2,33 19.2,25.071 21.502,27.315 			22.898,25.884 18.2,21.303 		"/><polygon fill="#FFFFFF" points="31.7,18.5 23.702,18.5 25.989,16.324 24.61,14.875 19.768,19.482 24.593,24.307 26.007,22.893 			23.614,20.5 31.7,20.5 		"/></g>	<g  class="yellow" >		<g>			<path fill="#FFB81A" d="M18.2,6.4l12,6.299V26.4l-12,6.299L6.2,26.4V12.699L18.2,6.4 M18.2,4L4,11.397v16.396l14.2,7.396				l14.2-7.396V11.397L18.2,4L18.2,4z"/></g>	</g></g><g id="rank-badge-master-cadet" class="aristotle-svg-svg ">	<polygon fill="#FFFFFF" points="30.5,4 31.3,5.7 33,6 31.8,7.2 32.099,9 30.5,8.2 29,9 29.3,7.2 28.099,6 29.8,5.7 	"/><polygon fill="#FFFFFF" points="6.5,4 7.201,5.7 8.9,6 7.701,7.2 8,9 6.5,8.2 5,9 5.3,7.2 4,6 5.8,5.7 	"/><polygon fill="#FFB81A" points="15.5,33.3 13.201,32.101 13,32.2 13,32 7.9,29.3 7.9,17 16.099,12.7 16.599,10.1 5.8,15.7 		5.8,30.601 15,35.399 	"/><rect x="4" y="4" fill="none" width="29" height="39.104"/><polygon fill="#FFB81A" points="20.5,10.1 20.9,12.7 29.099,17 29.099,29.3 22.099,33 21.3,35.899 31.201,30.601 31.201,15.7 	"/><g>		<polygon fill="#FFFFFF" points="19.201,33.3 16.4,35.3 18.5,26 15,28.8 17.099,16.101 20.599,16.101 19.201,21.7 22,19.601 			19.599,29.601 22.201,27.601 17.701,43.101 		"/><rect x="13.5" y="15.399" fill="#FFFFFF" width="9.896" height="1.396"/><polygon fill="#FFFFFF" points="18.5,6.899 17.099,15.399 19.9,15.399 		"/><g id="XMLID_45_" class="aristotle-svg-svg ">			<g id="XMLID_157_" class="aristotle-svg-svg ">				<g id="XMLID_185_" class="aristotle-svg-svg ">					<g id="XMLID_229_" class="aristotle-svg-svg ">						<polygon fill="#FFFFFF" points="18.5,5.5 17.099,6.3 17.099,8.2 18.5,9 19.9,8.2 19.9,6.3 						"/></g>				</g>			</g>		</g>	</g></g><g id="rank-badge-cyber-cadet" class="aristotle-svg-svg ">	<polygon fill="#FFB81A" points="20.75,11.1 21.051,13.3 27.75,13.3 27.75,29 21.051,33.601 20.75,36.5 29.852,30.101 29.852,11.1 			"/><polygon fill="#FFB81A" points="16.051,33.7 9.45,29.3 9.45,13.3 16.051,13.3 16.45,11.1 7.25,11.1 7.351,30.399 16.45,36.5 	"/><line fill="none" stroke="#FFB81A" stroke-width="2.9184" stroke-miterlimit="10" x1="7.939" y1="19.672" x2="13.262" y2="19.672"/><line fill="none" stroke="#FFB81A" stroke-width="2.9184" stroke-miterlimit="10" x1="7.939" y1="25.802" x2="14.449" y2="25.802"/><line fill="none" stroke="#FFB81A" stroke-width="2.9184" stroke-miterlimit="10" x1="23.841" y1="19.672" x2="29.163" y2="19.672"/><line fill="none" stroke="#FFB81A" stroke-width="2.9184" stroke-miterlimit="10" x1="22.653" y1="25.802" x2="29.163" y2="25.802"/><g>		<g>			<g>				<rect x="4" y="4" fill="none" width="29" height="39.104"/><polygon fill="#FFFFFF" points="18.551,16.101 15.75,18.899 18.551,43 21.352,18.899 				"/></g>		</g>		<rect x="13.551" y="15.399" fill="#FFFFFF" width="9.897" height="1.396"/><polygon fill="#FFFFFF" points="18.551,6.899 17.15,15.399 19.95,15.399 		"/><g id="XMLID_166_" class="aristotle-svg-svg ">			<g id="XMLID_168_" class="aristotle-svg-svg ">				<g id="XMLID_169_" class="aristotle-svg-svg ">					<g id="XMLID_170_" class="aristotle-svg-svg ">						<polygon fill="#FFFFFF" points="18.551,5.5 17.15,6.3 17.15,8.2 18.551,9 19.95,8.2 19.95,6.3 						"/></g>				</g>			</g>		</g>	</g>	<polygon fill="#FFFFFF" points="30.551,4 31.352,5.7 33.051,6 31.852,7.2 32.15,9 30.551,8.2 29.051,9 29.352,7.2 28.051,6 		29.852,5.7 	"/><polygon fill="#FFFFFF" points="6.551,4 7.25,5.7 8.95,6 7.75,7.2 8.051,9 6.551,8.2 5.051,9 5.351,7.2 4.051,6 5.75,5.7 	"/></g><g id="rank-badge-technical-cadet" class="aristotle-svg-svg ">	<rect x="4" y="4" fill="none" width="29" height="39.104"/><g>		<path fill="#FFB81A" d="M27.7,13.3V29l-9.2,6.396L9.4,29.2l-0.101-16h18.4 M29.8,11.1H7.2l0.1,19.299L18.601,38l11.3-7.896v-19			L29.8,11.1L29.8,11.1z"/></g>	<line fill="none" stroke="#FFB81A" stroke-width="2.9184" stroke-miterlimit="10" x1="7.8" y1="19.672" x2="29.2" y2="19.672"/><polygon fill="#FFFFFF" points="30.5,4 31.3,5.7 33,6 31.8,7.2 32.101,9 30.5,8.2 29,9 29.3,7.2 28,6 29.8,5.7 	"/><polygon fill="#FFFFFF" points="6.401,4 7.2,5.7 8.901,6 7.7,7.2 8,9 6.401,8.2 5,9 5.2,7.2 4,6 5.7,5.7 	"/><line fill="none" stroke="#FFB81A" stroke-width="2.9184" stroke-miterlimit="10" x1="7.8" y1="25.802" x2="29.2" y2="25.802"/></g><g id="rank-badge-cadet-first-class" class="aristotle-svg-svg ">	<rect x="4" y="4" fill="none" width="29" height="39.104"/><g>		<path fill="#FFB81A" d="M27.7,13.3V29l-9.2,6.396L9.4,29.2l-0.101-16h18.4 M29.8,11.1H7.2l0.1,19.299L18.602,38l11.3-7.896v-19			L29.8,11.1L29.8,11.1z"/></g>	<line fill="none" stroke="#FFB81A" stroke-width="2.9184" stroke-miterlimit="10" x1="7.8" y1="21" x2="29.2" y2="21"/><polygon fill="#FFFFFF" points="30.5,4 31.3,5.7 33,6 31.8,7.2 32.102,9 30.5,8.2 29,9 29.3,7.2 28,6 29.8,5.7 	"/><polygon fill="#FFFFFF" points="6.401,4 7.2,5.7 8.901,6 7.7,7.2 8,9 6.401,8.2 5,9 5.2,7.2 4,6 5.7,5.7 	"/></g><g id="rank-badge-cadet" class="aristotle-svg-svg ">	<rect x="4" y="4" fill="none" width="29" height="39.104"/><g>		<path fill="#FFB81A" d="M27.649,13.3V29l-9.199,6.399l-9.101-6.196l-0.1-16h18.399 M29.849,11.1h-22.7L7.25,30.399l11.3,7.604			l11.3-7.896L29.849,11.1L29.849,11.1z"/></g>	<line fill="none" stroke="#FFB81A" stroke-width="2.9184" stroke-miterlimit="10" x1="7.849" y1="21" x2="29.25" y2="21"/></g><g id="rank-badge-recruit" class="aristotle-svg-svg ">	<g>		<path fill="#FFB81A" d="M27.75,13.3V29l-9.2,6.396L9.45,29.2l-0.101-16h18.4 M29.849,11.1h-22.7L7.25,30.399l11.3,7.604			l11.3-7.896L29.849,11.1L29.849,11.1z"/></g>	<rect x="4" y="4" fill="none" width="29" height="39.104"/></g><g id="list-progress-base" class="aristotle-svg-svg ">	<g id="hex-outer_1_" class="aristotle-svg-svg ">		<g id="XMLID_1080_" class="aristotle-svg-svg ">			<path fill="#F9773E" d="M18.2,7.201l11.3,5.896v12.899l-11.3,5.896L6.9,25.996V13.101L18.2,7.201 M18.2,4L4,11.396v16.4				l14.2,7.396l14.2-7.396v-16.4L18.2,4L18.2,4z"/></g>	</g>	<g id="hex-inner_1_" class="aristotle-svg-svg ">		<g id="XMLID_2384_" class="aristotle-svg-svg ">			<polygon fill="#FFB81A" points="18.2,29.9 9.099,25 9.099,14.101 18.2,9.201 27.2,14.101 27.2,24.9 			"/></g>	</g></g><g id="list-progress-complete" class="aristotle-svg-svg ">	<g id="hex-inner" class="aristotle-svg-svg ">		<g>			<polygon fill="#71A8A8" points="21.8,13.801 25.701,16.201 21.201,16.201 20.5,16.201 27.201,21.9 27.201,14.101 18.101,9.201 				16.101,10.201 			"/></g>		<g>			<polygon fill="#71A8A8" points="15.5,23.5 11.9,21.101 16.101,21.101 17.8,21 9.101,14.301 9.101,25 18.101,29.9 22.201,27.701 							"/></g>	</g>	<g id="hex-outer" class="aristotle-svg-svg ">		<polygon fill="#53848C" points="24,28.801 18.101,32 6.8,26 6.8,13.101 10.4,11.201 8.4,9.101 4,11.4 4,27.701 18.101,35.101 			26.8,30.601 		"/><polygon fill="#53848C" points="18.101,4 11.5,7.4 14.4,9.201 18.101,7.201 29.5,13.101 29.5,26 27.701,26.9 29.9,29 32.3,27.701 			32.3,11.4 		"/></g>	<g id="lightning_1_" class="aristotle-svg-svg ">		<g id="lightning" class="aristotle-svg-svg ">			<polygon fill="#FFB81A" points="7.701,6.5 21.201,14.9 17.101,14.9 28.3,24.5 23.4,24.5 30.5,31.5 16.201,22.301 21.601,22.301 				9.601,13.101 14,12.9 			"/></g>	</g></g><g id="ctanlee" class="aristotle-svg-svg ">	<circle fill="#FFFFFF" cx="21" cy="21" r="6.398"/><path fill="none" stroke="#FFFFFF" stroke-width="6" stroke-miterlimit="10" d="M25.5,37.4c7.2-2,12.5-8.5,12.5-16.396"/><path fill="none" stroke="#FFFFFF" stroke-width="6" stroke-miterlimit="10" d="M4,21c0,7.801,5.3,14.396,12.5,16.396"/><path fill="none" stroke="#FFFFFF" stroke-width="6" stroke-miterlimit="10" d="M32.801,8.8c-3.1-2.896-7.2-4.8-11.8-4.8		c-4.7,0-8.9,1.896-12,4.896"/></g><g id="action-btn-fist" class="aristotle-svg-svg ">	<polygon fill="#FFFFFF" points="35.7,86.896 4,70.295 4,33.795 35.7,17.196 67.401,33.795 67.401,70.295 	"/><polygon fill="#F9773E" points="35.7,84.497 6.2,68.997 6.2,34.997 35.7,19.596 65.2,34.997 65.2,68.997 	"/><path fill="#345D6E" d="M42.3,12.696c0,0,7.4,2,10.104,3.4c-3.397,6.5-11.5,2.397-11.5,2.397s-2.3,2.799-3,3.603		c11.103,5.196,26.2,0.696,26.2,0.696l-0.897,5.896l-5.603,13.5l-9.7,5l-17.699,35.31L9.504,71.691l25.799-32.396l-2.698-19.104		L42.3,12.696z"/><path fill="none" stroke="#FFFFFF" stroke-width="1.4167" stroke-miterlimit="10" d="M42.3,12.696c0,0,7.4,2,10.104,3.4		c-3.397,6.5-11.5,2.397-11.5,2.397s-2.3,2.799-3,3.603c11.103,5.196,26.2,0.696,26.2,0.696l-0.897,5.896l-5.603,13.5l-9.7,5		l-17.699,35.31L9.504,71.691l25.799-32.396l-2.698-19.104L42.3,12.696z"/><path fill="#345D6E" d="M48,5.497l-2.103-1.104c-1.8-0.896-3.897-0.2-4.8,1.5l-7,13.396l8.5,4.396l7-13.396		C50.5,8.497,49.8,6.396,48,5.497"/><path fill="none" stroke="#FFFFFF" stroke-width="1.4167" stroke-miterlimit="10" d="M48,5.497l-2.103-1.104		c-1.8-0.896-3.897-0.2-4.8,1.5l-7,13.396l8.5,4.396l7-13.396C50.5,8.497,49.8,6.396,48,5.497z"/><path fill="#345D6E" d="M54.5,6.896l2.604,1.7c1.3,0.8,1.695,2.5,0.8,3.8l-7.3,11.2c-3-0.9-4.397-2.103-6.305-4.304l6.305-11.396		C51.5,6.596,53.2,6.096,54.5,6.896"/><path fill="none" stroke="#FFFFFF" stroke-width="1.4167" stroke-miterlimit="10" d="M54.5,6.896l2.604,1.7		c1.3,0.8,1.695,2.5,0.8,3.8l-7.3,11.2c-3-0.9-4.397-2.103-6.305-4.304l6.305-11.396C51.5,6.596,53.2,6.096,54.5,6.896z"/><path fill="#345D6E" d="M62.5,14.997l-1.896-1.308c-1.305-0.896-3-0.5-3.805,0.7l-6.103,9.2c1.3,2,3.103,3.6,6,4l6.397-8.9		C64,17.497,63.7,15.795,62.5,14.997"/><path fill="none" stroke="#FFFFFF" stroke-width="1.4167" stroke-miterlimit="10" d="M62.5,14.997l-1.896-1.308		c-1.305-0.896-3-0.5-3.805,0.7l-6.103,9.2c1.3,2,3.103,3.6,6,4l6.397-8.9C64,17.497,63.7,15.795,62.5,14.997z"/><path fill="#345D6E" d="M67.102,24.196l-5.302,6.9c-2.306-0.7-3.898-1.9-5.104-3.4l5.3-7.3c0.897-1.3,2.8-1.5,4-0.5l0.7,0.604		C67.8,21.396,68.001,22.997,67.102,24.196"/><path fill="none" stroke="#FFFFFF" stroke-width="1.4167" stroke-miterlimit="10" d="M67.102,24.196l-5.302,6.9		c-2.306-0.7-3.898-1.9-5.104-3.4l5.3-7.3c0.897-1.3,2.8-1.5,4-0.5l0.7,0.604C67.8,21.396,68.001,22.997,67.102,24.196z"/><path fill="#345D6E" d="M58,34.096c0.897-0.603,3.8-3,3.8-3c-2.1-0.4-3.8-1.603-5.1-3.4l-2.803,2.7c-1.104,1-0.897,2.7,0.303,3.5		l0.6,0.396C55.8,34.896,57.2,34.696,58,34.096"/><path fill="none" stroke="#FFFFFF" stroke-width="1.4167" stroke-miterlimit="1" d="M58,34.096c0.897-0.603,3.8-3,3.8-3		c-2.1-0.4-3.8-1.603-5.1-3.4l-2.803,2.7c-1.104,1-0.897,2.7,0.303,3.5l0.6,0.396C55.8,34.896,57.2,34.696,58,34.096z"/><path fill="#345D6E" d="M50.2,30.997L49,30.099c-0.8-0.603-1-1.7-0.5-2.603l2.2-3.897c1.397,2.5,3.397,3.8,6,4l-3.4,3.196		C52.5,31.696,51.2,31.696,50.2,30.997"/><path fill="none" stroke="#FFFFFF" stroke-width="1.4167" stroke-miterlimit="1" d="M50.2,30.997L49,30.099		c-0.8-0.603-1-1.7-0.5-2.603l2.2-3.897c1.397,2.5,3.397,3.8,6,4l-3.4,3.196C52.5,31.696,51.2,31.696,50.2,30.997z"/><path fill="#345D6E" d="M41.602,24.795l6,4.304l3.103-5.5c-3-0.7-4.5-1.804-6.303-4.304L41.602,24.795z"/><path fill="none" stroke="#FFFFFF" stroke-width="1.4167" stroke-miterlimit="10" d="M41.602,24.795l6,4.304l3.103-5.5		c-3-0.7-4.5-1.804-6.303-4.304L41.602,24.795z"/><path fill="#345D6E" d="M10,71.497l20.897-33.397l-2.197-19l10.8-10.2c0,0,10.104,5.3,12.8,6.7c-3.396,6.5-10.101,2.3-10.101,2.3		s-1.302,2.896-1.899,3.7c9,4.696,10.808,9,3.5,16.397"/><path fill="none" stroke="#FFFFFF" stroke-width="1.4167" stroke-linecap="round" stroke-miterlimit="10" d="M10,71.497		l20.897-33.397l-2.197-19l10.8-10.2c0,0,10.104,5.3,12.8,6.7c-3.396,6.5-10.101,2.3-10.101,2.3s-1.302,2.896-1.899,3.7		c9,4.696,10.808,9,3.5,16.397"/><path fill="#FFFFFF" d="M26,73.696c0.897-8.3,2.8-16.5,5.604-24.6c0.195,1.8,0.396,3.6,0.695,5.3		c1.897-5.8,4.397-11.396,7.305-16.896C39.3,39.603,39.207,41.603,39,43.603c2.3-3.5,4.7-6.804,7.397-10		c1.303-1.603,1.7-1.2,0.603,0.5c-3.8,6.104-6.896,12.5-9.3,19c-0.103-1.804-0.2-3.603-0.2-5.396c-2.2,5.194-4,10.5-5.3,15.896		c-0.4-1.896-0.803-3.804-1.2-5.804C28.901,62.997,27.2,68.295,26,73.696"/></g><g id="btn-lightning" class="aristotle-svg-svg ">	<path fill="#FFB81A" d="M4,51.002l59,12l60-12l-3-2.459L63.005,59.941L7,48.55L4,51.002z M7,18.452L62.979,7.066L120,19.42l3-2.42		L63,4l0,0L4,16L7,18.452z"/><path fill="#FFB81A" d="M32.495,50.604c9.358-3.825,19.271-6.614,29.522-8.252c-1.818,1.227-3.6,2.491-5.325,3.787		c7.282-1.253,14.733-1.91,22.276-1.934c-2.351,0.923-4.646,1.907-6.893,2.948c7.479,0.609,14.921,1.855,22.223,3.731		c-11.213-1.329-22.346-1.171-33.122,0.346c1.834-1.153,3.716-2.266,5.646-3.336c-6.85,0.652-13.563,1.838-20.105,3.528		c1.771-1.565,3.604-3.093,5.498-4.582C45.563,47.595,38.97,48.853,32.495,50.604z"/></g><g id="quiz-header" class="aristotle-svg-svg ">	<line fill="none" stroke="#6B989F" stroke-width="2" stroke-miterlimit="10" x1="4" y1="34" x2="281" y2="34"/><line fill="none" stroke="#6B989F" stroke-width="2" stroke-miterlimit="10" x1="361.001" y1="34" x2="638.001" y2="34"/><polygon opacity="0.5" fill="#6B989F" enable-background="new    " points="334.838,52.221 323,58.366 300.5,46.686 300.5,21.313 		307.811,17.518 304.164,13.777 295.5,18.275 295.5,49.724 323,64 339.714,55.325 	"/><polygon opacity="0.5" fill="#6B989F" enable-background="new    " points="323,4 310.304,10.591 315.244,13.66 323,9.633 		345.5,21.313 345.5,46.686 341.856,48.578 345.636,52.25 350.5,49.724 350.5,18.275 	"/><polygon fill="#F9773E" points="303,9 328.828,25.037 320.912,25.033 342.43,43.422 333.1,43.556 346.811,56.878 319.273,39.354 		329.622,39.166 306.623,21.461 314.893,21.204 	"/></g><g id="quiz-answer-bg" class="aristotle-svg-svg ">	<polygon  class="bg"  fill="#335E6E" points="5.5,308.111 5.5,29.889 103.999,5.545 202.094,29.888 202.498,308.112 104,332.455 			"/><path  class="outline"  fill="#6B989F" d="M103.999,7.091l96.597,23.97l0.401,275.881L104,330.913L7,306.938V31.062L103.999,7.091		 M104,4L4,28.721v280.565L104,334l100-24.714l-0.408-280.565L104,4L104,4z"/><path  class="lightning "  fill="#6B989F" d="M68.194,285.052c10.85-4.438,22.324-7.663,34.212-9.562		c-2.113,1.421-4.171,2.885-6.169,4.389c8.438-1.447,17.07-2.215,25.812-2.235c-2.725,1.062-5.387,2.21-7.985,3.417		c8.673,0.705,17.286,2.146,25.747,4.315c-12.992-1.538-25.893-1.354-38.377,0.4c2.126-1.335,4.306-2.624,6.541-3.864		c-7.928,0.755-15.719,2.129-23.3,4.087c2.05-1.812,4.175-3.584,6.371-5.308C83.334,281.566,75.696,283.021,68.194,285.052z"/><path  class="lightning"  fill="#6B989F" d="M68.194,54.061c10.85-4.438,22.324-7.659,34.212-9.562		c-2.113,1.429-4.171,2.892-6.169,4.395c8.438-1.452,17.07-2.214,25.812-2.238c-2.725,1.067-5.387,2.211-7.985,3.417		c8.673,0.703,17.286,2.146,25.747,4.319c-12.992-1.538-25.893-1.354-38.377,0.396c2.126-1.335,4.306-2.624,6.541-3.864		c-7.928,0.763-15.719,2.137-23.3,4.094c2.05-1.812,4.175-3.584,6.371-5.312C83.334,50.576,75.696,52.031,68.194,54.061z"/><line  class="line"  fill="none" stroke="#FFB81A" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" x1="32.5" y1="95.5" x2="175.5" y2="95.5"/><line  class="line "  fill="none" stroke="#FFB81A" stroke-width="2" stroke-linecap="round" stroke-miterlimit="10" x1="32.5" y1="232.5" x2="175.5" y2="232.5"/></g><g id="next-question" class="aristotle-svg-svg ">	<polygon fill="#FF7931" points="148.999,41.446 4,41.446 4,4 148.999,4 156.007,23.473 	"/></g><g id="btn-got-it" class="aristotle-svg-svg ">	<path fill="#F9773E" d="M4,37.484c10.939-4.513,22.521-7.805,34.517-9.737c-2.134,1.447-4.207,2.938-6.226,4.469		c8.514-1.479,17.224-2.255,26.039-2.282c-2.75,1.089-5.438,2.251-8.062,3.479c8.749,0.719,17.438,2.188,25.979,4.402		c-13.104-1.566-26.118-1.381-38.721,0.408c2.146-1.36,4.35-2.673,6.604-3.937c-7.997,0.77-15.856,2.169-23.507,4.163		c2.062-1.847,4.212-3.65,6.43-5.406C19.274,33.935,11.568,35.418,4,37.484z"/><path fill="#FFB81A" d="M26.764,10.141c-0.32,2.88-0.62,4.041-1.32,5.201c-0.96,1.621-2.26,2.441-3.841,2.441		c-2.42,0-3.94-2.021-3.94-5.221c0-2.081,0.521-4.321,1.347-5.781C20.029,4.961,21.529,4,23.283,4c1.9,0,3.16,1.14,3.501,3.181		l-2.654,1c-0.021-0.68-0.062-0.86-0.16-1.161c-0.146-0.44-0.5-0.68-0.979-0.68c-0.641,0-1.158,0.44-1.581,1.32		c-0.6,1.28-0.979,3.241-0.979,5.062c0,1.78,0.521,2.68,1.54,2.68c1.021,0,1.643-0.92,1.922-2.9h-1.646l0.279-2.36L26.764,10.141		L26.764,10.141z"/><path fill="#FFB81A" d="M29.642,14.022c0-1.201,0.318-2.541,0.84-3.541c0.681-1.32,1.801-2.041,3.146-2.041		c1.802,0,2.813,1.22,2.813,3.421c0,3.581-1.561,5.881-3.961,5.881C30.621,17.742,29.642,16.442,29.642,14.022z M33.923,12.061		c0-0.92-0.198-1.38-0.578-1.38c-0.66,0-1.224,1.58-1.224,3.4c0,0.9,0.224,1.42,0.614,1.42		C33.402,15.502,33.923,13.941,33.923,12.061z"/><path fill="#FFB81A" d="M40.241,10.681h-0.84l0.261-2.061h0.847l0.302-2.46h2.461l-0.303,2.46h1.001l-0.238,2.061h-1l-0.858,6.881		H39.41L40.241,10.681z"/><path fill="#FFB81A" d="M52.501,8.62h2.461l-1.104,8.942h-2.461L52.501,8.62z M52.541,6.16c0-0.96,0.84-1.78,1.773-1.78		c0.766,0,1.36,0.6,1.36,1.38c0,0.96-0.82,1.801-1.78,1.801C53.121,7.56,52.541,6.96,52.541,6.16z"/><path fill="#FFB81A" d="M58.541,10.681h-0.847l0.267-2.061h0.843l0.3-2.46h2.461l-0.301,2.46h1.001l-0.24,2.061h-1l-0.854,6.881		h-2.467L58.541,10.681z"/><path fill="#FFB81A" d="M66.441,14.421c0.82,0,1.46,0.64,1.46,1.46c0,1.02-0.88,1.9-1.896,1.9c-0.842,0-1.46-0.64-1.46-1.48		C64.541,15.302,65.421,14.421,66.441,14.421z M66.401,4.219h2.562l-1.146,9.342h-2.58L66.401,4.219z"/></g><g id="btn-continue" class="aristotle-svg-svg ">	<path fill="#FFFFFF" d="M53.56,7.064l47.439,10.121v22.418l-47.415,9.339L6.999,39.611V16.391L53.56,7.064 M53.578,4L4,13.936		v28.139l49.578,9.937L104,42.074V14.764L53.578,4L53.578,4z"/><path fill="#FFFFFF" d="M22.882,27.127c-1.135,0.379-1.513,0.463-2.171,0.463c-1.373,0-2.787-0.615-3.74-1.625		c-0.799-0.854-1.232-1.979-1.232-3.229c0-2.759,2.188-4.938,4.944-4.938c0.729,0,1.317,0.127,2.199,0.478v2.899		c-0.574-0.688-1.261-1.022-2.103-1.022c-1.457,0-2.508,1.077-2.508,2.577c0,0.798,0.268,1.429,0.826,1.891		c0.477,0.396,1.062,0.616,1.682,0.616c0.798,0,1.473-0.308,2.103-0.979V27.127L22.882,27.127z"/><path fill="#FFFFFF" d="M26.84,18.893c0.883-0.744,2.115-1.178,3.418-1.178c1.556,0,2.83,0.521,3.824,1.562		c0.867,0.911,1.346,2.115,1.346,3.418c0,1.478-0.646,2.857-1.752,3.796c-0.938,0.785-2.087,1.184-3.459,1.184		c-2.941,0-5.127-2.156-5.127-5.07C25.09,21.217,25.735,19.83,26.84,18.893z M30.258,25.321c1.457,0,2.634-1.177,2.634-2.634		c0-1.442-1.177-2.618-2.634-2.618c-1.442,0-2.633,1.176-2.633,2.591C27.625,24.145,28.787,25.321,30.258,25.321z"/><path fill="#FFFFFF" d="M38.04,17.995h2.423l4.469,5.722v-5.722h2.424v9.35h-2.424l-4.469-5.722v5.722H38.04V17.995z"/><path fill="#FFFFFF" d="M51.383,20.055h-1.977v-2.062h6.415v2.062h-2.017v7.283H51.38L51.383,20.055L51.383,20.055z"/><path fill="#FFFFFF" d="M57.892,17.995h2.424v9.35h-2.424V17.995z"/><path fill="#FFFFFF" d="M63.45,17.995h2.426l4.468,5.722v-5.722h2.424v9.35h-2.424l-4.468-5.722v5.722H63.45V17.995z"/><path fill="#FFFFFF" d="M83.838,23.389c0,1.373-0.238,2.114-0.911,2.871c-0.771,0.867-1.862,1.312-3.222,1.312		c-1.431,0-2.689-0.53-3.333-1.396c-0.49-0.658-0.675-1.414-0.675-2.787v-5.396h2.426v5.062c0,1.062,0.025,1.271,0.266,1.666		c0.267,0.445,0.771,0.715,1.357,0.715c0.616,0,1.163-0.295,1.415-0.756c0.21-0.365,0.253-0.646,0.253-1.625v-5.062h2.424V23.389		L83.838,23.389z"/><path fill="#FFFFFF" d="M86.774,17.995h5.311v2.062h-2.887v1.555h2.731v2.062h-2.731v1.604h2.887v2.062h-5.311V17.995z"/><path fill="#FFFFFF" d="M23.785,39.592c9.118-3.729,18.764-6.439,28.75-8.035c-1.774,1.193-3.505,2.426-5.185,3.688		c7.09-1.222,14.346-1.854,21.689-1.883c-2.289,0.897-4.526,1.856-6.71,2.87c7.286,0.594,14.524,1.807,21.636,3.633		c-10.918-1.293-21.757-1.141-32.248,0.337c1.785-1.122,3.617-2.205,5.496-3.248c-6.662,0.642-13.21,1.79-19.58,3.438		c1.723-1.522,3.508-3.013,5.354-4.459C36.509,36.663,30.089,37.887,23.785,39.592z"/></g><g id="perfect-answer" class="aristotle-svg-svg ">	<g id="XMLID_2433_" class="aristotle-svg-svg ">		<polygon fill="#335E6E" points="18.725,36.129 4,28.485 4,11.644 18.725,4 33.451,11.644 33.451,28.485 		"/></g>	<polygon fill="#FFFFFF" points="18.725,7.843 21.697,15.764 29.715,16.239 23.533,21.707 25.516,29.821 18.725,25.381 		11.934,29.821 13.916,21.707 7.735,16.239 15.754,15.764 	"/></g><g id="quiz-btn" class="aristotle-svg-svg ">	<g  class="bg " >		<polygon fill="#335E6E" points="4,50 63,62 123,50 123,17 63,4 4,16 		"/></g>	<path fill="#FFB81A" d="M27.545,46.795c10.854-4.434,22.326-7.664,34.213-9.562c-2.112,1.422-4.17,2.885-6.169,4.387		c8.438-1.451,17.07-2.213,25.812-2.238c-2.729,1.068-5.394,2.209-7.983,3.416c8.672,0.705,17.284,2.148,25.746,4.322		c-12.992-1.539-25.894-1.355-38.375,0.4c2.125-1.336,4.305-2.625,6.541-3.865c-7.933,0.756-15.721,2.129-23.302,4.088		c2.052-1.812,4.174-3.584,6.369-5.309C42.687,43.309,35.047,44.766,27.545,46.795z"/></g><g id="btn-generic" class="aristotle-svg-svg ">	<path fill="#FFB81A" d="M4,51.002l59,12l60-12V17L63,4l0,0L4,16V51.002z M7,18.451L62.979,7.065L120,19.419v29.123L63.005,59.94		L7,48.549V18.451z"/><path fill="#FFB81A" d="M32.495,50.604c9.365-3.825,19.271-6.614,29.529-8.252c-1.824,1.227-3.6,2.491-5.326,3.787		c7.283-1.253,14.734-1.91,22.277-1.934c-2.351,0.923-4.648,1.907-6.893,2.948c7.483,0.609,14.921,1.855,22.223,3.731		c-11.213-1.329-22.346-1.171-33.122,0.346c1.834-1.153,3.716-2.266,5.646-3.336c-6.844,0.652-13.564,1.838-20.106,3.528		c1.769-1.565,3.602-3.093,5.498-4.582C45.563,47.594,38.97,48.852,32.495,50.604z"/></g><g id="speaker" class="aristotle-svg-svg ">	<path fill="none" stroke="#FFB81A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="		M32.61,58.493c10.218-2.746,17.732-11.951,17.732-22.892c0-10.941-7.515-20.146-17.732-22.891"/><path fill="none" stroke="#FFB81A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="		M40.538,67.202c14.2-4.416,24.44-16.891,24.44-31.601c0-14.71-10.24-27.185-24.44-31.601"/><path fill="none" stroke="#FFB81A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="		M28.11,47.821c5.122-2.226,8.655-6.85,8.655-12.219c0-5.371-3.533-9.996-8.655-12.221"/><polygon fill="#FFB81A" points="12.774,44.639 12.774,26.563 20.401,21.772 20.401,49.43 	"/><rect x="4" y="26.563" fill="#FFB81A" width="11.273" height="18.075"/></g><g id="no-phone" class="aristotle-svg-svg ">	<path fill="#FFB81A" d="M71.691,85.5H35.309V21.501h36.382V85.5z M71.886,18.501H35.115c-1.55,0-2.807,1.256-2.807,2.806v64.388		c0,1.549,1.257,2.806,2.807,2.806h36.771c1.55,0,2.806-1.257,2.806-2.806V21.307C74.691,19.757,73.435,18.501,71.886,18.501"/><path fill="#FFB81A" d="M64.94,71.566H42.059V27.935h22.882L64.94,71.566L64.94,71.566z M66.587,24.935H40.414		c-0.748,0-1.354,0.605-1.354,1.354v46.922c0,0.748,0.606,1.355,1.354,1.355h26.173c0.748,0,1.354-0.607,1.354-1.355V26.288		C67.94,25.54,67.335,24.935,66.587,24.935"/><circle fill="none" stroke="#E03F07" stroke-width="3" stroke-miterlimit="10" cx="53.5" cy="53.5" r="49.5"/><line fill="none" stroke="#E03F07" stroke-width="3" stroke-miterlimit="10" x1="87.5" y1="19.5" x2="19.5" y2="87.5"/><line fill="none" stroke="#FFB81A" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" x1="48.5" y1="79.719" x2="58.5" y2="79.719"/></g><g id="duty" class="aristotle-svg-svg ">	<path fill="#6B989F" d="M24,8.515l16,8.375v18.227l-16,8.375L8,35.116V16.89L24,8.515 M24,4L4,14.469v23.062L24,48l20-10.469		V14.469L24,4L24,4z"/></g><g id="duty-active" class="aristotle-svg-svg ">	<path fill="#F9773E" d="M24,8.515l16,8.375v18.221l-16,8.375L8,35.111V16.89L24,8.515 M24,4L4,14.469v23.062L24,48l20-10.469		V14.469L24,4L24,4z"/><polygon fill="#FFB81A" points="24,40.5 11.275,33.602 11.275,18.399 24,11.5 36.726,18.399 36.726,33.602 	"/></g><g id="duty-complete" class="aristotle-svg-svg ">	<polygon fill="#71A8A8" points="29.197,17.963 34.619,21.318 28.237,21.314 27.411,21.314 36.728,29.252 36.728,18.399 24,11.5 		21.205,13.016 	"/><polygon fill="#71A8A8" points="20.313,31.411 15.219,28.18 21.256,28.07 23.596,28.027 11.272,18.57 11.272,33.601 24,40.5 		29.737,37.39 	"/><polygon fill="#53848C" points="32.608,39.363 24,43.869 7.637,35.304 7.637,16.696 12.953,13.914 10.302,11.17 4,14.469 4,37.531 		24,48 36.154,41.639 	"/><polygon fill="#53848C" points="24,4 14.766,8.834 18.359,11.084 24,8.131 40.363,16.696 40.363,35.304 37.713,36.691 		40.461,39.384 44,37.531 44,14.469 	"/><polygon fill="#FFB81A" points="9.454,7.667 28.238,19.428 22.482,19.424 38.131,32.91 31.345,33.008 41.316,42.777 21.289,29.927 		28.816,29.789 12.09,16.806 18.103,16.616 	"/></g><g id="btn-acknowledge" class="aristotle-svg-svg ">	<polygon  class="bg "  fill="#6B989F" points="5.503,55.053 5.503,18.948 95.223,5.518 186.503,20.073 186.503,55.05 		95.231,68.484 	"/><path  class="outline "  fill="#335E6E" d="M95.215,7.036l89.788,14.317v32.401l-89.77,13.213L7.003,53.76V20.239L95.215,7.036		 M95.229,4L4,17.655v38.69L95.229,70L188,56.345V18.793L95.229,4L95.229,4z"/><path  class="lightning "  fill="#FFB81A" d="M60.195,50.794c10.851-4.432,22.326-7.663,34.213-9.562		c-2.113,1.422-4.17,2.886-6.169,4.388c8.437-1.452,17.07-2.213,25.811-2.24c-2.725,1.069-5.388,2.21-7.979,3.416		c8.673,0.706,17.286,2.149,25.746,4.323c-12.991-1.539-25.896-1.356-38.375,0.4c2.125-1.336,4.305-2.625,6.54-3.865		c-7.934,0.756-15.725,2.13-23.306,4.088c2.056-1.813,4.181-3.584,6.371-5.309C75.337,47.309,67.698,48.765,60.195,50.794z"/></g><g id="chapter-bracket" class="aristotle-svg-svg ">	<polyline fill="none" stroke="#FFB81A" stroke-width="4" stroke-miterlimit="10" points="4,104.992 27,104.992 27,4 4,4 	"/></g><g id="tesselation" class="aristotle-svg-svg ">	<rect x="4.006" y="4" fill="none" width="1024" height="768"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M158.241,148.183c-22.989,13.425-45.722,28.383-68.149,45.806		c-22.438-34.314-44.562-72.895-66.347-116.986C67.308,105.954,112.267,129.343,158.241,148.183z"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M4.004,63.43c6.552,4.655,13.133,9.178,19.741,13.573		c-6.612,4.599-13.188,9.448-19.739,14.581"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M4.008,248.9c6.546,1.995,13.126,3.933,19.732,5.816		c-6.607,7.11-13.188,14.545-19.736,22.339"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M23.745,432.43c-6.612,9.621-13.188,19.639-19.739,30.092"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M4,619.842c6.549-3.326,13.131-6.562,19.745-9.699		c-6.606,12.133-13.188,24.736-19.739,37.85"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M298.849,191.806c-23.813,13.436-47.476,27.41-70.924,42.702		c-23.449-25.637-46.692-54.072-69.688-86.325C204.216,167.013,251.222,181.297,298.849,191.806z"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M443.202,212.397c-24.229,15.043-48.416,29.713-72.491,44.723		c-24.068-19.889-48.046-41.379-71.857-65.313C346.478,202.301,394.733,209.028,443.202,212.397z"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M588.812,212.397c-24.232,18.401-48.517,35.48-72.806,51.963		c-24.286-16.484-48.573-33.561-72.81-51.963C491.67,215.751,540.345,215.751,588.812,212.397z"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M733.164,191.806c-23.812,23.934-47.787,45.423-71.858,65.313		c-24.077-15.01-48.255-29.682-72.489-44.723C637.282,209.028,685.535,202.302,733.164,191.806z"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M873.772,148.183c-22.988,32.255-46.24,60.689-69.687,86.325		c-23.45-15.293-47.107-29.267-70.928-42.701C780.793,181.297,827.795,167.012,873.772,148.183z"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M1008.269,77.002c-21.777,44.094-43.914,82.672-66.343,116.986		c-22.438-17.423-45.166-32.379-68.153-45.806C919.754,129.344,964.707,105.955,1008.269,77.002z"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M1028.002,91.578c-6.545-5.131-13.123-9.979-19.729-14.575		c6.612-4.395,13.188-8.917,19.739-13.572"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M4,156.163c28.115,14.279,56.848,26.818,86.088,37.826		c-22.434,17.427-44.562,37.314-66.345,60.728c-6.612-10.876-13.188-22.187-19.739-33.969"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M227.925,234.508c-23.451,15.295-46.695,31.907-69.688,50.71		c-22.984-26.876-45.721-56.921-68.15-91.229C134.95,210.874,181.023,224.164,227.925,234.508z"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M370.711,257.12c-24.074,15.011-48.046,30.357-71.857,46.791		c-23.813-20.936-47.479-43.771-70.924-69.402C274.827,244.844,322.562,252.239,370.711,257.12z"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M516.006,264.36c-24.286,16.484-48.573,32.371-72.812,48.372		c-24.229-17.444-48.417-35.726-72.489-55.612C418.863,261.99,467.437,264.356,516.006,264.36z"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M661.301,257.12c-24.076,19.886-48.263,38.169-72.491,55.612		c-24.23-16.002-48.521-31.888-72.803-48.372C564.579,264.356,613.151,261.993,661.301,257.12z"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M804.088,234.508c-23.451,25.634-47.109,48.468-70.931,69.402		c-23.812-16.434-47.785-31.779-71.855-46.791C709.454,252.239,757.187,244.845,804.088,234.508z"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M941.927,193.99c-22.431,34.306-45.168,64.354-68.156,91.229		c-22.988-18.801-46.233-35.415-69.685-50.711C850.991,224.165,897.062,210.875,941.927,193.99z"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M1028.01,220.745c-6.549,11.784-13.13,23.095-19.743,33.972		c-21.783-23.413-43.908-43.303-66.34-60.728c29.241-11.008,57.97-23.546,86.085-37.825"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M158.241,285.219c-22.989,18.803-45.722,39.801-68.149,63.978		c-22.438-27.561-44.562-58.66-66.347-94.48C67.308,267.124,112.267,277.146,158.241,285.219z"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M298.849,303.91c-23.813,16.435-47.476,33.956-70.924,53.385		c-23.449-21.499-46.692-45.204-69.688-72.075C204.216,293.287,251.222,299.408,298.849,303.91z"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M443.202,312.731c-24.229,16.004-48.416,32.12-72.491,49.08		c-24.068-17.938-48.046-36.97-71.857-57.901C346.478,308.408,394.733,311.288,443.202,312.731z"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M588.812,312.731c-24.232,17.441-48.517,34.045-72.806,50.526		c-24.286-16.483-48.573-33.085-72.81-50.526C491.67,314.167,540.345,314.167,588.812,312.731z"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M733.164,303.91c-23.812,20.931-47.787,39.961-71.858,57.901		c-24.077-16.962-48.255-33.078-72.489-49.08C637.282,311.288,685.535,308.406,733.164,303.91z"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M873.772,285.219c-22.988,26.875-46.24,50.582-69.687,72.08		c-23.45-19.436-47.107-36.949-70.928-53.384C780.793,299.409,827.795,293.285,873.772,285.219z"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M1008.269,254.716c-21.777,35.819-43.914,66.92-66.343,94.48		c-22.438-24.177-45.166-45.171-68.153-63.978C919.754,277.146,964.707,267.121,1008.269,254.716z"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M1028.01,277.053c-6.547-7.793-13.128-15.227-19.741-22.336		c6.613-1.883,13.194-3.821,19.741-5.816"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M4.008,341.635c28.108,2.854,56.838,5.357,86.078,7.562		c-22.437,24.187-44.562,51.549-66.348,83.233c-6.607-8.363-13.188-17.088-19.732-26.211"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M227.925,357.294c-23.451,19.435-46.695,40.77-69.688,64.959		c-22.984-21.492-45.721-45.508-68.15-73.062C134.95,352.574,181.023,355.227,227.925,357.294z"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M370.711,361.811c-24.074,16.964-48.046,34.769-71.857,54.203		c-23.813-17.938-47.479-37.229-70.924-58.719C274.827,359.362,322.562,360.838,370.711,361.811z"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M516.006,363.257c-24.286,16.479-48.573,32.846-72.812,49.809		c-24.229-16.48-48.417-33.322-72.489-51.255C418.863,362.785,467.437,363.257,516.006,363.257z"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M661.301,361.811c-24.076,17.935-48.263,34.771-72.491,51.255		c-24.23-16.963-48.521-33.326-72.803-49.809C564.579,363.257,613.151,362.785,661.301,361.811z"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M804.088,357.295c-23.451,21.489-47.109,40.781-70.931,58.718		c-23.812-19.438-47.785-37.238-71.855-54.203C709.454,360.835,757.187,359.36,804.088,357.295z"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M941.927,349.198c-22.431,27.552-45.168,51.562-68.156,73.062		c-22.988-24.189-46.233-45.526-69.685-64.959C850.991,355.227,897.062,352.573,941.927,349.198z"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M1028.01,406.215c-6.549,9.123-13.13,17.85-19.743,26.215		c-21.783-31.688-43.908-59.05-66.34-83.232c29.239-2.2,57.967-4.707,86.081-7.562"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M158.241,422.254c-22.989,24.188-45.722,51.217-68.149,82.146		c-22.438-20.805-44.562-44.426-66.347-71.975C67.308,428.295,112.267,424.947,158.241,422.254z"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M298.849,416.014c-23.813,19.438-47.476,40.5-70.924,64.062		c-23.449-17.357-46.692-36.336-69.688-57.822C204.216,419.561,251.222,417.518,298.849,416.014z"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M443.202,413.066c-24.229,16.963-48.416,34.525-72.491,53.438		c-24.068-15.984-48.046-32.562-71.857-50.488C346.478,414.514,394.733,413.547,443.202,413.066z"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M588.812,413.066c-24.232,16.48-48.517,32.607-72.806,49.088		c-24.286-16.479-48.573-32.604-72.81-49.088C491.67,412.586,540.345,412.586,588.812,413.066z"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M733.164,416.014c-23.812,17.93-47.787,34.504-71.858,50.484		c-24.077-18.908-48.255-36.473-72.489-53.438C637.282,413.547,685.535,414.51,733.164,416.014z"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M873.772,422.254c-22.988,21.486-46.24,40.465-69.687,57.822		c-23.45-23.562-47.107-44.633-70.928-64.062C780.793,417.518,827.795,419.561,873.772,422.254z"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M1008.269,432.43c-21.777,27.547-43.914,51.172-66.343,71.975		c-22.438-30.934-45.166-57.961-68.153-82.145C919.754,424.951,964.707,428.295,1008.269,432.43z"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M1028.01,462.523c-6.547-10.453-13.128-20.473-19.741-30.094		c6.61,0.629,13.188,1.271,19.733,1.938"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M4.004,527.105c28.115-8.566,56.846-16.092,86.084-22.699		c-22.434,30.938-44.562,65.783-66.345,105.738c-6.612-5.855-13.188-11.996-19.739-18.457"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M227.925,480.082c-23.451,23.57-46.695,49.646-69.688,79.209		c-22.984-16.107-45.721-34.088-68.15-54.885C134.95,494.271,181.023,486.291,227.925,480.082z"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M370.711,466.504c-24.074,18.91-48.046,39.178-71.857,61.609		c-23.813-14.936-47.479-30.678-70.924-48.037C274.827,473.873,322.562,469.436,370.711,466.504z"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M516.006,462.154c-24.286,16.484-48.573,33.324-72.812,51.246		c-24.229-15.52-48.417-30.912-72.489-46.895C418.863,463.58,467.437,462.158,516.006,462.154z"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M661.301,466.504c-24.076,15.979-48.263,31.377-72.491,46.895		c-24.23-17.924-48.521-34.764-72.803-51.246C564.579,462.16,613.151,463.578,661.301,466.504z"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M804.088,480.082c-23.451,17.357-47.109,33.104-70.931,48.035		c-23.812-22.436-47.785-42.701-71.855-61.609C709.454,469.436,757.187,473.875,804.088,480.082z"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M941.927,504.406c-22.431,20.797-45.168,38.771-68.156,54.883		c-22.988-29.561-46.233-55.637-69.685-79.207C850.991,486.287,897.062,494.273,941.927,504.406z"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M1028.01,591.688c-6.549,6.461-13.13,12.604-19.743,18.455		c-21.783-39.957-43.908-74.799-66.34-105.736c29.241,6.605,57.97,14.131,86.086,22.699"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M158.241,559.289c-22.989,29.57-45.722,62.641-68.149,100.324		c-22.438-14.045-44.562-30.188-66.347-49.471C67.308,589.463,112.267,572.752,158.241,559.289z"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M4.004,712.49c76.555-54.496,157.852-90.742,241.562-114.812		c100.146-28.488,203.746-39.561,306.866-36.105c103.119,3.766,205.761,22.049,304.046,59.453		c59.021,22.65,116.478,52.195,171.528,91.258"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M298.849,528.117c-23.813,22.439-47.476,47.047-70.924,74.75		c-23.449-13.227-46.692-27.469-69.688-43.578C204.216,545.838,251.222,535.627,298.849,528.117z"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M443.202,513.4c-24.229,17.926-48.416,36.932-72.491,57.795		c-24.068-14.035-48.046-28.146-71.857-43.078C346.478,520.617,394.733,515.809,443.202,513.4z"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M588.812,513.4c-24.232,15.521-48.517,31.17-72.806,47.65		c-24.286-16.48-48.573-32.129-72.81-47.65C491.67,511.002,540.345,511.002,588.812,513.4z"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M733.164,528.117c-23.812,14.936-47.787,29.045-71.858,43.078		c-24.077-20.863-48.255-39.869-72.489-57.795C637.282,515.809,685.535,520.617,733.164,528.117z"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M873.772,559.289c-22.988,16.107-46.24,30.355-69.687,43.578		c-23.45-27.705-47.107-52.311-70.928-74.75C780.793,535.627,827.795,545.836,873.772,559.289z"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M1008.269,610.143c-21.777,19.271-43.914,35.424-66.343,49.471		c-22.438-37.688-45.166-70.752-68.153-100.324C919.754,572.752,964.707,589.463,1008.269,610.143z"/><path fill="none" stroke="#335E6E" stroke-miterlimit="10" d="M1028.006,647.984c-6.551-13.111-13.125-25.711-19.737-37.842		c6.612,3.141,13.194,6.371,19.741,9.697"/></g><g id="lightning-fist" class="aristotle-svg-svg ">	<line fill="none" stroke="#6B989F" stroke-miterlimit="10" x1="239.281" y1="86.228" x2="4" y2="86.228"/><line fill="none" stroke="#6B989F" stroke-width="0.7797" stroke-miterlimit="10" x1="239.281" y1="109.561" x2="115" y2="109.561"/><line fill="none" stroke="#6B989F" stroke-miterlimit="10" x1="335" y1="86.228" x2="570.281" y2="86.228"/><line fill="none" stroke="#6B989F" stroke-width="0.7797" stroke-miterlimit="10" x1="335" y1="109.561" x2="459.281" y2="109.561"/><polygon fill="#FFB81A" points="321.09,70.65 323.229,69.733 313.185,64.475 312.241,66.019 	"/><polygon fill="#FFB81A" points="326.575,90.768 328.381,90.983 328.381,80.46 326.575,81.442 	"/><polygon fill="#FFB81A" points="328.381,103.205 326.575,103.161 326.575,113.203 328.381,114.552 	"/><polygon fill="#FFB81A" points="301.181,60.229 302.274,58.765 293.562,54.204 293.515,56.215 	"/><polygon fill="#FFB81A" points="247.534,102.85 245.728,102.636 245.728,113.667 247.534,112.685 	"/><polygon fill="#FFB81A" points="253.866,70.208 262.24,65.824 261.526,64.161 252.069,69.11 	"/><polygon fill="#FFB81A" points="273.229,60.071 281.272,55.861 281.53,53.688 272.366,58.485 	"/><polygon fill="#FFB81A" points="245.728,79.176 245.728,90.428 247.534,90.473 247.534,80.525 	"/><path fill="#FFFFFF" d="M282.671,59.385l6.115-4.312l-1.952,16.062l2.232,0.22c0.814,0.06,1.592,0.361,2.245,0.847l0.609-24.8		l-4.562,3.783l1.774-26.329l-4.562,3.791L286.17,4l-6.076,32.803l5.834-4.851L282.671,59.385z"/><path fill="#FFFFFF" d="M309.438,61.49l-10.419,13.86c1.076,0.188,2.027,0.754,2.701,1.627c0.358,0.476,0.605,1.011,0.752,1.573		l13.521-22.14l-5.845,0.995l14.705-21.913l-5.852,1.002l13.705-20.545l-21.664,25.364l7.479-1.277l-16.536,22.122L309.438,61.49z"		/><path fill="#FFFFFF" d="M317.325,74.23l6.789,3.141l-13.776,5.868c0,0.247-0.013,0.493-0.057,0.744l-0.826,4.731l22.873-12.461		l-5.558-2.062l23.688-11.625l-5.562-2.056l22.143-10.938l-31.444,11.133l7.113,2.638L317.325,74.23z"/><path fill="#FFFFFF" d="M253.662,41.254l10.891,25.388l3.146-6.791l5.677,13.328c0.123-0.014,0.241-0.038,0.366-0.038h3.044		c0.588,0,1.142,0.11,1.67,0.289l-11.874-21.794l-2.062,5.56l-11.625-23.689l-2.058,5.563L239.9,16.927l11.135,31.44L253.662,41.254		z"/><polygon fill="#FFFFFF" points="347.157,89.771 352.003,95.606 324.575,92.347 328.885,98.463 309.017,96.047 309.46,100.933 		336.558,101.603 332.772,97.039 359.102,98.816 355.312,94.254 379.957,95.853 	"/><polygon fill="#FFFFFF" points="231.644,72.914 230.365,65.438 252.487,81.975 251.812,74.523 267.177,86.071 268.27,82.896 		268.27,81.12 246.737,67.968 247.733,73.813 225.82,59.107 226.823,64.955 206.278,51.249 	"/><polygon fill="#FFFFFF" points="343.508,121.59 344.786,129.066 322.663,112.531 323.338,119.982 310.138,110.061 307.534,113.784 		328.412,126.537 327.418,120.692 349.33,135.397 348.329,129.55 368.873,143.256 	"/><polygon fill="#FFFFFF" points="249.302,117.135 267.666,109.312 264.911,105.272 241.087,118.251 246.646,120.313 		222.956,131.936 228.52,133.993 206.378,144.932 237.823,133.797 230.709,131.166 256.092,120.276 	"/><polygon fill="#FFFFFF" points="222.281,98.031 249.708,101.291 245.398,95.174 263.297,97.35 264.894,92.708 237.727,92.035 		241.51,96.6 215.181,94.821 218.972,99.384 194.328,97.786 227.126,103.867 	"/><path fill="#FFB81A" d="M319.094,122.96l-16.286,8.525l-0.062-9.26l8.196-11.729l-1.575-17.364l1.588-9.095		c0.405-2.33-1.08-4.57-3.387-5.104l-1.196-0.279c-1.115-0.261-2.293-0.054-3.277,0.531c-0.07-0.83-0.367-1.627-0.892-2.308		c-0.729-0.953-1.789-1.562-2.979-1.716l-2.931-0.362c-1.04-0.141-2.062,0.119-2.938,0.68c-0.021-1.021-0.362-1.991-1.03-2.779		c-0.779-0.924-1.872-1.479-3.056-1.562l-4.116-0.403c-1.226-0.089-2.409,0.315-3.321,1.146c-0.748,0.68-1.213,1.562-1.382,2.536		c-0.992-0.896-2.294-1.463-3.735-1.463h-3.107c-3.082,0-5.589,2.511-5.589,5.593v4.389l-6.386,18.546l14.098,20.671l-1.854,10.683		l-19.13-10.013l-2.139,0.917l34.449,18.032l33.836-17.71L319.094,122.96z M302.779,82.629c0.104-0.729,0.499-1.362,1.108-1.781		c0.608-0.418,1.342-0.562,2.062-0.396l1.195,0.28c1.354,0.312,2.225,1.628,1.981,2.994l-1.831,10.486		c-2.135,0.35-4.141,0.146-6.102-0.612L302.779,82.629z M306.549,96.292c-0.606,1.434-1.446,3.375-1.803,4.122		c-0.416,0.892-1.549,1.748-2.723,1.605l-0.874-0.093c-0.619-0.065-1.167-0.403-1.501-0.935c-0.336-0.521-0.411-1.16-0.212-1.749		l1.299-3.812C302.745,96.254,304.672,96.542,306.549,96.292z M293.136,78.97c0.069-0.707,0.412-1.346,0.974-1.785		c0.555-0.444,1.254-0.646,1.959-0.56l2.925,0.37c0.698,0.086,1.321,0.444,1.748,1.003c0.43,0.562,0.612,1.258,0.515,1.952		l-1.894,13.521c-2.563,0.751-4.996,0.494-7.562-0.806L293.136,78.97z M291.704,94.762c2.309,1.146,4.659,1.438,7.012,0.872		l-1.021,3.018c-0.002,0.003-0.001,0.006-0.005,0.011l-0.327,0.965c-0.354,1.037-1.385,1.664-2.479,1.481l-1.894-0.312		c-0.817-0.14-1.417-0.86-1.396-1.688L291.704,94.762z M282.213,75.118c0.021-0.724,0.32-1.389,0.856-1.874		c0.534-0.479,1.224-0.716,1.938-0.674l4.104,0.402c0.707,0.053,1.348,0.379,1.807,0.92c0.455,0.539,0.671,1.226,0.604,1.93		l-1.559,16.6c-2.695,0.479-4.6,0.23-6.938-0.574c1.008-0.399,2.016-0.976,2.896-1.79c1.812-1.681,2.729-4.021,2.729-6.974v-0.923		h-6.354v-3.616c0-0.416-0.054-0.814-0.14-1.208L282.213,75.118z M289.915,100.189c-1.77-1.735-4.336-3.008-7.995-3.572		l-0.071-3.133l-0.025-0.128c1.941,0.719,3.674,1.146,5.618,1.146c0.758,0,1.571-0.089,2.434-0.22l-0.122,4.773		C289.738,99.45,289.802,99.829,289.915,100.189z M269.857,78.545c0-2.062,1.678-3.74,3.743-3.74h3.106		c1.728,0,3.165,1.179,3.602,2.767l-0.108,4.595h-10.343V78.545z M275.59,133.729l2.079-12.003l-13.993-20.523l5.915-17.191h17.185		c-0.162,1.973-0.864,3.546-2.089,4.687c-2.688,2.501-7.094,2.216-7.14,2.209l-1.063-0.078l0.079,1.067		c0.112,1.541,0.226,4.288,0.021,5.09l-0.288,1.146h1.186c11.646,0,14.247,5.471,14.562,13.681c0.021,0.496,0.431,0.888,0.92,0.888		c0.018,0,0.023,0,0.037-0.002c0.507-0.02,0.904-0.448,0.888-0.958c-0.132-3.38-0.644-6.785-2.36-9.54		c0.353,0.203,0.746,0.353,1.166,0.418l1.896,0.314c0.229,0.037,0.452,0.056,0.674,0.056c1.056,0,2.039-0.409,2.781-1.104		c0.021,0.038,0.032,0.075,0.06,0.11c0.639,1.001,1.682,1.646,2.857,1.771l0.875,0.093c0.147,0.018,0.293,0.023,0.438,0.023		c1.896,0,3.501-1.304,4.146-2.685c0.314-0.675,0.995-2.241,1.574-3.586l1.053,12.386l-8.146,11.651l0.069,10.798l-7.088,3.709		v-8.248c0-0.511-0.41-0.924-0.924-0.924c-0.51,0-0.921,0.413-0.921,0.924v9.213l-4.979,2.609L275.59,133.729z M278.462,92.756		c0.479-0.021,1.094-0.066,1.778-0.175l-0.031,3.826c-0.552-0.047-1.101-0.096-1.696-0.108		C278.573,95.184,278.515,93.725,278.462,92.756z"/></g><g id="chapter-progress-chapter" class="aristotle-svg-svg ">	<path  class="teal "  fill="#6B989F" d="M12,7.402l5,2.68v5.842L12,18.6l-5-2.676v-5.842L12,7.402 M12,4L4,8.278v9.438l8,4.282		l8-4.282V8.278L12,4L12,4z"/></g><g id="chapter-progress-slide" class="aristotle-svg-svg ">	<rect x="4" y="4" fill="#6B989F" width="9" height="9"/></g><g id="chapter-progress-quiz" class="aristotle-svg-svg ">	<polygon  class="teal "  fill="#6B989F" points="23.668,28.111 17.75,31.184 6.5,25.344 6.5,12.656 10.155,10.76 8.332,8.889 		4,11.138 4,26.862 17.75,34 26.106,29.662 	"/><polygon  class="teal "  fill="#6B989F" points="17.75,4 11.401,7.296 13.872,8.83 17.75,6.816 29,12.656 29,25.344 		27.178,26.289 29.067,28.125 31.5,26.862 31.5,11.138 	"/><g>		<polygon fill="#F9773E" points="7.75,6.5 20.664,14.519 16.706,14.517 27.465,23.711 22.8,23.778 29.655,30.439 15.886,21.678 			21.061,21.583 9.561,12.731 13.695,12.603 		"/></g></g><g id="chapter-progress-duties" class="aristotle-svg-svg ">	<circle  class="teal"  fill="#6B989F" cx="8.5" cy="8.5" r="4.5"/></g><g id="closed-caption-btn" class="aristotle-svg-svg ">	<path fill="#262626" d="M23.146,7c1.692,0,3.068,1.376,3.068,3.068v7.863c0,1.692-1.376,3.068-3.068,3.068H10.064		C8.376,20.999,7,19.623,7,17.931v-7.863C7,8.376,8.376,7,10.064,7H23.146 M23.146,4H10.064C6.713,4,4,6.717,4,10.068v7.863		c0,3.352,2.716,6.068,6.064,6.068h13.081c3.354,0,6.068-2.717,6.068-6.068v-7.863C29.214,6.716,26.497,4,23.146,4L23.146,4z"/><path fill="#262626" d="M15.147,17.843c-0.568,0.234-0.896,0.312-1.391,0.312c-1.053,0-2.002-0.469-2.652-1.313		c-0.607-0.793-0.909-1.819-0.909-3.146c0-1.456,0.363-2.549,1.134-3.381c0.698-0.754,1.625-1.144,2.702-1.144		c0.455,0,0.739,0.052,1.155,0.208v2.482c-0.39-0.39-0.663-0.52-1.079-0.52c-0.945,0-1.521,0.871-1.521,2.314		c0,1.403,0.546,2.235,1.481,2.235c0.439,0,0.755-0.143,1.223-0.559L15.147,17.843z"/><path fill="#262626" d="M22.181,17.843c-0.571,0.234-0.896,0.312-1.391,0.312c-1.056,0-2.002-0.469-2.652-1.313		c-0.61-0.793-0.91-1.819-0.91-3.146c0-1.456,0.364-2.549,1.132-3.381c0.701-0.754,1.625-1.144,2.704-1.144		c0.455,0,0.74,0.052,1.156,0.208v2.482c-0.39-0.39-0.663-0.52-1.079-0.52c-0.947,0-1.521,0.871-1.521,2.314		c0,1.403,0.546,2.235,1.479,2.235c0.441,0,0.754-0.143,1.225-0.559L22.181,17.843z"/></g><g id="playhead" class="aristotle-svg-svg ">	<path fill="#FFB81A" d="M12,4L4,8.282v9.438L12,22l8-4.28V8.282L12,4L12,4z"/><polygon fill="#6B989F" points="7.039,15.914 7.039,10.085 12,7.43 16.961,10.085 16.961,15.914 12,18.57 	"/></g><g id="pause-btn" class="aristotle-svg-svg ">	<g>		<path fill="#6B989F" d="M18,7.367l11,5.606v12.051l-11,5.606L7,25.024V12.974L18,7.367 M18,4L4,11.138v15.727l14,7.138l14-7.138			V11.138L18,4L18,4z"/></g>	<g  class="pause" >		<g>			<rect x="13.5" y="13" fill="#FFB81A" width="3" height="12"/></g>		<g>			<rect x="19.5" y="13" fill="#FFB81A" width="3" height="12"/></g>	</g>	<g  class="play" >		<polygon fill="#FFB81A" points="14.67,24.993 14.67,12.749 22.97,18.871 		"/></g>	<g  class="replay" >		<path fill="none" stroke="#FFB81A" stroke-width="2.4838" stroke-miterlimit="10" d="M17.819,13.11			c3.182,0,5.761,2.58,5.761,5.761s-2.579,5.761-5.761,5.761c-3.182,0-5.761-2.58-5.761-5.761"/><polygon fill="#FFB81A" points="19.306,16.845 14.55,12.932 19.306,9.804 		"/></g></g>';
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var Aristotle, ChromeUI, Commander, DevTools, Dictionary, Episode, EpisodeLoader, GlobalVars, LMSProxy, Logger, Movie, Parser, PausableDelays, SlideUX, SoundFX, isInternetExp,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

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

Aristotle = (function() {
  function Aristotle($el, episodesDir, localDir, devEpisodeNum, isDevMode, isLocal, sudo) {
    var commander, dictionary, globals, lmsProxy, parser, pausableDelays, shadowIcons, soundFx;
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
    window.aristotle = this;
    aristotle.sudo = sudo;
    aristotle.isIE = isInternetExp();
    commander = new Commander();
    dictionary = new Dictionary();
    globals = new GlobalVars();
    lmsProxy = new LMSProxy(this.isLocal);
    parser = new Parser();
    soundFx = new SoundFX();
    pausableDelays = new PausableDelays();
    shadowIcons = new pxicons.ShadowIcons();
    this.setDevMode(this.isDevMode);
    lmsProxy.begin(this.begin);
  }

  Aristotle.prototype.begin = function() {
    this.setInitialEpisodeNum();
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

},{"chrome/chrome-ui":3,"episode/episode":10,"misc/browser-detect":15,"misc/commander":16,"misc/dev-tools":17,"misc/dictionary":18,"misc/episode-loader":19,"misc/global-vars":20,"misc/lms-proxy":21,"misc/logger":22,"misc/parser":23,"misc/pausable-delays":24,"misc/sfx":26,"movie/movie":30,"slide-ux/slide-ux":52}],2:[function(require,module,exports){
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

},{"misc/asset-preloader":14}],9:[function(require,module,exports){
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

},{"episode/chapter":9,"misc/Sequence":13,"misc/asset-preloader":14}],11:[function(require,module,exports){
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

},{"episode/audio-track":7,"movie/svg-animation":31}],12:[function(require,module,exports){
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

},{"episode/slide":11,"misc/sequence":25}],13:[function(require,module,exports){
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

},{}],15:[function(require,module,exports){
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

},{}],16:[function(require,module,exports){
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

},{}],17:[function(require,module,exports){
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

},{"episode/audio-track":7}],18:[function(require,module,exports){
var Dictionary;

module.exports = Dictionary = (function() {
  function Dictionary() {
    aristotle.dictionary = this;
    this.terms = {
      "cadet": 'Cadet',
      "cadet-first-class": 'Cadet First Class',
      "technical-cadet": "Technical Cadet",
      "cyber-cadet": "Cyber Cadet"
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

},{}],19:[function(require,module,exports){
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

},{}],20:[function(require,module,exports){
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
  }

  GlobalVars.prototype.setMany = function(vars) {
    var key, val;
    for (key in vars) {
      val = vars[key];
      this.vars[key] = val;
    }
    return PubSub.publish('state.save');
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

  return GlobalVars;

})();

},{}],21:[function(require,module,exports){
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
    var companyName, stateData;
    if (elbScorm.initCourse()) {
      this.loadState();
      this.user = elbScorm.GetUserName();
      this.userId = elbScorm.GetUserID();
      stateData = elbScorm.GetResumeData();
      companyName = elbScorm.GetCompanName();
      this.createFormattedName();
      if (stateData != null) {
        aristotle.globals.vars = stateData.globalVars;
      }
      aristotle.globals.vars.companyName = companyName;
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
    this.store.location = {
      episodeNum: aristotle.episode.episodeNum,
      slide: currentSlide
    };
    return elbScorm.SetResumeData(this.store);
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

},{}],22:[function(require,module,exports){
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

},{}],23:[function(require,module,exports){
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

},{}],24:[function(require,module,exports){
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

},{}],25:[function(require,module,exports){
arguments[4][13][0].apply(exports,arguments)
},{"dup":13}],26:[function(require,module,exports){
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

},{"episode/audio-track":7}],27:[function(require,module,exports){
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
    $label = $(jadeTemplate['slide-ux/label']({
      title: data.text,
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

},{}],28:[function(require,module,exports){
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

},{}],29:[function(require,module,exports){
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

},{"movie/svg-animation":31}],30:[function(require,module,exports){
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
    return this.$el.css({
      transform: "scale(" + this.scale + ")"
    });
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
    var bBox, obj, x, xtraX, xtraY, y;
    bBox = $("#" + itemId)[0].getBBox();
    xtraX = this.transformOrigin.x * (this.scale - 1) - this.transformOrigin.x;
    x = (bBox.x * this.scale) - (this.transformOrigin.x + xtraX);
    xtraY = this.transformOrigin.y * (this.scale - 1) - this.transformOrigin.y;
    y = (bBox.y * this.scale) - (this.transformOrigin.y + xtraY);
    return obj = {
      x: x,
      y: y,
      w: bBox.width,
      h: bBox.height
    };
  };

  Movie.prototype.getLocalPos = function(itemId) {
    var bBox, obj;
    bBox = $("#" + itemId)[0].getBBox();
    return obj = {
      x: bBox.x,
      y: bBox.y,
      w: bBox.width,
      h: bBox.height
    };
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
    console.log(layers);
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

},{"movie/dynamic-assets":27,"movie/highlighter":28,"movie/layer":29}],31:[function(require,module,exports){
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

},{}],32:[function(require,module,exports){
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

},{"slide-ux/components/component":33}],33:[function(require,module,exports){
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

},{}],34:[function(require,module,exports){
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

},{"slide-ux/components/component":33}],35:[function(require,module,exports){
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

},{"slide-ux/components/component":33}],36:[function(require,module,exports){
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

},{"slide-ux/components/component":33}],37:[function(require,module,exports){
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

},{"misc/sequence":25,"slide-ux/components/component":33}],38:[function(require,module,exports){
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

},{"slide-ux/components/component":33}],39:[function(require,module,exports){
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

},{"slide-ux/components/component":33}],40:[function(require,module,exports){
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

},{"misc/sequence":25,"slide-ux/components/component":33}],41:[function(require,module,exports){
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

},{"slide-ux/components/component":33}],42:[function(require,module,exports){
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

},{"slide-ux/components/component":33}],43:[function(require,module,exports){
var Question,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

module.exports = Question = (function() {
  function Question($parent, data, questionValue, answerCallback) {
    this.$parent = $parent;
    this.data = data;
    this.questionValue = questionValue != null ? questionValue : 120;
    this.answerCallback = answerCallback;
    this.onAnswerClick = bind(this.onAnswerClick, this);
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
    if (this.guessedRight) {
      return;
    }
    $(e.currentTarget).addClass("flipped");
    this.guessedRight = $(".response", e.currentTarget).hasClass('right');
    if (!this.guessedRight) {
      this.wrongGuesses++;
    }
    return this.answerCallback(this.guessedRight);
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
    this.questionValue - (wrongGuessValue * this.wrongGuesses);
    return this.questionValue - (wrongGuessValue * this.wrongGuesses);
  };

  Question.prototype.destroy = function() {
    return this.$node.remove();
  };

  return Question;

})();

},{}],44:[function(require,module,exports){
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
    this.$node.remove();
    data = this.getResults();
    this.$node = $(jadeTemplate['slide-ux/components/quiz/quiz-results'](this.getResults()));
    shadowIconsInstance.svgReplaceWithString(pxSvgIconString, this.$node);
    $("#continue", this.$node).on("click", (function(_this) {
      return function() {
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

},{"misc/sequence":25,"slide-ux/components/component":33,"slide-ux/components/quiz/question":43}],45:[function(require,module,exports){
var Component, SelectionDialogue,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Component = require('slide-ux/components/component');

module.exports = SelectionDialogue = (function(superClass) {
  extend(SelectionDialogue, superClass);

  function SelectionDialogue($el, data) {
    var $right, jadeData;
    SelectionDialogue.__super__.constructor.call(this, data);
    this.$node = $(jadeTemplate['slide-ux/components/dialogue/selection-dialogue']());
    jadeData = this.generateConfigData(data);
    this.$left = $(jadeTemplate['slide-ux/components/dialogue/dialogue-details'](jadeData));
    $right = $(jadeTemplate['slide-ux/components/dialogue/dialogue-buttons'](jadeData));
    this.$left.addClass("hidden");
    this.$node.append(this.$left);
    this.$node.append($right);
    this.addEventListeners(this.$node, data);
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
        return _this.destroy();
      };
    })(this));
  };

  SelectionDialogue.prototype.activateItem = function($button, item) {
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

},{"slide-ux/components/component":33}],46:[function(require,module,exports){
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

},{"slide-ux/components/component":33}],47:[function(require,module,exports){
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
  }

  return SoundTest;

})(Component);

},{"slide-ux/components/component":33}],48:[function(require,module,exports){
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

},{}],49:[function(require,module,exports){
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

},{"movie/svg-animation":31}],50:[function(require,module,exports){
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

},{}],51:[function(require,module,exports){
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

},{}],52:[function(require,module,exports){
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

},{"slide-ux/components/call-sign-select":32,"slide-ux/components/defender-cards":34,"slide-ux/components/dialogue":36,"slide-ux/components/dialogue-page":35,"slide-ux/components/duties":37,"slide-ux/components/episode-intro":38,"slide-ux/components/episode-outro":39,"slide-ux/components/explore-cards":40,"slide-ux/components/ghost-ux":41,"slide-ux/components/personal-info-intro":42,"slide-ux/components/quiz/quiz":44,"slide-ux/components/selection-dialogue":45,"slide-ux/components/simple-selection":46,"slide-ux/components/sound-test":47,"slide-ux/generic-ui":50,"slide-ux/labler":51,"slide-ux/text-dialogue":53}],53:[function(require,module,exports){
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

},{"episode/audio-track":7,"misc/sequence":25,"slide-ux/dialogue-actors/closed-caption":48,"slide-ux/dialogue-actors/ctanlee":49}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9ndWxwLWNvZmZlZWlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiYXJpc3RvdGxlLmNvZmZlZSIsImNocm9tZS9ib3R0b20tdWktZWxlbWVudHMuY29mZmVlIiwiY2hyb21lL2Nocm9tZS11aS5jb2ZmZWUiLCJjaHJvbWUvcHJvZ3Jlc3MtbWFwLmNvZmZlZSIsImNocm9tZS90b3AuY29mZmVlIiwiY2hyb21lL3Zjci1jb250cm9scy5jb2ZmZWUiLCJlcGlzb2RlL2F1ZGlvLXRyYWNrLmNvZmZlZSIsImVwaXNvZGUvY2hhcHRlci1oZWFkaW5nLmNvZmZlZSIsImVwaXNvZGUvY2hhcHRlci5jb2ZmZWUiLCJlcGlzb2RlL2VwaXNvZGUuY29mZmVlIiwiZXBpc29kZS9zbGlkZS5jb2ZmZWUiLCJlcGlzb2RlL3NsaWRlcy5jb2ZmZWUiLCJtaXNjL1NlcXVlbmNlLmNvZmZlZSIsIm1pc2MvYXNzZXQtcHJlbG9hZGVyLmNvZmZlZSIsIm1pc2MvYnJvd3Nlci1kZXRlY3QuY29mZmVlIiwibWlzYy9jb21tYW5kZXIuY29mZmVlIiwibWlzYy9kZXYtdG9vbHMuY29mZmVlIiwibWlzYy9kaWN0aW9uYXJ5LmNvZmZlZSIsIm1pc2MvZXBpc29kZS1sb2FkZXIuY29mZmVlIiwibWlzYy9nbG9iYWwtdmFycy5jb2ZmZWUiLCJtaXNjL2xtcy1wcm94eS5jb2ZmZWUiLCJtaXNjL2xvZ2dlci5jb2ZmZWUiLCJtaXNjL3BhcnNlci5jb2ZmZWUiLCJtaXNjL3BhdXNhYmxlLWRlbGF5cy5jb2ZmZWUiLCJtaXNjL3NmeC5jb2ZmZWUiLCJtb3ZpZS9keW5hbWljLWFzc2V0cy5jb2ZmZWUiLCJtb3ZpZS9oaWdobGlnaHRlci5jb2ZmZWUiLCJtb3ZpZS9sYXllci5jb2ZmZWUiLCJtb3ZpZS9tb3ZpZS5jb2ZmZWUiLCJtb3ZpZS9zdmctYW5pbWF0aW9uLmNvZmZlZSIsInNsaWRlLXV4L2NvbXBvbmVudHMvY2FsbC1zaWduLXNlbGVjdC5jb2ZmZWUiLCJzbGlkZS11eC9jb21wb25lbnRzL2NvbXBvbmVudC5jb2ZmZWUiLCJzbGlkZS11eC9jb21wb25lbnRzL2RlZmVuZGVyLWNhcmRzLmNvZmZlZSIsInNsaWRlLXV4L2NvbXBvbmVudHMvZGlhbG9ndWUtcGFnZS5jb2ZmZWUiLCJzbGlkZS11eC9jb21wb25lbnRzL2RpYWxvZ3VlLmNvZmZlZSIsInNsaWRlLXV4L2NvbXBvbmVudHMvZHV0aWVzLmNvZmZlZSIsInNsaWRlLXV4L2NvbXBvbmVudHMvZXBpc29kZS1pbnRyby5jb2ZmZWUiLCJzbGlkZS11eC9jb21wb25lbnRzL2VwaXNvZGUtb3V0cm8uY29mZmVlIiwic2xpZGUtdXgvY29tcG9uZW50cy9leHBsb3JlLWNhcmRzLmNvZmZlZSIsInNsaWRlLXV4L2NvbXBvbmVudHMvZ2hvc3QtdXguY29mZmVlIiwic2xpZGUtdXgvY29tcG9uZW50cy9wZXJzb25hbC1pbmZvLWludHJvLmNvZmZlZSIsInNsaWRlLXV4L2NvbXBvbmVudHMvcXVpei9xdWVzdGlvbi5jb2ZmZWUiLCJzbGlkZS11eC9jb21wb25lbnRzL3F1aXovcXVpei5jb2ZmZWUiLCJzbGlkZS11eC9jb21wb25lbnRzL3NlbGVjdGlvbi1kaWFsb2d1ZS5jb2ZmZWUiLCJzbGlkZS11eC9jb21wb25lbnRzL3NpbXBsZS1zZWxlY3Rpb24uY29mZmVlIiwic2xpZGUtdXgvY29tcG9uZW50cy9zb3VuZC10ZXN0LmNvZmZlZSIsInNsaWRlLXV4L2RpYWxvZ3VlLWFjdG9ycy9jbG9zZWQtY2FwdGlvbi5jb2ZmZWUiLCJzbGlkZS11eC9kaWFsb2d1ZS1hY3RvcnMvY3RhbmxlZS5jb2ZmZWUiLCJzbGlkZS11eC9nZW5lcmljLXVpLmNvZmZlZSIsInNsaWRlLXV4L2xhYmxlci5jb2ZmZWUiLCJzbGlkZS11eC9zbGlkZS11eC5jb2ZmZWUiLCJzbGlkZS11eC90ZXh0LWRpYWxvZ3VlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUNsR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDalVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdElBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwidmFyIEFyaXN0b3RsZSwgQ2hyb21lVUksIENvbW1hbmRlciwgRGV2VG9vbHMsIERpY3Rpb25hcnksIEVwaXNvZGUsIEVwaXNvZGVMb2FkZXIsIEdsb2JhbFZhcnMsIExNU1Byb3h5LCBMb2dnZXIsIE1vdmllLCBQYXJzZXIsIFBhdXNhYmxlRGVsYXlzLCBTbGlkZVVYLCBTb3VuZEZYLCBpc0ludGVybmV0RXhwLFxuICBiaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfTtcblxuQ2hyb21lVUkgPSByZXF1aXJlKFwiY2hyb21lL2Nocm9tZS11aVwiKTtcblxuQ29tbWFuZGVyID0gcmVxdWlyZSgnbWlzYy9jb21tYW5kZXInKTtcblxuRGV2VG9vbHMgPSByZXF1aXJlKCdtaXNjL2Rldi10b29scycpO1xuXG5EaWN0aW9uYXJ5ID0gcmVxdWlyZSgnbWlzYy9kaWN0aW9uYXJ5Jyk7XG5cbkVwaXNvZGUgPSByZXF1aXJlKFwiZXBpc29kZS9lcGlzb2RlXCIpO1xuXG5FcGlzb2RlTG9hZGVyID0gcmVxdWlyZSgnbWlzYy9lcGlzb2RlLWxvYWRlcicpO1xuXG5HbG9iYWxWYXJzID0gcmVxdWlyZSgnbWlzYy9nbG9iYWwtdmFycycpO1xuXG5pc0ludGVybmV0RXhwID0gcmVxdWlyZSgnbWlzYy9icm93c2VyLWRldGVjdCcpO1xuXG5MTVNQcm94eSA9IHJlcXVpcmUoJ21pc2MvbG1zLXByb3h5Jyk7XG5cbkxvZ2dlciA9IHJlcXVpcmUoJ21pc2MvbG9nZ2VyJyk7XG5cbk1vdmllID0gcmVxdWlyZSgnbW92aWUvbW92aWUnKTtcblxuUGFyc2VyID0gcmVxdWlyZSgnbWlzYy9wYXJzZXInKTtcblxuUGF1c2FibGVEZWxheXMgPSByZXF1aXJlKCdtaXNjL3BhdXNhYmxlLWRlbGF5cycpO1xuXG5TbGlkZVVYID0gcmVxdWlyZSgnc2xpZGUtdXgvc2xpZGUtdXgnKTtcblxuU291bmRGWCA9IHJlcXVpcmUoJ21pc2Mvc2Z4Jyk7XG5cbkFyaXN0b3RsZSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gQXJpc3RvdGxlKCRlbCwgZXBpc29kZXNEaXIsIGxvY2FsRGlyLCBkZXZFcGlzb2RlTnVtLCBpc0Rldk1vZGUsIGlzTG9jYWwsIHN1ZG8pIHtcbiAgICB2YXIgY29tbWFuZGVyLCBkaWN0aW9uYXJ5LCBnbG9iYWxzLCBsbXNQcm94eSwgcGFyc2VyLCBwYXVzYWJsZURlbGF5cywgc2hhZG93SWNvbnMsIHNvdW5kRng7XG4gICAgdGhpcy4kZWwgPSAkZWw7XG4gICAgdGhpcy5lcGlzb2Rlc0RpciA9IGVwaXNvZGVzRGlyO1xuICAgIHRoaXMubG9jYWxEaXIgPSBsb2NhbERpcjtcbiAgICB0aGlzLmRldkVwaXNvZGVOdW0gPSBkZXZFcGlzb2RlTnVtO1xuICAgIHRoaXMuaXNEZXZNb2RlID0gaXNEZXZNb2RlO1xuICAgIHRoaXMuaXNMb2NhbCA9IGlzTG9jYWw7XG4gICAgaWYgKHN1ZG8gPT0gbnVsbCkge1xuICAgICAgc3VkbyA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLm9uSnNvbkxvYWRlZCA9IGJpbmQodGhpcy5vbkpzb25Mb2FkZWQsIHRoaXMpO1xuICAgIHRoaXMuYmVnaW4gPSBiaW5kKHRoaXMuYmVnaW4sIHRoaXMpO1xuICAgIHdpbmRvdy5hcmlzdG90bGUgPSB0aGlzO1xuICAgIGFyaXN0b3RsZS5zdWRvID0gc3VkbztcbiAgICBhcmlzdG90bGUuaXNJRSA9IGlzSW50ZXJuZXRFeHAoKTtcbiAgICBjb21tYW5kZXIgPSBuZXcgQ29tbWFuZGVyKCk7XG4gICAgZGljdGlvbmFyeSA9IG5ldyBEaWN0aW9uYXJ5KCk7XG4gICAgZ2xvYmFscyA9IG5ldyBHbG9iYWxWYXJzKCk7XG4gICAgbG1zUHJveHkgPSBuZXcgTE1TUHJveHkodGhpcy5pc0xvY2FsKTtcbiAgICBwYXJzZXIgPSBuZXcgUGFyc2VyKCk7XG4gICAgc291bmRGeCA9IG5ldyBTb3VuZEZYKCk7XG4gICAgcGF1c2FibGVEZWxheXMgPSBuZXcgUGF1c2FibGVEZWxheXMoKTtcbiAgICBzaGFkb3dJY29ucyA9IG5ldyBweGljb25zLlNoYWRvd0ljb25zKCk7XG4gICAgdGhpcy5zZXREZXZNb2RlKHRoaXMuaXNEZXZNb2RlKTtcbiAgICBsbXNQcm94eS5iZWdpbih0aGlzLmJlZ2luKTtcbiAgfVxuXG4gIEFyaXN0b3RsZS5wcm90b3R5cGUuYmVnaW4gPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnNldEluaXRpYWxFcGlzb2RlTnVtKCk7XG4gICAgUHViU3ViLnN1YnNjcmliZSgnZXBpc29kZS5sb2FkJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICBfdGhpcy5lcGlzb2RlTnVtID0gZGF0YTtcbiAgICAgICAgcmV0dXJuIF90aGlzLmluaXQoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHJldHVybiBQdWJTdWIucHVibGlzaCgnZXBpc29kZS5sb2FkJywgdGhpcy5lcGlzb2RlTnVtKTtcbiAgfTtcblxuICBBcmlzdG90bGUucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZXBpc29kZUxvYWRlcjtcbiAgICBpZiAodGhpcy5jaHJvbWVVSSAhPSBudWxsKSB7XG4gICAgICB0aGlzLmRlbGV0ZU9sZEFzc2V0cygpO1xuICAgIH1cbiAgICB0aGlzLmJ1aWxkKCk7XG4gICAgcmV0dXJuIGVwaXNvZGVMb2FkZXIgPSBuZXcgRXBpc29kZUxvYWRlcih0aGlzLm9uSnNvbkxvYWRlZCk7XG4gIH07XG5cbiAgQXJpc3RvdGxlLnByb3RvdHlwZS5vbkpzb25Mb2FkZWQgPSBmdW5jdGlvbihlcGlzb2RlRGF0YSkge1xuICAgIHJldHVybiB0aGlzLmVwaXNvZGUgPSBuZXcgRXBpc29kZShlcGlzb2RlRGF0YSwgdGhpcy5tb3ZpZSwgdGhpcy5zbGlkZVVYLCB0aGlzLmNocm9tZVVJKTtcbiAgfTtcblxuICBBcmlzdG90bGUucHJvdG90eXBlLmJ1aWxkID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyICRiYXNlO1xuICAgICRiYXNlID0gJChqYWRlVGVtcGxhdGVbJ2FyaXN0b3RsZSddKHt9KSk7XG4gICAgdGhpcy4kZWwuYXBwZW5kKCRiYXNlKTtcbiAgICBzaGFkb3dJY29uc0luc3RhbmNlLnN2Z1JlcGxhY2VXaXRoU3RyaW5nKHB4U3ZnSWNvblN0cmluZywgJGJhc2UpO1xuICAgIHRoaXMuY2hyb21lVUkgPSBuZXcgQ2hyb21lVUkoJChcIi5jaHJvbWVcIiwgJGJhc2UpKTtcbiAgICB0aGlzLnNsaWRlVVggPSBuZXcgU2xpZGVVWCgkKFwiLnNsaWRlLXV4XCIsICRiYXNlKSk7XG4gICAgcmV0dXJuIHRoaXMubW92aWUgPSBuZXcgTW92aWUoJChcIi5tb3ZpZVwiLCAkYmFzZSkpO1xuICB9O1xuXG4gIEFyaXN0b3RsZS5wcm90b3R5cGUuZGVsZXRlT2xkQXNzZXRzID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5lcGlzb2RlLmRlc3Ryb3koKTtcbiAgICB0aGlzLmNocm9tZVVJLmRlc3Ryb3koKTtcbiAgICB0aGlzLnNsaWRlVVguZGVzdHJveSgpO1xuICAgIHRoaXMubW92aWUuZGVzdHJveSgpO1xuICAgIHRoaXMuJGVsLmVtcHR5KCk7XG4gICAgcmV0dXJuIHRoaXMuZXBpc29kZSA9IHRoaXMuY2hyb21lVUkgPSB0aGlzLnNsaWRlVVggPSB0aGlzLm1vdmllID0gbnVsbDtcbiAgfTtcblxuICBBcmlzdG90bGUucHJvdG90eXBlLnNldERldk1vZGUgPSBmdW5jdGlvbihkZXZNb2RlKSB7XG4gICAgdmFyIGxvZ2dlcjtcbiAgICBsb2dnZXIgPSBuZXcgTG9nZ2VyKCQoJ2JvZHknKSwgZGV2TW9kZSk7XG4gICAgcmV0dXJuIGFyaXN0b3RsZS5kZXZUb29scyA9IG5ldyBEZXZUb29scyhkZXZNb2RlKTtcbiAgfTtcblxuICBBcmlzdG90bGUucHJvdG90eXBlLmdldEVwaXNvZGVSb290ID0gZnVuY3Rpb24oZXBpc29kZU51bSkge1xuICAgIGlmIChlcGlzb2RlTnVtID09IG51bGwpIHtcbiAgICAgIGVwaXNvZGVOdW0gPSB0aGlzLmVwaXNvZGVOdW07XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmVwaXNvZGVzRGlyICsgXCIvZXBpc29kZVwiICsgZXBpc29kZSArIFwiL1wiO1xuICB9O1xuXG4gIEFyaXN0b3RsZS5wcm90b3R5cGUuc2V0SW5pdGlhbEVwaXNvZGVOdW0gPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoYXJpc3RvdGxlLmxtc1Byb3h5LnN0b3JlICE9IG51bGwpIHtcbiAgICAgIGlmIChhcmlzdG90bGUubG1zUHJveHkuc3RvcmUubG9jYXRpb24gIT0gbnVsbCkge1xuICAgICAgICBpZiAoYXJpc3RvdGxlLmxtc1Byb3h5LnN0b3JlLmxvY2F0aW9uLmVwaXNvZGVOdW0pIHtcbiAgICAgICAgICB0aGlzLmVwaXNvZGVOdW0gPSBhcmlzdG90bGUubG1zUHJveHkuc3RvcmUubG9jYXRpb24uZXBpc29kZU51bTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5pc0Rldk1vZGUgJiYgKHRoaXMuZGV2RXBpc29kZU51bSAhPSBudWxsKSkge1xuICAgICAgdGhpcy5lcGlzb2RlTnVtID0gdGhpcy5kZXZFcGlzb2RlTnVtO1xuICAgIH1cbiAgICBpZiAodGhpcy5lcGlzb2RlTnVtID09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLmVwaXNvZGVOdW0gPSBcIjBcIjtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIEFyaXN0b3RsZTtcblxufSkoKTtcblxud2luZG93LkFyaXN0b3RsZSA9IEFyaXN0b3RsZTtcbiIsInZhciBCb3R0b21VaUVsZW1lbnRzLCBQcm9ncmVzc01hcCwgVkNSQ29udHJvbHM7XG5cblByb2dyZXNzTWFwID0gcmVxdWlyZSgnY2hyb21lL3Byb2dyZXNzLW1hcCcpO1xuXG5WQ1JDb250cm9scyA9IHJlcXVpcmUoJ2Nocm9tZS92Y3ItY29udHJvbHMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBCb3R0b21VaUVsZW1lbnRzID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBCb3R0b21VaUVsZW1lbnRzKCRlbCkge1xuICAgIHRoaXMuJGVsID0gJGVsO1xuICAgIHRoaXMuJG5vZGUgPSAkKGphZGVUZW1wbGF0ZVsnY2hyb21lLXVpL3Byb2dyZXNzJ10oe30pKTtcbiAgICB0aGlzLiRlbC5hcHBlbmQodGhpcy4kbm9kZSk7XG4gICAgdGhpcy5wcm9nZXNzTWFwID0gbmV3IFByb2dyZXNzTWFwKHRoaXMuJG5vZGUpO1xuICAgIHRoaXMudmNyQ29udHJvbHMgPSBuZXcgVkNSQ29udHJvbHModGhpcy4kbm9kZSk7XG4gICAgdGhpcy5zaG93KCdwcm9ncmVzcy1tYXAnKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCd2Y3ItY29udHJvbC5zaG93JywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICBfdGhpcy5zaG93QW5pbWF0aW9uQ29udHJvbHMoZGF0YSk7XG4gICAgICAgIHJldHVybiBfdGhpcy5zaG93KCd2Y3InKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9XG5cbiAgQm90dG9tVWlFbGVtZW50cy5wcm90b3R5cGUuc2hvd0FuaW1hdGlvbkNvbnRyb2xzID0gZnVuY3Rpb24oc3ZnQW5pbWF0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMudmNyQ29udHJvbHMuYWN0aXZhdGUoc3ZnQW5pbWF0aW9uLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgX3RoaXMuc2hvdygncHJvZ3Jlc3MtbWFwJyk7XG4gICAgICAgIHJldHVybiBQdWJTdWIucHVibGlzaCgnc2xpZGVzLm5leHQtc2xpZGUnKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9O1xuXG4gIEJvdHRvbVVpRWxlbWVudHMucHJvdG90eXBlLnNob3cgPSBmdW5jdGlvbihjbHNzKSB7XG4gICAgdGhpcy4kbm9kZS5jaGlsZHJlbigpLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICByZXR1cm4gJChcIi5cIiArIGNsc3MsIHRoaXMuJG5vZGUpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgfTtcblxuICBCb3R0b21VaUVsZW1lbnRzLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMucHJvZ3Jlc3NNYXAgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvZ3Jlc3NNYXAuZGVzdHJveSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gQm90dG9tVWlFbGVtZW50cztcblxufSkoKTtcbiIsInZhciBCb3R0b21VaUVsZW1lbnRzLCBDaHJvbWVVSSwgVG9wO1xuXG5Cb3R0b21VaUVsZW1lbnRzID0gcmVxdWlyZSgnY2hyb21lL2JvdHRvbS11aS1lbGVtZW50cycpO1xuXG5Ub3AgPSByZXF1aXJlKCdjaHJvbWUvdG9wJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2hyb21lVUkgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIENocm9tZVVJKCRlbCkge1xuICAgIHZhciB0b2tlbjEsIHRva2VuMjtcbiAgICB0aGlzLiRlbCA9ICRlbDtcbiAgICB0b2tlbjEgPSBQdWJTdWIuc3Vic2NyaWJlKFwiY2hyb21lLmhpZGVcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuaGlkZSgpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgdG9rZW4yID0gUHViU3ViLnN1YnNjcmliZShcImNocm9tZS5zaG93XCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnNob3coKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRoaXMudG9rZW5zID0gW3Rva2VuMSwgdG9rZW4yXTtcbiAgfVxuXG4gIENocm9tZVVJLnByb3RvdHlwZS5idWlsZCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuYm90dG9tVWlFbGVtZW50cyA9IG5ldyBCb3R0b21VaUVsZW1lbnRzKHRoaXMuJGVsKTtcbiAgICB0aGlzLnRvcCA9IG5ldyBUb3AodGhpcy4kZWwpO1xuICAgIHJldHVybiBzaGFkb3dJY29uc0luc3RhbmNlLnN2Z1JlcGxhY2VXaXRoU3RyaW5nKHB4U3ZnSWNvblN0cmluZywgdGhpcy4kZWwpO1xuICB9O1xuXG4gIENocm9tZVVJLnByb3RvdHlwZS5oaWRlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJGVsLmFkZENsYXNzKFwiaGlkZGVuXCIpO1xuICB9O1xuXG4gIENocm9tZVVJLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJGVsLnJlbW92ZUNsYXNzKFwiaGlkZGVuXCIpO1xuICB9O1xuXG4gIENocm9tZVVJLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGksIGxlbiwgcmVmLCByZXN1bHRzLCB0b2tlbjtcbiAgICB0aGlzLmJvdHRvbVVpRWxlbWVudHMuZGVzdHJveSgpO1xuICAgIHRoaXMudG9wLmRlc3Ryb3koKTtcbiAgICByZWYgPSB0aGlzLnRva2VucztcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICB0b2tlbiA9IHJlZltpXTtcbiAgICAgIHJlc3VsdHMucHVzaChQdWJTdWIudW5zdWJzY3JpYmUodG9rZW4pKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgcmV0dXJuIENocm9tZVVJO1xuXG59KSgpO1xuIiwidmFyIFByb2dyZXNzTWFwO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFByb2dyZXNzTWFwID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBQcm9ncmVzc01hcCgkZWwxKSB7XG4gICAgdmFyIHRva2VuMSwgdG9rZW4yLCB0b2tlbjMsIHRva2VuNCwgdG9rZW41O1xuICAgIHRoaXMuJGVsID0gJGVsMTtcbiAgICB0b2tlbjEgPSBQdWJTdWIuc3Vic2NyaWJlKCdlcGlzb2RlLmxvYWRlZCcsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmJ1aWxkTWFwKGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgdG9rZW4yID0gUHViU3ViLnN1YnNjcmliZSgnY2hhcHRlci5zdGFydGVkJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMubGlnaHRJY29uKGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgdG9rZW4zID0gUHViU3ViLnN1YnNjcmliZSgnc2xpZGUuYWN0aXZhdGVkJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMubGlnaHRJY29uKGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgdG9rZW40ID0gUHViU3ViLnN1YnNjcmliZSgncXVpei5hY3RpdmF0ZWQnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5saWdodEljb24oZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0b2tlbjUgPSBQdWJTdWIuc3Vic2NyaWJlKCdkdXRpZXMuYWN0aXZhdGVkJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMubGlnaHRJY29uKGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgdGhpcy50b2tlbnMgPSBbdG9rZW4xLCB0b2tlbjIsIHRva2VuMywgdG9rZW40LCB0b2tlbjVdO1xuICB9XG5cbiAgUHJvZ3Jlc3NNYXAucHJvdG90eXBlLmxpZ2h0SWNvbiA9IGZ1bmN0aW9uKHRpdGxlKSB7XG4gICAgdmFyICRlbDtcbiAgICAkZWwgPSAkKFwiI1wiICsgKHRoaXMudGl0bGVUb0lkKHRpdGxlKSksIHRoaXMuJG5vZGUpO1xuICAgICRlbC5hZGRDbGFzcyhcInZpZXdlZFwiKTtcbiAgICAkZWwucHJldkFsbCgpLmFkZENsYXNzKFwidmlld2VkXCIpO1xuICAgIHJldHVybiAkZWwubmV4dEFsbCgpLnJlbW92ZUNsYXNzKFwidmlld2VkXCIpO1xuICB9O1xuXG4gIFByb2dyZXNzTWFwLnByb3RvdHlwZS5idWlsZE1hcCA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2YXIgJG1pbGVzdG9uZSwgbWFwRGF0YTtcbiAgICBtYXBEYXRhID0gdGhpcy5wYXJzZUVwaXNvZGVEYXRhKGRhdGEpO1xuICAgIHRoaXMuYWRkSWNvbkRhdGEobWFwRGF0YSk7XG4gICAgdGhpcy4kbm9kZSA9ICQoamFkZVRlbXBsYXRlWydjaHJvbWUtdWkvcHJvZ3Jlc3MtbWFwJ10oe1xuICAgICAgbWlsZXN0b25lczogbWFwRGF0YVxuICAgIH0pKTtcbiAgICB0aGlzLiRlbC5hcHBlbmQodGhpcy4kbm9kZSk7XG4gICAgc2hhZG93SWNvbnNJbnN0YW5jZS5zdmdSZXBsYWNlV2l0aFN0cmluZyhweFN2Z0ljb25TdHJpbmcsIHRoaXMuJG5vZGUpO1xuICAgICRtaWxlc3RvbmUgPSAkKFwiLm1pbGVzdG9uZVwiLCB0aGlzLiRub2RlKTtcbiAgICBpZiAoYXJpc3RvdGxlLnN1ZG8pIHtcbiAgICAgICRtaWxlc3RvbmUub24oXCJjbGlja1wiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMub25NaWxlU3RvbmVDbGljaygkKGUuY3VycmVudFRhcmdldCkpO1xuICAgICAgICB9O1xuICAgICAgfSkodGhpcykpO1xuICAgIH1cbiAgICAkbWlsZXN0b25lLm9uKFwibW91c2VvdmVyXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLm9uTWlsZVN0b25lT3ZlcigkKGUuY3VycmVudFRhcmdldCkpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgcmV0dXJuICRtaWxlc3RvbmUub24oXCJtb3VzZW91dFwiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5vbk1pbGVTdG9uZU91dCgkKGUuY3VycmVudFRhcmdldCkpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH07XG5cbiAgUHJvZ3Jlc3NNYXAucHJvdG90eXBlLnBhcnNlRXBpc29kZURhdGEgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyIGNoYXB0ZXIsIGksIGl0ZW0sIGl0ZW1zLCBqLCBsZW4sIGxlbjEsIHJlZiwgcmVmMSwgc2xpZGU7XG4gICAgaXRlbXMgPSBbXTtcbiAgICByZWYgPSBkYXRhLmNoYXB0ZXJzO1xuICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgY2hhcHRlciA9IHJlZltpXTtcbiAgICAgIGl0ZW1zLnB1c2goe1xuICAgICAgICBraW5kOiBcImNoYXB0ZXJcIixcbiAgICAgICAgdGl0bGU6IGNoYXB0ZXIudGl0bGUsXG4gICAgICAgIGlkOiB0aGlzLnRpdGxlVG9JZChjaGFwdGVyLnRpdGxlKVxuICAgICAgfSk7XG4gICAgICByZWYxID0gY2hhcHRlci5zbGlkZXM7XG4gICAgICBmb3IgKGogPSAwLCBsZW4xID0gcmVmMS5sZW5ndGg7IGogPCBsZW4xOyBqKyspIHtcbiAgICAgICAgc2xpZGUgPSByZWYxW2pdO1xuICAgICAgICBpdGVtID0gdGhpcy5nZXRJdGVtKHNsaWRlKTtcbiAgICAgICAgaWYgKHNsaWRlLnRpdGxlICE9IG51bGwpIHtcbiAgICAgICAgICBpZiAoaXRlbSA9PSBudWxsKSB7XG4gICAgICAgICAgICBpdGVtID0ge1xuICAgICAgICAgICAgICBraW5kOiBcInNsaWRlXCJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICAgIGl0ZW0udGl0bGUgPSBzbGlkZS50aXRsZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXRlbSAhPSBudWxsKSB7XG4gICAgICAgICAgaXRlbS5pZCA9IHRoaXMudGl0bGVUb0lkKGl0ZW0udGl0bGUpO1xuICAgICAgICAgIGl0ZW1zLnB1c2goaXRlbSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGl0ZW1zO1xuICB9O1xuXG4gIFByb2dyZXNzTWFwLnByb3RvdHlwZS5hZGRJY29uRGF0YSA9IGZ1bmN0aW9uKG1hcEl0ZW1zKSB7XG4gICAgdmFyIGksIGl0ZW0sIGxlbiwgcmVzdWx0cztcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChpID0gMCwgbGVuID0gbWFwSXRlbXMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGl0ZW0gPSBtYXBJdGVtc1tpXTtcbiAgICAgIHN3aXRjaCAoaXRlbS5raW5kKSB7XG4gICAgICAgIGNhc2UgXCJjaGFwdGVyXCI6XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKGl0ZW0uaWNvbiA9IFwiY2hhcHRlci1wcm9ncmVzcy1jaGFwdGVyXCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwic2xpZGVcIjpcbiAgICAgICAgICByZXN1bHRzLnB1c2goaXRlbS5pY29uID0gXCJjaGFwdGVyLXByb2dyZXNzLXNsaWRlXCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwicXVpelwiOlxuICAgICAgICAgIHJlc3VsdHMucHVzaChpdGVtLmljb24gPSBcImNoYXB0ZXItcHJvZ3Jlc3MtcXVpelwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImR1dGllc1wiOlxuICAgICAgICAgIHJlc3VsdHMucHVzaChpdGVtLmljb24gPSBcImNoYXB0ZXItcHJvZ3Jlc3MtZHV0aWVzXCIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJlc3VsdHMucHVzaCh2b2lkIDApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBQcm9ncmVzc01hcC5wcm90b3R5cGUudGl0bGVUb0lkID0gZnVuY3Rpb24odGl0bGUpIHtcbiAgICB0aXRsZSA9IHRpdGxlLnJlcGxhY2UoL1xccy9nLCAnXycpO1xuICAgIHRpdGxlID0gdGl0bGUucmVwbGFjZSgvKFtcXCFcXD9cXCddKS9nLCAnJyk7XG4gICAgcmV0dXJuIHRpdGxlLnRvTG93ZXJDYXNlKCk7XG4gIH07XG5cbiAgUHJvZ3Jlc3NNYXAucHJvdG90eXBlLmdldEl0ZW0gPSBmdW5jdGlvbihzbGlkZSkge1xuICAgIHZhciBjb21wb25lbnQsIGksIGxlbiwgcmVmO1xuICAgIGlmIChzbGlkZS51eCA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKHNsaWRlLnV4LmNvbXBvbmVudHMgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJlZiA9IHNsaWRlLnV4LmNvbXBvbmVudHM7XG4gICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjb21wb25lbnQgPSByZWZbaV07XG4gICAgICBpZiAoY29tcG9uZW50LmtpbmQgPT09IFwicXVpelwiKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAga2luZDogXCJxdWl6XCIsXG4gICAgICAgICAgdGl0bGU6IFwicXVpelwiXG4gICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKGNvbXBvbmVudC5raW5kID09PSBcImR1dGllc1wiKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAga2luZDogXCJkdXRpZXNcIixcbiAgICAgICAgICB0aXRsZTogXCJEdXR5IFJldmlld1wiXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIFByb2dyZXNzTWFwLnByb3RvdHlwZS5vbk1pbGVTdG9uZUNsaWNrID0gZnVuY3Rpb24oJGVsKSB7XG4gICAgcmV0dXJuIFB1YlN1Yi5wdWJsaXNoKCdlcGlzb2RlLmdvdG8nLCAkZWwuYXR0cihcImRhdGEtdGl0bGVcIikpO1xuICB9O1xuXG4gIFByb2dyZXNzTWFwLnByb3RvdHlwZS5vbk1pbGVTdG9uZU92ZXIgPSBmdW5jdGlvbigkZWwpIHtcbiAgICBpZiAoISRlbC5oYXNDbGFzcyhcInZpZXdlZFwiKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gUHViU3ViLnB1Ymxpc2goJ2xhYmVsLmF0dGFjaCcsIHtcbiAgICAgIGVsOiAkZWwsXG4gICAgICBjb250ZW50OiB7XG4gICAgICAgIHRpdGxlOiAkZWwuYXR0cihcImRhdGEtdGl0bGVcIilcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBQcm9ncmVzc01hcC5wcm90b3R5cGUub25NaWxlU3RvbmVPdXQgPSBmdW5jdGlvbigkZWwpIHtcbiAgICByZXR1cm4gUHViU3ViLnB1Ymxpc2goJ2xhYmVsLmRlc3Ryb3knLCAkZWwpO1xuICB9O1xuXG4gIFByb2dyZXNzTWFwLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGksIGxlbiwgcmVmLCByZXN1bHRzLCB0b2tlbjtcbiAgICByZWYgPSB0aGlzLnRva2VucztcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICB0b2tlbiA9IHJlZltpXTtcbiAgICAgIHJlc3VsdHMucHVzaChQdWJTdWIudW5zdWJzY3JpYmUodG9rZW4pKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgcmV0dXJuIFByb2dyZXNzTWFwO1xuXG59KSgpO1xuIiwidmFyIFRvcDtcblxubW9kdWxlLmV4cG9ydHMgPSBUb3AgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIFRvcCgkZWwxKSB7XG4gICAgdmFyIHRva2VuMiwgdG9rZW4zLCB0b2tlbjQsIHRva2VuNSwgdG9rZW42O1xuICAgIHRoaXMuJGVsID0gJGVsMTtcbiAgICB0b2tlbjIgPSBQdWJTdWIuc3Vic2NyaWJlKFwiY2FsbHNpZ24uc2VsZWN0ZWRcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMudXBkYXRlQ2FsbHNpZ24oZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0b2tlbjMgPSBQdWJTdWIuc3Vic2NyaWJlKFwiY2hyb21lLnNob3duYW1lXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnNob3dOYW1lKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0b2tlbjQgPSBQdWJTdWIuc3Vic2NyaWJlKFwiY2hyb21lLnNob3dlcGlzb2Rlc1wiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5zaG93SWNvbnMoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRva2VuNSA9IFB1YlN1Yi5zdWJzY3JpYmUoXCJjaHJvbWUuaGlkZW5hbWVcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuaGlkZU5hbWUoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRva2VuNiA9IFB1YlN1Yi5zdWJzY3JpYmUoXCJjaHJvbWUuaGlkZWVwaXNvZGVzXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmhpZGVJY29ucygpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgdGhpcy50b2tlbnMgPSBbdG9rZW4yLCB0b2tlbjMsIHRva2VuNCwgdG9rZW41LCB0b2tlbjZdO1xuICAgIHRoaXMuYnVpbGQoKTtcbiAgfVxuXG4gIFRvcC5wcm90b3R5cGUuYnVpbGQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgY2FsbHNpZ24sIGRhdGEsIGVwaXNvZGVOdW0sIG5hbWUsIHJlZjtcbiAgICBuYW1lID0gYXJpc3RvdGxlLmxtc1Byb3h5LnVzZXIuc3BsaXQoXCIsXCIpO1xuICAgIHJlZiA9IHRoaXMuZ2V0VmFycygpLCBjYWxsc2lnbiA9IHJlZlswXSwgZXBpc29kZU51bSA9IHJlZlsxXTtcbiAgICBkYXRhID0ge1xuICAgICAgbmFtZTogbmFtZVsxXSArIFwiIFxcXCJcIiArIGNhbGxzaWduICsgXCJcXFwiIFwiICsgbmFtZVswXSxcbiAgICAgIGVwaXNvZGU6IGVwaXNvZGVOdW1cbiAgICB9O1xuICAgIHRoaXMuZ2V0UmFuayhkYXRhLCBlcGlzb2RlTnVtKTtcbiAgICB0aGlzLiR0b3AgPSAkKGphZGVUZW1wbGF0ZVsnY2hyb21lLXVpL3RvcCddKGRhdGEpKTtcbiAgICB0aGlzLiRlbC5hcHBlbmQodGhpcy4kdG9wKTtcbiAgICB0aGlzLiRuYW1lID0gJChcIi5uYW1lLWFuZC1yYW5rXCIsIHRoaXMuJHRvcCk7XG4gICAgdGhpcy4kaWNvbnMgPSAkKFwiLmVwaXNvZGVzXCIsIHRoaXMuJHRvcCk7XG4gICAgdGhpcy4kbW9kZSA9ICQoXCIubGVhcm4tbW9kZVwiLCB0aGlzLiR0b3ApO1xuICAgIHRoaXMuaGlkZU1vZGUoKTtcbiAgICAkKFwiLmJhZGdlXCIsIHRoaXMuJHRvcCkub24oXCJtb3VzZW92ZXJcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuYmFkZ2VNb3VzZW92ZXIoZSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICByZXR1cm4gJChcIi5iYWRnZVwiLCB0aGlzLiR0b3ApLm9uKFwibW91c2VvdXRcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuYmFkZ2VNb3VzZW91dChlKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9O1xuXG4gIFRvcC5wcm90b3R5cGUudXBkYXRlQ2FsbHNpZ24gPSBmdW5jdGlvbihjYWxsU2lnbikge1xuICAgIHZhciBuYW1lO1xuICAgIG5hbWUgPSBhcmlzdG90bGUubG1zUHJveHkudXNlci5zcGxpdChcIixcIik7XG4gICAgcmV0dXJuICQoXCIubmFtZVwiLCB0aGlzLiR0b3ApLmh0bWwobmFtZVsxXSArIFwiIFxcXCJcIiArIGNhbGxTaWduICsgXCJcXFwiIFwiICsgbmFtZVswXSk7XG4gIH07XG5cbiAgVG9wLnByb3RvdHlwZS5zaG93TmFtZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRuYW1lLmNzcyh7XG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgIG9wYWNpdHk6IDBcbiAgICB9KS52ZWxvY2l0eSh7XG4gICAgICBvcGFjaXR5OiAxXG4gICAgfSwge1xuICAgICAgZHVyYXRpb246IDUwMFxuICAgIH0pO1xuICB9O1xuXG4gIFRvcC5wcm90b3R5cGUuaGlkZU5hbWUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kbmFtZS5jc3Moe1xuICAgICAgZGlzcGxheTogXCJub25lXCJcbiAgICB9KTtcbiAgfTtcblxuICBUb3AucHJvdG90eXBlLnNob3dJY29ucyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRpY29ucy5jc3Moe1xuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICBvcGFjaXR5OiAwXG4gICAgfSkudmVsb2NpdHkoe1xuICAgICAgb3BhY2l0eTogMVxuICAgIH0sIHtcbiAgICAgIGR1cmF0aW9uOiA1MDBcbiAgICB9KTtcbiAgfTtcblxuICBUb3AucHJvdG90eXBlLmhpZGVJY29ucyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRpY29ucy5jc3Moe1xuICAgICAgZGlzcGxheTogXCJub25lXCJcbiAgICB9KTtcbiAgfTtcblxuICBUb3AucHJvdG90eXBlLmhpZGVNb2RlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJG1vZGUuYWRkQ2xhc3MoXCJoaWRkZW5cIik7XG4gIH07XG5cbiAgVG9wLnByb3RvdHlwZS5zaG93TW9kZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRtb2RlLnJlbW92ZUNsYXNzKFwiaGlkZGVuXCIpO1xuICB9O1xuXG4gIFRvcC5wcm90b3R5cGUuYmFkZ2VNb3VzZW92ZXIgPSBmdW5jdGlvbihlKSB7XG4gICAgdmFyICRlbCwgY29uZmlnRGF0YSwgZXBpc29kZU51bTtcbiAgICAkZWwgPSAkKGUuY3VycmVudFRhcmdldCk7XG4gICAgZXBpc29kZU51bSA9ICRlbC5hdHRyKCdkYXRhLWVwaXNvZGUnKTtcbiAgICBjb25maWdEYXRhID0ge1xuICAgICAgdGl0bGU6IFwiRXBpc29kZSBcIiArIGVwaXNvZGVOdW0sXG4gICAgICB0ZXh0OiB0aGlzLmdldEVwaXNvZGVUYWdsaW5lKGVwaXNvZGVOdW0pLFxuICAgICAgY3NzQ2xhc3M6IFwiYXJyb3ctdG9wIGlubGluZVwiXG4gICAgfTtcbiAgICByZXR1cm4gUHViU3ViLnB1Ymxpc2goJ2xhYmVsLmF0dGFjaCcsIHtcbiAgICAgIGVsOiAkZWwsXG4gICAgICBjb250ZW50OiBjb25maWdEYXRhXG4gICAgfSk7XG4gIH07XG5cbiAgVG9wLnByb3RvdHlwZS5iYWRnZU1vdXNlb3V0ID0gZnVuY3Rpb24oZSkge1xuICAgIHJldHVybiBQdWJTdWIucHVibGlzaCgnbGFiZWwuZGVzdHJveScsICQoZS5jdXJyZW50VGFyZ2V0KSk7XG4gIH07XG5cbiAgVG9wLnByb3RvdHlwZS5nZXRSYW5rID0gZnVuY3Rpb24oZGF0YSwgZXBpc29kZU51bSkge1xuICAgIGRhdGEuZXBpc29kZSA9IGVwaXNvZGVOdW07XG4gICAgc3dpdGNoIChlcGlzb2RlTnVtKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIGRhdGEucmFuayA9IFwiUmVjcnVpdFwiO1xuICAgICAgICByZXR1cm4gZGF0YS5iYWRnZSA9IFwicmFuay1iYWRnZS1yZWNydWl0XCI7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIGRhdGEucmFuayA9IFwiY2FkZXRcIjtcbiAgICAgICAgcmV0dXJuIGRhdGEuYmFkZ2UgPSBcInJhbmstYmFkZ2UtY2FkZXRcIjtcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgZGF0YS5yYW5rID0gXCJDYWRldCBGaXJzdCBDbGFzc1wiO1xuICAgICAgICByZXR1cm4gZGF0YS5iYWRnZSA9IFwicmFuay1iYWRnZS1jYWRldC1maXJzdC1jbGFzc1wiO1xuICAgICAgY2FzZSAzOlxuICAgICAgICBkYXRhLnJhbmsgPSBcIlRlY2huaWNhbCBDYWRldFwiO1xuICAgICAgICByZXR1cm4gZGF0YS5iYWRnZSA9IFwicmFuay1iYWRnZS10ZWNobmljYWwtY2FkZXRcIjtcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgZGF0YS5yYW5rID0gXCJDeWJlciBDYWRldFwiO1xuICAgICAgICByZXR1cm4gZGF0YS5iYWRnZSA9IFwicmFuay1iYWRnZS1jeWJlci1jYWRldFwiO1xuICAgICAgY2FzZSA1OlxuICAgICAgICBkYXRhLnJhbmsgPSBcIk1hc3RlciBDYWRldFwiO1xuICAgICAgICByZXR1cm4gZGF0YS5iYWRnZSA9IFwicmFuay1iYWRnZS1jeWJlci1jYWRldFwiO1xuICAgIH1cbiAgfTtcblxuICBUb3AucHJvdG90eXBlLmdldEVwaXNvZGVUYWdsaW5lID0gZnVuY3Rpb24oZXBpc29kZU51bSkge1xuICAgIHN3aXRjaCAoZXBpc29kZU51bSkge1xuICAgICAgY2FzZSBcIjFcIjpcbiAgICAgICAgcmV0dXJuIFwiT3JnYW5pemluZyBPdXIgRm9yY2VzXCI7XG4gICAgICBjYXNlIFwiMlwiOlxuICAgICAgICByZXR1cm4gXCJQZXJpbWV0ZXIgRGVmZW5zZXNcIjtcbiAgICAgIGNhc2UgXCIzXCI6XG4gICAgICAgIHJldHVybiBcIkFzc2V0IERlZmVuc2VzXCI7XG4gICAgICBjYXNlIFwiNFwiOlxuICAgICAgICByZXR1cm4gXCJNYW5uaW5nIHRoZSBEZWZlbnNlc1wiO1xuICAgICAgY2FzZSBcIjVcIjpcbiAgICAgICAgcmV0dXJuIFwiRmlnaHRpbmcgdGhlIFdhclwiO1xuICAgIH1cbiAgfTtcblxuICBUb3AucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaSwgbGVuLCByZWYsIHJlc3VsdHMsIHRva2VuO1xuICAgIHJlZiA9IHRoaXMudG9rZW5zO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHRva2VuID0gcmVmW2ldO1xuICAgICAgcmVzdWx0cy5wdXNoKFB1YlN1Yi51bnN1YnNjcmliZSh0b2tlbikpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBUb3AucHJvdG90eXBlLmdldFZhcnMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgY2FsbHNpZ24sIGVwaXNvZGUsIGVycm9yLCBlcnJvcjE7XG4gICAgdHJ5IHtcbiAgICAgIGNhbGxzaWduID0gYXJpc3RvdGxlLmdsb2JhbHMuZ2V0KCdjYWxsU2lnbicsIGZhbHNlKTtcbiAgICB9IGNhdGNoIChlcnJvcjEpIHtcbiAgICAgIGVycm9yID0gZXJyb3IxO1xuICAgICAgY2FsbHNpZ24gPSBcIkRlYWRleWVcIjtcbiAgICB9XG4gICAgZXBpc29kZSA9IE51bWJlcihhcmlzdG90bGUuZXBpc29kZU51bSk7XG4gICAgcmV0dXJuIFtjYWxsc2lnbiwgZXBpc29kZV07XG4gIH07XG5cbiAgcmV0dXJuIFRvcDtcblxufSkoKTtcbiIsInZhciBWQ1JDb250cm9scztcblxubW9kdWxlLmV4cG9ydHMgPSBWQ1JDb250cm9scyA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gVkNSQ29udHJvbHMoJGVsKSB7XG4gICAgdmFyICRub2RlO1xuICAgICRub2RlID0gJChqYWRlVGVtcGxhdGVbJ2Nocm9tZS11aS92Y3InXSh7fSkpO1xuICAgICRlbC5hcHBlbmQoJG5vZGUpO1xuICAgIHRoaXMuJHBsYXloZWFkID0gJCgnLnBsYXloZWFkJywgJG5vZGUpO1xuICAgIHRoaXMuJGF0dGljID0gJCgnLmF0dGljJywgJG5vZGUpO1xuICAgIHRoaXMuJHBhdXNlQW5kUGxheUJ0biA9ICQoJy5wYXVzZS1hbmQtcGxheScsICRub2RlKTtcbiAgICB0aGlzLiRwYXVzZUFuZFBsYXlCdG4ub24oJ2NsaWNrJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5jb250cm9sQnRuQ2xpY2soKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgICQoXCIjYW5pLXJlcGxheVwiLCAkbm9kZSkub24oJ2NsaWNrJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5yZXBsYXlDbGljaygpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgJChcIiNhbmktY29udGludWVcIiwgJG5vZGUpLm9uKCdjbGljaycsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMuY29udGludWVDbGljaygpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgUHViU3ViLnN1YnNjcmliZSgndmNyLnBsYXknLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5wbGF5KCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCd2Y3IucGF1c2UnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5wYXVzZSgpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgUHViU3ViLnN1YnNjcmliZSgndmNyLnJlcGxheScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnJlcGxheSgpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH1cblxuICBWQ1JDb250cm9scy5wcm90b3R5cGUucGxheSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuJHBhdXNlQW5kUGxheUJ0bi5yZW1vdmVDbGFzcygncGF1c2VkJyk7XG4gICAgcmV0dXJuIHRoaXMuYW5pbWF0aW9uLnBsYXkoKTtcbiAgfTtcblxuICBWQ1JDb250cm9scy5wcm90b3R5cGUucGF1c2UgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLiRwYXVzZUFuZFBsYXlCdG4uYWRkQ2xhc3MoJ3BhdXNlZCcpO1xuICAgIHJldHVybiB0aGlzLmFuaW1hdGlvbi5wYXVzZSgpO1xuICB9O1xuXG4gIFZDUkNvbnRyb2xzLnByb3RvdHlwZS5yZXBsYXkgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLiRhdHRpYy5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgdGhpcy4kcGF1c2VBbmRQbGF5QnRuLnJlbW92ZUNsYXNzKCdjb21wbGV0ZScpO1xuICAgIHRoaXMuYW5pbWF0aW9uLmdvVG9BbmRTdG9wKDApO1xuICAgIHJldHVybiB0aGlzLmFuaW1hdGlvbi5wbGF5KCk7XG4gIH07XG5cbiAgVkNSQ29udHJvbHMucHJvdG90eXBlLmFjdGl2YXRlID0gZnVuY3Rpb24oc3ZnQW5pbWF0aW9uLCBjb21wbGV0ZUNiKSB7XG4gICAgdGhpcy5jb21wbGV0ZUNiID0gY29tcGxldGVDYjtcbiAgICB0aGlzLnJlc2V0KCk7XG4gICAgdGhpcy5hbmltYXRpb24gPSBzdmdBbmltYXRpb24uYW5pbWF0aW9uO1xuICAgIHRoaXMuYW5pbWF0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2VudGVyRnJhbWUnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHBlcmM7XG4gICAgICAgIHBlcmMgPSBfdGhpcy5hbmltYXRpb24uY3VycmVudEZyYW1lIC8gX3RoaXMuYW5pbWF0aW9uLnRvdGFsRnJhbWVzO1xuICAgICAgICByZXR1cm4gX3RoaXMuJHBsYXloZWFkLmNzcyh7XG4gICAgICAgICAgd2lkdGg6IChNYXRoLnJvdW5kKHBlcmMgKiAxMDApKSArIFwiJVwiXG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgcmV0dXJuIHRoaXMuYW5pbWF0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NvbXBsZXRlJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIF90aGlzLmlzQ29tcGxldGUgPSB0cnVlO1xuICAgICAgICBfdGhpcy4kYXR0aWMucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xuICAgICAgICByZXR1cm4gX3RoaXMuJHBhdXNlQW5kUGxheUJ0bi5hZGRDbGFzcygnY29tcGxldGUnKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9O1xuXG4gIFZDUkNvbnRyb2xzLnByb3RvdHlwZS5yZXNldCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaXNQYXVzZWQgPSBmYWxzZTtcbiAgICB0aGlzLmlzQ29tcGxldGUgPSBmYWxzZTtcbiAgICB0aGlzLiRhdHRpYy5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgdGhpcy4kcGF1c2VBbmRQbGF5QnRuLnJlbW92ZUNsYXNzKCdwYXVzZWQnKTtcbiAgICByZXR1cm4gdGhpcy4kcGF1c2VBbmRQbGF5QnRuLnJlbW92ZUNsYXNzKCdjb21wbGV0ZScpO1xuICB9O1xuXG4gIFZDUkNvbnRyb2xzLnByb3RvdHlwZS5jb250cm9sQnRuQ2xpY2sgPSBmdW5jdGlvbihlKSB7XG4gICAgaWYgKHRoaXMuaXNDb21wbGV0ZSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVwbGF5Q2xpY2soKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNQYXVzZWQpIHtcbiAgICAgIHRoaXMuaXNQYXVzZWQgPSBmYWxzZTtcbiAgICAgIHJldHVybiBQdWJTdWIucHVibGlzaCgndmNyLnBsYXknKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5pc1BhdXNlZCA9IHRydWU7XG4gICAgICByZXR1cm4gUHViU3ViLnB1Ymxpc2goJ3Zjci5wYXVzZScpO1xuICAgIH1cbiAgfTtcblxuICBWQ1JDb250cm9scy5wcm90b3R5cGUucmVwbGF5Q2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmlzQ29tcGxldGUgPSBmYWxzZTtcbiAgICByZXR1cm4gUHViU3ViLnB1Ymxpc2goJ3Zjci5yZXBsYXknKTtcbiAgfTtcblxuICBWQ1JDb250cm9scy5wcm90b3R5cGUuY29udGludWVDbGljayA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmNvbXBsZXRlQ2IoKTtcbiAgfTtcblxuICByZXR1cm4gVkNSQ29udHJvbHM7XG5cbn0pKCk7XG4iLCJ2YXIgQXVkaW9UcmFjaztcblxubW9kdWxlLmV4cG9ydHMgPSBBdWRpb1RyYWNrID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBBdWRpb1RyYWNrKHNyYykge1xuICAgIHRoaXMuc3JjID0gc3JjO1xuICAgIEF1ZGlvVHJhY2suaW5pdFNvdW5kU2V0dGluZ3MoKTtcbiAgICB0aGlzLnNvdW5kID0gY3JlYXRlanMuU291bmQuY3JlYXRlSW5zdGFuY2UodGhpcy5zcmMpO1xuICB9XG5cbiAgQXVkaW9UcmFjay5wcm90b3R5cGUucGxheSA9IGZ1bmN0aW9uKGNvbmZpZywgb25Db21wbGV0ZSkge1xuICAgIGlmIChjb25maWcgPT0gbnVsbCkge1xuICAgICAgY29uZmlnID0ge307XG4gICAgfVxuICAgIHRoaXMucGFyc2VDb25maWcoY29uZmlnKTtcbiAgICB0aGlzLnNvdW5kLnBsYXkoY29uZmlnKTtcbiAgICByZXR1cm4gdGhpcy5hZGRPbkNvbXBsZXRlKG9uQ29tcGxldGUpO1xuICB9O1xuXG4gIEF1ZGlvVHJhY2sucHJvdG90eXBlLmFkZE9uQ29tcGxldGUgPSBmdW5jdGlvbihvbkNvbXBsZXRlKSB7XG4gICAgaWYgKG9uQ29tcGxldGUgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMuc291bmQuYWRkRXZlbnRMaXN0ZW5lcihcImNvbXBsZXRlXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gb25Db21wbGV0ZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIEF1ZGlvVHJhY2sucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zb3VuZC5zdG9wKCk7XG4gIH07XG5cbiAgQXVkaW9UcmFjay5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaXNEZWFkID0gdHJ1ZTtcbiAgICB0aGlzLnNvdW5kLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjb21wbGV0ZVwiKTtcbiAgICByZXR1cm4gdGhpcy5zb3VuZC5kZXN0cm95KCk7XG4gIH07XG5cbiAgQXVkaW9UcmFjay5pbml0U291bmRTZXR0aW5ncyA9IGZ1bmN0aW9uKHZvbHVtZSkge1xuICAgIGlmICh2b2x1bWUgPT0gbnVsbCkge1xuICAgICAgdm9sdW1lID0gMTtcbiAgICB9XG4gICAgaWYgKEF1ZGlvVHJhY2sucHBjICE9IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIEF1ZGlvVHJhY2sucHBjID0gbmV3IGNyZWF0ZWpzLlBsYXlQcm9wc0NvbmZpZygpLnNldCh7XG4gICAgICBpbnRlcnJ1cHQ6IGNyZWF0ZWpzLlNvdW5kLklOVEVSUlVQVF9BTlksXG4gICAgICB2b2x1bWU6IHZvbHVtZSxcbiAgICAgIHBhbjogMVxuICAgIH0pO1xuICB9O1xuXG4gIEF1ZGlvVHJhY2sucHJvdG90eXBlLnBhcnNlQ29uZmlnID0gZnVuY3Rpb24oY29uZmlnKSB7XG4gICAgaWYgKGNvbmZpZy5sb29wICE9IG51bGwpIHtcbiAgICAgIGlmIChjb25maWcubG9vcCA9PT0gdHJ1ZSAmJiB0eXBlb2YgY29uZmlnLmxvb3AgIT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgY29uZmlnLmxvb3AgPSAtMTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGNvbmZpZy5wYW4gPSAxO1xuICB9O1xuXG4gIHJldHVybiBBdWRpb1RyYWNrO1xuXG59KSgpO1xuIiwidmFyIENoYXB0ZXJIZWFkaW5nLCBQcmVsb2FkZXIsXG4gIGJpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9O1xuXG5QcmVsb2FkZXIgPSByZXF1aXJlKCdtaXNjL2Fzc2V0LXByZWxvYWRlcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENoYXB0ZXJIZWFkaW5nID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBDaGFwdGVySGVhZGluZyhkYXRhLCBsb2FkQ29tcGxldGUpIHtcbiAgICB0aGlzLmxvYWRDb21wbGV0ZSA9IGxvYWRDb21wbGV0ZTtcbiAgICB0aGlzLmNvbXBsZXRlID0gYmluZCh0aGlzLmNvbXBsZXRlLCB0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZSA9IGJpbmQodGhpcy51cGRhdGUsIHRoaXMpO1xuICAgIHRoaXMuJGVsID0gJCgnYm9keScpO1xuICAgIHRoaXMuJG5vZGUgPSAkKGphZGVUZW1wbGF0ZVsnbWlzYy9jaGFwdGVyLWhlYWRpbmcnXSh7XG4gICAgICB0aXRsZTogZGF0YS50aXRsZSxcbiAgICAgIHN1YnRpdGxlOiBkYXRhLnN1YnRpdGxlXG4gICAgfSkpO1xuICAgIHRoaXMuJGVsLmFwcGVuZCh0aGlzLiRub2RlKTtcbiAgICB0aGlzLiRmZyA9ICQoXCIuZmdcIiwgdGhpcy4kbm9kZSk7XG4gICAgc2hhZG93SWNvbnNJbnN0YW5jZS5zdmdSZXBsYWNlV2l0aFN0cmluZyhweFN2Z0ljb25TdHJpbmcsIHRoaXMuJG5vZGUpO1xuICAgIHRoaXMucHJlbG9hZChkYXRhKTtcbiAgfVxuXG4gIENoYXB0ZXJIZWFkaW5nLnByb3RvdHlwZS5wcmVsb2FkID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciBwcmVsb2FkZXI7XG4gICAgcmV0dXJuIHByZWxvYWRlciA9IG5ldyBQcmVsb2FkZXIoZGF0YSwgdGhpcy5jb21wbGV0ZSwgdGhpcy51cGRhdGUpO1xuICB9O1xuXG4gIENoYXB0ZXJIZWFkaW5nLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbihwZXJjKSB7XG4gICAgcmV0dXJuIHRoaXMuJGZnLmNzcyh7XG4gICAgICB3aWR0aDogKE1hdGgucm91bmQocGVyYyAqIDEwMCkpICsgXCIlXCJcbiAgICB9KTtcbiAgfTtcblxuICBDaGFwdGVySGVhZGluZy5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLiRub2RlLmFkZENsYXNzKCdjb21wbGV0ZScpO1xuICAgIHRoaXMuZGVzdHJveSgpO1xuICAgIHJldHVybiB0aGlzLmxvYWRDb21wbGV0ZSgpO1xuICB9O1xuXG4gIENoYXB0ZXJIZWFkaW5nLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJG5vZGUudmVsb2NpdHkoe1xuICAgICAgb3BhY2l0eTogMFxuICAgIH0sIHtcbiAgICAgIGRlbGF5OiAzMDAsXG4gICAgICBkdXJhdGlvbjogNDAwLFxuICAgICAgY29tcGxldGU6IChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLiRub2RlLnJlbW92ZSgpO1xuICAgICAgICB9O1xuICAgICAgfSkodGhpcylcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gQ2hhcHRlckhlYWRpbmc7XG5cbn0pKCk7XG4iLCJ2YXIgQ2hhcHRlciwgQ2hhcHRlckhlYWRpbmcsIFNsaWRlcyxcbiAgYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH07XG5cblNsaWRlcyA9IHJlcXVpcmUoJ2VwaXNvZGUvc2xpZGVzJyk7XG5cbkNoYXB0ZXJIZWFkaW5nID0gcmVxdWlyZSgnZXBpc29kZS9jaGFwdGVyLWhlYWRpbmcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBDaGFwdGVyID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBDaGFwdGVyKGNoYXB0ZXJEYXRhLCBtb3ZpZSwgdXgsIG9uQ2hhcHRlckNvbXBldGUpIHtcbiAgICB0aGlzLmNoYXB0ZXJEYXRhID0gY2hhcHRlckRhdGE7XG4gICAgdGhpcy5tb3ZpZSA9IG1vdmllO1xuICAgIHRoaXMudXggPSB1eDtcbiAgICB0aGlzLm9uQ2hhcHRlckNvbXBldGUgPSBvbkNoYXB0ZXJDb21wZXRlO1xuICAgIHRoaXMub25TbGlkZXNDb21wbGV0ZSA9IGJpbmQodGhpcy5vblNsaWRlc0NvbXBsZXRlLCB0aGlzKTtcbiAgICB0aGlzLnN0YXJ0U2xpZGVzID0gYmluZCh0aGlzLnN0YXJ0U2xpZGVzLCB0aGlzKTtcbiAgICB0aGlzLnRpdGxlID0gdGhpcy5jaGFwdGVyRGF0YS50aXRsZTtcbiAgfVxuXG4gIENoYXB0ZXIucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24oZmlyc3RTbGlkZVRpdGxlKSB7XG4gICAgdmFyIGNoYXB0ZXJIZWFkaW5nO1xuICAgIHRoaXMuZmlyc3RTbGlkZVRpdGxlID0gZmlyc3RTbGlkZVRpdGxlO1xuICAgIGFyaXN0b3RsZS5kZXZUb29scy5nbyh0aGlzLmNoYXB0ZXJEYXRhLmRldiwgdGhpcy5jaGFwdGVyRGF0YS5zbGlkZXMpO1xuICAgIHJldHVybiBjaGFwdGVySGVhZGluZyA9IG5ldyBDaGFwdGVySGVhZGluZyh0aGlzLmNoYXB0ZXJEYXRhLCB0aGlzLnN0YXJ0U2xpZGVzKTtcbiAgfTtcblxuICBDaGFwdGVyLnByb3RvdHlwZS5zdGFydFNsaWRlcyA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc2xpZGVzID0gbmV3IFNsaWRlcyh0aGlzLmNoYXB0ZXJEYXRhLCB0aGlzLm1vdmllLCB0aGlzLnV4LCB0aGlzLm9uU2xpZGVzQ29tcGxldGUpO1xuICAgIGlmICh0aGlzLmZpcnN0U2xpZGVUaXRsZSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5zbGlkZXMuZ290b1NsaWRlQnlUaXRsZSh0aGlzLmZpcnN0U2xpZGVUaXRsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnNsaWRlcy5zdGFydCgpO1xuICAgIH1cbiAgfTtcblxuICBDaGFwdGVyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuc2xpZGVzICE9IG51bGwpIHtcbiAgICAgIHRoaXMuc2xpZGVzLmRlc3Ryb3koKTtcbiAgICAgIHJldHVybiB0aGlzLnNsaWRlcyA9IG51bGw7XG4gICAgfVxuICB9O1xuXG4gIENoYXB0ZXIucHJvdG90eXBlLm9uU2xpZGVzQ29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5vbkNoYXB0ZXJDb21wZXRlKCk7XG4gIH07XG5cbiAgcmV0dXJuIENoYXB0ZXI7XG5cbn0pKCk7XG4iLCJ2YXIgQXNzZXRQcmVsb2FkZXIsIENoYXB0ZXIsIEVwaXNvZGUsIFNlcXVlbmNlLFxuICBiaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfTtcblxuQ2hhcHRlciA9IHJlcXVpcmUoJ2VwaXNvZGUvY2hhcHRlcicpO1xuXG5TZXF1ZW5jZSA9IHJlcXVpcmUoJ21pc2MvU2VxdWVuY2UnKTtcblxuQXNzZXRQcmVsb2FkZXIgPSByZXF1aXJlKCdtaXNjL2Fzc2V0LXByZWxvYWRlcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVwaXNvZGUgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIEVwaXNvZGUodHJhaW5pbmdEYXRhMSwgbW92aWUsIHV4LCBjaHJvbWUpIHtcbiAgICB0aGlzLnRyYWluaW5nRGF0YSA9IHRyYWluaW5nRGF0YTE7XG4gICAgdGhpcy5tb3ZpZSA9IG1vdmllO1xuICAgIHRoaXMudXggPSB1eDtcbiAgICB0aGlzLmNocm9tZSA9IGNocm9tZTtcbiAgICB0aGlzLnBsYXlDaGFwdGVyID0gYmluZCh0aGlzLnBsYXlDaGFwdGVyLCB0aGlzKTtcbiAgICB0aGlzLmNoYXB0ZXJDb21wbGV0ZSA9IGJpbmQodGhpcy5jaGFwdGVyQ29tcGxldGUsIHRoaXMpO1xuICAgIHRoaXMubmV4dENoYXB0ZXIgPSBiaW5kKHRoaXMubmV4dENoYXB0ZXIsIHRoaXMpO1xuICAgIHRoaXMuYmVnaW4gPSBiaW5kKHRoaXMuYmVnaW4sIHRoaXMpO1xuICAgIGFyaXN0b3RsZS5lcGlzb2RlID0gdGhpcztcbiAgICB0aGlzLmVwaXNvZGVOdW0gPSB0aGlzLnRyYWluaW5nRGF0YS5lcGlzb2RlO1xuICAgIHRoaXMuaXNMYXN0RXBpc29kZSA9IHRoaXMudHJhaW5pbmdEYXRhLmlzTGFzdEVwaXNvZGU7XG4gICAgYXJpc3RvdGxlLmVwaXNvZGVEYXRhID0gdGhpcy50cmFpbmluZ0RhdGE7XG4gICAgYXJpc3RvdGxlLmxhYmVscyA9IHRoaXMudHJhaW5pbmdEYXRhLmxhYmVscztcbiAgICB0aGlzLm5leHRSYW5rSWQgPSB0aGlzLnRyYWluaW5nRGF0YS5uZXh0UmFua0lkO1xuICAgIHRoaXMuY2hyb21lLmJ1aWxkKCk7XG4gICAgbmV3IEFzc2V0UHJlbG9hZGVyKHRoaXMudHJhaW5pbmdEYXRhLmFjdGlvbiwgdGhpcy5iZWdpbik7XG4gIH1cblxuICBFcGlzb2RlLnByb3RvdHlwZS5iZWdpbiA9IGZ1bmN0aW9uKCkge1xuICAgIGFyaXN0b3RsZS5kZXZUb29scy5nbyh0aGlzLnRyYWluaW5nRGF0YS5kZXYsIHRoaXMudHJhaW5pbmdEYXRhLmNoYXB0ZXJzKTtcbiAgICB0aGlzLnRva2VuMSA9IFB1YlN1Yi5zdWJzY3JpYmUoJ2VwaXNvZGUuZ290bycsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmdvdG9Mb2NhdGlvbkJ5VGl0bGUoZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIucHVibGlzaChcImVwaXNvZGUubG9hZGVkXCIsIHRoaXMudHJhaW5pbmdEYXRhKTtcbiAgICB0aGlzLmNyZWF0ZUNoYXB0ZXJzKHRoaXMudHJhaW5pbmdEYXRhKTtcbiAgICBpZiAodGhpcy50cmFpbmluZ0RhdGEuc2tpcFNsYXRlKSB7XG4gICAgICB0aGlzLnBsYXlDaGFwdGVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2hvd0ludHJvKHRoaXMudHJhaW5pbmdEYXRhKTtcbiAgICB9XG4gICAgaWYgKHRoaXMudHJhaW5pbmdEYXRhLmFjdGlvbiAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gYXJpc3RvdGxlLmNvbW1hbmRlcltcImRvXCJdKHRoaXMudHJhaW5pbmdEYXRhLmFjdGlvbik7XG4gICAgfVxuICB9O1xuXG4gIEVwaXNvZGUucHJvdG90eXBlLnNob3dJbnRybyA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBpZiAoYXJpc3RvdGxlLmRldlRvb2xzLnNraXBTbGF0ZSkge1xuICAgICAgdGhpcy5wbGF5Q2hhcHRlcigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnV4LnBvcHVsYXRlKHtcbiAgICAgIGNvbXBvbmVudHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGtpbmQ6IFwiZXBpc29kZS1pbnRyb1wiLFxuICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgdGl0bGU6IGRhdGEudGl0bGUsXG4gICAgICAgICAgICBzdWJ0aXRsZTogZGF0YS5zdWJ0aXRsZSxcbiAgICAgICAgICAgIGVwaXNvZGU6IGRhdGEuZXBpc29kZVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXVxuICAgIH0pO1xuICAgIGlmIChhcmlzdG90bGUubG1zUHJveHkuc3RvcmUgIT0gbnVsbCkge1xuICAgICAgaWYgKGFyaXN0b3RsZS5sbXNQcm94eS5zdG9yZS5sb2NhdGlvbiAhPSBudWxsKSB7XG4gICAgICAgIGlmIChhcmlzdG90bGUubG1zUHJveHkuc3RvcmUubG9jYXRpb24uZXBpc29kZU51bSA9PT0gdGhpcy5lcGlzb2RlTnVtKSB7XG4gICAgICAgICAgaWYgKGFyaXN0b3RsZS5sbXNQcm94eS5zdG9yZS5sb2NhdGlvbi5zbGlkZSAhPSBudWxsKSB7XG4gICAgICAgICAgICBhcmlzdG90bGUubG1zUHJveHkucmVoeWRyYXRlKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzZXRUaW1lb3V0KHRoaXMucGxheUNoYXB0ZXIsIDMwMDApO1xuICB9O1xuXG4gIEVwaXNvZGUucHJvdG90eXBlLmdvdG9Mb2NhdGlvbkJ5VGl0bGUgPSBmdW5jdGlvbih0aXRsZSkge1xuICAgIHZhciBicmVha0xvb3AxLCBjaGFwdGVyLCBjaGFwdGVyVGl0bGUsIGksIGosIGssIGtleSwgbGF5ZXIsIGxheWVycywgbGF5ZXJzQXIsIGxlbiwgbGVuMSwgbGVuMiwgcmVmLCByZWYxLCByZWYyLCByZWYzLCBzbGlkZSwgc2xpZGVUaXRsZTtcbiAgICBQdWJTdWIucHVibGlzaCgnbW92aWUubGF5ZXJzLmNsZWFyLWFsbCcpO1xuICAgIGxheWVycyA9IHt9O1xuICAgIHJlZiA9IGFyaXN0b3RsZS5lcGlzb2RlRGF0YS5jaGFwdGVycztcbiAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNoYXB0ZXIgPSByZWZbaV07XG4gICAgICBjaGFwdGVyVGl0bGUgPSBjaGFwdGVyLnRpdGxlO1xuICAgICAgaWYgKGNoYXB0ZXIudGl0bGUgPT09IHRpdGxlKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgcmVmMSA9IGNoYXB0ZXIuc2xpZGVzO1xuICAgICAgZm9yIChqID0gMCwgbGVuMSA9IHJlZjEubGVuZ3RoOyBqIDwgbGVuMTsgaisrKSB7XG4gICAgICAgIHNsaWRlID0gcmVmMVtqXTtcbiAgICAgICAgaWYgKHNsaWRlLnRpdGxlID09PSB0aXRsZSkge1xuICAgICAgICAgIHNsaWRlVGl0bGUgPSBzbGlkZS50aXRsZTtcbiAgICAgICAgICBicmVha0xvb3AxID0gdHJ1ZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoKChyZWYyID0gc2xpZGUubW92aWUpICE9IG51bGwgPyByZWYyLmxheWVycyA6IHZvaWQgMCkgIT0gbnVsbCkge1xuICAgICAgICAgIHJlZjMgPSBzbGlkZS5tb3ZpZS5sYXllcnM7XG4gICAgICAgICAgZm9yIChrID0gMCwgbGVuMiA9IHJlZjMubGVuZ3RoOyBrIDwgbGVuMjsgaysrKSB7XG4gICAgICAgICAgICBsYXllciA9IHJlZjNba107XG4gICAgICAgICAgICBsYXllcnNbbGF5ZXIuZGVwdGhdID0gbGF5ZXI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoYnJlYWtMb29wMSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgbGF5ZXJzQXIgPSBbXTtcbiAgICBmb3IgKGtleSBpbiBsYXllcnMpIHtcbiAgICAgIGxheWVyID0gbGF5ZXJzW2tleV07XG4gICAgICBsYXllcnNBci5wdXNoKGxheWVyKTtcbiAgICB9XG4gICAgdGhpcy5jaGFwdGVycy5hY3RpdmF0ZUl0ZW1CeVBhcmFtKCd0aXRsZScsIGNoYXB0ZXJUaXRsZSk7XG4gICAgdGhpcy5wbGF5Q2hhcHRlcihzbGlkZS50aXRsZSk7XG4gICAgcmV0dXJuIFB1YlN1Yi5wdWJsaXNoKCdtb3ZpZS5yZWh5ZHJhdGUtbGF5ZXJzJywgbGF5ZXJzQXIpO1xuICB9O1xuXG4gIEVwaXNvZGUucHJvdG90eXBlLmNyZWF0ZUNoYXB0ZXJzID0gZnVuY3Rpb24odHJhaW5pbmdEYXRhKSB7XG4gICAgdmFyIGNoYXB0ZXJEYXRhLCBjaGFwdGVycywgaSwgbGVuLCByZWY7XG4gICAgY2hhcHRlcnMgPSBbXTtcbiAgICByZWYgPSB0cmFpbmluZ0RhdGEuY2hhcHRlcnM7XG4gICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjaGFwdGVyRGF0YSA9IHJlZltpXTtcbiAgICAgIGNoYXB0ZXJzLnB1c2gobmV3IENoYXB0ZXIoY2hhcHRlckRhdGEsIHRoaXMubW92aWUsIHRoaXMudXgsIHRoaXMuY2hhcHRlckNvbXBsZXRlKSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmNoYXB0ZXJzID0gbmV3IFNlcXVlbmNlKGNoYXB0ZXJzKTtcbiAgfTtcblxuICBFcGlzb2RlLnByb3RvdHlwZS5uZXh0Q2hhcHRlciA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmNoYXB0ZXJzLmlzQXRMYXN0SXRlbSgpKSB7XG4gICAgICByZXR1cm4gdGhpcy5lcGlzb2RlQ29tcGxldGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jaGFwdGVycy5uZXh0KCk7XG4gICAgICByZXR1cm4gdGhpcy5wbGF5Q2hhcHRlcigpO1xuICAgIH1cbiAgfTtcblxuICBFcGlzb2RlLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBsYXlDaGFwdGVyKCk7XG4gIH07XG5cbiAgRXBpc29kZS5wcm90b3R5cGUuY2hhcHRlckNvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG4gICAgUHViU3ViLnB1Ymxpc2goJ3N0YXRlLnNhdmUnKTtcbiAgICB0aGlzLmNoYXB0ZXJzLmdldEN1cnJlbnRJdGVtKCkuZGVzdHJveSgpO1xuICAgIHJldHVybiB0aGlzLm5leHRDaGFwdGVyKCk7XG4gIH07XG5cbiAgRXBpc29kZS5wcm90b3R5cGUucGxheUNoYXB0ZXIgPSBmdW5jdGlvbihmaXJzdFNsaWRlKSB7XG4gICAgaWYgKGZpcnN0U2xpZGUgPT0gbnVsbCkge1xuICAgICAgZmlyc3RTbGlkZSA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMuY2hhcHRlcnMuZ2V0Q3VycmVudEl0ZW0oKS5zdGFydChmaXJzdFNsaWRlKTtcbiAgICByZXR1cm4gUHViU3ViLnB1Ymxpc2goJ2NoYXB0ZXIuc3RhcnRlZCcsIHRoaXMuY2hhcHRlcnMuZ2V0Q3VycmVudEl0ZW0oKS5jaGFwdGVyRGF0YS50aXRsZSk7XG4gIH07XG5cbiAgRXBpc29kZS5wcm90b3R5cGUuZXBpc29kZUNvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG5ld0VwaXNvZGVOdW07XG4gICAgaWYgKHRoaXMuaXNMYXN0RXBpc29kZSkge1xuICAgICAgcmV0dXJuIGFyaXN0b3RsZS5sbXNQcm94eS5jb21wbGV0ZUNvdXJzZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBuZXdFcGlzb2RlTnVtID0gU3RyaW5nKE51bWJlcihhcmlzdG90bGUuZXBpc29kZU51bSkgKyAxKTtcbiAgICAgIGFyaXN0b3RsZS5sbXNQcm94eS5jb21wbGV0ZUVwaXNvZGUobmV3RXBpc29kZU51bSk7XG4gICAgICByZXR1cm4gUHViU3ViLnB1Ymxpc2goJ2VwaXNvZGUubG9hZCcsIG5ld0VwaXNvZGVOdW0pO1xuICAgIH1cbiAgfTtcblxuICBFcGlzb2RlLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNoYXB0ZXIsIGksIGxlbiwgcmVmLCByZXN1bHRzO1xuICAgIFB1YlN1Yi51bnN1YnNjcmliZSh0aGlzLnRva2VuMSk7XG4gICAgcmVmID0gdGhpcy5jaGFwdGVycy5pdGVtcztcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjaGFwdGVyID0gcmVmW2ldO1xuICAgICAgcmVzdWx0cy5wdXNoKGNoYXB0ZXIuZGVzdHJveSgpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgcmV0dXJuIEVwaXNvZGU7XG5cbn0pKCk7XG4iLCJ2YXIgQXVkaW9UcmFjaywgU1ZHQW5pbWF0aW9uLCBTbGlkZSxcbiAgYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH07XG5cbkF1ZGlvVHJhY2sgPSByZXF1aXJlKFwiZXBpc29kZS9hdWRpby10cmFja1wiKTtcblxuU1ZHQW5pbWF0aW9uID0gcmVxdWlyZShcIm1vdmllL3N2Zy1hbmltYXRpb25cIik7XG5cbm1vZHVsZS5leHBvcnRzID0gU2xpZGUgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIFNsaWRlKG1vdmllLCBzbGlkZVVYLCBzbGlkZURhdGEsIG9uU2xpZGVDb21wbGV0ZSkge1xuICAgIHRoaXMubW92aWUgPSBtb3ZpZTtcbiAgICB0aGlzLnNsaWRlVVggPSBzbGlkZVVYO1xuICAgIHRoaXMuc2xpZGVEYXRhID0gc2xpZGVEYXRhO1xuICAgIHRoaXMub25TbGlkZUNvbXBsZXRlID0gb25TbGlkZUNvbXBsZXRlO1xuICAgIHRoaXMucGxheSA9IGJpbmQodGhpcy5wbGF5LCB0aGlzKTtcbiAgICB0aGlzLnRpdGxlID0gdGhpcy5zbGlkZURhdGEudGl0bGU7XG4gIH1cblxuICBTbGlkZS5wcm90b3R5cGUucGxheSA9IGZ1bmN0aW9uKG9uQ29tcGxldGUpIHtcbiAgICBpZiAodGhpcy5zbGlkZURhdGEudGl0bGUgIT0gbnVsbCkge1xuICAgICAgUHViU3ViLnB1Ymxpc2goJ3NsaWRlLmFjdGl2YXRlZCcsIHRoaXMuc2xpZGVEYXRhLnRpdGxlKTtcbiAgICB9XG4gICAgdGhpcy5tb3ZpZS5wb3B1bGF0ZSh0aGlzLnNsaWRlRGF0YS5tb3ZpZSk7XG4gICAgdGhpcy5zbGlkZVVYLnBvcHVsYXRlKHRoaXMuc2xpZGVEYXRhLnV4KTtcbiAgICB0aGlzLnNldER1cmF0aW9uKCk7XG4gICAgdGhpcy5ydW5DdGFubGVlKHRoaXMuc2xpZGVEYXRhLmN0YW5sZWUpO1xuICAgIHRoaXMucnVuRGlhbG9ndWUodGhpcy5zbGlkZURhdGEuZGlhbG9ndWUpO1xuICAgIHRoaXMucnVuQWN0aW9ucyh0aGlzLnNsaWRlRGF0YS5hY3Rpb24pO1xuICAgIHJldHVybiB0aGlzLnJ1blNvdW5kRngodGhpcy5zbGlkZURhdGEuc2Z4KTtcbiAgfTtcblxuICBTbGlkZS5wcm90b3R5cGUucnVuU291bmRGeCA9IGZ1bmN0aW9uKHNmeCkge1xuICAgIGlmIChzZnggPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gUHViU3ViLnB1Ymxpc2goJ3NmeC5hZGQnLCBzZngpO1xuICB9O1xuXG4gIFNsaWRlLnByb3RvdHlwZS5ydW5BY3Rpb25zID0gZnVuY3Rpb24oYWN0aW9uKSB7XG4gICAgaWYgKGFjdGlvbiA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiBhcmlzdG90bGUuY29tbWFuZGVyW1wiZG9cIl0oYWN0aW9uKTtcbiAgfTtcblxuICBTbGlkZS5wcm90b3R5cGUuc2V0RHVyYXRpb24gPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgY3RhbmxlZVN1YnNjcmlwdGlvbiwgbGlzdGVuU3Vic2NyaXB0aW9uLCB1eFN1YnNjcmlwdGlvbjtcbiAgICBpZiAodGhpcy5zbGlkZURhdGEuZHVyYXRpb24gPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzd2l0Y2ggKHRoaXMuc2xpZGVEYXRhLmR1cmF0aW9uLmtpbmQpIHtcbiAgICAgIGNhc2UgXCJ0aW1lXCI6XG4gICAgICAgIHJldHVybiBhcmlzdG90bGUudGltZW91dCh0aGlzLm9uU2xpZGVDb21wbGV0ZSwgdGhpcy5zbGlkZURhdGEuZHVyYXRpb24uc2Vjb25kcyAqIDEwMDApO1xuICAgICAgY2FzZSBcInVzZXJcIjpcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFwid2FpdGluZyBvbiB0aGUgdXNlclwiKTtcbiAgICAgIGNhc2UgXCJ1eFwiOlxuICAgICAgICByZXR1cm4gdXhTdWJzY3JpcHRpb24gPSBQdWJTdWIuc3Vic2NyaWJlKCd1eC5jb21wbGV0ZScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIFB1YlN1Yi51bnN1YnNjcmliZSh1eFN1YnNjcmlwdGlvbik7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMub25TbGlkZUNvbXBsZXRlKCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSkodGhpcykpO1xuICAgICAgY2FzZSBcImRpYWxvZ3VlXCI6XG4gICAgICBjYXNlIFwiY3RhbmxlZVwiOlxuICAgICAgICByZXR1cm4gY3RhbmxlZVN1YnNjcmlwdGlvbiA9IFB1YlN1Yi5zdWJzY3JpYmUoJ2RpYWxvZ3VlLmNvbXBsZXRlJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgUHViU3ViLnVuc3Vic2NyaWJlKGN0YW5sZWVTdWJzY3JpcHRpb24pO1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLm9uU2xpZGVDb21wbGV0ZSgpO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pKHRoaXMpKTtcbiAgICAgIGNhc2UgXCJsaXN0ZW5cIjpcbiAgICAgICAgcmV0dXJuIGxpc3RlblN1YnNjcmlwdGlvbiA9IFB1YlN1Yi5zdWJzY3JpYmUodGhpcy5zbGlkZURhdGEuZHVyYXRpb24uZXZlbnQsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIFB1YlN1Yi51bnN1YnNjcmliZShsaXN0ZW5TdWJzY3JpcHRpb24pO1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLm9uU2xpZGVDb21wbGV0ZSgpO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pKHRoaXMpKTtcbiAgICB9XG4gIH07XG5cbiAgU2xpZGUucHJvdG90eXBlLnJ1bkN0YW5sZWUgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgaWYgKGRhdGEgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGFyaXN0b3RsZS5jdGFubGVlLmFjdGl2YXRlKGRhdGEpO1xuICAgIH1cbiAgfTtcblxuICBTbGlkZS5wcm90b3R5cGUucnVuRGlhbG9ndWUgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgaWYgKGRhdGEgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGFyaXN0b3RsZS5kaWFsb2d1ZS5hY3RpdmF0ZShkYXRhKTtcbiAgICB9XG4gIH07XG5cbiAgU2xpZGUucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gUHViU3ViLnVuc3Vic2NyaWJlKHRoaXMudG9rZW4xKTtcbiAgfTtcblxuICByZXR1cm4gU2xpZGU7XG5cbn0pKCk7XG4iLCJ2YXIgU2VxdWVuY2UsIFNsaWRlLCBTbGlkZXMsXG4gIGJpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9O1xuXG5TbGlkZSA9IHJlcXVpcmUoJ2VwaXNvZGUvc2xpZGUnKTtcblxuU2VxdWVuY2UgPSByZXF1aXJlKCdtaXNjL3NlcXVlbmNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2xpZGVzID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBTbGlkZXModHJhaW5pbmdEYXRhLCBtb3ZpZSwgdXgsIG9uU2hvd0NvbXBsZXRlKSB7XG4gICAgdmFyIHRva2VuMSwgdG9rZW4yLCB0b2tlbjMsIHRva2VuNCwgdG9rZW43O1xuICAgIHRoaXMub25TaG93Q29tcGxldGUgPSBvblNob3dDb21wbGV0ZTtcbiAgICB0aGlzLnNsaWRlQ29tcGxldGUgPSBiaW5kKHRoaXMuc2xpZGVDb21wbGV0ZSwgdGhpcyk7XG4gICAgdGhpcy5uZXh0U2xpZGUgPSBiaW5kKHRoaXMubmV4dFNsaWRlLCB0aGlzKTtcbiAgICBhcmlzdG90bGUuc2xpZGVzID0gdGhpcztcbiAgICB0aGlzLmNyZWF0ZVNsaWRlcyh0cmFpbmluZ0RhdGEsIG1vdmllLCB1eCk7XG4gICAgdG9rZW4xID0gUHViU3ViLnN1YnNjcmliZSgnc2xpZGVzLm5leHQnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLm5leHRTbGlkZSgpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgdG9rZW4yID0gUHViU3ViLnN1YnNjcmliZSgnc2xpZGVzLm5leHQtc2xpZGUnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLm5leHRTbGlkZSgpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgdG9rZW4zID0gUHViU3ViLnN1YnNjcmliZSgnc2xpZGVzLnJlcGxheScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMucmVwbGF5KCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0b2tlbjQgPSBQdWJTdWIuc3Vic2NyaWJlKCdzbGlkZXMucHJldi1zbGlkZScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMucHJldlNsaWRlKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0b2tlbjcgPSBQdWJTdWIuc3Vic2NyaWJlKCdtb3ZpZS5yZXBvcnQnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKF90aGlzLmdldEluZGV4QW5kVG90YWwoKSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0aGlzLnN1YnNjcmlwdGlvblRva2VucyA9IFt0b2tlbjEsIHRva2VuMiwgdG9rZW4zLCB0b2tlbjQsIHRva2VuN107XG4gIH1cblxuICBTbGlkZXMucHJvdG90eXBlLmNyZWF0ZVNsaWRlcyA9IGZ1bmN0aW9uKHRyYWluaW5nRGF0YSwgbW92aWUsIHV4KSB7XG4gICAgdmFyIGNvdW50LCBpLCBsZW4sIHJlZiwgc2xpZGVEYXRhLCBzbGlkZXM7XG4gICAgc2xpZGVzID0gW107XG4gICAgY291bnQgPSAwO1xuICAgIHJlZiA9IHRyYWluaW5nRGF0YS5zbGlkZXM7XG4gICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBzbGlkZURhdGEgPSByZWZbaV07XG4gICAgICBzbGlkZURhdGEuaW5kZXggPSBjb3VudCsrO1xuICAgICAgc2xpZGVzLnB1c2gobmV3IFNsaWRlKG1vdmllLCB1eCwgc2xpZGVEYXRhLCB0aGlzLnNsaWRlQ29tcGxldGUpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc2xpZGVzID0gbmV3IFNlcXVlbmNlKHNsaWRlcyk7XG4gIH07XG5cbiAgU2xpZGVzLnByb3RvdHlwZS5uZXh0U2xpZGUgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5zbGlkZXMuaXNBdExhc3RJdGVtKCkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNsaWRlU2hvd0NvbXBsZXRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2xpZGVzLm5leHQoKTtcbiAgICAgIHJldHVybiB0aGlzLnBsYXlTbGlkZSgpO1xuICAgIH1cbiAgfTtcblxuICBTbGlkZXMucHJvdG90eXBlLnJlcGxheSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBsYXlTbGlkZSgpO1xuICB9O1xuXG4gIFNsaWRlcy5wcm90b3R5cGUucHJldlNsaWRlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zbGlkZXMucHJldigpO1xuICAgIHJldHVybiB0aGlzLnBsYXlTbGlkZSgpO1xuICB9O1xuXG4gIFNsaWRlcy5wcm90b3R5cGUuZ290b1NsaWRlID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gTnVtYmVyKSB7XG4gICAgICByZXR1cm4gdGhpcy5nb3RvU2xpZGVCeUluZGV4KGRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5nb3RvU2xpZGVCeUlkKGRhdGEpO1xuICAgIH1cbiAgfTtcblxuICBTbGlkZXMucHJvdG90eXBlLmdvdG9TbGlkZUJ5SW5kZXggPSBmdW5jdGlvbihpbmRleCkge1xuICAgIHRoaXMuc2xpZGVzLmNoYW5nZUl0ZW1CeUluZGV4KGluZGV4KTtcbiAgICByZXR1cm4gdGhpcy5wbGF5U2xpZGUoKTtcbiAgfTtcblxuICBTbGlkZXMucHJvdG90eXBlLmdvdG9TbGlkZUJ5VGl0bGUgPSBmdW5jdGlvbih0aXRsZSkge1xuICAgIHRoaXMuc2xpZGVzLmFjdGl2YXRlSXRlbUJ5UGFyYW0oXCJ0aXRsZVwiLCB0aXRsZSk7XG4gICAgcmV0dXJuIHRoaXMucGxheVNsaWRlKCk7XG4gIH07XG5cbiAgU2xpZGVzLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGksIGosIGxlbiwgbGVuMSwgcmVmLCByZWYxLCByZXN1bHRzLCBzbGlkZSwgdG9rZW47XG4gICAgcmVmID0gdGhpcy5zbGlkZXMuaXRlbXM7XG4gICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBzbGlkZSA9IHJlZltpXTtcbiAgICAgIHNsaWRlLmRlc3Ryb3koKTtcbiAgICB9XG4gICAgdGhpcy5zbGlkZXMgPSBudWxsO1xuICAgIHJlZjEgPSB0aGlzLnN1YnNjcmlwdGlvblRva2VucztcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChqID0gMCwgbGVuMSA9IHJlZjEubGVuZ3RoOyBqIDwgbGVuMTsgaisrKSB7XG4gICAgICB0b2tlbiA9IHJlZjFbal07XG4gICAgICByZXN1bHRzLnB1c2goUHViU3ViLnVuc3Vic2NyaWJlKHRva2VuKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIFNsaWRlcy5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wbGF5U2xpZGUoKTtcbiAgfTtcblxuICBTbGlkZXMucHJvdG90eXBlLnNsaWRlQ29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5uZXh0U2xpZGUoKTtcbiAgfTtcblxuICBTbGlkZXMucHJvdG90eXBlLnBsYXlTbGlkZSA9IGZ1bmN0aW9uKCkge1xuICAgIFB1YlN1Yi5wdWJsaXNoKCdzbGlkZXMuY2hhbmdpbmcnKTtcbiAgICByZXR1cm4gdGhpcy5zbGlkZXMuZ2V0Q3VycmVudEl0ZW0oKS5wbGF5KHRoaXMuc2xpZGVDb21wbGV0ZSk7XG4gIH07XG5cbiAgU2xpZGVzLnByb3RvdHlwZS5zbGlkZVNob3dDb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm9uU2hvd0NvbXBsZXRlKCk7XG4gIH07XG5cbiAgU2xpZGVzLnByb3RvdHlwZS5nZXRDdXJyZW50SW5kZXggPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zbGlkZXMuZ2V0Q3VycmVudEl0ZW0oKS5zbGlkZURhdGEuaW5kZXg7XG4gIH07XG5cbiAgU2xpZGVzLnByb3RvdHlwZS5nZXRJbmRleEFuZFRvdGFsID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwic2xpZGUgXCIgKyAodGhpcy5zbGlkZXMuZ2V0Q3VycmVudEl0ZW0oKS5zbGlkZURhdGEuaW5kZXgpICsgXCIgb2YgXCIgKyB0aGlzLnNsaWRlcy50b3RhbEl0ZW1zO1xuICB9O1xuXG4gIHJldHVybiBTbGlkZXM7XG5cbn0pKCk7XG4iLCJ2YXIgU2VxdWVuY2U7XG5cbm1vZHVsZS5leHBvcnRzID0gU2VxdWVuY2UgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIFNlcXVlbmNlKGl0ZW1zKSB7XG4gICAgdGhpcy5pdGVtcyA9IGl0ZW1zO1xuICAgIHRoaXMucmVzZXQoKTtcbiAgICB0aGlzLnRvdGFsSXRlbXMgPSB0aGlzLml0ZW1zLmxlbmd0aDtcbiAgfVxuXG4gIFNlcXVlbmNlLnByb3RvdHlwZS5uZXh0ID0gZnVuY3Rpb24obG9vcE9uT3ZlclNob290KSB7XG4gICAgaWYgKGxvb3BPbk92ZXJTaG9vdCA9PSBudWxsKSB7XG4gICAgICBsb29wT25PdmVyU2hvb3QgPSBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaW5jcmFtZW50SXRlbUluZGV4KDEsIGxvb3BPbk92ZXJTaG9vdCk7XG4gIH07XG5cbiAgU2VxdWVuY2UucHJvdG90eXBlLnByZXYgPSBmdW5jdGlvbihsb29wT25PdmVyU2hvb3QpIHtcbiAgICBpZiAobG9vcE9uT3ZlclNob290ID09IG51bGwpIHtcbiAgICAgIGxvb3BPbk92ZXJTaG9vdCA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5pbmNyYW1lbnRJdGVtSW5kZXgoLTEsIGxvb3BPbk92ZXJTaG9vdCk7XG4gIH07XG5cbiAgU2VxdWVuY2UucHJvdG90eXBlLmlzQXRMYXN0SXRlbSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmN1cnJlbnRJdGVtSW5kZXggPT09IHRoaXMudG90YWxJdGVtcyAtIDEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIFNlcXVlbmNlLnByb3RvdHlwZS5nZXRDdXJyZW50SXRlbSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLml0ZW1zW3RoaXMuY3VycmVudEl0ZW1JbmRleF07XG4gIH07XG5cbiAgU2VxdWVuY2UucHJvdG90eXBlLmN1cnJlbnRJdGVtID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0Q3VycmVudEl0ZW0oKTtcbiAgfTtcblxuICBTZXF1ZW5jZS5wcm90b3R5cGUuaW5jcmFtZW50SXRlbUluZGV4ID0gZnVuY3Rpb24oaW5jcmFtZW50LCBsb29wT25PdmVyU2hvb3QpIHtcbiAgICB2YXIgbmV3SW5kZXg7XG4gICAgaWYgKGxvb3BPbk92ZXJTaG9vdCA9PSBudWxsKSB7XG4gICAgICBsb29wT25PdmVyU2hvb3QgPSBmYWxzZTtcbiAgICB9XG4gICAgbmV3SW5kZXggPSB0aGlzLmN1cnJlbnRJdGVtSW5kZXggKyBpbmNyYW1lbnQ7XG4gICAgaWYgKG5ld0luZGV4ID4gdGhpcy50b3RhbEl0ZW1zIC0gMSkge1xuICAgICAgbmV3SW5kZXggPSBsb29wT25PdmVyU2hvb3QgPyAwIDogdGhpcy50b3RhbEl0ZW1zIC0gMTtcbiAgICB9IGVsc2UgaWYgKG5ld0luZGV4IDwgMCkge1xuICAgICAgbmV3SW5kZXggPSBsb29wT25PdmVyU2hvb3QgPyB0aGlzLnRvdGFsSXRlbXMgLSAxIDogMDtcbiAgICB9XG4gICAgaWYgKHRoaXMuY3VycmVudEl0ZW1JbmRleCAhPT0gbmV3SW5kZXgpIHtcbiAgICAgIHRoaXMuY3VycmVudEl0ZW1JbmRleCA9IG5ld0luZGV4O1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgU2VxdWVuY2UucHJvdG90eXBlLmNoYW5nZUl0ZW1CeUluZGV4ID0gZnVuY3Rpb24obmV3SW5kZXgpIHtcbiAgICB2YXIgaW5jcmFtZW50RGlmZmVyZW5jZSwgcGx1c09yTWludXM7XG4gICAgcGx1c09yTWludXMgPSBuZXdJbmRleCA+IHRoaXMuY3VycmVudEl0ZW1JbmRleCA/IDEgOiAtMTtcbiAgICBpbmNyYW1lbnREaWZmZXJlbmNlID0gTWF0aC5hYnModGhpcy5jdXJyZW50SXRlbUluZGV4IC0gbmV3SW5kZXgpICogcGx1c09yTWludXM7XG4gICAgcmV0dXJuIHRoaXMuaW5jcmFtZW50SXRlbUluZGV4KGluY3JhbWVudERpZmZlcmVuY2UpO1xuICB9O1xuXG4gIFNlcXVlbmNlLnByb3RvdHlwZS5hY3RpdmF0ZUl0ZW1CeVBhcmFtID0gZnVuY3Rpb24ocGFyYW0sIHZhbCkge1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRJdGVtSW5kZXggPSB0aGlzLmdldEluZGV4QnlQYXJhbShwYXJhbSwgdmFsKTtcbiAgfTtcblxuICBTZXF1ZW5jZS5wcm90b3R5cGUuZ2V0SW5kZXhCeVBhcmFtID0gZnVuY3Rpb24ocGFyYW0sIHZhbCkge1xuICAgIHZhciBpLCBpdGVtLCBqLCBsZW4sIHJlZjtcbiAgICByZWYgPSB0aGlzLml0ZW1zO1xuICAgIGZvciAoaSA9IGogPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBqIDwgbGVuOyBpID0gKytqKSB7XG4gICAgICBpdGVtID0gcmVmW2ldO1xuICAgICAgaWYgKGl0ZW1bcGFyYW1dID09PSB2YWwpIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIFNlcXVlbmNlLnByb3RvdHlwZS5nZXRJdGVtQnlQYXJhbSA9IGZ1bmN0aW9uKHBhcmFtLCB2YWwpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtc1t0aGlzLmdldEluZGV4QnlQYXJhbShwYXJhbSwgdmFsKV07XG4gIH07XG5cbiAgU2VxdWVuY2UucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudEl0ZW1JbmRleCA9IDA7XG4gIH07XG5cbiAgcmV0dXJuIFNlcXVlbmNlO1xuXG59KSgpO1xuIiwidmFyIEFzc2V0UHJlcGxvYWRlcjtcblxubW9kdWxlLmV4cG9ydHMgPSBBc3NldFByZXBsb2FkZXIgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIEFzc2V0UHJlcGxvYWRlcihkYXRhLCBjYWxsYmFjaywgcHJvZ3Jlc3NDYWxsYmFjaykge1xuICAgIHRoaXMuY2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgICB0aGlzLnByb2dyZXNzQ2FsbGJhY2sgPSBwcm9ncmVzc0NhbGxiYWNrO1xuICAgIHRoaXMucHJlbG9hZEFzc2V0cyhkYXRhKTtcbiAgfVxuXG4gIEFzc2V0UHJlcGxvYWRlci5wcm90b3R5cGUucHJlbG9hZEFzc2V0cyA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2YXIgYXNzZXRzLCBwcmVsb2FkUXVldWUsIHJlZ2V4O1xuICAgIGFzc2V0cyA9IFtdO1xuICAgIHJlZ2V4ID0gLy4rXFwuKHN2ZykvO1xuICAgIHRoaXMubG9va0ZvckZpbGVzKGRhdGEsIGFzc2V0cywgcmVnZXgpO1xuICAgIGlmIChhc3NldHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLmNhbGxiYWNrKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNyZWF0ZWpzLlNvdW5kLmFsdGVybmF0ZUV4dGVuc2lvbnMgPSBbXCJtcDNcIiwgXCJtNGFcIl07XG4gICAgcHJlbG9hZFF1ZXVlID0gbmV3IGNyZWF0ZWpzLkxvYWRRdWV1ZSgpO1xuICAgIHByZWxvYWRRdWV1ZS5pbnN0YWxsUGx1Z2luKGNyZWF0ZWpzLlNvdW5kKTtcbiAgICBpZiAodGhpcy5wcm9ncmVzc0NhbGxiYWNrICE9IG51bGwpIHtcbiAgICAgIHByZWxvYWRRdWV1ZS5vbihcInByb2dyZXNzXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgICAgIGlmIChlLmxvYWRlZCA+IDEpIHtcbiAgICAgICAgICAgIGUubG9hZGVkID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIF90aGlzLnByb2dyZXNzQ2FsbGJhY2soZS5sb2FkZWQpO1xuICAgICAgICB9O1xuICAgICAgfSkodGhpcykpO1xuICAgIH1cbiAgICBwcmVsb2FkUXVldWUub24oXCJjb21wbGV0ZVwiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmNhbGxiYWNrKGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgcmV0dXJuIHByZWxvYWRRdWV1ZS5sb2FkTWFuaWZlc3QoYXNzZXRzKTtcbiAgfTtcblxuICBBc3NldFByZXBsb2FkZXIucHJvdG90eXBlLmxvb2tGb3JGaWxlcyA9IGZ1bmN0aW9uKGl0ZW0sIHN0b3JhZ2UsIHJlZ2V4KSB7XG4gICAgdmFyIGNoaWxkLCBpLCBrZXksIGxlbiwgcmVzdWx0cywgcmVzdWx0czEsIHR5cGU7XG4gICAgdHlwZSA9IHR5cGVvZiBpdGVtO1xuICAgIGlmICh0eXBlID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBpZiAoLy5tcDN8Lm00YXwuanNvbnwuc3ZnfC5qcGd8LmpwZWd8LnBuZy8udGVzdChpdGVtKSkge1xuICAgICAgICByZXR1cm4gc3RvcmFnZS5wdXNoKHtcbiAgICAgICAgICBzcmM6IFwiXCIgKyAoYXJpc3RvdGxlLmdldEFzc2V0UGF0aChpdGVtKSksXG4gICAgICAgICAgaWQ6IGl0ZW1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSBcIm9iamVjdFwiKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShpdGVtKSkge1xuICAgICAgICByZXN1bHRzID0gW107XG4gICAgICAgIGZvciAoaSA9IDAsIGxlbiA9IGl0ZW0ubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICBjaGlsZCA9IGl0ZW1baV07XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMubG9va0ZvckZpbGVzKGNoaWxkLCBzdG9yYWdlLCByZWdleCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0czEgPSBbXTtcbiAgICAgICAgZm9yIChrZXkgaW4gaXRlbSkge1xuICAgICAgICAgIGNoaWxkID0gaXRlbVtrZXldO1xuICAgICAgICAgIHJlc3VsdHMxLnB1c2godGhpcy5sb29rRm9yRmlsZXMoY2hpbGQsIHN0b3JhZ2UsIHJlZ2V4KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHMxO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gQXNzZXRQcmVwbG9hZGVyO1xuXG59KSgpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGVkZ2UsIG1zaWUsIHJ2LCB0cmlkZW50LCB1YSwgdjtcbiAgdWEgPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgbXNpZSA9IHVhLmluZGV4T2YoJ01TSUUgJyk7XG4gIGlmIChtc2llID4gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICAgIHYgPSBwYXJzZUludCh1YS5zdWJzdHJpbmcobXNpZSArIDUsIHVhLmluZGV4T2YoJy4nLCBtc2llKSksIDEwKTtcbiAgfVxuICB0cmlkZW50ID0gdWEuaW5kZXhPZignVHJpZGVudC8nKTtcbiAgaWYgKHRyaWRlbnQgPiAwKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gICAgcnYgPSB1YS5pbmRleE9mKCdydjonKTtcbiAgICB2ID0gcGFyc2VJbnQodWEuc3Vic3RyaW5nKHJ2ICsgMywgdWEuaW5kZXhPZignLicsIHJ2KSksIDEwKTtcbiAgfVxuICBlZGdlID0gdWEuaW5kZXhPZignRWRnZS8nKTtcbiAgaWYgKGVkZ2UgPiAwKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gICAgdiA9IHBhcnNlSW50KHVhLnN1YnN0cmluZyhlZGdlICsgNSwgdWEuaW5kZXhPZignLicsIGVkZ2UpKSwgMTApO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG4iLCJ2YXIgQ29tbWFuZGVyO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1hbmRlciA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gQ29tbWFuZGVyKCkge1xuICAgIHdpbmRvdy5hcmlzdG90bGUuY29tbWFuZGVyID0gdGhpcztcbiAgfVxuXG4gIENvbW1hbmRlci5wcm90b3R5cGVbXCJkb1wiXSA9IGZ1bmN0aW9uKGFjdGlvbiwgcHVibGlzaFN5bmNocm9ub3VzbHkpIHtcbiAgICB2YXIgaSwgaXRlbSwgbGVuLCByZXN1bHRzO1xuICAgIGlmIChwdWJsaXNoU3luY2hyb25vdXNseSA9PSBudWxsKSB7XG4gICAgICBwdWJsaXNoU3luY2hyb25vdXNseSA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheShhY3Rpb24pKSB7XG4gICAgICByZXN1bHRzID0gW107XG4gICAgICBmb3IgKGkgPSAwLCBsZW4gPSBhY3Rpb24ubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaXRlbSA9IGFjdGlvbltpXTtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMucHVibGlzaChpdGVtLCBwdWJsaXNoU3luY2hyb25vdXNseSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnB1Ymxpc2goYWN0aW9uLCBwdWJsaXNoU3luY2hyb25vdXNseSk7XG4gICAgfVxuICB9O1xuXG4gIENvbW1hbmRlci5wcm90b3R5cGUucHVibGlzaCA9IGZ1bmN0aW9uKGFjdGlvbiwgcHVibGlzaFN5bmNocm9ub3VzbHkpIHtcbiAgICBpZiAocHVibGlzaFN5bmNocm9ub3VzbHkgPT0gbnVsbCkge1xuICAgICAgcHVibGlzaFN5bmNocm9ub3VzbHkgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKChhY3Rpb24gIT0gbnVsbCA/IGFjdGlvbi5kZWxheSA6IHZvaWQgMCkgIT0gbnVsbCkge1xuICAgICAgdGhpcy5wdWJsaXNoRGVsYXllZEFjdGlvbihhY3Rpb24pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAocHVibGlzaFN5bmNocm9ub3VzbHkpIHtcbiAgICAgIHJldHVybiBQdWJTdWIucHVibGlzaFN5bmMoYWN0aW9uLmNtZCwgYWN0aW9uLmRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gUHViU3ViLnB1Ymxpc2goYWN0aW9uLmNtZCwgYWN0aW9uLmRhdGEpO1xuICAgIH1cbiAgfTtcblxuICBDb21tYW5kZXIucHJvdG90eXBlLnB1Ymxpc2hEZWxheWVkQWN0aW9uID0gZnVuY3Rpb24oYWN0aW9uKSB7XG4gICAgcmV0dXJuIGFyaXN0b3RsZS50aW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIFB1YlN1Yi5wdWJsaXNoKGFjdGlvbi5jbWQsIGFjdGlvbi5kYXRhKTtcbiAgICB9LCBhY3Rpb24uZGVsYXkpO1xuICB9O1xuXG4gIHJldHVybiBDb21tYW5kZXI7XG5cbn0pKCk7XG4iLCJ2YXIgQXVkaW9UcmFjaywgRGV2VG9vbHMsXG4gIGJpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9O1xuXG5BdWRpb1RyYWNrID0gcmVxdWlyZSgnZXBpc29kZS9hdWRpby10cmFjaycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERldlRvb2xzID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBEZXZUb29scyhpc0Rldk1vZGUpIHtcbiAgICB0aGlzLmlzRGV2TW9kZSA9IGlzRGV2TW9kZTtcbiAgICB0aGlzLnVwZGF0ZSA9IGJpbmQodGhpcy51cGRhdGUsIHRoaXMpO1xuICAgIGlmICghdGhpcy5pc0Rldk1vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5pbml0UGVyZm9ybWFuY2VTdGF0cygpO1xuICB9XG5cbiAgRGV2VG9vbHMucHJvdG90eXBlLmdvID0gZnVuY3Rpb24oZGV2Q29uZmlnLCBpdGVtcykge1xuICAgIGlmICghdGhpcy5pc0Rldk1vZGUgfHwgKGRldkNvbmZpZyA9PSBudWxsKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZGV2Q29uZmlnLnNraXBTbGF0ZSAhPSBudWxsKSB7XG4gICAgICB0aGlzLnNraXBTbGF0ZSA9IGRldkNvbmZpZy5za2lwU2xhdGU7XG4gICAgfVxuICAgIHRoaXMuc2tpcChkZXZDb25maWcsIGl0ZW1zKTtcbiAgICB0aGlzLnByZXZlbnRBbmltYXRpb25Bc05lZWRlZChkZXZDb25maWcsIGl0ZW1zKTtcbiAgICB0aGlzLmFkZEluZGV4ZXNUb0l0ZW1zKGRldkNvbmZpZywgaXRlbXMpO1xuICAgIGlmIChkZXZDb25maWcudm9sdW1lICE9IG51bGwpIHtcbiAgICAgIHJldHVybiBBdWRpb1RyYWNrLmluaXRTb3VuZFNldHRpbmdzKGRldkNvbmZpZy52b2x1bWUpO1xuICAgIH1cbiAgfTtcblxuICBEZXZUb29scy5wcm90b3R5cGUuc2tpcCA9IGZ1bmN0aW9uKGRldkNvbmZpZywgaXRlbXMpIHtcbiAgICB2YXIgaiwgbGVuLCByZWYsIHJlc3VsdHMsIHNsaWRlSW5kZXgsIHN0YXJ0SW5kZXg7XG4gICAgaWYgKCF0aGlzLmlzRGV2TW9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZGV2Q29uZmlnLnN0YXJ0SW5kZXggIT0gbnVsbCkge1xuICAgICAgaWYgKGRldkNvbmZpZy5zdGFydEluZGV4IDwgMCkge1xuICAgICAgICBkZXZDb25maWcuc3RhcnRJbmRleCA9IGl0ZW1zLmxlbmd0aCArIGRldkNvbmZpZy5zdGFydEluZGV4O1xuICAgICAgfVxuICAgICAgc3RhcnRJbmRleCA9IGRldkNvbmZpZy5zdGFydEluZGV4O1xuICAgICAgaXRlbXMuc3BsaWNlKDAsIGRldkNvbmZpZy5zdGFydEluZGV4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhcnRJbmRleCA9IDA7XG4gICAgfVxuICAgIGlmIChkZXZDb25maWcuc2tpcCAhPSBudWxsKSB7XG4gICAgICByZWYgPSBkZXZDb25maWcuc2tpcC5zb3J0KCkucmV2ZXJzZSgpO1xuICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgZm9yIChqID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgIHNsaWRlSW5kZXggPSByZWZbal07XG4gICAgICAgIGlmIChzbGlkZUluZGV4ID4gc3RhcnRJbmRleCkge1xuICAgICAgICAgIHJlc3VsdHMucHVzaChpdGVtcy5zcGxpY2Uoc2xpZGVJbmRleCAtIHN0YXJ0SW5kZXgsIDEpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2godm9pZCAwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxuICB9O1xuXG4gIERldlRvb2xzLnByb3RvdHlwZS5wcmV2ZW50QW5pbWF0aW9uQXNOZWVkZWQgPSBmdW5jdGlvbihkZXZDb25maWcsIGl0ZW1zKSB7XG4gICAgdmFyIGksIGosIGxlbiwgcmVmLCByZXN1bHRzLCBzbGlkZTtcbiAgICBpZiAoZGV2Q29uZmlnLmRvbnRBbmltYXRlID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmVmID0gZGV2Q29uZmlnLmRvbnRBbmltYXRlO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGkgPSBqID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaiA8IGxlbjsgaSA9ICsraikge1xuICAgICAgc2xpZGUgPSByZWZbaV07XG4gICAgICByZXN1bHRzLnB1c2godGhpcy5hZGRTa2lwVG9FbmRzKGl0ZW1zW2ldKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIERldlRvb2xzLnByb3RvdHlwZS5hZGRTa2lwVG9FbmRzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIGl0ZW0sIGtleSwgcmVzdWx0cztcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChrZXkgaW4gb2JqKSB7XG4gICAgICBpdGVtID0gb2JqW2tleV07XG4gICAgICBpZiAodHlwZW9mIGl0ZW0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgdGhpcy5hZGRTa2lwVG9FbmRzKGl0ZW0sIG9iaik7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGl0ZW0gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgaWYgKGl0ZW0ubWF0Y2goLy5qc29uL2cpKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKG9iai5qdW1wVG9FbmQgPSB0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2godm9pZCAwKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHZvaWQgMCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIERldlRvb2xzLnByb3RvdHlwZS5hZGRJbmRleGVzVG9JdGVtcyA9IGZ1bmN0aW9uKGRldkNvbmZpZywgaXRlbXMpIHtcbiAgICB2YXIgY291bnQsIGl0ZW0sIGosIGxlbiwgbnVtU2xpZGVzUmVtb3ZlZCwgcmVzdWx0cztcbiAgICBudW1TbGlkZXNSZW1vdmVkID0gZGV2Q29uZmlnLnN0YXJ0SW5kZXggIT0gbnVsbCA/IGRldkNvbmZpZy5zdGFydEluZGV4IDogMDtcbiAgICBjb3VudCA9IDA7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoaiA9IDAsIGxlbiA9IGl0ZW1zLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICBpdGVtID0gaXRlbXNbal07XG4gICAgICByZXN1bHRzLnB1c2goaXRlbS5pbmRleCA9IG51bVNsaWRlc1JlbW92ZWQgKyBjb3VudCsrKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgRGV2VG9vbHMucHJvdG90eXBlLmluaXRQZXJmb3JtYW5jZVN0YXRzID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zdGF0cyA9IG5ldyBTdGF0cygpO1xuICAgIHRoaXMuc3RhdHMuc2V0TW9kZSgwKTtcbiAgICB0aGlzLnN0YXRzLmRvbUVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIHRoaXMuc3RhdHMuZG9tRWxlbWVudC5zdHlsZS5sZWZ0ID0gJzBweCc7XG4gICAgdGhpcy5zdGF0cy5kb21FbGVtZW50LnN0eWxlLnRvcCA9ICcwcHgnO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5zdGF0cy5kb21FbGVtZW50KTtcbiAgICByZXR1cm4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlKTtcbiAgfTtcblxuICBEZXZUb29scy5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zdGF0cy5lbmQoKTtcbiAgICB0aGlzLnN0YXRzLmJlZ2luKCk7XG4gICAgcmV0dXJuIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZSk7XG4gIH07XG5cbiAgcmV0dXJuIERldlRvb2xzO1xuXG59KSgpO1xuIiwidmFyIERpY3Rpb25hcnk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGljdGlvbmFyeSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gRGljdGlvbmFyeSgpIHtcbiAgICBhcmlzdG90bGUuZGljdGlvbmFyeSA9IHRoaXM7XG4gICAgdGhpcy50ZXJtcyA9IHtcbiAgICAgIFwiY2FkZXRcIjogJ0NhZGV0JyxcbiAgICAgIFwiY2FkZXQtZmlyc3QtY2xhc3NcIjogJ0NhZGV0IEZpcnN0IENsYXNzJyxcbiAgICAgIFwidGVjaG5pY2FsLWNhZGV0XCI6IFwiVGVjaG5pY2FsIENhZGV0XCIsXG4gICAgICBcImN5YmVyLWNhZGV0XCI6IFwiQ3liZXIgQ2FkZXRcIlxuICAgIH07XG4gIH1cblxuICBEaWN0aW9uYXJ5LnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbih0ZXJtKSB7XG4gICAgaWYgKHRoaXMudGVybXNbdGVybV0gIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMudGVybXNbdGVybV07XG4gICAgfVxuICAgIHJldHVybiBhcmlzdG90bGVbXCJ0aHJvd1wiXShcIlRyaWVkIHRvIHVzZSBhbiB1bmtub3duIHRlcm06IGBcIiArIHRlcm0gKyBcImBcIik7XG4gIH07XG5cbiAgcmV0dXJuIERpY3Rpb25hcnk7XG5cbn0pKCk7XG4iLCJ2YXIgRXBpc29kZUxvYWRlcjtcblxubW9kdWxlLmV4cG9ydHMgPSBFcGlzb2RlTG9hZGVyID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBFcGlzb2RlTG9hZGVyKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIHRoaXMubG9hZENvbmZpZ0RhdGEoKTtcbiAgfVxuXG4gIEVwaXNvZGVMb2FkZXIucHJvdG90eXBlLmxvYWRDb25maWdEYXRhID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubG9hZEpzb24oXCJsb2NhbC9jb25maWcuanNvblwiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihqc29uKSB7XG4gICAgICAgIHZhciBrZXksIHJlZiwgdmFsO1xuICAgICAgICByZWYgPSBKU09OLnBhcnNlKGpzb24pO1xuICAgICAgICBmb3IgKGtleSBpbiByZWYpIHtcbiAgICAgICAgICB2YWwgPSByZWZba2V5XTtcbiAgICAgICAgICBhcmlzdG90bGUuZ2xvYmFscy5zZXQoa2V5LCB2YWwsIGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXMubG9hZEVwaXNvZGUoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9O1xuXG4gIEVwaXNvZGVMb2FkZXIucHJvdG90eXBlLmxvYWRFcGlzb2RlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubG9hZEpzb24oYXJpc3RvdGxlLmdldEFzc2V0UGF0aChcIm1hcC5qc29uXCIpLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihqc29uKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5jYWxsYmFjayhKU09OLnBhcnNlKGpzb24pKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9O1xuXG4gIEVwaXNvZGVMb2FkZXIucHJvdG90eXBlLmxvYWRKc29uID0gZnVuY3Rpb24ocGF0aCwgb25Db21wbGV0ZSkge1xuICAgIHZhciB4b2JqO1xuICAgIHhvYmogPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB4b2JqLm92ZXJyaWRlTWltZVR5cGUoJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICB4b2JqLm9wZW4oJ0dFVCcsIHBhdGgsIHRydWUpO1xuICAgIHhvYmoub25yZWFkeXN0YXRlY2hhbmdlID0gKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh4b2JqLnJlYWR5U3RhdGUgPT09IDQgJiYgeG9iai5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIHJldHVybiBvbkNvbXBsZXRlKHhvYmoucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSh0aGlzKTtcbiAgICByZXR1cm4geG9iai5zZW5kKG51bGwpO1xuICB9O1xuXG4gIHJldHVybiBFcGlzb2RlTG9hZGVyO1xuXG59KSgpO1xuIiwidmFyIEdsb2JhbFZhcnM7XG5cbm1vZHVsZS5leHBvcnRzID0gR2xvYmFsVmFycyA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gR2xvYmFsVmFycygpIHtcbiAgICB0aGlzLnZhcnMgPSB7fTtcbiAgICBhcmlzdG90bGUuZ2xvYmFscyA9IHRoaXM7XG4gICAgUHViU3ViLnN1YnNjcmliZSgnc2V0dmFycycsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGEsIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnNldE1hbnkoZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgfVxuXG4gIEdsb2JhbFZhcnMucHJvdG90eXBlLnNldE1hbnkgPSBmdW5jdGlvbih2YXJzKSB7XG4gICAgdmFyIGtleSwgdmFsO1xuICAgIGZvciAoa2V5IGluIHZhcnMpIHtcbiAgICAgIHZhbCA9IHZhcnNba2V5XTtcbiAgICAgIHRoaXMudmFyc1trZXldID0gdmFsO1xuICAgIH1cbiAgICByZXR1cm4gUHViU3ViLnB1Ymxpc2goJ3N0YXRlLnNhdmUnKTtcbiAgfTtcblxuICBHbG9iYWxWYXJzLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbihrZXksIHZhbCwgc2F2ZVN0YXRlKSB7XG4gICAgaWYgKHNhdmVTdGF0ZSA9PSBudWxsKSB7XG4gICAgICBzYXZlU3RhdGUgPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLnZhcnNba2V5XSA9IHZhbDtcbiAgICBpZiAoc2F2ZVN0YXRlKSB7XG4gICAgICByZXR1cm4gUHViU3ViLnB1Ymxpc2goJ3N0YXRlLnNhdmUnKTtcbiAgICB9XG4gIH07XG5cbiAgR2xvYmFsVmFycy5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24oc3RyLCB0aHJvd0Vycm9ycykge1xuICAgIGlmICh0aHJvd0Vycm9ycyA9PSBudWxsKSB7XG4gICAgICB0aHJvd0Vycm9ycyA9IHRydWU7XG4gICAgfVxuICAgIGlmICh0aGlzLnZhcnNbc3RyXSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy52YXJzW3N0cl07XG4gICAgfVxuICAgIGlmICh0aHJvd0Vycm9ycykge1xuICAgICAgYXJpc3RvdGxlW1widGhyb3dcIl0oXCJUcmllZCB0byBhY2Nlc3MgZ2xvYmFsIHZhcmlhYmxlIGBcIiArIHN0ciArIFwiYCwgYnV0IGl0IGRvZXNuJ3QgZXhpc3RzXCIsIHRydWUpO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICByZXR1cm4gR2xvYmFsVmFycztcblxufSkoKTtcbiIsInZhciBMTVNQcm94eTtcblxubW9kdWxlLmV4cG9ydHMgPSBMTVNQcm94eSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gTE1TUHJveHkoaXNMb2NhbCkge1xuICAgIGlmIChpc0xvY2FsKSB7XG4gICAgICB0aGlzLmluaXRTY29ybVN0dWJzKCk7XG4gICAgfVxuICAgIGFyaXN0b3RsZS5sbXNQcm94eSA9IHRoaXM7XG4gICAgUHViU3ViLnN1YnNjcmliZSgnc3RhdGUuc2F2ZScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnNhdmVTdGF0ZSgpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgUHViU3ViLnN1YnNjcmliZSgnc3RhdGUubG9hZCcsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmxvYWRTdGF0ZSgpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgUHViU3ViLnN1YnNjcmliZSgnc3RhdGUucmVoeWRyYXRlJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMucmVoeWRyYXRlKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCdzbGlkZS5hY3RpdmF0ZWQnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5zYXZlU3RhdGUoZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgfVxuXG4gIExNU1Byb3h5LnByb3RvdHlwZS5iZWdpbiA9IGZ1bmN0aW9uKGNiKSB7XG4gICAgdmFyIGNvbXBhbnlOYW1lLCBzdGF0ZURhdGE7XG4gICAgaWYgKGVsYlNjb3JtLmluaXRDb3Vyc2UoKSkge1xuICAgICAgdGhpcy5sb2FkU3RhdGUoKTtcbiAgICAgIHRoaXMudXNlciA9IGVsYlNjb3JtLkdldFVzZXJOYW1lKCk7XG4gICAgICB0aGlzLnVzZXJJZCA9IGVsYlNjb3JtLkdldFVzZXJJRCgpO1xuICAgICAgc3RhdGVEYXRhID0gZWxiU2Nvcm0uR2V0UmVzdW1lRGF0YSgpO1xuICAgICAgY29tcGFueU5hbWUgPSBlbGJTY29ybS5HZXRDb21wYW5OYW1lKCk7XG4gICAgICB0aGlzLmNyZWF0ZUZvcm1hdHRlZE5hbWUoKTtcbiAgICAgIGlmIChzdGF0ZURhdGEgIT0gbnVsbCkge1xuICAgICAgICBhcmlzdG90bGUuZ2xvYmFscy52YXJzID0gc3RhdGVEYXRhLmdsb2JhbFZhcnM7XG4gICAgICB9XG4gICAgICBhcmlzdG90bGUuZ2xvYmFscy52YXJzLmNvbXBhbnlOYW1lID0gY29tcGFueU5hbWU7XG4gICAgICByZXR1cm4gY2IoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFwiY291bGRuJ3Qgc3RhcnQgdGhlIGNvdXJzZVwiKTtcbiAgICB9XG4gIH07XG5cbiAgTE1TUHJveHkucHJvdG90eXBlLmxvYWRTdGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnN0b3JlID0gZWxiU2Nvcm0uR2V0UmVzdW1lRGF0YSgpO1xuICB9O1xuXG4gIExNU1Byb3h5LnByb3RvdHlwZS5yZWh5ZHJhdGUgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5zdG9yZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiBhcmlzdG90bGUuZXBpc29kZS5nb3RvTG9jYXRpb25CeVRpdGxlKHRoaXMuc3RvcmUubG9jYXRpb24uc2xpZGUpO1xuICB9O1xuXG4gIExNU1Byb3h5LnByb3RvdHlwZS5zYXZlU3RhdGUgPSBmdW5jdGlvbihjdXJyZW50U2xpZGUpIHtcbiAgICB0aGlzLnN0b3JlID0ge307XG4gICAgdGhpcy5zdG9yZS5nbG9iYWxWYXJzID0gYXJpc3RvdGxlLmdsb2JhbHMudmFycztcbiAgICB0aGlzLnN0b3JlLmxheWVyU3RhdGUgPSBhcmlzdG90bGUubW92aWUuZGVoeWRyYXRlTGF5ZXJTdGF0ZSgpO1xuICAgIHRoaXMuc3RvcmUubG9jYXRpb24gPSB7XG4gICAgICBlcGlzb2RlTnVtOiBhcmlzdG90bGUuZXBpc29kZS5lcGlzb2RlTnVtLFxuICAgICAgc2xpZGU6IGN1cnJlbnRTbGlkZVxuICAgIH07XG4gICAgcmV0dXJuIGVsYlNjb3JtLlNldFJlc3VtZURhdGEodGhpcy5zdG9yZSk7XG4gIH07XG5cbiAgTE1TUHJveHkucHJvdG90eXBlLmNvbXBsZXRlRXBpc29kZSA9IGZ1bmN0aW9uKG5ld0VwaXNvZGVOdW0pIHtcbiAgICB0aGlzLnN0b3JlID0gdGhpcy5zdG9yZSAhPSBudWxsID8gdGhpcy5zdG9yZSA6IHt9O1xuICAgIHRoaXMuc3RvcmUubG9jYXRpb24gPSB7XG4gICAgICBlcGlzb2RlTnVtOiBuZXdFcGlzb2RlTnVtXG4gICAgfTtcbiAgICByZXR1cm4gZWxiU2Nvcm0uU2V0UmVzdW1lRGF0YSh0aGlzLnN0b3JlKTtcbiAgfTtcblxuICBMTVNQcm94eS5wcm90b3R5cGUuY3JlYXRlRm9ybWF0dGVkTmFtZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciB4O1xuICAgIHggPSB0aGlzLnVzZXIuc3BsaXQoJywnKTtcbiAgICByZXR1cm4gdGhpcy5uYW1lID0geFsxXSArIFwiIFwiICsgeFswXTtcbiAgfTtcblxuICBMTVNQcm94eS5wcm90b3R5cGUuY29tcGxldGVDb3Vyc2UgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZWxiU2Nvcm0uU2V0Q29tcGxldGUoKTtcbiAgfTtcblxuICBMTVNQcm94eS5wcm90b3R5cGUuaW5pdFNjb3JtU3R1YnMgPSBmdW5jdGlvbigpIHtcbiAgICB3aW5kb3cuZWxiU2Nvcm0gPSB7fTtcbiAgICBlbGJTY29ybS5pbml0Q291cnNlID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIGVsYlNjb3JtLkdldFVzZXJOYW1lID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gXCJSaWNrcywgSnVzdGluXCI7XG4gICAgfTtcbiAgICBlbGJTY29ybS5HZXRVc2VySUQgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBcImFiY2RlZmcxMjM0NTY3XCI7XG4gICAgfTtcbiAgICBlbGJTY29ybS5HZXRDb21wYW5OYW1lID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gXCJBcml6b25hIFB1YmxpYyBXb3Jrc1wiO1xuICAgIH07XG4gICAgZWxiU2Nvcm0uU2V0UmVzdW1lRGF0YSA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImN1cnJlbnRTdGF0ZVwiLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgfTtcbiAgICBlbGJTY29ybS5HZXRSZXN1bWVEYXRhID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImN1cnJlbnRTdGF0ZVwiKSk7XG4gICAgfTtcbiAgICByZXR1cm4gZWxiU2Nvcm0uU2V0Q29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcImNvdXJzZSBpcyBjb21wbGV0ZVwiKTtcbiAgICB9O1xuICB9O1xuXG4gIHJldHVybiBMTVNQcm94eTtcblxufSkoKTtcbiIsInZhciBMb2dnZXIsXG4gIGJpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExvZ2dlciA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gTG9nZ2VyKCRlbCwgaXNEZXZNb2RlKSB7XG4gICAgdGhpc1tcInRocm93XCJdID0gYmluZCh0aGlzW1widGhyb3dcIl0sIHRoaXMpO1xuICAgIHRoaXMubG9nID0gYmluZCh0aGlzLmxvZywgdGhpcyk7XG4gICAgdmFyICRub2RlO1xuICAgICRub2RlID0gJChqYWRlVGVtcGxhdGVbJ21pc2MvbG9nZ2VyJ10oe30pKTtcbiAgICAkZWwuYXBwZW5kKCRub2RlKTtcbiAgICB0aGlzLiRsb2dOb3RpZnllciA9ICQoJy5tZXNzYWdlJywgJG5vZGUpO1xuICAgIHRoaXMuJGVycm9yTm90aWZ5ZXIgPSAkKCcuZXJyb3InLCAkbm9kZSk7XG4gICAgdGhpcy4kbG9nTm90aWZ5ZXIub24oJ2NsaWNrJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5oaWRlTG9nTm90aWZpZXIoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRoaXMuJGVycm9yTm90aWZ5ZXIub24oJ2NsaWNrJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5oaWRlRXJyb3JOb3RpZmllcigpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgYXJpc3RvdGxlLmxvZyA9IHRoaXMubG9nO1xuICAgIGFyaXN0b3RsZVtcInRocm93XCJdID0gdGhpc1tcInRocm93XCJdO1xuICAgIHRoaXMuaGlkZUxvZ05vdGlmaWVyKCk7XG4gICAgdGhpcy5oaWRlRXJyb3JOb3RpZmllcigpO1xuICAgIGlmICghaXNEZXZNb2RlKSB7XG4gICAgICAkbm9kZS5jc3Moe1xuICAgICAgICBkaXNwbGF5OiBcIm5vbmVcIlxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgTG9nZ2VyLnByb3RvdHlwZS5sb2cgPSBmdW5jdGlvbihtc2cpIHtcbiAgICB0aGlzLnNob3dMb2dOb3RpZmllcigpO1xuICAgIHJldHVybiBjb25zb2xlLmxvZyhcIiVjXCIgKyBtc2csIFwiY29sb3I6IzBiMTUyNDsgYmFja2dyb3VuZDojYjBkOWU2XCIpO1xuICB9O1xuXG4gIExvZ2dlci5wcm90b3R5cGVbXCJ0aHJvd1wiXSA9IGZ1bmN0aW9uKG1zZywgc2hvd1RyYWNlKSB7XG4gICAgaWYgKHNob3dUcmFjZSA9PSBudWxsKSB7XG4gICAgICBzaG93VHJhY2UgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5zaG93RXJyb3JOb3RpZmllcigpO1xuICAgIGlmIChzaG93VHJhY2UpIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmVycm9yKFwiXCIgKyBtc2cpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coXCIlY1wiICsgbXNnLCBcImNvbG9yOiMzZDAwMDA7IGJhY2tncm91bmQ6I2U2YjBjMFwiKTtcbiAgICB9XG4gIH07XG5cbiAgTG9nZ2VyLnByb3RvdHlwZS5oaWRlTG9nTm90aWZpZXIgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kbG9nTm90aWZ5ZXIuY3NzKHtcbiAgICAgIGRpc3BsYXk6IFwibm9uZVwiXG4gICAgfSk7XG4gIH07XG5cbiAgTG9nZ2VyLnByb3RvdHlwZS5oaWRlRXJyb3JOb3RpZmllciA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRlcnJvck5vdGlmeWVyLmNzcyh7XG4gICAgICBkaXNwbGF5OiBcIm5vbmVcIlxuICAgIH0pO1xuICB9O1xuXG4gIExvZ2dlci5wcm90b3R5cGUuc2hvd0xvZ05vdGlmaWVyID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJGxvZ05vdGlmeWVyLmNzcyh7XG4gICAgICBkaXNwbGF5OiBcImJsb2NrXCJcbiAgICB9KTtcbiAgfTtcblxuICBMb2dnZXIucHJvdG90eXBlLnNob3dFcnJvck5vdGlmaWVyID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJGVycm9yTm90aWZ5ZXIuY3NzKHtcbiAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIlxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBMb2dnZXI7XG5cbn0pKCk7XG4iLCJ2YXIgUGFyc2VyLFxuICBiaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBQYXJzZXIgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIFBhcnNlcigpIHtcbiAgICB0aGlzLmdldEFzc2V0UGF0aCA9IGJpbmQodGhpcy5nZXRBc3NldFBhdGgsIHRoaXMpO1xuICAgIHRoaXMucGFyc2VPYmplY3QgPSBiaW5kKHRoaXMucGFyc2VPYmplY3QsIHRoaXMpO1xuICAgIHRoaXMuaXNWYXJpYWJsZSA9IGJpbmQodGhpcy5pc1ZhcmlhYmxlLCB0aGlzKTtcbiAgICB0aGlzLnBhcnNlU3RyaW5nID0gYmluZCh0aGlzLnBhcnNlU3RyaW5nLCB0aGlzKTtcbiAgICB0aGlzLnBhcnNlQW55ID0gYmluZCh0aGlzLnBhcnNlQW55LCB0aGlzKTtcbiAgICB3aW5kb3cucGFyc2UgPSB0aGlzLnBhcnNlQW55O1xuICAgIHdpbmRvdy5wT2JqID0gdGhpcy5wYXJzZU9iamVjdDtcbiAgICBhcmlzdG90bGUuZ2V0QXNzZXRQYXRoID0gdGhpcy5nZXRBc3NldFBhdGg7XG4gIH1cblxuICBQYXJzZXIucHJvdG90eXBlLnBhcnNlQW55ID0gZnVuY3Rpb24oaXRlbSkge1xuICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgcmV0dXJuIHRoaXMucGFyc2VTdHJpbmcoaXRlbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnBhcnNlT2JqZWN0KGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICBQYXJzZXIucHJvdG90eXBlLnBhcnNlU3RyaW5nID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgaWYgKHRoaXMuaXNWYXJpYWJsZShzdHIpKSB7XG4gICAgICByZXR1cm4gYXJpc3RvdGxlLmdsb2JhbHMuZ2V0KHN0ci5zdWJzdHIoMSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgfTtcblxuICBQYXJzZXIucHJvdG90eXBlLmlzVmFyaWFibGUgPSBmdW5jdGlvbihzdHIpIHtcbiAgICByZXR1cm4gc3RyLmNoYXJBdCgwKSA9PT0gXCIkXCI7XG4gIH07XG5cbiAgUGFyc2VyLnByb3RvdHlwZS5wYXJzZU9iamVjdCA9IGZ1bmN0aW9uKG9iaikge1xuICAgIHZhciBpdGVtLCBrZXksIHJlc3VsdHM7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoa2V5IGluIG9iaikge1xuICAgICAgaXRlbSA9IG9ialtrZXldO1xuICAgICAgaWYgKHR5cGVvZiBpdGVtID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIG9ialtrZXldID0gdGhpcy5wYXJzZVN0cmluZyhpdGVtKTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICByZXN1bHRzLnB1c2godGhpcy5wYXJzZU9iamVjdChpdGVtKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRzLnB1c2godm9pZCAwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgUGFyc2VyLnByb3RvdHlwZS5nZXRBc3NldFBhdGggPSBmdW5jdGlvbihhc3NldCkge1xuICAgIHZhciBjb250ZW50RGlyLCBwYXRoSWQ7XG4gICAgaWYgKGFzc2V0ID09PSBcIm1hcC5qc29uXCIpIHtcbiAgICAgIGNvbnRlbnREaXIgPSBcIlwiO1xuICAgIH0gZWxzZSBpZiAoLy5tcDN8Lm00YS8udGVzdChhc3NldCkpIHtcbiAgICAgIGNvbnRlbnREaXIgPSBcInNvdW5kcy9cIjtcbiAgICB9IGVsc2UgaWYgKC8uanNvbi8udGVzdChhc3NldCkpIHtcbiAgICAgIGNvbnRlbnREaXIgPSBcImFuaW1hdGlvbnMvXCI7XG4gICAgfSBlbHNlIGlmICgvLnN2Z3wuanBnfC5qcGVnfC5wbmd8Lm1wNC8udGVzdChhc3NldCkpIHtcbiAgICAgIGNvbnRlbnREaXIgPSBcImFzc2V0cy9cIjtcbiAgICB9XG4gICAgaWYgKGFzc2V0LmNoYXJBdCgwKSA9PT0gXCJ+XCIpIHtcbiAgICAgIHBhdGhJZCA9IGFzc2V0LnN1YnN0cigxLCAxKTtcbiAgICAgIGFzc2V0ID0gYXNzZXQuc3Vic3RyKDMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXRoSWQgPSBhcmlzdG90bGUuZXBpc29kZU51bTtcbiAgICB9XG4gICAgaWYgKHBhdGhJZCA9PT0gXCJnXCIpIHtcbiAgICAgIHJldHVybiBhcmlzdG90bGUuZXBpc29kZXNEaXIgKyBcIi9nbG9iYWwvXCIgKyBjb250ZW50RGlyICsgYXNzZXQ7XG4gICAgfSBlbHNlIGlmIChwYXRoSWQgPT09IFwibFwiKSB7XG4gICAgICByZXR1cm4gYXJpc3RvdGxlLmxvY2FsRGlyICsgXCIvXCIgKyBhc3NldDtcbiAgICB9IGVsc2UgaWYgKE51bWJlcihwYXRoSWQpICE9PSBOYU4pIHtcbiAgICAgIHJldHVybiBhcmlzdG90bGUuZXBpc29kZXNEaXIgKyBcIi9lcGlzb2RlXCIgKyBwYXRoSWQgKyBcIi9cIiArIGNvbnRlbnREaXIgKyBhc3NldDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGFyaXN0b3RsZVtcInRocm93XCJdKFwiY291bGRuJ3QgdW5kZXJzdGFuZCB0aGUgcGF0aDogXCIgKyBhc3NldCwgdHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBQYXJzZXI7XG5cbn0pKCk7XG4iLCJ2YXIgUGF1c2FibGVEZWxheXMsIFRpbWVyLFxuICBiaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBQYXVzYWJsZURlbGF5cyA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gUGF1c2FibGVEZWxheXMoKSB7XG4gICAgdGhpcy5jcmVhdGVUaW1lb3V0ID0gYmluZCh0aGlzLmNyZWF0ZVRpbWVvdXQsIHRoaXMpO1xuICAgIHRoaXMuY291bnQgPSAwO1xuICAgIHRoaXMudGltZXJzID0ge307XG4gICAgYXJpc3RvdGxlLnRpbWVvdXQgPSB0aGlzLmNyZWF0ZVRpbWVvdXQ7XG4gICAgUHViU3ViLnN1YnNjcmliZSgndGltZXIuZGVzdHJveScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIGRlbGV0ZSBfdGhpcy50aW1lcnNbZGF0YV07XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCd0aW1lcnMucGF1c2UnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5wYXVzZVRpbWVycygpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgUHViU3ViLnN1YnNjcmliZSgndGltZXJzLnJlc3VtZScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnJlc3VtZVRpbWVycygpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH1cblxuICBQYXVzYWJsZURlbGF5cy5wcm90b3R5cGUucGF1c2VUaW1lcnMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIga2V5LCByZWYsIHJlc3VsdHMsIHRpbWVyO1xuICAgIHJlZiA9IHRoaXMudGltZXJzO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGtleSBpbiByZWYpIHtcbiAgICAgIHRpbWVyID0gcmVmW2tleV07XG4gICAgICByZXN1bHRzLnB1c2godGltZXIucGF1c2UoKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIFBhdXNhYmxlRGVsYXlzLnByb3RvdHlwZS5yZXN1bWVUaW1lcnMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIga2V5LCByZWYsIHJlc3VsdHMsIHRpbWVyO1xuICAgIHJlZiA9IHRoaXMudGltZXJzO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGtleSBpbiByZWYpIHtcbiAgICAgIHRpbWVyID0gcmVmW2tleV07XG4gICAgICByZXN1bHRzLnB1c2godGltZXIuc3RhcnQoKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIFBhdXNhYmxlRGVsYXlzLnByb3RvdHlwZS5jcmVhdGVUaW1lb3V0ID0gZnVuY3Rpb24oY2IsIGRlbGF5KSB7XG4gICAgdmFyIGlkO1xuICAgIGlkID0gXCJ0aW1lXCIgKyAodGhpcy5jb3VudCsrKTtcbiAgICB0aGlzLnRpbWVyc1tpZF0gPSBuZXcgVGltZXIoY2IsIGRlbGF5LCBpZCk7XG4gICAgcmV0dXJuIHRoaXMudGltZXJzW2lkXS5zdGFydCgpO1xuICB9O1xuXG4gIHJldHVybiBQYXVzYWJsZURlbGF5cztcblxufSkoKTtcblxuVGltZXIgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIFRpbWVyKGNiMSwgZGVsYXksIGlkMSkge1xuICAgIHRoaXMuY2IgPSBjYjE7XG4gICAgdGhpcy5pZCA9IGlkMTtcbiAgICB0aGlzLnJlbWFpbmluZyA9IGRlbGF5O1xuICB9XG5cbiAgVGltZXIucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcbiAgICB0aGlzLnN0YXJ0ZWQgPSBuZXcgRGF0ZTtcbiAgICByZXR1cm4gdGhpcy5yZWYgPSBzZXRUaW1lb3V0KChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBfdGhpcy5jYigpO1xuICAgICAgICByZXR1cm4gUHViU3ViLnB1Ymxpc2goJ3RpbWVyLmRlc3Ryb3knLCBfdGhpcy5pZCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpLCB0aGlzLnJlbWFpbmluZyk7XG4gIH07XG5cbiAgVGltZXIucHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMucmVmKTtcbiAgICByZXR1cm4gdGhpcy5yZW1haW5pbmcgLT0gbmV3IERhdGUgLSB0aGlzLnN0YXJ0ZWQ7XG4gIH07XG5cbiAgVGltZXIucHJvdG90eXBlLmdldFRpbWVMZWZ0ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMucnVubmluZykge1xuICAgICAgdGhpcy5wYXVzZSgpO1xuICAgICAgdGhpcy5zdGFydCgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5yZW1haW5pbmc7XG4gIH07XG5cbiAgVGltZXIucHJvdG90eXBlLmdldFN0YXRlUnVubmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bm5pbmc7XG4gIH07XG5cbiAgcmV0dXJuIFRpbWVyO1xuXG59KSgpO1xuIiwidmFyIEF1ZGlvVHJhY2ssIFNvdW5kRlg7XG5cbkF1ZGlvVHJhY2sgPSByZXF1aXJlKCdlcGlzb2RlL2F1ZGlvLXRyYWNrJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gU291bmRGWCA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gU291bmRGWCgpIHtcbiAgICB0aGlzLmNvdW50ID0gMDtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCd2Y3IucGxheScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnZjclBsYXkoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ3Zjci5wYXVzZScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnZjclBhdXNlKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCd2Y3IucmVwbGF5JywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMudmNyUmVwbGF5KCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCdzbGlkZXMuY2hhbmdpbmcnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5mbHVzaFNmeFN0b3JlKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCdzZnguYWRkJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMucGFyc2VTRlgoZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCdwbGF5c291bmQnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5wbGF5U291bmQoZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgfVxuXG4gIFNvdW5kRlgucHJvdG90eXBlLnZjclBhdXNlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGtleSwgcmVmLCByZXN1bHRzLCBzZng7XG4gICAgcmVmID0gdGhpcy5zZng7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoa2V5IGluIHJlZikge1xuICAgICAgc2Z4ID0gcmVmW2tleV07XG4gICAgICByZXN1bHRzLnB1c2goc2Z4LnRyYWNrLnNvdW5kLnBhdXNlZCA9IHRydWUpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBTb3VuZEZYLnByb3RvdHlwZS52Y3JQbGF5ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGtleSwgcmVmLCByZXN1bHRzLCBzZng7XG4gICAgcmVmID0gdGhpcy5zZng7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoa2V5IGluIHJlZikge1xuICAgICAgc2Z4ID0gcmVmW2tleV07XG4gICAgICByZXN1bHRzLnB1c2goc2Z4LnRyYWNrLnNvdW5kLnBhdXNlZCA9IGZhbHNlKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgU291bmRGWC5wcm90b3R5cGUudmNyUmVwbGF5ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyLCBrZXksIHJlZiwgc2Z4O1xuICAgIGFyID0gW107XG4gICAgcmVmID0gdGhpcy5zZng7XG4gICAgZm9yIChrZXkgaW4gcmVmKSB7XG4gICAgICBzZnggPSByZWZba2V5XTtcbiAgICAgIGFyLnB1c2goc2Z4LmRhdGEpO1xuICAgIH1cbiAgICB0aGlzLmZsdXNoU2Z4U3RvcmUoKTtcbiAgICByZXR1cm4gdGhpcy5wYXJzZVNGWChhcik7XG4gIH07XG5cbiAgU291bmRGWC5wcm90b3R5cGUuZmx1c2hTZnhTdG9yZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBrZXksIHJlZiwgc2Z4O1xuICAgIHJlZiA9IHRoaXMuc2Z4O1xuICAgIGZvciAoa2V5IGluIHJlZikge1xuICAgICAgc2Z4ID0gcmVmW2tleV07XG4gICAgICBpZiAoIXNmeC50cmFjay5pc0RlYWQpIHtcbiAgICAgICAgc2Z4LnRyYWNrLmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc2Z4ID0ge307XG4gIH07XG5cbiAgU291bmRGWC5wcm90b3R5cGUucGFyc2VTRlggPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyIGZ4LCBpLCBsZW4sIHJlc3VsdHM7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgIGZvciAoaSA9IDAsIGxlbiA9IGRhdGEubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgZnggPSBkYXRhW2ldO1xuICAgICAgICByZXN1bHRzLnB1c2godGhpcy5hZGRTb3VuZEVmZmVjdChmeCkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZFNvdW5kRWZmZWN0KGRhdGEpO1xuICAgIH1cbiAgfTtcblxuICBTb3VuZEZYLnByb3RvdHlwZS5hZGRTb3VuZEVmZmVjdCA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBpZiAoZGF0YS5kZWxheSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gYXJpc3RvdGxlLnRpbWVvdXQoKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMucGxheVNvdW5kKGRhdGEsIHRydWUpO1xuICAgICAgICB9O1xuICAgICAgfSkodGhpcyksIGRhdGEuZGVsYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5wbGF5U291bmQoZGF0YSk7XG4gICAgfVxuICB9O1xuXG4gIFNvdW5kRlgucHJvdG90eXBlLnBsYXlTb3VuZCA9IGZ1bmN0aW9uKGRhdGEsIHNhdmVUb1NmeFN0b3JlKSB7XG4gICAgdmFyIGlkLCB0cmFjaztcbiAgICB0cmFjayA9IG5ldyBBdWRpb1RyYWNrKGRhdGEuY29udGVudCk7XG4gICAgdHJhY2sucGxheSh7XG4gICAgICB2b2x1bWU6IGRhdGEudm9sdW1lLFxuICAgICAgbG9vcDogZGF0YS5sb29wLFxuICAgICAgb2Zmc2V0OiBkYXRhLm9mZnNldFxuICAgIH0sIGZ1bmN0aW9uKCkge1xuICAgICAgdHJhY2suZGVzdHJveSgpO1xuICAgICAgaWYgKGRhdGEuY29tcGxldGUgIT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gYXJpc3RvdGxlLmNvbW1hbmRlcltcImRvXCJdKGRhdGEuY29tcGxldGUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChzYXZlVG9TZnhTdG9yZSkge1xuICAgICAgaWQgPSBcInNcIiArICh0aGlzLmNvdW50KyspO1xuICAgICAgdGhpcy5zZnhbaWRdID0ge1xuICAgICAgICB0cmFjazogdHJhY2ssXG4gICAgICAgIGRhdGE6IGRhdGFcbiAgICAgIH07XG4gICAgICByZXR1cm4gdHJhY2suc2Z4SWQgPSBpZDtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFNvdW5kRlg7XG5cbn0pKCk7XG4iLCJ2YXIgRHluYW1pY0Fzc2V0cztcblxubW9kdWxlLmV4cG9ydHMgPSBEeW5hbWljQXNzZXRzID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBEeW5hbWljQXNzZXRzKCRlbCkge1xuICAgIHRoaXMuJGVsID0gJGVsO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoXCJnaG9zdHV4LmFkZFwiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5jcmVhdGVHaG9zdChkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoXCJnaG9zdHV4LnJlbW92ZVwiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5kZXN0cm95R2hvc3QoZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCdsYWJlbC5hZGQnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5hZGRMYWJlbChkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ2xhYmVsLnJlbW92ZScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnJlbW92ZUxhYmVsKGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgUHViU3ViLnN1YnNjcmliZSgnbGFiZWwuY2xlYXInLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5yZW1vdmVMYWJlbChkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ2xhYmVsLmhpZGUnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5oaWRlTGFiZWwoZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCdsYWJlbC5zaG93JywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuc2hvd0xhYmVsKGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH1cblxuICBEeW5hbWljQXNzZXRzLnByb3RvdHlwZS5jcmVhdGVHaG9zdCA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2YXIgJGdob3N0SXRlbSwgJHRhcmdldCwgYWN0aW9uLCBldmVudCwgcG9zLCByZWYsIHJlc3VsdHMsIHRhbCwgd2lkO1xuICAgICR0YXJnZXQgPSAkKFwiI1wiICsgZGF0YS5pZCk7XG4gICAgcG9zID0gJHRhcmdldC5wb3NpdGlvbigpO1xuICAgIHdpZCA9ICR0YXJnZXRbMF0uZ2V0QkJveCgpLndpZHRoO1xuICAgIHRhbCA9ICR0YXJnZXRbMF0uZ2V0QkJveCgpLmhlaWdodDtcbiAgICBpZiAod2lkID4gNTAwIHx8IHRhbCA+IDQwMCkge1xuICAgICAgYXJpc3RvdGxlLmxvZyhcIldlJ3ZlIGNyZWF0ZWQgYSBoaXQgYXJlYSBmb3IgYFwiICsgZGF0YS5pZCArIFwiYCB0aGF0IGlzIFwiICsgd2lkICsgXCJweCBieSBcIiArIHRhbCArIFwicHgsIEknbSBndWVzc2luZyB0aGF0J3Mgbm90IHJpZ2h0Li5cIik7XG4gICAgfVxuICAgICRnaG9zdEl0ZW0gPSAkKGphZGVUZW1wbGF0ZVsnc2xpZGUtdXgvY29tcG9uZW50cy9naG9zdC1pdGVtJ10oe1xuICAgICAgaWQ6IGRhdGEuaWQgKyBcIi1naG9zdFwiLFxuICAgICAgd2lkdGg6IHdpZCxcbiAgICAgIGhlaWdodDogdGFsLFxuICAgICAgbGVmdDogcG9zLmxlZnQsXG4gICAgICB0b3A6IHBvcy50b3BcbiAgICB9KSk7XG4gICAgdGhpcy4kZWwuYXBwZW5kKCRnaG9zdEl0ZW0pO1xuICAgIHJlZiA9IGRhdGEuZXZlbnRzO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGV2ZW50IGluIHJlZikge1xuICAgICAgYWN0aW9uID0gcmVmW2V2ZW50XTtcbiAgICAgIGlmIChhY3Rpb24uY21kICE9IG51bGwpIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKCRnaG9zdEl0ZW0ub24oZXZlbnQsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBhcmlzdG90bGUuY29tbWFuZGVyW1wiZG9cIl0oYWN0aW9uKTtcbiAgICAgICAgfSkpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYWN0aW9uID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKCRnaG9zdEl0ZW0ub24oZXZlbnQsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBhY3Rpb24oZGF0YS5pZCk7XG4gICAgICAgIH0pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdHMucHVzaCh2b2lkIDApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBEeW5hbWljQXNzZXRzLnByb3RvdHlwZS5kZXN0cm95R2hvc3QgPSBmdW5jdGlvbihnaG9zdElkKSB7XG4gICAgcmV0dXJuICQoZ2hvc3RJZCArIFwiLWdob3N0XCIpLnJlbW92ZSgpO1xuICB9O1xuXG4gIER5bmFtaWNBc3NldHMucHJvdG90eXBlLmFkZExhYmVsID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciAkbGFiZWwsIHBvcztcbiAgICBwb3MgPSBhcmlzdG90bGUubW92aWUuZ2V0TG9jYWxQb3MoZGF0YS5pZCk7XG4gICAgJGxhYmVsID0gJChqYWRlVGVtcGxhdGVbJ3NsaWRlLXV4L2xhYmVsJ10oe1xuICAgICAgdGl0bGU6IGRhdGEudGV4dCxcbiAgICAgIGlkOiBkYXRhLmlkICsgXCItbGFiZWxcIlxuICAgIH0pKTtcbiAgICB0aGlzLiRlbC5hcHBlbmQoJGxhYmVsKTtcbiAgICB0aGlzLnBvc2l0aW9uTGFiZWwoZGF0YSwgJGxhYmVsLCBwb3MpO1xuICAgIHJldHVybiAkbGFiZWwuY3NzKHtcbiAgICAgIHRvcDogcG9zLnksXG4gICAgICBsZWZ0OiBwb3MueFxuICAgIH0pO1xuICB9O1xuXG4gIER5bmFtaWNBc3NldHMucHJvdG90eXBlLnJlbW92ZUxhYmVsID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciBpLCBsYWJlbElkLCBsZW4sIHJlZiwgcmVzdWx0cztcbiAgICBpZiAoZGF0YS5pZCA9PT0gXCJhbGxcIikge1xuICAgICAgcmV0dXJuICQoXCIubGFiZWwtd3JhcHBlclwiLCB0aGlzLiRlbCkucmVtb3ZlKCk7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGRhdGEuaWQpKSB7XG4gICAgICByZWYgPSBkYXRhLmlkO1xuICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGxhYmVsSWQgPSByZWZbaV07XG4gICAgICAgIHJlc3VsdHMucHVzaCgkKFwiI1wiICsgbGFiZWxJZCArIFwiLWxhYmVsXCIsIHRoaXMuJGVsKS5yZW1vdmUoKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICQoXCIjXCIgKyBkYXRhLmlkICsgXCItbGFiZWxcIiwgdGhpcy4kZWwpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICBEeW5hbWljQXNzZXRzLnByb3RvdHlwZS5oaWRlTGFiZWwgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyIGksIGxhYmVsSWQsIGxlbiwgcmVmLCByZXN1bHRzO1xuICAgIGlmIChkYXRhLmlkID09PSBcImFsbFwiKSB7XG4gICAgICByZXR1cm4gJChcIi5sYWJlbC13cmFwcGVyXCIsIHRoaXMuJGVsKS52ZWxvY2l0eSh7XG4gICAgICAgIG9wYWNpdHk6IDBcbiAgICAgIH0sIHtcbiAgICAgICAgZHVyYXRpb246IDQwMFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGRhdGEuaWQpKSB7XG4gICAgICByZWYgPSBkYXRhLmlkO1xuICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGxhYmVsSWQgPSByZWZbaV07XG4gICAgICAgIHJlc3VsdHMucHVzaCgkKFwiI1wiICsgbGFiZWxJZCArIFwiLWxhYmVsXCIsIHRoaXMuJGVsKS52ZWxvY2l0eSh7XG4gICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICB9LCB7XG4gICAgICAgICAgZHVyYXRpb246IDQwMFxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICQoXCIjXCIgKyBkYXRhLmlkICsgXCItbGFiZWxcIiwgdGhpcy4kZWwpLnZlbG9jaXR5KHtcbiAgICAgICAgb3BhY2l0eTogMFxuICAgICAgfSwge1xuICAgICAgICBkdXJhdGlvbjogNDAwXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgRHluYW1pY0Fzc2V0cy5wcm90b3R5cGUuc2hvd0xhYmVsID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciBpLCBsYWJlbElkLCBsZW4sIHJlZiwgcmVzdWx0cztcbiAgICBpZiAoZGF0YS5pZCA9PT0gXCJhbGxcIikge1xuICAgICAgcmV0dXJuICQoXCIubGFiZWwtd3JhcHBlclwiLCB0aGlzLiRlbCkudmVsb2NpdHkoe1xuICAgICAgICBvcGFjaXR5OiAxXG4gICAgICB9LCB7XG4gICAgICAgIGR1cmF0aW9uOiA0MDBcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShkYXRhLmlkKSkge1xuICAgICAgcmVmID0gZGF0YS5pZDtcbiAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBsYWJlbElkID0gcmVmW2ldO1xuICAgICAgICByZXN1bHRzLnB1c2goJChcIiNcIiArIGxhYmVsSWQgKyBcIi1sYWJlbFwiLCB0aGlzLiRlbCkudmVsb2NpdHkoe1xuICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgfSwge1xuICAgICAgICAgIGR1cmF0aW9uOiA0MDBcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAkKFwiI1wiICsgZGF0YS5pZCArIFwiLWxhYmVsXCIsIHRoaXMuJGVsKS52ZWxvY2l0eSh7XG4gICAgICAgIG9wYWNpdHk6IDFcbiAgICAgIH0sIHtcbiAgICAgICAgZHVyYXRpb246IDQwMFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIER5bmFtaWNBc3NldHMucHJvdG90eXBlLmNsZWFyTGFiZWwgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyIGksIGxhYmVsSWQsIGxlbiwgcmVmLCByZXN1bHRzO1xuICAgIGlmIChkYXRhLmlkID09PSBcImFsbFwiKSB7XG4gICAgICByZXR1cm4gJChcIi5sYWJlbC13cmFwcGVyXCIsIHRoaXMuJGVsKS52ZWxvY2l0eSh7XG4gICAgICAgIG9wYWNpdHk6IDFcbiAgICAgIH0sIHtcbiAgICAgICAgZHVyYXRpb246IDQwMFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGRhdGEuaWQpKSB7XG4gICAgICByZWYgPSBkYXRhLmlkO1xuICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGxhYmVsSWQgPSByZWZbaV07XG4gICAgICAgIHJlc3VsdHMucHVzaCgkKFwiI1wiICsgbGFiZWxJZCArIFwiLWxhYmVsXCIsIHRoaXMuJGVsKS52ZWxvY2l0eSh7XG4gICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICB9LCB7XG4gICAgICAgICAgZHVyYXRpb246IDQwMFxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICQoXCIjXCIgKyBkYXRhLmlkICsgXCItbGFiZWxcIiwgdGhpcy4kZWwpLnZlbG9jaXR5KHtcbiAgICAgICAgb3BhY2l0eTogMVxuICAgICAgfSwge1xuICAgICAgICBkdXJhdGlvbjogNDAwXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgRHluYW1pY0Fzc2V0cy5wcm90b3R5cGUucG9zaXRpb25MYWJlbCA9IGZ1bmN0aW9uKGRhdGEsICRsYWJlbCwgcG9zKSB7XG4gICAgdmFyICRpbm5lckxhYmVsLCBhcnJvd0xvYywgZmFjZTtcbiAgICBmYWNlID0gZGF0YS5mYWNlICE9IG51bGwgPyBkYXRhLmZhY2UgOiBcInRvcFwiO1xuICAgIGFycm93TG9jID0gZGF0YS5hcnJvdyAhPSBudWxsID8gZGF0YS5hcnJvdyA6IFwibGVmdFwiO1xuICAgICRpbm5lckxhYmVsID0gJChcIi5sYWJlbFwiLCAkbGFiZWwpO1xuICAgIHN3aXRjaCAoZmFjZSkge1xuICAgICAgY2FzZSBcInRvcFwiOlxuICAgICAgICBwb3MueCArPSBwb3MudyAvIDI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImxlZnRcIjpcbiAgICAgICAgcG9zLnkgKz0gcG9zLmggLyAyO1xuICAgICAgICAkaW5uZXJMYWJlbC5hZGRDbGFzcyhcImFycm93LXBvaW50LXJpZ2h0XCIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICBwb3MueSArPSBwb3MuaCAvIDI7XG4gICAgICAgIHBvcy54ICs9IHBvcy53O1xuICAgICAgICAkaW5uZXJMYWJlbC5hZGRDbGFzcyhcImFycm93LXBvaW50LWxlZnRcIik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImJvdHRvbVwiOlxuICAgICAgICBwb3MueCArPSBwb3MudyAvIDI7XG4gICAgICAgIHBvcy55ICs9IHBvcy5oO1xuICAgICAgICAkaW5uZXJMYWJlbC5hZGRDbGFzcyhcImFycm93LXRvcFwiKTtcbiAgICB9XG4gICAgc3dpdGNoIChhcnJvd0xvYykge1xuICAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICAgIHJldHVybiAkaW5uZXJMYWJlbC5hZGRDbGFzcyhcImFycm93LXJpZ2h0XCIpO1xuICAgICAgY2FzZSBcIm1pZGRsZVwiOlxuICAgICAgICAkaW5uZXJMYWJlbC5hZGRDbGFzcyhcImFycm93LW1pZGRsZVwiKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJ3aWR0aFwiKTtcbiAgICAgICAgY29uc29sZS5sb2coJGlubmVyTGFiZWwud2lkdGgoKSk7XG4gICAgICAgIHdpbmRvdy50aGluZyA9ICRpbm5lckxhYmVsO1xuICAgICAgICByZXR1cm4gJGlubmVyTGFiZWwuY3NzKHtcbiAgICAgICAgICBsZWZ0OiAtJGlubmVyTGFiZWwud2lkdGgoKSAvIDJcbiAgICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBEeW5hbWljQXNzZXRzO1xuXG59KSgpO1xuIiwidmFyIEhpZ2hsaWdodGVyO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhpZ2hsaWdodGVyID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBIaWdobGlnaHRlcigkZWwsIGR5bmFtaWNBc3NldHMpIHtcbiAgICB0aGlzLiRlbCA9ICRlbDtcbiAgICB0aGlzLmR5bmFtaWNBc3NldHMgPSBkeW5hbWljQXNzZXRzO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ2hpZ2hsaWdodCcsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgdmFyIGksIGl0ZW0sIGxlbiwgcmVmLCByZXN1bHRzO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhLmlkKSkge1xuICAgICAgICAgIHJlZiA9IGRhdGEuaWQ7XG4gICAgICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaXRlbSA9IHJlZltpXTtcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaChfdGhpcy5oaWdobGlnaHRFbGVtZW50KGl0ZW0sIGRhdGEubGV2ZWwsIGRhdGEubGFiZWwpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLmhpZ2hsaWdodEVsZW1lbnQoZGF0YS5pZCwgZGF0YS5sZXZlbCwgZGF0YS5sYWJlbCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ3VuaGlnaGxpZ2h0JywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICB2YXIgaSwgaXRlbSwgbGVuLCByZXN1bHRzO1xuICAgICAgICBpZiAobSA9PT0gXCJ1bmhpZ2hsaWdodC5hbGxcIikge1xuICAgICAgICAgIHJldHVybiBfdGhpcy51bmhpZ2hsaWdodEFsbCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgICAgICByZXN1bHRzID0gW107XG4gICAgICAgICAgICBmb3IgKGkgPSAwLCBsZW4gPSBkYXRhLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgIGl0ZW0gPSBkYXRhW2ldO1xuICAgICAgICAgICAgICByZXN1bHRzLnB1c2goX3RoaXMudW5IaWdobGlnaHRFbGVtZW50KGl0ZW0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMudW5IaWdobGlnaHRFbGVtZW50KGRhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH1cblxuICBIaWdobGlnaHRlci5wcm90b3R5cGUuaGlnaGxpZ2h0RWxlbWVudCA9IGZ1bmN0aW9uKGVsZW1lbnRJZCwgY29sb3IsIGxhYmVsKSB7XG4gICAgdmFyICRpdGVtLCBmaWx0ZXJJZDtcbiAgICAkaXRlbSA9ICQoXCIjXCIgKyBlbGVtZW50SWQsIHRoaXMuJGVsKTtcbiAgICAkaXRlbS5hdHRyKFwiY2xhc3NcIiwgXCJmaWx0ZXItaGlnaGxpZ2h0ZWRcIik7XG4gICAgaWYgKCRpdGVtLmxlbmd0aCA9PT0gMCkge1xuICAgICAgYXJpc3RvdGxlW1widGhyb3dcIl0oXCJ0cmllZCB0byBoaWdobGlnaHQgYW4gZWxlbWVudCB3aXRoIHRoZSBpZCBgXCIgKyBlbGVtZW50SWQgKyBcImAsIGJ1dCBmb3VuZCBubyBlbGVtZW50cyB3aXRoIHRoYXQgaWQuXCIsIHRydWUpO1xuICAgIH1cbiAgICBzd2l0Y2ggKGNvbG9yKSB7XG4gICAgICBjYXNlICdibHVlJzpcbiAgICAgICAgZmlsdGVySWQgPSBcImhpZ2hsaWdodEJsdWVcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdvcmFuZ2UnOlxuICAgICAgICBmaWx0ZXJJZCA9IFwiaGlnaGxpZ2h0T3JhbmdlXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAneWVsbG93JzpcbiAgICAgICAgZmlsdGVySWQgPSBcImhpZ2hsaWdodFllbGxvd1wiO1xuICAgIH1cbiAgICByZXR1cm4gJGl0ZW0uY3NzKHtcbiAgICAgIGZpbHRlcjogXCJ1cmwoI1wiICsgZmlsdGVySWQgKyBcIilcIlxuICAgIH0pO1xuICB9O1xuXG4gIEhpZ2hsaWdodGVyLnByb3RvdHlwZS51bkhpZ2hsaWdodEVsZW1lbnQgPSBmdW5jdGlvbihlbGVtZW50SWQpIHtcbiAgICB2YXIgJGl0ZW07XG4gICAgJGl0ZW0gPSAkKFwiI1wiICsgZWxlbWVudElkLCB0aGlzLiRlbCk7XG4gICAgJGl0ZW0uYXR0cihcImNsYXNzXCIsIFwiXCIpO1xuICAgIGlmICgkaXRlbS5sZW5ndGggPT09IDApIHtcbiAgICAgIGFyaXN0b3RsZVtcInRocm93XCJdKFwidHJpZWQgdG8gdW5oaWdobGlnaHQgYW4gZWxlbWVudCB3aXRoIHRoZSBpZCBgXCIgKyBlbGVtZW50SWQgKyBcImAsIGJ1dCBmb3VuZCBubyBlbGVtZW50cyB3aXRoIHRoYXQgaWQuXCIsIHRydWUpO1xuICAgIH1cbiAgICByZXR1cm4gJGl0ZW0uY3NzKHtcbiAgICAgIGZpbHRlcjogXCJhdXRvXCJcbiAgICB9KTtcbiAgfTtcblxuICBIaWdobGlnaHRlci5wcm90b3R5cGUudW5oaWdobGlnaHRBbGwgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgJGl0ZW1zO1xuICAgICRpdGVtcyA9ICQoXCIuZmlsdGVyLWhpZ2hsaWdodGVkXCIpO1xuICAgICRpdGVtcy5hdHRyKFwiY2xhc3NcIiwgXCJcIik7XG4gICAgcmV0dXJuICRpdGVtcy5jc3Moe1xuICAgICAgZmlsdGVyOiBcImluaXRpYWxcIlxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBIaWdobGlnaHRlcjtcblxufSkoKTtcbiIsInZhciBMYXllciwgU1ZHQW5pbWF0aW9uLFxuICBiaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfTtcblxuU1ZHQW5pbWF0aW9uID0gcmVxdWlyZSgnbW92aWUvc3ZnLWFuaW1hdGlvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IExheWVyID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBMYXllcigkZWwsIGRlcHRoKSB7XG4gICAgdGhpcy5kZXB0aCA9IGRlcHRoO1xuICAgIHRoaXMuY3JlYXRlQ29udGVudCA9IGJpbmQodGhpcy5jcmVhdGVDb250ZW50LCB0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZSA9IGJpbmQodGhpcy51cGRhdGUsIHRoaXMpO1xuICAgIHRoaXMuaXNDYWNoZWQgPSBmYWxzZTtcbiAgICB0aGlzLiRsYXllciA9ICQoamFkZVRlbXBsYXRlWydtb3ZpZS9sYXllciddKHtcbiAgICAgIGRlcHRoOiB0aGlzLmRlcHRoXG4gICAgfSkpO1xuICAgICRlbC5hcHBlbmQodGhpcy4kbGF5ZXIpO1xuICB9XG5cbiAgTGF5ZXIucHJvdG90eXBlLnJlcG9ydCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjYWNoZWRPck5vdCwgbXNnLCBzeW1ib2w7XG4gICAgY2FjaGVkT3JOb3QgPSB0aGlzLmlzQ2FjaGVkID8gXCJjYWNoZWRcIiA6IFwibm90IGNhY2hlZFwiO1xuICAgIHN5bWJvbCA9IHRoaXMuaXNDYWNoZWQgPyBcIuKImlwiIDogXCItXCI7XG4gICAgbXNnID0gc3ltYm9sICsgXCIgTGF5ZXIgXCIgKyB0aGlzLmRlcHRoICsgXCIgOiBcIiArIHRoaXMucHJpc3RpbmVMYXllckRhdGEuY29udGVudCArIFwiIGlzIFwiICsgY2FjaGVkT3JOb3Q7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKG1zZyk7XG4gIH07XG5cbiAgTGF5ZXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKHByaXN0aW5lTGF5ZXJEYXRhKSB7XG4gICAgdGhpcy5wcmlzdGluZUxheWVyRGF0YSA9IHByaXN0aW5lTGF5ZXJEYXRhO1xuICAgIHRoaXMubGF5ZXJEYXRhID0galF1ZXJ5LmV4dGVuZCh0cnVlLCB7fSwgdGhpcy5wcmlzdGluZUxheWVyRGF0YSk7XG4gICAgaWYgKHRoaXMubGF5ZXJEYXRhLndhaXQgIT0gbnVsbCkge1xuICAgICAgYXJpc3RvdGxlLnRpbWVvdXQodGhpcy5jcmVhdGVDb250ZW50LCB0aGlzLmxheWVyRGF0YS53YWl0KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlQ29udGVudCgpO1xuICB9O1xuXG4gIExheWVyLnByb3RvdHlwZS5jcmVhdGVDb250ZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCh0aGlzLmxheWVyRGF0YS5jb250ZW50ICE9IG51bGwpIHx8ICh0aGlzLmxheWVyRGF0YS5iYWNrZ3JvdW5kICE9IG51bGwpKSB7XG4gICAgICB0aGlzLnVwZGF0ZUNvbnRlbnQodGhpcy5sYXllckRhdGEpO1xuICAgIH1cbiAgICBpZiAodGhpcy5sYXllckRhdGEuZnggIT0gbnVsbCkge1xuICAgICAgdGhpcy51cGRhdGVFZmZlY3RzKHRoaXMubGF5ZXJEYXRhLmZ4KTtcbiAgICB9XG4gICAgaWYgKHRoaXMubGF5ZXJEYXRhLmFjdGlvbiAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gYXJpc3RvdGxlLmNvbW1hbmRlcltcImRvXCJdKHRoaXMubGF5ZXJEYXRhLmFjdGlvbik7XG4gICAgfVxuICB9O1xuXG4gIExheWVyLnByb3RvdHlwZS51cGRhdGVDb250ZW50ID0gZnVuY3Rpb24obGF5ZXJEYXRhKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudE9uaW9uTGF5ZXIgIT0gbnVsbCkge1xuICAgICAgdGhpcy5mYWRlQW5kUmVtb3ZlT2xkTGF5ZXIoKTtcbiAgICB9XG4gICAgdGhpcy5hZGRUaGVDb3JyZWN0Q29udGVudChsYXllckRhdGEpO1xuICAgIHJldHVybiB0aGlzLnVwZGF0ZUJhY2tncm91bmQobGF5ZXJEYXRhKTtcbiAgfTtcblxuICBMYXllci5wcm90b3R5cGUuYWRkVGhlQ29ycmVjdENvbnRlbnQgPSBmdW5jdGlvbihsYXllckRhdGEpIHtcbiAgICB2YXIga2luZDtcbiAgICB0aGlzLmlzQW5pbWF0aW9uID0gZmFsc2U7XG4gICAgdGhpcy5pc0NhY2hlZCA9IGZhbHNlO1xuICAgIHBhcnNlKGxheWVyRGF0YSk7XG4gICAgaWYgKGxheWVyRGF0YS5pZUNhY2hlICYmICFhcmlzdG90bGUuZG9udENhY2hlICYmIGFyaXN0b3RsZS5pc0lFKSB7XG4gICAgICBsYXllckRhdGEubG9vcCA9IGZhbHNlO1xuICAgICAgbGF5ZXJEYXRhLmNhY2hlID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5jdXJyZW50T25pb25MYXllciA9IHRoaXMuYWRkT25pb25MYXllcigpO1xuICAgIGlmIChsYXllckRhdGEuY29udGVudCA9PSBudWxsKSB7XG4gICAgICBraW5kID0gXCJub25lXCI7XG4gICAgfSBlbHNlIGlmIChsYXllckRhdGEuY29udGVudCA9PT0gXCJjbGVhclwiKSB7XG4gICAgICBraW5kID0gXCJjbGVhclwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBraW5kID0gbGF5ZXJEYXRhLmNvbnRlbnQuc3BsaXQoXCIuXCIpWzFdO1xuICAgIH1cbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgIGNhc2UgXCJqc29uXCI6XG4gICAgICAgIHJldHVybiB0aGlzLmFkZEFuaW1hdGlvbih0aGlzLmN1cnJlbnRPbmlvbkxheWVyLCBsYXllckRhdGEpO1xuICAgICAgY2FzZSBcInN2Z1wiOlxuICAgICAgICByZXR1cm4gdGhpcy5hZGRTdmcodGhpcy5jdXJyZW50T25pb25MYXllciwgbGF5ZXJEYXRhKTtcbiAgICAgIGNhc2UgXCJnaWZcIjpcbiAgICAgIGNhc2UgXCJqcGdcIjpcbiAgICAgIGNhc2UgXCJqcGVnXCI6XG4gICAgICBjYXNlIFwicG5nXCI6XG4gICAgICAgIHJldHVybiB0aGlzLmFkZEltYWdlKHRoaXMuY3VycmVudE9uaW9uTGF5ZXIsIGxheWVyRGF0YS5jb250ZW50LCBsYXllckRhdGEucmVwZWF0LCBsYXllckRhdGEucG9zaXRpb24pO1xuICAgICAgY2FzZSBcImNsZWFyXCI6XG4gICAgICAgIHJldHVybiB0aGlzLmVtcHR5KCk7XG4gICAgICBjYXNlIFwibXA0XCI6XG4gICAgICAgIHJldHVybiB0aGlzLmFkZFZpZGVvKHRoaXMuY3VycmVudE9uaW9uTGF5ZXIsIGxheWVyRGF0YS5jb250ZW50KTtcbiAgICAgIGNhc2UgXCJub25lXCI6XG4gICAgICAgIHJldHVybiBcImRvIG5vdGhpbmdcIjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBhcmlzdG90bGVbXCJ0aHJvd1wiXShcInRyaWVkIHRvIGFkZCB1bnJlY29nbml6ZWQgbGF5ZXIgdHlwZSAnXCIgKyBraW5kICsgXCInXCIsIHRydWUpO1xuICAgIH1cbiAgfTtcblxuICBMYXllci5wcm90b3R5cGUuY2FjaGUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgJGltZywgJHN2ZywgZXJyb3IsIGVycm9yMSwgaW1nLCBzdmc7XG4gICAgaWYgKHRoaXMuaXNDYWNoZWQgfHwgIXRoaXMuaXNBbmltYXRpb24gfHwgYXJpc3RvdGxlLmRvbnRDYWNoZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmlzQ2FjaGVkID0gdHJ1ZTtcbiAgICAkc3ZnID0gJChcInN2Z1wiLCB0aGlzLiRsYXllcik7XG4gICAgJHN2Zy5hdHRyKHtcbiAgICAgIHN0eWxlOiBcIlwiLFxuICAgICAgeG1sbnM6IFwiXCJcbiAgICB9KTtcbiAgICAkc3ZnLnJlbW92ZUF0dHIoXCJ4bWxuc1wiKTtcbiAgICBzdmcgPSAkc3ZnWzBdO1xuICAgICRpbWcgPSAkKCQucGFyc2VIVE1MKFwiPGltZyAvPlwiKSk7XG4gICAgaW1nID0gJGltZ1swXTtcbiAgICB3aW5kb3cudHJhY2VMYXllciA9IHRoaXM7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBzdmcudG9EYXRhVVJMKCdpbWFnZS9wbmcnLCB7XG4gICAgICAgIHJlbmRlcmVyOiAnY2FudmcnLFxuICAgICAgICBjYWxsYmFjazogKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGRhdGEpO1xuICAgICAgICAgICAgX3RoaXMuZmFkZUFuZFJlbW92ZU9sZExheWVyKCk7XG4gICAgICAgICAgICBfdGhpcy5jdXJyZW50T25pb25MYXllciA9IF90aGlzLmFkZE9uaW9uTGF5ZXIoKTtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5jdXJyZW50T25pb25MYXllci5hcHBlbmQoaW1nKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KSh0aGlzKVxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IxKSB7XG4gICAgICBlcnJvciA9IGVycm9yMTtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9O1xuXG4gIExheWVyLnByb3RvdHlwZS51bmNhY2hlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGtleSwgcmVmLCB0ZW1wT2JqLCB2YWw7XG4gICAgaWYgKCF0aGlzLmlzQ2FjaGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuaXNDYWNoZWQgPSBmYWxzZTtcbiAgICB0aGlzLmZhZGVBbmRSZW1vdmVPbGRMYXllcigpO1xuICAgIHRoaXMuY3VycmVudE9uaW9uTGF5ZXIgPSB0aGlzLmFkZE9uaW9uTGF5ZXIoKTtcbiAgICB0ZW1wT2JqID0ge307XG4gICAgcmVmID0gdGhpcy5sYXllckRhdGE7XG4gICAgZm9yIChrZXkgaW4gcmVmKSB7XG4gICAgICB2YWwgPSByZWZba2V5XTtcbiAgICAgIHRlbXBPYmpba2V5XSA9IHZhbDtcbiAgICB9XG4gICAgdGVtcE9iai5pZUNhY2hlID0gZmFsc2U7XG4gICAgdGVtcE9iai5jYWNoZSA9IGZhbHNlO1xuICAgIHRlbXBPYmouanVtcFRvRW5kID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcy5hZGRUaGVDb3JyZWN0Q29udGVudCh0ZW1wT2JqKTtcbiAgfTtcblxuICBMYXllci5wcm90b3R5cGUudXBkYXRlRWZmZWN0cyA9IGZ1bmN0aW9uKGZ4KSB7XG4gICAgdmFyIGVmZmVjdCwgaSwgbGVuLCByZWYsIHJlc3VsdHM7XG4gICAgaWYgKGZ4LmNsZWFyKSB7XG4gICAgICB0aGlzLiRsYXllci5hdHRyKHtcbiAgICAgICAgXCJjbGFzc1wiOiAnbGF5ZXInXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGZ4LmVmZmVjdHMgIT0gbnVsbCkge1xuICAgICAgcmVmID0gZnguZWZmZWN0cztcbiAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBlZmZlY3QgPSByZWZbaV07XG4gICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLiRsYXllci5hZGRDbGFzcyhlZmZlY3QpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH1cbiAgfTtcblxuICBMYXllci5wcm90b3R5cGUudXBkYXRlQmFja2dyb3VuZCA9IGZ1bmN0aW9uKGxheWVyRGF0YSkge1xuICAgIGlmIChsYXllckRhdGEuYmFja2dyb3VuZCA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmN1cnJlbnRPbmlvbkxheWVyLmNzcyh7XG4gICAgICBiYWNrZ3JvdW5kOiBsYXllckRhdGEuYmFja2dyb3VuZFxuICAgIH0pO1xuICB9O1xuXG4gIExheWVyLnByb3RvdHlwZS5hZGRBbmltYXRpb24gPSBmdW5jdGlvbigkaG9sZGVyLCBsYXllckRhdGEpIHtcbiAgICB0aGlzLmlzQW5pbWF0aW9uID0gdHJ1ZTtcbiAgICB0aGlzLmFuaW1hdGlvbiA9IG5ldyBTVkdBbmltYXRpb24oJGhvbGRlciwgYXJpc3RvdGxlLmdldEFzc2V0UGF0aChsYXllckRhdGEuY29udGVudCksIGxheWVyRGF0YSk7XG4gICAgaWYgKGxheWVyRGF0YS5jYWNoZSkge1xuICAgICAgcmV0dXJuIHRoaXMuYW5pbWF0aW9uLmFkZE9uQ29tcGxldGUoKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5jYWNoZSgpO1xuICAgICAgICAgIH0sIDEwKTtcbiAgICAgICAgfTtcbiAgICAgIH0pKHRoaXMpKTtcbiAgICB9XG4gIH07XG5cbiAgTGF5ZXIucHJvdG90eXBlLmFkZFN2ZyA9IGZ1bmN0aW9uKCRob2xkZXIsIGxheWVyRGF0YSkge1xuICAgIHZhciBtZTtcbiAgICBtZSA9IHRoaXM7XG4gICAgcmV0dXJuICRob2xkZXIubG9hZChhcmlzdG90bGUuZ2V0QXNzZXRQYXRoKGxheWVyRGF0YS5jb250ZW50KSwgZnVuY3Rpb24oKSB7XG4gICAgICBpZiAobGF5ZXJEYXRhLmNhY2hlKSB7XG4gICAgICAgIHJldHVybiBtZS5jYWNoZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIExheWVyLnByb3RvdHlwZS5hZGRJbWFnZSA9IGZ1bmN0aW9uKCRob2xkZXIsIGZpbGUsIHJlcGVhdCwgcG9zaXRpb24pIHtcbiAgICBpZiAocmVwZWF0ID09IG51bGwpIHtcbiAgICAgIHJlcGVhdCA9IFwibm8tcmVwZWF0XCI7XG4gICAgfVxuICAgIGlmIChwb3NpdGlvbiA9PSBudWxsKSB7XG4gICAgICBwb3NpdGlvbiA9IFwibGVmdFwiO1xuICAgIH1cbiAgICByZXR1cm4gJGhvbGRlci5jc3Moe1xuICAgICAgYmFja2dyb3VuZDogXCJ1cmwoXCIgKyAoYXJpc3RvdGxlLmdldEFzc2V0UGF0aChmaWxlKSkgKyBcIikgXCIgKyByZXBlYXQgKyBcIiBcIiArIHBvc2l0aW9uXG4gICAgfSk7XG4gIH07XG5cbiAgTGF5ZXIucHJvdG90eXBlLmFkZFZpZGVvID0gZnVuY3Rpb24oJGhvbGRlciwgZmlsZSkge1xuICAgIHZhciAkdmlkO1xuICAgICR2aWQgPSAkKGphZGVUZW1wbGF0ZVsnbW92aWUvdmlkZW8nXSh7XG4gICAgICBzcmM6IGFyaXN0b3RsZS5nZXRBc3NldFBhdGgoZmlsZSlcbiAgICB9KSk7XG4gICAgcmV0dXJuICRob2xkZXIuYXBwZW5kKCR2aWQpO1xuICB9O1xuXG4gIExheWVyLnByb3RvdHlwZS5hZGRPbmlvbkxheWVyID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyICRvbmlvbkxheWVyO1xuICAgICRvbmlvbkxheWVyID0gJChqYWRlVGVtcGxhdGVbJ21vdmllL29uaW9uLWxheWVyJ10oe30pKTtcbiAgICB0aGlzLiRsYXllci5wcmVwZW5kKCRvbmlvbkxheWVyKTtcbiAgICByZXR1cm4gJG9uaW9uTGF5ZXI7XG4gIH07XG5cbiAgTGF5ZXIucHJvdG90eXBlLmZhZGVBbmRSZW1vdmVPbGRMYXllciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBvbGRPbmlvbkxheWVyO1xuICAgIG9sZE9uaW9uTGF5ZXIgPSB0aGlzLmN1cnJlbnRPbmlvbkxheWVyO1xuICAgIHJldHVybiBhcmlzdG90bGUudGltZW91dCgoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgb2xkT25pb25MYXllci52ZWxvY2l0eSgnc3RvcCcsIHRydWUpO1xuICAgICAgICByZXR1cm4gb2xkT25pb25MYXllci52ZWxvY2l0eSh7XG4gICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICB9LCB7XG4gICAgICAgICAgZHVyYXRpb246IDIwMCxcbiAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gb2xkT25pb25MYXllci5yZW1vdmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSwgMjAwKTtcbiAgfTtcblxuICBMYXllci5wcm90b3R5cGUuZW1wdHkgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kbGF5ZXIuZW1wdHkoKTtcbiAgfTtcblxuICBMYXllci5wcm90b3R5cGUuYWRkRmlsdGVyID0gZnVuY3Rpb24oZmlsdGVySWQpIHtcbiAgICByZXR1cm4gJChcInN2Z1wiLCB0aGlzLmN1cnJlbnRPbmlvbkxheWVyKS5jc3Moe1xuICAgICAgZmlsdGVyOiBcInVybCgjXCIgKyBmaWx0ZXJJZCArIFwiKVwiXG4gICAgfSk7XG4gIH07XG5cbiAgTGF5ZXIucHJvdG90eXBlLnJlbW92ZUZpbHRlcnMgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gJChcInN2Z1wiLCB0aGlzLmN1cnJlbnRPbmlvbkxheWVyKS5jc3Moe1xuICAgICAgZmlsdGVyOiBcIm5vbmVcIlxuICAgIH0pO1xuICB9O1xuXG4gIExheWVyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJGxheWVyLnJlbW92ZSgpO1xuICB9O1xuXG4gIHJldHVybiBMYXllcjtcblxufSkoKTtcbiIsInZhciBEeW5hbWljQXNzZXRzLCBIaWdobGlnaHRlciwgTGF5ZXIsIE1vdmllO1xuXG5EeW5hbWljQXNzZXRzID0gcmVxdWlyZSgnbW92aWUvZHluYW1pYy1hc3NldHMnKTtcblxuTGF5ZXIgPSByZXF1aXJlKCdtb3ZpZS9sYXllcicpO1xuXG5IaWdobGlnaHRlciA9IHJlcXVpcmUoJ21vdmllL2hpZ2hsaWdodGVyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTW92aWUgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIE1vdmllKCRlbCkge1xuICAgIHZhciB0b2tlbjEsIHRva2VuMTAsIHRva2VuMTEsIHRva2VuMTIsIHRva2VuMTMsIHRva2VuMiwgdG9rZW4zLCB0b2tlbjQsIHRva2VuNSwgdG9rZW42LCB0b2tlbjcsIHRva2VuOCwgdG9rZW45O1xuICAgIHRoaXMuJGVsID0gJGVsO1xuICAgIGFyaXN0b3RsZS5tb3ZpZSA9IHRoaXM7XG4gICAgdGhpcy4kd3JhcHBlciA9ICQoJy53cmFwcGVyJywgdGhpcy4kZWwpO1xuICAgIHRoaXMubGF5ZXJzID0gW107XG4gICAgdGhpcy5keW5hbWljQXNzZXRzID0gbmV3IER5bmFtaWNBc3NldHMoJCgnLmR5bmFtaWNzJywgdGhpcy4kZWwpKTtcbiAgICB0aGlzLmhpZ2hsaWdodGVyID0gbmV3IEhpZ2hsaWdodGVyKHRoaXMuJHdyYXBwZXIsIHRoaXMuZHluYW1pY0Fzc2V0cyk7XG4gICAgdGhpcy5zY2FsZSA9IDE7XG4gICAgdGhpcy50cmFuc2Zvcm1PcmlnaW4gPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH07XG4gICAgdG9rZW4xID0gUHViU3ViLnN1YnNjcmliZSgnbW92aWUubG9hZC1sYXllcicsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmFkZExheWVyKGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgdG9rZW4yID0gUHViU3ViLnN1YnNjcmliZSgnbW92aWUuem9vbScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnpvb20oZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0b2tlbjMgPSBQdWJTdWIuc3Vic2NyaWJlKCdtb3ZpZS5sYXllcnMuY2xlYXInLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5jbGVhckxheWVyKGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgdG9rZW40ID0gUHViU3ViLnN1YnNjcmliZSgnbW92aWUubGF5ZXJzLmNsZWFyLWFsbCcsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmNsZWFyQWxsTGF5ZXJzKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0b2tlbjUgPSBQdWJTdWIuc3Vic2NyaWJlKCdtb3ZpZS5sYXllcnMuYmx1ci5iZWxvdycsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmJsdXJBbGxMYXllcnNCZWxvdyhkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRva2VuNiA9IFB1YlN1Yi5zdWJzY3JpYmUoJ21vdmllLmxheWVycy51bmJsdXIuYWxsJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMudW5ibHVyQWxsTEF5ZXJzKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0b2tlbjcgPSBQdWJTdWIuc3Vic2NyaWJlKCdtb3ZpZS5sYXllcnMuY2FjaGUnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5jYWNoZUxheWVyKGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgdG9rZW44ID0gUHViU3ViLnN1YnNjcmliZSgnbW92aWUubGF5ZXJzLnVuY2FjaGUnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy51bmNhY2hlTGF5ZXIoZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0b2tlbjkgPSBQdWJTdWIuc3Vic2NyaWJlKCdtb3ZpZS5sYXllcnMudW5jYWNoZS1hbGwnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy51bkNhY2hlQWxsTGF5ZXJzKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0b2tlbjEwID0gUHViU3ViLnN1YnNjcmliZSgnbW92aWUubGF5ZXJzLmNhY2hlLWFsbCcsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmNhY2hlQWxsTGF5ZXJzKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0b2tlbjExID0gUHViU3ViLnN1YnNjcmliZSgnbW92aWUubGF5ZXJzLmNhY2hlLWFsbC1idXQnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5jYWNoZUFsbEJ1dChkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRva2VuMTIgPSBQdWJTdWIuc3Vic2NyaWJlKCdtb3ZpZS5yZXBvcnQnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5yZXBvcnQoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRva2VuMTMgPSBQdWJTdWIuc3Vic2NyaWJlKCdtb3ZpZS5yZWh5ZHJhdGUtbGF5ZXJzJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMucmVoeWRyYXRlTGF5ZXJTdGF0ZShkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRoaXMudG9rZW5zID0gW3Rva2VuMSwgdG9rZW4yLCB0b2tlbjMsIHRva2VuNCwgdG9rZW41LCB0b2tlbjYsIHRva2VuNywgdG9rZW44LCB0b2tlbjksIHRva2VuMTAsIHRva2VuMTEsIHRva2VuMTIsIHRva2VuMTNdO1xuICB9XG5cbiAgTW92aWUucHJvdG90eXBlLnJlcG9ydCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBqLCBsYXllciwgbGVuLCByZWYsIHJlc3VsdHM7XG4gICAgcmVmID0gdGhpcy5sYXllcnM7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoaiA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGogPCBsZW47IGorKykge1xuICAgICAgbGF5ZXIgPSByZWZbal07XG4gICAgICByZXN1bHRzLnB1c2gobGF5ZXIucmVwb3J0KCkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBNb3ZpZS5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaiwgbGF5ZXIsIGxlbiwgcmVmO1xuICAgIHRoaXMuem9vbSh7XG4gICAgICBzY2FsZTogMVxuICAgIH0pO1xuICAgIHJlZiA9IHRoaXMubGF5ZXJzO1xuICAgIGZvciAoaiA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGogPCBsZW47IGorKykge1xuICAgICAgbGF5ZXIgPSByZWZbal07XG4gICAgICBsYXllci5kZXN0cm95KCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmxheWVycyA9IFtdO1xuICB9O1xuXG4gIE1vdmllLnByb3RvdHlwZS5wb3B1bGF0ZSA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2YXIgZGVwdGhJZCwgbGF5ZXJEYXRhLCByZWY7XG4gICAgaWYgKGRhdGEgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZWYgPSBkYXRhLmxheWVycztcbiAgICBmb3IgKGRlcHRoSWQgaW4gcmVmKSB7XG4gICAgICBsYXllckRhdGEgPSByZWZbZGVwdGhJZF07XG4gICAgICB0aGlzLmFkZExheWVyKGxheWVyRGF0YSk7XG4gICAgfVxuICAgIGlmIChkYXRhLnpvb20gIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMuem9vbShkYXRhLnpvb20pO1xuICAgIH1cbiAgfTtcblxuICBNb3ZpZS5wcm90b3R5cGUuem9vbSA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2YXIgJGl0ZW0sIHBvcztcbiAgICBpZiAoZGF0YS5pZCAhPSBudWxsKSB7XG4gICAgICAkaXRlbSA9ICQoXCIjXCIgKyBkYXRhLmlkKTtcbiAgICAgIGlmICgkaXRlbS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgYXJpc3RvdGxlW1widGhyb3dcIl0oXCJUcmllZCB0byB6b29tIHRvIGFuIGl0ZW0gd2l0aCB0aGUgaWQgYFwiICsgZGF0YS5pZCArIFwiYCwgYnV0IG5vIGl0ZW1zIHdpdGggdGhhdCBpZCB3ZXJlIGZvdW5kLlwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcG9zID0gdGhpcy5nZXRMb2NhbFBvcyhkYXRhLmlkKTtcbiAgICAgIHJldHVybiB0aGlzLnpvb21UbyhkYXRhLnNjYWxlLCBwb3MueCwgcG9zLnkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy56b29tVG8oZGF0YS5zY2FsZSwgZGF0YS54LCBkYXRhLnkpO1xuICAgIH1cbiAgfTtcblxuICBNb3ZpZS5wcm90b3R5cGUuem9vbVRvID0gZnVuY3Rpb24oc2NhbGUsIHgsIHkpIHtcbiAgICB0aGlzLnNjYWxlID0gc2NhbGUgIT0gbnVsbCA/IHNjYWxlIDogMTtcbiAgICBpZiAoeCA9PSBudWxsKSB7XG4gICAgICB4ID0gMDtcbiAgICB9XG4gICAgaWYgKHkgPT0gbnVsbCkge1xuICAgICAgeSA9IDA7XG4gICAgfVxuICAgIHRoaXMudHJhbnNmb3JtT3JpZ2luID0ge1xuICAgICAgeDogeCxcbiAgICAgIHk6IHlcbiAgICB9O1xuICAgIHRoaXMuJGVsLmNzcyh7XG4gICAgICBcInRyYW5zZm9ybS1vcmlnaW5cIjogKE1hdGgucm91bmQoeCkpICsgXCJweCBcIiArIChNYXRoLnJvdW5kKHkpKSArIFwicHhcIlxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLiRlbC5jc3Moe1xuICAgICAgdHJhbnNmb3JtOiBcInNjYWxlKFwiICsgdGhpcy5zY2FsZSArIFwiKVwiXG4gICAgfSk7XG4gIH07XG5cbiAgTW92aWUucHJvdG90eXBlLmNsZWFyTGF5ZXIgPSBmdW5jdGlvbihkZXB0aCkge1xuICAgIGlmICh0aGlzLmxheWVyc1tkZXB0aF0gIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMubGF5ZXJzW2RlcHRoXS5lbXB0eSgpO1xuICAgIH1cbiAgfTtcblxuICBNb3ZpZS5wcm90b3R5cGUuY2xlYXJBbGxMYXllcnMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaiwgbGF5ZXIsIGxlbiwgcmVmLCByZXN1bHRzO1xuICAgIHJlZiA9IHRoaXMubGF5ZXJzO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGogPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgIGxheWVyID0gcmVmW2pdO1xuICAgICAgcmVzdWx0cy5wdXNoKGxheWVyLmVtcHR5KCkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBNb3ZpZS5wcm90b3R5cGUuYWRkTGF5ZXIgPSBmdW5jdGlvbihsYXllckRhdGEpIHtcbiAgICB2YXIgZGVwdGgsIGksIGosIGxheWVyLCByZWYsIHJlZjE7XG4gICAgaWYgKGxheWVyRGF0YSA9PSBudWxsKSB7XG4gICAgICBhcmlzdG90bGVbXCJ0aHJvd1wiXShcIlRyaWVkIHRvIGNyZWF0ZSBhIGxheWVyLCBidXQgZGlkbid0IHNwZWNpZnkgYW55IGxheWVyIGRhdGFcIiwgdHJ1ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChsYXllckRhdGEuZGVwdGggPT0gbnVsbCkge1xuICAgICAgYXJpc3RvdGxlW1widGhyb3dcIl0oXCJUcmllZCB0byBjcmVhdGUgYSBsYXllciB3aXRoIG5vIGRlcHRoIHNwZWNpZmllZFwiLCB0cnVlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZGVwdGggPSBsYXllckRhdGEuZGVwdGg7XG4gICAgaWYgKGRlcHRoID4gdGhpcy5sYXllcnMubGVuZ3RoKSB7XG4gICAgICBmb3IgKGkgPSBqID0gcmVmID0gdGhpcy5sYXllcnMubGVuZ3RoLCByZWYxID0gZGVwdGg7IHJlZiA8PSByZWYxID8gaiA8PSByZWYxIDogaiA+PSByZWYxOyBpID0gcmVmIDw9IHJlZjEgPyArK2ogOiAtLWopIHtcbiAgICAgICAgdGhpcy5sYXllcnNbaV0gPSBuZXcgTGF5ZXIodGhpcy4kd3JhcHBlciwgaSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxheWVyID0gdGhpcy5nZXRPckNyZWF0ZUxheWVyKGRlcHRoKTtcbiAgICByZXR1cm4gbGF5ZXIudXBkYXRlKGxheWVyRGF0YSk7XG4gIH07XG5cbiAgTW92aWUucHJvdG90eXBlLmdldE9yQ3JlYXRlTGF5ZXIgPSBmdW5jdGlvbihkZXB0aCkge1xuICAgIHZhciBsYXllcjtcbiAgICBpZiAodGhpcy5sYXllcnNbZGVwdGhdICE9IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLmxheWVyc1tkZXB0aF07XG4gICAgfVxuICAgIGxheWVyID0gbmV3IExheWVyKHRoaXMuJHdyYXBwZXIsIGRlcHRoKTtcbiAgICB0aGlzLmxheWVyc1tkZXB0aF0gPSBsYXllcjtcbiAgICByZXR1cm4gbGF5ZXI7XG4gIH07XG5cbiAgTW92aWUucHJvdG90eXBlLmNhY2hlQWxsQnV0ID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciBleGNlcHRpb24sIGV4Y2VwdGlvbnMsIGosIGssIGxheWVyLCBsZW4sIGxlbjEsIHJlZiwgcmVzdWx0cztcbiAgICBleGNlcHRpb25zID0ge307XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgIGZvciAoaiA9IDAsIGxlbiA9IGRhdGEubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgICAgZXhjZXB0aW9uID0gZGF0YVtqXTtcbiAgICAgICAgZXhjZXB0aW9uc1tleGNlcHRpb25dID0gXCJcIjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZXhjZXB0aW9uc1tkYXRhXSA9IFwiXCI7XG4gICAgfVxuICAgIHJlZiA9IHRoaXMubGF5ZXJzO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGsgPSAwLCBsZW4xID0gcmVmLmxlbmd0aDsgayA8IGxlbjE7IGsrKykge1xuICAgICAgbGF5ZXIgPSByZWZba107XG4gICAgICBpZiAoZXhjZXB0aW9uc1tsYXllci5kZXB0aF0gIT09IFwiXCIpIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKGxheWVyLmNhY2hlKCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHZvaWQgMCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIE1vdmllLnByb3RvdHlwZS5jYWNoZUFsbExheWVycyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBqLCBsYXllciwgbGVuLCByZWYsIHJlc3VsdHM7XG4gICAgcmVmID0gdGhpcy5sYXllcnM7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoaiA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGogPCBsZW47IGorKykge1xuICAgICAgbGF5ZXIgPSByZWZbal07XG4gICAgICByZXN1bHRzLnB1c2gobGF5ZXIuY2FjaGUoKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIE1vdmllLnByb3RvdHlwZS51bkNhY2hlQWxsTGF5ZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGosIGxheWVyLCBsZW4sIHJlZiwgcmVzdWx0cztcbiAgICByZWYgPSB0aGlzLmxheWVycztcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChqID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICBsYXllciA9IHJlZltqXTtcbiAgICAgIHJlc3VsdHMucHVzaChsYXllci51bmNhY2hlKCkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBNb3ZpZS5wcm90b3R5cGUuY2FjaGVMYXllciA9IGZ1bmN0aW9uKGRlcHRoKSB7XG4gICAgcmV0dXJuIHRoaXMubGF5ZXJzW2RlcHRoXS5jYWNoZSgpO1xuICB9O1xuXG4gIE1vdmllLnByb3RvdHlwZS51bmNhY2hlTGF5ZXIgPSBmdW5jdGlvbihkZXB0aCkge1xuICAgIHJldHVybiB0aGlzLmxheWVyc1tkZXB0aF0udW5jYWNoZSgpO1xuICB9O1xuXG4gIE1vdmllLnByb3RvdHlwZS5ibHVyQWxsTGF5ZXJzQmVsb3cgPSBmdW5jdGlvbihsYXllckRlcHRoKSB7XG4gICAgdmFyIGksIGosIHJlZiwgcmVzdWx0cztcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChpID0gaiA9IDAsIHJlZiA9IGxheWVyRGVwdGggLSAxOyAwIDw9IHJlZiA/IGogPD0gcmVmIDogaiA+PSByZWY7IGkgPSAwIDw9IHJlZiA/ICsraiA6IC0taikge1xuICAgICAgcmVzdWx0cy5wdXNoKHRoaXMubGF5ZXJzW2ldLmFkZEZpbHRlcihcImJsdWVCbHVyXCIpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgTW92aWUucHJvdG90eXBlLnVuYmx1ckFsbExBeWVycyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBqLCBsYXllciwgbGVuLCByZWYsIHJlc3VsdHM7XG4gICAgcmVmID0gdGhpcy5sYXllcnM7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoaiA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGogPCBsZW47IGorKykge1xuICAgICAgbGF5ZXIgPSByZWZbal07XG4gICAgICByZXN1bHRzLnB1c2gobGF5ZXIucmVtb3ZlRmlsdGVycygpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgTW92aWUucHJvdG90eXBlLmdldEdsb2JhbFBvcyA9IGZ1bmN0aW9uKGl0ZW1JZCkge1xuICAgIHZhciBiQm94LCBvYmosIHgsIHh0cmFYLCB4dHJhWSwgeTtcbiAgICBiQm94ID0gJChcIiNcIiArIGl0ZW1JZClbMF0uZ2V0QkJveCgpO1xuICAgIHh0cmFYID0gdGhpcy50cmFuc2Zvcm1PcmlnaW4ueCAqICh0aGlzLnNjYWxlIC0gMSkgLSB0aGlzLnRyYW5zZm9ybU9yaWdpbi54O1xuICAgIHggPSAoYkJveC54ICogdGhpcy5zY2FsZSkgLSAodGhpcy50cmFuc2Zvcm1PcmlnaW4ueCArIHh0cmFYKTtcbiAgICB4dHJhWSA9IHRoaXMudHJhbnNmb3JtT3JpZ2luLnkgKiAodGhpcy5zY2FsZSAtIDEpIC0gdGhpcy50cmFuc2Zvcm1PcmlnaW4ueTtcbiAgICB5ID0gKGJCb3gueSAqIHRoaXMuc2NhbGUpIC0gKHRoaXMudHJhbnNmb3JtT3JpZ2luLnkgKyB4dHJhWSk7XG4gICAgcmV0dXJuIG9iaiA9IHtcbiAgICAgIHg6IHgsXG4gICAgICB5OiB5LFxuICAgICAgdzogYkJveC53aWR0aCxcbiAgICAgIGg6IGJCb3guaGVpZ2h0XG4gICAgfTtcbiAgfTtcblxuICBNb3ZpZS5wcm90b3R5cGUuZ2V0TG9jYWxQb3MgPSBmdW5jdGlvbihpdGVtSWQpIHtcbiAgICB2YXIgYkJveCwgb2JqO1xuICAgIGJCb3ggPSAkKFwiI1wiICsgaXRlbUlkKVswXS5nZXRCQm94KCk7XG4gICAgcmV0dXJuIG9iaiA9IHtcbiAgICAgIHg6IGJCb3gueCxcbiAgICAgIHk6IGJCb3gueSxcbiAgICAgIHc6IGJCb3gud2lkdGgsXG4gICAgICBoOiBiQm94LmhlaWdodFxuICAgIH07XG4gIH07XG5cbiAgTW92aWUucHJvdG90eXBlLmRlaHlkcmF0ZUxheWVyU3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaiwgbGF5ZXIsIGxheWVycywgbGVuLCByZWY7XG4gICAgbGF5ZXJzID0gW107XG4gICAgcmVmID0gdGhpcy5sYXllcnM7XG4gICAgZm9yIChqID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICBsYXllciA9IHJlZltqXTtcbiAgICAgIGxheWVycy5wdXNoKGxheWVyLnByaXN0aW5lTGF5ZXJEYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIGxheWVycztcbiAgfTtcblxuICBNb3ZpZS5wcm90b3R5cGUucmVoeWRyYXRlTGF5ZXJTdGF0ZSA9IGZ1bmN0aW9uKGxheWVycykge1xuICAgIHZhciBqLCBsYXllckRhdGEsIGxlbiwgcmVzdWx0cztcbiAgICBjb25zb2xlLmxvZyhsYXllcnMpO1xuICAgIHRoaXMucmVzZXQoKTtcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChqID0gMCwgbGVuID0gbGF5ZXJzLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICBsYXllckRhdGEgPSBsYXllcnNbal07XG4gICAgICBpZiAobGF5ZXJEYXRhICE9IG51bGwpIHtcbiAgICAgICAgaWYgKCFsYXllckRhdGEubG9vcCkge1xuICAgICAgICAgIGxheWVyRGF0YS5qdW1wVG9FbmQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLmFkZExheWVyKGxheWVyRGF0YSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHZvaWQgMCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIE1vdmllLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGosIGxlbiwgcmVmLCByZXN1bHRzLCB0b2tlbjtcbiAgICB0aGlzLnJlc2V0KCk7XG4gICAgcmVmID0gdGhpcy50b2tlbnM7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoaiA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGogPCBsZW47IGorKykge1xuICAgICAgdG9rZW4gPSByZWZbal07XG4gICAgICByZXN1bHRzLnB1c2goUHViU3ViLnVuc3Vic2NyaWJlKHRva2VuKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIHJldHVybiBNb3ZpZTtcblxufSkoKTtcbiIsInZhciBTVkdBbmltYXRpb24sXG4gIGJpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNWR0FuaW1hdGlvbiA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gU1ZHQW5pbWF0aW9uKGVsLCBqc29uLCBkYXRhKSB7XG4gICAgdGhpcy5wbGF5ID0gYmluZCh0aGlzLnBsYXksIHRoaXMpO1xuICAgIGlmIChkYXRhLmxvb3AgPT0gbnVsbCkge1xuICAgICAgZGF0YS5sb29wID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMuYW5pbWF0aW9uID0gYm9keW1vdmluLmxvYWRBbmltYXRpb24oe1xuICAgICAgd3JhcHBlcjogZWxbMF0sXG4gICAgICBhbmltVHlwZTogJ3N2ZycsXG4gICAgICBsb29wOiBkYXRhLmxvb3AsXG4gICAgICBwcmVyZW5kZXI6IHRydWUsXG4gICAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgICBwYXRoOiBqc29uXG4gICAgfSk7XG4gICAgaWYgKGRhdGEubmF0aXZlRXZlbnRzICE9IG51bGwpIHtcbiAgICAgIHRoaXMuYWRkTmF0aXZlRXZlbnRzKGRhdGEubmF0aXZlRXZlbnRzKTtcbiAgICB9XG4gICAgaWYgKGRhdGEudmNyKSB7XG4gICAgICBQdWJTdWIucHVibGlzaCgndmNyLWNvbnRyb2wuc2hvdycsIHRoaXMpO1xuICAgIH1cbiAgICB0aGlzLmFuaW1hdGlvbi5hZGRFdmVudExpc3RlbmVyKCdkYXRhX3JlYWR5JywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChkYXRhLmp1bXBUb0VuZCAhPSBudWxsKSB7XG4gICAgICAgICAgX3RoaXMuYW5pbWF0aW9uLnNldEN1cnJlbnRSYXdGcmFtZVZhbHVlKF90aGlzLmFuaW1hdGlvbi50b3RhbEZyYW1lcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGRhdGEuZGVsYXkgIT0gbnVsbCkge1xuICAgICAgICAgICAgYXJpc3RvdGxlLnRpbWVvdXQoX3RoaXMucGxheSwgZGF0YS5kZWxheSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIF90aGlzLnBsYXkoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF90aGlzLmFkZEV2ZW50cyhkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9XG5cbiAgU1ZHQW5pbWF0aW9uLnByb3RvdHlwZS5hZGRFdmVudHMgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyIGV2ZW50LCBpLCBsZW4sIHJlZiwgcmVzdWx0cztcbiAgICBpZiAoZGF0YS5ldmVudHMgIT0gbnVsbCkge1xuICAgICAgcmVmID0gZGF0YS5ldmVudHM7XG4gICAgICByZXN1bHRzID0gW107XG4gICAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgZXZlbnQgPSByZWZbaV07XG4gICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLmFuaW1hdGlvbi5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBfdGhpcy5hbmltYXRpb24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudCk7XG4gICAgICAgICAgICByZXR1cm4gUHViU3ViLnB1Ymxpc2goXCJsYXllci5cIiArIGRhdGEuZGVwdGggKyBcIi5cIiArIGV2ZW50KTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KSh0aGlzKSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxuICB9O1xuXG4gIFNWR0FuaW1hdGlvbi5wcm90b3R5cGUuYWRkTmF0aXZlRXZlbnRzID0gZnVuY3Rpb24oZXZlbnRzKSB7XG4gICAgdmFyIGNiLCBldmVudCwgcmVzdWx0cztcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChldmVudCBpbiBldmVudHMpIHtcbiAgICAgIGNiID0gZXZlbnRzW2V2ZW50XTtcbiAgICAgIHJlc3VsdHMucHVzaCh0aGlzLmFuaW1hdGlvbi5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCBjYikpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBTVkdBbmltYXRpb24ucHJvdG90eXBlLmFkZE9uQ29tcGxldGUgPSBmdW5jdGlvbihvbkNvbXBsZXRlKSB7XG4gICAgcmV0dXJuIHRoaXMuYW5pbWF0aW9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjb21wbGV0ZVwiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIG9uQ29tcGxldGUoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9O1xuXG4gIFNWR0FuaW1hdGlvbi5wcm90b3R5cGUucGxheSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmFuaW1hdGlvbi5wbGF5KCk7XG4gIH07XG5cbiAgU1ZHQW5pbWF0aW9uLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYW5pbWF0aW9uLnN0b3AoKTtcbiAgfTtcblxuICBTVkdBbmltYXRpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZXJyb3IsIGVycm9yMTtcbiAgICBpZiAodGhpcy5hbmltYXRpb24gIT0gbnVsbCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgdGhpcy5hbmltYXRpb24uZGVzdHJveSgpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IxKSB7XG4gICAgICAgIGVycm9yID0gZXJyb3IxO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmFuaW1hdGlvbi5yZW5kZXJlcik7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYW5pbWF0aW9uLnJlbmRlcmVyLmxheWVycyk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5pbnRlcnZhbCAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybiBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWwpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBTVkdBbmltYXRpb24ucHJvdG90eXBlLnRyYWNlRnJhbWVzID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKF90aGlzLmFuaW1hdGlvbi5jdXJyZW50UmF3RnJhbWUsIF90aGlzLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUsIF90aGlzLmFuaW1hdGlvbi50b3RhbEZyYW1lcyk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpLCA1MDApO1xuICB9O1xuXG4gIHJldHVybiBTVkdBbmltYXRpb247XG5cbn0pKCk7XG4iLCJ2YXIgQ2FsbFNpZ25TZWxlY3QsIENvbXBvbmVudCxcbiAgZXh0ZW5kID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChoYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9LFxuICBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbkNvbXBvbmVudCA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvY29tcG9uZW50Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2FsbFNpZ25TZWxlY3QgPSAoZnVuY3Rpb24oc3VwZXJDbGFzcykge1xuICBleHRlbmQoQ2FsbFNpZ25TZWxlY3QsIHN1cGVyQ2xhc3MpO1xuXG4gIGZ1bmN0aW9uIENhbGxTaWduU2VsZWN0KCRlbCwgZGF0YSkge1xuICAgIENhbGxTaWduU2VsZWN0Ll9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIGRhdGEpO1xuICAgIHRoaXMuJG5vZGUgPSAkKGphZGVUZW1wbGF0ZVsnc2xpZGUtdXgvY29tcG9uZW50cy9jYWxsLXNpZ24tc2VsZWN0J10oZGF0YSkpO1xuICAgIHRoaXMuc3VwZXJJbml0KCRlbCwgdGhpcy4kbm9kZSwgZGF0YSk7XG4gICAgdGhpcy4kdHh0ID0gJCgnI2NhbGxzaWduLXR4dCcsIHRoaXMuJG5vZGUpO1xuICAgICQoJyNnZW5lcmF0ZS1jYWxsc2lnbicsIHRoaXMuJG5vZGUpLm9uKCdjbGljaycsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMuZ2VuZXJhdGVDYWxsU2lnbigpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgUHViU3ViLnN1YnNjcmliZSgnc2F2ZS5jYWxsc2lnbicsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnNhdmVDYWxsU2lnbigpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH1cblxuICBDYWxsU2lnblNlbGVjdC5wcm90b3R5cGUuZ2VuZXJhdGVDYWxsU2lnbiA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBuaWNrcztcbiAgICBuaWNrcyA9IFtcIkFjZVwiLCBcIkFmdGVyc2hvY2tcIiwgXCJCYWxkeVwiLCBcIkJhbS1CYW1cIiwgXCJCZWFyXCIsIFwiQmVldGxlXCIsIFwiQmlnZm9vdFwiLCBcIkJpem9cIiwgXCJCb256b1wiLCBcIkJvb20tQm9vbVwiLCBcIkJvd3NlclwiLCBcIkJ1Y2tcIiwgXCJCdWdzXCIsIFwiQnVsbFwiLCBcIkNhbGljb1wiLCBcIkRlYWRleWVcIiwgXCJEdXRjaFwiLCBcIkdob3N0XCIsIFwiR3JpdHNcIiwgXCJIYW1tZXJcIiwgXCJIYXJkY29yZSA1NFwiLCBcIkhhd2tcIiwgXCJIYXdrZXllXCIsIFwiSG9sbHl3b29kXCIsIFwiSHVleVwiLCBcIktyYXp5XCIsIFwiTHVja3lcIiwgXCJNYWQgRG9nXCIsIFwiUGluZWFwcGxlXCIsIFwiUG9wc1wiLCBcIlJhZGFyXCIsIFwiUmViZWxcIiwgXCJSZWRcIiwgXCJTaG9ydHlcIiwgXCJTcGFya3lcIiwgXCJTcG9va3lcIiwgXCJUYWNrXCIsIFwiQi5BLlwiLCBcIlRleFwiLCBcIlRpZ2VyXCIsIFwiVGlueVwiLCBcIldpemFyZFwiXTtcbiAgICB0aGlzLmNhbGxTaWduID0gbmlja3NbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbmlja3MubGVuZ3RoKV07XG4gICAgcmV0dXJuIHRoaXMuJHR4dC52YWwodGhpcy5jYWxsU2lnbik7XG4gIH07XG5cbiAgQ2FsbFNpZ25TZWxlY3QucHJvdG90eXBlLnNhdmVDYWxsU2lnbiA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjYWxsU2lnbjtcbiAgICBjYWxsU2lnbiA9IHRoaXMuJHR4dC52YWwoKTtcbiAgICBpZiAoKGNhbGxTaWduICE9IG51bGwgPyBjYWxsU2lnbi5sZW5ndGggOiB2b2lkIDApID4gMSkge1xuICAgICAgYXJpc3RvdGxlLmdsb2JhbHMuc2V0KCdjYWxsU2lnbicsIGNhbGxTaWduKTtcbiAgICAgIFB1YlN1Yi5wdWJsaXNoKCdzdGF0ZS5zYXZlJyk7XG4gICAgICBQdWJTdWIucHVibGlzaCgnY2FsbHNpZ24uc2VsZWN0ZWQnLCBjYWxsU2lnbik7XG4gICAgICByZXR1cm4gUHViU3ViLnB1Ymxpc2goJ3NsaWRlcy5uZXh0Jyk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBDYWxsU2lnblNlbGVjdDtcblxufSkoQ29tcG9uZW50KTtcbiIsInZhciBDb21wb25lbnQ7XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50ID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBDb21wb25lbnQoZGF0YSkge1xuICAgIHRoaXMucmVwbGFjZVZhcnMoZGF0YSk7XG4gIH1cblxuICBDb21wb25lbnQucHJvdG90eXBlLnN1cGVySW5pdCA9IGZ1bmN0aW9uKCRlbCwgJG5vZGUsIGRhdGEpIHtcbiAgICB0aGlzLiRub2RlID0gJG5vZGU7XG4gICAgJGVsLmFwcGVuZCh0aGlzLiRub2RlKTtcbiAgICBzaGFkb3dJY29uc0luc3RhbmNlLnN2Z1JlcGxhY2VXaXRoU3RyaW5nKHB4U3ZnSWNvblN0cmluZywgdGhpcy4kbm9kZSk7XG4gICAgcmV0dXJuIHRoaXMubGlzdGVuRm9yTGFiZWxIb3ZlcnMoZGF0YSk7XG4gIH07XG5cbiAgQ29tcG9uZW50LnByb3RvdHlwZS5yZXBsYWNlVmFycyA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2YXIgaSwga2V5LCBsZW4sIHJlZiwgcmVzdWx0cztcbiAgICBpZiAoZGF0YS5yZXBsYWNlVmFycyA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJlZiA9IGRhdGEucmVwbGFjZVZhcnM7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAga2V5ID0gcmVmW2ldO1xuICAgICAgcmVzdWx0cy5wdXNoKGRhdGFba2V5XSA9IGRhdGFba2V5XS5yZXBsYWNlKC9cXCR7KFxcdyspfS9nLCBmdW5jdGlvbihtYXRjaCwgY2FwdHVyZTEpIHtcbiAgICAgICAgcmV0dXJuIGFyaXN0b3RsZS5nbG9iYWxzLmdldChjYXB0dXJlMSk7XG4gICAgICB9KSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIENvbXBvbmVudC5wcm90b3R5cGUubGlzdGVuRm9yTGFiZWxIb3ZlcnMgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyICRhO1xuICAgIGlmIChkYXRhLmhhc0xhYmVscyA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghZGF0YS5oYXNMYWJlbHMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgJGEgPSAkKFwiYVtkYXRhLWxhYmVsXVwiLCB0aGlzLiRub2RlKTtcbiAgICAkYS5hZGRDbGFzcyhcImxhYmVsLXRyaWdnZXJcIik7XG4gICAgJGEub24oXCJtb3VzZW92ZXJcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuYWRkTGFiZWwoZSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICByZXR1cm4gJGEub24oXCJtb3VzZW91dFwiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5yZW1vdmVMYWJlbChlKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9O1xuXG4gIENvbXBvbmVudC5wcm90b3R5cGUuYWRkTGFiZWwgPSBmdW5jdGlvbihlKSB7XG4gICAgdmFyICRlbCwgY29uZmlnRGF0YSwgdGltZW91dElkO1xuICAgICRlbCA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICB0aW1lb3V0SWQgPSBcInRpbWVvdXRcIiArICgkZWwuYXR0cignZGF0YS1sYWJlbCcpKTtcbiAgICBjbGVhclRpbWVvdXQodGhpc1t0aW1lb3V0SWRdKTtcbiAgICBjb25maWdEYXRhID0gYXJpc3RvdGxlLmxhYmVsc1skZWwuYXR0cignZGF0YS1sYWJlbCcpXTtcbiAgICBjb25maWdEYXRhLmNzc0NsYXNzID0gXCJhcnJvdy1yaWdodCBib3hcIjtcbiAgICByZXR1cm4gUHViU3ViLnB1Ymxpc2goJ2xhYmVsLmF0dGFjaCcsIHtcbiAgICAgIGVsOiAkZWwsXG4gICAgICBjb250ZW50OiBjb25maWdEYXRhXG4gICAgfSk7XG4gIH07XG5cbiAgQ29tcG9uZW50LnByb3RvdHlwZS5yZW1vdmVMYWJlbCA9IGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgJGVsLCB0aW1lb3V0SWQ7XG4gICAgJGVsID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuICAgIHRpbWVvdXRJZCA9IFwidGltZW91dFwiICsgKCRlbC5hdHRyKCdkYXRhLWxhYmVsJykpO1xuICAgIHJldHVybiB0aGlzW3RpbWVvdXRJZF0gPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgJGVsID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuICAgICAgcmV0dXJuIFB1YlN1Yi5wdWJsaXNoKCdsYWJlbC5kZXN0cm95JywgJGVsKTtcbiAgICB9LCAxMDApO1xuICB9O1xuXG4gIENvbXBvbmVudC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRub2RlLnJlbW92ZSgpO1xuICB9O1xuXG4gIHJldHVybiBDb21wb25lbnQ7XG5cbn0pKCk7XG4iLCJ2YXIgQ29tcG9uZW50LCBEZWZlbmRlckNhcmRzLFxuICBiaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfSxcbiAgZXh0ZW5kID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChoYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9LFxuICBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbkNvbXBvbmVudCA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvY29tcG9uZW50Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGVmZW5kZXJDYXJkcyA9IChmdW5jdGlvbihzdXBlckNsYXNzKSB7XG4gIGV4dGVuZChEZWZlbmRlckNhcmRzLCBzdXBlckNsYXNzKTtcblxuICBmdW5jdGlvbiBEZWZlbmRlckNhcmRzKCRlbCwgZGF0YTEpIHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhMTtcbiAgICB0aGlzLnNob3dDYXJkID0gYmluZCh0aGlzLnNob3dDYXJkLCB0aGlzKTtcbiAgICBEZWZlbmRlckNhcmRzLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIGRhdGEpO1xuICAgIHRoaXMudG90YWxDYXJkc1ZpZXdlZCA9IDA7XG4gICAgdGhpcy4kbm9kZSA9ICQoamFkZVRlbXBsYXRlWydzbGlkZS11eC9jb21wb25lbnRzL2RlZmVuZGVyLWNhcmRzJ10oe30pKTtcbiAgICB0aGlzLnN1cGVySW5pdCgkZWwsIHRoaXMuJG5vZGUsIGRhdGEpO1xuICAgIHRoaXMuY3JlYXRlRGVmZW5kZXJzKHRoaXMuZGF0YS5kZWZlbmRlcnMpO1xuICB9XG5cbiAgRGVmZW5kZXJDYXJkcy5wcm90b3R5cGUuY3JlYXRlRGVmZW5kZXJzID0gZnVuY3Rpb24oZGVmZW5kZXJzKSB7XG4gICAgdmFyIGRhdGEsIGRlZmVuZGVyRGF0YSwgZGVmZW5kZXJJZCwgcmVzdWx0cztcbiAgICB0aGlzLmdob3N0cyA9IFtdO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGRlZmVuZGVySWQgaW4gZGVmZW5kZXJzKSB7XG4gICAgICBkZWZlbmRlckRhdGEgPSBkZWZlbmRlcnNbZGVmZW5kZXJJZF07XG4gICAgICBkYXRhID0ge1xuICAgICAgICBpZDogZGVmZW5kZXJJZCxcbiAgICAgICAgZXZlbnRzOiB7XG4gICAgICAgICAgY2xpY2s6IChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGlkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdGhpcy5zaG93Q2FyZChpZCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pKHRoaXMpXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB0aGlzLmdob3N0cy5wdXNoKGRlZmVuZGVySWQpO1xuICAgICAgcmVzdWx0cy5wdXNoKFB1YlN1Yi5wdWJsaXNoKCdnaG9zdHV4LmFkZCcsIGRhdGEpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgRGVmZW5kZXJDYXJkcy5wcm90b3R5cGUuc2hvd0NhcmQgPSBmdW5jdGlvbihkZWZlbmRlcklkKSB7XG4gICAgdmFyIGRhdGE7XG4gICAgdGhpcy50b3RhbENhcmRzVmlld2VkKys7XG4gICAgaWYgKHRoaXMuJGNhcmQgIT0gbnVsbCkge1xuICAgICAgdGhpcy5yZW1vdmVDdXJyZW50Q2FyZCgpO1xuICAgIH1cbiAgICBkYXRhID0gdGhpcy5kYXRhLmRlZmVuZGVyc1tkZWZlbmRlcklkXTtcbiAgICB0aGlzLiRjYXJkID0gJChqYWRlVGVtcGxhdGVbJ3NsaWRlLXV4L2NvbXBvbmVudHMvZGVmZW5kZXItY2FyZCddKGRhdGEpKTtcbiAgICBzaGFkb3dJY29uc0luc3RhbmNlLnN2Z1JlcGxhY2VXaXRoU3RyaW5nKHB4U3ZnSWNvblN0cmluZywgdGhpcy4kY2FyZCk7XG4gICAgJChcIi5nb3QtaXQtYnRuXCIsIHRoaXMuJGNhcmQpLm9uKFwiY2xpY2tcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgICByZXR1cm4gX3RoaXMucmVtb3ZlQ3VycmVudENhcmQoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIGlmICh0aGlzLnRvdGFsQ2FyZHNWaWV3ZWQgPT09IDIpIHtcbiAgICAgIFB1YlN1Yi5wdWJsaXNoKCdjb250aW51ZS5zaG93Jyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLiRub2RlLmFwcGVuZCh0aGlzLiRjYXJkKTtcbiAgfTtcblxuICBEZWZlbmRlckNhcmRzLnByb3RvdHlwZS5yZW1vdmVDdXJyZW50Q2FyZCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRjYXJkLnJlbW92ZSgpO1xuICB9O1xuXG4gIERlZmVuZGVyQ2FyZHMucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZ2hvc3RJZCwgaSwgbGVuLCByZWY7XG4gICAgcmVmID0gdGhpcy5naG9zdHM7XG4gICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBnaG9zdElkID0gcmVmW2ldO1xuICAgICAgUHViU3ViLnB1Ymxpc2goJ2dob3N0dXgucmVtb3ZlJywgZ2hvc3RJZCk7XG4gICAgfVxuICAgIHJldHVybiBEZWZlbmRlckNhcmRzLl9fc3VwZXJfXy5kZXN0cm95LmNhbGwodGhpcyk7XG4gIH07XG5cbiAgcmV0dXJuIERlZmVuZGVyQ2FyZHM7XG5cbn0pKENvbXBvbmVudCk7XG4iLCJ2YXIgQ29tcG9uZW50LCBEaWFsb2d1ZVBhZ2UsXG4gIGV4dGVuZCA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoaGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfSxcbiAgaGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5Db21wb25lbnQgPSByZXF1aXJlKCdzbGlkZS11eC9jb21wb25lbnRzL2NvbXBvbmVudCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERpYWxvZ3VlUGFnZSA9IChmdW5jdGlvbihzdXBlckNsYXNzKSB7XG4gIGV4dGVuZChEaWFsb2d1ZVBhZ2UsIHN1cGVyQ2xhc3MpO1xuXG4gIGZ1bmN0aW9uIERpYWxvZ3VlUGFnZSgkZWwsIGRhdGEpIHtcbiAgICBEaWFsb2d1ZVBhZ2UuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgZGF0YSk7XG4gICAgdGhpcy5jb25maWdEYXRhKGRhdGEpO1xuICAgIHRoaXMuJG5vZGUgPSAkKGphZGVUZW1wbGF0ZVsnc2xpZGUtdXgvY29tcG9uZW50cy9kaWFsb2d1ZS9kaWFsb2d1ZS1wYWdlcy9iYXNlJ10oZGF0YSkpO1xuICAgIHRoaXMuc3VwZXJJbml0KCRlbCwgdGhpcy4kbm9kZSwgZGF0YSk7XG4gICAgaWYgKGRhdGEudGhlbWUgIT0gbnVsbCkge1xuICAgICAgdGhpcy4kbm9kZS5hZGRDbGFzcyhkYXRhLnRoZW1lKTtcbiAgICB9XG4gICAgdGhpcy5jb25maWdCdXR0b25zKHRoaXMuJG5vZGUsIGRhdGEpO1xuICAgICQoXCJzdmdcIiwgdGhpcy4kbm9kZSkuZWFjaChmdW5jdGlvbihpLCBlbCkge1xuICAgICAgcmV0dXJuIGVsLnNldEF0dHJpYnV0ZShcInByZXNlcnZlQXNwZWN0UmF0aW9cIiwgXCJub25lXCIpO1xuICAgIH0pO1xuICAgICQoXCIuYnRuXCIpLm9uKCdjbGljaycsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdmFyIGJ0biwgaWQsIGosIGxlbiwgcmVmO1xuICAgICAgICBpZCA9IGUuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcbiAgICAgICAgcmVmID0gZGF0YS5idG5zO1xuICAgICAgICBmb3IgKGogPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgICAgICBidG4gPSByZWZbal07XG4gICAgICAgICAgaWYgKGJ0bi5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgIGFyaXN0b3RsZS5jb21tYW5kZXJbXCJkb1wiXShidG4uY2xpY2spO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH1cblxuICBEaWFsb2d1ZVBhZ2UucHJvdG90eXBlLmNvbmZpZ0RhdGEgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyIGJ0biwgY291bnQsIGosIGxlbiwgcmVmLCByZXN1bHRzO1xuICAgIGNvdW50ID0gMDtcbiAgICByZWYgPSBkYXRhLmJ0bnM7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoaiA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGogPCBsZW47IGorKykge1xuICAgICAgYnRuID0gcmVmW2pdO1xuICAgICAgcmVzdWx0cy5wdXNoKGJ0bi5pZCA9IFwiYnRuXCIgKyAoY291bnQrKykpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBEaWFsb2d1ZVBhZ2UucHJvdG90eXBlLmNvbmZpZ0J1dHRvbnMgPSBmdW5jdGlvbihlbCwgZGF0YSkge1xuICAgIGlmIChkYXRhLmJ0bkNvbmZpZyA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChkYXRhLmJ0bkNvbmZpZy53aWR0aCAhPSBudWxsKSB7XG4gICAgICAkKFwiLmJ0blwiLCBlbCkuY3NzKHtcbiAgICAgICAgd2lkdGg6IGRhdGEuYnRuQ29uZmlnLndpZHRoICsgXCJweFwiXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGRhdGEuYnRuQ29uZmlnLmhlaWdodCAhPSBudWxsKSB7XG4gICAgICAkKFwiLmJ0blwiLCBlbCkuY3NzKHtcbiAgICAgICAgaGVpZ2h0OiBkYXRhLmJ0bkNvbmZpZy5oZWlnaHQgKyBcInB4XCJcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZGF0YS5idG5Db25maWcuYm90dG9tICE9IG51bGwpIHtcbiAgICAgICQoXCIuYnRuLXdyYXBwZXJcIiwgZWwpLmNzcyh7XG4gICAgICAgIFwibWFyZ2luLWJvdHRvbVwiOiBkYXRhLmJ0bkNvbmZpZy5ib3R0b20gKyBcInB4XCJcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZGF0YS5idG5Db25maWcubGluZXMpIHtcbiAgICAgIHJldHVybiAkKFwiLmJ0bi13cmFwcGVyXCIpLmFkZENsYXNzKCdsaW5lcycpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gRGlhbG9ndWVQYWdlO1xuXG59KShDb21wb25lbnQpO1xuIiwidmFyIENvbXBvbmVudCwgRGlhbG9ndWUsXG4gIGV4dGVuZCA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoaGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfSxcbiAgaGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5Db21wb25lbnQgPSByZXF1aXJlKCdzbGlkZS11eC9jb21wb25lbnRzL2NvbXBvbmVudCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERpYWxvZ3VlID0gKGZ1bmN0aW9uKHN1cGVyQ2xhc3MpIHtcbiAgZXh0ZW5kKERpYWxvZ3VlLCBzdXBlckNsYXNzKTtcblxuICBmdW5jdGlvbiBEaWFsb2d1ZSgkZWwsIGRhdGEpIHtcbiAgICBEaWFsb2d1ZS5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCBkYXRhKTtcbiAgICB0aGlzLiRub2RlID0gJChqYWRlVGVtcGxhdGVbJ3NsaWRlLXV4L2NvbXBvbmVudHMvZGlhbG9ndWUvZGlhbG9ndWUnXShkYXRhKSk7XG4gICAgdGhpcy5zdXBlckluaXQoJGVsLCB0aGlzLiRub2RlLCBkYXRhKTtcbiAgICAkKCcuYnRuJywgdGhpcy4kbm9kZSkub24oXCJjbGlja1wiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGFyaXN0b3RsZS5jb21tYW5kZXJbXCJkb1wiXShkYXRhLmJ0bi5hY3Rpb24pO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH1cblxuICByZXR1cm4gRGlhbG9ndWU7XG5cbn0pKENvbXBvbmVudCk7XG4iLCJ2YXIgQ29tcG9uZW50LCBEdXRpZXMsIFNlcXVlbmNlLFxuICBleHRlbmQgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKGhhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH0sXG4gIGhhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuQ29tcG9uZW50ID0gcmVxdWlyZSgnc2xpZGUtdXgvY29tcG9uZW50cy9jb21wb25lbnQnKTtcblxuU2VxdWVuY2UgPSByZXF1aXJlKCdtaXNjL3NlcXVlbmNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRHV0aWVzID0gKGZ1bmN0aW9uKHN1cGVyQ2xhc3MpIHtcbiAgZXh0ZW5kKER1dGllcywgc3VwZXJDbGFzcyk7XG5cbiAgZnVuY3Rpb24gRHV0aWVzKCRlbCwgZGF0YSkge1xuICAgIER1dGllcy5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCBkYXRhKTtcbiAgICB0aGlzLm51bUFja25vd2xlZGdlZER1dGllcyA9IDA7XG4gICAgdGhpcy5hY2tub3dsZWRnZWREdXRpZXMgPSB7fTtcbiAgICB0aGlzLmdldERhdGEoZGF0YS5kZWZpbml0aW9uKTtcbiAgICB0aGlzLiRub2RlID0gJChcIjxkaXYgY2xhc3M9J2R1dGllcycvPlwiKTtcbiAgICB0aGlzLnN1cGVySW5pdCgkZWwsIHRoaXMuJG5vZGUsIGRhdGEpO1xuICB9XG5cbiAgRHV0aWVzLnByb3RvdHlwZS5idWlsZCA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2YXIgJGh0bWw7XG4gICAgdGhpcy5jcmVhdGVEdXR5SWRzKGRhdGEuZHV0aWVzKTtcbiAgICB0aGlzLmR1dGllcyA9IG5ldyBTZXF1ZW5jZShkYXRhLmR1dGllcyk7XG4gICAgJGh0bWwgPSAkKGphZGVUZW1wbGF0ZVsnc2xpZGUtdXgvY29tcG9uZW50cy9kdXRpZXMnXShkYXRhKSk7XG4gICAgdGhpcy4kbm9kZS5hcHBlbmQoJGh0bWwpO1xuICAgIHRoaXMuJGNvbnRlbnQgPSAkKFwiLmNvbnRlbnRcIiwgdGhpcy4kbm9kZSk7XG4gICAgc2hhZG93SWNvbnNJbnN0YW5jZS5zdmdSZXBsYWNlV2l0aFN0cmluZyhweFN2Z0ljb25TdHJpbmcsIHRoaXMuJG5vZGUpO1xuICAgIHRoaXMuJGR1dHlCdXR0b25zID0gJChcIi5kdXR5LWJ0blwiLCB0aGlzLiRub2RlKTtcbiAgICB0aGlzLiRkdXR5QnV0dG9ucy5vbihcImNsaWNrXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmFjdGl2YXRlRHV0eShlLmN1cnJlbnRUYXJnZXQsIGUuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2lkJykpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgcmV0dXJuICQodGhpcy4kZHV0eUJ1dHRvbnNbMF0pLnRyaWdnZXIoXCJjbGlja1wiKTtcbiAgfTtcblxuICBEdXRpZXMucHJvdG90eXBlLnNldFVzZXJIdG1sID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciAkdXNlckNvbnRlbnQ7XG4gICAgdGhpcy4kY29udGVudC5lbXB0eSgpO1xuICAgICR1c2VyQ29udGVudCA9ICQoamFkZVRlbXBsYXRlWydzbGlkZS11eC9jb21wb25lbnRzL2R1dHktZGV0YWlscyddKGRhdGEpKTtcbiAgICB0aGlzLiRjb250ZW50LmFwcGVuZCgkdXNlckNvbnRlbnQpO1xuICAgIHNoYWRvd0ljb25zSW5zdGFuY2Uuc3ZnUmVwbGFjZVdpdGhTdHJpbmcocHhTdmdJY29uU3RyaW5nLCB0aGlzLiRub2RlKTtcbiAgICByZXR1cm4gJChcIiNhY2tub3dsZWRnZVwiLCAkdXNlckNvbnRlbnQpLm9uKFwiY2xpY2tcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5kdXR5QWNrbm93bGVkZ2VkKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgfTtcblxuICBEdXRpZXMucHJvdG90eXBlLmR1dHlBY2tub3dsZWRnZWQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZHV0eSwgaSwgbGVuLCByZWY7XG4gICAgaWYgKHRoaXMuYWNrbm93bGVkZ2VkRHV0aWVzW3RoaXMuZHV0aWVzLmN1cnJlbnRJdGVtKCkuaWRdID09IG51bGwpIHtcbiAgICAgIHRoaXMubnVtQWNrbm93bGVkZ2VkRHV0aWVzKys7XG4gICAgICB0aGlzLmFja25vd2xlZGdlZER1dGllc1t0aGlzLmR1dGllcy5jdXJyZW50SXRlbSgpLmlkXSA9IFwiXCI7XG4gICAgICB0aGlzLiRjdXJyZW50QWN0aXZlQnV0dG9uLmFkZENsYXNzKFwiY29tcGxldGVcIik7XG4gICAgfVxuICAgIGlmICh0aGlzLm51bUFja25vd2xlZGdlZER1dGllcyA9PT0gdGhpcy5kdXRpZXMudG90YWxJdGVtcykge1xuICAgICAgcmV0dXJuIFB1YlN1Yi5wdWJsaXNoKCdjb250aW51ZS5zaG93Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlZiA9IHRoaXMuZHV0aWVzLml0ZW1zO1xuICAgICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGR1dHkgPSByZWZbaV07XG4gICAgICAgIGlmICh0aGlzLmFja25vd2xlZGdlZER1dGllc1tkdXR5LmlkXSA9PSBudWxsKSB7XG4gICAgICAgICAgJChcIiNcIiArIGR1dHkuaWQsIHRoaXMuJG5vZGUpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIER1dGllcy5wcm90b3R5cGUuY3JlYXRlRHV0eUlkcyA9IGZ1bmN0aW9uKGR1dGllcykge1xuICAgIHZhciBjb3VudCwgZHV0eSwgaSwgbGVuLCByZXN1bHRzO1xuICAgIGNvdW50ID0gMDtcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChpID0gMCwgbGVuID0gZHV0aWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBkdXR5ID0gZHV0aWVzW2ldO1xuICAgICAgcmVzdWx0cy5wdXNoKGR1dHkuaWQgPSBcImR1dHlcIiArIChjb3VudCsrKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIER1dGllcy5wcm90b3R5cGUuYWN0aXZhdGVEdXR5ID0gZnVuY3Rpb24oZWwsIGlkKSB7XG4gICAgdGhpcy5kdXRpZXMuYWN0aXZhdGVJdGVtQnlQYXJhbSgnaWQnLCBpZCk7XG4gICAgdGhpcy4kY3VycmVudEFjdGl2ZUJ1dHRvbiA9ICQoZWwpO1xuICAgIHRoaXMuJGR1dHlCdXR0b25zLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgIHRoaXMuJGN1cnJlbnRBY3RpdmVCdXR0b24uYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgcmV0dXJuIHRoaXMuc2V0VXNlckh0bWwodGhpcy5kdXRpZXMuY3VycmVudEl0ZW0oKSk7XG4gIH07XG5cbiAgRHV0aWVzLnByb3RvdHlwZS5nZXREYXRhID0gZnVuY3Rpb24oanNvbkZpbGUpIHtcbiAgICByZXR1cm4gdGhpcy5sb2FkSnNvbihhcmlzdG90bGUuZ2V0QXNzZXRQYXRoKGpzb25GaWxlKSwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oanNvbikge1xuICAgICAgICB2YXIgb2JqO1xuICAgICAgICBvYmogPSBKU09OLnBhcnNlKGpzb24ucmVwbGFjZSgvKFxcclxcbnxcXG58XFxyKS9nbSwgXCJcIikpO1xuICAgICAgICByZXR1cm4gX3RoaXMuYnVpbGQob2JqKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9O1xuXG4gIER1dGllcy5wcm90b3R5cGUubG9hZEpzb24gPSBmdW5jdGlvbihwYXRoLCBvbkNvbXBsZXRlKSB7XG4gICAgdmFyIHhvYmo7XG4gICAgeG9iaiA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHhvYmoub3ZlcnJpZGVNaW1lVHlwZSgnYXBwbGljYXRpb24vanNvbicpO1xuICAgIHhvYmoub3BlbignR0VUJywgcGF0aCwgdHJ1ZSk7XG4gICAgeG9iai5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHhvYmoucmVhZHlTdGF0ZSA9PT0gNCAmJiB4b2JqLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgcmV0dXJuIG9uQ29tcGxldGUoeG9iai5yZXNwb25zZVRleHQpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pKHRoaXMpO1xuICAgIHJldHVybiB4b2JqLnNlbmQobnVsbCk7XG4gIH07XG5cbiAgcmV0dXJuIER1dGllcztcblxufSkoQ29tcG9uZW50KTtcbiIsInZhciBDb21wb25lbnQsIEVwaXNvZGVJbnRybyxcbiAgZXh0ZW5kID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChoYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9LFxuICBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbkNvbXBvbmVudCA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvY29tcG9uZW50Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRXBpc29kZUludHJvID0gKGZ1bmN0aW9uKHN1cGVyQ2xhc3MpIHtcbiAgZXh0ZW5kKEVwaXNvZGVJbnRybywgc3VwZXJDbGFzcyk7XG5cbiAgZnVuY3Rpb24gRXBpc29kZUludHJvKCRlbCwgZGF0YSkge1xuICAgIEVwaXNvZGVJbnRyby5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCBkYXRhKTtcbiAgICB0aGlzLiRub2RlID0gJChqYWRlVGVtcGxhdGVbJ3NsaWRlLXV4L2NvbXBvbmVudHMvZXBpc29kZS1pbnRybyddKGRhdGEpKTtcbiAgICB0aGlzLnN1cGVySW5pdCgkZWwsIHRoaXMuJG5vZGUsIGRhdGEpO1xuICB9XG5cbiAgcmV0dXJuIEVwaXNvZGVJbnRybztcblxufSkoQ29tcG9uZW50KTtcbiIsInZhciBDb21wb25lbnQsIEVwaXNvZGVPdXRybyxcbiAgZXh0ZW5kID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChoYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9LFxuICBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbkNvbXBvbmVudCA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvY29tcG9uZW50Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRXBpc29kZU91dHJvID0gKGZ1bmN0aW9uKHN1cGVyQ2xhc3MpIHtcbiAgZXh0ZW5kKEVwaXNvZGVPdXRybywgc3VwZXJDbGFzcyk7XG5cbiAgZnVuY3Rpb24gRXBpc29kZU91dHJvKCRlbCwgZGF0YSkge1xuICAgIEVwaXNvZGVPdXRyby5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCBkYXRhKTtcbiAgICB0aGlzLiRub2RlID0gJChqYWRlVGVtcGxhdGVbJ3NsaWRlLXV4L2NvbXBvbmVudHMvZXBpc29kZS1vdXRybyddKGRhdGEpKTtcbiAgICB0aGlzLnN1cGVySW5pdCgkZWwsIHRoaXMuJG5vZGUsIGRhdGEpO1xuICB9XG5cbiAgcmV0dXJuIEVwaXNvZGVPdXRybztcblxufSkoQ29tcG9uZW50KTtcbiIsInZhciBDb21wb25lbnQsIEV4cGxvcmVDYXJkcywgU2VxdWVuY2UsXG4gIGJpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9LFxuICBleHRlbmQgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKGhhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH0sXG4gIGhhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuQ29tcG9uZW50ID0gcmVxdWlyZSgnc2xpZGUtdXgvY29tcG9uZW50cy9jb21wb25lbnQnKTtcblxuU2VxdWVuY2UgPSByZXF1aXJlKCdtaXNjL3NlcXVlbmNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRXhwbG9yZUNhcmRzID0gKGZ1bmN0aW9uKHN1cGVyQ2xhc3MpIHtcbiAgZXh0ZW5kKEV4cGxvcmVDYXJkcywgc3VwZXJDbGFzcyk7XG5cbiAgZnVuY3Rpb24gRXhwbG9yZUNhcmRzKCRlbCwgZGF0YTEpIHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhMTtcbiAgICB0aGlzLnNob3dDYXJkID0gYmluZCh0aGlzLnNob3dDYXJkLCB0aGlzKTtcbiAgICBFeHBsb3JlQ2FyZHMuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgdGhpcy5kYXRhKTtcbiAgICB0aGlzLnRvdGFsQ2FyZHNWaWV3ZWQgPSAwO1xuICAgIHRoaXMucmVxdWlyZWRDYXJkVmlld3MgPSB0aGlzLmRhdGFbXCJyZXF1aXJlZC12aWV3c1wiXTtcbiAgICB0aGlzLiRub2RlID0gJCgkLnBhcnNlSFRNTChcIjxkaXY+PC9kaXY+XCIpKTtcbiAgICB0aGlzLmNhcmRzID0gbmV3IFNlcXVlbmNlKHRoaXMuZGF0YS5jYXJkcyk7XG4gICAgdGhpcy5jcmVhdGVDYXJkR2hvc3RzKHRoaXMuZGF0YS5jYXJkcyk7XG4gICAgdGhpcy5zdXBlckluaXQoJGVsLCB0aGlzLiRub2RlLCB0aGlzLmRhdGEpO1xuICB9XG5cbiAgRXhwbG9yZUNhcmRzLnByb3RvdHlwZS5jcmVhdGVDYXJkR2hvc3RzID0gZnVuY3Rpb24oY2FyZHMpIHtcbiAgICB2YXIgY2FyZERhdGEsIGRhdGEsIGksIGxlbiwgcmVzdWx0cztcbiAgICB0aGlzLmdob3N0cyA9IFtdO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGkgPSAwLCBsZW4gPSBjYXJkcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgY2FyZERhdGEgPSBjYXJkc1tpXTtcbiAgICAgIGRhdGEgPSB7XG4gICAgICAgIGlkOiBjYXJkRGF0YS5oaXQsXG4gICAgICAgIGV2ZW50czoge1xuICAgICAgICAgIGNsaWNrOiAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihpZCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuc2hvd0NhcmQoaWQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KSh0aGlzKVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgdGhpcy5naG9zdHMucHVzaChjYXJkRGF0YS5oaXQpO1xuICAgICAgcmVzdWx0cy5wdXNoKFB1YlN1Yi5wdWJsaXNoKCdnaG9zdHV4LmFkZCcsIGRhdGEpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgRXhwbG9yZUNhcmRzLnByb3RvdHlwZS5zaG93Q2FyZCA9IGZ1bmN0aW9uKGNhcmRJZCkge1xuICAgIHZhciBkYXRhO1xuICAgIHRoaXMudG90YWxDYXJkc1ZpZXdlZCsrO1xuICAgIGlmICh0aGlzLiRjdXJyZW50Q2FyZCAhPSBudWxsKSB7XG4gICAgICB0aGlzLnJlbW92ZUN1cnJlbnRDYXJkKCk7XG4gICAgfVxuICAgIGRhdGEgPSB0aGlzLmNhcmRzLmdldEl0ZW1CeVBhcmFtKCdoaXQnLCBjYXJkSWQpO1xuICAgIHRoaXMuJGN1cnJlbnRDYXJkID0gJChqYWRlVGVtcGxhdGVbXCJzbGlkZS11eC9jb21wb25lbnRzL2NhcmRzL1wiICsgdGhpcy5kYXRhLnRlbXBsYXRlXShkYXRhKSk7XG4gICAgc2hhZG93SWNvbnNJbnN0YW5jZS5zdmdSZXBsYWNlV2l0aFN0cmluZyhweFN2Z0ljb25TdHJpbmcsIHRoaXMuJGN1cnJlbnRDYXJkKTtcbiAgICAkKFwiLmdvdC1pdC1idG5cIiwgdGhpcy4kY3VycmVudENhcmQpLm9uKFwiY2xpY2tcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgICByZXR1cm4gX3RoaXMucmVtb3ZlQ3VycmVudENhcmQoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIGlmICh0aGlzLnRvdGFsQ2FyZHNWaWV3ZWQgPj0gdGhpcy5yZXF1aXJlZENhcmRWaWV3cykge1xuICAgICAgUHViU3ViLnB1Ymxpc2goJ2NvbnRpbnVlLnNob3cnKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuJG5vZGUuYXBwZW5kKHRoaXMuJGN1cnJlbnRDYXJkKTtcbiAgfTtcblxuICBFeHBsb3JlQ2FyZHMucHJvdG90eXBlLnJlbW92ZUN1cnJlbnRDYXJkID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJGN1cnJlbnRDYXJkLnJlbW92ZSgpO1xuICB9O1xuXG4gIEV4cGxvcmVDYXJkcy5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBnaG9zdElkLCBpLCBsZW4sIHJlZjtcbiAgICByZWYgPSB0aGlzLmdob3N0cztcbiAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGdob3N0SWQgPSByZWZbaV07XG4gICAgICBQdWJTdWIucHVibGlzaCgnZ2hvc3R1eC5yZW1vdmUnLCBnaG9zdElkKTtcbiAgICB9XG4gICAgcmV0dXJuIEV4cGxvcmVDYXJkcy5fX3N1cGVyX18uZGVzdHJveS5jYWxsKHRoaXMpO1xuICB9O1xuXG4gIHJldHVybiBFeHBsb3JlQ2FyZHM7XG5cbn0pKENvbXBvbmVudCk7XG4iLCJ2YXIgQ29tcG9uZW50LCBHaG9zdFVYLFxuICBleHRlbmQgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKGhhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH0sXG4gIGhhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuQ29tcG9uZW50ID0gcmVxdWlyZSgnc2xpZGUtdXgvY29tcG9uZW50cy9jb21wb25lbnQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBHaG9zdFVYID0gKGZ1bmN0aW9uKHN1cGVyQ2xhc3MpIHtcbiAgZXh0ZW5kKEdob3N0VVgsIHN1cGVyQ2xhc3MpO1xuXG4gIGZ1bmN0aW9uIEdob3N0VVgoJGVsLCBkYXRhKSB7XG4gICAgR2hvc3RVWC5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCBkYXRhKTtcbiAgICB0aGlzLiRub2RlID0gJChqYWRlVGVtcGxhdGVbJ3NsaWRlLXV4L2NvbXBvbmVudHMvZ2hvc3QtdXgnXSh7fSkpO1xuICAgIHRoaXMuc3VwZXJJbml0KCRlbCwgdGhpcy4kbm9kZSwgZGF0YSk7XG4gICAgdGhpcy5jcmVhdGVUYXJnZXRzKGRhdGEudGFyZ2V0cyk7XG4gIH1cblxuICBHaG9zdFVYLnByb3RvdHlwZS5jcmVhdGVUYXJnZXRzID0gZnVuY3Rpb24odGFyZ2V0cykge1xuICAgIHZhciAkZ2hvc3RJdGVtLCAkdGFyZ2V0LCBpLCBsZW4sIHBvcywgcmVzdWx0cywgdGFsLCB0YXJnZXQsIHdpZDtcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChpID0gMCwgbGVuID0gdGFyZ2V0cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgdGFyZ2V0ID0gdGFyZ2V0c1tpXTtcbiAgICAgICR0YXJnZXQgPSAkKFwiI1wiICsgdGFyZ2V0LmlkKTtcbiAgICAgIHBvcyA9ICR0YXJnZXQucG9zaXRpb24oKTtcbiAgICAgIHdpZCA9ICR0YXJnZXRbMF0uZ2V0QkJveCgpLndpZHRoO1xuICAgICAgdGFsID0gJHRhcmdldFswXS5nZXRCQm94KCkuaGVpZ2h0O1xuICAgICAgJGdob3N0SXRlbSA9ICQoamFkZVRlbXBsYXRlWydzbGlkZS11eC9jb21wb25lbnRzL2dob3N0LWl0ZW0nXSh7XG4gICAgICAgIHdpZHRoOiB3aWQsXG4gICAgICAgIGhlaWdodDogdGFsLFxuICAgICAgICBsZWZ0OiBwb3MubGVmdCxcbiAgICAgICAgdG9wOiBwb3MudG9wXG4gICAgICB9KSk7XG4gICAgICB0aGlzLiRub2RlLmFwcGVuZCgkZ2hvc3RJdGVtKTtcbiAgICAgIHRoaXMuc2V0RXZlbnRIYW5kbGVyKCRnaG9zdEl0ZW0sICdjbGljaycsIHRhcmdldC5jbGljayk7XG4gICAgICB0aGlzLnNldEV2ZW50SGFuZGxlcigkZ2hvc3RJdGVtLCAnbW91c2VvdmVyJywgdGFyZ2V0Lm92ZXIsIDAuNCk7XG4gICAgICByZXN1bHRzLnB1c2godGhpcy5zZXRFdmVudEhhbmRsZXIoJGdob3N0SXRlbSwgJ21vdXNlb3V0JywgdGFyZ2V0Lm91dCkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBHaG9zdFVYLnByb3RvdHlwZS5zZXRFdmVudEhhbmRsZXIgPSBmdW5jdGlvbigkaXRlbSwgZXZlbnQsIGFjdGlvbiwgb3BhY2l0eSkge1xuICAgIGlmIChvcGFjaXR5ID09IG51bGwpIHtcbiAgICAgIG9wYWNpdHkgPSAwO1xuICAgIH1cbiAgICByZXR1cm4gJGl0ZW0ub24oZXZlbnQsIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGFyaXN0b3RsZS5jb21tYW5kZXJbXCJkb1wiXShhY3Rpb24pO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBHaG9zdFVYO1xuXG59KShDb21wb25lbnQpO1xuIiwidmFyIENvbXBvbmVudCwgUGVyc29uYWxJbmZvSW50cm8sXG4gIGV4dGVuZCA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoaGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfSxcbiAgaGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5Db21wb25lbnQgPSByZXF1aXJlKCdzbGlkZS11eC9jb21wb25lbnRzL2NvbXBvbmVudCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBlcnNvbmFsSW5mb0ludHJvID0gKGZ1bmN0aW9uKHN1cGVyQ2xhc3MpIHtcbiAgZXh0ZW5kKFBlcnNvbmFsSW5mb0ludHJvLCBzdXBlckNsYXNzKTtcblxuICBmdW5jdGlvbiBQZXJzb25hbEluZm9JbnRybygkZWwsIGRhdGEpIHtcbiAgICBQZXJzb25hbEluZm9JbnRyby5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCBkYXRhKTtcbiAgICBkYXRhLm9yZ2FuaXphdGlvbiA9IFwiQXJpem9uYSBQdWJsaWMgU2VydmljZVwiO1xuICAgIGRhdGEubmFtZSA9IGFyaXN0b3RsZS5sbXNQcm94eS5uYW1lO1xuICAgIHRoaXMuJG5vZGUgPSAkKGphZGVUZW1wbGF0ZVsnc2xpZGUtdXgvY29tcG9uZW50cy9wZXJzb25hbC1pbmZvLWludHJvJ10oZGF0YSkpO1xuICAgIHRoaXMuc3VwZXJJbml0KCRlbCwgdGhpcy4kbm9kZSwgZGF0YSk7XG4gIH1cblxuICByZXR1cm4gUGVyc29uYWxJbmZvSW50cm87XG5cbn0pKENvbXBvbmVudCk7XG4iLCJ2YXIgUXVlc3Rpb24sXG4gIGJpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFF1ZXN0aW9uID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBRdWVzdGlvbigkcGFyZW50LCBkYXRhLCBxdWVzdGlvblZhbHVlLCBhbnN3ZXJDYWxsYmFjaykge1xuICAgIHRoaXMuJHBhcmVudCA9ICRwYXJlbnQ7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB0aGlzLnF1ZXN0aW9uVmFsdWUgPSBxdWVzdGlvblZhbHVlICE9IG51bGwgPyBxdWVzdGlvblZhbHVlIDogMTIwO1xuICAgIHRoaXMuYW5zd2VyQ2FsbGJhY2sgPSBhbnN3ZXJDYWxsYmFjaztcbiAgICB0aGlzLm9uQW5zd2VyQ2xpY2sgPSBiaW5kKHRoaXMub25BbnN3ZXJDbGljaywgdGhpcyk7XG4gICAgdGhpcy53cm9uZ0d1ZXNzZXMgPSAwO1xuICAgIHRoaXMuY291bnRXcm9uZ0Fuc3dlcnMoKTtcbiAgfVxuXG4gIFF1ZXN0aW9uLnByb3RvdHlwZS5idWlsZCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuJG5vZGUgPSAkKGphZGVUZW1wbGF0ZVsnc2xpZGUtdXgvY29tcG9uZW50cy9xdWl6L3F1ZXN0aW9uJ10odGhpcy5kYXRhKSk7XG4gICAgdGhpcy4kcGFyZW50LnByZXBlbmQodGhpcy4kbm9kZSk7XG4gICAgc2hhZG93SWNvbnNJbnN0YW5jZS5zdmdSZXBsYWNlV2l0aFN0cmluZyhweFN2Z0ljb25TdHJpbmcsIHRoaXMuJG5vZGUpO1xuICAgIHJldHVybiAkKFwiLmFuc3dlci13cmFwcGVyXCIsIHRoaXMuJG5vZGUpLm9uKFwiY2xpY2tcIiwgdGhpcy5vbkFuc3dlckNsaWNrKTtcbiAgfTtcblxuICBRdWVzdGlvbi5wcm90b3R5cGUub25BbnN3ZXJDbGljayA9IGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAodGhpcy5ndWVzc2VkUmlnaHQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgJChlLmN1cnJlbnRUYXJnZXQpLmFkZENsYXNzKFwiZmxpcHBlZFwiKTtcbiAgICB0aGlzLmd1ZXNzZWRSaWdodCA9ICQoXCIucmVzcG9uc2VcIiwgZS5jdXJyZW50VGFyZ2V0KS5oYXNDbGFzcygncmlnaHQnKTtcbiAgICBpZiAoIXRoaXMuZ3Vlc3NlZFJpZ2h0KSB7XG4gICAgICB0aGlzLndyb25nR3Vlc3NlcysrO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5hbnN3ZXJDYWxsYmFjayh0aGlzLmd1ZXNzZWRSaWdodCk7XG4gIH07XG5cbiAgUXVlc3Rpb24ucHJvdG90eXBlLmNvdW50V3JvbmdBbnN3ZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFuc3dlciwgaSwgbGVuLCByZWYsIHJlc3VsdHM7XG4gICAgdGhpcy50b3RhbFdyb25nQW5zd2VycyA9IDA7XG4gICAgcmVmID0gdGhpcy5kYXRhLmFuc3dlcnM7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgYW5zd2VyID0gcmVmW2ldO1xuICAgICAgaWYgKCFhbnN3ZXIuYykge1xuICAgICAgICByZXN1bHRzLnB1c2godGhpcy50b3RhbFdyb25nQW5zd2VycysrKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdHMucHVzaCh2b2lkIDApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBRdWVzdGlvbi5wcm90b3R5cGUuaXNQZXJmZWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMud3JvbmdHdWVzc2VzID09PSAwO1xuICB9O1xuXG4gIFF1ZXN0aW9uLnByb3RvdHlwZS5nZXROYW1lID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMubmFtZSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gXCJRdWVzaXRvbiBcIiArICh0aGlzLmRhdGEuaW5kZXggKyAxKTtcbiAgICB9XG4gIH07XG5cbiAgUXVlc3Rpb24ucHJvdG90eXBlLmdldFNjb3JlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICh0aGlzLnBvaW50c0Vhcm5lZCgpKSArIFwiL1wiICsgdGhpcy5xdWVzdGlvblZhbHVlO1xuICB9O1xuXG4gIFF1ZXN0aW9uLnByb3RvdHlwZS5wb2ludHNFYXJuZWQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgd3JvbmdHdWVzc1ZhbHVlO1xuICAgIHdyb25nR3Vlc3NWYWx1ZSA9ICh0aGlzLnF1ZXN0aW9uVmFsdWUgLyAyKSAvIHRoaXMudG90YWxXcm9uZ0Fuc3dlcnM7XG4gICAgdGhpcy5xdWVzdGlvblZhbHVlIC0gKHdyb25nR3Vlc3NWYWx1ZSAqIHRoaXMud3JvbmdHdWVzc2VzKTtcbiAgICByZXR1cm4gdGhpcy5xdWVzdGlvblZhbHVlIC0gKHdyb25nR3Vlc3NWYWx1ZSAqIHRoaXMud3JvbmdHdWVzc2VzKTtcbiAgfTtcblxuICBRdWVzdGlvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRub2RlLnJlbW92ZSgpO1xuICB9O1xuXG4gIHJldHVybiBRdWVzdGlvbjtcblxufSkoKTtcbiIsInZhciBDb21wb25lbnQsIFF1ZXN0aW9uLCBRdWl6LCBTZXF1ZW5jZSxcbiAgYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH0sXG4gIGV4dGVuZCA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoaGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfSxcbiAgaGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5Db21wb25lbnQgPSByZXF1aXJlKCdzbGlkZS11eC9jb21wb25lbnRzL2NvbXBvbmVudCcpO1xuXG5RdWVzdGlvbiA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvcXVpei9xdWVzdGlvbicpO1xuXG5TZXF1ZW5jZSA9IHJlcXVpcmUoJ21pc2Mvc2VxdWVuY2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBRdWl6ID0gKGZ1bmN0aW9uKHN1cGVyQ2xhc3MpIHtcbiAgZXh0ZW5kKFF1aXosIHN1cGVyQ2xhc3MpO1xuXG4gIGZ1bmN0aW9uIFF1aXooJGVsMSwgZGF0YTEpIHtcbiAgICB0aGlzLiRlbCA9ICRlbDE7XG4gICAgdGhpcy5kYXRhID0gZGF0YTE7XG4gICAgdGhpcy5vbk5leHRDbGljayA9IGJpbmQodGhpcy5vbk5leHRDbGljaywgdGhpcyk7XG4gICAgdGhpcy5vblF1ZXN0aW9uQW5zd2VyZWQgPSBiaW5kKHRoaXMub25RdWVzdGlvbkFuc3dlcmVkLCB0aGlzKTtcbiAgICBRdWl6Ll9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIHRoaXMuZGF0YSk7XG4gICAgUHViU3ViLnB1Ymxpc2goXCJjaHJvbWUuaGlkZVwiKTtcbiAgICBQdWJTdWIucHVibGlzaChcImN0YW5sZWUuaGlkZVwiKTtcbiAgICB0aGlzLmJ1aWxkKHRoaXMuZGF0YSk7XG4gICAgdGhpcy5zdXBlckluaXQodGhpcy4kZWwsIHRoaXMuJG5vZGUsIHRoaXMuZGF0YSk7XG4gIH1cblxuICBRdWl6LnByb3RvdHlwZS5idWlsZCA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB0aGlzLiRub2RlID0gJChqYWRlVGVtcGxhdGVbJ3NsaWRlLXV4L2NvbXBvbmVudHMvcXVpei9xdWl6J10oZGF0YSkpO1xuICAgIHRoaXMuY3JlYXRlUXVpeigkKFwiLnF1ZXN0aW9uc1wiLCB0aGlzLiRub2RlKSwgZGF0YSk7XG4gICAgdGhpcy4kbmV4dEJ0biA9ICQoXCIubmV4dC1idG5cIiwgdGhpcy4kbm9kZSk7XG4gICAgdGhpcy4kbmV4dEJ0bi5vbihcImNsaWNrXCIsIHRoaXMub25OZXh0Q2xpY2spO1xuICAgIHJldHVybiB0aGlzLmhpZGVOZXh0KCk7XG4gIH07XG5cbiAgUXVpei5wcm90b3R5cGUuY3JlYXRlUXVpeiA9IGZ1bmN0aW9uKCRlbCwgZGF0YSkge1xuICAgIHZhciBpLCBqLCBsZW4xLCBxdWVzdGlvbkRhdGEsIHF1ZXN0aW9uVmFsdWUsIHF1ZXN0aW9ucywgcmVmO1xuICAgIHF1ZXN0aW9ucyA9IFtdO1xuICAgIHF1ZXN0aW9uVmFsdWUgPSAxMjA7XG4gICAgcmVmID0gZGF0YS5xdWVzdGlvbnM7XG4gICAgZm9yIChpID0gaiA9IDAsIGxlbjEgPSByZWYubGVuZ3RoOyBqIDwgbGVuMTsgaSA9ICsraikge1xuICAgICAgcXVlc3Rpb25EYXRhID0gcmVmW2ldO1xuICAgICAgcXVlc3Rpb25EYXRhLmluZGV4ID0gaTtcbiAgICAgIHF1ZXN0aW9ucy5wdXNoKG5ldyBRdWVzdGlvbigkZWwsIHF1ZXN0aW9uRGF0YSwgcXVlc3Rpb25WYWx1ZSwgdGhpcy5vblF1ZXN0aW9uQW5zd2VyZWQpKTtcbiAgICB9XG4gICAgdGhpcy5xdWVzdGlvbnMgPSBuZXcgU2VxdWVuY2UocXVlc3Rpb25zKTtcbiAgICByZXR1cm4gdGhpcy5zaG93Q3VycmVudFF1ZXN0aW9uKCk7XG4gIH07XG5cbiAgUXVpei5wcm90b3R5cGUuc2hvd0N1cnJlbnRRdWVzdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuY3VycmVudFF1ZXN0aW9uID0gdGhpcy5xdWVzdGlvbnMuY3VycmVudEl0ZW0oKTtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50UXVlc3Rpb24uYnVpbGQoKTtcbiAgfTtcblxuICBRdWl6LnByb3RvdHlwZS5vblF1ZXN0aW9uQW5zd2VyZWQgPSBmdW5jdGlvbihnb3RJdFJpZ2h0KSB7XG4gICAgaWYgKGdvdEl0UmlnaHQpIHtcbiAgICAgIHJldHVybiB0aGlzLnNob3dOZXh0KCk7XG4gICAgfVxuICB9O1xuXG4gIFF1aXoucHJvdG90eXBlLm9uTmV4dENsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5oaWRlTmV4dCgpO1xuICAgIHRoaXMuY3VycmVudFF1ZXN0aW9uLmRlc3Ryb3koKTtcbiAgICBpZiAodGhpcy5xdWVzdGlvbnMuaXNBdExhc3RJdGVtKCkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNob3dSZXN1bHRzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucXVlc3Rpb25zLm5leHQoKTtcbiAgICAgIHJldHVybiB0aGlzLnNob3dDdXJyZW50UXVlc3Rpb24oKTtcbiAgICB9XG4gIH07XG5cbiAgUXVpei5wcm90b3R5cGUuc2hvd05leHQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kbmV4dEJ0bi5yZW1vdmVDbGFzcyhcImhpZGRlblwiKTtcbiAgfTtcblxuICBRdWl6LnByb3RvdHlwZS5oaWRlTmV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRuZXh0QnRuLmFkZENsYXNzKFwiaGlkZGVuXCIpO1xuICB9O1xuXG4gIFF1aXoucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy4kbm9kZS5yZW1vdmUoKTtcbiAgICB0aGlzLmJ1aWxkKHRoaXMuZGF0YSk7XG4gICAgdGhpcy4kZWwuYXBwZW5kKHRoaXMuJG5vZGUpO1xuICAgIHJldHVybiBzaGFkb3dJY29uc0luc3RhbmNlLnN2Z1JlcGxhY2VXaXRoU3RyaW5nKHB4U3ZnSWNvblN0cmluZywgdGhpcy4kbm9kZSk7XG4gIH07XG5cbiAgUXVpei5wcm90b3R5cGUuc2hvd1Jlc3VsdHMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZGF0YTtcbiAgICB0aGlzLiRub2RlLnJlbW92ZSgpO1xuICAgIGRhdGEgPSB0aGlzLmdldFJlc3VsdHMoKTtcbiAgICB0aGlzLiRub2RlID0gJChqYWRlVGVtcGxhdGVbJ3NsaWRlLXV4L2NvbXBvbmVudHMvcXVpei9xdWl6LXJlc3VsdHMnXSh0aGlzLmdldFJlc3VsdHMoKSkpO1xuICAgIHNoYWRvd0ljb25zSW5zdGFuY2Uuc3ZnUmVwbGFjZVdpdGhTdHJpbmcocHhTdmdJY29uU3RyaW5nLCB0aGlzLiRub2RlKTtcbiAgICAkKFwiI2NvbnRpbnVlXCIsIHRoaXMuJG5vZGUpLm9uKFwiY2xpY2tcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBQdWJTdWIucHVibGlzaCgnc2xpZGVzLm5leHQtc2xpZGUnKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHJldHVybiB0aGlzLiRlbC5hcHBlbmQodGhpcy4kbm9kZSk7XG4gIH07XG5cbiAgUXVpei5wcm90b3R5cGUuZ2V0UmVzdWx0cyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhbnN3ZXJzLCBqLCBsZW4xLCBvYmosIHF1ZXN0aW9uLCByZWYsIHJlZjEsIHRvdGFsUG9pbnRzRWFybmVkLCB0b3RhbFBvaW50c1Bvc3NpYmxlO1xuICAgIG9iaiA9IHt9O1xuICAgIG9iai5lcGlzb2RlTnVtYmVyID0gMjtcbiAgICB0b3RhbFBvaW50c1Bvc3NpYmxlID0gMDtcbiAgICB0b3RhbFBvaW50c0Vhcm5lZCA9IDA7XG4gICAgYW5zd2VycyA9IFtdO1xuICAgIHJlZiA9IHRoaXMucXVlc3Rpb25zLml0ZW1zO1xuICAgIGZvciAoaiA9IDAsIGxlbjEgPSByZWYubGVuZ3RoOyBqIDwgbGVuMTsgaisrKSB7XG4gICAgICBxdWVzdGlvbiA9IHJlZltqXTtcbiAgICAgIHRvdGFsUG9pbnRzUG9zc2libGUgKz0gcXVlc3Rpb24ucXVlc3Rpb25WYWx1ZTtcbiAgICAgIHRvdGFsUG9pbnRzRWFybmVkICs9IHF1ZXN0aW9uLnBvaW50c0Vhcm5lZCgpO1xuICAgICAgYW5zd2Vycy5wdXNoKHtcbiAgICAgICAgbmFtZTogcXVlc3Rpb24uZ2V0TmFtZSgpLFxuICAgICAgICBzY29yZTogcXVlc3Rpb24uZ2V0U2NvcmUoKSxcbiAgICAgICAgaXNQZXJmZWN0OiBxdWVzdGlvbi5pc1BlcmZlY3QoKVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJlZjEgPSB0aGlzLnNwbGl0QXJyYXlJbkhhbGYoYW5zd2VycyksIG9iai5hbnN3ZXJzMSA9IHJlZjFbMF0sIG9iai5hbnN3ZXJzMiA9IHJlZjFbMV07XG4gICAgb2JqLnNjb3JlID0gdG90YWxQb2ludHNFYXJuZWQgKyBcIiAvIFwiICsgdG90YWxQb2ludHNQb3NzaWJsZTtcbiAgICBvYmouc2NvcmVQZXJjZW50YWdlID0gKHRvdGFsUG9pbnRzRWFybmVkIC8gdG90YWxQb2ludHNQb3NzaWJsZSkgKiAxMDA7XG4gICAgb2JqLmRlY2lzaW9ucyA9IFtcbiAgICAgIHtcbiAgICAgICAgcG9wdWxhclBlcmNlbnRhZ2U6IDQ5LFxuICAgICAgICBjaG9pY2U6IFwiQ29vbCBidWlsZGluZ1wiLFxuICAgICAgICBjYXRlZ29yeTogXCJQaHlzaWNhbCBBY2Nlc3MgQ29udHJvbCBTeXN0ZW1cIlxuICAgICAgfSwge1xuICAgICAgICBwb3B1bGFyUGVyY2VudGFnZTogNTMsXG4gICAgICAgIGNob2ljZTogXCJEb2cgSG91c2VcIixcbiAgICAgICAgY2F0ZWdvcnk6IFwiUGV0IExvZGdpbmdcIlxuICAgICAgfSwge1xuICAgICAgICBwb3B1bGFyUGVyY2VudGFnZTogMjMsXG4gICAgICAgIGNob2ljZTogXCJIb3NwaXRhbFwiLFxuICAgICAgICBjYXRlZ29yeTogXCJQdWJsaWMgU2VydmljZSBCdWlsZGluZ1wiXG4gICAgICB9XG4gICAgXTtcbiAgICByZXR1cm4gb2JqO1xuICB9O1xuXG4gIFF1aXoucHJvdG90eXBlLnNwbGl0QXJyYXlJbkhhbGYgPSBmdW5jdGlvbihhcikge1xuICAgIHZhciBsZW47XG4gICAgbGVuID0gTWF0aC5jZWlsKGFyLmxlbmd0aCAvIDIpO1xuICAgIHJldHVybiBbYXIuc2xpY2UoMCwgbGVuKSwgYXIuc2xpY2UobGVuKV07XG4gIH07XG5cbiAgcmV0dXJuIFF1aXo7XG5cbn0pKENvbXBvbmVudCk7XG4iLCJ2YXIgQ29tcG9uZW50LCBTZWxlY3Rpb25EaWFsb2d1ZSxcbiAgZXh0ZW5kID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChoYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9LFxuICBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbkNvbXBvbmVudCA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvY29tcG9uZW50Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2VsZWN0aW9uRGlhbG9ndWUgPSAoZnVuY3Rpb24oc3VwZXJDbGFzcykge1xuICBleHRlbmQoU2VsZWN0aW9uRGlhbG9ndWUsIHN1cGVyQ2xhc3MpO1xuXG4gIGZ1bmN0aW9uIFNlbGVjdGlvbkRpYWxvZ3VlKCRlbCwgZGF0YSkge1xuICAgIHZhciAkcmlnaHQsIGphZGVEYXRhO1xuICAgIFNlbGVjdGlvbkRpYWxvZ3VlLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIGRhdGEpO1xuICAgIHRoaXMuJG5vZGUgPSAkKGphZGVUZW1wbGF0ZVsnc2xpZGUtdXgvY29tcG9uZW50cy9kaWFsb2d1ZS9zZWxlY3Rpb24tZGlhbG9ndWUnXSgpKTtcbiAgICBqYWRlRGF0YSA9IHRoaXMuZ2VuZXJhdGVDb25maWdEYXRhKGRhdGEpO1xuICAgIHRoaXMuJGxlZnQgPSAkKGphZGVUZW1wbGF0ZVsnc2xpZGUtdXgvY29tcG9uZW50cy9kaWFsb2d1ZS9kaWFsb2d1ZS1kZXRhaWxzJ10oamFkZURhdGEpKTtcbiAgICAkcmlnaHQgPSAkKGphZGVUZW1wbGF0ZVsnc2xpZGUtdXgvY29tcG9uZW50cy9kaWFsb2d1ZS9kaWFsb2d1ZS1idXR0b25zJ10oamFkZURhdGEpKTtcbiAgICB0aGlzLiRsZWZ0LmFkZENsYXNzKFwiaGlkZGVuXCIpO1xuICAgIHRoaXMuJG5vZGUuYXBwZW5kKHRoaXMuJGxlZnQpO1xuICAgIHRoaXMuJG5vZGUuYXBwZW5kKCRyaWdodCk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVycyh0aGlzLiRub2RlLCBkYXRhKTtcbiAgICB0aGlzLnN1cGVySW5pdCgkZWwsIHRoaXMuJG5vZGUsIGRhdGEpO1xuICB9XG5cbiAgU2VsZWN0aW9uRGlhbG9ndWUucHJvdG90eXBlLmdlbmVyYXRlQ29uZmlnRGF0YSA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2YXIgaSwgaXRlbSwgaiwgamFkZURhdGEsIGxlbiwgcmVmO1xuICAgIHRoaXMuaXRlbXMgPSB7fTtcbiAgICBqYWRlRGF0YSA9IHt9O1xuICAgIGphZGVEYXRhLnRpdGxlID0gZGF0YS50aXRsZTtcbiAgICBqYWRlRGF0YS5zdWJUaXRsZSA9IGRhdGEuc3ViVGl0bGU7XG4gICAgamFkZURhdGEuYnRuVHh0ID0gZGF0YS5zdWJtaXRCdG4udHh0O1xuICAgIGphZGVEYXRhLmJ0bkljb24gPSBkYXRhLnN1Ym1pdEJ0bi5pY29uO1xuICAgIGphZGVEYXRhLmludHJvID0gZGF0YS5pbnRybztcbiAgICBqYWRlRGF0YS5pdGVtcyA9IFtdO1xuICAgIHJlZiA9IGRhdGEuaXRlbXM7XG4gICAgZm9yIChpID0gaiA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGogPCBsZW47IGkgPSArK2opIHtcbiAgICAgIGl0ZW0gPSByZWZbaV07XG4gICAgICBpdGVtLmlkID0gXCJpdGVtXCIgKyBpO1xuICAgICAgamFkZURhdGEuaXRlbXMucHVzaCh7XG4gICAgICAgIHR4dDogaXRlbS5idG5UeHQsXG4gICAgICAgIGlkOiBpdGVtLmlkLFxuICAgICAgICBpY29uOiBpdGVtLmljb25cbiAgICAgIH0pO1xuICAgICAgdGhpcy5pdGVtc1tpdGVtLmlkXSA9IGl0ZW07XG4gICAgfVxuICAgIHJldHVybiBqYWRlRGF0YTtcbiAgfTtcblxuICBTZWxlY3Rpb25EaWFsb2d1ZS5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbigkZWwsIGRhdGEpIHtcbiAgICB2YXIgJGJ1dHRvbnM7XG4gICAgJGJ1dHRvbnMgPSAkKFwiLmJ1dHRvblwiLCAkZWwpO1xuICAgICRidXR0b25zLm9uKFwiY2xpY2tcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgICB2YXIgJHRhcmc7XG4gICAgICAgICR0YXJnID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICByZXR1cm4gX3RoaXMuYWN0aXZhdGVJdGVtKCR0YXJnLCBfdGhpcy5pdGVtc1skdGFyZy5hdHRyKCdpZCcpXSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICByZXR1cm4gJChcIiNhY3Rpb24tYnRuXCIsICRlbCkub24oXCJjbGlja1wiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICAgIGFyaXN0b3RsZS5jb21tYW5kZXJbXCJkb1wiXShkYXRhLmNsaWNrKTtcbiAgICAgICAgcmV0dXJuIF90aGlzLmRlc3Ryb3koKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9O1xuXG4gIFNlbGVjdGlvbkRpYWxvZ3VlLnByb3RvdHlwZS5hY3RpdmF0ZUl0ZW0gPSBmdW5jdGlvbigkYnV0dG9uLCBpdGVtKSB7XG4gICAgdGhpcy4kbGVmdC5yZW1vdmVDbGFzcyhcImhpZGRlblwiKTtcbiAgICAkKFwiLml0ZW0taW5mb1wiLCB0aGlzLiRub2RlKS5jc3Moe1xuICAgICAgZGlzcGxheTogXCJibG9ja1wiXG4gICAgfSk7XG4gICAgJChcIi5idXR0b25cIiwgdGhpcy4kbm9kZSkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgJGJ1dHRvbi5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAkKFwiLmljb25cIiwgdGhpcy4kbm9kZSkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgJChcIiNpY29uLVwiICsgaXRlbS5pZCwgdGhpcy4kbm9kZSkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgJChcIi5ibHVyYlwiLCB0aGlzLiRub2RlKS5odG1sKGl0ZW0uYmx1cmIpO1xuICAgICQoXCIuZGV0YWlsc1wiLCB0aGlzLiRub2RlKS5odG1sKGl0ZW0uZGV0YWlscyk7XG4gICAgcmV0dXJuIGFyaXN0b3RsZS5jb21tYW5kZXJbXCJkb1wiXShpdGVtLmNsaWNrKTtcbiAgfTtcblxuICByZXR1cm4gU2VsZWN0aW9uRGlhbG9ndWU7XG5cbn0pKENvbXBvbmVudCk7XG4iLCJ2YXIgQ29tcG9uZW50LCBTaW1wbGVTZWxlY3Rpb24sXG4gIGV4dGVuZCA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoaGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfSxcbiAgaGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5Db21wb25lbnQgPSByZXF1aXJlKCdzbGlkZS11eC9jb21wb25lbnRzL2NvbXBvbmVudCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNpbXBsZVNlbGVjdGlvbiA9IChmdW5jdGlvbihzdXBlckNsYXNzKSB7XG4gIGV4dGVuZChTaW1wbGVTZWxlY3Rpb24sIHN1cGVyQ2xhc3MpO1xuXG4gIGZ1bmN0aW9uIFNpbXBsZVNlbGVjdGlvbigkZWwsIGRhdGEpIHtcbiAgICB2YXIgJHJpZ2h0LCBqYWRlRGF0YTtcbiAgICBTaW1wbGVTZWxlY3Rpb24uX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgZGF0YSk7XG4gICAgamFkZURhdGEgPSB0aGlzLmdlbmVyYXRlQ29uZmlnRGF0YShkYXRhKTtcbiAgICB0aGlzLiRub2RlID0gJChqYWRlVGVtcGxhdGVbJ3NsaWRlLXV4L2NvbXBvbmVudHMvZGlhbG9ndWUvc2VsZWN0aW9uLWRpYWxvZ3VlJ10oKSk7XG4gICAgJHJpZ2h0ID0gJChqYWRlVGVtcGxhdGVbJ3NsaWRlLXV4L2NvbXBvbmVudHMvZGlhbG9ndWUvZGlhbG9ndWUtYnV0dG9ucyddKGphZGVEYXRhKSk7XG4gICAgdGhpcy4kbm9kZS5hcHBlbmQoJHJpZ2h0KTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKHRoaXMuJG5vZGUsIGRhdGEpO1xuICAgIHRoaXMuc3VwZXJJbml0KCRlbCwgdGhpcy4kbm9kZSwgZGF0YSk7XG4gIH1cblxuICBTaW1wbGVTZWxlY3Rpb24ucHJvdG90eXBlLmdlbmVyYXRlQ29uZmlnRGF0YSA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2YXIgaSwgaXRlbSwgaiwgamFkZURhdGEsIGxlbiwgcmVmO1xuICAgIHRoaXMuaXRlbXMgPSB7fTtcbiAgICBqYWRlRGF0YSA9IHt9O1xuICAgIGphZGVEYXRhLml0ZW1zID0gW107XG4gICAgamFkZURhdGEudGl0bGUgPSBkYXRhLnRpdGxlO1xuICAgIGphZGVEYXRhLnN1YlRpdGxlID0gZGF0YS5zdWJUaXRsZTtcbiAgICByZWYgPSBkYXRhLml0ZW1zO1xuICAgIGZvciAoaSA9IGogPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBqIDwgbGVuOyBpID0gKytqKSB7XG4gICAgICBpdGVtID0gcmVmW2ldO1xuICAgICAgaXRlbS5pZCA9IFwiaXRlbVwiICsgaTtcbiAgICAgIGphZGVEYXRhLml0ZW1zLnB1c2goe1xuICAgICAgICB0eHQ6IGl0ZW0uYnRuVHh0LFxuICAgICAgICBpZDogaXRlbS5pZFxuICAgICAgfSk7XG4gICAgICB0aGlzLml0ZW1zW2l0ZW0uaWRdID0gaXRlbTtcbiAgICB9XG4gICAgcmV0dXJuIGphZGVEYXRhO1xuICB9O1xuXG4gIFNpbXBsZVNlbGVjdGlvbi5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbigkZWwsIGRhdGEpIHtcbiAgICB2YXIgJGJ1dHRvbnM7XG4gICAgJGJ1dHRvbnMgPSAkKFwiLmJ1dHRvblwiLCAkZWwpO1xuICAgIHJldHVybiAkYnV0dG9ucy5vbihcImNsaWNrXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdmFyICR0YXJnO1xuICAgICAgICAkdGFyZyA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgZGF0YSA9IF90aGlzLml0ZW1zWyR0YXJnLmF0dHIoJ2lkJyldO1xuICAgICAgICByZXR1cm4gYXJpc3RvdGxlLmNvbW1hbmRlcltcImRvXCJdKGRhdGEuY2xpY2spO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH07XG5cbiAgcmV0dXJuIFNpbXBsZVNlbGVjdGlvbjtcblxufSkoQ29tcG9uZW50KTtcbiIsInZhciBDb21wb25lbnQsIFNvdW5kVGVzdCxcbiAgZXh0ZW5kID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChoYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9LFxuICBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbkNvbXBvbmVudCA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvY29tcG9uZW50Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gU291bmRUZXN0ID0gKGZ1bmN0aW9uKHN1cGVyQ2xhc3MpIHtcbiAgZXh0ZW5kKFNvdW5kVGVzdCwgc3VwZXJDbGFzcyk7XG5cbiAgZnVuY3Rpb24gU291bmRUZXN0KCRlbCwgZGF0YSkge1xuICAgIFNvdW5kVGVzdC5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCBkYXRhKTtcbiAgICB0aGlzLiRub2RlID0gJChqYWRlVGVtcGxhdGVbJ3NsaWRlLXV4L2NvbXBvbmVudHMvc291bmQtdGVzdCddKGRhdGEpKTtcbiAgICB0aGlzLnN1cGVySW5pdCgkZWwsIHRoaXMuJG5vZGUsIGRhdGEpO1xuICB9XG5cbiAgcmV0dXJuIFNvdW5kVGVzdDtcblxufSkoQ29tcG9uZW50KTtcbiIsInZhciBDbG9zZWRDYXB0aW9uO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENsb3NlZENhcHRpb24gPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIENsb3NlZENhcHRpb24oJHBhcmVudCwgcGxheU5leHRBY3Rpb24pIHtcbiAgICB0aGlzLnBsYXlOZXh0QWN0aW9uID0gcGxheU5leHRBY3Rpb247XG4gICAgdGhpcy5jY0lzT24gPSB0cnVlO1xuICAgIHRoaXMuJGVsID0gJChqYWRlVGVtcGxhdGVbJ3NsaWRlLXV4L3RleHQtZGlhbG9ndWUvY2xvc2VkLWNhcHRpb24nXSh7fSkpO1xuICAgICRwYXJlbnQuYXBwZW5kKHRoaXMuJGVsKTtcbiAgICBzaGFkb3dJY29uc0luc3RhbmNlLnN2Z1JlcGxhY2VXaXRoU3RyaW5nKHB4U3ZnSWNvblN0cmluZywgdGhpcy4kZWwpO1xuICAgIHRoaXMuY2NEaXNwbGF5ID0gJChcIi5jbG9zZWQtY2FwdGlvblwiLCB0aGlzLiRlbCk7XG4gICAgdGhpcy5jY0Rpc3BsYXkuY3NzKHtcbiAgICAgIGRpc3BsYXk6ICdub25lJ1xuICAgIH0pO1xuICAgIHRoaXMuJHNwZWVjaEJveCA9ICQoXCIudGV4dFwiLCB0aGlzLiRlbCk7XG4gICAgdGhpcy5oaWRlVGV4dCgpO1xuICAgIHRoaXMuJGljb24gPSAkKFwiLmNsb3NlZC1jYXB0aW9uLWljb25cIik7XG4gICAgdGhpcy4kaWNvbi5vbignY2xpY2snLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy50b2dnbGVDbG9zZWRDYXB0aW9uaW5nKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgfVxuXG4gIENsb3NlZENhcHRpb24ucHJvdG90eXBlLnRvZ2dsZUNsb3NlZENhcHRpb25pbmcgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5jY0lzT24pIHtcbiAgICAgIHRoaXMuY2NJc09uID0gZmFsc2U7XG4gICAgICB0aGlzLmNjRGlzcGxheS5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgICByZXR1cm4gdGhpcy4kaWNvbi5hZGRDbGFzcygnb2ZmJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2NJc09uID0gdHJ1ZTtcbiAgICAgIHRoaXMuY2NEaXNwbGF5LnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcbiAgICAgIHJldHVybiB0aGlzLiRpY29uLnJlbW92ZUNsYXNzKCdvZmYnKTtcbiAgICB9XG4gIH07XG5cbiAgQ2xvc2VkQ2FwdGlvbi5wcm90b3R5cGUuc2F5ID0gZnVuY3Rpb24odGV4dCwgdHh0UG9zKSB7XG4gICAgdGhpcy5zaG93VGV4dCgpO1xuICAgIHJldHVybiB0aGlzLiRzcGVlY2hCb3guaHRtbChcIjxkaXYgY2xhc3M9J1wiICsgdGhpcy5jaGFyYWN0ZXIgKyBcIic+PHNwYW4+XCIgKyB0aGlzLmNoYXJhY3RlciArIFwiPC9zcGFuPlwiICsgdGV4dCArIFwiPC9kaXY+XCIpO1xuICB9O1xuXG4gIENsb3NlZENhcHRpb24ucHJvdG90eXBlLnNwZWNpYWwgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgaWYgKGRhdGEuYWN0b3IgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMuY2hhcmFjdGVyID0gZGF0YS5hY3RvcjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuY2hhcmFjdGVyID0gJ2N0YW5sZWUnO1xuICAgIH1cbiAgfTtcblxuICBDbG9zZWRDYXB0aW9uLnByb3RvdHlwZS5zaG93VGV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmNjRGlzcGxheS5mYWRlSW4oKTtcbiAgfTtcblxuICBDbG9zZWRDYXB0aW9uLnByb3RvdHlwZS5oaWRlVGV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmNjRGlzcGxheS5mYWRlT3V0KCk7XG4gIH07XG5cbiAgQ2xvc2VkQ2FwdGlvbi5wcm90b3R5cGUuc2hvd05leHQgPSBmdW5jdGlvbigpIHt9O1xuXG4gIENsb3NlZENhcHRpb24ucHJvdG90eXBlLmhpZGVOZXh0ID0gZnVuY3Rpb24oKSB7fTtcblxuICBDbG9zZWRDYXB0aW9uLnByb3RvdHlwZS5zdGFydFRhbGtpbmcgPSBmdW5jdGlvbigpIHt9O1xuXG4gIENsb3NlZENhcHRpb24ucHJvdG90eXBlLnN0b3BUYWxraW5nID0gZnVuY3Rpb24oKSB7fTtcblxuICBDbG9zZWRDYXB0aW9uLnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnNsZWVwKCk7XG4gIH07XG5cbiAgQ2xvc2VkQ2FwdGlvbi5wcm90b3R5cGUuc2xlZXAgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5oaWRlVGV4dCgpO1xuICB9O1xuXG4gIENsb3NlZENhcHRpb24ucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHt9O1xuXG4gIHJldHVybiBDbG9zZWRDYXB0aW9uO1xuXG59KSgpO1xuIiwidmFyIEFuaW1hdGlvbiwgQ3RhbmxlZTtcblxuQW5pbWF0aW9uID0gcmVxdWlyZSgnbW92aWUvc3ZnLWFuaW1hdGlvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEN0YW5sZWUgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIEN0YW5sZWUoJHBhcmVudCwgcGxheU5leHRBY3Rpb24pIHtcbiAgICB2YXIgdG9rZW4xLCB0b2tlbjIsIHRva2VuMywgdG9rZW40O1xuICAgIHRoaXMucGxheU5leHRBY3Rpb24gPSBwbGF5TmV4dEFjdGlvbjtcbiAgICB0aGlzLiRlbCA9ICQoamFkZVRlbXBsYXRlWydzbGlkZS11eC90ZXh0LWRpYWxvZ3VlL2N0YW5sZWUnXSh7fSkpO1xuICAgIHNoYWRvd0ljb25zSW5zdGFuY2Uuc3ZnUmVwbGFjZVdpdGhTdHJpbmcocHhTdmdJY29uU3RyaW5nLCB0aGlzLiRlbCk7XG4gICAgdGhpcy4kc3BlZWNoQm94ID0gJChcIi5zcGVlY2gtYm94XCIsIHRoaXMuJGVsKTtcbiAgICB0aGlzLiR0ZXh0ID0gJChcIi50ZXh0XCIsIHRoaXMuJHNwZWVjaEJveCk7XG4gICAgdGhpcy4kdGV4dENvbnRlbnQgPSAkKFwic3Bhbi5jb250ZW50XCIsIHRoaXMuJHRleHQpO1xuICAgIHRoaXMuJG5leHRCdG4gPSAkKFwic3Bhbi5uZXh0XCIsIHRoaXMuJHRleHQpO1xuICAgIHRoaXMuJGZhY2VIb2xkZXIgPSAkKFwiLmZhY2VcIiwgdGhpcy4kZWwpO1xuICAgIHRoaXMuJG5leHRCdG4ub24oXCJjbGlja1wiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5wbGF5TmV4dEFjdGlvbigpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgdG9rZW4xID0gUHViU3ViLnN1YnNjcmliZSgnY3RhbmxlZS5oaWRlJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oYSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuJGVsLmFkZENsYXNzKFwiaGlkZGVuXCIpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgdG9rZW4yID0gUHViU3ViLnN1YnNjcmliZSgnY3RhbmxlZS5zaG93JywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oYSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuJGVsLnJlbW92ZUNsYXNzKFwiaGlkZGVuXCIpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgdG9rZW4zID0gUHViU3ViLnN1YnNjcmliZSgnY3RhbmxlZS5jbGVhcicsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGEsIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmhpZGVUZXh0KCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0b2tlbjQgPSBQdWJTdWIuc3Vic2NyaWJlKCdjdGFubGVlLmdvaG9tZScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGEsIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnJldHVyblRvU3RhdGlvbigpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgdGhpcy50b2tlbnMgPSBbdG9rZW4xLCB0b2tlbjIsIHRva2VuMywgdG9rZW40XTtcbiAgICAkcGFyZW50LmFwcGVuZCh0aGlzLiRlbCk7XG4gICAgdGhpcy5yZXR1cm5Ub1N0YXRpb24oKTtcbiAgfVxuXG4gIEN0YW5sZWUucHJvdG90eXBlLnNheSA9IGZ1bmN0aW9uKHRleHQsIHR4dFBvcywgcG9zKSB7XG4gICAgdGhpcy5zaG93VGV4dCgpO1xuICAgIHRoaXMuJHRleHRDb250ZW50Lmh0bWwodGV4dCk7XG4gICAgcmV0dXJuIHRoaXMuc2V0VGV4dFBvc2l0aW9uKHR4dFBvcyk7XG4gIH07XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUuc3RhcnRUYWxraW5nID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5pc1RhbGtpbmcgPSB0cnVlO1xuICAgIHJldHVybiB0aGlzLmJvdW5jZSgpO1xuICB9O1xuXG4gIEN0YW5sZWUucHJvdG90eXBlLnN0b3BUYWxraW5nID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5pc1RhbGtpbmcgPSBmYWxzZTtcbiAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lb3V0KTtcbiAgICB0aGlzLiRjdXJyZW50QW5pbWF0aW9uLnN0b3AodHJ1ZSk7XG4gICAgcmV0dXJuIHRoaXMuJGN1cnJlbnRBbmltYXRpb24udmVsb2NpdHkoe1xuICAgICAgc2NhbGU6IDFcbiAgICB9LCB7XG4gICAgICBkdXJhdGlvbjogMzAwLFxuICAgICAgZWFzaW5nOiAnZWFzZWlub3V0cXVpbnQnXG4gICAgfSk7XG4gIH07XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUuYm91bmNlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGR1cmF0aW9uLCB0aW1vdXREdXI7XG4gICAgZHVyYXRpb24gPSA1MDAgKyBNYXRoLnJhbmRvbSgpICogMzAwO1xuICAgIHRpbW91dER1ciA9IGR1cmF0aW9uICogKE1hdGgucmFuZG9tKCkgLyAxLjMpO1xuICAgIGlmIChNYXRoLnJhbmRvbSgpID4gMC44KSB7XG4gICAgICB0aW1vdXREdXIgKz0gNjAwO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy50aW1lb3V0ID0gc2V0VGltZW91dCgoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHNjYWxlO1xuICAgICAgICBzY2FsZSA9IDAuOCArIChNYXRoLnJhbmRvbSgpIC8gMyk7XG4gICAgICAgIF90aGlzLiRjdXJyZW50QW5pbWF0aW9uLnN0b3AodHJ1ZSk7XG4gICAgICAgIF90aGlzLiRjdXJyZW50QW5pbWF0aW9uLmNzcyh7XG4gICAgICAgICAgdHJhbnNmb3JtOiBcInNjYWxlKFwiICsgc2NhbGUgKyBcIilcIlxuICAgICAgICB9KTtcbiAgICAgICAgX3RoaXMuJGN1cnJlbnRBbmltYXRpb24udmVsb2NpdHkoe1xuICAgICAgICAgIHNjYWxlOiBzY2FsZVxuICAgICAgICB9LCB7XG4gICAgICAgICAgZHVyYXRpb246IDBcbiAgICAgICAgfSk7XG4gICAgICAgIF90aGlzLiRjdXJyZW50QW5pbWF0aW9uLnZlbG9jaXR5KHtcbiAgICAgICAgICBzY2FsZTogMVxuICAgICAgICB9LCB7XG4gICAgICAgICAgZGVsYXk6IDEwLFxuICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgICAgICBlYXNpbmc6IFs1MDAsIDE1XVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKF90aGlzLmlzVGFsa2luZykge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5ib3VuY2UoKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSh0aGlzKSwgdGltb3V0RHVyKTtcbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5zcGVjaWFsID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIGlmIChkYXRhLnBvcyAhPSBudWxsKSB7XG4gICAgICB0aGlzLmdvdG8oZGF0YSk7XG4gICAgfVxuICAgIGlmICgoZGF0YS5lbW8gIT0gbnVsbCkgfHwgKHRoaXMuJGN1cnJlbnRBbmltYXRpb24gPT0gbnVsbCkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldEVtb3Rpb24oZGF0YS5lbW8pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRFbW90aW9uKFwiaWRsZVwiKTtcbiAgICB9XG4gIH07XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUuc2hvd1RleHQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kc3BlZWNoQm94LnJlbW92ZUNsYXNzKFwiaGlkZGVuXCIpO1xuICB9O1xuXG4gIEN0YW5sZWUucHJvdG90eXBlLmhpZGVUZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJHNwZWVjaEJveC5hZGRDbGFzcyhcImhpZGRlblwiKTtcbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5zaG93TmV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRuZXh0QnRuLnJlbW92ZUNsYXNzKFwiaGlkZGVuXCIpO1xuICB9O1xuXG4gIEN0YW5sZWUucHJvdG90eXBlLmhpZGVOZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJG5leHRCdG4uYWRkQ2xhc3MoXCJoaWRkZW5cIik7XG4gIH07XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yZXR1cm5Ub1N0YXRpb24oKTtcbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5zbGVlcCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnJldHVyblRvU3RhdGlvbigpO1xuICB9O1xuXG4gIEN0YW5sZWUucHJvdG90eXBlLnNldEVtb3Rpb24gPSBmdW5jdGlvbihlbW90aW9uKSB7XG4gICAgdmFyIGRhdGEsIHBhdGgsIHJlc2V0RHVyYXRpb247XG4gICAgcmVzZXREdXJhdGlvbiA9IDEwMDtcbiAgICB0aGlzLnJlc2V0Um90YXRpb24ocmVzZXREdXJhdGlvbik7XG4gICAgdGhpcy4kb2xkQW5pbWF0aW9uID0gdGhpcy4kY3VycmVudEFuaW1hdGlvbjtcbiAgICB0aGlzLiRjdXJyZW50QW5pbWF0aW9uID0gJCgnPGRpdiBjbGFzcz1cImFuaW1hdGlvblwiLz4nKTtcbiAgICB0aGlzLiRmYWNlSG9sZGVyLmFwcGVuZCh0aGlzLiRjdXJyZW50QW5pbWF0aW9uKTtcbiAgICBzd2l0Y2ggKGVtb3Rpb24pIHtcbiAgICAgIGNhc2UgXCJhbmdyeVwiOlxuICAgICAgICBwYXRoID0gJ2N0YW5sZWUtYW5ncnkuanNvbic7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImhhcHB5XCI6XG4gICAgICAgIHBhdGggPSAnY3RhbmxlZS1oYXBweS5qc29uJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiaWRsZVwiOlxuICAgICAgICBwYXRoID0gJ2N0YW5sZWUtaWRsZS5qc29uJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiZG93blwiOlxuICAgICAgICBwYXRoID0gJ2N0YW5sZWUtbG9vay1kb3duLmpzb24nO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICAgIHBhdGggPSAnY3RhbmxlZS1sb29rLWxlZnQuanNvbic7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICAgIHBhdGggPSAnY3RhbmxlZS1sb29rLXJpZ2h0Lmpzb24nO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJzdXJwcmlzZVwiOlxuICAgICAgICBwYXRoID0gJ2N0YW5sZWUtc3VycHJpc2UuanNvbic7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInVuaGFwcHlcIjpcbiAgICAgICAgcGF0aCA9ICdjdGFubGVlLXVuaGFwcHkuanNvbic7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcGF0aCA9ICdjdGFubGVlLWlkbGUuanNvbic7XG4gICAgfVxuICAgIHBhdGggPSBhcmlzdG90bGUuZ2V0QXNzZXRQYXRoKFwifmcvY3RhbmxlZS9cIiArIHBhdGgpO1xuICAgIHRoaXMub2xkQW5pbWF0aW9uID0gdGhpcy5hbmltYXRpb247XG4gICAgZGF0YSA9IHtcbiAgICAgIGRlbGF5OiByZXNldER1cmF0aW9uLFxuICAgICAgbmF0aXZlRXZlbnRzOiB7XG4gICAgICAgIGRhdGFfcmVhZHk6IChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5kZXN0cm95T2xkRmFjZSgpO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pKHRoaXMpLFxuICAgICAgICBjb21wbGV0ZTogKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmlkbGUoKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KSh0aGlzKVxuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuYW5pbWF0aW9uID0gbmV3IEFuaW1hdGlvbih0aGlzLiRjdXJyZW50QW5pbWF0aW9uLCBwYXRoLCBkYXRhKTtcbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5kZXN0cm95T2xkRmFjZSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLm9sZEFuaW1hdGlvbiAhPSBudWxsKSB7XG4gICAgICB0aGlzLm9sZEFuaW1hdGlvbi5kZXN0cm95KCk7XG4gICAgICB0aGlzLiRvbGRBbmltYXRpb24ucmVtb3ZlKCk7XG4gICAgICByZXR1cm4gdGhpcy5vbGRBbmltYXRpb24gPSBudWxsO1xuICAgIH1cbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5yZXNldFJvdGF0aW9uID0gZnVuY3Rpb24odGltZSkge1xuICAgIGlmICh0aW1lID09IG51bGwpIHtcbiAgICAgIHRpbWUgPSAxMDA7XG4gICAgfVxuICAgIHRoaXMuJGZhY2VIb2xkZXIudmVsb2NpdHkoXCJzdG9wXCIsIHRydWUpO1xuICAgIHJldHVybiB0aGlzLiRmYWNlSG9sZGVyLnZlbG9jaXR5KHtcbiAgICAgIHJvdGF0ZVo6IDBcbiAgICB9LCB7XG4gICAgICBkdXJhdGlvbjogdGltZVxuICAgIH0pO1xuICB9O1xuXG4gIEN0YW5sZWUucHJvdG90eXBlLmlkbGUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kZmFjZUhvbGRlci52ZWxvY2l0eSh7XG4gICAgICByb3RhdGVaOiAzNjBcbiAgICB9LCB7XG4gICAgICBkdXJhdGlvbjogMTAwMDAsXG4gICAgICBsb29wOiB0cnVlLFxuICAgICAgZWFzaW5nOiAnbGluZWFyJ1xuICAgIH0pO1xuICB9O1xuXG4gIEN0YW5sZWUucHJvdG90eXBlLmdvdG9Qb3MgPSBmdW5jdGlvbih4LCB5LCBkdXJhdGlvbiwgZGVsYXkpIHtcbiAgICBpZiAoeCA9PSBudWxsKSB7XG4gICAgICB4ID0gOTg4O1xuICAgIH1cbiAgICBpZiAoeSA9PSBudWxsKSB7XG4gICAgICB5ID0gMzQ7XG4gICAgfVxuICAgIGlmIChkdXJhdGlvbiA9PSBudWxsKSB7XG4gICAgICBkdXJhdGlvbiA9IDYwMDtcbiAgICB9XG4gICAgaWYgKGRlbGF5ID09IG51bGwpIHtcbiAgICAgIGRlbGF5ID0gMDtcbiAgICB9XG4gICAgdGhpcy4kZWwudmVsb2NpdHkoXCJzdG9wXCIsIHRydWUpO1xuICAgIHJldHVybiB0aGlzLiRlbC52ZWxvY2l0eSh7XG4gICAgICB0b3A6IHksXG4gICAgICBsZWZ0OiB4XG4gICAgfSwge1xuICAgICAgZGVsYXk6IGRlbGF5LFxuICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgZWFzaW5nOiBcImVhc2VJbk91dFF1aW50XCJcbiAgICB9KTtcbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5nb3RvSXRlbSA9IGZ1bmN0aW9uKGlkKSB7XG4gICAgdmFyIHBvcztcbiAgICBwb3MgPSBhcmlzdG90bGUubW92aWUuZ2V0R2xvYmFsUG9zKGlkKTtcbiAgICBpZiAocG9zID09PSBudWxsKSB7XG4gICAgICBhcmlzdG90bGVbXCJ0aHJvd1wiXShcImN0YW5sZWUgd2FudHMgdG8gaG92ZXIgYnkgYFwiICsgaWQgKyBcImAsIGJ1dCBpcyB1bmFibGUgdG8gZmluZCBhbiBpdGVtIHdpdGggdGhlIGlkIFwiICsgaWQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBwb3MueCArPSAwO1xuICAgIHBvcy55ICs9IDA7XG4gICAgcmV0dXJuIHRoaXMuZ290b1Bvcyhwb3MueCwgcG9zLnkpO1xuICB9O1xuXG4gIEN0YW5sZWUucHJvdG90eXBlLmdvdG8gPSBmdW5jdGlvbihhY3Rpb24pIHtcbiAgICB2YXIgbWU7XG4gICAgaWYgKHR5cGVvZiBhY3Rpb24ucG9zID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBpZiAoYWN0aW9uLmRlbGF5TW92ZSAhPSBudWxsKSB7XG4gICAgICAgIG1lID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIG1lLmdvdG9JdGVtKGFjdGlvbi5wb3MsIGFjdGlvbi5kZWxheU1vdmUpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdvdG9JdGVtKGFjdGlvbi5wb3MpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5nb3RvUG9zKGFjdGlvbi5wb3NbMF0sIGFjdGlvbi5wb3NbMV0sIGFjdGlvbi5wb3NbMl0sIGFjdGlvbi5wb3NbM10pO1xuICAgIH1cbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5yZXR1cm5Ub1N0YXRpb24gPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmhpZGVUZXh0KCk7XG4gICAgdGhpcy5nb3RvUG9zKCk7XG4gICAgcmV0dXJuIHRoaXMuc2V0RmlsdGVyKCdnbG93Jyk7XG4gIH07XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUuc2V0RmlsdGVyID0gZnVuY3Rpb24oa2luZCkge1xuICAgIHJldHVybiAkKCcjY3RhbmxlZScpLmNzcyh7XG4gICAgICBmaWx0ZXI6IFwidXJsKCcjXCIgKyBraW5kICsgXCInKVwiXG4gICAgfSk7XG4gIH07XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUuc2V0VGV4dFBvc2l0aW9uID0gZnVuY3Rpb24ocG9zKSB7XG4gICAgdmFyIGksIGl0ZW0sIGxlbiwgcmVzdWx0cztcbiAgICB0aGlzLiR0ZXh0LnJlbW92ZUNsYXNzKFwidG9wIGxlZnRcIik7XG4gICAgaWYgKHBvcyA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KHBvcykpIHtcbiAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgIGZvciAoaSA9IDAsIGxlbiA9IHBvcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpdGVtID0gcG9zW2ldO1xuICAgICAgICByZXN1bHRzLnB1c2godGhpcy4kdGV4dC5hZGRDbGFzcyhpdGVtKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuJHRleHQuYWRkQ2xhc3MocG9zKTtcbiAgICB9XG4gIH07XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpLCBsZW4sIHJlZiwgcmVzdWx0cywgdG9rZW47XG4gICAgdGhpcy4kZWwudmVsb2NpdHkoXCJzdG9wXCIsIHRydWUpO1xuICAgIHRoaXMuJGZhY2VIb2xkZXIudmVsb2NpdHkoXCJzdG9wXCIsIHRydWUpO1xuICAgIHRoaXMuJGVsLmVtcHR5KCk7XG4gICAgcmVmID0gdGhpcy50b2tlbnM7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgdG9rZW4gPSByZWZbaV07XG4gICAgICByZXN1bHRzLnB1c2goUHViU3ViLnVuc3Vic2NyaWJlKHRva2VuKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIHJldHVybiBDdGFubGVlO1xuXG59KSgpO1xuIiwidmFyIEdlbmVyaWNVaTtcblxubW9kdWxlLmV4cG9ydHMgPSBHZW5lcmljVWkgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIEdlbmVyaWNVaSgkZWwpIHtcbiAgICB2YXIgJG5vZGU7XG4gICAgJG5vZGUgPSAkKGphZGVUZW1wbGF0ZVsnbWlzYy9nZW5lcmljLXVpJ10oe30pKTtcbiAgICBzaGFkb3dJY29uc0luc3RhbmNlLnN2Z1JlcGxhY2VXaXRoU3RyaW5nKHB4U3ZnSWNvblN0cmluZywgJG5vZGUpO1xuICAgIHRoaXMuJGNvbnRpbnVlU3RyaXAgPSAkKFwiLmNvbnRpbnVlLXN0cmlwXCIsICRub2RlKTtcbiAgICAkKFwiLmNvbnRpbnVlLWJ0blwiLCAkbm9kZSkub24oXCJjbGlja1wiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgUHViU3ViLnB1Ymxpc2goXCJzbGlkZXMubmV4dC1zbGlkZVwiKTtcbiAgICAgICAgcmV0dXJuIF90aGlzLmhpZGVDb250aW51ZVN0cmlwKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0aGlzLmhpZGVDb250aW51ZVN0cmlwKCk7XG4gICAgJGVsLmFwcGVuZCgkbm9kZSk7XG4gICAgUHViU3ViLnN1YnNjcmliZSgnY29udGludWUuc2hvdycsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMuc2hvd0NvbnRpbnVlU3RyaXAoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9XG5cbiAgR2VuZXJpY1VpLnByb3RvdHlwZS5zaG93Q29udGludWVTdHJpcCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRjb250aW51ZVN0cmlwLnJlbW92ZUNsYXNzKFwiaGlkZGVuXCIpO1xuICB9O1xuXG4gIEdlbmVyaWNVaS5wcm90b3R5cGUuaGlkZUNvbnRpbnVlU3RyaXAgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kY29udGludWVTdHJpcC5hZGRDbGFzcyhcImhpZGRlblwiKTtcbiAgfTtcblxuICBHZW5lcmljVWkucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHt9O1xuXG4gIHJldHVybiBHZW5lcmljVWk7XG5cbn0pKCk7XG4iLCJ2YXIgTGFibGVyO1xuXG5tb2R1bGUuZXhwb3J0cyA9IExhYmxlciA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gTGFibGVyKCkge1xuICAgIHRoaXMuY291bnQgPSAwO1xuICAgIHRoaXMudG9rZW4xID0gUHViU3ViLnN1YnNjcmliZSgnbGFiZWwuYXR0YWNoJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuYXR0YWNoTGFiZWwoZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0aGlzLnRva2VuMiA9IFB1YlN1Yi5zdWJzY3JpYmUoJ2xhYmVsLmRlc3Ryb3knLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5kZXN0cm95TGFiZWwoZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgfVxuXG4gIExhYmxlci5wcm90b3R5cGUuYXR0YWNoTGFiZWwgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyICRsYWJlbDtcbiAgICBpZiAoJChcIi5sYWJlbC13cmFwcGVyXCIsIGRhdGEuZWwpLmxlbmd0aCAhPT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZGF0YS5jb250ZW50LmlkID09IG51bGwpIHtcbiAgICAgIGRhdGEuY29udGVudC5pZCA9IFwiX2xhYmVsXCIgKyAodGhpcy5jb3VudCsrKTtcbiAgICB9XG4gICAgJGxhYmVsID0gJChqYWRlVGVtcGxhdGVbJ3NsaWRlLXV4L2xhYmVsJ10oZGF0YS5jb250ZW50KSk7XG4gICAgJGxhYmVsLmFkZENsYXNzKFwiYXR0YWNoZWRcIik7XG4gICAgcmV0dXJuIGRhdGEuZWwuYXBwZW5kKCRsYWJlbCk7XG4gIH07XG5cbiAgTGFibGVyLnByb3RvdHlwZS5kZXN0cm95TGFiZWwgPSBmdW5jdGlvbigkZWwpIHtcbiAgICByZXR1cm4gJChcIi5sYWJlbC13cmFwcGVyXCIsICRlbCkudmVsb2NpdHkoe1xuICAgICAgb3BhY2l0eTogMFxuICAgIH0sIHtcbiAgICAgIGR1cmF0aW9uOiAxNTAsXG4gICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAkKHRoaXMpLnJlbW92ZSgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIExhYmxlci5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIFB1YlN1Yi51bnN1YnNjcmliZSh0aGlzLnRva2VuMSk7XG4gICAgcmV0dXJuIFB1YlN1Yi51bnN1YnNjcmliZSh0aGlzLnRva2VuMik7XG4gIH07XG5cbiAgcmV0dXJuIExhYmxlcjtcblxufSkoKTtcbiIsInZhciBDYWxsU2lnblNlbGVjdCwgRGVmZW5kZXJDYXJkcywgRGlhbG9ndWUsIERpYWxvZ3VlUGFnZSwgRHV0aWVzLCBFcGlzb2RlSW50cm8sIEVwaXNvZGVPdXRybywgRXhwbG9yZUNhcmRzLCBHZW5lcmljVWlFbGVtZW50cywgR2hvc3RVWCwgTGFibGVyLCBQZXJzb25hbEluZm9JbnRybywgUXVpeiwgU2VsZWN0aW9uRGlhbG9ndWUsIFNpbXBsZVNlbGVjdGlvbiwgU2xpZGVVWCwgU291bmRUZXN0LCBUZXh0RGlhbG9ndWU7XG5cbkNhbGxTaWduU2VsZWN0ID0gcmVxdWlyZSgnc2xpZGUtdXgvY29tcG9uZW50cy9jYWxsLXNpZ24tc2VsZWN0Jyk7XG5cblRleHREaWFsb2d1ZSA9IHJlcXVpcmUoJ3NsaWRlLXV4L3RleHQtZGlhbG9ndWUnKTtcblxuRGVmZW5kZXJDYXJkcyA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvZGVmZW5kZXItY2FyZHMnKTtcblxuRGlhbG9ndWUgPSByZXF1aXJlKCdzbGlkZS11eC9jb21wb25lbnRzL2RpYWxvZ3VlJyk7XG5cbkRpYWxvZ3VlUGFnZSA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvZGlhbG9ndWUtcGFnZScpO1xuXG5EdXRpZXMgPSByZXF1aXJlKCdzbGlkZS11eC9jb21wb25lbnRzL2R1dGllcycpO1xuXG5FcGlzb2RlSW50cm8gPSByZXF1aXJlKCdzbGlkZS11eC9jb21wb25lbnRzL2VwaXNvZGUtaW50cm8nKTtcblxuRXBpc29kZU91dHJvID0gcmVxdWlyZSgnc2xpZGUtdXgvY29tcG9uZW50cy9lcGlzb2RlLW91dHJvJyk7XG5cbkV4cGxvcmVDYXJkcyA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvZXhwbG9yZS1jYXJkcycpO1xuXG5HaG9zdFVYID0gcmVxdWlyZSgnc2xpZGUtdXgvY29tcG9uZW50cy9naG9zdC11eCcpO1xuXG5MYWJsZXIgPSByZXF1aXJlKCdzbGlkZS11eC9sYWJsZXInKTtcblxuUGVyc29uYWxJbmZvSW50cm8gPSByZXF1aXJlKCdzbGlkZS11eC9jb21wb25lbnRzL3BlcnNvbmFsLWluZm8taW50cm8nKTtcblxuUXVpeiA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvcXVpei9xdWl6Jyk7XG5cblNlbGVjdGlvbkRpYWxvZ3VlID0gcmVxdWlyZSgnc2xpZGUtdXgvY29tcG9uZW50cy9zZWxlY3Rpb24tZGlhbG9ndWUnKTtcblxuU2ltcGxlU2VsZWN0aW9uID0gcmVxdWlyZSgnc2xpZGUtdXgvY29tcG9uZW50cy9zaW1wbGUtc2VsZWN0aW9uJyk7XG5cblNvdW5kVGVzdCA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvc291bmQtdGVzdCcpO1xuXG5HZW5lcmljVWlFbGVtZW50cyA9IHJlcXVpcmUoJ3NsaWRlLXV4L2dlbmVyaWMtdWknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTbGlkZVVYID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBTbGlkZVVYKCRlbCkge1xuICAgIHRoaXMuJGVsID0gJGVsO1xuICAgIHRoaXMuY29tcG9uZW50cyA9IFtdO1xuICAgIHRoaXMubGFibGVyID0gbmV3IExhYmxlcigpO1xuICAgIHRoaXMuZGlhbG9ndWUgPSBuZXcgVGV4dERpYWxvZ3VlKHRoaXMuJGVsLCB0aGlzLmN0YW5sZWUpO1xuICAgIHRoaXMuZ2VuZXJpY1VpID0gbmV3IEdlbmVyaWNVaUVsZW1lbnRzKHRoaXMuJGVsKTtcbiAgfVxuXG4gIFNsaWRlVVgucHJvdG90eXBlLnBvcHVsYXRlID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciBjb21wb25lbnQsIGksIGxlbiwgcmVmLCByZXN1bHRzO1xuICAgIHRoaXMucmVtb3ZlQ3VycmVudENvbXBvbmVudHMoKTtcbiAgICB0aGlzLmNvbXBvbmVudHMgPSBbXTtcbiAgICBpZiAoKGRhdGEgIT0gbnVsbCA/IGRhdGEuY29tcG9uZW50cyA6IHZvaWQgMCkgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZWYgPSBkYXRhLmNvbXBvbmVudHM7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgY29tcG9uZW50ID0gcmVmW2ldO1xuICAgICAgcmVzdWx0cy5wdXNoKHRoaXMuY29tcG9uZW50cy5wdXNoKHRoaXMuYWRkQ29tcG9uZW50KGNvbXBvbmVudCkpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgU2xpZGVVWC5wcm90b3R5cGUuYWRkQ29tcG9uZW50ID0gZnVuY3Rpb24oY29tcG9uZW50RGF0YSkge1xuICAgIHZhciBjb21wb25lbnQ7XG4gICAgc3dpdGNoIChjb21wb25lbnREYXRhLmtpbmQpIHtcbiAgICAgIGNhc2UgXCJjYWxsLXNpZ24tc2VsZWN0XCI6XG4gICAgICAgIGNvbXBvbmVudCA9IG5ldyBDYWxsU2lnblNlbGVjdCh0aGlzLiRlbCwgY29tcG9uZW50RGF0YS5jb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJkZWZlbmRlci1jYXJkc1wiOlxuICAgICAgICBjb21wb25lbnQgPSBuZXcgRGVmZW5kZXJDYXJkcyh0aGlzLiRlbCwgY29tcG9uZW50RGF0YS5jb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJkaWFsb2d1ZVwiOlxuICAgICAgICBjb21wb25lbnQgPSBuZXcgRGlhbG9ndWUodGhpcy4kZWwsIGNvbXBvbmVudERhdGEuY29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiZHV0aWVzXCI6XG4gICAgICAgIGNvbXBvbmVudCA9IG5ldyBEdXRpZXModGhpcy4kZWwsIGNvbXBvbmVudERhdGEuY29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiZGlhbG9ndWUtcGFnZVwiOlxuICAgICAgICBjb21wb25lbnQgPSBuZXcgRGlhbG9ndWVQYWdlKHRoaXMuJGVsLCBjb21wb25lbnREYXRhLmNvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImVwaXNvZGUtaW50cm9cIjpcbiAgICAgICAgY29tcG9uZW50ID0gbmV3IEVwaXNvZGVJbnRybyh0aGlzLiRlbCwgY29tcG9uZW50RGF0YS5jb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJlcGlzb2RlLW91dHJvXCI6XG4gICAgICAgIGNvbXBvbmVudCA9IG5ldyBFcGlzb2RlT3V0cm8odGhpcy4kZWwsIGNvbXBvbmVudERhdGEuY29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiZXhwbG9yZS1jYXJkc1wiOlxuICAgICAgICBjb21wb25lbnQgPSBuZXcgRXhwbG9yZUNhcmRzKHRoaXMuJGVsLCBjb21wb25lbnREYXRhLmNvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImdob3N0LXV4XCI6XG4gICAgICAgIGNvbXBvbmVudCA9IG5ldyBHaG9zdFVYKHRoaXMuJGVsLCBjb21wb25lbnREYXRhLmNvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInBlcnNvbmFsLWluZm8taW50cm9cIjpcbiAgICAgICAgY29tcG9uZW50ID0gbmV3IFBlcnNvbmFsSW5mb0ludHJvKHRoaXMuJGVsLCBjb21wb25lbnREYXRhLmNvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInNlbGVjdGlvbi1kaWFsb2d1ZVwiOlxuICAgICAgICBjb21wb25lbnQgPSBuZXcgU2VsZWN0aW9uRGlhbG9ndWUodGhpcy4kZWwsIGNvbXBvbmVudERhdGEuY29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwic2ltcGxlLXNlbGVjdGlvblwiOlxuICAgICAgICBjb21wb25lbnQgPSBuZXcgU2ltcGxlU2VsZWN0aW9uKHRoaXMuJGVsLCBjb21wb25lbnREYXRhLmNvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInNvdW5kLXRlc3RcIjpcbiAgICAgICAgY29tcG9uZW50ID0gbmV3IFNvdW5kVGVzdCh0aGlzLiRlbCwgY29tcG9uZW50RGF0YS5jb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJxdWl6XCI6XG4gICAgICAgIGNvbXBvbmVudCA9IG5ldyBRdWl6KHRoaXMuJGVsLCBjb21wb25lbnREYXRhLmNvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgYXJpc3RvdGxlW1widGhyb3dcIl0oXCJ0cmllZCB0byBjcmVhdGUgYW4gdW5yZWNvZ25pemVkIGNvbXBvbmVudCB0eXBlOiBgXCIgKyBjb21wb25lbnREYXRhLmtpbmQgKyBcImBcIik7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY29tcG9uZW50O1xuICB9O1xuXG4gIFNsaWRlVVgucHJvdG90eXBlLnJlbW92ZUN1cnJlbnRDb21wb25lbnRzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNvbXBvbmVudCwgaSwgbGVuLCByZWYsIHJlc3VsdHM7XG4gICAgcmVmID0gdGhpcy5jb21wb25lbnRzO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNvbXBvbmVudCA9IHJlZltpXTtcbiAgICAgIHJlc3VsdHMucHVzaChjb21wb25lbnQuZGVzdHJveSgpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgU2xpZGVVWC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMucmVtb3ZlQ3VycmVudENvbXBvbmVudHMoKTtcbiAgICB0aGlzLmxhYmxlci5kZXN0cm95KCk7XG4gICAgdGhpcy5kaWFsb2d1ZS5kZXN0cm95KCk7XG4gICAgcmV0dXJuIHRoaXMuZ2VuZXJpY1VpLmRlc3Ryb3koKTtcbiAgfTtcblxuICByZXR1cm4gU2xpZGVVWDtcblxufSkoKTtcbiIsInZhciBBdWRpb1RyYWNrLCBDbG9zZWRDYXB0aW9uLCBDdGFubGVlLCBTZXF1ZW5jZSwgVGV4dERpYWxvZ3VlO1xuXG5BdWRpb1RyYWNrID0gcmVxdWlyZSgnZXBpc29kZS9hdWRpby10cmFjaycpO1xuXG5TZXF1ZW5jZSA9IHJlcXVpcmUoJ21pc2Mvc2VxdWVuY2UnKTtcblxuQ3RhbmxlZSA9IHJlcXVpcmUoJ3NsaWRlLXV4L2RpYWxvZ3VlLWFjdG9ycy9jdGFubGVlJyk7XG5cbkNsb3NlZENhcHRpb24gPSByZXF1aXJlKCdzbGlkZS11eC9kaWFsb2d1ZS1hY3RvcnMvY2xvc2VkLWNhcHRpb24nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBUZXh0RGlhbG9ndWUgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIFRleHREaWFsb2d1ZSgkcGFyZW50KSB7XG4gICAgdmFyIHRva2VuMSwgdG9rZW4yLCB0b2tlbjMsIHRva2VuNCwgdG9rZW41LCB0b2tlbjYsIHRva2VuNztcbiAgICBhcmlzdG90bGUuZGlhbG9ndWUgPSB0aGlzO1xuICAgIHRoaXMuY2MgPSBuZXcgQ2xvc2VkQ2FwdGlvbigkcGFyZW50LCB0aGlzLnBsYXlOZXh0QWN0aW9uKTtcbiAgICB0aGlzLmN0YW5sZWUgPSBuZXcgQ3RhbmxlZSgkcGFyZW50LCB0aGlzLnBsYXlOZXh0QWN0aW9uKTtcbiAgICAkKCdodG1sJykub24oXCJrZXlkb3duXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKGUud2hpY2ggPT09IDM5KSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLnBsYXlOZXh0QWN0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRva2VuMSA9IFB1YlN1Yi5zdWJzY3JpYmUoJ2N0YW5sZWUuYWN0aXZhdGUnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihhLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5wbGF5QWN0aW9uKGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgdG9rZW4yID0gUHViU3ViLnN1YnNjcmliZSgnY3RhbmxlZS5hZGQtZXZlbnQtbGlzdGVuZXInLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihhLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5hZGRFdmVudExpc3RlbmVyKGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgdG9rZW4zID0gUHViU3ViLnN1YnNjcmliZSgnZGlhbG9ndWUuYWN0aXZhdGUnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihhLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5wbGF5QWN0aW9uKGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgdG9rZW40ID0gUHViU3ViLnN1YnNjcmliZSgnZGlhbG9ndWUuYWRkLWV2ZW50LWxpc3RlbmVyJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oYSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuYWRkRXZlbnRMaXN0ZW5lcihkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRva2VuNSA9IFB1YlN1Yi5zdWJzY3JpYmUoJ3Zjci5wYXVzZScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGEsIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnBhdXNlVGltZWxpbmUoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRva2VuNiA9IFB1YlN1Yi5zdWJzY3JpYmUoJ3Zjci5wbGF5JywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oYSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMucGxheVRpbWVsaW5lKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0b2tlbjcgPSBQdWJTdWIuc3Vic2NyaWJlKCd2Y3IucmVwbGF5JywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oYSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMucmVwbGF5VGltZWxpbmUoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRoaXMudG9rZW5zID0gW3Rva2VuMSwgdG9rZW4yLCB0b2tlbjMsIHRva2VuNCwgdG9rZW41LCB0b2tlbjYsIHRva2VuN107XG4gIH1cblxuICBUZXh0RGlhbG9ndWUucHJvdG90eXBlLmFjdGl2YXRlID0gZnVuY3Rpb24oZGF0YTEpIHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhMTtcbiAgICBpZiAodGhpcy5kYXRhLnRpbWVsaW5lID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy50aW1lbGluZSA9IHRoaXMuZGF0YS50aW1lbGluZTtcbiAgICB0aGlzLnNlcXVlbmNlID0gbmV3IFNlcXVlbmNlKHRoaXMudGltZWxpbmUpO1xuICAgIHJldHVybiB0aGlzLnBsYXlBY3Rpb24odGhpcy5zZXF1ZW5jZS5nZXRDdXJyZW50SXRlbSgpLmFjdGlvbik7XG4gIH07XG5cbiAgVGV4dERpYWxvZ3VlLnByb3RvdHlwZS5zYXkgPSBmdW5jdGlvbih0ZXh0LCBhdWRpbywgbmV4dCwgdHh0UG9zKSB7XG4gICAgaWYgKHRleHQgIT0gbnVsbCkge1xuICAgICAgdGhpcy5hY3Rvci5zYXkodGV4dCwgdHh0UG9zKTtcbiAgICAgIHRoaXMuYWN0b3Iuc3RhcnRUYWxraW5nKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWN0b3IuaGlkZVRleHQoKTtcbiAgICB9XG4gICAgaWYgKGF1ZGlvICE9IG51bGwpIHtcbiAgICAgIGlmICh0aGlzLnRyYWNrICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy50cmFjay5zdG9wKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnRyYWNrID0gbmV3IEF1ZGlvVHJhY2soYXVkaW8pO1xuICAgICAgdGhpcy50cmFjay5wbGF5KHt9LCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIF90aGlzLnRyYWNrLmRlc3Ryb3koKTtcbiAgICAgICAgICBfdGhpcy50cmFjayA9IG51bGw7XG4gICAgICAgICAgX3RoaXMuYWN0b3Iuc3RvcFRhbGtpbmcoKTtcbiAgICAgICAgICBpZiAobmV4dCA9PT0gJ2F1ZGlvJykge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLnBsYXlOZXh0QWN0aW9uKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfSkodGhpcykpO1xuICAgIH1cbiAgICBpZiAobmV4dCA9PT0gJ2NsaWNrJykge1xuICAgICAgdGhpcy5hY3Rvci5zaG93TmV4dCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFjdG9yLmhpZGVOZXh0KCk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgbmV4dCA9PT0gXCJudW1iZXJcIikge1xuICAgICAgcmV0dXJuIGFyaXN0b3RsZS50aW1lb3V0KChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLnBsYXlOZXh0QWN0aW9uKCk7XG4gICAgICAgIH07XG4gICAgICB9KSh0aGlzKSwgbmV4dCk7XG4gICAgfVxuICB9O1xuXG4gIFRleHREaWFsb2d1ZS5wcm90b3R5cGUucGF1c2VUaW1lbGluZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciByZWYsIHJlZjE7XG4gICAgaWYgKChyZWYgPSB0aGlzLnRyYWNrKSAhPSBudWxsKSB7XG4gICAgICByZWYuc291bmQucGF1c2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKChyZWYxID0gdGhpcy5hY3RvcikgIT0gbnVsbCkge1xuICAgICAgcmVmMS5zdG9wVGFsa2luZygpO1xuICAgIH1cbiAgICByZXR1cm4gUHViU3ViLnB1Ymxpc2goXCJ0aW1lcnMucGF1c2VcIik7XG4gIH07XG5cbiAgVGV4dERpYWxvZ3VlLnByb3RvdHlwZS5wbGF5VGltZWxpbmUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVmLCByZWYxO1xuICAgIGlmICgocmVmID0gdGhpcy50cmFjaykgIT0gbnVsbCkge1xuICAgICAgcmVmLnNvdW5kLnBhdXNlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoKHJlZjEgPSB0aGlzLmFjdG9yKSAhPSBudWxsKSB7XG4gICAgICByZWYxLnN0YXJ0VGFsa2luZygpO1xuICAgIH1cbiAgICByZXR1cm4gUHViU3ViLnB1Ymxpc2goXCJ0aW1lcnMucmVzdW1lXCIpO1xuICB9O1xuXG4gIFRleHREaWFsb2d1ZS5wcm90b3R5cGUucmVwbGF5VGltZWxpbmUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVmO1xuICAgIGlmICgocmVmID0gdGhpcy50cmFjaykgIT0gbnVsbCkge1xuICAgICAgcmVmLnN0b3AoKTtcbiAgICB9XG4gICAgdGhpcy5zZXF1ZW5jZS5yZXNldCgpO1xuICAgIHJldHVybiB0aGlzLnBsYXlBY3Rpb24odGhpcy5zZXF1ZW5jZS5nZXRDdXJyZW50SXRlbSgpLmFjdGlvbik7XG4gIH07XG5cbiAgVGV4dERpYWxvZ3VlLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIGlmIChkYXRhLmV2ZW50ID09PSAnY29tcGxldGUnKSB7XG4gICAgICByZXR1cm4gdGhpcy50cmFjay5hZGRPbkNvbXBsZXRlKChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGFyaXN0b3RsZS5jb21tYW5kZXJbXCJkb1wiXShkYXRhLmFjdGlvbik7XG4gICAgICAgIH07XG4gICAgICB9KSh0aGlzKSk7XG4gICAgfVxuICB9O1xuXG4gIFRleHREaWFsb2d1ZS5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgICBQdWJTdWIucHVibGlzaCgnZGlhbG9ndWUuY29tcGxldGUnKTtcbiAgICByZXR1cm4gdGhpcy5hY3Rvci5jb21wbGV0ZSgpO1xuICB9O1xuXG4gIFRleHREaWFsb2d1ZS5wcm90b3R5cGUucGxheU5leHRBY3Rpb24gPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy50cmFjayAhPSBudWxsKSB7XG4gICAgICB0aGlzLnRyYWNrLnN0b3AoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuc2VxdWVuY2UuaXNBdExhc3RJdGVtKCkpIHtcbiAgICAgIHJldHVybiB0aGlzLmNvbXBsZXRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VxdWVuY2UubmV4dCgpO1xuICAgICAgcmV0dXJuIHRoaXMucGxheUFjdGlvbih0aGlzLnNlcXVlbmNlLmdldEN1cnJlbnRJdGVtKCkuYWN0aW9uKTtcbiAgICB9XG4gIH07XG5cbiAgVGV4dERpYWxvZ3VlLnByb3RvdHlwZS5wbGF5QWN0aW9uID0gZnVuY3Rpb24oYWN0aW9uSWQpIHtcbiAgICB2YXIgYWN0aW9uLCBvbGRBY3RvcjtcbiAgICBpZiAodGhpcy5kYXRhLmFjdGlvbnNbYWN0aW9uSWRdID09IG51bGwpIHtcbiAgICAgIGFyaXN0b3RsZVtcInRocm93XCJdKFwiRGlhbG9ndWUgd2FzIGFza2VkIHRvIHBsYXkgdGhlIGFjdGlvbiBuYW1lZCBgXCIgKyBhY3Rpb25JZCArIFwiYCwgYnV0IG5vIGFjdGlvbiB3aXRoIHRoYXQgaWQgZXhpc3RzLlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYWN0aW9uID0gdGhpcy5vdmVybGF5RGVmYXVsdHMoYWN0aW9uSWQpO1xuICAgIG9sZEFjdG9yID0gdGhpcy5hY3RvcjtcbiAgICB0aGlzLnNldEFjdG9yKGFjdGlvbi5hY3Rvcik7XG4gICAgaWYgKG9sZEFjdG9yICE9PSB2b2lkIDApIHtcbiAgICAgIGlmIChvbGRBY3RvciAhPT0gdGhpcy5hY3Rvcikge1xuICAgICAgICBvbGRBY3Rvci5zbGVlcCgpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoYWN0aW9uLmFjdGlvbiAhPSBudWxsKSB7XG4gICAgICBhcmlzdG90bGUuY29tbWFuZGVyW1wiZG9cIl0oYWN0aW9uLmFjdGlvbiwgdHJ1ZSk7XG4gICAgfVxuICAgIHRoaXMuYWN0b3Iuc3BlY2lhbChhY3Rpb24pO1xuICAgIHJldHVybiB0aGlzLnNheShhY3Rpb24udGV4dCwgYWN0aW9uLmF1ZGlvLCBhY3Rpb24ubmV4dCwgYWN0aW9uLnR4dFBvcyk7XG4gIH07XG5cbiAgVGV4dERpYWxvZ3VlLnByb3RvdHlwZS5nZXRJbmRleE9mQWN0aW9uID0gZnVuY3Rpb24oYWN0aW9uKSB7XG4gICAgdmFyIGRhdGEsIGksIGosIGxlbiwgcmVmO1xuICAgIGlmICh0aGlzLnRpbWVsaW5lID09IG51bGwpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICByZWYgPSB0aGlzLnRpbWVsaW5lO1xuICAgIGZvciAoaSA9IGogPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBqIDwgbGVuOyBpID0gKytqKSB7XG4gICAgICBkYXRhID0gcmVmW2ldO1xuICAgICAgaWYgKGRhdGEuYWN0aW9uID09PSBhY3Rpb24pIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIFRleHREaWFsb2d1ZS5wcm90b3R5cGUub3ZlcmxheURlZmF1bHRzID0gZnVuY3Rpb24oYWN0aW9uSWQpIHtcbiAgICB2YXIgYWN0aW9ucywga2V5LCByZWYsIHZhbDtcbiAgICBpZiAodGhpcy5kYXRhLmRlZmF1bHRzID09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLmRhdGEuYWN0aW9uc1thY3Rpb25JZF07XG4gICAgfVxuICAgIGFjdGlvbnMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YS5kZWZhdWx0cykpO1xuICAgIHJlZiA9IHRoaXMuZGF0YS5hY3Rpb25zW2FjdGlvbklkXTtcbiAgICBmb3IgKGtleSBpbiByZWYpIHtcbiAgICAgIHZhbCA9IHJlZltrZXldO1xuICAgICAgYWN0aW9uc1trZXldID0gdmFsO1xuICAgIH1cbiAgICByZXR1cm4gYWN0aW9ucztcbiAgfTtcblxuICBUZXh0RGlhbG9ndWUucHJvdG90eXBlLnNldEFjdG9yID0gZnVuY3Rpb24oYWN0b3IpIHtcbiAgICBpZiAoYWN0b3IgPT0gbnVsbCkge1xuICAgICAgdGhpcy5hY3RvciA9IHRoaXMuY3RhbmxlZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc3dpdGNoIChhY3Rvcikge1xuICAgICAgY2FzZSAnd2FyY29yZSc6XG4gICAgICBjYXNlICdzZWt0aW11cyc6XG4gICAgICBjYXNlICdmaXJld2FsbCc6XG4gICAgICBjYXNlICdwYWNrZXQnOlxuICAgICAgICByZXR1cm4gdGhpcy5hY3RvciA9IHRoaXMuY2M7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gdGhpcy5hY3RvciA9IHRoaXMuY3RhbmxlZTtcbiAgICB9XG4gIH07XG5cbiAgVGV4dERpYWxvZ3VlLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGosIGxlbiwgcmVmLCByZXN1bHRzLCB0b2tlbjtcbiAgICB0aGlzLmRhdGEgPSBudWxsO1xuICAgIHRoaXMudGltZWxpbmUgPSBudWxsO1xuICAgIHRoaXMuc2VxdWVuY2UgPSBudWxsO1xuICAgIHRoaXMuY3RhbmxlZS5kZXN0cm95KCk7XG4gICAgdGhpcy5jYy5kZXN0cm95KCk7XG4gICAgaWYgKHRoaXMudHJhY2sgIT0gbnVsbCkge1xuICAgICAgdGhpcy50cmFjay5zdG9wKCk7XG4gICAgfVxuICAgIHJlZiA9IHRoaXMudG9rZW5zO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGogPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgIHRva2VuID0gcmVmW2pdO1xuICAgICAgcmVzdWx0cy5wdXNoKFB1YlN1Yi51bnN1YnNjcmliZSh0b2tlbikpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICByZXR1cm4gVGV4dERpYWxvZ3VlO1xuXG59KSgpO1xuIl19

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
