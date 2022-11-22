import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* 회원가입 페이지 */}
        <Route path="/" element={<SignUpPage />} />

        {/* 회원가입 페이지 */}
        <Route path="/signinpage" element={<SignInPage />} />


      </Routes>
    </BrowserRouter>
  );
};

export default App;
