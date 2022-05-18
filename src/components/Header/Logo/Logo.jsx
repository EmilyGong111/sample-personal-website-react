// import "./Logo.css";
import styled from 'styled-components';

const LogoStyle = styled.div`
    font-size: 1.5rem;
    font-weight: 500;
`
const Highlight = styled.span`
    color: #377e9a;
`

const Logo = ()=>(
    <LogoStyle>
        <Highlight>Tifa</Highlight>
        Lockhart
    </LogoStyle>
)

export default Logo;