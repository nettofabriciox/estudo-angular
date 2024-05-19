import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsCasasDetalhesComponent } from './cards-casas-detalhes.component';

describe('CardsCasasDetalhesComponent', () => {
  let component: CardsCasasDetalhesComponent;
  let fixture: ComponentFixture<CardsCasasDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsCasasDetalhesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardsCasasDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
