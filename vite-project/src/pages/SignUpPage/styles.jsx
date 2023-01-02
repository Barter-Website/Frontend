import styled from 'styled-components';
import mainimg1 from "../../img/mainImg1.png";
import mainimg2 from "../../img/mainImg2.png";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;


export const BodyTextBox = styled.div`
    margin-left: 318px;
    > div {
        font-family: 'Inter';
        font-style: normal;
        color: #000000;

        &:nth-child(1){
            font-weight: 700;
            font-size: 96px;
            line-height: 116px;
            margin-bottom: 28px;
        }

        &:nth-child(2){
            font-weight: 600;
            font-size: 40px;
            line-height: 48px;
        }
        
    }
`;

export const SignUpBox = styled.div`
    width: 600px;
    height: 861px;

    background: rgba(155, 167, 179, 0.21);
    border-radius: 15px;
    margin-top: 110px;
    margin-left: 380px;
    padding: 0 0 0 82px;
    
    display: flex;
    flex-direction: column;
    // align-items: center;
    justify-content: center;
`;

export const SignUpText = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 48px;
    color: #000000;
    // margin-top: 101px;
    margin-bottom: 30px;
`;

export const FormLabel = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
    margin-bottom: 8px;
`;

export const InputForm = styled.input.attrs({
    type: 'text',
})`
    width: 477px;
    height: 52px;

    background: #FFFFFF;
    border: 1px solid rgba(0, 0, 0, 0.21);
    border-radius: 10px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
    margin-bottom: 19px;
    padding-left: 10px;
`;

export const SignUpBtn = styled.button`
    width: 477px;
    height: 54px;
    left: 83px;
    top: 664px;
    background: #4299E1;
    border-radius: 15px;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-top: 26px;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #FFFFFF;
    
`;

export const AlreadyMember = styled.div`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: rgba(0, 0, 0, 0.75);

    margin-top: 17px;
    margin-left: 130px;

    > span {
        color : #4299E1;
        &:hover{
            text-decoration: underline;
            cursor: pointer;
        }
    }
`;

export const MainImg1 = styled.img.attrs({
    src: mainimg1,
})`
    position: absolute;
    width: 491px;
    height: 587px;
    left: 0px;
    top: 486px;
    z-index: -1;
`;

export const MainImg2 = styled.img.attrs({
    src: mainimg2,
})`
    position: absolute;
    width: 481.35px;
    height: 352.01px;
    left: 639px;
    top: 0px;
    z-index: -1;
`;


