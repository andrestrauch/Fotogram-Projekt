const boxArray = [
    {
        name: "Vereister See mit Bergen",
        link: "./assets/img/vereister_see_mit_bergen.jpg",
    },
    {
        name: "Regnerische Stadt bei Nacht",
        link: "./assets/img/regnerische_stadt_bei_nacht.jpg",
    },
    {
        name: "Helle und Dunkle Wolken",
        link: "./assets/img/helle_und_dunkle_wolken.jpg",
    },
    {
        name: "Vogel auf einem Ast",
        link: "./assets/img/vogel_auf_einem_ast.jpg",
    },
    {
        name: "Wolken Wirbel von Oben",
        link: "./assets/img/wolken_wirbel_von_oben.jpg",
    },
    {
        name: "Fluss am Berg",
        link: "./assets/img/fluss_am_berg.jpg",
    },
    {
        name: "Ente im Wasser",
        link: "./assets/img/ente_im_wasser.jpg",
    },
    {
        name: "Mensch mit Taschenlampe",
        link: "./assets/img/mensch_mit_taschenlampe.jpg",
    },
    {
        name: "Vogel auf einem Stein",
        link: "./assets/img/vogel_auf_einem_stein.jpg",
    },
    {
        name: "Leoparden Jungtiere",
        link: "./assets/img/leoparden_jungtiere.jpg",
    },
    {
        name: "Verschneite Berglandschaft",
        link: "./assets/img/verschneite_berglandschaft.jpg",
    },
    {
        name: "Baum im Schnee",
        link: "./assets/img/baum_im_schnee.jpg",
    },
];

const containerRef = document.getElementById("gallery");
const dialogRef = document.getElementById(`myDialog`);

function renderBoxes(event) {
    containerRef.innerHTML = "";
    for (let i = 0; i < boxArray.length; i++) {
        containerRef.innerHTML += templateBoxen(i);
    }
    event.stopPropagation();
    setFocusOnTop();
}

function startDialog(index) {
    dialogRef.showModal();
    dialogRef.classList.add(`opened`);

    templateDialogTitle(index);
    templateDialogBtn();
    templateDialogContent(index);
    templateDialogFooter(index);
    templateStartEventListener();
}

function imgLeft(i) {
    if (i == 0) {
        i = boxArray.length - 1;
    } else {
        i--;
    }
    endDialog(event);
    startDialog(i);
}

function imgRight(i) {
    if (i == 11) {
        i = 0;
    } else {
        i++;
    }
    endDialog(event);
    startDialog(i);
}

function endDialog(event) {
    dialogRef.close();
    dialogRef.classList.remove(`opened`);
    event.stopPropagation();
}

function setFocusOnTop() {
    const elemRef = document.getElementById(`dialogTitle`);
    elemRef.focus();
}
