import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSignupComponent } from './lista-signup.component';

describe('ListaSignupComponent', () => {
  let component: ListaSignupComponent;
  let fixture: ComponentFixture<ListaSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
