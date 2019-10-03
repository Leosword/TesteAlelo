import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { TbUsuario } from '../../../../shared/model/tb-usuario';
import { AlterarSenhaService } from './alterar-senha.service';
import { NotificacaoService } from '../../../../shared/notificacao/notificacao.service';
import { NovoUsuarioService } from '../novo-usuario/novo-usuario.service';

@Component({
  selector: 'mti-alterar-senha',
  templateUrl: './alterar-senha.component.html',
  styleUrls: ['./alterar-senha.component.css']
})
export class AlterarSenhaComponent implements OnInit {

  @Input() displayDialog: boolean = false;

  @Input() usuario: TbUsuario;

  @Output() salvarSenhaNotificacao = new EventEmitter<TbUsuario>();

  userform: FormGroup;

  @Input() tituloModal: string;

  constructor(private novoUsuarioService: NovoUsuarioService, private fb: FormBuilder, private notificacaoService: NotificacaoService) {
  }

  ngOnInit() {
    this.userform = this.fb.group({
      'nSenha': new FormControl('', Validators.required),
      'cSenha': new FormControl('', Validators.required)

    });
  }
  ngAfterViewInit() {
    $("div.ui-dialog-content").scrollTop(0);
  }

  salvar() {
    if (this.usuario.senha != this.usuario.confirmaSenha) {
      this.notificacaoService.showAlert("Atenção", "As senhas não são iguais, favor verificar.", "error");
    } else {
      this.novoUsuarioService.salvar(this.usuario).subscribe(() => {
        this.closeModal();
        this.notificacaoService.sucesso();
        this.salvarSenhaNotificacao.emit();
      }, error => {
        this.closeModal();
        this.notificacaoService.erro(error);
        this.salvarSenhaNotificacao.emit();
      });
    }
  }

  closeModal() {
    this.displayDialog = false;
    this.userform.reset();
    this.salvarSenhaNotificacao.emit();
  }

}
