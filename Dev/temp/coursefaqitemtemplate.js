(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["coursefaqitemtemplate.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<li class=\"accordion-item\">\n    <a href=\"#\" class=\"item-content item-link\">\n        <div class=\"item-inner\">\n            <div class=\"item-title\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "title"), env.opts.autoescape);
output += "</div>\n        </div>\n    </a>\n    <div class=\"accordion-item-content\">\n        <div class=\"content-block\">\n            <p class=\"allowselect\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "body"), env.opts.autoescape);
output += "</p>\n        </div>\n    </div>\n</li>";
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
