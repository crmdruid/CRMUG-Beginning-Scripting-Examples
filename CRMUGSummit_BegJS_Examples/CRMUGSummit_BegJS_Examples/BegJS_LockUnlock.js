function LockUnlock() {

    var value = Xrm.Page.getAttribute("lat_lockunlock").getValue();

    if (value === true) {
        Xrm.Page.ui.controls.get("lat_testfield").setDisabled(true);
    } else {
        Xrm.Page.ui.controls.get("lat_testfield").setDisabled(false);
    }
}