
import * as fn from './js/fn.js';
const courses = [
    {
      id: 'aHR0cHM6Ly9lc2N1ZWxhLml0L2N1cnNvcy9iYWNrLWVkZ2UtZGVzYXJyb2xsby13ZWItYWwtbGltaXRlLW5vZGVqcy1lczYtbnBtLW1vbmdvZGI',
      title: 'Back Edge, desarrollo web al límite, NodeJS, ES6, npm, MongoDB',
      resume: 'Desarrollo de aplicaciones web con las últimas tecnologías alrededor de NodeJS y del mundo backend',
      image: 'https://escuela.it//storage/course_images_thumbnail/thumbnail-imagen-curso-backedge-49.jpg',
      level: 2,
      url: 'https://escuela.it/cursos/back-edge-desarrollo-web-al-limite-nodejs-es6-npm-mongodb',
      popularity: 4.857142857142857,
      tags: '  Express NodeJS Javascript Backend backend  Express NodeJS Javascript Backend ',
      price: '89€',
      currentRating: '5',
      author: 'Alberto Basalo'
    },
    {
      id: 'aHR0cHM6Ly9lc2N1ZWxhLml0L2N1cnNvcy9jdXJzby1kZS1kZXNhcnJvbGxvLWF2YW56YWRvLWNvbi1hbmd1bGFyanMtMTUteS10ZWNub2xvZ2lhcy1qYXZhc2NyaXB0',
      title: 'Curso de Desarrollo avanzado con AngularJS 1.5 y tecnologías JavaScript',
      resume: 'Un curso completo donde aprenderás a crear paso a paso aplicaciones Front-end',
      image: 'https://escuela.it//storage/course_images_thumbnail/thumbnail-imagen-curso-angularjs-31.jpg',
      level: 2,
      url: 'https://escuela.it/cursos/curso-de-desarrollo-avanzado-con-angularjs-15-y-tecnologias-javascript',
      popularity: 0.16666666666666666,
      tags: '  NodeJS AngularJS frontend backend  NodeJS AngularJS ',
      price: '60€',
      currentRating: '4',
      author: 'Alberto Basalo'
    },
    {
      id: 'aHR0cHM6Ly9lc2N1ZWxhLml0L2N1cnNvcy9jdXJzby1kZS1ub2RlanM',
      title: 'Curso de NodeJS',
      resume: 'Curso de básico a avanzado para el desarrollo en NodeJS',
      image: 'https://escuela.it//storage/course_images_thumbnail/thumbnail-imagen-curso-nodejs-16.jpg',
      level: 2,
      url: 'https://escuela.it/cursos/curso-de-nodejs',
      popularity: 3.55,
      tags: '  NodeJS frontend backend  NodeJS ',
      price: '99€',
      currentRating: '5',
      author: 'Jonathan MirCha'
    },
    {
      id: 'aHR0cHM6Ly9lc2N1ZWxhLml0L2N1cnNvcy9maXJlYmFzZS1kZXNkZS1ub2RlanMtc2RrLWZpcmViYXNlLWFkbWlu',
      title: 'Firebase desde NodeJS: SDK firebase-admin',
      resume: 'Estudio con carácter práctico del SDK de administración de Firebase 3, desde el lado del servidor con NodeJS',
      image: 'https://escuela.it//storage/course_images_thumbnail/thumbnail-firebase-48.jpg',
      level: 2,
      url: 'https://escuela.it/cursos/firebase-desde-nodejs-sdk-firebase-admin',
      popularity: 2.25,
      tags: '  Backend Firebase frontend backend apps  Backend Firebase ',
      price: '49€',
      currentRating: '5',
      author: 'Miguel Angel Alvarez'
    },
    {
      id: 'aHR0cHM6Ly9lc2N1ZWxhLml0L2N1cnNvcy9kZXBsb3ktYXBsaWNhY2lvbmVzLW5vZGVqcw',
      title: 'Curso de Deploy de Aplicaciones NodeJS',
      resume: 'Aprende a llevar a producción aplicaciones NodeJS, mediante varias alternativas y las mejores prácticas',
      image: 'https://escuela.it//storage/course_images_thumbnail/thumbnail-deploy-apps-nodejs-32.jpg',
      level: 2,
      url: 'https://escuela.it/cursos/deploy-aplicaciones-nodejs',
      popularity: 3.391304347826087,
      tags: '  NodeJS DevOps backend  NodeJS DevOps ',
      price: '75€',
      currentRating: '5',
      author: 'Miguel Angel AlvarezAlberto BasaloAndres CenciJavier Riera Peiro'
    },
    {
      id: 'aHR0cHM6Ly9lc2N1ZWxhLml0L2N1cnNvcy9jdXJzby1kZS1ncmFwaHFsLXktbm9kZUpT',
      title: 'Curso de GraphQL y NodeJS',
      resume: 'Aprende a implementar GraphQL con Node para construir APIs potentes y rápidas',
      image: 'https://escuela.it//storage/course_images_thumbnail/thumbnail-curso-graphql-31.jpg',
      level: 2,
      url: 'https://escuela.it/cursos/curso-de-graphql-y-nodeJS',
      popularity: 7.888888888888889,
      tags: '  NodeJS Backend backend  NodeJS Backend ',
      price: '65€',
      currentRating: '4',
      author: 'Nicolas Molina'
    },
    {
      id: 'aHR0cHM6Ly9lc2N1ZWxhLml0L2N1cnNvcy9jdXJzby1ub2RlLWRlc2Fycm9sbGFkb3Jlcy1qYXZhc2NyaXB0',
      title: 'Curso de Node para desarrolladores Javascript',
      resume: 'Aprende NodeJS, Express, MongoDB y otras tecnologías del lado del servidor con Javascript',
      image: 'https://escuela.it//storage/course_images_thumbnail/curso-express-nodejs-mini-65.jpg',
      level: 2,
      url: 'https://escuela.it/cursos/curso-node-desarrolladores-javascript',
      popularity: 17.833333333333332,
      tags: '  NodeJS backend  NodeJS ',
      price: '69€',
      currentRating: '5',
      author: 'Mario Romero'
    },
    {
      id: 'aHR0cHM6Ly9lc2N1ZWxhLml0L2N1cnNvcy9jdXJzby1ucG0',
      title: 'Curso de npm',
      resume: 'Aprovecha las funciones más útiles y desconocidas de npm',
      image: 'https://escuela.it//storage/course_images_thumbnail/imagen-curso-npm-mini-97.jpg',
      level: 2,
      url: 'https://escuela.it/cursos/curso-npm',
      popularity: 7.166666666666667,
      tags: '  NodeJS Javascript DevOps frontend backend  NodeJS Javascript DevOps ',
      price: '65€',
      currentRating: '4',
      author: 'Mateo Tibaquirá'
    },
    {
      id: 'aHR0cHM6Ly9lc2N1ZWxhLml0L2N1cnNvcy9jdXJzby1kZS1kZW5v',
      title: 'Curso de Deno',
      resume: 'Aprende Deno, la nueva plataforma de ejecución de Javascript para el servidor, evolución de NodeJS',
      image: 'https://escuela.it//storage/course_images_thumbnail/fXsK9aCzgdGgv5W8yrjEN5s9u0qoBTCy6KcW5XCF.jpeg',
      level: 2,
      url: 'https://escuela.it/cursos/curso-de-deno',
      popularity: 9.6,
      tags: '  NodeJS Javascript Backend backend  NodeJS Javascript Backend ',
      price: '65€',
      currentRating: '5',
      author: 'César Alberca'
    }
  ]

