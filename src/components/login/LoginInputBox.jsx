import React from 'react';
import styled, { css } from 'styled-components';
import useLogin from '../../hooks/useLogin';

const LoginInputBox = ({ validateType }) => {
  const {
    inputType,
    inputRef,
    placeholder,
    validate,
    onKeyUp,
    onValidateBlur,
  } = useLogin(validateType);

  return (
    <LoginInputWrapper>
      <LoginInputContent validate={validate} validateType={validateType}>
        <LoginInput
          type={inputType}
          placeholder={placeholder}
          ref={inputRef}
          onKeyUp={onKeyUp}
          onBlur={onValidateBlur}
        ></LoginInput>
      </LoginInputContent>
    </LoginInputWrapper>
  );
};

export default LoginInputBox;

const LoginInputWrapper = styled.div`
  margin: 0 40px 6px;
`;

const LoginInputContent = styled.div`
  display: flex;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  width: 100%;
  flex-grow: 1;

  ${({ validate: { emailBlur, passwdBlur }, validateType }) => {
    /*     console.log(`validateType: ${validateType}`);
    console.log(`emailBlur: ${emailBlur}`);
    console.log(`passwdBlur: ${passwdBlur}`); */
    if (
      (validateType === 'email' && !emailBlur) ||
      (validateType === 'passwd' && !passwdBlur)
    ) {
      return css`
        border: 1px solid red;
      `;
    }
  }}
`;

const LoginInput = styled.input`
  width: 100%;
  font-size: 16px;
  height: 36px;
  padding: 9px 0 7px 8px;
  background-color: #fafafa;
`;
