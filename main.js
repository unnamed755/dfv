const userName = prompt("Ismigizni kiriting");
const userSurname = prompt("Familayngizni kiriting");
const userAge = +prompt("Yoshingizni kiriting");

const ismniDomi = document.createElement("h2");
const FamilyaniDomi = document.createElement("h2");
const yoshDom = document.createElement("h2");
const userDom = document.createElement("div");


// ismniDomi.style.backgroundColor = "red"
// ismniDomi.style.textAlign = "center"

ismniDomi.textContent = userName;
FamilyaniDomi.textContent = userSurname
yoshDom.textContent = userAge;

userDom.append(ismniDomi,yoshDom,FamilyaniDomi)

userDom.style.backgroundColor = "red"
userDom.style.width = "500px"
userDom.style.height = "500px"
userDom.style.padding = "30px";
userDom.style.display = "flex";
userDom.style.alignItems = "center";
userDom.style.gap = "10px";

document.body.append(userDom)