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
    apiKey: "AIzaSyBK4F2Ym71rXJW449pvglzETVvl63aEy88",
    authDomain: "super-vestibule-finder.firebaseapp.com",
    databaseURL: "https://super-vestibule-finder.firebaseio.com",
    projectId: "super-vestibule-finder",
    storageBucket: "super-vestibule-finder.appspot.com",
    messagingSenderId: "215517658982"
};
firebase.initializeApp(firebaseconfig);

//------ End Initialize Firebase ------
initializeDeviceOptions()
checkIfUserInitialized();