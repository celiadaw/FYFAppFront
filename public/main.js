import * as fn from './js/fn.js';

//variable global que guardará los cursos para no tener que pedir la búsqueda de nuevo a back si no es necesario
let globalCourses = [];
let logged = false;
//const BACK_URL = 'https://shrouded-reaches-80608.herokuapp.com';
const BACK_URL = 'http://localhost:3000';
const courses = [
  {
    id:
      'aHR0cHM6Ly9lc2N1ZWxhLml0L2N1cnNvcy9iYWNrLWVkZ2UtZGVzYXJyb2xsby13ZWItYWwtbGltaXRlLW5vZGVqcy1lczYtbnBtLW1vbmdvZGI',
    title: 'Back Edge, desarrollo web al límite, NodeJS, ES6, npm, MongoDB',
    resume:
      'Desarrollo de aplicaciones web con las últimas tecnologías alrededor de NodeJS y del mundo backend',
    image:
      'https://escuela.it//storage/course_images_thumbnail/thumbnail-imagen-curso-backedge-49.jpg',
    level: 2,
    url:
      'https://escuela.it/cursos/back-edge-desarrollo-web-al-limite-nodejs-es6-npm-mongodb',
    popularity: 4.857142857142857,
    tags:
      '  Express NodeJS Javascript Backend backend  Express NodeJS Javascript Backend ',
    price: '89€',
    currentRating: '5',
    author: 'Alberto Basalo',
  },
  {
    id:
      'aHR0cHM6Ly9lc2N1ZWxhLml0L2N1cnNvcy9jdXJzby1kZS1kZXNhcnJvbGxvLWF2YW56YWRvLWNvbi1hbmd1bGFyanMtMTUteS10ZWNub2xvZ2lhcy1qYXZhc2NyaXB0',
    title:
      'Curso de Desarrollo avanzado con AngularJS 1.5 y tecnologías JavaScript',
    resume:
      'Un curso completo donde aprenderás a crear paso a paso aplicaciones Front-end',
    image:
      'https://escuela.it//storage/course_images_thumbnail/thumbnail-imagen-curso-angularjs-31.jpg',
    level: 2,
    url:
      'https://escuela.it/cursos/curso-de-desarrollo-avanzado-con-angularjs-15-y-tecnologias-javascript',
    popularity: 0.16666666666666666,
    tags: '  NodeJS AngularJS frontend backend  NodeJS AngularJS ',
    price: '60€',
    currentRating: '4',
    author: 'Alberto Basalo',
  },
  {
    id: 'aHR0cHM6Ly9lc2N1ZWxhLml0L2N1cnNvcy9jdXJzby1kZS1ub2RlanM',
    title: 'Curso de NodeJS',
    resume: 'Curso de básico a avanzado para el desarrollo en NodeJS',
    image:
      'https://escuela.it//storage/course_images_thumbnail/thumbnail-imagen-curso-nodejs-16.jpg',
    level: 2,
    url: 'https://escuela.it/cursos/curso-de-nodejs',
    popularity: 3.55,
    tags: '  NodeJS frontend backend  NodeJS ',
    price: '99€',
    currentRating: '5',
    author: 'Jonathan MirCha',
  },
  {
    id:
      'aHR0cHM6Ly9lc2N1ZWxhLml0L2N1cnNvcy9maXJlYmFzZS1kZXNkZS1ub2RlanMtc2RrLWZpcmViYXNlLWFkbWlu',
    title: 'Firebase desde NodeJS: SDK firebase-admin',
    resume:
      'Estudio con carácter práctico del SDK de administración de Firebase 3, desde el lado del servidor con NodeJS',
    image:
      'https://escuela.it//storage/course_images_thumbnail/thumbnail-firebase-48.jpg',
    level: 2,
    url: 'https://escuela.it/cursos/firebase-desde-nodejs-sdk-firebase-admin',
    popularity: 2.25,
    tags: '  Backend Firebase frontend backend apps  Backend Firebase ',
    price: '49€',
    currentRating: '5',
    author: 'Miguel Angel Alvarez',
  },
  {
    id:
      'aHR0cHM6Ly9lc2N1ZWxhLml0L2N1cnNvcy9kZXBsb3ktYXBsaWNhY2lvbmVzLW5vZGVqcw',
    title: 'Curso de Deploy de Aplicaciones NodeJS',
    resume:
      'Aprende a llevar a producción aplicaciones NodeJS, mediante varias alternativas y las mejores prácticas',
    image:
      'https://escuela.it//storage/course_images_thumbnail/thumbnail-deploy-apps-nodejs-32.jpg',
    level: 2,
    url: 'https://escuela.it/cursos/deploy-aplicaciones-nodejs',
    popularity: 3.391304347826087,
    tags: '  NodeJS DevOps backend  NodeJS DevOps ',
    price: '75€',
    currentRating: '5',
    author: 'Miguel Angel AlvarezAlberto BasaloAndres CenciJavier Riera Peiro',
  },
  {
    id: 'aHR0cHM6Ly9lc2N1ZWxhLml0L2N1cnNvcy9jdXJzby1kZS1ncmFwaHFsLXktbm9kZUpT',
    title: 'Curso de GraphQL y NodeJS',
    resume:
      'Aprende a implementar GraphQL con Node para construir APIs potentes y rápidas',
    image:
      'https://escuela.it//storage/course_images_thumbnail/thumbnail-curso-graphql-31.jpg',
    level: 2,
    url: 'https://escuela.it/cursos/curso-de-graphql-y-nodeJS',
    popularity: 7.888888888888889,
    tags: '  NodeJS Backend backend  NodeJS Backend ',
    price: '65€',
    currentRating: '4',
    author: 'Nicolas Molina',
  },
  {
    id:
      'aHR0cHM6Ly9lc2N1ZWxhLml0L2N1cnNvcy9jdXJzby1ub2RlLWRlc2Fycm9sbGFkb3Jlcy1qYXZhc2NyaXB0',
    title: 'Curso de Node para desarrolladores Javascript',
    resume:
      'Aprende NodeJS, Express, MongoDB y otras tecnologías del lado del servidor con Javascript',
    image:
      'https://escuela.it//storage/course_images_thumbnail/curso-express-nodejs-mini-65.jpg',
    level: 2,
    url: 'https://escuela.it/cursos/curso-node-desarrolladores-javascript',
    popularity: 17.833333333333332,
    tags: '  NodeJS backend  NodeJS ',
    price: '69€',
    currentRating: '5',
    author: 'Mario Romero',
  },
  {
    id: 'aHR0cHM6Ly9lc2N1ZWxhLml0L2N1cnNvcy9jdXJzby1ucG0',
    title: 'Curso de npm',
    resume: 'Aprovecha las funciones más útiles y desconocidas de npm',
    image:
      'https://escuela.it//storage/course_images_thumbnail/imagen-curso-npm-mini-97.jpg',
    level: 2,
    url: 'https://escuela.it/cursos/curso-npm',
    popularity: 7.166666666666667,
    tags:
      '  NodeJS Javascript DevOps frontend backend  NodeJS Javascript DevOps ',
    price: '65€',
    currentRating: '4',
    author: 'Mateo Tibaquirá',
  },
  {
    id: 'aHR0cHM6Ly9lc2N1ZWxhLml0L2N1cnNvcy9jdXJzby1kZS1kZW5v',
    title: 'Curso de Deno',
    resume:
      'Aprende Deno, la nueva plataforma de ejecución de Javascript para el servidor, evolución de NodeJS',
    image:
      'https://escuela.it//storage/course_images_thumbnail/fXsK9aCzgdGgv5W8yrjEN5s9u0qoBTCy6KcW5XCF.jpeg',
    level: 2,
    url: 'https://escuela.it/cursos/curso-de-deno',
    popularity: 9.6,
    tags: '  NodeJS Javascript Backend backend  NodeJS Javascript Backend ',
    price: '65€',
    currentRating: '5',
    author: 'César Alberca',
  },
];
//  RESET PASSWORD
const resetPassScreen = (token) => {
  const mainCont = fn.querySelection('.main__cont');
  // fn.remover(container);
  const resetCont = fn.createElement('div', 'reset__cont');
  fn.addClass(resetCont, 'wrapper');
  fn.appendElement(mainCont, resetCont);

  const btnResetHomeBox = fn.createElement('div', 'btn__home-box-reset');
  fn.appendElement(resetCont, btnResetHomeBox);

  const btnResetHome = fn.createElement('button', 'btn__home-reset');
  btnResetHome.textContent = 'Home';
  fn.appendElement(btnResetHomeBox, btnResetHome);

  const resetInputsBox = fn.createElement('div', 'input__box-reset');
  fn.appendElement(resetCont, resetInputsBox);
  const inputResetPass = fn.createElement('input', 'input__pass-reset');
  fn.appendElement(resetInputsBox, inputResetPass);
  inputResetPass.placeholder = 'new password';

  const btnResetSendBox = fn.createElement('div', 'btn__reset-box');
  fn.appendElement(resetCont, btnResetSendBox);
  const btnResetSend = fn.createElement('button', 'btn__send');
  fn.appendElement(btnResetSendBox, btnResetSend);
  btnResetSend.textContent = 'Send';

  btnResetHome.addEventListener('click', () => {
    mainCont.remove();
    init();
  });

  btnResetSend.addEventListener('click', () => {
    let pass = inputResetPass.value;
    let homeCont = fn.querySelection('.home__cont');

    fetchToResetPass(token, pass, resetCont);
  });
};

