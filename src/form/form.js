import '../assets/styles/styles.scss';
import "./form.scss";

const form = document.querySelector('form');
const errorElement = document.querySelector('#errors')
let errors = [];

form.addEventListener('submit', e => {
   e.preventDefault();
   const formData = new FormData(form);
   const article = Object.fromEntries(formData.entries())
   if (formIsValid(article)) {
      const json2 = JSON.stringify(Object.fromEntries(formData.entries()))
      console.log(json2);
      // fetch
   }

   console.log(formData);

   const entries = formData.entries()
   console.log(entries);
})

const formIsValid = (article) => {
   if (!article.author || !article.category || !article.content) {
      errors.push('Vous devez renseigner tous les champs')
   } else {
      errors = []
   }
   if (errors.length) {
      let errorHTML = ''
      errors.forEach((e) => {
      errorHTML += `<li>${e}</li>`
      })
      errorElement.innerHTML = errorHTML;
   } else {
      errorElement.innerHTML = '';
   }
}