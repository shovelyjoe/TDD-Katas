let score = 0;

const roll = pins => {
  score += pins
}

const getScore = () => {
  return score;
}

module.exports = {
  roll : roll,
  getScore : getScore
}
