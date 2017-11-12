importScripts('workbox-sw.prod.v2.1.1.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */

workboxSW.router.registerRoute('/FitnessJS/(css|js|node_modules|tools)/(.*)',
  workboxSW.strategies.networkFirst({
    cacheName: 'application',
    cacheExpiration: {
      maxEntries: 50
    },
    cacheableResponse: {statuses: [0, 200]}
  })
);

workboxSW.router.registerRoute(/\.(?:png|gif|jpg|svg)$/,
  workboxSW.strategies.cacheFirst({
    cacheName: 'images-cache',
    cacheExpiration: {
      maxEntries: 50
    }
  })
);

var contentHandler = workboxSW.strategies.networkFirst({
  cacheName: 'content-cache',
  cacheExpiration: {
    maxEntries: 50
  }
});

workboxSW.router.registerRoute('/FitnessJS/*.html', args => {
  return contentHandler.handle(args);
});

const workboxSW = new self.WorkboxSW();
workboxSW.precache([]);
