import  { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { EyeIcon } from '../Icons/EyeIcon';
import { SignoutIcon } from '../Icons/SignoutIcon';

const LoginOptionsBtn = styled.h1`
cursor:pointer;
margin-top: 0.9rem;
background-color: black;
color:White;
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size: 16px;
font-weight: bold;

`
const DropdownContentContainer = styled.div`
font-size: 15px;
padding: 0.5rem;
box-shadow: 0 2px 9px rgba(0, 0, 0, 0.2);
border-radius: 5px;
background-color: black;
margin-top: 0.4rem;
justify-content: space-between;
flex-direction: column;
`

const StyledLink = styled.a`
color: white;
cursor:pointer;
padding-left: 0.2rem
`

const ItemContainer = styled.div`
display: flex;
gap: 1rem;
`
export const LoginOptionsMenu = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const dropdownRef = useRef(null);
  
    const toggleDropdown = () => {
      setDropdownVisible(!isDropdownVisible);
    };
  
    const closeDropdown = (e) => {
      const dropdown = dropdownRef.current;
  
      // If the clicked element is outside the dropdown (button or content), close the dropdown
      if (dropdown && !dropdown.contains(e.target)) {
        setDropdownVisible(false);
      }
    };
  
    useEffect(() => {
      document.addEventListener('click', closeDropdown);
      return () => {
        document.removeEventListener('click', closeDropdown);
      };
    }, []);
  
    return (
      <div className="dropdown" ref={dropdownRef}>
        <LoginOptionsBtn className="dropbtn" onClick={toggleDropdown}>
          Login Options
        </LoginOptionsBtn>
        <DropdownContentContainer
          className="dropdown-content"
          style={{ display: isDropdownVisible ? 'flex' : 'none' }}
          onMouseOver={() => setDropdownVisible(true)}
          // kind of annoying when it closes too quickly
        //   onMouseOut={() => setDropdownVisible(false)}
        >
          <ItemContainer>  <SignoutIcon />        <StyledLink>Log out</StyledLink>  </ItemContainer>

          <ItemContainer> <EyeIcon />         <StyledLink>View Profile</StyledLink>  </ItemContainer>

        </DropdownContentContainer>
      </div>
    );
  };
  