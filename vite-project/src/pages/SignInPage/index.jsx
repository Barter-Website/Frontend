import React, { useState } from 'react';
import * as styled from './styles';
import hand_money from '../../assets/hand_money.png'
import hand_refuse from '../../assets/hand_refuse.jpg'
import eyeoff from '../../assets/eyeoff.png'

const SignInPage = () => {
  return(
    <styled.container>
      <styled.LoginImageContainer>
        <img className='hand_money' src={hand_money}/>
        <div className='textContainer'>
          <h1>BARTER</h1>
          <div className='instruction'>돈 없이 거래하는<br/><br/></div>
          <div className='instruction'>물물교환으로<br/><br/></div>
          <div className='instruction'>새로운 물건을 얻어보세요</div>
        </div>
        <img className='hand_refuse'src={hand_refuse}/>
      </styled.LoginImageContainer>

      <styled.LoginInputContainer>
        <div className='loginContainer'>
          <h1>로그인</h1>
          <div className='instruction'>로그인 후 서비스를 이용해주세요</div>
          <div className='inputTitle'>아이디</div>
          <input className='idInput'></input>
          <div className='inputTitle'>비밀번호</div>
          <div className='pwInputContainer'>
            <input className='eyeoff'></input>
            <div className='eyeoffImage'>
              <img src={eyeoff}/>
            </div>
          </div>
          <div className='findPw'>비밀번호 찾기</div>
          <button>로그인</button>
          <div className='signUpContainer'>
            <div className='signUpQ'>아직 회원이 아니신가요?</div>
            <div className='signUp'>회원가입</div>
          </div>
        </div>
      </styled.LoginInputContainer>
    </styled.container>
  )
}

export default SignInPage;