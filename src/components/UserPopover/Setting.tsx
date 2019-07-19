import React from "react";
import styled from "styled-components";

const SettingStyled = styled.div`
  height: 100vh;
  border: 6px solid black;
`;

const Setting: React.FunctionComponent<{}> = () => {
  return (
    <SettingStyled>
        ??? THis is setting
    </SettingStyled>
  );
};

export default Setting;