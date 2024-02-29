//  opt-in... autocompletar para cargar el NetworkAwarePreloadStrategy

import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, EMPTY } from 'rxjs';

// avoid typing issues for now
export declare var navigator: any;

@Injectable(
  {
    providedIn: 'root'
  }
)
export class NetworkAwarePreloadStrategy implements PreloadingStrategy {
  /**
   *
   * @param route la ruta recibida que deberia cargar un modulo
   * @param load callback que carga el modulo
   * @returns ejecuta el callback de carga del modulo o devuelve un Observable vacio
   */

  preload(route: Route, load: () => Observable<any>): Observable<any> {
    // comprueba que el usuario tiene buena conexion
    // 1- en caso de que devuelva que la funcion devuelva true --> carga el modulo
    // 2- en caso de que la funcion devuelva false --> no carga el modulo
    return this.hasGoodConnection() ? load() : EMPTY;
  }

  /**
   * Funcion que decide si un modulo carga o no
   * si el usuario tiene una conexion aceptable a internet
   * @returns { boolean } si puede o no cargar el modulo
   */

  hasGoodConnection(): boolean {
    // obtenemos la conexion del usuario
    const conn = navigator.connection;
    // en caso de tener conexion
    if (conn) {
      // comprobamos si el usuario tiene habilitado la reserva de datos (movil)
      // en ese caso no cargamos el modulo
      if (conn.saveData) {
        return false;
      }

      // lista de conexiones malas o no validad para precargar el modulo
      const avoidTheseConnections = ['slow-2g', '2g' /* , '3g', '4g' */];
      // obtenemos el tipo de conexion que tiene el usuario
      const effectiveType = conn.effectiveType || '';
      // comprobamos si la conexicion del usuario esta en la lista de conexiones a evitar
      // en caso de que sea asi no precargamos el modulo
      if (avoidTheseConnections.includes(effectiveType)) {
        return false;
      }
    }
    // si la conexion es estable y buena, se precarga el modulo
    return true;
  }
}
