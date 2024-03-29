import styled from "styled-components";
import './Navbar.css';
import {LoginOptionsMenu} from "./Components/LoginOptionsMenu";

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
            {/* <li className="nav-item">
              <NavItem className="nav-link" aria-current="page" href="#" onClick={()=>onNavigate('view')}>
                View All
              </NavItem>
            </li>
            <li className="nav-item">
              <NavItem className="nav-link" aria-current="page" href="#" onClick={()=>onNavigate('addSubmission')}>
                Add Submission
              </NavItem>
            </li>
            <li className="nav-item">
              <NavItem className="nav-link" aria-current="page" href="#" onClick={()=>onNavigate('handleSubmission')}>
                Handle Submissions
              </NavItem>
            </li>
            <li className="nav-item">
              <NavItem className="nav-link" aria-current="page" href="#" onClick={()=>onNavigate('servertest')}>
                Server Test
              </NavItem>
            </li> */}
            <li className="nav-item">
              <NavItem className="nav-link" aria-current="page" href="#" onClick={()=>onNavigate('newSubTab')}>
                Add Submissions
              </NavItem>
            </li>
            <li className="nav-item">
              <NavItem className="nav-link" aria-current="page" href="#" onClick={()=>onNavigate('test')}>
                  Handle Submissions
                </NavItem>
            </li>
            <li className="nav-item">

              <LoginOptionsMenu></LoginOptionsMenu>

            </li>
          </ul>

        </nav>
        </header>    
    )
}

export default Navbar;