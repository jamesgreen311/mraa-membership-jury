/*
    Accepts input and converts it to commands for the model or view.

    The controller responds to the user input and performs interactions on the data model objects. 
    The controller receives the input, optionally validates it and then passes the input to the model.
*/
var Route = {};
Route.path = function(r, callback) {
  Route[r] = callback;
}

function saveFile(f,d) {
    let blob = Utilities.newBlob(f.bytes, f.mimeType, f.filename);
    let uploadFolder = DriveApp.getFolderById(imageFolderId)
    let today = new Date();

    let newFile = DriveApp.createFile(blob).moveTo(uploadFolder).getId();
    d.push(newFile);
    d.push(today); 
    
    let done = saveToSheet(d);
    /* Logger.log("Uploaded image id = %s",newFile) */
    return done;
}

function saveToSheet(data) {
    let ss = SpreadsheetApp.getActiveSpreadsheet();
    let ws = ss.getSheetByName(sheetName);

    ws.appendRow(data);
    /* Logger.log(data); */
    return true;
}