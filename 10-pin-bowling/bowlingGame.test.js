const Game = require('./bowlingGame');

let game;
const resetGame = () => game = Game.game();

const rollMany = (rolls, pins) => {
  for(let i = 0; i < rolls; i++)
    game.roll(pins);
}

const rollSpare = () => {
  game.roll(5);
  game.roll(5);
}

const rollStrike = () => game.roll(10);

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

test('One Strike', () => {
  resetGame();
  rollStrike();
  game.roll(4);
  game.roll(3);
  rollMany(16,0);
  expect(game.getScore()).toBe(24);
});

test('Perfect Game', () => {
  resetGame();
  rollMany(12,10);
  expect(game.getScore()).toBe(300);
});

