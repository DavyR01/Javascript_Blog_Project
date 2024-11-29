import { openModal } from './assets/javascripts/modal';
import './assets/styles/styles.scss';
import { scheduleShutdown } from './cron.js';
import "./index.scss";
import './logdraft.js';

// **************** 115) Introduction du projet blog **************************

// **************** 116) Configuration de Webpack pour le multi pages **************************

// **************** 117) Utilisation d'assets avec Webpack **************************

// **************** 118) Mise en place des styles pour notre application **************************

// **************** 119) Mise en page du projet **************************

// **************** 120) Mise en place du header et du footer **************************

// **************** 121) Mise en page du formulaire de création d'article **************************

// **************** 122) Mise en place du JavaScript pour le formulaire **************************

// **************** 123) Envoi de l'article au serveur **************************

// **************** 124) Mise en page de la liste des articles **************************

// **************** 128) Affichage de la liste des articles **************************

const articleContainerElement = document.querySelector('.articles-container');
const categoriesContainerElement = document.querySelector('.categories');
const selectElement = document.querySelector("select");
let filter;
let articles;
let sortBy = 'desc';

selectElement.addEventListener('change', e => {
   sortBy = selectElement.value;
   fetchArticles();
   console.log(sortBy);
});


const createArticles = () => {
   const articlesDOM = articles
      .filter((article) => {
         if (filter) {
            return article.category === filter;
         } else {
            return true;
         }
      })
      .map((article) => {
         const datePublication = new Date(article.createdAt).toLocaleDateString('fr-FR',
            {
               weekday: "long",
               day: "2-digit",
               month: "long",
               year: "numeric"
            });

         // console.log(article);
         const articleDOM = document.createElement('div');
         articleDOM.classList.add("article");
         articleDOM.innerHTML = `
      <img src="${article.imagee}" alt="profile" />
               <h2>${article.title}</h2>
               <p class="article-author">${article.author} - ${datePublication}</p>
               <p class="article-content">
               ${article.content}
               </p>
               <div class="article-actions">
                  <button class="btn btn-danger" data-id=${article._id}>Supprimer</button>
                  <button class="btn btn-primary" data-id=${article._id}>Modifier</button>
               </div>
      `;
         return articleDOM;
      });
   console.log(articlesDOM);
   articleContainerElement.innerHTML = "";
   articleContainerElement.append(...articlesDOM);

   const deleteButtons = articleContainerElement.querySelectorAll('.btn-danger');
   const editButtons = articleContainerElement.querySelectorAll('.btn-primary');

   console.log(deleteButtons);
   deleteButtons.forEach(button => {
      button.addEventListener('click', async (e) => {
         const result = await openModal(
            'Etes vous sur de vouloir supprimer votre article ?'
         );
         console.log(result);

         if (result === true) {
            try {
               const target = e.target;
               const articleId = target.dataset.id; //! Il faut utiliser dataset lorsque l'on met des informations sur des éléments HTML
               const response = await fetch(`https://restapi.fr/api/articles/${articleId}`, {
                  method: 'DELETE'
               });
               const body = (await response).json();
               console.log(body);
               fetchArticles();

            } catch (error) {
               console.log('error occured during delete article', error);
            }
         }
      });
   });

   editButtons.forEach(button => {
      button.addEventListener('click', e => {
         const target = e.target;
         const articleId = target.dataset.id;
         location.assign(`/form.html?id=${articleId}`);
      });
   });
};

const displayMenuCategories = (categoriesArr) => {
   const liElements = categoriesArr.map((categoryElem) => {
      const li = document.createElement('li');
      li.innerHTML = `${categoryElem[0]} ( <strong>${categoryElem[1]}</strong> )`;
      if (categoryElem[0] === filter) {
         li.classList.add('active');
      }
      li.addEventListener('click', () => {
         // debugger; //! Pour debugger avec le navigateur
         console.log("Hola !");
         if (filter === categoryElem[0]) {
            filter = null;
            li.classList.remove('active');
            createArticles();
         } else {
            filter = categoryElem[0];
            // filter = categoriesArr[0]; //? Mise en place d'une erreur volontairement pour tester le debugger.
            liElements.forEach((li) => {
               li.classList.remove('active');
            });
            li.classList.add('active');
            createArticles();
         }
      });
      return li;
   });

   categoriesContainerElement.innerHTML = '';
   categoriesContainerElement.append(...liElements);
   console.log(liElements);

};

const createMenuCategories = () => {
   const categories = articles.reduce((acc, article) => {
      if (acc[article.category]) {
         acc[article.category]++;
      } else {
         acc[article.category] = 1;
      }

      return acc;
   }, {});
   console.log(categories);

   const categoriesArr = Object.keys(categories)
      .map((category) => {
         return [category, categories[category]];
      })
      //! tri côté frontend
      .sort((c1, c2) => c1[0].localeCompare(c2[0]));
   console.log(categoriesArr);
   displayMenuCategories(categoriesArr);
};

const fetchArticles = async () => {
   try {
      const response = await fetch(`https://restapi.fr/api/articles?sort=createdAt:${sortBy}`); //! tri effectué par le serveur côté backend.
      articles = await response.json(); //? articles est déclaré en dehors des fonctions car on a besoin de l'utiliser dans un contexte plus global au début du fichier.

      if (!Array.isArray(articles)) {
         articles = [articles];
      }
      console.log(typeof (articles));

      console.log(articles);
      createArticles();
      createMenuCategories();

   } catch (error) {
      console.log("error during fetch articles", error);
   }
};

fetchArticles();

scheduleShutdown(); 