const resetPassMailScreen = () => {
  const mainCont = fn.querySelection('.main__cont');
  const resetMailCont = fn.createElement('div', 'reset__mail-cont');
  fn.addClass(resetMailCont, 'wrapper');
  fn.appendElement(mainCont, resetMailCont);

  const btnResetMailBox = fn.createElement('div', 'btn__reset-mailBox');
  const btnResetMailHome = fn.createElement('button', 'btn__reset-mailHome');
  btnResetMailHome.textContent = 'Home';
  fn.appendElement(resetMailCont, btnResetMailBox);
  fn.appendElement(btnResetMailBox, btnResetMailHome);

  const inputMailResetBox = fn.createElement('div', 'input__mail-resetBox');
  const inputResetMail = fn.createElement('input', 'input__mail-reset');
  const btnResetMailSend = fn.createElement('button', 'btn__mail-reset');
  btnResetMailSend.textContent = 'Send';
  inputResetMail.placeholder = 'email';
  fn.appendElement(resetMailCont, inputMailResetBox);
  fn.appendElement(inputMailResetBox, inputResetMail);
  fn.appendElement(inputMailResetBox, btnResetMailSend);

  btnResetMailSend.addEventListener('click', () => {
    let email = inputResetMail.value;
    fetchToSendMail(email);
    mainCont.remove();
    init();
  });
};

