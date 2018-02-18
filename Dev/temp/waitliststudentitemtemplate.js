(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["waitliststudentitemtemplate.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<li class=\"item-content\">\n    <div class=\"item-media\">\n        <i class=\"fa fa-user fa-3x\" aria-hidden=\"true\"></i>\n    </div>\n    <div class=\"item-inner\">\n        <div class=\"item-title\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "name"), env.opts.autoescape);
output += "</div>\n        <div class=\"item-subtitle\">ID:\n            <span class=\"searchableitem\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "studentid"), env.opts.autoescape);
output += "</span>\n        </div>\n        <p class=\"buttons-row\">\n            <a onclick=\"javascript:addStudentFromWaitlist('";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "userid"), env.opts.autoescape);
output += "');\" class=\"button button-raised color-green\">Accept</a>\n            <a onclick=\"javascript:rejectStudentFromWaitlist('";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "userid"), env.opts.autoescape);
output += "');\" class=\"button button-raised color-red\">Reject</a>\n        </p>\n    </div>\n</li>";
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
