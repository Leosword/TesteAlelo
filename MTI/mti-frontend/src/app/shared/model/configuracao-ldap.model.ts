import { Flag } from "../constants/flag";
import { DominioLdapModel } from "./dominio-ldap.model";

export class ConfiguracaoLdapModel {

    id: Number;
    nome: string;
    enderecoProvedor: string;
    base: string;
    nomeAtributoLogin: string;
    usuario: string;
    senha: string;
    excluido: string = Flag.NAO;
    dataExclusao: Date;
    dominioLdap: DominioLdapModel;
}