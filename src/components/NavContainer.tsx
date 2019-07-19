import React from "react";
import styled from "styled-components";
import NavSearch from "./NavSearch";
import { Link } from "react-router-dom";

import SignOutButton from "./SignOutButton";
import { MyContext } from "../App";

import { Popover } from "antd";

const content = (
  <div>
    <Link to='/profile'>
      <p>Profile</p>
    </Link>
    <Link to='/setting'>
      <p>Setting</p>
    </Link>
    <SignOutButton />
  </div>
);

const NavContainer: React.FunctionComponent<{}> = () => {
  return (
    <MyContext.Consumer>
      {context => (
        <NavContainerStyled>
          <Link to='/'>
            <div className='logo'>🐑 Lambda9</div>
          </Link>
          <NavSearch />
          <Link to='/functions'>
            <div>Functions</div>
          </Link>
          <Popover content={content}>
            <div style={{ display: "flex", cursor: "pointer" }}>
              <img
                style={{ width: "50px", height: "50px" }}
                src={context.state.user.avatar}
              />
              <div>{context.state.user.username}</div>
            </div>
          </Popover>
        </NavContainerStyled>
      )}
    </MyContext.Consumer>
  );
};

const NavContainerStyled = styled.nav`
  font-size: 2rem;
  height: 15vh;
  padding: 0.7em;
  color: black;
  background: white;
  display: flex;
  justify-content: space-around;
  border: 6px solid blue;
`;

export default NavContainer;
