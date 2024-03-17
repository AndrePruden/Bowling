//import sumar from "./sumador.js";
class Game{
  constructor()
  {
     this.rolls = new Array(20).fill(0);
     this.currentRoll = 0;
  }

  roll(pins)
  {
    this.rolls[this.currentRoll] = pins;
    this.currentRoll++;
  }

  score()
  {
    this.puntaje = 0;
    this.i = 0;
    for (var frame = 0; frame < 10; frame++){
      if(this.rolls[this.i] + this.rolls[this.i+1] == 10) // Spare
      {
        this.puntaje += 10 + this.rolls[this.i+2];
        this.i += 2;
      }
      else
      {
        this.puntaje += this.rolls[this.i] + this.rolls[this.i+1];
        this.i += 2;
      }
    }

    return this.puntaje;
  }
}


describe("Score Bowling", () => {
  it("Deberia retornar 0", () => {
    let BowlingGame = new Game();
    rollMany(BowlingGame,20,0);
    expect(BowlingGame.score()).toEqual(0);
  });
});

describe("Score Bowling", () => {
  it("Deberia retornar 20", () => {
    let BowlingGame = new Game();
    rollMany(BowlingGame,20, 1);
    expect(BowlingGame.score()).toEqual(20);
  });
});

describe("Score Bowling", () => {
  it("Spare", () => {
    let BowlingGame = new Game();
    BowlingGame.roll(5);
    BowlingGame.roll(5); //Spare
    BowlingGame.roll(3);
    rollMany(BowlingGame,17,0);
    expect(BowlingGame.score()).toEqual(16);
  });
});

function rollMany(BowlingGame, n, pins){
  for (var i = 0; i < n; i++)
    BowlingGame.roll(pins);
}