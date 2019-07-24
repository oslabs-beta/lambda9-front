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
  const context = useContext(MyContext).state;
  return (
    <NavContainerStyled>
      <Link to='/'>
        <div className='logo'>⾵ AIRFN</div>
      </Link>
      <NavSearch/>
      <Link to='/functions'>
        <div>Functions</div>
      </Link>
      <Popover content={content}>
        <UserStyled>
          <div>
          <img style={{ width: "2em", height: "2em", marginRight: "10px", borderRadius: '40px' }} src={context.avatar} />
          </div>
          <div>{context.user.username}</div>
        </UserStyled>
      </Popover>
    </NavContainerStyled>
  );
};

const NavContainerStyled = styled.nav`
  font-size: 2rem;
  height: 15vh;
  padding: 0.5em;
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
