module.exports = function toReadable (number) {
    const splittedNumber = number.toString().split('');

    function dec (d) {
        switch (d) {
            case '2':
                return ('twenty');
            case '3':
                return'thirty';
            case '4':
                return 'forty';
            case '5':
                return 'fifty';
            case '6':
                return 'sixty';
            case '7':
                return 'seventy';

            case '8':
                return 'eighty';

            case '9':
                return 'ninety';

        }
    }

    function nums (n) {
        switch (n) {
            case '1':
                return 'one';
            case '2':
                return 'two';
            case '3':
                return 'three';
            case '4':
                return 'four';
            case '5':
                return 'five';
            case '6':
                return 'six';
            case '7':
                return 'seven';
            case '8':
                return 'eight';
            case '9':
                return 'nine';
        }
    }

    function underTwenty(num) {
        switch (num) {
            case '1':
            case '01':
                return 'one';
            case '2':
            case '02':
                return 'two';
            case '3':
            case '03':
                return 'three';
            case '4':
            case '04':
                return 'four';
            case '5':
            case '05':
                return 'five';
            case '6':
            case '06':
                return 'six';
            case '7':
            case '07':
                return 'seven';
            case '8':
            case '08':
                return 'eight';
            case '9':
            case '09':
                return 'nine';
            case '10':
                return 'ten';
            case '11':
                return 'eleven';
            case '12':
                return 'twelve';
            case '13':
                return 'thirteen';
            case '14':
                return 'fourteen';
            case '15':
                return 'fifteen';
            case '16':
                return 'sixteen';
            case '17':
                return 'seventeen';
            case '18':
                return 'eighteen';
            case '19':
                return 'nineteen';
        }
    }

    let result = [];

    if (splittedNumber.length === 3) {
        result.push(nums(splittedNumber[0]) + ' hundred');
    }

    if (splittedNumber.length >= 2) {
        let numberTail = splittedNumber[splittedNumber.length - 2] + splittedNumber[splittedNumber.length - 1];
        let letteredTail = [];

        if(numberTail <= 19) {
            letteredTail = underTwenty(numberTail);
        } else {
            letteredTail.push(dec(numberTail[0]));
            letteredTail.push(nums(numberTail[1]));
            letteredTail = letteredTail.join(' ');
        }

        result.push(letteredTail);
        result = result.join(' ').trim()
    } else {
        if (number === 0) {
            result = 'zero';
        } else {
            result = nums(splittedNumber[0]);
        }
    }

    return result;
}


