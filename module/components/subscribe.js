class Subscribe extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<section class="getInTouch lighten-3">
    <div class="container white-text row">
      <div class="col s12 m6">
        <h5>Get An Amazing Stories</h5>
      </div>
      <div class="col s12 m6 right-align">
        <button class="btn btn-large purple darken-1 z-depth-0">Subscribe</button>
      </div>
    </div>
  </section>`;
  }
}

customElements.define('sub-button', Subscribe);
