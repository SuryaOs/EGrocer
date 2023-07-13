import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { CartComponent } from "./components/cart/cart.component";
import { GridComponent } from './components/grid/grid.component';
import { TextOnlyDirective } from "./directives/text-only.directive";
import { ImageFallbackDirective } from "./directives/img-fallback.directive";


const components = [HeaderComponent, FooterComponent, CartComponent, GridComponent];
const directives = [TextOnlyDirective, ImageFallbackDirective]

@NgModule({
  declarations: [components, directives],
  imports: [CommonModule],
  exports: [components, directives],
})
export class SharedModule {}
