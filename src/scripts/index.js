import 'regenerator-runtime'; /* for async await transpile */
import './../styles/styles.scss';

(function () {
    const headerMobile = document.querySelector('.header-mobile');

    headerMobile.onclick = function () {
        headerMobile.classList.toggle('menu-opened');
    }
}());

console.log('Hello Coders! :)');