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