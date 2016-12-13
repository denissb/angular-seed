import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import { ContactsInnerComponent } from './contactsInner.component';
import { ContactsRoutingModule } from './contacts-routing.module';

@NgModule({
  imports: [CommonModule, ContactsRoutingModule],
  declarations: [ContactsComponent, ContactsInnerComponent]
})
export class ContactsModule { }
