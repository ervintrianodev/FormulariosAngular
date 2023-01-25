import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css'],
})
export class DinamicosComponent {
  miFormulario: FormGroup = this.formBuilder.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    favoritos: this.formBuilder.array([
      ['Smash', Validators.required],
      ['Death Stranding', Validators.required],
    ]),
  });

  nuevoFavorito = this.formBuilder.control('', Validators.required);
  constructor(private formBuilder: FormBuilder) {}

  public agregarFavorito(): void {
    if (this.nuevoFavorito.invalid) return;
    //this.favoritosArray.push(new FormControl(this.nuevoFavorito.value, Validator.required));
    this.favoritosArray.push(
      this.formBuilder.control(this.nuevoFavorito.value, Validators.required)
    );
    this.nuevoFavorito.reset();
  }

  public borrarFavorito(indexFormControlName: number) {
    this.favoritosArray.removeAt(indexFormControlName);
  }
  public guardar(): void {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log('Vamos a guardar el formulario');
  }

  public campoNoValido(campo: string): boolean | null {
    return (
      this.miFormulario.controls[campo].errors &&
      this.miFormulario.controls[campo].touched
    );
  }

  get favoritosArray() {
    return this.miFormulario.get('favoritos') as FormArray;
  }
}
