import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as styled from './styles';


const SignUpPage = () => {
    const navigate = useNavigate();
    const navigateToViewDocumentPage = () => {
        navigate('/SignInPage');
    }

    return (
        <styled.Container>
            <styled.MainImg1 />
            <styled.MainImg2 />
            <styled.BodyTextBox>
                <div>물물교환</div>
                <div>어떤 물건이든 상관없어요!<br/>
                    다양한 형태의 교환에<br/>
                    참여해보세요.</div>
            </styled.BodyTextBox>
            <styled.SignUpBox>
                <styled.SignUpText>회원가입</styled.SignUpText>
                <styled.FormLabel>아이디</styled.FormLabel>
                <styled.InputForm />
                <styled.FormLabel>비밀번호</styled.FormLabel>
                <styled.InputForm />
                <styled.FormLabel>비밀번호 확인</styled.FormLabel>
                <styled.InputForm />
                <styled.FormLabel>닉네임</styled.FormLabel>
                <styled.InputForm />
                <styled.SignUpBtn>회원가입</styled.SignUpBtn>
                <styled.AlreadyMember>이미 회원이신가요? <span onClick={navigateToViewDocumentPage}>로그인</span></styled.AlreadyMember>
            </styled.SignUpBox>
        </styled.Container>
    )
}

export default SignUpPage;