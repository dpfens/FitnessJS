const CACHE_NAME = 'offline-html';
// This assumes /offline.html is a URL for your self-contained
// (no external images or styles) offline page.
const FALLBACK_HTML_URL = '/stopwatch/';
// Populate the cache with the offline HTML page when the
// service worker is installed.
self.addEventListener('install', async (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.add(FALLBACK_HTML_URL))
  );
});

workbox.navigationPreload.enable();

const networkOnly = new workbox.strategies.NetworkOnly();
const navigationHandler = async (params) => {
  console.log(params)
  try {
    // Attempt a network request.
    return await networkOnly.handle(params);
  } catch (error) {
    // If it fails, return the cached HTML.
    return caches.match(FALLBACK_HTML_URL, {
      cacheName: CACHE_NAME,
    });
  }
};

// Register this strategy to handle all navigations.
workbox.routing.registerRoute(
  new workbox.routing.NavigationRoute(navigationHandler)
);


// Cache Google Fonts with a stale-while-revalidate strategy, with
// a maximum number of entries.
workbox.routing.registerRoute(function(request) {
    return request.request.destination === 'font' || request.url.origin === 'https://fonts.googleapis.com' || request.url.origin === 'https://fonts.gstatic.com';
  },
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: 'google-fonts',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 20,
      })
    ]
  })
);


workbox.routing.registerRoute(function (request) {
        return request.request.destination === 'image' && request.url.origin !== 'https://google-analytics.com';
    },
    new workbox.strategies.CacheFirst({
      cacheName: 'images',
      plugins: [
        new workbox.cacheableResponse.CacheableResponsePlugin({
          statuses: [0, 200],
        }),
        new workbox.expiration.ExpirationPlugin({
          maxEntries: 60,
          maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
        }),
      ],
    }),
  );

// scripts, stylesheets, manifest files
workbox.routing.registerRoute(function(request) {
        return request.request.destination === 'manifest' || request.request.destination === 'script' || request.request.destination === 'style' || request.request.destination === 'document' || request.url.origin === 'https://storage.googleapis.com';
    },
    new workbox.strategies.StaleWhileRevalidate()
);


workbox.googleAnalytics.initialize();
