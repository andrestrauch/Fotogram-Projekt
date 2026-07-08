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
