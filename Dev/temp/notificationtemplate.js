(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["notificationtemplate.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<li class=\"item-content\">\n    <div class=\"item-media\">\n        <i class=\"fa fa-bell fa-3x\"></i>\n    </div>\n    <div class=\"item-inner\">\n        <div class=\"item-title-row\">\n            <div class=\"item-title\" style=\"font-weight: bold;\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "title"), env.opts.autoescape);
output += "</div>\n            <div class=\"item-after\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "time"), env.opts.autoescape);
output += "</div>\n        </div>\n        <div class=\"item-text\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "body"), env.opts.autoescape);
output += "</div>\n        <p class=\"buttons-row\">\n            <a onclick=\"javascript:";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "action"), env.opts.autoescape);
output += "\" class=\"button button-raised\">View</a>\n            <a onclick=\"javascript:removeNotification('";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
output += "');\" class=\"button button-raised color-red\">Delete</a>\n        </p>\n    </div>\n</li>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
root: root
};

})();
})();
