import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Auth } from 'src/app/core/security/auth.service';
import { Usuario } from '../../../shared/models/usuario.model';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
	usuario: Usuario = new Usuario();

	constructor(private router: Router,
		private authService: Auth) {
	}

	ngOnInit() {
		this.verificarUsuarioLogado();
	}

	onSubmit() {
		this.authService.login(this.usuario.username, this.usuario.password).subscribe(
			user => {
				if (!!user) return this.navegarParaAppContainer();
			},
			error => alert("Dados incorretos")
		)
	}

	navegarNovoCadastro(): void {
		this.router.navigate(['/cadastro-usuario']);
	}

	navegarParaAppContainer(): void {
		this.router.navigate(['/app/lista-atividades']);
	}

	verificarUsuarioLogado(): void {
		if(this.authService.loggedIn()) {
			this.navegarParaAppContainer();
		} else {
			this.authService.removerDadosLocalStorage();
		}
	}
}
