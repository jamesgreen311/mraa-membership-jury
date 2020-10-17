const config = connect().getSheetByName("Config");

// Defines the structure of the config array
const ConfigMap = {
    uploadMax: {
        colByNum: 1,
        colByRef: "a:a"
    },
    contactName: {
        colByNum: 2,
        colByRef: "b:b"
    },
    contactEmail: {
        colByNum: 3,
        colByRef: "c:c"
    }
}

function getUploadMax() {
    return config.getRange(2, ConfigMap.uploadMax.colByNum).getValue();
}

function getContactName() {
    return config.getRange(2, ConfigMap.contactName.colByNum).getValue();
}

function getContactEmail() {
    return config.getRange(2, ConfigMap.contactEmail.colByNum).getValue();
}