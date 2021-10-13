import React, { Component } from "react";
import axios from "axios";
import "./Form.css"
export default class Form extends Component {
  constructor(props) {
    super(props);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeMaritalStatus = this.onChangeMaritalStatus.bind(this);
    this.onChangeFatherName = this.onChangeFatherName.bind(this);
    this.onChangeSpouseName = this.onChangeSpouseName.bind(this);
    this.onChangeGender = this.onChangeGender.bind(this);
    this.onChangeDOB = this.onChangeDOB.bind(this);
    this.onChangePhone = this.onChangePhone.bind(this);

    this.onChangeAddress = this.onChangeAddress.bind(this);

    this.onChangeCheckbox = this.onChangeCheckbox.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      maritalstatus: "",
      fathername: "",
      spousename: "",
      gender: "",
      dob: "",
      phone: "",
    };
  }
  onChangeFirstName(e) {
    this.setState({
      firstname: e.target.value,
    });
  }
  onChangeGender(e) {
    this.setState({
      gender: e.target.value,
    });
  }
  onChangeDOB(e) {
    this.setState({
      dob: e.target.value,
    });
  }
  onChangePhone(e) {
    this.setState({
      phone: e.target.value,
    });
  }

  onChangeLastName(e) {
    this.setState({
      lastname: e.target.value,
    });
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }
  onChangeFatherName(e) {
    this.setState({
      fathername: e.target.value,
    });
  }
  onChangeSpouseName(e) {
    this.setState({
      spousename: e.target.value,
    });
  }
  onChangeAddress(e) {
    this.setState({
      address: e.target.value,
    });
  }
  onChangeMaritalStatus(e) {
    this.setState({
      maritalstatus: e.target.value,
    });
  }
  onChangeCheckbox(e) {
    this.setState({
      checkbox: e.target.value,
    });
  }
  /* onChangePort(e) {
    this.setState({
      port: e.target.value,
    });
  } */
  onSubmit(e) {
    e.preventDefault();
    const serverport = {
      firstname: this.state.firstname,
      gender: this.state.gender,
      dob: this.state.dob,
      phone: this.state.phone,
    };
    axios
      .post("http://localhost:8000/serverport/add", serverport)

      .then((res) => console.log(res.data));
    this.setState({
      firstname: "",
      lastname: "",
      email: "",
      maritalstatus: "",
      fathername: "",
      spousename: "",
      gender: "",
      dob: "",
      phone: "",
    });
  }
  render() {
    return (
      <div className="container">
        <div>
          <h2 className="heading-main">Welcome to KYC Form</h2>
        </div>
        <form className="main-form-content" onSubmit={this.onSubmit}>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstname"
                placeholder="First Name"
                required
                value={this.state.firstname}
                onChange={this.onChangeFirstName}
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastname"
                placeholder="Last Name"
                value={this.state.lastname}
                onChange={this.onChangeLastName}
                required
                name="lastname"
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="inputEmail4">Email</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                placeholder="Email"
                required
                name="email"
                value={this.state.email}
                onChange={this.onChangeEmail}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="maritalstatus">Marital Status</label>
              <select
                id="maritalstatus"
                className="form-control"
                name="matitalstatus"
                value={this.state.maritalstatus}
                onChange={this.onChangeMaritalStatus}
              >
                <option value="">Choose Marital Status</option>
                <option value="Single">Single</option>
                <option value="Married">Married</option>
                <option value="Divorced">Divorced</option>
              </select>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="fathername">Father's Name</label>
              <input
                type="text"
                className="form-control"
                id="fathername"
                placeholder="Father's Name"
                required
                name="fathername"
                value={this.state.fathername}
                onChange={this.onChangeFatherName}
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="spousename">
                Spouse's Name (If you are married)
              </label>
              <input
                type="text"
                className="form-control"
                id="spousename"
                placeholder="Spouse's Name"
                name="spousename"
                value={this.state.spousename}
                onChange={this.onChangeSpouseName}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-12">
              <p>Please select your Gender</p>
               
              <input
                type="radio"
                className="gender-btn"
                id="male"
                name="gender"
                value="Male"
                onChange={this.onChangeGender}
              />
              <label htmlFor="male">&nbsp;&nbsp;Male&nbsp;&nbsp;</label>
              <input
                type="radio"
                className="gender-btn"
                id="female"
                name="gender"
                value="Female"
                onChange={this.onChangeGender}
              />
                <label htmlFor="female">Female</label> {" "}
              <input
                type="radio"
                id="transgender"
                className="gender-btn"
                name="gender"
                required
                value="Transgender"
                onChange={this.onChangeGender}
              />
                <label htmlFor="transgender">Transgender</label>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="birth">Please select your DOB</label>
              <input
                className="form-control"
                type="date"
                id="birth"
                placeholder="mm/dd/yy"
                name="start"
                name="dob"
                value={this.state.dob}
                onChange={this.onChangeDOB}
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="phonenumber">Mobile Number</label>
              <input
                type="text"
                maxLength="10"
                className="form-control"
                id="phonenumber"
                placeholder="phone nuber"
                required
                name="phone"
                value={this.state.phone}
                onChange={this.onChangePhone}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="inputAddress">Enter Our Address</label>
            {/* <input type="text" className="form-control" id="" placeholder="permanent Address" /> */}
            <textarea
              className="form-control"
              id="inputAddress"
              rows="2"
              required
              name="address"
              value={this.state.address}
              onChange={this.onChangeAddress}
            ></textarea>
          </div>
          <div className="form-group">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="invalidCheck2"
                name="checkbox"
                required
                value={this.state.checkbox}
                onChange={this.onChangeCheckbox}
              />
              <label className="form-check-label" htmlFor="invalidCheck2">
                Agree to terms and conditions
              </label>
            </div>
          </div>
          <div className="submit-btn">
            <button className="btn btn-primary" type="submit">
              Submit form
            </button>
          </div>
        </form>
      </div>
    );
  }
}
