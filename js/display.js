"use strict"
import { gamesHome, getGames } from "./home.js";
import { getDetailsData, detailsResult} from "./details.js";

let gameDataRow = document.querySelector("#gameData");
let gameId;
let detailsData = document.querySelector("#detailsData");
let menuNav = document.querySelector("#menuNav");
let navLink = document.querySelectorAll("#menuNav .nav-link");
class gameData {
    constructor(id, title, description, platform, genre, img) {
        this.gameid = id;
        this.gameTitle = title;
        this.description = description;
        this.platform = platform;
        this.genre = genre;
        this.img = img;

    }
}
class detailData {
    constructor(img, title, category, platform, status, description,url) {
        this.image = img;
        this.title = title;
        this.category = category;
        this.platform = platform;
        this.status = status;
        this.desc = description;
        this.url = url;
    }
}

for (let i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener("click", function (e) {
        console.log(e.target.innerText);
     navLink.forEach(link => {
       link.classList.remove("active");
     });
        e.target.classList.add("active");
        getGames(e.target.innerText);
        displayHomeData()
    });  
}
function displayHomeData() {
    gameDataRow.innerHTML=""
    let box = ``;
    for (let i = 0; i < gamesHome.length; i++) {
        let game = new gameData(gamesHome[i].id, gamesHome[i].title, gamesHome[i].short_description, gamesHome[i].platform, gamesHome[i].genre, gamesHome[i].thumbnail)
        box = `    <div class="col-md-6 col-lg-4 col-xl-3">
      <div class="card bg-transparent">
          <div class="p-3 imageContainer">
              <img src="${game.img}" class="card-img-top" alt="...">
              <div class="imgOverlay"></div>
          </div>
          <div class="card-body p-3 text-white">
              <div class="d-flex justify-content-between align-items-center pb-2">
                  <h6 class="card-title">${game.gameTitle}</h6>
                  <a href="#" class="btn  fw-bold x-small p-1 text-white">Free</a>
              </div>
              <p class="card-text text-center">${game.description}</p>

          </div>
          <div class="card-footer text-white fw-bold ">
             <span class="small">${game.genre}</span>
             <span class="float-end clearfix small">${game.platform}</span>
          </div>
      </div>
  </div>`;
        gameDataRow.innerHTML += box;
        let gameItem = document.querySelectorAll("#gameData>div");
        for (let y = 0; y < gameItem.length; y++) {
            gameItem[y].addEventListener("click", function () {
                game = new gameData(gamesHome[y].id, gamesHome[y].title, gamesHome[y].short_description, gamesHome[y].platform, gamesHome[y].genre, gamesHome[y].thumbnail)
                gameId = game.gameid;
                getDetailsData();
            })
        }
    }
}
function displayDetailsData() {
    detailsData.style.display ="block";
    let data = new detailData(detailsResult.thumbnail, detailsResult.title, detailsResult.genre, detailsResult.platform, detailsResult.status, detailsResult.description, detailsResult.game_url);
    let detailBox = ` <div class="col-md-4">
    <img src="${data.image}" class="w-100" alt="">
</div>
<div class="col-md-8">
    <h2 class="mb-3">
        Title: ${data.title}
    </h2>
    <h6 class="mb-3">
        Category: <span class="bg-info text-black rounded rounded-3 px-1 x-small fw-bold">${data.category}</span>
    </h6>
    <h6 class="mb-3">
        Platform: <span class="bg-info text-black rounded rounded-3 px-1 x-small fw-bold">${data.platform}</span>
    </h6>
    <h6 class="mb-3">
        Status: <span class="bg-info text-black rounded rounded-3 px-1 x-small fw-bold">${data.status}</span>
    </h6>
    <p class="mb-3">${data.desc}</p>
    <button class="btn btn-outline-info"><a class="text-decoration-none text-white"
            href="${data.url}" target="_blank">Show
            Game</a></button>
</div>`;
    document.querySelector('#detailsContainer').innerHTML = detailBox;
    menuNav.classList.replace("z-3", "z-0");
    document.querySelector("body, html").style.overflow = "hidden";
    document.querySelector(".btn-close").addEventListener("click",function () {
        detailsData.style.display = "none";
        menuNav.classList.replace("z-0", "z-3");
        document.querySelector("body, html").style.overflow = "auto";
    })
}


export { displayHomeData,  displayDetailsData};
export { gameId };