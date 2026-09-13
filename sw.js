/* Retired service worker for the old Empower Compass URL.
   Unregisters itself and clears old caches so the redirect always wins. */
self.addEventListener('install', function(){ self.skipWaiting(); });
self.addEventListener('activate', function(e){
  e.waitUntil((async function(){
    try {
      var keys = await caches.keys();
      await Promise.all(keys.map(function(k){ return caches.delete(k); }));
      await self.registration.unregister();
      var clients = await self.clients.matchAll();
      clients.forEach(function(c){ c.navigate(c.url); });
    } catch(e){}
  })());
});
