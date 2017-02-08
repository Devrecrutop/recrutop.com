# Templates 

 - Aller dans le code source des pages pour voir la template utilisée. 
 - Dans Website_templates, puis cmsdata, se trouvent toutes les templates utilisées sur le site.
 - La version desktop et Phoenix ne sont pas synchronisées. La version destkop permet de créer une redirection url directement, la version phoenix permet d’utiliser les templates entre sites.
 - Attention à remettre les templates aux mêmes endroits, en respectant la structure (et les sous dossiers). 
 - Liste des templates utilisées : 
    - acmsbusjabHome →  Template Home Recrutop.com
        - Fonctionnalité particles, nécessite particle.js/x.x.x
    - acmsbujabCandidats → quasiment toutes les pages du site : celles générées automatiquement par Otys : espace recruteur, espace candidat
    - Fonctionnalité de recherche algolia, nécessite algoliasearch.min.js, instantsearch.min.js, app.js, utils.js et homejquery.js. CSS associé : instantsearch.min.css
    - acmsbusjabFullwidth (sous dossier Monadmin) → Page Algolia fullwidth (Chercher un Job)
        - Nécessite les différents call d'Algolia 

#Recherche de postes 
 
 - La recherche des postes est faite par Algolia, il faut télécharger des fichiers CSV et les importer sur [le dashboard](https://www.algolia.com/explorer#?index=search-job)
 

#Hooks OTYS 


 - Fiche candidat sur l’espace client ⇒ Candidate_Q
    - Pour éviter d’afficher les autres “infos” sur la fiche candidat, mais n’afficher que le CV, j’ai ajouté un {$record.name} en value. Je l’ai mis en hidden en CSS par la suite 
 - Liste des annonces/postes est probablement websites_templates/data/templates/JobsDetail1.html cependant, les modifications ne sont pas prises en compte dans le FTP (2017-02-08) donc les modifications sont à faire en CSS
 - Liste des annonces sur l'espace client⇒ customers/joblist.html
    - Pour que les annonces apparaissent sur cet espace de l’espace recruteur, elles doivent être : publiées, Actives, le contact doit être celui de l’espace recruteur qui est connecté 
    - Pour le menu : le menu “mes annonces” ne s’affiche que si on a coché la case  dans les autorisations du contact dans otys 
![](http://i.gyazo.com/d79328a2b0710c770e7003db8d8c5035.png)

#Fichiers de style.css

 - Le fichier style fonctionne comme un fichier css normal. 
 - Il est cependant possible d’utiliser SASS 
  - Aller sur http://css2sass.herokuapp.com/ et convertir le css en sass
  -     > gem install sass
  - Enregistrer la sortie dans un fichier (aujourd’hui nommé import.sass)
scanner les modifications du fichiers et les compiler directement en css avec la commande
  - >sass --watch import.sass:style.css

#Particles.js

  - Pour mettre à jour les particles, aller sur http://vincentgarreau.com/particles.js/ faire ses modifications, ensuite cliquer sur → Download current config (json)et  coller le json obtenu dans particles.js sur notre dossier github, après particlesJS("particles-js",  et avant );
  - Alternativement, possibilité de créer un codepen temporaire pour exporter le .js à appeler en dessous du canevas. (div id=particles)

#Rawgit

Cette url de rawgit est utilisable pour la production mais, il faut toujours prendre la dernière version (en sélectionnant le commit), sur https://rawgit.com/ 
En effet, les modifications ne sont pas prises en compte sur les fichiers de production, il faut donc prendre des url différentes à chaque fois. 

    <link rel="stylesheet" href="https://cdn.rawgit.com/Devrecrutop/recrutop.com/2cc43e22768d36022a1837c617f8109026ea16b1/nouvelles%20templates/blog/style.css" />


![](https://camo.githubusercontent.com/046ef00f68f6936ac132a009135faba5236688aa/68747470733a2f2f63646e2e7261776769742e636f6d2f726a73746f6e652f726a73746f6e652e6769746875622e696f2f623633663866653930333231353165326532326235383933636562373137373734346665386531612f696d672f5261774769744c696e6b696e672e676966)

#Fonctionnement des FTP

Sur les commentaires : 
Les commentaires écrits en {* *} ne sont pas affichés dans le rendu final 
Les commentaires écrits en <!-- /UTS/customers/candidate_Q.html → le sont 
