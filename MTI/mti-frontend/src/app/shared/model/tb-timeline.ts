import { ChamadoDto } from "./chamado-dto";
import { TbStatusFluxo } from "./tb-status-fluxo";
import { TbAnexo } from "./tb-anexo";

export class TbTimeline {
    id: number;
    comentario: string;
    dataCriacao: Date;
    tbIncidente: ChamadoDto;
    tbStatusFluxo: TbStatusFluxo;
    icone: string;
    anexos: TbAnexo[];
}