import React from 'react';
import Searchbar from '../components/Searchbar';
import ImageCard from '../components/ImageCard';
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
const Span = styled.div`
    font-size: 30px;
    font-weight: 800;
    color: ${({theme})=> theme.secondary};
    @media (max-width: 600px) {
      font-size: 18px;}
`
const Wrapper = styled.div`
    width: 100%;
    max-width: 140px;
    padding: 32px 0px;
    display: flex;
    justify-content: center;
`
const CardWrapper = styled.div`
   display: grid;
   gap: 20px;
   @media (min-width: 1200px) {
     grid-template-columns: repeat(4, 1fr);
   }
    @media (min-width: 640px) and (max-width: 1199px) {
     grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 639px) {
     grid-template-columns: repeat(2, 1fr);}
`
const Home = () => {
  const item = {
    photo: "https://images.unsplash.com/photo-1612144431180-2d672779556c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hbGwlMjBzaXplfGVufDB8fDB8fHww",
    author: "Dipak Paswan",
    prompt: "HEY Prompt"
  }
  return (
    <Container>
      <Headline>Explore popular post in the Community !
        <Span>⦿ Generate with AI ⦿</Span>
      </Headline>
      <Searchbar />
      <Wrapper>
        <CardWrapper>
          <ImageCard item={item}/>
        </CardWrapper>
      </Wrapper>
    </Container>
  )
}

export default Home;
