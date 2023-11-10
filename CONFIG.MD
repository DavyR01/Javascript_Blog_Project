
Setup & Config :

   - npm init -y
   - npm i -D @babel/cli @babel/core @babel/preset-env babel-loader css-loader html-webpack-plugin style-loader webpack webpack-cli webpack-dev-server core-js@3 regenerator-runtime
   - Ajouter fichier .gitignore avec node_modules et dist.
   - Modifier les scripts du package.json.
   - Créer un fichier webpack.config.js et le configurer.
   - Créer un fichier babel.config.js et le configurer.
   - Créer un dossier src avec les 3 fichiers index.html, style.css et index.js



   Utilisation de sass avec webpack => Ajout d'un nouveau loader scss : 

      - Modifier le webpack.config.js en ajoutant le loader "sass-loader"
      - npm i -D sass-loader sass (sass-loader permet  à webpack de lire les contenus des fichiers sass et sass va transforer les fichiers sass en fichiers css)
      - Modifier le fichier style.css en style.scss.
      - Penser à l'import du style css dans le point d'entrée de l'application donc index.js (voir dans webpack.config).