//Exits the mobile app
function exitApp() {
    navigator.app.exitApp();
}

function loginUser() {
    if ($$('input[name=login_id]').val()) {
        updateCurrentUser($$('input[name=login_id]').val()).then(function (res) {
            if (res) {
                loadHomePage();
                updateMenuUserInfo();
                startGPS();
            } else {
                app.addNotification({message: 'That ID does not appear to exist.'});
            }
        });
    }
}

function updateMenuUserInfo() {
    $$('.menu_account_name').html(currentuser.name);
    $$('.menu_account_role').html(currentuser.type.charAt(0).toUpperCase() + currentuser.type.substring(1));
}

function updateCurrentUser(userid) {
    return new Promise(function (resolve, reject) {
        localStorage.setItem('restrainalert_userid', userid);
        firebase.firestore().collection('users').doc(userid).get().then(function (uinfo) {
            if (uinfo.exists) {
                currentuser = {
                    id: userid,
                    type: uinfo.data().type,
                    name: uinfo.data().name,
                    summary: uinfo.data().summary,
                    other: uinfo.data().other,
                    distance: uinfo.data().distance
                }
                updateMenuUserInfo();
                resolve(true);
            } else {
                resolve(false);
            }
        }).catch(function (error) {
            reject(error);
            app.alert('There was an error attempting to get the userinfo. Is the userid correct?', 'Error');
        });
    });
}

function setUserFromLocalStorage() {
    return new Promise(function (resolve, reject) {
        let localid = localStorage.getItem('restrainalert_userid');
        if (localid) {
            firebase.firestore().collection('users').doc(localid).get().then(function (uinfo) {
                if (uinfo.exists) {
                    currentuser = {
                        id: localid,
                        type: uinfo.data().type,
                        name: uinfo.data().name,
                        summary: uinfo.data().summary,
                        other: uinfo.data().other,
                        distance: uinfo.data().distance
                    }
                    updateMenuUserInfo();
                    resolve(true);
                    startGPS();
                } else {
                    resolve(false);
                }
            }).catch(function (error) {
                reject(error);
                app.alert('There was an error attempting to get the userinfo. Is the userid correct?', 'Error');
            });
        } else {
            resolve(false);
        }
    });
}

function getTempUsers() {
    firebase.firestore().collection('users').get().then(function (victs) {
        victs.forEach(function (vict) {
            console.log('id: ' + vict.id + ' data: ', vict.data());
        });
    });
}

function setupTempUsers() {
    firebase.firestore().collection('users').doc('a1z').set({
        name: 'Jackie Wang',
        type: 'victim',
        summary: 'Abused by his boyfriend',
        other: 'bb8',
        distance: 50
    });
    firebase.firestore().collection('users').doc('bb8').set({
        name: 'Chris Wong',
        type: 'abuser',
        summary: 'Beat his boyfriend every night',
        other: 'a1z',
        distance: 50
    });
}

function sendUserLocation() {
    return new Promise(function (resolve, reject) {
        getCurrentLocation().then(function (locdata) {
            let location = {
                latitude: locdata.coords.latitude,
                longitude: locdata.coords.longitude
            }
            currentlocation = location;
            firebase.firestore().collection('users').doc(currentuser.id).update({
                lastseen: firebase.firestore.FieldValue.serverTimestamp(),
                location
            }).then(function () {
                resolve();
            });
        });
    });
}


function getLocationOfOtherPerson() {
    return new Promise(function (resolve, reject) {
        if (currentuser && currentuser.other) {
            firebase.firestore().collection('users').doc(currentuser.other).get().then(function (oinfo) {
                if (oinfo.exists) {
                    if (oinfo.data().location) {
                        resolve(oinfo.data().location);
                    } else {
                        resolve(false);
                    }
                } else {
                    resolve(false);
                }
            });
        } else {
            reject();
        }
    });
}

function checkIfTooCloseToPerson() {
    return new Promise(function (resolve, reject) {
        getLocationOfOtherPerson().then(function (oloc) {
            if (oloc) {
                if (currentlocation) {
                    if (getDistanceInFeet(currentlocation.latitude, currentlocation.longitude, oloc.latitude, oloc.longitude) < currentuser.distance) {
                        resolve(true);
                    } else {
                        resolve(false);
                    }
                } else {
                    reject();
                }
            } else {
                resolve(false);
            }
        }).catch(function (error) {
            reject();
        });
    });
}

