(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["quizgradeitemtemplate.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<li data-recordid=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "userid"), env.opts.autoescape);
output += "\" class=\"engageitem\">\n    <a href=\"javascript:manageEnrolledStudent('";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "userid"), env.opts.autoescape);
output += "');\" class=\"item-link item-content\">\n        <div class=\"item-media\">\n            <i class=\"fa fa-graduation-cap fa-3x\" aria-hidden=\"true\"></i>\n        </div>\n        <div class=\"item-inner\">\n            <div class=\"item-title-row\">\n                <div class=\"item-title\" style=\"font-weight: bold;\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "name"), env.opts.autoescape);
output += "</div>\n                ";
if(runtime.contextOrFrameLookup(context, frame, "studentid")) {
output += "\n                <div class=\"item-after\" style=\"font-weight: bold;\">ID:\n                    <span class=\"searchableitem\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "studentid"), env.opts.autoescape);
output += "</span>\n                </div>\n                ";
;
}
output += "\n            </div>\n            <div class=\"item-subtitle\">Grade:\n                <span style=\"font-weight: bold;\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "grade"), env.opts.autoescape);
output += "</span>\n            </div>\n        </div>\n    </a>\n</li>";
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
