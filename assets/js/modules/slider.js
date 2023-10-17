const sliderHTML = document.querySelector("#slider");
const coverUrl = "./assets/img/cover/";


const initSlider = () => {
    // je cree une première image d'arriere plan fixe
    const coverSlider = document.createElement("img");
    coverSlider.src = coverUrl + catalogue[currentTrack].cover;
    coverSlider.id = "coverSlider";
    sliderHTML.append(coverSlider);
    // je cree une deuxieme image supperposée destiné à l'effet(transform)
    const imgA = document.createElement("img");
    imgA.id = "imgA";
    sliderHTML.append(imgA);
}



const slider = (status = "init") => {
    console.log("initialisation du slider");
    /* console.dir(catalogue);
    console.log(catalogue[0].cover); */
    //console.log(catalogue[0]["cover"]);
    


    switch (status) {
        case "init":
            initSlider();
            break;
        case "next":
            document.querySelector("#coverSlider").src =
                coverUrl + catalogue[currentTrack].cover;
            break;
        case "prev":
            document.querySelector("#coverSlider").src =
                coverUrl + catalogue[currentTrack].cover;
            break;
        default:
            break;
    }



};

export { slider };