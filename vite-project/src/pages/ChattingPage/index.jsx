import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as styled from './styles';

import Header from '../../components/Header';
import chatprofileimg from '../../img/profileimg.svg';

const ChattingPage = () => {
    const ChatExample = () => {
        return (
            <styled.ChatRoomSelected>
                <styled.ChatRoomImg>
                    <styled.Phillip />
                </styled.ChatRoomImg>
                <styled.ChatRoomNameAndMsg>
                    <span>Phillip Torff</span>
                    <span>Thank you Phillip!</span>
                </styled.ChatRoomNameAndMsg>
                <styled.ChatRoomDate>
                    <span>2022/12/22</span>
                </styled.ChatRoomDate>
            </styled.ChatRoomSelected>
        )
    }

    return (
        <styled.Container>
            <Header />
            <styled.ChattingBox>
                <styled.ChatList>
                    <styled.MyProfile>
                        <styled.ProfileImg />
                        <span>나</span>
                    </styled.MyProfile>
                    <ChatExample />
                    <ChatExample />
                    <ChatExample />
                    <ChatExample />
                    <ChatExample />
                    <ChatExample />
                </styled.ChatList>
                <styled.Chatting>
                    <styled.ChattingTop>
                        <styled.ChatRoomImg>
                            <styled.Phillip />
                        </styled.ChatRoomImg>
                        <styled.ChattingTopName>
                            <span>Phillip Torff</span>
                        </styled.ChattingTopName>
                    </styled.ChattingTop>
                    <styled.ChattingBoxInnerDiv>
                        <styled.ChatDate>
                            <span>2022/12/22</span>
                        </styled.ChatDate>
                        <styled.MyChat>
                            <span>15:07</span>
                            <styled.MyChatBubble>
                                <span>hello</span>
                            </styled.MyChatBubble>
                            <styled.MyChatProfileImg />
                        </styled.MyChat>
                        <styled.BetweenChat />
                        <styled.OtherChat>
                            <styled.Phillip />
                            <styled.OtherChatBubble>
                                <span>hello hello hello</span>
                            </styled.OtherChatBubble>
                        </styled.OtherChat>
                    </styled.ChattingBoxInnerDiv>
                    <styled.ChattingFooter>
                        <styled.ChatMenu />
                        <styled.InputDiv>
                            <styled.InputBox>
                                
                            </styled.InputBox>
                            <styled.SendBtn>
                                <span>SEND</span>
                            </styled.SendBtn>
                        </styled.InputDiv>
                    </styled.ChattingFooter>
                </styled.Chatting>
            </styled.ChattingBox>
        </styled.Container>
    )
}

export default ChattingPage;