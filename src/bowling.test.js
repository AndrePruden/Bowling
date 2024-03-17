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
    this.frameIndex = 0;
    for (var frame = 0; frame < 10; frame++){
      if(this.rolls[this.frameIndex] == 10) // Strike
      {
        this.puntaje += 10 + this.strikeBonus(this.frameIndex);
        this.frameIndex++;
      }
      else if(this.isSpare(this.frameIndex)) // Spare
      {
        this.puntaje += 10 + this.spareBonus(this.frameIndex);
        this.frameIndex += 2;
      }
      else
      {
        this.puntaje += this.sumOfBallsInFrame(this.frameIndex);
        this.frameIndex += 2;
      }
    }

    return this.puntaje;
  }

  sumOfBallsInFrame(frameIndex)
  {
    return this.rolls[frameIndex] + this.rolls[frameIndex+1];
  }

  isSpare(frameIndex)
  {
    return this.rolls[frameIndex] + this.rolls[frameIndex + 1] == 10;
  }

  spareBonus(frameIndex)
  {
    return this.rolls[frameIndex+2];
  }

  strikeBonus(frameIndex)
  {
    return this.rolls[frameIndex+1] + this.rolls[frameIndex+2];
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
    rollSpare(BowlingGame);
    BowlingGame.roll(3);
    rollMany(BowlingGame,17,0);
    expect(BowlingGame.score()).toEqual(16);
  });
});

describe("Score Bowling", () => {
  it("Strike", () => {
    let BowlingGame = new Game();
    rollStrike(BowlingGame);
    BowlingGame.roll(3);
    BowlingGame.roll(4);
    rollMany(BowlingGame, 16, 0);
    expect(BowlingGame.score()).toEqual(24);
  });
});

function rollMany(BowlingGame, n, pins){
  for (var i = 0; i < n; i++)
    BowlingGame.roll(pins);
}

function rollSpare(BowlingGame){
  BowlingGame.roll(5);
  BowlingGame.roll(5);
}

function rollStrike(BowlingGame){
  BowlingGame.roll(10);
}