// MAIN HTML-----------------------------------------------------------------------
const mainHtml = () => {
  const body = fn.querySelection('body');
  const mainCont = fn.createElement('main', 'main__cont');
  fn.addClass(mainCont, 'bg');
  const logoBox = fn.createElement('div', 'logo__box');
  const jsLogo = fn.createElement('img', 'logo');
  const nodeLogo = fn.createElement('img', 'logo');
  const reactLogo = fn.createElement('img', 'logo');
  const angularLogo = fn.createElement('img', 'logo');
  jsLogo.src = './media/js.png';
  nodeLogo.src = './media/node.png';
  reactLogo.src = './media/react.png';
  angularLogo.src = './media/angular.png';

  const container = fn.createElement('div', 'home__cont');
  fn.addClass(container, 'wrapper');
  fn.appendElement(body, mainCont);
  fn.appendElement(mainCont, logoBox);

  fn.appendElement(logoBox, jsLogo);
  fn.appendElement(logoBox, nodeLogo);
  fn.appendElement(logoBox, reactLogo);
  fn.appendElement(logoBox, angularLogo);

  fn.appendElement(mainCont, container);

  return {
    mainCont,
    container,
  };
};
const btnLogsHtml = () => {
  const mainCont = fn.querySelection('.main__cont');
  const homeCont = fn.querySelection('.home__cont');
  const btnLogsBox = fn.createElement('div', 'btn__logs-box');
  const btnLogs = fn.createElement('button', 'btn__logs');
  fn.appendElement(homeCont, btnLogsBox);

  if (logged) {
    const btnFavs = fn.createElement('button', 'btn__favs');
    const btnProfile = fn.createElement('button', 'btn__profile');

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

    // Botón LogOut
    btnLogs.addEventListener('click', () => {
      let token = localStorage.getItem('Token');
      globalCourses = [];
      fetchToLogOut(token, mainCont);
      logged = false;
    });

    // Botón Favoritos
    btnFavs.addEventListener('click', () => {
      let bgCont = fn.querySelection('.main__cont');
      fn.removeClass(bgCont, 'bg');
      let token = localStorage.getItem('Token');
      // favCompScreen(course);
      let comp = document.querySelectorAll('.course__components');
      homeCont.remove();
      if (comp.length !== 0) {
        comp.forEach((cur) => {
          cur.remove();
        });
      }
      headerCompFav();
      fetchToGetFav(token, homeCont);
    });
  } else {
    const btnSignUp = fn.createElement('button', 'btn__sign-up');

    fn.appendElement(btnLogsBox, btnSignUp);
    fn.appendElement(btnLogsBox, btnLogs);

    btnSignUp.textContent = 'Sign up';
    btnLogs.textContent = 'Log in';

    // SIGNUP BTN
    let homeCont = fn.querySelection('.home__cont');
    btnSignUp.addEventListener('click', () => {
      homeCont.remove();
      let comp = document.querySelectorAll('.course__components');
      if (comp.length !== 0) {
        comp.forEach((cur) => {
          cur.remove();
        });
      }

      signUpCompScreen();
    });

    // LOGIN BTN
    btnLogs.addEventListener('click', () => {
      homeCont.remove();
      let comp = document.querySelectorAll('.course__components');
      if (comp.length !== 0) {
        comp.forEach((cur) => {
          cur.remove();
        });
      }

      logInCompScreen();
    });

    // Botón de log in-------

    return {
      btnLogsBox,
      btnSignUp,
      btnLogs,
    };
  }
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
    mainTitle,
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

  input.placeholder = 'Busca tu curso';

  btnSearch.textContent = 'Search';

  // Botón de buscar cursos
  btnSearch.addEventListener('click', (e) => {
    e.preventDefault();

    if (input.value === '') {
      return null;
    }

    let comp = document.querySelectorAll('.course__components');
    if (comp.length !== 0) {
      comp.forEach((cur) => {
        cur.remove();
      });
    }

    let appTitle = fn.querySelection('.main__title-box');
    const param = input.value.trim();

    fetchToAllCourses(param);
    let logoBoxAnimate = fn.querySelection('.logo__box');
    if (logoBoxAnimate) {
      logoBoxAnimate.remove();
    }

    input.value = '';
  });
};
const fetchToAuth = async (token) => {
  const options = {
    method: 'GET',
    headers: {
      authorization: `bearer ${token}`,
    },
  };
  const response = await fetch(`${BACK_URL}/authuser`, options).then((data) =>
    data.json(),
  );

  if (response.OK === 1) {
    return true;
  } else {
    return false;
  }
};
//Fetch para recoger code de google oauth
const fetchGetCodeOauth = async (code, token) => {
  const options = {
    method: 'POST',
    body: JSON.stringify({ code }),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${token}`,
    },
  };
  const response = await fetch(`${BACK_URL}/vincular`, options).then((data) =>
    data.json(),
  );
  console.log('FETCH CODE', response);
  return response.OK;
};
const init = async () => {
  if (localStorage.getItem('Token')) {
    let token = localStorage.getItem('Token');
    logged = await fetchToAuth(token);
  }

  const urlParams = new URLSearchParams(window.location.search);
  console.log('PARAMETRO', urlParams.get('action'));
  const action = urlParams.get('action');
  const state = urlParams.get('state');
  const error = urlParams.get('error');

  console.log(state, action);

  if (action === 'newpass') {
    const token = urlParams.get('token');
    history.pushState(null, '', '/');
    mainHtml();
    resetPassScreen(token);
  } else if (action === 'google-oauth') {
    const token = urlParams.get('token');
    localStorage.setItem('Token', token);
    history.pushState(null, '', '/');
    init();
  } else if (action === 'vincular') {
    console.log('VINCULAR!!!');
    let token = localStorage.getItem('Token');
    console.log('TOKEN', token);
    if (token) {
      const code = urlParams.get('code');
      console.log('CODE', code);
      fetchGetCodeOauth(code, token);
    }
    history.pushState(null, '', '/');
    init();
  } else {
    if (globalCourses.length !== 0) {
      mainHtml();
      btnLogsHtml();
      inputBox();
      let logoBoxAnimate = fn.querySelection('.logo__box');
      if (logoBoxAnimate) {
        logoBoxAnimate.remove();
      }

      globalCourses.map((cur, index) => {
        resultComp(cur, index);
      });
    } else {
      mainHtml();
      btnLogsHtml();
      mainTitleApp();
      inputBox();
      if (error) {
        history.pushState(null, '', '/');
        alert(error);
      }
    }
  }
};
init();
// ----------------------------------------------------------------------- MAIN HTML

//-----------------------------------------------------------------------PANTALLAS

// RESULTADOS DE LA BÚSQUEDA-------------------------------------------------------
const resultComp = (course, index) => {
  let container = fn.querySelection('.main__cont');

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
  if (course.price === 0) {
    price.textContent = 'Gratis';
  } else {
    price.textContent = `${course.price} €`;
  }

  fn.appendElement(imgBox, priceBox);
  fn.appendElement(priceBox, price);

  const titleBox = fn.createElement('h3', 'title__box');
  const title = fn.createElement('h3');
  title.textContent = `${course.title}`;

  if (logged) {
    const btnFav = fn.createElement('a', 'btnFav');
    fn.appendElement(titleBox, btnFav);

    if (course.favorito) {
      btnFav.classList.add('fa-3x', 'fas', 'fa-thumbs-up');
      fn.addClass(courseComponents, 'fav');
    } else {
      btnFav.classList.add('fa-3x', 'far', 'fa-thumbs-up');
      fn.addClass(courseComponents, 'nofav');
    }

    btnFav.addEventListener('click', () => {
      if (course.favorito) {
        if (fetchToDelFav(course)) {
          // btnFav.classList.remove('fas');
          fn.removeClass(btnFav, 'fas');
          // btnFav.classList.add('far');
          fn.addClass(btnFav, 'far');
          course.favorito = false;
          globalCourses[index].favorito = false;
        } else {
          console.error('No se ha podido borrar favorito ', course.url);
        }
      } else {
        if (fetchToAddFav(course, index)) {
          // btnFav.classList.remove('far');
          fn.removeClass(btnFav, 'far');
          // btnFav.classList.add('fas');
          fn.addClass(btnFav, 'fas');
          course.favorito = true;
          globalCourses[index].favorito = true;
        } else {
          console.error('No se ha podido añadir favorito ', course.url);
        }
      }
    });
  } else {
    fn.addClass(courseComponents, 'nofav');
  }

  title.addEventListener('click', (e) => {
    e.preventDefault();
    window.open(`${course.url}`);
  });

  fn.appendElement(courseComponents, titleBox);
  fn.appendElement(titleBox, title);

  const descriptionBox = fn.createElement('div', 'description__box');
  const description = fn.createElement('p');
  description.textContent = `${course.resume}`;

  fn.appendElement(courseComponents, descriptionBox);
  fn.appendElement(descriptionBox, description);

  const ratingBox = fn.createElement('div', 'rating__box');
  const rating = fn.createElement('p');
  rating.textContent = `${course.currentRating}`;

  fn.appendElement(courseComponents, ratingBox);
  fn.appendElement(ratingBox, rating);
};
// -----------------------------------------------------------RESULTADOS DE LA BÚSQUEDA

// BOTONES DE CONTENEDOR FAV
const headerCompFav = () => {
  let body = fn.querySelection('body');
  let favMainCont = fn.querySelection('.main__cont');
  const btnFavBox = fn.createElement('div', 'btn__fav-box');
  const btnHomeFav = fn.createElement('button', 'btn__home-fav');
  btnHomeFav.textContent = 'Home';
  const btnHomeLogOut = fn.createElement('button', 'btn__home-fav');
  btnHomeLogOut.textContent = 'Log out';
  fn.appendElement(body, favMainCont);
  fn.appendElement(favMainCont, btnFavBox);
  fn.appendElement(btnFavBox, btnHomeFav);
  fn.appendElement(btnFavBox, btnHomeLogOut);

  // let btnCont = fn.querySelection('.btn__fav-box');

  // Botón para volver al home
  btnHomeFav.addEventListener('click', () => {
    btnFavBox.remove();
    let cont = fn.querySelection('.main__cont');
    cont.remove();
    init();
  });

  // Botón log out
  btnHomeLogOut.addEventListener('click', () => {
    let cont = fn.querySelection('.main__cont');
    let token = localStorage.getItem('Token');
    fetchToLogOut(token, btnFavBox);
    cont.remove();
  });
};
// RESULTADOS CONTENEDOR FAV
const resultCompFav = (course, index) => {
  let body = fn.querySelection('body');
  let container = fn.querySelection('.main__cont');
  fn.addClass(container, 'main__cont-fav');
  fn.appendElement(body, container);

  const courseComponents = fn.createElement('div', 'course__components');
  fn.addClass(courseComponents, 'fav');

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
  if (course.price === '0') {
    price.textContent = 'Gratis';
  } else {
    price.textContent = `${course.price} €`;
  }

  fn.appendElement(imgBox, priceBox);
  fn.appendElement(priceBox, price);

  const titleBox = fn.createElement('h3', 'title__box');
  const title = fn.createElement('h3');
  title.textContent = `${course.title}`;

  const btnFav = fn.createElement('a', 'btnFav');
  fn.appendElement(titleBox, btnFav);

  btnFav.classList.add('fa-3x', 'fas', 'fa-thumbs-up');

  btnFav.addEventListener('click', () => {
    if (fetchToDelFav(course)) {
      courseComponents.remove();
    } else {
      alert('No se ha podido borrar');
    }
  });

  title.addEventListener('click', (e) => {
    e.preventDefault();
    window.open(`${course.url}`);
  });

  fn.appendElement(courseComponents, titleBox);
  fn.appendElement(titleBox, title);

  const descriptionBox = fn.createElement('div', 'description__box');
  const description = fn.createElement('p');
  description.textContent = `${course.resume}`;

  fn.appendElement(courseComponents, descriptionBox);
  fn.appendElement(descriptionBox, description);

  const ratingBox = fn.createElement('div', 'rating__box');
  const rating = fn.createElement('p');
  rating.textContent = `${course.currentRating}`;

  fn.appendElement(courseComponents, ratingBox);
  fn.appendElement(ratingBox, rating);
};

// OBTENER TODOS LOS RESULTADOS DE UNA BUSQUEDA-----------------------------FETCHING
const fetchToAllCourses = async (param, contRemoved) => {
  if (param.length === 0) {
    return alert('Search field must be contain any parameter to search');

    // Mirar de hacer esto con un poquito de gracia en la interfaz de usuario en vez de un alert. Eso es para el Chris del fururo.
  } else {
    let options;
    if (logged) {
      const token = localStorage.getItem('Token');
      options = {
        headers: { Authorization: `bearer ${token}` },
      };
    } else options = {};

    const response = await fetch(
      `${BACK_URL}/courses?search=${param}`,
      options,
    ).then((data) => data.json());
    if (response.OK === 1) {
      const courses = response.courses;
      if (courses.length === 0) {
        alert('Tu búsqueda no ha tenido ningún resultado');
        // Arreglar esto con UI en vez de con este alert de mierda.
      }

      courses.map((cur, index) => {
        resultComp(cur, index);
      });

      //llenamos la variable global con los cursos
      globalCourses = courses;

      if (contRemoved) {
        fn.remover(contRemoved);
      }
    } else if (response.OK === 0) {
      alert('Todo mal');
    }
  }
};
// REGISTRAR USUARIO
const fetchToSignUp = async (email, pass, contRemoved) => {
  const data = { email, pass };

  const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  };

  const response = await fetch(`${BACK_URL}/signup`, options).then((data) =>
    data.json(),
  );

  if (response.OK === 1) {
    fn.remover(contRemoved);

    setTimeout(() => {
      logInCompScreen();
    }, 1200);
  } else if (response.OK === 0) {
    return alert(response.message);
  }
};
// LOGUEAR USUARIO
const fetchToLogin = async (email, pass, contRemoved) => {
  const data = { email, pass };

  if (!email || !pass) {
    return alert('LLena los campos subnormal');
  }

  const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  };

  const response = await fetch(`${BACK_URL}/login`, options).then((data) =>
    data.json(),
  );

  if (response.OK === 1) {
    fn.remover(contRemoved);
    localStorage.setItem('Token', response.token);

    setTimeout(() => {
      init();
    }, 1500);
  } else if (response.OK === 0) {
    return alert('User not exist');
  }
};
// LOGOUT USUARIO
const fetchToLogOut = async (token, contRemoved) => {
  const options = {
    headers: { Authorization: `bearer ${token}` },
  };

  const response = await fetch(`${BACK_URL}/logout`, options).then((data) =>
    data.json(),
  );

  if (response.OK === 1) {
    // setTimeout(() => {
    init();
    // }, 500);
    fn.remover(contRemoved);
  } else if (response.OK === 0) {
    return alert('Incorrect data');
  }
};
// AÑADIR FAVORITO
const fetchToAddFav = async (course, index) => {
  // const courseFav{ author, currentRating, image, level, popularity, price, resume, title, url } = course;
  try {
    const token = localStorage.getItem('Token');
    const options = {
      method: 'POST',
      body: JSON.stringify(course),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${token}`,
      },
    };
    const response = await fetch(
      `${BACK_URL}/courses/fav`,
      options,
    ).then((data) => data.json());

    globalCourses[index].favoritoID = response.insertId;
    return response;
  } catch (error) {}
};
// QUITAR FAVORITO
const fetchToDelFav = async (course) => {
  const token = localStorage.getItem('Token');
  const options = {
    method: 'DELETE',
    body: JSON.stringify(course),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `bearer ${token}`,
    },
  };
  const response = await fetch(
    `${BACK_URL}/courses/delete/${course.favoritoID}`,
    options,
  ).then((data) => data.json());
  return response.OK;
};
const fetchToGetFav = async (token, contRemoved) => {
  const options = {
    headers: { Authorization: `bearer ${token}` },
  };
  const response = await fetch(
    `${BACK_URL}/courses/fav`,
    options,
  ).then((data) => data.json());

  if (response.OK === 1) {
    let courses = response.fav;
    courses.map((course, index) => {
      // favCompScreen(course);
      resultCompFav(course, index);
    });
    fn.remover(contRemoved);
  } else {
    alert('No tienes favoritos, mamarracho');
  }
};

