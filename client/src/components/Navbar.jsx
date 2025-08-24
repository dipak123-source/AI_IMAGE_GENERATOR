import Button from './button'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import AddRounded from '@mui/icons-material/AddRounded';
import ExploreRounded from '@mui/icons-material/ExploreRounded'
import { WebRounded } from '@mui/icons-material';

const Container = styled.div`
  flex: 1;
  background-color: ${({ theme })=> theme.navbar};
  color: ${({ theme })=> theme.menu_text_primary};
  font-size: 22px;
  padding: 14px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  @media only screen and (max-width: 600px){
    padding: 10px 12px;}
`
const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname.split("/");

  const gotoCreatePost = () =>{
    navigate("/post");
  };
  const gottoHome = ()=>{
    navigate("/");    
  }
  return (
    <Container>GenAI
      {
        path[1] === 'post' ? (<Button
        text="Explore Posts" 
        leftIcon={<WebRounded
        style={{ fontSize: "18px"}}
      />}
      onClick={gottoHome}
      type='secondary'
      />)
      :(<Button
        text="create new post" 
        leftIcon={<AddRounded
        style={{ fontSize: "18px"}}
      />}
      onClick={gotoCreatePost}
      />)
      }
    </Container>
  )
}

export default Navbar
