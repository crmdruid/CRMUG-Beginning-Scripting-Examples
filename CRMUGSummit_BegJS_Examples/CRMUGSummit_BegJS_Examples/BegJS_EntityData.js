function GetRecordId() {
    
    var entityId = Xrm.Page.data.entity.getId();

    Xrm.Utility.alertDialog(entityId);

}

function GetRecordType() {
    
    var entityName = Xrm.Page.data.entity.getEntityName();

    Xrm.Utility.alertDialog(entityName);

}