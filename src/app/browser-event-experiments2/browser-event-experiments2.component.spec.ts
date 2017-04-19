import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserEventExperiments2Component } from './browser-event-experiments2.component';

describe('BrowserEventExperiments2Component', () => {
  let component: BrowserEventExperiments2Component;
  let fixture: ComponentFixture<BrowserEventExperiments2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowserEventExperiments2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserEventExperiments2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
