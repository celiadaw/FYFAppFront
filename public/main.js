
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

// AUTH STATE
let logged = ( () => {

    let response = true;
    response.OK === 1 ? true  :  false;
    return response;

})  ();


const mainHtml = () => {
    const body = fn.querySelection('body');
    const mainCont = fn.createElement('main', 'main__cont');
    const container = fn.createElement('div', 'home__cont');
        fn.addClass(container, 'wrapper');
    fn.appendElement(body, mainCont);
    fn.appendElement(mainCont, container)

    return {
        mainCont,
        container
    };
};
const btnLogsHtml = () => {
    
    const mainCont = fn.querySelection('.main__cont');
    const homeCont = fn.querySelection('.home__cont');
    const btnLogsBox = fn.createElement('div', 'btn__logs-box');
    const btnLogs = fn.createElement('a', 'btn__logs');
        fn.appendElement(homeCont, btnLogsBox);
  
    if(logged) {

        const btnFavs = fn.createElement('a', 'btn__favs');
        const btnProfile = fn.createElement('a', 'btn__profile');

        fn.appendElement(btnLogsBox, btnProfile);
        fn.appendElement(btnLogsBox, btnFavs);
        fn.appendElement(btnLogsBox, btnLogs);

        btnFavs.textContent = 'Favourites';
        btnProfile.textContent = 'Profile';
        btnLogs.textContent = 'Log out';

        // Botón profile
        btnProfile.addEventListener('click', () => {
            mainCont.remove();
            profileCompScreen();
        });

        // Botón Favoritos
        btnFavs.addEventListener('click', () => {
            favCompScreen(courses[0]);
        });
     
    } else {
        const btnSignUp = fn.createElement('a', 'btn__sign-up');

        fn.appendElement(btnLogsBox, btnSignUp);
        fn.appendElement(btnLogsBox, btnLogs);

        btnSignUp.textContent = 'Sign up';
        btnLogs.textContent = 'Log in';

        // SIGNUP BTN
        let homeCont = fn.querySelection('.home__cont');
        btnSignUp.addEventListener('click', () => {
            homeCont.remove();
            signUpCompScreen();
        });

        // SIGNIN BTN
        btnLogs.addEventListener('click', () => {
            homeCont.remove();
            logInCompScreen();
        });

        // Botón de log in-------
        
        return {
            btnLogsBox,
            btnSignUp,
            btnLogs
        }

    };
    
};
const mainTitleApp = () => {
    
    const mainCont = fn.querySelection('.main__cont');
    const container = fn.querySelection('.home__cont');

    const mainTitleBox = fn.createElement('div', 'main__title-box');
    const mainTitle = fn.createElement('h1', 'main__title');

    fn.appendElement(container, mainTitleBox);
    fn.appendElement(mainTitleBox, mainTitle);

    mainTitle.textContent = 'FYFApp';

    return {
        mainTitleBox,
        mainTitle
    };

};
const inputBox = () => {

    const homeCont = fn.querySelection('.home__cont');

    const inputBox = fn.createElement('div', 'input__box-search');
    const input = fn.createElement('input', 'input__search');
    const btnBox = fn.createElement('div', 'btn__search-box');
    const btnSearch = fn.createElement('a', 'btn__search');

    fn.appendElement(homeCont, inputBox);
    fn.appendElement(inputBox, input);
    fn.appendElement(inputBox, btnBox);
    fn.appendElement(btnBox, btnSearch);

    btnSearch.textContent = 'Search';

    btnSearch.addEventListener('click', () => {
        let appTitle = fn.querySelection('.main__title-box');
        fn.remover(appTitle);
        console.log(courses);
        
        courses.map( (course) => {
            resultComp(course)
        });
    
    });

    return {
        btnSearch
    }

};
const init = () => {
    mainHtml();
    btnLogsHtml();
    mainTitleApp();
    inputBox();
}
init();


