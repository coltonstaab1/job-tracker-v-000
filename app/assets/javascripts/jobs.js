$(document).ready(function() {
  var data = getJobsData();
  addDataToRow(data);
});

function getJobsData() {
    $.get("http://localhost:3000/jobs.json", function(data) {
      return data;
      debugger;
  });
}

function addDataToRow(data) {
  for (var i = 0; i < data.length; i++) {
    $('#jobsTable').append([
        '<tr>',
          '<td>',
            'Colton',
          '</td>',
        '</tr>'
      ].join(''));
  }
}