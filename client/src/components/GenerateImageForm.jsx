
import React from 'react';
import styled from 'styled-components';
import Button from './button';
import TextInput from './Textinput';
import { AutoAwesome, CreateRounded } from '@mui/icons-material';
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
  const generateImageFun = async ()=>{
    setGenerateImageLoading(true);
  };
  const createPostFun = async ()=>{
    setCreatePostloading(true);
  }
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
        name='name'
        rows='8'
        textArea
        value={post.prompt}
        handelChange={(e)=> setPost({...post, prompt: e.target.value})}
        />
        ** You can post the AI generated Image to the Community **
      </Body>
      <Actions>
        <Button text="Generate Image" 
        flex 
        leftIcon={<AutoAwesome/>}
        isLoading={generateImageLoading}
        isDisabled={post.prompt === ""}
        onClick={()=> generateImageFun()}
        />
        <Button text="Post Image"  
        flex 
        type="secondary" 
        leftIcon={<CreateRounded/>}
        isLoading={createPostLoading}
        isDisabled={post.name === "" || post.prompt === "" || post.photo === ""}
        onClick={()=> createPostFun()}
        />
      </Actions>
    </Form>
  )
}

export default GenerateImageForm;
