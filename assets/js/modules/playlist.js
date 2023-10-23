const playlistold = () => {
    const playlistDiv = document.querySelector("#playlist");
    // plan A innerHTML
    let playlistHTML = `<ul>`;
    catalogue.forEach(element => {
        console.dir(element);
        playlistHTML += `<li class="item">
                <div class="itemImg">
                    <img src="./assets/img/cover/${element.cover}" alt="${element.titre}">
                </div>
                <p>${element.titre}</p>
                <p>${element.artiste}</p>
                <p>${element.annee}</p>
                <div><i>like</i></div>
                <div><i>play</i></div>
            </li>`;
    });
    playlistHTML += `</ul>`;
    playlistDiv.innerHTML = playlistHTML;
}
const playlist = ()=>{
    
}
export { playlist }