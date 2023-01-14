import styled from 'styled-components';

export const container  = styled.div`
    width:1920px;
`;  

export const body = styled.div`
    display:flex;
    flex-direction:vertical;
    color: black;
`;

export const formListContainer= styled.div`
    .selected{
        border:2px solid #4E60FF;
    }
`;

export const formList = styled.div`
    width:510px;
    height:72px;
    border:2px solid #EDEEF2;
    border-radius:20px;
    display:flex;
    margin-bottom:12px;
    .selected{
        background-color:#4E60FF;
    }
`;
export const iconBox = styled.div`
    width:40px;
    height:40px;
    border-radius:10px;
    background-color:#EDEEF2;
    display:inline-block;
    margin:16px 12px 16px 16px;
    img{
        width:24px;
        height:24px;
        line-height:24px;
        margin:8px;
    }
`;
export const textBox =styled.div`
    display:flex;
    flex-direction:column;
    .formTitle{
        font-size:14px;
        line-height:20px;
        margin-top:16px;
        font-weight:bold;
    }
    .formTitleE{
        font-size:13px;
        line-height:18px;
        margin-top:2px;
    }
`;


export const categoryList = styled.button`
    display:flex;
    background-color:transparent;
    flex-direction: column;
    justify-content:center;
    width:218px;
    height:170px;
    border:1px solid #E6E6E6;
    border-radius:18px;
    margin-left:60px;
    margin-top:30px;
    cursor:pointer;
    img{
        width:35px;
        height:35px;
        margin:auto;
    }
    text{
        font-size:20px;
        margin-bottom:20px;
        margin-left:20px;
    }
`;

export const formLists = styled.div`
    margin-left:165px;
    margin-top:39px;
    margin-right:47px;
    width:514px;
    height:300px;
    display:inline-block;
`;

export const title = styled.text`
    display:block;
    width:510px;
    font-weight:bold;
    font-size:20px;
    margin-bottom:28px;
`;

export const postForms = styled.div`
    display:inline-block;
    margin-top:39px;
`;

export const postForm = styled.div`
    width:1050px;
    border-radius:10px;
    border:1px solid #C7C8D2;
    display:flex;
    flex-direction:column;
    display:inline-block;
    margin-bottom:50px;
    text{
        display:block;
    }
    .title{
        font-size:18px;
        font-weight:bold;
        margin-top:36px;
        margin-left:32px;
        margin-bottom:3px;
    }
    .titleE{
        font-size:12px;
        color:#545563;
        margin-left:32px;
    }
    .inputt{
        background-color: white;
        color: black;
    }
    input{
        border-radius:8px;
        border:1px solid #C7C8D2;
        width:500px;
        height:44px;
    
        margin-left:32px;
        margin-bottom:24px;
    }
    .contentInput{
        height:225px;
        width:985px;
        background-color: white;
        color: black;
    }
`;


export const imgInput = styled.div`
    width:926px;
    height:413px;

    border-radius:10px;
    border:1px solid #C7C8D2;
    margin:38px 62px;

    text-align:center;
    line-height:413px;
    font-size:14px;
`;

export const categoryContainer =styled.div`
    display:grid;
    grid-template-columns:repeat(3, 1fr);
    // flex-direction:vertical;
    .selected{
        background-color:#4E60FF;
        color:#ffffff;
    }
`;

export const regionCategory = styled.button`
    padding:12px 16px;
    border:1px solid #4E60FF;
    border-radius:8px;
    margin-left:32px;
    margin-top:35px;
    background-color:#ffffff;
    color:#4E60FF;
    font-size:14px;
    font-weight:bold;
    margin-bottom:50px;
`;