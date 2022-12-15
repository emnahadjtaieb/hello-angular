export class StringUtils {

    static isBlank(str: string | undefined) {
        return (!str || /^\s*$/.test(str));
    }
}