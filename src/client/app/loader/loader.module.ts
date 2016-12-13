import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleLoaderComponent } from './loader.component';


@NgModule({
  imports: [CommonModule],
  declarations: [ ModuleLoaderComponent],
  exports: [ ModuleLoaderComponent ]
})
export class LoaderModule {}
