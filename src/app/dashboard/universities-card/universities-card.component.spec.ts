import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversitiesCardComponent } from './universities-card.component';

describe('UniversitiesCardComponent', () => {
  let component: UniversitiesCardComponent;
  let fixture: ComponentFixture<UniversitiesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniversitiesCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniversitiesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
