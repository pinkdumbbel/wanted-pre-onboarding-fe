import React from 'react';
import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';

const SearchBox = () => {
  return (
    <SearchContainer>
      <SearchInput />
      <SearchIconContainer>
        <SearchIconWrapper>
          <SearchIconBox>
            <BsSearch />
          </SearchIconBox>
          <SearchText>검색</SearchText>
        </SearchIconWrapper>
      </SearchIconContainer>
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

const SearchIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 16px;
  font-weight: 300;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  text-align: left;
  cursor: text;
`;

const SearchIconWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #8f8f8f;
`;

const SearchIconBox = styled.div`
  margin-right: 12px;
`;

const SearchText = styled.span`
  line-height: 25px;
`;
