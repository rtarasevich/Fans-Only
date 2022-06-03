var buttonEl = document.querySelector("#btn")
var userSearchEl = document.querySelector("#userSearch");

// buttonEl.addEventListener('click', results.html);
// function

var userInformation = function(event) {
    event.preventDefault();

    var userChoice = userSearchEl.value
    console.log(userChoice);

}


var displayYoutube = function(userChoice) {
    var youtubeApi = "https://www.googleapis.com/youtube/v3/search=" + userSearchEl + "part=snippet.thumbnails.default&chart=mostPopular&videoCategoryId=snippet&key=AIzaSyCJVNary6yBhD7_VSyVCxAaleA0ZeyW-Vw"

    fetch(youtubeApi)
    .then(function(response) {
        return response.json();
    })
    .then(function(displayYoutube){

    })
    console.log(youtubeApi);
}

// var youtubeApi = "https://www.googleapis.com/youtube/v3/videos?part=snippet.thumbnails.default&chart=mostPopular&videoCategoryId=snippet&key=AIzaSyCJVNary6yBhD7_VSyVCxAaleA0ZeyW-Vw"
// console.log(youtubeApi);