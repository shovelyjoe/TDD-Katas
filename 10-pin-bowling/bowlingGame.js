const game = () => {
  let score = 0;
  let rolls = new Array(21).fill(0);
  let currentRoll = 0;

  const sumOfBallsInFrame = frameIndex => rolls[frameIndex] + rolls[frameIndex + 1];
  const spareBonus = frameIndex => rolls[frameIndex + 2];
  const strikeBonus = frameIndex => rolls[frameIndex + 1] + rolls[frameIndex + 2];
  const isSpare = frameIndex => rolls[frameIndex] + rolls[frameIndex+1] === 10;
  const isStrike = frameIndex => rolls[frameIndex] === 10;

  return {
    getScore: () => {
      let score = 0;
      let frameIndex = 0;
      for(let frame = 0; frame < 10; frame++){
        if(isStrike(frameIndex)){
          score += 10 + strikeBonus(frameIndex);
          frameIndex++;
        }else if(isSpare(frameIndex)){
          score += 10 + spareBonus(frameIndex);
          frameIndex += 2;
        }else{
          score += sumOfBallsInFrame(frameIndex);
          frameIndex += 2;
        }
      }
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
