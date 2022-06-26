import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import fetchFeeds from '../../api/fetchFeed';
import FeedItem from './FeedItem';

const FeedComponent = () => {
  const [feedItmes, setFeedItems] = useState([]);

  useEffect(() => {
    fetchFeeds().then((feeds) => {
      setFeedItems(feeds);
    });
  }, []);

  if (feedItmes.length <= 0) return null;

  return (
    <FeedItemContainer>
      {feedItmes.map((feed) => (
        <FeedItem key={feed.feedId} feed={feed} />
      ))}
    </FeedItemContainer>
  );
};

export default FeedComponent;

const FeedItemContainer = styled.div`
  max-width: 470px;
  width: 100%;
  padding: 100px 0 100px 0;
  display: flex;
  flex-direction: column;
`;
