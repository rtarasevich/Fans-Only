var buttonEl = document.querySelector("#btn")
var userSearchEl = document.querySelector("#userSearch");


// when the user types in their choice it adds it to the url string 
// when the button is pushed it uses the value of the button set in html to go to the results page

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
    localStorage.setItem('queryString','value')
    var uri = redirectPage + queryString;
    window.location = uri;
}



// if the user choice is blank it won't redirect to the next page with no information
var userInformation = function(event){
    event.preventDefault();
    var userChoice = userSearchEl.value
    localStorage.setItem('userChoice', 'value')
    console.log(userChoice)
 
    if(userChoice != "") {
        redirect(userChoice);
    }
}

buttonEl.addEventListener("click", userInformation);

// if ()
// var getValue = function() {
//     var searchData = localStorage.getItem('userchoice');
//     var storeEl = document.querySelector(".storage");
//     storeEl.classList.remove(".hide");
//     storeEl.value = searchData
// }
//     getValue();

