import * as fn from './js/fn.js';

//variable global que guardará los cursos para no tener que pedir la búsqueda de nuevo a back si no es necesario
let globalCourses = [];

// let logged = (async () => {

//   let token = localStorage.getItem('Token');

//   const options = {
//     method: 'GET',
//     headers: {
//       authorization: 'bearer ' + token
//     }
//   };
//   const response = await fetch(
//     `http://localhost:3000/authuser`, 
//     options)
//     .then( (data) => data.json() );
//     if(response.OK === 1) {
//       return true;
//     } else if(response.OK === 0) {
//       return false;
//     }

//   // let response = false;
//   // response.OK === 1 ? true : false;
//   // return response;
// })();

// const fetchToAuth = async (token) => {
  
//   const options = {
//     method: 'GET',
//     headers: {
//       'authorization': 'bearer ' + token
//     }
//   };
//   const response = await fetch(
//     `http://localhost:3000/authuser`, 
//     options)
//     .then( (data) => data.json() );
    
//   if(response.OK === 1) {
//     return true;
//   } else if(response.OK) {
//     return false;
//   }

// };

// const acces = () => {
  


// }
// acces()

let logged = false;



const mainHtml = () => {
  console.log();
  const body = fn.querySelection('body');
  const mainCont = fn.createElement('main', 'main__cont');
  const container = fn.createElement('div', 'home__cont');
  fn.addClass(container, 'wrapper');
  fn.appendElement(body, mainCont);
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
  const btnLogs = fn.createElement('a', 'btn__logs');
  fn.appendElement(homeCont, btnLogsBox);

  if (logged) {
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

  btnSearch.textContent = 'Search';

  btnSearch.addEventListener('click', (e) => {
    e.preventDefault();
    
    let appTitle = fn.querySelection('.main__title-box');
    const param = input.value;

    fetchToAllCourses(param, appTitle);
    input.value = '';

  });
};

const resultComp = () => {
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

  if (logged) {
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

  const courseLevelBox = fn.createElement('div', 'course__level-box');
  const courseLevel = fn.createElement('p');
  courseLevel.textContent = `${course.level}`;

  fn.appendElement(courseComponents, courseLevelBox);
  fn.appendElement(courseLevelBox, courseLevel); // Valoración (estrellas)
};
const init = () => {

  if (globalCourses.length !== 0) {

      mainHtml();
      btnLogsHtml();
      inputBox();

    globalCourses.map((cur) => {
      resultComp(cur);
    });
      
  };

  mainHtml();
  btnLogsHtml();
  mainTitleApp();
  inputBox();

  return logged;

};
init()




// OBTENER TODOS LOS RESULTADOS DE UNA BUSQUEDA
const fetchToAllCourses = async (param, contRemoved) => {

  if(param.length === 0) {
    return alert('Search field must be contain any parameter to search');
    // Mirar de hacer esto con un poquito de gracia en la interfaz de usuario en vez de un alert. Eso es para el Chris del fururo.
  } else {

      const response = await fetch(
        `http://localhost:3000/courses?search=${param}`,
      ).then((data) => data.json());
    
      if (response.OK === 1) {
        const courses = response.courses;
        if(courses.length === 0){
          alert('Tu búsqueda no ha tenido ningún resultado');
          // Arreglar esto con UI en vez de con este alert de mierda.
        }
        courses.map((cur) => {
          resultComp(cur);
        });
        //llenamos la variable global con los cursos
        globalCourses = courses;

        fn.remover(contRemoved);

      } else if (response.OK === 0) {
        alert('Todo mal');
      };
  
  };

};

// REGISTRAR USUARIO
const fetchToSignUp = async (email, pass, contRemoved) => {
  const data = { email, pass };

  const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  };

  const response = await fetch(
    `http://localhost:3000/signup`,
    options,
  ).then((data) => data.json());

  console.log(response);
  
  if (response.OK === 1) {

    fn.remover(contRemoved);

    setTimeout(() => {
      logInCompScreen();
    }, 1200);

  } else if (response.OK === 0) {
    return alert(response.message);
  };
    
};

const fetchToLogin = async (email, pass, contRemoved) => {

  const data = { email, pass };

  if(!email || !pass) {
    return alert('LLena los campos subnormal')
  }

  const options = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  };

  const response = await fetch( 
    `http://localhost:3000/login`, 
    options )
    .then( (data) => data.json() );

    if(response.OK === 1) {
      fn.remover(contRemoved);
      localStorage.setItem('Token', response.token);
      setTimeout(() => {
        init();
      }, 1500);
    
    } else if(response.OK === 0) {
      return alert('User not exist')
    }
      

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

  const btnSend = fn.createElement('button', 'btn__send');
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
      
};

