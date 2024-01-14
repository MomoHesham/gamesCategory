"use strict"
import { displayHomeData } from "./display.js";

let loading = document.querySelector("#loading")
let gamesHome = [];
let menuNav = document.querySelector("#menuNav");
let navHeight = menuNav.offsetHeight
menuNav.style.marginTop = `-${navHeight / 2}px`

async function getGames(type) {
    let homeHttp = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${type}`, {
        headers: {
            'X-RapidAPI-Key': '186e6b597fmshbd1551a985fec85p109a9ajsn8a719e1478c5',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    })
    loading.classList.replace("d-none", "d-block");
    gamesHome = await homeHttp.json();
    loading.classList.replace("d-block", "d-none");
    displayHomeData();
    console.log(gamesHome[0].title);

}


export { getGames, gamesHome };

