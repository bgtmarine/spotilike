import { catalogue } from "./modules/catalogue.js";
import { slider } from "./modules/slider.js";
import { audio } from "./modules/audio.js";
import { playlist } from "./modules/playlist.js";
//console.dir(catalogue);


const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");
const playPause = document.querySelector("#play-pause");
globalThis.sliderHTML = document.querySelector("#slider");
const mc = new Hammer(sliderHTML)




// globalThis permet de partager une variable ou une fonction
// avec tous mes modules mais aussi elements de mon script;
globalThis.track = null;
globalThis.catalogue = catalogue;
globalThis.currentTrack = 0;
globalThis.isPlaying = false;


globalThis.miniPlayPause = (index) => {
    console.log(index);
    if (currentTrack !== index) {
        currentTrack = index;
        isPlaying = false;
        audio("pause");
        audio();
        slider("next");
    }
    switchPlayPause();
}
// fonction chargée de gérer l'etat de mon bouton Play/Pause
const statusBPP = () => {
    if (!isPlaying) {
        playPause.textContent = "Play";
    } else {
        playPause.textContent = "Pause";
    }
}
const switchPlayPause = () => {
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
}
const prevEvents = ()=>{
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
}
const nextEvents = () => {
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

}
// click sur le bouton next
mc.on("swipeleft", nextEvents );
nextButton.addEventListener("click", nextEvents);
// idem pour previous
mc.on("swiperight", prevEvents );
prevButton.addEventListener("click", prevEvents );
// actions sur le bouton play-pause
// si dans un addEventListener je doit utiliser ma propre fonction au 
// lieu d'une callback je ne peux alors pas utiliser de parenthèses
// pour l'appeler.
playPause.addEventListener("click", switchPlayPause);

slider();
audio();
// affichage de la playList
playlist();