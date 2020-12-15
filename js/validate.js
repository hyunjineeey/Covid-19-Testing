// 2-2-sign-in.html
// Check if email address is valid
function validateEmail(inputText) {
    var alert = document.getElementById("alert");
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var number = /^[0-9]+$/;
    if (inputText.value.match(number) && inputText.value.length == 10) {
        // number validated
        document.myForm.phoneOrEmail.focus();
        window.open("3-enter-conf-code.html", "_self");
        return true;
    } else if (inputText.value.match(number) && inputText.value.length < 10) {
        // number NOT validated - short
        alert.innerHTML = "The number is too short.";
        document.myForm.phoneOrEmail.focus();
        return false;
    } else if (inputText.value.match(number) && inputText.value.length > 10) {
        // number NOT validated - long
        alert.innerHTML = "The number is too long.";
        document.myForm.phoneOrEmail.focus();
        return false;
    }
    if (inputText.value.match(mailformat)) {
        // mail validated
        document.myForm.phoneOrEmail.focus();
        window.open("3-enter-conf-code.html", "_self");
        return true;
    } else {
        // mail NOT validated - format
        alert.innerHTML = "The email is not valid!";
        document.myForm.phoneOrEmail.focus();
        return false;
    }
}

// 5-manual-insurance.html
// Check if all required fields are filled in
function required(inputText) {
    var alert = document.getElementById("alert");
    var rq1 = document.forms["myForm"]["rq1"].value;
    var rq2 = document.forms["myForm"]["rq2"].value;
    var rq3 = document.forms["myForm"]["rq3"].value;
    var rq4 = document.forms["myForm"]["rq4"].value;
    var rq5 = document.forms["myForm"]["rq5"].value;

    if (rq1 == "" || rq2 == "" || rq3 == "" || rq4 == "" || rq5 == "") {
        alert.innerHTML = "Please fill all required field.";
        return false;
    } else {
        if (inputText == 'registration'){
            window.open("10-6-register-confirmation.html", "_self");
        }
        else{
            window.open("6-home-screen.html", "_self");
        }
        return true;
    }
}



// 10-6-register-confirmation.html
// Check at least 1 notification method is checked 
function required_check(inputText) {
    var alert = document.getElementById("alert");
    var text = document.forms["notification"]["text"];
    var email = document.forms["notification"]["email"];
    var neitherChecked = (!text.checked && !email.checked)
    if (neitherChecked) {
        alert.innerHTML = "<div class='qualified-register'> You need to have at least 1 way receiving the results notification.</div>";
        return false;
    } else {
        window.open("10-7-register-done.html", "_self");
        return true;
    }
}