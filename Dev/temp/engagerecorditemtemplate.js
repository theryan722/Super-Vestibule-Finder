(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["engagerecorditemtemplate.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<li>\n    ";
if(runtime.contextOrFrameLookup(context, frame, "isquiz")) {
output += "\n    <a href=\"javascript:loadIndividualEngageQuizRecordPage('";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
output += "');\" class=\"item-link item-content\">\n    ";
;
}
else {
output += "\n    <a href=\"javascript:loadIndividualEngageRecordPage('";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
output += "');\" class=\"item-link item-content\">\n    ";
;
}
output += "\n        <div class=\"item-media\">\n            ";
if(runtime.contextOrFrameLookup(context, frame, "isquiz")) {
output += "\n            <i class=\"fa fa-file-alt fa-3x\" aria-hidden=\"true\"></i>\n            ";
;
}
else {
output += "\n            <i class=\"fa fa-list-ol fa-3x\" aria-hidden=\"true\"></i>\n            ";
;
}
output += "\n        </div>\n        <div class=\"item-inner\">\n            <div class=\"item-title-row\">\n                <div class=\"item-title\" style=\"font-weight: bold;\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "name"), env.opts.autoescape);
output += "</div>\n            </div>\n            <div class=\"item-subtitle\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "date"), env.opts.autoescape);
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
