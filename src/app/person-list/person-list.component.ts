import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
    selector: 'app-person-list',
    templateUrl: './person-list.component.html',
    styleUrls: ['./person-list.component.scss']
})
export class PersonListComponent {
    @Output() addNew = new EventEmitter<void>();
    @Output() editPerson = new EventEmitter<any>();
    @Output() deletePerson = new EventEmitter<number>();
    @Input() personList: any[] = [
        {
            id: 1,
            fullName: 'Varaza Mishra',
            address: 'Marve Road, Malad (west)',
            city: 'Mumbai',
            state: 'Maharashtra',
            zipCode: '400064',
            phoneNumber: '02228017752'
        },
        {
            id: 2,
            fullName: 'Trishna Bhalla',
            address: '77 ,rd Flr. , Desai chambers',
            city: 'Mumbai',
            state: 'Maharashtra',
            zipCode: '400003',
            phoneNumber: '02223420607'
        }
    ];

    // Edit Person
    onEdit(person: any) {
      this.editPerson.emit(person);
  }

  // Delete Person
  onDelete(id: number) {
      this.deletePerson.emit(id);
  }

    // Emit Event for Showing Form
    showForm() {
        this.addNew.emit();
    }
}
