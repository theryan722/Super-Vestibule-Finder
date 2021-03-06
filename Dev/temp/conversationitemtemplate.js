(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["conversationitemtemplate.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<li>\n    <a href=\"javascript:loadChat('";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "chatid"), env.opts.autoescape);
output += "');\" class=\"item-link item-content\">\n        <div class=\"item-media\">\n                <i class=\"fa fa-comment fa-3x\" aria-hidden=\"true\"></i>\n        </div>\n        <div class=\"item-inner\">\n            <div class=\"item-title-row\">\n                <div class=\"item-title\" style=\"font-weight: bold;\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "name"), env.opts.autoescape);
output += "</div>\n            </div>\n            <div class=\"item-text\" style=\"font-weight: bold;\">Started: <span class=\"searchableitem\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "timestamp"), env.opts.autoescape);
output += "</span></div>\n            ";
if(runtime.contextOrFrameLookup(context, frame, "unread")) {
output += "\n                <div class=\"item-subtitle\" style=\"font-weight: bold; font-size: 1.1em;\"><i class=\"fa fa-envelope-square\"></i> Unread Messages: ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "unread"), env.opts.autoescape);
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
