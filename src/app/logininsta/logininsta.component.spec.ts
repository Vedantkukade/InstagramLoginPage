import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogininstaComponent } from './logininsta.component';

describe('LogininstaComponent', () => {
  let component: LogininstaComponent;
  let fixture: ComponentFixture<LogininstaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogininstaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogininstaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
