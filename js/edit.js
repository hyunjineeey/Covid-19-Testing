function control () {
  var editAndSave = document.getElementById("editAndSave");

  var insuranceInfo = document.getElementById("insuranceInfo");

  var emailDefault = document.getElementById("emailDefault");
  var email = document.getElementById("email");

  var phoneDefault = document.getElementById("phoneDefault");
  var phone = document.getElementById("phone");

  // If user click 'Edit', it will hide all the default text
  // and display a textbox to edit their info.
  // It will also automatically change the text
  // from 'Edit' to 'Save'.
  if (editAndSave.innerHTML == "Edit") {
    console.log ("You're on edit mode.");
    editAndSave.innerHTML = "Save";

    emailDefault.classList.add("hide");
    phoneDefault.classList.add("hide");

    insuranceInfo.classList.remove("hide");
    email.classList.remove("hide");
    phone.classList.remove("hide");
  }

  // If user click 'Save', it will hide all the
  // text box they filled out and display the
  // NEW info. It will also automatically change 
  // the text from 'Save' to 'Edit'.
  else if (editAndSave.innerHTML == "Save") {
    console.log ("You're on save mode.");
    editAndSave.innerHTML = "Edit";

    emailDefault.classList.remove("hide");
    phoneDefault.classList.remove("hide");
    
    insuranceInfo.classList.add("hide");
    email.classList.add("hide");
    phone.classList.add("hide");
  }
}
