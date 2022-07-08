import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbSidebarModule, NbMenuModule, NbCardModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { ShopsComponent } from './shops/shops.component';
import { UsersComponent } from './users/users.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { AdminCardComponent } from './shared/components/admin-card/admin-card.component';

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    ShopsComponent,
    UsersComponent,
    StatisticsComponent,
    AdminCardComponent
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
