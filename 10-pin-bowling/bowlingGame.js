const game = () => {
  let score = 0;
  let rolls = new Array(21).fill(0);
  let currentRoll = 0;

  const isSpare = (frameIndex) => rolls[frameIndex] + rolls[frameIndex+1] === 10;

  return {
    getScore: () => {
      let score = 0;
      let frameIndex = 0;
      for(let frame = 0; frame < 10; frame++){
        if(rolls[frameIndex] === 10){//Strike
          score += 10 + rolls[frameIndex+1] + rolls[frameIndex+2];
          frameIndex++;
        }else if(isSpare(frameIndex)){
          score += 10 + rolls[frameIndex+2];
          frameIndex += 2;
        }else{
          score += rolls[frameIndex] + rolls[frameIndex+1];
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
