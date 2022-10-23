window.addEventListener('storage', event => { 
  console.log(event.key + ' ' + event.newValue + ' ' + event.url);
  return console.log(localStorage.getItem('theme'));
});
