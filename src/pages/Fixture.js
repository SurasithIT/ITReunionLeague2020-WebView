import React, { useState, useEffect } from "react";
import _ from "lodash";
import { trackPromise } from "react-promise-tracker";
import axios from "axios";
import moment from "moment";

// class MatchData {
//   constructor(id, stadiumNumber, kickOffTime, homeTeam, awayTeam, refereeTeam) {
//     this.id = id;
//     this.stadiumNumber = stadiumNumber;
//     this.kickOffTime = kickOffTime;
//     this.homeTeam = homeTeam;
//     this.homeScores = 0;
//     this.awayTeam = awayTeam;
//     this.awayScores = 0;
//     this.refereeTeam = refereeTeam;
//   }
// }

// let matches = [];
// for (let i = 1; i <= 36; i++) {
//   matches.push(
//     new MatchData(
//       i,
//       Math.floor(Math.random() * 2) + 1,
//       new Date().toLocaleTimeString("th-TH", {
//         hour12: false,
//         hour: "2-digit",
//         minute: "2-digit",
//       }),
//       `รุ่น ${Math.floor(Math.random() * 9)}`,
//       `รุ่น ${Math.floor(Math.random() * 9)}`,
//       `รุ่น ${Math.floor(Math.random() * 9)}`,
//       Math.floor(Math.random() * 9)
//     )
//   );
// }

// const Fixture = () => {
//   _.sortBy(matches, ["kickOffTime", "stadiumNumber"]);
//   const [fixture, setFixture] = useState(matches);
//   const [fixtureFiltered, setFixtureFiltered] = useState(fixture);
//   const [stadium, setStadium] = useState(0);

//   useEffect(() => {
//     if (+stadium === 0) {
//       setFixtureFiltered(fixture);
//     } else {
//       let filtered = fixture.filter(
//         (match) => match.stadiumNumber === +stadium
//       );
//       setFixtureFiltered(filtered);
//     }
//   }, [fixture, stadium]);

//   return (
//     <div>
//       <div className="content my-2">
//         <div className="container-fluid">
//           <div className="row">
//             <div className="col-12">
//               <div className="card card-outline card-dark shadow">
//                 <div className="card-header table-shadow">
//                   <div className="row my-3">
//                     <div className="col-12 text-center ">
//                       <div
//                         className="btn-group btn-group-toggle"
//                         data-toggle="buttons"
//                       >
//                         <label className="btn btn-outline-primary active">
//                           <input
//                             type="radio"
//                             name="allStadium"
//                             id="allStadium"
//                             autoComplete="off"
//                             defaultChecked
//                             value={0}
//                             onClick={(event) => {
//                               setStadium(event.target.value);
//                             }}
//                           />
//                           All Stadium
//                         </label>
//                         <label className="btn btn-outline-primary">
//                           <input
//                             type="radio"
//                             name="stadium1"
//                             id="stadium1"
//                             autoComplete="off"
//                             value={1}
//                             onClick={(event) => {
//                               setStadium(event.target.value);
//                             }}
//                           />
//                           Stadium 1
//                         </label>
//                         <label className="btn btn-outline-primary">
//                           <input
//                             type="radio"
//                             name="stadium2"
//                             id="stadium2"
//                             autoComplete="off"
//                             value={2}
//                             onClick={(event) => {
//                               setStadium(event.target.value);
//                             }}
//                           />
//                           Stadium 2
//                         </label>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="row">
//                     <div className="table-responsive mat-elevation-z2">
//                       <table className="table table-hover table-striped text-center table-fixed ">
//                         <thead className="thead-dark">
//                           <tr>
//                             <th width="15%">Home</th>
//                             <th width="15%"></th>
//                             <th width="15%">Away</th>
//                             <th width="15%">Referee</th>
//                           </tr>
//                         </thead>
//                         <tbody>
//                           {fixtureFiltered.map((val) => {
//                             return (
//                               <tr key={val.id}>
//                                 <td>{val.homeTeam}</td>
//                                 <td>
//                                   <ul>
//                                     <li>{val.kickOffTime}</li>
//                                     <li
//                                       className="p-0"
//                                       style={{
//                                         color: "#000080",
//                                       }}
//                                     >
//                                       StdNo. {val.stadiumNumber}
//                                     </li>
//                                     <li style={{ fontSize: "1.2rem" }}>
//                                       {val.homeScores} - {val.awayScores}
//                                     </li>
//                                   </ul>
//                                 </td>
//                                 <td>{val.awayTeam}</td>
//                                 <td>{val.refereeTeam}</td>
//                               </tr>
//                             );
//                           })}
//                         </tbody>
//                       </table>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

