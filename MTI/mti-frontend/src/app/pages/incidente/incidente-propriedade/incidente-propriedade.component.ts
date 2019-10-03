import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { TbIncidentePropriedade } from '../../../shared/model/tb-incidente-propriedade';

@Component({
  selector: 'app-mti-incidente-propriedade',
  templateUrl: './incidente-propriedade.component.html',
  styleUrls: ['./incidente-propriedade.component.css']
})
export class IncidentePropriedadeComponent implements OnInit {

  @Input() numeroIncidente: number;

  @Input() idIncidente: number;

  @Input() persistentId: number;

  @Input() propriedadeIncidente: TbIncidentePropriedade;

  propriedade: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.propriedade = this.fb.group({
      'nomeDoSistema': new FormControl(''),
      'tipoDoErro': new FormControl(''),
      'quantidadeUsuariosImpactados': new FormControl(''),
      'quantidadeUsuariosTrabalhandoNoMomento': new FormControl(''),
      'departamentoInteiroComMesmoProblema': new FormControl(''),
      'problemaOcorreEmTodasMaquinas': new FormControl(''),
      'quantidadeDeMaquinasComProblema': new FormControl(''),
      'erroOcorreComOutrosColaboradores': new FormControl(''),
      'funcionalidadeComErro': new FormControl(''),
      'exemplos': new FormControl(''),
      'loginDeAcessoImpactado': new FormControl(''),
      'dataHoraInicioFalha': new FormControl(''),
      'localizacao': new FormControl(''),
      'endereco': new FormControl(''),
      'nomeDaEmpresaPrestadoraDeServico': new FormControl(''),
    });
  }
  ngAfterViewInit() {
    $("div.ui-dialog-content").scrollTop(0);
  }
}
