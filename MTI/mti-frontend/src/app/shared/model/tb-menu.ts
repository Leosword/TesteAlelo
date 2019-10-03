import { Status } from "../constants/status";
import { Flag } from "../constants/flag";
import { TbFuncionalidade } from "./tb-funcionalidade";

export class TbMenu {
    id: number;
    nome: string;
    descricao: string;
    tbFuncionalidades = new Array() as Array<TbFuncionalidade>;
}