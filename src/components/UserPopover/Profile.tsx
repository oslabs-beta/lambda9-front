import React from "react";
import styled from "styled-components";

const ProfileStyled = styled.div`
  height: 100vh;
  border: 6px solid black;
`;

const Profile: React.FunctionComponent<{}> = () => {
  return (
    <ProfileStyled>profile</ProfileStyled>
  );
};

export default Profile;