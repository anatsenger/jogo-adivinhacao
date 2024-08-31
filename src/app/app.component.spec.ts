import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppComponent, FormsModule] // Use imports para componentes standalone
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('deve criar o componente', () => {
    expect(component).toBeTruthy();
  });

  it('deve verificar o palpite corretamente', () => {
    component.targetNumber = 5;
    component.guess = 5;
    component.checkGuess();
    expect(component.message).toBe('Parabéns! Você acertou!');

    component.guess = 3;
    component.checkGuess();
    expect(component.message).toBe('Tente novamente!');
  });
});
