
var search = instantsearch({
  // Replace with your own values
  appId: 'JP7LP38V57',
  apiKey: '0236170a81d35359b1ad085398332ff3',
  indexName: 'postes',
  urlSync: true
});


  search.addWidget(
    instantsearch.widgets.searchBox({
      container: '#search-input',
      placeholder: 'Recherche ici fdp'
    })
  );

  search.addWidget(
    instantsearch.widgets.hits({
      container: '#hits',
      hitsPerPage: 10,
      templates: {
        item: getTemplate('hit'),
        empty: getTemplate('no-results')
      }
    })
  );

  search.addWidget(
    instantsearch.widgets.stats({
      container: '#stats'
    })
  );


  search.addWidget(
    instantsearch.widgets.pagination({
      container: '#pagination',
      scrollTo: '#search-input'
    })
  );

  search.addWidget(
    instantsearch.widgets.refinementList({
      container: '#category',
      attributeName: 'categories',
      limit: 10,
      operator: 'or',
      templates: {
        header: getHeader('Categorie')
      }
    })
  );


  search.start();
}

function getTemplate(templateName) {
  return document.querySelector('#' + templateName + '-template').innerHTML;
}

function getHeader(title) {
  return '<h5>' + title + '</h5>';
}
