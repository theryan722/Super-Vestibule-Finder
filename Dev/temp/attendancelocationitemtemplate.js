(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["attendancelocationitemtemplate.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<li class=\"item-content\">\n    <div class=\"item-media\">\n        <i class=\"fa fa-map-marker fa-3x\" aria-hidden=\"true\"></i>\n    </div>\n    <div class=\"item-inner\">\n        <div class=\"item-title\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "name"), env.opts.autoescape);
output += "</div>\n        <p class=\"buttons-row\">\n            <a onclick=\"javascript:loadAddAttendanceLocation('";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
output += "');\" class=\"button button-raised color-green\">Edit</a>\n            <a onclick=\"javascript:deleteAttendanceLocation('";
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
