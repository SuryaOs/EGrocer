import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { RoutingComponents, AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { TextOnlyDirective } from 'src/app/shared/directives/text-only.directive';


@NgModule({
  declarations: [RoutingComponents, AuthComponent, TextOnlyDirective],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
  ]
})
export class AuthModule { }
