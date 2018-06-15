const Game = require('./bowlingGame');

let game;
const resetGame = () => game = Game.game();

let rollMany = ( n, pins ) => {
  for(let i = 0; i < n; i++)
    game.roll(pins);
}

test('Gutter Game', () => {
  resetGame();
  rollMany(20,0);
  expect(game.getScore()).toBe(0);
});

test('All Ones', () => {
  resetGame();
  rollMany(20,1);
  expect(game.getScore()).toBe(20);
});

