import _ from "lodash";
import React, { useState, useEffect, Fragment } from "react";
import { trackPromise } from "react-promise-tracker";
import axios from "axios";

const Table = () => {
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
    const URL = "https://itreuionapi.herokuapp.com/team/all";
    trackPromise(
      axios({
        method: "get",
        url: PROXY_URL + URL,
        data: {
          KEY: "VALUE",
        },
      })
        .then((res) => {
          setDataTable(res.data.teams);
          _.sortBy(
            dataTable,
            ["Points", "GoalDifference", "Played", "name"],
            ["desc", "desc", "desc", "asc"]
          );
          console.log(res.data.teams);
        })
        .catch((err) => console.log(err))
    );
  }, [dataTable]);

  const TableData = (props) => {
    return (
      <Fragment>
        <tr data-toggle="collapse" data-target={`#demo${props.render.id}`}>
          <td>{props.render.name}</td>
          <td>{props.render.Played}</td>
          <td>{props.render.Points}</td>
          <td>{props.render.GoalDifference}</td>
          <td>
            <i className="fas fa-info-circle" />
          </td>
        </tr>
        <tr id={`demo${props.render.id}`} className="collapse">
          <td colSpan="5">
            <strong>Won :</strong> {props.render.Won}
            <strong> Lost :</strong> {props.render.Lost}
            <strong> Drawn :</strong> {props.render.Drawn}
          </td>
        </tr>
        <tr id={`demo${props.render.id}`} className="collapse">
          <td colSpan="5">
            <strong>GF :</strong> {props.render.GoalFor}
            <strong> GA :</strong> {props.render.GoalAgainst}
          </td>
        </tr>
      </Fragment>
    );
  };

  const RenderTable = () => {
    return dataTable.map((render) => {
      return <TableData render={render} key={render.id} />;
    });
  };

  return (
    <div>
      <div className="content my-2">
        <div className="container-fluid">
          <div className="row ">
            <div className="col-12">
              Click <i className="fas fa-info-circle" /> to see more
              information.
              <div className="card card-outline card-dark shadow ">
                <div className="card-header table-shadow ">
                  <div className="row">
                    <div className="table-responsive mat-elevation-z2">
                      <table className="table table-hover table-striped text-center table-fixed ">
                        <thead className="thead-dark">
                          <tr>
                            <th>Generation</th>
                            <th>Played</th>
                            <th>Points</th>
                            <th>GD</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>{RenderTable()}</tbody>
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
