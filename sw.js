// Empty service worker - overrides GitHub Pages default SW
// This prevents DataCloneError when making requests to Supabase

self.addEventListener('install', function(e) {
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  e.waitUntil(clients.claim());
});

// Pass ALL fetch requests through without any interception
self.addEventListener('fetch', function(e) {
  e.respondWith(fetch(e.request));
});
