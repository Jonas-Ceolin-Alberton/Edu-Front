import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './modules/acesso/login/login.component';
import { CadastroUsuarioComponent } from './modules/acesso/cadastro-usuario/cadastro-usuario.component';
import { AppContainerComponent } from './modules/app-container/app-container/app-container.component';
import { AuthGuard } from './core/security/auth.guard';
import { ConfiguracoesComponent } from './modules/usuario/configuracoes/configuracoes.component';
import { ListaAtividadesComponent } from './modules/atividade/lista-atividades/lista-atividades.component';
import { AtividadeComponent } from './modules/atividade/atividade/atividade.component';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'cadastro-usuario', component: CadastroUsuarioComponent },
    {
        path: 'app',
        canActivate: [AuthGuard],
        component: AppContainerComponent,
        children: [
            {path: 'configuracoes', component: ConfiguracoesComponent, data: {titulo: 'Configurações'}},
            {path: 'lista-atividades', component: ListaAtividadesComponent, data: {titulo: 'Ativiades'}},
            {path: 'atividade', component: AtividadeComponent, data: {titulo: 'Ativiade'}},
        ]
        
    },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
