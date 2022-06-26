import React, { createContext, useState } from 'react';
import LoginBtnBox from './LoginBtnBox';
import LoginInputBox from './LoginInputBox';

export const ValidationContext = createContext();
export const InputValueContext = createContext();

const LoginComponent = () => {
  const [inputValue, setInputValue] = useState({
    email: '',
    passwd: '',
  });

  const [validate, setValidate] = useState({
    email: false,
    emailBlur: true,
    passwd: false,
    passwdBlur: true,
  });

  return (
    <ValidationContext.Provider value={{ validate, setValidate }}>
      <InputValueContext.Provider value={{ inputValue, setInputValue }}>
        <LoginInputBox validateType="email" />
        <LoginInputBox validateType="passwd" />
        <LoginBtnBox />
      </InputValueContext.Provider>
    </ValidationContext.Provider>
  );
};

export default LoginComponent;
