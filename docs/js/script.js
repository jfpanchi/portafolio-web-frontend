// Seleccionar elementos del DOM
const folderFront = document.querySelector(".folder-front");
const Cv = document.querySelector(".cv");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const cards = document.querySelector(".cards-scroll");
const titleProject = document.querySelector(".title-project");
const posts = document.querySelectorAll(".post");

// Listas de proyectos
const listProjectsFront = [
  {
    link: "./img/front/proyecto02-Presupuesto-FrontEndWeb.JPG",
    description: "Sistema web de Presupuesto - Ingresos y Egresos",
    site: "https://jfpanchi.github.io/Presupuesto-FrontEndWeb/",
  },
  {
    link: "./img/front/proyecto06-coffeestore-landing-frontend.JPG",
    description: "Página principal para cafetería",
    site: "https://jfpanchi.github.io/coffeestore-landing-frontend/",
  },
  {
    link: "./img/front/proyecto07-codificador-frontend.JPG",
    description: "Sistema web para encriptar y desencriptar mensajes",
    site: "https://delicate-stroopwafel-8e2fe2.netlify.app/",
  },
];

const listProjectsAngular = [
  {
    link: "./img/angular/proyecto01-plantapp-frontend-angular.jpeg",
    description: "Aplicación web para tienda de plantas",
    site: "https://amazing-kangaroo-635e08.netlify.app/",
  },
  {
    link: "./img/angular/proyecto02-quizzapp-frontend-angular.jpeg",
    description: "Aplicación web para crear y realizar cuestionarios",
    site: "https://sparkling-starlight-5a3aa3.netlify.app/",
  },
  {
    link: "./img/angular/proyecto04-eventapp-frontend-angular.jpeg",
    description: "Aplicación web para boletería de eventos",
    site: "https://merry-liger-50007d.netlify.app/",
  },
];

const listProjectsReact = [
  {
    link: "./img/react/proyecto01-recipeapp-frontend-react.jpeg",
    description: "Blog de recetas",
    site: "https://storied-pudding-024b50.netlify.app/",
  },
  {
    link: "./img/react/proyecto02-passwarehouseapp-frontend-react.jpeg",
    description: "Aplicación web para gestionar contraseñas seguras",
    site: "https://stately-florentine-1be81e.netlify.app/",
  },
  {
    link: "./img/react/proyecto03-readingplan-frontend-react.jpeg",
    description: "Aplicación web para gestionar planes de lectura personal",
    site: "https://sage-flan-06df4b.netlify.app/",
  },
];

const listProjectsVue = [
  {
    link: "./img/vue/proyecto01-brutalweather-frontend-vue.jpeg",
    description: "Aplicación web de clima y pronóstico",
    site: "https://bespoke-licorice-8174f0.netlify.app/",
  },
];

const listasProjects = [
  listProjectsFront,
  listProjectsAngular,
  listProjectsReact,
  listProjectsVue,
];

// Agregar evento para abrir la carpeta y mostrar el CV
folderFront.addEventListener("click", () => {
  folderFront.classList.add("folder-front-open");
  Cv.classList.add("cv-move");
});

function showSeleccion(item) {
  switch (item) {
    case 0:
      titleProject.innerHTML = "HTML CSS JAVASCRIPT";
      break;
    case 1:
      titleProject.innerHTML = "ANGULAR";
      break;
    case 2:
      titleProject.innerHTML = "REACT";
      break;
    case 3:
      titleProject.innerHTML = "VUE";
      break;

    default:
      break;
  }
}

function showListTencology(item) {
  const buttonSelected = document.querySelector("#post-" + item);
  cards.innerHTML = "";
  if (listasProjects[item].length > 0) {
    listasProjects[item].forEach((element) => {
      cards.innerHTML += `<div class="card">
         <img class="capture-project" src="${element.link}" loading="lazy" alt="${element.description}">
         <div class="card-description">
             <p class="description-project">${element.description}</p>
         </div>
         <div class="buttons">
             <a class="site" href="${element.site}" target="_blank">Demo</a>
         </div>
       </div>`;
    });
  } else {
    cards.innerHTML =
      '<p class="cards-message"> <i class="fa-solid fa-circle-info"></i> Proyectos en Desarrollo</p>';
  }

  posts.forEach((post) => {
    post.style.backgroundColor = "#D9D9D9";
  });
  buttonSelected.style.backgroundColor = "#0D688C";
}

function show(item) {
  showSeleccion(item);
  showListTencology(item);
  scrollToTop();
}

function scrollToTop() {
  const cardsElement = document.querySelector(".cards");
  if (cardsElement) {    
    cardsElement.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
}

show(0);
