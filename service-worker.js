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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "48cf80eadadd1a9d4e28e2b1f9e6926b"
  },
  {
    "url": "assets/css/4.styles.31d0a1c1.css",
    "revision": "fee272cdc389bfeec26e04ea601768fb"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.ddb061d5.js",
    "revision": "05d275d0a42424e2a72f634d06eff698"
  },
  {
    "url": "assets/js/1.05d989e0.js",
    "revision": "31ea00c46f3499694793d9e7eed649a4"
  },
  {
    "url": "assets/js/2.4e78d36a.js",
    "revision": "e2cf55d91a5fada18da93f38f14e0505"
  },
  {
    "url": "assets/js/3.4bb9afdb.js",
    "revision": "bce24f2dd53ab204630fac048ef4f17a"
  },
  {
    "url": "assets/js/app.56993ad5.js",
    "revision": "75c9cece0d6d0d837605a48bda6943ed"
  },
  {
    "url": "index.html",
    "revision": "55eca50b889b465b98981ec798db4656"
  },
  {
    "url": "install/index.html",
    "revision": "b0165022e236a560ede398afca950d04"
  },
  {
    "url": "joinus/index.html",
    "revision": "9a3b2fa7d3a668e96d900a4208de5980"
  },
  {
    "url": "support/index.html",
    "revision": "957635e1f1458ece1bf888ef178439b8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
