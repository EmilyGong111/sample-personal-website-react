import styled from 'styled-components';
import Header from './components/Header';
import ServicePage from './components/ServicePage';

const Container = styled.div`
  max-width: 1000px;
  margin: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

const App = ()=>(
  <Container> 
    <Header />
    <ServicePage>hello</ServicePage>
    </Container>
)

export default App;