const body = fn.querySelection('body');
let logged = true;

// VISTA MAESTRO ------------------------------------------>

const mainHtml = (body) => {
    const mainCont = fn.createElement('main', 'main__login');
    const container = fn.createElement('div', 'container');
    fn.appendElement(body, mainCont);
    fn.appendElement(mainCont, container)

    return {
        mainCont,
        container
    };
};
const main = mainHtml(body);

const btnLogsHtml = (mainCont) => {

    const btnLogsBox = fn.createElement('div', 'btn__logs-box');
    const btnLogs = fn.createElement('a', 'btn__logs');
    fn.appendElement(mainCont, btnLogsBox);
  
    if(logged) {
        const btnFavs = fn.createElement('a', 'btn__favs');
        const btnProfile = fn.createElement('a', 'btn__profile');

        fn.appendElement(btnLogsBox, btnProfile);
        fn.appendElement(btnLogsBox, btnFavs);
        fn.appendElement(btnLogsBox, btnLogs);

        btnFavs.textContent = 'Favourites';
        btnProfile.textContent = 'Profile';
        btnLogs.textContent = 'Log out';

        
    } else {
        const btnSingUp = fn.createElement('a', 'btn__sign-up');

        fn.appendElement(btnLogsBox, btnSingUp);
        fn.appendElement(btnLogsBox, btnLogs);

        btnSingUp.textContent = 'Sign up';
        btnLogs.textContent = 'Log in';
    };
    
    
};
const btnLogs = btnLogsHtml(main.container, 'Log in');

