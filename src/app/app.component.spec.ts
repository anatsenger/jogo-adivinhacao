import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppComponent, FormsModule]
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

  it('deve exibir "Tente novamente!" quando o palpite for null', () => {
    component.guess = null;
    component.checkGuess();
    expect(component.message).toBe('Tente novamente!');
  });

  it('deve gerar um número alvo entre 1 e 10', () => {
    expect(component.targetNumber).toBeGreaterThanOrEqual(1);
    expect(component.targetNumber).toBeLessThanOrEqual(10);
  });

  it('deve inicializar com a mensagem null', () => {
    expect(component.message).toBeNull();
  });
});
