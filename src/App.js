import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Form from "./components/Form";
import Table from "./components/data";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="container-fluid p-0">
          <nav className="navbar navbar-expand-lg navbar-light kyc-navbar">
            <a className="navbar-brand">KYC</a>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={"/createform"} className="nav-link">
                    KYC Form
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/table"} className="nav-link">
                    DataTable
                  </Link>
                </li>
              </ul>

              <hr />
            </div>
          </nav>

          <Switch>
          <Route exact path="/createform" component={Form} />

            <Route path="/table" component={Table} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
