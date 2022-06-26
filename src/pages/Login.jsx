import React from 'react';
import styled, { css } from 'styled-components';
import LoginComponent from '../components/login';

const Login = () => {
  return (
    <LoginContainer>
      <LoginWrapper>
        <LoginFormContainer>
          <LoginFormWrapper>
            <LoginForm>
              <LoginInputContainer>
                <LoginComponent />
              </LoginInputContainer>
            </LoginForm>
          </LoginFormWrapper>
        </LoginFormContainer>
      </LoginWrapper>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.section`
  min-height: 100vh;
  display: flex;
  flex-grow: 1;
`;

const LoginWrapper = styled.main`
  background-color: #fafafa;
  display: flex;
  width: 100%;
`;

const LoginFormContainer = styled.article`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-top: 150px;
  padding-bottom: 150px;
  flex-grow: 1;
`;

const LoginFormWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  max-width: 350px;
  width: 100%;
  background-color: #fff;
  border: 1px solid #ededed;
  border-radius: 1px;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const LoginInputContainer = styled.div`
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  width: 100%;
`;
