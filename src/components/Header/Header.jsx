// import React from "react";
// import Logo from "./Logo";
// import "./Header.css";
import styled from 'styled-components';
import Navigation from "./Navigation";
import Logo from "./Logo/Logo";

const Nav = styled.div`
    padding: 15px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
`


const Header = ({activePage}) => (
    <Nav>
        <Logo />
        <Navigation activePage={activePage}/>
    </Nav>
        
)

export default Header;