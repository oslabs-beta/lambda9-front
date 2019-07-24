import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import SignOutButton from "./SignOutButton";
import { MyContext } from "../App";
import { Popover } from "antd";

const NavContainer: React.FunctionComponent<{}> = () => {
  const context = useContext(MyContext).state;
  const content = (
    <div>
      <p style={{ color: "black" }}>ID: {context.user.username}</p>
      <Link to='/profile' style={{ color: "black" }}>
        <p>Profile</p>
      </Link>
      <Link to='/setting' style={{ color: "black" }}>
        <p>Setting</p>
      </Link>
      <SignOutButton />
    </div>
  );
  return (
    <NavContainerStyled>
      <Link to='/' style={{ color: "black", fontSize: "3rem" }}>
        <div className='logo'>⾵ AIRFN</div>
      </Link>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Link
          to='/functions'
          style={{
            color: "black",
            margin: "1em 2em 0em 2em",
            fontSize: "1rem"
          }}>
          <div>Functions</div>
        </Link>
        <Popover content={content}>
          <UserStyled>
            <img
              style={{
                width: "2em",
                height: "2em",
                marginRight: "10px",
                borderRadius: "40px"
              }}
              src={context.avatar}
            />
          </UserStyled>
        </Popover>
      </div>
    </NavContainerStyled>
  );
};

const NavContainerStyled = styled.nav`
  font-size: 1.5rem;
  height: 10vh;
  padding: 0.5em;
  color: black;
  background: white;
  display: flex;
  justify-content: space-between;
  margin: 0em 1em 1em;
`;

const UserStyled = styled.div`
  display: flex;
  cursor: pointer;
`;

export default NavContainer;
