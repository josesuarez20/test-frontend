import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TableApuestaComponent } from './table-apuesta/table-apuesta.component';
import { InfoNewsComponent } from './info-news/info-news.component';
import { SubmenuComponent } from './submenu/submenu.component';



@NgModule({
  declarations: [
    HeaderComponent,
    TableApuestaComponent,
    InfoNewsComponent,
    SubmenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    TableApuestaComponent,
    InfoNewsComponent,
    SubmenuComponent
  ] 
})
export class ComponentsModule { }
