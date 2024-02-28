import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialsRoutingModule } from './socials-routing.module';import { SocialsComponent } from './socials/socials.component';
;


@NgModule({
  declarations: [
    SocialsComponent
  ],
  imports: [
    CommonModule,
    SocialsRoutingModule
  ]
})
export class SocialsModule { }
