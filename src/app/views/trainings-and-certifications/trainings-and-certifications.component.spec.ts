import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingsAndCertificationsComponent } from './trainings-and-certifications.component';

describe('TrainingsAndCertificationsComponent', () => {
  let component: TrainingsAndCertificationsComponent;
  let fixture: ComponentFixture<TrainingsAndCertificationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingsAndCertificationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingsAndCertificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
