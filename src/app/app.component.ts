import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ClasesComponent } from './clases/clases.component';
import { SessionComponent } from './session/session.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, HeaderComponent, FooterComponent, NosotrosComponent, ClasesComponent, SessionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gym-angular';
}
