class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer class="page-footer purple darken-3">
    <div class="container">
      <div class="row">
        <div class="col l6 m8 s12">
          <h5 class="jelytta">Minggat Vacation</h5>
          <p>
            Liburan jangan dibuat bingung. Temukan inspirasi liburan dan
            cerita cerita terbaik untukmu. Bagikan juga cerita liburanmu
            kepada kami, setiap pengalamanmu akan jadi inspirasi bagi traveler
            yang lain
          </p>
        </div>
        <div class="col l6 m4 offset-12 s12 right-align">
          <h5>Link</h5>
          <ul></ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright purple darken-4">
      <div class="container">
        &copy; Made with ❤️ by AguzzTN54
        <span class="right">
          Inspired by
          <a
            href="http://indonesia.travel"
            target="_blank"
            rel="noopener noreferrer"
            class="pink-text text-lighten-3"
            >Indonesia.Travel</a
          >
        </span>
      </div>
    </div>
  </footer>`;

  this.afterRender();
  }

  afterRender() {
    const footerNav = this.querySelector('footer ul')
    footerNav.innerHTML = document.querySelector('app-bar').navTpl
      .replace(/black-text/g, 'link grey-text text-lighten-3');
  }
}

customElements.define('footer-content', Footer);
