import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidunavuComponent } from './sidunavu.component';

describe('SidunavuComponent', () => {
  let component: SidunavuComponent;
  let fixture: ComponentFixture<SidunavuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidunavuComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidunavuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
