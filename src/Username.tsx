import React from "react";

interface Props {
  handleChange: (e: any) => void;
  username: string;
  goToPassword: (e: any) => void;
}

export default (props: Props) => {
  return (
    <form>
      <label>Enter your username</label> <br />
      <input
        name="username"
        onChange={props.handleChange}
        value={props.username}
      />
      <br />
      <button onClick={props.goToPassword}>Continue</button>
    </form>
  );
};
