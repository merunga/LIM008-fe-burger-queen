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
    "revision": "48850d70192e6d52af1f62a6345dc5b8"
  },
  {
    "url": "precache-manifest.4c63031c2e675904d019b36719873203.js",
    "revision": "4c63031c2e675904d019b36719873203"
  },
  {
    "url": "service-worker.js",
    "revision": "b039373d9d3a20f2bcae7b6e8cd78130"
  },
  {
    "url": "static/css/main.b445e420.chunk.css",
    "revision": "bac182b80372205ca74e2fa2c2c42b80"
  },
  {
    "url": "static/js/2.98c44840.chunk.js",
    "revision": "4147f9e7c936fbab0e684250cfd8779e"
  },
  {
    "url": "static/js/main.2d98eac3.chunk.js",
    "revision": "11545bdd7c30b5dba395f71349a79db8"
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