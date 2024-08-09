import { translationsDE, translationsEN } from './index.js';

const langButton = document.getElementById('languageButton');

document.addEventListener('DOMContentLoaded', () => {
  langButton.addEventListener('click', changeLanguage);
});

function changeLanguage() {
  let keys = [];
  let translations;

  if (langButton.textContent === 'DE') {
    translations = translationsDE;
    langButton.innerText = 'EN';
  } else {
    translations = translationsEN;
    langButton.innerText = 'DE';
  }

  keys = Object.keys(translations);
  keys.forEach(key => {
    document.getElementById(key).innerText = translations[key];
  });
}
