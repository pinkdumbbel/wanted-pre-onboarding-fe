import React, { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import FeedCommentForm from './FeedCommentForm';

const FeedComment = ({ comments, feedId }) => {
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    setCommentList(comments);
  }, []);

  if (commentList.length <= 0) return null;

  return (
    <>
      <CommentContainer>
        {commentList.map(({ commentId, userName, content }) => {
          return (
            <CommentWrapper key={commentId}>
              <CommentUserName>{userName}</CommentUserName>
              <CommentContent>{content}</CommentContent>
            </CommentWrapper>
          );
        })}
      </CommentContainer>
      <FeedCommentForm
        commentList={commentList}
        setCommentList={setCommentList}
        feedId={feedId}
      />
    </>
  );
};

export default FeedComment;

const CommentContainer = styled.div`
  padding: 20px 10px 20px 10px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #dfdfdf;
`;

const CommentWrapper = styled.div`
  display: flex;
  gap: 10px;
  font-size: 14px;
`;

const CommentUserName = styled.div`
  font-weight: bold;
`;

const CommentContent = styled.div`
  flex-grow: 1;
  line-height: 18px;
`;
