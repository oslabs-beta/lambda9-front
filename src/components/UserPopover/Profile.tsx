import React from "react";
import styled from "styled-components";

const Profile: React.FunctionComponent<{}> = () => {
  return <ProfileStyled>profile</ProfileStyled>;
};

const ProfileStyled = styled.div`
  height: 100vh;
  border: 6px solid black;
`;

export default Profile;
