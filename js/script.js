//
// form validation
//

document.getElementById("submit-contact").onclick = validate;

async function validate() {

  var screenwidth = window.innerWidth || document.documentElement.clientWidth;

  // email input
  const email_response = await isEmailValid(document.getElementById("email-input").value);
  if (!email_response) {
    document.getElementById("email-input").style.backgroundColor = "#ffd3d3";
    document.getElementById("email-label").innerHTML = "Please enter valid email address. <p>Example: address@site.com</p>";
    document.getElementById("email-label").style.color = "#b30000";

    if(screenwidth > 1025) {
      document.getElementById("email-label").style.cssFloat = "none";
      document.getElementById("email-label").style.width = "30em";
    }
    
  } else {
    document.getElementById("email-input").style.backgroundColor = "#eaebee";
    document.getElementById("email-label").innerHTML = "Email - Great!";
    document.getElementById("email-label").style.color = "#061F46";

    if(screenwidth > 1025) {
      document.getElementById("email-label").style.cssFloat = "left";
      document.getElementById("email-label").style.width = "12em";
    }
  }

  // name input
  if (!(isValuePresent(document.getElementById("name-input").value))) {
    document.getElementById("name-input").style.backgroundColor = "#ffd3d3";
    document.getElementById("name-label").innerHTML = "Please enter your name.";
    document.getElementById("name-label").style.color = "#b30000";

    if(screenwidth > 1025) {
      document.getElementById("name-label").style.cssFloat = "none";
      document.getElementById("name-label").style.width = "30em";
    }
  } else {
    document.getElementById("name-input").style.backgroundColor = "#eaebee";
    document.getElementById("name-label").innerHTML = "Name - Great!";
    document.getElementById("name-label").style.color = "#061F46";

    if(screenwidth > 1025) {
      document.getElementById("name-label").style.cssFloat = "left";
      document.getElementById("name-label").style.width = "12em";
    }
  }

  // message input
  if(!(isValuePresent(document.getElementById("message-input").value))) {
    document.getElementById("message-input").style.backgroundColor = "#ffd3d3";
    document.getElementById("message-label").innerHTML = "Please enter a message";
    document.getElementById("message-label").style.color = "#b30000";

    if(screenwidth > 1025) {
      document.getElementById("message-label").style.cssFloat = "none";
      document.getElementById("message-label").style.width = "30em";
    }
  } else {
    document.getElementById("message-input").style.backgroundColor = "#eaebee";
    document.getElementById("message-label").innerHTML = "Message - Great!";
    document.getElementById("message-label").style.color = "#061F46";

    if(screenwidth > 1025) {
      document.getElementById("message-label").style.cssFloat = "left";
      document.getElementById("message-label").style.width = "12em";
    }
  }
}

// checking if value is present in input field

function isValuePresent(value) {
  if (value == "" || value == " ") {
    return false;
  } else {
    return true;
  }
}

// checking if email is written in valid format

function isEmailValid(email) {
  var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (emailPattern.test(email)) {
    return true;
  } else {
    return false;
  }
}