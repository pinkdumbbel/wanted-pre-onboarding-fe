import React, { useContext } from 'react';
import styled from 'styled-components';
import { MdHome } from 'react-icons/md';
import { FiSend } from 'react-icons/fi';
import { CgAddR } from 'react-icons/cg';
import { ImCompass2 } from 'react-icons/im';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi';
import { LoginCheckContext } from '../../App';

const MenuBox = () => {
  const { setIsSigned } = useContext(LoginCheckContext);

  const onLogOut = () => {
    localStorage.removeItem('isSigned');
    setIsSigned(localStorage.getItem('isSigned'));
  };

  return (
    <MenuContainer>
      <MenuWrapper>
        {[MdHome, FiSend, CgAddR, ImCompass2, AiOutlineHeart, BiLogOut].map(
          (Icon, i) => (
            <MenuIconContent
              key={i}
              {...(Icon === BiLogOut && { onClick: onLogOut })}
            >
              <Icon size={25} />
            </MenuIconContent>
          )
        )}
      </MenuWrapper>
    </MenuContainer>
  );
};
export default MenuBox;

const MenuContainer = styled.div`
  display: flex;
  position: relative;
  align-content: cetner;
  align-items: center;
  flex-wrap: wrap;
  justify-content: flex-end;
  flex: 1 0 127px;
`;

const MenuWrapper = styled.div`
  display: flex;
  padding-left: 24px;
`;

const MenuIconContent = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;

  &:not(:first-child) {
    margin-left: 22px;
  }
`;
