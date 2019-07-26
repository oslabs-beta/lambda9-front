import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import SignOutButton from './SignOutButton';
import { MyContext } from '../App';
import { Popover } from 'antd';

import { colors } from '../utils/index.js';

const NavContainer: React.FunctionComponent<{}> = () => {
  const context = useContext(MyContext).state;
  const content = (
    <div>
      <p style={{ color: 'black', fontWeight: 700 }}>{context.user.username}</p>
      <Link to="/profile" style={{ color: 'black' }}>
        <p>Profile</p>
      </Link>
      {/* <Link to='/setting' style={{ color: 'black' }}>
        <p>Setting</p>
      </Link> */}
      <SignOutButton />
    </div>
  );
  return (
    <NavContainerStyled>
      <Link to="/" style={{ color: 'black', fontSize: '3rem' }}>
        <div className="logo">
          <span className="character">⾵</span> Airfn
        </div>
      </Link>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}
      >
        <Link
          style={{
            color: 'black',
            fontSize: '1.2rem',
            marginRight: '2rem'
          }}
          className="functions"
          to="/functions"
        >
          Functions
        </Link>
        <Popover content={content}>
          <UserStyled>
            <img
              style={{
                width: '2em',
                height: '2em',
                marginRight: '10px',
                borderRadius: '40px'
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
  .logo {
    font-family: 'Assistant', 'Helvetica', sans-serif;
    font-weight: 300;
  }
  .character {
    color: ${colors.grey};
  }
  .functions a {
    font-size: 1rem !important;
    color: black !important;
  }
  font-size: 1.5rem;
  padding: 0.5em, 0.5em;
  color: black;
  background: white;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0em 1em 1em;
`;

const UserStyled = styled.div`
  display: flex;
  cursor: pointer;
`;

export default NavContainer;
