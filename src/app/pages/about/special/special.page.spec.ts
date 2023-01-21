import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialPage } from './special.page';

describe('SpecialPage', () => {
  let component: SpecialPage;
  let fixture: ComponentFixture<SpecialPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialPage ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
