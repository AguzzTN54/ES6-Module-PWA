const CACHE_NAME = 'Minggat-v3';

const urlsToCache = [ './', './index.html' ];

const revalidate = {
  async init(request) {
    const response = await caches.match(request, { cacheName: CACHE_NAME});
    const fetch = this._fetchRequest(request);
    if (response) {
      console.log(request.url, "Dari Cache");
      return response;
    }
    console.log(request.url, "Dari Server");
    return fetch;
  },

  async _fetchRequest(request) {
    if (request.cache === 'only-if-cached' && request.mode !== 'same-origin') return
    const response = await fetch(request);
    if (!response || response.status !== 200) return response;
    const cache = await caches.open(CACHE_NAME);
    cache.add(request);
    return response;
  },
};

const activateCache = async () => {
  clients.claim();
  const cacheNames = await caches.keys();
  cacheNames.filter((name) => name !== CACHE_NAME)
    .map((filteredName) => caches.delete(filteredName))
}

self.addEventListener('install', (event) => {
    self.skipWaiting()
    event.waitUntil(async () => (await caches.open(CACHE_NAME)).addAll(urlsToCache));
});

self.addEventListener('activate', async (event) => {
  event.waitUntil(activateCache());
});

self.addEventListener('fetch', (event) => {
  event.respondWith(revalidate.init(event.request));
});