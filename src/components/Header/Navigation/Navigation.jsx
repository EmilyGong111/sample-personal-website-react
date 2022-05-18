import Item from "./components/Item";
import styled from 'styled-components';

const Navbar = styled.div`
    display: flex;
`

const Navigation = ()=>(
    <Navbar>
       <Item href="HOME" active >Home</Item>
       {/* <Item href="HOME" text="Home" active={true} anyObj={{foo:'bar'}} anyFunction={()=>{console.log('hi')}} /> props传值，如果值是string就用“”包裹，如果值是js statement就用{}包裹值 */}
       <Item href="RESUME" >Resume</Item>
       <Item href="SERVICES" >Service</Item>
       <Item href="BLOG" >Blog</Item>
       <Item href="CONTACT" >Contact</Item>
    </Navbar>
)

export default Navigation;