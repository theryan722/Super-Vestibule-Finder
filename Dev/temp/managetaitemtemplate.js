(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["managetaitemtemplate.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<li class=\"item-content\">\n    <div class=\"item-media\">\n        <i class=\"fa fa-user fa-3x\" aria-hidden=\"true\"></i>\n    </div>\n    <div class=\"item-inner\">\n        <div class=\"item-title\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "name"), env.opts.autoescape);
output += "</div>\n    </div>\n    <p class=\"buttons-row\">\n        <a onclick=\"javascript:manageTAPermissions('";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "userid"), env.opts.autoescape);
output += "');\" class=\"button button-raised color-green\" style=\"width: 200px;\">Permissions</a>\n        <a onclick=\"javascript:removeTAFromCourse('";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "userid"), env.opts.autoescape);
output += "');\" class=\"button button-raised color-red\">Remove</a>\n    </p>\n</li>";
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
