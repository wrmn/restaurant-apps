const template = `
     <div class="header">
        <div class="gridding__row">
          <div class="gridding__col-1"></div>
          <div class="gridding__col-6">
            <a href="/" class="main-logo">nafabi<span class="dot">.</span></a>
          </div>
          <ul class="menu gridding__col-4">
            <div class="gridding__row">
              <li class="menu-item gridding__col-3">
                <a href="#">
                  <span></span>
                  <text>Home</text>
                </a>
              </li>
              <li class="menu-item gridding__col-3">
                <a href="#">
                  <span></span>
                  <text>Favorite</text>
                </a>
              </li>
              <li class="menu-item gridding__col-3">
                <a href="https://github.com/wrmn">
                  <span></span>
                  <text>About</text>
                </a>
              </li>
            </div>
          </ul>
        </div>
      </div>      
`;

class navBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({
      mode: 'open',
    });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = template;
  }
}

customElements.define('nav-bar', navBar);
