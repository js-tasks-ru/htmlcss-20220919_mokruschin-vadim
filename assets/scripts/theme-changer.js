const themeChangers = document.querySelectorAll('.theme-changer');
const html = document.querySelector('html');

console.log(themeChangers.length);

themeChangers.forEach((val, ind) =>
  val.addEventListener('change', function () {
    html.setAttribute(
      'theme-mode',
      themeChangers[ind].checked ? 'dark' : 'light',
    );
    themeChangers.forEach(
      (_, indexInner) =>
        (themeChangers[indexInner].checked = themeChangers[ind].checked),
    );
  }),
);

// themeChangers.addEventListener('change', function () {
//   localStorage.setItem('theme', themeChangers.checked ? 'dark' : 'light');

//   html.setAttribute('theme-mode', themeChangers.checked ? 'dark' : 'light');
//   console.log(themeChangers ? 'dark' : 'light');
// });

window.onstorage = (event) => {
  console.log(event.key + ' ' + event.newValue + ' ' + event.url);
};

// themeChangers.addEventListener('change', function () {
//   localStorage.setItem('theme', themeChangers.checked ? 'dark' : 'light');

//   html.setAttribute('theme-mode', themeChangers.checked ? 'dark' : 'light');
//   console.log(themeChangers ? 'dark' : 'light');
// });

//  localStorage.setItem('theme', themeChangers.checked ? 'dark' : 'light');
// if (localStorage.getItem('theme') == 'light') setLightTheme();
// else setDarkTheme();
