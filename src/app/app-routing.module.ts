import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { KeyAdminComponent } from './components/key-admin/key-admin.component'

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "keyadmin",
    component: KeyAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
