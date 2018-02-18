(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["coursestaffitemtemplate.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<li class=\"item-content\">\n    <div class=\"item-media\">\n        <i class=\"fa fa-user fa-3x\" aria-hidden=\"true\"></i>\n    </div>\n    <div class=\"item-inner\">\n        <div class=\"item-title\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "name"), env.opts.autoescape);
output += "</div>\n        <div class=\"item-subtitle\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "role"), env.opts.autoescape);
output += "</div>\n        <p class=\"buttons-row\">\n            ";
if(runtime.contextOrFrameLookup(context, frame, "chatpermission")) {
output += "\n            <a onclick=\"javascript:createChat('";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "userid"), env.opts.autoescape);
output += "', '";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "name"), env.opts.autoescape);
output += "', '";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "role"), env.opts.autoescape);
output += "');\" class=\"button button-raised color-green\" style=\"width: 200px;\">Chat</a>\n            ";
;
}
else {
output += "\n            <a onclick=\"javascript:app.alert('This user has disabled chat for themselves.', 'Unable to Chat');\" class=\"button button-raised color-red\" style=\"min-width: 150px;\">Chat Disabled</a>\n            ";
;
}
output += "\n            <a onclick=\"javascript:viewStaffInformation('";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "userid"), env.opts.autoescape);
output += "', '";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "role"), env.opts.autoescape);
output += "');\" class=\"button button-raised color-blue\">Info</a>\n        </p>\n    </div>\n</li>";
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
