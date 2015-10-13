function GetRecordId() {
    
    var entityId = Xrm.Page.data.entity.getId();

    alert(entityId);

}

function GetRecordType() {
    
    var entityName = Xrm.Page.data.entity.getEntityName();

    alert(entityName);

}