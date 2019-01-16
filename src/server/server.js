const express = require('express');

const app = express();
const port = 3000;
// const fizzbuzz = require('../server/fizzbuzz-calculator');

app.route('/fizzbuzz').get((req, res) => {
    res.send('hello world'); 
  });

app.route('/fizzbuzz').post((req, res) => {
    res.send('You made a post!');
  });

app.route('/fizzbuzz/:number').post(
  (req,res) => {
    const result = playgame(parseInt(req.params.number));
    res.send(result);
  });

app.listen(port, () => { console.log('Example app listening on port '+port) });


function playgame(number){
  if( number === 0 ||
    number === '' ||
    (number % 3 !== 0 && number % 5 !== 0)){
    return number
  }
  return fizzy(number) + buzzy(number);
};

function fizzy(input) {
  if(input % 3 === 0) return 'fizz';
  return '';
}

function buzzy(input) {
  if(input % 5 === 0) return 'buzz';
  return '';
}