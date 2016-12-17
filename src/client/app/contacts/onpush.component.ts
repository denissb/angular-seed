import { Component, Input, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'ct-onpush',
  template: '<h1>OnPush {{ valueStream | async }}</h1>',
  styleUrls: ['contacts.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class OnPushComponent extends OnInit {
  @Input() valueStream:Observable<any>;

  ngOnInit() {
  	console.log(this.valueStream);
  }
}
