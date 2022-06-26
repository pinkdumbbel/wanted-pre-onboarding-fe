import React from 'react';
import styled from 'styled-components';
import { RiHeart3Line } from 'react-icons/ri';
import { RiChat1Line } from 'react-icons/ri';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import { BiBookmark } from 'react-icons/bi';

const FeedIcons = () => {
  return (
    <FeedIconContainer>
      <FeedLeftIconWrapper>
        <RiHeart3Line size={25} />
        <RiChat1Line size={25} />
        <IoPaperPlaneOutline size={25} />
      </FeedLeftIconWrapper>
      <BiBookmark size={25} />
    </FeedIconContainer>
  );
};

export default FeedIcons;

const FeedIconContainer = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
`;

const FeedLeftIconWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
