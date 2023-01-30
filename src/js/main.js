document.documentElement.classList.add('js-enabled');

const tablinks = document.querySelectorAll('.tablinks');

// Amelioration
// on pourrait juste selectionné l'élément qui a la class active et lui enlevé pour le redonner au bouton qui a le clique

tablinks.forEach(tablink =>{
  tablink.addEventListener('click', (e)=>{
    const buttonTarget = e.currentTarget;
    const tabcontentTarget  = document.querySelector(`#${buttonTarget.dataset.country}`);
    const lastLink = document.querySelector('.active');
    const lastTabContent = document.getElementById(lastLink.dataset.country);

    lastLink.classList.remove('active');
    lastTabContent.classList.remove('active');

    tabcontentTarget.classList.add('active');
    buttonTarget.classList.add('active');
  })
});



//solution fais en classe
// (function () {
//   const app = {
//     initConst () {
//       this.tabLinks = document.querySelectorAll('.tablinks');
//       this.tabContent = document.querySelectorAll('.tabcontent');
//     },
//     addEventListener () {
//       this.tabLinks.forEach(link => {
//         link.addEventListener('click', el => {
//           const btnTarget = el.currentTarget;
//           const {country} = btnTarget.dataset;
//           this.tabLinks.forEach(linkColor => {
//             linkColor.classList.remove('active');
//           });
//           this.tabContent.forEach(cachText => {
//             cachText.classList.remove('active');
//           });
//           document.querySelector(`#${country}`).classList.add('active');
//           btnTarget.classList.add('active');
//         });
//       });
//     },
//     init() {
//       this.initConst();
//       this.addEventListener();
//       document.documentElement.classList.add('js-enabled');
//     }
//   }
//   app.init();
// }) ();