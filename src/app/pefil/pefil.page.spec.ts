import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PefilPage } from './pefil.page';

describe('PefilPage', () => {
  let component: PefilPage;
  let fixture: ComponentFixture<PefilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PefilPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PefilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
