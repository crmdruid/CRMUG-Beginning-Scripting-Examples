function SetFormNotification() {

    var showFormNotification = Xrm.Page.getAttribute("lat_showformnotification").getValue();

    if (showFormNotification === true) {
        Xrm.Page.ui.setFormNotification("Hello CRMUG", "INFO", "123456");
    } else {
        Xrm.Page.ui.clearFormNotification("123456");
    }

}

function SetFieldNotification() {

    var showFieldNotification = Xrm.Page.getAttribute("lat_showfieldnotification").getValue();

    if (showFieldNotification === true) {
        Xrm.Page.getControl("lat_testfield").setNotification("Error!", "987654");
    } else {
        Xrm.Page.getControl("lat_testfield").clearNotification("987654");
    }

}