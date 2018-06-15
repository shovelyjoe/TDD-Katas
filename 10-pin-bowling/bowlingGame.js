const game = () => {
  let score = 0;
  let rolls = new Array(21).fill(0);
  let currentRoll = 0;

  return {
    getScore: () => {
      let score = 0;
      let i = 0; //Un-informative Name
      for(let frame = 0; frame < 10; frame++){
        if(rolls[i] + rolls[i+1] === 10){
          score += 10 + rolls[i+2]; //Spare
          i += 2;
        }else{
          score += rolls[i] + rolls[i+1];
          i += 2;
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
