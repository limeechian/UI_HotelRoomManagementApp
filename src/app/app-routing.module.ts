import { NgModule } from '@angular/core';
//import { LoginComponent } from './login/login.component';
import { ClientsInfoComponent } from './clients-info/clients-info.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  //{ path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login
  //{ path: 'login', component: LoginComponent }, // Login page
  //{ path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/clients-info', pathMatch: 'full' },
  { path: 'clients-info', component: ClientsInfoComponent }, // Clients Info page
  //{ path: '', redirectTo: '/login', pathMatch: 'full' }
  // Add other routes if needed
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]

})
export class AppRoutingModule { }
