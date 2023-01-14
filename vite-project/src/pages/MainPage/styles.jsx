import styled from 'styled-components';
import leftarrow from '../../img/leftarrow.svg';
import rightarrow from '../../img/rightarrow.svg';
import clothes from '../../img/clothes.svg';
import device from '../../img/device.svg';
import food from '../../img/food.svg';
import furniture from '../../img/furniture.svg';
import sports from '../../img/sports.svg';
import baby from '../../img/baby.svg';
import addbtn from '../../img/addBtn.svg';
import foodimg from '../../img/tomato.svg';
import heart from '../../img/heart.png';
import morebtn from '../../img/morebtn.svg';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    // max-width: 1920px;
    // min-width: 1300px;
    /* height: 100vh; */
    color: black;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const CategoryBox = styled.div`
    // display: flex;
    // align-items: center;
    // justify-content: center;
    width: 1612px;
    // height: 344px;
`;

export const CategoryBoxHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 50px;

    > span:nth-child(1){
        font-family: "Roboto-Bold";
        font-size: 36px;
        font-weight: 600;
    }

    > span:nth-child(2){
        font-family: "Roboto-Regular";
        font-size: 16px;
        font-weight: 400;
        color: #787878;
        margin-left: 1160px;
    }

`;

export const LeftBtn = styled.div`
    width: 38px;
    height: 38px;
    left: 1677px;
    top: 323px;

    background: #F1F1F1;
    border-radius: 10px;
    margin-left: 47px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const RightBtn = styled.div`
    width: 38px;
    height: 38px;
    left: 1728px;
    top: 323px;

    background: #FFC43F;
    border-radius: 10px;
    margin-left: 13px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Leftarrow = styled.img.attrs({
    src: leftarrow,
})``;

export const Rightarrow = styled.img.attrs({
    src: rightarrow,
})``;

export const CategoryList = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;    
`;

export const CategoryItem = styled.div`
    width: 241px;
    height: 245px;
    left: 154px;
    top: 410px;

    background: #FFFFFF;
    border: 1px solid #FBFBFB;
    box-shadow: 0px 5px 22px rgba(0, 0, 0, 0.1);
    border-radius: 16px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor:pointer;

    > span {
        font-family: "Roboto-Regular";
        font-size: 20px;
        font-weight: 400;
        margin-top: 30px;
    }
`;

export const Clothes = styled.img.attrs({
    src: clothes,
})``;

export const Sports = styled.img.attrs({
    src: sports,
})``;

export const Device = styled.img.attrs({
    src: device,
})``;

export const Baby = styled.img.attrs({
    src: baby,
})``;

export const Food = styled.img.attrs({
    src: food,
})``;

export const Furniture = styled.img.attrs({
    src: furniture,
})``;


export const RecentlyProductHeader = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 181px;
    margin-bottom: 20px;
    width: 1612px;

    > span:nth-child(1){
        font-family: "Roboto-Bold";
        font-size: 36px;
        font-weight: 600;
    }
`;

export const SortBy = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 1612px;

    > span{
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 22px;
        color: #858585;

        &:nth-child(1){
            margin-right: 40px;
        }
    }
`;

export const HrLine = styled.div`
    width: 1612px;
    height: 2px;
    background: #F7F7F7;
    margin-top: 8px;
    margin-bottom: 60px;
`;

export const RecentlyProductList = styled.div`
    // display: flex;
    // justify-content: space-between;
    // align-items: center;
    // width: 1612px;
    display:grid;
    grid-template-columns:repeat(5, 1fr);
`;

export const AddItem = styled.div`
    width: 303px;
    height: 404px;
    left: 481px;
    top: 972px;

    background: #FFFFFF;
    border: 1px solid #FBFBFB;
    box-shadow: 0px 5px 22px rgba(0, 0, 0, 0.04);
    border-radius: 16px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const AddBtn = styled.img.attrs({
    src: addbtn,
})``;

export const RecentlyProductItem = styled.div`
    width: 303px;
    height: 404px;
    left: 481px;
    top: 972px;

    background: #FFFFFF;
    border: 1px solid #FBFBFB;
    box-shadow: 0px 5px 22px rgba(0, 0, 0, 0.04);
    border-radius: 16px;
    margin-bottom: 50px;
`;

export const ItemImg = styled.div`
    width: 270px;
    height: 235px;
    left: 498px;
    top: 988px;

    background: #F9F9F9;
    border-radius: 12px;

    margin-top: 16px;
    margin-left: 16.5px;
`;

export const FoodImg = styled.img.attrs({
    src: foodimg,
})``;

export const FoodName = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-left: 17px;

    > span:nth-child(1){
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 25px;
    }

    > span:nth-child(2){
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        color: #717171;
    }

    > span:nth-child(3){
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #9D9D9D;
        margin-top: 20px;
    }
`;

export const LikeBtn = styled.div`
    width: 30px;
    height: 30px;
    left: 738px;
    top: 1332px;

    background: #FFFFFF;
    border: 0.5px solid #EAEAEA;
    border-radius: 50%;

    margin-top: 10px;
    margin-left: 257px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const HeartIcon = styled.img.attrs({
    src: heart,
})`
    width: 16px;
    height: 13px;
`;

export const ViewAllProducts = styled.div`
    font-family: 'OpenSans-Regular';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #787878;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    margin-bottom: 200px;

    cursor:pointer;
`;

export const MoreBtn = styled.img.attrs({
    src: morebtn,
})`
    width: 8px;
    height: 8px;
    margin-top: 11px;
`;