const points = {
    won: 3,
    draw: 1,
    lost: 0,
}

const team1 = {
    timesWon: 3,
    timesDraw: 4,
    timesLost: 2
}
const team2 = {
    timesWon: 5,
    timesDraw: 0,
    timesLost: 2
}

const team3 = {
    timesWon: 0,
    timesDraw: 0,
    timesLost: 1
}

const totalPoints = function (team) {
    return (
      points.won * team.timesWon +
      points.draw * team.timesDraw +
      points.lost * team.timesLost
    );
  };

  const totalWon = function (team) {
    return (team.timesWon);
  };

  const totalDraw = function (team) {
    return (team.timesDraw);
  };
  
  const totalLosts = function (team) {
    return (team.timesLost);
  };

  console.log("Drużyna 1 zdobyła łącznie ", totalPoints(team1), " punktów.");
  console.log("Drużyna 1 wygrała ", totalWon(team1), " razy, zremisowała ", totalDraw(team1), " razy, i przegrała ", totalLosts(team1), " razy.");
  console.log("Drużyna 2 zdobyła łącznie ", totalPoints(team2), " punktów.");
  console.log("Drużyna 2 wygrała ", totalWon(team2), " razy, zremisowała ", totalDraw(team2), " razy, i przegrała ", totalLosts(team2), " razy.");
  console.log("Drużyna 3 zdobyła łącznie ", totalPoints(team3), " punktów.");
  console.log("Drużyna 3 wygrała ", totalWon(team3), " razy, zremisowała ", totalDraw(team3), " razy, i przegrała ", totalLosts(team3), " raz.");