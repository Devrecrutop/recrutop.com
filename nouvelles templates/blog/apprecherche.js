var search = instantsearch({
  appId: 'JP7LP38V57',
  apiKey: 'a1d878bd8848b980077d9c2d59a93a1e',
  indexName: 'search-job',
  urlSync: true,

});

  search.addWidget(
    instantsearch.widgets.searchBox({
      container: '#search-input',
      placeholder: 'Exemple : Chargé de Clientèle Boulogne',
    })
  );

  search.addWidget(
    instantsearch.widgets.hits({
      container: '#hits',
      hitsPerPage: 25,
      templates: {
        item: getTemplate('hit'),
        empty: getTemplate('no-results')
      }
    })
  );

  search.addWidget(
    instantsearch.widgets.stats({
      container: '#stats',
      templates: {
    body: getTemplate('stats')
  }
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
    container: '#brands',
    attributeName: 'JobCategory',
    operator: 'and',
    limit: 10,
    templates: {
      header: 'Catégories'
    }
  })
);

search.addWidget(
  instantsearch.widgets.refinementList({
    container: '#lieu',
    attributeName: 'lieu',
    operator: 'or',
    limit: 10,
    templates: {
      header: 'Lieu'
    }
  })
);


function getTemplate(templateName) {
  return document.querySelector('#' + templateName + '-template').innerHTML;
}

function getHeader(title) {
  return '<h5>' + title + '</h5>';
}


search.start();
