$(document).ready(function() {
  var url = window.location.href + '.json';
  $.ajax({
    url: url,
    type: 'GET'
  }).done(function(company){
    addCompanyToPage(company);
  });
});

// function addCompaniesToPage(companies) {
//   companies.forEach( function(company) {
//     $('#companies-list').append(
//     ['<li>',
//       '<a href="/companies/',
//       company.id,
//       '">',
//       company.name,
//       '</a>',
//     '</li>',
//     '<ul id="',
//     company.name,
//     '-jobs"></ul>'
//     ].join(''));
//   }
// )};

function addCompanyToPage(company) {
  $('#name').html(company.name);
  company.jobs.forEach(function(job) {
    $('#jobs').append('<li><a href="/jobs/' + job.id + '">' + job.title + '</li>')
  })
}