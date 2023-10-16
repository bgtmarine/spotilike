import { catalogue } from "./modules/catalogue.js";
import { slider } from "./modules/slider.js";
//console.dir(catalogue);
let currentTrack = 0;
const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");
// click sur le bouton next


slider(catalogue,currentTrack);