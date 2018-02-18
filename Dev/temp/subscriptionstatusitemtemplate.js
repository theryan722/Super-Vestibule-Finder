(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["subscriptionstatusitemtemplate.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<li>\n    <div class=\"item-content\">\n        <div class=\"item-media\">\n            ";
if(runtime.contextOrFrameLookup(context, frame, "sub_attendance")) {
output += "\n            <i class=\"fa fa-calendar-check fa-3x\" aria-hidden=\"true\" title=\"Attendance Subscription\"></i>\n            ";
;
}
else {
output += "\n            <i class=\"fa fa-flask fa-3x\" aria-hidden=\"true\" title=\"Engage Subscription\"></i>\n            ";
;
}
output += "\n        </div>\n        <div class=\"item-inner\">\n            <div class=\"item-title-row\">\n                <div class=\"item-title\" style=\"font-weight: bold;\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "title"), env.opts.autoescape);
output += "</div>\n                ";
if(runtime.contextOrFrameLookup(context, frame, "expires")) {
output += "\n                <div class=\"item-after\" style=\"font-weight: bold;\">Expires:\n                    <span class=\"searchableitem\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "expires"), env.opts.autoescape);
output += "</span>\n                </div>\n                ";
;
}
output += "\n            </div>\n            <div class=\"item-subtitle\">\n                <span style=\"font-weight: bold;\">Status: ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "status"), env.opts.autoescape);
output += "</span>\n            </div>\n        </div>\n    </div>\n</li>";
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
