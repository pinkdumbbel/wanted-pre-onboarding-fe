import React from 'react';
import styled from 'styled-components';

const FeedLike = ({ likes }) => {
  return (
    <LikeContainer>
      <LikeContent>좋아요 {likes}개</LikeContent>
    </LikeContainer>
  );
};

export default FeedLike;

const LikeContainer = styled.div`
  display: flex;
  flex-grow: 1;
  padding: 10px;
`;

const LikeContent = styled.span`
  font-size: 14px;
  font-weight: bold;
`;
