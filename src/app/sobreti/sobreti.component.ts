import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface perfilForm {
  nombre: string;
  email: string;
  edad: string;
  sexo: string;
  peso: string;
  altura: string;
}

@Component({
  selector: 'app-sobreti',
  imports: [FormsModule],
  templateUrl: './sobreti.component.html',
  styleUrl: './sobreti.component.css'
})
export class SobretiComponent {
  perfil: perfilForm = {
    nombre: "",
    email: "",
    edad: "",
    sexo: "",
    peso: "",
    altura: ""
  };

  constructor() {}

  submit() {

  }
}

