import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculoAlteracaoComponent } from './veiculo-alteracao.component';

describe('VeiculoAlteracaoComponent', () => {
  let component: VeiculoAlteracaoComponent;
  let fixture: ComponentFixture<VeiculoAlteracaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VeiculoAlteracaoComponent]
    });
    fixture = TestBed.createComponent(VeiculoAlteracaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
