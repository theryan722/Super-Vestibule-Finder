(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["addattendancelocationtemplate.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<div data-page=\"managemodule_attendance_addlocation\" class=\"page\">\n    <div class=\"navbar\">\n        <div class=\"navbar-inner\">\n            <div class=\"left\">\n                <a href=\"#\" class=\"back link\">\n                    <i class=\"fa fa-arrow-left\"></i>\n                </a>\n            </div>\n            <div class=\"center pagetitle\">Add Location</div>\n            <div class=\"right\">\n                <a href=\"#\" class=\"link icon-only open-panel mobilemenubutton\">\n                    <i class=\"fa fa-bars\"></i>\n                </a>\n            </div>\n        </div>\n    </div>\n    <div class=\"page-content\">\n        <div class=\"list-block\">\n            <ul>\n                <li class=\"item-content\">\n                    <div class=\"item-media\">\n                        <i class=\"fa fa-tag\"></i>\n                    </div>\n                    <div class=\"item-inner\">\n                        <div class=\"item-title label\">Location</div>\n                        <div class=\"item-input\">\n                            <select id=\"addattendance_select_location\">\n                            </select>\n                        </div>\n                    </div>\n                </li>\n            </ul>\n        </div>\n        <div class=\"list-block accordion-list\">\n            <ul id=\"coursefaqlist\">\n                <li class=\"accordion-item\">\n                    <a href=\"#\" class=\"item-content item-link\">\n                        <div class=\"item-inner\">\n                            <div class=\"item-title\">Advanced</div>\n                        </div>\n                    </a>\n                    <div class=\"accordion-item-content\">\n                        <div class=\"list-block\">\n                            <ul>\n                                <li class=\"item-content\">\n                                    <div class=\"item-media\">\n                                        <i class=\"fa fa-tag\"></i>\n                                    </div>\n                                    <div class=\"item-inner\">\n                                        <div class=\"item-title label\">Location Name</div>\n                                        <div class=\"item-input\">\n                                            <input type=\"text\" name=\"addlocation_name\" value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "name"), env.opts.autoescape);
output += "\">\n                                        </div>\n                                    </div>\n                                </li>\n                                <li class=\"item-content\">\n                                    <div class=\"item-media\">\n                                        <i class=\"fa fa-compass\"></i>\n                                    </div>\n                                    <div class=\"item-inner\">\n                                        <div class=\"item-title label\">Latitude</div>\n                                        <div class=\"item-input\">\n                                            <input type=\"text\" name=\"addlocation_latitude\" value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "latitude"), env.opts.autoescape);
output += "\">\n                                        </div>\n                                    </div>\n                                </li>\n                                <li class=\"item-content\">\n                                    <div class=\"item-media\">\n                                        <i class=\"fa fa-compass\"></i>\n                                    </div>\n                                    <div class=\"item-inner\">\n                                        <div class=\"item-title label\">Longitude</div>\n                                        <div class=\"item-input\">\n                                            <input type=\"text\" name=\"addlocation_longitude\" value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "longitude"), env.opts.autoescape);
output += "\">\n                                        </div>\n                                    </div>\n                                </li>\n                                <li class=\"item-content\">\n                                    <div class=\"item-media\">\n                                        <i class=\"fa fa-map\"></i>\n                                    </div>\n                                    <div class=\"item-inner\">\n                                        <div class=\"item-title label\">Max Distance to Checkin (in feet)</div>\n                                        <div class=\"item-input\">\n                                            <input type=\"text\" name=\"addlocation_maxdistance\" value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "maxdistance"), env.opts.autoescape);
output += "\">\n                                        </div>\n                                    </div>\n                                    <a onclick=\"javascript:displayHelp_MaxDistanceToCheckin();\" title=\"Help/Info\">\n                                        <i class=\"fa fa-question-circle fa-lg\" aria-hidden=\"true\"></i>\n                                    </a>\n                                </li>\n                            </ul>\n                        </div>\n                        <div class=\"content-block-title\">Get coordinates from</div>\n                        <div class=\"card\">\n                            <div class=\"list-block\">\n                                <ul>\n                                    <li>\n                                        <a onclick=\"javascript:attendanceAddLocation_GetCurrentLocation();\" class=\"list-button item-link\">\n                                            <i class=\"fa fa-map-marker fa-fw\" aria-hidden=\"true\"></i> Current Location</a>\n                                        <a onclick=\"javascript:attendanceAddLocation_GetLocationFromGoogleMaps();\" class=\"list-button item-link\">\n                                            <i class=\"fa fa-map fa-fw\" aria-hidden=\"true\"></i> Google Maps</a>\n                                    </li>\n                                </ul>\n                            </div>\n                        </div>\n                    </div>\n                </li>\n            </ul>\n        </div>\n        <a onclick=\"javascript:addAttendanceLocation('";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
output += "');\" class=\"button button-big button-fill button-raised color-green\">Add</a>\n    </div>\n</div>";
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

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["attendancelocationitemtemplate.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<li class=\"item-content\">\n    <div class=\"item-media\">\n        <i class=\"fa fa-map-marker fa-3x\" aria-hidden=\"true\"></i>\n    </div>\n    <div class=\"item-inner\">\n        <div class=\"item-title\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "name"), env.opts.autoescape);
output += "</div>\n        <p class=\"buttons-row\">\n            <a onclick=\"javascript:loadAddAttendanceLocation('";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
output += "');\" class=\"button button-raised color-green\">Edit</a>\n            <a onclick=\"javascript:deleteAttendanceLocation('";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
output += "');\" class=\"button button-raised color-red\">Delete</a>\n        </p>\n    </div>\n</li>";
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

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["attendancerecorditemtemplate.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<li>\n    <a href=\"javascript:loadIndividualAttendanceRecordPage('";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
output += "');\" class=\"item-link item-content\">\n        <div class=\"item-media\">\n            <i class=\"fa fa-calendar-alt fa-3x\" aria-hidden=\"true\"></i>\n        </div>\n        <div class=\"item-inner\">\n            <div class=\"item-title-row\">\n                <div class=\"item-title\" style=\"font-weight: bold;\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "date"), env.opts.autoescape);
output += "</div>\n            </div>\n            <div class=\"item-subtitle\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "name"), env.opts.autoescape);
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

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["coursemanagefaqitemtemplate.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<li class=\"item-content\">\n    <div class=\"item-media\">\n        <i class=\"fa fa-question fa-3x\" aria-hidden=\"true\"></i>\n    </div>\n    <div class=\"item-inner\">\n        <div class=\"item-title\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "title"), env.opts.autoescape);
output += "</div>\n        <div class=\"item-subtitle\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "body"), env.opts.autoescape);
output += "</div>\n        <p class=\"buttons-row\">\n            <a onclick=\"javascript:editCourseFAQItem('";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
output += "');\" class=\"button button-raised color-green\">Edit</a>\n            <a onclick=\"javascript:deleteCourseFAQItem('";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
output += "');\" class=\"button button-raised color-red\">Delete</a>\n        </p>\n    </div>\n</li>";
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

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["coursestaffitemtemplate.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<li class=\"item-content\">\n    <div class=\"item-media\">\n        <i class=\"fa fa-user fa-3x\" aria-hidden=\"true\"></i>\n    </div>\n    <div class=\"item-inner\">\n        <div class=\"item-title\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "name"), env.opts.autoescape);
output += "</div>\n        <div class=\"item-subtitle\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "role"), env.opts.autoescape);
output += "</div>\n        <p class=\"buttons-row\">\n            ";
if(runtime.contextOrFrameLookup(context, frame, "chatpermission")) {
output += "\n            <a onclick=\"javascript:createChat('";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "userid"), env.opts.autoescape);
output += "', '";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "name"), env.opts.autoescape);
output += "', '";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "role"), env.opts.autoescape);
output += "');\" class=\"button button-raised color-green\" style=\"width: 200px;\">Chat</a>\n            ";
;
}
else {
output += "\n            <a onclick=\"javascript:app.alert('This user has disabled chat for themselves.', 'Unable to Chat');\" class=\"button button-raised color-red\" style=\"min-width: 150px;\">Chat Disabled</a>\n            ";
;
}
output += "\n            <a onclick=\"javascript:viewStaffInformation('";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "userid"), env.opts.autoescape);
output += "', '";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "role"), env.opts.autoescape);
output += "');\" class=\"button button-raised color-blue\">Info</a>\n        </p>\n    </div>\n</li>";
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

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["discussionfeeditemtemplate.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<li>\n    <a href=\"javascript:displayDiscussionFeedPopup('";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "escapedbody"), env.opts.autoescape);
output += "', '";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "escapedname"), env.opts.autoescape);
output += "');\" class=\"item-link item-content\">\n        <div class=\"item-media\">\n            <i class=\"fa fa-user fa-3x\" aria-hidden=\"true\"></i>\n        </div>\n        <div class=\"item-inner\">\n            <div class=\"item-title-row\">\n                <div class=\"item-title\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "name"), env.opts.autoescape);
output += "</div>\n                <div class=\"item-after\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "timestamp"), env.opts.autoescape);
output += "</div>\n            </div>\n            <div class=\"item-text\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "body"), env.opts.autoescape);
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

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["editcoursefaqitemtemplate.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<div data-page=\"editcoursefaqitem\" class=\"page\">\n    <div class=\"navbar\">\n        <div class=\"navbar-inner\">\n            <div class=\"left\">\n                <a href=\"#\" class=\"back link\">\n                    <i class=\"fa fa-arrow-left\"></i>\n                </a>\n            </div>\n            <div class=\"center pagetitle\">Edit FAQ Item</div>\n            <div class=\"right\">\n                <a href=\"#\" class=\"link icon-only open-panel mobilemenubutton\">\n                    <i class=\"fa fa-bars\"></i>\n                </a>\n            </div>\n        </div>\n    </div>\n    <div class=\"page-content\">\n        <form id=\"managestudentform\" class=\"list-block\">\n            <ul>\n                <li>\n                    <div class=\"item-content\">\n                        <div class=\"item-media\">\n                            <i class=\"fa fa-tag fa-fw fa-lg\"></i>\n                        </div>\n                        <div class=\"item-inner\">\n                            <div class=\"item-title floating-label\">Title</div>\n                            <div class=\"item-input\">\n                                <input type=\"text\" name=\"createfaqitem_title\" value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "title"), env.opts.autoescape);
output += "\">\n                            </div>\n                        </div>\n                    </div>\n                </li>\n                <li>\n                    <div class=\"item-content\">\n                        <div class=\"item-media\">\n                            <i class=\"fa fa-file-alt fa-fw fa-lg\"></i>\n                        </div>\n                        <div class=\"item-inner\">\n                            <div class=\"item-title floating-label\">Body</div>\n                            <div class=\"item-input\">\n                                <textarea id=\"createfaqitem_body\" cols=\"30\" rows=\"7\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "body"), env.opts.autoescape);
output += "</textarea>\n                            </div>\n                        </div>\n                    </div>\n                </li>\n            </ul>\n        </form>\n        <a onclick=\"javascript:saveCourseFAQItem('";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
output += "');\" class=\"button button-raised button-fill color-green\">Save</a>\n    </div>\n</div>";
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

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["editcoursestaffinfotemplate.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<div data-page=\"editcoursestaffinfo\" class=\"page\">\n    <div class=\"navbar\">\n        <div class=\"navbar-inner\">\n            <div class=\"left\">\n                <a href=\"#\" class=\"back link\">\n                    <i class=\"fa fa-arrow-left\"></i>\n                </a>\n            </div>\n            <div class=\"center pagetitle\">Edit Information</div>\n            <div class=\"right\">\n                <a href=\"#\" class=\"link icon-only open-panel mobilemenubutton\">\n                    <i class=\"fa fa-bars\"></i>\n                </a>\n            </div>\n        </div>\n    </div>\n    <div class=\"page-content\">\n        <form id=\"managestudentform\" class=\"list-block\">\n            <ul>\n                <li>\n                    <div class=\"item-content\">\n                        <div class=\"item-media\">\n                            <i class=\"fa fa-envelope fa-fw fa-lg\"></i>\n                        </div>\n                        <div class=\"item-inner\">\n                            <div class=\"item-title floating-label\">Your Email</div>\n                            <div class=\"item-input\">\n                                <input type=\"email\" name=\"editstaffinfo_email\" value=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "email"), env.opts.autoescape);
output += "\">\n                            </div>\n                        </div>\n                    </div>\n                </li>\n                <li>\n                    <div class=\"item-content\">\n                        <div class=\"item-media\">\n                            <i class=\"fa fa-sticky-note fa-fw fa-lg\"></i>\n                        </div>\n                        <div class=\"item-inner\">\n                            <div class=\"item-title floating-label\">Information</div>\n                            <div class=\"item-input\">\n                                <textarea id=\"editstaffinfo_info\" cols=\"30\" rows=\"5\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "info"), env.opts.autoescape);
output += "</textarea>\n                            </div>\n                        </div>\n                    </div>\n                </li>\n                ";
if(runtime.contextOrFrameLookup(context, frame, "module_engage")) {
output += "\n                <li>\n                    <div class=\"item-content\">\n                        <div class=\"item-media\">\n                            <i class=\"fa fa-comments fa-fw fa-lg\"></i>\n                        </div>\n                        <div class=\"item-inner\">\n                            <div class=\"item-title\">Allow students to chat me</div>\n                            <div class=\"item-input\">\n                                <label class=\"label-switch\">\n                                    ";
if(runtime.contextOrFrameLookup(context, frame, "allowchat")) {
output += "\n                                    <input name=\"editstaffinfo_allowchat\" type=\"checkbox\" checked>\n                                    ";
;
}
else {
output += "\n                                    <input name=\"editstaffinfo_allowchat\" type=\"checkbox\">\n                                    ";
;
}
output += "\n                                    <div class=\"checkbox\"></div>\n                                </label>\n                            </div>\n                        </div>\n                    </div>\n                </li>\n                ";
;
}
output += "\n            </ul>\n        </form>\n        <a onclick=\"javascript:saveStaffInfo();\" class=\"button button-raised button-fill color-green\">Save</a>\n    </div>\n</div>";
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

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["engageitemtemplate.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<li data-recordid=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "userid"), env.opts.autoescape);
output += "\" class=\"engageitem\">\n    <a href=\"javascript:displayManageEngageItemDialog('";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "userid"), env.opts.autoescape);
output += "', '";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "escapedbody"), env.opts.autoescape);
output += "', '";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "escapedname"), env.opts.autoescape);
output += "');\" class=\"item-link item-content\">\n        <div class=\"item-media\">\n            ";
if(runtime.contextOrFrameLookup(context, frame, "modcorrect")) {
output += "\n                <i class=\"fa fa-check fa-3x\" aria-hidden=\"true\" title=\"Response marked as correct.\"></i>\n            ";
;
}
else {
if(runtime.contextOrFrameLookup(context, frame, "modincorrect")) {
output += "\n                <i class=\"fa fa-times fa-3x\" aria-hidden=\"true\" title=\"Response marked as incorrect.\"></i>\n            ";
;
}
else {
output += "\n                ";
if(runtime.contextOrFrameLookup(context, frame, "submitted")) {
output += "\n                    ";
if(runtime.contextOrFrameLookup(context, frame, "correct")) {
output += "\n                        <i class=\"fa fa-check fa-3x\" aria-hidden=\"true\" title=\"Student's response was correct.\"></i>\n                    ";
;
}
else {
output += "\n                        <i class=\"fa fa-times fa-3x\" aria-hidden=\"true\" title=\"Student's response was incorrect.\"></i>\n                    ";
;
}
output += "\n                ";
;
}
else {
output += "\n                    <i class=\"fa fa-times fa-3x\" aria-hidden=\"true\" title=\"Student did not submit a response.\"></i>\n                ";
;
}
output += "\n            ";
;
}
;
}
output += " \n        </div>\n        <div class=\"item-inner\">\n            <div class=\"item-title-row\">\n                <div class=\"item-title\" style=\"font-weight: bold;\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "name"), env.opts.autoescape);
output += "</div>\n                <div class=\"item-after\" style=\"font-weight: bold;\">ID: <span class=\"searchableitem\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "studentid"), env.opts.autoescape);
output += "</span></div>\n            </div>\n            ";
if(runtime.contextOrFrameLookup(context, frame, "modcorrect")) {
output += "\n                <div class=\"item-subtitle\"><span style=\"font-weight: bold;\">Response manually marked as correct.</span></div>\n            ";
;
}
else {
if(runtime.contextOrFrameLookup(context, frame, "modincorrect")) {
output += "\n                <div class=\"item-subtitle\"><span style=\"font-weight: bold;\">Response manually marked as incorrect.</span></div>\n            ";
;
}
else {
output += "\n                ";
if(runtime.contextOrFrameLookup(context, frame, "submitted")) {
output += "\n                    <div class=\"item-subtitle\">Device: <span class=\"searchableitem\" style=\"font-weight: bold;\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "device"), env.opts.autoescape);
output += "</span></div>\n                ";
;
}
else {
output += "\n                    <div class=\"item-subtitle\"><span style=\"font-weight: bold;\">Student did not submit a response.</span></div>\n                ";
;
}
output += "\n            ";
;
}
;
}
output += "\n            ";
if(runtime.contextOrFrameLookup(context, frame, "response")) {
output += "\n                <div class=\"item-subtitle\">Response: <span class=\"searchableitem\" style=\"font-weight: bold;\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "response"), env.opts.autoescape);
output += "</span></div>\n            ";
;
}
output += "\n            ";
if(runtime.contextOrFrameLookup(context, frame, "graded")) {
output += "\n            <div class=\"item-subtitle\">Points: <span style=\"font-weight: bold;\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "points"), env.opts.autoescape);
output += "</span></div>\n            ";
;
}
output += "\n            ";
if(runtime.contextOrFrameLookup(context, frame, "timestamp")) {
output += "\n                <div class=\"item-subtitle\">Submitted at: <span style=\"font-weight: bold;\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "timestamp"), env.opts.autoescape);
output += "</span></div>\n            ";
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

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["enrolledcourseitemtemplate.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<li>\n    <a href=\"javascript:loadCourse('";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "courseid"), env.opts.autoescape);
output += "');\" class=\"item-link item-content\">\n        <div class=\"item-media\">\n            <i class=\"fa fa-list-alt fa-3x\" aria-hidden=\"true\"></i>\n        </div>\n        <div class=\"item-inner\">\n            <div class=\"item-title-row\">\n                <div class=\"item-title\" style=\"font-weight: bold;\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "name"), env.opts.autoescape);
output += "</div>\n            </div>\n            <div class=\"item-subtitle\">Professor: ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "professor"), env.opts.autoescape);
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

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["enrolledstudentitemtemplate.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<li>\n    <a href=\"javascript:manageEnrolledStudent('";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "userid"), env.opts.autoescape);
output += "');\" class=\"item-link item-content\">\n        <div class=\"item-media\">\n            <i class=\"fa fa-user fa-3x\" aria-hidden=\"true\"></i>\n        </div>\n        <div class=\"item-inner\">\n            <div class=\"item-title-row\">\n                <div class=\"item-title\" style=\"font-weight: bold;\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "name"), env.opts.autoescape);
output += "</div>\n            </div>\n            <div class=\"item-subtitle\">ID: <span class=\"searchableitem\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "studentid"), env.opts.autoescape);
output += "</span></div>\n        </div>\n    </a>\n</li>";
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

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["managestudent_attendancerecorditem.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<li data-recordid=\"";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "userid"), env.opts.autoescape);
output += "\" class=\"attendanceitem\">\n        <a href=\"javascript:loadIndividualAttendanceRecordPage('";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "recordid"), env.opts.autoescape);
output += "');\" class=\"item-link item-content\">\n            <div class=\"item-media\">\n                ";
if(runtime.contextOrFrameLookup(context, frame, "modpresent")) {
output += "\n                    <i class=\"fa fa-calendar-check fa-3x\" aria-hidden=\"true\" title=\"Student marked as present.\"></i>\n                ";
;
}
else {
output += "\n                    ";
if(runtime.contextOrFrameLookup(context, frame, "modabsent")) {
output += "\n                    <i class=\"fa fa-calendar-times fa-3x\" aria-hidden=\"true\" title=\"Student marked as absent.\"></i>\n                    ";
;
}
else {
output += "\n                        ";
if(runtime.contextOrFrameLookup(context, frame, "submitted")) {
output += "\n                            ";
if(runtime.contextOrFrameLookup(context, frame, "codecorrect")) {
output += "\n                                ";
if(runtime.contextOrFrameLookup(context, frame, "requiregpsverification")) {
output += "\n                                    ";
if(runtime.contextOrFrameLookup(context, frame, "onlygps")) {
output += "\n                                        ";
if(runtime.contextOrFrameLookup(context, frame, "locationpassedverification")) {
output += "\n                                            <i class=\"fa fa-calendar-check fa-3x\" aria-hidden=\"true\" title=\"Student passed gps verification.\"></i>\n                                        ";
;
}
else {
output += "\n                                            <i class=\"fa fa-calendar-times fa-3x\" aria-hidden=\"true\" title=\"Student failed gps verification.\"></i>\n                                        ";
;
}
output += "\n                                    ";
;
}
else {
output += "\n                                        ";
if(runtime.contextOrFrameLookup(context, frame, "locationpassedverification")) {
output += "\n                                            <i class=\"fa fa-calendar-check fa-3x\" aria-hidden=\"true\" title=\"Student entered code correctly and passed gps verification.\"></i>\n                                        ";
;
}
else {
output += "\n                                            <i class=\"fa fa-calendar-times fa-3x\" aria-hidden=\"true\" title=\"Student entered code correctly but failed gps verification.\"></i>\n                                        ";
;
}
output += "\n                                    ";
;
}
output += "\n                                ";
;
}
else {
output += "\n                                    <i class=\"fa fa-calendar-check fa-3x\" aria-hidden=\"true\" title=\"Student entered code correctly.\"></i>\n                                ";
;
}
output += "\n                            ";
;
}
else {
output += "\n                                <i class=\"fa fa-calendar-times fa-3x\" aria-hidden=\"true\" title=\"Student failed to enter code correctly.\"></i>\n                            ";
;
}
output += "\n                        ";
;
}
else {
output += "\n                            <i class=\"fa fa-calendar-times fa-3x\" aria-hidden=\"true\" title=\"Student did not check in for attendance.\"></i>\n                        ";
;
}
output += "\n                    ";
;
}
output += "\n                ";
;
}
output += "\n            </div>\n            <div class=\"item-inner\">\n                <div class=\"item-title-row\">\n                    <div class=\"item-title\" style=\"font-weight: bold;\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "recordtimestamp"), env.opts.autoescape);
output += "</div>\n                </div>\n                ";
if(runtime.contextOrFrameLookup(context, frame, "modpresent")) {
output += "\n                <div class=\"item-subtitle\"><span style=\"font-weight: bold;\">Student manually marked as present.</span></div>\n                ";
;
}
else {
output += "\n                    ";
if(runtime.contextOrFrameLookup(context, frame, "modabsent")) {
output += "\n                    <div class=\"item-subtitle\"><span style=\"font-weight: bold;\">Student manually marked as absent.</span></div>\n                    ";
;
}
else {
output += "\n                        ";
if(runtime.contextOrFrameLookup(context, frame, "submitted")) {
output += "\n                            ";
if(runtime.contextOrFrameLookup(context, frame, "requiregpsverification")) {
output += "\n                                <div class=\"item-subtitle\">Passed location verification: <span style=\"font-weight: bold;\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "locationpassedverification"), env.opts.autoescape);
output += "</span></div>\n                                <div class=\"item-subtitle\">GPS Enabled: <span style=\"font-weight: bold;\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "gpsenabled"), env.opts.autoescape);
output += "</span></div>\n                            ";
;
}
output += "\n                            <div class=\"item-subtitle\">Device: <span class=\"searchableitem\" style=\"font-weight: bold;\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "device"), env.opts.autoescape);
output += "</span></div>\n                        ";
;
}
else {
output += "\n                            <div class=\"item-subtitle\"><span style=\"font-weight: bold;\">Student did not check in for attendance.</span></div>\n                        ";
;
}
output += "\n                        ";
if(runtime.contextOrFrameLookup(context, frame, "timestamp")) {
output += "\n                            <div class=\"item-subtitle\">Checked in at: <span style=\"font-weight: bold;\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "timestamp"), env.opts.autoescape);
output += "</span></div>\n                        ";
;
}
output += "\n                    ";
;
}
output += "\n                ";
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

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["managestudenttemplate.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<div data-page=\"managestudent\" class=\"page\">\n    <div class=\"navbar\">\n        <div class=\"navbar-inner\">\n            <div class=\"left\">\n                <a href=\"#\" class=\"back link\">\n                    <i class=\"fa fa-arrow-left\"></i>\n                </a>\n            </div>\n            <div class=\"center pagetitle\">Manage Student</div>\n            <div class=\"right\">\n                <a href=\"#\" class=\"link icon-only open-panel mobilemenubutton\">\n                    <i class=\"fa fa-bars\"></i>\n                </a>\n            </div>\n        </div>\n    </div>\n    <div class=\"page-content\">\n        <div class=\"content-block\">\n            <h1 id=\"managestudent_name\" class=\"allowselect\">Name: ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "name"), env.opts.autoescape);
output += "</h1>\n            <h3 id=\"managestudent_id\" class=\"allowselect\">Student ID: ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "studentid"), env.opts.autoescape);
output += "</h3>\n            <h3 id=\"managestudent_id\" class=\"allowselect\">Email: ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "email"), env.opts.autoescape);
output += "</h3>\n        </div>\n        <form id=\"managestudentform\" class=\"list-block\">\n            <ul>\n                <li>\n                    <div class=\"item-content\">\n                        <div class=\"item-media\">\n                            <i class=\"fa fa-sticky-note fa-fw fa-lg\"></i>\n                        </div>\n                        <div class=\"item-inner\">\n                            <div class=\"item-title floating-label\">Notes</div>\n                            <div class=\"item-input\">\n                                <textarea id=\"managestudent_notestext\" cols=\"30\" rows=\"5\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "notes"), env.opts.autoescape);
output += "</textarea>\n                            </div>\n                        </div>\n                    </div>\n                </li>\n            </ul>\n            <a onclick=\"javascript:saveManageStudentNotes('";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "userid"), env.opts.autoescape);
output += "');\" class=\"button button-raised button-fill color-gray\" style=\"float: right;\">Save Notes</a>\n        </form>\n        <div class=\"content-block-title\">Options</div>\n        <div class=\"card\">\n            <div class=\"list-block\">\n                <ul>\n                    ";
if(runtime.contextOrFrameLookup(context, frame, "module_engage")) {
output += "\n                    <li>\n                        <a href=\"javascript:viewStudentEngageRecords('";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "userid"), env.opts.autoescape);
output += "');\" class=\"list-button item-link attendance-module\"><i class=\"fa fa-list-ol\" aria-hidden=\"true\"></i> View Engage Records</a>\n                    </li>\n                    ";
;
}
output += "\n                    ";
if(runtime.contextOrFrameLookup(context, frame, "module_attendance")) {
output += "\n                    <li>\n                        <a href=\"javascript:viewStudentAttendanceRecords('";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "userid"), env.opts.autoescape);
output += "');\" class=\"list-button item-link attendance-module\"><i class=\"fa fa-calendar-alt\" aria-hidden=\"true\"></i> View Attendance Records</a>\n                    </li>\n                    ";
;
}
output += "\n                    <li>\n                        <a href=\"javascript:removeStudentFromCourse('";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "userid"), env.opts.autoescape);
output += "');\" class=\"list-button item-link\"><i class=\"fa fa-trash\" aria-hidden=\"true\"></i> Remove from Course</a>\n                    </li>\n                </ul>\n            </div>\n        </div>\n    </div>\n</div>";
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

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["managetaitemtemplate.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<li class=\"item-content\">\n    <div class=\"item-media\">\n        <i class=\"fa fa-user fa-3x\" aria-hidden=\"true\"></i>\n    </div>\n    <div class=\"item-inner\">\n        <div class=\"item-title\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "name"), env.opts.autoescape);
output += "</div>\n    </div>\n    <p class=\"buttons-row\">\n        <a onclick=\"javascript:manageTAPermissions('";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "userid"), env.opts.autoescape);
output += "');\" class=\"button button-raised color-green\" style=\"width: 200px;\">Permissions</a>\n        <a onclick=\"javascript:removeTAFromCourse('";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "userid"), env.opts.autoescape);
output += "');\" class=\"button button-raised color-red\">Remove</a>\n    </p>\n</li>";
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

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["notificationtemplate.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<li class=\"item-content\">\n    <div class=\"item-media\">\n        <i class=\"fa fa-bell fa-3x\"></i>\n    </div>\n    <div class=\"item-inner\">\n        <div class=\"item-title-row\">\n            <div class=\"item-title\" style=\"font-weight: bold;\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "title"), env.opts.autoescape);
output += "</div>\n            <div class=\"item-after\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "time"), env.opts.autoescape);
output += "</div>\n        </div>\n        <div class=\"item-text\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "body"), env.opts.autoescape);
output += "</div>\n        <p class=\"buttons-row\">\n            <a onclick=\"javascript:";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "action"), env.opts.autoescape);
output += "\" class=\"button button-raised\">View</a>\n            <a onclick=\"javascript:removeNotification('";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
output += "');\" class=\"button button-raised color-red\">Delete</a>\n        </p>\n    </div>\n</li>";
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

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["quizitemtemplate.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<li>\n    <a href=\"javascript:loadQuizItem('";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "id"), env.opts.autoescape);
output += "', '";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "folderid"), env.opts.autoescape);
output += "');\" class=\"item-link item-content\">\n        <div class=\"item-media\">\n            <i class=\"fa fa-question fa-3x\" aria-hidden=\"true\"></i>\n        </div>\n        <div class=\"item-inner\">\n            <div class=\"item-title-row\">\n                <div class=\"item-title\" style=\"font-weight: bold;\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "prompt"), env.opts.autoescape);
output += "</div>\n            </div>\n            <div class=\"item-subtitle\">Type: ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "type"), env.opts.autoescape);
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

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["staffinfotemplate.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<div data-page=\"staffinfo\" class=\"page\">\n    <div class=\"navbar\">\n        <div class=\"navbar-inner\">\n            <div class=\"left\">\n                <a href=\"#\" class=\"back link\">\n                    <i class=\"fa fa-arrow-left\"></i>\n                </a>\n            </div>\n            <div class=\"center pagetitle\">Info</div>\n            <div class=\"right\">\n                <a href=\"#\" class=\"link icon-only open-panel mobilemenubutton\">\n                    <i class=\"fa fa-bars\"></i>\n                </a>\n            </div>\n        </div>\n    </div>\n    <div class=\"page-content\">\n        <div class=\"content-block\">\n            <h1 id=\"managestudent_name\" class=\"allowselect\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "name"), env.opts.autoescape);
output += "</h1>\n            <h3 id=\"managestudent_id\" class=\"allowselect\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "role"), env.opts.autoescape);
output += "</h3>\n        </div>\n        ";
if(runtime.contextOrFrameLookup(context, frame, "email")) {
output += "\n        <div class=\"content-block-title\">Email</div>\n        <div class=\"content-block\">\n            <p class=\"allowselect\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "email"), env.opts.autoescape);
output += "</p>\n        </div>\n        ";
;
}
output += "\n        ";
if(runtime.contextOrFrameLookup(context, frame, "info")) {
output += "\n        <div class=\"content-block-title\">Info</div>\n        <div class=\"content-block\">\n            <p class=\"allowselect\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "info"), env.opts.autoescape);
output += "</p>\n        </div>\n        ";
;
}
output += "\n    </div>\n</div>";
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

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["subscriptionstatusitemtemplate.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<li>\n    <div class=\"item-content\">\n        <div class=\"item-media\">\n            ";
if(runtime.contextOrFrameLookup(context, frame, "sub_attendance")) {
output += "\n            <i class=\"fa fa-calendar-check fa-3x\" aria-hidden=\"true\" title=\"Attendance Subscription\"></i>\n            ";
;
}
else {
output += "\n            <i class=\"fa fa-flask fa-3x\" aria-hidden=\"true\" title=\"Engage Subscription\"></i>\n            ";
;
}
output += "\n        </div>\n        <div class=\"item-inner\">\n            <div class=\"item-title-row\">\n                <div class=\"item-title\" style=\"font-weight: bold;\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "title"), env.opts.autoescape);
output += "</div>\n                ";
if(runtime.contextOrFrameLookup(context, frame, "expires")) {
output += "\n                <div class=\"item-after\" style=\"font-weight: bold;\">Expires:\n                    <span class=\"searchableitem\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "expires"), env.opts.autoescape);
output += "</span>\n                </div>\n                ";
;
}
output += "\n            </div>\n            <div class=\"item-subtitle\">\n                <span style=\"font-weight: bold;\">Status: ";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "status"), env.opts.autoescape);
output += "</span>\n            </div>\n        </div>\n    </div>\n</li>";
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

(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["waitliststudentitemtemplate.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
output += "<li class=\"item-content\">\n    <div class=\"item-media\">\n        <i class=\"fa fa-user fa-3x\" aria-hidden=\"true\"></i>\n    </div>\n    <div class=\"item-inner\">\n        <div class=\"item-title\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "name"), env.opts.autoescape);
output += "</div>\n        <div class=\"item-subtitle\">ID:\n            <span class=\"searchableitem\">";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "studentid"), env.opts.autoescape);
output += "</span>\n        </div>\n        <p class=\"buttons-row\">\n            <a onclick=\"javascript:addStudentFromWaitlist('";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "userid"), env.opts.autoescape);
output += "');\" class=\"button button-raised color-green\">Accept</a>\n            <a onclick=\"javascript:rejectStudentFromWaitlist('";
output += runtime.suppressValue(runtime.contextOrFrameLookup(context, frame, "userid"), env.opts.autoescape);
output += "');\" class=\"button button-raised color-red\">Reject</a>\n        </p>\n    </div>\n</li>";
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
