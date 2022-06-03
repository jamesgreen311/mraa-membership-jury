function timestampNewRow() {
    let timestampCol = 11;
    let now = new Date();
    let ws = SpreadsheetApp.getActiveSpreadsheet();
    let ss = ws.getActiveSheet();
    let row = ss.appendRow(['Test']).getLastRow();

    ss.getRange(row, timestampCol).setValue(now);
  
  }