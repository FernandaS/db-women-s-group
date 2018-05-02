import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LyricListComponent } from './lyric-list.component';

describe('LyricListComponent', () => {
  let component: LyricListComponent;
  let fixture: ComponentFixture<LyricListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LyricListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LyricListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
