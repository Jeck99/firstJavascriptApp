var mainDiv = document.getElementById("main-div");
var fNamesArray = [];
function printForm() {
    mainDiv.innerHTML += `
    <form id="myForm">
    <input id="lName" placeholder="last name" type="text">
</form>
<button onclick="printDetalis()" id="send-btn">send</button>
    `
    printInputs()
}
function printInputs() {
    for (let i = 0; i < 4; i++) {
        document.getElementById("myForm").innerHTML += `
        <input id="fName_${i}" placeholder="first name" type="text">
        `
    }
}
printForm()
function printDetalis() {
    mainDiv.innerHTML += `
    <ul>
    ${printFNamesInputs()}
    </ul>
    <input oninput="searchTyping()" id="searchNames" placeholder="search names.." type="search"/>
    <div id='searchDiv'></div>
    `
    console.log(fNamesArray);
}
function printFNamesInputs() {
    var tempString = "";
    for (let i = 0; i < 4; i++) {
        var isFirstChar = document.getElementById(`fName_${i}`).value[0] == document.getElementById("lName").value[0];
        tempString += `
            <li>
            <span style="color:${isFirstChar?"green":"black"}">${document.getElementById(`fName_${i}`).value}</span>
            <span>${document.getElementById("lName").value}</span>
            </li>`;
            fNamesArray.push(document.getElementById(`fName_${i}`).value)
    }
    return tempString;
}
function searchTyping(){
    // searchNames fNamesArray
    document.getElementById("searchDiv").innerHTML =''
    for (let i = 0; i < fNamesArray.length; i++) {
         if(fNamesArray[i].includes(document.getElementById("searchNames").value)){
            document.getElementById("searchDiv").innerHTML +=`
            <div>${fNamesArray[i]}</div>
            `
         };
    }
}