import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  providers: [MessageService, ConfirmationService],
})
export class LayoutComponent implements OnInit {
  menu: MenuItem[] = [];
  actionMenu: MenuItem[] = [];

  companyList: any[] = ['Mandiri', 'BNI', 'BCA'];
  collapse: boolean = true;

  name!: string;
  email!: string;

  constructor(
    private route: Router,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
  ) {
    this.menu = [
      {
        label: 'Employee',
        icon: 'pi pi-fw pi-users',
        routerLink: '/employee',
        routerLinkActiveOptions: 'active',
      },
    ];
  }

  ngOnInit(): void {
    this.name = localStorage.getItem('fullName')!;
    this.email = localStorage.getItem('email')!;
  }

  toggleCollapse(): void {
    this.collapse = !this.collapse;
    // console.log(this.collapse);
  }

  logout() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to logout ?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Logout Success', life: 3000 });
      },
    });
    localStorage.clear();
    this.route.navigate(['/login']);
  }
}
