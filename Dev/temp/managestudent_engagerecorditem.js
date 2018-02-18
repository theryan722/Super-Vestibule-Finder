(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["managestudent_engagerecorditem.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<li data-recordid=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "userid"), env.opts.autoescape);
output += "\" class=\"engageitem\">\n        <a href=\"javascript:loadIndividualEngageRecordPage('";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "recordid"), env.opts.autoescape);
output += "');\" class=\"item-link item-content\">\n            <div class=\"item-media\">\n                ";
if(runtime.contextOrFrameLookup(context, frame, "modcorrect")) {
output += "\n                    <i class=\"fa fa-check fa-3x\" aria-hidden=\"true\" title=\"Response marked as correct.\"></i>\n                ";
;
}
else {
if(runtime.contextOrFrameLookup(context, frame, "modincorrect")) {
output += "\n                    <i class=\"fa fa-times fa-3x\" aria-hidden=\"true\" title=\"Response marked as incorrect.\"></i>\n                ";
;
}
else {
output += "\n                    ";
if(runtime.contextOrFrameLookup(context, frame, "submitted")) {
output += "\n                        ";
if(runtime.contextOrFrameLookup(context, frame, "correct")) {
output += "\n                            <i class=\"fa fa-check fa-3x\" aria-hidden=\"true\" title=\"Student's response was correct.\"></i>\n                        ";
;
}
else {
output += "\n                            <i class=\"fa fa-times fa-3x\" aria-hidden=\"true\" title=\"Student's response was incorrect.\"></i>\n                        ";
;
}
output += "\n                    ";
;
}
else {
output += "\n                        <i class=\"fa fa-times fa-3x\" aria-hidden=\"true\" title=\"Student did not submit a response.\"></i>\n                    ";
;
}
output += "\n                ";
;
}
;
}
output += " \n            </div>\n            <div class=\"item-inner\">\n                <div class=\"item-title-row\">\n                    <div class=\"item-title\" style=\"font-weight: bold;\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "recordtimestamp"), env.opts.autoescape);
output += "</div>\n                    ";
if(runtime.contextOrFrameLookup(context, frame, "studentid")) {
output += "\n                        <div class=\"item-after\" style=\"font-weight: bold;\">ID: <span class=\"searchableitem\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "studentid"), env.opts.autoescape);
output += "</span></div>\n                    ";
;
}
output += "\n                </div>\n                ";
if(runtime.contextOrFrameLookup(context, frame, "modcorrect")) {
output += "\n                    <div class=\"item-subtitle\"><span style=\"font-weight: bold;\">Response manually marked as correct.</span></div>\n                ";
;
}
else {
if(runtime.contextOrFrameLookup(context, frame, "modincorrect")) {
output += "\n                    <div class=\"item-subtitle\"><span style=\"font-weight: bold;\">Response manually marked as incorrect.</span></div>\n                ";
;
}
else {
output += "\n                    ";
if(runtime.contextOrFrameLookup(context, frame, "submitted")) {
output += "\n                        <div class=\"item-subtitle\">Device: <span class=\"searchableitem\" style=\"font-weight: bold;\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "device"), env.opts.autoescape);
output += "</span></div>\n                    ";
;
}
else {
output += "\n                        <div class=\"item-subtitle\"><span style=\"font-weight: bold;\">Student did not submit a response.</span></div>\n                    ";
;
}
output += "\n                ";
;
}
;
}
output += "\n                <div class=\"item-subtitle\">Record Name: <span class=\"searchableitem\" style=\"font-weight: bold;\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "recordname"), env.opts.autoescape);
output += "</span></div>\n                ";
if(runtime.contextOrFrameLookup(context, frame, "graded")) {
output += "\n                    <div class=\"item-subtitle\">Points: <span style=\"font-weight: bold;\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "points"), env.opts.autoescape);
output += "</span></div>\n                ";
;
}
output += "\n                ";
if(runtime.contextOrFrameLookup(context, frame, "timestamp")) {
output += "\n                    <div class=\"item-subtitle\">Submitted at: <span style=\"font-weight: bold;\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "timestamp"), env.opts.autoescape);
output += "</span></div>\n                ";
;
}
output += "\n            </div>\n        </a>\n    </li>";
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