function startGPS() {
    app.addNotification({message: 'Started GPS tracking...'});
    setInterval(function () {
        if (runsendinterval) {
            sendUserLocation();
        }
    }, 6000);
    setInterval(function () {
        if (runcheckinterval) {
            checkIfTooCloseToPerson().then(function (isclose) {
                if (isclose) {
                    if (currentuser.type === 'victim') {
                        loadWarningVictimPage();
                    } else {
                        //abuser
                        loadWarningAbuserPage();
                    }
                }
            });
        }
    }, 4000);
}

function signOut() {
    app.confirm('Are you sure you want to sign out?', 'Sign Out', function  () {
        localStorage.removeItem('restrainalert_userid');
        location.reload();
    });
}

function alertAuthorities() {
    app.alert('In this scenario, either 911 or some other operator would be dialed. They will also receive the users location in real time and the last time they were seen.', 'Alert Emergency Services');
}
function initializeDeviceOptions() {
    loadElementHtml('#mobilemenu', 'menu/mobilemenu.html', function () {

    });
}

//Checks if on ios and mobile app
function checkIfIOSApp() {
    return app.device.iphone && iscordova;
}

function checkIfIOS() {
    return app.device.iphone;
}

function checkIfAndroid() {
    return app.device.android;
}

function checkIfDesktop() {
    return (!checkIfIOS() && !checkIfAndroid());
}

function checkIfMobile() {
    if (checkIfIOS() || checkIfAndroid()) {
        return true;
    } else {
        return false;
    }
}
//Uploads a file to the specified path
function uploadFile(loc, filesrc, mimetype = 'application/zip', callback = undefined) {
    var storageRef = firebase.storage().ref(loc).put(filesrc, { contentType: mimetype });
    storageRef.on(firebase.storage.TaskEvent.STATE_CHANGED, function (snapshot) {
        //var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
                break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
                app.showIndicator();
                break;
        }
    }, function (error) {
        app.hideIndicator();
        app.alert('There was an error attempting to upload the file.', 'Error');
        return;
    }, function () {
        // Upload completed successfully, now we can get the download URL
        app.hideIndicator();
        if (typeof callback !== 'undefined') {
            callback(storageRef.snapshot.downloadURL);
        }
    });
}

//Uploads an image to the specified path
function uploadImage(loc, img, callback = undefined) {
    var storageRef = firebase.storage().ref(loc).put(img, { contentType: 'image/jpeg' });
    storageRef.on(firebase.storage.TaskEvent.STATE_CHANGED, function (snapshot) {
        //var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
                break;
            case firebase.storage.TaskState.RUNNING: // or 'running'
                app.showIndicator();
                break;
        }
    }, function (error) {
        app.hideIndicator();
        app.alert('There was an error attempting to upload the image.', 'Error');
        return;
    }, function () {
        // Upload completed successfully, now we can get the download URL
        app.hideIndicator();
        if (typeof callback !== 'undefined') {
            callback(storageRef.snapshot.downloadURL);
        }
    });
}
function getCurrentLocation() {
	return new Promise(function (resolve, reject) {
		let options = {
			enableHighAccuracy: true,
			timeout: 15000,
			maximumAge: 0
		};
		function gpsSuccess(position) {
			resolve(position);
		}
		function gpsError(error) {
			reject(error);
		}
		navigator.geolocation.getCurrentPosition(gpsSuccess, gpsError, options) ;
	});
}

function getDistanceInFeet(lat1, lon1, lat2, lon2) {
	let radlat1 = Math.PI * lat1 / 180;
	let radlat2 = Math.PI * lat2 / 180;
	let theta = lon1 - lon2;
	let radtheta = Math.PI * theta / 180;
	let dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
	dist = Math.acos(dist);
	dist = dist * 180 / Math.PI;
	dist = dist * 60 * 1.1515;
	return dist * 5280;
}
var currentuser; //Current user data
var desktopMenuView = undefined; //View for desktop menu
var iscordova = false; //If cordova
var loading = false; //Used to determine if infinite scroll or pull to refresh is loading
//==================================
var currentlocation; //Current location of user
var runsendinterval = true; //Whether to run the send gps location interval
var runcheckinterval = true; //Whether to check for location
//==================================
const appversion = '1.0.0'; //Version of the app
const modalcancelbutton = {
    text: '<span style="color: #f44336;">Cancel</span>',
    close: true
} //Cancel button for dialogs
//-------- Initialize Framework7 ----------
var app = new Framework7({
    material: true,
    uniqueHistory: true,
    domCache: true,
    modalTitle: 'Restrain-Alert',
    notificationHold: 3000,
    animatePages: false,
    smartSelectSearchbar: true,
    tapHold: true,
    fastClicks: true,
    //swipePanel: 'left',
    onAjaxStart: function (xhr) {
        app.showIndicator();
    },
    onAjaxComplete: function (xhr) {
        app.hideIndicator();
    }
});
var $$ = Dom7; //DOM Library

