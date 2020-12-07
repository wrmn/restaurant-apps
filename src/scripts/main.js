import './component/navBar';
import restaurant from './../DATA.json';

const main = () => {
  console.log('check');
  const menuTrigger = document.querySelector('.burger-container');
  const headerMobile = document.querySelector('.header-mobile');

  menuTrigger.onclick = function () {
    headerMobile.classList.toggle('menu-opened');
    headerMobile.classList.contains('menu-opened') ? tabindex(0) : tabindex(-1);
  };
  restaurant.restaurants.forEach(data => {
    console.log(`${data.id},${data.name}`);
  });
};

const tabindex = index => {
  const items = document.querySelectorAll('.menu-name');
  items.forEach(item => {
    item.tabIndex = index;
  });
};

export default main;
