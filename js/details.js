
"use strict"
import { gameId, displayDetailsData } from "./display.js";


let detailsResult;
async function getDetailsData() {
	loading.classList.replace("d-none","d-block");
	let detailsHttp = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`, {
		headers: {
			'X-RapidAPI-Key': '186e6b597fmshbd1551a985fec85p109a9ajsn8a719e1478c5',
			'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
		}
	});
	loading.classList.replace("d-block","d-none");
	detailsResult = await detailsHttp.json();
	
	// console.log(detailsResult);
	displayDetailsData()
	// detailsData.style.display = "block"

}
export { getDetailsData, detailsResult };