var mainView = app.addView('.view-main', {
    main: true
});
//------ End Initialize Framework7 -------

//====Cordova=======
if (app.device.iphone || app.device.android) {
    loadScript('cordova.js');
}
document.addEventListener('deviceready', onDeviceReady, false);
function onDeviceReady() {
    iscordova = true;
    if (app.device.android) {
        document.addEventListener("backbutton", onAndroidBackKeyDown, false);
        document.addEventListener("menubutton", onAndroidMenuKeyDown, false);
    }
    window.open = cordova.InAppBrowser.open;
}
//==== End Cordova=====
//------ Initialize Firebase ----------
var firebaseconfig = {
    apiKey: "AIzaSyAB7vq4NNBFMpuKxwAQBhstrBS-Ut6nZ5U",
    authDomain: "pennapps-7bdee.firebaseapp.com",
    databaseURL: "https://pennapps-7bdee.firebaseio.com",
    projectId: "pennapps-7bdee",
    storageBucket: "pennapps-7bdee.appspot.com",
    messagingSenderId: "946877271388"
};
firebase.initializeApp(firebaseconfig);

//------ End Initialize Firebase ------
initializeDeviceOptions()
checkIfUserInitialized();
function loadAboutPage() {
    mainView.router.loadPage('pages/about.html');
}

function loadLoginPage() {
    mainView.router.loadPage('pages/login.html');
}

function loadHomePage() {
    mainView.router.loadPage('pages/home.html');
}

function loadWarningAbuserPage() {
    mainView.router.loadPage('pages/warning_abuser.html');
}

function loadWarningVictimPage() {
    mainView.router.loadPage('pages/warning_victim.html');
}
app.onPageInit('*', function (page) {
    if (page.name !== null) {
        setPageURL(page.name);
        updatePageTitle();
    }
});

app.onPageAfterBack('*', function (page) {
    if (mainView.activePage.name === 'panel-left') {
        setTimeout(function () {
            loadHomePage();
        }, 150);
    }
});

app.onPageInit('about', function (page) {
    $$('#about_appversion').html('Version ' + appversion);
});

app.onPageInit('warning_victim', function (page) {
    runcheckinterval = false;
});

app.onPageInit('warning_abuser', function (page) {
    runcheckinterval = false;
});

app.onPageBeforeRemove('warning_victim', function (page) {
    runcheckinterval = true;
});

app.onPageBeforeRemove('warning_abuser', function (page) {
    runcheckinterval = true;
});
function goBack() {
    return new Promise(function (resolve, reject) {
        if ($$('.modal-in').length > 0) {
            app.closeModal();
        } else if ($$('.panel-left').hasClass('active')) {
            app.closePanel();
        } else {
            if (mainView.activePage.name === 'courses') {
                exitApp();
            } else {
                mainView.router.back();
            }
        }
        resolve();
    });
}

function onAndroidBackKeyDown() {
    goBack();
}

function onAndroidMenuKeyDown() {
    app.openPanel('left');
}

//Cleans the url of hashes and search parameters
function cleanURL() {
    return new Promise(function (resolve, reject) {
        let nurl = '';
        if (window.location.hash) {
            nurl = window.location.href.substr(0, window.location.href.indexOf('#'));
        }
        nurl = nurl.substr(0, window.location.href.indexOf('?'));
        history.pushState('', document.title, nurl);
        resolve();
    });
}

//Sets the page url
function setPageURL(pagename, urlparams = undefined) {
    cleanURL().then(function () {
        switch (pagename) {
            case 'course_professormenu':
            case 'course_studentmenu':
            case 'panel-left':
            case 'desktopmainmenu':
                break;
            case 'coursehome':
                location.hash = pagename;
                setTimeout(function () {
                    setURLParameters([{ paramname: 'id', paramvalue: currentcourse.courseid }]);
                }, 300);
                break;
            default:
                location.hash = pagename;
                if (typeof urlparams !== 'undefined') {
                    setTimeout(function () {
                        setURLParameters(urlparams);
                    }, 300);
                }
        }
    });
}

