const tab1 = document.getElementById('tabs-input-1');
const tab2 = document.getElementById('tabs-input-2');
const tab3 = document.getElementById('tabs-input-3');

const content_tab1 = document.getElementById('content-tab-1');
const content_tab2 = document.getElementById('content-tab-2');
const content_tab3 = document.getElementById('content-tab-3');

tab1.addEventListener('change', () => {
  if (tab1.checked) {
    content_tab1.classList.add('tabs__content_visible');
    content_tab2.classList.remove('tabs__content_visible');
    content_tab3.classList.remove('tabs__content_visible');
  }
});

tab2.addEventListener('change', () => {
  if (tab2.checked) {
    content_tab1.classList.remove('tabs__content_visible');
    content_tab2.classList.add('tabs__content_visible');
    content_tab3.classList.remove('tabs__content_visible');
  }
});

tab3.addEventListener('change', () => {
  if (tab3.checked) {
    content_tab1.classList.remove('tabs__content_visible');
    content_tab2.classList.remove('tabs__content_visible');
    content_tab3.classList.add('tabs__content_visible');
  }
});
