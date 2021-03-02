import moment from "moment";

const Age = 30;
export const fakeInterests = [
  {
    id: 1,
    name: "Soccer",
    type: "Sport",
    current: true,
    detail: "Soccer is a Sport and Sports are cool",
  },
  {
    id: 2,
    name: "Football",
    type: "Sport",
    current: true,
    detail: "Football is a Sport and Sports are physical",
  },
  {
    id: 3,
    name: "Chess",
    type: "Game",
    current: false,
    detail: "Chess is a game and games are fun",
  },
  {
    id: 4,
    name: "Racing",
    type: "Sport",
    current: false,
    detail: "Racing is a loud sport",
  },
  {
    id: 5,
    name: "Horseback Riding",
    type: "Sport",
    current: true,
    detail: "Horseback Riding is an ancient sport",
  },
];

export const fakeSkills = [
  {
    id: 1,
    name: "Reading",
    type: "Essential",
    DateLearned: moment().subtract(Age, "years").add(2, "years").format(),
    detail: "Reading is essential and fun",
  },
  {
    id: 2,
    name: "Writing",
    type: "Essential",
    DateLearned: moment().subtract(Age, "years").add(2, "years").format(),
    detail: "Writing is essential and fun",
  },
  {
    id: 3,
    name: "Riding A Bike",
    type: "Practical",
    DateLearned: moment().subtract(Age, "years").add(5, "years").format(),
    detail: "Riding A Bike is not essential",
  },
  {
    id: 4,
    name: "Driving A Car",
    type: "Practical",
    DateLearned: moment().subtract(Age, "years").add(16, "years").format(),
    detail: "Driving A Car is essential in some countries",
  },
  {
    id: 5,
    name: "Coding",
    type: "Professional",
    DateLearned: moment().subtract(Age, "years").add(24, "years").format(),
    detail: "Coding is profitable",
  },
];
