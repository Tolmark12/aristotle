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

var pxSymbolString = pxSymbolString || ''; pxSymbolString+='<symbol  id="New_Symbol" viewBox="-10.3 -10.3 20.6 20.6">	<polygon class="st35" points="9.8,-9.8 -9.8,-9.8 -9.8,9.8 9.8,9.8 	"/></symbol>';
var pxSvgIconString = pxSvgIconString || ''; pxSvgIconString+='<g id="first" class="aristotle-svg-svg ">			<use xlink:href="#New_Symbol"  width="20.6" height="20.6" x="-10.3" y="-10.3" transform="matrix(0.7046 0 0 -0.7046 11.2573 11.2573)" style="overflow:visible;"/></g><g id="ep5-badge" class="aristotle-svg-svg ">	<path  class="white  st17" d="M26.599,12.5H9.8v6.9h0.098v6.462l7.933,2.203l0.535-1.931l-6.468-1.797v-5.339h9.001		v0.257c-0.101,0.495-0.286,1.021-0.632,1.393c-0.347,0.366-0.828,0.55-1.468,0.55h-2.6h-0.6v2h0.6h2.6h3.8v3.801h2v-3.801h2V12.5		L26.599,12.5z M17.199,14.5v2.503H15.5V14.5H17.199z M11.8,17.003V14.5h1.7v2.503H11.8z M19.199,17.003V14.5h1.7v2.503H19.199z		 M24.599,21.199h-1.7v-1.704c0.141-0.795,0.106-1.438,0.097-1.563l-0.066-0.929h-0.031V14.5h1.7V21.199z"/><g  class="yellow " >		<g>			<path class="st16" d="M18.199,6.4l12,6.299V26.4l-12,6.299l-12-6.299V12.699L18.199,6.4 M18.199,4L4,11.399v16.396l14.199,7.396				l14.2-7.396V11.4L18.199,4L18.199,4z"/></g>	</g></g><g id="ep4-badge" class="aristotle-svg-svg ">	<g  class="white " >		<rect x="23.383" y="25.405" class="st17" width="8.213" height="2.123"/><rect x="5.415" y="25.405" class="st17" width="7.354" height="2.123"/></g>	<g  class="yellow " >		<path id="XMLID_403_" class="st16" d="M18.152,6.396l12.029,6.296v13.75l-12.029,6.297L6.123,26.442v-13.75L18.152,6.396			 M18.152,4L4,11.408v16.317l14.152,7.408l14.152-7.408V11.408L18.152,4L18.152,4z"/><path class="st16" d="M18.144,14.56c-1.564,0-2.836-1.271-2.836-2.836c0-1.562,1.272-2.835,2.836-2.835			c1.563,0,2.835,1.272,2.835,2.835C20.98,13.288,19.708,14.56,18.144,14.56z M18.144,10.688c-0.571,0-1.036,0.468-1.036,1.036			c0,0.571,0.465,1.036,1.036,1.036c0.571,0,1.036-0.465,1.036-1.036C19.18,11.153,18.715,10.688,18.144,10.688z"/><path class="st16" d="M22.812,23.475l1.638-0.746l-2.858-6.271l0.25-1.139h-7.395l0.248,1.128l-2.863,6.279l1.638,0.746			l1.869-4.101l0.56,2.548l-0.651,7.104v0.688h1.8l-0.004-0.604l0.584-6.346h1.033l0.58,6.263v0.688h1.8l-0.004-0.771l-0.646-7.021			l0.558-2.536L22.812,23.475z M17.531,20.964l-0.846-3.846h2.918l-0.845,3.846H17.531z"/></g></g><g id="ep3-badge" class="aristotle-svg-svg ">	<polygon  class="white  st17" points="18.2,8.17 7.825,13.626 8.756,15.396 18.2,10.43 25.974,14.517 16.851,19.275 		17.776,21.048 26.901,16.289 26.901,18 26.901,18.696 16.849,23.98 17.78,25.751 26.901,20.956 26.901,21.898 26.901,23.296 		16.849,28.58 17.78,30.351 26.901,25.556 26.901,29.699 28.901,29.699 28.901,24.504 28.901,21.898 28.901,19.904 28.901,18 		28.901,13.796 	"/><g  class="yellow " >		<g id="XMLID_68_" class="aristotle-svg-svg ">			<path class="st16" d="M25.901,18.3c-0.1,0.396-0.4,0.7-0.8,0.7c-0.4,0-0.6-0.304-0.5-0.7c0.1-0.396,0.4-0.7,0.8-0.7				S25.901,17.9,25.901,18.3z"/></g>		<g id="XMLID_67_" class="aristotle-svg-svg ">			<path class="st16" d="M25.901,22.9c-0.1,0.396-0.4,0.693-0.8,0.693c-0.4,0-0.6-0.3-0.5-0.693c0.1-0.397,0.4-0.701,0.8-0.701				S25.901,22.5,25.901,22.9z"/></g>		<g id="XMLID_66_" class="aristotle-svg-svg ">			<path class="st16" d="M25.901,27.6c-0.1,0.4-0.4,0.7-0.8,0.7c-0.4,0-0.6-0.3-0.5-0.7c0.1-0.396,0.4-0.693,0.8-0.693				S25.901,27.199,25.901,27.6z"/></g>		<path class="st16" d="M32.4,11.399L18.2,4L4,11.397v16.396l14.2,7.396l0.048-0.025l0.052,0.027v-0.058l14.1-7.344V11.399			L32.4,11.399z M16.1,31.597l-9.9-5.192v-11.5l9.9,5.193V31.597z M30.2,26.4l-11.9,6.246V18.8L6.395,12.597L18.2,6.4l12,6.299V26.4			z"/></g></g><g id="ep2-badge" class="aristotle-svg-svg ">	<g  class="white" >		<polygon class="st17" points="16.195,19.863 17.205,18.137 10.982,14.492 15.964,11.886 15.037,10.114 8,13.795 8,21.9 10,21.9 			10,16.235 		"/><polygon class="st17" points="19.2,28.048 19.2,21.1 17.2,21.1 17.2,28.06 12.058,25.411 11.142,27.189 18.203,30.826 			25.163,27.186 24.237,25.414 		"/><polygon class="st17" points="21.163,10.114 20.237,11.886 25.271,14.52 19.094,18.137 20.105,19.863 26.2,16.293 26.2,21.9 			28.2,21.9 28.2,13.795 		"/></g>	<g  class="yellow " >		<g>			<path class="st16" d="M18.2,6.4l12,6.299V26.4l-12,6.299L6.2,26.4V12.699L18.2,6.4 M18.2,4L4,11.397v16.396l14.2,7.396				l14.2-7.396V11.397L18.2,4L18.2,4z"/></g>	</g></g><g id="ep1-badge" class="aristotle-svg-svg ">	<g  class="white " >		<polygon class="st17" points="11.798,14.884 10.402,16.315 12.642,18.5 5.501,18.5 5.501,20.5 12.727,20.5 10.384,22.901 			11.816,24.298 16.515,19.482 		"/><polygon class="st17" points="22.907,13.207 21.493,11.793 19.2,14.086 19.2,6.1 17.2,6.1 17.2,14.086 14.907,11.793 			13.493,13.207 18.2,17.914 		"/><polygon class="st17" points="13.502,25.884 14.898,27.315 17.2,25.071 17.2,33 19.2,33 19.2,25.071 21.502,27.315 22.898,25.884 			18.2,21.303 		"/><polygon class="st17" points="31.7,18.5 23.702,18.5 25.989,16.324 24.61,14.875 19.768,19.482 24.593,24.307 26.007,22.893 			23.614,20.5 31.7,20.5 		"/></g>	<g  class="yellow" >		<g>			<path class="st16" d="M18.2,6.4l12,6.299V26.4l-12,6.299L6.2,26.4V12.699L18.2,6.4 M18.2,4L4,11.397v16.396l14.2,7.396				l14.2-7.396V11.397L18.2,4L18.2,4z"/></g>	</g></g><g id="rank-badge-master-cadet" class="aristotle-svg-svg ">	<polygon class="st17" points="30.5,4 31.3,5.7 33,6 31.8,7.2 32.1,9 30.5,8.2 29,9 29.3,7.2 28.1,6 29.8,5.7 	"/><polygon class="st17" points="6.5,4 7.201,5.7 8.901,6 7.701,7.2 8,9 6.5,8.2 5,9 5.3,7.2 4,6 5.8,5.7 	"/><polygon class="st16" points="15.5,33.3 13.201,32.101 13,32.2 13,32 7.901,29.3 7.901,17 16.1,12.7 16.6,10.1 5.8,15.7 		5.8,30.601 15,35.399 	"/><rect x="4" y="4" class="st19" width="29" height="39.104"/><polygon class="st16" points="20.5,10.1 20.901,12.7 29.1,17 29.1,29.3 22.1,33 21.3,35.899 31.201,30.601 31.201,15.7 	"/><g>		<polygon class="st17" points="19.201,33.3 16.401,35.3 18.5,26 15,28.8 17.1,16.101 20.6,16.101 19.201,21.7 22,19.601 			19.6,29.601 22.201,27.601 17.701,43.101 		"/><rect x="13.5" y="15.399" class="st17" width="9.897" height="1.396"/><polygon class="st17" points="18.5,6.899 17.1,15.399 19.901,15.399 		"/><g id="XMLID_45_" class="aristotle-svg-svg ">			<g id="XMLID_157_" class="aristotle-svg-svg ">				<g id="XMLID_185_" class="aristotle-svg-svg ">					<g id="XMLID_229_" class="aristotle-svg-svg ">						<polygon class="st17" points="18.5,5.5 17.1,6.3 17.1,8.2 18.5,9 19.901,8.2 19.901,6.3 						"/></g>				</g>			</g>		</g>	</g></g><g id="rank-badge-cyber-cadet" class="aristotle-svg-svg ">	<polygon class="st16" points="20.75,11.1 21.051,13.3 27.75,13.3 27.75,29 21.051,33.601 20.75,36.5 29.851,30.101 29.851,11.1 			"/><polygon class="st16" points="16.051,33.7 9.45,29.3 9.45,13.3 16.051,13.3 16.45,11.1 7.25,11.1 7.351,30.399 16.45,36.5 	"/><line class="st32" x1="7.939" y1="19.672" x2="13.262" y2="19.672"/><line class="st32" x1="7.939" y1="25.802" x2="14.449" y2="25.802"/><line class="st32" x1="23.841" y1="19.672" x2="29.164" y2="19.672"/><line class="st32" x1="22.653" y1="25.802" x2="29.164" y2="25.802"/><g>		<g>			<g>				<rect x="4" y="4" class="st19" width="29" height="39.104"/><polygon class="st17" points="18.551,16.101 15.75,18.899 18.551,43 21.351,18.899 				"/></g>		</g>		<rect x="13.551" y="15.399" class="st17" width="9.897" height="1.396"/><polygon class="st17" points="18.551,6.899 17.15,15.399 19.95,15.399 		"/><g id="XMLID_166_" class="aristotle-svg-svg ">			<g id="XMLID_168_" class="aristotle-svg-svg ">				<g id="XMLID_169_" class="aristotle-svg-svg ">					<g id="XMLID_170_" class="aristotle-svg-svg ">						<polygon class="st17" points="18.551,5.5 17.15,6.3 17.15,8.2 18.551,9 19.95,8.2 19.95,6.3 						"/></g>				</g>			</g>		</g>	</g>	<polygon class="st17" points="30.551,4 31.351,5.7 33.051,6 31.851,7.2 32.15,9 30.551,8.2 29.051,9 29.351,7.2 28.051,6 		29.851,5.7 	"/><polygon class="st17" points="6.551,4 7.25,5.7 8.95,6 7.75,7.2 8.051,9 6.551,8.2 5.051,9 5.351,7.2 4.051,6 5.75,5.7 	"/></g><g id="rank-badge-technical-cadet" class="aristotle-svg-svg ">	<rect x="4" y="4" class="st19" width="29" height="39.104"/><g>		<path class="st16" d="M27.7,13.3V29l-9.2,6.396L9.4,29.2l-0.101-16h18.4 M29.8,11.1H7.2l0.1,19.299L18.602,38l11.3-7.896v-19			L29.8,11.1L29.8,11.1z"/></g>	<line class="st32" x1="7.8" y1="19.672" x2="29.2" y2="19.672"/><polygon class="st17" points="30.5,4 31.3,5.7 33,6 31.8,7.2 32.102,9 30.5,8.2 29,9 29.3,7.2 28,6 29.8,5.7 	"/><polygon class="st17" points="6.401,4 7.2,5.7 8.901,6 7.7,7.2 8,9 6.401,8.2 5,9 5.2,7.2 4,6 5.7,5.7 	"/><line class="st32" x1="7.8" y1="25.802" x2="29.2" y2="25.802"/></g><g id="rank-badge-cadet-first-class" class="aristotle-svg-svg ">	<rect x="4" y="4" class="st19" width="29" height="39.104"/><g>		<path class="st16" d="M27.7,13.3V29l-9.2,6.396L9.4,29.2l-0.101-16h18.4 M29.8,11.1H7.2l0.1,19.299L18.602,38l11.3-7.896v-19			L29.8,11.1L29.8,11.1z"/></g>	<line class="st32" x1="7.8" y1="21" x2="29.2" y2="21"/><polygon class="st17" points="30.5,4 31.3,5.7 33,6 31.8,7.2 32.102,9 30.5,8.2 29,9 29.3,7.2 28,6 29.8,5.7 	"/><polygon class="st17" points="6.401,4 7.2,5.7 8.901,6 7.7,7.2 8,9 6.401,8.2 5,9 5.2,7.2 4,6 5.7,5.7 	"/></g><g id="rank-badge-cadet" class="aristotle-svg-svg ">	<rect x="4" y="4" class="st19" width="29" height="39.104"/><g>		<path class="st16" d="M27.649,13.3V29l-9.199,6.399l-9.101-6.196l-0.1-16h18.399 M29.849,11.1h-22.7L7.25,30.399l11.3,7.604			l11.3-7.896L29.849,11.1L29.849,11.1z"/></g>	<line class="st32" x1="7.849" y1="21" x2="29.25" y2="21"/></g><g id="rank-badge-recruit" class="aristotle-svg-svg ">	<g>		<path class="st16" d="M27.75,13.3V29l-9.2,6.396L9.45,29.2l-0.101-16h18.4 M29.849,11.1h-22.7L7.25,30.399l11.3,7.604l11.3-7.896			L29.849,11.1L29.849,11.1z"/></g>	<rect x="4" y="4" class="st19" width="29" height="39.104"/></g><g id="list-progress-base" class="aristotle-svg-svg ">	<g id="hex-outer_1_" class="aristotle-svg-svg ">		<g id="XMLID_1080_" class="aristotle-svg-svg ">			<path class="st12" d="M18.2,7.201l11.3,5.896v12.899l-11.3,5.896L6.9,25.996V13.101L18.2,7.201 M18.2,4L4,11.396v16.4l14.2,7.396				l14.2-7.396v-16.4L18.2,4L18.2,4z"/></g>	</g>	<g id="hex-inner_1_" class="aristotle-svg-svg ">		<g id="XMLID_2384_" class="aristotle-svg-svg ">			<polygon class="st16" points="18.2,29.9 9.099,25 9.099,14.101 18.2,9.201 27.2,14.101 27.2,24.9 			"/></g>	</g></g><g id="list-progress-complete" class="aristotle-svg-svg ">	<g id="hex-inner" class="aristotle-svg-svg ">		<g>			<polygon class="st34" points="21.8,13.801 25.701,16.201 21.201,16.201 20.5,16.201 27.201,21.9 27.201,14.101 18.101,9.201 				16.101,10.201 			"/></g>		<g>			<polygon class="st34" points="15.5,23.5 11.9,21.101 16.101,21.101 17.8,21 9.101,14.301 9.101,25 18.101,29.9 22.201,27.701 							"/></g>	</g>	<g id="hex-outer" class="aristotle-svg-svg ">		<polygon class="st6" points="24,28.801 18.101,32 6.8,26 6.8,13.101 10.4,11.201 8.4,9.101 4,11.4 4,27.701 18.101,35.101 			26.8,30.601 		"/><polygon class="st6" points="18.101,4 11.5,7.4 14.4,9.201 18.101,7.201 29.5,13.101 29.5,26 27.701,26.9 29.9,29 32.3,27.701 			32.3,11.4 		"/></g>	<g id="lightning_1_" class="aristotle-svg-svg ">		<g id="lightning" class="aristotle-svg-svg ">			<polygon class="st16" points="7.701,6.5 21.201,14.9 17.101,14.9 28.3,24.5 23.4,24.5 30.5,31.5 16.201,22.301 21.601,22.301 				9.601,13.101 14,12.9 			"/></g>	</g></g><g id="ctanlee" class="aristotle-svg-svg ">	<circle class="st17" cx="21" cy="21" r="6.398"/><path class="st7" d="M25.5,37.4c7.2-2,12.5-8.5,12.5-16.396"/><path class="st7" d="M4,21c0,7.801,5.3,14.396,12.5,16.396"/><path class="st7" d="M32.801,8.8c-3.1-2.896-7.2-4.8-11.8-4.8c-4.7,0-8.9,1.896-12,4.896"/></g><g id="action-btn-fist" class="aristotle-svg-svg ">	<polygon class="st17" points="35.7,86.896 4,70.295 4,33.795 35.7,17.196 67.401,33.795 67.401,70.295 	"/><polygon class="st12" points="35.7,84.497 6.2,68.997 6.2,34.997 35.7,19.596 65.2,34.997 65.2,68.997 	"/><path class="st25" d="M42.3,12.696c0,0,7.4,2,10.104,3.4c-3.397,6.5-11.5,2.397-11.5,2.397s-2.3,2.799-3,3.603		c11.103,5.196,26.2,0.696,26.2,0.696l-0.897,5.896l-5.603,13.5l-9.7,5L30.205,82.497L9.504,71.691l25.799-32.396l-2.698-19.104		L42.3,12.696z"/><path class="st28" d="M42.3,12.696c0,0,7.4,2,10.104,3.4c-3.397,6.5-11.5,2.397-11.5,2.397s-2.3,2.799-3,3.603		c11.103,5.196,26.2,0.696,26.2,0.696l-0.897,5.896l-5.603,13.5l-9.7,5L30.205,82.497L9.504,71.691l25.799-32.396l-2.698-19.104		L42.3,12.696z"/><path class="st25" d="M48,5.497l-2.103-1.104c-1.8-0.896-3.897-0.2-4.8,1.5l-7,13.396l8.5,4.396l7-13.396		C50.5,8.497,49.8,6.396,48,5.497"/><path class="st28" d="M48,5.497l-2.103-1.104c-1.8-0.896-3.897-0.2-4.8,1.5l-7,13.396l8.5,4.396l7-13.396		C50.5,8.497,49.8,6.396,48,5.497z"/><path class="st25" d="M54.5,6.896l2.604,1.7c1.3,0.8,1.695,2.5,0.8,3.8l-7.3,11.2c-3-0.9-4.397-2.103-6.305-4.304l6.305-11.396		C51.5,6.596,53.2,6.096,54.5,6.896"/><path class="st28" d="M54.5,6.896l2.604,1.7c1.3,0.8,1.695,2.5,0.8,3.8l-7.3,11.2c-3-0.9-4.397-2.103-6.305-4.304l6.305-11.396		C51.5,6.596,53.2,6.096,54.5,6.896z"/><path class="st25" d="M62.5,14.997l-1.896-1.307c-1.305-0.896-3-0.5-3.805,0.7l-6.102,9.2c1.3,2,3.102,3.6,6,4l6.397-8.9		C64,17.497,63.7,15.795,62.5,14.997"/><path class="st28" d="M62.5,14.997l-1.896-1.307c-1.305-0.896-3-0.5-3.805,0.7l-6.102,9.2c1.3,2,3.102,3.6,6,4l6.397-8.9		C64,17.497,63.7,15.795,62.5,14.997z"/><path class="st25" d="M67.102,24.196l-5.302,6.9c-2.305-0.7-3.898-1.9-5.104-3.4l5.3-7.3c0.897-1.3,2.8-1.5,4-0.5l0.7,0.604		C67.8,21.396,68.001,22.997,67.102,24.196"/><path class="st28" d="M67.102,24.196l-5.302,6.9c-2.305-0.7-3.898-1.9-5.104-3.4l5.3-7.3c0.897-1.3,2.8-1.5,4-0.5l0.7,0.604		C67.8,21.396,68.001,22.997,67.102,24.196z"/><path class="st25" d="M58,34.096c0.897-0.603,3.8-3,3.8-3c-2.1-0.4-3.8-1.603-5.1-3.4l-2.803,2.7c-1.104,1-0.897,2.7,0.303,3.5		l0.6,0.396C55.8,34.896,57.2,34.696,58,34.096"/><path class="st39" d="M58,34.096c0.897-0.603,3.8-3,3.8-3c-2.1-0.4-3.8-1.603-5.1-3.4l-2.803,2.7c-1.104,1-0.897,2.7,0.303,3.5		l0.6,0.396C55.8,34.896,57.2,34.696,58,34.096z"/><path class="st25" d="M50.2,30.997L49,30.099c-0.8-0.603-1-1.7-0.5-2.603l2.2-3.897c1.397,2.5,3.397,3.8,6,4l-3.4,3.196		C52.5,31.696,51.2,31.696,50.2,30.997"/><path class="st39" d="M50.2,30.997L49,30.099c-0.8-0.603-1-1.7-0.5-2.603l2.2-3.897c1.397,2.5,3.397,3.8,6,4l-3.4,3.196		C52.5,31.696,51.2,31.696,50.2,30.997z"/><path class="st25" d="M41.602,24.795l6,4.304l3.103-5.5c-3-0.7-4.5-1.804-6.303-4.304L41.602,24.795z"/><path class="st28" d="M41.602,24.795l6,4.304l3.103-5.5c-3-0.7-4.5-1.804-6.303-4.304L41.602,24.795z"/><path class="st25" d="M10,71.497l20.897-33.397l-2.197-19l10.8-10.2c0,0,10.104,5.3,12.8,6.7c-3.396,6.5-10.101,2.3-10.101,2.3		s-1.302,2.896-1.899,3.7c9,4.696,10.807,9,3.5,16.397"/><path class="st38" d="M10,71.497l20.897-33.397l-2.197-19l10.8-10.2c0,0,10.104,5.3,12.8,6.7c-3.396,6.5-10.101,2.3-10.101,2.3		s-1.302,2.896-1.899,3.7c9,4.696,10.807,9,3.5,16.397"/><path class="st17" d="M26,73.696c0.897-8.3,2.8-16.5,5.604-24.6c0.195,1.8,0.396,3.6,0.695,5.3		c1.898-5.8,4.398-11.396,7.305-16.896C39.3,39.603,39.207,41.603,39,43.603c2.3-3.5,4.7-6.804,7.397-10		c1.303-1.603,1.7-1.2,0.603,0.5c-3.8,6.104-6.896,12.5-9.3,19c-0.103-1.804-0.2-3.603-0.2-5.396c-2.2,5.195-4,10.5-5.3,15.896		c-0.4-1.896-0.803-3.804-1.2-5.804C28.901,62.997,27.2,68.295,26,73.696"/></g><g id="mini-generation" class="aristotle-svg-svg ">	<rect x="4" y="4" class="st19" width="179" height="132.801"/><rect x="41.601" y="53.101" class="st27" width="87.7" height="11.5"/><path class="st12" d="M127.901,63h-84.7v-8.396h84.7V63L127.901,63z M130.901,51.601h-3h-84.7h-3v3v8.5v3h3h84.7h3v-3v-8.5V51.601		L130.901,51.601z"/><rect x="36" y="59.801" class="st27" width="99" height="66.5"/><path class="st12" d="M133.5,124.801h-96v-63.5h96V124.801z M136.5,58.301h-3h-96h-3v3v63.5v3h3h96h3v-3v-63.5V58.301z"/><polygon class="st12" points="27.101,127.801 48.901,127.801 46.5,5.9 29.401,5.9 	"/><rect x="44.101" y="55.601" class="st27" width="82.7" height="6.5"/><path class="st24" d="M125.901,61h-80.7v-4.396h80.7V61L125.901,61z M127.901,54.601h-84.7v8.5h84.7V54.601L127.901,54.601z"/><rect x="38.5" y="62.301" class="st27" width="94" height="61.5"/><path class="st24" d="M131.5,122.801h-92v-59.5h92V122.801z M133.5,61.301h-96v63.5h96V61.301z"/><rect x="128.601" y="64.101" class="st17" width="7.103" height="1.396"/><rect x="128.601" y="64.101" class="st24" width="7.103" height="1.396"/><rect x="124.601" y="94.101" class="st17" width="7.103" height="1.3"/><rect x="124.601" y="94.101" class="st22" width="7.103" height="1.3"/><path class="st17" d="M36.101,64.801h5.7H36.101z"/><rect x="35.401" y="64.101" class="st24" width="7.1" height="1.396"/><rect x="39.401" y="94.101" class="st17" width="7.1" height="1.3"/><rect x="39.401" y="94.101" class="st22" width="7.1" height="1.3"/><rect x="37.601" y="62.801" class="st17" width="95.803" height="1.196"/><rect x="36.101" y="61.301" class="st24" width="98.803" height="4.196"/><rect x="83.301" y="71.201" class="st16" width="5.5" height="10.5"/><path class="st24" d="M87.901,80.701h-3.5v-8.5h3.5V80.701z M89.901,70.201h-2h-3.5h-2v2v8.5v2h2h3.5h2v-2v-8.5V70.201z"/><rect x="64.401" y="71.201" class="st16" width="5.5" height="10.5"/><path class="st24" d="M69,80.701h-3.5v-8.5H69V80.701z M71,70.201h-2h-3.5h-2v2v8.5v2h2H69h2v-2v-8.5V70.201z"/><rect x="73.901" y="71.201" class="st16" width="5.5" height="10.5"/><path class="st24" d="M78.401,80.701h-3.5v-8.5h3.5V80.701z M80.401,70.201h-2h-3.5h-2v2v8.5v2h2h3.5h2v-2v-8.5V70.201z"/><rect x="111.7" y="71.201" class="st16" width="5.5" height="10.5"/><path class="st24" d="M116.2,80.701h-3.5v-8.5h3.5V80.701z M118.2,70.201h-2h-3.5h-2v2v8.5v2h2h3.5h2v-2v-8.5V70.201z"/><rect x="121.101" y="71.201" class="st16" width="5.5" height="10.5"/><path class="st24" d="M125.601,80.701h-3.5v-8.5h3.5V80.701z M127.601,70.201h-2h-3.5h-2v2v8.5v2h2h3.5h2v-2v-8.5V70.201z"/><rect x="92.801" y="71.201" class="st16" width="5.5" height="10.5"/><path class="st24" d="M97.301,80.701h-3.5v-8.5h3.5V80.701z M99.301,70.201h-2h-3.5h-2v2v8.5v2h2h3.5h2v-2v-8.5V70.201z"/><rect x="102.2" y="71.201" class="st16" width="5.5" height="10.5"/><path class="st24" d="M106.801,80.701h-3.5v-8.5h3.5V80.701z M108.801,70.201h-2h-3.5h-2v2v8.5v2h2h3.5h2v-2v-8.5V70.201z"/><rect x="45.601" y="71.201" class="st16" width="5.5" height="10.5"/><path class="st24" d="M50.101,80.701h-3.5v-8.5h3.5V80.701z M52.101,70.201h-2h-3.5h-2v2v8.5v2h2h3.5h2v-2v-8.5V70.201z"/><rect x="55" y="71.201" class="st16" width="5.5" height="10.5"/><path class="st24" d="M59.5,80.701H56v-8.5h3.5V80.701z M61.5,70.201h-2H56h-2v2v8.5v2h2h3.5h2v-2v-8.5V70.201z"/><rect x="111.7" y="107.9" class="st16" width="5.5" height="10.5"/><path class="st24" d="M116.2,117.4h-3.5v-8.5h3.5V117.4z M118.2,106.9h-2h-3.5h-2v2v8.5v2h2h3.5h2v-2v-8.5V106.9z"/><rect x="121.101" y="107.9" class="st16" width="5.5" height="10.5"/><path class="st24" d="M125.601,117.4h-3.5v-8.5h3.5V117.4z M127.601,106.9h-2h-3.5h-2v2v8.5v2h2h3.5h2v-2v-8.5V106.9z"/><rect x="45.601" y="107.9" class="st16" width="5.5" height="10.5"/><path class="st24" d="M50.101,117.4h-3.5v-8.5h3.5V117.4z M52.101,106.9h-2h-3.5h-2v2v8.5v2h2h3.5h2v-2v-8.5V106.9z"/><rect x="55" y="107.9" class="st16" width="5.5" height="10.5"/><path class="st24" d="M59.5,117.4H56v-8.5h3.5V117.4z M61.5,106.9h-2H56h-2v2v8.5v2h2h3.5h2v-2v-8.5V106.9z"/><rect x="25.601" y="11.101" class="st12" width="24.7" height="4"/><path class="st12" d="M49.301,14H26.7v-1.896h22.601V14z M51.401,10h-2.103H26.697h-2.103v2.104V14v2.104h2.103h22.604h2.103V14		v-1.896L51.401,10L51.401,10z"/><g>		<g>			<g>				<g>					<g>						<g>							<g>								<g>									<g>										<g>											<g>												<defs>													<path id="SVGID_1_" d="M138.601,97.201v19.104h15.101c0.104-2.195,1.896-3.896,4.104-3.896c2.193,0,4,1.7,4.104,3.896														h14.799V97.201H138.601z"/></defs>												<clipPath id="SVGID_2_">													<use xlink:href="#SVGID_1_"  style="overflow:visible;"/></clipPath>												<path class="st20" d="M174.801,124.801H140.6V99.2h34.201V124.801z M176.801,97.201H138.6v29.604h38.201V97.201z"/></g>										</g>									</g>								</g>							</g>						</g>					</g>				</g>			</g>		</g>		<g>			<g>				<g>					<g>						<g>							<g>								<g>									<g>										<g>											<g>												<defs>													<path id="SVGID_3_" d="M138.601,97.201v19.104h15.101c0.104-2.195,1.896-3.896,4.104-3.896c2.193,0,4,1.7,4.104,3.896														h14.799V97.201H138.601z"/></defs>												<clipPath id="SVGID_4_">													<use xlink:href="#SVGID_3_"  style="overflow:visible;"/></clipPath>												<circle class="st29" cx="157.801" cy="116.5" r="17.6"/></g>										</g>									</g>								</g>							</g>						</g>					</g>				</g>			</g>		</g>		<g>			<g>				<g>					<g>						<g>							<g>								<g>									<g>										<g>											<g>												<defs>													<path id="SVGID_5_" d="M138.601,97.201v19.104h15.101c0.104-2.195,1.896-3.896,4.104-3.896c2.193,0,4,1.7,4.104,3.896														h14.799V97.201H138.601z"/></defs>												<clipPath id="SVGID_6_">													<use xlink:href="#SVGID_5_"  style="overflow:visible;"/></clipPath>												<polyline class="st0" points="157.801,116.5 147.2,112.101 148.7,107.4 157.801,116.5 												"/></g>										</g>									</g>								</g>							</g>						</g>					</g>				</g>			</g>		</g>		<g>			<g>				<g>					<g>						<g>							<g>								<g>									<g>										<g>											<g>												<defs>													<path id="SVGID_7_" d="M138.601,97.201v19.104h15.101c0.104-2.195,1.896-3.896,4.104-3.896c2.193,0,4,1.7,4.104,3.896														h14.799V97.201H138.601z"/></defs>												<clipPath id="SVGID_8_">													<use xlink:href="#SVGID_7_"  style="overflow:visible;"/></clipPath>												<polyline class="st33" points="157.801,116.5 146.301,116.5 145.901,111.601 157.801,116.5 												"/></g>										</g>									</g>								</g>							</g>						</g>					</g>				</g>			</g>		</g>		<g>			<g>				<g>					<g>						<g>							<g>								<g>									<g>										<g>											<g>												<defs>													<path id="SVGID_9_" d="M138.601,97.201v19.104h15.101c0.104-2.195,1.896-3.896,4.104-3.896c2.193,0,4,1.7,4.104,3.896														h14.799V97.201H138.601z"/></defs>												<clipPath id="SVGID_10_">													<use xlink:href="#SVGID_9_"  style="overflow:visible;"/></clipPath>												<polyline class="st31" points="157.801,116.5 168.5,112.101 170.7,116.5 157.801,116.5 												"/></g>										</g>									</g>								</g>							</g>						</g>					</g>				</g>			</g>		</g>		<g>			<g>				<g>					<g>						<g>							<g>								<g>									<g>										<g>											<g>												<defs>													<path id="SVGID_11_" d="M138.601,97.201v19.104h15.101c0.104-2.195,1.896-3.896,4.104-3.896c2.193,0,4,1.7,4.104,3.896														h14.799V97.201H138.601z"/></defs>												<clipPath id="SVGID_12_">													<use xlink:href="#SVGID_11_"  style="overflow:visible;"/></clipPath>												<polyline class="st18" points="157.801,116.5 166,108.4 169.7,111.601 157.801,116.5 												"/></g>										</g>									</g>								</g>							</g>						</g>					</g>				</g>			</g>		</g>		<g>			<g>				<g>					<g>						<g>							<g>								<g>									<g>										<g>											<g>												<defs>													<path id="SVGID_13_" d="M138.601,97.201v19.104h15.101c0.104-2.195,1.896-3.896,4.104-3.896c2.193,0,4,1.7,4.104,3.896														h14.799V97.201H138.601z"/></defs>												<clipPath id="SVGID_14_">													<use xlink:href="#SVGID_13_"  style="overflow:visible;"/></clipPath>												<polyline class="st10" points="157.801,116.5 162.301,105.9 167,107.4 157.801,116.5 												"/></g>										</g>									</g>								</g>							</g>						</g>					</g>				</g>			</g>		</g>		<g>			<g>				<g>					<g>						<g>							<g>								<g>									<g>										<g>											<g>												<defs>													<path id="SVGID_15_" d="M138.601,97.201v19.104h15.101c0.104-2.195,1.896-3.896,4.104-3.896c2.193,0,4,1.7,4.104,3.896														h14.799V97.201H138.601z"/></defs>												<clipPath id="SVGID_16_">													<use xlink:href="#SVGID_15_"  style="overflow:visible;"/></clipPath>												<polyline class="st3" points="157.801,116.5 157.801,105 162.801,104.701 157.801,116.5 												"/></g>										</g>									</g>								</g>							</g>						</g>					</g>				</g>			</g>		</g>		<g>			<g>				<g>					<g>						<g>							<g>								<g>									<g>										<g>											<g>												<defs>													<path id="SVGID_17_" d="M138.601,97.201v19.104h15.101c0.104-2.195,1.896-3.896,4.104-3.896c2.193,0,4,1.7,4.104,3.896														h14.799V97.201H138.601z"/></defs>												<clipPath id="SVGID_18_">													<use xlink:href="#SVGID_17_"  style="overflow:visible;"/></clipPath>												<polyline class="st37" points="157.801,116.5 153.401,105.9 157.801,103.701 157.801,116.5 												"/></g>										</g>									</g>								</g>							</g>						</g>					</g>				</g>			</g>		</g>		<g>			<g>				<g>					<g>						<g>							<g>								<g>									<g>										<g>											<g>												<defs>													<path id="SVGID_19_" d="M138.601,97.201v19.104h15.101c0.104-2.195,1.896-3.896,4.104-3.896c2.193,0,4,1.7,4.104,3.896														h14.799V97.201H138.601z"/></defs>												<clipPath id="SVGID_20_">													<use xlink:href="#SVGID_19_"  style="overflow:visible;"/></clipPath>												<polyline class="st36" points="157.801,116.5 149.7,108.4 152.901,104.701 157.801,116.5 												"/></g>										</g>									</g>								</g>							</g>						</g>					</g>				</g>			</g>		</g>	</g>	<path class="st12" d="M177.2,125.801h-38.898V118H177.2V125.801z M179.2,116h-42.898v11.801H179.2V116z"/><path class="st30" d="M153.7,123.701H162V116.5c0-2.299-1.896-4.1-4.199-4.1c-2.301,0-4.102,1.896-4.102,4.1V123.701z"/><path class="st12" d="M162,125.4h-8.699v-1.3H162V125.4L162,125.4z M164,122.101h-12.699v5.3H164V122.101L164,122.101z"/><line class="st30" x1="161.901" y1="120.101" x2="153.5" y2="120.101"/></g><g id="mini-substation" class="aristotle-svg-svg ">	<rect x="4" y="4" class="st19" width="179" height="132.8"/><rect x="43.9" y="54.399" class="st27" width="102.6" height="71.896"/><path class="st12" d="M145,124.8H45.4V55.901H145V124.8z M148,52.899h-3H45.4h-3v3v68.896v3h3H145h3v-3V55.899V52.899z"/><rect x="40.1" y="53.399" class="st27" width="110.201" height="8.604"/><path class="st12" d="M148.801,60.5H41.6v-5.601h107.201V60.5z M151.801,51.899h-3H41.6h-3v3v5.604v3h3h107.201h3v-3v-5.604V51.899		z"/><polyline class="st8" points="26.9,84.601 55.701,127.101 57.6,127.101 50.5,84.601 26.9,84.601 19.801,127.101 21.801,127.101 		50.5,84.601 	"/><polygon class="st8" points="26.9,84.601 50.5,84.601 48.201,69.3 29.201,69.3 	"/><line class="st8" x1="26.9" y1="84.601" x2="48.201" y2="69.3"/><line class="st8" x1="29.201" y1="69.3" x2="50.5" y2="84.601"/><polygon class="st8" points="30.701,55.5 46.701,55.5 48.201,69.3 29.201,69.3 	"/><line class="st8" x1="48.201" y1="69.3" x2="30.701" y2="55.5"/><line class="st8" x1="46.701" y1="55.5" x2="29.201" y2="69.3"/><polygon class="st8" points="30.701,55.5 46.701,55.5 45.701,42.8 31.701,42.8 	"/><line class="st8" x1="30.701" y1="55.5" x2="45.701" y2="42.8"/><line class="st8" x1="31.701" y1="42.8" x2="46.701" y2="55.5"/><polygon class="st8" points="7.5,42.8 69.9,42.8 45.701,30.5 32.201,30.5 	"/><polygon class="st8" points="32.201,30.5 45.701,30.5 45.701,42.8 31.701,42.8 	"/><polyline class="st8" points="45.701,30.5 31.701,42.8 45.701,42.8 32.201,30.5 	"/><polyline class="st8" points="51,33.101 45.701,42.8 31.701,42.8 26.9,33.101 	"/><line class="st8" x1="26.9" y1="42.601" x2="19.301" y2="37"/><line class="st8" x1="51" y1="42.601" x2="58.1" y2="37"/><line class="st8" x1="58.1" y1="37" x2="58.1" y2="42.8"/><line class="st8" x1="26.9" y1="33.101" x2="26.9" y2="42.601"/><line class="st8" x1="51" y1="42.601" x2="51" y2="33.101"/><polygon class="st8" points="32.201,30.5 45.701,30.5 44.201,22.399 33.201,22.399 	"/><polyline class="st8" points="33.201,22.399 45.701,30.5 32.201,30.5 44.201,22.399 	"/><polygon class="st8" points="34.701,12.5 42.701,12.5 44.201,22.399 33.201,22.399 	"/><polygon class="st8" points="34.701,12.601 42.701,12.601 58.701,22.399 18.801,22.399 	"/><polyline class="st8" points="42.701,12.601 33.201,22.399 44.201,22.399 34.701,12.601 	"/><polyline class="st8" points="48.5,16.8 44.201,22.399 33.201,22.399 28.9,16.8 	"/><line class="st8" x1="28.9" y1="16.8" x2="28.9" y2="22.2"/><line class="st8" x1="48.5" y1="22.2" x2="48.5" y2="16.8"/><line class="st8" x1="59.801" y1="26.399" x2="59.801" y2="22.899"/><line class="st8" x1="71.4" y1="46.7" x2="71.4" y2="43.2"/><line class="st8" x1="17.6" y1="26.399" x2="17.6" y2="22.899"/><rect x="46.4" y="56.899" class="st27" width="97.6" height="66.896"/><path class="st24" d="M143,122.8H47.4V57.901H143V122.8z M145,55.899H45.4v68.896H145V55.899z"/><rect x="42.6" y="55.899" class="st27" width="105.201" height="3.604"/><path class="st24" d="M146.801,58.5H43.6v-1.601h103.201V58.5z M148.801,54.899H41.6v5.604h107.201V54.899z"/><rect x="40.801" y="59" class="st24" width="108.799" height="1.5"/><line class="st22" x1="143.301" y1="116.8" x2="47.1" y2="116.8"/><rect x="75.201" y="66.7" class="st16" width="5.799" height="11.196"/><path class="st24" d="M80,76.899h-3.799V67.7H80V76.899z M82,65.7h-2h-3.799h-2v2v9.196v2h2H80h2v-2V67.7V65.7z"/><rect x="85.301" y="66.7" class="st16" width="5.799" height="11.196"/><path class="st24" d="M90.1,76.899h-3.799V67.7H90.1V76.899z M92.1,65.7h-2h-3.799h-2v2v9.196v2h2H90.1h2v-2V67.7V65.7z"/><rect x="55" y="66.7" class="st16" width="5.809" height="11.196"/><path class="st24" d="M59.801,76.899h-3.809V67.7h3.809V76.899z M61.801,65.7h-2h-3.809h-2v2v9.196v2h2h3.809h2v-2V67.7V65.7z"/><rect x="65.1" y="66.7" class="st16" width="5.801" height="11.196"/><path class="st24" d="M69.9,76.899H66.1V67.7H69.9V76.899z M71.9,65.7h-2H66.1h-2v2v9.196v2h2H69.9h2v-2V67.7V65.7z"/><rect x="75.201" y="81.3" class="st16" width="5.799" height="11.2"/><path class="st24" d="M80,91.5h-3.799v-9.2H80V91.5z M82,80.3h-2h-3.799h-2v2v9.2v2h2H80h2v-2v-9.2V80.3z"/><rect x="55" y="81.3" class="st16" width="5.809" height="11.2"/><path class="st24" d="M59.801,91.5h-3.809v-9.2h3.809V91.5z M61.801,80.3h-2h-3.809h-2v2v9.2v2h2h3.809h2v-2v-9.2V80.3z"/><rect x="65.1" y="81.3" class="st16" width="5.801" height="11.2"/><path class="st24" d="M69.9,91.5H66.1v-9.2H69.9V91.5z M71.9,80.3h-2H66.1h-2v2v9.2v2h2H69.9h2v-2v-9.2V80.3z"/><rect x="161.4" y="107.101" class="st12" width="7" height="8.193"/><rect x="157.9" y="115.7" class="st12" width="14.801" height="1.6"/><path class="st12" d="M171.701,118.2v8.6l0,0l-10.896-8.6H171.701z M172.701,117.2H157.9l13.5,10.6h1.4v-10.6H172.701z"/><path class="st12" d="M169.801,118.2l-10.9,8.6l0,0v-8.6H169.801z M172.701,117.2H157.9v10.6h1.4L172.701,117.2z"/><path class="st12" d="M174.701,111.2c0,1.397-1.301,2.5-2,2.5c-0.701,0-1.201-1.103-1.201-2.5c0-1.4,0.5-2.5,1.201-2.5		C173.4,108.7,174.701,109.8,174.701,111.2"/><path class="st12" d="M156.1,111.2c0,1.397,1.301,2.5,2,2.5c0.701,0,1.201-1.103,1.201-2.5c0-1.4-0.5-2.5-1.201-2.5		C157.4,108.7,156.1,109.8,156.1,111.2"/><rect x="157.9" y="106.5" class="st12" width="5.1" height="9.396"/><rect x="157.877" y="100.193" transform="matrix(0.9848 -0.1738 0.1738 0.9848 -15.1118 29.251)" class="st12" width="3.101" height="1.4"/><polygon class="st12" points="155.6,74.601 154,74.899 157.201,100.601 161.4,99.8 	"/><rect x="158.459" y="105.518" transform="matrix(0.9849 -0.1732 0.1732 0.9849 -16.0021 29.3981)" class="st12" width="3.901" height="1.702"/><path class="st12" d="M161.5,105.5l-2.5,0.396c-1.191,0.201-2.396-0.604-2.6-1.799v-0.2c-0.199-1.197,0.6-2.397,1.801-2.604		l2.5-0.396c1.199-0.196,2.398,0.604,2.604,1.804v0.196C163.6,104.2,162.801,105.3,161.5,105.5"/><rect x="153.441" y="74.116" transform="matrix(0.9849 -0.173 0.173 0.9849 -10.5571 27.9031)" class="st12" width="2.704" height="0.798"/><rect x="152.607" y="74.093" transform="matrix(-0.9848 0.1735 -0.1735 -0.9848 316.6873 122.1006)" class="st12" width="0.799" height="1.598"/><rect x="169.768" y="100.2" transform="matrix(0.9848 0.1736 -0.1736 0.9848 20.1158 -28.2068)" class="st12" width="3.1" height="1.4"/><polygon class="st12" points="176.701,74.899 175.201,74.601 169.301,99.8 173.6,100.601 	"/><rect x="168.28" y="105.7" transform="matrix(0.9848 0.1739 -0.1739 0.9848 21.1228 -27.9793)" class="st12" width="3.897" height="1.701"/><path class="st12" d="M171.801,106l-2.5-0.396c-1.201-0.201-2-1.397-1.809-2.604v-0.2c0.199-1.193,1.398-2,2.604-1.8l2.5,0.396		c1.198,0.201,2,1.396,1.801,2.604v0.2C174.1,105.399,173,106.2,171.801,106"/><rect x="174.652" y="74.194" transform="matrix(-0.9848 -0.1738 0.1738 -0.9848 336.3608 178.6359)" class="st12" width="2.697" height="0.796"/><rect x="177.281" y="74.068" transform="matrix(0.9849 0.1733 -0.1733 0.9849 15.6628 -29.659)" class="st12" width="0.8" height="1.598"/><rect x="167.701" y="106.5" class="st12" width="5.104" height="9.396"/><path class="st8" d="M152.801,74.101c0.5-3.104-1.5-4.104-6.201-3.104"/><path class="st8" d="M177.801,74.101c-0.104-10.807-23-5.897-31.604-3.701"/></g><g id="mini-control-center" class="aristotle-svg-svg ">	<rect x="4" y="4" class="st19" width="179" height="132.8"/><rect x="30.9" y="56.199" class="st27" width="100" height="70.201"/><path class="st12" d="M129.4,124.8h-97V57.602h97V124.8z M132.4,54.699h-3h-97h-3v3V124.9v3h3h97h3v-3V57.699V54.699z"/><rect x="27.1" y="55.199" class="st27" width="107.5" height="8.5"/><path class="st12" d="M133.1,62.1H28.6v-5.5h104.5V62.1z M136.1,53.699h-3H28.6h-3v3v5.5v3h3h104.5h3v-3v-5.5V53.699z"/><rect x="117.444" y="46.097" transform="matrix(0.6031 0.7976 -0.7976 0.6031 84.9112 -77.0602)" class="st12" width="4.9" height="1.401"/><rect x="117.444" y="46.097" transform="matrix(0.6031 0.7976 -0.7976 0.6031 84.9112 -77.0602)" class="st8" width="4.9" height="1.401"/><rect x="113.546" y="50.936" transform="matrix(-0.9541 0.2994 -0.2994 -0.9541 244.3669 66.4282)" class="st12" width="7.097" height="2"/><rect x="113.546" y="50.936" transform="matrix(-0.9541 0.2994 -0.2994 -0.9541 244.3669 66.4282)" class="st8" width="7.097" height="2"/><path class="st12" d="M120.301,44.6c-0.396,1.301-1.801,2.1-3.102,1.694c-1.299-0.396-2.104-1.8-1.699-3.104		c0.4-1.299,1.801-2.104,3.1-1.696C120,41.9,120.699,43.3,120.301,44.6"/><circle class="st8" cx="117.9" cy="43.9" r="2.5"/><path class="st12" d="M123.4,48.6c1,1,1,2.6,0,3.6s-2.604,1-3.604,0s-1-2.6,0-3.6C120.9,47.6,122.5,47.6,123.4,48.6"/><circle class="st8" cx="121.699" cy="50.3" r="2.5"/><path class="st12" d="M115.1,53.4c0,1.896-1.6,3.5-3.5,3.5c-1.896,0-3.5-1.604-3.5-3.5c0-1.897,1.604-3.5,3.5-3.5		C113.5,49.9,115.1,51.5,115.1,53.4"/><circle class="st8" cx="111.6" cy="53.4" r="3.5"/><rect x="33.4" y="58.699" class="st27" width="95" height="65.201"/><path class="st24" d="M127.4,122.8h-93V59.602h93V122.8z M129.4,57.699h-97V124.9h97V57.699z"/><rect x="29.6" y="57.699" class="st27" width="102.5" height="3.5"/><path class="st24" d="M131.1,60.1H30.6v-1.5h100.5V60.1z M133.1,56.699H28.6v5.5h104.5V56.699z"/><line class="st19" x1="128.199" y1="117.699" x2="33.5" y2="117.699"/><line class="st22" x1="128.199" y1="117.699" x2="33.5" y2="117.699"/><path class="st12" d="M108.801,20.8c-2.5,2.5,1.299,13.2,10.299,22.104c8.9,8.896,19.701,12.699,22.104,10.299"/><path class="st8" d="M108.801,20.8c-2.5,2.5,1.299,13.2,10.299,22.104c8.9,8.896,19.701,12.699,22.104,10.299"/><ellipse transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 187.2193 151.5566)" class="st8" cx="124.998" cy="37.004" rx="22.897" ry="1.8"/><polyline class="st8" points="118.4,33 133.9,28.1 128.9,43.5 	"/><polyline class="st8" points="108.801,20.8 133.9,28.1 141.199,53.199 	"/><rect x="132.658" y="26.938" transform="matrix(0.7071 0.7071 -0.7071 0.7071 59.0197 -86.611)" class="st12" width="2.801" height="2"/><rect x="132.658" y="26.938" transform="matrix(0.7071 0.7071 -0.7071 0.7071 59.0197 -86.611)" class="st8" width="2.801" height="2"/><rect x="80.1" y="68.199" class="st16" width="5.701" height="11"/><path class="st24" d="M84.9,78.199h-3.701v-9H84.9V78.199z M86.9,67.199h-2h-3.701h-2v2v9v2h2H84.9h2v-2v-9V67.199z"/><rect x="60.4" y="68.199" class="st16" width="5.691" height="11"/><path class="st24" d="M65.199,78.199H61.5v-9h3.699V78.199z M67.199,67.199h-2H61.5h-2v2v9v2h2h3.699h2v-2v-9V67.199z"/><rect x="70.301" y="68.199" class="st16" width="5.699" height="11"/><path class="st24" d="M75,78.199h-3.699v-9H75V78.199L75,78.199z M77,67.199h-2h-3.699h-2v2v9v2h2H75h2v-2v-9V67.199L77,67.199z"/><rect x="40.801" y="68.199" class="st16" width="5.699" height="11"/><path class="st24" d="M45.5,78.199h-3.699v-9H45.5V78.199L45.5,78.199z M47.5,67.199h-2h-3.699h-2v2v9v2h2H45.5h2v-2v-9V67.199		L47.5,67.199z"/><rect x="50.6" y="68.199" class="st16" width="5.701" height="11"/><path class="st24" d="M55.301,78.199H51.6v-9h3.701V78.199z M57.301,67.199h-2H51.6h-2v2v9v2h2h3.701h2v-2v-9V67.199z"/><rect x="80.1" y="82.4" class="st16" width="5.701" height="11"/><path class="st24" d="M84.9,92.3h-3.701v-9H84.9V92.3z M86.9,81.4h-2h-3.701h-2v2v9v2h2H84.9h2v-2v-9V81.4z"/><rect x="60.4" y="82.4" class="st16" width="5.691" height="11"/><path class="st24" d="M65.199,92.3H61.5v-9h3.699V92.3z M67.199,81.4h-2H61.5h-2v2v9v2h2h3.699h2v-2v-9V81.4z"/><rect x="70.301" y="82.4" class="st16" width="5.699" height="11"/><path class="st24" d="M75,92.3h-3.699v-9H75V92.3L75,92.3z M77,81.4h-2h-3.699h-2v2v9v2h2H75h2v-2v-9V81.4L77,81.4z"/><rect x="40.801" y="82.4" class="st16" width="5.699" height="11"/><path class="st24" d="M45.5,92.3h-3.699v-9H45.5V92.3L45.5,92.3z M47.5,81.4h-2h-3.699h-2v2v9v2h2H45.5h2v-2v-9V81.4L47.5,81.4z"/><rect x="50.6" y="82.4" class="st16" width="5.701" height="11"/><path class="st24" d="M55.301,92.3H51.6v-9h3.701V92.3z M57.301,81.4h-2H51.6h-2v2v9v2h2h3.701h2v-2v-9V81.4z"/><path class="st12" d="M144,114.3l-0.699,0.306c-2.5,1.194-5.602,0.1-6.801-2.5c-1.199-2.5-0.1-5.604,2.5-6.806l0.699-0.3L144,114.3		z"/><rect x="142.228" y="104.949" transform="matrix(0.9074 -0.4203 0.4203 0.9074 -31.9954 71.0967)" class="st12" width="6.199" height="6.401"/><polygon class="st12" points="149.199,110.8 169.9,105.5 163.4,91.5 146,103.9 	"/><rect x="176.523" y="89.636" transform="matrix(0.9072 -0.4207 0.4207 0.9072 -22.1698 84.0604)" class="st12" width="5.899" height="5.302"/><polygon class="st12" points="183.199,93.5 184.6,92.3 182.801,88.4 181,88.6 	"/><rect x="166.339" y="87.491" transform="matrix(0.9074 -0.4203 0.4203 0.9074 -25.3068 79.9456)" class="st12" width="4.8" height="19.803"/><rect x="175.864" y="90.376" transform="matrix(0.9073 -0.4205 0.4205 0.9073 -22.9569 83.0164)" class="st12" width="1.898" height="6.403"/><polygon class="st12" points="175.301,103.4 177.1,98.199 173.4,90.3 168.301,88.3 	"/><rect x="156.962" y="111.6" transform="matrix(0.5463 0.8376 -0.8376 0.5463 166.7538 -82.9632)" class="st12" width="5.999" height="1.7"/><rect x="152.229" y="117.071" transform="matrix(-0.9541 0.2994 -0.2994 -0.9541 341.4955 184.3189)" class="st12" width="8.797" height="2.497"/><path class="st12" d="M160.801,109.699c-0.602,1.604-2.396,2.4-4,1.804c-1.602-0.603-2.396-2.396-1.801-4		c0.6-1.603,2.4-2.396,4-1.804C160.6,106.3,161.4,108.1,160.801,109.699"/><path class="st12" d="M164.6,114.3c1.201,1.2,1.201,3.2,0,4.396c-1.191,1.201-3.191,1.201-4.396,0		c-1.201-1.196-1.201-3.196,0-4.396C161.4,113,163.4,113,164.6,114.3"/><path class="st12" d="M154.301,120.199c0,2.4-1.896,4.304-4.301,4.304c-2.4,0-4.301-1.896-4.301-4.304		c0-2.396,1.896-4.299,4.301-4.299S154.301,117.9,154.301,120.199"/><rect x="131.6" y="121.8" class="st12" width="39" height="6"/></g><g id="btn-lightning" class="aristotle-svg-svg ">	<path class="st16" d="M4,51.002l59,12l60-12l-3-2.459L63.005,59.941L7,48.55L4,51.002z M7,18.452L62.979,7.066L120,19.42l3-2.42		L63,4l0,0L4,16L7,18.452z"/><path class="st16" d="M32.495,50.604c9.359-3.825,19.271-6.614,29.523-8.252c-1.819,1.227-3.6,2.491-5.325,3.787		c7.282-1.253,14.733-1.91,22.276-1.934c-2.351,0.923-4.646,1.907-6.893,2.948c7.479,0.609,14.921,1.855,22.223,3.731		c-11.213-1.329-22.346-1.171-33.122,0.346c1.834-1.153,3.716-2.266,5.646-3.336c-6.85,0.652-13.564,1.838-20.106,3.528		c1.771-1.565,3.604-3.093,5.498-4.582C45.563,47.595,38.97,48.853,32.495,50.604z"/></g><g id="quiz-header" class="aristotle-svg-svg ">	<line class="st4" x1="4" y1="34" x2="281" y2="34"/><line class="st4" x1="361.001" y1="34" x2="638.001" y2="34"/><polygon class="st13" points="334.838,52.221 323,58.366 300.5,46.686 300.5,21.313 307.811,17.518 304.164,13.777 295.5,18.275 		295.5,49.724 323,64 339.714,55.325 	"/><polygon class="st13" points="323,4 310.304,10.591 315.244,13.66 323,9.633 345.5,21.313 345.5,46.686 341.856,48.578 		345.636,52.25 350.5,49.724 350.5,18.275 	"/><polygon class="st12" points="303,9 328.828,25.037 320.912,25.033 342.43,43.422 333.1,43.556 346.811,56.878 319.273,39.354 		329.622,39.166 306.623,21.461 314.893,21.204 	"/></g><g id="quiz-answer-bg" class="aristotle-svg-svg ">	<polygon  class="bg st24" points="5.5,308.111 5.5,29.889 103.999,5.545 202.094,29.888 202.498,308.112 104,332.455 	"/><path  class="outline st27" d="M103.999,7.091l96.597,23.97l0.401,275.881L104,330.913L7,306.938V31.062L103.999,7.091		 M104,4L4,28.72v280.566L104,334l100-24.714L203.592,28.72L104,4L104,4z"/><path  class="lightning  st27" d="M68.194,285.052c10.85-4.438,22.324-7.663,34.212-9.562		c-2.113,1.421-4.171,2.885-6.169,4.389c8.438-1.448,17.07-2.215,25.812-2.236c-2.725,1.063-5.387,2.21-7.985,3.417		c8.673,0.705,17.286,2.146,25.747,4.316c-12.992-1.538-25.893-1.354-38.377,0.4c2.126-1.335,4.306-2.624,6.541-3.864		c-7.928,0.755-15.719,2.129-23.3,4.087c2.05-1.812,4.175-3.584,6.371-5.308C83.334,281.566,75.696,283.021,68.194,285.052z"/><path  class="lightning st27" d="M68.194,54.061c10.85-4.437,22.324-7.659,34.212-9.562		c-2.113,1.428-4.171,2.891-6.169,4.394c8.438-1.452,17.07-2.214,25.812-2.238c-2.725,1.067-5.387,2.211-7.985,3.417		c8.673,0.703,17.286,2.146,25.747,4.319c-12.992-1.538-25.893-1.354-38.377,0.396c2.126-1.335,4.306-2.624,6.541-3.864		c-7.928,0.762-15.719,2.136-23.3,4.093c2.05-1.812,4.175-3.584,6.371-5.312C83.334,50.576,75.696,52.031,68.194,54.061z"/><line  class="line st26" x1="32.5" y1="95.5" x2="175.5" y2="95.5"/><line  class="line  st26" x1="32.5" y1="232.5" x2="175.5" y2="232.5"/></g><g id="next-question" class="aristotle-svg-svg ">	<polygon class="st15" points="148.999,41.446 4,41.446 4,4 148.999,4 156.007,23.473 	"/></g><g id="btn-got-it" class="aristotle-svg-svg ">	<path class="st12" d="M4,37.484c10.94-4.513,22.521-7.805,34.517-9.737c-2.134,1.447-4.207,2.938-6.226,4.469		c8.514-1.479,17.224-2.255,26.039-2.282c-2.75,1.089-5.438,2.251-8.062,3.479c8.749,0.719,17.438,2.188,25.979,4.402		c-13.105-1.566-26.119-1.381-38.721,0.408c2.146-1.36,4.349-2.673,6.604-3.937c-7.997,0.77-15.856,2.169-23.506,4.163		c2.062-1.847,4.211-3.65,6.429-5.406C19.274,33.935,11.568,35.418,4,37.484z"/><path class="st16" d="M26.764,10.141c-0.32,2.88-0.62,4.041-1.32,5.201c-0.96,1.621-2.26,2.441-3.841,2.441		c-2.42,0-3.94-2.021-3.94-5.221c0-2.081,0.521-4.321,1.346-5.781C20.028,4.961,21.528,4,23.283,4c1.9,0,3.16,1.14,3.501,3.181		l-2.655,1c-0.021-0.68-0.062-0.86-0.16-1.161c-0.146-0.44-0.5-0.68-0.979-0.68c-0.641,0-1.159,0.44-1.581,1.32		c-0.6,1.28-0.979,3.241-0.979,5.062c0,1.78,0.521,2.68,1.54,2.68c1.021,0,1.643-0.92,1.922-2.9h-1.646l0.279-2.36L26.764,10.141		L26.764,10.141z"/><path class="st16" d="M29.642,14.022c0-1.201,0.318-2.541,0.84-3.541c0.681-1.32,1.801-2.041,3.146-2.041		c1.802,0,2.814,1.22,2.814,3.421c0,3.581-1.561,5.881-3.961,5.881C30.621,17.742,29.642,16.442,29.642,14.022z M33.923,12.061		c0-0.92-0.198-1.38-0.578-1.38c-0.66,0-1.224,1.58-1.224,3.4c0,0.9,0.224,1.42,0.615,1.42		C33.402,15.502,33.923,13.941,33.923,12.061z"/><path class="st16" d="M40.241,10.681h-0.84l0.261-2.061h0.846l0.302-2.46h2.461l-0.303,2.46h1.001l-0.238,2.061h-1l-0.859,6.881		h-2.462L40.241,10.681z"/><path class="st16" d="M52.501,8.62h2.461l-1.104,8.942h-2.461L52.501,8.62z M52.541,6.16c0-0.96,0.84-1.78,1.774-1.78		c0.765,0,1.36,0.6,1.36,1.38c0,0.96-0.82,1.801-1.78,1.801C53.121,7.56,52.541,6.96,52.541,6.16z"/><path class="st16" d="M58.541,10.681h-0.846l0.266-2.061h0.843l0.3-2.46h2.461l-0.301,2.46h1.001l-0.24,2.061h-1l-0.855,6.881		h-2.466L58.541,10.681z"/><path class="st16" d="M66.441,14.421c0.82,0,1.46,0.64,1.46,1.46c0,1.02-0.88,1.9-1.896,1.9c-0.842,0-1.46-0.64-1.46-1.48		C64.541,15.302,65.421,14.421,66.441,14.421z M66.401,4.219h2.562l-1.146,9.342h-2.58L66.401,4.219z"/></g><g id="btn-continue" class="aristotle-svg-svg ">	<path class="st17" d="M53.56,7.064l47.439,10.121v22.418l-47.415,9.339L6.999,39.611V16.391L53.56,7.064 M53.578,4L4,13.936v28.139		l49.578,9.936L104,42.074V14.764L53.578,4L53.578,4z"/><path class="st17" d="M22.882,27.127c-1.135,0.379-1.513,0.463-2.171,0.463c-1.373,0-2.787-0.615-3.74-1.625		c-0.799-0.854-1.232-1.979-1.232-3.228c0-2.759,2.188-4.938,4.944-4.938c0.729,0,1.317,0.127,2.199,0.478v2.899		c-0.574-0.688-1.261-1.022-2.103-1.022c-1.457,0-2.508,1.077-2.508,2.577c0,0.798,0.268,1.429,0.826,1.891		c0.477,0.396,1.062,0.616,1.682,0.616c0.798,0,1.473-0.308,2.103-0.979V27.127L22.882,27.127z"/><path class="st17" d="M26.84,18.893c0.883-0.744,2.115-1.178,3.418-1.178c1.556,0,2.83,0.521,3.824,1.562		c0.867,0.911,1.346,2.115,1.346,3.418c0,1.477-0.646,2.857-1.752,3.796c-0.938,0.785-2.087,1.183-3.459,1.183		c-2.941,0-5.127-2.156-5.127-5.07C25.09,21.217,25.735,19.83,26.84,18.893z M30.258,25.321c1.457,0,2.634-1.177,2.634-2.634		c0-1.442-1.177-2.618-2.634-2.618c-1.442,0-2.633,1.176-2.633,2.591C27.625,24.145,28.787,25.321,30.258,25.321z"/><path class="st17" d="M38.04,17.995h2.423l4.469,5.721v-5.721h2.424v9.349h-2.424l-4.469-5.721v5.721H38.04V17.995z"/><path class="st17" d="M51.383,20.055h-1.977v-2.062h6.415v2.062h-2.017v7.283H51.38L51.383,20.055L51.383,20.055z"/><path class="st17" d="M57.892,17.995h2.424v9.349h-2.424V17.995z"/><path class="st17" d="M63.45,17.995h2.426l4.468,5.721v-5.721h2.424v9.349h-2.424l-4.468-5.721v5.721H63.45V17.995z"/><path class="st17" d="M83.838,23.389c0,1.373-0.238,2.114-0.911,2.871c-0.771,0.867-1.862,1.312-3.222,1.312		c-1.431,0-2.689-0.53-3.333-1.396c-0.49-0.658-0.675-1.414-0.675-2.787v-5.396h2.426v5.062c0,1.062,0.025,1.271,0.266,1.666		c0.267,0.445,0.771,0.715,1.357,0.715c0.616,0,1.163-0.295,1.415-0.756c0.21-0.365,0.253-0.646,0.253-1.625v-5.062h2.424V23.389		L83.838,23.389z"/><path class="st17" d="M86.774,17.995h5.311v2.062h-2.887v1.555h2.731v2.062h-2.731v1.604h2.887v2.062h-5.311V17.995z"/><path class="st17" d="M23.785,39.592c9.118-3.729,18.764-6.439,28.75-8.035c-1.774,1.193-3.505,2.426-5.185,3.688		c7.09-1.222,14.346-1.854,21.689-1.883c-2.289,0.897-4.526,1.856-6.71,2.87c7.286,0.594,14.524,1.807,21.636,3.633		c-10.918-1.293-21.757-1.141-32.248,0.337c1.785-1.122,3.617-2.205,5.496-3.248c-6.662,0.641-13.21,1.79-19.58,3.438		c1.723-1.522,3.508-3.013,5.354-4.459C36.509,36.663,30.089,37.887,23.785,39.592z"/></g><g id="perfect-answer" class="aristotle-svg-svg ">	<g id="XMLID_2433_" class="aristotle-svg-svg ">		<polygon class="st24" points="18.725,36.129 4,28.485 4,11.644 18.725,4 33.451,11.644 33.451,28.485 		"/></g>	<polygon class="st17" points="18.725,7.843 21.697,15.764 29.715,16.239 23.533,21.707 25.516,29.821 18.725,25.381 11.934,29.821 		13.916,21.707 7.735,16.239 15.754,15.764 	"/></g><g id="quiz-btn" class="aristotle-svg-svg ">	<g  class="bg " >		<polygon class="st24" points="4,50 63,62 123,50 123,17 63,4 4,16 		"/></g>	<path class="st16" d="M27.545,46.795c10.854-4.434,22.326-7.664,34.213-9.562c-2.112,1.422-4.17,2.885-6.169,4.387		c8.438-1.451,17.07-2.213,25.812-2.238c-2.729,1.068-5.393,2.209-7.983,3.416c8.672,0.705,17.284,2.148,25.746,4.322		c-12.992-1.539-25.894-1.355-38.375,0.4c2.125-1.336,4.305-2.625,6.541-3.865c-7.933,0.756-15.721,2.129-23.302,4.088		c2.052-1.812,4.174-3.584,6.369-5.309C42.687,43.309,35.047,44.766,27.545,46.795z"/></g><g id="btn-generic" class="aristotle-svg-svg ">	<path class="st16" d="M4,51.002l59,12l60-12V17L63,4l0,0L4,16V51.002z M7,18.451L62.979,7.065L120,19.419v29.123L63.005,59.94		L7,48.549V18.451z"/><path class="st16" d="M32.495,50.604c9.365-3.825,19.271-6.614,29.529-8.252c-1.824,1.227-3.6,2.491-5.326,3.787		c7.283-1.253,14.734-1.91,22.277-1.934c-2.351,0.923-4.648,1.907-6.893,2.948c7.483,0.609,14.921,1.855,22.223,3.731		c-11.213-1.329-22.346-1.171-33.122,0.346c1.834-1.153,3.716-2.266,5.646-3.336c-6.844,0.652-13.564,1.838-20.106,3.528		c1.769-1.565,3.602-3.093,5.498-4.582C45.563,47.594,38.97,48.852,32.495,50.604z"/></g><g id="speaker" class="aristotle-svg-svg ">	<path class="st1" d="M32.61,58.493c10.218-2.746,17.732-11.951,17.732-22.892c0-10.941-7.515-20.146-17.732-22.891"/><path class="st1" d="M40.538,67.202c14.2-4.416,24.44-16.891,24.44-31.601c0-14.71-10.24-27.185-24.44-31.601"/><path class="st1" d="M28.11,47.821c5.122-2.226,8.655-6.85,8.655-12.219c0-5.371-3.533-9.996-8.655-12.221"/><polygon class="st16" points="12.774,44.639 12.774,26.563 20.401,21.772 20.401,49.43 	"/><rect x="4" y="26.563" class="st16" width="11.273" height="18.075"/></g><g id="no-phone" class="aristotle-svg-svg ">	<path class="st16" d="M71.691,85.5H35.309V21.501h36.382V85.5z M71.886,18.501H35.115c-1.55,0-2.807,1.256-2.807,2.806v64.388		c0,1.549,1.257,2.806,2.807,2.806h36.771c1.55,0,2.806-1.257,2.806-2.806V21.307C74.691,19.757,73.435,18.501,71.886,18.501"/><path class="st16" d="M64.94,71.566H42.059V27.935h22.882L64.94,71.566L64.94,71.566z M66.587,24.935H40.414		c-0.748,0-1.354,0.605-1.354,1.354v46.922c0,0.748,0.606,1.355,1.354,1.355h26.173c0.748,0,1.354-0.607,1.354-1.355V26.288		C67.94,25.54,67.335,24.935,66.587,24.935"/><circle class="st2" cx="53.5" cy="53.5" r="49.5"/><line class="st2" x1="87.5" y1="19.5" x2="19.5" y2="87.5"/><line class="st1" x1="48.5" y1="79.719" x2="58.5" y2="79.719"/></g><g id="duty" class="aristotle-svg-svg ">	<path class="st27" d="M24,8.515l16,8.375v18.226L24,43.49L8,35.115V16.89L24,8.515 M24,4L4,14.469v23.062L24,48l20-10.469V14.469		L24,4L24,4z"/></g><g id="duty-active" class="aristotle-svg-svg ">	<path class="st12" d="M24,8.515l16,8.375v18.221l-16,8.375L8,35.111V16.89L24,8.515 M24,4L4,14.469v23.062L24,48l20-10.469V14.469		L24,4L24,4z"/><polygon class="st16" points="24,40.5 11.275,33.602 11.275,18.399 24,11.5 36.726,18.399 36.726,33.602 	"/></g><g id="duty-complete" class="aristotle-svg-svg ">	<polygon class="st34" points="29.197,17.963 34.619,21.318 28.237,21.314 27.411,21.314 36.728,29.252 36.728,18.399 24,11.5 		21.205,13.016 	"/><polygon class="st34" points="20.313,31.411 15.219,28.18 21.256,28.07 23.596,28.027 11.272,18.57 11.272,33.601 24,40.5 		29.737,37.39 	"/><polygon class="st6" points="32.608,39.363 24,43.869 7.637,35.304 7.637,16.696 12.953,13.914 10.302,11.17 4,14.469 4,37.531 		24,48 36.154,41.639 	"/><polygon class="st6" points="24,4 14.766,8.834 18.359,11.084 24,8.131 40.363,16.696 40.363,35.304 37.713,36.691 40.461,39.384 		44,37.531 44,14.469 	"/><polygon class="st16" points="9.454,7.667 28.238,19.428 22.482,19.424 38.131,32.91 31.345,33.008 41.316,42.777 21.289,29.927 		28.816,29.789 12.09,16.806 18.103,16.616 	"/></g><g id="btn-acknowledge" class="aristotle-svg-svg ">	<polygon  class="bg  st27" points="5.503,55.053 5.503,18.948 95.223,5.518 186.503,20.073 186.503,55.05 		95.231,68.484 	"/><path  class="outline  st24" d="M95.215,7.036l89.788,14.317v32.401l-89.77,13.213L7.003,53.76V20.239L95.215,7.036		 M95.229,4L4,17.655v38.69L95.229,70L188,56.345V18.793L95.229,4L95.229,4z"/><path  class="lightning  st16" d="M60.195,50.794c10.851-4.432,22.326-7.663,34.213-9.562		c-2.113,1.422-4.17,2.886-6.169,4.388c8.437-1.452,17.07-2.213,25.811-2.24c-2.725,1.069-5.388,2.21-7.98,3.416		c8.673,0.706,17.286,2.149,25.746,4.323c-12.991-1.539-25.896-1.356-38.375,0.4c2.125-1.336,4.305-2.625,6.54-3.865		c-7.933,0.756-15.724,2.13-23.305,4.088c2.055-1.813,4.18-3.584,6.371-5.309C75.337,47.309,67.698,48.765,60.195,50.794z"/></g><g id="chapter-bracket" class="aristotle-svg-svg ">	<polyline class="st9" points="4,104.992 27,104.992 27,4 4,4 	"/></g><g id="tesselation" class="aristotle-svg-svg ">	<rect x="4.006" y="4" class="st19" width="1024" height="768"/><path class="st21" d="M158.241,148.183c-22.989,13.425-45.722,28.383-68.15,45.806c-22.438-34.314-44.562-72.895-66.346-116.986		C67.308,105.954,112.267,129.343,158.241,148.183z"/><path class="st21" d="M4.004,63.43c6.551,4.655,13.132,9.178,19.741,13.573c-6.612,4.599-13.188,9.448-19.739,14.581"/><path class="st21" d="M4.008,248.9c6.546,1.995,13.126,3.933,19.733,5.816c-6.608,7.11-13.189,14.545-19.737,22.339"/><path class="st21" d="M23.745,432.43c-6.612,9.621-13.188,19.639-19.739,30.092"/><path class="st21" d="M4,619.842c6.549-3.326,13.131-6.562,19.745-9.699c-6.607,12.133-13.188,24.736-19.739,37.85"/><path class="st21" d="M298.849,191.806c-23.813,13.436-47.475,27.41-70.924,42.702c-23.449-25.637-46.692-54.072-69.688-86.325		C204.216,167.013,251.222,181.297,298.849,191.806z"/><path class="st21" d="M443.202,212.397c-24.229,15.043-48.416,29.713-72.491,44.723c-24.069-19.889-48.046-41.379-71.858-65.313		C346.478,202.301,394.733,209.028,443.202,212.397z"/><path class="st21" d="M588.812,212.397c-24.232,18.401-48.517,35.48-72.806,51.963c-24.286-16.484-48.573-33.561-72.809-51.963		C491.67,215.751,540.345,215.751,588.812,212.397z"/><path class="st21" d="M733.164,191.806c-23.813,23.934-47.787,45.423-71.859,65.313c-24.077-15.01-48.255-29.682-72.489-44.723		C637.282,209.028,685.535,202.302,733.164,191.806z"/><path class="st21" d="M873.772,148.183c-22.988,32.255-46.24,60.689-69.687,86.325c-23.45-15.293-47.107-29.267-70.927-42.701		C780.793,181.297,827.795,167.012,873.772,148.183z"/><path class="st21" d="M1008.269,77.002c-21.777,44.094-43.914,82.672-66.343,116.986c-22.437-17.423-45.166-32.379-68.153-45.806		C919.754,129.344,964.707,105.955,1008.269,77.002z"/><path class="st21" d="M1028.002,91.578c-6.545-5.131-13.123-9.979-19.729-14.575c6.612-4.395,13.188-8.917,19.739-13.572"/><path class="st21" d="M4,156.163c28.115,14.279,56.847,26.818,86.088,37.826c-22.434,17.427-44.562,37.314-66.345,60.728		c-6.612-10.876-13.188-22.187-19.739-33.969"/><path class="st21" d="M227.925,234.508c-23.451,15.295-46.695,31.907-69.688,50.71c-22.984-26.876-45.721-56.921-68.15-91.229		C134.95,210.874,181.023,224.164,227.925,234.508z"/><path class="st21" d="M370.711,257.12c-24.075,15.011-48.046,30.357-71.858,46.791c-23.813-20.936-47.478-43.771-70.924-69.402		C274.827,244.844,322.562,252.239,370.711,257.12z"/><path class="st21" d="M516.006,264.36c-24.286,16.484-48.573,32.371-72.811,48.372c-24.23-17.444-48.417-35.726-72.489-55.612		C418.863,261.99,467.437,264.356,516.006,264.36z"/><path class="st21" d="M661.301,257.12c-24.076,19.886-48.262,38.169-72.491,55.612c-24.23-16.002-48.521-31.888-72.803-48.372		C564.579,264.356,613.151,261.993,661.301,257.12z"/><path class="st21" d="M804.088,234.508c-23.451,25.634-47.109,48.468-70.93,69.402c-23.812-16.434-47.785-31.779-71.856-46.791		C709.454,252.239,757.187,244.845,804.088,234.508z"/><path class="st21" d="M941.927,193.99c-22.431,34.306-45.168,64.354-68.156,91.229c-22.988-18.801-46.233-35.415-69.685-50.711		C850.991,224.165,897.062,210.875,941.927,193.99z"/><path class="st21" d="M1028.01,220.745c-6.549,11.784-13.13,23.095-19.743,33.972c-21.783-23.413-43.908-43.303-66.34-60.728		c29.241-11.008,57.97-23.546,86.085-37.825"/><path class="st21" d="M158.241,285.219c-22.989,18.803-45.722,39.801-68.15,63.978c-22.438-27.561-44.562-58.66-66.346-94.48		C67.308,267.124,112.267,277.146,158.241,285.219z"/><path class="st21" d="M298.849,303.91c-23.813,16.435-47.475,33.956-70.924,53.385c-23.449-21.499-46.692-45.204-69.688-72.075		C204.216,293.287,251.222,299.408,298.849,303.91z"/><path class="st21" d="M443.202,312.731c-24.229,16.004-48.416,32.12-72.491,49.08c-24.069-17.938-48.046-36.97-71.858-57.901		C346.478,308.408,394.733,311.288,443.202,312.731z"/><path class="st21" d="M588.812,312.731c-24.232,17.441-48.517,34.045-72.806,50.526c-24.286-16.483-48.573-33.085-72.809-50.526		C491.67,314.167,540.345,314.167,588.812,312.731z"/><path class="st21" d="M733.164,303.91c-23.813,20.931-47.787,39.962-71.859,57.901c-24.077-16.962-48.255-33.078-72.489-49.08		C637.282,311.288,685.535,308.406,733.164,303.91z"/><path class="st21" d="M873.772,285.219c-22.988,26.875-46.24,50.581-69.687,72.079c-23.45-19.435-47.107-36.949-70.927-53.384		C780.793,299.409,827.795,293.285,873.772,285.219z"/><path class="st21" d="M1008.269,254.716c-21.777,35.819-43.914,66.92-66.343,94.48c-22.437-24.177-45.166-45.171-68.153-63.978		C919.754,277.146,964.707,267.121,1008.269,254.716z"/><path class="st21" d="M1028.01,277.053c-6.547-7.793-13.128-15.227-19.741-22.336c6.613-1.883,13.194-3.821,19.741-5.816"/><path class="st21" d="M4.008,341.635c28.109,2.854,56.838,5.358,86.078,7.562c-22.436,24.186-44.562,51.549-66.347,83.233		c-6.607-8.363-13.188-17.088-19.733-26.211"/><path class="st21" d="M227.925,357.294c-23.451,19.435-46.695,40.772-69.688,64.959c-22.984-21.492-45.721-45.507-68.15-73.061		C134.95,352.574,181.023,355.227,227.925,357.294z"/><path class="st21" d="M370.711,361.811c-24.075,16.964-48.046,34.769-71.858,54.203c-23.813-17.938-47.478-37.228-70.924-58.719		C274.827,359.362,322.562,360.838,370.711,361.811z"/><path class="st21" d="M516.006,363.257c-24.286,16.479-48.573,32.846-72.811,49.809c-24.23-16.48-48.417-33.322-72.489-51.255		C418.863,362.785,467.437,363.257,516.006,363.257z"/><path class="st21" d="M661.301,361.811c-24.076,17.935-48.262,34.771-72.491,51.255c-24.23-16.963-48.521-33.326-72.803-49.809		C564.579,363.257,613.151,362.785,661.301,361.811z"/><path class="st21" d="M804.088,357.295c-23.451,21.49-47.109,40.781-70.93,58.718c-23.812-19.438-47.785-37.238-71.856-54.203		C709.454,360.835,757.187,359.36,804.088,357.295z"/><path class="st21" d="M941.927,349.198c-22.431,27.552-45.168,51.562-68.156,73.06c-22.988-24.188-46.233-45.525-69.685-64.958		C850.991,355.227,897.062,352.573,941.927,349.198z"/><path class="st21" d="M1028.01,406.215c-6.549,9.123-13.13,17.85-19.743,26.215c-21.783-31.686-43.908-59.05-66.34-83.232		c29.239-2.2,57.967-4.707,86.081-7.562"/><path class="st21" d="M158.241,422.254c-22.989,24.188-45.722,51.217-68.15,82.146c-22.438-20.803-44.562-44.426-66.346-71.975		C67.308,428.295,112.267,424.947,158.241,422.254z"/><path class="st21" d="M298.849,416.014c-23.813,19.438-47.475,40.5-70.924,64.064c-23.449-17.359-46.692-36.338-69.688-57.824		C204.216,419.561,251.222,417.518,298.849,416.014z"/><path class="st21" d="M443.202,413.066c-24.229,16.963-48.416,34.525-72.491,53.438c-24.069-15.984-48.046-32.562-71.858-50.488		C346.478,414.514,394.733,413.547,443.202,413.066z"/><path class="st21" d="M588.812,413.066c-24.232,16.48-48.517,32.607-72.806,49.088c-24.286-16.479-48.573-32.605-72.809-49.088		C491.67,412.586,540.345,412.586,588.812,413.066z"/><path class="st21" d="M733.164,416.014c-23.813,17.93-47.787,34.504-71.859,50.484c-24.077-18.908-48.255-36.473-72.489-53.436		C637.282,413.547,685.535,414.51,733.164,416.014z"/><path class="st21" d="M873.772,422.254c-22.988,21.488-46.24,40.465-69.687,57.824c-23.45-23.564-47.107-44.635-70.927-64.064		C780.793,417.518,827.795,419.561,873.772,422.254z"/><path class="st21" d="M1008.269,432.43c-21.777,27.547-43.914,51.172-66.343,71.975c-22.437-30.934-45.166-57.961-68.153-82.146		C919.754,424.951,964.707,428.295,1008.269,432.43z"/><path class="st21" d="M1028.01,462.523c-6.547-10.453-13.128-20.473-19.741-30.094c6.61,0.629,13.188,1.271,19.733,1.938"/><path class="st21" d="M4.004,527.105c28.115-8.566,56.845-16.092,86.084-22.699c-22.434,30.938-44.562,65.783-66.345,105.738		c-6.612-5.855-13.188-11.996-19.739-18.457"/><path class="st21" d="M227.925,480.082c-23.451,23.57-46.695,49.646-69.688,79.209c-22.984-16.109-45.721-34.088-68.15-54.885		C134.95,494.271,181.023,486.291,227.925,480.082z"/><path class="st21" d="M370.711,466.504c-24.075,18.91-48.046,39.178-71.858,61.609c-23.813-14.934-47.478-30.678-70.924-48.035		C274.827,473.873,322.562,469.436,370.711,466.504z"/><path class="st21" d="M516.006,462.154c-24.286,16.484-48.573,33.324-72.811,51.246c-24.23-15.52-48.417-30.912-72.489-46.895		C418.863,463.58,467.437,462.158,516.006,462.154z"/><path class="st21" d="M661.301,466.504c-24.076,15.979-48.262,31.377-72.491,46.895c-24.23-17.924-48.521-34.764-72.803-51.246		C564.579,462.16,613.151,463.578,661.301,466.504z"/><path class="st21" d="M804.088,480.082c-23.451,17.357-47.109,33.104-70.93,48.035c-23.812-22.436-47.785-42.701-71.856-61.609		C709.454,469.436,757.187,473.875,804.088,480.082z"/><path class="st21" d="M941.927,504.406c-22.431,20.797-45.168,38.771-68.156,54.883c-22.988-29.561-46.233-55.637-69.685-79.207		C850.991,486.287,897.062,494.273,941.927,504.406z"/><path class="st21" d="M1028.01,591.688c-6.549,6.461-13.13,12.604-19.743,18.455c-21.783-39.957-43.908-74.799-66.34-105.736		c29.241,6.605,57.97,14.131,86.086,22.699"/><path class="st21" d="M158.241,559.289c-22.989,29.57-45.722,62.639-68.15,100.324c-22.438-14.045-44.562-30.189-66.346-49.471		C67.308,589.463,112.267,572.752,158.241,559.289z"/><path class="st21" d="M4.004,712.49c76.554-54.496,157.851-90.742,241.561-114.812c100.146-28.488,203.746-39.561,306.866-36.105		c103.119,3.766,205.761,22.049,304.046,59.453c59.021,22.65,116.478,52.195,171.529,91.258"/><path class="st21" d="M298.849,528.117c-23.813,22.439-47.475,47.047-70.924,74.75c-23.449-13.227-46.692-27.469-69.688-43.578		C204.216,545.838,251.222,535.627,298.849,528.117z"/><path class="st21" d="M443.202,513.4c-24.229,17.926-48.416,36.932-72.491,57.795c-24.069-14.035-48.046-28.146-71.858-43.078		C346.478,520.617,394.733,515.809,443.202,513.4z"/><path class="st21" d="M588.812,513.4c-24.232,15.521-48.517,31.17-72.806,47.65c-24.286-16.48-48.573-32.129-72.809-47.65		C491.67,511.002,540.345,511.002,588.812,513.4z"/><path class="st21" d="M733.164,528.117c-23.813,14.934-47.787,29.045-71.859,43.078c-24.077-20.863-48.255-39.869-72.489-57.795		C637.282,515.809,685.535,520.617,733.164,528.117z"/><path class="st21" d="M873.772,559.289c-22.988,16.107-46.24,30.355-69.687,43.578c-23.45-27.705-47.107-52.311-70.927-74.75		C780.793,535.627,827.795,545.836,873.772,559.289z"/><path class="st21" d="M1008.269,610.143c-21.777,19.271-43.914,35.424-66.343,49.471c-22.437-37.688-45.166-70.752-68.153-100.324		C919.754,572.752,964.707,589.463,1008.269,610.143z"/><path class="st21" d="M1028.006,647.984c-6.55-13.111-13.125-25.711-19.737-37.842c6.612,3.141,13.194,6.371,19.741,9.697"/></g><g id="lightning-fist" class="aristotle-svg-svg ">	<line class="st14" x1="239.281" y1="86.226" x2="4" y2="86.226"/><line class="st5" x1="239.281" y1="109.559" x2="115" y2="109.559"/><line class="st14" x1="335" y1="86.226" x2="570.281" y2="86.226"/><line class="st5" x1="335" y1="109.559" x2="459.281" y2="109.559"/><polygon class="st16" points="321.09,70.648 323.229,69.731 313.185,64.473 312.241,66.017 	"/><polygon class="st16" points="326.575,90.766 328.381,90.981 328.381,80.458 326.575,81.44 	"/><polygon class="st16" points="328.381,103.203 326.575,103.159 326.575,113.201 328.381,114.55 	"/><polygon class="st16" points="301.181,60.227 302.274,58.763 293.562,54.202 293.515,56.213 	"/><polygon class="st16" points="247.534,102.848 245.728,102.634 245.728,113.665 247.534,112.683 	"/><polygon class="st16" points="253.866,70.206 262.24,65.822 261.526,64.159 252.069,69.108 	"/><polygon class="st16" points="273.229,60.069 281.272,55.859 281.53,53.687 272.366,58.483 	"/><polygon class="st16" points="245.728,79.174 245.728,90.426 247.534,90.471 247.534,80.523 	"/><path class="st17" d="M282.671,59.383l6.115-4.312l-1.952,16.062l2.232,0.22c0.815,0.06,1.592,0.361,2.245,0.847l0.61-24.8		l-4.562,3.783l1.775-26.329l-4.562,3.791L286.172,4l-6.076,32.802l5.834-4.85L282.671,59.383z"/><path class="st17" d="M309.438,61.488l-10.419,13.86c1.076,0.188,2.028,0.754,2.701,1.627c0.359,0.476,0.606,1.011,0.752,1.573		l13.521-22.139l-5.845,0.995l14.705-21.913l-5.851,1.002l13.705-20.545l-21.664,25.364l7.479-1.277l-16.536,22.122L309.438,61.488z		"/><path class="st17" d="M317.325,74.229l6.789,3.141l-13.776,5.868c0,0.247-0.013,0.493-0.057,0.744l-0.826,4.731l22.873-12.461		l-5.558-2.062l23.688-11.625l-5.562-2.056l22.143-10.938l-31.444,11.133l7.113,2.637L317.325,74.229z"/><path class="st17" d="M253.662,41.252l10.891,25.387l3.146-6.791l5.677,13.328c0.123-0.013,0.241-0.038,0.366-0.038h3.044		c0.588,0,1.142,0.111,1.67,0.289l-11.874-21.794l-2.062,5.56l-11.625-23.69l-2.057,5.564l-10.938-22.143l11.135,31.441		L253.662,41.252z"/><polygon class="st17" points="347.157,89.77 352.003,95.604 324.575,92.345 328.885,98.461 309.017,96.045 309.46,100.931 		336.558,101.601 332.772,97.037 359.102,98.814 355.312,94.252 379.957,95.851 	"/><polygon class="st17" points="231.644,72.912 230.365,65.436 252.487,81.973 251.812,74.521 267.177,86.069 268.27,82.895 		268.27,81.118 246.737,67.966 247.733,73.812 225.82,59.105 226.823,64.953 206.278,51.247 	"/><polygon class="st17" points="343.508,121.588 344.786,129.064 322.663,112.529 323.338,119.98 310.138,110.059 307.534,113.782 		328.412,126.535 327.418,120.69 349.33,135.396 348.329,129.548 368.873,143.254 	"/><polygon class="st17" points="249.302,117.133 267.666,109.31 264.911,105.271 241.087,118.249 246.646,120.312 222.956,131.934 		228.52,133.991 206.378,144.93 237.823,133.795 230.709,131.164 256.092,120.274 	"/><polygon class="st17" points="222.281,98.029 249.708,101.289 245.398,95.172 263.297,97.348 264.894,92.706 237.727,92.033 		241.51,96.598 215.181,94.819 218.972,99.382 194.328,97.784 227.126,103.865 	"/><path class="st16" d="M319.094,122.958l-16.286,8.525l-0.062-9.26l8.196-11.728l-1.575-17.365l1.588-9.094		c0.405-2.33-1.08-4.571-3.387-5.104l-1.196-0.279c-1.115-0.261-2.293-0.054-3.277,0.531c-0.071-0.83-0.368-1.627-0.892-2.307		c-0.729-0.954-1.789-1.562-2.979-1.716l-2.93-0.363c-1.04-0.14-2.062,0.119-2.938,0.68c-0.021-1.02-0.362-1.991-1.03-2.779		c-0.779-0.924-1.872-1.479-3.056-1.562l-4.116-0.403c-1.226-0.089-2.409,0.315-3.321,1.146c-0.748,0.68-1.213,1.563-1.382,2.537		c-0.992-0.896-2.294-1.463-3.735-1.463h-3.108c-3.082,0-5.589,2.51-5.589,5.592v4.389l-6.385,18.546l14.097,20.671l-1.854,10.683		l-19.13-10.013l-2.139,0.917l34.45,18.032l33.836-17.71L319.094,122.958z M302.779,82.627c0.104-0.73,0.499-1.363,1.108-1.782		c0.609-0.418,1.342-0.562,2.062-0.395l1.195,0.28c1.354,0.312,2.225,1.628,1.982,2.994l-1.831,10.486		c-2.135,0.35-4.141,0.146-6.102-0.612L302.779,82.627z M306.549,96.29c-0.607,1.433-1.447,3.375-1.803,4.122		c-0.416,0.891-1.549,1.748-2.723,1.605l-0.874-0.093c-0.619-0.065-1.167-0.403-1.501-0.934c-0.336-0.521-0.411-1.16-0.212-1.749		l1.299-3.813C302.745,96.252,304.672,96.54,306.549,96.29z M293.136,78.968c0.069-0.707,0.412-1.345,0.973-1.785		c0.555-0.444,1.254-0.646,1.959-0.559l2.925,0.37c0.698,0.086,1.321,0.444,1.748,1.003c0.43,0.562,0.612,1.257,0.515,1.952		l-1.894,13.521c-2.563,0.751-4.996,0.494-7.562-0.805L293.136,78.968z M291.704,94.76c2.309,1.146,4.659,1.438,7.012,0.872		l-1.021,3.018c-0.002,0.003-0.001,0.006-0.005,0.011l-0.327,0.965c-0.354,1.037-1.385,1.664-2.479,1.481l-1.894-0.312		c-0.817-0.139-1.417-0.86-1.396-1.688L291.704,94.76z M282.213,75.116c0.021-0.724,0.32-1.389,0.856-1.874		c0.534-0.479,1.224-0.716,1.938-0.674l4.104,0.402c0.707,0.053,1.348,0.379,1.807,0.92c0.455,0.539,0.671,1.226,0.604,1.93		l-1.558,16.6c-2.696,0.479-4.6,0.23-6.938-0.575c1.008-0.399,2.016-0.975,2.897-1.79c1.811-1.68,2.728-4.021,2.728-6.973v-0.923		h-6.354v-3.616c0-0.416-0.054-0.815-0.14-1.208L282.213,75.116z M289.915,100.188c-1.77-1.735-4.336-3.008-7.995-3.572		l-0.071-3.133l-0.026-0.128c1.942,0.719,3.674,1.146,5.618,1.146c0.758,0,1.572-0.089,2.434-0.22l-0.122,4.773		C289.738,99.448,289.802,99.827,289.915,100.188z M269.857,78.543c0-2.062,1.678-3.741,3.743-3.741h3.107		c1.727,0,3.165,1.179,3.601,2.767l-0.108,4.595h-10.343V78.543z M275.59,133.728l2.079-12.003l-13.993-20.523l5.915-17.192h17.184		c-0.162,1.973-0.864,3.546-2.089,4.687c-2.688,2.501-7.093,2.216-7.139,2.209l-1.064-0.078l0.079,1.067		c0.113,1.541,0.226,4.288,0.022,5.09l-0.288,1.146h1.185c11.646,0,14.247,5.471,14.562,13.681c0.021,0.496,0.43,0.888,0.92,0.888		c0.017,0,0.023,0,0.037-0.002c0.507-0.02,0.904-0.448,0.887-0.958c-0.131-3.38-0.643-6.785-2.36-9.54		c0.353,0.203,0.746,0.352,1.166,0.418l1.896,0.314c0.229,0.037,0.452,0.056,0.674,0.056c1.055,0,2.039-0.409,2.781-1.104		c0.021,0.038,0.032,0.076,0.059,0.111c0.639,1.001,1.682,1.646,2.858,1.771l0.875,0.093c0.147,0.017,0.293,0.023,0.438,0.023		c1.896,0,3.501-1.303,4.147-2.684c0.314-0.675,0.995-2.241,1.574-3.586l1.053,12.386l-8.146,11.651l0.07,10.798l-7.088,3.709		v-8.248c0-0.511-0.41-0.924-0.924-0.924c-0.51,0-0.921,0.413-0.921,0.924v9.213l-4.98,2.609L275.59,133.728z M278.462,92.754		c0.479-0.02,1.094-0.066,1.778-0.174l-0.031,3.826c-0.552-0.047-1.101-0.096-1.696-0.109		C278.573,95.182,278.515,93.723,278.462,92.754z"/></g><g id="chapter-progress-chapter" class="aristotle-svg-svg ">	<path  class="teal  st27" d="M12,7.402l5,2.679v5.842l-5,2.676l-5-2.676v-5.842L12,7.402 M12,4L4,8.279v9.438L12,22		l8-4.282V8.279L12,4L12,4z"/></g><g id="chapter-progress-slide" class="aristotle-svg-svg ">	<rect x="4" y="4" class="st27" width="9" height="9"/></g><g id="chapter-progress-quiz" class="aristotle-svg-svg ">	<polygon  class="teal  st27" points="23.668,28.111 17.75,31.184 6.5,25.344 6.5,12.656 10.155,10.76 8.332,8.889 		4,11.138 4,26.862 17.75,34 26.106,29.662 	"/><polygon  class="teal  st27" points="17.75,4 11.401,7.296 13.872,8.83 17.75,6.816 29,12.656 29,25.344 27.178,26.289 		29.067,28.125 31.5,26.862 31.5,11.138 	"/><g>		<polygon class="st12" points="7.75,6.5 20.664,14.519 16.706,14.517 27.465,23.711 22.8,23.778 29.655,30.439 15.886,21.678 			21.061,21.583 9.561,12.731 13.695,12.603 		"/></g></g><g id="chapter-progress-duties" class="aristotle-svg-svg ">	<circle  class="teal st27" cx="8.5" cy="8.5" r="4.5"/></g><g id="closed-caption-btn" class="aristotle-svg-svg ">	<path class="st11" d="M23.146,7c1.692,0,3.068,1.376,3.068,3.068v7.863c0,1.692-1.376,3.068-3.068,3.068H10.065		C8.376,20.999,7,19.623,7,17.931v-7.863C7,8.376,8.376,7,10.065,7H23.146 M23.146,4H10.065C6.714,4,4,6.717,4,10.068v7.863		c0,3.352,2.716,6.068,6.065,6.068h13.081c3.354,0,6.068-2.717,6.068-6.068v-7.863C29.215,6.716,26.498,4,23.146,4L23.146,4z"/><path class="st11" d="M15.148,17.843c-0.569,0.234-0.896,0.312-1.391,0.312c-1.053,0-2.002-0.469-2.652-1.313		c-0.608-0.793-0.909-1.819-0.909-3.146c0-1.456,0.363-2.549,1.133-3.381c0.699-0.754,1.625-1.144,2.703-1.144		c0.455,0,0.739,0.052,1.155,0.208v2.482c-0.39-0.39-0.663-0.52-1.079-0.52c-0.946,0-1.521,0.871-1.521,2.314		c0,1.403,0.546,2.235,1.481,2.235c0.44,0,0.755-0.143,1.223-0.559L15.148,17.843z"/><path class="st11" d="M22.182,17.843c-0.571,0.234-0.896,0.312-1.391,0.312c-1.055,0-2.002-0.469-2.652-1.313		c-0.61-0.793-0.91-1.819-0.91-3.146c0-1.456,0.364-2.549,1.132-3.381c0.701-0.754,1.625-1.144,2.704-1.144		c0.455,0,0.74,0.052,1.156,0.208v2.482c-0.39-0.39-0.663-0.52-1.079-0.52c-0.947,0-1.521,0.871-1.521,2.314		c0,1.403,0.546,2.235,1.48,2.235c0.441,0,0.754-0.143,1.224-0.559L22.182,17.843z"/></g><g id="playhead" class="aristotle-svg-svg ">	<path class="st16" d="M12,4L4,8.282v9.437L12,22l8-4.281V8.282L12,4L12,4z"/><polygon class="st27" points="7.039,15.914 7.039,10.085 12,7.43 16.961,10.085 16.961,15.914 12,18.57 	"/></g><g id="pause-btn" class="aristotle-svg-svg ">	<g>		<path class="st27" d="M18,7.367l11,5.607v12.05l-11,5.607L7,25.024v-12.05L18,7.367 M18,4L4,11.138v15.726l14,7.138l14-7.138			V11.138L18,4L18,4z"/></g>	<g  class="pause" >		<g>			<rect x="13.5" y="13" class="st16" width="3" height="12"/></g>		<g>			<rect x="19.5" y="13" class="st16" width="3" height="12"/></g>	</g>	<g  class="play" >		<polygon class="st16" points="14.67,24.993 14.67,12.749 22.97,18.871 		"/></g>	<g  class="replay" >		<path class="st23" d="M17.819,13.11c3.182,0,5.761,2.58,5.761,5.761s-2.579,5.761-5.761,5.761c-3.182,0-5.761-2.58-5.761-5.761"/><polygon class="st16" points="19.306,16.845 14.55,12.932 19.306,9.804 		"/></g></g>';
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
        return _this.updateCallsign();
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

  Top.prototype.updateCallsign = function() {
    var name;
    name = aristotle.lmsProxy.user.split(",");
    return $(".name", this.$top).html(name[1] + " \"" + (aristotle.globals.get('callsign')) + "\" " + name[0]);
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
      callsign = aristotle.globals.get('callsign', false);
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
    bodymovin.setQuality('low');
    this.$attic.addClass('hidden');
    this.$pauseAndPlayBtn.removeClass('paused');
    this.$pauseAndPlayBtn.removeClass('complete');
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
        if (((ref2 = slide.movie) != null ? ref2.layers : void 0) != null) {
          ref3 = slide.movie.layers;
          for (k = 0, len2 = ref3.length; k < len2; k++) {
            layer = ref3[k];
            layers[layer.depth] = layer;
          }
        }
        if (slide.title === title) {
          slideTitle = slide.title;
          breakLoop1 = true;
          break;
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
    } else if (/.svg|.jpg|.jpeg|.png/.test(asset)) {
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
    this.reset();
    results = [];
    for (j = 0, len = layers.length; j < len; j++) {
      layerData = layers[j];
      if (layerData != null) {
        layerData.jumpToEnd = true;
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
      if (item.icon !== "mini-control-center" || item.icon !== "mini-generation" || item.icon !== "mini-substation") {
        item.icon = "mini-control-center";
      }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9ndWxwLWNvZmZlZWlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiYXJpc3RvdGxlLmNvZmZlZSIsImNocm9tZS9ib3R0b20tdWktZWxlbWVudHMuY29mZmVlIiwiY2hyb21lL2Nocm9tZS11aS5jb2ZmZWUiLCJjaHJvbWUvcHJvZ3Jlc3MtbWFwLmNvZmZlZSIsImNocm9tZS90b3AuY29mZmVlIiwiY2hyb21lL3Zjci1jb250cm9scy5jb2ZmZWUiLCJlcGlzb2RlL2F1ZGlvLXRyYWNrLmNvZmZlZSIsImVwaXNvZGUvY2hhcHRlci1oZWFkaW5nLmNvZmZlZSIsImVwaXNvZGUvY2hhcHRlci5jb2ZmZWUiLCJlcGlzb2RlL2VwaXNvZGUuY29mZmVlIiwiZXBpc29kZS9zbGlkZS5jb2ZmZWUiLCJlcGlzb2RlL3NsaWRlcy5jb2ZmZWUiLCJtaXNjL1NlcXVlbmNlLmNvZmZlZSIsIm1pc2MvYXNzZXQtcHJlbG9hZGVyLmNvZmZlZSIsIm1pc2MvYnJvd3Nlci1kZXRlY3QuY29mZmVlIiwibWlzYy9jb21tYW5kZXIuY29mZmVlIiwibWlzYy9kZXYtdG9vbHMuY29mZmVlIiwibWlzYy9kaWN0aW9uYXJ5LmNvZmZlZSIsIm1pc2MvZXBpc29kZS1sb2FkZXIuY29mZmVlIiwibWlzYy9nbG9iYWwtdmFycy5jb2ZmZWUiLCJtaXNjL2xtcy1wcm94eS5jb2ZmZWUiLCJtaXNjL2xvZ2dlci5jb2ZmZWUiLCJtaXNjL3BhcnNlci5jb2ZmZWUiLCJtaXNjL3BhdXNhYmxlLWRlbGF5cy5jb2ZmZWUiLCJtaXNjL3NmeC5jb2ZmZWUiLCJtb3ZpZS9keW5hbWljLWFzc2V0cy5jb2ZmZWUiLCJtb3ZpZS9oaWdobGlnaHRlci5jb2ZmZWUiLCJtb3ZpZS9sYXllci5jb2ZmZWUiLCJtb3ZpZS9tb3ZpZS5jb2ZmZWUiLCJtb3ZpZS9zdmctYW5pbWF0aW9uLmNvZmZlZSIsInNsaWRlLXV4L2NvbXBvbmVudHMvY2FsbC1zaWduLXNlbGVjdC5jb2ZmZWUiLCJzbGlkZS11eC9jb21wb25lbnRzL2NvbXBvbmVudC5jb2ZmZWUiLCJzbGlkZS11eC9jb21wb25lbnRzL2RlZmVuZGVyLWNhcmRzLmNvZmZlZSIsInNsaWRlLXV4L2NvbXBvbmVudHMvZGlhbG9ndWUtcGFnZS5jb2ZmZWUiLCJzbGlkZS11eC9jb21wb25lbnRzL2RpYWxvZ3VlLmNvZmZlZSIsInNsaWRlLXV4L2NvbXBvbmVudHMvZHV0aWVzLmNvZmZlZSIsInNsaWRlLXV4L2NvbXBvbmVudHMvZXBpc29kZS1pbnRyby5jb2ZmZWUiLCJzbGlkZS11eC9jb21wb25lbnRzL2VwaXNvZGUtb3V0cm8uY29mZmVlIiwic2xpZGUtdXgvY29tcG9uZW50cy9leHBsb3JlLWNhcmRzLmNvZmZlZSIsInNsaWRlLXV4L2NvbXBvbmVudHMvZ2hvc3QtdXguY29mZmVlIiwic2xpZGUtdXgvY29tcG9uZW50cy9wZXJzb25hbC1pbmZvLWludHJvLmNvZmZlZSIsInNsaWRlLXV4L2NvbXBvbmVudHMvcXVpei9xdWVzdGlvbi5jb2ZmZWUiLCJzbGlkZS11eC9jb21wb25lbnRzL3F1aXovcXVpei5jb2ZmZWUiLCJzbGlkZS11eC9jb21wb25lbnRzL3NlbGVjdGlvbi1kaWFsb2d1ZS5jb2ZmZWUiLCJzbGlkZS11eC9jb21wb25lbnRzL3NpbXBsZS1zZWxlY3Rpb24uY29mZmVlIiwic2xpZGUtdXgvY29tcG9uZW50cy9zb3VuZC10ZXN0LmNvZmZlZSIsInNsaWRlLXV4L2RpYWxvZ3VlLWFjdG9ycy9jbG9zZWQtY2FwdGlvbi5jb2ZmZWUiLCJzbGlkZS11eC9kaWFsb2d1ZS1hY3RvcnMvY3RhbmxlZS5jb2ZmZWUiLCJzbGlkZS11eC9nZW5lcmljLXVpLmNvZmZlZSIsInNsaWRlLXV4L2xhYmxlci5jb2ZmZWUiLCJzbGlkZS11eC9zbGlkZS11eC5jb2ZmZWUiLCJzbGlkZS11eC90ZXh0LWRpYWxvZ3VlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkxBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNySEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ2xHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeklBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDalBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0SEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25KQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBBcmlzdG90bGUsIENocm9tZVVJLCBDb21tYW5kZXIsIERldlRvb2xzLCBEaWN0aW9uYXJ5LCBFcGlzb2RlLCBFcGlzb2RlTG9hZGVyLCBHbG9iYWxWYXJzLCBMTVNQcm94eSwgTG9nZ2VyLCBNb3ZpZSwgUGFyc2VyLCBQYXVzYWJsZURlbGF5cywgU2xpZGVVWCwgU291bmRGWCwgaXNJbnRlcm5ldEV4cCxcbiAgYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH07XG5cbkNocm9tZVVJID0gcmVxdWlyZShcImNocm9tZS9jaHJvbWUtdWlcIik7XG5cbkNvbW1hbmRlciA9IHJlcXVpcmUoJ21pc2MvY29tbWFuZGVyJyk7XG5cbkRldlRvb2xzID0gcmVxdWlyZSgnbWlzYy9kZXYtdG9vbHMnKTtcblxuRGljdGlvbmFyeSA9IHJlcXVpcmUoJ21pc2MvZGljdGlvbmFyeScpO1xuXG5FcGlzb2RlID0gcmVxdWlyZShcImVwaXNvZGUvZXBpc29kZVwiKTtcblxuRXBpc29kZUxvYWRlciA9IHJlcXVpcmUoJ21pc2MvZXBpc29kZS1sb2FkZXInKTtcblxuR2xvYmFsVmFycyA9IHJlcXVpcmUoJ21pc2MvZ2xvYmFsLXZhcnMnKTtcblxuaXNJbnRlcm5ldEV4cCA9IHJlcXVpcmUoJ21pc2MvYnJvd3Nlci1kZXRlY3QnKTtcblxuTE1TUHJveHkgPSByZXF1aXJlKCdtaXNjL2xtcy1wcm94eScpO1xuXG5Mb2dnZXIgPSByZXF1aXJlKCdtaXNjL2xvZ2dlcicpO1xuXG5Nb3ZpZSA9IHJlcXVpcmUoJ21vdmllL21vdmllJyk7XG5cblBhcnNlciA9IHJlcXVpcmUoJ21pc2MvcGFyc2VyJyk7XG5cblBhdXNhYmxlRGVsYXlzID0gcmVxdWlyZSgnbWlzYy9wYXVzYWJsZS1kZWxheXMnKTtcblxuU2xpZGVVWCA9IHJlcXVpcmUoJ3NsaWRlLXV4L3NsaWRlLXV4Jyk7XG5cblNvdW5kRlggPSByZXF1aXJlKCdtaXNjL3NmeCcpO1xuXG5BcmlzdG90bGUgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIEFyaXN0b3RsZSgkZWwsIGVwaXNvZGVzRGlyLCBsb2NhbERpciwgZGV2RXBpc29kZU51bSwgaXNEZXZNb2RlLCBpc0xvY2FsLCBzdWRvKSB7XG4gICAgdmFyIGNvbW1hbmRlciwgZGljdGlvbmFyeSwgZ2xvYmFscywgbG1zUHJveHksIHBhcnNlciwgcGF1c2FibGVEZWxheXMsIHNoYWRvd0ljb25zLCBzb3VuZEZ4O1xuICAgIHRoaXMuJGVsID0gJGVsO1xuICAgIHRoaXMuZXBpc29kZXNEaXIgPSBlcGlzb2Rlc0RpcjtcbiAgICB0aGlzLmxvY2FsRGlyID0gbG9jYWxEaXI7XG4gICAgdGhpcy5kZXZFcGlzb2RlTnVtID0gZGV2RXBpc29kZU51bTtcbiAgICB0aGlzLmlzRGV2TW9kZSA9IGlzRGV2TW9kZTtcbiAgICB0aGlzLmlzTG9jYWwgPSBpc0xvY2FsO1xuICAgIGlmIChzdWRvID09IG51bGwpIHtcbiAgICAgIHN1ZG8gPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5vbkpzb25Mb2FkZWQgPSBiaW5kKHRoaXMub25Kc29uTG9hZGVkLCB0aGlzKTtcbiAgICB0aGlzLmJlZ2luID0gYmluZCh0aGlzLmJlZ2luLCB0aGlzKTtcbiAgICB3aW5kb3cuYXJpc3RvdGxlID0gdGhpcztcbiAgICBhcmlzdG90bGUuc3VkbyA9IHN1ZG87XG4gICAgYXJpc3RvdGxlLmlzSUUgPSBpc0ludGVybmV0RXhwKCk7XG4gICAgY29tbWFuZGVyID0gbmV3IENvbW1hbmRlcigpO1xuICAgIGRpY3Rpb25hcnkgPSBuZXcgRGljdGlvbmFyeSgpO1xuICAgIGdsb2JhbHMgPSBuZXcgR2xvYmFsVmFycygpO1xuICAgIGxtc1Byb3h5ID0gbmV3IExNU1Byb3h5KHRoaXMuaXNMb2NhbCk7XG4gICAgcGFyc2VyID0gbmV3IFBhcnNlcigpO1xuICAgIHNvdW5kRnggPSBuZXcgU291bmRGWCgpO1xuICAgIHBhdXNhYmxlRGVsYXlzID0gbmV3IFBhdXNhYmxlRGVsYXlzKCk7XG4gICAgc2hhZG93SWNvbnMgPSBuZXcgcHhpY29ucy5TaGFkb3dJY29ucygpO1xuICAgIHRoaXMuc2V0RGV2TW9kZSh0aGlzLmlzRGV2TW9kZSk7XG4gICAgbG1zUHJveHkuYmVnaW4odGhpcy5iZWdpbik7XG4gIH1cblxuICBBcmlzdG90bGUucHJvdG90eXBlLmJlZ2luID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zZXRJbml0aWFsRXBpc29kZU51bSgpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ2VwaXNvZGUubG9hZCcsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgX3RoaXMuZXBpc29kZU51bSA9IGRhdGE7XG4gICAgICAgIHJldHVybiBfdGhpcy5pbml0KCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICByZXR1cm4gUHViU3ViLnB1Ymxpc2goJ2VwaXNvZGUubG9hZCcsIHRoaXMuZXBpc29kZU51bSk7XG4gIH07XG5cbiAgQXJpc3RvdGxlLnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGVwaXNvZGVMb2FkZXI7XG4gICAgaWYgKHRoaXMuY2hyb21lVUkgIT0gbnVsbCkge1xuICAgICAgdGhpcy5kZWxldGVPbGRBc3NldHMoKTtcbiAgICB9XG4gICAgdGhpcy5idWlsZCgpO1xuICAgIHJldHVybiBlcGlzb2RlTG9hZGVyID0gbmV3IEVwaXNvZGVMb2FkZXIodGhpcy5vbkpzb25Mb2FkZWQpO1xuICB9O1xuXG4gIEFyaXN0b3RsZS5wcm90b3R5cGUub25Kc29uTG9hZGVkID0gZnVuY3Rpb24oZXBpc29kZURhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5lcGlzb2RlID0gbmV3IEVwaXNvZGUoZXBpc29kZURhdGEsIHRoaXMubW92aWUsIHRoaXMuc2xpZGVVWCwgdGhpcy5jaHJvbWVVSSk7XG4gIH07XG5cbiAgQXJpc3RvdGxlLnByb3RvdHlwZS5idWlsZCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciAkYmFzZTtcbiAgICAkYmFzZSA9ICQoamFkZVRlbXBsYXRlWydhcmlzdG90bGUnXSh7fSkpO1xuICAgIHRoaXMuJGVsLmFwcGVuZCgkYmFzZSk7XG4gICAgc2hhZG93SWNvbnNJbnN0YW5jZS5zdmdSZXBsYWNlV2l0aFN0cmluZyhweFN2Z0ljb25TdHJpbmcsICRiYXNlKTtcbiAgICB0aGlzLmNocm9tZVVJID0gbmV3IENocm9tZVVJKCQoXCIuY2hyb21lXCIsICRiYXNlKSk7XG4gICAgdGhpcy5zbGlkZVVYID0gbmV3IFNsaWRlVVgoJChcIi5zbGlkZS11eFwiLCAkYmFzZSkpO1xuICAgIHJldHVybiB0aGlzLm1vdmllID0gbmV3IE1vdmllKCQoXCIubW92aWVcIiwgJGJhc2UpKTtcbiAgfTtcblxuICBBcmlzdG90bGUucHJvdG90eXBlLmRlbGV0ZU9sZEFzc2V0cyA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZXBpc29kZS5kZXN0cm95KCk7XG4gICAgdGhpcy5jaHJvbWVVSS5kZXN0cm95KCk7XG4gICAgdGhpcy5zbGlkZVVYLmRlc3Ryb3koKTtcbiAgICB0aGlzLm1vdmllLmRlc3Ryb3koKTtcbiAgICB0aGlzLiRlbC5lbXB0eSgpO1xuICAgIHJldHVybiB0aGlzLmVwaXNvZGUgPSB0aGlzLmNocm9tZVVJID0gdGhpcy5zbGlkZVVYID0gdGhpcy5tb3ZpZSA9IG51bGw7XG4gIH07XG5cbiAgQXJpc3RvdGxlLnByb3RvdHlwZS5zZXREZXZNb2RlID0gZnVuY3Rpb24oZGV2TW9kZSkge1xuICAgIHZhciBsb2dnZXI7XG4gICAgbG9nZ2VyID0gbmV3IExvZ2dlcigkKCdib2R5JyksIGRldk1vZGUpO1xuICAgIHJldHVybiBhcmlzdG90bGUuZGV2VG9vbHMgPSBuZXcgRGV2VG9vbHMoZGV2TW9kZSk7XG4gIH07XG5cbiAgQXJpc3RvdGxlLnByb3RvdHlwZS5nZXRFcGlzb2RlUm9vdCA9IGZ1bmN0aW9uKGVwaXNvZGVOdW0pIHtcbiAgICBpZiAoZXBpc29kZU51bSA9PSBudWxsKSB7XG4gICAgICBlcGlzb2RlTnVtID0gdGhpcy5lcGlzb2RlTnVtO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5lcGlzb2Rlc0RpciArIFwiL2VwaXNvZGVcIiArIGVwaXNvZGUgKyBcIi9cIjtcbiAgfTtcblxuICBBcmlzdG90bGUucHJvdG90eXBlLnNldEluaXRpYWxFcGlzb2RlTnVtID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKGFyaXN0b3RsZS5sbXNQcm94eS5zdG9yZSAhPSBudWxsKSB7XG4gICAgICBpZiAoYXJpc3RvdGxlLmxtc1Byb3h5LnN0b3JlLmxvY2F0aW9uICE9IG51bGwpIHtcbiAgICAgICAgaWYgKGFyaXN0b3RsZS5sbXNQcm94eS5zdG9yZS5sb2NhdGlvbi5lcGlzb2RlTnVtKSB7XG4gICAgICAgICAgdGhpcy5lcGlzb2RlTnVtID0gYXJpc3RvdGxlLmxtc1Byb3h5LnN0b3JlLmxvY2F0aW9uLmVwaXNvZGVOdW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuaXNEZXZNb2RlICYmICh0aGlzLmRldkVwaXNvZGVOdW0gIT0gbnVsbCkpIHtcbiAgICAgIHRoaXMuZXBpc29kZU51bSA9IHRoaXMuZGV2RXBpc29kZU51bTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZXBpc29kZU51bSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5lcGlzb2RlTnVtID0gXCIwXCI7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBBcmlzdG90bGU7XG5cbn0pKCk7XG5cbndpbmRvdy5BcmlzdG90bGUgPSBBcmlzdG90bGU7XG4iLCJ2YXIgQm90dG9tVWlFbGVtZW50cywgUHJvZ3Jlc3NNYXAsIFZDUkNvbnRyb2xzO1xuXG5Qcm9ncmVzc01hcCA9IHJlcXVpcmUoJ2Nocm9tZS9wcm9ncmVzcy1tYXAnKTtcblxuVkNSQ29udHJvbHMgPSByZXF1aXJlKCdjaHJvbWUvdmNyLWNvbnRyb2xzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gQm90dG9tVWlFbGVtZW50cyA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gQm90dG9tVWlFbGVtZW50cygkZWwpIHtcbiAgICB0aGlzLiRlbCA9ICRlbDtcbiAgICB0aGlzLiRub2RlID0gJChqYWRlVGVtcGxhdGVbJ2Nocm9tZS11aS9wcm9ncmVzcyddKHt9KSk7XG4gICAgdGhpcy4kZWwuYXBwZW5kKHRoaXMuJG5vZGUpO1xuICAgIHRoaXMucHJvZ2Vzc01hcCA9IG5ldyBQcm9ncmVzc01hcCh0aGlzLiRub2RlKTtcbiAgICB0aGlzLnZjckNvbnRyb2xzID0gbmV3IFZDUkNvbnRyb2xzKHRoaXMuJG5vZGUpO1xuICAgIHRoaXMuc2hvdygncHJvZ3Jlc3MtbWFwJyk7XG4gICAgUHViU3ViLnN1YnNjcmliZSgndmNyLWNvbnRyb2wuc2hvdycsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgX3RoaXMuc2hvd0FuaW1hdGlvbkNvbnRyb2xzKGRhdGEpO1xuICAgICAgICByZXR1cm4gX3RoaXMuc2hvdygndmNyJyk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgfVxuXG4gIEJvdHRvbVVpRWxlbWVudHMucHJvdG90eXBlLnNob3dBbmltYXRpb25Db250cm9scyA9IGZ1bmN0aW9uKHN2Z0FuaW1hdGlvbikge1xuICAgIHJldHVybiB0aGlzLnZjckNvbnRyb2xzLmFjdGl2YXRlKHN2Z0FuaW1hdGlvbiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIF90aGlzLnNob3coJ3Byb2dyZXNzLW1hcCcpO1xuICAgICAgICByZXR1cm4gUHViU3ViLnB1Ymxpc2goJ3NsaWRlcy5uZXh0LXNsaWRlJyk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgfTtcblxuICBCb3R0b21VaUVsZW1lbnRzLnByb3RvdHlwZS5zaG93ID0gZnVuY3Rpb24oY2xzcykge1xuICAgIHRoaXMuJG5vZGUuY2hpbGRyZW4oKS5hZGRDbGFzcygnaGlkZGVuJyk7XG4gICAgcmV0dXJuICQoXCIuXCIgKyBjbHNzLCB0aGlzLiRub2RlKS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gIH07XG5cbiAgQm90dG9tVWlFbGVtZW50cy5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLnByb2dyZXNzTWFwICE9IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLnByb2dyZXNzTWFwLmRlc3Ryb3koKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIEJvdHRvbVVpRWxlbWVudHM7XG5cbn0pKCk7XG4iLCJ2YXIgQm90dG9tVWlFbGVtZW50cywgQ2hyb21lVUksIFRvcDtcblxuQm90dG9tVWlFbGVtZW50cyA9IHJlcXVpcmUoJ2Nocm9tZS9ib3R0b20tdWktZWxlbWVudHMnKTtcblxuVG9wID0gcmVxdWlyZSgnY2hyb21lL3RvcCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENocm9tZVVJID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBDaHJvbWVVSSgkZWwpIHtcbiAgICB2YXIgdG9rZW4xLCB0b2tlbjI7XG4gICAgdGhpcy4kZWwgPSAkZWw7XG4gICAgdG9rZW4xID0gUHViU3ViLnN1YnNjcmliZShcImNocm9tZS5oaWRlXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmhpZGUoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRva2VuMiA9IFB1YlN1Yi5zdWJzY3JpYmUoXCJjaHJvbWUuc2hvd1wiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5zaG93KCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0aGlzLnRva2VucyA9IFt0b2tlbjEsIHRva2VuMl07XG4gIH1cblxuICBDaHJvbWVVSS5wcm90b3R5cGUuYnVpbGQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmJvdHRvbVVpRWxlbWVudHMgPSBuZXcgQm90dG9tVWlFbGVtZW50cyh0aGlzLiRlbCk7XG4gICAgdGhpcy50b3AgPSBuZXcgVG9wKHRoaXMuJGVsKTtcbiAgICByZXR1cm4gc2hhZG93SWNvbnNJbnN0YW5jZS5zdmdSZXBsYWNlV2l0aFN0cmluZyhweFN2Z0ljb25TdHJpbmcsIHRoaXMuJGVsKTtcbiAgfTtcblxuICBDaHJvbWVVSS5wcm90b3R5cGUuaGlkZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRlbC5hZGRDbGFzcyhcImhpZGRlblwiKTtcbiAgfTtcblxuICBDaHJvbWVVSS5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRlbC5yZW1vdmVDbGFzcyhcImhpZGRlblwiKTtcbiAgfTtcblxuICBDaHJvbWVVSS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpLCBsZW4sIHJlZiwgcmVzdWx0cywgdG9rZW47XG4gICAgdGhpcy5ib3R0b21VaUVsZW1lbnRzLmRlc3Ryb3koKTtcbiAgICB0aGlzLnRvcC5kZXN0cm95KCk7XG4gICAgcmVmID0gdGhpcy50b2tlbnM7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgdG9rZW4gPSByZWZbaV07XG4gICAgICByZXN1bHRzLnB1c2goUHViU3ViLnVuc3Vic2NyaWJlKHRva2VuKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIHJldHVybiBDaHJvbWVVSTtcblxufSkoKTtcbiIsInZhciBQcm9ncmVzc01hcDtcblxubW9kdWxlLmV4cG9ydHMgPSBQcm9ncmVzc01hcCA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gUHJvZ3Jlc3NNYXAoJGVsMSkge1xuICAgIHZhciB0b2tlbjEsIHRva2VuMiwgdG9rZW4zLCB0b2tlbjQsIHRva2VuNTtcbiAgICB0aGlzLiRlbCA9ICRlbDE7XG4gICAgdG9rZW4xID0gUHViU3ViLnN1YnNjcmliZSgnZXBpc29kZS5sb2FkZWQnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5idWlsZE1hcChkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRva2VuMiA9IFB1YlN1Yi5zdWJzY3JpYmUoJ2NoYXB0ZXIuc3RhcnRlZCcsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmxpZ2h0SWNvbihkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRva2VuMyA9IFB1YlN1Yi5zdWJzY3JpYmUoJ3NsaWRlLmFjdGl2YXRlZCcsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmxpZ2h0SWNvbihkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRva2VuNCA9IFB1YlN1Yi5zdWJzY3JpYmUoJ3F1aXouYWN0aXZhdGVkJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMubGlnaHRJY29uKGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgdG9rZW41ID0gUHViU3ViLnN1YnNjcmliZSgnZHV0aWVzLmFjdGl2YXRlZCcsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmxpZ2h0SWNvbihkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRoaXMudG9rZW5zID0gW3Rva2VuMSwgdG9rZW4yLCB0b2tlbjMsIHRva2VuNCwgdG9rZW41XTtcbiAgfVxuXG4gIFByb2dyZXNzTWFwLnByb3RvdHlwZS5saWdodEljb24gPSBmdW5jdGlvbih0aXRsZSkge1xuICAgIHZhciAkZWw7XG4gICAgJGVsID0gJChcIiNcIiArICh0aGlzLnRpdGxlVG9JZCh0aXRsZSkpLCB0aGlzLiRub2RlKTtcbiAgICAkZWwuYWRkQ2xhc3MoXCJ2aWV3ZWRcIik7XG4gICAgJGVsLnByZXZBbGwoKS5hZGRDbGFzcyhcInZpZXdlZFwiKTtcbiAgICByZXR1cm4gJGVsLm5leHRBbGwoKS5yZW1vdmVDbGFzcyhcInZpZXdlZFwiKTtcbiAgfTtcblxuICBQcm9ncmVzc01hcC5wcm90b3R5cGUuYnVpbGRNYXAgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyICRtaWxlc3RvbmUsIG1hcERhdGE7XG4gICAgbWFwRGF0YSA9IHRoaXMucGFyc2VFcGlzb2RlRGF0YShkYXRhKTtcbiAgICB0aGlzLmFkZEljb25EYXRhKG1hcERhdGEpO1xuICAgIHRoaXMuJG5vZGUgPSAkKGphZGVUZW1wbGF0ZVsnY2hyb21lLXVpL3Byb2dyZXNzLW1hcCddKHtcbiAgICAgIG1pbGVzdG9uZXM6IG1hcERhdGFcbiAgICB9KSk7XG4gICAgdGhpcy4kZWwuYXBwZW5kKHRoaXMuJG5vZGUpO1xuICAgIHNoYWRvd0ljb25zSW5zdGFuY2Uuc3ZnUmVwbGFjZVdpdGhTdHJpbmcocHhTdmdJY29uU3RyaW5nLCB0aGlzLiRub2RlKTtcbiAgICAkbWlsZXN0b25lID0gJChcIi5taWxlc3RvbmVcIiwgdGhpcy4kbm9kZSk7XG4gICAgaWYgKGFyaXN0b3RsZS5zdWRvKSB7XG4gICAgICAkbWlsZXN0b25lLm9uKFwiY2xpY2tcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLm9uTWlsZVN0b25lQ2xpY2soJChlLmN1cnJlbnRUYXJnZXQpKTtcbiAgICAgICAgfTtcbiAgICAgIH0pKHRoaXMpKTtcbiAgICB9XG4gICAgJG1pbGVzdG9uZS5vbihcIm1vdXNlb3ZlclwiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5vbk1pbGVTdG9uZU92ZXIoJChlLmN1cnJlbnRUYXJnZXQpKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHJldHVybiAkbWlsZXN0b25lLm9uKFwibW91c2VvdXRcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgICByZXR1cm4gX3RoaXMub25NaWxlU3RvbmVPdXQoJChlLmN1cnJlbnRUYXJnZXQpKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9O1xuXG4gIFByb2dyZXNzTWFwLnByb3RvdHlwZS5wYXJzZUVwaXNvZGVEYXRhID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciBjaGFwdGVyLCBpLCBpdGVtLCBpdGVtcywgaiwgbGVuLCBsZW4xLCByZWYsIHJlZjEsIHNsaWRlO1xuICAgIGl0ZW1zID0gW107XG4gICAgcmVmID0gZGF0YS5jaGFwdGVycztcbiAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNoYXB0ZXIgPSByZWZbaV07XG4gICAgICBpdGVtcy5wdXNoKHtcbiAgICAgICAga2luZDogXCJjaGFwdGVyXCIsXG4gICAgICAgIHRpdGxlOiBjaGFwdGVyLnRpdGxlLFxuICAgICAgICBpZDogdGhpcy50aXRsZVRvSWQoY2hhcHRlci50aXRsZSlcbiAgICAgIH0pO1xuICAgICAgcmVmMSA9IGNoYXB0ZXIuc2xpZGVzO1xuICAgICAgZm9yIChqID0gMCwgbGVuMSA9IHJlZjEubGVuZ3RoOyBqIDwgbGVuMTsgaisrKSB7XG4gICAgICAgIHNsaWRlID0gcmVmMVtqXTtcbiAgICAgICAgaXRlbSA9IHRoaXMuZ2V0SXRlbShzbGlkZSk7XG4gICAgICAgIGlmIChzbGlkZS50aXRsZSAhPSBudWxsKSB7XG4gICAgICAgICAgaWYgKGl0ZW0gPT0gbnVsbCkge1xuICAgICAgICAgICAgaXRlbSA9IHtcbiAgICAgICAgICAgICAga2luZDogXCJzbGlkZVwiXG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpdGVtLnRpdGxlID0gc2xpZGUudGl0bGU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGl0ZW0gIT0gbnVsbCkge1xuICAgICAgICAgIGl0ZW0uaWQgPSB0aGlzLnRpdGxlVG9JZChpdGVtLnRpdGxlKTtcbiAgICAgICAgICBpdGVtcy5wdXNoKGl0ZW0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpdGVtcztcbiAgfTtcblxuICBQcm9ncmVzc01hcC5wcm90b3R5cGUuYWRkSWNvbkRhdGEgPSBmdW5jdGlvbihtYXBJdGVtcykge1xuICAgIHZhciBpLCBpdGVtLCBsZW4sIHJlc3VsdHM7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoaSA9IDAsIGxlbiA9IG1hcEl0ZW1zLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBpdGVtID0gbWFwSXRlbXNbaV07XG4gICAgICBzd2l0Y2ggKGl0ZW0ua2luZCkge1xuICAgICAgICBjYXNlIFwiY2hhcHRlclwiOlxuICAgICAgICAgIHJlc3VsdHMucHVzaChpdGVtLmljb24gPSBcImNoYXB0ZXItcHJvZ3Jlc3MtY2hhcHRlclwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInNsaWRlXCI6XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKGl0ZW0uaWNvbiA9IFwiY2hhcHRlci1wcm9ncmVzcy1zbGlkZVwiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInF1aXpcIjpcbiAgICAgICAgICByZXN1bHRzLnB1c2goaXRlbS5pY29uID0gXCJjaGFwdGVyLXByb2dyZXNzLXF1aXpcIik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJkdXRpZXNcIjpcbiAgICAgICAgICByZXN1bHRzLnB1c2goaXRlbS5pY29uID0gXCJjaGFwdGVyLXByb2dyZXNzLWR1dGllc1wiKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXN1bHRzLnB1c2godm9pZCAwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgUHJvZ3Jlc3NNYXAucHJvdG90eXBlLnRpdGxlVG9JZCA9IGZ1bmN0aW9uKHRpdGxlKSB7XG4gICAgdGl0bGUgPSB0aXRsZS5yZXBsYWNlKC9cXHMvZywgJ18nKTtcbiAgICB0aXRsZSA9IHRpdGxlLnJlcGxhY2UoLyhbXFwhXFw/XFwnXSkvZywgJycpO1xuICAgIHJldHVybiB0aXRsZS50b0xvd2VyQ2FzZSgpO1xuICB9O1xuXG4gIFByb2dyZXNzTWFwLnByb3RvdHlwZS5nZXRJdGVtID0gZnVuY3Rpb24oc2xpZGUpIHtcbiAgICB2YXIgY29tcG9uZW50LCBpLCBsZW4sIHJlZjtcbiAgICBpZiAoc2xpZGUudXggPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmIChzbGlkZS51eC5jb21wb25lbnRzID09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZWYgPSBzbGlkZS51eC5jb21wb25lbnRzO1xuICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgY29tcG9uZW50ID0gcmVmW2ldO1xuICAgICAgaWYgKGNvbXBvbmVudC5raW5kID09PSBcInF1aXpcIikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGtpbmQ6IFwicXVpelwiLFxuICAgICAgICAgIHRpdGxlOiBcInF1aXpcIlxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIGlmIChjb21wb25lbnQua2luZCA9PT0gXCJkdXRpZXNcIikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGtpbmQ6IFwiZHV0aWVzXCIsXG4gICAgICAgICAgdGl0bGU6IFwiRHV0eSBSZXZpZXdcIlxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfTtcblxuICBQcm9ncmVzc01hcC5wcm90b3R5cGUub25NaWxlU3RvbmVDbGljayA9IGZ1bmN0aW9uKCRlbCkge1xuICAgIHJldHVybiBQdWJTdWIucHVibGlzaCgnZXBpc29kZS5nb3RvJywgJGVsLmF0dHIoXCJkYXRhLXRpdGxlXCIpKTtcbiAgfTtcblxuICBQcm9ncmVzc01hcC5wcm90b3R5cGUub25NaWxlU3RvbmVPdmVyID0gZnVuY3Rpb24oJGVsKSB7XG4gICAgaWYgKCEkZWwuaGFzQ2xhc3MoXCJ2aWV3ZWRcIikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIFB1YlN1Yi5wdWJsaXNoKCdsYWJlbC5hdHRhY2gnLCB7XG4gICAgICBlbDogJGVsLFxuICAgICAgY29udGVudDoge1xuICAgICAgICB0aXRsZTogJGVsLmF0dHIoXCJkYXRhLXRpdGxlXCIpXG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgUHJvZ3Jlc3NNYXAucHJvdG90eXBlLm9uTWlsZVN0b25lT3V0ID0gZnVuY3Rpb24oJGVsKSB7XG4gICAgcmV0dXJuIFB1YlN1Yi5wdWJsaXNoKCdsYWJlbC5kZXN0cm95JywgJGVsKTtcbiAgfTtcblxuICBQcm9ncmVzc01hcC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpLCBsZW4sIHJlZiwgcmVzdWx0cywgdG9rZW47XG4gICAgcmVmID0gdGhpcy50b2tlbnM7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgdG9rZW4gPSByZWZbaV07XG4gICAgICByZXN1bHRzLnB1c2goUHViU3ViLnVuc3Vic2NyaWJlKHRva2VuKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIHJldHVybiBQcm9ncmVzc01hcDtcblxufSkoKTtcbiIsInZhciBUb3A7XG5cbm1vZHVsZS5leHBvcnRzID0gVG9wID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBUb3AoJGVsMSkge1xuICAgIHZhciB0b2tlbjIsIHRva2VuMywgdG9rZW40LCB0b2tlbjUsIHRva2VuNjtcbiAgICB0aGlzLiRlbCA9ICRlbDE7XG4gICAgdG9rZW4yID0gUHViU3ViLnN1YnNjcmliZShcImNhbGxzaWduLnNlbGVjdGVkXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnVwZGF0ZUNhbGxzaWduKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0b2tlbjMgPSBQdWJTdWIuc3Vic2NyaWJlKFwiY2hyb21lLnNob3duYW1lXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnNob3dOYW1lKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0b2tlbjQgPSBQdWJTdWIuc3Vic2NyaWJlKFwiY2hyb21lLnNob3dlcGlzb2Rlc1wiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5zaG93SWNvbnMoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRva2VuNSA9IFB1YlN1Yi5zdWJzY3JpYmUoXCJjaHJvbWUuaGlkZW5hbWVcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuaGlkZU5hbWUoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRva2VuNiA9IFB1YlN1Yi5zdWJzY3JpYmUoXCJjaHJvbWUuaGlkZWVwaXNvZGVzXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmhpZGVJY29ucygpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgdGhpcy50b2tlbnMgPSBbdG9rZW4yLCB0b2tlbjMsIHRva2VuNCwgdG9rZW41LCB0b2tlbjZdO1xuICAgIHRoaXMuYnVpbGQoKTtcbiAgfVxuXG4gIFRvcC5wcm90b3R5cGUuYnVpbGQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgY2FsbHNpZ24sIGRhdGEsIGVwaXNvZGVOdW0sIG5hbWUsIHJlZjtcbiAgICBuYW1lID0gYXJpc3RvdGxlLmxtc1Byb3h5LnVzZXIuc3BsaXQoXCIsXCIpO1xuICAgIHJlZiA9IHRoaXMuZ2V0VmFycygpLCBjYWxsc2lnbiA9IHJlZlswXSwgZXBpc29kZU51bSA9IHJlZlsxXTtcbiAgICBkYXRhID0ge1xuICAgICAgbmFtZTogbmFtZVsxXSArIFwiIFxcXCJcIiArIGNhbGxzaWduICsgXCJcXFwiIFwiICsgbmFtZVswXSxcbiAgICAgIGVwaXNvZGU6IGVwaXNvZGVOdW1cbiAgICB9O1xuICAgIHRoaXMuZ2V0UmFuayhkYXRhLCBlcGlzb2RlTnVtKTtcbiAgICB0aGlzLiR0b3AgPSAkKGphZGVUZW1wbGF0ZVsnY2hyb21lLXVpL3RvcCddKGRhdGEpKTtcbiAgICB0aGlzLiRlbC5hcHBlbmQodGhpcy4kdG9wKTtcbiAgICB0aGlzLiRuYW1lID0gJChcIi5uYW1lLWFuZC1yYW5rXCIsIHRoaXMuJHRvcCk7XG4gICAgdGhpcy4kaWNvbnMgPSAkKFwiLmVwaXNvZGVzXCIsIHRoaXMuJHRvcCk7XG4gICAgdGhpcy4kbW9kZSA9ICQoXCIubGVhcm4tbW9kZVwiLCB0aGlzLiR0b3ApO1xuICAgIHRoaXMuaGlkZU1vZGUoKTtcbiAgICAkKFwiLmJhZGdlXCIsIHRoaXMuJHRvcCkub24oXCJtb3VzZW92ZXJcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuYmFkZ2VNb3VzZW92ZXIoZSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICByZXR1cm4gJChcIi5iYWRnZVwiLCB0aGlzLiR0b3ApLm9uKFwibW91c2VvdXRcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuYmFkZ2VNb3VzZW91dChlKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9O1xuXG4gIFRvcC5wcm90b3R5cGUudXBkYXRlQ2FsbHNpZ24gPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbmFtZTtcbiAgICBuYW1lID0gYXJpc3RvdGxlLmxtc1Byb3h5LnVzZXIuc3BsaXQoXCIsXCIpO1xuICAgIHJldHVybiAkKFwiLm5hbWVcIiwgdGhpcy4kdG9wKS5odG1sKG5hbWVbMV0gKyBcIiBcXFwiXCIgKyAoYXJpc3RvdGxlLmdsb2JhbHMuZ2V0KCdjYWxsc2lnbicpKSArIFwiXFxcIiBcIiArIG5hbWVbMF0pO1xuICB9O1xuXG4gIFRvcC5wcm90b3R5cGUuc2hvd05hbWUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kbmFtZS5jc3Moe1xuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICBvcGFjaXR5OiAwXG4gICAgfSkudmVsb2NpdHkoe1xuICAgICAgb3BhY2l0eTogMVxuICAgIH0sIHtcbiAgICAgIGR1cmF0aW9uOiA1MDBcbiAgICB9KTtcbiAgfTtcblxuICBUb3AucHJvdG90eXBlLmhpZGVOYW1lID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJG5hbWUuY3NzKHtcbiAgICAgIGRpc3BsYXk6IFwibm9uZVwiXG4gICAgfSk7XG4gIH07XG5cbiAgVG9wLnByb3RvdHlwZS5zaG93SWNvbnMgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kaWNvbnMuY3NzKHtcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgb3BhY2l0eTogMFxuICAgIH0pLnZlbG9jaXR5KHtcbiAgICAgIG9wYWNpdHk6IDFcbiAgICB9LCB7XG4gICAgICBkdXJhdGlvbjogNTAwXG4gICAgfSk7XG4gIH07XG5cbiAgVG9wLnByb3RvdHlwZS5oaWRlSWNvbnMgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kaWNvbnMuY3NzKHtcbiAgICAgIGRpc3BsYXk6IFwibm9uZVwiXG4gICAgfSk7XG4gIH07XG5cbiAgVG9wLnByb3RvdHlwZS5oaWRlTW9kZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRtb2RlLmFkZENsYXNzKFwiaGlkZGVuXCIpO1xuICB9O1xuXG4gIFRvcC5wcm90b3R5cGUuc2hvd01vZGUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kbW9kZS5yZW1vdmVDbGFzcyhcImhpZGRlblwiKTtcbiAgfTtcblxuICBUb3AucHJvdG90eXBlLmJhZGdlTW91c2VvdmVyID0gZnVuY3Rpb24oZSkge1xuICAgIHZhciAkZWwsIGNvbmZpZ0RhdGEsIGVwaXNvZGVOdW07XG4gICAgJGVsID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuICAgIGVwaXNvZGVOdW0gPSAkZWwuYXR0cignZGF0YS1lcGlzb2RlJyk7XG4gICAgY29uZmlnRGF0YSA9IHtcbiAgICAgIHRpdGxlOiBcIkVwaXNvZGUgXCIgKyBlcGlzb2RlTnVtLFxuICAgICAgdGV4dDogdGhpcy5nZXRFcGlzb2RlVGFnbGluZShlcGlzb2RlTnVtKSxcbiAgICAgIGNzc0NsYXNzOiBcImFycm93LXRvcCBpbmxpbmVcIlxuICAgIH07XG4gICAgcmV0dXJuIFB1YlN1Yi5wdWJsaXNoKCdsYWJlbC5hdHRhY2gnLCB7XG4gICAgICBlbDogJGVsLFxuICAgICAgY29udGVudDogY29uZmlnRGF0YVxuICAgIH0pO1xuICB9O1xuXG4gIFRvcC5wcm90b3R5cGUuYmFkZ2VNb3VzZW91dCA9IGZ1bmN0aW9uKGUpIHtcbiAgICByZXR1cm4gUHViU3ViLnB1Ymxpc2goJ2xhYmVsLmRlc3Ryb3knLCAkKGUuY3VycmVudFRhcmdldCkpO1xuICB9O1xuXG4gIFRvcC5wcm90b3R5cGUuZ2V0UmFuayA9IGZ1bmN0aW9uKGRhdGEsIGVwaXNvZGVOdW0pIHtcbiAgICBkYXRhLmVwaXNvZGUgPSBlcGlzb2RlTnVtO1xuICAgIHN3aXRjaCAoZXBpc29kZU51bSkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICBkYXRhLnJhbmsgPSBcIlJlY3J1aXRcIjtcbiAgICAgICAgcmV0dXJuIGRhdGEuYmFkZ2UgPSBcInJhbmstYmFkZ2UtcmVjcnVpdFwiO1xuICAgICAgY2FzZSAxOlxuICAgICAgICBkYXRhLnJhbmsgPSBcImNhZGV0XCI7XG4gICAgICAgIHJldHVybiBkYXRhLmJhZGdlID0gXCJyYW5rLWJhZGdlLWNhZGV0XCI7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIGRhdGEucmFuayA9IFwiQ2FkZXQgRmlyc3QgQ2xhc3NcIjtcbiAgICAgICAgcmV0dXJuIGRhdGEuYmFkZ2UgPSBcInJhbmstYmFkZ2UtY2FkZXQtZmlyc3QtY2xhc3NcIjtcbiAgICAgIGNhc2UgMzpcbiAgICAgICAgZGF0YS5yYW5rID0gXCJUZWNobmljYWwgQ2FkZXRcIjtcbiAgICAgICAgcmV0dXJuIGRhdGEuYmFkZ2UgPSBcInJhbmstYmFkZ2UtdGVjaG5pY2FsLWNhZGV0XCI7XG4gICAgICBjYXNlIDQ6XG4gICAgICAgIGRhdGEucmFuayA9IFwiQ3liZXIgQ2FkZXRcIjtcbiAgICAgICAgcmV0dXJuIGRhdGEuYmFkZ2UgPSBcInJhbmstYmFkZ2UtY3liZXItY2FkZXRcIjtcbiAgICAgIGNhc2UgNTpcbiAgICAgICAgZGF0YS5yYW5rID0gXCJNYXN0ZXIgQ2FkZXRcIjtcbiAgICAgICAgcmV0dXJuIGRhdGEuYmFkZ2UgPSBcInJhbmstYmFkZ2UtY3liZXItY2FkZXRcIjtcbiAgICB9XG4gIH07XG5cbiAgVG9wLnByb3RvdHlwZS5nZXRFcGlzb2RlVGFnbGluZSA9IGZ1bmN0aW9uKGVwaXNvZGVOdW0pIHtcbiAgICBzd2l0Y2ggKGVwaXNvZGVOdW0pIHtcbiAgICAgIGNhc2UgXCIxXCI6XG4gICAgICAgIHJldHVybiBcIk9yZ2FuaXppbmcgT3VyIEZvcmNlc1wiO1xuICAgICAgY2FzZSBcIjJcIjpcbiAgICAgICAgcmV0dXJuIFwiUGVyaW1ldGVyIERlZmVuc2VzXCI7XG4gICAgICBjYXNlIFwiM1wiOlxuICAgICAgICByZXR1cm4gXCJBc3NldCBEZWZlbnNlc1wiO1xuICAgICAgY2FzZSBcIjRcIjpcbiAgICAgICAgcmV0dXJuIFwiTWFubmluZyB0aGUgRGVmZW5zZXNcIjtcbiAgICAgIGNhc2UgXCI1XCI6XG4gICAgICAgIHJldHVybiBcIkZpZ2h0aW5nIHRoZSBXYXJcIjtcbiAgICB9XG4gIH07XG5cbiAgVG9wLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGksIGxlbiwgcmVmLCByZXN1bHRzLCB0b2tlbjtcbiAgICByZWYgPSB0aGlzLnRva2VucztcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICB0b2tlbiA9IHJlZltpXTtcbiAgICAgIHJlc3VsdHMucHVzaChQdWJTdWIudW5zdWJzY3JpYmUodG9rZW4pKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgVG9wLnByb3RvdHlwZS5nZXRWYXJzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNhbGxzaWduLCBlcGlzb2RlLCBlcnJvciwgZXJyb3IxO1xuICAgIHRyeSB7XG4gICAgICBjYWxsc2lnbiA9IGFyaXN0b3RsZS5nbG9iYWxzLmdldCgnY2FsbHNpZ24nLCBmYWxzZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IxKSB7XG4gICAgICBlcnJvciA9IGVycm9yMTtcbiAgICAgIGNhbGxzaWduID0gXCJEZWFkZXllXCI7XG4gICAgfVxuICAgIGVwaXNvZGUgPSBOdW1iZXIoYXJpc3RvdGxlLmVwaXNvZGVOdW0pO1xuICAgIHJldHVybiBbY2FsbHNpZ24sIGVwaXNvZGVdO1xuICB9O1xuXG4gIHJldHVybiBUb3A7XG5cbn0pKCk7XG4iLCJ2YXIgVkNSQ29udHJvbHM7XG5cbm1vZHVsZS5leHBvcnRzID0gVkNSQ29udHJvbHMgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIFZDUkNvbnRyb2xzKCRlbCkge1xuICAgIHZhciAkbm9kZTtcbiAgICAkbm9kZSA9ICQoamFkZVRlbXBsYXRlWydjaHJvbWUtdWkvdmNyJ10oe30pKTtcbiAgICAkZWwuYXBwZW5kKCRub2RlKTtcbiAgICB0aGlzLiRwbGF5aGVhZCA9ICQoJy5wbGF5aGVhZCcsICRub2RlKTtcbiAgICB0aGlzLiRhdHRpYyA9ICQoJy5hdHRpYycsICRub2RlKTtcbiAgICB0aGlzLiRwYXVzZUFuZFBsYXlCdG4gPSAkKCcucGF1c2UtYW5kLXBsYXknLCAkbm9kZSk7XG4gICAgdGhpcy4kcGF1c2VBbmRQbGF5QnRuLm9uKCdjbGljaycsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMuY29udHJvbEJ0bkNsaWNrKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICAkKFwiI2FuaS1yZXBsYXlcIiwgJG5vZGUpLm9uKCdjbGljaycsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMucmVwbGF5Q2xpY2soKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgICQoXCIjYW5pLWNvbnRpbnVlXCIsICRub2RlKS5vbignY2xpY2snLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmNvbnRpbnVlQ2xpY2soKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ3Zjci5wbGF5JywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMucGxheSgpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgUHViU3ViLnN1YnNjcmliZSgndmNyLnBhdXNlJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMucGF1c2UoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ3Zjci5yZXBsYXknLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5yZXBsYXkoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9XG5cbiAgVkNSQ29udHJvbHMucHJvdG90eXBlLnBsYXkgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLiRwYXVzZUFuZFBsYXlCdG4ucmVtb3ZlQ2xhc3MoJ3BhdXNlZCcpO1xuICAgIHJldHVybiB0aGlzLmFuaW1hdGlvbi5wbGF5KCk7XG4gIH07XG5cbiAgVkNSQ29udHJvbHMucHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy4kcGF1c2VBbmRQbGF5QnRuLmFkZENsYXNzKCdwYXVzZWQnKTtcbiAgICByZXR1cm4gdGhpcy5hbmltYXRpb24ucGF1c2UoKTtcbiAgfTtcblxuICBWQ1JDb250cm9scy5wcm90b3R5cGUucmVwbGF5ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy4kYXR0aWMuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgIHRoaXMuJHBhdXNlQW5kUGxheUJ0bi5yZW1vdmVDbGFzcygnY29tcGxldGUnKTtcbiAgICB0aGlzLmFuaW1hdGlvbi5nb1RvQW5kU3RvcCgwKTtcbiAgICByZXR1cm4gdGhpcy5hbmltYXRpb24ucGxheSgpO1xuICB9O1xuXG4gIFZDUkNvbnRyb2xzLnByb3RvdHlwZS5hY3RpdmF0ZSA9IGZ1bmN0aW9uKHN2Z0FuaW1hdGlvbiwgY29tcGxldGVDYikge1xuICAgIHRoaXMuY29tcGxldGVDYiA9IGNvbXBsZXRlQ2I7XG4gICAgYm9keW1vdmluLnNldFF1YWxpdHkoJ2xvdycpO1xuICAgIHRoaXMuJGF0dGljLmFkZENsYXNzKCdoaWRkZW4nKTtcbiAgICB0aGlzLiRwYXVzZUFuZFBsYXlCdG4ucmVtb3ZlQ2xhc3MoJ3BhdXNlZCcpO1xuICAgIHRoaXMuJHBhdXNlQW5kUGxheUJ0bi5yZW1vdmVDbGFzcygnY29tcGxldGUnKTtcbiAgICB0aGlzLmFuaW1hdGlvbiA9IHN2Z0FuaW1hdGlvbi5hbmltYXRpb247XG4gICAgdGhpcy5hbmltYXRpb24uYWRkRXZlbnRMaXN0ZW5lcignZW50ZXJGcmFtZScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgcGVyYztcbiAgICAgICAgcGVyYyA9IF90aGlzLmFuaW1hdGlvbi5jdXJyZW50RnJhbWUgLyBfdGhpcy5hbmltYXRpb24udG90YWxGcmFtZXM7XG4gICAgICAgIHJldHVybiBfdGhpcy4kcGxheWhlYWQuY3NzKHtcbiAgICAgICAgICB3aWR0aDogKE1hdGgucm91bmQocGVyYyAqIDEwMCkpICsgXCIlXCJcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICByZXR1cm4gdGhpcy5hbmltYXRpb24uYWRkRXZlbnRMaXN0ZW5lcignY29tcGxldGUnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgX3RoaXMuaXNDb21wbGV0ZSA9IHRydWU7XG4gICAgICAgIF90aGlzLiRhdHRpYy5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgICAgIHJldHVybiBfdGhpcy4kcGF1c2VBbmRQbGF5QnRuLmFkZENsYXNzKCdjb21wbGV0ZScpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH07XG5cbiAgVkNSQ29udHJvbHMucHJvdG90eXBlLmNvbnRyb2xCdG5DbGljayA9IGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAodGhpcy5pc0NvbXBsZXRlKSB7XG4gICAgICByZXR1cm4gdGhpcy5yZXBsYXlDbGljaygpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5pc1BhdXNlZCkge1xuICAgICAgdGhpcy5pc1BhdXNlZCA9IGZhbHNlO1xuICAgICAgcmV0dXJuIFB1YlN1Yi5wdWJsaXNoKCd2Y3IucGxheScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmlzUGF1c2VkID0gdHJ1ZTtcbiAgICAgIHJldHVybiBQdWJTdWIucHVibGlzaCgndmNyLnBhdXNlJyk7XG4gICAgfVxuICB9O1xuXG4gIFZDUkNvbnRyb2xzLnByb3RvdHlwZS5yZXBsYXlDbGljayA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgIHJldHVybiBQdWJTdWIucHVibGlzaCgndmNyLnJlcGxheScpO1xuICB9O1xuXG4gIFZDUkNvbnRyb2xzLnByb3RvdHlwZS5jb250aW51ZUNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuY29tcGxldGVDYigpO1xuICB9O1xuXG4gIHJldHVybiBWQ1JDb250cm9scztcblxufSkoKTtcbiIsInZhciBBdWRpb1RyYWNrO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEF1ZGlvVHJhY2sgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIEF1ZGlvVHJhY2soc3JjKSB7XG4gICAgdGhpcy5zcmMgPSBzcmM7XG4gICAgQXVkaW9UcmFjay5pbml0U291bmRTZXR0aW5ncygpO1xuICAgIHRoaXMuc291bmQgPSBjcmVhdGVqcy5Tb3VuZC5jcmVhdGVJbnN0YW5jZSh0aGlzLnNyYyk7XG4gIH1cblxuICBBdWRpb1RyYWNrLnByb3RvdHlwZS5wbGF5ID0gZnVuY3Rpb24oY29uZmlnLCBvbkNvbXBsZXRlKSB7XG4gICAgaWYgKGNvbmZpZyA9PSBudWxsKSB7XG4gICAgICBjb25maWcgPSB7fTtcbiAgICB9XG4gICAgdGhpcy5wYXJzZUNvbmZpZyhjb25maWcpO1xuICAgIHRoaXMuc291bmQucGxheShjb25maWcpO1xuICAgIHJldHVybiB0aGlzLmFkZE9uQ29tcGxldGUob25Db21wbGV0ZSk7XG4gIH07XG5cbiAgQXVkaW9UcmFjay5wcm90b3R5cGUuYWRkT25Db21wbGV0ZSA9IGZ1bmN0aW9uKG9uQ29tcGxldGUpIHtcbiAgICBpZiAob25Db21wbGV0ZSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5zb3VuZC5hZGRFdmVudExpc3RlbmVyKFwiY29tcGxldGVcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBvbkNvbXBsZXRlKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgQXVkaW9UcmFjay5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnNvdW5kLnN0b3AoKTtcbiAgfTtcblxuICBBdWRpb1RyYWNrLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5pc0RlYWQgPSB0cnVlO1xuICAgIHRoaXMuc291bmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNvbXBsZXRlXCIpO1xuICAgIHJldHVybiB0aGlzLnNvdW5kLmRlc3Ryb3koKTtcbiAgfTtcblxuICBBdWRpb1RyYWNrLmluaXRTb3VuZFNldHRpbmdzID0gZnVuY3Rpb24odm9sdW1lKSB7XG4gICAgaWYgKHZvbHVtZSA9PSBudWxsKSB7XG4gICAgICB2b2x1bWUgPSAxO1xuICAgIH1cbiAgICBpZiAoQXVkaW9UcmFjay5wcGMgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gQXVkaW9UcmFjay5wcGMgPSBuZXcgY3JlYXRlanMuUGxheVByb3BzQ29uZmlnKCkuc2V0KHtcbiAgICAgIGludGVycnVwdDogY3JlYXRlanMuU291bmQuSU5URVJSVVBUX0FOWSxcbiAgICAgIHZvbHVtZTogdm9sdW1lLFxuICAgICAgcGFuOiAxXG4gICAgfSk7XG4gIH07XG5cbiAgQXVkaW9UcmFjay5wcm90b3R5cGUucGFyc2VDb25maWcgPSBmdW5jdGlvbihjb25maWcpIHtcbiAgICBpZiAoY29uZmlnLmxvb3AgIT0gbnVsbCkge1xuICAgICAgaWYgKGNvbmZpZy5sb29wID09PSB0cnVlICYmIHR5cGVvZiBjb25maWcubG9vcCAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICBjb25maWcubG9vcCA9IC0xO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY29uZmlnLnBhbiA9IDE7XG4gIH07XG5cbiAgcmV0dXJuIEF1ZGlvVHJhY2s7XG5cbn0pKCk7XG4iLCJ2YXIgQ2hhcHRlckhlYWRpbmcsIFByZWxvYWRlcixcbiAgYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH07XG5cblByZWxvYWRlciA9IHJlcXVpcmUoJ21pc2MvYXNzZXQtcHJlbG9hZGVyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2hhcHRlckhlYWRpbmcgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIENoYXB0ZXJIZWFkaW5nKGRhdGEsIGxvYWRDb21wbGV0ZSkge1xuICAgIHRoaXMubG9hZENvbXBsZXRlID0gbG9hZENvbXBsZXRlO1xuICAgIHRoaXMuY29tcGxldGUgPSBiaW5kKHRoaXMuY29tcGxldGUsIHRoaXMpO1xuICAgIHRoaXMudXBkYXRlID0gYmluZCh0aGlzLnVwZGF0ZSwgdGhpcyk7XG4gICAgdGhpcy4kZWwgPSAkKCdib2R5Jyk7XG4gICAgdGhpcy4kbm9kZSA9ICQoamFkZVRlbXBsYXRlWydtaXNjL2NoYXB0ZXItaGVhZGluZyddKHtcbiAgICAgIHRpdGxlOiBkYXRhLnRpdGxlLFxuICAgICAgc3VidGl0bGU6IGRhdGEuc3VidGl0bGVcbiAgICB9KSk7XG4gICAgdGhpcy4kZWwuYXBwZW5kKHRoaXMuJG5vZGUpO1xuICAgIHRoaXMuJGZnID0gJChcIi5mZ1wiLCB0aGlzLiRub2RlKTtcbiAgICBzaGFkb3dJY29uc0luc3RhbmNlLnN2Z1JlcGxhY2VXaXRoU3RyaW5nKHB4U3ZnSWNvblN0cmluZywgdGhpcy4kbm9kZSk7XG4gICAgdGhpcy5wcmVsb2FkKGRhdGEpO1xuICB9XG5cbiAgQ2hhcHRlckhlYWRpbmcucHJvdG90eXBlLnByZWxvYWQgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyIHByZWxvYWRlcjtcbiAgICByZXR1cm4gcHJlbG9hZGVyID0gbmV3IFByZWxvYWRlcihkYXRhLCB0aGlzLmNvbXBsZXRlLCB0aGlzLnVwZGF0ZSk7XG4gIH07XG5cbiAgQ2hhcHRlckhlYWRpbmcucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKHBlcmMpIHtcbiAgICByZXR1cm4gdGhpcy4kZmcuY3NzKHtcbiAgICAgIHdpZHRoOiAoTWF0aC5yb3VuZChwZXJjICogMTAwKSkgKyBcIiVcIlxuICAgIH0pO1xuICB9O1xuXG4gIENoYXB0ZXJIZWFkaW5nLnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuJG5vZGUuYWRkQ2xhc3MoJ2NvbXBsZXRlJyk7XG4gICAgdGhpcy5kZXN0cm95KCk7XG4gICAgcmV0dXJuIHRoaXMubG9hZENvbXBsZXRlKCk7XG4gIH07XG5cbiAgQ2hhcHRlckhlYWRpbmcucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kbm9kZS52ZWxvY2l0eSh7XG4gICAgICBvcGFjaXR5OiAwXG4gICAgfSwge1xuICAgICAgZGVsYXk6IDMwMCxcbiAgICAgIGR1cmF0aW9uOiA0MDAsXG4gICAgICBjb21wbGV0ZTogKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMuJG5vZGUucmVtb3ZlKCk7XG4gICAgICAgIH07XG4gICAgICB9KSh0aGlzKVxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBDaGFwdGVySGVhZGluZztcblxufSkoKTtcbiIsInZhciBDaGFwdGVyLCBDaGFwdGVySGVhZGluZywgU2xpZGVzLFxuICBiaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfTtcblxuU2xpZGVzID0gcmVxdWlyZSgnZXBpc29kZS9zbGlkZXMnKTtcblxuQ2hhcHRlckhlYWRpbmcgPSByZXF1aXJlKCdlcGlzb2RlL2NoYXB0ZXItaGVhZGluZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENoYXB0ZXIgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIENoYXB0ZXIoY2hhcHRlckRhdGEsIG1vdmllLCB1eCwgb25DaGFwdGVyQ29tcGV0ZSkge1xuICAgIHRoaXMuY2hhcHRlckRhdGEgPSBjaGFwdGVyRGF0YTtcbiAgICB0aGlzLm1vdmllID0gbW92aWU7XG4gICAgdGhpcy51eCA9IHV4O1xuICAgIHRoaXMub25DaGFwdGVyQ29tcGV0ZSA9IG9uQ2hhcHRlckNvbXBldGU7XG4gICAgdGhpcy5vblNsaWRlc0NvbXBsZXRlID0gYmluZCh0aGlzLm9uU2xpZGVzQ29tcGxldGUsIHRoaXMpO1xuICAgIHRoaXMuc3RhcnRTbGlkZXMgPSBiaW5kKHRoaXMuc3RhcnRTbGlkZXMsIHRoaXMpO1xuICAgIHRoaXMudGl0bGUgPSB0aGlzLmNoYXB0ZXJEYXRhLnRpdGxlO1xuICB9XG5cbiAgQ2hhcHRlci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbihmaXJzdFNsaWRlVGl0bGUpIHtcbiAgICB2YXIgY2hhcHRlckhlYWRpbmc7XG4gICAgdGhpcy5maXJzdFNsaWRlVGl0bGUgPSBmaXJzdFNsaWRlVGl0bGU7XG4gICAgYXJpc3RvdGxlLmRldlRvb2xzLmdvKHRoaXMuY2hhcHRlckRhdGEuZGV2LCB0aGlzLmNoYXB0ZXJEYXRhLnNsaWRlcyk7XG4gICAgcmV0dXJuIGNoYXB0ZXJIZWFkaW5nID0gbmV3IENoYXB0ZXJIZWFkaW5nKHRoaXMuY2hhcHRlckRhdGEsIHRoaXMuc3RhcnRTbGlkZXMpO1xuICB9O1xuXG4gIENoYXB0ZXIucHJvdG90eXBlLnN0YXJ0U2xpZGVzID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zbGlkZXMgPSBuZXcgU2xpZGVzKHRoaXMuY2hhcHRlckRhdGEsIHRoaXMubW92aWUsIHRoaXMudXgsIHRoaXMub25TbGlkZXNDb21wbGV0ZSk7XG4gICAgaWYgKHRoaXMuZmlyc3RTbGlkZVRpdGxlICE9IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLnNsaWRlcy5nb3RvU2xpZGVCeVRpdGxlKHRoaXMuZmlyc3RTbGlkZVRpdGxlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuc2xpZGVzLnN0YXJ0KCk7XG4gICAgfVxuICB9O1xuXG4gIENoYXB0ZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5zbGlkZXMgIT0gbnVsbCkge1xuICAgICAgdGhpcy5zbGlkZXMuZGVzdHJveSgpO1xuICAgICAgcmV0dXJuIHRoaXMuc2xpZGVzID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgQ2hhcHRlci5wcm90b3R5cGUub25TbGlkZXNDb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm9uQ2hhcHRlckNvbXBldGUoKTtcbiAgfTtcblxuICByZXR1cm4gQ2hhcHRlcjtcblxufSkoKTtcbiIsInZhciBBc3NldFByZWxvYWRlciwgQ2hhcHRlciwgRXBpc29kZSwgU2VxdWVuY2UsXG4gIGJpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9O1xuXG5DaGFwdGVyID0gcmVxdWlyZSgnZXBpc29kZS9jaGFwdGVyJyk7XG5cblNlcXVlbmNlID0gcmVxdWlyZSgnbWlzYy9TZXF1ZW5jZScpO1xuXG5Bc3NldFByZWxvYWRlciA9IHJlcXVpcmUoJ21pc2MvYXNzZXQtcHJlbG9hZGVyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRXBpc29kZSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gRXBpc29kZSh0cmFpbmluZ0RhdGExLCBtb3ZpZSwgdXgsIGNocm9tZSkge1xuICAgIHRoaXMudHJhaW5pbmdEYXRhID0gdHJhaW5pbmdEYXRhMTtcbiAgICB0aGlzLm1vdmllID0gbW92aWU7XG4gICAgdGhpcy51eCA9IHV4O1xuICAgIHRoaXMuY2hyb21lID0gY2hyb21lO1xuICAgIHRoaXMucGxheUNoYXB0ZXIgPSBiaW5kKHRoaXMucGxheUNoYXB0ZXIsIHRoaXMpO1xuICAgIHRoaXMuY2hhcHRlckNvbXBsZXRlID0gYmluZCh0aGlzLmNoYXB0ZXJDb21wbGV0ZSwgdGhpcyk7XG4gICAgdGhpcy5uZXh0Q2hhcHRlciA9IGJpbmQodGhpcy5uZXh0Q2hhcHRlciwgdGhpcyk7XG4gICAgdGhpcy5iZWdpbiA9IGJpbmQodGhpcy5iZWdpbiwgdGhpcyk7XG4gICAgYXJpc3RvdGxlLmVwaXNvZGUgPSB0aGlzO1xuICAgIHRoaXMuZXBpc29kZU51bSA9IHRoaXMudHJhaW5pbmdEYXRhLmVwaXNvZGU7XG4gICAgdGhpcy5pc0xhc3RFcGlzb2RlID0gdGhpcy50cmFpbmluZ0RhdGEuaXNMYXN0RXBpc29kZTtcbiAgICBhcmlzdG90bGUuZXBpc29kZURhdGEgPSB0aGlzLnRyYWluaW5nRGF0YTtcbiAgICBhcmlzdG90bGUubGFiZWxzID0gdGhpcy50cmFpbmluZ0RhdGEubGFiZWxzO1xuICAgIHRoaXMubmV4dFJhbmtJZCA9IHRoaXMudHJhaW5pbmdEYXRhLm5leHRSYW5rSWQ7XG4gICAgdGhpcy5jaHJvbWUuYnVpbGQoKTtcbiAgICBuZXcgQXNzZXRQcmVsb2FkZXIodGhpcy50cmFpbmluZ0RhdGEuYWN0aW9uLCB0aGlzLmJlZ2luKTtcbiAgfVxuXG4gIEVwaXNvZGUucHJvdG90eXBlLmJlZ2luID0gZnVuY3Rpb24oKSB7XG4gICAgYXJpc3RvdGxlLmRldlRvb2xzLmdvKHRoaXMudHJhaW5pbmdEYXRhLmRldiwgdGhpcy50cmFpbmluZ0RhdGEuY2hhcHRlcnMpO1xuICAgIHRoaXMudG9rZW4xID0gUHViU3ViLnN1YnNjcmliZSgnZXBpc29kZS5nb3RvJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuZ290b0xvY2F0aW9uQnlUaXRsZShkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5wdWJsaXNoKFwiZXBpc29kZS5sb2FkZWRcIiwgdGhpcy50cmFpbmluZ0RhdGEpO1xuICAgIHRoaXMuY3JlYXRlQ2hhcHRlcnModGhpcy50cmFpbmluZ0RhdGEpO1xuICAgIGlmICh0aGlzLnRyYWluaW5nRGF0YS5za2lwU2xhdGUpIHtcbiAgICAgIHRoaXMucGxheUNoYXB0ZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93SW50cm8odGhpcy50cmFpbmluZ0RhdGEpO1xuICAgIH1cbiAgICBpZiAodGhpcy50cmFpbmluZ0RhdGEuYWN0aW9uICE9IG51bGwpIHtcbiAgICAgIHJldHVybiBhcmlzdG90bGUuY29tbWFuZGVyW1wiZG9cIl0odGhpcy50cmFpbmluZ0RhdGEuYWN0aW9uKTtcbiAgICB9XG4gIH07XG5cbiAgRXBpc29kZS5wcm90b3R5cGUuc2hvd0ludHJvID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIGlmIChhcmlzdG90bGUuZGV2VG9vbHMuc2tpcFNsYXRlKSB7XG4gICAgICB0aGlzLnBsYXlDaGFwdGVyKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudXgucG9wdWxhdGUoe1xuICAgICAgY29tcG9uZW50czogW1xuICAgICAgICB7XG4gICAgICAgICAga2luZDogXCJlcGlzb2RlLWludHJvXCIsXG4gICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICB0aXRsZTogZGF0YS50aXRsZSxcbiAgICAgICAgICAgIHN1YnRpdGxlOiBkYXRhLnN1YnRpdGxlLFxuICAgICAgICAgICAgZXBpc29kZTogZGF0YS5lcGlzb2RlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSk7XG4gICAgaWYgKGFyaXN0b3RsZS5sbXNQcm94eS5zdG9yZSAhPSBudWxsKSB7XG4gICAgICBpZiAoYXJpc3RvdGxlLmxtc1Byb3h5LnN0b3JlLmxvY2F0aW9uICE9IG51bGwpIHtcbiAgICAgICAgaWYgKGFyaXN0b3RsZS5sbXNQcm94eS5zdG9yZS5sb2NhdGlvbi5lcGlzb2RlTnVtID09PSB0aGlzLmVwaXNvZGVOdW0pIHtcbiAgICAgICAgICBpZiAoYXJpc3RvdGxlLmxtc1Byb3h5LnN0b3JlLmxvY2F0aW9uLnNsaWRlICE9IG51bGwpIHtcbiAgICAgICAgICAgIGFyaXN0b3RsZS5sbXNQcm94eS5yZWh5ZHJhdGUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNldFRpbWVvdXQodGhpcy5wbGF5Q2hhcHRlciwgMzAwMCk7XG4gIH07XG5cbiAgRXBpc29kZS5wcm90b3R5cGUuZ290b0xvY2F0aW9uQnlUaXRsZSA9IGZ1bmN0aW9uKHRpdGxlKSB7XG4gICAgdmFyIGJyZWFrTG9vcDEsIGNoYXB0ZXIsIGNoYXB0ZXJUaXRsZSwgaSwgaiwgaywga2V5LCBsYXllciwgbGF5ZXJzLCBsYXllcnNBciwgbGVuLCBsZW4xLCBsZW4yLCByZWYsIHJlZjEsIHJlZjIsIHJlZjMsIHNsaWRlLCBzbGlkZVRpdGxlO1xuICAgIFB1YlN1Yi5wdWJsaXNoKCdtb3ZpZS5sYXllcnMuY2xlYXItYWxsJyk7XG4gICAgbGF5ZXJzID0ge307XG4gICAgcmVmID0gYXJpc3RvdGxlLmVwaXNvZGVEYXRhLmNoYXB0ZXJzO1xuICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgY2hhcHRlciA9IHJlZltpXTtcbiAgICAgIGNoYXB0ZXJUaXRsZSA9IGNoYXB0ZXIudGl0bGU7XG4gICAgICBpZiAoY2hhcHRlci50aXRsZSA9PT0gdGl0bGUpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICByZWYxID0gY2hhcHRlci5zbGlkZXM7XG4gICAgICBmb3IgKGogPSAwLCBsZW4xID0gcmVmMS5sZW5ndGg7IGogPCBsZW4xOyBqKyspIHtcbiAgICAgICAgc2xpZGUgPSByZWYxW2pdO1xuICAgICAgICBpZiAoKChyZWYyID0gc2xpZGUubW92aWUpICE9IG51bGwgPyByZWYyLmxheWVycyA6IHZvaWQgMCkgIT0gbnVsbCkge1xuICAgICAgICAgIHJlZjMgPSBzbGlkZS5tb3ZpZS5sYXllcnM7XG4gICAgICAgICAgZm9yIChrID0gMCwgbGVuMiA9IHJlZjMubGVuZ3RoOyBrIDwgbGVuMjsgaysrKSB7XG4gICAgICAgICAgICBsYXllciA9IHJlZjNba107XG4gICAgICAgICAgICBsYXllcnNbbGF5ZXIuZGVwdGhdID0gbGF5ZXI7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzbGlkZS50aXRsZSA9PT0gdGl0bGUpIHtcbiAgICAgICAgICBzbGlkZVRpdGxlID0gc2xpZGUudGl0bGU7XG4gICAgICAgICAgYnJlYWtMb29wMSA9IHRydWU7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChicmVha0xvb3AxKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXllcnNBciA9IFtdO1xuICAgIGZvciAoa2V5IGluIGxheWVycykge1xuICAgICAgbGF5ZXIgPSBsYXllcnNba2V5XTtcbiAgICAgIGxheWVyc0FyLnB1c2gobGF5ZXIpO1xuICAgIH1cbiAgICB0aGlzLmNoYXB0ZXJzLmFjdGl2YXRlSXRlbUJ5UGFyYW0oJ3RpdGxlJywgY2hhcHRlclRpdGxlKTtcbiAgICB0aGlzLnBsYXlDaGFwdGVyKHNsaWRlLnRpdGxlKTtcbiAgICByZXR1cm4gUHViU3ViLnB1Ymxpc2goJ21vdmllLnJlaHlkcmF0ZS1sYXllcnMnLCBsYXllcnNBcik7XG4gIH07XG5cbiAgRXBpc29kZS5wcm90b3R5cGUuY3JlYXRlQ2hhcHRlcnMgPSBmdW5jdGlvbih0cmFpbmluZ0RhdGEpIHtcbiAgICB2YXIgY2hhcHRlckRhdGEsIGNoYXB0ZXJzLCBpLCBsZW4sIHJlZjtcbiAgICBjaGFwdGVycyA9IFtdO1xuICAgIHJlZiA9IHRyYWluaW5nRGF0YS5jaGFwdGVycztcbiAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNoYXB0ZXJEYXRhID0gcmVmW2ldO1xuICAgICAgY2hhcHRlcnMucHVzaChuZXcgQ2hhcHRlcihjaGFwdGVyRGF0YSwgdGhpcy5tb3ZpZSwgdGhpcy51eCwgdGhpcy5jaGFwdGVyQ29tcGxldGUpKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY2hhcHRlcnMgPSBuZXcgU2VxdWVuY2UoY2hhcHRlcnMpO1xuICB9O1xuXG4gIEVwaXNvZGUucHJvdG90eXBlLm5leHRDaGFwdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuY2hhcHRlcnMuaXNBdExhc3RJdGVtKCkpIHtcbiAgICAgIHJldHVybiB0aGlzLmVwaXNvZGVDb21wbGV0ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNoYXB0ZXJzLm5leHQoKTtcbiAgICAgIHJldHVybiB0aGlzLnBsYXlDaGFwdGVyKCk7XG4gICAgfVxuICB9O1xuXG4gIEVwaXNvZGUucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucGxheUNoYXB0ZXIoKTtcbiAgfTtcblxuICBFcGlzb2RlLnByb3RvdHlwZS5jaGFwdGVyQ29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgICBQdWJTdWIucHVibGlzaCgnc3RhdGUuc2F2ZScpO1xuICAgIHRoaXMuY2hhcHRlcnMuZ2V0Q3VycmVudEl0ZW0oKS5kZXN0cm95KCk7XG4gICAgcmV0dXJuIHRoaXMubmV4dENoYXB0ZXIoKTtcbiAgfTtcblxuICBFcGlzb2RlLnByb3RvdHlwZS5wbGF5Q2hhcHRlciA9IGZ1bmN0aW9uKGZpcnN0U2xpZGUpIHtcbiAgICBpZiAoZmlyc3RTbGlkZSA9PSBudWxsKSB7XG4gICAgICBmaXJzdFNsaWRlID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5jaGFwdGVycy5nZXRDdXJyZW50SXRlbSgpLnN0YXJ0KGZpcnN0U2xpZGUpO1xuICAgIHJldHVybiBQdWJTdWIucHVibGlzaCgnY2hhcHRlci5zdGFydGVkJywgdGhpcy5jaGFwdGVycy5nZXRDdXJyZW50SXRlbSgpLmNoYXB0ZXJEYXRhLnRpdGxlKTtcbiAgfTtcblxuICBFcGlzb2RlLnByb3RvdHlwZS5lcGlzb2RlQ29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbmV3RXBpc29kZU51bTtcbiAgICBpZiAodGhpcy5pc0xhc3RFcGlzb2RlKSB7XG4gICAgICByZXR1cm4gYXJpc3RvdGxlLmxtc1Byb3h5LmNvbXBsZXRlQ291cnNlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld0VwaXNvZGVOdW0gPSBTdHJpbmcoTnVtYmVyKGFyaXN0b3RsZS5lcGlzb2RlTnVtKSArIDEpO1xuICAgICAgYXJpc3RvdGxlLmxtc1Byb3h5LmNvbXBsZXRlRXBpc29kZShuZXdFcGlzb2RlTnVtKTtcbiAgICAgIHJldHVybiBQdWJTdWIucHVibGlzaCgnZXBpc29kZS5sb2FkJywgbmV3RXBpc29kZU51bSk7XG4gICAgfVxuICB9O1xuXG4gIEVwaXNvZGUucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgY2hhcHRlciwgaSwgbGVuLCByZWYsIHJlc3VsdHM7XG4gICAgUHViU3ViLnVuc3Vic2NyaWJlKHRoaXMudG9rZW4xKTtcbiAgICByZWYgPSB0aGlzLmNoYXB0ZXJzLml0ZW1zO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNoYXB0ZXIgPSByZWZbaV07XG4gICAgICByZXN1bHRzLnB1c2goY2hhcHRlci5kZXN0cm95KCkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICByZXR1cm4gRXBpc29kZTtcblxufSkoKTtcbiIsInZhciBBdWRpb1RyYWNrLCBTVkdBbmltYXRpb24sIFNsaWRlLFxuICBiaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfTtcblxuQXVkaW9UcmFjayA9IHJlcXVpcmUoXCJlcGlzb2RlL2F1ZGlvLXRyYWNrXCIpO1xuXG5TVkdBbmltYXRpb24gPSByZXF1aXJlKFwibW92aWUvc3ZnLWFuaW1hdGlvblwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTbGlkZSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gU2xpZGUobW92aWUsIHNsaWRlVVgsIHNsaWRlRGF0YSwgb25TbGlkZUNvbXBsZXRlKSB7XG4gICAgdGhpcy5tb3ZpZSA9IG1vdmllO1xuICAgIHRoaXMuc2xpZGVVWCA9IHNsaWRlVVg7XG4gICAgdGhpcy5zbGlkZURhdGEgPSBzbGlkZURhdGE7XG4gICAgdGhpcy5vblNsaWRlQ29tcGxldGUgPSBvblNsaWRlQ29tcGxldGU7XG4gICAgdGhpcy5wbGF5ID0gYmluZCh0aGlzLnBsYXksIHRoaXMpO1xuICAgIHRoaXMudGl0bGUgPSB0aGlzLnNsaWRlRGF0YS50aXRsZTtcbiAgfVxuXG4gIFNsaWRlLnByb3RvdHlwZS5wbGF5ID0gZnVuY3Rpb24ob25Db21wbGV0ZSkge1xuICAgIGlmICh0aGlzLnNsaWRlRGF0YS50aXRsZSAhPSBudWxsKSB7XG4gICAgICBQdWJTdWIucHVibGlzaCgnc2xpZGUuYWN0aXZhdGVkJywgdGhpcy5zbGlkZURhdGEudGl0bGUpO1xuICAgIH1cbiAgICB0aGlzLm1vdmllLnBvcHVsYXRlKHRoaXMuc2xpZGVEYXRhLm1vdmllKTtcbiAgICB0aGlzLnNsaWRlVVgucG9wdWxhdGUodGhpcy5zbGlkZURhdGEudXgpO1xuICAgIHRoaXMuc2V0RHVyYXRpb24oKTtcbiAgICB0aGlzLnJ1bkN0YW5sZWUodGhpcy5zbGlkZURhdGEuY3RhbmxlZSk7XG4gICAgdGhpcy5ydW5EaWFsb2d1ZSh0aGlzLnNsaWRlRGF0YS5kaWFsb2d1ZSk7XG4gICAgdGhpcy5ydW5BY3Rpb25zKHRoaXMuc2xpZGVEYXRhLmFjdGlvbik7XG4gICAgcmV0dXJuIHRoaXMucnVuU291bmRGeCh0aGlzLnNsaWRlRGF0YS5zZngpO1xuICB9O1xuXG4gIFNsaWRlLnByb3RvdHlwZS5ydW5Tb3VuZEZ4ID0gZnVuY3Rpb24oc2Z4KSB7XG4gICAgaWYgKHNmeCA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiBQdWJTdWIucHVibGlzaCgnc2Z4LmFkZCcsIHNmeCk7XG4gIH07XG5cbiAgU2xpZGUucHJvdG90eXBlLnJ1bkFjdGlvbnMgPSBmdW5jdGlvbihhY3Rpb24pIHtcbiAgICBpZiAoYWN0aW9uID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIGFyaXN0b3RsZS5jb21tYW5kZXJbXCJkb1wiXShhY3Rpb24pO1xuICB9O1xuXG4gIFNsaWRlLnByb3RvdHlwZS5zZXREdXJhdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjdGFubGVlU3Vic2NyaXB0aW9uLCBsaXN0ZW5TdWJzY3JpcHRpb24sIHV4U3Vic2NyaXB0aW9uO1xuICAgIGlmICh0aGlzLnNsaWRlRGF0YS5kdXJhdGlvbiA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHN3aXRjaCAodGhpcy5zbGlkZURhdGEuZHVyYXRpb24ua2luZCkge1xuICAgICAgY2FzZSBcInRpbWVcIjpcbiAgICAgICAgcmV0dXJuIGFyaXN0b3RsZS50aW1lb3V0KHRoaXMub25TbGlkZUNvbXBsZXRlLCB0aGlzLnNsaWRlRGF0YS5kdXJhdGlvbi5zZWNvbmRzICogMTAwMCk7XG4gICAgICBjYXNlIFwidXNlclwiOlxuICAgICAgICByZXR1cm4gY29uc29sZS5sb2coXCJ3YWl0aW5nIG9uIHRoZSB1c2VyXCIpO1xuICAgICAgY2FzZSBcInV4XCI6XG4gICAgICAgIHJldHVybiB1eFN1YnNjcmlwdGlvbiA9IFB1YlN1Yi5zdWJzY3JpYmUoJ3V4LmNvbXBsZXRlJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgUHViU3ViLnVuc3Vic2NyaWJlKHV4U3Vic2NyaXB0aW9uKTtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5vblNsaWRlQ29tcGxldGUoKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KSh0aGlzKSk7XG4gICAgICBjYXNlIFwiZGlhbG9ndWVcIjpcbiAgICAgIGNhc2UgXCJjdGFubGVlXCI6XG4gICAgICAgIHJldHVybiBjdGFubGVlU3Vic2NyaXB0aW9uID0gUHViU3ViLnN1YnNjcmliZSgnZGlhbG9ndWUuY29tcGxldGUnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBQdWJTdWIudW5zdWJzY3JpYmUoY3RhbmxlZVN1YnNjcmlwdGlvbik7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMub25TbGlkZUNvbXBsZXRlKCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSkodGhpcykpO1xuICAgICAgY2FzZSBcImxpc3RlblwiOlxuICAgICAgICByZXR1cm4gbGlzdGVuU3Vic2NyaXB0aW9uID0gUHViU3ViLnN1YnNjcmliZSh0aGlzLnNsaWRlRGF0YS5kdXJhdGlvbi5ldmVudCwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgUHViU3ViLnVuc3Vic2NyaWJlKGxpc3RlblN1YnNjcmlwdGlvbik7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMub25TbGlkZUNvbXBsZXRlKCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSkodGhpcykpO1xuICAgIH1cbiAgfTtcblxuICBTbGlkZS5wcm90b3R5cGUucnVuQ3RhbmxlZSA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBpZiAoZGF0YSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gYXJpc3RvdGxlLmN0YW5sZWUuYWN0aXZhdGUoZGF0YSk7XG4gICAgfVxuICB9O1xuXG4gIFNsaWRlLnByb3RvdHlwZS5ydW5EaWFsb2d1ZSA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBpZiAoZGF0YSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gYXJpc3RvdGxlLmRpYWxvZ3VlLmFjdGl2YXRlKGRhdGEpO1xuICAgIH1cbiAgfTtcblxuICBTbGlkZS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBQdWJTdWIudW5zdWJzY3JpYmUodGhpcy50b2tlbjEpO1xuICB9O1xuXG4gIHJldHVybiBTbGlkZTtcblxufSkoKTtcbiIsInZhciBTZXF1ZW5jZSwgU2xpZGUsIFNsaWRlcyxcbiAgYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH07XG5cblNsaWRlID0gcmVxdWlyZSgnZXBpc29kZS9zbGlkZScpO1xuXG5TZXF1ZW5jZSA9IHJlcXVpcmUoJ21pc2Mvc2VxdWVuY2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTbGlkZXMgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIFNsaWRlcyh0cmFpbmluZ0RhdGEsIG1vdmllLCB1eCwgb25TaG93Q29tcGxldGUpIHtcbiAgICB2YXIgdG9rZW4xLCB0b2tlbjIsIHRva2VuMywgdG9rZW40LCB0b2tlbjc7XG4gICAgdGhpcy5vblNob3dDb21wbGV0ZSA9IG9uU2hvd0NvbXBsZXRlO1xuICAgIHRoaXMuc2xpZGVDb21wbGV0ZSA9IGJpbmQodGhpcy5zbGlkZUNvbXBsZXRlLCB0aGlzKTtcbiAgICB0aGlzLm5leHRTbGlkZSA9IGJpbmQodGhpcy5uZXh0U2xpZGUsIHRoaXMpO1xuICAgIGFyaXN0b3RsZS5zbGlkZXMgPSB0aGlzO1xuICAgIHRoaXMuY3JlYXRlU2xpZGVzKHRyYWluaW5nRGF0YSwgbW92aWUsIHV4KTtcbiAgICB0b2tlbjEgPSBQdWJTdWIuc3Vic2NyaWJlKCdzbGlkZXMubmV4dCcsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMubmV4dFNsaWRlKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0b2tlbjIgPSBQdWJTdWIuc3Vic2NyaWJlKCdzbGlkZXMubmV4dC1zbGlkZScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMubmV4dFNsaWRlKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0b2tlbjMgPSBQdWJTdWIuc3Vic2NyaWJlKCdzbGlkZXMucmVwbGF5JywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5yZXBsYXkoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRva2VuNCA9IFB1YlN1Yi5zdWJzY3JpYmUoJ3NsaWRlcy5wcmV2LXNsaWRlJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5wcmV2U2xpZGUoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRva2VuNyA9IFB1YlN1Yi5zdWJzY3JpYmUoJ21vdmllLnJlcG9ydCcsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gY29uc29sZS5sb2coX3RoaXMuZ2V0SW5kZXhBbmRUb3RhbCgpKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRoaXMuc3Vic2NyaXB0aW9uVG9rZW5zID0gW3Rva2VuMSwgdG9rZW4yLCB0b2tlbjMsIHRva2VuNCwgdG9rZW43XTtcbiAgfVxuXG4gIFNsaWRlcy5wcm90b3R5cGUuY3JlYXRlU2xpZGVzID0gZnVuY3Rpb24odHJhaW5pbmdEYXRhLCBtb3ZpZSwgdXgpIHtcbiAgICB2YXIgY291bnQsIGksIGxlbiwgcmVmLCBzbGlkZURhdGEsIHNsaWRlcztcbiAgICBzbGlkZXMgPSBbXTtcbiAgICBjb3VudCA9IDA7XG4gICAgcmVmID0gdHJhaW5pbmdEYXRhLnNsaWRlcztcbiAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHNsaWRlRGF0YSA9IHJlZltpXTtcbiAgICAgIHNsaWRlRGF0YS5pbmRleCA9IGNvdW50Kys7XG4gICAgICBzbGlkZXMucHVzaChuZXcgU2xpZGUobW92aWUsIHV4LCBzbGlkZURhdGEsIHRoaXMuc2xpZGVDb21wbGV0ZSkpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zbGlkZXMgPSBuZXcgU2VxdWVuY2Uoc2xpZGVzKTtcbiAgfTtcblxuICBTbGlkZXMucHJvdG90eXBlLm5leHRTbGlkZSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLnNsaWRlcy5pc0F0TGFzdEl0ZW0oKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2xpZGVTaG93Q29tcGxldGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zbGlkZXMubmV4dCgpO1xuICAgICAgcmV0dXJuIHRoaXMucGxheVNsaWRlKCk7XG4gICAgfVxuICB9O1xuXG4gIFNsaWRlcy5wcm90b3R5cGUucmVwbGF5ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucGxheVNsaWRlKCk7XG4gIH07XG5cbiAgU2xpZGVzLnByb3RvdHlwZS5wcmV2U2xpZGUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnNsaWRlcy5wcmV2KCk7XG4gICAgcmV0dXJuIHRoaXMucGxheVNsaWRlKCk7XG4gIH07XG5cbiAgU2xpZGVzLnByb3RvdHlwZS5nb3RvU2xpZGUgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgaWYgKHR5cGVvZiBkYXRhID09PSBOdW1iZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLmdvdG9TbGlkZUJ5SW5kZXgoZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmdvdG9TbGlkZUJ5SWQoZGF0YSk7XG4gICAgfVxuICB9O1xuXG4gIFNsaWRlcy5wcm90b3R5cGUuZ290b1NsaWRlQnlJbmRleCA9IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgdGhpcy5zbGlkZXMuY2hhbmdlSXRlbUJ5SW5kZXgoaW5kZXgpO1xuICAgIHJldHVybiB0aGlzLnBsYXlTbGlkZSgpO1xuICB9O1xuXG4gIFNsaWRlcy5wcm90b3R5cGUuZ290b1NsaWRlQnlUaXRsZSA9IGZ1bmN0aW9uKHRpdGxlKSB7XG4gICAgdGhpcy5zbGlkZXMuYWN0aXZhdGVJdGVtQnlQYXJhbShcInRpdGxlXCIsIHRpdGxlKTtcbiAgICByZXR1cm4gdGhpcy5wbGF5U2xpZGUoKTtcbiAgfTtcblxuICBTbGlkZXMucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaSwgaiwgbGVuLCBsZW4xLCByZWYsIHJlZjEsIHJlc3VsdHMsIHNsaWRlLCB0b2tlbjtcbiAgICByZWYgPSB0aGlzLnNsaWRlcy5pdGVtcztcbiAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHNsaWRlID0gcmVmW2ldO1xuICAgICAgc2xpZGUuZGVzdHJveSgpO1xuICAgIH1cbiAgICB0aGlzLnNsaWRlcyA9IG51bGw7XG4gICAgcmVmMSA9IHRoaXMuc3Vic2NyaXB0aW9uVG9rZW5zO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGogPSAwLCBsZW4xID0gcmVmMS5sZW5ndGg7IGogPCBsZW4xOyBqKyspIHtcbiAgICAgIHRva2VuID0gcmVmMVtqXTtcbiAgICAgIHJlc3VsdHMucHVzaChQdWJTdWIudW5zdWJzY3JpYmUodG9rZW4pKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgU2xpZGVzLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBsYXlTbGlkZSgpO1xuICB9O1xuXG4gIFNsaWRlcy5wcm90b3R5cGUuc2xpZGVDb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm5leHRTbGlkZSgpO1xuICB9O1xuXG4gIFNsaWRlcy5wcm90b3R5cGUucGxheVNsaWRlID0gZnVuY3Rpb24oKSB7XG4gICAgUHViU3ViLnB1Ymxpc2goJ3NsaWRlcy5jaGFuZ2luZycpO1xuICAgIHJldHVybiB0aGlzLnNsaWRlcy5nZXRDdXJyZW50SXRlbSgpLnBsYXkodGhpcy5zbGlkZUNvbXBsZXRlKTtcbiAgfTtcblxuICBTbGlkZXMucHJvdG90eXBlLnNsaWRlU2hvd0NvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMub25TaG93Q29tcGxldGUoKTtcbiAgfTtcblxuICBTbGlkZXMucHJvdG90eXBlLmdldEN1cnJlbnRJbmRleCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnNsaWRlcy5nZXRDdXJyZW50SXRlbSgpLnNsaWRlRGF0YS5pbmRleDtcbiAgfTtcblxuICBTbGlkZXMucHJvdG90eXBlLmdldEluZGV4QW5kVG90YWwgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJzbGlkZSBcIiArICh0aGlzLnNsaWRlcy5nZXRDdXJyZW50SXRlbSgpLnNsaWRlRGF0YS5pbmRleCkgKyBcIiBvZiBcIiArIHRoaXMuc2xpZGVzLnRvdGFsSXRlbXM7XG4gIH07XG5cbiAgcmV0dXJuIFNsaWRlcztcblxufSkoKTtcbiIsInZhciBTZXF1ZW5jZTtcblxubW9kdWxlLmV4cG9ydHMgPSBTZXF1ZW5jZSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gU2VxdWVuY2UoaXRlbXMpIHtcbiAgICB0aGlzLml0ZW1zID0gaXRlbXM7XG4gICAgdGhpcy5yZXNldCgpO1xuICAgIHRoaXMudG90YWxJdGVtcyA9IHRoaXMuaXRlbXMubGVuZ3RoO1xuICB9XG5cbiAgU2VxdWVuY2UucHJvdG90eXBlLm5leHQgPSBmdW5jdGlvbihsb29wT25PdmVyU2hvb3QpIHtcbiAgICBpZiAobG9vcE9uT3ZlclNob290ID09IG51bGwpIHtcbiAgICAgIGxvb3BPbk92ZXJTaG9vdCA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5pbmNyYW1lbnRJdGVtSW5kZXgoMSwgbG9vcE9uT3ZlclNob290KTtcbiAgfTtcblxuICBTZXF1ZW5jZS5wcm90b3R5cGUucHJldiA9IGZ1bmN0aW9uKGxvb3BPbk92ZXJTaG9vdCkge1xuICAgIGlmIChsb29wT25PdmVyU2hvb3QgPT0gbnVsbCkge1xuICAgICAgbG9vcE9uT3ZlclNob290ID0gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmluY3JhbWVudEl0ZW1JbmRleCgtMSwgbG9vcE9uT3ZlclNob290KTtcbiAgfTtcblxuICBTZXF1ZW5jZS5wcm90b3R5cGUuaXNBdExhc3RJdGVtID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudEl0ZW1JbmRleCA9PT0gdGhpcy50b3RhbEl0ZW1zIC0gMSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgU2VxdWVuY2UucHJvdG90eXBlLmdldEN1cnJlbnRJdGVtID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbXNbdGhpcy5jdXJyZW50SXRlbUluZGV4XTtcbiAgfTtcblxuICBTZXF1ZW5jZS5wcm90b3R5cGUuY3VycmVudEl0ZW0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5nZXRDdXJyZW50SXRlbSgpO1xuICB9O1xuXG4gIFNlcXVlbmNlLnByb3RvdHlwZS5pbmNyYW1lbnRJdGVtSW5kZXggPSBmdW5jdGlvbihpbmNyYW1lbnQsIGxvb3BPbk92ZXJTaG9vdCkge1xuICAgIHZhciBuZXdJbmRleDtcbiAgICBpZiAobG9vcE9uT3ZlclNob290ID09IG51bGwpIHtcbiAgICAgIGxvb3BPbk92ZXJTaG9vdCA9IGZhbHNlO1xuICAgIH1cbiAgICBuZXdJbmRleCA9IHRoaXMuY3VycmVudEl0ZW1JbmRleCArIGluY3JhbWVudDtcbiAgICBpZiAobmV3SW5kZXggPiB0aGlzLnRvdGFsSXRlbXMgLSAxKSB7XG4gICAgICBuZXdJbmRleCA9IGxvb3BPbk92ZXJTaG9vdCA/IDAgOiB0aGlzLnRvdGFsSXRlbXMgLSAxO1xuICAgIH0gZWxzZSBpZiAobmV3SW5kZXggPCAwKSB7XG4gICAgICBuZXdJbmRleCA9IGxvb3BPbk92ZXJTaG9vdCA/IHRoaXMudG90YWxJdGVtcyAtIDEgOiAwO1xuICAgIH1cbiAgICBpZiAodGhpcy5jdXJyZW50SXRlbUluZGV4ICE9PSBuZXdJbmRleCkge1xuICAgICAgdGhpcy5jdXJyZW50SXRlbUluZGV4ID0gbmV3SW5kZXg7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICBTZXF1ZW5jZS5wcm90b3R5cGUuY2hhbmdlSXRlbUJ5SW5kZXggPSBmdW5jdGlvbihuZXdJbmRleCkge1xuICAgIHZhciBpbmNyYW1lbnREaWZmZXJlbmNlLCBwbHVzT3JNaW51cztcbiAgICBwbHVzT3JNaW51cyA9IG5ld0luZGV4ID4gdGhpcy5jdXJyZW50SXRlbUluZGV4ID8gMSA6IC0xO1xuICAgIGluY3JhbWVudERpZmZlcmVuY2UgPSBNYXRoLmFicyh0aGlzLmN1cnJlbnRJdGVtSW5kZXggLSBuZXdJbmRleCkgKiBwbHVzT3JNaW51cztcbiAgICByZXR1cm4gdGhpcy5pbmNyYW1lbnRJdGVtSW5kZXgoaW5jcmFtZW50RGlmZmVyZW5jZSk7XG4gIH07XG5cbiAgU2VxdWVuY2UucHJvdG90eXBlLmFjdGl2YXRlSXRlbUJ5UGFyYW0gPSBmdW5jdGlvbihwYXJhbSwgdmFsKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudEl0ZW1JbmRleCA9IHRoaXMuZ2V0SW5kZXhCeVBhcmFtKHBhcmFtLCB2YWwpO1xuICB9O1xuXG4gIFNlcXVlbmNlLnByb3RvdHlwZS5nZXRJbmRleEJ5UGFyYW0gPSBmdW5jdGlvbihwYXJhbSwgdmFsKSB7XG4gICAgdmFyIGksIGl0ZW0sIGosIGxlbiwgcmVmO1xuICAgIHJlZiA9IHRoaXMuaXRlbXM7XG4gICAgZm9yIChpID0gaiA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGogPCBsZW47IGkgPSArK2opIHtcbiAgICAgIGl0ZW0gPSByZWZbaV07XG4gICAgICBpZiAoaXRlbVtwYXJhbV0gPT09IHZhbCkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgU2VxdWVuY2UucHJvdG90eXBlLmdldEl0ZW1CeVBhcmFtID0gZnVuY3Rpb24ocGFyYW0sIHZhbCkge1xuICAgIHJldHVybiB0aGlzLml0ZW1zW3RoaXMuZ2V0SW5kZXhCeVBhcmFtKHBhcmFtLCB2YWwpXTtcbiAgfTtcblxuICBTZXF1ZW5jZS5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50SXRlbUluZGV4ID0gMDtcbiAgfTtcblxuICByZXR1cm4gU2VxdWVuY2U7XG5cbn0pKCk7XG4iLCJ2YXIgQXNzZXRQcmVwbG9hZGVyO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEFzc2V0UHJlcGxvYWRlciA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gQXNzZXRQcmVwbG9hZGVyKGRhdGEsIGNhbGxiYWNrLCBwcm9ncmVzc0NhbGxiYWNrKSB7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIHRoaXMucHJvZ3Jlc3NDYWxsYmFjayA9IHByb2dyZXNzQ2FsbGJhY2s7XG4gICAgdGhpcy5wcmVsb2FkQXNzZXRzKGRhdGEpO1xuICB9XG5cbiAgQXNzZXRQcmVwbG9hZGVyLnByb3RvdHlwZS5wcmVsb2FkQXNzZXRzID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciBhc3NldHMsIHByZWxvYWRRdWV1ZSwgcmVnZXg7XG4gICAgYXNzZXRzID0gW107XG4gICAgcmVnZXggPSAvLitcXC4oc3ZnKS87XG4gICAgdGhpcy5sb29rRm9yRmlsZXMoZGF0YSwgYXNzZXRzLCByZWdleCk7XG4gICAgaWYgKGFzc2V0cy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMuY2FsbGJhY2soKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY3JlYXRlanMuU291bmQuYWx0ZXJuYXRlRXh0ZW5zaW9ucyA9IFtcIm1wM1wiLCBcIm00YVwiXTtcbiAgICBwcmVsb2FkUXVldWUgPSBuZXcgY3JlYXRlanMuTG9hZFF1ZXVlKCk7XG4gICAgcHJlbG9hZFF1ZXVlLmluc3RhbGxQbHVnaW4oY3JlYXRlanMuU291bmQpO1xuICAgIGlmICh0aGlzLnByb2dyZXNzQ2FsbGJhY2sgIT0gbnVsbCkge1xuICAgICAgcHJlbG9hZFF1ZXVlLm9uKFwicHJvZ3Jlc3NcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgaWYgKGUubG9hZGVkID4gMSkge1xuICAgICAgICAgICAgZS5sb2FkZWQgPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gX3RoaXMucHJvZ3Jlc3NDYWxsYmFjayhlLmxvYWRlZCk7XG4gICAgICAgIH07XG4gICAgICB9KSh0aGlzKSk7XG4gICAgfVxuICAgIHByZWxvYWRRdWV1ZS5vbihcImNvbXBsZXRlXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMuY2FsbGJhY2soZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICByZXR1cm4gcHJlbG9hZFF1ZXVlLmxvYWRNYW5pZmVzdChhc3NldHMpO1xuICB9O1xuXG4gIEFzc2V0UHJlcGxvYWRlci5wcm90b3R5cGUubG9va0ZvckZpbGVzID0gZnVuY3Rpb24oaXRlbSwgc3RvcmFnZSwgcmVnZXgpIHtcbiAgICB2YXIgY2hpbGQsIGksIGtleSwgbGVuLCByZXN1bHRzLCByZXN1bHRzMSwgdHlwZTtcbiAgICB0eXBlID0gdHlwZW9mIGl0ZW07XG4gICAgaWYgKHR5cGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGlmICgvLm1wM3wubTRhfC5qc29ufC5zdmd8LmpwZ3wuanBlZ3wucG5nLy50ZXN0KGl0ZW0pKSB7XG4gICAgICAgIHJldHVybiBzdG9yYWdlLnB1c2goe1xuICAgICAgICAgIHNyYzogXCJcIiArIChhcmlzdG90bGUuZ2V0QXNzZXRQYXRoKGl0ZW0pKSxcbiAgICAgICAgICBpZDogaXRlbVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW0pKSB7XG4gICAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yIChpID0gMCwgbGVuID0gaXRlbS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgIGNoaWxkID0gaXRlbVtpXTtcbiAgICAgICAgICByZXN1bHRzLnB1c2godGhpcy5sb29rRm9yRmlsZXMoY2hpbGQsIHN0b3JhZ2UsIHJlZ2V4KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRzMSA9IFtdO1xuICAgICAgICBmb3IgKGtleSBpbiBpdGVtKSB7XG4gICAgICAgICAgY2hpbGQgPSBpdGVtW2tleV07XG4gICAgICAgICAgcmVzdWx0czEucHVzaCh0aGlzLmxvb2tGb3JGaWxlcyhjaGlsZCwgc3RvcmFnZSwgcmVnZXgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0czE7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBBc3NldFByZXBsb2FkZXI7XG5cbn0pKCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgZWRnZSwgbXNpZSwgcnYsIHRyaWRlbnQsIHVhLCB2O1xuICB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xuICBtc2llID0gdWEuaW5kZXhPZignTVNJRSAnKTtcbiAgaWYgKG1zaWUgPiAwKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gICAgdiA9IHBhcnNlSW50KHVhLnN1YnN0cmluZyhtc2llICsgNSwgdWEuaW5kZXhPZignLicsIG1zaWUpKSwgMTApO1xuICB9XG4gIHRyaWRlbnQgPSB1YS5pbmRleE9mKCdUcmlkZW50LycpO1xuICBpZiAodHJpZGVudCA+IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgICBydiA9IHVhLmluZGV4T2YoJ3J2OicpO1xuICAgIHYgPSBwYXJzZUludCh1YS5zdWJzdHJpbmcocnYgKyAzLCB1YS5pbmRleE9mKCcuJywgcnYpKSwgMTApO1xuICB9XG4gIGVkZ2UgPSB1YS5pbmRleE9mKCdFZGdlLycpO1xuICBpZiAoZWRnZSA+IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgICB2ID0gcGFyc2VJbnQodWEuc3Vic3RyaW5nKGVkZ2UgKyA1LCB1YS5pbmRleE9mKCcuJywgZWRnZSkpLCAxMCk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcbiIsInZhciBDb21tYW5kZXI7XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tbWFuZGVyID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBDb21tYW5kZXIoKSB7XG4gICAgd2luZG93LmFyaXN0b3RsZS5jb21tYW5kZXIgPSB0aGlzO1xuICB9XG5cbiAgQ29tbWFuZGVyLnByb3RvdHlwZVtcImRvXCJdID0gZnVuY3Rpb24oYWN0aW9uLCBwdWJsaXNoU3luY2hyb25vdXNseSkge1xuICAgIHZhciBpLCBpdGVtLCBsZW4sIHJlc3VsdHM7XG4gICAgaWYgKHB1Ymxpc2hTeW5jaHJvbm91c2x5ID09IG51bGwpIHtcbiAgICAgIHB1Ymxpc2hTeW5jaHJvbm91c2x5ID0gZmFsc2U7XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KGFjdGlvbikpIHtcbiAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgIGZvciAoaSA9IDAsIGxlbiA9IGFjdGlvbi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpdGVtID0gYWN0aW9uW2ldO1xuICAgICAgICByZXN1bHRzLnB1c2godGhpcy5wdWJsaXNoKGl0ZW0sIHB1Ymxpc2hTeW5jaHJvbm91c2x5KSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMucHVibGlzaChhY3Rpb24sIHB1Ymxpc2hTeW5jaHJvbm91c2x5KTtcbiAgICB9XG4gIH07XG5cbiAgQ29tbWFuZGVyLnByb3RvdHlwZS5wdWJsaXNoID0gZnVuY3Rpb24oYWN0aW9uLCBwdWJsaXNoU3luY2hyb25vdXNseSkge1xuICAgIGlmIChwdWJsaXNoU3luY2hyb25vdXNseSA9PSBudWxsKSB7XG4gICAgICBwdWJsaXNoU3luY2hyb25vdXNseSA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoKGFjdGlvbiAhPSBudWxsID8gYWN0aW9uLmRlbGF5IDogdm9pZCAwKSAhPSBudWxsKSB7XG4gICAgICB0aGlzLnB1Ymxpc2hEZWxheWVkQWN0aW9uKGFjdGlvbik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChwdWJsaXNoU3luY2hyb25vdXNseSkge1xuICAgICAgcmV0dXJuIFB1YlN1Yi5wdWJsaXNoU3luYyhhY3Rpb24uY21kLCBhY3Rpb24uZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBQdWJTdWIucHVibGlzaChhY3Rpb24uY21kLCBhY3Rpb24uZGF0YSk7XG4gICAgfVxuICB9O1xuXG4gIENvbW1hbmRlci5wcm90b3R5cGUucHVibGlzaERlbGF5ZWRBY3Rpb24gPSBmdW5jdGlvbihhY3Rpb24pIHtcbiAgICByZXR1cm4gYXJpc3RvdGxlLnRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gUHViU3ViLnB1Ymxpc2goYWN0aW9uLmNtZCwgYWN0aW9uLmRhdGEpO1xuICAgIH0sIGFjdGlvbi5kZWxheSk7XG4gIH07XG5cbiAgcmV0dXJuIENvbW1hbmRlcjtcblxufSkoKTtcbiIsInZhciBBdWRpb1RyYWNrLCBEZXZUb29scyxcbiAgYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH07XG5cbkF1ZGlvVHJhY2sgPSByZXF1aXJlKCdlcGlzb2RlL2F1ZGlvLXRyYWNrJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGV2VG9vbHMgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIERldlRvb2xzKGlzRGV2TW9kZSkge1xuICAgIHRoaXMuaXNEZXZNb2RlID0gaXNEZXZNb2RlO1xuICAgIHRoaXMudXBkYXRlID0gYmluZCh0aGlzLnVwZGF0ZSwgdGhpcyk7XG4gICAgaWYgKCF0aGlzLmlzRGV2TW9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmluaXRQZXJmb3JtYW5jZVN0YXRzKCk7XG4gIH1cblxuICBEZXZUb29scy5wcm90b3R5cGUuZ28gPSBmdW5jdGlvbihkZXZDb25maWcsIGl0ZW1zKSB7XG4gICAgaWYgKCF0aGlzLmlzRGV2TW9kZSB8fCAoZGV2Q29uZmlnID09IG51bGwpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChkZXZDb25maWcuc2tpcFNsYXRlICE9IG51bGwpIHtcbiAgICAgIHRoaXMuc2tpcFNsYXRlID0gZGV2Q29uZmlnLnNraXBTbGF0ZTtcbiAgICB9XG4gICAgdGhpcy5za2lwKGRldkNvbmZpZywgaXRlbXMpO1xuICAgIHRoaXMucHJldmVudEFuaW1hdGlvbkFzTmVlZGVkKGRldkNvbmZpZywgaXRlbXMpO1xuICAgIHRoaXMuYWRkSW5kZXhlc1RvSXRlbXMoZGV2Q29uZmlnLCBpdGVtcyk7XG4gICAgaWYgKGRldkNvbmZpZy52b2x1bWUgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIEF1ZGlvVHJhY2suaW5pdFNvdW5kU2V0dGluZ3MoZGV2Q29uZmlnLnZvbHVtZSk7XG4gICAgfVxuICB9O1xuXG4gIERldlRvb2xzLnByb3RvdHlwZS5za2lwID0gZnVuY3Rpb24oZGV2Q29uZmlnLCBpdGVtcykge1xuICAgIHZhciBqLCBsZW4sIHJlZiwgcmVzdWx0cywgc2xpZGVJbmRleCwgc3RhcnRJbmRleDtcbiAgICBpZiAoIXRoaXMuaXNEZXZNb2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChkZXZDb25maWcuc3RhcnRJbmRleCAhPSBudWxsKSB7XG4gICAgICBpZiAoZGV2Q29uZmlnLnN0YXJ0SW5kZXggPCAwKSB7XG4gICAgICAgIGRldkNvbmZpZy5zdGFydEluZGV4ID0gaXRlbXMubGVuZ3RoICsgZGV2Q29uZmlnLnN0YXJ0SW5kZXg7XG4gICAgICB9XG4gICAgICBzdGFydEluZGV4ID0gZGV2Q29uZmlnLnN0YXJ0SW5kZXg7XG4gICAgICBpdGVtcy5zcGxpY2UoMCwgZGV2Q29uZmlnLnN0YXJ0SW5kZXgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGFydEluZGV4ID0gMDtcbiAgICB9XG4gICAgaWYgKGRldkNvbmZpZy5za2lwICE9IG51bGwpIHtcbiAgICAgIHJlZiA9IGRldkNvbmZpZy5za2lwLnNvcnQoKS5yZXZlcnNlKCk7XG4gICAgICByZXN1bHRzID0gW107XG4gICAgICBmb3IgKGogPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgICAgc2xpZGVJbmRleCA9IHJlZltqXTtcbiAgICAgICAgaWYgKHNsaWRlSW5kZXggPiBzdGFydEluZGV4KSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKGl0ZW1zLnNwbGljZShzbGlkZUluZGV4IC0gc3RhcnRJbmRleCwgMSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdHMucHVzaCh2b2lkIDApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG4gIH07XG5cbiAgRGV2VG9vbHMucHJvdG90eXBlLnByZXZlbnRBbmltYXRpb25Bc05lZWRlZCA9IGZ1bmN0aW9uKGRldkNvbmZpZywgaXRlbXMpIHtcbiAgICB2YXIgaSwgaiwgbGVuLCByZWYsIHJlc3VsdHMsIHNsaWRlO1xuICAgIGlmIChkZXZDb25maWcuZG9udEFuaW1hdGUgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZWYgPSBkZXZDb25maWcuZG9udEFuaW1hdGU7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoaSA9IGogPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBqIDwgbGVuOyBpID0gKytqKSB7XG4gICAgICBzbGlkZSA9IHJlZltpXTtcbiAgICAgIHJlc3VsdHMucHVzaCh0aGlzLmFkZFNraXBUb0VuZHMoaXRlbXNbaV0pKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgRGV2VG9vbHMucHJvdG90eXBlLmFkZFNraXBUb0VuZHMgPSBmdW5jdGlvbihvYmopIHtcbiAgICB2YXIgaXRlbSwga2V5LCByZXN1bHRzO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGtleSBpbiBvYmopIHtcbiAgICAgIGl0ZW0gPSBvYmpba2V5XTtcbiAgICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICB0aGlzLmFkZFNraXBUb0VuZHMoaXRlbSwgb2JqKTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBpZiAoaXRlbS5tYXRjaCgvLmpzb24vZykpIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2gob2JqLmp1bXBUb0VuZCA9IHRydWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlc3VsdHMucHVzaCh2b2lkIDApO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRzLnB1c2godm9pZCAwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgRGV2VG9vbHMucHJvdG90eXBlLmFkZEluZGV4ZXNUb0l0ZW1zID0gZnVuY3Rpb24oZGV2Q29uZmlnLCBpdGVtcykge1xuICAgIHZhciBjb3VudCwgaXRlbSwgaiwgbGVuLCBudW1TbGlkZXNSZW1vdmVkLCByZXN1bHRzO1xuICAgIG51bVNsaWRlc1JlbW92ZWQgPSBkZXZDb25maWcuc3RhcnRJbmRleCAhPSBudWxsID8gZGV2Q29uZmlnLnN0YXJ0SW5kZXggOiAwO1xuICAgIGNvdW50ID0gMDtcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChqID0gMCwgbGVuID0gaXRlbXMubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgIGl0ZW0gPSBpdGVtc1tqXTtcbiAgICAgIHJlc3VsdHMucHVzaChpdGVtLmluZGV4ID0gbnVtU2xpZGVzUmVtb3ZlZCArIGNvdW50KyspO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBEZXZUb29scy5wcm90b3R5cGUuaW5pdFBlcmZvcm1hbmNlU3RhdHMgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnN0YXRzID0gbmV3IFN0YXRzKCk7XG4gICAgdGhpcy5zdGF0cy5zZXRNb2RlKDApO1xuICAgIHRoaXMuc3RhdHMuZG9tRWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XG4gICAgdGhpcy5zdGF0cy5kb21FbGVtZW50LnN0eWxlLmxlZnQgPSAnMHB4JztcbiAgICB0aGlzLnN0YXRzLmRvbUVsZW1lbnQuc3R5bGUudG9wID0gJzBweCc7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnN0YXRzLmRvbUVsZW1lbnQpO1xuICAgIHJldHVybiByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGUpO1xuICB9O1xuXG4gIERldlRvb2xzLnByb3RvdHlwZS51cGRhdGUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnN0YXRzLmVuZCgpO1xuICAgIHRoaXMuc3RhdHMuYmVnaW4oKTtcbiAgICByZXR1cm4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlKTtcbiAgfTtcblxuICByZXR1cm4gRGV2VG9vbHM7XG5cbn0pKCk7XG4iLCJ2YXIgRGljdGlvbmFyeTtcblxubW9kdWxlLmV4cG9ydHMgPSBEaWN0aW9uYXJ5ID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBEaWN0aW9uYXJ5KCkge1xuICAgIGFyaXN0b3RsZS5kaWN0aW9uYXJ5ID0gdGhpcztcbiAgICB0aGlzLnRlcm1zID0ge1xuICAgICAgXCJjYWRldFwiOiAnQ2FkZXQnLFxuICAgICAgXCJjYWRldC1maXJzdC1jbGFzc1wiOiAnQ2FkZXQgRmlyc3QgQ2xhc3MnLFxuICAgICAgXCJ0ZWNobmljYWwtY2FkZXRcIjogXCJUZWNobmljYWwgQ2FkZXRcIixcbiAgICAgIFwiY3liZXItY2FkZXRcIjogXCJDeWJlciBDYWRldFwiXG4gICAgfTtcbiAgfVxuXG4gIERpY3Rpb25hcnkucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKHRlcm0pIHtcbiAgICBpZiAodGhpcy50ZXJtc1t0ZXJtXSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy50ZXJtc1t0ZXJtXTtcbiAgICB9XG4gICAgcmV0dXJuIGFyaXN0b3RsZVtcInRocm93XCJdKFwiVHJpZWQgdG8gdXNlIGFuIHVua25vd24gdGVybTogYFwiICsgdGVybSArIFwiYFwiKTtcbiAgfTtcblxuICByZXR1cm4gRGljdGlvbmFyeTtcblxufSkoKTtcbiIsInZhciBFcGlzb2RlTG9hZGVyO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVwaXNvZGVMb2FkZXIgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIEVwaXNvZGVMb2FkZXIoY2FsbGJhY2spIHtcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgdGhpcy5sb2FkQ29uZmlnRGF0YSgpO1xuICB9XG5cbiAgRXBpc29kZUxvYWRlci5wcm90b3R5cGUubG9hZENvbmZpZ0RhdGEgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5sb2FkSnNvbihcImxvY2FsL2NvbmZpZy5qc29uXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGpzb24pIHtcbiAgICAgICAgdmFyIGtleSwgcmVmLCB2YWw7XG4gICAgICAgIHJlZiA9IEpTT04ucGFyc2UoanNvbik7XG4gICAgICAgIGZvciAoa2V5IGluIHJlZikge1xuICAgICAgICAgIHZhbCA9IHJlZltrZXldO1xuICAgICAgICAgIGFyaXN0b3RsZS5nbG9iYWxzLnNldChrZXksIHZhbCwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcy5sb2FkRXBpc29kZSgpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH07XG5cbiAgRXBpc29kZUxvYWRlci5wcm90b3R5cGUubG9hZEVwaXNvZGUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5sb2FkSnNvbihhcmlzdG90bGUuZ2V0QXNzZXRQYXRoKFwibWFwLmpzb25cIiksIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGpzb24pIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmNhbGxiYWNrKEpTT04ucGFyc2UoanNvbikpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH07XG5cbiAgRXBpc29kZUxvYWRlci5wcm90b3R5cGUubG9hZEpzb24gPSBmdW5jdGlvbihwYXRoLCBvbkNvbXBsZXRlKSB7XG4gICAgdmFyIHhvYmo7XG4gICAgeG9iaiA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHhvYmoub3ZlcnJpZGVNaW1lVHlwZSgnYXBwbGljYXRpb24vanNvbicpO1xuICAgIHhvYmoub3BlbignR0VUJywgcGF0aCwgdHJ1ZSk7XG4gICAgeG9iai5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHhvYmoucmVhZHlTdGF0ZSA9PT0gNCAmJiB4b2JqLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgcmV0dXJuIG9uQ29tcGxldGUoeG9iai5yZXNwb25zZVRleHQpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pKHRoaXMpO1xuICAgIHJldHVybiB4b2JqLnNlbmQobnVsbCk7XG4gIH07XG5cbiAgcmV0dXJuIEVwaXNvZGVMb2FkZXI7XG5cbn0pKCk7XG4iLCJ2YXIgR2xvYmFsVmFycztcblxubW9kdWxlLmV4cG9ydHMgPSBHbG9iYWxWYXJzID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBHbG9iYWxWYXJzKCkge1xuICAgIHRoaXMudmFycyA9IHt9O1xuICAgIGFyaXN0b3RsZS5nbG9iYWxzID0gdGhpcztcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCdzZXR2YXJzJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oYSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuc2V0TWFueShkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9XG5cbiAgR2xvYmFsVmFycy5wcm90b3R5cGUuc2V0TWFueSA9IGZ1bmN0aW9uKHZhcnMpIHtcbiAgICB2YXIga2V5LCB2YWw7XG4gICAgZm9yIChrZXkgaW4gdmFycykge1xuICAgICAgdmFsID0gdmFyc1trZXldO1xuICAgICAgdGhpcy52YXJzW2tleV0gPSB2YWw7XG4gICAgfVxuICAgIHJldHVybiBQdWJTdWIucHVibGlzaCgnc3RhdGUuc2F2ZScpO1xuICB9O1xuXG4gIEdsb2JhbFZhcnMucHJvdG90eXBlLnNldCA9IGZ1bmN0aW9uKGtleSwgdmFsLCBzYXZlU3RhdGUpIHtcbiAgICBpZiAoc2F2ZVN0YXRlID09IG51bGwpIHtcbiAgICAgIHNhdmVTdGF0ZSA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMudmFyc1trZXldID0gdmFsO1xuICAgIGlmIChzYXZlU3RhdGUpIHtcbiAgICAgIHJldHVybiBQdWJTdWIucHVibGlzaCgnc3RhdGUuc2F2ZScpO1xuICAgIH1cbiAgfTtcblxuICBHbG9iYWxWYXJzLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihzdHIsIHRocm93RXJyb3JzKSB7XG4gICAgaWYgKHRocm93RXJyb3JzID09IG51bGwpIHtcbiAgICAgIHRocm93RXJyb3JzID0gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMudmFyc1tzdHJdICE9IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLnZhcnNbc3RyXTtcbiAgICB9XG4gICAgaWYgKHRocm93RXJyb3JzKSB7XG4gICAgICBhcmlzdG90bGVbXCJ0aHJvd1wiXShcIlRyaWVkIHRvIGFjY2VzcyBnbG9iYWwgdmFyaWFibGUgYFwiICsgc3RyICsgXCJgLCBidXQgaXQgZG9lc24ndCBleGlzdHNcIiwgdHJ1ZSk7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIHJldHVybiBHbG9iYWxWYXJzO1xuXG59KSgpO1xuIiwidmFyIExNU1Byb3h5O1xuXG5tb2R1bGUuZXhwb3J0cyA9IExNU1Byb3h5ID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBMTVNQcm94eShpc0xvY2FsKSB7XG4gICAgaWYgKGlzTG9jYWwpIHtcbiAgICAgIHRoaXMuaW5pdFNjb3JtU3R1YnMoKTtcbiAgICB9XG4gICAgYXJpc3RvdGxlLmxtc1Byb3h5ID0gdGhpcztcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCdzdGF0ZS5zYXZlJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuc2F2ZVN0YXRlKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCdzdGF0ZS5sb2FkJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMubG9hZFN0YXRlKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCdzdGF0ZS5yZWh5ZHJhdGUnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5yZWh5ZHJhdGUoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ3NsaWRlLmFjdGl2YXRlZCcsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnNhdmVTdGF0ZShkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9XG5cbiAgTE1TUHJveHkucHJvdG90eXBlLmJlZ2luID0gZnVuY3Rpb24oY2IpIHtcbiAgICB2YXIgY29tcGFueU5hbWUsIHN0YXRlRGF0YTtcbiAgICBpZiAoZWxiU2Nvcm0uaW5pdENvdXJzZSgpKSB7XG4gICAgICB0aGlzLmxvYWRTdGF0ZSgpO1xuICAgICAgdGhpcy51c2VyID0gZWxiU2Nvcm0uR2V0VXNlck5hbWUoKTtcbiAgICAgIHRoaXMudXNlcklkID0gZWxiU2Nvcm0uR2V0VXNlcklEKCk7XG4gICAgICBzdGF0ZURhdGEgPSBlbGJTY29ybS5HZXRSZXN1bWVEYXRhKCk7XG4gICAgICBjb21wYW55TmFtZSA9IGVsYlNjb3JtLkdldENvbXBhbk5hbWUoKTtcbiAgICAgIHRoaXMuY3JlYXRlRm9ybWF0dGVkTmFtZSgpO1xuICAgICAgaWYgKHN0YXRlRGF0YSAhPSBudWxsKSB7XG4gICAgICAgIGFyaXN0b3RsZS5nbG9iYWxzLnZhcnMgPSBzdGF0ZURhdGEuZ2xvYmFsVmFycztcbiAgICAgIH1cbiAgICAgIGFyaXN0b3RsZS5nbG9iYWxzLnZhcnMuY29tcGFueU5hbWUgPSBjb21wYW55TmFtZTtcbiAgICAgIHJldHVybiBjYigpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coXCJjb3VsZG4ndCBzdGFydCB0aGUgY291cnNlXCIpO1xuICAgIH1cbiAgfTtcblxuICBMTVNQcm94eS5wcm90b3R5cGUubG9hZFN0YXRlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RvcmUgPSBlbGJTY29ybS5HZXRSZXN1bWVEYXRhKCk7XG4gIH07XG5cbiAgTE1TUHJveHkucHJvdG90eXBlLnJlaHlkcmF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLnN0b3JlID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIGFyaXN0b3RsZS5lcGlzb2RlLmdvdG9Mb2NhdGlvbkJ5VGl0bGUodGhpcy5zdG9yZS5sb2NhdGlvbi5zbGlkZSk7XG4gIH07XG5cbiAgTE1TUHJveHkucHJvdG90eXBlLnNhdmVTdGF0ZSA9IGZ1bmN0aW9uKGN1cnJlbnRTbGlkZSkge1xuICAgIHRoaXMuc3RvcmUgPSB7fTtcbiAgICB0aGlzLnN0b3JlLmdsb2JhbFZhcnMgPSBhcmlzdG90bGUuZ2xvYmFscy52YXJzO1xuICAgIHRoaXMuc3RvcmUubGF5ZXJTdGF0ZSA9IGFyaXN0b3RsZS5tb3ZpZS5kZWh5ZHJhdGVMYXllclN0YXRlKCk7XG4gICAgdGhpcy5zdG9yZS5sb2NhdGlvbiA9IHtcbiAgICAgIGVwaXNvZGVOdW06IGFyaXN0b3RsZS5lcGlzb2RlLmVwaXNvZGVOdW0sXG4gICAgICBzbGlkZTogY3VycmVudFNsaWRlXG4gICAgfTtcbiAgICByZXR1cm4gZWxiU2Nvcm0uU2V0UmVzdW1lRGF0YSh0aGlzLnN0b3JlKTtcbiAgfTtcblxuICBMTVNQcm94eS5wcm90b3R5cGUuY29tcGxldGVFcGlzb2RlID0gZnVuY3Rpb24obmV3RXBpc29kZU51bSkge1xuICAgIHRoaXMuc3RvcmUgPSB0aGlzLnN0b3JlICE9IG51bGwgPyB0aGlzLnN0b3JlIDoge307XG4gICAgdGhpcy5zdG9yZS5sb2NhdGlvbiA9IHtcbiAgICAgIGVwaXNvZGVOdW06IG5ld0VwaXNvZGVOdW1cbiAgICB9O1xuICAgIHJldHVybiBlbGJTY29ybS5TZXRSZXN1bWVEYXRhKHRoaXMuc3RvcmUpO1xuICB9O1xuXG4gIExNU1Byb3h5LnByb3RvdHlwZS5jcmVhdGVGb3JtYXR0ZWROYW1lID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHg7XG4gICAgeCA9IHRoaXMudXNlci5zcGxpdCgnLCcpO1xuICAgIHJldHVybiB0aGlzLm5hbWUgPSB4WzFdICsgXCIgXCIgKyB4WzBdO1xuICB9O1xuXG4gIExNU1Byb3h5LnByb3RvdHlwZS5jb21wbGV0ZUNvdXJzZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBlbGJTY29ybS5TZXRDb21wbGV0ZSgpO1xuICB9O1xuXG4gIExNU1Byb3h5LnByb3RvdHlwZS5pbml0U2Nvcm1TdHVicyA9IGZ1bmN0aW9uKCkge1xuICAgIHdpbmRvdy5lbGJTY29ybSA9IHt9O1xuICAgIGVsYlNjb3JtLmluaXRDb3Vyc2UgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgZWxiU2Nvcm0uR2V0VXNlck5hbWUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBcIlJpY2tzLCBKdXN0aW5cIjtcbiAgICB9O1xuICAgIGVsYlNjb3JtLkdldFVzZXJJRCA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIFwiYWJjZGVmZzEyMzQ1NjdcIjtcbiAgICB9O1xuICAgIGVsYlNjb3JtLkdldENvbXBhbk5hbWUgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBcIkFyaXpvbmEgUHVibGljIFdvcmtzXCI7XG4gICAgfTtcbiAgICBlbGJTY29ybS5TZXRSZXN1bWVEYXRhID0gZnVuY3Rpb24oZGF0YSkge1xuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY3VycmVudFN0YXRlXCIsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICB9O1xuICAgIGVsYlNjb3JtLkdldFJlc3VtZURhdGEgPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY3VycmVudFN0YXRlXCIpKTtcbiAgICB9O1xuICAgIHJldHVybiBlbGJTY29ybS5TZXRDb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKFwiY291cnNlIGlzIGNvbXBsZXRlXCIpO1xuICAgIH07XG4gIH07XG5cbiAgcmV0dXJuIExNU1Byb3h5O1xuXG59KSgpO1xuIiwidmFyIExvZ2dlcixcbiAgYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH07XG5cbm1vZHVsZS5leHBvcnRzID0gTG9nZ2VyID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBMb2dnZXIoJGVsLCBpc0Rldk1vZGUpIHtcbiAgICB0aGlzW1widGhyb3dcIl0gPSBiaW5kKHRoaXNbXCJ0aHJvd1wiXSwgdGhpcyk7XG4gICAgdGhpcy5sb2cgPSBiaW5kKHRoaXMubG9nLCB0aGlzKTtcbiAgICB2YXIgJG5vZGU7XG4gICAgJG5vZGUgPSAkKGphZGVUZW1wbGF0ZVsnbWlzYy9sb2dnZXInXSh7fSkpO1xuICAgICRlbC5hcHBlbmQoJG5vZGUpO1xuICAgIHRoaXMuJGxvZ05vdGlmeWVyID0gJCgnLm1lc3NhZ2UnLCAkbm9kZSk7XG4gICAgdGhpcy4kZXJyb3JOb3RpZnllciA9ICQoJy5lcnJvcicsICRub2RlKTtcbiAgICB0aGlzLiRsb2dOb3RpZnllci5vbignY2xpY2snLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmhpZGVMb2dOb3RpZmllcigpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgdGhpcy4kZXJyb3JOb3RpZnllci5vbignY2xpY2snLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmhpZGVFcnJvck5vdGlmaWVyKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBhcmlzdG90bGUubG9nID0gdGhpcy5sb2c7XG4gICAgYXJpc3RvdGxlW1widGhyb3dcIl0gPSB0aGlzW1widGhyb3dcIl07XG4gICAgdGhpcy5oaWRlTG9nTm90aWZpZXIoKTtcbiAgICB0aGlzLmhpZGVFcnJvck5vdGlmaWVyKCk7XG4gICAgaWYgKCFpc0Rldk1vZGUpIHtcbiAgICAgICRub2RlLmNzcyh7XG4gICAgICAgIGRpc3BsYXk6IFwibm9uZVwiXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBMb2dnZXIucHJvdG90eXBlLmxvZyA9IGZ1bmN0aW9uKG1zZykge1xuICAgIHRoaXMuc2hvd0xvZ05vdGlmaWVyKCk7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKFwiJWNcIiArIG1zZywgXCJjb2xvcjojMGIxNTI0OyBiYWNrZ3JvdW5kOiNiMGQ5ZTZcIik7XG4gIH07XG5cbiAgTG9nZ2VyLnByb3RvdHlwZVtcInRocm93XCJdID0gZnVuY3Rpb24obXNnLCBzaG93VHJhY2UpIHtcbiAgICBpZiAoc2hvd1RyYWNlID09IG51bGwpIHtcbiAgICAgIHNob3dUcmFjZSA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLnNob3dFcnJvck5vdGlmaWVyKCk7XG4gICAgaWYgKHNob3dUcmFjZSkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJcIiArIG1zZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcIiVjXCIgKyBtc2csIFwiY29sb3I6IzNkMDAwMDsgYmFja2dyb3VuZDojZTZiMGMwXCIpO1xuICAgIH1cbiAgfTtcblxuICBMb2dnZXIucHJvdG90eXBlLmhpZGVMb2dOb3RpZmllciA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRsb2dOb3RpZnllci5jc3Moe1xuICAgICAgZGlzcGxheTogXCJub25lXCJcbiAgICB9KTtcbiAgfTtcblxuICBMb2dnZXIucHJvdG90eXBlLmhpZGVFcnJvck5vdGlmaWVyID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJGVycm9yTm90aWZ5ZXIuY3NzKHtcbiAgICAgIGRpc3BsYXk6IFwibm9uZVwiXG4gICAgfSk7XG4gIH07XG5cbiAgTG9nZ2VyLnByb3RvdHlwZS5zaG93TG9nTm90aWZpZXIgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kbG9nTm90aWZ5ZXIuY3NzKHtcbiAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIlxuICAgIH0pO1xuICB9O1xuXG4gIExvZ2dlci5wcm90b3R5cGUuc2hvd0Vycm9yTm90aWZpZXIgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kZXJyb3JOb3RpZnllci5jc3Moe1xuICAgICAgZGlzcGxheTogXCJibG9ja1wiXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIExvZ2dlcjtcblxufSkoKTtcbiIsInZhciBQYXJzZXIsXG4gIGJpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcnNlciA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gUGFyc2VyKCkge1xuICAgIHRoaXMuZ2V0QXNzZXRQYXRoID0gYmluZCh0aGlzLmdldEFzc2V0UGF0aCwgdGhpcyk7XG4gICAgdGhpcy5wYXJzZU9iamVjdCA9IGJpbmQodGhpcy5wYXJzZU9iamVjdCwgdGhpcyk7XG4gICAgdGhpcy5pc1ZhcmlhYmxlID0gYmluZCh0aGlzLmlzVmFyaWFibGUsIHRoaXMpO1xuICAgIHRoaXMucGFyc2VTdHJpbmcgPSBiaW5kKHRoaXMucGFyc2VTdHJpbmcsIHRoaXMpO1xuICAgIHRoaXMucGFyc2VBbnkgPSBiaW5kKHRoaXMucGFyc2VBbnksIHRoaXMpO1xuICAgIHdpbmRvdy5wYXJzZSA9IHRoaXMucGFyc2VBbnk7XG4gICAgd2luZG93LnBPYmogPSB0aGlzLnBhcnNlT2JqZWN0O1xuICAgIGFyaXN0b3RsZS5nZXRBc3NldFBhdGggPSB0aGlzLmdldEFzc2V0UGF0aDtcbiAgfVxuXG4gIFBhcnNlci5wcm90b3R5cGUucGFyc2VBbnkgPSBmdW5jdGlvbihpdGVtKSB7XG4gICAgaWYgKHR5cGVvZiBpdGVtID09PSBcInN0cmluZ1wiKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYXJzZVN0cmluZyhpdGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMucGFyc2VPYmplY3QoaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIFBhcnNlci5wcm90b3R5cGUucGFyc2VTdHJpbmcgPSBmdW5jdGlvbihzdHIpIHtcbiAgICBpZiAodGhpcy5pc1ZhcmlhYmxlKHN0cikpIHtcbiAgICAgIHJldHVybiBhcmlzdG90bGUuZ2xvYmFscy5nZXQoc3RyLnN1YnN0cigxKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICB9O1xuXG4gIFBhcnNlci5wcm90b3R5cGUuaXNWYXJpYWJsZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBzdHIuY2hhckF0KDApID09PSBcIiRcIjtcbiAgfTtcblxuICBQYXJzZXIucHJvdG90eXBlLnBhcnNlT2JqZWN0ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIGl0ZW0sIGtleSwgcmVzdWx0cztcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChrZXkgaW4gb2JqKSB7XG4gICAgICBpdGVtID0gb2JqW2tleV07XG4gICAgICBpZiAodHlwZW9mIGl0ZW0gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgb2JqW2tleV0gPSB0aGlzLnBhcnNlU3RyaW5nKGl0ZW0pO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBpdGVtID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLnBhcnNlT2JqZWN0KGl0ZW0pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdHMucHVzaCh2b2lkIDApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBQYXJzZXIucHJvdG90eXBlLmdldEFzc2V0UGF0aCA9IGZ1bmN0aW9uKGFzc2V0KSB7XG4gICAgdmFyIGNvbnRlbnREaXIsIHBhdGhJZDtcbiAgICBpZiAoYXNzZXQgPT09IFwibWFwLmpzb25cIikge1xuICAgICAgY29udGVudERpciA9IFwiXCI7XG4gICAgfSBlbHNlIGlmICgvLm1wM3wubTRhLy50ZXN0KGFzc2V0KSkge1xuICAgICAgY29udGVudERpciA9IFwic291bmRzL1wiO1xuICAgIH0gZWxzZSBpZiAoLy5qc29uLy50ZXN0KGFzc2V0KSkge1xuICAgICAgY29udGVudERpciA9IFwiYW5pbWF0aW9ucy9cIjtcbiAgICB9IGVsc2UgaWYgKC8uc3ZnfC5qcGd8LmpwZWd8LnBuZy8udGVzdChhc3NldCkpIHtcbiAgICAgIGNvbnRlbnREaXIgPSBcImFzc2V0cy9cIjtcbiAgICB9XG4gICAgaWYgKGFzc2V0LmNoYXJBdCgwKSA9PT0gXCJ+XCIpIHtcbiAgICAgIHBhdGhJZCA9IGFzc2V0LnN1YnN0cigxLCAxKTtcbiAgICAgIGFzc2V0ID0gYXNzZXQuc3Vic3RyKDMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXRoSWQgPSBhcmlzdG90bGUuZXBpc29kZU51bTtcbiAgICB9XG4gICAgaWYgKHBhdGhJZCA9PT0gXCJnXCIpIHtcbiAgICAgIHJldHVybiBhcmlzdG90bGUuZXBpc29kZXNEaXIgKyBcIi9nbG9iYWwvXCIgKyBjb250ZW50RGlyICsgYXNzZXQ7XG4gICAgfSBlbHNlIGlmIChwYXRoSWQgPT09IFwibFwiKSB7XG4gICAgICByZXR1cm4gYXJpc3RvdGxlLmxvY2FsRGlyICsgXCIvXCIgKyBhc3NldDtcbiAgICB9IGVsc2UgaWYgKE51bWJlcihwYXRoSWQpICE9PSBOYU4pIHtcbiAgICAgIHJldHVybiBhcmlzdG90bGUuZXBpc29kZXNEaXIgKyBcIi9lcGlzb2RlXCIgKyBwYXRoSWQgKyBcIi9cIiArIGNvbnRlbnREaXIgKyBhc3NldDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGFyaXN0b3RsZVtcInRocm93XCJdKFwiY291bGRuJ3QgdW5kZXJzdGFuZCB0aGUgcGF0aDogXCIgKyBhc3NldCwgdHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBQYXJzZXI7XG5cbn0pKCk7XG4iLCJ2YXIgUGF1c2FibGVEZWxheXMsIFRpbWVyLFxuICBiaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBQYXVzYWJsZURlbGF5cyA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gUGF1c2FibGVEZWxheXMoKSB7XG4gICAgdGhpcy5jcmVhdGVUaW1lb3V0ID0gYmluZCh0aGlzLmNyZWF0ZVRpbWVvdXQsIHRoaXMpO1xuICAgIHRoaXMuY291bnQgPSAwO1xuICAgIHRoaXMudGltZXJzID0ge307XG4gICAgYXJpc3RvdGxlLnRpbWVvdXQgPSB0aGlzLmNyZWF0ZVRpbWVvdXQ7XG4gICAgUHViU3ViLnN1YnNjcmliZSgndGltZXIuZGVzdHJveScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIGRlbGV0ZSBfdGhpcy50aW1lcnNbZGF0YV07XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCd0aW1lcnMucGF1c2UnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5wYXVzZVRpbWVycygpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgUHViU3ViLnN1YnNjcmliZSgndGltZXJzLnJlc3VtZScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnJlc3VtZVRpbWVycygpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH1cblxuICBQYXVzYWJsZURlbGF5cy5wcm90b3R5cGUucGF1c2VUaW1lcnMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIga2V5LCByZWYsIHJlc3VsdHMsIHRpbWVyO1xuICAgIHJlZiA9IHRoaXMudGltZXJzO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGtleSBpbiByZWYpIHtcbiAgICAgIHRpbWVyID0gcmVmW2tleV07XG4gICAgICByZXN1bHRzLnB1c2godGltZXIucGF1c2UoKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIFBhdXNhYmxlRGVsYXlzLnByb3RvdHlwZS5yZXN1bWVUaW1lcnMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIga2V5LCByZWYsIHJlc3VsdHMsIHRpbWVyO1xuICAgIHJlZiA9IHRoaXMudGltZXJzO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGtleSBpbiByZWYpIHtcbiAgICAgIHRpbWVyID0gcmVmW2tleV07XG4gICAgICByZXN1bHRzLnB1c2godGltZXIuc3RhcnQoKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIFBhdXNhYmxlRGVsYXlzLnByb3RvdHlwZS5jcmVhdGVUaW1lb3V0ID0gZnVuY3Rpb24oY2IsIGRlbGF5KSB7XG4gICAgdmFyIGlkO1xuICAgIGlkID0gXCJ0aW1lXCIgKyAodGhpcy5jb3VudCsrKTtcbiAgICB0aGlzLnRpbWVyc1tpZF0gPSBuZXcgVGltZXIoY2IsIGRlbGF5LCBpZCk7XG4gICAgcmV0dXJuIHRoaXMudGltZXJzW2lkXS5zdGFydCgpO1xuICB9O1xuXG4gIHJldHVybiBQYXVzYWJsZURlbGF5cztcblxufSkoKTtcblxuVGltZXIgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIFRpbWVyKGNiMSwgZGVsYXksIGlkMSkge1xuICAgIHRoaXMuY2IgPSBjYjE7XG4gICAgdGhpcy5pZCA9IGlkMTtcbiAgICB0aGlzLnJlbWFpbmluZyA9IGRlbGF5O1xuICB9XG5cbiAgVGltZXIucHJvdG90eXBlLnN0YXJ0ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcbiAgICB0aGlzLnN0YXJ0ZWQgPSBuZXcgRGF0ZTtcbiAgICByZXR1cm4gdGhpcy5yZWYgPSBzZXRUaW1lb3V0KChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBfdGhpcy5jYigpO1xuICAgICAgICByZXR1cm4gUHViU3ViLnB1Ymxpc2goJ3RpbWVyLmRlc3Ryb3knLCBfdGhpcy5pZCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpLCB0aGlzLnJlbWFpbmluZyk7XG4gIH07XG5cbiAgVGltZXIucHJvdG90eXBlLnBhdXNlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMucmVmKTtcbiAgICByZXR1cm4gdGhpcy5yZW1haW5pbmcgLT0gbmV3IERhdGUgLSB0aGlzLnN0YXJ0ZWQ7XG4gIH07XG5cbiAgVGltZXIucHJvdG90eXBlLmdldFRpbWVMZWZ0ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMucnVubmluZykge1xuICAgICAgdGhpcy5wYXVzZSgpO1xuICAgICAgdGhpcy5zdGFydCgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5yZW1haW5pbmc7XG4gIH07XG5cbiAgVGltZXIucHJvdG90eXBlLmdldFN0YXRlUnVubmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bm5pbmc7XG4gIH07XG5cbiAgcmV0dXJuIFRpbWVyO1xuXG59KSgpO1xuIiwidmFyIEF1ZGlvVHJhY2ssIFNvdW5kRlg7XG5cbkF1ZGlvVHJhY2sgPSByZXF1aXJlKCdlcGlzb2RlL2F1ZGlvLXRyYWNrJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gU291bmRGWCA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gU291bmRGWCgpIHtcbiAgICB0aGlzLmNvdW50ID0gMDtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCd2Y3IucGxheScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnZjclBsYXkoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ3Zjci5wYXVzZScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnZjclBhdXNlKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCd2Y3IucmVwbGF5JywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMudmNyUmVwbGF5KCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCdzbGlkZXMuY2hhbmdpbmcnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5mbHVzaFNmeFN0b3JlKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCdzZnguYWRkJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMucGFyc2VTRlgoZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCdwbGF5c291bmQnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5wbGF5U291bmQoZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgfVxuXG4gIFNvdW5kRlgucHJvdG90eXBlLnZjclBhdXNlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGtleSwgcmVmLCByZXN1bHRzLCBzZng7XG4gICAgcmVmID0gdGhpcy5zZng7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoa2V5IGluIHJlZikge1xuICAgICAgc2Z4ID0gcmVmW2tleV07XG4gICAgICByZXN1bHRzLnB1c2goc2Z4LnRyYWNrLnNvdW5kLnBhdXNlZCA9IHRydWUpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBTb3VuZEZYLnByb3RvdHlwZS52Y3JQbGF5ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGtleSwgcmVmLCByZXN1bHRzLCBzZng7XG4gICAgcmVmID0gdGhpcy5zZng7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoa2V5IGluIHJlZikge1xuICAgICAgc2Z4ID0gcmVmW2tleV07XG4gICAgICByZXN1bHRzLnB1c2goc2Z4LnRyYWNrLnNvdW5kLnBhdXNlZCA9IGZhbHNlKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgU291bmRGWC5wcm90b3R5cGUudmNyUmVwbGF5ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyLCBrZXksIHJlZiwgc2Z4O1xuICAgIGFyID0gW107XG4gICAgcmVmID0gdGhpcy5zZng7XG4gICAgZm9yIChrZXkgaW4gcmVmKSB7XG4gICAgICBzZnggPSByZWZba2V5XTtcbiAgICAgIGFyLnB1c2goc2Z4LmRhdGEpO1xuICAgIH1cbiAgICB0aGlzLmZsdXNoU2Z4U3RvcmUoKTtcbiAgICByZXR1cm4gdGhpcy5wYXJzZVNGWChhcik7XG4gIH07XG5cbiAgU291bmRGWC5wcm90b3R5cGUuZmx1c2hTZnhTdG9yZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBrZXksIHJlZiwgc2Z4O1xuICAgIHJlZiA9IHRoaXMuc2Z4O1xuICAgIGZvciAoa2V5IGluIHJlZikge1xuICAgICAgc2Z4ID0gcmVmW2tleV07XG4gICAgICBpZiAoIXNmeC50cmFjay5pc0RlYWQpIHtcbiAgICAgICAgc2Z4LnRyYWNrLmRlc3Ryb3koKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc2Z4ID0ge307XG4gIH07XG5cbiAgU291bmRGWC5wcm90b3R5cGUucGFyc2VTRlggPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyIGZ4LCBpLCBsZW4sIHJlc3VsdHM7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgIGZvciAoaSA9IDAsIGxlbiA9IGRhdGEubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgZnggPSBkYXRhW2ldO1xuICAgICAgICByZXN1bHRzLnB1c2godGhpcy5hZGRTb3VuZEVmZmVjdChmeCkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmFkZFNvdW5kRWZmZWN0KGRhdGEpO1xuICAgIH1cbiAgfTtcblxuICBTb3VuZEZYLnByb3RvdHlwZS5hZGRTb3VuZEVmZmVjdCA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBpZiAoZGF0YS5kZWxheSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gYXJpc3RvdGxlLnRpbWVvdXQoKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMucGxheVNvdW5kKGRhdGEsIHRydWUpO1xuICAgICAgICB9O1xuICAgICAgfSkodGhpcyksIGRhdGEuZGVsYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5wbGF5U291bmQoZGF0YSk7XG4gICAgfVxuICB9O1xuXG4gIFNvdW5kRlgucHJvdG90eXBlLnBsYXlTb3VuZCA9IGZ1bmN0aW9uKGRhdGEsIHNhdmVUb1NmeFN0b3JlKSB7XG4gICAgdmFyIGlkLCB0cmFjaztcbiAgICB0cmFjayA9IG5ldyBBdWRpb1RyYWNrKGRhdGEuY29udGVudCk7XG4gICAgdHJhY2sucGxheSh7XG4gICAgICB2b2x1bWU6IGRhdGEudm9sdW1lLFxuICAgICAgbG9vcDogZGF0YS5sb29wLFxuICAgICAgb2Zmc2V0OiBkYXRhLm9mZnNldFxuICAgIH0sIGZ1bmN0aW9uKCkge1xuICAgICAgdHJhY2suZGVzdHJveSgpO1xuICAgICAgaWYgKGRhdGEuY29tcGxldGUgIT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gYXJpc3RvdGxlLmNvbW1hbmRlcltcImRvXCJdKGRhdGEuY29tcGxldGUpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmIChzYXZlVG9TZnhTdG9yZSkge1xuICAgICAgaWQgPSBcInNcIiArICh0aGlzLmNvdW50KyspO1xuICAgICAgdGhpcy5zZnhbaWRdID0ge1xuICAgICAgICB0cmFjazogdHJhY2ssXG4gICAgICAgIGRhdGE6IGRhdGFcbiAgICAgIH07XG4gICAgICByZXR1cm4gdHJhY2suc2Z4SWQgPSBpZDtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIFNvdW5kRlg7XG5cbn0pKCk7XG4iLCJ2YXIgRHluYW1pY0Fzc2V0cztcblxubW9kdWxlLmV4cG9ydHMgPSBEeW5hbWljQXNzZXRzID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBEeW5hbWljQXNzZXRzKCRlbCkge1xuICAgIHRoaXMuJGVsID0gJGVsO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoXCJnaG9zdHV4LmFkZFwiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5jcmVhdGVHaG9zdChkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoXCJnaG9zdHV4LnJlbW92ZVwiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5kZXN0cm95R2hvc3QoZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCdsYWJlbC5hZGQnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5hZGRMYWJlbChkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ2xhYmVsLnJlbW92ZScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnJlbW92ZUxhYmVsKGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgUHViU3ViLnN1YnNjcmliZSgnbGFiZWwuY2xlYXInLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5yZW1vdmVMYWJlbChkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ2xhYmVsLmhpZGUnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5oaWRlTGFiZWwoZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCdsYWJlbC5zaG93JywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuc2hvd0xhYmVsKGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH1cblxuICBEeW5hbWljQXNzZXRzLnByb3RvdHlwZS5jcmVhdGVHaG9zdCA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2YXIgJGdob3N0SXRlbSwgJHRhcmdldCwgYWN0aW9uLCBldmVudCwgcG9zLCByZWYsIHJlc3VsdHMsIHRhbCwgd2lkO1xuICAgICR0YXJnZXQgPSAkKFwiI1wiICsgZGF0YS5pZCk7XG4gICAgcG9zID0gJHRhcmdldC5wb3NpdGlvbigpO1xuICAgIHdpZCA9ICR0YXJnZXRbMF0uZ2V0QkJveCgpLndpZHRoO1xuICAgIHRhbCA9ICR0YXJnZXRbMF0uZ2V0QkJveCgpLmhlaWdodDtcbiAgICBpZiAod2lkID4gNTAwIHx8IHRhbCA+IDQwMCkge1xuICAgICAgYXJpc3RvdGxlLmxvZyhcIldlJ3ZlIGNyZWF0ZWQgYSBoaXQgYXJlYSBmb3IgYFwiICsgZGF0YS5pZCArIFwiYCB0aGF0IGlzIFwiICsgd2lkICsgXCJweCBieSBcIiArIHRhbCArIFwicHgsIEknbSBndWVzc2luZyB0aGF0J3Mgbm90IHJpZ2h0Li5cIik7XG4gICAgfVxuICAgICRnaG9zdEl0ZW0gPSAkKGphZGVUZW1wbGF0ZVsnc2xpZGUtdXgvY29tcG9uZW50cy9naG9zdC1pdGVtJ10oe1xuICAgICAgaWQ6IGRhdGEuaWQgKyBcIi1naG9zdFwiLFxuICAgICAgd2lkdGg6IHdpZCxcbiAgICAgIGhlaWdodDogdGFsLFxuICAgICAgbGVmdDogcG9zLmxlZnQsXG4gICAgICB0b3A6IHBvcy50b3BcbiAgICB9KSk7XG4gICAgdGhpcy4kZWwuYXBwZW5kKCRnaG9zdEl0ZW0pO1xuICAgIHJlZiA9IGRhdGEuZXZlbnRzO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGV2ZW50IGluIHJlZikge1xuICAgICAgYWN0aW9uID0gcmVmW2V2ZW50XTtcbiAgICAgIGlmIChhY3Rpb24uY21kICE9IG51bGwpIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKCRnaG9zdEl0ZW0ub24oZXZlbnQsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBhcmlzdG90bGUuY29tbWFuZGVyW1wiZG9cIl0oYWN0aW9uKTtcbiAgICAgICAgfSkpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYWN0aW9uID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKCRnaG9zdEl0ZW0ub24oZXZlbnQsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBhY3Rpb24oZGF0YS5pZCk7XG4gICAgICAgIH0pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdHMucHVzaCh2b2lkIDApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBEeW5hbWljQXNzZXRzLnByb3RvdHlwZS5kZXN0cm95R2hvc3QgPSBmdW5jdGlvbihnaG9zdElkKSB7XG4gICAgcmV0dXJuICQoZ2hvc3RJZCArIFwiLWdob3N0XCIpLnJlbW92ZSgpO1xuICB9O1xuXG4gIER5bmFtaWNBc3NldHMucHJvdG90eXBlLmFkZExhYmVsID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciAkbGFiZWwsIHBvcztcbiAgICBwb3MgPSBhcmlzdG90bGUubW92aWUuZ2V0TG9jYWxQb3MoZGF0YS5pZCk7XG4gICAgJGxhYmVsID0gJChqYWRlVGVtcGxhdGVbJ3NsaWRlLXV4L2xhYmVsJ10oe1xuICAgICAgdGl0bGU6IGRhdGEudGV4dCxcbiAgICAgIGlkOiBkYXRhLmlkICsgXCItbGFiZWxcIlxuICAgIH0pKTtcbiAgICB0aGlzLiRlbC5hcHBlbmQoJGxhYmVsKTtcbiAgICB0aGlzLnBvc2l0aW9uTGFiZWwoZGF0YSwgJGxhYmVsLCBwb3MpO1xuICAgIHJldHVybiAkbGFiZWwuY3NzKHtcbiAgICAgIHRvcDogcG9zLnksXG4gICAgICBsZWZ0OiBwb3MueFxuICAgIH0pO1xuICB9O1xuXG4gIER5bmFtaWNBc3NldHMucHJvdG90eXBlLnJlbW92ZUxhYmVsID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciBpLCBsYWJlbElkLCBsZW4sIHJlZiwgcmVzdWx0cztcbiAgICBpZiAoZGF0YS5pZCA9PT0gXCJhbGxcIikge1xuICAgICAgcmV0dXJuICQoXCIubGFiZWwtd3JhcHBlclwiLCB0aGlzLiRlbCkucmVtb3ZlKCk7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGRhdGEuaWQpKSB7XG4gICAgICByZWYgPSBkYXRhLmlkO1xuICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGxhYmVsSWQgPSByZWZbaV07XG4gICAgICAgIHJlc3VsdHMucHVzaCgkKFwiI1wiICsgbGFiZWxJZCArIFwiLWxhYmVsXCIsIHRoaXMuJGVsKS5yZW1vdmUoKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICQoXCIjXCIgKyBkYXRhLmlkICsgXCItbGFiZWxcIiwgdGhpcy4kZWwpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICBEeW5hbWljQXNzZXRzLnByb3RvdHlwZS5oaWRlTGFiZWwgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyIGksIGxhYmVsSWQsIGxlbiwgcmVmLCByZXN1bHRzO1xuICAgIGlmIChkYXRhLmlkID09PSBcImFsbFwiKSB7XG4gICAgICByZXR1cm4gJChcIi5sYWJlbC13cmFwcGVyXCIsIHRoaXMuJGVsKS52ZWxvY2l0eSh7XG4gICAgICAgIG9wYWNpdHk6IDBcbiAgICAgIH0sIHtcbiAgICAgICAgZHVyYXRpb246IDQwMFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGRhdGEuaWQpKSB7XG4gICAgICByZWYgPSBkYXRhLmlkO1xuICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGxhYmVsSWQgPSByZWZbaV07XG4gICAgICAgIHJlc3VsdHMucHVzaCgkKFwiI1wiICsgbGFiZWxJZCArIFwiLWxhYmVsXCIsIHRoaXMuJGVsKS52ZWxvY2l0eSh7XG4gICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICB9LCB7XG4gICAgICAgICAgZHVyYXRpb246IDQwMFxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICQoXCIjXCIgKyBkYXRhLmlkICsgXCItbGFiZWxcIiwgdGhpcy4kZWwpLnZlbG9jaXR5KHtcbiAgICAgICAgb3BhY2l0eTogMFxuICAgICAgfSwge1xuICAgICAgICBkdXJhdGlvbjogNDAwXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgRHluYW1pY0Fzc2V0cy5wcm90b3R5cGUuc2hvd0xhYmVsID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciBpLCBsYWJlbElkLCBsZW4sIHJlZiwgcmVzdWx0cztcbiAgICBpZiAoZGF0YS5pZCA9PT0gXCJhbGxcIikge1xuICAgICAgcmV0dXJuICQoXCIubGFiZWwtd3JhcHBlclwiLCB0aGlzLiRlbCkudmVsb2NpdHkoe1xuICAgICAgICBvcGFjaXR5OiAxXG4gICAgICB9LCB7XG4gICAgICAgIGR1cmF0aW9uOiA0MDBcbiAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShkYXRhLmlkKSkge1xuICAgICAgcmVmID0gZGF0YS5pZDtcbiAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBsYWJlbElkID0gcmVmW2ldO1xuICAgICAgICByZXN1bHRzLnB1c2goJChcIiNcIiArIGxhYmVsSWQgKyBcIi1sYWJlbFwiLCB0aGlzLiRlbCkudmVsb2NpdHkoe1xuICAgICAgICAgIG9wYWNpdHk6IDFcbiAgICAgICAgfSwge1xuICAgICAgICAgIGR1cmF0aW9uOiA0MDBcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAkKFwiI1wiICsgZGF0YS5pZCArIFwiLWxhYmVsXCIsIHRoaXMuJGVsKS52ZWxvY2l0eSh7XG4gICAgICAgIG9wYWNpdHk6IDFcbiAgICAgIH0sIHtcbiAgICAgICAgZHVyYXRpb246IDQwMFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIER5bmFtaWNBc3NldHMucHJvdG90eXBlLmNsZWFyTGFiZWwgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyIGksIGxhYmVsSWQsIGxlbiwgcmVmLCByZXN1bHRzO1xuICAgIGlmIChkYXRhLmlkID09PSBcImFsbFwiKSB7XG4gICAgICByZXR1cm4gJChcIi5sYWJlbC13cmFwcGVyXCIsIHRoaXMuJGVsKS52ZWxvY2l0eSh7XG4gICAgICAgIG9wYWNpdHk6IDFcbiAgICAgIH0sIHtcbiAgICAgICAgZHVyYXRpb246IDQwMFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGRhdGEuaWQpKSB7XG4gICAgICByZWYgPSBkYXRhLmlkO1xuICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGxhYmVsSWQgPSByZWZbaV07XG4gICAgICAgIHJlc3VsdHMucHVzaCgkKFwiI1wiICsgbGFiZWxJZCArIFwiLWxhYmVsXCIsIHRoaXMuJGVsKS52ZWxvY2l0eSh7XG4gICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICB9LCB7XG4gICAgICAgICAgZHVyYXRpb246IDQwMFxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICQoXCIjXCIgKyBkYXRhLmlkICsgXCItbGFiZWxcIiwgdGhpcy4kZWwpLnZlbG9jaXR5KHtcbiAgICAgICAgb3BhY2l0eTogMVxuICAgICAgfSwge1xuICAgICAgICBkdXJhdGlvbjogNDAwXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgRHluYW1pY0Fzc2V0cy5wcm90b3R5cGUucG9zaXRpb25MYWJlbCA9IGZ1bmN0aW9uKGRhdGEsICRsYWJlbCwgcG9zKSB7XG4gICAgdmFyICRpbm5lckxhYmVsLCBhcnJvd0xvYywgZmFjZTtcbiAgICBmYWNlID0gZGF0YS5mYWNlICE9IG51bGwgPyBkYXRhLmZhY2UgOiBcInRvcFwiO1xuICAgIGFycm93TG9jID0gZGF0YS5hcnJvdyAhPSBudWxsID8gZGF0YS5hcnJvdyA6IFwibGVmdFwiO1xuICAgICRpbm5lckxhYmVsID0gJChcIi5sYWJlbFwiLCAkbGFiZWwpO1xuICAgIHN3aXRjaCAoZmFjZSkge1xuICAgICAgY2FzZSBcInRvcFwiOlxuICAgICAgICBwb3MueCArPSBwb3MudyAvIDI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImxlZnRcIjpcbiAgICAgICAgcG9zLnkgKz0gcG9zLmggLyAyO1xuICAgICAgICAkaW5uZXJMYWJlbC5hZGRDbGFzcyhcImFycm93LXBvaW50LXJpZ2h0XCIpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICBwb3MueSArPSBwb3MuaCAvIDI7XG4gICAgICAgIHBvcy54ICs9IHBvcy53O1xuICAgICAgICAkaW5uZXJMYWJlbC5hZGRDbGFzcyhcImFycm93LXBvaW50LWxlZnRcIik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImJvdHRvbVwiOlxuICAgICAgICBwb3MueCArPSBwb3MudyAvIDI7XG4gICAgICAgIHBvcy55ICs9IHBvcy5oO1xuICAgICAgICAkaW5uZXJMYWJlbC5hZGRDbGFzcyhcImFycm93LXRvcFwiKTtcbiAgICB9XG4gICAgc3dpdGNoIChhcnJvd0xvYykge1xuICAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICAgIHJldHVybiAkaW5uZXJMYWJlbC5hZGRDbGFzcyhcImFycm93LXJpZ2h0XCIpO1xuICAgICAgY2FzZSBcIm1pZGRsZVwiOlxuICAgICAgICAkaW5uZXJMYWJlbC5hZGRDbGFzcyhcImFycm93LW1pZGRsZVwiKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJ3aWR0aFwiKTtcbiAgICAgICAgY29uc29sZS5sb2coJGlubmVyTGFiZWwud2lkdGgoKSk7XG4gICAgICAgIHdpbmRvdy50aGluZyA9ICRpbm5lckxhYmVsO1xuICAgICAgICByZXR1cm4gJGlubmVyTGFiZWwuY3NzKHtcbiAgICAgICAgICBsZWZ0OiAtJGlubmVyTGFiZWwud2lkdGgoKSAvIDJcbiAgICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBEeW5hbWljQXNzZXRzO1xuXG59KSgpO1xuIiwidmFyIEhpZ2hsaWdodGVyO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEhpZ2hsaWdodGVyID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBIaWdobGlnaHRlcigkZWwsIGR5bmFtaWNBc3NldHMpIHtcbiAgICB0aGlzLiRlbCA9ICRlbDtcbiAgICB0aGlzLmR5bmFtaWNBc3NldHMgPSBkeW5hbWljQXNzZXRzO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ2hpZ2hsaWdodCcsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgdmFyIGksIGl0ZW0sIGxlbiwgcmVmLCByZXN1bHRzO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhLmlkKSkge1xuICAgICAgICAgIHJlZiA9IGRhdGEuaWQ7XG4gICAgICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgaXRlbSA9IHJlZltpXTtcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaChfdGhpcy5oaWdobGlnaHRFbGVtZW50KGl0ZW0sIGRhdGEubGV2ZWwsIGRhdGEubGFiZWwpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLmhpZ2hsaWdodEVsZW1lbnQoZGF0YS5pZCwgZGF0YS5sZXZlbCwgZGF0YS5sYWJlbCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ3VuaGlnaGxpZ2h0JywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICB2YXIgaSwgaXRlbSwgbGVuLCByZXN1bHRzO1xuICAgICAgICBpZiAobSA9PT0gXCJ1bmhpZ2hsaWdodC5hbGxcIikge1xuICAgICAgICAgIHJldHVybiBfdGhpcy51bmhpZ2hsaWdodEFsbCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgICAgICByZXN1bHRzID0gW107XG4gICAgICAgICAgICBmb3IgKGkgPSAwLCBsZW4gPSBkYXRhLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgIGl0ZW0gPSBkYXRhW2ldO1xuICAgICAgICAgICAgICByZXN1bHRzLnB1c2goX3RoaXMudW5IaWdobGlnaHRFbGVtZW50KGl0ZW0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMudW5IaWdobGlnaHRFbGVtZW50KGRhdGEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH1cblxuICBIaWdobGlnaHRlci5wcm90b3R5cGUuaGlnaGxpZ2h0RWxlbWVudCA9IGZ1bmN0aW9uKGVsZW1lbnRJZCwgY29sb3IsIGxhYmVsKSB7XG4gICAgdmFyICRpdGVtLCBmaWx0ZXJJZDtcbiAgICAkaXRlbSA9ICQoXCIjXCIgKyBlbGVtZW50SWQsIHRoaXMuJGVsKTtcbiAgICAkaXRlbS5hdHRyKFwiY2xhc3NcIiwgXCJmaWx0ZXItaGlnaGxpZ2h0ZWRcIik7XG4gICAgaWYgKCRpdGVtLmxlbmd0aCA9PT0gMCkge1xuICAgICAgYXJpc3RvdGxlW1widGhyb3dcIl0oXCJ0cmllZCB0byBoaWdobGlnaHQgYW4gZWxlbWVudCB3aXRoIHRoZSBpZCBgXCIgKyBlbGVtZW50SWQgKyBcImAsIGJ1dCBmb3VuZCBubyBlbGVtZW50cyB3aXRoIHRoYXQgaWQuXCIsIHRydWUpO1xuICAgIH1cbiAgICBzd2l0Y2ggKGNvbG9yKSB7XG4gICAgICBjYXNlICdibHVlJzpcbiAgICAgICAgZmlsdGVySWQgPSBcImhpZ2hsaWdodEJsdWVcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdvcmFuZ2UnOlxuICAgICAgICBmaWx0ZXJJZCA9IFwiaGlnaGxpZ2h0T3JhbmdlXCI7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAneWVsbG93JzpcbiAgICAgICAgZmlsdGVySWQgPSBcImhpZ2hsaWdodFllbGxvd1wiO1xuICAgIH1cbiAgICByZXR1cm4gJGl0ZW0uY3NzKHtcbiAgICAgIGZpbHRlcjogXCJ1cmwoI1wiICsgZmlsdGVySWQgKyBcIilcIlxuICAgIH0pO1xuICB9O1xuXG4gIEhpZ2hsaWdodGVyLnByb3RvdHlwZS51bkhpZ2hsaWdodEVsZW1lbnQgPSBmdW5jdGlvbihlbGVtZW50SWQpIHtcbiAgICB2YXIgJGl0ZW07XG4gICAgJGl0ZW0gPSAkKFwiI1wiICsgZWxlbWVudElkLCB0aGlzLiRlbCk7XG4gICAgJGl0ZW0uYXR0cihcImNsYXNzXCIsIFwiXCIpO1xuICAgIGlmICgkaXRlbS5sZW5ndGggPT09IDApIHtcbiAgICAgIGFyaXN0b3RsZVtcInRocm93XCJdKFwidHJpZWQgdG8gdW5oaWdobGlnaHQgYW4gZWxlbWVudCB3aXRoIHRoZSBpZCBgXCIgKyBlbGVtZW50SWQgKyBcImAsIGJ1dCBmb3VuZCBubyBlbGVtZW50cyB3aXRoIHRoYXQgaWQuXCIsIHRydWUpO1xuICAgIH1cbiAgICByZXR1cm4gJGl0ZW0uY3NzKHtcbiAgICAgIGZpbHRlcjogXCJhdXRvXCJcbiAgICB9KTtcbiAgfTtcblxuICBIaWdobGlnaHRlci5wcm90b3R5cGUudW5oaWdobGlnaHRBbGwgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgJGl0ZW1zO1xuICAgICRpdGVtcyA9ICQoXCIuZmlsdGVyLWhpZ2hsaWdodGVkXCIpO1xuICAgICRpdGVtcy5hdHRyKFwiY2xhc3NcIiwgXCJcIik7XG4gICAgcmV0dXJuICRpdGVtcy5jc3Moe1xuICAgICAgZmlsdGVyOiBcImluaXRpYWxcIlxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBIaWdobGlnaHRlcjtcblxufSkoKTtcbiIsInZhciBMYXllciwgU1ZHQW5pbWF0aW9uLFxuICBiaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfTtcblxuU1ZHQW5pbWF0aW9uID0gcmVxdWlyZSgnbW92aWUvc3ZnLWFuaW1hdGlvbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IExheWVyID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBMYXllcigkZWwsIGRlcHRoKSB7XG4gICAgdGhpcy5kZXB0aCA9IGRlcHRoO1xuICAgIHRoaXMuY3JlYXRlQ29udGVudCA9IGJpbmQodGhpcy5jcmVhdGVDb250ZW50LCB0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZSA9IGJpbmQodGhpcy51cGRhdGUsIHRoaXMpO1xuICAgIHRoaXMuaXNDYWNoZWQgPSBmYWxzZTtcbiAgICB0aGlzLiRsYXllciA9ICQoamFkZVRlbXBsYXRlWydtb3ZpZS9sYXllciddKHtcbiAgICAgIGRlcHRoOiB0aGlzLmRlcHRoXG4gICAgfSkpO1xuICAgICRlbC5hcHBlbmQodGhpcy4kbGF5ZXIpO1xuICB9XG5cbiAgTGF5ZXIucHJvdG90eXBlLnJlcG9ydCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjYWNoZWRPck5vdCwgbXNnLCBzeW1ib2w7XG4gICAgY2FjaGVkT3JOb3QgPSB0aGlzLmlzQ2FjaGVkID8gXCJjYWNoZWRcIiA6IFwibm90IGNhY2hlZFwiO1xuICAgIHN5bWJvbCA9IHRoaXMuaXNDYWNoZWQgPyBcIuKImlwiIDogXCItXCI7XG4gICAgbXNnID0gc3ltYm9sICsgXCIgTGF5ZXIgXCIgKyB0aGlzLmRlcHRoICsgXCIgOiBcIiArIHRoaXMucHJpc3RpbmVMYXllckRhdGEuY29udGVudCArIFwiIGlzIFwiICsgY2FjaGVkT3JOb3Q7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKG1zZyk7XG4gIH07XG5cbiAgTGF5ZXIucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKHByaXN0aW5lTGF5ZXJEYXRhKSB7XG4gICAgdGhpcy5wcmlzdGluZUxheWVyRGF0YSA9IHByaXN0aW5lTGF5ZXJEYXRhO1xuICAgIHRoaXMubGF5ZXJEYXRhID0galF1ZXJ5LmV4dGVuZCh0cnVlLCB7fSwgdGhpcy5wcmlzdGluZUxheWVyRGF0YSk7XG4gICAgaWYgKHRoaXMubGF5ZXJEYXRhLndhaXQgIT0gbnVsbCkge1xuICAgICAgYXJpc3RvdGxlLnRpbWVvdXQodGhpcy5jcmVhdGVDb250ZW50LCB0aGlzLmxheWVyRGF0YS53YWl0KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlQ29udGVudCgpO1xuICB9O1xuXG4gIExheWVyLnByb3RvdHlwZS5jcmVhdGVDb250ZW50ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCh0aGlzLmxheWVyRGF0YS5jb250ZW50ICE9IG51bGwpIHx8ICh0aGlzLmxheWVyRGF0YS5iYWNrZ3JvdW5kICE9IG51bGwpKSB7XG4gICAgICB0aGlzLnVwZGF0ZUNvbnRlbnQodGhpcy5sYXllckRhdGEpO1xuICAgIH1cbiAgICBpZiAodGhpcy5sYXllckRhdGEuZnggIT0gbnVsbCkge1xuICAgICAgdGhpcy51cGRhdGVFZmZlY3RzKHRoaXMubGF5ZXJEYXRhLmZ4KTtcbiAgICB9XG4gICAgaWYgKHRoaXMubGF5ZXJEYXRhLmFjdGlvbiAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gYXJpc3RvdGxlLmNvbW1hbmRlcltcImRvXCJdKHRoaXMubGF5ZXJEYXRhLmFjdGlvbik7XG4gICAgfVxuICB9O1xuXG4gIExheWVyLnByb3RvdHlwZS51cGRhdGVDb250ZW50ID0gZnVuY3Rpb24obGF5ZXJEYXRhKSB7XG4gICAgaWYgKHRoaXMuY3VycmVudE9uaW9uTGF5ZXIgIT0gbnVsbCkge1xuICAgICAgdGhpcy5mYWRlQW5kUmVtb3ZlT2xkTGF5ZXIoKTtcbiAgICB9XG4gICAgdGhpcy5hZGRUaGVDb3JyZWN0Q29udGVudChsYXllckRhdGEpO1xuICAgIHJldHVybiB0aGlzLnVwZGF0ZUJhY2tncm91bmQobGF5ZXJEYXRhKTtcbiAgfTtcblxuICBMYXllci5wcm90b3R5cGUuYWRkVGhlQ29ycmVjdENvbnRlbnQgPSBmdW5jdGlvbihsYXllckRhdGEpIHtcbiAgICB2YXIga2luZDtcbiAgICB0aGlzLmlzQW5pbWF0aW9uID0gZmFsc2U7XG4gICAgdGhpcy5pc0NhY2hlZCA9IGZhbHNlO1xuICAgIHBhcnNlKGxheWVyRGF0YSk7XG4gICAgaWYgKGxheWVyRGF0YS5pZUNhY2hlICYmICFhcmlzdG90bGUuZG9udENhY2hlICYmIGFyaXN0b3RsZS5pc0lFKSB7XG4gICAgICBsYXllckRhdGEubG9vcCA9IGZhbHNlO1xuICAgICAgbGF5ZXJEYXRhLmNhY2hlID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5jdXJyZW50T25pb25MYXllciA9IHRoaXMuYWRkT25pb25MYXllcigpO1xuICAgIGlmIChsYXllckRhdGEuY29udGVudCA9PSBudWxsKSB7XG4gICAgICBraW5kID0gXCJub25lXCI7XG4gICAgfSBlbHNlIGlmIChsYXllckRhdGEuY29udGVudCA9PT0gXCJjbGVhclwiKSB7XG4gICAgICBraW5kID0gXCJjbGVhclwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBraW5kID0gbGF5ZXJEYXRhLmNvbnRlbnQuc3BsaXQoXCIuXCIpWzFdO1xuICAgIH1cbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgIGNhc2UgXCJqc29uXCI6XG4gICAgICAgIHJldHVybiB0aGlzLmFkZEFuaW1hdGlvbih0aGlzLmN1cnJlbnRPbmlvbkxheWVyLCBsYXllckRhdGEpO1xuICAgICAgY2FzZSBcInN2Z1wiOlxuICAgICAgICByZXR1cm4gdGhpcy5hZGRTdmcodGhpcy5jdXJyZW50T25pb25MYXllciwgbGF5ZXJEYXRhKTtcbiAgICAgIGNhc2UgXCJnaWZcIjpcbiAgICAgIGNhc2UgXCJqcGdcIjpcbiAgICAgIGNhc2UgXCJqcGVnXCI6XG4gICAgICBjYXNlIFwicG5nXCI6XG4gICAgICAgIHJldHVybiB0aGlzLmFkZEltYWdlKHRoaXMuY3VycmVudE9uaW9uTGF5ZXIsIGxheWVyRGF0YS5jb250ZW50LCBsYXllckRhdGEucmVwZWF0LCBsYXllckRhdGEucG9zaXRpb24pO1xuICAgICAgY2FzZSBcImNsZWFyXCI6XG4gICAgICAgIHJldHVybiB0aGlzLmVtcHR5KCk7XG4gICAgICBjYXNlIFwibm9uZVwiOlxuICAgICAgICByZXR1cm4gXCJkbyBub3RoaW5nXCI7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gYXJpc3RvdGxlW1widGhyb3dcIl0oXCJ0cmllZCB0byBhZGQgdW5yZWNvZ25pemVkIGxheWVyIHR5cGUgJ1wiICsga2luZCArIFwiJ1wiLCB0cnVlKTtcbiAgICB9XG4gIH07XG5cbiAgTGF5ZXIucHJvdG90eXBlLmNhY2hlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyICRpbWcsICRzdmcsIGVycm9yLCBlcnJvcjEsIGltZywgc3ZnO1xuICAgIGlmICh0aGlzLmlzQ2FjaGVkIHx8ICF0aGlzLmlzQW5pbWF0aW9uIHx8IGFyaXN0b3RsZS5kb250Q2FjaGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5pc0NhY2hlZCA9IHRydWU7XG4gICAgJHN2ZyA9ICQoXCJzdmdcIiwgdGhpcy4kbGF5ZXIpO1xuICAgICRzdmcuYXR0cih7XG4gICAgICBzdHlsZTogXCJcIixcbiAgICAgIHhtbG5zOiBcIlwiXG4gICAgfSk7XG4gICAgJHN2Zy5yZW1vdmVBdHRyKFwieG1sbnNcIik7XG4gICAgc3ZnID0gJHN2Z1swXTtcbiAgICAkaW1nID0gJCgkLnBhcnNlSFRNTChcIjxpbWcgLz5cIikpO1xuICAgIGltZyA9ICRpbWdbMF07XG4gICAgd2luZG93LnRyYWNlTGF5ZXIgPSB0aGlzO1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gc3ZnLnRvRGF0YVVSTCgnaW1hZ2UvcG5nJywge1xuICAgICAgICByZW5kZXJlcjogJ2NhbnZnJyxcbiAgICAgICAgY2FsbGJhY2s6IChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICAgIHJldHVybiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBkYXRhKTtcbiAgICAgICAgICAgIF90aGlzLmZhZGVBbmRSZW1vdmVPbGRMYXllcigpO1xuICAgICAgICAgICAgX3RoaXMuY3VycmVudE9uaW9uTGF5ZXIgPSBfdGhpcy5hZGRPbmlvbkxheWVyKCk7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuY3VycmVudE9uaW9uTGF5ZXIuYXBwZW5kKGltZyk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSkodGhpcylcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yMSkge1xuICAgICAgZXJyb3IgPSBlcnJvcjE7XG4gICAgICByZXR1cm4gY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfTtcblxuICBMYXllci5wcm90b3R5cGUudW5jYWNoZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBrZXksIHJlZiwgdGVtcE9iaiwgdmFsO1xuICAgIGlmICghdGhpcy5pc0NhY2hlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmlzQ2FjaGVkID0gZmFsc2U7XG4gICAgdGhpcy5mYWRlQW5kUmVtb3ZlT2xkTGF5ZXIoKTtcbiAgICB0aGlzLmN1cnJlbnRPbmlvbkxheWVyID0gdGhpcy5hZGRPbmlvbkxheWVyKCk7XG4gICAgdGVtcE9iaiA9IHt9O1xuICAgIHJlZiA9IHRoaXMubGF5ZXJEYXRhO1xuICAgIGZvciAoa2V5IGluIHJlZikge1xuICAgICAgdmFsID0gcmVmW2tleV07XG4gICAgICB0ZW1wT2JqW2tleV0gPSB2YWw7XG4gICAgfVxuICAgIHRlbXBPYmouaWVDYWNoZSA9IGZhbHNlO1xuICAgIHRlbXBPYmouY2FjaGUgPSBmYWxzZTtcbiAgICB0ZW1wT2JqLmp1bXBUb0VuZCA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXMuYWRkVGhlQ29ycmVjdENvbnRlbnQodGVtcE9iaik7XG4gIH07XG5cbiAgTGF5ZXIucHJvdG90eXBlLnVwZGF0ZUVmZmVjdHMgPSBmdW5jdGlvbihmeCkge1xuICAgIHZhciBlZmZlY3QsIGksIGxlbiwgcmVmLCByZXN1bHRzO1xuICAgIGlmIChmeC5jbGVhcikge1xuICAgICAgdGhpcy4kbGF5ZXIuYXR0cih7XG4gICAgICAgIFwiY2xhc3NcIjogJ2xheWVyJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChmeC5lZmZlY3RzICE9IG51bGwpIHtcbiAgICAgIHJlZiA9IGZ4LmVmZmVjdHM7XG4gICAgICByZXN1bHRzID0gW107XG4gICAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgZWZmZWN0ID0gcmVmW2ldO1xuICAgICAgICByZXN1bHRzLnB1c2godGhpcy4kbGF5ZXIuYWRkQ2xhc3MoZWZmZWN0KSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG4gIH07XG5cbiAgTGF5ZXIucHJvdG90eXBlLnVwZGF0ZUJhY2tncm91bmQgPSBmdW5jdGlvbihsYXllckRhdGEpIHtcbiAgICBpZiAobGF5ZXJEYXRhLmJhY2tncm91bmQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jdXJyZW50T25pb25MYXllci5jc3Moe1xuICAgICAgYmFja2dyb3VuZDogbGF5ZXJEYXRhLmJhY2tncm91bmRcbiAgICB9KTtcbiAgfTtcblxuICBMYXllci5wcm90b3R5cGUuYWRkQW5pbWF0aW9uID0gZnVuY3Rpb24oJGhvbGRlciwgbGF5ZXJEYXRhKSB7XG4gICAgdGhpcy5pc0FuaW1hdGlvbiA9IHRydWU7XG4gICAgdGhpcy5hbmltYXRpb24gPSBuZXcgU1ZHQW5pbWF0aW9uKCRob2xkZXIsIGFyaXN0b3RsZS5nZXRBc3NldFBhdGgobGF5ZXJEYXRhLmNvbnRlbnQpLCBsYXllckRhdGEpO1xuICAgIGlmIChsYXllckRhdGEuY2FjaGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmFuaW1hdGlvbi5hZGRPbkNvbXBsZXRlKChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuY2FjaGUoKTtcbiAgICAgICAgICB9LCAxMCk7XG4gICAgICAgIH07XG4gICAgICB9KSh0aGlzKSk7XG4gICAgfVxuICB9O1xuXG4gIExheWVyLnByb3RvdHlwZS5hZGRTdmcgPSBmdW5jdGlvbigkaG9sZGVyLCBsYXllckRhdGEpIHtcbiAgICB2YXIgbWU7XG4gICAgbWUgPSB0aGlzO1xuICAgIHJldHVybiAkaG9sZGVyLmxvYWQoYXJpc3RvdGxlLmdldEFzc2V0UGF0aChsYXllckRhdGEuY29udGVudCksIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKGxheWVyRGF0YS5jYWNoZSkge1xuICAgICAgICByZXR1cm4gbWUuY2FjaGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBMYXllci5wcm90b3R5cGUuYWRkSW1hZ2UgPSBmdW5jdGlvbigkaG9sZGVyLCBmaWxlLCByZXBlYXQsIHBvc2l0aW9uKSB7XG4gICAgaWYgKHJlcGVhdCA9PSBudWxsKSB7XG4gICAgICByZXBlYXQgPSBcIm5vLXJlcGVhdFwiO1xuICAgIH1cbiAgICBpZiAocG9zaXRpb24gPT0gbnVsbCkge1xuICAgICAgcG9zaXRpb24gPSBcImxlZnRcIjtcbiAgICB9XG4gICAgcmV0dXJuICRob2xkZXIuY3NzKHtcbiAgICAgIGJhY2tncm91bmQ6IFwidXJsKFwiICsgKGFyaXN0b3RsZS5nZXRBc3NldFBhdGgoZmlsZSkpICsgXCIpIFwiICsgcmVwZWF0ICsgXCIgXCIgKyBwb3NpdGlvblxuICAgIH0pO1xuICB9O1xuXG4gIExheWVyLnByb3RvdHlwZS5hZGRPbmlvbkxheWVyID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyICRvbmlvbkxheWVyO1xuICAgICRvbmlvbkxheWVyID0gJChqYWRlVGVtcGxhdGVbJ21vdmllL29uaW9uLWxheWVyJ10oe30pKTtcbiAgICB0aGlzLiRsYXllci5wcmVwZW5kKCRvbmlvbkxheWVyKTtcbiAgICByZXR1cm4gJG9uaW9uTGF5ZXI7XG4gIH07XG5cbiAgTGF5ZXIucHJvdG90eXBlLmZhZGVBbmRSZW1vdmVPbGRMYXllciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBvbGRPbmlvbkxheWVyO1xuICAgIG9sZE9uaW9uTGF5ZXIgPSB0aGlzLmN1cnJlbnRPbmlvbkxheWVyO1xuICAgIHJldHVybiBhcmlzdG90bGUudGltZW91dCgoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgb2xkT25pb25MYXllci52ZWxvY2l0eSgnc3RvcCcsIHRydWUpO1xuICAgICAgICByZXR1cm4gb2xkT25pb25MYXllci52ZWxvY2l0eSh7XG4gICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICB9LCB7XG4gICAgICAgICAgZHVyYXRpb246IDIwMCxcbiAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gb2xkT25pb25MYXllci5yZW1vdmUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSwgMjAwKTtcbiAgfTtcblxuICBMYXllci5wcm90b3R5cGUuZW1wdHkgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kbGF5ZXIuZW1wdHkoKTtcbiAgfTtcblxuICBMYXllci5wcm90b3R5cGUuYWRkRmlsdGVyID0gZnVuY3Rpb24oZmlsdGVySWQpIHtcbiAgICByZXR1cm4gJChcInN2Z1wiLCB0aGlzLmN1cnJlbnRPbmlvbkxheWVyKS5jc3Moe1xuICAgICAgZmlsdGVyOiBcInVybCgjXCIgKyBmaWx0ZXJJZCArIFwiKVwiXG4gICAgfSk7XG4gIH07XG5cbiAgTGF5ZXIucHJvdG90eXBlLnJlbW92ZUZpbHRlcnMgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gJChcInN2Z1wiLCB0aGlzLmN1cnJlbnRPbmlvbkxheWVyKS5jc3Moe1xuICAgICAgZmlsdGVyOiBcIm5vbmVcIlxuICAgIH0pO1xuICB9O1xuXG4gIExheWVyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJGxheWVyLnJlbW92ZSgpO1xuICB9O1xuXG4gIHJldHVybiBMYXllcjtcblxufSkoKTtcbiIsInZhciBEeW5hbWljQXNzZXRzLCBIaWdobGlnaHRlciwgTGF5ZXIsIE1vdmllO1xuXG5EeW5hbWljQXNzZXRzID0gcmVxdWlyZSgnbW92aWUvZHluYW1pYy1hc3NldHMnKTtcblxuTGF5ZXIgPSByZXF1aXJlKCdtb3ZpZS9sYXllcicpO1xuXG5IaWdobGlnaHRlciA9IHJlcXVpcmUoJ21vdmllL2hpZ2hsaWdodGVyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTW92aWUgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIE1vdmllKCRlbCkge1xuICAgIHZhciB0b2tlbjEsIHRva2VuMTAsIHRva2VuMTEsIHRva2VuMTIsIHRva2VuMTMsIHRva2VuMiwgdG9rZW4zLCB0b2tlbjQsIHRva2VuNSwgdG9rZW42LCB0b2tlbjcsIHRva2VuOCwgdG9rZW45O1xuICAgIHRoaXMuJGVsID0gJGVsO1xuICAgIGFyaXN0b3RsZS5tb3ZpZSA9IHRoaXM7XG4gICAgdGhpcy4kd3JhcHBlciA9ICQoJy53cmFwcGVyJywgdGhpcy4kZWwpO1xuICAgIHRoaXMubGF5ZXJzID0gW107XG4gICAgdGhpcy5keW5hbWljQXNzZXRzID0gbmV3IER5bmFtaWNBc3NldHMoJCgnLmR5bmFtaWNzJywgdGhpcy4kZWwpKTtcbiAgICB0aGlzLmhpZ2hsaWdodGVyID0gbmV3IEhpZ2hsaWdodGVyKHRoaXMuJHdyYXBwZXIsIHRoaXMuZHluYW1pY0Fzc2V0cyk7XG4gICAgdGhpcy5zY2FsZSA9IDE7XG4gICAgdGhpcy50cmFuc2Zvcm1PcmlnaW4gPSB7XG4gICAgICB4OiAwLFxuICAgICAgeTogMFxuICAgIH07XG4gICAgdG9rZW4xID0gUHViU3ViLnN1YnNjcmliZSgnbW92aWUubG9hZC1sYXllcicsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmFkZExheWVyKGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgdG9rZW4yID0gUHViU3ViLnN1YnNjcmliZSgnbW92aWUuem9vbScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnpvb20oZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0b2tlbjMgPSBQdWJTdWIuc3Vic2NyaWJlKCdtb3ZpZS5sYXllcnMuY2xlYXInLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5jbGVhckxheWVyKGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgdG9rZW40ID0gUHViU3ViLnN1YnNjcmliZSgnbW92aWUubGF5ZXJzLmNsZWFyLWFsbCcsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmNsZWFyQWxsTGF5ZXJzKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0b2tlbjUgPSBQdWJTdWIuc3Vic2NyaWJlKCdtb3ZpZS5sYXllcnMuYmx1ci5iZWxvdycsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmJsdXJBbGxMYXllcnNCZWxvdyhkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRva2VuNiA9IFB1YlN1Yi5zdWJzY3JpYmUoJ21vdmllLmxheWVycy51bmJsdXIuYWxsJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMudW5ibHVyQWxsTEF5ZXJzKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0b2tlbjcgPSBQdWJTdWIuc3Vic2NyaWJlKCdtb3ZpZS5sYXllcnMuY2FjaGUnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5jYWNoZUxheWVyKGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgdG9rZW44ID0gUHViU3ViLnN1YnNjcmliZSgnbW92aWUubGF5ZXJzLnVuY2FjaGUnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy51bmNhY2hlTGF5ZXIoZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0b2tlbjkgPSBQdWJTdWIuc3Vic2NyaWJlKCdtb3ZpZS5sYXllcnMudW5jYWNoZS1hbGwnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy51bkNhY2hlQWxsTGF5ZXJzKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0b2tlbjEwID0gUHViU3ViLnN1YnNjcmliZSgnbW92aWUubGF5ZXJzLmNhY2hlLWFsbCcsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmNhY2hlQWxsTGF5ZXJzKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0b2tlbjExID0gUHViU3ViLnN1YnNjcmliZSgnbW92aWUubGF5ZXJzLmNhY2hlLWFsbC1idXQnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5jYWNoZUFsbEJ1dChkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRva2VuMTIgPSBQdWJTdWIuc3Vic2NyaWJlKCdtb3ZpZS5yZXBvcnQnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5yZXBvcnQoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRva2VuMTMgPSBQdWJTdWIuc3Vic2NyaWJlKCdtb3ZpZS5yZWh5ZHJhdGUtbGF5ZXJzJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMucmVoeWRyYXRlTGF5ZXJTdGF0ZShkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRoaXMudG9rZW5zID0gW3Rva2VuMSwgdG9rZW4yLCB0b2tlbjMsIHRva2VuNCwgdG9rZW41LCB0b2tlbjYsIHRva2VuNywgdG9rZW44LCB0b2tlbjksIHRva2VuMTAsIHRva2VuMTEsIHRva2VuMTIsIHRva2VuMTNdO1xuICB9XG5cbiAgTW92aWUucHJvdG90eXBlLnJlcG9ydCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBqLCBsYXllciwgbGVuLCByZWYsIHJlc3VsdHM7XG4gICAgcmVmID0gdGhpcy5sYXllcnM7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoaiA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGogPCBsZW47IGorKykge1xuICAgICAgbGF5ZXIgPSByZWZbal07XG4gICAgICByZXN1bHRzLnB1c2gobGF5ZXIucmVwb3J0KCkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBNb3ZpZS5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaiwgbGF5ZXIsIGxlbiwgcmVmO1xuICAgIHRoaXMuem9vbSh7XG4gICAgICBzY2FsZTogMVxuICAgIH0pO1xuICAgIHJlZiA9IHRoaXMubGF5ZXJzO1xuICAgIGZvciAoaiA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGogPCBsZW47IGorKykge1xuICAgICAgbGF5ZXIgPSByZWZbal07XG4gICAgICBsYXllci5kZXN0cm95KCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmxheWVycyA9IFtdO1xuICB9O1xuXG4gIE1vdmllLnByb3RvdHlwZS5wb3B1bGF0ZSA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2YXIgZGVwdGhJZCwgbGF5ZXJEYXRhLCByZWY7XG4gICAgaWYgKGRhdGEgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZWYgPSBkYXRhLmxheWVycztcbiAgICBmb3IgKGRlcHRoSWQgaW4gcmVmKSB7XG4gICAgICBsYXllckRhdGEgPSByZWZbZGVwdGhJZF07XG4gICAgICB0aGlzLmFkZExheWVyKGxheWVyRGF0YSk7XG4gICAgfVxuICAgIGlmIChkYXRhLnpvb20gIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMuem9vbShkYXRhLnpvb20pO1xuICAgIH1cbiAgfTtcblxuICBNb3ZpZS5wcm90b3R5cGUuem9vbSA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2YXIgJGl0ZW0sIHBvcztcbiAgICBpZiAoZGF0YS5pZCAhPSBudWxsKSB7XG4gICAgICAkaXRlbSA9ICQoXCIjXCIgKyBkYXRhLmlkKTtcbiAgICAgIGlmICgkaXRlbS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgYXJpc3RvdGxlW1widGhyb3dcIl0oXCJUcmllZCB0byB6b29tIHRvIGFuIGl0ZW0gd2l0aCB0aGUgaWQgYFwiICsgZGF0YS5pZCArIFwiYCwgYnV0IG5vIGl0ZW1zIHdpdGggdGhhdCBpZCB3ZXJlIGZvdW5kLlwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgcG9zID0gdGhpcy5nZXRMb2NhbFBvcyhkYXRhLmlkKTtcbiAgICAgIHJldHVybiB0aGlzLnpvb21UbyhkYXRhLnNjYWxlLCBwb3MueCwgcG9zLnkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy56b29tVG8oZGF0YS5zY2FsZSwgZGF0YS54LCBkYXRhLnkpO1xuICAgIH1cbiAgfTtcblxuICBNb3ZpZS5wcm90b3R5cGUuem9vbVRvID0gZnVuY3Rpb24oc2NhbGUsIHgsIHkpIHtcbiAgICB0aGlzLnNjYWxlID0gc2NhbGUgIT0gbnVsbCA/IHNjYWxlIDogMTtcbiAgICBpZiAoeCA9PSBudWxsKSB7XG4gICAgICB4ID0gMDtcbiAgICB9XG4gICAgaWYgKHkgPT0gbnVsbCkge1xuICAgICAgeSA9IDA7XG4gICAgfVxuICAgIHRoaXMudHJhbnNmb3JtT3JpZ2luID0ge1xuICAgICAgeDogeCxcbiAgICAgIHk6IHlcbiAgICB9O1xuICAgIHRoaXMuJGVsLmNzcyh7XG4gICAgICBcInRyYW5zZm9ybS1vcmlnaW5cIjogKE1hdGgucm91bmQoeCkpICsgXCJweCBcIiArIChNYXRoLnJvdW5kKHkpKSArIFwicHhcIlxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLiRlbC5jc3Moe1xuICAgICAgdHJhbnNmb3JtOiBcInNjYWxlKFwiICsgdGhpcy5zY2FsZSArIFwiKVwiXG4gICAgfSk7XG4gIH07XG5cbiAgTW92aWUucHJvdG90eXBlLmNsZWFyTGF5ZXIgPSBmdW5jdGlvbihkZXB0aCkge1xuICAgIGlmICh0aGlzLmxheWVyc1tkZXB0aF0gIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMubGF5ZXJzW2RlcHRoXS5lbXB0eSgpO1xuICAgIH1cbiAgfTtcblxuICBNb3ZpZS5wcm90b3R5cGUuY2xlYXJBbGxMYXllcnMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaiwgbGF5ZXIsIGxlbiwgcmVmLCByZXN1bHRzO1xuICAgIHJlZiA9IHRoaXMubGF5ZXJzO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGogPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgIGxheWVyID0gcmVmW2pdO1xuICAgICAgcmVzdWx0cy5wdXNoKGxheWVyLmVtcHR5KCkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBNb3ZpZS5wcm90b3R5cGUuYWRkTGF5ZXIgPSBmdW5jdGlvbihsYXllckRhdGEpIHtcbiAgICB2YXIgZGVwdGgsIGksIGosIGxheWVyLCByZWYsIHJlZjE7XG4gICAgaWYgKGxheWVyRGF0YSA9PSBudWxsKSB7XG4gICAgICBhcmlzdG90bGVbXCJ0aHJvd1wiXShcIlRyaWVkIHRvIGNyZWF0ZSBhIGxheWVyLCBidXQgZGlkbid0IHNwZWNpZnkgYW55IGxheWVyIGRhdGFcIiwgdHJ1ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChsYXllckRhdGEuZGVwdGggPT0gbnVsbCkge1xuICAgICAgYXJpc3RvdGxlW1widGhyb3dcIl0oXCJUcmllZCB0byBjcmVhdGUgYSBsYXllciB3aXRoIG5vIGRlcHRoIHNwZWNpZmllZFwiLCB0cnVlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZGVwdGggPSBsYXllckRhdGEuZGVwdGg7XG4gICAgaWYgKGRlcHRoID4gdGhpcy5sYXllcnMubGVuZ3RoKSB7XG4gICAgICBmb3IgKGkgPSBqID0gcmVmID0gdGhpcy5sYXllcnMubGVuZ3RoLCByZWYxID0gZGVwdGg7IHJlZiA8PSByZWYxID8gaiA8PSByZWYxIDogaiA+PSByZWYxOyBpID0gcmVmIDw9IHJlZjEgPyArK2ogOiAtLWopIHtcbiAgICAgICAgdGhpcy5sYXllcnNbaV0gPSBuZXcgTGF5ZXIodGhpcy4kd3JhcHBlciwgaSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxheWVyID0gdGhpcy5nZXRPckNyZWF0ZUxheWVyKGRlcHRoKTtcbiAgICByZXR1cm4gbGF5ZXIudXBkYXRlKGxheWVyRGF0YSk7XG4gIH07XG5cbiAgTW92aWUucHJvdG90eXBlLmdldE9yQ3JlYXRlTGF5ZXIgPSBmdW5jdGlvbihkZXB0aCkge1xuICAgIHZhciBsYXllcjtcbiAgICBpZiAodGhpcy5sYXllcnNbZGVwdGhdICE9IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLmxheWVyc1tkZXB0aF07XG4gICAgfVxuICAgIGxheWVyID0gbmV3IExheWVyKHRoaXMuJHdyYXBwZXIsIGRlcHRoKTtcbiAgICB0aGlzLmxheWVyc1tkZXB0aF0gPSBsYXllcjtcbiAgICByZXR1cm4gbGF5ZXI7XG4gIH07XG5cbiAgTW92aWUucHJvdG90eXBlLmNhY2hlQWxsQnV0ID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciBleGNlcHRpb24sIGV4Y2VwdGlvbnMsIGosIGssIGxheWVyLCBsZW4sIGxlbjEsIHJlZiwgcmVzdWx0cztcbiAgICBleGNlcHRpb25zID0ge307XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgIGZvciAoaiA9IDAsIGxlbiA9IGRhdGEubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgICAgZXhjZXB0aW9uID0gZGF0YVtqXTtcbiAgICAgICAgZXhjZXB0aW9uc1tleGNlcHRpb25dID0gXCJcIjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgZXhjZXB0aW9uc1tkYXRhXSA9IFwiXCI7XG4gICAgfVxuICAgIHJlZiA9IHRoaXMubGF5ZXJzO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGsgPSAwLCBsZW4xID0gcmVmLmxlbmd0aDsgayA8IGxlbjE7IGsrKykge1xuICAgICAgbGF5ZXIgPSByZWZba107XG4gICAgICBpZiAoZXhjZXB0aW9uc1tsYXllci5kZXB0aF0gIT09IFwiXCIpIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKGxheWVyLmNhY2hlKCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHZvaWQgMCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIE1vdmllLnByb3RvdHlwZS5jYWNoZUFsbExheWVycyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBqLCBsYXllciwgbGVuLCByZWYsIHJlc3VsdHM7XG4gICAgcmVmID0gdGhpcy5sYXllcnM7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoaiA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGogPCBsZW47IGorKykge1xuICAgICAgbGF5ZXIgPSByZWZbal07XG4gICAgICByZXN1bHRzLnB1c2gobGF5ZXIuY2FjaGUoKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIE1vdmllLnByb3RvdHlwZS51bkNhY2hlQWxsTGF5ZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGosIGxheWVyLCBsZW4sIHJlZiwgcmVzdWx0cztcbiAgICByZWYgPSB0aGlzLmxheWVycztcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChqID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICBsYXllciA9IHJlZltqXTtcbiAgICAgIHJlc3VsdHMucHVzaChsYXllci51bmNhY2hlKCkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBNb3ZpZS5wcm90b3R5cGUuY2FjaGVMYXllciA9IGZ1bmN0aW9uKGRlcHRoKSB7XG4gICAgcmV0dXJuIHRoaXMubGF5ZXJzW2RlcHRoXS5jYWNoZSgpO1xuICB9O1xuXG4gIE1vdmllLnByb3RvdHlwZS51bmNhY2hlTGF5ZXIgPSBmdW5jdGlvbihkZXB0aCkge1xuICAgIHJldHVybiB0aGlzLmxheWVyc1tkZXB0aF0udW5jYWNoZSgpO1xuICB9O1xuXG4gIE1vdmllLnByb3RvdHlwZS5ibHVyQWxsTGF5ZXJzQmVsb3cgPSBmdW5jdGlvbihsYXllckRlcHRoKSB7XG4gICAgdmFyIGksIGosIHJlZiwgcmVzdWx0cztcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChpID0gaiA9IDAsIHJlZiA9IGxheWVyRGVwdGggLSAxOyAwIDw9IHJlZiA/IGogPD0gcmVmIDogaiA+PSByZWY7IGkgPSAwIDw9IHJlZiA/ICsraiA6IC0taikge1xuICAgICAgcmVzdWx0cy5wdXNoKHRoaXMubGF5ZXJzW2ldLmFkZEZpbHRlcihcImJsdWVCbHVyXCIpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgTW92aWUucHJvdG90eXBlLnVuYmx1ckFsbExBeWVycyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBqLCBsYXllciwgbGVuLCByZWYsIHJlc3VsdHM7XG4gICAgcmVmID0gdGhpcy5sYXllcnM7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoaiA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGogPCBsZW47IGorKykge1xuICAgICAgbGF5ZXIgPSByZWZbal07XG4gICAgICByZXN1bHRzLnB1c2gobGF5ZXIucmVtb3ZlRmlsdGVycygpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgTW92aWUucHJvdG90eXBlLmdldEdsb2JhbFBvcyA9IGZ1bmN0aW9uKGl0ZW1JZCkge1xuICAgIHZhciBiQm94LCBvYmosIHgsIHh0cmFYLCB4dHJhWSwgeTtcbiAgICBiQm94ID0gJChcIiNcIiArIGl0ZW1JZClbMF0uZ2V0QkJveCgpO1xuICAgIHh0cmFYID0gdGhpcy50cmFuc2Zvcm1PcmlnaW4ueCAqICh0aGlzLnNjYWxlIC0gMSkgLSB0aGlzLnRyYW5zZm9ybU9yaWdpbi54O1xuICAgIHggPSAoYkJveC54ICogdGhpcy5zY2FsZSkgLSAodGhpcy50cmFuc2Zvcm1PcmlnaW4ueCArIHh0cmFYKTtcbiAgICB4dHJhWSA9IHRoaXMudHJhbnNmb3JtT3JpZ2luLnkgKiAodGhpcy5zY2FsZSAtIDEpIC0gdGhpcy50cmFuc2Zvcm1PcmlnaW4ueTtcbiAgICB5ID0gKGJCb3gueSAqIHRoaXMuc2NhbGUpIC0gKHRoaXMudHJhbnNmb3JtT3JpZ2luLnkgKyB4dHJhWSk7XG4gICAgcmV0dXJuIG9iaiA9IHtcbiAgICAgIHg6IHgsXG4gICAgICB5OiB5LFxuICAgICAgdzogYkJveC53aWR0aCxcbiAgICAgIGg6IGJCb3guaGVpZ2h0XG4gICAgfTtcbiAgfTtcblxuICBNb3ZpZS5wcm90b3R5cGUuZ2V0TG9jYWxQb3MgPSBmdW5jdGlvbihpdGVtSWQpIHtcbiAgICB2YXIgYkJveCwgb2JqO1xuICAgIGJCb3ggPSAkKFwiI1wiICsgaXRlbUlkKVswXS5nZXRCQm94KCk7XG4gICAgcmV0dXJuIG9iaiA9IHtcbiAgICAgIHg6IGJCb3gueCxcbiAgICAgIHk6IGJCb3gueSxcbiAgICAgIHc6IGJCb3gud2lkdGgsXG4gICAgICBoOiBiQm94LmhlaWdodFxuICAgIH07XG4gIH07XG5cbiAgTW92aWUucHJvdG90eXBlLmRlaHlkcmF0ZUxheWVyU3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaiwgbGF5ZXIsIGxheWVycywgbGVuLCByZWY7XG4gICAgbGF5ZXJzID0gW107XG4gICAgcmVmID0gdGhpcy5sYXllcnM7XG4gICAgZm9yIChqID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICBsYXllciA9IHJlZltqXTtcbiAgICAgIGxheWVycy5wdXNoKGxheWVyLnByaXN0aW5lTGF5ZXJEYXRhKTtcbiAgICB9XG4gICAgcmV0dXJuIGxheWVycztcbiAgfTtcblxuICBNb3ZpZS5wcm90b3R5cGUucmVoeWRyYXRlTGF5ZXJTdGF0ZSA9IGZ1bmN0aW9uKGxheWVycykge1xuICAgIHZhciBqLCBsYXllckRhdGEsIGxlbiwgcmVzdWx0cztcbiAgICB0aGlzLnJlc2V0KCk7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoaiA9IDAsIGxlbiA9IGxheWVycy5sZW5ndGg7IGogPCBsZW47IGorKykge1xuICAgICAgbGF5ZXJEYXRhID0gbGF5ZXJzW2pdO1xuICAgICAgaWYgKGxheWVyRGF0YSAhPSBudWxsKSB7XG4gICAgICAgIGxheWVyRGF0YS5qdW1wVG9FbmQgPSB0cnVlO1xuICAgICAgICByZXN1bHRzLnB1c2godGhpcy5hZGRMYXllcihsYXllckRhdGEpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdHMucHVzaCh2b2lkIDApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBNb3ZpZS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBqLCBsZW4sIHJlZiwgcmVzdWx0cywgdG9rZW47XG4gICAgdGhpcy5yZXNldCgpO1xuICAgIHJlZiA9IHRoaXMudG9rZW5zO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGogPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgIHRva2VuID0gcmVmW2pdO1xuICAgICAgcmVzdWx0cy5wdXNoKFB1YlN1Yi51bnN1YnNjcmliZSh0b2tlbikpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICByZXR1cm4gTW92aWU7XG5cbn0pKCk7XG4iLCJ2YXIgU1ZHQW5pbWF0aW9uLFxuICBiaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBTVkdBbmltYXRpb24gPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIFNWR0FuaW1hdGlvbihlbCwganNvbiwgZGF0YSkge1xuICAgIHRoaXMucGxheSA9IGJpbmQodGhpcy5wbGF5LCB0aGlzKTtcbiAgICBpZiAoZGF0YS5sb29wID09IG51bGwpIHtcbiAgICAgIGRhdGEubG9vcCA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLmFuaW1hdGlvbiA9IGJvZHltb3Zpbi5sb2FkQW5pbWF0aW9uKHtcbiAgICAgIHdyYXBwZXI6IGVsWzBdLFxuICAgICAgYW5pbVR5cGU6ICdzdmcnLFxuICAgICAgbG9vcDogZGF0YS5sb29wLFxuICAgICAgcHJlcmVuZGVyOiB0cnVlLFxuICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgcGF0aDoganNvblxuICAgIH0pO1xuICAgIGlmIChkYXRhLm5hdGl2ZUV2ZW50cyAhPSBudWxsKSB7XG4gICAgICB0aGlzLmFkZE5hdGl2ZUV2ZW50cyhkYXRhLm5hdGl2ZUV2ZW50cyk7XG4gICAgfVxuICAgIGlmIChkYXRhLnZjcikge1xuICAgICAgUHViU3ViLnB1Ymxpc2goJ3Zjci1jb250cm9sLnNob3cnLCB0aGlzKTtcbiAgICB9XG4gICAgdGhpcy5hbmltYXRpb24uYWRkRXZlbnRMaXN0ZW5lcignZGF0YV9yZWFkeScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoZGF0YS5qdW1wVG9FbmQgIT0gbnVsbCkge1xuICAgICAgICAgIF90aGlzLmFuaW1hdGlvbi5zZXRDdXJyZW50UmF3RnJhbWVWYWx1ZShfdGhpcy5hbmltYXRpb24udG90YWxGcmFtZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChkYXRhLmRlbGF5ICE9IG51bGwpIHtcbiAgICAgICAgICAgIGFyaXN0b3RsZS50aW1lb3V0KF90aGlzLnBsYXksIGRhdGEuZGVsYXkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBfdGhpcy5wbGF5KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcy5hZGRFdmVudHMoZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgfVxuXG4gIFNWR0FuaW1hdGlvbi5wcm90b3R5cGUuYWRkRXZlbnRzID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciBldmVudCwgaSwgbGVuLCByZWYsIHJlc3VsdHM7XG4gICAgaWYgKGRhdGEuZXZlbnRzICE9IG51bGwpIHtcbiAgICAgIHJlZiA9IGRhdGEuZXZlbnRzO1xuICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGV2ZW50ID0gcmVmW2ldO1xuICAgICAgICByZXN1bHRzLnB1c2godGhpcy5hbmltYXRpb24uYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgX3RoaXMuYW5pbWF0aW9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQpO1xuICAgICAgICAgICAgcmV0dXJuIFB1YlN1Yi5wdWJsaXNoKFwibGF5ZXIuXCIgKyBkYXRhLmRlcHRoICsgXCIuXCIgKyBldmVudCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSkodGhpcykpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH1cbiAgfTtcblxuICBTVkdBbmltYXRpb24ucHJvdG90eXBlLmFkZE5hdGl2ZUV2ZW50cyA9IGZ1bmN0aW9uKGV2ZW50cykge1xuICAgIHZhciBjYiwgZXZlbnQsIHJlc3VsdHM7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoZXZlbnQgaW4gZXZlbnRzKSB7XG4gICAgICBjYiA9IGV2ZW50c1tldmVudF07XG4gICAgICByZXN1bHRzLnB1c2godGhpcy5hbmltYXRpb24uYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgY2IpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgU1ZHQW5pbWF0aW9uLnByb3RvdHlwZS5hZGRPbkNvbXBsZXRlID0gZnVuY3Rpb24ob25Db21wbGV0ZSkge1xuICAgIHJldHVybiB0aGlzLmFuaW1hdGlvbi5hZGRFdmVudExpc3RlbmVyKFwiY29tcGxldGVcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBvbkNvbXBsZXRlKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgfTtcblxuICBTVkdBbmltYXRpb24ucHJvdG90eXBlLnBsYXkgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5hbmltYXRpb24ucGxheSgpO1xuICB9O1xuXG4gIFNWR0FuaW1hdGlvbi5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmFuaW1hdGlvbi5zdG9wKCk7XG4gIH07XG5cbiAgU1ZHQW5pbWF0aW9uLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGVycm9yLCBlcnJvcjE7XG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uICE9IG51bGwpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuYW5pbWF0aW9uLmRlc3Ryb3koKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yMSkge1xuICAgICAgICBlcnJvciA9IGVycm9yMTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5hbmltYXRpb24ucmVuZGVyZXIpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmFuaW1hdGlvbi5yZW5kZXJlci5sYXllcnMpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuaW50ZXJ2YWwgIT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgU1ZHQW5pbWF0aW9uLnByb3RvdHlwZS50cmFjZUZyYW1lcyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhfdGhpcy5hbmltYXRpb24uY3VycmVudFJhd0ZyYW1lLCBfdGhpcy5hbmltYXRpb24uY3VycmVudEZyYW1lLCBfdGhpcy5hbmltYXRpb24udG90YWxGcmFtZXMpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSwgNTAwKTtcbiAgfTtcblxuICByZXR1cm4gU1ZHQW5pbWF0aW9uO1xuXG59KSgpO1xuIiwidmFyIENhbGxTaWduU2VsZWN0LCBDb21wb25lbnQsXG4gIGV4dGVuZCA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoaGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfSxcbiAgaGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5Db21wb25lbnQgPSByZXF1aXJlKCdzbGlkZS11eC9jb21wb25lbnRzL2NvbXBvbmVudCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbGxTaWduU2VsZWN0ID0gKGZ1bmN0aW9uKHN1cGVyQ2xhc3MpIHtcbiAgZXh0ZW5kKENhbGxTaWduU2VsZWN0LCBzdXBlckNsYXNzKTtcblxuICBmdW5jdGlvbiBDYWxsU2lnblNlbGVjdCgkZWwsIGRhdGEpIHtcbiAgICBDYWxsU2lnblNlbGVjdC5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCBkYXRhKTtcbiAgICB0aGlzLiRub2RlID0gJChqYWRlVGVtcGxhdGVbJ3NsaWRlLXV4L2NvbXBvbmVudHMvY2FsbC1zaWduLXNlbGVjdCddKGRhdGEpKTtcbiAgICB0aGlzLnN1cGVySW5pdCgkZWwsIHRoaXMuJG5vZGUsIGRhdGEpO1xuICAgIHRoaXMuJHR4dCA9ICQoJyNjYWxsc2lnbi10eHQnLCB0aGlzLiRub2RlKTtcbiAgICAkKCcjZ2VuZXJhdGUtY2FsbHNpZ24nLCB0aGlzLiRub2RlKS5vbignY2xpY2snLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmdlbmVyYXRlQ2FsbFNpZ24oKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ3NhdmUuY2FsbHNpZ24nLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5zYXZlQ2FsbFNpZ24oKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9XG5cbiAgQ2FsbFNpZ25TZWxlY3QucHJvdG90eXBlLmdlbmVyYXRlQ2FsbFNpZ24gPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbmlja3M7XG4gICAgbmlja3MgPSBbXCJBY2VcIiwgXCJBZnRlcnNob2NrXCIsIFwiQmFsZHlcIiwgXCJCYW0tQmFtXCIsIFwiQmVhclwiLCBcIkJlZXRsZVwiLCBcIkJpZ2Zvb3RcIiwgXCJCaXpvXCIsIFwiQm9uem9cIiwgXCJCb29tLUJvb21cIiwgXCJCb3dzZXJcIiwgXCJCdWNrXCIsIFwiQnVnc1wiLCBcIkJ1bGxcIiwgXCJDYWxpY29cIiwgXCJEZWFkZXllXCIsIFwiRHV0Y2hcIiwgXCJHaG9zdFwiLCBcIkdyaXRzXCIsIFwiSGFtbWVyXCIsIFwiSGFyZGNvcmUgNTRcIiwgXCJIYXdrXCIsIFwiSGF3a2V5ZVwiLCBcIkhvbGx5d29vZFwiLCBcIkh1ZXlcIiwgXCJLcmF6eVwiLCBcIkx1Y2t5XCIsIFwiTWFkIERvZ1wiLCBcIlBpbmVhcHBsZVwiLCBcIlBvcHNcIiwgXCJSYWRhclwiLCBcIlJlYmVsXCIsIFwiUmVkXCIsIFwiU2hvcnR5XCIsIFwiU3Bhcmt5XCIsIFwiU3Bvb2t5XCIsIFwiVGFja1wiLCBcIkIuQS5cIiwgXCJUZXhcIiwgXCJUaWdlclwiLCBcIlRpbnlcIiwgXCJXaXphcmRcIl07XG4gICAgdGhpcy5jYWxsU2lnbiA9IG5pY2tzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG5pY2tzLmxlbmd0aCldO1xuICAgIHJldHVybiB0aGlzLiR0eHQudmFsKHRoaXMuY2FsbFNpZ24pO1xuICB9O1xuXG4gIENhbGxTaWduU2VsZWN0LnByb3RvdHlwZS5zYXZlQ2FsbFNpZ24gPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgY2FsbFNpZ247XG4gICAgY2FsbFNpZ24gPSB0aGlzLiR0eHQudmFsKCk7XG4gICAgaWYgKChjYWxsU2lnbiAhPSBudWxsID8gY2FsbFNpZ24ubGVuZ3RoIDogdm9pZCAwKSA+IDEpIHtcbiAgICAgIGFyaXN0b3RsZS5nbG9iYWxzLnNldCgnY2FsbFNpZ24nLCBjYWxsU2lnbik7XG4gICAgICBQdWJTdWIucHVibGlzaCgnY2FsbHNpZ24uc2VsZWN0ZWQnLCBjYWxsU2lnbik7XG4gICAgICByZXR1cm4gUHViU3ViLnB1Ymxpc2goJ3NsaWRlcy5uZXh0Jyk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBDYWxsU2lnblNlbGVjdDtcblxufSkoQ29tcG9uZW50KTtcbiIsInZhciBDb21wb25lbnQ7XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50ID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBDb21wb25lbnQoZGF0YSkge1xuICAgIHRoaXMucmVwbGFjZVZhcnMoZGF0YSk7XG4gIH1cblxuICBDb21wb25lbnQucHJvdG90eXBlLnN1cGVySW5pdCA9IGZ1bmN0aW9uKCRlbCwgJG5vZGUsIGRhdGEpIHtcbiAgICB0aGlzLiRub2RlID0gJG5vZGU7XG4gICAgJGVsLmFwcGVuZCh0aGlzLiRub2RlKTtcbiAgICBzaGFkb3dJY29uc0luc3RhbmNlLnN2Z1JlcGxhY2VXaXRoU3RyaW5nKHB4U3ZnSWNvblN0cmluZywgdGhpcy4kbm9kZSk7XG4gICAgcmV0dXJuIHRoaXMubGlzdGVuRm9yTGFiZWxIb3ZlcnMoZGF0YSk7XG4gIH07XG5cbiAgQ29tcG9uZW50LnByb3RvdHlwZS5yZXBsYWNlVmFycyA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2YXIgaSwga2V5LCBsZW4sIHJlZiwgcmVzdWx0cztcbiAgICBpZiAoZGF0YS5yZXBsYWNlVmFycyA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJlZiA9IGRhdGEucmVwbGFjZVZhcnM7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAga2V5ID0gcmVmW2ldO1xuICAgICAgcmVzdWx0cy5wdXNoKGRhdGFba2V5XSA9IGRhdGFba2V5XS5yZXBsYWNlKC9cXCR7KFxcdyspfS9nLCBmdW5jdGlvbihtYXRjaCwgY2FwdHVyZTEpIHtcbiAgICAgICAgcmV0dXJuIGFyaXN0b3RsZS5nbG9iYWxzLmdldChjYXB0dXJlMSk7XG4gICAgICB9KSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIENvbXBvbmVudC5wcm90b3R5cGUubGlzdGVuRm9yTGFiZWxIb3ZlcnMgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyICRhO1xuICAgIGlmIChkYXRhLmhhc0xhYmVscyA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghZGF0YS5oYXNMYWJlbHMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgJGEgPSAkKFwiYVtkYXRhLWxhYmVsXVwiLCB0aGlzLiRub2RlKTtcbiAgICAkYS5hZGRDbGFzcyhcImxhYmVsLXRyaWdnZXJcIik7XG4gICAgJGEub24oXCJtb3VzZW92ZXJcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuYWRkTGFiZWwoZSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICByZXR1cm4gJGEub24oXCJtb3VzZW91dFwiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5yZW1vdmVMYWJlbChlKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9O1xuXG4gIENvbXBvbmVudC5wcm90b3R5cGUuYWRkTGFiZWwgPSBmdW5jdGlvbihlKSB7XG4gICAgdmFyICRlbCwgY29uZmlnRGF0YSwgdGltZW91dElkO1xuICAgICRlbCA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICB0aW1lb3V0SWQgPSBcInRpbWVvdXRcIiArICgkZWwuYXR0cignZGF0YS1sYWJlbCcpKTtcbiAgICBjbGVhclRpbWVvdXQodGhpc1t0aW1lb3V0SWRdKTtcbiAgICBjb25maWdEYXRhID0gYXJpc3RvdGxlLmxhYmVsc1skZWwuYXR0cignZGF0YS1sYWJlbCcpXTtcbiAgICBjb25maWdEYXRhLmNzc0NsYXNzID0gXCJhcnJvdy1yaWdodCBib3hcIjtcbiAgICByZXR1cm4gUHViU3ViLnB1Ymxpc2goJ2xhYmVsLmF0dGFjaCcsIHtcbiAgICAgIGVsOiAkZWwsXG4gICAgICBjb250ZW50OiBjb25maWdEYXRhXG4gICAgfSk7XG4gIH07XG5cbiAgQ29tcG9uZW50LnByb3RvdHlwZS5yZW1vdmVMYWJlbCA9IGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgJGVsLCB0aW1lb3V0SWQ7XG4gICAgJGVsID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuICAgIHRpbWVvdXRJZCA9IFwidGltZW91dFwiICsgKCRlbC5hdHRyKCdkYXRhLWxhYmVsJykpO1xuICAgIHJldHVybiB0aGlzW3RpbWVvdXRJZF0gPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgJGVsID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuICAgICAgcmV0dXJuIFB1YlN1Yi5wdWJsaXNoKCdsYWJlbC5kZXN0cm95JywgJGVsKTtcbiAgICB9LCAxMDApO1xuICB9O1xuXG4gIENvbXBvbmVudC5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRub2RlLnJlbW92ZSgpO1xuICB9O1xuXG4gIHJldHVybiBDb21wb25lbnQ7XG5cbn0pKCk7XG4iLCJ2YXIgQ29tcG9uZW50LCBEZWZlbmRlckNhcmRzLFxuICBiaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfSxcbiAgZXh0ZW5kID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChoYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9LFxuICBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbkNvbXBvbmVudCA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvY29tcG9uZW50Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGVmZW5kZXJDYXJkcyA9IChmdW5jdGlvbihzdXBlckNsYXNzKSB7XG4gIGV4dGVuZChEZWZlbmRlckNhcmRzLCBzdXBlckNsYXNzKTtcblxuICBmdW5jdGlvbiBEZWZlbmRlckNhcmRzKCRlbCwgZGF0YTEpIHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhMTtcbiAgICB0aGlzLnNob3dDYXJkID0gYmluZCh0aGlzLnNob3dDYXJkLCB0aGlzKTtcbiAgICBEZWZlbmRlckNhcmRzLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIGRhdGEpO1xuICAgIHRoaXMudG90YWxDYXJkc1ZpZXdlZCA9IDA7XG4gICAgdGhpcy4kbm9kZSA9ICQoamFkZVRlbXBsYXRlWydzbGlkZS11eC9jb21wb25lbnRzL2RlZmVuZGVyLWNhcmRzJ10oe30pKTtcbiAgICB0aGlzLnN1cGVySW5pdCgkZWwsIHRoaXMuJG5vZGUsIGRhdGEpO1xuICAgIHRoaXMuY3JlYXRlRGVmZW5kZXJzKHRoaXMuZGF0YS5kZWZlbmRlcnMpO1xuICB9XG5cbiAgRGVmZW5kZXJDYXJkcy5wcm90b3R5cGUuY3JlYXRlRGVmZW5kZXJzID0gZnVuY3Rpb24oZGVmZW5kZXJzKSB7XG4gICAgdmFyIGRhdGEsIGRlZmVuZGVyRGF0YSwgZGVmZW5kZXJJZCwgcmVzdWx0cztcbiAgICB0aGlzLmdob3N0cyA9IFtdO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGRlZmVuZGVySWQgaW4gZGVmZW5kZXJzKSB7XG4gICAgICBkZWZlbmRlckRhdGEgPSBkZWZlbmRlcnNbZGVmZW5kZXJJZF07XG4gICAgICBkYXRhID0ge1xuICAgICAgICBpZDogZGVmZW5kZXJJZCxcbiAgICAgICAgZXZlbnRzOiB7XG4gICAgICAgICAgY2xpY2s6IChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGlkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdGhpcy5zaG93Q2FyZChpZCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pKHRoaXMpXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB0aGlzLmdob3N0cy5wdXNoKGRlZmVuZGVySWQpO1xuICAgICAgcmVzdWx0cy5wdXNoKFB1YlN1Yi5wdWJsaXNoKCdnaG9zdHV4LmFkZCcsIGRhdGEpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgRGVmZW5kZXJDYXJkcy5wcm90b3R5cGUuc2hvd0NhcmQgPSBmdW5jdGlvbihkZWZlbmRlcklkKSB7XG4gICAgdmFyIGRhdGE7XG4gICAgdGhpcy50b3RhbENhcmRzVmlld2VkKys7XG4gICAgaWYgKHRoaXMuJGNhcmQgIT0gbnVsbCkge1xuICAgICAgdGhpcy5yZW1vdmVDdXJyZW50Q2FyZCgpO1xuICAgIH1cbiAgICBkYXRhID0gdGhpcy5kYXRhLmRlZmVuZGVyc1tkZWZlbmRlcklkXTtcbiAgICB0aGlzLiRjYXJkID0gJChqYWRlVGVtcGxhdGVbJ3NsaWRlLXV4L2NvbXBvbmVudHMvZGVmZW5kZXItY2FyZCddKGRhdGEpKTtcbiAgICBzaGFkb3dJY29uc0luc3RhbmNlLnN2Z1JlcGxhY2VXaXRoU3RyaW5nKHB4U3ZnSWNvblN0cmluZywgdGhpcy4kY2FyZCk7XG4gICAgJChcIi5nb3QtaXQtYnRuXCIsIHRoaXMuJGNhcmQpLm9uKFwiY2xpY2tcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgICByZXR1cm4gX3RoaXMucmVtb3ZlQ3VycmVudENhcmQoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIGlmICh0aGlzLnRvdGFsQ2FyZHNWaWV3ZWQgPT09IDIpIHtcbiAgICAgIFB1YlN1Yi5wdWJsaXNoKCdjb250aW51ZS5zaG93Jyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLiRub2RlLmFwcGVuZCh0aGlzLiRjYXJkKTtcbiAgfTtcblxuICBEZWZlbmRlckNhcmRzLnByb3RvdHlwZS5yZW1vdmVDdXJyZW50Q2FyZCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRjYXJkLnJlbW92ZSgpO1xuICB9O1xuXG4gIERlZmVuZGVyQ2FyZHMucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZ2hvc3RJZCwgaSwgbGVuLCByZWY7XG4gICAgcmVmID0gdGhpcy5naG9zdHM7XG4gICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBnaG9zdElkID0gcmVmW2ldO1xuICAgICAgUHViU3ViLnB1Ymxpc2goJ2dob3N0dXgucmVtb3ZlJywgZ2hvc3RJZCk7XG4gICAgfVxuICAgIHJldHVybiBEZWZlbmRlckNhcmRzLl9fc3VwZXJfXy5kZXN0cm95LmNhbGwodGhpcyk7XG4gIH07XG5cbiAgcmV0dXJuIERlZmVuZGVyQ2FyZHM7XG5cbn0pKENvbXBvbmVudCk7XG4iLCJ2YXIgQ29tcG9uZW50LCBEaWFsb2d1ZVBhZ2UsXG4gIGV4dGVuZCA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoaGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfSxcbiAgaGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5Db21wb25lbnQgPSByZXF1aXJlKCdzbGlkZS11eC9jb21wb25lbnRzL2NvbXBvbmVudCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERpYWxvZ3VlUGFnZSA9IChmdW5jdGlvbihzdXBlckNsYXNzKSB7XG4gIGV4dGVuZChEaWFsb2d1ZVBhZ2UsIHN1cGVyQ2xhc3MpO1xuXG4gIGZ1bmN0aW9uIERpYWxvZ3VlUGFnZSgkZWwsIGRhdGEpIHtcbiAgICBEaWFsb2d1ZVBhZ2UuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgZGF0YSk7XG4gICAgdGhpcy5jb25maWdEYXRhKGRhdGEpO1xuICAgIHRoaXMuJG5vZGUgPSAkKGphZGVUZW1wbGF0ZVsnc2xpZGUtdXgvY29tcG9uZW50cy9kaWFsb2d1ZS9kaWFsb2d1ZS1wYWdlcy9iYXNlJ10oZGF0YSkpO1xuICAgIHRoaXMuc3VwZXJJbml0KCRlbCwgdGhpcy4kbm9kZSwgZGF0YSk7XG4gICAgaWYgKGRhdGEudGhlbWUgIT0gbnVsbCkge1xuICAgICAgdGhpcy4kbm9kZS5hZGRDbGFzcyhkYXRhLnRoZW1lKTtcbiAgICB9XG4gICAgdGhpcy5jb25maWdCdXR0b25zKHRoaXMuJG5vZGUsIGRhdGEpO1xuICAgICQoXCJzdmdcIiwgdGhpcy4kbm9kZSkuZWFjaChmdW5jdGlvbihpLCBlbCkge1xuICAgICAgcmV0dXJuIGVsLnNldEF0dHJpYnV0ZShcInByZXNlcnZlQXNwZWN0UmF0aW9cIiwgXCJub25lXCIpO1xuICAgIH0pO1xuICAgICQoXCIuYnRuXCIpLm9uKCdjbGljaycsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdmFyIGJ0biwgaWQsIGosIGxlbiwgcmVmO1xuICAgICAgICBpZCA9IGUuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoXCJpZFwiKTtcbiAgICAgICAgcmVmID0gZGF0YS5idG5zO1xuICAgICAgICBmb3IgKGogPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgICAgICBidG4gPSByZWZbal07XG4gICAgICAgICAgaWYgKGJ0bi5pZCA9PT0gaWQpIHtcbiAgICAgICAgICAgIGFyaXN0b3RsZS5jb21tYW5kZXJbXCJkb1wiXShidG4uY2xpY2spO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH1cblxuICBEaWFsb2d1ZVBhZ2UucHJvdG90eXBlLmNvbmZpZ0RhdGEgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyIGJ0biwgY291bnQsIGosIGxlbiwgcmVmLCByZXN1bHRzO1xuICAgIGNvdW50ID0gMDtcbiAgICByZWYgPSBkYXRhLmJ0bnM7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoaiA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGogPCBsZW47IGorKykge1xuICAgICAgYnRuID0gcmVmW2pdO1xuICAgICAgcmVzdWx0cy5wdXNoKGJ0bi5pZCA9IFwiYnRuXCIgKyAoY291bnQrKykpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBEaWFsb2d1ZVBhZ2UucHJvdG90eXBlLmNvbmZpZ0J1dHRvbnMgPSBmdW5jdGlvbihlbCwgZGF0YSkge1xuICAgIGlmIChkYXRhLmJ0bkNvbmZpZyA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChkYXRhLmJ0bkNvbmZpZy53aWR0aCAhPSBudWxsKSB7XG4gICAgICAkKFwiLmJ0blwiLCBlbCkuY3NzKHtcbiAgICAgICAgd2lkdGg6IGRhdGEuYnRuQ29uZmlnLndpZHRoICsgXCJweFwiXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGRhdGEuYnRuQ29uZmlnLmhlaWdodCAhPSBudWxsKSB7XG4gICAgICAkKFwiLmJ0blwiLCBlbCkuY3NzKHtcbiAgICAgICAgaGVpZ2h0OiBkYXRhLmJ0bkNvbmZpZy5oZWlnaHQgKyBcInB4XCJcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZGF0YS5idG5Db25maWcuYm90dG9tICE9IG51bGwpIHtcbiAgICAgICQoXCIuYnRuLXdyYXBwZXJcIiwgZWwpLmNzcyh7XG4gICAgICAgIFwibWFyZ2luLWJvdHRvbVwiOiBkYXRhLmJ0bkNvbmZpZy5ib3R0b20gKyBcInB4XCJcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoZGF0YS5idG5Db25maWcubGluZXMpIHtcbiAgICAgIHJldHVybiAkKFwiLmJ0bi13cmFwcGVyXCIpLmFkZENsYXNzKCdsaW5lcycpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gRGlhbG9ndWVQYWdlO1xuXG59KShDb21wb25lbnQpO1xuIiwidmFyIENvbXBvbmVudCwgRGlhbG9ndWUsXG4gIGV4dGVuZCA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoaGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfSxcbiAgaGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5Db21wb25lbnQgPSByZXF1aXJlKCdzbGlkZS11eC9jb21wb25lbnRzL2NvbXBvbmVudCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IERpYWxvZ3VlID0gKGZ1bmN0aW9uKHN1cGVyQ2xhc3MpIHtcbiAgZXh0ZW5kKERpYWxvZ3VlLCBzdXBlckNsYXNzKTtcblxuICBmdW5jdGlvbiBEaWFsb2d1ZSgkZWwsIGRhdGEpIHtcbiAgICBEaWFsb2d1ZS5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCBkYXRhKTtcbiAgICB0aGlzLiRub2RlID0gJChqYWRlVGVtcGxhdGVbJ3NsaWRlLXV4L2NvbXBvbmVudHMvZGlhbG9ndWUvZGlhbG9ndWUnXShkYXRhKSk7XG4gICAgdGhpcy5zdXBlckluaXQoJGVsLCB0aGlzLiRub2RlLCBkYXRhKTtcbiAgICAkKCcuYnRuJywgdGhpcy4kbm9kZSkub24oXCJjbGlja1wiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGFyaXN0b3RsZS5jb21tYW5kZXJbXCJkb1wiXShkYXRhLmJ0bi5hY3Rpb24pO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH1cblxuICByZXR1cm4gRGlhbG9ndWU7XG5cbn0pKENvbXBvbmVudCk7XG4iLCJ2YXIgQ29tcG9uZW50LCBEdXRpZXMsIFNlcXVlbmNlLFxuICBleHRlbmQgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKGhhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH0sXG4gIGhhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuQ29tcG9uZW50ID0gcmVxdWlyZSgnc2xpZGUtdXgvY29tcG9uZW50cy9jb21wb25lbnQnKTtcblxuU2VxdWVuY2UgPSByZXF1aXJlKCdtaXNjL3NlcXVlbmNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRHV0aWVzID0gKGZ1bmN0aW9uKHN1cGVyQ2xhc3MpIHtcbiAgZXh0ZW5kKER1dGllcywgc3VwZXJDbGFzcyk7XG5cbiAgZnVuY3Rpb24gRHV0aWVzKCRlbCwgZGF0YSkge1xuICAgIER1dGllcy5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCBkYXRhKTtcbiAgICB0aGlzLm51bUFja25vd2xlZGdlZER1dGllcyA9IDA7XG4gICAgdGhpcy5hY2tub3dsZWRnZWREdXRpZXMgPSB7fTtcbiAgICB0aGlzLmdldERhdGEoZGF0YS5kZWZpbml0aW9uKTtcbiAgICB0aGlzLiRub2RlID0gJChcIjxkaXYgY2xhc3M9J2R1dGllcycvPlwiKTtcbiAgICB0aGlzLnN1cGVySW5pdCgkZWwsIHRoaXMuJG5vZGUsIGRhdGEpO1xuICB9XG5cbiAgRHV0aWVzLnByb3RvdHlwZS5idWlsZCA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2YXIgJGh0bWw7XG4gICAgdGhpcy5jcmVhdGVEdXR5SWRzKGRhdGEuZHV0aWVzKTtcbiAgICB0aGlzLmR1dGllcyA9IG5ldyBTZXF1ZW5jZShkYXRhLmR1dGllcyk7XG4gICAgJGh0bWwgPSAkKGphZGVUZW1wbGF0ZVsnc2xpZGUtdXgvY29tcG9uZW50cy9kdXRpZXMnXShkYXRhKSk7XG4gICAgdGhpcy4kbm9kZS5hcHBlbmQoJGh0bWwpO1xuICAgIHRoaXMuJGNvbnRlbnQgPSAkKFwiLmNvbnRlbnRcIiwgdGhpcy4kbm9kZSk7XG4gICAgc2hhZG93SWNvbnNJbnN0YW5jZS5zdmdSZXBsYWNlV2l0aFN0cmluZyhweFN2Z0ljb25TdHJpbmcsIHRoaXMuJG5vZGUpO1xuICAgIHRoaXMuJGR1dHlCdXR0b25zID0gJChcIi5kdXR5LWJ0blwiLCB0aGlzLiRub2RlKTtcbiAgICB0aGlzLiRkdXR5QnV0dG9ucy5vbihcImNsaWNrXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmFjdGl2YXRlRHV0eShlLmN1cnJlbnRUYXJnZXQsIGUuY3VycmVudFRhcmdldC5nZXRBdHRyaWJ1dGUoJ2lkJykpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgcmV0dXJuICQodGhpcy4kZHV0eUJ1dHRvbnNbMF0pLnRyaWdnZXIoXCJjbGlja1wiKTtcbiAgfTtcblxuICBEdXRpZXMucHJvdG90eXBlLnNldFVzZXJIdG1sID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciAkdXNlckNvbnRlbnQ7XG4gICAgdGhpcy4kY29udGVudC5lbXB0eSgpO1xuICAgICR1c2VyQ29udGVudCA9ICQoamFkZVRlbXBsYXRlWydzbGlkZS11eC9jb21wb25lbnRzL2R1dHktZGV0YWlscyddKGRhdGEpKTtcbiAgICB0aGlzLiRjb250ZW50LmFwcGVuZCgkdXNlckNvbnRlbnQpO1xuICAgIHNoYWRvd0ljb25zSW5zdGFuY2Uuc3ZnUmVwbGFjZVdpdGhTdHJpbmcocHhTdmdJY29uU3RyaW5nLCB0aGlzLiRub2RlKTtcbiAgICByZXR1cm4gJChcIiNhY2tub3dsZWRnZVwiLCAkdXNlckNvbnRlbnQpLm9uKFwiY2xpY2tcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5kdXR5QWNrbm93bGVkZ2VkKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgfTtcblxuICBEdXRpZXMucHJvdG90eXBlLmR1dHlBY2tub3dsZWRnZWQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZHV0eSwgaSwgbGVuLCByZWY7XG4gICAgaWYgKHRoaXMuYWNrbm93bGVkZ2VkRHV0aWVzW3RoaXMuZHV0aWVzLmN1cnJlbnRJdGVtKCkuaWRdID09IG51bGwpIHtcbiAgICAgIHRoaXMubnVtQWNrbm93bGVkZ2VkRHV0aWVzKys7XG4gICAgICB0aGlzLmFja25vd2xlZGdlZER1dGllc1t0aGlzLmR1dGllcy5jdXJyZW50SXRlbSgpLmlkXSA9IFwiXCI7XG4gICAgICB0aGlzLiRjdXJyZW50QWN0aXZlQnV0dG9uLmFkZENsYXNzKFwiY29tcGxldGVcIik7XG4gICAgfVxuICAgIGlmICh0aGlzLm51bUFja25vd2xlZGdlZER1dGllcyA9PT0gdGhpcy5kdXRpZXMudG90YWxJdGVtcykge1xuICAgICAgcmV0dXJuIFB1YlN1Yi5wdWJsaXNoKCdjb250aW51ZS5zaG93Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlZiA9IHRoaXMuZHV0aWVzLml0ZW1zO1xuICAgICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGR1dHkgPSByZWZbaV07XG4gICAgICAgIGlmICh0aGlzLmFja25vd2xlZGdlZER1dGllc1tkdXR5LmlkXSA9PSBudWxsKSB7XG4gICAgICAgICAgJChcIiNcIiArIGR1dHkuaWQsIHRoaXMuJG5vZGUpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIER1dGllcy5wcm90b3R5cGUuY3JlYXRlRHV0eUlkcyA9IGZ1bmN0aW9uKGR1dGllcykge1xuICAgIHZhciBjb3VudCwgZHV0eSwgaSwgbGVuLCByZXN1bHRzO1xuICAgIGNvdW50ID0gMDtcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChpID0gMCwgbGVuID0gZHV0aWVzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBkdXR5ID0gZHV0aWVzW2ldO1xuICAgICAgcmVzdWx0cy5wdXNoKGR1dHkuaWQgPSBcImR1dHlcIiArIChjb3VudCsrKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIER1dGllcy5wcm90b3R5cGUuYWN0aXZhdGVEdXR5ID0gZnVuY3Rpb24oZWwsIGlkKSB7XG4gICAgdGhpcy5kdXRpZXMuYWN0aXZhdGVJdGVtQnlQYXJhbSgnaWQnLCBpZCk7XG4gICAgdGhpcy4kY3VycmVudEFjdGl2ZUJ1dHRvbiA9ICQoZWwpO1xuICAgIHRoaXMuJGR1dHlCdXR0b25zLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgIHRoaXMuJGN1cnJlbnRBY3RpdmVCdXR0b24uYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgcmV0dXJuIHRoaXMuc2V0VXNlckh0bWwodGhpcy5kdXRpZXMuY3VycmVudEl0ZW0oKSk7XG4gIH07XG5cbiAgRHV0aWVzLnByb3RvdHlwZS5nZXREYXRhID0gZnVuY3Rpb24oanNvbkZpbGUpIHtcbiAgICByZXR1cm4gdGhpcy5sb2FkSnNvbihhcmlzdG90bGUuZ2V0QXNzZXRQYXRoKGpzb25GaWxlKSwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oanNvbikge1xuICAgICAgICB2YXIgb2JqO1xuICAgICAgICBvYmogPSBKU09OLnBhcnNlKGpzb24ucmVwbGFjZSgvKFxcclxcbnxcXG58XFxyKS9nbSwgXCJcIikpO1xuICAgICAgICByZXR1cm4gX3RoaXMuYnVpbGQob2JqKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9O1xuXG4gIER1dGllcy5wcm90b3R5cGUubG9hZEpzb24gPSBmdW5jdGlvbihwYXRoLCBvbkNvbXBsZXRlKSB7XG4gICAgdmFyIHhvYmo7XG4gICAgeG9iaiA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgIHhvYmoub3ZlcnJpZGVNaW1lVHlwZSgnYXBwbGljYXRpb24vanNvbicpO1xuICAgIHhvYmoub3BlbignR0VUJywgcGF0aCwgdHJ1ZSk7XG4gICAgeG9iai5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHhvYmoucmVhZHlTdGF0ZSA9PT0gNCAmJiB4b2JqLnN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgcmV0dXJuIG9uQ29tcGxldGUoeG9iai5yZXNwb25zZVRleHQpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pKHRoaXMpO1xuICAgIHJldHVybiB4b2JqLnNlbmQobnVsbCk7XG4gIH07XG5cbiAgcmV0dXJuIER1dGllcztcblxufSkoQ29tcG9uZW50KTtcbiIsInZhciBDb21wb25lbnQsIEVwaXNvZGVJbnRybyxcbiAgZXh0ZW5kID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChoYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9LFxuICBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbkNvbXBvbmVudCA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvY29tcG9uZW50Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRXBpc29kZUludHJvID0gKGZ1bmN0aW9uKHN1cGVyQ2xhc3MpIHtcbiAgZXh0ZW5kKEVwaXNvZGVJbnRybywgc3VwZXJDbGFzcyk7XG5cbiAgZnVuY3Rpb24gRXBpc29kZUludHJvKCRlbCwgZGF0YSkge1xuICAgIEVwaXNvZGVJbnRyby5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCBkYXRhKTtcbiAgICB0aGlzLiRub2RlID0gJChqYWRlVGVtcGxhdGVbJ3NsaWRlLXV4L2NvbXBvbmVudHMvZXBpc29kZS1pbnRybyddKGRhdGEpKTtcbiAgICB0aGlzLnN1cGVySW5pdCgkZWwsIHRoaXMuJG5vZGUsIGRhdGEpO1xuICB9XG5cbiAgcmV0dXJuIEVwaXNvZGVJbnRybztcblxufSkoQ29tcG9uZW50KTtcbiIsInZhciBDb21wb25lbnQsIEVwaXNvZGVPdXRybyxcbiAgZXh0ZW5kID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChoYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9LFxuICBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbkNvbXBvbmVudCA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvY29tcG9uZW50Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRXBpc29kZU91dHJvID0gKGZ1bmN0aW9uKHN1cGVyQ2xhc3MpIHtcbiAgZXh0ZW5kKEVwaXNvZGVPdXRybywgc3VwZXJDbGFzcyk7XG5cbiAgZnVuY3Rpb24gRXBpc29kZU91dHJvKCRlbCwgZGF0YSkge1xuICAgIEVwaXNvZGVPdXRyby5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCBkYXRhKTtcbiAgICB0aGlzLiRub2RlID0gJChqYWRlVGVtcGxhdGVbJ3NsaWRlLXV4L2NvbXBvbmVudHMvZXBpc29kZS1vdXRybyddKGRhdGEpKTtcbiAgICB0aGlzLnN1cGVySW5pdCgkZWwsIHRoaXMuJG5vZGUsIGRhdGEpO1xuICB9XG5cbiAgcmV0dXJuIEVwaXNvZGVPdXRybztcblxufSkoQ29tcG9uZW50KTtcbiIsInZhciBDb21wb25lbnQsIEV4cGxvcmVDYXJkcywgU2VxdWVuY2UsXG4gIGJpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9LFxuICBleHRlbmQgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKGhhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH0sXG4gIGhhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuQ29tcG9uZW50ID0gcmVxdWlyZSgnc2xpZGUtdXgvY29tcG9uZW50cy9jb21wb25lbnQnKTtcblxuU2VxdWVuY2UgPSByZXF1aXJlKCdtaXNjL3NlcXVlbmNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRXhwbG9yZUNhcmRzID0gKGZ1bmN0aW9uKHN1cGVyQ2xhc3MpIHtcbiAgZXh0ZW5kKEV4cGxvcmVDYXJkcywgc3VwZXJDbGFzcyk7XG5cbiAgZnVuY3Rpb24gRXhwbG9yZUNhcmRzKCRlbCwgZGF0YTEpIHtcbiAgICB0aGlzLmRhdGEgPSBkYXRhMTtcbiAgICB0aGlzLnNob3dDYXJkID0gYmluZCh0aGlzLnNob3dDYXJkLCB0aGlzKTtcbiAgICBFeHBsb3JlQ2FyZHMuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgdGhpcy5kYXRhKTtcbiAgICB0aGlzLnRvdGFsQ2FyZHNWaWV3ZWQgPSAwO1xuICAgIHRoaXMucmVxdWlyZWRDYXJkVmlld3MgPSB0aGlzLmRhdGFbXCJyZXF1aXJlZC12aWV3c1wiXTtcbiAgICB0aGlzLiRub2RlID0gJCgkLnBhcnNlSFRNTChcIjxkaXY+PC9kaXY+XCIpKTtcbiAgICB0aGlzLmNhcmRzID0gbmV3IFNlcXVlbmNlKHRoaXMuZGF0YS5jYXJkcyk7XG4gICAgdGhpcy5jcmVhdGVDYXJkR2hvc3RzKHRoaXMuZGF0YS5jYXJkcyk7XG4gICAgdGhpcy5zdXBlckluaXQoJGVsLCB0aGlzLiRub2RlLCB0aGlzLmRhdGEpO1xuICB9XG5cbiAgRXhwbG9yZUNhcmRzLnByb3RvdHlwZS5jcmVhdGVDYXJkR2hvc3RzID0gZnVuY3Rpb24oY2FyZHMpIHtcbiAgICB2YXIgY2FyZERhdGEsIGRhdGEsIGksIGxlbiwgcmVzdWx0cztcbiAgICB0aGlzLmdob3N0cyA9IFtdO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGkgPSAwLCBsZW4gPSBjYXJkcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgY2FyZERhdGEgPSBjYXJkc1tpXTtcbiAgICAgIGRhdGEgPSB7XG4gICAgICAgIGlkOiBjYXJkRGF0YS5oaXQsXG4gICAgICAgIGV2ZW50czoge1xuICAgICAgICAgIGNsaWNrOiAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihpZCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuc2hvd0NhcmQoaWQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KSh0aGlzKVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgdGhpcy5naG9zdHMucHVzaChjYXJkRGF0YS5oaXQpO1xuICAgICAgcmVzdWx0cy5wdXNoKFB1YlN1Yi5wdWJsaXNoKCdnaG9zdHV4LmFkZCcsIGRhdGEpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgRXhwbG9yZUNhcmRzLnByb3RvdHlwZS5zaG93Q2FyZCA9IGZ1bmN0aW9uKGNhcmRJZCkge1xuICAgIHZhciBkYXRhO1xuICAgIHRoaXMudG90YWxDYXJkc1ZpZXdlZCsrO1xuICAgIGlmICh0aGlzLiRjdXJyZW50Q2FyZCAhPSBudWxsKSB7XG4gICAgICB0aGlzLnJlbW92ZUN1cnJlbnRDYXJkKCk7XG4gICAgfVxuICAgIGRhdGEgPSB0aGlzLmNhcmRzLmdldEl0ZW1CeVBhcmFtKCdoaXQnLCBjYXJkSWQpO1xuICAgIHRoaXMuJGN1cnJlbnRDYXJkID0gJChqYWRlVGVtcGxhdGVbXCJzbGlkZS11eC9jb21wb25lbnRzL2NhcmRzL1wiICsgdGhpcy5kYXRhLnRlbXBsYXRlXShkYXRhKSk7XG4gICAgc2hhZG93SWNvbnNJbnN0YW5jZS5zdmdSZXBsYWNlV2l0aFN0cmluZyhweFN2Z0ljb25TdHJpbmcsIHRoaXMuJGN1cnJlbnRDYXJkKTtcbiAgICAkKFwiLmdvdC1pdC1idG5cIiwgdGhpcy4kY3VycmVudENhcmQpLm9uKFwiY2xpY2tcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgICByZXR1cm4gX3RoaXMucmVtb3ZlQ3VycmVudENhcmQoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIGlmICh0aGlzLnRvdGFsQ2FyZHNWaWV3ZWQgPj0gdGhpcy5yZXF1aXJlZENhcmRWaWV3cykge1xuICAgICAgUHViU3ViLnB1Ymxpc2goJ2NvbnRpbnVlLnNob3cnKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuJG5vZGUuYXBwZW5kKHRoaXMuJGN1cnJlbnRDYXJkKTtcbiAgfTtcblxuICBFeHBsb3JlQ2FyZHMucHJvdG90eXBlLnJlbW92ZUN1cnJlbnRDYXJkID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJGN1cnJlbnRDYXJkLnJlbW92ZSgpO1xuICB9O1xuXG4gIEV4cGxvcmVDYXJkcy5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBnaG9zdElkLCBpLCBsZW4sIHJlZjtcbiAgICByZWYgPSB0aGlzLmdob3N0cztcbiAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGdob3N0SWQgPSByZWZbaV07XG4gICAgICBQdWJTdWIucHVibGlzaCgnZ2hvc3R1eC5yZW1vdmUnLCBnaG9zdElkKTtcbiAgICB9XG4gICAgcmV0dXJuIEV4cGxvcmVDYXJkcy5fX3N1cGVyX18uZGVzdHJveS5jYWxsKHRoaXMpO1xuICB9O1xuXG4gIHJldHVybiBFeHBsb3JlQ2FyZHM7XG5cbn0pKENvbXBvbmVudCk7XG4iLCJ2YXIgQ29tcG9uZW50LCBHaG9zdFVYLFxuICBleHRlbmQgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKGhhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH0sXG4gIGhhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuQ29tcG9uZW50ID0gcmVxdWlyZSgnc2xpZGUtdXgvY29tcG9uZW50cy9jb21wb25lbnQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBHaG9zdFVYID0gKGZ1bmN0aW9uKHN1cGVyQ2xhc3MpIHtcbiAgZXh0ZW5kKEdob3N0VVgsIHN1cGVyQ2xhc3MpO1xuXG4gIGZ1bmN0aW9uIEdob3N0VVgoJGVsLCBkYXRhKSB7XG4gICAgR2hvc3RVWC5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCBkYXRhKTtcbiAgICB0aGlzLiRub2RlID0gJChqYWRlVGVtcGxhdGVbJ3NsaWRlLXV4L2NvbXBvbmVudHMvZ2hvc3QtdXgnXSh7fSkpO1xuICAgIHRoaXMuc3VwZXJJbml0KCRlbCwgdGhpcy4kbm9kZSwgZGF0YSk7XG4gICAgdGhpcy5jcmVhdGVUYXJnZXRzKGRhdGEudGFyZ2V0cyk7XG4gIH1cblxuICBHaG9zdFVYLnByb3RvdHlwZS5jcmVhdGVUYXJnZXRzID0gZnVuY3Rpb24odGFyZ2V0cykge1xuICAgIHZhciAkZ2hvc3RJdGVtLCAkdGFyZ2V0LCBpLCBsZW4sIHBvcywgcmVzdWx0cywgdGFsLCB0YXJnZXQsIHdpZDtcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChpID0gMCwgbGVuID0gdGFyZ2V0cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgdGFyZ2V0ID0gdGFyZ2V0c1tpXTtcbiAgICAgICR0YXJnZXQgPSAkKFwiI1wiICsgdGFyZ2V0LmlkKTtcbiAgICAgIHBvcyA9ICR0YXJnZXQucG9zaXRpb24oKTtcbiAgICAgIHdpZCA9ICR0YXJnZXRbMF0uZ2V0QkJveCgpLndpZHRoO1xuICAgICAgdGFsID0gJHRhcmdldFswXS5nZXRCQm94KCkuaGVpZ2h0O1xuICAgICAgJGdob3N0SXRlbSA9ICQoamFkZVRlbXBsYXRlWydzbGlkZS11eC9jb21wb25lbnRzL2dob3N0LWl0ZW0nXSh7XG4gICAgICAgIHdpZHRoOiB3aWQsXG4gICAgICAgIGhlaWdodDogdGFsLFxuICAgICAgICBsZWZ0OiBwb3MubGVmdCxcbiAgICAgICAgdG9wOiBwb3MudG9wXG4gICAgICB9KSk7XG4gICAgICB0aGlzLiRub2RlLmFwcGVuZCgkZ2hvc3RJdGVtKTtcbiAgICAgIHRoaXMuc2V0RXZlbnRIYW5kbGVyKCRnaG9zdEl0ZW0sICdjbGljaycsIHRhcmdldC5jbGljayk7XG4gICAgICB0aGlzLnNldEV2ZW50SGFuZGxlcigkZ2hvc3RJdGVtLCAnbW91c2VvdmVyJywgdGFyZ2V0Lm92ZXIsIDAuNCk7XG4gICAgICByZXN1bHRzLnB1c2godGhpcy5zZXRFdmVudEhhbmRsZXIoJGdob3N0SXRlbSwgJ21vdXNlb3V0JywgdGFyZ2V0Lm91dCkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBHaG9zdFVYLnByb3RvdHlwZS5zZXRFdmVudEhhbmRsZXIgPSBmdW5jdGlvbigkaXRlbSwgZXZlbnQsIGFjdGlvbiwgb3BhY2l0eSkge1xuICAgIGlmIChvcGFjaXR5ID09IG51bGwpIHtcbiAgICAgIG9wYWNpdHkgPSAwO1xuICAgIH1cbiAgICByZXR1cm4gJGl0ZW0ub24oZXZlbnQsIGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGFyaXN0b3RsZS5jb21tYW5kZXJbXCJkb1wiXShhY3Rpb24pO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBHaG9zdFVYO1xuXG59KShDb21wb25lbnQpO1xuIiwidmFyIENvbXBvbmVudCwgUGVyc29uYWxJbmZvSW50cm8sXG4gIGV4dGVuZCA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoaGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfSxcbiAgaGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5Db21wb25lbnQgPSByZXF1aXJlKCdzbGlkZS11eC9jb21wb25lbnRzL2NvbXBvbmVudCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBlcnNvbmFsSW5mb0ludHJvID0gKGZ1bmN0aW9uKHN1cGVyQ2xhc3MpIHtcbiAgZXh0ZW5kKFBlcnNvbmFsSW5mb0ludHJvLCBzdXBlckNsYXNzKTtcblxuICBmdW5jdGlvbiBQZXJzb25hbEluZm9JbnRybygkZWwsIGRhdGEpIHtcbiAgICBQZXJzb25hbEluZm9JbnRyby5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCBkYXRhKTtcbiAgICBkYXRhLm9yZ2FuaXphdGlvbiA9IFwiQXJpem9uYSBQdWJsaWMgU2VydmljZVwiO1xuICAgIGRhdGEubmFtZSA9IGFyaXN0b3RsZS5sbXNQcm94eS5uYW1lO1xuICAgIHRoaXMuJG5vZGUgPSAkKGphZGVUZW1wbGF0ZVsnc2xpZGUtdXgvY29tcG9uZW50cy9wZXJzb25hbC1pbmZvLWludHJvJ10oZGF0YSkpO1xuICAgIHRoaXMuc3VwZXJJbml0KCRlbCwgdGhpcy4kbm9kZSwgZGF0YSk7XG4gIH1cblxuICByZXR1cm4gUGVyc29uYWxJbmZvSW50cm87XG5cbn0pKENvbXBvbmVudCk7XG4iLCJ2YXIgUXVlc3Rpb24sXG4gIGJpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFF1ZXN0aW9uID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBRdWVzdGlvbigkcGFyZW50LCBkYXRhLCBxdWVzdGlvblZhbHVlLCBhbnN3ZXJDYWxsYmFjaykge1xuICAgIHRoaXMuJHBhcmVudCA9ICRwYXJlbnQ7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB0aGlzLnF1ZXN0aW9uVmFsdWUgPSBxdWVzdGlvblZhbHVlICE9IG51bGwgPyBxdWVzdGlvblZhbHVlIDogMTIwO1xuICAgIHRoaXMuYW5zd2VyQ2FsbGJhY2sgPSBhbnN3ZXJDYWxsYmFjaztcbiAgICB0aGlzLm9uQW5zd2VyQ2xpY2sgPSBiaW5kKHRoaXMub25BbnN3ZXJDbGljaywgdGhpcyk7XG4gICAgdGhpcy53cm9uZ0d1ZXNzZXMgPSAwO1xuICAgIHRoaXMuY291bnRXcm9uZ0Fuc3dlcnMoKTtcbiAgfVxuXG4gIFF1ZXN0aW9uLnByb3RvdHlwZS5idWlsZCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuJG5vZGUgPSAkKGphZGVUZW1wbGF0ZVsnc2xpZGUtdXgvY29tcG9uZW50cy9xdWl6L3F1ZXN0aW9uJ10odGhpcy5kYXRhKSk7XG4gICAgdGhpcy4kcGFyZW50LnByZXBlbmQodGhpcy4kbm9kZSk7XG4gICAgc2hhZG93SWNvbnNJbnN0YW5jZS5zdmdSZXBsYWNlV2l0aFN0cmluZyhweFN2Z0ljb25TdHJpbmcsIHRoaXMuJG5vZGUpO1xuICAgIHJldHVybiAkKFwiLmFuc3dlci13cmFwcGVyXCIsIHRoaXMuJG5vZGUpLm9uKFwiY2xpY2tcIiwgdGhpcy5vbkFuc3dlckNsaWNrKTtcbiAgfTtcblxuICBRdWVzdGlvbi5wcm90b3R5cGUub25BbnN3ZXJDbGljayA9IGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAodGhpcy5ndWVzc2VkUmlnaHQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgJChlLmN1cnJlbnRUYXJnZXQpLmFkZENsYXNzKFwiZmxpcHBlZFwiKTtcbiAgICB0aGlzLmd1ZXNzZWRSaWdodCA9ICQoXCIucmVzcG9uc2VcIiwgZS5jdXJyZW50VGFyZ2V0KS5oYXNDbGFzcygncmlnaHQnKTtcbiAgICBpZiAoIXRoaXMuZ3Vlc3NlZFJpZ2h0KSB7XG4gICAgICB0aGlzLndyb25nR3Vlc3NlcysrO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5hbnN3ZXJDYWxsYmFjayh0aGlzLmd1ZXNzZWRSaWdodCk7XG4gIH07XG5cbiAgUXVlc3Rpb24ucHJvdG90eXBlLmNvdW50V3JvbmdBbnN3ZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFuc3dlciwgaSwgbGVuLCByZWYsIHJlc3VsdHM7XG4gICAgdGhpcy50b3RhbFdyb25nQW5zd2VycyA9IDA7XG4gICAgcmVmID0gdGhpcy5kYXRhLmFuc3dlcnM7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgYW5zd2VyID0gcmVmW2ldO1xuICAgICAgaWYgKCFhbnN3ZXIuYykge1xuICAgICAgICByZXN1bHRzLnB1c2godGhpcy50b3RhbFdyb25nQW5zd2VycysrKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdHMucHVzaCh2b2lkIDApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBRdWVzdGlvbi5wcm90b3R5cGUuaXNQZXJmZWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMud3JvbmdHdWVzc2VzID09PSAwO1xuICB9O1xuXG4gIFF1ZXN0aW9uLnByb3RvdHlwZS5nZXROYW1lID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMubmFtZSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gXCJRdWVzaXRvbiBcIiArICh0aGlzLmRhdGEuaW5kZXggKyAxKTtcbiAgICB9XG4gIH07XG5cbiAgUXVlc3Rpb24ucHJvdG90eXBlLmdldFNjb3JlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICh0aGlzLnBvaW50c0Vhcm5lZCgpKSArIFwiL1wiICsgdGhpcy5xdWVzdGlvblZhbHVlO1xuICB9O1xuXG4gIFF1ZXN0aW9uLnByb3RvdHlwZS5wb2ludHNFYXJuZWQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgd3JvbmdHdWVzc1ZhbHVlO1xuICAgIHdyb25nR3Vlc3NWYWx1ZSA9ICh0aGlzLnF1ZXN0aW9uVmFsdWUgLyAyKSAvIHRoaXMudG90YWxXcm9uZ0Fuc3dlcnM7XG4gICAgdGhpcy5xdWVzdGlvblZhbHVlIC0gKHdyb25nR3Vlc3NWYWx1ZSAqIHRoaXMud3JvbmdHdWVzc2VzKTtcbiAgICByZXR1cm4gdGhpcy5xdWVzdGlvblZhbHVlIC0gKHdyb25nR3Vlc3NWYWx1ZSAqIHRoaXMud3JvbmdHdWVzc2VzKTtcbiAgfTtcblxuICBRdWVzdGlvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRub2RlLnJlbW92ZSgpO1xuICB9O1xuXG4gIHJldHVybiBRdWVzdGlvbjtcblxufSkoKTtcbiIsInZhciBDb21wb25lbnQsIFF1ZXN0aW9uLCBRdWl6LCBTZXF1ZW5jZSxcbiAgYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH0sXG4gIGV4dGVuZCA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoaGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfSxcbiAgaGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5Db21wb25lbnQgPSByZXF1aXJlKCdzbGlkZS11eC9jb21wb25lbnRzL2NvbXBvbmVudCcpO1xuXG5RdWVzdGlvbiA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvcXVpei9xdWVzdGlvbicpO1xuXG5TZXF1ZW5jZSA9IHJlcXVpcmUoJ21pc2Mvc2VxdWVuY2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBRdWl6ID0gKGZ1bmN0aW9uKHN1cGVyQ2xhc3MpIHtcbiAgZXh0ZW5kKFF1aXosIHN1cGVyQ2xhc3MpO1xuXG4gIGZ1bmN0aW9uIFF1aXooJGVsMSwgZGF0YTEpIHtcbiAgICB0aGlzLiRlbCA9ICRlbDE7XG4gICAgdGhpcy5kYXRhID0gZGF0YTE7XG4gICAgdGhpcy5vbk5leHRDbGljayA9IGJpbmQodGhpcy5vbk5leHRDbGljaywgdGhpcyk7XG4gICAgdGhpcy5vblF1ZXN0aW9uQW5zd2VyZWQgPSBiaW5kKHRoaXMub25RdWVzdGlvbkFuc3dlcmVkLCB0aGlzKTtcbiAgICBRdWl6Ll9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIHRoaXMuZGF0YSk7XG4gICAgUHViU3ViLnB1Ymxpc2goXCJjaHJvbWUuaGlkZVwiKTtcbiAgICBQdWJTdWIucHVibGlzaChcImN0YW5sZWUuaGlkZVwiKTtcbiAgICB0aGlzLmJ1aWxkKHRoaXMuZGF0YSk7XG4gICAgdGhpcy5zdXBlckluaXQodGhpcy4kZWwsIHRoaXMuJG5vZGUsIHRoaXMuZGF0YSk7XG4gIH1cblxuICBRdWl6LnByb3RvdHlwZS5idWlsZCA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB0aGlzLiRub2RlID0gJChqYWRlVGVtcGxhdGVbJ3NsaWRlLXV4L2NvbXBvbmVudHMvcXVpei9xdWl6J10oZGF0YSkpO1xuICAgIHRoaXMuY3JlYXRlUXVpeigkKFwiLnF1ZXN0aW9uc1wiLCB0aGlzLiRub2RlKSwgZGF0YSk7XG4gICAgdGhpcy4kbmV4dEJ0biA9ICQoXCIubmV4dC1idG5cIiwgdGhpcy4kbm9kZSk7XG4gICAgdGhpcy4kbmV4dEJ0bi5vbihcImNsaWNrXCIsIHRoaXMub25OZXh0Q2xpY2spO1xuICAgIHJldHVybiB0aGlzLmhpZGVOZXh0KCk7XG4gIH07XG5cbiAgUXVpei5wcm90b3R5cGUuY3JlYXRlUXVpeiA9IGZ1bmN0aW9uKCRlbCwgZGF0YSkge1xuICAgIHZhciBpLCBqLCBsZW4xLCBxdWVzdGlvbkRhdGEsIHF1ZXN0aW9uVmFsdWUsIHF1ZXN0aW9ucywgcmVmO1xuICAgIHF1ZXN0aW9ucyA9IFtdO1xuICAgIHF1ZXN0aW9uVmFsdWUgPSAxMjA7XG4gICAgcmVmID0gZGF0YS5xdWVzdGlvbnM7XG4gICAgZm9yIChpID0gaiA9IDAsIGxlbjEgPSByZWYubGVuZ3RoOyBqIDwgbGVuMTsgaSA9ICsraikge1xuICAgICAgcXVlc3Rpb25EYXRhID0gcmVmW2ldO1xuICAgICAgcXVlc3Rpb25EYXRhLmluZGV4ID0gaTtcbiAgICAgIHF1ZXN0aW9ucy5wdXNoKG5ldyBRdWVzdGlvbigkZWwsIHF1ZXN0aW9uRGF0YSwgcXVlc3Rpb25WYWx1ZSwgdGhpcy5vblF1ZXN0aW9uQW5zd2VyZWQpKTtcbiAgICB9XG4gICAgdGhpcy5xdWVzdGlvbnMgPSBuZXcgU2VxdWVuY2UocXVlc3Rpb25zKTtcbiAgICByZXR1cm4gdGhpcy5zaG93Q3VycmVudFF1ZXN0aW9uKCk7XG4gIH07XG5cbiAgUXVpei5wcm90b3R5cGUuc2hvd0N1cnJlbnRRdWVzdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuY3VycmVudFF1ZXN0aW9uID0gdGhpcy5xdWVzdGlvbnMuY3VycmVudEl0ZW0oKTtcbiAgICByZXR1cm4gdGhpcy5jdXJyZW50UXVlc3Rpb24uYnVpbGQoKTtcbiAgfTtcblxuICBRdWl6LnByb3RvdHlwZS5vblF1ZXN0aW9uQW5zd2VyZWQgPSBmdW5jdGlvbihnb3RJdFJpZ2h0KSB7XG4gICAgaWYgKGdvdEl0UmlnaHQpIHtcbiAgICAgIHJldHVybiB0aGlzLnNob3dOZXh0KCk7XG4gICAgfVxuICB9O1xuXG4gIFF1aXoucHJvdG90eXBlLm9uTmV4dENsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5oaWRlTmV4dCgpO1xuICAgIHRoaXMuY3VycmVudFF1ZXN0aW9uLmRlc3Ryb3koKTtcbiAgICBpZiAodGhpcy5xdWVzdGlvbnMuaXNBdExhc3RJdGVtKCkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNob3dSZXN1bHRzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucXVlc3Rpb25zLm5leHQoKTtcbiAgICAgIHJldHVybiB0aGlzLnNob3dDdXJyZW50UXVlc3Rpb24oKTtcbiAgICB9XG4gIH07XG5cbiAgUXVpei5wcm90b3R5cGUuc2hvd05leHQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kbmV4dEJ0bi5yZW1vdmVDbGFzcyhcImhpZGRlblwiKTtcbiAgfTtcblxuICBRdWl6LnByb3RvdHlwZS5oaWRlTmV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRuZXh0QnRuLmFkZENsYXNzKFwiaGlkZGVuXCIpO1xuICB9O1xuXG4gIFF1aXoucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy4kbm9kZS5yZW1vdmUoKTtcbiAgICB0aGlzLmJ1aWxkKHRoaXMuZGF0YSk7XG4gICAgdGhpcy4kZWwuYXBwZW5kKHRoaXMuJG5vZGUpO1xuICAgIHJldHVybiBzaGFkb3dJY29uc0luc3RhbmNlLnN2Z1JlcGxhY2VXaXRoU3RyaW5nKHB4U3ZnSWNvblN0cmluZywgdGhpcy4kbm9kZSk7XG4gIH07XG5cbiAgUXVpei5wcm90b3R5cGUuc2hvd1Jlc3VsdHMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgZGF0YTtcbiAgICB0aGlzLiRub2RlLnJlbW92ZSgpO1xuICAgIGRhdGEgPSB0aGlzLmdldFJlc3VsdHMoKTtcbiAgICB0aGlzLiRub2RlID0gJChqYWRlVGVtcGxhdGVbJ3NsaWRlLXV4L2NvbXBvbmVudHMvcXVpei9xdWl6LXJlc3VsdHMnXSh0aGlzLmdldFJlc3VsdHMoKSkpO1xuICAgIHNoYWRvd0ljb25zSW5zdGFuY2Uuc3ZnUmVwbGFjZVdpdGhTdHJpbmcocHhTdmdJY29uU3RyaW5nLCB0aGlzLiRub2RlKTtcbiAgICAkKFwiI2NvbnRpbnVlXCIsIHRoaXMuJG5vZGUpLm9uKFwiY2xpY2tcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBQdWJTdWIucHVibGlzaCgnc2xpZGVzLm5leHQtc2xpZGUnKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHJldHVybiB0aGlzLiRlbC5hcHBlbmQodGhpcy4kbm9kZSk7XG4gIH07XG5cbiAgUXVpei5wcm90b3R5cGUuZ2V0UmVzdWx0cyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhbnN3ZXJzLCBqLCBsZW4xLCBvYmosIHF1ZXN0aW9uLCByZWYsIHJlZjEsIHRvdGFsUG9pbnRzRWFybmVkLCB0b3RhbFBvaW50c1Bvc3NpYmxlO1xuICAgIG9iaiA9IHt9O1xuICAgIG9iai5lcGlzb2RlTnVtYmVyID0gMjtcbiAgICB0b3RhbFBvaW50c1Bvc3NpYmxlID0gMDtcbiAgICB0b3RhbFBvaW50c0Vhcm5lZCA9IDA7XG4gICAgYW5zd2VycyA9IFtdO1xuICAgIHJlZiA9IHRoaXMucXVlc3Rpb25zLml0ZW1zO1xuICAgIGZvciAoaiA9IDAsIGxlbjEgPSByZWYubGVuZ3RoOyBqIDwgbGVuMTsgaisrKSB7XG4gICAgICBxdWVzdGlvbiA9IHJlZltqXTtcbiAgICAgIHRvdGFsUG9pbnRzUG9zc2libGUgKz0gcXVlc3Rpb24ucXVlc3Rpb25WYWx1ZTtcbiAgICAgIHRvdGFsUG9pbnRzRWFybmVkICs9IHF1ZXN0aW9uLnBvaW50c0Vhcm5lZCgpO1xuICAgICAgYW5zd2Vycy5wdXNoKHtcbiAgICAgICAgbmFtZTogcXVlc3Rpb24uZ2V0TmFtZSgpLFxuICAgICAgICBzY29yZTogcXVlc3Rpb24uZ2V0U2NvcmUoKSxcbiAgICAgICAgaXNQZXJmZWN0OiBxdWVzdGlvbi5pc1BlcmZlY3QoKVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJlZjEgPSB0aGlzLnNwbGl0QXJyYXlJbkhhbGYoYW5zd2VycyksIG9iai5hbnN3ZXJzMSA9IHJlZjFbMF0sIG9iai5hbnN3ZXJzMiA9IHJlZjFbMV07XG4gICAgb2JqLnNjb3JlID0gdG90YWxQb2ludHNFYXJuZWQgKyBcIiAvIFwiICsgdG90YWxQb2ludHNQb3NzaWJsZTtcbiAgICBvYmouc2NvcmVQZXJjZW50YWdlID0gKHRvdGFsUG9pbnRzRWFybmVkIC8gdG90YWxQb2ludHNQb3NzaWJsZSkgKiAxMDA7XG4gICAgb2JqLmRlY2lzaW9ucyA9IFtcbiAgICAgIHtcbiAgICAgICAgcG9wdWxhclBlcmNlbnRhZ2U6IDQ5LFxuICAgICAgICBjaG9pY2U6IFwiQ29vbCBidWlsZGluZ1wiLFxuICAgICAgICBjYXRlZ29yeTogXCJQaHlzaWNhbCBBY2Nlc3MgQ29udHJvbCBTeXN0ZW1cIlxuICAgICAgfSwge1xuICAgICAgICBwb3B1bGFyUGVyY2VudGFnZTogNTMsXG4gICAgICAgIGNob2ljZTogXCJEb2cgSG91c2VcIixcbiAgICAgICAgY2F0ZWdvcnk6IFwiUGV0IExvZGdpbmdcIlxuICAgICAgfSwge1xuICAgICAgICBwb3B1bGFyUGVyY2VudGFnZTogMjMsXG4gICAgICAgIGNob2ljZTogXCJIb3NwaXRhbFwiLFxuICAgICAgICBjYXRlZ29yeTogXCJQdWJsaWMgU2VydmljZSBCdWlsZGluZ1wiXG4gICAgICB9XG4gICAgXTtcbiAgICByZXR1cm4gb2JqO1xuICB9O1xuXG4gIFF1aXoucHJvdG90eXBlLnNwbGl0QXJyYXlJbkhhbGYgPSBmdW5jdGlvbihhcikge1xuICAgIHZhciBsZW47XG4gICAgbGVuID0gTWF0aC5jZWlsKGFyLmxlbmd0aCAvIDIpO1xuICAgIHJldHVybiBbYXIuc2xpY2UoMCwgbGVuKSwgYXIuc2xpY2UobGVuKV07XG4gIH07XG5cbiAgcmV0dXJuIFF1aXo7XG5cbn0pKENvbXBvbmVudCk7XG4iLCJ2YXIgQ29tcG9uZW50LCBTZWxlY3Rpb25EaWFsb2d1ZSxcbiAgZXh0ZW5kID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChoYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9LFxuICBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbkNvbXBvbmVudCA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvY29tcG9uZW50Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2VsZWN0aW9uRGlhbG9ndWUgPSAoZnVuY3Rpb24oc3VwZXJDbGFzcykge1xuICBleHRlbmQoU2VsZWN0aW9uRGlhbG9ndWUsIHN1cGVyQ2xhc3MpO1xuXG4gIGZ1bmN0aW9uIFNlbGVjdGlvbkRpYWxvZ3VlKCRlbCwgZGF0YSkge1xuICAgIHZhciAkcmlnaHQsIGphZGVEYXRhO1xuICAgIFNlbGVjdGlvbkRpYWxvZ3VlLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIGRhdGEpO1xuICAgIHRoaXMuJG5vZGUgPSAkKGphZGVUZW1wbGF0ZVsnc2xpZGUtdXgvY29tcG9uZW50cy9kaWFsb2d1ZS9zZWxlY3Rpb24tZGlhbG9ndWUnXSgpKTtcbiAgICBqYWRlRGF0YSA9IHRoaXMuZ2VuZXJhdGVDb25maWdEYXRhKGRhdGEpO1xuICAgIHRoaXMuJGxlZnQgPSAkKGphZGVUZW1wbGF0ZVsnc2xpZGUtdXgvY29tcG9uZW50cy9kaWFsb2d1ZS9kaWFsb2d1ZS1kZXRhaWxzJ10oamFkZURhdGEpKTtcbiAgICAkcmlnaHQgPSAkKGphZGVUZW1wbGF0ZVsnc2xpZGUtdXgvY29tcG9uZW50cy9kaWFsb2d1ZS9kaWFsb2d1ZS1idXR0b25zJ10oamFkZURhdGEpKTtcbiAgICB0aGlzLiRsZWZ0LmFkZENsYXNzKFwiaGlkZGVuXCIpO1xuICAgIHRoaXMuJG5vZGUuYXBwZW5kKHRoaXMuJGxlZnQpO1xuICAgIHRoaXMuJG5vZGUuYXBwZW5kKCRyaWdodCk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVycyh0aGlzLiRub2RlLCBkYXRhKTtcbiAgICB0aGlzLnN1cGVySW5pdCgkZWwsIHRoaXMuJG5vZGUsIGRhdGEpO1xuICB9XG5cbiAgU2VsZWN0aW9uRGlhbG9ndWUucHJvdG90eXBlLmdlbmVyYXRlQ29uZmlnRGF0YSA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2YXIgaSwgaXRlbSwgaiwgamFkZURhdGEsIGxlbiwgcmVmO1xuICAgIHRoaXMuaXRlbXMgPSB7fTtcbiAgICBqYWRlRGF0YSA9IHt9O1xuICAgIGphZGVEYXRhLnRpdGxlID0gZGF0YS50aXRsZTtcbiAgICBqYWRlRGF0YS5zdWJUaXRsZSA9IGRhdGEuc3ViVGl0bGU7XG4gICAgamFkZURhdGEuYnRuVHh0ID0gZGF0YS5zdWJtaXRCdG4udHh0O1xuICAgIGphZGVEYXRhLmJ0bkljb24gPSBkYXRhLnN1Ym1pdEJ0bi5pY29uO1xuICAgIGphZGVEYXRhLmludHJvID0gZGF0YS5pbnRybztcbiAgICBqYWRlRGF0YS5pdGVtcyA9IFtdO1xuICAgIHJlZiA9IGRhdGEuaXRlbXM7XG4gICAgZm9yIChpID0gaiA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGogPCBsZW47IGkgPSArK2opIHtcbiAgICAgIGl0ZW0gPSByZWZbaV07XG4gICAgICBpdGVtLmlkID0gXCJpdGVtXCIgKyBpO1xuICAgICAgaWYgKGl0ZW0uaWNvbiAhPT0gXCJtaW5pLWNvbnRyb2wtY2VudGVyXCIgfHwgaXRlbS5pY29uICE9PSBcIm1pbmktZ2VuZXJhdGlvblwiIHx8IGl0ZW0uaWNvbiAhPT0gXCJtaW5pLXN1YnN0YXRpb25cIikge1xuICAgICAgICBpdGVtLmljb24gPSBcIm1pbmktY29udHJvbC1jZW50ZXJcIjtcbiAgICAgIH1cbiAgICAgIGphZGVEYXRhLml0ZW1zLnB1c2goe1xuICAgICAgICB0eHQ6IGl0ZW0uYnRuVHh0LFxuICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgaWNvbjogaXRlbS5pY29uXG4gICAgICB9KTtcbiAgICAgIHRoaXMuaXRlbXNbaXRlbS5pZF0gPSBpdGVtO1xuICAgIH1cbiAgICByZXR1cm4gamFkZURhdGE7XG4gIH07XG5cbiAgU2VsZWN0aW9uRGlhbG9ndWUucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24oJGVsLCBkYXRhKSB7XG4gICAgdmFyICRidXR0b25zO1xuICAgICRidXR0b25zID0gJChcIi5idXR0b25cIiwgJGVsKTtcbiAgICAkYnV0dG9ucy5vbihcImNsaWNrXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdmFyICR0YXJnO1xuICAgICAgICAkdGFyZyA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgcmV0dXJuIF90aGlzLmFjdGl2YXRlSXRlbSgkdGFyZywgX3RoaXMuaXRlbXNbJHRhcmcuYXR0cignaWQnKV0pO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgcmV0dXJuICQoXCIjYWN0aW9uLWJ0blwiLCAkZWwpLm9uKFwiY2xpY2tcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgICBhcmlzdG90bGUuY29tbWFuZGVyW1wiZG9cIl0oZGF0YS5jbGljayk7XG4gICAgICAgIHJldHVybiBfdGhpcy5kZXN0cm95KCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgfTtcblxuICBTZWxlY3Rpb25EaWFsb2d1ZS5wcm90b3R5cGUuYWN0aXZhdGVJdGVtID0gZnVuY3Rpb24oJGJ1dHRvbiwgaXRlbSkge1xuICAgIHRoaXMuJGxlZnQucmVtb3ZlQ2xhc3MoXCJoaWRkZW5cIik7XG4gICAgJChcIi5pdGVtLWluZm9cIiwgdGhpcy4kbm9kZSkuY3NzKHtcbiAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIlxuICAgIH0pO1xuICAgICQoXCIuYnV0dG9uXCIsIHRoaXMuJG5vZGUpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICRidXR0b24uYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgJChcIi5pY29uXCIsIHRoaXMuJG5vZGUpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICQoXCIjaWNvbi1cIiArIGl0ZW0uaWQsIHRoaXMuJG5vZGUpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgICQoXCIuYmx1cmJcIiwgdGhpcy4kbm9kZSkuaHRtbChpdGVtLmJsdXJiKTtcbiAgICAkKFwiLmRldGFpbHNcIiwgdGhpcy4kbm9kZSkuaHRtbChpdGVtLmRldGFpbHMpO1xuICAgIHJldHVybiBhcmlzdG90bGUuY29tbWFuZGVyW1wiZG9cIl0oaXRlbS5jbGljayk7XG4gIH07XG5cbiAgcmV0dXJuIFNlbGVjdGlvbkRpYWxvZ3VlO1xuXG59KShDb21wb25lbnQpO1xuIiwidmFyIENvbXBvbmVudCwgU2ltcGxlU2VsZWN0aW9uLFxuICBleHRlbmQgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKGhhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH0sXG4gIGhhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuQ29tcG9uZW50ID0gcmVxdWlyZSgnc2xpZGUtdXgvY29tcG9uZW50cy9jb21wb25lbnQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTaW1wbGVTZWxlY3Rpb24gPSAoZnVuY3Rpb24oc3VwZXJDbGFzcykge1xuICBleHRlbmQoU2ltcGxlU2VsZWN0aW9uLCBzdXBlckNsYXNzKTtcblxuICBmdW5jdGlvbiBTaW1wbGVTZWxlY3Rpb24oJGVsLCBkYXRhKSB7XG4gICAgdmFyICRyaWdodCwgamFkZURhdGE7XG4gICAgU2ltcGxlU2VsZWN0aW9uLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIGRhdGEpO1xuICAgIGphZGVEYXRhID0gdGhpcy5nZW5lcmF0ZUNvbmZpZ0RhdGEoZGF0YSk7XG4gICAgdGhpcy4kbm9kZSA9ICQoamFkZVRlbXBsYXRlWydzbGlkZS11eC9jb21wb25lbnRzL2RpYWxvZ3VlL3NlbGVjdGlvbi1kaWFsb2d1ZSddKCkpO1xuICAgICRyaWdodCA9ICQoamFkZVRlbXBsYXRlWydzbGlkZS11eC9jb21wb25lbnRzL2RpYWxvZ3VlL2RpYWxvZ3VlLWJ1dHRvbnMnXShqYWRlRGF0YSkpO1xuICAgIHRoaXMuJG5vZGUuYXBwZW5kKCRyaWdodCk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVycyh0aGlzLiRub2RlLCBkYXRhKTtcbiAgICB0aGlzLnN1cGVySW5pdCgkZWwsIHRoaXMuJG5vZGUsIGRhdGEpO1xuICB9XG5cbiAgU2ltcGxlU2VsZWN0aW9uLnByb3RvdHlwZS5nZW5lcmF0ZUNvbmZpZ0RhdGEgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyIGksIGl0ZW0sIGosIGphZGVEYXRhLCBsZW4sIHJlZjtcbiAgICB0aGlzLml0ZW1zID0ge307XG4gICAgamFkZURhdGEgPSB7fTtcbiAgICBqYWRlRGF0YS5pdGVtcyA9IFtdO1xuICAgIGphZGVEYXRhLnRpdGxlID0gZGF0YS50aXRsZTtcbiAgICBqYWRlRGF0YS5zdWJUaXRsZSA9IGRhdGEuc3ViVGl0bGU7XG4gICAgcmVmID0gZGF0YS5pdGVtcztcbiAgICBmb3IgKGkgPSBqID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaiA8IGxlbjsgaSA9ICsraikge1xuICAgICAgaXRlbSA9IHJlZltpXTtcbiAgICAgIGl0ZW0uaWQgPSBcIml0ZW1cIiArIGk7XG4gICAgICBqYWRlRGF0YS5pdGVtcy5wdXNoKHtcbiAgICAgICAgdHh0OiBpdGVtLmJ0blR4dCxcbiAgICAgICAgaWQ6IGl0ZW0uaWRcbiAgICAgIH0pO1xuICAgICAgdGhpcy5pdGVtc1tpdGVtLmlkXSA9IGl0ZW07XG4gICAgfVxuICAgIHJldHVybiBqYWRlRGF0YTtcbiAgfTtcblxuICBTaW1wbGVTZWxlY3Rpb24ucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24oJGVsLCBkYXRhKSB7XG4gICAgdmFyICRidXR0b25zO1xuICAgICRidXR0b25zID0gJChcIi5idXR0b25cIiwgJGVsKTtcbiAgICByZXR1cm4gJGJ1dHRvbnMub24oXCJjbGlja1wiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICAgIHZhciAkdGFyZztcbiAgICAgICAgJHRhcmcgPSAkKGUuY3VycmVudFRhcmdldCk7XG4gICAgICAgIGRhdGEgPSBfdGhpcy5pdGVtc1skdGFyZy5hdHRyKCdpZCcpXTtcbiAgICAgICAgcmV0dXJuIGFyaXN0b3RsZS5jb21tYW5kZXJbXCJkb1wiXShkYXRhLmNsaWNrKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9O1xuXG4gIHJldHVybiBTaW1wbGVTZWxlY3Rpb247XG5cbn0pKENvbXBvbmVudCk7XG4iLCJ2YXIgQ29tcG9uZW50LCBTb3VuZFRlc3QsXG4gIGV4dGVuZCA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoaGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfSxcbiAgaGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5Db21wb25lbnQgPSByZXF1aXJlKCdzbGlkZS11eC9jb21wb25lbnRzL2NvbXBvbmVudCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNvdW5kVGVzdCA9IChmdW5jdGlvbihzdXBlckNsYXNzKSB7XG4gIGV4dGVuZChTb3VuZFRlc3QsIHN1cGVyQ2xhc3MpO1xuXG4gIGZ1bmN0aW9uIFNvdW5kVGVzdCgkZWwsIGRhdGEpIHtcbiAgICBTb3VuZFRlc3QuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgZGF0YSk7XG4gICAgdGhpcy4kbm9kZSA9ICQoamFkZVRlbXBsYXRlWydzbGlkZS11eC9jb21wb25lbnRzL3NvdW5kLXRlc3QnXShkYXRhKSk7XG4gICAgdGhpcy5zdXBlckluaXQoJGVsLCB0aGlzLiRub2RlLCBkYXRhKTtcbiAgfVxuXG4gIHJldHVybiBTb3VuZFRlc3Q7XG5cbn0pKENvbXBvbmVudCk7XG4iLCJ2YXIgQ2xvc2VkQ2FwdGlvbjtcblxubW9kdWxlLmV4cG9ydHMgPSBDbG9zZWRDYXB0aW9uID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBDbG9zZWRDYXB0aW9uKCRwYXJlbnQsIHBsYXlOZXh0QWN0aW9uKSB7XG4gICAgdGhpcy5wbGF5TmV4dEFjdGlvbiA9IHBsYXlOZXh0QWN0aW9uO1xuICAgIHRoaXMuY2NJc09uID0gdHJ1ZTtcbiAgICB0aGlzLiRlbCA9ICQoamFkZVRlbXBsYXRlWydzbGlkZS11eC90ZXh0LWRpYWxvZ3VlL2Nsb3NlZC1jYXB0aW9uJ10oe30pKTtcbiAgICAkcGFyZW50LmFwcGVuZCh0aGlzLiRlbCk7XG4gICAgc2hhZG93SWNvbnNJbnN0YW5jZS5zdmdSZXBsYWNlV2l0aFN0cmluZyhweFN2Z0ljb25TdHJpbmcsIHRoaXMuJGVsKTtcbiAgICB0aGlzLmNjRGlzcGxheSA9ICQoXCIuY2xvc2VkLWNhcHRpb25cIiwgdGhpcy4kZWwpO1xuICAgIHRoaXMuY2NEaXNwbGF5LmNzcyh7XG4gICAgICBkaXNwbGF5OiAnbm9uZSdcbiAgICB9KTtcbiAgICB0aGlzLiRzcGVlY2hCb3ggPSAkKFwiLnRleHRcIiwgdGhpcy4kZWwpO1xuICAgIHRoaXMuaGlkZVRleHQoKTtcbiAgICB0aGlzLiRpY29uID0gJChcIi5jbG9zZWQtY2FwdGlvbi1pY29uXCIpO1xuICAgIHRoaXMuJGljb24ub24oJ2NsaWNrJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgICByZXR1cm4gX3RoaXMudG9nZ2xlQ2xvc2VkQ2FwdGlvbmluZygpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH1cblxuICBDbG9zZWRDYXB0aW9uLnByb3RvdHlwZS50b2dnbGVDbG9zZWRDYXB0aW9uaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuY2NJc09uKSB7XG4gICAgICB0aGlzLmNjSXNPbiA9IGZhbHNlO1xuICAgICAgdGhpcy5jY0Rpc3BsYXkuYWRkQ2xhc3MoJ2hpZGRlbicpO1xuICAgICAgcmV0dXJuIHRoaXMuJGljb24uYWRkQ2xhc3MoJ29mZicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNjSXNPbiA9IHRydWU7XG4gICAgICB0aGlzLmNjRGlzcGxheS5yZW1vdmVDbGFzcygnaGlkZGVuJyk7XG4gICAgICByZXR1cm4gdGhpcy4kaWNvbi5yZW1vdmVDbGFzcygnb2ZmJyk7XG4gICAgfVxuICB9O1xuXG4gIENsb3NlZENhcHRpb24ucHJvdG90eXBlLnNheSA9IGZ1bmN0aW9uKHRleHQsIHR4dFBvcykge1xuICAgIHRoaXMuc2hvd1RleHQoKTtcbiAgICByZXR1cm4gdGhpcy4kc3BlZWNoQm94Lmh0bWwoXCI8ZGl2IGNsYXNzPSdcIiArIHRoaXMuY2hhcmFjdGVyICsgXCInPjxzcGFuPlwiICsgdGhpcy5jaGFyYWN0ZXIgKyBcIjwvc3Bhbj5cIiArIHRleHQgKyBcIjwvZGl2PlwiKTtcbiAgfTtcblxuICBDbG9zZWRDYXB0aW9uLnByb3RvdHlwZS5zcGVjaWFsID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIGlmIChkYXRhLmFjdG9yICE9IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLmNoYXJhY3RlciA9IGRhdGEuYWN0b3I7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmNoYXJhY3RlciA9ICdjdGFubGVlJztcbiAgICB9XG4gIH07XG5cbiAgQ2xvc2VkQ2FwdGlvbi5wcm90b3R5cGUuc2hvd1RleHQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5jY0Rpc3BsYXkuZmFkZUluKCk7XG4gIH07XG5cbiAgQ2xvc2VkQ2FwdGlvbi5wcm90b3R5cGUuaGlkZVRleHQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5jY0Rpc3BsYXkuZmFkZU91dCgpO1xuICB9O1xuXG4gIENsb3NlZENhcHRpb24ucHJvdG90eXBlLnNob3dOZXh0ID0gZnVuY3Rpb24oKSB7fTtcblxuICBDbG9zZWRDYXB0aW9uLnByb3RvdHlwZS5oaWRlTmV4dCA9IGZ1bmN0aW9uKCkge307XG5cbiAgQ2xvc2VkQ2FwdGlvbi5wcm90b3R5cGUuc3RhcnRUYWxraW5nID0gZnVuY3Rpb24oKSB7fTtcblxuICBDbG9zZWRDYXB0aW9uLnByb3RvdHlwZS5zdG9wVGFsa2luZyA9IGZ1bmN0aW9uKCkge307XG5cbiAgQ2xvc2VkQ2FwdGlvbi5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zbGVlcCgpO1xuICB9O1xuXG4gIENsb3NlZENhcHRpb24ucHJvdG90eXBlLnNsZWVwID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaGlkZVRleHQoKTtcbiAgfTtcblxuICBDbG9zZWRDYXB0aW9uLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7fTtcblxuICByZXR1cm4gQ2xvc2VkQ2FwdGlvbjtcblxufSkoKTtcbiIsInZhciBBbmltYXRpb24sIEN0YW5sZWU7XG5cbkFuaW1hdGlvbiA9IHJlcXVpcmUoJ21vdmllL3N2Zy1hbmltYXRpb24nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBDdGFubGVlID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBDdGFubGVlKCRwYXJlbnQsIHBsYXlOZXh0QWN0aW9uKSB7XG4gICAgdmFyIHRva2VuMSwgdG9rZW4yLCB0b2tlbjMsIHRva2VuNDtcbiAgICB0aGlzLnBsYXlOZXh0QWN0aW9uID0gcGxheU5leHRBY3Rpb247XG4gICAgdGhpcy4kZWwgPSAkKGphZGVUZW1wbGF0ZVsnc2xpZGUtdXgvdGV4dC1kaWFsb2d1ZS9jdGFubGVlJ10oe30pKTtcbiAgICBzaGFkb3dJY29uc0luc3RhbmNlLnN2Z1JlcGxhY2VXaXRoU3RyaW5nKHB4U3ZnSWNvblN0cmluZywgdGhpcy4kZWwpO1xuICAgIHRoaXMuJHNwZWVjaEJveCA9ICQoXCIuc3BlZWNoLWJveFwiLCB0aGlzLiRlbCk7XG4gICAgdGhpcy4kdGV4dCA9ICQoXCIudGV4dFwiLCB0aGlzLiRzcGVlY2hCb3gpO1xuICAgIHRoaXMuJHRleHRDb250ZW50ID0gJChcInNwYW4uY29udGVudFwiLCB0aGlzLiR0ZXh0KTtcbiAgICB0aGlzLiRuZXh0QnRuID0gJChcInNwYW4ubmV4dFwiLCB0aGlzLiR0ZXh0KTtcbiAgICB0aGlzLiRmYWNlSG9sZGVyID0gJChcIi5mYWNlXCIsIHRoaXMuJGVsKTtcbiAgICB0aGlzLiRuZXh0QnRuLm9uKFwiY2xpY2tcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgICByZXR1cm4gX3RoaXMucGxheU5leHRBY3Rpb24oKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRva2VuMSA9IFB1YlN1Yi5zdWJzY3JpYmUoJ2N0YW5sZWUuaGlkZScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGEsIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLiRlbC5hZGRDbGFzcyhcImhpZGRlblwiKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRva2VuMiA9IFB1YlN1Yi5zdWJzY3JpYmUoJ2N0YW5sZWUuc2hvdycsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGEsIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLiRlbC5yZW1vdmVDbGFzcyhcImhpZGRlblwiKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRva2VuMyA9IFB1YlN1Yi5zdWJzY3JpYmUoJ2N0YW5sZWUuY2xlYXInLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihhLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5oaWRlVGV4dCgpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgdG9rZW40ID0gUHViU3ViLnN1YnNjcmliZSgnY3RhbmxlZS5nb2hvbWUnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihhLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5yZXR1cm5Ub1N0YXRpb24oKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRoaXMudG9rZW5zID0gW3Rva2VuMSwgdG9rZW4yLCB0b2tlbjMsIHRva2VuNF07XG4gICAgJHBhcmVudC5hcHBlbmQodGhpcy4kZWwpO1xuICAgIHRoaXMucmV0dXJuVG9TdGF0aW9uKCk7XG4gIH1cblxuICBDdGFubGVlLnByb3RvdHlwZS5zYXkgPSBmdW5jdGlvbih0ZXh0LCB0eHRQb3MsIHBvcykge1xuICAgIHRoaXMuc2hvd1RleHQoKTtcbiAgICB0aGlzLiR0ZXh0Q29udGVudC5odG1sKHRleHQpO1xuICAgIHJldHVybiB0aGlzLnNldFRleHRQb3NpdGlvbih0eHRQb3MpO1xuICB9O1xuXG4gIEN0YW5sZWUucHJvdG90eXBlLnN0YXJ0VGFsa2luZyA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaXNUYWxraW5nID0gdHJ1ZTtcbiAgICByZXR1cm4gdGhpcy5ib3VuY2UoKTtcbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5zdG9wVGFsa2luZyA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaXNUYWxraW5nID0gZmFsc2U7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZW91dCk7XG4gICAgdGhpcy4kY3VycmVudEFuaW1hdGlvbi5zdG9wKHRydWUpO1xuICAgIHJldHVybiB0aGlzLiRjdXJyZW50QW5pbWF0aW9uLnZlbG9jaXR5KHtcbiAgICAgIHNjYWxlOiAxXG4gICAgfSwge1xuICAgICAgZHVyYXRpb246IDMwMCxcbiAgICAgIGVhc2luZzogJ2Vhc2Vpbm91dHF1aW50J1xuICAgIH0pO1xuICB9O1xuXG4gIEN0YW5sZWUucHJvdG90eXBlLmJvdW5jZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBkdXJhdGlvbiwgdGltb3V0RHVyO1xuICAgIGR1cmF0aW9uID0gNTAwICsgTWF0aC5yYW5kb20oKSAqIDMwMDtcbiAgICB0aW1vdXREdXIgPSBkdXJhdGlvbiAqIChNYXRoLnJhbmRvbSgpIC8gMS4zKTtcbiAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuOCkge1xuICAgICAgdGltb3V0RHVyICs9IDYwMDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudGltZW91dCA9IHNldFRpbWVvdXQoKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBzY2FsZTtcbiAgICAgICAgc2NhbGUgPSAwLjggKyAoTWF0aC5yYW5kb20oKSAvIDMpO1xuICAgICAgICBfdGhpcy4kY3VycmVudEFuaW1hdGlvbi5zdG9wKHRydWUpO1xuICAgICAgICBfdGhpcy4kY3VycmVudEFuaW1hdGlvbi5jc3Moe1xuICAgICAgICAgIHRyYW5zZm9ybTogXCJzY2FsZShcIiArIHNjYWxlICsgXCIpXCJcbiAgICAgICAgfSk7XG4gICAgICAgIF90aGlzLiRjdXJyZW50QW5pbWF0aW9uLnZlbG9jaXR5KHtcbiAgICAgICAgICBzY2FsZTogc2NhbGVcbiAgICAgICAgfSwge1xuICAgICAgICAgIGR1cmF0aW9uOiAwXG4gICAgICAgIH0pO1xuICAgICAgICBfdGhpcy4kY3VycmVudEFuaW1hdGlvbi52ZWxvY2l0eSh7XG4gICAgICAgICAgc2NhbGU6IDFcbiAgICAgICAgfSwge1xuICAgICAgICAgIGRlbGF5OiAxMCxcbiAgICAgICAgICBkdXJhdGlvbjogZHVyYXRpb24sXG4gICAgICAgICAgZWFzaW5nOiBbNTAwLCAxNV1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChfdGhpcy5pc1RhbGtpbmcpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMuYm91bmNlKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSkodGhpcyksIHRpbW91dER1cik7XG4gIH07XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUuc3BlY2lhbCA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBpZiAoZGF0YS5wb3MgIT0gbnVsbCkge1xuICAgICAgdGhpcy5nb3RvKGRhdGEpO1xuICAgIH1cbiAgICBpZiAoKGRhdGEuZW1vICE9IG51bGwpIHx8ICh0aGlzLiRjdXJyZW50QW5pbWF0aW9uID09IG51bGwpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRFbW90aW9uKGRhdGEuZW1vKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0RW1vdGlvbihcImlkbGVcIik7XG4gICAgfVxuICB9O1xuXG4gIEN0YW5sZWUucHJvdG90eXBlLnNob3dUZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJHNwZWVjaEJveC5yZW1vdmVDbGFzcyhcImhpZGRlblwiKTtcbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5oaWRlVGV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRzcGVlY2hCb3guYWRkQ2xhc3MoXCJoaWRkZW5cIik7XG4gIH07XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUuc2hvd05leHQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kbmV4dEJ0bi5yZW1vdmVDbGFzcyhcImhpZGRlblwiKTtcbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5oaWRlTmV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRuZXh0QnRuLmFkZENsYXNzKFwiaGlkZGVuXCIpO1xuICB9O1xuXG4gIEN0YW5sZWUucHJvdG90eXBlLmNvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMucmV0dXJuVG9TdGF0aW9uKCk7XG4gIH07XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUuc2xlZXAgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5yZXR1cm5Ub1N0YXRpb24oKTtcbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5zZXRFbW90aW9uID0gZnVuY3Rpb24oZW1vdGlvbikge1xuICAgIHZhciBkYXRhLCBwYXRoLCByZXNldER1cmF0aW9uO1xuICAgIHJlc2V0RHVyYXRpb24gPSAxMDA7XG4gICAgdGhpcy5yZXNldFJvdGF0aW9uKHJlc2V0RHVyYXRpb24pO1xuICAgIHRoaXMuJG9sZEFuaW1hdGlvbiA9IHRoaXMuJGN1cnJlbnRBbmltYXRpb247XG4gICAgdGhpcy4kY3VycmVudEFuaW1hdGlvbiA9ICQoJzxkaXYgY2xhc3M9XCJhbmltYXRpb25cIi8+Jyk7XG4gICAgdGhpcy4kZmFjZUhvbGRlci5hcHBlbmQodGhpcy4kY3VycmVudEFuaW1hdGlvbik7XG4gICAgc3dpdGNoIChlbW90aW9uKSB7XG4gICAgICBjYXNlIFwiYW5ncnlcIjpcbiAgICAgICAgcGF0aCA9ICdjdGFubGVlLWFuZ3J5Lmpzb24nO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJoYXBweVwiOlxuICAgICAgICBwYXRoID0gJ2N0YW5sZWUtaGFwcHkuanNvbic7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImlkbGVcIjpcbiAgICAgICAgcGF0aCA9ICdjdGFubGVlLWlkbGUuanNvbic7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImRvd25cIjpcbiAgICAgICAgcGF0aCA9ICdjdGFubGVlLWxvb2stZG93bi5qc29uJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwibGVmdFwiOlxuICAgICAgICBwYXRoID0gJ2N0YW5sZWUtbG9vay1sZWZ0Lmpzb24nO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICBwYXRoID0gJ2N0YW5sZWUtbG9vay1yaWdodC5qc29uJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwic3VycHJpc2VcIjpcbiAgICAgICAgcGF0aCA9ICdjdGFubGVlLXN1cnByaXNlLmpzb24nO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJ1bmhhcHB5XCI6XG4gICAgICAgIHBhdGggPSAnY3RhbmxlZS11bmhhcHB5Lmpzb24nO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHBhdGggPSAnY3RhbmxlZS1pZGxlLmpzb24nO1xuICAgIH1cbiAgICBwYXRoID0gYXJpc3RvdGxlLmdldEFzc2V0UGF0aChcIn5nL2N0YW5sZWUvXCIgKyBwYXRoKTtcbiAgICB0aGlzLm9sZEFuaW1hdGlvbiA9IHRoaXMuYW5pbWF0aW9uO1xuICAgIGRhdGEgPSB7XG4gICAgICBkZWxheTogcmVzZXREdXJhdGlvbixcbiAgICAgIG5hdGl2ZUV2ZW50czoge1xuICAgICAgICBkYXRhX3JlYWR5OiAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuZGVzdHJveU9sZEZhY2UoKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KSh0aGlzKSxcbiAgICAgICAgY29tcGxldGU6IChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5pZGxlKCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSkodGhpcylcbiAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiB0aGlzLmFuaW1hdGlvbiA9IG5ldyBBbmltYXRpb24odGhpcy4kY3VycmVudEFuaW1hdGlvbiwgcGF0aCwgZGF0YSk7XG4gIH07XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUuZGVzdHJveU9sZEZhY2UgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5vbGRBbmltYXRpb24gIT0gbnVsbCkge1xuICAgICAgdGhpcy5vbGRBbmltYXRpb24uZGVzdHJveSgpO1xuICAgICAgdGhpcy4kb2xkQW5pbWF0aW9uLnJlbW92ZSgpO1xuICAgICAgcmV0dXJuIHRoaXMub2xkQW5pbWF0aW9uID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUucmVzZXRSb3RhdGlvbiA9IGZ1bmN0aW9uKHRpbWUpIHtcbiAgICBpZiAodGltZSA9PSBudWxsKSB7XG4gICAgICB0aW1lID0gMTAwO1xuICAgIH1cbiAgICB0aGlzLiRmYWNlSG9sZGVyLnZlbG9jaXR5KFwic3RvcFwiLCB0cnVlKTtcbiAgICByZXR1cm4gdGhpcy4kZmFjZUhvbGRlci52ZWxvY2l0eSh7XG4gICAgICByb3RhdGVaOiAwXG4gICAgfSwge1xuICAgICAgZHVyYXRpb246IHRpbWVcbiAgICB9KTtcbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5pZGxlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJGZhY2VIb2xkZXIudmVsb2NpdHkoe1xuICAgICAgcm90YXRlWjogMzYwXG4gICAgfSwge1xuICAgICAgZHVyYXRpb246IDEwMDAwLFxuICAgICAgbG9vcDogdHJ1ZSxcbiAgICAgIGVhc2luZzogJ2xpbmVhcidcbiAgICB9KTtcbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5nb3RvUG9zID0gZnVuY3Rpb24oeCwgeSwgZHVyYXRpb24sIGRlbGF5KSB7XG4gICAgaWYgKHggPT0gbnVsbCkge1xuICAgICAgeCA9IDk4ODtcbiAgICB9XG4gICAgaWYgKHkgPT0gbnVsbCkge1xuICAgICAgeSA9IDM0O1xuICAgIH1cbiAgICBpZiAoZHVyYXRpb24gPT0gbnVsbCkge1xuICAgICAgZHVyYXRpb24gPSA2MDA7XG4gICAgfVxuICAgIGlmIChkZWxheSA9PSBudWxsKSB7XG4gICAgICBkZWxheSA9IDA7XG4gICAgfVxuICAgIHRoaXMuJGVsLnZlbG9jaXR5KFwic3RvcFwiLCB0cnVlKTtcbiAgICByZXR1cm4gdGhpcy4kZWwudmVsb2NpdHkoe1xuICAgICAgdG9wOiB5LFxuICAgICAgbGVmdDogeFxuICAgIH0sIHtcbiAgICAgIGRlbGF5OiBkZWxheSxcbiAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgIGVhc2luZzogXCJlYXNlSW5PdXRRdWludFwiXG4gICAgfSk7XG4gIH07XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUuZ290b0l0ZW0gPSBmdW5jdGlvbihpZCkge1xuICAgIHZhciBwb3M7XG4gICAgcG9zID0gYXJpc3RvdGxlLm1vdmllLmdldEdsb2JhbFBvcyhpZCk7XG4gICAgaWYgKHBvcyA9PT0gbnVsbCkge1xuICAgICAgYXJpc3RvdGxlW1widGhyb3dcIl0oXCJjdGFubGVlIHdhbnRzIHRvIGhvdmVyIGJ5IGBcIiArIGlkICsgXCJgLCBidXQgaXMgdW5hYmxlIHRvIGZpbmQgYW4gaXRlbSB3aXRoIHRoZSBpZCBcIiArIGlkKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcG9zLnggKz0gMDtcbiAgICBwb3MueSArPSAwO1xuICAgIHJldHVybiB0aGlzLmdvdG9Qb3MocG9zLngsIHBvcy55KTtcbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5nb3RvID0gZnVuY3Rpb24oYWN0aW9uKSB7XG4gICAgdmFyIG1lO1xuICAgIGlmICh0eXBlb2YgYWN0aW9uLnBvcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgaWYgKGFjdGlvbi5kZWxheU1vdmUgIT0gbnVsbCkge1xuICAgICAgICBtZSA9IHRoaXM7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBtZS5nb3RvSXRlbShhY3Rpb24ucG9zLCBhY3Rpb24uZGVsYXlNb3ZlKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5nb3RvSXRlbShhY3Rpb24ucG9zKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuZ290b1BvcyhhY3Rpb24ucG9zWzBdLCBhY3Rpb24ucG9zWzFdLCBhY3Rpb24ucG9zWzJdLCBhY3Rpb24ucG9zWzNdKTtcbiAgICB9XG4gIH07XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUucmV0dXJuVG9TdGF0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5oaWRlVGV4dCgpO1xuICAgIHRoaXMuZ290b1BvcygpO1xuICAgIHJldHVybiB0aGlzLnNldEZpbHRlcignZ2xvdycpO1xuICB9O1xuXG4gIEN0YW5sZWUucHJvdG90eXBlLnNldEZpbHRlciA9IGZ1bmN0aW9uKGtpbmQpIHtcbiAgICByZXR1cm4gJCgnI2N0YW5sZWUnKS5jc3Moe1xuICAgICAgZmlsdGVyOiBcInVybCgnI1wiICsga2luZCArIFwiJylcIlxuICAgIH0pO1xuICB9O1xuXG4gIEN0YW5sZWUucHJvdG90eXBlLnNldFRleHRQb3NpdGlvbiA9IGZ1bmN0aW9uKHBvcykge1xuICAgIHZhciBpLCBpdGVtLCBsZW4sIHJlc3VsdHM7XG4gICAgdGhpcy4kdGV4dC5yZW1vdmVDbGFzcyhcInRvcCBsZWZ0XCIpO1xuICAgIGlmIChwb3MgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoQXJyYXkuaXNBcnJheShwb3MpKSB7XG4gICAgICByZXN1bHRzID0gW107XG4gICAgICBmb3IgKGkgPSAwLCBsZW4gPSBwb3MubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaXRlbSA9IHBvc1tpXTtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMuJHRleHQuYWRkQ2xhc3MoaXRlbSkpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLiR0ZXh0LmFkZENsYXNzKHBvcyk7XG4gICAgfVxuICB9O1xuXG4gIEN0YW5sZWUucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaSwgbGVuLCByZWYsIHJlc3VsdHMsIHRva2VuO1xuICAgIHRoaXMuJGVsLnZlbG9jaXR5KFwic3RvcFwiLCB0cnVlKTtcbiAgICB0aGlzLiRmYWNlSG9sZGVyLnZlbG9jaXR5KFwic3RvcFwiLCB0cnVlKTtcbiAgICB0aGlzLiRlbC5lbXB0eSgpO1xuICAgIHJlZiA9IHRoaXMudG9rZW5zO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHRva2VuID0gcmVmW2ldO1xuICAgICAgcmVzdWx0cy5wdXNoKFB1YlN1Yi51bnN1YnNjcmliZSh0b2tlbikpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICByZXR1cm4gQ3RhbmxlZTtcblxufSkoKTtcbiIsInZhciBHZW5lcmljVWk7XG5cbm1vZHVsZS5leHBvcnRzID0gR2VuZXJpY1VpID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBHZW5lcmljVWkoJGVsKSB7XG4gICAgdmFyICRub2RlO1xuICAgICRub2RlID0gJChqYWRlVGVtcGxhdGVbJ21pc2MvZ2VuZXJpYy11aSddKHt9KSk7XG4gICAgc2hhZG93SWNvbnNJbnN0YW5jZS5zdmdSZXBsYWNlV2l0aFN0cmluZyhweFN2Z0ljb25TdHJpbmcsICRub2RlKTtcbiAgICB0aGlzLiRjb250aW51ZVN0cmlwID0gJChcIi5jb250aW51ZS1zdHJpcFwiLCAkbm9kZSk7XG4gICAgJChcIi5jb250aW51ZS1idG5cIiwgJG5vZGUpLm9uKFwiY2xpY2tcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIFB1YlN1Yi5wdWJsaXNoKFwic2xpZGVzLm5leHQtc2xpZGVcIik7XG4gICAgICAgIHJldHVybiBfdGhpcy5oaWRlQ29udGludWVTdHJpcCgpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgdGhpcy5oaWRlQ29udGludWVTdHJpcCgpO1xuICAgICRlbC5hcHBlbmQoJG5vZGUpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ2NvbnRpbnVlLnNob3cnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnNob3dDb250aW51ZVN0cmlwKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgfVxuXG4gIEdlbmVyaWNVaS5wcm90b3R5cGUuc2hvd0NvbnRpbnVlU3RyaXAgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kY29udGludWVTdHJpcC5yZW1vdmVDbGFzcyhcImhpZGRlblwiKTtcbiAgfTtcblxuICBHZW5lcmljVWkucHJvdG90eXBlLmhpZGVDb250aW51ZVN0cmlwID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJGNvbnRpbnVlU3RyaXAuYWRkQ2xhc3MoXCJoaWRkZW5cIik7XG4gIH07XG5cbiAgR2VuZXJpY1VpLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7fTtcblxuICByZXR1cm4gR2VuZXJpY1VpO1xuXG59KSgpO1xuIiwidmFyIExhYmxlcjtcblxubW9kdWxlLmV4cG9ydHMgPSBMYWJsZXIgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIExhYmxlcigpIHtcbiAgICB0aGlzLmNvdW50ID0gMDtcbiAgICB0aGlzLnRva2VuMSA9IFB1YlN1Yi5zdWJzY3JpYmUoJ2xhYmVsLmF0dGFjaCcsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmF0dGFjaExhYmVsKGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgdGhpcy50b2tlbjIgPSBQdWJTdWIuc3Vic2NyaWJlKCdsYWJlbC5kZXN0cm95JywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuZGVzdHJveUxhYmVsKGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH1cblxuICBMYWJsZXIucHJvdG90eXBlLmF0dGFjaExhYmVsID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciAkbGFiZWw7XG4gICAgaWYgKCQoXCIubGFiZWwtd3JhcHBlclwiLCBkYXRhLmVsKS5sZW5ndGggIT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGRhdGEuY29udGVudC5pZCA9PSBudWxsKSB7XG4gICAgICBkYXRhLmNvbnRlbnQuaWQgPSBcIl9sYWJlbFwiICsgKHRoaXMuY291bnQrKyk7XG4gICAgfVxuICAgICRsYWJlbCA9ICQoamFkZVRlbXBsYXRlWydzbGlkZS11eC9sYWJlbCddKGRhdGEuY29udGVudCkpO1xuICAgICRsYWJlbC5hZGRDbGFzcyhcImF0dGFjaGVkXCIpO1xuICAgIHJldHVybiBkYXRhLmVsLmFwcGVuZCgkbGFiZWwpO1xuICB9O1xuXG4gIExhYmxlci5wcm90b3R5cGUuZGVzdHJveUxhYmVsID0gZnVuY3Rpb24oJGVsKSB7XG4gICAgcmV0dXJuICQoXCIubGFiZWwtd3JhcHBlclwiLCAkZWwpLnZlbG9jaXR5KHtcbiAgICAgIG9wYWNpdHk6IDBcbiAgICB9LCB7XG4gICAgICBkdXJhdGlvbjogMTUwLFxuICAgICAgY29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gJCh0aGlzKS5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBMYWJsZXIucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICBQdWJTdWIudW5zdWJzY3JpYmUodGhpcy50b2tlbjEpO1xuICAgIHJldHVybiBQdWJTdWIudW5zdWJzY3JpYmUodGhpcy50b2tlbjIpO1xuICB9O1xuXG4gIHJldHVybiBMYWJsZXI7XG5cbn0pKCk7XG4iLCJ2YXIgQ2FsbFNpZ25TZWxlY3QsIERlZmVuZGVyQ2FyZHMsIERpYWxvZ3VlLCBEaWFsb2d1ZVBhZ2UsIER1dGllcywgRXBpc29kZUludHJvLCBFcGlzb2RlT3V0cm8sIEV4cGxvcmVDYXJkcywgR2VuZXJpY1VpRWxlbWVudHMsIEdob3N0VVgsIExhYmxlciwgUGVyc29uYWxJbmZvSW50cm8sIFF1aXosIFNlbGVjdGlvbkRpYWxvZ3VlLCBTaW1wbGVTZWxlY3Rpb24sIFNsaWRlVVgsIFNvdW5kVGVzdCwgVGV4dERpYWxvZ3VlO1xuXG5DYWxsU2lnblNlbGVjdCA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvY2FsbC1zaWduLXNlbGVjdCcpO1xuXG5UZXh0RGlhbG9ndWUgPSByZXF1aXJlKCdzbGlkZS11eC90ZXh0LWRpYWxvZ3VlJyk7XG5cbkRlZmVuZGVyQ2FyZHMgPSByZXF1aXJlKCdzbGlkZS11eC9jb21wb25lbnRzL2RlZmVuZGVyLWNhcmRzJyk7XG5cbkRpYWxvZ3VlID0gcmVxdWlyZSgnc2xpZGUtdXgvY29tcG9uZW50cy9kaWFsb2d1ZScpO1xuXG5EaWFsb2d1ZVBhZ2UgPSByZXF1aXJlKCdzbGlkZS11eC9jb21wb25lbnRzL2RpYWxvZ3VlLXBhZ2UnKTtcblxuRHV0aWVzID0gcmVxdWlyZSgnc2xpZGUtdXgvY29tcG9uZW50cy9kdXRpZXMnKTtcblxuRXBpc29kZUludHJvID0gcmVxdWlyZSgnc2xpZGUtdXgvY29tcG9uZW50cy9lcGlzb2RlLWludHJvJyk7XG5cbkVwaXNvZGVPdXRybyA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvZXBpc29kZS1vdXRybycpO1xuXG5FeHBsb3JlQ2FyZHMgPSByZXF1aXJlKCdzbGlkZS11eC9jb21wb25lbnRzL2V4cGxvcmUtY2FyZHMnKTtcblxuR2hvc3RVWCA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvZ2hvc3QtdXgnKTtcblxuTGFibGVyID0gcmVxdWlyZSgnc2xpZGUtdXgvbGFibGVyJyk7XG5cblBlcnNvbmFsSW5mb0ludHJvID0gcmVxdWlyZSgnc2xpZGUtdXgvY29tcG9uZW50cy9wZXJzb25hbC1pbmZvLWludHJvJyk7XG5cblF1aXogPSByZXF1aXJlKCdzbGlkZS11eC9jb21wb25lbnRzL3F1aXovcXVpeicpO1xuXG5TZWxlY3Rpb25EaWFsb2d1ZSA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvc2VsZWN0aW9uLWRpYWxvZ3VlJyk7XG5cblNpbXBsZVNlbGVjdGlvbiA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvc2ltcGxlLXNlbGVjdGlvbicpO1xuXG5Tb3VuZFRlc3QgPSByZXF1aXJlKCdzbGlkZS11eC9jb21wb25lbnRzL3NvdW5kLXRlc3QnKTtcblxuR2VuZXJpY1VpRWxlbWVudHMgPSByZXF1aXJlKCdzbGlkZS11eC9nZW5lcmljLXVpJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2xpZGVVWCA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gU2xpZGVVWCgkZWwpIHtcbiAgICB0aGlzLiRlbCA9ICRlbDtcbiAgICB0aGlzLmNvbXBvbmVudHMgPSBbXTtcbiAgICB0aGlzLmxhYmxlciA9IG5ldyBMYWJsZXIoKTtcbiAgICB0aGlzLmRpYWxvZ3VlID0gbmV3IFRleHREaWFsb2d1ZSh0aGlzLiRlbCwgdGhpcy5jdGFubGVlKTtcbiAgICB0aGlzLmdlbmVyaWNVaSA9IG5ldyBHZW5lcmljVWlFbGVtZW50cyh0aGlzLiRlbCk7XG4gIH1cblxuICBTbGlkZVVYLnByb3RvdHlwZS5wb3B1bGF0ZSA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2YXIgY29tcG9uZW50LCBpLCBsZW4sIHJlZiwgcmVzdWx0cztcbiAgICB0aGlzLnJlbW92ZUN1cnJlbnRDb21wb25lbnRzKCk7XG4gICAgdGhpcy5jb21wb25lbnRzID0gW107XG4gICAgaWYgKChkYXRhICE9IG51bGwgPyBkYXRhLmNvbXBvbmVudHMgOiB2b2lkIDApID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmVmID0gZGF0YS5jb21wb25lbnRzO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIGNvbXBvbmVudCA9IHJlZltpXTtcbiAgICAgIHJlc3VsdHMucHVzaCh0aGlzLmNvbXBvbmVudHMucHVzaCh0aGlzLmFkZENvbXBvbmVudChjb21wb25lbnQpKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIFNsaWRlVVgucHJvdG90eXBlLmFkZENvbXBvbmVudCA9IGZ1bmN0aW9uKGNvbXBvbmVudERhdGEpIHtcbiAgICB2YXIgY29tcG9uZW50O1xuICAgIHN3aXRjaCAoY29tcG9uZW50RGF0YS5raW5kKSB7XG4gICAgICBjYXNlIFwiY2FsbC1zaWduLXNlbGVjdFwiOlxuICAgICAgICBjb21wb25lbnQgPSBuZXcgQ2FsbFNpZ25TZWxlY3QodGhpcy4kZWwsIGNvbXBvbmVudERhdGEuY29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiZGVmZW5kZXItY2FyZHNcIjpcbiAgICAgICAgY29tcG9uZW50ID0gbmV3IERlZmVuZGVyQ2FyZHModGhpcy4kZWwsIGNvbXBvbmVudERhdGEuY29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiZGlhbG9ndWVcIjpcbiAgICAgICAgY29tcG9uZW50ID0gbmV3IERpYWxvZ3VlKHRoaXMuJGVsLCBjb21wb25lbnREYXRhLmNvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImR1dGllc1wiOlxuICAgICAgICBjb21wb25lbnQgPSBuZXcgRHV0aWVzKHRoaXMuJGVsLCBjb21wb25lbnREYXRhLmNvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImRpYWxvZ3VlLXBhZ2VcIjpcbiAgICAgICAgY29tcG9uZW50ID0gbmV3IERpYWxvZ3VlUGFnZSh0aGlzLiRlbCwgY29tcG9uZW50RGF0YS5jb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJlcGlzb2RlLWludHJvXCI6XG4gICAgICAgIGNvbXBvbmVudCA9IG5ldyBFcGlzb2RlSW50cm8odGhpcy4kZWwsIGNvbXBvbmVudERhdGEuY29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiZXBpc29kZS1vdXRyb1wiOlxuICAgICAgICBjb21wb25lbnQgPSBuZXcgRXBpc29kZU91dHJvKHRoaXMuJGVsLCBjb21wb25lbnREYXRhLmNvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImV4cGxvcmUtY2FyZHNcIjpcbiAgICAgICAgY29tcG9uZW50ID0gbmV3IEV4cGxvcmVDYXJkcyh0aGlzLiRlbCwgY29tcG9uZW50RGF0YS5jb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJnaG9zdC11eFwiOlxuICAgICAgICBjb21wb25lbnQgPSBuZXcgR2hvc3RVWCh0aGlzLiRlbCwgY29tcG9uZW50RGF0YS5jb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJwZXJzb25hbC1pbmZvLWludHJvXCI6XG4gICAgICAgIGNvbXBvbmVudCA9IG5ldyBQZXJzb25hbEluZm9JbnRybyh0aGlzLiRlbCwgY29tcG9uZW50RGF0YS5jb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJzZWxlY3Rpb24tZGlhbG9ndWVcIjpcbiAgICAgICAgY29tcG9uZW50ID0gbmV3IFNlbGVjdGlvbkRpYWxvZ3VlKHRoaXMuJGVsLCBjb21wb25lbnREYXRhLmNvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInNpbXBsZS1zZWxlY3Rpb25cIjpcbiAgICAgICAgY29tcG9uZW50ID0gbmV3IFNpbXBsZVNlbGVjdGlvbih0aGlzLiRlbCwgY29tcG9uZW50RGF0YS5jb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJzb3VuZC10ZXN0XCI6XG4gICAgICAgIGNvbXBvbmVudCA9IG5ldyBTb3VuZFRlc3QodGhpcy4kZWwsIGNvbXBvbmVudERhdGEuY29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwicXVpelwiOlxuICAgICAgICBjb21wb25lbnQgPSBuZXcgUXVpeih0aGlzLiRlbCwgY29tcG9uZW50RGF0YS5jb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGFyaXN0b3RsZVtcInRocm93XCJdKFwidHJpZWQgdG8gY3JlYXRlIGFuIHVucmVjb2duaXplZCBjb21wb25lbnQgdHlwZTogYFwiICsgY29tcG9uZW50RGF0YS5raW5kICsgXCJgXCIpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgfTtcblxuICBTbGlkZVVYLnByb3RvdHlwZS5yZW1vdmVDdXJyZW50Q29tcG9uZW50cyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBjb21wb25lbnQsIGksIGxlbiwgcmVmLCByZXN1bHRzO1xuICAgIHJlZiA9IHRoaXMuY29tcG9uZW50cztcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjb21wb25lbnQgPSByZWZbaV07XG4gICAgICByZXN1bHRzLnB1c2goY29tcG9uZW50LmRlc3Ryb3koKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIFNsaWRlVVgucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnJlbW92ZUN1cnJlbnRDb21wb25lbnRzKCk7XG4gICAgdGhpcy5sYWJsZXIuZGVzdHJveSgpO1xuICAgIHRoaXMuZGlhbG9ndWUuZGVzdHJveSgpO1xuICAgIHJldHVybiB0aGlzLmdlbmVyaWNVaS5kZXN0cm95KCk7XG4gIH07XG5cbiAgcmV0dXJuIFNsaWRlVVg7XG5cbn0pKCk7XG4iLCJ2YXIgQXVkaW9UcmFjaywgQ2xvc2VkQ2FwdGlvbiwgQ3RhbmxlZSwgU2VxdWVuY2UsIFRleHREaWFsb2d1ZTtcblxuQXVkaW9UcmFjayA9IHJlcXVpcmUoJ2VwaXNvZGUvYXVkaW8tdHJhY2snKTtcblxuU2VxdWVuY2UgPSByZXF1aXJlKCdtaXNjL3NlcXVlbmNlJyk7XG5cbkN0YW5sZWUgPSByZXF1aXJlKCdzbGlkZS11eC9kaWFsb2d1ZS1hY3RvcnMvY3RhbmxlZScpO1xuXG5DbG9zZWRDYXB0aW9uID0gcmVxdWlyZSgnc2xpZGUtdXgvZGlhbG9ndWUtYWN0b3JzL2Nsb3NlZC1jYXB0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gVGV4dERpYWxvZ3VlID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBUZXh0RGlhbG9ndWUoJHBhcmVudCkge1xuICAgIHZhciB0b2tlbjEsIHRva2VuMiwgdG9rZW4zLCB0b2tlbjQsIHRva2VuNSwgdG9rZW42LCB0b2tlbjc7XG4gICAgYXJpc3RvdGxlLmRpYWxvZ3VlID0gdGhpcztcbiAgICB0aGlzLmNjID0gbmV3IENsb3NlZENhcHRpb24oJHBhcmVudCwgdGhpcy5wbGF5TmV4dEFjdGlvbik7XG4gICAgdGhpcy5jdGFubGVlID0gbmV3IEN0YW5sZWUoJHBhcmVudCwgdGhpcy5wbGF5TmV4dEFjdGlvbik7XG4gICAgJCgnaHRtbCcpLm9uKFwia2V5ZG93blwiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICAgIGlmIChlLndoaWNoID09PSAzOSkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5wbGF5TmV4dEFjdGlvbigpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0b2tlbjEgPSBQdWJTdWIuc3Vic2NyaWJlKCdjdGFubGVlLmFjdGl2YXRlJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oYSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMucGxheUFjdGlvbihkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRva2VuMiA9IFB1YlN1Yi5zdWJzY3JpYmUoJ2N0YW5sZWUuYWRkLWV2ZW50LWxpc3RlbmVyJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oYSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuYWRkRXZlbnRMaXN0ZW5lcihkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRva2VuMyA9IFB1YlN1Yi5zdWJzY3JpYmUoJ2RpYWxvZ3VlLmFjdGl2YXRlJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oYSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMucGxheUFjdGlvbihkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHRva2VuNCA9IFB1YlN1Yi5zdWJzY3JpYmUoJ2RpYWxvZ3VlLmFkZC1ldmVudC1saXN0ZW5lcicsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGEsIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmFkZEV2ZW50TGlzdGVuZXIoZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0b2tlbjUgPSBQdWJTdWIuc3Vic2NyaWJlKCd2Y3IucGF1c2UnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihhLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5wYXVzZVRpbWVsaW5lKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0b2tlbjYgPSBQdWJTdWIuc3Vic2NyaWJlKCd2Y3IucGxheScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGEsIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnBsYXlUaW1lbGluZSgpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgdG9rZW43ID0gUHViU3ViLnN1YnNjcmliZSgndmNyLnJlcGxheScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGEsIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnJlcGxheVRpbWVsaW5lKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICB0aGlzLnRva2VucyA9IFt0b2tlbjEsIHRva2VuMiwgdG9rZW4zLCB0b2tlbjQsIHRva2VuNSwgdG9rZW42LCB0b2tlbjddO1xuICB9XG5cbiAgVGV4dERpYWxvZ3VlLnByb3RvdHlwZS5hY3RpdmF0ZSA9IGZ1bmN0aW9uKGRhdGExKSB7XG4gICAgdGhpcy5kYXRhID0gZGF0YTE7XG4gICAgaWYgKHRoaXMuZGF0YS50aW1lbGluZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudGltZWxpbmUgPSB0aGlzLmRhdGEudGltZWxpbmU7XG4gICAgdGhpcy5zZXF1ZW5jZSA9IG5ldyBTZXF1ZW5jZSh0aGlzLnRpbWVsaW5lKTtcbiAgICByZXR1cm4gdGhpcy5wbGF5QWN0aW9uKHRoaXMuc2VxdWVuY2UuZ2V0Q3VycmVudEl0ZW0oKS5hY3Rpb24pO1xuICB9O1xuXG4gIFRleHREaWFsb2d1ZS5wcm90b3R5cGUuc2F5ID0gZnVuY3Rpb24odGV4dCwgYXVkaW8sIG5leHQsIHR4dFBvcykge1xuICAgIGlmICh0ZXh0ICE9IG51bGwpIHtcbiAgICAgIHRoaXMuYWN0b3Iuc2F5KHRleHQsIHR4dFBvcyk7XG4gICAgICB0aGlzLmFjdG9yLnN0YXJ0VGFsa2luZygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFjdG9yLmhpZGVUZXh0KCk7XG4gICAgfVxuICAgIGlmIChhdWRpbyAhPSBudWxsKSB7XG4gICAgICBpZiAodGhpcy50cmFjayAhPSBudWxsKSB7XG4gICAgICAgIHRoaXMudHJhY2suc3RvcCgpO1xuICAgICAgfVxuICAgICAgdGhpcy50cmFjayA9IG5ldyBBdWRpb1RyYWNrKGF1ZGlvKTtcbiAgICAgIHRoaXMudHJhY2sucGxheSh7fSwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICBfdGhpcy50cmFjay5kZXN0cm95KCk7XG4gICAgICAgICAgX3RoaXMudHJhY2sgPSBudWxsO1xuICAgICAgICAgIF90aGlzLmFjdG9yLnN0b3BUYWxraW5nKCk7XG4gICAgICAgICAgaWYgKG5leHQgPT09ICdhdWRpbycpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5wbGF5TmV4dEFjdGlvbigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0pKHRoaXMpKTtcbiAgICB9XG4gICAgaWYgKG5leHQgPT09ICdjbGljaycpIHtcbiAgICAgIHRoaXMuYWN0b3Iuc2hvd05leHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5hY3Rvci5oaWRlTmV4dCgpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG5leHQgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgIHJldHVybiBhcmlzdG90bGUudGltZW91dCgoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpcy5wbGF5TmV4dEFjdGlvbigpO1xuICAgICAgICB9O1xuICAgICAgfSkodGhpcyksIG5leHQpO1xuICAgIH1cbiAgfTtcblxuICBUZXh0RGlhbG9ndWUucHJvdG90eXBlLnBhdXNlVGltZWxpbmUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVmLCByZWYxO1xuICAgIGlmICgocmVmID0gdGhpcy50cmFjaykgIT0gbnVsbCkge1xuICAgICAgcmVmLnNvdW5kLnBhdXNlZCA9IHRydWU7XG4gICAgfVxuICAgIGlmICgocmVmMSA9IHRoaXMuYWN0b3IpICE9IG51bGwpIHtcbiAgICAgIHJlZjEuc3RvcFRhbGtpbmcoKTtcbiAgICB9XG4gICAgcmV0dXJuIFB1YlN1Yi5wdWJsaXNoKFwidGltZXJzLnBhdXNlXCIpO1xuICB9O1xuXG4gIFRleHREaWFsb2d1ZS5wcm90b3R5cGUucGxheVRpbWVsaW5lID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlZiwgcmVmMTtcbiAgICBpZiAoKHJlZiA9IHRoaXMudHJhY2spICE9IG51bGwpIHtcbiAgICAgIHJlZi5zb3VuZC5wYXVzZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKChyZWYxID0gdGhpcy5hY3RvcikgIT0gbnVsbCkge1xuICAgICAgcmVmMS5zdGFydFRhbGtpbmcoKTtcbiAgICB9XG4gICAgcmV0dXJuIFB1YlN1Yi5wdWJsaXNoKFwidGltZXJzLnJlc3VtZVwiKTtcbiAgfTtcblxuICBUZXh0RGlhbG9ndWUucHJvdG90eXBlLnJlcGxheVRpbWVsaW5lID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJlZjtcbiAgICBpZiAoKHJlZiA9IHRoaXMudHJhY2spICE9IG51bGwpIHtcbiAgICAgIHJlZi5zdG9wKCk7XG4gICAgfVxuICAgIHRoaXMuc2VxdWVuY2UucmVzZXQoKTtcbiAgICByZXR1cm4gdGhpcy5wbGF5QWN0aW9uKHRoaXMuc2VxdWVuY2UuZ2V0Q3VycmVudEl0ZW0oKS5hY3Rpb24pO1xuICB9O1xuXG4gIFRleHREaWFsb2d1ZS5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBpZiAoZGF0YS5ldmVudCA9PT0gJ2NvbXBsZXRlJykge1xuICAgICAgcmV0dXJuIHRoaXMudHJhY2suYWRkT25Db21wbGV0ZSgoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBhcmlzdG90bGUuY29tbWFuZGVyW1wiZG9cIl0oZGF0YS5hY3Rpb24pO1xuICAgICAgICB9O1xuICAgICAgfSkodGhpcykpO1xuICAgIH1cbiAgfTtcblxuICBUZXh0RGlhbG9ndWUucHJvdG90eXBlLmNvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG4gICAgUHViU3ViLnB1Ymxpc2goJ2RpYWxvZ3VlLmNvbXBsZXRlJyk7XG4gICAgcmV0dXJuIHRoaXMuYWN0b3IuY29tcGxldGUoKTtcbiAgfTtcblxuICBUZXh0RGlhbG9ndWUucHJvdG90eXBlLnBsYXlOZXh0QWN0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMudHJhY2sgIT0gbnVsbCkge1xuICAgICAgdGhpcy50cmFjay5zdG9wKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNlcXVlbmNlLmlzQXRMYXN0SXRlbSgpKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlcXVlbmNlLm5leHQoKTtcbiAgICAgIHJldHVybiB0aGlzLnBsYXlBY3Rpb24odGhpcy5zZXF1ZW5jZS5nZXRDdXJyZW50SXRlbSgpLmFjdGlvbik7XG4gICAgfVxuICB9O1xuXG4gIFRleHREaWFsb2d1ZS5wcm90b3R5cGUucGxheUFjdGlvbiA9IGZ1bmN0aW9uKGFjdGlvbklkKSB7XG4gICAgdmFyIGFjdGlvbiwgb2xkQWN0b3I7XG4gICAgaWYgKHRoaXMuZGF0YS5hY3Rpb25zW2FjdGlvbklkXSA9PSBudWxsKSB7XG4gICAgICBhcmlzdG90bGVbXCJ0aHJvd1wiXShcIkRpYWxvZ3VlIHdhcyBhc2tlZCB0byBwbGF5IHRoZSBhY3Rpb24gbmFtZWQgYFwiICsgYWN0aW9uSWQgKyBcImAsIGJ1dCBubyBhY3Rpb24gd2l0aCB0aGF0IGlkIGV4aXN0cy5cIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGFjdGlvbiA9IHRoaXMub3ZlcmxheURlZmF1bHRzKGFjdGlvbklkKTtcbiAgICBvbGRBY3RvciA9IHRoaXMuYWN0b3I7XG4gICAgdGhpcy5zZXRBY3RvcihhY3Rpb24uYWN0b3IpO1xuICAgIGlmIChvbGRBY3RvciAhPT0gdm9pZCAwKSB7XG4gICAgICBpZiAob2xkQWN0b3IgIT09IHRoaXMuYWN0b3IpIHtcbiAgICAgICAgb2xkQWN0b3Iuc2xlZXAoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGFjdGlvbi5hY3Rpb24gIT0gbnVsbCkge1xuICAgICAgYXJpc3RvdGxlLmNvbW1hbmRlcltcImRvXCJdKGFjdGlvbi5hY3Rpb24sIHRydWUpO1xuICAgIH1cbiAgICB0aGlzLmFjdG9yLnNwZWNpYWwoYWN0aW9uKTtcbiAgICByZXR1cm4gdGhpcy5zYXkoYWN0aW9uLnRleHQsIGFjdGlvbi5hdWRpbywgYWN0aW9uLm5leHQsIGFjdGlvbi50eHRQb3MpO1xuICB9O1xuXG4gIFRleHREaWFsb2d1ZS5wcm90b3R5cGUuZ2V0SW5kZXhPZkFjdGlvbiA9IGZ1bmN0aW9uKGFjdGlvbikge1xuICAgIHZhciBkYXRhLCBpLCBqLCBsZW4sIHJlZjtcbiAgICBpZiAodGhpcy50aW1lbGluZSA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgcmVmID0gdGhpcy50aW1lbGluZTtcbiAgICBmb3IgKGkgPSBqID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaiA8IGxlbjsgaSA9ICsraikge1xuICAgICAgZGF0YSA9IHJlZltpXTtcbiAgICAgIGlmIChkYXRhLmFjdGlvbiA9PT0gYWN0aW9uKSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBUZXh0RGlhbG9ndWUucHJvdG90eXBlLm92ZXJsYXlEZWZhdWx0cyA9IGZ1bmN0aW9uKGFjdGlvbklkKSB7XG4gICAgdmFyIGFjdGlvbnMsIGtleSwgcmVmLCB2YWw7XG4gICAgaWYgKHRoaXMuZGF0YS5kZWZhdWx0cyA9PSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5kYXRhLmFjdGlvbnNbYWN0aW9uSWRdO1xuICAgIH1cbiAgICBhY3Rpb25zID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmRhdGEuZGVmYXVsdHMpKTtcbiAgICByZWYgPSB0aGlzLmRhdGEuYWN0aW9uc1thY3Rpb25JZF07XG4gICAgZm9yIChrZXkgaW4gcmVmKSB7XG4gICAgICB2YWwgPSByZWZba2V5XTtcbiAgICAgIGFjdGlvbnNba2V5XSA9IHZhbDtcbiAgICB9XG4gICAgcmV0dXJuIGFjdGlvbnM7XG4gIH07XG5cbiAgVGV4dERpYWxvZ3VlLnByb3RvdHlwZS5zZXRBY3RvciA9IGZ1bmN0aW9uKGFjdG9yKSB7XG4gICAgaWYgKGFjdG9yID09IG51bGwpIHtcbiAgICAgIHRoaXMuYWN0b3IgPSB0aGlzLmN0YW5sZWU7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHN3aXRjaCAoYWN0b3IpIHtcbiAgICAgIGNhc2UgJ3dhcmNvcmUnOlxuICAgICAgY2FzZSAnc2VrdGltdXMnOlxuICAgICAgY2FzZSAnZmlyZXdhbGwnOlxuICAgICAgY2FzZSAncGFja2V0JzpcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0b3IgPSB0aGlzLmNjO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIHRoaXMuYWN0b3IgPSB0aGlzLmN0YW5sZWU7XG4gICAgfVxuICB9O1xuXG4gIFRleHREaWFsb2d1ZS5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBqLCBsZW4sIHJlZiwgcmVzdWx0cywgdG9rZW47XG4gICAgdGhpcy5kYXRhID0gbnVsbDtcbiAgICB0aGlzLnRpbWVsaW5lID0gbnVsbDtcbiAgICB0aGlzLnNlcXVlbmNlID0gbnVsbDtcbiAgICB0aGlzLmN0YW5sZWUuZGVzdHJveSgpO1xuICAgIHRoaXMuY2MuZGVzdHJveSgpO1xuICAgIGlmICh0aGlzLnRyYWNrICE9IG51bGwpIHtcbiAgICAgIHRoaXMudHJhY2suc3RvcCgpO1xuICAgIH1cbiAgICByZWYgPSB0aGlzLnRva2VucztcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChqID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICB0b2tlbiA9IHJlZltqXTtcbiAgICAgIHJlc3VsdHMucHVzaChQdWJTdWIudW5zdWJzY3JpYmUodG9rZW4pKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgcmV0dXJuIFRleHREaWFsb2d1ZTtcblxufSkoKTtcbiJdfQ==

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
