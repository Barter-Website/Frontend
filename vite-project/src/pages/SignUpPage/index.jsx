import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import * as styled from './styles';


const SignUpPage = () => {
    const navigate = useNavigate();
    const navigateToSignInPage = () => {
        navigate('/SignInPage');
    }

    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [nickname, setNickname] = useState("");

    const onIdHandler = (e) => {
        setId(e.target.value);
    }
    const onPasswordHandler = (e) => {
        setPassword(e.target.value);
    }
    const onRepeatPWHandler = (e) => {
        setRepeatPassword(e.target.value);
    }
    const onNicknameHandler = (e) => {
        setNickname(e.target.value);
    }

    const SignUp = () => {
        const response = axios.post(
            "http://localhost:8080/api/user/signup",
            {
                "id": id,
                "password": password,
                "repeatPassword": repeatPassword,
                "nickname": nickname
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
        .then(function(response){
            console.log(JSON.stringify(response.data));
            navigateToSignInPage();
        })
        .catch(function (error){
            console.log(error);
        })
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
                <styled.InputForm value={id} onChange={onIdHandler}/>
                <styled.FormLabel>비밀번호</styled.FormLabel>
                <styled.InputForm value={password} onChange={onPasswordHandler}/>
                <styled.FormLabel>비밀번호 확인</styled.FormLabel>
                <styled.InputForm value={repeatPassword} onChange={onRepeatPWHandler}/>
                <styled.FormLabel>닉네임</styled.FormLabel>
                <styled.InputForm value={nickname} onChange={onNicknameHandler}/>
                <styled.SignUpBtn onClick={SignUp}>회원가입</styled.SignUpBtn>
                <styled.AlreadyMember>이미 회원이신가요? <span onClick={navigateToSignInPage}>로그인</span></styled.AlreadyMember>
            </styled.SignUpBox>
        </styled.Container>
    )
}

export default SignUpPage;