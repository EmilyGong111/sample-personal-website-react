import { useEffect, useState } from 'react';
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
// const ACTIVE_PAGE = "BLOG_PAGE";
const App = ()=>{
  const [activePage, setActivePage] = useState("BLOG_PAGE");

  useEffect(()=>{
    console.log(activePage)
  },[activePage])

  return (
    <Container> 
    <Header activePage={activePage} setActivePage={setActivePage}/>
    <Page activePage={activePage}/>
    </Container>
  )
  }

export default App;
