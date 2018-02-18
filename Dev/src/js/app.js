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

function ridPerson() {
    alarmaudio = new Audio('img/alarm.mp3');
    alarmaudio.play();
}

function stopAlarm() {
    alarmaudio.pause();
    alarmaudio.currentTime = 0;
}

function loadVestibules() {
    firebase.firestore().collection('vestibules').get().then(function (pls) {
        let first = true;
        pls.forEach(function (doc) {
            if (first) {
                first = false;
                $$('#vestibulelist').html('');
            }
            let fritem = nunjucks.render('vestibuleitemtemplate.html', {
                name: doc.data().name,
                vestibuleid: doc.id
            });
            $$('#vestibulelist').append(fritem);
        });
        if (first) {
            $$('#vestibulelist').html('<center><h3>No vestibules.</h3></center>')
        }
    });
}

function addVestibule() {
    app.prompt('Enter a name for this vestibule', 'Enter Name', function (vname) {
        firebase.firestore().collection('vestibules').add({
            name: vname,
            description: 'No description'
        }).then(function () {
            loadVestibules();
            app.addNotification({
                message: 'Added vestibule!'
            });
        });
    })
}

function loadVestibuleReviews() {
    if (currentvestibule) {
        firebase.firestore().collection('vestibules').doc(currentvestibule).get().then(function (vinfo) {
            if (vinfo.data().image) {
                $$('#vestibuleimg').attr('src', vinfo.data().image);
            }
            $$('#vestibuletitle').html(vinfo.data().name);
            $$('#vestibuledescription').html(vinfo.data().description);
        }).then(function () {
            firebase.firestore().collection('vestibules').doc(currentvestibule).collection('reviews').orderBy('timestamp', 'desc').get().then(function (reviews) {
                let first = true;
                reviews.forEach(function (review) {
                    if (first) {
                        first = false;
                        $$('#reviewlist').html('');
                    }
                    let fritem = nunjucks.render('reviewitemtemplate.html', {
                        name: review.data().name,
                        body: review.data().body,
                        good: review.data().good,
                        timestamp: formatTimeStamp(review.data().timestamp.getTime())
                    });
                    $$('#reviewlist').append(fritem);
                });
                if (first) {
                    $$('#reviewlist').html('<center><h3>No reviews.</h3></center>')
                }
            });
        });
    }
}

function addReview() {
    app.confirm('Was this vestibule good?', function () {
        app.prompt('Enter a review for this vestibule', 'Enter Review', function (rev) {
            firebase.firestore().collection('vestibules').doc(currentvestibule).collection('reviews').add({
                name: currentuser.name,
                body: rev,
                good: true,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            }).then(function () {
                loadVestibuleReviews();
                app.addNotification({
                    message: 'Added review!'
                });
            });
        })
    }, function () {
        app.prompt('Enter a review for this vestibule', 'Enter Review', function (rev) {
            firebase.firestore().collection('vestibules').doc(currentvestibule).collection('reviews').add({
                name: currentuser.name,
                body: rev,
                good: false,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            }).then(function () {
                loadVestibuleReviews();
                app.addNotification({
                    message: 'Added review!'
                });
            });
        })
    });
}

function setVestibuleDescription() {
    app.prompt('Enter a description', 'New Description', function (desc) {
        firebase.firestore().collection('vestibules').doc(currentvestibule).update({
            description: desc
        }).then(function () {
            app.addNotification({message: 'Added description'});
            goBack().then(function () {
                loadVestibuleReviewsPage(currentvestibule);
            });
        });
    });
}