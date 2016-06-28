$(document).ready(function() {
    $.ajax({
    url: 'http://localhost:3000/companies.json',
    type: 'GET'
  }).done(function(companies){
    addCompaniesToPage(companies);
  });
});

function addCompaniesToPage(companies) {
  companies.forEach( function(company) {
    $('#companies-list').append(
    ['<li>',
      '<a href="/companies/',
      company.id,
      '">',
      company.name,
      '</a>',
    '</li>',
    '<ul id="',
    company.name,
    '-jobs"></ul>'
    ].join(''));
  }
)};

