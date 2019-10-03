import { Component, OnInit, ViewChild } from '@angular/core';
import { TbFuncionalidade } from '../../shared/model/tb-funcionalidade';
import { NovaFuncionalidadeComponent } from './nova-funcionalidade/nova-funcionalidade.component';
import { FuncionalidadeService } from './funcionalidade.service';
import { MessageService } from '../../../../node_modules/primeng/components/common/messageservice';
import { NotificacaoService } from '../../shared/notificacao/notificacao.service';
import { AppUtil } from '../../shared/app-util';
import { Flag } from '../../shared/constants/flag';
import { AuthStorage } from './../../../../src/app/pages/authentication/auth.storage';
import { Funcionalidade } from '../../shared/enum/funcionalidade.enum';

@Component({
  selector: 'app-funcionalidade',
  templateUrl: './funcionalidade.component.html',
  styleUrls: ['./funcionalidade.component.css']
})
export class FuncionalidadeComponent implements OnInit {

  funcionalidades: TbFuncionalidade[];
  funcionalidadesSelecionadas: TbFuncionalidade[];
  funcionalidadeSelecionada: TbFuncionalidade;
  displayDialog = false;
  tituloModal: string;
  colunas: any[];
  permissaoBtnDesativar;
  permissaoBtnAtivar;

  blockedPanel = false;

  @ViewChild(NovaFuncionalidadeComponent)
  novaFuncionalidadeReferencia: NovaFuncionalidadeComponent;

  constructor(private funcionalidadeAcessoService: FuncionalidadeService, private messageService: MessageService, private notificacaoService: NotificacaoService) { }

  ngOnInit() {
    this.colunas = [
      { field: 'id', header: '#' },
      { field: 'nome', header: 'Nome' },
      { field: 'caminho', header: 'Caminho' },
      { field: 'iconFlAtivo', header: 'Status' },
      { field: 'dataCriacao', header: 'Data de Criação' }
    ];
    
    this.permissaoBtnAtivar = AuthStorage.usuarioTemPermissaoRole(Funcionalidade.MNU_FUNCIONALIDADE_BTN_ATIVAR);
    this.permissaoBtnDesativar = AuthStorage.usuarioTemPermissaoRole(Funcionalidade.MNU_FUNCIONALIDADE_BTN_DESATIVAR);
    this.obterTodos();
  }

  obterTodos() {
    this.blockedPanel = true;
    this.funcionalidadeAcessoService.obterTodasFuncionalidades().subscribe(data => {
      this.funcionalidades = data;
      this.carregarStatus(this.funcionalidades);
      this.blockedPanel = false;
    }, error => {
      this.messageService.clear();
      this.messageService.add({ severity: 'error', summary: 'Serviço de Mensagem', detail: error });
      this.blockedPanel = false;
    });
  }

  carregarStatus(funcionalidades: TbFuncionalidade[]) {

    funcionalidades.forEach((funcionalidade: TbFuncionalidade) => {
      if (funcionalidade && funcionalidade.flAtivo === 'S') {
        funcionalidade.iconFlAtivo = "<i class='fa fa-lg fa-check-circle text-green'></i>";
      } else {
        funcionalidade.iconFlAtivo = "<i class='fa fa-lg fa-times-circle text-red'></i>";
      }
    })
  }

  adicionar() {
    if (this.novaFuncionalidadeReferencia) {
      this.novaFuncionalidadeReferencia.displayDialog = true;
      this.novaFuncionalidadeReferencia.funcionalidade = new TbFuncionalidade();
      this.novaFuncionalidadeReferencia.tituloModal = "Nova Funcionalidade";
    } else {
      this.displayDialog = true;
      this.funcionalidadeSelecionada = new TbFuncionalidade();
      this.tituloModal = "Nova Funcionalidade";
    }
  }

  editar(funcionalidade: TbFuncionalidade) {
    if (this.novaFuncionalidadeReferencia) {
      this.novaFuncionalidadeReferencia.displayDialog = true;
      this.novaFuncionalidadeReferencia.tituloModal = "Editar Perfil";
    } else {
      this.displayDialog = true;
      this.tituloModal = "Editar Perfil";
    }

    this.funcionalidadeAcessoService.obterFuncionalidadePorId(funcionalidade.id).subscribe(
      data => {
        this.funcionalidadeSelecionada = data;
        this.displayDialog = true;
      }
    );
  }

  desativarFuncionalidades() {
    if (!AppUtil.isBlankOrNull(this.funcionalidadesSelecionadas)) {
      this.notificacaoService.alertConfirm("Atenção", "Deseja desativar o(s) registro(s) selecionado(s)?", "warning").then(retorno => {
        if (retorno.value) {
          this.funcionalidadesSelecionadas.forEach(funcionalidade => {
            funcionalidade.flAtivo = Flag.NAO;
          });
          this.funcionalidadeAcessoService.desativarFuncionalidade(this.funcionalidadesSelecionadas).subscribe(() => {
            this.notificacaoService.showAlert("Sucesso", "Operação realizado com sucesso", "success");
            this.funcionalidadesSelecionadas = new Array() as Array<TbFuncionalidade>;
            this.obterTodos();
          }, error => {
            this.displayDialog = false;
            this.notificacaoService.showAlert("Atenção", "Ocorreu um erro ao tentar desativar os funcionalidades selecionados.", error);
            this.funcionalidadesSelecionadas = new Array() as Array<TbFuncionalidade>;
          });
        }
      });
    } else {
      this.notificacaoService.showAlert("Atenção", "Selecione uma ou mais funcionalidades para desativar.", "info");
    }
  }

  ativarFuncionalidades() {
    if (!AppUtil.isBlankOrNull(this.funcionalidadesSelecionadas)) {
      this.notificacaoService.alertConfirm("Atenção", "Deseja ativar o(s) registro(s) selecionado(s)?", "warning").then(retorno => {
        if (retorno.value) {
          this.funcionalidadesSelecionadas.forEach(funcionalidade => {
            funcionalidade.flAtivo = Flag.SIM;
          });
          this.funcionalidadeAcessoService.desativarFuncionalidade(this.funcionalidadesSelecionadas).subscribe(() => {
            this.notificacaoService.showAlert("Sucesso", "Operação realizado com sucesso", "success");
            this.obterTodos();
            this.funcionalidadesSelecionadas = new Array() as Array<TbFuncionalidade>;
          }, error => {
            this.displayDialog = false;
            this.notificacaoService.showAlert("Atenção", "Ocorreu um erro ao tentar ativar os funcionalidades selecionados.", "error");
            this.funcionalidadesSelecionadas = new Array() as Array<TbFuncionalidade>;
          });
        }
      });
    } else {
      this.notificacaoService.showAlert("Atenção", "Selecione uma ou mais funcionalidades para ativar.", "info");
    }
  }

}
