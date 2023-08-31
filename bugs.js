var bugsArray = [
    { bugName: "fly", type: "flee", wings: true },
    { bugName: "queen", type: "buterfly", wings: false },
    { bugName: "bumbblebee", type: "bee", wings: false },
    { bugName: "roach", type: "makak", wings: true }
]
var tbodyElem = document.getElementById("myTbody");
for (let i = 0; i < bugsArray.length; i++) {
    tbodyElem.innerHTML +=
        `<tr>
        <td>${bugsArray[i].bugName}</td><td>${bugsArray[i].type}</td><td>${bugsArray[i].wings}</td>
    </tr>
    `
}
tbodyElem.style = "border : 1px solid; color:red";
var trElms = document.getElementsByTagName("tr");
for (let i = 0; i < trElms.length; i++) {
    if (trElms[i].lastElementChild.innerText == "true") {
        trElms[i].style.background = "gray"
    }
}