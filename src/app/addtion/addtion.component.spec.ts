import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtionComponent } from './addtion.component';

describe('AddtionComponent', () => {
  let component: AddtionComponent;
  let fixture: ComponentFixture<AddtionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddtionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
