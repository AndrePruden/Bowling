//import sumar from "./sumador.js";
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

let BowlingGame = new Game();

describe("Score Bowling", () => {
  it("Deberia retornar 0", () => {
    var n = 20;
    var pins = 0;
    rollMany(n,pins);
    expect(BowlingGame.score()).toEqual(0);
  });
});

describe("Score Bowling", () => {
  it("Deberia retornar 20", () => {
    for(var i=0; i<20; i++){
        BowlingGame.roll(1);
    }
    expect(BowlingGame.score()).toEqual(20);
  });
});

function rollMany(n, pins){
  for (var i = 0; i < n; i++)
    BowlingGame.roll(pins);
}