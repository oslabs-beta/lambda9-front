import * as React from "react";
import { Auth } from "aws-amplify";
import { Button } from "antd";

const SignOutButton: React.FunctionComponent = ({ children }) => {
  const signOut = () => {
    Auth.signOut()
      .then(data => console.log(data))
      .catch(err => console.log(err));
  };
  return (
    <Button
      type='primary'
      size='large'
      onClick={signOut}
      style={{ backgroundColor: "black", border: "1px solid black" }}>
      Sign Out
      {children}
    </Button>
  );
};

export default SignOutButton;
