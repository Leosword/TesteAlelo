import { DatePipe } from "@angular/common";
import { AppUtil } from "./app-util";

export class DateUtil {
    static datePipe = new DatePipe('en-US');
    static FORMATO_DATA_PADRAO = "dd/MM/yyyy";
    static FORMATO_DATA_HORA_PADRAO = "dd/MM/yyyy HH:mm";
    static FORMATO_DATA_HORA_COMPONENT_HTML = "yyyy-MM-ddTHH:mm";
    static FORMATO_DATA_HORA_BANCO_DADOS = "yyyy-MM-ddTHH:mm:ss.SSS";

    static PATTERN_DATETIME = /^\d\d\d\d-([0]{0,1}[1-9]|1[012])-([1-9]|([012][0-9])|(3[01]))T[012]{0,1}[0-9]:[0-5][0-9]$/;

    public static formataData(valor: any, formato: string): string {

        let retorno: string = null;
        if (!AppUtil.isBlankOrNull(valor) && !AppUtil.isBlankOrNull(formato)) {
            retorno = this.datePipe.transform(valor, formato);
        }

        return retorno;
    }

    public static subtraiDatasRetornoHora(date1, date2) {
        //Get 1 day in milliseconds
        var one_day = 1000 * 60 * 60 * 24;

        // Convert both dates to milliseconds
        var date1_ms = date1.getTime();
        var date2_ms = date2.getTime();

        // Calculate the difference in milliseconds
        var difference_ms = date2_ms - date1_ms;
        //take out milliseconds
        difference_ms = difference_ms / 1000;
        var seconds = Math.floor(difference_ms % 60);
        difference_ms = difference_ms / 60;
        var minutes = Math.floor(difference_ms % 60);
        difference_ms = difference_ms / 60;
        var hours = Math.floor(difference_ms % 24);
        var days = Math.floor(difference_ms / 24);

        hours += (24 * days);

        return hours + ':' + AppUtil.leftPad(minutes, 2) + ':' + AppUtil.leftPad(seconds, 2);
    }

    public static formataDatePicker(){
        let pt = {
            firstDayOfWeek: 0,
            dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
            dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
            dayNamesMin: ['Do', 'Se', 'Te', 'Qu', 'Qu', 'Se', 'Sa'],
            monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
              'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
            today: 'Hoje',
            clear: 'Limpar'
          };
          return pt;
    }

}