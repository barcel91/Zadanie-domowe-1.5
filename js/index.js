var points = {
    won: 3,
    draw: 1,
    lost: 0,
}

var team1 = {
    timesWon: 3,
    timesDraw: 4,
    timesLost: 2,
    points: function () {
        return points.won*this.timesWon + points.draw*this.timesDraw + points.lost*this.timesLost
}
}

var team2 = {
    timesWon: 5,
    timesDraw: 0,
    timesLost: 2,
    points: function () {
        return points.won*this.timesWon + points.draw*this.timesDraw + points.lost*this.timesLost
    }
}

var team3 = {
    timesWon: 0,
    timesDraw: 0,
    timesLost: 1,
    points: function () {
        return points.won*this.timesWon + points.draw*this.timesDraw + points.lost*this.timesLost
    }
}
console.log(team1.points())
console.log(team2.points())
console.log(team3.points())