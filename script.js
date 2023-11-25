//list of objests (objects in arrray)
const database = [
    {
        username: "John",
        password: "secret"
    },
    {
        username: "Sally",
        password: "secret"
    },
    {
        username: "Ingrid",
        password: "secret"
    },
];

const newsFeed = [
    {
        username: "Bobby",
        timeline: "Went to lunch"
    },
    {
        username: "Sally",
        timeline: "Java Script so cool"
    },
    {
        username: "Mitch",
        timeline: "He is on vacation and enjoying"
    }

]

let userNameEntered = prompt("What is your username?");
let passwordEntered = prompt("What is your password?");
//gets data from user and assgin them to variables.

function isUserNameValid(user, password) {

    for (let i = 0; i < database.length; i++) {
        if (database[i].username === user && database[i].password == password) { return true; }

    }
    return false;
}

function signIn(user, password) {

    if (isUserNameValid(user, password)) {
        console.log(newsFeed);
    }
    else {
        alert("Wrong username and password combination");
    }
}
signIn(userNameEntered, passwordEntered);
