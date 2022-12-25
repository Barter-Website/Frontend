import React, { useState } from 'react';
import * as styled from './styles';
import Header from '../../components/Header/index.jsx'
import profileImg from '../../assets/profileImg.png'
import edit from '../../assets/edit.png'
import otherProductImage from '../../assets/otherProductImage.png'
import arrowLeft from '../../assets/arrowLeft.png'
import arrowRight from '../../assets/arrowRight.png'
import exchange from '../../assets/exchange.png'

const MyPage = () => {
    return(
        <styled.container>
            <Header/>
            <styled.navContainer>
                <styled.navButton>HOME</styled.navButton>
                <styled.navButton>CHATS</styled.navButton>
                <styled.navButton>ABOUT US</styled.navButton>
                <styled.navButton>COMMUNITY</styled.navButton>
                <styled.navButton>MY PAGE</styled.navButton>
            </styled.navContainer>

            <styled.bodyContainer>
                <styled.infoContainer>
                    <styled.profileImgContainer>
                        <img src={profileImg} />
                        <button className='imgUpload'>이미지 업로드</button>
                        <button className='imgDelete'>이미지 제거</button>
                    </styled.profileImgContainer>
                    <styled.editContainer>
                        <div className='nameEditBox'>
                            <text className='userName'>Wink</text>
                            <img src={edit}/>
                        </div>
                        <div className='editBox'>
                            <text className='inputTitle'>Email:</text>
                            <input className='editInput'/>
                        </div>
                        <div className='editBox'>
                            <text className='inputTitle'>Password:</text>
                            <input className='editInput'/>
                        </div>
                        <div className='editBox'>
                            <text className='inputTitle'>Password Check:</text>
                            <input className='editInput'/>
                        </div>
                    </styled.editContainer>
                </styled.infoContainer>

                <styled.likeContainer>
                    <text className='likeTitle'>Like</text>
                    <styled.likeImageContainer>
                        <img className='arrowLeft' src={arrowLeft}/>
                        <styled.likeImage>
                            <img src={otherProductImage}/>
                            <text className='otherProductName'>Flannel Duvet Cover Set</text>
                        </styled.likeImage>
                        <styled.likeImage>
                            <img src={otherProductImage}/>
                            <text className='otherProductName'>Flannel Duvet Cover Set</text>
                        </styled.likeImage>
                        <styled.likeImage>
                            <img src={otherProductImage}/>
                            <text className='otherProductName'>Flannel Duvet Cover Set</text>
                        </styled.likeImage>
                        <styled.likeImage>
                            <img src={otherProductImage}/>
                            <text className='otherProductName'>Flannel Duvet Cover Set</text>
                        </styled.likeImage>
                        <img className='arrowRight'src={arrowRight}/>
                    </styled.likeImageContainer>
                </styled.likeContainer>

                <styled.historyContainer>
                    <text className='historyTitle'>Trade History</text>
                    <styled.historyContainerBox>
                        <styled.historyLeft>
                            <img src={otherProductImage}/>
                            <text>Checked Duvet Cover Set</text>
                        </styled.historyLeft>
                        <img className='exchange' src={exchange}/>
                        <styled.historyRight>
                            <text>Checked Duvet Cover Set</text>
                            <img src={otherProductImage}/>
                        </styled.historyRight>
                    </styled.historyContainerBox>
                    <styled.historyContainerBox>
                        <styled.historyLeft>
                            <img src={otherProductImage}/>
                            <text>Checked Duvet Cover Set</text>
                        </styled.historyLeft>
                        <img className='exchange' src={exchange}/>
                        <styled.historyRight>
                            <text>Checked Duvet Cover Set</text>
                            <img src={otherProductImage}/>
                        </styled.historyRight>
                    </styled.historyContainerBox>
                    <styled.historyContainerBox>
                        <styled.historyLeft>
                            <img src={otherProductImage}/>
                            <text>Checked Duvet Cover Set</text>
                        </styled.historyLeft>
                        <img className='exchange' src={exchange}/>
                        <styled.historyRight>
                            <text>Checked Duvet Cover Set</text>
                            <img src={otherProductImage}/>
                        </styled.historyRight>
                    </styled.historyContainerBox>
                </styled.historyContainer>
            </styled.bodyContainer>

        </styled.container>
    

    )}
    export default MyPage