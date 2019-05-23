import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypecompteComponent } from './typecompte.component';

describe('TypecompteComponent', () => {
  let component: TypecompteComponent;
  let fixture: ComponentFixture<TypecompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypecompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypecompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
