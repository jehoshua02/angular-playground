import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompleteExampleOneComponent } from './autocomplete-example-one.component';

describe('AutocompleteExampleOneComponent', () => {
  let component: AutocompleteExampleOneComponent;
  let fixture: ComponentFixture<AutocompleteExampleOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutocompleteExampleOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompleteExampleOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
