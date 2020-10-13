import React, { useState } from "react";
class TeamData {
  constructor(id, generation) {
    this.id = id;
    this.generation = generation;
    this.played = 0;
    this.won = 0;
    this.drawn = 0;
    this.lost = 0;
    this.goalFor = 0;
    this.goalAgainst = 0;
    this.goalDifferent = 0;
    this.points = 0;
  }
}

let teams = [];
for (let i = 1; i <= 9; i++) {
  teams.push(
    new TeamData(
      i,
      `${Math.floor(Math.random() * 18)} , ${Math.floor(Math.random() * 18)}`
    )
  );
}

const Table = () => {
  return (
    <div className="container">
      <div className="table-responsive mat-elevation-z2">
        <table className="table table-hover table-striped text-center table-fixed table-shadow">
          <thead className="thead-dark">
            <tr>
              <th width="5%">Team</th>
              <th width="20%">Generation</th>
              <th width="5%">Played</th>
              <th width="5%">Won</th>
              <th width="5%">Drawn</th>
              <th width="5%">Lost</th>
              <th width="5%">GF</th>
              <th width="5%">GA</th>
              <th width="5%">GD</th>
              <th width="10%">Points</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((val) => {
              return (
                <tr key={val.id}>
                  <td>{val.id}</td>
                  <td>{val.generation}</td>
                  <td>{val.played}</td>
                  <td>{val.won}</td>
                  <td>{val.drawn}</td>
                  <td>{val.lost}</td>
                  <td>{val.goalFor}</td>
                  <td>{val.goalAgainst}</td>
                  <td>{val.goalDifferent}</td>
                  <td>{val.points}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
