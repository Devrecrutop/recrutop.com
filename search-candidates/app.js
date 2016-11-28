var search = instantsearch({
    // Replace with your own values
    appId: 'JP7LP38V57',
    apiKey: '67ae1c2ac05e7dfc1538609da8e4d223', // search only API key, no ADMIN key
    indexName: 'search-candidates',
    urlSync: true
});

search.addWidget(
    instantsearch.widgets.searchBox({
        container: '#search-input',
        placeholder: 'Ex de recherche : "manoeuvre Paris"'
    })
);
search.addWidget(
    instantsearch.widgets.hits({
        container: '#hits',
        hitsPerPage: 100,
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
    instantsearch.widgets.refinementList({
        container: '#qualif-principale',
        attributeName: 'qualif-principale',
        limit: 25,
        sortBy: ['isRefined', 'count:desc', 'name:asc'],
        operator: 'or',
        templates: {
            header: '<h5>Qualif-principale</h5>'
        }
    })
);
search.addWidget(
    instantsearch.widgets.refinementList({
        container: '#qualif-secondaire',
        attributeName: 'qualif-secondaire',
        limit: 10,
        sortBy: ['isRefined', 'count:desc', 'name:asc'],
        operator: 'or',
        templates: {
            header: '<h5>Qualif-secondaire</h5>'
        }
    })
);

search.addWidget(
    instantsearch.widgets.refinementList({
        container: '#ville',
        attributeName: 'ville',
        limit: 10,
        sortBy: ['isRefined', 'count:desc', 'name:asc'],
        operator: 'or',
        templates: {
            header: '<h5>Ville</h5>'
        }
    })
);
search.addWidget(
    instantsearch.widgets.refinementList({
        container: '#specialite',
        attributeName: 'specialite',
        limit: 100,
        sortBy: ['isRefined', 'count:desc', 'name:asc'],
        operator: 'or',
        templates: {
            header: '<h5>specialite</h5>'
        }
    })
);
search.start();

function getTemplate(templateName) {
    return document.querySelector('#' + templateName + '-template').innerHTML;
}

function getHeader(title) {
    return '<h5>' + title + '</h5>';
}
