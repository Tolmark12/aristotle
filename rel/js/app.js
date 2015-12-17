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
buf.push("<div class=\"top\"><div class=\"main\"><div class=\"name-and-rank\"><div class=\"status-badge\"><img" + (jade.attr("data-src", "" + (badge) + "", true, false)) + " class=\"shadow-icon\"/></div><div class=\"divider\"></div><div class=\"identity\"><h1 class=\"name\">" + (jade.escape((jade_interp = name) == null ? '' : jade_interp)) + "</h1><h2 class=\"rank\">" + (jade.escape((jade_interp = rank) == null ? '' : jade_interp)) + "</h2></div><div class=\"divider\"></div></div><div" + (jade.cls(['episodes',"" + (episode) + ""], [null,true])) + "><div" + (jade.cls(['badge',"" + (episode == '1' ? 'active' : '') + ""], [null,true])) + "><img data-src=\"ep1-badge\" class=\"shadow-icon\"/></div><div" + (jade.cls(['badge',"" + (episode == '2' ? 'active' : '') + ""], [null,true])) + "><img data-src=\"ep2-badge\" class=\"shadow-icon\"/></div><div" + (jade.cls(['badge',"" + (episode == '3' ? 'active' : '') + ""], [null,true])) + "><img data-src=\"ep3-badge\" class=\"shadow-icon\"/></div><div" + (jade.cls(['badge',"" + (episode == '4' ? 'active' : '') + ""], [null,true])) + "><img data-src=\"ep4-badge\" class=\"shadow-icon\"/></div></div></div><div class=\"learn-mode\"><h2>[ Warcore ]</h2><h1>Learn Mode</h1></div></div>");}.call(this,"badge" in locals_for_with?locals_for_with.badge:typeof badge!=="undefined"?badge:undefined,"name" in locals_for_with?locals_for_with.name:typeof name!=="undefined"?name:undefined,"rank" in locals_for_with?locals_for_with.rank:typeof rank!=="undefined"?rank:undefined,"episode" in locals_for_with?locals_for_with.episode:typeof episode!=="undefined"?episode:undefined));;return buf.join("");
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

jadeTemplate['slide-ux/components/call-sign-select'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"call-sign-select\"><div class=\"badge-box\"><div class=\"badge\"><img data-src=\"rank-badge-recruit\" class=\"shadow-icon\"/></div><div class=\"txt\"><h1>John Nimbus</h1><h2>Recruit</h2></div></div><p>Every Defender worth their salt has a call sign they are known by. Let’s choose yours.<br/><br/> Keep it clean, recruit.</p><div class=\"input\"><input id=\"callsign-txt\" type=\"text\" placeholder=\"Type a Call Sign\"/><div id=\"generate-callsign\" class=\"button\">Generate One For Me  </div></div></div>");;return buf.join("");
};

jadeTemplate['slide-ux/components/defender-card'] = function template(locals) {
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

jadeTemplate['slide-ux/components/defender-cards'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"defender-cards\"></div>");;return buf.join("");
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
buf.push("<div class=\"duty-content\"><div class=\"title\">" + (jade.escape(null == (jade_interp = title) ? "" : jade_interp)) + "</div><div class=\"user-content\">" + (null == (jade_interp = content) ? "" : jade_interp) + "</div><div id=\"acknowledge\" class=\"icon-btn\"> <div class=\"txt\">I Understand</div><img data-src=\"btn-acknowledge\" class=\"shadow-icon\"/></div></div>");}.call(this,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined,"content" in locals_for_with?locals_for_with.content:typeof content!=="undefined"?content:undefined));;return buf.join("");
};

jadeTemplate['slide-ux/components/episode-intro'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (episode, title, subtitle) {
buf.push("<div class=\"episode-bookend episode-intro\"><div class=\"bg\"><img data-src=\"tesselation\" class=\"shadow-icon\"/></div><div class=\"content\"><div class=\"fist\"><img data-src=\"lightning-fist\" class=\"shadow-icon\"/></div><div class=\"badges\"><div class=\"badge active\"><img data-src=\"ep1-badge\" scalable=\"true\" class=\"shadow-icon\"/></div><div" + (jade.cls(['badge',episode > 1 ? "active" : ""], [null,true])) + "><img data-src=\"ep2-badge\" scalable=\"true\" class=\"shadow-icon\"/></div><div" + (jade.cls(['badge',episode > 2 ? "active" : ""], [null,true])) + "><img data-src=\"ep3-badge\" scalable=\"true\" class=\"shadow-icon\"/></div><div" + (jade.cls(['badge',episode > 3 ? "active" : ""], [null,true])) + "><img data-src=\"ep4-badge\" scalable=\"true\" class=\"shadow-icon\"/></div></div><div class=\"txt\"><div class=\"title\">" + (jade.escape(null == (jade_interp = title) ? "" : jade_interp)) + "</div><div class=\"subtitle\">" + (jade.escape(null == (jade_interp = subtitle) ? "" : jade_interp)) + "</div></div></div></div>");}.call(this,"episode" in locals_for_with?locals_for_with.episode:typeof episode!=="undefined"?episode:undefined,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined,"subtitle" in locals_for_with?locals_for_with.subtitle:typeof subtitle!=="undefined"?subtitle:undefined));;return buf.join("");
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
;var locals_for_with = (locals || {});(function (organization) {
buf.push("<div class=\"personal-info-intro\"><h2>Employee Name</h2><h1>John Nimbus</h1><h2>Organization</h2><h1>" + (jade.escape(null == (jade_interp = organization) ? "" : jade_interp)) + "</h1><h2>Defender Rank</h2><h1>Recruit</h1><img data-src=\"rank-badge-recruit\" class=\"shadow-icon\"/><h2>Clearance Level</h2><h1>Critical Infrastructure Protection (CIP) Version Five</h1></div>");}.call(this,"organization" in locals_for_with?locals_for_with.organization:typeof organization!=="undefined"?organization:undefined));;return buf.join("");
};

jadeTemplate['slide-ux/components/sound-test'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"sound-test\"><div class=\"volume\"> <img data-src=\"speaker\" class=\"shadow-icon flip\"/><div class=\"txt\">Please Enable Your Audio Device</div><img data-src=\"speaker\" class=\"shadow-icon\"/></div><div class=\"silence\"><img data-src=\"no-phone\" class=\"shadow-icon\"/><div class=\"txt\">Please Silence Your Cell Phone</div><img data-src=\"no-phone\" class=\"shadow-icon\"/></div></div>");;return buf.join("");
};

jadeTemplate['slide-ux/ctanlee/ctanlee'] = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div class=\"ctanlee\"><div class=\"face\"></div><div class=\"speech-box\"> <div class=\"text\"> <span class=\"content\"> </span><span class=\"next\"></span></div></div></div>");;return buf.join("");
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

buf.push("</div></div><div class=\"buttons\"><div id=\"retry\" class=\"quiz-btn\"><img data-src=\"quiz-btn\" class=\"shadow-icon\"/><div class=\"txt\">Retry</div></div><div id=\"continue\" class=\"quiz-btn\"><img data-src=\"quiz-btn\" class=\"shadow-icon\"/><div class=\"txt\">Continue</div></div></div></div></div>");}.call(this,"episodeNumber" in locals_for_with?locals_for_with.episodeNumber:typeof episodeNumber!=="undefined"?episodeNumber:undefined,"scorePercentage" in locals_for_with?locals_for_with.scorePercentage:typeof scorePercentage!=="undefined"?scorePercentage:undefined,"score" in locals_for_with?locals_for_with.score:typeof score!=="undefined"?score:undefined,"answers1" in locals_for_with?locals_for_with.answers1:typeof answers1!=="undefined"?answers1:undefined,"answers2" in locals_for_with?locals_for_with.answers2:typeof answers2!=="undefined"?answers2:undefined,"decisions" in locals_for_with?locals_for_with.decisions:typeof decisions!=="undefined"?decisions:undefined));;return buf.join("");
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

var pxSymbolString = pxSymbolString || ''; pxSymbolString+='<symbol  id="New_Symbol" viewBox="-10.3 -10.3 20.6 20.6">	<polygon class="st33" points="9.8,-9.8 -9.8,-9.8 -9.8,9.8 9.8,9.8 	"/></symbol>';
var pxSvgIconString = pxSvgIconString || ''; pxSvgIconString+='<g id="first" class="aristotle-svg-svg ">			<use xlink:href="#New_Symbol"  width="20.6" height="20.6" x="-10.3" y="-10.3" transform="matrix(0.7046 0 0 -0.7046 11.2573 11.2573)" style="overflow:visible;"/></g><g id="ep4-badge" class="aristotle-svg-svg ">	<path  class="white  st16" d="M26.599,12.5H9.8v6.9h0.098v6.462l7.933,2.203l0.535-1.927l-6.468-1.797v-5.339h9.001		v0.257c-0.101,0.495-0.286,1.021-0.632,1.389c-0.347,0.37-0.828,0.55-1.468,0.55h-2.6h-0.6v2h0.6h2.6h3.8V27h2v-3.801h2V12.5z		 M17.199,14.5v2.503H15.5V14.5H17.199z M11.8,17.003V14.5h1.7v2.503H11.8z M19.199,17.003V14.5h1.7v2.503H19.199z M24.599,21.199		h-1.7v-1.704c0.141-0.795,0.106-1.435,0.097-1.563l-0.066-0.929h-0.031V14.5h1.7V21.199z"/><g  class="yellow " >		<g>			<path class="st15" d="M18.199,6.4l12,6.299V26.4l-12,6.299l-12-6.299V12.699L18.199,6.4 M18.199,4L4,11.399v16.398l14.199,7.396				l14.2-7.396V11.4L18.199,4L18.199,4z"/></g>	</g></g><g id="ep3-badge" class="aristotle-svg-svg ">	<polygon  class="white  st16" points="18.2,8.17 7.825,13.626 8.756,15.396 18.2,10.43 25.974,14.517 16.851,19.275 		17.775,21.048 26.901,16.289 26.901,18 26.901,18.696 16.849,23.98 17.78,25.751 26.901,20.956 26.901,21.898 26.901,23.296 		16.849,28.58 17.78,30.351 26.901,25.556 26.901,29.699 28.901,29.699 28.901,24.504 28.901,21.898 28.901,19.904 28.901,18 		28.901,13.796 	"/><g  class="yellow " >		<g id="XMLID_68_" class="aristotle-svg-svg ">			<path class="st15" d="M25.901,18.3c-0.1,0.396-0.4,0.7-0.8,0.7c-0.4,0-0.6-0.304-0.5-0.7c0.1-0.397,0.4-0.7,0.8-0.7				S25.901,17.9,25.901,18.3z"/></g>		<g id="XMLID_67_" class="aristotle-svg-svg ">			<path class="st15" d="M25.901,22.9c-0.1,0.397-0.4,0.697-0.8,0.697c-0.4,0-0.6-0.3-0.5-0.697c0.1-0.397,0.4-0.701,0.8-0.701				S25.901,22.5,25.901,22.9z"/></g>		<g id="XMLID_66_" class="aristotle-svg-svg ">			<path class="st15" d="M25.901,27.6c-0.1,0.4-0.4,0.7-0.8,0.7c-0.4,0-0.6-0.3-0.5-0.7c0.1-0.398,0.4-0.697,0.8-0.697				S25.901,27.199,25.901,27.6z"/></g>		<path class="st15" d="M32.4,11.399L18.2,4L4,11.397v16.398l14.2,7.396l0.048-0.025l0.052,0.027V35.14l14.1-7.344V11.399z			 M16.1,31.597L6.2,26.4V14.9l9.9,5.197V31.597z M30.2,26.4l-11.9,6.246V18.8L6.395,12.597L18.2,6.4l12,6.299V26.4z"/></g></g><g id="ep2-badge" class="aristotle-svg-svg ">	<g  class="white" >		<polygon class="st16" points="16.194,19.863 17.205,18.137 10.981,14.492 15.963,11.886 15.037,10.114 8,13.795 8,21.9 10,21.9 			10,16.235 		"/><polygon class="st16" points="19.2,28.048 19.2,21.1 17.2,21.1 17.2,28.06 12.058,25.411 11.142,27.189 18.203,30.826 			25.163,27.186 24.236,25.414 		"/><polygon class="st16" points="21.163,10.114 20.236,11.886 25.271,14.52 19.094,18.137 20.105,19.863 26.2,16.293 26.2,21.9 			28.2,21.9 28.2,13.795 		"/></g>	<g  class="yellow " >		<g>			<path class="st15" d="M18.2,6.4l12,6.299V26.4l-12,6.299L6.2,26.4V12.699L18.2,6.4 M18.2,4L4,11.397v16.398l14.2,7.396				l14.2-7.396V11.399L18.2,4L18.2,4z"/></g>	</g></g><g id="ep1-badge" class="aristotle-svg-svg ">	<g  class="white " >		<polygon class="st16" points="11.798,14.884 10.402,16.315 12.642,18.5 5.501,18.5 5.501,20.5 12.727,20.5 10.384,22.901 			11.816,24.298 16.515,19.482 		"/><polygon class="st16" points="22.907,13.207 21.493,11.793 19.2,14.086 19.2,6.1 17.2,6.1 17.2,14.086 14.907,11.793 			13.493,13.207 18.2,17.914 		"/><polygon class="st16" points="13.501,25.884 14.898,27.315 17.2,25.071 17.2,33 19.2,33 19.2,25.071 21.501,27.315 22.898,25.884 			18.2,21.303 		"/><polygon class="st16" points="31.7,18.5 23.702,18.5 25.989,16.324 24.61,14.875 19.768,19.482 24.593,24.307 26.007,22.893 			23.614,20.5 31.7,20.5 		"/></g>	<g  class="yellow" >		<g>			<path class="st15" d="M18.2,6.4l12,6.299V26.4l-12,6.299L6.2,26.4V12.699L18.2,6.4 M18.2,4L4,11.397v16.398l14.2,7.396				l14.2-7.396V11.399L18.2,4L18.2,4z"/></g>	</g></g><g id="rank-badge-cyber-cadet" class="aristotle-svg-svg ">	<polygon class="st16" points="30.5,4 31.3,5.7 33,6 31.8,7.2 32.1,9 30.5,8.2 29,9 29.3,7.2 28.1,6 29.8,5.7 	"/><polygon class="st16" points="6.5,4 7.201,5.7 8.901,6 7.701,7.2 8,9 6.5,8.2 5,9 5.3,7.2 4,6 5.8,5.7 	"/><polygon class="st15" points="15.5,33.3 13.201,32.101 13,32.2 13,32 7.901,29.3 7.901,17 16.1,12.7 16.6,10.1 5.8,15.7 		5.8,30.601 15,35.399 	"/><rect x="4" y="4" class="st18" width="29" height="39.101"/><polygon class="st15" points="20.5,10.1 20.901,12.7 29.1,17 29.1,29.3 22.1,33 21.3,35.899 31.201,30.601 31.201,15.7 	"/><g>		<polygon class="st16" points="19.201,33.3 16.401,35.3 18.5,26 15,28.8 17.1,16.101 20.6,16.101 19.201,21.7 22,19.601 			19.6,29.601 22.201,27.601 17.701,43.101 		"/><rect x="13.5" y="15.399" class="st16" width="9.897" height="1.398"/><polygon class="st16" points="18.5,6.899 17.1,15.399 19.901,15.399 		"/><g id="XMLID_45_" class="aristotle-svg-svg ">			<g id="XMLID_157_" class="aristotle-svg-svg ">				<g id="XMLID_185_" class="aristotle-svg-svg ">					<g id="XMLID_229_" class="aristotle-svg-svg ">						<polygon class="st16" points="18.5,5.5 17.1,6.3 17.1,8.2 18.5,9 19.901,8.2 19.901,6.3 						"/></g>				</g>			</g>		</g>	</g></g><g id="rank-badge-technical-cadet" class="aristotle-svg-svg ">	<polygon class="st15" points="20.75,11.1 21.05,13.3 27.75,13.3 27.75,29 21.05,33.601 20.75,36.5 29.851,30.101 29.851,11.1 	"/><polygon class="st15" points="16.05,33.7 9.45,29.3 9.45,13.3 16.05,13.3 16.45,11.1 7.25,11.1 7.351,30.399 16.45,36.5 	"/><g>		<g>			<g>				<rect x="4" y="4" class="st18" width="29" height="39.101"/><polygon class="st16" points="18.55,16.101 15.75,18.899 18.55,43 21.351,18.899 				"/></g>		</g>		<rect x="13.55" y="15.399" class="st16" width="9.899" height="1.398"/><polygon class="st16" points="18.55,6.899 17.149,15.399 19.95,15.399 		"/><g id="XMLID_166_" class="aristotle-svg-svg ">			<g id="XMLID_168_" class="aristotle-svg-svg ">				<g id="XMLID_169_" class="aristotle-svg-svg ">					<g id="XMLID_170_" class="aristotle-svg-svg ">						<polygon class="st16" points="18.55,5.5 17.149,6.3 17.149,8.2 18.55,9 19.95,8.2 19.95,6.3 						"/></g>				</g>			</g>		</g>	</g>	<polygon class="st16" points="30.55,4 31.351,5.7 33.05,6 31.851,7.2 32.149,9 30.55,8.2 29.05,9 29.351,7.2 28.05,6 29.851,5.7 			"/><polygon class="st16" points="6.55,4 7.25,5.7 8.95,6 7.75,7.2 8.05,9 6.55,8.2 5.05,9 5.351,7.2 4.05,6 5.75,5.7 	"/></g><g id="rank-badge-cadet-first-class" class="aristotle-svg-svg ">	<rect x="4" y="4" class="st18" width="29" height="39.101"/><g>		<path class="st15" d="M27.7,13.3V29l-9.2,6.396L9.4,29.2l-0.101-16h18.4 M29.8,11.1H7.2l0.1,19.299L18.601,38l11.3-7.897v-19			L29.8,11.1L29.8,11.1z"/></g>	<line class="st30" x1="7.8" y1="21" x2="29.2" y2="21"/><polygon class="st16" points="30.5,4 31.3,5.7 33,6 31.8,7.2 32.101,9 30.5,8.2 29,9 29.3,7.2 28,6 29.8,5.7 	"/><polygon class="st16" points="6.401,4 7.2,5.7 8.901,6 7.7,7.2 8,9 6.401,8.2 5,9 5.2,7.2 4,6 5.7,5.7 	"/></g><g id="rank-badge-cadet" class="aristotle-svg-svg ">	<rect x="4" y="4" class="st18" width="29" height="39.101"/><g>		<path class="st15" d="M27.649,13.3V29l-9.199,6.399L9.35,29.203l-0.1-16h18.399 M29.85,11.1h-22.7L7.25,30.399l11.3,7.604			l11.3-7.897L29.85,11.1L29.85,11.1z"/></g>	<line class="st30" x1="7.85" y1="21" x2="29.25" y2="21"/></g><g id="rank-badge-recruit" class="aristotle-svg-svg ">	<g>		<path class="st15" d="M27.75,13.3V29l-9.2,6.396L9.45,29.2l-0.101-16h18.4 M29.85,11.1h-22.7L7.25,30.399l11.3,7.604l11.3-7.897			L29.85,11.1L29.85,11.1z"/></g>	<rect x="4" y="4" class="st18" width="29" height="39.101"/></g><g id="chapter-progress-chapter" class="aristotle-svg-svg ">	<g id="XMLID_150_" class="aristotle-svg-svg ">		<path class="st25" d="M9.7,6.399l3.5,1.898v4.102l-3.5,1.898l-3.5-1.898V8.298L9.7,6.399 M9.7,4L4,7v6.7l5.7,3l5.7-3V7L9.7,4			L9.7,4z"/></g></g><g id="chapter-progress-slide" class="aristotle-svg-svg ">	<rect x="4" y="4" class="st25" width="6.4" height="6.397"/></g><g id="chapter-progress-test" class="aristotle-svg-svg ">	<polygon class="st12" points="17.9,21.1 13.799,23.3 5.799,19.199 5.799,10.199 8.4,8.8 7,7.5 4,9.1 4,20.199 13.799,25.199 		19.599,22.199 	"/><polygon class="st12" points="13.799,4 9.199,6.3 11,7.5 13.799,6.1 21.699,10.199 21.699,19.199 20.4,19.8 21.799,21.1 		23.5,20.199 23.5,9.1 	"/><g>		<polygon class="st11" points="6.699,5.8 15.799,11.5 13,11.4 20.599,18 17.299,18 22.199,22.8 12.4,16.5 16.099,16.5 8,10.199 			10.9,10.1 		"/></g></g><g id="chapter-progress-duties" class="aristotle-svg-svg ">	<circle class="st25" cx="7.2" cy="7.2" r="3.2"/></g><g id="list-progress-base" class="aristotle-svg-svg ">	<g id="hex-outer_1_" class="aristotle-svg-svg ">		<g id="XMLID_1080_" class="aristotle-svg-svg ">			<path class="st11" d="M18.2,7.201l11.3,5.897v12.899l-11.3,5.898L6.9,25.998V13.101L18.2,7.201 M18.2,4L4,11.398v16.4l14.2,7.398				l14.2-7.396V11.4L18.2,4L18.2,4z"/></g>	</g>	<g id="hex-inner_1_" class="aristotle-svg-svg ">		<g id="XMLID_2384_" class="aristotle-svg-svg ">			<polygon class="st15" points="18.2,29.9 9.099,25 9.099,14.101 18.2,9.201 27.2,14.101 27.2,24.9 			"/></g>	</g></g><g id="list-progress-complete" class="aristotle-svg-svg ">	<g id="hex-inner" class="aristotle-svg-svg ">		<g>			<polygon class="st32" points="21.8,13.801 25.701,16.201 21.201,16.201 20.5,16.201 27.201,21.9 27.201,14.101 18.101,9.201 				16.101,10.201 			"/></g>		<g>			<polygon class="st32" points="15.5,23.5 11.9,21.101 16.101,21.101 17.8,21 9.101,14.301 9.101,25 18.101,29.9 22.201,27.701 							"/></g>	</g>	<g id="hex-outer" class="aristotle-svg-svg ">		<polygon class="st6" points="24,28.801 18.101,32 6.8,26 6.8,13.101 10.4,11.201 8.4,9.101 4,11.4 4,27.701 18.101,35.101 			26.8,30.601 		"/><polygon class="st6" points="18.101,4 11.5,7.4 14.4,9.201 18.101,7.201 29.5,13.101 29.5,26 27.701,26.9 29.9,29 32.3,27.701 			32.3,11.4 		"/></g>	<g id="lightning_1_" class="aristotle-svg-svg ">		<g id="lightning" class="aristotle-svg-svg ">			<polygon class="st15" points="7.701,6.5 21.201,14.9 17.101,14.9 28.3,24.5 23.4,24.5 30.5,31.5 16.201,22.301 21.601,22.301 				9.601,13.101 14,12.9 			"/></g>	</g></g><g id="ctanlee" class="aristotle-svg-svg ">	<circle class="st16" cx="21" cy="21" r="6.399"/><path class="st7" d="M25.5,37.399c7.2-2,12.5-8.5,12.5-16.396"/><path class="st7" d="M4,21c0,7.8,5.3,14.396,12.5,16.396"/><path class="st7" d="M32.8,8.8C29.7,5.901,25.6,4,21,4c-4.7,0-8.9,1.896-12,4.896"/></g><g id="action-btn-fist" class="aristotle-svg-svg ">	<polygon class="st16" points="35.7,86.895 4,70.294 4,33.794 35.7,17.195 67.401,33.794 67.401,70.294 	"/><polygon class="st11" points="35.7,84.496 6.2,68.996 6.2,34.996 35.7,19.595 65.2,34.996 65.2,68.996 	"/><path class="st23" d="M42.299,12.695c0,0,7.4,2,10.103,3.4c-3.397,6.5-11.5,2.397-11.5,2.397s-2.3,2.799-3,3.603		c11.103,5.196,26.2,0.696,26.2,0.696l-0.897,5.898l-5.603,13.5l-9.7,5L30.203,82.495L9.502,71.693l25.799-32.398l-2.698-19.102		L42.299,12.695z"/><path class="st26" d="M42.299,12.695c0,0,7.4,2,10.103,3.4c-3.397,6.5-11.5,2.397-11.5,2.397s-2.3,2.799-3,3.603		c11.103,5.196,26.2,0.696,26.2,0.696l-0.897,5.898l-5.603,13.5l-9.7,5L30.203,82.495L9.502,71.693l25.799-32.398l-2.698-19.102		L42.299,12.695z"/><path class="st23" d="M48,5.496l-2.103-1.103c-1.8-0.897-3.897-0.2-4.8,1.5l-7,13.396l8.5,4.398l7-13.398		C50.5,8.496,49.799,6.395,48,5.496"/><path class="st26" d="M48,5.496l-2.103-1.103c-1.8-0.897-3.897-0.2-4.8,1.5l-7,13.396l8.5,4.398l7-13.398		C50.5,8.496,49.799,6.395,48,5.496z"/><path class="st23" d="M54.5,6.895l2.603,1.7c1.3,0.8,1.697,2.5,0.8,3.8l-7.3,11.2c-3-0.9-4.397-2.103-6.303-4.304l6.303-11.396		C51.5,6.595,53.2,6.095,54.5,6.895"/><path class="st26" d="M54.5,6.895l2.603,1.7c1.3,0.8,1.697,2.5,0.8,3.8l-7.3,11.2c-3-0.9-4.397-2.103-6.303-4.304l6.303-11.396		C51.5,6.595,53.2,6.095,54.5,6.895z"/><path class="st23" d="M62.5,14.996l-1.897-1.303c-1.303-0.898-3-0.5-3.803,0.7l-6.1,9.2c1.3,2,3.1,3.6,6,4l6.397-8.9		C64,17.496,63.7,15.794,62.5,14.996"/><path class="st26" d="M62.5,14.996l-1.897-1.303c-1.303-0.898-3-0.5-3.803,0.7l-6.1,9.2c1.3,2,3.1,3.6,6,4l6.397-8.9		C64,17.496,63.7,15.794,62.5,14.996z"/><path class="st23" d="M67.101,24.195l-5.302,6.9c-2.301-0.7-3.898-1.9-5.101-3.4l5.3-7.3c0.897-1.3,2.8-1.5,4-0.5l0.7,0.603		C67.799,21.395,68,22.996,67.101,24.195"/><path class="st26" d="M67.101,24.195l-5.302,6.9c-2.301-0.7-3.898-1.9-5.101-3.4l5.3-7.3c0.897-1.3,2.8-1.5,4-0.5l0.7,0.603		C67.799,21.395,68,22.996,67.101,24.195z"/><path class="st23" d="M58,34.095c0.897-0.603,3.8-3,3.8-3c-2.1-0.4-3.8-1.603-5.1-3.4l-2.803,2.7c-1.103,1-0.897,2.7,0.303,3.5		l0.6,0.396C55.799,34.895,57.2,34.695,58,34.095"/><path class="st37" d="M58,34.095c0.897-0.603,3.8-3,3.8-3c-2.1-0.4-3.8-1.603-5.1-3.4l-2.803,2.7c-1.103,1-0.897,2.7,0.303,3.5		l0.6,0.396C55.799,34.895,57.2,34.695,58,34.095z"/><path class="st23" d="M50.2,30.996L49,30.098c-0.8-0.603-1-1.7-0.5-2.603l2.2-3.897c1.397,2.5,3.397,3.8,6,4l-3.4,3.196		C52.5,31.695,51.2,31.695,50.2,30.996"/><path class="st37" d="M50.2,30.996L49,30.098c-0.8-0.603-1-1.7-0.5-2.603l2.2-3.897c1.397,2.5,3.397,3.8,6,4l-3.4,3.196		C52.5,31.695,51.2,31.695,50.2,30.996z"/><path class="st23" d="M41.601,24.794l6,4.304l3.103-5.5c-3-0.7-4.5-1.804-6.303-4.304L41.601,24.794z"/><path class="st26" d="M41.601,24.794l6,4.304l3.103-5.5c-3-0.7-4.5-1.804-6.303-4.304L41.601,24.794z"/><path class="st23" d="M10,71.496l20.897-33.397l-2.197-19l10.8-10.2c0,0,10.103,5.3,12.8,6.7c-3.397,6.5-10.101,2.3-10.101,2.3		s-1.302,2.896-1.899,3.7c9,4.696,10.803,9,3.5,16.397"/><path class="st36" d="M10,71.496l20.897-33.397l-2.197-19l10.8-10.2c0,0,10.103,5.3,12.8,6.7c-3.397,6.5-10.101,2.3-10.101,2.3		s-1.302,2.896-1.899,3.7c9,4.696,10.803,9,3.5,16.397"/><path class="st16" d="M26,73.695c0.897-8.3,2.8-16.5,5.603-24.6c0.197,1.8,0.397,3.6,0.697,5.3c1.9-5.8,4.4-11.397,7.303-16.897		C39.299,39.6,39.205,41.6,39,43.6c2.3-3.5,4.7-6.804,7.397-10c1.303-1.603,1.7-1.2,0.603,0.5c-3.8,6.101-6.897,12.5-9.3,19		c-0.103-1.804-0.2-3.603-0.2-5.399c-2.2,5.199-4,10.5-5.3,15.899c-0.4-1.899-0.803-3.804-1.2-5.804		C28.901,62.996,27.2,68.294,26,73.695"/></g><g id="mini-generation" class="aristotle-svg-svg ">	<rect x="4" y="4" class="st18" width="179" height="132.801"/><rect x="41.601" y="53.101" class="st25" width="87.701" height="11.5"/><path class="st11" d="M127.901,63h-84.7v-8.397h84.7V63L127.901,63z M130.901,51.601h-3h-84.7h-3v3v8.5v3h3h84.7h3v-3v-8.5V51.601		L130.901,51.601z"/><rect x="36" y="59.801" class="st25" width="99" height="66.5"/><path class="st11" d="M133.5,124.801h-96v-63.5h96V124.801z M136.5,58.301h-3h-96h-3v3v63.5v3h3h96h3v-3v-63.5V58.301z"/><polygon class="st11" points="27.101,127.801 48.901,127.801 46.5,5.9 29.401,5.9 	"/><rect x="44.101" y="55.601" class="st25" width="82.701" height="6.5"/><path class="st22" d="M125.901,61h-80.7v-4.397h80.7V61L125.901,61z M127.901,54.601h-84.7v8.5h84.7V54.601L127.901,54.601z"/><rect x="38.5" y="62.301" class="st25" width="94" height="61.5"/><path class="st22" d="M131.5,122.801h-92v-59.5h92V122.801z M133.5,61.301h-96v63.5h96V61.301z"/><rect x="128.601" y="64.101" class="st16" width="7.103" height="1.396"/><rect x="128.601" y="64.101" class="st22" width="7.103" height="1.396"/><rect x="124.601" y="94.101" class="st16" width="7.103" height="1.3"/><rect x="124.601" y="94.101" class="st21" width="7.103" height="1.3"/><path class="st16" d="M36.101,64.801h5.7H36.101z"/><rect x="35.401" y="64.101" class="st22" width="7.1" height="1.396"/><rect x="39.401" y="94.101" class="st16" width="7.1" height="1.3"/><rect x="39.401" y="94.101" class="st21" width="7.1" height="1.3"/><rect x="37.601" y="62.801" class="st16" width="95.803" height="1.196"/><rect x="36.101" y="61.301" class="st22" width="98.803" height="4.196"/><rect x="83.301" y="71.201" class="st15" width="5.5" height="10.5"/><path class="st22" d="M87.901,80.701h-3.5v-8.5h3.5V80.701z M89.901,70.201h-2h-3.5h-2v2v8.5v2h2h3.5h2v-2v-8.5V70.201z"/><rect x="64.401" y="71.201" class="st15" width="5.5" height="10.5"/><path class="st22" d="M69,80.701h-3.5v-8.5H69V80.701z M71,70.201h-2h-3.5h-2v2v8.5v2h2H69h2v-2v-8.5V70.201z"/><rect x="73.901" y="71.201" class="st15" width="5.5" height="10.5"/><path class="st22" d="M78.401,80.701h-3.5v-8.5h3.5V80.701z M80.401,70.201h-2h-3.5h-2v2v8.5v2h2h3.5h2v-2v-8.5V70.201z"/><rect x="111.7" y="71.201" class="st15" width="5.5" height="10.5"/><path class="st22" d="M116.2,80.701h-3.5v-8.5h3.5V80.701z M118.2,70.201h-2h-3.5h-2v2v8.5v2h2h3.5h2v-2v-8.5V70.201z"/><rect x="121.101" y="71.201" class="st15" width="5.5" height="10.5"/><path class="st22" d="M125.601,80.701h-3.5v-8.5h3.5V80.701z M127.601,70.201h-2h-3.5h-2v2v8.5v2h2h3.5h2v-2v-8.5V70.201z"/><rect x="92.801" y="71.201" class="st15" width="5.5" height="10.5"/><path class="st22" d="M97.301,80.701h-3.5v-8.5h3.5V80.701z M99.301,70.201h-2h-3.5h-2v2v8.5v2h2h3.5h2v-2v-8.5V70.201z"/><rect x="102.2" y="71.201" class="st15" width="5.5" height="10.5"/><path class="st22" d="M106.801,80.701h-3.5v-8.5h3.5V80.701z M108.801,70.201h-2h-3.5h-2v2v8.5v2h2h3.5h2v-2v-8.5V70.201z"/><rect x="45.601" y="71.201" class="st15" width="5.5" height="10.5"/><path class="st22" d="M50.101,80.701h-3.5v-8.5h3.5V80.701z M52.101,70.201h-2h-3.5h-2v2v8.5v2h2h3.5h2v-2v-8.5V70.201z"/><rect x="55" y="71.201" class="st15" width="5.5" height="10.5"/><path class="st22" d="M59.5,80.701H56v-8.5h3.5V80.701z M61.5,70.201h-2H56h-2v2v8.5v2h2h3.5h2v-2v-8.5V70.201z"/><rect x="111.7" y="107.9" class="st15" width="5.5" height="10.5"/><path class="st22" d="M116.2,117.4h-3.5v-8.5h3.5V117.4z M118.2,106.9h-2h-3.5h-2v2v8.5v2h2h3.5h2v-2v-8.5V106.9z"/><rect x="121.101" y="107.9" class="st15" width="5.5" height="10.5"/><path class="st22" d="M125.601,117.4h-3.5v-8.5h3.5V117.4z M127.601,106.9h-2h-3.5h-2v2v8.5v2h2h3.5h2v-2v-8.5V106.9z"/><rect x="45.601" y="107.9" class="st15" width="5.5" height="10.5"/><path class="st22" d="M50.101,117.4h-3.5v-8.5h3.5V117.4z M52.101,106.9h-2h-3.5h-2v2v8.5v2h2h3.5h2v-2v-8.5V106.9z"/><rect x="55" y="107.9" class="st15" width="5.5" height="10.5"/><path class="st22" d="M59.5,117.4H56v-8.5h3.5V117.4z M61.5,106.9h-2H56h-2v2v8.5v2h2h3.5h2v-2v-8.5V106.9z"/><rect x="25.601" y="11.101" class="st11" width="24.7" height="4"/><path class="st11" d="M49.301,14H26.7v-1.897h22.601V14z M51.401,10h-2.103H26.697h-2.103v2.103v1.896v2.104h2.103h22.604h2.103V14		v-1.897L51.401,10L51.401,10z"/><g>		<g>			<g>				<g>					<g>						<g>							<g>								<defs>									<path id="SVGID_1_" d="M138.601,97.201v19.104h15.101c0.102-2.199,1.896-3.899,4.102-3.899c2.197,0,4,1.7,4.104,3.899										h14.799V97.201H138.601z"/></defs>								<clipPath id="SVGID_2_">									<use xlink:href="#SVGID_1_"  style="overflow:visible;"/></clipPath>								<path class="st19" d="M174.801,124.801H140.6V99.2h34.201V124.801z M176.801,97.201H138.6v29.604h38.201V97.201z"/></g>						</g>					</g>				</g>			</g>		</g>		<g>			<g>				<g>					<g>						<g>							<g>								<defs>									<path id="SVGID_3_" d="M138.601,97.201v19.104h15.101c0.102-2.199,1.896-3.899,4.102-3.899c2.197,0,4,1.7,4.104,3.899										h14.799V97.201H138.601z"/></defs>								<clipPath id="SVGID_4_">									<use xlink:href="#SVGID_3_"  style="overflow:visible;"/></clipPath>								<circle class="st27" cx="157.801" cy="116.5" r="17.6"/></g>						</g>					</g>				</g>			</g>		</g>		<g>			<g>				<g>					<g>						<g>							<g>								<defs>									<path id="SVGID_5_" d="M138.601,97.201v19.104h15.101c0.102-2.199,1.896-3.899,4.102-3.899c2.197,0,4,1.7,4.104,3.899										h14.799V97.201H138.601z"/></defs>								<clipPath id="SVGID_6_">									<use xlink:href="#SVGID_5_"  style="overflow:visible;"/></clipPath>								<polyline class="st0" points="157.801,116.5 147.2,112.101 148.7,107.4 157.801,116.5 								"/></g>						</g>					</g>				</g>			</g>		</g>		<g>			<g>				<g>					<g>						<g>							<g>								<defs>									<path id="SVGID_7_" d="M138.601,97.201v19.104h15.101c0.102-2.199,1.896-3.899,4.102-3.899c2.197,0,4,1.7,4.104,3.899										h14.799V97.201H138.601z"/></defs>								<clipPath id="SVGID_8_">									<use xlink:href="#SVGID_7_"  style="overflow:visible;"/></clipPath>								<polyline class="st31" points="157.801,116.5 146.301,116.5 145.901,111.601 157.801,116.5 								"/></g>						</g>					</g>				</g>			</g>		</g>		<g>			<g>				<g>					<g>						<g>							<g>								<defs>									<path id="SVGID_9_" d="M138.601,97.201v19.104h15.101c0.102-2.199,1.896-3.899,4.102-3.899c2.197,0,4,1.7,4.104,3.899										h14.799V97.201H138.601z"/></defs>								<clipPath id="SVGID_10_">									<use xlink:href="#SVGID_9_"  style="overflow:visible;"/></clipPath>								<polyline class="st29" points="157.801,116.5 168.5,112.101 170.7,116.5 157.801,116.5 								"/></g>						</g>					</g>				</g>			</g>		</g>		<g>			<g>				<g>					<g>						<g>							<g>								<defs>									<path id="SVGID_11_" d="M138.601,97.201v19.104h15.101c0.102-2.199,1.896-3.899,4.102-3.899c2.197,0,4,1.7,4.104,3.899										h14.799V97.201H138.601z"/></defs>								<clipPath id="SVGID_12_">									<use xlink:href="#SVGID_11_"  style="overflow:visible;"/></clipPath>								<polyline class="st17" points="157.801,116.5 166,108.4 169.7,111.601 157.801,116.5 								"/></g>						</g>					</g>				</g>			</g>		</g>		<g>			<g>				<g>					<g>						<g>							<g>								<defs>									<path id="SVGID_13_" d="M138.601,97.201v19.104h15.101c0.102-2.199,1.896-3.899,4.102-3.899c2.197,0,4,1.7,4.104,3.899										h14.799V97.201H138.601z"/></defs>								<clipPath id="SVGID_14_">									<use xlink:href="#SVGID_13_"  style="overflow:visible;"/></clipPath>								<polyline class="st10" points="157.801,116.5 162.301,105.9 167,107.4 157.801,116.5 								"/></g>						</g>					</g>				</g>			</g>		</g>		<g>			<g>				<g>					<g>						<g>							<g>								<defs>									<path id="SVGID_15_" d="M138.601,97.201v19.104h15.101c0.102-2.199,1.896-3.899,4.102-3.899c2.197,0,4,1.7,4.104,3.899										h14.799V97.201H138.601z"/></defs>								<clipPath id="SVGID_16_">									<use xlink:href="#SVGID_15_"  style="overflow:visible;"/></clipPath>								<polyline class="st3" points="157.801,116.5 157.801,105 162.801,104.701 157.801,116.5 								"/></g>						</g>					</g>				</g>			</g>		</g>		<g>			<g>				<g>					<g>						<g>							<g>								<defs>									<path id="SVGID_17_" d="M138.601,97.201v19.104h15.101c0.102-2.199,1.896-3.899,4.102-3.899c2.197,0,4,1.7,4.104,3.899										h14.799V97.201H138.601z"/></defs>								<clipPath id="SVGID_18_">									<use xlink:href="#SVGID_17_"  style="overflow:visible;"/></clipPath>								<polyline class="st35" points="157.801,116.5 153.401,105.9 157.801,103.701 157.801,116.5 								"/></g>						</g>					</g>				</g>			</g>		</g>		<g>			<g>				<g>					<g>						<g>							<g>								<defs>									<path id="SVGID_19_" d="M138.601,97.201v19.104h15.101c0.102-2.199,1.896-3.899,4.102-3.899c2.197,0,4,1.7,4.104,3.899										h14.799V97.201H138.601z"/></defs>								<clipPath id="SVGID_20_">									<use xlink:href="#SVGID_19_"  style="overflow:visible;"/></clipPath>								<polyline class="st34" points="157.801,116.5 149.7,108.4 152.901,104.701 157.801,116.5 								"/></g>						</g>					</g>				</g>			</g>		</g>	</g>	<path class="st11" d="M177.2,125.801h-38.898V118H177.2V125.801z M179.2,116h-42.898v11.801H179.2V116z"/><path class="st28" d="M153.7,123.701H162V116.5c0-2.299-1.898-4.1-4.199-4.1s-4.102,1.898-4.102,4.1V123.701z"/><path class="st11" d="M162,125.4h-8.699v-1.3H162V125.4L162,125.4z M164,122.101h-12.699v5.3H164V122.101L164,122.101z"/><line class="st28" x1="161.901" y1="120.101" x2="153.5" y2="120.101"/></g><g id="mini-substation" class="aristotle-svg-svg ">	<rect x="4" y="4" class="st18" width="179" height="132.8"/><rect x="43.9" y="54.399" class="st25" width="102.6" height="71.898"/><path class="st11" d="M145,124.8H45.4V55.901H145V124.8z M148,52.899h-3H45.4h-3v3v68.898v3h3H145h3v-3V55.899V52.899z"/><rect x="40.1" y="53.399" class="st25" width="110.201" height="8.604"/><path class="st11" d="M148.801,60.5H41.6v-5.601h107.201V60.5z M151.801,51.899h-3H41.6h-3v3v5.604v3h3h107.201h3v-3v-5.604V51.899		z"/><polyline class="st8" points="26.9,84.601 55.701,127.101 57.6,127.101 50.5,84.601 26.9,84.601 19.801,127.101 21.801,127.101 		50.5,84.601 	"/><polygon class="st8" points="26.9,84.601 50.5,84.601 48.201,69.3 29.201,69.3 	"/><line class="st8" x1="26.9" y1="84.601" x2="48.201" y2="69.3"/><line class="st8" x1="29.201" y1="69.3" x2="50.5" y2="84.601"/><polygon class="st8" points="30.701,55.5 46.701,55.5 48.201,69.3 29.201,69.3 	"/><line class="st8" x1="48.201" y1="69.3" x2="30.701" y2="55.5"/><line class="st8" x1="46.701" y1="55.5" x2="29.201" y2="69.3"/><polygon class="st8" points="30.701,55.5 46.701,55.5 45.701,42.8 31.701,42.8 	"/><line class="st8" x1="30.701" y1="55.5" x2="45.701" y2="42.8"/><line class="st8" x1="31.701" y1="42.8" x2="46.701" y2="55.5"/><polygon class="st8" points="7.5,42.8 69.9,42.8 45.701,30.5 32.201,30.5 	"/><polygon class="st8" points="32.201,30.5 45.701,30.5 45.701,42.8 31.701,42.8 	"/><polyline class="st8" points="45.701,30.5 31.701,42.8 45.701,42.8 32.201,30.5 	"/><polyline class="st8" points="51,33.101 45.701,42.8 31.701,42.8 26.9,33.101 	"/><line class="st8" x1="26.9" y1="42.601" x2="19.301" y2="37"/><line class="st8" x1="51" y1="42.601" x2="58.1" y2="37"/><line class="st8" x1="58.1" y1="37" x2="58.1" y2="42.8"/><line class="st8" x1="26.9" y1="33.101" x2="26.9" y2="42.601"/><line class="st8" x1="51" y1="42.601" x2="51" y2="33.101"/><polygon class="st8" points="32.201,30.5 45.701,30.5 44.201,22.399 33.201,22.399 	"/><polyline class="st8" points="33.201,22.399 45.701,30.5 32.201,30.5 44.201,22.399 	"/><polygon class="st8" points="34.701,12.5 42.701,12.5 44.201,22.399 33.201,22.399 	"/><polygon class="st8" points="34.701,12.601 42.701,12.601 58.701,22.399 18.801,22.399 	"/><polyline class="st8" points="42.701,12.601 33.201,22.399 44.201,22.399 34.701,12.601 	"/><polyline class="st8" points="48.5,16.8 44.201,22.399 33.201,22.399 28.9,16.8 	"/><line class="st8" x1="28.9" y1="16.8" x2="28.9" y2="22.2"/><line class="st8" x1="48.5" y1="22.2" x2="48.5" y2="16.8"/><line class="st8" x1="59.801" y1="26.399" x2="59.801" y2="22.899"/><line class="st8" x1="71.4" y1="46.7" x2="71.4" y2="43.2"/><line class="st8" x1="17.6" y1="26.399" x2="17.6" y2="22.899"/><rect x="46.4" y="56.899" class="st25" width="97.6" height="66.898"/><path class="st22" d="M143,122.8H47.4V57.901H143V122.8z M145,55.899H45.4v68.898H145V55.899z"/><rect x="42.6" y="55.899" class="st25" width="105.201" height="3.604"/><path class="st22" d="M146.801,58.5H43.6v-1.601h103.201V58.5z M148.801,54.899H41.6v5.604h107.201V54.899z"/><rect x="40.801" y="59" class="st22" width="108.799" height="1.5"/><line class="st21" x1="143.301" y1="116.8" x2="47.1" y2="116.8"/><rect x="75.201" y="66.7" class="st15" width="5.799" height="11.196"/><path class="st22" d="M80,76.899h-3.799V67.7H80V76.899z M82,65.7h-2h-3.799h-2v2v9.196v2h2H80h2v-2V67.7V65.7z"/><rect x="85.301" y="66.7" class="st15" width="5.799" height="11.196"/><path class="st22" d="M90.1,76.899h-3.799V67.7H90.1V76.899z M92.1,65.7h-2h-3.799h-2v2v9.196v2h2H90.1h2v-2V67.7V65.7z"/><rect x="55" y="66.7" class="st15" width="5.805" height="11.196"/><path class="st22" d="M59.801,76.899h-3.805V67.7h3.805V76.899z M61.801,65.7h-2h-3.805h-2v2v9.196v2h2h3.805h2v-2V67.7V65.7z"/><rect x="65.1" y="66.7" class="st15" width="5.801" height="11.196"/><path class="st22" d="M69.9,76.899H66.1V67.7H69.9V76.899z M71.9,65.7h-2H66.1h-2v2v9.196v2h2H69.9h2v-2V67.7V65.7z"/><rect x="75.201" y="81.3" class="st15" width="5.799" height="11.2"/><path class="st22" d="M80,91.5h-3.799v-9.2H80V91.5z M82,80.3h-2h-3.799h-2v2v9.2v2h2H80h2v-2v-9.2V80.3z"/><rect x="55" y="81.3" class="st15" width="5.805" height="11.2"/><path class="st22" d="M59.801,91.5h-3.805v-9.2h3.805V91.5z M61.801,80.3h-2h-3.805h-2v2v9.2v2h2h3.805h2v-2v-9.2V80.3z"/><rect x="65.1" y="81.3" class="st15" width="5.801" height="11.2"/><path class="st22" d="M69.9,91.5H66.1v-9.2H69.9V91.5z M71.9,80.3h-2H66.1h-2v2v9.2v2h2H69.9h2v-2v-9.2V80.3z"/><rect x="161.4" y="107.101" class="st11" width="7" height="8.197"/><rect x="157.9" y="115.7" class="st11" width="14.801" height="1.6"/><path class="st11" d="M171.701,118.2v8.6l0,0l-10.896-8.6H171.701z M172.701,117.2H157.9l13.5,10.6h1.4v-10.6H172.701z"/><path class="st11" d="M169.801,118.2l-10.9,8.6l0,0v-8.6H169.801z M172.701,117.2H157.9v10.6h1.4L172.701,117.2z"/><path class="st11" d="M174.701,111.2c0,1.397-1.301,2.5-2,2.5c-0.701,0-1.201-1.103-1.201-2.5c0-1.4,0.5-2.5,1.201-2.5		C173.4,108.7,174.701,109.8,174.701,111.2"/><path class="st11" d="M156.1,111.2c0,1.397,1.301,2.5,2,2.5c0.701,0,1.201-1.103,1.201-2.5c0-1.4-0.5-2.5-1.201-2.5		C157.4,108.7,156.1,109.8,156.1,111.2"/><rect x="157.9" y="106.5" class="st11" width="5.1" height="9.396"/><rect x="157.877" y="100.193" transform="matrix(0.9848 -0.1739 0.1739 0.9848 -15.1158 29.2605)" class="st11" width="3.1" height="1.4"/><polygon class="st11" points="155.6,74.601 154,74.899 157.201,100.601 161.4,99.8 	"/><rect x="158.459" y="105.518" transform="matrix(0.9849 -0.1732 0.1732 0.9849 -16.0022 29.3981)" class="st11" width="3.901" height="1.702"/><path class="st11" d="M161.5,105.5l-2.5,0.396c-1.195,0.201-2.396-0.602-2.6-1.799v-0.2c-0.199-1.197,0.6-2.397,1.801-2.6		l2.5-0.398c1.199-0.196,2.398,0.604,2.604,1.804v0.196C163.6,104.2,162.801,105.3,161.5,105.5"/><rect x="153.376" y="74.134" transform="matrix(0.985 -0.1727 0.1727 0.985 -10.5446 27.8333)" class="st11" width="2.704" height="0.798"/><rect x="152.607" y="74.092" transform="matrix(-0.9848 0.1735 -0.1735 -0.9848 316.6871 122.0996)" class="st11" width="0.799" height="1.598"/><rect x="169.766" y="100.2" transform="matrix(0.9848 0.1736 -0.1736 0.9848 20.1158 -28.2065)" class="st11" width="3.1" height="1.4"/><polygon class="st11" points="176.701,74.899 175.201,74.601 169.301,99.8 173.6,100.601 	"/><rect x="168.316" y="105.668" transform="matrix(0.9848 0.1738 -0.1738 0.9848 21.1059 -27.9732)" class="st11" width="3.899" height="1.7"/><path class="st11" d="M171.801,106l-2.5-0.397c-1.201-0.201-2-1.397-1.805-2.603v-0.2c0.199-1.197,1.398-2,2.604-1.8l2.5,0.396		c1.201,0.201,2,1.398,1.801,2.604v0.2C174.1,105.399,173,106.2,171.801,106"/><rect x="174.652" y="74.194" transform="matrix(-0.9847 -0.1741 0.1741 -0.9847 336.3237 178.6931)" class="st11" width="2.697" height="0.797"/><rect x="177.282" y="74.067" transform="matrix(0.9849 0.1733 -0.1733 0.9849 15.6627 -29.6591)" class="st11" width="0.8" height="1.599"/><rect x="167.701" y="106.5" class="st11" width="5.104" height="9.396"/><path class="st8" d="M152.801,74.101c0.5-3.103-1.5-4.103-6.201-3.103"/><path class="st8" d="M177.801,74.101c-0.104-10.803-23-5.897-31.604-3.701"/></g><g id="mini-control-center" class="aristotle-svg-svg ">	<rect x="4" y="4" class="st18" width="179" height="132.8"/><rect x="30.9" y="56.199" class="st25" width="100" height="70.201"/><path class="st11" d="M129.4,124.8h-97V57.602h97V124.8z M132.4,54.699h-3h-97h-3v3V124.9v3h3h97h3v-3V57.699V54.699z"/><rect x="27.1" y="55.199" class="st25" width="107.5" height="8.5"/><path class="st11" d="M133.1,62.1H28.6v-5.5h104.5V62.1z M136.1,53.699h-3H28.6h-3v3v5.5v3h3h104.5h3v-3v-5.5V53.699z"/><rect x="117.444" y="46.095" transform="matrix(0.6031 0.7976 -0.7976 0.6031 84.9096 -77.061)" class="st11" width="4.9" height="1.401"/><rect x="117.444" y="46.095" transform="matrix(0.6031 0.7976 -0.7976 0.6031 84.9096 -77.061)" class="st8" width="4.9" height="1.401"/><rect x="113.565" y="50.904" transform="matrix(-0.9541 0.2994 -0.2994 -0.9541 244.396 66.3664)" class="st11" width="7.098" height="2"/><rect x="113.565" y="50.904" transform="matrix(-0.9541 0.2994 -0.2994 -0.9541 244.396 66.3664)" class="st8" width="7.098" height="2"/><path class="st11" d="M120.301,44.6c-0.396,1.301-1.801,2.1-3.102,1.698c-1.299-0.398-2.104-1.8-1.699-3.104		c0.4-1.299,1.801-2.101,3.1-1.696C120,41.9,120.699,43.3,120.301,44.6"/><circle class="st8" cx="117.9" cy="43.9" r="2.5"/><path class="st11" d="M123.4,48.6c1,1,1,2.6,0,3.6s-2.604,1-3.604,0s-1-2.6,0-3.6C120.9,47.6,122.5,47.6,123.4,48.6"/><circle class="st8" cx="121.699" cy="50.3" r="2.5"/><path class="st11" d="M115.1,53.4c0,1.897-1.6,3.5-3.5,3.5c-1.896,0-3.5-1.603-3.5-3.5s1.604-3.5,3.5-3.5		C113.5,49.9,115.1,51.5,115.1,53.4"/><circle class="st8" cx="111.6" cy="53.4" r="3.5"/><rect x="33.4" y="58.699" class="st25" width="95" height="65.201"/><path class="st22" d="M127.4,122.8h-93V59.602h93V122.8z M129.4,57.699h-97V124.9h97V57.699z"/><rect x="29.6" y="57.699" class="st25" width="102.5" height="3.5"/><path class="st22" d="M131.1,60.1H30.6v-1.5h100.5V60.1z M133.1,56.699H28.6v5.5h104.5V56.699z"/><line class="st18" x1="128.199" y1="117.699" x2="33.5" y2="117.699"/><line class="st21" x1="128.199" y1="117.699" x2="33.5" y2="117.699"/><path class="st11" d="M108.801,20.8c-2.5,2.5,1.299,13.2,10.299,22.103c8.9,8.897,19.701,12.699,22.104,10.299"/><path class="st8" d="M108.801,20.8c-2.5,2.5,1.299,13.2,10.299,22.103c8.9,8.897,19.701,12.699,22.104,10.299"/><ellipse transform="matrix(-0.7071 -0.7071 0.7071 -0.7071 187.1985 151.5463)" class="st8" cx="124.985" cy="37.004" rx="22.898" ry="1.8"/><polyline class="st8" points="118.4,33 133.9,28.1 128.9,43.5 	"/><polyline class="st8" points="108.801,20.8 133.9,28.1 141.199,53.199 	"/><rect x="132.658" y="26.94" transform="matrix(0.7071 0.7071 -0.7071 0.7071 59.021 -86.6105)" class="st11" width="2.801" height="2"/><rect x="132.658" y="26.94" transform="matrix(0.7071 0.7071 -0.7071 0.7071 59.021 -86.6105)" class="st8" width="2.801" height="2"/><rect x="80.1" y="68.199" class="st15" width="5.701" height="11"/><path class="st22" d="M84.9,78.199h-3.701v-9H84.9V78.199z M86.9,67.199h-2h-3.701h-2v2v9v2h2H84.9h2v-2v-9V67.199z"/><rect x="60.4" y="68.199" class="st15" width="5.695" height="11"/><path class="st22" d="M65.199,78.199H61.5v-9h3.699V78.199z M67.199,67.199h-2H61.5h-2v2v9v2h2h3.699h2v-2v-9V67.199z"/><rect x="70.301" y="68.199" class="st15" width="5.699" height="11"/><path class="st22" d="M75,78.199h-3.699v-9H75V78.199L75,78.199z M77,67.199h-2h-3.699h-2v2v9v2h2H75h2v-2v-9V67.199L77,67.199z"/><rect x="40.801" y="68.199" class="st15" width="5.699" height="11"/><path class="st22" d="M45.5,78.199h-3.699v-9H45.5V78.199L45.5,78.199z M47.5,67.199h-2h-3.699h-2v2v9v2h2H45.5h2v-2v-9V67.199		L47.5,67.199z"/><rect x="50.6" y="68.199" class="st15" width="5.701" height="11"/><path class="st22" d="M55.301,78.199H51.6v-9h3.701V78.199z M57.301,67.199h-2H51.6h-2v2v9v2h2h3.701h2v-2v-9V67.199z"/><rect x="80.1" y="82.4" class="st15" width="5.701" height="11"/><path class="st22" d="M84.9,92.3h-3.701v-9H84.9V92.3z M86.9,81.4h-2h-3.701h-2v2v9v2h2H84.9h2v-2v-9V81.4z"/><rect x="60.4" y="82.4" class="st15" width="5.695" height="11"/><path class="st22" d="M65.199,92.3H61.5v-9h3.699V92.3z M67.199,81.4h-2H61.5h-2v2v9v2h2h3.699h2v-2v-9V81.4z"/><rect x="70.301" y="82.4" class="st15" width="5.699" height="11"/><path class="st22" d="M75,92.3h-3.699v-9H75V92.3L75,92.3z M77,81.4h-2h-3.699h-2v2v9v2h2H75h2v-2v-9V81.4L77,81.4z"/><rect x="40.801" y="82.4" class="st15" width="5.699" height="11"/><path class="st22" d="M45.5,92.3h-3.699v-9H45.5V92.3L45.5,92.3z M47.5,81.4h-2h-3.699h-2v2v9v2h2H45.5h2v-2v-9V81.4L47.5,81.4z"/><rect x="50.6" y="82.4" class="st15" width="5.701" height="11"/><path class="st22" d="M55.301,92.3H51.6v-9h3.701V92.3z M57.301,81.4h-2H51.6h-2v2v9v2h2h3.701h2v-2v-9V81.4z"/><path class="st11" d="M144,114.3l-0.699,0.302c-2.5,1.198-5.602,0.1-6.801-2.5c-1.199-2.5-0.1-5.602,2.5-6.802l0.699-0.3L144,114.3		z"/><rect x="142.228" y="104.949" transform="matrix(0.9074 -0.4203 0.4203 0.9074 -31.9954 71.0967)" class="st11" width="6.199" height="6.401"/><polygon class="st11" points="149.199,110.8 169.9,105.5 163.4,91.5 146,103.9 	"/><rect x="176.523" y="89.636" transform="matrix(0.9072 -0.4207 0.4207 0.9072 -22.1698 84.0604)" class="st11" width="5.899" height="5.302"/><polygon class="st11" points="183.199,93.5 184.6,92.3 182.801,88.4 181,88.6 	"/><rect x="166.338" y="87.491" transform="matrix(0.9074 -0.4203 0.4203 0.9074 -25.3067 79.9454)" class="st11" width="4.8" height="19.802"/><rect x="175.864" y="90.377" transform="matrix(0.9073 -0.4205 0.4205 0.9073 -22.9571 83.0164)" class="st11" width="1.898" height="6.402"/><polygon class="st11" points="175.301,103.4 177.1,98.199 173.4,90.3 168.301,88.3 	"/><rect x="156.871" y="111.606" transform="matrix(0.5464 0.8375 -0.8375 0.5464 166.7081 -82.8855)" class="st11" width="6" height="1.7"/><rect x="152.229" y="117.071" transform="matrix(-0.9541 0.2994 -0.2994 -0.9541 341.4933 184.325)" class="st11" width="8.798" height="2.497"/><path class="st11" d="M160.801,109.699c-0.602,1.604-2.396,2.4-4,1.804c-1.602-0.603-2.396-2.398-1.801-4		c0.6-1.603,2.4-2.398,4-1.804C160.6,106.3,161.4,108.1,160.801,109.699"/><path class="st11" d="M164.6,114.3c1.201,1.2,1.201,3.2,0,4.396c-1.195,1.201-3.195,1.201-4.396,0		c-1.201-1.196-1.201-3.196,0-4.396C161.4,113,163.4,113,164.6,114.3"/><path class="st11" d="M154.301,120.199c0,2.4-1.896,4.304-4.301,4.304c-2.4,0-4.301-1.898-4.301-4.304		c0-2.396,1.896-4.299,4.301-4.299S154.301,117.9,154.301,120.199"/><rect x="131.6" y="121.8" class="st11" width="39" height="6"/></g><g id="btn-lightning" class="aristotle-svg-svg ">	<path class="st15" d="M4,51.002l59,12l60-12l-3-2.459L63.005,59.941L7,48.55L4,51.002z M7,18.452L62.979,7.066L120,19.42l3-2.42		L63,4l0,0L4,16L7,18.452z"/><path class="st15" d="M32.495,50.604c9.363-3.825,19.271-6.614,29.527-8.252c-1.822,1.227-3.6,2.491-5.325,3.787		c7.282-1.253,14.733-1.91,22.276-1.934c-2.351,0.923-4.646,1.907-6.893,2.948c7.481,0.609,14.921,1.855,22.223,3.731		c-11.213-1.329-22.346-1.171-33.122,0.346c1.834-1.153,3.716-2.266,5.646-3.336c-6.846,0.652-13.564,1.838-20.106,3.528		c1.771-1.565,3.603-3.093,5.498-4.582C45.563,47.595,38.97,48.853,32.495,50.604z"/></g><g id="quiz-header" class="aristotle-svg-svg ">	<line class="st4" x1="4" y1="34" x2="281" y2="34"/><line class="st4" x1="361.001" y1="34" x2="638.001" y2="34"/><polygon class="st12" points="334.838,52.221 323,58.366 300.5,46.686 300.5,21.313 307.811,17.518 304.164,13.777 295.5,18.275 		295.5,49.724 323,64 339.714,55.325 	"/><polygon class="st12" points="323,4 310.304,10.591 315.244,13.66 323,9.633 345.5,21.313 345.5,46.686 341.856,48.578 		345.636,52.25 350.5,49.724 350.5,18.275 	"/><polygon class="st11" points="303,9 328.828,25.037 320.912,25.033 342.43,43.422 333.1,43.556 346.811,56.878 319.273,39.354 		329.622,39.166 306.623,21.461 314.893,21.204 	"/></g><g id="quiz-answer-bg" class="aristotle-svg-svg ">	<polygon  class="bg st22" points="5.5,308.111 5.5,29.889 103.999,5.545 202.094,29.888 202.498,308.112 104,332.455 	"/><path  class="outline st25" d="M103.999,7.091l96.597,23.97l0.401,275.881L104,330.913L7,306.938V31.062L103.999,7.091		 M104,4L4,28.716v280.57L104,334l100-24.714l-0.408-280.57L104,4L104,4z"/><path  class="lightning  st25" d="M68.194,285.052c10.85-4.434,22.324-7.663,34.212-9.562		c-2.113,1.421-4.171,2.885-6.169,4.389c8.438-1.452,17.07-2.215,25.812-2.24c-2.725,1.067-5.387,2.21-7.985,3.417		c8.673,0.705,17.286,2.146,25.747,4.32c-12.992-1.538-25.893-1.354-38.377,0.4c2.126-1.335,4.306-2.624,6.541-3.864		c-7.928,0.755-15.719,2.129-23.3,4.087c2.05-1.812,4.175-3.584,6.371-5.308C83.334,281.566,75.696,283.021,68.194,285.052z"/><path  class="lightning st25" d="M68.194,54.061c10.85-4.433,22.324-7.659,34.212-9.562		c-2.113,1.424-4.171,2.887-6.169,4.39c8.438-1.452,17.07-2.214,25.812-2.238c-2.725,1.067-5.387,2.211-7.985,3.417		c8.673,0.703,17.286,2.146,25.747,4.319c-12.992-1.538-25.893-1.354-38.377,0.398c2.126-1.335,4.306-2.624,6.541-3.864		c-7.928,0.758-15.719,2.132-23.3,4.089c2.05-1.812,4.175-3.584,6.371-5.31C83.334,50.576,75.696,52.031,68.194,54.061z"/><line  class="line st24" x1="32.5" y1="95.5" x2="175.5" y2="95.5"/><line  class="line  st24" x1="32.5" y1="232.5" x2="175.5" y2="232.5"/></g><g id="next-question" class="aristotle-svg-svg ">	<polygon class="st14" points="148.999,41.446 4,41.446 4,4 148.999,4 156.007,23.473 	"/></g><g id="btn-got-it" class="aristotle-svg-svg ">	<path class="st11" d="M4,37.484c10.944-4.513,22.521-7.805,34.517-9.737c-2.134,1.447-4.207,2.938-6.226,4.469		c8.514-1.479,17.224-2.255,26.039-2.282c-2.75,1.089-5.437,2.251-8.058,3.479c8.749,0.719,17.438,2.188,25.976,4.402		c-13.105-1.566-26.119-1.381-38.717,0.408c2.146-1.36,4.345-2.673,6.601-3.937c-7.997,0.77-15.856,2.169-23.506,4.163		c2.066-1.847,4.211-3.65,6.429-5.406C19.274,33.935,11.568,35.418,4,37.484z"/><path class="st15" d="M26.764,10.141c-0.32,2.88-0.62,4.041-1.32,5.201c-0.96,1.621-2.26,2.441-3.841,2.441		c-2.42,0-3.94-2.021-3.94-5.221c0-2.081,0.521-4.321,1.342-5.781C20.024,4.961,21.524,4,23.283,4c1.9,0,3.16,1.14,3.501,3.181		l-2.659,1c-0.021-0.68-0.062-0.86-0.16-1.161c-0.142-0.44-0.5-0.68-0.979-0.68c-0.641,0-1.16,0.44-1.581,1.32		c-0.6,1.28-0.979,3.241-0.979,5.062c0,1.78,0.521,2.68,1.54,2.68c1.021,0,1.643-0.92,1.922-2.9h-1.644l0.28-2.36L26.764,10.141		L26.764,10.141z"/><path class="st15" d="M29.642,14.022c0-1.201,0.318-2.541,0.84-3.541c0.681-1.32,1.801-2.041,3.144-2.041		c1.802,0,2.818,1.22,2.818,3.421c0,3.581-1.561,5.881-3.961,5.881C30.621,17.742,29.642,16.442,29.642,14.022z M33.923,12.061		c0-0.92-0.198-1.38-0.578-1.38c-0.66,0-1.224,1.58-1.224,3.4c0,0.9,0.224,1.42,0.619,1.42		C33.402,15.502,33.923,13.941,33.923,12.061z"/><path class="st15" d="M40.241,10.681h-0.84l0.261-2.061h0.842l0.302-2.46h2.461l-0.303,2.46h1.001l-0.238,2.061h-1l-0.86,6.881		h-2.461L40.241,10.681z"/><path class="st15" d="M52.501,8.62h2.461l-1.103,8.942h-2.461L52.501,8.62z M52.541,6.16c0-0.96,0.84-1.78,1.778-1.78		c0.761,0,1.36,0.6,1.36,1.38c0,0.96-0.82,1.801-1.78,1.801C53.121,7.56,52.541,6.96,52.541,6.16z"/><path class="st15" d="M58.541,10.681h-0.842l0.262-2.061h0.843l0.3-2.46h2.461l-0.301,2.46h1.001l-0.24,2.061h-1l-0.858,6.881		h-2.463L58.541,10.681z"/><path class="st15" d="M66.441,14.421c0.82,0,1.46,0.64,1.46,1.46c0,1.02-0.88,1.9-1.898,1.9c-0.841,0-1.46-0.64-1.46-1.48		C64.541,15.302,65.421,14.421,66.441,14.421z M66.401,4.219h2.562l-1.143,9.342h-2.58L66.401,4.219z"/></g><g id="btn-continue" class="aristotle-svg-svg ">	<path class="st16" d="M53.56,7.064l47.439,10.121v22.418l-47.415,9.339L6.999,39.611V16.391L53.56,7.064 M53.578,4L4,13.934v28.139		l49.578,9.932L104,42.072V14.762L53.578,4L53.578,4z"/><path class="st16" d="M22.882,27.127c-1.135,0.379-1.513,0.463-2.171,0.463c-1.373,0-2.787-0.615-3.74-1.625		c-0.799-0.854-1.232-1.977-1.232-3.224c0-2.759,2.188-4.942,4.944-4.942c0.729,0,1.317,0.127,2.199,0.478v2.899		c-0.574-0.688-1.261-1.022-2.103-1.022c-1.457,0-2.508,1.077-2.508,2.577c0,0.798,0.268,1.429,0.826,1.891		c0.477,0.395,1.062,0.616,1.682,0.616c0.798,0,1.473-0.308,2.103-0.979V27.127L22.882,27.127z"/><path class="st16" d="M26.84,18.893c0.883-0.744,2.115-1.178,3.418-1.178c1.556,0,2.83,0.521,3.824,1.566		c0.867,0.911,1.346,2.115,1.346,3.418c0,1.473-0.646,2.857-1.752,3.796c-0.938,0.785-2.087,1.179-3.459,1.179		c-2.941,0-5.127-2.156-5.127-5.07C25.09,21.217,25.735,19.83,26.84,18.893z M30.258,25.321c1.457,0,2.634-1.177,2.634-2.634		c0-1.442-1.177-2.618-2.634-2.618c-1.442,0-2.633,1.176-2.633,2.591C27.625,24.145,28.787,25.321,30.258,25.321z"/><path class="st16" d="M38.04,17.995h2.423l4.469,5.717v-5.717h2.424v9.345h-2.424l-4.469-5.717v5.717H38.04V17.995z"/><path class="st16" d="M51.383,20.055h-1.977v-2.062h6.415v2.062h-2.017v7.283H51.38L51.383,20.055L51.383,20.055z"/><path class="st16" d="M57.892,17.995h2.424v9.345h-2.424V17.995z"/><path class="st16" d="M63.45,17.995h2.426l4.468,5.717v-5.717h2.424v9.345h-2.424l-4.468-5.717v5.717H63.45V17.995z"/><path class="st16" d="M83.838,23.389c0,1.373-0.238,2.114-0.911,2.871c-0.771,0.867-1.862,1.314-3.222,1.314		c-1.431,0-2.689-0.531-3.333-1.398c-0.49-0.658-0.675-1.414-0.675-2.787v-5.396h2.426v5.06c0,1.062,0.025,1.271,0.266,1.666		c0.267,0.447,0.771,0.715,1.357,0.715c0.616,0,1.163-0.295,1.415-0.756c0.21-0.365,0.253-0.646,0.253-1.625v-5.06h2.424V23.389		L83.838,23.389z"/><path class="st16" d="M86.774,17.995h5.311v2.062h-2.887v1.555h2.731v2.062h-2.731v1.608h2.887v2.062h-5.311V17.995z"/><path class="st16" d="M23.785,39.592c9.118-3.727,18.764-6.439,28.75-8.035c-1.774,1.193-3.505,2.426-5.185,3.688		c7.09-1.222,14.346-1.858,21.689-1.883c-2.289,0.897-4.526,1.856-6.71,2.87c7.286,0.594,14.524,1.807,21.636,3.633		c-10.918-1.293-21.757-1.141-32.248,0.337c1.785-1.122,3.617-2.205,5.496-3.248c-6.662,0.637-13.21,1.79-19.58,3.437		c1.723-1.522,3.508-3.013,5.354-4.459C36.509,36.663,30.089,37.887,23.785,39.592z"/></g><g id="perfect-answer" class="aristotle-svg-svg ">	<g id="XMLID_2433_" class="aristotle-svg-svg ">		<polygon class="st22" points="18.725,36.129 4,28.485 4,11.644 18.725,4 33.451,11.644 33.451,28.485 		"/></g>	<polygon class="st16" points="18.725,7.843 21.697,15.764 29.715,16.239 23.533,21.707 25.516,29.821 18.725,25.381 11.934,29.821 		13.916,21.707 7.735,16.239 15.754,15.764 	"/></g><g id="quiz-btn" class="aristotle-svg-svg ">	<g  class="bg " >		<polygon class="st22" points="4,50 63,62 123,50 123,17 63,4 4,16 		"/></g>	<path class="st15" d="M27.545,46.795c10.854-4.434,22.326-7.664,34.213-9.562c-2.112,1.422-4.17,2.885-6.169,4.387		c8.438-1.451,17.07-2.213,25.812-2.238c-2.725,1.068-5.389,2.209-7.983,3.416c8.672,0.705,17.284,2.148,25.746,4.322		c-12.992-1.539-25.894-1.355-38.375,0.4c2.125-1.336,4.305-2.625,6.541-3.865c-7.932,0.756-15.721,2.129-23.302,4.088		c2.052-1.812,4.174-3.584,6.37-5.309C42.686,43.309,35.047,44.766,27.545,46.795z"/></g><g id="btn-generic" class="aristotle-svg-svg ">	<path class="st15" d="M4,51.002l59,12l60-12V17L63,4l0,0L4,16V51.002z M7,18.451L62.979,7.065L120,19.419v29.123L63.005,59.94		L7,48.549V18.451z"/><path class="st15" d="M32.495,50.604c9.365-3.825,19.271-6.614,29.529-8.252c-1.824,1.227-3.6,2.491-5.326,3.787		c7.283-1.253,14.734-1.91,22.277-1.934c-2.351,0.923-4.648,1.907-6.893,2.948c7.483,0.609,14.921,1.855,22.223,3.731		c-11.213-1.329-22.346-1.171-33.122,0.346c1.834-1.153,3.716-2.266,5.646-3.336c-6.844,0.652-13.564,1.838-20.106,3.528		c1.769-1.565,3.602-3.093,5.498-4.582C45.563,47.594,38.97,48.852,32.495,50.604z"/></g><g id="speaker" class="aristotle-svg-svg ">	<path class="st1" d="M32.61,58.493c10.218-2.746,17.732-11.951,17.732-22.892c0-10.941-7.515-20.146-17.732-22.891"/><path class="st1" d="M40.538,67.202c14.2-4.416,24.44-16.891,24.44-31.601c0-14.71-10.24-27.185-24.44-31.601"/><path class="st1" d="M28.11,47.821c5.122-2.226,8.655-6.85,8.655-12.219c0-5.371-3.533-9.996-8.655-12.221"/><polygon class="st15" points="12.774,44.639 12.774,26.563 20.401,21.772 20.401,49.43 	"/><rect x="4" y="26.563" class="st15" width="11.273" height="18.075"/></g><g id="no-phone" class="aristotle-svg-svg ">	<path class="st15" d="M71.691,85.5H35.309V21.501h36.382V85.5z M71.886,18.501H35.115c-1.55,0-2.807,1.256-2.807,2.806v64.388		c0,1.549,1.257,2.806,2.807,2.806h36.771c1.55,0,2.806-1.257,2.806-2.806V21.307C74.691,19.757,73.435,18.501,71.886,18.501"/><path class="st15" d="M64.94,71.566H42.059V27.935h22.882L64.94,71.566L64.94,71.566z M66.587,24.935H40.414		c-0.748,0-1.354,0.605-1.354,1.354v46.922c0,0.748,0.606,1.355,1.354,1.355h26.173c0.748,0,1.354-0.607,1.354-1.355V26.288		C67.94,25.54,67.335,24.935,66.587,24.935"/><circle class="st2" cx="53.5" cy="53.5" r="49.5"/><line class="st2" x1="87.5" y1="19.5" x2="19.5" y2="87.5"/><line class="st1" x1="48.5" y1="79.719" x2="58.5" y2="79.719"/></g><g id="duty" class="aristotle-svg-svg ">	<path class="st25" d="M24,8.515l16,8.375v18.222l-16,8.375L8,35.111V16.89L24,8.515 M24,4L4,14.469v23.062L24,48l20-10.469V14.469		L24,4L24,4z"/></g><g id="duty-active" class="aristotle-svg-svg ">	<path class="st11" d="M24,8.515l16,8.375v18.221l-16,8.375L8,35.111V16.89L24,8.515 M24,4L4,14.469v23.062L24,48l20-10.469V14.469		L24,4L24,4z"/><polygon class="st15" points="24,40.5 11.275,33.602 11.275,18.399 24,11.5 36.726,18.399 36.726,33.602 	"/></g><g id="duty-complete" class="aristotle-svg-svg ">	<polygon class="st32" points="29.197,17.963 34.619,21.318 28.237,21.314 27.411,21.314 36.728,29.252 36.728,18.399 24,11.5 		21.205,13.016 	"/><polygon class="st32" points="20.313,31.411 15.219,28.18 21.256,28.07 23.596,28.027 11.272,18.57 11.272,33.601 24,40.5 		29.737,37.39 	"/><polygon class="st6" points="32.608,39.363 24,43.869 7.637,35.304 7.637,16.696 12.953,13.914 10.302,11.17 4,14.469 4,37.531 		24,48 36.154,41.639 	"/><polygon class="st6" points="24,4 14.766,8.834 18.359,11.084 24,8.131 40.363,16.696 40.363,35.304 37.713,36.691 40.461,39.384 		44,37.531 44,14.469 	"/><polygon class="st15" points="9.454,7.667 28.238,19.428 22.482,19.424 38.131,32.91 31.345,33.008 41.316,42.777 21.289,29.927 		28.816,29.789 12.09,16.806 18.103,16.616 	"/></g><g id="btn-acknowledge" class="aristotle-svg-svg ">	<polygon  class="bg  st25" points="5.501,55.053 5.501,18.948 95.221,5.518 186.501,20.073 186.501,55.05 		95.229,68.484 	"/><path  class="outline  st22" d="M95.213,7.036l89.788,14.317v32.401l-89.77,13.213L7.001,53.76V20.239L95.213,7.036		 M95.228,4L4,17.655v38.69L95.228,70L188,56.345V18.793L95.228,4L95.228,4z"/><path  class="lightning  st15" d="M60.193,50.794c10.851-4.432,22.326-7.663,34.213-9.562		c-2.113,1.422-4.17,2.886-6.169,4.388c8.437-1.452,17.07-2.213,25.811-2.24c-2.725,1.069-5.388,2.21-7.984,3.416		c8.673,0.706,17.286,2.149,25.746,4.323c-12.991-1.539-25.892-1.356-38.375,0.4c2.125-1.336,4.305-2.625,6.54-3.865		c-7.929,0.756-15.72,2.13-23.301,4.088c2.051-1.813,4.176-3.584,6.371-5.309C75.335,47.309,67.696,48.765,60.193,50.794z"/></g><g id="chapter-bracket" class="aristotle-svg-svg ">	<polyline class="st9" points="4,104.992 27,104.992 27,4 4,4 	"/></g><g id="tesselation" class="aristotle-svg-svg ">	<rect x="4.007" y="4" class="st18" width="1024" height="768"/><path class="st20" d="M158.241,148.184c-22.99,13.425-45.722,28.383-68.154,45.806c-22.434-34.314-44.56-72.895-66.342-116.986		C67.308,105.954,112.267,129.344,158.241,148.184z"/><path class="st20" d="M4.003,63.43c6.548,4.655,13.129,9.178,19.742,13.573c-6.612,4.599-13.192,9.448-19.739,14.581"/><path class="st20" d="M4.008,248.901c6.546,1.995,13.126,3.933,19.737,5.816c-6.612,7.11-13.193,14.545-19.741,22.339"/><path class="st20" d="M23.745,432.431c-6.612,9.62-13.192,19.639-19.739,30.092"/><path class="st20" d="M4,619.842c6.549-3.326,13.131-6.558,19.745-9.698c-6.611,12.132-13.192,24.735-19.74,37.849"/><path class="st20" d="M298.849,191.807c-23.813,13.436-47.471,27.41-70.924,42.702c-23.449-25.637-46.692-54.072-69.684-86.325		C204.216,167.014,251.222,181.298,298.849,191.807z"/><path class="st20" d="M443.202,212.397c-24.232,15.043-48.416,29.713-72.492,44.723c-24.072-19.889-48.045-41.379-71.861-65.313		C346.478,202.302,394.733,209.028,443.202,212.397z"/><path class="st20" d="M588.812,212.397c-24.232,18.401-48.517,35.48-72.805,51.963c-24.287-16.484-48.574-33.561-72.806-51.963		C491.669,215.751,540.345,215.751,588.812,212.397z"/><path class="st20" d="M733.163,191.807c-23.816,23.934-47.786,45.423-71.862,65.313c-24.077-15.01-48.255-29.682-72.489-44.723		C637.282,209.028,685.535,202.303,733.163,191.807z"/><path class="st20" d="M873.772,148.184c-22.988,32.255-46.24,60.689-69.686,86.325c-23.451-15.293-47.108-29.267-70.924-42.701		C780.793,181.298,827.794,167.013,873.772,148.184z"/><path class="st20" d="M1008.269,77.003c-21.777,44.094-43.914,82.672-66.342,116.986c-22.434-17.423-45.166-32.379-68.154-45.806		C919.754,129.345,964.707,105.955,1008.269,77.003z"/><path class="st20" d="M1028.002,91.578c-6.545-5.131-13.123-9.979-19.733-14.575c6.612-4.395,13.192-8.917,19.739-13.572"/><path class="st20" d="M4,156.163c28.115,14.279,56.843,26.818,86.087,37.826c-22.433,17.427-44.562,37.314-66.344,60.728		c-6.612-10.876-13.192-22.187-19.739-33.969"/><path class="st20" d="M227.925,234.509c-23.451,15.295-46.695,31.907-69.686,50.71c-22.986-26.876-45.721-56.921-68.152-91.229		C134.95,210.874,181.023,224.164,227.925,234.509z"/><path class="st20" d="M370.71,257.12c-24.078,15.011-48.045,30.357-71.861,46.791c-23.813-20.936-47.475-43.771-70.924-69.402		C274.827,244.845,322.562,252.239,370.71,257.12z"/><path class="st20" d="M516.007,264.36c-24.287,16.484-48.574,32.371-72.808,48.372c-24.233-17.444-48.417-35.726-72.489-55.612		C418.863,261.99,467.437,264.356,516.007,264.36z"/><path class="st20" d="M661.301,257.12c-24.076,19.886-48.258,38.169-72.491,55.612c-24.23-16.002-48.521-31.888-72.803-48.372		C564.579,264.356,613.151,261.993,661.301,257.12z"/><path class="st20" d="M804.087,234.509c-23.451,25.634-47.109,48.468-70.926,69.402c-23.814-16.434-47.785-31.779-71.86-46.791		C709.454,252.239,757.187,244.846,804.087,234.509z"/><path class="st20" d="M941.927,193.99c-22.431,34.306-45.168,64.354-68.156,91.229c-22.988-18.801-46.234-35.415-69.684-50.711		C850.991,224.165,897.062,210.875,941.927,193.99z"/><path class="st20" d="M1028.01,220.746c-6.548,11.784-13.13,23.095-19.743,33.972c-21.783-23.413-43.908-43.303-66.34-60.728		c29.241-11.008,57.97-23.546,86.085-37.825"/><path class="st20" d="M158.241,285.22c-22.99,18.803-45.722,39.801-68.154,63.978c-22.434-27.561-44.56-58.66-66.342-94.48		C67.308,267.124,112.267,277.146,158.241,285.22z"/><path class="st20" d="M298.849,303.91c-23.813,16.435-47.471,33.956-70.924,53.385c-23.449-21.499-46.692-45.204-69.684-72.075		C204.216,293.287,251.222,299.408,298.849,303.91z"/><path class="st20" d="M443.202,312.731c-24.232,16.004-48.416,32.12-72.492,49.08c-24.072-17.938-48.045-36.97-71.861-57.901		C346.478,308.408,394.733,311.288,443.202,312.731z"/><path class="st20" d="M588.812,312.731c-24.232,17.441-48.517,34.045-72.805,50.526c-24.287-16.483-48.574-33.085-72.806-50.526		C491.669,314.168,540.345,314.168,588.812,312.731z"/><path class="st20" d="M733.163,303.91c-23.816,20.931-47.786,39.966-71.862,57.901c-24.077-16.962-48.255-33.078-72.489-49.08		C637.282,311.288,685.535,308.406,733.163,303.91z"/><path class="st20" d="M873.772,285.22c-22.988,26.873-46.24,50.577-69.686,72.075c-23.451-19.431-47.108-36.949-70.924-53.384		C780.793,299.409,827.794,293.285,873.772,285.22z"/><path class="st20" d="M1008.269,254.717c-21.777,35.819-43.914,66.92-66.342,94.48c-22.434-24.177-45.166-45.171-68.154-63.978		C919.754,277.146,964.707,267.121,1008.269,254.717z"/><path class="st20" d="M1028.01,277.053c-6.547-7.793-13.128-15.227-19.741-22.336c6.613-1.883,13.194-3.821,19.741-5.816"/><path class="st20" d="M4.008,341.636c28.113,2.855,56.838,5.362,86.079,7.562c-22.433,24.182-44.562,51.55-66.344,83.233		c-6.611-8.364-13.19-17.089-19.737-26.211"/><path class="st20" d="M227.925,357.295c-23.451,19.435-46.695,40.775-69.686,64.96c-22.986-21.493-45.721-45.504-68.152-73.058		C134.95,352.574,181.023,355.228,227.925,357.295z"/><path class="st20" d="M370.71,361.812c-24.078,16.964-48.045,34.77-71.861,54.203c-23.813-17.934-47.475-37.225-70.924-58.72		C274.827,359.362,322.562,360.839,370.71,361.812z"/><path class="st20" d="M516.007,363.258c-24.287,16.483-48.574,32.847-72.808,49.809c-24.233-16.481-48.417-33.321-72.489-51.255		C418.863,362.785,467.437,363.258,516.007,363.258z"/><path class="st20" d="M661.301,361.812c-24.076,17.935-48.258,34.774-72.491,51.255c-24.23-16.962-48.521-33.325-72.803-49.809		C564.579,363.258,613.151,362.785,661.301,361.812z"/><path class="st20" d="M804.087,357.296c-23.451,21.494-47.109,40.785-70.926,58.719c-23.814-19.436-47.785-37.238-71.86-54.203		C709.454,360.835,757.187,359.36,804.087,357.296z"/><path class="st20" d="M941.927,349.198c-22.431,27.552-45.168,51.562-68.156,73.057c-22.988-24.184-46.234-45.525-69.684-64.959		C850.991,355.228,897.062,352.573,941.927,349.198z"/><path class="st20" d="M1028.01,406.215c-6.548,9.124-13.13,17.851-19.743,26.216c-21.783-31.683-43.908-59.051-66.34-83.232		c29.24-2.2,57.967-4.707,86.081-7.563"/><path class="st20" d="M158.241,422.255c-22.99,24.188-45.722,51.217-68.154,82.15c-22.434-20.804-44.56-44.426-66.342-71.975		C67.308,428.296,112.267,424.947,158.241,422.255z"/><path class="st20" d="M298.849,416.014c-23.813,19.438-47.471,40.501-70.924,64.068c-23.449-17.362-46.692-36.337-69.684-57.827		C204.216,419.562,251.222,417.518,298.849,416.014z"/><path class="st20" d="M443.202,413.066c-24.232,16.963-48.416,34.526-72.492,53.437c-24.072-15.984-48.045-32.559-71.861-50.489		C346.478,414.515,394.733,413.548,443.202,413.066z"/><path class="st20" d="M588.812,413.066c-24.232,16.48-48.517,32.607-72.805,49.089c-24.287-16.482-48.574-32.609-72.806-49.089		C491.669,412.586,540.345,412.586,588.812,413.066z"/><path class="st20" d="M733.163,416.014c-23.816,17.931-47.786,34.504-71.862,50.489c-24.077-18.912-48.255-36.473-72.489-53.437		C637.282,413.548,685.535,414.511,733.163,416.014z"/><path class="st20" d="M873.772,422.255c-22.988,21.491-46.24,40.465-69.686,57.827c-23.451-23.567-47.108-44.634-70.924-64.068		C780.793,417.518,827.794,419.562,873.772,422.255z"/><path class="st20" d="M1008.269,432.431c-21.777,27.547-43.914,51.172-66.342,71.975c-22.434-30.934-45.166-57.961-68.154-82.15		C919.754,424.951,964.707,428.294,1008.269,432.431z"/><path class="st20" d="M1028.01,462.523c-6.547-10.453-13.128-20.472-19.741-30.093c6.61,0.628,13.188,1.274,19.733,1.939"/><path class="st20" d="M4.004,527.106c28.115-8.567,56.841-16.092,86.083-22.7c-22.433,30.937-44.562,65.784-66.344,105.738		c-6.612-5.854-13.192-11.995-19.739-18.457"/><path class="st20" d="M227.925,480.082c-23.451,23.57-46.695,49.645-69.686,79.209c-22.986-16.112-45.721-34.087-68.152-54.885		C134.95,494.272,181.023,486.292,227.925,480.082z"/><path class="st20" d="M370.71,466.504c-24.078,18.915-48.045,39.178-71.861,61.614c-23.813-14.935-47.475-30.678-70.924-48.036		C274.827,473.874,322.562,469.437,370.71,466.504z"/><path class="st20" d="M516.007,462.155c-24.287,16.484-48.574,33.323-72.808,51.246c-24.233-15.522-48.417-30.913-72.489-46.897		C418.863,463.58,467.437,462.158,516.007,462.155z"/><path class="st20" d="M661.301,466.504c-24.076,15.983-48.258,31.378-72.491,46.897c-24.23-17.925-48.521-34.764-72.803-51.246		C564.579,462.16,613.151,463.579,661.301,466.504z"/><path class="st20" d="M804.087,480.082c-23.451,17.358-47.109,33.104-70.926,48.035c-23.814-22.436-47.785-42.7-71.86-61.613		C709.454,469.436,757.187,473.876,804.087,480.082z"/><path class="st20" d="M941.927,504.406c-22.431,20.798-45.168,38.772-68.156,54.884c-22.988-29.563-46.234-55.638-69.684-79.208		C850.991,486.288,897.062,494.273,941.927,504.406z"/><path class="st20" d="M1028.01,591.688c-6.549,6.462-13.13,12.604-19.743,18.456c-21.783-39.958-43.908-74.799-66.34-105.737		c29.241,6.606,57.97,14.132,86.086,22.7"/><path class="st20" d="M158.241,559.29c-22.99,29.57-45.722,62.635-68.154,100.324c-22.434-14.046-44.56-30.193-66.342-49.471		C67.308,589.464,112.267,572.751,158.241,559.29z"/><path class="st20" d="M4.005,712.49c76.55-54.496,157.847-90.741,241.557-114.815c100.146-28.488,203.746-39.557,306.866-36.105		c103.122,3.764,205.761,22.049,304.046,59.453c59.024,22.649,116.478,52.194,171.533,91.257"/><path class="st20" d="M298.849,528.117c-23.813,22.439-47.471,47.047-70.924,74.751c-23.449-13.227-46.692-27.469-69.684-43.578		C204.216,545.839,251.222,535.628,298.849,528.117z"/><path class="st20" d="M443.202,513.401c-24.232,17.925-48.416,36.932-72.492,57.794c-24.072-14.034-48.045-28.146-71.861-43.078		C346.478,520.617,394.733,515.81,443.202,513.401z"/><path class="st20" d="M588.812,513.401c-24.232,15.521-48.517,31.169-72.805,47.65c-24.287-16.48-48.574-32.129-72.806-47.65		C491.669,511.003,540.345,511.003,588.812,513.401z"/><path class="st20" d="M733.163,528.117c-23.816,14.931-47.786,29.045-71.862,43.078c-24.077-20.862-48.255-39.869-72.489-57.794		C637.282,515.809,685.535,520.617,733.163,528.117z"/><path class="st20" d="M873.772,559.29c-22.988,16.107-46.24,30.354-69.686,43.578c-23.451-27.705-47.108-52.312-70.924-74.751		C780.793,535.627,827.794,545.836,873.772,559.29z"/><path class="st20" d="M1008.269,610.144c-21.777,19.273-43.914,35.423-66.342,49.471c-22.434-37.689-45.166-70.752-68.154-100.324		C919.754,572.751,964.707,589.464,1008.269,610.144z"/><path class="st20" d="M1028.006,647.984c-6.546-13.11-13.125-25.711-19.737-37.841c6.613,3.14,13.194,6.371,19.741,9.696"/></g><g id="lightning-fist" class="aristotle-svg-svg ">	<line class="st13" x1="239.281" y1="86.224" x2="4" y2="86.224"/><line class="st5" x1="239.281" y1="109.557" x2="115" y2="109.557"/><line class="st13" x1="335" y1="86.224" x2="570.281" y2="86.224"/><line class="st5" x1="335" y1="109.557" x2="459.281" y2="109.557"/><polygon class="st15" points="321.09,70.646 323.229,69.729 313.185,64.471 312.241,66.015 	"/><polygon class="st15" points="326.575,90.764 328.381,90.979 328.381,80.456 326.575,81.438 	"/><polygon class="st15" points="328.381,103.201 326.575,103.157 326.575,113.199 328.381,114.548 	"/><polygon class="st15" points="301.181,60.225 302.274,58.761 293.562,54.2 293.514,56.211 	"/><polygon class="st15" points="247.534,102.846 245.728,102.632 245.728,113.663 247.534,112.681 	"/><polygon class="st15" points="253.866,70.204 262.24,65.82 261.526,64.157 252.069,69.106 	"/><polygon class="st15" points="273.229,60.067 281.272,55.857 281.53,53.685 272.366,58.481 	"/><polygon class="st15" points="245.728,79.172 245.728,90.424 247.534,90.469 247.534,80.521 	"/><path class="st16" d="M282.671,59.381l6.115-4.308l-1.952,16.06l2.232,0.22c0.819,0.06,1.592,0.361,2.245,0.847l0.614-24.8		l-4.563,3.783l1.777-26.329l-4.563,3.791L286.174,4l-6.078,32.8l5.835-4.846L282.671,59.381z"/><path class="st16" d="M309.438,61.486l-10.419,13.86c1.076,0.191,2.032,0.754,2.702,1.627c0.362,0.476,0.609,1.011,0.751,1.573		l13.521-22.135l-5.845,0.995l14.705-21.913l-5.847,1.002l13.705-20.545l-21.664,25.364l7.476-1.277L301.986,62.16L309.438,61.486z"		/><path class="st16" d="M317.325,74.227l6.789,3.141l-13.776,5.868c0,0.247-0.013,0.493-0.057,0.744l-0.826,4.731l22.873-12.46		l-5.558-2.062l23.691-11.625l-5.566-2.056l22.143-10.938l-31.444,11.133l7.113,2.633L317.325,74.227z"/><path class="st16" d="M253.662,41.25l10.891,25.383l3.142-6.791l5.677,13.328c0.123-0.009,0.241-0.038,0.366-0.038h3.044		c0.588,0,1.142,0.115,1.67,0.289l-11.874-21.793l-2.061,5.559l-11.625-23.69l-2.056,5.564l-10.939-22.142l11.134,31.444		L253.662,41.25z"/><polygon class="st16" points="347.157,89.768 352.003,95.603 324.575,92.343 328.885,98.46 309.017,96.044 309.46,100.929 		336.558,101.599 332.772,97.035 359.102,98.812 355.312,94.251 379.957,95.849 	"/><polygon class="st16" points="231.644,72.91 230.365,65.434 252.487,81.971 251.812,74.52 267.177,86.067 268.27,82.893 		268.27,81.116 246.737,67.964 247.733,73.81 225.82,59.104 226.823,64.951 206.278,51.245 	"/><polygon class="st16" points="343.508,121.586 344.786,129.062 322.663,112.527 323.338,119.979 310.137,110.057 307.534,113.78 		328.412,126.533 327.418,120.688 349.33,135.394 348.329,129.546 368.873,143.252 	"/><polygon class="st16" points="249.302,117.131 267.666,109.308 264.911,105.269 241.087,118.247 246.646,120.31 222.956,131.932 		228.52,133.989 206.378,144.928 237.823,133.794 230.709,131.162 256.092,120.272 	"/><polygon class="st16" points="222.281,98.027 249.708,101.287 245.398,95.17 263.297,97.346 264.894,92.704 237.727,92.031 		241.51,96.596 215.182,94.817 218.972,99.38 194.328,97.782 227.126,103.863 	"/><path class="st15" d="M319.094,122.956l-16.287,8.525l-0.062-9.26l8.196-11.724l-1.575-17.369l1.588-9.09		c0.405-2.331-1.08-4.575-3.387-5.107l-1.196-0.279c-1.115-0.261-2.293-0.054-3.278,0.531c-0.074-0.83-0.371-1.627-0.891-2.306		c-0.73-0.955-1.789-1.563-2.983-1.713l-2.926-0.367c-1.04-0.136-2.063,0.121-2.939,0.68c-0.02-1.017-0.362-1.991-1.03-2.779		c-0.779-0.924-1.872-1.48-3.056-1.566l-4.116-0.403c-1.225-0.089-2.409,0.316-3.321,1.146c-0.748,0.679-1.213,1.566-1.382,2.54		c-0.992-0.899-2.294-1.463-3.736-1.463h-3.111c-3.082,0-5.589,2.508-5.589,5.59v4.387l-6.381,18.546l14.093,20.671l-1.851,10.683		l-19.13-10.013l-2.139,0.917l34.45,18.032l33.836-17.71L319.094,122.956z M302.779,82.625c0.104-0.734,0.499-1.367,1.109-1.786		c0.612-0.418,1.341-0.559,2.065-0.391l1.195,0.28c1.354,0.312,2.225,1.628,1.986,2.994l-1.831,10.486		c-2.135,0.35-4.141,0.148-6.102-0.612L302.779,82.625z M306.549,96.288c-0.611,1.429-1.451,3.375-1.803,4.122		c-0.416,0.887-1.549,1.748-2.723,1.605l-0.874-0.093c-0.619-0.065-1.167-0.403-1.501-0.93c-0.336-0.521-0.411-1.16-0.212-1.749		l1.299-3.817C302.745,96.251,304.672,96.538,306.549,96.288z M293.136,78.966c0.069-0.707,0.412-1.341,0.969-1.785		c0.555-0.444,1.254-0.645,1.959-0.555l2.925,0.37c0.698,0.086,1.321,0.444,1.748,1.003c0.43,0.56,0.612,1.253,0.515,1.952		l-1.894,13.517c-2.563,0.751-4.996,0.494-7.56-0.801L293.136,78.966z M291.704,94.758c2.309,1.146,4.659,1.438,7.012,0.872		l-1.025,3.018c-0.002,0.003-0.001,0.006-0.005,0.011l-0.327,0.965c-0.352,1.037-1.384,1.664-2.477,1.481l-1.894-0.314		c-0.817-0.135-1.417-0.86-1.396-1.688L291.704,94.758z M282.213,75.114c0.017-0.724,0.32-1.389,0.856-1.874		c0.534-0.483,1.224-0.716,1.938-0.674l4.102,0.402c0.707,0.053,1.348,0.379,1.807,0.92c0.455,0.539,0.671,1.226,0.604,1.93		l-1.554,16.6c-2.699,0.479-4.6,0.23-6.938-0.579c1.008-0.399,2.016-0.971,2.9-1.79c1.808-1.676,2.725-4.021,2.725-6.969v-0.923		H282.3v-3.616c0-0.416-0.054-0.819-0.14-1.208L282.213,75.114z M289.915,100.186c-1.77-1.735-4.336-3.008-7.995-3.572l-0.072-3.133		l-0.029-0.128c1.945,0.719,3.674,1.147,5.618,1.147c0.758,0,1.576-0.089,2.434-0.22l-0.122,4.773		C289.738,99.446,289.802,99.825,289.915,100.186z M269.857,78.541c0-2.065,1.678-3.745,3.743-3.745h3.111		c1.723,0,3.165,1.179,3.597,2.767l-0.108,4.595h-10.343V78.541z M275.59,133.726l2.079-12.003l-13.993-20.523l5.915-17.196h17.18		c-0.162,1.973-0.864,3.546-2.089,4.687c-2.688,2.501-7.09,2.216-7.135,2.209l-1.068-0.078l0.079,1.067		c0.117,1.541,0.226,4.288,0.026,5.09l-0.288,1.146h1.181c11.649,0,14.247,5.47,14.563,13.68c0.02,0.496,0.427,0.888,0.92,0.888		c0.013,0,0.023,0,0.037-0.002c0.507-0.02,0.904-0.448,0.885-0.958c-0.129-3.38-0.641-6.785-2.362-9.54		c0.353,0.203,0.746,0.349,1.166,0.418l1.896,0.314c0.226,0.037,0.452,0.056,0.673,0.056c1.052,0,2.04-0.409,2.782-1.107		c0.021,0.038,0.032,0.078,0.056,0.115c0.638,1.001,1.681,1.644,2.861,1.771l0.875,0.093c0.147,0.016,0.293,0.023,0.437,0.023		c1.9,0,3.501-1.299,4.151-2.68c0.314-0.675,0.995-2.243,1.574-3.586l1.053,12.385l-8.146,11.652l0.071,10.798l-7.086,3.709v-8.248		c0-0.511-0.412-0.924-0.923-0.924c-0.51,0-0.921,0.413-0.921,0.924v9.213l-4.984,2.609L275.59,133.726z M278.462,92.752		c0.478-0.016,1.094-0.066,1.778-0.17l-0.031,3.826c-0.552-0.047-1.101-0.096-1.696-0.113		C278.573,95.18,278.516,93.721,278.462,92.752z"/></g>';
(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var APIproxy, Aristotle, ChromeUI, Commander, DevTools, Dictionary, Episode, EpisodeLoader, GlobalVars, Logger, Movie, Parser, SlideUX, SoundFX, State, isInternetExp,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

APIproxy = require("misc/api-proxy");

ChromeUI = require("chrome/chrome-ui");

Commander = require('misc/commander');

DevTools = require('misc/dev-tools');

Dictionary = require('misc/dictionary');

Episode = require("episode/episode");

EpisodeLoader = require('misc/episode-loader');

GlobalVars = require('misc/global-vars');

Logger = require('misc/logger');

Movie = require('movie/movie');

Parser = require('misc/parser');

SlideUX = require('slide-ux/slide-ux');

SoundFX = require('episode/soundfx');

State = require('misc/state');

isInternetExp = require('misc/browser-detect');

Aristotle = (function() {
  function Aristotle($el, episodesDir, localDir, episodeNum1) {
    var episodeLoader;
    this.episodesDir = episodesDir;
    this.localDir = localDir;
    this.episodeNum = episodeNum1;
    this.onJsonLoaded = bind(this.onJsonLoaded, this);
    window.aristotle = this;
    aristotle.isIE = isInternetExp();
    this.setDevMode(true);
    this.build($el);
    episodeLoader = new EpisodeLoader(this.onJsonLoaded);
  }

  Aristotle.prototype.onJsonLoaded = function(episodeData) {
    var episode;
    return episode = new Episode(episodeData, this.movie, this.slideUX);
  };

  Aristotle.prototype.build = function($el) {
    var $base, apiProxy, commander, dictionary, globals, parser, shadowIcons, soundFx, state;
    $base = $(jadeTemplate['aristotle']({}));
    $el.append($base);
    shadowIcons = new pxicons.ShadowIcons();
    shadowIconsInstance.svgReplaceWithString(pxSvgIconString, $base);
    commander = new Commander();
    dictionary = new Dictionary();
    globals = new GlobalVars();
    parser = new Parser();
    soundFx = new SoundFX();
    apiProxy = new APIproxy("http://127.0.0.1:1337");
    this.chromeUI = new ChromeUI($(".chrome", $base));
    this.slideUX = new SlideUX($(".slide-ux", $base));
    this.movie = new Movie($(".movie", $base));
    return state = new State(this.movie, this.slideUX);
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

  return Aristotle;

})();

window.Aristotle = Aristotle;

},{"chrome/chrome-ui":2,"episode/episode":6,"episode/soundfx":9,"misc/api-proxy":11,"misc/browser-detect":13,"misc/commander":14,"misc/dev-tools":15,"misc/dictionary":16,"misc/episode-loader":17,"misc/global-vars":18,"misc/logger":19,"misc/parser":20,"misc/state":22,"movie/movie":26,"slide-ux/slide-ux":46}],2:[function(require,module,exports){
var ChromeUI;

module.exports = ChromeUI = (function() {
  function ChromeUI($el) {
    this.$el = $el;
    this.build(this.$el);
    this.hideMode();
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
    PubSub.subscribe("chrome.showname", (function(_this) {
      return function(m, data) {
        return _this.showName();
      };
    })(this));
    PubSub.subscribe("chrome.showepisodes", (function(_this) {
      return function(m, data) {
        return _this.showIcons();
      };
    })(this));
    PubSub.subscribe("chrome.hidename", (function(_this) {
      return function(m, data) {
        return _this.hideName();
      };
    })(this));
    PubSub.subscribe("chrome.hideepisodes", (function(_this) {
      return function(m, data) {
        return _this.hideIcons();
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
    this.$name = $(".name-and-rank", $top);
    this.$icons = $(".episodes", $top);
    this.$mode = $(".learn-mode", $top);
    $progress = $(jadeTemplate['chrome-ui/progress']({}));
    this.$el.append($progress);
    return shadowIconsInstance.svgReplaceWithString(pxSvgIconString, this.$el);
  };

  ChromeUI.prototype.showName = function() {
    return this.$name.css({
      display: "flex",
      opacity: 0
    }).velocity({
      opacity: 1
    }, {
      duration: 500
    });
  };

  ChromeUI.prototype.hideName = function() {
    return this.$name.css({
      display: "none"
    });
  };

  ChromeUI.prototype.showIcons = function() {
    return this.$icons.css({
      display: "flex",
      opacity: 0
    }).velocity({
      opacity: 1
    }, {
      duration: 500
    });
  };

  ChromeUI.prototype.hideIcons = function() {
    return this.$icons.css({
      display: "none"
    });
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

  ChromeUI.prototype.hideMode = function() {
    return this.$mode.css({
      display: "none"
    });
  };

  ChromeUI.prototype.showMode = function() {
    return this.$mode.css({
      display: "block"
    });
  };

  ChromeUI.prototype.getRank = function(data, episode) {
    switch (episode) {
      case 'recruits':
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

},{"misc/asset-preloader":12}],5:[function(require,module,exports){
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
  }

  Chapter.prototype.start = function() {
    var chapterHeading;
    aristotle.devTools.go(this.chapterData.dev, this.chapterData.slides);
    return chapterHeading = new ChapterHeading(this.chapterData, this.startSlides);
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

},{"episode/chapter-heading":4,"episode/slides":8}],6:[function(require,module,exports){
var Chapter, Episode, Sequence,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

Chapter = require('episode/chapter');

Sequence = require('misc/Sequence');

module.exports = Episode = (function() {
  function Episode(trainingData, movie, ux) {
    this.movie = movie;
    this.ux = ux;
    this.playChapter = bind(this.playChapter, this);
    this.chapterComplete = bind(this.chapterComplete, this);
    this.nextChapter = bind(this.nextChapter, this);
    this.nextRankId = trainingData.nextRankId;
    PubSub.publish('chrome.hide');
    aristotle.devTools.go(trainingData.dev, trainingData.chapters);
    this.createChapters(trainingData);
    if (trainingData.skipSlate) {
      this.playChapter();
    } else {
      this.showIntro(trainingData);
    }
  }

  Episode.prototype.showIntro = function(data) {
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
    return setTimeout(this.playChapter, 3000);
  };

  Episode.prototype.showOutro = function(data) {
    return this.ux.populate({
      components: [
        {
          kind: "episode-outro",
          config: {
            rankId: this.nextRankId,
            rank: aristotle.dictionary.get(this.nextRankId)
          }
        }
      ]
    });
  };

  Episode.prototype.createAndShowOutro = function() {};

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
    return this.nextChapter();
  };

  Episode.prototype.playChapter = function() {
    PubSub.publish('state.load');
    return this.chapters.getCurrentItem().start(this.chapterComplete);
  };

  Episode.prototype.episodeComplete = function() {
    console.log("episode complete");
    return this.showOutro();
  };

  return Episode;

})();

},{"episode/chapter":5,"misc/Sequence":10}],7:[function(require,module,exports){
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

},{"episode/audio-track":3,"movie/svg-animation":27}],8:[function(require,module,exports){
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
    PubSub.subscribe('slides.next', (function(_this) {
      return function() {
        return _this.nextSlide();
      };
    })(this));
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

  Slides.prototype.getCurrentIndex = function() {
    return this.slides.getCurrentItem().slideData.index;
  };

  Slides.prototype.getIndexAndTotal = function() {
    return (this.slides.getCurrentItem().slideData.index) + "/" + this.slides.totalItems;
  };

  return Slides;

})();

},{"episode/slide":7,"misc/sequence":21}],9:[function(require,module,exports){
var AudioTrack, SoundFX;

AudioTrack = require('episode/audio-track');

module.exports = SoundFX = (function() {
  function SoundFX() {
    PubSub.subscribe('playsound', (function(_this) {
      return function(m, data) {
        return _this.playSound(data);
      };
    })(this));
  }

  SoundFX.prototype.playSound = function(data) {
    var track;
    track = new AudioTrack(data.file);
    return track.play(function() {
      track.destroy();
      if (data.complete != null) {
        return aristotle.commander["do"](data.complete);
      }
    });
  };

  return SoundFX;

})();

},{"episode/audio-track":3}],10:[function(require,module,exports){
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

  return Sequence;

})();

},{}],11:[function(require,module,exports){
var APIproxy;

module.exports = APIproxy = (function() {
  function APIproxy(baseUrl) {
    this.baseUrl = baseUrl;
    return;
    aristotle.apiProxy = this;
    this.companyApiToken = "COMPANY-API-TOKEN";
    this.userApiToken = "USER-API-TOKEN";
    this.testCreate();
    this.testGet();
    this.testPut();
  }

  APIproxy.prototype.testCreate = function() {
    return this.createUser((function(_this) {
      return function(status, data, textStatus, errorThrown) {
        switch (status) {
          case 'done':
            return console.log(data);
          case 'fail':
            return aristotle["throw"]("API call failed : " + errorThrown, true);
        }
      };
    })(this));
  };

  APIproxy.prototype.testPut = function() {
    return this.setUserDecisions((function(_this) {
      return function(status, data, textStatus, errorThrown) {
        switch (status) {
          case 'done':
            return console.log(data);
          case 'fail':
            return aristotle["throw"]("API call failed : " + errorThrown, true);
        }
      };
    })(this));
  };

  APIproxy.prototype.testGet = function() {
    return this.getUserDecisions((function(_this) {
      return function(status, data, textStatus, errorThrown) {
        switch (status) {
          case 'done':
            return console.log(data);
          case 'fail':
            return aristotle["throw"]("API call failed : " + errorThrown, true);
        }
      };
    })(this));
  };

  APIproxy.prototype.createUser = function(cb) {
    return this.ajax("/companies/" + this.companyApiToken + "/users/create", cb, 'POST');
  };

  APIproxy.prototype.setUserDecisions = function(cb) {
    return this.ajax("/companies/" + this.companyApiToken + "/users/" + this.userApiToken + "/data", cb, 'PUT');
  };

  APIproxy.prototype.getUserDecisions = function(cb) {
    return this.ajax("/companies/" + this.companyApiToken + "/users/" + this.userApiToken + "/data", cb, 'GET');
  };

  APIproxy.prototype.ajax = function(url, cb, requestType, data) {
    if (requestType == null) {
      requestType = "GET";
    }
    console.log(requestType);
    return $.ajax({
      type: requestType,
      url: this.baseUrl + url,
      data: data
    }).done((function(_this) {
      return function(data) {
        if (typeof data === 'string') {
          data = JSON.parse(data);
        }
        return cb('done', data);
      };
    })(this)).fail((function(_this) {
      return function(data, textStatus, errorThrown) {
        var e, error;
        try {
          data = JSON.parse(data.responseText);
        } catch (error) {
          e = error;
          data = {};
          console.log('failed to parse json', data.responseText);
        }
        return cb('fail', data, textStatus, errorThrown);
      };
    })(this));
  };

  return APIproxy;

})();

},{}],12:[function(require,module,exports){
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
    preloadQueue.on("progress", (function(_this) {
      return function(e) {
        if (e.loaded > 1) {
          e.loaded = 1;
        }
        return _this.progressCallback(e.loaded);
      };
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

},{}],13:[function(require,module,exports){
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

},{}],14:[function(require,module,exports){
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

},{}],15:[function(require,module,exports){
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

},{"episode/audio-track":3}],16:[function(require,module,exports){
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

},{}],17:[function(require,module,exports){
var EpisodeLoader;

module.exports = EpisodeLoader = (function() {
  function EpisodeLoader(callback) {
    this.callback = callback;
    this.loadEpisode();
  }

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

},{}],18:[function(require,module,exports){
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

  GlobalVars.prototype.get = function(str) {
    if (aristotle.globals[str] != null) {
      return aristotle.globals[str];
    }
    aristotle["throw"]("Tried to access global variable `" + str + "`, but it doesn't exists", true);
    return null;
  };

  return GlobalVars;

})();

},{}],19:[function(require,module,exports){
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

},{}],20:[function(require,module,exports){
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

},{}],21:[function(require,module,exports){
arguments[4][10][0].apply(exports,arguments)
},{"dup":10}],22:[function(require,module,exports){
var State;

module.exports = State = (function() {
  function State(movie, ux) {
    this.movie = movie;
    this.ux = ux;
    this.state = {};
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
    PubSub.subscribe('state.persist', (function(_this) {
      return function(m, data) {
        return _this.persistState();
      };
    })(this));
  }

  State.prototype.saveState = function() {
    this.hasSavedState = true;
    return this.state.layers = this.movie.dehydrateLayerState();
  };

  State.prototype.loadState = function() {
    if (!this.hasSavedState) {
      return;
    }
    return this.movie.rehydrateLayerState(this.state.layers);
  };

  State.prototype.persisteState = function() {};

  return State;

})();

},{}],23:[function(require,module,exports){
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

},{}],24:[function(require,module,exports){
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

},{}],25:[function(require,module,exports){
var Layer, SVGAnimation,
  bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

SVGAnimation = require('movie/svg-animation');

module.exports = Layer = (function() {
  function Layer($el, depth) {
    this.createContent = bind(this.createContent, this);
    this.update = bind(this.update, this);
    this.isCached = false;
    this.$layer = $(jadeTemplate['movie/layer']({
      depth: depth
    }));
    $el.append(this.$layer);
  }

  Layer.prototype.update = function(pristineLayerData) {
    this.pristineLayerData = pristineLayerData;
    this.layerData = jQuery.extend(true, {}, this.pristineLayerData);
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
    var $img, img, svg;
    if (this.isCached) {
      return;
    }
    this.isCached = true;
    if (aristotle.dontCache) {
      return;
    }
    svg = $("svg", this.$layer)[0];
    $img = $($.parseHTML("<img />"));
    img = $img[0];
    return svg.toDataURL('image/png', {
      callback: (function(_this) {
        return function(data) {
          img.setAttribute('src', data);
          _this.fadeAndRemoveOldLayer();
          _this.currentOnionLayer = _this.addOnionLayer();
          return _this.currentOnionLayer.append(img);
        };
      })(this)
    });
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

},{"movie/svg-animation":27}],26:[function(require,module,exports){
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
    PubSub.subscribe('movie.layers.uncache', (function(_this) {
      return function(m, data) {
        return _this.uncacheLayer(data);
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
      if (layerData.cache || layerData.ieCache) {
        layerData.jumpToEnd = true;
      }
      results.push(this.addLayer(layerData));
    }
    return results;
  };

  return Movie;

})();

},{"movie/dynamic-assets":23,"movie/highlighter":24,"movie/layer":25}],27:[function(require,module,exports){
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

},{}],28:[function(require,module,exports){
var CallSignSelect, Component,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Component = require('slide-ux/components/component');

module.exports = CallSignSelect = (function(superClass) {
  extend(CallSignSelect, superClass);

  function CallSignSelect($el, data) {
    this.$node = $(jadeTemplate['slide-ux/components/call-sign-select'](data));
    CallSignSelect.__super__.constructor.call(this, $el, this.$node, data);
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
    var ref;
    if (((ref = this.callSign) != null ? ref.length : void 0) > 1) {
      return PubSub.publish('slides.next');
    }
  };

  return CallSignSelect;

})(Component);

},{"slide-ux/components/component":29}],29:[function(require,module,exports){
var Component;

module.exports = Component = (function() {
  function Component($el, $node, data) {
    this.$node = $node;
    $el.append(this.$node);
    shadowIconsInstance.svgReplaceWithString(pxSvgIconString, this.$node);
  }

  Component.prototype.destroy = function() {
    return this.$node.remove();
  };

  return Component;

})();

},{}],30:[function(require,module,exports){
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
    DefenderCards.__super__.constructor.call(this, $el, this.$node, this.data);
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

},{"slide-ux/components/component":29}],31:[function(require,module,exports){
var Component, DialoguePate,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Component = require('slide-ux/components/component');

module.exports = DialoguePate = (function(superClass) {
  extend(DialoguePate, superClass);

  function DialoguePate($el, data) {
    this.configData(data);
    this.$node = $(jadeTemplate['slide-ux/components/dialogue/dialogue-pages/base'](data));
    DialoguePate.__super__.constructor.call(this, $el, this.$node, data);
    console.log(data);
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

  DialoguePate.prototype.configData = function(data) {
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

  DialoguePate.prototype.configButtons = function(el, data) {
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

  return DialoguePate;

})(Component);

},{"slide-ux/components/component":29}],32:[function(require,module,exports){
var Component, Dialogue,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Component = require('slide-ux/components/component');

module.exports = Dialogue = (function(superClass) {
  extend(Dialogue, superClass);

  function Dialogue($el, data) {
    this.$node = $(jadeTemplate['slide-ux/components/dialogue/dialogue'](data));
    Dialogue.__super__.constructor.call(this, $el, this.$node, data);
    $('.btn', this.$node).on("click", (function(_this) {
      return function() {
        return aristotle.commander["do"](data.btn.action);
      };
    })(this));
  }

  return Dialogue;

})(Component);

},{"slide-ux/components/component":29}],33:[function(require,module,exports){
var Component, Duties, Sequence,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Component = require('slide-ux/components/component');

Sequence = require('misc/sequence');

module.exports = Duties = (function(superClass) {
  extend(Duties, superClass);

  function Duties($el, data) {
    this.numAcknowledgedDuties = 0;
    this.acknowledgedDuties = {};
    this.getData(data.definition);
    this.$node = $("<div class='duties'/>");
    Duties.__super__.constructor.call(this, $el, this.$node, data);
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

},{"misc/sequence":21,"slide-ux/components/component":29}],34:[function(require,module,exports){
var Component, EpisodeIntro,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Component = require('slide-ux/components/component');

module.exports = EpisodeIntro = (function(superClass) {
  extend(EpisodeIntro, superClass);

  function EpisodeIntro($el, data) {
    this.$node = $(jadeTemplate['slide-ux/components/episode-intro'](data));
    EpisodeIntro.__super__.constructor.call(this, $el, this.$node, data);
  }

  return EpisodeIntro;

})(Component);

},{"slide-ux/components/component":29}],35:[function(require,module,exports){
var Component, EpisodeOutro,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Component = require('slide-ux/components/component');

module.exports = EpisodeOutro = (function(superClass) {
  extend(EpisodeOutro, superClass);

  function EpisodeOutro($el, data) {
    this.$node = $(jadeTemplate['slide-ux/components/episode-outro'](data));
    EpisodeOutro.__super__.constructor.call(this, $el, this.$node, data);
  }

  return EpisodeOutro;

})(Component);

},{"slide-ux/components/component":29}],36:[function(require,module,exports){
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
    ExploreCards.__super__.constructor.call(this, $el, this.$node, this.data);
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

},{"misc/sequence":21,"slide-ux/components/component":29}],37:[function(require,module,exports){
var Component, GhostUX,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Component = require('slide-ux/components/component');

module.exports = GhostUX = (function(superClass) {
  extend(GhostUX, superClass);

  function GhostUX($el, data) {
    this.$node = $(jadeTemplate['slide-ux/components/ghost-ux']({}));
    GhostUX.__super__.constructor.call(this, $el, this.$node, data);
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

},{"slide-ux/components/component":29}],38:[function(require,module,exports){
var Component, PersonalInfoIntro,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Component = require('slide-ux/components/component');

module.exports = PersonalInfoIntro = (function(superClass) {
  extend(PersonalInfoIntro, superClass);

  function PersonalInfoIntro($el, data) {
    data.organization = "Arizona Public Service";
    this.$node = $(jadeTemplate['slide-ux/components/personal-info-intro'](data));
    PersonalInfoIntro.__super__.constructor.call(this, $el, this.$node, data);
  }

  return PersonalInfoIntro;

})(Component);

},{"slide-ux/components/component":29}],39:[function(require,module,exports){
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
    var isCorrect;
    $(e.currentTarget).addClass("flipped");
    isCorrect = $(".response", e.currentTarget).hasClass('right');
    if (!isCorrect) {
      this.wrongGuesses++;
    }
    return this.answerCallback(isCorrect);
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

},{}],40:[function(require,module,exports){
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
    PubSub.publish("chrome.hide");
    PubSub.publish("ctanlee.hide");
    this.build(this.data);
    Quiz.__super__.constructor.call(this, this.$el, this.$node);
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
    $("#retry", this.$node).on("click", (function(_this) {
      return function() {
        return _this.reset();
      };
    })(this));
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

},{"misc/sequence":21,"slide-ux/components/component":29,"slide-ux/components/quiz/question":39}],41:[function(require,module,exports){
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
    SelectionDialogue.__super__.constructor.call(this, $el, this.$node, data);
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

},{"slide-ux/components/component":29}],42:[function(require,module,exports){
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
    SimpleSelection.__super__.constructor.call(this, $el, this.$node, data);
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
        return aristotle.commander["do"](data.click);
      };
    })(this));
  };

  return SimpleSelection;

})(Component);

},{"slide-ux/components/component":29}],43:[function(require,module,exports){
var Component, SoundTest,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

Component = require('slide-ux/components/component');

module.exports = SoundTest = (function(superClass) {
  extend(SoundTest, superClass);

  function SoundTest($el, data) {
    this.$node = $(jadeTemplate['slide-ux/components/sound-test'](data));
    SoundTest.__super__.constructor.call(this, $el, this.$node, data);
  }

  return SoundTest;

})(Component);

},{"slide-ux/components/component":29}],44:[function(require,module,exports){
var Animation, AudioTrack, Ctanlee, Sequence;

AudioTrack = require('episode/audio-track');

Sequence = require('misc/sequence');

Animation = require('movie/svg-animation');

module.exports = Ctanlee = (function() {
  function Ctanlee($parent) {
    aristotle.ctanlee = this;
    this.$el = $(jadeTemplate['slide-ux/ctanlee/ctanlee']({}));
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

  Ctanlee.prototype.say = function(text, audio, next, txtPos) {
    if (text != null) {
      this.showText();
      this.$textContent.html(text);
      this.setTextPosition(txtPos);
    } else {
      this.hideText();
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
      this.showNext();
    } else {
      this.hideNext();
    }
    if (typeof next === "number") {
      return setTimeout((function(_this) {
        return function() {
          return _this.playNextAction();
        };
      })(this), next);
    }
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
        path = 'ctanlee-down.json';
        break;
      case "left":
        path = 'ctanlee-left.json';
        break;
      case "right":
        path = 'ctanlee-right.json';
        break;
      case "surprise":
        path = 'ctanlee-surprise.json';
        break;
      case "unhappy":
        path = 'ctanlee-unhappy.json';
        break;
      default:
        if (this.$oldAnimation == null) {
          path = 'ctanlee-happy.json';
        }
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
      return this.$oldAnimation.remove();
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
    if ((action.emo != null) || (this.$currentAnimation == null)) {
      this.setEmotion(action.emo);
    }
    if (action.pos != null) {
      this.goto(action);
    }
    return this.say(action.text, action.audio, action.next, action.txtPos);
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

  Ctanlee.prototype.setTextPosition = function(pos) {
    var item, j, len, results;
    this.$text.removeClass("top left");
    if (pos == null) {
      return;
    }
    if (Array.isArray(pos)) {
      results = [];
      for (j = 0, len = pos.length; j < len; j++) {
        item = pos[j];
        results.push(this.$text.addClass(item));
      }
      return results;
    } else {
      return this.$text.addClass(pos);
    }
  };

  return Ctanlee;

})();

},{"episode/audio-track":3,"misc/sequence":21,"movie/svg-animation":27}],45:[function(require,module,exports){
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

},{}],46:[function(require,module,exports){
var CallSignSelect, Ctanlee, DefenderCards, Dialogue, DialoguePage, Duties, EpisodeIntro, EpisodeOutro, ExploreCards, GenericUiElements, GhostUX, PersonalInfoIntro, Quiz, SelectionDialogue, SimpleSelection, SlideUX, SoundTest;

CallSignSelect = require('slide-ux/components/call-sign-select');

Ctanlee = require('slide-ux/ctanlee/Ctanlee');

DefenderCards = require('slide-ux/components/defender-cards');

Dialogue = require('slide-ux/components/dialogue');

DialoguePage = require('slide-ux/components/dialogue-page');

Duties = require('slide-ux/components/duties');

EpisodeIntro = require('slide-ux/components/episode-intro');

EpisodeOutro = require('slide-ux/components/episode-outro');

ExploreCards = require('slide-ux/components/explore-cards');

GhostUX = require('slide-ux/components/ghost-ux');

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

  return SlideUX;

})();

},{"slide-ux/components/call-sign-select":28,"slide-ux/components/defender-cards":30,"slide-ux/components/dialogue":32,"slide-ux/components/dialogue-page":31,"slide-ux/components/duties":33,"slide-ux/components/episode-intro":34,"slide-ux/components/episode-outro":35,"slide-ux/components/explore-cards":36,"slide-ux/components/ghost-ux":37,"slide-ux/components/personal-info-intro":38,"slide-ux/components/quiz/quiz":40,"slide-ux/components/selection-dialogue":41,"slide-ux/components/simple-selection":42,"slide-ux/components/sound-test":43,"slide-ux/ctanlee/Ctanlee":44,"slide-ux/generic-ui":45}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL25vZGVfbW9kdWxlcy9ndWxwLWNvZmZlZWlmeS9ub2RlX21vZHVsZXMvYnJvd3NlcmlmeS9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiYXJpc3RvdGxlLmNvZmZlZSIsImNocm9tZS9jaHJvbWUtdWkuY29mZmVlIiwiZXBpc29kZS9hdWRpby10cmFjay5jb2ZmZWUiLCJlcGlzb2RlL2NoYXB0ZXItaGVhZGluZy5jb2ZmZWUiLCJlcGlzb2RlL2NoYXB0ZXIuY29mZmVlIiwiZXBpc29kZS9lcGlzb2RlLmNvZmZlZSIsImVwaXNvZGUvc2xpZGUuY29mZmVlIiwiZXBpc29kZS9zbGlkZXMuY29mZmVlIiwiZXBpc29kZS9zb3VuZGZ4LmNvZmZlZSIsIm1pc2MvU2VxdWVuY2UuY29mZmVlIiwibWlzYy9hcGktcHJveHkuY29mZmVlIiwibWlzYy9hc3NldC1wcmVsb2FkZXIuY29mZmVlIiwibWlzYy9icm93c2VyLWRldGVjdC5jb2ZmZWUiLCJtaXNjL2NvbW1hbmRlci5jb2ZmZWUiLCJtaXNjL2Rldi10b29scy5jb2ZmZWUiLCJtaXNjL2RpY3Rpb25hcnkuY29mZmVlIiwibWlzYy9lcGlzb2RlLWxvYWRlci5jb2ZmZWUiLCJtaXNjL2dsb2JhbC12YXJzLmNvZmZlZSIsIm1pc2MvbG9nZ2VyLmNvZmZlZSIsIm1pc2MvcGFyc2VyLmNvZmZlZSIsIm1pc2Mvc3RhdGUuY29mZmVlIiwibW92aWUvZHluYW1pYy1hc3NldHMuY29mZmVlIiwibW92aWUvaGlnaGxpZ2h0ZXIuY29mZmVlIiwibW92aWUvbGF5ZXIuY29mZmVlIiwibW92aWUvbW92aWUuY29mZmVlIiwibW92aWUvc3ZnLWFuaW1hdGlvbi5jb2ZmZWUiLCJzbGlkZS11eC9jb21wb25lbnRzL2NhbGwtc2lnbi1zZWxlY3QuY29mZmVlIiwic2xpZGUtdXgvY29tcG9uZW50cy9jb21wb25lbnQuY29mZmVlIiwic2xpZGUtdXgvY29tcG9uZW50cy9kZWZlbmRlci1jYXJkcy5jb2ZmZWUiLCJzbGlkZS11eC9jb21wb25lbnRzL2RpYWxvZ3VlLXBhZ2UuY29mZmVlIiwic2xpZGUtdXgvY29tcG9uZW50cy9kaWFsb2d1ZS5jb2ZmZWUiLCJzbGlkZS11eC9jb21wb25lbnRzL2R1dGllcy5jb2ZmZWUiLCJzbGlkZS11eC9jb21wb25lbnRzL2VwaXNvZGUtaW50cm8uY29mZmVlIiwic2xpZGUtdXgvY29tcG9uZW50cy9lcGlzb2RlLW91dHJvLmNvZmZlZSIsInNsaWRlLXV4L2NvbXBvbmVudHMvZXhwbG9yZS1jYXJkcy5jb2ZmZWUiLCJzbGlkZS11eC9jb21wb25lbnRzL2dob3N0LXV4LmNvZmZlZSIsInNsaWRlLXV4L2NvbXBvbmVudHMvcGVyc29uYWwtaW5mby1pbnRyby5jb2ZmZWUiLCJzbGlkZS11eC9jb21wb25lbnRzL3F1aXovcXVlc3Rpb24uY29mZmVlIiwic2xpZGUtdXgvY29tcG9uZW50cy9xdWl6L3F1aXouY29mZmVlIiwic2xpZGUtdXgvY29tcG9uZW50cy9zZWxlY3Rpb24tZGlhbG9ndWUuY29mZmVlIiwic2xpZGUtdXgvY29tcG9uZW50cy9zaW1wbGUtc2VsZWN0aW9uLmNvZmZlZSIsInNsaWRlLXV4L2NvbXBvbmVudHMvc291bmQtdGVzdC5jb2ZmZWUiLCJzbGlkZS11eC9jdGFubGVlL0N0YW5sZWUuY29mZmVlIiwic2xpZGUtdXgvZ2VuZXJpYy11aS5jb2ZmZWUiLCJzbGlkZS11eC9zbGlkZS11eC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25HQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ25GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDalBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbllBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgQVBJcHJveHksIEFyaXN0b3RsZSwgQ2hyb21lVUksIENvbW1hbmRlciwgRGV2VG9vbHMsIERpY3Rpb25hcnksIEVwaXNvZGUsIEVwaXNvZGVMb2FkZXIsIEdsb2JhbFZhcnMsIExvZ2dlciwgTW92aWUsIFBhcnNlciwgU2xpZGVVWCwgU291bmRGWCwgU3RhdGUsIGlzSW50ZXJuZXRFeHAsXG4gIGJpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9O1xuXG5BUElwcm94eSA9IHJlcXVpcmUoXCJtaXNjL2FwaS1wcm94eVwiKTtcblxuQ2hyb21lVUkgPSByZXF1aXJlKFwiY2hyb21lL2Nocm9tZS11aVwiKTtcblxuQ29tbWFuZGVyID0gcmVxdWlyZSgnbWlzYy9jb21tYW5kZXInKTtcblxuRGV2VG9vbHMgPSByZXF1aXJlKCdtaXNjL2Rldi10b29scycpO1xuXG5EaWN0aW9uYXJ5ID0gcmVxdWlyZSgnbWlzYy9kaWN0aW9uYXJ5Jyk7XG5cbkVwaXNvZGUgPSByZXF1aXJlKFwiZXBpc29kZS9lcGlzb2RlXCIpO1xuXG5FcGlzb2RlTG9hZGVyID0gcmVxdWlyZSgnbWlzYy9lcGlzb2RlLWxvYWRlcicpO1xuXG5HbG9iYWxWYXJzID0gcmVxdWlyZSgnbWlzYy9nbG9iYWwtdmFycycpO1xuXG5Mb2dnZXIgPSByZXF1aXJlKCdtaXNjL2xvZ2dlcicpO1xuXG5Nb3ZpZSA9IHJlcXVpcmUoJ21vdmllL21vdmllJyk7XG5cblBhcnNlciA9IHJlcXVpcmUoJ21pc2MvcGFyc2VyJyk7XG5cblNsaWRlVVggPSByZXF1aXJlKCdzbGlkZS11eC9zbGlkZS11eCcpO1xuXG5Tb3VuZEZYID0gcmVxdWlyZSgnZXBpc29kZS9zb3VuZGZ4Jyk7XG5cblN0YXRlID0gcmVxdWlyZSgnbWlzYy9zdGF0ZScpO1xuXG5pc0ludGVybmV0RXhwID0gcmVxdWlyZSgnbWlzYy9icm93c2VyLWRldGVjdCcpO1xuXG5BcmlzdG90bGUgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIEFyaXN0b3RsZSgkZWwsIGVwaXNvZGVzRGlyLCBsb2NhbERpciwgZXBpc29kZU51bTEpIHtcbiAgICB2YXIgZXBpc29kZUxvYWRlcjtcbiAgICB0aGlzLmVwaXNvZGVzRGlyID0gZXBpc29kZXNEaXI7XG4gICAgdGhpcy5sb2NhbERpciA9IGxvY2FsRGlyO1xuICAgIHRoaXMuZXBpc29kZU51bSA9IGVwaXNvZGVOdW0xO1xuICAgIHRoaXMub25Kc29uTG9hZGVkID0gYmluZCh0aGlzLm9uSnNvbkxvYWRlZCwgdGhpcyk7XG4gICAgd2luZG93LmFyaXN0b3RsZSA9IHRoaXM7XG4gICAgYXJpc3RvdGxlLmlzSUUgPSBpc0ludGVybmV0RXhwKCk7XG4gICAgdGhpcy5zZXREZXZNb2RlKHRydWUpO1xuICAgIHRoaXMuYnVpbGQoJGVsKTtcbiAgICBlcGlzb2RlTG9hZGVyID0gbmV3IEVwaXNvZGVMb2FkZXIodGhpcy5vbkpzb25Mb2FkZWQpO1xuICB9XG5cbiAgQXJpc3RvdGxlLnByb3RvdHlwZS5vbkpzb25Mb2FkZWQgPSBmdW5jdGlvbihlcGlzb2RlRGF0YSkge1xuICAgIHZhciBlcGlzb2RlO1xuICAgIHJldHVybiBlcGlzb2RlID0gbmV3IEVwaXNvZGUoZXBpc29kZURhdGEsIHRoaXMubW92aWUsIHRoaXMuc2xpZGVVWCk7XG4gIH07XG5cbiAgQXJpc3RvdGxlLnByb3RvdHlwZS5idWlsZCA9IGZ1bmN0aW9uKCRlbCkge1xuICAgIHZhciAkYmFzZSwgYXBpUHJveHksIGNvbW1hbmRlciwgZGljdGlvbmFyeSwgZ2xvYmFscywgcGFyc2VyLCBzaGFkb3dJY29ucywgc291bmRGeCwgc3RhdGU7XG4gICAgJGJhc2UgPSAkKGphZGVUZW1wbGF0ZVsnYXJpc3RvdGxlJ10oe30pKTtcbiAgICAkZWwuYXBwZW5kKCRiYXNlKTtcbiAgICBzaGFkb3dJY29ucyA9IG5ldyBweGljb25zLlNoYWRvd0ljb25zKCk7XG4gICAgc2hhZG93SWNvbnNJbnN0YW5jZS5zdmdSZXBsYWNlV2l0aFN0cmluZyhweFN2Z0ljb25TdHJpbmcsICRiYXNlKTtcbiAgICBjb21tYW5kZXIgPSBuZXcgQ29tbWFuZGVyKCk7XG4gICAgZGljdGlvbmFyeSA9IG5ldyBEaWN0aW9uYXJ5KCk7XG4gICAgZ2xvYmFscyA9IG5ldyBHbG9iYWxWYXJzKCk7XG4gICAgcGFyc2VyID0gbmV3IFBhcnNlcigpO1xuICAgIHNvdW5kRnggPSBuZXcgU291bmRGWCgpO1xuICAgIGFwaVByb3h5ID0gbmV3IEFQSXByb3h5KFwiaHR0cDovLzEyNy4wLjAuMToxMzM3XCIpO1xuICAgIHRoaXMuY2hyb21lVUkgPSBuZXcgQ2hyb21lVUkoJChcIi5jaHJvbWVcIiwgJGJhc2UpKTtcbiAgICB0aGlzLnNsaWRlVVggPSBuZXcgU2xpZGVVWCgkKFwiLnNsaWRlLXV4XCIsICRiYXNlKSk7XG4gICAgdGhpcy5tb3ZpZSA9IG5ldyBNb3ZpZSgkKFwiLm1vdmllXCIsICRiYXNlKSk7XG4gICAgcmV0dXJuIHN0YXRlID0gbmV3IFN0YXRlKHRoaXMubW92aWUsIHRoaXMuc2xpZGVVWCk7XG4gIH07XG5cbiAgQXJpc3RvdGxlLnByb3RvdHlwZS5zZXREZXZNb2RlID0gZnVuY3Rpb24oZGV2TW9kZSkge1xuICAgIHZhciBsb2dnZXI7XG4gICAgbG9nZ2VyID0gbmV3IExvZ2dlcigkKCdib2R5JyksIGRldk1vZGUpO1xuICAgIHJldHVybiBhcmlzdG90bGUuZGV2VG9vbHMgPSBuZXcgRGV2VG9vbHMoZGV2TW9kZSk7XG4gIH07XG5cbiAgQXJpc3RvdGxlLnByb3RvdHlwZS5nZXRFcGlzb2RlUm9vdCA9IGZ1bmN0aW9uKGVwaXNvZGVOdW0pIHtcbiAgICBpZiAoZXBpc29kZU51bSA9PSBudWxsKSB7XG4gICAgICBlcGlzb2RlTnVtID0gdGhpcy5lcGlzb2RlTnVtO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5lcGlzb2Rlc0RpciArIFwiL2VwaXNvZGVcIiArIGVwaXNvZGUgKyBcIi9cIjtcbiAgfTtcblxuICByZXR1cm4gQXJpc3RvdGxlO1xuXG59KSgpO1xuXG53aW5kb3cuQXJpc3RvdGxlID0gQXJpc3RvdGxlO1xuIiwidmFyIENocm9tZVVJO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENocm9tZVVJID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBDaHJvbWVVSSgkZWwpIHtcbiAgICB0aGlzLiRlbCA9ICRlbDtcbiAgICB0aGlzLmJ1aWxkKHRoaXMuJGVsKTtcbiAgICB0aGlzLmhpZGVNb2RlKCk7XG4gICAgUHViU3ViLnN1YnNjcmliZShcImNocm9tZS5oaWRlXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmhpZGUoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoXCJjaHJvbWUuc2hvd1wiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5zaG93KCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKFwiY2hyb21lLnNob3duYW1lXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnNob3dOYW1lKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKFwiY2hyb21lLnNob3dlcGlzb2Rlc1wiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5zaG93SWNvbnMoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoXCJjaHJvbWUuaGlkZW5hbWVcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuaGlkZU5hbWUoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoXCJjaHJvbWUuaGlkZWVwaXNvZGVzXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmhpZGVJY29ucygpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH1cblxuICBDaHJvbWVVSS5wcm90b3R5cGUuYnVpbGQgPSBmdW5jdGlvbigkZWwpIHtcbiAgICB2YXIgJHByb2dyZXNzLCAkdG9wLCBkYXRhO1xuICAgIHRoaXMuJGVsID0gJGVsO1xuICAgIGRhdGEgPSB7XG4gICAgICBuYW1lOiBcIkpvaG4gXFxcIkRlYWRleWVcXFwiIE5pbWJ1c1wiLFxuICAgICAgZXBpc29kZTogXCIxXCJcbiAgICB9O1xuICAgIHRoaXMuZ2V0UmFuayhkYXRhLCBcImN5YmVyLWNhZGV0XCIpO1xuICAgICR0b3AgPSAkKGphZGVUZW1wbGF0ZVsnY2hyb21lLXVpL3RvcCddKGRhdGEpKTtcbiAgICB0aGlzLiRlbC5hcHBlbmQoJHRvcCk7XG4gICAgdGhpcy4kbmFtZSA9ICQoXCIubmFtZS1hbmQtcmFua1wiLCAkdG9wKTtcbiAgICB0aGlzLiRpY29ucyA9ICQoXCIuZXBpc29kZXNcIiwgJHRvcCk7XG4gICAgdGhpcy4kbW9kZSA9ICQoXCIubGVhcm4tbW9kZVwiLCAkdG9wKTtcbiAgICAkcHJvZ3Jlc3MgPSAkKGphZGVUZW1wbGF0ZVsnY2hyb21lLXVpL3Byb2dyZXNzJ10oe30pKTtcbiAgICB0aGlzLiRlbC5hcHBlbmQoJHByb2dyZXNzKTtcbiAgICByZXR1cm4gc2hhZG93SWNvbnNJbnN0YW5jZS5zdmdSZXBsYWNlV2l0aFN0cmluZyhweFN2Z0ljb25TdHJpbmcsIHRoaXMuJGVsKTtcbiAgfTtcblxuICBDaHJvbWVVSS5wcm90b3R5cGUuc2hvd05hbWUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kbmFtZS5jc3Moe1xuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICBvcGFjaXR5OiAwXG4gICAgfSkudmVsb2NpdHkoe1xuICAgICAgb3BhY2l0eTogMVxuICAgIH0sIHtcbiAgICAgIGR1cmF0aW9uOiA1MDBcbiAgICB9KTtcbiAgfTtcblxuICBDaHJvbWVVSS5wcm90b3R5cGUuaGlkZU5hbWUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kbmFtZS5jc3Moe1xuICAgICAgZGlzcGxheTogXCJub25lXCJcbiAgICB9KTtcbiAgfTtcblxuICBDaHJvbWVVSS5wcm90b3R5cGUuc2hvd0ljb25zID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJGljb25zLmNzcyh7XG4gICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgIG9wYWNpdHk6IDBcbiAgICB9KS52ZWxvY2l0eSh7XG4gICAgICBvcGFjaXR5OiAxXG4gICAgfSwge1xuICAgICAgZHVyYXRpb246IDUwMFxuICAgIH0pO1xuICB9O1xuXG4gIENocm9tZVVJLnByb3RvdHlwZS5oaWRlSWNvbnMgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kaWNvbnMuY3NzKHtcbiAgICAgIGRpc3BsYXk6IFwibm9uZVwiXG4gICAgfSk7XG4gIH07XG5cbiAgQ2hyb21lVUkucHJvdG90eXBlLmhpZGUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kZWwuY3NzKHtcbiAgICAgIG9wYWNpdHk6IDBcbiAgICB9KTtcbiAgfTtcblxuICBDaHJvbWVVSS5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRlbC5jc3Moe1xuICAgICAgb3BhY2l0eTogMVxuICAgIH0pO1xuICB9O1xuXG4gIENocm9tZVVJLnByb3RvdHlwZS5oaWRlTW9kZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRtb2RlLmNzcyh7XG4gICAgICBkaXNwbGF5OiBcIm5vbmVcIlxuICAgIH0pO1xuICB9O1xuXG4gIENocm9tZVVJLnByb3RvdHlwZS5zaG93TW9kZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRtb2RlLmNzcyh7XG4gICAgICBkaXNwbGF5OiBcImJsb2NrXCJcbiAgICB9KTtcbiAgfTtcblxuICBDaHJvbWVVSS5wcm90b3R5cGUuZ2V0UmFuayA9IGZ1bmN0aW9uKGRhdGEsIGVwaXNvZGUpIHtcbiAgICBzd2l0Y2ggKGVwaXNvZGUpIHtcbiAgICAgIGNhc2UgJ3JlY3J1aXRzJzpcbiAgICAgICAgZGF0YS5yYW5rID0gXCJyZWNydWl0XCI7XG4gICAgICAgIHJldHVybiBkYXRhLmJhZGdlID0gXCJyYW5rLWJhZGdlLXJlY3J1aXRcIjtcbiAgICAgIGNhc2UgJ2NhZGV0JzpcbiAgICAgICAgZGF0YS5yYW5rID0gXCJjYWRldFwiO1xuICAgICAgICByZXR1cm4gZGF0YS5iYWRnZSA9IFwicmFuay1iYWRnZS1jYWRldFwiO1xuICAgICAgY2FzZSAnY2FkZXQtZmlyc3QtY2xhc3MnOlxuICAgICAgICBkYXRhLnJhbmsgPSBcIkNhZGV0IEZpcnN0IENsYXNzXCI7XG4gICAgICAgIHJldHVybiBkYXRhLmJhZGdlID0gXCJyYW5rLWJhZGdlLWNhZGV0LWZpcnN0LWNsYXNzXCI7XG4gICAgICBjYXNlICd0ZWNobmljYWwtY2FkZXQnOlxuICAgICAgICBkYXRhLnJhbmsgPSBcIlRlY2huaWNhbCBDYWRldFwiO1xuICAgICAgICByZXR1cm4gZGF0YS5iYWRnZSA9IFwicmFuay1iYWRnZS10ZWNobmljYWwtY2FkZXRcIjtcbiAgICAgIGNhc2UgJ2N5YmVyLWNhZGV0JzpcbiAgICAgICAgZGF0YS5yYW5rID0gXCJDeWJlciBDYWRldFwiO1xuICAgICAgICByZXR1cm4gZGF0YS5iYWRnZSA9IFwicmFuay1iYWRnZS1jeWJlci1jYWRldFwiO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gQ2hyb21lVUk7XG5cbn0pKCk7XG4iLCJ2YXIgQXVkaW9UcmFjaztcblxubW9kdWxlLmV4cG9ydHMgPSBBdWRpb1RyYWNrID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBBdWRpb1RyYWNrKHNyYykge1xuICAgIHRoaXMuc3JjID0gc3JjO1xuICAgIEF1ZGlvVHJhY2suaW5pdFNvdW5kU2V0dGluZ3MoKTtcbiAgfVxuXG4gIEF1ZGlvVHJhY2sucHJvdG90eXBlLnBsYXkgPSBmdW5jdGlvbihvbkNvbXBsZXRlKSB7XG4gICAgdGhpcy5zb3VuZCA9IGNyZWF0ZWpzLlNvdW5kLnBsYXkodGhpcy5zcmMsIEF1ZGlvVHJhY2sucHBjKTtcbiAgICByZXR1cm4gdGhpcy5hZGRPbkNvbXBsZXRlKG9uQ29tcGxldGUpO1xuICB9O1xuXG4gIEF1ZGlvVHJhY2sucHJvdG90eXBlLmFkZE9uQ29tcGxldGUgPSBmdW5jdGlvbihvbkNvbXBsZXRlKSB7XG4gICAgaWYgKG9uQ29tcGxldGUgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMuc291bmQuYWRkRXZlbnRMaXN0ZW5lcihcImNvbXBsZXRlXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gb25Db21wbGV0ZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIEF1ZGlvVHJhY2sucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5zb3VuZC5zdG9wKCk7XG4gIH07XG5cbiAgQXVkaW9UcmFjay5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuc291bmQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNvbXBsZXRlXCIpO1xuICAgIHJldHVybiB0aGlzLnNvdW5kLmRlc3Ryb3koKTtcbiAgfTtcblxuICBBdWRpb1RyYWNrLmluaXRTb3VuZFNldHRpbmdzID0gZnVuY3Rpb24odm9sdW1lKSB7XG4gICAgaWYgKHZvbHVtZSA9PSBudWxsKSB7XG4gICAgICB2b2x1bWUgPSAxO1xuICAgIH1cbiAgICBpZiAoQXVkaW9UcmFjay5wcGMgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gQXVkaW9UcmFjay5wcGMgPSBuZXcgY3JlYXRlanMuUGxheVByb3BzQ29uZmlnKCkuc2V0KHtcbiAgICAgIGludGVycnVwdDogY3JlYXRlanMuU291bmQuSU5URVJSVVBUX0FOWSxcbiAgICAgIHZvbHVtZTogdm9sdW1lLFxuICAgICAgcGFuOiAxXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIEF1ZGlvVHJhY2s7XG5cbn0pKCk7XG4iLCJ2YXIgQ2hhcHRlckhlYWRpbmcsIFByZWxvYWRlcixcbiAgYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH07XG5cblByZWxvYWRlciA9IHJlcXVpcmUoJ21pc2MvYXNzZXQtcHJlbG9hZGVyJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ2hhcHRlckhlYWRpbmcgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIENoYXB0ZXJIZWFkaW5nKGRhdGEsIGxvYWRDb21wbGV0ZSkge1xuICAgIHRoaXMubG9hZENvbXBsZXRlID0gbG9hZENvbXBsZXRlO1xuICAgIHRoaXMuY29tcGxldGUgPSBiaW5kKHRoaXMuY29tcGxldGUsIHRoaXMpO1xuICAgIHRoaXMudXBkYXRlID0gYmluZCh0aGlzLnVwZGF0ZSwgdGhpcyk7XG4gICAgdGhpcy4kZWwgPSAkKCdib2R5Jyk7XG4gICAgdGhpcy4kbm9kZSA9ICQoamFkZVRlbXBsYXRlWydtaXNjL2NoYXB0ZXItaGVhZGluZyddKHtcbiAgICAgIHRpdGxlOiBkYXRhLnRpdGxlLFxuICAgICAgc3VidGl0bGU6IGRhdGEuc3VidGl0bGVcbiAgICB9KSk7XG4gICAgdGhpcy4kZWwuYXBwZW5kKHRoaXMuJG5vZGUpO1xuICAgIHRoaXMuJGZnID0gJChcIi5mZ1wiLCB0aGlzLiRub2RlKTtcbiAgICBzaGFkb3dJY29uc0luc3RhbmNlLnN2Z1JlcGxhY2VXaXRoU3RyaW5nKHB4U3ZnSWNvblN0cmluZywgdGhpcy4kbm9kZSk7XG4gICAgdGhpcy5wcmVsb2FkKGRhdGEpO1xuICB9XG5cbiAgQ2hhcHRlckhlYWRpbmcucHJvdG90eXBlLnByZWxvYWQgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyIHByZWxvYWRlcjtcbiAgICByZXR1cm4gcHJlbG9hZGVyID0gbmV3IFByZWxvYWRlcihkYXRhLCB0aGlzLmNvbXBsZXRlLCB0aGlzLnVwZGF0ZSk7XG4gIH07XG5cbiAgQ2hhcHRlckhlYWRpbmcucHJvdG90eXBlLnVwZGF0ZSA9IGZ1bmN0aW9uKHBlcmMpIHtcbiAgICByZXR1cm4gdGhpcy4kZmcuY3NzKHtcbiAgICAgIHdpZHRoOiAoTWF0aC5yb3VuZChwZXJjICogMTAwKSkgKyBcIiVcIlxuICAgIH0pO1xuICB9O1xuXG4gIENoYXB0ZXJIZWFkaW5nLnByb3RvdHlwZS5jb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuJG5vZGUuYWRkQ2xhc3MoJ2NvbXBsZXRlJyk7XG4gICAgdGhpcy5kZXN0cm95KCk7XG4gICAgcmV0dXJuIHRoaXMubG9hZENvbXBsZXRlKCk7XG4gIH07XG5cbiAgQ2hhcHRlckhlYWRpbmcucHJvdG90eXBlLmRlc3Ryb3kgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kbm9kZS52ZWxvY2l0eSh7XG4gICAgICBvcGFjaXR5OiAwXG4gICAgfSwge1xuICAgICAgZGVsYXk6IDMwMCxcbiAgICAgIGR1cmF0aW9uOiA0MDAsXG4gICAgICBjb21wbGV0ZTogKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMuJG5vZGUucmVtb3ZlKCk7XG4gICAgICAgIH07XG4gICAgICB9KSh0aGlzKVxuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBDaGFwdGVySGVhZGluZztcblxufSkoKTtcbiIsInZhciBDaGFwdGVyLCBDaGFwdGVySGVhZGluZywgU2xpZGVzLFxuICBiaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfTtcblxuU2xpZGVzID0gcmVxdWlyZSgnZXBpc29kZS9zbGlkZXMnKTtcblxuQ2hhcHRlckhlYWRpbmcgPSByZXF1aXJlKCdlcGlzb2RlL2NoYXB0ZXItaGVhZGluZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENoYXB0ZXIgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIENoYXB0ZXIoY2hhcHRlckRhdGEsIG1vdmllLCB1eCwgb25DaGFwdGVyQ29tcGV0ZSkge1xuICAgIHRoaXMuY2hhcHRlckRhdGEgPSBjaGFwdGVyRGF0YTtcbiAgICB0aGlzLm1vdmllID0gbW92aWU7XG4gICAgdGhpcy51eCA9IHV4O1xuICAgIHRoaXMub25DaGFwdGVyQ29tcGV0ZSA9IG9uQ2hhcHRlckNvbXBldGU7XG4gICAgdGhpcy5vblNsaWRlc0NvbXBsZXRlID0gYmluZCh0aGlzLm9uU2xpZGVzQ29tcGxldGUsIHRoaXMpO1xuICAgIHRoaXMuc3RhcnRTbGlkZXMgPSBiaW5kKHRoaXMuc3RhcnRTbGlkZXMsIHRoaXMpO1xuICB9XG5cbiAgQ2hhcHRlci5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgY2hhcHRlckhlYWRpbmc7XG4gICAgYXJpc3RvdGxlLmRldlRvb2xzLmdvKHRoaXMuY2hhcHRlckRhdGEuZGV2LCB0aGlzLmNoYXB0ZXJEYXRhLnNsaWRlcyk7XG4gICAgcmV0dXJuIGNoYXB0ZXJIZWFkaW5nID0gbmV3IENoYXB0ZXJIZWFkaW5nKHRoaXMuY2hhcHRlckRhdGEsIHRoaXMuc3RhcnRTbGlkZXMpO1xuICB9O1xuXG4gIENoYXB0ZXIucHJvdG90eXBlLnN0YXJ0U2xpZGVzID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zbGlkZXMgPSBuZXcgU2xpZGVzKHRoaXMuY2hhcHRlckRhdGEsIHRoaXMubW92aWUsIHRoaXMudXgsIHRoaXMub25TbGlkZXNDb21wbGV0ZSk7XG4gICAgcmV0dXJuIHRoaXMuc2xpZGVzLnN0YXJ0KCk7XG4gIH07XG5cbiAgQ2hhcHRlci5wcm90b3R5cGUub25TbGlkZXNDb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm9uQ2hhcHRlckNvbXBldGUoKTtcbiAgfTtcblxuICByZXR1cm4gQ2hhcHRlcjtcblxufSkoKTtcbiIsInZhciBDaGFwdGVyLCBFcGlzb2RlLCBTZXF1ZW5jZSxcbiAgYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH07XG5cbkNoYXB0ZXIgPSByZXF1aXJlKCdlcGlzb2RlL2NoYXB0ZXInKTtcblxuU2VxdWVuY2UgPSByZXF1aXJlKCdtaXNjL1NlcXVlbmNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRXBpc29kZSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gRXBpc29kZSh0cmFpbmluZ0RhdGEsIG1vdmllLCB1eCkge1xuICAgIHRoaXMubW92aWUgPSBtb3ZpZTtcbiAgICB0aGlzLnV4ID0gdXg7XG4gICAgdGhpcy5wbGF5Q2hhcHRlciA9IGJpbmQodGhpcy5wbGF5Q2hhcHRlciwgdGhpcyk7XG4gICAgdGhpcy5jaGFwdGVyQ29tcGxldGUgPSBiaW5kKHRoaXMuY2hhcHRlckNvbXBsZXRlLCB0aGlzKTtcbiAgICB0aGlzLm5leHRDaGFwdGVyID0gYmluZCh0aGlzLm5leHRDaGFwdGVyLCB0aGlzKTtcbiAgICB0aGlzLm5leHRSYW5rSWQgPSB0cmFpbmluZ0RhdGEubmV4dFJhbmtJZDtcbiAgICBQdWJTdWIucHVibGlzaCgnY2hyb21lLmhpZGUnKTtcbiAgICBhcmlzdG90bGUuZGV2VG9vbHMuZ28odHJhaW5pbmdEYXRhLmRldiwgdHJhaW5pbmdEYXRhLmNoYXB0ZXJzKTtcbiAgICB0aGlzLmNyZWF0ZUNoYXB0ZXJzKHRyYWluaW5nRGF0YSk7XG4gICAgaWYgKHRyYWluaW5nRGF0YS5za2lwU2xhdGUpIHtcbiAgICAgIHRoaXMucGxheUNoYXB0ZXIoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zaG93SW50cm8odHJhaW5pbmdEYXRhKTtcbiAgICB9XG4gIH1cblxuICBFcGlzb2RlLnByb3RvdHlwZS5zaG93SW50cm8gPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdGhpcy51eC5wb3B1bGF0ZSh7XG4gICAgICBjb21wb25lbnRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBraW5kOiBcImVwaXNvZGUtaW50cm9cIixcbiAgICAgICAgICBjb25maWc6IHtcbiAgICAgICAgICAgIHRpdGxlOiBkYXRhLnRpdGxlLFxuICAgICAgICAgICAgc3VidGl0bGU6IGRhdGEuc3VidGl0bGUsXG4gICAgICAgICAgICBlcGlzb2RlOiBkYXRhLmVwaXNvZGVcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9KTtcbiAgICByZXR1cm4gc2V0VGltZW91dCh0aGlzLnBsYXlDaGFwdGVyLCAzMDAwKTtcbiAgfTtcblxuICBFcGlzb2RlLnByb3RvdHlwZS5zaG93T3V0cm8gPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMudXgucG9wdWxhdGUoe1xuICAgICAgY29tcG9uZW50czogW1xuICAgICAgICB7XG4gICAgICAgICAga2luZDogXCJlcGlzb2RlLW91dHJvXCIsXG4gICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICByYW5rSWQ6IHRoaXMubmV4dFJhbmtJZCxcbiAgICAgICAgICAgIHJhbms6IGFyaXN0b3RsZS5kaWN0aW9uYXJ5LmdldCh0aGlzLm5leHRSYW5rSWQpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSk7XG4gIH07XG5cbiAgRXBpc29kZS5wcm90b3R5cGUuY3JlYXRlQW5kU2hvd091dHJvID0gZnVuY3Rpb24oKSB7fTtcblxuICBFcGlzb2RlLnByb3RvdHlwZS5jcmVhdGVDaGFwdGVycyA9IGZ1bmN0aW9uKHRyYWluaW5nRGF0YSkge1xuICAgIHZhciBjaGFwdGVyRGF0YSwgY2hhcHRlcnMsIGksIGxlbiwgcmVmO1xuICAgIGNoYXB0ZXJzID0gW107XG4gICAgcmVmID0gdHJhaW5pbmdEYXRhLmNoYXB0ZXJzO1xuICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgY2hhcHRlckRhdGEgPSByZWZbaV07XG4gICAgICBjaGFwdGVycy5wdXNoKG5ldyBDaGFwdGVyKGNoYXB0ZXJEYXRhLCB0aGlzLm1vdmllLCB0aGlzLnV4LCB0aGlzLmNoYXB0ZXJDb21wbGV0ZSkpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jaGFwdGVycyA9IG5ldyBTZXF1ZW5jZShjaGFwdGVycyk7XG4gIH07XG5cbiAgRXBpc29kZS5wcm90b3R5cGUubmV4dENoYXB0ZXIgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5jaGFwdGVycy5pc0F0TGFzdEl0ZW0oKSkge1xuICAgICAgcmV0dXJuIHRoaXMuZXBpc29kZUNvbXBsZXRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2hhcHRlcnMubmV4dCgpO1xuICAgICAgcmV0dXJuIHRoaXMucGxheUNoYXB0ZXIoKTtcbiAgICB9XG4gIH07XG5cbiAgRXBpc29kZS5wcm90b3R5cGUuc3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5wbGF5Q2hhcHRlcigpO1xuICB9O1xuXG4gIEVwaXNvZGUucHJvdG90eXBlLmNoYXB0ZXJDb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIFB1YlN1Yi5wdWJsaXNoKCdzdGF0ZS5zYXZlJyk7XG4gICAgcmV0dXJuIHRoaXMubmV4dENoYXB0ZXIoKTtcbiAgfTtcblxuICBFcGlzb2RlLnByb3RvdHlwZS5wbGF5Q2hhcHRlciA9IGZ1bmN0aW9uKCkge1xuICAgIFB1YlN1Yi5wdWJsaXNoKCdzdGF0ZS5sb2FkJyk7XG4gICAgcmV0dXJuIHRoaXMuY2hhcHRlcnMuZ2V0Q3VycmVudEl0ZW0oKS5zdGFydCh0aGlzLmNoYXB0ZXJDb21wbGV0ZSk7XG4gIH07XG5cbiAgRXBpc29kZS5wcm90b3R5cGUuZXBpc29kZUNvbXBsZXRlID0gZnVuY3Rpb24oKSB7XG4gICAgY29uc29sZS5sb2coXCJlcGlzb2RlIGNvbXBsZXRlXCIpO1xuICAgIHJldHVybiB0aGlzLnNob3dPdXRybygpO1xuICB9O1xuXG4gIHJldHVybiBFcGlzb2RlO1xuXG59KSgpO1xuIiwidmFyIEF1ZGlvVHJhY2ssIFNWR0FuaW1hdGlvbiwgU2xpZGUsXG4gIGJpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9O1xuXG5BdWRpb1RyYWNrID0gcmVxdWlyZShcImVwaXNvZGUvYXVkaW8tdHJhY2tcIik7XG5cblNWR0FuaW1hdGlvbiA9IHJlcXVpcmUoXCJtb3ZpZS9zdmctYW5pbWF0aW9uXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNsaWRlID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBTbGlkZShtb3ZpZSwgc2xpZGVVWCwgc2xpZGVEYXRhLCBvblNsaWRlQ29tcGxldGUpIHtcbiAgICB0aGlzLm1vdmllID0gbW92aWU7XG4gICAgdGhpcy5zbGlkZVVYID0gc2xpZGVVWDtcbiAgICB0aGlzLnNsaWRlRGF0YSA9IHNsaWRlRGF0YTtcbiAgICB0aGlzLm9uU2xpZGVDb21wbGV0ZSA9IG9uU2xpZGVDb21wbGV0ZTtcbiAgICB0aGlzLnBsYXkgPSBiaW5kKHRoaXMucGxheSwgdGhpcyk7XG4gIH1cblxuICBTbGlkZS5wcm90b3R5cGUucGxheSA9IGZ1bmN0aW9uKG9uQ29tcGxldGUpIHtcbiAgICB0aGlzLm1vdmllLnBvcHVsYXRlKHRoaXMuc2xpZGVEYXRhLm1vdmllKTtcbiAgICB0aGlzLnNsaWRlVVgucG9wdWxhdGUodGhpcy5zbGlkZURhdGEudXgpO1xuICAgIHRoaXMuc2V0RHVyYXRpb24oKTtcbiAgICB0aGlzLnJ1bkN0YW5sZWUodGhpcy5zbGlkZURhdGEuY3RhbmxlZSk7XG4gICAgcmV0dXJuIHRoaXMucnVuQWN0aW9ucyh0aGlzLnNsaWRlRGF0YS5hY3Rpb24pO1xuICB9O1xuXG4gIFNsaWRlLnByb3RvdHlwZS5ydW5BY3Rpb25zID0gZnVuY3Rpb24oYWN0aW9uKSB7XG4gICAgaWYgKGFjdGlvbiA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiBhcmlzdG90bGUuY29tbWFuZGVyW1wiZG9cIl0oYWN0aW9uKTtcbiAgfTtcblxuICBTbGlkZS5wcm90b3R5cGUuc2V0RHVyYXRpb24gPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgY3RhbmxlZVN1YnNjcmlwdGlvbiwgbGlzdGVuU3Vic2NyaXB0aW9uLCB1eFN1YnNjcmlwdGlvbjtcbiAgICBpZiAodGhpcy5zbGlkZURhdGEuZHVyYXRpb24gPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzd2l0Y2ggKHRoaXMuc2xpZGVEYXRhLmR1cmF0aW9uLmtpbmQpIHtcbiAgICAgIGNhc2UgXCJ0aW1lXCI6XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KHRoaXMub25TbGlkZUNvbXBsZXRlLCB0aGlzLnNsaWRlRGF0YS5kdXJhdGlvbi5zZWNvbmRzICogMTAwMCk7XG4gICAgICBjYXNlIFwidXNlclwiOlxuICAgICAgICByZXR1cm4gY29uc29sZS5sb2coXCJ3YWl0aW5nIG9uIHRoZSB1c2VyXCIpO1xuICAgICAgY2FzZSBcInV4XCI6XG4gICAgICAgIHJldHVybiB1eFN1YnNjcmlwdGlvbiA9IFB1YlN1Yi5zdWJzY3JpYmUoJ3V4LmNvbXBsZXRlJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgUHViU3ViLnVuc3Vic2NyaWJlKHV4U3Vic2NyaXB0aW9uKTtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5vblNsaWRlQ29tcGxldGUoKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KSh0aGlzKSk7XG4gICAgICBjYXNlIFwiY3RhbmxlZVwiOlxuICAgICAgICByZXR1cm4gY3RhbmxlZVN1YnNjcmlwdGlvbiA9IFB1YlN1Yi5zdWJzY3JpYmUoJ2N0YW5sZWUuY29tcGxldGUnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBQdWJTdWIudW5zdWJzY3JpYmUoY3RhbmxlZVN1YnNjcmlwdGlvbik7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMub25TbGlkZUNvbXBsZXRlKCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSkodGhpcykpO1xuICAgICAgY2FzZSBcImxpc3RlblwiOlxuICAgICAgICByZXR1cm4gbGlzdGVuU3Vic2NyaXB0aW9uID0gUHViU3ViLnN1YnNjcmliZSh0aGlzLnNsaWRlRGF0YS5kdXJhdGlvbi5ldmVudCwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgUHViU3ViLnVuc3Vic2NyaWJlKGxpc3RlblN1YnNjcmlwdGlvbik7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMub25TbGlkZUNvbXBsZXRlKCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSkodGhpcykpO1xuICAgIH1cbiAgfTtcblxuICBTbGlkZS5wcm90b3R5cGUucnVuQ3RhbmxlZSA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBpZiAoZGF0YSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gYXJpc3RvdGxlLmN0YW5sZWUuYWN0aXZhdGUoZGF0YSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBTbGlkZTtcblxufSkoKTtcbiIsInZhciBTZXF1ZW5jZSwgU2xpZGUsIFNsaWRlcyxcbiAgYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH07XG5cblNsaWRlID0gcmVxdWlyZSgnZXBpc29kZS9zbGlkZScpO1xuXG5TZXF1ZW5jZSA9IHJlcXVpcmUoJ21pc2Mvc2VxdWVuY2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTbGlkZXMgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIFNsaWRlcyh0cmFpbmluZ0RhdGEsIG1vdmllLCB1eCwgb25TaG93Q29tcGxldGUpIHtcbiAgICB0aGlzLm9uU2hvd0NvbXBsZXRlID0gb25TaG93Q29tcGxldGU7XG4gICAgdGhpcy5zbGlkZUNvbXBsZXRlID0gYmluZCh0aGlzLnNsaWRlQ29tcGxldGUsIHRoaXMpO1xuICAgIHRoaXMubmV4dFNsaWRlID0gYmluZCh0aGlzLm5leHRTbGlkZSwgdGhpcyk7XG4gICAgYXJpc3RvdGxlLnNsaWRlcyA9IHRoaXM7XG4gICAgdGhpcy5jcmVhdGVTbGlkZXModHJhaW5pbmdEYXRhLCBtb3ZpZSwgdXgpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ3NsaWRlcy5uZXh0JywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5uZXh0U2xpZGUoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ3NsaWRlcy5uZXh0LXNsaWRlJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5uZXh0U2xpZGUoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9XG5cbiAgU2xpZGVzLnByb3RvdHlwZS5jcmVhdGVTbGlkZXMgPSBmdW5jdGlvbih0cmFpbmluZ0RhdGEsIG1vdmllLCB1eCkge1xuICAgIHZhciBpLCBsZW4sIHJlZiwgc2xpZGVEYXRhLCBzbGlkZXM7XG4gICAgc2xpZGVzID0gW107XG4gICAgcmVmID0gdHJhaW5pbmdEYXRhLnNsaWRlcztcbiAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgIHNsaWRlRGF0YSA9IHJlZltpXTtcbiAgICAgIHNsaWRlcy5wdXNoKG5ldyBTbGlkZShtb3ZpZSwgdXgsIHNsaWRlRGF0YSwgdGhpcy5zbGlkZUNvbXBsZXRlKSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnNsaWRlcyA9IG5ldyBTZXF1ZW5jZShzbGlkZXMpO1xuICB9O1xuXG4gIFNsaWRlcy5wcm90b3R5cGUubmV4dFNsaWRlID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuc2xpZGVzLmlzQXRMYXN0SXRlbSgpKSB7XG4gICAgICByZXR1cm4gdGhpcy5zbGlkZVNob3dDb21wbGV0ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNsaWRlcy5uZXh0KCk7XG4gICAgICByZXR1cm4gdGhpcy5wbGF5U2xpZGUoKTtcbiAgICB9XG4gIH07XG5cbiAgU2xpZGVzLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnBsYXlTbGlkZSgpO1xuICB9O1xuXG4gIFNsaWRlcy5wcm90b3R5cGUuc2xpZGVDb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLm5leHRTbGlkZSgpO1xuICB9O1xuXG4gIFNsaWRlcy5wcm90b3R5cGUucGxheVNsaWRlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2xpZGVzLmdldEN1cnJlbnRJdGVtKCkucGxheSh0aGlzLnNsaWRlQ29tcGxldGUpO1xuICB9O1xuXG4gIFNsaWRlcy5wcm90b3R5cGUuc2xpZGVTaG93Q29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5vblNob3dDb21wbGV0ZSgpO1xuICB9O1xuXG4gIFNsaWRlcy5wcm90b3R5cGUuZ2V0Q3VycmVudEluZGV4ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2xpZGVzLmdldEN1cnJlbnRJdGVtKCkuc2xpZGVEYXRhLmluZGV4O1xuICB9O1xuXG4gIFNsaWRlcy5wcm90b3R5cGUuZ2V0SW5kZXhBbmRUb3RhbCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAodGhpcy5zbGlkZXMuZ2V0Q3VycmVudEl0ZW0oKS5zbGlkZURhdGEuaW5kZXgpICsgXCIvXCIgKyB0aGlzLnNsaWRlcy50b3RhbEl0ZW1zO1xuICB9O1xuXG4gIHJldHVybiBTbGlkZXM7XG5cbn0pKCk7XG4iLCJ2YXIgQXVkaW9UcmFjaywgU291bmRGWDtcblxuQXVkaW9UcmFjayA9IHJlcXVpcmUoJ2VwaXNvZGUvYXVkaW8tdHJhY2snKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTb3VuZEZYID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBTb3VuZEZYKCkge1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ3BsYXlzb3VuZCcsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnBsYXlTb3VuZChkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9XG5cbiAgU291bmRGWC5wcm90b3R5cGUucGxheVNvdW5kID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciB0cmFjaztcbiAgICB0cmFjayA9IG5ldyBBdWRpb1RyYWNrKGRhdGEuZmlsZSk7XG4gICAgcmV0dXJuIHRyYWNrLnBsYXkoZnVuY3Rpb24oKSB7XG4gICAgICB0cmFjay5kZXN0cm95KCk7XG4gICAgICBpZiAoZGF0YS5jb21wbGV0ZSAhPSBudWxsKSB7XG4gICAgICAgIHJldHVybiBhcmlzdG90bGUuY29tbWFuZGVyW1wiZG9cIl0oZGF0YS5jb21wbGV0ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIFNvdW5kRlg7XG5cbn0pKCk7XG4iLCJ2YXIgU2VxdWVuY2U7XG5cbm1vZHVsZS5leHBvcnRzID0gU2VxdWVuY2UgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIFNlcXVlbmNlKGl0ZW1zKSB7XG4gICAgdGhpcy5pdGVtcyA9IGl0ZW1zO1xuICAgIHRoaXMuY3VycmVudEl0ZW1JbmRleCA9IDA7XG4gICAgdGhpcy50b3RhbEl0ZW1zID0gdGhpcy5pdGVtcy5sZW5ndGg7XG4gIH1cblxuICBTZXF1ZW5jZS5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uKGxvb3BPbk92ZXJTaG9vdCkge1xuICAgIGlmIChsb29wT25PdmVyU2hvb3QgPT0gbnVsbCkge1xuICAgICAgbG9vcE9uT3ZlclNob290ID0gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmluY3JhbWVudEl0ZW1JbmRleCgxLCBsb29wT25PdmVyU2hvb3QpO1xuICB9O1xuXG4gIFNlcXVlbmNlLnByb3RvdHlwZS5wcmV2ID0gZnVuY3Rpb24obG9vcE9uT3ZlclNob290KSB7XG4gICAgaWYgKGxvb3BPbk92ZXJTaG9vdCA9PSBudWxsKSB7XG4gICAgICBsb29wT25PdmVyU2hvb3QgPSBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaW5jcmFtZW50SXRlbUluZGV4KC0xLCBsb29wT25PdmVyU2hvb3QpO1xuICB9O1xuXG4gIFNlcXVlbmNlLnByb3RvdHlwZS5pc0F0TGFzdEl0ZW0gPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5jdXJyZW50SXRlbUluZGV4ID09PSB0aGlzLnRvdGFsSXRlbXMgLSAxKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICBTZXF1ZW5jZS5wcm90b3R5cGUuZ2V0Q3VycmVudEl0ZW0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtc1t0aGlzLmN1cnJlbnRJdGVtSW5kZXhdO1xuICB9O1xuXG4gIFNlcXVlbmNlLnByb3RvdHlwZS5jdXJyZW50SXRlbSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmdldEN1cnJlbnRJdGVtKCk7XG4gIH07XG5cbiAgU2VxdWVuY2UucHJvdG90eXBlLmluY3JhbWVudEl0ZW1JbmRleCA9IGZ1bmN0aW9uKGluY3JhbWVudCwgbG9vcE9uT3ZlclNob290KSB7XG4gICAgdmFyIG5ld0luZGV4O1xuICAgIGlmIChsb29wT25PdmVyU2hvb3QgPT0gbnVsbCkge1xuICAgICAgbG9vcE9uT3ZlclNob290ID0gZmFsc2U7XG4gICAgfVxuICAgIG5ld0luZGV4ID0gdGhpcy5jdXJyZW50SXRlbUluZGV4ICsgaW5jcmFtZW50O1xuICAgIGlmIChuZXdJbmRleCA+IHRoaXMudG90YWxJdGVtcyAtIDEpIHtcbiAgICAgIG5ld0luZGV4ID0gbG9vcE9uT3ZlclNob290ID8gMCA6IHRoaXMudG90YWxJdGVtcyAtIDE7XG4gICAgfSBlbHNlIGlmIChuZXdJbmRleCA8IDApIHtcbiAgICAgIG5ld0luZGV4ID0gbG9vcE9uT3ZlclNob290ID8gdGhpcy50b3RhbEl0ZW1zIC0gMSA6IDA7XG4gICAgfVxuICAgIGlmICh0aGlzLmN1cnJlbnRJdGVtSW5kZXggIT09IG5ld0luZGV4KSB7XG4gICAgICB0aGlzLmN1cnJlbnRJdGVtSW5kZXggPSBuZXdJbmRleDtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIFNlcXVlbmNlLnByb3RvdHlwZS5jaGFuZ2VJdGVtQnlJbmRleCA9IGZ1bmN0aW9uKG5ld0luZGV4KSB7XG4gICAgdmFyIGluY3JhbWVudERpZmZlcmVuY2UsIHBsdXNPck1pbnVzO1xuICAgIHBsdXNPck1pbnVzID0gdGhpcy5uZXdJbmRleCA+IHRoaXMuY3VycmVudEl0ZW1JbmRleCA/IDEgOiAtMTtcbiAgICBpbmNyYW1lbnREaWZmZXJlbmNlID0gTWF0aC5hYnModGhpcy5jdXJyZW50SXRlbUluZGV4IC0gdGhpcy5uZXdJbmRleCkgKiBwbHVzT3JNaW51cztcbiAgICByZXR1cm4gdGhpcy5pbmNyYW1lbnRJdGVtSW5kZXgoaW5jcmFtZW50RGlmZmVyZW5jZSk7XG4gIH07XG5cbiAgU2VxdWVuY2UucHJvdG90eXBlLmFjdGl2YXRlSXRlbUJ5UGFyYW0gPSBmdW5jdGlvbihwYXJhbSwgdmFsKSB7XG4gICAgcmV0dXJuIHRoaXMuY3VycmVudEl0ZW1JbmRleCA9IHRoaXMuZ2V0SW5kZXhCeVBhcmFtKHBhcmFtLCB2YWwpO1xuICB9O1xuXG4gIFNlcXVlbmNlLnByb3RvdHlwZS5nZXRJbmRleEJ5UGFyYW0gPSBmdW5jdGlvbihwYXJhbSwgdmFsKSB7XG4gICAgdmFyIGksIGl0ZW0sIGosIGxlbiwgcmVmO1xuICAgIHJlZiA9IHRoaXMuaXRlbXM7XG4gICAgZm9yIChpID0gaiA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGogPCBsZW47IGkgPSArK2opIHtcbiAgICAgIGl0ZW0gPSByZWZbaV07XG4gICAgICBpZiAoaXRlbVtwYXJhbV0gPT09IHZhbCkge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH07XG5cbiAgU2VxdWVuY2UucHJvdG90eXBlLmdldEl0ZW1CeVBhcmFtID0gZnVuY3Rpb24ocGFyYW0sIHZhbCkge1xuICAgIHJldHVybiB0aGlzLml0ZW1zW3RoaXMuZ2V0SW5kZXhCeVBhcmFtKHBhcmFtLCB2YWwpXTtcbiAgfTtcblxuICByZXR1cm4gU2VxdWVuY2U7XG5cbn0pKCk7XG4iLCJ2YXIgQVBJcHJveHk7XG5cbm1vZHVsZS5leHBvcnRzID0gQVBJcHJveHkgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIEFQSXByb3h5KGJhc2VVcmwpIHtcbiAgICB0aGlzLmJhc2VVcmwgPSBiYXNlVXJsO1xuICAgIHJldHVybjtcbiAgICBhcmlzdG90bGUuYXBpUHJveHkgPSB0aGlzO1xuICAgIHRoaXMuY29tcGFueUFwaVRva2VuID0gXCJDT01QQU5ZLUFQSS1UT0tFTlwiO1xuICAgIHRoaXMudXNlckFwaVRva2VuID0gXCJVU0VSLUFQSS1UT0tFTlwiO1xuICAgIHRoaXMudGVzdENyZWF0ZSgpO1xuICAgIHRoaXMudGVzdEdldCgpO1xuICAgIHRoaXMudGVzdFB1dCgpO1xuICB9XG5cbiAgQVBJcHJveHkucHJvdG90eXBlLnRlc3RDcmVhdGUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVVc2VyKChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHN0YXR1cywgZGF0YSwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcbiAgICAgICAgc3dpdGNoIChzdGF0dXMpIHtcbiAgICAgICAgICBjYXNlICdkb25lJzpcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgICBjYXNlICdmYWlsJzpcbiAgICAgICAgICAgIHJldHVybiBhcmlzdG90bGVbXCJ0aHJvd1wiXShcIkFQSSBjYWxsIGZhaWxlZCA6IFwiICsgZXJyb3JUaHJvd24sIHRydWUpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgfTtcblxuICBBUElwcm94eS5wcm90b3R5cGUudGVzdFB1dCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLnNldFVzZXJEZWNpc2lvbnMoKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oc3RhdHVzLCBkYXRhLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xuICAgICAgICBzd2l0Y2ggKHN0YXR1cykge1xuICAgICAgICAgIGNhc2UgJ2RvbmUnOlxuICAgICAgICAgICAgcmV0dXJuIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgICAgICAgIGNhc2UgJ2ZhaWwnOlxuICAgICAgICAgICAgcmV0dXJuIGFyaXN0b3RsZVtcInRocm93XCJdKFwiQVBJIGNhbGwgZmFpbGVkIDogXCIgKyBlcnJvclRocm93biwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9O1xuXG4gIEFQSXByb3h5LnByb3RvdHlwZS50ZXN0R2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0VXNlckRlY2lzaW9ucygoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihzdGF0dXMsIGRhdGEsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XG4gICAgICAgIHN3aXRjaCAoc3RhdHVzKSB7XG4gICAgICAgICAgY2FzZSAnZG9uZSc6XG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgY2FzZSAnZmFpbCc6XG4gICAgICAgICAgICByZXR1cm4gYXJpc3RvdGxlW1widGhyb3dcIl0oXCJBUEkgY2FsbCBmYWlsZWQgOiBcIiArIGVycm9yVGhyb3duLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH07XG5cbiAgQVBJcHJveHkucHJvdG90eXBlLmNyZWF0ZVVzZXIgPSBmdW5jdGlvbihjYikge1xuICAgIHJldHVybiB0aGlzLmFqYXgoXCIvY29tcGFuaWVzL1wiICsgdGhpcy5jb21wYW55QXBpVG9rZW4gKyBcIi91c2Vycy9jcmVhdGVcIiwgY2IsICdQT1NUJyk7XG4gIH07XG5cbiAgQVBJcHJveHkucHJvdG90eXBlLnNldFVzZXJEZWNpc2lvbnMgPSBmdW5jdGlvbihjYikge1xuICAgIHJldHVybiB0aGlzLmFqYXgoXCIvY29tcGFuaWVzL1wiICsgdGhpcy5jb21wYW55QXBpVG9rZW4gKyBcIi91c2Vycy9cIiArIHRoaXMudXNlckFwaVRva2VuICsgXCIvZGF0YVwiLCBjYiwgJ1BVVCcpO1xuICB9O1xuXG4gIEFQSXByb3h5LnByb3RvdHlwZS5nZXRVc2VyRGVjaXNpb25zID0gZnVuY3Rpb24oY2IpIHtcbiAgICByZXR1cm4gdGhpcy5hamF4KFwiL2NvbXBhbmllcy9cIiArIHRoaXMuY29tcGFueUFwaVRva2VuICsgXCIvdXNlcnMvXCIgKyB0aGlzLnVzZXJBcGlUb2tlbiArIFwiL2RhdGFcIiwgY2IsICdHRVQnKTtcbiAgfTtcblxuICBBUElwcm94eS5wcm90b3R5cGUuYWpheCA9IGZ1bmN0aW9uKHVybCwgY2IsIHJlcXVlc3RUeXBlLCBkYXRhKSB7XG4gICAgaWYgKHJlcXVlc3RUeXBlID09IG51bGwpIHtcbiAgICAgIHJlcXVlc3RUeXBlID0gXCJHRVRcIjtcbiAgICB9XG4gICAgY29uc29sZS5sb2cocmVxdWVzdFR5cGUpO1xuICAgIHJldHVybiAkLmFqYXgoe1xuICAgICAgdHlwZTogcmVxdWVzdFR5cGUsXG4gICAgICB1cmw6IHRoaXMuYmFzZVVybCArIHVybCxcbiAgICAgIGRhdGE6IGRhdGFcbiAgICB9KS5kb25lKChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYignZG9uZScsIGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSkuZmFpbCgoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihkYXRhLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xuICAgICAgICB2YXIgZSwgZXJyb3I7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UoZGF0YS5yZXNwb25zZVRleHQpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgIGUgPSBlcnJvcjtcbiAgICAgICAgICBkYXRhID0ge307XG4gICAgICAgICAgY29uc29sZS5sb2coJ2ZhaWxlZCB0byBwYXJzZSBqc29uJywgZGF0YS5yZXNwb25zZVRleHQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYignZmFpbCcsIGRhdGEsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9O1xuXG4gIHJldHVybiBBUElwcm94eTtcblxufSkoKTtcbiIsInZhciBBc3NldFByZXBsb2FkZXI7XG5cbm1vZHVsZS5leHBvcnRzID0gQXNzZXRQcmVwbG9hZGVyID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBBc3NldFByZXBsb2FkZXIoZGF0YSwgY2FsbGJhY2ssIHByb2dyZXNzQ2FsbGJhY2spIHtcbiAgICB0aGlzLmNhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgdGhpcy5wcm9ncmVzc0NhbGxiYWNrID0gcHJvZ3Jlc3NDYWxsYmFjaztcbiAgICB0aGlzLnByZWxvYWRBc3NldHMoZGF0YSk7XG4gIH1cblxuICBBc3NldFByZXBsb2FkZXIucHJvdG90eXBlLnByZWxvYWRBc3NldHMgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyIGFzc2V0cywgcHJlbG9hZFF1ZXVlLCByZWdleDtcbiAgICBhc3NldHMgPSBbXTtcbiAgICByZWdleCA9IC8uK1xcLihzdmcpLztcbiAgICB0aGlzLmxvb2tGb3JGaWxlcyhkYXRhLCBhc3NldHMsIHJlZ2V4KTtcbiAgICBpZiAoYXNzZXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5jYWxsYmFjaygpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjcmVhdGVqcy5Tb3VuZC5hbHRlcm5hdGVFeHRlbnNpb25zID0gW1wibXAzXCIsIFwibTRhXCJdO1xuICAgIHByZWxvYWRRdWV1ZSA9IG5ldyBjcmVhdGVqcy5Mb2FkUXVldWUoKTtcbiAgICBwcmVsb2FkUXVldWUuaW5zdGFsbFBsdWdpbihjcmVhdGVqcy5Tb3VuZCk7XG4gICAgcHJlbG9hZFF1ZXVlLm9uKFwicHJvZ3Jlc3NcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAoZS5sb2FkZWQgPiAxKSB7XG4gICAgICAgICAgZS5sb2FkZWQgPSAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfdGhpcy5wcm9ncmVzc0NhbGxiYWNrKGUubG9hZGVkKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHByZWxvYWRRdWV1ZS5vbihcImNvbXBsZXRlXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMuY2FsbGJhY2soZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICByZXR1cm4gcHJlbG9hZFF1ZXVlLmxvYWRNYW5pZmVzdChhc3NldHMpO1xuICB9O1xuXG4gIEFzc2V0UHJlcGxvYWRlci5wcm90b3R5cGUubG9va0ZvckZpbGVzID0gZnVuY3Rpb24oaXRlbSwgc3RvcmFnZSwgcmVnZXgpIHtcbiAgICB2YXIgY2hpbGQsIGksIGtleSwgbGVuLCByZXN1bHRzLCByZXN1bHRzMSwgdHlwZTtcbiAgICB0eXBlID0gdHlwZW9mIGl0ZW07XG4gICAgaWYgKHR5cGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIGlmICgvLm1wM3wubTRhfC5qc29ufC5zdmd8LmpwZ3wuanBlZ3wucG5nLy50ZXN0KGl0ZW0pKSB7XG4gICAgICAgIHJldHVybiBzdG9yYWdlLnB1c2goe1xuICAgICAgICAgIHNyYzogXCJcIiArIChhcmlzdG90bGUuZ2V0QXNzZXRQYXRoKGl0ZW0pKSxcbiAgICAgICAgICBpZDogaXRlbVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGl0ZW0pKSB7XG4gICAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yIChpID0gMCwgbGVuID0gaXRlbS5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgIGNoaWxkID0gaXRlbVtpXTtcbiAgICAgICAgICByZXN1bHRzLnB1c2godGhpcy5sb29rRm9yRmlsZXMoY2hpbGQsIHN0b3JhZ2UsIHJlZ2V4KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRzMSA9IFtdO1xuICAgICAgICBmb3IgKGtleSBpbiBpdGVtKSB7XG4gICAgICAgICAgY2hpbGQgPSBpdGVtW2tleV07XG4gICAgICAgICAgcmVzdWx0czEucHVzaCh0aGlzLmxvb2tGb3JGaWxlcyhjaGlsZCwgc3RvcmFnZSwgcmVnZXgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0czE7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBBc3NldFByZXBsb2FkZXI7XG5cbn0pKCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgZWRnZSwgbXNpZSwgcnYsIHRyaWRlbnQsIHVhLCB2O1xuICB1YSA9IHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50O1xuICBtc2llID0gdWEuaW5kZXhPZignTVNJRSAnKTtcbiAgaWYgKG1zaWUgPiAwKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gICAgdiA9IHBhcnNlSW50KHVhLnN1YnN0cmluZyhtc2llICsgNSwgdWEuaW5kZXhPZignLicsIG1zaWUpKSwgMTApO1xuICB9XG4gIHRyaWRlbnQgPSB1YS5pbmRleE9mKCdUcmlkZW50LycpO1xuICBpZiAodHJpZGVudCA+IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgICBydiA9IHVhLmluZGV4T2YoJ3J2OicpO1xuICAgIHYgPSBwYXJzZUludCh1YS5zdWJzdHJpbmcocnYgKyAzLCB1YS5pbmRleE9mKCcuJywgcnYpKSwgMTApO1xuICB9XG4gIGVkZ2UgPSB1YS5pbmRleE9mKCdFZGdlLycpO1xuICBpZiAoZWRnZSA+IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgICB2ID0gcGFyc2VJbnQodWEuc3Vic3RyaW5nKGVkZ2UgKyA1LCB1YS5pbmRleE9mKCcuJywgZWRnZSkpLCAxMCk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcbiIsInZhciBDb21tYW5kZXI7XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tbWFuZGVyID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBDb21tYW5kZXIoKSB7XG4gICAgd2luZG93LmFyaXN0b3RsZS5jb21tYW5kZXIgPSB0aGlzO1xuICB9XG5cbiAgQ29tbWFuZGVyLnByb3RvdHlwZVtcImRvXCJdID0gZnVuY3Rpb24oYWN0aW9uKSB7XG4gICAgdmFyIGksIGl0ZW0sIGxlbiwgcmVzdWx0cztcbiAgICBpZiAoQXJyYXkuaXNBcnJheShhY3Rpb24pKSB7XG4gICAgICByZXN1bHRzID0gW107XG4gICAgICBmb3IgKGkgPSAwLCBsZW4gPSBhY3Rpb24ubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaXRlbSA9IGFjdGlvbltpXTtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMucHVibGlzaChpdGVtKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMucHVibGlzaChhY3Rpb24pO1xuICAgIH1cbiAgfTtcblxuICBDb21tYW5kZXIucHJvdG90eXBlLnB1Ymxpc2ggPSBmdW5jdGlvbihhY3Rpb24pIHtcbiAgICB2YXIgZ2xvYmFsVmFyTmFtZSwgaSwga2V5LCBrZXlWYWxQYWlyLCBsZW4sIHJlZjtcbiAgICBpZiAoYWN0aW9uLklOSkVDVF9HTE9CQUxfVkFSUyAhPSBudWxsKSB7XG4gICAgICByZWYgPSBhY3Rpb24uSU5KRUNUX0dMT0JBTF9WQVJTO1xuICAgICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGtleVZhbFBhaXIgPSByZWZbaV07XG4gICAgICAgIGZvciAoa2V5IGluIGtleVZhbFBhaXIpIHtcbiAgICAgICAgICBnbG9iYWxWYXJOYW1lID0ga2V5VmFsUGFpcltrZXldO1xuICAgICAgICAgIGlmIChhcmlzdG90bGUuZ2xvYmFsc1tnbG9iYWxWYXJOYW1lXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBhY3Rpb24uZGF0YVtrZXldID0gYXJpc3RvdGxlLmdsb2JhbHNbZ2xvYmFsVmFyTmFtZV07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFyaXN0b3RsZVtcInRocm93XCJdKFwiVHJpZWQgdG8gYWNjZXNzIHRoZSBnbG9iYWwgdmFyIGBcIiArIGdsb2JhbFZhck5hbWUgKyBcImAgYnV0IGl0IGRvZXNuJ3QgZXhpc3RcIiwgdHJ1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBQdWJTdWIucHVibGlzaChhY3Rpb24uY21kLCBhY3Rpb24uZGF0YSk7XG4gIH07XG5cbiAgcmV0dXJuIENvbW1hbmRlcjtcblxufSkoKTtcbiIsInZhciBBdWRpb1RyYWNrLCBEZXZUb29scyxcbiAgYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH07XG5cbkF1ZGlvVHJhY2sgPSByZXF1aXJlKCdlcGlzb2RlL2F1ZGlvLXRyYWNrJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGV2VG9vbHMgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIERldlRvb2xzKGlzRGV2TW9kZSkge1xuICAgIHRoaXMuaXNEZXZNb2RlID0gaXNEZXZNb2RlO1xuICAgIHRoaXMudXBkYXRlID0gYmluZCh0aGlzLnVwZGF0ZSwgdGhpcyk7XG4gICAgaWYgKCF0aGlzLmlzRGV2TW9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmluaXRQZXJmb3JtYW5jZVN0YXRzKCk7XG4gIH1cblxuICBEZXZUb29scy5wcm90b3R5cGUuZ28gPSBmdW5jdGlvbihkZXZDb25maWcsIGl0ZW1zKSB7XG4gICAgaWYgKCF0aGlzLmlzRGV2TW9kZSB8fCAoZGV2Q29uZmlnID09IG51bGwpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2tpcChkZXZDb25maWcsIGl0ZW1zKTtcbiAgICB0aGlzLnByZXZlbnRBbmltYXRpb25Bc05lZWRlZChkZXZDb25maWcsIGl0ZW1zKTtcbiAgICB0aGlzLmFkZEluZGV4ZXNUb0l0ZW1zKGRldkNvbmZpZywgaXRlbXMpO1xuICAgIGlmIChkZXZDb25maWcudm9sdW1lICE9IG51bGwpIHtcbiAgICAgIHJldHVybiBBdWRpb1RyYWNrLmluaXRTb3VuZFNldHRpbmdzKGRldkNvbmZpZy52b2x1bWUpO1xuICAgIH1cbiAgfTtcblxuICBEZXZUb29scy5wcm90b3R5cGUuc2tpcCA9IGZ1bmN0aW9uKGRldkNvbmZpZywgaXRlbXMpIHtcbiAgICB2YXIgaiwgbGVuLCByZWYsIHJlc3VsdHMsIHNsaWRlSW5kZXgsIHN0YXJ0SW5kZXg7XG4gICAgaWYgKCF0aGlzLmlzRGV2TW9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZGV2Q29uZmlnLnN0YXJ0SW5kZXggIT0gbnVsbCkge1xuICAgICAgaWYgKGRldkNvbmZpZy5zdGFydEluZGV4IDwgMCkge1xuICAgICAgICBkZXZDb25maWcuc3RhcnRJbmRleCA9IGl0ZW1zLmxlbmd0aCArIGRldkNvbmZpZy5zdGFydEluZGV4O1xuICAgICAgfVxuICAgICAgc3RhcnRJbmRleCA9IGRldkNvbmZpZy5zdGFydEluZGV4O1xuICAgICAgaXRlbXMuc3BsaWNlKDAsIGRldkNvbmZpZy5zdGFydEluZGV4KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhcnRJbmRleCA9IDA7XG4gICAgfVxuICAgIGlmIChkZXZDb25maWcuc2tpcCAhPSBudWxsKSB7XG4gICAgICByZWYgPSBkZXZDb25maWcuc2tpcC5zb3J0KCkucmV2ZXJzZSgpO1xuICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgZm9yIChqID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgIHNsaWRlSW5kZXggPSByZWZbal07XG4gICAgICAgIGlmIChzbGlkZUluZGV4ID4gc3RhcnRJbmRleCkge1xuICAgICAgICAgIHJlc3VsdHMucHVzaChpdGVtcy5zcGxpY2Uoc2xpZGVJbmRleCAtIHN0YXJ0SW5kZXgsIDEpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2godm9pZCAwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxuICB9O1xuXG4gIERldlRvb2xzLnByb3RvdHlwZS5wcmV2ZW50QW5pbWF0aW9uQXNOZWVkZWQgPSBmdW5jdGlvbihkZXZDb25maWcsIGl0ZW1zKSB7XG4gICAgdmFyIGksIGosIGxlbiwgcmVmLCByZXN1bHRzLCBzbGlkZTtcbiAgICBpZiAoZGV2Q29uZmlnLmRvbnRBbmltYXRlID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmVmID0gZGV2Q29uZmlnLmRvbnRBbmltYXRlO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGkgPSBqID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaiA8IGxlbjsgaSA9ICsraikge1xuICAgICAgc2xpZGUgPSByZWZbaV07XG4gICAgICByZXN1bHRzLnB1c2godGhpcy5hZGRTa2lwVG9FbmRzKGl0ZW1zW2ldKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIERldlRvb2xzLnByb3RvdHlwZS5hZGRTa2lwVG9FbmRzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIGl0ZW0sIGtleSwgcmVzdWx0cztcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChrZXkgaW4gb2JqKSB7XG4gICAgICBpdGVtID0gb2JqW2tleV07XG4gICAgICBpZiAodHlwZW9mIGl0ZW0gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgdGhpcy5hZGRTa2lwVG9FbmRzKGl0ZW0sIG9iaik7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGl0ZW0gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgaWYgKGl0ZW0ubWF0Y2goLy5qc29uL2cpKSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKG9iai5qdW1wVG9FbmQgPSB0cnVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2godm9pZCAwKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHZvaWQgMCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIERldlRvb2xzLnByb3RvdHlwZS5hZGRJbmRleGVzVG9JdGVtcyA9IGZ1bmN0aW9uKGRldkNvbmZpZywgaXRlbXMpIHtcbiAgICB2YXIgY291bnQsIGl0ZW0sIGosIGxlbiwgbnVtU2xpZGVzUmVtb3ZlZCwgcmVzdWx0cztcbiAgICBudW1TbGlkZXNSZW1vdmVkID0gZGV2Q29uZmlnLnN0YXJ0SW5kZXggIT0gbnVsbCA/IGRldkNvbmZpZy5zdGFydEluZGV4IDogMDtcbiAgICBjb3VudCA9IDA7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoaiA9IDAsIGxlbiA9IGl0ZW1zLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICBpdGVtID0gaXRlbXNbal07XG4gICAgICByZXN1bHRzLnB1c2goaXRlbS5pbmRleCA9IG51bVNsaWRlc1JlbW92ZWQgKyBjb3VudCsrKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgRGV2VG9vbHMucHJvdG90eXBlLmluaXRQZXJmb3JtYW5jZVN0YXRzID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zdGF0cyA9IG5ldyBTdGF0cygpO1xuICAgIHRoaXMuc3RhdHMuc2V0TW9kZSgwKTtcbiAgICB0aGlzLnN0YXRzLmRvbUVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgIHRoaXMuc3RhdHMuZG9tRWxlbWVudC5zdHlsZS5sZWZ0ID0gJzBweCc7XG4gICAgdGhpcy5zdGF0cy5kb21FbGVtZW50LnN0eWxlLnRvcCA9ICcwcHgnO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5zdGF0cy5kb21FbGVtZW50KTtcbiAgICByZXR1cm4gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlKTtcbiAgfTtcblxuICBEZXZUb29scy5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zdGF0cy5lbmQoKTtcbiAgICB0aGlzLnN0YXRzLmJlZ2luKCk7XG4gICAgcmV0dXJuIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZSk7XG4gIH07XG5cbiAgcmV0dXJuIERldlRvb2xzO1xuXG59KSgpO1xuIiwidmFyIERpY3Rpb25hcnk7XG5cbm1vZHVsZS5leHBvcnRzID0gRGljdGlvbmFyeSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gRGljdGlvbmFyeSgpIHtcbiAgICBhcmlzdG90bGUuZGljdGlvbmFyeSA9IHRoaXM7XG4gICAgdGhpcy50ZXJtcyA9IHtcbiAgICAgIFwiY2FkZXRcIjogJ0NhZGV0JyxcbiAgICAgIFwiY2FkZXQtZmlyc3QtY2xhc3NcIjogJ0NhZGV0IEZpcnN0IENsYXNzJyxcbiAgICAgIFwidGVjaG5pY2FsLWNhZGV0XCI6IFwiVGVjaG5pY2FsIENhZGV0XCIsXG4gICAgICBcImN5YmVyLWNhZGV0XCI6IFwiQ3liZXIgQ2FkZXRcIlxuICAgIH07XG4gIH1cblxuICBEaWN0aW9uYXJ5LnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbih0ZXJtKSB7XG4gICAgaWYgKHRoaXMudGVybXNbdGVybV0gIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRoaXMudGVybXNbdGVybV07XG4gICAgfVxuICAgIHJldHVybiBhcmlzdG90bGVbXCJ0aHJvd1wiXShcIlRyaWVkIHRvIHVzZSBhbiB1bmtub3duIHRlcm06IGBcIiArIHRlcm0gKyBcImBcIik7XG4gIH07XG5cbiAgcmV0dXJuIERpY3Rpb25hcnk7XG5cbn0pKCk7XG4iLCJ2YXIgRXBpc29kZUxvYWRlcjtcblxubW9kdWxlLmV4cG9ydHMgPSBFcGlzb2RlTG9hZGVyID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBFcGlzb2RlTG9hZGVyKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5jYWxsYmFjayA9IGNhbGxiYWNrO1xuICAgIHRoaXMubG9hZEVwaXNvZGUoKTtcbiAgfVxuXG4gIEVwaXNvZGVMb2FkZXIucHJvdG90eXBlLmxvYWRFcGlzb2RlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubG9hZEpzb24oYXJpc3RvdGxlLmdldEFzc2V0UGF0aChcIm1hcC5qc29uXCIpLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihqc29uKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5jYWxsYmFjayhKU09OLnBhcnNlKGpzb24pKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9O1xuXG4gIEVwaXNvZGVMb2FkZXIucHJvdG90eXBlLmxvYWRKc29uID0gZnVuY3Rpb24ocGF0aCwgb25Db21wbGV0ZSkge1xuICAgIHZhciB4b2JqO1xuICAgIHhvYmogPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB4b2JqLm92ZXJyaWRlTWltZVR5cGUoJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICB4b2JqLm9wZW4oJ0dFVCcsIHBhdGgsIHRydWUpO1xuICAgIHhvYmoub25yZWFkeXN0YXRlY2hhbmdlID0gKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh4b2JqLnJlYWR5U3RhdGUgPT09IDQgJiYgeG9iai5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIHJldHVybiBvbkNvbXBsZXRlKHhvYmoucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSh0aGlzKTtcbiAgICByZXR1cm4geG9iai5zZW5kKG51bGwpO1xuICB9O1xuXG4gIHJldHVybiBFcGlzb2RlTG9hZGVyO1xuXG59KSgpO1xuIiwidmFyIEdsb2JhbFZhcnM7XG5cbm1vZHVsZS5leHBvcnRzID0gR2xvYmFsVmFycyA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gR2xvYmFsVmFycygpIHtcbiAgICBhcmlzdG90bGUuZ2xvYmFscyA9IHRoaXM7XG4gICAgUHViU3ViLnN1YnNjcmliZSgnc2V0dmFycycsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGEsIGRhdGEpIHtcbiAgICAgICAgdmFyIGtleSwgcmVzdWx0cywgdmFsO1xuICAgICAgICByZXN1bHRzID0gW107XG4gICAgICAgIGZvciAoa2V5IGluIGRhdGEpIHtcbiAgICAgICAgICB2YWwgPSBkYXRhW2tleV07XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKF90aGlzW2tleV0gPSB2YWwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH1cblxuICBHbG9iYWxWYXJzLnByb3RvdHlwZS5nZXQgPSBmdW5jdGlvbihzdHIpIHtcbiAgICBpZiAoYXJpc3RvdGxlLmdsb2JhbHNbc3RyXSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gYXJpc3RvdGxlLmdsb2JhbHNbc3RyXTtcbiAgICB9XG4gICAgYXJpc3RvdGxlW1widGhyb3dcIl0oXCJUcmllZCB0byBhY2Nlc3MgZ2xvYmFsIHZhcmlhYmxlIGBcIiArIHN0ciArIFwiYCwgYnV0IGl0IGRvZXNuJ3QgZXhpc3RzXCIsIHRydWUpO1xuICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIHJldHVybiBHbG9iYWxWYXJzO1xuXG59KSgpO1xuIiwidmFyIExvZ2dlcixcbiAgYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH07XG5cbm1vZHVsZS5leHBvcnRzID0gTG9nZ2VyID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBMb2dnZXIoJGVsLCBpc0Rldk1vZGUpIHtcbiAgICB0aGlzW1widGhyb3dcIl0gPSBiaW5kKHRoaXNbXCJ0aHJvd1wiXSwgdGhpcyk7XG4gICAgdGhpcy5sb2cgPSBiaW5kKHRoaXMubG9nLCB0aGlzKTtcbiAgICB2YXIgJG5vZGU7XG4gICAgJG5vZGUgPSAkKGphZGVUZW1wbGF0ZVsnbWlzYy9sb2dnZXInXSh7fSkpO1xuICAgICRlbC5hcHBlbmQoJG5vZGUpO1xuICAgIHRoaXMuJGxvZ05vdGlmeWVyID0gJCgnLm1lc3NhZ2UnLCAkbm9kZSk7XG4gICAgdGhpcy4kZXJyb3JOb3RpZnllciA9ICQoJy5lcnJvcicsICRub2RlKTtcbiAgICB0aGlzLiRsb2dOb3RpZnllci5vbignY2xpY2snLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmhpZGVMb2dOb3RpZmllcigpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgdGhpcy4kZXJyb3JOb3RpZnllci5vbignY2xpY2snLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmhpZGVFcnJvck5vdGlmaWVyKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBhcmlzdG90bGUubG9nID0gdGhpcy5sb2c7XG4gICAgYXJpc3RvdGxlW1widGhyb3dcIl0gPSB0aGlzW1widGhyb3dcIl07XG4gICAgdGhpcy5oaWRlTG9nTm90aWZpZXIoKTtcbiAgICB0aGlzLmhpZGVFcnJvck5vdGlmaWVyKCk7XG4gICAgaWYgKCFpc0Rldk1vZGUpIHtcbiAgICAgICRub2RlLmNzcyh7XG4gICAgICAgIGRpc3BsYXk6IFwibm9uZVwiXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBMb2dnZXIucHJvdG90eXBlLmxvZyA9IGZ1bmN0aW9uKG1zZykge1xuICAgIHRoaXMuc2hvd0xvZ05vdGlmaWVyKCk7XG4gICAgcmV0dXJuIGNvbnNvbGUubG9nKFwiJWNcIiArIG1zZywgXCJjb2xvcjojMGIxNTI0OyBiYWNrZ3JvdW5kOiNiMGQ5ZTZcIik7XG4gIH07XG5cbiAgTG9nZ2VyLnByb3RvdHlwZVtcInRocm93XCJdID0gZnVuY3Rpb24obXNnLCBzaG93VHJhY2UpIHtcbiAgICBpZiAoc2hvd1RyYWNlID09IG51bGwpIHtcbiAgICAgIHNob3dUcmFjZSA9IGZhbHNlO1xuICAgIH1cbiAgICB0aGlzLnNob3dFcnJvck5vdGlmaWVyKCk7XG4gICAgaWYgKHNob3dUcmFjZSkge1xuICAgICAgcmV0dXJuIGNvbnNvbGUuZXJyb3IoXCJcIiArIG1zZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjb25zb2xlLmxvZyhcIiVjXCIgKyBtc2csIFwiY29sb3I6IzNkMDAwMDsgYmFja2dyb3VuZDojZTZiMGMwXCIpO1xuICAgIH1cbiAgfTtcblxuICBMb2dnZXIucHJvdG90eXBlLmhpZGVMb2dOb3RpZmllciA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRsb2dOb3RpZnllci5jc3Moe1xuICAgICAgZGlzcGxheTogXCJub25lXCJcbiAgICB9KTtcbiAgfTtcblxuICBMb2dnZXIucHJvdG90eXBlLmhpZGVFcnJvck5vdGlmaWVyID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJGVycm9yTm90aWZ5ZXIuY3NzKHtcbiAgICAgIGRpc3BsYXk6IFwibm9uZVwiXG4gICAgfSk7XG4gIH07XG5cbiAgTG9nZ2VyLnByb3RvdHlwZS5zaG93TG9nTm90aWZpZXIgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kbG9nTm90aWZ5ZXIuY3NzKHtcbiAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIlxuICAgIH0pO1xuICB9O1xuXG4gIExvZ2dlci5wcm90b3R5cGUuc2hvd0Vycm9yTm90aWZpZXIgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kZXJyb3JOb3RpZnllci5jc3Moe1xuICAgICAgZGlzcGxheTogXCJibG9ja1wiXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIExvZ2dlcjtcblxufSkoKTtcbiIsInZhciBQYXJzZXIsXG4gIGJpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBhcnNlciA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gUGFyc2VyKCkge1xuICAgIHRoaXMuZ2V0QXNzZXRQYXRoID0gYmluZCh0aGlzLmdldEFzc2V0UGF0aCwgdGhpcyk7XG4gICAgdGhpcy5wYXJzZU9iamVjdCA9IGJpbmQodGhpcy5wYXJzZU9iamVjdCwgdGhpcyk7XG4gICAgdGhpcy5pc1ZhcmlhYmxlID0gYmluZCh0aGlzLmlzVmFyaWFibGUsIHRoaXMpO1xuICAgIHRoaXMucGFyc2VTdHJpbmcgPSBiaW5kKHRoaXMucGFyc2VTdHJpbmcsIHRoaXMpO1xuICAgIHRoaXMucGFyc2VBbnkgPSBiaW5kKHRoaXMucGFyc2VBbnksIHRoaXMpO1xuICAgIHdpbmRvdy5wYXJzZSA9IHRoaXMucGFyc2VBbnk7XG4gICAgd2luZG93LnBPYmogPSB0aGlzLnBhcnNlT2JqZWN0O1xuICAgIGFyaXN0b3RsZS5nZXRBc3NldFBhdGggPSB0aGlzLmdldEFzc2V0UGF0aDtcbiAgfVxuXG4gIFBhcnNlci5wcm90b3R5cGUucGFyc2VBbnkgPSBmdW5jdGlvbihpdGVtKSB7XG4gICAgaWYgKHR5cGVvZiBpdGVtID09PSBcInN0cmluZ1wiKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYXJzZVN0cmluZyhpdGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMucGFyc2VPYmplY3QoaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIFBhcnNlci5wcm90b3R5cGUucGFyc2VTdHJpbmcgPSBmdW5jdGlvbihzdHIpIHtcbiAgICBpZiAodGhpcy5pc1ZhcmlhYmxlKHN0cikpIHtcbiAgICAgIHJldHVybiBhcmlzdG90bGUuZ2xvYmFscy5nZXQoc3RyLnN1YnN0cigxKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICB9O1xuXG4gIFBhcnNlci5wcm90b3R5cGUuaXNWYXJpYWJsZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBzdHIuY2hhckF0KDApID09PSBcIiRcIjtcbiAgfTtcblxuICBQYXJzZXIucHJvdG90eXBlLnBhcnNlT2JqZWN0ID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgdmFyIGl0ZW0sIGtleSwgcmVzdWx0cztcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChrZXkgaW4gb2JqKSB7XG4gICAgICBpdGVtID0gb2JqW2tleV07XG4gICAgICBpZiAodHlwZW9mIGl0ZW0gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgb2JqW2tleV0gPSB0aGlzLnBhcnNlU3RyaW5nKGl0ZW0pO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBpdGVtID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLnBhcnNlT2JqZWN0KGl0ZW0pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdHMucHVzaCh2b2lkIDApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBQYXJzZXIucHJvdG90eXBlLmdldEFzc2V0UGF0aCA9IGZ1bmN0aW9uKGFzc2V0KSB7XG4gICAgdmFyIGNvbnRlbnREaXIsIHBhdGhJZDtcbiAgICBpZiAoYXNzZXQgPT09IFwibWFwLmpzb25cIikge1xuICAgICAgY29udGVudERpciA9IFwiXCI7XG4gICAgfSBlbHNlIGlmICgvLm1wM3wubTRhLy50ZXN0KGFzc2V0KSkge1xuICAgICAgY29udGVudERpciA9IFwic291bmRzL1wiO1xuICAgIH0gZWxzZSBpZiAoLy5qc29uLy50ZXN0KGFzc2V0KSkge1xuICAgICAgY29udGVudERpciA9IFwiYW5pbWF0aW9ucy9cIjtcbiAgICB9IGVsc2UgaWYgKC8uc3ZnfC5qcGd8LmpwZWd8LnBuZy8udGVzdChhc3NldCkpIHtcbiAgICAgIGNvbnRlbnREaXIgPSBcImFzc2V0cy9cIjtcbiAgICB9XG4gICAgaWYgKGFzc2V0LmNoYXJBdCgwKSA9PT0gXCJ+XCIpIHtcbiAgICAgIHBhdGhJZCA9IGFzc2V0LnN1YnN0cigxLCAxKTtcbiAgICAgIGFzc2V0ID0gYXNzZXQuc3Vic3RyKDMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXRoSWQgPSBhcmlzdG90bGUuZXBpc29kZU51bTtcbiAgICB9XG4gICAgaWYgKHBhdGhJZCA9PT0gXCJnXCIpIHtcbiAgICAgIHJldHVybiBhcmlzdG90bGUuZXBpc29kZXNEaXIgKyBcIi9nbG9iYWwvXCIgKyBjb250ZW50RGlyICsgYXNzZXQ7XG4gICAgfSBlbHNlIGlmIChwYXRoSWQgPT09IFwibFwiKSB7XG4gICAgICByZXR1cm4gYXJpc3RvdGxlLmxvY2FsRGlyICsgXCIvXCIgKyBhc3NldDtcbiAgICB9IGVsc2UgaWYgKE51bWJlcihwYXRoSWQpICE9PSBOYU4pIHtcbiAgICAgIHJldHVybiBhcmlzdG90bGUuZXBpc29kZXNEaXIgKyBcIi9lcGlzb2RlXCIgKyBwYXRoSWQgKyBcIi9cIiArIGNvbnRlbnREaXIgKyBhc3NldDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGFyaXN0b3RsZVtcInRocm93XCJdKFwiY291bGRuJ3QgdW5kZXJzdGFuZCB0aGUgcGF0aDogXCIgKyBhc3NldCwgdHJ1ZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBQYXJzZXI7XG5cbn0pKCk7XG4iLCJ2YXIgU3RhdGU7XG5cbm1vZHVsZS5leHBvcnRzID0gU3RhdGUgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIFN0YXRlKG1vdmllLCB1eCkge1xuICAgIHRoaXMubW92aWUgPSBtb3ZpZTtcbiAgICB0aGlzLnV4ID0gdXg7XG4gICAgdGhpcy5zdGF0ZSA9IHt9O1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ3N0YXRlLnNhdmUnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5zYXZlU3RhdGUoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ3N0YXRlLmxvYWQnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5sb2FkU3RhdGUoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ3N0YXRlLnBlcnNpc3QnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5wZXJzaXN0U3RhdGUoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9XG5cbiAgU3RhdGUucHJvdG90eXBlLnNhdmVTdGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaGFzU2F2ZWRTdGF0ZSA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGUubGF5ZXJzID0gdGhpcy5tb3ZpZS5kZWh5ZHJhdGVMYXllclN0YXRlKCk7XG4gIH07XG5cbiAgU3RhdGUucHJvdG90eXBlLmxvYWRTdGF0ZSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5oYXNTYXZlZFN0YXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiB0aGlzLm1vdmllLnJlaHlkcmF0ZUxheWVyU3RhdGUodGhpcy5zdGF0ZS5sYXllcnMpO1xuICB9O1xuXG4gIFN0YXRlLnByb3RvdHlwZS5wZXJzaXN0ZVN0YXRlID0gZnVuY3Rpb24oKSB7fTtcblxuICByZXR1cm4gU3RhdGU7XG5cbn0pKCk7XG4iLCJ2YXIgRHluYW1pY0Fzc2V0cztcblxubW9kdWxlLmV4cG9ydHMgPSBEeW5hbWljQXNzZXRzID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBEeW5hbWljQXNzZXRzKCRlbCkge1xuICAgIHRoaXMuJGVsID0gJGVsO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoXCJnaG9zdHV4LmFkZFwiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5jcmVhdGVHaG9zdChkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoXCJnaG9zdHV4LnJlbW92ZVwiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5kZXN0cm95R2hvc3QoZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCdsYWJlbC5hZGQnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5hZGRMYWJlbChkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ2xhYmVsLnJlbW92ZScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnJlbW92ZUxhYmVsKGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgUHViU3ViLnN1YnNjcmliZSgnbGFiZWwuY2xlYXInLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5yZW1vdmVMYWJlbChkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ2xhYmVsLmhpZGUnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5oaWRlTGFiZWwoZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCdsYWJlbC5zaG93JywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuc2hvd0xhYmVsKGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH1cblxuICBEeW5hbWljQXNzZXRzLnByb3RvdHlwZS5jcmVhdGVHaG9zdCA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2YXIgJGdob3N0SXRlbSwgJHRhcmdldCwgYWN0aW9uLCBldmVudCwgcG9zLCByZWYsIHJlc3VsdHMsIHRhbCwgd2lkO1xuICAgICR0YXJnZXQgPSAkKFwiI1wiICsgZGF0YS5pZCk7XG4gICAgcG9zID0gJHRhcmdldC5wb3NpdGlvbigpO1xuICAgIHdpZCA9ICR0YXJnZXRbMF0uZ2V0QkJveCgpLndpZHRoO1xuICAgIHRhbCA9ICR0YXJnZXRbMF0uZ2V0QkJveCgpLmhlaWdodDtcbiAgICBpZiAod2lkID4gNTAwIHx8IHRhbCA+IDQwMCkge1xuICAgICAgYXJpc3RvdGxlLmxvZyhcIldlJ3ZlIGNyZWF0ZWQgYSBoaXQgYXJlYSBmb3IgYFwiICsgZGF0YS5pZCArIFwiYCB0aGF0IGlzIFwiICsgd2lkICsgXCJweCBieSBcIiArIHRhbCArIFwicHgsIEknbSBndWVzc2luZyB0aGF0J3Mgbm90IHJpZ2h0Li5cIik7XG4gICAgfVxuICAgICRnaG9zdEl0ZW0gPSAkKGphZGVUZW1wbGF0ZVsnc2xpZGUtdXgvY29tcG9uZW50cy9naG9zdC1pdGVtJ10oe1xuICAgICAgaWQ6IGRhdGEuaWQgKyBcIi1naG9zdFwiLFxuICAgICAgd2lkdGg6IHdpZCxcbiAgICAgIGhlaWdodDogdGFsLFxuICAgICAgbGVmdDogcG9zLmxlZnQsXG4gICAgICB0b3A6IHBvcy50b3BcbiAgICB9KSk7XG4gICAgdGhpcy4kZWwuYXBwZW5kKCRnaG9zdEl0ZW0pO1xuICAgIHJlZiA9IGRhdGEuZXZlbnRzO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGV2ZW50IGluIHJlZikge1xuICAgICAgYWN0aW9uID0gcmVmW2V2ZW50XTtcbiAgICAgIGlmIChhY3Rpb24uY21kICE9IG51bGwpIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKCRnaG9zdEl0ZW0ub24oZXZlbnQsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBhcmlzdG90bGUuY29tbWFuZGVyW1wiZG9cIl0oYWN0aW9uKTtcbiAgICAgICAgfSkpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgYWN0aW9uID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmVzdWx0cy5wdXNoKCRnaG9zdEl0ZW0ub24oZXZlbnQsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBhY3Rpb24oZGF0YS5pZCk7XG4gICAgICAgIH0pKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdHMucHVzaCh2b2lkIDApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBEeW5hbWljQXNzZXRzLnByb3RvdHlwZS5kZXN0cm95R2hvc3QgPSBmdW5jdGlvbihnaG9zdElkKSB7XG4gICAgcmV0dXJuICQoZ2hvc3RJZCArIFwiLWdob3N0XCIpLnJlbW92ZSgpO1xuICB9O1xuXG4gIER5bmFtaWNBc3NldHMucHJvdG90eXBlLmFkZExhYmVsID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciAkbGFiZWwsIHBvcztcbiAgICBwb3MgPSBhcmlzdG90bGUubW92aWUuZ2V0TG9jYWxQb3MoZGF0YS5pZCk7XG4gICAgJGxhYmVsID0gJChqYWRlVGVtcGxhdGVbJ21vdmllL2xhYmVsJ10oe1xuICAgICAgdGV4dDogZGF0YS50ZXh0LFxuICAgICAgaWQ6IGRhdGEuaWQgKyBcIi1sYWJlbFwiXG4gICAgfSkpO1xuICAgIHRoaXMuJGVsLmFwcGVuZCgkbGFiZWwpO1xuICAgIHRoaXMucG9zaXRpb25MYWJlbChkYXRhLCAkbGFiZWwsIHBvcyk7XG4gICAgcmV0dXJuICRsYWJlbC5jc3Moe1xuICAgICAgdG9wOiBwb3MueSxcbiAgICAgIGxlZnQ6IHBvcy54XG4gICAgfSk7XG4gIH07XG5cbiAgRHluYW1pY0Fzc2V0cy5wcm90b3R5cGUucmVtb3ZlTGFiZWwgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyIGksIGxhYmVsSWQsIGxlbiwgcmVmLCByZXN1bHRzO1xuICAgIGlmIChkYXRhLmlkID09PSBcImFsbFwiKSB7XG4gICAgICByZXR1cm4gJChcIi5sYWJlbC13cmFwcGVyXCIsIHRoaXMuJGVsKS5yZW1vdmUoKTtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZGF0YS5pZCkpIHtcbiAgICAgIHJlZiA9IGRhdGEuaWQ7XG4gICAgICByZXN1bHRzID0gW107XG4gICAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgbGFiZWxJZCA9IHJlZltpXTtcbiAgICAgICAgcmVzdWx0cy5wdXNoKCQoXCIjXCIgKyBsYWJlbElkICsgXCItbGFiZWxcIiwgdGhpcy4kZWwpLnJlbW92ZSgpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJChcIiNcIiArIGRhdGEuaWQgKyBcIi1sYWJlbFwiLCB0aGlzLiRlbCkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIER5bmFtaWNBc3NldHMucHJvdG90eXBlLmhpZGVMYWJlbCA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2YXIgaSwgbGFiZWxJZCwgbGVuLCByZWYsIHJlc3VsdHM7XG4gICAgaWYgKGRhdGEuaWQgPT09IFwiYWxsXCIpIHtcbiAgICAgIHJldHVybiAkKFwiLmxhYmVsLXdyYXBwZXJcIiwgdGhpcy4kZWwpLnZlbG9jaXR5KHtcbiAgICAgICAgb3BhY2l0eTogMFxuICAgICAgfSwge1xuICAgICAgICBkdXJhdGlvbjogNDAwXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZGF0YS5pZCkpIHtcbiAgICAgIHJlZiA9IGRhdGEuaWQ7XG4gICAgICByZXN1bHRzID0gW107XG4gICAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgbGFiZWxJZCA9IHJlZltpXTtcbiAgICAgICAgcmVzdWx0cy5wdXNoKCQoXCIjXCIgKyBsYWJlbElkICsgXCItbGFiZWxcIiwgdGhpcy4kZWwpLnZlbG9jaXR5KHtcbiAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBkdXJhdGlvbjogNDAwXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJChcIiNcIiArIGRhdGEuaWQgKyBcIi1sYWJlbFwiLCB0aGlzLiRlbCkudmVsb2NpdHkoe1xuICAgICAgICBvcGFjaXR5OiAwXG4gICAgICB9LCB7XG4gICAgICAgIGR1cmF0aW9uOiA0MDBcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBEeW5hbWljQXNzZXRzLnByb3RvdHlwZS5zaG93TGFiZWwgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyIGksIGxhYmVsSWQsIGxlbiwgcmVmLCByZXN1bHRzO1xuICAgIGlmIChkYXRhLmlkID09PSBcImFsbFwiKSB7XG4gICAgICByZXR1cm4gJChcIi5sYWJlbC13cmFwcGVyXCIsIHRoaXMuJGVsKS52ZWxvY2l0eSh7XG4gICAgICAgIG9wYWNpdHk6IDFcbiAgICAgIH0sIHtcbiAgICAgICAgZHVyYXRpb246IDQwMFxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGRhdGEuaWQpKSB7XG4gICAgICByZWYgPSBkYXRhLmlkO1xuICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGxhYmVsSWQgPSByZWZbaV07XG4gICAgICAgIHJlc3VsdHMucHVzaCgkKFwiI1wiICsgbGFiZWxJZCArIFwiLWxhYmVsXCIsIHRoaXMuJGVsKS52ZWxvY2l0eSh7XG4gICAgICAgICAgb3BhY2l0eTogMVxuICAgICAgICB9LCB7XG4gICAgICAgICAgZHVyYXRpb246IDQwMFxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICQoXCIjXCIgKyBkYXRhLmlkICsgXCItbGFiZWxcIiwgdGhpcy4kZWwpLnZlbG9jaXR5KHtcbiAgICAgICAgb3BhY2l0eTogMVxuICAgICAgfSwge1xuICAgICAgICBkdXJhdGlvbjogNDAwXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgRHluYW1pY0Fzc2V0cy5wcm90b3R5cGUuY2xlYXJMYWJlbCA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2YXIgaSwgbGFiZWxJZCwgbGVuLCByZWYsIHJlc3VsdHM7XG4gICAgaWYgKGRhdGEuaWQgPT09IFwiYWxsXCIpIHtcbiAgICAgIHJldHVybiAkKFwiLmxhYmVsLXdyYXBwZXJcIiwgdGhpcy4kZWwpLnZlbG9jaXR5KHtcbiAgICAgICAgb3BhY2l0eTogMVxuICAgICAgfSwge1xuICAgICAgICBkdXJhdGlvbjogNDAwXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoZGF0YS5pZCkpIHtcbiAgICAgIHJlZiA9IGRhdGEuaWQ7XG4gICAgICByZXN1bHRzID0gW107XG4gICAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgbGFiZWxJZCA9IHJlZltpXTtcbiAgICAgICAgcmVzdWx0cy5wdXNoKCQoXCIjXCIgKyBsYWJlbElkICsgXCItbGFiZWxcIiwgdGhpcy4kZWwpLnZlbG9jaXR5KHtcbiAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBkdXJhdGlvbjogNDAwXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gJChcIiNcIiArIGRhdGEuaWQgKyBcIi1sYWJlbFwiLCB0aGlzLiRlbCkudmVsb2NpdHkoe1xuICAgICAgICBvcGFjaXR5OiAxXG4gICAgICB9LCB7XG4gICAgICAgIGR1cmF0aW9uOiA0MDBcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuICBEeW5hbWljQXNzZXRzLnByb3RvdHlwZS5wb3NpdGlvbkxhYmVsID0gZnVuY3Rpb24oZGF0YSwgJGxhYmVsLCBwb3MpIHtcbiAgICB2YXIgJGlubmVyTGFiZWwsIGFycm93TG9jLCBmYWNlO1xuICAgIGZhY2UgPSBkYXRhLmZhY2UgIT0gbnVsbCA/IGRhdGEuZmFjZSA6IFwidG9wXCI7XG4gICAgYXJyb3dMb2MgPSBkYXRhLmFycm93ICE9IG51bGwgPyBkYXRhLmFycm93IDogXCJsZWZ0XCI7XG4gICAgJGlubmVyTGFiZWwgPSAkKFwiLmxhYmVsXCIsICRsYWJlbCk7XG4gICAgc3dpdGNoIChmYWNlKSB7XG4gICAgICBjYXNlIFwidG9wXCI6XG4gICAgICAgIHBvcy54ICs9IHBvcy53IC8gMjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwibGVmdFwiOlxuICAgICAgICBwb3MueSArPSBwb3MuaCAvIDI7XG4gICAgICAgICRpbm5lckxhYmVsLmFkZENsYXNzKFwiYXJyb3ctcG9pbnQtcmlnaHRcIik7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICAgIHBvcy55ICs9IHBvcy5oIC8gMjtcbiAgICAgICAgcG9zLnggKz0gcG9zLnc7XG4gICAgICAgICRpbm5lckxhYmVsLmFkZENsYXNzKFwiYXJyb3ctcG9pbnQtbGVmdFwiKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiYm90dG9tXCI6XG4gICAgICAgIHBvcy54ICs9IHBvcy53IC8gMjtcbiAgICAgICAgcG9zLnkgKz0gcG9zLmg7XG4gICAgICAgICRpbm5lckxhYmVsLmFkZENsYXNzKFwiYXJyb3ctdG9wXCIpO1xuICAgIH1cbiAgICBzd2l0Y2ggKGFycm93TG9jKSB7XG4gICAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgICAgcmV0dXJuICRpbm5lckxhYmVsLmFkZENsYXNzKFwiYXJyb3ctcmlnaHRcIik7XG4gICAgICBjYXNlIFwibWlkZGxlXCI6XG4gICAgICAgICRpbm5lckxhYmVsLmFkZENsYXNzKFwiYXJyb3ctbWlkZGxlXCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIndpZHRoXCIpO1xuICAgICAgICBjb25zb2xlLmxvZygkaW5uZXJMYWJlbC53aWR0aCgpKTtcbiAgICAgICAgd2luZG93LnRoaW5nID0gJGlubmVyTGFiZWw7XG4gICAgICAgIHJldHVybiAkaW5uZXJMYWJlbC5jc3Moe1xuICAgICAgICAgIGxlZnQ6IC0kaW5uZXJMYWJlbC53aWR0aCgpIC8gMlxuICAgICAgICB9KTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIER5bmFtaWNBc3NldHM7XG5cbn0pKCk7XG4iLCJ2YXIgSGlnaGxpZ2h0ZXI7XG5cbm1vZHVsZS5leHBvcnRzID0gSGlnaGxpZ2h0ZXIgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIEhpZ2hsaWdodGVyKCRlbCwgZHluYW1pY0Fzc2V0cykge1xuICAgIHRoaXMuJGVsID0gJGVsO1xuICAgIHRoaXMuZHluYW1pY0Fzc2V0cyA9IGR5bmFtaWNBc3NldHM7XG4gICAgUHViU3ViLnN1YnNjcmliZSgnaGlnaGxpZ2h0JywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICB2YXIgaSwgaXRlbSwgbGVuLCByZWYsIHJlc3VsdHM7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEuaWQpKSB7XG4gICAgICAgICAgcmVmID0gZGF0YS5pZDtcbiAgICAgICAgICByZXN1bHRzID0gW107XG4gICAgICAgICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBpdGVtID0gcmVmW2ldO1xuICAgICAgICAgICAgcmVzdWx0cy5wdXNoKF90aGlzLmhpZ2hsaWdodEVsZW1lbnQoaXRlbSwgZGF0YS5sZXZlbCwgZGF0YS5sYWJlbCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMuaGlnaGxpZ2h0RWxlbWVudChkYXRhLmlkLCBkYXRhLmxldmVsLCBkYXRhLmxhYmVsKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgUHViU3ViLnN1YnNjcmliZSgndW5oaWdobGlnaHQnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHZhciBpLCBpdGVtLCBsZW4sIHJlc3VsdHM7XG4gICAgICAgIGlmIChtID09PSBcInVuaGlnaGxpZ2h0LmFsbFwiKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLnVuaGlnaGxpZ2h0QWxsKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgICAgIGZvciAoaSA9IDAsIGxlbiA9IGRhdGEubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgaXRlbSA9IGRhdGFbaV07XG4gICAgICAgICAgICAgIHJlc3VsdHMucHVzaChfdGhpcy51bkhpZ2hsaWdodEVsZW1lbnQoaXRlbSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy51bkhpZ2hsaWdodEVsZW1lbnQoZGF0YSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgfVxuXG4gIEhpZ2hsaWdodGVyLnByb3RvdHlwZS5oaWdobGlnaHRFbGVtZW50ID0gZnVuY3Rpb24oZWxlbWVudElkLCBjb2xvciwgbGFiZWwpIHtcbiAgICB2YXIgJGl0ZW0sIGZpbHRlcklkO1xuICAgICRpdGVtID0gJChcIiNcIiArIGVsZW1lbnRJZCwgdGhpcy4kZWwpO1xuICAgICRpdGVtLmF0dHIoXCJjbGFzc1wiLCBcImZpbHRlci1oaWdobGlnaHRlZFwiKTtcbiAgICBpZiAoJGl0ZW0ubGVuZ3RoID09PSAwKSB7XG4gICAgICBhcmlzdG90bGVbXCJ0aHJvd1wiXShcInRyaWVkIHRvIGhpZ2hsaWdodCBhbiBlbGVtZW50IHdpdGggdGhlIGlkIGBcIiArIGVsZW1lbnRJZCArIFwiYCwgYnV0IGZvdW5kIG5vIGVsZW1lbnRzIHdpdGggdGhhdCBpZC5cIiwgdHJ1ZSk7XG4gICAgfVxuICAgIHN3aXRjaCAoY29sb3IpIHtcbiAgICAgIGNhc2UgJ2JsdWUnOlxuICAgICAgICBmaWx0ZXJJZCA9IFwiaGlnaGxpZ2h0Qmx1ZVwiO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ29yYW5nZSc6XG4gICAgICAgIGZpbHRlcklkID0gXCJoaWdobGlnaHRPcmFuZ2VcIjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd5ZWxsb3cnOlxuICAgICAgICBmaWx0ZXJJZCA9IFwiaGlnaGxpZ2h0WWVsbG93XCI7XG4gICAgfVxuICAgIHJldHVybiAkaXRlbS5jc3Moe1xuICAgICAgZmlsdGVyOiBcInVybCgjXCIgKyBmaWx0ZXJJZCArIFwiKVwiXG4gICAgfSk7XG4gIH07XG5cbiAgSGlnaGxpZ2h0ZXIucHJvdG90eXBlLnVuSGlnaGxpZ2h0RWxlbWVudCA9IGZ1bmN0aW9uKGVsZW1lbnRJZCkge1xuICAgIHZhciAkaXRlbTtcbiAgICAkaXRlbSA9ICQoXCIjXCIgKyBlbGVtZW50SWQsIHRoaXMuJGVsKTtcbiAgICAkaXRlbS5hdHRyKFwiY2xhc3NcIiwgXCJcIik7XG4gICAgaWYgKCRpdGVtLmxlbmd0aCA9PT0gMCkge1xuICAgICAgYXJpc3RvdGxlW1widGhyb3dcIl0oXCJ0cmllZCB0byB1bmhpZ2hsaWdodCBhbiBlbGVtZW50IHdpdGggdGhlIGlkIGBcIiArIGVsZW1lbnRJZCArIFwiYCwgYnV0IGZvdW5kIG5vIGVsZW1lbnRzIHdpdGggdGhhdCBpZC5cIiwgdHJ1ZSk7XG4gICAgfVxuICAgIHJldHVybiAkaXRlbS5jc3Moe1xuICAgICAgZmlsdGVyOiBcImluaXRpYWxcIlxuICAgIH0pO1xuICB9O1xuXG4gIEhpZ2hsaWdodGVyLnByb3RvdHlwZS51bmhpZ2hsaWdodEFsbCA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciAkaXRlbXM7XG4gICAgJGl0ZW1zID0gJChcIi5maWx0ZXItaGlnaGxpZ2h0ZWRcIik7XG4gICAgJGl0ZW1zLmF0dHIoXCJjbGFzc1wiLCBcIlwiKTtcbiAgICByZXR1cm4gJGl0ZW1zLmNzcyh7XG4gICAgICBmaWx0ZXI6IFwiaW5pdGlhbFwiXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIEhpZ2hsaWdodGVyO1xuXG59KSgpO1xuIiwidmFyIExheWVyLCBTVkdBbmltYXRpb24sXG4gIGJpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9O1xuXG5TVkdBbmltYXRpb24gPSByZXF1aXJlKCdtb3ZpZS9zdmctYW5pbWF0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gTGF5ZXIgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIExheWVyKCRlbCwgZGVwdGgpIHtcbiAgICB0aGlzLmNyZWF0ZUNvbnRlbnQgPSBiaW5kKHRoaXMuY3JlYXRlQ29udGVudCwgdGhpcyk7XG4gICAgdGhpcy51cGRhdGUgPSBiaW5kKHRoaXMudXBkYXRlLCB0aGlzKTtcbiAgICB0aGlzLmlzQ2FjaGVkID0gZmFsc2U7XG4gICAgdGhpcy4kbGF5ZXIgPSAkKGphZGVUZW1wbGF0ZVsnbW92aWUvbGF5ZXInXSh7XG4gICAgICBkZXB0aDogZGVwdGhcbiAgICB9KSk7XG4gICAgJGVsLmFwcGVuZCh0aGlzLiRsYXllcik7XG4gIH1cblxuICBMYXllci5wcm90b3R5cGUudXBkYXRlID0gZnVuY3Rpb24ocHJpc3RpbmVMYXllckRhdGEpIHtcbiAgICB0aGlzLnByaXN0aW5lTGF5ZXJEYXRhID0gcHJpc3RpbmVMYXllckRhdGE7XG4gICAgdGhpcy5sYXllckRhdGEgPSBqUXVlcnkuZXh0ZW5kKHRydWUsIHt9LCB0aGlzLnByaXN0aW5lTGF5ZXJEYXRhKTtcbiAgICBpZiAodGhpcy5sYXllckRhdGEud2FpdCAhPSBudWxsKSB7XG4gICAgICBzZXRUaW1lb3V0KHRoaXMuY3JlYXRlQ29udGVudCwgdGhpcy5sYXllckRhdGEud2FpdCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmNyZWF0ZUNvbnRlbnQoKTtcbiAgfTtcblxuICBMYXllci5wcm90b3R5cGUuY3JlYXRlQ29udGVudCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICgodGhpcy5sYXllckRhdGEuY29udGVudCAhPSBudWxsKSB8fCAodGhpcy5sYXllckRhdGEuYmFja2dyb3VuZCAhPSBudWxsKSkge1xuICAgICAgdGhpcy51cGRhdGVDb250ZW50KHRoaXMubGF5ZXJEYXRhKTtcbiAgICB9XG4gICAgaWYgKHRoaXMubGF5ZXJEYXRhLmZ4ICE9IG51bGwpIHtcbiAgICAgIHRoaXMudXBkYXRlRWZmZWN0cyh0aGlzLmxheWVyRGF0YS5meCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmxheWVyRGF0YS5hY3Rpb24gIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGFyaXN0b3RsZS5jb21tYW5kZXJbXCJkb1wiXSh0aGlzLmxheWVyRGF0YS5hY3Rpb24pO1xuICAgIH1cbiAgfTtcblxuICBMYXllci5wcm90b3R5cGUudXBkYXRlQ29udGVudCA9IGZ1bmN0aW9uKGxheWVyRGF0YSkge1xuICAgIGlmICh0aGlzLmN1cnJlbnRPbmlvbkxheWVyICE9IG51bGwpIHtcbiAgICAgIHRoaXMuZmFkZUFuZFJlbW92ZU9sZExheWVyKCk7XG4gICAgfVxuICAgIHRoaXMuYWRkVGhlQ29ycmVjdENvbnRlbnQobGF5ZXJEYXRhKTtcbiAgICByZXR1cm4gdGhpcy51cGRhdGVCYWNrZ3JvdW5kKGxheWVyRGF0YSk7XG4gIH07XG5cbiAgTGF5ZXIucHJvdG90eXBlLmFkZFRoZUNvcnJlY3RDb250ZW50ID0gZnVuY3Rpb24obGF5ZXJEYXRhKSB7XG4gICAgdmFyIGtpbmQ7XG4gICAgcGFyc2UobGF5ZXJEYXRhKTtcbiAgICBpZiAobGF5ZXJEYXRhLmllQ2FjaGUgJiYgIWFyaXN0b3RsZS5kb250Q2FjaGUgJiYgYXJpc3RvdGxlLmlzSUUpIHtcbiAgICAgIGxheWVyRGF0YS5sb29wID0gZmFsc2U7XG4gICAgICBsYXllckRhdGEuY2FjaGUgPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLmN1cnJlbnRPbmlvbkxheWVyID0gdGhpcy5hZGRPbmlvbkxheWVyKCk7XG4gICAgaWYgKGxheWVyRGF0YS5jb250ZW50ID09IG51bGwpIHtcbiAgICAgIGtpbmQgPSBcIm5vbmVcIjtcbiAgICB9IGVsc2UgaWYgKGxheWVyRGF0YS5jb250ZW50ID09PSBcImNsZWFyXCIpIHtcbiAgICAgIGtpbmQgPSBcImNsZWFyXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGtpbmQgPSBsYXllckRhdGEuY29udGVudC5zcGxpdChcIi5cIilbMV07XG4gICAgfVxuICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgY2FzZSBcImpzb25cIjpcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkQW5pbWF0aW9uKHRoaXMuY3VycmVudE9uaW9uTGF5ZXIsIGxheWVyRGF0YSk7XG4gICAgICBjYXNlIFwic3ZnXCI6XG4gICAgICAgIHJldHVybiB0aGlzLmFkZFN2Zyh0aGlzLmN1cnJlbnRPbmlvbkxheWVyLCBsYXllckRhdGEpO1xuICAgICAgY2FzZSBcImdpZlwiOlxuICAgICAgY2FzZSBcImpwZ1wiOlxuICAgICAgY2FzZSBcImpwZWdcIjpcbiAgICAgIGNhc2UgXCJwbmdcIjpcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkSW1hZ2UodGhpcy5jdXJyZW50T25pb25MYXllciwgbGF5ZXJEYXRhLmNvbnRlbnQsIGxheWVyRGF0YS5yZXBlYXQsIGxheWVyRGF0YS5wb3NpdGlvbik7XG4gICAgICBjYXNlIFwiY2xlYXJcIjpcbiAgICAgICAgcmV0dXJuIHRoaXMuZW1wdHkoKTtcbiAgICAgIGNhc2UgXCJub25lXCI6XG4gICAgICAgIHJldHVybiBcImRvIG5vdGhpbmdcIjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBhcmlzdG90bGVbXCJ0aHJvd1wiXShcInRyaWVkIHRvIGFkZCB1bnJlY29nbml6ZWQgbGF5ZXIgdHlwZSAnXCIgKyBraW5kICsgXCInXCIsIHRydWUpO1xuICAgIH1cbiAgfTtcblxuICBMYXllci5wcm90b3R5cGUuY2FjaGUgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgJGltZywgaW1nLCBzdmc7XG4gICAgaWYgKHRoaXMuaXNDYWNoZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5pc0NhY2hlZCA9IHRydWU7XG4gICAgaWYgKGFyaXN0b3RsZS5kb250Q2FjaGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc3ZnID0gJChcInN2Z1wiLCB0aGlzLiRsYXllcilbMF07XG4gICAgJGltZyA9ICQoJC5wYXJzZUhUTUwoXCI8aW1nIC8+XCIpKTtcbiAgICBpbWcgPSAkaW1nWzBdO1xuICAgIHJldHVybiBzdmcudG9EYXRhVVJMKCdpbWFnZS9wbmcnLCB7XG4gICAgICBjYWxsYmFjazogKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgZGF0YSk7XG4gICAgICAgICAgX3RoaXMuZmFkZUFuZFJlbW92ZU9sZExheWVyKCk7XG4gICAgICAgICAgX3RoaXMuY3VycmVudE9uaW9uTGF5ZXIgPSBfdGhpcy5hZGRPbmlvbkxheWVyKCk7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLmN1cnJlbnRPbmlvbkxheWVyLmFwcGVuZChpbWcpO1xuICAgICAgICB9O1xuICAgICAgfSkodGhpcylcbiAgICB9KTtcbiAgfTtcblxuICBMYXllci5wcm90b3R5cGUudW5jYWNoZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBrZXksIHJlZiwgdGVtcE9iaiwgdmFsO1xuICAgIGlmICghdGhpcy5pc0NhY2hlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmlzQ2FjaGVkID0gZmFsc2U7XG4gICAgdGhpcy5mYWRlQW5kUmVtb3ZlT2xkTGF5ZXIoKTtcbiAgICB0aGlzLmN1cnJlbnRPbmlvbkxheWVyID0gdGhpcy5hZGRPbmlvbkxheWVyKCk7XG4gICAgdGVtcE9iaiA9IHt9O1xuICAgIHJlZiA9IHRoaXMubGF5ZXJEYXRhO1xuICAgIGZvciAoa2V5IGluIHJlZikge1xuICAgICAgdmFsID0gcmVmW2tleV07XG4gICAgICB0ZW1wT2JqW2tleV0gPSB2YWw7XG4gICAgfVxuICAgIHRlbXBPYmouaWVDYWNoZSA9IGZhbHNlO1xuICAgIHRlbXBPYmouY2FjaGUgPSBmYWxzZTtcbiAgICB0ZW1wT2JqLmp1bXBUb0VuZCA9IHRydWU7XG4gICAgcmV0dXJuIHRoaXMuYWRkVGhlQ29ycmVjdENvbnRlbnQodGVtcE9iaik7XG4gIH07XG5cbiAgTGF5ZXIucHJvdG90eXBlLnVwZGF0ZUVmZmVjdHMgPSBmdW5jdGlvbihmeCkge1xuICAgIHZhciBlZmZlY3QsIGksIGxlbiwgcmVmLCByZXN1bHRzO1xuICAgIGlmIChmeC5jbGVhcikge1xuICAgICAgdGhpcy4kbGF5ZXIuYXR0cih7XG4gICAgICAgIFwiY2xhc3NcIjogJ2xheWVyJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChmeC5lZmZlY3RzICE9IG51bGwpIHtcbiAgICAgIHJlZiA9IGZ4LmVmZmVjdHM7XG4gICAgICByZXN1bHRzID0gW107XG4gICAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgZWZmZWN0ID0gcmVmW2ldO1xuICAgICAgICByZXN1bHRzLnB1c2godGhpcy4kbGF5ZXIuYWRkQ2xhc3MoZWZmZWN0KSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG4gIH07XG5cbiAgTGF5ZXIucHJvdG90eXBlLnVwZGF0ZUJhY2tncm91bmQgPSBmdW5jdGlvbihsYXllckRhdGEpIHtcbiAgICBpZiAobGF5ZXJEYXRhLmJhY2tncm91bmQgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5jdXJyZW50T25pb25MYXllci5jc3Moe1xuICAgICAgYmFja2dyb3VuZDogbGF5ZXJEYXRhLmJhY2tncm91bmRcbiAgICB9KTtcbiAgfTtcblxuICBMYXllci5wcm90b3R5cGUuYWRkQW5pbWF0aW9uID0gZnVuY3Rpb24oJGhvbGRlciwgbGF5ZXJEYXRhKSB7XG4gICAgdGhpcy5hbmltYXRpb24gPSBuZXcgU1ZHQW5pbWF0aW9uKCRob2xkZXIsIGFyaXN0b3RsZS5nZXRBc3NldFBhdGgobGF5ZXJEYXRhLmNvbnRlbnQpLCBsYXllckRhdGEpO1xuICAgIGlmIChsYXllckRhdGEuY2FjaGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmFuaW1hdGlvbi5hZGRPbkNvbXBsZXRlKChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuY2FjaGUoKTtcbiAgICAgICAgICB9LCAxMCk7XG4gICAgICAgIH07XG4gICAgICB9KSh0aGlzKSk7XG4gICAgfVxuICB9O1xuXG4gIExheWVyLnByb3RvdHlwZS5hZGRTdmcgPSBmdW5jdGlvbigkaG9sZGVyLCBsYXllckRhdGEpIHtcbiAgICB2YXIgbWU7XG4gICAgbWUgPSB0aGlzO1xuICAgIHJldHVybiAkaG9sZGVyLmxvYWQoYXJpc3RvdGxlLmdldEFzc2V0UGF0aChsYXllckRhdGEuY29udGVudCksIGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKGxheWVyRGF0YS5jYWNoZSkge1xuICAgICAgICByZXR1cm4gbWUuY2FjaGUoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICBMYXllci5wcm90b3R5cGUuYWRkSW1hZ2UgPSBmdW5jdGlvbigkaG9sZGVyLCBmaWxlLCByZXBlYXQsIHBvc2l0aW9uKSB7XG4gICAgaWYgKHJlcGVhdCA9PSBudWxsKSB7XG4gICAgICByZXBlYXQgPSBcIm5vLXJlcGVhdFwiO1xuICAgIH1cbiAgICBpZiAocG9zaXRpb24gPT0gbnVsbCkge1xuICAgICAgcG9zaXRpb24gPSBcImxlZnRcIjtcbiAgICB9XG4gICAgcmV0dXJuICRob2xkZXIuY3NzKHtcbiAgICAgIGJhY2tncm91bmQ6IFwidXJsKFwiICsgKGFyaXN0b3RsZS5nZXRBc3NldFBhdGgoZmlsZSkpICsgXCIpIFwiICsgcmVwZWF0ICsgXCIgXCIgKyBwb3NpdGlvblxuICAgIH0pO1xuICB9O1xuXG4gIExheWVyLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJGxheWVyLnJlbW92ZSgpO1xuICB9O1xuXG4gIExheWVyLnByb3RvdHlwZS5hZGRPbmlvbkxheWVyID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyICRvbmlvbkxheWVyO1xuICAgICRvbmlvbkxheWVyID0gJChqYWRlVGVtcGxhdGVbJ21vdmllL29uaW9uLWxheWVyJ10oe30pKTtcbiAgICB0aGlzLiRsYXllci5wcmVwZW5kKCRvbmlvbkxheWVyKTtcbiAgICByZXR1cm4gJG9uaW9uTGF5ZXI7XG4gIH07XG5cbiAgTGF5ZXIucHJvdG90eXBlLmZhZGVBbmRSZW1vdmVPbGRMYXllciA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBvbGRPbmlvbkxheWVyO1xuICAgIG9sZE9uaW9uTGF5ZXIgPSB0aGlzLmN1cnJlbnRPbmlvbkxheWVyO1xuICAgIHJldHVybiBzZXRUaW1lb3V0KChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICBvbGRPbmlvbkxheWVyLnZlbG9jaXR5KCdzdG9wJywgdHJ1ZSk7XG4gICAgICAgIHJldHVybiBvbGRPbmlvbkxheWVyLnZlbG9jaXR5KHtcbiAgICAgICAgICBvcGFjaXR5OiAwXG4gICAgICAgIH0sIHtcbiAgICAgICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBvbGRPbmlvbkxheWVyLnJlbW92ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpLCAyMDApO1xuICB9O1xuXG4gIExheWVyLnByb3RvdHlwZS5lbXB0eSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRsYXllci5lbXB0eSgpO1xuICB9O1xuXG4gIExheWVyLnByb3RvdHlwZS5hZGRGaWx0ZXIgPSBmdW5jdGlvbihmaWx0ZXJJZCkge1xuICAgIHJldHVybiAkKFwic3ZnXCIsIHRoaXMuY3VycmVudE9uaW9uTGF5ZXIpLmNzcyh7XG4gICAgICBmaWx0ZXI6IFwidXJsKCNcIiArIGZpbHRlcklkICsgXCIpXCJcbiAgICB9KTtcbiAgfTtcblxuICBMYXllci5wcm90b3R5cGUucmVtb3ZlRmlsdGVycyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAkKFwic3ZnXCIsIHRoaXMuY3VycmVudE9uaW9uTGF5ZXIpLmNzcyh7XG4gICAgICBmaWx0ZXI6IFwibm9uZVwiXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIExheWVyO1xuXG59KSgpO1xuIiwidmFyIER5bmFtaWNBc3NldHMsIEhpZ2hsaWdodGVyLCBMYXllciwgTW92aWU7XG5cbkR5bmFtaWNBc3NldHMgPSByZXF1aXJlKCdtb3ZpZS9keW5hbWljLWFzc2V0cycpO1xuXG5MYXllciA9IHJlcXVpcmUoJ21vdmllL2xheWVyJyk7XG5cbkhpZ2hsaWdodGVyID0gcmVxdWlyZSgnbW92aWUvaGlnaGxpZ2h0ZXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSBNb3ZpZSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gTW92aWUoJGVsKSB7XG4gICAgdGhpcy4kZWwgPSAkZWw7XG4gICAgYXJpc3RvdGxlLm1vdmllID0gdGhpcztcbiAgICB0aGlzLiR3cmFwcGVyID0gJCgnLndyYXBwZXInLCB0aGlzLiRlbCk7XG4gICAgdGhpcy5sYXllcnMgPSBbXTtcbiAgICB0aGlzLmR5bmFtaWNBc3NldHMgPSBuZXcgRHluYW1pY0Fzc2V0cygkKCcuZHluYW1pY3MnLCB0aGlzLiRlbCkpO1xuICAgIHRoaXMuaGlnaGxpZ2h0ZXIgPSBuZXcgSGlnaGxpZ2h0ZXIodGhpcy4kd3JhcHBlciwgdGhpcy5keW5hbWljQXNzZXRzKTtcbiAgICB0aGlzLnNjYWxlID0gMTtcbiAgICB0aGlzLnRyYW5zZm9ybU9yaWdpbiA9IHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwXG4gICAgfTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCdtb3ZpZS5sb2FkLWxheWVyJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuYWRkTGF5ZXIoZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCdtb3ZpZS56b29tJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuem9vbShkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ21vdmllLmxheWVycy5ibHVyLmJlbG93JywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24obSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuYmx1ckFsbExheWVyc0JlbG93KGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgUHViU3ViLnN1YnNjcmliZSgnbW92aWUubGF5ZXJzLnVuYmx1ci5hbGwnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy51bmJsdXJBbGxMQXllcnMoKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ21vdmllLmxheWVycy5jYWNoZScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmNhY2hlTGF5ZXIoZGF0YSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCdtb3ZpZS5sYXllcnMudW5jYWNoZScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKG0sIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnVuY2FjaGVMYXllcihkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9XG5cbiAgTW92aWUucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGosIGxheWVyLCBsZW4sIHJlZjtcbiAgICByZWYgPSB0aGlzLmxheWVycztcbiAgICBmb3IgKGogPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgIGxheWVyID0gcmVmW2pdO1xuICAgICAgbGF5ZXIuZGVzdHJveSgpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5sYXllcnMgPSBbXTtcbiAgfTtcblxuICBNb3ZpZS5wcm90b3R5cGUucG9wdWxhdGUgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyIGRlcHRoSWQsIGxheWVyRGF0YSwgcmVmO1xuICAgIGlmIChkYXRhID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmVmID0gZGF0YS5sYXllcnM7XG4gICAgZm9yIChkZXB0aElkIGluIHJlZikge1xuICAgICAgbGF5ZXJEYXRhID0gcmVmW2RlcHRoSWRdO1xuICAgICAgdGhpcy5hZGRMYXllcihsYXllckRhdGEpO1xuICAgIH1cbiAgICBpZiAoZGF0YS56b29tICE9IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLnpvb20oZGF0YS56b29tKTtcbiAgICB9XG4gIH07XG5cbiAgTW92aWUucHJvdG90eXBlLnpvb20gPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyICRpdGVtLCBwb3M7XG4gICAgaWYgKGRhdGEuaWQgIT0gbnVsbCkge1xuICAgICAgJGl0ZW0gPSAkKFwiI1wiICsgZGF0YS5pZCk7XG4gICAgICBpZiAoJGl0ZW0ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGFyaXN0b3RsZVtcInRocm93XCJdKFwiVHJpZWQgdG8gem9vbSB0byBhbiBpdGVtIHdpdGggdGhlIGlkIGBcIiArIGRhdGEuaWQgKyBcImAsIGJ1dCBubyBpdGVtcyB3aXRoIHRoYXQgaWQgd2VyZSBmb3VuZC5cIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHBvcyA9IHRoaXMuZ2V0TG9jYWxQb3MoZGF0YS5pZCk7XG4gICAgICByZXR1cm4gdGhpcy56b29tVG8oZGF0YS5zY2FsZSwgcG9zLngsIHBvcy55KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuem9vbVRvKGRhdGEuc2NhbGUsIGRhdGEueCwgZGF0YS55KTtcbiAgICB9XG4gIH07XG5cbiAgTW92aWUucHJvdG90eXBlLnpvb21UbyA9IGZ1bmN0aW9uKHNjYWxlLCB4LCB5KSB7XG4gICAgdGhpcy5zY2FsZSA9IHNjYWxlICE9IG51bGwgPyBzY2FsZSA6IDE7XG4gICAgaWYgKHggPT0gbnVsbCkge1xuICAgICAgeCA9IDA7XG4gICAgfVxuICAgIGlmICh5ID09IG51bGwpIHtcbiAgICAgIHkgPSAwO1xuICAgIH1cbiAgICB0aGlzLnRyYW5zZm9ybU9yaWdpbiA9IHtcbiAgICAgIHg6IHgsXG4gICAgICB5OiB5XG4gICAgfTtcbiAgICB0aGlzLiRlbC5jc3Moe1xuICAgICAgXCJ0cmFuc2Zvcm0tb3JpZ2luXCI6IHggKyBcInB4IFwiICsgeSArIFwicHhcIlxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLiRlbC5jc3Moe1xuICAgICAgdHJhbnNmb3JtOiBcInNjYWxlKFwiICsgdGhpcy5zY2FsZSArIFwiKVwiXG4gICAgfSk7XG4gIH07XG5cbiAgTW92aWUucHJvdG90eXBlLmFkZExheWVyID0gZnVuY3Rpb24obGF5ZXJEYXRhKSB7XG4gICAgdmFyIGRlcHRoLCBpLCBqLCBsYXllciwgcmVmLCByZWYxO1xuICAgIGlmIChsYXllckRhdGEgPT0gbnVsbCkge1xuICAgICAgYXJpc3RvdGxlW1widGhyb3dcIl0oXCJUcmllZCB0byBjcmVhdGUgYSBsYXllciwgYnV0IGRpZG4ndCBzcGVjaWZ5IGFueSBsYXllciBkYXRhXCIsIHRydWUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAobGF5ZXJEYXRhLmRlcHRoID09IG51bGwpIHtcbiAgICAgIGFyaXN0b3RsZVtcInRocm93XCJdKFwiVHJpZWQgdG8gY3JlYXRlIGEgbGF5ZXIgd2l0aCBubyBkZXB0aCBzcGVjaWZpZWRcIiwgdHJ1ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGRlcHRoID0gbGF5ZXJEYXRhLmRlcHRoO1xuICAgIGlmIChkZXB0aCA+IHRoaXMubGF5ZXJzLmxlbmd0aCkge1xuICAgICAgZm9yIChpID0gaiA9IHJlZiA9IHRoaXMubGF5ZXJzLmxlbmd0aCwgcmVmMSA9IGRlcHRoOyByZWYgPD0gcmVmMSA/IGogPD0gcmVmMSA6IGogPj0gcmVmMTsgaSA9IHJlZiA8PSByZWYxID8gKytqIDogLS1qKSB7XG4gICAgICAgIHRoaXMubGF5ZXJzW2ldID0gbmV3IExheWVyKHRoaXMuJHdyYXBwZXIsIGkpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXllciA9IHRoaXMuZ2V0T3JDcmVhdGVMYXllcihkZXB0aCk7XG4gICAgcmV0dXJuIGxheWVyLnVwZGF0ZShsYXllckRhdGEpO1xuICB9O1xuXG4gIE1vdmllLnByb3RvdHlwZS5nZXRPckNyZWF0ZUxheWVyID0gZnVuY3Rpb24oZGVwdGgpIHtcbiAgICB2YXIgbGF5ZXI7XG4gICAgaWYgKHRoaXMubGF5ZXJzW2RlcHRoXSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5sYXllcnNbZGVwdGhdO1xuICAgIH1cbiAgICBsYXllciA9IG5ldyBMYXllcih0aGlzLiR3cmFwcGVyLCBkZXB0aCk7XG4gICAgdGhpcy5sYXllcnNbZGVwdGhdID0gbGF5ZXI7XG4gICAgcmV0dXJuIGxheWVyO1xuICB9O1xuXG4gIE1vdmllLnByb3RvdHlwZS5jYWNoZUxheWVyID0gZnVuY3Rpb24oZGVwdGgpIHtcbiAgICByZXR1cm4gdGhpcy5sYXllcnNbZGVwdGhdLmNhY2hlKCk7XG4gIH07XG5cbiAgTW92aWUucHJvdG90eXBlLnVuY2FjaGVMYXllciA9IGZ1bmN0aW9uKGRlcHRoKSB7XG4gICAgcmV0dXJuIHRoaXMubGF5ZXJzW2RlcHRoXS51bmNhY2hlKCk7XG4gIH07XG5cbiAgTW92aWUucHJvdG90eXBlLmJsdXJBbGxMYXllcnNCZWxvdyA9IGZ1bmN0aW9uKGxheWVyRGVwdGgpIHtcbiAgICB2YXIgaSwgaiwgcmVmLCByZXN1bHRzO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGkgPSBqID0gMCwgcmVmID0gbGF5ZXJEZXB0aCAtIDE7IDAgPD0gcmVmID8gaiA8PSByZWYgOiBqID49IHJlZjsgaSA9IDAgPD0gcmVmID8gKytqIDogLS1qKSB7XG4gICAgICByZXN1bHRzLnB1c2godGhpcy5sYXllcnNbaV0uYWRkRmlsdGVyKFwiYmx1ZUJsdXJcIikpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBNb3ZpZS5wcm90b3R5cGUudW5ibHVyQWxsTEF5ZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGosIGxheWVyLCBsZW4sIHJlZiwgcmVzdWx0cztcbiAgICByZWYgPSB0aGlzLmxheWVycztcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChqID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICBsYXllciA9IHJlZltqXTtcbiAgICAgIHJlc3VsdHMucHVzaChsYXllci5yZW1vdmVGaWx0ZXJzKCkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBNb3ZpZS5wcm90b3R5cGUuZ2V0R2xvYmFsUG9zID0gZnVuY3Rpb24oaXRlbUlkKSB7XG4gICAgdmFyICRpdGVtLCBvYmo7XG4gICAgJGl0ZW0gPSAkKFwiI1wiICsgaXRlbUlkKTtcbiAgICByZXR1cm4gb2JqID0ge1xuICAgICAgeDogKCRpdGVtLnBvc2l0aW9uKCkubGVmdCAvIHRoaXMuc2NhbGUgLSB0aGlzLnRyYW5zZm9ybU9yaWdpbi54KSAqIHRoaXMuc2NhbGUgKyB0aGlzLnRyYW5zZm9ybU9yaWdpbi54LFxuICAgICAgeTogKCRpdGVtLnBvc2l0aW9uKCkudG9wIC8gdGhpcy5zY2FsZSAtIHRoaXMudHJhbnNmb3JtT3JpZ2luLnkpICogdGhpcy5zY2FsZSArIHRoaXMudHJhbnNmb3JtT3JpZ2luLnksXG4gICAgICB3OiAkaXRlbVswXS5nZXRCQm94KCkud2lkdGgsXG4gICAgICBoOiAkaXRlbVswXS5nZXRCQm94KCkuaGVpZ2h0XG4gICAgfTtcbiAgfTtcblxuICBNb3ZpZS5wcm90b3R5cGUuZ2V0TG9jYWxQb3MgPSBmdW5jdGlvbihpdGVtSWQpIHtcbiAgICB2YXIgJGl0ZW0sIG9iajtcbiAgICAkaXRlbSA9ICQoXCIjXCIgKyBpdGVtSWQpO1xuICAgIG9iaiA9IHtcbiAgICAgIHg6ICRpdGVtLnBvc2l0aW9uKCkubGVmdCAvIHRoaXMuc2NhbGUsXG4gICAgICB5OiAkaXRlbS5wb3NpdGlvbigpLnRvcCAvIHRoaXMuc2NhbGUsXG4gICAgICB3OiAkaXRlbVswXS5nZXRCQm94KCkud2lkdGgsXG4gICAgICBoOiAkaXRlbVswXS5nZXRCQm94KCkuaGVpZ2h0XG4gICAgfTtcbiAgICByZXR1cm4gb2JqO1xuICB9O1xuXG4gIE1vdmllLnByb3RvdHlwZS5kZWh5ZHJhdGVMYXllclN0YXRlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGosIGxheWVyLCBsYXllcnMsIGxlbiwgcmVmO1xuICAgIGxheWVycyA9IFtdO1xuICAgIHJlZiA9IHRoaXMubGF5ZXJzO1xuICAgIGZvciAoaiA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGogPCBsZW47IGorKykge1xuICAgICAgbGF5ZXIgPSByZWZbal07XG4gICAgICBsYXllcnMucHVzaChsYXllci5wcmlzdGluZUxheWVyRGF0YSk7XG4gICAgfVxuICAgIHJldHVybiBsYXllcnM7XG4gIH07XG5cbiAgTW92aWUucHJvdG90eXBlLnJlaHlkcmF0ZUxheWVyU3RhdGUgPSBmdW5jdGlvbihsYXllcnMpIHtcbiAgICB2YXIgaiwgbGF5ZXJEYXRhLCBsZW4sIHJlc3VsdHM7XG4gICAgdGhpcy5yZXNldCgpO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGogPSAwLCBsZW4gPSBsYXllcnMubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgIGxheWVyRGF0YSA9IGxheWVyc1tqXTtcbiAgICAgIGlmIChsYXllckRhdGEuY2FjaGUgfHwgbGF5ZXJEYXRhLmllQ2FjaGUpIHtcbiAgICAgICAgbGF5ZXJEYXRhLmp1bXBUb0VuZCA9IHRydWU7XG4gICAgICB9XG4gICAgICByZXN1bHRzLnB1c2godGhpcy5hZGRMYXllcihsYXllckRhdGEpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgcmV0dXJuIE1vdmllO1xuXG59KSgpO1xuIiwidmFyIFNWR0FuaW1hdGlvbixcbiAgYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH07XG5cbm1vZHVsZS5leHBvcnRzID0gU1ZHQW5pbWF0aW9uID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBTVkdBbmltYXRpb24oZWwsIGpzb24sIGRhdGEpIHtcbiAgICB0aGlzLnBsYXkgPSBiaW5kKHRoaXMucGxheSwgdGhpcyk7XG4gICAgaWYgKGRhdGEubG9vcCA9PSBudWxsKSB7XG4gICAgICBkYXRhLmxvb3AgPSBmYWxzZTtcbiAgICB9XG4gICAgdGhpcy5hbmltYXRpb24gPSBib2R5bW92aW4ubG9hZEFuaW1hdGlvbih7XG4gICAgICB3cmFwcGVyOiBlbFswXSxcbiAgICAgIGFuaW1UeXBlOiAnc3ZnJyxcbiAgICAgIGxvb3A6IGRhdGEubG9vcCxcbiAgICAgIHByZXJlbmRlcjogdHJ1ZSxcbiAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgIHBhdGg6IGpzb25cbiAgICB9KTtcbiAgICBpZiAoZGF0YS5uYXRpdmVFdmVudHMgIT0gbnVsbCkge1xuICAgICAgdGhpcy5hZGROYXRpdmVFdmVudHMoZGF0YS5uYXRpdmVFdmVudHMpO1xuICAgIH1cbiAgICB0aGlzLmFuaW1hdGlvbi5hZGRFdmVudExpc3RlbmVyKCdkYXRhX3JlYWR5JywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChkYXRhLmp1bXBUb0VuZCAhPSBudWxsKSB7XG4gICAgICAgICAgX3RoaXMuYW5pbWF0aW9uLnNldEN1cnJlbnRSYXdGcmFtZVZhbHVlKF90aGlzLmFuaW1hdGlvbi50b3RhbEZyYW1lcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGRhdGEuZGVsYXkgIT0gbnVsbCkge1xuICAgICAgICAgICAgc2V0VGltZW91dChfdGhpcy5wbGF5LCBkYXRhLmRlbGF5KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3RoaXMucGxheSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX3RoaXMuYWRkRXZlbnRzKGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH1cblxuICBTVkdBbmltYXRpb24ucHJvdG90eXBlLmFkZEV2ZW50cyA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2YXIgZXZlbnQsIGksIGxlbiwgcmVmLCByZXN1bHRzO1xuICAgIGlmIChkYXRhLmV2ZW50cyAhPSBudWxsKSB7XG4gICAgICByZWYgPSBkYXRhLmV2ZW50cztcbiAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBldmVudCA9IHJlZltpXTtcbiAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMuYW5pbWF0aW9uLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIF90aGlzLmFuaW1hdGlvbi5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50KTtcbiAgICAgICAgICAgIHJldHVybiBQdWJTdWIucHVibGlzaChcImxheWVyLlwiICsgZGF0YS5kZXB0aCArIFwiLlwiICsgZXZlbnQpO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pKHRoaXMpKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG4gIH07XG5cbiAgU1ZHQW5pbWF0aW9uLnByb3RvdHlwZS5hZGROYXRpdmVFdmVudHMgPSBmdW5jdGlvbihldmVudHMpIHtcbiAgICB2YXIgY2IsIGV2ZW50LCByZXN1bHRzO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGV2ZW50IGluIGV2ZW50cykge1xuICAgICAgY2IgPSBldmVudHNbZXZlbnRdO1xuICAgICAgcmVzdWx0cy5wdXNoKHRoaXMuYW5pbWF0aW9uLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGNiKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIFNWR0FuaW1hdGlvbi5wcm90b3R5cGUuYWRkT25Db21wbGV0ZSA9IGZ1bmN0aW9uKG9uQ29tcGxldGUpIHtcbiAgICByZXR1cm4gdGhpcy5hbmltYXRpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNvbXBsZXRlXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gb25Db21wbGV0ZSgpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH07XG5cbiAgU1ZHQW5pbWF0aW9uLnByb3RvdHlwZS5wbGF5ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuYW5pbWF0aW9uLnBsYXkoKTtcbiAgfTtcblxuICBTVkdBbmltYXRpb24ucHJvdG90eXBlLnN0b3AgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5hbmltYXRpb24uc3RvcCgpO1xuICB9O1xuXG4gIFNWR0FuaW1hdGlvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuYW5pbWF0aW9uLmRlc3Ryb3koKTtcbiAgICBpZiAodGhpcy5pbnRlcnZhbCAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcbiAgICB9XG4gIH07XG5cbiAgU1ZHQW5pbWF0aW9uLnByb3RvdHlwZS50cmFjZUZyYW1lcyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmludGVydmFsID0gc2V0SW50ZXJ2YWwoKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBjb25zb2xlLmxvZyhfdGhpcy5hbmltYXRpb24uY3VycmVudFJhd0ZyYW1lLCBfdGhpcy5hbmltYXRpb24uY3VycmVudEZyYW1lLCBfdGhpcy5hbmltYXRpb24udG90YWxGcmFtZXMpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSwgNTAwKTtcbiAgfTtcblxuICByZXR1cm4gU1ZHQW5pbWF0aW9uO1xuXG59KSgpO1xuIiwidmFyIENhbGxTaWduU2VsZWN0LCBDb21wb25lbnQsXG4gIGV4dGVuZCA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoaGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfSxcbiAgaGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5Db21wb25lbnQgPSByZXF1aXJlKCdzbGlkZS11eC9jb21wb25lbnRzL2NvbXBvbmVudCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IENhbGxTaWduU2VsZWN0ID0gKGZ1bmN0aW9uKHN1cGVyQ2xhc3MpIHtcbiAgZXh0ZW5kKENhbGxTaWduU2VsZWN0LCBzdXBlckNsYXNzKTtcblxuICBmdW5jdGlvbiBDYWxsU2lnblNlbGVjdCgkZWwsIGRhdGEpIHtcbiAgICB0aGlzLiRub2RlID0gJChqYWRlVGVtcGxhdGVbJ3NsaWRlLXV4L2NvbXBvbmVudHMvY2FsbC1zaWduLXNlbGVjdCddKGRhdGEpKTtcbiAgICBDYWxsU2lnblNlbGVjdC5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCAkZWwsIHRoaXMuJG5vZGUsIGRhdGEpO1xuICAgIHRoaXMuJHR4dCA9ICQoJyNjYWxsc2lnbi10eHQnLCB0aGlzLiRub2RlKTtcbiAgICAkKCcjZ2VuZXJhdGUtY2FsbHNpZ24nLCB0aGlzLiRub2RlKS5vbignY2xpY2snLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmdlbmVyYXRlQ2FsbFNpZ24oKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ3NhdmUuY2FsbHNpZ24nLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihtLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5zYXZlQ2FsbFNpZ24oKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9XG5cbiAgQ2FsbFNpZ25TZWxlY3QucHJvdG90eXBlLmdlbmVyYXRlQ2FsbFNpZ24gPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgbmlja3M7XG4gICAgbmlja3MgPSBbXCJBY2VcIiwgXCJBZnRlcnNob2NrXCIsIFwiQmFsZHlcIiwgXCJCYW0tQmFtXCIsIFwiQmVhclwiLCBcIkJlZXRsZVwiLCBcIkJpZ2Zvb3RcIiwgXCJCaXpvXCIsIFwiQm9uem9cIiwgXCJCb29tLUJvb21cIiwgXCJCb3dzZXJcIiwgXCJCdWNrXCIsIFwiQnVnc1wiLCBcIkJ1bGxcIiwgXCJDYWxpY29cIiwgXCJEZWFkZXllXCIsIFwiRHV0Y2hcIiwgXCJHaG9zdFwiLCBcIkdyaXRzXCIsIFwiSGFtbWVyXCIsIFwiSGFyZGNvcmUgNTRcIiwgXCJIYXdrXCIsIFwiSGF3a2V5ZVwiLCBcIkhvbGx5d29vZFwiLCBcIkh1ZXlcIiwgXCJLcmF6eVwiLCBcIkx1Y2t5XCIsIFwiTWFkIERvZ1wiLCBcIlBpbmVhcHBsZVwiLCBcIlBvcHNcIiwgXCJSYWRhclwiLCBcIlJlYmVsXCIsIFwiUmVkXCIsIFwiU2hvcnR5XCIsIFwiU3Bhcmt5XCIsIFwiU3Bvb2t5XCIsIFwiVGFja1wiLCBcIkIuQS5cIiwgXCJUZXhcIiwgXCJUaWdlclwiLCBcIlRpbnlcIiwgXCJXaXphcmRcIl07XG4gICAgdGhpcy5jYWxsU2lnbiA9IG5pY2tzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIG5pY2tzLmxlbmd0aCldO1xuICAgIHJldHVybiB0aGlzLiR0eHQudmFsKHRoaXMuY2FsbFNpZ24pO1xuICB9O1xuXG4gIENhbGxTaWduU2VsZWN0LnByb3RvdHlwZS5zYXZlQ2FsbFNpZ24gPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmVmO1xuICAgIGlmICgoKHJlZiA9IHRoaXMuY2FsbFNpZ24pICE9IG51bGwgPyByZWYubGVuZ3RoIDogdm9pZCAwKSA+IDEpIHtcbiAgICAgIHJldHVybiBQdWJTdWIucHVibGlzaCgnc2xpZGVzLm5leHQnKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIENhbGxTaWduU2VsZWN0O1xuXG59KShDb21wb25lbnQpO1xuIiwidmFyIENvbXBvbmVudDtcblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIENvbXBvbmVudCgkZWwsICRub2RlLCBkYXRhKSB7XG4gICAgdGhpcy4kbm9kZSA9ICRub2RlO1xuICAgICRlbC5hcHBlbmQodGhpcy4kbm9kZSk7XG4gICAgc2hhZG93SWNvbnNJbnN0YW5jZS5zdmdSZXBsYWNlV2l0aFN0cmluZyhweFN2Z0ljb25TdHJpbmcsIHRoaXMuJG5vZGUpO1xuICB9XG5cbiAgQ29tcG9uZW50LnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJG5vZGUucmVtb3ZlKCk7XG4gIH07XG5cbiAgcmV0dXJuIENvbXBvbmVudDtcblxufSkoKTtcbiIsInZhciBDb21wb25lbnQsIERlZmVuZGVyQ2FyZHMsXG4gIGJpbmQgPSBmdW5jdGlvbihmbiwgbWUpeyByZXR1cm4gZnVuY3Rpb24oKXsgcmV0dXJuIGZuLmFwcGx5KG1lLCBhcmd1bWVudHMpOyB9OyB9LFxuICBleHRlbmQgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKGhhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH0sXG4gIGhhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuQ29tcG9uZW50ID0gcmVxdWlyZSgnc2xpZGUtdXgvY29tcG9uZW50cy9jb21wb25lbnQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBEZWZlbmRlckNhcmRzID0gKGZ1bmN0aW9uKHN1cGVyQ2xhc3MpIHtcbiAgZXh0ZW5kKERlZmVuZGVyQ2FyZHMsIHN1cGVyQ2xhc3MpO1xuXG4gIGZ1bmN0aW9uIERlZmVuZGVyQ2FyZHMoJGVsLCBkYXRhMSkge1xuICAgIHRoaXMuZGF0YSA9IGRhdGExO1xuICAgIHRoaXMuc2hvd0NhcmQgPSBiaW5kKHRoaXMuc2hvd0NhcmQsIHRoaXMpO1xuICAgIHRoaXMudG90YWxDYXJkc1ZpZXdlZCA9IDA7XG4gICAgdGhpcy4kbm9kZSA9ICQoamFkZVRlbXBsYXRlWydzbGlkZS11eC9jb21wb25lbnRzL2RlZmVuZGVyLWNhcmRzJ10oe30pKTtcbiAgICBEZWZlbmRlckNhcmRzLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsICRlbCwgdGhpcy4kbm9kZSwgdGhpcy5kYXRhKTtcbiAgICB0aGlzLmNyZWF0ZURlZmVuZGVycyh0aGlzLmRhdGEuZGVmZW5kZXJzKTtcbiAgfVxuXG4gIERlZmVuZGVyQ2FyZHMucHJvdG90eXBlLmNyZWF0ZURlZmVuZGVycyA9IGZ1bmN0aW9uKGRlZmVuZGVycykge1xuICAgIHZhciBkYXRhLCBkZWZlbmRlckRhdGEsIGRlZmVuZGVySWQsIHJlc3VsdHM7XG4gICAgdGhpcy5naG9zdHMgPSBbXTtcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChkZWZlbmRlcklkIGluIGRlZmVuZGVycykge1xuICAgICAgZGVmZW5kZXJEYXRhID0gZGVmZW5kZXJzW2RlZmVuZGVySWRdO1xuICAgICAgZGF0YSA9IHtcbiAgICAgICAgaWQ6IGRlZmVuZGVySWQsXG4gICAgICAgIGV2ZW50czoge1xuICAgICAgICAgIGNsaWNrOiAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbihpZCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuc2hvd0NhcmQoaWQpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KSh0aGlzKVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgdGhpcy5naG9zdHMucHVzaChkZWZlbmRlcklkKTtcbiAgICAgIHJlc3VsdHMucHVzaChQdWJTdWIucHVibGlzaCgnZ2hvc3R1eC5hZGQnLCBkYXRhKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIERlZmVuZGVyQ2FyZHMucHJvdG90eXBlLnNob3dDYXJkID0gZnVuY3Rpb24oZGVmZW5kZXJJZCkge1xuICAgIHZhciBkYXRhO1xuICAgIHRoaXMudG90YWxDYXJkc1ZpZXdlZCsrO1xuICAgIGlmICh0aGlzLiRjYXJkICE9IG51bGwpIHtcbiAgICAgIHRoaXMucmVtb3ZlQ3VycmVudENhcmQoKTtcbiAgICB9XG4gICAgZGF0YSA9IHRoaXMuZGF0YS5kZWZlbmRlcnNbZGVmZW5kZXJJZF07XG4gICAgdGhpcy4kY2FyZCA9ICQoamFkZVRlbXBsYXRlWydzbGlkZS11eC9jb21wb25lbnRzL2RlZmVuZGVyLWNhcmQnXShkYXRhKSk7XG4gICAgc2hhZG93SWNvbnNJbnN0YW5jZS5zdmdSZXBsYWNlV2l0aFN0cmluZyhweFN2Z0ljb25TdHJpbmcsIHRoaXMuJGNhcmQpO1xuICAgICQoXCIuZ290LWl0LWJ0blwiLCB0aGlzLiRjYXJkKS5vbihcImNsaWNrXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnJlbW92ZUN1cnJlbnRDYXJkKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBpZiAodGhpcy50b3RhbENhcmRzVmlld2VkID09PSAyKSB7XG4gICAgICBQdWJTdWIucHVibGlzaCgnY29udGludWUuc2hvdycpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy4kbm9kZS5hcHBlbmQodGhpcy4kY2FyZCk7XG4gIH07XG5cbiAgRGVmZW5kZXJDYXJkcy5wcm90b3R5cGUucmVtb3ZlQ3VycmVudENhcmQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kY2FyZC5yZW1vdmUoKTtcbiAgfTtcblxuICBEZWZlbmRlckNhcmRzLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGdob3N0SWQsIGksIGxlbiwgcmVmO1xuICAgIHJlZiA9IHRoaXMuZ2hvc3RzO1xuICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgZ2hvc3RJZCA9IHJlZltpXTtcbiAgICAgIFB1YlN1Yi5wdWJsaXNoKCdnaG9zdHV4LnJlbW92ZScsIGdob3N0SWQpO1xuICAgIH1cbiAgICByZXR1cm4gRGVmZW5kZXJDYXJkcy5fX3N1cGVyX18uZGVzdHJveS5jYWxsKHRoaXMpO1xuICB9O1xuXG4gIHJldHVybiBEZWZlbmRlckNhcmRzO1xuXG59KShDb21wb25lbnQpO1xuIiwidmFyIENvbXBvbmVudCwgRGlhbG9ndWVQYXRlLFxuICBleHRlbmQgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKGhhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH0sXG4gIGhhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuQ29tcG9uZW50ID0gcmVxdWlyZSgnc2xpZGUtdXgvY29tcG9uZW50cy9jb21wb25lbnQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBEaWFsb2d1ZVBhdGUgPSAoZnVuY3Rpb24oc3VwZXJDbGFzcykge1xuICBleHRlbmQoRGlhbG9ndWVQYXRlLCBzdXBlckNsYXNzKTtcblxuICBmdW5jdGlvbiBEaWFsb2d1ZVBhdGUoJGVsLCBkYXRhKSB7XG4gICAgdGhpcy5jb25maWdEYXRhKGRhdGEpO1xuICAgIHRoaXMuJG5vZGUgPSAkKGphZGVUZW1wbGF0ZVsnc2xpZGUtdXgvY29tcG9uZW50cy9kaWFsb2d1ZS9kaWFsb2d1ZS1wYWdlcy9iYXNlJ10oZGF0YSkpO1xuICAgIERpYWxvZ3VlUGF0ZS5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCAkZWwsIHRoaXMuJG5vZGUsIGRhdGEpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIGlmIChkYXRhLnRoZW1lICE9IG51bGwpIHtcbiAgICAgIHRoaXMuJG5vZGUuYWRkQ2xhc3MoZGF0YS50aGVtZSk7XG4gICAgfVxuICAgIHRoaXMuY29uZmlnQnV0dG9ucyh0aGlzLiRub2RlLCBkYXRhKTtcbiAgICAkKFwic3ZnXCIsIHRoaXMuJG5vZGUpLmVhY2goZnVuY3Rpb24oaSwgZWwpIHtcbiAgICAgIHJldHVybiBlbC5zZXRBdHRyaWJ1dGUoXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIsIFwibm9uZVwiKTtcbiAgICB9KTtcbiAgICAkKFwiLmJ0blwiKS5vbignY2xpY2snLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICAgIHZhciBidG4sIGlkLCBqLCBsZW4sIHJlZjtcbiAgICAgICAgaWQgPSBlLmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKFwiaWRcIik7XG4gICAgICAgIHJlZiA9IGRhdGEuYnRucztcbiAgICAgICAgZm9yIChqID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgICAgYnRuID0gcmVmW2pdO1xuICAgICAgICAgIGlmIChidG4uaWQgPT09IGlkKSB7XG4gICAgICAgICAgICBhcmlzdG90bGUuY29tbWFuZGVyW1wiZG9cIl0oYnRuLmNsaWNrKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9XG5cbiAgRGlhbG9ndWVQYXRlLnByb3RvdHlwZS5jb25maWdEYXRhID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIHZhciBidG4sIGNvdW50LCBqLCBsZW4sIHJlZiwgcmVzdWx0cztcbiAgICBjb3VudCA9IDA7XG4gICAgcmVmID0gZGF0YS5idG5zO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGogPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBqIDwgbGVuOyBqKyspIHtcbiAgICAgIGJ0biA9IHJlZltqXTtcbiAgICAgIHJlc3VsdHMucHVzaChidG4uaWQgPSBcImJ0blwiICsgKGNvdW50KyspKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH07XG5cbiAgRGlhbG9ndWVQYXRlLnByb3RvdHlwZS5jb25maWdCdXR0b25zID0gZnVuY3Rpb24oZWwsIGRhdGEpIHtcbiAgICBpZiAoZGF0YS5idG5Db25maWcgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZGF0YS5idG5Db25maWcud2lkdGggIT0gbnVsbCkge1xuICAgICAgJChcIi5idG5cIiwgZWwpLmNzcyh7XG4gICAgICAgIHdpZHRoOiBkYXRhLmJ0bkNvbmZpZy53aWR0aCArIFwicHhcIlxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChkYXRhLmJ0bkNvbmZpZy5oZWlnaHQgIT0gbnVsbCkge1xuICAgICAgJChcIi5idG5cIiwgZWwpLmNzcyh7XG4gICAgICAgIGhlaWdodDogZGF0YS5idG5Db25maWcuaGVpZ2h0ICsgXCJweFwiXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGRhdGEuYnRuQ29uZmlnLmJvdHRvbSAhPSBudWxsKSB7XG4gICAgICAkKFwiLmJ0bi13cmFwcGVyXCIsIGVsKS5jc3Moe1xuICAgICAgICBcIm1hcmdpbi1ib3R0b21cIjogZGF0YS5idG5Db25maWcuYm90dG9tICsgXCJweFwiXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGRhdGEuYnRuQ29uZmlnLmxpbmVzKSB7XG4gICAgICByZXR1cm4gJChcIi5idG4td3JhcHBlclwiKS5hZGRDbGFzcygnbGluZXMnKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIERpYWxvZ3VlUGF0ZTtcblxufSkoQ29tcG9uZW50KTtcbiIsInZhciBDb21wb25lbnQsIERpYWxvZ3VlLFxuICBleHRlbmQgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKGhhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH0sXG4gIGhhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuQ29tcG9uZW50ID0gcmVxdWlyZSgnc2xpZGUtdXgvY29tcG9uZW50cy9jb21wb25lbnQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBEaWFsb2d1ZSA9IChmdW5jdGlvbihzdXBlckNsYXNzKSB7XG4gIGV4dGVuZChEaWFsb2d1ZSwgc3VwZXJDbGFzcyk7XG5cbiAgZnVuY3Rpb24gRGlhbG9ndWUoJGVsLCBkYXRhKSB7XG4gICAgdGhpcy4kbm9kZSA9ICQoamFkZVRlbXBsYXRlWydzbGlkZS11eC9jb21wb25lbnRzL2RpYWxvZ3VlL2RpYWxvZ3VlJ10oZGF0YSkpO1xuICAgIERpYWxvZ3VlLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsICRlbCwgdGhpcy4kbm9kZSwgZGF0YSk7XG4gICAgJCgnLmJ0bicsIHRoaXMuJG5vZGUpLm9uKFwiY2xpY2tcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBhcmlzdG90bGUuY29tbWFuZGVyW1wiZG9cIl0oZGF0YS5idG4uYWN0aW9uKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9XG5cbiAgcmV0dXJuIERpYWxvZ3VlO1xuXG59KShDb21wb25lbnQpO1xuIiwidmFyIENvbXBvbmVudCwgRHV0aWVzLCBTZXF1ZW5jZSxcbiAgZXh0ZW5kID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChoYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9LFxuICBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbkNvbXBvbmVudCA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvY29tcG9uZW50Jyk7XG5cblNlcXVlbmNlID0gcmVxdWlyZSgnbWlzYy9zZXF1ZW5jZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IER1dGllcyA9IChmdW5jdGlvbihzdXBlckNsYXNzKSB7XG4gIGV4dGVuZChEdXRpZXMsIHN1cGVyQ2xhc3MpO1xuXG4gIGZ1bmN0aW9uIER1dGllcygkZWwsIGRhdGEpIHtcbiAgICB0aGlzLm51bUFja25vd2xlZGdlZER1dGllcyA9IDA7XG4gICAgdGhpcy5hY2tub3dsZWRnZWREdXRpZXMgPSB7fTtcbiAgICB0aGlzLmdldERhdGEoZGF0YS5kZWZpbml0aW9uKTtcbiAgICB0aGlzLiRub2RlID0gJChcIjxkaXYgY2xhc3M9J2R1dGllcycvPlwiKTtcbiAgICBEdXRpZXMuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgJGVsLCB0aGlzLiRub2RlLCBkYXRhKTtcbiAgfVxuXG4gIER1dGllcy5wcm90b3R5cGUuYnVpbGQgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyICRodG1sO1xuICAgIHRoaXMuY3JlYXRlRHV0eUlkcyhkYXRhLmR1dGllcyk7XG4gICAgdGhpcy5kdXRpZXMgPSBuZXcgU2VxdWVuY2UoZGF0YS5kdXRpZXMpO1xuICAgICRodG1sID0gJChqYWRlVGVtcGxhdGVbJ3NsaWRlLXV4L2NvbXBvbmVudHMvZHV0aWVzJ10oZGF0YSkpO1xuICAgIHRoaXMuJG5vZGUuYXBwZW5kKCRodG1sKTtcbiAgICB0aGlzLiRjb250ZW50ID0gJChcIi5jb250ZW50XCIsIHRoaXMuJG5vZGUpO1xuICAgIHNoYWRvd0ljb25zSW5zdGFuY2Uuc3ZnUmVwbGFjZVdpdGhTdHJpbmcocHhTdmdJY29uU3RyaW5nLCB0aGlzLiRub2RlKTtcbiAgICB0aGlzLiRkdXR5QnV0dG9ucyA9ICQoXCIuZHV0eS1idG5cIiwgdGhpcy4kbm9kZSk7XG4gICAgdGhpcy4kZHV0eUJ1dHRvbnMub24oXCJjbGlja1wiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5hY3RpdmF0ZUR1dHkoZS5jdXJyZW50VGFyZ2V0LCBlLmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKCdpZCcpKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHJldHVybiAkKHRoaXMuJGR1dHlCdXR0b25zWzBdKS50cmlnZ2VyKFwiY2xpY2tcIik7XG4gIH07XG5cbiAgRHV0aWVzLnByb3RvdHlwZS5zZXRVc2VySHRtbCA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2YXIgJHVzZXJDb250ZW50O1xuICAgIHRoaXMuJGNvbnRlbnQuZW1wdHkoKTtcbiAgICAkdXNlckNvbnRlbnQgPSAkKGphZGVUZW1wbGF0ZVsnc2xpZGUtdXgvY29tcG9uZW50cy9kdXR5LWRldGFpbHMnXShkYXRhKSk7XG4gICAgdGhpcy4kY29udGVudC5hcHBlbmQoJHVzZXJDb250ZW50KTtcbiAgICBzaGFkb3dJY29uc0luc3RhbmNlLnN2Z1JlcGxhY2VXaXRoU3RyaW5nKHB4U3ZnSWNvblN0cmluZywgdGhpcy4kbm9kZSk7XG4gICAgcmV0dXJuICQoXCIjYWNrbm93bGVkZ2VcIiwgJHVzZXJDb250ZW50KS5vbihcImNsaWNrXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gX3RoaXMuZHV0eUFja25vd2xlZGdlZCgpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gIH07XG5cbiAgRHV0aWVzLnByb3RvdHlwZS5kdXR5QWNrbm93bGVkZ2VkID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGR1dHksIGksIGxlbiwgcmVmO1xuICAgIGlmICh0aGlzLmFja25vd2xlZGdlZER1dGllc1t0aGlzLmR1dGllcy5jdXJyZW50SXRlbSgpLmlkXSA9PSBudWxsKSB7XG4gICAgICB0aGlzLm51bUFja25vd2xlZGdlZER1dGllcysrO1xuICAgICAgdGhpcy5hY2tub3dsZWRnZWREdXRpZXNbdGhpcy5kdXRpZXMuY3VycmVudEl0ZW0oKS5pZF0gPSBcIlwiO1xuICAgICAgdGhpcy4kY3VycmVudEFjdGl2ZUJ1dHRvbi5hZGRDbGFzcyhcImNvbXBsZXRlXCIpO1xuICAgIH1cbiAgICBpZiAodGhpcy5udW1BY2tub3dsZWRnZWREdXRpZXMgPT09IHRoaXMuZHV0aWVzLnRvdGFsSXRlbXMpIHtcbiAgICAgIHJldHVybiBQdWJTdWIucHVibGlzaCgnY29udGludWUuc2hvdycpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZWYgPSB0aGlzLmR1dGllcy5pdGVtcztcbiAgICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBkdXR5ID0gcmVmW2ldO1xuICAgICAgICBpZiAodGhpcy5hY2tub3dsZWRnZWREdXRpZXNbZHV0eS5pZF0gPT0gbnVsbCkge1xuICAgICAgICAgICQoXCIjXCIgKyBkdXR5LmlkLCB0aGlzLiRub2RlKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBEdXRpZXMucHJvdG90eXBlLmNyZWF0ZUR1dHlJZHMgPSBmdW5jdGlvbihkdXRpZXMpIHtcbiAgICB2YXIgY291bnQsIGR1dHksIGksIGxlbiwgcmVzdWx0cztcbiAgICBjb3VudCA9IDA7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoaSA9IDAsIGxlbiA9IGR1dGllcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgZHV0eSA9IGR1dGllc1tpXTtcbiAgICAgIHJlc3VsdHMucHVzaChkdXR5LmlkID0gXCJkdXR5XCIgKyAoY291bnQrKykpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBEdXRpZXMucHJvdG90eXBlLmFjdGl2YXRlRHV0eSA9IGZ1bmN0aW9uKGVsLCBpZCkge1xuICAgIHRoaXMuZHV0aWVzLmFjdGl2YXRlSXRlbUJ5UGFyYW0oJ2lkJywgaWQpO1xuICAgIHRoaXMuJGN1cnJlbnRBY3RpdmVCdXR0b24gPSAkKGVsKTtcbiAgICB0aGlzLiRkdXR5QnV0dG9ucy5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICB0aGlzLiRjdXJyZW50QWN0aXZlQnV0dG9uLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgIHJldHVybiB0aGlzLnNldFVzZXJIdG1sKHRoaXMuZHV0aWVzLmN1cnJlbnRJdGVtKCkpO1xuICB9O1xuXG4gIER1dGllcy5wcm90b3R5cGUuZ2V0RGF0YSA9IGZ1bmN0aW9uKGpzb25GaWxlKSB7XG4gICAgcmV0dXJuIHRoaXMubG9hZEpzb24oYXJpc3RvdGxlLmdldEFzc2V0UGF0aChqc29uRmlsZSksIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGpzb24pIHtcbiAgICAgICAgdmFyIG9iajtcbiAgICAgICAgb2JqID0gSlNPTi5wYXJzZShqc29uLnJlcGxhY2UoLyhcXHJcXG58XFxufFxccikvZ20sIFwiXCIpKTtcbiAgICAgICAgcmV0dXJuIF90aGlzLmJ1aWxkKG9iaik7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgfTtcblxuICBEdXRpZXMucHJvdG90eXBlLmxvYWRKc29uID0gZnVuY3Rpb24ocGF0aCwgb25Db21wbGV0ZSkge1xuICAgIHZhciB4b2JqO1xuICAgIHhvYmogPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICB4b2JqLm92ZXJyaWRlTWltZVR5cGUoJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICB4b2JqLm9wZW4oJ0dFVCcsIHBhdGgsIHRydWUpO1xuICAgIHhvYmoub25yZWFkeXN0YXRlY2hhbmdlID0gKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh4b2JqLnJlYWR5U3RhdGUgPT09IDQgJiYgeG9iai5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgIHJldHVybiBvbkNvbXBsZXRlKHhvYmoucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KSh0aGlzKTtcbiAgICByZXR1cm4geG9iai5zZW5kKG51bGwpO1xuICB9O1xuXG4gIHJldHVybiBEdXRpZXM7XG5cbn0pKENvbXBvbmVudCk7XG4iLCJ2YXIgQ29tcG9uZW50LCBFcGlzb2RlSW50cm8sXG4gIGV4dGVuZCA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoaGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfSxcbiAgaGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5Db21wb25lbnQgPSByZXF1aXJlKCdzbGlkZS11eC9jb21wb25lbnRzL2NvbXBvbmVudCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVwaXNvZGVJbnRybyA9IChmdW5jdGlvbihzdXBlckNsYXNzKSB7XG4gIGV4dGVuZChFcGlzb2RlSW50cm8sIHN1cGVyQ2xhc3MpO1xuXG4gIGZ1bmN0aW9uIEVwaXNvZGVJbnRybygkZWwsIGRhdGEpIHtcbiAgICB0aGlzLiRub2RlID0gJChqYWRlVGVtcGxhdGVbJ3NsaWRlLXV4L2NvbXBvbmVudHMvZXBpc29kZS1pbnRybyddKGRhdGEpKTtcbiAgICBFcGlzb2RlSW50cm8uX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgJGVsLCB0aGlzLiRub2RlLCBkYXRhKTtcbiAgfVxuXG4gIHJldHVybiBFcGlzb2RlSW50cm87XG5cbn0pKENvbXBvbmVudCk7XG4iLCJ2YXIgQ29tcG9uZW50LCBFcGlzb2RlT3V0cm8sXG4gIGV4dGVuZCA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoaGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfSxcbiAgaGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5Db21wb25lbnQgPSByZXF1aXJlKCdzbGlkZS11eC9jb21wb25lbnRzL2NvbXBvbmVudCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVwaXNvZGVPdXRybyA9IChmdW5jdGlvbihzdXBlckNsYXNzKSB7XG4gIGV4dGVuZChFcGlzb2RlT3V0cm8sIHN1cGVyQ2xhc3MpO1xuXG4gIGZ1bmN0aW9uIEVwaXNvZGVPdXRybygkZWwsIGRhdGEpIHtcbiAgICB0aGlzLiRub2RlID0gJChqYWRlVGVtcGxhdGVbJ3NsaWRlLXV4L2NvbXBvbmVudHMvZXBpc29kZS1vdXRybyddKGRhdGEpKTtcbiAgICBFcGlzb2RlT3V0cm8uX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgJGVsLCB0aGlzLiRub2RlLCBkYXRhKTtcbiAgfVxuXG4gIHJldHVybiBFcGlzb2RlT3V0cm87XG5cbn0pKENvbXBvbmVudCk7XG4iLCJ2YXIgQ29tcG9uZW50LCBFeHBsb3JlQ2FyZHMsIFNlcXVlbmNlLFxuICBiaW5kID0gZnVuY3Rpb24oZm4sIG1lKXsgcmV0dXJuIGZ1bmN0aW9uKCl7IHJldHVybiBmbi5hcHBseShtZSwgYXJndW1lbnRzKTsgfTsgfSxcbiAgZXh0ZW5kID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChoYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9LFxuICBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbkNvbXBvbmVudCA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvY29tcG9uZW50Jyk7XG5cblNlcXVlbmNlID0gcmVxdWlyZSgnbWlzYy9zZXF1ZW5jZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEV4cGxvcmVDYXJkcyA9IChmdW5jdGlvbihzdXBlckNsYXNzKSB7XG4gIGV4dGVuZChFeHBsb3JlQ2FyZHMsIHN1cGVyQ2xhc3MpO1xuXG4gIGZ1bmN0aW9uIEV4cGxvcmVDYXJkcygkZWwsIGRhdGExKSB7XG4gICAgdGhpcy5kYXRhID0gZGF0YTE7XG4gICAgdGhpcy5zaG93Q2FyZCA9IGJpbmQodGhpcy5zaG93Q2FyZCwgdGhpcyk7XG4gICAgdGhpcy50b3RhbENhcmRzVmlld2VkID0gMDtcbiAgICB0aGlzLnJlcXVpcmVkQ2FyZFZpZXdzID0gdGhpcy5kYXRhW1wicmVxdWlyZWQtdmlld3NcIl07XG4gICAgdGhpcy4kbm9kZSA9ICQoJC5wYXJzZUhUTUwoXCI8ZGl2PjwvZGl2PlwiKSk7XG4gICAgdGhpcy5jYXJkcyA9IG5ldyBTZXF1ZW5jZSh0aGlzLmRhdGEuY2FyZHMpO1xuICAgIHRoaXMuY3JlYXRlQ2FyZEdob3N0cyh0aGlzLmRhdGEuY2FyZHMpO1xuICAgIEV4cGxvcmVDYXJkcy5fX3N1cGVyX18uY29uc3RydWN0b3IuY2FsbCh0aGlzLCAkZWwsIHRoaXMuJG5vZGUsIHRoaXMuZGF0YSk7XG4gIH1cblxuICBFeHBsb3JlQ2FyZHMucHJvdG90eXBlLmNyZWF0ZUNhcmRHaG9zdHMgPSBmdW5jdGlvbihjYXJkcykge1xuICAgIHZhciBjYXJkRGF0YSwgZGF0YSwgaSwgbGVuLCByZXN1bHRzO1xuICAgIHRoaXMuZ2hvc3RzID0gW107XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoaSA9IDAsIGxlbiA9IGNhcmRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjYXJkRGF0YSA9IGNhcmRzW2ldO1xuICAgICAgZGF0YSA9IHtcbiAgICAgICAgaWQ6IGNhcmREYXRhLmhpdCxcbiAgICAgICAgZXZlbnRzOiB7XG4gICAgICAgICAgY2xpY2s6IChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGlkKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdGhpcy5zaG93Q2FyZChpZCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgIH0pKHRoaXMpXG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgICB0aGlzLmdob3N0cy5wdXNoKGNhcmREYXRhLmhpdCk7XG4gICAgICByZXN1bHRzLnB1c2goUHViU3ViLnB1Ymxpc2goJ2dob3N0dXguYWRkJywgZGF0YSkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBFeHBsb3JlQ2FyZHMucHJvdG90eXBlLnNob3dDYXJkID0gZnVuY3Rpb24oY2FyZElkKSB7XG4gICAgdmFyIGRhdGE7XG4gICAgdGhpcy50b3RhbENhcmRzVmlld2VkKys7XG4gICAgaWYgKHRoaXMuJGN1cnJlbnRDYXJkICE9IG51bGwpIHtcbiAgICAgIHRoaXMucmVtb3ZlQ3VycmVudENhcmQoKTtcbiAgICB9XG4gICAgZGF0YSA9IHRoaXMuY2FyZHMuZ2V0SXRlbUJ5UGFyYW0oJ2hpdCcsIGNhcmRJZCk7XG4gICAgdGhpcy4kY3VycmVudENhcmQgPSAkKGphZGVUZW1wbGF0ZVtcInNsaWRlLXV4L2NvbXBvbmVudHMvY2FyZHMvXCIgKyB0aGlzLmRhdGEudGVtcGxhdGVdKGRhdGEpKTtcbiAgICBzaGFkb3dJY29uc0luc3RhbmNlLnN2Z1JlcGxhY2VXaXRoU3RyaW5nKHB4U3ZnSWNvblN0cmluZywgdGhpcy4kY3VycmVudENhcmQpO1xuICAgICQoXCIuZ290LWl0LWJ0blwiLCB0aGlzLiRjdXJyZW50Q2FyZCkub24oXCJjbGlja1wiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5yZW1vdmVDdXJyZW50Q2FyZCgpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgaWYgKHRoaXMudG90YWxDYXJkc1ZpZXdlZCA+PSB0aGlzLnJlcXVpcmVkQ2FyZFZpZXdzKSB7XG4gICAgICBQdWJTdWIucHVibGlzaCgnY29udGludWUuc2hvdycpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy4kbm9kZS5hcHBlbmQodGhpcy4kY3VycmVudENhcmQpO1xuICB9O1xuXG4gIEV4cGxvcmVDYXJkcy5wcm90b3R5cGUucmVtb3ZlQ3VycmVudENhcmQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kY3VycmVudENhcmQucmVtb3ZlKCk7XG4gIH07XG5cbiAgRXhwbG9yZUNhcmRzLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGdob3N0SWQsIGksIGxlbiwgcmVmO1xuICAgIHJlZiA9IHRoaXMuZ2hvc3RzO1xuICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgZ2hvc3RJZCA9IHJlZltpXTtcbiAgICAgIFB1YlN1Yi5wdWJsaXNoKCdnaG9zdHV4LnJlbW92ZScsIGdob3N0SWQpO1xuICAgIH1cbiAgICByZXR1cm4gRXhwbG9yZUNhcmRzLl9fc3VwZXJfXy5kZXN0cm95LmNhbGwodGhpcyk7XG4gIH07XG5cbiAgcmV0dXJuIEV4cGxvcmVDYXJkcztcblxufSkoQ29tcG9uZW50KTtcbiIsInZhciBDb21wb25lbnQsIEdob3N0VVgsXG4gIGV4dGVuZCA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoaGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfSxcbiAgaGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5Db21wb25lbnQgPSByZXF1aXJlKCdzbGlkZS11eC9jb21wb25lbnRzL2NvbXBvbmVudCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IEdob3N0VVggPSAoZnVuY3Rpb24oc3VwZXJDbGFzcykge1xuICBleHRlbmQoR2hvc3RVWCwgc3VwZXJDbGFzcyk7XG5cbiAgZnVuY3Rpb24gR2hvc3RVWCgkZWwsIGRhdGEpIHtcbiAgICB0aGlzLiRub2RlID0gJChqYWRlVGVtcGxhdGVbJ3NsaWRlLXV4L2NvbXBvbmVudHMvZ2hvc3QtdXgnXSh7fSkpO1xuICAgIEdob3N0VVguX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgJGVsLCB0aGlzLiRub2RlLCBkYXRhKTtcbiAgICB0aGlzLmNyZWF0ZVRhcmdldHMoZGF0YS50YXJnZXRzKTtcbiAgfVxuXG4gIEdob3N0VVgucHJvdG90eXBlLmNyZWF0ZVRhcmdldHMgPSBmdW5jdGlvbih0YXJnZXRzKSB7XG4gICAgdmFyICRnaG9zdEl0ZW0sICR0YXJnZXQsIGksIGxlbiwgcG9zLCByZXN1bHRzLCB0YWwsIHRhcmdldCwgd2lkO1xuICAgIHJlc3VsdHMgPSBbXTtcbiAgICBmb3IgKGkgPSAwLCBsZW4gPSB0YXJnZXRzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICB0YXJnZXQgPSB0YXJnZXRzW2ldO1xuICAgICAgJHRhcmdldCA9ICQoXCIjXCIgKyB0YXJnZXQuaWQpO1xuICAgICAgcG9zID0gJHRhcmdldC5wb3NpdGlvbigpO1xuICAgICAgd2lkID0gJHRhcmdldFswXS5nZXRCQm94KCkud2lkdGg7XG4gICAgICB0YWwgPSAkdGFyZ2V0WzBdLmdldEJCb3goKS5oZWlnaHQ7XG4gICAgICAkZ2hvc3RJdGVtID0gJChqYWRlVGVtcGxhdGVbJ3NsaWRlLXV4L2NvbXBvbmVudHMvZ2hvc3QtaXRlbSddKHtcbiAgICAgICAgd2lkdGg6IHdpZCxcbiAgICAgICAgaGVpZ2h0OiB0YWwsXG4gICAgICAgIGxlZnQ6IHBvcy5sZWZ0LFxuICAgICAgICB0b3A6IHBvcy50b3BcbiAgICAgIH0pKTtcbiAgICAgIHRoaXMuJG5vZGUuYXBwZW5kKCRnaG9zdEl0ZW0pO1xuICAgICAgdGhpcy5zZXRFdmVudEhhbmRsZXIoJGdob3N0SXRlbSwgJ2NsaWNrJywgdGFyZ2V0LmNsaWNrKTtcbiAgICAgIHRoaXMuc2V0RXZlbnRIYW5kbGVyKCRnaG9zdEl0ZW0sICdtb3VzZW92ZXInLCB0YXJnZXQub3ZlciwgMC40KTtcbiAgICAgIHJlc3VsdHMucHVzaCh0aGlzLnNldEV2ZW50SGFuZGxlcigkZ2hvc3RJdGVtLCAnbW91c2VvdXQnLCB0YXJnZXQub3V0KSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRzO1xuICB9O1xuXG4gIEdob3N0VVgucHJvdG90eXBlLnNldEV2ZW50SGFuZGxlciA9IGZ1bmN0aW9uKCRpdGVtLCBldmVudCwgYWN0aW9uLCBvcGFjaXR5KSB7XG4gICAgaWYgKG9wYWNpdHkgPT0gbnVsbCkge1xuICAgICAgb3BhY2l0eSA9IDA7XG4gICAgfVxuICAgIHJldHVybiAkaXRlbS5vbihldmVudCwgZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gYXJpc3RvdGxlLmNvbW1hbmRlcltcImRvXCJdKGFjdGlvbik7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIEdob3N0VVg7XG5cbn0pKENvbXBvbmVudCk7XG4iLCJ2YXIgQ29tcG9uZW50LCBQZXJzb25hbEluZm9JbnRybyxcbiAgZXh0ZW5kID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChoYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9LFxuICBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbkNvbXBvbmVudCA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvY29tcG9uZW50Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gUGVyc29uYWxJbmZvSW50cm8gPSAoZnVuY3Rpb24oc3VwZXJDbGFzcykge1xuICBleHRlbmQoUGVyc29uYWxJbmZvSW50cm8sIHN1cGVyQ2xhc3MpO1xuXG4gIGZ1bmN0aW9uIFBlcnNvbmFsSW5mb0ludHJvKCRlbCwgZGF0YSkge1xuICAgIGRhdGEub3JnYW5pemF0aW9uID0gXCJBcml6b25hIFB1YmxpYyBTZXJ2aWNlXCI7XG4gICAgdGhpcy4kbm9kZSA9ICQoamFkZVRlbXBsYXRlWydzbGlkZS11eC9jb21wb25lbnRzL3BlcnNvbmFsLWluZm8taW50cm8nXShkYXRhKSk7XG4gICAgUGVyc29uYWxJbmZvSW50cm8uX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgJGVsLCB0aGlzLiRub2RlLCBkYXRhKTtcbiAgfVxuXG4gIHJldHVybiBQZXJzb25hbEluZm9JbnRybztcblxufSkoQ29tcG9uZW50KTtcbiIsInZhciBRdWVzdGlvbixcbiAgYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH07XG5cbm1vZHVsZS5leHBvcnRzID0gUXVlc3Rpb24gPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIFF1ZXN0aW9uKCRwYXJlbnQsIGRhdGEsIHF1ZXN0aW9uVmFsdWUsIGFuc3dlckNhbGxiYWNrKSB7XG4gICAgdGhpcy4kcGFyZW50ID0gJHBhcmVudDtcbiAgICB0aGlzLmRhdGEgPSBkYXRhO1xuICAgIHRoaXMucXVlc3Rpb25WYWx1ZSA9IHF1ZXN0aW9uVmFsdWUgIT0gbnVsbCA/IHF1ZXN0aW9uVmFsdWUgOiAxMjA7XG4gICAgdGhpcy5hbnN3ZXJDYWxsYmFjayA9IGFuc3dlckNhbGxiYWNrO1xuICAgIHRoaXMub25BbnN3ZXJDbGljayA9IGJpbmQodGhpcy5vbkFuc3dlckNsaWNrLCB0aGlzKTtcbiAgICB0aGlzLndyb25nR3Vlc3NlcyA9IDA7XG4gICAgdGhpcy5jb3VudFdyb25nQW5zd2VycygpO1xuICB9XG5cbiAgUXVlc3Rpb24ucHJvdG90eXBlLmJ1aWxkID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy4kbm9kZSA9ICQoamFkZVRlbXBsYXRlWydzbGlkZS11eC9jb21wb25lbnRzL3F1aXovcXVlc3Rpb24nXSh0aGlzLmRhdGEpKTtcbiAgICB0aGlzLiRwYXJlbnQucHJlcGVuZCh0aGlzLiRub2RlKTtcbiAgICBzaGFkb3dJY29uc0luc3RhbmNlLnN2Z1JlcGxhY2VXaXRoU3RyaW5nKHB4U3ZnSWNvblN0cmluZywgdGhpcy4kbm9kZSk7XG4gICAgcmV0dXJuICQoXCIuYW5zd2VyLXdyYXBwZXJcIiwgdGhpcy4kbm9kZSkub24oXCJjbGlja1wiLCB0aGlzLm9uQW5zd2VyQ2xpY2spO1xuICB9O1xuXG4gIFF1ZXN0aW9uLnByb3RvdHlwZS5vbkFuc3dlckNsaWNrID0gZnVuY3Rpb24oZSkge1xuICAgIHZhciBpc0NvcnJlY3Q7XG4gICAgJChlLmN1cnJlbnRUYXJnZXQpLmFkZENsYXNzKFwiZmxpcHBlZFwiKTtcbiAgICBpc0NvcnJlY3QgPSAkKFwiLnJlc3BvbnNlXCIsIGUuY3VycmVudFRhcmdldCkuaGFzQ2xhc3MoJ3JpZ2h0Jyk7XG4gICAgaWYgKCFpc0NvcnJlY3QpIHtcbiAgICAgIHRoaXMud3JvbmdHdWVzc2VzKys7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmFuc3dlckNhbGxiYWNrKGlzQ29ycmVjdCk7XG4gIH07XG5cbiAgUXVlc3Rpb24ucHJvdG90eXBlLmNvdW50V3JvbmdBbnN3ZXJzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFuc3dlciwgaSwgbGVuLCByZWYsIHJlc3VsdHM7XG4gICAgdGhpcy50b3RhbFdyb25nQW5zd2VycyA9IDA7XG4gICAgcmVmID0gdGhpcy5kYXRhLmFuc3dlcnM7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgYW5zd2VyID0gcmVmW2ldO1xuICAgICAgaWYgKCFhbnN3ZXIuYykge1xuICAgICAgICByZXN1bHRzLnB1c2godGhpcy50b3RhbFdyb25nQW5zd2VycysrKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdHMucHVzaCh2b2lkIDApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBRdWVzdGlvbi5wcm90b3R5cGUuaXNQZXJmZWN0ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMud3JvbmdHdWVzc2VzID09PSAwO1xuICB9O1xuXG4gIFF1ZXN0aW9uLnByb3RvdHlwZS5nZXROYW1lID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMubmFtZSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gdGhpcy5uYW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gXCJRdWVzaXRvbiBcIiArICh0aGlzLmRhdGEuaW5kZXggKyAxKTtcbiAgICB9XG4gIH07XG5cbiAgUXVlc3Rpb24ucHJvdG90eXBlLmdldFNjb3JlID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICh0aGlzLnBvaW50c0Vhcm5lZCgpKSArIFwiL1wiICsgdGhpcy5xdWVzdGlvblZhbHVlO1xuICB9O1xuXG4gIFF1ZXN0aW9uLnByb3RvdHlwZS5wb2ludHNFYXJuZWQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgd3JvbmdHdWVzc1ZhbHVlO1xuICAgIHdyb25nR3Vlc3NWYWx1ZSA9ICh0aGlzLnF1ZXN0aW9uVmFsdWUgLyAyKSAvIHRoaXMudG90YWxXcm9uZ0Fuc3dlcnM7XG4gICAgdGhpcy5xdWVzdGlvblZhbHVlIC0gKHdyb25nR3Vlc3NWYWx1ZSAqIHRoaXMud3JvbmdHdWVzc2VzKTtcbiAgICByZXR1cm4gdGhpcy5xdWVzdGlvblZhbHVlIC0gKHdyb25nR3Vlc3NWYWx1ZSAqIHRoaXMud3JvbmdHdWVzc2VzKTtcbiAgfTtcblxuICBRdWVzdGlvbi5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRub2RlLnJlbW92ZSgpO1xuICB9O1xuXG4gIHJldHVybiBRdWVzdGlvbjtcblxufSkoKTtcbiIsInZhciBDb21wb25lbnQsIFF1ZXN0aW9uLCBRdWl6LCBTZXF1ZW5jZSxcbiAgYmluZCA9IGZ1bmN0aW9uKGZuLCBtZSl7IHJldHVybiBmdW5jdGlvbigpeyByZXR1cm4gZm4uYXBwbHkobWUsIGFyZ3VtZW50cyk7IH07IH0sXG4gIGV4dGVuZCA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoaGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfSxcbiAgaGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5Db21wb25lbnQgPSByZXF1aXJlKCdzbGlkZS11eC9jb21wb25lbnRzL2NvbXBvbmVudCcpO1xuXG5RdWVzdGlvbiA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvcXVpei9xdWVzdGlvbicpO1xuXG5TZXF1ZW5jZSA9IHJlcXVpcmUoJ21pc2Mvc2VxdWVuY2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBRdWl6ID0gKGZ1bmN0aW9uKHN1cGVyQ2xhc3MpIHtcbiAgZXh0ZW5kKFF1aXosIHN1cGVyQ2xhc3MpO1xuXG4gIGZ1bmN0aW9uIFF1aXooJGVsMSwgZGF0YTEpIHtcbiAgICB0aGlzLiRlbCA9ICRlbDE7XG4gICAgdGhpcy5kYXRhID0gZGF0YTE7XG4gICAgdGhpcy5vbk5leHRDbGljayA9IGJpbmQodGhpcy5vbk5leHRDbGljaywgdGhpcyk7XG4gICAgdGhpcy5vblF1ZXN0aW9uQW5zd2VyZWQgPSBiaW5kKHRoaXMub25RdWVzdGlvbkFuc3dlcmVkLCB0aGlzKTtcbiAgICBQdWJTdWIucHVibGlzaChcImNocm9tZS5oaWRlXCIpO1xuICAgIFB1YlN1Yi5wdWJsaXNoKFwiY3RhbmxlZS5oaWRlXCIpO1xuICAgIHRoaXMuYnVpbGQodGhpcy5kYXRhKTtcbiAgICBRdWl6Ll9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsIHRoaXMuJGVsLCB0aGlzLiRub2RlKTtcbiAgfVxuXG4gIFF1aXoucHJvdG90eXBlLmJ1aWxkID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIHRoaXMuJG5vZGUgPSAkKGphZGVUZW1wbGF0ZVsnc2xpZGUtdXgvY29tcG9uZW50cy9xdWl6L3F1aXonXShkYXRhKSk7XG4gICAgdGhpcy5jcmVhdGVRdWl6KCQoXCIucXVlc3Rpb25zXCIsIHRoaXMuJG5vZGUpLCBkYXRhKTtcbiAgICB0aGlzLiRuZXh0QnRuID0gJChcIi5uZXh0LWJ0blwiLCB0aGlzLiRub2RlKTtcbiAgICB0aGlzLiRuZXh0QnRuLm9uKFwiY2xpY2tcIiwgdGhpcy5vbk5leHRDbGljayk7XG4gICAgcmV0dXJuIHRoaXMuaGlkZU5leHQoKTtcbiAgfTtcblxuICBRdWl6LnByb3RvdHlwZS5jcmVhdGVRdWl6ID0gZnVuY3Rpb24oJGVsLCBkYXRhKSB7XG4gICAgdmFyIGksIGosIGxlbjEsIHF1ZXN0aW9uRGF0YSwgcXVlc3Rpb25WYWx1ZSwgcXVlc3Rpb25zLCByZWY7XG4gICAgcXVlc3Rpb25zID0gW107XG4gICAgcXVlc3Rpb25WYWx1ZSA9IDEyMDtcbiAgICByZWYgPSBkYXRhLnF1ZXN0aW9ucztcbiAgICBmb3IgKGkgPSBqID0gMCwgbGVuMSA9IHJlZi5sZW5ndGg7IGogPCBsZW4xOyBpID0gKytqKSB7XG4gICAgICBxdWVzdGlvbkRhdGEgPSByZWZbaV07XG4gICAgICBxdWVzdGlvbkRhdGEuaW5kZXggPSBpO1xuICAgICAgcXVlc3Rpb25zLnB1c2gobmV3IFF1ZXN0aW9uKCRlbCwgcXVlc3Rpb25EYXRhLCBxdWVzdGlvblZhbHVlLCB0aGlzLm9uUXVlc3Rpb25BbnN3ZXJlZCkpO1xuICAgIH1cbiAgICB0aGlzLnF1ZXN0aW9ucyA9IG5ldyBTZXF1ZW5jZShxdWVzdGlvbnMpO1xuICAgIHJldHVybiB0aGlzLnNob3dDdXJyZW50UXVlc3Rpb24oKTtcbiAgfTtcblxuICBRdWl6LnByb3RvdHlwZS5zaG93Q3VycmVudFF1ZXN0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5jdXJyZW50UXVlc3Rpb24gPSB0aGlzLnF1ZXN0aW9ucy5jdXJyZW50SXRlbSgpO1xuICAgIHJldHVybiB0aGlzLmN1cnJlbnRRdWVzdGlvbi5idWlsZCgpO1xuICB9O1xuXG4gIFF1aXoucHJvdG90eXBlLm9uUXVlc3Rpb25BbnN3ZXJlZCA9IGZ1bmN0aW9uKGdvdEl0UmlnaHQpIHtcbiAgICBpZiAoZ290SXRSaWdodCkge1xuICAgICAgcmV0dXJuIHRoaXMuc2hvd05leHQoKTtcbiAgICB9XG4gIH07XG5cbiAgUXVpei5wcm90b3R5cGUub25OZXh0Q2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmhpZGVOZXh0KCk7XG4gICAgdGhpcy5jdXJyZW50UXVlc3Rpb24uZGVzdHJveSgpO1xuICAgIGlmICh0aGlzLnF1ZXN0aW9ucy5pc0F0TGFzdEl0ZW0oKSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2hvd1Jlc3VsdHMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5xdWVzdGlvbnMubmV4dCgpO1xuICAgICAgcmV0dXJuIHRoaXMuc2hvd0N1cnJlbnRRdWVzdGlvbigpO1xuICAgIH1cbiAgfTtcblxuICBRdWl6LnByb3RvdHlwZS5zaG93TmV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRuZXh0QnRuLnJlbW92ZUNsYXNzKFwiaGlkZGVuXCIpO1xuICB9O1xuXG4gIFF1aXoucHJvdG90eXBlLmhpZGVOZXh0ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJG5leHRCdG4uYWRkQ2xhc3MoXCJoaWRkZW5cIik7XG4gIH07XG5cbiAgUXVpei5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLiRub2RlLnJlbW92ZSgpO1xuICAgIHRoaXMuYnVpbGQodGhpcy5kYXRhKTtcbiAgICB0aGlzLiRlbC5hcHBlbmQodGhpcy4kbm9kZSk7XG4gICAgcmV0dXJuIHNoYWRvd0ljb25zSW5zdGFuY2Uuc3ZnUmVwbGFjZVdpdGhTdHJpbmcocHhTdmdJY29uU3RyaW5nLCB0aGlzLiRub2RlKTtcbiAgfTtcblxuICBRdWl6LnByb3RvdHlwZS5zaG93UmVzdWx0cyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBkYXRhO1xuICAgIHRoaXMuJG5vZGUucmVtb3ZlKCk7XG4gICAgZGF0YSA9IHRoaXMuZ2V0UmVzdWx0cygpO1xuICAgIHRoaXMuJG5vZGUgPSAkKGphZGVUZW1wbGF0ZVsnc2xpZGUtdXgvY29tcG9uZW50cy9xdWl6L3F1aXotcmVzdWx0cyddKHRoaXMuZ2V0UmVzdWx0cygpKSk7XG4gICAgc2hhZG93SWNvbnNJbnN0YW5jZS5zdmdSZXBsYWNlV2l0aFN0cmluZyhweFN2Z0ljb25TdHJpbmcsIHRoaXMuJG5vZGUpO1xuICAgICQoXCIjcmV0cnlcIiwgdGhpcy4kbm9kZSkub24oXCJjbGlja1wiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnJlc2V0KCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICAkKFwiI2NvbnRpbnVlXCIsIHRoaXMuJG5vZGUpLm9uKFwiY2xpY2tcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBQdWJTdWIucHVibGlzaCgnc2xpZGVzLm5leHQtc2xpZGUnKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIHJldHVybiB0aGlzLiRlbC5hcHBlbmQodGhpcy4kbm9kZSk7XG4gIH07XG5cbiAgUXVpei5wcm90b3R5cGUuZ2V0UmVzdWx0cyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBhbnN3ZXJzLCBqLCBsZW4xLCBvYmosIHF1ZXN0aW9uLCByZWYsIHJlZjEsIHRvdGFsUG9pbnRzRWFybmVkLCB0b3RhbFBvaW50c1Bvc3NpYmxlO1xuICAgIG9iaiA9IHt9O1xuICAgIG9iai5lcGlzb2RlTnVtYmVyID0gMjtcbiAgICB0b3RhbFBvaW50c1Bvc3NpYmxlID0gMDtcbiAgICB0b3RhbFBvaW50c0Vhcm5lZCA9IDA7XG4gICAgYW5zd2VycyA9IFtdO1xuICAgIHJlZiA9IHRoaXMucXVlc3Rpb25zLml0ZW1zO1xuICAgIGZvciAoaiA9IDAsIGxlbjEgPSByZWYubGVuZ3RoOyBqIDwgbGVuMTsgaisrKSB7XG4gICAgICBxdWVzdGlvbiA9IHJlZltqXTtcbiAgICAgIHRvdGFsUG9pbnRzUG9zc2libGUgKz0gcXVlc3Rpb24ucXVlc3Rpb25WYWx1ZTtcbiAgICAgIHRvdGFsUG9pbnRzRWFybmVkICs9IHF1ZXN0aW9uLnBvaW50c0Vhcm5lZCgpO1xuICAgICAgYW5zd2Vycy5wdXNoKHtcbiAgICAgICAgbmFtZTogcXVlc3Rpb24uZ2V0TmFtZSgpLFxuICAgICAgICBzY29yZTogcXVlc3Rpb24uZ2V0U2NvcmUoKSxcbiAgICAgICAgaXNQZXJmZWN0OiBxdWVzdGlvbi5pc1BlcmZlY3QoKVxuICAgICAgfSk7XG4gICAgfVxuICAgIHJlZjEgPSB0aGlzLnNwbGl0QXJyYXlJbkhhbGYoYW5zd2VycyksIG9iai5hbnN3ZXJzMSA9IHJlZjFbMF0sIG9iai5hbnN3ZXJzMiA9IHJlZjFbMV07XG4gICAgb2JqLnNjb3JlID0gdG90YWxQb2ludHNFYXJuZWQgKyBcIiAvIFwiICsgdG90YWxQb2ludHNQb3NzaWJsZTtcbiAgICBvYmouc2NvcmVQZXJjZW50YWdlID0gKHRvdGFsUG9pbnRzRWFybmVkIC8gdG90YWxQb2ludHNQb3NzaWJsZSkgKiAxMDA7XG4gICAgb2JqLmRlY2lzaW9ucyA9IFtcbiAgICAgIHtcbiAgICAgICAgcG9wdWxhclBlcmNlbnRhZ2U6IDQ5LFxuICAgICAgICBjaG9pY2U6IFwiQ29vbCBidWlsZGluZ1wiLFxuICAgICAgICBjYXRlZ29yeTogXCJQaHlzaWNhbCBBY2Nlc3MgQ29udHJvbCBTeXN0ZW1cIlxuICAgICAgfSwge1xuICAgICAgICBwb3B1bGFyUGVyY2VudGFnZTogNTMsXG4gICAgICAgIGNob2ljZTogXCJEb2cgSG91c2VcIixcbiAgICAgICAgY2F0ZWdvcnk6IFwiUGV0IExvZGdpbmdcIlxuICAgICAgfSwge1xuICAgICAgICBwb3B1bGFyUGVyY2VudGFnZTogMjMsXG4gICAgICAgIGNob2ljZTogXCJIb3NwaXRhbFwiLFxuICAgICAgICBjYXRlZ29yeTogXCJQdWJsaWMgU2VydmljZSBCdWlsZGluZ1wiXG4gICAgICB9XG4gICAgXTtcbiAgICByZXR1cm4gb2JqO1xuICB9O1xuXG4gIFF1aXoucHJvdG90eXBlLnNwbGl0QXJyYXlJbkhhbGYgPSBmdW5jdGlvbihhcikge1xuICAgIHZhciBsZW47XG4gICAgbGVuID0gTWF0aC5jZWlsKGFyLmxlbmd0aCAvIDIpO1xuICAgIHJldHVybiBbYXIuc2xpY2UoMCwgbGVuKSwgYXIuc2xpY2UobGVuKV07XG4gIH07XG5cbiAgcmV0dXJuIFF1aXo7XG5cbn0pKENvbXBvbmVudCk7XG4iLCJ2YXIgQ29tcG9uZW50LCBTZWxlY3Rpb25EaWFsb2d1ZSxcbiAgZXh0ZW5kID0gZnVuY3Rpb24oY2hpbGQsIHBhcmVudCkgeyBmb3IgKHZhciBrZXkgaW4gcGFyZW50KSB7IGlmIChoYXNQcm9wLmNhbGwocGFyZW50LCBrZXkpKSBjaGlsZFtrZXldID0gcGFyZW50W2tleV07IH0gZnVuY3Rpb24gY3RvcigpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGNoaWxkOyB9IGN0b3IucHJvdG90eXBlID0gcGFyZW50LnByb3RvdHlwZTsgY2hpbGQucHJvdG90eXBlID0gbmV3IGN0b3IoKTsgY2hpbGQuX19zdXBlcl9fID0gcGFyZW50LnByb3RvdHlwZTsgcmV0dXJuIGNoaWxkOyB9LFxuICBoYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHk7XG5cbkNvbXBvbmVudCA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvY29tcG9uZW50Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2VsZWN0aW9uRGlhbG9ndWUgPSAoZnVuY3Rpb24oc3VwZXJDbGFzcykge1xuICBleHRlbmQoU2VsZWN0aW9uRGlhbG9ndWUsIHN1cGVyQ2xhc3MpO1xuXG4gIGZ1bmN0aW9uIFNlbGVjdGlvbkRpYWxvZ3VlKCRlbCwgZGF0YSkge1xuICAgIHZhciAkbGVmdCwgJHJpZ2h0LCBqYWRlRGF0YTtcbiAgICBqYWRlRGF0YSA9IHRoaXMuZ2VuZXJhdGVDb25maWdEYXRhKGRhdGEpO1xuICAgIHRoaXMuJG5vZGUgPSAkKGphZGVUZW1wbGF0ZVsnc2xpZGUtdXgvY29tcG9uZW50cy9kaWFsb2d1ZS9zZWxlY3Rpb24tZGlhbG9ndWUnXSgpKTtcbiAgICAkbGVmdCA9ICQoamFkZVRlbXBsYXRlWydzbGlkZS11eC9jb21wb25lbnRzL2RpYWxvZ3VlL2RpYWxvZ3VlLWRldGFpbHMnXShqYWRlRGF0YSkpO1xuICAgICRyaWdodCA9ICQoamFkZVRlbXBsYXRlWydzbGlkZS11eC9jb21wb25lbnRzL2RpYWxvZ3VlL2RpYWxvZ3VlLWJ1dHRvbnMnXShqYWRlRGF0YSkpO1xuICAgIHRoaXMuJG5vZGUuYXBwZW5kKCRsZWZ0KTtcbiAgICB0aGlzLiRub2RlLmFwcGVuZCgkcmlnaHQpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnModGhpcy4kbm9kZSwgZGF0YSk7XG4gICAgU2VsZWN0aW9uRGlhbG9ndWUuX19zdXBlcl9fLmNvbnN0cnVjdG9yLmNhbGwodGhpcywgJGVsLCB0aGlzLiRub2RlLCBkYXRhKTtcbiAgfVxuXG4gIFNlbGVjdGlvbkRpYWxvZ3VlLnByb3RvdHlwZS5nZW5lcmF0ZUNvbmZpZ0RhdGEgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyIGksIGl0ZW0sIGosIGphZGVEYXRhLCBsZW4sIHJlZjtcbiAgICB0aGlzLml0ZW1zID0ge307XG4gICAgamFkZURhdGEgPSB7fTtcbiAgICBqYWRlRGF0YS50aXRsZSA9IGRhdGEudGl0bGU7XG4gICAgamFkZURhdGEuc3ViVGl0bGUgPSBkYXRhLnN1YlRpdGxlO1xuICAgIGphZGVEYXRhLmJ0blR4dCA9IGRhdGEuc3VibWl0QnRuLnR4dDtcbiAgICBqYWRlRGF0YS5idG5JY29uID0gZGF0YS5zdWJtaXRCdG4uaWNvbjtcbiAgICBqYWRlRGF0YS5pbnRybyA9IGRhdGEuaW50cm87XG4gICAgamFkZURhdGEuaXRlbXMgPSBbXTtcbiAgICByZWYgPSBkYXRhLml0ZW1zO1xuICAgIGZvciAoaSA9IGogPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBqIDwgbGVuOyBpID0gKytqKSB7XG4gICAgICBpdGVtID0gcmVmW2ldO1xuICAgICAgaXRlbS5pZCA9IFwiaXRlbVwiICsgaTtcbiAgICAgIGphZGVEYXRhLml0ZW1zLnB1c2goe1xuICAgICAgICB0eHQ6IGl0ZW0uYnRuVHh0LFxuICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgaWNvbjogaXRlbS5pY29uXG4gICAgICB9KTtcbiAgICAgIHRoaXMuaXRlbXNbaXRlbS5pZF0gPSBpdGVtO1xuICAgIH1cbiAgICByZXR1cm4gamFkZURhdGE7XG4gIH07XG5cbiAgU2VsZWN0aW9uRGlhbG9ndWUucHJvdG90eXBlLmFkZEV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24oJGVsLCBkYXRhKSB7XG4gICAgdmFyICRidXR0b25zO1xuICAgICRidXR0b25zID0gJChcIi5idXR0b25cIiwgJGVsKTtcbiAgICAkYnV0dG9ucy5vbihcImNsaWNrXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdmFyICR0YXJnO1xuICAgICAgICAkdGFyZyA9ICQoZS50YXJnZXQpO1xuICAgICAgICByZXR1cm4gX3RoaXMuYWN0aXZhdGVJdGVtKCR0YXJnLCBfdGhpcy5pdGVtc1skdGFyZy5hdHRyKCdpZCcpXSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICByZXR1cm4gJChcIiNhY3Rpb24tYnRuXCIsICRlbCkub24oXCJjbGlja1wiLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICAgIGFyaXN0b3RsZS5jb21tYW5kZXJbXCJkb1wiXShkYXRhLmNsaWNrKTtcbiAgICAgICAgcmV0dXJuIF90aGlzLmRlc3Ryb3koKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICB9O1xuXG4gIFNlbGVjdGlvbkRpYWxvZ3VlLnByb3RvdHlwZS5hY3RpdmF0ZUl0ZW0gPSBmdW5jdGlvbigkYnV0dG9uLCBpdGVtKSB7XG4gICAgJChcIi5pbnRyb1wiLCB0aGlzLiRub2RlKS5jc3Moe1xuICAgICAgZGlzcGxheTogXCJub25lXCJcbiAgICB9KTtcbiAgICAkKFwiLml0ZW0taW5mb1wiLCB0aGlzLiRub2RlKS5jc3Moe1xuICAgICAgZGlzcGxheTogXCJibG9ja1wiXG4gICAgfSk7XG4gICAgJChcIi5idXR0b25cIiwgdGhpcy4kbm9kZSkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgJGJ1dHRvbi5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAkKFwiLmljb25cIiwgdGhpcy4kbm9kZSkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgJChcIiNpY29uLVwiICsgaXRlbS5pZCwgdGhpcy4kbm9kZSkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgJChcIi5ibHVyYlwiLCB0aGlzLiRub2RlKS5odG1sKGl0ZW0uYmx1cmIpO1xuICAgICQoXCIuZGV0YWlsc1wiLCB0aGlzLiRub2RlKS5odG1sKGl0ZW0uZGV0YWlscyk7XG4gICAgcmV0dXJuIGFyaXN0b3RsZS5jb21tYW5kZXJbXCJkb1wiXShpdGVtLmNsaWNrKTtcbiAgfTtcblxuICByZXR1cm4gU2VsZWN0aW9uRGlhbG9ndWU7XG5cbn0pKENvbXBvbmVudCk7XG4iLCJ2YXIgQ29tcG9uZW50LCBTaW1wbGVTZWxlY3Rpb24sXG4gIGV4dGVuZCA9IGZ1bmN0aW9uKGNoaWxkLCBwYXJlbnQpIHsgZm9yICh2YXIga2V5IGluIHBhcmVudCkgeyBpZiAoaGFzUHJvcC5jYWxsKHBhcmVudCwga2V5KSkgY2hpbGRba2V5XSA9IHBhcmVudFtrZXldOyB9IGZ1bmN0aW9uIGN0b3IoKSB7IHRoaXMuY29uc3RydWN0b3IgPSBjaGlsZDsgfSBjdG9yLnByb3RvdHlwZSA9IHBhcmVudC5wcm90b3R5cGU7IGNoaWxkLnByb3RvdHlwZSA9IG5ldyBjdG9yKCk7IGNoaWxkLl9fc3VwZXJfXyA9IHBhcmVudC5wcm90b3R5cGU7IHJldHVybiBjaGlsZDsgfSxcbiAgaGFzUHJvcCA9IHt9Lmhhc093blByb3BlcnR5O1xuXG5Db21wb25lbnQgPSByZXF1aXJlKCdzbGlkZS11eC9jb21wb25lbnRzL2NvbXBvbmVudCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNpbXBsZVNlbGVjdGlvbiA9IChmdW5jdGlvbihzdXBlckNsYXNzKSB7XG4gIGV4dGVuZChTaW1wbGVTZWxlY3Rpb24sIHN1cGVyQ2xhc3MpO1xuXG4gIGZ1bmN0aW9uIFNpbXBsZVNlbGVjdGlvbigkZWwsIGRhdGEpIHtcbiAgICB2YXIgJHJpZ2h0LCBqYWRlRGF0YTtcbiAgICBqYWRlRGF0YSA9IHRoaXMuZ2VuZXJhdGVDb25maWdEYXRhKGRhdGEpO1xuICAgIHRoaXMuJG5vZGUgPSAkKGphZGVUZW1wbGF0ZVsnc2xpZGUtdXgvY29tcG9uZW50cy9kaWFsb2d1ZS9zZWxlY3Rpb24tZGlhbG9ndWUnXSgpKTtcbiAgICAkcmlnaHQgPSAkKGphZGVUZW1wbGF0ZVsnc2xpZGUtdXgvY29tcG9uZW50cy9kaWFsb2d1ZS9kaWFsb2d1ZS1idXR0b25zJ10oamFkZURhdGEpKTtcbiAgICB0aGlzLiRub2RlLmFwcGVuZCgkcmlnaHQpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnModGhpcy4kbm9kZSwgZGF0YSk7XG4gICAgU2ltcGxlU2VsZWN0aW9uLl9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsICRlbCwgdGhpcy4kbm9kZSwgZGF0YSk7XG4gIH1cblxuICBTaW1wbGVTZWxlY3Rpb24ucHJvdG90eXBlLmdlbmVyYXRlQ29uZmlnRGF0YSA9IGZ1bmN0aW9uKGRhdGEpIHtcbiAgICB2YXIgaSwgaXRlbSwgaiwgamFkZURhdGEsIGxlbiwgcmVmO1xuICAgIHRoaXMuaXRlbXMgPSB7fTtcbiAgICBqYWRlRGF0YSA9IHt9O1xuICAgIGphZGVEYXRhLml0ZW1zID0gW107XG4gICAgamFkZURhdGEudGl0bGUgPSBkYXRhLnRpdGxlO1xuICAgIGphZGVEYXRhLnN1YlRpdGxlID0gZGF0YS5zdWJUaXRsZTtcbiAgICByZWYgPSBkYXRhLml0ZW1zO1xuICAgIGZvciAoaSA9IGogPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBqIDwgbGVuOyBpID0gKytqKSB7XG4gICAgICBpdGVtID0gcmVmW2ldO1xuICAgICAgaXRlbS5pZCA9IFwiaXRlbVwiICsgaTtcbiAgICAgIGphZGVEYXRhLml0ZW1zLnB1c2goe1xuICAgICAgICB0eHQ6IGl0ZW0uYnRuVHh0LFxuICAgICAgICBpZDogaXRlbS5pZFxuICAgICAgfSk7XG4gICAgICB0aGlzLml0ZW1zW2l0ZW0uaWRdID0gaXRlbTtcbiAgICB9XG4gICAgcmV0dXJuIGphZGVEYXRhO1xuICB9O1xuXG4gIFNpbXBsZVNlbGVjdGlvbi5wcm90b3R5cGUuYWRkRXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbigkZWwsIGRhdGEpIHtcbiAgICB2YXIgJGJ1dHRvbnM7XG4gICAgJGJ1dHRvbnMgPSAkKFwiLmJ1dHRvblwiLCAkZWwpO1xuICAgIHJldHVybiAkYnV0dG9ucy5vbihcImNsaWNrXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgdmFyICR0YXJnO1xuICAgICAgICAkdGFyZyA9ICQoZS50YXJnZXQpO1xuICAgICAgICBkYXRhID0gX3RoaXMuaXRlbXNbJHRhcmcuYXR0cignaWQnKV07XG4gICAgICAgIHJldHVybiBhcmlzdG90bGUuY29tbWFuZGVyW1wiZG9cIl0oZGF0YS5jbGljayk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgfTtcblxuICByZXR1cm4gU2ltcGxlU2VsZWN0aW9uO1xuXG59KShDb21wb25lbnQpO1xuIiwidmFyIENvbXBvbmVudCwgU291bmRUZXN0LFxuICBleHRlbmQgPSBmdW5jdGlvbihjaGlsZCwgcGFyZW50KSB7IGZvciAodmFyIGtleSBpbiBwYXJlbnQpIHsgaWYgKGhhc1Byb3AuY2FsbChwYXJlbnQsIGtleSkpIGNoaWxkW2tleV0gPSBwYXJlbnRba2V5XTsgfSBmdW5jdGlvbiBjdG9yKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gY2hpbGQ7IH0gY3Rvci5wcm90b3R5cGUgPSBwYXJlbnQucHJvdG90eXBlOyBjaGlsZC5wcm90b3R5cGUgPSBuZXcgY3RvcigpOyBjaGlsZC5fX3N1cGVyX18gPSBwYXJlbnQucHJvdG90eXBlOyByZXR1cm4gY2hpbGQ7IH0sXG4gIGhhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuQ29tcG9uZW50ID0gcmVxdWlyZSgnc2xpZGUtdXgvY29tcG9uZW50cy9jb21wb25lbnQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBTb3VuZFRlc3QgPSAoZnVuY3Rpb24oc3VwZXJDbGFzcykge1xuICBleHRlbmQoU291bmRUZXN0LCBzdXBlckNsYXNzKTtcblxuICBmdW5jdGlvbiBTb3VuZFRlc3QoJGVsLCBkYXRhKSB7XG4gICAgdGhpcy4kbm9kZSA9ICQoamFkZVRlbXBsYXRlWydzbGlkZS11eC9jb21wb25lbnRzL3NvdW5kLXRlc3QnXShkYXRhKSk7XG4gICAgU291bmRUZXN0Ll9fc3VwZXJfXy5jb25zdHJ1Y3Rvci5jYWxsKHRoaXMsICRlbCwgdGhpcy4kbm9kZSwgZGF0YSk7XG4gIH1cblxuICByZXR1cm4gU291bmRUZXN0O1xuXG59KShDb21wb25lbnQpO1xuIiwidmFyIEFuaW1hdGlvbiwgQXVkaW9UcmFjaywgQ3RhbmxlZSwgU2VxdWVuY2U7XG5cbkF1ZGlvVHJhY2sgPSByZXF1aXJlKCdlcGlzb2RlL2F1ZGlvLXRyYWNrJyk7XG5cblNlcXVlbmNlID0gcmVxdWlyZSgnbWlzYy9zZXF1ZW5jZScpO1xuXG5BbmltYXRpb24gPSByZXF1aXJlKCdtb3ZpZS9zdmctYW5pbWF0aW9uJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gQ3RhbmxlZSA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gQ3RhbmxlZSgkcGFyZW50KSB7XG4gICAgYXJpc3RvdGxlLmN0YW5sZWUgPSB0aGlzO1xuICAgIHRoaXMuJGVsID0gJChqYWRlVGVtcGxhdGVbJ3NsaWRlLXV4L2N0YW5sZWUvY3RhbmxlZSddKHt9KSk7XG4gICAgc2hhZG93SWNvbnNJbnN0YW5jZS5zdmdSZXBsYWNlV2l0aFN0cmluZyhweFN2Z0ljb25TdHJpbmcsIHRoaXMuJGVsKTtcbiAgICB0aGlzLiRzcGVlY2hCb3ggPSAkKFwiLnNwZWVjaC1ib3hcIiwgdGhpcy4kZWwpO1xuICAgIHRoaXMuJHRleHQgPSAkKFwiLnRleHRcIiwgdGhpcy4kc3BlZWNoQm94KTtcbiAgICB0aGlzLiR0ZXh0Q29udGVudCA9ICQoXCJzcGFuLmNvbnRlbnRcIiwgdGhpcy4kdGV4dCk7XG4gICAgdGhpcy4kbmV4dEJ0biA9ICQoXCJzcGFuLm5leHRcIiwgdGhpcy4kdGV4dCk7XG4gICAgdGhpcy4kZmFjZUhvbGRlciA9ICQoXCIuZmFjZVwiLCB0aGlzLiRlbCk7XG4gICAgdGhpcy4kbmV4dEJ0bi5vbihcImNsaWNrXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnBsYXlOZXh0QWN0aW9uKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICAkKCdodG1sJykub24oXCJrZXlkb3duXCIsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKGUud2hpY2ggPT09IDM5KSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLnBsYXlOZXh0QWN0aW9uKCk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ2N0YW5sZWUuYWN0aXZhdGUnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihhLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy5wbGF5QWN0aW9uKGRhdGEpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgUHViU3ViLnN1YnNjcmliZSgnY3RhbmxlZS5jbGVhcicsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGEsIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmhpZGVUZXh0KCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCdjdGFubGVlLmdvaG9tZScsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGEsIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnJldHVyblRvU3RhdGlvbigpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgUHViU3ViLnN1YnNjcmliZSgnY3RhbmxlZS5oaWRlJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oYSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuJGVsLmNzcyh7XG4gICAgICAgICAgZGlzcGxheTogXCJub25lXCJcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgICBQdWJTdWIuc3Vic2NyaWJlKCdjdGFubGVlLnNob3cnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihhLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiBfdGhpcy4kZWwuY3NzKHtcbiAgICAgICAgICBkaXNwbGF5OiBcImluaXRpYWxcIlxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ2N0YW5sZWUuYWRkLWV2ZW50LWxpc3RlbmVyJywgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oYSwgZGF0YSkge1xuICAgICAgICByZXR1cm4gX3RoaXMuYWRkRXZlbnRMaXN0ZW5lcihkYXRhKTtcbiAgICAgIH07XG4gICAgfSkodGhpcykpO1xuICAgICRwYXJlbnQuYXBwZW5kKHRoaXMuJGVsKTtcbiAgICB0aGlzLnJldHVyblRvU3RhdGlvbigpO1xuICB9XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUuYWN0aXZhdGUgPSBmdW5jdGlvbihkYXRhMSkge1xuICAgIHRoaXMuZGF0YSA9IGRhdGExO1xuICAgIGlmICh0aGlzLmRhdGEudGltZWxpbmUgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnRpbWVsaW5lID0gdGhpcy5kYXRhLnRpbWVsaW5lO1xuICAgIHRoaXMuc2VxdWVuY2UgPSBuZXcgU2VxdWVuY2UodGhpcy50aW1lbGluZSk7XG4gICAgcmV0dXJuIHRoaXMucGxheUFjdGlvbih0aGlzLnNlcXVlbmNlLmdldEN1cnJlbnRJdGVtKCkuYWN0aW9uKTtcbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5zYXkgPSBmdW5jdGlvbih0ZXh0LCBhdWRpbywgbmV4dCwgdHh0UG9zKSB7XG4gICAgaWYgKHRleHQgIT0gbnVsbCkge1xuICAgICAgdGhpcy5zaG93VGV4dCgpO1xuICAgICAgdGhpcy4kdGV4dENvbnRlbnQuaHRtbCh0ZXh0KTtcbiAgICAgIHRoaXMuc2V0VGV4dFBvc2l0aW9uKHR4dFBvcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGlkZVRleHQoKTtcbiAgICB9XG4gICAgaWYgKGF1ZGlvICE9IG51bGwpIHtcbiAgICAgIGlmICh0aGlzLnRyYWNrICE9IG51bGwpIHtcbiAgICAgICAgdGhpcy50cmFjay5zdG9wKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnRyYWNrID0gbmV3IEF1ZGlvVHJhY2soYXVkaW8pO1xuICAgICAgdGhpcy50cmFjay5wbGF5KChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgaWYgKG5leHQgPT09ICdhdWRpbycpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5wbGF5TmV4dEFjdGlvbigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0pKHRoaXMpKTtcbiAgICB9XG4gICAgaWYgKG5leHQgPT09ICdjbGljaycpIHtcbiAgICAgIHRoaXMuc2hvd05leHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oaWRlTmV4dCgpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG5leHQgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgIHJldHVybiBzZXRUaW1lb3V0KChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIF90aGlzLnBsYXlOZXh0QWN0aW9uKCk7XG4gICAgICAgIH07XG4gICAgICB9KSh0aGlzKSwgbmV4dCk7XG4gICAgfVxuICB9O1xuXG4gIEN0YW5sZWUucHJvdG90eXBlLnNldEVtb3Rpb24gPSBmdW5jdGlvbihlbW90aW9uKSB7XG4gICAgdmFyIGRhdGEsIHBhdGgsIHJlc2V0RHVyYXRpb247XG4gICAgcmVzZXREdXJhdGlvbiA9IDEwMDtcbiAgICB0aGlzLnJlc2V0Um90YXRpb24ocmVzZXREdXJhdGlvbik7XG4gICAgdGhpcy4kb2xkQW5pbWF0aW9uID0gdGhpcy4kY3VycmVudEFuaW1hdGlvbjtcbiAgICB0aGlzLiRjdXJyZW50QW5pbWF0aW9uID0gJCgnPGRpdiBjbGFzcz1cImFuaW1hdGlvblwiLz4nKTtcbiAgICB0aGlzLiRmYWNlSG9sZGVyLmFwcGVuZCh0aGlzLiRjdXJyZW50QW5pbWF0aW9uKTtcbiAgICBzd2l0Y2ggKGVtb3Rpb24pIHtcbiAgICAgIGNhc2UgXCJhbmdyeVwiOlxuICAgICAgICBwYXRoID0gJ2N0YW5sZWUtYW5ncnkuanNvbic7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImhhcHB5XCI6XG4gICAgICAgIHBhdGggPSAnY3RhbmxlZS1oYXBweS5qc29uJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiaWRsZVwiOlxuICAgICAgICBwYXRoID0gJ2N0YW5sZWUtaWRsZS5qc29uJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiZG93blwiOlxuICAgICAgICBwYXRoID0gJ2N0YW5sZWUtZG93bi5qc29uJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwibGVmdFwiOlxuICAgICAgICBwYXRoID0gJ2N0YW5sZWUtbGVmdC5qc29uJztcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgICAgcGF0aCA9ICdjdGFubGVlLXJpZ2h0Lmpzb24nO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJzdXJwcmlzZVwiOlxuICAgICAgICBwYXRoID0gJ2N0YW5sZWUtc3VycHJpc2UuanNvbic7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInVuaGFwcHlcIjpcbiAgICAgICAgcGF0aCA9ICdjdGFubGVlLXVuaGFwcHkuanNvbic7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgaWYgKHRoaXMuJG9sZEFuaW1hdGlvbiA9PSBudWxsKSB7XG4gICAgICAgICAgcGF0aCA9ICdjdGFubGVlLWhhcHB5Lmpzb24nO1xuICAgICAgICB9XG4gICAgfVxuICAgIHBhdGggPSBhcmlzdG90bGUuZ2V0QXNzZXRQYXRoKFwifmcvY3RhbmxlZS9cIiArIHBhdGgpO1xuICAgIHRoaXMub2xkQW5pbWF0aW9uID0gdGhpcy5hbmltYXRpb247XG4gICAgZGF0YSA9IHtcbiAgICAgIGRlbGF5OiByZXNldER1cmF0aW9uLFxuICAgICAgbmF0aXZlRXZlbnRzOiB7XG4gICAgICAgIGRhdGFfcmVhZHk6IChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5kZXN0cm95T2xkRmFjZSgpO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pKHRoaXMpLFxuICAgICAgICBjb21wbGV0ZTogKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmlkbGUoKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KSh0aGlzKVxuICAgICAgfVxuICAgIH07XG4gICAgcmV0dXJuIHRoaXMuYW5pbWF0aW9uID0gbmV3IEFuaW1hdGlvbih0aGlzLiRjdXJyZW50QW5pbWF0aW9uLCBwYXRoLCBkYXRhKTtcbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5kZXN0cm95T2xkRmFjZSA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLm9sZEFuaW1hdGlvbiAhPSBudWxsKSB7XG4gICAgICB0aGlzLm9sZEFuaW1hdGlvbi5kZXN0cm95KCk7XG4gICAgICByZXR1cm4gdGhpcy4kb2xkQW5pbWF0aW9uLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5yZXNldFJvdGF0aW9uID0gZnVuY3Rpb24odGltZSkge1xuICAgIGlmICh0aW1lID09IG51bGwpIHtcbiAgICAgIHRpbWUgPSAxMDA7XG4gICAgfVxuICAgIHRoaXMuJGZhY2VIb2xkZXIudmVsb2NpdHkoXCJzdG9wXCIsIHRydWUpO1xuICAgIHJldHVybiB0aGlzLiRmYWNlSG9sZGVyLnZlbG9jaXR5KHtcbiAgICAgIHJvdGF0ZVo6IDBcbiAgICB9LCB7XG4gICAgICBkdXJhdGlvbjogdGltZVxuICAgIH0pO1xuICB9O1xuXG4gIEN0YW5sZWUucHJvdG90eXBlLmlkbGUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kZmFjZUhvbGRlci52ZWxvY2l0eSh7XG4gICAgICByb3RhdGVaOiAzNjBcbiAgICB9LCB7XG4gICAgICBkdXJhdGlvbjogMTAwMDAsXG4gICAgICBsb29wOiB0cnVlLFxuICAgICAgZWFzaW5nOiAnbGluZWFyJ1xuICAgIH0pO1xuICB9O1xuXG4gIEN0YW5sZWUucHJvdG90eXBlLmdvdG9Qb3MgPSBmdW5jdGlvbih4LCB5LCBkdXJhdGlvbiwgZGVsYXkpIHtcbiAgICBpZiAoeCA9PSBudWxsKSB7XG4gICAgICB4ID0gOTg4O1xuICAgIH1cbiAgICBpZiAoeSA9PSBudWxsKSB7XG4gICAgICB5ID0gMzQ7XG4gICAgfVxuICAgIGlmIChkdXJhdGlvbiA9PSBudWxsKSB7XG4gICAgICBkdXJhdGlvbiA9IDYwMDtcbiAgICB9XG4gICAgaWYgKGRlbGF5ID09IG51bGwpIHtcbiAgICAgIGRlbGF5ID0gMDtcbiAgICB9XG4gICAgdGhpcy4kZWwudmVsb2NpdHkoXCJzdG9wXCIsIHRydWUpO1xuICAgIHJldHVybiB0aGlzLiRlbC52ZWxvY2l0eSh7XG4gICAgICB0b3A6IHksXG4gICAgICBsZWZ0OiB4XG4gICAgfSwge1xuICAgICAgZGVsYXk6IGRlbGF5LFxuICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgZWFzaW5nOiBcImVhc2VJbk91dFF1aW50XCJcbiAgICB9KTtcbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5nb3RvSXRlbSA9IGZ1bmN0aW9uKGlkKSB7XG4gICAgdmFyIHBvcztcbiAgICBwb3MgPSBhcmlzdG90bGUubW92aWUuZ2V0R2xvYmFsUG9zKGlkKTtcbiAgICBpZiAocG9zID09PSBudWxsKSB7XG4gICAgICBhcmlzdG90bGVbXCJ0aHJvd1wiXShcImN0YW5sZWUgd2FudHMgdG8gaG92ZXIgYnkgYFwiICsgaWQgKyBcImAsIGJ1dCBpcyB1bmFibGUgdG8gZmluZCBhbiBpdGVtIHdpdGggdGhlIGlkIFwiICsgaWQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBwb3MueCArPSAwO1xuICAgIHBvcy55ICs9IDA7XG4gICAgcmV0dXJuIHRoaXMuZ290b1Bvcyhwb3MueCwgcG9zLnkpO1xuICB9O1xuXG4gIEN0YW5sZWUucHJvdG90eXBlLmdvdG8gPSBmdW5jdGlvbihhY3Rpb24pIHtcbiAgICB2YXIgbWU7XG4gICAgaWYgKHR5cGVvZiBhY3Rpb24ucG9zID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBpZiAoYWN0aW9uLmRlbGF5TW92ZSAhPSBudWxsKSB7XG4gICAgICAgIG1lID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIG1lLmdvdG9JdGVtKGFjdGlvbi5wb3MsIGFjdGlvbi5kZWxheU1vdmUpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdvdG9JdGVtKGFjdGlvbi5wb3MpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5nb3RvUG9zKGFjdGlvbi5wb3NbMF0sIGFjdGlvbi5wb3NbMV0sIGFjdGlvbi5wb3NbMl0sIGFjdGlvbi5wb3NbM10pO1xuICAgIH1cbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24oZGF0YSkge1xuICAgIGlmIChkYXRhLmV2ZW50ID09PSAnY29tcGxldGUnKSB7XG4gICAgICByZXR1cm4gdGhpcy50cmFjay5hZGRPbkNvbXBsZXRlKChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGFyaXN0b3RsZS5jb21tYW5kZXJbXCJkb1wiXShkYXRhLmFjdGlvbik7XG4gICAgICAgIH07XG4gICAgICB9KSh0aGlzKSk7XG4gICAgfVxuICB9O1xuXG4gIEN0YW5sZWUucHJvdG90eXBlLnBsYXlOZXh0QWN0aW9uID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMudHJhY2sgIT0gbnVsbCkge1xuICAgICAgdGhpcy50cmFjay5zdG9wKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLnNlcXVlbmNlLmlzQXRMYXN0SXRlbSgpKSB7XG4gICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlcXVlbmNlLm5leHQoKTtcbiAgICAgIHJldHVybiB0aGlzLnBsYXlBY3Rpb24odGhpcy5zZXF1ZW5jZS5nZXRDdXJyZW50SXRlbSgpLmFjdGlvbik7XG4gICAgfVxuICB9O1xuXG4gIEN0YW5sZWUucHJvdG90eXBlLnBsYXlBY3Rpb24gPSBmdW5jdGlvbihhY3Rpb25JZCkge1xuICAgIHZhciBhY3Rpb247XG4gICAgaWYgKHRoaXMuZGF0YS5hY3Rpb25zW2FjdGlvbklkXSA9PSBudWxsKSB7XG4gICAgICBhcmlzdG90bGVbXCJ0aHJvd1wiXShcImN0YW5sZWUgd2FzIGFza2VkIHRvIHBsYXkgdGhlIGFjdGlvbiBuYW1lZCBgXCIgKyBhY3Rpb25JZCArIFwiYCwgYnV0IG5vIGFjdGlvbiB3aXRoIHRoYXQgaWQgZXhpc3RzLlwiKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZXRGaWx0ZXIoJ2JsYWNrLWdsb3cnKTtcbiAgICBhY3Rpb24gPSB0aGlzLm92ZXJsYXlEZWZhdWx0cyhhY3Rpb25JZCk7XG4gICAgaWYgKGFjdGlvbi5hY3Rpb24gIT0gbnVsbCkge1xuICAgICAgYXJpc3RvdGxlLmNvbW1hbmRlcltcImRvXCJdKGFjdGlvbi5hY3Rpb24pO1xuICAgIH1cbiAgICBpZiAoKGFjdGlvbi5lbW8gIT0gbnVsbCkgfHwgKHRoaXMuJGN1cnJlbnRBbmltYXRpb24gPT0gbnVsbCkpIHtcbiAgICAgIHRoaXMuc2V0RW1vdGlvbihhY3Rpb24uZW1vKTtcbiAgICB9XG4gICAgaWYgKGFjdGlvbi5wb3MgIT0gbnVsbCkge1xuICAgICAgdGhpcy5nb3RvKGFjdGlvbik7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnNheShhY3Rpb24udGV4dCwgYWN0aW9uLmF1ZGlvLCBhY3Rpb24ubmV4dCwgYWN0aW9uLnR4dFBvcyk7XG4gIH07XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUuY29tcGxldGUgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnJldHVyblRvU3RhdGlvbigpO1xuICAgIHJldHVybiBQdWJTdWIucHVibGlzaCgnY3RhbmxlZS5jb21wbGV0ZScpO1xuICB9O1xuXG4gIEN0YW5sZWUucHJvdG90eXBlLnJldHVyblRvU3RhdGlvbiA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuaGlkZVRleHQoKTtcbiAgICB0aGlzLmdvdG9Qb3MoKTtcbiAgICByZXR1cm4gdGhpcy5zZXRGaWx0ZXIoJ2dsb3cnKTtcbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5zaG93VGV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRzcGVlY2hCb3guY3NzKHtcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBcInBvaW50ZXItZXZlbnRzXCI6IFwiYWxsXCJcbiAgICB9KTtcbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5oaWRlVGV4dCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLiRzcGVlY2hCb3guY3NzKHtcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICBcInBvaW50ZXItZXZlbnRzXCI6IFwibm9uZVwiXG4gICAgfSk7XG4gIH07XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUuc2hvd05leHQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kbmV4dEJ0bi5jc3Moe1xuICAgICAgb3BhY2l0eTogMSxcbiAgICAgICdwb2ludGVyLWV2ZW50cyc6ICdhbGwnXG4gICAgfSk7XG4gIH07XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUuaGlkZU5leHQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kbmV4dEJ0bi5jc3Moe1xuICAgICAgb3BhY2l0eTogMCxcbiAgICAgICdwb2ludGVyLWV2ZW50cyc6ICdub25lJ1xuICAgIH0pO1xuICB9O1xuXG4gIEN0YW5sZWUucHJvdG90eXBlLnNldEZpbHRlciA9IGZ1bmN0aW9uKGtpbmQpIHtcbiAgICByZXR1cm4gJCgnI2N0YW5sZWUnKS5jc3Moe1xuICAgICAgZmlsdGVyOiBcInVybCgnI1wiICsga2luZCArIFwiJylcIlxuICAgIH0pO1xuICB9O1xuXG4gIEN0YW5sZWUucHJvdG90eXBlLmdldEluZGV4T2ZBY3Rpb24gPSBmdW5jdGlvbihhY3Rpb24pIHtcbiAgICB2YXIgZGF0YSwgaSwgaiwgbGVuLCByZWY7XG4gICAgaWYgKHRoaXMudGltZWxpbmUgPT0gbnVsbCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIHJlZiA9IHRoaXMudGltZWxpbmU7XG4gICAgZm9yIChpID0gaiA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGogPCBsZW47IGkgPSArK2opIHtcbiAgICAgIGRhdGEgPSByZWZbaV07XG4gICAgICBpZiAoZGF0YS5hY3Rpb24gPT09IGFjdGlvbikge1xuICAgICAgICByZXR1cm4gaTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgQ3RhbmxlZS5wcm90b3R5cGUub3ZlcmxheURlZmF1bHRzID0gZnVuY3Rpb24oYWN0aW9uSWQpIHtcbiAgICB2YXIgYWN0aW9ucywga2V5LCByZWYsIHZhbDtcbiAgICBpZiAodGhpcy5kYXRhLmRlZmF1bHRzID09IG51bGwpIHtcbiAgICAgIHJldHVybiB0aGlzLmRhdGEuYWN0aW9uc1thY3Rpb25JZF07XG4gICAgfVxuICAgIGFjdGlvbnMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuZGF0YS5kZWZhdWx0cykpO1xuICAgIHJlZiA9IHRoaXMuZGF0YS5hY3Rpb25zW2FjdGlvbklkXTtcbiAgICBmb3IgKGtleSBpbiByZWYpIHtcbiAgICAgIHZhbCA9IHJlZltrZXldO1xuICAgICAgYWN0aW9uc1trZXldID0gdmFsO1xuICAgIH1cbiAgICByZXR1cm4gYWN0aW9ucztcbiAgfTtcblxuICBDdGFubGVlLnByb3RvdHlwZS5zZXRUZXh0UG9zaXRpb24gPSBmdW5jdGlvbihwb3MpIHtcbiAgICB2YXIgaXRlbSwgaiwgbGVuLCByZXN1bHRzO1xuICAgIHRoaXMuJHRleHQucmVtb3ZlQ2xhc3MoXCJ0b3AgbGVmdFwiKTtcbiAgICBpZiAocG9zID09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocG9zKSkge1xuICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgZm9yIChqID0gMCwgbGVuID0gcG9zLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XG4gICAgICAgIGl0ZW0gPSBwb3Nbal07XG4gICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLiR0ZXh0LmFkZENsYXNzKGl0ZW0pKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy4kdGV4dC5hZGRDbGFzcyhwb3MpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gQ3RhbmxlZTtcblxufSkoKTtcbiIsInZhciBHZW5lcmljVWk7XG5cbm1vZHVsZS5leHBvcnRzID0gR2VuZXJpY1VpID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBHZW5lcmljVWkoJGVsKSB7XG4gICAgdmFyICRub2RlO1xuICAgICRub2RlID0gJChqYWRlVGVtcGxhdGVbJ21pc2MvZ2VuZXJpYy11aSddKHt9KSk7XG4gICAgc2hhZG93SWNvbnNJbnN0YW5jZS5zdmdSZXBsYWNlV2l0aFN0cmluZyhweFN2Z0ljb25TdHJpbmcsICRub2RlKTtcbiAgICB0aGlzLiRjb250aW51ZVN0cmlwID0gJChcIi5jb250aW51ZS1zdHJpcFwiLCAkbm9kZSk7XG4gICAgJChcIi5jb250aW51ZS1idG5cIiwgJG5vZGUpLm9uKFwiY2xpY2tcIiwgKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIFB1YlN1Yi5wdWJsaXNoKFwic2xpZGVzLm5leHQtc2xpZGVcIik7XG4gICAgICAgIHJldHVybiBfdGhpcy5oaWRlQ29udGludWVTdHJpcCgpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKSk7XG4gICAgdGhpcy5oaWRlQ29udGludWVTdHJpcCgpO1xuICAgICRlbC5hcHBlbmQoJG5vZGUpO1xuICAgIFB1YlN1Yi5zdWJzY3JpYmUoJ2NvbnRpbnVlLnNob3cnLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLnNob3dDb250aW51ZVN0cmlwKCk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpKTtcbiAgfVxuXG4gIEdlbmVyaWNVaS5wcm90b3R5cGUuc2hvd0NvbnRpbnVlU3RyaXAgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy4kY29udGludWVTdHJpcC5jc3Moe1xuICAgICAgZGlzcGxheTogXCJpbml0aWFsXCJcbiAgICB9KTtcbiAgfTtcblxuICBHZW5lcmljVWkucHJvdG90eXBlLmhpZGVDb250aW51ZVN0cmlwID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuJGNvbnRpbnVlU3RyaXAuY3NzKHtcbiAgICAgIGRpc3BsYXk6IFwibm9uZVwiXG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIEdlbmVyaWNVaTtcblxufSkoKTtcbiIsInZhciBDYWxsU2lnblNlbGVjdCwgQ3RhbmxlZSwgRGVmZW5kZXJDYXJkcywgRGlhbG9ndWUsIERpYWxvZ3VlUGFnZSwgRHV0aWVzLCBFcGlzb2RlSW50cm8sIEVwaXNvZGVPdXRybywgRXhwbG9yZUNhcmRzLCBHZW5lcmljVWlFbGVtZW50cywgR2hvc3RVWCwgUGVyc29uYWxJbmZvSW50cm8sIFF1aXosIFNlbGVjdGlvbkRpYWxvZ3VlLCBTaW1wbGVTZWxlY3Rpb24sIFNsaWRlVVgsIFNvdW5kVGVzdDtcblxuQ2FsbFNpZ25TZWxlY3QgPSByZXF1aXJlKCdzbGlkZS11eC9jb21wb25lbnRzL2NhbGwtc2lnbi1zZWxlY3QnKTtcblxuQ3RhbmxlZSA9IHJlcXVpcmUoJ3NsaWRlLXV4L2N0YW5sZWUvQ3RhbmxlZScpO1xuXG5EZWZlbmRlckNhcmRzID0gcmVxdWlyZSgnc2xpZGUtdXgvY29tcG9uZW50cy9kZWZlbmRlci1jYXJkcycpO1xuXG5EaWFsb2d1ZSA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvZGlhbG9ndWUnKTtcblxuRGlhbG9ndWVQYWdlID0gcmVxdWlyZSgnc2xpZGUtdXgvY29tcG9uZW50cy9kaWFsb2d1ZS1wYWdlJyk7XG5cbkR1dGllcyA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvZHV0aWVzJyk7XG5cbkVwaXNvZGVJbnRybyA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvZXBpc29kZS1pbnRybycpO1xuXG5FcGlzb2RlT3V0cm8gPSByZXF1aXJlKCdzbGlkZS11eC9jb21wb25lbnRzL2VwaXNvZGUtb3V0cm8nKTtcblxuRXhwbG9yZUNhcmRzID0gcmVxdWlyZSgnc2xpZGUtdXgvY29tcG9uZW50cy9leHBsb3JlLWNhcmRzJyk7XG5cbkdob3N0VVggPSByZXF1aXJlKCdzbGlkZS11eC9jb21wb25lbnRzL2dob3N0LXV4Jyk7XG5cblBlcnNvbmFsSW5mb0ludHJvID0gcmVxdWlyZSgnc2xpZGUtdXgvY29tcG9uZW50cy9wZXJzb25hbC1pbmZvLWludHJvJyk7XG5cblF1aXogPSByZXF1aXJlKCdzbGlkZS11eC9jb21wb25lbnRzL3F1aXovcXVpeicpO1xuXG5TZWxlY3Rpb25EaWFsb2d1ZSA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvc2VsZWN0aW9uLWRpYWxvZ3VlJyk7XG5cblNpbXBsZVNlbGVjdGlvbiA9IHJlcXVpcmUoJ3NsaWRlLXV4L2NvbXBvbmVudHMvc2ltcGxlLXNlbGVjdGlvbicpO1xuXG5Tb3VuZFRlc3QgPSByZXF1aXJlKCdzbGlkZS11eC9jb21wb25lbnRzL3NvdW5kLXRlc3QnKTtcblxuR2VuZXJpY1VpRWxlbWVudHMgPSByZXF1aXJlKCdzbGlkZS11eC9nZW5lcmljLXVpJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gU2xpZGVVWCA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gU2xpZGVVWCgkZWwpIHtcbiAgICB0aGlzLiRlbCA9ICRlbDtcbiAgICB0aGlzLmNvbXBvbmVudHMgPSBbXTtcbiAgICB0aGlzLmN0YW5sZWUgPSBuZXcgQ3RhbmxlZSh0aGlzLiRlbCk7XG4gICAgdGhpcy5nZW5lcmljVWkgPSBuZXcgR2VuZXJpY1VpRWxlbWVudHModGhpcy4kZWwpO1xuICB9XG5cbiAgU2xpZGVVWC5wcm90b3R5cGUucG9wdWxhdGUgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgdmFyIGNvbXBvbmVudCwgaSwgbGVuLCByZWYsIHJlc3VsdHM7XG4gICAgdGhpcy5yZW1vdmVDdXJyZW50Q29tcG9uZW50cygpO1xuICAgIHRoaXMuY29tcG9uZW50cyA9IFtdO1xuICAgIGlmICgoZGF0YSAhPSBudWxsID8gZGF0YS5jb21wb25lbnRzIDogdm9pZCAwKSA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJlZiA9IGRhdGEuY29tcG9uZW50cztcbiAgICByZXN1bHRzID0gW107XG4gICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICBjb21wb25lbnQgPSByZWZbaV07XG4gICAgICByZXN1bHRzLnB1c2godGhpcy5jb21wb25lbnRzLnB1c2godGhpcy5hZGRDb21wb25lbnQoY29tcG9uZW50KSkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICBTbGlkZVVYLnByb3RvdHlwZS5hZGRDb21wb25lbnQgPSBmdW5jdGlvbihjb21wb25lbnREYXRhKSB7XG4gICAgdmFyIGNvbXBvbmVudDtcbiAgICBzd2l0Y2ggKGNvbXBvbmVudERhdGEua2luZCkge1xuICAgICAgY2FzZSBcImNhbGwtc2lnbi1zZWxlY3RcIjpcbiAgICAgICAgY29tcG9uZW50ID0gbmV3IENhbGxTaWduU2VsZWN0KHRoaXMuJGVsLCBjb21wb25lbnREYXRhLmNvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImRlZmVuZGVyLWNhcmRzXCI6XG4gICAgICAgIGNvbXBvbmVudCA9IG5ldyBEZWZlbmRlckNhcmRzKHRoaXMuJGVsLCBjb21wb25lbnREYXRhLmNvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImRpYWxvZ3VlXCI6XG4gICAgICAgIGNvbXBvbmVudCA9IG5ldyBEaWFsb2d1ZSh0aGlzLiRlbCwgY29tcG9uZW50RGF0YS5jb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJkdXRpZXNcIjpcbiAgICAgICAgY29tcG9uZW50ID0gbmV3IER1dGllcyh0aGlzLiRlbCwgY29tcG9uZW50RGF0YS5jb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJkaWFsb2d1ZS1wYWdlXCI6XG4gICAgICAgIGNvbXBvbmVudCA9IG5ldyBEaWFsb2d1ZVBhZ2UodGhpcy4kZWwsIGNvbXBvbmVudERhdGEuY29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiZXBpc29kZS1pbnRyb1wiOlxuICAgICAgICBjb21wb25lbnQgPSBuZXcgRXBpc29kZUludHJvKHRoaXMuJGVsLCBjb21wb25lbnREYXRhLmNvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImVwaXNvZGUtb3V0cm9cIjpcbiAgICAgICAgY29tcG9uZW50ID0gbmV3IEVwaXNvZGVPdXRybyh0aGlzLiRlbCwgY29tcG9uZW50RGF0YS5jb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJleHBsb3JlLWNhcmRzXCI6XG4gICAgICAgIGNvbXBvbmVudCA9IG5ldyBFeHBsb3JlQ2FyZHModGhpcy4kZWwsIGNvbXBvbmVudERhdGEuY29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiZ2hvc3QtdXhcIjpcbiAgICAgICAgY29tcG9uZW50ID0gbmV3IEdob3N0VVgodGhpcy4kZWwsIGNvbXBvbmVudERhdGEuY29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwicGVyc29uYWwtaW5mby1pbnRyb1wiOlxuICAgICAgICBjb21wb25lbnQgPSBuZXcgUGVyc29uYWxJbmZvSW50cm8odGhpcy4kZWwsIGNvbXBvbmVudERhdGEuY29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwic2VsZWN0aW9uLWRpYWxvZ3VlXCI6XG4gICAgICAgIGNvbXBvbmVudCA9IG5ldyBTZWxlY3Rpb25EaWFsb2d1ZSh0aGlzLiRlbCwgY29tcG9uZW50RGF0YS5jb25maWcpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJzaW1wbGUtc2VsZWN0aW9uXCI6XG4gICAgICAgIGNvbXBvbmVudCA9IG5ldyBTaW1wbGVTZWxlY3Rpb24odGhpcy4kZWwsIGNvbXBvbmVudERhdGEuY29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwic291bmQtdGVzdFwiOlxuICAgICAgICBjb21wb25lbnQgPSBuZXcgU291bmRUZXN0KHRoaXMuJGVsLCBjb21wb25lbnREYXRhLmNvbmZpZyk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInF1aXpcIjpcbiAgICAgICAgY29tcG9uZW50ID0gbmV3IFF1aXoodGhpcy4kZWwsIGNvbXBvbmVudERhdGEuY29uZmlnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBhcmlzdG90bGVbXCJ0aHJvd1wiXShcInRyaWVkIHRvIGNyZWF0ZSBhbiB1bnJlY29nbml6ZWQgY29tcG9uZW50IHR5cGU6IGBcIiArIGNvbXBvbmVudERhdGEua2luZCArIFwiYFwiKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjb21wb25lbnQ7XG4gIH07XG5cbiAgU2xpZGVVWC5wcm90b3R5cGUucmVtb3ZlQ3VycmVudENvbXBvbmVudHMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgY29tcG9uZW50LCBpLCBsZW4sIHJlZiwgcmVzdWx0cztcbiAgICByZWYgPSB0aGlzLmNvbXBvbmVudHM7XG4gICAgcmVzdWx0cyA9IFtdO1xuICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgY29tcG9uZW50ID0gcmVmW2ldO1xuICAgICAgcmVzdWx0cy5wdXNoKGNvbXBvbmVudC5kZXN0cm95KCkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0cztcbiAgfTtcblxuICByZXR1cm4gU2xpZGVVWDtcblxufSkoKTtcbiJdfQ==

var aristotle, cache, episode, getQueryVariable, userSpecifiedEpisode;

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

cache = getQueryVariable('cache');

episode = !userSpecifiedEpisode ? "episode2" : "" + userSpecifiedEpisode;

switch (episode) {
  case "episode1":
    episode = "1";
    break;
  case "episode2":
    episode = "2";
    break;
  case "episode3":
    episode = "3";
    break;
  case "episode4":
    episode = "4";
    break;
  case "episode5":
    episode = "5";
    break;
  case "episode6":
    episode = "6";
    break;
  case "episode7":
    episode = "7";
}

aristotle = new Aristotle($(".holder"), "/episodes", "/local", episode);

if (cache === "false") {
  aristotle.dontCache = true;
}
