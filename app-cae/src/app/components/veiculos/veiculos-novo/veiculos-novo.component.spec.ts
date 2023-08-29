import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculosNovoComponent } from './veiculos-novo.component';

describe('VeiculosNovoComponent', () => {
  let component: VeiculosNovoComponent;
  let fixture: ComponentFixture<VeiculosNovoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VeiculosNovoComponent]
    });
    fixture = TestBed.createComponent(VeiculosNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
