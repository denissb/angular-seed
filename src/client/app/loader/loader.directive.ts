import {
  Directive,
  Component,
  OnInit,
  OnChanges,
  Input,
  ViewContainerRef,
  ReflectiveInjector,
  Compiler,
  ComponentRef,
  SimpleChanges,
  SystemJsNgModuleLoader, 
  NgModuleFactory,
  Type } from '@angular/core';

declare var require: any;

@Directive({
  selector: 'module-loader'
})
export class ModuleLoaderDirective implements OnInit, OnChanges {
  @Input() modulePath: string;
  @Input() componentName: string;
  @Input() componentAttributes: any;

  private cmpRef: ComponentRef<Component | Directive>;
  private previousComponentAttributes: Object;

  constructor(private loader: SystemJsNgModuleLoader,
              private vcRef: ViewContainerRef,
              private compiler: Compiler) {
  }

  ngOnInit() {
    this.loadAndCompile(this.modulePath);
  }

  ngOnChanges(changes:SimpleChanges) {
    for (let propName in changes) {
      let change = changes[propName];

      for (let key in change.currentValue) {
        if(this.cmpRef) {
          const instance = <any> this.cmpRef.instance;
          instance[key] = change.currentValue[key];
        }
      }  
    }
  }

  // ngDoCheck() {
  //   const newAttributes = JSON.stringify(this.componentAttributes)

  //   // This needs to be refactored + supper innificient
  //   if (newAttributes !== JSON.stringify(this.previousComponentAttributes)) {
  //     // inputSettings changed
  //     // some logic here to react to the change
  //     for (let key in this.componentAttributes) {
  //       if(this.cmpRef) {
  //         const instance = <any> this.cmpRef.instance;
  //         instance[key] = this.componentAttributes[key];
  //       }
  //     }

  //     this.previousComponentAttributes = JSON.parse(newAttributes);
  //   }
  // }

  private loadAndCompile(path: string): void {
    this.loader.load(path).then((module: NgModuleFactory<any>) => {
      return module.moduleType;
    }).then((type: Type<any>) => {
        this.compiler.compileModuleAndAllComponentsAsync(type)
          .then(({componentFactories}) => {
            const compFactory = componentFactories.find(x => x.componentType.name === this.componentName);
            const injector = ReflectiveInjector.fromResolvedProviders([], this.vcRef.parentInjector);
            this.cmpRef = this.vcRef.createComponent(compFactory, 0, injector, []);
            const instance = <any> this.cmpRef.instance;

            for (let key in this.componentAttributes) {
              if (this.componentAttributes.hasOwnProperty(key)) {
                instance[key] = this.componentAttributes[key];
              }
            }
          });
      });
  }
}
