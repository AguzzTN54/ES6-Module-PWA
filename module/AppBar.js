class Appbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <nav class="white" role="navigation">
      <div class="nav-wrapper container">
        <a href="#home" class="brand-logo link" id="logo-container" style="margin-top: 0;">
          Minggat
        </a>
        <button
          class="sidenav-trigger hide-on-large-only"
          data-target="nav-mobile"
          aria-label="Sidenav Trigger"
        >
          <span aria-hidden="true"> </span>
        </button>

        <ul class="topnav right hide-on-med-and-down"></ul>
        <ul class="sidenav" id="nav-mobile"></ul>
      </div>
    </nav>
    `;

    this.afterRender();
    const elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems);
  }

  _navTemplate() {
    return `
      <li><a class="black-text" href="#home">HOME</a></li>
      <li><a class="black-text" href="#tips">TRAVEL TIPS</a></li>
      <li><a class="black-text" href="#story">STORIES</a></li>
      <li><a class="black-text" href="#about">AUTHOR</a></li>
    `
  }

  get navTpl() {
    return this._navTemplate()
  }

  afterRender() {
    const nav = this.querySelectorAll('.topnav, .sidenav')
    nav.forEach((elm) => { elm.innerHTML = this._navTemplate(); })
  }
}

customElements.define('app-bar', Appbar);
