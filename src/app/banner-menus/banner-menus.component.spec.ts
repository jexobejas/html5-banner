import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerMenusComponent } from './banner-menus.component';

describe('BannerMenusComponent', () => {
  let component: BannerMenusComponent;
  let fixture: ComponentFixture<BannerMenusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BannerMenusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BannerMenusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
