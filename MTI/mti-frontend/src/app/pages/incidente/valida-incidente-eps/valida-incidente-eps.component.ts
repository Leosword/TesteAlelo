import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TbTimeline } from '../../../shared/model/tb-timeline';
import { ChamadoDto } from '../../../shared/model/chamado-dto';
import { FormGroup, FormBuilder, FormControl, Validators } from '../../../../../node_modules/@angular/forms';
import { ValidaIncidenteEpsService } from './valida-incidente-eps.service';
import { NotificacaoService } from '../../../shared/notificacao/notificacao.service';
import { AppUtil } from '../../../shared/app-util';
import { IncidenteService } from '../incidente.service';
import { StatusFluxo } from '../../../shared/constants/status-fluxo';
import { FileUpload } from '../../../../../node_modules/primeng/fileupload';

@Component({
  selector: 'mti-valida-incidente-eps',
  templateUrl: './valida-incidente-eps.component.html',
  styleUrls: ['./valida-incidente-eps.component.css']
})
export class ValidaIncidenteEpsComponent implements OnInit {

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
  uploadedFiles: any[] = [];
  fileInput: FileUpload;
  idIncidente: number;

  colunas: any[];
  exibeTabelaIncidentesFilhos: boolean;

  @Output() salvarTimelineEpsNotificacao = new EventEmitter<TbTimeline>();

  userform: FormGroup;

  constructor(private validaIncidenteEpsService: ValidaIncidenteEpsService, private fb: FormBuilder, private notificacaoService: NotificacaoService, private incidenteService: IncidenteService) { }

  ngOnInit() {
    this.userform = this.fb.group({
      'comentario': new FormControl('', Validators.required),

    });
    this.colunas = [
      { field: 'numeroIncidente', header: 'Incidente' },
      { field: 'tbIncidentePropriedade', header: 'Nome do Sistema' },
      { field: 'status', header: 'Status' },
      { field: 'grupo', header: 'Grupo' }
    ];

    this.obterChamadoFilho(this.numeroIncidente)

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


  salvar(statusFluxo) {
    this.incidenteService.obterPorNumeroIncidente(this.numeroIncidente).subscribe(tbIncidente => {
      this.incidenteService.obterStatusFluxoPorNome(statusFluxo).subscribe(tbStatusFluxo => {

        this.timeLine.tbIncidente = tbIncidente;
        this.idIncidente = tbIncidente.id;
        this.timeLine.dataCriacao = new Date();
        this.timeLine.tbIncidente.tbStatusFluxo = tbStatusFluxo;
        if(statusFluxo == StatusFluxo.APROVADO){
          this.timeLine.icone = "fa-check bg-green";
          this.timeLine.tbIncidente.dataAprovacaoMti = new Date();
        }else if(statusFluxo == StatusFluxo.REPROVADO){
          this.timeLine.icone = "fa-times-circle bg-red";
        }

        this.eventoFilhosSelecionados.forEach(data => {
          this.idEventosFilhosSelecionados.push(data.id);
        });

        this.validaIncidenteEpsService.salvar(this.timeLine, this.idEventosFilhosSelecionados, this.uploadedFiles, this.idIncidente).subscribe(data => {
            this.closeModal();
            this.uploadedFiles = [];
            this.notificacaoService.showAlert("Sucesso", "Sua validação foi realizada com sucesso.", "success");
          }, error => {
            this.uploadedFiles = [];
            this.notificacaoService.showAlert("Atenção", error, "error");
          });
      })
    })
  }

  onSelect(event) {
    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }
  }

  closeModal() {
    this.displayDialog = false;
    this.userform.reset();
    this.salvarTimelineEpsNotificacao.emit();
  }

}
