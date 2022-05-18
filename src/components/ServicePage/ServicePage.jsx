import styled from 'styled-components';
import Layout from './components/Layout';

const PageContainer = styled.div`
    /* width: 300px; */
    /* height: 300px; */
    background-color: black;
    border-radius: 16px;
    background: white;
    transition: visibility 0.3s, opacity 0.3s ease-in-out;
    box-shadow: 0px 15px 25px 0px rgb(0 0 0 / 10%);
`
const Title = styled.h2`
    padding: 32px 64px;
    background-color: #377e9a;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
    margin-top: 0;
    color: white;
    text-align: center;
    font-size: 44px;
`
const ServicePage = ()=>(
    <PageContainer>
        <Title>Services</Title>
        <Layout title = "My Services"/>
        <Layout title = "Clients"/>
    </PageContainer>
)

export default ServicePage;