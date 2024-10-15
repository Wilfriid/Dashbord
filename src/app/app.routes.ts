import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SolutionComponent } from './solution/solution.component';
import { ContactComponent } from './contact/contact.component';
import { PricingComponent } from './pricing/pricing.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'solution', component: SolutionComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'register', component: RegisterComponent }
];
