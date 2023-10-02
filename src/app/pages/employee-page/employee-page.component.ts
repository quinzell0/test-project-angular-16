import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Employee } from 'src/app/models/employee';
import { EmployeeService } from 'src/app/services/employee-service';

@Component({
  selector: 'app-employee-page',
  templateUrl: './employee-page.component.html',
  styleUrls: ['./employee-page.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class EmployeePageComponent implements OnInit {
  employeeDialog: boolean = false;

  employees: Employee[] = [];

  employee!: Employee;

  selectedEmployees!: Employee[] | null;

  submitted: boolean = false;

  inputValue: string = '';

  maxDate: Date = new Date();

  status!: any[];

  group!: any[];

  first = 0;

  rows = 10;

  @ViewChild('bottomElement', { static: false })
  bottomElementRef!: ElementRef;
  constructor(
    private employeeService: EmployeeService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
  ) {}

  ngOnInit() {
    this.employeeService.getEmployees().then((data) => (this.employees = data));
    this.group = [
      { label: 'BNI Group', value: 'BNI Group' },
      { label: 'BCA Group', value: 'BCA Group' },
      { label: 'Mandiri Group', value: 'Mandiri Group' },
      { label: 'BSI Group', value: 'BSI Group' },
      { label: 'Permata Group', value: 'Permata Group' },
      { label: 'Danamon Group', value: 'Danamon Group' },
      { label: 'OCBC Group', value: 'OCBC Group' },
      { label: 'Maybank Group', value: 'Maybank Group' },
      { label: 'BTN Group', value: 'BTN Group' },
      { label: 'BRI Group', value: 'BRI Group' },
    ];
    this.status = [
      { label: 'Fixed', value: 'Fixed' },
      { label: 'Intern', value: 'Intern' },
    ];
  }

  openNew() {
    this.employee = {};
    this.submitted = false;
    this.employeeDialog = true;
  }

  onInputChanged(event: Event) {
    const target = event.target as HTMLInputElement;
    this.inputValue = target.value;
  }

  deleteSelectedEmployees() {
    console.log(this.selectedEmployees);
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected employee?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.employees = this.employees.filter((val) => !this.selectedEmployees?.includes(val));
        this.selectedEmployees = null;
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Employees Deleted',
          life: 3000,
        });
      },
    });
  }

  editEmployee(employee: Employee) {
    this.employee = { ...employee };
    this.employeeDialog = true;
  }

  public doFilter = (value: any) => {
    this.employees.filter = value.trim().toLocaleLowerCase();
  };

  deleteEmployee(employee: Employee) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + employee.firstName + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.employees = this.employees.filter((val) => val.id !== employee.id);
        this.employee = {};
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Employee Deleted', life: 3000 });
      },
    });
  }

  hideDialog() {
    this.employeeDialog = false;
    this.submitted = false;
  }

  clear(table: Table) {
    table.clear();
  }

  saveEmployee() {
    this.submitted = true;

    if (this.employee.firstName?.trim()) {
      console.log(this.employee);
      if (this.employee.id) {
        this.employees[this.findIndexById(this.employee.id)] = this.employee;
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Employee Updated', life: 3000 });
      } else {
        this.employee.id = this.createId();
        this.employees.push(this.employee);
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Employee Created', life: 3000 });
      }

      this.employees = [...this.employees];
      this.employeeDialog = false;
      this.employee = {};
    }
  }

  findIndexById(id: string): number {
    let index = -1;
    for (let i = 0; i < this.employees.length; i++) {
      if (this.employees[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  reset() {
    this.first = 0;
  }

  pageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }

  createId(): string {
    let id = '';
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }
}
