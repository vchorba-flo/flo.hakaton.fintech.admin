import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ShopsComponent } from './shops/shops.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path: 'shops', component: ShopsComponent,
  },
  {
    path: 'users', component: UsersComponent,
  },
  {
    path: 'statistics', component: StatisticsComponent,
  },
  {
    path: 'login', component: LoginComponent,
  },
  {
    path: '', redirectTo: 'statistics', pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
