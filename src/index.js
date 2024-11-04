import './assets/styles/styles.scss';
import "./index.scss";

// **************** 115) Introduction du projet blog  **************************


// **************** 116) Configuration de Webpack pour le multi pages **************************

// **************** 117) Utilisation d'assets avec Webpack **************************

// **************** 118) Mise en place des styles pour notre application**************************

// **************** 119) Mise en page du projet **************************

// **************** 120) Mise en place du header et du footer**************************

// **************** 121) Mise en page du formulaire de création d'article **************************

// **************** 122) Mise en place du JavaScript pour le formulaire **************************

// **************** 123) Envoi de l'article au serveur **************************

// **************** 124) Mise en page de la liste des articles **************************

// **************** 128) Affichage de la liste des articles **************************

const articleContainerElement = document.querySelector('.articles-container');

const createArticles = (articles) => {
   const articlesDOM = articles.map((article) => {
      // console.log(article);
      const articleDOM = document.createElement('div');
      articleDOM.classList.add("article");
      articleDOM.innerHTML = `
      <img src="${article.imagee}" alt="profile" />
               <h2>${article.title}</h2>
               <p class="article-author">${article.author} - ${article.category}</p>
               <p class="article-content">
               ${article.content}
               </p>
               <div class="article-actions">
                  <button class="btn btn-danger" data-id=${article._id}>Supprimer</button>
               </div>
      `;
      return articleDOM;
   });
   console.log(articlesDOM);
   articleContainerElement.innerHTML = "";
   articleContainerElement.append(...articlesDOM);
};

const fetchArticles = async () => {
   try {
      const response = await fetch('https://restapi.fr/api/articles');
      const articles = await response.json();
      console.log(articles);
      createArticles(articles);

   } catch (error) {
      console.log("error during fetch articles", error);
   }
};

fetchArticles();



console.log('index');