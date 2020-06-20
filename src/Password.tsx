import React from "react";

interface Props {
  handleChange: (e: any) => void;
  password: string;
  handleSubmit: (e: any) => void;
  goBackToUsername: (e: any) => void;
}

export default (props: Props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <label>Enter your password</label> <br />
      <input
        name="password"
        onChange={props.handleChange}
        value={props.password}
      />
      <br />
      <button onClick={props.goBackToUsername}>Back</button>
      <button>Login</button>
    </form>
  );
};
