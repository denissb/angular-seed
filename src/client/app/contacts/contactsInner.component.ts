import { Component, Input } from '@angular/core';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'ct-about-inner',
  template: 'Contacts Inner Component: {{message}}',
  styleUrls: ['contacts.component.css']
})
export class ContactsInnerComponent {
  @Input() message: string;

}
