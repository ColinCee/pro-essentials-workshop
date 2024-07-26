interface Scores {
  math: number;
  english: number;
  science: number;
  [key: string]: number;
}

const scores: Scores = {
  math: 95,
  english: 90,
  science: 85,
};

scores.athletics = 100;
scores.french = 75;
scores.spanish = 70;
