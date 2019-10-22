import { AppContainerModule } from './modules/app-container/app-container.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcessoModule } from './modules/acesso/acesso.module';
import { AuthGuard } from './core/security/auth.guard';
import { UsuarioModule } from './modules/usuario/usuario.module';
import { AtividadeModule } from './modules/atividade/atividade.module';
import { AuthGuardAdmin } from './core/security/auth-admin.guard';
import { MatSnackBarModule } from '@angular/material';
import { PdFileUploaderDirective } from './shared/directives/file-uploader.directive';

@NgModule({
	declarations: [
		AppComponent,
		PdFileUploaderDirective
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		CommonModule,
		HttpClientModule,
		AcessoModule,
		AppContainerModule,
		UsuarioModule,
		AtividadeModule,
		MatSnackBarModule
	],
	providers: [
		AuthGuard,
		AuthGuardAdmin
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
