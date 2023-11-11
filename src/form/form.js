import '../assets/styles/styles.scss';
import "./form.scss";

const form = document.querySelector('form');

form.addEventListener('submit', e => {
   e.preventDefault();
   const formData = new FormData(form);
   console.log(formData);

   const entries = formData.entries()

   console.log(entries);

   // for (let entry of entries) {
   //    console.log(entry);
   // }

   // Pour créer un tableau à partir d'un itérable, on utilise entries hérité de l'objet natif Array. Bien enlever la boucle for...of pour obtenir un résulat :

   // const obj = Array.from(entries).reduce((acc, value) => {
   //    acc[value[0]] = value[1]
   //    return acc;
   // }, {})

   // Alternative : On peut utiliser fromEntries.
   const obj2 = Object.fromEntries(entries)
   const json = JSON.stringify(obj2)
   const json2 = JSON.stringify(Object.fromEntries(formData.entries()))

   
   // console.log(obj);
   console.log(obj2);
   console.log(json);
   console.log(json2); // Même résultat que json

})