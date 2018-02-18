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