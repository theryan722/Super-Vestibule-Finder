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
