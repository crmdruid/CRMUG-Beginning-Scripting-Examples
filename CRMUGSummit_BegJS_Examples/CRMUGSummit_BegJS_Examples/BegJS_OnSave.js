function Form_OnSave(execObj) {

    var saveMode = execObj.getEventArgs().getSaveMode();

    if (saveMode === 1) {
        alert("Manual Save");
    }

    if (saveMode === 2) {
        alert("Save and Close");
    }

    if (saveMode === 70) {
        alert("Auto Save");
        execObj.getEventArgs().preventDefault();
    }  

}