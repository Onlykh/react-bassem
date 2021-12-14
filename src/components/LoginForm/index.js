import { Component } from "react";

import "./index.css";

class LoginForm extends Component {
  submitForm = async (event) => {
    event.preventDefault();
    alert("Hello");
  };

  renderPasswordField = () => {
    return (
      <>
        <label className="input-label" htmlFor="password">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="password-input-field"
          placeholder="Password"
        />
      </>
    );
  };

  renderPasswordForgetField = () => {
    return (
      <>
        <label className="input-label" htmlFor="password">
          Forget Password ?&nbsp;
          <label className="input-forget-label" htmlFor="password">
            Login
          </label>
        </label>
      </>
    );
  };

  renderSignUpField = () => {
    return (
      <>
        <label
          className="input-label"
          style={{
            display: "grid",
            justifyContent: "center",
          }}
          htmlFor="password"
        >
          Forget Password ?&nbsp;
          <label className="signUp-label" htmlFor="password">
            SignUp
          </label>
        </label>
      </>
    );
  };

  renderUsernameField = () => {
    return (
      <>
        <label className="input-label" htmlFor="username">
          Username
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          placeholder="Username"
        />
      </>
    );
  };

  render() {
    return (
      <div className="login-form-container">
        <img
          src="https://uploads-ssl.webflow.com/5ec7dd0442b0cf620756b049/5ec85b6706d25c46030b5b8b_digicare-logo.svg"
          className="login-website-logo-mobile-img"
          alt="website logo"
        />
        <div className="div-img">
          <img
            src="https://www.clipartmax.com/png/full/28-280518_nurse-clipart-png-03-nurse-cartoon-transparent.png"
            className="login-img"
            alt="website login"
          />
        </div>
        <form className="form-container" onSubmit={this.submitForm}>
          <img
            src="https://uploads-ssl.webflow.com/5ec7dd0442b0cf620756b049/5ec85b6706d25c46030b5b8b_digicare-logo.svg"
            className="login-website-logo-desktop-img"
            alt="website logo"
          />
          <div className="input-container">{this.renderUsernameField()}</div>
          <div className="input-container">{this.renderPasswordField()}</div>
          <div className="input-container">
            {this.renderPasswordForgetField()}
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
          <div className="input-container">{this.renderSignUpField()}</div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
