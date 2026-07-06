const boxArray = [
    { name: "Bild01", link: "./assets/img/bild1.jpg" },
    { name: "Bild02", link: "./assets/img/bild2.jpg" },
    { name: "Bild03", link: "./assets/img/bild3.jpg" },
    { name: "Bild04", link: "./assets/img/bild4.jpg" },
    { name: "Bild05", link: "./assets/img/bild5.jpg" },
    { name: "Bild06", link: "./assets/img/bild6.jpg" },
    { name: "Bild07", link: "./assets/img/bild7.jpg" },
    { name: "Bild08", link: "./assets/img/bild8.jpg" },
    { name: "Bild09", link: "./assets/img/bild9.jpg" },
    { name: "Bild10", link: "./assets/img/bild10.jpg" },
    { name: "Bild11", link: "./assets/img/bild11.jpg" },
    { name: "Bild12", link: "./assets/img/bild12.jpg" },
];

const containerRef = document.getElementById("gallery");

// rendern der boxen
function renderBoxes() {
    containerRef.innerHTML = "";
    for (let i = 0; i < boxArray.length; i++) {
        containerRef.innerHTML += /*html*/ `
            <div class="box" id="box${i}" onclick="startDialog(${i})">
            <img src="${boxArray[i].link}" alt="${boxArray[i].name}" />
            </div>
        `;
    }
}
renderBoxes();

const dialogRef = document.getElementById(`myDialog`);
function startDialog(index) {
    dialogRef.showModal();
    dialogRef.classList.add(`opened`);

    const h2Ref = document.getElementById(`dialogH2`);
    h2Ref.innerHTML = "";
    h2Ref.innerHTML += /*html*/ `
            <h2>${boxArray[index].name}</h2>
        `;

    const btnRef = document.getElementById(`dialogBtn`);
    btnRef.innerHTML = "";
    btnRef.innerHTML += /*html*/ `
            <button>
                <img src="./assets/icons/close.png" alt="Schließen" />
            </button>
        `;

    const contentRef = document.getElementById(`dialogContent`);
    contentRef.innerHTML = "";
    contentRef.innerHTML += /*html*/ `
            <div>
                <img src="${boxArray[index].link}" alt="${boxArray[index].name}" />
            </div>
        `;

    const footerRef = document.getElementById(`dialogFooter`);
    footerRef.innerHTML = "";
    footerRef.innerHTML += /*html*/ `
            <div class="content-footer">
                <button onclick="imgLeft(${index})">
                    <img src="./assets/icons/arrow_left.png" alt="Pfeil nach Links" />
                </button>
                <p>${index + 1}/${boxArray.length}</p>
                <button onclick="imgRight(${index})">
                    <img src="./assets/icons/arrow_right.png" alt="Pfeil nach Rechts" />
                </button>
            </div>
        `;

    // Modal schließen, wenn ESC gedrückt wird
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            endDialog();
        }
    });

    // Dialog beim klicken auf den Hintergrund schließen
    dialogRef.addEventListener("click", (event) => {
        if (event.target === dialogRef) {
            endDialog();
        }
    });
}
function imgLeft(i) {
    if (i == 0) {
        i = boxArray.length - 1;
        console.log(boxArray.length);
    } else {
        i--;
    }
    endDialog();
    startDialog(i);
}
function imgRight(i) {
    if (i == 11) {
        i = 0;
    } else {
        i++;
    }
    endDialog();
    startDialog(i);
}
function endDialog() {
    dialogRef.close();
    dialogRef.classList.remove(`opened`);
}
