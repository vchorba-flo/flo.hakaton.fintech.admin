import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginSubjectService } from './core/services/login-subject.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'fintech-hackhaton';
  isLoggedAdmin: boolean = true;

  constructor(private router: Router, private login: LoginSubjectService) {
  }

  public ngOnInit(): void {
    this.login.isLogin.subscribe((logged) => {
      if (logged) {
        this.isLoggedAdmin = true;
        this.router.navigate(['statistics']);
        return
      }
      this.isLoggedAdmin = false;
      this.router.navigate(['login']);
    })
  }
}
