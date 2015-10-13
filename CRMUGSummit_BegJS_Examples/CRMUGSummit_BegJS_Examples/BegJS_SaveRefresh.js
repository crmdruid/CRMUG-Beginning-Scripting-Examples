function SaveRefresh() {

    var value = Xrm.Page.getAttribute("lat_action").getValue();

    if (value === 807990000) { //Save
        Xrm.Page.data.entity.save(null);
    }

    if (value === 807990001) { //Save and Close
        Xrm.Page.data.entity.save("saveandclose");
    }

    if (value === 807990002) { //Save and New
        Xrm.Page.data.entity.save("saveandnew");
    }

    if (value === 807990003) { //Refresh
        Xrm.Page.data.refresh(true);
    }

    if (value === 807990004) { //Refresh Subgrid
        Xrm.Page.ui.controls.get("Children").refresh();
    }
}
