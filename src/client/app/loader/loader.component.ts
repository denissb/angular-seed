import {
  Directive,
	OnInit,
  OnChanges,
	Input,
  ViewContainerRef,
  ReflectiveInjector,
  Compiler} from '@angular/core';

declare var require: any;

@Directive({
  selector: 'module-loader'
})
export class ModuleLoaderComponent implements OnInit, OnChanges {
  @Input() modulePath: string;
  @Input() componentName: string;
  @Input() componentAttributes: any;

  private cmpRef: ComponentRef;

  constructor(private vcRef: ViewContainerRef,
              private compiler: Compiler) {

  }

  ngOnInit() {
    this.loadAndCompile(this.modulePath);
  }

  /*ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }*/

  ngDoCheck() {
    if(JSON.stringify(this.componentAttributes) !== JSON.stringify(this.previousComponentAttributes)) {
      // inputSettings changed
      // some logic here to react to the change
      for (let key in this.componentAttributes) {
        if(this.cmpRef) {
          this.cmpRef.instance[key] = this.componentAttributes[key];
        }
      }
      this.previousComponentAttributes = JSON.parse(JSON.stringify(this.componentAttributes));
    }
  }

  private loadAndCompile(path: string): Promise<ModuleWithComponentFactories<any>> {
    let [module, exportName] = path.split('#');
    if (exportName === undefined) {
      exportName = 'default';
    }

    return System.import(module)
      .then((module: any) => module[exportName])
      .then((type: any) => {
        this.compiler.compileModuleAndAllComponentsAsync(type)
          .then(({moduleFactory, componentFactories}) => {
            const compFactory = componentFactories.find(x => x.componentType.name === this.componentName);
            const injector = ReflectiveInjector.fromResolvedProviders([], this.vcRef.parentInjector);
            //const cmpRef = this.vcRef.createComponent(compFactory, 0, injector, []);
            this.cmpRef = this.vcRef.createComponent(compFactory, 0, injector, []);
            console.log(this.cmpRef);
            for (let key in this.componentAttributes) {
              this.cmpRef.instance[key] = this.componentAttributes[key];
            }
          });
      });
  }
}
