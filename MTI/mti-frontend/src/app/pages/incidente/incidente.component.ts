import { Router } from '@angular/router';
import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { IncidenteService } from './incidente.service';
import { IncidenteDetalheComponent } from './incidente-detalhe/incidente-detalhe.component';
import { ChamadoDto } from '../../shared/model/chamado-dto';
import { AppUtil } from '../../shared/app-util';
import { DetalheChamadoDto } from '../../shared/model/detalhe-chamado-dto.';
import { Observable, Subscription } from 'rxjs';
import { TbIncidentePropriedade } from '../../shared/model/tb-incidente-propriedade';
import { MessageService } from 'primeng/components/common/messageservice';
import { SelectItem } from '../../../../node_modules/primeng/api';
import { AuthStorage } from '../authentication/auth.storage';
import { Funcionalidade } from '../../shared/enum/funcionalidade.enum';
import { TbTimeline } from '../../shared/model/tb-timeline';
import { TbStatusFluxo } from '../../shared/model/tb-status-fluxo';

@Component({
  selector: 'app-mti-incidente',
  templateUrl: './incidente.component.html',
  styleUrls: ['./incidente.component.css']
})
export class IncidenteComponent implements OnInit {

  private _eventSubscription: Subscription;
  displayDialog = false;
  displayDialogValidaIncidente = false;
  displayDialogValidaIncidenteEps = false;
  displayDialogTimeLine = false;
  tituloModal: string;
  acao: string;
  types: SelectItem[] = [];
  selectedType;
  eventos = new Array() as Array<ChamadoDto>;
  propriedade: TbIncidentePropriedade;
  colunas: any[];
  colunasSelecionadas: any[];
  detalheEventos: DetalheChamadoDto;
  eventoSelecionado: ChamadoDto;
  evento: ChamadoDto = {} as ChamadoDto;

  @ViewChild(IncidenteDetalheComponent)
  novoIncidenteCriticoReferencia: IncidenteDetalheComponent;

  numeroIncidente: number;
  persistentId: string;
  idIncidente: number;
  flIncidentePai: string;
  listaStatusEvento: any[];
  label = "Filtrar Evento";
  today: number;
  qtdResultados: number = 0;
  iniciaScrollBar = 0;
  blockedPanel: boolean = false;
  parametroBackend: string;
  tpListaIncidente: string;
  tituloTabela: string;
  dataUltimaAtualizacao: Date;
  dataItensFilhos = new Object();
  flagIncidentePai = "S"
  ultimoIncidenteCarregado: string;

  permissaoBtnSolicitaValidacaoEPS;
  permissaoBtnValidaIncidente;

  constructor(private incidentesService: IncidenteService,
    private route: Router, private messageService: MessageService
  ) { }

  ngOnInit() {
    this.permissaoBtnSolicitaValidacaoEPS = AuthStorage.usuarioTemPermissaoRole(Funcionalidade.MNU_INCIDENTE_BTN_SOLICITA_VALIDACAO_EPS);
    this.permissaoBtnValidaIncidente = AuthStorage.usuarioTemPermissaoRole(Funcionalidade.MNU_INCIDENTE_BTN_VALIDAR_INCIDENTE);

    if (AuthStorage.usuarioTemPermissaoRole(Funcionalidade.MNU_INCIDENTE_BTN_CRITICOS)) {
      this.types.push({ label: 'Incidentes Críticos', value: '1', icon: 'fa fa-exclamation-triangle text-orange' });
      this.parametroBackend = '/chamado/critico/';
      this.tpListaIncidente = '1';
      this.selectedType = '1';
    }

    if (AuthStorage.usuarioTemPermissaoRole(Funcionalidade.MNU_INCIDENTE_BTN_TRATADOS)) {
      this.types.push({ label: 'Incidentes Tratados', value: '2', icon: 'fa fa-check-circle text-green' });
      if (this.selectedType != 1) {
        this.parametroBackend = '/chamado/tratado/';
        this.tpListaIncidente = '2';
        this.selectedType = '2';
      }
    }

    if (AuthStorage.usuarioTemPermissaoRole(Funcionalidade.MNU_INCIDENTE)) {
      this.obterChamados();
      this.startInterval();
    }

    this.colunasSelecionadas = [
      { field: 'numeroIncidente', header: 'Incidente' },
      { field: 'tbIncidentePropriedade', header: 'Nome do Sistema' },
      { field: 'status', header: 'Status' },
      { field: 'grupo', header: 'Grupo' },
      { field: 'dataAbertura', header: 'Data de Abertura' },
      { field: 'iconStatusEvento', header: 'SLA' },
      { field: 'tbStatusFluxo', header: 'Situação Incidente' }
    ];
  }

