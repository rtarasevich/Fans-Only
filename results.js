const urlParams = new URLSearchParams(window.location.search);
const artist = urlParams.get('artist');
const youtubeApi = "https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCJVNary6yBhD7_VSyVCxAaleA0ZeyW-Vw&type=video&q=" + artist;

fetch(youtubeApi)
    .then(function(response) {
        return response.json();
    }) 
    .then(function(displayYoutube){
        console.log(displayYoutube);
        var youtubeUrl = displayYoutube.items[0].snippet.thumbnails.default.url
        var ytDescription = displayYoutube.items[0].snippet.title
        console.log(ytDescription)
        console.log(displayYoutube);
        console.log(youtubeUrl)
        var youtubeEl = document.querySelector("#youtube");
        var ytDescriptionEl = document.querySelector("#ytDescription")
        ytDescriptionEl.textContent = ytDescription
        youtubeEl.setAttribute("src", youtubeUrl);

        var ytUrl2 = displayYoutube.items[1].snippet.thumbnails.default.url
        var ytData2 = displayYoutube.items[1].snippet.title
        var yt2El = document.querySelector("#yt2");
        var ytData2El = document.querySelector("#ytDescription2")
        ytData2El.textContent = ytData2
        yt2El.setAttribute("src" , ytUrl2); 

        var ytUrl3 = displayYoutube.items[2].snippet.thumbnails.default.url
        var ytData3 = displayYoutube.items[2].snippet.title
        var yt3El = document.querySelector("#yt3");
        var ytData3El = document.querySelector("#ytDescription3")
        ytData3El.textContent = ytData3
        yt3El.setAttribute("src" , ytUrl3); 

 }) 


 