const Fixture = () => {
  const [datamatch, setDatamatch] = useState([]);
  _.sortBy(datamatch, ["Kickoff", "StadiumId"]);
  const [fixtureFiltered, setFixtureFiltered] = useState(datamatch);
  const [stadium, setStadium] = useState(0);

  useEffect(() => {
    const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
    const URL = "https://itreuionapi.herokuapp.com/match";
    trackPromise(
      axios({
        method: "get",
        url: PROXY_URL + URL,
        data: {
          KEY: "VALUE",
        },
      })
        .then((res) => {
          console.log(res.data.matchs);
          setDatamatch(res.data.matchs);
        })
        .catch((err) => console.log(err))
    );
  }, []);

  useEffect(() => {
    if (+stadium === 0) {
      setFixtureFiltered(datamatch);
    } else {
      let filtered = datamatch.filter((match) => match.StadiumId === +stadium);
      setFixtureFiltered(filtered);
    }
  }, [datamatch, stadium]);

  const Match = (props) => {
    return (
      <tr>
        <td>{props.match.HomeTeam.name}</td>
        <td>
          <ul>
            <li>
              {props.match.Kickoff &&
                moment(props.match.Kickoff).utc().format("HH:mm")}
            </li>
            <li
              className="p-0"
              style={{
                color: "#000080",
              }}
            >
              StdNo. {props.match.StadiumId}
            </li>
            <li style={{ fontSize: "1.2rem" }}>
              {props.match.HomeScores} - {props.match.AwayScores}
            </li>
          </ul>
        </td>
        <td>{props.match.AwayTeam.name}</td>
        <td>{props.match.RefereeTeam.name}</td>
      </tr>
    );
  };

  const Rendermatch = () => {
    return fixtureFiltered.map((match) => {
      return <Match match={match} key={match.id} />;
    });
  };

  return (
    <div>
      <div className="content my-2">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card card-outline card-dark shadow">
                <div className="card-header table-shadow">
                  <div className="row my-3">
                    <div className="col-12 text-center ">
                      <div
                        className="btn-group btn-group-toggle"
                        data-toggle="buttons"
                      >
                        <label className="btn btn-outline-primary active">
                          <input
                            type="radio"
                            name="allStadium"
                            id="allStadium"
                            autoComplete="off"
                            defaultChecked
                            value={0}
                            onClick={(event) => {
                              setStadium(event.target.value);
                            }}
                          />
                          All Stadium
                        </label>
                        <label className="btn btn-outline-primary">
                          <input
                            type="radio"
                            name="stadium1"
                            id="stadium1"
                            autoComplete="off"
                            value={1}
                            onClick={(event) => {
                              setStadium(event.target.value);
                            }}
                          />
                          Stadium 1
                        </label>
                        <label className="btn btn-outline-primary">
                          <input
                            type="radio"
                            name="stadium2"
                            id="stadium2"
                            autoComplete="off"
                            value={2}
                            onClick={(event) => {
                              setStadium(event.target.value);
                            }}
                          />
                          Stadium 2
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="table-responsive mat-elevation-z2">
                      <table className="table table-hover table-striped text-center table-fixed ">
                        <thead className="thead-dark">
                          <tr>
                            <th width="15%">Home</th>
                            <th width="15%"></th>
                            <th width="15%">Away</th>
                            <th width="15%">Referee</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Rendermatch()}
                          {/* {fixtureFiltered.map((val) => {
                            return (
                              <tr key={val.id}>
                                <td>{val.homeTeam}</td>
                                <td>
                                  <ul>
                                    <li>{val.kickOffTime}</li>
                                    <li
                                      className="p-0"
                                      style={{
                                        color: "#000080",
                                      }}
                                    >
                                      StdNo. {val.stadiumNumber}
                                    </li>
                                    <li style={{ fontSize: "1.2rem" }}>
                                      {val.homeScores} - {val.awayScores}
                                    </li>
                                  </ul>
                                </td>
                                <td>{val.awayTeam}</td>
                                <td>{val.refereeTeam}</td>
                              </tr>
                            );
                          })} */}
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

export default Fixture;
