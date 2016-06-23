$(document).ready(function() {
  alert('document loaded!')
  var data = getJobsData();
  alert(data);
  console.log(data);
  $("div").append(data);
});

function getJobsData() {
  return $.ajax({url: 'http://localhost:300/jobs.json', dataType : "jsonp"});
}