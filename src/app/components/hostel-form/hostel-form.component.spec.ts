import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostelFormComponent } from './hostel-form.component';

describe('HostelFormComponent', () => {
  let component: HostelFormComponent;
  let fixture: ComponentFixture<HostelFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HostelFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
