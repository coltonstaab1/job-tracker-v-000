$(document).ready(function() {
  $('#edit-job').hide();
  var url = window.location.href + '.json';
  $.ajax({
    url: url,
    type: 'GET'
  }).done(function(job){
    addJobToPage(job);
  });
  editJob();
  submitForm();
});

var addJobToPage = function(data) {
  $('#title').append(data.title);
  $('#city').append(data.city);
  $('#state').append(data.state);
  $('#description').append(data.description);
  $('#salary').append(data.salary)
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
  $("[id*=salary]").html(data.salary);
}