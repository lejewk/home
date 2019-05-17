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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

importScripts(
<<<<<<< HEAD
  "/home/precache-manifest.4f72cfbb86d4d2ed6b948ac15c82c056.js"
=======
  "/precache-manifest.4b7e841854408d5f884ba1bfbc3d7000.js"
>>>>>>> a63328e03fffc81eacb4078f10ec93e33ac0c718
);

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

<<<<<<< HEAD
workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/home/index.html"), {
=======
workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL("/index.html"), {
>>>>>>> a63328e03fffc81eacb4078f10ec93e33ac0c718
  
  blacklist: [/^\/_/,/\/[^\/]+\.[^\/]+$/],
});
