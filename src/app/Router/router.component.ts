// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from '../add-user/add-user.component';
import { AppComponent } from '../app.component';

// Route Configuration
export const routes: Routes = [
  { path: 'AddUser', component: AddUserComponent },
  { path: 'App', component: AppComponent }
];

// Deprecated provide
// export const APP_ROUTER_PROVIDERS = [
//   provideRouter(routes)
// ];

export const RouterComponent: ModuleWithProviders = RouterModule.forRoot(routes);