const fetchToResetPass = async (token, pass, contRemoved) => {
  const options = {
    method: 'POST',
    headers: {
      Authorization: `bearer ${token}`,
      'Content-type': 'application/json',
    },
    body: JSON.stringify({ pass }),
  };
  const response = await fetch(`${BACK_URL}/changepass`, options).then((data) =>
    data.json(),
  );

  if (response.OK === 1) {
    contRemoved.remove();
    logInCompScreen();
  }
};
const fetchToSendMail = async (email) => {
  const options = {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({ email }),
  };

  const response = await fetch(`${BACK_URL}/newpass`, options).then((data) =>
    data.json(),
  );

  // if(response.OK === 1) {
  //   contRemoved.remove();
  //   init();
  // };
};

// -------------------------------------------------------------------------FETCHING

// FETCH PROFILE

const fetchToProfile = async (
  token,
  imgProf,
  userDataFirstName,
  userDataLastName,
  btnEdit,
  profCont,
) => {
  const options = {
    headers: { Authorization: `bearer ${token}` },
  };
  const response = await fetch(`${BACK_URL}/user`, options).then((data) =>
    data.json(),
  );
  imgProf.src = response.foto ? response.foto : '/media/user-img.png';
  userDataFirstName.value = response.nombre;
  userDataLastName.value = response.apellidos;

  //evento botón edición
  btnEdit.addEventListener('click', async () => {
    const foto = imgProf.src;
    const nombre = userDataFirstName.value;
    const apellidos = userDataLastName.value;
    console.log(foto, nombre, apellidos);
    const options = {
      method: 'POST',
      body: JSON.stringify({ foto, nombre, apellidos }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `bearer ${token}`,
      },
    };
    console.log(options);
    const response = await fetch(`${BACK_URL}/user`, options).then((data) =>
      data.json(),
    );

    console.log('RESPONSE', response);

    if (response.OK) {
      profCont.remove();
      init();
    } else {
      console.error('Error al actualizar los datos de usuario');
    }
  });
};

