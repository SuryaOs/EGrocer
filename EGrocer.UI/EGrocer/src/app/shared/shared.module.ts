import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CartComponent } from "./components/cart/cart.component";
import { GridComponent } from './components/grid/grid.component';

import {MatTableModule} from '@angular/material/table'

const components = [HeaderComponent, FooterComponent, CartComponent, GridComponent];
const materialModule = [MatTableModule];

@NgModule({
  declarations: [components],
  imports: [CommonModule, materialModule],
  exports: [components],
})
export class SharedModule {}
