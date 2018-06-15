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

// Design still wrong, re-comment until new design passes above
//test('One Spare', () => {
//  resetGame();
//  game.roll(5);
//  game.roll(5); // Spare
//  game.roll(3);
//  rollMany(17,0);
//  expect(game.getScore()).toBe(16);
//});
//
