/*
  Any representation of information such as a chart, diagram or table.

  The view means presentation of the model in a particular format.
*/


function doGet(e) {
  Route.path("done", showDone);

  var r;
  if (Route[e.parameter.v]) {
    r = Route[e.parameter.v]();
  } else {
    // default to main page
    r = render(pageName);
  }

  return r;
}

function showDone() {
  return render(`${pageRoot}/Done`);
}

