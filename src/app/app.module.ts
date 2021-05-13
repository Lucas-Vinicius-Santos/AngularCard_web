import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularTiltModule } from 'angular-tilt';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms/'

// Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';

// Components
import { LoginComponent } from './login/login.component';
import { SingupComponent } from './singup/singup.component';
import { HomeComponent } from './home/home.component';
import { CreateCardComponent } from './create-card/create-card.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

// Services
import { CardApiService } from './services/card-api.service';
import { RemoveCardComponent } from './remove-card/remove-card.component';
import { EditCardComponent } from './edit-card/edit-card.component'
 
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SingupComponent,
    HomeComponent,
    CreateCardComponent,
    NavBarComponent,
    RemoveCardComponent,
    EditCardComponent
  ],
  imports: [
    AngularTiltModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatFormFieldModule,
    MatIconModule,
    MatSliderModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [CardApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
