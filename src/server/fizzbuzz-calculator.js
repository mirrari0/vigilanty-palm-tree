module.export = () => {
  this.playgame = (number) => {
    if( number === 0 ||
      number === '' ||
      (number % 3 !== 0 && number % 5 !== 0)){
        return number
    }
    return fizzy(number) + buzzy(number);
  }
}

function fizzy(input) {
  if(input % 3 === 0) return 'fizz';
  return '';
}

function buzzy(input) {
  if(input % 5 === 0) return 'buzz';
  return '';
}