import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecyleComponent } from './lifecyle.component';

describe('LifecyleComponent', () => {
  let component: LifecyleComponent;
  let fixture: ComponentFixture<LifecyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LifecyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
