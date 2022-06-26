import React from 'react';
import styled from 'styled-components';
import FeedComponent from '../components/feed';
import Gnb from '../components/gnb';

const Feed = () => {
  return (
    <FeedContainer>
      <Gnb />
      <FeedWrapper>
        <FeedComponent />
      </FeedWrapper>
    </FeedContainer>
  );
};

export default Feed;

const FeedContainer = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const FeedWrapper = styled.main`
  background-color: #fafafa;
  display: flex;
  flex-grow: 1;
  justify-content: center;
`;
