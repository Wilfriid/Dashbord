import { Component } from '@angular/core';
import { LogoComponent } from "../logo/logo.component";
import { FooterComponent } from "../footer/footer.component";
import { RegisterComponent } from "../register/register.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LogoComponent, FooterComponent, RegisterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
