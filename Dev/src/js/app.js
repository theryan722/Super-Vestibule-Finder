//Exits the mobile app
function exitApp() {
    navigator.app.exitApp();
}



function updateMenuUserInfo() {
    setTimeout(function () {
        $$('#menu_account_name').html(currentuser.name);
    }, 2000)
}

function updateCurrentUser() {
    return new Promise(function (resolve, reject) {
        let uname = localStorage.getItem('u_name');
        if (uname) {
            currentuser = {
                name: uname
            }
            updateMenuUserInfo(uname);
            resolve();
        } else {
            reject();
        }
    });
}

function setName() {
    if ($$('input[name=namefield]').val()) {
        localStorage.setItem('u_name', $$('input[name=namefield]').val());
        app.addNotification({
            message: 'Set name.'
        });
        updateCurrentUser();
    } else {
        app.alert('Please enter a valid name.', 'Error');
    }
}

function addPickupLine() {
    app.prompt('Enter a new pickup line', 'New Pickup Line', function (newline) {
        if (newline) {
            firebase.firestore().collection('pickuplines').add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                name: currentuser.name,
                body: newline
            }).then(function () {
                app.addNotification({
                    message: 'Added Pickup Line!'
                });
                loadPickupLines();
            }).catch(function (error) {
                app.alert('There was an error attempting to add the pickup line.', 'Error');
            });
        }
    });
}

function loadPickupLines() {
    console.log('wee')
    firebase.firestore().collection('pickuplines').orderBy('timestamp', 'desc').get().then(function (pls) {
        let first = true;
        pls.forEach(function (doc) {
            if (first) {
                first = false;
                $$('#pickuplineslist').html('');
            }
            let fritem = nunjucks.render('pickuplineitemtemplate.html', {
                name: doc.data().name,
                body: doc.data().body,
                timestamp: formatTimeStamp(doc.data().timestamp.getTime())
            });
            $$('#pickuplineslist').append(fritem);
        });
        if (first) {
            $$('#pickuplineslist').html('<center><h3>No pickup lines.</h3></center>')
        }
    });
}

function runPickupLineTimer() {
    if (!pickuptimerstarted) {
        pickuptimerstarted = true;
        setInterval(function () {
            if (mainView.activePage.name === 'pickuplines') {
                loadPickupLines();
            }
        }, 3000)
    }

}