function SetRequirementLevel() {
    
    var requirement = Xrm.Page.getAttribute("lat_requirement").getValue();

    if (requirement === 807990000) { //None
        Xrm.Page.getAttribute("lat_testfield").setRequiredLevel("none");
    }

    if (requirement === 807990001) { //Recommended
        Xrm.Page.getAttribute("lat_testfield").setRequiredLevel("recommended");
    }

    if (requirement === 807990002) { //Required
        Xrm.Page.getAttribute("lat_testfield").setRequiredLevel("required");
    }

}