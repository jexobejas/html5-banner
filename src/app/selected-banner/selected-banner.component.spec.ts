import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedBannerComponent } from './selected-banner.component';

describe('SelectedBannerComponent', () => {
  let component: SelectedBannerComponent;
  let fixture: ComponentFixture<SelectedBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectedBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
