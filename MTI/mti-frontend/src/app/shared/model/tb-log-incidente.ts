import { Status } from "../constants/status";
import { ProfileEnum } from "../enum/profile.enum";

export class TbLogIncidente {
    public numeroIncidente: Number;
    public persistenceId: string;
    public tipo: string;
    public criadoPor: string;
    public descricao: string;
    public dataCriacao: Date;
    public tempoGasto: Date;
    
    constructor() {
    }
}