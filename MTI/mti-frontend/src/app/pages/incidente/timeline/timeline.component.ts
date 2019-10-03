import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TbTimeline } from '../../../shared/model/tb-timeline';
import { NotificacaoService } from '../../../shared/notificacao/notificacao.service';
import { TimelineService } from './timeline.service';
import { IncidentesRelacionadosService } from '../incidentes-relacionados/incidentes-relacionados.service';
import { ChamadoDto } from '../../../shared/model/chamado-dto';

@Component({
  selector: 'mti-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  @Input()
  displayDialog: boolean = false;

  @Input()
  tituloModal: string;

  @Input()
  idIncidente: number;

  @Input()
  numeroIncidente: number;

  @Output() fecharTimeLineNotificacao = new EventEmitter<TbTimeline>();

  timeLine: TbTimeline[];
  timeLineFilha: TbTimeline[];
  incidentesFilhos: ChamadoDto[];
  first: boolean;
  images: any[];

  constructor(private timeLineService: TimelineService, private notificacaoService: NotificacaoService, private incidentesRelacionadosService: IncidentesRelacionadosService) { }

  ngOnInit() {
    this.timeLineService.obterTimeLine(this.idIncidente).subscribe(data => {
      this.timeLine = data;
    })

    this.incidentesRelacionadosService.obterIncidentesFilhos(this.numeroIncidente).subscribe(data => {
      this.incidentesFilhos = data;
    })


  }

  carregaTimeLineFilha(event, idIncidente) {
    this.timeLineService.obterTimeLine(this.idIncidente).subscribe(data => {
      this.timeLineFilha = data;
    })

  }

  abrirAnexo(event) {
    event.forEach(anexo => {
      
      this.timeLineService.download(anexo.nomeArquivo).subscribe((data) => {
        
        window.open(URL.createObjectURL(data));
      }, error => {
        this.notificacaoService.erro(error);
      });
    });

  }

  closeModal() {
    this.displayDialog = false;
    this.fecharTimeLineNotificacao.emit();
  }

}
