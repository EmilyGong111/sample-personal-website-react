import Item from "./components/Item";
import styled from 'styled-components';
import React from "react";

const Navbar = styled.div`
    display: flex;
`

const ITEMS = [
    {title:"Home", page: "HOME_PAGE"},
    {title:"Resume", page: "RESUME_PAGE"},
    {title:"Service", page: "SERVICE_PAGE"},
    {title:"Blog", page: "BLOG_PAGE"},
    {title:"Contact", page: "CONTACT_PAGE"},
]


const Navigation = ({activePage, setActivePage})=>{
    return(
    <Navbar>
       {ITEMS.map(({title, page})=>
        <Item  
            active={activePage === page}
            onClick={(event)=>{
                event.preventDefault()
                setActivePage(page)
        }}>
            {title}
        </Item>
       )}
    </Navbar>
    )
}


export default Navigation;