const fs = require('fs');

const content = fs.readFileSync('./input.txt', { encoding: 'utf-8'});

const lines = content.split('\n');

const cumulated = lines.reduce((acc, item) => {
  if (item === '') {
    acc.totals.push(acc.current);
    acc.current = 0;
  } else {
    acc.current += parseInt(item);
  }
  return acc;
}, {current: 0, totals: []})

const sorted = cumulated.totals.sort((a, b) => a < b ? 1 : -1);

//Answer for part 1
console.log(sorted[0])

const topThree = sorted[0] + sorted[1] + sorted[2];

console.log(topThree);
