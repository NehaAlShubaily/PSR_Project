import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientPropertiesComponent } from './client-properties.component';

describe('ClientPropertiesComponent', () => {
  let component: ClientPropertiesComponent;
  let fixture: ComponentFixture<ClientPropertiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientPropertiesComponent]
    });
    fixture = TestBed.createComponent(ClientPropertiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
