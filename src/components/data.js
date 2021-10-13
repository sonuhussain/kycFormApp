import React, { Component } from "react";

import axios from "axios";

import ContentTable from "./ContentTable";
export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { serverports: [] };
  }
  componentDidMount() {
    axios
      .get("http://localhost:8000/serverport")
      .then((response) => {
        this.setState({ serverports: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  tabRow() {
    return this.state.serverports.map(function (object, i) {
      return <ContentTable obj={object} key={i} />;
    });
  }
  render() {
    return (
      <div className="container-fluid">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">S.No.</th>
              <th scope="col">First Name</th>
              <th scope="col">Gender</th>
              <th scope="col">DOB</th>
              <th scope="col">Phone</th>
            </tr>
          </thead>
          <tbody>{this.tabRow()}</tbody>
        </table>
      </div>
    );
  }
}
