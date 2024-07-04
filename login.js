function getUsers() {
    var users = localStorage.getItem("users")

    if (users) {
        users = JSON.parse(users)

    } else {
        users = []
    }

    return users;

}

function login() {
    var email = document.getElementById("l-email")
    var password = document.getElementById("l-password")
    var users = getUsers();
    var saveUser = {};
    for (let i = 0; i < users.length; i++) {
        if (email.value === users[i].email) {
            saveUser = users[i]
            break
        }
    }
    if (saveUser.email) {
        if (saveUser.password === password.value) {
            alert("User Login Successfully!")

        } else {
            alert("Invalid Password!")
        }
    } else {
        alert("User not found!")
    }
}