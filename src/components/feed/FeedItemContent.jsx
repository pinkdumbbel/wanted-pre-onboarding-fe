import React, { Suspense, useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import LoadingComponent from '../loading';

const FeedItemContent = ({ imageUrl }) => {
  const [imgSrc, setImgSrc] = useState('');

  useEffect(() => {
    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      setImgSrc(imageUrl);
    };
  }, []);

  if (!imgSrc) return <LoadingComponent />;
  return (
    <FeedItemContentBox>
      <FeedItemImgContent src={imgSrc} />
    </FeedItemContentBox>
  );
};

export default FeedItemContent;

const FeedItemContentBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FeedItemImgContent = styled.img`
  width: 100%;
`;
