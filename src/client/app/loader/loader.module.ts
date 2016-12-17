import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleLoaderDirective } from './loader.directive';
import { SystemJsNgModuleLoader } from '@angular/core';

@NgModule({
  imports: [CommonModule],
  providers: [
  	SystemJsNgModuleLoader
  ],
  declarations: [ ModuleLoaderDirective],
  exports: [ ModuleLoaderDirective ]
})
export class LoaderModule {}
