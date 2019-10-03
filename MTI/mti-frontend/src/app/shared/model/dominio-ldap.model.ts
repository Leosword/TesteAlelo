import { Status } from "../constants/status";

export class DominioLdapModel {
    id: Number;
    nome: string;
    descricao: string;
    status: Status = Status.ATIVO;
    excluido: string;
    dataExclusao: Date;
}