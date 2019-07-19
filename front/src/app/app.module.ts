import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnviroumentModule } from './modules/enviroument/enviroument.module';
import { AcessoModule } from './modules/acesso/acesso.module';

@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		CommonModule,
		HttpClientModule,
		AcessoModule,
		EnviroumentModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
