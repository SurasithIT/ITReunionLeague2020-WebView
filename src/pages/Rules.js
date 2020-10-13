import React from "react";

class RuleData {
  constructor(id, desc, remark) {
    this.id = id;
    this.desc = desc;
    this.remark = "";
  }
}

let rules = [];
for (let i = 1; i <= 9; i++) {
  rules.push(
    new RuleData(
      i,
      "Velit cillum sit anim eiusmod id eiusmod incididunt sit minim proident consectetur proident excepteur aute. Irure ipsum cupidatat sunt officia excepteur ut sint eiusmod duis. Eu pariatur irure est ullamco duis enim cillum non. Eiusmod pariatur aliquip qui velit irure"
    )
  );
}
const Rules = () => {
  return (
    <div className="container">
      <div className="table-responsive mat-elevation-z2">
        <table className="table table-hover table-striped text-center table-fixed table-shadow">
          <thead className="thead-dark">
            <tr>
              <th width="80%">Description</th>
              <th width="20%">Remark</th>
            </tr>
          </thead>
          <tbody>
            {rules.map((val) => {
              return (
                <tr key={val.id}>
                  <td>{val.desc}</td>
                  <td>{val.remark}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Rules;
