import {
	Component, 
	OnInit, 
	SystemJsNgModuleLoader, 
	Input, 
	NgModuleFactory} from '@angular/core';

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
  	this.ngModuleFactoryLoader.load(this.modulePath).then((ngModule) => {
  		console.log(ngModule);

  		//NgModuleFactory.create(injector);
  	});
  }
}
