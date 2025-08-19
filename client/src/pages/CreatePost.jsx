import React, { useState } from "react";
import styled from "styled-components";
import GenerateImageForm from "../components/GenerateImageForm";
import GeneratedImageCard from "../components/GeneratedImageCard";
import { Photo } from "@mui/icons-material";
const Container = styled.div`
    height: 100%;
    overflow-y: scroll;
    min-height: 300px;
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
`;
  const CreatePost = () =>{
    const [generateImageLoading, setGenerateImageLoading] = useState(false);
    const [createPostLoading, setCreatePostLoading] = useState(false);
    const [post,setPost] = useState({
      name: "",
      prompt: "",
      Photo: "",
    })
    return (
        <Container>
          <Wrapper>
            <GenerateImageForm post={post} 
            setPost={setPost} 
            createPostLoading = {createPostLoading} 
            setCreatePostloading={setCreatePostLoading}
            generateImageLoading={generateImageLoading}
            setGenerateImageLoading={setGenerateImageLoading}/>
            <GeneratedImageCard src={post.photo} loading={generateImageLoading} />
          </Wrapper>
        </Container>
    )
  }

  export default CreatePost;