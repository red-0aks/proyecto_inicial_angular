import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { JuegosComponent } from './components/juegos/juegos.component';
import { FormularioComponent } from './components/juegos/formulario/formulario.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { CarritoComponent } from './components/carrito/carrito.component';

const routes: Routes = [
  {
    path: '', component : HomeComponent,
  },
  {
    path: 'home', redirectTo: '',
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'nosotros', component: NosotrosComponent
  },
  {
    path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]
  },
  {
    path: 'juegos', component: JuegosComponent, canActivate: [AuthGuard]
  },
  {
    path: 'carrito', component: CarritoComponent
  },
  {
    path: 'juegos/form', component: FormularioComponent, canActivate: [AuthGuard]
  },
  {
    path: 'juegos/form/:id', component: FormularioComponent, canActivate: [AuthGuard]
  },
  {
    path: '404', component: Pagina404Component
  },
  {
    path: '**', redirectTo : '404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
