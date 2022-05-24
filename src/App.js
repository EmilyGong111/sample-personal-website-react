import styled from 'styled-components';
import Header from './components/Header';
import Page from './components/Page';

const Container = styled.div`
  max-width: 1000px;
  margin: auto;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
const ACTIVE_PAGE = "BLOG_PAGE";
const App = ()=>(
  <Container> 
    <Header activePage={ACTIVE_PAGE}/>
    <Page activePage={ACTIVE_PAGE}/>
    </Container>
)

export default App;
