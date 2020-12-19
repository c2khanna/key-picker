import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {KeyAdminComponent} from './key-admin/key-admin.component'

const routes: Routes = [{
  path: "keyadmin",
  component: KeyAdminComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
