//
// form validation
//

document.getElementById("submit_contact").onclick = validate;

async function validate() {

  var screenwidth = window.innerWidth || document.documentElement.clientWidth;

  // email input
  const email_response = await isEmailValid(document.getElementById("email_input").value);
  if (!email_response) {
    document.getElementById("email_input").style.backgroundColor = "#ffd3d3";
    document.getElementById("email_label").innerHTML = "Please enter valid email address. <p>Example: address@site.com</p>";
    document.getElementById("email_label").style.color = "#b30000";

    if(screenwidth > 1025) {
      document.getElementById("email_label").style.cssFloat = "none";
      document.getElementById("email_label").style.width = "30em";
    }
    
  } else {
    document.getElementById("email_input").style.backgroundColor = "#eaebee";
    document.getElementById("email_label").innerHTML = "Email - Great!";
    document.getElementById("email_label").style.color = "#061F46";

    if(screenwidth > 1025) {
      document.getElementById("email_label").style.cssFloat = "left";
      document.getElementById("email_label").style.width = "12em";
    }
  }

  // name input
  if (!(isValuePresent(document.getElementById("name_input").value))) {
    document.getElementById("name_input").style.backgroundColor = "#ffd3d3";
    document.getElementById("name_label").innerHTML = "Please enter your name.";
    document.getElementById("name_label").style.color = "#b30000";

    if(screenwidth > 1025) {
      document.getElementById("name_label").style.cssFloat = "none";
      document.getElementById("name_label").style.width = "30em";
    }
  } else {
    document.getElementById("name_input").style.backgroundColor = "#eaebee";
    document.getElementById("name_label").innerHTML = "Name - Great!";
    document.getElementById("name_label").style.color = "#061F46";

    if(screenwidth > 1025) {
      document.getElementById("name_label").style.cssFloat = "left";
      document.getElementById("name_label").style.width = "12em";
    }
  }

  // message input
  if(!(isValuePresent(document.getElementById("message_input").value))) {
    document.getElementById("message_input").style.backgroundColor = "#ffd3d3";
    document.getElementById("message_label").innerHTML = "Please enter a message";
    document.getElementById("message_label").style.color = "#b30000";

    if(screenwidth > 1025) {
      document.getElementById("message_label").style.cssFloat = "none";
      document.getElementById("message_label").style.width = "30em";
    }
  } else {
    document.getElementById("message_input").style.backgroundColor = "#eaebee";
    document.getElementById("message_label").innerHTML = "Message - Great!";
    document.getElementById("message_label").style.color = "#061F46";

    if(screenwidth > 1025) {
      document.getElementById("message_label").style.cssFloat = "left";
      document.getElementById("message_label").style.width = "12em";
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