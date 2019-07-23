import React, { useContext } from "react";
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
  const context = useContext(MyContext).state.user;
  return (
    <NavContainerStyled>
      <Link to='/'>
        <div className='logo'>🐑 Lambda9</div>
      </Link>
      <NavSearch/>
      <Link to='/functions'>
        <div>Functions</div>
      </Link>
      <Popover content={content}>
        <UserStyled>
          <img style={{ width: "50px", height: "50px" }} src={context.imageUrl} />
          <div>{context.username}</div>
        </UserStyled>
      </Popover>
    </NavContainerStyled>
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

const UserStyled = styled.div`
  display: flex;
  cursor: pointer;
`;

export default NavContainer;
