export class AppUtil {

    public static isBlankOrNull(val: any) {
        return (typeof val == 'undefined' || val === undefined || val == null || val == '') ? true : false;
    }

    public static leftPad(value, totalWidth) {
        var length = totalWidth - value.toString().length + 1;
        return Array(length).join('0') + value;
    }
}