const mainTitleApp = (mainCont) => {
    const mainTitleBox = fn.createElement('div', 'main__title-box');
    const mainTitle = fn.createElement('h1', 'main__title');

    fn.appendElement(mainCont, mainTitleBox);
    fn.appendElement(mainTitleBox, mainTitle);

    mainTitle.textContent = 'FYFApp';

    return {
        mainTitleBox,
        mainTitle
    };
};
const title = mainTitleApp(main.container);

const inputBox = (mainCont) => {
    const inputBox = fn.createElement('div', 'input__box');
    const input = fn.createElement('input', 'input');
    const btnBox = fn.createElement('div', 'btn__search-box');
    const btn = fn.createElement('a', 'btn__search');

    fn.appendElement(mainCont, inputBox);
    fn.appendElement(inputBox, input);
    fn.appendElement(inputBox, btnBox);
    fn.appendElement(btnBox, btn);

    btn.textContent = 'Search';

    return {
        btn
    }
};
const input = inputBox(main.container);

const resultComp = (course) => {
    
    let container = fn.querySelection('.container');
    

    const courseComponents = fn.createElement('div', 'course__components');
    
    const imgBox = fn.createElement('div', 'img__box');
    const img = fn.createElement('img');
        // img.src = `${course.image}`;
        img.src = `${course.image}`;

    fn.appendElement(container, courseComponents);
    fn.appendElement(courseComponents, imgBox);
    fn.appendElement(imgBox, img);

        img.addEventListener('click', (e) => {
            e.preventDefault();
            window.open(`${course.url}`);
        });
            

    const priceBox = fn.createElement('div', 'price__box');
    const price = fn.createElement('h2');
        price.textContent = `${course.price}`;
    
    fn.appendElement(imgBox, priceBox);
    fn.appendElement(priceBox, price);


    const titleBox = fn.createElement('h3', 'title__box');
    const title = fn.createElement('h3');
    title.textContent = `${course.title}`;
    
    if(logged) {
        const btnFav = fn.createElement('a', 'btnFav');
        fn.appendElement(titleBox, btnFav);
        btnFav.textContent = 'FAVBTN';
    }
        
        title.addEventListener('click', (e) => {
            e.preventDefault();
            window.open(`${course.url}`);
        });

    fn.appendElement(courseComponents, titleBox);
    fn.appendElement(titleBox, title);
   

    const descriptionBox = fn.createElement( 'div', 'description__box');
    const description = fn.createElement('p');
        description.textContent = `${course.resume}`;

    fn.appendElement(courseComponents, descriptionBox);
    fn.appendElement(descriptionBox, description);

    const ratingBox = fn.createElement('div', 'rating__box');
    const rating = fn.createElement('p');
        rating.textContent = `${course.currentRating}`;

    fn.appendElement(courseComponents, ratingBox);
    fn.appendElement(ratingBox, rating);

    const courseLevelBox = fn.createElement('div', 'course__level-box');
    const courseLevel = fn.createElement('p');
        courseLevel.textContent = `${course.level}`;

    fn.appendElement(courseComponents, courseLevelBox);
    fn.appendElement(courseLevelBox, courseLevel); // Valoración (estrellas)


};

// <-------------------------------------------VISTA MAESTRO







// EVENTO CLICK BTN SEARCH
const btn = fn.querySelection('.btn__search');
btn.addEventListener('click', () => {
    let appTitle = fn.querySelection('.main__title-box');
    fn.remover(appTitle);

    courses.map( (course) => {
        resultComp(course);
    });

});
