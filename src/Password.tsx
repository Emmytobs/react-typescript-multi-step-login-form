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
      <label>Enter your username</label> <br />
      <input
        name="username"
        onChange={props.handleChange}
        value={props.password}
      />
      <br />
      <button>Login</button>
      <button onClick={props.goBackToUsername}>Back</button>
    </form>
  );
};
