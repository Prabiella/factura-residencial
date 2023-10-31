import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstadoCuentaPage } from './estado-cuenta.page';

describe('EstadoCuentaPage', () => {
  let component: EstadoCuentaPage;
  let fixture: ComponentFixture<EstadoCuentaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EstadoCuentaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
