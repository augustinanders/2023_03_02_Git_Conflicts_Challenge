const yearElement = document.querySelector('[data-js="year"]');
const year = new Date().getFullYear();
yearElement.textContent = year;
