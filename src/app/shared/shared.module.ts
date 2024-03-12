import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { MenuComponent } from './components/menu/menu.component';
import { ProductsRoutingModule } from '../products/products-routing.module';




@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule,
    ProductsRoutingModule,
  ],
  exports: [
    MenuComponent,
  ]
})
export class SharedModule { }
