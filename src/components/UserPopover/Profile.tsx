import React, { useState, useContext } from "react";
import styled from "styled-components";
import Avatar from './Avatar'


const Profile: React.FunctionComponent<{}> = () => {
 
  return (
    <ProfileStyled>
      <Avatar/>
      <div>User Avatar</div>
      <div>User ID</div>
      <div>User Email</div>
      <div>User PhoneNumber</div>
    </ProfileStyled>
  );
};

const ProfileStyled = styled.div`
  height: 100vh;
  border: 6px solid black;
`;

export default Profile;
