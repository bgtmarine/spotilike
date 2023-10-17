import { catalogue } from "./modules/catalogue.js";
import { slider } from "./modules/slider.js";
import { audio } from "./modules/audio.js";
import { playList } from "./modules/playlist.js";
//console.dir(catalogue);


const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");
const playPause = document.querySelector("#play-pause");
// globalThis permet de partager une variable ou une fonction
// avec tous mes modules mais aussi elements de mon script;
globalThis.track = null;
globalThis.catalogue = catalogue;
globalThis.currentTrack = 0;
globalThis.isPlaying = false;
// fonction chargée de gérer l'etat de mon bouton Play/Pause
const statusBPP = ()=>{
    if (!isPlaying) {
        playPause.textContent = "Play";
    } else {
        playPause.textContent = "Pause";
    }
}

// click sur le bouton next
nextButton.addEventListener("click", () => {
    if (currentTrack < catalogue.length - 1) {
        currentTrack++;
    } else {
        currentTrack = 0;
    }
    slider("next");
    // j'arrete la lecture en cours
    audio("pause");
    // je reinitialise track avec la nouvelle valeur de currentTrack
    audio();//init
    // je relance la lecture
    audio("play");
    // je viens de lancer une nouvelle lecture : isPlaying doit passer à true
    console.log(isPlaying);
    isPlaying = true;
    statusBPP();
    
})
// idem pour previous
prevButton.addEventListener("click", () => {
    if (currentTrack > 0) {
        currentTrack--;
    } else {
        currentTrack = catalogue.length - 1;
    }
    slider("prev");
    // j'arrete la lecture en cours
    audio("pause");
    // je reinitialise track avec la nouvelle valeur de currentTrack
    audio();//init
    // je relance la lecture
    audio("play");
    // je viens de lancer une nouvelle lecture : isPlaying doit passer à true
    console.log(isPlaying);
    isPlaying = true;
    statusBPP();
})
// actions sur le bouton play-pause
playPause.addEventListener("click", () => {
    // ! veut dire inverse d'une boolean ex !isPlaying vaut false
    if (!isPlaying/*  === false */) {
        isPlaying = true;
        audio("play");
    } else {
        isPlaying = false;
        audio("pause");
    }
    statusBPP();
    //isPlaying = !isPlaying;
})
slider();
audio();
// affichage de la playList
playList();