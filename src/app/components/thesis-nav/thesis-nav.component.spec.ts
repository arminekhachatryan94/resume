import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThesisNavComponent } from './thesis-nav.component';

describe('ThesisNavComponent', () => {
  let component: ThesisNavComponent;
  let fixture: ComponentFixture<ThesisNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThesisNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThesisNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
