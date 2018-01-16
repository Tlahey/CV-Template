import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoverLatterComponent } from './cover-latter.component';

describe('CoverLatterComponent', () => {
  let component: CoverLatterComponent;
  let fixture: ComponentFixture<CoverLatterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoverLatterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoverLatterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
