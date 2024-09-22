import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  targetNumber: number = Math.floor(Math.random() * 10) + 1;
  guess: number | null = null;
  message: string | null = null;

  checkGuess() {
    if (this.guess === this.targetNumber) {
      this.message = 'Parabéns! Você acertou aa!';
    } else {
      this.message = 'Tente novamente!';
    }
  }
}
