// service-worker.js
self.addEventListener('install', function(e) {
  alert('[ServiceWorker] Install');
});

self.addEventListener('activate', function(e) {
  alert('[ServiceWorker] Activate');
});

// 現状では、この処理を書かないとService Workerが有効と判定されないようです
self.addEventListener('fetch', function(event) {
  alert('[ServiceWorker] Fetch');
});
