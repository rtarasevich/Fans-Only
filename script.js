var buttonEl = document.querySelector("#btn")
var userSearchEl = document.querySelector("#userSearch");

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




