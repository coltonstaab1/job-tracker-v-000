$(document).ready(function() {
  var data = getJobsData();
});

function getJobsData() {
    $.get("http://localhost:3000/jobs.json", function(data) {
      return data;
  });
}