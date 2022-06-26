import React from 'react';
import styled from 'styled-components';
import FeedComment from './FeedComment';
import FeedCommentForm from './FeedCommentForm';
import FeedIcons from './FeedIcons';
import FeedItemContent from './FeedItemContent';
import FeedItemHeader from './FeedItemHeader';
import FeedLike from './FeedLike';

const FeedItem = ({ feed }) => {
  const { feedId, userName, imageUrl, likes, comments } = feed;
  return (
    <FeedItemBox>
      <FeedItemHeader userName={userName} />
      <FeedItemContent imageUrl={imageUrl} />
      <FeedIcons />
      <FeedLike likes={likes} />
      <FeedComment comments={comments} feedId={feedId} />
    </FeedItemBox>
  );
};

export default FeedItem;

const FeedItemBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid #dfdfdf;
  border-radius: 5px;
  background-color: #fff;
  &:not(:first-child) {
    margin-top: 50px;
  }
`;
