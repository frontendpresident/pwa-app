const cacheName = "pwa-v1";
const dinamycCacheName = "pwa-v1-dinamyc";
const filesToCache = [
  "/static/js/bundle.js",
  "/static/js/0.chunk.js",
  "/static/js/main.chunk.js",
  "/index.html",
  "/",
  "/favicon.ico",
];

const cacheFirst = async (request) => {
  const cache = await caches.open(cacheName);
  const response = await cache.match(request);
  return response ?? (await fetch(request));
};

const networkFirst = async (request) => {
  const cache = await caches.open(dinamycCacheName);
  try {
    const response = await fetch(request);
    await cache.put(request, response.clone());
    return response;
  } catch (error) {
    return await cache.match(request);
  }
};

self.addEventListener("install", async (event) => {
  const cache = await caches.open(cacheName);
  await cache.addAll(filesToCache);
});

self.addEventListener("activate", async (event) => {
  const keys = await caches.keys();

  await Promise.all(
    keys
      .filter((key) => key !== cacheName)
      .filter((key) => key !== dinamycCacheName)
      .map((key) => caches.delete(key))
  );
});

self.addEventListener("fetch", async (event) => {
  const { request } = event;
  const url = new URL(request.url);

  if (url.origin === location.origin) {
    event.respondWith(cacheFirst(request));
  } else {
    event.respondWith(networkFirst(request));
  }
});
