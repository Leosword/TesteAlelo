import { Status } from "../constants/status";
import { ProfileEnum } from "../enum/profile.enum";

export class TbIncidentePropriedade {
    nomeSistema: string;
    tipoErro: string;
    quantidadeUsuariosImpactados: string;
    quantidadeUsuariosTrabalhandoMomento: string;
    departamentoInteiroMesmoProblema: string;
    problemaOcorreTodasMaquinas: string
    seNaoEmQuantasMaquinasOcorreProblema: string
    esteErroOcorreOutrosColaboradoresContratosTerminais: string
    funcionalidadeErro: string
    liste5Exemplos: string
    loginAcessoUsuariosImpactados: string
    dataHorarioInicioFalha: Date;
    cidadeEstado: string
    endereco: string
    nomeEmpresaPrestadoraServico: string
}