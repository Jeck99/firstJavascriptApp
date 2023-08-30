var myDivElem = document.getElementById("myDiv");
myDivElem.innerText = "jacob"
myDivElem.innerHTML += "<p>jacob</p>"

//task 1
var spanElem = document.getElementById("mySpan");
console.log(spanElem);
//task 2
var h1Elem = document.getElementById("myH1");
h1Elem.innerText = "my dom app";

var liClassElems = document.getElementsByClassName("liClass");
for (let i = 0; i < liClassElems.length; i++) {
    console.log(liClassElems[i].innerText);
}

var pCollection = document.getElementsByTagName("p");
for (let i = 0; i < pCollection.length; i++) {
    console.log(pCollection[i].innerText);
}
console.log(pCollection);

myDivElem.style = "border:1px solid #0f0; border-radius:50%"
myDivElem.style.color = "#f00"
myDivElem.style.background = "#00f"
