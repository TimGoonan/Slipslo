import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LongtermvoteComponent } from './longtermvote.component';

describe('LongtermvoteComponent', () => {
  let component: LongtermvoteComponent;
  let fixture: ComponentFixture<LongtermvoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LongtermvoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LongtermvoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
