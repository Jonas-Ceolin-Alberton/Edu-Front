import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaSolicitacoesComponent } from './lista-solicitacoes.component';

describe('ListaSolicitacoesComponent', () => {
  let component: ListaSolicitacoesComponent;
  let fixture: ComponentFixture<ListaSolicitacoesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaSolicitacoesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaSolicitacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
