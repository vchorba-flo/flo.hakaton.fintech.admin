import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule,
  NbLayoutModule,
  NbSidebarModule,
  NbMenuModule,
  NbCardModule,
  NbUserModule, NbInputModule, NbButtonModule, NbTabsetModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { ShopsComponent } from './shops/shops.component';
import { UsersComponent } from './users/users.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AdminCardComponent } from './shared/components/admin-card/admin-card.component';
import { LoginComponent } from './login/login.component';
import { ShopStatisticsComponent } from './shared/components/shop-statistics/shop-statistics.component';
import { SortShopStatisticsPipe } from './shared/pipes/sort-shop-statistics.pipe';
import { CategoryStatisticsComponent } from './shared/components/category-statistics/category-statistics.component';
import { GeneralStatisticsComponent } from './shared/components/general-statistics/general-statistics.component';
import { FilterArrayByValuePipe } from './shared/pipes/filter-array-by-value.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    ShopsComponent,
    UsersComponent,
    StatisticsComponent,
    AdminCardComponent,
    LoginComponent,
    ShopStatisticsComponent,
    SortShopStatisticsPipe,
    CategoryStatisticsComponent,
    GeneralStatisticsComponent,
    FilterArrayByValuePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbCardModule,
    NbUserModule,
    NbInputModule,
    FormsModule,
    NbButtonModule,
    ReactiveFormsModule,
    NbTabsetModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
