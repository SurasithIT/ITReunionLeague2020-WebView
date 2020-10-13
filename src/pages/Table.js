import React, { useState } from "react";
import _ from "lodash";

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
  _.sortBy(teams, ["points", "goalDifferent"]);
  const [table, setTable] = useState(teams);

  return (
    <div>
      <div className="content my-2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card card-outline card-dark shadow">
                <div className="card-header table-shadow">
                  <div className="row">
                    <div className="table-responsive mat-elevation-z2">
                      <table className="table table-hover table-striped text-center table-fixed ">
                        <thead className="thead-dark">
                          <tr>
                            <th width="20%">Generation</th>
                            <th width="5%">Played</th>
                            <th width="10%">Points</th>
                            <th width="5%">GD</th>
                          </tr>
                        </thead>
                        <tbody>
                          {table.map((val) => {
                            return (
                              <tr key={val.id}>
                                <td>{val.generation}</td>
                                <td>{val.played}</td>
                                <td>{val.points}</td>
                                <td>{val.goalDifferent}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
