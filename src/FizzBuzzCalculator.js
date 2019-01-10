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
    if(input === '') return '';
    try {
        const response = await fetch('https://sf5oz1x80a.execute-api.us-west-1.amazonaws.com/api/fizzbuzz/' + parseInt(input),
        );
        const json = await response.json();
        return await json.result;
    }
    catch (e) {
        console.log("caught exception", e);
    }
}

