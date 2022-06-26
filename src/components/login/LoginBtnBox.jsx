import React from 'react';
import { useContext } from 'react';
import styled, { css } from 'styled-components';
import { InputValueContext, ValidationContext } from '.';
import { LoginCheckContext } from '../../App';

const LoginBtnBox = () => {
  const { validate } = useContext(ValidationContext);
  const { inputValue } = useContext(InputValueContext);
  const { setIsSigned } = useContext(LoginCheckContext);

  const onClick = (e) => {
    e.preventDefault();
    const { email, passwd } = validate;
    if (!email || !passwd) return;

    const registeredId = localStorage.getItem('registeredId');
    const registeredPasswd = localStorage.getItem('registeredPasswd');

    if (registeredId !== inputValue.email) {
      alert('등록된 이메일이 아닙니다.');
      return;
    }

    if (registeredPasswd !== inputValue.passwd) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    localStorage.setItem('isSigned', '1');
    setIsSigned(Number(localStorage.getItem('isSigned')));
  };

  return (
    <LoginInputWrapper>
      <LoginBtn onClick={onClick} validate={validate} type="submit">
        로그인
      </LoginBtn>
    </LoginInputWrapper>
  );
};

export default LoginBtnBox;

const LoginInputWrapper = styled.div`
  margin: 0 40px 6px;
`;

const LoginBtn = styled.button`
  width: 100%;
  padding: 5px 9px;
  color: #fff;
  border-radius: 4px;
  font-weight: bold;
  margin-top: 10px;
  background-color: #b2dffc;
  ${({ validate: { email, passwd } }) => {
    if (email && passwd) {
      return css`
        cursor: pointer;
        background-color: #0095f6;
      `;
    }
  }}
`;
