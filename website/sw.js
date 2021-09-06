const VERSION = "v1";

// Self hace refencia al service worker es como this a los objetos

self.addEventListener('install', event =>{

     // Creamos un precache con una lista de recursos que queremos que mantenga en cache
        event.waitUntil(precache())
});

self.addEventListener('fetch', event => {
  // Extraemos la petición
    const request = event.request;
  // Solo queremos hacer algo con las peticiones que son GET
    if (request.method !== "GET"){
        return;
    }
  // actualizar el cache
    event.waitUntil(updateCache(request));

    if(request.headers.has('range')){
      return;
  }

  // Buscamos en el cache
  // event tiene otra función que se llamá responder con responseWith
  // vamos a responder con una respuesta cacheada

  event.respondWith(cachedResponse(request));
});

// Escribimos la función del precache
async function precache (){
  // Para trabajar con cache tenemos que trabajar con una parte
  // de la api del dom que se llamá caches, y lo que hay que hacer es abrir un cache en especifico
  // Creamos una instancia de cache que le va a pertenecer o se va a llamar v1,
  // podemos ponerle como queramos porque apenas estamos haciendo una instancia,
  // este cache regresa una promesa, por lo cual hay que esperarla

    const cache = await caches.open(VERSION);

    // Una vez tenemos la instancia de cache queremos añadir varios recursos
  // añadirmos todos nuestro recursos, los cuales son todos lo archivos que hemos escrito
  // Tenemos que regresarlo porque devuelve una promesa

    return cache.addAll([
        // Es muy importante asignarne este request
        // '/',
        // '/index.html',
        // '/assets/index.js',
        // '/assets/MediaPlayer.js',
        // '/assets/plugins/AutoPlay.js',
        // '/assets/plugins/AutoPause.ts',
        // '/assets/estilos.css',
        // '/assets/BigBuckBunny_512kb.mp4',

    ]);


}

// vamos a pasarle el request
async function cachedResponse (request){

  // Comenzamos abriendo el cache
    const cache = await caches.open(VERSION);

  // debemos checar si en el cache tenemos la contestanción al request
  // Para hacer eso vamos a guardalo en el response
  // Estamos preguntando al cache
  // ¿Ya tienes una copia que le corresponse al request?
    const response = await cache.match(request);

  // Como es posible que este response sea undefine, tenemos que contestar con lo que nos de la red
    return response || fetch(request);

}

async function updateCache(request) {
  const cache = await caches.open(VERSION);
  const response = await fetch(request);

  console.log(`Code: ${response.status} | Messsage: ${response.statusText}`)

  if (response.status === 206) {
    console.log('Respuesta parcial, no se actualiza caché ...')
  }else {
    cache.put(request, response.clone());
  }
  return cache;
}