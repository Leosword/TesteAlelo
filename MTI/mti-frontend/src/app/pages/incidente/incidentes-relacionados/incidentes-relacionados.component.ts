import { Component, OnInit, Input } from '@angular/core';
import { IncidentesRelacionadosService } from './incidentes-relacionados.service';
import { NotificacaoService } from '../../../shared/notificacao/notificacao.service';
import { ChamadoDto } from '../../../shared/model/chamado-dto';
import { AppUtil } from '../../../shared/app-util';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'mti-incidentes-relacionados',
  templateUrl: './incidentes-relacionados.component.html',
  styleUrls: ['./incidentes-relacionados.component.css']
})
export class IncidentesRelacionadosComponent implements OnInit {

  @Input() numeroIncidente: number;

  @Input() flIncidentePai: string;

  incidentesRelacionados: ChamadoDto[];

  constructor(private incidentesRelacionadosService: IncidentesRelacionadosService, private messageService: MessageService) { }

  ngOnInit() {
    this.obterIncidentesFilhos(this.numeroIncidente)
  }

  obterIncidentesFilhos(numeroIncidentePai) {
    this.incidentesRelacionadosService.obterIncidentesFilhos(numeroIncidentePai).subscribe(data => {
      this.incidentesRelacionados = data;
      if (!AppUtil.isBlankOrNull(this.incidentesRelacionados)) {
        this.incidentesRelacionados.sort((a, b) => {
          return b.dataAbertura < a.dataAbertura ? -1 : 1;
        });
        this.carregarStatus(this.incidentesRelacionados);
      };
    }, error => {
      this.messageService.clear();
      this.messageService.add({ severity: 'error', summary: 'Serviço de Mensagem', detail: error });
    });
  }

  carregarStatus(incidentesRelacionados: ChamadoDto[]) {

    incidentesRelacionados.forEach(incidente => {
      if (incidente.slaViolado == 0) {
        incidente.iconStatusEvento = "fa-check-circle";
      } else {
        incidente.iconStatusEvento = "fa-times-circle";
      }
    })
  }

}
