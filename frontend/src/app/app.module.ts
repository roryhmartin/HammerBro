import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ArmyBuilderComponent } from './components/army-builder/army-builder.component';
import { DarkAngelsComponent } from './components/army-builder/dark-angels/dark-angels.component';
import { HttpClientModule } from '@angular/common/http';
import { DarkAngelsUsersListComponent } from './components/army-builder/dark-angels/dark-angels-users-list/dark-angels-users-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ArmyBuilderComponent,
    DarkAngelsComponent,
    DarkAngelsUsersListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
