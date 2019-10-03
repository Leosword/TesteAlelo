import { Flag } from "../constants/flag";

export class TbOperacao {
    id: number;
    nome: string;
    descricao: string;
    flAtivo: string = Flag.SIM;
    dataCriacao: Date;
}