//FETCH GOOGLE LINK
const fetchToGoogle = async (action) => {
  const response = await fetch(
    `${BACK_URL}/google-link/${action}`,
  ).then((data) => data.json());
  console.log('OAUTH', response);
  if (response.OK === 1) {
    window.location.href = response.link;
  }
};

// -------------------------------------------------------------------------FETCHING

// PANTALLAS-----------------------------------------------------------------------
//  SIGN UP
const signUpCompScreen = () => {
  const mainCont = fn.querySelection('.main__cont');
  // fn.remover(container);
  const signUpCont = fn.createElement('div', 'signup__cont');
  fn.addClass(signUpCont, 'wrapper');
  fn.appendElement(mainCont, signUpCont);

  const btnHomeBoxSignUp = fn.createElement('div', 'btn__home-box-signup');
  fn.appendElement(signUpCont, btnHomeBoxSignUp);

  const btnHome = fn.createElement('button', 'btn__home-signup');
  btnHome.textContent = 'Home';
  fn.appendElement(btnHomeBoxSignUp, btnHome);

  const signUpInputsBox = fn.createElement('div', 'input__box-signup');
  fn.appendElement(signUpCont, signUpInputsBox);
  const inputMail = fn.createElement('input', 'input__mail-signup');
  fn.appendElement(signUpInputsBox, inputMail);
  const inputPass = fn.createElement('input', 'input__pass-signup');
  fn.appendElement(signUpInputsBox, inputPass);
  inputMail.placeholder = 'email';
  inputPass.placeholder = 'password';

  const btnSend = fn.createElement('button', 'btn__send');
  fn.appendElement(signUpInputsBox, btnSend);
  btnSend.textContent = 'Send';

  const textAuxBox = fn.createElement('div', 'text__aux-box');
  const textAux = fn.createElement('p', 'text__aux');
  textAux.textContent = 'You´re one of us?';
  const btnLoginAux = fn.createElement('button', 'btn__login-aux');
  btnLoginAux.textContent = 'Log in';
  fn.appendElement(signUpCont, textAuxBox);
  fn.appendElement(textAuxBox, textAux);
  fn.appendElement(textAuxBox, btnLoginAux);

  const googleSignUpBox = fn.createElement('div', 'google__signup-box');
  const googleSignUp = fn.createElement('button', 'google__signup');
  googleSignUp.textContent = 'GOOGLE';
  fn.appendElement(signUpCont, googleSignUpBox);
  fn.appendElement(googleSignUpBox, googleSignUp);

  // BACK TO HOME
  btnHome.addEventListener('click', (e) => {
    e.preventDefault();
    fn.remover(mainCont);
    init();
  });

  // REDIRECT TO LOGIN
  btnLoginAux.addEventListener('click', (e) => {
    e.preventDefault();
    fn.remover(signUpCont);
    setTimeout(() => {
      logInCompScreen();
    }, 1200);
  });

  //SIGNUP FETCH
  btnSend.addEventListener('click', (e) => {
    e.preventDefault();
    fetchToSignUp(inputMail.value, inputPass.value, signUpCont);
    inputMail.value = '';
    inputPass.value = '';
  });

  // OAUTH SIGNUP
  googleSignUp.addEventListener('click', () => fetchToGoogle('signup'));
};
//  LOG IN
const logInCompScreen = () => {
  const mainCont = fn.querySelection('.main__cont');
  // fn.remover(container);
  const loginCont = fn.createElement('div', 'login__cont');
  fn.addClass(loginCont, 'wrapper');
  fn.appendElement(mainCont, loginCont);

  const btnHomeBoxSignUp = fn.createElement('div', 'btn__home-box-signup');
  fn.appendElement(loginCont, btnHomeBoxSignUp);

  const btnHome = fn.createElement('button', 'btn__home-signup');
  btnHome.textContent = 'Home';
  fn.appendElement(btnHomeBoxSignUp, btnHome);

  const signUpInputsBox = fn.createElement('div', 'input__box-signup');
  fn.appendElement(loginCont, signUpInputsBox);
  const inputMail = fn.createElement('input', 'input__mail-signup');
  fn.appendElement(signUpInputsBox, inputMail);
  const inputPass = fn.createElement('input', 'input__pass-signup');
  fn.appendElement(signUpInputsBox, inputPass);
  inputMail.placeholder = 'email';
  inputPass.placeholder = 'password';

  const sendAndVerifyBox = fn.createElement('div', 'btn__verify-box');
  fn.appendElement(loginCont, sendAndVerifyBox);
  const btnSendLogin = fn.createElement('button', 'btn__send-login');
  fn.appendElement(sendAndVerifyBox, btnSendLogin);
  btnSendLogin.textContent = 'Send';
  const btnVerify = fn.createElement('button', 'btn__verify');
  fn.appendElement(sendAndVerifyBox, btnVerify);
  btnVerify.textContent = 'Reset password';

  const textAuxBox = fn.createElement('div', 'text__aux-box');
  fn.appendElement(loginCont, textAuxBox);
  const textAux = fn.createElement('p', 'text__aux');
  fn.appendElement(textAuxBox, textAux);
  textAux.textContent = 'Not already one of us?';
  const btnSignUpOut = fn.createElement('button', 'btn__login-aux');
  fn.appendElement(textAuxBox, btnSignUpOut);
  btnSignUpOut.textContent = 'Sign up';

  const googleLogInBox = fn.createElement('div', 'google__login-box');
  const googleLogIn = fn.createElement('button', 'google__login');
  googleLogIn.textContent = 'GOOGLE';
  fn.appendElement(loginCont, googleLogInBox);
  fn.appendElement(googleLogInBox, googleLogIn);

  // BACK TO HOME
  btnHome.addEventListener('click', () => {
    fn.remover(mainCont);
    init();
  });

  // REDIRECT TO SIGN UP
  btnSignUpOut.addEventListener('click', () => {
    fn.remover(loginCont);
    setTimeout(() => {
      signUpCompScreen();
    }, 1200);
  });

  // RESET PASSWORD
  btnVerify.addEventListener('click', () => {
    fn.remover(loginCont);
    resetPassMailScreen();
  });

  // GO TO HOME AFTER LOGIN
  btnSendLogin.addEventListener('click', (e) => {
    e.preventDefault();
    fetchToLogin(inputMail.value, inputPass.value, mainCont);
    globalCourses = [];
    inputMail.value = '';
    inputPass.value = '';
  });

  // GOOGLE OAUTH LOGIN
  googleLogIn.addEventListener('click', () => fetchToGoogle('login'));
};

