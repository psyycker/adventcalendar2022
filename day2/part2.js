const fs = require('fs');

const beats = {
  A: 'C',
  B: 'A',
  C: 'B'
};

const beatenBy = {
  C: 'A',
  A: 'B',
  B: 'C'
};

const scores = {
  A: 1,
  B: 2,
  C: 3,
}
const WIN_SCORE = 6;
const DRAW_SCORE = 3;


const content = fs.readFileSync('./input.txt', {encoding: 'utf-8'});
const rounds = content.split('\n');

const result = rounds.reduce((acc, round) => {
  const otherMove = round.charAt(0);
  const expectedResult = round.charAt(2);

  let moveScore;
  let moveToPlay;

  switch (expectedResult) {
    case 'X':
      moveToPlay = beats[otherMove];
      moveScore = scores[moveToPlay];
      return acc + moveScore;
    case 'Y':
      moveScore = scores[otherMove];
      return acc + DRAW_SCORE + moveScore;
    case 'Z':
      moveToPlay = beatenBy[otherMove];
      moveScore = scores[moveToPlay];
      return acc + WIN_SCORE + moveScore;
    default:
      return acc;
  }
}, 0)

console.log(result)
