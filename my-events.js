var counter =0;
function counterUp(){
    document.getElementById("divContanier").innerHTML = ++counter
}
function counterDown(){
    document.getElementById("divContanier").innerHTML = --counter
}
function printHour(){
    var date = new Date();
    console.log(date.getHours());
}
function popUp(valueParam){
    console.log(valueParam);
}

function changeH1(){
   myH1.innerHTML = myInput.value
}