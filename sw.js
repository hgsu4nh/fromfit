const CACHE_NAME = "formfit-v1";

self.addEventListener("install", event => {
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener("fetch", event => {
  // Keep normal network behavior so GitHub Pages and MediaPipe CDN
  // resources continue to work without stale cached game files.
  if (event.request.method !== "GET") return;
});
