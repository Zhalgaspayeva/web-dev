import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CompanyComponent} from "./company/company.component";

export const routes: Routes = [
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'home/:id', component: CompanyComponent },
];