import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TbPerfil } from '../../../shared/model/tb-perfil';
import { NovoPerfilAcessoService } from './novo-perfil-acesso.service';
import { FormBuilder, FormControl, Validators, FormGroup } from '../../../../../node_modules/@angular/forms';
import { Flag } from '../../../shared/constants/flag';
import { MessageService } from '../../../../../node_modules/primeng/components/common/messageservice';
import { NotificacaoService } from '../../../shared/notificacao/notificacao.service';
import { TipoFuncionalidade } from '../../../shared/constants/tipoFuncionalidade';
import { TbFuncionalidade } from '../../../shared/model/tb-funcionalidade';
import { validateConfig } from '../../../../../node_modules/@angular/router/src/config';
import { AppUtil } from '../../../shared/app-util';
import { SelectItem } from '../../../../../node_modules/primeng/api';
import { TbMenu } from '../../../shared/model/tb-menu';

@Component({
  selector: 'mti-novo-perfil-acesso',
  templateUrl: './novo-perfil-acesso.component.html',
  styleUrls: ['./novo-perfil-acesso.component.css']
})
export class NovoPerfilAcessoComponent implements OnInit {

  @Input()
  displayDialog: boolean = false;

  @Input()
  perfil: TbPerfil;

  @Input()
  listaFuncionalidadesAssociadas: TbFuncionalidade[];

  @Input()
  idPerfil: number;

  @Input()
  tituloModal: string;

  @Input()
  tbMenu: any[];

  @Input()
  modoVisualizacao: boolean;

  @Output() salvarPerfilNotificacao = new EventEmitter<TbPerfil>();

  userform: FormGroup;

  menuSelecionado: string = '1';
  types: SelectItem[];

  colunas: any[];
  funcionalidades: TbFuncionalidade[];
  funcionalidadesSelecionadas: TbFuncionalidade[];
  ultimoIdMenuSelecionado: number;
  count = 0;

  listaAcesso = new Array() as Array<TbFuncionalidade>;

  constructor(private novoPerfilAcessoService: NovoPerfilAcessoService, private fb: FormBuilder, private notificacaoService: NotificacaoService) { }

  ngOnInit() {
    this.types = [
      { label: 'Ativo', value: 'S', icon: 'fa fa-check' },
      { label: 'Inativo', value: 'N', icon: 'fa fa-times' }
    ];

    this.colunas = [
      { field: 'tbTipoFuncionalidade', header: 'Tipo' },
      { field: 'nome', header: 'Nome' },
      { field: 'caminho', header: 'Caminho' }
    ];

    this.userform = this.fb.group({
      'empresas': new FormControl(''),
      'nome': new FormControl('', Validators.compose([Validators.required, Validators.maxLength(255)])),
      'descricao': new FormControl('', Validators.maxLength(255)),
      'teste': new FormControl(''),
      'rdbStatus': new FormControl('', Validators.required)

    });

    this.listaAcesso = new Array() as Array<TbFuncionalidade>;
    this.obterPermissaoes();
    this.obterMenuComFuncionalidadesAssociadas(this.menuSelecionado);
  }

  ngAfterViewInit() {
    $("div.ui-dialog-content").scrollTop(0);
  }


  getValor(rowData, column) {
    if (column == "tbTipoFuncionalidade") {
      if (rowData != null) {
        return rowData.nome
      }
      return rowData
    }
    return rowData;
  }

  getValorCheck(rowData) {
     return rowData.tbTipoFuncionalidade.nome;
  }

  obterPermissaoes() {
    let listaIdsFuncionalidades: any[] = new Array();
    this.listaFuncionalidadesAssociadas.forEach(data => {
      listaIdsFuncionalidades.push(data.id);
    });

    this.novoPerfilAcessoService.obterFuncionalidesDisponiveis(listaIdsFuncionalidades).subscribe(data => {
      this.listaAcesso = data;
    })
  }

  obterMenuComFuncionalidadesAssociadas(idMenu) {
    this.novoPerfilAcessoService.obterMenuComFuncionalidadesAssociadas(idMenu).subscribe(data => {
      this.funcionalidades = data.tbFuncionalidades;
      if (!AppUtil.isBlankOrNull(this.funcionalidades)) {
        this.funcionalidades.sort((a, b) => {
          return b.id < a.id ? 1 : -1;
        });
      }
    })
  }

  marcaCheckBox(data){
     if(data.tbTipoFuncionalidade.nome != "Menu"){
      if($(".itemPai").find(".ui-chkbox-box.ui-state-active").length == 0){
        $(".itemPai").find(".ui-chkbox-box").click()
      }
     }
  }

  desmarcaCheckBox(data){
    if(data.data.tbTipoFuncionalidade.nome == "Menu"){
        $(".itemFilho").find(".ui-chkbox-box.ui-state-active").click()
    }
  }

  salvar() {
    this.perfil.tbFuncionalidades = this.listaFuncionalidadesAssociadas

     if (this.perfil.id == null) {
       this.perfil.dataCriacao = new Date();
       this.novoPerfilAcessoService.incluir(this.perfil).subscribe(
         data => {
           this.closeModal();
           this.notificacaoService.showAlert("Sucesso", "Perfil salvo com sucesso.", "success");
           this.salvarPerfilNotificacao.emit();

         }, error => {
           this.closeModal();
           this.notificacaoService.showAlert("Atenção", "Ocorreu um erro ao salvar o perfil.", "error");
           this.salvarPerfilNotificacao.emit();
         });
     } else {
       this.novoPerfilAcessoService.atualizar(this.perfil).subscribe(
         data => {
           this.closeModal();
           this.notificacaoService.showAlert("Sucesso", "Perfil atualizado com sucesso.", "success");
           this.salvarPerfilNotificacao.emit();
         }, error => {
           this.closeModal();
           this.notificacaoService.showAlert("Atenção", "Ocorreu um erro ao atualizar o perfil.", "error");
           this.salvarPerfilNotificacao.emit();
         }
       );
     }
  }

  closeModal() {
    this.displayDialog = false;
    this.userform.reset();
    this.salvarPerfilNotificacao.emit();
  }

}
