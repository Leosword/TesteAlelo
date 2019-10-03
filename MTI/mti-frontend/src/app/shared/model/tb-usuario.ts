
import { Status } from "../constants/status";
import { ProfileEnum } from "../enum/profile.enum";
import { TbPerfil } from "./tb-perfil";
import { TbOperacao } from "./tb-operacao";

export class TbUsuario {
    public id: Number;
    public nome: string;
    public loginDeRede: string;
    public senha: string
    public confirmaSenha: string
    public email: string;
    public status: Status = Status.ATIVO;
    public dataCadastro: Date;
    public dataExclusao: Date;
    public iconStatus: string;
    public descricao: string; 
    public profile: string;
    tbOperacao: TbOperacao;
    tbPerfils = new Array() as Array<TbPerfil>;
    
    constructor() {
    }
}