import Restaurant from './data/data';

const main = () => {
  const menuTrigger = document.querySelector('.burger-container');
  const headerMobile = document.querySelector('.header-mobile');
  const dataRestaurant = new Restaurant();

  dataRestaurant.call('/list', 'GET').then((data) => {
    display(data.restaurants);
  });

  menuTrigger.onclick = function() {
    headerMobile.classList.toggle('menu-opened');
    headerMobile.classList.contains('menu-opened') ? tabindex(0) : tabindex(-1);
  };
};

const tabindex = (index) => {
  const items = document.querySelectorAll('.menu-name');
  items.forEach((item) => {
    item.tabIndex = index;
  });
};

const display = (restaurants) => {
  restaurants.forEach((restaurant) => {
    console.log(`${restaurant.id},${restaurant.name}`);

    const node = document.createElement('DIV');
    const content = document.createElement('DIV');
    const imgCont = document.createElement('DIV');
    const desc = document.createElement('DIV');
    const name = document.createElement('DIV');
    const rate = document.createElement('DIV');
    const location = document.createElement('DIV');
    const readMore = document.createElement('A');
    const textName = document.createTextNode(restaurant.name);
    const textLocation = document.createTextNode(restaurant.city);
    const textRdmr = document.createTextNode('Read More');
    const textRate = document.createTextNode(`${restaurant.rating} / 5`);
    const textDesc = document.createTextNode(
        restaurant.description.split(' ').slice(0, 15).join(' ') + '...',
    );
    const img = document.createElement('IMG');

    img.setAttribute(
        'src',
        `https://restaurant-api.dicoding.dev/images/small/${restaurant.pictureId}`,
    );
    img.setAttribute('alt', `${restaurant.name} image`);

    node.classList.add('gridding__col-r4');

    readMore.setAttribute('href', '#');
    readMore.appendChild(textRdmr);

    name.appendChild(textName);
    name.classList.add('card-title');

    location.classList.add('location');
    location.appendChild(textLocation);

    desc.appendChild(textDesc);
    desc.appendChild(readMore);

    rate.appendChild(textRate);
    rate.classList.add('rating');

    imgCont.appendChild(img);
    imgCont.appendChild(location);
    imgCont.classList.add('content-img');

    content.classList.add('card');
    content.appendChild(name);
    content.appendChild(imgCont);
    content.appendChild(rate);
    content.appendChild(desc);

    node.appendChild(content);
    document.getElementById('restaurant-list').appendChild(node);
  });
};

export default main;