  tipoListaIncidente(tipoIncidente) {
    if (tipoIncidente.option.value == '1') {
      this.parametroBackend = '/chamado/critico/';
      this.obterChamados();
    } else {
      this.parametroBackend = '/chamado/tratado/'
      this.obterChamados();
    }

  }

  showViaService() {
    this.messageService.add({ severity: 'error', summary: 'Service Message', detail: 'Via MessageService' });
  }

  getValor(rowData, column) {
    if (column == "tbIncidentePropriedade") {
      if (rowData != null) {
        return rowData.nomeSistema
      }
      return rowData
    }
    if (column == "tbStatusFluxo") {
      if (rowData != null) {
        return rowData.nome
      }
      return rowData
    }
    return rowData;
  }

  refreshTabelaIncidentesFilhos(tbTimeLine){
    console.log(tbTimeLine);
    if(!AppUtil.isBlankOrNull(tbTimeLine)){
      if(!AppUtil.isBlankOrNull(tbTimeLine.tbIncidente)){

        if(this.ultimoIncidenteCarregado != tbTimeLine.tbIncidente.numeroIncidente.toString()){
          this.ultimoIncidenteCarregado = tbTimeLine.tbIncidente.numeroIncidente.toString();
          this.obterChamadoFilho(tbTimeLine.tbIncidente);         
        }
      }else{
        if(this.ultimoIncidenteCarregado != tbTimeLine.numeroIncidente.toString()){
          this.ultimoIncidenteCarregado = tbTimeLine.numeroIncidente.toString();
          this.obterChamadoFilho(tbTimeLine);         
        }
      }
    }
  }

  startInterval() {    
    this.displayDialog = false;
    this.displayDialogValidaIncidente = false;
    this.displayDialogValidaIncidenteEps = false;
    this.displayDialogTimeLine = false;
    this.today = Date.now();
    this.obterChamados();
    this._eventSubscription = Observable.forkJoin(
      Observable.interval(60000).do(time => {
        this.today = Date.now();
        this.obterChamados();
      }),
    ).subscribe();
  }

  obterChamadoFilho(event) {
    console.log(event);
    
    this.flagIncidentePai = "N"
    
    this.incidentesService.obterTodosIncidentes(this.parametroBackend, this.flagIncidentePai, event.numeroIncidente).subscribe(data => {
      if (!AppUtil.isBlankOrNull(data)) {
        data.sort((a, b) => {
          return b.dataAbertura < a.dataAbertura ? -1 : 1;
        });
        this.carregarStatus(data);
        this.refreshTabelaIncidentesFilhos(event);
        return this.dataItensFilhos[event.numeroIncidente] = data;
      }
      return data
    }, error => {
      this.messageService.clear();
      this.messageService.add({ severity: 'error', summary: 'Serviço de Mensagem', detail: error });
      //this.notificacaoService.erro_fixo(error, 50000);
    });
  }

  obterChamados() {    
    if (this.route.url !== "/home" && this.route.url !== "/incidentes") {
      this.desligarReloadIncidente();
    }
    this.flagIncidentePai = "S"
    this.colunas = [
      { field: 'numeroIncidente', header: 'Número do Incidente' },
      { field: 'tbIncidentePropriedade', header: 'Nome do Sistema' },
      { field: 'status', header: 'Status' },
      { field: 'grupo', header: 'Grupo' },
      { field: 'dataAbertura', header: 'Data de Abertura' },
      { field: 'dataUltimaModificacao', header: 'Data Modificação' },
      { field: 'dataViolacaoSLA', header: 'Violação SLA' },
      { field: 'iconStatusEvento', header: 'SLA' },
      { field: 'tbStatusFluxo', header: 'Situação Incidente' }
    ];
    this.blockedPanel = true;
    this.incidentesService.obterTodosIncidentes(this.parametroBackend, this.flagIncidentePai, null).subscribe(data => {
      this.eventos = data;
      this.qtdResultados = 0;
      if (!AppUtil.isBlankOrNull(this.eventos)) {
        this.eventos.sort((a, b) => {
          return b.dataAbertura < a.dataAbertura ? -1 : 1;
        });
        this.carregarStatus(this.eventos);
        this.qtdResultados = this.eventos.length;
        this.exibeLinhaSemRegistro();
      }
      this.blockedPanel = false;
    }, error => {
      this.messageService.clear();
      this.messageService.add({ severity: 'error', summary: 'Serviço de Mensagem', detail: error });
      //this.notificacaoService.erro_fixo(error, 50000);
      this.blockedPanel = false;
      this.eventos = new Array() as Array<ChamadoDto>;
      this.qtdResultados = 0;
      this.exibeLinhaSemRegistro();
    });

    this.incidentesService.obterDataUltimaAtualizacao(this.tpListaIncidente).subscribe(data => {
      this.dataUltimaAtualizacao = data;
    })
  }

