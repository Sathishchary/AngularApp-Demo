import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceexampleComponent } from './serviceexample.component';

describe('ServiceexampleComponent', () => {
  let component: ServiceexampleComponent;
  let fixture: ComponentFixture<ServiceexampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceexampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
