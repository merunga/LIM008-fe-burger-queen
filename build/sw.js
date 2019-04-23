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
    "revision": "4851c94418b8e6372cb6ba2895e178d2"
  },
  {
    "url": "precache-manifest.4cfb833218128c0ccde940e0bf16470e.js",
    "revision": "4cfb833218128c0ccde940e0bf16470e"
  },
  {
    "url": "service-worker.js",
    "revision": "dc8feaf849e394eb9a33fdaf7f98f295"
  },
  {
    "url": "static/css/main.7210ee57.chunk.css",
    "revision": "ca9e11d1a12629cde65c846e1912a818"
  },
  {
    "url": "static/js/2.98c44840.chunk.js",
    "revision": "4147f9e7c936fbab0e684250cfd8779e"
  },
  {
    "url": "static/js/main.b5314f9c.chunk.js",
    "revision": "365931672a1b490c7ea574811fe6c9ca"
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