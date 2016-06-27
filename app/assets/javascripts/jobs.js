$(document).ready(function() {
 // var data = getJobsData();
  $.ajax({
    url: 'http://localhost:3000/jobs.json',
    type: 'GET'
  }).done(function(jobs){
    addDataToRow(jobs);
  });
});

/*
function getJobsData() {
    $.get("http://localhost:3000/jobs.json", function(data) {
      debugger;
      return data;
  });
}
*/
var addDataToRow = function(data) {
  for (var i = 0; i < data.length; i++) {
    var job = data[i];
    $('#jobsTable').append([
        '<tr>',
          '<td>',
            '<a href="jobs/',
              job.id,
            '">',
            job.title,
            '</a>',
          '</td>',
          '<td>',
            job.city,
          '</td>',
          '<td>',
            job.state,
          '</td>',
          '<td>',
            job.description,
          '</td>',
        '</tr>'
      ].join(''));
  }
}
