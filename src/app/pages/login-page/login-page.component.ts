import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  public form!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private route: Router,
    private http: HttpClient,
  ) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      email: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
    });
  }

  login() {
    this.http.get<any>('http://localhost:3000/signup').subscribe(
      (res) => {
        const user = res.find((a: any) => {
          return a.email === this.form.value.email && a.password === this.form.value.password;
        });
        if (user) {
          // console.log(res);
          alert('You are successfully logged in');
          // localStorage.setItem('fullName', res.fullName);
          // localStorage.setItem('email', res.email);
          this.form.reset();
          this.route.navigate(['employee']);
        } else {
          alert('User not found');
        }
      },
      (err) => {
        console.log('nih error', err);
        alert('Something was wrong');
      },
    );
  }
}
