// container
timeBtn.addEventListener("click", chooseTimeClick)
var seconds;
var minutes;
var hours;
var hourFromUser;
function chooseTimeClick() {
    hourFromUser = timeInput.value;
    container.innerHTML += `<h1>${hourFromUser}</h1>`
    var courentTime = new Date();
    seconds = courentTime.getSeconds()
    minutes = courentTime.getMinutes()
    hours = courentTime.getHours()
    var intervalId = setInterval(timerCountdown, 1000)
    var intvrlId = setInterval(alarmClock, 1000)
}
function timerCountdown() {
    var courentHour = `${hours}:${minutes}:${--seconds}`
    timer.innerHTML = `<h1>${courentHour}</h1>`
    if (seconds == 0) {
        if (minutes == 0) {
            minutes = 60
            --hours;
        }
        seconds = 60;
        minutes--;
    }
}
function alarmClock() {
    // alrmClock
    var userMinutes = +hourFromUser.substring(hourFromUser.indexOf(":")+1)
    var userHours = +hourFromUser.substring(0,hourFromUser.indexOf(":"))
    // if(userHours <= hours )
    // var minutesLeft = 
    console.log(userMinutes,userHours);
}