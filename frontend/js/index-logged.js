var username = sessionStorage.getItem('username');

document.getElementById('message-cont').innerText = 'Bun venit, ' + username + '!';

document.getElementById('usrname').innerText = 'Bun venit, ' + username + '!';


// Bronze button

document.getElementById('bronze-reservation-button').addEventListener('click', registerBronzeReservation);
document.getElementById('silver-reservation-button').addEventListener('click', registerSilverReservation);
document.getElementById('gold-reservation-button').addEventListener('click', registerGoldReservation);
document.getElementById('platinum-reservation-button').addEventListener('click', registerPlatinumReservation);

function registerBronzeReservation() {
    var username = sessionStorage.getItem('username');
    var tip = "BRONZE";

    var reservation = {
        username: username,
        tip: tip
    };

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8082/reserve/new-reservation", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            document.getElementById('response-bronze-message').innerText = json.message;
        } else if (xhr.readyState === 4) {
            var json = JSON.parse(xhr.responseText);
            document.getElementById('response-bronze-message').innerText = json.message;
        }
    };
    var data = JSON.stringify(reservation);
    xhr.send(data);
}

function registerSilverReservation() {
    var username = sessionStorage.getItem('username');
    var tip = "SILVER";

    var reservation = {
        username: username,
        tip: tip
    };

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8082/reserve/new-reservation", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            document.getElementById('response-silver-message').innerText = json.message;
        } else if (xhr.readyState === 4) {
            var json = JSON.parse(xhr.responseText);
            document.getElementById('response-silver-message').innerText = json.message;
        }
    };
    var data = JSON.stringify(reservation);
    xhr.send(data);
}

function registerGoldReservation() {
    var username = sessionStorage.getItem('username');
    var tip = "GOLD";

    var reservation = {
        username: username,
        tip: tip
    };

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8082/reserve/new-reservation", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            document.getElementById('response-gold-message').innerText = json.message;
        } else if (xhr.readyState === 4) {
            var json = JSON.parse(xhr.responseText);
            document.getElementById('response-gold-message').innerText = json.message;
        }
    };
    var data = JSON.stringify(reservation);
    xhr.send(data);
}

function registerPlatinumReservation() {
    var username = sessionStorage.getItem('username');
    var tip = "PLATINUM";

    var reservation = {
        username: username,
        tip: tip
    };

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8082/reserve/new-reservation", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            document.getElementById('response-platinum-message').innerText = json.message;
        } else if (xhr.readyState === 4) {
            var json = JSON.parse(xhr.responseText);
            document.getElementById('response-platinum-message').innerText = json.message;
        }
    };
    var data = JSON.stringify(reservation);
    xhr.send(data);
}




