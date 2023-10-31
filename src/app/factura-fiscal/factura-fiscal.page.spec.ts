import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FacturaFiscalPage } from './factura-fiscal.page';

describe('FacturaFiscalPage', () => {
  let component: FacturaFiscalPage;
  let fixture: ComponentFixture<FacturaFiscalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FacturaFiscalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
