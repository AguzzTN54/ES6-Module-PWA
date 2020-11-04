import '../components/subscribe.js';
import stories from "../data.js";

class Story extends HTMLElement {
  connectedCallback() {
    this.render();
    this.afterRender();
  }

  afterRender() {
    document.title = 'Trip Stories'
    let storyItem = '';
    stories.forEach((story) => {
      storyItem += `<div class="col s6 l3 m4">
      <div class="card z-depth-0">
        <div class="card-image">
          <a href="./images/${story.pic}.webp" class="lazy-load replace">
            <img src="./images/thumb/${story.pic}.jpg" alt="${story.name}" class="preview">
            <span class="card-title">${story.name}</span>
            </a>
        </div>
      </div>
    </div>`;
    })
    this.querySelector('.stories').innerHTML = storyItem
    M.Parallax.init(this.querySelector('.parallax'));
  }

  render() {
    this.innerHTML = `
    <section class="gallery">
      <div class="parallax-container" style="height: 200px; margin-bottom: 50px;">
        <div class="parallax">
          <img loading="lazy" src="./images/rajaampatthumb.webp" alt="banner" />
        </div>
        <h2 class="container valign-center white-text">GALLERY</h2>
      </div>

      <div class="container">
        <h4 class="jelytta center-align">Our Stories</h4>
        <div class="row center stories"></div>
      </div>
    </section>

    <sub-button></sub-button>
    `
  }
}

customElements.define('story-page', Story);
