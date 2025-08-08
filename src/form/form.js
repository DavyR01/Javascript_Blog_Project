import { openModal } from '../assets/javascripts/modal';
import '../assets/styles/styles.scss';
import "./form.scss";
import { getFakeArticles, setFakeArticles } from '../datas/datas.js';

const form = document.querySelector('form');
const errorElement = document.querySelector('#errors');
const btnCancel = document.querySelector('.btn-secondary');

let articleId;
let errors = [];

let fakeArticles = getFakeArticles();

const fillForm = article => {
   const author = document.querySelector('input[name="author"]');
   const imagee = document.querySelector('input[name="imagee"]');
   const category = document.querySelector('input[name="category"]');
   const title = document.querySelector('input[name="title"]');
   const content = document.querySelector("textarea");

   author.value = article.author || "";
   imagee.value = article.imagee || "";
   category.value = article.category || "";
   title.value = article.title || "";
   content.value = article.content || "";
};

const initForm = async () => {
   const params = new URL(location.href);
   articleId = params.searchParams.get('id');
   console.log(articleId);

   if (articleId) {
      const response = await fetch(`https://restapi.fr/api/articles/${articleId}`);
      console.log(response);

      if (response.status < 300) {
         const article = await response.json();
         fillForm(article);
         console.log(article);
      }
   }
};

initForm();

btnCancel.addEventListener('click', async () => {
   const result = await openModal('Si vous quittez la page, vous allez perdre votre article');
   if (result) {
      location.assign("./index.html");
   }
});

form.addEventListener('submit', async e => {
   e.preventDefault();
   const formData = new FormData(form);
   const article = Object.fromEntries(formData.entries());
   if (formIsValid(article)) {
      try {
         const json2 = JSON.stringify(article);
         let response;
         console.log(json2);

         if (articleId) {
            response = await fetch(`https://restapi.fr/api/articles/${articleId}`, {
               method: "PATCH",
               body: json2,
               headers: {
                  "Content-type": 'application/json'
               }
            });
         } else {
            response = await fetch('https://restapi.fr/api/articles', {
               method: "POST",
               body: json2, // On envoie notre article au format JSON
               headers: {
                  "Content-type": 'application/json'
               }
            });
         }

         if (response.status < 299) {
            location.assign("./index.html");
         }

         const body = await response.json(); // On attend notre réponse que nous recevons sous forme de promesse. La méthode response.json ne retourne pas un objet JSON mais retourne une promesse qui se résoudra avec une objet JSON si le parsing fonctionne.
         console.log(body);

      } catch (e) {
         console.log('e :', e);
      }
   }

   console.log(formData);

   const entries = formData.entries();
   console.log(entries);

   if (articleId && articleId.startsWith("fake-article-")) {
      const index = fakeArticles.findIndex(a => a._id === articleId);
      if (index !== -1) {
         fakeArticles[index] = { ...fakeArticles[index], ...article };
         setFakeArticles(fakeArticles);
         location.assign("./index.html");
      }
   }
});

const formIsValid = (article) => {
   errors = [];
   if (!article.author || !article.category || !article.imagee || !article.title || !article.content) {
      errors.push('Vous devez renseigner tous les champs');
   } else {
      errors = [];
   }
   if (errors.length) {
      let errorHTML = '';
      errors.forEach((e) => {
         errorHTML += `<li>${e}</li>`;
      });
      errorElement.innerHTML = errorHTML;
      return false;
   } else {
      errorElement.innerHTML = '';
      return true;
   }
};