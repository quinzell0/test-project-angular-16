import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  name!: string;
  email!: string;

  constructor(private route: Router) {
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
    localStorage.clear();
    this.route.navigate(['/login']);
  }
}
