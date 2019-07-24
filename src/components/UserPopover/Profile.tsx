import React, { useState, useContext } from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import { MyContext } from "../../App";
import { Icon } from "antd";

const Profile: React.FunctionComponent<{}> = () => {
  const context = useContext(MyContext).state;
  return (
    <ProfileStyled>
      <Avatar />
      <UserStyled>
        <UserInfoStyled>
          <h2>
            {" "}
            <Icon type='user' /> ID: {context.user.username}
          </h2>
        </UserInfoStyled>

        <UserInfoStyled>
          <h2>
            {" "}
            <Icon type='mail' /> Email: {context.user.email}
          </h2>
        </UserInfoStyled>

        <UserInfoStyled>
          <h2>
            {" "}
            <Icon type='phone' /> PhoneNumber: {context.user.phone}
          </h2>
        </UserInfoStyled>
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
  margin: 1em;
`;

const UserInfoStyled = styled.div`
  margin: 1em;
`;

export default Profile;
