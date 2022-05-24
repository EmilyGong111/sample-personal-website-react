import Item from "./components/Item";
import styled from 'styled-components';

const Navbar = styled.div`
    display: flex;
`

const Navigation = ({activePage})=>(
    <Navbar>
       <Item href="HOME" active={activePage === "HOME_PAGE"} onClick={console.log("home_page")}>Home</Item>
       <Item href="RESUME" active={activePage === "RESUME_PAGE"} onClick={(event)=>{event.preventDefault(); activePage = "RESUME_PAGE"}}>Resume</Item>
       <Item href="SERVICES" active={activePage === "SERVICE_PAGE"} onClick={(event)=>{event.preventDefault(); activePage = "SERVICE_PAGE"}}>Service</Item>
       <Item href="BLOG" active={activePage === "BLOG_PAGE"} onClick={(event)=>{event.preventDefault(); activePage = "BLOG_PAGE"}}>Blog</Item>
       <Item href="CONTACT" active={activePage === "CONTACT_PAGE"} onClick={(event)=>{event.preventDefault(); activePage = "CONTACT_PAGE"}}>Contact</Item>
    </Navbar>
)

export default Navigation;