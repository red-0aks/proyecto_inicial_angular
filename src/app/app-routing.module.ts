import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { EmpleadosComponent } from './components/empleados/empleados.component';
import { FormularioComponent } from './components/empleados/formulario/formulario.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { ProfileComponent } from './components/profile/profile.component';
import { StarwarsComponent } from './components/starwars/starwars.component';
import { UnderConstructionComponent } from './components/under-construction/under-construction.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'home', redirectTo: '',
  },
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: 'profile', component: ProfileComponent,
  },
  {
    path: 'starwars', component: StarwarsComponent,
  },
  {
    path: 'empleados', component: EmpleadosComponent, canActivate: [AuthGuard]
  },
  {
    path: 'empleados/formulario', component: FormularioComponent, canActivate: [AuthGuard]
  },
  {
    path: 'empleados/formulario/:id', component:FormularioComponent, canActivate: [AuthGuard]
  },
  {
    path: 'nosotros', component: NosotrosComponent,
  },
  {
    path: '404', component: Pagina404Component,
  },
  {
    path: '**', redirectTo: '404',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
