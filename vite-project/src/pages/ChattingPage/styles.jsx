import styled from 'styled-components';
import profileimg from '../../img/profileimg.svg';
import phillip from '../../img/phillip.svg';
import chatmenu from '../../img/chatmenu.svg';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    color: black;
`;

export const ChattingBox = styled.div`
    display: flex;
    border-top: 1px solid #666666;
    border-bottom: 1px solid black;
    width: 1920px;
    height: 940px;
`;

export const ChatList = styled.div`
    display: flex;
    flex-direction: column;
    width: 359px;
    border-right: 1px solid #666666;
`;

export const MyProfile = styled.div`
    height: 105px;
    border-bottom: 1px solid #666666;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    > span {
        margin-left: 17px;
        font-family: 'Roboto-Bold';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 21px;

        color: #52585D;
    }
`;

export const ProfileImg = styled.img.attrs({
    src: profileimg,
})`
    width: 50px;
    height: 50px;
    margin-left: 21px;
`;

export const ChatRoomSelected = styled.div`
    height: 105px;
    /* border-bottom: 1px solid #666666; */
    /* background: #F2F3F6; */
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const ChatRoomImg = styled.div`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: 21px;
    margin-right: 17px;
`;

export const Phillip = styled.img.attrs({
    src: phillip,
})``;

export const ChatRoomNameAndMsg = styled.div`
    width: 190px;
    display: flex;
    flex-direction: column;

    > span:nth-child(1) {
        font-family: 'Roboto-Bold';
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 18px;
        color: #6A6E72;
    }

    > span:nth-child(2) {
        font-family: 'Roboto-Regular';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 15px;
        color: #96A9BA;
        margin-top: 5px;
    }
`;

export const ChatRoomDate = styled.div`
    font-family: 'Roboto-Regular';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 12px;
    color: #96A9BA;
`;

export const Chatting = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: flex-end; */
    /* justify-content: flex-end; */
`

export const ChattingTop = styled.div`
    width: 1562px;
    height: 105px;
    border-bottom: 1px solid #666666;
    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const ChattingTopName = styled.div`
    font-family: 'Roboto-Bold';
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 18px;
    color: #6A6E72;
    margin-left: 10px;
`;


export const ChattingBoxInnerDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 1562px;
    height: 835px;
`;

export const ChatDate = styled.div`
    width: 131.92px;
    height: 31px;
    left: 1081px;
    top: 544px;
    background: #6588DE;
    border-radius: 14px;
    margin-left: 722px;
    margin-bottom: 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    > span {
        font-family: 'OpenSans-Regular';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 18px;
        color: #FDFDFE;
    }
`;

export const MyChat = styled.div`
    width: auto;
    height: 58px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 51px;

    > span {
        font-family: 'Roboto-Regular';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 12px;
        color: #666666;
        margin-top: 35px;
        margin-right: 10px;
    }
`;  

export const MyChatProfileImg = styled.img.attrs({
    src: profileimg,
})`
    width: 55px;
    height: 55px;
    margin-left: 10px;
`;

export const MyChatBubble = styled.div`
    width: auto;
    max-width: 300px;
    min-height: 58px;
    height: auto;
    background: #F3BA4A;
    border-radius: 14px 0px 14px 14px;
    padding: 0px 20px 0px 20px;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const OtherChat = styled.div`
    width: auto;
    height: 58px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 51px;

    > span {
        font-family: 'Roboto-Regular';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 12px;
        color: #666666;
        margin-top: 35px;
        margin-right: 10px;
    }
`;

export const OtherChatBubble = styled.div`
    width: auto;
    max-width: 300px;
    min-height: 58px;
    height: auto;
    padding: 0px 20px 0px 20px;
    margin-left: 10px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #E3F6FC;
    border-radius: 0px 14px 14px 14px;
`;

export const BetweenChat = styled.div`
    height: 50px;
`;

export const ChattingFooter = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    margin-top: 40px;
    margin-bottom: 20px;
`;

export const ChatMenu = styled.img.attrs({
    src: chatmenu,
})``;

export const InputDiv = styled.div`
    width: 1403px;
    height: 50px;

    display: flex;
    align-items: center;
    position: relative;
`;

export const InputBox = styled.input`
    width: 1403px;
    height: 50px;
    background: #FDFDFD;
    border: 1px solid rgba(150, 169, 186, 0.7);
    border-radius: 14px;

    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 26px;

    color: black;
    font-family: "OpenSans-Regular";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;

    padding-left: 10px;
    outline-style: none;
`;

export const SendBtn = styled.div`
    width: 104.54px;
    height: 53px;
    background: #6588DE;
    border-radius: 14px;
    position: absolute;
    right: 0px;

    display: flex;
    align-items: center;
    justify-content: center;

    font-family: "OpenSans-Bold";
    font-style: normal;
    font-weight: 600;
    font-size: 17px;
    color: white;
`;