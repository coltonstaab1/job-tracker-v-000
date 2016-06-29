$(document).ready(function() {
  $.ajax({
    url: 'http://localhost:3000/jobs.json',
    type: 'GET'
  }).done(function(jobs){
    addDataToRow(jobs);
  });

  submitJobsForm();
});

var addDataToRow = function(data) {
  for (var i = 0; i < data.length; i++) {
    var job = new Job(data[i].id, data[i].title, data[i].city, data[i].state, data[i].description, data[i].salary);
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
}

var submitJobsForm = function() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    var values = $(this).serialize();
    var posting = $.post('/jobs', values);
    posting.done(function(data) {
      $('#jobsTable').append([
        '<tr>',
          '<td>',
            '<a href="jobs/',
              data.id,
            '">',
            data.title,
            '</a>',
          '</td>',
          '<td>',
            data.city,
          '</td>',
          '<td>',
            data.state,
          '</td>',
          '<td>',
            data.description,
          '</td>',
        '</tr>'
      ].join(''));
      $('form').trigger('reset');
    });
  });
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
