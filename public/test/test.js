const load = () => {
  const token = window.location.search;
  history.pushState(null, '', '/test/');
  console.log(token);
  document.querySelector('.cutrex').innerHTML = window.location.pathname;
  googleLink();
};

window.addEventListener('load', load);

const googleLink = async () => {
  const result = await fetch('http://localhost:3000/google-link').then((data) =>
    data.json(),
  );
  console.log(result);
  document.querySelector('.link').setAttribute('href', result.link);
};
