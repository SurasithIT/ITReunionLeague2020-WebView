import React from "react";

class MatchData {
  constructor(id, stadiumNumber, kickOffTime, homeTeam, awayTeam, refereeTeam) {
    this.id = id;
    this.stadiumNumber = stadiumNumber;
    this.kickOffTime = kickOffTime;
    this.homeTeam = homeTeam;
    this.homeScores = 0;
    this.awayTeam = awayTeam;
    this.awayScores = 0;
    this.refereeTeam = refereeTeam;
  }
}

let matches = [];
for (let i = 1; i <= 36; i++) {
  matches.push(
    new MatchData(
      i,
      Math.floor(Math.random() * 2),
      new Date().toLocaleTimeString("th-TH", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
      }),
      Math.floor(Math.random() * 2),
      Math.floor(Math.random() * 9),
      Math.floor(Math.random() * 9),
      Math.floor(Math.random() * 9)
    )
  );
}
console.log(matches);

const Fixture = () => {
  return (
    <div className="container">
      <div className="table-responsive mat-elevation-z2">
        <table className="table table-hover table-striped text-center table-fixed table-shadow">
          <thead className="thead-dark">
            <tr>
              <th width="10%">KickOff</th>
              <th width="5%">Stadium</th>
              <th width="15%">Home</th>
              <th width="5%"></th>
              <th width="2%"></th>
              <th width="5%"></th>
              <th width="15%">Away</th>
              <th width="15%">Referee</th>
            </tr>
          </thead>
          <tbody>
            {matches.map((val) => {
              return (
                <tr key={val.id}>
                  <td>{val.kickOffTime}</td>
                  <td>{val.stadiumNumber}</td>
                  <td>{val.homeTeam}</td>
                  <td>{val.homeScores}</td>
                  <td>-</td>
                  <td>{val.awayScores}</td>
                  <td>{val.awayTeam}</td>
                  <td>{val.refereeTeam}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Fixture;
