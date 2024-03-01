# Lazy Loading

Para empezar vimos el uso de modulos unicos el cual vamos a tener que importar en el modulo principal para hacer uso de el y sus componentes u modulos usados en el modulo a exportar.

Ahora vimos lazy loading de forma perezosa (cuando la aplicacion es demasiado grande y sobrecarguen el inicio de la carga en la aplicacion), cree un modulo, un enrutado y componente aparte para que sea llamado solo cuando lo llame mediante el enrutado con un loadChildren loadChildren: () => import('./modules/pages/home/home.module').then(m => m.HomeModule) esperamos la promesa del modulo, los modulos dentro del componente creados no estan importados en el principal.

Tambien hice uso de cargas perezosas de cargas perezosas, que se almacenan una dentro de otras, anidadas, haciendo los ejercicios, me llevo tiempo encontrar el error el cual fue que tuve que agregar pathMatch: 'full', // solucion fue agregar el pathMatch, no me dirigia al auth/login o auth para gestionar las rutas y subrutas.

Hice uso de una navigation nav de Angular Material agregandole el router-outlet para asi darle estilo.

ESTRATEGIAS DE PRECARGA:
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
carga de rutas personalizada siempre y cuando reciba ciertos parametros y ademas eventos que lo lleve a cabo, esto carga de tener en su caso el data preload en true pero en uno o diversos modulos.
Creamos un servicio para hacer uso de un subject el cual vamos a emitir el valor de que si queremos o no que cargue una ruta en especifica o queremos que carguen todas. Como tambien accionar mediante click, hover, long press... cualquier etiqueta o uso de ese modulo, el accionarlo. Predecimos que accion va a tomar va a tomar el usuario y asi anticiparnos a cargar el modulo para una mejor navegacion.
Tomamos los datos del services para crear funciones y asi saber si queremos que no cargue ese modulo con el data preload true. Para activarlo en este caso hicimos uso de un mouseHover y un evento de click el cual va a cargar diversas cosas en base al OnDemand que carga un modulo en especifico siempre y cuando este el data preload true o podria traer todos los modulos por medio del '\*' el cual definimos en el ts.

Repasando y explicando con mis palabras como genere las estrategias de Precarga que tiene diversas funcionalidades (las llamamos dentro del routing principal con preloadingStrategy):
1 - Con el PreloadModules este preload nos va a permitir cargar todos los modulos a la vez sin la necesidad de entrar al modulo, una vez iniciada la pagina ya van a estar todos los modulos cargados, a pesar de hacer uso de data preload true o false.
2 - El :NoPreloading fuerza la carga perezosa, que quiere decir? que va a tener que navegar a esa ruta para que cargue.
3 - OPTIN STRATEGY sirva para que si dentro de data: preload esta en true, aparece precargado y en el caso de false, deja de ser lazyloading y carga una vez navegemos al modulo.
4 - En el caso de NETWORK AWARE STRATEGY podemos limitar modulos de carga en base a la conexion del usuario en el caso de ser inestable, sin tener internet o limitarlo solo para listar solo ciertas lista de conexiones ejemplo, solo para 4G y 5G, en el caso de ser inferior a estas solo se cargaran los modulos necesarios.
5 - ON DEMAND STRATEGY nos permite especificar que datos nos va a cargar en base a un evento, de click por ejemplo siempre y cuando tenga el data preload en true, asi poder cargar el modulo e hacer la interaccion cargando en el network.
