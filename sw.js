const CACHE = 'gwaja-v1';
const ASSETS = ['/', '/map.html', '/location.html', '/images/cracker.png', '/images/mochi.png', '/images/croissant.png', '/images/papers.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});