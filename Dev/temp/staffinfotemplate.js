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
