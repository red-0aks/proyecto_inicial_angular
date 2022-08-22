import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { JuegosComponent } from './components/juegos/juegos.component';
import { HttpClientModule } from '@angular/common/http';
import { OrderListPipe } from './pipes/order-list.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from '@auth0/auth0-angular';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormularioComponent } from './components/juegos/formulario/formulario.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { CarritoComponent } from './components/carrito/carrito.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    Pagina404Component,
    JuegosComponent,
    OrderListPipe,
    LoginComponent,
    ProfileComponent,
    FormularioComponent,
    NosotrosComponent,
    CarritoComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,    
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    AuthModule.forRoot(environment.auth0),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
