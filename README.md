# Lazy Loading

Para empezar vimos el uso de modulos unicos el cual vamos a tener que importar en el modulo principal para hacer uso de el y sus componentes u modulos usados en el modulo a exportar.

Ahora vimos lazy loading de forma perezosa (cuando la aplicacion es demasiado grande y sobrecarguen el inicio de la carga en la aplicacion), cree un modulo, un enrutado y componente aparte para que sea llamado solo cuando lo llame mediante el enrutado con un loadChildren loadChildren: () => import('./modules/pages/home/home.module').then(m => m.HomeModule) esperamos la promesa del modulo, los modulos dentro del componente creados no estan importados en el principal.

Tambien hice uso de cargas perezosas de cargas perezosas, que se almacenan una dentro de otras, anidadas, haciendo los ejercicios, me llevo tiempo encontrar el error el cual fue que tuve que agregar pathMatch: 'full', // solucion fue agregar el pathMatch, no me dirigia al auth/login o auth para gestionar las rutas y subrutas.

Hice uso de una navigation nav de Angular Material agregandole el router-outlet para asi darle estilo.
