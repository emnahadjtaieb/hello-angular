export class NumericUtils {

    static isNumber(str: string | null): boolean {
        if (str == null) {
            return false;
        }
        if (typeof str !== 'string') {
            return false;
        }

        if (str.trim() === '') {
            return false;
        }

        return !Number.isNaN(Number(str));
    }

    static isNotNumber(str: string | null): boolean {
        return !NumericUtils.isNumber(str);
    }
}