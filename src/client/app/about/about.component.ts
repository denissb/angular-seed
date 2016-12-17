import { Component } from '@angular/core';

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

  constructor() {
    this.object = { message: 'I am about!' };
  }

  onKey(event: any) {
  	this.object = { message: event.target.value };
  }
}
