import React from 'react';
import { SearchOutlined } from '@mui/icons-material';
import styled from 'styled-components';

const SearchBarContainer = styled.div`
max-width: 550px;
display: flex;
width: 100%;
border: 1px solid ${({ theme })=>theme.text_secondary + 90};
border-radius: 8px;
padding: 12px 16px;
cursor: pointer;
gap: 6px;
align-items: center;
`
const Searchbar = ( {search, handelChange}) => {
  return (
    <SearchBarContainer>
        <SearchOutlined sx={{color: "inherit"}}/>
        <input
        type='text'
        placeholder='Search with prompt or name...'
        style={{
          border: 'none',
          outline: 'none',
          width: '100%',
          color: 'inherit',
          fontSize: '16px',
          background: 'inherit',
        }}
        value={search}
        onChange={(e)=>handelChange(e)}
        />
    </SearchBarContainer>
  )
}

export default Searchbar;
