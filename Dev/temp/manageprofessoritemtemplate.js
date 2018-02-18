(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["manageprofessoritemtemplate.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<li class=\"item-content\">\n    <div class=\"item-media\">\n        <i class=\"fa fa-user fa-3x\" aria-hidden=\"true\"></i>\n    </div>\n    <div class=\"item-inner\">\n        ";
if(runtime.contextOrFrameLookup(context, frame, "isyou")) {
output += "\n        <div class=\"item-title\">You</div>\n        ";
;
}
else {
output += "\n        <div class=\"item-title\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "name"), env.opts.autoescape);
output += "</div>\n        ";
;
}
output += "\n        ";
if(runtime.contextOrFrameLookup(context, frame, "admin")) {
output += "\n        <div class=\"item-subtitle\"><i class=\"fa fa-id-badge\" aria-hidden=\"true\"></i> Course Admin</div>\n        ";
;
}
output += "\n    </div>\n    ";
if(!runtime.contextOrFrameLookup(context, frame, "admin")) {
output += "\n    <a onclick=\"javascript:removeProfessorFromCourse('";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "userid"), env.opts.autoescape);
output += "');\" class=\"button button-raised color-red\" style=\"width: 100px;\">Remove</a>\n    ";
;
}
output += "\n</li>";
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
