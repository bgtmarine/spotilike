import { catalogue } from "./modules/catalogue.js";
import { slider } from "./modules/slider.js";
import { audio } from "./modules/audio.js";
//console.dir(catalogue);
let currentTrack = 0;
let isPlaying = false;
const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");
const playPause = document.querySelector("#play-pause");
// click sur le bouton next
nextButton.addEventListener("click",()=>{
    if (currentTrack < catalogue.length-1) {
        currentTrack++;
    } else {
        currentTrack = 0;
    }
    slider(catalogue,currentTrack,"next");
    console.log(currentTrack);
})
// idem pour previous
prevButton.addEventListener("click",()=>{
    if (currentTrack > 0) {
        currentTrack--;
    } else {
        currentTrack = catalogue.length-1;
    }
    slider(catalogue,currentTrack,"prev");
    console.log(currentTrack);
})
// actions sur le bouton play-pause
playPause.addEventListener("click",()=>{
    if(isPlaying)

})
slider(catalogue,currentTrack);
audio(catalogue,currentTrack);