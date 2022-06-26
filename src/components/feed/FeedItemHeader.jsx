import React from 'react';
import styled from 'styled-components';
import { FiMoreHorizontal } from 'react-icons/fi';

const FeedItemHeader = ({ userName }) => {
  return (
    <HeaderContainer>
      <HeaderUserProfileWrapper>
        <HeaderUserProfile />
        <HeaderUserText>{userName}</HeaderUserText>
      </HeaderUserProfileWrapper>
      <HeaderUserText />
      <HeaderMoreIcon>
        <FiMoreHorizontal />
      </HeaderMoreIcon>
    </HeaderContainer>
  );
};

export default FeedItemHeader;

const HeaderContainer = styled.div`
  padding: 10px;
  display: flex;
`;

const HeaderUserProfileWrapper = styled.div`
  display: flex;
`;

const HeaderUserProfile = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #d3d3d3;
`;
const HeaderUserText = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  margin-left: 10px;
  font-size: 14px;
  font-weight: bold;
`;

const HeaderMoreIcon = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
