const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
   entry: {
      mainEntry: path.resolve(__dirname, "src/index.js"), //! Important
      form: path.resolve(__dirname, "src/form/form.js"),
      topbar: path.resolve(__dirname, "src/assets/javascripts/topbar.js"),
   },
   output: {
      path: path.resolve(__dirname, "dist"),
      filename: "[name].bundle.js"
   },

   //   resolve: {
   //    extensions: ['.js'],
   //    modules: [path.resolve(__dirname, '.'), 'node_modules'] //! Le 'context' de Webpack, s'il n'est pas spécifié, est défini comme le répertoire contenant le fichier de configuration webpack.
   //   },

   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
               loader: "babel-loader"
            }
         },
         {
            test: /\.scss$/i,
            use: ["style-loader", "css-loader", 'sass-loader'] /* Les plugins positionnés dans "use" sont exécutés de droite à gauche */

         }
      ]
   },

   plugins: [
      new CleanWebpackPlugin(),
      new CopyWebpackPlugin({
         patterns: [
            {
               from: "./src/assets/images",
               to: "assets/images",
            }
         ]
      }),
      new HtmlWebpackPlugin({
         filename: 'index.html', //? non obligatoire
         template: path.resolve(__dirname, "src/index.html"), //! Important
         chunks: ["mainEntry", "topbar"]
      }),
      new HtmlWebpackPlugin({
         filename: 'form.html', //? non obligatoire
         template: path.resolve(__dirname, "src/form/form.html"),
         chunks: ["form", 'topbar']
      })
   ],

   //? stats: "minimal",
   devtool: "source-map",
   // mode: "production",
   mode: "development",
   devServer: {
      static: path.resolve(__dirname, './dist'),
      open: true,
      watchFiles: ['./src/**'], //! Important
      port: 4000,
      hot: true,
      allowedHosts: 'all', // Permet tous les hôtes
      host: '0.0.0.0', // Écoute sur toutes les interfaces réseau
      historyApiFallback: true, // Gère les routes SPA
   },

   //! performance permet de override les warnings sur la taille des fichiers dans les 2 modes (dev et prod). 
   //? En mode développement, l'accent est mis sur la rapidité de compilation et le débogage (avec des source maps détaillées), tandis qu'en mode production, l'accent est mis sur l'optimisation des performances.
   performance: {
      hints: false, // Désactive les avertissements
      maxAssetSize: 512000, // Augmente la limite à 512 Ko
      maxEntrypointSize: 512000, // Augmente la limite pour les points d'entrée
    },
};