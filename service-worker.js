const ASSETS_CACHE = 'test';
const assets = ['/', '/index.html', '/public/page-2.html', '/src/index.js', '/src/page-2.js', '/public/logo.png'];

self.addEventListener('install', event => {
	event.waitUntil(
		caches.open(ASSETS_CACHE).then(cache => {
			console.log('CACHE: ', cache);
			return cache.addAll(assets);
		})
	);
});

self.addEventListener('fetch', event => {
	event.respondWith(
		fetch(event.request)
			.then(response => {
				console.log('RESPONSE: ', response);
				// Si la solicitud es exitosa, clona la respuesta y la almacena en caché
				const responseClone = response.clone();
				caches.open(ASSETS_CACHE).then(cache => {
					cache.put(event.request, responseClone);
				});
				return response;
			})
			.catch(error => {
				// Si la solicitud falla (por ejemplo, sin conexión), devuelve el recurso de la caché
				return caches.match(event.request);
			})
	);
});
