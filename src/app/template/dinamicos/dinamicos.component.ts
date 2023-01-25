import { Component } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favoritos[];
}
interface Favoritos {
  id: number;
  nombre: string;
}
@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styleUrls: ['./dinamicos.component.css'],
})
export class DinamicosComponent {
  nuevoJuego: string = '';
  persona: Persona = {
    nombre: 'Ervin',
    favoritos: [
      {
        id: 1,
        nombre: 'Metal Gear',
      },
      {
        id: 2,
        nombre: 'DeathStranding',
      },
    ],
  };

  public eliminar(index: number): void {
    this.persona.favoritos.splice(index, 1);
  }
  public agregarJuego(): void {
    const nuevoJuegoFavorito: Favoritos = {
      id: this.persona.favoritos.length + 1,
      nombre: this.nuevoJuego,
    };
    this.persona.favoritos.push({ ...nuevoJuegoFavorito });
    this.nuevoJuego = '';
    console.log(this.persona.favoritos);
  }
  public guardar(): void {
    console.log('Vamos a guardar el formulario');
  }
}
