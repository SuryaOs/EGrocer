import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrationComponent } from './components/register/registration.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { hideHeaderFooter: true } },
  { path: 'register', component: RegistrationComponent, data: { hideHeaderFooter: true } },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
export const RoutingComponents = [LoginComponent, RegistrationComponent]
