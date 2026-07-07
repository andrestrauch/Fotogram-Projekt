function templateBoxen(i) {
    return /*html*/ `
            <div class="box" id="box${i}" onclick="startDialog(${i})">
            <img src="${boxArray[i].link}" alt="${boxArray[i].name}" />
            </div>
        `;
}
function templateDialogH2(index) {
    return /*html*/ `
            <h2>${boxArray[index].name}</h2>
        `;
}
function templateDialogBtn() {
    return /*html*/ `
            <button>
                <img src="./assets/icons/close.png" alt="Dialog Schließen" />
            </button>
        `;
}
function templateDialogContent(index) {
    return /*html*/ `
            <div>
                <img src="${boxArray[index].link}" alt="${boxArray[index].name}" />
            </div>
        `;
}
function templateDialogFooter(index) {
    return /*html*/ `
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
