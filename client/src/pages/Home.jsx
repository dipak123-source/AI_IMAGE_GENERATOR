import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 100%;
    overflow-y: scroll;
    background: ${({theme}) => theme.bg}
    padding: 30px 30px;
    padding-buttom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    @media (max-width: 768) {
      padding: 6px 10px
    }
`
const Headline = styled.div`
  font-size: 34px;
  font-weight: 500;
  color: ${({theme})=> theme.text_primary};
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 600px) {
    font-size: 22px;
    }
  `
const span = styled.div`
    font-size: 16px;
    font-weight:  400;
    color: ${({theme})=> theme.primary};
`
const Home = () => {
  return (
    <Container>
      <Headline>Explore popular post in the Community !
        <span>Generate with AI</span>
      </Headline>
    </Container>
  )
}

export default Home;
