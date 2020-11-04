const Router = {
  'home': 'home.js',
  'about': 'about.js',
  'story': 'story.js',
  'tips': 'tips.js',
}

const goToPage = async () => {
  let page = window.location.hash.substr(1) || 'home';
  const sidenav = document.querySelector('.sidenav')
  const preload = document.querySelector('.progress');
  preload.style.display = 'unset';
  if (Router[page] === undefined) return notFound(preload);
  await loadPage(page, preload);
  M.Sidenav.getInstance(sidenav).close()
  preload.style.display = 'none';
}

const loadPage = async (page) => {
  const main = document.querySelector('main');
  try {
    main.innerHTML = `<${page}-page></${page}-page>`;
    await import('../pages/' + Router[page]).then((script) => { script; });
  } catch(e) {
    failedToLoad(e, main);
  }
}

const failedToLoad = (e, element) => {
  console.error('Terjadi Kesalahan Saat Memuat Halaman', e)
    element.innerHTML = `<section class="errorPage center-align">
      <div class="container">
        <h1>Bad Request</h1>
        <p>
          Terjadi Kesalahan saat memuat halaman
        </p>
      </div>
    </section>`
}

const notFound = (preload) => {
  preload.style.display = 'none';
  const main = document.querySelector('main');
  main.innerHTML = `<section class="errorPage center-align">
    <div class="container">
      <h1>404</h1>
      <p>
        Penerbangan ke halaman yang anda tuju tidak tersedia, Pastikan alamat sudah
        benar :)
      </p>
    </div>
  </section>`;
}

export default goToPage;