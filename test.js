var usersArray = document.getElementsByTagName("div");
var divContanierElem = document.getElementById("divContanier");
divContanierElem.innerHTML += "<span>hello</span>"
for (let i = 0; i < usersArray.length; i++) {
    divContanierElem.innerHTML += usersArray[i].innerText
}
