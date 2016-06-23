$(document).ready(function() {
  alert('document loaded!')
  var data = getJobsData();
  alert(data);
});

function getJobsData() {
  return $.ajax({url: 'http://localhost:300/jobs.json', dataType : "jsonp"});
}