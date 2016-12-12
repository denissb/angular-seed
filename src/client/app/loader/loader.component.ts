import {Component, OnInit, SystemJsNgModuleLoader, Input} from '@angular/core';

declare var require: any;

@Component({
  selector: 'module-loader',
  template: ''
})
export class ModuleLoaderComponent implements OnInit {
  @Input()
  modulePath: string;

  constructor(private ngModuleFactoryLoader: SystemJsNgModuleLoader) {}

  ngOnInit() {
  }
}
