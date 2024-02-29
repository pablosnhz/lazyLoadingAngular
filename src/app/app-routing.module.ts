import { NgModule } from '@angular/core';
import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { OptInPreloadingStrategy } from './preloading-strategies/opt-in-preloading-strategy';
import { NetworkAwarePreloadStrategy } from './preloading-strategies/network-aware-preloading-strategy';
import { OnDemandPreloadingStrategy } from './preloading-strategies/on-demand-preloading-strategy';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/pages/auth/auth.module').then(m => m.AuthModule),
    data: {
      preload: true // esto quiere decir que este modulo se va a precargar bajo estrategia de precarga OptIn / OnDemand
    }
  },
  {
    path: 'home',
    loadChildren: () => import('./modules/pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./modules/pages/profile/profile.module').then(m => m.ProfileModule),
    data: {
      preload: true // esto quiere decir que este modulo se va a precargar bajo estrategia de precarga OptIn
      // profile deja de ser lazyLoading, profile ya aparece cargado en cambio, auth, carga en el network
      // esa que esta funcion va a mantener el lazyLoading de todos los modulos, pero si hago uso de preload
      // quiere decir que ya a venir precargado, no olvidar colocar el preload en caso de usarlo en otro caso.
    }
  },
  {
    path: 'socials',
    loadChildren: () => import ('./modules/socials/socials.module').then(m => m.SocialsModule)
  },
  //siempre el 404 se pondra en el modulo de enrutado principal
  {
    path: '**',
    loadChildren: () => import('./modules/pages/not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      // 1 - PRECARGAR TODOS los modulos de las rutas --> Evitar carga perezosa
      // preloadingStrategy: PreloadAllModules
      // 2 - NO PRECARGAR NINGUN MODULO --> Forzar carga Perezosa
      // preloadingStrategy: NoPreloading

      // 3 - ESTRATEGIA PERSONALIZADA DE PRECARGA POR OPCIONES EN RUTAS
      // preloadingStrategy: OptInPreloadingStrategy
      // 4 - ESTRATEGIA PERSONALIZADA DE PRECARGAR POR CONEXION DE USUARIO A INTERNET
      // preloadingStrategy: NetworkAwarePreloadStrategy

      // 5 - ESTRATEGIA PERSONALIZADA: Precarga por Demanda iniciada por evento controlado
      // desde servicio PrealodingService
      preloadingStrategy: OnDemandPreloadingStrategy
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
