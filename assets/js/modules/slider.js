const slider = (catalogue,currentTrack)=>{
    console.log("initialisation du slider");
    /* console.dir(catalogue);
    console.log(catalogue[0].cover); */
    //console.log(catalogue[0]["cover"]);
    const sliderHTML = document.querySelector("#slider");
    const coverUrl = "./assets/img/cover/";

    
    const coverSlider = document.createElement("img");
    coverSlider.src = coverUrl+catalogue[currentTrack].cover;





    // prepend insere un element avant ceux qui existent déjà dans le parent
    //sliderHTML.prepend(coverSlider);
    // append insere un element après ceux qui existent déjà dans le parent
    sliderHTML.append(coverSlider);


};
export {slider};