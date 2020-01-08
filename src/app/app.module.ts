import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// rutas

import { AppRoutingModule } from './app-routing.module';

// modulos

import { PagesModule } from './pages/pages.module';

// componentes

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

// temporal
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    PagesModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
