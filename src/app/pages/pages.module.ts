import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal/principal.component';
import { HeaderComponent } from '../components/header/header.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    PrincipalComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    PrincipalComponent
  ]
})
export class PagesModule { }