  exibeLinhaSemRegistro() {
    if (this.qtdResultados == 0) {
      $("#evtVazio").remove();
      $('tbody').append('<tr id="evtVazio"><td colspan="12" style="text-align: center; font-size: 1.2rem; font-weight: bold;' +
        'color: red; padding: 10px 0 0 0"><i class="fa fa-asterisk"></i><span style="color: black"> Nenhum registro encontrado </span><i class="fa fa-asterisk"></i></td></tr>')
    } else {
      $("#evtVazio").remove();
    }
  }

  carregarStatus(chamados: ChamadoDto[]) {

    chamados.forEach(chamado => {
      if (chamado.slaViolado == 0) {
        chamado.iconStatusEvento = "<i class='fa fa-lg fa-check-circle text-green' pTooltip=" + chamado.dataAbertura + "></i>";
      } else {
        chamado.iconStatusEvento = "<i class='fa fa-lg fa-times-circle text-red'></i>";
      }
    })
  }

  desligarReloadIncidente() {
    this._eventSubscription.closed;
    this._eventSubscription.unsubscribe();

  }

  editar(evento) {
    if (AuthStorage.usuarioTemPermissaoRole(Funcionalidade.MNU_INCIDENTE_OPR_VISUALIZAR_DETALHE)) {
      this.eventoSelecionado = evento;
      this.desligarReloadIncidente();
      this.blockedPanel = true;
      if (this.novoIncidenteCriticoReferencia) {
        this.incidentesService.obterDetalhesChamado(evento, this.parametroBackend).subscribe(data => {
          this.novoIncidenteCriticoReferencia.detalheEventos = data;
          this.novoIncidenteCriticoReferencia.idIncidente = evento.id;
          this.novoIncidenteCriticoReferencia.propriedade = evento.tbIncidentePropriedade;
          this.novoIncidenteCriticoReferencia.numeroIncidente = data.numeroIncidente;
          this.novoIncidenteCriticoReferencia.persistentId = data.persistentId;
          this.novoIncidenteCriticoReferencia.flIncidentePai = evento.flIncidentePai;
          this.novoIncidenteCriticoReferencia.displayDialog = true;
          this.novoIncidenteCriticoReferencia.tituloModal = "Incidente: " + evento.numeroIncidente;
          this.novoIncidenteCriticoReferencia.blockedPanel = false;
        }, error => {
          this.messageService.clear();
          this.messageService.add({ severity: 'error', summary: 'Serviço de Mensagem', detail: error });
          //this.notificacaoService.erro(error);
        });
      } else {
        this.incidentesService.obterDetalhesChamado(evento, this.parametroBackend).subscribe(data => {
          this.idIncidente = evento.id;
          this.propriedade = evento.tbIncidentePropriedade;
          this.displayDialog = true;
          this.numeroIncidente = data.numeroIncidente;
          this.persistentId = data.persistentId;
          this.flIncidentePai = evento.flIncidentePai;
          this.detalheEventos = data;
          this.tituloModal = "Incidente: " + evento.numeroIncidente;
          this.blockedPanel = false;
        }, error => {
          this.messageService.clear();
          this.messageService.add({ severity: 'error', summary: 'Serviço de Mensagem', detail: error });
          //this.notificacaoService.erro(error);
        });
      }
    }
  }

  validaGi(rowData) {
    this.desligarReloadIncidente();
    this.displayDialogValidaIncidente = true;
    this.tituloModal = "Solicitar Validação EPS";
    this.numeroIncidente = rowData.numeroIncidente;
  }

  validaEps(rowData) {
    this.desligarReloadIncidente();
    this.displayDialogValidaIncidenteEps = true;
    this.tituloModal = "Validação de Incidente";
    this.numeroIncidente = rowData.numeroIncidente;
  }

  visualizaTimeLine(rowData) {
    this.desligarReloadIncidente();
    this.displayDialogTimeLine = true;
    this.tituloModal = "TimeLine Incidente [" + rowData.numeroIncidente + "]";
    this.idIncidente = rowData.id;
    this.numeroIncidente = rowData.numeroIncidente;
  }
}
