(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["discussionfeeditemtemplate.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<li>\n    <a href=\"javascript:displayDiscussionFeedPopup('";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "escapedbody"), env.opts.autoescape);
output += "', '";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "escapedname"), env.opts.autoescape);
output += "');\" class=\"item-link item-content\">\n        <div class=\"item-media\">\n            <i class=\"fa fa-user fa-3x\" aria-hidden=\"true\"></i>\n        </div>\n        <div class=\"item-inner\">\n            <div class=\"item-title-row\">\n                <div class=\"item-title\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "name"), env.opts.autoescape);
output += "</div>\n                <div class=\"item-after\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "timestamp"), env.opts.autoescape);
output += "</div>\n            </div>\n            <div class=\"item-text\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "body"), env.opts.autoescape);
output += "</div>\n        </div>\n    </a>\n</li>";
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
