$(document).ready(function() {
  $('#edit-job').hide();
  var url = window.location.href + '.json';
  $.ajax({
    url: url,
    type: 'GET'
  }).done(function(job){
    degbugger;
    addJobToPage(job);
  });
  editJob();
  submitForm();
});

var addJobToPage = function(data) {
  $('#title').html(data.title);
  $('#city').html(data.city);
  $('#state').html(data.state);
  $('#description').html(data.description);
} 

var editJob = function() {
  $('#edit-job-button').click(function() {
    $('#edit-job').show();
  });
}

var submitForm = function() {
  $('form').on('submit', function(event) {
    event.preventDefault();
    var jobNumber = window.location.pathname.split('/').pop();
    var url = '/jobs/' + jobNumber;
    var values = $(this).serialize();
    var posting = $.post(url, values);
    posting.done(function(data) {
      updatePage(data);
      $('#edit-job').hide();
    });
  });
}

var updatePage = function(data) {
  $("[id*=title]").html(data.title);
  $("[id*=city]").html(data.city);
  $("[id*=state]").html(data.state);
  $("[id*=description]").html(data.description);
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