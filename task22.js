function getAndPrintCountries() {
    document.getElementById('divContanier').innerHTML += "<ol id='countriesList'></ol>";
    var listElem = document.getElementById('countriesList');

    for (let i = 0; i < 5; i++) {
        var country = prompt("enter country name");
        listElem.innerHTML += "<li>" + country + "</li>";
    }
}

var managersArray = [
    { firstName: "jacob", lastName: "inggi", age: 33, salery: 5000 },
    { firstName: "yoss", lastName: "asd", age: 33, salery: 4000 },
    { firstName: "mosh", lastName: "vbn", age: 33, salery: 55000 },
    { firstName: "ido", lastName: "yur", age: 33, salery: 7000 }
];
for (let i = 0; i < managersArray.length; i++) {
    document.getElementById("myTbody").innerHTML +=
        `<tr>
    <td>${managersArray[i].firstName}</td>
    <td>${managersArray[i].lastName}</td>
    <td>${managersArray[i].age}</td>
    <td>${managersArray[i].salery}</td>
    </tr>`
}
document.getElementsByTagName("table")[0].style.borderCollapse = "collapse";
var tdsArray = document.getElementsByTagName('td');
for (let i = 0; i < tdsArray.length; i++) {
    tdsArray[i].style = "border:1px solid;background:#d0d0d0"
}
var thArray = document.getElementsByTagName('th');
for (let i = 0; i < thArray.length; i++) {
    thArray[i].style.padding = '1vw';
    
}
