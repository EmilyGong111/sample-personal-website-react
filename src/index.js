import React from 'react';
import ReactDOM from 'react-dom/client';
import styled from 'styled-components';
import App from './App';

const Main = styled.div`
  background-color: #f5f5f5;
  font-family: 'Roboto', sans-serif;
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Main>
  <App />
</Main>
);

