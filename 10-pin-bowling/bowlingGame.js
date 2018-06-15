const game = () => {
  let score = 0;
  let rolls = new Array(21).fill(0);
  let currentRoll = 0;

  return {
    getScore: () => {
      let score = 0;
      for(let i = 0; i < rolls.length; i++)
        if(rolls[i] + rolls[i+1] === 10) //Spare
          score += //Design still wrong - need to check as frames, not two rolls
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
