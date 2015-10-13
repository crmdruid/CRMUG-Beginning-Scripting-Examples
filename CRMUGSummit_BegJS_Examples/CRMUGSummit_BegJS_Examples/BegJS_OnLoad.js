function Form_OnLoad() {

    var formType = Xrm.Page.ui.getFormType();

    if (formType === 1) {
        alert("New Record");
    }

    if (formType === 2) {
        alert("Existing Editable Record");
    }

    if (formType === 4) {
        alert("Inactive Record");
    }

}