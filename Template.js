function templateBoxen(i) {
    return /*html*/ `
            <button
            aria-haspopup="dialog" 
            aria-controls="myDialog"
            class="box" id="box${i}" 
            onclick="startDialog(${i})">
            <img src="${boxArray[i].link}" alt="${boxArray[i].name}" />
            </button>
        `;
}

function templateDialogTitle(index) {
    const h2Ref = document.getElementById(`dialogTitle`);
    h2Ref.innerHTML = "";
    h2Ref.innerHTML += /*html*/ `
            <h2>${boxArray[index].name}</h2>
        `;
}

function templateDialogBtn() {
    const btnRef = document.getElementById(`dialogBtn`);
    btnRef.innerHTML = "";
    btnRef.innerHTML += /*html*/ `
                <img src="./assets/icons/close.png" alt="Dialog Schließen" />
        `;
}

function templateDialogContent(index) {
    const contentRef = document.getElementById(`dialogContent`);
    contentRef.innerHTML = "";
    contentRef.innerHTML += /*html*/ `
            <div>
                <img src="${boxArray[index].link}" alt="${boxArray[index].name}" />
            </div>
        `;
}

function templateDialogFooter(index) {
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
}

function templateStartEventListener() {
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            endDialog(event);
        }
    });

    dialogRef.addEventListener("click", (event) => {
        const rect = dialogRef.getBoundingClientRect();
        const isInDialog =
            event.clientX >= rect.left &&
            event.clientX <= rect.right &&
            event.clientY >= rect.top &&
            event.clientY <= rect.bottom;
        if (!isInDialog) {
            endDialog(event);
        }
    });
}
