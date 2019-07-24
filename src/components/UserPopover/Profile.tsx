import React, { useState, useContext } from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import { MyContext } from "../../App";

const Profile: React.FunctionComponent<{}> = () => {
  const context = useContext(MyContext).state;
  return (
    <ProfileStyled>
      <Avatar />
      <UserStyled>
        <div>User ID: {context.user.username}</div>
        <div>User Email: {context.user.email}</div>
        <div>User PhoneNumber: {context.user.phone}</div>
      </UserStyled>
    </ProfileStyled>
  );
};

const ProfileStyled = styled.div`
  padding: 1em;
  display: flex;
  height: 100vh;
  border: 6px solid black;
`;

const UserStyled = styled.div`
  padding: 1em;
`

export default Profile;
