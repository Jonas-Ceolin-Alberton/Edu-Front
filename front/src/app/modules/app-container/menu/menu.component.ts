import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ItemMenu } from '../models/item-menu.model';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/shared/service/usuario.service';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
	@Output() itemSelected: EventEmitter<string> = new EventEmitter();
	itemsMenu: Array<ItemMenu> = [];

	constructor(
		private router: Router,
		private usuarioService: UsuarioService) {
		this.criarOpcoesMenu();
	}

	ngOnInit() {
	}

	criarOpcoesMenu(): void {
		if(this.usuarioService.isAdmin()) {
			this.criarOpcoesMenuAdmin();
		} else {
			this.criarOpcoesMenuUser();
		}
	}

	private criarOpcoesMenuUser(): void {
		this.itemsMenu.push(new ItemMenu('Atividades','atividades','app/lista-atividades'));
		this.itemsMenu.push(new ItemMenu('Minhas Atividades','minhas_atividades','app/minhas-atividades'));
		this.itemsMenu.push(new ItemMenu('Certificados','certificados','app/lista-certificados'));
	}

	private criarOpcoesMenuAdmin(): void {
		this.itemsMenu.push(new ItemMenu('Atividades','atividades','app/lista-atividades'));
		this.itemsMenu.push(new ItemMenu('Solicitacoes','solicitacoes','app/lista-solicitacoes'));
	}

	navegar(rota: string): void {
		this.selecionouItem();
		this.router.navigate([rota]);
	}

	selecionouItem(): void {
		this.itemSelected.emit();
	}
}
