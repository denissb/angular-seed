import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleLoaderDirective } from './loader.directive';

@NgModule({
  imports: [CommonModule],
  declarations: [ ModuleLoaderDirective],
  exports: [ ModuleLoaderDirective ]
})
export class LoaderModule {}
