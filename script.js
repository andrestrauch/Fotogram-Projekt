const boxArray = [{name: "Bild01", link: "./assets/img/bild1.jpg"},
                  {name: "Bild02", link: "./assets/img/bild2.jpg"}, 
                  {name: "Bild03", link: "./assets/img/bild3.jpg"}, 
                  {name: "Bild04", link: "./assets/img/bild4.jpg"}, 
                  {name: "Bild05", link: "./assets/img/bild5.jpg"}, 
                  {name: "Bild06", link: "./assets/img/bild6.jpg"},
                  {name: "Bild07", link: "./assets/img/bild7.jpg"},
                  {name: "Bild08", link: "./assets/img/bild8.jpg"},
                  {name: "Bild09", link: "./assets/img/bild9.jpg"},
                  {name: "Bild10", link: "./assets/img/bild10.jpg"},
                  {name: "Bild11", link: "./assets/img/bild11.jpg"},
                  {name: "Bild12", link: "./assets/img/bild12.jpg"}, 
                 ];

const containerRef = document.getElementById("container");

// rendern der boxen
function renderBoxes() {

    containerRef.innerHTML = "";
    for (let i = 0; i < boxArray.length; i++) {

        containerRef.innerHTML += /*html*/`
            <div class="box" id="box${i}">
            <img src="${boxArray[i].link}" alt="${boxArray[i].name}" />
            </div>
        `;
    }
}
renderBoxes();