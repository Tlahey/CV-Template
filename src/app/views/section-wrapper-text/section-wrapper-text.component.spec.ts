import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionWrapperTextComponent } from './section-wrapper-text.component';

describe('SectionWrapperTextComponent', () => {
  let component: SectionWrapperTextComponent;
  let fixture: ComponentFixture<SectionWrapperTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionWrapperTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionWrapperTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
