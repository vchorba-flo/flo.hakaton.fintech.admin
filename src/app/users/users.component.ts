import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiServiceService, User } from '../core/services/api-service.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users$: Observable<User[]>;

  userId: string;

  constructor(private apiService: ApiServiceService) { }

  ngOnInit(): void {
    this.users$ = this.apiService.getUsers();
  }

  public userBlockAction(user: User): void {
    this.apiService.userBlockAction(user);
  }
}
