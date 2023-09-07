//Update cache names any time any of the cached files change.
const CACHE_NAME = 'static-cache-v5';

//Add list of files to cache here.
const FILES_TO_CACHE = [
    'index.html',
    'offline.html',
    'iphone.html',
    'support.html',
    'confirmation.html'
    // 'tailwind.config.js',
    // 'js/scripts.js',
    // 'css/normalize.css',
    // 'css/styles.css',
    // 'images/accessories.png',
    // 'images/airpods.png',
    // 'images/apple-small.png',
    // 'images/carousel1.png',
    // 'images/carousel2.png',
    // 'images/carousel3.png',
    // 'images/carousel4.png',
    // 'entertainment.png',
    // 'ip14cropped.jpeg',
    // 'ip14procropped.jpeg',
    // 'ipad.png',
    // 'iphone.png',
    // 'mac.png',
    // 'support.png',
    // 'tvhome.png',
    // 'vision.png',
    // 'watch.png'
];

self.addEventListener('install', (evt) => {
    console.log('[ServiceWorker] Install');
    // Precache static resources here.
    evt.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            console.log('[ServiceWorker] Pre-caching offline page');
            return cache.addAll(FILES_TO_CACHE);
        })
    );
    self.skipWaiting();
});

self.addEventListener('activate', (evt) => {
    console.log('[ServiceWorker] Activate');
    //Remove previous cached data from disk.
    evt.waitUntil(
        caches.keys().then((keyList) => {
            return Promise.all(keyList.map((key) => {
                if (key !== CACHE_NAME) {
                    console.log('[ServiceWorker] Removing old cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );
    self.clients.claim();
});

self.addEventListener('fetch', (evt) => {
    console.log('[ServiceWorker] Fetch', evt.request.url);
    //Add fetch event handler here.
    if (evt.request.mode !== 'navigate') {
        // Not a page navigation, bail.
        return;
    }
    evt.respondWith(
        fetch(evt.request).catch(() => {
            return caches.open(CACHE_NAME).then((cache) => {
                return cache.match('/Cochenille/PointNClick/offline.html');
            });
        })
    );
});