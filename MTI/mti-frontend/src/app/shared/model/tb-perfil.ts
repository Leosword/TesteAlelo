import { Status } from "../constants/status";
import { Flag } from "../constants/flag";
import { TbFuncionalidade } from "./tb-funcionalidade";

export class TbPerfil {
    id: number;
    nome: string;
    descricao: string;
    flAtivo: string = Flag.SIM;
    iconFlAtivo: string;
    dataCriacao: Date;
    tbFuncionalidades = new Array() as Array<TbFuncionalidade>;
}