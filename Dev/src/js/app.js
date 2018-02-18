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