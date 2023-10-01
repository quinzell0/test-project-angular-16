import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  menu: MenuItem[] = [];
  actionMenu: MenuItem[] = [];

  companyList: any[] = ['Mandiri', 'BNI', 'BCA'];
  collapse: boolean = true;

  constructor() {
    this.menu = [
      {
        label: 'Employee',
        icon: 'pi pi-fw pi-users',
        routerLink: '/employee',
        routerLinkActiveOptions: 'active',
      },
    ];
  }

  ngOnInit(): void {}

  toggleCollapse(): void {
    this.collapse = !this.collapse;
    console.log(this.collapse);
  }
}
