import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsSection } from './clients-section';

describe('ClientsSection', () => {
  let component: ClientsSection;
  let fixture: ComponentFixture<ClientsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientsSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientsSection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
