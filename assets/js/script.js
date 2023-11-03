import { catalogue } from "./modules/catalogue.js";
import { slider } from "./modules/slider.js";
import { audio } from "./modules/audio.js";
import { playlist } from "./modules/playlist.js";
//console.dir(catalogue);


const prevButton = document.querySelector("#prev");
const nextButton = document.querySelector("#next");
const playPause = document.querySelector("#play-pause img");
const subTime = document.querySelector("#subTime");
const time = document.querySelector("#time");
globalThis.sliderHTML = document.querySelector("#slider");
const mc = new Hammer(sliderHTML);
const mcBody = new Hammer(document.body,{direction: Hammer.DIRECTION_ALL});
const mcTime = new Hammer(time,{direction: Hammer.DIRECTION_ALL});
mcTime.on('panright',()=>{
    console.log("pan right");
    if(track.currentTime < track.duration){
        track.currentTime += 1;
    }
    console.log(track.volume);
})
mcTime.on('panleft',()=>{
    console.log("pan left");
    if(track.currentTime > 0){
        track.currentTime -= 1;
    }
    console.log(track.volume);
})
mcBody.on('panup',()=>{
    console.log("pan up");
    if(track.volume < 1){
        track.volume += .005;
    }
    console.log(track.volume);
})
mcBody.on('pandown',()=>{
    console.log("pan down");
    if(track.volume > 0.005){
        track.volume -= .005;
    }
    console.log(track.volume);
})





// globalThis permet de partager une variable ou une fonction
// avec tous mes modules mais aussi elements de mon script;
globalThis.track = null;
globalThis.catalogue = catalogue;
globalThis.currentTrack = 0;
globalThis.isPlaying = false;
// definition image de fond du player
document.body.style.backgroundImage = "url('./assets/img/cover/"+catalogue[currentTrack].cover+"')";


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
    document.body.style.backgroundImage = "url('./assets/img/cover/"+catalogue[currentTrack].cover+"')";

}
// fonction chargée de gérer l'etat de mon bouton Play/Pause
const statusBPP = () => {
    if (!isPlaying) {
        playPause.src = "./assets/img/play-circle-solid.svg";
    } else {
        playPause.src = "./assets/img/pause-circle-regular.svg";
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
    document.body.style.backgroundImage = "url('./assets/img/cover/"+catalogue[currentTrack].cover+"')";

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
    document.body.style.backgroundImage = "url('./assets/img/cover/"+catalogue[currentTrack].cover+"')";

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



setInterval(()=>{
    let w = (track.currentTime*100)/track.duration;
    subTime.style.width = w+"%";
    // detection fin de la piste
    if(track.currentTime >= track.duration){
        // passage à next
        nextEvents();
    }
},50)
// affichage de la playList
playlist();