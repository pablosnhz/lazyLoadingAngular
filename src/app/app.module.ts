import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './components/nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

// PREALODING
import { OptInPreloadingStrategy } from './preloading-strategies/opt-in-preloading-strategy';
import { NetworkAwarePreloadStrategy } from './preloading-strategies/network-aware-preloading-strategy';
import { OnDemandPreloadingStrategy } from './preloading-strategies/on-demand-preloading-strategy';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    // habiamos importado el authFormsModule aca
    // pero lo sacamos porque lo importamos en el otro
    // AuthFormsModule
  ],
  providers: [
    // Disponemos las estrategias de precarga... Importamos el OPT-IN-PREALODING-STRATEGY.TS
    OptInPreloadingStrategy,
    NetworkAwarePreloadStrategy,
    OnDemandPreloadingStrategy
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
