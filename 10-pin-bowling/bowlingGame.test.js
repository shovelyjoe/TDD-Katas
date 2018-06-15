const Game = require('./bowlingGame');

let game;
const resetGame = () => game = Game.game();

let rollMany = ( n, pins ) => {
  for(let i = 0; i < n; i++)
    game.roll(pins);
}

let rollSpare = () => {
  game.roll(5);
  game.roll(5);
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

test('One Spare', () => {
  resetGame();
  rollSpare();
  game.roll(3);
  rollMany(17,0);
  expect(game.getScore()).toBe(16);
});

