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

describe("Score Bowling", () => {
  it("Deberia retornar 20", () => {
    let BowlingGame = new Game();
    for(var i=0; i<20; i++){
        BowlingGame.roll(1);
    }
    expect(BowlingGame.score()).toEqual(20);
  });
});

class Game{
    constructor()
    {
       this.puntaje = 0;
    }

    roll(n)
    {
      this.puntaje += n;
    }

    score()
    {
      return this.puntaje;
    }
}