var intervalId = setInterval(moveRight,100)
var counter = 0;
function moveRight(){
    box.style.left = `${++counter}px`;
    if(counter==150){
        clearInterval(intervalId)
        counter = 0;
        intervalId = setInterval(moveDown,100)
    }
}
function moveDown(){
    box.style.top = `${++counter}px`;
    if(counter==150){
        clearInterval(intervalId)
    }
}
