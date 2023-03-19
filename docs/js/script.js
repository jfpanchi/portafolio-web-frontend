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
    link: "./img/proyecto01-RelojDigital-FrontEndWeb.JPG",
    description: "Reloj Digital Web",
    repositorie: "https://github.com/jfpanchi/RelojDigital-FrontEndWeb",
    site: "https://jfpanchi.github.io/RelojDigital-FrontEndWeb/",
  },
  {
    link: "./img/proyecto02-Presupuesto-FrontEndWeb.JPG",
    description: "Sistema Web de Presupuesto - Ingresos y Egresos",
    repositorie: "https://github.com/jfpanchi/Presupuesto-FrontEndWeb",
    site: "https://jfpanchi.github.io/Presupuesto-FrontEndWeb/",
  },
  {
    link: "./img/proyecto03-PaletaDeColores-FrontEndWeb.JPG",
    description: "Paleta de Colores",
    repositorie: "https://github.com/jfpanchi/PaletaDeColores-FrontEndWeb",
    site: "https://jfpanchi.github.io/PaletaDeColores-FrontEndWeb/",
  },
  {
    link: "./img/proyecto04-headphonesweb-frontend.JPG",
    description: "Página principal Tienda de Audifonos",
    repositorie: "https://github.com/jfpanchi/headphonesweb-frontend",
    site: "https://jfpanchi.github.io/headphonesweb-frontend/",
  },
  {
    link: "./img/proyecto05-drumpsweb-frontend.JPG",
    description: "Página principal Tienda de Instrumentos",
    repositorie: "https://github.com/jfpanchi/drumsweb-front-homepage",
    site: "https://jfpanchi.github.io/drumsweb-front-homepage/",
  },
  {
    link: "./img/proyecto06-coffeestore-landing-frontend.JPG",
    description: "Página principal Cafetería ",
    repositorie: "https://github.com/jfpanchi/coffeestore-landing-frontend",
    site: "https://jfpanchi.github.io/coffeestore-landing-frontend/",
  },
];

const listProjectsAngular = [];

const listProjectsReact = [];

const listProjectsVue = [];

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
         <img class="capture-project" src="${element.link}">
         <div class="card-description">
             <p class="description-project">${element.description}</p>
         </div>
         <div class="buttons">
             <a class="repositorie" href="${element.repositorie}" target="_blank" >Código</a>
             <a class="site" href="${element.site}" target="_blank">Proyecto</a>
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
}

show(0);
