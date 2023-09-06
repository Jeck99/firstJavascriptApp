function validate() {
    var isFnameUnder10 = fnameInput.value.length < 10
    var is18Oover = new Date().getFullYear() - +ageInput.value.substr(0, 4) >= 18;
    var isPassMatch = pass1Input.value == pass2Input.value;
    var isEmailValid = emailInput.value.lastIndexOf(".com") == emailInput.value.length - 4 && emailInput.value.length>3;
    if (isFnameUnder10 && isEmailValid && is18Oover && isPassMatch) {
        return true;
    }
    else {
        if(!isFnameUnder10){
            fNameLbl.innerHTML +="<span>*name must be under 10 chars</span>"
            fNameLbl.style.color = "red"
            fnameInput.style.border = "1px dotted red"
        }
    }
    return false
} 