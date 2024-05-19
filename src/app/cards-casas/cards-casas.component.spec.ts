import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsCasasComponent } from './cards-casas.component';

describe('CardsCasasComponent', () => {
  let component: CardsCasasComponent;
  let fixture: ComponentFixture<CardsCasasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsCasasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardsCasasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
