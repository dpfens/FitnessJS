/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.0.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/balance.svg",
    "revision": "63b7376cebfddec31254f0f0cfa5a8b9"
  },
  {
    "url": "assets/cardio.svg",
    "revision": "cb8c1e835dd3ac4f9d9a078ec060dddc"
  },
  {
    "url": "assets/counter.jpg",
    "revision": "d54e44985e36d1801e570a73a7fd9a49"
  },
  {
    "url": "assets/flexibility.svg",
    "revision": "91cc6a74689dfd2c1c68de797b869229"
  },
  {
    "url": "assets/logo.svg",
    "revision": "13dd7bfdce7667794f6c6d33eda4124c"
  },
  {
    "url": "assets/panorama.jpg",
    "revision": "6aad97ee3d8257d8129c300080dba0f0"
  },
  {
    "url": "assets/shoes.jpg",
    "revision": "d068e6c0a6ad6c945385936f6d2a98dc"
  },
  {
    "url": "assets/small-logo.svg",
    "revision": "a4a5bf1b204e3f8b8ff693e567f9d519"
  },
  {
    "url": "assets/soup.jpg",
    "revision": "ccc722b1791c3e81b4a9d3f1b8db5e95"
  },
  {
    "url": "assets/strength.svg",
    "revision": "beff4f50f1ab49e857712371bb2870d0"
  },
  {
    "url": "assets/track-rubber.jpg",
    "revision": "0a5589c318dfd2c63f92b272682fda23"
  },
  {
    "url": "assets/track.jpg",
    "revision": "ccc84117e8dda96f1afdcc781921b860"
  },
  {
    "url": "assets/vegetables.jpg",
    "revision": "19ad4fcbef32d7d53f098f92c13e265d"
  },
  {
    "url": "assets/wh-dirt-road.jpg",
    "revision": "8d8c96281853936fba8b63f6aa7c1d4a"
  },
  {
    "url": "css/input.css",
    "revision": "19916186a5d34f89f2cf0c3a7d3f2a25"
  },
  {
    "url": "css/material-components-web.css",
    "revision": "3858238f428aa3f79eddd05249d6fd02"
  },
  {
    "url": "css/material-components-web.min.css",
    "revision": "b0d54e5f6a3194359cc21ab417729013"
  },
  {
    "url": "css/prism.css",
    "revision": "f668387b6506477ccea351782383f34b"
  },
  {
    "url": "css/style.css",
    "revision": "b7b632c185a44cf61e4d1127da9409dc"
  },
  {
    "url": "index.html",
    "revision": "4e42930b5e07e2e3547146825cae1cb3"
  },
  {
    "url": "js/home.js",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "js/layout.js",
    "revision": "d4a02d07ebda92f39e32198487301fe3"
  },
  {
    "url": "js/libs/Chart.js",
    "revision": "6291e8c397ab74899d0ca2d0a4f302ea"
  },
  {
    "url": "js/libs/Chart.min.js",
    "revision": "3614a310ec3347334e61c4af9b8bddfb"
  },
  {
    "url": "js/libs/fitness.js",
    "revision": "fd0b04f73da5e4661af823923dc5d945"
  },
  {
    "url": "js/libs/fitness.min.js",
    "revision": "0e95ff08fcbc95e17461e0f133247311"
  },
  {
    "url": "js/libs/material-components-web.js",
    "revision": "1cdd44e84dfa5ee096842f328697ed5d"
  },
  {
    "url": "js/libs/material-components-web.min.js",
    "revision": "8f99b36559b8bedf7b0badc6f7ed1286"
  },
  {
    "url": "js/libs/prism.js",
    "revision": "ce6ed728abefe1350bcd3c02c6d51b11"
  },
  {
    "url": "js/libs/vue-router.js",
    "revision": "234f749f0a06276c3b040ca42f29f52e"
  },
  {
    "url": "js/libs/vue.js",
    "revision": "0275c553ddfc5aaa89475a73d0e955bd"
  },
  {
    "url": "js/libs/vue.min.js",
    "revision": "bb8e8e17a90060a52b955ac4715f9f6a"
  },
  {
    "url": "js/tools/preferences.js",
    "revision": "e95222ae6a0cbc99c0f456101550c2dc"
  },
  {
    "url": "js/tools/storage.js",
    "revision": "df16a04c56647474bf7d5f30f41a1c21"
  },
  {
    "url": "license.txt",
    "revision": "cf4edbefd775c1bf19fdeff2ddb6f38e"
  },
  {
    "url": "package-lock.json",
    "revision": "3c0f72a8327f8ce31452aeb2a064e6b9"
  },
  {
    "url": "privacy-terms.html",
    "revision": "bf84115349e12e938da638e86b30cb13"
  },
  {
    "url": "robots.txt",
    "revision": "3f43dc75b911f016a8774e24f71ffcf0"
  },
  {
    "url": "sitemap.xml",
    "revision": "13ee283da2051c080dd3ebcad9f6d9ec"
  },
  {
    "url": "tools/calories/css/style.css",
    "revision": "bf2e8eac7456469d536b3c019c66bcc1"
  },
  {
    "url": "tools/calories/index.html",
    "revision": "5a91950e2af08e35f090c9c03c548c5a"
  },
  {
    "url": "tools/calories/js/converter.js",
    "revision": "c6c83982a1db68adc11e77a0143fb5a6"
  },
  {
    "url": "tools/calories/js/layout.js",
    "revision": "c7f36944fa09675139abc77b09cc6c69"
  },
  {
    "url": "tools/cardio-performance/css/style.css",
    "revision": "557d4eede8b104b2002d6399d63f97ef"
  },
  {
    "url": "tools/cardio-performance/index.html",
    "revision": "53ba826d9bf6fbb1ee530fa26742dac3"
  },
  {
    "url": "tools/cardio-performance/js/converter.js",
    "revision": "1259320d5a6b72801fe4b5e3cbda37e4"
  },
  {
    "url": "tools/cardio-performance/js/layout.js",
    "revision": "a86ecda2ba47c1a2d29f650f5db81003"
  },
  {
    "url": "tools/composition/css/style.css",
    "revision": "91cb02f9352b8164c522148acbd50fc4"
  },
  {
    "url": "tools/composition/index.html",
    "revision": "78e9fb16cd189693996eeaa7a4c1ae81"
  },
  {
    "url": "tools/composition/js/converter.js",
    "revision": "dd0fc862b7e21717175661e6b7e1a4a9"
  },
  {
    "url": "tools/composition/js/layout.js",
    "revision": "507eaad6d4d5fd343830791bbc4fda9f"
  },
  {
    "url": "tools/rep-max/css/style.css",
    "revision": "557d4eede8b104b2002d6399d63f97ef"
  },
  {
    "url": "tools/rep-max/index.html",
    "revision": "951e4f01eccd641cf7a9d3253bc28ae2"
  },
  {
    "url": "tools/rep-max/js/converter.js",
    "revision": "0375e6170c1d8023d0adfba57be8a089"
  },
  {
    "url": "tools/rep-max/js/layout.js",
    "revision": "d31783b521d63dac158d5a364b87b82c"
  },
  {
    "url": "workbox-config.js",
    "revision": "6d9ac8d532d4c7e83626240eeee61391"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.googleAnalytics.initialize();
