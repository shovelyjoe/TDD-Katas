const game = require('./bowlingGame');

test('Gutter Game', () => {
  for(let i = 0; i < 20; i++)
    game.roll(0);
  expect(game.score()).toBe(0);
});

test('All Ones', () => {
  for(let i = 0; i < 20; i++)//Duplicated for loop
    game.roll(1);
  expect(game.score()).toBe(20);
});

