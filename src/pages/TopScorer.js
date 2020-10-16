import React, { useState, useEffect } from "react";
import axios from "axios";
import { trackPromise } from "react-promise-tracker";

const TopScorer = () => {
  const [playersData, setPlayersData] = useState([]);

  useEffect(() => {
    const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
    const URL = "https://itreuionapi.herokuapp.com/player/";
    trackPromise(
      axios({
        method: "get",
        url: PROXY_URL + URL,
        data: {
          KEY: "VALUE",
        },
      })
        .then((res) => {
          setPlayersData(res.data.player);
          console.log(res.data.player);
        })
        .catch((err) => console.log(err))
    );
  }, []);

  const RenderPlayer = (props) => {
    return (
      <tr>
        <td>{props.renderplayer.Scores}</td>
        <td>{props.renderplayer.FirstNameTh}</td>
        <td>{props.renderplayer.LastNameTh}</td>
        <td>{props.renderplayer.generationId}</td>
      </tr>
    );
  };

  const playerlist = () => {
    return playersData.map((renderplayer) => {
      return <RenderPlayer renderplayer={renderplayer} key={renderplayer.id} />;
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
                  <div className="row">
                    <div className="table-responsive mat-elevation-z2">
                      <table className="table table-hover table-striped text-center table-fixed ">
                        <thead className="thead-dark">
                          <tr>
                            <th width="5%">Scores</th>
                            <th width="15%">ชื่อ</th>
                            <th width="15%">นามสกุล</th>
                            <th width="5%">รุ่น</th>
                          </tr>
                        </thead>
                        <tbody>{playerlist()}</tbody>
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

export default TopScorer;
