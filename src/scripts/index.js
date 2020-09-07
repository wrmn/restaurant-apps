import 'regenerator-runtime'; /* for async await transpile */
import './../styles/styles.scss';

(function () {
    const header = document.querySelector('.header');

    header.onclick = function () {
        header.classList.toggle('menu-opened');
    }
}());

console.log('Hello Coders! :)');