//  PROFILE
const profileCompScreen = () => {
  const body = fn.querySelection('body');

  const profCont = fn.createElement('div', 'prof__cont');
  fn.addClass(profCont, 'wrapper');
  const btnProfBox = fn.createElement('div', 'btn__prof-box');
  fn.appendElement(profCont, btnProfBox);
  const btnProfHome = fn.createElement('button', 'btn__home');
  fn.appendElement(btnProfBox, btnProfHome);
  btnProfHome.textContent = 'Home';
  const btnProfLogOut = fn.createElement('button', 'btn__prof-logout');
  fn.appendElement(btnProfBox, btnProfLogOut);
  btnProfLogOut.textContent = 'Log out';

  const imgProfBox = fn.createElement('div', 'imgProfBox');
  fn.appendElement(body, profCont);
  fn.appendElement(profCont, imgProfBox);
  const imgProf = fn.createElement('img', 'imgProf');
  imgProf.src = './media/user-img.png';
  fn.appendElement(imgProfBox, imgProf);

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

  const btnEditBox = fn.createElement('div', 'btn__edit-box');
  const btnEdit = fn.createElement('button', 'btn__edit');
  fn.appendElement(userDataBox, btnEditBox);
  fn.appendElement(btnEditBox, btnEdit);
  btnEdit.textContent = 'Edit';
  const token = localStorage.getItem('Token');
  fetchToProfile(
    token,
    imgProf,
    userDataFirstName,
    userDataLastName,
    btnEdit,
    profCont,
  );

  // Botón Home
  btnProfHome.addEventListener('click', () => {
    profCont.remove();
    init();
  });

  // Botón Log out
  btnProfLogOut.addEventListener('click', () => {
    let token = localStorage.getItem('Token');
    fetchToLogOut(token, profCont);
  });

  // Botón de google
  const googleSyncBox = fn.createElement('div', 'google__sync-box');
  const googleSync = fn.createElement('button', 'google__sync');
  googleSync.textContent = 'GOOGLE';
  fn.appendElement(profCont, googleSyncBox);
  fn.appendElement(googleSyncBox, googleSync);
  googleSync.addEventListener('click', () => fetchToGoogle('link'));
};

