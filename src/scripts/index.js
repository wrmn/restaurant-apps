import 'regenerator-runtime'; /* for async await transpile */
import './../styles/styles.scss';

(function () {
    const menuTrigger = document.querySelector('.burger-container');
    const headerMobile = document.querySelector('.header-mobile');

    menuTrigger.onclick = function () {
        headerMobile.classList.toggle('menu-opened');
        (headerMobile.classList.contains('menu-opened')) ? tabindex(0): tabindex(-1);
    }
}());

const tabindex = (index) => {
    const items = document.querySelectorAll('.menu-name');
    // for (const item in items) {
    //     console.log(item);
    // }
    items.forEach((item) => {
        item.tabIndex = index;
    })
}

console.log('Hello Coders! :)');