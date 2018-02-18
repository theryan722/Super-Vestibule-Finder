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
