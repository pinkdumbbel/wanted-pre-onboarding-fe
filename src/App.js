import React, { createContext, useState } from 'react';
import Login from './pages/Login';
import { Route, Routes } from 'react-router-dom';
import Feed from './pages/Feed';

export const LoginCheckContext = createContext();

function App() {
  const [isSigned, setIsSigned] = useState(
    Number(localStorage.getItem('isSigned'))
  );

  return (
    <LoginCheckContext.Provider value={{ isSigned, setIsSigned }}>
      <Routes>
        <Route path="/" element={isSigned ? <Feed /> : <Login />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </LoginCheckContext.Provider>
  );
}

export default App;
