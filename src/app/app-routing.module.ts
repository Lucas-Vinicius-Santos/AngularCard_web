import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { HomeComponent } from './home/home.component';
import { CreateCardComponent } from './create-card/create-card.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "signup", component: SingupComponent},
  { path: "home", component: HomeComponent },
  { path: "create-card", component: CreateCardComponent },
  { path: "", redirectTo: '/login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
