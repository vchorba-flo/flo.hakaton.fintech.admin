import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NbComponentOrCustomStatus } from '@nebular/theme';
import { LoginSubjectService } from '../core/services/login-subject.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public form: FormGroup = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
  })

  public inputStatus: NbComponentOrCustomStatus = 'basic';

  constructor(private router: Router, private loginSubject: LoginSubjectService) { }

  ngOnInit(): void {
    this.loginSubject.logout();
    this.form.valueChanges.subscribe(() => {
      this.inputStatus = 'basic'
    })
  }

  public login(): void {
    if (this.form.value.login === 'admin' && this.form.value.password === 'admin') {
      this.loginSubject.login()
      return
    }
    this.inputStatus = 'danger'
  }
}
