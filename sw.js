const C="hyena-v3-20260910";
self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(C).then(c=>c.addAll(["./","./index.html","./manifest.webmanifest"])))});
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C).map(x=>caches.delete(x))))));
self.addEventListener("fetch",e=>e.respondWith(fetch(e.request).then(r=>{let z=r.clone();caches.open(C).then(c=>c.put(e.request,z));return r}).catch(()=>caches.match(e.request))));
