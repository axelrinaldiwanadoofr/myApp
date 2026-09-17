import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListeFilmsPage } from './liste-films.page';

describe('ListeFilmsPage', () => {
  let component: ListeFilmsPage;
  let fixture: ComponentFixture<ListeFilmsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeFilmsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
