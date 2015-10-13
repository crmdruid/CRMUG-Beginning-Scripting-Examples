function SubmitLockedField() {

    var newValue = Xrm.Page.getAttribute("lat_newvalue").getValue();

    Xrm.Page.getAttribute("lat_lockedfield").setValue(newValue);

    var submit = Xrm.Page.getAttribute("lat_submit").getValue();

    if (submit === true) {
        Xrm.Page.getAttribute("lat_lockedfield").setSubmitMode("always");
    } else {
        Xrm.Page.getAttribute("lat_lockedfield").setSubmitMode("never");
    }

}