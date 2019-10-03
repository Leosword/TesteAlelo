import { Status } from "../constants/status";
import { Flag } from "../constants/flag";
import { TbTipoFuncionalidade } from "./tb-tipo-funcionalidade";

export class TbFuncionalidade {
    id: number;
    nome: string;
    caminho: string;
    descricao: string;
    flAtivo: string = Flag.SIM;
    iconFlAtivo: string;
    dataCriacao: Date;
    tipoFuncioinalidade: TbTipoFuncionalidade;
}