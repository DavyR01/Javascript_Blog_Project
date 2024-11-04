import '../assets/styles/styles.scss';
import "./form.scss";

const form = document.querySelector('form');
const errorElement = document.querySelector('#errors');
let errors = [];

form.addEventListener('submit', async e => {
   e.preventDefault();
   const formData = new FormData(form);
   const article = Object.fromEntries(formData.entries());
   if (formIsValid(article)) {
      try {
         const json2 = JSON.stringify(article);
         console.log(json2);

         const response = await fetch('https://restapi.fr/api/articles', {
            method: "POST",
            body: json2, // On envoie notre article au format JSON
            headers: {
               "Content-type": 'application/json'
            }
         });

         const body = await response.json(); // On attend notre réponse que nous recevons sous forme de promesse. La méthode response.json ne retourne pas un objet JSON mais retourne une promesse qui se résoudra avec une objet JSON si le parsing fonctionne.
         console.log(body);

      } catch (e) {
         console.log('e :', e);
      }
   }

   console.log(formData);

   const entries = formData.entries();
   console.log(entries);
});

const formIsValid = (article) => {
   if (!article.author || !article.category || !article.imagee || !article.title || !article.content)  {
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