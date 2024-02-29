# Lazy Loading

Para empezar vimos el uso de modulos unicos el cual vamos a tener que importar en el modulo principal para hacer uso de el y sus componentes u modulos usados en el modulo a exportar.

Ahora vimos lazy loading de forma perezosa (cuando la aplicacion es demasiado grande y sobrecarguen el inicio de la carga en la aplicacion), cree un modulo, un enrutado y componente aparte para que sea llamado solo cuando lo llame mediante el enrutado con un loadChildren loadChildren: () => import('./modules/pages/home/home.module').then(m => m.HomeModule) esperamos la promesa del modulo, los modulos dentro del componente creados no estan importados en el principal.

Tambien hice uso de cargas perezosas de cargas perezosas, que se almacenan una dentro de otras, anidadas, haciendo los ejercicios, me llevo tiempo encontrar el error el cual fue que tuve que agregar pathMatch: 'full', // solucion fue agregar el pathMatch, no me dirigia al auth/login o auth para gestionar las rutas y subrutas.

Hice uso de una navigation nav de Angular Material agregandole el router-outlet para asi darle estilo.

Estrategias de Precarga:
Antes nos permitia cargar de manera perezosa nuestros modulos, pero ahora tenemos la precarga que carga todos.

OPT IN PREALODING STRATEGY que lo aplicamos de modo ejemplo en Profile
data: preload true
Esto quiere decir que este modulo se va a precargar bajo estrategia de precarga OptIn, "profile" deja de ser lazyLoading, profile ya aparece cargado con el OptIn, auth, carga en el network una vez seleccionado el componente, sigue siendo lazy porque no le implemente el data: preload.
Esta funcion va a mantener el lazyLoading de todos los modulos, pero si hago uso de preload quiere decir que ya a venir precargado.
El que creamos hay que importarlo en el provider del modulo principal.

NETWORK AWARE PRELOAD STRATEGY depende de la buena conexion que tenga el usuario
esto nos va a dar margen para que una vez el usuario ingresa va percibir la funcion si su conexion es apta como para seguir adelante para navegar, podria elegir su tipo que puede variar entre varias referencias 2G 3G 4G... etc
Puede traer todos los modulos si, es porque se hace la prueba si los modulos son aptos dentro de la buena conexion, si tengo conexion inestable quiza solo me carga uno.
NO OLVIDAR COLOCAR EL PRELOAD EN CASO DE USARLO EN OTRO CASO.

ON DEMAND PRELOADING STRATEGY
