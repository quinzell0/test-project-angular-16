import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { EmployeePageComponent } from './pages/employee-page/employee-page.component';
import { LayoutComponent } from './pages/layout/layout.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'employee',
  //   pathMatch: 'full',
  // },
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full',
      },
      {
        path: 'employee',
        component: EmployeePageComponent,
      },
    ],
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: '**',
    redirectTo: 'employee',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
