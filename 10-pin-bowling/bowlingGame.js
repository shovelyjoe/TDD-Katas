const game = () => {
  let rolls = new Array(21).fill(0);
  let currentRoll = 0;

  const sumOfBallsInFrame = frameIndex => rolls[frameIndex] + rolls[frameIndex+1];
  const strikeRolled = frameIndex => rolls[frameIndex] === 10;
  const spareRolled = frameIndex => rolls[frameIndex] + rolls[frameIndex+1] === 10;
  const strikeBonus = frameIndex => rolls[frameIndex+1] + rolls[frameIndex+2];
  const spareBonus = frameIndex => rolls[frameIndex+2];

  const bowlingGame = {
    getScore : () => {
      let score = 0;
      let frameIndex = 0;
      for(let frame=0; frame < 10; frame++){
        if(strikeRolled(frameIndex)){
          score += 10 + strikeBonus(frameIndex);
          frameIndex += 1;
        }else if(spareRolled(frameIndex)){
          score += 10 + spareBonus(frameIndex);
          frameIndex += 2;
        }else{
          score += sumOfBallsInFrame(frameIndex);
          frameIndex += 2;
        }
      }
      return score;
    },
    roll : pins => rolls[currentRoll++] = pins
  };
  return bowlingGame;
};

module.exports = {
  game : game
};