//Set and add parameters to the url
function setURLParameters(paramobjs) {
    let nurl = new URL(window.location.href);
    let first = true;
    for (let key in paramobjs) {
        if (first) {
            nurl.searchParams.set(paramobjs[key].paramname, paramobjs[key].paramvalue);
            first = false;
        } else {
            nurl.searchParams.append(paramobjs[key].paramname, paramobjs[key].paramvalue);
        }
    }
    history.pushState('', document.title, nurl.toString());
}

function updatePageTitle(title = '') {
    if (title) {
        document.title = title;
    } else {
        let last_title = '';
        $$('.pagetitle').each(function (index, e) {
            last_title = $$(e).text();
        });
        document.title = last_title;
    }
}

//Runs commands or loads pages based on hash and search parameters
function checkIfUserInitialized() {
    if (currentuser) {
        loadHomePage();
    } else {
        setUserFromLocalStorage().then(function (uset) {
            if (uset) {
                loadHomePage();
            } else {
                loadLoginPage();
            }
        });
    }
}

$$(window).on('hashchange', function () {
    if (window.location.hash === '#panel-left') {
        loadHomePage();
    }
});
//Load the contents of the url into the specified id
function loadElementHtml(element, url, callback = undefined) {
    $$.get(url, undefined, function (data) {
        $$(element).html(data);
        if (typeof callback !== 'undefined') { callback(); }
    });
}

//Gets html from a file
function getHtmlFromFile(url, callback) {
    $$.get(url, undefined, function (data) {
        callback(data);
    });
}

//Returns current locale/language
function getLocale() {
    return navigator.language || navigator.userLanguage;
}

//Converts epoch time to proper format in users local time
function formatTimeStamp(time, format = 'full') {
    let res;
    if (format === 'full') {
        res = new Date(parseFloat(time)).toLocaleDateString(getLocale(), { hour: "2-digit", minute: "2-digit" });
    } else if (format === 'date') {
        res = new Date(parseFloat(time)).toLocaleDateString(getLocale(), { hour: "2-digit", minute: "2-digit" }).split(', ')[0];
    } else if (format === 'time') {
        res = new Date(parseFloat(time)).toLocaleDateString(getLocale(), { hour: "2-digit", minute: "2-digit" }).split(', ')[1]
    } else if (format === 'chart') {
        let d = new Date(time),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
        res = [year, month, day].join('-');
    }
    return res;
}

//If the body is longer than the max length, trim it
function shortenText(body, maxlength) {
    return (body.length > maxlength) ? body.substring(0, maxlength) + '...' : body;
}

//Generates a unique ID
function generateID() {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return s4() + s4() + s4() + s4() + s4() + s4() + s4() + s4();
}

//Get URL variables
function getURLParameter(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    let regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)");
    let results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

function openURL(url, useinappbrowser = false, displayurl = true) {
    if (checkIfDesktop()) {
        window.open(url, '_blank');
    } else {
        if (useinappbrowser) {
            if (displayurl) {
                window.open(url, '_blank', 'location=yes,EnableViewPortScale=yes');
            } else {
                window.open(url, '_blank', 'location=no,EnableViewPortScale=yes');
            }
        } else {
            window.open(url, '_system');
        }
    }
}

//Loads and appends a script to the body
function loadScript(url, callback = undefined) {
    var script = document.createElement("script")
    script.type = "text/javascript";
    if (script.readyState) {  //IE
        script.onreadystatechange = function () {
            if (script.readyState == "loaded" ||
                script.readyState == "complete") {
                script.onreadystatechange = null;
                if (typeof callback !== 'undefined') {
                    callback();
                }
            }
        };
    } else {
        script.onload = function () {
            if (typeof callback !== 'undefined') {
                callback();
            }
        };
    }
    script.src = url;
    document.getElementsByTagName("body")[0].appendChild(script);
}

//Gets file name from input value
function getFileName(inpval) {
    return inpval.replace(/.*[\/\\]/, '');
}

//Temporary fix for firestore reads not executing after first read
//SEE: https://stackoverflow.com/questions/46899207/second-query-not-working-in-firebase-firestore
function unstickFirestoreDB() {
    firebase.firestore().collection('testcollection').doc('testdoc').set({ fix: Math.random() });
}