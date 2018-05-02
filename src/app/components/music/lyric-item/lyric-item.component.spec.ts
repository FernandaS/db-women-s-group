import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LyricItemComponent } from './lyric-item.component';

describe('LyricItemComponent', () => {
  let component: LyricItemComponent;
  let fixture: ComponentFixture<LyricItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LyricItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LyricItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
