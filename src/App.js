import React, { Component } from "react";
import Createacc from "./Components/Createacc";
import Login from "./Components/Login";
// import { Routes, Route } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import app from "./firebase";

const provider = new GoogleAuthProvider();

const auth = getAuth(app);

class App extends Component {
  constructor() {
    super();

    this.state = {
      pageChange: false,
      errMessage: "",
    };
  }
  pageChangeHandler = (e) => {
    // alert("uktgure");
    e.preventDefault();
    this.setState({
      pageChange: !this.state.pageChange,
    });
  };

  registerSubmitHandler = (e) => {
    e.preventDefault();
    // alert("gihgitgugug");
    const email = e.target.email.value;
    const password = e.target.password.value;
    const repassword = e.target.repassword.value;
    console.log(email, password, repassword);

    if (password === repassword) {
      this.setState({
        pageChange: true,
      });
    } else {
      this.setState({
        errMessage: "Password doesn't match...",
      });
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  googleHandler = (e) => {
    e.preventDefault();
    // alert("jhgier");
    signInWithPopup(auth,provider).then((res)=>{
      console.log(res);
    }).catch((err)=>{
      console.log(err);
    }
    )
  }

  render() {
    return (
      <>
        {this.state.pageChange === false ? (
          <Createacc
            pageChange={this.pageChangeHandler}
            submit={this.registerSubmitHandler}
            errMessage={this.state.errMessage}
            googleHandler={this.googleHandler}
          ></Createacc>
        ) : (
          <Login pageChange={this.pageChangeHandler}></Login>
        )}
        {/* <Createacc></Createacc> */}
        {/* <Login></Login> */}
        {/* <Routes>
          <Route path="/" element={<Createacc></Createacc>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
        </Routes> */}
      </>
    );
  }
}

export default App;
