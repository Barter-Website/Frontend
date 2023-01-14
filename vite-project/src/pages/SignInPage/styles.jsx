import styled from 'styled-components';

export const container= styled.div`
    width:1920px;

    display:flex;
    align-items:center;
    justify-content:space-between ;
    
    font-family:inter;
`;

export const LoginImageContainer = styled.div`
    width:1140px;
    height:1080px;

    flex-direction: column;
    display:flex;
    
    .hand_money{
        width:486px;
        height:441px;
    }

    .textContainer{
        margin-left:303px;
    }
    h1{
        width: 200px;
        height:110px;
        
        margin-top:5px;
        margin-bottom:28px;

        font-size:96px;
        font-weight:bold;
        color:black;
    }
    
    .instruction{
        display:inline;

        line-height:10px;
        font-weight:bold;
        font-size:40px;
        color:black;
    }

    .hand_refuse{
        width:400px;
        height:365px;
        margin-left:600px; 
    }
`;

export const LoginInputContainer = styled.div`
    width: 640px;
    height: 650px;
    margin-right:140px;
    
    background: rgba(155, 167, 179, 0.21);
    border-radius: 15px;
    
    .loginContainer{
        padding-top:86px;
        padding-bottom:46px;
        padding-right:82px;
        padding-left:81px;
    }

    h1{
        height: 48px;
        margin:0px;

        font-weight: bold;
        font-size: 40px;
        color:#000000;
        line-height: 48px;
    }

    .instruction{
        margin-bottom:34px;

        font-size:20px;
        color:#999999;
    }

    .inputTitle{
        margin-bottom:8px;

        color:#000000;
        font-size:20px;
    }

    input{
        width: 100%;
        height:52px;
        padding:0px;
        border-radius: 10px;
        box-sizing: border-box;
        border:1px solid rgba(0, 0, 0, 0.21);   
    }

    .idInput{
        margin-bottom:19px;
        background-color: white;
        color: black;
        font-size: 20px;
    }

    .pwInputContainer{
        position:relative;
        margin-bottom:3px;
    }

    .eyeoff{
        background-color: white;
        color: black;
        font-size: 20px;
    }

    .eyeoffImage{
        width:22px;
        height:20px;
        position:absolute;
        top:16px;
        right:17px;
    }

    .findPw{
        margin-bottom:50px;
        
        color:#4299E1;
        font-size:20px;
    }

    button{
        width:100%;
        height:54px;
        border-radius:15px;
        margin-bottom:13px;
        background:#4299E1;

        font-weight:bold;
        color:white;
        font-size:20px;
    }
    
    .signUpContainer{
        width:100%;
        text-align:center;
    }

    .signUpQ{
        display:inline;
    }

    .signUp{
        margin-left:8px;
        display:inline;
        cursor: pointer;
        color:#4299E1;

        &:hover{
            text-decoration: underline;
        }
    }
`;