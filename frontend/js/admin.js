document.getElementById('find').addEventListener('click', function() {
    var username = document.getElementById('usernameInput').value;
    var xhr = new XMLHttpRequest();
    
    xhr.open("GET", 'http://localhost:8082/reserve/see-all-reservations?username=' + encodeURIComponent(username), true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.responseText);
            var rezervariDiv = document.getElementsByClassName('rezervari-response')[0];
            rezervariDiv.innerHTML = '';
            
            data.forEach(function(reservation) {
                var p = document.createElement('p');
                p.textContent = 'ID: ' + reservation.id + ', Username: ' + reservation.username + ', Tip: ' + reservation.tip;
                rezervariDiv.appendChild(p);
            });
        }
    }
    xhr.send();
});
