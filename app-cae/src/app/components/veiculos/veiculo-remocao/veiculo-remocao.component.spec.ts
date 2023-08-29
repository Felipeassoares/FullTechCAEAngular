import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculoRemocaoComponent } from './veiculo-remocao.component';

describe('VeiculoRemocaoComponent', () => {
  let component: VeiculoRemocaoComponent;
  let fixture: ComponentFixture<VeiculoRemocaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VeiculoRemocaoComponent]
    });
    fixture = TestBed.createComponent(VeiculoRemocaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
