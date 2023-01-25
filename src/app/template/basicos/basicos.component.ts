import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.css'],
})
export class BasicosComponent {
  public guardar(miFormulario: NgForm): void {
    console.log(miFormulario.value);
    miFormulario.resetForm({ precio: 0, existencias: 0 });
  }
}
