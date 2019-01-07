export function playgame(input) {
        if( input === 0 ||
            input === '' ||
            (input % 3 !== 0 && input % 5 !== 0)){
            
            return input
        }
        return fizzy(input) + buzzy(input);
    }

    function fizzy(input) {
        if(input % 3 === 0) return 'fizz';
        return '';
    }

    function buzzy(input) {
        if(input % 5 === 0) return 'buzz';
        return '';
    }