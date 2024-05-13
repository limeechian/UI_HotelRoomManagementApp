import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppComponent } from './app.component';
import { ClientsInfoComponent } from './clients-info/clients-info.component';
import { AppRoutingModule } from './app-routing.module';
//import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';


import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ClientsInfoComponent,
    //LoginComponent,
    NavigationComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule // Add FormsModule here
  ],
  providers: [/*{ provide: LocationStrategy, useClass: HashLocationStrategy }*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
