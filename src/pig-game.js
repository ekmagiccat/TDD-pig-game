export default function Game(dieRoll, turnScore, totalScore, id) {
  this.dieRoll = dieRoll;
  this.turnScore = turnScore;
  this.totalScore = totalScore;
  this.id = id;
}

Game.prototype.Roll = function () {
  this.dieRoll = Math.ceil(Math.random() * 6);
};

Game.prototype.rollTurn = function () {
  if (this.dieRoll === 1) {
    this.turnScore = 0;
  } else {
    this.dieRoll > 1;
    this.turnScore += this.dieRoll;
  }
  return this.turnScore;
};

Game.prototype.turnTotal = function () {
  this.totalScore += this.turnScore;
  this.turnScore = 0;
};

Game.prototype.firstTo100 = function () {
  if (this.totalScore >= 10) {
    console.log(this.totalScore);
    return this.totalScore;
  }
  return false;
};
