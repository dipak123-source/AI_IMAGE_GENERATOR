import React, { useState } from "react";
import styled from "styled-components";
import GenerateImageForm from "../components/GenerateImageForm";
import GeneratedImageCard from "../components/GeneratedImageCard";
const Container = styled.div`
    height: 100%;
    overflow-y: scroll;
    background: ${({theme}) => theme.bg}
    padding: 30px 30px;
    padding-buttom: 50px;
    justify-content: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    @media (max-width: 768) {
      padding: 6px 10px
    }
`
const Wrapper = styled.div`
    width: 100%;
    flex: 1;
    height: fix-content;
    max-width: 3400px;
    padding: 32px 0px;
    display: flex;
    gap: 8%;
    @media (max-width: 768px) {
      flex-direction: column;
      }
`
  const CreatePost = () =>{
    const [post,setPost] = useState({
      author: "",
      prompt: "",
      
    })
    return (
        <Container>
          <Wrapper>
            <GenerateImageForm/>
            <GeneratedImageCard loading />
          </Wrapper>
        </Container>
    )
  }

  export default CreatePost;