function include(file) {
    return HtmlService.createHtmlOutputFromFile(file).getContent();
}

function render(f, opt) {
  let templ = HtmlService.createTemplateFromFile(f);
  if (opt) {
    let keys = Object.keys(opt);
    keys.forEach(function(k){
      templ[k] = opt[k];
    })

  }
  return templ.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getCurrentYear() {
  y = new Date().getFullYear();
  return y;
}

function sendNotification() {
  let email = HtmlService.createTemplateFromFile("EmailNotification");
  let data = connect().getSheetByName("Data"); 

  let sendTo = getContactEmail();
  let member = data.getRange(data.getLastRow(),1,data.getLastRow,2).getValues();
  let memberName = `${member[0]} ${member[1]}`;

}