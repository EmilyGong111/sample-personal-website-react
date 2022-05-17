import "./Navigation.css";
import Item from "./components/Item";

const Navigation = ()=>(
    <div className="navbar">
       <Item href="HOME" active >Home</Item>
       {/* <Item href="HOME" text="Home" active={true} anyObj={{foo:'bar'}} anyFunction={()=>{console.log('hi')}} /> props传值，如果值是string就用“”包裹，如果值是js statement就用{}包裹值 */}
       <Item href="RESUME" >Resume</Item>
       <Item href="SERVICES" >Service</Item>
       <Item href="BLOG" >Blog</Item>
       <Item href="CONTACT" >Contact</Item>
    </div>
)

export default Navigation;