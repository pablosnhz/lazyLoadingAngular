import { Component, inject } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AsyncPipe, NgIf } from '@angular/common';
import { PreloadingService } from 'src/app/services/preloading-service.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {
  private breakpointObserver = inject(BreakpointObserver);

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

    constructor( private preloadingService: PreloadingService ){}

    cargarModulo(route: string){
      this.preloadingService.comenzarPrecarga(route);
    }

    //  todos los modulos
    cargarTodosLosModulos(){
      this.preloadingService.comenzarPrecarga('*');
    }
}
