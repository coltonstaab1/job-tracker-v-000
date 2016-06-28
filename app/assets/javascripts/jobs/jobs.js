$(document).ready(function() {
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
          '<td>',
            job.salary,
          '</td>',
        '</tr>'
      ].join(''));
  }
}

var submitForm = function() {
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

function Job (title, city, state, description) {
  this.title = title;
  this.city = city;
  this.state = state;
  this.description = description;
  this.salary = salary;
  this.formattedSalary = function() {
    return this.salary.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  }
}
