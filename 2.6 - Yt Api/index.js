function myFunc() {
    let html = `
    <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img class="img-fluid" style="height: 40px;" src="https://static.vecteezy.com/system/resources/thumbnails/003/206/623/small/youtube-editorial-app-icon-free-vector.jpg">
          </a>
          <form class="d-flex">
            <input class="form-control py-0" id="search-box" type="search" placeholder="Topic" required>
            <button class="btn btn-danger btn-search px-1" type="button" onclick="getData()">
               <img src="./search-img.png">  
            </button>
          </form>
          <form>
           <button class="btn px-2" type="button" onclick="getData()">
             <img class="img1" src="./user.png" height="30" width="30">
           </button>
         </form>
          </div>
      </nav>
       <hr style="margin-top: 5px;">
    `;
    document.getElementById("main").innerHTML=html;
}

let url = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyDkqz_pb1wVmbB6u4DnNs_Y2Xm0ymNsD_c&part=snippet&maxResults=100&q="
let VIDEOS = [];
let pageNo = 0;
let maxPages = 0;
(function render() {
    fetch(url+"Javascript")
    .then(response => response.json())
    .then(data => {
        VIDEOS = data.items;
        console.log(VIDEOS);
        renderPage();
    })
})();

function renderPage() {
    var size = VIDEOS.length;
    console.log(size);
    maxPages = parseInt(size/3); // maybe +1 can be done
    console.log(maxPages);
    renderVideo();
}

function renderVideo() {
    let text = '';
        text += `<div class="container" id="my-video">
                <div class="row">`
        for (let i = 0; i <3; i++) {
            if(i==0) 
                text += '<div class="col-sm-4"> '
            else 
                text += '<div class="col-sm-4 video-card">'
            text += `
                    <div class="video-tile">${VIDEOS[(3*pageNo)+i].snippet.title.slice(0,80)}</div>
                    <div class="my-1"><img class="img-fluid" src=${VIDEOS[3*pageNo+i].snippet.thumbnails.medium.url}></div>
                    <div class="row my-1">
                        <div class="col-6 font-italic">${VIDEOS[3*pageNo+i].snippet.channelTitle}</div>
                        <div class="col-6 font-italic date">${VIDEOS[3*pageNo+i].snippet.publishedAt.slice(0,10)}</div>
                    </div>
                    <div class="mt-3 desc">${VIDEOS[3*pageNo+i].snippet.description}</div>
                </div> `
        }
        text += ` </div> 
                </div> 
                <hr class="hr-main"></hr> 
                <br>
            <div class='footer-div'>
                <div class="counter-section mt-3">
                    <div class="row"> 
                        <button class="btn btn-danger col-4 btn-1 p-1" onclick="getPreviousPage()"> Previous</button>
                        <div class="col-4 mt-2">${pageNo+1}/${maxPages}</div>
                        <button class="btn btn-danger col-4 btn-1" onclick="getNextPage()">Next</button>
                    <div>
                </div>
            </div>`;
            console.log(text);
        document.getElementById("root").innerHTML = text;
}
function getPreviousPage() {
    if(pageNo!=0)
        pageNo -= 1;
    renderVideo();
}
function getNextPage() {
    if(pageNo+1 != maxPages)
        pageNo += 1;
    renderVideo();
}
function getData() {
    pageNo = 0;
    var keyword = document.getElementById('search-box').value;
    console.log(keyword);
    fetch(url+keyword)
        .then(response=> response.json())
        .then(data=> {
            VIDEOS = data.items;
            renderPage();
        });
    document.getElementById('result').innerText = "Showing result for: "+ keyword;
}