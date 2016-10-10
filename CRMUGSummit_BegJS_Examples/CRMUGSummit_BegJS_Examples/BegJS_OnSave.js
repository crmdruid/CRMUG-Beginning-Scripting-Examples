function Form_OnSave(execObj) {

    var saveMode = execObj.getEventArgs().getSaveMode();

    if (saveMode === 1) {
    	Xrm.Utility.alertDialog("Manual Save");
    }

    if (saveMode === 2) {
    	Xrm.Utility.alertDialog("Save and Close");
    }

    if (saveMode === 70) {
    	Xrm.Utility.alertDialog("Auto Save");
        execObj.getEventArgs().preventDefault();
    }  

}