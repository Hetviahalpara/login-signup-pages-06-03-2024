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
              <div className="text-center">
                <div>
                  <h2>Login</h2>
                  {/* <p>Get Started With Your Free Account</p> */}
                </div>
              </div>
              <div>
                <div className="d-grid gap-2">
                  <button className="btn btn-info" type="button">
                    Login via Twitter
                  </button>
                  <button className="btn btn-primary" type="button">
                    Login Via Facebook
                  </button>
                </div>
              </div>
              <div className="mt-3 justify-content-center d-flex position-relative">
                <p className="line">OR</p>
              </div>
              <form>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="fa-regular fa-envelope"></i>
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email address"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  ></input>
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="basic-addon1">
                    <i className="fa-regular fa-eye-slash"></i>
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="password"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  ></input>
                </div>
              </form>
              <div>
                <div className="d-grid gap-2">
                  <button className="btn btn-primary" type="button">
                    Login
                  </button>
                </div>
              </div>
              <div className="mt-3 justify-content-center d-flex">
                <p>
                  <Link
                    to="/"
                    onClick={this.props.pageChange}
                    className="primary text-decoration me-1"
                  >
                    Create
                  </Link>
                  an account?{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}
export default Createacc;
