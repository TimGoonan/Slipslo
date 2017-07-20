import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShorttermvoteComponent } from './shorttermvote.component';

describe('ShorttermvoteComponent', () => {
  let component: ShorttermvoteComponent;
  let fixture: ComponentFixture<ShorttermvoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShorttermvoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShorttermvoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
