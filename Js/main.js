let pswdBox = document.getElementById("pswd-box");
let copyEl = document.getElementsByClassName("copy-ele");
let pswd1 = document.getElementById("pswd-content-1");
let pswd2 = document.getElementById("pswd-content-2");
let pswd3 = document.getElementById("pswd-content-3");
let pswd4 = document.getElementById("pswd-content-4");


function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getLength() {
    return getRandom(8, 15);
}

function getLowerChar() {
    return "a".charCodeAt(0) + getRandom(0, 26);
}

function getUpperChar() {
    return "A".charCodeAt(0) + getRandom(0, 26);
}

function getDigit() {
    return "0".charCodeAt(0) + getRandom(0, 9);
}

function getSpecial() {
    return "!".charCodeAt(0) + getRandom(0, 14);
}



function getPassword() {
    let passwordContent = [];
    let length = getLength();
    let generator = [getLowerChar, getUpperChar, getDigit, getSpecial];

    passwordContent.push(String.fromCharCode(generator[0]()));
    passwordContent.push(String.fromCharCode(generator[1]()));
    passwordContent.push(String.fromCharCode(generator[2]()));
    passwordContent.push(String.fromCharCode(generator[3]()));

    for (let i = 0; i < length - 4; i++) {
        let index = getRandom(0, 3);
        passwordContent.push(String.fromCharCode(generator[index]()));
    }

    passwordContent = passwordContent.sort(()=>Math.random()-0.5);

    let password = "";
    for (let i = 0; i < passwordContent.length; i++) {
        password += passwordContent[i];
    }

    return password;
}



function fillPasswords () {
    pswd1.textContent = getPassword ();
    pswd2.textContent = getPassword ();
    pswd3.textContent = getPassword ();
    pswd4.textContent = getPassword ();
    pswdBox.style.color = "00a870";
    copyEl[0].style.visibility = "visible";
    copyEl[1].style.visibility = "visible";
    copyEl[2].style.visibility = "visible";
    copyEl[3].style.visibility = "visible";
}

function copyPassword1 () {
    navigator.clibooard.writeText(pswd1.textContent);
    alert(pswd1.textContent + "copied to clipboard");
}

function copyPassword2 () {
    navigator.clibooard.writeText(pswd2.textContent);
    alert(pswd2.textContent + "copied to clipboard");
}

function copyPassword3 () {
    navigator.clibooard.writeText(pswd3.textContent);
    alert(pswd3.textContent + "copied to clipboard");
}

function copyPassword4 () {
    navigator.clibooard.writeText(pswd4.textContent);
    alert(pswd4.textContent + "copied to clipboard");
}
