var pipwerks={};pipwerks.UTILS={},pipwerks.debug={isActive:!0},pipwerks.SCORM={version:null,handleCompletionStatus:!0,handleExitMode:!0,API:{handle:null,isFound:!1},connection:{isActive:!1},data:{completionStatus:null,exitStatus:null},debug:{}},pipwerks.SCORM.isAvailable=function(){return!0},pipwerks.SCORM.API.find=function(e){for(var t=null,n=0,r=500,i="SCORM.API.find",o=pipwerks.UTILS.trace,s=pipwerks.SCORM;!e.API&&!e.API_1484_11&&e.parent&&e.parent!=e&&r>=n;)n++,e=e.parent;if(s.version)switch(s.version){case"2004":e.API_1484_11?t=e.API_1484_11:o(i+": SCORM version 2004 was specified by user, but API_1484_11 cannot be found.");break;case"1.2":e.API?t=e.API:o(i+": SCORM version 1.2 was specified by user, but API cannot be found.")}else e.API_1484_11?(s.version="2004",t=e.API_1484_11):e.API&&(s.version="1.2",t=e.API);return t?(o(i+": API found. Version: "+s.version),o("API: "+t)):o(i+": Error finding API. \nFind attempts: "+n+". \nFind attempt limit: "+r),t},pipwerks.SCORM.API.get=function(){var e=null,t=window,n=pipwerks.SCORM,r=n.API.find,i=pipwerks.UTILS.trace;return e=r(t),!e&&t.parent&&t.parent!=t&&(e=r(t.parent)),!e&&t.top&&t.top.opener&&(e=r(t.top.opener)),!e&&t.top&&t.top.opener&&t.top.opener.document&&(e=r(t.top.opener.document)),e?n.API.isFound=!0:i("API.get failed: Can't find the API!"),e},pipwerks.SCORM.API.getHandle=function(){var e=pipwerks.SCORM.API;return e.handle||e.isFound||(e.handle=e.get()),e.handle},pipwerks.SCORM.connection.initialize=function(){var e=!1,t=pipwerks.SCORM,n=t.data.completionStatus,r=pipwerks.UTILS.trace,i=pipwerks.UTILS.StringToBoolean,o=t.debug,s="SCORM.connection.initialize ";if(r("connection.initialize called."),t.connection.isActive)r(s+"aborted: Connection already active.");else{var a=t.API.getHandle(),c=0;if(a){switch(t.version){case"1.2":e=i(a.LMSInitialize(""));break;case"2004":e=i(a.Initialize(""))}if(e)if(c=o.getCode(),null!==c&&0===c){if(t.connection.isActive=!0,t.handleCompletionStatus&&(n=t.status("get"))){switch(n){case"not attempted":t.status("set","incomplete");break;case"unknown":t.status("set","incomplete")}t.save()}}else e=!1,r(s+"failed. \nError code: "+c+" \nError info: "+o.getInfo(c));else c=o.getCode(),null!==c&&0!==c?r(s+"failed. \nError code: "+c+" \nError info: "+o.getInfo(c)):r(s+"failed: No response from server.")}else r(s+"failed: API is null.")}return e},pipwerks.SCORM.connection.terminate=function(){var e=!1,t=pipwerks.SCORM,n=t.data.exitStatus,r=t.data.completionStatus,i=pipwerks.UTILS.trace,o=pipwerks.UTILS.StringToBoolean,s=t.debug,a="SCORM.connection.terminate ";if(t.connection.isActive){var c=t.API.getHandle(),l=0;if(c){if(t.handleExitMode&&!n)if("completed"!==r&&"passed"!==r)switch(t.version){case"1.2":e=t.set("cmi.core.exit","suspend");break;case"2004":e=t.set("cmi.exit","suspend")}else switch(t.version){case"1.2":e=t.set("cmi.core.exit","logout");break;case"2004":e=t.set("cmi.exit","normal")}if(e=t.save()){switch(t.version){case"1.2":e=o(c.LMSFinish(""));break;case"2004":e=o(c.Terminate(""))}e?t.connection.isActive=!1:(l=s.getCode(),i(a+"failed. \nError code: "+l+" \nError info: "+s.getInfo(l)))}}else i(a+"failed: API is null.")}else i(a+"aborted: Connection already terminated.");return e},pipwerks.SCORM.data.get=function(e){var t=null,n=pipwerks.SCORM,r=pipwerks.UTILS.trace,i=n.debug,o="SCORM.data.get("+e+") ";if(n.connection.isActive){var s=n.API.getHandle(),a=0;if(s){switch(n.version){case"1.2":t=s.LMSGetValue(e);break;case"2004":t=s.GetValue(e)}if(a=i.getCode(),""!==t||0===a)switch(e){case"cmi.core.lesson_status":case"cmi.completion_status":n.data.completionStatus=t;break;case"cmi.core.exit":case"cmi.exit":n.data.exitStatus=t}else r(o+"failed. \nError code: "+a+"\nError info: "+i.getInfo(a))}else r(o+"failed: API is null.")}else r(o+"failed: API connection is inactive.");return r(o+" value: "+t),String(t)},pipwerks.SCORM.data.set=function(e,t){var n=!1,r=pipwerks.SCORM,i=pipwerks.UTILS.trace,o=pipwerks.UTILS.StringToBoolean,s=r.debug,a="SCORM.data.set("+e+") ";if(r.connection.isActive){var c=r.API.getHandle(),l=0;if(c){switch(r.version){case"1.2":n=o(c.LMSSetValue(e,t));break;case"2004":n=o(c.SetValue(e,t))}n?("cmi.core.lesson_status"===e||"cmi.completion_status"===e)&&(r.data.completionStatus=t):(l=s.getCode(),i(a+"failed. \nError code: "+l+". \nError info: "+s.getInfo(l)))}else i(a+"failed: API is null.")}else i(a+"failed: API connection is inactive.");return n},pipwerks.SCORM.data.save=function(){var e=!1,t=pipwerks.SCORM,n=pipwerks.UTILS.trace,r=pipwerks.UTILS.StringToBoolean,i="SCORM.data.save failed";if(t.connection.isActive){var o=t.API.getHandle();if(o)switch(t.version){case"1.2":e=r(o.LMSCommit(""));break;case"2004":e=r(o.Commit(""))}else n(i+": API is null.")}else n(i+": API connection is inactive.");return e},pipwerks.SCORM.status=function(e,t){var n=!1,r=pipwerks.SCORM,i=pipwerks.UTILS.trace,o="SCORM.getStatus failed",s="";if(null!==e){switch(r.version){case"1.2":s="cmi.core.lesson_status";break;case"2004":s="cmi.completion_status"}switch(e){case"get":n=r.data.get(s);break;case"set":null!==t?n=r.data.set(s,t):(n=!1,i(o+": status was not specified."));break;default:n=!1,i(o+": no valid action was specified.")}}else i(o+": action was not specified.");return n},pipwerks.SCORM.debug.getCode=function(){var e=pipwerks.SCORM,t=e.API.getHandle(),n=pipwerks.UTILS.trace,r=0;if(t)switch(e.version){case"1.2":r=parseInt(t.LMSGetLastError(),10);break;case"2004":r=parseInt(t.GetLastError(),10)}else n("SCORM.debug.getCode failed: API is null.");return r},pipwerks.SCORM.debug.getInfo=function(e){var t=pipwerks.SCORM,n=t.API.getHandle(),r=pipwerks.UTILS.trace,i="";if(n)switch(t.version){case"1.2":i=n.LMSGetErrorString(e.toString());break;case"2004":i=n.GetErrorString(e.toString())}else r("SCORM.debug.getInfo failed: API is null.");return String(i)},pipwerks.SCORM.debug.getDiagnosticInfo=function(e){var t=pipwerks.SCORM,n=t.API.getHandle(),r=pipwerks.UTILS.trace,i="";if(n)switch(t.version){case"1.2":i=n.LMSGetDiagnostic(e);break;case"2004":i=n.GetDiagnostic(e)}else r("SCORM.debug.getDiagnosticInfo failed: API is null.");return String(i)},pipwerks.SCORM.init=pipwerks.SCORM.connection.initialize,pipwerks.SCORM.get=pipwerks.SCORM.data.get,pipwerks.SCORM.set=pipwerks.SCORM.data.set,pipwerks.SCORM.save=pipwerks.SCORM.data.save,pipwerks.SCORM.quit=pipwerks.SCORM.connection.terminate,pipwerks.UTILS.StringToBoolean=function(e){var t=typeof e;switch(t){case"object":case"string":return/(true|1)/i.test(e);case"number":return!!e;case"boolean":return e;case"undefined":return null;default:return!1}},pipwerks.UTILS.trace=function(e){pipwerks.debug.isActive&&window.console&&window.console.log&&window.console.log(e)};var scorm=pipwerks.SCORM,lmsConnected=!1,elbScorm={};elbScorm.GetUserName=function(){return scorm.get("cmi.core.student_name")},elbScorm.GetUserID=function(){return scorm.get("cmi.core.student_id")},elbScorm.GetResumeData=function(){var e=scorm.get("cmi.suspend_data");return""!=e?JSON.parse(e):null},elbScorm.SetResumeData=function(e){var t=JSON.stringify(e),n=scorm.set("cmi.suspend_data",t),r=scorm.save();return n&&r},elbScorm.SetComplete=function(){var e=!1;return lmsConnected?(e=scorm.set("cmi.core.lesson_status","completed"),e?scorm.quit():elbScorm.handleError("Error: Course could not be set to complete!")):elbScorm.handleError("Error: Course is not connected to the LMS"),e},elbScorm.initCourse=function(){if(lmsConnected=scorm.init()){var e=scorm.get("cmi.core.lesson_status");("completed"==e||"passed"==e)&&elbScorm.handleError("You have already completed this course. You do not need to continue.")}else elbScorm.handleError("Error: Course could not connect with the LMS");return lmsConnected},elbScorm.handleError=function(e){pipwerks.debug.isActive&&(window.console&&window.console.log&&window.console.log(e),document.getElementById("scormErrors")&&(document.getElementById("scormErrors").innerHTML=e))},function e(t,n,r){function i(s,a){if(!n[s]){if(!t[s]){var c="function"==typeof require&&require;if(!a&&c)return c(s,!0);if(o)return o(s,!0);var l=new Error("Cannot find module '"+s+"'");throw l.code="MODULE_NOT_FOUND",l}var u=n[s]={exports:{}};t[s][0].call(u.exports,function(e){var n=t[s][1][e];return i(n?n:e)},u,u.exports,e,t,n,r)}return n[s].exports}for(var o="function"==typeof require&&require,s=0;s<r.length;s++)i(r[s]);return i}({1:[function(e,t){var n;t.exports=n=function(){function e(e,t){this.refreshWindowCb=t,e&&this.initScormStubs(),this.version={major:0,minor:1,feature:0,storeVersion:1},window.addEventListener("storage",function(e){return function(t){return e.onStorageChange(t)}}(this))}return e.prototype.begin=function(e,t){var n,r;return elbScorm.initCourse()?(this.user=elbScorm.GetUserName(),this.userId=elbScorm.GetUserID(),r=elbScorm.GetResumeData(),null!=r?null==r.version?n={}:r.version.storeVersion<this.version.storeVersion||null==r.version.storeVersion?n={}:(n={},n.globalVars=r.globalVars,n.location=r.location):n={},n.version=this.version,n.user=this.user,n.userId=this.userId,n.initParams=e,this.saveGlobToLocalStorage(n),t()):console.log("couldn't start the course")},e.prototype.saveGlobToLocalStorage=function(e){return localStorage.setItem("glob",JSON.stringify(e))},e.prototype.saveGlobToLMS=function(){var e;return e=localStorage.getItem("glob"),elbScorm.SetResumeData(JSON.parse(e))},e.prototype.onStorageChange=function(e){var t;return console.log(e.key),"glob"===e.key?this.saveGlobToLMS():"course.complete"===e.key?elbScorm.SetComplete():"refresh.window"===e.key?(console.log("hmmmmmmmm"),t=0,this.refreshWindowCb()):void 0},e.prototype.initScormStubs=function(){return window.elbScorm={},elbScorm.initCourse=function(){return!0},elbScorm.GetUserName=function(){return"Ricks, Justin"},elbScorm.GetUserID=function(){return"abcdefg1234567"},elbScorm.GetCompanName=function(){return"Arizona Public Works"},elbScorm.SetResumeData=function(e){return localStorage.setItem("fakeLmsStore",JSON.stringify(e))},elbScorm.GetResumeData=function(){return JSON.parse(localStorage.getItem("fakeLmsStore"))},elbScorm.SetComplete=function(){return console.log("course is complete")}},e}()},{}],2:[function(e){var t,n,r,i,o;t=e("lms-proxy"),r=e("settings-config"),i=e("window-manager"),n=function(){function e(){this.begin()}return e.prototype.begin=function(){var e,n;return n=new r,e=n.getQueryVars(),this.windowManager=new i,this.lmsProxy=new t(e.isLocal,this.windowManager.refreshTraining),this.lmsProxy.begin(e,function(e){return function(){return e.windowManager.launchTraining()}}(this))},e}(),o=new n},{"lms-proxy":1,"settings-config":3,"window-manager":4}],3:[function(e,t){var n;t.exports=n=function(){function e(){}return e.prototype.getQueryVars=function(){var e;switch(e={episode:this.getQueryVariable("episode"),cache:this.getQueryVariable("cache"),isDevMode:this.getQueryVariable("dev"),isLocal:"true"===this.getQueryVariable("local"),sudo:"true"===this.getQueryVariable("sudo"),role:this.getQueryVariable("role"),episodeRoot:"episodes",localRoot:"local"},this.getQueryVariable("role")){case"cip-general-awareness":e.configFile="config-cip-general-awareness.json";break;case"cip-sustainers":e.configFile="config-cip-sustainers.json";break;case"cip-users":e.configFile="config-cip-users.json";break;default:e.configFile="config-cip-sustainers.json"}return e},e.prototype.getQueryVariable=function(e){var t,n,r,i,o,s;for(o=window.location.search.substring(1),s=o.split("&"),t=0,r=s.length;r>t;t++)if(n=s[t],i=n.split("="),i[0]===e)return i[1];return!1},e}()},{}],4:[function(e,t){var n,r=function(e,t){return function(){return e.apply(t,arguments)}};t.exports=n=function(){function e(){this.refreshTraining=r(this.refreshTraining,this),this.count=0}return e.prototype.launchTraining=function(e,t){return null==e&&(e=0),null==t&&(t=0),this.trainingWindow=window.open("index.html","_training"+this.count++,"top:"+t+", left="+e+", location=no, status=no, toolbar=no, scrollbars=no, resizable=no, width=1024, height=768")},e.prototype.refreshTraining=function(){var e,t;return this.isIE?(e=this.trainingWindow.screenLeft,t=this.trainingWindow.screenTop):(e=this.trainingWindow.screenX,t=this.trainingWindow.screenY),this.trainingWindow.close(),this.launchTraining(e,t)},e}()},{}]},{},[2]);