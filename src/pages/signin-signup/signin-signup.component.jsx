import React from "react";
import "./signin-signup.styles.scss";
import Signin from "../../components/signin/signin.component";
import SignUp from "../../components/signup/signup.component";

export const SinginSignup = () => (
  <div className="sign-in-and-sign-up">
    <Signin />
    <SignUp />
  </div>
);
