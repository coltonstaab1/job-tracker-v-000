$(document).ready(function() {
 // var data = getJobsData();
  $.ajax({
    url: 'http://localhost:3000/jobs.json',
    type: 'GET'
  }).done(function(jobs){
    addDataToRow(jobs);
  });

  submitForm();
});

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

var submitForm = function() {
  $('form').on('submit', function(event) {
    debugger;
    var title = $("#title").val();
    console.log(title);
    event.preventDefault();
  })
}