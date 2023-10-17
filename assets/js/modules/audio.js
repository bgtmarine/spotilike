const audio = (catalogue,currentTrack)=>{
    console.log("initialisation piste audio");
    const urlAudio = "./assets/audio/";
    let track = new Audio(urlAudio+catalogue[currentTrack].audio);
    console.dir(track);
    
};
export { audio };