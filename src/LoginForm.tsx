import React, { Component } from "react";

import Username from "./Username";
import Password from "./Password";

interface AppProps {}
export interface AppState {
  username: string;
  password: string;
  step: number;
}

export default class LoginForm extends Component<AppProps> {
  state: AppState = {
    username: "",
    password: "",
    step: 1
  };

  handleChange = (e: any): void => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e: any): void => {
    e.preventDefault();
  };

  goBackToUsername = e => {
    this.setState({ step: 1 });
  };

  goToPassword = e => {
    this.setState({ step: 2 });
  };

  render() {
    switch (this.state.step) {
      case 1:
        return (
          <Username
            handleChange={this.handleChange}
            username={this.state.username}
            goToPassword={this.goToPassword}
          />
        );
      case 2:
        return (
          <Password
            handleChange={this.handleChange}
            password={this.state.password}
            goBackToUsername={this.goBackToUsername}
            handleSubmit={this.handleSubmit}
          />
        );
    }
  }
}
