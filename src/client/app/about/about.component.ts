import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-about',
  templateUrl: 'about.component.html',
  styleUrls: ['about.component.css']
})
export class AboutComponent {

  object: any;
  streamObject: any;
  
  source = new Subject<string>();
  observable = this.source.asObservable();

  constructor() {
    this.object = { message: 'I am about!' };
    this.streamObject = {
    	counterStream: this.observable
    }
  }

  onKey(event: any) {
  	this.object = { message: event.target.value };
  	this.source.next(event.target.value);
  }
}
