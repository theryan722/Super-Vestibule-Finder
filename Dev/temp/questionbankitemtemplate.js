(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["questionbankitemtemplate.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<li class=\"item-content\">\n    <div class=\"item-media\">\n        ";
if(runtime.contextOrFrameLookup(context, frame, "type") == "quiz") {
output += "\n        <i class=\"fa fa-file-alt fa-3x\" aria-hidden=\"true\"></i>\n        ";
;
}
else {
output += "\n        <i class=\"fa fa-question fa-3x\" aria-hidden=\"true\"></i>\n        ";
;
}
output += "\n    </div>\n    <div class=\"item-inner\">\n        <div class=\"item-title-row\">\n            <div class=\"item-title\" style=\"font-weight: bold;\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "name"), env.opts.autoescape);
output += "</div>\n            <div class=\"item-after\" style=\"font-weight: bold;\"><span class=\"searchableitem\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "formattedtype"), env.opts.autoescape);
output += "</span></div>\n        </div>\n        ";
if(runtime.contextOrFrameLookup(context, frame, "sent")) {
output += "\n        <div class=\"item-subtitle\">Sent:\n            <span class=\"searchableitem\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "sent"), env.opts.autoescape);
output += "</span>\n        </div>\n        ";
;
}
output += "\n        ";
if(runtime.contextOrFrameLookup(context, frame, "courseinfo")) {
output += "\n        <div class=\"item-subtitle\">Course:\n            <span class=\"searchableitem\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "courseinfo"), env.opts.autoescape);
output += "</span>\n        </div>\n        ";
;
}
output += "\n        <p class=\"buttons-row\">\n            ";
if(runtime.contextOrFrameLookup(context, frame, "inquiz")) {
output += "\n            ";
;
}
else {
output += "\n                <a onclick=\"javascript:sendQuestionBankItem('";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
output += "', '";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "type"), env.opts.autoescape);
output += "', ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "infolder"), env.opts.autoescape);
output += ");\" class=\"button button-raised color-green\">Send</a>\n            ";
;
}
output += "\n            <a onclick=\"javascript:editQuestionBankItem('";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
output += "', '";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "type"), env.opts.autoescape);
output += "', ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "infolder"), env.opts.autoescape);
output += ", ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "inquiz"), env.opts.autoescape);
output += ");\" class=\"button button-raised color-orange\">Edit</a>\n            <a onclick=\"javascript:deleteQuestionBankItem('";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
output += "', '";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "type"), env.opts.autoescape);
output += "', ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "infolder"), env.opts.autoescape);
output += ", ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "inquiz"), env.opts.autoescape);
output += ");\" class=\"button button-raised color-red\">Delete</a>\n        </p>\n    </div>\n</li>";
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