//  FAVORITOS
// const favCompScreen = (course) => {

//   let body = fn.querySelection('body');
//   let favMainCont = fn.querySelection('.main__cont');
//     fn.appendElement(body, favMainCont);
//   const compCont = fn.createElement('div', 'fav__main-cont');

//   const btnFavBox = fn.createElement('div', 'btn__prof-box');

//   fn.appendElement(favMainCont, btnFavBox);
//   const btnFavHome = fn.createElement('button', 'btn__home');
//   fn.appendElement(btnFavBox, btnFavHome);
//   btnFavHome.textContent = 'Home';
//   const btnFavLogOut = fn.createElement('button', 'btn__prof-logout');
//   fn.appendElement(btnFavBox, btnFavLogOut);
//   btnFavLogOut.textContent = 'Log out';

//   const favInputBox = fn.createElement('div', 'favinput__search-box');
//   fn.appendElement(favMainCont, favInputBox);
//   const favInput = fn.createElement('input', 'favinput__search');
//   fn.appendElement(favInputBox, favInput);

//   const favBtnSearchBox = fn.createElement('div', 'favBtn__search-box');
//   fn.appendElement(favInputBox, favBtnSearchBox);
//   const favBtnSearch = fn.createElement('button', 'favBtn__search');
//   fn.appendElement(favBtnSearchBox, favBtnSearch);
//   favBtnSearch.textContent = 'Search';

