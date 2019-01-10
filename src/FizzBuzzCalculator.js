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

export async function playgameRemoteInline(input) {
    return fetch('https://sf5oz1x80a.execute-api.us-west-1.amazonaws.com/api/fizzbuzz/'+input)
        .then((response) => { return  response.json() })
        .then((json) => { parseJsonIntoValue(json)});
}

function parseJsonIntoValue(json) {
    return json.result;
}
