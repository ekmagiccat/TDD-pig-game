import Game from "./../src/pig-game.js"

describe("Game", ()=> {

test("should create base score for dieRoll, totalScore and currentScore.", () => {
const game = new Game(5,5,5,0);
expect(game.dieRoll).toBe(5);
  expect(game.turnScore).toBe(5);
  expect(game.totalScore).toBe(5);
  expect(game.id).toBe(0);
});
});