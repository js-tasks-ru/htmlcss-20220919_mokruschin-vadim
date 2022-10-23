const themeChangers = document.querySelectorAll('.theme-changer');
const html = document.querySelector('html');
const themeBurgerTextIndicator = document.querySelector(
  '.burger-menu__theme-section-text ',
);

themeChangers.forEach((val, ind) =>
  val.addEventListener('change', function () {
    html.setAttribute('theme-mode', val.checked ? 'dark' : 'light');
    themeBurgerTextIndicator.innerHTML = val.checked ? 'Dark' : 'Light';
    themeChangers.forEach(
      (_, indexInner) =>
        (themeChangers[indexInner].checked = themeChangers[ind].checked),
    );
    localStorage.setItem(
      'theme',
      themeChangers[ind].checked ? 'dark' : 'light',
    );
  }),
);

window.onstorage = (event) => {
  console.log(event.key + ' ' + event.newValue + ' ' + event.url);
};
