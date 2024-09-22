import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
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
