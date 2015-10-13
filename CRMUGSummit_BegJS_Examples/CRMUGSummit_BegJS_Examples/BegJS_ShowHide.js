function ShowHideField() {

	if (Xrm.Page.getControl("lat_name").getVisible()) {
		Xrm.Page.getControl("lat_name").setVisible(false);
	} else {
		Xrm.Page.getControl("lat_name").setVisible(true);
	}

}

function ShowHideTab() {

	if (Xrm.Page.ui.tabs.get("HideTab").getVisible()) {
		Xrm.Page.ui.tabs.get("HideTab").setVisible(false);
	} else {
		Xrm.Page.ui.tabs.get("HideTab").setVisible(true);
	}

}

function ShowHideSection() {

	if (Xrm.Page.ui.tabs.get("HideTab").sections.get("HideSection").getVisible()) {
		Xrm.Page.ui.tabs.get("HideTab").sections.get("HideSection").setVisible(false);
	} else {
		Xrm.Page.ui.tabs.get("HideTab").sections.get("HideSection").setVisible(true);
	}

}

function ShowHideNavigation() {

	if (Xrm.Page.getAttribute("lat_showhidenavigation").getValue() === true) {
		Xrm.Page.ui.navigation.items.get("navConnections").setVisible(false);
	} else {
		Xrm.Page.ui.navigation.items.get("navConnections").setVisible(true);
	}

}