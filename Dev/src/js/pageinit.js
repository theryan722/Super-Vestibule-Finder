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

app.onPageInit('pickuplines', function (page) {
    loadPickupLines();
    runPickupLineTimer();
});

app.onPageInit('vestibulefinder', function (page) {
    loadVestibules();
});

app.onPageInit('vestibulereviews', function (page) {
    loadVestibuleReviews();
});

app.onPageBeforeRemove('ridsomeone', function (page) {
    stopAlarm()
});