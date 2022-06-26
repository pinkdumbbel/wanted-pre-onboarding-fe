import React from 'react';
import styled from 'styled-components';

const SearchBox = () => {
  return (
    <SearchContainer>
      <SearchInput placeholder="Search" />
    </SearchContainer>
  );
};

export default SearchBox;

const SearchContainer = styled.div`
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  flex: 0 1 auto;
  width: 268px;
  height: 36px;
  min-width: 125px;
  position: relative;

  @media screen and (max-width: 640px) {
    display: none;
  }
`;

const SearchInput = styled.input`
  background-color: #efefef;
  font-size: 16px;
  padding: 3px 16px;
  border-radius: 8px;
  width: 100%;
  height: 100%;
`;
