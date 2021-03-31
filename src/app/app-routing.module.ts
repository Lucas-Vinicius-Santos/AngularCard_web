import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "signup", component: SingupComponent},
  { path: "", redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
