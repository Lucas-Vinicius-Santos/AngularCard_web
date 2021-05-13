import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { HomeComponent } from './home/home.component';
import { CreateCardComponent } from './create-card/create-card.component';
import { RemoveCardComponent } from './remove-card/remove-card.component';
import { EditCardComponent } from './edit-card/edit-card.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "signup", component: SingupComponent},
  { path: "home", component: HomeComponent },
  { path: "create-card", component: CreateCardComponent },
  { path: "remove-card", component: RemoveCardComponent },
  { path: "edit-card", component: EditCardComponent },
  { path: "", redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
