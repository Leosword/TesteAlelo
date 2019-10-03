import { Component, OnInit, Input } from '@angular/core';
import { LogsService } from './logs.service';
import { TbLogIncidente } from '../../../shared/model/tb-log-incidente';
import { NotificacaoService } from '../../../shared/notificacao/notificacao.service';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'mti-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent implements OnInit {

  logs: TbLogIncidente[];
  blockedPanel: boolean = false;
  @Input() numeroIncidente: number;
  @Input() idIncidente: number;
  @Input() persistentId: string;

  constructor(private logsService: LogsService, private notificacaoService: NotificacaoService, private messageService: MessageService) { }

  ngOnInit() {
    this.obterLogPorIncidente(this.persistentId, this.idIncidente);
  }

  obterLogPorIncidente(persistentId, idIncidente) {
    this.blockedPanel = true;
    this.logsService.obterLogPorIncidente(persistentId, idIncidente).subscribe(data => {
      this.logs = data;
      this.logs.sort((a, b) => {
        return b.dataCriacao < a.dataCriacao ? -1 : 1;
      });
      this.blockedPanel = false;
    }, error => {
      this.messageService.clear();
      this.messageService.add({ severity: 'error', summary: 'Serviço de Mensagem', detail: error });
      // this.notificacaoService.erro(error);
      this.blockedPanel = false;
    });
  }
}
