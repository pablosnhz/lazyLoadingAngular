import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SocialsComponent } from './socials/socials.component';

const routes: Routes = [
  {
    path: '',
    component: SocialsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SocialsRoutingModule { }
