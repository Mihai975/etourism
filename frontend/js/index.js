document.getElementById('loginButton').addEventListener('click', loginUser);

function loginUser() {
    var username = document.getElementById('usernameInput').value;
    var password = document.getElementById('passwordInput').value;

    var credential = {
        username: username,
        password: password
    };

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8082/register/login", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            sessionStorage.setItem('username', username);
            if(credential.username == "admin") {
                window.location.href = "admin.html"; 
            } else {
                window.location.href = "index-logged.html"; 
            }
        } else if (xhr.readyState === 4) {
            var json = JSON.parse(xhr.responseText);
            alert(json.message); 
        }
    };
    var data = JSON.stringify(credential);
    xhr.send(data);
}