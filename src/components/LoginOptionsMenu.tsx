import React, { useState } from 'react';
import styled from 'styled-components';

const LoginOptionsBtn = styled.h1`
cursor:pointer;
background-color: black;
color:White;
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size: 16px;
font-weight: bold;
margin: 0;
`
const DropdownContentContainer = styled.div`
font-size: 15px;
justify-content: space-between;
flex-direction: column;
`

const StyledLink = styled.a`
color: white;
padding-left: 0.2rem
`

export const LoginOptionsMenu= () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const closeDropdown = (e: React.MouseEvent) => {
    if (!(e.target as HTMLElement).matches('.dropbtn')) {
      setDropdownVisible(false);
    }
  };

  return (
    <div>
      <div className="dropdown">
        <LoginOptionsBtn className="dropbtn" onClick={toggleDropdown}>
          Login Options
        </LoginOptionsBtn>
        <DropdownContentContainer
          className="dropdown-content"
          style={{ display: isDropdownVisible ? 'flex' : 'none' }}
        >
          <StyledLink >Log out</StyledLink>
          <StyledLink >View profile</StyledLink>
        </DropdownContentContainer>
      </div>

      {isDropdownVisible && (
        <div
          onClick={closeDropdown}
        />
      )}
    </div>
  );
};

