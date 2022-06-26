import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { VscSmiley } from 'react-icons/vsc';

const FeedCommentForm = ({ commentList, setCommentList, feedId }) => {
  const textareaRef = useRef();
  const btnRef = useRef();

  const onKeyDown = (e) => {
    if (e.keyCode === 13 && !e.shiftKey) {
      e.preventDefault();
      btnRef.current.click();
    }
  };

  const getUserName = () => {
    return localStorage.getItem('registeredId').split('@')[0];
  };

  const getNextCommentId = () => {
    return Math.max([...commentList.map((comment) => comment.commentId)]) + 1;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!textareaRef.current.value) return;

    const commentId = getNextCommentId();
    const userName = getUserName();
    const commentBody = {
      commentId,
      feedId,
      userName,
      content: textareaRef.current.value,
    };
    setCommentList((prevCommentList) => [...prevCommentList, commentBody]);
    textareaRef.current.value = '';
    textareaRef.current.style.height = '18px';
  };

  const setActiveBtn = (value) => {
    const { current } = btnRef;

    if (!current) return;

    if (value && current.style.opacity !== '1') current.style.opacity = '1';
    if (!value && current.style.opacity !== '0.3')
      current.style.opacity = '0.3';
  };

  const onInputChange = (e) => {
    e.preventDefault();
    const scrollHeight = e.target.scrollHeight;
    e.target.style.height = `${scrollHeight}px`;

    setActiveBtn(e.target.value);
  };

  return (
    <CommentForm onSubmit={onSubmit}>
      <CommentInputContainer>
        <VscSmiley size={25} />
        <CommentInput
          placeholder="댓글 달기..."
          onChange={onInputChange}
          onKeyDown={onKeyDown}
          ref={textareaRef}
        />
        <CommentSubmitButton type="submit" ref={btnRef}>
          게시
        </CommentSubmitButton>
      </CommentInputContainer>
    </CommentForm>
  );
};

export default FeedCommentForm;

const CommentForm = styled.form`
  display: flex;
  padding: 10px;
`;

const CommentInputContainer = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  gap: 10px;
`;

const CommentInput = styled.textarea`
  height: 18px;
  flex-grow: 1;
  background: none;
  border: none;
  max-height: 80px;
  outline: none;
  resize: none;
`;

const CommentSubmitButton = styled.button`
  opacity: 0.3;
  border: 0;
  display: inline-block;
  background: none;
  color: #1e95f6;
  font-weight: bold;
  cursor: pointer;
`;
