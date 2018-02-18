(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["courseitemtemplate.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<li>\n    <a href=\"javascript:enrollInCourse('";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "courseid"), env.opts.autoescape);
output += "');\" class=\"item-link item-content\">\n        <div class=\"item-media\">\n            <i class=\"fa fa-list-alt fa-3x\" aria-hidden=\"true\"></i>\n        </div>\n        <div class=\"item-inner\">\n            <div class=\"item-title-row\">\n                <div class=\"item-title\" style=\"font-weight: bold;\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "name"), env.opts.autoescape);
output += "</div>\n                <div class=\"item-after\">Subject: <span class=\"searchableitem\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "subject"), env.opts.autoescape);
output += "</span></div>\n            </div>\n            <div class=\"item-subtitle\">Professor: <span class=\"searchableitem\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "professor"), env.opts.autoescape);
output += "</span></div>\n            ";
if(runtime.contextOrFrameLookup(context, frame, "trialmode")) {
output += "\n            <div class=\"item-subtitle\">Course is in trial mode. No subscriptions required.</div>\n            ";
;
}
else {
output += "\n            <div class=\"item-subtitle\">Required Modules: ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "modules"), env.opts.autoescape);
output += "</div>\n            ";
;
}
output += "\n        </div>\n    </a>\n</li>";
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
