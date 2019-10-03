import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { DetalheChamadoDto } from '../../../shared/model/detalhe-chamado-dto.';
import { IncidentePropriedadeComponent } from '../incidente-propriedade/incidente-propriedade.component';
import { IncidentePropriedadeService } from '../incidente-propriedade/incidente-propriedade.service';
import { NotificacaoService } from '../../../shared/notificacao/notificacao.service';
import { TbIncidentePropriedade } from '../../../shared/model/tb-incidente-propriedade';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-mti-incidente-detalhe',
  templateUrl: './incidente-detalhe.component.html',
  styleUrls: ['./incidente-detalhe.component.css']
})
export class IncidenteDetalheComponent implements OnInit {

  @Input() displayDialog = false;

  @Input() detalheEventos: DetalheChamadoDto;

  @Input() propriedade: TbIncidentePropriedade;

  @Input() numeroIncidente: number;

  @Input() idIncidente: number;

  @Input() persistentId: number;

  @Input() flIncidentePai: string;

  @Input() tituloModal: string;

  @Input() blockedPanel = false;

  @Output() geraNotificacao = new EventEmitter<DetalheChamadoDto>();

  @ViewChild(IncidentePropriedadeComponent)
  novoIncidentePropriedadeReferencia: IncidentePropriedadeComponent;

  userform: FormGroup;

  propriedadeIncidente: TbIncidentePropriedade;

  constructor(private fb: FormBuilder, private incidentePropriedadeService: IncidentePropriedadeService, private messageService: MessageService) { }

  ngOnInit() {
    this.userform = this.fb.group({
      'abertoPor': new FormControl(''),
      'areaIncidente': new FormControl(''),
      'dataAbertura': new FormControl(''),
      'dataUltimoDirecionamento': new FormControl(''),
      'dataViolacaoSLA': new FormControl(''),
      'departamento': new FormControl(''),
      'departamentoDetalhe': new FormControl(''),
      'email': new FormControl(''),
      'grupo': new FormControl(''),
      'localizacao': new FormControl(''),
      'numeroIncidente': new FormControl(''),
      'pa': new FormControl(''),
      'relatadoPor': new FormControl(''),
      'responsavel': new FormControl(''),
      'usuarioFinalAfetado': new FormControl(''),
      'status': new FormControl(''),
      'telefone': new FormControl(''),
      'ultimaModificacao': new FormControl(''),
      'descricao': new FormControl('')
    });
  }
  ngAfterViewInit() {
    $("div.ui-dialog-content").scrollTop(0);
  }

  obterPropriedades(evento) {
    if (this.novoIncidentePropriedadeReferencia) {
      this.incidentePropriedadeService.obterDetalhesChamado(this.idIncidente).subscribe(data => {
        this.novoIncidentePropriedadeReferencia.propriedadeIncidente = data;
        this.novoIncidentePropriedadeReferencia.idIncidente = this.idIncidente;
        this.novoIncidentePropriedadeReferencia.numeroIncidente = this.numeroIncidente;
        this.novoIncidentePropriedadeReferencia.persistentId = this.persistentId;
      }, error => {
        this.messageService.clear();
        this.messageService.add({ severity: 'error', summary: 'Serviço de Mensagem', detail: error });
        //this.notificacaoService.erro(error);
      });
    } else {
      this.incidentePropriedadeService.obterDetalhesChamado(this.idIncidente).subscribe(data => {
        this.idIncidente = this.idIncidente;
        this.numeroIncidente = this.numeroIncidente;
        this.persistentId = this.persistentId;
        this.propriedadeIncidente = data;
      }, error => {
        this.messageService.clear();
        this.messageService.add({ severity: 'error', summary: 'Serviço de Mensagem', detail: error });
        //this.notificacaoService.erro(error);
      });
    }
  }

  closeModal() {
    this.displayDialog = false;
    this.userform.reset();
    this.geraNotificacao.emit();
  }

}
