import styled from "styled-components";
import './Navbar.css';
// import {
//     CustomersMajor
//   } from '@shopify/polaris-icons';
// import { Icon } from "@shopify/polaris";

const Navbar=({ onNavigate })=>{
    const NavItem=styled.a`
    color: white;
    padding: 0.9rem;
    text-decoration: none;
    :hover {
      color: #7393B3;
      ;
    }
    `
    return(
        <header>
        <nav className="navbar">
              <ul className="navbar-nav">
            <li className="nav-item">
              <NavItem className="nav-link" aria-current="page" href="#" onClick={()=>onNavigate('login')}>
                Login
              </NavItem>
            </li>
            <li className="nav-item">
              <NavItem className="nav-link" aria-current="page" href="#" onClick={()=>onNavigate('view')}>
                View All
              </NavItem>
            </li>
            <li className="nav-item">
              <NavItem className="nav-link" aria-current="page" href="#" onClick={()=>onNavigate('addSubmission')}>
                Add Submission
              </NavItem>
            </li>
          </ul>

        </nav>
        </header>    
    )
}

export default Navbar;