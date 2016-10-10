function Form_OnLoad() {

    var formType = Xrm.Page.ui.getFormType();

    if (formType === 1) {
    	Xrm.Utility.alertDialog("New Record");
    }

    if (formType === 2) {
    	Xrm.Utility.alertDialog("Existing Editable Record");
    }

    if (formType === 4) {
    	Xrm.Utility.alertDialog("Inactive Record");
    }

}