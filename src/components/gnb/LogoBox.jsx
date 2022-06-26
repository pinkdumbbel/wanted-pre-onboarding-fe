import React from 'react';
import styled from 'styled-components';

const LogoBox = () => {
  return (
    <LogoContainer>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
    </LogoContainer>
  );
};

export default LogoBox;

const LogoContainer = styled.div`
  display: flex;
  flex: 1 0 127px;
  flex-direction: column;
  position: relative;
  align-items: stretch;
`;

const LogoWrapper = styled.div`
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
`;

const Logo = styled.i`
  width: 102px;
  height: 30px;
  display: inline-block;
  background-position: 0 -298px;
  background-image: url('https://static.cdninstagram.com/rsrc.php/v3/y-/r/ZhQcTOjgQ3f.png');
  background-repeat: no-repeat;
`;
