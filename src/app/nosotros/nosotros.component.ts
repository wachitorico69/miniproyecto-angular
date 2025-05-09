import { Component } from '@angular/core';
import { IntegranteComponent } from '../integrante/integrante.component';

@Component({
  selector: 'app-nosotros',
  imports: [IntegranteComponent],
  templateUrl: './nosotros.component.html',
  styleUrl: './nosotros.component.css'
})
export class NosotrosComponent {
 image: string = 'assets/screamer.webp';

  personaSeleccionada: { nombre: string, descripcion: string, foto: string } | null = null;

  onPersonaSeleccionada(persona: { nombre: string, descripcion: string, foto: string }) {
    this.personaSeleccionada = persona;
  }
}
