import React, { useState, useEffect } from "react";
import { trackPromise } from "react-promise-tracker";
import axios from "axios";
const Rules = () => {
  const [dataRules, setDataRules] = useState([]);
  useEffect(() => {
    const PROXY_URL = "https://cors-anywhere.herokuapp.com/";
    const URL = "https://itreuionapi.herokuapp.com/rule";
    trackPromise(
      axios({
        method: "get",
        url: PROXY_URL + URL,
        data: {
          KEY: "VALUE",
        },
      })
        .then((res) => {
          setDataRules(res.data.Rule);
          console.log(res.data.Rule);
        })
        .catch((err) => console.log(err))
    );
  }, []);

  const RenderRules = (props) => {
    console.log(props);
    return (
      <tr>
        <td>{props.render.Description}</td>
        <td>{props.render.Remark}</td>
      </tr>
    );
  };

  const rulelist = () => {
    return dataRules.map((render) => {
      return <RenderRules render={render} key={render.id} />;
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
                            <th width="80%">Description</th>
                            <th width="20%">Remark</th>
                          </tr>
                        </thead>
                        <tbody>{rulelist()}</tbody>
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

export default Rules;
