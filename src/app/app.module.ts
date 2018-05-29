import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// services
import { AuthService } from './services/auth.service';

// components
import { HeaderComponent } from './components/header/header.component';

// views
import { HomeComponent } from './views/home/home.component';
import { AuthUrlComponent } from './views/auth-url/auth-url.component';
import { AuthLoginComponent } from './views/auth-login/auth-login.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AuthUrlComponent,
    AuthLoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
