import styled from 'styled-components';
export const container = styled.div`
    width:1920px;
`;

export const headerContainer = styled.div`
    display:flex;
    justify-content:center; 
    width:1920px;
    height:89px;
    margin-top:45px;
`;

export const logoImage = styled.img`
    width:234px;
    height:53px;
    margin-right:66px;
`;

export const customInput = styled.div`
    width:1121px;
    height:49px;
    background:#F8F8F8;
    margin-right:50px;
`;

export const hearderButton = styled.button`
    width:52px;
    height:52px;
    background:#ffffff;
    padding:0px;
    margin-right:10px;

`;

export const headerButtonImage = styled.img`
margin:0px;
.user{
    width:22px;
    height:30px;
}
.bucket{
    width:34px;
    height:34px;
}
.heart{
    width:30px;
    height:28px;
}
`;

export const navContainer = styled.div`
    width:1718px;
    margin:auto;
    height:98px;
    text-align:center;
    border-bottom:1px  solid #323334;
    border-top:1px  solid #323334;
    margin-bottom:68px;
`;

export const navButton = styled.button`
    background:#ffffff;
    width:100px;
    padding:0px;
    margin-right:50px;
    height:19px;
    font-size:16px;
    text-algin:center;
    margin-top:40px;

`;

export const bodyContainer = styled.div`
`;

export const infoContainer = styled.div`
    display:flex;
    margin-bottom:169px;
`;

export const profileImgContainer = styled.div`
    display: flex;
    width: 203px;
    flex-direction:column;
    margin-left:208px;
    margin-right:160px;
    img{
        margin:auto;
        width:120px;
        height:120px;
        margin-bottom:25px;
    }
    .imgUpload{
        width:203px;
        height:54px;
        background-color:#323334;
        color:#ffffff;
        border-radius: 0px;
        borderColor: #323334;
        font-weight: bold;
        font-size: 16px;
        margin-bottom:15px;
    }
    .imgDelete{
        width:203px;
        height:54px;
        background-color:#ffffff;
        color:#000000;
        border-radius: 0px;
        border: 1px solid #323334;
        font-weight: bold;
        font-size: 16px;
    }
`;

export const editContainer = styled.div`
    width:1088px;
    .nameEditBox{
        display:flex;
        margin-bottom:39px;
    };
    .userName{
        font-size:64px;
        color:#323334;
        margin-right:47px;
    }
    .editBox{
        width:1088px;
        display:flex;
        justify-content: space-between;
        align-items:center;
        margin-bottom:15px;
    };
    .inputTitle{
        font-size:24px;
        color:#323334;
    }
    .editInput{
        width:854px;
        height:48px;
        background-color:#ECECEC;
        border-radius:20px;
        border: 0px;
    }
`;

export const likeContainer = styled.div`
    .title{
        margin-left:155px;
        font-size:32px;
    }
`;

export const slideContainer = styled.div`
    margin-left:95px;
    display:flex;
    .footerTitle{
        margin-left:60px;
        font-size:32px;
    }
    .arrow{
        margin-top:250px;
        width:27px;
        height:53px;
        cursor:pointer;
    }
    color: black;
`;
export const imageContainer = styled.div`
    display:flex;
    .otherProductName{
        text-align:center;
    }

`;

export const showContainer = styled.div`
    overflow:hidden;
    display:flex;
    margin-top:50px;
    width:1640px;
    height:700px;
`
export const listImage = styled.div`
    width:380px;
    height:455px;
    margin-right:15px;
    margin-left:15px;
`;

export const historyContainer = styled.div`
    width:1674px;
    margin-Left:123px;
    .historyTitle{
        font-size:32px;
        margin-left:30px;
        display:block;
        margin-bottom:94px;
    }
    .exchange{
        width:54px;
        height:53px;
    }
`;

export const historyContainerBox = styled.div`
    display:flex;
    justify-content: space-between;
    align-items:center;
    height:250px;
    padding-bottom:27px;
    padding-right:32px;
    padding-left:32px;
    border-bottom:1px solid black;
    margin-bottom:38px;
`;
export const historyLeft = styled.div`
    display:flex;
    flex-direction:row;
    height:250px;
    img{
        width:250px;
        height:250px;
        margin-right:36px;
    }
    text{
        margin-top:10px;
        font-size:40px;
        color:#323334;
    }
`;

export const historyRight = styled.div`
    display:flex;
    img{
        width:250px;
        height:250px;
        margin-left:36px;
    }
    text{
        margin-top:210px;
        font-size:40px;
        color:#323334;
    }
`;