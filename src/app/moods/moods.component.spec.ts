import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodsHistoryComponent } from './moods.component';

describe('MoodsHistoryComponent', () => {
  let component: MoodsHistoryComponent;
  let fixture: ComponentFixture<MoodsHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoodsHistoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoodsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
