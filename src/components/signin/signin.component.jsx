import React from "react";
import "./signin.styles.scss";
import { CustomButton } from "../custom-button/custom-button.component";
import { FormInput } from "../form-input/form-input.component";
import { signInWithGoogle, auth } from "../../firebase/firebase.utils";

class Signin extends React.Component {
  constructor() {
    super();
    this.state = { email: "", password: "" };
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: "", password: "" });
    } catch (error) {
      console.error(error)
    }

  };

  render() {
    console.log(this.state.email);
    return (
      <div className="sign-in">
        <h2>I already have an acccount</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            label="Email"
            handleChange={this.handleChange}
            required
          />

          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            label="Password"
            handleChange={this.handleChange}
            required
          />

          {/* <input
            name="email"
            type="email"
            value={this.state.email}
            required
            onChange={this.handleChange}
          />
          <label>Email:</label>
          <input
            name="password"
            type="password"
            value={this.state.password}
            required
            onChange={this.handleChange}
          />
          <label>Password:</label> */}
          <div className='buttons'>
            <CustomButton type="submit"  >
              SIGN IN
            </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn='true'>
              Sign In With Google
          </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default Signin;
