import { catalogue } from "./modules/catalogue.js";
import { slider } from "./modules/slider.js";
//console.dir(catalogue);
let currentTrack = 0;
const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");
// click sur le bouton next
nextButton.addEventListener("click",()=>{
    if (currentTrack < catalogue.length) {
        currentTrack++;
    } else {
        currentTrack = 0;
    }
    console.log(currentTrack);
})
// idem pour previous


slider(catalogue,currentTrack);