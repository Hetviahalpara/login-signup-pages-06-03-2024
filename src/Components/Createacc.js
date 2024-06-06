import React, { Component } from "react";
import { Link } from "react-router-dom";

class Createacc extends Component {
  constructor(props) {
    super(props);

    this.props = props;
  }
  render() {
    return (
      <>
        <section className="container">
          <div className="row mt-5 ">
            <div className="col-12 w-50 mx-auto ">
              <div className="justify-content-center d-flex">
                <div>
                  <h2>Create Account</h2>
                  <p>Get Started With Your Free Account</p>
                </div>
              </div>
              <div>
                <div className="d-grid gap-2">
                  <button
                    className="btn btn-info"
                    onClick={this.props.googleHandler}
                    type="button"
                  >
                    Signup Via Google
                  </button>
                  <button className="btn btn-primary" type="button">
                    Signup Via Facebook
                  </button>
                </div>
              </div>
              <div className="mt-3 justify-content-center d-flex position-relative">
                <p className="line">OR</p>
              </div>
              <form onSubmit={this.props.submit}>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="fa-regular fa-envelope"></i>
                  </span>
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    placeholder="Email address"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  ></input>
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="fa-regular fa-eye"></i>
                  </span>
                  <input
                    name="password"
                    type="password"
                    className="form-control"
                    placeholder="Create password"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  ></input>
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="fa-regular fa-eye-slash"></i>
                  </span>
                  <input
                    name="repassword"
                    type="password"
                    className="form-control"
                    placeholder="Repeat password"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  ></input>
                </div>
                <div>
                  <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="submit">
                      Create Account
                    </button>
                  </div>
                </div>
              </form>

              <div className="mt-3 justify-content-center d-flex">
                <p>
                  Have an account?{" "}
                  <Link
                    to="/login"
                    onClick={this.props.pageChange}
                    className="primary text-decoration"
                  >
                    log in
                  </Link>
                </p>
              </div>
              <h3>{this.props.errMessage}</h3>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default Createacc;
