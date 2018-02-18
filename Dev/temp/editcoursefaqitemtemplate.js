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
