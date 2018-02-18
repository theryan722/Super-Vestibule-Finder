(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["questionbankitemfoldertemplate.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<li>\n    <a href=\"javascript:loadquestionbankFolder('";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
output += "');\" class=\"item-link item-content\">\n        <div class=\"item-media\">\n            <i class=\"fa fa-folder fa-3x\" aria-hidden=\"true\"></i>\n        </div>\n        <div class=\"item-inner\">\n            <div class=\"item-title-row\">\n                <div class=\"item-title\" style=\"font-weight: bold;\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "name"), env.opts.autoescape);
output += "</div>\n            </div>\n            ";
if(runtime.contextOrFrameLookup(context, frame, "courseinfo")) {
output += "\n                <div class=\"item-subtitle\">Course:\n                    <span class=\"searchableitem\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "courseinfo"), env.opts.autoescape);
output += "</span>\n                </div>\n            ";
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
