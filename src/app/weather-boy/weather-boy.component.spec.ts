import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherBoyComponent } from './weather-boy.component';

describe('WeatherBoyComponent', () => {
  let component: WeatherBoyComponent;
  let fixture: ComponentFixture<WeatherBoyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherBoyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WeatherBoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
