$('#company-show').ready(function() {  var url = window.location.href + '.json';
  $.ajax({
    url: url,
    type: 'GET'
  }).done(function(company){
    addCompanyToPage(company);
  });
});

function addCompanyToPage(company) {
  $('#name').html(company.name);
  company.jobs.forEach(function(job) {
    $('#jobs').append('<li><a href="/jobs/' + job.id + '">' + job.title + '</li>')
  })
}