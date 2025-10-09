import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoHttp } from './demo-http';

describe('DemoHttp', () => {
  let component: DemoHttp;
  let fixture: ComponentFixture<DemoHttp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoHttp]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemoHttp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
