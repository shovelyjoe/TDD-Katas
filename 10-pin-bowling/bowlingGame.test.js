const game = require('./bowlingGame');

let rollMany = ( n, pins ) => {
  for(let i = 0; i < n; i++)
    game.roll(pins);
}

test('Gutter Game', () => {
  rollMany(20,0);
  expect(game.getScore()).toBe(0);
});

test('All Ones', () => {
  rollMany(20,1);
  expect(game.getScore()).toBe(20);
});

