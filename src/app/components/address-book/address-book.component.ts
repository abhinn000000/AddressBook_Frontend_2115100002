import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.scss']
})
export class AddressBookComponent implements OnInit {
  isFormVisible = false;
  personList = [
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

  selectedPerson: any = null;

  constructor() { }

  ngOnInit(): void {
    // Initialization logic if needed
  }

  // Show Form
  showForm() {
    this.isFormVisible = true;
    this.selectedPerson = null; // Reset selected person when showing form for new person
  }

  // Hide Form
  hideForm() {
    this.isFormVisible = false;
  }

  // Add New Person
  addPerson(newPerson: any) {
    if (this.selectedPerson) {
      // Update existing person
      const index = this.personList.findIndex(person => person.id === this.selectedPerson.id);
      if (index !== -1) {
        this.personList[index] = newPerson;
      }
    } else {
      // Add new person
      this.personList.push(newPerson);
    }
    this.hideForm();
  }

  // Edit Person
  editPerson(person: any) {
    this.selectedPerson = { ...person }; // Clone the person object to avoid direct mutation
    this.isFormVisible = true;
  }

  // Delete Person
  deletePerson(id: number) {
    this.personList = this.personList.filter(person => person.id !== id);
  }
}
