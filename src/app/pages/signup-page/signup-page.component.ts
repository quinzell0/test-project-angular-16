import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

declare var $: any;
@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss'],
})
export class SignupPageComponent {
  public form!: FormGroup;
  constructor(
    private fb: FormBuilder,
    private route: Router,
    private http: HttpClient,
  ) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      fullName: [''],
      email: [''],
      password: [''],
    });
  }

  signUp() {
    this.http.post<any>('http://localhost:3000/signup', this.form.value).subscribe(
      (res: any) => {
        alert('You are successfully registered');
        this.form.reset();
        this.route.navigate(['login']);
      },
      (err) => {
        alert('Something was wrong');
      },
    );
  }
}
