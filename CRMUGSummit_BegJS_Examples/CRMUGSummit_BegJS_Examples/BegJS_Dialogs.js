function ShowAlert() {
    
    Xrm.Utility.alertDialog("Hello CRMUG!");

}

function ShowDialog() {
    
    Xrm.Utility.confirmDialog("Is it cold where you live?", YesCallback, NoCallback);

}

function YesCallback() {
    
    Xrm.Utility.alertDialog("Stay warm!");

}

function NoCallback() {
    
    Xrm.Utility.alertDialog("I wish I was there.");

}