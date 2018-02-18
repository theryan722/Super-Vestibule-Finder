//Exits the mobile app
function exitApp() {
    navigator.app.exitApp();
}



function updateMenuUserInfo() {
    $$('.menu_account_name').html(currentuser.name);
}

function updateCurrentUser() {
    let uname = localStorage.getItem('u_name');
    if (uname) {
        currentuser = {
            name: uname
        }
        updateMenuUserInfo();
        return true;
    } else {
        return false;
    }
}

function setName() {
    if ($$('input[name=namefield]').val()) {
        localStorage.setItem('u_name', $$('input[name=namefield]').val());
        app.addNotification({message: 'Set name.'});
        updateCurrentUser();
    } else {
        app.alert('Please enter a valid name.', 'Error');
    }
}

