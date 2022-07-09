import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginSubjectService {

  private subject: Subject<boolean> = new Subject();

  constructor() { }

  get isLogin() {
    return this.subject.asObservable();
  }

  public login() {
    this.subject.next(true);
  }

  public logout() {
    this.subject.next(false);
  }
}
