document.getElementById('saveButton').addEventListener('click', registerUser);

function registerUser() {
    var username = document.getElementById('usernameInput').value;
    var password = document.getElementById('passwordInput').value;

    var user = {
        username: username,
        password: password
    };

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8082/register/new-user", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            document.getElementById('responseMessage').innerText = json.message;
        } else if (xhr.readyState === 4) {
            var json = JSON.parse(xhr.responseText);
            document.getElementById('responseMessage').innerText = json.message;
        }
    };
    var data = JSON.stringify(user);
    xhr.send(data);
}