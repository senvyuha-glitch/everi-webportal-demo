import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Beon } from './beon';

describe('Beon', () => {
  let component: Beon;
  let fixture: ComponentFixture<Beon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Beon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Beon);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
