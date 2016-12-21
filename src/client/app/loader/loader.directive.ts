import {
  Directive,
  Component,
  OnInit,
  OnChanges,
  Input,
  ViewContainerRef,
  ReflectiveInjector,
  Compiler,
  ModuleWithComponentFactories,
  ComponentRef,
  DoCheck } from '@angular/core';

declare var require: any;

@Directive({
  selector: 'module-loader'
})
export class ModuleLoaderDirective implements OnInit, DoCheck {
  @Input() modulePath: string;
  @Input() componentName: string;
  @Input() componentAttributes: any;

  private cmpRef: ComponentRef<Component | Directive>;
  private previousComponentAttributes: Object;

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
    // This needs to be refactored + supper innificient
    if(JSON.stringify(this.componentAttributes) !== JSON.stringify(this.previousComponentAttributes)) {
      // inputSettings changed
      // some logic here to react to the change
      for (let key in this.componentAttributes) {
        if(this.cmpRef) {
          let instance = <any> this.cmpRef.instance;
          instance[key] = this.componentAttributes[key];
        }
      }
      //why strigify then parse???
      this.previousComponentAttributes = JSON.parse(JSON.stringify(this.componentAttributes));
    }
  }

  private loadAndCompile(path: string): void {
    let [module, exportName] = path.split('#');

    if (exportName === undefined) {
      exportName = 'default';
    }

    System.import(module)
      .then((module: any) => module[exportName])
      .then((type: any) => {
        this.compiler.compileModuleAndAllComponentsAsync(type)
          .then(({componentFactories}) => {
            console.log(componentFactories);

            const compFactory = componentFactories.find(x => x.componentType.name === this.componentName);

            const injector = ReflectiveInjector.fromResolvedProviders([], this.vcRef.parentInjector);
            //const cmpRef = this.vcRef.createComponent(compFactory, 0, injector, []);
            this.cmpRef = this.vcRef.createComponent(compFactory, 0, injector, []);
            let instance = <any> this.cmpRef.instance;

            for (let key in this.componentAttributes) {
              instance[key] = this.componentAttributes[key];
            }
          });
      });
  }
}
