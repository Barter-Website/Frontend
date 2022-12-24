import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';
import DetailPage from './pages/Detailpage';
import MainPage from './pages/MainPage';
import ChattingPage from './pages/ChattingPage';

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
        
        {/* 메인페이지 */}
        <Route path="/mainpage" element={<MainPage />} />
        
        {/* 채팅페이지 */}
        <Route path="/chattingpage" element={<ChattingPage />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
