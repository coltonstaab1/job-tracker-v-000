$(document).ready(function() {
  $.ajax({
    url: 'http://localhost:3000/jobs.json',
    type: 'GET'
  }).done(function(jobs){
    initialJobsLoad(jobs);
  });

  submitJobsForm();
});

var initialJobsLoad = function(data) {
  for (var i = 0; i < data.length; i++) {
    addDataToRow(data[i]);
  }
}

var submitJobsForm = function() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    var values = $(this).serialize();
    var posting = $.post('/jobs', values);
    posting.done(function(data) {
      addDataToRow(data);
      $('form').trigger('reset');
    });
  });
}

var addDataToRow = function(data) {
  var job = new Job(data.id, data.title, data.city, data.state, data.description, data.salary);
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
        '<td>',
          job.formattedSalary(),
        '</td>',
      '</tr>'
    ].join(''));
  }

function Job (id, title, city, state, description, salary) {
  this.id = id;
  this.title = title;
  this.city = city;
  this.state = state;
  this.description = description;
  this.salary = salary;
  this.formattedSalary = function() {
    return '$' + this.salary.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  }
}
