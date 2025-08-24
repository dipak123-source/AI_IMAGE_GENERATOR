import React from 'react';
import styled from 'styled-components';
import Button from './button';
import TextInput from './Textinput';
import { AutoAwesome, CreateRounded } from '@mui/icons-material';
import {CreatePost,GenerateAIImage} from "../api/index.js";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Form = styled.div`
  flex: 1;
  padding: 16px 20px;
  display: flex;
  flex-direction: column;
  gap: 9%;
  justify-content: center;`

const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

`
const Title = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: ${({ theme})=> theme.text_primary};
`
const Desc = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme})=> theme.text_secondary};
`
const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  font-size: 12px;
  font-weight: 400;
  color: ${({ theme})=> theme.text_secondary}
`
const Actions = styled.div`
  flex: 1;
  display: flex;
  gap: 8px;
`
const GenerateImageForm = ({
  post,
  setPost,
  createPostLoading,
  setCreatePostloading,
  generateImageLoading,
  setGenerateImageLoading,
}) => {
  const navigate = useNavigate();
  const [error,setError] = useState("");

  const generateImageFun = async ()=>{
    setGenerateImageLoading(true);
    setError("");
    await GenerateAIImage({ prompt: post.prompt }).then((res)=>{
      setPost({...post, photo: `data:image/jpge;base64,${res?.data?.photo}`,});
      setGenerateImageLoading(false);
    }).catch((error)=>{
      setError(error?.response?.data?.message);
      setGenerateImageLoading(false);
    });
  };
  const createPost = async ()=>{
    setCreatePostloading(true);
    setError("");
    await CreatePost(post)
    .then((res)=>{
      navigate("/");
      setCreatePostloading(false);
    })
    .catch((error)=>{
      setError(error?.response?.data?.message);
      setCreatePostloading(false);
    });
  };
  return (
    <Form>
      <Top>
        <Title>Generate Image with prompt</Title>
        <Desc>Write your prompt according to the image that you want to generate</Desc>
      </Top>
      <Body>
        <TextInput 
        label="Author"
        placeholder="Enter your name..."
        name='name'
        value={post.name}
        handelChange={(e) => setPost({...post, author: e.target.value})}
        />
        <TextInput 
        label="Image Prompt"
        placeholder="Write a detailed prompt about the image you want to generate..."
        name='prompt'
        rows='8'
        textArea
        value={post.prompt}
        handelChange={(e)=> setPost({...post, prompt: e.target.value})}
        />
        {error && <div style={{ color: "red"}}>{error}</div>}
        ** You can post the AI generated Image to the Community **
      </Body>
      <Actions>
        <Button 
        text="Generate Image" 
        leftIcon={<AutoAwesome/>}
        flex
        isLoading={generateImageLoading}
        isDisabled={post.prompt === ""}
        onClick={(e)=> generateImageFun()}
        />
        <Button 
        text="Post Image"
        flex 
        type="secondary" 
        leftIcon={<CreateRounded/>}
        isLoading={createPostLoading}
        isDisabled={post.name === "" || post.prompt === "" || post.photo === ""}
        onClick={()=> createPost()}
        />
      </Actions>
    </Form>
  )
}

export default GenerateImageForm;