import '../components/subscribe.js';
import stories from '../data.js';

class Home extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      ${this._slider()}
      ${this._tips()}
      <sub-button></sub-button>
      ${this._stories()}
    `
    this._afterRender();
  }

  _afterRender() {
    document.title = 'Minggat Vacation'
    const slider = this.querySelector('.slider')
    M.Slider.init(slider, {
      indicators: false,
      height: 500,
      transition: 500,
      interval: 6000,
    })
  }

  _stories() {
    let items = '';
    for(let i=0; i<4; i++) {
      const { name, pic } = stories[i]
      items += `
      <div class="col s12 m6">
        <div class="card z-depth-0">
          <div class="card-image">
            <a href="./images/${pic}.webp" class="lazy-load replace">
              <img src="./images/thumb/${pic}.jpg" class="preview" alt="${name}" />
            </a>
            <span class="card-title">${name}</span>
          </div>
        </div>
      </div>
      `;
    }
    return `<section class="picked container">
    <h4 class="jelytta center">Editor Picks</h4>
    <div class="row center">
      ${items}
    </div>
    <div class="center">
      <a
        href="#story"
        class="link btn btn-large z-depth-0 pink darken-1"
        style="margin-bottom: 30px;"
        >More Stories</a
      >
    </div>
  </section>`;
  }

  _slider() {
    return `
    <section class="slider">
      <ul class="slides">
        <li>
          <img src="./images/errorpage.webp" alt="Images" />
          <div class="caption center-align">
            <h2>Take Your Dream Vacation</h2>
            <h5 class="light white-text hide-on-small-only">
              Jangan hanya berangan angan untuk liburan, rencanakan sekarang
            </h5>
            <a href="#tips" class="link btn btn-large pink darken-1 z-depth-0"
              >Learn More</a
            >
          </div>
        </li>
        <li>
          <img src="./images/covid19_banner_web.webp" alt="Image"/>
          <div class="caption left-align">
            <h2>Enjoy Your Vacation</h2>
            <h5 class="light white-text hide-on-small-only">
              Nikmati liburanmu, lepaskan segala penat bebanmu
            </h5>
            <a href="#tips" class="link btn btn-large blue lighten-1 z-depth-0"
              >Learn More</a
            >
          </div>
        </li>
        <li>
          <img src="./images/rajaampatthumb.webp" alt="image" />
          <div class="caption right-align">
            <h2>Get Your Trip Ideas</h2>
            <h5 class="light white-text hide-on-small-only">
              Temukan ide ide liburan yang menarik untuk kamu lakukan.
            </h5>
            <a href="#tips" class="link btn btn-large pink lighten-1 z-depth-0"
              >Learn More</a
            >
          </div>
        </li>
      </ul>
    </section>`;
  }

  _tips() {
    return `<section class="things container" style="margin-top: 50px;">
    <h4 class="jelytta center">Things You Should Know</h4>
  
    <div class="row">
      <div class="col s12 m4">
        <div class="card-panel hoverable">
          <div class="card-image center">
            <img
              src="./images/informasi-umum.png"
              alt="Informasi Umum"
              style="max-width: 40%;"
            />
          </div>
          <h4>Informasi</h4>
          <p>
            Sebelum berangkat periksa dulu informasi umum dari daerah tujuan. ini
            bisa mencegah kamu melakukan hal yang kurang disenangi oleh warga
            setempat
          </p>
        </div>
      </div>
      <div class="col s12 m4">
        <div class="card-panel hoverable">
          <div class="card-image center">
            <img
              loading="lazy"
              src="./images/cuaca.png"
              alt="cuaca"
              style="max-width: 40%;"
            />
          </div>
          <h4>Cuaca</h4>
          <p>
            Periksa juga ramalan cuaca di daerah yang akan kamu kunjungi.
            terkadang perbedaan cuaca bisa saja terjadi apalagi ke tempat yang
            jauh dari daerahmu
          </p>
        </div>
      </div>
      <div class="col s12 m4">
        <div class="card-panel hoverable">
          <div class="card-image center">
            <img
              loading="lazy"
              src="./images/transportasi.png"
              alt="Transportasi"
              style="max-width: 40%;"
            />
          </div>
          <h4>Transportasi</h4>
          <p>
            Cek Juga Transportasi yang apa yang bisa kamu naiki di sana. ini akan
            mempermudah dalam merencanakan perjalanan liburanmuu.
          </p>
        </div>
      </div>
    </div>
  </section>
  `
  }
}

customElements.define('home-page', Home);
