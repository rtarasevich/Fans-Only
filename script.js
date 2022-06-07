var buttonEl = document.querySelector("#btn")
var userSearchEl = document.querySelector("#userSearch");

function myFunction() {
  var x = document.getElementById("myNavbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

var redirect = function(userChoice){
    var redirectPage = buttonEl.value;
    var queryString = '?artist=' + userChoice;
    var uri = redirectPage + queryString;

    window.location = uri;

    // displayYoutube();
}

var userInformation = function(event){
    event.preventDefault();
    var userChoice = userSearchEl.value
    localStorage.setItem("userChoice" , userChoice);
    // console.log("did this store", localStorage.setItem("userChoice" , userChoice)) 
    // debugger;

    if(userChoice != "") {
        redirect(userChoice);
    }
}

buttonEl.addEventListener("click", userInformation);




