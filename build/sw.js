if ('function' === typeof importScripts) {
    importScripts(
      'https://storage.googleapis.com/workbox-cdn/releases/3.5.0/workbox-sw.js'
    );
    /* global workbox */
    if (workbox) {
      console.log('Workbox is loaded');
   
      /* injection point for manifest files.  */
      workbox.precaching.precacheAndRoute([
  {
    "url": "index.html",
    "revision": "e854120134266f2b0292013569d609a7"
  },
  {
    "url": "precache-manifest.f6cde833489ea2c5a7aef1e30a54c8a1.js",
    "revision": "f6cde833489ea2c5a7aef1e30a54c8a1"
  },
  {
    "url": "service-worker.js",
    "revision": "d87677a57b198bf02e445a09d8c32947"
  },
  {
    "url": "static/css/main.ab440d54.chunk.css",
    "revision": "1a55af15c1b2dccae5e37c7d9c3012b5"
  },
  {
    "url": "static/js/2.98c44840.chunk.js",
    "revision": "4147f9e7c936fbab0e684250cfd8779e"
  },
  {
    "url": "static/js/main.c6c22650.chunk.js",
    "revision": "4e97ff718b1429fb98a2ee83caae7012"
  },
  {
    "url": "static/js/runtime~main.a8a9905a.js",
    "revision": "238c9148d722c1b6291779bd879837a1"
  }
]);
   
  /* custom cache rules*/
  workbox.routing.registerNavigationRoute('/index.html', {
        blacklist: [/^\/_/, /\/[^\/]+\.[^\/]+$/],
      });
   
  workbox.routing.registerRoute(
        /\.(?:png|gif|jpg|jpeg)$/,
        workbox.strategies.cacheFirst({
          cacheName: 'images',
          plugins: [
            new workbox.expiration.Plugin({
              maxEntries: 60,
              maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
            }),
          ],
        })
      );
   
  } else {
      console.log('Workbox could not be loaded. No Offline support');
    }
  }