//   const favCont = fn.createElement('div', 'fav__cont');
//     fn.appendElement(compCont, favCont);
//     fn.addClass(favCont, 'wrapper');
//   const courseComponents = fn.createElement('div', 'course__components');
//     fn.appendElement(favCont, courseComponents);

//   const imgBox = fn.createElement('div', 'img__box');
//   fn.appendElement(courseComponents, imgBox);
//   const img = fn.createElement('img');
//   img.src = `${course.image}`;
//     fn.appendElement(imgBox, img);

//   // Click a la imagen para ir a vista detalle
//   img.addEventListener('click', (e) => {
//     e.preventDefault();
//     window.open(`${course.url}`);
//   });

//   const priceBox = fn.createElement('div', 'price__box');
//   const price = fn.createElement('h2');
//   price.textContent = `${course.price}`;
//   fn.appendElement(imgBox, priceBox);
//   fn.appendElement(priceBox, price);

//   const titleBox = fn.createElement('h3', 'title__box');
//   const title = fn.createElement('h3');
//   title.textContent = `${course.title}`;
//   fn.appendElement(courseComponents, titleBox);
//   fn.appendElement(titleBox, title);

//   if (logged) {
//     const btnFav = fn.createElement('button', 'btnFav');
//     fn.appendElement(titleBox, btnFav);
//     btnFav.textContent = 'FAVBTN';
//   }

//   // Click al título para ir a vista detalle
//   title.addEventListener('click', (e) => {
//     e.preventDefault();
//     window.open(`${course.url}`);
//   });

//   const descriptionBox = fn.createElement('div', 'description__box');
//   const description = fn.createElement('p');
//   description.textContent = `${course.resume}`;

//   fn.appendElement(courseComponents, descriptionBox);
//   fn.appendElement(descriptionBox, description);

//   const ratingBox = fn.createElement('div', 'rating__box');
//   const rating = fn.createElement('p');
//   rating.textContent = `${course.currentRating}`;

//   fn.appendElement(courseComponents, ratingBox);
//   fn.appendElement(ratingBox, rating);

//   const courseLevelBox = fn.createElement('div', 'course__level-box');
//   const courseLevel = fn.createElement('p');
//   courseLevel.textContent = `${course.level}`;

//   fn.appendElement(courseComponents, courseLevelBox);
//   fn.appendElement(courseLevelBox, courseLevel); // Valoración (estrellas)

//   // Botón Home
//   btnFavHome.addEventListener('click', () => {
//     favMainCont.remove();
//     console.log(5555);

//   });

//   // Botón Log out
//   btnFavLogOut.addEventListener('click', () => {
//     favCont.remove();
//     init();
//   });
// };
