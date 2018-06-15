const game = () => {
  let score = 0;
  let rolls = new Array(21).fill(0);
  let currentRoll = 0;

  return {
    getScore: () => {
      let score = 0;
      for(let i = 0; i < rolls.length; i++)
        score += rolls[i];
      return score;
    },
    roll: (pins) => {
      rolls[currentRoll++] = pins;
    }
  }
}

module.exports = {
  game : game
};