// PANTALLA DE RESULTADOS
const resultComp = (course) => {
    
    let container = fn.querySelection('.home__cont');
    
    const courseComponents = fn.createElement('div', 'course__components');
    
    const imgBox = fn.createElement('div', 'img__box');
    const img = fn.createElement('img');
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

// PANTALLAS DE SIGN UP Y SIGN IN
const signUpCompScreen = () => {
    
    const mainCont = fn.querySelection('.main__cont');
    // fn.remover(container);
    const signUpCont = fn.createElement('div', 'signup__cont');
        fn.addClass(signUpCont, 'wrapper');
        fn.appendElement(mainCont, signUpCont);
    
    const btnHomeBoxSignUp = fn.createElement('div', 'btn__home-box-signup');
        fn.appendElement(signUpCont, btnHomeBoxSignUp);

    const btnHome = fn.createElement('a', 'btn__home-signup');
        btnHome.textContent = 'Home';
        fn.appendElement(btnHomeBoxSignUp, btnHome);

    const signUpInputsBox = fn.createElement('div', 'input__box-signup'); 
        fn.appendElement(signUpCont, signUpInputsBox);
    const inputMail = fn.createElement('input', 'input__mail-signup');
        fn.appendElement(signUpInputsBox, inputMail);
    const inputPass = fn.createElement('input', 'input__pass-signup');
        fn.appendElement(signUpInputsBox, inputPass);
    
    const btnSend = fn.createElement('a', 'btn__send');
        fn.appendElement(signUpInputsBox, btnSend);
        btnSend.textContent = 'Send';

    const textAuxBox = fn.createElement('div', 'text__aux-box');
    const textAux = fn.createElement('p', 'text__aux');
        textAux.textContent = 'You´re one of us?';
    const btnLoginAux = fn.createElement('a', 'btn__login-aux');
        btnLoginAux.textContent = 'Log in';
        fn.appendElement(signUpCont, textAuxBox);
        fn.appendElement(textAuxBox, textAux);
        fn.appendElement(textAuxBox, btnLoginAux);

    const googleSignUpBox = fn.createElement('div', 'google__signup-box');
    const googleSignUp = fn.createElement('a', 'google__signup');
        googleSignUp.textContent = 'GOOGLE';
        fn.appendElement(signUpCont, googleSignUpBox);
        fn.appendElement(googleSignUpBox, googleSignUp);
    
    const body = fn.querySelection('body');
    console.log(body);


    // BACK TO HOME
    btnHome.addEventListener('click', () => {
        fn.remover(mainCont);
        init();
    });

};
const logInCompScreen = () => {
    
    const mainCont = fn.querySelection('.main__cont');
    // fn.remover(container);
    const signInCont = fn.createElement('div', 'signup__cont');
        fn.addClass(signInCont, 'wrapper');
        fn.appendElement(mainCont, signInCont);
    
    const btnHomeBoxSignUp = fn.createElement('div', 'btn__home-box-signup');
        fn.appendElement(signInCont, btnHomeBoxSignUp);

    const btnHome = fn.createElement('a', 'btn__home-signup');
        btnHome.textContent = 'Home';
        fn.appendElement(btnHomeBoxSignUp, btnHome);

    const signUpInputsBox = fn.createElement('div', 'input__box-signup'); 
        fn.appendElement(signInCont, signUpInputsBox);
    const inputMail = fn.createElement('input', 'input__mail-signup');
        fn.appendElement(signUpInputsBox, inputMail);
    const inputPass = fn.createElement('input', 'input__pass-signup');
        fn.appendElement(signUpInputsBox, inputPass);
    
    const btnSend = fn.createElement('a', 'btn__send');
        fn.appendElement(signUpInputsBox, btnSend);
        btnSend.textContent = 'Send';

    const textAuxBox = fn.createElement('div', 'text__aux-box');
    const textAux = fn.createElement('p', 'text__aux');
        textAux.textContent = 'Not already one of us?';
    const btnLoginAux = fn.createElement('a', 'btn__login-aux');
        btnLoginAux.textContent = 'Sign up';
        fn.appendElement(signInCont, textAuxBox);
        fn.appendElement(textAuxBox, textAux);
        fn.appendElement(textAuxBox, btnLoginAux);

    const googleSignUpBox = fn.createElement('div', 'google__signup-box');
    const googleSignUp = fn.createElement('a', 'google__signup');
        googleSignUp.textContent = 'GOOGLE';
        fn.appendElement(signInCont, googleSignUpBox);
        fn.appendElement(googleSignUpBox, googleSignUp);
    
    const body = fn.querySelection('body');


    // BACK TO HOME
    btnHome.addEventListener('click', () => {
        fn.remover(mainCont);
        init();
    });

};

// PANTALLA DE PROFILE
const profileCompScreen = () => {

    const body = fn.querySelection('body');

    const profCont = fn.createElement('div', 'prof__cont');
        fn.addClass(profCont, 'wrapper');
    const btnProfBox = fn.createElement('div', 'btn__prof-box');
        fn.appendElement(profCont, btnProfBox);
    const btnProfHome = fn.createElement('a', 'btn__home');
        fn.appendElement(btnProfBox, btnProfHome);
        btnProfHome.textContent = 'Home';
    const btnProfLogOut = fn.createElement('a', 'btn__prof-logout');
        fn.appendElement(btnProfBox, btnProfLogOut);
        btnProfLogOut.textContent = 'Log out';


    const imgProfBox = fn.createElement('div', 'imgProfBox');
        fn.appendElement(body, profCont);
        fn.appendElement(profCont, imgProfBox);
    const imgProf = fn.createElement('img', 'imgProf');
        imgProf.src = './media/user-img.png';
        fn.appendElement(imgProfBox, imgProf);
    const btnImg = fn.createElement('a', 'btnImg');
        btnImg.textContent = 'Edit';
        fn.appendElement(imgProfBox, btnImg);

    // Caja de input FirstName
    const userDataBox = fn.createElement('div', 'user__Data-Box');
        fn.appendElement(profCont, userDataBox);
    
    const firstNameBox = fn.createElement('div', 'firstName__box');
        fn.appendElement(userDataBox, firstNameBox);

    const firstNameText = fn.createElement('h4', 'firstName__text');
        fn.appendElement(firstNameBox, firstNameText);
        firstNameText.textContent = 'First Name';

    const userDataFirstName = fn.createElement('input', 'input__data-firstName');
        fn.appendElement(firstNameBox, userDataFirstName);

    // Caja de input LastName
    const lastNameBox = fn.createElement('div', 'firstName__box');
        fn.appendElement(userDataBox, lastNameBox);

    const lastNameTextOne = fn.createElement('h4', 'firstName__text');
        fn.appendElement(lastNameBox, lastNameTextOne);
        lastNameTextOne.textContent = 'Last Name';

    const userDataLastName = fn.createElement('input', 'input__data-firstName');
        fn.appendElement(lastNameBox, userDataLastName);

    const lastNameTextTwo = fn.createElement('h4', 'firstName__text');
        fn.appendElement(lastNameBox, lastNameTextTwo);
        lastNameTextTwo.textContent = 'Last Name';

    const userDataLastNameTwo = fn.createElement('input', 'input__data-firstName');
        fn.appendElement(lastNameBox, userDataLastNameTwo);
    const btnEditBox = fn.createElement('div', 'btn__edit-box');
    const btnEdit = fn.createElement('a', 'btn__edit');
        fn.appendElement(userDataBox, btnEditBox);
        fn.appendElement(btnEditBox, btnEdit);
        btnEdit.textContent = 'Edit';

    
    // Botón Home
    btnProfHome.addEventListener('click', () => {
        profCont.remove();
        init();
    });

    // Botón Log out
    btnProfLogOut.addEventListener('click', () => {
        profCont.remove();
        init();
    });

    
    // Botón de google
    const googleSyncBox = fn.createElement('div', 'google__sync-box');
    const googleSync = fn.createElement('a', 'google__sync');
        googleSync.textContent = 'GOOGLE';
        fn.appendElement(profCont, googleSyncBox);
        fn.appendElement(googleSyncBox, googleSync);

};

// PANTALLA DE FAVORITOS
const favCompScreen = (course) => {

    let removeCont = fn.querySelection('.main__cont');
    removeCont.remove();

    let body = fn.querySelection('body');
    
    const favCont = fn.createElement('div', 'fav__cont');
        fn.addClass(favCont, 'wrapper');
        fn.appendElement(body, favCont);
    const btnFavBox = fn.createElement('div', 'btn__prof-box');
        fn.appendElement(favCont, btnFavBox);
    const btnFavHome = fn.createElement('a', 'btn__home');
        fn.appendElement(btnFavBox, btnFavHome);
        btnFavHome.textContent = 'Home';
    const btnFavLogOut = fn.createElement('a', 'btn__prof-logout');
        fn.appendElement(btnFavBox, btnFavLogOut);
        btnFavLogOut.textContent = 'Log out';
        
    
    const courseComponents = fn.createElement('div', 'course__components');
        fn.appendElement(favCont, courseComponents);

    const imgBox = fn.createElement('div', 'img__box');
        fn.appendElement(courseComponents, imgBox);
    const img = fn.createElement('img');
        img.src = `${course.image}`;
        fn.appendElement(imgBox, img);
    
    // Click a la imagen para ir a vista detalle
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
        fn.appendElement(courseComponents, titleBox);
        fn.appendElement(titleBox, title);

    if(logged) {
        const btnFav = fn.createElement('a', 'btnFav');
        fn.appendElement(titleBox, btnFav);
        btnFav.textContent = 'FAVBTN';
    }
            
    // Click al título para ir a vista detalle
    title.addEventListener('click', (e) => {
        e.preventDefault();
        window.open(`${course.url}`);
    });

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

    // Botón Home
    btnFavHome.addEventListener('click', () => {
        favCont.remove();
        init();
    });

    // Botón Log out
    btnFavLogOut.addEventListener('click', () => {
        favCont.remove();
        init();
    });
   
};












