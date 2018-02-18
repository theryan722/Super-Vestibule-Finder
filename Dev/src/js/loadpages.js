function loadAboutPage() {
    mainView.router.loadPage('pages/about.html');
}

function loadHomePage() {
    loadVestibuleFinderPage();
}

function loadSettingsPage() {
    mainView.router.loadPage('pages/settings.html');
}

function loadVestibuleFinderPage() {
    mainView.router.loadPage('pages/vestibulefinder.html');
}

function loadPickupLinesPage() {
    mainView.router.loadPage('pages/pickuplines.html');
}

function loadRidSomeonePage() {
    mainView.router.loadPage('pages/ridsomeone.html');
}

function loadVestibuleReviewsPage(id) {
    currentvestibule = id;
    mainView.router.loadPage('pages/vestibulereviews.html');
}