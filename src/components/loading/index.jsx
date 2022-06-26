import React from 'react';
import styled from 'styled-components';

const LoadingComponent = () => {
  return (
    <LoadingWrapper>
      <p>로딩중...</p>
    </LoadingWrapper>
  );
};

export default LoadingComponent;

const LoadingWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 500px;
  align-items: center;
  justify-content: center;
`;
