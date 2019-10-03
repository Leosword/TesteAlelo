import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './authentication/auth.guard';
import { Funcionalidade } from '../shared/enum/funcionalidade.enum';

const routes: Routes = [
    {
        path: 'home',
        loadChildren: 'pages/incidente/incidente.module#IncidenteModule',
        data: {
            title: null,
            auth: Funcionalidade.MNU_INCIDENTE
        },
        canActivate: [AuthGuard]

    }, {
        path: 'login',
        loadChildren: 'pages/login/login.module#LoginModule',
        data: {
            customLayout: true
        }
    },
    {
        path: 'dashboard',
        loadChildren: 'pages/dashboard/dashboard.module#DashboardModule',
        data: {
            title: 'Dashboard Eventos',
            auth: Funcionalidade.MNU_DASHBOARD
        },
        canActivate: [AuthGuard]
    },
    {
        path: 'incidentes',
        loadChildren: 'pages/incidente/incidente.module#IncidenteModule',
        data: {
            title: null,
            breadcrumbs: 'Dashboard > Sistemas Criticos'/*,
            auth: RoleFuncionalidade.ROLE_BOTAO_INCIDENTES_CRITICOS*/
        },
        canActivate: [AuthGuard]
    },
    {
        path: 'usuario',
        loadChildren: 'pages/authentication/usuario/usuario.module#UsuarioModule',
        data: {
            title: null,
            breadcrumbs: 'Dashboard > Cadastro de Usuários',
            auth: Funcionalidade.MNU_USUARIO
        },
        canActivate: [AuthGuard]
    },
    {
        path: 'configuracaoLdap',
        loadChildren: 'pages/authentication/configuracao-ldap/configuracao-ldap.module#ConfiguracaoLdapModule',
        data: {
            title: null/*,
            auth: RoleFuncionalidade.ROLE_BUSCA_CONFIGURACAO_LDAP*/
        },
        canActivate: [AuthGuard]
    },
    {
        path: 'dominioLdap',
        loadChildren: 'pages/authentication/dominio-ldap/dominio-ldap.module#DominioLdapModule',
        data: {
            title: null/*,
            auth: RoleFuncionalidade.ROLE_BUSCA_DOMINIO*/
        },
        canActivate: [AuthGuard]
    },
    {
        path: 'perfil',
        loadChildren: 'pages/perfil-acesso/perfil-acesso.module#PerfilAcessoModule',
        data: {
            title: null,
            auth: Funcionalidade.MNU_PERFIL
        },
        canActivate: [AuthGuard]
    },
    {
        path: 'funcionalidade',
        loadChildren: 'pages/funcionalidade/funcionalidade.module#FuncionalidadeModule',
        data: {
            title: null,
            auth: Funcionalidade.MNU_FUNCIONALIDADE
        },
        canActivate: [AuthGuard]
    },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
