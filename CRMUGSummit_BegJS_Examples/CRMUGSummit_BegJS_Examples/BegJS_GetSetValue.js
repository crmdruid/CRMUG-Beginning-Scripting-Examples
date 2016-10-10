function GetSetValue() {

    var name = Xrm.Page.getAttribute("lat_name").getValue();

    Xrm.Utility.alertDialog(name);

    var newValue = "Hello CRMUG";

    Xrm.Page.getAttribute("lat_name2").setValue(newValue);

}

function GetSetLookupValue() {

    var account = Xrm.Page.getAttribute("lat_accountlookup").getValue();

	if (!account) return; //Check if populated before using

    var accountName = account[0].name;

    Xrm.Utility.alertDialog(accountName);

    var newAccount = new Array();
    newAccount[0] = new Object();
    newAccount[0].id = "66A3E266-BFB9-E411-80E0-C4346BACBABC";
    newAccount[0].name = "A. Datum Corporation (sample)";
    newAccount[0].entityType = "account";

    Xrm.Page.getAttribute("lat_accountlookup2").setValue(newAccount);
}