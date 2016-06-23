$(document).ready(function() {
  alert('document loaded!');
  getJobsData();
});

function getJobsData() {
  $.ajax({
    url: 'http://localhost:3000/jobs.json',
    type: 'GET',
  }).done(function(data)
    console.log("Hello");
  );
};

