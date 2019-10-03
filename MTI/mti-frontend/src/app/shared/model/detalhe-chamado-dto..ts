import { Status } from "../constants/status";
import { ProfileEnum } from "../enum/profile.enum";

export class DetalheChamadoDto {
    public numeroIncidente: Number;
    public persistentId: string;
    public departamento: string;
    public status: string;
    public areaIncidente: string;
    public grupo: string
    public abertoPor: string
    public email: string
    public localizacao: string
    public pa: string
    public relatadoPor: string
    public responsavel: string
    public usuarioFinalAfetado: string
    public telefone: string
    public ultimaModificacao: string
    public descricao: string
    public dataAbertura: Date;
    public dataUltimoDirecionamento: Date;
    public dataViolacaoSla: Date;
    
    constructor() {
    }
}