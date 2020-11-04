import './AppBar.js';
import './Footer.js';
import goToPage from './utils/Router.js';
import registerSW from './utils/register-sw.js';

window.addEventListener('DOMContentLoaded', () => {
  goToPage();
  registerSW();
})

window.addEventListener('popstate', () => {
  goToPage();
})