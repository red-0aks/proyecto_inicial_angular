import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegosComponent } from './juegos.component';
import { NgxPaginationModule } from 'ngx-pagination';

describe('JuegosComponent', () => {
  let component: JuegosComponent;
  let fixture: ComponentFixture<JuegosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
});