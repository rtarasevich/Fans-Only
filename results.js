// gets the url paramaters from the user search in script page 
// places the artist in into the api query 
const urlParams = new URLSearchParams(window.location.search);
const artist = urlParams.get('artist'); 
console.log(artist);

// let artistId;
// const apiKey = `70f48e3a238075767ef29e2921e77a8b`;
// const youtubeApi = "https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyCJVNary6yBhD7_VSyVCxAaleA0ZeyW-Vw&type=video&q=" + artist;
// const musixMatchArtistApi = `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/artist.search?apikey=${apiKey}&q_artist=${artist}&page_size=10&format=json`;
// const musixMatchAlbumApi = `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/artist.albums.get?apikey=${apiKey}&artist_id=${artistId}&s_release_date=desc&g_album_name=2`;


// const artistApi = urlParams.get('artist'); 
// console.log(artistApi);

const giphyApi = "https://api.giphy.com/v1/gifs/search?api_key=LsyDH7mM0U3nYHnx90FmDD83p6vSv3Fn&limit=3&offset=0&rating=g&lang=en&q=" + artist;

fetch(giphyApi)
    .then(function(response) {
        return response.json();
    })

    .then(function(displayGiphy){
        console.log(displayGiphy);

        var gifUrl = displayGiphy.data[0].images.downsized.url
        console.log(gifUrl);
        var gif1 = document.querySelector("#gif1")
        gif1.setAttribute('src' , gifUrl); 

        var gifUrl2 = displayGiphy.data[1].images.downsized.url
        var gif2 = document.querySelector('#gif2');
        gif2.setAttribute('src', gifUrl2);

    })








const youtubeApi = "https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBrlqEtaRcF-w17dUN3fi0z8H9NRF-FMy4&type=video&q=" + artist;


fetch(youtubeApi)
    .then(function(response) {
        return response.json();
    }) 
// displays the information from the api 
    .then(function(displayYoutube){
        console.log(displayYoutube);
        var youtubeUrl = displayYoutube.items[0].snippet.thumbnails.default.url
        var ytDescription = displayYoutube.items[0].snippet.title
        console.log(ytDescription);
        console.log(displayYoutube);
        console.log(youtubeUrl);
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

// const getAlbum = function() {
//     fetch(musixMatchAlbumApi, {
//         method: 'GET'
//     })
//         .then(function(response) {
//             return response.json();
//         })
//         .then(function(data) {
//             console.log(data);
//             if (data.status === 200) {
//             let albumName = data.message.body.album_list[0].album.album_name;
//             let musixAlbumEl = document.querySelector('#musixAlbum');
//             musixAlbumEl.textContent = albumName;
//             } else {
//                 let musixAlbumEl = document.querySelector('#musixAlbum');
//                 musixAlbumEl.textContent = "Looks like there were no albums listed on Musixmatch";
//             }

//         })
// }


// fetch(musixMatchArtistApi)
//  .then(function(response) {
//      return response.json();
//  })
//  .then(function(data) {
//      console.log(data);
//      artistId = data.message.body.artist_list[0].artist.artist_id;
//      console.log(artistId);
//      getAlbum();
//  })



