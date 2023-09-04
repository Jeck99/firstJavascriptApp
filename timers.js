var counter = 0;
function printToDiv() {
    main_div.innerHTML = counter++;
    if (counter == 10) {
        clearInterval(interalId)
    }
}

var interalId = setInterval(printToDiv, 1000)


// var timerId = setTimeout(printToDiv, 5000)
// main_div.innerHTML = "2"
// var ans = confirm("keep timer?");
// if (!ans) {
//     clearTimeout(timerId)
// }