$(document).ready(function() {
  getJobsData();
});

function getJobsData() {
    $.get("http://localhost:3000/jobs.json", function(data) {
        debugger;
        var job_title = data[0]['title'];
        $("div").append(job_title);  
  });
}
