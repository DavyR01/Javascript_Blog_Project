
Chapitre 115 :

Setup & Config :

   - `npm init -y`
   - `npm i -D @babel/cli @babel/core @babel/preset-env babel-loader css-loader html-webpack-plugin style-loader webpack webpack-cli webpack-dev-server core-js@3 regenerator-runtime`
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


Chapitre 116 :

   - Configurer webpeck.config.js pour du multipages pour que webpack prenne en considération les dfférents points d'entrée.

   - Le javascript que l'on va crée à partir d'un point d'entrée (webpack) est ce que l'on appelle un chunk. On va donc crée 2 chunk, un pour index.js (mainEntry) et l'autre pour les form (form). Là, on fera attention à bien respecter le path de l'architecture de notre dossier source src.

   - On déclare les keys filename et chunks dans 2 instances du constructeur HtmlWebpackPlugin. On aura donc plusieurs bundles, donc un bundle par page lorsque l'on va build l'application en ayant configuré webpack comme précédemment.

   - On ajoute un dossier form dans src puis les 3 fichiers : form.html, form.scss et form.js. On test les différentes pages en changeant le styl et en créant 2 liens hypertexte (a href).

   - Une fois la configuration webpack effectué, on build l'app en exécutant `npm run webpack` pour générer un dossier dist puis `npm start` pour se connecter au serveur Webpack.

   
Chapitre 117 :

   - npm i -D copy-webpack-plugin clean-webpack-plugin


Chapitre 130 :

# A SAVOIR :
   1) Il faut éviter les largeurs fixes pour les conteneurs dans le CSS pour permettre un design responsive.
   2) Par défaut, un bouton à l'intérieur d'une balise <form>, entraîne la soumission du formulaire sur un clic.
   3) Tout attribut HTML qui commence par data- sera récupérable en JavaScript sur la propriété dataset
   4) Dans le contexte d'utilisation de webpack, toutes les variables déclarées en dehors d'une fonction ne sont pas sur le contexte global d'exécution car webpack englobe tous les fichiers Javascript dans des "modules" qui sont assimilables à des fonctions.
   5) La commande `"preview": "npm run build && npx http-server dist"` permet de simuler un environnement de production.

