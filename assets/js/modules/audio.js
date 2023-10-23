
const audio = (status = "init") => {

    const urlAudio = "./assets/audio/";
    
    switch (status) {
        case "init":
            console.log("initialisation piste audio");
            track = new Audio(urlAudio + catalogue[currentTrack].audio);
            break;
        case "play":
            console.dir(track);
            track.play();
            break;
        case "pause":
            track.pause();
            break;
        default :
            console.log("erreur dans la fonction audio()");
            break;

    }


};
export { audio };