//import sumar from "./sumador.js";

describe("Score Bowling", () => {
  it("Deberia retornar 0", () => {
    let BowlingGame = new Game();
    for(var i=0; i<20; i++){
        BowlingGame.roll(0);
    }
    expect(BowlingGame.score()).toEqual(0);
  });
});

class Game{
    roll(n)
    {

    }

    score()
    {
      return 0;
    }
}