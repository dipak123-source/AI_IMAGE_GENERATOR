import React, {useEffect, useState} from 'react';
import Searchbar from '../components/Searchbar';
import ImageCard from '../components/ImageCard';
import styled from 'styled-components';
import { GetPosts } from '../api';
import { CircularProgress } from '@mui/material';

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
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [filteredPost, setFilteredPost] = useState([]);

  const getPosts = async ()=>{
    setLoading(true);
    await GetPosts()
    .then((res)=>{
      setPosts(res?.data?.data);
      setFilteredPost(res?.data?.data);
      setLoading(false);
    })
    .catch((error)=>{
      setError(error?.response?.data?.message);
      setLoading(false);
    });
  };

  useEffect(()=>{
    getPosts();
  },[]);

  useEffect(()=>{
    if(!search) {
      setFilteredPost(posts);
    }
    const filteredPosts = posts.filter((post)=>{
      const promptMatch = post?.prompt?.toLowerCase().includes(search);
      const authorMatch = post?.author?.toLowerCase().includes(search);

      return promptMatch || authorMatch;
    });

    if(search) {
      setFilteredPost(filteredPosts);
    }
  },[posts, search]);
  return (
    <Container>
      <Headline>Explore popular post in the Community !
        <Span>⦿ Generate with AI ⦿</Span>
      </Headline>
      <Searchbar 
      search={search}
      handelChange={(e) => setSearch(e.target.value)}
      />
      <Wrapper>
        {error && <div style={{color: "red"}}>{error}</div>}
        {loading ? (
          <CircularProgress />
        ) : (
        <CardWrapper>
          {filteredPost.length > 0 ? (
            <>
            {filteredPost
            .slice()
            .reverse()
            .map((item,  index) => (
              <ImageCard key={index} item={item}/>
            ))}
            </>
          ) : (
            <>No Posts Found !!</>
          )}  
        </CardWrapper>)}
      </Wrapper>
    </Container>
  )
}

export default Home;
