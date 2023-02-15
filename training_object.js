// let primerLeague = {
//     cloub: "Manchester United",
//     stadion: "Old Trafford",
//     size: {
//       height: 100,
//       width: 60,
//     },
//     golaScorer: "Rashford",
//     goalCount: 20,
//     assit: 10,
//     foot: true,
//     bestPlayer: [
//       {
//         name: "Cristiano Ronaldo",
//         age: "38",
//         goalOfutd: "+145 goals",
//         assistUtd: "64",
//       },
//       {
//         name: "Wayne Rooney",
//         age: "38",
//         goalOfutd: "253",
//         assistUtd: "101",
//       },
//       {
//         name: "Robin Van Persie",
//         age: "39",
//         goalOfutd: "86",
//         assistUtd: "35",
//       },
//       {
//         name: "Ryan Giggs",
//         age: "49",
//         goalOfutd: "114",
//         assistUtd: "35",
//       },
//     ],
//     titule: [
//       {
//         allTitule: [
//           {
//             ucl: 3,
//             primerLeague: 20,
//             faCup: 26,
//             worldCup: false,
//           },
//         ],
//         finalLoseCl: [],
//         loseLeague: [],
//         cupLose: [],
//       },
//     ],
//   };
// console.log(primerLeague);

//////////////////////////////////////////////////////////////////////////////////////////

function Players(name, age, goalofutd, assistofutd) {
  (this.name = name),
    (this.age = age),
    (this.goalofutd = goalofutd),
    (this.assistofutd = assistofutd);
}

function Titile() {
  (this.primerleaGue = 20),
    (this.faCup = 19),
    (this.championLeague = 3),
    (this.worldCup = false),
    (this.caraboaCup = 16),
    (this.europaLeague = 1);
}

function PrimerLeague(name) {
  (this.name = name),
    (this.stadion = "Old Trafford"),
    (this.typee = "Red Deviles"),
    (this.tribunCount = 83000),
    (this.bestplayer = []),
    (this.title = []),
      (this.addplayer = function (name, age, goalofutd, assistofutd) {
        const player = new Players(name, age, goalofutd, assistofutd);
        this.bestplayer[this.bestplayer.length] = player;
      }),
    (this.addtitle = function () {
      const title1 = new Titile();
      this.title[this.title.length] = title1;
    });
}

let primerLeague = new PrimerLeague("Manchester United");
primerLeague.addtitle();
primerLeague.addplayer("Cristiano Ronaldo", 39, "+149", "+63");
primerLeague.addplayer("Wayne Rooney", 38, "259+", "152");
primerLeague.addplayer("Robin Van Persie", 42, "125+", "100");
primerLeague.addplayer("Marcus Rashford", 24, "125+", "83");
primerLeague.addplayer("David Backham", 42, "100+", "44");
console.log(primerLeague);

function fnbestplayer(name, age, goalOfutd, assistUtd) {
  return { name, age, goalOfutd, assistUtd };
}

// let bestPlayer = [
//   fnbestplayer("Cristiano Ronaldo", 38, "+149", 68),
//   fnbestplayer("Wayne Roney", 39, "+249", 101),
//   fnbestplayer("Robin van Persie", 39, "86", 39),
// ];

// function fnsize(height, width) {
//   return {
//     height,
//     width,
//   };
// }
// let size = fnsize(100, 60);
// function fnallTitle(ucl, primerLeague, faCup, worldCup) {
//   return {
//     ucl,
//     primerLeague,
//     faCup,
//     worldCup,
//   };
// }

// let allTitle = fnallTitle(3, 20, 26, false);

// function fntitle(allTitle) {
//   return {
//     allTitle,
//   };
// }

// let title = [fntitle(allTitle)];

// function fnprimer(
//   cloub,
//   size,
//   stadion,
//   golaScorer,
//   goalCount,
//   assit,
//   foot,
//   bestPlayer,
//   title
// ) {
//   return {
//     cloub,
//     size,
//     stadion,
//     golaScorer,
//     goalCount,
//     assit,
//     foot,
//     bestPlayer,
//     title,
//   };
// }

// let primerLeague2 = fnprimer(
//   "Manchester United",
//   size,
//   "Old Trafford",
//   "Rashford",
//   20,
//   10,
//   true,
//   bestPlayer,
//   title
// );
// console.log(primerLeague2);
