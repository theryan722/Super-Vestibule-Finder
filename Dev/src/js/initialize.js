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