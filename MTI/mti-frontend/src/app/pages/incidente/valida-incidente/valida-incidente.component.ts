import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '../../../../../node_modules/@angular/forms';
import { TbTimeline } from '../../../shared/model/tb-timeline';
import { ValidaIncidenteService } from './valida-incidente.service';
import { NotificacaoService } from '../../../shared/notificacao/notificacao.service';
import { IncidenteService } from '../incidente.service';
import { AppUtil } from '../../../shared/app-util';
import { ChamadoDto } from '../../../shared/model/chamado-dto';
import { TbStatusFluxo } from '../../../shared/model/tb-status-fluxo';
import { StatusFluxo } from '../../../shared/constants/status-fluxo';

@Component({
  selector: 'mti-valida-incidente',
  templateUrl: './valida-incidente.component.html',
  styleUrls: ['./valida-incidente.component.css']
})
export class ValidaIncidenteComponent implements OnInit {

  @Input()
  displayDialog: boolean = false;

  @Input()
  tituloModal: string;

  @Input()
  numeroIncidente: number;

  @Input()
  parametroBackend: string;

  timeLine: TbTimeline = new TbTimeline();
  eventosFilhos = new Array() as Array<ChamadoDto>;
  eventoFilhosSelecionados = new Array() as Array<ChamadoDto>;
  idEventosFilhosSelecionados: any[] = new Array();
  exibeTabelaIncidentesFilhos: boolean;

  colunas: any[];

  @Output() salvarTimelineNotificacao = new EventEmitter<TbTimeline>();

  userform: FormGroup;

  constructor(private validaIncidenteService: ValidaIncidenteService, private fb: FormBuilder, private notificacaoService: NotificacaoService, private incidenteService: IncidenteService) { }

  ngOnInit() {
    this.userform = this.fb.group({
      'comentario': new FormControl('', Validators.required),

    });

    this.colunas = [
      { field: 'numeroIncidente', header: 'Incidente' },
      { field: 'tbIncidentePropriedade', header: 'Nome do Sistema' },
      { field: 'status', header: 'Status' },
      { field: 'grupo', header: 'Grupo' },
      { field: 'dataViolacaoSLA', header: 'Violação SLA' }
    ];

    this.obterChamadoFilho(this.numeroIncidente);
  }

  ngAfterViewInit() {
    $("div.ui-dialog-content").scrollTop(0);
  }

  obterChamadoFilho(numeroIncidente) {
    this.incidenteService.obterTodosIncidentes(this.parametroBackend, "N", numeroIncidente).subscribe(data => {
      if (!AppUtil.isBlankOrNull(data)) {
        data.sort((a, b) => {
          return b.dataAbertura < a.dataAbertura ? -1 : 1;
        });
        this.exibeTabelaIncidentesFilhos = true;
        this.eventoFilhosSelecionados = data;
        return this.eventosFilhos = data;
      }
      this.exibeTabelaIncidentesFilhos = false;
      return data
    }, error => {
      this.notificacaoService.erro("Não foi possivel carregar os Incidentes Filhos.");
    });
  }

  getValor(rowData, column) {
    if (column == "tbIncidentePropriedade") {
      if (rowData != null) {
        return rowData.nomeSistema
      }
      return rowData
    }
    return rowData;
  }

  salvar() {
    this.incidenteService.obterPorNumeroIncidente(this.numeroIncidente).subscribe(tbIncidente => {
      this.incidenteService.obterStatusFluxoPorNome(StatusFluxo.ACIONAMENTO_EPS_EFETIVADO).subscribe(tbStatusFluxo => {

        this.timeLine.tbIncidente = tbIncidente
        this.timeLine.dataCriacao = new Date();
        this.timeLine.tbIncidente.tbStatusFluxo = tbStatusFluxo;
        this.timeLine.icone = "fa-comments bg-yellow";

        this.eventoFilhosSelecionados.forEach(data => {
          this.idEventosFilhosSelecionados.push(data.id);
        });
        this.validaIncidenteService.salvar(this.timeLine, this.idEventosFilhosSelecionados).subscribe(data => {
            this.salvarTimelineNotificacao.emit(this.timeLine);
            this.closeModal();
            this.notificacaoService.showAlert("Sucesso", "Sua validação foi realizada com sucesso.", "success");
          }, error => {
            this.salvarTimelineNotificacao.emit(this.timeLine);
            this.notificacaoService.showAlert("Atenção", error, "error");
          });
      })

    })
  }

  closeModal() {
    this.displayDialog = false;
    this.userform.reset();
    this.salvarTimelineNotificacao.emit();
  }

}
