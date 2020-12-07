import './component/navBar';
import restaurant from './../DATA.json';

const main = () => {
  const menuTrigger = document.querySelector('.burger-container');
  const headerMobile = document.querySelector('.header-mobile');

  menuTrigger.onclick = function () {
    headerMobile.classList.toggle('menu-opened');
    headerMobile.classList.contains('menu-opened') ? tabindex(0) : tabindex(-1);
  };

  restaurant.restaurants.forEach(data => {
    console.log(`${data.id},${data.name}`);

    const node = document.createElement('DIV');
    const content = document.createElement('DIV');
    const imgCont = document.createElement('DIV');
    const desc = document.createElement('DIV');
    const name = document.createElement('DIV');
    const readMore = document.createElement('A');
    const textName = document.createTextNode(data.name);
    const textRdmr = document.createTextNode('Read More....');
    const textDesc = document.createTextNode(
      data.description.split(' ').slice(0, 15).join(' '),
    );
    const img = document.createElement('IMG');

    img.setAttribute('src', data.pictureId);

    node.classList.add('gridding__col-r4');

    readMore.setAttribute('href', '#');
      readMore.appendChild(textRdmr)

    name.appendChild(textName);
    name.classList.add('card-title');

    desc.appendChild(textDesc);
desc.appendChild(readMore)

    imgCont.appendChild(img);
    imgCont.classList.add('content-img');

    content.classList.add('card');
    content.appendChild(name);
    content.appendChild(imgCont);
    content.appendChild(desc);

    node.appendChild(content);
    document.getElementById('restaurant-list').appendChild(node);
  });
};

const tabindex = index => {
  const items = document.querySelectorAll('.menu-name');
  items.forEach(item => {
    item.tabIndex = index;
  });
};

export default main;
