var search = instantsearch({
  appId: 'JP7LP38V57',
  apiKey: 'a1d878bd8848b980077d9c2d59a93a1e',
  indexName: 'search-job',
  urlSync: true,

  searchFunction(helper) {
    if (helper.state.query === '') {
      return;
    }

    helper.search();
  }

  search.addWidget(
  instantsearch.widgets.searchbox({
    queryHook: function(query, search) {
      if (helper.query === '') return showHitsReplacement(); // same, show "hello world" instead of hits, no more query

      debouncedSearch(query, search);
    }
  })
)
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
      hitsPerPage: 5,
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






function getTemplate(templateName) {
  return document.querySelector('#' + templateName + '-template').innerHTML;
}

function getHeader(title) {
  return '<h5>' + title + '</h5>';
}


search.start();
