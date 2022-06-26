import React from 'react';
import styled from 'styled-components';
import LogoBox from './LogoBox';
import MenuBox from './MenuBox';
import SearchBox from './SearchBox';

const Gnb = () => {
  return (
    <GnbContainer>
      <GnbWrapper>
        <GnbContentBox>
          <LogoBox />
          <SearchBox />
          <MenuBox />
        </GnbContentBox>
      </GnbWrapper>
    </GnbContainer>
  );
};

export default Gnb;

const GnbContainer = styled.nav`
  position: relative;
`;

const GnbWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100%;
  border-bottom: 1px solid #dfdfdf;
  background-color: #ffffff;
`;

const GnbContentBox = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  max-width: 975px;
  padding: 0 20px;
  width: 100%;
`;
