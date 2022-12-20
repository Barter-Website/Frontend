import styled from 'styled-components';
import bartericon from '../../img/barter.svg';
import mypageicon from '../../img/mypageicon.svg';
import likeicon from '../../img/likeicon.svg';
import basketicon from '../../img/basketicon.svg';
import underarrow from '../../img/underarrow.svg';
import searchicon from '../../img/searchicon.svg';

export const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 45px;
    margin-bottom: 32px;
`;

export const BarterMark = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const BarterIcon = styled.img.attrs({
    src: bartericon,
})``;

export const BarterName = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 9px;

    > span:nth-child(1){
        font-family: 'JosefinSans-Bold';
        font-style: normal;
        font-weight: 600;
        font-size: 31px;
        line-height: 31px;
        color: #FFC43F;
    }

    > span:nth-child(2){
        font-family: 'Apple SD Gothic Neo';
        font-style: normal;
        font-weight: 300;
        font-size: 13px;
        line-height: 16px;
        letter-spacing: 0.4em;
        color: #818181;
    }
`;

export const SearchBox = styled.div`
    width: 1121px;
    height: 49px;
    margin-left: 66px;

    background: #F9F9F9;
    border: 1px solid #F8F8F8;
    border-radius: 4px;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    > span{
        font-family: 'OpenSans-Regular';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: #222222;
        margin-left: 43px;
    }

    #VerticalLine {
        width: 1.72px;
        height: 24px;
        background: #DEDEDE;
        margin-left: 53px;
    }
`;

export const Mypage = styled.img.attrs({
    src: mypageicon,
})`
    margin-left: 63px;
`;

export const Basket = styled.img.attrs({
    src: basketicon,
})`
    margin-left: 36px;
`;

export const Like = styled.img.attrs({
    src: likeicon,
})`
    margin-left: 36px;
`;

export const UnderArrow = styled.img.attrs({
    src: underarrow,
})`
    margin-left: 100px;
`;

export const SearchIcon = styled.img.attrs({
    src: searchicon,
})`
    margin-left: 740px;
`;