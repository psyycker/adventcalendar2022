const fs = require('fs');

const losses = [ 'BX', 'CY', 'AZ' ];
const wins = [ 'CX', 'AY', 'BZ' ];
const scores = {
  X: 1,
  Y: 2,
  Z: 3,
};

const WIN_SCORE = 6;
const DRAW_SCORE = 3;

const content = fs.readFileSync('./input.txt', {encoding: 'utf-8'});

const rounds = content.split('\n');

const result = rounds.reduce((acc, item) => {
  if (item === '') return acc;
  const move = item.charAt(0) + item.charAt(2);
  if (wins.includes(move)) {
    return acc + WIN_SCORE + scores[item.charAt(2)];
  } else if (losses.includes(move)) {
    return acc + scores[item.charAt(2)];
  } else {
    return acc + DRAW_SCORE + scores[item.charAt(2)];
  }
}, 0)

//End of part 1
console.log(result)


