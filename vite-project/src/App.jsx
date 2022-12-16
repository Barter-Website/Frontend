import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import DetailPage from './pages/Detailpage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        {/* 회원가입 페이지 */}
        <Route path="/" element={<SignUpPage />} />

        {/* 회원가입 페이지 */}
        <Route path="/signinpage" element={<SignInPage />} />

        {/* 상세 페이지 */}
        <Route path="/detailpage" element={<DetailPage />} />


      </Routes>
    </BrowserRouter>
  );
};

export default App;
