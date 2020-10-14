import _ from "lodash";
import React, { useState, useEffect } from "react";
import { trackPromise } from "react-promise-tracker";
import axios from "axios";

const Table = () => {
  const [dataTable, setDataTable] = useState([])
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
        })
        .catch((err) => console.log(err))
    );
  }, []);


  const TableData = (props) => {
    return(
      <tr>
        <td>{props.render.name}</td>
        <td>{props.render.Played}</td>
        <td>{props.render.Points}</td>
        <td>{props.render.GoalDifference}</td>
      </tr>
    )
  }

  const RenderTable = () => {
    return dataTable.map((render) => {
      return <TableData  render={render} key={render.id} />
    })
  } 
  
  return(
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
                        {RenderTable()}
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
  )









}

export default Table;
