import { Status } from "../constants/status";
import { ProfileEnum } from "../enum/profile.enum";
import { TbIncidentePropriedade } from "./tb-incidente-propriedade";
import { TbStatusFluxo } from "./tb-status-fluxo";

export class ChamadoDto {
    id: Number;
    numeroIncidente: Number;
    persistentId: string;
    departamento: string;
    status: string;
    areaIncidente: string;
    grupo: string
    dataAbertura: Date;
    dataUltimoDirecionamento: Date;
    dataUltimaModificacao: Date;
    dataViolacaoSLA: Date;
    tempoLimiteSla: Number;
    /**
    * É preenchido quando GI manda para Operação
    */
    dataInicioSlaMti: Date;
    
    /**
    * É preenchido quando GI manda para Operação
    * 
    * Obtem a data tempo limite do parametro sistema 
    * 
    * É a soma entre a data de agora + tempo limite do Parâmetro
    */
    dataFimSlaMti: Date;
    
    /**
    * HI no Diário de Bordo(dtInicioEvento)
    * 
    */
    dataEntradaIncidenteNovoMti: Date;
    
    /**
    * HF no Diário de Bordo(dtTerminoEvento)
    */
    dataAprovacaoMti: Date;
    slaViolado: Number;
    iconStatusEvento: string;
    flIncidentePai: string;
    tbIncidentePropriedade: TbIncidentePropriedade;
    tbStatusFluxo: TbStatusFluxo;

}