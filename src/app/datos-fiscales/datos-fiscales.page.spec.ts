import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DatosFiscalesPage } from './datos-fiscales.page';

describe('DatosFiscalesPage', () => {
  let component: DatosFiscalesPage;
  let fixture: ComponentFixture<DatosFiscalesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DatosFiscalesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
