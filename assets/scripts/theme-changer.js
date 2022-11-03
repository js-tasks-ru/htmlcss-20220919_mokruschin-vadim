const themeChangers = document.querySelectorAll('.theme-changer');
const html = document.querySelector('html');
const themeBurgerTextIndicator = document.querySelector(
  '.burger-menu__theme-section-text ',
);
let theme;

themeChangers.forEach((val, ind) =>
  val.addEventListener('change', function () {
    html.setAttribute('theme-mode', val.checked ? 'dark' : 'light');
    themeBurgerTextIndicator.innerHTML = val.checked ? 'Dark' : 'Light';
    themeChangers.forEach(
      (_, indexInner) =>
        (themeChangers[indexInner].checked = themeChangers[ind].checked),
    );
    theme = val.checked ? 'dark' : 'light';

    document.cookie = `theme=${theme}; path=/`;
    console.log(document.cookie);
  }),
);

window.onstorage = (event) => {
  console.log(event.key + ' ' + event.newValue + ' ' + event.url);
};

console.log(document.cookie);

// localStorage.setItem(
//   'theme',
//   themeChangers[ind].checked ? 'dark' : 'light',
// );
