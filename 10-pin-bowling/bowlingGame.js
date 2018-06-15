const game = () => {
  let score = 0;
  return {
    getScore: () => score,
    roll: (pins) => score += pins
  }
}

module.exports = {
  game : game
};
