import styled from 'styled-components';
import Item from './components/Item';

const Container = styled.div`
    margin: 40px;
`
const Flex = styled.div`
    display: flex;
    justify-content: space-around;
`

const Clients = ({title})=>(
    <Container>
        <h3>{title}</h3>
        <Flex>
            <Item />
            <Item />
            <Item />
        </Flex>
    </Container>  
)
export default Clients;