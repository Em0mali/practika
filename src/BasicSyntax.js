export function romanToInteger(str) {
    /*
    Напишите код, преобразующий число из римской записи в арабскую.
    На вход вы получите строку, ответом должно быть число.
     */
    var result = 0;
    var ema = 0;
    var qwer = 0;
    var asd;
    for (var i = 0; i < str.length; i++) {
        asd = ema;
        switch (str[i]) {
            case 'I':
                ema = 1;
                break;
            case 'V':
                ema = 5;
                break;
            case 'X':
                ema = 10;
                break;
            case 'L':
                ema = 50;
                break;
            case 'C':
                ema = 100;
                break;
            case 'D':
                ema = 500;
                break;
            case 'M':
                ema = 1000;
                break;
        }
        if (ema > asd) qwer = -2 * asd;
        result = result + qwer + ema;
        qwer = 0;
    }
    return result;
}
