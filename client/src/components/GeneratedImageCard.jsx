import { CircularProgress } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    flex: 1;
    display: flex;
    padding: 16px,
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;
    border: 2px dashed ${({ theme})=> theme.yellow+90};
    color: ${({ theme})=> theme.arrow + 80 };
    border-radius: 20px;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 24px;
    background: ${({ theme })=> theme.black + 50};
`
const GeneratedImageCard = ({src,loading}) => {
  return (
    <Container>{
        loading ? ( <>
        <CircularProgress sx={{color: "inherit", width: "20px", height: "20px"}}/>
        Generate Your Image ...</> ) :  src ? (
        <Image src={src} />
      ) : (
        <>Write a prompt to generate image</>
      )}
    </Container>
  )
}

export default GeneratedImageCard;