const logInCompScreen = () => {

  const mainCont = fn.querySelection('.main__cont');
  // fn.remover(container);
  const loginCont = fn.createElement('div', 'login__cont');
  fn.addClass(loginCont, 'wrapper');
  fn.appendElement(mainCont, loginCont);

  const btnHomeBoxSignUp = fn.createElement('div', 'btn__home-box-signup');
  fn.appendElement(loginCont, btnHomeBoxSignUp);

  const btnHome = fn.createElement('a', 'btn__home-signup');
  btnHome.textContent = 'Home';
  fn.appendElement(btnHomeBoxSignUp, btnHome);

  const signUpInputsBox = fn.createElement('div', 'input__box-signup');
  fn.appendElement(loginCont, signUpInputsBox);
  const inputMail = fn.createElement('input', 'input__mail-signup');
  fn.appendElement(signUpInputsBox, inputMail);
  const inputPass = fn.createElement('input', 'input__pass-signup');
  fn.appendElement(signUpInputsBox, inputPass);

  const sendAndVerifyBox = fn.createElement('div', 'btn__verify-box');
  fn.appendElement(loginCont, sendAndVerifyBox);
  const btnSendLogin = fn.createElement('a', 'btn__send-login');
  fn.appendElement(sendAndVerifyBox, btnSendLogin);
  btnSendLogin.textContent = 'Send';
  const btnVerify = fn.createElement('a', 'btn__verify');
  fn.appendElement(sendAndVerifyBox, btnVerify);
  btnVerify.textContent = 'Reset password';

  const textAuxBox = fn.createElement('div', 'text__aux-box');
  fn.appendElement(loginCont, textAuxBox);
  const textAux = fn.createElement('p', 'text__aux');
  fn.appendElement(textAuxBox, textAux);
  textAux.textContent = 'Not already one of us?';
  const btnSignUpOut = fn.createElement('a', 'btn__login-aux');
  fn.appendElement(textAuxBox, btnSignUpOut);
  btnSignUpOut.textContent = 'Sign up';

  const googleSignUpBox = fn.createElement('div', 'google__signup-box');
  const googleSignUp = fn.createElement('a', 'google__signup');
  googleSignUp.textContent = 'GOOGLE';
  fn.appendElement(loginCont, googleSignUpBox);
  fn.appendElement(googleSignUpBox, googleSignUp);



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
    resetPassScreen();
  });

  // GO TO HOME AFTER LOGIN
  btnSendLogin.addEventListener('click', (e) => {
    e.preventDefault();
    fetchToLogin(inputMail.value, inputPass.value, loginCont);
    inputMail.value = '';
    inputPass.value = '';
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

  const userDataLastNameTwo = fn.createElement(
    'input',
    'input__data-firstName',
  );
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

  const favInputBox = fn.createElement('div', 'favinput__search-box');
  fn.appendElement(favCont, favInputBox);
  const favInput = fn.createElement('input', 'favinput__search');
  fn.appendElement(favInputBox, favInput);

  const favBtnSearchBox = fn.createElement('div', 'favBtn__search-box');
  fn.appendElement(favInputBox, favBtnSearchBox);
  const favBtnSearch = fn.createElement('a', 'favBtn__search');
  fn.appendElement(favBtnSearchBox, favBtnSearch);
  favBtnSearch.textContent = 'Search';

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

  if (logged) {
    const btnFav = fn.createElement('a', 'btnFav');
    fn.appendElement(titleBox, btnFav);
    btnFav.textContent = 'FAVBTN';
  }

  // Click al título para ir a vista detalle
  title.addEventListener('click', (e) => {
    e.preventDefault();
    window.open(`${course.url}`);
  });

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

// PANTALLA DE RESET PASSWORD
const resetPassScreen = () => {
  const mainCont = fn.querySelection('.main__cont');
  // fn.remover(container);
  const resetCont = fn.createElement('div', 'reset__cont');
  fn.addClass(resetCont, 'wrapper');
  fn.appendElement(mainCont, resetCont);

  const btnResetHomeBox = fn.createElement('div', 'btn__home-box-reset');
  fn.appendElement(resetCont, btnResetHomeBox);

  const btnResetHome = fn.createElement('a', 'btn__home-reset');
  btnResetHome.textContent = 'Home';
  fn.appendElement(btnResetHomeBox, btnResetHome);

  const resetInputsBox = fn.createElement('div', 'input__box-reset');
  fn.appendElement(resetCont, resetInputsBox);
  const inputResetMail = fn.createElement('input', 'input__mail-reset');
  fn.appendElement(resetInputsBox, inputResetMail);
  const inputResetPass = fn.createElement('input', 'input__pass-reset');
  fn.appendElement(resetInputsBox, inputResetPass);

  const btnResetSendBox = fn.createElement('div', 'btn__reset-box');
  fn.appendElement(resetCont, btnResetSendBox);
  const btnResetSend = fn.createElement('a', 'btn__send');
  fn.appendElement(btnResetSendBox, btnResetSend);
  btnResetSend.textContent = 'Send';

  btnResetHome.addEventListener('click', () => {
    resetCont.remove();
    init();
  });
};
