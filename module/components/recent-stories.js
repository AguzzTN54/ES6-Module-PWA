import stories from "../data.js";

class Recent extends HTMLElement {
  connectedCallback() {
    let item = '';
    for(let i=0; i<2; i++) {
      const index = Math.floor(Math.random() * (stories.length -1))
      const { name, pic } = stories[index];
      item += `
      <div class="col s12 m6 hoverable">
        <div class="card z-depth-0">
          <div class="card-image">
            <img loading="lazy" alt="Belitung" src="./images/${pic}.webp">
          </div>
          <div class="card-content">
            ${name}
          </div>
        </div>
      </div>
      `
    }

    this.innerHTML = `<div class="story grey lighten-4" style="margin-top:50px;">
    <h5 class="jelytta center-align" style="padding-top: 20px;">Check Our Stories</h5>
    <div class="row center container" style="margin-bottom:0; padding-bottom:20px">
      ${item}
    </div>
  </div>`;
  }
}

customElements.define('recent-item', Recent);
