import { Injectable } from '@angular/core';

// predeterminamos si podemos cargar o no determinada ruta
import { Subject } from 'rxjs';

// creamos una clase de opciones de precarga
// va a servir para definir las opciones que debe tener una ruta para precargar o no un modulo.
export class PreloadingOptions{
  constructor( public routePath: string, public preload: boolean = true ){}
}

/**
 * SERVICIO PERSONALIZADO QUE SE VA A ENCARGAR DE PRECARGAR O NO UN MODULO DE LAS DIFERENTE RUTAS QUE
 * HAYA EN EL MODULO DE ENRUTADO Y ESTEN ESPECIFICADAS COMO CARGA PEREZOSA.
 *
 * La idea es que atraves de un evento del usuario en el dom( click, hover, long press...)
 * se inicie una precarga o no de modulos. por lo que conseguiriamos adelantarnos al usuario
 * precargando un modulo que predecimos que va a necesitar:
 *
 * con esto se puede conseguir una mejor experiencia de usuario, al evitar que la aplicacion se quede cargando
 * cuando tenga que de manera perezosa cargar un modulo de rutas nuevo.
 *
 * ? ejemplo:
 * si un usuario pasa el cursor por un elemento del menu al que claramente va a navegar
 * precargamos el modulo en segundo plano, para que la navegacion sea mas fluida y reducir tiempo de carga.
 *
 */

@Injectable({
  providedIn: 'root'
})
export class PreloadingService {

  // un subject es un tipo de Observable que permite emitir valores a quien este suscrito al mismo.
  // atraves del metodo .next(nuevoValor)
  private _subject = new Subject<PreloadingOptions>

  // cualquier subject puede ser tratado como un observable y es el que tenemos que hacer publico.
  // con el vamos a ofrecer las opciones de la ruta que desea ser precargada como un Observable.
  public options$ = this._subject.asObservable();

  constructor() { }

  /**
   * Metodo encargado de iniciar una evaluacion de precarga
   * @param routePath Ruta que se desea precargar
   */
  comenzarPrecarga(routePath: string){
    // creamos una opciones de precarga
    const opcionesPrecarga: PreloadingOptions = new PreloadingOptions(routePath, true)

    // emitimos las opciones que desean ser precargadas
    // esta informacion la va a escuchar la ESTRATEGIA DE PRECARGA
    // * ON-DEMAND-PREALOADING-STRATEGY
    // Para asi evaluar si debe o no precargar la ruta
    this._subject.next(opcionesPrecarga);
  }

}
