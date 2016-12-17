import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'ct-about',
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.css']
})
export class ContactsComponent {
  @Input() message: string;
}
