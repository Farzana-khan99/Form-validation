function validation(){
  let user = document.getElementById("user").value;
  let password = document.getElementById("pass").value;
  let confirmPass = document.getElementById("confpass").value;
  let MobileNumber = document.getElementById("number").value;
  let userEmails = document.getElementById("emails").value;

  if (user == "") {
    document.getElementById("userName").innerHTML = "Pleas fill user name";
    document.getElementById("userName").style.color = "red";
    document.getElementById("userName").style.fontWeight = "bold";
    return false;
  }
  if (user.length <= 3 || user.length > 20) {
    document.getElementById("userName").innerHTML = "Pleas enter valid name";
    document.getElementById("userName").style.color = "red";
    document.getElementById("userName").style.fontWeight = "bold";
    return false;
  }

  if (!isNaN(user)) {
    document.getElementById("userName").innerHTML =
      "Only Character are  allowed";
    document.getElementById("userName").style.color = "red";
    document.getElementById("userName").style.fontWeight = "bold";
    return false;
  }


  if (password == "") {
    document.getElementById("password").innerHTML = "Pleas Enter password";
    document.getElementById("password").style.color = "red";
    document.getElementById("password").style.fontWeight = "bold";
    return false;
  }
  if (password == "") {
    document.getElementById("password").innerHTML = "Pleas Enter password";
    document.getElementById("password").style.color = "red";
    document.getElementById("password").style.fontWeight = "bold";
    return false;
  }
  if (password.length <= 5 || password.length> 15) {
    document.getElementById("password").innerHTML = "Pleas enter valid password";
    document.getElementById("password").style.color = "red";
    document.getElementById("password").style.fontWeight = "bold";
    return false;
  }
  if (password != confirmPass) {
    document.getElementById("password").innerHTML = "password is not match";
    document.getElementById("password").style.color = "red";
    document.getElementById("password").style.fontWeight = "bold";
    return false;
  }

  if ( confirmPass == " ") {
    document.getElementById("confirmPass").innerHTML = "confirm password";
    document.getElementById("confirmPass").style.color = "red";
    document.getElementById("confirmPass").style.fontWeight = "bold";
    return false;
  }


  if (MobileNumber == "") {
    document.getElementById("mobileNum").innerHTML = "please fill mobile number ";
    document.getElementById("mobileNum").style.color = "red";
    document.getElementById("mobileNum").style.fontWeight = "bold";
    return false;
  }

  if ( isNaN(MobileNumber) ) {
    document.getElementById("mobileNum").innerHTML = "please enter only digit ";
    document.getElementById("mobileNum").style.color = "red";
    document.getElementById("mobileNum").style.fontWeight = "bold";
    return false;
  }

  if ( MobileNumber.length != 11)  {
    document.getElementById("mobileNum").innerHTML = "user must be write only 11 digit ";
    document.getElementById("mobileNum").style.color = "red";
    document.getElementById("mobileNum").style.fontWeight = "bold";
    return false;
  }

  if ( userEmails == "")  {
    document.getElementById("mobileNum").innerHTML = "Please enter your email ";
    document.getElementById("mobileNum").style.color = "red";
    document.getElementById("mobileNum").style.fontWeight = "bold";
    return false;
  }
  if ( userEmails.indexOf("@") <= 0 )  {
    document.getElementById("mobileNum").innerHTML = "Please enter @ valid position ";
    document.getElementById("mobileNum").style.color = "red";
    document.getElementById("mobileNum").style.fontWeight = "bold";
    return false;
  }

  if ( userEmails.charAt(userEmails.length-4) != "."  &&  userEmails.charAt(userEmails.length-3) != ".")  {
    document.getElementById("Email").innerHTML = "Please enter '.' valid position ";
    document.getElementById("Email").style.color = "red";
    document.getElementById("Email").style.fontWeight = "bold";
    return false;
  }
}
