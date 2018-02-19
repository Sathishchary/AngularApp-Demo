import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleProgramComponent } from './style-program.component';

describe('StyleProgramComponent', () => {
  let component: StyleProgramComponent;
  let fixture: ComponentFixture<StyleProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
