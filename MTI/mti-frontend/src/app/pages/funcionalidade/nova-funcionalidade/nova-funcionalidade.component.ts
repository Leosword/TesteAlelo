import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TbFuncionalidade } from '../../../shared/model/tb-funcionalidade';
import { FormGroup, FormBuilder, FormControl, Validators } from '../../../../../node_modules/@angular/forms';
import { NovaFuncionalidadeService } from './nova-funcionalidade.service';
import { NotificacaoService } from '../../../shared/notificacao/notificacao.service';
import { Flag } from '../../../shared/constants/flag';
import { SelectItem } from '../../../../../node_modules/primeng/api';

@Component({
  selector: 'app-mti-nova-funcionalidade',
  templateUrl: './nova-funcionalidade.component.html',
  styleUrls: ['./nova-funcionalidade.component.css']
})
export class NovaFuncionalidadeComponent implements OnInit {

  @Input()
  displayDialog = false;

  @Input()
  funcionalidade: TbFuncionalidade;

  @Input()
  tituloModal: string;

  funcionalidadesList: SelectItem[];

  @Output() salvarFuncionalidadeNotificacao = new EventEmitter<TbFuncionalidade>();

  userform: FormGroup;

  constructor(private novaFuncionalidadeService: NovaFuncionalidadeService, private fb: FormBuilder, private notificacaoService: NotificacaoService) { }

  ngOnInit() {
    this.userform = this.fb.group({
      'nome': new FormControl('', Validators.compose([Validators.required, Validators.maxLength(255)])),
      'label': new FormControl('', Validators.required),
      'tipoFuncionalidade': new FormControl('', Validators.required),
      'descricao': new FormControl('', Validators.maxLength(255)),
      'rdbStatus': new FormControl('', Validators.required)
    });
  }

  obterTodosTiposDeFuncionalidade() {
    this.funcionalidadesList = [];
    // this.contatoService.contatos().subscribe(
    //     data => {
    //         this.contatosList = data;
    //     }
    // );
  }

  salvar() {
    if (this.funcionalidade.id == null) {
      this.funcionalidade.flAtivo = Flag.SIM;
      this.novaFuncionalidadeService.incluir(this.funcionalidade).subscribe(
        data => {
          this.closeModal();
          this.notificacaoService.showAlert("Sucesso", "Funcionalidade salva com sucesso.", "success");
          this.salvarFuncionalidadeNotificacao.emit();

        }, error => {
          this.closeModal();
          this.notificacaoService.showAlert("Atenção", "Ocorreu um erro ao salvar a funcionalidade.", "error");
          this.salvarFuncionalidadeNotificacao.emit();
        });
    } else {
      this.novaFuncionalidadeService.atualizar(this.funcionalidade).subscribe(
        data => {
          this.closeModal();
          this.notificacaoService.showAlert("Sucesso", "Funcionalidade atualizada com sucesso.", "success");
          this.salvarFuncionalidadeNotificacao.emit();
        }, error => {
          this.closeModal();
          this.notificacaoService.showAlert("Atenção", "Ocorreu um erro ao atualizar a funcionalidade.", "error");
          this.salvarFuncionalidadeNotificacao.emit();
        }
      );
    }
  }

  closeModal() {
    this.displayDialog = false;
    this.userform.reset();
  }

}
