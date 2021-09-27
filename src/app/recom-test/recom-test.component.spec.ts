import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomTestComponent } from './recom-test.component';

describe('RecomTestComponent', () => {
  let component: RecomTestComponent;
  let fixture: ComponentFixture<RecomTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecomTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
