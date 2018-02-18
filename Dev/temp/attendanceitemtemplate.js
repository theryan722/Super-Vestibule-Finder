(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["attendanceitemtemplate.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<li data-recordid=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "userid"), env.opts.autoescape);
output += "\" class=\"attendanceitem\">\n    <a href=\"javascript:displayManageAttendanceItemDialog('";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "userid"), env.opts.autoescape);
output += "');\" class=\"item-link item-content\">\n        <div class=\"item-media\">\n            ";
if(runtime.contextOrFrameLookup(context, frame, "modpresent")) {
output += "\n                <i class=\"fa fa-calendar-check fa-3x\" aria-hidden=\"true\" title=\"Student marked as present.\"></i>\n            ";
;
}
else {
output += "\n                ";
if(runtime.contextOrFrameLookup(context, frame, "modabsent")) {
output += "\n                <i class=\"fa fa-calendar-times fa-3x\" aria-hidden=\"true\" title=\"Student marked as absent.\"></i>\n                ";
;
}
else {
output += "\n                    ";
if(runtime.contextOrFrameLookup(context, frame, "submitted")) {
output += "\n                        ";
if(runtime.contextOrFrameLookup(context, frame, "codecorrect")) {
output += "\n                            ";
if(runtime.contextOrFrameLookup(context, frame, "requiregpsverification")) {
output += "\n                                ";
if(runtime.contextOrFrameLookup(context, frame, "onlygps")) {
output += "\n                                    ";
if(runtime.contextOrFrameLookup(context, frame, "locationpassedverification")) {
output += "\n                                        <i class=\"fa fa-calendar-check fa-3x\" aria-hidden=\"true\" title=\"Student passed gps verification.\"></i>\n                                    ";
;
}
else {
output += "\n                                        <i class=\"fa fa-calendar-times fa-3x\" aria-hidden=\"true\" title=\"Student failed gps verification.\"></i>\n                                    ";
;
}
output += "\n                                ";
;
}
else {
output += "\n                                    ";
if(runtime.contextOrFrameLookup(context, frame, "locationpassedverification")) {
output += "\n                                        <i class=\"fa fa-calendar-check fa-3x\" aria-hidden=\"true\" title=\"Student entered code correctly and passed gps verification.\"></i>\n                                    ";
;
}
else {
output += "\n                                        <i class=\"fa fa-calendar-times fa-3x\" aria-hidden=\"true\" title=\"Student entered code correctly but failed gps verification.\"></i>\n                                    ";
;
}
output += "\n                                ";
;
}
output += "\n                            ";
;
}
else {
output += "\n                                <i class=\"fa fa-calendar-check fa-3x\" aria-hidden=\"true\" title=\"Student entered code correctly.\"></i>\n                            ";
;
}
output += "\n                        ";
;
}
else {
output += "\n                            <i class=\"fa fa-calendar-times fa-3x\" aria-hidden=\"true\" title=\"Student failed to enter code correctly.\"></i>\n                        ";
;
}
output += "\n                    ";
;
}
else {
output += "\n                        <i class=\"fa fa-calendar-times fa-3x\" aria-hidden=\"true\" title=\"Student did not check in for attendance.\"></i>\n                    ";
;
}
output += "\n                ";
;
}
output += "\n            ";
;
}
output += "\n        </div>\n        <div class=\"item-inner\">\n            <div class=\"item-title-row\">\n                <div class=\"item-title\" style=\"font-weight: bold;\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "name"), env.opts.autoescape);
output += "</div>\n                <div class=\"item-after\" style=\"font-weight: bold;\">ID: <span class=\"searchableitem\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "studentid"), env.opts.autoescape);
output += "</span></div>\n            </div>\n            ";
if(runtime.contextOrFrameLookup(context, frame, "modpresent")) {
output += "\n            <div class=\"item-subtitle\"><span style=\"font-weight: bold;\">Student manually marked as present.</span></div>\n            ";
;
}
else {
output += "\n                ";
if(runtime.contextOrFrameLookup(context, frame, "modabsent")) {
output += "\n                <div class=\"item-subtitle\"><span style=\"font-weight: bold;\">Student manually marked as absent.</span></div>\n                ";
;
}
else {
output += "\n                    ";
if(runtime.contextOrFrameLookup(context, frame, "submitted")) {
output += "\n                        ";
if(runtime.contextOrFrameLookup(context, frame, "requiregpsverification")) {
output += "\n                            <div class=\"item-subtitle\">Passed location verification: <span style=\"font-weight: bold;\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "locationpassedverification"), env.opts.autoescape);
output += "</span></div>\n                            <div class=\"item-subtitle\">GPS Enabled: <span style=\"font-weight: bold;\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "gpsenabled"), env.opts.autoescape);
output += "</span></div>\n                        ";
;
}
output += "\n                        <div class=\"item-subtitle\">Device: <span class=\"searchableitem\" style=\"font-weight: bold;\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "device"), env.opts.autoescape);
output += "</span></div>\n                    ";
;
}
else {
output += "\n                        <div class=\"item-subtitle\"><span style=\"font-weight: bold;\">Student did not check in for attendance.</span></div>\n                    ";
;
}
output += "\n                    ";
if(runtime.contextOrFrameLookup(context, frame, "timestamp")) {
output += "\n                        <div class=\"item-subtitle\">Checked in at: <span style=\"font-weight: bold;\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "timestamp"), env.opts.autoescape);
output += "</span></div>\n                    ";
;
}
output += "\n                ";
;
}
output += "\n            ";
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
