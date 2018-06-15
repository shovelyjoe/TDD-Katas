const game = () => {
  let score = 0;
  let rolls = new Array(21);
  let currentRoll = 0;

  return {
    getScore: () => score,
    roll: (pins) => {
      score += pins;
      rolls[currentRoll++] = pins;
    }
  }
}

module.exports = {
  game : game
};
