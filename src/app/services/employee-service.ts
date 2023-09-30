import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {
  getEmployeesData() {
    return [
      {
        id: '1',
        username: 'andrewtate',
        firstName: 'Andrew',
        lastName: 'Tate',
        email: 'andrewtate@gmail.com',
        birthDate: '1990-01-01',
        basicSalary: 30000000,
        status: 'Active',
        group: 'Mandiri Group',
        description: 'New Employee',
      },
      {
        id: '2',
        username: 'brandonSalim',
        firstName: 'Brandon',
        lastName: 'Salim',
        email: 'brandonsalim@gmail.com',
        birthDate: ' 1990-01-01',
        basicSalary: 30000000,
        status: 'Inactive',
        group: 'BCA Group',
        description: '10 years experience',
      },
      {
        id: '3',
        username: 'christinaLaurentia',
        firstName: 'Christina',
        lastName: 'Laurentia',
        email: 'christinalaurentia@gmail.com',
        birthDate: '1990-02-02',
        basicSalary: 30000000,
        status: 'Active',
        group: 'BNI Group',
        description: '5 years experience',
      },
      {
        id: '4',
        username: 'elenaGilbert',
        firstName: 'Elena',
        lastName: 'Gilbert',
        email: 'elenagilbert@gmail.com',
        birthDate: '1992-02-02',
        basicSalary: 30000000,
        status: 'Inactive',
        group: 'BSI Group',
        description: '20 years experience',
      },
    ];
  }

  getEmployees() {
    return Promise.resolve(this.getEmployeesData());
  }
}
