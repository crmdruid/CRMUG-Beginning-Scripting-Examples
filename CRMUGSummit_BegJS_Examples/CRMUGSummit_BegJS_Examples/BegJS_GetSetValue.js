function GetSetValue() {

    var name = Xrm.Page.getAttribute("lat_name").getValue();

    alert(name);

    var newValue = "Hello CRMUG";

    Xrm.Page.getAttribute("lat_name").setValue(newValue);

}

function GetSetLookupValue() {

    var account = Xrm.Page.getAttribute("lat_accountlookup").getValue();

    var accountName = account[0].name;

    alert(accountName);

    var newAccount = new Array();
    newAccount[0] = new Object();
    newAccount[0].id = "66A3E266-BFB9-E411-80E0-C4346BACBABC";
    newAccount[0].name = "A. Datum Corporation (sample)";
    newAccount[0].entityType = "account";

    Xrm.Page.getAttribute("lat_accountlookup").setValue(newAccount);
}