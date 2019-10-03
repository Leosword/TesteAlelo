import { Component, OnInit, ViewChild } from '@angular/core';
import { PerfilAcessoService } from './perfil-acesso.service';
import { MessageService } from '../../../../node_modules/primeng/components/common/messageservice';
import { TbPerfil } from '../../shared/model/tb-perfil';
import { NovoPerfilAcessoComponent } from './novo-perfil-acesso/novo-perfil-acesso.component';
import { AppUtil } from '../../shared/app-util';
import { NotificacaoService } from '../../shared/notificacao/notificacao.service';
import { Flag } from '../../shared/constants/flag';
import { TbFuncionalidade } from '../../shared/model/tb-funcionalidade';
import { AuthStorage } from '../authentication/auth.storage';
import { Funcionalidade } from '../../shared/enum/funcionalidade.enum';

@Component({
  selector: 'app-perfil-acesso',
  templateUrl: './perfil-acesso.component.html',
  styleUrls: ['./perfil-acesso.component.css']
})
export class PerfilAcessoComponent implements OnInit {

  perfis: TbPerfil[];
  perfisSelecionados: TbPerfil[];
  listaFuncionalidadesAssociadas;
  idPerfil: number;
  perfilSelecionado: TbPerfil;
  displayDialog: boolean = false;
  tituloModal: string;
  colunas: any[];
  modoVisualizacao: boolean;
  tbMenu = [];

  permissaoBtnNovo;
  permissaoBtnEditar;
  permissaoBtnDesativar;
  permissaoBtnAtivar;
  permissaoBtnVisualizar;

  blockedPanel: boolean = false;

  @ViewChild(NovoPerfilAcessoComponent)
  novoPerfilReferencia: NovoPerfilAcessoComponent;

  constructor(private perfilAcessoService: PerfilAcessoService, private messageService: MessageService, private notificacaoService: NotificacaoService) { }

  ngOnInit() {
    this.colunas = [
      { field: 'id', header: '#' },
      { field: 'nome', header: 'Nome' },
      { field: 'iconFlAtivo', header: 'Status' },
      { field: 'dataCriacao', header: 'Data de Criação' }
    ];
    this.permissaoBtnNovo = AuthStorage.usuarioTemPermissaoRole(Funcionalidade.MNU_PERFIL_BTN_INCLUIR);
    this.permissaoBtnEditar = AuthStorage.usuarioTemPermissaoRole(Funcionalidade.MNU_PERFIL_BTN_EDITAR);
    this.permissaoBtnDesativar = AuthStorage.usuarioTemPermissaoRole(Funcionalidade.MNU_PERFIL_BTN_DESATIVAR);
    this.permissaoBtnAtivar = AuthStorage.usuarioTemPermissaoRole(Funcionalidade.MNU_PERFIL_BTN_ATIVAR);
    this.permissaoBtnVisualizar = AuthStorage.usuarioTemPermissaoRole(Funcionalidade.MNU_PERFIL_BTN_VISUALIZAR);

    this.obterTodos();
  }

  obterTodos() {
    this.displayDialog = false;
    this.tbMenu = [];
    this.blockedPanel = true;
    this.perfilAcessoService.obterTodosPerfis().subscribe(data => {
      this.perfis = data;
      this.carregarStatus(this.perfis);
      this.blockedPanel = false;
    }, error => {
      this.messageService.clear();
      this.messageService.add({ severity: 'error', summary: 'Serviço de Mensagem', detail: error });
      this.blockedPanel = false;
    });
  }

  getValor(rowData, column) {
    return rowData;
  }

  carregarStatus(perfis: TbPerfil[]) {

    perfis.forEach(perfis => {
      if (perfis.flAtivo == 'S') {
        perfis.iconFlAtivo = "<i class='fa fa-lg fa-check-circle text-green'></i>";
      } else {
        perfis.iconFlAtivo = "<i class='fa fa-lg fa-times-circle text-red'></i>";
      }
    })
  }

  adicionar() {
    this.obterMenus();
    if (this.novoPerfilReferencia) {
      this.novoPerfilReferencia.displayDialog = true;
      this.novoPerfilReferencia.perfil = new TbPerfil();
      this.novoPerfilReferencia.tituloModal = "Novo Perfil";
      this.listaFuncionalidadesAssociadas = new Array() as Array<TbFuncionalidade>;
    } else {
      this.displayDialog = true;
      this.perfilSelecionado = new TbPerfil();
      this.tituloModal = "Novo Perfil";
      this.listaFuncionalidadesAssociadas = new Array() as Array<TbFuncionalidade>;
    }
  }

  obterMenus() {    
    this.perfilAcessoService.obterTodosMenus().subscribe(data => {
      this.adicionaItemNoMenu(data);    
    })
  }

  adicionaItemNoMenu(listaMenu){
    listaMenu.forEach(tbMenu => {
      this.tbMenu.push({label: tbMenu.nome, value: tbMenu.id});
    });
  }

  editar(perfil: TbPerfil, modoVisualizacao) {
    this.obterMenus();
    this.perfilAcessoService.obterPerfilPorId(perfil.id).subscribe(
      data => {
        modoVisualizacao ? this.tituloModal = "Visualizar Perfil" : this.tituloModal = "Editar Perfil";
        this.perfilSelecionado = data;
        this.listaFuncionalidadesAssociadas = data.tbFuncionalidades;
        this.displayDialog = true;
        this.idPerfil = perfil.id;
        this.modoVisualizacao = modoVisualizacao;
      }
    );
  }

  associarPermissao(perfil: TbPerfil) {
    if (this.novoPerfilReferencia) {
      this.novoPerfilReferencia.displayDialog = true;
      this.novoPerfilReferencia.tituloModal = "Editar Perfil";
    } else {
      this.displayDialog = true;
      this.tituloModal = "Editar Perfil";
    }

    this.perfilAcessoService.obterPerfilPorId(perfil.id).subscribe(
      data => {
        this.perfilSelecionado = data;
        this.displayDialog = true;
      }
    );
  }

  desativarPerfil(perfil: TbPerfil) {
    if (!AppUtil.isBlankOrNull(perfil)) {
      this.notificacaoService.alertConfirm("Atenção", "Deseja desativar o(s) registro(s) selecionado(s)?", "warning").then(retorno => {
        if (retorno.value) {
          perfil.flAtivo = Flag.NAO;
          this.perfilAcessoService.ativaDesativarPerfil(perfil).subscribe(() => {
            this.notificacaoService.showAlert("Sucesso", "Operação realizado com sucesso", "success");
            this.obterTodos();
          }, error => {
            this.displayDialog = false;
            this.notificacaoService.showAlert("Atenção", "Ocorreu um erro ao tentar desativar os perfis selecionados.", error);
          });
        }
      });
    }
  }

  ativarPerfil(perfil: TbPerfil) {
    if (!AppUtil.isBlankOrNull(perfil)) {
      this.notificacaoService.alertConfirm("Atenção", "Deseja ativar o(s) registro(s) selecionado(s)?", "warning").then(retorno => {
        if (retorno.value) {
          perfil.flAtivo = Flag.SIM;
          this.perfilAcessoService.ativaDesativarPerfil(perfil).subscribe(() => {
            this.notificacaoService.showAlert("Sucesso", "Operação realizado com sucesso", "success");
            this.obterTodos();
          }, error => {
            this.displayDialog = false;
            this.notificacaoService.showAlert("Atenção", "Ocorreu um erro ao tentar ativar os perfis selecionados.", error);
          });
        }
      });
    }
  }

}
