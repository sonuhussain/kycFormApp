import React, { Component } from "react";
//import Data from "./data";

class ContentTable extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.obj._id}</td>
        <td>{this.props.obj.firstname}</td>
        <td>{this.props.obj.gender}</td>
        <td>{this.props.obj.dob}</td>
        <td>{this.props.obj.phone}</td>
      </tr>
    );
  }
}

export default ContentTable;

/* export default function ContentTable() {
  return (
    <div>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">S.No.</th>
            <th scope="col">First Name</th>
            <th scope="col">Gender</th>
            <th scope="col">DOB</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          {Data.users.map((item, i) => (
            <tr key={i}>
            <td>{i+1}</td>
              <td>{item.firstname}</td>
              <td>{item.gender}</td>
              <td>{item.dob}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} */
