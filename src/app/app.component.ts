import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { OperacionesComponent } from './operaciones/operaciones.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, OperacionesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Calculadora Básica';
}
