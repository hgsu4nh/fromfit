const CACHE = "formfit-v3";
self.addEventListener("install", e => { self.skipWaiting(); e.waitUntil(caches.open(CACHE).then(c => c.addAll(["./"]))); });
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", e => {
  if (e.request.method === "GET") e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});