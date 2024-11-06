
## Chapitre 115 :

Setup & Config :
   ```
   npm init -y
   npm i -D @babel/cli @babel/core @babel/preset-env babel-loader css-loader html-webpack-plugin style-loader webpack webpack-cli webpack-dev-server core-js@3 regenerator-runtime
   ```
   - Ajouter fichier .gitignore avec node_modules et dist.
   - Modifier les scripts du package.json.
   - Créer un fichier webpack.config.js et le configurer.
   - Créer un fichier babel.config.js et le configurer.
   - Créer un dossier src avec les 3 fichiers index.html, style.css et index.js


   Utilisation du préprocesseur sass avec webpack => Ajout d'un nouveau loader scss : 

   - Modifier le webpack.config.js en ajoutant le loader "sass-loader"
   - `npm i -D sass-loader sass` (sass-loader permet  à webpack de lire les contenus des fichiers sass et sass va transforer les fichiers sass en fichiers css)
   - Modifier le fichier style.css en style.scss.
   - Penser à l'import du style css dans le point d'entrée de l'application donc index.js (voir dans webpack.config).


## Chapitre 116 :

   - Configurer webpeck.config.js pour du multipages pour que webpack prenne en considération les dfférents points d'entrée.

   - Le javascript que l'on va crée à partir d'un point d'entrée (webpack) est ce que l'on appelle un chunk. On va donc crée 2 chunk, un pour index.js (mainEntry) et l'autre pour les form (form). Là, on fera attention à bien respecter le path de l'architecture de notre dossier source src.

   - On déclare les keys filename et chunks dans 2 instances du constructeur HtmlWebpackPlugin. On aura donc plusieurs bundles, donc un bundle par page lorsque l'on va build l'application en ayant configuré webpack comme précédemment.

   - On ajoute un dossier form dans src puis les 3 fichiers : form.html, form.scss et form.js. On test les différentes pages en changeant le styl et en créant 2 liens hypertexte (a href).

   - Une fois la configuration webpack effectué, on build l'app en exécutant `npm run webpack` pour générer un dossier dist puis `npm start` pour se connecter au serveur Webpack.

   
## Chapitre 117 :
```
npm i -D copy-webpack-plugin clean-webpack-plugin
```


## Chapitre 130 :

## <span style="color: #26B260">A SAVOIR :
   1) Il faut éviter les largeurs fixes pour les conteneurs dans le CSS pour permettre un design responsive.
   2) Par défaut, un bouton à l'intérieur d'une balise <form>, entraîne la soumission du formulaire sur un clic.
   3) Tout attribut HTML qui commence par data- sera récupérable en JavaScript sur la propriété dataset
   4) Dans le contexte d'utilisation de webpack, toutes les variables déclarées en dehors d'une fonction ne sont pas sur le contexte global d'exécution car webpack englobe tous les fichiers Javascript dans des "modules" qui sont assimilables à des fonctions.
   5) La commande `"preview": "npm run build && npx http-server dist"` permet de simuler un environnement de production.

## <span style="color: #26B260"> MODE PRODUCTION VS DEVELOPMENT Webpack :
   1) En mode développement : source maps détaillées, code non minifié, HMR activé.
      En mode production : optimisations activées, minification, etc.
   2) Pour une meilleure gestion, il est souvent conseillé de créer des fichiers de configuration séparés pour le développement et la production. Par exemple :
   **webpack.dev.js** pour le développement
   **webpack.prod.js** pour la production

## <span style="color: #26B260">Lancer le mode DEBUG : 2 solutions

### 1ère solution depuis VS Code :
   1) Télécharger l'extension Javascript Debugger "ms-vscode.js-debug-nightly" 
   2) Un fichier de configuration launch.json va se créer. Le modifier si nécessaire en ajustant la bonne adresse du localhost notammment
   3) Se rendre dans "Run & Debug" (CTRL + MAJ + D).
   4) Positionner un breakpoint ou mettre debugger dans le code pour stopper l'exécution à un instant T. Puis ciiquer sur Start Debugging (F5)


### 2ème solution depuis la navigateur :
   1) A partir de VS Code, mettre "debugger" directement à l'endroit du code où l'on veut mettre en pause l'exécution à un isntant T pour debugger. Identique à un breakpoint.

   2) Mettre un autre breakpoint directement à partir du panel (volet) "Sources" de l'outil (console) de développement du navigateur (DevTools) sur un numéro de ligne. Le numéro doit s'afficher en bleu.

   Possibilité d'utiliser un __breakpoint conditionnel__ avec un clic droit et en définissant la règle que l'on souhaite. Le numéro doit s'afficher en bleu.
   
   Ces méthodes permettent de connaître l'état de toutes les variables à un instant T, que ce soit des variables globales ou locales ainsi que les différentes closures imbriqués dans les fonctions.

   3) Possibilité de mettre une variable dans l'option "watch" sur la sidebar de droite pour visualiser et observer son état en temps réel.

   4) Possibilité de charger le folder de notre projet directement à partir du workspace de l'onglet "Source" et ainsi apporter des modifications qui auront un impact direct sur notre code dans VS Code.


### 3ème solution depuis VS Code :
   1) Positionner des console.log() dans le code.