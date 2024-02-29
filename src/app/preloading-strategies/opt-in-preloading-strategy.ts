//  opt-in... autocompletar para cargar el preloadingStrategy

import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class OptInPreloadingStrategy implements PreloadingStrategy {

  /**
   *
   * @param route la ruta recibida que deberia cargar un modulo
   * @param load callback que carga el modulo
   * @returns ejecuta el callback de carga del modulo o devuelve un Observable vacio
   */
  preload(route: Route, load: ()=> Observable<any>): Observable<any> {
    // Evaluacion que determina:
    // 1- Si dentro de la ruta hay un valor llamado data
    // 2- Si dentro del valor "data" hay una clave llamada "preload" a "true"
    // entonces ejecuta el callback y carga el modulo si no lo tiene,
    // devuelve un Observable nulo para qe no se precargue el modulo.
    return route.data && route.data['preload'] ? load() : EMPTY;


  }
}
