  import { Component } from '@angular/core';
  import { FormsModule, NgForm } from '@angular/forms';
  import Swal from 'sweetalert2'

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

    submit(form: NgForm) {
      localStorage.setItem(this.perfil.email, JSON.stringify(this.perfil));

      Swal.fire({
        title: 'Buen trabajo!',
        text: 'Recibirás tu perfil personalizado pronto en tu correo electrónico',
        icon: 'success',
        confirmButtonText: 'Aceptar',
        confirmButtonColor: 'black',
        color: 'black',
        iconColor: 'black'
      })
      
      form.resetForm(); //para limpiar el form
    }
  }

